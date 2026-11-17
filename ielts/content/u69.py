# -*- coding: utf-8 -*-
"""Foundation 1, Unit 9 - Free Time and Sport.

Clubs, a ground plan, hobbies, and then the two readings: what training
actually does to a body, and whether a child who picks one sport early
ends up better than a child who plays four. The second is the argument
Volume 1 returns to, so the vocabulary for it is taught here.
"""

_GROUND = dict(kind='map',
               title='Riverside ground: where everything is',
               sub='one plan, five entrances',
               panels=[
                ('Riverside ground',
                 [(0.06, 0.06, 0.40, 0.14, 'North stand', 'building'),
                  (0.54, 0.06, 0.40, 0.14, 'Ticket office', 'building'),
                  (0.06, 0.30, 0.26, 0.18, 'Club shop', 'building'),
                  (0.37, 0.30, 0.24, 0.18, 'Pitch', 'green'),
                  (0.66, 0.30, 0.28, 0.18, 'East stand', 'building'),
                  (0.06, 0.60, 0.42, 0.15, 'Car park', 'road'),
                  (0.54, 0.60, 0.40, 0.15, 'Reception', 'new')],
                 [(0.0, 0.24, 1.0, 0.24, 'Riverside Way'),
                  (0.0, 0.84, 1.0, 0.84, 'Station footpath')])],
               key=[('Buildings', 'building'), ('Playing area', 'green'),
                    ('New this season', 'new')])

_TAKE = dict(kind='bar',
             title='Who takes part in sport, by age',
             sub='per cent playing a sport once a week or more',
             cats=['11-15', '16-24', '25-44', '45-64', '65+'],
             series=[('Per cent', [78.0, 54.0, 38.0, 29.0, 18.0])],
             ylab='per cent')

