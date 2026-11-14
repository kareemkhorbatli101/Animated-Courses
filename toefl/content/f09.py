# -*- coding: utf-8 -*-
"""Foundation Unit 9 · The Body, Health and the Clinic.

Grammar: can / can't, should, imperatives, adverbs of manner.
Question spine: Can you ...? What should ...?
"""

UNIT = dict(
    n=9, vol='F', level='A2',
    title='The Body, Health and the Clinic',
    icons=('brain', 'flask', 'speech'),
    subs=('Parts of the body', 'At the clinic', 'Staying well'),
    grammar='can and cannot · should · orders · how-words ending in -ly',
    field='the body, health, advice',
    names=('Riverside', 'Ana', 'Ruiz', 'Yusuf', 'Mei', 'Patel', 'Oakfield', 'Lena',
           'Hartley'),
    opener_line='Three sub-topics, three cycles in every skill. This unit gives you the '
                'language of advice, and the first eight words of the Academic Word List '
                'that Volume 1 is built on.',
    candos=[
        'say what I can and cannot do',
        'read a clinic notice and find what to do',
        'understand a short text about health and students',
        'follow a conversation at a health centre',
        'give simple advice with should',
        'write an email asking for an appointment'],

    core=[
        ('body', 'all of a person from head to foot'),
        ('head', 'the part with your eyes and mouth in it'),
        ('eye', 'you see with it'),
        ('ear', 'you hear with it'),
        ('nose', 'you smell with it'),
        ('mouth', 'you eat and speak with it'),
        ('tooth', 'one of the hard white things in your mouth'),
        ('arm', 'the long part between your shoulder and your hand'),
        ('hand', 'the part with five fingers'),
        ('leg', 'you walk on two of these'),
        ('foot', 'the part at the end of your leg'),
        ('skin', 'the soft cover of the whole body'),
        ('heart', 'it moves the blood around your body'),
        ('blood', 'the red liquid inside you'),
        ('ill', 'not well'),
        ('pain', 'the bad feeling when a part of you hurts'),
        ('hurt', 'to give pain, or to feel pain'),
        ('medicine', 'what you take to get well'),
        ('rest', 'to stop and do nothing for a time'),
        ('healthy', 'well, and likely to stay well'),
        ('breathe', 'to take air in and let it out'),
        ('careful', 'thinking about danger before you act'),
        ('dangerous', 'able to hurt you'),
        ('cough', 'the sharp noise you make when your throat is bad')],
    campus=[
        ('clinic', 'a small place for medical help'),
        ('appointment', 'a time the doctor keeps for you'),
        ('doctor', 'the person who finds out what is wrong'),
        ('nurse', 'the person who looks after you in a clinic'),
        ('prescription', 'the paper the doctor writes for your medicine'),
        ('pharmacy', 'the shop that gives you the medicine'),
        ('sick note', 'the paper that says you were too ill to come'),
        ('health centre', 'the building with doctors and nurses in it'),
        ('waiting room', 'the room where you sit before the doctor calls you'),
        ('symptom', 'a sign that something is wrong with you'),
        ('treatment', 'what the doctor does to make you well'),
        ('register with', 'to put your name on a doctor’s list')],
    awl=[
        ('area', 'one part of a place or a subject'),
        ('benefit', 'a good thing that comes from something'),
        ('create', 'to make something new'),
        ('factor', 'one of the things that make something happen'),
        ('method', 'a way of doing something'),
        ('process', 'a set of steps, one after another'),
        ('require', 'to need'),
        ('role', 'the job a person or thing does')],
    again=['clinic', 'appointment', 'symptom', 'treatment', 'healthy', 'rest',
           'benefit', 'factor'],
    vocab_talk=[
        'Can you touch your foot without bending your legs?',
        'What should a student do to stay healthy?',
        'Are you registered with a doctor here?',
        'Which part of the body do people hurt most often in a game?'],

    r1=dict(
        sub='Parts of the body',
        skill=('Adverbs from adjectives', [
            'Most of these words add -ly to the adjective: careful, careful-ly.',
            'An adjective ending in -y changes to -ily: easy, eas-ily.',
            'The -ly word tells you how. The adjective tells you what kind.',
            'Count the dashes: two is usually -ly, four is usually -ily.']),
        guided_text='Walk slow-- up the stairs for a week. Breathe deep-- and rest when you '
                    'need to. If you feel bad, stop immediate--. The nurse speaks very '
                    'quick-- on the phone, so listen careful--.',
        guided_hint='1  slow--  →  ly  (slowly)',
        guided=['ly', 'ly', 'ly', 'ly', 'ly'],
        exam_text='A cold is not dangerous, but it can make a week very long. Sleep '
                  'proper--, drink water regular-- and eat normal--. Do not take medicine '
                  'at once. Most cold- finish quick-- on their own. If you cannot '
                  'breathe easi--, or if the pain is strong, go to the clinic immediate--. '
                  'The nurse there listens careful-- and the doctor explains the treatment '
                  'clear--. Students often wait too long, and then they get well slow-- '
                  'and miss a whole week. Act early, not bravely.',
        exam=['ly', 'ly', 'ly', 's', 'ly', 'ly', 'ly', 'ly', 'ly', 'ly']),

    r2=dict(
        sub='At the clinic',
        skill=('Find the step you are on', [
            'A clinic notice is a set of steps. Find your step first.',
            'If, when and before mark the step you need.',
            'A phone number and a time belong to one step, not to all of them.',
            'Can wait and cannot wait send you to two places. Read that line twice.']),
        docs=[
            ('notice', 'Riverside Health Centre — how to see a doctor', [
                '# Step 1: register',
                '* Every new student must register with the centre in the first month.',
                '* Bring your student card and your address.',
                '# Step 2: make an appointment',
                '* Call 0800 114 114 between 8.00 and 10.00 for the same day.',
                '* For a later day, book online at any time.',
                '# If it cannot wait',
                '* Do not wait for an appointment. Go to the clinic in Block D.',
                '* The clinic is open 8.00 – 18.00 from Monday to Friday.',
                '# Sick notes',
                '* The centre writes a sick note only after seven days.'],
             'notice'),
            ('email', 'group.b@riverside.edu', 'j.patel@riverside.edu',
             '21/11/2025', 'If you are ill in exam week',
             ['Dear Group B,', '',
              'If you are ill on the day of an exam, do three things, in this order.',
              'First, email me before nine in the morning.',
              'Second, go to the health centre the same day.',
              'Third, send me the sick note when you have it.',
              'Do not wait until the exam is over. After it, nobody can help you.',
              '', 'Dr Patel'])],
        guided=[
            ('When must a new student register?',
             ('in the first week', 'in the first month', 'in the first term',
              'before the exam'), 1,
             'Every new student must register with the centre in the first month.'),
            ('What do you bring to register?',
             ('a sick note', 'your student card and your address', 'a prescription',
              'nothing'), 1,
             'Bring your student card and your address.'),
            ('When can you call for a same-day appointment?',
             ('8.00 – 10.00', '8.00 – 18.00', 'any time', 'after 18.00'), 0,
             'Call 0800 114 114 between 8.00 and 10.00 for the same day.'),
            ('Where do you go if it cannot wait?',
             ('the health centre', 'the clinic in Block D', 'the pharmacy', 'online'), 1,
             'Do not wait for an appointment. Go to the clinic in Block D.')],
        exam=[
            ('How do you book an appointment for a later day?',
             ('call at eight', 'book online', 'go to Block D', 'ask your tutor'), 1,
             'For a later day, book online at any time.'),
            ('When is the clinic in Block D open?',
             ('8.00 – 10.00 every day', '8.00 – 18.00 from Monday to Friday',
              'all night', 'only in exam week'), 1,
             'The clinic is open 8.00 – 18.00 from Monday to Friday.'),
            ('Who does not get a sick note?',
             ('a student ill for three days', 'a student ill for ten days',
              'a new student', 'a student in Block D'), 0,
             'The centre writes a sick note only after seven days.'),
            ('What is the first thing to do if you are ill on an exam day?',
             ('go to the health centre', 'email Dr Patel before nine',
              'send the sick note', 'wait until the exam is over'), 1,
             'First, email me before nine in the morning.'),
            ('When should you go to the health centre?',
             ('the next day', 'the same day', 'after the exam', 'in the first month'), 1,
             'Second, go to the health centre the same day.'),
            ('What does Dr Patel say about waiting?',
             ('it is fine', 'after the exam nobody can help you', 'wait for the sick note',
              'wait for an appointment'), 1,
             'Do not wait until the exam is over. After it, nobody can help you.')]),

    r3=dict(
        sub='Staying well',
        title='The Three Weeks Nobody Tells You About',
        words=174,
        paras=[
            'Every health centre in every college town knows the same thing. In the third '
            'week of the first term the waiting room fills up. The same thing happens in '
            'the third week after the winter break.',
            'The reason is not bad luck. A new student meets a lot of new people in '
            'one month. They sleep badly in a new bed. They eat at '
            'different times. Each of these is a small factor on its own. Together they '
            'create a body with no strength. Then one cold goes round a hall of two '
            'hundred rooms in a week, and the waiting room fills up.',
            'Nothing here requires a doctor. Sleep, water and food do the work, and the '
            'process is slow and boring. But two things help, and both are free. Register '
            'with a doctor in your first week, when you are well and the waiting room is '
            'empty. And in week three, go to bed early for four nights. That is the whole '
            'method, and most students learn it in the second year.'],
        skill=('A pattern, a cause, and advice', [
            'A text that starts with a pattern usually explains it and then uses it.',
            'Each of these and together are the words that join small causes into one.',
            'The advice is almost always at the end, after but.',
            'A question with how many wants a number from the middle paragraph.']),
        guided=[
            ('When does the waiting room fill up?',
             ('the first week', 'the second week', 'the third week', 'the last week'), 2,
             'In the third week of the first term the waiting room fills up.'),
            ('When does it happen again?',
             ('in the summer', 'in the third week after the winter break', 'in week one',
              'in the exam week'), 1,
             'The same thing happens in the third week after the winter break.'),
            ('Is the reason bad luck?',
             ('yes', 'no', 'sometimes', 'only in winter'), 1,
             'The reason is not bad luck.'),
            ('Where does a cold go round?',
             ('a classroom', 'a hall of two hundred rooms', 'the health centre',
              'the library'), 1,
             'One cold goes round a hall of two hundred rooms in a week.')],
        exam=[
            ('In a month a new student meets',
             ('nobody', 'a lot of new people', 'two people',
              'only their class'), 1,
             'A new student meets a lot of new people in a month.'),
            ('What does the passage say about sleep?',
             ('students sleep well', 'they sleep badly in a new bed',
               'they sleep too much', 'sleep does not matter'), 1,
             'They sleep badly in a new bed.'),
            ('What do the small factors do together?',
             ('nothing', 'create a body with no strength', 'make students strong',
              'fill the pharmacy'), 1,
             'Together they create a body with no strength.'),
            ('Does any of this require a doctor?',
             ('yes, always', 'no', 'only in week three', 'only for a cold'), 1,
             'Nothing here requires a doctor.'),
            ('What does the work?',
             ('medicine', 'sleep, water and food', 'the clinic', 'the pharmacy'), 1,
             'Sleep, water and food do the work.'),
            ('When should you register with a doctor?',
             ('in week three', 'in your first week', 'when you are ill',
              'in the second year'), 1,
             'Register with a doctor in your first week, when you are well.'),
            ('What is the advice for week three?',
             ('take medicine', 'go to bed early for four nights', 'stay in your room',
              'go to the clinic'), 1,
             'In week three, go to bed early for four nights.')]),

    l1=dict(
        sub='At the clinic',
        caption='A student talks to a nurse at the health centre',
        skill=('Advice sounds like a question', [
            'Advice often comes as a question: Can you come at four?',
            'Should and could are the polite words. They are not weak.',
            'The instruction is usually the shortest sentence in the conversation.',
            'If you are asked to do three things, count them on your fingers.']),
        warm=[
            ('Can you come in at four?',
             ('Yes, I can.', 'In Block D.', 'Two days.', 'It hurts.'), 0,
             'Can you ...? takes Yes, I can or No, I cannot.'),
            ('What should I do?',
             ('Rest and drink water.', 'At four o’clock.', 'Yes, you should.',
              'In the waiting room.'), 0,
             'What should I do? asks for advice, so the answer is an instruction.'),
            ('Where does it hurt?',
             ('In my back.', 'Since Monday.', 'Yes, it does.', 'At the clinic.'), 0,
             'Where does it hurt? asks for a part of the body.')],
        script=[
            ('Woman', 'Come in. What is the problem?'),
            ('Man', 'I have a bad cough and my head hurts.'),
            ('Woman', 'Since when?'),
            ('Man', 'Since Saturday. It was not bad at first.'),
            ('Woman', 'Can you breathe normally?'),
            ('Man', 'Yes, I can. It is only the cough.'),
            ('Woman', 'Then you do not need a doctor today. Rest, drink water and sleep.'),
            ('Man', 'I have an exam on Thursday.'),
            ('Woman', 'Then be careful. Do not study until midnight. If you still feel bad '
                      'on Wednesday, call us before ten and we can see you the same day.'),
            ('Man', 'And a sick note?'),
            ('Woman', 'Not for a cough, I am afraid. We only write one after seven days.'),
            ('Man', 'All right. Thank you.')],
        items=[
            ('What is the man’s problem?',
             ('a pain in his leg', 'a cough and a bad head', 'a temperature',
              'he cannot breathe'), 1,
             'I have a bad cough and my head hurts.'),
            ('Since when has he had the problem?',
             ('Thursday', 'Saturday', 'Monday', 'Wednesday'), 1,
             'He answers Since Saturday when the nurse asks Since when?'),
            ('Can he breathe normally?',
             ('yes', 'no', 'only at night', 'the nurse does not ask'), 0,
             'Can you breathe normally? Yes, I can.'),
            ('What does the nurse tell him to do?',
             ('take medicine', 'rest, drink water and sleep', 'see a doctor today',
              'go to the pharmacy'), 1,
             'Rest, drink water and sleep.'),
            ('What should he do if he still feels bad on Wednesday?',
             ('wait', 'call before ten', 'go to Block D', 'email his tutor'), 1,
             'Call us before ten and we can see you the same day.'),
            ('Can he have a sick note?',
             ('yes, today', 'no, not for a cough', 'yes, after the exam', 'yes, on '
              'Wednesday'), 1,
             'Not for a cough. We only write one after seven days.')]),

    l2=dict(
        sub='Parts of the body',
        caption='An announcement about the health centre',
        poster=['HEALTH CENTRE', 'Register in your first month',
                'Block D · 8.00 – 18.00'],
        skill=('An announcement that tells you to act', [
            'Some announcements are not news. They are an instruction.',
            'The instruction is usually in the first and the last sentence.',
            'A number in the middle is a deadline or a phone number.',
            'Listen for must and please. They mark the thing you have to do.']),
        warm=[
            ('Should I register now?',
             ('Yes, you should.', 'In Block D.', 'Two weeks.', 'Yes, I can.'), 0,
             'Should I ...? takes Yes, you should.'),
            ('Can I register online?',
             ('Yes, you can.', 'At the pharmacy.', 'Since Monday.', 'In my back.'), 0,
             'Can I ...? takes Yes, you can.'),
            ('How long does it take?',
             ('About ten minutes.', 'In Block D.', 'Yes, it does.', 'From Monday to Friday.'), 0,
             'How long asks for an amount of time.')],
        script=[('Woman', 'This is a short announcement from the Riverside Health Centre. '
                          'Every new student must register with us in the first month, and '
                          'about half of you have not done it yet. Registering takes about '
                          'ten minutes. Bring your student card and your address to Block '
                          'D between eight and six from Monday to Friday, or do it online in the '
                          'student area. Please do this while you are well. In week three '
                          'the waiting room is full, and we cannot see a student with no '
                          'name on our list that day.')],
        items=[
            ('Who must register?',
             ('every student', 'every new student', 'only ill students',
              'only students in Block D'), 1,
             'Every new student must register with us in the first month.'),
            ('How many have not registered yet?',
             ('a quarter', 'about half', 'almost all', 'nobody'), 1,
             'About half of you have not done it yet.'),
            ('How long does registering take?',
             ('about five minutes', 'about ten minutes', 'about an hour', 'a whole day'), 1,
             'Registering takes about ten minutes.'),
            ('What do you bring?',
             ('a sick note', 'your student card and your address', 'a prescription',
              'nothing'), 1,
             'Bring your student card and your address.'),
            ('Why should you do it while you are well?',
             ('it is cheaper', 'in week three the waiting room is full',
              'the centre closes', 'the nurse is away'), 1,
             'In week three the waiting room is full.')]),

    l3=dict(
        sub='Staying well',
        caption='A short talk about students and health',
        board=['WEEK THREE', 'new people + bad sleep + new food',
               'a body with no strength', 'what actually helps'],
        skill=('Several causes, one result', [
            'A talk about causes lists them and then adds them up.',
            'The result comes after together, so or and then.',
            'Advice at the end is usually two things, not five.',
            'A question about what helps wants the advice, not the causes.']),
        warm=[
            ('Can a cold go round a whole hall?',
             ('Yes, it can.', 'In week three.', 'Two hundred.', 'Yes, I do.'), 0,
             'Can it ...? takes Yes, it can.'),
            ('What should a new student do first?',
             ('Register with a doctor.', 'At eight.', 'Yes, they should.',
              'In Block D.'), 0,
             'What should ...? asks for advice.'),
            ('Does it require a doctor?',
             ('No, it does not.', 'In week three.', 'Yes, it can.', 'From Monday to Friday.'), 0,
             'Does it ...? takes Yes, it does or No, it does not.')],
        script=[('Man', 'Three weeks into every first term, this health centre runs out of '
                        'chairs. It is the same in January, three weeks after the winter '
                        'break, and it has nothing to do with the weather. Think about '
                        'what changes for a new student. They meet a lot of new people '
                        'in one month. They sleep in a new bed and they sleep '
                        'badly. They eat at new times, and often they eat less. Each '
                        'factor on its own is small. Put the three together and you create '
                        'a body with no strength, in a building with two hundred rooms in '
                        'it. Now the important part. Register with us in your first week, '
                        'while the waiting room is empty. Then in week three, go to bed '
                        'early for four nights. That is it. Those two things beat '
                        'anything in our pharmacy.')],
        items=[
            ('What runs out three weeks into every first term?',
             ('medicine', 'chairs in the health centre', 'appointments', 'sick notes'), 1,
             'This health centre runs out of chairs.'),
            ('When does it happen again?',
             ('in March', 'in January', 'in June', 'in the exam week'), 1,
             'It is the same in January, three weeks after the winter break.'),
            ('Does it have anything to do with the weather?',
             ('yes', 'no', 'only in January', 'only in winter'), 1,
             'It has nothing to do with the weather.'),
            ('How many factors does the speaker name?',
             ('two', 'three', 'four', 'five'), 1,
             'New people, bad sleep, new food and times: three changes.'),
            ('What is the first piece of advice?',
             ('take medicine', 'register in your first week', 'eat more', 'stay in'), 1,
             'Register with us in your first week, while the waiting room is empty.'),
            ('What is the second?',
             ('go to bed early for four nights', 'drink more water', 'do more exercise',
              'see a doctor'), 0,
             'Then in week three, go to bed early for four nights.')]),

    sp=[
        dict(sub='Parts of the body',
             focus='the /ʌ/ and /ɑː/ sounds in body words',
             skill=('Two sounds that change a word', [
                 'Blood, tooth and cut are short. Arm, heart and start are long.',
                 'The short /ʌ/ is made in the middle of the mouth with no effort.',
                 'The long /ɑː/ opens the mouth and holds.',
                 'Pairs to practise: cut / cart, hut / heart, bun / barn.']),
             repeat=['My head hurts.', 'I cannot breathe easily.',
                     'My arm still hurts.',
                     'You should rest for two or three days.',
                     'The doctor listened carefully and asked about my sleep.',
                     'I can walk normally now, but I cannot run yet.',
                     'The nurse told me to drink water regularly and to go to bed early.'],
             theme='health and the body',
             qs=['First, how do you feel today?',
                 'Tell me about a time you were ill. What did you do?',
                 'Some people go to a doctor quickly and some people wait. Which are you, '
                 'and why?',
                 'Finally, what should a student do to stay healthy? Give one piece of '
                 'advice.'],
             frames=['Today I feel ... .',
                     'Last ... I was ill. I ... .',
                     'I usually ... , because ... .',
                     'A student should ... , because ... .'],
             model=[(1, 'Today I feel fine, thank you. I was tired last week, but I slept '
                        'well at the weekend.'),
                    (2, 'Last winter I was ill for a week. I stayed in my room, took a lot of water and slept about ten hours a night.'),
                    (3, 'I usually wait too long, because an appointment takes a morning '
                        'and I always have a class.'),
                    (4, 'A student should go to bed at the same time every night, because '
                        'sleep is the one thing nobody can do for you later.')],
             selfcheck=['I used can and cannot correctly',
                        'I used a word like carefully or slowly',
                        'I gave a reason after my advice']),
        dict(sub='At the clinic',
             focus='the weak form of can and the strong form of cannot',
             skill=('Can is weak, cannot is strong', [
                 'In I can come the can is short and almost disappears.',
                 'In I cannot come the word is strong and slow. That is the difference.',
                 'If you cannot hear the difference, listen for the length, not the sound.',
                 'In a short answer can is strong again: Yes, I CAN.']),
             repeat=['Can I see a doctor?', 'I cannot come at four.',
                     'Can you call us before ten?',
                     'You should register in your first week.',
                     'I can come on Wednesday morning, but not on Tuesday.',
                     'The nurse said I should rest and drink a lot of water.',
                     'I cannot take the medicine in the morning, because I sleep after it, '
                     'all morning.'],
             theme='doctors and appointments',
             qs=['To start, are you registered with a doctor here?',
                 'Tell me what happens when you make an appointment in your country.',
                 'Some people say it is easy to see a doctor and some say it is not. How '
                 'is it where you live?',
                 'Finally, what should a health centre do for new students?'],
             frames=['I am ... registered, because ... .',
                     'In my country you ... . Then ... .',
                     'Where I live it is ... , because ... .',
                     'A health centre should ... .'],
             model=[(1, 'I am registered. I did it in my first week, because the college '
                        'sent an email about it twice.'),
                    (2, 'In my country you call in the morning and they give you a time '
                        'the same day. Then you wait about an hour in the waiting room.'),
                    (3, 'Where I live it is not easy, because there are two doctors for a '
                        'whole area and everybody calls at eight.'),
                    (4, 'A health centre should come to the halls in the first week. If '
                        'you wait for students to come to you, half of them never do.')],
             selfcheck=['I made cannot strong and can weak',
                        'I used should for advice',
                        'I answered all four questions']),
        dict(sub='Staying well',
             focus='giving advice without sounding rude',
             skill=('Should, not must', [
                 'You should go to bed early is advice. You must go to bed early is an '
                 'order.',
                 'In the Speaking test, advice questions want should or could.',
                 'Soften it with I think or Maybe: I think you should rest.',
                 'Give the reason straight after the advice. Advice with no reason is '
                 'noise.']),
             repeat=['You should rest.', 'I think you should sleep.',
                     'You could go to bed early.',
                     'Maybe you should drink more water every day.',
                     'I think you should register before you are ill.',
                     'Students should go to bed early in week three.',
                     'You should not study until midnight on the night before an exam.'],
             theme='advice for a new student',
             qs=['First, what advice do you give a student in their first week?',
                 'Tell me about one healthy thing you do.',
                 'Some people say students are not healthy. Do you agree, and why?',
                 'Finally, what should a college do about it?'],
             frames=['I think a new student should ... .',
                     'One thing I do is ... .',
                     'I ... agree, because ... .',
                     'A college should ... , because ... .'],
             model=[(1, 'I think a new student should register with a doctor in the first '
                        'week, because in week three nobody can see you.'),
                    (2, 'One thing I do is a long walk every Sunday morning. It is not '
                        'exercise exactly, but it gets me out of the room.'),
                    (3, 'I agree, but it is not because they are not trying. Students are poor, they sleep '
                        'badly and they eat at strange times.'),
                    (4, 'A college should make the first class later. Everything else is '
                        'advice, and advice is free because it costs nothing to give.')],
             selfcheck=['I used should and could for advice',
                        'I gave a reason after every piece of advice',
                        'I did not sound like I was giving an order'])],

    w1=dict(
        sub='At the clinic',
        skill=('can and should in a question', [
            'Can and should go straight in front of the person: Can I come?',
            'The verb after them is always plain: should I take, never *should I to take*.',
            'The question word comes first: What should I do?',
            'Never add do or does to a can or should question.']),
        guided=[
            ('I can come at four.', ['can', 'you', 'come', 'at four', 'again', 'on Wednesday'],
             'Can you come at four again on Wednesday?'),
            ('You should rest for two days.', ['what', 'should', 'I', 'do', 'about',
                                               'the pain'],
             'What should I do about the pain?'),
            ('The clinic is in Block D.', ['where', 'should', 'I', 'go', 'if', 'it cannot wait'],
             'Where should I go if it cannot wait?')],
        exam=[
            ('I cannot breathe easily.', ['can', 'you', 'breathe', 'easily', 'at night',
                                          'now'],
             'Can you breathe easily at night now?'),
            ('You should call before ten.', ['when', 'should', 'I', 'call', 'the clinic',
                                             'tomorrow'],
             'When should I call the clinic tomorrow?'),
            ('A new student must register.', ['who', 'should', 'register', 'with',
                                              'the health centre', 'first'],
             'Who should register with the health centre first?'),
            ('You can book online.', ['can', 'I', 'book', 'online', 'for', 'next week'],
             'Can I book online for next week?'),
            ('The nurse writes a sick note after seven days.',
             ['how long', 'should', 'I', 'wait', 'for', 'a sick note'],
             'How long should I wait for a sick note?'),
            ('I can see you on Wednesday.', ['which day', 'can', 'you', 'see', 'me',
                                             'this week'],
             'Which day can you see me this week?'),
            ('Students should sleep more in week three.',
             ['what', 'should', 'students', 'do', 'in', 'week three'],
             'What should students do in week three?')]),

    w2=dict(
        sub='At the clinic',
        to='reception@riversidehealth.uk',
        date='25/11/2025',
        subject='Appointment this week',
        target=68,
        scenario=['You have a bad cough and a pain in your chest since Saturday.',
                  'You have an exam on Thursday. Write to the health centre.'],
        bullets=['say who you are and that you are registered',
                 'say what the symptoms are and since when',
                 'ask for an appointment before Thursday'],
        skill=('Symptoms are facts, not a story', [
            'List the symptoms in one sentence. Two is already too many.',
            'Say since when. A doctor needs the day, not the feeling.',
            'Say why the time matters: an exam, a deadline, a journey.',
            'Ask for an appointment before a named day, not as soon as possible.']),
        model=['Dear Reception,', '',
               'My name is Ana Ruiz and I am registered with the health centre. My student '
               'number is 4071.',
               'I have a bad cough and a pain in my chest. It started on Saturday and it '
               'is not better.',
               'I have an exam on Thursday morning.',
               'Can I have an appointment before Thursday?', '',
               'Thank you,', 'Ana Ruiz'],
        notes=['The student number is there, because reception cannot find you without it.',
               'The symptoms are two facts and a date. No story.',
               'The exam explains why the day matters, in one short sentence.',
               'The request names a day, so the answer can be yes or no.'],
        frame=['# Start', 'Dear Reception,', '',
               '# Who you are', 'My name is ______________ and I am registered. My student '
               'number is ______________ .', '',
               '# Your symptoms and since when',
               'I have ______________ . It started on ______________ .', '',
               '# Why the day matters', 'I have ______________ on ______________ .', '',
               '# Your request — use Can I ...?',
               'Can I ______________ before ______________ ?', '',
               '# Finish', 'Thank you,', '______________']),

    w3=dict(
        sub='Staying well',
        prof='Dr Patel',
        target=80,
        question='Whose job is a student’s health — the student’s own, or '
                 'the college’s? Give one reason.',
        posts=[('Yusuf', 'm', 'It is the student’s job. We are not children. Nobody can '
                              'make me go to bed at eleven, and nobody should try.'),
               ('Mei', 'w', 'Partly the college. It built a timetable with a nine o’'
                            'clock start and a cafeteria that sells sugar, and then it '
                            'tells us to be healthy.')],
        skill=('Answer a whose question directly', [
            'The question asks whose. Say whose in your first sentence.',
            'Both can be partly true. Say which part belongs to whom.',
            'Use should for what each one ought to do.',
            'Eighty words is seven or eight short sentences.']),
        starters=['I agree with Mei, because ...',
                  'Yusuf is right that ...',
                  'The college should ...',
                  'The student should ...'],
        model=['I agree with Mei, but only partly. Health is the student’s job and '
               'the conditions are the college’s.',
               'Yusuf is right that nobody can make a grown student go to bed early. That part '
               'belongs to the student.',
               'But the college builds the timetable and chooses what the cafeteria '
               'sells, and those two things create the week we live in. Nobody chooses '
               'a nine o’clock start on their own.',
               'The college should fix the things only it can fix. Then the advice it '
               'gives us is worth listening to.'],
        model_words=89,
        frame=['# Whose job — answer in the first sentence',
               'I agree with ______________ . I think health is ______________ .', '',
               '# What belongs to the student',
               'The student should ______________ .', '',
               '# What belongs to the college',
               'The college should ______________ , because ______________ .']),

    gram=dict(
        title='can and cannot · should · orders · how-words ending in -ly',
        headers=['Form', 'Example'],
        rows=[['can / cannot', 'I can come at four. I cannot breathe easily.'],
              ['should / should not', 'You should rest. You should not study until midnight.'],
              ['question', 'Can I book online? What should I do?'],
              ['short answer', 'Yes, I can. No, you should not.'],
              ['order form', 'Rest. Drink water. Do not wait.'],
              ['how-words in -ly', 'He listened carefully. She speaks quickly.'],
              ['the odd ones', 'good → well, fast → fast, hard → hard']],
        notes=['Can, cannot and should never change their form, and the verb after them is '
               'always plain. That makes them the easiest structures in the book and the '
               'most useful in the Speaking test.',
               'An order form has no subject at all: Rest. Drink water. It is the normal '
               'form for an instruction, and in English it is not rude.',
               'A how-word usually goes after the verb or after the object: she '
               'read the notice carefully, not *she read carefully the notice*.'],
        watch='Never say *I can to come* or *Do you can come?* Can makes its own question '
              'and takes a plain verb. The same is true of should.',
        ex=[('Write can, cannot or should.', [
            'I __________ breathe easily, so I do not need a doctor.',
            'You __________ rest for two days.',
            '__________ I book an appointment online?',
            'She __________ come on Tuesday, because she has a class.',
            'Students __________ register in the first month.',
            'What __________ I do about the pain?'],
            ['can', 'should', 'Can', 'cannot', 'should', 'should']),
            ('Write the -ly word.', [
                'He listened __________ (careful).',
                'She speaks very __________ (quick).',
                'Breathe __________ (slow).',
                'I sleep __________ (bad) in a new bed.',
                'The doctor explained it __________ (clear).',
                'He plays football __________ (good).'],
             ['carefully', 'quickly', 'slowly', 'badly', 'clearly', 'well']),
            ('Write the order form of the verb.', [
                'You should rest.', 'You should drink water.',
                'You should not wait.', 'You should call before ten.'],
             ['Rest.', 'Drink water.', 'Do not wait.', 'Call before ten.'])],
        bas='Can and should are gifts in Build a Sentence. The moment one of them is in '
            'the tiles you know the shape of the whole sentence: question word, then can '
            'or should, then the person, then a plain verb.'),

    sound=dict(
        title='Weak forms, and the words that disappear',
        intro='English squeezes its small words almost out of existence, and that is the '
              'single biggest reason a listening test sounds faster than real life. The '
              'small words are not important for meaning, so the language does not spend '
              'time on them.',
        rows=[('can', ['I can come', 'can you see'],
               'Weak and short. It sounds like /kən/, not like the word can for soup.'),
              ('cannot', ['I cannot come', 'I can’t come'],
               'Always strong and long. This is how you hear the difference.'),
              ('should', ['you should rest'],
               'Weak in the middle of a sentence; strong in a short answer.'),
              ('to', ['go to bed', 'try to sleep'],
               'Almost always /tə/. It is rarely the full word.'),
              ('and', ['rest and sleep', 'water and food'],
               'Usually just /ən/. Rest-n-sleep.'),
              ('of', ['a lot of water', 'two of them'],
               'Usually just /əv/ or even /ə/. A lotta water.')],
        hear=[('Do you hear can or cannot?', 'cannot'),
              ('Do you hear can or cannot?', 'can'),
              ('Do you hear should or shouldn’t?', 'shouldn’t'),
              ('Do you hear to or two?', 'to'),
              ('Do you hear and or an?', 'and'),
              ('Do you hear a lot of or a lotta?', 'a lot of')],
        say=['Say both and feel the difference: I can come / I cannot come.',
             'Say with weak forms: a lot of water, go to bed, rest and sleep.',
             'Say five pieces of advice with should, each with a reason.',
             'Say the parts of the body from head to foot, out loud.']),

    builder=dict(
        title='Writing a list that works in a sentence',
        rule='Three things in a list take commas between them and and before the last one: '
             'rest, water and sleep. The items in the list must all be the same kind of '
             'word — three nouns, or three verbs, but never a mix.',
        pairs=[['Rest, drinking water and you should sleep.', 'Rest, drink water and sleep.'],
               ['sleep, water, food', 'Sleep, water and food do the work.'],
               ['You should rest and water.', 'You should rest and drink water.'],
               ['He listened carefully, clear and slow.',
                'He listened carefully, clearly and slowly.'],
               ['Bring your card, address and to register.',
                'Bring your card and your address, and register.']],
        watch='Keep the list in one shape. If the first item is a verb, every item is a '
              'verb. This is the commonest reason a long sentence stops making sense '
              'halfway through.',
        ex=[('You should rest, water and sleeping.', 'You should rest, drink water and sleep.'),
            ('She spoke quickly, clear and careful.',
             'She spoke quickly, clearly and carefully.'),
            ('Bring your card, your address and registering.',
             'Bring your card and your address, and register.'),
            ('Email me, go to the centre and the sick note.',
             'Email me, go to the centre and send the sick note.'),
            ('Sleep, water and food do the work.', 'yes — this one is already correct'),
            ('Do not wait, do not study late and resting.',
             'Do not wait, do not study late and rest.')]),

    typing=dict(
        title='Typing under a clock',
        intro='In the real test you type an email in seven minutes and a discussion post '
              'in ten. This week you stop practising keys and start practising the clock.',
        keys='qwertyuiopasdfghjklzxcvbnm',
        caption='The whole keyboard, with nothing highlighted. From here on the work is '
                'not where the keys are. It is typing a real sentence while a clock runs '
                'and still looking at the screen, not at your hands.',
        drill=['I have a bad cough and a pain in my chest. It started on Saturday.',
               'Can I have an appointment before Thursday? I have an exam that morning.',
               'You should rest, drink water and go to bed early for four nights.'],
        target=16),

    study=dict(
        title='What to do when you do not understand',
        intro='Everybody meets a page they cannot follow. The difference between students '
              'is not whether it happens but what they do in the next five minutes. Most '
              'read the same paragraph again, slower, four times. That almost never works.',
        steps=['Read the whole thing to the end first, even the parts you do not follow. '
               'The end often explains the middle.',
               'Say the paragraph out loud in one sentence. If you cannot, you have found '
               'the exact place where it stopped making sense.',
               'Go back one paragraph, not one line. The problem is usually earlier than '
               'it feels.',
               'Write your question down as a question, not as a feeling. Not this is '
               'hard, but why does the writer say the reason is not bad luck?',
               'Take that written question to the tutor hour. A specific question gets a '
               'specific answer in two minutes.'],
        tip='Reading the same line four times feels like work and is almost always wasted. '
            'The second reading is useful. The third and fourth are a way of avoiding the '
            'moment when you have to admit you need help.'),

    rev=dict(
        vocab=[('a time the doctor keeps for you', 'appointment'),
               ('the paper the doctor writes for medicine', 'prescription'),
               ('the shop that gives you the medicine', 'pharmacy'),
               ('a sign that something is wrong with you', 'symptom'),
               ('what the doctor does to make you well', 'treatment'),
               ('the room where you sit before the doctor', 'waiting room'),
               ('the paper that says you were too ill', 'sick note'),
               ('able to hurt you', 'dangerous'),
               ('thinking about danger before you act', 'careful'),
               ('a good thing that comes from something', 'benefit'),
               ('one of the things that make something happen', 'factor'),
               ('a way of doing something', 'method')],
        gram=[('I __________ breathe easily. (be able)', 'can'),
              ('You __________ rest for two days. (advice)', 'should'),
              ('__________ I book an appointment online?', 'Can'),
              ('He listened __________ (careful).', 'carefully'),
              ('She speaks very __________ (quick).', 'quickly'),
              ('I sleep __________ (bad) in a new bed.', 'badly'),
              ('He plays football __________ (good).', 'well'),
              ('__________ water. (order form of drink)', 'Drink')],
        mini=[
            ('For an appointment on the same day you call between',
             ('8.00 and 10.00', '8.00 and 18.00', '10.00 and 12.00', 'any time'), 0,
             'Call 0800 114 114 between 8.00 and 10.00 for the same day.'),
            ('The nurse does not give the man a sick note because',
             ('he is not registered', 'it is only a cough', 'the exam is on Thursday',
              'he came too late'), 1,
             'Not for a cough. We only write one after seven days.'),
            ('The waiting room fills up in',
             ('week one', 'week two', 'week three', 'week ten'), 2,
             'In the third week of the first term the waiting room fills up.'),
            ('Which sentence is correct?',
             ('I can to come at four.', 'Do you can come at four?', 'I can come at four.',
              'I can coming at four.'), 2,
             'Can takes a plain verb and makes its own question.'),
            ('Which is the -ly word from good?',
             ('goodly', 'well', 'better', 'goodly done'), 1,
             'Good is an adjective; its how-word is well.'),
            ('The two pieces of advice in the talk are',
             ('medicine and rest', 'register early and sleep in week three',
              'eat more and drink water', 'see a doctor and take medicine'), 1,
             'Register with us in your first week ... in week three, go to bed early.')]),

    tip='In the Speaking section the advice questions are the ones to prepare. Every '
        'interview has one, and the shape of a good answer never changes: should, then the '
        'advice, then because and a reason. Practise that shape until it arrives without '
        'thinking.',
)
