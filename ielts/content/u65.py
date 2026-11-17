# -*- coding: utf-8 -*-
"""Foundation 1, Unit 5 - Travel and Getting Around.

Tickets, directions, cancellations, and then the two longer readings:
how a city moves people, and what tourism does to a small coastal town.
The second of those carries most of this unit's share of the gap, because
it is the Volume 1 subject a Foundation student is least ready for.
"""

_TOWN = dict(kind='map',
             title='The town centre, before and after the new street plan',
             sub='two plans of the same six streets',
             panels=[
              ('Before',
               [(0.06, 0.06, 0.40, 0.15, 'Bus station', 'building'),
                (0.54, 0.06, 0.40, 0.15, 'Market square', 'building'),
                (0.06, 0.32, 0.26, 0.17, 'Museum', 'building'),
                (0.37, 0.32, 0.24, 0.17, 'Car park', 'building'),
                (0.66, 0.32, 0.28, 0.17, 'Shops', 'building'),
                (0.06, 0.62, 0.42, 0.16, 'Through traffic', 'road'),
                (0.54, 0.62, 0.40, 0.16, 'Taxi rank', 'building')],
               [(0.0, 0.26, 1.0, 0.26, 'High Street'),
                (0.0, 0.86, 1.0, 0.86, 'River Road')]),
              ('After',
               [(0.06, 0.06, 0.40, 0.15, 'Bus and tram stop', 'new'),
                (0.54, 0.06, 0.40, 0.15, 'Market square', 'building'),
                (0.06, 0.32, 0.26, 0.17, 'Museum', 'building'),
                (0.37, 0.32, 0.24, 0.17, 'Cycle park', 'new'),
                (0.66, 0.32, 0.28, 0.17, 'Shops', 'building'),
                (0.06, 0.62, 0.42, 0.16, 'Pedestrian area', 'green'),
                (0.54, 0.62, 0.40, 0.16, 'Taxi rank', 'building')],
               [(0.0, 0.26, 1.0, 0.26, 'High Street: buses only'),
                (0.0, 0.50, 1.0, 0.50, 'New cycle path'),
                (0.0, 0.86, 1.0, 0.86, 'River Road')])],
             key=[('Unchanged', 'building'), ('New or rebuilt', 'new'),
                  ('Open to people only', 'green')])

_USE = dict(kind='bar',
            title='How many people use four kinds of transport',
            sub='thousands of journeys a day, one city',
            cats=['Bus', 'Tram', 'Bicycle', 'Car'],
            series=[('Journeys a day', [112.0, 46.0, 38.0, 164.0])],
            ylab='thousands')

