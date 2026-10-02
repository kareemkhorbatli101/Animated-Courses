# -*- coding: utf-8 -*-
"""Practice Test 2 — Volume 2. 97 items, in the order the 2026 test asks them."""

TEST = dict(
    n=2,

    # ------------------------------------------------------------- READING --
    reading=[
        dict(
            gap_text='Before the 1950s an archaeologist could say that one layer of a site was '
                     'old-- than another, but not how old either of them was. Dating depended on '
                     'objects whose age was already kn---: a coin with an emperor on it, a pot '
                     'of a style that had been traced elsew----. A site with no such object was '
                     'almost sil---. Then came radiocarbon dating, which measures the carbon '
                     'left in anything that was once ali--. Suddenly a handful of charcoal from '
                     'a fire was as useful as a coin, and whole peri--- had to be rewritten. '
                     'Some dates moved by centu----. The method is not per----: it needs organic '
                     'material, it has a margin of er---, and it stops working beyond about '
                     'fifty thousand years. But it changed the ques----- archaeologists were '
                     'able to ask.',
            gap_ans=['er', 'own', 'here', 'ent', 've', 'ods', 'ries', 'fect', 'ror', 'tions'],
            docs=[
                ('notice', 'Careers Service · summer internship workshops', [
                    '# Who the workshops are for',
                    'Second and third-year undergraduates in any department.',
                    '# Dates and rooms',
                    'Tuesday 3 March   16.00 – 17.30   Room B14, Careers Centre',
                    'Friday 6 March   10.00 – 11.30   Lecture Theatre 2, Science Block',
                    '# What each session covers',
                    '* Reading an advertisement for what it actually asks for',
                    '* One application letter, written in the session and read back to you',
                    '* A fifteen minute mock interview, recorded if you want it',
                    '# Booking',
                    '* Book one session only. Places are released on the Monday before.',
                    '* Bring a draft CV. We cannot write one for you in ninety minutes.',
                ], 'notice'),
                ('email', 'd.navarro@northgate.edu', 'careers@northgate.edu',
                 '02/03/2026', 'Your booking — session moved to Friday', [
                     'Dear Ms Navarro,',
                     '',
                     'You booked the Tuesday workshop, but the Careers Centre is being',
                     'rewired that afternoon and Room B14 is not available. We have moved',
                     'you to the Friday session at ten in Lecture Theatre 2.',
                     '',
                     'If Friday morning does not work for you, reply by Wednesday and we',
                     'will hold a place for you in the April round instead. Please do not',
                     'book a second session yourself; the system will read it as a',
                     'duplicate and cancel both.',
                     '',
                     'Your draft CV is still the one thing to bring.',
                     '',
                     'Northgate Careers Service',
                 ]),
            ],
            daily=[
                ('Who may attend the workshops?',
                 ('First-year students only', 'Students in any department in years two and '
                  'three', 'Science students only', 'Postgraduates'), 1,
                 'Second and third-year undergraduates in any department.'),
                ('What are students asked to bring?',
                 ('A recording device', 'A letter of application', 'A draft CV',
                  'A job advertisement'), 2,
                 'Bring a draft CV — the notice says the service cannot write one for you.'),
                ('Why has Ms Navarro’s session been changed?',
                 ('She booked twice', 'The workshop is full',
                  'The room is unavailable because of building work',
                  'The Tuesday session was cancelled for everyone'), 2,
                 'The Careers Centre is being rewired and Room B14 is not available.'),
                ('What should Ms Navarro do if Friday does not suit her?',
                 ('Book another session online', 'Reply by Wednesday',
                  'Attend the April round without replying', 'Contact Room B14'), 1,
                 'Reply by Wednesday and a place will be held in April.'),
                ('Why is she told not to book a second session?',
                 ('Places have run out', 'It would be read as a duplicate and cancel both',
                  'Only staff can book', 'The system closes on Monday'), 1,
                 'The system will read it as a duplicate and cancel both.'),
            ],
            passage=('The Loudness War', [
                'A recording has a fixed ceiling. Whatever the music, the loudest moment cannot '
                'go past the maximum the format allows, so the only way to make a track sound '
                'louder is to raise the quiet parts towards that ceiling. Engineers do this with '
                'compression, and for about thirty years they did it harder every decade.',
                'The reason was competition rather than taste. A track that sounded louder than '
                'the one before it on the radio seemed to listeners to be better produced, and '
                'nobody wanted to be the quiet record in a playlist. By the late 1990s some '
                'albums were mastered so close to the ceiling that the difference between the '
                'softest and the loudest passage had almost disappeared. A famous example from '
                '2008 was released in two versions, and many buyers preferred the quieter one '
                'that came with a video game.',
                'What ended the practice was not an argument about music. Streaming services '
                'began to normalise volume automatically, turning every track down to the same '
                'perceived level before it was played. A heavily compressed track no longer '
                'sounds louder than anything else; it simply sounds flat, because the loud '
                'moments it gave away cannot be returned. The incentive reversed overnight, and '
                'dynamic range has been recovering ever since. The lesson is a general one about '
                'competition: a race that everybody can enter is a race that nobody wins.',
            ], 272),
            academic=[
                ('What is the passage mainly about?',
                 ('How compression works in a recording studio',
                  'Why recordings became louder and then stopped',
                  'Why listeners prefer loud music',
                  'How streaming services choose what to play'), 1,
                 'The passage traces a thirty-year rise in loudness and the change that ended '
                 'it.'),
                ('According to the passage, why can a track not simply be made louder?',
                 ('Listeners would object', 'Compression is expensive',
                  'The format has a fixed maximum', 'Radio stations limit it'), 2,
                 'The loudest moment cannot go past the maximum the format allows.'),
                ('The word "ceiling" in the passage is closest in meaning to',
                 ('upper limit', 'recording studio', 'average level', 'starting point'), 0,
                 'It is the maximum the format allows, so it is an upper limit.'),
                ('Why does the author mention the album released in two versions?',
                 ('To show that compression improves sound',
                  'To give an example of how far the practice had gone',
                  'To explain how video games use music',
                  'To compare two recording formats'), 1,
                 'It is offered as a famous example of mastering taken to its extreme, with '
                 'buyers preferring the quieter cut.'),
                ('Why does normalisation remove the incentive to compress?',
                 ('A compressed track is turned down to the same level as any other',
                  'Streaming services reject compressed tracks',
                  'Compression is now done automatically',
                  'Listeners can set their own volume'), 0,
                 'Everything is brought to the same perceived level, so the loudness gained by '
                 'compression no longer exists.'),
            ],
        ),
        dict(
            gap_text='A city can be measured by how far its people have to tra--- to do '
                     'ordinary things. Planners call the comfortable version the fifteen minute '
                     'city: a place where a school, a shop, a doctor and a park are all within a '
                     'short w--- or cycle. The idea is not n--: it describes most European '
                     'towns before the car. What is new is having to design it back in deli--------. '
                     'Twentieth century planning separated functions on pur----, putting housing '
                     'in one zone, work in anot---, and shopping in a third, and then conn------ '
                     'them with roads. That worked while driving was ch--- and the roads were '
                     'empty. It works bad-- now. Bringing the functions back together is slow, '
                     'because it means changing rules that were written to keep them ap---.',
            gap_ans=['vel', 'alk', 'ew', 'berately', 'pose', 'her', 'ecting', 'eap', 'ly', 'art'],
            docs=[
                ('social', 'Tomas Iverson', '@tomas_builds', [
                    'I gave up my car in January. Eight months of notes, because everyone keeps',
                    'asking and I keep giving a different answer.',
                    '',
                    'What is better: money, obviously. What is worse: anything involving a large',
                    'object. I have carried a bookcase across town on a bus and I do not',
                    'recommend it.',
                    '',
                    'What surprised me is that my city got smaller. I stopped going to places',
                    'that were twenty minutes away by car and started using the ones that were',
                    'five minutes away on foot. Better or worse? I genuinely do not know.',
                ], 'm'),
                ('notice', 'Campus Transport · changes from Monday 14 September', [
                    '# Shuttle bus',
                    'Every 10 minutes 07.30 – 19.00, then every 30 minutes until 23.00.',
                    'The 23.00 service runs to the station only.',
                    '# Cycle parking',
                    '* The rack behind the Arnold Building is removed during the works.',
                    '* Use the covered racks at the Library or the Sports Centre.',
                    '* Bicycles locked to railings will be cut free and held for 14 days.',
                    '# Parking permits',
                    '* Permits are allocated by distance, not by year of study.',
                    '* Students living within two miles of campus are not eligible.',
                ], 'web'),
            ],
            daily=[
                ('What is the main purpose of Tomas’s post?',
                 ('To persuade readers to give up driving',
                  'To report what changed after he stopped driving',
                  'To complain about public transport', 'To sell a bookcase'), 1,
                 'He says he is giving eight months of notes because people keep asking.'),
                ('What does Tomas say is worse without a car?',
                 ('The cost', 'Journeys involving something large',
                  'The time it takes', 'Travelling at night'), 1,
                 'Anything involving a large object — he carried a bookcase on a bus.'),
                ('What surprised Tomas?',
                 ('How much money he saved', 'That he used places closer to home',
                  'That buses were faster', 'That he missed driving'), 1,
                 'He stopped going to places twenty minutes away and used ones five minutes '
                 'away.'),
                ('How often does the shuttle bus run at 8 p.m.?',
                 ('Every 10 minutes', 'Every 15 minutes', 'Every 30 minutes',
                  'It does not run'), 2,
                 'Every 30 minutes after 19.00, until 23.00.'),
                ('Who cannot get a parking permit?',
                 ('First-year students', 'Students who cycle',
                  'Students living within two miles of campus', 'Students using the shuttle'), 2,
                 'Permits go by distance, and those within two miles are not eligible.'),
            ],
            passage=('Why Animals Play', [
                'Play is expensive. A young animal that chases, wrestles or leaps is burning '
                'energy it could store, making noise a predator can hear, and risking injury '
                'for no immediate return. Behaviour that costly does not usually survive, which '
                'is why biologists treat play as a problem to be explained rather than an '
                'obvious pleasure.',
                'The oldest explanation is practice. A kitten stalking a leaf is rehearsing a '
                'hunt, and a young deer running in circles is training the muscles it will need '
                'to escape. The difficulty is that animals deprived of play often hunt and run '
                'perfectly well as adults. What they do badly is something else: they handle '
                'surprises poorly, and they fail at the social parts of their lives. A rat '
                'raised without play can fight, but it cannot tell when a fight has stopped '
                'being a game.',
                'The current view is therefore closer to flexibility than to skill. Play puts an '
                'animal into situations it does not control, on purpose and at low cost, and '
                'what it learns is how to recover. This also explains the pattern across '
                'species. Play is common in animals with long childhoods and complicated social '
                'lives, and rare in animals that must function almost immediately after birth. '
                'An animal with no time to be bad at things does not play, and an animal that '
                'will need to improvise does.',
            ], 268),
            academic=[
                ('Which of the following best states a main idea of the passage?',
                 ('Play teaches animals the physical skills they will need as adults',
                  'Play is a way of learning to deal with situations an animal does not control',
                  'Play is a form of pleasure that has no biological purpose',
                  'Play is found in all young animals'), 1,
                 'The third paragraph names flexibility, not skill, as the current view.'),
                ('Why does the author call play "expensive"?',
                 ('It requires adult supervision', 'It uses energy and carries risk for no '
                  'immediate return', 'It takes time away from feeding',
                  'It is only possible in large groups'), 1,
                 'The first paragraph lists energy, noise and risk of injury with no immediate '
                 'return.'),
                ('What problem is identified with the practice explanation?',
                 ('Young animals do not play enough to practise',
                  'Animals deprived of play still hunt and run well',
                  'Practice cannot be measured', 'Adults also play'), 1,
                 'They do those things perfectly well; what they do badly is social and '
                 'unexpected situations.'),
                ('What is said about a rat raised without play?',
                 ('It cannot fight', 'It cannot tell when a fight is no longer a game',
                  'It avoids other rats', 'It is physically weak'), 1,
                 'It can fight, but it cannot read the point at which a fight stops being a '
                 'game.'),
                ('What can be inferred about an animal that must function immediately after '
                 'birth?',
                 ('It plays more than other animals', 'It is unlikely to play',
                  'It learns to play as an adult', 'It plays only with its parents'), 1,
                 'An animal with no time to be bad at things does not play.'),
            ],
        ),
    ],

    # ----------------------------------------------------------- LISTENING --
    listening=[
        dict(
            warm=[
                ('Man: Where did you put the lab notebook?',
                 ('About two hours.', 'On the shelf above your desk.',
                  'I wrote it up yesterday.', 'Yes, I have it.'), 1,
                 'Where wants a place; the others answer how long, what and yes/no.'),
                ('Woman: Haven’t you handed in the assignment yet?',
                 ('It was a long assignment.', 'No, I’m finishing the last section tonight.',
                  'Yes, it was due last week.', 'I don’t have that class.'), 1,
                 'A negative question expects confirmation or a correction, with a reason.'),
                ('Woman: The printer in the lab is out of paper again.',
                 ('I’ll get some from the store cupboard.', 'It prints in colour.',
                  'About thirty pages.', 'Yes, I printed it.'), 0,
                 'A complaint about a shortage invites an offer to fix it.'),
                ('Man: Could you tell me how the referencing system works?',
                 ('It’s on the third floor.', 'Yes, I referenced it.',
                  'There’s a guide on the library site I can send you.',
                  'I didn’t read that one.'), 2,
                 'How wants a method, and pointing to a guide supplies one.'),
                ('Man: I’m afraid the data from Tuesday is unusable.',
                 ('That’s a shame — can we run it again?', 'Tuesday is fine for me.',
                  'No, I don’t mind.', 'It was very useful.'), 0,
                 'Bad news invites a response to the problem, not agreement.'),
                ('Woman: Who is supervising your project?',
                 ('Next semester.', 'In the biology department.',
                  'Dr Haddad, in the biology department.', 'It’s about animal behaviour.'), 2,
                 'Who wants a person; a department alone does not answer it.'),
                ('Woman: So the seminar has been moved to Thursday?',
                 ('Yes, and to a bigger room.', 'Yes, I attended it.',
                  'Yes, Thursday is a busy day.', 'Yes, it lasted two hours.'), 0,
                 'A checking question about a change is answered by confirming and adding to '
                 'it.'),
                ('Man: If you want, I can look over your draft.',
                 ('I looked over it twice.', 'That would really help — are you free Friday?',
                  'You’ve asked a lot of questions.', 'No, the draft is long.'), 1,
                 'An offer is accepted and then arranged.'),
            ],
            convos=[
                ([('Woman', 'Are you going to the department talk at four?'),
                  ('Man', 'I didn’t know there was one. What’s it on?'),
                  ('Woman', 'Antibiotic resistance. The speaker works on it in hospitals.'),
                  ('Man', 'Four is difficult. I’ve got a lab until half past.'),
                  ('Woman', 'They record them now. It goes up the next morning.'),
                  ('Man', 'That solves it, then. Although I’d rather be in the room — you can '
                          'ask things.'),
                  ('Woman', 'Send me a question and I’ll ask it for you.'),
                  ('Man', 'Deal.')],
                 [('What is the man’s problem?',
                   ('He is not interested in the topic', 'He has a class until 4.30',
                    'He has not been invited', 'He does not know where the talk is'), 1,
                   'He says four is difficult because he has a lab until half past.'),
                  ('What does the woman offer to do?',
                   ('Record the talk', 'Change the time of the talk',
                    'Ask a question on his behalf', 'Lend him her notes'), 2,
                   'Send me a question and I’ll ask it for you.')]),
                ([('Man', 'I’ve been looking at the enrolment numbers for the new module.'),
                  ('Woman', 'Lower than you hoped?'),
                  ('Man', 'Eleven. We need fifteen to run it.'),
                  ('Woman', 'It’s timetabled against the statistics course, which everybody '
                            'has to take. That’s probably all it is.'),
                  ('Man', 'I hadn’t checked that. If it’s a clash rather than a lack of '
                          'interest, that’s fixable.'),
                  ('Woman', 'Ask for a Wednesday slot before the timetable is published.')],
                 [('Why is the man concerned?',
                   ('The module has too many students', 'Only eleven students have enrolled',
                    'The module has been cancelled', 'He cannot find a room'), 1,
                   'Eleven have enrolled and fifteen are needed.'),
                  ('What explanation does the woman suggest?',
                   ('The module is too difficult', 'Students are not interested in the subject',
                    'It clashes with a compulsory course', 'It was advertised too late'), 2,
                   'It is timetabled against the statistics course, which everybody has to '
                   'take.')]),
            ],
            poster=['Flu vaccination clinic · Thursday and Friday',
                    'Health Centre, 09.00 – 16.00, no appointment',
                    'Bring your student card'],
            announce=([('Woman', 'A quick notice about health services. The Health Centre is '
                                 'running its flu vaccination clinic this Thursday and Friday, '
                                 'from nine until four on both days. You do not need an '
                                 'appointment; just come to the Health Centre and bring your '
                                 'student card. The vaccination is free for all registered '
                                 'students. I should say that the clinic is busiest at lunchtime, '
                                 'so if your timetable allows it, come in the morning. One more '
                                 'thing: if you have had flu in the last two weeks, speak to a '
                                 'nurse at the desk before joining the queue rather than waiting '
                                 'and being turned away at the end.')],
                      [('What is the announcement mainly about?',
                        ('A vaccination clinic', 'A change to Health Centre opening hours',
                         'A flu outbreak on campus', 'A new charge for health services'), 0,
                        'The whole notice is about the clinic and how to attend it.'),
                       ('What does the speaker advise students who have recently had flu to do?',
                        ('Come on Friday instead', 'Make an appointment',
                         'Speak to a nurse before queueing', 'Avoid the clinic entirely'), 2,
                        'Speak to a nurse at the desk before joining the queue.')]),
            board=['Resistance is not new — it follows use',
                   'Short courses, wrong doses → selection',
                   'Bacteria share resistance genes',
                   'Fewer new antibiotics since 1990'],
            talk=([('Man', 'When penicillin reached hospitals in the 1940s it looked like the '
                           'end of bacterial disease. Resistant bacteria were reported within a '
                           'few years. That is worth sitting with, because it tells you that '
                           'resistance is not a modern accident. It is what happens whenever an '
                           'antibiotic is used. In any large population of bacteria a few happen '
                           'to survive the drug. Kill the rest and you have cleared the space '
                           'for exactly those few. The practical question is therefore not how '
                           'to prevent resistance, which we cannot, but how fast we let it '
                           'spread. Two things make it faster. The first is incomplete '
                           'treatment: a course stopped early, or a dose too low, kills the '
                           'weakest bacteria and leaves the strongest alive and with less '
                           'competition. The second is that bacteria do not only pass '
                           'resistance to their offspring. They can hand the relevant genes '
                           'sideways to unrelated bacteria, which means resistance acquired in '
                           'one species can appear in another. Now, against all of that we '
                           'would want a steady supply of new antibiotics, and here the news is '
                           'poor. Almost nothing genuinely new has reached patients since 1990, '
                           'largely because a drug that doctors are told to use as rarely as '
                           'possible is a difficult thing to sell. I want to look next at what '
                           'has been tried to fix that.')],
                  [('What is the main point of the talk?',
                    ('Penicillin is no longer effective',
                     'Resistance is an expected result of antibiotic use',
                     'Hospitals use antibiotics incorrectly',
                     'New antibiotics are easy to develop'), 1,
                    'The speaker says resistance is what happens whenever an antibiotic is '
                    'used, and builds the talk on that.'),
                   ('Why does the speaker mention the 1940s?',
                    ('To praise the discovery of penicillin',
                     'To show that resistance appeared almost immediately',
                     'To compare two kinds of bacteria',
                     'To explain how antibiotics are made'), 1,
                    'Resistant bacteria were reported within a few years, which shows it is not '
                    'a modern accident.'),
                   ('What does the speaker say about stopping a course of treatment early?',
                    ('It has no effect on resistance',
                     'It leaves the strongest bacteria with less competition',
                     'It kills all the bacteria more slowly',
                     'It is recommended in some cases'), 1,
                    'It kills the weakest and leaves the strongest alive and with less '
                    'competition.'),
                   ('Why are few new antibiotics being developed?',
                    ('A drug meant to be used rarely is hard to sell',
                     'The science is no longer understood',
                     'Bacteria change too quickly to study',
                     'Hospitals will not buy them'), 0,
                    'The speaker gives that commercial reason explicitly.')]),
        ),
        dict(
            warm=[
                ('Woman: What time does the recording studio close?',
                 ('It’s in the music building.', 'At nine, but the last booking is eight.',
                  'Yes, it’s open today.', 'I booked it last week.'), 1,
                 'What time wants a time, and the useful answer adds the booking limit.'),
                ('Man: How many sources do we need for the essay?',
                 ('It’s due on Monday.', 'Six, and at least two from journals.',
                  'I found it in the library.', 'No, I haven’t started.'), 1,
                 'How many wants a number; the others answer when, where and yes/no.'),
                ('Man: I’ve finished the slides for our presentation.',
                 ('That was quick — can you send them over?', 'The presentation is on Friday.',
                  'Yes, I like presentations.', 'About fifteen minutes.'), 0,
                 'News that work is done invites a response to the work.'),
                ('Woman: Would you rather present first or last?',
                 ('For about ten minutes.', 'Last, if that’s allowed.',
                  'Yes, I would.', 'In the main lecture theatre.'), 1,
                 'A would-rather question offers two choices and needs one of them.'),
                ('Woman: I can’t find the reading list anywhere.',
                 ('It’s quite a long list.', 'Yes, I read it.',
                  'It moved to the new course page — I’ll send the link.',
                  'There were four readings.'), 2,
                 'Not being able to find something invites help finding it.'),
                ('Man: Do you know whether the museum is free for students?',
                 ('It’s open until six.', 'I think so, with a student card.',
                  'The museum is near the station.', 'Yes, I went last year.'), 1,
                 'An embedded whether question asks for a yes or no about the fact, with the '
                 'condition that applies.'),
                ('Man: Dr Okoye said she wants to see us both on Thursday.',
                 ('Did she say what about?', 'Thursday afternoon is fine.',
                  'I haven’t met her.', 'She teaches archaeology.'), 0,
                 'Being told about a summons invites a question about its purpose.'),
                ('Woman: The survey results are completely different from last year’s.',
                 ('Yes, it was a long survey.', 'How many people answered this time?',
                  'I filled it in.', 'Last year was better.'), 1,
                 'A surprising result invites a question that would explain it.'),
            ],
            convos=[
                ([('Woman', 'Did you get the email about the group project deadline?'),
                  ('Man', 'The one moving it forward a week?'),
                  ('Woman', 'Yes. Which is a problem, because we were going to interview people '
                            'in week nine.'),
                  ('Man', 'Can we not use the survey data instead? We already have it.'),
                  ('Woman', 'We could, but the whole point of the interviews was to explain the '
                            'survey. Without them we just have numbers.'),
                  ('Man', 'Then let’s ask for the original date and say why. That’s a reason, '
                          'not an excuse.')],
                 [('What has changed?',
                   ('The topic of the project', 'The deadline has moved earlier',
                    'The size of the group', 'The survey questions'), 1,
                   'The email moves the deadline forward a week.'),
                  ('Why does the woman reject using only the survey data?',
                   ('The data is unreliable', 'There is not enough of it',
                    'The interviews were meant to explain the survey',
                    'The survey is not finished'), 2,
                   'Without the interviews they just have numbers.')]),
            ],
            poster=['Library late opening ends Sunday',
                    'From Monday: closes at 22.00',
                    '24-hour study space stays open'],
            announce=([('Man', 'This is a notice from the Library. The twenty-four hour opening '
                               'we have run through the examination period ends this Sunday. '
                               'From Monday the Library closes at ten in the evening, as it does '
                               'in term time, and the last entry is half past nine. The '
                               'twenty-four hour study space on the ground floor is not '
                               'affected and remains open with your card. Please note that the '
                               'book return machine is inside the main entrance, so after ten '
                               'you will need to use the external drop box by the cycle racks. '
                               'Items placed in the drop box are checked in the following '
                               'morning, which matters if something is due that day.')],
                      [('What is the main purpose of the notice?',
                        ('To announce longer opening hours',
                         'To explain the end of 24-hour opening',
                         'To advertise the study space', 'To announce a new return machine'), 1,
                        'Everything in the notice follows from 24-hour opening ending on '
                        'Sunday.'),
                       ('Why does the speaker mention the drop box?',
                        ('It is being moved', 'It is for staff only',
                         'It is the only way to return books after ten',
                         'It will be checked immediately'), 2,
                        'The return machine is inside, so after ten the external drop box is '
                        'the option.')]),
            board=['Recommender = prediction, not judgement',
                   'Trained on what people clicked, not liked',
                   'Narrow feedback loop → narrow feed',
                   'Fix: inject variety on purpose'],
            talk=([('Woman', 'A recommendation system does something narrower than most people '
                             'assume. It does not decide what is good. It predicts what you are '
                             'likely to click on, and it does that by looking at what people '
                             'similar to you clicked on before. Those two things are not the '
                             'same, and almost everything strange about these systems comes out '
                             'of the gap between them. Consider what the training data actually '
                             'contains. It records clicks, watch time and purchases, because '
                             'those are easy to measure. It does not record whether you enjoyed '
                             'the thing, whether you regretted the evening, or whether you '
                             'learned anything. A headline that makes you angry enough to open '
                             'it is, to the system, indistinguishable from an article you valued. '
                             'Then there is the loop. The system shows you what it predicts you '
                             'will click; you can only click on what you are shown; your clicks '
                             'become tomorrow’s training data. A small early preference can '
                             'narrow into a very small world, and the system will report that it '
                             'is performing beautifully, because it is: it is predicting clicks '
                             'with great accuracy. The engineering response is to interrupt the '
                             'loop deliberately, by inserting items the model is uncertain about '
                             'and seeing what happens. That costs clicks in the short term, '
                             'which is why it is a management decision rather than a technical '
                             'one.')],
                  [('What is the main topic of the talk?',
                    ('How to build a recommendation system',
                     'What recommendation systems actually predict, and the problems that '
                     'follow',
                     'Why people click on misleading headlines',
                     'How companies measure customer satisfaction'), 1,
                    'The talk opens with the narrow thing these systems predict and derives the '
                    'rest from it.'),
                   ('What does the speaker say about the training data?',
                    ('It is usually too small',
                     'It records behaviour that is easy to measure, not enjoyment',
                     'It is collected from surveys', 'It is deleted after use'), 1,
                    'Clicks, watch time and purchases are recorded; enjoyment and regret are '
                    'not.'),
                   ('Why does the speaker mention an angry headline?',
                    ('To criticise journalism',
                     'To show that the system cannot tell a valued article from a provoking one',
                     'To explain how headlines are written',
                     'To give an example of poor prediction'), 1,
                    'To the system the two are indistinguishable, because both produce a '
                    'click.'),
                   ('Why is interrupting the loop described as a management decision?',
                    ('It costs clicks in the short term',
                     'It requires new technology',
                     'Engineers do not understand it',
                     'It is illegal in some countries'), 0,
                    'The last sentence gives exactly that reason.')]),
        ),
    ],

    # ------------------------------------------------------------- WRITING --
    writing=dict(
        build=[
            ('I hear the department is hiring a new lecturer.',
             ['do', 'you', 'the interviews', 'know', 'are', 'when'],
             'Do you know when the interviews are?'),
            ('The archaeology field trip is in June.',
             ['how', 'tell', 'can', 'me', 'it', 'you', 'long', 'lasts'],
             'Can you tell me how long it lasts?'),
            ('I have applied for the summer internship.',
             ['heard', 'whether', 'have', 'you', 'shortlisted', 'you', 'been'],
             'Have you heard whether you have been shortlisted?'),
            ('My brother is studying in Berlin this year.',
             ['is', 'what', 'he', 'there', 'studying'],
             'What is he studying there?'),
            ('What did the supervisor say about your draft?',
             ['she', 'rewrite', 'asked', 'I', 'whether', 'could', 'the conclusion'],
             'She asked whether I could rewrite the conclusion.'),
            ('The concert on Saturday has sold out.',
             ['any', 'wonder', 'whether', 'I', 'will be', 'returns', 'there'],
             'I wonder whether there will be any returns.'),
            ('I would like to use the recording studio.',
             ['do', 'book', 'it', 'how', 'you'],
             'How do you book it?'),
            ('Somebody called about the laboratory induction.',
             ['they', 'it', 'told', 'me', 'postponed', 'had been'],
             'They told me it had been postponed.'),
            ('I read a very good article about city planning.',
             ['the one', 'was', 'that', 'it', 'you recommended'],
             'It was the one that you recommended.'),
            ('Our presentation is first on Friday morning.',
             ['you', 'nervous', 'are', 'about', 'going first'],
             'Are you nervous about going first?'),
        ],
        email=dict(
            to='bookings@northgate.edu',
            date='09/10/2026',
            subject='Studio booking cancelled without notice',
            scenario=[
                'You booked a recording studio on campus for a group project and travelled in '
                'to use it. When you arrived, the room was locked and a sign said the booking '
                'system had been reset. Your group lost the afternoon.',
                'Write an email to the bookings office.',
            ],
            bullets=['Explain which booking you had made and when.',
                     'Describe what happened when you arrived.',
                     'Ask what will be done about the lost session.'],
        ),
        disc=dict(
            prof='Dr Reyes',
            question='Many universities now record lectures and publish them online within a '
                     'day. Some staff argue that this reduces attendance and weakens the '
                     'experience for the students who do come. Others argue that recordings '
                     'make courses fairer. Should universities record all lectures and publish '
                     'them? Why or why not?',
            posts=[('Ingrid', 'w',
                    'I think all lectures should be recorded, because attendance is not the '
                    'same thing as learning. Students who work shifts, or who are ill, or who '
                    'do not take in information quickly the first time, are not choosing to '
                    'miss the lecture. A recording does not take anything away from the people '
                    'in the room.'),
                   ('Peter', 'm',
                    'I am less sure. In my experience the lectures worth attending are the ones '
                    'where the lecturer asks us things and changes direction, and nobody does '
                    'that to an empty room. If recordings become the normal way to take a '
                    'course, the thing being recorded will slowly become worse.')],
        ),
    ),

    # ------------------------------------------------------------ SPEAKING --
    speaking=dict(
        repeat=['The exhibition opens at ten.',
                'Tickets are free for students and staff.',
                'The first gallery contains tools from the earliest excavation.',
                'Please do not touch the objects, even those without a case around them.',
                'Photography is permitted, but without flash and without a tripod.',
                'If you would like a guided tour, groups leave the desk every half hour.',
                'The café, which is on the lower floor beside the shop, is open until five.'],
        interview=('a research study about how people learn',
                   ['Thank you for taking part today. I am carrying out a study about how '
                    'people learn outside formal education. To begin with, have you taught '
                    'yourself anything in the last year or two — a language, an instrument, a '
                    'practical skill?',
                    'Thank you. People go about this in very different ways. Some prefer to '
                    'follow a course from beginning to end, and others prefer to start with a '
                    'real task and fill in the gaps as they go. Which of those is closer to how '
                    'you learn, and why do you think that suits you?',
                    'That is interesting. Now I would like your opinion on something. Some '
                    'people argue that free material online has made teachers less necessary '
                    'than they were, because anybody can now find an explanation of anything. '
                    'Do you agree that teachers are less necessary than they used to be? Why or '
                    'why not?',
                    'One last question. Many countries are considering making some form of '
                    'education compulsory for adults, so that people return to study every few '
                    'years as their work changes. Do you think governments should require adults '
                    'to continue studying? Why or why not?']),
    ),
)
