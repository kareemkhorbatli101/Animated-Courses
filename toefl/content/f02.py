# -*- coding: utf-8 -*-
"""Foundation Unit 2 · The Campus and How to Find It.

Grammar: there is / there are, prepositions of place, this/that/these/those.
Question spine: Is there ...? Where is ...?
"""

UNIT = dict(
    n=2, vol='F', level='A2',
    title='The Campus and How to Find It',
    icons=('globe', 'book', 'speech'),
    subs=('A campus map', 'The library', 'Asking the way'),
    grammar='there is and there are · prepositions of place · this, that, these, those',
    field='places, directions, buildings',
    names=('Riverside', 'Ana', 'Ruiz', 'Yusuf', 'Mei', 'Block', 'Dale'),
    opener_line='Three sub-topics, three cycles in every skill. Unit 1 gave you the people. '
                'This unit gives you the place they are in.',
    candos=[
        'say where a place is with there is and there are',
        'find a room from a notice or a map',
        'understand a short text about how a college is organised',
        'follow a conversation in which somebody asks the way',
        'ask where something is and give simple directions',
        'write an email asking about opening times'],

    core=[
        ('building', 'a thing with walls and a roof: a house, a school, a shop'),
        ('floor', 'the part you walk on, or one level of a building'),
        ('room', 'one space inside a building'),
        ('door', 'you open it to go in'),
        ('stairs', 'steps that take you up to the next floor'),
        ('lift', 'a small room that takes you up and down'),
        ('entrance', 'the door you come in by'),
        ('exit', 'the door you go out by'),
        ('left', 'this side when you look at a clock at nine'),
        ('right', 'the other side'),
        ('straight', 'not left and not right: the same way'),
        ('near', 'not far'),
        ('far', 'a long way'),
        ('between', 'with one thing on each side'),
        ('behind', 'at the back of'),
        ('opposite', 'on the other side, looking at it'),
        ('corner', 'where two walls or two streets meet'),
        ('map', 'a picture of a place from above'),
        ('sign', 'words on a wall or a board that tell you something'),
        ('find', 'to see where something is'),
        ('turn', 'to go left or right'),
        ('walk', 'to go on your feet'),
        ('upstairs', 'on or to a higher floor'),
        ('downstairs', 'on or to a lower floor')],
    campus=[
        ('library', 'the building with the books in it'),
        ('lecture hall', 'a big room with many seats for a lecture'),
        ('laboratory', 'the room for science work'),
        ('canteen', 'the place in a college where you eat'),
        ('reception', 'the desk at the entrance where people ask questions'),
        ('help desk', 'the desk where you go with a problem'),
        ('study room', 'a quiet room for students to work in'),
        ('locker', 'a small box with a key, for your things'),
        ('car park', 'the place where cars stay'),
        ('bookshop', 'the shop that sells books'),
        ('sports centre', 'the building for games and exercise'),
        ('hall of residence', 'the building where students live')],
    again=['building', 'floor', 'library', 'canteen', 'map', 'entrance',
           'between', 'reception'],
    vocab_talk=[
        'Where is the library in your college, and is it near or far?',
        'Which room in a college is the most important, do you think?',
        'Do you use a map on paper or a map on your phone?',
        'What is between your home and your college?'],

    r1=dict(
        sub='A campus map',
        skill=('Plurals and the -s on the verb', [
            'Two different -s live in English: one on nouns, one on verbs.',
            'Six building- is more than one, so it takes s.',
            'A sign show- you the way: here the sign is one thing, so the verb takes s.',
            'A word that ends in -y usually changes to -ies: laboratory, laboratories.']),
        guided_text='Riverside campus is not very big. There are six building-. The library '
                    'is in Block B. In Block A there are ten classroom- and two '
                    'laborator---. There are also two lift- in Block A. The sports centre '
                    'is behind Block C. A sign at the entrance show- you the way.',
        guided_hint='1  building-  →  s  (buildings)',
        guided=['s', 's', 'ies', 's', 's'],
        exam_text='Welcome to the campus. There are six building- here and they all have a '
                  'letter on the door. Block A is the big building near the main entrance. '
                  'Inside there are twenty classroom-, two laborator--- and a study room on '
                  'the top floor. The teach--- have an office on the second floor. There '
                  'are locker- near the stairs. The canteen is in Block B, next to the '
                  'library. There are two entrance- to the library. The back door open- at '
                  'eight and close- at six. If you cannot find a room, ask at the help desk. '
                  'The staff there know all the short way- across the campus, and they also '
                  'have free map- of the building.',
        exam=['s', 's', 'ies', 'ers', 's', 's', 's', 's', 's', 's']),

    r2=dict(
        sub='The library',
        skill=('Read the question, then scan', [
            'Scan means move your eyes fast and look for one thing only.',
            'Opening times, floors and room numbers are the easiest things to scan for.',
            'A web page is not a story. You do not read it from the top.',
            'When you find the words of the question on the page, slow down and read.']),
        docs=[
            ('web', 'Riverside College Library', [
                '# Opening times',
                'Monday to Friday   8.00 – 21.00',
                'Saturday   10.00 – 17.00',
                'Sunday   closed',
                '# The four floors',
                '* Ground floor: reception, help desk, maps',
                '* First floor: books for Business and Law',
                '* Second floor: books for Science',
                '* Third floor: study rooms and the quiet room',
                '# Your card',
                '* The library door opens with your student card.',
                '* Students take six books for three weeks.'], 'web'),
            ('notice', 'Study rooms — third floor', [
                '# How to take a study room',
                '* Ask at the help desk on the ground floor.',
                '* Rooms are for two hours.',
                '* There are eight rooms. Room 8 is for six people.',
                '# Please',
                '* The third floor is a quiet floor.',
                '* Food and drink stay in the canteen.'], 'notice')],
        guided=[
            ('When is the library closed?',
             ('Monday', 'Saturday', 'Sunday', 'Friday'), 2,
             'Sunday   closed, in the opening times.'),
            ('Where are the Science books?',
             ('ground floor', 'first floor', 'second floor', 'third floor'), 2,
             'Second floor: books for Science.'),
            ('How many books does a student take?',
             ('three', 'six', 'eight', 'twenty-one'), 1,
             'Students take six books for three weeks. Three is the number of weeks.'),
            ('Where do you ask for a study room?',
             ('the third floor', 'the help desk', 'the canteen', 'the car park'), 1,
             'Ask at the help desk on the ground floor.')],
        exam=[
            ('What time does the library open on Saturday?',
             ('8.00', '10.00', '17.00', '21.00'), 1,
             'Saturday   10.00 – 17.00. The 17.00 is when it closes.'),
            ('What opens the library door?',
             ('a key', 'a student card', 'the help desk', 'a locker'), 1,
             'The library door opens with your student card.'),
            ('Where is the quiet room?',
             ('ground floor', 'first floor', 'second floor', 'third floor'), 3,
             'Third floor: study rooms and the quiet room.'),
            ('How long is a study room for?',
             ('one hour', 'two hours', 'three hours', 'all day'), 1,
             'Rooms are for two hours.'),
            ('Which room is for six people?',
             ('Room 2', 'Room 3', 'Room 6', 'Room 8'), 3,
             'Room 8 is for six people. Six is the number of people, not the room.'),
            ('Where do students eat?',
             ('the study rooms', 'the third floor', 'the canteen', 'the library'), 2,
             'Food and drink stay in the canteen.')]),

    r3=dict(
        sub='A campus map',
        title='A Campus Is a Small Town',
        words=128,
        paras=[
            'Riverside campus is a small town. There are six buildings, a canteen, a sports '
            'centre and a shop. About two thousand people come here every day.',
            'Every building has a letter. Block A is for Business, Block B is for Science '
            'and Block C is for the offices. The letters are on every door and on every '
            'map. New students find a room by the letter first and the number second. Room '
            'B204 is in Block B, on the second floor, and it is the fourth door.',
            'Not every college does this. Some colleges use names, not letters. A name is '
            'easy to remember. A letter is easy to find on a map. A campus with letters is '
            'cold at first, but nobody needs a map for long.'],
        skill=('Letters and numbers carry meaning', [
            'In a short text about a place, the letters and numbers are the facts.',
            'Room B204: read it as three parts — the block, the floor, the door.',
            'The last paragraph of a short text is often the writer’s opinion.',
            'A question with every or all needs a word like every or all in the text.']),
        guided=[
            ('How many buildings are there on the campus?',
             ('four', 'six', 'ten', 'two thousand'), 1,
             'There are six buildings. Two thousand is the number of people.'),
            ('Which block is for Science?',
             ('Block A', 'Block B', 'Block C', 'Block D'), 1,
             'Block B is for Science.'),
            ('Where is room B204?',
             ('Block A, floor 2', 'Block B, floor 2', 'Block B, floor 4', 'Block C, floor 2'), 1,
             'B is the block and the 2 is the floor.'),
            ('What does every building have?',
             ('a canteen', 'a letter', 'a shop', 'a map'), 1,
             'Every building has a letter.')],
        exam=[
            ('How many people come to the campus every day?',
             ('six', 'two hundred', 'two thousand', 'four hundred'), 2,
             'About two thousand people come here every day.'),
            ('Where are the offices?',
             ('Block A', 'Block B', 'Block C', 'the sports centre'), 2,
             'Block C is for the offices.'),
            ('In room B204, what is the 4?',
             ('the block', 'the floor', 'the door', 'the year'), 2,
             'It is the fourth door, in the second paragraph.'),
            ('Some colleges use',
             ('numbers only', 'names', 'no maps', 'one building'), 1,
             'Some colleges use names, not letters.'),
            ('The writer thinks a name is',
             ('easy to remember', 'easy to find on a map', 'cold', 'not easy'), 0,
             'A name is easy to remember. The map one is the letter.'),
            ('A campus with letters is',
             ('warm at first', 'cold at first', 'always difficult', 'never easy'), 1,
             'A campus with letters is cold at first.'),
            ('What is the big idea of the passage?',
             ('Riverside is very big.', 'Letters help people find rooms.',
              'Science is in Block B.', 'Students are often lost.'), 1,
             'Every paragraph is about how the letters and numbers help you find a room.')]),

    l1=dict(
        sub='Asking the way',
        caption='A new student asks the way to the sports centre',
        skill=('Follow the directions in order', [
            'Directions come in order. Draw the way with your finger as you listen.',
            'Left, right and straight are the three words that matter most.',
            'Past, behind, opposite and next to tell you where to stop.',
            'If you miss one step, listen for the last one. People repeat the end.']),
        warm=[
            ('Excuse me, is there a canteen near here?',
             ('At four o’clock.', 'Yes, in Block B.', 'Two books.', 'He is a teacher.'), 1,
             'Is there ...? takes Yes, there is, or the place itself.'),
            ('Where is the library?',
             ('It is free.', 'On Monday.', 'Opposite the canteen.', 'Yes, it is.'), 2,
             'Where asks for a place.'),
            ('Thank you very much.',
             ('You are welcome.', 'Turn left.', 'In Block A.', 'Six books.'), 0,
             'Thank you takes You are welcome.')],
        script=[
            ('Man', 'Excuse me. I am new here. Where is the sports centre?'),
            ('Woman', 'It is behind Block C. Do you know Block C?'),
            ('Man', 'No, I do not.'),
            ('Woman', 'It is the building opposite the library.'),
            ('Man', 'Ah, the library I know. So I walk past the library.'),
            ('Woman', 'Yes. Walk past the library and turn right at the corner.'),
            ('Man', 'Right at the corner.'),
            ('Woman', 'Then straight on for two minutes. The sports centre is on your left, '
                      'behind the car park.'),
            ('Man', 'Behind the car park. Thank you.'),
            ('Woman', 'There is a sign at the entrance. You cannot miss it.')],
        items=[
            ('What is the man looking for?',
             ('the library', 'the sports centre', 'Block C', 'the car park'), 1,
             'His first question is Where is the sports centre?'),
            ('Where is the sports centre?',
             ('in Block C', 'behind Block C', 'opposite Block C', 'in the library'), 1,
             'It is behind Block C.'),
            ('Where is Block C?',
             ('behind the library', 'opposite the library', 'in the library',
              'next to the canteen'), 1,
             'It is the building opposite the library.'),
            ('Which way does he turn at the corner?',
             ('left', 'right', 'straight on', 'back'), 1,
             'Turn right at the corner.'),
            ('The sports centre is behind',
             ('the library', 'the canteen', 'the car park', 'Block A'), 2,
             'On your left, behind the car park.'),
            ('What is at the entrance?',
             ('a help desk', 'a sign', 'a locker', 'a lift'), 1,
             'There is a sign at the entrance.')]),

    l2=dict(
        sub='The library',
        caption='An announcement in the library',
        poster=['LIBRARY · THIS WEEK', 'Second floor closed Wednesday',
                'Science books: ground floor'],
        skill=('One change, one reason', [
            'Most short announcements say one thing is different this week.',
            'Listen for the day, the place and the reason, in that order.',
            'The reason often comes last, after because or so.',
            'Write the change in three words. That is usually all you need.']),
        warm=[
            ('Is the library open on Wednesday?',
             ('Yes, it is.', 'On the second floor.', 'Six books.', 'Turn right.'), 0,
             'Is it ...? takes Yes, it is or No, it is not.'),
            ('Where are the Science books today?',
             ('At nine.', 'On the ground floor.', 'Yes, they are.', 'For two hours.'), 1,
             'Where asks for a place.'),
            ('Sorry about the trouble.',
             ('That is fine.', 'In Block C.', 'Three weeks.', 'It is closed.'), 0,
             'An apology takes That is fine.')],
        script=[('Woman', 'Good afternoon. This is a short announcement about the library. On '
                          'Wednesday the second floor is closed all day, because of work on '
                          'the lift. The Science books are on the ground floor on that day '
                          'only, next to the help desk. The study rooms on the third floor '
                          'are open as normal. We are sorry for the trouble.')],
        items=[
            ('Which floor is closed?',
             ('the ground floor', 'the first floor', 'the second floor', 'the third floor'), 2,
             'On Wednesday the second floor is closed all day.'),
            ('Which day is it closed?',
             ('Monday', 'Wednesday', 'Friday', 'Sunday'), 1,
             'On Wednesday, in the first sentence of the announcement.'),
            ('Why is it closed?',
             ('work on the lift', 'no staff', 'a free day', 'new books'), 0,
             'Because of work on the lift.'),
            ('Where are the Science books on that day?',
             ('the first floor', 'the ground floor', 'the third floor', 'the canteen'), 1,
             'On the ground floor on that day only, next to the help desk.'),
            ('What about the study rooms?',
             ('they are closed', 'they are open as normal', 'they move',
              'they are on the second floor'), 1,
             'The study rooms on the third floor are open as normal.')]),

    l3=dict(
        sub='A campus map',
        caption='A short talk about the shape of the campus',
        board=['THE CAMPUS', 'six blocks · one street',
               'letter = block', 'number = floor + door'],
        skill=('Listen for the plan behind the place', [
            'A talk about a place usually explains the plan, not the walk.',
            'The speaker gives a rule, then an example of the rule.',
            'Hear the rule first. The example is there to make the rule clear.',
            'A question about why usually points at the rule, not the example.']),
        warm=[
            ('Is there a map at the entrance?',
             ('Yes, there is.', 'At nine.', 'Six books.', 'He is new.'), 0,
             'Is there ...? takes Yes, there is.'),
            ('Are there any study rooms?',
             ('It is closed.', 'Yes, there are eight.', 'On Wednesday.', 'Turn left.'), 1,
             'Are there ...? takes Yes, there are.'),
            ('How do I find room B204?',
             ('It is free.', 'At the weekend.', 'Block B, second floor.', 'Yes, you do.'), 2,
             'How do I find ...? asks for the place.')],
        script=[('Man', 'Before your first class, here is the plan of this campus. There is '
                        'one street and six blocks. The blocks are on both sides of the '
                        'street. Every block has a letter and every room has that letter '
                        'and three numbers. The first number is the floor. The two numbers '
                        'after it are the door. So room C108 is in Block C, on the first '
                        'floor, and it is the eighth door. It is the same rule in every '
                        'block on this campus. Learn this rule once and you never need a '
                        'map again.')],
        items=[
            ('How many blocks are there?',
             ('one', 'three', 'six', 'eight'), 2,
             'There is one street and six blocks.'),
            ('Where are the blocks?',
             ('at the end of the street', 'on both sides of the street', 'behind the library',
              'in the car park'), 1,
             'The blocks are on both sides of the street.'),
            ('In room C108, what is the 1?',
             ('the block', 'the floor', 'the door', 'the street'), 1,
             'The first number is the floor.'),
            ('In room C108, what is the 08?',
             ('the block', 'the floor', 'the door', 'the year'), 2,
             'The two numbers after it are the door.'),
            ('How many numbers does a room have?',
             ('one', 'two', 'three', 'four'), 2,
             'Every room has that letter and three numbers.'),
            ('Why does the speaker explain the rule?',
             ('because the campus is big', 'so students do not need a map',
              'because the map is wrong', 'so students go to Block C'), 1,
             'Learn this rule once and you never need a map again.')]),

    sp=[
        dict(sub='A campus map',
             focus='the sounds /θ/ in third and /ð/ in there',
             skill=('Two th sounds', [
                 'There, this and that use the soft /ð/, with the voice on.',
                 'Third, three and thank use the hard /θ/, with no voice.',
                 'Put your tongue between your teeth for both. That is the whole trick.',
                 'Never say *zere* or *dere*. The tongue must come out.']),
             repeat=['There is a map here.', 'This is Block A.',
                     'The library is over there.', 'There are six blocks on the campus.',
                     'The third floor is the quiet floor.',
                     'There are three study rooms on this floor.',
                     'Thank you — there is a sign at that entrance.'],
             theme='the place where you study',
             qs=['First, where do you study — at home, at college, or somewhere else?',
                 'Tell me about one room there. What is in it?',
                 'Some people need a quiet room and some people like noise. Which are you, '
                 'and why?',
                 'Finally, is the building you study in a good building? Say why.'],
             frames=['I study ... . It is ... .',
                     'There is a ... and there are two ... .',
                     'I need ... , because ... .',
                     'The building is ... , because ... .'],
             model=[(1, 'I study at the college library, because at home there is always '
                        'somebody in the room.'),
                    (2, 'There is one long table and there are twelve chairs. There is a '
                        'window behind the table.'),
                    (3, 'I need a quiet room. I think about one thing at a time, so noise '
                        'takes the thing away.'),
                    (4, 'The building is good, because the study rooms are at the top and '
                        'the canteen is on the ground floor.')],
             selfcheck=['I put my tongue between my teeth for th',
                        'I used there is and there are correctly',
                        'I gave a reason after my opinion']),
        dict(sub='The library',
             focus='numbers: thirteen and thirty, fourteen and forty',
             skill=('The teen and the ty', [
                 'Thirteen is THIR-TEEN, with two strong parts. Thirty is THIR-ty.',
                 'The -teen number is longer. Make it longer when you say it.',
                 'If somebody looks unsure, say one-three or three-zero.',
                 'Times are the same: at fifteen past, at fifty past.']),
             repeat=['The library opens at eight.', 'There are four floors.',
                     'I take six books.',
                     'My study room is on the third floor.',
                     'There are thirteen chairs in that room.',
                     'The library closes at nine on Friday.',
                     'There are thirty study rooms in this building.'],
             theme='books and reading',
             qs=['To start, how often do you go to a library?',
                 'What is the last book you read? Tell me a little about it.',
                 'Some people read on paper and some people read on a phone. Which is '
                 'better for study, do you think?',
                 'Finally, is a library in a college still important? Say why or why not.'],
             frames=['I go to a library ... .',
                     'The book is about ... . It is ... .',
                     'I think ... is better for study, because ... .',
                     'A library is ... important, because ... .'],
             model=[(1, 'I go to a library two or three times a week, usually in the '
                        'afternoon.'),
                    (2, 'The book is about a family in a small town. It is not long and the '
                        'English in it is not difficult.'),
                    (3, 'I think paper is better for study, because on a phone my eyes are '
                        'tired after an hour.'),
                    (4, 'A library is still important, because it is a quiet room for '
                        'students with no quiet room at home.')],
             selfcheck=['I made the -teen numbers longer than the -ty numbers',
                        'I answered with a full sentence',
                        'I gave an example']),
        dict(sub='Asking the way',
             focus='the stress in long place words',
             skill=('Say the question, then stop', [
                 'Ask one question and stop. Do not add three more.',
                 'Excuse me at the start makes every question polite.',
                 'Repeat the last words of the answer. It shows you understand.',
                 'If you do not understand, say Sorry, again please. That is enough.']),
             repeat=['Excuse me, where is the canteen?',
                     'Is there a lift here?',
                     'The sports centre is behind Block C.',
                     'Turn right at the corner and walk straight on.',
                     'The reception is opposite the main entrance.',
                     'There is a help desk near the library door.',
                     'Walk past the car park and look on your left.'],
             theme='finding your way',
             qs=['First, are you good at finding your way in a new place?',
                 'Tell me about a time a place is difficult to find.',
                 'Some people ask a person and some people use a phone. Which do you do, '
                 'and why?',
                 'Finally, what makes a building easy to find your way in?'],
             frames=['I am ... at finding my way.',
                     'The ... in my town is difficult to find, because ... .',
                     'I usually ... , because ... .',
                     'A building is easy when ... .'],
             model=[(1, 'I am not very good at finding my way. In a new place I always walk '
                        'the wrong way first.'),
                    (2, 'The station in my town is difficult to find, because there are four '
                        'entrances and only one of them is open.'),
                    (3, 'I usually ask a person, because a person knows the short way and a '
                        'phone does not.'),
                    (4, 'A building is easy when there is a sign at every corner and a map '
                        'at the entrance.')],
             selfcheck=['I asked one question and stopped',
                        'I used a preposition of place in every answer',
                        'I said more than one sentence'])],

    w1=dict(
        sub='A campus map',
        skill=('Is there and Are there', [
            'One thing: Is there a lift? More than one: Are there any lifts?',
            'The question starts with is or are, then there.',
            'Where goes in front of everything: Where is the lift?',
            'Keep the question short. Four or five words is a normal question.']),
        guided=[
            ('There is a lift in Block A.', ['is', 'there', 'a', 'lift'], 'Is there a lift?'),
            ('The library is opposite.', ['where', 'is', 'the', 'library'],
             'Where is the library?'),
            ('There are eight study rooms.', ['are', 'there', 'any', 'study rooms'],
             'Are there any study rooms?')],
        exam=[
            ('The canteen is in Block B.', ['where', 'is', 'the', 'canteen'],
             'Where is the canteen?'),
            ('There is a map at the entrance.', ['is', 'there', 'a', 'map'],
             'Is there a map?'),
            ('There are six blocks.', ['how', 'many', 'blocks', 'are', 'there'],
             'How many blocks are there?'),
            ('The help desk is on the ground floor.',
             ['which', 'floor', 'is', 'the help desk', 'on'],
             'Which floor is the help desk on?'),
            ('There is a car park behind Block C.', ['is', 'there', 'a', 'car park'],
             'Is there a car park?'),
            ('The library is on your left.', ['walk', 'past', 'the library', 'now'],
             'Walk past the library now.'),
            ('The sports centre is behind the car park.',
             ['what', 'is', 'behind', 'the car park'],
             'What is behind the car park?')]),

    w2=dict(
        sub='The library',
        to='library@riverside.edu',
        date='22/09/2025',
        subject='Study rooms',
        target=40,
        scenario=['You want a study room in the library on Saturday.',
                  'You do not know if the library is open. Write to the library.'],
        bullets=['say who you are',
                 'ask about Saturday opening times',
                 'ask how to take a study room'],
        skill=('A question needs a question mark', [
            'Every bullet point that starts with ask needs a question mark.',
            'Put the question word first: When ...? How ...? Where ...?',
            'One sentence for each bullet point is enough.',
            'Do not ask four questions when the task asks for two.']),
        model=['Dear Library,', '',
               'My name is Ana Ruiz and I am a student in Group B.',
               'When is the library open on Saturday?',
               'How do I take a study room on the third floor?', '',
               'Thank you,', 'Ana Ruiz'],
        notes=['The three bullet points are answered in the order of the task.',
               'Both questions have a question word at the front and a question mark at the end.',
               'The sentences are short. Short and correct is better here.',
               'There is a greeting at the top and a name at the bottom.'],
        frame=['# Start', 'Dear Library,', '',
               '# Who you are', 'My name is ______________ and I am ______________ .', '',
               '# Question 1 — about Saturday',
               'When ______________ the library ______________ on Saturday?', '',
               '# Question 2 — about a study room',
               'How ______________ I take ______________ ?', '',
               '# Finish', 'Thank you,', '______________']),

    w3=dict(
        sub='Asking the way',
        prof='Mr Dale',
        target=45,
        question='Some colleges put a big map at every entrance. Others put nothing, and new '
                 'students ask people. Which is better for a new student? Give one reason.',
        posts=[('Yusuf', 'm', 'A map is better. I do not like to ask, because my English is '
                               'not good yet and I am slow with the answer.'),
               ('Mei', 'w', 'I think asking is better. A person tells you the short way. A '
                            'map shows you the long way, because a map has no feet.')],
        skill=('Answer the question on the page', [
            'The professor asks which is better. Say which, in your first sentence.',
            'Then say why, with because.',
            'Say one thing about Yusuf or Mei. Agree or do not agree.',
            'Three short sentences are enough for a full post at this level.']),
        starters=['I agree with Mei, because ...',
                  'For a new student, a map is ...',
                  'In my first week ...',
                  'The best thing is ...'],
        model=['I agree with Mei. Asking a person is better for a new student, because a '
               'person answers the real question.',
               'A map shows every building, and a new student does not want every building.',
               'But a map at the entrance is also good on the first day, when there is '
               'nobody to ask.'],
        model_words=53,
        frame=['# Your opinion', 'I agree with ______________ . I think ______________ .', '',
               '# Your reason — use because',
               'This is better because ______________ .', '',
               '# One sentence about your own first week',
               'In my first week ______________ .']),

    gram=dict(
        title='there is and there are · prepositions of place · this, that, these, those',
        headers=['Form', 'Example'],
        rows=[['there is + one thing', 'There is a lift in Block A.'],
              ['there are + more things', 'There are six blocks.'],
              ['negative', 'There is not a canteen in Block C.'],
              ['question', 'Is there a map? / Are there any study rooms?'],
              ['place words', 'in, on, at, near, behind, between, opposite, next to'],
              ['this / that', 'this room (here) · that room (over there)'],
              ['these / those', 'these books (here) · those books (over there)']],
        notes=['There is and there are say that something exists. They do not say who owns '
               'it. There is a lift means a lift exists in this place.',
               'Use any in questions and in negatives with plural words: Are there any '
               'lockers? There are not any lockers here.',
               'This and these are for things near you. That and those are for things away '
               'from you. This is the only difference, and it is the same in the plural.'],
        watch='Never say *It has a lift in Block A* or *Have a lift*. Many languages build '
              'this sentence with have. English builds it with there is.',
        ex=[('Write there is or there are.', [
            '__________ a help desk near the door.',
            '__________ eight study rooms on the third floor.',
            '__________ not a lift in this building.',
            '__________ two entrances to the library.',
            '__________ a sign at the corner.',
            '__________ six blocks on the campus.'],
            ['There is', 'There are', 'There is', 'There are', 'There is', 'There are']),
            ('Write in, on, behind, between, opposite or near.', [
                'The canteen is __________ Block B.',
                'The books are __________ the second floor.',
                'The sports centre is __________ Block C.',
                'The library is __________ the canteen and the shop.',
                'My room is __________ the help desk, so I see it from my door.',
                'The car park is __________ the entrance, only two minutes away.'],
             ['in', 'on', 'behind', 'between', 'opposite', 'near']),
            ('Write this, that, these or those.', [
                '__________ book here is mine.',
                '__________ buildings over there are the halls of residence.',
                '__________ rooms here are the study rooms.',
                '__________ man at the other end of the corridor is my teacher.'],
             ['This', 'Those', 'These', 'That'])],
        bas='In Build a Sentence the test loves there is and there are, because the word '
            'order changes when the sentence becomes a question: There is a lift becomes Is '
            'there a lift? Only two words move, and they move together.'),

    sound=dict(
        title='Numbers, and the trouble with teen and ty',
        intro='Numbers are the most common thing you hear wrong in a listening test. The '
              'problem is almost always the same two families: thirteen and thirty, fourteen '
              'and forty, and the rest of that pair.',
        rows=[('13 / 30', ['thirteen', 'thirty'],
               'Thirteen has two strong parts and is longer. Thirty is short and the end '
               'falls away.'),
              ('14 / 40', ['fourteen', 'forty'],
               'Same rule. Listen for the length of the word, not the last sound.'),
              ('15 / 50', ['fifteen', 'fifty'],
               'In a room with noise the -n at the end of fifteen is the only difference.'),
              ('100', ['a hundred', 'one hundred'],
               'Both are correct. In numbers over a hundred English puts in and: a hundred '
               'and six.'),
              ('0', ['zero', 'oh', 'nought'],
               'In room numbers and phone numbers people say oh: room C-one-oh-eight.'),
              ('ordinals', ['first', 'second', 'third', 'fourth'],
               'Floors use these: the third floor, not the three floor.')],
        hear=[('Do you hear 13 or 30?', '30'), ('Do you hear 14 or 40?', '14'),
              ('Do you hear 15 or 50?', '50'), ('Do you hear 16 or 60?', '16'),
              ('Do you hear 18 or 80?', '80'), ('Do you hear 19 or 90?', '19')],
        say=['Count from thirteen to twenty.',
             'Say these room numbers: A104, B208, C316.',
             'Say your phone number one number at a time.',
             'Say the floors: first, second, third, fourth, fifth.']),

    builder=dict(
        title='Capital letters and full stops',
        rule='A sentence starts with a capital letter and ends with a full stop. In the '
             'Writing section this is not a small thing: a page with no capital letters and '
             'no full stops is hard to read, and a marker who has to work hard gives you a '
             'lower band.',
        pairs=[['the library is in block b', 'The library is in Block B.'],
               ['there are six blocks', 'There are six blocks.'],
               ['where is the canteen', 'Where is the canteen?'],
               ['my name is ana i am from peru', 'My name is Ana. I am from Peru.'],
               ['turn left at the corner then walk straight on',
                'Turn left at the corner. Then walk straight on.']],
        watch='Names of people, places, days and months take a capital letter in the middle '
              'of a sentence too: on Monday, in Block C, with Ana.',
        ex=[('there is a map at the entrance', 'There is a map at the entrance.'),
            ('is there a lift in this building', 'Is there a lift in this building?'),
            ('the canteen is open on saturday', 'The canteen is open on Saturday.'),
            ('i study in the library every monday', 'I study in the library every Monday.'),
            ('There are eight study rooms.', 'yes — this one is already correct'),
            ('walk past the shop the library is on your left',
             'Walk past the shop. The library is on your left.')]),

    typing=dict(
        title='The top row',
        intro='Your fingers stay on the home row and reach up. The left hand takes Q W E R '
              'T and the right hand takes Y U I O P. Reach up, type, come back down.',
        keys='qwertyuiop',
        caption='The top row. Each finger reaches up to the key above it and comes straight '
                'back to the home row. The hand itself does not move.',
        drill=['qwer tyui op qwer tyui op',
               'we type to the top row; we were there',
               'they are quiet; the quiet type were right'],
        target=9),

    study=dict(
        title='Using a dictionary for learners',
        intro='A dictionary that gives you one word in your own language is quick and it '
              'teaches you almost nothing. A dictionary for learners gives you a meaning in '
              'easy English, a sentence, and the part of speech. That is three times the '
              'work and ten times the result.',
        steps=['Look for a dictionary with the word learner in the name. It is written in '
               'the two thousand words you are learning here.',
               'Read the whole entry, not the first line. The second meaning is often the '
               'one you want.',
               'Look at the little word after the word: n for noun, v for verb, adj for '
               'adjective. It tells you where the word goes in a sentence.',
               'Copy the example sentence, not the meaning. A sentence shows you how to use '
               'the word; a meaning only tells you what it is.',
               'Look up a word twice. The first time you read it. The second time you learn '
               'it.'],
        tip='Do not look up every word. Read the whole sentence first and guess. Then look '
            'it up and see if you are right. Guessing and checking builds a skill that '
            'looking up does not.'),

    rev=dict(
        vocab=[('the building with the books', 'library'),
               ('the place where you eat in a college', 'canteen'),
               ('the room for science work', 'laboratory'),
               ('the desk at the entrance', 'reception'),
               ('a small box with a key, for your things', 'locker'),
               ('the door you come in by', 'entrance'),
               ('steps up to the next floor', 'stairs'),
               ('on the other side, looking at it', 'opposite'),
               ('a picture of a place from above', 'map'),
               ('where two streets meet', 'corner'),
               ('not far', 'near'),
               ('a small room that takes you up', 'lift')],
        gram=[('__________ a lift in Block A.', 'There is'),
              ('__________ six blocks on the campus.', 'There are'),
              ('The canteen is __________ Block B.', 'in'),
              ('The library is __________ the canteen and the shop.', 'between'),
              ('__________ there any study rooms?', 'Are'),
              ('__________ book here is mine.', 'This'),
              ('The books are __________ the second floor.', 'on'),
              ('__________ buildings over there are new.', 'Those')],
        mini=[
            ('The library is closed on',
             ('Monday', 'Wednesday', 'Saturday', 'Sunday'), 3,
             'Sunday   closed, on the library web page.'),
            ('The sports centre is',
             ('in Block C', 'behind Block C', 'opposite the canteen', 'in the car park'), 1,
             'It is behind Block C, in the conversation.'),
            ('In room C108, the 1 is',
             ('the block', 'the floor', 'the door', 'the year'), 1,
             'The first number is the floor, from the talk.'),
            ('Which sentence is correct?',
             ('It has a lift here.', 'There is a lift here.', 'Have a lift here.',
              'Is a lift here.'), 1,
             'English builds this sentence with there is.'),
            ('Which question is correct?',
             ('There is a map?', 'Is there a map?', 'Is a map there?', 'A map is there?'), 1,
             'Is and there move together to the front.'),
            ('Every building on the campus has',
             ('a letter', 'a number', 'a lift', 'a canteen'), 0,
             'Every building has a letter, in the reading passage.')]),

    tip='In the Listening section, numbers are where marks are lost, not grammar. When you '
        'hear a number, write the figure down at once — 13, not thirteen. Figures are '
        'faster, and you can still hear the next sentence while you write them.',
)
