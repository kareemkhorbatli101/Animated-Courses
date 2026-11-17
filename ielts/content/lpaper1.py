# -*- coding: utf-8 -*-
"""Volume 1 timed Listening paper: four parts, 40 questions, about 30 min."""

LPAPER = dict(
 vol=1, level='B1', band='5.0',
 title='Listening Paper',
 intro=(
   'Four parts, forty questions, one hearing of each recording. Part 1 '
   'is a conversation about everyday arrangements, Part 2 a talk by a '
   'single speaker, Part 3 a discussion and Part 4 a lecture. The '
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
  'If you miss one, put a dash and move on within four seconds. One '
  'miss costs one mark; chasing it costs three.',
  'On the computer-delivered test there is no ten-minute transfer '
  'window: you are given two minutes to check what you have typed. '
  'Practise to that rule.'],

 parts=[

  dict(no=1, first=1, part='Part 1', band='l1',
       heading='Booking a room for a family party',
       task='A telephone call to a village hall',
       qtype='Questions 1-10',
       blurb='Questions 1–10. Complete the booking form. Write ONE '
             'WORD AND/OR A NUMBER for each answer.',
       script=[
        ('Clerk', 'Fenwick Village Hall, good morning.'),
        ('Caller', 'I would like to book the hall for a birthday '
         'party.'),
        ('Clerk', 'Which room? The main hall takes a hundred and twenty '
         'and the Garden Room takes forty.'),
        ('Caller', 'About fifty people.'),
        ('Clerk', 'Then the main hall, I am afraid. We cannot exceed '
         'forty in the Garden Room because of the fire door.'),
        ('Caller', 'The main hall, then. Saturday the eighteenth.'),
        ('Clerk', 'Afternoon or evening?'),
        ('Caller', 'Afternoon. Two until six.'),
        ('Clerk', 'Four hours at fourteen pounds an hour is fifty-six '
         'pounds. Can I take your name?'),
        ('Caller', 'Imogen Castellanos. C-A-S-T-E-L-L-A-N-O-S.'),
        ('Clerk', 'Thank you. And a telephone number?'),
        ('Caller', 'Oh seven six five, three three one, eight two '
         'four.'),
        ('Clerk', 'There is a deposit of thirty pounds, returned within '
         'ten days if the hall is left clean.'),
        ('Caller', 'What counts as clean?'),
        ('Clerk', 'Floor swept, bins emptied into the yard, tables '
         'folded against the wall. Most people lose the deposit on the '
         'tables rather than the floor.'),
        ('Caller', 'Noted. Is there a kitchen?'),
        ('Clerk', 'A kitchen with a kettle, an urn and a fridge, but no '
         'oven. And no alcohol may be sold, although you may bring '
         'your own.'),
        ('Caller', 'We are bringing our own. What about music?'),
        ('Clerk', 'Music until half past ten, and the hall must be empty '
         'by eleven. Your booking reference is F H two six nine.')],
       items=[
        ('Room booked: ____________ hall', None, 'main',
         'Because the Garden Room takes only forty.'),
        ('Date: Saturday the ____________', None, 'eighteenth',
         'In the afternoon, from two until six.'),
        ('Time: 2 p.m. until ____________ p.m.', None, '6',
         'Four hours in total, at fourteen pounds each.'),
        ('Cost: £____________', None, '56',
         'Four hours at fourteen pounds an hour.'),
        ('Surname: ____________', None, 'Castellanos',
         'Spelled out letter by letter by the caller.'),
        ('Telephone: 0765 ____________ 824', None, '331',
         'The middle group of three digits.'),
        ('Deposit: £____________', None, '30',
         'Returned within ten days if the hall is left clean.'),
        ('Most people lose the deposit over the ____________.', None,
         'tables', 'Rather than the floor or the bins.'),
        ('The kitchen has a kettle, an urn and a fridge but no '
         '____________.', None, 'oven',
         'And no alcohol may be sold, though it may be brought.'),
        ('Booking reference: FH____________', None, '269',
         'Given by the clerk at the end of the call.')]),

  dict(no=2, first=11, part='Part 2', band='l2',
       heading='A talk about a new cycle path',
       task='A talk at a public meeting',
       qtype='Questions 11-20',
       blurb='Questions 11–20. Complete the notes. Write NO MORE THAN '
             'TWO WORDS OR A NUMBER for each answer.',
       script=[
        ('Officer', 'Good evening. Twelve minutes on the cycle path, '
         'then questions, and I will start with the two things people '
         'always ask.'),
        ('Officer', 'It is four and a half kilometres, from the station '
         'to the hospital, and it will open in September rather than '
         'June, because of the bridge.'),
        ('Officer', 'The route follows the old railway for three '
         'kilometres, which is flat and already council land. The '
         'remaining kilometre and a half runs beside Fenwick Road, and '
         'that section is expensive because it needs a barrier.'),
        ('Officer', 'Cost is one point eight million, of which one '
         'point one is the bridge over the stream. People find that '
         'surprising; it is normal, because structures cost many times '
         'what surfacing costs.'),
        ('Officer', 'Two objections have been raised and both are '
         'reasonable. The allotment holders lose eleven plots. We are '
         'offering plots at Marsh Lane plus removal costs, and seven of '
         'the eleven have accepted.'),
        ('Officer', 'The second objection is the hedge. Four hundred '
         'metres has to come out. We are replanting double that length, '
         'which will be better in fifteen years and worse until '
         'then.'),
        ('Officer', 'What the path is for is worth saying plainly. Not '
         'for people who already cycle; they use the road. For the '
         'people who have told us in three surveys that they would cycle '
         'if they did not have to share the A road with lorries.'),
        ('Officer', 'In two comparable schemes in this county, cycling '
         'to work rose about forty per cent along the route and by '
         'nothing two streets away. These paths change a corridor, not a '
         'town.')],
       items=[
        ('Length of the path: ____________ kilometres', None, '4.5',
         'From the station to the hospital.'),
        ('Opening: ____________ rather than June', None, 'September',
         'Delayed because of the bridge.'),
        ('____________ kilometres follow the old railway.', None,
         'Three', 'Flat, straight and already council land.'),
        ('The section beside Fenwick Road needs a ____________.',
         None, 'barrier', 'Which is why it is the expensive part.'),
        ('Total cost: £____________ million', None, '1.8',
         'Of which 1.1 million is the bridge.'),
        ('The allotment holders lose ____________ plots.', None,
         'eleven', 'With replacements offered at Marsh Lane.'),
        ('____________ of the eleven have accepted the offer.', None,
         'Seven', 'Along with the costs of moving to Marsh Lane.'),
        ('____________ metres of hedge must be removed.', None, 'Four '
         'hundred', 'With double that length replanted.'),
        ('The path is intended for people who would cycle if they did '
         'not have to share the road with ____________.', None,
         'lorries', 'Rather than for existing cyclists.'),
        ('In comparable schemes, cycling to work rose by about '
         '____________ per cent along the route.', None, 'forty',
         'And by nothing two streets away.')]),

  dict(no=3, first=21, part='Part 3', band='l3',
       heading='Two students plan a survey',
       task='A discussion between two students',
       qtype='Questions 21-30',
       blurb='Questions 21–30. Choose the correct letter, or complete '
             'the sentence with ONE WORD ONLY.',
       script=[
        ('Marguerite', 'We have to hand the design in on Friday and we '
         'still have not decided who we are asking.'),
        ('Obafemi', 'Everybody who uses the sports centre.'),
        ('Marguerite', 'That is the problem rather than the answer. '
         'Everybody who uses it is already using it. We want to know why '
         'people stop.'),
        ('Obafemi', 'Then we need the ones who left, and the centre will '
         'not give us their details.'),
        ('Marguerite', 'They will give us a count. Three hundred and '
         'forty people cancelled last year.'),
        ('Obafemi', 'Out of?'),
        ('Marguerite', 'Nine hundred members. So more than a third.'),
        ('Obafemi', 'That is higher than I expected.'),
        ('Marguerite', 'It is the normal figure, apparently. The '
         'manager said about forty per cent a year across the county.'),
        ('Obafemi', 'So how do we reach them?'),
        ('Marguerite', 'The centre has offered to forward one email for '
         'us. We write it, they send it, nobody gives us an address.'),
        ('Obafemi', 'Then the response rate will be terrible.'),
        ('Marguerite', 'About eight per cent, which is twenty-seven '
         'people, and it is twenty-seven more than anybody else has '
         'asked.'),
        ('Obafemi', 'Fair. What do we ask them?'),
        ('Marguerite', 'One question. "What was happening in your life '
         'in the month you stopped coming?" Not why did you stop.'),
        ('Obafemi', 'Why not why?'),
        ('Marguerite', 'Because people answer "why" with a reason they '
         'have invented afterwards. If you ask what was happening, you '
         'get a new job, an illness, a house move.'),
        ('Obafemi', 'That is a better question than anything in our '
         'draft. Put that in the design and I will write the '
         'literature.')],
       items=[
        ('Marguerite objects to surveying current users because they '
         'are', ['too busy', 'already using it', 'hard to reach',
          'unrepresentative'], 1,
         'The question is about why people stop.'),
        ('____________ people cancelled their membership last year.',
         None, '340', 'Out of a total of nine hundred members.'),
        ('That is more than a ____________ of the membership.', None,
         'third', 'Which is higher than Obafemi expected.'),
        ('Across the county the figure is about ____________ per '
         'cent a year.', None, 'forty',
         'According to the centre manager.'),
        ('The centre has offered to forward one ____________ for '
         'them.', None, 'email',
         'Without releasing any addresses.'),
        ('Marguerite expects a response rate of about ____________ '
         'per cent.', None, 'eight',
         'Which works out at about twenty-seven people.'),
        ('She says twenty-seven responses are worth having because '
         'nobody else has', ['published them', 'asked',
          'counted them', 'paid for them'], 1,
         'Which is her answer to the objection.'),
        ('Their single question asks what was happening in the '
         '____________ when the person stopped coming.', None,
         'month', 'Rather than asking them why they stopped.'),
        ('She avoids "why" because people answer with a reason '
         'invented ____________.', None, 'afterwards',
         'Instead of what was actually happening.'),
        ('Obafemi agrees to write the ____________.', None,
         'literature', 'While she puts the question in the design.')]),

  dict(no=4, first=31, part='Part 4', band='l4',
       heading='A lecture on why queues at supermarkets differ',
       task='A lecture on everyday measurement',
       qtype='Questions 31-40',
       blurb='Questions 31–40. Complete the notes. Write ONE WORD '
             'ONLY, or choose the correct letter.',
       script=[
        ('Lecturer', 'I want to use a supermarket queue to show you '
         'something that applies to hospitals, call centres and road '
         'junctions, because the mathematics is identical and the '
         'supermarket is the one you have all stood in.'),
        ('Lecturer', 'First fact. If customers arrive at a steady rate '
         'and are served slightly faster, no queue ever forms. That '
         'situation exists nowhere, because arrivals bunch.'),
        ('Lecturer', 'Variation is what makes queues, not shortage of '
         'tills. You can prove that to yourself: the queue at nine in '
         'the morning and the queue at five in the afternoon can have '
         'the same average arrivals and completely different waiting '
         'times.'),
        ('Lecturer', 'Second fact, and this is the one managers resist. '
         'Waiting time rises very sharply as you approach full capacity. '
         'At eighty per cent of capacity the wait is noticeable. At '
         'ninety-five per cent it is about four times that, and the '
         'curve goes to infinity at a hundred.'),
        ('Lecturer', 'Which means a system running at ninety-eight per '
         'cent is not efficient. It is fragile. One ill member of staff '
         'and the afternoon collapses, and the spreadsheet that set '
         'ninety-eight per cent as the goal had no column for that.'),
        ('Lecturer', 'Third, the practical one. One queue feeding six '
         'tills beats six separate queues, every time, with the same '
         'six tills, because nobody gets stuck behind the one difficult '
         'transaction while another till stands empty. Banks worked this '
         'out in the nineteen seventies. Supermarkets mostly have '
         'not.'),
        ('Lecturer', 'And fourth, the one that is not mathematics at '
         'all. An unexplained wait feels roughly twice as long as an '
         'explained one, and an unfair wait produces complaints out of '
         'all proportion to its length. People wait twenty minutes in an '
         'orderly queue and complain about six if a later arrival is '
         'served first.'),
        ('Lecturer', 'So when you are asked to fix a queue anywhere in '
         'your working life, ask the questions in this order. Can the '
         'arrivals be smoothed? Is the system too close to capacity? Is '
         'the waiting explained and visibly fair? Adding servers is the '
         'expensive answer and it is usually the fourth best one.')],
       items=[
        ('Queues are produced by ____________ rather than by too few '
         'tills.', None, 'variation',
         'Because arrivals bunch instead of being steady.'),
        ('The same average arrivals can produce completely different '
         '____________ times.', None, 'waiting',
         'At nine in the morning and five in the afternoon.'),
        ('At eighty per cent of capacity the wait is described as',
         ['negligible', 'noticeable', 'fourfold', 'infinite'], 1,
         'Rising sharply as capacity is approached.'),
        ('At ninety-five per cent the wait is about ____________ '
         'times that.', None, 'four',
         'And the curve goes to infinity at a hundred.'),
        ('A system at ninety-eight per cent of capacity is not '
         'efficient but ____________.', None, 'fragile',
         'One absence collapses the afternoon.'),
        ('He says the spreadsheet had no column for one ill member '
         'of ____________.', None, 'staff',
         'Which is the cost of running at that level.'),
        ('One queue feeding six tills prevents customers being stuck '
         'behind one ____________ transaction.', None, 'difficult',
         'While another till stands empty.'),
        ('Banks worked this out in the ____________.', None,
         'seventies', 'And most supermarkets have not.'),
        ('An unexplained wait feels about ____________ as long as an '
         'explained one.', None, 'twice',
         'Which is a matter of perception rather than mathematics.'),
        ('He says adding servers is usually the ____________ best '
         'answer.', None, 'fourth',
         'After smoothing arrivals, reducing load and managing '
         'fairness.')]),
 ],
)
