# -*- coding: utf-8 -*-
"""Volume 2 timed Listening paper: four parts, 40 questions, about 30 min."""

LPAPER = dict(
 vol=2, level='B1+', band='5.5',
 title='Listening Paper',
 intro=(
   'Four parts, forty questions, one hearing of each recording. Part 1 '
   'is a conversation about everyday arrangements, Part 2 a talk by a '
   'single speaker, Part 3 a discussion, and Part 4 a lecture. The '
   'difficulty rises across the four parts, and so does the speed at '
   'which the answers arrive.'),
 instruct=[
  'Read the questions for each part before the recording starts, and '
  'read the last one first. You are given the time whether you use it '
  'or not.',
  'Predict the form of each answer before you hear it: a number, a day, '
  'a name, a plural noun. Knowing what kind of thing you are waiting '
  'for is most of the work.',
  'Write the answer as you hear it. A remembered answer is a lost '
  'answer two questions later.',
  'If you miss one, leave it and look ahead. Chasing a missed answer '
  'costs you the two that follow it, which is the commonest way to lose '
  'six marks in ninety seconds.',
  'On the computer-delivered test there is no ten-minute transfer '
  'window: you are given two minutes to check what you have typed. '
  'Practise to that rule.'],

 parts=[

  dict(no=1, first=1, part='Part 1', band='l1',
       heading='Joining a sports centre',
       task='A conversation at a reception desk',
       qtype='Questions 1-10',
       blurb='Questions 1–10. Complete the membership form. Write ONE '
             'WORD AND/OR A NUMBER for each answer.',
       script=[
        ('Receptionist', 'Good morning. Fernhill Sports Centre.'),
        ('Visitor', 'Hello. I would like to join, if I can do it '
         'today.'),
        ('Receptionist', 'You can. Can I take your name?'),
        ('Visitor', 'Marguerite Oyelaran.'),
        ('Receptionist', 'Could you spell the surname for me?'),
        ('Visitor', 'O-Y-E-L-A-R-A-N.'),
        ('Receptionist', 'Thank you. And your address?'),
        ('Visitor', 'Flat four, twenty-two Harbledown Road.'),
        ('Receptionist', 'Postcode?'),
        ('Visitor', 'F N six, three K L.'),
        ('Receptionist', 'And a telephone number?'),
        ('Visitor', 'Oh seven double nine, four one six, two eight '
         'three.'),
        ('Receptionist', 'We have three memberships. Standard is '
         'thirty-four a month for the gym and the pool. Full is '
         'forty-nine and adds the classes and the courts. Off peak is '
         'twenty-two, but not between five and eight in the '
         'evening.'),
        ('Visitor', 'I work until half past five, so off peak is no '
         'good to me. What are the classes?'),
        ('Receptionist', 'Thirty-one a week. Yoga is the one that fills '
         'up.'),
        ('Visitor', 'Then I will take the full membership.'),
        ('Receptionist', 'Forty-nine pounds a month, and there is a '
         'joining fee of fifteen, which is waived if you pay for a year '
         'in advance.'),
        ('Visitor', 'I will pay monthly, so I will pay the fifteen. Is '
         'there a minimum period?'),
        ('Receptionist', 'Three months, and then one month’s notice '
         'after that, in writing or by email.'),
        ('Visitor', 'Fine. One other thing. I had a knee operation in '
         'March.'),
        ('Receptionist', 'Then you will need to see one of the '
         'instructors before you use the gym. It takes about twenty '
         'minutes and it is free. Shall I book you in?'),
        ('Visitor', 'Please.'),
        ('Receptionist', 'Saturday the ninth at ten, with Dominic.'),
        ('Visitor', 'Saturday the ninth. And where do I park?'),
        ('Receptionist', 'The main car park is for the leisure centre '
         'next door. Ours is behind the building, off Jubilee Lane.'),
        ('Visitor', 'Thank you. That is everything.')],
       items=[
        ('Surname: ____________', None, 'Oyelaran',
         'Spelled out at the receptionist’s request.'),
        ('Address: Flat 4, ____________ Harbledown Road', None, '22',
         'Given with the flat number before the street.'),
        ('Postcode: ____________ 3KL', None, 'FN6',
         'The first half of the postcode only.'),
        ('Telephone: 0799 ____________ 283', None, '416',
         'The middle group of three digits.'),
        ('Membership chosen: ____________', None, 'full',
         'Off peak is ruled out because she works until 5.30.'),
        ('Monthly cost: £____________', None, '49',
         'The full membership rate, covering classes and courts.'),
        ('Joining fee: £____________', None, '15',
         'Payable because she is paying monthly rather than '
         'annually.'),
        ('Minimum membership period: ____________ months', None,
         'three', 'After which one month’s notice is required.'),
        ('Gym assessment booked for Saturday the ____________ at '
         '10.00', None, 'ninth',
         'Required because of her knee operation in March.'),
        ('Members’ car park entrance: off ____________ Lane', None,
         'Jubilee', 'Behind the building, not the main car park.')]),

  dict(no=2, first=11, part='Part 2', band='l2',
       heading='A talk to new volunteers at a city farm',
       task='A talk by a volunteer coordinator',
       qtype='Questions 11-20',
       blurb='Questions 11–20. Complete the notes. Write NO MORE THAN '
             'TWO WORDS for each answer.',
       script=[
        ('Coordinator', 'Welcome to Lanternside, and thank you for '
         'coming on a wet Tuesday, which tells me something useful about '
         'all of you.'),
        ('Coordinator', 'Four and a half acres between a railway line '
         'and a retail park, farmed since nineteen seventy-eight, and '
         'about forty thousand visitors a year. Nobody here is paid '
         'except me and the two livestock staff.'),
        ('Coordinator', 'Four areas. Livestock, which everybody asks '
         'for. Growing, which is the market garden. Visitors, which is '
         'the shop and the school groups. And maintenance: fences, paths '
         'and anything broken.'),
        ('Coordinator', 'Maintenance is where we are short and growing '
         'is where you learn most. Livestock takes six months to come '
         'free, so start somewhere else in the meantime.'),
        ('Coordinator', 'Shifts are four hours, one a week, for at '
         'least three months. Training somebody costs about eight hours '
         'of staff time, so a volunteer who leaves after a fortnight has '
         'cost us more than they gave.'),
        ('Coordinator', 'Boots you will need, and we have spares in '
         'sizes four to eleven. Gloves we provide. The café gives '
         'volunteers a free hot meal on shift, which is the most popular '
         'thing about working here.'),
        ('Coordinator', 'Two safety rules that are absolute. Do not go '
         'into the pig enclosure alone, ever, however long you have been '
         'here. And report every cut, however small, in the book by the '
         'kitchen door, because we have livestock and an infected cut on '
         'a farm is a different thing from an infected cut at home.'),
        ('Coordinator', 'Lastly. Visitors will ask you questions and '
         'you will not know the answers for a month. Say so and find '
         'somebody. A confident wrong answer reaches a parent by teatime '
         'and reaches me by Thursday.')],
       items=[
        ('The farm occupies ____________ acres.', None, '4.5',
         'Between a railway line and a retail park.'),
        ('It has been farmed since ____________.', None, '1978',
         'And now receives about forty thousand visitors a year.'),
        ('Paid staff: the coordinator and ____________ livestock '
         'staff.', None, 'two',
         'Everybody else at the farm is a volunteer.'),
        ('The four areas are livestock, growing, visitors and '
         '____________.', None, 'maintenance',
         'Which covers fences, paths and repairs.'),
        ('The area where the farm is short of volunteers: '
         '____________', None, 'maintenance',
         'She says this plainly, while growing teaches most.'),
        ('Livestock places take about ____________ months to come '
         'free.', None, 'six',
         'So she advises starting elsewhere in the meantime.'),
        ('Shift length: ____________ hours', None, 'four',
         'Morning or afternoon, one a week.'),
        ('Minimum commitment: ____________ months', None, 'three',
         'Because training costs about eight hours of staff time.'),
        ('Spare boots are available in sizes four to ____________.',
         None, 'eleven', 'Gloves are provided by the farm.'),
        ('Every cut must be reported in the book by the ____________ '
         'door.', None, 'kitchen',
         'One of the two absolute safety rules.')]),

  dict(no=3, first=21, part='Part 3', band='l3',
       heading='Two students choose a subject for a group project',
       task='A discussion between two students',
       qtype='Questions 21-30',
       blurb='Questions 21–30. Choose the correct letter, or complete '
             'the sentence with ONE WORD ONLY.',
       script=[
        ('Benedikt', 'We have to settle this today. Three ideas and the '
         'proposal is due Friday.'),
        ('Rosamund', 'Say them again.'),
        ('Benedikt', 'One, why students choose the courses they do. '
         'Two, what happens to food the canteen does not sell. Three, '
         'whether the new library hours changed anything.'),
        ('Rosamund', 'The first one is the one I like and the one we '
         'cannot do.'),
        ('Benedikt', 'Why not?'),
        ('Rosamund', 'Because we would need four hundred responses to '
         'say anything, and we have three weeks. We would get forty, from '
         'people in this building, and write a report about '
         'ourselves.'),
        ('Benedikt', 'That is fair. The canteen one?'),
        ('Rosamund', 'The canteen one is a measurement, which is why it '
         'appeals to me. We weigh what comes back for two weeks and we '
         'have a number nobody has.'),
        ('Benedikt', 'We need permission from catering.'),
        ('Rosamund', 'I asked on Monday. She said yes if we come after '
         'half past two, and she offered us last year’s ordering '
         'figures, which I had not thought to ask for.'),
        ('Benedikt', 'That changes it. What about the library hours?'),
        ('Rosamund', 'The data exists and we cannot have it. Entry '
         'figures are held by the facilities office and they will not '
         'release them to students without a staff signature, and our '
         'tutor is away until the twelfth.'),
        ('Benedikt', 'So the canteen, then. What is the weakness?'),
        ('Rosamund', 'Two weeks is short, and one of those weeks is the '
         'week before the holiday, when numbers are strange. I would say '
         'so in the proposal rather than hope nobody notices.'),
        ('Benedikt', 'Agreed. How do we split it?'),
        ('Rosamund', 'I will do the weighing, because I am there anyway. '
         'You take the ordering figures and the literature, and we write '
         'the discussion together on the Sunday.'),
        ('Benedikt', 'One worry. Our tutor marks us down for '
         'description without analysis, and a number is description.'),
        ('Rosamund', 'Which is why we compare it with the ordering '
         'figures. Waste against what was ordered is a ratio, and a '
         'ratio is an argument.'),
        ('Benedikt', 'That is the sentence for the proposal, '
         'actually.'),
        ('Rosamund', 'Then write it down before we forget it.')],
       items=[
        (
         'Rosamund rejects the first idea because they could not '
         'obtain enough',
         ['time', 'responses', 'permission', 'funding'], 1,
         'Four hundred would be needed and they would get about forty.',
         {0: 'Three weeks is the time they have, not what they lack.', 2: 'Permission is the obstacle to the library topic.', 3: 'Funding is not raised about any of the three ideas.'}),
        ('She says a survey of forty people in their own building '
         'would be a report about ____________.', None, 'themselves',
         'Which is her objection to the first topic.'),
        ('What appeals to her about the canteen topic is that it is a',
         ['comparison', 'measurement', 'survey', 'case study'], 1,
         'Weighing what comes back produces a number nobody has.',
         {0: 'The comparison with ordering figures comes later.', 2: 'A survey is what the first idea would have required.', 3: 'Neither student calls the canteen topic a case study.'}),
        ('The catering manager agreed on condition that they come '
         'after ____________.', None, '2.30',
         'And do not get in the way of the staff.'),
        ('The manager also offered them last year’s ____________ '
         'figures.', None, 'ordering',
         'Which Rosamund had not thought to ask for.'),
        ('The library topic is impossible because the data is held by '
         'the ____________ office.', None, 'facilities',
         'And will not be released without a staff signature.'),
        ('Their tutor is away until the ____________.', None,
         'twelfth', 'Which is why no signature can be obtained.'),
        (
         'The weakness Rosamund identifies is that one week falls '
         'before the',
         ['examinations', 'holiday', 'inspection', 'term'], 1,
         'When canteen numbers are not typical.',
         {0: 'Examinations are not mentioned by either student.', 2: 'No inspection is part of the canteen plan.', 3: 'The start of term is not the week she means.'}),
        ('Benedikt will take the ordering figures and the '
         '____________.', None, 'literature',
         'While Rosamund does the weighing.'),
        ('They agree that waste compared with what was ordered gives '
         'them a ____________.', None, 'ratio',
         'Which Rosamund says is an argument rather than a '
         'description.')]),

  dict(no=4, first=31, part='Part 4', band='l4',
       heading='A lecture on why queues form',
       task='A lecture on queues and waiting',
       qtype='Questions 31-40',
       blurb='Questions 31–40. Complete the notes. Write ONE WORD '
             'ONLY, or choose the correct letter.',
       script=[
        ('Lecturer', 'Queues are the most familiar thing in modern life '
         'that nobody understands. People believe they form because '
         'there are not enough servers. That is sometimes true. What '
         'produces most queues is variation.'),
        ('Lecturer', 'Take a counter that serves one person every two '
         'minutes and a customer who arrives every two minutes. No '
         'queue, forever, in theory. Now keep both averages exactly the '
         'same and let the arrivals bunch, which is what arrivals '
         'actually do, and a queue appears and does not clear. Nothing '
         'about the capacity changed. Only the regularity did.'),
        ('Lecturer', 'The second thing to know is what happens near the '
         'limit. At fifty per cent of capacity, waiting is negligible. '
         'At eighty, it is noticeable. At ninety, it is roughly twice '
         'what it was at eighty, and at ninety-five it is about four '
         'times. The curve goes to infinity as you approach full '
         'capacity, which is why a system run at ninety-eight per cent '
         'is not efficient but fragile.'),
        ('Lecturer', 'Managers find that hardest to accept, because '
         'spare capacity looks like waste on a spreadsheet. A hospital '
         'running its theatres at ninety-nine per cent has no room for '
         'one emergency.'),
        ('Lecturer', 'Third point, and it is the practical one. One '
         'queue feeding several servers beats one queue for each server, '
         'every time, with the same number of servers. The reason is '
         'that nobody is ever stuck behind the one difficult customer '
         'while another till stands idle. Banks worked this out decades '
         'ago; most supermarkets still have not.'),
        ('Lecturer', 'Fourth, psychology. Perceived and actual waiting '
         'are different quantities and can be managed separately. An '
         'unexplained wait feels about twice as long as an explained '
         'one, which is why mirrors by lifts reduce complaints without '
         'making any lift faster.'),
        ('Lecturer', 'The strongest effect of all is fairness. People '
         'tolerate a long wait in a queue that is plainly in order and '
         'complain bitterly about a short one in which a later arrival '
         'is served first. One airline cut complaints by a third without '
         'changing any waiting time, by making the order visible.'),
        ('Lecturer', 'So when you are asked to fix a queue, ask three '
         'questions in this order. Is the arrival pattern irregular, and '
         'can it be smoothed by appointments? Is the system running too '
         'close to capacity? And is the waiting explained, occupied and '
         'visibly fair? Adding servers is the expensive answer and it is '
         'usually the fourth-best one.')],
       items=[
        ('The lecturer says most queues are produced not by too few '
         'servers but by ____________.', None, 'variation',
         'Specifically the irregularity of arrivals.'),
        ('When arrivals bunch but the averages stay the same, a queue '
         'appears and does not ____________.', None, 'clear',
         'Although nothing about capacity has changed.'),
        ('At fifty per cent of capacity, waiting is',
         ['noticeable', 'negligible', 'doubled', 'infinite'], 1,
         'It becomes noticeable at eighty per cent.',
         {0: 'Waiting becomes noticeable at eighty per cent.', 2: 'Waiting doubles between eighty and ninety per cent.', 3: 'Waiting goes to infinity near full capacity.'}),
        ('Waiting at ninety-five per cent of capacity is about '
         '____________ times what it is at eighty.', None, 'four',
         'And at ninety it is roughly twice.'),
        ('A system run at ninety-eight per cent is described as',
         ['efficient', 'fragile', 'typical', 'illegal'], 1,
         'Because the curve rises towards infinity near full capacity.',
         {0: 'The lecturer says it is not efficient at all.', 2: 'He does not call ninety-eight per cent typical.', 3: 'Nothing about it is described as illegal.'}),
        ('Managers resist the finding because spare capacity looks '
         'like ____________ on a spreadsheet.', None, 'waste',
         'Though it is what absorbs an emergency.'),
        ('One queue feeding several servers prevents customers being '
         'stuck behind one ____________ customer.', None, 'difficult',
         'While another server stands idle.'),
        ('An unexplained wait feels about ____________ as long as an '
         'explained one.', None, 'twice',
         'Which is a difference in perceived rather than actual '
         'waiting.'),
        ('One airline reduced complaints by a third by making the '
         '____________ visible.', None, 'order',
         'Without changing any actual waiting time.'),
        ('The lecturer says adding servers is usually the '
         '____________-best answer.', None, 'fourth',
         'After smoothing arrivals, reducing load and managing '
         'perception.')]),
 ],
)
