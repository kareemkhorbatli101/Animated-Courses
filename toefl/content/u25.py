# -*- coding: utf-8 -*-
"""Unit 25 — Statistics and Evidence. Volume 3."""
from content._g import gaps

_GT, _GA = gaps(
    'A sample is useful only if the way it was chosen has no connection to the thing being '
    'measured. That sounds obvious and is violated constant{ly}. A survey of reading habits '
    'conducted in a library will overstate how much people read, not because the researchers '
    'are careless but because the recruitment method and the outcome are '
    'relat{ed}. The technical name for this is selection bias, and it cannot be fixed by '
    'increasing the sample s{ize}. A larger biased sample is a more confid{ent} wrong answer. '
    'What fixes it is changing how people enter the study, which is usually harder and always '
    'more expen{sive}.')

_ET, _EA = gaps(
    'Two variables that rise and fall together are correl{ated}, and correlation is a fact '
    'about the numbers rather than about the world. Three explanations are always available '
    'and the data alone cannot choose between them. The first is that A causes B. The second '
    'is that B causes A, which is more often plaus{ible} than people expect: hospitals '
    'contain sick people, and a careless reading makes hospitals look '
    'danger{ous}. The third is that some further variable causes b{oth}, and this is the one '
    'that does the real damage, because the further variable is often somet{hing} nobody '
    'thought to record. Ice cream sales and drowning rise together; neither causes the other '
    'and both follow the temper{ature}. The standard way out is to intervene rather than to '
    'observe. If the experimenter decides who receives the treatment, by assign{ing} people '
    'at random, then nothing about the person can be correlated with the group they end up '
    'in, and the third explanation is removed by construc{tion}. Where intervention is '
    'impossible, which covers most questions worth asking about societies, the alternative is '
    'to measure the obvious further variables and adjust for th{em}, while accepting that the '
    'variables nobody measured remain a real and unquantifiable risk to the conclu{sion}.')

