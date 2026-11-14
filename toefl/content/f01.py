# -*- coding: utf-8 -*-
"""Foundation Unit 1 · People, Names and the First Week.

Grammar: be, subject pronouns, a/an, plural -s, and the word order of a
statement. Question spine: Am / Is / Are ...?
"""

UNIT = dict(
    n=1, vol='F', level='A2',
    title='People, Names and the First Week',
    icons=('speech', 'book', 'globe'),
    subs=('Meeting your class', 'The student card', 'Where people are from'),
    grammar='be and subject pronouns · a and an · plural -s',
    field='people, names, places',
    names=('Ana', 'Ruiz', 'Riverside', 'Dale', 'Brazil', 'Yusuf', 'Demir',
           'Mei', 'Chen', 'Turkey', 'Poland', 'Block', 'Kenya', 'Peru',
           'Turkish', 'Arabic', 'Spanish', 'Quechua', 'Japan', 'Robert',
           'Victor', 'English', 'Hungary', 'Iceland', 'Spain', 'Latin', 'China',
           'America'),
    opener_line='Three sub-topics, three cycles in every skill. Everything in this unit '
                'comes back in the review at the end, and again in Unit 2.',
    candos=[
        'say and spell my name, my country and my student number',
        'find one fact in a short notice or an email',
        'understand a short text about people and where they are from',
        'follow a short conversation between two students who have just met',
        'ask and answer simple questions with am, is and are',
        'write a short email to a college office and a short post about myself'],

    core=[
        ('name', 'what people call you'),
        ('age', 'how old you are'),
        ('old', 'a person of many years, or a thing from long ago'),
        ('young', 'a person of few years'),
        ('country', 'a land with its own government, like Peru'),
        ('city', 'a very big town'),
        ('town', 'a place with houses and shops, smaller than a city'),
        ('village', 'a very small town in the countryside'),
        ('live', 'to have your home in a place'),
        ('speak', 'to say words to somebody'),
        ('language', 'English, Arabic and Spanish are languages'),
        ('friend', 'a person you like and see often'),
        ('classmate', 'a person in the same class as you'),
        ('meet', 'to see and talk to somebody for the first time'),
        ('welcome', 'a word you say to a person who arrives'),
        ('introduce', 'to tell people who somebody is'),
        ('spell', 'to say the letters of a word one by one'),
        ('letter', 'A, B and C are letters'),
        ('number', 'one, two and three are numbers'),
        ('address', 'where your house is: the street and the town'),
        ('email', 'a message you send from a computer or a phone'),
        ('phone', 'the thing you call people with'),
        ('married', 'with a husband or a wife'),
        ('single', 'one only, or with no husband or wife')],
    campus=[
        ('student card', 'the small card that shows you are a student here'),
        ('campus', 'all the buildings of a college in one place'),
        ('department', 'one part of a college, for one subject'),
        ('course', 'the subject you study for a year or more'),
        ('registration', 'the day you put your name on the college list'),
        ('lecture', 'a teacher speaks and many students listen'),
        ('tutorial', 'a small class with only a few students'),
        ('classroom', 'the room where a class happens'),
        ('corridor', 'the long space between the rooms of a building'),
        ('noticeboard', 'the board on a wall with papers on it'),
        ('student number', 'the number the college gives you'),
        ('induction', 'the first talk that tells new students what to do')],
    again=['name', 'country', 'spell', 'student card', 'campus', 'department',
           'meet', 'language'],
    vocab_talk=[
        'What is your full name, and how do you spell your family name?',
        'Which city or town are you from, and is it big or small?',
        'How many languages are there in your family?',
        'Who is the first person you meet on a normal day?'],

    # ---------------------------------------------------------- reading 1 --
    r1=dict(
        sub='Meeting your class',
        skill=('Count the dashes', [
            'Each dash is one missing letter. Count them before you write.',
            'Look at the word in front. Twelve student- must be more than one, so it is s.',
            'Most of the missing letters in this unit are -s, -es or -ies.',
            'Never write a whole word. You finish one; you do not replace it.']),
        guided_text='My name is Ana Ruiz. I am a student at Riverside College. In my class '
                    'there are twelve student-. We are from eight different countr---. Two '
                    'student- in my class are from Brazil. My teach-- is Mr Dale. He speak- '
                    'Spanish and English.',
        guided_hint='1  student-  →  s  (students)',
        guided=['s', 'ies', 's', 'er', 's'],
        exam_text='Welcome to Riverside College. On your first day you meet the other '
                  'student- in your group. There are fifteen student- in Group B and they '
                  'are from nine countr---. Your teach-- gives you a student card with your '
                  'name and your student number on it. The card open- the door of the '
                  'computer room- and the classroom. Keep it with you. The office in Block C '
                  'open- at nine o’clock every day and it close- at five. The staff '
                  'there speak- several language-.',
        exam=['s', 's', 'ies', 'er', 's', 's', 's', 's', 's', 's']),

    # ---------------------------------------------------------- reading 2 --
    r2=dict(
        sub='The student card',
        skill=('The answer is on the page', [
            'Read the question first. Then look for the same word on the page.',
            'Numbers, times and days are easy to find. Find them first.',
            'If two answers look right, one of them is not on the page at all.',
            'Do not use what you know about your own college. Use this page.']),
        docs=[
            ('notice', 'Riverside College — Welcome Week', [
                '# Where to go on Monday',
                'New students: Hall 1, Block A, 9.30',
                'Students in the second year: Hall 2, Block A, 11.00',
                '# Your student card',
                '* Get your card from the Student Office, Block C.',
                '* The office is open from 9.00 to 5.00 every day.',
                '* Bring one photo and your letter from the college.',
                '* The first card is free. A second card is not free.',
                '# Help',
                '* Ask any student with a yellow shirt. They are here to help.'], 'notice'),
            ('email', 'new.students@riverside.edu', 'a.ruiz@riverside.edu',
             '14/09/2025', 'My student number',
             ['Dear Student Office,', '',
              'My name is Ana Ruiz and I am a new student in the Business Department.',
              'I am in Group B. I am not sure about my student number.',
              'Is it on my student card or in the letter from the college?',
              '', 'Thank you,', 'Ana'])],
        guided=[
            ('Where do new students go on Monday?',
             ('Hall 2', 'Hall 1', 'Block C', 'the office'), 1,
             'The notice says New students: Hall 1. Hall 2 is for the second year.'),
            ('When does the Student Office close?',
             ('9.00', '11.00', '5.00', '10.00'), 2,
             'Open from 9.00 to 5.00. The 9.00 is when it opens.'),
            ('Which card is free?',
             ('every card', 'the first card', 'the second card', 'no card'), 1,
             'The first card is free. A second card is not free.'),
            ('What is Ana’s department?',
             ('Business', 'English', 'Science', 'Art'), 0,
             'Her email says a new student in the Business Department.')],
        exam=[
            ('What do students in the second year do at 11.00?',
             ('get a card', 'go to Hall 2', 'go to Block C', 'meet Ana'), 1,
             'Students in the second year: Hall 2, Block A, 11.00.'),
            ('What do you bring to the Student Office?',
             ('a photo and a letter', 'a photo only', '10 dollars', 'a yellow shirt'), 0,
             'Bring one photo and your letter from the college.'),
            ('Who are the students in yellow shirts?',
             ('new students', 'teachers', 'students here to help', 'students in year two'), 2,
             'Ask any student with a yellow shirt. They are here to help.'),
            ('Which group is Ana in?',
             ('Group A', 'Group B', 'Group C', 'Hall 1'), 1,
             'I am in Group B, in the second line of her email.'),
            ('What is Ana not sure about?',
             ('her group', 'her department', 'her student number', 'her photo'), 2,
             'I am not sure about my student number.'),
            ('Where is the Student Office?',
             ('Block A', 'Block B', 'Block C', 'Hall 1'), 2,
             'Collect your card from the Student Office, Block C.')]),

    # ---------------------------------------------------------- reading 3 --
    r3=dict(
        sub='Where people are from',
        title='One Class, Nine Countries',
        words=111,
        paras=[
            'Group B is a class of fifteen students at Riverside College. The students are '
            'from nine different countries. Four of them are from this city. The others are '
            'from Brazil, Turkey, Poland, Kenya, Peru and three other countries.',
            'In the class there are twenty-one languages. Many students speak two or three. '
            'Yusuf Demir speaks Turkish, Arabic and English. Mei Chen speaks three languages '
            'too. Every student in the room speaks English. It is the only language of '
            'the whole class.',
            'This is normal in a college now. A class is not one country. It is a small map '
            'of the world, and English is the road between the parts of it.'],
        skill=('Find the number, then the word', [
            'Short texts like this one carry the answers in the numbers.',
            'Underline every number as you read. There are only a few.',
            'The last paragraph is the writer’s opinion, not a fact from the first two.',
            'If a question asks about every student, look for the word every.']),
        guided=[
            ('How many students are in Group B?',
             ('nine', 'fifteen', 'four', 'twenty-one'), 1,
             'A class of fifteen students. Nine is the number of countries.'),
            ('How many countries are the students from?',
             ('four', 'three', 'nine', 'fifteen'), 2,
             'The students are from nine different countries.'),
            ('How many students are from this city?',
             ('four', 'nine', 'three', 'two'), 0,
             'Four of them are from this city.'),
            ('How many languages speaks Yusuf Demir? (Yusuf speaks how many?)',
             ('one', 'two', 'three', 'four'), 2,
             'Turkish, Arabic and English is three languages.')],
        exam=[
            ('Which language does every student speak?',
             ('Turkish', 'Arabic', 'Spanish', 'English'), 3,
             'Every student in the room speaks English.'),
            ('How many languages are there in the class?',
             ('nine', 'fifteen', 'twenty-one', 'three'), 2,
             'In the class there are twenty-one languages.'),
            ('Mei Chen speaks',
             ('one language', 'two languages', 'three languages', 'nine languages'), 2,
             'Mei Chen speaks three languages too. Too means the same as Yusuf.'),
            ('In the last paragraph a class today is',
             ('one country', 'a small map of the world', 'always difficult', 'very quiet'), 1,
             'It is a small map of the world, in the last paragraph.'),
            ('Which country is NOT in the passage?',
             ('Peru', 'Kenya', 'Japan', 'Poland'), 2,
             'Brazil, Turkey, Poland, Kenya and Peru are there. Japan is not.'),
            ('Many students in the class speak',
             ('only English', 'two or three languages', 'no English', 'nine languages'), 1,
             'Many students speak two or three.'),
            ('Which sentence says the big idea?',
             ('A class is difficult.', 'English is the road.', 'There are nine countries.',
              'Four students are from this city.'), 1,
             'The last line says English is the road between the parts of it.')]),

    # --------------------------------------------------------- listening 1 --
    l1=dict(
        sub='Meeting your class',
        caption='Two new students meet in the corridor',
        skill=('Listen for the name and the country', [
            'The first thing people say is a name. Write it down at once.',
            'People spell names on the phone and in a first meeting. Learn the letters.',
            'Where are you from? is the second question in almost every first meeting.',
            'If you miss the name, you can ask: Sorry, how do you spell that?']),
        warm=[
            ('Hello. Are you a new student?',
             ('In Block C.', 'Yes, I am.', 'It is nine o’clock.', 'Two languages.'), 1,
             'Are you ...? takes Yes, I am. The other three answer other questions.'),
            ('What is your name?',
             ('From Peru.', 'It is a tutorial.', 'Ana Ruiz.', 'Yes, please.'), 2,
             'The question asks for a name, so the answer is a name.'),
            ('How do you spell that?',
             ('R-U-I-Z.', 'In the corridor.', 'I am fine.', 'Fifteen.'), 0,
             'Spell means say the letters, so the answer is letters.')],
        script=[
            ('Woman', 'Hello. Are you in Group B?'),
            ('Man', 'Yes, I am. I am Yusuf.'),
            ('Woman', 'Nice to meet you, Yusuf. I am Ana.'),
            ('Man', 'Sorry, Anna with two n?'),
            ('Woman', 'No, one n. A-N-A.'),
            ('Man', 'Thank you. Where are you from, Ana?'),
            ('Woman', 'From Peru. And you?'),
            ('Man', 'I am from Turkey. The classroom is this way, I think.'),
            ('Woman', 'It is room 12, so it is at the end of this corridor.')],
        items=[
            ('Which group are the two students in?',
             ('Group A', 'Group B', 'Group C', 'room 12'), 1,
             'The woman asks Are you in Group B? and the man says Yes, I am.'),
            ('How does Ana spell her name?',
             ('A-N-N-A', 'A-N-A', 'A-N-E', 'A-M-A'), 1,
             'She says No, one n. A-N-A.'),
            ('Where is Ana from?',
             ('Turkey', 'Brazil', 'Peru', 'this city'), 2,
             'From Peru is her answer to Where are you from?'),
            ('Where is Yusuf from?',
             ('Peru', 'Turkey', 'Poland', 'Kenya'), 1,
             'I am from Turkey.'),
            ('Which room is the class in?',
             ('room 2', 'room 12', 'room 20', 'Block C'), 1,
             'It is room 12, at the end of the conversation.'),
            ('Where is the classroom?',
             ('in Block C', 'at the end of the corridor', 'next to the office',
              'on the noticeboard'), 1,
             'It is at the end of this corridor.')]),

    # --------------------------------------------------------- listening 2 --
    l2=dict(
        sub='The student card',
        caption='An announcement about student cards',
        poster=['STUDENT CARDS', 'Block C · Student Office',
                'Monday to Friday 9.00 – 5.00'],
        skill=('Listen for where and when', [
            'An announcement is one person speaking to many. It is slower than a talk.',
            'The important words are a place and a time. Wait for them.',
            'Numbers often come twice: 9.00 ... from nine in the morning.',
            'The last line of an announcement is usually what you must do.']),
        warm=[
            ('Good morning, everyone.',
             ('Good morning.', 'In Block C.', 'Six students.', 'Yes, it is free.'), 0,
             'A greeting takes a greeting back.'),
            ('Is the office open on Saturday?',
             ('At nine.', 'No, it is not.', 'In Hall 1.', 'My student number.'), 1,
             'Is it ...? takes Yes, it is or No, it is not.'),
            ('Where is the Student Office?',
             ('At five.', 'It is free.', 'In Block C.', 'Two photos.'), 2,
             'Where asks for a place, so the answer is a place.')],
        script=[('Woman', 'Good morning, everyone, and welcome to Riverside College. This is '
                          'a short announcement about your student card. The Student Office '
                          'is in Block C. It is open from nine in the morning until five, '
                          'Monday to Friday. It is not open at the weekend. Bring one photo '
                          'and the letter from the college. Your first card is free.')],
        items=[
            ('Where is the Student Office?',
             ('Block A', 'Block B', 'Block C', 'Hall 1'), 2,
             'The Student Office is in Block C.'),
            ('When does the office open?',
             ('at five', 'at nine', 'at the weekend', 'on Saturday'), 1,
             'Open from nine in the morning until five.'),
            ('Is the office open on Saturday?',
             ('yes, all day', 'yes, in the morning', 'no', 'only for new students'), 2,
             'It is not open at the weekend.'),
            ('What do students bring?',
             ('one photo and a letter', 'two photos', 'ten dollars', 'a student card'), 0,
             'Bring one photo and the letter from the college.'),
            ('What is the first card?',
             ('not free', 'free', 'in Block A', 'for teachers'), 1,
             'Your first card is free.')]),

    # --------------------------------------------------------- listening 3 --
    l3=dict(
        sub='Where people are from',
        caption='A short talk on the first day of the course',
        board=['NAMES', 'first name · family name',
               'In this class: 15 students', '9 countries'],
        skill=('A talk has one big idea', [
            'The first sentence of a talk usually says what the talk is about.',
            'The board shows you the words you will hear. Read it before you listen.',
            'A talk gives examples. The example is not the big idea.',
            'The last sentence often says the big idea again in other words.']),
        warm=[
            ('Welcome to the course.',
             ('Thank you.', 'In nine countries.', 'It is a tutorial.', 'Two photos.'), 0,
             'Welcome takes Thank you.'),
            ('Are you ready?',
             ('In Block C.', 'Yes, I am.', 'My family name.', 'At nine.'), 1,
             'Are you ...? takes Yes, I am.'),
            ('What is a family name?',
             ('It is the name of your family.', 'At five o’clock.', 'Nine.',
              'In the corridor.'), 0,
             'The question asks what a family name is.')],
        script=[('Man', 'Good morning. I am Mr Dale and this is your first tutorial. Before '
                        'we start the course, we start with names, because a name is the '
                        'first word you give a person. In English a first name comes before '
                        'a family name. My first name is Robert and my family name is Dale, '
                        'so I am Robert Dale. In this room there are fifteen students from '
                        'nine countries. Not every country puts the names in this order. So '
                        'please tell me which of your two names you want me to use.')],
        items=[
            ('Who is the speaker?',
             ('a student', 'a teacher', 'an office worker', 'a new student'), 1,
             'He says I am Mr Dale and this is your first tutorial.'),
            ('What is the talk about?',
             ('the course', 'student cards', 'names', 'countries'), 2,
             'We start with names, because a name is the first word you give a person.'),
            ('In English, which name comes first?',
             ('the family name', 'the first name', 'both', 'neither'), 1,
             'A first name comes before a family name.'),
            ('What is the teacher’s first name?',
             ('Dale', 'Robert', 'Mr', 'Riverside'), 1,
             'My first name is Robert and my family name is Dale.'),
            ('How many students are in the room?',
             ('nine', 'twelve', 'fifteen', 'twenty-one'), 2,
             'There are fifteen students from nine countries.'),
            ('What does the teacher ask the students to do?',
             ('spell their names', 'say which name to use', 'write their country',
              'bring a photo'), 1,
             'Please tell me which of your two names you want me to use.')]),

    # ------------------------------------------------------------ speaking --
    sp=[
        dict(sub='Meeting your class',
             focus='the sounds of the letters A, E and I',
             skill=('Say the whole sentence', [
                 'You hear one sentence and you say it once. There is no time to prepare.',
                 'Start as the beep ends. A long silence scores nothing.',
                 'Short and complete beats long and half-finished.',
                 'If you make a mistake, keep going. Do not start again.']),
             repeat=['My name is Ana.', 'I am a student.', 'I am from Peru.',
                     'This is my first day at college.',
                     'There are fifteen students in my class.',
                     'My classmates are from nine different countries.',
                     'I speak two languages and I study English here.'],
             theme='you and where you are from',
             qs=['Thank you for talking to me. First, what is your full name?',
                 'And where are you from? Tell me a little about the place.',
                 'People live in villages, towns and cities. Which one is your home, and '
                 'is that a good place to live?',
                 'Finally, how many languages are there in your family, and which one do '
                 'you speak at home?'],
             frames=['My full name is ... . My family name is ... .',
                     'I am from ... . It is a ... in the north of ... .',
                     'My home is a ... . It is a good place to live because ... .',
                     'In my family we speak ... . At home I speak ... .'],
             model=[(1, 'My full name is Ana Ruiz. Ana is my first name and Ruiz is my '
                        'family name.'),
                    (2, 'I am from Peru. My home is a small town near the sea. It is quiet '
                        'and the people there are friendly.'),
                    (3, 'My home is a town. It is a good place to live because it is small, '
                        'so I know many people, but it is not far from a city.'),
                    (4, 'In my family we speak two languages. At home I speak Spanish with '
                        'my parents, and I speak English at college.')],
             selfcheck=['I started speaking straight away',
                        'I finished every sentence I began',
                        'I gave a reason after my opinion']),
        dict(sub='The student card',
             focus='saying letters and numbers clearly',
             skill=('Letters and numbers', [
                 'Say numbers one by one: 2-0-4-1, not two thousand and forty-one.',
                 'Group the letters in threes when you spell: R-U-I, Z.',
                 'Say the letter twice if it is not clear: B, B for book.',
                 'Slow down for a number. Nobody speaks fast and clearly at the same time.']),
             repeat=['My number is 4071.', 'My card is here.', 'I get it today.',
                     'The office is open until five.',
                     'I bring one photo and my letter.',
                     'My student number is on the card.',
                     'I spell my family name slowly and clearly.'],
             theme='cards, numbers and papers',
             qs=['To start, what is your student number or your phone number?',
                 'How do you spell your family name? Say it letter by letter.',
                 'Some people keep every card and paper. Others lose them. Which are you, '
                 'and why?',
                 'Finally, is a card on a phone good or bad? Tell me what you think.'],
             frames=['My number is ... . I say it one number at a time.',
                     'My family name is ... . That is ..., ..., ... .',
                     'I always ... , because ... .',
                     'I think a card on a phone is ... , because ... .'],
             model=[(1, 'My student number is 4-0-7-1. I say it one number at a time because '
                        'people do not hear it the first time.'),
                    (2, 'My family name is Ruiz. That is R, U, I, Z. The Z is at the end.'),
                    (3, 'I keep every paper. I put my card in the same pocket every '
                        'day, because then I never look for it.'),
                    (4, 'I think a card on a phone is good, because my phone is always in '
                        'my hand. But a card in my pocket is safe when the phone is off.')],
             selfcheck=['I said every number one at a time',
                        'I spelled my name slowly and clearly',
                        'I answered the question, not a different one']),
        dict(sub='Where people are from',
             focus='word stress in country and language names',
             skill=('One strong part in every word', [
                 'Every long word has one strong part: TUR-key, bra-ZIL.',
                 'Put the strong part a little louder and a little longer.',
                 'A wrong strong part is harder to understand than a wrong sound.',
                 'Say the country and the language together: Turkey, Turkish.']),
             repeat=['I am from Peru.', 'My country is small.',
                     'We speak Spanish there.',
                     'The big city is far from my town.',
                     'Many people here speak two languages.',
                     'My first language is not English.',
                     'I introduce my country to my classmates here.'],
             theme='countries and languages',
             qs=['First, which country are you from, and what is the language there?',
                 'Is your country big or small? Tell me about one part of it.',
                 'In some countries people speak many languages, and in others only one. '
                 'Which is better for a country, do you think?',
                 'Finally, is English important in your country? Say why or why not.'],
             frames=['I am from ... and the language there is ... .',
                     'My country is ... . In the north there is ... .',
                     'I think ... is better for a country, because ... .',
                     'English is ... important in my country, because ... .'],
             model=[(1, 'I am from Peru and the language there is Spanish. Many people also '
                        'speak Quechua.'),
                    (2, 'My country is not very big, but it is not small. In the east there '
                        'is a big green forest and in the west there is the sea.'),
                    (3, 'I think many languages is better for a country, because every '
                        'language is a different way to see things. But it is not easy for '
                        'the schools.'),
                    (4, 'English is very important in my country, because the work in the '
                        'cities is with people from other countries.')],
             selfcheck=['I made one part of each long word strong',
                        'I said the country and the language, not only one',
                        'I gave an example, not only an opinion'])],

    # ------------------------------------------------------------- writing --
    w1=dict(
        sub='Meeting your class',
        skill=('Questions put be in front', [
            'A statement is: You are a student. A question is: Are you a student?',
            'With am, is and are, the verb jumps in front of the person.',
            'What, where and how come first of all: Where are you from?',
            'Put the question mark at the end. It is part of the answer.']),
        guided=[
            ('I am a new student.', ['are', 'you', 'a', 'student'], 'Are you a student?'),
            ('My name is Ana.', ['what', 'is', 'your', 'name'], 'What is your name?'),
            ('I am from Peru.', ['where', 'are', 'you', 'from'], 'Where are you from?')],
        exam=[
            ('There are fifteen students.', ['how', 'many', 'students', 'are', 'there'],
             'How many students are there?'),
            ('The office is in Block C.', ['where', 'is', 'the', 'office'],
             'Where is the office?'),
            ('My classmates are friendly.', ['are', 'your', 'classmates', 'friendly'],
             'Are your classmates friendly?'),
            ('I am in Group B.', ['which', 'group', 'are', 'you', 'in'],
             'Which group are you in?'),
            ('The card is free.', ['is', 'the', 'card', 'free'], 'Is the card free?'),
            ('She is from Turkey.', ['is', 'she', 'from', 'Turkey'], 'Is she from Turkey?'),
            ('My teacher is Mr Dale.', ['who', 'is', 'your', 'teacher'],
             'Who is your teacher?')]),

    w2=dict(
        sub='The student card',
        to='student.office@riverside.edu',
        date='15/09/2025',
        subject='My student card',
        target=36,
        scenario=['You are a new student at Riverside College. You are in Group B.',
                  'You do not have your student card. Write to the Student Office.'],
        bullets=['say who you are and which group you are in',
                 'say that you do not have your card',
                 'ask when the office is open'],
        skill=('Three bullets, three sentences', [
            'Every bullet point is one mark. Answer all three.',
            'One sentence for each bullet is enough at this level.',
            'Start with Dear and finish with your name.',
            'Ask your question with a question mark at the end.']),
        model=['Dear Student Office,', '',
               'My name is Ana Ruiz and I am a new student in Group B.',
               'I am not sure about my student card, because I do not have it.',
               'When is your office open?', '',
               'Thank you,', 'Ana Ruiz'],
        notes=['It answers all three bullet points, in the same order.',
               'Every sentence is short and complete. Nothing is half-finished.',
               'The question is a real question, with the right word order and a question mark.',
               'It has a greeting at the top and a name at the bottom.'],
        frame=['# Start', 'Dear Student Office,', '',
               '# Who you are', 'My name is ______________ and I am ______________ .', '',
               '# What is wrong', 'I ______________ my student card.', '',
               '# Your question — remember: question word, then is or are',
               'When ______________ your office open?', '',
               '# Finish', 'Thank you,', '______________']),

    w3=dict(
        sub='Where people are from',
        prof='Mr Dale',
        target=40,
        question='Our class is from nine different countries. Is it better to study with '
                 'people from many countries, or with people from your own country? Give '
                 'one reason.',
        posts=[('Yusuf', 'm', 'Many countries is better. In my group there are five languages. I '
                         'listen to English all day, because English is the only language we '
                         'all speak.'),
               ('Mei', 'w', 'I am not sure. It is good for my English, but it is not easy. '
                       'Sometimes I am tired and I want to speak my own language.')],
        skill=('Say what you think, then why', [
            'Sentence one: your opinion. Sentence two: your reason.',
            'Use because. It is the most useful word on this page.',
            'Say one thing about another student’s post. Agree or do not agree.',
            'Short sentences are fine. Half sentences are not.']),
        starters=['I agree with Yusuf, because ...',
                  'I am not sure, because ...',
                  'In my country ...',
                  'For me, the best thing is ...'],
        model=['I agree with Yusuf. Many countries is better for me, because I speak English '
               'every hour of the day.',
               'In my own country I speak English only in the classroom.',
               'Mei is right that it is hard work, but it is good hard work.'],
        model_words=44,
        frame=['# Your opinion', 'I agree with ______________ . I think ______________ .', '',
               '# Your reason — use because',
               'I think this because ______________ .', '',
               '# One more sentence about your own country',
               'In my country ______________ .']),

    # ------------------------------------------------------------- grammar --
    gram=dict(
        title='be and subject pronouns · a and an · plural -s',
        headers=['Form', 'Example'],
        rows=[['I + am', 'I am a student.'],
              ['he / she / it + is', 'She is from Peru.'],
              ['you / we / they + are', 'They are in Group B.'],
              ['negative', 'He is not in my class.'],
              ['question', 'Are you a new student?'],
              ['a / an', 'a student, a college, an office, an email'],
              ['plural -s', 'one student, two students; one class, two classes']],
        notes=['There are only three forms of be in the present: am, is and are. Learn which '
               'person takes which one and half of the grammar of this unit is done.',
               'A question is made by putting am, is or are in front of the person. Nothing '
               'else moves: You are from Peru becomes Are you from Peru?',
               'Use an, not a, in front of a, e, i, o and u: an office, an email, an hour. '
               'It is about the sound at the start of the word.'],
        watch='Never say *I are* or *He am*. And never leave be out: *I student* is not a '
              'sentence in English, even though it is a sentence in many other languages.',
        ex=[('Write am, is or are.', [
            'I __________ a new student.',
            'She __________ from Brazil.',
            'They __________ in the corridor.',
            'You __________ in Group B.',
            '__________ he your teacher?',
            'We __________ not in Hall 1.'],
            ['am', 'is', 'are', 'are', 'Is', 'are']),
            ('Write a or an.', [
                '__________ student', '__________ office', '__________ email',
                '__________ classroom', '__________ hour', '__________ department'],
             ['a', 'an', 'an', 'a', 'an', 'a']),
            ('Make a question.', [
                'You are from Kenya.', 'She is a teacher.', 'They are in my class.',
                'It is free.'],
             ['Are you from Kenya?', 'Is she a teacher?', 'Are they in my class?',
              'Is it free?'])],
        bas='In the real test, at least seven of the ten Build a Sentence items make a '
            'question. In this unit every question you make is a be question, so the rule is '
            'always the same: am, is or are goes in front of the person, and the question '
            'word goes in front of that.'),

    # ----------------------------------------------------- Foundation strands --
    sound=dict(
        title='The letters of the alphabet',
        intro='People spell names at you from the first minute of the first day, and they '
              'spell them fast. The letters are not hard, but they come in groups that sound '
              'the same, and that is where names are lost.',
        rows=[('/eɪ/', ['A', 'H', 'J', 'K'],
               'These four all have the sound of the word day. Say them as one group.'),
              ('/iː/', ['B', 'C', 'D', 'E', 'G', 'P', 'T', 'V'],
               'The biggest group, and the one that causes trouble. B and V sound almost the '
               'same on a phone, so people say B for book and V for Victor.'),
              ('/e/', ['F', 'L', 'M', 'N', 'S', 'X', 'Z'],
               'These start with the sound of the word egg.'),
              ('/aɪ/', ['I', 'Y'], 'The sound of the word my.'),
              ('/juː/', ['Q', 'U', 'W'], 'U and Q are close. W is double-u.'),
              ('on its own', ['O', 'R'], 'O is the sound of no. R is the long sound in car.')],
        hear=[('Do you hear B or V?', 'B'), ('Do you hear G or J?', 'G'),
              ('Do you hear M or N?', 'N'), ('Do you hear E or I?', 'I'),
              ('Do you hear S or F?', 'S'), ('Do you hear A or E?', 'A')],
        say=['Spell your family name, letter by letter, three times.',
             'Spell the name of your town.',
             'Spell these: RIVERSIDE, DEMIR, CHEN, RUIZ.',
             'Say your student number one number at a time.']),

    builder=dict(
        title='A sentence needs a person and a verb',
        rule='In English you cannot leave the verb out. In many languages *I a student* is a '
             'good sentence. In English it is not a sentence at all, and in the Writing '
             'section it scores nothing. Put am, is or are in.',
        pairs=[['I a student.', 'I am a student.'],
               ['She from Turkey.', 'She is from Turkey.'],
               ['My name Ana.', 'My name is Ana.'],
               ['in Block C', 'The office is in Block C.'],
               ['Fifteen students in my class.', 'There are fifteen students in my class.']],
        watch='A capital letter at the start and a full stop at the end. Both of them are '
              'part of the sentence, not decoration.',
        ex=[('I from Peru.', 'I am from Peru.'),
            ('He a teacher.', 'He is a teacher.'),
            ('They in the corridor.', 'They are in the corridor.'),
            ('my student number is 4071', 'My student number is 4071.'),
            ('She is in Group B.', 'yes — this one is already a sentence'),
            ('Welcome to the college.', 'yes — this one is already a sentence')]),

    typing=dict(
        title='The home row',
        intro='Put your left hand on A S D F and your right hand on J K L. Your fingers start '
              'here and they come back here after every word. Do not look down.',
        keys='asdfghjkl',
        caption='The home row. Left hand A S D F, right hand J K L. Feel the small line on '
                'the F and the J with your first fingers: they tell you where your hands are '
                'without looking.',
        drill=['asdf jkl asdf jkl asdf jkl',
               'a sad lad; a glad lass; all fall',
               'ask dad; add half; a flask'],
        target=8),

    study=dict(
        title='A vocabulary notebook that works',
        intro='A list of words with your own language next to them does not work for long. '
              'You read it, you know it, you close the book, it is gone. Three columns work '
              'much better than two.',
        steps=['Column 1: the word. Column 2: a short meaning in English, not in your '
               'language. Column 3: one sentence with the word in it, from this book.',
               'Write the sentence from this book, not a sentence you make up. The book '
               'sentence is correct.',
               'Cover column 1 and read column 2. Say the word. Then do it the other way.',
               'Six words a day is better than thirty words on Sunday.',
               'Come back to a page after one day, then after one week, then after one month.'],
        tip='Put the date at the top of every page of your notebook. In three months you will '
            'see how far you have come, and on a bad day that is worth more than any rule.'),

    # -------------------------------------------------------------- review --
    rev=dict(
        vocab=[('what people call you', 'name'),
               ('a very big town', 'city'),
               ('a very small town', 'village'),
               ('to say the letters one by one', 'spell'),
               ('a person in your class', 'classmate'),
               ('the small card that shows you study here', 'student card'),
               ('all the buildings of a college', 'campus'),
               ('one part of a college, for one subject', 'department'),
               ('a teacher speaks and many students listen', 'lecture'),
               ('a small class with a few students', 'tutorial'),
               ('the long space between the rooms of a building', 'corridor'),
               ('English and Spanish are these', 'languages')],
        gram=[('I __________ a student.', 'am'),
              ('She __________ from Brazil.', 'is'),
              ('They __________ in Group B.', 'are'),
              ('__________ you in my class?', 'Are'),
              ('He is __________ office worker.', 'an'),
              ('There are twelve __________ (student).', 'students'),
              ('__________ is your teacher?', 'Who'),
              ('We __________ not in Hall 2.', 'are')],
        mini=[
            ('The Student Office is in',
             ('Hall 1', 'Block A', 'Block C', 'room 12'), 2,
             'Block C, on the notice and in the announcement.'),
            ('Ana is from',
             ('Turkey', 'Peru', 'Brazil', 'Kenya'), 1,
             'She says From Peru in the conversation.'),
            ('In English the first name comes',
             ('after the family name', 'before the family name', 'at the end',
              'in the middle'), 1,
             'A first name comes before a family name, from the talk.'),
            ('Which sentence is correct?',
             ('I a student.', 'I am student.', 'I am a student.', 'I student am.'), 2,
             'You need am and you need a before a singular job or role.'),
            ('Which question is correct?',
             ('Where you are from?', 'Where are you from?', 'From where you are?',
              'You are from where?'), 1,
             'The question word comes first, then are, then you.'),
            ('Group B has students from',
             ('nine countries', 'two countries', 'fifteen countries',
              'twenty-one countries'), 0,
             'Fifteen students from nine countries. Twenty-one is the languages.')]),

    tip='On the first day, write three things on one card and keep it in your pocket: your '
        'student number, the name of your department, and the name of your tutor. You will '
        'be asked for all three, often, and by people who are in a hurry.',
)

# ---- the two academic cycles (field: People and Their Ways) ----------------
from .fx01 import EXTRA as _X, SP_EXTRA as _SP   # noqa: E402
UNIT.update(_X)
UNIT['sp'] = list(UNIT['sp'])[:3] + list(_SP)
