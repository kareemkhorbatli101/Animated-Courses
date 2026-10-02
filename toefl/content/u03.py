# -*- coding: utf-8 -*-
"""Unit 3 · Cells and Genetics."""

UNIT = dict(
    n=3, vol=1, title='Cells and Genetics',
    icons=('flask', 'leaf', 'people'),
    subs=('What a cell does', 'A laboratory induction', 'Inherited traits'),
    grammar='The present passive',
    field='structure, function, inheritance',
    opener_line='Science writing uses the passive constantly, because what matters is what is '
                'done, not who does it. That is why the passive is this unit’s grammar.',

    candos=[
        'complete word endings in a text that describes how something works',
        'read a safety notice and an induction email for the one rule that applies to me',
        'follow an academic passage that explains why something happens',
        'understand two students sorting out a timetable problem',
        'describe a process out loud using the passive',
        'write an email asking to rearrange something, and a post that answers an objection',
    ],

    acad=[
        ('structure', 'the way the parts of something are arranged'),
        ('function', 'the job that something does'),
        ('component', 'one part of a larger thing'),
        ('element', 'one of the basic parts of something'),
        ('complex', 'made of many connected parts'),
        ('process', 'a series of actions that produce a result'),
        ('generate', 'to produce or make'),
        ('generation', 'all the people born at about the same time'),
        ('inherent', 'existing as a natural part of something'),
        ('chemical', 'connected with substances and how they react'),
        ('react', 'to change when mixed with another substance'),
        ('transmit', 'to pass something from one place or person to another'),
        ('derive', 'to come from, or to get from'),
        ('distinct', 'clearly different from other things'),
        ('identical', 'exactly the same'),
        ('vary', 'to be different in different cases'),
        ('similar', 'almost the same'),
        ('consist', 'to be made of (consist of)'),
        ('comprise', 'to be made up of'),
        ('feature', 'a noticeable part or quality'),
        ('mechanism', 'the way a thing works, part by part'),
        ('specify', 'to say exactly which or what'),
        ('isolate', 'to separate one thing from the rest'),
        ('trace', 'to follow something back to where it began'),
    ],
    campus=[
        ('laboratory', 'a room for scientific work'),
        ('induction', 'a first meeting that teaches you the rules'),
        ('goggles', 'glasses that protect the eyes'),
        ('lab coat', 'a white coat worn in a laboratory'),
        ('bench', 'a long work table in a laboratory'),
        ('sample', 'a small amount taken for testing'),
        ('safety rules', 'instructions that keep people from being hurt'),
        ('technician', 'a person who looks after equipment'),
        ('slot', 'a short period of time set aside for something'),
        ('swap', 'to exchange one thing for another'),
        ('hand in', 'to give work to a teacher'),
        ('make-up session', 'a replacement class for one you missed'),
    ],
    vocab_talk=[
        'Name two things in your body that have a clear function. What are they?',
        'Are you more similar to one parent than the other? In what way?',
        'Think of a complex machine you use. What are its main components?',
        'What is one feature of your home town that visitors always notice?',
    ],
    again=['structure', 'process', 'significant', 'estimate', 'detect', 'vary', 'identify', 'confirm'],

    r1=dict(
        sub='What a cell does',
        skill=('Watch for passive endings',
               ['In a science text the gap is often -ed on a passive verb: is used, are carried.',
                'A gap right after is, are, was or were is almost certainly a past participle.',
                'Noun endings are common too: -ion, -ment, -ance. Count the dashes.',
                'Read on past the gap. The rest of the sentence often names the ending for you.']),
        guided_text='A cell is the small--- living thing there is. Everything a body does is '
                    'done inside cells: food is brok-- down, energy is relea---, and waste is '
                    'carr--- away. A single drop of blood holds about five mill--- of them.',
        guided_hint='1  small---  →  est  (smallest)',
        guided=['est', 'en', 'sed', 'ied', 'ion'],
        exam_text='Every living thing is built from cells, and almost everything that keeps it '
                  'alive hap---- inside them. A cell is not a simple bag. It cont---- dozens of '
                  'separate structures, each with its own funct---. Energy is gener---- in one '
                  'place, proteins are assem---- in another, and waste is bro--- down in a third. '
                  'Instructions for all of this are st---- in the nucleus and are cop--- every '
                  'time the cell divides. The remark---- thing is the scale. A human body '
                  'contains roughly thirty trillion cells, and in a healthy adult about two '
                  'million of them are repl---- every second.',
        exam=['pens', 'ains', 'ion', 'ated', 'bled', 'ken', 'ored', 'ied', 'able', 'aced'],
    ),

    r2=dict(
        sub='A laboratory induction',
        skill=('Find the rule that applies to you',
               ['A safety notice has many rules but a question asks about one person. Match '
                'the person to the rule.',
                'Words like must, must not, may and only mark the testable sentences.',
                'An exception (except, unless, other than) is almost always the answer to '
                'something.',
                'In an email, a deadline and a consequence usually come as a pair.']),
        docs=[
            ('notice', 'Marwood Building · Teaching Laboratory 2 — safety rules', [
                '# Before you enter',
                '* A lab coat and goggles must be worn at all times. Both are issued at the door.',
                '* Bags and coats are left on the rack outside. Nothing is stored under a bench.',
                '* Open shoes are not permitted, with no exceptions.',
                '# While you work',
                '* Food and drink are not allowed, including bottled water.',
                '* Samples are labelled before they are moved, never after.',
                '* Any breakage is reported to the technician immediately, however small.',
                '# Access',
                '* The laboratory is only opened by a member of staff. Students do not hold keys.',
            ], 'notice'),
            ('email', 'r.santos@marwood.edu', 'labs@marwood.edu',
             '08/11/2025', 'Induction — you must attend before your first session', [
                 'Dear Ms Santos,',
                 '',
                 'Our records show that you have not yet completed the laboratory',
                 'induction. Students who have not been inducted cannot be admitted',
                 'to Teaching Laboratory 2, and the first practical is on 19 November.',
                 '',
                 'Two sessions remain: Tuesday 11 November at 14.00 and Thursday 13',
                 'November at 09.00. Each lasts fifty minutes. Please come in closed',
                 'shoes; you will be sent away if you do not.',
                 '',
                 'If neither suits you, reply to this address by Friday and a make-up',
                 'session will be arranged. After Friday no further sessions are offered.',
                 '',
                 'Alex Fenwick, Laboratory Manager',
             ]),
        ],
        guided=[
            ('Where are bags left?',
             ('Under the bench', 'On the rack outside', 'At the technician’s desk',
              'In the corridor cupboard'), 1,
             'Bags and coats are left on the rack outside; the next sentence rules out under a bench.'),
            ('What is issued at the door?',
             ('Keys', 'Samples', 'A lab coat and goggles', 'A safety sheet'), 2,
             'Both are issued at the door — both refers to the coat and the goggles.'),
            ('When must a sample be labelled?',
             ('After it is moved', 'Before it is moved', 'At the end of the session',
              'Only if it is dangerous'), 1,
             'Samples are labelled before they are moved, never after. The sentence gives both halves.'),
            ('Who can open the laboratory?',
             ('Any student', 'A member of staff', 'The first person to arrive',
              'A student with a key'), 1,
             'Only opened by a member of staff, and students do not hold keys.'),
        ],
        exam=[
            ('What is the main purpose of the email?',
             ('To cancel a practical', 'To offer a new course',
              'To warn that an induction is still needed', 'To change a laboratory'), 2,
             'The subject line and the first paragraph both say she has not been inducted and '
             'cannot be admitted without it.'),
            ('What will happen if Ms Santos attends no induction?',
             ('She will be fined', 'She cannot attend the practical on 19 November',
              'She must repeat the module', 'She will be given a key'), 1,
             'Students who have not been inducted cannot be admitted, and the practical date is '
             'given in the same sentence.'),
            ('How long does an induction session last?',
             ('Thirty minutes', 'Fifty minutes', 'One hour', 'Two hours'), 1,
             'Each lasts fifty minutes.'),
            ('Why does the email mention closed shoes?',
             ('They are more comfortable', 'They are issued at the door',
              'Students in open shoes are sent away', 'They are cheaper'), 2,
             'You will be sent away if you do not, which matches the notice’s no exceptions rule.'),
            ('What should Ms Santos do if neither date is possible?',
             ('Go to the laboratory anyway', 'Reply by Friday',
              'Ask another student to go', 'Wait for the next term'), 1,
             'Reply to this address by Friday and a make-up session will be arranged.'),
            ('Which of these is allowed in the laboratory?',
             ('A bottle of water', 'A bag under the bench', 'A labelled sample',
              'Open shoes'), 2,
             'Samples are allowed and must be labelled. Water is named as not allowed, and the '
             'other two are forbidden outright.'),
        ],
    ),

    r3=dict(
        sub='Inherited traits',
        title='Why Children Resemble Their Parents',
        words=275,
        paras=[
            'Everybody notices family resemblance, and for most of history nobody could explain '
            'it. The common belief was that the qualities of the two parents were simply mixed, '
            'like two colours of paint. That idea has an obvious problem. If characteristics were '
            'blended, every generation would be more similar than the one before it, and after a '
            'few hundred years everyone would be alike. Plainly that does not happen.',
            'The answer came from a monastery garden. In the 1860s Gregor Mendel grew thousands '
            'of pea plants and counted what he got. He found that a trait which disappeared in '
            'one generation could return, unchanged, in the next. A tall plant crossed with a '
            'short one did not give a medium plant; it gave a tall one. But when those plants '
            'were crossed with each other, short plants reappeared, in a predictable proportion. '
            'Characteristics, in other words, are not blended. They are passed on as separate '
            'units, and some of them are simply hidden when a stronger version is present.',
            'Mendel’s work was ignored for thirty-four years. When it was rediscovered in 1900, '
            'biologists already had microscopes good enough to see what he had only inferred: '
            'structures inside the cell that are copied and divided in exactly the pattern his '
            'numbers predicted. It is a rare case in science of a theory waiting, fully formed, '
            'for the instrument that would confirm it.',
        ],
        skill=('Spot the wrong idea and the right one',
               ['Many academic passages open with a belief that turns out to be wrong. Mark it.',
                'The paragraph that follows usually gives the evidence that replaced it.',
                'An EXCEPT question wants the one statement the passage does not support. Tick '
                'off the three it does.',
                'Dates in the final paragraph are often tested as a sequence, not as facts.']),
        guided=[
            ('What is the passage mainly about?',
             ('How Mendel grew pea plants', 'How characteristics are actually passed on',
              'Why microscopes were invented', 'The history of monasteries'), 1,
             'A wrong belief, the evidence against it, and its confirmation — all three '
             'paragraphs serve that one question.'),
            ('According to paragraph 1, what was the problem with the blending idea?',
             ('It could not be tested', 'It would make everyone alike over time',
              'It was invented by Mendel', 'It only applied to plants'), 1,
             'Every generation would be more similar than the one before it — and plainly that '
             'does not happen.'),
            ('The word "blended" in paragraph 2 is closest in meaning to',
             ('mixed together', 'passed on', 'counted', 'hidden'), 0,
             'The paint image in paragraph 1 defines it: two things mixed into one.'),
            ('Why does the author mention a tall plant and a short one?',
             ('To show that height is unimportant', 'To show that traits are not blended',
              'To explain how peas grow', 'To describe Mendel’s garden'), 1,
             'It did not give a medium plant — the example exists to disprove blending.'),
        ],
        exam=[
            ('According to paragraph 2, what happened when the tall plants were crossed with '
             'each other?',
             ('All the offspring were tall', 'Short plants reappeared',
              'Medium plants appeared', 'The plants did not grow'), 1,
             'Short plants reappeared, in a predictable proportion — that is the whole point of '
             'the experiment.'),
            ('All of the following are true about Mendel EXCEPT:',
             ('He worked with pea plants', 'He counted his results',
              'He used a microscope to see the structures', 'His work was ignored for years'), 2,
             'Paragraph 3 says the opposite: he had only inferred the structures, and microscopes '
             'came later.'),
            ('The word "inferred" in paragraph 3 is closest in meaning to',
             ('worked out without seeing', 'measured exactly', 'described in writing',
              'disagreed with'), 0,
             'It is contrasted with what biologists could now see, so it means he reached it by '
             'reasoning.'),
            ('How long was Mendel’s work ignored?',
             ('Thirty years', 'Thirty-four years', 'Forty years', 'A hundred years'), 1,
             'Thirty-four years, from the 1860s until 1900.'),
            ('What can be inferred about biology in 1900?',
             ('It had better instruments than in the 1860s', 'It had rejected Mendel',
              'It no longer used microscopes', 'It had proved the blending theory'), 0,
             'Microscopes good enough to see what he had only inferred — so the instruments had '
             'improved in the interval.'),
            ('What does the author find unusual about this case?',
             ('A theory existed before the instrument that could confirm it',
              'A monk made a scientific discovery', 'Peas were used instead of animals',
              'The results were counted'), 0,
             'It is a rare case of a theory waiting, fully formed, for the instrument.'),
            ('Which best states the main idea of paragraph 2?',
             ('Peas are easy to grow', 'Traits are passed on as separate units',
              'Tall plants are more common', 'Mendel worked in a garden'), 1,
             'The paragraph ends on exactly that sentence, and everything before it builds to it.'),
        ],
    ),

    l1=dict(
        sub='A laboratory induction',
        caption='Two students sort out a timetable clash',
        skill=('Follow who does what',
               ['A conversation about arrangements is full of names and times. Keep them straight.',
                'Listen for the obstacle. There is usually one thing that makes the plan hard.',
                'A suggestion often comes as a question: why don’t you…? couldn’t you…?',
                'The last two lines usually settle it. Do not stop listening early.']),
        warm=[
            ('Woman: Have you done your lab induction yet?',
             ('It’s in Marwood Building.', 'Not yet — I keep missing it.',
              'Fifty minutes.', 'Yes, it was a good practical.'), 1,
             'A yes/no question about an action, so the answer both replies and explains.'),
            ('Man: Which session are you going to?',
             ('The Thursday one.', 'At nine o’clock in the morning.',
              'Because I have a lecture.', 'With Alex Fenwick.'), 0,
             'Which wants one of the options. The time alone does not identify a session here.'),
            ('Woman: I’ve got a seminar at the same time.',
             ('It lasts fifty minutes.', 'Can’t you swap?', 'Yes, I’ve done mine.',
              'The seminar is interesting.'), 1,
             'A problem is naturally met with a suggestion.'),
        ],
        script=[
            ('Man', 'Did you get the email from the lab manager?'),
            ('Woman', 'The one about the induction? Yes. I thought I’d done it.'),
            ('Man', 'So did I, but apparently that was the chemistry one. This is for Teaching '
                    'Lab 2.'),
            ('Woman', 'Oh, no. So there are two.'),
            ('Man', 'There are two. Tuesday at two, or Thursday at nine.'),
            ('Woman', 'Tuesday at two is my statistics seminar.'),
            ('Man', 'Thursday then.'),
            ('Woman', 'Thursday at nine I’m on the train. I don’t get in until half past.'),
            ('Man', 'Then you’ll have to email and ask for a make-up session. He says he’ll '
                    'arrange one if you reply by Friday.'),
            ('Woman', 'And if I don’t?'),
            ('Man', 'Then nothing. No induction, no practical on the nineteenth.'),
            ('Woman', 'Right. I’ll do it now, before I forget again.'),
        ],
        items=[
            ('What is the woman’s problem?',
             ('She did not receive the email', 'Neither session fits her timetable',
              'She has lost her lab coat', 'The practical has been cancelled'), 1,
             'Tuesday clashes with a seminar and she cannot reach Thursday’s on time.'),
            ('Why did the woman think she had already been inducted?',
             ('She attended the chemistry induction', 'She read the wrong email',
              'A friend told her', 'She has a key to the laboratory'), 0,
             'The man corrects her: that was the chemistry one.'),
            ('Why can the woman not attend on Thursday?',
             ('She has a seminar', 'She arrives on a later train',
              'She is away that week', 'The session is full'), 1,
             'She does not get in until half past, and the session starts at nine.'),
            ('What does the man advise her to do?',
             ('Go to Tuesday’s session anyway', 'Ask for a make-up session',
              'Speak to her seminar tutor', 'Wait until next term'), 1,
             'He quotes the email: reply by Friday and one will be arranged.'),
            ('What happens if she does not reply by Friday?',
             ('She pays a fee', 'She misses the practical on the nineteenth',
              'She joins a later group', 'She repeats the module'), 1,
             'No induction, no practical on the nineteenth — the man states it flatly.'),
            ('What does the woman mean when she says "before I forget again"?',
             ('She has forgotten this before', 'She has a bad memory for dates',
              'She will write it in her diary', 'She does not want to go'), 0,
             'Again refers back to the fact that she had already let the first email pass.'),
        ],
    ),

    l2=dict(
        sub='A laboratory induction',
        caption='An announcement about laboratory rules',
        poster=['Goggles now issued at the door, not the bench',
                'No bags of any size inside',
                'Breakages: tell the technician at once'],
        skill=('Hear the rule and its exception',
               ['Rules in announcements almost always have one exception. Listen for except, '
                'unless, other than.',
                'A rule that changes is more testable than a rule that stays. Note both versions.',
                'Numbers attached to rules (sizes, times, amounts) are nearly always asked about.',
                'The reason for a rule is often given once, quickly. Catch it the first time.']),
        warm=[
            ('Man: Where do we get the goggles now?',
             ('They’re issued at the door.', 'Everyone must wear them.',
              'Because of the new rule.', 'Yes, they’re compulsory.'), 0,
             'Where wants a place.'),
            ('Woman: Can I take a small bag in?',
             ('It’s on the rack.', 'No bags at all, I’m afraid.',
              'Mine is quite small.', 'The lab opens at nine.'), 1,
             'A can-I question wants permission, granted or refused.'),
            ('Man: What do I do if I break something?',
             ('Tell the technician straight away.', 'It was an accident.',
              'The glass is expensive.', 'Nothing is stored under a bench.'), 0,
             'A what-do-I-do question wants an instruction.'),
        ],
        script=[
            ('Man', 'Before your first practical, three changes to the laboratory rules. First, '
                    'goggles and lab coats are now issued at the door rather than collected from '
                    'the bench, because last term several people reached their bench without '
                    'either. Second, the rack outside is gone, so no bags are brought into the '
                    'building at all — not even a small one. Lockers are available in the '
                    'corridor and they are free, but you need a coin, which is returned. Third, '
                    'and this is the important one: any breakage is reported to the technician '
                    'at once, however small it looks. A piece of glass you cannot see is more '
                    'dangerous than one you can. Nobody is ever in trouble for reporting a '
                    'breakage. People are in trouble for not reporting one. The one exception to '
                    'the no-drink rule is medical: if you need water for medication, speak to '
                    'the technician before the session, not during it.'),
        ],
        items=[
            ('What is the main purpose of the announcement?',
             ('To cancel a practical', 'To explain three changes to the rules',
              'To introduce the technician', 'To describe the equipment'), 1,
             'The speaker says three changes and then numbers them.'),
            ('Why are goggles now issued at the door?',
             ('The benches are full', 'Students reached their bench without them',
              'They are cheaper to store there', 'The technician asked for it'), 1,
             'Because last term several people reached their bench without either.'),
            ('What is said about the lockers?',
             ('They cost a small fee', 'They need a coin, which is given back',
              'They are only for large bags', 'They are inside the laboratory'), 1,
             'They are free but need a coin, which is returned.'),
            ('Why must even a small breakage be reported?',
             ('To replace the equipment', 'Because glass you cannot see is more dangerous',
              'To record who caused it', 'Because the technician must clean it'), 1,
             'The speaker gives exactly that reason, and adds that nobody is in trouble for '
             'reporting.'),
            ('What is the one exception to the no-drink rule?',
             ('Water during a long session', 'Water needed for medication',
              'Hot drinks before the session', 'There is no exception'), 1,
             'The exception is medical, and it must be arranged before the session.'),
        ],
    ),

    l3=dict(
        sub='What a cell does',
        caption='A talk on how a cell divides',
        board=['1  Copy the instructions', '2  Line them up',
               '3  Pull them apart', '4  Divide the cell'],
        skill=('Use the stages on the board',
               ['When a talk numbers its stages, each number will get one chunk of the audio.',
                'Listen for what can go wrong at each stage. That is where the questions are.',
                'A speaker who says the important thing is or what I want you to notice is '
                'handing you the main idea.',
                'The final sentence often points forward to the next lecture.']),
        warm=[
            ('Woman: How long does the whole process take?',
             ('About twenty-four hours.', 'In the nucleus.', 'Four stages.',
              'Yes, it’s complicated.'), 0,
             'How long wants a length of time.'),
            ('Man: Is the copy always perfect?',
             ('It is copied every time.', 'Almost, but not quite.',
              'In the second stage.', 'Thirty trillion cells.'), 1,
             'A yes/no question, and the right reply answers it honestly and usefully.'),
            ('Woman: I didn’t catch the third stage.',
             ('It’s on the board.', 'Neither did I.', 'They are pulled apart.',
              'Yes, four stages.'), 2,
             'The most helpful reply supplies the missed information.'),
        ],
        script=[
            ('Professor', 'A human body replaces about two million cells every second, and every '
                          'one of those replacements is a copy. So the question for today is how '
                          'a cell makes a copy of itself without making mistakes. Look at the '
                          'four stages on the board. First, the instructions are copied, so that '
                          'there are two complete sets instead of one. This is the slow part — '
                          'it takes most of the cell’s working life. Second, the two sets are '
                          'lined up along the middle of the cell. Third, they are pulled apart, '
                          'one set to each end. Fourth, the cell itself divides between them. '
                          'Now, the important thing is not the sequence. It is that the cell '
                          'checks between the stages. Before the sets are pulled apart, the cell '
                          'confirms that every one of them is properly attached, and if a single '
                          'one is not, the whole process stops and waits. That pause is why the '
                          'copy is almost always perfect. Almost. Mistakes do get through, at a '
                          'rate of roughly one in a billion, and next week we will look at what '
                          'happens when they do.'),
        ],
        items=[
            ('What is the main idea of the talk?',
             ('Cells divide in four stages', 'Checking between stages is what makes copying '
              'accurate', 'Two million cells are replaced every second',
              'Mistakes in copying are common'), 1,
             'The speaker says the important thing is not the sequence, and then names the checks.'),
            ('Which stage takes the longest?',
             ('Copying the instructions', 'Lining them up', 'Pulling them apart',
              'Dividing the cell'), 0,
             'This is the slow part — it takes most of the cell’s working life.'),
            ('What happens if one set is not properly attached?',
             ('The cell divides anyway', 'The process stops and waits',
              'The copy is discarded', 'The cell starts again from stage one'), 1,
             'The whole process stops and waits — the speaker says so directly.'),
            ('Why does the speaker mention two million cells a second?',
             ('To show how fast cells move', 'To show how much copying a body does',
              'To explain how long division takes', 'To compare humans with plants'), 1,
             'It opens the talk and frames the question: how is all that copying done accurately?'),
            ('How often does a mistake get through?',
             ('Never', 'About one in a million', 'About one in a billion', 'Every second'), 2,
             'Roughly one in a billion — the speaker gives the figure just before the end.'),
            ('What will the speaker most likely discuss next week?',
             ('The four stages again', 'What happens when a mistake gets through',
              'How microscopes work', 'How plants divide'), 1,
             'The last sentence says exactly that.'),
        ],
    ),

    sp=[
        dict(sub='What a cell does', focus='consonant clusters in science words',
             skill=('Slow the cluster, not the sentence',
                    ['Words like structure, instructions and strongest have three consonants '
                     'together. Say each one.',
                     'Do not add a vowel: it is structure, not sut-ructure.',
                     'Keep the sentence rhythm normal. Only the cluster slows.',
                     'Finish the sentence even if one word comes out wrong.']),
             repeat=['Every cell has a structure.',
                     'Instructions are stored in the nucleus.',
                     'The strongest version is the one that shows.',
                     'Proteins are assembled in a separate part of the cell.',
                     'Waste products are broken down and transported out.',
                     'The complex structures inside a cell each have a distinct function.',
                     'Before the sets are pulled apart, the cell confirms that every one of them is properly attached.'],
             theme='science at your school',
             qs=['First, did you study biology at school?',
                 'People remember science lessons very differently. How did you find them, and '
                 'why do you think that was?',
                 'Some people say that practical work is the only part of science teaching that '
                 'matters. Do you agree? Why or why not?',
                 'Finally, should every student have to study a science subject until they '
                 'leave school? Why or why not?'],
             model=[(2, 'I enjoyed the practicals and disliked everything else, which is probably '
                        'because I only understood things once I had done them.'),
                    (4, 'I think they should. Not to make scientists, but so that everyone can '
                        'read a news story about health and know what a study is.')],
             selfcheck=['I said consonant clusters without adding an extra vowel',
                        'I kept a normal sentence rhythm',
                        'I answered the question that was asked']),
        dict(sub='A laboratory induction', focus='the passive in speech',
             skill=('Use the passive to describe a system',
                    ['Rules and procedures are described in the passive: coats are issued, '
                     'samples are labelled.',
                     'This is not formal English for its own sake — it is shorter, because you '
                     'leave out who.',
                     'Mix it with the active, or you will sound like a notice.',
                     'Say what is done first, then who does it, only if it matters.']),
             repeat=['Goggles are issued at the door.',
                     'No bags are allowed inside.',
                     'Breakages are reported to the technician.',
                     'Samples are labelled before they are moved.',
                     'The laboratory is only opened by a member of staff.',
                     'Students who have not been inducted are not admitted to the practical.',
                     'A make-up session will be arranged if you reply before the end of the week.'],
             theme='rules where you study or work',
             qs=['To start, is there a rule where you study that everybody has to follow?',
                 'Rules affect people differently. How do you react to a rule you think is '
                 'unnecessary, and why?',
                 'Some people argue that safety rules are often stricter than they need to be. '
                 'Do you agree? Why or why not?',
                 'Last question. Should students help to decide the rules in their own '
                 'institution? Why or why not?'],
             model=[(2, 'I usually follow it and complain afterwards, because arguing at the door '
                        'never works. But I do think somebody should ask why it exists.'),
                    (3, 'Not in a laboratory, no. One reason is that the person who writes the '
                        'rule has usually seen the accident that caused it.')],
             selfcheck=['I used at least three passive forms',
                        'I also used some active sentences',
                        'I gave one clear reason, not three weak ones']),
        dict(sub='Inherited traits', focus='academic register',
             skill=('Explain a finding, not an opinion',
                    ['Use this unit’s words: derive, vary, identical, transmit, mechanism.',
                     'Say what was found, then what it means: Mendel found that…, which shows '
                     'that…',
                     'Hedge where you should: it seems that, the evidence suggests.',
                     'Use the self-check below before you listen to your recording.']),
             repeat=['Characteristics are transmitted as separate units.',
                     'Some traits are hidden in one generation and reappear in the next.',
                     'Identical twins derive from a single cell.',
                     'The mechanism was inferred long before it could be observed.',
                     'Mendel counted thousands of plants and recorded every result.',
                     'The proportion of short plants in the second generation was predictable.',
                     'It is a rare case of a theory waiting, fully formed, for the instrument that would confirm it.'],
             theme='whether science should be compulsory',
             qs=['First, which subject at school taught you the most about how to think?',
                 'Students react differently to difficult subjects. How did you react, and why?',
                 'Some people believe that schools should teach genetics to everyone, because of '
                 'the decisions people will face. Do you agree? Why or why not?',
                 'Finally, who should decide what is taught in schools — teachers, governments '
                 'or parents? Why?'],
             model=[(3, 'I agree with that. The evidence suggests people will be offered genetic '
                        'tests in ordinary medicine, and you cannot consent to something you do '
                        'not understand.'),
                    (4, 'Teachers, mainly. One reason is that they are the only group that sees '
                        'what actually works in a classroom.')],
             selfcheck=['I used at least three academic words from this unit',
                        'I separated the finding from my opinion about it',
                        'I hedged where I was not certain']),
    ],

    w1=dict(
        sub='What a cell does',
        skill=('Build the passive question',
               ['A passive question needs is or are in front of the subject: How is it done?',
                'If a tile says is, are, was or were, look for a past participle to pair with it.',
                'An indirect question keeps the normal order: Do you know how it is done?',
                'Use every tile. A tile left over means the order is wrong.']),
        guided=[
            ('Samples are labelled before they are moved.',
             ['are', 'when', 'samples', 'labelled'],
             'When are samples labelled?'),
            ('The instructions are copied in the nucleus.',
             ['are', 'where', 'the', 'copied', 'instructions'],
             'Where are the instructions copied?'),
            ('Energy is generated inside the cell.',
             ['know', 'you', 'do', 'how', 'is', 'energy', 'generated'],
             'Do you know how energy is generated?'),
        ],
        exam=[
            ('Goggles are issued at the door.',
             ['are', 'where', 'goggles', 'issued'],
             'Where are goggles issued?'),
            ('The laboratory is opened by a member of staff.',
             ['the', 'who', 'is', 'laboratory', 'opened', 'by'],
             'Who is the laboratory opened by?'),
            ('Two million cells are replaced every second.',
             ['many', 'how', 'cells', 'are', 'replaced'],
             'How many cells are replaced?'),
            ('A make-up session will be arranged if you reply.',
             ['tell', 'can', 'you', 'me', 'whether', 'a', 'session', 'will', 'be', 'arranged'],
             'Can you tell me whether a session will be arranged?'),
            ('The work that Mendel did was ignored for years.',
             ['the', 'work', 'that', 'Mendel', 'did', 'was', 'ignored', 'for', 'years'],
             'The work that Mendel did was ignored for years.'),
            ('Breakages are reported to the technician.',
             ['are', 'to', 'whom', 'breakages', 'reported'],
             'To whom are breakages reported?'),
            ('The process stops when something is not attached.',
             ['know', 'do', 'you', 'why', 'the', 'process', 'stops'],
             'Do you know why the process stops?'),
        ],
    ),
    w2=dict(
        sub='A laboratory induction',
        to='labs@marwood.edu',
        date='09/11/2025',
        subject='Induction — request for a make-up session',
        scenario=[
            'You have been told that you must attend a laboratory induction before your first '
            'practical on 19 November. Neither of the two remaining sessions is possible for '
            'you: Tuesday at 14.00 clashes with a seminar, and you cannot reach the campus '
            'before 9.30 on a Thursday.',
            'Write an email to the Laboratory Manager, Alex Fenwick.',
        ],
        bullets=['Explain which sessions you cannot attend and why.',
                 'Ask for a make-up session.',
                 'Say what you can do to make it easy to arrange.'],
        skill=('Give the reason before the request',
               ['A reader says yes more readily when the reason comes first.',
                'Be exact about times. Tuesday at 14.00, not Tuesday afternoon.',
                'Offer something: your free times, a willingness to come early.',
                'Keep it to three short paragraphs — one per bullet.']),
        model=[
            'Dear Mr Fenwick,',
            'Thank you for your email about the laboratory induction. Unfortunately neither of '
            'the remaining sessions is possible for me. Tuesday at 14.00 is my statistics '
            'seminar, which is compulsory, and on Thursdays I travel in by train and do not '
            'reach the campus until 9.30, half an hour after the session begins.',
            'I am writing before Friday, as you asked, to request a make-up session. I am keen '
            'not to miss the practical on 19 November.',
            'To make this as easy as possible, I am free all day on Monday and Wednesday, and '
            'after 11.00 on any other day. I am happy to join another group rather than have a '
            'session arranged for me alone.',
            'Thank you for your help.',
            'Kind regards,',
            'Rosa Santos',
        ],
        notes=['The two clashes are given with exact times and exact reasons, so there is '
               'nothing left to ask.',
               'The request names the deadline the manager set, which shows the email was read.',
               'The third paragraph removes work from the reader — free times offered, and a '
               'willingness to join an existing group.',
               'Nothing is apologised for twice. One unfortunately is enough.'],
    ),
    w3=dict(
        sub='Inherited traits',
        prof='Dr Ellison',
        question='It is now possible to test a healthy person’s DNA and estimate their risk of '
                 'developing certain diseases decades later. Should healthy people be offered '
                 'these tests routinely? Why or why not?',
        posts=[('Priya', 'h',
                'Yes, because knowing early is the only way to act early. If I knew I had a high '
                'risk of heart disease at thirty, I could change how I live while it still makes '
                'a difference. Not knowing does not make the risk go away.'),
               ('Daniel', 'm',
                'I would not want to know. A risk is not a diagnosis. You could spend forty years '
                'worrying about a disease you were never going to get, and there are conditions '
                'on that list that nobody can do anything about anyway.')],
        skill=('Find the distinction nobody has made',
               ['The best posts separate two things the others have treated as one.',
                'Here, for example: tests you can act on and tests you cannot.',
                'Name a classmate, make the distinction, then say what follows from it.',
                'At least 100 words, in ten minutes. Leave one minute to read it back.']),
        starters=['Priya and Daniel are arguing about different cases:…',
                  'Daniel is right that…, but that only applies to…',
                  'The distinction I would draw is between… and…',
                  'For that reason I would…'],
        model=[
            'Priya and Daniel are arguing about two different kinds of test, and once you '
            'separate them the disagreement gets much smaller.',
            'Daniel is right about conditions nobody can treat. Telling a healthy twenty-year-old '
            'that they may develop something untreatable at sixty gives them forty years of '
            'worry and nothing to do with it. But Priya is right about heart disease, because '
            'that risk responds to how you live. The difference is not how serious the disease '
            'is. It is whether the person can act.',
            'So I would offer the tests, but not all of them routinely, and not without someone '
            'to explain what a risk actually means. A number on a page is not information until '
            'somebody tells you what it is a number of.',
        ],
        model_words=148,
    ),

    gram=dict(
        title='The present passive',
        headers=['Form', 'Example'],
        rows=[
            ['am / is / are + past participle', 'Goggles are issued at the door.'],
            ['Negative', 'Bags are not allowed inside.'],
            ['Question', 'Where are goggles issued?'],
            ['With by (only if it matters)', 'The lab is opened by a member of staff.'],
            ['Modal passive', 'Breakages must be reported at once.'],
            ['In an indirect question', 'Do you know how energy is generated?'],
            ['Common in science writing', 'Samples are labelled before they are moved.'],
        ],
        notes=[
            'Use the passive when who does the action is obvious, unknown or unimportant. In a '
            'laboratory notice everyone knows who issues the goggles, so nobody says it.',
            'Add by only when the agent is news: opened by a member of staff tells you that '
            'students cannot.',
            'The passive question puts is or are before the subject, exactly like any other '
            'question: Where are the samples kept?',
        ],
        watch='The passive needs the past participle, not the past simple. It is are issued, '
              'never *are issue*, and was broken, never *was broke*.',
        ex=[
            ('Rewrite the sentence in the present passive.',
             ['A technician checks the equipment. → The equipment __________.',
              'Students do not hold keys. → Keys __________ by students.',
              'They label every sample. → Every sample __________.',
              'Someone copies the instructions. → The instructions __________.',
              'The university issues lab coats. → Lab coats __________.',
              'Nobody allows food in the laboratory. → Food __________ in the laboratory.'],
             ['is checked', 'are not held', 'is labelled', 'are copied', 'are issued',
              'is not allowed']),
            ('Write a passive question for each answer.',
             ['__________________?  — At the door.',
              '__________________?  — By a member of staff.',
              '__________________?  — Before they are moved.',
              '__________________?  — About two million every second.'],
             ['Where are goggles issued', 'Who is the laboratory opened by',
              'When are samples labelled', 'How many cells are replaced']),
            ('One sentence in each pair is wrong. Correct it.',
             ['a) The samples are keep in the fridge.   b) The samples are kept in the fridge.',
              'a) Where are the goggles issued?   b) Where the goggles are issued?',
              'a) Breakages must reported at once.   b) Breakages must be reported at once.'],
             ['a is wrong → are kept', 'b is wrong → Where are the goggles issued?',
              'a is wrong → must be reported']),
        ],
        bas='Build a Sentence often hides a passive inside an indirect question: Do you know how '
            'it is done? Keep the normal word order after know — it is done, not is it done.',
    ),

    rev=dict(
        vocab=[
            ('the job that something does', 'function'),
            ('one part of a larger thing', 'component'),
            ('made of many connected parts', 'complex'),
            ('exactly the same', 'identical'),
            ('to be different in different cases', 'vary'),
            ('to pass from one place to another', 'transmit'),
            ('the way a thing works, part by part', 'mechanism'),
            ('to separate one thing from the rest', 'isolate'),
            ('to follow something back to its beginning', 'trace'),
            ('clearly different from other things', 'distinct'),
            ('a first meeting that teaches you the rules', 'induction'),
            ('a replacement class for one you missed', 'make-up session'),
        ],
        gram=[
            ('Goggles __________ (issue) at the door.', 'are issued'),
            ('Bags __________ (not / allow) inside the building.', 'are not allowed'),
            ('Where __________ the samples __________ (keep)?', 'are / kept'),
            ('Every breakage __________ (must / report) at once.', 'must be reported'),
            ('The instructions __________ (copy) before the cell divides.', 'are copied'),
            ('Do you know how energy __________ (generate)?', 'is generated'),
            ('The laboratory __________ (only / open) by a member of staff.', 'is only opened'),
            ('Short plants __________ (produce) in the second generation.', 'are produced'),
        ],
        mini=[
            ('According to the passage on page 50, the blending theory failed because',
             ('Mendel disproved it with peas', 'it predicted everyone would become alike',
              'it could not be tested', 'microscopes showed something different'), 1,
             'Paragraph 1 gives the logical objection before any evidence is mentioned.'),
            ('In the talk, the cell pauses before',
             ('copying the instructions', 'lining the sets up', 'pulling the sets apart',
              'dividing in two'), 2,
             'Before the sets are pulled apart, the cell confirms that each one is attached.'),
            ('Which sentence is correct?',
             ('The samples are keep in the fridge.', 'Where the goggles are issued?',
              'Breakages must be reported at once.', 'The lab is open by a technician.'), 2,
             'The others use the base form instead of the participle, put statement order in a '
             'question, or write open where opened is needed.'),
            ('A student who has not been inducted',
             ('pays a fee', 'cannot attend the practical', 'works with a partner',
              'is given a key'), 1,
             'The email states it as the reason for writing.'),
            ('In a Complete the Words paragraph, a gap directly after "are" is most likely',
             ('a noun', 'an adjective', 'a past participle', 'an adverb'), 2,
             'Are plus a participle is the passive, and science texts are full of it.'),
            ('In Reading you can use Back',
             ('at any point in the section', 'inside one module only',
              'only in Module 2', 'never'), 1,
             'Back works freely inside a module; only the jump between modules is one-way.'),
        ],
    ),
    tip='An easy question late in a module is not a trick. In an adaptive test the questions '
        'are chosen to match the level you have shown, so an easy one means the test has '
        'placed you — answer it carefully and move on rather than looking for a hidden catch.',
)