UNIT = dict(
    n=25, vol=3, level='B2',
    title='Statistics and Evidence',
    icons=['chart', 'flask', 'brain'],
    subs=['Sampling and bias', 'Correlation and cause', 'Replication'],
    grammar='Quantification and approximation',
    field='variance, confound, replicate',
    opener_line='Every argument you will read for the rest of your life rests on evidence, '
                'and most of the evidence is quantitative. This unit teaches you to read a '
                'claim about numbers without either believing it or dismissing it — and to '
                'write about quantity with the precision English expects.',
    candos=[
        'I can identify what a study design can and cannot establish.',
        'I can express an approximate quantity at the right level of vagueness.',
        'I can explain why a correlation is not a cause, in one sentence.',
        'I can read a result and ask the right question about the sample.',
        'I can qualify a number without sounding evasive.',
        'I can write a post that supplies a fact the others lacked.',
    ],

    acad=[
        ('variance', 'how spread out a set of values is'),
        ('confound', 'a hidden variable that explains both others'),
        ('replicate', 'to repeat a study and see if it holds'),
        ('assign', 'to put participants into groups'),
        ('placebo', 'a dummy treatment used for comparison'),
        ('attrition', 'participants dropping out before the end'),
        ('spurious', 'looking real but produced by something else'),
        ('robust', 'holding up when the method is varied'),
        ('magnitude', 'how big an effect is, not whether it exists'),
        ('skew', 'a distribution with a long tail on one side'),
        ('outlier', 'a value far from the rest'),
        ('cluster', 'a group of cases close together'),
        ('median', 'the middle value when all are ordered'),
        ('dispersion', 'the general spread of a distribution'),
        ('calibrate', 'to set an instrument against a known standard'),
        ('underpowered', 'too small to detect the effect being sought'),
        ('preregister', 'to publish the plan before collecting data'),
        ('effect size', 'how much difference the treatment made'),
    ],
    family=('replicate', [
        ('replication', 'noun', 'the replication failed to find the effect'),
        ('replicable', 'adjective', 'a replicable result'),
        ('irreplicable', 'adjective', 'an irreplicable finding'),
    ]),
    collocs=[
        ('control for', 'to remove the influence of'),
        ('account for the variance', 'to explain the spread in the data'),
        ('at best', 'under the most favourable reading'),
        ('on average', 'taking all cases together'),
        ('a handful of', 'a very small number of'),
        ('the bulk of', 'most of'),
        ('fall within', 'to be inside a stated range'),
        ('give or take', 'approximately, in either direction'),
        ('bear in mind', 'to keep in view while judging'),
        ('amount to', 'to add up to, in effect'),
    ],
    stance=[
        ('is consistent with', 'the data fit it, without proving it'),
        ('on the whole', 'generally true, with exceptions'),
        ('suggests', 'the evidence leans this way'),
        ('is at best suggestive', 'the writer says the evidence is weak'),
        ('does not follow', 'the writer rejects the inference'),
    ],
    nuance=[
        ('average / median', 'the mean / the middle value'),
        ('significant / large', 'unlikely to be chance / big enough to matter'),
        ('accuracy / precision', 'close to the truth / consistent with itself'),
    ],
    vocab_talk=[
        'Describe a statistic you have seen used misleadingly.',
        'Why does a bigger sample not fix a biased one?',
        'When is an average worse than useless? Give a case.',
        'Should journalists be required to state a sample size?',
    ],
    again=['selection bias', 'control group', 'confidence interval', 'sample size',
           'statistical significance', 'publication bias', 'raw data', 'meta-analysis'],

    r1=dict(
        sub='Sampling and bias',
        skill=('Suffixes on abstract nouns and adverbs',
               ['Most gaps here are -ly on an adverb or -tion / -ence on a process noun.',
                'If the gap follows a verb and ends the clause, it is almost certainly an '
                'adverb.',
                'If it follows the or a and precedes of, it is a noun.']),
        guided_text=_GT, guided=_GA,
        guided_hint='constant{ly} is constantly — it modifies the verb violated, so it must '
                    'be an adverb.'.replace('{', '').replace('}', ''),
        exam_text=_ET, exam=_EA,
    ),

    r2=dict(
        sub='Correlation and cause',
        skill=('Reading a result and its caveat',
               ['A well-written study report states its own limits. Those sentences are '
                'where the questions come from.',
                'Look for: this design cannot establish, we did not measure, participants '
                'were self-selected.',
                'A report with no limitations section is making a stronger claim than its '
                'method supports.']),
        docs=[
            ('notice', 'Research summary · Sleep and academic performance, Northgate 2026', [
                '# What we did',
                'Surveyed 2,140 undergraduates on sleep duration and collected end-of-year '
                'marks with consent.',
                '# What we found',
                '* Students reporting 7 to 8 hours scored on average 4.1 marks higher than '
                'those reporting under 6.',
                '* The association held after controlling for subject, year and entry grades.',
                '# What this does not show',
                '* The design is observational. We did not assign anyone to a sleep schedule.',
                '* Students who sleep less may differ in ways we did not measure, including '
                'paid work hours, which we did not collect.',
                '* Sleep was self-reported for a typical week in March.',
            ], 'notice'),
            ('social', 'Northgate Students Union', '@northgate_su', [
                'University research proves that sleeping 8 hours raises your grades by 4',
                'marks. So the next time someone tells you to pull an all-nighter, show',
                'them the data.',
                '',
                'We are calling on the university to move all deadlines to midday.',
                '',
                '[Reply from @d_ellis_psych] We would love this to be as simple as that.',
                'Our own summary says the design cannot show cause, and we did not collect',
                'hours of paid work, which is the variable I would bet on. Please do quote',
                'us — just not as proof.',
            ], 'h'),
        ],
        guided=[
            ('How many students were surveyed?',
             ('140', '740', '2,140', '4,100'), 2,
             'The method section gives 2,140 undergraduates, which is a large sample and '
             'still an observational one.'),
            ('What was the difference in average marks?',
             ('4.1 marks', '6 marks', '7 marks', '8 marks'), 0,
             'Those reporting 7 to 8 hours scored 4.1 marks higher than those reporting '
             'under 6.'),
            ('What did the researchers control for?',
             ('Paid work', 'Subject, year and entry grades', 'Sleep quality', 'Age'), 1,
             'Those three are listed; paid work is named separately as something they did '
             'not collect.'),
            ('When was sleep measured?',
             ('Across the whole year', 'For a typical week in March',
              'At the end of the year', 'Every week'), 1,
             'Self-reported for a typical week in March, which is both a recall measure and '
             'a single snapshot.'),
        ],
        exam=[
            ('What is wrong with the Students Union post?',
             ('The figure is incorrect', 'It treats an observational finding as proof of cause',
              'The sample was too small', 'It misquotes the researcher'), 1,
             'Proves and raises are causal claims, and the summary says explicitly that the '
             'design cannot show cause.'),
            ('Why does Dr Ellis mention paid work?',
             ('It was the main finding', 'It is a variable that could explain both',
              'Students work too much', 'It was controlled for'), 1,
             'A student working long hours sleeps less and has less study time, which would '
             'produce the association with no causal link between sleep and marks.'),
            ('What does "just not as proof" mean?',
             ('Do not quote the study', 'Quote it as evidence rather than demonstration',
              'The study is unpublished', 'The figure is provisional'), 1,
             'She explicitly invites quotation and objects only to the word that overstates '
             'what the design can deliver.'),
            ('What would be needed to show that sleep causes better marks?',
             ('A larger survey', 'Assigning students to sleep schedules',
              'Measuring sleep more often', 'Controlling for subject'), 1,
             'Intervention removes the confound by construction, which is what the summary '
             'means by saying they did not assign anyone.'),
            ('Which of the study’s own caveats most undermines the Union’s demand?',
             ('Sleep was self-reported', 'The design cannot establish cause',
              'The survey was in March', 'Entry grades were controlled'), 1,
             'The demand rests on moving deadlines changing marks, which requires exactly '
             'the causal link the design cannot supply.'),
            ('What does the phrase "on average" protect the finding from?',
             ('The claim that every student improved',
              'The claim that the sample was biased',
              'The claim that sleep was misreported',
              'The claim that marks were inaccurate'), 0,
             'An average difference is compatible with many individual students showing no '
             'difference or the opposite, which the Union’s wording loses.'),
            ('What is the researcher’s attitude to the Union?',
             ('Hostile', 'Sympathetic but correcting', 'Indifferent', 'Supportive of the demand'), 1,
             'We would love this to be as simple as that opens with agreement about the '
             'goal before the correction about the evidence.'),
        ],
    ),

    r3=dict(
        sub='Replication',
        title='When a Finding Will Not Repeat',
        words=257,
        paras=[
            'In the early 2010s a number of large projects tried to repeat well-known results '
            'in psychology, medicine and economics. The headline outcome was that a '
            'substantial fraction did not replicate: the second study found a much smaller '
            'effect, or none. The reaction divided immediately into two camps, and the '
            'division is more interesting than the result.',

            'The first reading is that the original findings were largely false, produced by '
            'small samples and by the freedom researchers have when analysing data. On this '
            'view the replication projects revealed something that had always been true and '
            'was simply not visible. The second reading is that failure to replicate is not '
            'the same as falsity. Effects can be real and fragile, depending on conditions '
            'the original paper did not record and the replicators could not reproduce. On '
            'the whole both readings have cases that fit them, and the difficulty is that '
            'the two are hard to tell apart from the outside.',

            'What has changed is not the rate at which findings hold up but the apparatus '
            'around them. Preregistration, in which the analysis plan is published before any '
            'data exist, removes the freedom that made the first reading plausible. Larger '
            'samples remove another. Neither tells you whether a given old result was false '
            'or merely fragile, and no procedure can settle that retrospectively. The '
            'practical conclusion is uncomfortable and widely resisted: for a result from '
            'before this apparatus existed, the honest position is that the evidence is at '
            'best suggestive, and that saying so is not an accusation against anybody.',
        ],
        skill=('Reading a text that refuses to pick a side',
               ['Some B2 passages set out two readings and decline to choose. Do not look '
                'for a winner.',
                'The author’s own contribution is usually in the last paragraph: what '
                'follows whichever reading is right.',
                'Expect an item asking what the author concludes, with both readings as '
                'distractors.']),
        guided=[
            ('What did the replication projects find?',
             ('All findings held', 'A substantial fraction did not replicate',
              'Samples were too large', 'Economics fared worst'), 1,
             'The second study found a much smaller effect or none, across a substantial '
             'fraction of the attempts.'),
            ('What is the first reading of the result?',
             ('The originals were largely false', 'The effects are real but fragile',
              'The replications were poorly done', 'The field has improved'), 0,
             'Small samples and analytic freedom producing false positives is the first camp '
             'the passage describes.'),
            ('What is the second reading?',
             ('The originals were fraudulent', 'Real effects can be fragile and condition-dependent',
              'Replication is impossible', 'The projects were too small'), 1,
             'Failure to replicate is not the same as falsity, with unrecorded conditions as '
             'the explanation.'),
            ('The word "fragile" in the second paragraph means',
             ('false', 'easily broken by changed conditions', 'small', 'recent'), 1,
             'The sentence explains it: depending on conditions the original paper did not '
             'record.'),
        ],
        exam=[
            ('What does the author find more interesting than the result?',
             ('The sample sizes', 'The division between the two readings',
              'The choice of fields', 'The response of journals'), 1,
             'The first paragraph ends by saying so directly, and the passage then spends a '
             'paragraph on each camp.'),
            ('What does preregistration remove?',
             ('Small samples', 'The analytic freedom that makes false positives easy',
              'Publication bias', 'The need for replication'), 1,
             'Publishing the plan before the data exist means the analysis cannot be chosen '
             'after seeing the results.'),
            ('What can the new apparatus NOT do?',
             ('Improve future research quality', 'Settle whether an old result was false or fragile',
              'Increase sample sizes', 'Make plans public'), 1,
             'No procedure can settle that retrospectively is stated plainly, and it is the '
             'limit the conclusion rests on.'),
            ('What is the author’s practical conclusion?',
             ('Old results should be discarded',
              'Old results are at best suggestive, and saying so blames nobody',
              'Replication projects should stop',
              'Both readings are wrong'), 1,
             'The last sentence gives both halves: the weak evidential status and the '
             'explicit refusal to treat it as an accusation.'),
            ('Why does the author add "and that saying so is not an accusation"?',
             ('To protect the replicators', 'Because the conclusion is widely resisted as a charge of misconduct',
              'To criticise journals', 'To introduce a new argument'), 1,
             'Widely resisted immediately precedes it, and the resistance being addressed is '
             'the reading of weak evidence as blame.'),
            ('What does "on the whole both readings have cases that fit them" imply?',
             ('Neither reading is ever right', 'The two coexist in the literature',
              'The first reading is stronger', 'The question has been settled'), 1,
             'It grants real examples to each camp, which is why the author then says they '
             'are hard to tell apart from outside.'),
            ('All of the following are named as fixes EXCEPT:',
             ('Preregistration', 'Larger samples', 'Publishing raw data',
              'Nothing else is named'), 2,
             'Raw data publication is never mentioned; only preregistration and sample size '
             'appear as parts of the new apparatus.'),
            ('What is the author’s tone towards researchers whose work did not replicate?',
             ('Accusatory', 'Deliberately non-accusatory', 'Dismissive', 'Admiring'), 1,
             'The final clause exists to forestall the accusatory reading, which is a '
             'deliberate choice rather than a neutral one.'),
            ('Which finding would best support the second reading?',
             ('That replications used smaller samples',
              'That effects reappear when an unrecorded condition is restored',
              'That original authors preregistered',
              'That journals reject null results'), 1,
             'Fragility means the effect is real under conditions the replication did not '
             'reproduce, so restoring the condition and recovering the effect is the test.'),
        ],
    ),

    l1=dict(
        sub='Sampling and bias',
        caption='A student and a supervisor discussing a survey plan',
        skill=('Hearing a plan being improved rather than rejected',
               ['A supervisor rarely says no. They ask a question that makes the problem '
                'visible.',
                'Items ask what the problem was, which is usually never named directly.',
                'The student’s revised plan at the end tells you what they understood.']),
        warm=[
            ('Man: I am going to survey people in the library.',
             ('Who will you miss by doing that?', 'The library closes at ten.',
              'Yes, that is a survey.', 'About two hundred.'), 0,
             'A supervisor’s question that exposes the sampling problem without stating it.'),
            ('Woman: How large does the sample need to be?',
             ('That depends on the effect you expect.', 'About the library.',
              'Yes, quite large.', 'In March.'), 0,
             'A how-large question has no answer in the abstract, and the reply names what '
             'it depends on.'),
            ('Man: Could I just survey more people instead?',
             ('More of the same people will not help.', 'Yes, as many as you like.',
              'It takes about ten minutes.', 'The form is online.'), 0,
             'A proposal to fix bias with size, corrected by pointing at what size does not '
             'change.'),
        ],
        script=[
            ('Man', 'I am going to survey people in the library about how much they read.'),
            ('Woman', 'Who will you miss by doing that?'),
            ('Man', 'People who are not in the library. But I will get a few hundred, so —'),
            ('Woman', 'Finish the sentence.'),
            ('Man', 'So the numbers will be... Ah. The people who are not in the library are '
                    'the people who read least.'),
            ('Woman', 'And what does a larger sample do about that?'),
            ('Man', 'Nothing. It makes me more confident about the wrong number.'),
            ('Woman', 'Right. This is the thing people find hardest and you have just got it '
                      'in thirty seconds, so hold on to it. What could you do instead?'),
            ('Man', 'Email everyone on a course list?'),
            ('Woman', 'Better. Who replies to emails about reading?'),
            ('Man', 'People who read. I cannot win.'),
            ('Woman', 'You cannot win completely. You can do much better than a library. '
                      'Email everyone, report your response rate honestly, and say in the '
                      'write-up which direction the remaining bias probably runs in. That is '
                      'what a professional does — not eliminating bias, but bounding it.'),
            ('Man', 'So the response rate goes in the results, not in the appendix.'),
            ('Woman', 'In the results. It is a finding.'),
        ],
        items=[
            ('What is wrong with surveying in the library?',
             ('The sample is too small', 'The place of recruitment relates to the thing measured',
              'Students are busy there', 'The library is closed in March'), 1,
             'People not in the library read least, so where you recruit is correlated with '
             'the outcome.'),
            ('What does the man realise about a larger sample?',
             ('It takes too long', 'It makes him more confident about the wrong number',
              'It is more expensive', 'It would need ethics approval'), 1,
             'He says it in his own words, which is why the supervisor tells him to hold on '
             'to it.'),
            ('What problem does emailing a course list still have?',
             ('It is slow', 'People who read are more likely to reply',
              'It reaches too few', 'It needs permission'), 1,
             'The supervisor asks who replies to emails about reading, and the man supplies '
             'the answer himself.'),
            ('What does the supervisor say a professional does?',
             ('Eliminates bias', 'Bounds bias and reports it', 'Avoids surveys',
              'Uses larger samples'), 1,
             'Not eliminating bias, but bounding it is her formulation, and it is the lesson '
             'of the whole conversation.'),
            ('Where should the response rate appear?',
             ('In the appendix', 'In the results', 'In the method only',
              'It need not be reported'), 1,
             'She corrects his guess firmly and calls the response rate a finding in its own '
             'right.'),
            ('What does "you cannot win completely" concede?',
             ('The survey should be abandoned', 'Some bias will remain whatever he does',
              'The sample will be too small', 'Email is a poor method'), 1,
             'She grants that no recruitment method is neutral, and then distinguishes that '
             'from doing nothing about it.'),
            ('What is the supervisor’s manner?',
             ('Dismissive', 'Socratic — she asks rather than tells',
              'Impatient', 'Uninterested in the topic'), 1,
             'Almost every one of her turns is a question, and the man reaches each '
             'conclusion himself.'),
        ],
    ),

    l2=dict(
        sub='Correlation and cause',
        caption='An announcement about a research briefing for journalists',
        poster=['Reporting Research · Thursday 14.00, Room B2',
                'For student journalists and society press officers',
                'Bring a story you have written'],
        skill=('Hearing what a session will and will not cover',
               ['A session description that lists exclusions is telling you what the '
                'audience usually expects wrongly.',
                'Listen for: this is not a session about, we will not be covering.',
                'The exclusion often reveals the real purpose.']),
        warm=[
            ('Woman: Is this session about writing headlines?',
             ('No — it is about what a study can support.', 'Yes, at two o’clock.',
              'About forty people.', 'In Room B2.'), 0,
             'A yes/no about content is corrected and replaced with the actual subject.'),
            ('Man: Do I need to bring anything?',
             ('A story you have already written.', 'It lasts an hour.',
              'Yes, it is useful.', 'Room B2.'), 0,
             'A do-I-need question wants the item, which the poster also names.'),
            ('Woman: Is it only for journalism students?',
             ('Society press officers too.', 'Yes, on Thursday.',
              'About two hours.', 'It is free.'), 0,
             'A question about eligibility is answered by naming the other group included.'),
        ],
        script=[
            ('Woman', 'A note about Thursday’s session on reporting research. First, what it '
                      'is not. It is not a session about writing better headlines, and it is '
                      'not media training. We will not be telling you to be more cautious, '
                      'because being more cautious is not a skill and usually produces worse '
                      'copy. What it is: one afternoon on the difference between what a study '
                      'design can support and what a press release says it supports. We will '
                      'take three real examples, including one from this university that went '
                      'badly wrong in October, and work out exactly where the claim slipped. '
                      'Bring a story you have written — your own, not somebody else’s — '
                      'because the second half is you doing it to your own work, which is '
                      'uncomfortable and much more useful. It is open to student journalists '
                      'and to society press officers, and I would particularly encourage the '
                      'press officers, because in practice you are the ones writing the first '
                      'version of the claim. If the first version is right, the rest usually '
                      'follows.'),
        ],
        items=[
            ('What is the session NOT about?',
             ('Study design', 'Writing better headlines', 'Press releases',
              'Real examples'), 1,
             'She names headlines and media training as the two things the session is not, '
             'before saying what it is.'),
            ('Why does the speaker reject "be more cautious" as advice?',
             ('It is too difficult', 'It is not a skill and produces worse writing',
              'It is already taught', 'Editors dislike it'), 1,
             'She gives both reasons in one clause, which is why the session teaches a '
             'distinction instead.'),
            ('What will participants do in the second half?',
             ('Write a new story', 'Apply the method to their own work',
              'Interview a researcher', 'Read three press releases'), 1,
             'You doing it to your own work is how she describes it, and she calls it '
             'uncomfortable and more useful.'),
            ('Who does the speaker particularly encourage?',
             ('Journalism students', 'Society press officers', 'Researchers',
              'Editors'), 1,
             'She singles them out and gives a reason: they write the first version of the '
             'claim.'),
            ('Why does the first version matter most?',
             ('It is the longest', 'Later versions usually follow it',
              'It is the only one researchers see', 'It is published first'), 1,
             'If the first version is right, the rest usually follows is her stated reason '
             'for the priority.'),
            ('What does "went badly wrong in October" refer to?',
             ('A session that was cancelled', 'A real example from this university',
              'A complaint from a researcher', 'A failed study'), 1,
             'It is one of the three real examples she says the session will take apart.'),
        ],
    ),

    l3=dict(
        sub='Replication',
        caption='A lecture on the replication crisis',
        board=['Did not replicate ≠ false',
               'False vs fragile: hard to separate',
               'Preregistration removes analytic freedom',
               'Nothing fixes the old literature'],
        skill=('Following a talk that resists a popular conclusion',
               ['A B2 lecturer often argues against the version of the story the audience '
                'already has.',
                'Listen for: the way this is usually told; what everybody took from it.',
                'The correction is the content, and it usually comes with a concession '
                'first.']),
        warm=[
            ('Man: So most psychology findings are false?',
             ('That is one reading, and it is not the only one.', 'Yes, about half.',
              'In the 2010s.', 'Psychology is a science.'), 0,
             'An overstated version of the finding, met with a hedge that opens the '
             'distinction the talk is about.'),
            ('Woman: What does preregistration actually change?',
             ('It fixes the analysis plan before the data exist.', 'It is published online.',
              'Yes, it helps.', 'About ten years ago.'), 0,
             'A what-does-it-do question wants the mechanism, which the other options avoid.'),
            ('Man: Can we go back and check the old studies?',
             ('Not in a way that settles it, no.', 'Yes, they are archived.',
              'About forty of them.', 'They were published earlier.'), 0,
             'A can-we question answered with the limit, which is the talk’s uncomfortable '
             'conclusion.'),
        ],
        script=[
            ('Man', 'The way this is usually told is that a lot of published findings turned '
                    'out to be false, and that the field had been fooling itself. I want to '
                    'complicate that, and I want to start by conceding most of it. The '
                    'analytic freedom was real. If you can choose which outcome to report '
                    'after you have seen the data, you will find effects that are not there, '
                    'and you will do it without any dishonest intention whatever. That is '
                    'established and it is not in dispute. Here is the complication. Failure '
                    'to replicate is consistent with the original being false, and it is also '
                    'consistent with the original being real but fragile — dependent on some '
                    'condition that nobody wrote down because nobody knew it mattered. Both '
                    'happen. And from outside, in a particular case, they look identical. Now '
                    'the part that people resist. Preregistration and bigger samples fix the '
                    'future. They do nothing at all for the existing literature, because you '
                    'cannot preregister a study that has already been run. So for a result '
                    'from before all this, the honest description is that the evidence is at '
                    'best suggestive. People hear that as an accusation and it is not one. It '
                    'is a statement about what we are entitled to conclude, and it does not '
                    'follow from it that anybody behaved badly.'),
        ],
        items=[
            ('What does the speaker concede at the start?',
             ('That replication is impossible', 'That analytic freedom produced false effects',
              'That samples were large enough', 'That the field was dishonest'), 1,
             'He grants it explicitly and calls it established and not in dispute before '
             'introducing the complication.'),
            ('What is the "complication" he introduces?',
             ('Replications used different samples',
              'Failure to replicate fits both falsity and fragility',
              'Preregistration is expensive',
              'Journals reject null results'), 1,
             'Both are consistent with the same observation, and he adds that from outside '
             'they look identical.'),
            ('What does he say about dishonest intention?',
             ('It was common', 'The effect arises without it',
              'It explains most failures', 'It cannot be detected'), 1,
             'You will do it without any dishonest intention whatever is the point of the '
             'concession, and it sets up the later refusal to accuse.'),
            ('What do preregistration and larger samples fix?',
             ('The existing literature', 'The future', 'Publication bias',
              'Fragile effects'), 1,
             'He is explicit that they do nothing at all for work already done, because the '
             'plan cannot be registered retrospectively.'),
            ('What is "the part that people resist"?',
             ('That the field improved', 'That nothing can repair the old literature',
              'That samples were small', 'That journals are at fault'), 1,
             'He flags the resistance immediately before the claim that the new apparatus '
             'cannot reach back.'),
            ('How does the speaker describe old results?',
             ('False', 'At best suggestive', 'Fully reliable', 'Fraudulent'), 1,
             'That is his chosen formulation, and he then spends the closing lines defending '
             'it against being heard as blame.'),
            ('What does "it does not follow from it that anybody behaved badly" do?',
             ('Introduces a new argument', 'Blocks an inference listeners tend to draw',
              'Concedes the opposite view', 'Names a specific researcher'), 1,
             'He has just said people hear it as an accusation, and this sentence rejects '
             'that inference directly.'),
        ],
    ),

    sp=[
        dict(
            sub='Sampling and bias',
            focus='saying numbers and ranges clearly at speed',
            skill=('Repeating a sentence containing figures',
                   ['Numbers are where repetition breaks down. Say the digits at the same '
                    'pace as the words around them.',
                    'Two thousand one hundred and forty — practise the whole group, not '
                    'digit by digit.',
                    'A range needs both ends stressed: between SIX and EIGHT hours.']),
            repeat=[
                'The sample was large.',
                'Two thousand students replied.',
                'Those sleeping seven to eight hours scored higher.',
                'The difference was about four marks on average.',
                'A larger sample does not fix a biased one.',
                'Roughly a third of those invited replied, which is a good rate for a survey of this kind.',
                'The response rate belongs in the results rather than the appendix, because it tells the reader which direction the remaining bias runs in.',
            ],
            theme='surveys, evidence and everyday decisions',
            qs=[
                'Thanks for joining me. To start, have you ever been asked to fill in a '
                'survey? Did you complete it?',
                'Response rates to surveys have fallen a great deal. Why do you think people '
                'stopped answering, and does it matter?',
                'Now your opinion. Should a news report be required to state how many people '
                'a survey asked? Why or why not?',
                'A final question. If a government wants to know what people think, is a '
                'survey the best way to find out? What else could it do?',
            ],
            model=[(2, 'Partly because we are asked constantly now, and partly because it '
                       'used to feel like a civic thing and now it feels like marketing. It '
                       'matters because the people who still answer are not a cross-section.'),
                   (3, 'Yes, and the response rate too. A number without a denominator is '
                       'not information, and most readers would understand that immediately '
                       'if it were ever shown to them.')],
            selfcheck=['I said the numbers at the same pace as the rest.',
                       'I stressed both ends of a range.',
                       'I gave a reason, not only a position.'],
        ),
        dict(
            sub='Correlation and cause',
            focus='the rising intonation of a hypothetical',
            skill=('Offering an alternative explanation out loud',
                   ['The move is: that could also be explained by. Said well it sounds '
                    'constructive; said badly it sounds like contradiction.',
                    'Keep the intonation open. A falling tone on the alternative makes it a '
                    'correction rather than a suggestion.',
                    'Always name the variable. A vague other factors adds nothing.']),
            repeat=[
                'Two things can rise together.',
                'That does not make one the cause.',
                'Something else may be causing both.',
                'Ice cream sales and drowning both follow the temperature.',
                'A student working long hours sleeps less and studies less.',
                'That could also be explained by paid work, which the study did not collect.',
                'If the experimenter decides who gets the treatment, nothing about the person can be correlated with the group they end up in.',
            ],
            theme='evidence in public argument',
            qs=[
                'Thank you for taking part. First, do you remember a claim in the news that '
                'you later found out was wrong?',
                'People often say that correlation is not causation, and then argue as if it '
                'were. Why is the mistake so hard to avoid?',
                'Now an opinion question. Should scientists write the press releases about '
                'their own work? Why or why not?',
                'One last question. If a true finding is likely to be misunderstood, should '
                'it still be publicised? Why?',
            ],
            model=[(2, 'Because the causal story is usually the interesting one, and the '
                       'alternative explanations are boring. We remember the story and forget '
                       'the caveat attached to it.'),
                   (3, 'I would say yes with an editor. Researchers know what the study can '
                       'support and are frequently terrible at writing a first sentence '
                       'anybody will read.')],
            selfcheck=['I named a specific alternative variable.',
                       'I kept the intonation open rather than corrective.',
                       'I answered the question that was asked.'],
        ),
        dict(
            sub='Replication',
            focus='pausing to concede, then continuing',
            skill=('Conceding most of an argument and still disagreeing',
                   ['The strongest spoken move at B2: grant the bulk of the other case '
                    'before you narrow it.',
                    'It needs a pause after the concession so the listener registers it.',
                    'Then mark the turn clearly: here is the complication.']),
            repeat=[
                'A lot of findings did not repeat.',
                'Analytic freedom was real.',
                'That is established and not in dispute.',
                'Failure to replicate is not the same as being false.',
                'An effect can be real and still depend on something nobody recorded.',
                'Preregistration and larger samples fix the future and do nothing for the past.',
                'Saying that the evidence is at best suggestive is a statement about what we may conclude, not an accusation against anybody.',
            ],
            theme='trust, error and self-correction',
            qs=[
                'Thanks for your time. To begin, is there a field whose findings you trust '
                'more than others? Why that one?',
                'When a field publicly admits a problem, some people trust it more and some '
                'less. Which reaction do you have, and why?',
                'Now your opinion. Should a journal publish studies that find nothing? Why or '
                'why not?',
                'And finally. If correcting the record damages public trust in the short '
                'term, is it still the right thing to do? Why?',
            ],
            model=[(2, 'More, on the whole. A field that can say it got something wrong has '
                       'a mechanism for finding out, and one that never says it is either '
                       'perfect or not looking.'),
                   (3, 'Yes, and I would go further: a field that only publishes what worked '
                       'cannot tell how often things work, which is the number everybody '
                       'actually needs.')],
            selfcheck=['I conceded clearly before I narrowed.',
                       'I paused after the concession.',
                       'I marked the turn so the disagreement was audible.'],
        ),
    ],

    w1=dict(
        sub='Questions about evidence',
        skill=('Build a Sentence with a quantity inside',
               ['Several items carry a quantity phrase: how many, how much, what proportion. '
                'These behave like any other wh- word.',
                'The quantity phrase stays together as one block: how much of it, what '
                'proportion of them.',
                'Inside a clause the order is still a statement.']),
        guided=[
            ('The survey reached two thousand students.',
             ['know', 'do', 'you', 'what', 'of them', 'proportion', 'replied', 'actually', 'in the end'],
             'Do you know what proportion of them actually replied in the end?'),
            ('The study controlled for subject and entry grades.',
             ['us', 'told', 'nobody', 'which', 'else', 'variables', 'they', 'for', 'controlled'],
             'Nobody told us which other variables they controlled for.'),
            ('My supervisor asked about the response rate.',
             ['she', 'where', 'to know', 'wanted', 'it', 'in the write-up', 'was', 'going', 'exactly'],
             'She wanted to know exactly where it was going in the write-up.'),
        ],
        exam=[
            ('A substantial fraction of studies did not replicate.',
             ['whether', 'do', 'know', 'you', 'that', 'means', 'they', 'were false', 'actually'],
             'Do you know whether that actually means they were false?'),
            ('The press release said the study proved it.',
             ['to know', 'nobody', 'seems', 'who', 'the first', 'wrote', 'version', 'actually', 'of it'],
             'Nobody seems to know who actually wrote the first version of it.'),
            ('Preregistration fixes the analysis plan in advance.',
             ['explain', 'can', 'anybody', 'how', 'that', 'helps', 'exactly', 'to me', 'at all'],
             'Can anybody explain to me exactly how that helps at all?'),
            ('The effect was four marks on average.',
             ['know', 'does', 'anybody', 'how much', 'that', 'varied', 'between subjects', 'actually', 'at all'],
             'Does anybody know how much that actually varied between subjects at all?'),
            ('The session is open to press officers too.',
             ['told', 'she', 'us', 'why', 'she', 'wanted', 'them', 'there', 'particularly'],
             'She told us why she particularly wanted them there.'),
            ('Students who sleep less may differ in other ways.',
             ['whether', 'tell', 'can', 'me', 'you', 'paid work', 'was', 'at all', 'measured'],
             'Can you tell me whether paid work was measured at all?'),
            ('The sample came entirely from the library.',
             ['the extent', 'to which', 'is', 'that', 'matters', 'something', 'nobody', 'has', 'measured'],
             'The extent to which that matters is something nobody has measured.'),
        ],
    ),

    w2=dict(
        sub='Correlation and cause',
        to='su-comms@northgate.edu',
        date='03/03/2027',
        subject='Sleep study post — a correction worth making',
        scenario=[
            'The Students Union has posted that university research "proves" sleeping eight '
            'hours raises grades by four marks, and is using it to campaign for midday '
            'deadlines. The research summary says the design cannot show cause. You support '
            'the campaign but think the post will be taken apart.',
            'Write an email to the Union communications team.',
        ],
        bullets=['Say that you support the campaign.',
                 'Explain precisely what is wrong with the claim.',
                 'Offer wording that keeps the campaign and loses the error.'],
        skill=('Correcting an ally',
               ['Correcting someone on your own side needs the support stated first and '
                'meant.',
                'Frame the problem as a risk to them, not as an error by them: this is what '
                'an opponent will say.',
                'Supply the replacement. An ally who has to rewrite it themselves will '
                'usually just defend the original.']),
        model=[
            'Dear Comms team,',
            '',
            'I am writing in support of the deadlines campaign, and about one sentence in '
            'Tuesday’s post that I think puts it at risk.',
            '',
            'The post says the research proves that sleeping eight hours raises your grades '
            'by four marks. The study is a survey: it asked students how long they sleep and '
            'looked at their marks. It did not assign anyone to a sleep schedule, and its own '
            'summary says the design cannot show cause. The researchers also note that they '
            'did not collect hours of paid work, which would explain the pattern on its own.',
            '',
            'I am not raising this to be pedantic. The first person who checks the summary '
            'will find that paragraph, and the campaign will then be about whether the Union '
            'reads its sources rather than about deadlines.',
            '',
            'Would this work instead: students who sleep seven to eight hours do measurably '
            'better, and the university has never tested whether its own deadline policy is '
            'part of the reason. That keeps the figure, keeps the demand, and asks a question '
            'the university cannot answer, which is a stronger position than a claim it can '
            'refute.',
            '',
            'Happy to help with the rewrite if that is useful.',
            '',
            'Priya Raman',
        ],
        notes=['Support is stated in the first line and is specific, not a formality.',
               'The problem is framed as a risk to the campaign rather than a fault in the writer.',
               'The alternative wording is supplied in full and keeps everything the Union wanted.',
               'It ends with an offer of work, which makes agreement easy.'],
        bandpair=dict(
            mid=[
                'Dear Comms team,',
                'I am writing about the post you published on Tuesday about the sleep study. '
                'I support the campaign for midday deadlines but I think there is a problem '
                'with how the research has been described.',
                'The post says the research proves that sleeping eight hours raises grades, '
                'but this is not what the study shows. It was only a survey, so it cannot '
                'prove that sleep causes better grades. The researchers themselves say this '
                'in their summary and they also say they did not measure paid work.',
                'I think you should change the post because people will notice this and it '
                'will make the campaign look bad. It is important to be accurate when using '
                'research. Please let me know if you would like to discuss this further.',
                'Best wishes, Priya Raman',
            ],
            top=[
                'Dear Comms team,',
                'I am writing in support of the deadlines campaign, and about one sentence in '
                'Tuesday’s post that I think puts it at risk.',
                'The post says the research proves that sleeping eight hours raises grades by '
                'four marks. The study is a survey. It did not assign anyone to a sleep '
                'schedule, and its own summary says the design cannot show cause. The '
                'researchers also note they did not collect hours of paid work, which would '
                'explain the pattern on its own.',
                'The first person who checks will find that paragraph, and the campaign will '
                'then be about whether the Union reads its sources rather than about '
                'deadlines.',
                'Would this work instead: students who sleep seven to eight hours do '
                'measurably better, and the university has never tested whether its deadline '
                'policy is part of the reason. Happy to help with the rewrite. Priya Raman',
            ],
            diffs=[
                'The support is specific and comes first, so the reader is an ally being '
                'warned rather than an author being corrected.',
                'It says what the study actually did — a survey, no assignment — instead of '
                'asserting that the post is inaccurate.',
                'It names the concrete risk: the campaign becomes a story about the Union '
                'rather than about deadlines.',
                'It supplies the replacement sentence in full, so agreeing requires no work.',
                'The new wording is argued to be stronger, not merely safer, which gives the '
                'reader a reason to want the change.',
            ],
        ),
    ),

    w3=dict(
        sub='Replication',
        prof='Dr Castellanos',
        question='When large replication projects found that many published results did not '
                 'repeat, some argued that universities should require all new studies to be '
                 'preregistered, with funding withheld from researchers who do not comply. '
                 'Others argued that preregistration suits some kinds of research and not '
                 'others, and that a universal requirement would push exploratory work out of '
                 'the literature altogether. Should preregistration be compulsory? Why or why '
                 'not?',
        posts=[('Yuki', 'w',
                'It should be compulsory. The freedom to decide what counts as the outcome '
                'after seeing the data is the single biggest source of false findings, and '
                'voluntary measures have had twenty years to work. Nothing changes until the '
                'money is attached to it.'),
               ('Bruno', 'm',
                'Compulsory preregistration assumes you know what you are looking for before '
                'you look. Much of the best work in my field began with somebody noticing '
                'something they had not predicted. A rule that treats that as suspicious '
                'would have removed most of what we now teach.')],
        skill=('Dissolving a disagreement rather than taking a side',
               ['Sometimes the two posts are arguing about different things. Saying so is a '
                'stronger move than choosing.',
                'It requires naming the distinction each one is missing.',
                'Then show what follows: the rule that satisfies both.']),
        starters=['Yuki and Bruno are describing different activities, and…',
                  'The distinction that dissolves this is between… and…',
                  'Bruno is right about…, but that is an argument for… rather than against…',
                  'What neither post separates is… from…'],
        model=[
            'Yuki and Bruno are describing different activities and calling both research. '
            'Yuki is talking about testing: you have a hypothesis, you collect data to '
            'evaluate it, and the analytic freedom she objects to is straightforwardly a way '
            'of getting the wrong answer. Bruno is talking about exploring: you look at '
            'something and see what is there, with no hypothesis to protect. The distinction '
            'dissolves most of the argument.',
            'What preregistration actually does is fix which of the two you are claiming to '
            'have done. That is why Bruno’s objection does not land. A preregistered '
            'exploratory study is not a contradiction; it is a study that registers, in '
            'advance, that it is exploratory and that its findings are at best suggestive '
            'until someone tests them. Nothing is forbidden. What is forbidden is exploring '
            'and then reporting it as testing.',
            'Yuki is right that voluntary measures have had their chance, and on the whole I '
            'would attach the requirement to funding as she suggests. But the requirement '
            'should be to declare the type of study, not to predict the outcome, and that is '
            'a much easier rule to comply with than the one Bruno is arguing against.',
            'So: compulsory registration of design, not compulsory hypotheses. Bruno keeps '
            'his unpredicted findings, Yuki gets the discipline she wants, and the reader '
            'finally learns which kind of claim they are being shown.',
        ],
        model_words=227,
    ),

    gram=dict(
        title='Quantification and approximation',
        headers=['Expression', 'What it commits you to'],
        rows=[
            ('roughly / about', 'near the figure, width unstated'),
            ('on the order of', 'the right power of ten, no more'),
            ('in the region of', 'close to, usually within a few per cent'),
            ('give or take', 'the figure plus an explicit margin'),
            ('up to', 'a ceiling; the real value may be far lower'),
            ('at least / no fewer than', 'a floor; the real value may be far higher'),
            ('a handful of / the bulk of', 'very few / most, with no number claimed'),
        ],
        notes=[
            'Each expression commits you to a different width. Using a narrow one when you '
            'mean a wide one is a false claim, not a stylistic choice.',
            '"Up to" is the most abused quantifier in English. Up to 40 per cent is satisfied '
            'by two per cent, which is why advertisers like it.',
            'Never combine a vague quantifier with a precise figure. About 37.4 per cent '
            'tells the reader you do not know which part to trust.',
        ],
        watch='"Significant" in a statistical context means unlikely to be chance, not large. '
              'A significant difference can be far too small to matter. If you mean large, '
              'write large.',
        ex=[
            ('Choose the expression that fits the certainty stated.',
             ['The journey takes a thousand years, to the nearest power of ten. → ______',
              'The catch fell by half, plus or minus five per cent. → ______',
              'Very few of them replied. → ______',
              'Most of the variance is explained. → ______',
              'The maximum possible is forty per cent. → ______',
              'The minimum is two thousand. → ______'],
             ['on the order of a thousand years', 'by half, give or take five per cent',
              'a handful of them replied', 'the bulk of the variance',
              'up to forty per cent', 'at least two thousand']),
            ('Correct the quantifier.',
             ['The study found up to a four-mark difference on average.',
              'About 37.4 per cent of students replied.',
              'The effect was significant and therefore important.',
              'On the order of 2,140 students took part.'],
             ['The study found a four-mark difference on average.',
              'About 37 per cent of students replied.',
              'The effect was significant, though small.',
              '2,140 students took part.']),
            ('Rewrite so the claim matches the evidence described.',
             ['A survey of library users shows that students read widely.',
              'The replication failed, so the original was false.',
              'Sleep raises marks by four.',
              'Nobody who works a paid job sleeps enough.'],
             ['A survey of library users suggests that library users read widely.',
              'The replication failed, which is consistent with the original being false or fragile.',
              'Students reporting more sleep scored about four marks higher on average.',
              'Students in paid work reported less sleep on average.']),
        ],
        bas='Build a Sentence often puts a quantity phrase inside an embedded question: do you '
            'know what proportion of them replied. The phrase stays together as one unit and '
            'the clause keeps statement order.',
    ),

    fault=dict(
        text='The study proves that sleeping more causes better marks. About 37.4 per cent of '
             'the sample replied to the survey. The difference was significant and therefore '
             'important. Up to a four-mark difference was found on average. Nobody knows '
             'whether did the researchers measure paid work.',
        faults=[
            ('proves that sleeping more causes', 'suggests that sleeping more is associated with',
             'An observational design cannot establish cause, so proves overstates it.'),
            ('About 37.4 per cent', 'About 37 per cent',
             'A vague quantifier with a decimal place claims two different precisions at once.'),
            ('significant and therefore important', 'significant, though small',
             'Statistically significant means unlikely to be chance, not large enough to matter.'),
            ('Up to a four-mark difference was found on average',
             'A four-mark difference was found on average',
             'Up to states a ceiling, which contradicts reporting an average.'),
            ('whether did the researchers measure', 'whether the researchers measured',
             'An embedded question keeps statement order, so no auxiliary is inverted.'),
        ],
    ),

    rev=dict(
        vocab=[
            ('how spread out a set of values is', 'variance'),
            ('a hidden variable explaining both others', 'confound'),
            ('to repeat a study and see if it holds', 'replicate'),
            ('participants dropping out before the end', 'attrition'),
            ('looking real but produced by something else', 'spurious'),
            ('holding up when the method is varied', 'robust'),
            ('how big an effect is', 'magnitude'),
            ('a value far from the rest', 'outlier'),
            ('the middle value when all are ordered', 'median'),
            ('to set an instrument against a known standard', 'calibrate'),
            ('too small to detect the effect sought', 'underpowered'),
            ('to publish the plan before collecting data', 'preregister'),
        ],
        gram=[
            ('The journey takes ______ the order of a thousand years.', 'on'),
            ('The catch fell by half, ______ or take five per cent.', 'give'),
            ('______ a handful of them replied.', 'Only'),
            ('______ the bulk of the variance is explained.', 'Roughly'),
            ('The maximum is ______ to forty per cent.', 'up'),
            ('The minimum is ______ least two thousand.', 'at'),
            ('The result was significant ______ small.', 'though'),
            ('The figure is ______ the region of two thousand.', 'in'),
        ],
        mini=[
            ('A larger biased sample gives you',
             ('a less biased answer', 'more confidence in a wrong answer',
              'a smaller variance only', 'a replicable result'), 1,
             'Size reduces random error and does nothing to the systematic error that bias '
             'introduces.'),
            ('Ice cream sales and drowning rise together because',
             ('one causes the other', 'both follow the temperature',
              'the data are wrong', 'the sample is biased'), 1,
             'A third variable drives both, which is the confound case and the hardest of '
             'the three to detect.'),
            ('Random assignment works because',
             ('it increases the sample', 'nothing about the person can predict the group',
              'it removes measurement error', 'it is cheaper'), 1,
             'If the experimenter decides, no characteristic of the participant can be '
             'correlated with which group they land in.'),
            ('"At best suggestive" tells you the writer thinks the evidence is',
             ('conclusive', 'weak', 'fabricated', 'irrelevant'), 1,
             'At best places a ceiling on how strong the evidence could be, and suggestive '
             'is below the level needed to conclude.'),
            ('Which sentence is correct?',
             ('About 37.4 per cent replied.', 'About 37 per cent replied.',
              'Up to 37 per cent replied on average.', 'On the order of 37.4 per cent replied.'), 1,
             'The quantifier and the figure must claim the same precision, which rules out '
             'a decimal after about.'),
            ('Preregistration prevents',
             ('small samples', 'choosing the outcome after seeing the data',
              'publication bias', 'attrition'), 1,
             'Fixing the analysis plan before the data exist removes the freedom that '
             'produces false positives without any dishonesty.'),
        ],
    ),

    tip='Learn the difference between statistically significant and large. It is the single '
        'most exploited ambiguity in public argument, and a B2 writer who keeps the two apart '
        'will read every news story about research more accurately than the person who wrote '
        'it.',
)
