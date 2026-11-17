# -*- coding: utf-8 -*-
"""Foundation 2, Unit 10 - Transport and Journeys.

The last unit of the Foundation books. A railway station, a journey to
work measured over a year, how a bicycle hire scheme was run, how a
lock on a canal works, and what happened when one city made its buses
free. The technique page puts everything from both Foundation books
together under the clock, and the outlining page closes the loop
between reading and writing.
"""

_COMMUTE = dict(kind='line',
                title='One journey to work, measured for a year',
                sub='minutes door to door, monthly mean',
                x=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                   'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                series=[('By bus', [48.0, 47.0, 44.0, 41.0, 39.0,
                                    38.0, 35.0, 34.0, 43.0, 46.0,
                                    49.0, 50.0]),
                        ('By bicycle', [31.0, 30.0, 28.0, 26.0, 25.0,
                                        24.0, 24.0, 24.0, 26.0, 28.0,
                                        31.0, 33.0])],
                ylab='minutes')

_LOCK = dict(kind='process',
             title='How a boat goes up through a lock',
             sub='five stages, about twelve minutes',
             stages=[('Approach', 'the boat waits while the upper '
                      'gates are closed'),
                     ('Empty', 'the lower paddles are opened so the '
                      'lock falls to the lower level'),
                     ('Enter', 'the lower gates open and the boat goes '
                      'in'),
                     ('Fill', 'the lower gates are shut and the upper '
                      'paddles are opened'),
                     ('Leave', 'the upper gates open and the boat goes '
                      'out at the higher level')])

