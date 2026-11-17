# -*- coding: utf-8 -*-
"""Foundation 2, Unit 8 - Festivals and Traditions.

A festival site, family customs, food, how a festival is organised, and
what happens when a tradition changes. The technique page is predicting
the grammar of a gap, which is the completion skill that separates a
candidate who hears the answer from one who can write it down.
"""

_YEAR = dict(kind='process',
             title='Twelve months of planning a festival',
             sub='five stages, from the end of one year to the next',
             stages=[
              ('Review', 'the committee reads every complaint and '
               'every account within a month'),
              ('Booking', 'performers and equipment are booked eleven '
               'months ahead'),
              ('Licensing', 'the council approves numbers, noise and '
               'the road closure'),
              ('Selling', 'tickets go on sale and most are sold by '
               'March'),
              ('Running', 'the site is built in four days and cleared '
               'in two')])

_FOOD = dict(kind='bar',
             title='What people eat at four festivals',
             sub='share of food sold, by kind, one weekend each',
             cats=['Harvest', 'Spring fair', 'Midwinter', 'Music'],
             series=[('Hot cooked', [46.0, 31.0, 58.0, 62.0]),
                     ('Bread and cake', [34.0, 44.0, 27.0, 14.0]),
                     ('Fruit and raw', [20.0, 25.0, 15.0, 24.0])],
             ylab='per cent')

