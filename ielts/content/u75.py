# -*- coding: utf-8 -*-
"""Foundation 2, Unit 5 - Cities and Neighbourhoods.

Registering with a council, what makes a street work, a cycle route, how
a village became a suburb, and three answers to a housing shortage. The
prose here is plainer again: the sentences are shorter and the words
commoner than in the first units of the book.
"""

_HOMES = dict(kind='bar',
              title='Homes built in one town, by kind',
              sub='number completed, two periods',
              cats=['Houses', 'Flats', 'Converted', 'Social'],
              series=[('1995-2004', [820.0, 260.0, 90.0, 310.0]),
                      ('2005-2014', [410.0, 690.0, 240.0, 120.0])],
              ylab='homes')

_GROWN = dict(kind='map',
              title='Stokeford in 1930 and today',
              sub='two plans of the same village',
              panels=[
               ('1930',
                [(0.06, 0.06, 0.40, 0.14, 'Farmland', 'green'),
                 (0.54, 0.06, 0.40, 0.14, 'Farmland', 'green'),
                 (0.06, 0.32, 0.26, 0.16, 'Church', 'building'),
                 (0.37, 0.32, 0.24, 0.16, 'Twelve houses', 'building'),
                 (0.66, 0.32, 0.28, 0.16, 'Forge', 'building'),
                 (0.06, 0.60, 0.42, 0.15, 'Orchard', 'green'),
                 (0.54, 0.60, 0.40, 0.15, 'Station', 'building')],
                [(0.0, 0.26, 1.0, 0.26, 'Village street'),
                 (0.0, 0.84, 1.0, 0.84, 'Railway')]),
               ('Today',
                [(0.06, 0.06, 0.40, 0.14, 'Estate, 1960s', 'new'),
                 (0.54, 0.06, 0.40, 0.14, 'Estate, 1990s', 'new'),
                 (0.06, 0.32, 0.26, 0.16, 'Church', 'building'),
                 (0.37, 0.32, 0.24, 0.16, 'Twelve houses', 'building'),
                 (0.66, 0.32, 0.28, 0.16, 'Shops', 'new'),
                 (0.06, 0.60, 0.42, 0.15, 'School', 'new'),
                 (0.54, 0.60, 0.40, 0.15, 'Station', 'building')],
                [(0.0, 0.26, 1.0, 0.26, 'High Street'),
                 (0.0, 0.50, 1.0, 0.50, 'Bypass'),
                 (0.0, 0.84, 1.0, 0.84, 'Railway')])],
              key=[('Unchanged', 'building'), ('New or rebuilt', 'new'),
                   ('Open land', 'green')])

