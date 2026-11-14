# -*- coding: utf-8 -*-
"""Foundation Unit 4 · Family, Home and Where You Live.

Grammar: have got, possessive 's, my/your/his/her.
Question spine: Have you got ...? Whose ...?
"""

UNIT = dict(
    n=4, vol='F', level='A2',
    title='Family, Home and Where You Live',
    icons=('globe', 'speech', 'book'),
    subs=('Who is in your family', 'A room in halls', 'Your street'),
    grammar='have got · possessive ’s · my, your, his, her',
    field='family, home, street and neighbours',
    names=('Riverside', 'Ana', 'Ruiz', 'Yusuf', 'Mei', 'Dale', 'Patel', 'Block',
           'Oakfield', 'Lena'),
    opener_line='Three sub-topics, three cycles in every skill. The test asks about your '
                'own life in Speaking, and this is the part of it everybody has.',
    candos=[
        'say who is in my family with have got',
        'read a short notice about a room and find the cost',
        'understand a short text about how students live',
        'follow a conversation about a problem in a shared flat',
        'ask and answer questions about family and home',
        'write an email to a landlord about a problem'],

    core=[
        ('family', 'your mother, father, brothers and sisters'),
        ('mother', 'your female parent'),
        ('father', 'your male parent'),
        ('parent', 'your mother or your father'),
        ('brother', 'a boy or man with the same parents as you'),
        ('sister', 'a girl or woman with the same parents as you'),
        ('son', 'the male child of a parent'),
        ('daughter', 'the female child of a parent'),
        ('child', 'a young person'),
        ('baby', 'a very young child'),
        ('grandmother', 'the mother of your mother or father'),
        ('grandfather', 'the father of your mother or father'),
        ('uncle', 'the brother of your mother or father'),
        ('aunt', 'the sister of your mother or father'),
        ('cousin', 'the child of your uncle or aunt'),
        ('husband', 'the man a woman is married to'),
        ('wife', 'the woman a man is married to'),
        ('house', 'a building for one family'),
        ('flat', 'a home on one floor inside a bigger building'),
        ('kitchen', 'the room where you cook'),
        ('bedroom', 'the room where you sleep'),
        ('garden', 'the green space outside a house'),
        ('neighbour', 'the person next door to you'),
        ('street', 'a road in a town with houses on it')],
    campus=[
        ('landlord', 'the owner of the flat you pay for'),
        ('rent', 'the money you pay every month for a flat'),
        ('deposit', 'money you pay at the start and get back at the end'),
        ('roommate', 'your partner in a shared room or flat'),
        ('laundry', 'the room or shop where clothes are washed'),
        ('bills', 'the paper that says how much you pay for water and light'),
        ('contract', 'the paper you sign with the landlord'),
        ('common room', 'the shared room in a hall where students sit together'),
        ('accommodation', 'a place to live'),
        ('cleaner', 'the worker who cleans the building'),
        ('rubbish', 'the things you throw away'),
        ('washing machine', 'the machine that washes clothes')],
    again=['family', 'flat', 'rent', 'landlord', 'neighbour', 'contract',
           'accommodation', 'street'],
    vocab_talk=[
        'How many people are there in your family?',
        'Have you got a brother or a sister?',
        'What is your favourite room in your home, and why?',
        'Who lives next to you, and do you know them well?'],

    r1=dict(
        sub='Who is in your family',
        skill=('The apostrophe s', [
            'My brother’s flat means the flat of my brother. One person, ’s.',
            'More than one person already ending in s takes only the apostrophe.',
            'Do not confuse it with the plural -s. Brothers is two boys; brother’s is one boy and his thing.',
            'Count the dashes and remember the apostrophe is not a letter.']),
        guided_text='My family is not big. I have got one brother and two sister-. My '
                    'brother live- in the city and my sister- live with my parent-. My '
                    'mother work- in a school.',
        guided_hint='1  sister-  →  s  (sisters)',
        guided=['s', 's', 's', 's', 's'],
        exam_text='Most student- at Riverside live with their parent- or in a flat. A flat '
                  'near the college cost- a lot, so three or four student- usually share '
                  'one. Every flat ha- a kitchen and a common room, and some of them have '
                  'garden-. The landlord clean- the stairs, but the student- clean the '
                  'kitchen. One of my roommate- cook- for everybody on Sunday, and the rest '
                  'of us wash the plates.',
        exam=['s', 's', 's', 's', 's', 's', 's', 's', 's', 's']),

    r2=dict(
        sub='A room in halls',
        skill=('Find the money first', [
            'In any notice about a room, find the price before anything else.',
            'Look for the word a month, a week or each. The number changes with it.',
            'A deposit is not the rent. Two numbers, two different things.',
            'In the rent and not in the rent are the words that cost students money.']),
        docs=[
            ('ad', 'Oakfield Hall — rooms for students', [
                '# What you get',
                '* One bedroom with a bed, a desk and a chair',
                '* A shared kitchen for six students',
                '* A common room on the ground floor',
                '# The money',
                '* Rent: 420 a month',
                '* Deposit: 300, one time at the start',
                '* Water and light are in the rent. The phone line is not.',
                '# To take a room',
                '* Sign the contract in the Accommodation Office, Block C.',
                '* Rooms for the new term go on 1 September.'], 'ad'),
            ('notice', 'Oakfield Hall — kitchen rules', [
                '# Every day',
                '* Wash your plates. The cleaner does not wash plates.',
                '* Rubbish goes out before nine in the evening.',
                '# The washing machine',
                '* The laundry is on the ground floor, next to the back door.',
                '* It is open from seven in the morning until ten at night.'], 'notice')],
        guided=[
            ('How much is the rent?',
             ('300 a month', '420 a month', '420 a week', '300 a week'), 1,
             'Rent: 420 a month. The 300 is the deposit.'),
            ('How many students share the kitchen?',
             ('three', 'four', 'six', 'nine'), 2,
             'A shared kitchen for six students.'),
            ('What is not in the rent?',
             ('water', 'light', 'the phone line', 'the common room'), 2,
             'Water and light are in the rent. The phone line is not.'),
            ('Where do you sign the contract?',
             ('Oakfield Hall', 'the common room', 'the Accommodation Office',
              'the laundry'), 2,
             'Sign the contract in the Accommodation Office, Block C.')],
        exam=[
            ('How much is the deposit?',
             ('300', '420', '720', '120'), 0,
             'Deposit: 300, one time at the start.'),
            ('When do rooms for the new term go?',
             ('1 August', '1 September', '1 October', '1 January'), 1,
             'Rooms for the new term go on 1 September.'),
            ('Who washes the plates?',
             ('the cleaner', 'the landlord', 'the students', 'nobody'), 2,
             'Wash your plates. The cleaner does not wash plates.'),
            ('When does the rubbish go out?',
             ('before seven in the morning', 'before nine in the evening',
              'before ten at night', 'any time'), 1,
             'Rubbish goes out before nine in the evening.'),
            ('Where is the laundry?',
             ('the top floor', 'the ground floor', 'the common room', 'Block C'), 1,
             'The laundry is on the ground floor, next to the back door.'),
            ('What is in the bedroom?',
             ('a bed, a desk and a chair', 'a bed and a washing machine',
              'a kitchen', 'a common room'), 0,
             'One bedroom with a bed, a desk and a cupboard.')]),

    r3=dict(
        sub='Your street',
        title='Where Students Live, and Why',
        words=130,
        paras=[
            'Students live in three kinds of place. Some live at home with their parents. '
            'Some live in a hall with other students. Some share a flat on a street near '
            'the college.',
            'Money decides most of it. A hall costs a lot, but the rent pays for water, '
            'light and a cleaner. A shared flat is cheap, but the bills come every month '
            'and somebody has to pay them. A room at home is free, and the journey to the '
            'college is not.',
            'There is one thing the money does not show. A student in a hall meets forty '
            'people in the first week. A student at home meets the same people as always. '
            'For a student in a new country, that first week is worth a lot of rent.'],
        skill=('Three things, three paragraphs', [
            'When a text says three kinds, expect three of everything.',
            'Each paragraph usually takes one idea and finishes it.',
            'The word but marks the other side of the same thing. Watch for it.',
            'A question with not or does not wants you to find the negative sentence.']),
        guided=[
            ('How many kinds of place does the passage give?',
             ('two', 'three', 'four', 'five'), 1,
             'Students live in three kinds of place.'),
            ('What decides most of it?',
             ('the college', 'money', 'parents', 'the journey'), 1,
             'Money decides most of it.'),
            ('What does the hall rent pay for?',
             ('food', 'internet', 'water, light and a cleaner', 'a journey'), 2,
             'The rent pays for water, light and a cleaner.'),
            ('A room at home is',
             ('cheap', 'free', 'expensive', 'shared'), 1,
             'A room at home is free.')],
        exam=[
            ('A shared flat is cheap, but',
             ('it has no kitchen', 'the bills come every month', 'it is far',
              'it has no cleaner'), 1,
             'A shared flat is cheap, but the bills come every month.'),
            ('What is not free for a student at home?',
             ('the room', 'the bills', 'the journey to college', 'the cleaner'), 2,
             'A room at home is free, and the journey to the college is not.'),
            ('How many people does a student in a hall meet in the first week?',
             ('four', 'fourteen', 'forty', 'four hundred'), 2,
             'A student in a hall meets forty people in the first week.'),
            ('A student at home meets',
             ('forty new people', 'the same people as always', 'nobody', 'new neighbours'), 1,
             'A student at home meets the same people as always.'),
            ('The thing the money does not show is',
             ('the bills', 'the cleaner', 'the people you meet', 'the rent'), 2,
             'The last paragraph is about the people, not the money.'),
            ('For a student in a new country, the first week is',
             ('cheap', 'worth a lot of rent', 'free', 'difficult to pay'), 1,
             'That first week is worth a lot of rent.'),
            ('What is the writer’s advice?',
             ('Always live at home.', 'A hall is worth the money for a new student.',
              'Never share a flat.', 'Bills are the main problem.'), 1,
             'The last paragraph says the first week in a hall is worth a lot of rent.')]),

    l1=dict(
        sub='A room in halls',
        caption='Two students talk about a problem in the kitchen',
        skill=('Who has the problem?', [
            'In a conversation about a problem, one person has it and one does not.',
            'Listen for I and you. They tell you who is who.',
            'The solution usually comes in the last three lines.',
            'A question about what they decide means the end, not the middle.']),
        warm=[
            ('Have you got a minute?',
             ('Yes, of course.', 'In the kitchen.', 'Four hundred.', 'On Monday.'), 0,
             'Have you got ...? takes Yes or No, not a place.'),
            ('Whose plates are these?',
             ('In the laundry.', 'They are Mei’s.', 'At nine.', 'Yes, they are.'), 1,
             'Whose asks who the owner is.'),
            ('Is the washing machine free?',
             ('No, it is not.', 'On the ground floor.', 'Six students.', 'Every month.'), 0,
             'Is it ...? takes Yes, it is or No, it is not.')],
        script=[
            ('Woman', 'Yusuf, have you got a minute? It is about the kitchen.'),
            ('Man', 'The plates again?'),
            ('Woman', 'The plates again. There are nine of them in the kitchen.'),
            ('Man', 'They are not mine. I eat in the canteen.'),
            ('Woman', 'I know. I think they are Lena’s and her brother’s.'),
            ('Man', 'Her brother? He does not live here.'),
            ('Woman', 'He comes every evening and he cooks.'),
            ('Man', 'Right. So we talk to Lena, not to the landlord.'),
            ('Woman', 'Yes. The landlord only cleans the stairs, not the kitchen.'),
            ('Man', 'I see her in the common room at six. I say something then.')],
        items=[
            ('What is the problem?',
             ('the washing machine', 'plates in the kitchen', 'the rent', 'the stairs'), 1,
             'It is about the kitchen ... There are nine of them in the kitchen.'),
            ('How many plates are in the kitchen?',
             ('six', 'seven', 'nine', 'ten'), 2,
             'There are nine of them in the kitchen.'),
            ('Why are the plates not the man’s?',
             ('he is away', 'he eats in the canteen', 'he has no kitchen',
              'he washes them'), 1,
             'They are not mine. I eat in the canteen.'),
            ('Whose plates does the woman think they are?',
             ('the landlord’s', 'the cleaner’s', 'Lena’s and her brother’s',
              'Yusuf’s'), 2,
             'I think they are Lena’s and her brother’s.'),
            ('Who do they decide to talk to?',
             ('the landlord', 'the cleaner', 'Lena', 'Lena’s brother'), 2,
             'So we talk to Lena, not to the landlord.'),
            ('Where does the man see Lena?',
             ('the kitchen', 'the common room', 'the canteen', 'the laundry'), 1,
             'I see her in the common room at six.')]),

    l2=dict(
        sub='A room in halls',
        caption='An announcement in a hall of residence',
        poster=['OAKFIELD HALL', 'Water off: Tuesday 09.00 – 15.00',
                'Laundry closed all day Tuesday'],
        skill=('A problem and a time', [
            'An announcement about a building gives a problem and a window of time.',
            'The window has two ends. Catch both numbers.',
            'Listen for what still works. It is usually at the end.',
            'A question about Tuesday needs the Tuesday sentence, not the Monday one.']),
        warm=[
            ('Is there any water on Tuesday morning?',
             ('No, there is not.', 'On the ground floor.', 'Six students.', 'At the weekend.'), 0,
             'Is there ...? takes Yes, there is or No, there is not.'),
            ('Where is the laundry?',
             ('On Tuesday.', 'On the ground floor.', 'Yes, it is.', 'Three hours.'), 1,
             'Where asks for a place.'),
            ('Have we got a common room?',
             ('Yes, we have.', 'At nine.', 'In September.', 'Four hundred.'), 0,
             'Have we got ...? takes Yes, we have.')],
        script=[('Man', 'Good evening, everybody in Oakfield Hall. This is an announcement '
                        'about Tuesday. There is no water in the building from nine in the '
                        'morning until three in the afternoon, because of work in the '
                        'building. The laundry on the ground floor is closed all day. The kitchens '
                        'have no water either, so please take a bottle with you in the '
                        'morning. The common room is open as normal, and there is drinking '
                        'water there.')],
        items=[
            ('When is there no water?',
             ('Monday morning', 'Tuesday 9.00 to 15.00', 'Tuesday all day',
              'Wednesday afternoon'), 1,
             'From nine in the morning until three in the afternoon.'),
            ('Why is there no water?',
             ('work in the building', 'no cleaner', 'a free day', 'the laundry is full'), 0,
             'Because of work in the building.'),
            ('What about the laundry?',
             ('open as normal', 'open in the morning', 'closed all day',
              'closed in the afternoon'), 2,
             'The laundry on the ground floor is closed all day.'),
            ('What does the speaker ask students to do?',
             ('wash the plates', 'take a bottle', 'stay in the common room',
              'pay the bills'), 1,
             'Please take a bottle with you in the morning.'),
            ('Where is there drinking water?',
             ('the kitchen', 'the laundry', 'the common room', 'the office'), 2,
             'The common room is open as normal, and there is drinking water there.')]),

    l3=dict(
        sub='Your street',
        caption='A short talk about students and the streets they live on',
        board=['STUDENT STREETS', 'rent: low', 'neighbours: all students',
               'the problem: nobody stays'],
        skill=('A good thing and a bad thing', [
            'A talk often gives one side and then turns with but or however.',
            'Write a plus and a minus on your paper and fill them in as you listen.',
            'The speaker’s own opinion usually comes after the turn.',
            'A question about the problem means the second half of the talk.']),
        warm=[
            ('Have students got a lot of money?',
             ('No, they have not.', 'In a flat.', 'On Tuesday.', 'Yes, it is.'), 0,
             'Have they got ...? takes Yes, they have or No, they have not.'),
            ('Whose street is this?',
             ('At nine.', 'It is a student street.', 'Three hundred.', 'Yes, it is.'), 1,
             'Whose asks about the owner or the kind.'),
            ('Do you know your neighbours?',
             ('Yes, I do.', 'On the ground floor.', 'Every month.', 'It is cheap.'), 0,
             'Do you ...? takes Yes, I do.')],
        script=[('Woman', 'In every college town there are two or three streets where '
                          'almost everybody is a student. The rent on those streets is low, '
                          'the shops are open late, and nobody says anything about noise at '
                          'eleven at night. For a new student that sounds perfect, and for '
                          'one year it is. But there is a problem, and it is the same '
                          'problem every year. Nobody stays. Every September the whole '
                          'street changes, so nobody knows the neighbours and nobody looks '
                          'after the street. A street with no old people in it is a street '
                          'with no memory.')],
        items=[
            ('What is special about these streets?',
             ('they are quiet', 'almost everybody is a student', 'the rent is high',
              'there are no shops'), 1,
             'Streets where almost everybody is a student.'),
            ('What is the rent like?',
             ('high', 'low', 'the same as a hall', 'free'), 1,
             'The rent on those streets is low.'),
            ('When do the shops close?',
             ('early', 'late', 'at nine', 'at six'), 1,
             'The shops are open late.'),
            ('What is the problem?',
             ('the rent goes up', 'nobody stays', 'the shops close', 'there is noise'), 1,
             'But there is a problem ... Nobody stays.'),
            ('What happens every September?',
             ('the rent goes up', 'the whole street changes', 'the shops open',
              'the students leave college'), 1,
             'Every September the whole street changes.'),
            ('What does the speaker mean at the end?',
             ('old people make a street work', 'students are bad neighbours',
              'the rent is too low', 'streets need more shops'), 0,
             'A street with no old people in it is a street with no memory.')]),

    sp=[
        dict(sub='Who is in your family',
             focus='the weak form of have and got',
             skill=('Have got runs together', [
                 'In speech have got is one sound: I’ve got, she’s got.',
                 'The strong word is the thing you have, not have or got.',
                 'In a question the have comes first and stays weak: Have you got ...?',
                 'Listen for the thing at the end. That is where the answer is.']),
             repeat=['I have got one brother.', 'My sister has got a flat.',
                     'We have got a small garden.',
                     'My parents have got a house near the sea.',
                     'Have you got any brothers or sisters?',
                     'My cousin has got two children and a dog.',
                     'My grandmother has got a picture of the whole family.'],
             theme='your family',
             qs=['First, how many people are there in your family?',
                 'Tell me about one person in your family. What do they do?',
                 'Some families live in one town and some live in many countries. Which is '
                 'your family, and how is that?',
                 'Finally, is a big family a good thing or a difficult thing? Say what you think.'],
             frames=['In my family there are ... . I have got ... .',
                     'My ... is a ... . He or she ... .',
                     'My family lives ... . It is ... .',
                     'I think a ... family is ... , because ... .'],
             model=[(1, 'In my family there are five people. I have got one brother and one '
                        'sister, and my grandmother lives with us.'),
                    (2, 'My father is a driver. He works for a company in the city and he '
                        'is out of the house from six in the morning.'),
                    (3, 'My family lives in two countries. My aunt and my cousins are in '
                        'another country, so we see them once a year.'),
                    (4, 'I think a big family is a good thing, because there is always '
                        'somebody at home. But a small family is quiet, and quiet is good '
                        'for study.')],
             selfcheck=['I used have got and has got correctly',
                        'I said a number in my first answer',
                        'I gave a reason after my opinion']),
        dict(sub='A room in halls',
             focus='the possessive ’s in speech',
             skill=('My brother’s room', [
                 'The ’s sounds the same as a plural -s. Only the meaning is different.',
                 'Say the owner first: Lena’s brother, not the brother of Lena.',
                 'For two owners, the ’s goes on the last one: Lena and Mei’s kitchen.',
                 'In a question, whose carries the meaning: Whose plates are these?']),
             repeat=['This is my room.', 'That is Lena’s kitchen.',
                     'Whose plates are these?',
                     'My roommate’s brother cooks every evening.',
                     'The landlord’s number is on the noticeboard.',
                     'My sister’s flat has got a very small kitchen.',
                     'The cleaner washes the stairs, but the kitchen is ours.'],
             theme='your home and your room',
             qs=['To start, do you live in a house, a flat or a hall?',
                 'Tell me about your room. What is in it?',
                 'Some people share a room and some people need their own. Which are you, '
                 'and why?',
                 'Finally, what makes a shared kitchen work? Tell me one rule.'],
             frames=['I live in ... . It has got ... .',
                     'In my room there is ... and there are ... .',
                     'I ... share a room, because ... .',
                     'The rule is ... , because ... .'],
             model=[(1, 'I live in a flat with three other students. It has got four '
                        'bedrooms and one kitchen.'),
                    (2, 'In my room there is a bed and a desk, and there are a lot of '
                        'books on the floor by the window.'),
                    (3, 'I cannot share a room, because I study late at night and my light '
                        'keeps other people awake.'),
                    (4, 'The rule is simple: wash your own plate before you leave the '
                        'kitchen. One plate is nothing. Nine plates are a war.')],
             selfcheck=['I used ’s for the owner',
                        'I described my room with there is and there are',
                        'I answered all four questions']),
        dict(sub='Your street',
             focus='word stress in family words',
             skill=('The strong part of a long word', [
                 'GRANDmother, NEIGHbour, acCOMModation — one part is strong.',
                 'In accommodation the strong part is the fourth one: a-cco-mmo-DA-tion.',
                 'A wrong strong part makes a word hard to hear, even with good sounds.',
                 'Say the word three times with the strong part before you use it.']),
             repeat=['My street is quiet.', 'I know my neighbours well.',
                     'There are four houses on my side.',
                     'My grandmother lives in the next street.',
                     'The accommodation near the college is not cheap.',
                     'My neighbour has got a garden behind her house.',
                     'On my street every family knows every other family by name.'],
             theme='your street and your neighbours',
             qs=['First, tell me about the street where you live.',
                 'Do you know your neighbours? What do you say to them?',
                 'Some people want quiet neighbours and some people want friendly ones. '
                 'Which do you want, and why?',
                 'Finally, what makes a street a good place to live?'],
             frames=['My street is ... . There are ... .',
                     'I know ... . I usually say ... .',
                     'I want ... neighbours, because ... .',
                     'A street is good when ... .'],
             model=[(1, 'My street is short and quiet. There are about twenty houses and a '
                        'small shop at the corner.'),
                    (2, 'I know the family next door well. I usually say good morning and '
                        'ask about their daughter.'),
                    (3, 'I want friendly neighbours, because a quiet street with nobody in '
                        'it is not safe at night.'),
                    (4, 'A street is good when people stay for years. Then everybody knows '
                        'the children and the old people.')],
             selfcheck=['I put the stress on the right part of long words',
                        'I used a family word in every answer',
                        'I gave an example, not only an opinion'])],

    w1=dict(
        sub='Who is in your family',
        skill=('Have got in a question', [
            'Have you got ...? and Has he got ...? The have moves to the front.',
            'Whose asks about the owner: Whose room is this?',
            'How many goes in front of everything: How many brothers have you got?',
            'Never put do with got. *Do you have got* is wrong.']),
        guided=[
            ('I have got two sisters.', ['have', 'you', 'got', 'any', 'sisters'],
             'Have you got any sisters?'),
            ('This is Lena’s kitchen.', ['whose', 'kitchen', 'is', 'this', 'now'],
             'Whose kitchen is this now?'),
            ('He has got a flat in the city.', ['has', 'he', 'got', 'a flat', 'there'],
             'Has he got a flat there?')],
        exam=[
            ('My parents have got a garden.', ['have', 'your parents', 'got', 'a garden', 'too'],
             'Have your parents got a garden too?'),
            ('She has got three cousins.', ['how many', 'cousins', 'has', 'she', 'got'],
             'How many cousins has she got?'),
            ('These plates are Lena’s.', ['whose', 'plates', 'are', 'these', 'exactly'],
             'Whose plates are these exactly?'),
            ('The rent is 420 a month.', ['how much', 'is', 'the rent', 'here', 'a month'],
             'How much is the rent here a month?'),
            ('I live in a flat with my brother.', ['who', 'do', 'you', 'live', 'with'],
             'Who do you live with?'),
            ('My uncle has got two children.', ['has', 'your uncle', 'got', 'any children', 'now'],
             'Has your uncle got any children now?'),
            ('The laundry is on the ground floor.', ['where', 'is', 'the laundry', 'in', 'this hall'],
             'Where is the laundry in this hall?')]),

    w2=dict(
        sub='A room in halls',
        to='office@oakfieldhall.com',
        date='09/10/2025',
        subject='The washing machine',
        target=52,
        scenario=['You live in Oakfield Hall, room 14.',
                  'The washing machine in the laundry does not work. Write to the office.'],
        bullets=['say who you are and where your room is',
                 'say what the problem is',
                 'ask when somebody can come'],
        skill=('A problem email has a shape', [
            'Who you are, what is wrong, what you want. Always in that order.',
            'Give the room number. Nobody can help you without it.',
            'Say what is wrong in plain words. Do not say it twice.',
            'End with a question, not with a complaint.']),
        model=['Dear Office,', '',
               'My name is Ana Ruiz and I am in room 14 in Oakfield Hall.',
               'The washing machine in the laundry does not work. It is full of water and '
               'the door does not open.',
               'When can somebody come and look at it?', '',
               'Thank you,', 'Ana Ruiz'],
        notes=['The room number is in the first sentence, where the reader needs it.',
               'The problem is two short facts, not a long story.',
               'The question is polite and it asks for a time, so the answer is useful.',
               'Nobody is blamed. An email that blames people gets a slow answer.'],
        frame=['# Start', 'Dear Office,', '',
               '# Who you are and where',
               'My name is ______________ and I am in room ______________ .', '',
               '# The problem — two short facts',
               'The ______________ does not ______________ . It ______________ .', '',
               '# Your question — ask for a time',
               'When can ______________ ?', '',
               '# Finish', 'Thank you,', '______________']),

    w3=dict(
        sub='Your street',
        prof='Dr Patel',
        target=55,
        question='Is it better for a student to live at home with family, or to leave home '
                 'and live with other students? Give one reason.',
        posts=[('Mei', 'w', 'Home is better. My mother cooks, the room is free, and I study '
                            'in a quiet house. In a hall nobody sleeps before one.'),
               ('Yusuf', 'm', 'I do not agree. At home I am still a child. In a hall I cook, '
                              'I pay the bills, and I know forty people by October.')],
        skill=('Use the other posts', [
            'Name the person you agree with. Then name the one you do not.',
            'Give one reason of your own, not a reason already on the page.',
            'Fifty-five words is five short sentences. Write them, then stop.',
            'A post with no reason is not an answer, however long it is.']),
        starters=['I agree with Yusuf, because ...',
                  'Mei is right about ...',
                  'In my own case ...',
                  'The thing nobody says is ...'],
        model=['I agree with Yusuf. A student learns more outside the family house, because '
               'nobody does the small things for you.',
               'Mei is right about the quiet, and quiet is important in the exam term.',
               'In my own case the journey decides it. My family house is two hours away, '
               'so home is not really free.'],
        model_words=55,
        frame=['# Who you agree with',
               'I agree with ______________ . I think ______________ .', '',
               '# Your reason — use because',
               'This is better because ______________ .', '',
               '# Say one thing about the other post',
               '______________ is right about ______________ .', '',
               '# Your own case', 'In my own case ______________ .']),

    gram=dict(
        title='have got · possessive ’s · my, your, his, her',
        headers=['Form', 'Example'],
        rows=[['I / you / we / they have got', 'I have got two sisters.'],
              ['he / she / it has got', 'She has got a flat.'],
              ['negative', 'I have not got a garden. He has not got a car.'],
              ['question', 'Have you got a brother? Has she got a room?'],
              ['’s = one owner', 'my brother’s flat, Lena’s kitchen'],
              ['s’ = more than one owner', 'the students’ kitchen'],
              ['my, your, his, her, our, their', 'This is her room, not their room.']],
        notes=['Have got and have mean the same thing here. Have got is more common in '
               'speech; have is more common in writing. The test uses both.',
               'The ’s goes on the owner, not on the thing: my sister’s room, '
               'never *my sister room’s*.',
               'His and her follow the owner, not the thing. Mei and her brother: her, '
               'because Mei is a woman, even though brother is a man.'],
        watch='Never say *Do you have got?* or *She have got*. Have got makes its own '
              'question with have, and the he/she form is has.',
        ex=[('Write have got or has got.', [
            'I __________ one brother.',
            'She __________ a small flat.',
            'My parents __________ a garden.',
            'The hall __________ a common room.',
            'We __________ a washing machine on the ground floor.',
            'He __________ two children.'],
            ['have got', 'has got', 'have got', 'has got', 'have got', 'has got']),
            ('Put the apostrophe in the right place.', [
                'my brothers flat (one brother)',
                'the students kitchen (many students)',
                'Lenas room (one person)',
                'my parents house (two people)',
                'the landlords number (one person)',
                'my sisters children (one sister)'],
             ['my brother’s flat', 'the students’ kitchen', 'Lena’s room',
              'my parents’ house', 'the landlord’s number',
              'my sister’s children']),
            ('Write my, your, his, her, our or their.', [
                'Mei lives with __________ brother.',
                'Yusuf cooks in __________ kitchen.',
                'We clean __________ own flat.',
                'The students pay __________ own bills.'],
             ['her', 'his', 'our', 'their'])],
        bas='Build a Sentence likes have got because the question moves two words and '
            'nothing else: You have got a room becomes Have you got a room? Whose is the '
            'other favourite, and whose always comes first in the sentence.'),

    sound=dict(
        title='Word stress: where the strong part goes',
        intro='Every English word of two parts or more has one strong part. Get the sounds '
              'a little wrong and people still understand you. Get the strong part wrong '
              'and they often do not.',
        rows=[('Oo', ['BROTHer', 'SISTer', 'KITCHen', 'GARDen'],
               'Two parts, strong first. Most two-part nouns in English are like this.'),
              ('oO', ['beLONG', 'aGREE', 'aBOUT'],
               'Two parts, strong second. Many two-part verbs are like this.'),
              ('Ooo', ['FAMily', 'GRANDmother', 'NEIGHbourhood'],
               'Three parts, strong first.'),
              ('ooOo', ['accomMOdation', 'inforMAtion', 'ediCAtion'],
               'Words ending in -ation always put the strong part on the A.'),
              ('oOo', ['apartment', 'important', 'september'],
               'Three parts, strong in the middle.'),
              ('one part', ['house', 'flat', 'street', 'room'],
               'One part, so nothing to choose. These are the easy ones.')],
        hear=[('Is it BROTHer or broTHER?', 'BROTHer'),
              ('Is it FAMily or faMILy?', 'FAMily'),
              ('Is it accomMOdation or aCCOMmodation?', 'accomMOdation'),
              ('Is it SEPtember or sepTEMber?', 'sepTEMber'),
              ('Is it NEIGHbour or neighBOUR?', 'NEIGHbour'),
              ('Is it imPORtant or IMportant?', 'imPORtant')],
        say=['Say these with the strong part loud: family, brother, grandmother, neighbour.',
             'Say these: accommodation, information, education.',
             'Say the names of five people in your family.',
             'Say your address out loud, slowly, twice.']),

    builder=dict(
        title='The word order of a simple sentence',
        rule='English is a language of word order. Who does it comes first, the verb comes '
             'second, and the thing comes third. You cannot move them around the way many '
             'languages can, and when you do, the meaning changes or disappears.',
        pairs=[['Has got my brother a flat.', 'My brother has got a flat.'],
               ['In the kitchen is a washing machine.',
                'There is a washing machine in the kitchen.'],
               ['Lives my family in a small town.', 'My family lives in a small town.'],
               ['The rent pays my father.', 'My father pays the rent.'],
               ['Every evening cooks her brother.', 'Her brother cooks every evening.']],
        watch='Time and place go at the end, or at the front with a comma. They do not go '
              'between the verb and the thing: I clean the kitchen on Sunday, not *I clean '
              'on Sunday the kitchen*.',
        ex=[('has got a garden my neighbour', 'My neighbour has got a garden.'),
            ('on the ground floor is the laundry', 'The laundry is on the ground floor.'),
            ('pays the bills every month my roommate',
             'My roommate pays the bills every month.'),
            ('wash I on Sunday my clothes', 'I wash my clothes on Sunday.'),
            ('My sister lives in the city.', 'yes — this one is already correct'),
            ('three students share the flat', 'Three students share the flat.')]),

    typing=dict(
        title='Capital letters and the shift key',
        intro='A capital letter is two keys at once: shift and the letter. The shift key on '
              'the left is for letters your right hand types, and the shift key on the '
              'right is for letters your left hand types. Never use one hand for both.',
        keys='asdfjkl',
        caption='Hold the shift key with the little finger of one hand and press the letter '
                'with the other hand. If you use the same hand for both, your fingers leave '
                'the home row and the next word is slow.',
        drill=['Ana Mei Yusuf Lena Oakfield Hall',
               'My name is Ana. I live in Oakfield Hall.',
               'Dear Office, The washing machine does not work. Thank you, Ana'],
        target=11),

    study=dict(
        title='Word families: one word is really five',
        intro='Every time you learn a word, you can usually get three or four more for '
              'nothing. They look the same and they share a meaning. Learning them together '
              'costs almost no extra time and it doubles what you can say.',
        steps=['Write the word in the middle of a page and the other forms around it.',
               'Example: clean (verb), clean (adjective), cleaner (person), cleaning (the '
               'work).',
               'Example: live (verb), alive (adjective), living room (the place).',
               'Mark which one is the noun, which is the verb and which is the adjective. '
               'That is what decides where it goes in the sentence.',
               'In the real test, Build a Sentence and Complete the Words both turn on '
               'these endings. This is not extra work; it is the work.'],
        tip='The endings tell you the job of the word. Words ending in -tion, -ment and '
            '-ness are nouns. Words ending in -ful, -less and -able are adjectives. Words '
            'ending in -ly are usually adverbs. Four endings, and you can guess the job of '
            'thousands of words.'),

    rev=dict(
        vocab=[('the owner of the flat you pay for', 'landlord'),
               ('the money you pay every month', 'rent'),
               ('money you pay at the start and get back', 'deposit'),
               ('your partner in a shared flat', 'roommate'),
               ('the paper you sign with the landlord', 'contract'),
               ('the shared room in a hall', 'common room'),
               ('the things you throw away', 'rubbish'),
               ('a place to live', 'accommodation'),
               ('the person next door to you', 'neighbour'),
               ('the child of your uncle or aunt', 'cousin'),
               ('the room where you cook', 'kitchen'),
               ('a home on one floor of a building', 'flat')],
        gram=[('I __________ one brother. (have got)', 'have got'),
              ('She __________ a small flat. (have got)', 'has got'),
              ('__________ you got any sisters?', 'Have'),
              ('This is my __________ flat. (brother, one)', 'brother’s'),
              ('That is the __________ kitchen. (students, many)', 'students’'),
              ('Mei lives with __________ brother.', 'her'),
              ('We clean __________ own flat.', 'our'),
              ('__________ plates are these?', 'Whose')],
        mini=[
            ('The rent at Oakfield Hall is',
             ('300 a month', '420 a month', '420 a week', '720 a month'), 1,
             'Rent: 420 a month, in the advertisement.'),
            ('The students decide to talk to',
             ('the landlord', 'the cleaner', 'Lena', 'the office'), 2,
             'So we talk to Lena, not to the landlord.'),
            ('The problem with student streets is',
             ('the rent', 'the shops', 'nobody stays', 'the noise'), 2,
             'But there is a problem ... Nobody stays.'),
            ('Which sentence is correct?',
             ('Do you have got a brother?', 'Have you got a brother?',
              'You have got a brother?', 'Has you got a brother?'), 1,
             'Have got makes its own question with have at the front.'),
            ('Which is correct?',
             ('my sister room’s', 'my sisters room', 'my sister’s room',
              'my sister rooms'), 2,
             'The ’s goes on the owner, not on the thing.'),
            ('A student in a hall meets forty people in',
             ('the first day', 'the first week', 'the first term', 'the first year'), 1,
             'A student in a hall meets forty people in the first week.')]),

    tip='In Speaking, the family questions are the easy marks and everybody wastes them. '
        'Have three sentences ready about one person in your family — what they do, '
        'where they live, one small detail. You will use them in half the interviews you '
        'ever sit.',
)

# ---- the two academic cycles (field: Living Things) -----------------------
from .fx04 import EXTRA as _X, SP_EXTRA as _SP   # noqa: E402
UNIT.update(_X)
UNIT['sp'] = list(UNIT['sp'])[:3] + list(_SP)
