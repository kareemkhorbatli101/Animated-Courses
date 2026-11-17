# -*- coding: utf-8 -*-
"""Volume 1 second timed Listening paper: four parts, 40 questions."""

LPAPER = dict(
 vol=1, level='B1', band='5.0', form='a',
 title='Listening Paper 2',
 intro=(
   'Four parts, forty questions, one hearing of each recording. Sit this '
   'paper at least a week after the first one, and only after you have '
   'read the whole of the first key and the scripts at the back. On '
   'Listening almost every mark is lost for a reason you can name.'),
 instruct=[
  'Read the questions for each part before the recording starts, and '
  'read the last one first. You are given the time whether you use it '
  'or not.',
  'Write down, before you begin, the two kinds of answer you got wrong '
  'last time: spellings, plurals, numbers, or distraction. Those are '
  'what to watch for here.',
  'Predict the form of each answer before you hear it. Knowing that you '
  'are waiting for a day, a number or a plural noun is most of the '
  'work.',
  'If you miss one, put a dash and move on within four seconds. One '
  'miss costs one mark; chasing it costs three.',
  'Spelling counts. A correct answer written wrongly is marked wrong, '
  'and the names and places in each recording are spelled out once.'],

 parts=[

  dict(no=1, first=1, part='Part 1', band='l1',
       heading='Hiring a hall for a club meeting',
       task='A telephone call to a community centre · note completion',
       qtype='Questions 1-10',
       blurb='Questions 1–10. Complete the notes. Write ONE WORD '
             'AND/OR A NUMBER for each answer.',
       script=[
        ('Receptionist', 'Marsden Community Centre, how can I help?'),
        ('Caller', 'I run a walking club. We need a room once a month for '
         'about thirty people.'),
        ('Receptionist', 'The Oak Room holds forty-five. The Studio holds '
         'thirty-two but has no windows.'),
        ('Caller', 'The Oak Room, then. Is the first Thursday free?'),
        ('Receptionist', 'Thursday there is a choir until nine. Tuesday '
         'or Wednesday are clear.'),
        ('Caller', 'Wednesday. Seven until nine, with fifteen minutes '
         'before to set out chairs.'),
        ('Receptionist', 'From a quarter to seven, then. Nine pounds an '
         'hour for a club, charged from the hour you come in. Twenty '
         'pounds twenty-five for the evening.'),
        ('Caller', 'Is there a deposit?'),
        ('Receptionist', 'Fifty pounds, returnable. The hire can go on a '
         'card; the deposit has to be a transfer.'),
        ('Caller', 'Can we make tea in the room?'),
        ('Receptionist', 'A kitchen next door, free with the room. Bring '
         'your own milk. Parking is eighteen spaces at the back, free '
         'after six, barrier down at half past ten.'),
        ('Caller', 'My name is Ingrid Vasquez-Attwell. V-A-S-Q-U-E-Z, '
         'then A-T-T-W-E-L-L.'),
        ('Receptionist', 'Thank you. I will send the form today. One '
         'thing before you go: if you cancel a meeting we need seven '
         'days\u2019 notice, or we have to charge you for the room '
         'anyway.')],
       items=[
        ('Room booked: the ____________ Room', None, 'Oak',
         'The caller chooses it because the Studio has no windows.'),
        ('Room capacity: ____________', None, '45',
         'The Oak Room holds forty-five; the Studio holds thirty-two.'),
        ('Evening booked: ____________', None, 'Wednesday',
         'Thursday is taken by a choir, and the caller prefers Wednesday '
         'to Tuesday.'),
        ('Access from: ____________ p.m.', None, '6.45',
         'Fifteen minutes before seven, to set out the chairs.'),
        ('Rate: £____________ an hour', None, '9',
         'The club rate, charged from the hour the hirers arrive.'),
        ('Total for the evening: £____________', None, '20.25',
         'Two and a quarter hours at nine pounds, which the receptionist '
         'works out aloud.'),
        ('Deposit, paid by ____________', None, 'transfer',
         'A card may be used for the hire but not for the deposit.'),
        ('Number of parking spaces: ____________', None, '18',
         'At the back of the centre, and free after six in the '
         'evening.'),
        ('The barrier closes at ____________ p.m.', None, '10.30',
         'The receptionist gives it with the parking arrangements.'),
        ('Notice needed to cancel: ____________ days', None, 'seven',
         'Otherwise the room is charged for anyway.')]),

  dict(no=2, first=11, part='Part 2', band='l2',
       heading='A talk about a new library service',
       task='A talk by a librarian to a residents’ group · multiple choice and short answer',
       qtype='Questions 11-20',
       blurb='Questions 11–20. Choose the correct letter, A, B or C, '
             'or write NO MORE THAN TWO WORDS for each answer.',
       script=[
        ('Librarian', 'Good evening. I am here to say what changes at the '
         'branch library in September, because much of what you have '
         'read is wrong.'),
        ('Librarian', 'The building is not closing. The staffing changes. '
         'At present we open thirty-two hours a week with a librarian '
         'throughout. From September we open fifty-four, with a librarian '
         'for twenty-eight and volunteers for the rest. For borrowing, '
         'that is a gain. For help with a form, come between ten and '
         'four on a weekday.'),
        ('Librarian', 'There will be three self-service machines by the '
         'door. They take borrowing, returning and fines. They do not '
         'take reservations from other branches, which still need staff, '
         'and they take no cash.'),
        ('Librarian', 'The children’s section moves upstairs, into '
         'the reference room. That has produced the most complaints. The '
         'printed reference collection was used forty-one times last '
         'year, so it goes down to one wall. The children gain a door '
         'that shuts, and the lift is being repaired first.'),
        ('Librarian', 'Study tables: twelve instead of eight, four with '
         'power points, the most requested thing in every survey. No '
         'booking except the fortnight before public examinations.'),
        ('Librarian', 'One loss, honestly. Two newspapers stay and seven '
         'go. The saving pays about a third of the extra hours. The '
         'consultation closes on the fourteenth of July, on the council '
         'website rather than ours.')],
       items=[
        ('The library building will',
         ['close in September', 'stay open for longer hours',
          'move to a new site'], 1,
         'Open fifty-four hours instead of thirty-two, with less '
         'professional staffing.'),
        ('How many hours a week will a librarian be present?',
         None, '28', 'Down from thirty-two, while the building opens for '
         'fifty-four.'),
        ('Somebody needing help with a form should come',
         ['at any time', 'in the evening', 'between ten and four'], 2,
         'The speaker is explicit about when a librarian will be '
         'there.'),
        ('How many self-service machines will there be?',
         None, 'three', 'By the main door, for borrowing, returning and '
         'fines.'),
        ('The machines cannot deal with',
         ['fines', 'reservations from other branches', 'returns'], 1,
         'Those still need a member of staff, and the machines take no '
         'cash either.'),
        ('Where will the children’s section move to?',
         None, 'upstairs',
         'Into what is at present the reference room.'),
        ('Last year the printed reference collection was used',
         ['eleven times', 'four hundred times', 'forty-one times'], 2,
         'The figure is given as the reason for reducing it to one '
         'wall.'),
        ('How many study tables will have power points?',
         None, 'four', 'Out of twelve, up from eight tables in total.'),
        ('Booking a table will be necessary',
         ['every day', 'never',
          'in the fortnight before public examinations'], 2,
         'When the tables fill before the morning is over.'),
        ('How many newspapers will still be taken?',
         None, 'two', 'Seven are being cancelled, and the saving pays for '
         'about a third of the extra hours.')]),

  dict(no=3, first=21, part='Part 3', band='l3',
       heading='Two students discuss a reading list',
       task='A tutorial discussion · short answer, multiple choice and sentence completion',
       qtype='Questions 21-30',
       blurb='Questions 21–30. Choose the correct letter, A, B or C, '
             'or write NO MORE THAN TWO WORDS for each answer.',
       script=[
        ('Tutor', 'Tell me how the reading is going.'),
        ('Dilan', 'Badly. Twenty-six items on the list and I have read '
         'four properly. I have looked at about fifteen.'),
        ('Priyasha', 'I did the opposite. Six from beginning to end, and '
         'I have not opened the other twenty.'),
        ('Tutor', 'So which of you can answer the essay question?'),
        ('Priyasha', 'Neither. It asks us to compare approaches and I '
         'know one well.'),
        ('Dilan', 'And I know what twelve people think, not why.'),
        ('Tutor', 'That is the useful remark. The list is four things to '
         'read and twenty-two to know about.'),
        ('Dilan', 'Which four?'),
        ('Tutor', 'The first name in each section. The list is ordered by '
         'importance, not alphabetically, and nobody noticed, which is '
         'my fault.'),
        ('Priyasha', 'Can I ask about notes? I write a page for every '
         'chapter and then I never read any of it again.'),
        ('Tutor', 'Then stop. One sentence saying what the author would '
         'say about our essay question, and the page that proves it.'),
        ('Dilan', 'That sounds much too short to be a summary of a '
         'whole chapter.'),
        ('Tutor', 'It is the right length to be useful in eight weeks. '
         'For the rest, the abstract and the conclusion, twenty minutes '
         'each.'),
        ('Dilan', 'And when should we actually start writing the '
         'essay?'),
        ('Tutor', 'Week six. Writing tells you what you do not '
         'understand; reading tells you nothing about that.')],
       items=[
        ('How many items are on the reading list?',
         None, '26', 'Dilan gives the figure at the start.'),
        ('How many has Dilan read properly?',
         ['four', 'six', 'fifteen'], 0,
         'He has looked at about fifteen and read four.'),
        ('Priyasha has read six items',
         ['partly', 'from beginning to end', 'twice'], 1,
         'And she has not opened the other twenty at all.'),
        ('The essay question asks the students to',
         ['summarise one approach', 'compare approaches',
          'describe the list'], 1,
         'Which is why neither reading strategy has worked.'),
        ('According to the tutor, how many items should be read fully?',
         None, 'four', 'The rest are to be known about rather than '
         'read.'),
        ('The reading list is ordered by',
         ['the alphabet', 'date of publication', 'importance'], 2,
         'The tutor says she ordered it and nobody noticed.'),
        ('Priyasha’s notes are currently',
         ['too short', 'a page a chapter', 'written on cards'], 1,
         'And she never reads them again, which is the tutor’s '
         'point.'),
        ('A note should state what the author would say about the '
         '____________ question.', None, 'essay',
         'With the page number for the part that proves it.'),
        ('For the other items the students should read the abstract and '
         'the ____________.', None, 'conclusion',
         'Twenty minutes each, to find out whether they disagree.'),
        ('In which week does the tutor say they should start writing?',
         None, 'six', 'Earlier than either student wants, because '
         'writing shows what is not understood.')]),

  dict(no=4, first=31, part='Part 4', band='l4',
       heading='A lecture on why bridges are inspected',
       task='A lecture to first-year engineering students · note completion',
       qtype='Questions 31-40',
       blurb='Questions 31–40. Complete the notes. Write NO MORE '
             'THAN TWO WORDS AND/OR A NUMBER for each answer.',
       script=[
        ('Lecturer', 'I want to use bridge inspection to make a point '
         'that is not really about bridges.'),
        ('Lecturer', 'About nine thousand road bridges here carry more '
         'than a thousand vehicles a day. Each is inspected visually '
         'every two years and in detail every six. A detailed inspection '
         'means touching the structure, which means closing a lane.'),
        ('Lecturer', 'Why inspect? Because we cannot calculate our way to '
         'safety. The design margin covers the loads that were '
         'predicted. It does not cover an overloaded lorry, water in a '
         'joint, or forty years of salt.'),
        ('Lecturer', 'The commonest fault is not cracking. It is '
         'drainage. A blocked drain puts water where the design assumed '
         'none, and salt follows it to the steel. About half of concrete '
         'defects here begin with a blocked drain, and clearing one '
         'costs sixty pounds.'),
        ('Lecturer', 'Sixty pounds against a six-figure repair is the '
         'whole case for maintenance, and it never wins a budget, '
         'because the sixty pounds buys nothing happening.'),
        ('Lecturer', 'A visual inspection finds the surface. By the time '
         'corrosion shows there it is five to ten years old. Instruments '
         'see further and are slow, so they follow the visual '
         'inspection.'),
        ('Lecturer', 'So the system is not designed to catch everything. '
         'It is designed to catch things while they are cheap, and the '
         'interval is a judgement about money.'),
        ('Lecturer', 'In 1967 a bridge in the United States collapsed '
         'and forty-six people died. The cause was a crack in one '
         'eyebar, two millimetres long when the bridge was built. Nobody '
         'saw it because the design gave no access to it.'),
        ('Lecturer', 'The lesson was not about eyebars. A structure has '
         'to be designed so that it can be looked at, and '
         'inspectability is now a design requirement.')],
       items=[
        ('Number of bridges carrying 1,000+ vehicles a day: '
         '____________ thousand', None, 'nine',
         'The lecturer gives the figure at the start.'),
        ('Visual inspection: every ____________ years', None, 'two',
         'With a detailed inspection every six.'),
        ('A detailed inspection usually means closing a ____________',
         None, 'lane', 'Because it involves touching the structure.'),
        ('Design margins cover only the loads that were ____________',
         None, 'predicted',
         'Not overloading, water in joints, or decades of salt.'),
        ('Commonest fault found: blocked ____________', None, 'drainage',
         'The lecturer corrects the expectation that it would be '
         'cracking.'),
        ('Proportion of concrete defects beginning with a blocked drain: '
         'about ____________', None, 'half',
         'And clearing one costs about sixty pounds.'),
        ('Corrosion is usually ____________ years old before it shows',
         None, 'five to ten',
         'Because the reinforcement is inside and the inspection is '
         'visual.'),
        ('The system is designed to catch problems while they are '
         '____________', None, 'cheap',
         'Not to catch everything, which the lecturer says plainly, and '
         'the interval is a judgement about money.'),
        ('Year of the collapse described: ____________', None, '1967',
         'Forty-six people were killed when a single eyebar failed.'),
        ('The crack was never seen because the design gave no '
         '____________', None, 'access',
         'Which is why inspectability became a design requirement.')]),
 ])