UNIT = dict(
 n=5, vol=8, level='A2-B1', band='4.0-4.5',
 theme='Cities and Neighbourhoods',
 opener=(
   'This unit is about the place you live and the people who decide '
   'what happens to it. You will register with a council, read what '
   'three residents say about their street, follow a new cycle route, '
   'compare a village in 1930 with the same place today, and read three '
   'answers to a housing shortage, none of which is painless. The '
   'technique page puts looking ahead and the paragraph loop together '
   'under time, which is the first page in this book with a clock on '
   'it.'),

 cycles=[
  dict(
   sub='Moving to a new area',
   step=1,
   read=[
    dict(heading='Welcome to Ashfield: new residents guide',
         kind='Council guide', task='Note completion',
         band='gt_short', qtype='Questions 1-5',
         skill=('A council guide is read for the deadline',
                ['Nearly every item has a time limit. Find all of them '
                 'first.',
                 'The questions ask what happens if you miss one, so '
                 'read the second sentence of each item.']),
         paras=[
          'Tell us you have moved within twenty-one days. You can do '
          'this online or at the office on Mill Street, which is open '
          'from nine until four on weekdays.',
          'Council tax is charged from the day you move in, not from '
          'the day you tell us. If you tell us late, the bill is the '
          'same, but you have less time to pay it.',
          'Register to vote separately. Being on the council tax list '
          'does not put you on the voting list, which surprises people '
          'every year and is the commonest complaint we receive.',
          'Bins are collected on different days in different streets. '
          'Your first collection date is on the card in this pack. '
          'Boxes for glass, paper and tins are delivered within ten '
          'working days of your telling us you have arrived.'],
         items=[
          ('You must tell the council within ____________ days.', None,
           'twenty-one', 'Online or at the Mill Street office.'),
          ('The office closes at ____________ on weekdays.', None,
           'four', 'It opens at nine in the morning.'),
          ('Council tax is charged from the day you ____________.',
           None, 'move in', 'Not from the day you tell the council.'),
          (
           'Registering for tax does not register you to ____________.',
           None, 'vote',
           'The tax list and the voting list are separate.'),
          ('Recycling boxes arrive within ____________ working days.',
           None, 'ten', 'After you tell the council you have '
           'arrived.')])],
   listen=[
    dict(heading='Registering with the council', part='Part 1',
         task='A conversation at a council office · note completion', band='l1',
         qtype='Questions 6-11',
         script=[
          ('Clerk', 'Good morning. How can I help?'),
          ('Resident', 'I moved in last week and I need to '
           'register.'),
          ('Clerk', 'Which street?'),
          ('Resident', 'Eleven Beside Lane, the terraced house at the '
           'eastern end.'),
          ('Clerk', 'Thank you. Did you move in on the first?'),
          ('Resident', 'The third.'),
          ('Clerk', 'Then council tax runs from the third. The band for '
           'that house is C, which is one thousand six hundred and '
           'forty a year.'),
          ('Resident', 'Can I pay monthly?'),
          ('Clerk', 'Over ten months or twelve. Twelve is the same '
           'total and a smaller payment, and most people choose it once '
           'they know.'),
          ('Resident', 'Twelve, please. And voting?'),
          ('Clerk', 'A separate form. I will give it to you now, '
           'because if I do not you will be back in October.'),
          ('Resident', 'What about bins?'),
          ('Clerk', 'Beside Lane is Thursday. Your boxes come within '
           'ten working days. Put them out by seven, not the night '
           'before, because of the foxes.'),
          ('Resident', 'One more thing. Is there a parking permit?'),
          ('Clerk', 'Not on Beside Lane. The restriction only covers '
           'the streets behind the station.')],
         items=[
          ('The resident moved in on the ____________.', None,
           'third', 'So council tax runs from that date.'),
          ('The house is in band ____________.', None, 'C',
           'At one thousand six hundred and forty a year.'),
          ('Paying over ____________ months gives a smaller payment.',
           None, 'twelve', 'And the same total as over ten.'),
          ('Voting needs a ____________ form.', None, 'separate',
           'Which the clerk hands over immediately.'),
          ('Bins on Beside Lane are collected on ____________.', None,
           'Thursday', 'And must be out by seven in the morning.'),
          ('The parking ____________ covers only the streets behind '
           'the station.', None, 'restriction',
           'So Beside Lane needs no permit.')])],
   speak=dict(
    part='Part 1', focus='The area where you live',
    intro='Describe the area, not the flat. Two or three sentences.',
    qs=['What is the area where you live like?',
        'How long have you lived there?',
        'What is good about it?',
        'What would you change?'],
    shape=[('answer', 'It is a street of terraced houses about ten '
            'minutes from the station.'),
           ('support', 'The good part is that almost everything is '
            'walkable, including the school and two shops.'),
           ('follow-up', 'What I would change is the parking, which '
            'takes up both sides of a narrow street.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Writing to the council about a missing collection',
         prompt='Your recycling boxes have not arrived. Write to the '
                'council. In your letter: give your details; explain '
                'the problem; say what you would like them to do.',
         instruct='  Write at least 110 words in about 20 minutes.',
         lines=13,
         model=[
          'Dear Sir or Madam,',
          'I registered as a new resident at 11 Beside Lane on 3 '
          'April, reference AF2219, and I was told that recycling '
          'boxes would arrive within ten working days.',
          'It is now 2 May and no boxes have been delivered. I have '
          'telephoned twice. On the first occasion I was told they '
          'were on their way, and on the second that the record showed '
          'them as delivered, which they have not been.',
          'Could you arrange delivery this week, and could somebody '
          'confirm by email rather than by telephone, so that there is '
          'a record? In the meantime I am putting recycling out in '
          'ordinary bags, which I understand is not collected.',
          'Yours faithfully,',
          'T. Baptiste'],
         notes=['The reference and the date come first, which is what '
                'makes a complaint actionable.',
                'The history of the two calls is given briefly, '
                'because it stops the council repeating the same '
                'answer.',
                'The request names a method as well as an action, and '
                'gives the reason for it.'],
         criterion=[('Reference and dates given', 'Task Achievement'),
                    ('The history summarised briefly', 'Task '
                     'Response'),
                    ('A clear, practical request', 'Task '
                     'Achievement'),
                    ('Formal register throughout', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='Present perfect with yet, already and still',
    explain='Use yet in questions and negatives at the end, already in '
            'statements, and still before the negative verb.',
    examples=['The boxes have not arrived yet.',
              'I have already telephoned twice.',
              'They still have not been delivered.',
              'Have you registered yet?'],
    items=[('The boxes (not arrive) ____.',
            'The boxes have not arrived yet.'),
           ('I (telephone) ____ twice.',
            'I have already telephoned twice.'),
           ('They ____ (not be) delivered.',
            'They still have not been delivered.'),
           ('(you / register) ____?', 'Have you registered yet?'),
           ('We (not receive) the card ____.',
            'We have not received the card yet.')],
    task='Write each sentence with yet, already or still.'),
   vocab=[('detail', 'a small fact or item'),
          ('urgent', 'needing attention at once'),
          ('crisis', 'a time of great difficulty'),
          ('construction', 'the building of something'),
          ('beside', 'next to'),
          ('relief', 'the feeling when a worry ends; or help given'),
          ('structure', 'the way parts are arranged; a building'),
          ('eastern', 'of or in the east'),
          ('primary', 'first or most important')],
   expr=[('I moved in last week.', 'opening at a council desk'),
         ('Can I pay monthly?', 'asking about payment terms'),
         ('A separate form, I am afraid.', 'explaining an extra '
          'step'),
         ('Put them out by seven, not the night before.',
          'giving a local rule with its reason')],
   trans=['and', 'then', 'but', 'so']),

  dict(
   sub='What makes a good neighbourhood',
   step=2,
   read=[
    dict(heading='Three residents on their street',
         kind='Three short profiles', task='Matching features and sentence completion',
         band='gt_work', qtype='Questions 12-17',
         paras=[
          'Yvette has lived on the street for thirty years and says the '
          'change that mattered was not a building. It was the bus '
          'route. When the route moved two streets away in 2011, the '
          'older residents stopped going into town daily and started '
          'going weekly, and the shops at the near end closed within '
          'four years.',
          'Mo moved in two years ago and says the street works for him '
          'because of one thing: the primary school is on it. He knows '
          'about sixty people by sight because of the gate at nine and '
          'at three. He is clear that this is luck rather than design, '
          'and that the same street without the school would be a place '
          'he slept in.',
          'Dilek is opposed to the new flats at the eastern end and '
          'wants to say why carefully. She is not against more homes. '
          'She is against five storeys with no extra school places and '
          'no second bus, which is what has been approved. Her view is '
          'that objectors are usually treated as people who want '
          'nothing built, and that this is a convenient way of not '
          'answering them.'],
         items=[
          ('Who has lived on the street longest?',
           ['Yvette', 'Mo', 'Dilek', 'all the same'], 0,
           'Yvette has lived there thirty years.',
           {1: 'Mo moved in two years ago.', 2: 'Dilek\u2019s length of residence is not given.', 3: 'Yvette has been there far longer than Mo.'}),
          ('Who values the street because of the school?',
           ['Yvette', 'Mo', 'Dilek', 'none of them'], 1,
           'He knows sixty people by sight because of it.',
           {0: 'Yvette values the bus route, not the school.', 2: 'Dilek is concerned with the new flats.', 3: 'Mo values the street because of the school.'}),
          (
           'Yvette says the street changed when the ____________ '
           'moved.', None, 'bus route',
           'It moved two streets away in 2011.'),
          ('The shops at the near end closed within ____________ '
           'years.', None, 'four', 'They closed after the bus route moved.'),
          ('Dilek is against five storeys with no extra school places '
           'and no second ____________.', None, 'bus',
           'Which is what has been approved.'),
          ('Dilek says objectors are treated as people who want '
           '____________ built.', None, 'nothing',
           'Which she calls a way of not answering them.')])],
   listen=[
    dict(heading='Two neighbours discuss the new flats', part='Part 3',
         task='A discussion between two neighbours · note completion', band='l3',
         qtype='Questions 18-23',
         script=[
          ('Chair', 'You two are on opposite sides of this. Keep it '
           'short and keep it specific.'),
          ('Sara', 'I am for it. We have four hundred people on the '
           'housing list in this town and eleven homes built last '
           'year.'),
          ('Paul', 'I accept both numbers. My objection is not the '
           'flats. It is five storeys with no school places and no '
           'second bus.'),
          ('Sara', 'The school has thirty spare places.'),
          ('Paul', 'This year. The estate behind us has forty children '
           'under four.'),
          ('Sara', 'That is a fair point and I had not checked it.'),
          ('Chair', 'What would change your position, Paul?'),
          ('Paul', 'A classroom and a bus, written into the permission '
           'rather than promised beside it. I have watched three '
           'promises of that kind disappear since 2009.'),
          ('Sara', 'I would accept that condition, and I would want it '
           'to have a date attached.'),
          ('Paul', 'Then we agree, and the disagreement was never '
           'really about the building.'),
          ('Chair', 'Which is usually what these meetings find out '
           'at the end rather than the beginning.'),
          ('Sara', 'Can I add one thing? The four hundred people on '
           'the list are not an abstraction. Thirty of them work in '
           'this town and live in the next one because they cannot '
           'afford to live here.'),
          ('Paul', 'I know two of them. That is why I am not objecting '
           'to the flats.'),
          ('Chair', 'Then write the condition together and bring it to '
           'the next meeting, and we will put it to the council as one '
           'proposal rather than two objections.')],
         items=[
          ('There are ____________ people on the housing list.', None,
           'four hundred', 'Against eleven homes built last year.'),
          ('Paul objects to five storeys with no school places and no '
           'second ____________.', None, 'bus',
           'Rather than to the flats themselves.'),
          ('The school has ____________ spare places this year.', None,
           'thirty', 'Which Paul says will not last.'),
          ('The estate behind has ____________ children under four.',
           None, 'forty', 'A figure Sara admits she had not checked.'),
          ('Paul wants a classroom and a bus written into the '
           '____________.', None, 'permission',
           'Rather than promised beside it.'),
          ('Sara would want the condition to have a ____________ '
           'attached.', None, 'date',
           'At which point the two of them agree.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='A place that changed',
    longturn=[('I am going to talk about a place that has changed. It is the '
               'area around the railway station in my city.'),
              ('Before, when I was at school, it was somewhere you did not '
               'walk at night. There were two hotels that were almost empty, a '
               'long wall with nothing behind it, and a car park on land where '
               'a factory had been pulled down.'),
              ('What changed was a decision to build on the car park. There '
               'are now about four hundred flats there, a supermarket, a '
               'square with trees, and a school that opened last year. The '
               'whole thing took about eight years and it is still not quite '
               'finished.'),
              ('Was the change good? For the city, yes, clearly. Four hundred '
               'households live within five minutes of a station, '
               'which is exactly where people should live, and the '
               'area is busy in the evening instead of empty. But the '
               'flats are expensive, and the people who used to rent '
               'cheaply in the two streets behind have mostly gone '
               'somewhere else, because their rents rose as well. '
               'Nobody planned that, and nobody was responsible for '
               'it, and nobody mentions it when the project is '
               'described as a success.')],
    intro=('One minute, four lines. One place, one change, described '
           'concretely.'),
    cue=('Describe a place you know that has changed.',
         ['say what it was like before',
          'say what changed',
          'say whether the change was good',
          'and explain who the change was for']),
    qs=['How long have you lived where you live now?',
        'Is your area quiet or busy?',
        'What is the best thing about it?',
        'Now look at the card. You have one minute to make notes.',
        'Do you go there as often as you did?',
        'What would you change back?'],
    shape=[('answer', 'The street where I grew up has changed a great '
            'deal in twenty years.'),
           ('support', 'It had two shops, a post office and a bus that '
            'ran along it every ten minutes.'),
           ('support', 'The bus route moved two streets away and the '
            'shops closed within about four years.'),
           ('follow-up', 'I would not call it good or bad: the houses '
            'are worth more and the street is less useful.')]),
   write=[
    dict(task='Task 2',
         heading='Should new housing be built on open land?',
         prompt='Some people think new homes should be built on open '
                'land outside towns. Others think towns should build '
                'on land that has already been used. Discuss both '
                'views and give your own opinion.',
         instruct='  Write at least 200 words in about 35 minutes.',
         lines=22, wband='essay',
         plan=('Build on used land first, and make the conditions '
               'enforceable',
               [('The case for open land is speed and cost',
                 ['it is cheaper and quicker to build on an empty '
                  'field',
                  'and a housing list of four hundred is a real '
                  'problem now']),
                ('The case for used land is what it saves',
                 ['the roads, pipes and schools already exist',
                  'so each home costs the public less than it looks']),
                ('The condition that decides it',
                 ['extra homes need extra school places and buses',
                  'and those must be in the permission, not promised '
                  'beside it'])]),
         model=[
          'Towns that need more homes can build on open land outside '
          'them or on land inside them that has been used before. Both '
          'choices have a real argument behind them.',
          'Building on open land is quicker and cheaper. An empty field '
          'has nothing to clear and nothing to work around, and a town '
          'with four hundred families on its housing list cannot treat '
          'speed as unimportant. Any argument against it has to accept '
          'that delay is itself a cost paid by people who are waiting.',
          'Building inside the town saves things that are easy to '
          'overlook. The roads, the water pipes and the schools are '
          'already there. A home built where those exist costs the '
          'public far less than one built where a new road and new '
          'pipes must be laid, even if the land itself costs more.',
          'For me the question turns on a condition rather than on the '
          'site. New homes bring children and journeys, and the places '
          'they need have to be part of the permission rather than '
          'promised next to it. Where a scheme includes a classroom and '
          'a bus service with a date attached, I would support it on '
          'either kind of land. Where it does not, I would oppose it on '
          'both.',
          'That is a narrower disagreement than the one usually had, '
          'and it is the one that actually decides whether a street '
          'works afterwards.'],
         notes=['Both sides are given their strongest argument, and '
                'the first one includes the cost of delay.',
                'The writer’s position is a condition rather than '
                'a site, which answers both sides at once.',
                'The last sentence says what the argument should be '
                'about, which is a stronger ending than a summary.'],
         criterion=[('Both views discussed properly', 'Task '
                     'Response'),
                    ('A position that applies to both sites', 'Task '
                     'Response'),
                    ('Concrete conditions named', 'Task '
                     'Achievement'),
                    ('Accurate conditional sentences', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Agreeing and disagreeing in writing',
    explain='Use I accept that, it is true that and while to concede, '
            'and however or but to turn.',
    examples=['I accept that building on fields is quicker.',
              'It is true that the list is long.',
              'While the land is cheaper, the roads are not.',
              'However, the schools are already there.'],
    items=[('(I accept) building on fields is quicker.',
            'I accept that building on fields is quicker.'),
           ('(it is true) the list is long.',
            'It is true that the list is long.'),
           ('(while) the land is cheaper, the roads are not.',
            'While the land is cheaper, the roads are not.'),
           ('(however) the schools are already there.',
            'However, the schools are already there.'),
           ('(I accept) delay has a cost.',
            'I accept that delay has a cost.')],
    task='Write each sentence with the phrase given.'),
   vocab=[('elected', 'chosen by a vote'),
          ('labour', 'work, especially hard physical work'),
          ('opposed', 'against something'),
          ('railway', 'a track for trains, and the system using it'),
          ('batteries', 'devices that store electrical power'),
          ('views', 'opinions, or what can be seen from a place'),
          ('poisonous', 'causing harm or death if taken in'),
          ('obtain', 'to get'),
          ('pets', 'animals kept at home for company')],
   expr=[('My objection is not the flats.', 'narrowing an '
          'objection'),
         ('That is a fair point and I had not checked it.',
          'conceding gracefully'),
         ('What would change your position?',
          'asking for a falsifying condition'),
         ('Written in rather than promised beside it.',
          'demanding a binding condition')],
   trans=['also', 'too', 'and', 'but']),

  dict(
   sub='Getting around the city',
   step=3,
   read=[
    dict(heading='The new cycle route: a map and key',
         kind='Route description', task='Note completion and short answer',
         band='gt_work', qtype='Questions 24-29',
         skill=('A route description is read in the order you would '
                'travel it',
                ['Follow it with a finger. The order of the text is '
                 'the order of the journey.',
                 'Junctions and crossings are where the questions '
                 'are.']),
         paras=[
          'The route begins at the station and runs north along Mill '
          'Street, where it is a painted lane beside the traffic for '
          'the first four hundred metres.',
          'At the market it leaves the road and becomes a separate '
          'path, with bricks on the surface to make the change obvious. '
          'This section passes the school and is restricted to walkers '
          'between half past eight and nine.',
          'The route crosses the bypass on a bridge rather than at the '
          'junction. The bridge was the most expensive part of the '
          'scheme and the part that objectors said would not be used. '
          'Counts in the first year recorded about nine hundred '
          'crossings a day.',
          'After the bridge the route follows the old railway north to '
          'the edge of the farmland. The surface there is loose stone '
          'and is the one section that is poor in winter.'],
         items=[
          ('The route begins at the ____________.', None, 'station',
           'And runs north along Mill Street.'),
          ('For the first ____________ metres it is a painted lane.',
           None, 'four hundred', 'Beside the traffic on Mill Street.'),
          ('At the market the surface changes to ____________.', None,
           'bricks', 'The surface changes to make it obvious.'),
          ('The section by the school is restricted to walkers until '
           '____________.', None, 'nine',
           'From half past eight in the morning.'),
          ('The route crosses the bypass on a ____________.', None,
           'bridge', 'On a bridge rather than at the junction.'),
          ('Which section of the route is poor in winter?', None,
           'the old railway', 'Where the surface is loose stone.')])],
   listen=[
    dict(heading='Describing the new route', part='Part 2',
         task='One speaker describing a scheme · note completion', band='l2',
         qtype='Questions 30-35',
         script=[
          ('Speaker', 'I will take you along the route from the station '
           'and tell you what we got right and what we did not.'),
          ('Speaker', 'The first four hundred metres is a painted lane '
           'beside the traffic. That is the worst part of the scheme '
           'and we knew it when we built it. A painted line is not '
           'protection; it is a suggestion.'),
          ('Speaker', 'At the market it becomes a separate path. The '
           'surface changes to brick, which sounds like decoration and '
           'is not: people understand a change of surface without '
           'reading a sign, and we have almost no conflict on that '
           'section.'),
          ('Speaker', 'The bridge over the bypass is the part we were '
           'told would be a waste. It cost more than the rest of the '
           'scheme together. It carries about nine hundred crossings a '
           'day, which is roughly nine times what the objectors '
           'predicted and about what we predicted.'),
          ('Speaker', 'The last section follows the old railway and the '
           'surface is loose stone, because we ran out of money. In '
           'winter it is poor, and the count on that section drops by '
           'half between October and March.'),
          ('Speaker', 'The lesson for your own schemes is that the '
           'expensive bit is usually the bit that decides whether '
           'anybody uses it. Cheap schemes that stop at the difficult '
           'junction are not cheap. They are nothing, at a low '
           'price.')],
         items=[
          ('The first ____________ metres is a painted lane.', None,
           'four hundred', 'Which the speaker calls the worst part.'),
          ('The speaker says a painted line is a ____________, not '
           'protection.', None, 'suggestion',
           'And they knew it when it was built.'),
          ('At the market the surface changes to ____________.', None,
           'brick', 'Which people understand without a sign.'),
          ('The bridge carries about ____________ crossings a day.',
           None, 'nine hundred',
           'Nine times what the objectors predicted.'),
          ('The count on the last section drops by ____________ in '
           'winter.', None, 'half',
           'Because the surface is loose stone.'),
          ('Schemes that stop at the difficult junction are '
           '____________, at a low price.', None, 'nothing',
           'Which is the speaker’s closing lesson.')])],
   speak=dict(
    part='Part 2 into Part 3', focus='Getting around a town',
    intro=('Card first, and the last bullet is the one that earns the '
           'band: it asks you to explain rather than to list. After the '
           'long turn the discussion opens: give a view, a reason and a '
           'specific example from where you live.'),
    cue=('Describe a walk you often take.',
         ['say where you walk',
          'say how long it takes',
          'say what you see',
          'and explain why you take that route']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Do you walk alone?',
        'Has the route changed?',
        'How easy is it to get around your town without a car?',
        'Should cities spend more on cycling?',
        'What makes people change how they travel?'],
    shape=[('answer', 'It is easy in the centre and difficult at the '
            'edges, which is the usual pattern.'),
           ('support', 'The cycle route near me stops at a junction, '
            'and that junction is the reason most people do not use '
            'it.'),
           ('support', 'A scheme that stops where it gets difficult '
            'has spent money and bought nothing.'),
           ('follow-up', 'What changes behaviour is the hardest part '
            'being fixed, not the easy parts being extended.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Homes built in one town, by kind',
         figure=_HOMES,
         prompt='The chart shows the homes built in one town in two '
                'ten-year periods. Describe the chart and compare the '
                'periods.',
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=17,
         model=[
          'The chart shows how many homes of four kinds were completed '
          'in one town in two ten-year periods.',
          'The pattern changed almost completely between the two. In '
          'the first period houses were the largest category by far, at '
          'eight hundred and twenty, with flats second at two hundred '
          'and sixty. In the second period flats were the largest, at '
          'six hundred and ninety, and houses had fallen to four '
          'hundred and ten.',
          'Conversions rose from ninety to two hundred and forty, while '
          'social housing fell from three hundred and ten to a hundred '
          'and twenty.',
          'In total the town completed one thousand four hundred and '
          'eighty homes in the first period and one thousand four '
          'hundred and sixty in the second, so the number built barely '
          'changed while the kind of home built changed entirely.'],
         notes=['The headline is the change in the pattern, not any '
                'single figure, and it is stated first.',
                'Every category is given with both figures.',
                'The totals are calculated, which produces the '
                'sentence the chart is really for.'],
         criterion=[('All four categories, both periods', 'Task '
                     'Achievement'),
                    ('The overall change identified first', 'Task '
                     'Response'),
                    ('Totals or another calculation', 'Task '
                     'Response'),
                    ('Large numbers written correctly', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Passive for schemes and decisions',
    fix=dict(
     text=('A new square was built in the centre of the town in 2019. The old '
           'car park has demolished the year before. Four hundred flats were '
           'building on the site between 2019 and 2023. A school was opened '
           'last year, and the whole scheme is still not quite finished. The '
           'two streets behind the station did not changed.'),
     faults=[('The old car park has demolished',
              'The old car park had been demolished',
              ('The car park did not demolish anything. The passive needs '
               'been, and the earlier event needs had.')),
             ('Four hundred flats were building on the site',
              'Four hundred flats were built on the site',
              ('Were building means they were doing the building. The passive '
               'is were built.')),
             ('The two streets behind the station did not changed',
              'The two streets behind the station did not change',
              ('After did not the verb goes back to its plain form: did not '
               'change.'))]),
    explain='Use the passive when the decision matters more than who '
            'made it, which is most of the time in this subject.',
    examples=['The bridge was built in 2016.',
              'The scheme was approved without a bus.',
              'The section is restricted to walkers until nine.',
              'The surface was changed to brick.'],
    items=[('They built the bridge in 2016.',
            'The bridge was built in 2016.'),
           ('The council approved the scheme.',
            'The scheme was approved.'),
           ('They restrict the section until nine.',
            'The section is restricted until nine.'),
           ('They changed the surface to brick.',
            'The surface was changed to brick.'),
           ('Somebody counted nine hundred crossings.',
            'Nine hundred crossings were counted.')],
    task='Write each sentence in the passive.'),
   vocab=[('bricks', 'blocks used for building'),
          ('restricted', 'limited or controlled'),
          ('organised', 'arranged or planned'),
          ('acute', 'severe or sharp'),
          ('bulbs', 'glass parts that give light; or plant parts'),
          ('deduction', 'a conclusion drawn from facts'),
          ('farmland', 'land used for farming'),
          ('fifteenth', 'number fifteen in an order'),
          ('fittings', 'the fixed parts inside a building')],
   expr=[('A painted line is a suggestion, not protection.',
          'judging a design plainly'),
         ('People understand a change of surface without a sign.',
          'explaining why something works'),
         ('Nine times what the objectors predicted.',
          'comparing a forecast with a result'),
         ('Nothing, at a low price.', 'dismissing a false economy')],
   trans=['first', 'next', 'then', 'finally']),

  dict(
   sub='How a town grows',
   step=3,
   read=[
    dict(heading='Stokeford, 1930 and today',
         kind='Short factual article',
         task='Note completion and matching information',
         band='acad', qtype='Questions 36-42',
         paras=[
          'In 1930 Stokeford was a village of twelve houses, a church, '
          'a forge and a station. The farmland came up to the back of '
          'the houses on both sides. Today about four thousand people '
          'live there. The church and the twelve houses are still '
          'standing, and almost nothing else from the 1930 plan '
          'remains.',
          'The station is why it grew, and the growth did not begin '
          'until the trains became frequent. A village with four trains '
          'a day stays a village. A village with two an hour becomes a '
          'place where people live and work somewhere else, and that '
          'change happened here in the 1950s.',
          'The first estate went up in the 1960s on the northern '
          'farmland, and the second in the 1990s on the other side. '
          'Both were built outward from the old street rather than '
          'along the railway, which is why the walk from the newer '
          'houses to the station takes fifteen minutes. The orchard '
          'became the school, and the forge became a row of shops.',
          'The bypass arrived in 1998 and did two things at once. It '
          'took the through traffic out of the High Street, which made '
          'the centre pleasant for the first time in forty years. It '
          'also cut the village off from the fields on the southern '
          'side. The footpaths that crossed them are now reached by a '
          'single underpass that nobody enjoys using after dark.',
          'What the two plans do not show is how the people changed. '
          'In 1930 almost everybody who lived here worked within a '
          'mile of the church. Today most people leave the village in '
          'the morning and come back in the evening, and the shops '
          'that are busy are the ones beside the station rather than '
          'the ones in the middle.'],
         items=[
          ('In 1930 the village had ____________ houses.', None,
           'twelve', 'Paragraph 1, with a church, forge and station.'),
          ('About ____________ thousand people live there today.',
           None, 'four', 'Paragraph 1, and the church still stands.'),
          ('Growth began when the trains became ____________.', None,
           'frequent', 'Paragraph 2: this happened in the 1950s.'),
          (
           'Which paragraph explains why the walk to the station is '
           'long?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4'], 1,
           'The estates were built outward rather than along the '
           'railway.',
           {0: 'Paragraph 2 is about what the village had in 1930.', 2: 'Paragraph 4 is about where people shop now.'}),
          ('The orchard became the ____________.', None, 'school',
           'Paragraph 3, and the forge became shops.'),
          ('The bypass arrived in ____________.', None, '1998',
           'Paragraph 4, and did two things at once.'),
          ('The fields on the southern side are now reached by a '
           'single ____________.', None, 'underpass',
           'Paragraph 4, which nobody enjoys after dark.')])],
   listen=[
    dict(heading='A local historian on the village', part='Part 4',
         task='A talk to a local society · note completion', band='l4',
         qtype='Questions 43-48',
         script=[
          ('Speaker', 'People ask me when Stokeford stopped being a '
           'village. I can give you a date, and it is not the date of '
           'any building.'),
          ('Speaker', 'It is 1953, when the train service went from '
           'four a day to two an hour. Everything else follows from '
           'that. A village with four trains is a place where people '
           'live and work. A village with two an hour is a place where '
           'people live and work elsewhere, and that is a different '
           'kind of settlement with the same buildings in it.'),
          ('Speaker', 'The estates came in the sixties and the '
           'nineties. Notice where they were put: outward from the old '
           'street, not along the line. That decision was made by '
           'whoever owned the fields, not by anybody planning a town, '
           'and it is why half the village is a fifteen-minute walk '
           'from the station it exists because of.'),
          ('Speaker', 'The bypass in 1998 is the most argued-about '
           'thing here, and both sides are right. The High Street '
           'became pleasant. The southern footpaths became unreachable '
           'except by one underpass, and the use of those paths has '
           'fallen by about eighty per cent.'),
          ('Speaker', 'What I want you to take away is this. The three '
           'changes that shaped this village were a timetable, a '
           'landowner and a road. Not one of them was a decision about '
           'what kind of place this should be, and that is the normal '
           'case rather than the exception.')],
         items=[
          ('The speaker dates the change to ____________.', None,
           '1953', 'When the train service changed.'),
          ('The service went from four a day to ____________ an '
           'hour.', None, 'two',
           'Which changed the kind of settlement.'),
          ('The estates were built ____________ from the old street.',
           None, 'outward', 'Rather than along the railway line.'),
          ('That decision was made by whoever owned the '
           '____________.', None, 'fields',
           'Not by anybody planning a town.'),
          ('Use of the southern footpaths has fallen by about '
           '____________ per cent.', None, 'eighty',
           'Since the bypass was built in 1998.'),
          ('The three changes were a timetable, a landowner and a '
           '____________.', None, 'road',
           'None of them a decision about the place itself.')])],
   speak=dict(
    part='Part 2 into Part 3', focus='How places change',
    intro=('Start with the card. Notes for a minute, then talk, developing '
           'each bullet instead of adding bullets of your own. The '
           'discussion follows: name the cause, then the effect, then your '
           'judgement.'),
    cue=('Describe a new building or road near where you live.',
         ['say what it is',
          'say when it was built',
          'say what was there before',
          'and explain what people say about it']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Do you use it?',
        'Was anybody asked about it first?',
        'What makes a village become a town?',
        'Should people be able to stop building near them?',
        'Is it better to live in a place that is growing?'],
    shape=[('answer', 'Usually transport rather than any decision '
            'about the place.'),
           ('support', 'A village with four trains a day stays a '
            'village; one with two an hour does not.'),
           ('support', 'Where the new houses go is often decided by '
            'who owns the fields.'),
           ('follow-up', 'So I would give people a say about '
            'conditions rather than a veto over building.')]),
   write=[
    dict(task='Task 1', fork='A', heading='Stokeford in 1930 and today',
         figure=_GROWN,
         prompt='The two plans show a village in 1930 and today. '
                'Describe the main changes.',
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=17,
         model=[
          'The two plans show the same village in 1930 and in the '
          'present day.',
          'The largest change is that the farmland at the north and the '
          'orchard in the south have been built on. Two housing '
          'estates now occupy the northern land, one from the 1960s and '
          'one from the 1990s, and the orchard has become a school.',
          'In the centre, the church and the twelve houses are '
          'unchanged, while the forge has been replaced by a row of '
          'shops. The village street has become the High Street, and a '
          'bypass has been built across the southern half of the site.',
          'The station is in the same position on both plans. The '
          'village has therefore grown outward around a centre that has '
          'hardly altered, and the only entirely new line on the plan '
          'is the bypass.'],
         notes=['The biggest change is stated first and the detail '
                'follows, which is the right order for a '
                'before-and-after pair.',
                'What has not changed is given its own sentence, '
                'because that is half the comparison.',
                'The closing sentence describes the shape of the '
                'growth rather than listing another building.'],
         criterion=[('The main changes identified', 'Task '
                     'Achievement'),
                    ('Unchanged features stated', 'Task '
                     'Achievement'),
                    ('Compass directions used', 'Grammatical Range '
                     'and Accuracy'),
                    ('A closing observation', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='Present perfect passive for change',
    explain='Use has been or have been plus the past participle for a '
            'change whose result we see now.',
    examples=['The farmland has been built on.',
              'The forge has been replaced by shops.',
              'Two estates have been added.',
              'The footpaths have been cut off.'],
    items=[('Somebody has built on the farmland.',
            'The farmland has been built on.'),
           ('They have replaced the forge with shops.',
            'The forge has been replaced by shops.'),
           ('They have added two estates.',
            'Two estates have been added.'),
           ('The bypass has cut off the footpaths.',
            'The footpaths have been cut off.'),
           ('They have turned the orchard into a school.',
            'The orchard has been turned into a school.')],
    task='Write each sentence in the present perfect passive.'),
   vocab=[('five-storey', 'having five floors'),
          ('government-backed', 'supported by the government'),
          ('house-hunting', 'looking for somewhere to live'),
          ('incomplete', 'not finished'),
          ('indefinitely', 'for an unlimited time'),
          ('indirectly', 'not in a direct way'),
          ('objectors', 'people who formally oppose something'),
          ('outward', 'towards the outside')],
   expr=[('I can give you a date.', 'offering a precise answer'),
         ('Everything else follows from that.',
          'identifying a cause'),
         ('Both sides are right.', 'refusing a false choice'),
         ('Not one of them was a decision about the place.',
          'summing up a pattern')],
   trans=['after that', 'before', 'then', 'finally']),

  dict(
   sub='Too many people, too little space',
   step=3,
   read=[
    dict(heading='Three answers to a housing shortage',
         kind='Short factual article',
         task='Short answer, note completion and matching features',
         band='acad', qtype='Questions 49-55',
         paras=[
          'Every town with a housing shortage has the same three '
          'answers available, and each of them costs something that '
          'somebody does not want to pay. The first is to build '
          'outward, on open land at the edge. It is quick and it is '
          'cheap to build. The cost is that each new home needs a road, '
          'pipes and a bus route that do not yet exist, and those are '
          'paid for by everybody rather than by the buyer.',
          'The second is to build upward, on land inside the town that '
          'has been used before. The roads and pipes are already '
          'there, so the public cost per home is much lower. The cost '
          'here is that building among existing homes is slow, and '
          'that it meets opposition from the people already living '
          'there. The sites are small, so a hundred of them are needed '
          'to do what one field does.',
          'The third answer is the one that is least discussed: use '
          'the homes that exist. A town with a shortage usually has '
          'empty rooms in it, in houses too large for the people left '
          'in them. Taxes, grants and conversions can move some of '
          'that space, and every home it releases is free in terms of '
          'land consumption. The cost is that it means telling people '
          'what to do with their own property, which is why almost no '
          'town tries it seriously.',
          'Nobody can avoid choosing. A town that refuses all three '
          'answers has made the fourth decision by default, which is '
          'that prices keep rising and the people who would have moved '
          'there simply do not. That choice is invisible, costs '
          'nothing today, and is the one most places are actually '
          'making.'],
         items=[
          ('How many answers does the writer describe?', None, 'three',
           'Paragraph 1, plus a fourth that is a refusal.'),
          ('Building outward is quick and cheap to ____________.',
           None, 'build', 'Paragraph 1, but needs new roads and '
           'pipes.'),
          ('Which answer has a lower public cost per home?',
           ['building outward', 'using existing homes', 'building upward', 'doing nothing'],
           2, 'Paragraph 2: the roads and pipes already exist.',
           {0: 'Building outward needs new roads, pipes and buses.', 1: 'Using existing homes saves land, not public cost per '
               'home.', 3: 'Doing nothing builds no homes at all.'}),
          ('A hundred small sites are needed to do what one '
           '____________ does.', None, 'field',
           'Paragraph 2, which makes building inside slow.'),
          ('The third answer means using the homes that '
           '____________.', None, 'exist',
           'Paragraph 3, including empty rooms.'),
          (
           'The third answer means telling people what to do with '
           'their ____________.', None, 'property',
           'Paragraph 3, the last sentence of it.'),
          ('A town that refuses all three has chosen that prices keep '
           '____________.', None, 'rising',
           'Paragraph 4, which is an invisible choice.')])],
   listen=[
    dict(heading='A planner on building upwards', part='Part 4',
         task='A short talk · note completion', band='l4', qtype='Questions 56-61',
         script=[
          ('Speaker', 'I am a planner, and I want to describe the three '
           'choices honestly, including the costs of the one I '
           'prefer.'),
          ('Speaker', 'Outward is quick. A field has no neighbours and '
           'no archaeology. But every home on that field needs a road, '
           'pipes, a school place and a bus, and the buyer does not pay '
           'for those. The public does, and usually later.'),
          ('Speaker', 'Upward, on land inside the town, is what I '
           'prefer, and it has two real costs. It is slow: every site '
           'has neighbours and every neighbour has a view. And the '
           'sites are small. I need roughly a hundred of them to equal '
           'one field at the edge, and I will spend as long on the '
           'hundredth as on the first.'),
          ('Speaker', 'The third choice is the one nobody will say out '
           'loud. This town has about nine thousand spare bedrooms in '
           'it. Nothing we build this decade will match that number. '
           'Moving even a fraction of it would need tax changes that no '
           'elected person wants to propose.'),
          ('Speaker', 'And here is the part I most want you to '
           'remember. A council that says no to all three has still '
           'made a decision. It has decided that prices rise and that '
           'the people who would have moved here go somewhere else. '
           'That decision never appears in any document.'),
          ('Speaker', 'So when you hear a plan described as having no '
           'downside, somebody has hidden the cost in the one place '
           'nobody checks: the future.')],
         items=[
          ('Building outward is quick because a field has no '
           'neighbours and no ____________.', None, 'archaeology',
           'The speaker names both of those.'),
          ('The buyer does not pay for roads, pipes, school places '
           'and a ____________.', None, 'bus',
           'The public does, usually later.'),
          ('Roughly ____________ small sites equal one field at the '
           'edge.', None, 'a hundred',
           'And each takes as long as the first.'),
          ('The town has about ____________ thousand spare '
           'bedrooms.', None, 'nine',
           'More than anything built this decade will match.'),
          ('A council that says no to all three has decided that '
           '____________ rise.', None, 'prices',
           'A decision that appears in no document.'),
          ('The speaker says a plan with no downside has its cost '
           'hidden in the ____________.', None, 'future',
           'Which is the place nobody checks.')])],
   speak=dict(
    part='Part 3', focus='Housing',
    sounds=[('Compound nouns take the stress on the first word: a CAR park, a '
             'RAILway station, a SUPermarket. Adjective and noun take the '
             'second: an expensive FLAT.'),
            ('Say these four and keep the pattern: a car park, a new car, a '
             'railway station, a busy station.'),
            ('City words have one strong part: DEvelopment on the second, '
             'NEIGHbourhood on the first, reGEneration on the fourth.'),
            ('Practise one sentence: four hundred flats were built on the old '
             'car park. The number and the compound carry the stress.'),
            ('Record yourself describing a place that has changed. Find every '
             'two-word noun and check which half you stressed.')],
    intro='Name the trade-off rather than pretending there is none. '
          'Four sentences.',
    qs=['How should a town solve a housing shortage?',
        'Should people be able to object to building near them?',
        'Is it better to build up or out?'],
    shape=[('answer', 'I would build inside the town first and accept '
            'that it is slower.'),
           ('support', 'The roads, pipes and schools already exist, so '
            'the public cost per home is much lower.'),
           ('support', 'The cost is that the sites are small and every '
            'one has neighbours.'),
           ('follow-up', 'And a town that refuses every option has '
            'still chosen something: rising prices and people going '
            'elsewhere.')]),
   write=[
    dict(task='Task 2',
         heading='Should people be able to object to new building '
                 'near their homes?',
         prompt='In some countries, residents can formally object to '
                'new building near their homes. Some people think this '
                'is a necessary protection; others think it makes a '
                'housing shortage worse. Discuss both views and give '
                'your own opinion.',
         instruct='  Write at least 200 words in about 35 minutes.',
         lines=22, wband='essay',
         plan=('Objections about conditions, not a veto over building',
               [('The case for objections',
                 ['people living somewhere know things a plan does not '
                  'show',
                  'and a scheme with no school places damages them '
                  'directly']),
                ('The case against',
                 ['the people who would live in the new homes cannot '
                  'object, because they are not there yet',
                  'so the process hears one side of the question']),
                ('A process that hears both',
                 ['objections about conditions, which can be answered',
                  'rather than about whether anything is built at '
                  'all'])]),
         model=[
          'Most planning systems let residents object to new building '
          'near their homes, and the argument about whether they should '
          'is really an argument about who is in the room.',
          'There is a strong case for hearing objections. People who '
          'live in a street know things that no plan shows: which '
          'junction is dangerous, where the water stands after rain, '
          'how full the school actually is. A scheme that adds a '
          'hundred homes and no classroom damages those residents '
          'directly, and they are the only people who will say so '
          'before it is built.',
          'The case against is equally serious and less often stated. '
          'The people who would live in the new homes cannot object, '
          'because they do not live there yet and nobody knows their '
          'names. A process that hears everybody affected by building '
          'and nobody affected by not building is not balanced, '
          'whatever its rules say.',
          'My own view is that the answer is in what an objection may '
          'be about. An objection that a scheme lacks a school place, a '
          'bus or a safe crossing is specific and can be answered by '
          'changing the scheme. An objection that amounts to nothing '
          'being built cannot be answered at all, and should carry '
          'little weight.',
          'That keeps the knowledge of residents, which is valuable, '
          'and removes the veto, which is not.'],
         notes=['The question is reframed in the first paragraph as a '
                'question about who is represented.',
                'The strongest point for each side is the one that '
                'side would make itself.',
                'The conclusion distinguishes two kinds of objection '
                'rather than splitting the difference.'],
         criterion=[('Both views discussed fully', 'Task Response'),
                    ('A distinction that resolves them', 'Task '
                     'Response'),
                    ('Specific examples rather than generalities',
                     'Task Achievement'),
                    ('Accurate relative clauses', 'Grammatical Range '
                     'and Accuracy')])],
   gram=dict(
    point='Expressing cost and trade-off',
    explain='Use the cost is that, at the cost of, and in exchange for '
            'to name what is given up.',
    examples=['The cost is that the sites are small.',
              'It is quick, at the cost of new roads.',
              'In exchange for speed, the public pays later.',
              'Each answer costs something somebody does not want to '
              'pay.'],
    items=[('(the cost is that) the sites are small.',
            'The cost is that the sites are small.'),
           ('It is quick, (at the cost of) new roads.',
            'It is quick, at the cost of new roads.'),
           ('(in exchange for) speed, the public pays later.',
            'In exchange for speed, the public pays later.'),
           ('(the cost is that) neighbours object.',
            'The cost is that neighbours object.'),
           ('It is cheap, (at the cost of) a long walk.',
            'It is cheap, at the cost of a long walk.')],
    task='Write each sentence with the phrase given.'),
   vocab=[('preserves', 'keeps something as it is'),
          ('restriction', 'a rule that limits something'),
          ('risen', 'past participle of rise'),
          ('terraced', 'joined in a row, as of houses'),
          ('timber', 'wood used for building'),
          ('twenty-eight', 'the number 28'),
          ('unreasonably', 'in a way that is not fair or sensible'),
          ('unrecognisable', 'so changed that it cannot be '
           'recognised')],
   expr=[('Each answer costs something somebody does not want to '
          'pay.', 'framing a set of choices'),
         ('Nobody can avoid choosing.', 'closing off a non-answer'),
         ('That decision never appears in any document.',
          'naming a hidden choice'),
         ('Somebody has hidden the cost in the future.',
          'warning about a plan')],
   trans=['because', 'so', 'however', 'for example'])],

 technique=dict(
  title='Looking ahead and the loop, together, under time',
  body='You have two habits now. From Foundation 1: your eyes move to '
       'the next question while your hand finishes the last answer. '
       'From unit 1 of this book: you read one paragraph at a time and '
       'stop to ask what it answered. This page puts them together and '
       'adds a clock, because that combination is what a real reading '
       'section is. Here is the drill, and do it exactly. Take the '
       'cycle 5 passage and its seven questions. Give yourself eleven '
       'minutes, which is the Volume 1 allowance for a passage of this '
       'length. Load the questions, then loop through the paragraphs, '
       'and the moment you write an answer, let your eye move to the '
       'next question before your hand has finished. Stop at eleven '
       'minutes whether you are finished or not, and mark what you '
       'have. Then note three numbers: how many you answered, how many '
       'were right, and where you were when the time ran out. Repeat '
       'the drill on the cycle 4 passage the next day. Almost everybody '
       'finds the same thing: the first attempt runs out of time in the '
       'third paragraph and the second does not, and nothing changed '
       'except that the loop stopped being something you had to think '
       'about.',
  panel=[('Load the questions', 'All of them, before the passage.'),
         ('Loop the paragraphs', 'One at a time; answer as you go.'),
         ('Eyes ahead while writing',
          'The next question before the pen has stopped.'),
         ('Stop at eleven minutes',
          'Mark what you have, and note where you were.')],
  qs=['How many questions did I answer in the time?',
      'How many of those were right?',
      'Which paragraph was I in when time ran out?',
      'Did my eyes move ahead while I was writing?',
      'What was different on the second attempt?'],
  task='Do the drill on the cycle 5 passage, then on the cycle 4 '
       'passage the following day. Write down the three numbers each '
       'time and compare them.'),

 outlining=dict(
  title='Fill the outline, then write one body paragraph from it',
  body='This page is narrow on purpose. Instead of planning a whole '
       'answer and writing the whole answer, you plan the whole answer '
       'and write one paragraph. The reason is that most of what goes '
       'wrong in Task 2 goes wrong inside a single body paragraph, and '
       'practising whole essays hides it. Here is the shape of a body '
       'paragraph at this level, in four sentences. One: the idea, in a '
       'single clear sentence with no hedging. Two: the support, which '
       'is a fact, a number or a specific example. Three: the '
       'consequence, which says what follows from the support. Four, '
       'and only if it earns its place: a limit, which says where the '
       'idea stops applying. Take the housing plan in this unit and '
       'write the second body paragraph from it: building inside the '
       'town saves what already exists. Sentence one states it. '
       'Sentence two gives the roads, pipes and schools. Sentence three '
       'says that the public cost per home is therefore lower. Sentence '
       'four admits that the sites are small and the work is slow. Then '
       'check: can somebody reading only your paragraph say what your '
       'idea was and what supports it? If not, the fault is almost '
       'always sentence one, which usually turns out to contain two '
       'ideas rather than a clear one.',
  frame=('Build inside the town first, with conditions that are '
         'enforceable',
         [('Building outward is quick but the public pays for it',
           ['every home needs a road, pipes and a bus',
            'and the buyer does not pay for any of them']),
          ('Building inside uses what already exists',
           ['the roads, pipes and schools are there',
            'so the public cost per home is much lower']),
          ('Conditions decide whether either works',
           ['a classroom and a bus service with a date attached',
            'written into the permission rather than promised beside '
            'it'])]),
  qs=['Does sentence one contain exactly one idea?',
      'Is sentence two a fact, a number or an example?',
      'Does sentence three say what follows?',
      'Does the limit earn its place, or is it padding?',
      'Could a reader state my idea from this paragraph alone?'],
  task='Write the second body paragraph from the plan above, in four '
       'sentences. Give it to a partner who has not seen the plan and '
       'ask them to state your idea and your support.',
  answers=['sentence one with two ideas is the commonest fault',
           'a number is the easiest support to write correctly',
           'the consequence sentence is what makes it an argument',
           'a limit is useful only when it is real',
           'a reader should recover the idea from the paragraph '
           'alone']),

 candos=['I can register with a council and ask about deadlines',
         'I can follow a route description and label a map',
         'I can describe a chart where the total is flat and the mix '
         'changes',
         'I can read a passage and answer seven questions in eleven '
         'minutes',
         'I can write one body paragraph in four sentences from a '
         'plan'],

 tip=('A town that refuses every answer to a housing shortage has '
      'still chosen one: prices rise and the people who would have '
      'moved there go elsewhere. Watch for choices that appear in no '
      'document.'))