UNIT = dict(
 n=9, vol=7, level='A1-A2', band='below 4.0',
 theme='Free Time and Sport',
 opener=(
   'This unit is about what people do when nobody is paying them. You '
   'will join a club, find your seat at a ground, talk about a hobby, '
   'and read two things that are not obvious: what training actually '
   'changes in a body, and whether choosing one sport early helps a '
   'child or harms them. The technique page is the re-read counter, '
   'which is the simplest measurement of your own reading that exists '
   'and the one that improves it fastest.'),

 cycles=[
  dict(
   sub='Joining a club',
   step=1,
   read=[
    dict(heading='Riverside Leisure: clubs and times',
         kind='Noticeboard', task='True/False/Not Given, short answer and sentence completion',
         band='gt_short', qtype='Questions 1-5',
         skill=('A club list is read for the age and the cost',
                ['Three facts repeat in every entry: day, age range, '
                 'price. Find the one the question wants.',
                 'Any entry with the word from has a condition after '
                 'it.']),
         paras=[
          'Swimming club. Tuesday and Thursday, seven until eight. Ages '
          'eight to sixteen. Membership is forty pounds a term, and the '
          'pool is free to members at weekends.',
          'Running group. Saturday, nine o clock, from reception. All '
          'ages and all speeds. No charge, but you must sign in, '
          'because the group does not start until everybody who signed '
          'in has arrived.',
          'Table tennis. Weekdays only, twelve until two. Adults. Four '
          'pounds a session or twenty-one pounds for ten, and bats are '
          'provided.'],
         items=[
          ('The swimming club meets twice a week.',
           ['True', 'False', 'Not Given'], 0,
           'Tuesday and Thursday, seven until eight.',
           {1: 'Two evenings are named in the entry itself.', 2: 'Both evenings are printed in the list.'}),
          ('A child of seven may join the swimming club.',
           ['True', 'False', 'Not Given'], 1,
           'The entry says ages eight to sixteen.',
           {0: 'Seven is below the lower age the entry gives.', 2: 'The ages are printed in the entry itself.'}),
          ('Where does the running group start?', None, 'reception',
           'At nine o clock on Saturday morning.'),
          ('The group waits for everybody who ____________ in.', None,
           'signed', 'It does not start until they have all arrived.'),
          ('Ten table tennis sessions cost less than ten single ones.',
           ['True', 'False', 'Not Given'], 0,
           'Twenty-one pounds against forty, at four each.',
           {1: 'Ten singles at four pounds come to forty.', 2: 'Both prices are given in the entry.'})])],
   listen=[
    dict(heading='Signing up for a club', part='Part 1',
         task='A conversation at a leisure centre · note completion', band='l1',
         qtype='Questions 6-10',
         script=[
          ('Staff', 'Which club is it for?'),
          ('Parent', 'Swimming, for my daughter. She is eleven.'),
          ('Staff', 'That is the right age. Can she swim '
           'twenty-five metres?'),
          ('Parent', 'She can, slowly.'),
          ('Staff', 'Slowly is fine. The club is not about speed for '
           'the first year; it is about doing it properly.'),
          ('Parent', 'What does it cost?'),
          ('Staff', 'Forty pounds a term, which is eleven weeks, and '
           'that includes free swimming at weekends.'),
          ('Parent', 'Is there a waiting list?'),
          ('Staff', 'For Tuesday, yes, about six weeks. Thursday has '
           'two places now.'),
          ('Parent', 'Then Thursday.'),
          ('Staff', 'I will need a form signed by you and the name of '
           'somebody to telephone if you cannot be reached.'),
          ('Parent', 'Her grandmother.'),
          ('Staff', 'Fine. One more thing: the first session is free '
           'and you can stay and watch it. After that parents wait in '
           'reception, which sounds unfriendly and is not: the children '
           'concentrate considerably better.'),
          ('Parent', 'That makes sense.')],
         items=[
          ('The daughter is ____________ years old.', None, 'eleven',
           'Which is inside the club’s age range.'),
          ('She must be able to swim ____________ metres.', None,
           'twenty-five', 'Slowly is acceptable, the staff say.'),
          ('A term is ____________ weeks.', None, 'eleven',
           'And costs forty pounds in total.'),
          ('The waiting list for Tuesday is about ____________ weeks.',
           None, 'six', 'Thursday has two places free now.'),
          ('After the first session, parents wait in ____________.',
           None, 'reception', 'Because the children concentrate '
           'better.')])],
   speak=dict(
    part='Part 1', focus='Free time',
    intro='Say what you do, then how often. Give one real detail.',
    qs=['What do you do in your free time?',
        'Do you play any sport?',
        'Do you prefer being indoors or outdoors?',
        'Has your free time changed since you were younger?'],
    shape=[('answer', 'I swim twice a week and I read most '
            'evenings.'),
           ('support', 'The pool near me is free at weekends if you '
            'are a member of a club.'),
           ('follow-up', 'I used to play football, but the team broke '
            'up when half of us moved away.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking a friend to join a club with you',
         prompt='You want a friend to join a club with you. Write a '
                'note. In your note: say which club; say when it meets; '
                'say why your friend would like it.',
         instruct='  Write at least 80 words in about 15 minutes.',
         lines=10,
         model=[
          'Hi Theo,',
          'There is a running group at Riverside that meets on '
          'Saturday mornings at nine, and I think you should come with '
          'me.',
          'It is free, which was my first question too. You sign in at '
          'reception and the group waits until everybody who signed in '
          'has arrived, so nobody is ever left behind. All speeds go, '
          'and there were people walking parts of it last week.',
          'You said in January that you wanted to start running and '
          'that you would not do it alone. This solves the second '
          'half.',
          'Saturday?',
          'Priya'],
         notes=['The club, the day and the time are in the first '
                'sentence, so nothing has to be hunted for.',
                'The objection the friend would raise is answered '
                'before it is made.',
                'The last line quotes the friend back to themselves, '
                'which is the most persuasive thing in the note.'],
         criterion=[('Club, day and time given', 'Task Achievement'),
                    ('All three points answered', 'Task Achievement'),
                    ('An objection answered', 'Task Response'),
                    ('A short, friendly register', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='can and cannot for ability',
    explain='Use can and cannot with the plain verb. The form does not '
            'change for he, she or it.',
    examples=['She can swim twenty-five metres.',
              'He cannot come on Tuesdays.',
              'Can you play table tennis?',
              'They cannot start until everybody arrives.'],
    items=[('She (can / swim) twenty-five metres.',
            'She can swim twenty-five metres.'),
           ('He (cannot / come) on Tuesdays.',
            'He cannot come on Tuesdays.'),
           ('(you / can / play) table tennis?',
            'Can you play table tennis?'),
           ('We (cannot / start) yet.', 'We cannot start yet.'),
           ('They (can / use) the pool at weekends.',
            'They can use the pool at weekends.')],
    task='Write each sentence with can or cannot.'),
   vocab=[('sport', 'a game needing physical effort and skill'),
          ('pattern', 'a regular way that things happen'),
          ('gap', 'a space or a difference between two things'),
          ('produces', 'makes or causes'),
          ('collected', 'gathered together'),
          ('chart', 'a drawing that shows numbers'),
          ('membership', 'belonging to a club, and what it costs'),
          ('slow', 'not fast'),
          ('swimming', 'moving through water using the body'),
          ('considerably', 'by a large amount'),
          ('properly', 'in the right way'),
          ('reliably', 'in a way that can be depended on')],
   expr=[('Which club is it for?', 'the first question at a desk'),
         ('Is there a waiting list?', 'asking about availability'),
         ('That makes sense.', 'accepting an explanation'),
         ('Slowly is fine.', 'reassuring a beginner')],
   trans=['and', 'then', 'but', 'so']),

  dict(
   sub='Watching and playing',
   step=1,
   read=[
    dict(heading='Match day: finding your way round the ground',
         kind='Ground notice', task='Plan labelling',
         band='gt_short', qtype='Questions 11-15',
         bank=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
         banklabel='Write the letter from the plan of the ground',
         figure={'kind': 'map',
           'panels': [('The plan, with eight lettered parts',
                       [(0.4, 0.03, 0.18, 0.09, 'A', 'new'),
                        (0.17, 0.03, 0.18, 0.09, 'B', 'building'),
                        (0.64, 0.03, 0.13, 0.09, 'H', 'new'),
                        (0.04, 0.4, 0.12, 0.22, 'C', 'building'),
                        (0.84, 0.36, 0.12, 0.3, 'D', 'building'),
                        (0.26, 0.3, 0.48, 0.4, 'G', 'green'),
                        (0.58, 0.78, 0.22, 0.13, 'E', 'new'),
                        (0.84, 0.78, 0.13, 0.13, 'F', 'building')],
                       [(0.0,
                         0.96,
                         1.0,
                         0.96,
                         'Footpath from the station')])],
           'sub': 'north is at the top',
           'title': 'The ground on a match day'},
         paras=[
          'The ticket office is at the north end, beside the north '
          'stand. Collect tickets there up to an hour before the start, '
          'and after that at the gate.',
          'The club shop is on the west side, next to the pitch, and '
          'closes fifteen minutes after the final whistle. The east '
          'stand is opposite it, across the pitch.',
          'Reception is the new building in the south corner and is '
          'where lost property and first aid are. The car park is '
          'beside it, and the footpath from the station comes in along '
          'the south edge of the ground.'],
         items=[
          ('The ticket office.', None, 'A',
           'At the north end, beside the north stand.'),
          ('Where tickets are collected in the last hour.', None, 'H',
           'At the gate, once the ticket office has closed.'),
          ('The club shop.', None, 'C',
           'On the west side, next to the pitch.'),
          ('The new building, with first aid in it.', None, 'E',
           'Reception, in the south corner of the ground.'),
          ('The car park.', None, 'F',
           'Beside reception, by the southern footpath.')])],
   listen=[
    dict(heading='Finding your seat', part='Part 1',
         task='A conversation with a steward · sentence completion and short answer', band='l1',
         qtype='Questions 16-20',
         script=[
          ('Visitor', 'Excuse me. Where is block F?'),
          ('Steward', 'Can I see the ticket? Block F, row twelve, seat '
           'nine. That is the east stand, so you want the other side.'),
          ('Visitor', 'Can I walk round inside?'),
          ('Steward', 'Not once the match has started. Go back out '
           'through the gate you came in, turn left and walk along the '
           'outside.'),
          ('Visitor', 'How long will that take?'),
          ('Steward', 'Four minutes. You have twenty, so there is no '
           'hurry.'),
          ('Visitor', 'Is there food in that stand?'),
          ('Steward', 'Two places, and the one at the back serves hot '
           'food until half time. The other is drinks only.'),
          ('Visitor', 'And if it rains?'),
          ('Steward', 'Row twelve is covered. Anything above row eight '
           'is covered in that stand.'),
          ('Visitor', 'That is lucky.'),
          ('Steward', 'One more thing. Do not leave anything on the '
           'seat at half time. The ground is open to all stands then '
           'and things walk.'),
          ('Visitor', 'Understood. Thank you.')],
         items=[
          ('The seat is in block F, row ____________.', None, 'twelve',
           'Seat nine, over in the east stand.'),
          ('How long does the walk round the outside take?', None,
           'four minutes',
           'And there are twenty minutes before the start.'),
          ('Until when is hot food served?', None, 'half time',
           'At the place at the back of that stand.'),
          ('Anything above row ____________ is covered.', None,
           'eight', 'So row twelve is under the cover.'),
          ('Nothing should be left on the seat at ____________.', None,
           'half time',
           'Because the ground is open to all stands then.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Watching sport',
    intro=('Card first, and the last bullet is the one that earns the '
           'band: it asks you to explain rather than to list. After the '
           'long turn the discussion opens: answer about yourself. If you '
           'do not watch sport, say so and say what you do instead.'),
    cue=('Describe a match or a game you watched.',
         ['say what it was',
          'say where you watched it',
          'say who you watched it with',
          'and explain what you remember about it']),
    qs=['Do you watch sport?',
        'Is it better to watch at home or at the ground?',
        'Do people in your country follow one sport most?',
        'Did you play sport at school?',
        'Now look at the card. You have one minute to make notes.',
        'Who won?',
        'Would you watch it again?'],
    shape=[('answer', 'I watch a little, mostly football, and mostly '
            'at home.'),
           ('support', 'At the ground you see the shape of the game '
            'better and the television shows you more detail.'),
           ('follow-up', 'At school I played badly and enjoyed it, '
            'which I think is the right way round.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Riverside ground: where everything is',
         figure=_GROUND,
         prompt='The plan shows a sports ground. Describe where the '
                'main buildings are in relation to each other.',
         instruct='  Write at least 90 words in about 20 minutes.',
         lines=11,
         model=[
          'The plan shows a sports ground with the pitch in the middle '
          'and six other areas around it.',
          'The north stand and the ticket office are side by side along '
          'the north edge, with Riverside Way running past them. The '
          'club shop is on the west side of the pitch and the east '
          'stand directly opposite it.',
          'In the south half there is a car park on the west side and '
          'the reception building, which is new this season, on the '
          'east. The footpath from the station runs along the southern '
          'edge of the whole site.',
          'The pitch is therefore enclosed on all four sides, and '
          'anybody arriving on foot reaches reception first.'],
         notes=['The answer uses compass directions throughout, which '
                'is what a plan requires.',
                'Buildings are described in relation to each other, '
                'not listed one by one.',
                'The last sentence draws a conclusion from the '
                'layout.'],
         criterion=[('Compass directions used', 'Grammatical Range '
                     'and Accuracy'),
                    ('Relations between buildings described', 'Task '
                     'Achievement'),
                    ('The new building identified', 'Task '
                     'Achievement'),
                    ('A closing observation', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='Prepositions of position: beside, opposite, along, round',
    explain='Use beside for next to, opposite for facing, along for '
            'following a line, and round for enclosing.',
    examples=['The ticket office is beside the north stand.',
              'The east stand is opposite the club shop.',
              'The footpath runs along the south edge.',
              'The stands run round the pitch.'],
    items=[('The ticket office is ____ the north stand.',
            'The ticket office is beside the north stand.'),
           ('The east stand is ____ the club shop.',
            'The east stand is opposite the club shop.'),
           ('The path runs ____ the south edge.',
            'The path runs along the south edge.'),
           ('The stands run ____ the pitch.',
            'The stands run round the pitch.'),
           ('The car park is ____ reception.',
            'The car park is beside reception.')],
    task='Complete each sentence with a preposition of position.'),
   vocab=[('weekdays', 'Monday to Friday'),
          ('beyond', 'further than, or outside the limits of'),
          ('serve', 'to give food or drink, or to work for'),
          ('pool', 'a place built for swimming'),
          ('survived', 'continued to exist or to live'),
          ('reception', 'the desk or area where visitors arrive'),
          ('weekends', 'Saturday and Sunday'),
          ('athletes', 'people who compete in sport'),
          ('professional', 'doing something as a paid job'),
          ('gym', 'a room with equipment for exercise'),
          ('session', 'one period of an activity')],
   expr=[('Where is block F?', 'asking for a place at a ground'),
         ('Is there food in that stand?', 'asking about facilities'),
         ('You have twenty minutes, so there is no hurry.',
          'reassuring about time'),
         ('Things walk.', 'a mild warning about theft')],
   trans=['also', 'too', 'and', 'but']),

  dict(
   sub='Hobbies at home',
   step=2,
   read=[
    dict(heading='Three people and their hobbies',
         kind='Short profiles', task='Matching headings, matching features and short answer',
         band='gt_work', qtype='Questions 21-25',
         skill=('Three profiles are read for the difference, not the '
                'hobby',
                ['Write the three names down the side first, then one '
                 'fact against each.',
                 'The question usually asks who, so the name matters '
                 'more than the detail.']),
         paras=[
          'Ana repairs bicycles in her kitchen. She started because her '
          'own kept breaking and the shop charged thirty pounds to '
          'change a cable. She now repairs about one a week for '
          'friends, and takes nothing for it except the price of the '
          'parts.',
          'Bilal grows vegetables on an allotment ten minutes from his '
          'flat. He says the vegetables are not the point: the point is '
          'two hours a week in which nobody can telephone him, and the '
          'fact that nothing there can be hurried.',
          'Cora plays in a brass band that meets on Wednesdays. She '
          'joined at fifty-one, having never played anything, and says '
          'the hardest part was six weeks of being the worst person in '
          'the room.'],
         items=[
          ('Which is the best heading for paragraph 1?',
           ['A hobby that began as a cost', 'Two hours nobody can interrupt', 'Starting from nothing at fifty-one', 'A band that meets on Wednesdays'],
           0, 'Thirty pounds for a cable, so she learned to do it.',
           {1: 'Two hours nobody can interrupt is paragraph 2.', 2: 'Starting from nothing at fifty-one is paragraph 3.', 3: 'The band on Wednesdays is also paragraph 3.'}),
          ('Who started because of a cost?', ['Ana', 'Bilal', 'Cora'],
           0, 'Ana was charged thirty pounds for a cable.',
           {1: 'Bilal started for the time it gave him.', 2: 'Cora started to learn something new.'}),
          ('Which is the best heading for paragraph 2?',
           ['Repairs for friends', 'Time rather than vegetables', 'Six weeks of being the worst', 'The price of the parts'],
           1, 'The point is two hours in which nothing can be hurried.',
           {0: 'Repairs for friends is paragraph 1.', 2: 'Six weeks of being the worst is paragraph 3.', 3: 'The price of the parts is paragraph 1.'}),
          ('How often does Ana repair a bicycle?', None, 'one a week',
           'For friends, taking only the cost of parts.'),
          ('Which is the best heading for paragraph 3?',
           ['An allotment ten minutes away', 'A kitchen full of bicycles', 'Learning an instrument late', 'Taking nothing for the work'],
           2, 'She joined at fifty-one having never played anything.',
           {0: 'The allotment is paragraph 2.', 1: 'The kitchen full of bicycles is paragraph 1.', 3: 'Taking nothing for the work is paragraph 1.'})])],
   listen=[
    dict(heading='A talk about starting a hobby', part='Part 2',
         task='One speaker giving advice · note completion', band='l2',
         qtype='Questions 26-30',
         script=[
          ('Speaker', 'I run the beginners’ night at the band, and '
           'I have watched about two hundred people start something at '
           'forty or fifty. Four things decide whether they stay.'),
          ('Speaker', 'First, the six-week rule. For about six weeks '
           'you will be the worst person in the room and you will feel '
           'it every session. Everybody who stayed went through that. '
           'Nobody who left went through it and then left.'),
          ('Speaker', 'Second, go on a fixed day. People who come when '
           'they feel like it stop within a month. The day in the diary '
           'does more work than the enthusiasm does.'),
          ('Speaker', 'Third, do not buy good equipment at the start. '
           'Borrow something that works. Buying an expensive instrument '
           'in week one adds pressure and tells you nothing about '
           'whether you like playing.'),
          ('Speaker', 'Fourth, and this is the one people do not '
           'expect: choose something with other people in it. A hobby '
           'you do alone needs your own energy every single time. A '
           'hobby with a Wednesday in it survives the weeks when you '
           'have none.')],
         items=[
          ('The speaker has watched about ____________ people start.',
           None, 'two hundred', 'At the beginners’ night at the '
           'band.'),
          ('For about ____________ weeks you are the worst in the '
           'room.', None, 'six', 'Everybody who stayed went through '
           'that.'),
          ('People who come when they feel like it stop within a '
           '____________.', None, 'month',
           'A fixed day works better than enthusiasm.'),
          ('The speaker says not to buy good ____________ at the '
           'start.', None, 'equipment', 'Borrow something that works '
           'instead.'),
          ('A hobby with other people survives the weeks when you have '
           'no ____________.', None, 'energy',
           'Which is the point people do not expect.')])],
   speak=dict(
    part='Part 2', focus='A hobby',
    longturn=[('I am going to talk about a hobby I have. I grow vegetables in '
               'a small garden.'),
              ('The garden is behind my building and it is about four metres '
               'by five. I share it with the woman in the flat below me. We '
               'grow tomatoes, beans, onions and a lot of salad, because salad '
               'is expensive in the shops.'),
              ('I started three years ago, and I started by accident. My '
               'neighbour was ill for a summer and asked me to water her '
               'plants. I did it for two months and then I did not want to '
               'stop.'),
              ('I get three things from it. The first is food, and that is '
               'nice but it is not the main thing. The second is time '
               'outside. I am in an office all day, so half an hour in '
               'the garden in the evening is good for me. The third '
               'thing is that I have to wait. A tomato takes four '
               'months, and nothing in my work takes four months. That '
               'is the part I really like, and it is hard to explain.')],
    intro=('One minute to prepare. Use all four bullets and keep the last '
           'one for the end.'),
    cue=('Describe a hobby you have or would like to have.',
         ['say what it is',
          'say how you started or would start',
          'say what you get from it',
          'and explain whether you would tell a friend to try it']),
    qs=['Now look at the card. You have one minute to make notes.',
        'How much time does it take?',
        'Does it cost much?'],
    shape=[('answer', 'My hobby is repairing bicycles, which I do in '
            'my kitchen.'),
           ('support', 'I started because a shop wanted thirty pounds '
            'to change a cable.'),
           ('support', 'Now I do about one a week, mostly for '
            'friends.'),
           ('follow-up', 'What I get from it is an hour where the '
            'problem is small and I can actually finish it.')]),
   write=[
    dict(task='Task 2',
         heading='Should children be made to do sport at school?',
         prompt='Some people think sport should be compulsory at '
                'school. Others think children should choose. What do '
                'you think? Give your opinion and reasons.',
         instruct='  Write at least 130 words in about 25 minutes.',
         lines=16, wband='essay',
         plan=('Sport should be compulsory, but the choice of sport '
               'should not be',
               [('The habit is formed at school or usually not at all',
                 ['participation falls from seventy-eight per cent at '
                  'eleven to thirty-eight by forty-four',
                  'a child who never tries anything has nothing to '
                  'return to']),
                ('Compulsory one sport is what makes children hate it',
                 ['being bad at football in public teaches avoidance',
                  'a choice of six activities keeps the requirement '
                  'and removes the humiliation'])]),
         model=[
          'Some people want sport to be compulsory at school and others '
          'want children to choose. I think the activity should be '
          'compulsory and the choice of sport should not be.',
          'The reason for keeping it compulsory is that the habit is '
          'formed at school or usually not at all. Nearly eighty per '
          'cent of children play sport weekly at eleven, and under '
          'forty per cent of adults do at thirty. A child who has '
          'never tried anything has nothing to go back to later.',
          'The reason for choice is that being made to play one sport '
          'badly, in public, is what teaches children to avoid sport '
          'for life. A school that offers six activities keeps the '
          'requirement and removes the humiliation, which is the part '
          'that does the damage.',
          'So I would require two hours a week and let the child pick '
          'from a list, including walking and swimming.'],
         notes=['The answer splits the question in two and answers '
                'both halves differently, which is more honest than '
                'picking a side.',
                'The figures are used to support the first reason '
                'rather than decorating it.',
                'The conclusion is a specific policy, with the hours '
                'named.'],
         criterion=[('The question split and both halves answered',
                     'Task Response'),
                    ('Figures used as support', 'Task Achievement'),
                    ('A specific proposal at the end', 'Coherence and '
                     'Cohesion'),
                    ('Passive and active mixed correctly',
                     'Grammatical Range and Accuracy')])],
   gram=dict(
    point='Gerunds after prepositions and some verbs',
    fix=dict(
     text=('I am interested in grow vegetables. I started three years ago, by '
           'help my neighbour when she was ill. I watered her plants for two '
           'months, and after that I did not want stopping. Now I share a '
           'small garden with her, and we grow tomatoes, beans and salad, '
           'because salad is expensive in the shops.'),
     faults=[('I am interested in grow vegetables',
              'I am interested in growing vegetables',
              ('After a preposition the verb takes the -ing form: interested '
               'in growing.')),
             ('by help my neighbour',
              'by helping my neighbour',
              'By is a preposition too, so the verb after it is helping.'),
             ('I did not want stopping',
              'I did not want to stop',
              ('Want is followed by to and the plain verb, not by the -ing '
               'form.'))]),
    explain='After a preposition, and after enjoy, finish, avoid and '
            'keep, use the -ing form.',
    examples=['She started by repairing her own bicycle.',
              'He enjoys growing vegetables.',
              'They avoid playing in public.',
              'I keep forgetting the day.'],
    items=[('She started by (repair) her own bicycle.',
            'She started by repairing her own bicycle.'),
           ('He enjoys (grow) vegetables.',
            'He enjoys growing vegetables.'),
           ('They avoid (play) in public.',
            'They avoid playing in public.'),
           ('I keep (forget) the day.', 'I keep forgetting the day.'),
           ('She is good at (fix) things.',
            'She is good at fixing things.')],
    task='Write each sentence with the -ing form.'),
   vocab=[('muscle', 'the tissue that moves the body'),
          ('survivors', 'those who are still there at the end'),
          ('flattening', 'becoming level, or making level'),
          ('specialisation', 'concentrating on one thing only'),
          ('specialisers', 'those who concentrate on one thing'),
          ('strategies', 'plans for reaching a goal'),
          ('twenty-one', 'the number 21'),
          ('shoes', 'what you wear on your feet'),
          ('nervous', 'worried about something that is coming'),
          ('energy', 'the power to do things'),
          ('track', 'a path for running or racing')],
   expr=[('For about six weeks you will be the worst in the room.',
          'warning a beginner honestly'),
         ('The day in the diary does the work.',
          'explaining why a habit holds'),
         ('Borrow something that works.', 'advice about equipment'),
         ('The vegetables are not the point.', 'naming the real '
          'reason')],
   trans=['first', 'next', 'then', 'finally']),

  dict(
   sub='What training actually does',
   step=2,
   read=[
    dict(heading='What changes when you train',
         kind='Short factual article',
         task='Note completion and matching information',
         band='acad', qtype='Questions 31-36',
         paras=[
          'Most people believe that training makes a muscle bigger and '
          'that the bigger muscle is the reason they get stronger. For '
          'the first six weeks that is almost entirely wrong. The '
          'early gains are the largest anybody ever makes. They come '
          'from the nervous system learning to use the muscle that is '
          'already there. More fibres are recruited, they fire '
          'together instead of separately, and the body stops '
          'protecting itself quite so carefully. Nothing visible has '
          'changed at all.',
          'Size follows later, and it follows slowly. The tissue is '
          'rebuilt between sessions rather than during them, which is '
          'why rest is not time off from training but part of it. A '
          'person who trains hard every day for a month usually '
          'performs worse at the end of it than a person who trained '
          'four times a week. The difference is not willpower. It is '
          'that the second person allowed the rebuilding to happen.',
          'The third change is the one that lasts longest and is talked '
          'about least. Regular exercise alters how the body uses fuel '
          'between sessions: more small vessels in the muscle, more of '
          'the structures that burn fuel, a heart that moves more blood '
          'per beat. These changes continue for years and they are what '
          'the health benefit actually is. They also disappear more '
          'slowly than strength does, which is the one piece of good '
          'news for anybody coming back after an injury.'],
         items=[
          ('For the first ____________ weeks, gains come from the '
           'nervous system.', None, 'six',
           'Paragraph 1, and nothing visible has changed.'),
          ('The early gains are the ____________ anybody makes.', None,
           'largest', 'Paragraph 1, which surprises most people.'),
          ('Tissue is rebuilt ____________ sessions.', None,
           'between', 'Paragraph 2, which is why rest is part of '
           'training.'),
          ('Which paragraph explains why four sessions beat seven?',
           ['Paragraph 2', 'Paragraph 1', 'Paragraph 3'], 0,
           'Because the rebuilding is allowed to happen.',
           {1: 'Paragraph 1 is about the first gains, from the nervous '
               'system.', 2: 'Paragraph 3 is about what changes between sessions.'}),
          ('The third change alters how the body uses ____________.',
           None, 'fuel', 'Paragraph 3, between sessions.'),
          ('These changes disappear more ____________ than strength '
           'does.', None, 'slowly',
           'Paragraph 3, which is good news after an injury.')])],
   listen=[
    dict(heading='A talk about training and rest', part='Part 4',
         task='A short lecture to sports students · multiple choice, sentence completion and short answer', band='l4',
         qtype='Questions 37-41',
         script=[
          ('Speaker', 'I am going to tell you the three things that '
           'change when you train, and the order will surprise most of '
           'you.'),
          ('Speaker', 'First, for about six weeks, nothing visible '
           'changes at all. You get considerably stronger and your '
           'muscles are the same size. What has changed is the nervous '
           'system: it is using the muscle you already had. That is why '
           'a beginner improves faster than anybody else in the gym and '
           'why it feels so good.'),
          ('Speaker', 'Second, size. It arrives later and it is built '
           'between sessions, not during them. If you train hard seven '
           'days a week for a month you will perform worse than '
           'somebody who trained four, and you will blame yourself '
           'rather than the method.'),
          ('Speaker', 'Third, and this is the one worth having: the '
           'body changes how it handles fuel. More small vessels, a '
           'heart that moves more blood each beat. That is what the '
           'health benefit is, and it keeps going for years.'),
          ('Speaker', 'One practical thing. Those last changes fade '
           'more slowly than strength. If you stop for two months, you '
           'come back weaker but not back to the beginning, which is '
           'the fact that gets people through an injury.')],
         items=[
          ('For about six weeks of training',
           ['you get weaker', 'nothing visible changes', 'the muscles grow fastest', 'you should rest completely'],
           1, 'Although you get considerably stronger in that time.',
           {0: 'He says you get stronger, not weaker.', 2: 'Size comes later, between the sessions.', 3: 'Rest between sessions is his point, not rest instead '
               'of them.'}),
          ('What has changed early on is the ____________ system.',
           None, 'nervous', 'It uses the muscle you already had.'),
          ('Size, the speaker says, is built',
           ['during the sessions', 'between the sessions', 'only in the first week', 'only after an injury'],
           1, 'Not during them, which is the point of the talk.',
           {0: 'That is the assumption he is correcting.', 2: 'The first weeks are when the nervous system changes.', 3: 'An injury is the example he ends with, not a cause of '
               'growth.'}),
          ('Training seven days a week makes you perform',
           ['better than four days', 'worse than four days', 'the same as four days', 'better for six weeks only'],
           1, 'Which follows from size being built between sessions.',
           {0: 'He says the opposite of that.', 2: 'He says there is a difference, not that they are '
               'equal.', 3: 'The six weeks is when nothing visible changes, not a '
               'limit on this.'}),
          (
           'After stopping for two months, where do you not return to?',
           None, 'the beginning',
           'Which is what gets people through an injury.')])],
   speak=dict(
    part='Part 2 into Part 3', focus='Exercise and health',
    intro=('Card first, and the last bullet is the one that earns the '
           'band: it asks you to explain rather than to list. After the '
           'long turn the discussion opens: give the claim, then the '
           'mechanism. Saying why something works is what lifts a Part 3 '
           'answer.'),
    cue=('Describe a sport or an exercise you have tried.',
         ['say what it was',
          'say where you did it',
          'say who you did it with',
          'and explain whether you kept it up']),
    qs=['Now look at the card. You have one minute to make notes.',
        'What made you stop or go on?',
        'Would you try it again?',
        'Why do people stop exercising?',
        'Is it better to exercise alone or with others?',
        'Should employers give workers time to exercise?'],
    shape=[('answer', 'Most people stop because they expect visible '
            'change too early.'),
           ('support', 'For the first six weeks almost nothing '
            'visible changes, even though you are getting stronger.'),
           ('support', 'Exercising with other people helps, because a '
            'fixed day survives the weeks when you have no energy.'),
           ('follow-up', 'So I would judge a scheme by how many people '
            'are still there in month three, not month one.')]),
   write=[
    dict(task='Task 1', fork='A', heading='Who takes part in sport, by '
         'age',
         figure=_TAKE,
         prompt='The chart shows the share of people in each age group '
                'who play sport weekly. Describe the chart and make '
                'one comparison.',
         instruct='  Write at least 90 words in about 20 minutes.',
         lines=11,
         model=[
          'The chart shows what share of people in five age groups '
          'play a sport at least once a week.',
          'Participation falls steadily with age. It is highest among '
          'those aged eleven to fifteen, at seventy-eight per cent, and '
          'lowest among those aged sixty-five and over, at eighteen.',
          'The sharpest fall is between the first two groups: from '
          'seventy-eight per cent at eleven to fifteen down to '
          'fifty-four at sixteen to twenty-four, a drop of '
          'twenty-four points in one step.',
          'After that the decline is gentler, averaging about nine '
          'points between each group, so the pattern is one large early '
          'fall followed by a slow flattening.'],
         notes=['The overall direction is given before any single '
                'figure.',
                'The steepest part is identified and quantified, which '
                'is the main feature of this chart.',
                'The last sentence describes the shape of the rest of '
                'the chart in one phrase.'],
         criterion=[('The overall trend stated first', 'Task '
                     'Achievement'),
                    ('Highest and lowest with figures', 'Task '
                     'Achievement'),
                    ('The steepest change identified', 'Task '
                     'Response'),
                    ('Percentage points used correctly', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Describing trends: rise, fall, steadily, sharply',
    explain='Use a verb plus an adverb, or a verb plus a noun: fell '
            'sharply, a sharp fall.',
    examples=['Participation falls steadily with age.',
              'It fell sharply between the first two groups.',
              'There was a sharp fall after fifteen.',
              'The decline is gentler after that.'],
    items=[('Participation (fall / steady) with age.',
            'Participation falls steadily with age.'),
           ('It (fall / sharp) after fifteen.',
            'It fell sharply after fifteen.'),
           ('There was a (sharp) fall.', 'There was a sharp fall.'),
           ('The numbers (rise / slow) after 1970.',
            'The numbers rose slowly after 1970.'),
           ('The line (flatten) at the end.',
            'The line flattens at the end.')],
    task='Write each sentence with the right trend words.'),
   vocab=[('brilliant', 'very good or very clever'),
          ('performance', 'how well somebody does something'),
          ('perform', 'to do something, or to play before an '
           'audience'),
          ('fuel', 'something burned to give energy'),
          ('injured', 'hurt'),
          ('academy', 'a school for a special subject or sport'),
          ('abroad', 'in or to another country'),
          ('method', 'a way of doing something'),
          ('technique', 'the way a skill is carried out'),
          ('worn', 'past participle of wear'),
          ('combination', 'two or more things together')],
   expr=[('Nothing visible has changed at all.',
          'describing an invisible gain'),
         ('Rest is not time off; it is part of it.',
          'correcting a belief'),
         ('You will blame yourself rather than the method.',
          'naming a common error'),
         ('That is the fact that gets people through an injury.',
          'giving a reason for hope')],
   trans=['after that', 'before', 'then', 'finally']),

  dict(
   sub='One sport or four',
   step=3,
   read=[
    dict(heading='Whether early specialisation works',
         kind='Short factual article',
         task='Multiple choice, matching information and sentence completion',
         band='acad', qtype='Questions 42-47',
         paras=[
          'Parents are told two opposite things about children and '
          'sport. The first is that an elite athlete must specialise '
          'early, because the hours have to be put in before the body '
          'stops improving. The second is that children who play '
          'several sports until fifteen do better in the end. Both '
          'claims quote real studies, and the disagreement survives '
          'because the two sides are usually counting different '
          'people.',
          'The strongest evidence comes from studies that follow '
          'children forward rather than asking adults to remember. '
          'These generally find that specialisers are ahead at twelve, '
          'level at sixteen, and behind at twenty-one. They also find '
          'that specialisers are injured considerably more often. '
          'Specialisers drop out of sport altogether at about twice '
          'the rate. The usual explanation is that a child who plays '
          'four sports is still developing general strength and a '
          'wider set of movement strategies. The specialiser is '
          'repeating one pattern on one set of tissues.',
          'The argument for early specialisation is not nothing, and '
          'it is strictly limited. In a small number of sports, mostly '
          'those where the career is over by twenty-five, the hours '
          'genuinely have to start early. The people who reach the top '
          'did start early. The error is in the direction of the '
          'reasoning: those athletes are the survivors, and nobody '
          'counts the children who started at six, were injured at '
          'thirteen and stopped. A sample that only contains survivors '
          'will always tell you that whatever the survivors did is '
          'what works.'],
         items=[
          (
           'Studies that follow children forward find that '
           'specialisers are',
           ['ahead at every age', 'ahead at twelve and behind at twenty-one', 'behind from the start', 'level throughout'],
           1,
           'Ahead at twelve, level at sixteen, behind at twenty-one.',
           {0: 'The same studies find them behind by twenty-one.', 2: 'They are ahead at twelve, so not behind from the '
               'start.', 3: 'Level is the finding at sixteen only, between the two.'}),
          ('Specialisers drop out of sport altogether at about',
           ['the same rate as others', 'half the rate', 'twice the rate', 'ten times the rate'],
           2, 'As well as being injured considerably more often.',
           {0: 'The passage gives a difference, not the same rate.', 1: 'Half the rate would make specialising safer, not '
               'riskier.', 3: 'Ten times is far more than the passage claims.'}),
          ('Which paragraph explains why the two sides disagree?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 1'], 2,
           'They are usually counting different people.',
           {0: 'Paragraph 2 reports what the studies find.', 1: 'Paragraph 3 is about the sports where an early start '
               'is real.'}),
          ('A child playing four sports develops a wider set of '
           'movement ____________.', None, 'strategies',
           'Paragraph 2, as well as general strength.'),
          ('Early specialisation is genuinely needed in sports where',
           ['the career is over by twenty-five', 'children are strongest', 'injuries are rare', 'four sports are played'],
           0, 'A small number of sports, the passage says.',
           {1: 'Strength in children is the argument for playing '
               'several sports.', 2: 'Specialisers are injured more, not less, in this '
               'passage.', 3: 'Playing four sports is the opposite of specialising.'}),
          (
           'What is wrong with studying only those who reached the '
           'top?',
           ['they are too old', 'they do not remember', 'they are the survivors', 'they play too many sports'],
           2, 'Paragraph 3: nobody counts those who stopped.',
           {0: 'Age is not the flaw in the sample.', 1: 'Memory is the flaw in the studies that ask adults to '
               'recall.', 3: 'Playing many sports is what the non-specialisers did.'})])],
   listen=[
    dict(heading='Two coaches disagree', part='Part 3',
         task='A discussion between two coaches · matching', band='l3',
         qtype='Questions 48-52',
         bank=['A', 'B', 'C'],
         reuse=True,
         banklabel='A  Ravi    B  Kim    C  both of them',
         script=[
          ('Tutor', 'You coach the same age group and you do it '
           'differently. Begin with what you agree on.'),
          ('Ravi', 'We agree that the hours matter and that nobody '
           'reaches a high level without a great many of them.'),
          ('Kim', 'Agreed. We disagree about when those hours should '
           'start and in how many sports.'),
          ('Tutor', 'Kim?'),
          ('Kim', 'Mine play three sports until fifteen. The injury '
           'figures are the reason. In my eight years I have had two '
           'serious injuries in the squad, and the academy down the '
           'road has that in a season.'),
          ('Ravi', 'Which is a fair point, and I will answer it '
           'honestly: my sport is one where the top is reached at '
           'twenty-two, so the hours have to start at nine.'),
          ('Kim', 'Then we may not disagree at all. You have a sport '
           'where it is true and I have one where it is not.'),
          ('Ravi', 'The part I will not defend is the drop-out rate. '
           'Twice is twice, and those children never come back to any '
           'sport.'),
          ('Tutor', 'What would change your practice?'),
          ('Ravi', 'A study following the ones who stopped. Everything '
           'we have follows the ones who stayed.'),
          ('Kim', 'That is the honest answer and I would accept it '
           'too.')],
         items=[
          (
           'Agrees that nobody reaches a high level without many '
           'hours.', None, 'C',
           'Ravi states it and Kim agrees at once.'),
          ('Has players who do three sports until fifteen.', None, 'B',
           'The injury figures are the reason given.'),
          ('Gives two serious injuries in eight years.', None, 'B',
           'Against the same number in a season nearby.'),
          ('Coaches a sport whose top is reached at twenty-two.', None,
           'A', 'So the hours have to start at nine.'),
          ('Refuses to defend the drop-out rate.', None, 'A',
           'Because those children never return to any sport.')])],
   speak=dict(
    part='Part 3', focus='Children and sport',
    sounds=[('Make your voice go down at the end of a sentence. If it goes up, '
             'it sounds like a question, and the examiner will wait.'),
            ('In a list the voice goes up, up, and then down on the last one: '
             'tomatoes, beans, onions and salad.'),
            ('Free-time words have the stress at the front: GARden, FOOTball, '
             'MUsic. Enjoy takes the second part.'),
            'Practise the list above three times and make the last word fall.',
            ('Record yourself talking about your free time. Listen to the last '
             'word of each sentence and decide whether it went up or down.')],
    intro='Take a position, then say what evidence would change it. '
          'That is the strongest Part 3 answer available.',
    qs=['Should children specialise in one sport early?',
        'Is competition good for children?',
        'Who should pay for sport for young people?'],
    shape=[('answer', 'In most sports I think children should play '
            'several until about fifteen.'),
           ('support', 'Specialisers are ahead at twelve and behind at '
            'twenty-one in the studies that follow children '
            'forward.'),
           ('support', 'They are also injured more and drop out at '
            'about twice the rate.'),
           ('follow-up', 'What would change my mind is a study that '
            'followed the children who stopped, which nobody has '
            'done.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Writing to a club about your child',
         prompt='Your child wants to join a sports club. Write to the '
                'club. In your letter: say who your child is and their '
                'age; ask two questions about the club; say when they '
                'could attend.',
         instruct='  Write at least 80 words in about 15 minutes.',
         lines=10,
         model=[
          'Dear Sir or Madam,',
          'My daughter Mira, who is eleven, would like to join the '
          'swimming club at Riverside.',
          'Could I ask two things first? She can swim twenty-five '
          'metres but slowly, so I would like to know whether that is '
          'enough for the beginners’ group. I would also like to '
          'know whether parents stay during the session or wait in '
          'reception.',
          'She is free on Thursday evenings, and from January on '
          'Tuesdays as well, when her music lesson ends.',
          'Thank you for your help.',
          'Yours faithfully,',
          'P. Raman'],
         notes=['The child, the age and the club are all in the first '
                'sentence.',
                'Both questions are practical and answerable in one '
                'line each, which is what gets a quick reply.',
                'The availability includes a date from which it '
                'changes.'],
         criterion=[('Child, age and club named first', 'Task '
                     'Achievement'),
                    ('Two clear questions', 'Task Achievement'),
                    ('Availability with a change of date', 'Task '
                     'Response'),
                    ('Formal register', 'Coherence and Cohesion')])],
   gram=dict(
    point='Comparative structures: twice as, more than, as many as',
    explain='Use twice as many as, half as many as, and more than for '
            'comparing amounts.',
    examples=['They drop out at twice the rate.',
              'There are twice as many injuries.',
              'Specialisers are injured more than others.',
              'He trains half as often as she does.'],
    items=[('They drop out at (twice) the rate.',
            'They drop out at twice the rate.'),
           ('There are (twice / many) injuries.',
            'There are twice as many injuries.'),
           ('Specialisers are injured (more) others.',
            'Specialisers are injured more than others.'),
           ('He trains (half / often) she does.',
            'He trains half as often as she does.'),
           ('Fewer than (half) the group continue.',
            'Fewer than half the group continue.')],
    task='Complete each comparison.'),
   vocab=[('tissue', 'the material that body parts are made of'),
          ('defence', 'protection against attack'),
          ('dull', 'not interesting, or not sharp'),
          ('risky', 'likely to cause harm or loss'),
          ('strictly', 'in a way that allows no exception'),
          ('possessed', 'owned or had'),
          ('flu', 'an illness with fever and aching'),
          ('altogether', 'completely, or in total'),
          ('elite', 'the best or most skilled group'),
          ('rapid', 'fast'),
          ('instructor', 'a person who teaches a skill')],
   expr=[('Both claims quote real studies.',
          'explaining why a disagreement survives'),
         ('They are the survivors.', 'identifying a biased sample'),
         ('Twice is twice.', 'refusing to argue with a number'),
         ('What would change your practice?', 'asking for a '
          'falsifying test')],
   trans=['because', 'so', 'however', 'for example'])],

 technique=dict(
  title='The re-read counter: count every return to the text',
  body='This page asks you to measure something you have never '
       'measured, and the measurement alone usually improves it. Here '
       'is the method. Take any reading passage in this unit. Every '
       'time your eyes go back to a part of the text you have already '
       'read, make a small mark in the margin. Not a thought about it, '
       'not a judgement, just a mark. At the end, count the marks. Most '
       'students at this level are astonished: twenty, thirty, '
       'sometimes more for a passage of two hundred words. Now ask what '
       'caused each return. There are only four causes, and three of '
       'them are fixable. One: you read a sentence without taking it '
       'in, because you were thinking about the previous question. '
       'Two: you did not know what you were looking for, because you '
       'had not read the question properly. Three: you met an unknown '
       'word and stopped, which unit 3 dealt with. Four, the only '
       'legitimate one: you found an answer and went back to check it. '
       'Mark each return with its number. Then read the next passage '
       'and try to halve the count. Students who do this for three '
       'units typically cut their reading time by a quarter with no '
       'loss of accuracy at all, because the time was never spent '
       'reading. It was spent re-reading.',
  panel=[('Mark every return', 'A small mark in the margin, not a '
          'thought.'),
         ('Count them at the end', 'Twenty is normal. Thirty is '
          'common.'),
         ('Label each one', 'Drifted? No purpose? Unknown word? '
          'Checking?'),
         ('Halve it on the next passage',
          'Only the fourth kind is worth keeping.')],
  qs=['How many times did I go back?',
      'Which of the four reasons was each one?',
      'Was I reading with a question in mind?',
      'Did I stop at a word I could have passed?',
      'What is my count on the next passage?'],
  task='Count your returns on both passages in this unit, label each '
       'one with its reason, and write the two totals in your book '
       'beside the times you recorded in unit 5.'),

 outlining=dict(
  title='The one-minute outline: plan a long turn against the clock',
  body='Speaking Part 2 gives you one minute to prepare and two '
       'minutes to talk, and the minute is the part people waste. Most '
       'candidates spend it worrying or writing full sentences they '
       'then read aloud, which sounds exactly like what it is. Here is '
       'what to write instead, and it takes forty seconds. Four lines, '
       'one for each bullet on the card, and each line is two or three '
       'words, not a sentence. For "describe a hobby you have": line '
       'one, "bikes, kitchen". Line two, "shop wanted thirty pounds". '
       'Line three, "one a week, friends". Line four, "small problem I '
       'can finish". That is the whole plan. It is enough because you '
       'are not learning a speech; you are leaving yourself four '
       'signposts so that you never stop and wonder what comes next, '
       'which is the only thing that really goes wrong in Part 2. Then '
       'use the last twenty seconds on the fourth line only, because '
       'the fourth bullet is usually the one that asks what you think '
       'or how you felt, and it is where the interesting language '
       'lives. Practise the one-minute outline on the four cue cards '
       'in this book so far, with a clock, until forty seconds is '
       'comfortable.',
  frame=('Describe a hobby you have',
         [('What it is and where',
           ['bikes, kitchen', 'started: shop wanted thirty pounds']),
          ('What you get from it',
           ['one a week, for friends',
            'a small problem I can actually finish'])]),
  qs=['Did you write words or sentences?',
      'Do you have one line for every bullet?',
      'Did you spend the last twenty seconds on the final bullet?',
      'Did you stop at any point and wonder what came next?',
      'Did you read your notes aloud instead of talking?'],
  task='Time yourself on the four cue cards from units 3, 6, 8 and 9. '
       'One minute to write four short lines, two minutes to speak, '
       'and no full sentences on the paper.',
  answers=['four lines, one a bullet, two or three words each',
           'the notes are signposts, not a script',
           'the last bullet is where the best language is',
           'writing sentences is what makes people read aloud',
           'forty seconds is enough once it is practised']),

 candos=['I can read a club list and find the age and the cost',
         'I can find my way round a ground from a plan',
         'I can describe a chart that falls steadily with one sharp '
         'step',
         'I can count and reduce how often I re-read a passage',
         'I can plan a two-minute talk in four short lines'],

 tip=('Count how many times your eyes go back to a part of the passage '
      'you have already read. Most of that time was never reading, and '
      'you can have it back.'))
