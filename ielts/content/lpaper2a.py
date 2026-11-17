# -*- coding: utf-8 -*-
"""Volume 2 second timed Listening paper: four parts, 40 questions."""

LPAPER = dict(
 vol=2, level='B1+', band='5.5', form='a',
 title='Listening Paper 2',
 intro=(
   'Four parts, forty questions, one hearing of each recording. Sit this '
   'paper at least a week after the first one, and only after you have '
   'read the whole of the first key and the scripts at the back.'),
 instruct=[
  'Read the questions for each part before the recording starts, and '
  'read the last one first.',
  'Write down, before you begin, the two kinds of answer you got wrong '
  'last time: spellings, plurals, numbers, or distraction.',
  'Predict the form of each answer before you hear it. Knowing that you '
  'are waiting for a day, a number or a plural noun is most of the '
  'work.',
  'If you miss one, put a dash and move on within four seconds. One '
  'miss costs one mark; chasing it costs three.',
  'Spelling counts, and so do plurals. A correct answer written wrongly '
  'is marked wrong.'],

 parts=[

  dict(no=1, first=1, part='Part 1', band='l1',
       heading='Renting a storage unit',
       task='A telephone enquiry to a storage company · note completion',
       qtype='Questions 1-10',
       blurb='Questions 1–10. Complete the notes. Write ONE WORD '
             'AND/OR A NUMBER for each answer.',
       script=[
        ('Agent', 'Hartridge Self Storage, good afternoon.'),
        ('Caller', 'I am moving house and I need somewhere for about three '
         'months.'),
        ('Agent', 'How much are you storing?'),
        ('Caller', 'The contents of a two-bedroom flat, but not the '
         'furniture. Boxes, mostly.'),
        ('Agent', 'Then the twenty-five square foot unit is probably too '
         'small. I would take the fifty. The hundred is for a whole house '
         'with furniture.'),
        ('Caller', 'The fifty, then. What does that cost?'),
        ('Agent', 'Eighty-four pounds a month, but there is a discount for '
         'three months paid in advance, which brings it to two hundred and '
         'twenty-five.'),
        ('Caller', 'And insurance?'),
        ('Agent', 'Compulsory, I am afraid. Six pounds a month for cover up '
         'to five thousand pounds. If you want more than that you have to '
         'arrange it yourself and send us the certificate.'),
        ('Caller', 'When can I get in?'),
        ('Agent', 'The gates are open from six in the morning until ten at '
         'night, every day. The office is only staffed from nine until '
         'five, and you need the office for a trolley.'),
        ('Caller', 'Is there anything I cannot store?'),
        ('Agent', 'Nothing that burns, nothing alive, and no food. People '
         'forget the food. Also no documents you might need in a hurry, '
         'because if the payment lapses we are entitled to seal the unit.'),
        ('Caller', 'How much notice to leave?'),
        ('Agent', 'Fourteen days, in writing, and we refund any whole '
         'months. Could I take your name?'),
        ('Caller', 'Ruaridh Sandoval-Keane. S-A-N-D-O-V-A-L, then '
         'K-E-A-N-E.'),
        ('Agent', 'And where are you moving from?'),
        ('Caller', 'Flat four, Pembury Court, on the Westgate Road.'),
        ('Agent', 'I will email the agreement this afternoon. Bring '
         'photographic identification and a utility bill on the first '
         'day, or we cannot hand over the key.')],
       items=[
        ('Unit size recommended: ____________ square feet',
         None, '50', 'Twenty-five is too small for the contents of a '
         'two-bedroom flat.'),
        ('Monthly rate: £____________', None, '84',
         'Before the discount for paying three months in advance.'),
        ('Three months in advance: £____________', None, '225',
         'The agent gives the discounted total.'),
        ('Insurance: £____________ a month', None, '6',
         'Compulsory, for cover up to five thousand pounds.'),
        ('Gates open from ____________ a.m.', None, '6',
         'Until ten at night, every day of the week.'),
        ('The office is needed for a ____________', None, 'trolley',
         'The office is staffed from nine until five only.'),
        ('Not allowed: anything that burns, anything alive, and '
         '____________', None, 'food',
         'The agent says people forget this one.'),
        ('If payment lapses, the company may ____________ the unit',
         None, 'seal', 'Which is why important documents should not be '
         'stored.'),
        ('Notice to leave: ____________ days', None, 'fourteen',
         'In writing, with whole months refunded.'),
        ('Bring identification and a ____________ bill on the first day',
         None, 'utility', 'Otherwise the key cannot be handed over.')]),

  dict(no=2, first=11, part='Part 2', band='l2',
       heading='A talk about a new collection scheme',
       task='A talk to residents about refuse collection · multiple choice, note completion and short answer',
       qtype='Questions 11-20',
       blurb='Questions 11–20. Choose the correct letter, A, B or C, '
             'or write NO MORE THAN TWO WORDS for each answer.',
       script=[
        ('Officer', 'From the first of October the collection changes. '
         'The leaflet is too short to be accurate, so listen to this '
         'instead.'),
        ('Officer', 'The main change is the frequency. General waste moves '
         'from weekly to fortnightly. Recycling stays weekly. Food waste '
         'becomes weekly, which it has never been before, and that is the '
         'part people are least expecting.'),
        ('Officer', 'The reason is not money, whatever you have read; '
         'the saving is four per cent. Where food is weekly and general '
         'waste fortnightly, the recycling rate rises by between nine and '
         'fourteen points, and we are under a legal target.'),
        ('Officer', 'Two new containers: a twenty-three litre kitchen '
         'caddy and a brown outdoor bin. Both arrive in the week '
         'beginning the eighteenth of September, and you need not be '
         'in.'),
        ('Officer', 'Compostable liners are free, one roll a year, from '
         'the library. Ordinary plastic bags cannot go in: the machine '
         'finds them and the whole load is rejected.'),
        ('Officer', 'What goes in the food caddy is anything that was '
         'food, cooked or raw, including bones and shells. Not liquids, '
         'not packaging, and not garden waste, which is a separate '
         'subscription at thirty-six pounds a year.'),
        ('Officer', 'This street moves from Tuesday to Thursday. '
         'Containers out by seven in the morning. A missed collection can '
         'be reported online for two days, and they come within '
         'three.'),
        ('Officer', 'The assisted collection scheme is unchanged: if '
         'nobody can take a bin to the kerb, the crew comes to the door. '
         'You apply, and the form asks for no medical evidence, which '
         'surprises people.')],
       items=[
        ('General waste collection becomes',
         ['weekly', 'fortnightly', 'monthly'], 1,
         'Recycling stays weekly and food waste becomes weekly.',
         {0: 'Weekly is what recycling and food waste become, not '
             'general waste.', 2: 'Monthly is not an interval the officer mentions.'}),
        ('What is the stated reason for the change?',
         ['saving money', 'a legal recycling target', 'complaints from residents'],
         1,
         'The saving is only about four per cent, which the officer '
         'says is not the reason.',
         {0: 'The officer says the four per cent saving is not the '
             'reason.', 2: 'No complaints from residents are mentioned as a cause.'}),
        ('The recycling rate rises by between nine and ____________ '
         'points.', None, 'fourteen',
         'The officer gives the range found where the pattern is used.'),
        ('What is the capacity of the kitchen caddy?',
         None, '23 litres', 'Delivered with a brown outdoor bin.'),
        ('In which month are the containers delivered?',
         None, 'September',
         'In the week beginning the eighteenth, and nobody needs to be '
         'in.'),
        ('Where are the free liners collected from?',
         ['the council office', 'the library', 'the supermarket'], 1,
         'One roll a year, and ordinary plastic bags are not allowed.',
         {0: 'The council office is not where the liners are given '
             'out.', 2: 'The supermarket is not mentioned as a collection point.'}),
        ('Ordinary plastic bags are refused because the whole '
         '____________ is rejected.', None, 'load',
         'The machine detects them and the material cannot be used.'),
        ('Garden waste costs £____________ a year',
         None, '36', 'It is a separate subscription from the food '
         'collection.'),
        ('Collection day for the street moves to',
         ['Tuesday', 'Wednesday', 'Thursday'], 2,
         'With containers out by seven in the morning.',
         {0: 'Tuesday is the day the collection is moving away from.', 1: 'Wednesday is not the new day the officer announces.'}),
        ('An application for assisted collection requires no '
         '____________ evidence.', None, 'medical',
         'The officer says this surprises people.')]),

  dict(no=3, first=21, part='Part 3', band='l3',
       heading='Two students plan a poster presentation',
       task='A discussion with a supervisor · multiple choice, short answer and sentence completion',
       qtype='Questions 21-30',
       blurb='Questions 21–30. Choose the correct letter, A, B or C, '
             'or write NO MORE THAN TWO WORDS for each answer.',
       script=[
        ('Supervisor', 'You have a poster session in three weeks. Where '
         'are you?'),
        ('Noor', 'We have the data and we have about forty slides worth of '
         'material, which is the problem.'),
        ('Supervisor', 'A poster is not slides. How long will somebody '
         'stand in front of it?'),
        ('Tomasz', 'Two minutes?'),
        ('Supervisor', 'Ninety seconds, and they will read about a hundred '
         'and fifty words of it. That is your budget.'),
        ('Noor', 'A hundred and fifty words for the whole poster?'),
        ('Supervisor', 'For the words anybody reads. You can put more on '
         'it, and it will be decoration. What is the finding?'),
        ('Tomasz', 'That the effect is smaller in the second year than the '
         'first.'),
        ('Supervisor', 'Then that sentence goes at the top, in the largest '
         'type on the poster, and everything else explains it. Most '
         'posters put the title at the top and the finding at the '
         'bottom.'),
        ('Noor', 'What about the method?'),
        ('Supervisor', 'One diagram, no prose. If the method cannot be '
         'drawn, draw the part that can and answer the rest out loud.'),
        ('Tomasz', 'How many figures?'),
        ('Supervisor', 'Two. One that shows the finding and one that shows '
         'the thing somebody will object to. Three is too many and one '
         'looks thin.'),
        ('Noor', 'We have a table with eleven rows.'),
        ('Supervisor', 'Nobody reads a table standing up. Put it on a '
         'handout, with your email on it, and say the two numbers that '
         'matter.'),
        ('Tomasz', 'Colour?'),
        ('Supervisor', 'Two colours and white. And check it from two '
         'metres away, printed, before you submit it, because that is the '
         'distance at which it has to work and a screen will lie to you '
         'about every size on it.'),
        ('Noor', 'When is the file due?'),
        ('Supervisor', 'The printers need it on the Friday, nine days '
         'before, and they will not take a late one.')],
       items=[
        ('How long will a visitor stand in front of the poster?',
         ['ninety seconds', 'two minutes', 'five minutes'], 0,
         'The supervisor corrects Tomasz\u2019s estimate.',
         {1: 'Two minutes is Tomasz\u2019s estimate, which is corrected.', 2: 'Five minutes is longer than anybody in the discussion '
             'suggests.'}),
        ('How many words will a visitor read?',
         None, '150', 'That is the whole budget for words that are '
         'actually read.'),
        ('The finding should be placed',
         ['at the bottom', 'at the top in the largest type', 'in the middle'],
         1, 'And everything else on the poster explains it.',
         {0: 'The bottom is where the finding would be missed.', 2: 'The middle is not where the supervisor puts the finding.'}),
        ('The method should be shown as',
         ['a paragraph', 'one diagram', 'a list'], 1,
         'With the rest answered out loud if it cannot be drawn.',
         {0: 'A paragraph of method is what the supervisor rules out.', 2: 'A list is not what she asks for either.'}),
        ('How many figures should the poster have?',
         None, 'two', 'One for the finding and one for the likely '
         'objection.'),
        ('The second figure should show the thing somebody will '
         '____________ to.', None, 'object',
         'Which is the reason for having exactly two figures on a '
         'poster rather than one or three.'),
        ('What should happen to the table?',
         ['it should be enlarged', 'it should go on a handout', 'it should be removed entirely'],
         1,
         'With an email address on it, because nobody reads a table '
         'standing up.',
         {0: 'Enlarging the table is the opposite of the advice given.', 2: 'The table is not removed; it moves to a handout.'}),
        ('How many colours are recommended?',
         None, 'two', 'Two colours and white, which is the whole palette '
         'the supervisor allows.'),
        ('The poster should be checked, printed, from ____________ '
         'metres.', None, 'two',
         'Because a screen misleads about every size on it.'),
        ('The file is due how many days before the session?',
         None, 'nine', 'On the Friday, and the printers will not take a '
         'late one.')]),

  dict(no=4, first=31, part='Part 4', band='l4',
       heading='A lecture on why waiting lists behave oddly',
       task='A lecture on queues in public services · note completion',
       qtype='Questions 31-40',
       blurb='Questions 31–40. Complete the notes. Write NO MORE '
             'THAN TWO WORDS AND/OR A NUMBER for each answer.',
       script=[
        ('Lecturer', 'Today I want to explain why a waiting list behaves '
         'in ways that feel irrational, and why the explanation is '
         'arithmetic rather than mismanagement.'),
        ('Lecturer', 'The central fact: if arrivals equal the rate at '
         'which people are seen, the queue does not stay the same '
         'length. It grows without limit, and that follows from the '
         'variation in arrivals rather than their number.'),
        ('Lecturer', 'The reason is that arrivals are irregular. A clinic '
         'that can see forty patients a day and receives forty a day on '
         'average will receive fifty-five on some days. The extra fifteen '
         'wait. On a day with twenty-five arrivals the spare capacity '
         'cannot be stored, because an unused appointment does not keep. '
         'So the bad days accumulate and the good days do not.'),
        ('Lecturer', 'Hence the most useful number in the subject, '
         'utilisation: the proportion of capacity in use. As it rises '
         'towards a hundred per cent, waiting time rises as a curve that '
         'turns upwards. At eighty-five a system is busy; at ninety-five '
         'it is in trouble.'),
        ('Lecturer', 'Which leads to the recommendation that managers find '
         'hardest to accept. A service that is meant to be responsive has '
         'to run with capacity that is visibly unused, and an inspector '
         'who counts empty chairs will report inefficiency. The empty '
         'chairs are the responsiveness.'),
        ('Lecturer', 'There is a second mechanism, and it is about what '
         'the list is for. A waiting list is often treated as a store of '
         'demand, and in fact it changes demand. Where a wait exceeds '
         'about four months, people drop off it: they recover, they go '
         'private, or they give up. So a long list shortens itself by a '
         'route nobody would choose, and a fall in the list is not always '
         'good news.'),
        ('Lecturer', 'Third, order matters more than length. Taking the '
         'shortest cases first cuts the average wait and leaves the worst '
         'cases longest, which is efficient and indefensible, so the '
         'trade-off is a moral choice dressed as scheduling.'),
        ('Lecturer', 'The practical conclusion is to be careful what you '
         'measure. A target on the average wait rewards treating easy '
         'cases. A target on the longest wait rewards the opposite. '
         'Neither target is neutral, and a service judged on one of them '
         'will reorganise itself around it within about a year.')],
       items=[
        ('If arrivals equal capacity, the queue ____________ without '
         'limit', None, 'grows',
         'The lecturer says this surprises almost everybody.'),
        ('The cause is the ____________ in arrivals, not their number',
         None, 'variation',
         'Irregular arrivals are what produce the growth.'),
        ('Clinic capacity in the example: ____________ patients a day',
         None, '40', 'With fifty-five arriving on some days.'),
        ('Spare capacity cannot be stored because an unused appointment '
         'does not ____________', None, 'keep',
         'So bad days accumulate and good days do not.'),
        ('The proportion of capacity in use is called ____________',
         None, 'utilisation',
         'The lecturer calls it the most useful number in the subject.'),
        ('A system at ____________ per cent utilisation is in trouble',
         None, '95', 'Against eighty-five, which is merely busy.'),
        ('An inspector counting empty chairs will report ____________',
         None, 'inefficiency',
         'Although the empty chairs are what make the service '
         'responsive.'),
        ('People leave a list once the wait exceeds about ____________ '
         'months', None, 'four',
         'By recovering, going private, or giving up.'),
        ('Taking the shortest cases first is described as efficient and '
         '____________', None, 'indefensible',
         'Because it leaves the worst cases waiting longest.'),
        ('A target on the average wait rewards treating ____________ '
         'cases', None, 'easy',
         'And a target on the longest wait rewards the opposite.')]),
 ])