UNIT = dict(
 n=10, vol=8, level='A2-B1', band='4.0-4.5',
 theme='Transport and Journeys',
 opener=(
   'This is the last unit of the two Foundation books, and it is '
   'about getting from one place to another. You will ask about a '
   'train, read a year of measurements of one journey to work, follow '
   'how a bicycle hire scheme was run, see how a boat is lifted '
   'through a lock, and read about a city that made its buses free '
   'and measured what happened. The technique page puts everything '
   'from both books together under the clock, and the outlining page '
   'joins reading and writing into one skill, which is where Volume 1 '
   'begins.'),

 cycles=[
  dict(
   sub='At the station',
   step=1,
   read=[
    dict(heading='Northgate Station: travel information',
         kind='Information page', task='Short answer',
         band='gt_short', qtype='Questions 1-5',
         skill=('A travel page is read for the thing that changes',
                ['Look for what is different on Sundays or in the '
                 'evening.',
                 'Any rule about children or luggage is likely to be '
                 'asked about.']),
         paras=[
          'Trains to the city leave every twenty minutes between six in '
          'the morning and eight at night, and every hour after that. '
          'On Sundays the first train is at eight, which catches people '
          'out about once a month, so the first Sunday train is listed '
          'again on the gate.',
          'Tickets bought on the train cost more than tickets bought '
          'before boarding. The machine on platform one takes cards '
          'only; the office takes cash but closes at half past six. '
          'Children under five travel free and are not given a ticket.',
          'Bicycles are carried free except on trains arriving in the '
          'city between seven and nine in the morning. Two spaces are '
          'kept on each train and cannot be reserved.',
          'The lift to platform two has been out of use since August '
          'and should work again in March.'],
         items=[
          ('Trains leave every ____________ minutes until eight at '
           'night.', None, 'twenty',
           'And then once an hour after that.'),
          ('On Sundays the first train is at ____________.', None,
           'eight', 'Which the page says catches people out.'),
          ('The machine on platform one takes ____________ only.',
           None, 'cards', 'While the office takes cash until half '
           'past six.'),
          ('How many bicycle spaces are kept on each train?', None,
           'two', 'And they cannot be reserved in advance.'),
          ('The lift to platform two should work again in '
           '____________.', None, 'March',
           'It has been out of use since August.')])],
   listen=[
    dict(heading='Buying a ticket', part='Part 1',
         task='A conversation at a ticket office', band='l1',
         qtype='Questions 6-11',
         script=[
          ('Clerk', 'Where are you travelling to?'),
          ('Traveller', 'The city, today, coming back tomorrow '
           'evening.'),
          ('Clerk', 'Then not a return. A return has to be used the '
           'same day. You want two singles, which is one pound forty '
           'more but valid.'),
          ('Traveller', 'Two singles, then. And a bicycle.'),
          ('Clerk', 'Free, but not on a train arriving in the city '
           'between seven and nine. The eight-fifteen is the one people '
           'try and it is the one that will turn you away.'),
          ('Traveller', 'So the nine-twenty.'),
          ('Clerk', 'Nine-twenty arrives at ten past ten. Two spaces, '
           'not reservable, so be on the platform early rather than '
           'exactly on time.'),
          ('Traveller', 'Is there a lift?'),
          ('Clerk', 'Not to platform two since August, and your return '
           'comes in at platform two. Ask any member of staff and they '
           'will carry the bags.'),
          ('Traveller', 'And can I store a case here for the day?'),
          ('Clerk', 'Not here. There are lockers at the city end, two '
           'pounds, and they take coins only, which nobody carries any '
           'more.'),
          ('Traveller', 'Then I will take it with me.')],
         items=[
          ('The traveller needs two ____________ rather than a '
           'return.', None, 'singles',
           'Because a return must be used the same day.'),
          ('Bicycles cannot travel on trains arriving between seven '
           'and ____________.', None, 'nine',
           'In the morning, into the city.'),
          ('The nine-twenty arrives at ____________ past ten.', None,
           'ten', 'With two spaces that cannot be reserved.'),
          ('There has been no lift to platform ____________ since '
           'August.', None, 'two',
           'Which is where the return train arrives.'),
          ('Lockers at the city end cost ____________ pounds.', None,
           'two', 'And they take coins only, the clerk says.'),
          ('The clerk says nobody carries ____________ any more.',
           None, 'coins', 'Which makes the lockers hard to use.')])],
   speak=dict(
    part='Part 1', focus='Travel and journeys',
    intro='Describe what you actually do on a normal day.',
    qs=['How do you usually travel to work or school?',
        'Do you enjoy travelling by train?',
        'Is public transport good where you live?',
        'How long is your journey?'],
    shape=[('answer', 'By bicycle most days, and by bus when it '
            'rains.'),
           ('support', 'The bicycle takes about twenty-five minutes '
            'and the bus takes forty, so the choice is easy.'),
           ('follow-up', 'I would use the bus more if it came every '
            'ten minutes rather than every twenty.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking about a journey',
         prompt='You want to travel to another city with a bicycle. '
                'Write to the railway company. In your letter: say '
                'when you want to travel; explain about the bicycle; '
                'ask two questions.',
         instruct='  Write at least 110 words in about 20 minutes.',
         lines=13,
         model=[
          'Dear Sir or Madam,',
          'I would like to travel from Northgate to the city on '
          'Saturday 7 March, returning on the Sunday evening, and I '
          'should like to take a bicycle with me.',
          'I understand that bicycles are carried free but cannot be '
          'taken on trains arriving in the city between seven and nine '
          'in the morning. I therefore plan to take the nine-twenty.',
          'Could you tell me whether the two bicycle spaces on that '
          'train can be reserved after all, or whether it is first '
          'come, first served? I would also like to know whether the '
          'same restriction applies on the Sunday return, since the '
          'timetable is different on Sundays.',
          'Thank you for your help.',
          'Yours faithfully,',
          'R. Dauda'],
         notes=['The dates and both directions are given in the first '
                'sentence.',
                'Showing what the writer already knows stops the '
                'reply repeating the rules.',
                'Both questions are specific, and the second gives '
                'its reason.'],
         criterion=[('Dates and direction stated', 'Task '
                     'Achievement'),
                    ('Existing knowledge shown', 'Task Response'),
                    ('Two specific questions', 'Task Achievement'),
                    ('Formal register', 'Coherence and Cohesion')])],
   gram=dict(
    point='Prepositions of time: by, until, between, since',
    explain='By means not later than; until means up to that point; '
            'between gives two limits; since gives a starting point.',
    examples=['The office is open until half past six.',
              'Bicycles are not carried between seven and nine.',
              'The lift has been out of use since August.',
              'Buy your ticket by the time the train leaves.'],
    items=[('The office is open (until) half past six.',
            'The office is open until half past six.'),
           ('Bicycles are not carried (between) seven and nine.',
            'Bicycles are not carried between seven and nine.'),
           ('The lift has been out of use (since) August.',
            'The lift has been out of use since August.'),
           ('Buy your ticket (by) nine o’clock.',
            'Buy your ticket by nine o’clock.'),
           ('Trains run every hour (until) midnight.',
            'Trains run every hour until midnight.')],
    task='Complete each sentence with the preposition given.'),
   vocab=[('gradually', 'slowly, over time'),
          ('temporarily', 'for a limited time'),
          ('regime', 'a system of running something'),
          ('recruit', 'to take on new people'),
          ('stored', 'kept for later use'),
          ('concludes', 'ends; or decides after thinking'),
          ('counter-intuitive', 'surprising, against what one would '
           'expect'),
          ('discovers', 'finds out'),
          ('establishes', 'sets up; or shows to be true')],
   expr=[('A return has to be used the same day.',
          'stating a ticket rule'),
         ('First come, first served.', 'describing an unreservable '
          'space'),
         ('Be on the platform early rather than exactly on time.',
          'practical advice with a reason'),
         ('Nobody carries coins any more.', 'noting what has '
          'changed')],
   trans=['and', 'then', 'but', 'so']),

  dict(
   sub='A journey measured for a year',
   step=2,
   read=[
    dict(heading='Twelve months of one journey',
         kind='Short article', task='Matching information',
         band='gt_work', qtype='Questions 12-17',
         paras=[
          'A teacher timed her journey to work every day for a year, '
          'door to door, by bus and by bicycle. It is one person and '
          'one route, which is the limit of what it can prove, but it '
          'is measurement rather than estimate, and estimates of '
          'journey times are reliably wrong.',
          'The bicycle was faster in every month. Its best month was '
          'July at twenty-four minutes and its worst December at '
          'thirty-three. The bus ranged from thirty-four minutes in '
          'August to fifty in December, so the gap was widest in '
          'winter, the opposite of what she had expected.',
          'The bus figures have a step in September that the bicycle '
          'figures do not: thirty-four minutes in August and '
          'forty-three in September, caused by the school term rather '
          'than the weather. The bicycle rose by two minutes, because '
          'it is slowed by rain and not by traffic.',
          'She kept one number she had not planned to keep. She was '
          'late for work four times in the year, and all four were bus '
          'days, on about a third of the days. That, she says, is the '
          'number that changed her behaviour.'],
         items=[
          ('How long did she measure the journey for?',
           ['a month', 'three months', 'six months', 'a year'], 3,
           'Every day, door to door, by both means.'),
          ('The bicycle’s best month was ____________ at '
           'twenty-four minutes.', None, 'July',
           'And its worst was December at thirty-three.'),
          ('The bus took ____________ minutes in December.', None,
           'fifty', 'Its worst month of the twelve.'),
          ('The gap between the two was widest in '
           '____________.', None, 'winter',
           'The opposite of what she had expected.'),
          ('The step in the bus figures in September was caused by '
           'the school ____________.', None, 'term',
           'Rather than by the weather, the writer says.'),
          ('She was late for work ____________ times in the year.',
           None, 'four',
           'All of them on days she took the bus.')])],
   listen=[
    dict(heading='Two students on measuring a journey',
         part='Part 3',
         task='A discussion between two students', band='l3',
         qtype='Questions 18-23',
         script=[
          ('Tutor', 'You are both using the teacher’s data. What '
           'is the disagreement?'),
          ('Ravi', 'Whether one person for one year is worth '
           'anything.'),
          ('Elin', 'And I say it is worth more than a survey of a '
           'thousand people guessing.'),
          ('Ravi', 'That is a low bar.'),
          ('Elin', 'It is the bar the alternative sets. Everybody '
           'estimates their journey and everybody is wrong, usually in '
           'the direction that flatters the choice they already '
           'made.'),
          ('Ravi', 'Fair. My worry is generalising. One route, one '
           'city, one bicycle, one level of fitness.'),
          ('Elin', 'Then do not generalise the numbers. Generalise the '
           'method. Anybody can time their own journey for a month, and '
           'the answer they get is about their route, which is the only '
           'route they travel.'),
          ('Ravi', 'That is a better use of it than I was making.'),
          ('Elin', 'And the lateness figure is the one I would put '
           'first. Four times late in a year, all four on bus days, on '
           'a third of the days.'),
          ('Ravi', 'Which is a measurable thing and not a feeling.'),
          ('Tutor', 'Then say that, and put the lateness figure before '
           'the minutes, because it is the number that changed what she '
           'did.'),
          ('Ravi', 'Should we ask her for the raw numbers rather than '
           'the monthly means?'),
          ('Tutor', 'Ask, and expect a spreadsheet nobody has tidied. '
           'That is normal and it is better than a tidy summary.')],
         items=[
          ('Ravi questions whether one person for one '
           '____________ is worth anything.', None, 'year',
           'Which is the disagreement the tutor asks about.'),
          ('Elin says people estimate in the direction that '
           '____________ the choice they made.', None, 'flatters',
           'Which is why estimates are unreliable.'),
          ('Ravi worries about ____________ from one route.', None,
           'generalising', 'One city, one bicycle, one fitness '
           'level.'),
          ('Elin says to generalise the ____________ rather than the '
           'numbers.', None, 'method',
           'Because anybody can time their own journey.'),
          ('All four late arrivals were on ____________ days.', None,
           'bus', 'Which were about a third of the days.'),
          ('The tutor says to put the ____________ figure before the '
           'minutes.', None, 'lateness',
           'Because it is the number that changed her behaviour.')])],
   speak=dict(
    part='Part 2', focus='A journey you make often',
    longturn=[('I am going to talk about a journey I make often. I travel '
               'across the city to the hospital where my mother has treatment.'),
              ('The hospital is about twelve kilometres from her flat, and I '
               'take her, so we go by car. There is a tram that goes most of '
               'the way, but she cannot stand for long, and the stop is six '
               'minutes from the entrance.'),
              ('The journey takes between twenty-five minutes and an hour, '
               'depending entirely on the time of day. Her appointments are '
               'usually at half past nine, which is the worst possible time, '
               'so we leave at half past eight. We have been doing this about '
               'every three weeks for two years.'),
              ('What I like about it is the thing I did not expect. We talk in '
               'the car. We have never talked easily at home, and in a '
               'car you sit side by side and nobody has to look at '
               'anybody, and in two years I have learned more about '
               'her life than in the thirty before. What I dislike is '
               'the car park: ninety spaces for a building with two '
               'thousand people in it, charging by the hour for a wait '
               'nobody can predict.')],
    intro='One minute, four lines. Give at least one real number.',
    qs=['Describe a journey you make often.',
        'Say where you go and how.',
        'Say how long it takes.',
        'Say what you like or dislike about it.'],
    shape=[('answer', 'My journey to work, about four kilometres, '
            'five days a week.'),
           ('support', 'I go by bicycle, which takes twenty-five '
            'minutes, or by bus, which takes forty.'),
           ('support', 'The bus is slower in term time because of the '
            'traffic around the schools.'),
           ('follow-up', 'What I dislike is not the length but that I '
            'cannot predict the bus, and being late matters more to '
            'me than being slow.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='One journey to work, measured for a year',
         figure=_COMMUTE,
         prompt='The graph shows the time taken on one journey to work '
                'by two means over a year. Describe the graph and '
                'compare the two.',
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=17,
         model=[
          'The graph shows the mean monthly time taken on a single '
          'journey to work by bus and by bicycle over one year.',
          'The bicycle was faster in every month. It took longest in '
          'December, at thirty-three minutes, and least in the three '
          'summer months, when it stayed at twenty-four. The bus '
          'followed the same shape but with much larger movements, from '
          'thirty-four minutes in August to fifty in December.',
          'The gap between the two was therefore widest in winter, at '
          'about seventeen minutes, and narrowest in the summer, at '
          'about ten.',
          'One feature appears in the bus line only. Between August and '
          'September the bus rose by nine minutes, while the bicycle '
          'rose by two, and that step is the largest single change in '
          'the graph.'],
         notes=['The overall relationship is stated before any '
                'figures.',
                'The gap is given as a range rather than month by '
                'month.',
                'The step between August and September is singled out '
                'because it belongs to one line only.'],
         criterion=[('Both lines described', 'Task Achievement'),
                    ('The gap quantified', 'Task Response'),
                    ('The step identified', 'Coherence and '
                     'Cohesion'),
                    ('Figures and tenses accurate', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Describing a gap: by, from, to, about',
    explain='Use rose by for the size of a change, from and to for '
            'start and end, and about before an approximate figure.',
    examples=['The bus rose by nine minutes.',
              'It went from thirty-four to forty-three.',
              'The gap was about seventeen minutes.',
              'The bicycle rose by only two minutes.'],
    items=[('The bus rose (by) nine minutes.',
            'The bus rose by nine minutes.'),
           ('It went (from) thirty-four (to) forty-three.',
            'It went from thirty-four to forty-three.'),
           ('The gap was (about) seventeen minutes.',
            'The gap was about seventeen minutes.'),
           ('The bicycle rose (by) only two minutes.',
            'The bicycle rose by only two minutes.'),
           ('The bus fell (from) fifty (to) thirty-four.',
            'The bus fell from fifty to thirty-four.')],
    task='Complete each sentence with the words given.'),
   vocab=[('fitness', 'the state of being physically healthy'),
          ('fitter', 'more physically healthy'),
          ('governs', 'controls or decides'),
          ('historically', 'in the past; over history'),
          ('hooks', 'curved pieces for hanging things'),
          ('measurable', 'able to be measured'),
          ('outdoor', 'in the open air'),
          ('participants', 'people taking part'),
          ('reasonably', 'fairly; in a sensible way')],
   expr=[('That is the limit of what it can prove.',
          'stating the reach of evidence'),
         ('Estimates of journey times are reliably wrong.',
          'a dry generalisation'),
         ('Generalise the method, not the numbers.',
          'rescuing a small study'),
         ('It is a measurable thing and not a feeling.',
          'preferring a number to an impression')],
   trans=['also', 'however', 'because', 'so']),

  dict(
   sub='A bicycle hire scheme',
   step=2,
   read=[
    dict(heading='Three years of a hire scheme',
         kind='Short article', task='Matching information',
         band='gt_work', qtype='Questions 24-29',
         skill=('A report of a scheme is read for what was changed',
                ['Find the decision and the result it produced.',
                 'A number that went up after a change is usually the '
                 'answer.']),
         paras=[
          'A city of three hundred thousand people put eight hundred '
          'bicycles on the street in its first year, at forty stands, '
          'and the scheme was judged a failure. Use was about a third '
          'of what had been planned for, and the commonest complaint '
          'was that stands were empty when people wanted a bicycle and '
          'full when they wanted to leave one.',
          'The second year changed one thing. A van moved bicycles '
          'between stands four times a day, working from the previous '
          'week’s use. Journeys doubled, and the city says this '
          'change did more than the two hundred extra bicycles added at '
          'the same time.',
          'The third year made journeys under twenty minutes free. '
          'Journeys doubled again, and the new ones were short, between '
          'the station and the centre, and many were made by people who '
          'had never hired a bicycle before.',
          'Cost per journey fell from four pounds twenty in the first '
          'year to thirty-five pence in the third, because the fixed '
          'cost of the stands was divided by far more journeys. The '
          'city now reports cost per journey rather than total cost.'],
         items=[
          ('How many bicycles were put out in the first year?',
           ['eight hundred', 'four hundred', 'one thousand',
            'two hundred'], 0,
           'At forty stands, in a city of three hundred thousand.'),
          ('The commonest complaint was that stands were '
           '____________ when people wanted a bicycle.', None,
           'empty', 'And full when they wanted to leave one.'),
          ('In the second year a van moved bicycles ____________ '
           'times a day.', None, 'four',
           'Following a list from the previous week.'),
          (
           'The third year made journeys under ____________ minutes '
           'free.', None, 'twenty',
           'Paragraph 3: free under twenty minutes, and journeys '
           'doubled.'),
          ('Most of the new journeys were between the station and the '
           '____________.', None, 'centre',
           'And many were by first-time users.'),
          ('Cost per journey fell to ____________ pence by the third '
           'year.', None, 'thirty-five',
           'Down from four pounds twenty in the first.')])],
   listen=[
    dict(heading='A transport officer on the hire scheme',
         part='Part 2',
         task='One speaker describing a scheme', band='l2',
         qtype='Questions 30-35',
         script=[
          ('Speaker', 'I ran this scheme for three years and I was '
           'wrong about almost everything at the start, so let me be '
           'useful rather than impressive.'),
          ('Speaker', 'Year one: eight hundred bicycles, forty stands, '
           'a third of the use we planned for. Everybody told me we '
           'needed more bicycles. We did not.'),
          ('Speaker', 'What we needed was a van. Four runs a day, '
           'moving bicycles from the stands that fill up to the stands '
           'that empty, working from last week’s numbers. '
           'Journeys doubled. We added two hundred bicycles in the same '
           'year and I am confident the van did more.'),
          ('Speaker', 'Year three we made short journeys free, under '
           'twenty minutes, and journeys doubled again. The new ones '
           'were station to centre, and most were people who had never '
           'hired a bicycle in their lives.'),
          ('Speaker', 'The figure I would ask any city to publish is '
           'cost per journey. Ours went from four pounds twenty to '
           'thirty-five pence, and it fell because the stands cost the '
           'same whether they are used or not.'),
          ('Speaker', 'And the counter-intuitive lesson: a scheme like '
           'this is not short of bicycles. It is short of bicycles in '
           'the right place, which is a different problem with a '
           'cheaper answer.')],
         items=[
          ('Year one had eight hundred bicycles and ____________ '
           'stands.', None, 'forty',
           'And a third of the use that was planned for.'),
          ('What the scheme needed was a ____________.', None,
           'van', 'Making four runs a day between stands.'),
          ('The van worked from last ____________ numbers.', None,
           'week’s', 'Moving bicycles from full stands to empty '
           'ones.'),
          (
           'In year three, journeys under twenty minutes became '
           '____________.', None, 'free',
           'The speaker gives year three as the year fares were '
           'dropped.'),
          ('The figure the speaker would publish is cost per '
           '____________.', None, 'journey',
           'Which fell from four pounds twenty to thirty-five '
           'pence.'),
          ('The scheme was short of bicycles in the right '
           '____________.', None, 'place',
           'Which the speaker calls a cheaper problem to solve.')])],
   speak=dict(
    part='Part 3', focus='Transport policy',
    intro='Give a reason, then name what you would measure.',
    qs=['Should cities encourage cycling?',
        'Is free public transport a good idea?',
        'What is the best way to reduce traffic?'],
    shape=[('answer', 'Yes, and the cheapest part of it is not the '
            'bicycles.'),
           ('support', 'One city doubled its journeys by running a '
            'van that moved bicycles to the stands that were '
            'empty.'),
           ('support', 'The problem was never the number of bicycles '
            'but where they were.'),
           ('follow-up', 'So I would measure cost per journey rather '
            'than total spending, because that is the figure that '
            'shows whether anything is being used.')]),
   write=[
    dict(task='Task 2',
         heading='Should cities spend public money on cycling?',
         prompt='Some people think cities should spend public money on '
                'cycling schemes. Others think the money is better '
                'spent on buses and trains. Discuss both views and '
                'give your own opinion.',
         instruct='  Write at least 200 words in about 35 minutes.',
         lines=22, wband='essay',
         plan=('Spend on cycling, and judge every scheme by cost per '
               'journey',
               [('The case for buses and trains',
                 ['they carry people who cannot cycle at all',
                  'and they work in weather and over distance']),
                ('The case for cycling',
                 ['the cost per journey is far lower',
                  'and short journeys are the ones cars are worst '
                  'at']),
                ('The test that settles it',
                 ['cost per journey, published every year',
                  'which a hire scheme passed only after a van was '
                  'added'])]),
         model=[
          'Cities with limited budgets have to choose between kinds of '
          'transport, and the argument is usually conducted without the '
          'one figure that would settle it.',
          'The case for buses and trains is strong and is often '
          'understated by people who cycle. They carry passengers who '
          'cannot cycle at all, including the old and the very young, '
          'and they work over distances and in weather where a bicycle '
          'does not. A city that spent only on cycling would be '
          'excluding a large share of its own population.',
          'The case for cycling rests on cost. In one city, a hire '
          'scheme brought its cost per journey down from four pounds '
          'twenty to thirty-five pence in three years, and short '
          'journeys of the kind it serves are exactly the ones that '
          'cars do worst and that clog a centre.',
          'My own view is that the choice is less important than the '
          'test applied to both. Every scheme, whether it runs on rails '
          'or on two wheels, should publish its cost per journey every '
          'year. That figure is what showed the hire scheme its real '
          'problem: in its first year it was judged short of bicycles, '
          'and what it was actually short of was bicycles in the right '
          'place, which a van solved for a fraction of the cost of more '
          'machines.',
          'A city that publishes that number will make better '
          'decisions than one that argues about which mode it '
          'prefers.'],
         notes=['The opposing case is given first and given its real '
                'strength.',
                'The argument then moves from preference to a test, '
                'which is more useful than either side.',
                'The van example shows what the test actually '
                'changes.'],
         criterion=[('Both views, the opposing one fairly',
                     'Task Response'),
                    ('A test rather than a preference', 'Task '
                     'Response'),
                    ('Evidence used concretely', 'Task '
                     'Achievement'),
                    ('Accurate and varied structures', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Result clauses: so, which meant, as a result',
    fix=dict(
     text=('The new tram line opened in 2018, so the number of car journeys '
           'fell by 12 per cent. As a result of, the city centre was quieter '
           'in the morning. Bus use fell as well, which it meant that the '
           'total number of public transport journeys rose by only 4 per cent. '
           'So that the scheme was judged a partial success.'),
     faults=[('As a result of, the city centre was quieter',
              'As a result, the city centre was quieter',
              ('As a result stands alone. As a result of needs a noun after '
               'it.')),
             ('which it meant that the total number',
              'which meant that the total number',
              ('Which is already the subject of meant, so it is not repeated '
               'as it.')),
             ('So that the scheme was judged a partial success',
              'So the scheme was judged a partial success',
              'So that introduces a purpose. For a result, so is enough.')]),
    explain='Use so and as a result for a consequence, and which '
            'meant to attach the consequence to the whole clause.',
    examples=['A van was added, so journeys doubled.',
              'Short journeys became free, which meant new users '
              'came.',
              'The stands cost the same, so cost per journey fell.',
              'As a result, the city changed what it published.'],
    items=[('A van was added. Journeys doubled. (so)',
            'A van was added, so journeys doubled.'),
           ('Short journeys became free. New users came. (which '
            'meant)',
            'Short journeys became free, which meant new users '
            'came.'),
           ('The stands cost the same. Cost per journey fell. (so)',
            'The stands cost the same, so cost per journey fell.'),
           ('Use was low. The scheme was judged a failure. (as a '
            'result)',
            'Use was low. As a result, the scheme was judged a '
            'failure.'),
           ('Journeys doubled again. The cost per journey fell. (so)',
            'Journeys doubled again, so the cost per journey fell.')],
    task='Join each pair with the words given.'),
   vocab=[('trivial', 'of very little importance'),
          ('unaccompanied', 'without anybody else'),
          ('defeat', 'to beat; or a loss'),
          ('thirty-five', 'the number 35'),
          ('widens', 'becomes wider'),
          ('water-holding', 'able to hold water'),
          ('walk-in', 'that can be entered without an appointment'),
          ('varieties', 'different kinds')],
   expr=[('Let me be useful rather than impressive.',
          'setting the tone of a talk'),
         ('Everybody told me we needed more. We did not.',
          'contradicting the obvious answer'),
         ('It is short of bicycles in the right place.',
          'restating a problem more precisely'),
         ('The stands cost the same whether they are used or not.',
          'explaining a fixed cost')],
   trans=['first', 'then', 'as a result', 'finally']),

  dict(
   sub='How a lock works',
   step=3,
   read=[
    dict(heading='Lifting a boat without a pump',
         kind='Short factual article',
         task='Flow-chart completion and short answer',
         band='acad', qtype='Questions 36-42',
         paras=[
          'A canal lock lifts a boat from one level to another using '
          'nothing but gravity and two pairs of gates, and the whole '
          'cycle takes about twelve minutes. The lock is a box of water '
          'with a gate at each end. Water is let in or out through '
          'small openings in the gates, called paddles, which are '
          'opened by hand with a crank.',
          'A boat going up arrives at the lower level and usually '
          'finds the lock full, because the last boat came down. The '
          'first stage is therefore to check that the upper gates are '
          'shut. The lower paddles are then opened, which lets the '
          'water out until the lock is level with the water the boat '
          'is sitting in. Only then will the lower gates open, because '
          'a gate cannot be pushed against even a small difference in '
          'level.',
          'The boat goes in and the lower gates are shut behind it. '
          'Opening the upper paddles then lets water in from the '
          'higher level, and the boat rises with it. This is the stage '
          'that takes the longest, about five minutes in a lock of '
          'ordinary size. It is also the stage where damage happens: '
          'water coming in fast throws a boat about, so the paddles '
          'are opened a little at a time.',
          'When the lock is full, the upper gates open and the boat '
          'goes out at the higher level. Nothing has been pumped and no '
          'power has been used: the boat has been lifted by water that '
          'ran downhill on its own. A lock built in 1790 and a lock '
          'built last year work in exactly the same way, which is '
          'unusual in the history of transport and is the reason the '
          'design has not changed.'],
         items=[
          ('The whole cycle takes about ____________ minutes.', None,
           'twelve', 'Paragraph 1, using only gravity.'),
          ('What are the small openings in the gates called?', None,
           'paddles', 'Paragraph 1: they are opened by hand with a '
           'crank.'),
          ('A boat going up usually finds the lock ____________.',
           None, 'full', 'Paragraph 2, because the last boat came '
           'down.'),
          ('The lower gates will not open until the levels are '
           '____________.', None, 'level',
           'Paragraph 2: a gate cannot be pushed against a '
           'difference.'),
          ('Which stage takes the longest?',
           ['the approach', 'emptying the lock',
            'filling the lock', 'leaving the lock'], 2,
           'Paragraph 3: about five minutes in an ordinary lock.'),
          ('Fast water throws a ____________ about.', None, 'boat',
           'Paragraph 3, which is where damage happens.'),
          ('A lock built in ____________ works in the same way as a '
           'new one.', None, '1790',
           'Paragraph 4, which is unusual in transport.')])],
   listen=[
    dict(heading='A canal volunteer on operating a lock',
         part='Part 4',
         task='A talk to new volunteers', band='l4',
         qtype='Questions 43-48',
         script=[
          ('Speaker', 'You will each work a lock on your own by the end '
           'of the day, so here is the whole thing in five minutes.'),
          ('Speaker', 'A lock is a box of water with a gate at each '
           'end, and it runs on gravity. Nothing is pumped. The water '
           'that lifts a forty-tonne boat ran downhill on its own.'),
          ('Speaker', 'Rule one, and it is the only one people break: '
           'never open a paddle at one end while a gate is open at the '
           'other. That empties the pound above you, and you will be '
           'the volunteer who drained a canal.'),
          ('Speaker', 'Going up, you arrive and the lock is usually '
           'full. Check the top gates are shut, open the bottom '
           'paddles, wait. The gates will not move until the levels '
           'match, and if you are pushing hard, the answer is not more '
           'pushing, it is more waiting.'),
          ('Speaker', 'Boat in, bottom gates shut, then open the top '
           'paddles slowly. A quarter turn, wait, another quarter. Fast '
           'water throws the boat against the gates and breaks '
           'things.'),
          ('Speaker', 'Filling takes about five minutes and the whole '
           'cycle about twelve, which is the number to give to an '
           'impatient queue behind you.'),
          ('Speaker', 'And one historical note that gets volunteers '
           'interested: the lock you are about to work was built in '
           '1790 and has not been improved since, because it cannot '
           'be.')],
         items=[
          ('A lock runs on ____________ and nothing is pumped.',
           None, 'gravity',
           'The water ran downhill on its own, the speaker says.'),
          ('Never open a paddle while a ____________ is open at the '
           'other end.', None, 'gate',
           'Which would empty the pound above.'),
          ('The gates will not move until the ____________ match.',
           None, 'levels',
           'And the answer is waiting rather than pushing.'),
          ('The top paddles should be opened a ____________ turn at '
           'a time.', None, 'quarter',
           'Because fast water throws the boat about.'),
          ('Filling takes about ____________ minutes.', None,
           'five', 'With the whole cycle about twelve.'),
          ('The lock was built in ____________ and has not been '
           'improved.', None, '1790',
           'Because, the speaker says, it cannot be.')])],
   speak=dict(
    part='Part 3', focus='Old and new technology',
    intro='Explain why something old survives, then generalise '
          'carefully.',
    qs=['Why do some old machines stay in use?',
        'Is new technology always better?',
        'Should old transport systems be kept?'],
    shape=[('answer', 'Usually because they already do the job with '
            'nothing to spare.'),
           ('support', 'A canal lock from 1790 works exactly as a new '
            'one does, because gravity has not been improved on.'),
           ('support', 'There is nothing in it to break and nothing '
            'to power.'),
           ('follow-up', 'So I would say new is better where there is '
            'a real problem to solve, and not otherwise.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='How a boat goes up through a lock',
         figure=_LOCK,
         prompt='The diagram shows how a boat is raised through a '
                'canal lock. Describe the process.',
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=17,
         model=[
          'The diagram shows the five stages by which a boat is raised '
          'through a canal lock, a cycle of about twelve minutes.',
          'The boat first waits at the lower level while the upper '
          'gates are closed. The lower paddles are then opened so that '
          'the lock empties to the lower level, after which the lower '
          'gates can be opened and the boat enters.',
          'Once the boat is inside, the lower gates are shut and the '
          'upper paddles are opened, so that water flows in from the '
          'higher level and the boat rises. In the final stage the '
          'upper gates are opened and the boat leaves at the higher '
          'level.',
          'The process uses no power at any point: the boat is lifted '
          'only by water flowing downwards from the higher level, and '
          'each stage depends on the levels on either side of a gate '
          'being equal before it can be opened.'],
         notes=['All five stages appear in order with the gates and '
                'paddles named.',
                'The passive is used throughout, as the diagram names '
                'no operator.',
                'The last sentence states the principle the diagram '
                'illustrates.'],
         criterion=[('All five stages in order', 'Task '
                     'Achievement'),
                    ('Gates and paddles distinguished', 'Task '
                     'Response'),
                    ('Passive forms accurate', 'Grammatical Range '
                     'and Accuracy'),
                    ('The principle stated', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='so that and in order to for purpose',
    explain='Use so that before a clause and in order to before a '
            'verb.',
    examples=['The paddles are opened so that the lock empties.',
              'The gates are shut in order to hold the water.',
              'The boat waits so that the levels can match.',
              'Water is let in in order to raise the boat.'],
    items=[('The paddles are opened (so that) the lock empties.',
            'The paddles are opened so that the lock empties.'),
           ('The gates are shut (in order to) hold the water.',
            'The gates are shut in order to hold the water.'),
           ('The boat waits (so that) the levels can match.',
            'The boat waits so that the levels can match.'),
           ('Water is let in (in order to) raise the boat.',
            'Water is let in in order to raise the boat.'),
           ('The paddles are opened slowly (so that) the boat is not '
            'thrown about.',
            'The paddles are opened slowly so that the boat is not '
            'thrown about.')],
    task='Complete each sentence with the words given.'),
   vocab=[('unmeasured', 'not measured'),
          ('throats', 'the passages at the back of the mouth'),
          ('threefold', 'three times as much'),
          ('statistics', 'numbers collected about something'),
          ('spoiling', 'going bad; or ruining'),
          ('seventy-two', 'the number 72'),
          ('self-service', 'where customers serve themselves'),
          ('responsibly', 'in a sensible, reliable way')],
   expr=[('Nothing is pumped.', 'stating what a system does not '
          'need'),
         ('The answer is not more pushing, it is more waiting.',
          'correcting an instinct'),
         ('A quarter turn, wait, another quarter.',
          'giving a careful procedure'),
         ('It has not been improved because it cannot be.',
          'explaining why a design survives')],
   trans=['first', 'then', 'after that', 'finally']),

  dict(
   sub='When the buses were free',
   step=3,
   read=[
    dict(heading='What happened when one city stopped charging',
         kind='Short factual article',
         task='Matching information and short answer',
         band='acad', qtype='Questions 49-55',
         paras=[
          'In 2013 a European city of about four hundred thousand '
          'people stopped charging residents to use its buses and '
          'trams. The scheme is quoted on both sides of the argument '
          'about free transport, usually by people who have read the '
          'headline rather than the numbers. The numbers are more '
          'interesting than either side admits.',
          'Use rose, but less than expected: about fourteen per cent '
          'over the first two years, against the forty per cent some '
          'supporters had predicted. More importantly, most of the '
          'rise did not come out of car journeys. Surveys found that '
          'the new passengers were mainly people who had previously '
          'walked or cycled short distances. The share of journeys '
          'made by car fell by about three per cent, which is a real '
          'fall and a small one.',
          'Two effects were not predicted at all. Boarding became '
          'faster, because nobody was paying, and journey times fell '
          'by about ten per cent on the busiest routes, an improvement '
          'that did more for the service than the extra passengers '
          'cost it. And the people who gained most were the poorest '
          'residents, for whom the saving was a meaningful share of '
          'what they had to spend each week.',
          'The honest summary is that free transport is a good policy '
          'for a reason different from the one usually given. It is '
          'weak as a way of taking cars off the road, because the '
          'people who change are mostly not drivers. It is strong as a '
          'way of making a city cheaper to live in for the people with '
          'least. It is strong, too, as a way of speeding up a bus by '
          'removing the thing that slows it most, which is the queue '
          'at the door. A city that adopts it for the first reason '
          'will be disappointed, and one that adopts it for the second '
          'two will not.'],
         items=[
          ('How much did use rise over the first two years?',
           ['about three per cent', 'about ten per cent',
            'about fourteen per cent', 'about forty per cent'], 2,
           'Paragraph 2, against the forty per cent predicted.'),
          ('Most new passengers had previously ____________ or '
           'cycled.', None, 'walked',
           'Paragraph 2, rather than driven.'),
          ('The share of journeys by car fell by about ____________ '
           'per cent.', None, 'three',
           'Paragraph 2: a real fall and a small one.'),
          ('Boarding became faster because nobody was ____________.',
           None, 'paying', 'Paragraph 3, which cut journey times.'),
          ('Journey times fell by about ____________ per cent on the '
           'busiest routes.', None, 'ten',
           'Paragraph 3, which helped the service most.'),
          ('Who gained most from the change?', None,
           'the poorest residents',
           'Paragraph 3: the saving was a meaningful share of their '
           'spending.'),
          ('The writer says the policy is weak as a way of taking '
           '____________ off the road.', None, 'cars',
           'Paragraph 4, because the people who change are not '
           'drivers.')])],
   listen=[
    dict(heading='Two councillors on free buses', part='Part 3',
         task='A discussion between two councillors', band='l3',
         qtype='Questions 56-61',
         script=[
          ('Chair', 'You are voting opposite ways on free buses. Give '
           'me your reasons, not your slogans.'),
          ('Bea', 'Mine is boarding time. Ten per cent off journey '
           'times on the busy routes, in the city that tried it, '
           'because nobody is paying at the door.'),
          ('Karim', 'And mine is that it does not do the thing it is '
           'sold as doing. Car use fell three per cent. Three.'),
          ('Bea', 'Which is a real fall.'),
          ('Karim', 'It is, and it is not worth the fare income on its '
           'own. If we are buying three per cent, we are paying a great '
           'deal for it.'),
          ('Bea', 'Then do not buy that. Buy the other two things. '
           'Faster buses, and the poorest residents keeping money they '
           'currently spend on fares.'),
          ('Karim', 'That second one is an argument I can support, and '
           'it is not the argument in our own paper, which talks about '
           'congestion for two pages.'),
          ('Bea', 'Our paper is badly written and I helped write it.'),
          ('Karim', 'Rewrite it round the two effects that actually '
           'showed up and I would vote for it.'),
          ('Chair', 'Then that is the motion, and I would rather have '
           'a policy with the right reasons attached than the same '
           'policy with the wrong ones.')],
         items=[
          ('Bea’s reason is ____________ time.', None,
           'boarding', 'Ten per cent off journey times on busy '
           'routes.'),
          ('Karim says car use fell only ____________ per cent.',
           None, 'three', 'Which he says is not worth the fare '
           'income.'),
          ('Bea says to buy faster buses and savings for the '
           '____________ residents.', None, 'poorest',
           'Rather than the fall in car use.'),
          ('Karim says their own paper talks about ____________ for '
           'two pages.', None, 'congestion',
           'Which is not the argument he can support.'),
          ('Bea says the paper is badly ____________.', None,
           'written', 'And admits she helped write it.'),
          ('Karim would vote for it if it were rewritten round the '
           'two ____________ that showed up.', None, 'effects',
           'Which the chair turns into the motion.')])],
   speak=dict(
    part='Part 3', focus='Paying for transport',
    sounds=[('This is the last page on sounds in this book, and it is a list '
             'of what has mattered. Word ends, word stress, joining, pauses, '
             'and the voice falling at the end.'),
            ('Before a test, record one answer from each part of the speaking '
             'exam. Listen three times, for one of those things each time.'),
            ('Speak a little more slowly and a little more clearly than feels '
             'natural, because under pressure almost everybody speeds up and '
             'gets quieter.'),
            ('Do not learn answers by heart. An examiner can hear it, and a '
             'memorised answer is marked lower than a worse answer that is '
             'really yours.'),
            ('Keep your recording from unit 1 of the first Foundation book. '
             'Listening to it next to today\'s is the clearest evidence you '
             'will ever have that this works.')],
    intro='Separate the claim from the reason for it.',
    qs=['Should public transport be free?',
        'Who should pay for city transport?',
        'What would make people use their cars less?'],
    shape=[('answer', 'I would make it free, but not for the reason '
            'usually given.'),
           ('support', 'In the one city that tried it properly, car '
            'use fell only three per cent.'),
           ('support', 'What did change was boarding time, which cut '
            'journey times by a tenth, and the weekly spending of the '
            'poorest residents.'),
           ('follow-up', 'So I would argue for it on cost of living '
            'and speed, and expect very little from it on '
            'traffic.')]),
   write=[
    dict(task='Task 2',
         heading='Should public transport be free?',
         prompt='Some people think public transport should be free for '
                'everybody. Others think passengers should pay for the '
                'service they use. Discuss both views and give your '
                'own opinion.',
         instruct='  Write at least 200 words in about 35 minutes.',
         lines=22, wband='essay',
         plan=('Free, but argued for the right reasons',
               [('The case for charging',
                 ['fares pay for the service and ration a scarce '
                  'seat',
                  'and free transport attracts walkers rather than '
                  'drivers']),
                ('The case for free travel',
                 ['boarding is faster, so journeys are quicker for '
                  'everybody',
                  'and the saving matters most to the poorest']),
                ('Why the reason matters',
                 ['a city expecting empty roads will be '
                  'disappointed',
                  'and will abandon a policy that was working'])]),
         model=[
          'The usual argument for free public transport is that it will '
          'take cars off the road. The city that has tried it longest '
          'suggests that this is the weakest reason available, and that '
          'the policy is nonetheless a good one.',
          'The case for charging is not only financial. Fares pay for '
          'the service, and a fare also rations a seat that is scarce '
          'at eight in the morning. When one European city stopped '
          'charging, use rose by about fourteen per cent, but most of '
          'the new passengers had previously walked or cycled, and the '
          'share of journeys made by car fell by only about three per '
          'cent. Anybody who promised empty roads was wrong.',
          'The case for free travel is made by two effects that nobody '
          'predicted. Boarding became faster because nobody was paying '
          'at the door, and journey times on the busiest routes fell by '
          'about a tenth, which benefits every existing passenger as '
          'well as the new ones. And the people who gained most were '
          'the poorest residents, for whom fares had been a real share '
          'of weekly spending.',
          'I would therefore make it free and argue for it honestly. '
          'That matters practically and not only morally: a city that '
          'adopts the policy expecting empty roads will declare it a '
          'failure within three years and abandon something that was '
          'working for two other reasons.'],
         notes=['The essay states the weak argument first and does '
                'not use it, which earns the reader\'s trust.',
                'Both unexpected effects are given with their '
                'figures.',
                'The conclusion gives a practical reason for honesty, '
                'which is stronger than a moral one here.'],
         criterion=[('Both views with their real strengths',
                     'Task Response'),
                    ('A position argued from evidence', 'Task '
                     'Achievement'),
                    ('The weak argument identified and set aside',
                     'Task Response'),
                    ('Accurate and varied structures', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Contrast within a sentence: although, but, rather than',
    explain='Use although at the start of a clause, but between two '
            'clauses, and rather than before a noun or verb.',
    examples=['Although use rose, car use barely fell.',
              'Use rose, but mostly among walkers.',
              'New passengers walked rather than drove.',
              'Although it is weak for traffic, it is good for '
              'cost.'],
    items=[('(although) use rose, car use barely fell.',
            'Although use rose, car use barely fell.'),
           ('Use rose. Mostly among walkers. (but)',
            'Use rose, but mostly among walkers.'),
           ('New passengers walked (rather than) drove.',
            'New passengers walked rather than drove.'),
           ('(although) it is weak for traffic, it is good for cost.',
            'Although it is weak for traffic, it is good for '
            'cost.'),
           ('Journey times fell. Fare income fell too. (but)',
            'Journey times fell, but fare income fell too.')],
    task='Write each sentence with the word given.'),
   vocab=[('recognisable', 'able to be recognised'),
          ('questionnaire', 'a set of written questions'),
          ('penalised', 'punished or disadvantaged'),
          ('omits', 'leaves out'),
          ('measles', 'an infectious illness with a rash'),
          ('historians', 'people who study the past'),
          ('edible', 'safe to eat'),
          ('contaminated', 'made impure or unsafe')],
   expr=[('People who have read the headline rather than the '
          'numbers.', 'describing a shallow argument'),
         ('A real fall and a small one.', 'rating a result fairly'),
         ('Weak for one reason, strong for two others.',
          'separating a claim from its grounds'),
         ('Give me your reasons, not your slogans.',
          'asking for substance')],
   trans=['however', 'because', 'so', 'for example'])],

 technique=dict(
  title='Everything so far, under the clock',
  body='This page has no new technique in it. It has a clock. '
       'Everything you have learned in the two Foundation books now '
       'has to happen at once, under time, because a technique you can '
       'only use slowly is not yet yours. Here is the drill, and it is '
       'the last one in these books. Take the timed Reading section at '
       'the back of this book. Give yourself the full time and do not '
       'stop it for anything. Before you start, write the sequence on '
       'a piece of paper: orient the passage in thirty seconds, load '
       'the questions, then one paragraph at a time; for each question '
       'decide whether the key is rare and unique (scan) or common and '
       'paraphrased (loop); underline and keep reading; predict the '
       'grammar of every gap before you write in it. When the time is '
       'up, mark it, and then do the part that matters: for every '
       'question you got wrong, write which step you skipped. Not what '
       'the answer was - which step. Almost every wrong answer at this '
       'level comes from a skipped step rather than from a word you '
       'did not know, and the list you produce is the only honest '
       'account of what you still have to practise. Volume 1 starts '
       'where that list ends.',
  panel=[('Orient, then load, then loop',
          'thirty seconds, then the questions, then one paragraph at '
          'a time'),
         ('Decide scan or loop per question',
          'rare and unique, or common and paraphrased?'),
         ('Predict every gap',
          'singular or plural, article, part of speech, form'),
         ('Mark by step, not by answer',
          'write which step you skipped, for each error')],
  qs=['Did I orient before reading the questions?',
      'Did I decide scan or loop for each question?',
      'Did I underline and keep reading?',
      'Did I predict the grammar of every gap?',
      'For each error, which step did I skip?'],
  task='Do the timed Reading section at the back of this book. Then '
       'list your errors by the step you skipped, and keep the list '
       'for your first week of Volume 1.'),

 outlining=dict(
  title='Fill, write, outline: closing the loop',
  body='This is the last outlining page in the Foundation books, and '
       'it puts the three drills in one sequence so that you can see '
       'that reading and writing are one skill looked at from two '
       'ends. Do all three in one sitting, on the same topic, using '
       'the Task 2 question in cycle 5. First, fill: take the plan '
       'printed with that question and write the essay from it, in '
       'thirty-five minutes. Second, outline your own: put the essay '
       'away for a day, then write the plan you would now use, and '
       'compare it with the printed one - the differences are your own '
       'judgement appearing, which is what Volume 1 will build on. '
       'Third, reverse it: take the academic passage in the same cycle '
       'and outline it from memory, then ask whether the writer\'s '
       'plan looks like yours. By the end you have written from a '
       'plan, made a plan, and recovered somebody else\'s plan from '
       'their finished prose. Those three things are the whole of what '
       'Volume 1 calls planning, and you will arrive able to do them '
       'rather than needing to be taught them.',
  frame=('Should public transport be free?',
         [('Written from the printed plan',
           ['charging: fares pay, fares ration',
            'free: faster boarding, poorest gain']),
          ('My own plan, a day later',
           ['what I would now put first',
            'what the printed plan left out'])]),
  qs=['Did I write the essay from the printed plan in the time?',
      'What does my own plan put first that the printed one did '
      'not?',
      'Which paragraph of the passage could I not title?',
      'Does the writer\'s plan look like mine?',
      'What will I do differently in Volume 1?'],
  task='Do all three drills on the cycle 5 topic: write from the '
       'plan, make your own plan a day later, and outline the cycle 5 '
       'passage from memory.',
  answers=['writing from a plan is the first of the three drills',
           'making your own plan shows your judgement appearing',
           'recovering a writer\'s plan is reading as a writer',
           'the three together are what Volume 1 calls planning',
           'arriving able to do them beats being taught them']),

 candos=['I can read a travel page for restrictions and times',
         'I can describe two lines and the gap between them',
         'I can follow a report of a scheme and find what changed',
         'I can work through a whole Reading section under time',
         'I can plan, write, and recover a writer\'s plan'],

 tip=('When you mark a timed section, write down which step you '
      'skipped rather than what the answer was. That list is what you '
      'take into Volume 1.'))
