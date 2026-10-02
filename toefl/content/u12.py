# -*- coding: utf-8 -*-
"""Unit 12 · Public Health and Medicine."""

UNIT = dict(
    n=12, vol=2, title='Public Health and Medicine',
    icons=('cross_med', 'flask', 'city'),
    subs=('How a vaccine works', 'The campus health centre', 'Clean water and cities'),
    grammar='must, have to and should',
    field='prevention, treatment, access',
    opener_line='Health texts are full of obligation: you must, you should, you do not have to. '
                'This unit sorts the three out, because they are not the same and the test '
                'knows it.',

    candos=[
        'complete word endings in a text about how the body is protected',
        'read a clinic notice and a booking email and find the rule that applies to me',
        'follow a passage that explains why one intervention worked more than another',
        'understand someone sorting out a booking that has gone wrong',
        'give and ask for advice out loud without preparing',
        'write an email rearranging an appointment, and a post about priorities',
    ],

    acad=[
        ('access', 'the chance or right to use something'),
        ('medical', 'connected with medicine and illness'),
        ('inhibit', 'to slow something down or prevent it'),
        ('ensure', 'to make certain that something happens'),
        ('survive', 'to continue to live'),
        ('injure', 'to hurt a part of the body'),
        ('welfare', 'the health and comfort of people'),
        ('aid', 'help, especially to people in need'),
        ('assist', 'to help'),
        ('benefit', 'an advantage or good effect'),
        ('require', 'to need, or to demand officially'),
        ('administrate', 'to manage or organise something officially'),
        ('obtain', 'to get something'),
        ('restore', 'to bring something back to how it was'),
        ('intervene', 'to act in order to change what is happening'),
        ('infrastructure', 'the basic systems a place needs, such as water and roads'),
        ('incidence', 'how often something happens in a population'),
        ('capable', 'able to do something'),
        ('adequate', 'enough for the purpose'),
        ('annual', 'happening once a year'),
        ('guideline', 'official advice about how to do something'),
        ('comprehensive', 'including everything needed'),
        ('voluntary', 'done by choice, not because you must'),
        ('promote', 'to encourage something to grow or happen'),
    ],
    campus=[
        ('health centre', 'a place on campus where you see a nurse or doctor'),
        ('appointment', 'an arranged time to see someone'),
        ('receptionist', 'the person who greets you and books appointments'),
        ('prescription', 'a written order for medicine'),
        ('waiting room', 'the room where you wait to be seen'),
        ('registration', 'putting your name officially on a list'),
        ('flu jab', 'an injection that protects against influenza'),
        ('sick note', 'a letter saying you were too ill to work'),
        ('pharmacy', 'a shop where medicines are given out'),
        ('emergency', 'a sudden situation needing immediate action'),
        ('consultation', 'a meeting with a doctor or expert'),
        ('walk-in', 'a service you can use without an appointment'),
    ],
    vocab_talk=[
        'What medical care can students obtain free where you live?',
        'Name one thing a university could do to promote student wellbeing.',
        'Is the infrastructure where you live adequate? What is missing?',
        'Should a flu jab be voluntary or required for health workers? Why?',
    ],
    again=['process', 'significant', 'require', 'impact', 'restrict', 'inhibit', 'policy', 'regulate'],

    r1=dict(
        sub='How a vaccine works',
        skill=('Medical nouns have predictable endings',
               ['-ion, -ity, -ism and -ance are the commonest noun endings in this field.',
                'A gap after the or a finishes a noun; a gap after is or are finishes a '
                'participle.',
                'Count the dashes before choosing between -tion and -ation.',
                'Say the sentence back; this kind of prose repeats its key nouns.']),
        guided_text='A vaccine does not fight an illness. It teaches the body to recog---- one. '
                    'The immune system is sh--- a harmless piece of the virus, it builds the '
                    'right defe----, and it keeps the recipe. If the real virus arri--- years '
                    'later, the response is already r----.',
        guided_hint='1  recog----  →  nise  (recognise)',
        guided=['nise', 'own', 'nces', 'ves', 'eady'],
        exam_text='The immune system has a memory, and a vaccine is a way of writing in it '
                  'without the illness. The body is shown something harm---- that looks like '
                  'part of the virus. It respo--- as though it were under attack, produces the '
                  'right antibo----, and then, crucially, keeps a record. Years later, if the '
                  'real infec---- arrives, the response begins in hours rather than in days, and '
                  'the difference between hours and days is often the difference between a mild '
                  'illness and a serious o--. There is a second eff---, which is less obvious '
                  'and more import---. If enough people in a population are protec---, the virus '
                  'cannot find a chain of hosts and stops circul-----. That protects the people '
                  'who cannot be vaccinated at a--: newborns, and those whose immune systems are '
                  'already weak.',
        exam=['less', 'nds', 'dies', 'tion', 'ne', 'ect', 'ant', 'ted', 'ating', 'll'],
    ),

    r2=dict(
        sub='The campus health centre',
        skill=('Match the service to the situation',
               ['A health notice lists several services. Decide which one the question '
                'describes.',
                'Registered and not registered are usually different cases. Note which.',
                'A walk-in service and an appointment service have different rules. Both are '
                'tested.',
                'An email confirming a booking will contain a time, a place and something to '
                'bring.']),
        docs=[
            ('notice', 'Northgate Health Centre · services for students', [
                '# Registration',
                '* You must register before you can book anything. Registration is online and '
                'takes about ten minutes.',
                '* Registration is free and does not affect any care you receive at home.',
                '# Booking',
                '* Routine appointments: online, up to four weeks ahead.',
                '* Same-day appointments: phone at 08.00. They are usually gone by 08.20.',
                '* Walk-in clinic: Mondays and Thursdays 14.00–16.00, no appointment needed.',
                '# Please note',
                '* If you cannot attend, cancel online. Missed appointments are not charged for, '
                'but three in one year means routine booking goes by phone only.',
                '* The walk-in clinic cannot issue sick notes or repeat prescriptions.',
            ], 'web'),
            ('email', 'l.fernandes@northgate.edu', 'reception@northgatehealth.nhs.uk',
             '09/10/2026', 'Appointment confirmed — Thursday 15 October, 11.20', [
                 'Dear Ms Fernandes,',
                 '',
                 'Your appointment with Nurse Practitioner Adeola Bakare is confirmed',
                 'for Thursday 15 October at 11.20. Please arrive ten minutes early;',
                 'the self check-in screen is in the entrance hall, to your left.',
                 '',
                 'Bring a list of any medicines you currently take, including anything',
                 'bought without a prescription. You do not need to bring your student',
                 'card.',
                 '',
                 'If you cannot attend, please cancel online rather than telephoning.',
                 'The line at that time of the morning is for same-day appointments',
                 'and your call will keep somebody else waiting.',
                 '',
                 'Northgate Health Centre',
             ]),
        ],
        guided=[
            ('What must a student do before booking?',
             ('Pay a fee', 'Register online', 'Visit the walk-in clinic',
              'Bring a student card'), 1,
             'You must register before you can book anything, and it is online.'),
            ('When is the walk-in clinic open?',
             ('Every weekday', 'Mondays and Thursdays afternoons',
              'Mondays only', 'At eight in the morning'), 1,
             'Mondays and Thursdays, 14.00–16.00, with no appointment needed.'),
            ('How far ahead can a routine appointment be booked?',
             ('One week', 'Two weeks', 'Four weeks', 'Three months'), 2,
             'Up to four weeks ahead, online.'),
            ('What can the walk-in clinic NOT do?',
             ('See a student without an appointment', 'Issue a sick note',
              'Open in the afternoon', 'Treat a minor injury'), 1,
             'It cannot issue sick notes or repeat prescriptions.'),
        ],
        exam=[
            ('What should Ms Fernandes bring?',
             ('Her student card', 'A list of her medicines', 'A prescription',
              'A sick note'), 1,
             'Including anything bought without a prescription — and the card is specifically '
             'ruled out.'),
            ('Why should she cancel online rather than by phone?',
             ('The line is closed', 'The phone line is for same-day appointments',
              'Online cancellation is faster', 'The receptionist is busy'), 1,
             'Her call would keep somebody else waiting, because that line is for same-day '
             'booking.'),
            ('What happens after three missed appointments in a year?',
             ('A charge is made', 'Registration is cancelled',
              'Routine booking goes by phone only', 'The walk-in clinic must be used'), 2,
             'Missed appointments are not charged for, but three in a year changes how you book.'),
            ('Why should she arrive ten minutes early?',
             ('The clinic may be busy', 'To use the self check-in screen',
              'To register', 'To collect a prescription'), 1,
             'The email gives the screen and its location in the same sentence.'),
            ('A student wanting an appointment on the same day should',
             ('book online', 'phone at eight in the morning', 'go to the walk-in clinic',
              'email reception'), 1,
             'Same-day appointments: phone at 08.00, and they are usually gone by 08.20.'),
            ('What can be inferred about registration?',
             ('It is the main barrier to using the service', 'It costs money',
              'It replaces care at home', 'It must be renewed each year'), 0,
             'Everything else depends on it, and the notice answers the two commonest worries '
             '— cost and care at home — in the same breath.'),
        ],
    ),

    r3=dict(
        sub='Clean water and cities',
        title='Clean Water and Why Cities Got Healthier',
        words=280,
        paras=[
            'In 1850 a child born in a large European city was less likely to reach the age of '
            'five than a child born in the countryside. By 1920 that had reversed. The usual '
            'explanation is medicine, and medicine deserves some of the credit, but the dates do '
            'not fit. Most of the improvement happened before antibiotics, before most vaccines, '
            'and in several cases before anybody accepted that microbes caused disease at all.',
            'What changed first was water. Cities built reservoirs, filtration beds and separate '
            'systems for sewage, at enormous cost and usually against fierce opposition from '
            'ratepayers. The results were visible within a decade. In the cities that built '
            'them, deaths from waterborne disease fell by figures that no drug has ever matched, '
            'and deaths from diseases that have nothing to do with water fell as well — probably '
            'because a child who is not repeatedly ill grows better and survives other illnesses.',
            'The lesson has outlived its century. Public health interventions that change the '
            'environment people live in tend to work regardless of whether anybody cooperates, '
            'while interventions that require each person to act have to be sold, repeatedly, to '
            'everyone. Clean water protects a household that has never heard of a microbe. That '
            'is not an argument against medicine. It is an argument about where the first money '
            'should go in a city that has very little.',
        ],
        skill=('Watch for the argument hidden in the dates',
               ['When a passage gives a date, it is usually testing a common explanation '
                'against it.',
                'The phrase the dates do not fit is a signal: an accepted idea is about to be '
                'corrected.',
                'A result given as fell by figures no drug has matched is a comparison, and '
                'comparisons are tested.',
                'The final paragraph usually generalises. The generalisation is the main idea.']),
        guided=[
            ('What is the passage mainly about?',
             ('Why urban child mortality fell, and what deserves the credit',
              'How reservoirs are built', 'The history of antibiotics',
              'Why people opposed higher rates'), 0,
             'The usual explanation is tested against dates and replaced in paragraph 2.'),
            ('What was true of city children in 1850?',
             ('They lived longer than rural children', 'They were less likely to reach five '
              'than rural children', 'They had better medical care',
              'They were vaccinated'), 1,
             'The first sentence states it, and the second says it had reversed by 1920.'),
            ('Why does the author say the dates do not fit?',
             ('The records are unreliable', 'Most improvement came before the medicine',
              'Cities kept no statistics', 'Doctors disagreed'), 1,
             'Before antibiotics, before most vaccines, and sometimes before germ theory.'),
            ('What did cities build?',
             ('Hospitals and clinics', 'Reservoirs, filtration beds and sewers',
              'Schools', 'Wider streets'), 1,
             'Listed together in the first sentence of paragraph 2.'),
        ],
        exam=[
            ('What happened to deaths from diseases unrelated to water?',
             ('They rose', 'They stayed the same', 'They also fell',
              'They were not recorded'), 2,
             'And the author offers a reason: a child who is not repeatedly ill survives other '
             'illnesses.'),
            ('Who opposed the building projects?',
             ('Doctors', 'Ratepayers', 'Engineers', 'The national government'), 1,
             'At enormous cost and usually against fierce opposition from ratepayers.'),
            ('According to paragraph 3, what kind of intervention works without cooperation?',
             ('One that changes the environment', 'One that requires individual action',
              'One that uses new drugs', 'One that is voluntary'), 0,
             'The contrast with interventions that have to be sold repeatedly makes it explicit.'),
            ('All of the following are stated in the passage EXCEPT:',
             ('Medicine deserves some credit', 'Water came first',
              'The improvement was visible within a decade',
              'Antibiotics were the main cause'), 3,
             'The passage argues the opposite, from the dates.'),
            ('What does the author mean by "Clean water protects a household that has never '
             'heard of a microbe"?',
             ('People were ignorant in 1850', 'The benefit does not depend on understanding '
              'or consent', 'Education is unnecessary',
              'Microbes were discovered late'), 1,
             'It is the clearest statement of the paragraph’s distinction.'),
            ('What is the author’s conclusion about spending?',
             ('Medicine should be funded first', 'Environmental measures should come first '
              'where money is short', 'Both cost the same',
              'Cities should not build infrastructure'), 1,
             'The last sentence says it is an argument about where the first money should go.'),
            ('Which best states the main idea of paragraph 2?',
             ('Sewers are expensive', 'Water infrastructure produced the fall in deaths',
              'Ratepayers were short-sighted', 'Filtration was invented in the 1850s'), 1,
             'The whole paragraph links the building to the measured result.'),
        ],
    ),

    l1=dict(
        sub='The campus health centre',
        caption='A student sorts out the wrong appointment',
        skill=('Track a booking through the conversation',
               ['Dates, times and names change during a booking conversation. Note the latest '
                'version.',
                'Listen for the mistake and who made it.',
                'An alternative offered and refused is often a question.',
                'The final arrangement comes in the last two lines.']),
        warm=[
            ('Woman: Have you registered yet?',
             ('It takes ten minutes.', 'Last week, online.', 'At the health centre.',
              'Yes, it’s free.'), 1,
             'A yes/no question about an action; the answer gives when and how.'),
            ('Man: When is the walk-in clinic?',
             ('Monday and Thursday afternoons.', 'No appointment needed.',
              'At the health centre.', 'Yes, there is one.'), 0,
             'When wants days or times.'),
            ('Woman: Should I bring my student card?',
             ('It’s in my bag.', 'No — just a list of your medicines.',
              'At eleven twenty.', 'Yes, it’s free.'), 1,
             'A should-I question wants advice, and this one corrects the assumption.'),
        ],
        script=[
            ('Man', 'Hello — I’ve got an appointment at eleven twenty, but the email says '
                    'Thursday the fifteenth and today is Wednesday.'),
            ('Woman', 'Let me look. Fernandes?'),
            ('Man', 'No, Ferreira. Daniel Ferreira.'),
            ('Woman', 'Ah. There are two of you and the system has put you both on the same '
                      'slot. Yours was Wednesday — today — at eleven twenty. Hers is tomorrow.'),
            ('Man', 'So I am in the right place.'),
            ('Woman', 'You are, but the email you got was hers, which is why it says Thursday. '
                      'I am sorry about that.'),
            ('Man', 'It said to bring a list of my medicines. Does that still apply?'),
            ('Woman', 'That part is standard, yes. Did you bring one?'),
            ('Man', 'I did.'),
            ('Woman', 'Then you are fine. Take a seat — she is running about ten minutes behind. '
                      'And when you get home, check that your date of birth is right on the '
                      'portal. That is usually what causes this.'),
        ],
        items=[
            ('What is the man’s problem when he arrives?',
             ('He has no appointment', 'His email gives a different day',
              'He is not registered', 'He has forgotten his card'), 1,
             'The email says Thursday and today is Wednesday.'),
            ('What caused the confusion?',
             ('He misread the email', 'Two students have similar names',
              'The clinic changed the date', 'The system was offline'), 1,
             'Fernandes and Ferreira, put on the same slot.'),
            ('Whose appointment is today?',
             ('Ms Fernandes’s', 'Mr Ferreira’s', 'Both', 'Neither'), 1,
             'Yours was Wednesday — today — at eleven twenty.'),
            ('What does the receptionist say about the list of medicines?',
             ('It is not needed', 'It is standard for everyone', 'It applies only to Ms '
              'Fernandes', 'It should have been sent in advance'), 1,
             'That part is standard, yes.'),
            ('Why must the man wait?',
             ('The nurse is running late', 'He must register first',
              'The waiting room is full', 'His notes are missing'), 0,
             'She is running about ten minutes behind.'),
            ('What does the receptionist advise him to do later?',
             ('Cancel and rebook', 'Check his date of birth on the portal',
              'Phone at eight in the morning', 'Use the walk-in clinic'), 1,
             'That is usually what causes this — she gives the reason as she gives the advice.'),
        ],
    ),

    l2=dict(
        sub='The campus health centre',
        caption='An announcement about the flu clinic',
        poster=['Flu clinic: Tuesday and Wednesday, 10.00–16.00',
                'Free for students in listed groups',
                'Registration required first'],
        skill=('Hear who a rule applies to',
               ['Health announcements usually name groups. Note which group each rule covers.',
                'Free, free for some, and chargeable are three different categories.',
                'Listen for the one that catches people out — the speaker usually signals it.',
                'The last instruction is nearly always a question.']),
        warm=[
            ('Man: Do I have to pay?',
             ('If you are not in a listed group, yes.', 'On Tuesday and Wednesday.',
              'At the health centre.', 'Yes, it’s free.'), 0,
             'A do-I-have-to question about cost; the only answer that states the condition.'),
            ('Woman: Do I need an appointment?',
             ('It takes five minutes.', 'No — just turn up.', 'In the sports hall.',
              'Yes, it’s free.'), 1,
             'A do-I-need question wants a yes or no.'),
            ('Man: What if I am registered somewhere else?',
             ('Then you must register here first.', 'It is free for students.',
              'On Wednesday afternoon.', 'Yes, you are.'), 0,
             'A what-if question wants the consequence for that case.'),
        ],
        script=[
            ('Woman', 'The annual flu clinic runs next Tuesday and Wednesday, ten until four, in '
                      'the sports hall, and you do not need an appointment — just come. Three '
                      'things worth knowing. First, it is free if you are in one of the listed '
                      'groups: anyone with asthma or diabetes, anyone pregnant, anyone living '
                      'in catered halls, and anyone on a healthcare course who will be on '
                      'placement this year. Everybody else can still have it, at eleven pounds. '
                      'Second — and this is the one that catches people out every year — you '
                      'must be registered with the campus health centre. Not registered with a '
                      'practice at home. Registered here. If you are not, you can register '
                      'online in about ten minutes and come straight down afterwards; you do '
                      'not have to wait for anything to be approved. Third, you should allow '
                      'about twenty minutes in total, because there is a short form and then '
                      'fifteen minutes sitting down afterwards, which is standard and is not a '
                      'sign that anything is wrong.'),
        ],
        items=[
            ('Who may have the vaccination free?',
             ('All students', 'Students in listed groups', 'Only students with asthma',
              'Only students on placement'), 1,
             'Four groups are named, and everybody else pays eleven pounds.'),
            ('What does the speaker say catches people out every year?',
             ('The cost', 'The location', 'The registration requirement',
              'The opening hours'), 2,
             'Registered here, not at home — she stresses the distinction.'),
            ('What can an unregistered student do?',
             ('Nothing until next year', 'Register online and come straight down',
              'Pay extra on the day', 'Book an appointment instead'), 1,
             'You do not have to wait for anything to be approved.'),
            ('How long should a student allow in total?',
             ('Five minutes', 'Ten minutes', 'Twenty minutes', 'An hour'), 2,
             'A short form plus fifteen minutes sitting down afterwards.'),
            ('Why must students sit down for fifteen minutes?',
             ('It is a precaution and is standard', 'The form takes that long',
              'The hall is crowded', 'A second dose is given'), 0,
             'The speaker says it is standard and not a sign that anything is wrong.'),
        ],
    ),

    l3=dict(
        sub='How a vaccine works',
        caption='A talk on why prevention costs less',
        board=['Treat: cost per person, every time',
               'Prevent: cost per population, once',
               'Benefit falls on people who never knew',
               'Which is why nobody thanks you'],
        skill=('Follow a cost comparison',
               ['A talk comparing two approaches will cost them differently. Note the unit of '
                'each cost.',
                'A paradox stated by the speaker (nobody thanks you) is always tested.',
                'Numbers given once in a talk like this carry the argument.',
                'The last sentence usually says what the speaker wants you to remember.']),
        warm=[
            ('Woman: Did he say per person or per population?',
             ('Per population, for prevention.', 'It is on the board.', 'About ten pounds.',
              'Yes, he did.'), 0,
             'The question offers two units and the answer picks the right one.'),
            ('Man: Why does nobody notice prevention working?',
             ('Because the illness never happens.', 'It costs less.',
              'In the second half.', 'Yes, that is true.'), 0,
             'A why question wants the reason, and only one option gives one.'),
            ('Woman: Can you send me the figures?',
             ('They were on the slide.', 'Yes — I will put them on the page tonight.',
              'About four to one.', 'No, I did not write them down.'), 1,
             'A request is answered by agreeing and saying when.'),
        ],
        script=[
            ('Professor', 'I want to explain why prevention is cheaper than treatment, and then '
                          'why that argument keeps losing. The arithmetic is not complicated. '
                          'Treatment is a cost per person, and you pay it every single time '
                          'somebody becomes ill. Prevention is a cost per population, and in '
                          'many cases you pay it once. Water infrastructure in a nineteenth-'
                          'century city cost a fortune, and then it went on working for a '
                          'hundred and fifty years without anybody paying again. No course of '
                          'treatment has ever done that. Vaccination is the same shape: the cost '
                          'per protected person falls as coverage rises, because at a certain '
                          'point the virus cannot find a chain of hosts and even unvaccinated '
                          'people stop catching it. So why does prevention lose the argument in '
                          'almost every budget meeting? Because of where the benefit lands. If a '
                          'hospital treats a child, there is a child, a family and a '
                          'photograph. If clean water prevents that illness, there is nobody: '
                          'the benefit falls on a person who never became ill and never knew '
                          'they were at risk. You cannot photograph an epidemic that did not '
                          'happen. Remember that when you read that a prevention programme has '
                          'been cut because it could not demonstrate its impact. Of course it '
                          'could not. Not demonstrating anything is what success looks like.'),
        ],
        items=[
            ('What is the main idea of the talk?',
             ('Prevention is cheaper but politically weak because its benefit is invisible',
              'Treatment should be reduced', 'Vaccination is the cheapest intervention',
              'Budget meetings are badly run'), 0,
             'The first half argues the economics and the second half explains why it loses '
             'anyway.'),
            ('How is treatment costed?',
             ('Per population, once', 'Per person, every time',
              'Per hospital, annually', 'It cannot be costed'), 1,
             'And prevention is a cost per population, often paid once.'),
            ('Why does the cost per protected person fall as coverage rises?',
             ('Vaccines get cheaper', 'The virus cannot find a chain of hosts',
              'Fewer people need treatment', 'Governments subsidise it'), 1,
             'Even unvaccinated people stop catching it, so each dose protects more than one '
             'person.'),
            ('Why does prevention lose budget arguments?',
             ('It costs more overall', 'Its benefit falls on people who never knew they were '
              'at risk', 'It takes longer to work',
              'It is harder to administer'), 1,
             'You cannot photograph an epidemic that did not happen.'),
            ('What does the speaker say about a programme cut for not demonstrating impact?',
             ('The evaluation was wrong', 'Of course it could not demonstrate impact',
              'It should be restarted', 'It was too expensive'), 1,
             'Not demonstrating anything is what success looks like.'),
            ('Why does the speaker mention nineteenth-century water infrastructure?',
             ('To show a one-off cost that worked for 150 years',
              'To criticise modern spending', 'To explain how filtration works',
              'To compare two cities'), 0,
             'No course of treatment has ever done that — the comparison is the point.'),
        ],
    ),

    sp=[
        dict(sub='How a vaccine works', focus='stress in obligation',
             skill=('Stress the modal when it carries the news',
                    ['You MUST register is different from you must REGISTER. Choose.',
                     'Have to is reduced in speech: /hæftə/. Must is not reduced.',
                     'Do not have to and must not mean opposite things. Say them clearly.',
                     'Finish the sentence, even if you choose the wrong stress.']),
             repeat=['You must register first.',
                     'You do not have to pay.',
                     'Students should allow about twenty minutes.',
                     'You must not take the medicine with other tablets.',
                     'Anyone on a healthcare placement should have the vaccination.',
                     'You do not have to wait for your registration to be approved before coming.',
                     'If you cannot attend, you should cancel online rather than telephone, because that line is needed for same-day appointments.'],
             theme='how you look after your health',
             qs=['First, do you do anything regularly to stay healthy?',
                 'People take health advice differently. How do you react when you are told to '
                 'change a habit, and why?',
                 'Some people say that staying healthy is entirely an individual responsibility. '
                 'Do you agree? Why or why not?',
                 'Finally, should healthcare be free for students? Why or why not?'],
             model=[(2, 'Badly, if I am honest. I know the advice is right and I still resent '
                        'being told, which is probably why nobody changes anything.'),
                    (3, 'I disagree. Whether I can walk somewhere safely or buy fresh food near '
                        'my home is not a decision I make.')],
             selfcheck=['I distinguished must not from do not have to',
                        'I reduced have to naturally',
                        'I gave a reason after every opinion']),
        dict(sub='The campus health centre', focus='giving and asking for advice',
             skill=('Advise, do not instruct',
                    ['You should… / It might be worth… / If I were you I would…',
                     'Give the reason with the advice. Advice without a reason is ignored.',
                     'Asking for advice: what would you do? / do you think I should…?',
                     'One piece of advice, one reason, one check that it helps.']),
             repeat=['You should register first.',
                     'It might be worth phoning at eight.',
                     'If I were you, I would cancel online.',
                     'Do you think I should use the walk-in clinic instead?',
                     'You should allow twenty minutes, because there is a form to fill in.',
                     'It would probably be quicker to register now and come down straight afterwards.',
                     'If you cannot get a same-day appointment, the walk-in clinic on Thursday afternoon is usually the fastest alternative.'],
             theme='health services where you live',
             qs=['To start, how do you see a doctor where you live?',
                 'Systems differ a great deal. How does yours work in practice, and what do you '
                 'think of it?',
                 'Some people argue that patients should pay a small fee for each appointment to '
                 'stop people missing them. Do you agree? Why or why not?',
                 'Last question. Should universities provide a full health service on campus, or '
                 'leave it to the public system? Why?'],
             model=[(3, 'I disagree, although I understand the problem. A fee stops the people '
                        'with least money rather than the people who miss appointments.'),
                    (4, 'On campus, at least for simple things. A student who has to travel an '
                        'hour to be seen will simply not go.')],
             selfcheck=['I gave a reason with every piece of advice',
                        'I used at least two advice structures',
                        'I asked for advice in a natural way']),
        dict(sub='Clean water and cities', focus='academic register',
             skill=('Argue from a date or a number',
                    ['Use the unit’s words: incidence, infrastructure, intervene, adequate, '
                     'comprehensive.',
                     'Give the figure or the date first, then the conclusion you draw.',
                     'Separate what the evidence shows from what you would do about it.',
                     'Mark yourself against the three statements below.']),
             repeat=['The incidence of waterborne disease fell sharply.',
                     'Cities intervened by building reservoirs and sewers.',
                     'The improvement began before antibiotics were available.',
                     'Infrastructure protects people who never take any action themselves.',
                     'A comprehensive water system was expensive once and then worked for a century.',
                     'Interventions that require individual action have to be promoted repeatedly to everybody.',
                     'By 1920 a child born in a large city was more likely to reach the age of five than a child born in the countryside, and most of that change happened before anybody accepted that microbes caused disease.'],
             theme='public health and money',
             qs=['First, what is the biggest health problem where you live?',
                 'People disagree about whose problem that is. How do people where you live see '
                 'it, and why?',
                 'Some people argue that governments should spend on prevention before they '
                 'spend on hospitals. Do you agree? Why or why not?',
                 'Finally, should a government be allowed to require a vaccination? Why or why '
                 'not?'],
             model=[(3, 'The evidence is strongly on that side. The incidence of waterborne '
                        'disease fell by more than any drug has achieved, and it fell before '
                        'the drugs existed.'),
                    (4, 'For health workers, I think yes, because the risk they carry falls on '
                        'other people. For everybody else I would persuade rather than require.')],
             selfcheck=['I used at least three academic words from this unit',
                        'I gave a figure or a date before my conclusion',
                        'I separated evidence from opinion']),
    ],

    w1=dict(
        sub='How a vaccine works',
        skill=('Obligation inside questions',
               ['Do I have to…? and Must I…? are both direct questions. Should I…? asks for '
                'advice.',
                'An embedded obligation question keeps statement order: whether I should…',
                'Never do must. Must is its own auxiliary.',
                'Use every tile exactly once.']),
        guided=[
            ('Students must register before booking.',
             ['have', 'do', 'I', 'to', 'register', 'first'],
             'Do I have to register first?'),
            ('A list of medicines should be brought.',
             ['should', 'what', 'I', 'bring'],
             'What should I bring?'),
            ('The vaccination is free for listed groups.',
             ['know', 'you', 'do', 'whether', 'it', 'is', 'free'],
             'Do you know whether it is free?'),
        ],
        exam=[
            ('Cancellation should be done online.',
             ['tell', 'can', 'you', 'me', 'whether', 'I', 'should', 'cancel', 'online'],
             'Can you tell me whether I should cancel online?'),
            ('The clinic runs on Tuesday and Wednesday.',
             ['days', 'which', 'does', 'the', 'clinic', 'run'],
             'Which days does the clinic run?'),
            ('Students do not have to wait for approval.',
             ['have', 'do', 'I', 'to', 'wait', 'for', 'approval'],
             'Do I have to wait for approval?'),
            ('Twenty minutes should be allowed in total.',
             ['long', 'how', 'should', 'I', 'allow'],
             'How long should I allow?'),
            ('The nurse who saw me last time has left.',
             ['the', 'nurse', 'who', 'saw', 'me', 'last', 'time', 'has', 'left'],
             'The nurse who saw me last time has left.'),
            ('The walk-in clinic cannot issue sick notes.',
             ['know', 'do', 'you', 'where', 'I', 'can', 'get', 'a', 'sick', 'note'],
             'Do you know where I can get a sick note?'),
            ('Same-day appointments go by eight twenty.',
             ['time', 'what', 'should', 'I', 'phone'],
             'What time should I phone?'),
        ],
    ),
    w2=dict(
        sub='The campus health centre',
        to='reception@northgatehealth.nhs.uk',
        date='12/10/2026',
        subject='Appointment 15 October, 11.20 — request to move',
        scenario=[
            'You have an appointment at the campus health centre on Thursday 15 October at '
            '11.20. Your department has just scheduled a compulsory assessment at eleven that '
            'morning. You have already missed one appointment this year, and the notice says '
            'three in a year means routine booking goes by phone only.',
            'Write an email to the health centre.',
        ],
        bullets=['Explain why you cannot attend.',
                 'Ask for a different appointment, giving your availability.',
                 'Show that you know how cancellation should be done.'],
        skill=('Cancel in the way they asked',
               ['The notice tells you how to cancel. Doing it their way is half the email.',
                'Give availability as a range, not as a single alternative.',
                'Mention what you already know, so the reply does not repeat it.',
                'Seven minutes. 110–140 words.']),
        model=[
            'Dear Reception,',
            'I have an appointment with Nurse Practitioner Bakare on Thursday 15 October at '
            '11.20. My department has just scheduled a compulsory assessment at eleven that '
            'morning, so I cannot attend.',
            'I have cancelled the appointment online, as the email asked, rather than '
            'telephoning. I am writing because I would like to rebook rather than simply '
            'disappear from the list.',
            'I am free all day on Monday and Tuesday of that week, and after two o’clock on any '
            'other day. Anything in the next three weeks would be fine.',
            'I know that three missed appointments in a year changes how I can book, which is '
            'why I have cancelled rather than failed to arrive. Please could you confirm that '
            'the cancellation has been recorded as a cancellation?',
            'Thank you,',
            'Luísa Fernandes',
        ],
        notes=['The cancellation has already been done, and done the way the clinic asked, '
               'before anything is requested.',
               'Availability is a range, which means one reply can settle it.',
               'The writer shows they have read the rule about three missed appointments, and '
               'uses it to explain their care rather than to argue.',
               'The closing question is small, specific and answerable in one line.'],
    ),
    w3=dict(
        sub='Clean water and cities',
        prof='Dr Bakare',
        question='A city with a limited health budget must choose: build a new hospital wing, or '
                 'replace the water and sewer network in its poorest district. The hospital will '
                 'treat several thousand people a year. The network will serve a hundred '
                 'thousand people who are mostly not ill. Which should it choose, and why?',
        posts=[('Ingrid', 'w',
                'The network, and the lecture gives the reason. Prevention is a cost per '
                'population paid once; treatment is a cost per person paid every time. A hundred '
                'thousand people protected for a century is not comparable to several thousand '
                'treated a year.'),
               ('Kofi', 'm',
                'The people in that hospital exist now and have names. The hundred thousand are '
                'statistical. I understand the arithmetic, but a city that lets identifiable '
                'people die in order to prevent unidentifiable illness will not be a city with a '
                'health budget for very long, because nobody will vote for it.')],
        skill=('Answer the political objection, not just the economic one',
               ['Kofi is not disputing the arithmetic. He is disputing what will survive a '
                'budget meeting.',
                'An answer that only repeats the arithmetic has not met him.',
                'Use the lecture’s point about where the benefit lands.',
                'At least 100 words in ten minutes.']),
        starters=['Ingrid has the arithmetic and Kofi has the politics, and…',
                  'The lecture anticipated Kofi’s objection exactly:…',
                  'What would change the calculation is…',
                  'I would choose…, but only if…'],
        model=[
            'Ingrid has the arithmetic and Kofi has the politics, and the lecture anticipated '
            'both.',
            'The economics is not in doubt. Prevention is paid once and keeps working, and the '
            'nineteenth-century water systems ran for a century and a half without anybody '
            'paying again. But the lecturer also told us why this argument keeps losing: the '
            'benefit lands on people who never become ill and never know they were at risk. You '
            'cannot photograph an epidemic that did not happen. Kofi is describing exactly that '
            'problem, and repeating the arithmetic at him does not solve it.',
            'So I would build the network, and I would spend a small part of the budget on '
            'making its effect visible — publishing the district’s illness figures every year, '
            'before and after. If the only weakness of prevention is that nobody can see it '
            'working, then the fix is to make it visible, not to stop doing it.',
        ],
        model_words=172,
    ),

    gram=dict(
        title='must, have to and should',
        headers=['Form', 'Example'],
        rows=[
            ['must (the speaker’s own rule)', 'You must register before you book.'],
            ['have to (an outside rule)', 'Students have to register online.'],
            ['should (advice)', 'You should allow twenty minutes.'],
            ['must not (forbidden)', 'You must not use a tool in the exam.'],
            ['do not have to (not necessary)', 'You do not have to bring your card.'],
            ['Question: must / do I have to', 'Do I have to register first?'],
            ['had to (past of both)', 'I had to register last week.'],
        ],
        notes=[
            'Must not and do not have to are opposites, not variants. Must not means it is '
            'forbidden. Do not have to means it is optional. This is the single most testable '
            'point in the unit.',
            'Must has no past, no future and no infinitive, so have to covers those: I had to, '
            'I will have to, I want to have to is impossible but I want to be able to is fine.',
            'Should is weaker than must and is used for advice, recommendation and expectation: '
            'it should arrive tomorrow.',
        ],
        watch='Never write *you don’t must*. The negative of must as an obligation is do not '
              'have to; the negative of must as a prohibition is must not.',
        ex=[
            ('Complete with must, must not, have to, do not have to or should.',
             ['You __________ register before you can book anything.',
              'You __________ bring your student card — it is not needed.',
              'You __________ use any tool at all in an invigilated exam.',
              'You __________ allow twenty minutes, to be safe.',
              'Students __________ cancel online rather than by phone.',
              'I __________ (past) register again when I moved.'],
             ['must', 'do not have to', 'must not', 'should', 'have to', 'had to']),
            ('Say whether each sentence means forbidden or not necessary.',
             ['You must not take it with other tablets.',
              'You do not have to wait for approval.',
              'You must not photograph the display.',
              'You do not have to pay if you are in a listed group.'],
             ['forbidden', 'not necessary', 'forbidden', 'not necessary']),
            ('Correct the mistake in each sentence.',
             ['You don’t must bring your card.',
              'I must register again last year.',
              'You mustn’t to pay.'],
             ['You do not have to bring your card.', 'I had to register again last year.',
              'You do not have to pay.']),
        ],
        bas='Build a Sentence tests this as Do I have to…? and Can you tell me whether I '
            'should…? Note that must almost never appears in these items, because have to is '
            'what people actually say.',
    ),

    rev=dict(
        vocab=[
            ('the chance or right to use something', 'access'),
            ('to make certain that something happens', 'ensure'),
            ('to act in order to change what is happening', 'intervene'),
            ('how often something happens in a population', 'incidence'),
            ('the basic systems a place needs', 'infrastructure'),
            ('enough for the purpose', 'adequate'),
            ('including everything needed', 'comprehensive'),
            ('done by choice, not because you must', 'voluntary'),
            ('to encourage something to grow or happen', 'promote'),
            ('to bring something back to how it was', 'restore'),
            ('a service you can use without an appointment', 'walk-in'),
            ('a letter saying you were too ill to work', 'sick note'),
        ],
        gram=[
            ('You __________ register before you can book.', 'must'),
            ('You __________ bring your card — it is not needed.', 'do not have to'),
            ('You __________ use any tool in an invigilated exam.', 'must not'),
            ('You __________ allow twenty minutes, to be safe.', 'should'),
            ('Students __________ cancel online rather than by phone.', 'have to'),
            ('I __________ (must, past) register again when I moved.', 'had to'),
            ('Do I __________ wait for approval?', 'have to'),
            ('Can you tell me whether I __________ cancel online?', 'should'),
        ],
        mini=[
            ('According to the passage on page 42, most of the fall in urban child deaths came',
             ('from antibiotics', 'before the main medical advances',
              'from better hospitals', 'from rural migration'), 1,
             'The dates do not fit the medical explanation, which is the argument of paragraph 1.'),
            ('In the talk, prevention loses budget arguments because',
             ('it costs more', 'its benefit falls on people who never knew they were at risk',
              'it takes longer', 'it is harder to administer'), 1,
             'You cannot photograph an epidemic that did not happen.'),
            ('Which sentence is correct?',
             ('You don’t must bring your card.', 'I must register again last year.',
              'You do not have to bring your card.', 'You mustn’t to pay.'), 2,
             'Must has no past and no negative of necessity; have to supplies both.'),
            ('An unregistered student at the flu clinic should',
             ('come back next year', 'register online and come straight down',
              'pay extra', 'book an appointment'), 1,
             'No approval has to be waited for.'),
            ('"You must not" and "you do not have to" mean',
             ('the same thing', 'opposite things', 'nearly the same thing',
              'the same in questions only'), 1,
             'Forbidden against optional — the most testable pair in the unit.'),
            ('In Speaking, the interview questions',
             ('are all the same difficulty', 'get harder in a fixed order',
              'can be answered in any order', 'may be skipped'), 1,
             'Fact, reaction, opinion, policy opinion — that is the shape every time.'),
        ],
    ),
    tip='In Write an Email the three bullet points are the mark scheme. Give each one its own '
        'short paragraph. A rater looking for three things in seven minutes should be able to '
        'find all three without reading twice.',
)