UNIT = dict(
 n=8, vol=8, level='A2-B1', band='4.0-4.5',
 theme='Festivals and Traditions',
 opener=(
   'This unit is about the things people do every year because they '
   'did them last year. You will collect a wristband, compare three '
   'family customs, look at what sells at four different festivals, '
   'follow twelve months of planning, and read about a festival that '
   'moved indoors and lost half its audience and gained a different '
   'half. The technique page is about predicting the grammar of a gap, '
   'which is where most completion marks are actually lost.'),

 cycles=[
  dict(
   sub='Going to a festival',
   step=1,
   read=[
    dict(heading='Riverside Festival: what you need to know',
         kind='Information page', task='Short answer',
         band='gt_short', qtype='Questions 1-5',
         skill=('An event page is read for the thing you must bring',
                ['Find every item you have to show or carry. Those are '
                 'the questions.',
                 'Times matter most where they are different from what '
                 'people assume.']),
         paras=[
          'Gates open at eleven on Friday and at nine on Saturday and '
          'Sunday. The last entry each day is at eight in the evening, '
          'whatever your ticket says, and this is a condition of the '
          'licence rather than our rule.',
          'Exchange your ticket for a wristband at the gate. The '
          'wristband must stay on for the whole weekend. If it comes '
          'loose, go to the information tent before it falls off, not '
          'after.',
          'Bring identification if you look under twenty-five and want '
          'to buy alcohol. A photograph of a document is not accepted. '
          'This is the single commonest reason people are refused.',
          'The site is on grass and the ground is uneven. There is a '
          'firm path from the main gate to the stages for anybody who '
          'needs one, and the safety team will take you along it if '
          'you ask at the gate.'],
         items=[
          ('Gates open at ____________ on Friday.', None, 'eleven',
           'And at nine on Saturday and Sunday.'),
          ('The last entry each day is at ____________.', None,
           'eight', 'Which is a condition of the licence.'),
          ('Tickets are exchanged at the gate for a ____________.',
           None, 'wristband', 'Which must stay on all weekend.'),
          (
           'A ____________ of a document is not accepted as '
           'identification.', None, 'photograph',
           'The commonest reason people are refused.'),
          ('Where does the firm path run from?', None,
           'the main gate', 'To the stages, for anybody who needs '
           'it.')])],
   listen=[
    dict(heading='Collecting wristbands', part='Part 1',
         task='A conversation at a festival gate', band='l1',
         qtype='Questions 6-11',
         script=[
          ('Steward', 'Tickets, please. How many?'),
          ('Visitor', 'Four. Two adults, two children aged nine and '
           'fourteen.'),
          ('Steward', 'The fourteen-year-old needs a wristband; the '
           'nine-year-old is free and does not. Are they with you all '
           'weekend?'),
          ('Visitor', 'Yes.'),
          ('Steward', 'Then write your mobile number on the back of '
           'both children’s wristbands. We do it for every child '
           'and it has saved us about thirty times this year.'),
          ('Visitor', 'Sensible. Where is the family camping?'),
          ('Steward', 'Through the second gate and left. It is quieter '
           'and the ground is flatter. The main field is on a slope '
           'and people regret it at two in the morning.'),
          ('Visitor', 'Is there a cash machine?'),
          ('Steward', 'One, by the information tent, and it runs out '
           'by Saturday afternoon every year. Most stalls take cards '
           'now, but the small food stalls are cash only.'),
          ('Visitor', 'What time does the music stop?'),
          ('Steward', 'Eleven on Friday, midnight on Saturday, and ten '
           'on Sunday because of the buses.'),
          ('Visitor', 'And if it rains?'),
          ('Steward', 'The big tent holds two thousand, which is not '
           'everybody. Bring a coat rather than an umbrella: umbrellas '
           'are not allowed near the stages.')],
         items=[
          ('The ____________-year-old does not need a wristband.',
           None, 'nine', 'And enters free, the steward says.'),
          ('Parents should write their ____________ number on the '
           'children’s wristbands.', None, 'mobile',
           'Which has helped about thirty times this year.'),
          ('The family camping is through the ____________ gate.',
           None, 'second', 'And to the left, where it is flatter.'),
          ('The cash machine runs out by ____________ afternoon.',
           None, 'Saturday', 'Every year without exception, the steward says.'),
          ('Music stops at ____________ on Sunday.', None, 'ten',
           'An earlier finish, because of the buses home.'),
          ('____________ are not allowed near the stages.', None,
           'Umbrellas', 'A coat is suggested instead of an umbrella.')])],
   speak=dict(
    part='Part 1', focus='Festivals and celebrations',
    intro='Talk about one real occasion. Two or three sentences.',
    qs=['Are there festivals where you live?',
        'Do you enjoy large events?',
        'What do people celebrate in your country?',
        'Have you been to an outdoor event?'],
    shape=[('answer', 'There is a harvest festival in my town at the '
            'end of September.'),
           ('support', 'It is small, about two thousand people, and it '
            'has been going since before anybody can remember.'),
           ('follow-up', 'I prefer small events to large ones, mostly '
            'because I can leave when I want to.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking about access at an event',
         prompt='You are going to an outdoor event with a relative who '
                'cannot walk far. Write to the organisers. In your '
                'letter: say which event and when; explain what you '
                'need; ask two questions.',
         instruct='  Write at least 110 words in about 20 minutes.',
         lines=13,
         model=[
          'Dear Sir or Madam,',
          'I am coming to the Riverside Festival on Saturday 14 June '
          'with my father, who is seventy-eight and can walk about a '
          'hundred metres at a time.',
          'Your information page mentions a firm path from the main '
          'gate to the stages, which is helpful. Could you tell me how '
          'long that path is, and whether there is anywhere to sit at '
          'intervals along it? He can manage a long distance if he can '
          'stop.',
          'I would also like to know whether a car can be brought as '
          'far as the main gate to set somebody down, or whether the '
          'nearest point is the car park.',
          'Thank you for your help.',
          'Yours faithfully,',
          'A. Nkemdirim'],
         notes=['The need is described by what the person can do, '
                'which is the only description an organiser can act '
                'on.',
                'The letter acknowledges what the information page '
                'already says, so the reply does not repeat it.',
                'Both questions are practical and answerable in one '
                'line each.'],
         criterion=[('Event and date given first', 'Task '
                     'Achievement'),
                    ('The need described concretely', 'Task '
                     'Response'),
                    ('Two answerable questions', 'Task Achievement'),
                    ('Formal register', 'Coherence and Cohesion')])],
   gram=dict(
    point='Obligation in notices: must, need to, be required to',
    explain='Must and be required to are strongest; need to is '
            'neutral; do not need to means it is not necessary.',
    examples=['The wristband must stay on all weekend.',
              'You need to bring identification.',
              'Children under ten are not required to have one.',
              'You do not need a ticket for the campsite.'],
    items=[('The wristband (must) stay on.',
            'The wristband must stay on.'),
           ('You (need) bring identification.',
            'You need to bring identification.'),
           ('Children under ten (not be required) have one.',
            'Children under ten are not required to have one.'),
           ('You (not need) a ticket for the campsite.',
            'You do not need a ticket for the campsite.'),
           ('Umbrellas (must not) be taken near the stage.',
            'Umbrellas must not be taken near the stage.')],
    task='Write each sentence with the form given.'),
   vocab=[('birds', 'animals with feathers and wings'),
          ('responsibility', 'a duty to deal with something'),
          ('loose', 'not firmly fixed'),
          ('safety', 'being free from danger'),
          ('boring', 'not interesting'),
          ('tall', 'of more than average height'),
          ('dust', 'fine dry powder of earth'),
          ('rice', 'a grain eaten as food'),
          ('cow', 'a large farm animal kept for milk')],
   expr=[('Exchange your ticket at the gate.', 'an instruction on an '
          'event page'),
         ('If it comes loose, come before it falls off.',
          'advice with a reason'),
         ('That is the commonest reason people are refused.',
          'warning about a frequent mistake'),
         ('Ask at the gate.', 'telling somebody where to get help')],
   trans=['and', 'then', 'but', 'so']),

  dict(
   sub='A tradition in your family',
   step=2,
   read=[
    dict(heading='Three families, three traditions',
         kind='Three short profiles', task='Matching features',
         band='gt_work', qtype='Questions 12-17',
         paras=[
          'The Osei family eat the same meal on the same day every '
          'year, and nobody particularly likes it. That is the point, '
          'according to the eldest daughter: a meal everybody enjoyed '
          'would be eaten at other times and would stop marking '
          'anything. The dish is rice, slow-cooked with very little in '
          'it, and it takes four hours.',
          'The Lindqvists have a tradition that is only nine years old. '
          'After their father died they began walking the same route on '
          'the first Sunday of September, about eleven kilometres, and '
          'stopping at the same bench. The second daughter says the '
          'useful thing about it is that it has no words in it. Nobody '
          'has to say anything and nobody has to be sad on '
          'schedule.',
          'The Haddad family stopped a tradition deliberately and say '
          'it was the right decision. For thirty years the whole family '
          'travelled to one house at midwinter, and as the family grew '
          'the gathering became an event that four people enjoyed and '
          'twenty endured. They now meet in smaller groups through the '
          'month. The grandmother, who began the original tradition, '
          'was the one who proposed ending it.'],
         items=[
          ('Which family eats a dish nobody especially likes?',
           ['the Oseis', 'the Lindqvists', 'the Haddads', 'none'], 0,
           'Which the eldest daughter says is the point.'),
          ('Which tradition is the newest?',
           ['the Oseis’', 'the Lindqvists’',
            'the Haddads’', 'they are the same age'], 1,
           'It began nine years ago, after a death.'),
          ('The Osei dish takes ____________ hours to cook.', None,
           'four', 'Slow-cooked rice with very little in it.'),
          ('The Lindqvist walk is about ____________ kilometres.',
           None, 'eleven',
           'On the first Sunday of September.'),
          (
           'The second daughter values that the walk has no '
           '____________ in it.', None, 'words',
           'Nobody has to say anything or be sad on schedule.'),
          ('Who proposed ending the Haddad tradition?', None,
           'the grandmother', 'Who had begun it thirty years '
           'before.')])],
   listen=[
    dict(heading='Two friends on family customs', part='Part 3',
         task='A discussion between two friends', band='l3',
         qtype='Questions 18-23',
         script=[
          ('Tutor', 'You are writing about family traditions. Where do '
           'you disagree?'),
          ('Maya', 'About whether keeping one going matters. I think a '
           'tradition that nobody enjoys should stop.'),
          ('Owen', 'And I think enjoyment is the wrong test. Nobody '
           'enjoys a fire drill.'),
          ('Maya', 'A fire drill has a purpose outside itself.'),
          ('Owen', 'So does a tradition. It marks a date. If you only '
           'do the things you enjoy, the year has no shape in it at '
           'all.'),
          ('Maya', 'That is a better argument than I expected. But I '
           'interviewed a family who stopped one, and the person who '
           'proposed stopping was the person who started it.'),
          ('Owen', 'Which says something about who the tradition was '
           'serving.'),
          ('Maya', 'Exactly. It had become an event four people liked '
           'and twenty put up with.'),
          ('Owen', 'Then my position needs a condition. A tradition '
           'should continue if it marks something, and should change '
           'its form when the family changes shape.'),
          ('Maya', 'I would sign that.'),
          ('Tutor', 'Then that is your conclusion, and you should say '
           'how you got there, because the route is more interesting '
           'than the destination.'),
          ('Maya', 'Should we include the family who stopped theirs? It '
           'is one family, not a survey, and I do not want to build the '
           'whole argument on it.'),
          ('Tutor', 'Use it as an illustration and say that is what it '
           'is. One case cannot prove a general claim, but it can show '
           'what the claim would look like if it were true.')],
         items=[
          ('Maya thinks a tradition nobody ____________ should '
           'stop.', None, 'enjoys',
           'Which is the point they disagree about.'),
          ('Owen says enjoyment is the wrong ____________.', None,
           'test', 'Because nobody enjoys a fire drill.'),
          ('Owen says a tradition marks a ____________.', None,
           'date', 'And in doing so gives the year a shape.'),
          ('In the family Maya interviewed, the person who proposed '
           'stopping was the person who ____________ it.', None,
           'started', 'Which Owen says reveals who it served.'),
          ('The event was liked by four people and put up with by '
           '____________.', None, 'twenty',
           'Which is how the gathering had changed.'),
          ('Owen adds a condition: a tradition should change its '
           '____________ when the family changes shape.', None,
           'form', 'A condition which Maya says she would sign.')])],
   speak=dict(
    part='Part 2', focus='A tradition you know',
    longturn=[('I am going to talk about a tradition in my country. On the '
               'second of November we visit the graves of our family.'),
              ('What happens is that families go to the cemetery in the '
               'afternoon, clean the stones, and put flowers and candles on '
               'them. By the evening the whole cemetery is full of small '
               'lights, and people stand about in groups and talk, so it is '
               'quiet but it is not sad in the way a funeral is sad.'),
              ('It happens on the same day every year, and it happens because '
               'of a religious calendar, although plenty of people who go are '
               'not religious at all. My grandfather is buried there and so '
               'are his parents, and my mother knows where about twenty other '
               'families\' stones are.'),
              ('What I think about it has changed as I have got older. As a '
               'child I found it boring and slightly frightening. Now '
               'it is the one day in the year when the older people in '
               'my family tell you things, because the stones ask the '
               'questions for you. I learned that my great-grandmother '
               'was born in another country standing in front of her '
               'name, and I had never thought to ask.')],
    intro='One minute, four lines. One tradition, and make the last '
          'bullet a judgement rather than a description.',
    qs=['Describe a tradition in your family or your country.',
        'Say what happens.',
        'Say when and why it happens.',
        'Say what you think about it.'],
    shape=[('answer', 'My family eats the same meal on the same day '
            'every year, in September.'),
           ('support', 'It is a rice dish that takes four hours and '
            'nobody especially likes.'),
           ('support', 'It marks the day my grandparents arrived in '
            'this country.'),
           ('follow-up', 'I used to find it boring and now I think the '
            'fact that nobody chooses it is exactly what makes it '
            'work.')]),
   write=[
    dict(task='Task 2',
         heading='Should traditions be preserved even when they are '
                 'inconvenient?',
         prompt='Some people think traditions should be kept even when '
                'they are inconvenient. Others think they should '
                'change or stop. Discuss both views and give your own '
                'opinion.',
         instruct='  Write at least 200 words in about 35 minutes.',
         lines=22, wband='essay',
         plan=('Keep what marks something; change the form when the '
               'group changes',
               [('The case for keeping them',
                 ['a tradition marks a date and gives a year a shape',
                  'and enjoyment is the wrong test: nobody enjoys a '
                  'fire drill']),
                ('The case for stopping',
                 ['a gathering four people like and twenty endure '
                  'serves four people',
                  'and effort spent on it is effort not spent '
                  'elsewhere']),
                ('The test that fits both',
                 ['does it still mark what it was for?',
                  'if so, change the form rather than ending it'])]),
         model=[
          'Families and countries both face the question of whether to '
          'keep a custom that has become difficult, and both sides of '
          'the argument are usually stated badly.',
          'The case for keeping traditions is not that people enjoy '
          'them. Nobody enjoys a fire drill, and that is not an '
          'argument against fire drills. A tradition marks something '
          'and gives a year a shape; a life in which only enjoyable '
          'things are repeated has no dates in it at all, and people '
          'who live that way report feeling that time passes without '
          'landmarks.',
          'The case for stopping is about who a tradition now serves. A '
          'gathering that four people enjoy and twenty endure is not a '
          'family tradition; it is four people’s preference '
          'maintained by everybody else’s politeness. The effort '
          'it takes is real and is taken from something else.',
          'The test I would use is whether the custom still marks what '
          'it was created to mark. If it does, the answer to '
          'inconvenience is to change its form: a shorter gathering, '
          'several small ones, a different month. If it does not mark '
          'anything any more, keeping it is not respect for the past '
          'but a habit wearing the clothes of one.',
          'That test also explains why the people who most often '
          'propose ending a tradition are the ones who began it.'],
         notes=['Each side is given its strongest version, and the '
                'fire-drill comparison does a lot of work in one '
                'sentence.',
                'The test offered resolves both sides rather than '
                'choosing between them.',
                'The last line is an observation rather than a '
                'summary, which is the better way to end.'],
         criterion=[('Both views at their strongest', 'Task '
                     'Response'),
                    ('A test that resolves them', 'Task Response'),
                    ('A conclusion that adds rather than repeats',
                     'Coherence and Cohesion'),
                    ('Accurate conditionals', 'Grammatical Range and '
                     'Accuracy')])],
   gram=dict(
    point='used to, would and still for habits',
    explain='Use used to and would for past habits, and still for one '
            'that continues. Would does not work with states.',
    examples=['We used to travel to one house every year.',
              'My grandmother would cook for twenty people.',
              'We still eat the same meal in September.',
              'They used to be close, not they would be close.'],
    items=[('We (travel) to one house every year.',
            'We used to travel to one house every year.'),
           ('My grandmother (cook) for twenty people.',
            'My grandmother would cook for twenty people.'),
           ('We (still / eat) the same meal.',
            'We still eat the same meal.'),
           ('They (be) close when they were young.',
            'They used to be close when they were young.'),
           ('He (walk) the same route every September.',
            'He would walk the same route every September.')],
    task='Write each sentence with used to, would or still.'),
   vocab=[('eaten', 'past participle of eat'),
          ('thrown', 'past participle of throw'),
          ('sink', 'a basin with a tap; or to go under water'),
          ('beneath', 'under'),
          ('increase', 'to become or make greater'),
          ('furniture', 'tables, chairs and other large objects'),
          ('profit', 'money gained after costs'),
          ('barn', 'a large farm building'),
          ('adopted', 'taken on or taken in')],
   expr=[('That is the point.', 'claiming an apparent fault is a '
          'virtue'),
         ('Nobody has to be sad on schedule.',
          'describing what a wordless ritual allows'),
         ('An event four people enjoyed and twenty endured.',
          'measuring who something serves'),
         ('I would sign that.', 'agreeing with a formulation')],
   trans=['also', 'too', 'and', 'but']),

  dict(
   sub='Food at a festival',
   step=2,
   read=[
    dict(heading='What people eat at four festivals',
         kind='Short article', task='Matching information',
         band='gt_work', qtype='Questions 24-29',
         skill=('A comparison of four events is read column by column',
                ['Decide which event the question is about before you '
                 'read anything.',
                 'Where three events behave alike and one does not, '
                 'the odd one is usually asked about.']),
         paras=[
          'Food sales at four annual events were recorded over one '
          'weekend each. The pattern is more stable than the '
          'organisers expected, and the differences between events are '
          'bigger than the differences between years at the same '
          'event.',
          'Hot cooked food dominates at the music festival and at '
          'midwinter, taking sixty-two and fifty-eight per cent. At the '
          'spring fair it takes only thirty-one per cent, and bread and '
          'cake take forty-four, which is the highest share of any '
          'category at any of the four.',
          'Fruit and raw food is the most stable category, between '
          'fifteen and twenty-five per cent everywhere. This surprises '
          'people who assume that a summer event sells more of it, and '
          'the organisers now believe the share is set by what is easy '
          'to carry rather than by weather.',
          'The practical conclusion drawn by the committee was about '
          'water rather than food. Hot food is salty, and at the two '
          'events where hot food dominates the queues at the water '
          'points were four times longer. Two extra taps cost very '
          'little and removed the longest queue on the site.'],
         items=[
          ('At which event does hot food take the largest share?',
           ['harvest', 'spring fair', 'midwinter', 'music'], 3,
           'Sixty-two per cent at the music festival.'),
          ('Bread and cake reach ____________ per cent at the spring '
           'fair.', None, 'forty-four',
           'The highest share of any category anywhere.'),
          ('Fruit and raw food stays between fifteen and '
           '____________ per cent.', None, 'twenty-five',
           'The most stable category of the three.'),
          ('The organisers think that share is set by what is easy to '
           '____________.', None, 'carry',
           'Rather than by the weather, as assumed.'),
          ('Where hot food dominates, water queues were '
           '____________ times longer.', None, 'four',
           'Because salty hot food makes people thirsty.'),
          ('What removed the longest queue on the site?', None,
           'two extra taps', 'Two taps, which cost the organisers very little.')])],
   listen=[
    dict(heading='A cook on festival dishes', part='Part 2',
         task='One speaker describing a job', band='l2',
         qtype='Questions 30-35',
         script=[
          ('Speaker', 'I have run a food stall at eleven festivals a '
           'year for nine years, and almost everything I believed at '
           'the start was wrong.'),
          ('Speaker', 'I thought variety sold. It does not. Four dishes '
           'sell better than twelve, because a queue moves and people '
           'join a moving queue. A long menu makes people stop and '
           'read, the queue stops, and the queue stopping is what loses '
           'you the afternoon.'),
          ('Speaker', 'I thought the weather decided what sold. It '
           'barely does. What decides it is how easy the food is to '
           'carry while standing up. Anything that needs two hands and '
           'a flat surface sells badly whatever the temperature.'),
          ('Speaker', 'I thought price was the main thing. It is '
           'third. Speed is first, because a festival crowd has '
           'somewhere to be, and portion size is second, because people '
           'are more annoyed by a small portion than pleased by a cheap '
           'one.'),
          ('Speaker', 'The thing that actually changed my business was '
           'water. I put two free water jugs on the counter. It cost me '
           'almost nothing and people remember it a year later, which '
           'is longer than they remember the food.'),
          ('Speaker', 'And the serious point: salty food makes people '
           'thirsty, and a site with too few taps is a safety problem '
           'before it is a comfort problem.')],
         items=[
          ('____________ dishes sell better than twelve.', None,
           'Four', 'Because a short menu keeps the queue moving.'),
          ('A long menu makes people stop and ____________.', None,
           'read', 'And a stopped queue loses the afternoon.'),
          ('What decides what sells is how easy the food is to '
           '____________.', None, 'carry',
           'While standing up, the speaker says.'),
          ('Speed is first and ____________ size is second.', None,
           'portion', 'With price coming only third of the three.'),
          ('The speaker put two free ____________ jugs on the '
           'counter.', None, 'water',
           'Which people remember a year later.'),
          ('Too few taps is a ____________ problem before it is a '
           'comfort problem.', None, 'safety',
           'Because salty food makes people thirsty.')])],
   speak=dict(
    part='Part 3', focus='Food and occasions',
    intro='Make a general point and support it with one example.',
    qs=['Why is food important at celebrations?',
        'Has what people eat at festivals changed?',
        'Should events sell only local food?'],
    shape=[('answer', 'Food at an occasion is doing a different job '
            'from food at home.'),
           ('support', 'It has to be eaten standing up, which rules '
            'out most of what people cook.'),
           ('support', 'That is why the same few dishes appear at '
            'events that have nothing else in common.'),
           ('follow-up', 'I would not require local food, but I would '
            'require enough water taps, which matters more and costs '
            'less.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='What people eat at four festivals',
         figure=_FOOD,
         prompt='The chart shows the share of food sold at four '
                'festivals. Describe the chart and compare the '
                'events.',
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=17,
         model=[
          'The chart shows how food sales at four annual events divided '
          'between three kinds of food.',
          'Hot cooked food was the largest category at three of the '
          'four events, and was highest at the music festival with '
          'sixty-two per cent and at midwinter with fifty-eight. The '
          'spring fair is the exception: there hot food took only '
          'thirty-one per cent, and bread and cake took forty-four, '
          'which is the largest single share anywhere in the chart.',
          'Fruit and raw food varied least, between fifteen per cent at '
          'midwinter and twenty-five at the spring fair.',
          'The clearest pattern is that the differences between events '
          'lie almost entirely in the first two categories, which '
          'exchange places between the spring fair and the other '
          'three.'],
         notes=['The general pattern is given before the exception, '
                'and the exception gets a full sentence.',
                'The most stable category is described by its range, '
                'which is shorter than four figures.',
                'The closing sentence locates where the variation '
                'is.'],
         criterion=[('All three categories at four events', 'Task '
                     'Achievement'),
                    ('The exception identified', 'Task Response'),
                    ('A range used for the stable category',
                     'Coherence and Cohesion'),
                    ('Percentages accurate', 'Grammatical Range and '
                     'Accuracy')])],
   gram=dict(
    point='Comparing with the largest, the only, the exception',
    explain='Use the largest, the smallest, the only and the exception '
            'to pick one item out of a set.',
    examples=['Hot food is the largest category at three events.',
              'The spring fair is the only exception.',
              'Fruit is the most stable of the three.',
              'Midwinter has the smallest share of fruit.'],
    items=[('Hot food is (large) category at three events.',
            'Hot food is the largest category at three events.'),
           ('The spring fair is the (only) exception.',
            'The spring fair is the only exception.'),
           ('Fruit is the (stable) of the three.',
            'Fruit is the most stable of the three.'),
           ('Midwinter has the (small) share of fruit.',
            'Midwinter has the smallest share of fruit.'),
           ('The music festival sells the (much) hot food.',
            'The music festival sells the most hot food.')],
    task='Write each sentence with the right superlative.'),
   vocab=[('infection', 'an illness caused by germs'),
          ('behaviour', 'the way somebody acts'),
          ('growth', 'the process of growing'),
          ('carbon', 'an element found in all living things'),
          ('reliable', 'able to be depended on'),
          ('depth', 'how deep something is'),
          ('laboratory', 'a room for scientific work'),
          ('prescription', 'a written order for medicine'),
          ('deliberately', 'on purpose')],
   expr=[('Almost everything I believed at the start was wrong.',
          'introducing hard-won knowledge'),
         ('A queue moves and people join a moving queue.',
          'explaining a practical effect'),
         ('It is third, not first.', 'correcting a ranking'),
         ('It cost me almost nothing.', 'describing a cheap '
          'improvement')],
   trans=['first', 'next', 'then', 'finally']),

  dict(
   sub='How a festival is organised',
   step=3,
   read=[
    dict(heading='Twelve months of planning',
         kind='Short factual article',
         task='Flow-chart completion and matching',
         band='acad', qtype='Questions 36-42',
         paras=[
          'A festival that runs for three days is worked on for twelve '
          'months, and the order of the work is fixed by things outside '
          'the organisers’ control. The year begins the week after '
          'the last one ends, when the committee reads every complaint '
          'and every account while people still remember what '
          'happened. A review done in January is a review of what '
          'people have decided they remember.',
          'Booking comes next and comes early because the people and '
          'the equipment are scarce. Performers are usually booked '
          'eleven months ahead, and the companies that supply stages, '
          'fencing and toilets have a fixed quantity of each and a '
          'season that is four months long. A festival that books in '
          'March is choosing from what is left.',
          'Licensing is the stage that can stop everything. The council '
          'approves a number of people, a noise limit and a road '
          'closure, and the conditions attached can change the whole '
          'site plan. This is why experienced organisers apply early '
          'and talk to residents before applying rather than '
          'afterwards: an objection answered in advance is '
          'administrative, and the same objection raised at a hearing '
          'is a crisis.',
          'Tickets go on sale once the licence is likely, and most are '
          'sold by March, which matters because the money pays the '
          'deposits. The site itself is built in four days and cleared '
          'in two, and the clearing is the part that decides the '
          'council\u2019s satisfaction. A field returned clean is the '
          'strongest argument an organiser has, and it is made in '
          'silence.'],
         items=[
          ('The committee reads complaints and accounts within a '
           '____________ of the festival ending.', None, 'week',
           'Paragraph 1, while people still remember.'),
          ('Performers are booked about ____________ months ahead.',
           None, 'eleven', 'Paragraph 2, because they are scarce.'),
          ('Suppliers have a season that is ____________ months '
           'long.', None, 'four',
           'Paragraph 2, with a fixed quantity of equipment.'),
          ('Which stage can stop everything?',
           ['review', 'booking', 'licensing', 'ticketing'], 2,
           'Paragraph 3: the council sets conditions.'),
          ('An objection answered in advance is ____________.', None,
           'administrative',
           'Paragraph 3, while the same one at a hearing is a '
           'crisis.'),
          ('Most tickets are sold by ____________.', None, 'March',
           'Paragraph 4, and the money pays the deposits.'),
          ('The site is built in four days and cleared in '
           '____________.', None, 'two',
           'Paragraph 4, and the clearing matters most.')])],
   listen=[
    dict(heading='A festival organiser on the year before',
         part='Part 4',
         task='A talk to events students', band='l4',
         qtype='Questions 43-48',
         script=[
          ('Speaker', 'Three days of festival, twelve months of work, '
           'and the order is not something we choose.'),
          ('Speaker', 'We review in the week after. Not in January, in '
           'the week after, because by January people have tidied their '
           'memories. The complaints we get in the first seven days are '
           'specific and useful; the ones in January are about how they '
           'felt.'),
          ('Speaker', 'Booking is eleven months out. The fencing '
           'companies have a four-month season and a fixed amount of '
           'fencing. If you ring in March you get what nobody else '
           'wanted, at a price that reflects it.'),
          ('Speaker', 'Licensing is where a festival dies. The council '
           'sets numbers, noise and the road closure. I now visit the '
           'twelve nearest houses before I apply, every year, and I '
           'have never once regretted it. An objection you hear about '
           'first at a hearing has already become a position somebody '
           'is defending in public.'),
          ('Speaker', 'Tickets fund the deposits, so they go on sale as '
           'soon as the licence looks likely, and most sell by March.'),
          ('Speaker', 'And the last thing is the one nobody teaches. '
           'The field has to go back clean, in two days, and that is '
           'what buys you next year. We spend more on clearing than on '
           'advertising, and I would do it again.')],
         items=[
          ('The review happens in the ____________ after the '
           'festival.', None, 'week',
           'Because by January memories have been tidied.'),
          ('Booking happens ____________ months out.', None,
           'eleven', 'When equipment is still available.'),
          ('Fencing companies have a ____________-month season.',
           None, 'four', 'And a fixed amount of fencing.'),
          ('The speaker visits the ____________ nearest houses before '
           'applying.', None, 'twelve',
           'Every year, and has never regretted it.'),
          ('Tickets fund the ____________.', None, 'deposits',
           'And most of them are sold by March.'),
          ('They spend more on ____________ than on advertising.',
           None, 'clearing',
           'Because a clean field buys the next year.')])],
   speak=dict(
    part='Part 3', focus='Organising events',
    intro='Give a reason, then say what you would do differently.',
    qs=['Why do some local events stop happening?',
        'Should councils support festivals?',
        'What makes an event good for the town it is in?'],
    shape=[('answer', 'Most stop because of licensing or because the '
            'volunteers get tired.'),
           ('support', 'An objection raised at a hearing is much '
            'harder to answer than one heard beforehand.'),
           ('support', 'And a field returned clean is worth more than '
            'any amount of advertising to a council.'),
           ('follow-up', 'So I would spend the first money on talking '
            'to neighbours and the last on clearing up.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Twelve months of planning a festival',
         figure=_YEAR,
         prompt='The diagram shows the stages in planning a festival. '
                'Describe the process.',
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=17,
         model=[
          'The diagram shows the five stages through which a festival '
          'is planned over twelve months.',
          'The cycle begins immediately after the previous event, when '
          'the committee reads every complaint and every account within '
          'a month. Performers and equipment are then booked about '
          'eleven months before the festival takes place.',
          'The third stage is licensing, in which the council approves '
          'the number of people, the noise limit and the road closure. '
          'Once that approval is likely, tickets go on sale, and most '
          'are sold by March.',
          'In the final stage the site is built in four days and '
          'cleared in two.',
          'The order is therefore not a matter of preference. Each '
          'stage depends on the one before it, and the first and last '
          'stages join, since the review of one year is the first stage '
          'of the next.'],
         notes=['All five stages appear in order with their numbers.',
                'The passive is used because the diagram names no '
                'actor.',
                'The closing sentence identifies the loop, which is '
                'what the diagram is really showing.'],
         criterion=[('All five stages with figures', 'Task '
                     'Achievement'),
                    ('The cycle identified', 'Coherence and '
                     'Cohesion'),
                    ('The passive used throughout', 'Grammatical '
                     'Range and Accuracy'),
                    ('No opinion offered', 'Task Response')])],
   gram=dict(
    point='Time expressions for planning: ahead, in advance, by',
    explain='Use ahead and in advance after a period, and by before a '
            'deadline.',
    examples=['Performers are booked eleven months ahead.',
              'Residents are consulted in advance.',
              'Most tickets are sold by March.',
              'The site is cleared within two days.'],
    items=[('Performers are booked eleven months (ahead).',
            'Performers are booked eleven months ahead.'),
           ('Residents are consulted (in advance).',
            'Residents are consulted in advance.'),
           ('Most tickets are sold (by) March.',
            'Most tickets are sold by March.'),
           ('The site is cleared (within) two days.',
            'The site is cleared within two days.'),
           ('The review happens (within) a week.',
            'The review happens within a week.')],
    task='Complete each sentence with the time expression.'),
   vocab=[('grain', 'the seed of cereal plants'),
          ('wheat', 'a grain used to make flour'),
          ('virtue', 'a good quality'),
          ('requests', 'things asked for'),
          ('crop', 'plants grown for food'),
          ('long-term', 'lasting or looking a long way ahead'),
          ('understandable', 'able to be understood; reasonable'),
          ('grams', 'units of weight'),
          ('pharmacy', 'a shop where medicines are sold')],
   expr=[('By January people have tidied their memories.',
          'explaining why timing matters'),
         ('You get what nobody else wanted.',
          'describing the cost of booking late'),
         ('That is what buys you next year.',
          'naming the real return on an effort'),
         ('I have never once regretted it.',
          'endorsing a practice strongly')],
   trans=['after that', 'before', 'then', 'finally']),

  dict(
   sub='Traditions that change',
   step=3,
   read=[
    dict(heading='A festival that moved indoors',
         kind='Short factual article',
         task='Matching information and short answer',
         band='acad', qtype='Questions 49-55',
         paras=[
          'For a hundred and forty years a town in the north held a '
          'midwinter procession through its streets. In 2019 the route '
          'was declared unsafe: the crowd had grown, the street was '
          'narrow, and the insurance could not be obtained at any '
          'price. The organisers took the decision to move the event '
          'into a hall. Half the audience stopped coming, and a '
          'different half arrived.',
          'Those who stopped coming gave consistent reasons. The '
          'procession had been free, had required no ticket and no '
          'decision, and had been something you could join for ten '
          'minutes on your way home. Indoors it became an event you '
          'attended, with a start time and a seat. Several people said '
          'the same sentence: it had stopped being something the town '
          'did and become something the town watched.',
          'Those who arrived were equally consistent, and had not been '
          'coming before. Older residents said the hall was warm and '
          'had seats and a toilet. Parents of small children said that '
          'a cold street at nine at night had never been possible for '
          'them. Two people in wheelchairs attended for the first time '
          'in their lives, and one of them had lived in the town for '
          'sixty years.',
          'The committee\u2019s report refused to call the alteration good '
          'or bad, and this is the part worth noticing. It observed '
          'that the procession had been open to anybody who could '
          'stand in a cold narrow street for an hour. The hall, by '
          'contrast, was open to anybody who could buy a ticket for a '
          'seat. Both conditions exclude people. The committee asked '
          'which exclusion the town preferred, and reported that it '
          'could not get agreement on an answer, which it considered '
          'the honest result.'],
         items=[
          ('The procession had run for ____________ and forty years.',
           None, 'a hundred', 'Paragraph 1: it ran until 2019 in the streets.'),
          (
           'The route was declared unsafe because the crowd had '
           '____________.', None, 'grown',
           'Paragraph 1, and insurance could not be obtained.'),
          ('Those who stopped coming said it had become something the '
           'town ____________.', None, 'watched',
           'Paragraph 2, rather than something it did.'),
          ('Which group mentioned warmth and seats?',
           ['parents', 'older residents', 'wheelchair users',
            'former attenders'], 1,
           'Paragraph 3, among those who newly arrived.'),
          ('Two people in ____________ attended for the first time.',
           None, 'wheelchairs',
           'Paragraph 3, one after sixty years in the town.'),
          ('The report said both arrangements ____________ people.',
           None, 'exclude',
           'Paragraph 4: the street and the hall each exclude '
           'somebody.'),
          ('The committee could not get ____________ on an answer.',
           None, 'agreement',
           'Paragraph 4, on which exclusion the town preferred.')])],
   listen=[
    dict(heading='Two residents disagree about a changed custom',
         part='Part 3',
         task='A discussion between two residents', band='l3',
         qtype='Questions 56-61',
         script=[
          ('Chair', 'You both wrote to the committee and you disagree. '
           'Short and specific, please.'),
          ('Hugh', 'The procession was the town. Walking up the same '
           'street in the cold with people you half know is not a '
           'performance. In the hall it is a performance.'),
          ('Nadia', 'I accept all of that and I still think the move '
           'was right. I have never been able to come. A cold street at '
           'nine at night with a wheelchair is not a thing I was '
           'choosing to avoid.'),
          ('Hugh', 'That is the part of the argument I cannot answer '
           'and do not try to.'),
          ('Nadia', 'And I would not pretend the hall is the same '
           'thing. It is not. Something was lost and I am not the one '
           'who lost it.'),
          ('Chair', 'Is there a third option?'),
          ('Hugh', 'A shorter procession on a wider street, with the '
           'hall afterwards. It costs more and the committee says the '
           'insurance is still difficult.'),
          ('Nadia', 'I would support that, and I would want the hall '
           'part to be the main event rather than an afterthought, '
           'because that is where I would be.'),
          ('Hugh', 'Then we are arguing about which half is the '
           'afterthought, which is a smaller argument than the one we '
           'started with.'),
          ('Chair', 'Put that sentence in the letter. It is the most '
           'useful thing either of you has said.')],
         items=[
          ('Hugh says in the hall the event becomes a '
           '____________.', None, 'performance',
           'Rather than something the town does.'),
          ('Nadia says she has never been able to ____________.',
           None, 'come', 'Because of a cold street and a '
           'wheelchair.'),
          ('Hugh says that is the part of the argument he cannot '
           '____________.', None, 'answer',
           'He concedes the point and does not try to.'),
          ('Nadia agrees that something was ____________.', None,
           'lost', 'Although she says she is not the one who lost it.'),
          ('Hugh proposes a shorter procession on a ____________ '
           'street.', None, 'wider',
           'A shorter route, with the hall afterwards.'),
          ('They end by arguing about which half is the '
           '____________.', None, 'afterthought',
           'Which the chair calls a smaller argument.')])],
   speak=dict(
    part='Part 3', focus='Change and tradition',
    sounds=[('Dates and months must be clear. Say the second of November, the '
             'first of May, the twenty-third of June.'),
            ('Months have fixed stress: NOvember on the second, DEcember on '
             'the second, JAnuary on the first.'),
            ('Where you quote a year, say it in two halves: nineteen eighty- '
             'four, twenty twenty-two.'),
            ('Practise one sentence: it happens on the second of November, '
             'every year.'),
            ('Record yourself describing a tradition. Listen to every date and '
             'number and check that each one is unmistakable.')],
    intro='Name what is gained and what is lost before you judge.',
    qs=['Should old customs change to include more people?',
        'What is lost when a tradition moves or stops?',
        'Who should decide whether a tradition changes?'],
    shape=[('answer', 'I think they should change, and I would not '
            'pretend nothing is lost.'),
           ('support', 'A procession in a cold street excludes '
            'anybody who cannot stand for an hour.'),
           ('support', 'A ticketed hall excludes anybody who cannot '
            'plan or pay.'),
           ('follow-up', 'So the real question is which exclusion a '
            'place prefers, and that is a question for the people '
            'excluded.')]),
   write=[
    dict(task='Task 2',
         heading='Should traditions change to include more people?',
         prompt='Some people think traditional events should be '
                'changed so that more people can take part. Others '
                'think changing them destroys what makes them '
                'valuable. Discuss both views and give your own '
                'opinion.',
         instruct='  Write at least 200 words in about 35 minutes.',
         lines=22, wband='essay',
         plan=('Change them, and say plainly what is lost',
               [('The case against changing',
                 ['an open street event has no ticket and no decision '
                  'in it',
                  'and moving it indoors turns participants into an '
                  'audience']),
                ('The case for changing',
                 ['the old form excluded anybody who could not stand '
                  'in the cold',
                  'including people who had lived in the town for '
                  'sixty years']),
                ('What an honest answer admits',
                 ['both forms exclude somebody',
                  'so the question is which exclusion a place '
                  'prefers'])]),
         model=[
          'When a traditional event is changed to include more people, '
          'the argument that follows is usually conducted as though one '
          'side were being sentimental and the other practical. Both '
          'sides are describing something real.',
          'Those who resist change are not only being nostalgic. A '
          'procession through a street has no ticket, no start time and '
          'no decision in it. You can join it for ten minutes on your '
          'way home, which means it belongs to the town rather than to '
          'an audience. Move it into a hall and it becomes an event '
          'people attend, and the difference is not small.',
          'Those who want change are describing something equally real. '
          'The old form was open only to people who could stand in a '
          'cold street for an hour. In one town, two wheelchair users '
          'attended for the first time after such a move, and one of '
          'them had lived there for sixty years. That is not a minor '
          'adjustment to who takes part.',
          'The honest conclusion is that both arrangements exclude '
          'somebody, and that the question is which exclusion a place '
          'prefers. I would change the event, because exclusion by '
          'physical ability is harder to defend than exclusion by '
          'habit. But I would say plainly what has been lost, rather '
          'than pretending that the new version is the old one with '
          'better heating.'],
         notes=['The opening refuses the usual framing of '
                'sentimental against practical.',
                'The example of the two wheelchair users does more '
                'work than any general claim could.',
                'The position is taken and the cost of it is admitted '
                'in the same paragraph.'],
         criterion=[('Both views described as real', 'Task '
                     'Response'),
                    ('A position with its cost admitted', 'Task '
                     'Response'),
                    ('Concrete example used as evidence', 'Task '
                     'Achievement'),
                    ('Accurate complex sentences', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Concession: while, whereas, even so',
    explain='Use while and whereas to balance two facts, and even so '
            'to continue after a concession.',
    examples=['While the hall is warmer, it is ticketed.',
              'The street was free, whereas the hall is not.',
              'Something was lost. Even so, the change was right.',
              'While I accept the loss, I support the move.'],
    items=[('(while) the hall is warmer, it is ticketed.',
            'While the hall is warmer, it is ticketed.'),
           ('The street was free, (whereas) the hall is not.',
            'The street was free, whereas the hall is not.'),
           ('Something was lost. (even so), the change was right.',
            'Something was lost. Even so, the change was right.'),
           ('(while) I accept the loss, I support the move.',
            'While I accept the loss, I support the move.'),
           ('He disagrees, (even so) he signed the letter.',
            'He disagrees; even so, he signed the letter.')],
    task='Write each sentence with the word given.'),
   vocab=[('carrots', 'orange root vegetables'),
          ('seventeen', 'the number 17'),
          ('weighs', 'has a weight of'),
          ('stem', 'the main stalk of a plant'),
          ('daytime', 'the hours of light'),
          ('administrative', 'to do with running an organisation'),
          ('conceals', 'hides'),
          ('constrained', 'limited or restricted')],
   expr=[('Half the audience stopped coming and a different half '
          'arrived.', 'describing a change in who attends'),
         ('It stopped being something the town did.',
          'naming what was lost'),
         ('That is the part I cannot answer.',
          'conceding a decisive point'),
         ('Which exclusion do you prefer?', 'reframing a choice '
          'honestly')],
   trans=['because', 'so', 'however', 'for example'])],

 technique=dict(
  title='Predicting the grammar of a gap',
  body='Foundation 1 taught you to decide what kind of word a gap '
       'needs: a number, a day, a thing. This page goes one level '
       'finer, because at this length the marks are lost in the '
       'grammar rather than in the meaning. Before you listen or read '
       'for the answer, look at the words on each side of the gap and '
       'decide four things. One: singular or plural? "There are two '
       '____" needs a plural, and writing the singular you heard is '
       'wrong even though you heard it. Two: is an article needed? '
       '"Exchange your ticket for ____" takes a noun with no article '
       'because the article is already there. Three: what part of '
       'speech fits? "The queue was ____ longer" needs a word like '
       'four or considerably, not a noun. Four: does the sentence need '
       'a verb form you must change? If the stem says "people are '
       '____ about it", the answer is an -ing or an adjective, not the '
       'infinitive you will hear. Doing this takes a few seconds for a '
       'whole set of questions and it converts answers you heard '
       'correctly into marks, which is the entire difference between '
       'the two kinds of candidate who both heard the recording.',
  panel=[('Singular or plural?',
          '"There are two ____" cannot take a singular.'),
         ('Is the article already there?',
          'Do not write a word the stem supplies.'),
         ('What part of speech fits?',
          'An adverb slot will not take a noun.'),
         ('Must I change the form I hear?',
          'The recording says it one way; the gap needs another.')],
  qs=['Does this gap need a singular or a plural?',
      'Is there already an article before the gap?',
      'What part of speech could go here?',
      'Will I have to change the form I hear?',
      'Does my answer make the sentence grammatical?'],
  task='Before answering the completion questions in cycles 1 and 3, '
       'write beside each gap the four decisions. Then compare your '
       'score with the sections where you did not.'),

 outlining=dict(
  title='The one-minute outline, then speak it',
  body='Foundation 1 taught the one-minute outline for Speaking Part '
       '2: four lines, two or three words each, one for each bullet. '
       'This page adds the half nobody practises, which is speaking '
       'from it. Here is the drill. Take any cue card in this book. '
       'Write your four lines in forty seconds. Then speak for two '
       'minutes with the paper visible but without reading it, and '
       'record yourself if you can. Listen back for three faults, '
       'which are the only three that matter at this level. First, '
       'running out early: almost always because the fourth bullet was '
       'treated as a formality rather than as the interesting one. '
       'Second, reading aloud: if your notes were sentences, you will '
       'do this, which is why the notes must be two or three words. '
       'Third, the long pause after bullet two, which happens when '
       'bullets two and three overlap and you have nothing left to '
       'say. Fix that one by checking your four lines for overlap '
       'before you start, which is the same test you have been '
       'applying to written plans since Foundation 1 unit 3. Do this '
       'with four different cue cards and the drill stops being '
       'necessary.',
  frame=('Describe a tradition in your family',
         [('What and when',
           ['same meal, same day, September',
            'rice, four hours, nobody loves it']),
          ('Why it works',
           ['marks when grandparents arrived',
            'nobody chooses it, which is the point'])]),
  qs=['Did I write words or sentences?',
      'Did I run out of time, and after which bullet?',
      'Did I read from the paper at any point?',
      'Do any two of my lines overlap?',
      'Did I leave time for the fourth bullet?'],
  task='Do the drill with four cue cards from this book. Record '
       'yourself and note which of the three faults you have.',
  answers=['running out early is usually a wasted fourth bullet',
           'reading aloud comes from writing sentences',
           'a long pause after bullet two means overlap',
           'the overlap test applies to speaking notes as well',
           'four cue cards is usually enough to fix all three']),

 candos=['I can read an event page for what I must bring and show',
         'I can compare three families and say what each values',
         'I can describe a chart with one clear exception',
         'I can predict the grammar a gap needs before answering',
         'I can speak for two minutes from four written words'],

 tip=('Most completion marks are lost after the answer has been heard '
      'correctly. Decide whether the gap needs a plural, an article '
      'and which part of speech before you write.'))
