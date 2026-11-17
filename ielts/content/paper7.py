# -*- coding: utf-8 -*-
"""Foundation 1, Progress Test: Reading.

Not an IELTS Reading paper. It is the real paper's shape at this book's
own length: three passages, twenty questions, thirty minutes, with an
answer sheet and a clock. A student who cannot yet read two thousand
words learns nothing from failing to, but everything about transfer,
pacing and question order can be taught at six hundred.
"""

PAPER = dict(
 vol=7, level='A1-A2', band='below 4.0', minutes=30,
 title='Progress Test · Reading',
 intro=(
   'Thirty minutes. Twenty questions. Three short passages. This is not '
   'a full IELTS Reading paper and it is not meant to be: it is the '
   'same shape at the length you can read now. Everything it teaches '
   'you is the thing that will still be true when the passages are four '
   'times longer. Work through the passages in order. Write your '
   'answers on the paper, then copy them onto the answer sheet at the '
   'end, and time that copying, because in the real paper nobody gives '
   'you extra minutes for it.'),
 instruct=[
   'Write 10, 20 and 30 at the top of the page before you start. Those '
   'are the minute marks by which each passage should be finished.',
   'Read the questions for a passage before you read the passage.',
   'Move on when your time is up, even in the middle of a question.',
   'Answer every question. There is no penalty for a wrong answer, so a '
   'blank is always worse than a guess.'],
 passages=[
  dict(no=1, first=1, heading='Ashbury Library: what you can borrow',
       kind='Notice', qtype='Questions 1-7',
       blurb='A notice in a public library. Read the questions first.',
       paras=[
        'Anybody who lives, works or studies in the county may join. '
        'Bring proof of your address from the last three months. '
        'Membership is free and the card arrives in about ten days.',
        'You may borrow twelve items at a time. Books are kept for '
        'three weeks and can be renewed twice, online or by telephone. '
        'Films are kept for one week and cannot be renewed at all.',
        'There is no charge for returning a book late, but an item that '
        'is nine weeks overdue is treated as lost and you will be asked '
        'to pay for it. Tell us if you cannot return something on time; '
        'we can almost always help, and we would rather know.',
        'The computers are free for one hour a day and printing costs '
        'ten pence a page. Booking is not needed before eleven in the '
        'morning, and after that the machines are usually all in use '
        'until the schools close.',
        'The upstairs room is quiet and the downstairs room is not, '
        'which is deliberate: children should be able to use a library '
        'without being told to be silent. Staff will help anybody find '
        'a book, and will order one from another branch at no charge '
        'if it is not here.'],
       items=[
        (
         'Membership is open to anybody who lives, works or studies in '
         'the ____________.', None, 'county',
         'Paragraph 1, which also asks for proof of address.'),
        ('Proof of address must be from the last ____________ months.',
         None, 'three', 'Paragraph 1, and membership itself is free.'),
        ('You may borrow ____________ items at a time.', None,
         'twelve', 'Paragraph 2, books and films together.'),
        ('Books may be renewed ____________ times.', None, 'twice',
         'Paragraph 2, online or by telephone.'),
        ('Which cannot be renewed?', ['books', 'films', 'computers',
                                      'printing'], 1,
         'Paragraph 2: films are kept for one week only.'),
        ('An item ____________ weeks overdue is treated as lost.',
         None, 'nine', 'Paragraph 3, and must then be paid for.'),
        ('Which room is the quiet one?',
         ['upstairs', 'downstairs', 'the computer room',
          'the children\u2019s room'], 0,
         'The downstairs room is deliberately not quiet.')]),
  dict(no=2, first=8,
       heading='How a letter reaches a house',
       kind='Short factual article', qtype='Questions 8-14',
       blurb='A short article about a process. Six stages, in order.',
       paras=[
        'A letter posted in a box on a Monday morning is collected at '
        'about five that evening. Every box carries the collection '
        'time on its front. A letter posted at six on Monday is '
        'collected on Tuesday. That is the commonest reason a letter '
        'arrives a day later than the sender expected.',
        'The letters go to a sorting office, where machines read the '
        'postcode and sort about thirty thousand letters an hour. '
        'Anything the machine cannot read goes to a person, and about '
        'one letter in twenty does. Handwriting is the usual reason.',
        'The letters are then moved overnight by lorry to a second '
        'office near the address. They are sorted again, this time into '
        'the order of the streets on one walking route, so that the '
        'person delivering them walks the route once and never goes '
        'back.',
        'Delivery begins at about seven in the morning. A letter '
        'posted before five on Monday will usually arrive on Tuesday '
        'or Wednesday. The whole journey has been done by machine '
        'except for two steps: the reading of bad handwriting, and the '
        'last two hundred metres.'],
       items=[
        ('Boxes are usually emptied at about ____________ in the '
         'evening.', None, 'five',
         'Paragraph 1, and the time is printed on the box.'),
        ('A letter posted at six on Monday is collected on '
         '____________.', None, 'Tuesday',
         'Paragraph 1, which explains a common delay.'),
        ('The machines read the ____________ on each letter.', None,
         'postcode', 'Paragraph 2, at thirty thousand an hour.'),
        ('About one letter in ____________ goes to a person instead.',
         None, 'twenty', 'Paragraph 2, usually because of '
         'handwriting.'),
        ('Letters are moved between offices by ____________.', None,
         'lorry',
         'Paragraph 3: they travel overnight by road.'),
        ('At the second office, letters are sorted into the order of '
         'the ____________.', None, 'streets',
         'Paragraph 3, so the route is walked once.'),
        ('Which part of the journey is not done by machine?',
         ['the collection', 'the overnight lorry',
          'the last two hundred metres', 'the sorting by postcode'],
         2, 'Paragraph 4, with the reading of bad handwriting.')]),
  dict(no=3, first=15, heading='Why towns grew where they did',
       kind='Short factual article', qtype='Questions 15-20',
       blurb='The longest passage. Three paragraphs, six questions.',
       paras=[
        'Almost every old town in this country stands in one of three '
        'kinds of place, and the reasons are older than any road. The '
        'first kind is a crossing: the lowest point at which a river '
        'could be forded or bridged. Traffic in every direction had to '
        'pass through that one point, and anybody with something to '
        'sell went where the traffic was.',
        'The second kind is a place where two different sorts of land '
        'meet, such as hills and a plain. People on either side had '
        'different things to sell, and the market grew up on the line '
        'between them. These towns are often strung out in a row along '
        'that line, twenty or thirty kilometres apart, and a map of '
        'them traces the edge of the hills almost exactly.',
        'The third kind is a harbour, which needs deep water and '
        'shelter from the wind, and there are fewer of these than '
        'people expect. Where a harbour existed, a town followed, '
        'whatever the land behind it was like. What is remarkable is '
        'how little has changed. The roads and the railways were later '
        'built to join these towns. That is why they appear to be well '
        'placed for modern travel. The truth is the other way round.'],
       items=[
        ('How many kinds of place does the writer describe?', None,
         'three', 'Paragraph 1: a crossing, a boundary and a '
         'harbour.'),
        ('The first kind is the lowest point at which a river could be '
         '____________.', None, 'bridged',
         'Paragraph 1, or forded; either answer is accepted.'),
        ('Towns of the second kind often stand in a ____________ '
         'along a line.', None, 'row',
         'Paragraph 2, twenty or thirty kilometres apart.'),
        ('A harbour needs deep water and ____________ from the wind.',
         None, 'shelter', 'Paragraph 3, which makes them rare.'),
        ('Which was built later?',
         ['the harbours', 'the roads and railways', 'the markets',
          'the river crossings'], 1,
         'Paragraph 3: they were built to join existing towns.'),
        ('The writer says the towns appear well placed for modern '
         'travel, but the truth is the other way ____________.', None,
         'round', 'Paragraph 3, the last words of the passage.')])])
