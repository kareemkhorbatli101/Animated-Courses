# -*- coding: utf-8 -*-
"""Unit 33 — Work and Automation. Volume 4."""
from content._g import gaps

_GT, _GA = gaps(
    'Every generation since the first mechanical loom has been told that machines were about '
    'to abol{ish} work, and every generation has instead watched the composition of work '
    'ch{ange}. The jobs that disappeared were real jobs and the people who lost them were '
    'not compens{ated} by the jobs that appeared somewhere else twenty years '
    'la{ter}. Both halves of that sentence are true, and arguments about automation usually '
    'go wrong by insist{ing} on only one of them.')

_ET, _EA = gaps(
    'A task is automated when it can be specified completely, and this turns out to be a '
    'much narrower condition than it so{unds}. Driving a vehicle along a motorway is '
    'specifiable. Persuading a reluctant patient to accept a diagnosis is not, and the '
    'distinction has very little to do with how difficult either task feels to a human '
    'be{ing}. For most of the last century the assumption was that machines would take the '
    'physically demanding work and leave the cogni{tive} work to people, and the actual '
    'pattern has been close to the rev{erse}: arithmetic went first, pattern recognition '
    'went second, and the occupations that have proved most stubbor{nly} resistant are the '
    'ones involving unpredictable physical environments and other people’s '
    'emot{ions}. Nobody predicted this, and the reason nobody predicted it is '
    'instruct{ive}. We judged difficulty by how long a human takes to learn something, which '
    'measures the scarcity of the skill in our own species rather than the complex{ity} of '
    'the task. A warehouse picker learns the job in a week and a radiologist trains for a '
    'dec{ade}, and it is the radiologist’s work that decomposes into specifiable steps. The '
    'lesson is not that expertise is worth l{ess} than we thought, but that our intuitions '
    'about what is hard were never about the tasks at all.')

