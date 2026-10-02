# -*- coding: utf-8 -*-
"""Unit 5 · Psychology and the Mind."""

UNIT = dict(
    n=5, vol=1, title='Psychology and the Mind',
    icons=('brain', 'book', 'people'),
    subs=('How memory works', 'A study-skills workshop', 'Why people take risks'),
    grammar='Gerunds and infinitives',
    field='mind, behaviour, evidence',
    opener_line='Psychology talks constantly about doing things: avoid revising, decide to '
                'change, stop worrying. That is why this unit’s grammar is the -ing form and '
                'the infinitive.',

    candos=[
        'complete word endings in a text about how the mind behaves',
        'read a workshop poster and a confirmation email for the detail I need',
        'follow a passage that explains an experiment and what it showed',
        'understand two students comparing how they work',
        'describe a habit and a preference out loud without preparing',
        'write an email asking to change an arrangement, and a post that uses evidence',
    ],

    acad=[
        ('psychology', 'the study of the mind and behaviour'),
        ('mental', 'connected with the mind'),
        ('perceive', 'to notice or understand something'),
        ('perspective', 'a particular way of seeing something'),
        ('aware', 'knowing that something exists'),
        ('focus', 'to give all your attention to one thing'),
        ('concentrate', 'to keep your attention on one thing'),
        ('respond', 'to react or answer'),
        ('motive', 'the reason someone does something'),
        ('attitude', 'the way you think and feel about something'),
        ('assume', 'to think something is true without checking'),
        ('interpret', 'to decide what something means'),
        ('evaluate', 'to judge how good or useful something is'),
        ('conceive', 'to form an idea in the mind'),
        ('intense', 'very strong'),
        ('retain', 'to keep something'),
        ('recover', 'to get back something lost'),
        ('distort', 'to change something so it is no longer accurate'),
        ('induce', 'to cause something to happen'),
        ('random', 'without any pattern or plan'),
        ('task', 'a piece of work to be done'),
        ('monitor', 'to watch something over time'),
        ('insight', 'a clear understanding of something'),
        ('rational', 'based on reason rather than feeling'),
    ],
    campus=[
        ('revision', 'studying again before an exam'),
        ('flashcard', 'a small card with a question on one side'),
        ('past paper', 'an exam paper from an earlier year'),
        ('study group', 'a small group that studies together'),
        ('workshop', 'a short practical class'),
        ('sign-up sheet', 'a list you add your name to'),
        ('break', 'a short rest between periods of work'),
        ('concentration', 'the ability to keep your attention on something'),
        ('timetable clash', 'two things arranged at the same time'),
        ('distraction', 'something that takes your attention away'),
        ('wellbeing', 'the state of being healthy and comfortable'),
        ('handout', 'a printed sheet given out in a class'),
    ],
    vocab_talk=[
        'What is the first thing you do when you need to concentrate?',
        'Describe a time when your memory distorted something. What really happened?',
        'What motive do people usually give for leaving work until the last day?',
        'How do you evaluate whether a study method is working for you?',
    ],
    again=['process', 'significant', 'vary', 'impact', 'consume', 'evident', 'identify', 'random'],

    r1=dict(
        sub='How memory works',
        skill=('Find the part of speech first',
               ['Decide whether the gap ends a noun, a verb or an adjective. The ending follows.',
                'Verb after to? Then the word is in its base form and any gap is part of the '
                'stem, not an ending.',
                'Adjectives often end -ful, -ive, -able. Count the dashes before you choose.',
                'Reread the sentence with your answer in it. If it sounds wrong, it is wrong.']),
        guided_text='Memory is not a recording. When you remember something, you rebu--- it, '
                    'and each time you rebuild it you change it a lit---. That is why two people '
                    'who were at the same event will often disa---- about what happe---. Neither '
                    'of them is ly---.',
        guided_hint='1  rebu---  →  ild  (rebuild)',
        guided=['ild', 'tle', 'gree', 'ned', 'ing'],
        exam_text='Most people think of memory as a box. You put something in, it stays there, '
                  'and later you take it out unch-----. Psychologists stopped belie---- that a '
                  'long time ago. Remembering is an act of rebuil----, not of retrieval, and '
                  'every act of rebuilding changes what is st----. In one famous study, '
                  'volunteers watched a film of a car accident and were then as--- how fast the '
                  'cars were going when they hit each other. A second group was as--- the same '
                  'question, but with the word smashed instead of hit. The second group estim---- '
                  'a higher sp---, and a week later many of them remem----- broken glass that was '
                  'never in the film at all. One word, asked once, had quietly rewr----- what '
                  'they saw.',
        exam=['anged', 'ving', 'ding', 'ored', 'ked', 'ked', 'ated', 'eed', 'bered', 'itten'],
    ),

    r2=dict(
        sub='A study-skills workshop',
        skill=('Scan for the one word the question uses',
               ['The question usually repeats a word from the text. Find that word and read '
                'the sentence it sits in.',
                'If the question asks about a person, the answer is usually in the sentence '
                'with their name.',
                'Posters use short lines. The condition is often the last line, not the first.',
                'A time and a place in a poster will be tested against a time and a place in '
                'the email.']),
        docs=[
            ('notice', 'Student Learning Centre · Revision that actually works', [
                '# A free 90-minute workshop, repeated three times',
                'Tue 4 Nov  16.00  Room G12, Library',
                'Thu 6 Nov  10.00  Room G12, Library',
                'Mon 10 Nov  13.00  Seminar Room 4, Arnold Building',
                '# What we cover',
                '* Why rereading feels effective and is not',
                '* Testing yourself: flashcards, past papers, and spacing them out',
                '* Planning a week that includes breaks rather than pretending they will not happen',
                '# Booking',
                '* Places are limited to 24. Sign up on the sheet outside Room G12.',
                '* Bring a copy of your own timetable. We work on yours, not on an example.',
            ], 'notice'),
            ('email', 'l.okonkwo@brookfield.edu', 'learning@brookfield.edu',
             '30/10/2025', 'Workshop confirmed — Thursday 6 November', [
                 'Dear Lara,',
                 '',
                 'You are booked on Revision that actually works, Thursday 6 November',
                 'at ten, Room G12. Please arrive five minutes early; we start on time',
                 'and the door is closed once we begin.',
                 '',
                 'Two things to bring: your own timetable for the coming three weeks,',
                 'and one subject you are genuinely worried about. The second half of',
                 'the session is spent planning that subject, not a general example.',
                 '',
                 'If you cannot come, please tell us by Tuesday evening. The Thursday',
                 'session has a waiting list of nine people.',
                 '',
                 'Priya Raman, Student Learning Centre',
             ]),
        ],
        guided=[
            ('How long does the workshop last?',
             ('One hour', 'Ninety minutes', 'Two hours', 'Half a day'), 1,
             'A free 90-minute workshop, in the first line under the title.'),
            ('Which session is not in the Library?',
             ('Tuesday 4 November', 'Thursday 6 November', 'Monday 10 November',
              'They are all in the Library'), 2,
             'Monday is in Seminar Room 4, Arnold Building; the other two are in Room G12.'),
            ('What must students bring?',
             ('A past paper', 'Their own timetable', 'A laptop', 'Flashcards'), 1,
             'Bring a copy of your own timetable — the poster explains why in the same line.'),
            ('How many places are there?',
             ('Nine', 'Twelve', 'Twenty-four', 'Unlimited'), 2,
             'Places are limited to 24, under Booking.'),
        ],
        exam=[
            ('Why does the email ask Lara to arrive early?',
             ('To find the room', 'To sign the sheet', 'Because the door is closed at the start',
              'Because the session may start early'), 2,
             'We start on time and the door is closed once we begin.'),
            ('What is the second thing Lara must bring?',
             ('A past paper', 'A subject she is worried about', 'A handout', 'Her student card'), 1,
             'One subject you are genuinely worried about — and the email explains why in the '
             'next sentence.'),
            ('What happens in the second half of the session?',
             ('A general example is worked through', 'Students plan their own subject',
              'Flashcards are handed out', 'Students take a test'), 1,
             'Spent planning that subject, not a general example.'),
            ('Why should Lara tell the centre if she cannot come?',
             ('She will be charged', 'Nine people are waiting for a place',
              'The session will be cancelled', 'She cannot book again'), 1,
             'The Thursday session has a waiting list of nine people.'),
            ('According to the poster, what is the problem with rereading?',
             ('It takes too long', 'It feels effective but is not',
              'It cannot be done alone', 'It only works for some subjects'), 1,
             'Why rereading feels effective and is not — the poster puts it in exactly those words.'),
            ('What can be inferred about the three sessions?',
             ('They cover different material', 'They are all fully booked',
              'They are the same workshop repeated', 'Only students may attend'), 2,
             'A 90-minute workshop, repeated three times — so the content is identical and only '
             'the slot differs.'),
        ],
    ),

    r3=dict(
        sub='Why people take risks',
        title='Why People Take Risks They Know Are Risks',
        words=275,
        paras=[
            'Economists once assumed that people weigh a gain against a loss in the same way, '
            'and choose whichever is larger. Psychologists have shown that we do not. A loss of '
            'a hundred pounds hurts noticeably more than a gain of a hundred pounds pleases, '
            'and the difference is large: roughly twice as much. That single asymmetry explains '
            'a great deal of behaviour that otherwise looks irrational.',
            'Consider a simple choice. You are offered a certain gain of fifty pounds, or a coin '
            'toss for a hundred. Most people take the fifty, even though the two are worth the '
            'same on average. Now change the wording. You will certainly lose fifty pounds, or '
            'you can toss a coin and lose either nothing or a hundred. Now most people toss the '
            'coin. Nothing about the amounts has changed. What has changed is whether the choice '
            'is described as winning or as avoiding a loss, and people will take a real risk to '
            'avoid a certain loss.',
            'This is not a laboratory curiosity. A student who has already spent three days on '
            'an essay that is not working will often spend a fourth day on it rather than start '
            'again, because starting again makes the three days a definite loss. A driver who is '
            'late will overtake dangerously to recover time that is already gone. In each case '
            'the risk is not taken because the person misjudges the danger. It is taken because '
            'the alternative is admitting a loss, and admitting a loss costs more than it should.',
        ],
        skill=('Follow the experiment to the conclusion',
               ['A psychology passage usually runs: old belief, experiment, what it shows, '
                'everyday example. Expect that order.',
                'When two versions of the same choice are described, the question will ask what '
                'changed. Usually the wording, not the amounts.',
                'Examples in the last paragraph exist to illustrate the finding. Inference '
                'questions live there.',
                'Mark the sentence containing because — it is the one the paragraph was '
                'written for.']),
        guided=[
            ('What is the passage mainly about?',
             ('Why losses feel worse than gains, and what follows',
              'How economists calculate value', 'Why students write bad essays',
              'How coin tosses work'), 0,
             'The asymmetry is stated in paragraph 1, demonstrated in 2 and applied in 3.'),
            ('According to paragraph 1, a loss of a hundred pounds feels',
             ('the same as a gain of a hundred', 'about twice as strong as the gain',
              'half as strong as the gain', 'impossible to measure'), 1,
             'Roughly twice as much — the passage gives the figure.'),
            ('In the first version of the choice, what do most people do?',
             ('Toss the coin', 'Take the certain fifty', 'Refuse both', 'Ask for more'), 1,
             'Most people take the fifty, even though the average value is the same.'),
            ('What changes between the two versions?',
             ('The amounts', 'The number of people', 'The wording',
              'Whether a coin is used'), 2,
             'Nothing about the amounts has changed — only whether it is described as winning or '
             'avoiding a loss.'),
        ],
        exam=[
            ('Why does the student spend a fourth day on the essay?',
             ('They enjoy the subject', 'Starting again would make the first three days a loss',
              'They have no other work', 'The deadline has moved'), 1,
             'The passage gives exactly that reason, and it is the same mechanism as the coin toss.'),
            ('The word "asymmetry" in paragraph 1 is closest in meaning to',
             ('uneven balance', 'exact measurement', 'repeated pattern', 'sudden change'), 0,
             'It names the fact that losses and gains of the same size do not feel the same.'),
            ('All of the following are given as examples EXCEPT:',
             ('a student and an essay', 'a driver who is late', 'a coin toss',
              'a shopper choosing between brands'), 3,
             'Shopping is never mentioned; the other three all appear.'),
            ('What does the author say about the driver?',
             ('They do not understand the danger', 'They are trying to recover lost time',
              'They are in a hurry for no reason', 'They have had an accident before'), 1,
             'To recover time that is already gone — and the next sentence rules out misjudging '
             'the danger.'),
            ('What can be inferred about the economists mentioned in paragraph 1?',
             ('They were right about small amounts', 'Their assumption was too simple',
              'They never tested their ideas', 'They studied only students'), 1,
             'Psychologists have shown that we do not — the assumption is presented as having '
             'been corrected.'),
            ('Which best states the main idea of paragraph 3?',
             ('People often misjudge danger', 'Risk-taking comes from refusing to accept a loss',
              'Essays should be started early', 'Driving is more dangerous than it looks'), 1,
             'The last sentence states it: the risk is taken because the alternative is admitting '
             'a loss.'),
            ('The phrase "a laboratory curiosity" in paragraph 3 suggests the finding',
             ('is only true in experiments', 'applies to real life as well',
              'has not been repeated', 'was discovered by accident'), 1,
             'This is not a laboratory curiosity — the author then gives two everyday cases.'),
        ],
    ),

    l1=dict(
        sub='A study-skills workshop',
        caption='Two students compare how they revise',
        skill=('Note who does what, and who is right',
               ['When two people describe different habits, expect a question on each habit.',
                'One speaker usually learns something. Listen for oh, really? or I didn’t know '
                'that.',
                'A number said once is a question waiting to happen.',
                'The last exchange usually contains the decision.']),
        warm=[
            ('Woman: How do you revise?',
             ('In the library, usually.', 'I reread my notes, mostly.',
              'For about three hours.', 'Yes, I do.'), 1,
             'How wants a method; the others answer where and how long.'),
            ('Man: Do flashcards actually work?',
             ('I made forty of them.', 'Apparently they do, if you space them out.',
              'They’re small cards.', 'In the workshop.'), 1,
             'A does-it-work question wants a judgement, with a condition if there is one.'),
            ('Woman: I can never concentrate after an hour.',
             ('Then take a break — that’s the point.', 'It starts at ten.',
              'I concentrate very well.', 'The room is G12.'), 0,
             'A stated difficulty is met with advice.'),
        ],
        script=[
            ('Man', 'How are you revising for the statistics paper?'),
            ('Woman', 'Reading through the lecture notes again. Third time now.'),
            ('Man', 'Ah. I went to that workshop last week and apparently that is the worst '
                    'thing you can do.'),
            ('Woman', 'Rereading? But it feels like it’s working.'),
            ('Man', 'That’s exactly what they said. It feels like it’s working because the '
                    'words get familiar. Familiar isn’t the same as known.'),
            ('Woman', 'So what should I be doing?'),
            ('Man', 'Testing yourself. Cover the page and write down what you can remember, then '
                    'check. It feels much worse and it works much better.'),
            ('Woman', 'That does sound horrible.'),
            ('Man', 'It is. But they showed us a study — two groups, same material. The group '
                    'that reread felt more confident. The group that tested themselves scored '
                    'about fifty per cent higher a week later.'),
            ('Woman', 'Fifty? Really? Is the workshop running again?'),
            ('Man', 'Monday, I think, in the Arnold Building. There’s a sheet outside G12.'),
        ],
        items=[
            ('What is the woman doing to revise?',
             ('Testing herself', 'Rereading her notes', 'Using flashcards',
              'Working with a study group'), 1,
             'Reading through the lecture notes again. Third time now.'),
            ('What did the workshop say about rereading?',
             ('It is the best method', 'It only works for some subjects',
              'It feels effective but is not', 'It should be done once only'), 2,
             'Familiar isn’t the same as known — the man repeats the workshop’s point.'),
            ('What does the man recommend instead?',
             ('Reading aloud', 'Covering the page and writing what you remember',
              'Working in a group', 'Making a timetable'), 1,
             'He describes the method and then admits it feels much worse.'),
            ('What was the difference between the two groups in the study?',
             ('One scored about fifty per cent higher', 'One studied for twice as long',
              'One used flashcards', 'One took the test immediately'), 0,
             'The group that tested themselves scored about fifty per cent higher a week later.'),
            ('What does the man mean when he says "It feels much worse and it works much better"?',
             ('The method is unpleasant but effective', 'The method is easy but useless',
              'He dislikes the workshop', 'The study was badly designed'), 0,
             'He is warning her that the feeling and the result point in opposite directions.'),
            ('What will the woman probably do next?',
             ('Reread her notes a fourth time', 'Look for the sign-up sheet',
              'Email the learning centre', 'Join a study group'), 1,
             'She asks whether the workshop is running again and he tells her where the sheet is.'),
        ],
    ),

    l2=dict(
        sub='A study-skills workshop',
        caption='The workshop moves to a new room',
        poster=['Thursday session: now Seminar Room 4',
                'Start time unchanged: 10.00',
                'Bring your own timetable'],
        skill=('Hold two versions of the same detail',
               ['When something moves, you must remember the old place and the new one.',
                'Listen for not — it usually separates the wrong version from the right one.',
                'What stays the same is as testable as what changes.',
                'An instruction repeated twice is certain to be tested.']),
        warm=[
            ('Man: Has the time changed as well?',
             ('No, still ten o’clock.', 'In Seminar Room 4.',
              'Because the room is being painted.', 'Yes, on Thursday.'), 0,
             'A yes/no question about the time; only one option answers it.'),
            ('Woman: Which building is that in?',
             ('At ten in the morning.', 'The Arnold Building.', 'Ninety minutes.',
              'Twenty-four people.'), 1,
             'Which building wants a building.'),
            ('Man: Do I still need to bring anything?',
             ('Yes — your timetable, as before.', 'The room has changed.',
              'It’s free.', 'There’s a waiting list.'), 0,
             'A do-I-still question asks whether something has changed, and this answers it.'),
        ],
        script=[
            ('Woman', 'A quick change for everyone booked on Thursday’s study-skills workshop. '
                      'The room has moved. It is no longer Room G12 in the Library — G12 is '
                      'being used for an exam — so we are in Seminar Room 4 in the Arnold '
                      'Building instead. Same day, same time: ten o’clock, Thursday the sixth. '
                      'Please still come five minutes early, because we close the door when we '
                      'start and the Arnold Building is a four-minute walk from the Library, '
                      'which catches people out. Bring two things, as before: your own timetable '
                      'for the next three weeks, and one subject you are worried about. And if '
                      'you now cannot come because of the change, tell us today rather than '
                      'tomorrow — there are nine people on the waiting list and it is only fair '
                      'to give them notice.'),
        ],
        items=[
            ('What is the main purpose of the announcement?',
             ('To cancel the workshop', 'To announce a change of room',
              'To change the time', 'To open a waiting list'), 1,
             'The room has moved is the first thing said and the rest follows from it.'),
            ('Why is Room G12 unavailable?',
             ('It is too small', 'It is being painted', 'It is being used for an exam',
              'It is closed on Thursdays'), 2,
             'Given in a short aside inside the sentence about the move.'),
            ('What has not changed?',
             ('The room', 'The building', 'The day and the time', 'The waiting list'), 2,
             'Same day, same time: ten o’clock, Thursday the sixth.'),
            ('Why does the speaker mention a four-minute walk?',
             ('To explain why people should still arrive early',
              'To say the workshop is longer', 'To describe the Arnold Building',
              'To warn about the weather'), 0,
             'The walk is what catches people out, so the early arrival still matters.'),
            ('When should a student say they cannot come?',
             ('Today', 'Tomorrow', 'By Thursday morning', 'Within a week'), 0,
             'Tell us today rather than tomorrow, because nine people are waiting.'),
        ],
    ),

    l3=dict(
        sub='Why people take risks',
        caption='A talk on two kinds of attention',
        board=['Hard fascination: TV, games — no room for thought',
               'Soft fascination: a walk, water — room for thought',
               'Mental fatigue → irritable, distracted',
               'Soft fascination restores attention'],
        skill=('Hear the two-way contrast',
               ['A talk built on two contrasting terms will define each one, then compare them.',
                'The second term is usually the one the speaker cares about. Listen harder there.',
                'Everyday examples are given for each. Expect a question that asks which is which.',
                'The advice at the end follows from the contrast, and is often the main idea.']),
        warm=[
            ('Woman: Did she define the second term?',
             ('Yes, soft fascination.', 'It’s on the board.', 'Two types.',
              'At the end of the lecture.'), 0,
             'A did-she question wants a yes or no, and this one names the term too.'),
            ('Man: What causes mental fatigue?',
             ('Watching a film.', 'Intense, effortless focus for too long.',
              'It makes you irritable.', 'Yes, it does.'), 1,
             'What causes wants a cause; the third option gives an effect instead.'),
            ('Woman: So should I stop watching films?',
             ('They’re hard fascination.', 'No — just not before you need to concentrate.',
              'I watch one most evenings.', 'It was about attention.'), 1,
             'A should-I question wants advice, and this one gives it with a limit.'),
        ],
        script=[
            ('Professor', 'Last week somebody asked me why they feel exhausted after an evening '
                          'of doing nothing. It is a good question, and the answer is that doing '
                          'nothing is not what they were doing. There are two kinds of attention '
                          'and they have opposite effects. The first is what psychologists call '
                          'hard fascination. A thriller, a video game, a fast conversation — '
                          'these hold you completely. You do not have to try, which is why they '
                          'feel like rest, but there is no room left for any other thought. '
                          'Hours pass and you notice nothing. The second kind is soft '
                          'fascination: a walk, a view, running water. It holds your attention '
                          'too, and it also takes no effort, but it leaves room. Your mind '
                          'wanders while you look. Now, the crucial finding. Hard fascination '
                          'produces mental fatigue — after a long evening of it people are '
                          'measurably more irritable, more distracted and worse at tasks '
                          'requiring concentration. Soft fascination does the opposite: it '
                          'restores the ability to concentrate. So the practical advice is not '
                          'to stop watching films. It is to notice that an evening of hard '
                          'fascination is not a rest, and that twenty minutes of walking before '
                          'you study is worth more than twenty minutes of anything on a screen.'),
        ],
        items=[
            ('What is the main idea of the talk?',
             ('Screens are bad for students', 'Two kinds of attention have opposite effects '
              'on concentration', 'Walking is the best form of exercise',
              'Mental fatigue cannot be measured'), 1,
             'The speaker names the two kinds, contrasts them, and the advice follows from the '
             'contrast.'),
            ('Why does the speaker mention the question asked last week?',
             ('To correct a mistake', 'To introduce the topic',
              'To praise the student', 'To change the subject'), 1,
             'It frames the whole talk: why an evening of doing nothing is tiring.'),
            ('What do hard and soft fascination have in common?',
             ('Both require effort', 'Both take no effort',
              'Both cause fatigue', 'Both involve screens'), 1,
             'You do not have to try for one, and it also takes no effort for the other.'),
            ('What is the difference between them?',
             ('One is outdoors', 'One leaves room for other thoughts',
              'One lasts longer', 'One is more enjoyable'), 1,
             'There is no room left for any other thought in the first; the second leaves room.'),
            ('What does soft fascination do?',
             ('It causes irritability', 'It restores the ability to concentrate',
              'It makes time pass quickly', 'It has no measurable effect'), 1,
             'Soft fascination does the opposite — the opposite of producing mental fatigue.'),
            ('What advice does the speaker give?',
             ('Stop watching films', 'Study immediately after a film',
              'Walk before studying rather than use a screen', 'Avoid all screens in the evening'), 2,
             'The practical advice is explicitly not to stop watching films, but to walk first.'),
        ],
    ),

    sp=[
        dict(sub='How memory works', focus='weak forms of to',
             skill=('Say to as /tə/, not /tuː/',
                    ['In I want to go the to is almost swallowed. Full /tuː/ sounds unnatural.',
                     'The -ing form keeps its full sound: avoid revising, not avoid revisin.',
                     'Keep the sentence moving. Weak forms are what makes speech sound fluent.',
                     'Say the whole sentence even if one word slips.']),
             repeat=['I need to concentrate.',
                     'She decided to start again.',
                     'Most people avoid testing themselves.',
                     'He wants to remember what he read last week.',
                     'They stopped believing that memory was a recording.',
                     'Rereading your notes feels useful, but testing yourself works far better.',
                     'Psychologists have shown that remembering something changes it, which is why two people recall the same evening differently.'],
             theme='how you study',
             qs=['First, where do you usually study?',
                 'People find different things distracting. What distracts you most, and why do '
                 'you think that is?',
                 'Some people say that studying with other people is always better than studying '
                 'alone. Do you agree? Why or why not?',
                 'Finally, should universities teach students how to study, or is that something '
                 'people should work out for themselves? Why?'],
             model=[(2, 'My phone, obviously, but really it is other people talking. I can work '
                        'in complete noise or in silence, and not in between.'),
                    (4, 'I think they should teach it. I spent two years rereading notes because '
                        'nobody had ever told me it does not work.')],
             selfcheck=['I used weak to rather than full /tuː/',
                        'I spoke in complete sentences',
                        'I gave a reason after every opinion']),
        dict(sub='A study-skills workshop', focus='habits and preferences',
             skill=('Use the -ing form for habits',
                    ['I enjoy working, I avoid starting late, I don’t mind rereading.',
                     'Use the infinitive after want, decide, need, hope, plan, agree.',
                     'A few verbs take both with different meanings: I stopped reading / I '
                     'stopped to read.',
                     'One habit, one example, one reason. That is a full answer at this level.']),
             repeat=['I enjoy working early.',
                     'She avoids studying at night.',
                     'We decided to meet in the library.',
                     'He does not mind rereading a chapter twice.',
                     'They agreed to test each other before the examination.',
                     'Planning a week that includes breaks is better than pretending you will not need any.',
                     'I used to spend hours rereading my notes, and I have now stopped doing that because it did not work.'],
             theme='time and how you organise it',
             qs=['To start, do you make a plan for your week?',
                 'People organise their time in very different ways. How do you organise yours, '
                 'and why does that suit you?',
                 'Some people argue that strict timetables make students less creative. Do you '
                 'agree? Why or why not?',
                 'Last question. Should universities set deadlines further apart so that students '
                 'can plan better? Why or why not?'],
             model=[(2, 'Not really a plan — more a list. I like crossing things off, which '
                        'sounds silly but it keeps me going.'),
                    (3, 'I disagree with that. A timetable does not tell you what to think; it '
                        'just stops you worrying about when.')],
             selfcheck=['I used -ing after enjoy, avoid or mind',
                        'I used the infinitive after want, decide or need',
                        'I gave one example in each answer']),
        dict(sub='Why people take risks', focus='academic register',
             skill=('Report a finding, then apply it',
                    ['Use the unit’s words: perceive, assume, evaluate, insight, rational.',
                     'Say what was found, then what follows: the study showed…, which suggests…',
                     'Separate the evidence from your opinion about it.',
                     'Mark yourself against the three statements below.']),
             repeat=['People perceive losses more strongly than gains.',
                     'The study showed that wording changes the decision.',
                     'Economists once assumed that we evaluate both sides equally.',
                     'A student may continue a failing essay rather than admit a loss.',
                     'Nothing about the amounts changes; only the description of them changes.',
                     'The insight is not that people misjudge danger but that they refuse to accept a loss.',
                     'It would be more rational to stop, and yet most people in that position will take a risk they would normally avoid.'],
             theme='decisions and how people make them',
             qs=['First, can you think of a decision you had to make recently?',
                 'People approach difficult decisions differently. How did you approach that one, '
                 'and why?',
                 'Some people argue that we should always ignore what we have already spent when '
                 'deciding what to do next. Do you agree? Why or why not?',
                 'Finally, should schools teach students about the mistakes people typically make '
                 'when they decide things? Why or why not?'],
             model=[(3, 'In principle I agree, because the money is gone either way. In practice '
                        'it is very hard, and the study we read suggests that is normal rather '
                        'than weak.'),
                    (4, 'Yes. The insight costs nothing to teach and it changes how you read '
                        'advertising, politics and your own excuses.')],
             selfcheck=['I used at least three academic words from this unit',
                        'I separated the finding from my own view',
                        'My last answer had an opinion, a reason and an example']),
    ],

    w1=dict(
        sub='How memory works',
        skill=('Decide -ing or to before you order the tiles',
               ['Find the first verb. It decides whether the next one takes -ing or to.',
                'enjoy, avoid, mind, finish, suggest → -ing. want, need, decide, hope, '
                'agree → to.',
                'In a question the auxiliary still comes before the subject: Do you enjoy…?',
                'An indirect question keeps statement order: Do you know why she decided to…']),
        guided=[
            ('She decided to start the essay again.',
             ['did', 'why', 'she', 'decide', 'to', 'start', 'again'],
             'Why did she decide to start again?'),
            ('I avoid revising late at night.',
             ['do', 'you', 'avoid', 'revising', 'at', 'night'],
             'Do you avoid revising at night?'),
            ('He wants to test himself before the exam.',
             ['does', 'what', 'he', 'want', 'to', 'do'],
             'What does he want to do?'),
        ],
        exam=[
            ('They stopped believing that memory was a recording.',
             ['did', 'when', 'they', 'stop', 'believing', 'that'],
             'When did they stop believing that?'),
            ('The workshop is worth going to.',
             ['know', 'you', 'do', 'whether', 'it', 'is', 'worth', 'going', 'to'],
             'Do you know whether it is worth going to?'),
            ('She needs to bring her own timetable.',
             ['need', 'does', 'she', 'to', 'bring', 'what'],
             'What does she need to bring?'),
            ('Most people avoid testing themselves because it feels worse.',
             ['do', 'why', 'people', 'avoid', 'testing', 'themselves'],
             'Why do people avoid testing themselves?'),
            ('The student who tested herself scored higher.',
             ['the', 'student', 'who', 'tested', 'herself', 'scored', 'higher'],
             'The student who tested herself scored higher.'),
            ('The session she wanted to attend was full.',
             ['tell', 'can', 'you', 'me', 'which', 'session', 'she', 'wanted'],
             'Can you tell me which session she wanted?'),
            ('He hopes to finish by Friday.',
             ['hope', 'does', 'he', 'to', 'finish', 'when'],
             'When does he hope to finish?'),
        ],
    ),
    w2=dict(
        sub='A study-skills workshop',
        to='learning@brookfield.edu',
        date='04/11/2025',
        subject='Thursday workshop — can I move to the Monday session?',
        scenario=[
            'You are booked on the study-skills workshop on Thursday 6 November at ten. Your '
            'department has just scheduled a compulsory laboratory session at the same time. The '
            'same workshop runs again on Monday 10 November at one.',
            'Write an email to the Student Learning Centre.',
        ],
        bullets=['Explain the clash.',
                 'Ask to move to the Monday session.',
                 'Say that you know there is a waiting list, and what you will do about it.'],
        skill=('Make it easy to say yes',
               ['Give the reason first, then the request. A reader agrees more readily that way.',
                'Name both sessions exactly — date, day and time — so nothing has to be looked up.',
                'Show you know the cost of your request. Here, that means the waiting list.',
                'Seven minutes. Three paragraphs, 110–140 words.']),
        model=[
            'Dear Ms Raman,',
            'Thank you for confirming my place on Thursday 6 November at ten. Unfortunately my '
            'department has now scheduled a compulsory laboratory session at exactly that time, '
            'and I cannot miss it.',
            'I can see that the same workshop runs on Monday 10 November at one, in the Arnold '
            'Building, and that time is completely free for me. Would it be possible to move my '
            'booking to the Monday session?',
            'I know from your email that nine people are waiting for a Thursday place, so I am '
            'writing now rather than on Wednesday. If the Monday session is already full, please '
            'release my Thursday place to the waiting list anyway and I will sign up for the '
            'next workshop instead.',
            'Thank you very much for your help.',
            'Best wishes,',
            'Lara Okonkwo',
        ],
        notes=['The reason comes before the request, and it is a reason the reader cannot argue '
               'with: compulsory.',
               'Both sessions are named in full, so the person answering does not have to open '
               'the programme.',
               'Mentioning the waiting list shows the writer read the original email and '
               'understands the cost of a late change.',
               'The last sentence offers a solution even if the answer is no, which removes a '
               'second email.'],
    ),
    w3=dict(
        sub='Why people take risks',
        prof='Dr Lindqvist',
        question='Research shows that people will take real risks in order to avoid admitting a '
                 'loss they have already suffered. Should this finding change how universities '
                 'handle students who are failing a module halfway through the year? Why or why '
                 'not?',
        posts=[('Sofia', 'w',
                'Yes. The research explains exactly why a struggling student keeps going with a '
                'module they cannot pass: stopping makes the wasted months real. Universities '
                'should make it normal and easy to drop a module in January, with no penalty, '
                'so that stopping does not feel like failure.'),
               ('Ben', 'm',
                'I am not convinced. Plenty of students who want to give up in January pass in '
                'June. If you make dropping out easy and shameless, some of them will take it, '
                'and they will have been better off if nobody had offered.')],
        skill=('Use the evidence, do not just mention it',
               ['Quote the mechanism, not the conclusion: the finding is about avoiding a '
                'certain loss.',
                'Apply it to the specific case in the question, not to life in general.',
                'Name a classmate and engage with the strongest version of what they said.',
                'At least 100 words in ten minutes.']),
        starters=['Ben’s objection is the serious one, because…',
                  'The research says something narrower than Sofia suggests:…',
                  'What follows from the finding is not… but…',
                  'I would therefore…'],
        model=[
            'Ben’s objection is the serious one, and I think it survives the research rather '
            'than being answered by it.',
            'The finding is narrower than Sofia suggests. It does not say that students who want '
            'to stop are right to stop. It says that the feeling of having wasted four months '
            'distorts the decision, in either direction. A student who should drop the module '
            'will stay in it to avoid admitting the loss — that is Sofia’s case. But a student '
            'who could pass may also take whatever exit is offered, because quitting now feels '
            'cheaper than failing in June.',
            'So what follows is not an easy exit, and not a hard one. It is that the January '
            'decision should not be made by the student alone, at the moment the loss feels '
            'largest. Give them the January mark, a realistic estimate of the June one, and an '
            'hour with somebody who has seen a hundred of these.',
        ],
        model_words=161,
    ),
    gram=dict(
        title='Gerunds and infinitives',
        headers=['Pattern', 'Example'],
        rows=[
            ['enjoy / avoid / mind / finish + -ing', 'I avoid revising late.'],
            ['want / need / decide / hope / agree + to', 'She decided to start again.'],
            ['preposition + -ing', 'He is good at remembering names.'],
            ['-ing as a subject', 'Rereading feels useful.'],
            ['stop + -ing / stop + to', 'He stopped reading. / He stopped to read.'],
            ['worth + -ing', 'It is worth going.'],
            ['make / let + bare infinitive', 'It makes you concentrate.'],
        ],
        notes=[
            'The verb before decides the form. There is no rule of meaning that predicts it, so '
            'these are learned as pairs.',
            'After a preposition the verb is always -ing: good at remembering, instead of '
            'starting, before leaving.',
            'Stop + -ing means end the activity. Stop + to means pause in order to do something '
            'else. The test does use this pair.',
        ],
        watch='Never write *I enjoy to read*. Enjoy always takes -ing, however natural the '
              'infinitive sounds in your language.',
        ex=[
            ('Put the verb in the -ing form or the infinitive.',
             ['She avoids __________ (test) herself.',
              'He decided __________ (start) the essay again.',
              'Do you enjoy __________ (work) in the library?',
              'They need __________ (bring) their own timetable.',
              '__________ (reread) your notes feels useful.',
              'It is worth __________ (go) to the workshop.'],
             ['testing', 'to start', 'working', 'to bring', 'Rereading', 'going']),
            ('Complete with the right preposition and form.',
             ['She is good __________ (remember) names.',
              'He left __________ (say) goodbye.  (without)',
              'They talked __________ (change) the room.  (about)',
              'I am tired __________ (reread) the same page.  (of)'],
             ['at remembering', 'without saying', 'about changing', 'of rereading']),
            ('Explain the difference in meaning.',
             ['a) He stopped reading.   b) He stopped to read.',
              'a) I remember locking the door.   b) I remembered to lock the door.',
              'a) She tried studying at night.   b) She tried to study at night.'],
             ['a = he ended the activity; b = he paused in order to read',
              'a = the memory of doing it; b = he did not forget',
              'a = an experiment with a method; b = an attempt that may have failed']),
        ],
        bas='Build a Sentence hides these patterns inside questions: Why did she decide to start '
            'again? Do you avoid revising at night? Get the verb pattern right and the word '
            'order follows.',
    ),

    rev=dict(
        vocab=[
            ('to notice or understand something', 'perceive'),
            ('to think something is true without checking', 'assume'),
            ('to decide what something means', 'interpret'),
            ('to judge how good or useful something is', 'evaluate'),
            ('the reason someone does something', 'motive'),
            ('to change something so it is no longer accurate', 'distort'),
            ('a clear understanding of something', 'insight'),
            ('based on reason rather than feeling', 'rational'),
            ('to keep something', 'retain'),
            ('without any pattern or plan', 'random'),
            ('something that takes your attention away', 'distraction'),
            ('two things arranged at the same time', 'timetable clash'),
        ],
        gram=[
            ('She avoids __________ (test) herself.', 'testing'),
            ('He decided __________ (start) again.', 'to start'),
            ('Do you enjoy __________ (work) in the library?', 'working'),
            ('It is worth __________ (go) to the workshop.', 'going'),
            ('They need __________ (bring) a timetable.', 'to bring'),
            ('She is good at __________ (remember) names.', 'remembering'),
            ('__________ (reread) notes feels useful but is not.', 'Rereading'),
            ('He stopped __________ (read) and went home.', 'reading'),
        ],
        mini=[
            ('According to the passage on page 82, people take risks mainly because',
             ('they misjudge the danger', 'they refuse to accept a certain loss',
              'they enjoy excitement', 'they cannot do the arithmetic'), 1,
             'The last sentence rules out misjudgement and names the real mechanism.'),
            ('In the talk, soft fascination',
             ('causes mental fatigue', 'restores the ability to concentrate',
              'requires effort', 'only happens indoors'), 1,
             'It does the opposite of hard fascination, which produces fatigue.'),
            ('Which sentence is correct?',
             ('I enjoy to read before bed.', 'She avoids to test herself.',
              'It is worth going to the workshop.', 'He is good at remember names.'), 2,
             'Enjoy and avoid take -ing, and a preposition is always followed by -ing.'),
            ('The study-skills workshop asks students to bring',
             ('a past paper', 'their own timetable', 'a laptop', 'a handout'), 1,
             'Both the poster and the email say so, and both explain why.'),
            ('In Complete the Words, a gap after "to" at the start of a verb is',
             ('a past participle ending', 'part of the base form',
              'an -ing ending', 'a plural ending'), 1,
             'After to the verb is in its base form, so any missing letters belong to the stem.'),
            ('A question that asks what a speaker means by a phrase is testing',
             ('vocabulary', 'the main idea', 'the speaker’s purpose or implication',
              'a specific number'), 2,
             'These items ask why the words were chosen, not what the dictionary says.'),
        ],
    ),
    tip='A question you cannot answer costs one mark. A question you sit on costs the two after '
        'it as well, because the clock does not stop. Choose the best option you have, mark it '
        'and move — an adaptive test is scored on the whole module, not on any one item.',
)
