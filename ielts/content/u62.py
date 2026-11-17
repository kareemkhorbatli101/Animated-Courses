# -*- coding: utf-8 -*-
"""Foundation 1, Unit 2 - Home and Where You Live.

The unit a student needs before they need any of the others: how to read
an advert for a room, how to say what is wrong with a heater, and how to
read a plan. The longer readings go to how a house is built and to what a
council decides, because those are where the housing vocabulary of
Volume 1 actually lives.
"""

_BOOKS = dict(kind='bar',
              title='Where four families keep their books',
              sub='number of books, by room',
              cats=['Living room', 'Bedroom', 'Kitchen', 'Hall'],
              series=[('Books', [48.0, 31.0, 6.0, 12.0])],
              ylab='books')

_HOUSE = dict(kind='process',
              title='How a small house is built',
              sub='four stages, about twenty weeks',
              stages=[
               ('Base', 'a flat base of concrete is laid on the ground'),
               ('Walls', 'brick walls are built up from the base'),
               ('Roof', 'the roof goes on before any inside work starts'),
               ('Inside', 'heating, wires and water are fitted last')])

UNIT = dict(
 n=2, vol=7, level='A1-A2', band='below 4.0',
 theme='Home and Where You Live',
 opener=(
   'This unit is about the place you live in and the words you need to '
   'deal with it. You will read three adverts for rooms, label a plan, '
   'report a broken heater, follow how a house is built, and compare a '
   'village with a city. The technique page is looking ahead: keeping '
   'your eyes on the next question while your hand is still writing the '
   'last answer, which is the one habit that stops a recording getting '
   'away from you.'),

 cycles=[
  dict(
   sub='Finding a room',
   step=1,
   read=[
    dict(heading='Rooms to let: three small adverts',
         kind='Classified adverts',
         task='Matching features and short answer and True/False/Not '
              'Given',
         band='gt_short', qtype='Questions 1-5',
         skill=('An advert is read for what it does not say',
                ['Three adverts always differ in two or three things. '
                 'Find those things first: price, bills, how long.',
                 'If an advert does not mention something, that is '
                 'often the answer to a matching question.']),
         paras=[
          'A. Large room in a quiet street. Price 420 a month. Bills are '
          'not included. No smoking. Six months minimum.',
          'B. Small room above a shop. 350 a month, bills included. '
          'Noisy on market days, so it is not for everybody. Any length '
          'of stay permitted.',
          'C. Room in a new flat. 480 a month, bills included. The '
          'tenant must be in work and must give a written reference. '
          'Twelve months minimum.'],
         items=[
          ('Which room is the most expensive?', ['A', 'B', 'C'], 2,
           'Advert C at 480 a month, with bills included.',
           {0: 'Advert A is cheaper and excludes bills, so the total '
               'is still lower.', 1: 'Advert B is the middle price of the three.'}),
          ('Which room does not include bills?', ['A', 'B', 'C'], 0,
           'Advert A says bills are not included.',
           {1: 'Advert B includes bills in the rent it quotes.', 2: 'Advert C includes bills, which is why it looks dear.'}),
          ('Which room is noisy on some days?', ['A', 'B', 'C'], 1,
           'Advert B, which is above a shop on a market street.',
           {0: 'Advert A is on a quiet residential street.', 2: 'Advert C mentions no noise at all.'}),
          ('Room B is cheaper than room A.',
           ['True', 'False', 'Not Given'], 0,
           'Room B is 350 a month and room A is 420, so B is the '
           'cheaper.',
           {1: 'False would reverse the two prices, which are both '
               'given.', 2: 'Not Given is wrong because both monthly prices appear.'}),
          ('Room C is in the same street as room A.',
           ['True', 'False', 'Not Given'], 2,
           'Room A is in a quiet street and nothing is said about '
           'where room C is.',
           {0: 'True would need a street for room C, and none is '
               'given.', 1: 'False would also need that information, which the '
               'adverts omit.'})])],
   listen=[
    dict(heading='Asking about a room', part='Part 1',
         task='A telephone call about an advert', band='l1',
         qtype='Questions 6-10',
         script=[
          ('Caller', 'Hello. I am calling about the room above the '
           'shop.'),
          ('Owner', 'Yes, it is still free.'),
          ('Caller', 'Can I ask about the price? The advert says 350.'),
          ('Owner', 'That is right, and that includes the bills. There '
           'is no extra charge for heating or water.'),
          ('Caller', 'Is there a deposit?'),
          ('Owner', 'One month, so 350, and it is returned when you '
           'leave if nothing is broken.'),
          ('Caller', 'You say it is noisy.'),
          ('Owner', 'On Tuesday and Saturday, yes. The market is right '
           'under the window and the stalls start at six.'),
          ('Caller', 'I work nights, so the morning is when I sleep. '
           'That is a problem.'),
          ('Owner', 'Then I will be honest with you: it would not suit '
           'you. The room at the back of the same building is quieter '
           'and it is free from the fifteenth.'),
          ('Caller', 'How much is that one?'),
          ('Owner', 'Three hundred and eighty, bills included.'),
          ('Caller', 'Can I see it on Thursday?'),
          ('Owner', 'Thursday at six. The name is Perez. Shall I write '
           'yours down?'),
          ('Caller', 'Yes. It is Adeyemi. A-D-E-Y-E-M-I.')],
         items=[
          ('The room above the shop costs ____________ a month.', None,
           '350', 'And that price includes the bills.'),
          ('The deposit is ____________ month(s) rent.', None, 'one',
           'Returned at the end if nothing is broken.'),
          ('The market is noisy on Tuesday and ____________.', None,
           'Saturday', 'The stalls start at six in the morning.'),
          ('The quieter room is free from the ____________.', None,
           'fifteenth', 'It is at the back of the same building.'),
          ('They will meet on Thursday at ____________.', None, 'six',
           'The last exchange of the conversation.')])],
   speak=dict(
    part='Part 1', focus='The place where you live',
    intro='Two sentences for each answer. Say the fact, then one thing '
          'about it.',
    qs=['Do you live in a house or a flat?',
        'How long have you lived there?',
        'What do you like about the area?',
        'Would you like to move?'],
    shape=[('answer', 'I live in a small flat on the second floor.'),
           ('support', 'It has one bedroom, and the window looks over a '
            'quiet street.'),
           ('follow-up', 'I have been there two years and I am happy to '
            'stay.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking a landlord three questions about a room',
         prompt='You have seen an advert for a room. Write a letter to '
                'the landlord. In your letter: say which room you mean; '
                'ask about the price and the bills; ask when you could '
                'see it.',
         instruct='  Write at least 80 words in about 15 minutes.',
         lines=10,
         model=[
          'Dear Mr Perez,',
          'I am writing about the room above the shop on Market Street, '
          'which I saw advertised on Monday.',
          'Could you tell me whether the price of 350 a month includes '
          'the bills, and how much the deposit is? I would also like to '
          'know whether the price is the same for a short stay.',
          'Would it be possible to see the room this week? I am free on '
          'Thursday evening or on Saturday morning.',
          'Yours sincerely,',
          'Ife Adeyemi'],
         notes=['The first sentence names the room and where it was '
                'advertised, so the landlord knows which one.',
                'The two questions are in one paragraph and both are '
                'about money. Keeping like with like is half of '
                'organisation at this level.',
                'The letter offers two times rather than asking an open '
                'question, which gets a faster answer.'],
         criterion=[('The room identified in the first sentence',
                     'Task Achievement'),
                    ('Both questions clearly asked', 'Task Achievement'),
                    ('Two possible times offered', 'Task Response'),
                    ('A formal opening and closing', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='there is and there are',
    explain='Use there is with one thing and there are with more than '
            'one. For a question, put is or are first.',
    examples=['There is a shop under the flat.',
              'There are two bedrooms.',
              'Is there a deposit?',
              'Are there any other rooms?'],
    items=[('____ a lift in the building?', 'Is there a lift in the '
            'building?'),
           ('____ three rooms on this floor.',
            'There are three rooms on this floor.'),
           ('____ no extra charge for heating.',
            'There is no extra charge for heating.'),
           ('____ any rooms free in June?',
            'Are there any rooms free in June?'),
           ('____ a market under the window.',
            'There is a market under the window.')],
    task='Complete each sentence with there is or there are.'),
   vocab=[('price', 'the money you must pay for something'),
          ('expensive', 'costing a lot of money'),
          ('tenant', 'a person who pays to live in a place'),
          ('flat', 'a home on one floor inside a larger building'),
          ('value', 'how much something is worth'),
          ('permitted', 'allowed'),
          ('written', 'put down on paper, not only spoken'),
          ('responsible', 'having the duty to deal with something'),
          ('pressure', 'a strong force, or a strong push to act'),
          ('market', 'a place where people sell goods from stalls')],
   expr=[('I am calling about the room.', 'why you are telephoning'),
         ('Does that include the bills?', 'checking what a price covers'),
         ('Could I see it this week?', 'asking for a viewing'),
         ('It would not suit you.', 'saying honestly that it is wrong')],
   trans=['and', 'but', 'so', 'then']),

  dict(
   sub='Rooms and furniture',
   step=1,
   read=[
    dict(heading='Flat 3B: a plan of the rooms',
         kind='Floor plan with labels',
         task='Plan labelling',
         band='gt_short', qtype='Questions 11-15',
         paras=[
          'The front door is on the north side of the flat. As you come '
          'in, the kitchen is on your left and the bathroom is on your '
          'right.',
          'The living room is straight ahead, in the south corner, with '
          'two windows that face the garden. A narrow strip of cupboards '
          'runs along the east wall.',
          'The bedroom is reached through the living room. It is the '
          'only room on the west side, and it is the quietest, because '
          'the street is on the other side of the building.'],
         items=[
          ('The front door is on the ____________ side.', None, 'north',
           'Paragraph 1, the first line of the description.'),
          ('As you come in, the kitchen is on your ____________.', None,
           'left', 'Paragraph 1, and the bathroom is on the right.'),
          ('The living room is in the ____________ corner.', None,
           'south', 'Paragraph 2, with windows facing the garden.'),
          ('The cupboards run along the ____________ wall.', None,
           'east', 'Paragraph 2: a narrow strip of them.'),
          ('Which is the quietest room?', None, 'the bedroom',
           'Paragraph 3, because the street is on the other side.')])],
   listen=[
    dict(heading='Showing a friend round the flat', part='Part 2',
         task='One speaker describing a home', band='l2',
         qtype='Questions 16-20',
         script=[
          ('Speaker', 'Come in. It is small, but it works, and I will '
           'show you why.'),
          ('Speaker', 'This is the kitchen. There is only one base unit '
           'and a shelf, so I keep the heavy things low and everything '
           'else on the wall. Two people cannot cook here at the same '
           'time. One person can cook very well.'),
          ('Speaker', 'The living room is through here. The row of '
           'cupboards along that wall came with the flat and I would '
           'not have chosen them, but they hold more than they look as '
           'though they do.'),
          ('Speaker', 'I wash clothes in the bathroom, because there is '
           'no room for a machine in the kitchen. That is the one thing '
           'I would change.'),
          ('Speaker', 'The bedroom is at the back. The street is on the '
           'other side of the building, so I never hear it. After two '
           'years in a flat above a road, that is worth more to me than '
           'another two square metres.')],
         items=[
          ('The kitchen has one base unit and one ____________.', None,
           'shelf', 'The speaker keeps heavy things low.'),
          ('How many people can cook in the kitchen at once?', None,
           'one',
           'Two people cannot, the speaker says.'),
          ('The cupboards came with the ____________.', None, 'flat',
           'The speaker would not have chosen them.'),
          ('Clothes are washed in the ____________.', None, 'bathroom',
           'There is no room for a machine in the kitchen.'),
          ('The bedroom is quiet because the street is on the other '
           'side of the ____________.', None, 'building',
           'The speaker values this more than extra space.')])],
   speak=dict(
    part='Part 1', focus='Your favourite room',
    intro='Name the room, then say one thing you do in it. That is the '
          'whole answer at this level.',
    qs=['Which room do you like most?',
        'What do you do in that room?',
        'Is your home light or dark?',
        'What would you change about it?'],
    shape=[('answer', 'My favourite room is the kitchen.'),
           ('support', 'It is the only room with a big window, so it is '
            'light all morning.'),
           ('follow-up', 'I eat there and I also work there, because '
            'the table is the biggest thing I own.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Where four families keep their books',
         figure=_BOOKS,
         prompt='The chart shows where books are kept in one home. '
                'Describe the chart. Give the highest and the lowest '
                'and make one comparison.',
         instruct='  Write at least 90 words in about 20 minutes.',
         lines=11,
         model=[
          'The chart shows how many books are kept in each of four rooms '
          'in one home.',
          'The living room holds by far the most, at forty-eight books. '
          'The kitchen holds the fewest, at six. The difference between '
          'them is forty-two books, which is eight times as many in the '
          'living room as in the kitchen.',
          'The bedroom is second, with thirty-one, and the hall holds '
          'twelve.',
          'Nearly four fifths of the books in the home are therefore in '
          'the two rooms where people sit down.'],
         notes=['The opening sentence rewrites the question instead of '
                'copying it.',
                'The comparison is a real one: eight times as many, not '
                'simply "more than".',
                'The last sentence groups two rooms together, which is a '
                'better ending than repeating the numbers.'],
         criterion=[('An opening in your own words', 'Task Achievement'),
                    ('Highest and lowest with their numbers',
                     'Task Achievement'),
                    ('One comparison that uses a multiple or a share',
                     'Task Response'),
                    ('No opinion about books anywhere', 'Task '
                     'Response')])],
   gram=dict(
    point='Prepositions of place',
    explain='Use next to, opposite, between, above and along to say '
            'where something is in a room.',
    examples=['The kitchen is on your left.',
              'The cupboards run along the east wall.',
              'The bathroom is opposite the kitchen.',
              'There is a shelf above the base unit.'],
    items=[('The shelf is ____ the base unit.',
            'The shelf is above the base unit.'),
           ('The bathroom is ____ the kitchen.',
            'The bathroom is opposite the kitchen.'),
           ('The table is ____ the two windows.',
            'The table is between the two windows.'),
           ('The cupboards run ____ the wall.',
            'The cupboards run along the wall.'),
           ('The bedroom is ____ the living room.',
            'The bedroom is next to the living room.')],
    task='Complete each sentence with a preposition of place.'),
   vocab=[('north', 'the direction on the top of a map'),
          ('south', 'the direction opposite north'),
          ('east', 'the direction where the sun rises'),
          ('west', 'the direction where the sun sets'),
          ('corner', 'the place where two walls or roads meet'),
          ('row', 'a line of things side by side'),
          ('strip', 'a long narrow piece of something'),
          ('units', 'single pieces that make up a set'),
          ('base', 'the bottom part that holds the rest'),
          ('wash', 'to clean with water')],
   expr=[('As you come in, the kitchen is on your left.',
          'describing a plan from the door'),
         ('It is small, but it works.', 'accepting a limit'),
         ('That is the one thing I would change.', 'naming a single '
          'problem'),
         ('It holds more than it looks as though it does.',
          'correcting an impression')],
   trans=['also', 'too', 'and', 'but']),

  dict(
   sub='Problems in the house',
   step=2,
   read=[
    dict(heading='Repairs: what to do and who to call',
         kind='Notice', task='Matching and short answer',
         band='gt_work', qtype='Questions 21-25',
         skill=('A notice about repairs is read for who does what',
                ['The questions are nearly always about who to call and '
                 'how fast somebody comes.',
                 'Underline every time: four hours, two days, a week. '
                 'They are the answers.']),
         paras=[
          'If you have no heating or no hot water, telephone the '
          'emergency line, not the office. Somebody will come within '
          'four hours, including at the weekend.',
          'For a leaking tap or a broken door, use the repairs form on '
          'the website. These are answered within two working days. If '
          'a part has to be ordered, the work is completed within ten '
          'days and you are told in the meantime.',
          'A smoke alarm that beeps needs a new battery and nothing '
          'else. Batteries are free from the office.',
          'Damage caused by the tenant is payable by the tenant: a '
          'window broken from the inside is one example. Nobody is '
          'charged for anything that has worn out, so report it rather '
          'than complaining later.'],
         items=[
          ('Who should you call if you have no hot water?', None,
           'the emergency line',
           'Paragraph 1 says the emergency line, not the office.'),
          ('Somebody comes within ____________ hours.', None, 'four',
           'Paragraph 1, including at the weekend.'),
          ('A leaking tap is answered within ____________ working '
           'days.', None, 'two', 'Paragraph 2, using the website form.'),
          ('A smoke alarm that beeps needs a new ____________.', None,
           'battery', 'Paragraph 3, and batteries are free.'),
          ('Which is paid for by the tenant?',
           ['a worn-out tap', 'a window broken from inside',
            'a smoke alarm battery', 'a part that is ordered'], 1,
           'Paragraph 4: damage caused by the tenant.')])],
   listen=[
    dict(heading='Reporting a broken heater', part='Part 1',
         task='A call to a repairs office', band='l1',
         qtype='Questions 26-30',
         script=[
          ('Office', 'Repairs line, good morning.'),
          ('Tenant', 'My heating stopped last night. The flat is cold.'),
          ('Office', 'Is there hot water?'),
          ('Tenant', 'No, none.'),
          ('Office', 'Then this is an emergency and somebody will come '
           'today. Can I take the address?'),
          ('Tenant', 'Flat 3B, 14 Market Street.'),
          ('Office', 'Three B. And is the boiler making a noise?'),
          ('Tenant', 'It was making a noise on Sunday. Now it is '
           'silent.'),
          ('Office', 'That is useful. Is there a red light on the '
           'front?'),
          ('Tenant', 'Yes, there is.'),
          ('Office', 'Then it has turned itself off, which is what it '
           'should do. Do not press anything.'),
          ('Tenant', 'When will somebody come?'),
          ('Office', 'Between twelve and four. Will you be in?'),
          ('Tenant', 'I work until three. My neighbour has a key.'),
          ('Office', 'Then leave a note for us with her name, and we '
           'will knock there first.')],
         items=[
          ('The heating stopped ____________.', None, 'last night',
           'The first thing the tenant reports.'),
          ('There is no hot water, so the call is treated as an '
           '____________.', None, 'emergency',
           'The office decides this after one question.'),
          ('The boiler made a noise on ____________.', None, 'Sunday',
           'It is silent now, which the office finds useful.'),
          ('There is a ____________ light on the front of the boiler.',
           None, 'red', 'It means the boiler has turned itself off.'),
          ('Somebody will come between twelve and ____________.', None,
           'four', 'The tenant works until three, so a key is left.')])],
   speak=dict(
    part='Part 2', focus='A problem at home',
    longturn=[('I am going to talk about a problem I had at home. The water '
               'stopped working in my flat.'),
              ('It happened on a Saturday morning in winter. I turned on the '
               'tap in the kitchen and nothing came out. I tried the bathroom, '
               'and it was the same. It was very cold outside, about minus '
               'five, and I thought the pipe was frozen.'),
              ('I did two things. First, I asked my neighbour. She had water, '
               'so I knew the problem was only in my flat. Then I telephoned '
               'the landlord. He did not answer, so I sent him a message with '
               'a photograph of the tap.'),
              ('In the end it took two days. The landlord came on Sunday with '
               'a man who works on pipes. The man said the pipe '
               'outside the wall was frozen, and he used a special '
               'heater on it. After an hour the water came back. I was '
               'happy, but also angry: the pipe had no cover on it. '
               'The landlord put one on in the spring, so I think it '
               'will not happen again.')],
    intro='One minute to prepare. Use the bullets in order and you will '
          'fill the two minutes without hurrying.',
    qs=['Describe a problem you had at home.',
        'Say what happened.',
        'Say what you did about it.',
        'Say how it ended.'],
    shape=[('answer', 'Last winter the heating in my flat stopped '
            'working.'),
           ('support', 'It stopped at night and there was no hot water '
            'in the morning.'),
           ('support', 'I called the emergency line and somebody came '
            'the same afternoon.'),
           ('follow-up', 'It was a small part, replaced in an hour, and '
            'I learned not to wait until Monday.')]),
   write=[
    dict(task='Task 2',
         heading='Should people repair things or buy new ones?',
         prompt='Some people repair things when they break. Others buy '
                'new ones. Which is better? Give your opinion and '
                'reasons.',
         instruct='  Write at least 130 words in about 25 minutes.',
         lines=16, wband='essay',
         plan=('Repairing is better, for two reasons',
               [('It costs less',
                 ['a part for a boiler costs under fifty pounds',
                  'a new boiler costs two thousand']),
                ('It wastes less',
                 ['a thrown-away machine is mostly metal that was dug '
                  'up once',
                  'repairing keeps it in use for years more'])]),
         model=[
          'When something in the house breaks, some people repair it and '
          'others buy a new one. I think repairing is better, for two '
          'reasons.',
          'The first reason is cost. Last winter my heating stopped and '
          'the part that was replaced cost under fifty pounds. A new '
          'boiler costs about two thousand. For most families that '
          'difference decides the question on its own.',
          'The second reason is waste. A machine that is thrown away is '
          'mostly metal, and that metal was dug out of the ground once '
          'already. Repairing it keeps it in use for several more '
          'years, and nothing new has to be made.',
          'Sometimes a repair is not possible, or it costs nearly as '
          'much as a new machine. In that case buying is sensible. But '
          'as a normal rule, I believe repairing is cheaper and '
          'better.'],
         notes=['The opinion appears in the first paragraph and is not '
                'changed later.',
                'Both reasons carry a number. At this level a number is '
                'the easiest kind of support to write correctly.',
                'The last paragraph gives one case where the other side '
                'is right, which makes the opinion stronger rather than '
                'weaker.'],
         criterion=[('An opinion in the first paragraph', 'Task '
                     'Response'),
                    ('Two reasons, each with a number', 'Task '
                     'Response'),
                    ('One sentence for the other side', 'Coherence and '
                     'Cohesion'),
                    ('Past simple used correctly in the example',
                     'Grammatical Range and Accuracy')])],
   gram=dict(
    point='Past simple of common irregular verbs',
    fix=dict(
     text=('Last winter the water in my flat stop working. I goed to the '
           'kitchen and turned on the tap, and nothing came out. My neighbour '
           'had water, so I knowed the problem was only in my flat. I '
           'telephoned the landlord and he came on Sunday with a man who works '
           'on pipes.'),
     faults=[('the water in my flat stop working',
              'the water in my flat stopped working',
              ('The sentence is about last winter, so the verb needs its past '
               'form, stopped.')),
             ('I goed to the kitchen',
              'I went to the kitchen',
              ('Go is irregular. The past form is went, and there is no form '
               'goed.')),
             ('so I knowed the problem',
              'so I knew the problem',
              'Know is irregular too. The past form is knew.')]),
    explain='Many common verbs do not add -ed. These have to be '
            'learned one by one.',
    examples=['The heating stopped and the water went cold.',
              'It made a noise on Sunday.',
              'Somebody came the same afternoon.',
              'They took the old part away.'],
    items=[('The boiler (make) a noise on Sunday.',
            'The boiler made a noise on Sunday.'),
           ('Somebody (come) at two o clock.',
            'Somebody came at two o clock.'),
           ('I (tell) the office about it.',
            'I told the office about it.'),
           ('The engineer (take) the part away.',
            'The engineer took the part away.'),
           ('We (have) no hot water for a day.',
            'We had no hot water for a day.')],
    task='Write each sentence in the past simple.'),
   vocab=[('heating', 'the system that makes a building warm'),
          ('alarm', 'a machine that warns you with a loud sound'),
          ('smoke', 'the grey air that comes from a fire'),
          ('roof', 'the top cover of a building'),
          ('risk', 'the chance that something bad happens'),
          ('replaced', 'put a new one in place of the old one'),
          ('completed', 'finished'),
          ('complaining', 'saying that you are not satisfied'),
          ('payable', 'that must be paid'),
          ('meantime', 'the time between now and then')],
   expr=[('My heating stopped last night.', 'reporting a fault'),
         ('Is there a red light on the front?', 'asking a diagnostic '
          'question'),
         ('Will you be in?', 'checking somebody will be there'),
         ('Report it rather than complaining later.', 'advice with a '
          'reason')],
   trans=['first', 'then', 'after that', 'finally']),

  dict(
   sub='How houses are built',
   step=2,
   read=[
    dict(heading='Four stages in building a small house',
         kind='Short factual article',
         task='Flow-chart completion and matching',
         band='acad', qtype='Questions 31-36',
         paras=[
          'A small house is built in four stages, and they cannot be '
          'swapped. First a flat base of concrete is laid on the ground. '
          'This takes about three weeks, most of which is waiting rather '
          'than working, because concrete has to dry before anything can '
          'be built on it. Then the brick walls are built up from the '
          'base. A team of four can build the walls of a small house in '
          'a month if the weather holds.',
          'The roof goes on next, and it goes on before any inside work '
          'starts. The reason is simple: everything fitted inside has to '
          'be kept dry, and a house without a roof is a box that '
          'collects rain. Only when the roof is finished do the heating, '
          'the wires and the water pipes go in, and that last stage is '
          'the longest of the four.',
          'Overall a small house takes about twenty weeks. Bad weather '
          'adds to the first two stages and almost never to the last '
          'two. That is why a house started in autumn is often sold '
          'later than one started in spring. Building firms know this '
          'and price the work accordingly, so the same house can cost '
          'a '
          'different amount depending on the month the base is laid.'],
         items=[
          ('A flat base of ____________ is laid first.', None,
           'concrete', 'Paragraph 1, the first of the four stages.'),
          ('The base takes about ____________ weeks.', None, 'three',
           'Paragraph 1, mostly waiting for it to dry.'),
          ('A team of ____________ can build the walls in a month.',
           None, 'four', 'Paragraph 1, if the weather holds.'),
          ('Why does the roof go on before the inside work?',
           ['to save money', 'to keep the inside dry',
            'because it is quicker', 'because the walls need it'], 1,
           'Paragraph 2: a house without a roof collects rain.'),
          ('Which stage is the longest?',
           ['the base', 'the walls', 'the roof', 'the inside work'], 3,
           'Paragraph 2, the last of the four.'),
          ('A small house takes about ____________ weeks in total.',
           None, 'twenty', 'Paragraph 3, and weather can add to it.')])],
   listen=[
    dict(heading='A visit to a building site', part='Part 4',
         task='A short talk to visiting students', band='l4',
         qtype='Questions 37-41',
         script=[
          ('Speaker', 'Hard hats on, please. We have twenty-four houses '
           'going up on this site and they are at four different '
           'stages, which makes it a good place to see the whole '
           'process in one morning.'),
          ('Speaker', 'Over there the base is being laid. That is '
           'concrete, and it will be left for three weeks. People always '
           'ask why we do not build on it sooner. The answer is that '
           'concrete gains most of its strength in the first few days '
           'but not all of it, and a wall built too early moves later.'),
          ('Speaker', 'The row of houses in the middle is at the wall '
           'stage. Bricklaying is the part of the job that is still done '
           'by hand, and a good bricklayer is scarce. We pay more for '
           'bricklayers than for any other trade on this site.'),
          ('Speaker', 'The two at the end have their roofs on, so the '
           'inside work has started: heating, wires, water. That is '
           'half the total time of the whole build.'),
          ('Speaker', 'One thing students never expect. A survey we '
           'conducted last year found that buyers decide in the first '
           'ninety seconds, and almost always in the kitchen. The '
           'kitchen is the last room we finish and the first room that '
           'sells the house.')],
         items=[
          ('There are ____________ houses on the site.', None,
           'twenty-four', 'At four different stages, the speaker says.'),
          ('The concrete base is left for ____________ weeks.', None,
           'three', 'Because it has not gained its full strength.'),
          ('Which trade is paid most on this site?', None,
           'bricklayers',
           'Because a good bricklayer is scarce, the speaker says.'),
          ('The inside work is about ____________ the total build '
           'time.', None, 'half',
           'Heating, wires and water, after the roof.'),
          ('Buyers decide in the first ninety ____________.', None,
           'seconds', 'And almost always in the kitchen.')])],
   speak=dict(
    part='Part 3', focus='Old houses and new houses',
    intro='In Part 3, give the opinion first and the reason second. '
          'Three sentences is a good length.',
    qs=['Are old houses better than new ones?',
        'Should cities build more houses?',
        'What makes a house a good place to live?'],
    shape=[('answer', 'I think new houses are better to live in, but '
            'old ones are better to look at.'),
           ('support', 'A new house is warm and cheap to heat, because '
            'the walls are built for it.'),
           ('support', 'An old house often has larger rooms and more '
            'light.'),
           ('follow-up', 'If I had the choice I would take an old house '
            'that had been repaired well.')]),
   write=[
    dict(task='Task 1', fork='A', heading='How a small house is built',
         figure=_HOUSE,
         prompt='The diagram shows how a small house is built. Describe '
                'the four stages in order.',
         instruct='  Write at least 90 words in about 20 minutes.',
         lines=11,
         model=[
          'The diagram shows the four stages in which a small house is '
          'built.',
          'In the first stage a flat base of concrete is laid on the '
          'ground. In the second, brick walls are built up from that '
          'base.',
          'The roof is then put on, and this happens before any work is '
          'done inside. In the final stage the heating, the wires and '
          'the water are fitted.',
          'The order cannot be changed. Each stage rests on the one '
          'before it, and the inside work in particular cannot start '
          'until the house is dry.'],
         notes=['Each stage is one sentence, in the order the diagram '
                'gives them.',
                'The passive is used throughout, because the diagram '
                'does not say who does the work.',
                'The last two sentences explain the shape of the '
                'process rather than adding a fifth stage.'],
         criterion=[('All four stages, in order', 'Task Achievement'),
                    ('The passive used throughout', 'Grammatical Range '
                     'and Accuracy'),
                    ('A closing sentence about the order', 'Coherence '
                     'and Cohesion'),
                    ('No opinion about houses', 'Task Response')])],
   gram=dict(
    point='Sequence words: first, then, after that, finally',
    explain='Put the sequence word at the start of the sentence and a '
            'comma after it. Do not use the same one twice.',
    examples=['First, the base is laid.',
              'Then the walls are built.',
              'After that, the roof goes on.',
              'Finally, the heating is fitted.'],
    items=[('____, the base is laid.', 'First, the base is laid.'),
           ('____ the walls are built up.',
            'Then the walls are built up.'),
           ('____, the roof is put on.', 'After that, the roof is put '
            'on.'),
           ('____, the wires are fitted.',
            'Finally, the wires are fitted.'),
           ('____ the house is sold.', 'Then the house is sold.')],
    task='Complete each sentence with a different sequence word.'),
   vocab=[('built', 'past of build'),
          ('build', 'to make something by putting parts together'),
          ('supply', 'an amount of something that is available'),
          ('scarce', 'hard to find because there is little of it'),
          ('overall', 'taking everything together'),
          ('conducted', 'carried out, as of a study'),
          ('twenty-four', 'the number 24'),
          ('rate', 'how fast or how often something happens'),
          ('bear', 'to carry or to hold a weight'),
          ('sold', 'past of sell')],
   expr=[('It goes on before any inside work starts.',
          'saying what must come first'),
         ('A team of four can do it in a month.',
          'saying how long work takes'),
         ('The order cannot be changed.', 'describing a fixed process'),
         ('People always ask why.', 'introducing a common question')],
   trans=['after that', 'before', 'then', 'finally']),

  dict(
   sub='Living in different places',
   step=3,
   read=[
    dict(heading='A village and a city: what residents decide',
         kind='Short factual article',
         task='Matching information and short answer',
         band='acad', qtype='Questions 42-47',
         paras=[
          'A village of four hundred people and a city of four hundred '
          'thousand are not the same thing at different sizes. They '
          'are different in kind, and the clearest difference is how '
          'decisions are made. In a village, the council is a '
          'committee of neighbours. Its members are known by name, and '
          'a vote at a meeting is often the end of the matter. '
          'Permission to build is decided by people who will see the '
          'building every day.',
          'In a city, the same decision passes through a department. '
          'Nobody who votes on it will walk past the result, and the '
          'benefit of a new block of flats is counted across a whole '
          'district rather than a street. That distance is not simply a '
          'loss. It is also why a city can build at all: a scheme that '
          'every neighbour can stop is a scheme that is never built.',
          'Residents feel this difference most when something goes '
          'wrong. In a village a complaint reaches a named person '
          'within a day. In a city it joins a queue. However, the city '
          'queue is answered by somebody whose job it is, and the '
          'village may have nobody at all, because the person who used '
          'to do it has moved away. Each place solves one half of the '
          'problem and leaves the other half to the weather.'],
         items=[
          (
           'Which paragraph describes how a village decides about '
           'building?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'], 0,
           'A committee of neighbours, known by name.',
           {1: 'Paragraph 2 is about the city, where the decision is '
               'anonymous.', 2: 'Paragraph 3 is about what happens after a decision '
               'goes wrong.'}),
          ('Which paragraph explains why a city can build at all?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'], 1,
           'A scheme every neighbour can stop is never built.',
           {0: 'Paragraph 1 explains why a village often cannot.', 2: 'Paragraph 3 compares the two when something goes '
               'wrong.'}),
          (
           'Which paragraph compares what happens when something goes '
           'wrong?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'], 2,
           'A named person within a day, against a queue.',
           {0: 'Paragraph 1 is about who decides, not about what '
               'follows.', 1: 'Paragraph 2 is about building, not about repair.'}),
          ('In a village, the council is a committee of '
           '____________.', None, 'neighbours',
           'Paragraph 1, whose members are known by name.'),
          ('In a city the benefit of new flats is counted across a '
           '____________.', None, 'district',
           'Paragraph 2, rather than a street.'),
          ('In a city a complaint joins a ____________.', None, 'queue',
           'Paragraph 3, but somebody is paid to answer it.')])],
   listen=[
    dict(heading='Two people talk about moving', part='Part 3',
         task='A discussion between two students', band='l3',
         qtype='Questions 48-52',
         script=[
          ('Tutor', 'You both moved last year, in opposite directions. '
           'Sam, you went out of the city.'),
          ('Sam', 'To a village of about four hundred people. The rent '
           'is half what I paid before.'),
          ('Tutor', 'And the cost of that?'),
          ('Sam', 'Two hours of travel a day. I did not believe people '
           'when they said that was the real price, and they were '
           'right.'),
          ('Nour', 'I went the other way, from a town into the centre. '
           'My rent went up by about a third.'),
          ('Tutor', 'Was it worth it?'),
          ('Nour', 'For now, yes. I walk to work, so I have the two '
           'hours Sam lost. However, I have no space at all. My desk is '
           'in the bedroom.'),
          ('Sam', 'The thing I did not expect is how quickly you are '
           'known in a village. Within a month people knew my name and '
           'what I did.'),
          ('Nour', 'That would be the thing I would find hardest.'),
          ('Sam', 'It cuts both ways. When my roof leaked, three people '
           'offered to help before I had asked anybody.'),
          ('Tutor', 'So the same fact is the cost and the benefit.'),
          ('Nour', 'Which is what we should say in the report.')],
         items=[
          ('Sam moved to a village of about ____________ people.', None,
           'four hundred', 'The first thing Sam says about it.'),
          ('Sam now travels ____________ hours a day.', None, 'two',
           'Which Sam calls the real price of the move.'),
          ("Nour's rent went up by about a ____________.", None,
           'third', 'Moving from a town into the centre.'),
          ('What does Nour not have in the new flat?',
           ['hot water', 'space', 'a quiet street', 'a short journey'],
           1, 'Nour says the desk is in the bedroom.'),
          ('When the roof leaked, ____________ people offered to help.',
           None, 'three',
           'They offered before Sam had asked anybody.')])],
   speak=dict(
    part='Part 3', focus='Living in a town or in the country',
    sounds=[('English has two th sounds. In thing and three there is no voice. '
             'In this and they there is. Put your hand on your throat and feel '
             'the difference.'),
            ('The word water has the stress on the first part: WAter. So does '
             'winter, kitchen, bathroom and problem.'),
            ('Say these numbers and keep them different: thirteen and thirty, '
             'fourteen and forty. Thirteen is longer and the end is stronger.'),
            ('Practise one sentence: the water stopped working on Saturday '
             'morning. Say it three times and make it faster each time.'),
            ('Record yourself describing a room in your home. Listen for the '
             'th sounds and say any difficult word again.')],
    intro='Compare the two directly. A Part 3 answer that describes '
          'only one side has answered half the question.',
    qs=['Is it better to live in a town or in the country?',
        'Why do young people move to cities?',
        'Will villages get smaller in the future?'],
    shape=[('answer', 'For most young people a town is better, at least '
            'for a few years.'),
           ('support', 'The work is there, and so are the people of '
            'their own age.'),
           ('support', 'The country is cheaper, but the travel takes '
            'back what the rent saves.'),
           ('follow-up', 'Later, when work can be done from home, the '
            'calculation changes completely.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Telling a friend about your new home',
         prompt='You have moved to a new home. Write a letter to a '
                'friend. In your letter: say where your new home is; '
                'describe it; invite your friend to visit.',
         instruct='  Write at least 80 words in about 15 minutes.',
         lines=10,
         model=[
          'Dear Tomas,',
          'I moved last Saturday. The new flat is on Market Street, '
          'above the shop, about ten minutes from the station.',
          'It is smaller than the old one, but it is warmer and the '
          'heating works. There are two rooms and a kitchen, and the '
          'bedroom is at the back, so I never hear the street. The '
          'market is noisy on Tuesday and Saturday, which I quite like.',
          'Come and see it. Any weekend in March would suit me, and '
          'there is a sofa you can sleep on.',
          'Write soon,',
          'Ife'],
         notes=['The first paragraph gives the where, the second the '
                'what, and the third the invitation. One bullet, one '
                'paragraph.',
                'The description gives two good things and one bad one, '
                'which sounds like a real letter rather than an advert.',
                'The invitation is specific: a month, and where the '
                'friend would sleep.'],
         criterion=[('All three bullets answered', 'Task Achievement'),
                    ('One paragraph for each bullet', 'Coherence and '
                     'Cohesion'),
                    ('A specific invitation', 'Task Response'),
                    ('Comparatives used correctly', 'Grammatical Range '
                     'and Accuracy')])],
   gram=dict(
    point='Comparatives: bigger, quieter, more expensive',
    explain='Add -er to short adjectives and use more with long ones. '
            'Use than to compare two things.',
    examples=['The new flat is smaller than the old one.',
              'The village is quieter.',
              'The centre is more expensive.',
              'The bedroom is warmer than the kitchen.'],
    items=[('The village is (quiet) than the city.',
            'The village is quieter than the city.'),
           ('The centre is (expensive) than the suburb.',
            'The centre is more expensive than the suburb.'),
           ('This room is (big) than that one.',
            'This room is bigger than that one.'),
           ('The journey is (long) now.', 'The journey is longer now.'),
           ('A new house is (easy) to heat.',
            'A new house is easier to heat.')],
    task='Write each sentence with a comparative.'),
   vocab=[('council', 'the group that runs a town or a village'),
          ('permission', 'being officially allowed to do something'),
          ('decision', 'a choice that has been made'),
          ('benefit', 'a good result that something brings'),
          ('vote', 'a choice made by counting hands or papers'),
          ('members', 'the people who belong to a group'),
          ('committee', 'a small group chosen to decide something'),
          ('however', 'but, at the start of a sentence'),
          ('weather', 'rain, sun, wind and temperature')],
   expr=[('The rent is half what I paid before.',
          'comparing with a fraction'),
         ('It cuts both ways.', 'saying one fact has two effects'),
         ('That would be the thing I would find hardest.',
          'naming a difficulty politely'),
         ('For most people, at least for a few years.',
          'limiting a general claim')],
   trans=['because', 'so', 'however', 'for example'])],

 technique=dict(
  title='Looking ahead: your eyes on the next question',
  body='Here is what happens to most candidates in Listening. They hear '
       'the answer to question 3, they write it down carefully, they '
       'look up, and the recording is already past question 4. One '
       'missed answer has become two, and the second one was missed for '
       'no reason at all. The fix is a habit, and it has to be '
       'practised until it is automatic. While your hand writes the '
       'answer to the question you have just heard, your eyes move to '
       'the next question. You are not reading it carefully. You are '
       'taking in what kind of answer it wants: a number, a day, a '
       'name, a place. Write short. Nobody reads your paper during the '
       'test, so "Tues" is enough if you know you can read it later, '
       'and on the Listening paper in the real test you are given time '
       'at the end to copy your answers onto the answer sheet. Use '
       'abbreviations while you listen and write them out properly at '
       'the end. The second half of the habit is what to do when you '
       'have missed one. Let it go, immediately. Mark the question with '
       'a dot and move your eyes forward. The recording does not wait, '
       'and the candidate who spends five seconds being annoyed about '
       'question 3 has also lost question 4 and sometimes question 5.',
  panel=[('Write and look at the same time',
          'Your hand finishes; your eyes have moved on.'),
         ('Take in the answer type', 'Number? Day? Name? Place?'),
         ('Write short', 'Tues, 14th, Mkt St. Copy them out at the '
          'end.'),
         ('Missed one? Dot it and go',
          'One lost mark is cheap. Three is not.')],
  qs=['Where are your eyes while you are writing?',
      'What kind of answer does the next question want?',
      'Are you writing more than you need to?',
      'What did you do when you missed one?',
      'Did you lose the question after the one you missed?'],
  task='Do the five listening sections in this unit without pausing. '
       'Mark with a dot every question you missed, and count how many '
       'times the question after a dot is also wrong.'),

 outlining=dict(
  title='Spot the intruder: one sentence belongs nowhere',
  body='A plan with four sentences under two ideas is easy to check, '
       'and this is the check. Read each sentence and ask which of your '
       'two ideas it supports. If it supports neither, it is an '
       'intruder, and an intruder in the plan becomes a sentence in the '
       'essay that the examiner cannot place. Intruders are not usually '
       'wrong. That is what makes them dangerous. They are true, they '
       'are about the topic, and they belong to a different question. '
       'Take the question about repairing things. The idea "repairing '
       'costs less" is supported by "a part cost fifty pounds and a new '
       'boiler costs two thousand". It is not supported by "many people '
       'cannot repair things themselves", which is true, is about '
       'repairing, and belongs to a different argument altogether. In '
       'the plan it looks harmless. In the essay it starts a paragraph '
       'that goes nowhere. So after you have written four sentences '
       'under two ideas, point at each sentence and say which idea it '
       'is under. If you cannot, cross it out. You will throw away one '
       'sentence in three at first, and your answers will get shorter '
       'and score higher at the same time.',
  frame=('Repairing things is better than buying new ones',
         [('It costs less',
           ['a part for a boiler cost under fifty pounds',
            'a new boiler costs about two thousand']),
          ('It wastes less',
           ['a thrown-away machine is mostly metal',
            'a repair keeps it in use for years'])]),
  qs=['Which of your two ideas does this sentence support?',
      'Is it true but about a different question?',
      'Could you move it under the other idea instead?',
      'Does any idea have no support at all?',
      'How many sentences did you cross out?'],
  task='Write six sentences for the cycle 3 question, two of them '
       'intruders on purpose. Swap with a partner and find each '
       "other's intruders.",
  answers=['an intruder is usually true, which is why it survives',
           'if a sentence fits both ideas, your ideas overlap',
           'an idea with no support is not an idea yet',
           'crossing out in the plan costs nothing',
           'crossing out in the essay costs five minutes']),

 candos=['I can compare three adverts and say how they differ',
         'I can label a plan with north, south, east and west',
         'I can report a fault and answer the questions I am asked',
         'I can describe a four-stage process in the passive',
         'I can check a plan for sentences that belong nowhere'],

 tip=('When you miss an answer in Listening, the mark is already gone. '
      'The only question left is whether you lose the next one too. '
      'Put a dot by it and move your eyes forward.'))