UNIT = dict(
 n=5, vol=7, level='A1-A2', band='below 4.0',
 theme='Travel and Getting Around',
 opener=(
   'This unit takes you from a ticket window to an argument about '
   'tourism. You will read a station board and a cancellation notice, '
   'label a map of a town centre before and after it changed, describe '
   'how many people use four kinds of transport, and read what happens '
   'to a small town when visitors arrive. The technique page is the two '
   'routes through a passage, timed against each other, which is the '
   'first page in this course that asks you to use a clock.'),

 cycles=[
  dict(
   sub='Buying a ticket',
   step=1,
   read=[
    dict(heading='Fares and times: a station board',
         kind='Timetable', task='Table completion',
         band='gt_short', qtype='Questions 1-5',
         skill=('A board is read across one line only',
                ['Find the line the question is about, then put a '
                 'finger on it and do not move it.',
                 'Every wrong answer on a timetable is a correct answer '
                 'from the wrong line.']),
         paras=[
          'Trains to Kelbridge leave at twelve minutes past each hour '
          'and take fifty-two minutes. A single costs eleven pounds and '
          'a return twelve pounds forty.',
          'Trains to Marsden leave at twenty past and take twenty-six '
          'minutes. The fare rose in April and a single is now nine '
          'pounds eighty.',
          'The last train in each direction leaves at ten past eleven '
          'at night. There is no service on 25 or 26 December. Tickets '
          'bought on the train cost one pound more per journey.'],
         items=[
          ('Trains to Kelbridge leave at ____________ minutes past the '
           'hour.', None, 'twelve',
           'Paragraph 1: every hour, at the same minute.'),
          ('The journey to Kelbridge takes ____________ minutes.', None,
           'fifty-two', 'Paragraph 1, and a single costs eleven '
           'pounds.'),
          ('A return to Kelbridge costs twelve pounds ____________.',
           None, 'forty', 'Paragraph 1, against eleven for a single.'),
          ('The Marsden fare rose in ____________.', None, 'April',
           'Paragraph 2, to nine pounds eighty.'),
          ('Tickets bought on the train cost ____________ pound more.',
           None, 'one', 'Paragraph 3, for each journey.')])],
   listen=[
    dict(heading='Buying a return ticket', part='Part 1',
         task='A conversation at a ticket window', band='l1',
         qtype='Questions 6-10',
         script=[
          ('Clerk', 'Where are you travelling to?'),
          ('Traveller', 'Kelbridge, today, coming back this evening.'),
          ('Clerk', 'A day return is twelve forty. Any railcard?'),
          ('Traveller', 'No.'),
          ('Clerk', 'Then twelve forty. The next one is at twelve '
           'minutes past, platform three.'),
          ('Traveller', 'How long does it take?'),
          ('Clerk', 'Fifty-two minutes. It stops at four stations on '
           'the way.'),
          ('Traveller', 'And the last one back?'),
          ('Clerk', 'Ten past eleven. Do not miss it; there is nothing '
           'after that and the bus takes two hours.'),
          ('Traveller', 'Is there a difference in price if I come back '
           'tomorrow?'),
          ('Clerk', 'Yes. An open return is twenty-one pounds, so eight '
           'and a half pounds more.'),
          ('Traveller', 'Today, then. Card payment.'),
          ('Clerk', 'Press the green button. Your ticket and your '
           'receipt are separate; keep both.'),
          ('Traveller', 'Which platform again?'),
          ('Clerk', 'Three. Over the bridge and turn left.')],
         items=[
          ('A day return costs twelve pounds ____________.', None,
           'forty', 'With no railcard, the clerk says.'),
          ('The train leaves from platform ____________.', None,
           'three', 'Over the bridge and turn left.'),
          ('The train stops at ____________ stations on the way.', None,
           'four', 'The journey takes fifty-two minutes.'),
          ('The last train back is at ____________ past eleven.', None,
           'ten', 'After that there is only a two-hour bus.'),
          ('An open return costs ____________ pounds.', None,
           'twenty-one', 'Eight and a half pounds more than a day '
           'return.')])],
   speak=dict(
    part='Part 1', focus='How you travel to work or school',
    intro='Say how, then how long. A number in the second sentence '
          'makes the answer concrete.',
    qs=['How do you travel to work or to school?',
        'How long does it take?',
        'Do you prefer the bus or the train?',
        'Has your journey changed in the last year?'],
    shape=[('answer', 'I take the bus, and it takes about thirty-five '
            'minutes.'),
           ('support', 'I could walk it in an hour, and in the summer I '
            'sometimes do.'),
           ('follow-up', 'The train would be faster but the station is '
            'on the wrong side of town.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Telling a friend which train you will catch',
         prompt='You are visiting a friend by train. Write a note to '
                'your friend. In your note: say which train you will '
                'catch; say when it arrives; ask your friend to meet '
                'you.',
         instruct='  Write at least 80 words in about 15 minutes.',
         lines=10,
         model=[
          'Hi Dan,',
          'I am coming on Saturday. The train leaves here at twelve '
          'minutes past two and arrives at Kelbridge at four minutes '
          'past three, so it is a short journey.',
          'Could you meet me at the station? If you cannot, tell me and '
          'I will take a taxi, but it would be good to walk back '
          'together and see the new bridge.',
          'I have to catch the ten past eleven train back the same '
          'night, because there is nothing after it.',
          'See you Saturday,',
          'Ana'],
         notes=['Both times are given, departure and arrival, which is '
                'what the friend actually needs.',
                'The request has a way out built into it, which is '
                'polite and practical.',
                'The last line explains the return, so the friend can '
                'plan the evening.'],
         criterion=[('Both times given', 'Task Achievement'),
                    ('A clear request to be met', 'Task Achievement'),
                    ('An alternative offered', 'Task Response'),
                    ('A short friendly note', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='Prepositions of time: at, on, in, by',
    explain='Use at with a clock time, on with a day or date, in with '
            'a month or year, and by to mean not later than.',
    examples=['The train leaves at twelve minutes past.',
              'I am coming on Saturday.',
              'The fare rose in April.',
              'Be at the station by two.'],
    items=[('The train leaves ____ ten past eleven.',
            'The train leaves at ten past eleven.'),
           ('I am travelling ____ Saturday.',
            'I am travelling on Saturday.'),
           ('The fare rose ____ April.', 'The fare rose in April.'),
           ('Be there ____ two o clock.', 'Be there by two o clock.'),
           ('There is no service ____ 25 December.',
            'There is no service on 25 December.')],
    task='Complete each sentence with at, on, in or by.'),
   vocab=[('argument', 'reasons given for or against something'),
          ('per', 'for each'),
          ('difference', 'the way two things are not the same'),
          ('cent', 'a hundredth part, as in per cent'),
          ('rose', 'past of rise: went up'),
          ('thousand', 'the number 1,000'),
          ('twelve', 'the number 12'),
          ('eleven', 'the number 11'),
          ('kilometres', 'units of distance, 1,000 metres each'),
          ('sentence', 'a group of words that makes a statement'),
          ('policy', 'a rule or plan an organisation follows'),
          ('visitors', 'people who come to a place for a short time')],
   expr=[('Where are you travelling to?', 'the first question at a '
          'ticket window'),
         ('How long does it take?', 'asking about a journey'),
         ('Which platform?', 'the question to ask before you walk '
          'away'),
         ('Do not miss it.', 'warning about a last train')],
   trans=['and', 'then', 'but', 'so']),

  dict(
   sub='Asking the way',
   step=1,
   read=[
    dict(heading='How to find the museum: a short guide',
         kind='Directions', task='Map labelling',
         band='gt_short', qtype='Questions 11-15',
         paras=[
          'Come out of the station and turn left. Walk along River Road '
          'for about four hundred metres until you reach the High '
          'Street.',
          'Turn right at the High Street. The market square is on your '
          'left and the shops are on your right. Do not take the first '
          'small street; it leads only to the car park.',
          'Take the second street on the left. The museum is at the end '
          'of it, opposite the old fire station. The whole walk takes '
          'about twelve minutes at an ordinary pace.'],
         items=[
          ('Coming out of the station, turn ____________.', None,
           'left',
           'Paragraph 1, which puts you on River Road.'),
          ('Walk about ____________ metres along River Road.', None,
           'four hundred', 'Paragraph 1, as far as the High Street.'),
          ('At the High Street, turn ____________.', None, 'right',
           'Paragraph 2, with the square on your left.'),
          ('The first small street leads only to the ____________.',
           None, 'car park', 'Paragraph 2, so it must not be taken.'),
          ('The museum is opposite the old ____________.', None,
           'fire station', 'Paragraph 3, at the end of the street.')])],
   listen=[
    dict(heading='Directions to the sports centre', part='Part 1',
         task='A conversation in the street', band='l1',
         qtype='Questions 16-20',
         script=[
          ('Visitor', 'Excuse me. Is the sports centre near here?'),
          ('Local', 'Not far. Are you walking or driving?'),
          ('Visitor', 'Walking.'),
          ('Local', 'Then go along this road to the end and turn right '
           'at the bank.'),
          ('Visitor', 'The bank on the corner?'),
          ('Local', 'That one. Then it is the third turning on the '
           'left, after the bridge.'),
          ('Visitor', 'Before or after the bridge?'),
          ('Local', 'After. If you cross the bridge and see a church, '
           'you have gone about two hundred metres too far.'),
          ('Visitor', 'How long will it take?'),
          ('Local', 'Ten minutes. Maybe twelve if the lights are '
           'against you.'),
          ('Visitor', 'Is it open on Sunday?'),
          ('Local', 'From ten until four. The pool is closed on Sunday '
           'morning for lessons.'),
          ('Visitor', 'Thank you very much.'),
          ('Local', 'If you reach the park you have definitely gone '
           'wrong. The park is the other direction entirely.')],
         items=[
          ('Turn right at the ____________.', None, 'bank',
           'The one on the corner, at the end of the road.'),
          ('Take the ____________ turning on the left.', None, 'third',
           'And it is after the bridge, not before.'),
          ('If you see a ____________ you have gone too far.', None,
           'church', 'About two hundred metres too far.'),
          ('The walk takes about ____________ minutes.', None, 'ten',
           'Twelve if the lights are against you.'),
          ('On Sunday the centre is open from ten until ____________.',
           None, 'four', 'The pool is closed on Sunday morning.')])],
   speak=dict(
    part='Part 1', focus='Getting lost',
    intro='Tell a short story: where, what happened, how it ended. '
          'Three sentences.',
    qs=['Do you find your way easily in a new town?',
        'Have you ever been lost?',
        'Do you use a map or ask people?',
        'Is your town easy for visitors?'],
    shape=[('answer', 'I am reasonably good at finding my way, but I '
            'have been lost once badly.'),
           ('support', 'I took the wrong bus in a city I did not know '
            'and ended up ten kilometres out.'),
           ('follow-up', 'Now I always check the direction of the bus, '
            'not only its number.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='A plan of the town centre, before and after',
         figure=_TOWN,
         prompt='The two plans show the town centre before and after a '
                'new street plan. Describe the main changes.',
         instruct='  Write at least 90 words in about 20 minutes.',
         lines=11,
         model=[
          'The two plans show the same six streets in the town centre '
          'before and after a new street plan was introduced.',
          'The clearest change is in the High Street, which was open to '
          'all traffic and now takes buses only. The area in the south '
          'that carried through traffic has become a pedestrian area, '
          'and a new cycle path crosses the centre from east to west.',
          'The bus station has been rebuilt as a bus and tram stop, and '
          'the car park has become a cycle park.',
          'The museum, the market square, the shops and the taxi rank '
          'are unchanged, so the plan changed how people arrive rather '
          'than what they arrive for.'],
         notes=['The biggest change is given first, which is how a '
                'before-and-after answer should open.',
                'The answer groups the changes, then names what did '
                'not change, which is a complete description in two '
                'moves.',
                'The last clause says what the whole change means, '
                'without giving an opinion of it.'],
         criterion=[('The main change identified first', 'Task '
                     'Achievement'),
                    ('Both new features described', 'Task '
                     'Achievement'),
                    ('What did not change is stated', 'Task '
                     'Response'),
                    ('Compass directions used', 'Grammatical Range and '
                     'Accuracy')])],
   gram=dict(
    point='Imperatives for directions',
    explain='Give directions with the plain verb: go, turn, take, '
            'cross. Add along, past, until for the distance.',
    examples=['Go along this road to the end.',
              'Turn right at the bank.',
              'Take the third turning on the left.',
              'Walk past the church.'],
    items=[('(go) along this road.', 'Go along this road.'),
           ('(turn) right at the bank.', 'Turn right at the bank.'),
           ('(take) the second street on the left.',
            'Take the second street on the left.'),
           ('(not / cross) the bridge.', 'Do not cross the bridge.'),
           ('(walk) until you reach the square.',
            'Walk until you reach the square.')],
    task='Write each direction as an imperative.'),
   vocab=[('conclusion', 'the decision you reach at the end'),
          ('tourism', 'the business of people visiting places'),
          ('staff', 'the people who work somewhere'),
          ('shape', 'the form of something'),
          ('fourteen', 'the number 14'),
          ('holiday', 'time away from work, often travelling'),
          ('intended', 'meant to happen'),
          ('limits', 'the points beyond which something cannot go'),
          ('earns', 'gets money by working'),
          ('season', 'one of the four parts of the year, or a busy '
           'period'),
          ('path', 'a narrow way for walking'),
          ('industry', 'all the companies doing one kind of work')],
   expr=[('Excuse me, is it near here?', 'stopping somebody politely'),
         ('Take the third turning on the left.', 'giving a direction'),
         ('You have gone too far.', 'describing a mistake'),
         ('The other direction entirely.', 'correcting firmly')],
   trans=['also', 'too', 'and', 'but']),

  dict(
   sub='When travel goes wrong',
   step=2,
   read=[
    dict(heading='What to do if your train is cancelled',
         kind='Notice', task='Short answer and matching',
         band='gt_work', qtype='Questions 21-25',
         skill=('A notice about problems is read for who pays',
                ['Find the word refund, and the word unless beside it. '
                 'That pair is where the answers are.',
                 'Times matter: how late, within how long, after how '
                 'many minutes.']),
         paras=[
          'If your train is cancelled, you may travel on the next '
          'service at no extra cost, even if your ticket was for a '
          'particular train. Show the staff your ticket and the '
          'cancellation message.',
          'If you arrive more than thirty minutes late you may claim '
          'half the fare back, and the whole fare if you are more than '
          'an hour late. Claims must be made within twenty-eight days.',
          'If no train runs at all, we will provide a bus. The bus '
          'takes longer and does not serve every station, so passengers '
          'for the smaller stations are taken on by taxi, which is '
          'arranged at the station and not by you.'],
         items=[
          ('If your train is cancelled you may travel on the '
           '____________ service.', None, 'next',
           'Paragraph 1, at no extra cost.'),
          ('You must show your ticket and the cancellation '
           '____________.', None, 'message',
           'Paragraph 1, shown to the staff with the ticket.'),
          ('Arriving more than thirty minutes late means '
           '____________ the fare back.', None, 'half',
           'Paragraph 2, or the whole fare after an hour.'),
          ('Claims must be made within ____________ days.', None,
           'twenty-eight', 'Paragraph 2, after the journey.'),
          ('Passengers for smaller stations are taken on by '
           '____________.', None, 'taxi',
           'Paragraph 3, arranged by the railway.')])],
   listen=[
    dict(heading='A delayed bus', part='Part 2',
         task='An announcement at a bus station', band='l2',
         qtype='Questions 26-30',
         script=[
          ('Announcer', 'This is an announcement for passengers waiting '
           'for the two forty service to Harlow.'),
          ('Announcer', 'That service has been delayed by about '
           'thirty-five minutes because of a road closure on the '
           'coastal road. It is now expected at three fifteen, from '
           'stand four rather than stand two.'),
          ('Announcer', 'Passengers for Marsden should not wait for '
           'this bus. The three o clock service from stand one goes to '
           'Marsden directly and will arrive earlier.'),
          ('Announcer', 'If you are travelling on to the airport, '
           'please speak to a member of staff at the desk. We are '
           'holding the airport coach for twenty minutes, but no '
           'longer, and we need to know how many of you there are.'),
          ('Announcer', 'Anybody who would rather not wait may use '
           'their ticket on any service today, including tomorrow '
           'morning if you decide to travel then. Your luggage can be '
           'left at the desk at no charge.'),
          ('Announcer', 'We are sorry for the delay. The road is '
           'expected to reopen this evening.')],
         items=[
          ('The two forty service is delayed by about ____________ '
           'minutes.', None, 'thirty-five',
           'Because of a road closure on the coastal road.'),
          ('It will now leave from stand ____________.', None, 'four',
           'Rather than stand two, the announcer says.'),
          ('Passengers for Marsden should take the ____________ o '
           'clock service.', None, 'three',
           'From stand one, and it goes directly.'),
          ('The airport coach is being held for ____________ minutes.',
           None, 'twenty', 'And no longer, the announcer says.'),
          ('Luggage may be left at the desk at no ____________.', None,
           'charge', 'For passengers who decide not to wait.')])],
   speak=dict(
    part='Part 2', focus='A journey',
    intro='One minute to prepare. Four bullets, and keep the story '
          'moving: what happened, not how you felt about it.',
    qs=['Describe a journey you remember.',
        'Say where you went.',
        'Say what happened.',
        'Say how you felt at the end.'],
    shape=[('answer', 'The journey I remember best is one I made to '
            'the coast two summers ago.'),
           ('support', 'The train was cancelled and we were put on a '
            'bus that took three hours.'),
           ('support', 'We arrived at nine in the evening instead of '
            'six, and everything was closed.'),
           ('follow-up', 'It should have been a disaster, but we ate '
            'chips on the sea wall and it is the part everybody '
            'remembers.')]),
   write=[
    dict(task='Task 2',
         heading='Is it better to travel by car or by bus?',
         prompt='Some people prefer to travel by car. Others prefer '
                'public transport. Which is better? Give your opinion '
                'and reasons.',
         instruct='  Write at least 130 words in about 25 minutes.',
         lines=16, wband='essay',
         plan=('Public transport is better for most daily journeys',
               [('It costs much less for one person',
                 ['a bus fare is two pounds; a car costs forty pence a '
                  'kilometre',
                  'the car costs the same whether it is used or not']),
                ('It uses far less space in a city',
                 ['a bus with forty people takes the space of three '
                  'cars',
                  'space in a city centre is the thing there is least '
                  'of'])]),
         model=[
          'Some people travel everywhere by car and others use buses '
          'and trains. For daily journeys in a town, I think public '
          'transport is better, for two reasons.',
          'The first is cost. A bus fare in my town is two pounds, '
          'while running a car costs about forty pence for every '
          'kilometre once everything is counted. A car also costs money '
          'in the weeks when it is not used at all.',
          'The second reason is space. A bus carrying forty people '
          'takes about as much room as three cars carrying five. In a '
          'city centre, space is the thing there is least of, and every '
          'car park is a building that was not built.',
          'A car is better for carrying things, for small children and '
          'for places no bus goes. For the daily journey to work, '
          'though, the bus wins on both cost and space.'],
         notes=['The question is narrowed in the first paragraph to '
                'daily journeys in a town, which makes it answerable.',
                'Both reasons use a figure, and the second one explains '
                'why the figure matters.',
                'The last paragraph names three cases where the car '
                'wins, then returns to the narrowed question.'],
         criterion=[('The question narrowed and answered', 'Task '
                     'Response'),
                    ('Two reasons with figures', 'Task Response'),
                    ('Cases for the other side named', 'Coherence and '
                     'Cohesion'),
                    ('Past continuous or past simple used correctly',
                     'Grammatical Range and Accuracy')])],
   gram=dict(
    point='Past continuous for interrupted journeys',
    explain='Use was or were plus -ing for what was in progress, and '
            'the past simple for what interrupted it.',
    examples=['We were waiting at the station when the announcement '
              'came.',
              'I was reading when the bus stopped.',
              'They were travelling to the coast when the road '
              'closed.',
              'What were you doing when it happened?'],
    items=[('We (wait) when the announcement came.',
            'We were waiting when the announcement came.'),
           ('I (read) when the bus stopped.',
            'I was reading when the bus stopped.'),
           ('They (travel) when the road closed.',
            'They were travelling when the road closed.'),
           ('(what / you / do) when it happened?',
            'What were you doing when it happened?'),
           ('She (stand) on the platform when it was cancelled.',
            'She was standing on the platform when it was '
            'cancelled.')],
    task='Write each sentence with the past continuous.'),
   vocab=[('residents', 'the people who live in a place'),
          ('level', 'height, or amount'),
          ('afford', 'to have enough money for'),
          ('coast', 'the land beside the sea'),
          ('treated', 'dealt with in a particular way'),
          ('fourth', 'number four in an order'),
          ('county', 'a large area of a country with its own council'),
          ('newspaper', 'printed sheets with the news'),
          ('chain', 'a set of shops owned by one company'),
          ('abandoned', 'left and not used again'),
          ('exercise', 'physical activity to stay healthy'),
          ('port', 'a town where ships load and unload')],
   expr=[('The service has been delayed.', 'an announcement opening'),
         ('Passengers for Marsden should not wait.',
          'telling one group what to do'),
         ('We are sorry for the delay.', 'the closing of an '
          'announcement'),
         ('You may travel on any service today.', 'offering an '
          'alternative')],
   trans=['first', 'next', 'then', 'finally']),

  dict(
   sub='How cities move people',
   step=2,
   read=[
    dict(heading='Four ways a city moves people',
         kind='Short factual article',
         task='Matching information and short answer',
         band='acad', qtype='Questions 31-36',
         paras=[
          'Every city solves the same problem with some mixture of '
          'four answers: buses, trams or trains, bicycles, and cars. '
          'What differs is the proportion, and the proportion is '
          'decided less by what people want than by what the streets '
          'will hold. A city built before cars has narrow streets, and '
          'the arithmetic there is brutal. A car carrying one person '
          'needs roughly ten times the road space per passenger of a '
          'bus carrying forty.',
          'Buses are cheap to start and easy to change, which is their '
          'strength and their weakness. A route can be moved in a week, '
          'so nobody builds a shop or a house because of one. A tram '
          'line cannot be moved at all, and that is why property near a '
          'planned tram line rises in value before a single rail is '
          'laid. The permanence is the product.',
          'Bicycles are the cheapest answer per passenger and the '
          'hardest politically, because the space has to be taken from '
          'something that already exists. Cities that have succeeded '
          'did not persuade drivers to cycle. They built a path that '
          'was safe enough for a twelve-year-old, and the numbers '
          'followed within three years. Where a scheme fails, the '
          'reason is almost always that the path stops at the '
          'difficult junction, which is the junction that decided '
          'whether anybody would use it.'],
         items=[
          ('How many kinds of answer does the writer give?', None,
           'four', 'Paragraph 1: buses, trams, bicycles and cars.'),
          ('A car carrying one person needs about ____________ times '
           'the road space per passenger of a bus.', None, 'ten',
           'Paragraph 1, in a city with narrow streets.'),
          (
           'Which paragraph explains why property near a tram line '
           'rises in value?',
           ['Paragraph 2', 'Paragraph 1', 'Paragraph 3'], 0,
           'Because a tram line cannot be moved at all.',
           {1: 'Paragraph 1 is about the bus, which can be rerouted.', 2: 'Paragraph 3 is about walking and cycling.'}),
          ('A bus route can be moved in a ____________.', None, 'week',
           'Paragraph 2, which is why nobody builds because of one.'),
          ('Successful cycle schemes built a path safe enough for a '
           '____________.', None, 'twelve-year-old',
           'Paragraph 3, and the numbers followed.'),
          ('Where a cycle scheme fails, the path usually stops at the '
           'difficult ____________.', None, 'junction',
           'Paragraph 3, which is what decided its use.')])],
   listen=[
    dict(heading='A talk about the new tram', part='Part 4',
         task='A short lecture at a public meeting', band='l4',
         qtype='Questions 37-41',
         script=[
          ('Speaker', 'Three questions come up every time a tram is '
           'proposed, and I will answer all three tonight: why not more '
           'buses, what it costs, and who pays.'),
          ('Speaker', 'Why not buses. Buses are cheaper to start and '
           'can be changed in a week. That flexibility is exactly the '
           'problem. Nobody opens a shop because of a bus route, '
           'because it may not be there next year. A tram line is fixed '
           'for forty years, and that is what makes people build beside '
           'it.'),
          ('Speaker', 'What it costs. Sixteen kilometres, two hundred '
           'and ten million pounds, which is a great deal of money and '
           'is about what the city spends on roads in four years.'),
          ('Speaker', 'Who pays. A third from the national government, '
           'a third from the county, and a third borrowed against the '
           'fares. The fares have to be sustained at current passenger '
           'numbers plus about fifteen per cent, and that is the real '
           'risk in the scheme. If the passengers do not come, the '
           'borrowing still has to be repaid.'),
          ('Speaker', 'I will admit the obvious. Every city that has '
           'built one has gone over its first estimate. We have built '
           'that into our figures.')],
         items=[
          ('How many questions does the speaker answer?', None,
           'three', 'Why not buses, what it costs, and who pays.'),
          ('A tram line is fixed for ____________ years.', None,
           'forty', 'Which is why people build beside it.'),
          ('The scheme is ____________ kilometres long.', None,
           'sixteen', 'At a cost of two hundred and ten million '
           'pounds.'),
          ('Fares must be sustained at current numbers plus about '
           '____________ per cent.', None, 'fifteen',
           'Which the speaker calls the real risk.'),
          ('Every city that has built one has gone over its first '
           '____________.', None, 'estimate',
           'Which this estimate already allows for.')])],
   speak=dict(
    part='Part 3', focus='Public transport in your town',
    intro='Give an opinion and a reason, then one example. Keep it to '
          'four sentences.',
    qs=['Is public transport good in your town?',
        'Should it be free?',
        'What stops people using buses?'],
    shape=[('answer', 'It is reasonable but it stops too early in the '
            'evening.'),
           ('support', 'The last bus is at half past ten, which is no '
            'use to anybody working a late shift.'),
           ('support', 'That pushes exactly the people who can least '
            'afford a car into buying one.'),
           ('follow-up', 'I would extend the hours before I made the '
            'fares cheaper.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='How many people use four kinds of transport',
         figure=_USE,
         prompt='The chart shows how many journeys a day are made by '
                'four kinds of transport in one city. Describe the '
                'chart and make one comparison.',
         instruct='  Write at least 90 words in about 20 minutes.',
         lines=11,
         model=[
          'The chart shows the number of journeys made each day by four '
          'kinds of transport in one city.',
          'The car is used most, with a hundred and sixty-four thousand '
          'journeys a day. The bus is second with a hundred and twelve '
          'thousand, so cars carry about half as many journeys again as '
          'buses.',
          'The tram and the bicycle are much smaller, at forty-six '
          'thousand and thirty-eight thousand.',
          'Taken together, the three kinds of public and active '
          'transport account for a hundred and ninety-six thousand '
          'journeys, which is more than the car on its own.'],
         notes=['Largest and second come first, with a comparison '
                'between them.',
                'The last sentence adds three categories together, '
                'which is the kind of reorganisation that separates a '
                'good answer from a list.',
                'No reason is offered for the pattern, because the '
                'chart gives none.'],
         criterion=[('All four categories with numbers', 'Task '
                     'Achievement'),
                    ('A comparison between the two largest', 'Task '
                     'Response'),
                    ('One grouping or total', 'Task Response'),
                    ('Large numbers written correctly', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Present simple passive: is used, are carried',
    explain='Use is or are with the past participle when the doer does '
            'not matter.',
    examples=['The car is used most.',
              'Forty people are carried on one bus.',
              'The tram is paid for by three different bodies.',
              'Tickets are checked on the platform.'],
    items=[('People use the car most.', 'The car is used most.'),
           ('One bus carries forty people.',
            'Forty people are carried on one bus.'),
           ('Three bodies pay for the tram.',
            'The tram is paid for by three bodies.'),
           ('Somebody checks tickets on the platform.',
            'Tickets are checked on the platform.'),
           ('They build the path first.', 'The path is built first.')],
    task='Write each sentence in the passive.'),
   vocab=[('respond', 'to answer or react'),
          ('passengers', 'people travelling in a vehicle'),
          ('luggage', 'the bags you travel with'),
          ('income', 'money received regularly'),
          ('sustained', 'kept up over time'),
          ('sixteen', 'the number 16'),
          ('cancellation', 'the stopping of something planned'),
          ('coastal', 'beside the sea'),
          ('fifty-two', 'the number 52'),
          ('final', 'last'),
          ('admit', 'to agree that something is true'),
          ('breakfast', 'the first meal of the day')],
   expr=[('What differs is the proportion.', 'locating a difference'),
         ('The permanence is the product.', 'naming what is really '
          'sold'),
         ('I will admit the obvious.', 'conceding before being '
          'challenged'),
         ('If the passengers do not come...', 'naming a risk')],
   trans=['after that', 'before', 'then', 'finally']),

  dict(
   sub='Travelling for pleasure',
   step=3,
   read=[
    dict(heading='What visitors do to a small town',
         kind='Short factual article',
         task='Matching information and short answer',
         band='acad', qtype='Questions 42-47',
         paras=[
          'A coastal town of four thousand people receives two hundred '
          'thousand visitors a year, and almost all of them come in '
          'eleven weeks. That is the whole subject in one sentence. The '
          'money is real: tourism earns the town more than the port and '
          'the factory together, and the jobs it provides are jobs that '
          'exist nowhere else nearby. Every objection that follows has '
          'to be weighed against that, because a town with no industry '
          'does not stay a town.',
          'The costs are also real, and they fall on a different group '
          'of people from the gains. A shop that sells to visitors '
          'cannot sell to residents in February, so the chain that '
          'survives is the one selling ice cream rather than shoes. '
          'Houses bought to let for six weeks a year are empty for '
          'forty-six. That raises the price of every other house and '
          'pushes young residents out of the town they grew up in. '
          'Those residents are also the staff the hotels need in July.',
          'Towns that have handled this well did something unusual: '
          'they stopped trying to attract more visitors and started '
          'trying to attract them at a different time. A town that '
          'spreads two hundred thousand visitors across twenty weeks '
          'instead of eleven needs fewer beds, fewer car parks and '
          'fewer staff on short contracts. It also keeps a shop '
          'selling shoes. The policy is harder to explain than a '
          'bigger car '
          'park, which is why it is rarely the one chosen.'],
         items=[
          ('The town has ____________ residents.', None,
           'four thousand',
           'Paragraph 1, against two hundred thousand visitors.'),
          ('Almost all the visitors come within ____________ weeks.',
           None, 'eleven',
           'Paragraph 1, which the writer calls the whole subject.'),
          (
           'Which paragraph says the gains and the costs fall on '
           'different people?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'], 1,
           'A shop cannot sell to residents in February.',
           {0: 'Paragraph 1 counts the money visitors bring.', 2: 'Paragraph 3 is about what a town can do in response.'}),
          ('A house let for six weeks is empty for ____________.',
           None, 'forty-six', 'Paragraph 2, which raises prices.'),
          ('Successful towns tried to attract visitors at a different '
           '____________.', None, 'time',
           'Paragraph 3, rather than more of them.'),
          ('Spreading visitors across twenty weeks means the town '
           'needs fewer ____________.',
           ['visitors', 'shops', 'beds', 'residents'], 2,
           'Paragraph 3: fewer beds, car parks and short contracts.')])],
   listen=[
    dict(heading='Planning a weekend away', part='Part 3',
         task='A discussion between two students', band='l3',
         qtype='Questions 48-52',
         script=[
          ('Tutor', 'You are planning the field weekend. Where have you '
           'got to?'),
          ('Jo', 'Two choices. The coastal town, or the city with the '
           'university museum.'),
          ('Tutor', 'And the cost?'),
          ('Sam', 'The coast is cheaper to reach and more expensive to '
           'stay in. The city is the other way round.'),
          ('Jo', 'The real difference is what the group would actually '
           'do. On the coast we would interview residents about '
           'tourism, which is our subject.'),
          ('Sam', 'In the city we would see a collection nobody in the '
           'group has seen, and it is free to enter.'),
          ('Tutor', 'How many students?'),
          ('Jo', 'Twenty-one, and four of them cannot afford more than '
           'thirty pounds in total.'),
          ('Sam', 'That decides it for me. The coast, with the hostel, '
           'comes to twenty-eight pounds each including the train.'),
          ('Jo', 'If we go in May rather than July the hostel is half '
           'price, because it is outside the season.'),
          ('Tutor', 'Then May. Book it before the end of this week, '
           'because the cancellation terms get worse after that.'),
          ('Sam', 'I will send the form round tomorrow.')],
         items=[
          ('There are ____________ students in the group.', None,
           'twenty-one', 'Four of them have a strict budget.'),
          ('Four students cannot afford more than ____________ pounds.',
           None, 'thirty', 'Which decides the choice for Sam.'),
          ('The coast with the hostel costs ____________ pounds each.',
           None, 'twenty-eight', 'Including the train, Sam says.'),
          ('In ____________ the hostel is half price.', None, 'May',
           'Because it is outside the season.'),
          ('They must book before the end of the week because of the '
           '____________ terms.', None, 'cancellation',
           'They get worse after that, the tutor says.')])],
   speak=dict(
    part='Part 3', focus='Why people travel',
    intro='Give the reason, then say what it costs. A Part 3 answer '
          'that only lists reasons is incomplete.',
    qs=['Why do people travel to other countries?',
        'Is tourism good for small towns?',
        'Should there be limits on visitor numbers?'],
    shape=[('answer', 'Most people travel to see something they cannot '
            'see at home, and to stop working.'),
           ('support', 'For small towns the money is real: it can be '
            'more than any local industry.'),
           ('support', 'But the costs fall on residents, especially on '
            'house prices.'),
           ('follow-up', 'So I would spread visitors across the year '
            'rather than limit their number.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Inviting a friend to visit your city',
         prompt='A friend has said they would like to visit your city. '
                'Write a letter. In your letter: invite them; say what '
                'you could do together; say when would be best to come.',
         instruct='  Write at least 80 words in about 15 minutes.',
         lines=10,
         model=[
          'Dear Mira,',
          'You said you would like to see this city, so come. You are '
          'welcome to stay here for as long as you want, and the sofa '
          'is better than it looks.',
          'There is more to do than you would expect. The museum is '
          'free, the market on Saturday is worth an hour, and the new '
          'cycle path runs all the way to the coast, which is twelve '
          'kilometres and almost flat.',
          'May or early June would be best. July is the season here and '
          'everything is full, more expensive and slower.',
          'Tell me which week suits you,',
          'Ana'],
         notes=['The invitation is unconditional in the first '
                'sentence, which is what makes it an invitation.',
                'Three specific things are offered, each with a '
                'detail, rather than "we could do lots of things".',
                'The timing has a reason, which also answers the '
                'question the friend would ask next.'],
         criterion=[('A clear invitation first', 'Task Achievement'),
                    ('Specific things to do', 'Task Achievement'),
                    ('A time with a reason', 'Task Response'),
                    ('A warm, informal register', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='going to and will for plans',
    explain='Use going to for a plan already made, and will for a '
            'decision made as you speak.',
    examples=['We are going to visit the museum on Saturday.',
              'I will send the form round tomorrow.',
              'They are going to book the hostel in May.',
              'I will take a taxi if you cannot meet me.'],
    items=[('We (visit) the museum on Saturday. (planned)',
            'We are going to visit the museum on Saturday.'),
           ('I (send) the form tomorrow. (decided now)',
            'I will send the form tomorrow.'),
           ('They (book) the hostel in May. (planned)',
            'They are going to book the hostel in May.'),
           ('I (take) a taxi if you cannot come. (decided now)',
            'I will take a taxi if you cannot come.'),
           ('She (travel) in June. (planned)',
            'She is going to travel in June.')],
    task='Write each sentence with going to or will.'),
   vocab=[('empty', 'with nothing or nobody in it'),
          ('suggest', 'to put forward an idea'),
          ('grew', 'past of grow'),
          ('university', 'a place to study after school'),
          ('factory', 'a building where goods are made'),
          ('unusual', 'not common'),
          ('defend', 'to protect, or to argue for'),
          ('connected', 'joined to something else'),
          ('customers', 'people who buy from a shop'),
          ('provide', 'to give or supply'),
          ('ignore', 'to take no notice of'),
          ('heavily', 'in a large amount or with much force')],
   expr=[('That is the whole subject in one sentence.',
          'summing up sharply'),
         ('The costs fall on a different group.',
          'separating who gains from who pays'),
         ('You are welcome to stay as long as you want.',
          'an open invitation'),
         ('Tell me which week suits you.', 'leaving the choice to '
          'them')],
   trans=['because', 'so', 'however', 'for example'])],

 technique=dict(
  title='The two routes, timed: skim-and-scan against the loop',
  body='There are two ways to answer a reading passage, and most '
       'candidates use the wrong one because nobody has ever made them '
       'time both. Route one is skim-and-scan: read the passage '
       'quickly, then go hunting for each answer. Route two is the '
       'loop: read the questions first, then read the passage one '
       'paragraph at a time, answering what you can as you go. This '
       'page asks you to do both, with a clock, on the two passages in '
       'this unit. Do cycle 4 by skim-and-scan. Write down the time it '
       'took and your score. Do cycle 5 by the loop: read the six '
       'questions, then read paragraph one and answer what it answers, '
       'then paragraph two, and so on. Write down the time and the '
       'score. Almost everybody finds the same thing: the loop is a '
       'little slower on the clock and several marks better, and the '
       'gap grows as the passages get longer. The reason is simple. '
       'Scanning finds the words of the question; the loop finds the '
       'meaning of the paragraph, and in this test the answer is almost '
       'never where the matching words are. From here to the end of the '
       'course you will use the loop. This is the page that proves to '
       'you why, and it only works if you actually time it.',
  panel=[('Route one: skim and scan',
          'Read fast, then hunt for each answer.'),
         ('Route two: the loop',
          'Questions first, then one paragraph at a time.'),
         ('Time both, on this unit',
          'Cycle 4 one way, cycle 5 the other.'),
         ('Compare marks, not feelings',
          'The loop usually wins by several marks.')],
  qs=['How long did each route take you?',
      'How many marks did each route score?',
      'Which route made you re-read most?',
      'Where were the answers you got wrong?',
      'Which route will you use from now on?'],
  task='Time yourself on both passages in this unit, one route each. '
       'Write the two times and the two scores in your book, and keep '
       'the page: you will compare it with unit 9.'),

 outlining=dict(
  title='Essay to outline: pull the plan out of a model',
  body='So far you have written plans and then written from them. This '
       'page runs the machine backwards, which is the fastest way to '
       'see what a good plan looks like. Take the model answer in cycle '
       '3 of this unit, about cars and buses. Do not read it as an '
       'essay. Read it as a plan that somebody has filled in, and write '
       'the plan out: what is the position, what are the two ideas, and '
       'what supports each one? You will find the position in the first '
       'paragraph, one idea in each body paragraph, and under each idea '
       'exactly the pattern you were taught in unit 4: a support and a '
       'consequence. You will also notice two things that are not in '
       'your own plans yet. First, the writer narrowed the question in '
       'the first paragraph, from all travel to daily journeys in a '
       'town, which is what made it answerable in 150 words. Second, '
       'the last paragraph names the cases where the other side is '
       'right before returning to the position. Do this with three '
       'model answers from different units and you will stop needing to '
       'be told what a plan looks like, because you will have seen '
       'three.',
  frame=('Public transport is better for daily journeys in a town',
         [('It costs much less for one person',
           ['a bus fare is two pounds; a car costs forty pence a '
            'kilometre',
            'and the car costs money in the weeks it is not used']),
          ('It uses far less space',
           ['a bus with forty people takes the room of three cars',
            'every car park in a city centre is a building that was '
            'not built'])]),
  qs=['What is the position, in one sentence?',
      'What are the two ideas?',
      'What supports each, and what follows from it?',
      'Where did the writer narrow the question?',
      'What does the last paragraph concede?'],
  task='Write out the plan behind the cycle 3 model, then do the same '
       'for the model in unit 4 cycle 3. Compare the two plans: they '
       'have the same shape.',
  answers=['the position is always in the first paragraph',
           'one idea a body paragraph, never two',
           'support and consequence under each idea',
           'narrowing the question is what makes 150 words enough',
           'the concession comes before the return to the position']),

 candos=['I can read a station board across the right line',
         'I can follow and give directions in a town',
         'I can describe two plans of the same place',
         'I can compare two routes through a passage with a clock',
         'I can pull the plan out of a model answer'],

 tip=('The loop beats skim-and-scan by several marks and loses by a '
      'few seconds. Time both once, on this unit, and you will never '
      'wonder again.'))
