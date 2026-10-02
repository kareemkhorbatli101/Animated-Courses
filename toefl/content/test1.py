# -*- coding: utf-8 -*-
"""Practice Test 1 — Volume 1. 97 items, in the order the 2026 test asks them."""

TEST = dict(
    n=1,

    # ------------------------------------------------------------- READING --
    reading=[
        dict(
            gap_text='Rivers have always decided where people live. A settlement beside water '
                     'could move goods che----, drink without digg--- a well, and defend itself '
                     'on at least one s---. For most of history, carrying a heavy load thirty '
                     'miles over land cost as much as sh------ it across an ocean, so a town '
                     'with no water transport could feed itself but could not tr---. The '
                     'railroad broke that r---. After 1840 a line could be laid almost anyw----, '
                     'and towns began to app--- in places with no river at all. What had '
                     'cha---- was not the land. It was the cost of cro----- it.',
            gap_ans=['aply', 'ing', 'ide', 'ipping', 'ade', 'ule', 'here', 'ear', 'nged', 'ssing'],
            docs=[
                ('notice', 'Northgate Library · opening times and services', [
                    '# Term time',
                    'Monday to Friday   08.00 – 22.00',
                    'Saturday   09.00 – 18.00     Sunday   11.00 – 18.00',
                    '# Borrowing',
                    '* Undergraduates may borrow 12 items; postgraduates 24.',
                    '* Standard loan is three weeks and renews automatically unless reserved.',
                    '* A reserved item must be returned within seven days of the recall email.',
                    '# Group study rooms',
                    '* Bookable online, two hours at a time, up to seven days ahead.',
                    '* A room is released if nobody arrives within fifteen minutes.',
                ], 'web'),
                ('email', 'j.okafor@northgate.edu', 'circulation@northgate.edu',
                 '11/03/2026', 'Recall — one item due back by 18 March', [
                     'Dear Mr Okafor,',
                     '',
                     'Another reader has reserved an item you currently have on loan.',
                     'It must be returned by Wednesday 18 March, seven days from today,',
                     'even though your loan was not due until April.',
                     '',
                     'Returns after that date are charged at 50p a day. If you need to',
                     'consult the book after returning it, reserve it yourself and you',
                     'will go to the front of the queue after the current reader.',
                     '',
                     'Your other eleven items are not affected.',
                     '',
                     'Northgate Library Circulation',
                 ]),
            ],
            daily=[
                ('How long is a standard loan?',
                 ('One week', 'Two weeks', 'Three weeks', 'Seven days'), 2,
                 'Three weeks, renewing automatically unless the item is reserved.'),
                ('How many items may an undergraduate borrow?',
                 ('7', '12', '24', 'There is no limit'), 1,
                 'Twelve for undergraduates and twenty-four for postgraduates.'),
                ('What happens to a booked study room if nobody comes?',
                 ('It is charged for', 'It is released after fifteen minutes',
                  'It stays booked for two hours', 'It is given to the next booking'), 1,
                 'A room is released if nobody arrives within fifteen minutes.'),
                ('Why must Mr Okafor return the item early?',
                 ('His loan has expired', 'Somebody else has reserved it',
                  'He has too many items', 'The library is closing'), 1,
                 'Another reader has reserved it, which triggers the seven-day recall.'),
                ('How many items does Mr Okafor have on loan in total?',
                 ('Eleven', 'Twelve', 'Twenty-four', 'Seven'), 1,
                 'One recalled item plus eleven others that are not affected.'),
            ],
            passage=('The Mirror and the Mark', [
                'Very young children cannot recognise themselves in a mirror. They reach the '
                'milestone at around eighteen months, and before that they treat the reflection '
                'as another child. The ability is taken to be a component of self-awareness, '
                'which raises an obvious question about other species.',
                'The standard method is simple. A coloured mark is placed on an animal’s body '
                'where it cannot be seen directly, and the animal is then shown a mirror. If it '
                'tries to remove the mark from its own body rather than from the reflection, it '
                'has understood what it is looking at. Great apes pass. So, more surprisingly, '
                'do elephants and dolphins, which are not closely related to us at all.',
                'In 2019 a far smaller animal passed as well. A cleaner fish, shown a mark on '
                'its own body, scraped at the place where the mark was. Some researchers argue '
                'that this shows self-awareness is far more widespread than anyone assumed. '
                'Others argue that it shows the test measures something narrower than we '
                'thought, and that a fish which grooms other animals for a living may simply be '
                'very attentive to marks. Both conclusions are uncomfortable, which is usually '
                'a sign that an experiment has been worth doing.',
            ], 265),
            academic=[
                ('What is the passage mainly about?',
                 ('Stages of early childhood development', 'Research on self-recognition in '
                  'animals', 'Differences between apes and dolphins',
                  'Why fish behave as they do'), 1,
                 'The childhood milestone opens the passage only to set up the animal question, '
                 'which the other two paragraphs pursue.'),
                ('The word "milestone" in the first paragraph is closest in meaning to',
                 ('distance', 'achievement', 'weight', 'discovery'), 1,
                 'It is something children reach at a certain age, so it is a stage achieved.'),
                ('Why is a coloured mark used?',
                 ('To track the animal’s movements', 'To see whether the animal recognises '
                  'itself', 'To tell the animals apart',
                  'To test colour vision'), 1,
                 'The animal must try to remove it from its own body, which only makes sense if '
                 'it knows the reflection is itself.'),
                ('All of the following are true about elephants EXCEPT:',
                 ('They can recognise themselves in mirrors', 'They are highly intelligent '
                  'animals', 'They are closely related to humans',
                  'They pass the same test as apes'), 2,
                 'The passage says the opposite: they are not closely related to us at all.'),
                ('Why does the author mention the cleaner fish?',
                 ('To suggest that the result has two possible readings',
                  'To prove that fish are intelligent', 'To criticise the method',
                  'To show that the test is now obsolete'), 0,
                 'The paragraph gives both interpretations and calls both uncomfortable.'),
            ],
        ),
        dict(
            gap_text='The human brain is a complex organ respon----- for controlling bodily '
                     'functions and enabling thought, emotion and memory. It is divided into '
                     'several reg----, each with a specific r---. The cerebrum, the largest '
                     'pa--, is involved in cognitive functions su-- as reasoning, planning and '
                     'language. The cerebellum coordi----- movement and balance, while the '
                     'brainstem controls vital functions l--- breathing and heart rate. These '
                     'parts dev---- at different speeds, and the regions that handle '
                     'long-term plan---- are among the l--- to finish. Together they enable the '
                     'brain to perform its various ta---.',
            gap_ans=['sible', 'ions', 'ole', 'rt', 'ch', 'nates', 'ike', 'elop', 'ning', 'ast'],
            docs=[
                ('social', 'Priya Raman', '@priya_learns', [
                    'Four weeks ago I stopped rereading my notes and started testing myself',
                    'instead. I want to report back because I was completely wrong about it.',
                    '',
                    'Rereading felt productive. Testing myself felt awful — I kept discovering',
                    'I did not know things I was sure I knew. That turns out to be the point.',
                    '',
                    'Mock exam yesterday: 71, against 54 in January. Same hours, same module,',
                    'different method. I am not claiming it works for everyone. I am claiming',
                    'that the method which feels worse was the one that worked for me.',
                ], 'h'),
                ('notice', 'Student Learning Centre · drop-in sessions, summer term', [
                    '# No appointment needed',
                    'Tuesdays 13.00–16.00   Room G12, Library',
                    'Thursdays 10.00–12.00   Seminar Room 4, Arnold Building',
                    '# What we can help with',
                    '* Planning a revision timetable around your actual commitments',
                    '* Reading faster without losing comprehension',
                    '* Exam technique, including what to do when you run out of time',
                    '# What we cannot do',
                    '* Explain subject content. Ask your tutor or a departmental tutorial.',
                    '* Read or correct a draft essay. The Writing Centre does that.',
                ], 'notice'),
            ],
            daily=[
                ('What is the main purpose of Priya’s post?',
                 ('To ask for study advice', 'To report the result of changing her method',
                  'To advertise a workshop', 'To complain about an exam'), 1,
                 'She says she wants to report back, and gives two marks four weeks apart.'),
                ('What does Priya say about rereading?',
                 ('It is quicker', 'It felt productive but was not',
                  'It works for everyone', 'It is what the centre recommends'), 1,
                 'Rereading felt productive; testing herself felt awful and produced the better '
                 'mark.'),
                ('What does Priya NOT claim?',
                 ('That her mark improved', 'That the method felt worse',
                  'That the method works for everyone', 'That the hours were the same'), 2,
                 'I am not claiming it works for everyone — she says so explicitly.'),
                ('What can a student get help with at a drop-in session?',
                 ('Understanding difficult subject content', 'Having an essay corrected',
                  'Planning a revision timetable', 'Choosing a module'), 2,
                 'The first item under What we can help with; the other two appear under what '
                 'they cannot do.'),
                ('A student wanting an essay checked should go to',
                 ('Room G12', 'Seminar Room 4', 'their tutor', 'the Writing Centre'), 3,
                 'The last line sends draft essays to the Writing Centre.'),
            ],
            passage=('The Paradox of Choice', [
                'The freedom to choose is central to consumer culture, and more choice is '
                'assumed to be better. Research over the last thirty years suggests the '
                'relationship is not that simple. Beyond a certain point, additional options '
                'produce anxiety and decision fatigue rather than satisfaction, because every '
                'extra possibility is also an extra way of choosing wrongly.',
                'The best-known demonstration is a supermarket experiment by the psychologist '
                'Sheena Iyengar. A tasting table offered either six varieties of jam or '
                'twenty-four. The larger display attracted more people, which is what any '
                'retailer would predict. It also sold far less: shoppers who saw six varieties '
                'were roughly ten times more likely to buy than those who saw twenty-four. The '
                'smaller selection made the decision easy enough to finish.',
                'The effect is not uniform. It is strongest where the options are similar and '
                'the buyer has no established preference, and it weakens where someone knows '
                'exactly what they want. It also appears to vary across cultures: in societies '
                'that place a high value on individual choice, the burden of deciding falls '
                'more heavily on the individual, while in others a narrower range is reported '
                'as a relief rather than a restriction. For retailers, the practical conclusion '
                'has been to curate rather than to stock everything.',
            ], 275),
            academic=[
                ('Which of the following best states a main idea of the passage?',
                 ('Effective marketing focuses on increasing product options',
                  'Limiting consumer choice can lead to higher satisfaction',
                  'Individualism increases consumer contentment',
                  'Modern shoppers prefer fewer products overall'), 1,
                 'The whole passage argues that beyond a point, more options reduce satisfaction '
                 'and sales.'),
                ('What is one effect of decision fatigue mentioned in the passage?',
                 ('A desire to copy other consumers', 'Anxiety about choosing wrongly',
                  'A preference for consumer cultures', 'Greater freedom of choice'), 1,
                 'Every extra possibility is also an extra way of choosing wrongly.'),
                ('Why does the author mention Iyengar’s experiment?',
                 ('To highlight effective marketing strategies',
                  'To provide evidence supporting the paradox of choice',
                  'To explain the methods used in consumer psychology',
                  'To criticise the abundance of products in modern markets'), 1,
                 'It is introduced as the best-known demonstration of the claim made in '
                 'paragraph 1.'),
                ('The word "curate" in the passage is closest in meaning to',
                 ('eliminate', 'select carefully', 'increase', 'advertise'), 1,
                 'It is contrasted with stocking everything, so it means choosing what to offer.'),
                ('What can be inferred about a shopper who knows exactly what they want?',
                 ('They are less affected by a large range', 'They buy more than other shoppers',
                  'They prefer twenty-four varieties', 'They take longer to decide'), 0,
                 'The effect weakens where someone knows exactly what they want.'),
            ],
        ),
    ],

    # ----------------------------------------------------------- LISTENING --
    listening=[
        dict(
            warm=[
                ('Woman: Didn’t I just see you in the library an hour ago?',
                 ('As a matter of fact, I was returning a book.',
                  'Yes, you can find it in the reference section.',
                  'I don’t think I’ll have enough time to do that.',
                  'Actually, I think I can get there a little earlier.'), 0,
                 'A negative question checking what the speaker saw; only one option explains '
                 'being there.'),
                ('Man: Where is the nearest bus stop?',
                 ('I nearly missed the bus.', 'Every thirty minutes.',
                  'I can help you find it.', 'I’ll take the subway instead.'), 2,
                 'Where wants a place or an offer to locate one; the others answer when and what '
                 'the speaker will do.'),
                ('Woman: How do I contact customer service?',
                 ('Yes, you’re allowed to do that.', 'Use the chat feature on the website.',
                  'No, I don’t mind.', 'They provide good service.'), 1,
                 'How wants a method, and a yes/no answer cannot fit a wh- question.'),
                ('Woman: I’m afraid I’m not available this evening.',
                 ('Oh, that’s too early.', 'How about tomorrow night then?',
                  'She arrived this afternoon.', 'No, that’s not necessary.'), 1,
                 'A refusal invites an alternative.'),
                ('Man: Isn’t the post office open today?',
                 ('No, it’s my package.', 'It’s just around the corner!',
                  'I think he’s come home already.', 'Let’s check the opening times online.'), 3,
                 'The speaker is unsure whether it is open, so the useful reply proposes finding '
                 'out.'),
                ('Woman: If you need me, just text.',
                 ('I can help you with that.', 'You don’t need any more information.',
                  'You have a lot of questions, don’t you?',
                  'You haven’t given me your number yet.'), 3,
                 'The offer cannot be acted on, and only one reply notices why.'),
                ('Woman: So the shop is open all weekend?',
                 ('Yes, there is a major power outage.', 'Yes, it’s under renovation.',
                  'Yes, but it closes early on Sunday.', 'Yes, they’re having a huge sale.'), 2,
                 'The question is about the weekend opening, so the answer must address both '
                 'days.'),
                ('Man: Did you get to the seminar?',
                 ('I overslept.', 'No, not very well.', 'Have you asked your professor?',
                  'I forgot to look.'), 0,
                 'A yes/no question about attendance; oversleeping answers it and explains it.'),
            ],
            convos=[
                ([('Woman', 'Need anything from the shop?'),
                  ('Man', 'Aren’t we going to the exhibition in half an hour?'),
                  ('Woman', 'That’s tomorrow.'),
                  ('Man', 'Oh. I’d forget my head if it wasn’t screwed on. So I don’t need to '
                          'change after all.'),
                  ('Woman', 'So you weren’t planning to cook, then?'),
                  ('Man', 'No, but I can. What do you want?'),
                  ('Woman', 'Something light. Can you go to the shop instead?'),
                  ('Man', 'Fine. Fish and a salad?'),
                  ('Woman', 'Perfect.')],
                 [('What does the woman imply she was about to do?',
                   ('See an exhibition', 'Change her clothes', 'Go shopping', 'Cook dinner'), 2,
                   'She asks whether he needs anything from the shop, which only makes sense if '
                   'she was going.'),
                  ('Why does the man say "I’d forget my head if it wasn’t screwed on"?',
                   ('He forgot what to buy', 'He got the day of the exhibition wrong',
                    'He forgot what they were eating', 'He forgot to change'), 1,
                   'He says it immediately after being told the exhibition is tomorrow.')]),
                ([('Man', 'Did you see the maintenance request about the heating?'),
                  ('Woman', 'I called the technician this morning. Somebody should be here '
                            'shortly.'),
                  ('Man', 'That’s a relief. It’s uncomfortably cold in here.'),
                  ('Woman', 'I know — I called as soon as I noticed. Hopefully it’s a small '
                            'problem and they can get it working without too much delay. In the '
                            'meantime, why don’t you go to lunch early? It may be better when '
                            'you get back.')],
                 [('Why did the woman call a technician?',
                   ('A radiator is leaking', 'A room is too cold', 'A lift needs maintenance',
                    'A window will not open'), 1,
                   'The man says it is uncomfortably cold and she agrees she called about it.'),
                  ('What does the woman suggest the man do?',
                   ('Finish an assignment early', 'Wait for the technician',
                    'Take his lunch break early', 'Open a window'), 2,
                   'Why don’t you go to lunch early?')]),
            ],
            poster=['Guest lecture: Dr Cynthia Palmer',
                    'Monday 2 p.m., Waldman Auditorium',
                    'Arrive early — seats are limited'],
            announce=([('Man', 'Good afternoon, everyone. I am pleased to tell you that Dr '
                               'Cynthia Palmer, a well-known researcher in environmental '
                               'science, will give a guest lecture next Monday at two in the '
                               'Waldman Auditorium. Dr Palmer will discuss recent advances in '
                               'sustainable energy and their effect on global climate. Because '
                               'of the level of interest in her work I strongly recommend '
                               'arriving early to get a seat. The lecture is open to all '
                               'departments, and there is no need to book.')],
                      [('What is the announcement mainly about?',
                        ('A guest lecture', 'A different room for a class',
                         'The requirements for a course', 'A new science degree'), 0,
                        'The whole announcement concerns one lecture and how to attend it.'),
                       ('Why does the speaker mention Dr Palmer’s popularity?',
                        ('To encourage students to read her work',
                         'To indicate why she was invited', 'To compare her with other speakers',
                         'To explain why students should arrive early'), 3,
                        'Because of the level of interest, he recommends arriving early.')]),
            board=['Hard fascination: no room for thought',
                   'Soft fascination: room for thought',
                   'Mental fatigue → distraction, irritability',
                   'Attention is restored, not rested'],
            talk=([('Woman', 'Did you see that thriller that came out last week? I loved it. The '
                             'action, the plot twists — I was completely absorbed. Time just '
                             'went. Not one thought occurred to me that was unrelated to the '
                             'film. What I experienced is what psychologists call hard '
                             'fascination. It means intense, effortless focus: you are not '
                             'trying, and yet nothing else gets in. Television, video games, a '
                             'fast conversation — hard fascination is very easy to find in a '
                             'modern evening. There is a second kind, though. Soft fascination '
                             'is also effortless — no special effort is required to stay with it '
                             '— but it leaves room for other thoughts. When I walk in the park '
                             'and look at the trees, I might be thinking in the back of my mind '
                             'about dinner. Now, one thing to know is that hard fascination '
                             'causes mental fatigue. The mind is so intensely focused that it '
                             'tires. What follows mental fatigue? You find yourself easily '
                             'distracted, irritable and stressed. Soft fascination does the '
                             'opposite. It engages a different part of the brain, the default '
                             'mode network, which soothes the mind and restores the ability to '
                             'concentrate. So next time your mind feels overloaded, turn off the '
                             'television, put down the phone, take a walk, or simply sit and '
                             'look at the clouds.')],
                  [('What is the topic of the talk?',
                    ('How psychologists study attention', 'How to keep the mind focused',
                     'Two types of fascination', 'The benefits of hard fascination'), 2,
                    'The speaker names both kinds and spends the talk contrasting them.'),
                   ('Why does the speaker mention a film?',
                    ('To compare different types of film', 'To introduce a concept in psychology',
                     'To explain how films affect emotions',
                     'To encourage listeners to watch more films'), 1,
                    'Her own experience is used to define hard fascination.'),
                   ('What does the speaker say about her walk in the park?',
                    ('It is similar to watching a good film',
                     'Her mind has room for thoughts unrelated to nature',
                     'She has to make a special effort to stay focused',
                     'She gets mental fatigue from it'), 1,
                    'She might be thinking in the back of her mind about dinner.'),
                   ('What does the speaker say about the default mode network?',
                    ('It is involved in soft fascination', 'It leads to irritability and stress',
                     'It is easily tired by overuse', 'Its effect is unknown to psychologists'), 0,
                    'Soft fascination engages it, and it restores concentration.')]),
        ),
        dict(
            warm=[
                ('Woman: Who is the new manager?',
                 ('She started last week.', 'I’m not sure, but I can find out.',
                  'Let’s welcome the new manager.', 'The position has been filled.'), 1,
                 'Who wants an identity; admitting you do not know and offering to find out '
                 'answers it.'),
                ('Man: When is the due date for the report?',
                 ('Please wait while I look that up.', 'Give me some dates.',
                  'No, I have another due date.', 'Yes, that’s correct.'), 0,
                 'A wh- question cannot take yes or no, and only one option addresses the date.'),
                ('Man: I’m going to get some groceries.',
                 ('Every Wednesday.', 'In aisle four.', 'The cinema is not open today.',
                  'Let’s go together.'), 3,
                 'A statement of intention invites a response to the plan.'),
                ('Woman: Would you like a copy of my notes?',
                 ('The research facility.', 'That would be great.', 'The break is in an hour.',
                  'Two bullet points.'), 1,
                 'An offer is accepted or declined.'),
                ('Man: Sami and Layla are on their way to the café.',
                 ('Should we join them?', 'Did you like the concert?', 'Yesterday evening.',
                  'The best coffee.'), 0,
                 'News about other people invites a suggestion.'),
                ('Woman: I’d like to hear your thoughts on the job candidates.',
                 ('I’m revising my résumé.', 'I’ll set up a meeting for us to talk.',
                  'She just got a promotion.', 'Yes, the training is complete.'), 1,
                 'A request for an opinion is met by arranging to give it.'),
                ('Woman: How much does expedited shipping cost?',
                 ('It’s one of many.', 'Twice last week.', 'We don’t offer that.',
                  'I’d like the bill, please.'), 2,
                 'How much wants a price, and saying the service does not exist answers it.'),
                ('Man: If you need more information, contact Ms Lee.',
                 ('I can help with that.', 'What is her role in the company?',
                  'You ask a lot of questions.', 'And whom should I contact?'), 1,
                 'Being given a name invites a question about that person.'),
            ],
            convos=[
                ([('Man', 'I’m trying to decide between a laptop and a tablet. What do you '
                          'think?'),
                  ('Woman', 'It depends what you need it for. If you want something light that '
                            'you can use on the train, a tablet is better.'),
                  ('Man', 'That’s true. But I like a proper keyboard for writing essays.'),
                  ('Woman', 'In that case…'),
                  ('Man', 'I know. I’d better think about it some more.')],
                 [('What is the man trying to decide between?',
                   ('A laptop and a desktop', 'A laptop and a tablet',
                    'A tablet and a phone', 'A tablet and a keyboard'), 1,
                   'He names both in his first line.'),
                  ('What reason does the woman give for her suggestion?',
                   ('It is cheaper', 'It is easier to use while travelling',
                    'It has a larger screen', 'It has a better keyboard'), 1,
                   'Something light that you can use on the train.')]),
            ],
            poster=['Student lounge closed tomorrow, 1–3 p.m.',
                    'Repair to a pipe in the ceiling',
                    'Use the library or the campus café'],
            announce=([('Woman', 'Attention, everyone. The student lounge will be closed '
                                 'tomorrow from one until three in the afternoon for '
                                 'maintenance. We are repairing a broken pipe in the ceiling, '
                                 'and the area underneath has to be cleared for safety. We '
                                 'apologise for the inconvenience. Please plan accordingly and '
                                 'consider using the library or the campus café during that '
                                 'time. Anything left in the lounge will be moved to the porters’ '
                                 'desk, so please take your belongings with you before one.')],
                      [('What is the main purpose of the announcement?',
                        ('To inform students about a schedule change',
                         'To announce new lounge facilities',
                         'To notify students of a temporary closure',
                         'To encourage students to use the lounge more'), 2,
                        'The lounge closes for two hours tomorrow, and everything else follows '
                        'from that.'),
                       ('What should students do during the closure?',
                        ('Wait in the lounge', 'Help with the maintenance',
                         'Use other spaces on campus', 'Visit the library website'), 2,
                        'Consider using the library or the campus café.')]),
            board=['Footprint = resources used + waste produced',
                   'Measured in global hectares',
                   'Driven by energy, transport, food, housing',
                   'Used to set policy'],
            talk=([('Man', 'An ecological footprint is a measure of the environmental impact of '
                           'an individual, a community or a country. It calculates the amount of '
                           'natural resources consumed and the waste generated by human '
                           'activity, and it is usually expressed in global hectares. Comparing '
                           'footprints lets us understand how different ways of living '
                           'contribute to resource depletion. The footprint of someone in a '
                           'developed country is typically larger than that of someone in a '
                           'developing country, mainly because of higher levels of consumption '
                           'and waste. Energy use, transport, food and housing all play '
                           'significant roles in determining its size. Understanding ecological '
                           'footprints matters because it identifies where change makes a '
                           'difference. If you eat locally produced food, for example, you are '
                           'likely to reduce your footprint, because less energy is used '
                           'transporting that food. Governments and organisations also use '
                           'footprint data to develop policies aimed at sustainable development. '
                           'I will give you some examples of that next.')],
                  [('What is the main topic of the talk?',
                    ('Changes in consumption over time', 'A measure of environmental impact',
                     'Environmentally damaging activities',
                     'The role of governments in sustainability'), 1,
                    'The talk defines the ecological footprint and explains what it is for.'),
                   ('Why does the speaker mention developed and developing countries?',
                    ('To contradict a theory about the footprint',
                     'To show that resource depletion is similar regardless of lifestyle',
                     'To illustrate the usefulness of comparing footprints',
                     'To point out that production efficiency reduces the footprint'), 2,
                    'The comparison is given as what footprints let us understand.'),
                   ('What does the speaker mention as a way to reduce a footprint?',
                    ('Disposing of waste appropriately', 'Joining an environmental organisation',
                     'Using environmentally friendly transport',
                     'Eating locally produced food'), 3,
                    'The example given is local food, because less energy is used transporting '
                    'it.'),
                   ('What will the speaker most likely discuss next?',
                    ('How footprint information has been used in creating policies',
                     'How data about footprints is collected',
                     'Why the idea of a footprint is often misunderstood',
                     'Why sustainable development is difficult to achieve'), 0,
                    'The last sentence promises examples of governments using footprint data for '
                    'policy.')]),
        ),
    ],

    # ------------------------------------------------------------- WRITING --
    writing=dict(
        build=[
            ('What was the highlight of your trip?',
             ['were', 'the', 'was', 'old city', 'showed us around', 'who', 'tour guides'],
             'The tour guides who showed us around the old city were fantastic.'),
            ('I heard Anna got a promotion.',
             ['a different department', 'if', 'moving to', 'know', 'do', 'you'],
             'Do you know if she will be moving to a different department?'),
            ('We’re planning a trip to the mountains next weekend.',
             ['the cabins', 'available', 'whether', 'can', 'will be', 'you'],
             'Can you tell me whether the cabins will be available?'),
            ('I’m looking forward to the concert this weekend.',
             ['does', 'what', 'time', 'it', 'start'],
             'What time does it start?'),
            ('The museum exhibition opens next month.',
             ['do', 'you', 'how', 'know', 'tickets', 'will cost', 'much'],
             'Do you know how much tickets will cost?'),
            ('I’m planning to go to the beach tomorrow.',
             ['is', 'time of year', 'what', 'the water', 'this', 'like', 'temperature'],
             'What is the water temperature like this time of year?'),
            ('I need to buy groceries today.',
             ['list', 'do', 'a', 'have', 'shopping', 'you'],
             'Do you have a shopping list?'),
            ('I’ll be taking a cooking class this weekend.',
             ['learn', 'what', 'will', 'you', 'recipes'],
             'What recipes will you learn?'),
            ('What did Maria ask you about the book you’re reading?',
             ['she', 'wanted', 'a copy', 'buy', 'to know', 'could', 'where'],
             'She wanted to know where she could buy a copy.'),
            ('How did you prepare for the exam?',
             ['by', 'the professor', 'that', 'the study guide', 'was provided', 'it'],
             'I used the study guide that was provided by the professor.'),
        ],
        email=dict(
            to='editor@sunshinepoetrymagazine.com',
            date='14/05/2026',
            subject='Problem using the submission form',
            scenario=[
                'A new poetry magazine has asked its readers for submissions, and you decided to '
                'submit two of your poems. However, you had a problem using the online '
                'submission form, and you are not certain that your submissions were received.',
                'Write an email to the editor of the magazine.',
            ],
            bullets=['Tell the editor what you like about the new magazine.',
                     'Describe the problem you experienced.',
                     'Ask about the status of your submissions.'],
        ),
        disc=dict(
            prof='Dr Alvarez',
            question='Volunteerism means giving your time and service without payment, for the '
                     'benefit of a community or a cause. Some high schools now require students '
                     'to complete a certain number of volunteer hours in order to graduate. '
                     'Should high school students be required to do volunteer work? Why or why '
                     'not?',
            posts=[('Mei', 'w',
                    'Yes, I think high schools should require volunteer hours, because it helps '
                    'students build a sense of civic responsibility. Many teenagers do not '
                    'naturally think about helping others, and this requirement can introduce '
                    'them to the idea that their time and effort make a real difference.'),
                   ('Daniel', 'm',
                    'I do not think volunteer hours should be required, because many students '
                    'already have limited free time. Some have part-time jobs or take care of '
                    'younger siblings after school. Adding a mandatory requirement could create '
                    'extra stress for exactly the students who have least room for it.')],
        ),
    ),

    # ------------------------------------------------------------ SPEAKING --
    speaking=dict(
        repeat=['We have a variety of wildlife.',
                'Bears, wolves and large cats are to the right.',
                'You can find sea lions and elephants further down the path.',
                'Please, no outside food or drinks, and do not feed the animals.',
                'Avoid banging or tapping on the displays and enclosures.',
                'For those with children, we offer summer camps and educational opportunities.',
                'The visitors’ centre, located near the front entrance, can give you more information.'],
        interview=('a research study about urban life',
                   ['Thank you for speaking with me today. I am conducting a study about '
                    'people’s experiences and perceptions of living in a city. Now, do you '
                    'currently live in a big city, a small town, or a village?',
                    'Great. Cities affect people in different ways. Some people find cities '
                    'dynamic and exciting. Others find that cities are overwhelming and drain '
                    'them of energy. What kind of reaction do you have to cities? Why do you '
                    'think you react in this way?',
                    'OK. Next, I would like to ask your opinion. Some people believe that those '
                    'who live in cities lead more interesting lives. They would argue, for '
                    'example, that people who live in cities have more access to professional '
                    'opportunities and interesting leisure activities. Do you agree that people '
                    'who live in cities lead more interesting lives? Why or why not?',
                    'Good points. Let me ask you one final question. For some time now, '
                    'researchers have been interested in whether green spaces, such as parks, '
                    'make people who live in cities happier. Do you think that city governments '
                    'should create more parks in urban areas to promote a general sense of '
                    'happiness and life satisfaction? Why or why not?']),
    ),
)
