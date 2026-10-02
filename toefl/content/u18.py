# -*- coding: utf-8 -*-
"""Unit 18 · Animal Behaviour."""

UNIT = dict(
    n=18, vol=2, title='Animal Behaviour',
    icons=('paw', 'leaf', 'globe'),
    subs=('How animals communicate', 'A volunteering scheme', 'Migration'),
    grammar='Purpose and reason',
    field='signal, instinct, survival',
    opener_line='Biology asks why constantly, and English has two different answers: a reason '
                'that looks backwards and a purpose that looks forwards. This unit separates '
                'them.',

    candos=[
        'complete word endings in a text about how animals signal',
        'read a volunteering notice and a post and find what I would have to commit to',
        'follow a passage that explains how something is known rather than what is known',
        'understand two people arranging shifts around their timetables',
        'explain why I do something, out loud, without preparing',
        'write an email asking to swap a commitment, and a post about competing goods',
    ],

    acad=[
        ('denote', 'to be a sign of; to mean'),
        ('conform', 'to behave according to a rule or pattern'),
        ('adjust', 'to change slightly to fit a situation'),
        ('communicate', 'to pass information to others'),
        ('category', 'a group of similar things'),
        ('discriminate', 'to tell the difference between'),
        ('subordinate', 'lower in rank'),
        ('cooperate', 'to work together'),
        ('passive', 'not acting; accepting what happens'),
        ('neutral', 'not favouring either side'),
        ('crucial', 'extremely important'),
        ('occur', 'to happen'),
        ('aspect', 'one part or feature of something'),
        ('approach', 'a way of dealing with something'),
        ('involve', 'to include as a necessary part'),
        ('specific', 'particular and exact'),
        ('principle', 'a basic rule or belief'),
        ('primary', 'main or first'),
        ('research', 'careful study to discover facts'),
        ('investigate', 'to examine in order to find out the truth'),
        ('couple', 'two of something; to join together'),
        ('mature', 'fully grown or developed'),
        ('anticipate', 'to expect and prepare for'),
        ('attach', 'to fasten or connect'),
    ],
    campus=[
        ('wildlife', 'animals and plants living in natural conditions'),
        ('reserve', 'an area protected for wildlife'),
        ('binoculars', 'an instrument for seeing distant things'),
        ('nest box', 'a wooden box put up for birds to nest in'),
        ('feeding', 'giving food to animals'),
        ('training session', 'a meeting at which you are taught a task'),
        ('badge', 'a small sign worn to identify you'),
        ('hide', 'a small shelter for watching animals unseen'),
        ('ranger', 'a person who looks after a park or reserve'),
        ('sightings log', 'a record of animals seen and when'),
        ('enclosure', 'a fenced area where animals are kept'),
        ('lead', 'a strap for controlling a dog'),
    ],
    vocab_talk=[
        'What animals occur naturally where you live? Which are you most likely to see?',
        'Describe one specific behaviour you have noticed in an animal. What do you think it '
        'denotes?',
        'Do people in your country cooperate to protect wildlife? In what way?',
        'What is the primary threat to wildlife in your region?',
    ],
    again=['transmit', 'signal', 'adapt', 'vary', 'significant', 'survive', 'evident', 'identify'],

    r1=dict(
        sub='How animals communicate',
        skill=('Biology mixes long nouns with simple verbs',
               ['-ation, -ism, -ity are the long endings; -s, -ed, -ing the short ones.',
                'A gap after a plural subject is often a verb with no -s at all.',
                'Count the dashes before you choose between -ion and -ation.',
                'Read it back; biology writing repeats its key nouns deliberately.']),
        guided_text='An animal signal is not a word. A bird’s alarm call does not mean hawk; it '
                    'means something clos-- to danger above. The difference matt---, because a '
                    'word can be used to li- and most signals cannot. A signal that can be fak-- '
                    'cheaply stops being believed, and then it stops being us--.',
        guided_hint='1  clos---  →  er  (closer)',
        guided=['er', 'ers', 'e', 'ed', 'ed'],
        exam_text='Why should an animal tell the truth? A signal is only worth attending to if '
                  'it is reli----, and the obvious strategy for any individual is to exagg-----. '
                  'Biologists have spent decades on this problem and the answer is that honest '
                  'signals are usually expen----. A stag’s roar is produced by a structure that '
                  'only a large animal can main----, so a small stag cannot simply roar louder. '
                  'The cost is what makes the signal belie-----. Where a signal is ch--- to '
                  'produce, cheating spreads, and the signal stops carrying inform-----: this is '
                  'why so many displays involve something physically demand---, from the weight '
                  'of a tail to the length of a s---. The principle has a name, the handicap '
                  'principle, and it predicts something odd but correct: the mo-- useless a '
                  'display looks, the more trustworthy it probably is.',
        exam=['able', 'erate', 'sive', 'tain', 'vable', 'eap', 'ation', 'ing', 'ong', 're'],
    ),

    r2=dict(
        sub='A volunteering scheme',
        skill=('Find the commitment inside the invitation',
               ['A volunteering notice sells the experience and buries the commitment. Find '
                'the commitment.',
                'Training, minimum hours and cancellation rules are the usual questions.',
                'A post by a volunteer gives the experience; the notice gives the rules.',
                'Dates in a post may be more recent than the notice.']),
        docs=[
            ('notice', 'Ashmere Wildlife Reserve · student volunteers, spring', [
                '# What volunteers do',
                '* Nest-box checks (February to May), in pairs, about three hours a session.',
                '* Visitor hide duty: answering questions, keeping the sightings log.',
                '* Winter feeding, which continues until the first week of March only.',
                '# Before you start',
                '* One training session, two hours, compulsory. Dates in January.',
                '* A minimum of six sessions over the season. Fewer than six and we cannot '
                'justify the training.',
                '# Practical',
                '* Boots and waterproofs are essential; binoculars can be borrowed.',
                '* Cancel at least 24 hours ahead. The rota is built round pairs and a single '
                'volunteer cannot do a nest-box round alone.',
            ], 'notice'),
            ('social', 'Danny Mbeki', '@danny_ashmere', [
                'Six months at Ashmere and I want to say the thing nobody puts in the leaflet.',
                '',
                'It is cold, it is early, and roughly one session in four nothing happens at',
                'all. You walk four kilometres and write "no change" in nineteen boxes.',
                '',
                'And then in April you open box 7 and there are five chicks in it, and you',
                'realise you have been watching the same box since February and you know',
                'exactly how they got there. That is not a feeling you can get in one visit.',
                '',
                'Training dates are up. Go to the one on the 14th — same session, smaller group.',
            ], 'm'),
        ],
        guided=[
            ('How long is a nest-box session?',
             ('Two hours', 'About three hours', 'Four hours', 'A whole day'), 1,
             'In pairs, about three hours a session, February to May.'),
            ('Which activity stops in early March?',
             ('Nest-box checks', 'Hide duty', 'Winter feeding', 'Training'), 2,
             'Winter feeding continues until the first week of March only.'),
            ('What is compulsory before starting?',
             ('Six sessions', 'A training session', 'Owning binoculars',
              'A medical check'), 1,
             'One training session, two hours, compulsory, with dates in January.'),
            ('What is the minimum commitment?',
             ('Three sessions', 'Four sessions', 'Six sessions', 'Ten sessions'), 2,
             'Fewer than six and we cannot justify the training.'),
        ],
        exam=[
            ('What is Danny’s main point?',
             ('The work is more rewarding than it looks at first',
              'The reserve needs more volunteers', 'The training is too long',
              'The leaflet is inaccurate'), 0,
             'He describes the dull part honestly and then says what makes it worth it.'),
            ('How often does nothing happen, according to Danny?',
             ('Every session', 'About one session in four', 'Only in February',
              'Almost never'), 1,
             'You walk four kilometres and write no change in nineteen boxes.'),
            ('Why does Danny mention box 7?',
             ('It is the largest box', 'To show what continuity gives you',
              'To explain the sightings log', 'To warn about disturbing chicks'), 1,
             'That is not a feeling you can get in one visit.'),
            ('What does Danny recommend?',
             ('Bringing your own binoculars', 'The training session on the 14th',
              'Starting in April', 'Doing hide duty first'), 1,
             'Same session, smaller group.'),
            ('Why must a cancellation be made 24 hours ahead?',
             ('The log must be updated', 'A nest-box round cannot be done alone',
              'The reserve closes early', 'Training is arranged weekly'), 1,
             'The rota is built round pairs.'),
            ('What can be inferred about the equipment?',
             ('Everything is provided', 'Volunteers must buy boots and waterproofs',
              'Binoculars must be bought', 'Nothing is needed in spring'), 1,
             'Boots and waterproofs are essential, while binoculars can be borrowed — the '
             'contrast is the point.'),
        ],
    ),

    r3=dict(
        sub='Migration',
        title='How Birds Know When and Where to Go',
        words=280,
        paras=[
            'A young cuckoo has never met its parents, never seen the route and never travelled '
            'anywhere. In its first autumn it flies from northern Europe to central Africa, '
            'alone, and arrives. Whatever it is using, it is not experience, and working out '
            'what it is has taken a century of experiments that are mostly ingenious and '
            'occasionally cruel.',
            'The timing turns out to be the easy part. Birds respond to day length, which is the '
            'one environmental signal that is identical every year and cannot be disturbed by '
            'weather. Keep a bird under artificial light that shortens at the wrong time of year '
            'and it becomes restless at the wrong time of year, in a cage, facing the direction '
            'it would have flown. That restlessness, called by its German name '
            'Zugunruhe, is how a great deal of migration research is done without anybody '
            'leaving the laboratory.',
            'Direction is harder, because birds use at least three systems and switch between '
            'them. They take a compass bearing from the sun, correcting for the time of day; '
            'they read the pattern of stars around the pole, which they learn as nestlings by '
            'watching the sky rotate; and they sense the Earth’s magnetic field, apparently '
            'through a chemical reaction in the eye that is sensitive to it. A bird deprived of '
            'one system uses another. This redundancy is probably the point: a navigation method '
            'that fails on a cloudy night would not have survived a single generation.',
        ],
        skill=('Follow how something is known',
               ['Some passages are about method rather than fact. Note how each claim was '
                'established.',
                'An experiment described in detail will be tested.',
                'A technical term introduced with its definition is always asked about.',
                'The final sentence usually explains why the system is as it is.']),
        guided=[
            ('What is the passage mainly about?',
             ('Why cuckoos migrate alone', 'How birds navigate and how that was discovered',
              'The effect of weather on migration', 'How birds learn from their parents'), 1,
             'Timing and direction, each with the evidence that established it.'),
            ('What does the young cuckoo NOT have?',
             ('A route', 'Experience', 'A destination', 'A compass sense'), 1,
             'Whatever it is using, it is not experience.'),
            ('Why do birds use day length for timing?',
             ('It is easy to measure', 'It is identical every year and unaffected by weather',
              'It changes fastest in spring', 'It is visible at night'), 1,
             'The one environmental signal that cannot be disturbed by weather.'),
            ('What is Zugunruhe?',
             ('A migration route', 'Restlessness at migration time',
              'A magnetic sense', 'A type of cage'), 1,
             'The passage defines it in the sentence that names it.'),
        ],
        exam=[
            ('Why is Zugunruhe useful to researchers?',
             ('It can be measured without leaving the laboratory',
              'It only occurs in cuckoos', 'It shows how far a bird will fly',
              'It can be switched off'), 0,
             'A great deal of migration research is done without anybody leaving the laboratory.'),
            ('How do birds learn the star pattern?',
             ('From their parents', 'By watching the sky rotate as nestlings',
              'By instinct alone', 'From the magnetic field'), 1,
             'Which is why it has to be learned rather than inherited.'),
            ('What correction does the sun compass require?',
             ('For cloud', 'For the time of day', 'For latitude',
              'For the season'), 1,
             'The sun moves, so a bearing from it is useless without a clock.'),
            ('All of the following are navigation systems mentioned EXCEPT:',
             ('the sun', 'the stars', 'the magnetic field', 'landmarks on the ground'), 3,
             'Three systems are named and landmarks is not among them.'),
            ('What does the author suggest is the point of having three systems?',
             ('Birds are inefficient', 'A single system would fail on a cloudy night',
              'Different species use different ones', 'It makes research easier'), 1,
             'A navigation method that fails on a cloudy night would not have survived a single '
             'generation.'),
            ('The word "redundancy" in paragraph 3 is closest in meaning to',
             ('having more than one system for the same job', 'being unnecessary',
              'losing a system', 'repeating a journey'), 0,
             'A bird deprived of one system uses another, which is what the word names.'),
            ('Which best states the main idea of paragraph 2?',
             ('Day length is an unusually reliable signal, and it can be manipulated in a '
              'laboratory', 'Birds dislike artificial light',
              'Timing matters more than direction', 'German researchers led the field'), 0,
             'Both halves of the paragraph serve that claim.'),
        ],
    ),

    l1=dict(
        sub='A volunteering scheme',
        caption='Two students work out a volunteering rota',
        skill=('Follow a schedule being built',
               ['Days, times and numbers of sessions are all testable. Note each.',
                'An obstacle is usually raised and then solved. Note both.',
                'A fact about the scheme mentioned in passing is often a question.',
                'The agreed plan is in the last two lines.']),
        warm=[
            ('Man: Have you done the training yet?',
             ('Two hours.', 'On the fourteenth.', 'Six sessions.', 'Yes, in January.'), 3,
             'A yes/no question about an action, answered with when.'),
            ('Woman: How many sessions do we have to do?',
             ('At least six.', 'About three hours.', 'In pairs.',
              'Yes, quite a lot.'), 0,
             'How many wants a number of sessions.'),
            ('Man: Can we do them together?',
             ('They are in pairs anyway.', 'Four kilometres.',
              'On the fourteenth.', 'Yes, three hours.'), 0,
             'A can-we question about arrangement, answered with the rule that makes it easy.'),
        ],
        script=[
            ('Woman', 'Six sessions between February and May. That is not many.'),
            ('Man', 'It is not many until you look at when they are. Nest-box rounds start at '
                    'seven.'),
            ('Woman', 'Seven in the morning?'),
            ('Man', 'Birds. And they have to be done before the reserve opens, so it is seven '
                    'to ten.'),
            ('Woman', 'I have a nine o’clock on Tuesdays and Thursdays.'),
            ('Man', 'So Monday, Wednesday or the weekend. That is still plenty for six over '
                    'four months.'),
            ('Woman', 'What about hide duty? That is not at seven.'),
            ('Man', 'No, that is eleven to three, but it only counts if you have done the '
                    'training, and the training in January is on a Tuesday.'),
            ('Woman', 'Both of them?'),
            ('Man', 'There are three dates. The fourteenth is a Saturday.'),
            ('Woman', 'Then that one. And we do the rounds together, since they are in pairs '
                      'anyway, which solves the alone problem as well.'),
            ('Man', 'I will put us both down for the fourteenth tonight.'),
        ],
        items=[
            ('Why are nest-box rounds early?',
             ('The reserve is quieter', 'They must be done before the reserve opens',
              'Volunteers prefer mornings', 'The light is better'), 1,
             'And the man adds the one-word reason first: birds.'),
            ('When does the woman have lectures?',
             ('Monday and Wednesday', 'Tuesday and Thursday', 'Every morning',
              'At the weekend'), 1,
             'A nine o’clock on Tuesdays and Thursdays.'),
            ('What are the hours of hide duty?',
             ('07.00–10.00', '09.00–12.00', '11.00–15.00', '14.00–17.00'), 2,
             'The man gives it as the alternative to the seven o’clock start.'),
            ('What is the problem with the January training?',
             ('It is full', 'Two of the three dates are on a Tuesday',
              'It lasts a whole day', 'It is at seven in the morning'), 1,
             'Which clashes with her nine o’clock, so she takes the Saturday date.'),
            ('Which training date do they choose?',
             ('The seventh', 'The fourteenth', 'The twenty-first', 'They have not decided'), 1,
             'The fourteenth is a Saturday.'),
            ('Why does doing the rounds together help?',
             ('It is faster', 'Rounds are in pairs, so it solves the cancellation problem',
              'They share transport', 'Only pairs are trained'), 1,
             'Which solves the alone problem as well.'),
        ],
    ),

    l2=dict(
        sub='A volunteering scheme',
        caption='An announcement about volunteer training',
        poster=['Training now compulsory before any session',
                'Three January dates — one is a Saturday',
                'Minimum six sessions a season'],
        skill=('Hear what has become compulsory',
               ['A rule that used to be optional is prime question material.',
                'Note the reason, which is usually given once and briefly.',
                'A minimum is tested, and so is what happens if you fall short.',
                'The last instruction tells you what to do now.']),
        warm=[
            ('Woman: Is the training compulsory now?',
             ('Three dates.', 'Yes, from this year.', 'Two hours.',
              'On the fourteenth.'), 1,
             'A yes/no question about a rule, answered with the change.'),
            ('Man: What happens if I only do four sessions?',
             ('Six is the minimum.', 'We would rather you did not start.',
              'In pairs.', 'Yes, four is fine.'), 1,
             'A what-happens-if question wants the consequence, and this one states it plainly.'),
            ('Woman: Which date is at the weekend?',
             ('The fourteenth.', 'In January.', 'Two hours.', 'Yes, one of them.'), 0,
             'Which wants the specific date.'),
        ],
        script=[
            ('Woman', 'Three things about volunteering at Ashmere this spring. First, training '
                      'is now compulsory before any session, including hide duty. It was '
                      'optional last year and we had two incidents where volunteers moved nest '
                      'boxes that were in use, which is the sort of thing that is obvious once '
                      'somebody has told you and not before. Two hours, three dates in January: '
                      'the seventh, the fourteenth and the twenty-first. The fourteenth is a '
                      'Saturday and the other two are Tuesdays, so if you have morning lectures, '
                      'take the Saturday. Second, the minimum is six sessions across the season, '
                      'February to May. I know that sounds like a lot in May and it is one '
                      'session a fortnight. If you cannot manage six, please do not take a '
                      'training place, because somebody else will use it. Third, cancellations. '
                      'Twenty-four hours, always. The rounds are done in pairs and a single '
                      'volunteer cannot do one alone, so a late cancellation does not cost us '
                      'one person. It costs us two.'),
        ],
        items=[
            ('What has changed this year?',
             ('The number of sessions', 'Training is now compulsory',
              'The season is longer', 'Rounds are done alone'), 1,
             'It was optional last year.'),
            ('Why was the rule changed?',
             ('Too few volunteers came', 'Nest boxes in use were moved',
              'The reserve expanded', 'Insurance required it'), 1,
             'Two incidents, and the speaker explains why it is obvious only once told.'),
            ('Which training date suits a student with morning lectures?',
             ('The seventh', 'The fourteenth', 'The twenty-first', 'None of them'), 1,
             'The fourteenth is a Saturday and the other two are Tuesdays.'),
            ('What does the speaker ask students who cannot do six sessions to do?',
             ('Do as many as they can', 'Not take a training place',
              'Do hide duty only', 'Start in March'), 1,
             'Because somebody else will use it.'),
            ('Why does a late cancellation cost two people?',
             ('Two volunteers are trained together', 'A round cannot be done alone',
              'The rota is published weekly', 'Two sessions are lost'), 1,
             'The speaker ends on exactly that point.'),
        ],
    ),

    l3=dict(
        sub='How animals communicate',
        caption='A talk on learned and inherited behaviour',
        board=['Inherited: present without any example',
               'Learned: absent if the example is removed',
               'Cross-fostering: the usual test',
               'Most behaviour is both'],
        skill=('Follow a test, not a definition',
               ['When a talk names an experimental method, it will apply it to cases.',
                'Note what each case shows: inherited, learned, or both.',
                'A result that surprises the speaker is always tested.',
                'The last sentence usually says what the distinction is good for.']),
        warm=[
            ('Man: What is cross-fostering?',
             ('Raising a young animal with a different species.', 'In the second study.',
              'About two weeks.', 'Yes, it is common.'), 0,
             'A what-is question wants the definition.'),
            ('Woman: Is birdsong learned or inherited?',
             ('Both, apparently.', 'From the parents.', 'In the spring.',
              'Yes, it is.'), 0,
             'A learned-or-inherited question is answered by choosing, or by refusing the '
             'choice.'),
            ('Man: Could you repeat the sparrow example?',
             ('It is on the board.', 'Of course — the one raised in silence?',
              'About forty songs.', 'Yes, I could.'), 1,
             'A request to repeat is answered by agreeing and identifying which.'),
        ],
        script=[
            ('Professor', 'How do you tell whether a behaviour is inherited or learned? The '
                          'question sounds philosophical and it is actually experimental. The '
                          'standard method is cross-fostering: you raise a young animal with '
                          'parents of a different species, or in isolation, and you see what it '
                          'does anyway. Take birdsong. A white-crowned sparrow raised in silence '
                          'produces a song, which tells you something is inherited. But the song '
                          'is wrong — simplified, in the wrong order, and no female responds to '
                          'it. Raise the same bird with a recording of its own species and it '
                          'produces the proper song. Raise it with a recording of a different '
                          'species and, interestingly, it ignores it and produces the bad version '
                          'again. So there are three findings in one experiment: the capacity is '
                          'inherited, the detail is learned, and what can be learned is '
                          'constrained in advance. That last one is the part people miss. A '
                          'learning system is not a blank page. It is a system that is '
                          'predisposed to learn certain things and almost unable to learn others, '
                          'and that predisposition is itself inherited. Which is why asking '
                          'whether a behaviour is learned or inherited is usually the wrong '
                          'question. Ask which part is which.'),
        ],
        items=[
            ('What is the main idea of the talk?',
             ('Birdsong is inherited', 'Learned and inherited are not alternatives but parts of '
              'the same behaviour', 'Cross-fostering is unreliable',
              'Sparrows are unusual'), 1,
             'The talk ends by rejecting the either/or question outright.'),
            ('What is cross-fostering?',
             ('Raising an animal with another species or in isolation',
              'Recording an animal’s song', 'Releasing an animal into the wild',
              'Breeding two species together'), 0,
             'The speaker defines it as the standard method.'),
            ('What does a sparrow raised in silence produce?',
             ('No song at all', 'A simplified, incorrect song', 'The song of another species',
              'The correct song'), 1,
             'Simplified, in the wrong order, and no female responds to it.'),
            ('What happens when it hears another species’ song?',
             ('It copies it', 'It ignores it and sings the bad version',
              'It stops singing', 'It mixes the two'), 1,
             'Which is the finding the speaker calls interesting.'),
            ('What is the third finding?',
             ('The capacity is inherited', 'The detail is learned',
              'What can be learned is limited in advance', 'Females prefer complex songs'), 2,
             'And the speaker says that last one is the part people miss.'),
            ('What question does the speaker say we should ask instead?',
             ('Is it learned or inherited?', 'Which part is which?',
              'How long does learning take?', 'Which species learns fastest?'), 1,
             'The final sentence states it.'),
        ],
    ),

    sp=[
        dict(sub='How animals communicate', focus='purpose clauses',
             skill=('Do not pause before to',
                    ['in order to and so that run on from the main clause. One breath.',
                     'so that takes a subject and a verb: so that the chicks can feed.',
                     'to + infinitive needs no subject: to attract a mate.',
                     'Finish the clause. A purpose left hanging scores badly.']),
             repeat=['Birds sing to attract a mate.',
                     'The boxes are checked in order to record what is nesting.',
                     'We work in pairs so that nobody is alone on the reserve.',
                     'The signal is expensive so that it cannot easily be faked.',
                     'Volunteers are trained in January in order to avoid disturbing nests later.',
                     'A display that costs the animal something is harder to fake, which is why it is believed.',
                     'The reserve asks for twenty-four hours’ notice so that a replacement can be found before the round begins.'],
             theme='animals where you live',
             qs=['First, are there wild animals near where you live?',
                 'People feel very differently about wildlife nearby. How do you feel about it, '
                 'and why?',
                 'Some people argue that zoos can no longer be justified. Do you agree? Why or '
                 'why not?',
                 'Finally, should governments protect habitats even when that stops building? '
                 'Why or why not?'],
             model=[(2, 'Mostly pleased, and slightly guilty, because the only reason there are '
                        'foxes in my street is that we built over everywhere else.'),
                    (3, 'Partly. A zoo that breeds species that cannot survive outside it is '
                        'doing something a photograph cannot, and most zoos are not that zoo.')],
             selfcheck=['I ran purpose clauses on without a pause',
                        'I used so that with a subject and a verb',
                        'I gave a reason after every opinion']),
        dict(sub='A volunteering scheme', focus='explaining why you do something',
             skill=('Give the reason, not the description',
                    ['Because I wanted to… / The reason I do it is… / What made me start was…',
                     'One reason, developed, beats three listed.',
                     'A specific moment is more convincing than a general feeling.',
                     'End on the reason, not on an apology for it.']),
             repeat=['I started because a friend asked me.',
                     'The reason I keep going is the continuity.',
                     'I do it in order to spend some time outdoors every week.',
                     'What made me stay was opening box seven in April.',
                     'We work in pairs so that the round can always be completed.',
                     'I volunteered because I wanted something in my week that was not reading.',
                     'The reason I would recommend it is not the animals but the fact that you see the same place change over four months.'],
             theme='volunteering and giving time',
             qs=['To start, have you ever done any volunteering?',
                 'People volunteer for very different reasons. What would make you volunteer, '
                 'and why?',
                 'Some people argue that volunteering should count towards a degree. Do you '
                 'agree? Why or why not?',
                 'Last question. Is it better for a university to organise volunteering or to '
                 'leave it to students? Why?'],
             model=[(2, 'Something outdoors and regular, I think. The reason is that I would '
                        'actually turn up, and a good intention that happens once is not worth '
                        'much.'),
                    (3, 'I am cautious about it. Once it counts, people do it for the credit, '
                        'and the organisations end up training volunteers who leave in April.')],
             selfcheck=['I gave one reason and developed it',
                        'I used a specific moment rather than a general feeling',
                        'I finished on the reason']),
        dict(sub='Migration', focus='academic register',
             skill=('Say how something is known',
                    ['Use the unit’s words: investigate, anticipate, occur, crucial, approach.',
                     'Name the method, then the finding: when birds are raised in isolation,…',
                     'Distinguish what is shown from what is inferred.',
                     'Mark yourself against the three statements below.']),
             repeat=['Birds respond to day length.',
                     'The capacity is inherited and the detail is learned.',
                     'Researchers investigate this by raising birds in isolation.',
                     'Restlessness in a cage indicates the direction the bird would have flown.',
                     'A bird deprived of one navigation system appears to use another.',
                     'What a learning system can acquire is constrained in advance, and that constraint is itself inherited.',
                     'A navigation method that failed on a cloudy night would not have survived a single generation, which is probably why there are three.'],
             theme='how we know things about nature',
             qs=['First, did you learn any biology that changed how you see things?',
                 'People find some scientific claims easier to believe than others. Which do '
                 'you find hardest, and why?',
                 'Some people argue that experiments on animals can never be justified. Do you '
                 'agree? Why or why not?',
                 'Finally, should scientific findings be explained to the public by scientists '
                 'or by journalists? Why?'],
             model=[(3, 'I think it depends on the experiment and on the alternative, which is '
                        'an uncomfortable position but the only one I can defend.'),
                    (4, 'By both, and separately. A scientist knows what was actually shown; a '
                        'journalist knows what a reader will take away, and those are different '
                        'skills.')],
             selfcheck=['I used at least three academic words from this unit',
                        'I named the method before the finding',
                        'I distinguished shown from inferred']),
    ],

    w1=dict(
        sub='How animals communicate',
        skill=('Purpose and reason questions',
               ['Why do they…? asks for either. What is it for? asks for purpose only.',
                'An embedded version keeps statement order: do you know what it is for.',
                'So that needs a subject and a verb; to needs neither.',
                'Use every tile exactly once.']),
        guided=[
            ('Birds sing in order to attract a mate.',
             ['do', 'why', 'birds', 'sing'],
             'Why do birds sing?'),
            ('The display is expensive so that it cannot be faked.',
             ['know', 'you', 'do', 'what', 'it', 'is', 'for'],
             'Do you know what it is for?'),
            ('Rounds are done in pairs for safety.',
             ['are', 'why', 'rounds', 'done', 'in', 'pairs'],
             'Why are rounds done in pairs?'),
        ],
        exam=[
            ('Training is compulsory because boxes were moved.',
             ['tell', 'can', 'you', 'me', 'why', 'training', 'is', 'compulsory'],
             'Can you tell me why training is compulsory?'),
            ('The minimum is six sessions a season.',
             ['sessions', 'how', 'many', 'are', 'required'],
             'How many sessions are required?'),
            ('Cancellations must be made 24 hours ahead.',
             ['notice', 'how', 'much', 'do', 'I', 'need', 'to', 'give'],
             'How much notice do I need to give?'),
            ('Birds use day length because it is unaffected by weather.',
             ['know', 'do', 'you', 'why', 'they', 'use', 'day', 'length'],
             'Do you know why they use day length?'),
            ('The volunteer who checked box 7 found five chicks.',
             ['the', 'volunteer', 'who', 'checked', 'box', '7', 'found', 'five', 'chicks'],
             'The volunteer who checked box 7 found five chicks.'),
            ('The fourteenth is the only Saturday date.',
             ['date', 'which', 'is', 'at', 'the', 'weekend'],
             'Which date is at the weekend?'),
            ('A sparrow raised in silence sings an incorrect song.',
             ['know', 'do', 'you', 'what', 'happens', 'in', 'silence'],
             'Do you know what happens in silence?'),
        ],
    ),
    w2=dict(
        sub='A volunteering scheme',
        to='volunteers@ashmere.org.uk',
        date='21/02/2028',
        subject='Nest-box round, 4 March — asking to swap',
        scenario=[
            'You are signed up for a nest-box round on Saturday 4 March at seven, in a pair with '
            'another volunteer. Your department has just scheduled a compulsory field trip that '
            'weekend. You know that rounds are done in pairs and that a late cancellation costs '
            'the reserve two people rather than one.',
            'Write an email to the reserve.',
        ],
        bullets=['Explain the clash and give plenty of notice.',
                 'Offer a solution rather than only a problem.',
                 'Confirm your remaining commitment.',
                 ],
        skill=('Cancel in a way that does not cost anybody',
               ['A cancellation that comes with a replacement is barely a cancellation.',
                'Show you understand the cost you are imposing.',
                'Confirm what you are still doing, so the record is clear.',
                'Seven minutes. 110–140 words.']),
        model=[
            'Dear Ashmere volunteers team,',
            'I am down for the nest-box round on Saturday 4 March at seven, paired with Priya '
            'Anand. My department has just scheduled a compulsory field trip that weekend, so I '
            'cannot come. I am telling you now rather than in March because I know a round '
            'cannot be done by one person.',
            'I have already asked Daniel Mbeki, who has done the training and is free that '
            'morning, and he is willing to take my place with Priya if you are happy with that. '
            'He is copied in to this email.',
            'This was going to be my third session. I am still down for 18 March and 1 April, '
            'and I will add two more dates in April to reach six.',
            'Thank you,',
            'Leyla Haddad',
        ],
        notes=['The notice is nearly two weeks, and the writer says why that matters in the '
               'reserve’s own terms.',
               'A named, trained replacement who is already willing turns a problem into an '
               'administrative note.',
               'Copying the replacement in removes one more email from the coordinator’s day.',
               'The last paragraph confirms the six-session commitment, which is the thing the '
               'scheme actually cares about.'],
    ),
    w3=dict(
        sub='Migration',
        prof='Dr Anand',
        question='Migratory birds depend on a chain of stopover sites, so protecting one '
                 'country’s wetland is useless if the next country drains theirs. Should '
                 'wealthy countries pay to protect habitats in poorer countries along the same '
                 'route? Why or why not?',
        posts=[('Mei', 'w',
                'Yes, and not as charity. A wetland in one country and a wetland two thousand '
                'kilometres away are parts of one piece of infrastructure. If you have paid for '
                'half a bridge you have paid for nothing, and the country that benefits from the '
                'birds arriving has an obvious interest in the other half standing up.'),
               ('Pierre', 'm',
                'The argument is sound and the practice is where it fails. Money of this kind '
                'usually arrives as a project with a five-year term, and a wetland needs '
                'protecting for a century. When the project ends the staff leave, and the '
                'drainage that was postponed happens anyway, five years later and with worse '
                'relations.')],
        skill=('Attack the implementation, not the principle',
               ['Pierre agrees with the principle. His objection is about the shape of the '
                'funding.',
                'A good post answers the shape rather than restating the principle.',
                'Use the passage’s idea of redundancy if it helps.',
                'At least 100 words in ten minutes.']),
        starters=['Mei has the principle and Pierre has the problem with the instrument:…',
                  'The bridge image is right and it cuts both ways, because…',
                  'What a five-year project cannot do is…',
                  'So I would fund… rather than…'],
        model=[
            'Mei has the principle and Pierre has the problem with the instrument, and the '
            'instrument is where this is actually decided.',
            'The bridge image is right, and it cuts both ways. If half a bridge is worth nothing, '
            'then a bridge funded for five years is also worth nothing, because the river is '
            'still there in year six. Pierre is describing exactly that: the drainage is '
            'postponed rather than prevented, and the relationship is worse afterwards.',
            'What a five-year project cannot do is create a reason for the other country to want '
            'the wetland in year thirty. So I would not fund projects at all. I would fund '
            'something that keeps paying — a share of the tourism, a long endowment managed '
            'locally, a treaty obligation with money attached — and I would accept that this is '
            'slower and much less photogenic than a five-year programme with a ribbon at the '
            'start.',
        ],
        model_words=166,
    ),

    gram=dict(
        title='Purpose and reason',
        headers=['Form', 'Example'],
        rows=[
            ['to + infinitive (purpose)', 'Birds sing to attract a mate.'],
            ['in order to / so as to (formal)', 'Boxes are checked in order to record nesting.'],
            ['so that + subject + verb', 'We work in pairs so that nobody is alone.'],
            ['for + noun', 'The hide is used for watching birds.'],
            ['for + -ing (the function of a thing)', 'A nest box is for nesting in.'],
            ['because + clause (reason)', 'Training is compulsory because boxes were moved.'],
            ['because of + noun', 'The round was cancelled because of the weather.'],
        ],
        notes=[
            'Purpose looks forward to an intended result; reason looks back to a cause. Why '
            'can ask for either, so the answer must choose.',
            'Never use for + infinitive to express purpose. Not *for to attract a mate* and not '
            '*for attract a mate*.',
            'Because takes a clause; because of takes a noun. Because of the weather, not '
            '*because the weather*.',
        ],
        watch='So that needs a subject: so that nobody is alone. So on its own means therefore '
              'and introduces a result, not a purpose: it rained, so we stopped.',
        ex=[
            ('Complete with to, in order to, so that, for, because or because of.',
             ['Birds sing __________ attract a mate.',
              'We work in pairs __________ nobody is alone.',
              'The hide is used __________ watching birds.',
              'The round was cancelled __________ the weather.',
              'Training is compulsory __________ two boxes were moved.',
              'Boxes are numbered __________ make the log easier to keep.'],
             ['to', 'so that', 'for', 'because of', 'because', 'to']),
            ('Say whether each sentence gives a purpose or a reason.',
             ['The signal is expensive so that it cannot be faked.',
              'The session was cancelled because of the snow.',
              'Volunteers are trained in January to avoid disturbing nests.',
              'He stopped volunteering because he moved away.'],
             ['purpose', 'reason', 'purpose', 'reason']),
            ('Correct the mistake in each sentence.',
             ['Birds sing for to attract a mate.',
              'We work in pairs so that is nobody alone.',
              'The round was cancelled because the weather.'],
             ['Birds sing to attract a mate.', 'We work in pairs so that nobody is alone.',
              'The round was cancelled because of the weather.']),
        ],
        bas='Build a Sentence asks these as why questions and as embedded ones: Why are rounds '
            'done in pairs? Do you know what it is for? The second keeps statement order after '
            'know.',
    ),

    rev=dict(
        vocab=[
            ('to be a sign of; to mean', 'denote'),
            ('to behave according to a rule or pattern', 'conform'),
            ('to tell the difference between', 'discriminate'),
            ('lower in rank', 'subordinate'),
            ('to work together', 'cooperate'),
            ('extremely important', 'crucial'),
            ('to examine in order to find the truth', 'investigate'),
            ('to expect and prepare for', 'anticipate'),
            ('fully grown or developed', 'mature'),
            ('one part or feature of something', 'aspect'),
            ('a record of animals seen and when', 'sightings log'),
            ('a small shelter for watching animals unseen', 'hide'),
        ],
        gram=[
            ('Birds sing __________ attract a mate.', 'to'),
            ('We work in pairs __________ nobody is alone.', 'so that'),
            ('The hide is used __________ watching birds.', 'for'),
            ('The round was cancelled __________ the weather.', 'because of'),
            ('Training is compulsory __________ two boxes were moved.', 'because'),
            ('Boxes are numbered __________ (order) make the log easier.', 'in order to'),
            ('The signal is costly __________ it cannot be faked.', 'so that'),
            ('He stopped volunteering __________ he moved away.', 'because'),
        ],
        mini=[
            ('According to the passage on page 138, birds use day length because',
             ('it is easy to measure', 'it is the same every year and unaffected by weather',
              'it changes fastest in spring', 'it can be seen at night'), 1,
             'That reliability is exactly why it works as a timing signal.'),
            ('In the talk, a sparrow raised in silence',
             ('produces no song', 'produces an incorrect song',
              'copies another species', 'learns from a recording'), 1,
             'Which shows that the capacity is inherited and the detail is learned.'),
            ('Which sentence is correct?',
             ('Birds sing for to attract a mate.', 'We work in pairs so that nobody is alone.',
              'The round was cancelled because the weather.',
              'Boxes are numbered for make the log easier.'), 1,
             'So that takes a subject and a verb; for never takes an infinitive.'),
            ('A volunteer who cancels late costs the reserve',
             ('one session', 'one person', 'two people', 'nothing'), 2,
             'Because a nest-box round cannot be done alone.'),
            ('In Listening, an announcement usually exists because',
             ('a routine event is happening', 'something has changed',
              'a deadline has passed', 'a new term has started'), 1,
             'Which is why the change and its reason are what get tested.'),
            ('A "why does the speaker mention" question asks for',
             ('the fact itself', 'the purpose of the example', 'a definition',
              'a number'), 1,
             'The example is there to do a job; the question asks what the job is.'),
        ],
    ),
    tip='A "why does the speaker mention X" question is not asking about X. It is asking what '
        'job X is doing in the argument — introducing a concept, giving evidence, raising an '
        'objection. Answer the job, not the fact.',
)