UNIT = dict(
    n=33, vol=4, level='B2',
    title='Work and Automation',
    icons=['chart', 'news', 'speech'],
    subs=['What a machine can be told to do', 'Retraining and who pays',
          'The shape of a working life'],
    grammar='The future in the past',
    field='automation, displacement, retraining',
    opener_line='This unit is about predictions that failed, which makes it the right place '
                'to learn the structures English uses for a future seen from the past. Was '
                'going to, would have been, was due to: every one of them carries a claim '
                'about what did not happen.',
    candos=[
        'I can describe an expectation that was not met, without confusing the time frames.',
        'I can use was going to, would have, was to have and was due to accurately.',
        'I can explain why a confident prediction turned out wrong.',
        'I can argue about a policy whose costs and benefits fall on different people.',
        'I can follow a talk that reinterprets a familiar story.',
        'I can write about a trend without claiming to know where it ends.',
    ],

    acad=[
        ('automation', 'doing by machine what was done by people'),
        ('churn', 'the rate at which workers leave and are replaced'),
        ('redundancy', 'loss of a job because the job has gone'),
        ('productivity', 'output per hour of work'),
        ('occupation', 'the kind of work somebody does'),
        ('obsolete', 'no longer of use'),
        ('specification', 'a complete statement of what is required'),
        ('routine', 'repeated in the same way each time'),
        ('cognitive', 'to do with thinking'),
        ('manual', 'done with the hands'),
        ('wage', 'payment for time worked'),
        ('severance', 'a payment on losing a job'),
        ('reskill', 'to learn a different trade'),
        ('transition', 'the move from one state to another'),
        ('polarise', 'to split into two extremes'),
        ('subsidise', 'to pay part of the cost of something'),
        ('entitlement', 'something a person has a right to'),
        ('lifelong', 'lasting a whole life'),
    ],
    family=('employ', [
        ('employment', 'noun', 'employment rose while wages fell'),
        ('employability', 'noun', 'training aimed at employability'),
        ('underemployed', 'adjective', 'skilled but underemployed'),
    ]),
    collocs=[
        ('phase out', 'to remove gradually'),
        ('take over', 'to assume control of something'),
        ('fall through', 'to fail to happen'),
        ('bring forward', 'to move to an earlier date'),
        ('lay off', 'to dismiss for lack of work'),
        ('bear the cost', 'to pay for something'),
        ('in the long run', 'eventually, over many years'),
        ('as things stand', 'given the present situation'),
        ('across the board', 'affecting everyone equally'),
        ('come to nothing', 'to produce no result'),
    ],
    stance=[
        ('as things stand', 'given the situation now'),
        ('was supposed to', 'the writer marks a failed expectation'),
        ('it is worth noting that', 'the writer flags a relevant fact'),
        ('on closer inspection', 'the first impression was wrong'),
        ('is anybody’s guess', 'the writer refuses to predict'),
    ],
    nuance=[
        ('redundant / unemployed', 'the job has gone / the person has none'),
        ('productivity / output', 'per hour of work / in total'),
        ('retrain / reskill', 'for the same trade / for a different one'),
    ],
    vocab_talk=[
        'Name a job that existed in your parents’ time and does not now.',
        'Why did predictions about automation keep getting the order wrong?',
        'Who should pay when a job is automated away?',
        'Is a working life still one occupation? Should it be?',
    ],
    again=['assembly line', 'gig work', 'zero-hours contract', 'collective bargaining',
           'sector', 'labour market', 'structural change', 'safety net'],

    r1=dict(
        sub='What a machine can be told to do',
        skill=('Completing nouns of process and adjectives of capacity',
               ['Economics writing is full of -ment and -tion nouns: displacement, '
                'specification, transition.',
                'The -ive and -ible endings mark capacity or tendency: instructive, '
                'specifiable.',
                'Read to the end of the sentence first. The grammar tells you the ending '
                'before the meaning does.']),
        guided_text=_GT, guided=_GA,
        guided_hint='abol-- is abolish — the slot follows about to, so it needs a bare '
                    'infinitive.',
        exam_text=_ET, exam=_EA,
    ),

    r2=dict(
        sub='Retraining and who pays',
        skill=('Reading a scheme against an individual case',
               ['A scheme sets eligibility. A case asks whether a particular person falls '
                'inside it.',
                'Eligibility rules usually turn on a date, a duration or a category. Find '
                'which one.',
                'Where a rule produces an unintended result, the reply will often say so '
                'rather than defend it.']),
        docs=[
            ('notice', 'Regional Skills Fund · transition grants for displaced workers', [
                '# Who is eligible',
                '* Workers made redundant within the last twelve months where the role was '
                'withdrawn rather than filled by another person.',
                '* Workers given formal notice of redundancy taking effect within six months.',
                '# What is funded',
                '* Course fees in full, up to two years, for a qualification at a level above '
                'the one already held.',
                '* A contribution to living costs, means tested, for courses over six months.',
                '# Not funded',
                '* Courses at or below the level of a qualification already held.',
                '* Applicants who left employment voluntarily, including by accepting '
                'enhanced severance.',
            ], 'notice'),
            ('email', 'g.mbeki@skillsfund.gov', 'l.haverkamp@mailbox.net',
             '11/04/2028', 'Your application — the voluntary exit rule', [
                 'Dear Mr Haverkamp,',
                 '',
                 'Thank you for the documents, and for being straightforward about the',
                 'enhanced package, which many applicants are not.',
                 '',
                 'As things stand I have to refuse the application. You accepted enhanced',
                 'severance, and the scheme treats that as leaving voluntarily. I am not',
                 'going to pretend that this is a sensible result in your case: your role',
                 'was withdrawn, the enhanced offer was made to the whole shift, and',
                 'refusing it would have left you redundant three weeks later with less',
                 'money. The rule was written to stop people resigning to get a funded',
                 'degree, and it is catching something it was not aimed at.',
                 '',
                 'Two practical things. The rule is a scheme rule, not a statutory one, and',
                 'the panel can disapply it where the role was withdrawn. I have put your',
                 'case on the May agenda with a note recommending exactly that.',
                 '',
                 'Separately, your Level 4 certificate means the Level 4 course you listed',
                 'would not be funded in any event. The Level 5 route would, and it is one',
                 'term longer.',
                 '',
                 'Mr Mbeki, Regional Skills Fund',
             ]),
        ],
        guided=[
            ('Who is eligible under the scheme?',
             ('Anyone unemployed', 'Workers whose role was withdrawn, within set time limits',
              'Anyone retraining', 'Workers over fifty'), 1,
             'The notice ties eligibility to the role being withdrawn rather than filled by '
             'somebody else.'),
            ('What level of course is funded?',
             ('Any level', 'A level above the one already held',
              'The same level', 'Only degree level'), 1,
             'Courses at or below the level already held are listed under what is not '
             'funded.'),
            ('When is a living-costs contribution available?',
             ('Always', 'For courses over six months, means tested',
              'Never', 'For the first year only'), 1,
             'Both conditions are attached, which is why the length of the course matters to '
             'the applicant.'),
            ('Why is the applicant initially refused?',
             ('He applied late', 'He accepted enhanced severance, which counts as leaving voluntarily',
              'His role was filled', 'He holds no qualification'), 1,
             'The scheme classifies the enhanced package as a voluntary exit regardless of '
             'what prompted it.'),
        ],
        exam=[
            ('What does the officer say about the result in this case?',
             ('It is correct', 'It is not a sensible result and he will not pretend otherwise',
              'It is unavoidable', 'It is the applicant’s fault'), 1,
             'He states the rule, applies it, and then says plainly that it is catching the '
             'wrong case.'),
            ('What was the voluntary exit rule aimed at?',
             ('Reducing costs', 'People resigning in order to get a funded degree',
              'Older workers', 'Short courses'), 1,
             'He names the purpose in order to show that this applicant falls outside it.'),
            ('What would have happened if the applicant had refused the package?',
             ('He would have kept his job', 'He would have been made redundant weeks later with less money',
              'He would have been eligible immediately', 'Nothing would have changed'), 1,
             'That counterfactual is what makes the refusal look unreasonable to the officer '
             'himself.'),
            ('What is the significance of the rule being a scheme rule?',
             ('It cannot be changed', 'The panel has power to disapply it',
              'It applies to everyone', 'It expires annually'), 1,
             'He distinguishes it from a statutory rule precisely because that difference '
             'creates a route.'),
            ('What has the officer already done?',
             ('Approved the grant', 'Put the case on the May agenda with a recommendation',
              'Referred it to a court', 'Closed the file'), 1,
             'He has acted before being asked, which is why the email is more than a '
             'refusal.'),
            ('Why would the Level 4 course not be funded?',
             ('It is too short', 'The applicant already holds a Level 4 qualification',
              'It is not on the list', 'The panel has refused it'), 1,
             'Courses at or below the level already held fall outside the scheme regardless of '
             'eligibility.'),
            ('What is the overall structure of the officer’s reply?',
             ('A refusal with an apology', 'A refusal, a criticism of the rule, and two routes forward',
              'An approval with conditions', 'A request for more documents'), 1,
             'He applies the rule, says it is wrong here, opens the panel route and corrects '
             'the course choice.'),
        ],
    ),

    r3=dict(
        sub='The shape of a working life',
        title='The Career That Was Supposed to Last Forty Years',
        words=277,
        paras=[
            'The single-occupation working life is treated as the natural state of affairs '
            'that recent decades have disrupted, and on closer inspection it was a local '
            'arrangement lasting about two generations in about a dozen countries. Before '
            'industrial employment most people did several kinds of work in a year, '
            'seasonally and by necessity. The pattern in which a person entered one firm at '
            'sixteen and left it at sixty was supposed to be the beginning of something and '
            'turned out to be the exception.',

            'It is worth noting that the arrangement did not end because workers wanted '
            'variety. It ended because the firms that offered it stopped existing at the rate '
            'they once did, and because the skills a firm needed began turning over faster '
            'than a career. Neither of those is a preference and neither can be reversed by '
            'exhortation. Where the single-employer pattern survives it is usually in sectors '
            'with regulated entry and slow technical change, which is a description of a '
            'structural condition rather than of a culture. As things stand, those sectors '
            'employ a shrinking minority.',

            'What replaces it is anybody’s guess, and the honest observation is that no '
            'institution has yet been built for the pattern that actually exists. Pensions, '
            'mortgages, professional licensing and most training subsidies all assume '
            'continuous employment in one field, and each of them imposes a penalty on the '
            'person who changes direction at forty. The penalty is not a judgement about '
            'career changes; it is an artefact of institutions designed around an '
            'arrangement that lasted two generations. That is a solvable problem, which is '
            'what distinguishes it from the underlying change, and almost nobody is working '
            'on it.',
        ],
        skill=('Reading a passage that re-dates a familiar thing',
               ['A common move is to show that what looks permanent is recent and local.',
                'Expect a sentence giving the real span: about two generations, in about a '
                'dozen countries.',
                'The last paragraph usually separates what cannot be changed from what '
                'could.']),
        guided=[
            ('What does the author say about the single-occupation working life?',
             ('It is the natural state', 'It lasted about two generations in about a dozen countries',
              'It never existed', 'It is returning'), 1,
             'The whole first paragraph is built to replace the assumption of permanence with '
             'a span.'),
            ('What did people do before industrial employment?',
             ('One job for life', 'Several kinds of work in a year',
              'Mostly agriculture only', 'Nothing systematic'), 1,
             'Seasonally and by necessity is how the author describes it, which is the '
             'opposite of the modern assumption.'),
            ('Why did the arrangement end, according to the author?',
             ('Workers wanted variety', 'Firms stopped lasting and skills turned over faster than careers',
              'Governments withdrew support', 'Unions declined'), 1,
             'The author explicitly rules out preference as the cause and names two '
             'structural reasons.'),
            ('Where does the single-employer pattern survive?',
             ('In large firms', 'In sectors with regulated entry and slow technical change',
              'In the public sector only', 'Nowhere'), 1,
             'The author calls this a structural condition rather than a cultural one.'),
        ],
        exam=[
            ('What does "neither can be reversed by exhortation" mean?',
             ('Nobody has tried', 'Urging people to behave differently cannot change either cause',
              'Both are preferences', 'Policy has failed'), 1,
             'It follows directly from the claim that neither cause is a preference.'),
            ('What do pensions, mortgages and licensing have in common, in the author’s account?',
             ('They are too expensive', 'They assume continuous employment in one field',
              'They are recent', 'They are unregulated'), 1,
             'That shared assumption is what produces the penalty on changing direction.'),
            ('How does the author characterise the penalty on changing direction?',
             ('A deserved consequence', 'An artefact of institutional design',
              'A legal requirement', 'An economic necessity'), 1,
             'The author is explicit that it is not a judgement about career changes.'),
            ('What distinguishes the penalty from the underlying change?',
             ('Its size', 'It is solvable', 'Its history', 'Who it affects'), 1,
             'The closing paragraph separates what institutions could fix from what they '
             'cannot.'),
            ('What is the author’s closing complaint?',
             ('Institutions are too slow', 'Almost nobody is working on the solvable part',
              'Workers are unwilling to retrain', 'The data are poor'), 1,
             'It lands harder because the author has just conceded that the larger change is '
             'not reversible.'),
            ('What does "turned out to be the exception" refer to?',
             ('Seasonal work', 'The one-firm career',
              'Industrial employment', 'Regulated sectors'), 1,
             'It closes the first paragraph by reversing the status of the thing assumed to be '
             'normal.'),
            ('Which would most weaken the second paragraph?',
             ('Evidence that workers value variety',
              'Evidence that firm lifespans and skill turnover have been stable',
              'Evidence that pensions are underfunded',
              'Evidence that licensing has expanded'), 1,
             'Those two trends are the entire causal account the paragraph offers.'),
            ('All of the following are stated EXCEPT:',
             ('The pattern lasted about two generations',
              'Skills now turn over faster than a career',
              'Institutions assume continuous employment',
              'Workers changing direction at forty usually succeed'), 3,
             'The passage says the opposite: each institution imposes a penalty on them.'),
            ('What is the author’s attitude to the end of the one-firm career?',
             ('Nostalgic', 'Analytical about the cause and critical of the institutional response',
              'Celebratory', 'Indifferent'), 1,
             'The causes are treated as irreversible and the institutional failure as a '
             'separate, fixable thing.'),
        ],
    ),

    l1=dict(
        sub='What a machine can be told to do',
        caption='Two students after a seminar on automation',
        skill=('Hearing an argument reversed',
               ['One speaker will state the common view and the other will reverse it with '
                'a counterexample.',
                'The counterexample is the examinable part. Hold the two cases being '
                'compared.',
                'Listen for: you would think, in fact it is the other way round, which is '
                'the opposite of.']),
        warm=[
            ('Man: So machines take the physical jobs first?',
             ('That is what everyone expected, and no.', 'Yes, always.',
              'About twenty years.', 'In the warehouse.'), 0,
             'A so-is-it question answered by naming the expectation and then rejecting it.'),
            ('Woman: Why did everyone get the order wrong?',
             ('We measured difficulty by how long people take to learn.', 'Yes, we did.',
              'About a decade.', 'In the seminar.'), 0,
             'A why question wants the underlying mistake rather than confirmation.'),
            ('Man: Does that mean expertise is worthless?',
             ('No — it means our intuitions were off.', 'Yes, apparently.',
              'About ten years of training.', 'For radiologists.'), 0,
             'A does-that-mean question answered by rejecting an overstated inference.'),
        ],
        script=[
            ('Woman', 'The bit that stayed with me was the ordering. You would think machines '
                      'take the heavy physical work first and leave thinking to people.'),
            ('Man', 'And it has been almost exactly the other way round.'),
            ('Woman', 'Arithmetic went first.'),
            ('Man', 'Arithmetic, then pattern recognition, and the jobs that have held out '
                    'are the ones with unpredictable physical spaces and other people’s '
                    'emotions in them. Nursing. Plumbing. Teaching a class of thirty.'),
            ('Woman', 'So why did everybody get the order wrong?'),
            ('Man', 'Because we judged how hard a task is by how long a human takes to learn '
                    'it. Which measures how rare the skill is in our species, not how complex '
                    'the task is.'),
            ('Woman', 'A warehouse picker learns the job in a week.'),
            ('Man', 'And a radiologist trains for a decade, and it is the radiologist’s work '
                    'that breaks down into specifiable steps. That is the whole finding and it '
                    'is genuinely uncomfortable.'),
            ('Woman', 'It sounds like it makes expertise worthless.'),
            ('Man', 'That is the inference people jump to and it does not follow. What it '
                    'makes worthless is our confidence about which things are hard. The '
                    'radiologist is still doing something difficult — we were just wrong about '
                    'what the difficulty consisted of.'),
        ],
        items=[
            ('What was the expected order of automation?',
             ('Cognitive work first', 'Physical work first, thinking last',
              'Emotional work first', 'There was no expectation'), 1,
             'She states it as what you would think, and he immediately reverses it.'),
            ('What has actually been automated first?',
             ('Manual work', 'Arithmetic, then pattern recognition',
              'Nursing', 'Teaching'), 1,
             'He gives the sequence and then names the occupations that have held out.'),
            ('Which jobs have proved most resistant?',
             ('Highly paid ones', 'Ones with unpredictable spaces and other people’s emotions',
              'Ones requiring long training', 'Ones in manufacturing'), 1,
             'Nursing, plumbing and teaching a class of thirty are his examples.'),
            ('Why did predictions get the order wrong?',
             ('Poor data', 'Difficulty was judged by how long a human takes to learn',
              'Technology moved too fast', 'Economists ignored engineers'), 1,
             'That measure tracks the scarcity of a skill in our species rather than the '
             'complexity of the task.'),
            ('What is the contrast between the picker and the radiologist?',
             ('Pay', 'The long-trained work is the one that decomposes into specifiable steps',
              'Job security', 'Working hours'), 1,
             'A week against a decade, with the decade being the more automatable, is the '
             'whole point.'),
            ('What inference does the man reject?',
             ('That the order was reversed', 'That expertise is worthless',
              'That radiology is difficult', 'That predictions failed'), 1,
             'He says what is worthless is our confidence about which things are hard.'),
            ('What does he say the radiologist is still doing?',
             ('Nothing difficult', 'Something difficult, just not what we thought',
              'Work a machine cannot specify', 'Work that will not change'), 1,
             'He separates the difficulty of the work from our account of where the difficulty '
             'lay.'),
        ],
    ),

    l2=dict(
        sub='Retraining and who pays',
        caption='A careers service briefing on transition grants',
        poster=['Careers Service · transition grant clinic',
                'Bring your redundancy letter',
                'Level above, not level same'],
        skill=('Hearing a rule criticised by the person applying it',
               ['An official may apply a rule and disagree with it in the same breath. Both '
                'are examinable.',
                'Listen for: the rule says, and I think it is catching the wrong people.',
                'The route round the rule is usually named immediately afterwards.']),
        warm=[
            ('Woman: Does accepting a severance package affect eligibility?',
             ('Yes — the scheme counts it as leaving voluntarily.', 'No, not at all.',
              'About three weeks.', 'At the clinic.'), 0,
             'A does-it-affect question answered with the classification the scheme applies.'),
            ('Man: Can the panel waive that rule?',
             ('It can, where the role was withdrawn.', 'No, never.',
              'About four cases.', 'In May.'), 0,
             'A can-it question answered with the power and the condition attached to it.'),
            ('Woman: Will a course at my current level be funded?',
             ('No — it has to be a level above.', 'Yes, any course.',
              'About two years.', 'Course fees in full.'), 0,
             'A will-it-be-funded question answered with the rule that decides it.'),
        ],
        script=[
            ('Man', 'I want to be useful rather than diplomatic, so I am going to tell you '
                    'where this scheme goes wrong. Two rules catch almost everybody who comes '
                    'to this clinic. The first is the voluntary exit rule. If you accepted an '
                    'enhanced severance package, the scheme treats you as having left '
                    'voluntarily and you are not eligible. Now, that rule was written to stop '
                    'somebody resigning from a secure job to get a funded degree, which is a '
                    'real problem. But what it actually catches is people who were offered '
                    'enhanced terms because the whole shift was going, and who would have '
                    'been made redundant three weeks later with less money. That is not '
                    'leaving voluntarily in any sense that matters, and the panel knows it. '
                    'The rule is a scheme rule, not a statutory one, and the panel can '
                    'disapply it where the role was withdrawn. Ask for that in writing, name '
                    'the date the role was withdrawn, and attach the shift-wide offer. The '
                    'second rule is simpler and it catches people who have done nothing '
                    'wrong: a course at or below a level you already hold is not funded, '
                    'however relevant it is. People arrive having chosen a course on the '
                    'strength of the content and find it is the wrong level. Check the level '
                    'before you fall in love with the syllabus.'),
        ],
        items=[
            ('What does the speaker say he will do?',
             ('Explain the scheme fully', 'Be useful rather than diplomatic',
              'Defend the rules', 'Describe the panel'), 1,
             'That framing is his announcement that he will criticise the scheme he '
             'administers.'),
            ('What was the voluntary exit rule designed to stop?',
             ('Early retirement', 'People resigning from a secure job to get a funded degree',
              'Short courses', 'Repeat applications'), 1,
             'He grants that this is a real problem before showing who the rule actually '
             'catches.'),
            ('Who does the rule actually catch, in his account?',
             ('Dishonest applicants', 'People offered enhanced terms because the whole shift was going',
              'Older workers', 'People changing sector'), 1,
             'They would have been made redundant weeks later with less money, which he says '
             'is not voluntary in any sense that matters.'),
            ('What does he advise applicants to do?',
             ('Appeal to a court', 'Ask in writing for the rule to be disapplied, with the date and the offer',
              'Reapply next year', 'Accept the refusal'), 1,
             'He gives three specific things to include, which is the practical core of the '
             'briefing.'),
            ('What is the second rule he names?',
             ('A time limit', 'A course at or below a level already held is not funded',
              'A means test', 'A residence requirement'), 1,
             'He says it catches people who have done nothing wrong, however relevant the '
             'course is.'),
            ('What mistake does he say people make?',
             ('Applying too late', 'Choosing a course on content and finding the level is wrong',
              'Omitting documents', 'Asking for too much'), 1,
             'Check the level before you fall in love with the syllabus is his closing '
             'instruction.'),
        ],
    ),

    l3=dict(
        sub='The shape of a working life',
        caption='A lecture on careers and institutions',
        board=['One-firm career: two generations, a dozen countries',
               'Cause: firm lifespan and skill turnover',
               'Not a preference, not reversible',
               'Institutions still assume continuity'],
        skill=('Following a talk that separates the fixable from the fixed',
               ['A good policy lecture will divide a problem into what cannot be changed and '
                'what could.',
                'Listen for: that part is not going back, and this part is simply a design '
                'choice.',
                'The speaker’s complaint is usually about effort going to the wrong half.']),
        warm=[
            ('Man: Was a job for life ever normal?',
             ('For about two generations, in a few countries.', 'Yes, everywhere.',
              'About forty years.', 'In manufacturing.'), 0,
             'A was-it-normal question answered with the actual span rather than a yes.'),
            ('Woman: Did it end because people wanted variety?',
             ('No — the firms stopped lasting.', 'Yes, mostly.',
              'About two generations.', 'In the 1980s.'), 0,
             'A did-it-end-because question answered by replacing the proposed cause.'),
            ('Man: What assumes continuous employment?',
             ('Pensions, mortgages, licensing — nearly everything.', 'Yes, it does.',
              'About forty years.', 'The careers service.'), 0,
             'A what-assumes question wants the list, and the list is the lecture’s '
             'argument.'),
        ],
        script=[
            ('Woman', 'I want to start by dating something, because the dating does most of '
                      'the work. The career in which a person joins one firm at sixteen and '
                      'leaves it at sixty is treated as the normal condition that recent '
                      'decades disrupted. It lasted about two generations, in about a dozen '
                      'countries. Before industrial employment, most people did several kinds '
                      'of work in a year, because that is what the seasons required. So the '
                      'thing we are mourning was an unusual local arrangement, and it was '
                      'supposed to be the beginning of a trend rather than a short exception. '
                      'Now, why did it end? Not because workers wanted variety — I want to be '
                      'firm about that, because it is the explanation that flatters everybody '
                      'and it is wrong. It ended because firms stopped lasting as long as '
                      'careers, and because the skills a firm needs now turn over faster than '
                      'a working life. Neither of those is a preference, and neither responds '
                      'to anybody being urged to be more loyal. That part is not going back. '
                      'Here is the part that annoys me. Pensions, mortgages, professional '
                      'licensing, most training subsidies: every one of them assumes '
                      'continuous employment in a single field, and every one of them '
                      'therefore fines the person who changes direction at forty. That is not '
                      'a law of economics. It is a design choice made when the arrangement '
                      'looked permanent, and it could be undone in a decade by people with '
                      'ordinary powers. What happens instead is anybody’s guess, because '
                      'almost nobody is working on it.'),
        ],
        items=[
            ('Why does the speaker begin by dating the arrangement?',
             ('To give context', 'Because the dating does most of the argument',
              'To be accurate', 'To introduce the data'), 1,
             'Showing it was brief and local is what removes its status as the normal '
             'condition.'),
            ('What did people do before industrial employment?',
             ('One trade for life', 'Several kinds of work in a year, as the seasons required',
              'Mostly nothing recorded', 'Work for the state'), 1,
             'That pattern is offered as the longer-standing one against which the one-firm '
             'career is unusual.'),
            ('Which explanation does she reject firmly?',
             ('That firms stopped lasting', 'That workers wanted variety',
              'That skills turn over', 'That institutions are badly designed'), 1,
             'She calls it the explanation that flatters everybody and says it is wrong.'),
            ('What does she say about urging loyalty?',
             ('It would help', 'Neither cause responds to it',
              'Firms should try it', 'It worked once'), 1,
             'Because neither cause is a preference, exhortation has nothing to act on.'),
            ('What annoys her?',
             ('Workers changing jobs', 'Institutions that fine the person who changes direction',
              'The lack of data', 'Employers'), 1,
             'Pensions, mortgages, licensing and training subsidies all assume continuity and '
             'penalise departure from it.'),
            ('What does she say about that penalty?',
             ('It is a law of economics', 'It is a design choice that could be undone',
              'It is necessary', 'It is small'), 1,
             'She contrasts it directly with the part that is not going back.'),
            ('What is her closing complaint?',
             ('Nobody agrees with her', 'Almost nobody is working on the fixable part',
              'The data are missing', 'Firms will not cooperate'), 1,
             'It lands because she has just conceded that the larger change cannot be '
             'reversed.'),
        ],
    ),

    sp=[
        dict(
            sub='What a machine can be told to do',
            focus='describing an expectation that failed',
            skill=('Saying what was going to happen',
                   ['Was going to and was supposed to both describe a future seen from the '
                    'past, and both imply it did not happen.',
                    'Stress the auxiliary: it WAS going to, which is what signals the '
                    'contrast.',
                    'Follow it with what happened instead, in the same breath.']),
            repeat=[
                'Machines were going to take the physical work.',
                'They took the arithmetic first.',
                'Pattern recognition went second.',
                'The jobs that held out involve people and unpredictable spaces.',
                'We were supposed to be safe in the cognitive work, and the reverse happened.',
                'We judged difficulty by how long a person takes to learn something.',
                'A warehouse picker learns the job in a week and a radiologist trains for a decade, and it is the decade of training that decomposes into steps.',
            ],
            theme='work, machines and predictions',
            qs=[
                'Thanks for joining me. To begin, what work do you expect to be doing in ten '
                'years?',
                'People have predicted the end of work for two centuries. Why does the '
                'prediction keep returning?',
                'Now your opinion. Should students choose a field on the basis of what is '
                'hard to automate? Why or why not?',
                'A final question. Is there anything a machine should not be allowed to do, '
                'even if it can?',
            ],
            model=[(2, 'Because the visible half is always true. Jobs really do disappear, '
                       'and the replacement jobs arrive later and somewhere else, so at any '
                       'moment the prediction looks correct.'),
                   (4, 'Deciding things about a person where somebody has to be answerable. '
                       'Not because the machine is worse, but because an unanswerable '
                       'decision is a different kind of thing.')],
            selfcheck=['I stressed the auxiliary in was going to.',
                       'I said what happened instead immediately.',
                       'I did not mix up the time frames.'],
        ),
        dict(
            sub='Retraining and who pays',
            focus='stating an unintended consequence',
            skill=('Saying that a rule catches the wrong case',
                   ['Name the purpose of the rule first, generously. Then show the case it '
                    'catches.',
                    'Would have is the key form: I would have been made redundant three '
                    'weeks later.',
                    'Keep the tone flat. An unintended consequence stated calmly is harder '
                    'to dismiss.']),
            repeat=[
                'The rule treats severance as leaving voluntarily.',
                'It was written to stop people resigning for a funded degree.',
                'My whole shift was offered the same terms.',
                'I would have been made redundant three weeks later.',
                'Refusing the package would have left me with less money and no job.',
                'The rule is a scheme rule and the panel can disapply it.',
                'So the rule is doing exactly what it was designed to do and catching exactly the person it was not aimed at.',
            ],
            theme='rules, fairness and who bears a cost',
            qs=[
                'Thank you for your time. First, have you ever been caught by a rule that was '
                'not meant for you?',
                'Rules have to be simple to be fair, and simple rules catch the wrong cases. '
                'How should that be handled?',
                'Now an opinion question. When a job is automated away, who should pay for '
                'retraining — the employer, the state, or the worker?',
                'One last question. Is a discretionary exception better than a more '
                'complicated rule?',
            ],
            model=[(2, 'With a named power to disapply and somebody willing to use it. The '
                       'alternative is a rule so detailed that nobody can apply it and '
                       'everybody appeals.'),
                   (3, 'Mostly the employer and the state together, because the gain from '
                       'automating goes to one and the tax base goes to the other. The worker '
                       'is the only party who did not make the decision.')],
            selfcheck=['I gave the rule its purpose before criticising it.',
                       'I used would have correctly.',
                       'I kept the tone flat.'],
        ),
        dict(
            sub='The shape of a working life',
            focus='separating what can change from what cannot',
            skill=('Dividing a problem out loud',
                   ['Say the division before the detail: one part of this is not going back, '
                    'and one part is a design choice.',
                    'Put the irreversible part first. It makes the second half sound '
                    'practical rather than naive.',
                    'Use is not going to and could be undone to mark the two halves.']),
            repeat=[
                'The one-firm career lasted about two generations.',
                'It ended because firms stopped outlasting careers.',
                'Skills now turn over faster than a working life.',
                'Neither of those is a preference and neither is going back.',
                'Pensions and licensing still assume continuous employment in one field.',
                'That is a design choice rather than a law of economics.',
                'It could be undone within a decade by people with entirely ordinary powers, and almost nobody is working on it.',
            ],
            theme='careers, institutions and what could be redesigned',
            qs=[
                'Thanks for taking part. To start, has anyone in your family changed career '
                'completely?',
                'Institutions assume a working life that no longer exists. Whose job is it to '
                'change them?',
                'Now your opinion. Should training be funded throughout a working life rather '
                'than at the start? Why?',
                'And finally. Is there anything valuable about the old pattern that is worth '
                'trying to keep?',
            ],
            model=[(2, 'Whoever is embarrassed by the gap. In practice that means it waits '
                       'for a cohort large enough to vote on it, which is why it takes a '
                       'generation rather than a decade.'),
                   (4, 'The accumulation. Forty years in one place built a kind of judgement '
                       'that five jobs do not, and nothing in the new pattern has replaced '
                       'it.')],
            selfcheck=['I stated the division before the detail.',
                       'I put the irreversible part first.',
                       'I marked the two halves with different forms.'],
        ),
    ],

    w1=dict(
        sub='Questions about work',
        skill=('Build a Sentence with a future in the past',
               ['The two non-question items in this unit build a future seen from the past: '
                'was going to, was supposed to, would have been.',
                'Was going to and was supposed to are followed by a bare infinitive; would '
                'have takes a past participle.',
                'The tile order will tell you which: a tile reading have signals would '
                'have.']),
        guided=[
            ('The grant application was refused.',
             ['know', 'do', 'you', 'whether', 'the panel', 'can', 'that', 'overturn', 'actually'],
             'Do you know whether the panel can actually overturn that?'),
            ('My whole shift was offered the same package.',
             ['to know', 'nobody', 'seems', 'why', 'that', 'counts', 'voluntary', 'as', 'at all'],
             'Nobody seems to know why that counts as voluntary at all.'),
            ('My adviser asked about the level of the course.',
             ['she', 'whether', 'to know', 'wanted', 'I', 'had', 'it', 'already', 'checked'],
             'She wanted to know whether I had already checked it.'),
        ],
        exam=[
            ('Arithmetic was automated before manual work.',
             ['do', 'whether', 'know', 'you', 'anybody', 'that', 'predicted', 'order', 'at all'],
             'Do you know whether anybody predicted that order at all?'),
            ('The Level 4 course would not be funded.',
             ['explain', 'can', 'anybody', 'why', 'the level', 'to me', 'the content', 'than', 'matters more'],
             'Can anybody explain to me why the level matters more than the content?'),
            ('Firms stopped lasting as long as careers.',
             ['know', 'does', 'anybody', 'when', 'that', 'change', 'began', 'actually', 'happening'],
             'Does anybody know when that change actually began happening?'),
            ('The panel meets in May.',
             ['us', 'told', 'nobody', 'how', 'long', 'a decision', 'normally', 'takes', 'afterwards'],
             'Nobody told us how long a decision normally takes afterwards.'),
            ('Pensions assume continuous employment.',
             ['told', 'he', 'me', 'which', 'institutions', 'had', 'that', 'built', 'assumption in'],
             'He told me which institutions had that assumption built in.'),
            ('Machines did not take the physical work first.',
             ['were', 'machines', 'going', 'to', 'take', 'the physical', 'work', 'and', 'did not'],
             'Machines were going to take the physical work and did not.'),
            ('Refusing the package would have cost him money.',
             ['would', 'he', 'have', 'been', 'made', 'redundant', 'three weeks', 'anyway', 'later'],
             'He would have been made redundant three weeks later anyway.'),
        ],
    ),

    w2=dict(
        sub='Retraining and who pays',
        to='skillsfund@region.gov',
        date='18/04/2028',
        subject='Application 2028-3317 — request to disapply the voluntary exit rule',
        scenario=[
            'The Skills Fund has refused your application because you accepted enhanced '
            'severance, while saying the result is wrong in your case and that the panel can '
            'disapply the rule. You are writing the formal request for the May panel. You '
            'also need to change your course choice from Level 4 to Level 5.',
            'Write an email to the Skills Fund.',
        ],
        bullets=['Make the request formally and give the facts the panel needs.',
                 'Show that your case falls outside what the rule was aimed at.',
                 'Deal with the course change in the same email.'],
        skill=('Writing for a decision-making body',
               ['A panel reads dozens of these. Put the facts it needs in the order it needs '
                'them, early.',
                'Dates and documents, not feelings. The panel cannot act on how unfair '
                'something was.',
                'Handle every outstanding matter in one email. A second email arrives after '
                'the agenda closes.']),
        model=[
            'Dear Mr Mbeki,',
            '',
            'Thank you for putting the case on the May agenda. This is the formal request, '
            'with the facts in the order the panel will want them.',
            '',
            'My role was withdrawn on 2 February 2028 and has not been filled. The enhanced '
            'package was offered on 5 February to all eleven people on the shift, with a reply '
            'required within four working days. The redundancy notices for those who declined '
            'took effect on 28 February. I have attached the shift-wide offer letter, the '
            'notice schedule and the confirmation that the role was not readvertised.',
            '',
            'On the rule itself: it is aimed at a person leaving a secure post in order to '
            'obtain funded study. My post was not secure, the alternative to accepting was '
            'redundancy three weeks later on worse terms, and I applied for study only after '
            'the shift closed. None of the three features the rule targets is present.',
            '',
            'Separately, please change my course choice to the Level 5 Advanced Technician '
            'route, which is one term longer. I hold a Level 4 certificate, so the Level 4 '
            'course I originally listed would not have been fundable in any event, and I would '
            'rather correct that now than have the panel refuse on two grounds.',
            '',
            'I am happy to attend if that is useful.',
            '',
            'With thanks,',
            'Lennart Haverkamp',
        ],
        notes=['The facts arrive as dates and documents, in the order a panel needs them, '
               'with nothing to look up.',
               'The rule is restated as three features, and each is then shown to be absent — '
               'which is an argument rather than a complaint.',
               'The course change is handled in the same email, before the agenda closes.',
               'The writer corrects his own error openly, which costs nothing and makes the '
               'rest more credible.'],
        bandpair=dict(
            mid=[
                'Dear Mr Mbeki,',
                'Thank you so much for your email and for agreeing to take my case to the '
                'panel in May. I am very grateful for your help and for your understanding of '
                'my situation.',
                'As you said yourself, I did not really leave my job voluntarily. The whole '
                'shift was offered the package and I would have lost my job anyway very soon '
                'afterwards, with less money. I hope the panel will see that this is not what '
                'the rule was meant for, because it feels very unfair to be treated as if I '
                'had resigned.',
                'I would also like to change my course to the Level 5 one that you mentioned, '
                'since you said the Level 4 one would not be funded. Please let me know if you '
                'need anything else from me and I will send it straight away.',
                'Thank you again for everything. Best wishes, Lennart Haverkamp',
            ],
            top=[
                'Dear Mr Mbeki,',
                'Thank you for putting the case on the May agenda. This is the formal request, '
                'with the facts in the order the panel will want them.',
                'My role was withdrawn on 2 February and has not been filled. The enhanced '
                'package went to all eleven people on the shift on 5 February, with four '
                'working days to reply. Notices for those who declined took effect on 28 '
                'February. I attach the offer letter, the notice schedule and confirmation '
                'that the role was not readvertised.',
                'On the rule: it is aimed at somebody leaving a secure post to obtain funded '
                'study. My post was not secure, the alternative was redundancy three weeks '
                'later on worse terms, and I applied only after the shift closed. None of the '
                'three features is present.',
                'Please also change my course to the Level 5 route. I hold a Level 4 '
                'certificate, so my original choice was never fundable and I would rather '
                'correct that than be refused on two grounds. Lennart Haverkamp',
            ],
            diffs=[
                'It gives dates, numbers and named attachments, so the panel can verify every '
                'claim without asking.',
                'It decomposes the rule into three features and shows each to be absent, '
                'turning a sense of unfairness into an argument.',
                'It drops the appeal to feeling entirely, because a panel cannot act on how '
                'something felt.',
                'It volunteers its own error about the course level rather than leaving the '
                'reader to raise it a second time.',
                'It closes the whole matter in one email, which is what keeps it inside the '
                'agenda deadline.',
            ],
        ),
    ),

    w3=dict(
        sub='The shape of a working life',
        prof='Dr Almeida',
        question='The one-employer career has largely gone, and the institutions built around '
                 'it — occupational pensions, mortgage underwriting, professional licensing, '
                 'most training subsidy — still assume it. Some argue that these institutions '
                 'should be redesigned around the working life people actually have, even at '
                 'considerable cost. Others argue that doing so would legitimise and '
                 'accelerate a pattern that is bad for workers, and that effort should go '
                 'into restoring stable employment instead. Which approach is better '
                 'founded?',
        posts=[('Yusra', 'w',
                'Redesign them. The pattern is not coming back, and every year we spend '
                'defending institutions built for it is a year in which somebody who changed '
                'direction at forty pays a penalty nobody intended and nobody defends.'),
               ('Caspar', 'm',
                'Yusra is treating a political outcome as a law of nature. Stable employment '
                'did not evaporate; it was traded away, decision by decision, and rebuilding '
                'the institutions around instability is how you make the trade permanent.')],
        skill=('Answering an argument about legitimisation',
               ['The claim that fixing a harm legitimises its cause is serious and often '
                'unfalsifiable. Test it against a case.',
                'Ask whether the remedy and the restoration actually compete for the same '
                'resource.',
                'Then say what evidence would settle it.']),
        starters=['Caspar’s objection is the serious one and it needs a test.',
                  'Yusra is right that…, though her framing concedes…',
                  'Whether these two compete depends on…',
                  'What would settle it is…'],
        model=[
            'Caspar’s objection is the serious one and it needs a test, because as stated it '
            'can absorb any evidence. The claim is that repairing a harm legitimises whatever '
            'produced it. Sometimes that is true, and the way to tell is to ask whether the '
            'repair and the restoration draw on the same resource. Portable pensions and '
            'licensing that survives a career change are administrative work done by '
            'regulators and actuaries. Restoring stable employment is a bargaining question '
            'between employers, workers and the state. These are not the same people, the '
            'same budgets or even the same decade, so the trade-off he describes has to be '
            'argued for rather than assumed.',
            'Yusra is right that the penalty is real and undefended, and her framing concedes '
            'more than it needs to. Saying the pattern is not coming back invites exactly '
            'Caspar’s reply. The stronger version is narrower: whatever happens to employment '
            'stability over the next thirty years, the people who changed direction in the '
            'last ten are being fined now, and nothing in a restoration programme reaches '
            'them.',
            'What would settle it is whether portability has in practice preceded further '
            'casualisation. That is answerable: several countries made pensions portable '
            'decades ago, and if legitimisation works the way Caspar says, their employment '
            'tenure should have fallen faster afterwards than in comparable countries that did '
            'not. I do not know the answer, and neither post has looked.',
            'So I would do the administrative repair now and treat the bargaining question as '
            'a separate argument with separate opponents. Refusing to reduce an undefended '
            'penalty, in order to preserve the political salience of a harm, asks the people '
            'currently paying it to wait for a settlement nobody has scheduled.',
        ],
        model_words=283,
    ),

    gram=dict(
        title='The future in the past',
        headers=['Form', 'What it says'],
        rows=[
            ('was / were going to + infinitive', 'an intention or expectation, usually unfulfilled'),
            ('was / were supposed to + infinitive', 'an expectation imposed by somebody else'),
            ('was / were to + infinitive', 'formal: arranged in advance — the talks were to begin in May'),
            ('was / were due to + infinitive', 'scheduled: the notice was due to take effect in March'),
            ('would + infinitive', 'a future seen from a past viewpoint, in narrative'),
            ('would have + past participle', 'what would have happened under a different condition'),
            ('was on the point of + -ing', 'about to happen, very close'),
        ],
        notes=[
            'Was going to and was supposed to both normally imply that the thing did not '
            'happen. If it did happen, English prefers the simple past: the notice took '
            'effect in March.',
            'Was to have + past participle makes the non-fulfilment explicit: the talks were '
            'to have begun in May. Without have, the sentence is neutral about whether they '
            'did.',
            'Would is the narrative future in the past and does not imply failure: he joined '
            'the firm at sixteen and would stay for forty years. Students often avoid this '
            'would, which makes their narrative writing flat.',
        ],
        watch='Do not write "I would have been made redundant anyway, so I was forced to '
              'accept" and then use was going to in the same sentence for the same event. '
              'Pick the frame — a counterfactual or an unfulfilled expectation — and stay in '
              'it.',
        ex=[
            ('Choose was going to, was supposed to or was due to.',
             ['The notice ______ take effect in March.',
              'Machines ______ take the physical work first.',
              'I ______ receive a reply within four working days.',
              'The panel ______ meet in May and was postponed.',
              'We ______ be safe in the cognitive work.',
              'The course ______ start in September.'],
             ['was due to', 'were going to', 'was supposed to', 'was due to',
              'were supposed to', 'was due to']),
            ('Correct the time frame.',
             ['I would be made redundant anyway, so I accepted.',
              'The talks were to have begin in May.',
              'He was going to stay for forty years, and he did.',
              'She was on the point of to resign.'],
             ['I would have been made redundant anyway, so I accepted.',
              'The talks were to have begun in May.',
              'He stayed for forty years.',
              'She was on the point of resigning.']),
            ('Rewrite using would + infinitive as a narrative future.',
             ['He joined the firm at sixteen and stayed for forty years.',
              'She took the Level 5 course and later ran the department.',
              'The scheme opened in 2019 and funded nine thousand people.',
              'The rule was written in 2011 and caught the wrong applicants for a decade.'],
             ['He joined the firm at sixteen and would stay for forty years.',
              'She took the Level 5 course and would later run the department.',
              'The scheme opened in 2019 and would fund nine thousand people.',
              'The rule was written in 2011 and would catch the wrong applicants for a '
              'decade.']),
        ],
        bas='Two of the ten Build a Sentence items in this unit use a future in the past. A '
            'tile reading going or supposed is followed by to and a bare infinitive; a tile '
            'reading have signals would have and a past participle.',
    ),

    fault=dict(
        text='The talks were to have begin in May. I would be made redundant anyway, so I '
             'accepted the package. He was going to stay for forty years, and he did. Nobody '
             'knows whether was the role readvertised. Having withdrawn the role, the package '
             'was offered to the whole shift.',
        faults=[
            ('were to have begin', 'were to have begun',
             'Was to have is followed by a past participle, not by a bare infinitive.'),
            ('I would be made redundant anyway, so I accepted',
             'I would have been made redundant anyway, so I accepted',
             'A counterfactual about the past needs would have been rather than would be.'),
            ('He was going to stay for forty years, and he did',
             'He stayed for forty years',
             'Was going to implies the thing did not happen, so it contradicts the clause '
             'that follows it.'),
            ('whether was the role readvertised', 'whether the role was readvertised',
             'An embedded question keeps statement order and does not invert the verb.'),
            ('Having withdrawn the role, the package was offered',
             'Having withdrawn the role, the employer offered the package',
             'The package did not withdraw anything; the participle needs the subject that '
             'acted.'),
        ],
    ),

    rev=dict(
        vocab=[
            ('the rate at which workers leave and are replaced', 'churn'),
            ('loss of a job because the job has gone', 'redundancy'),
            ('output per hour of work', 'productivity'),
            ('no longer of use', 'obsolete'),
            ('a complete statement of what is required', 'specification'),
            ('to do with thinking', 'cognitive'),
            ('a payment on losing a job', 'severance'),
            ('to learn a different trade', 'reskill'),
            ('to split into two extremes', 'polarise'),
            ('to pay part of the cost of something', 'subsidise'),
            ('something a person has a right to', 'entitlement'),
            ('the move from one state to another', 'transition'),
        ],
        gram=[
            ('The notice ______ due to take effect in March.', 'was'),
            ('Machines were ______ to take the physical work first.', 'going'),
            ('The talks were to ______ begun in May.', 'have'),
            ('I would ______ been made redundant anyway.', 'have'),
            ('He joined at sixteen and ______ stay for forty years.', 'would'),
            ('She was on the point of ______ when the offer came.', 'resigning'),
            ('We were ______ to be safe in the cognitive work.', 'supposed'),
            ('The course was ______ to start in September.', 'due'),
        ],
        mini=[
            ('A task can be automated when',
             ('it is physically easy', 'it can be specified completely',
              'it is poorly paid', 'it is repetitive in appearance'), 1,
             'Specifiability, not apparent difficulty, is what decides, which is why the '
             'predicted order was wrong.'),
            ('Predictions about automation got the order wrong because',
             ('technology moved faster than expected',
              'difficulty was judged by how long humans take to learn a task',
              'economists ignored data', 'firms concealed their plans'), 1,
             'That measure tracks the scarcity of a skill in our species rather than the '
             'complexity of the task.'),
            ('The one-employer career ended mainly because',
             ('workers wanted variety', 'firms stopped outlasting careers and skills turned over faster',
              'governments withdrew support', 'wages fell'), 1,
             'Neither cause is a preference, which is why urging loyalty has nothing to act '
             'on.'),
            ('Which sentence is correct?',
             ('The talks were to have begin in May.',
              'The talks were to have begun in May.',
              'The talks were to having begun in May.',
              'The talks were to begin have in May.'), 1,
             'Was to have is followed by a past participle, and the form makes the '
             'non-fulfilment explicit.'),
            ('"On closer inspection" tells you that the writer',
             ('agrees with the first impression', 'found the first impression wrong',
              'is uncertain', 'is quoting somebody'), 1,
             'It introduces a correction of something the reader was likely to assume.'),
            ('The penalty on changing career at forty is, in the passage,',
             ('an economic necessity', 'an artefact of institutional design',
              'a deserved cost', 'a legal rule'), 1,
             'The author separates it from the underlying change precisely because it is '
             'solvable.'),
        ],
    ),

    tip='The future in the past is the structure that separates a competent narrative from a '
        'confused one. If you can say was going to, was to have and would have in the right '
        'places, you can write about a plan that failed — which is most of history, most of '
        'policy and a large share of TOEFL discussion prompts.',
)
