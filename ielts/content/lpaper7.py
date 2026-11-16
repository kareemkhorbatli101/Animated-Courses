# -*- coding: utf-8 -*-
"""Foundation 1, Progress Test: Listening.

Four parts, five questions each, one hearing. The real paper's shape at
this book's length. Everything that will still be true at forty
questions is already true here: the answers come in order, the recording
does not wait, and the last thing a candidate does is copy the answers
across without being given time for it.
"""

LPAPER = dict(
 vol=7, level='A1-A2', band='below 4.0',
 title='Progress Test · Listening',
 intro=(
   'Four parts, twenty questions, each recording played once. Part 1 is '
   'a conversation about an everyday arrangement, Part 2 one speaker '
   'describing something, Part 3 a discussion between two students and '
   'Part 4 a short talk. This is not a full IELTS Listening paper. It '
   'is the same shape at the length you can follow now, and every habit '
   'it asks for is one you will still need when the recordings are '
   'twice as long.'),
 instruct=[
   'Read the questions for each part before the recording begins. You '
   'are given that time whether you use it or not.',
   'Decide what kind of word each gap needs: a number, a day, a name, '
   'a place.',
   'Write your answers while the recording is still playing, and keep '
   'your eyes on the next question.',
   'If you miss one, put a dot beside it and go on. Fill in every dot '
   'at the end, and never leave a blank.'],
 parts=[
  dict(no=1, first=1, part='Part 1', band='l1',
       heading='Booking a room at the community centre',
       task='A telephone conversation', qtype='Questions 1-5',
       blurb='A conversation about an arrangement. Listen for numbers, '
             'days and names.',
       script=[
        ('Clerk', 'Ashbury Community Centre, good morning.'),
        ('Caller', 'I would like to book a room for a birthday party.'),
        ('Clerk', 'How many people?'),
        ('Caller', 'About thirty-five.'),
        ('Clerk', 'Then the large hall. The small room takes twenty. '
         'Which date?'),
        ('Caller', 'Saturday the eighteenth, in the afternoon.'),
        ('Clerk', 'The eighteenth is free from two until six. The '
         'morning is taken by a swimming club.'),
        ('Caller', 'Two until six is fine. What does it cost?'),
        ('Clerk', 'Forty-five pounds, and a deposit of twenty which '
         'comes back if the room is left clean.'),
        ('Caller', 'Is there a kitchen?'),
        ('Clerk', 'A small one, with a kettle and a fridge but no '
         'cooker. People usually bring food ready made.'),
        ('Caller', 'And can we play music?'),
        ('Clerk', 'Until half past five, not after. The houses behind '
         'are close.'),
        ('Caller', 'That is fine. The name is Okoro. O-K-O-R-O.'),
        ('Clerk', 'Thank you. I will email the form today.')],
       items=[
        ('The party is for about ____________ people.', None,
         'thirty-five', 'Which is why the large hall is offered.'),
        ('The booking is for Saturday the ____________.', None,
         'eighteenth', 'In the afternoon, from two until six.'),
        ('The room costs ____________ pounds.', None, 'forty-five',
         'With a deposit of twenty pounds as well.'),
        ('The kitchen has a kettle and a fridge but no ____________.',
         None, 'cooker', 'So people bring food ready made.'),
        ('Music must stop at half past ____________.', None, 'five',
         'Because the houses behind are close.')]),
  dict(no=2, first=6, part='Part 2', band='l2',
       heading='A talk about the new footpath',
       task='One speaker describing a local change',
       qtype='Questions 6-10',
       blurb='One speaker. Listen for the reasons as well as the '
             'numbers.',
       script=[
        ('Speaker', 'The new footpath opens on the first of April and I '
         'want to tell you three things about it before it does.'),
        ('Speaker', 'It is four kilometres long and it runs from the '
         'station to the wood, beside the river the whole way. It is '
         'flat, which matters more than people expect: the old path '
         'climbed forty metres for no reason and that stopped a lot of '
         'people using it.'),
        ('Speaker', 'The surface is the part that took the money. It is '
         'not stone and it is not grass; it is a hard surface that '
         'drains, which means it can be used in February as well as in '
         'July. Half the cost of the whole scheme was the drainage you '
         'will never see.'),
        ('Speaker', 'There are two gates rather than six, because '
         'every gate stops somebody with a wheelchair or a '
         'pushchair.'),
        ('Speaker', 'Finally, the lights. There are none, and that was '
         'deliberate: lighting would have cost the same as the path '
         'itself and the bats along the river feed in the dark. The '
         'path closes at dusk and opens at seven.')],
       items=[
        ('The path is ____________ kilometres long.', None, 'four',
         'Running from the station to the wood.'),
        ('The old path climbed ____________ metres.', None, 'forty',
         'Which stopped many people using it.'),
        ('____________ the cost of the scheme was the drainage.', None,
         'Half', 'Which is the part nobody will see.'),
        ('There are ____________ gates on the new path.', None, 'two',
         'Rather than six, because gates stop wheelchairs.'),
        ('There are no ____________ along the path.', None, 'lights',
         'Because of the cost and the bats along the river.')]),
  dict(no=3, first=11, part='Part 3', band='l3',
       heading='Two students plan a survey',
       task='A discussion between two students',
       qtype='Questions 11-15',
       blurb='Two speakers who disagree. Listen for what they decide, '
             'not what they suggest.',
       script=[
        ('Tutor', 'You are surveying how people travel to the college. '
         'Where have you got to?'),
        ('Nina', 'We have the question list. Eight questions, and we '
         'cut four because nobody answers a long survey in a car '
         'park.'),
        ('Omar', 'I wanted ten. I agreed to eight because Nina tried '
         'it on twelve people and three of them walked away.'),
        ('Tutor', 'When will you do it?'),
        ('Nina', 'Tuesday and Thursday, between eight and nine in the '
         'morning.'),
        ('Omar', 'Which is my worry. Everybody we catch at eight is '
         'somebody with a nine o clock class. The ones who come at '
         'eleven travel differently.'),
        ('Nina', 'That is fair. We could add Wednesday at eleven.'),
        ('Omar', 'Then the sample is three mornings and still no '
         'afternoon.'),
        ('Tutor', 'How many answers do you need?'),
        ('Nina', 'A hundred and twenty, which is about one student in '
         'nine.'),
        ('Omar', 'We will get that in three mornings. I would rather '
         'have ninety across five times of day.'),
        ('Tutor', 'Write both numbers in the report and say which you '
         'chose and why.')],
       items=[
        ('The survey has ____________ questions.', None, 'eight',
         'Cut down from twelve after a trial.'),
        ('____________ of the twelve people tried walked away.', None,
         'Three', 'Which is why the list was shortened.'),
        ('Nina wants to survey on Tuesday and ____________.', None,
         'Thursday', 'Between eight and nine in the morning.'),
        ('Omar says those caught at eight have a ____________ o clock '
         'class.', None, 'nine',
         'So the sample would miss later students.'),
        ('Nina wants ____________ answers in total.', None,
         'a hundred and twenty',
         'About one student in nine, she says.')]),
  dict(no=4, first=16, part='Part 4', band='l4',
       heading='A talk about how a library chooses its books',
       task='A short talk to new members', qtype='Questions 16-20',
       blurb='One speaker, more formal. Listen for the three reasons '
             'and the number attached to each.',
       script=[
        ('Speaker', 'People assume a library buys the books it thinks '
         'are good. We buy the books that are borrowed, and I want to '
         'explain why that is not the same thing and not a '
         'surrender.'),
        ('Speaker', 'We have about forty thousand pounds a year for new '
         'books in this branch. A book costs us around nine pounds. So '
         'the real question is which four thousand books, out of the '
         'two hundred thousand published, and no committee can read '
         'them.'),
        ('Speaker', 'The first rule is that we follow requests. If '
         'three people ask for a title we buy it, and that is about a '
         'fifth of everything we buy. It is also the most reliable '
         'measure we have of what this town actually reads.'),
        ('Speaker', 'The second is that we replace what wears out. A '
         'popular novel lasts about sixty borrowings and then falls '
         'apart. Replacing those takes another fifth of the money '
         'before anything new is considered.'),
        ('Speaker', 'The third is the part people argue with. We keep '
         'buying in subjects almost nobody borrows: local history, '
         'languages, law. Those books may go out twice a year. But a '
         'library that only holds what is popular has become a shop, '
         'and a shop is a thing this town already has.')],
       items=[
        ('The branch has about ____________ thousand pounds a year '
         'for new books.', None, 'forty',
         'And a book costs around nine pounds.'),
        ('About ____________ books are bought each year.', None,
         'four thousand',
         'Out of two hundred thousand published.'),
        ('A title is bought if ____________ people ask for it.', None,
         'three', 'Which is about a fifth of everything bought.'),
        ('A popular novel lasts about ____________ borrowings.', None,
         'sixty',
         'And then it falls apart and is replaced.'),
        ('The speaker says a library that holds only what is popular '
         'has become a ____________.', None, 'shop',
         'Which the town already has, he says.')])])
