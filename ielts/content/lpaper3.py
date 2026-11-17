# -*- coding: utf-8 -*-
"""Volume 3 timed Listening paper: four parts, 40 questions, about 30 min."""

LPAPER = dict(
 vol=3, level='B1+', band='6.0',
 title='Listening Paper',
 intro=(
   'Four parts, forty questions, one hearing of each recording. Part 1 is a '
   'conversation about everyday arrangements, Part 2 a talk by a single '
   'speaker, Part 3 a discussion, and Part 4 a lecture. The difficulty rises '
   'across the four parts, and so does the speed at which the answers '
   'arrive.'),
 instruct=[
  'Read the questions for each part before the recording starts. You are '
  'given the time whether you use it or not.',
  'Predict the form of each answer before you hear it: a number, a day, a '
  'name, a plural noun. Knowing what kind of thing you are waiting for is '
  'most of the work.',
  'Write the answer as you hear it. A remembered answer is a lost answer two '
  'questions later.',
  'If you miss one, leave it and look ahead. Chasing a missed answer costs '
  'you the two that follow it, which is the commonest way to lose six marks '
  'in ninety seconds.',
  'On the computer-delivered test there is no ten-minute transfer window: '
  'you are given two minutes to check what you have typed. Practise to that '
  'rule.'],

 parts=[

  dict(no=1, first=1, part='Part 1', band='l1',
       heading='Enrolling on an evening course',
       task='A conversation between a caller and a college office · note completion',
       qtype='Questions 1-10',
       blurb='Questions 1–10. Complete the enrolment form. Write ONE WORD '
             'AND/OR A NUMBER for each answer.',
       script=[
        ('Clerk', 'Riverside College, evening courses, Benedicta '
         'speaking.'),
        ('Caller', 'Hello. I would like to enrol on the bookbinding course '
         'that starts in January.'),
        ('Clerk', 'Of course. Can I take your name?'),
        ('Caller', 'Rosalyn Achebe-Fontaine.'),
        ('Clerk', 'Could you spell the surname?'),
        ('Caller', 'A-C-H-E-B-E, hyphen, F-O-N-T-A-I-N-E.'),
        ('Clerk', 'Thank you. And a contact number?'),
        ('Caller', 'Oh-seven-nine-double-four, one-six-two-three-oh-eight.'),
        ('Clerk', 'Lovely. Now, the course runs on Thursdays, seven until '
         'nine, for twelve weeks, and the first session is on the '
         'eleventh.'),
        ('Caller', 'I had thought it was Wednesdays.'),
        ('Clerk', 'Wednesday is the daytime group. The evening group moved '
         'to Thursday in September, and the website still said Wednesday '
         'until about a fortnight ago, so you are the third person to ask.'),
        ('Caller', 'Thursday is fine. What does it cost?'),
        ('Clerk', 'A hundred and forty-five pounds, and there is a '
         'concessionary rate of ninety for anybody over sixty or receiving '
         'certain benefits.'),
        ('Caller', 'The full rate, then. Is there anything to bring?'),
        ('Clerk', 'A materials fee of eighteen pounds is paid to the tutor '
         'at the first session, in cash, which catches people out. Bring an '
         'apron as well. Everything else is provided.'),
        ('Caller', 'An apron. Noted.'),
        ('Clerk', 'And can I ask how you heard about the course? We have to '
         'record it.'),
        ('Caller', 'From a poster in the library.'),
        ('Clerk', 'The library, thank you. Last thing: the room has changed. '
         'It is the annexe now, not the main building, and the annexe door is '
         'locked after seven, so if you are late you need to ring the bell '
         'at the side.'),
        ('Caller', 'Is there parking?'),
        ('Clerk', 'There is, and it is free after six, but you must display '
         'a permit, which I will post with your confirmation.')],
       items=[
        ('Surname: ____________', None, 'Achebe-Fontaine',
         'Spelled out by the caller during the call.'),
        ('Telephone: 0794 4____________', None, '162308',
         'Given as one-six-two-three-oh-eight.'),
        ('Class evening: ____________', None, 'Thursday',
         'Moved from Wednesday in September, which is the daytime group.'),
        ('Course length: ____________ weeks', None, 'twelve',
         'Running from seven until nine each session.'),
        ('First session: ____________ January', None, '11',
         'Also given as the eleventh during the call.'),
        ('Full fee: £____________', None, '145',
         'With a concessionary rate of £90 for some students.'),
        ('Materials fee paid to the tutor: £____________', None, '18',
         'Paid in cash at the first session, which catches people out.'),
        ('Item to bring: an ____________', None, 'apron',
         'Everything else is provided by the college.'),
        ('Heard about the course from a poster in the ____________.', None,
         'library', 'Recorded by the college for its own purposes.'),
        ('Room: the ____________', None, 'annexe',
         'Not the main building, and the door is locked after seven.')]),

  dict(no=2, first=11, part='Part 2', band='l2',
       heading='A talk about a river clean-up scheme',
       task='A talk to new volunteers · multiple choice, matching and note completion',
       qtype='Questions 11-20',
       blurb='Questions 11–16. Choose the correct letter. Questions '
             '17–20. Complete the notes with ONE WORD ONLY.',
       script=[
        ('Speaker', 'Welcome. I coordinate the Marden clean-up and I am '
         'going to tell you what we actually do, which differs from the '
         'leaflet.'),
        ('Speaker', 'We meet at the bridge car park at nine, not at the '
         'boathouse. The boathouse is on the old leaflets and somebody '
         'arrives there about once a month.'),
        ('Speaker', 'The work is in three teams and you choose. The bank '
         'team picks litter from the path. The water team works in waders, '
         'and we take nobody in waders on a first day, for insurance '
         'reasons rather than safety ones. The sorting team weighs and '
         'separates what comes back, which is the job most people dismiss '
         'and the one that produces our only real data.'),
        ('Speaker', 'Now the surprise, and I say this to every new group. By '
         'weight, most of what we take out is not plastic bottles. It is '
         'wet wipes, roughly a third of the total, and almost all of it '
         'comes out of the storm drains rather than being dropped by anybody '
         'at the river.'),
        ('Speaker', 'Plastic bottles are the most visible and about a tenth '
         'by weight. Shopping trolleys are the most photographed: we '
         'recover four or five a year, and every local news item about us '
         'has used a photograph of one.'),
        ('Speaker', 'Three rules. Gloves at all times. Nothing sharp goes '
         'in a bag; it goes in the yellow bin, and somebody with a licence '
         'deals with it. And nobody works alone out of sight of another '
         'person, which matters most on the bends.'),
        ('Speaker', 'We finish at one o’clock sharp, because volunteers who '
         'stay until they are tired do not come back. There is soup at the '
         'village hall afterwards.'),
        ('Speaker', 'And one request. Record what you find on the tally '
         'sheet rather than just bagging it. The weight of wet wipes is the '
         'only reason the water company has agreed to meet us, and that '
         'figure exists because people filled in a form for two years.')],
       items=[
        ('Where does the group meet?',
         ['The boathouse', 'The bridge car park', 'The village hall', 'The parish office'],
         1,
         'The boathouse appears on old leaflets and still catches '
         'people out.',
         {0: 'The boathouse is the old leaflet\u2019s address.', 2: 'The village hall is where the soup is afterwards.', 3: 'No parish office is mentioned in the talk.'}),
        ('How many teams are there?', ['Two', 'Three', 'Four', 'Five'],
         1,
         'Bank, water and sorting, and volunteers choose between them.',
         {0: 'Two leaves out one of the three teams.', 2: 'Four is one more than the teams named.', 3: 'Five is well above the number of teams.'}),
        ('Why does nobody use waders on a first day?',
         ['It is dangerous', 'For insurance reasons', 'There are too few', 'The water is too cold'],
         1,
         'The speaker says the reason is insurance rather than safety.',
         {0: 'The speaker says the reason is not safety.', 2: 'Nothing is said about a shortage of waders.', 3: 'Water temperature is not mentioned at all.'}),
        (
         'Which job does the speaker say produces the group\u2019s only '
         'real data?',
         ['Bank picking', 'Water work', 'Sorting and weighing', 'Campaigning'],
         2, 'The job the speaker says most people dismiss.',
         {0: 'Bank picking collects litter from the path.', 1: 'Water work is done in waders, not for the data.', 3: 'Campaigning is not one of the three teams.'}),
        ('What makes up about a third of the material by weight?',
         ['Plastic bottles', 'Wet wipes', 'Shopping trolleys', 'Food packaging'],
         1, 'Almost all of it arriving through the storm drains.',
         {0: 'Plastic bottles are about a tenth by weight.', 2: 'Trolleys are four or five a year, not a third.', 3: 'Food packaging is not among the figures given.'}),
        ('What does the speaker say about shopping trolleys?',
         ['They are the heaviest item', 'They are the most photographed and few are found', 'They cannot be recovered', 'They are increasing'],
         1, 'Four or five a year, and in every local news photograph.',
         {0: 'Wet wipes are the heaviest share by weight.', 2: 'Four or five are recovered each year.', 3: 'No trend in trolley numbers is reported.'}),
        ('Rule: sharp items go in the ____________ bin.', None, 'yellow',
         'Where somebody with a licence deals with them.'),
        ('Rule: nobody works alone out of ____________ of another person.',
         None, 'sight',
         'Which the speaker says matters most on the bends.'),
        ('The session finishes at ____________ o’clock.', None, 'one',
         'Because volunteers who stay until they are tired do not return.'),
        ('Volunteers should record what they find on the ____________ '
         'sheet.', None, 'tally',
         'Which produced the figure that persuaded the water company to '
         'meet.')]),

  dict(no=3, first=21, part='Part 3', band='l3',
       heading='Two students plan a survey of bus use',
       task='A discussion between two students and a tutor · multiple choice and note completion',
       qtype='Questions 21-30',
       blurb='Questions 21–26. Choose the correct letter. Questions '
             '27–30. Complete the notes with ONE WORD ONLY.',
       script=[
        ('Tutor', 'So you want to survey bus use on the number nine. Tell me '
         'the question first.'),
        ('Priya', 'Whether the timetable change in September reduced '
         'ridership.'),
        ('Tutor', 'And how will you know what ridership was before '
         'September?'),
        ('Priya', 'We were going to ask people how often they used it last '
         'year.'),
        ('Tutor', 'You can, and you will get an answer that tells you about '
         'memory rather than about buses. What else is available?'),
        ('Marek', 'The operator publishes boarding counts. I found them last '
         'week, monthly, by route, going back six years.'),
        ('Tutor', 'Then your before-and-after is already measured and your '
         'survey is answering a different question. What is that question?'),
        ('Marek', 'Why. The counts tell us ridership fell eleven per cent '
         'and they cannot tell us whether that is the timetable or the new '
         'parking charges in town.'),
        ('Tutor', 'Good. That is a much better project and it is also '
         'harder. Where will you ask people?'),
        ('Priya', 'At the bus stop, on weekday mornings.'),
        ('Marek', 'Which is the mistake we made in the pilot. Everybody at '
         'the stop is still using the bus. The people whose behaviour '
         'changed are the ones who are not there.'),
        ('Tutor', 'That is exactly the problem, and it has a name worth '
         'knowing. What would reach them?'),
        ('Priya', 'Knocking on doors on the streets the route serves.'),
        ('Tutor', 'Expensive in time, and the best available answer. How '
         'many?'),
        ('Marek', 'We calculated a hundred and twenty for the precision we '
         'want, which is about four afternoons each.'),
        ('Tutor', 'Then do a hundred and twenty and do not let it drift to '
         'sixty, because the figure you report rests on it. And keep the '
         'questionnaire to five minutes. At eight minutes your refusal rate '
         'doubles and the people who refuse are not a random sample of the '
         'street.'),
        ('Priya', 'Five minutes is about nine questions.'),
        ('Tutor', 'Then choose the nine carefully. One more thing: write '
         'down now, before you collect anything, what result would make you '
         'conclude it was the parking charges rather than the timetable. If '
         'you cannot say that in advance, you will find the timetable '
         'whatever the data says.')],
       items=[
        ('What was the students\u2019 original research question?',
         ['Why ridership fell', 'Whether the timetable change reduced ridership', 'How satisfied passengers are', 'Where passengers travel'],
         1,
         'Which the tutor shows is already answered by published data.',
         {0: 'Why ridership fell is the better question they move to.', 2: 'Satisfaction is not what either version asks.', 3: 'Destinations are not part of either question.'}),
        ('Why does the tutor reject asking people about last year?',
         ['It is unethical', 'It measures memory rather than buses', 'It takes too long', 'Nobody will answer'],
         1,
         'The published boarding counts measure the change directly.',
         {0: 'The tutor raises no ethical objection.', 2: 'Length of the task is not the objection.', 3: 'He expects answers, just unreliable ones.'}),
        ('What data did Marek find?',
         ['Ticket prices', 'Monthly boarding counts by route', 'Passenger complaints', 'Parking records'],
         1,
         'Going back six years, which makes the survey unnecessary for '
         'the first question.',
         {0: 'Ticket prices are not what Marek found.', 2: 'Complaints are not among the published data.', 3: 'Parking records are the confound, not the data found.'}),
        ('By how much did ridership fall?',
         ['six per cent', 'eleven per cent', 'twenty per cent', 'it rose'],
         1, 'A figure the counts give without any survey.',
         {0: 'Six per cent is below the figure the counts give.', 2: 'Twenty per cent is nearly double the fall reported.', 3: 'Ridership fell rather than rose.'}),
        ('What is wrong with surveying at the bus stop?',
         ['It is unsafe', 'Everybody there is still using the bus', 'Mornings are too busy', 'Permission is needed'],
         1,
         'The people whose behaviour changed are the ones not there.',
         {0: 'Safety at the stop is not raised.', 2: 'Busy mornings are not the tutor\u2019s objection.', 3: 'Permission is not the problem at the stop.'}),
        (
         'What does the tutor ask them to write down before collecting '
         'data?',
         ['The questions', 'What result would point to the parking charges', 'The sample size', 'The budget'],
         1,
         'Because otherwise they will find the timetable whatever the '
         'data says.',
         {0: 'The nine questions are chosen separately.', 2: 'The sample size is already calculated at a hundred and '
             'twenty.', 3: 'No budget is discussed in the tutorial.'}),
        ('Instead of the bus stop, they will knock on ____________ along '
         'the route.', None, 'doors',
         'Which the tutor calls expensive in time and the best available '
         'answer.'),
        ('Target sample: ____________ people', None, '120',
         'About four afternoons of work each.'),
        ('Maximum questionnaire length: ____________ minutes', None,
         'five', 'At eight minutes the refusal rate doubles.'),
        ('Five minutes allows about ____________ questions.', None, 'nine',
         'Which the tutor says must therefore be chosen carefully.')]),

  dict(no=4, first=31, part='Part 4', band='l4',
       heading='A lecture on how museums choose what to display',
       task='A lecture on museum collections · multiple choice, matching and note completion',
       qtype='Questions 31-40',
       blurb='Questions 31–36. Choose the correct letter. Questions '
             '37–40. Complete the notes with ONE WORD ONLY.',
       script=[
        ('Lecturer', 'A large museum displays between one and five per cent '
         'of what it owns. Everything else is in store, and the question I '
         'want to spend this hour on is how the selection is made, because '
         'the answer is much less deliberate than visitors assume and much '
         'more consequential.'),
        ('Lecturer', 'Most collections were not assembled. They accumulated '
         'through bequests, and a bequest usually arrives with conditions. '
         'A collection given in 1908 on condition that it be displayed '
         'together is still displayed together, in a gallery shaped by a '
         'donor nobody at the museum has met.'),
        ('Lecturer', 'The second factor is condition, which does far more '
         'selecting than any curator. Light damages textiles, paper and '
         'dyes irreversibly, so a watercolour that can be shown for three '
         'months in nine years is in store for eight years and nine months '
         'whatever anybody thinks of it. Oil on canvas has no such limit, '
         'which is a substantial part of why the history of painting as the '
         'public meets it is a history of oil.'),
        ('Lecturer', 'Third, and this is the one that surprises people, '
         'display is constrained by information. An object with no secure '
         'record of where it came from is difficult to label and risky to '
         'show, because a label makes a claim and a claim can be challenged. '
         'Objects with weak documentation are therefore quietly '
         'under-displayed, and weak documentation correlates strongly with '
         'how it was acquired.'),
        ('Lecturer', 'Fourth is space. Display space per object is roughly '
         'forty times storage space, because an object on display needs '
         'sightlines and interpretation around it. A museum doubling its '
         'gallery space increases what it can show by about two per cent of '
         'its holdings.'),
        ('Lecturer', 'Those four factors produce a selection nobody '
         'designed: the durable, the well-documented, the bequeathed and '
         'the small. Visitors read it as a statement about what matters, '
         'because there is no reason to read it any other way.'),
        ('Lecturer', 'The responses have been more interesting than the '
         'problem. Open storage, in which the store itself is glazed and '
         'visitable, raises the proportion seen from two per cent to '
         'something nearer forty, and gives up almost all interpretation in '
         'exchange. Rotation programmes work within the light limits, at the '
         'cost of a permanent collection that is never the same twice, which '
         'school teachers planning a visit dislike.'),
        ('Lecturer', 'Digitisation is announced most often and I would '
         'treat it most carefully. Photographing everything is '
         'transformative for researchers and changes little for the general '
         'visitor, whose engagement depends on scale and presence in a way '
         'a screen does not carry. It is also what funders prefer.')],
       items=[
        (
         'What proportion of its holdings does a large museum display?',
         ['Under one per cent', 'One to five per cent', 'Ten to twenty per cent', 'About half'],
         1,
         'The rest is in store, which is the subject of the lecture.',
         {0: 'Under one per cent is below the range he gives.', 2: 'Ten to twenty per cent is well above the range.', 3: 'About half is far more than any museum displays.'}),
        ('Most collections, the lecturer says, were',
         ['assembled deliberately', 'accumulated through bequests', 'bought at auction', 'transferred from other museums'],
         1, 'And bequests usually arrive with conditions attached.',
         {0: 'Deliberate assembly is what he says did not happen.', 2: 'Auction purchases are not how most arrived.', 3: 'Transfers between museums are not mentioned.'}),
        (
         'Which factor does the lecturer say does more selecting than '
         'any curator?',
         ['Space', 'Condition', 'Documentation', 'Funding'], 1,
         'Because light damages textiles, paper and dyes irreversibly.',
         {0: 'Space is the fourth factor he lists.', 2: 'Documentation is the third factor he lists.', 3: 'Funding is not among the four factors.'}),
        (
         'A watercolour shown for three months in nine years is in '
         'store for',
         ['three years', 'six years', 'eight years and nine months', 'the whole period'],
         2, 'Whatever anybody thinks of its quality.',
         {0: 'Three years is the time it can be shown, not stored.', 1: 'Six years leaves nearly three years unaccounted for.', 3: 'The whole nine years would leave no display time.'}),
        ('Why are poorly documented objects under-displayed?',
         ['They are fragile', 'A label makes a claim that can be challenged', 'Visitors dislike them', 'They are too small'],
         1,
         'And weak documentation correlates with how an object was '
         'acquired.',
         {0: 'Fragility is the condition factor, not documentation.', 2: 'Visitor taste is not the reason he gives.', 3: 'Size is a separate factor in his list.'}),
        ('Doubling gallery space increases what can be shown by about',
         ['two per cent of holdings', 'ten per cent of holdings', 'double', 'forty per cent'],
         0,
         'Because display space per object is roughly forty times '
         'storage space.',
         {1: 'Ten per cent is five times the figure he gives.', 2: 'Gallery space doubles; what can be shown does not.', 3: 'Forty is the ratio of display to storage space.'}),
        ('What is on display is approximately the durable, the '
         'well-documented, the bequeathed and the ____________.', None,
         'small', 'A selection the lecturer says nobody designed.'),
        ('Open ____________ raises the proportion seen to nearer forty per '
         'cent.', None, 'storage',
         'At the cost of giving up almost all interpretation.'),
        ('____________ programmes work within the light limits.', None,
         'Rotation',
         'At the cost of a collection that is never the same twice.'),
        ('Digitisation transforms work for ____________ and changes little '
         'for the general visitor.', None, 'researchers',
         'Whose engagement depends on scale and presence.')]),
 ],
)
