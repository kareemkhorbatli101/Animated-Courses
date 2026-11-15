# -*- coding: utf-8 -*-
"""Volume 4 timed Listening paper: four parts, 40 questions, about 30 min."""

LPAPER = dict(
 vol=4, level='B2', band='6.5',
 title='Listening Paper',
 intro=(
   'Four parts, forty questions, one hearing of each recording. Part 1 is a '
   'conversation about everyday arrangements, Part 2 a talk by one speaker, '
   'Part 3 a discussion between students, and Part 4 a lecture. The '
   'difficulty rises across the four and so does the speed at which the '
   'answers arrive.'),
 instruct=[
  'Read the questions for each part before the recording starts. You are '
  'given the time; candidates who spend it looking at the page instead of '
  'the ceiling answer more questions.',
  'Predict the form of each answer before you hear it: a number, a day, a '
  'name, a plural noun. Knowing what kind of thing you are waiting for is '
  'most of the work.',
  'Write the answer as you hear it. The recording does not wait, and a '
  'remembered answer is a lost answer two questions later.',
  'If you miss one, leave it and look ahead to the next. Chasing a missed '
  'answer costs you the two that follow it, which is the commonest way to '
  'lose six marks in ninety seconds.',
  'On the computer-delivered test there is no ten-minute transfer window: '
  'you are given two minutes to check what you have typed. Practise to that '
  'rule.'],

 parts=[

  dict(no=1, first=1, part='Part 1', band='l1',
       heading='Booking a venue for a community event',
       task='A conversation between a caller and a hall bookings officer',
       qtype='Questions 1-10',
       blurb='Questions 1–10. Complete the booking form. Write ONE WORD '
             'AND/OR A NUMBER for each answer.',
       script=[
        ('Officer', 'Northgate Halls, bookings, Rosalind speaking.'),
        ('Caller', 'Hello. I am trying to book a room for a community event '
         'in March.'),
        ('Officer', 'Certainly. Can I take your name first?'),
        ('Caller', 'It is Delacroix. D-E-L-A-C-R-O-I-X.'),
        ('Officer', 'Thank you. And which of our rooms were you thinking '
         'of?'),
        ('Caller', 'I had looked at the Assembly Room on your website.'),
        ('Officer', 'That holds a hundred and eighty seated. How many are you '
         'expecting?'),
        ('Caller', 'About ninety.'),
        ('Officer', 'Then I would suggest the Lambert Room instead. It takes '
         'a hundred and twenty, it is half the price, and a room that is '
         'half empty is a miserable room to run an event in.'),
        ('Caller', 'That is helpful, thank you. What does the Lambert cost?'),
        ('Officer', 'Forty-two pounds an hour on a weekday evening, or '
         'fifty-five at the weekend. Which day were you looking at?'),
        ('Caller', 'Saturday the fourteenth, from two until six.'),
        ('Officer', 'Four hours at fifty-five. Now, two things people are '
         'caught by. The first is that the hire period has to include your '
         'setting up and your clearing away. If the event runs from two, you '
         'want the room from one.'),
        ('Caller', 'Then make it one until six.'),
        ('Officer', 'Five hours. And the second is the deposit, which is '
         'ninety pounds, refundable, and is separate from the hire charge. It '
         'comes back within ten working days if the room is left as you '
         'found it.'),
        ('Caller', 'Fine. Is there a kitchen?'),
        ('Officer', 'There is a serving kitchen, which means a sink, a '
         'kettle and a fridge. No cooking. If you want hot food you would '
         'need a caterer, and they must send us their certificate before the '
         'day.'),
        ('Caller', 'We were only planning sandwiches.'),
        ('Officer', 'Then you are fine. Last thing: parking. There are '
         'twenty-two spaces and they are not reservable. On a Saturday '
         'afternoon the market is on, so I would tell your guests to use the '
         'Brewer Street car park, which is three minutes away and free after '
         'midday.'),
        ('Caller', 'I will put that on the invitation.'),
        ('Officer', 'I will email you the form. It needs to come back at '
         'least fourteen days before, with the deposit.')],
       items=[
        ('Name: ____________', None, 'Delacroix',
         'Spelled out by the caller, letter by letter.'),
        ('Room booked: the ____________ Room', None, 'Lambert',
         'The officer recommends it over the Assembly Room because ninety '
         'people would leave the larger room half empty.'),
        ('Capacity of that room: ____________', None, '120',
         'Against a hundred and eighty seated in the Assembly Room.'),
        ('Date: Saturday ____________ March', None, '14',
         'Saturday the fourteenth, which is a weekend rate.'),
        ('Hire time: ____________ until 6 p.m.', None, '1',
         'Changed from two o’clock once the officer explains that setting '
         'up must be inside the hire period.'),
        ('Weekend rate: £____________ an hour', None, '55',
         'Against forty-two on a weekday evening.'),
        ('Deposit: £____________', None, '90',
         'Refundable, separate from the hire charge, returned within ten '
         'working days.'),
        ('The kitchen is a ____________ kitchen only.', None, 'serving',
         'A sink, a kettle and a fridge; no cooking is possible.'),
        ('Number of parking spaces: ____________', None, '22',
         'Not reservable, which is why the officer suggests Brewer Street.'),
        ('The form must be returned ____________ days before the event.',
         None, '14', 'At least fourteen days before, together with the '
         'deposit.')]),

  dict(no=2, first=11, part='Part 2', band='l2',
       heading='A talk to new allotment holders',
       task='A talk by the secretary of an allotment association',
       qtype='Questions 11-20',
       blurb='Questions 11–20. Choose the correct letter, A, B or C, and '
             'complete the notes below.',
       script=[
        ('Secretary', 'Welcome. I am the secretary, which means I am the person who writes to you when something has gone wrong, so I would sooner spend this half hour making sure it does not.'),
        ('Secretary', 'First, the thing nobody expects. The commonest reason '
         'a tenancy is ended here is not neglect and it is not non-payment. '
         'It is the hedge. Every plot has a boundary hedge, every holder is '
         'responsible for their own side of it, and a hedge that is not cut '
         'twice a year shades the plot next to yours, which is how neighbours '
         'stop speaking to one another.'),
        ('Secretary', 'Second, water. The standpipes run from the first of April to the thirty-first of October. Hoses are never permitted, and that is not a committee preference but a condition of our lease. Watering cans only, and the water butt you are given on arrival is the most useful object on the site.'),
        ('Secretary', 'Third, the cultivation rule, which is the one people argue about. Seventy-five per cent of your plot must be under cultivation: not planted at all times, but not under grass, weed or a shed. We inspect in June and September, and allow twenty-eight days to put something right before anything formal happens.'),
        ('Secretary', 'Fourth, bonfires. Permitted between November and February, after four in the afternoon, and only of material from your own plot. We lose one tenancy a year to somebody burning a sofa.'),
        ('Secretary', 'A word about the shop. Sunday mornings only, nine until twelve, run by volunteers, selling seed, compost and canes at roughly half garden centre prices. It sells no equipment, so do not come looking for a spade.'),
        ('Secretary', 'Finally, the thing I most want you to hear. Your plot '
         'is two hundred and fifty square metres and that is a great deal '
         'more than it looks like on a May morning when you are full of '
         'enthusiasm. Almost everybody who gives up in the first year gave up '
         'because they cultivated all of it at once. Take a third, do it '
         'properly, cover the rest, and extend next year. The people who are '
         'still here in ten years are the ones who started slowly.')],
       items=[
        ('The commonest reason a tenancy is ended is',
         ['neglect of the plot', 'failure to pay', 'an uncut hedge'], 2,
         'He says explicitly that it is neither neglect nor non-payment.'),
        ('Hoses are forbidden because of',
         ['a committee decision', 'a condition of the council lease',
          'the cost of water'], 1,
         'He stresses that this is not a committee preference.'),
        ('Inspections take place',
         ['once a year', 'twice a year', 'four times a year'], 1,
         'In June and in September, with twenty-eight days to put things '
         'right.'),
        ('Bonfires are allowed',
         ['all year after 4 p.m.', 'between November and February',
          'only with permission'], 1,
         'After four in the afternoon, and only of material from your own '
         'plot.'),
        ('The shop does not sell', ['seed', 'compost', 'equipment'], 2,
         'Seed, compost and canes only; he says not to come looking for a '
         'spade.'),
        ('Standpipes are on from 1 April to 31 ____________.', None,
         'October', 'Seven months of the year, and hoses are forbidden throughout.'),
        ('____________ per cent of the plot must be cultivated.', None,
         '75', 'Meaning not under grass, weed or a shed.'),
        ('Holders are given ____________ days to put a problem right.',
         None, '28', 'Before anything formal happens.'),
        ('The shop opens on ____________ mornings only.', None, 'Sunday',
         'Nine until twelve, run by volunteers.'),
        ('Each plot is ____________ square metres.', None, '250',
         'Which he says is far larger than it looks in May.')]),

  dict(no=3, first=21, part='Part 3', band='l3',
       heading='Two students plan a research presentation',
       task='A discussion between two students and their tutor',
       qtype='Questions 21-30',
       blurb='Questions 21–30. Choose the correct letter, A, B or C, and '
             'match each section to the student responsible.',
       script=[
        ('Tutor', 'So, the presentation is in three weeks. Where have you '
         'got to?'),
        ('Priya', 'We have the topic and we disagree about the shape. I want '
         'to open with the survey data and Marcus wants to open with the '
         'single case.'),
        ('Marcus', 'Because the survey data is forty minutes of material and we have twenty.'),
        ('Tutor', 'Both of those are arguments about time. Tell me what the presentation is supposed to leave behind.'),
        ('Priya', 'That the published figures on commuting distance are '
         'measuring something other than what people think.'),
        ('Tutor', 'Then your opening is whichever one makes that proposition '
         'land fastest, and you can answer that by trying it. Have you?'),
        ('Marcus', 'No.'),
        ('Tutor', 'Try both on a friend this week and keep the one that '
         'produces a question. Now, who is doing what?'),
        ('Priya', 'I will take the literature and the method.'),
        ('Marcus', 'And I have the case study and the limitations.'),
        ('Tutor', 'Swap the limitations.'),
        ('Marcus', 'Why?'),
        ('Tutor', 'Because the limitations of a method are best stated by whoever chose it. If Priya presents the method and you present what is wrong with it, you will sound as though you are contradicting her, and the questions will go to your disagreement instead of your findings.'),
        ('Priya', 'That had not occurred to me, and it is exactly what '
         'happened to the group before us.'),
        ('Tutor', 'It happens every year. What about the data display?'),
        ('Marcus', 'Four charts.'),
        ('Tutor', 'In twenty minutes? Cut it to two. A chart that is up for '
         'ninety seconds is a chart nobody reads, and four of them will cost '
         'you five minutes you need for the argument.'),
        ('Priya', 'Can I raise the thing neither of us has mentioned? Twenty minutes between two speakers is ten each, which is about nine hundred words, and neither of us has written anything down.'),
        ('Tutor', 'Then that is this week’s work, and it settles your chart question for you. Write the argument first; the slides are what is left over.'),
        ('Marcus', 'We have been building slides for a fortnight.'),
        ('Tutor', 'Most groups do, and discover in the rehearsal that the slides are an argument nobody has made.'),
        ('Priya', 'Which two charts would you keep?'),
        ('Tutor', 'That is not mine to decide, but the test is the same as '
         'for the opening: keep the ones somebody asks a question about. And '
         'send me the slides by the Friday before, not the night before, '
         'because I cannot usefully comment on something I read at eleven at '
         'night.')],
       items=[
        ('What does the tutor say about their disagreement?',
         ['Priya is right', 'Marcus is right',
          'Both are arguing about time, not structure'], 2,
         'He redirects them to what the presentation should leave behind.'),
        ('How does he tell them to settle the opening?',
         ['By timing both', 'By trying both on a friend',
          'By asking the examiners'], 1,
         'Keep the one that produces a question.'),
        ('Why does he tell them to swap the limitations?',
         ['To balance the speaking time',
          'So the person who chose the method states its limits',
          'Because Marcus knows the method better'], 1,
         'Otherwise Marcus will appear to be contradicting Priya.'),
        ('How many charts does he recommend?',
         ['One', 'Two', 'Four'], 1,
         'A chart up for ninety seconds is a chart nobody reads.'),
        ('When does he want the slides?',
         ['The night before', 'The Friday before', 'Three weeks before'], 1,
         'He says he cannot usefully comment on something read at eleven at '
         'night.'),
        ('Who will present the literature review?',
         ['Priya', 'Marcus', 'Both'], 0,
         'She takes the literature and the method.'),
        ('Who will present the case study?',
         ['Priya', 'Marcus', 'Both'], 1,
         'Along with, originally, the limitations.'),
        ('Who will present the method?', ['Priya', 'Marcus', 'Both'], 0,
         'Which is why the tutor moves the limitations to her as well.'),
        ('Who will present the limitations after the tutor’s advice?',
         ['Priya', 'Marcus', 'Both'], 0,
         'The limitations of a method belong to whoever chose it.'),
        ('The proposition the presentation must leave behind concerns '
         'published figures on ____________ distance.', None, 'commuting',
         'Priya states it when the tutor asks what the presentation is '
         'for.')]),

  dict(no=4, first=31, part='Part 4', band='l4',
       heading='A lecture on how a city measures its own traffic',
       task='A lecture on measurement and policy',
       qtype='Questions 31-40',
       blurb='Questions 31–40. Complete the notes. Write ONE WORD ONLY '
             'for each answer, or choose the correct letter.',
       script=[
        ('Lecturer', 'This morning I want to take one apparently dull '
         'question — how a city counts the traffic on its own streets — and '
         'show you that almost every disagreement about transport policy is '
         'really a disagreement about this.'),
        ('Lecturer', 'There are three methods and they do not measure the '
         'same thing. The first is the loop: a wire set into the road surface '
         'that registers a vehicle passing over it. It is cheap, it runs '
         'continuously, and it counts vehicles at one point. What it cannot '
         'tell you is where any of them came from or where they are going.'),
        ('Lecturer', 'The second is the survey: people stopped and asked, or '
         'households asked to keep a travel diary for a week. This gives you '
         'journeys rather than crossings, which is what a planner actually '
         'wants. It is also expensive, it is done perhaps every five years, '
         'and it relies on what people report, which for journey time is '
         'reliably wrong by about fifteen per cent in the flattering '
         'direction.'),
        ('Lecturer', 'The third is the phone: anonymised location data '
         'bought from network operators. Enormous samples, continuous, and it '
         'genuinely gives origin and destination. Its weakness is that it '
         'tells you where a device went and not why, so a delivery driver and '
         'a commuter are indistinguishable, and the people least likely to be '
         'carrying a contract phone are exactly the low-income travellers '
         'whose journeys policy is usually trying to improve.'),
        ('Lecturer', 'Now watch what happens when these three disagree. A '
         'city installs a bus lane. The loops show total vehicle crossings on '
         'that road falling by eleven per cent, and the opponents say the '
         'scheme has driven traffic away. The phone data show the same number '
         'of journeys completed, a little more slowly, by a slightly '
         'different route. Both are correct. They are answers to different '
         'questions, and the public argument proceeds as though one side '
         'were lying.'),
        ('Lecturer', 'The methodological point generalises, and it is the one '
         'I want you to carry out of here. When a measure is chosen, a '
         'definition is chosen with it, and the definition usually favours '
         'one side of the argument the measure will later be used to settle. '
         'A city that counts crossings will tend to find that road schemes '
         'reduce traffic. A city that counts journeys will tend to find that '
         'they relocate it.'),
        ('Lecturer', 'Which leaves the obvious question: what should a city '
         'do? My own answer is unexciting and I believe it is right. Publish '
         'all three, publish them before the scheme rather than after, and '
         'state in advance which one the decision will turn on. The last of '
         'those costs nothing and removes most of the argument, which is '
         'presumably why it is so rarely done.')],
       items=[
        ('The first method uses a ____________ set into the road surface.',
         None, 'wire', 'Also called a loop; it counts vehicles at one '
         'point.'),
        ('Loops cannot show where vehicles came from or where they are '
         '____________.', None, 'going',
         'They register crossings at a single point only.'),
        ('Household surveys ask people to keep a travel ____________ for a '
         'week.', None, 'diary',
         'This gives journeys, which is what a planner wants.'),
        ('Reported journey time is wrong by about ____________ per cent.',
         None, 'fifteen',
         'And reliably in the flattering direction, as the lecturer puts '
         'it.'),
        ('Phone data shows where a device went but not ____________.', None,
         'why', 'So a delivery driver and a commuter look the same.'),
        ('Which group is least likely to be carrying a contract phone?',
         ['Delivery drivers', 'Low-income travellers', 'Commuters'], 1,
         'Which the lecturer calls the people policy is usually trying to '
         'help.'),
        ('After the bus lane, the loops showed crossings falling by',
         ['five per cent', 'eleven per cent', 'fifteen per cent'], 1,
         'While the phone data showed the same number of journeys '
         'completed.'),
        ('The lecturer says the two results are',
         ['contradictory', 'both correct', 'both unreliable'], 1,
         'They answer different questions, though the public argument treats '
         'one side as lying.'),
        ('A city that counts journeys will tend to find that road schemes '
         '____________ traffic.', None, 'relocate',
         'Where a city counting crossings will find that they reduce it.'),
        ('His third recommendation is to state in advance which measure the '
         '____________ will turn on.', None, 'decision',
         'He says this costs nothing and removes most of the argument.')]),
 ],
)
