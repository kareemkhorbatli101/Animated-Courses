# -*- coding: utf-8 -*-
"""Unit 20 - Recorded Music and Live Performance. IELTS Volume 2, band 5.5."""

_FORM = dict(kind='line',
             title='Recorded music revenue by format',
             sub='four formats, millions of pounds, 2000 to 2025',
             ylab='revenue (£m)',
             x=['2000', '2005', '2010', '2015', '2020', '2025'],
             series=[('Physical', [1180, 940, 560, 290, 190, 150]),
                     ('Download', [0, 110, 410, 310, 90, 30]),
                     ('Streaming', [0, 10, 70, 420, 860, 1240]),
                     ('Live tickets', [320, 390, 480, 610, 230, 780])])

UNIT = dict(
 n=20, vol=2, level='B1+', band='5.5',
 theme='Recorded Music and Live Performance',
 opener=(
   'The last unit of the volume. It begins with hiring a hall and ends '
   'with a question that has no settled answer: when you listen to a '
   'recording, what are you listening to? In between there is a line '
   'graph in which one format replaces another in front of you, and the '
   'technique page is the whole of the Listening paper, under time, in '
   'one sitting.'),

 cycles=[
  dict(
   sub='Hiring a venue',
   step=1,
   read=[
    dict(heading='Riverside Hall: hire rates and conditions',
         kind='Hire information',
         task='Table completion and matching features',
         band='gt_short', qtype='Questions 1-6',
         skill=('Hire information is read for the conditions, not the '
                'prices',
                ['The rate is the easy fact and it is rarely the answer. '
                 'The deposit, the cancellation terms and what is '
                 'included are where the questions are.',
                 'Look for the sentence beginning "unless" or "except". '
                 'It is in every hire document and it is always '
                 'tested.']),
         paras=[
          'The Main Hall seats 420 and is hired at £310 for an evening, '
          'defined as 18.00 to 23.00. A full day is £520. The Studio '
          'seats 90 and is £95 for an evening.',
          'A deposit of one third is payable on booking and is returned '
          'only if the booking is cancelled more than six weeks before. '
          'Within six weeks the deposit is retained; within two weeks the '
          'full amount is payable.',
          'The hire includes the house piano, tuned twice a year, basic '
          'stage lighting and one technician for the evening. It does not '
          'include amplified sound, which is £85, or a second technician, '
          'which is £60.',
          'Access for setting up, known as the get-in, is from 14.00 for '
          'an evening booking. Earlier access is possible on request '
          'unless a daytime event is already booked, which is usually the '
          'case on Saturdays.',
          'Hirers provide their own stewards, one for every hundred seats '
          'sold, and must clear the stage by 23.30. A charge of £45 an '
          'hour applies thereafter.',
          'Ticket sales may be handled by the Hall box office for a '
          'commission of eight per cent, or by the hirer at no charge. '
          'Hirers selling their own tickets must still provide the number '
          'sold three days before.'],
         items=[
          ('The Main Hall seats ____________ people.', None, '420',
           'Paragraph 1, against 90 in the Studio.'),
          ('A deposit is returned only if cancellation is more than '
           '____________ weeks before.', None, 'six',
           'Paragraph 2, after which it is retained.'),
          ('Which is included in the hire charge?',
           ['amplified sound', 'a second technician', 'the house piano',
            'stewards'], 2,
           'Paragraph 3, tuned twice a year.'),
          ('Access for setting up begins at ____________ for an evening '
           'booking.', None, '14.00',
           'Paragraph 4, unless a daytime event is booked.'),
          ('Hirers must provide one steward for every ____________ '
           'seats sold.', None, 'hundred',
           'Paragraph 5, along with clearing the stage by 23.30.'),
          ('The box office commission is ____________ per cent.', None,
           'eight', 'Paragraph 6, or nothing if the hirer sells '
           'tickets.')]),
    dict(heading='Technical facilities', kind='Specification list',
         task='Short answer', band='gt_short', qtype='Questions 7-10',
         paras=[
          'The stage measures 9 metres by 6 and has a working height of '
          '4.2 metres to the lighting bar. There is no fly tower and '
          'nothing may be suspended from the bar other than approved '
          'lighting.',
          'Twelve lighting circuits are available, controlled from the '
          'rear of the hall. The desk is operated by the house technician '
          'only, as the control position cannot be reached once the '
          'audience is seated.',
          'The house piano is a six-foot grand, tuned in March and '
          'September. A tuning outside those months may be arranged at '
          'the hirer’s expense and must be booked at least ten days '
          'ahead.',
          'The dressing rooms accommodate fourteen in total and are on '
          'the first floor, reached by stairs only. Performers requiring '
          'level access should say so at the time of booking, as an '
          'alternative room at stage level can be made available.'],
         items=[
          ('What is the working height to the lighting bar?', None,
           '4.2 metres', 'Paragraph 1, with no fly tower.'),
          ('Who may operate the lighting desk?', None,
           'the house technician',
           'Paragraph 2, because of where the control position is.'),
          ('How far ahead must an extra piano tuning be booked?', None,
           'ten days', 'Paragraph 3, at the hirer’s expense.'),
          ('How are the dressing rooms reached?', None, 'by stairs '
           'only', 'Paragraph 4, with an alternative on request.')])],
   listen=[
    dict(heading='Booking the hall for a concert', part='Part 1',
         task='A telephone call to a venue', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Manager', 'Riverside Hall, bookings.'),
          ('Promoter', 'I would like to book the Main Hall for a concert '
           'in May.'),
          ('Manager', 'Which date?'),
          ('Promoter', 'Saturday the sixteenth, in the evening.'),
          ('Manager', 'Evening is six until eleven, and that is three '
           'hundred and ten pounds.'),
          ('Promoter', 'We will need to get in earlier than two '
           'o’clock.'),
          ('Manager', 'On a Saturday that is difficult, because there is '
           'almost always a daytime booking. Let me look. The sixteenth '
           'is free in the day, so I could let you in at eleven.'),
          ('Promoter', 'That is very helpful. We need amplified sound as '
           'well.'),
          ('Manager', 'Eighty-five pounds, and it is not in the basic '
           'hire.'),
          ('Promoter', 'And a second technician?'),
          ('Manager', 'Sixty. Do you want one?'),
          ('Promoter', 'Yes, for the sound. So that is four hundred and '
           'fifty-five altogether.'),
          ('Manager', 'It is. The deposit is one third, so a hundred and '
           'fifty-two pounds on booking, and it only comes back if you '
           'cancel more than six weeks before.'),
          ('Promoter', 'Understood. One more thing. Our cellist cannot '
           'manage stairs.'),
          ('Manager', 'Then say so now rather than on the day. There is a '
           'room at stage level and I will reserve it against the '
           'booking.'),
          ('Promoter', 'Thank you. And tickets?'),
          ('Manager', 'Ours for eight per cent, or yours for nothing. '
           'Either way I need the number sold three days before, for the '
           'stewards.'),
          ('Promoter', 'We will sell our own. Reference?'),
          ('Manager', 'R as in romeo, six three nine.')],
         items=[
          ('Date booked: Saturday ____________ May', None, '16',
           'In the evening, six until eleven.'),
          ('Get-in time agreed: ____________', None, '11',
           'Earlier than the usual 14.00, as the day is free.'),
          ('Total cost: £____________', None, '455',
           'Hire plus amplified sound plus a second technician.'),
          ('Deposit payable on booking: £____________', None, '152',
           'One third of the total, returnable only before six weeks.'),
          ('Special requirement: a room at ____________ level', None,
           'stage', 'For a performer who cannot manage stairs.'),
          ('Booking reference: R-____________', None, '639',
           'Spelled out at the end of the call.')])],
   speak=dict(
    part='Part 1', focus='Music you play or listen to',
    intro=('Two or three sentences each. Name the music rather than '
           'saying you like all kinds.'),
    qs=['Do you play an instrument?',
        'What kind of music do you listen to?',
        'Do you ever go to live concerts?',
        'Has your taste in music changed?'],
    shape=[('answer', 'The piano, badly, for about eight years at '
            'school.'),
           ('support', 'I stopped at sixteen and I regret it about once '
            'a month.'),
           ('follow-up', 'I still read music, which turns out to be the '
            'part that stays with you.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Confirming a booking and asking about equipment',
         prompt=('You have booked a hall for a concert. Write a letter '
                 'to the manager. In your letter: confirm the details of '
                 'the booking; ask about the equipment you will need; '
                 'mention one requirement for a performer. Write at '
                 'least 150 words.'),
         model=[
          'Dear Ms Faulkner-Oyibo,',
          'I am writing to confirm the booking we discussed yesterday and '
          'to ask about one or two practical points.',
          'The booking is the Main Hall on Saturday 16 May for the '
          'evening, with a get-in from 11.00, amplified sound and a '
          'second technician, at a total of £455. I have today '
          'transferred the deposit of £152 and will let you have the '
          'number of tickets sold by Wednesday 13 May.',
          'Could you tell me whether the amplified sound includes '
          'microphone stands, as we are bringing four microphones but no '
          'stands? I should also be grateful to know how many lighting '
          'circuits will be available to us, since our lighting plan '
          'assumes eight.',
          'Finally, I mentioned on the telephone that our cellist cannot '
          'manage stairs. You kindly said that a dressing room at stage '
          'level could be reserved, and I should like to confirm that in '
          'writing so that it is on the booking.',
          'Thank you for your help with the earlier access, which makes a '
          'considerable difference to us.',
          'Yours sincerely,',
          'Lucasta Berenger-Mwangi'],
         notes=[
          'Confirming and asking are kept in separate paragraphs. A '
          'letter that mixes agreed facts with open questions makes the '
          'reader sort them out, and the thing most likely to be lost is '
          'the question.',
          'Each question says why it is being asked: no stands, a '
          'lighting plan assuming eight. A question with its reason '
          'attached gets a useful answer rather than a yes.',
          'The requirement is confirmed in writing specifically because '
          'it was agreed by telephone. Saying so is what turns a courtesy '
          'into a record, and the letter says that in as many words.'],
         criterion=[('Confirmation and questions in separate '
                     'paragraphs', 'Coherence and Cohesion'),
                    ('Each question carrying its reason',
                     'Task Achievement'),
                    ('A spoken agreement put on the record',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Confirming and querying in one letter',
    explain=('A letter that does two jobs marks the change with the '
             'opening sentence of each paragraph, and never within '
             'one.'),
    examples=['I am writing to confirm the booking and to ask whether '
              'stands are provided.',
              'The booking is the Main Hall on 16 May for the evening.',
              'Could you tell me whether the amplified sound includes '
              'stands?',
              'I should like to confirm in writing what we agreed by '
              'telephone.'],
    task='Sort each sentence into confirming or asking, and rewrite it '
         'in that register.',
    items=[('We agreed Saturday the sixteenth.',
            'I am writing to confirm the booking of the Main Hall on '
            'Saturday 16 May for the evening.'),
           ('Do you have stands?',
            'Could you tell me whether the amplified sound provided '
            'includes microphone stands?'),
           ('I paid the deposit.',
            'I have today transferred the deposit of £152, as agreed.'),
           ('How many lights can we use?',
            'I should also be grateful to know how many lighting circuits '
            'will be available to us.'),
           ('You said there was a room downstairs.',
            'I should like to confirm in writing that a dressing room at '
            'stage level will be reserved.')]),
   vocab=[('hire rate', 'the price charged for using a space'),
          ('get-in', 'the period for bringing in and setting up'),
          ('rider', 'a list of what a performer requires'),
          ('box office', 'the place where tickets are sold'),
          ('sound check', 'a test of the sound before an audience '
           'arrives'),
          ('concert hall', 'a building built for performance'),
          ('acoustic', 'relating to how sound behaves in a space'),
          ('front of house', 'the staff who look after an audience')],
   expr=[('I am writing to confirm the booking and to ask whether',
          'the opening sentence of a letter doing two jobs'),
         ('as we are bringing four microphones but no stands',
          'a question with its reason attached'),
         ('I should like to confirm that in writing',
          'turns a courtesy into a record'),
         ('which makes a considerable difference to us',
          'thanks somebody for a specific thing')],
   trans=['furthermore', 'in addition', 'finally', 'as agreed'],
  ),

  dict(
   sub='Making a living from music',
   step=2,
   read=[
    dict(heading='Four musicians on their income',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Rosalind: Four sources and only one of them is music as '
          'anybody imagines it. I teach sixteen hours a week, I play in a '
          'pit orchestra, I do session work when it comes, and the band I '
          'am actually known for pays me about eleven per cent of what I '
          'live on.',
          'B  Ambrose: The streaming figure is the wrong argument and my '
          'side keeps making it. Yes, a play earns a fraction of a penny. '
          'We also reach people in nine countries who would never have '
          'found a record in a shop, and half of them buy a ticket when '
          'we come.',
          'C  Hyacinth: The money is in the room now, not in the '
          'recording. We make the record so that people come to the '
          'concert, which is precisely the reverse of what my parents’ '
          'generation did, and nobody has quite admitted the reversal out '
          'loud.',
          'D  Thelonius: Mine is a complaint about variance rather than '
          'about the amount. I earned forty-one thousand last year and '
          'nine the year before, for the same amount of work, and no '
          'landlord, bank or insurer has a form that understands '
          'that.'],
         items=[
          ('Which musician earns most of their income away from '
           'performing their own music?',
           ['Rosalind', 'Ambrose', 'Hyacinth', 'Thelonius'], 0,
           'Teaching, a pit orchestra and session work.'),
          ('Which musician argues against an argument made by their own '
           'side?',
           ['Rosalind', 'Ambrose', 'Hyacinth', 'Thelonius'], 1,
           'The streaming figure, which he calls the wrong '
           'argument.'),
          ('Which musician describes a reversal of the old order?',
           ['Rosalind', 'Ambrose', 'Hyacinth', 'Thelonius'], 2,
           'A record made in order to sell concert tickets.'),
          ('Which musician objects to how uneven the income is?',
           ['Rosalind', 'Ambrose', 'Hyacinth', 'Thelonius'], 3,
           'Forty-one thousand one year and nine the next.'),
          ('Ambrose believes streaming pays musicians fairly.',
           ['Yes', 'No', 'Not Given'], 2,
           'He says the figure is small and that it is the wrong '
           'argument; fairness is never addressed.'),
          ('Thelonius believes he is paid too little overall.',
           ['Yes', 'No', 'Not Given'], 1,
           'He says his complaint is about variance, not amount.')])],
   listen=[
    dict(heading='A short talk: making a living from music',
         part='Part 2', task='A talk to music students', band='l2',
         qtype='Questions 23-26',
         script=[
          ('Speaker', 'I am going to describe how a working musician is '
           'actually paid, because the version in your head is about '
           'twenty-five years out of date and so was mine.'),
          ('Speaker', 'The old arrangement was simple. You toured in '
           'order to sell records, and the records were where the money '
           'was. A tour that lost money was a reasonable investment, and '
           'record companies paid for tours on that basis.'),
          ('Speaker', 'That has reversed completely. You now record in '
           'order to sell tickets, and the ticket is where the money is. '
           'For a mid-level act, something like seventy-five per cent of '
           'income is the live side: tickets and merchandise together, '
           'and the merchandise is a bigger share than you would '
           'guess.'),
          ('Speaker', 'Now the figure everybody quotes. Yes, a stream '
           'pays a fraction of a penny, and the arithmetic is as bad as '
           'you have heard. But quoting it as your whole argument is a '
           'mistake, because the same system puts you in front of '
           'listeners in thirty countries, and a proportion of those '
           'buy a ticket when you finally arrive.'),
          ('Speaker', 'The real problem is not the amount. It is the '
           'variance. Forty-one thousand one year and nine the next, for '
           'the same work, and no mortgage application in the country has '
           'a box for that. Every musician I know has been refused credit '
           'on an average income that was perfectly adequate.'),
          ('Speaker', 'So my practical advice is dull and it is the only '
           'advice that has ever helped anybody: build four sources of '
           'income rather than one large one, and be honest about which '
           'of them pays the rent.')],
         items=[
          ('Under the old arrangement, musicians toured in order to sell '
           '____________.', None, 'records',
           'Which is where the money was under that arrangement.'),
          ('For a mid-level act, about ____________ per cent of income '
           'is from the live side.', None, 'seventy-five',
           'Tickets and merchandise together.'),
          ('He says the real problem is not the amount but the',
           ['delay', 'variance', 'contract', 'commission'], 1,
           'Forty-one thousand one year and nine the next.'),
          ('His advice is to build ____________ sources of income.',
           None, 'four', 'Rather than one large source that may disappear.')]),
    dict(heading='Two musicians on streaming income', part='Part 3',
         task='A discussion between two performers', band='l3',
         qtype='Questions 27-32',
         script=[
          ('Ambrose', 'You put the streaming figures in your newsletter '
           'again.'),
          ('Hyacinth', 'Because they are true.'),
          ('Ambrose', 'They are true and they are the weakest argument we '
           'have. Nought point oh oh three of a penny. Everybody has '
           'heard it, nobody can act on it, and it makes us sound as '
           'though we want the nineties back.'),
          ('Hyacinth', 'What would you say instead?'),
          ('Ambrose', 'That the terms are not negotiable rather than that '
           'the rate is low. We cannot see the contract between the '
           'platform and the label, we cannot audit the count, and we '
           'cannot leave, because leaving means being inaudible.'),
          ('Hyacinth', 'That is a better argument and it is much harder '
           'to put in a newsletter.'),
          ('Ambrose', 'Everything true is harder to put in a '
           'newsletter.'),
          ('Hyacinth', 'May I give you the thing on my side that I think '
           'you underrate? Last October we played Ghent. Four hundred '
           'people. In nineteen ninety-six nobody in Ghent could have '
           'bought our record, and we could not have afforded to find '
           'out whether they wanted it.'),
          ('Ambrose', 'I do not dispute that. The reach is real and it is '
           'the one genuinely new thing.'),
          ('Hyacinth', 'So we make the record to fill the room.'),
          ('Ambrose', 'Which is the reversal nobody says out loud, and I '
           'think it is worse for some people than for us. A string '
           'quartet cannot fill rooms in thirty countries. Their '
           'recording was the income, and now it is an '
           'advertisement.'),
          ('Hyacinth', 'That I had not thought about, and it is the '
           'honest version of your case.'),
          ('Ambrose', 'Then put that in the newsletter instead of the '
           'fraction of a penny.')],
         items=[
          ('Ambrose says the streaming figure is true and is their '
           '____________ argument.', None, 'weakest',
           'Because nobody who hears it can act on it.'),
          ('He would argue instead that the terms are not',
           ['published', 'negotiable', 'legal', 'profitable'], 1,
           'Rather than that the rate is low.'),
          ('He says they cannot leave the platforms because leaving means '
           'being ____________.', None, 'inaudible',
           'Alongside being unable to audit the count.'),
          ('In Ghent they played to ____________ people.', None, 'four '
           'hundred', 'Who could not have bought the record in 1996.'),
          ('Ambrose says the reach is the one genuinely ____________ '
           'thing.', None, 'new',
           'Which he does not dispute at any point.'),
          ('He argues the reversal is worse for a string ____________.',
           None, 'quartet',
           'Whose recording was the income and is now an '
           'advertisement.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Working in the arts',
    intro=('Short answers, then the long turn. Say what the person '
           'actually does all day.'),
    cue=('Describe someone you know who works in the arts.',
         ['who the person is', 'what they do',
          'how they earn their living',
          'and explain whether you would want that life']),
    qs=['Do you know anybody who works in music or the arts?',
        'Is it possible to make a living that way?',
        'Now look at the card. You have one minute to make notes.',
        'Should governments pay artists?'],
    shape=[('answer', 'My cousin, who plays the viola.'),
           ('support', 'She teaches sixteen hours a week and plays in a '
            'pit orchestra.'),
           ('follow-up', 'The band she is actually known for pays her '
            'about a tenth of her income.'),
           ('support', 'The money is uneven rather than small.'),
           ('follow-up', 'She earned forty thousand one year and nine '
            'the next, and I would find that unbearable, which is why I '
            'do something dull.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should governments support musicians financially?',
         prompt=('Some people believe governments should give financial '
                 'support to musicians. To what extent do you agree? '
                 'Write at least 250 words.'),
         model=[
          'The usual case against public support for musicians is that a '
          'musician whose work people want will be paid by the people who '
          'want it. That argument is stronger than its opponents admit '
          'and it fails for a particular group, and my view follows from '
          'where it fails rather than from a general enthusiasm for '
          'subsidy.',
          'Those who oppose support point out that the market for music '
          'is now extremely efficient. A performer with an audience can '
          'reach listeners in thirty countries without a record company, '
          'and can sell tickets and merchandise directly to them. Public '
          'money, on this view, mostly supports work that has failed a '
          'test it was fairly given, and does so at the expense of '
          'taxpayers who would not choose it.',
          'The argument holds for performers who can fill a room and '
          'breaks down for those who cannot. Recording used to be the '
          'income and has become an advertisement for the concert, which '
          'is a reversal that suits a touring band and ruins a string '
          'quartet. A chamber ensemble cannot fill halls in thirty '
          'countries, so the one source of income the new arrangement '
          'offers is closed to it.',
          'My own position is therefore narrow. Support should go where '
          'the reversal has removed an income that existed and cannot be '
          'replaced by touring: chamber music, contemporary composition, '
          'the teaching of instruments few children now learn. It should '
          'not go to performers who have an audience and could reach it '
          'themselves.',
          'In conclusion, I support public funding for the part of music '
          'that the new arrangement has left without a market, and I '
          'think the case for funding everything else has become weaker '
          'than it was twenty years ago.'],
         notes=[
          'Structure 2: the opposing view first, taken seriously, then '
          'your own. The essay states the case against subsidy at its '
          'strongest, which is the only way this structure earns '
          'anything.',
          'The position turns on a distinction — performers who can tour '
          'against those who cannot — rather than on how much support '
          'there should be. A distinction is easier to defend in 250 '
          'words than a quantity.',
          'The conclusion concedes that the general case has weakened. '
          'Admitting that your own side has lost ground on a point is '
          'read as confidence rather than weakness.'],
         criterion=[('The opposing view stated at its strongest',
                     'Task Response'),
                    ('A position turning on a distinction',
                     'Task Response'),
                    ('A conclusion that concedes ground',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Reporting figures and hedging',
    explain=('A figure needs a hedge that marks how precise it is, and '
             'the hedge goes before the number.'),
    examples=['Something like seventy-five per cent of income is from '
              'the live side.',
              'A stream pays a fraction of a penny.',
              'The income per play is so small that the figure matters '
              'less than the reach.',
              'Roughly half of the audience in Ghent had not heard the '
              'record.'],
    task='Rewrite each figure with an appropriate hedge.',
    items=[('75 per cent of income is live.',
            'Something like three quarters of a mid-level act’s income '
            'now comes from the live side.'),
           ('A stream pays 0.003 of a penny.',
            'A single play earns a fraction of a penny, and the exact '
            'figure varies between platforms.'),
           ('She earned 41,000 and then 9,000.',
            'Her income fell from around forty-one thousand to about nine '
            'thousand for the same quantity of work.'),
           ('400 people came in Ghent.',
            'Approximately four hundred people attended the concert in '
            'Ghent.'),
           ('Merchandise is important.',
            'Merchandise accounts for a larger share of live income than '
            'most people would guess.')]),
   vocab=[('royalty', 'a payment for each use of a recording'),
          ('advance', 'money paid before work is completed'),
          ('streaming', 'listening to music delivered over a network'),
          ('per play', 'for each time a track is played'),
          ('merchandise', 'goods sold alongside performances'),
          ('session work', 'playing on other people’s recordings'),
          ('unevenness', 'how much income changes from year to year'),
          ('audience reach', 'how many people a work gets to')],
   expr=[('the income per play is so small that the figure matters less '
          'than the reach', 'the argument this cycle turns on'),
         ('we make the record to fill the room',
          'states the reversal in nine words'),
         ('the terms are not negotiable rather than the rate being low',
          'relocates an argument'),
         ('build four sources of income rather than one',
          'the practical advice of the talk')],
   trans=['whereas', 'even so', 'in fairness', 'that said'],
  ),

  dict(
   sub='How people listen now',
   step=3,
   read=[
    dict(heading='Twenty-five years of listening',
         kind='Data article',
         task='Matching information and sentence completion',
         band='gt_work', qtype='Questions 33-38',
         figure=_FORM,
         paras=[
          'The graph shows revenue from four parts of the music business '
          'between 2000 and 2025. Three of the four lines tell a single '
          'story of substitution; the fourth has a shape of its own and '
          'needs a separate sentence.',
          'Physical sales fell throughout, from about £1,180 million to '
          '£150 million, and the fall was steepest between 2005 and 2015. '
          'No part of the twenty-five years shows a recovery, which makes '
          'this the simplest line on the graph to describe.',
          'Downloads are the line candidates handle worst, because they '
          'both rise and fall. They begin at nothing, peak at around '
          '£410 million in 2010, and are almost gone by 2025, which means '
          'the format that replaced physical sales was itself replaced '
          'inside fifteen years.',
          'Streaming begins at nothing, is still negligible in 2010, and '
          'then rises steeply to £1,240 million, overtaking physical '
          'sales in about 2013 and downloads shortly afterwards. By the '
          'end of the period it earns more than the entire recorded '
          'market did in 2000.',
          'The live ticket line is the one that must be described '
          'separately. It rises steadily from £320 million to £610 '
          'million by 2015, collapses to £230 million in 2020, and '
          'recovers to £780 million by 2025, finishing above where the '
          'trend would have put it.',
          'Two sentences cover the whole graph if they are chosen well. '
          'Recorded music moved from physical to download to streaming, '
          'each format overtaking the last; and live revenue grew '
          'independently of all of that, interrupted once and then '
          'resumed.'],
         items=[
          ('Which paragraph explains why one line needs separate '
           'treatment?',
           ['Paragraph 1', 'Paragraph 3', 'Paragraph 5',
            'Paragraph 6'], 2,
           'The live ticket line, which collapses and recovers.'),
          ('Which paragraph describes a format replaced by its own '
           'successor?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'Downloads, replaced within fifteen years.'),
          ('Which paragraph reduces the whole graph to two sentences?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 3,
           'Substitution, then live revenue growing independently.'),
          ('Downloads peaked at around £____________ million in 2010.',
           None, '410', 'Paragraph 3, before falling to almost '
           'nothing.'),
          ('Streaming overtook physical sales in about ____________.',
           None, '2013', 'Paragraph 4, and downloads shortly after.'),
          ('Live revenue fell to £____________ million in 2020.', None,
           '230', 'Paragraph 5, before recovering to £780 million.')])],
   listen=[
    dict(heading='An analyst on listening habits', part='Part 4',
         task='A lecture on the recorded music market', band='l4',
         qtype='Questions 39-44',
         figure=_FORM,
         script=[
          ('Analyst', 'Four lines, twenty-five years. I am going to '
           'describe them in the order that makes them easy, which is not '
           'the order of the legend.'),
          ('Analyst', 'Group the three that behave alike. Physical, '
           'download, streaming. Physical falls all the way, eleven '
           'hundred and eighty million down to a hundred and fifty, '
           'steepest in the middle decade, and it never recovers at any '
           'point.'),
          ('Analyst', 'Download is the awkward one and it is awkward '
           'because it does two things. Up from nothing to about four '
           'hundred and ten million in 2010, then down to almost nothing '
           'by the end. The format that killed physical sales was itself '
           'killed inside fifteen years, which should make anybody '
           'cautious about predicting the next twenty-five.'),
          ('Analyst', 'Streaming. Nothing, nothing, still nothing in '
           '2010, then straight up to twelve hundred and forty million. '
           'It passes physical around 2013 and download just after. And '
           'it now earns more on its own than the whole recorded market '
           'earned in 2000, which is the fact that surprises people '
           'most.'),
          ('Analyst', 'So those three are one story: substitution, twice '
           'over, and one sentence covers all three of them. Now the '
           'fourth line, and if you put it in the same sentence as the '
           'other three you will describe it wrongly, which is what most '
           'candidates do with a graph of this shape.'),
          ('Analyst', 'Live tickets. Rising all the way, three hundred '
           'and twenty up to six hundred and ten by 2015, then a '
           'collapse to two hundred and thirty in 2020 for reasons '
           'nothing to do with formats, and then a recovery to seven '
           'hundred and eighty, which is above the old trend rather than '
           'back to it.'),
          ('Analyst', 'Two sentences, then, for the whole graph. Recorded '
           'music substituted twice and ended up earning more than it '
           'started with. Live revenue grew the whole way through, '
           'independently, interrupted once.')],
         items=[
          ('Physical sales fell from £1,180 million to £____________ '
           'million.', None, '150',
           'Steepest in the middle decade, with no recovery.'),
          ('He calls download the ____________ one because it does two '
           'things.', None, 'awkward',
           'Rising and then falling within the period.'),
          ('Streaming passed physical sales around ____________.', None,
           '2013', 'And it passed download shortly afterwards.'),
          ('Streaming now earns more on its own than the whole recorded '
           'market earned in', ['2000', '2005', '2010', '2015'], 0,
           'Which he says surprises people most.'),
          ('Live revenue collapsed to £____________ million in 2020.',
           None, '230',
           'For reasons nothing to do with formats.'),
          ('The recovery took live revenue ____________ the old trend '
           'rather than back to it.', None, 'above',
           'Reaching £780 million by 2025.')])],
   speak=dict(
    part='Part 3', focus='Owning and renting music',
    intro=('Four or five sentences. Say what changed before saying '
           'whether it was good.'),
    qs=['Do you own any music, or do you stream it?',
        'Is it better to own music or to have access to all of it?',
        'What is lost when people stop owning recordings?',
        'Will people pay for music in twenty years?'],
    shape=[('answer', 'I stream almost everything and I own about forty '
            'records.'),
           ('support', 'The forty are the ones I would mind losing.'),
           ('follow-up', 'Access to everything turns out to mean '
            'listening to less, in my case.'),
           ('support', 'When I owned thirty albums I knew all thirty '
            'properly.'),
           ('follow-up', 'Now I have ten million and I listen to the '
            'same nine things, which I did not expect at all.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Revenue from four formats, 2000 to 2025',
         prompt=('The graph below shows revenue from four parts of the '
                 'music business between 2000 and 2025. Summarise the '
                 'information by selecting and reporting the main '
                 'features, and make comparisons where relevant. Write '
                 'at least 150 words.'),
         figure=_FORM,
         model=[
          'The line graph shows revenue in millions of pounds from four '
          'parts of the music business over a twenty-five-year period. '
          'Overall, the three recorded formats replaced one another in '
          'turn, while live ticket revenue grew throughout the period '
          'independently of them, interrupted by a single sharp fall.',
          'Physical sales declined continuously, from approximately '
          '£1,180 million in 2000 to £150 million in 2025, with the '
          'steepest fall between 2005 and 2015. Downloads rose from '
          'nothing to a peak of around £410 million in 2010 and then fell '
          'back to almost nothing, so that the format which displaced '
          'physical sales was itself displaced within fifteen years.',
          'Streaming remained negligible until 2010 and then rose '
          'steeply to £1,240 million, overtaking physical sales in around '
          '2013 and downloads shortly afterwards. By 2025 it earned more '
          'on its own than all recorded formats combined had earned in '
          '2000.',
          'Live ticket revenue, by contrast, rose steadily from £320 '
          'million to £610 million by 2015, fell sharply to £230 million '
          'in 2020, and recovered to £780 million, finishing above its '
          'earlier trend rather than merely returning to it.'],
         notes=[
          'The Overall statement groups the three lines that behave alike '
          'and separates the one that does not. That single decision is '
          'what makes a four-series graph describable in 150 words.',
          'Downloads are given both halves of their shape in one sentence '
          '— up to a peak, then back to nothing — and the consequence is '
          'drawn: the replacement was itself replaced. A rise and fall '
          'reported as only a rise loses marks.',
          'The last paragraph begins "by contrast" and stays with the '
          'fourth line to the end. Mixing it into the substitution story '
          'is the commonest error on a graph of this shape.'],
         criterion=[('Grouping three lines and separating the fourth',
                     'Task Achievement'),
                    ('A rise and fall reported as both',
                     'Task Achievement'),
                    ('The contrasting line kept separate',
                     'Coherence and Cohesion')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing substitution without asserting it',
    explain=('A graph can show one thing replacing another; it cannot '
             'show that it caused it, so the verb must be careful.'),
    examples=['Downloads began to fall as streaming rose, which suggests '
              'substitution.',
              'Streaming overtook physical sales in around 2013.',
              'The format that displaced physical sales was itself '
              'displaced.',
              'Live revenue grew independently of the three recorded '
              'formats.'],
    task='Rewrite each causal claim as a description of the shape.',
    items=[('Streaming destroyed downloads.',
            'Downloads began to fall as streaming rose steeply, which '
            'suggests that one replaced the other.'),
           ('People stopped buying CDs because of downloads.',
            'Physical sales fell throughout the period during which '
            'downloads were rising.'),
           ('Live music grew because recordings declined.',
            'Live revenue grew throughout the period, independently of '
            'the changes among the recorded formats.'),
           ('Streaming saved the industry.',
            'By 2025 streaming earned more on its own than all recorded '
            'formats had earned in 2000.'),
           ('The pandemic caused the fall in ticket sales.',
            'Live revenue fell sharply in 2020, for reasons unrelated to '
            'the recorded formats, before recovering.')]),
   vocab=[('physical format', 'music sold as an object'),
          ('download', 'a file bought and kept'),
          ('substitution', 'one thing taking the place of another'),
          ('live album', 'a recording made at a performance'),
          ('negligible', 'too small to matter'),
          ('high point', 'the highest level reached'),
          ('trend', 'the general direction over time'),
          ('recovery', 'a return towards an earlier level')],
   expr=[('downloads began to fall as streaming rose, which suggests',
          'describes substitution without asserting cause'),
         ('the format that displaced physical sales was itself '
          'displaced', 'the sentence worth remembering'),
         ('above the old trend rather than back to it',
          'describes a recovery precisely'),
         ('group the three that behave alike',
          'the method for a four-series graph')],
   trans=['whereas', 'at which point', 'by contrast', 'overall'],
  ),

  dict(
   sub='What recording changed',
   step=3,
   read=[
    dict(heading='Before recording, music was always live',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'For almost all of human history, hearing music meant being in '
          'the room where it was made. That sentence is easy to read and '
          'difficult to absorb, because every assumption we have about '
          'music was formed after it stopped being true, and most of '
          'those assumptions look natural rather than recent. Recording '
          'is about a hundred and thirty years old, which is nothing at '
          'all.',
          'The first consequence of recording was the one its inventors '
          'intended, and it is a genuine gain. Performances became '
          'permanent. A listener in 2025 can hear a singer who died in '
          '1930, and a student can study a performance rather than a '
          'description of one, which changed the teaching of music more '
          'than any reform of the conservatoires.',
          'The second consequence was not intended and took about forty '
          'years to appear. The range of music regularly performed became '
          'narrower. Once a definitive recording of a work existed, '
          'performers and audiences compared every later performance to '
          'it, and the works that were recorded early and well were '
          'played and recorded again, while others quietly left the '
          'repertoire for want of a version anybody could point to.',
          'The third consequence was a change in what a performance is '
          'for. Before recording, a performance was the only way the work '
          'could be heard, and audiences accepted what came with that: '
          'imperfect intonation, a missed entry, a tempo that reflected '
          'how tired the players were. Those things were simply what '
          'music sounded like, and there was no other version available '
          'for comparison.',
          'Recording made a different standard available, and then '
          'normal. A record is assembled from the best of many attempts, '
          'and listeners who grow up with records bring that standard '
          'into the concert hall, where it cannot be met by definition. '
          'Several conductors have argued that modern orchestral playing '
          'is more accurate and less adventurous than it was in 1930, and '
          'the recordings are available for anybody who wishes to '
          'check.',
          'The fourth consequence runs the other way and is now the '
          'larger one commercially. Because a recording can be heard '
          'anywhere, it has become an advertisement for the event, and '
          'the event has become the thing people pay for. Live revenue '
          'has grown for twenty-five years while recorded revenue moved '
          'between formats without growing much at all, which exactly '
          'reverses the arrangement of the previous century.',
          'The pattern is therefore not one of decline but of exchange, '
          'and each term of the exchange is real rather than rhetorical. '
          'Music gained permanence and it gained reach; it lost variety '
          'of repertoire and it lost tolerance of imperfection. A '
          'listener today can hear almost everything that has ever been '
          'recorded, and will hear a narrower range of works, played more '
          'accurately, than an audience in 1900 heard in a single '
          'season.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['Music before recording', 'Performances made permanent',
            'A narrower repertoire', 'What a performance is for'], 1,
           'A singer who died in 1930, and the teaching of music.'),
          ('Choose the best heading for paragraph 5.',
           ['A new standard, then a normal one',
            'The definitive recording', 'Advertising the event',
            'An exchange rather than a decline'], 0,
           'A record assembled from the best of many attempts.'),
          ('Choose the best heading for paragraph 7.',
           ['The commercial reversal', 'What was gained and lost',
            'Accuracy in orchestral playing', 'Teaching from '
            'recordings'], 1,
           'Permanence and reach against variety and tolerance.'),
          ('The writer believes recording has damaged music overall.',
           ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph calls it an exchange rather than a '
           'decline.'),
          ('The writer believes the narrowing of the repertoire was '
           'intended.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 3 says it was not intended.'),
          ('The narrowing of the repertoire took about ____________ '
           'years to appear.', None, 'forty',
           'Paragraph 3, after recording began.'),
          ('A record is assembled from the best of many '
           '____________.', None, 'attempts',
           'Paragraph 5, which sets a standard a concert cannot '
           'meet.'),
          ('A recording has become an ____________ for the event.',
           None, 'advertisement',
           'Paragraph 6, which is now the larger commercial effect.')])],
   listen=[
    dict(heading='A lecture on recording and performance',
         part='Part 4', task='A lecture in a music department',
         band='l4', qtype='Questions 53-58',
         script=[
          ('Lecturer', 'Until about eighteen ninety, hearing music meant '
           'being in the room. Everything you believe about music was '
           'formed after that stopped being true, and almost none of it '
           'feels recent.'),
          ('Lecturer', 'Consequence one, and it is the intended one and a '
           'real gain. Performances last. You can hear a singer who died '
           'in nineteen thirty. A student can study a performance instead '
           'of a description of one, and that changed music teaching more '
           'than any curriculum reform I know of.'),
          ('Lecturer', 'Consequence two took about forty years to show '
           'and nobody wanted it. The repertoire narrowed. Once there is '
           'a famous recording of a work, everybody compares every '
           'performance to it, the well-recorded works get recorded '
           'again, and the rest quietly stop being played.'),
          ('Lecturer', 'Consequence three is about what we expect. Before '
           'recording, a concert was the only way to hear the piece, and '
           'you took what came: a missed entry, intonation that drifted, '
           'a tempo that depended on how tired the orchestra was. That '
           'was what music sounded like.'),
          ('Lecturer', 'Then records made a different standard available '
           'and then normal. A record is the best of forty attempts '
           'stitched together. Audiences raised on that bring it into the '
           'hall, where it cannot be met, because a concert is one '
           'attempt. Several conductors have said modern playing is more '
           'accurate and less adventurous than in nineteen thirty, and '
           'the recordings are there if you want to check.'),
          ('Lecturer', 'Consequence four reverses the whole thing '
           'commercially. The recording is now an advertisement and the '
           'concert is the product. Live income has risen for twenty-five '
           'years while recorded income shuffled between formats without '
           'growing.'),
          ('Lecturer', 'So do not call it decline. Call it an exchange, '
           'and count both sides. We gained permanence and reach. We lost '
           'repertoire and we lost tolerance. You can hear anything ever '
           'recorded and you will hear fewer different works, played more '
           'accurately, than somebody sitting in a hall in nineteen '
           'hundred.')],
         items=[
          ('Until about ____________, hearing music meant being in the '
           'room.', None, '1890',
           'After which every modern assumption was formed.'),
          ('He says recorded performance changed music ____________ more '
           'than any curriculum reform.', None, 'teaching',
           'Because a performance can be studied directly.'),
          ('The narrowing of the repertoire took about forty years and '
           'was', ['predicted', 'unwanted', 'reversed', 'measured'], 1,
           'Nobody wanted it, he says, and it took forty years.'),
          ('A record, he says, is the best of forty ____________ '
           'stitched together.', None, 'attempts',
           'Which a single concert cannot match.'),
          ('Conductors have argued modern playing is more accurate and '
           'less ____________.', None, 'adventurous',
           'Than orchestral playing was in 1930.'),
          ('He asks the audience to call it an ____________ rather than '
           'a decline.', None, 'exchange',
           'And to count both sides of it.')])],
   speak=dict(
    part='Part 3', focus='Live performance now',
    intro=('Four or five sentences. Try once to name a gain and a loss '
           'in the same answer.'),
    qs=['Why do people still go to concerts?',
        'Has recorded music harmed live performance?',
        'Do audiences expect too much from performers?',
        'Is it better to hear music live or recorded?'],
    shape=[('answer', 'Partly because it is the one version that cannot '
            'be edited.'),
           ('support', 'A record is the best of forty attempts put '
            'together.'),
           ('follow-up', 'A concert is one attempt, and everybody in the '
            'room knows it.'),
           ('support', 'That has made audiences less forgiving than they '
            'used to be.'),
           ('follow-up', 'So the gain is that playing is more accurate, '
            'and the loss is that it is more careful, and I would not '
            'want to choose.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Planning: has recorded music harmed live performance?',
         prompt=('Has recorded music harmed live performance? Brainstorm '
                 'eight ideas, apply the six tests to each, and write '
                 'the plan. Twelve minutes.'),
         plan=('Recording has not harmed live performance and has '
               'changed what audiences expect of it, which is a cost '
               'borne by performers rather than by audiences',
               [('Live performance is commercially stronger than before '
                 'recording',
                 ['live revenue has risen for twenty-five years while '
                  'recorded revenue moved between formats',
                  'a recording now functions as an advertisement for the '
                  'concert']),
                ('What changed is the standard expected in the hall',
                 ['a record is assembled from many attempts and a '
                  'concert is one',
                  'conductors argue modern playing is more accurate and '
                  'less adventurous'])]),
         notes=[
          'The eight ideas will include several that answer "is recorded '
          'music good or bad", which is a different question. Crossing '
          'those out is the exercise, and it is the last time this volume '
          'asks you to do it.',
          'The thesis divides and then says who pays: audiences gained, '
          'performers absorbed the cost. Naming who bears a cost is the '
          'single most reliable way to sound like somebody who has '
          'thought about the question.',
          'Both headings are supported entirely from this unit. By this '
          'point in the volume you should be able to plan an essay '
          'without inventing a single fact, and that is the skill the '
          'planning pages have been building.'],
         criterion=[('Ideas that answer the question actually asked',
                     'Task Response'),
                    ('A thesis that names who bears the cost',
                     'Task Response')],
         instruct='  Twelve minutes, timed. You write this essay in cycle '
                  '5.',
         lines=12)],
   gram=dict(
    point='Historical cause and consequence',
    explain=('A consequence that took decades to appear needs a time '
             'expression as well as a causal one.'),
    examples=['Recording preserved performances and narrowed what was '
              'performed.',
              'The second consequence took about forty years to '
              'appear.',
              'Once a definitive recording existed, every performance '
              'was compared to it.',
              'Audiences raised on records brought that standard into the '
              'hall.'],
    task='Join each pair, marking the time the consequence took.',
    items=[('Recording was invented. The repertoire narrowed.',
            'Within about forty years of the invention of recording, the '
            'range of works regularly performed had narrowed.'),
           ('A famous recording exists. Performances are compared to '
            'it.',
            'Once a definitive recording of a work exists, every later '
            'performance is compared with it.'),
           ('Records are edited. Audiences expect perfection.',
            'Because a record is assembled from many attempts, audiences '
            'gradually came to expect an accuracy a concert cannot '
            'deliver.'),
           ('Recordings can be heard anywhere. Concerts became the '
            'product.',
            'As recordings became available everywhere, the concert '
            'rather than the record became the thing audiences paid '
            'for.'),
           ('Music gained something and lost something.',
            'Music gained permanence and reach over the same period in '
            'which it lost variety of repertoire.')]),
   vocab=[('repertoire', 'the body of works regularly performed'),
          ('performance practice', 'how music of a period is played'),
          ('standardise', 'to make uniform'),
          ('canon', 'the works treated as central'),
          ('conductor', 'the person directing an orchestra'),
          ('intonation', 'accuracy of pitch'),
          ('tempo', 'the speed at which music is played'),
          ('permanence', 'the quality of lasting')],
   expr=[('recording preserved performances and narrowed what was '
          'performed', 'the sentence this cycle is built on'),
         ('that was what music sounded like',
          'describes an expectation that no longer exists'),
         ('the best of forty attempts stitched together',
          'explains the standard a concert cannot meet'),
         ('call it an exchange and count both sides',
          'the instruction the lecture ends on')],
   trans=['in turn', 'consequently', 'as a result', 'over the same '
          'period'],
  ),

  dict(
   sub='Whether the record is the work',
   step=4,
   read=[
    dict(heading='The performance, the record and the thing itself',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 59-66',
         paras=[
          'When somebody says they know a symphony well, they almost '
          'always mean they know one recording of it well. The two are '
          'treated as the same thing in ordinary speech, and the '
          'difference between them is the subject of a dispute that has '
          'not been settled and probably cannot be, because the two '
          'sides are not disagreeing about any fact.',
          'A recording is not a document of an event. It is an object '
          'assembled afterwards from several events: forty attempts at a '
          'difficult passage, the best eight bars of one and the best six '
          'of another, a balance between instruments that no seat in any '
          'hall would give you, and a reverberation added later. The '
          'listener hears something that never happened.',
          'One side argues that this makes recording a separate art '
          'rather than a dishonest version of performance. A film is '
          'assembled from takes and nobody complains that it is not a '
          'play, or that the actors were not continuously present. On '
          'this view the record is the work, the concert is a different '
          'work, and comparing them is a confusion rather than a '
          'judgement.',
          'The other side accepts all of that about film and denies the '
          'analogy. A film announces itself as constructed and a '
          'recording presents itself as a performance, with the names of '
          'players and a hall and a date on the cover. The claim is not '
          'that editing is wrong, but that a listener who believes they '
          'are hearing one evening has been misled about something they '
          'would care about if they knew.',
          'The strongest evidence for the second position is what '
          'listeners say when they find out. People told how a favourite '
          'recording was assembled frequently report feeling cheated, '
          'which suggests they held a belief the object was encouraging '
          'and not satisfying. People told how a favourite film was shot '
          'report nothing of the kind, and the asymmetry needs '
          'explaining by anybody who presses the analogy.',
          'The strongest evidence for the first position is what those '
          'same listeners then do. They go on listening to the same '
          'recording, and when asked which they prefer, they choose the '
          'edited version over a complete live take of the same work by '
          'the same players. The disappointment is real and it does not '
          'change the preference.',
          'A reasonable position can be built from both of those '
          'findings without resolving the dispute at all. A recording is '
          'an edited object presented as an event; listeners are entitled '
          'to know which of the two they are buying; and the knowledge '
          'turns out to change very little about what they actually '
          'enjoy. The question that remains is not which of the two is '
          'better but what exactly we are agreeing to when we call a '
          'recording the work.'],
         items=[
          ('Which paragraph describes how a recording is assembled?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 1,
           'Forty attempts, a balance no seat would give, added '
           'reverberation.'),
          ('Which paragraph rejects the comparison with film?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 2,
           'A film announces itself as constructed.'),
          ('Which paragraph reports what listeners do after learning the '
           'truth?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
            'Paragraph 7'], 2,
           'They go on listening and still prefer the edited '
           'version.'),
          ('The writer believes the dispute can be settled.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1 says it probably cannot be.'),
          ('The writer believes editing a recording is wrong.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 4 states that the claim is not that editing is '
           'wrong.'),
          ('Listeners told how a recording was assembled frequently '
           'report feeling ____________.', None, 'cheated',
           'Paragraph 5, unlike listeners told about films.'),
          ('Asked which they prefer, listeners choose the '
           '____________ version.', None, 'edited',
           'Paragraph 6, over a complete live take.'),
          ('A recording is an edited object presented as an '
           '____________.', None, 'event',
           'The final paragraph, which listeners are entitled to '
           'know.')])],
   listen=[
    dict(heading='A performer and a producer disagree', part='Part 4',
         task='A recorded discussion', band='l4',
         qtype='Questions 67-72',
         script=[
          ('Chair', 'Mr Szabo-Whitfield is a concert pianist. Ms '
           'Delacroix-Nnamdi produces classical recordings. Each begins '
           'with their own weakest point.'),
          ('Szabo-Whitfield', 'Mine is that I complain about editing in '
           'interviews and I have approved every edit on nine records. I '
           'chose the takes. When I say audiences are misled, I am one of '
           'the people doing the misleading.'),
          ('Delacroix-Nnamdi', 'And mine is that I call it a separate art '
           'form and I print the name of the hall and the date on the '
           'sleeve. If it is a separate art form, why does the packaging '
           'work so hard to suggest an evening?'),
          ('Chair', 'So what remains in dispute?'),
          ('Delacroix-Nnamdi', 'What follows. He thinks listeners should '
           'be told how many sessions a record took. I think that tells '
           'them nothing they can use.'),
          ('Szabo-Whitfield', 'It tells them what they are buying.'),
          ('Delacroix-Nnamdi', 'And the evidence says they do not want '
           'it. Tell somebody their favourite recording came from four '
           'days and two hundred takes, and they say they feel cheated, '
           'and then they keep listening to it, and when you offer them a '
           'complete live performance by the same players they choose the '
           'edited one.'),
          ('Szabo-Whitfield', 'Which proves they prefer it. It does not '
           'prove they should not be told.'),
          ('Delacroix-Nnamdi', 'That is a fair distinction and it is the '
           'one I usually run past.'),
          ('Szabo-Whitfield', 'May I say the thing I mind more than the '
           'editing?'),
          ('Delacroix-Nnamdi', 'Go on.'),
          ('Szabo-Whitfield', 'What it has done to concerts. I am '
           'compared in the hall to a version of myself that took four '
           'days to make, by an audience that has heard it two hundred '
           'times. I play more carefully than my teacher did and I take '
           'fewer risks, and I can hear that on her records.'),
          ('Delacroix-Nnamdi', 'That I do not dispute at all, and it is '
           'the real cost, and it falls on you and not on the '
           'listener.')],
         items=[
          ('The pianist admits he has approved every edit on '
           '____________ records.', None, 'nine',
           'Having chosen the takes himself.'),
          ('The producer asks why the packaging works so hard to suggest '
           'an ____________.', None, 'evening',
           'If a recording is a separate art form.'),
          ('They disagree about whether listeners should be told how many '
           '____________ a record took.', None, 'sessions',
           'Which she says tells them nothing usable.'),
          ('Told the truth about a favourite recording, listeners say '
           'they feel cheated and then',
           ['stop listening', 'keep listening', 'complain',
            'buy the live version'], 1,
           'And still prefer the edited version.'),
          ('The pianist says he is compared in the hall to a version of '
           'himself that took four ____________ to make.', None, 'days',
           'By an audience that has heard it two hundred times.'),
          ('The producer agrees the real cost falls on the '
           '____________ rather than the listener.', None, 'performer',
           'Which is the one thing she does not dispute.')])],
   speak=dict(
    part='Part 3', focus='What we listen to when we listen',
    intro=('Five sentences. This is the last Part 3 of the volume. Take '
           'a position and give it a reason you actually hold.'),
    qs=['Is a recording the same thing as a performance?',
        'Should listeners be told how a recording was made?',
        'Do audiences expect perfection from live performers?',
        'What would you lose if all recordings disappeared?'],
    shape=[('answer', 'No, and I think most people believe it is, '
            'including me until recently.'),
           ('support', 'A record is assembled from many attempts and '
            'presented as one evening.'),
           ('follow-up', 'The sleeve gives a hall and a date, which is '
            'doing a certain amount of work.'),
           ('support', 'People told the truth say they feel cheated and '
            'then keep listening.'),
           ('follow-up', 'So I would say tell them anyway, because being '
            'entitled to know is separate from whether it changes what '
            'you enjoy.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Have recordings made audiences expect perfection?',
         prompt=('Some people say that recordings have made audiences '
                 'expect perfection from live performers. To what extent '
                 'do you agree? Write at least 250 words.'),
         model=[
          'Whether recordings have raised what audiences expect depends '
          'on which audience and which music. In the concert hall I think '
          'the claim is clearly true and the cost falls on performers '
          'rather than listeners; in popular music it is largely false, '
          'because the audience is there for something a record cannot '
          'supply.',
          'The case for the claim is strongest in classical performance, '
          'and the mechanism is specific. A recording is assembled from '
          'many attempts: the best passage from one session joined to the '
          'best from another, with a balance between instruments that no '
          'seat in a hall provides. A listener who has heard that version '
          'two hundred times arrives at a concert carrying a standard '
          'produced over four days, and the performer has one evening to '
          'meet it. Several conductors have argued that modern orchestral '
          'playing is accordingly more accurate and less adventurous than '
          'it was a century ago.',
          'The claim is much weaker elsewhere. At a rock or folk concert '
          'the audience is not listening for accuracy at all; it is there '
          'for volume, for the room, and for the fact that this version '
          'exists only once. Where a band plays a song exactly as the '
          'record goes, audiences frequently complain, which is the '
          'opposite of the expectation under discussion.',
          'There is also a group for whom the question is reversed. '
          'Younger listeners who have grown up with live video have heard '
          'far more unedited performance than their parents did, and '
          'appear, if anything, more tolerant of a missed note than '
          'audiences were twenty years ago.',
          'My conclusion is therefore that the effect is real, narrow and '
          'unevenly borne. It applies to music judged on execution, it '
          'falls on the performer rather than the listener, and it is the '
          'price of a gain — permanent, perfectible recordings — that '
          'almost nobody would now give up.'],
         notes=[
          'Structure 11: agree in some circumstances and disagree in '
          'others. The division must be stated in the thesis, with both '
          'circumstances named, or the essay reads as indecision rather '
          'than discrimination.',
          'The fourth paragraph brings a group the question did not '
          'anticipate — listeners raised on live video — which is the '
          'single most effective way to show an examiner that you are '
          'thinking rather than reciting.',
          'The conclusion gives three properties of the effect: real, '
          'narrow, unevenly borne. Qualifying your own agreement '
          'precisely is what distinguishes this structure from a '
          'compromise.'],
         criterion=[('A thesis naming both circumstances',
                     'Task Response'),
                    ('A group the question did not anticipate',
                     'Task Response'),
                    ('Agreement qualified precisely',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'plan.',
         lines=18)],
   gram=dict(
    point='Distinguishing claims that look the same',
    explain=('Two claims can share almost every word and differ in what '
             'would settle them. The sentence has to mark the '
             'difference.'),
    examples=['They prefer the edited version, which is not the same as '
              'saying they should not be told.',
              'A recording is an edited object presented as an event.',
              'The disappointment is real and it does not change the '
              'preference.',
              'Whether it is the work and whether it is honest are '
              'different questions.'],
    task='Separate the two claims hidden in each sentence.',
    items=[('Recordings are dishonest.',
            'A recording is assembled from several events and presented '
            'as one, which is a claim about the packaging rather than '
            'about the editing.'),
           ('People do not mind being misled.',
            'People report feeling cheated and continue to prefer the '
            'edited version, which are two separate findings.'),
           ('The record is the work.',
            'The record may be a work in its own right, which does not '
            'establish that it is the same work as the performance.'),
           ('Audiences are too demanding.',
            'Audiences in the concert hall expect an accuracy that '
            'recordings made normal, which is a cost borne by performers '
            'rather than a fault in listeners.'),
           ('Editing should be disclosed.',
            'Listeners are entitled to know how a recording was made, '
            'whether or not the knowledge changes what they choose to '
            'hear.')]),
   vocab=[('authenticity', 'being what it claims to be'),
          ('edit', 'to assemble from parts'),
          ('take', 'one recorded attempt'),
          ('splice', 'to join two recorded passages'),
          ('overdub', 'to add a part to an existing recording'),
          ('expectation', 'what an audience assumes it will hear'),
          ('reverberation', 'the echo of a space'),
          ('telling the buyer', 'making clear how something was '
           'made')],
   expr=[('a recording is an edited object presented as an event',
          'the sentence this unit ends on'),
         ('the disappointment is real and it does not change the '
          'preference', 'holds two findings together'),
         ('the real cost falls on the performer',
          'names who bears a cost'),
         ('entitled to know is separate from whether it changes '
          'anything', 'distinguishes two claims')],
   trans=['admittedly', 'nevertheless', 'on balance', 'in short'],
  ),
 ],
 technique=dict(
  title='Everything so far, under time: a full Listening paper',
  body=('This is the last technique page of the volume and it asks you '
        'to stop learning methods and use them. The Listening paper at '
        'the back of this book is forty questions in four parts, played '
        'once, in about thirty minutes, with ten minutes afterwards to '
        'transfer your answers. Do it in one sitting, with nothing '
        'paused and nothing replayed, because the single most common '
        'reason for a score below what a candidate is capable of is that '
        'they have only ever practised with a finger on the pause '
        'button. Four things from this volume carry most of the marks. '
        'Read the questions in the twenty seconds you are given, and '
        'read the last one first, because that is the one you are most '
        'likely to be unprepared for. Write something for every '
        'question, including the ones you miss, because a blank earns '
        'nothing and a guess is sometimes right. When you lose your '
        'place, go to the next question number rather than searching for '
        'the one you lost: the recording will not come back for you, and '
        'candidates lose three marks recovering one. And spell the '
        'answers you are sure of correctly, because an answer that is '
        'heard right and written wrong counts the same as one that was '
        'never heard at all.'),
  panel=[('One sitting, no pausing',
          'Thirty minutes, played once, ten minutes to transfer.'),
         ('Read the last question first',
          'In the preparation time. It is the one that catches you.'),
         ('Never leave a blank',
          'A guess can be right. A blank cannot.'),
         ('Lost? Jump forward',
          'Go to the next number. Do not lose three marks saving '
          'one.')],
  task='Sit the full Listening paper at the back of this book in one '
       'uninterrupted sitting, then mark it and count your errors by '
       'type.',
  qs=['Did you pause or replay anything, honestly?',
      'How many blanks did you leave?',
      'How many answers were right but misspelled?',
      'Where did you lose your place, and what did it cost?',
      'Which part was weakest, and is that the part or the question '
      'type?']),
 outlining=dict(
  title='The whole outlining toolkit, then write from the plan',
  body=('Ten units of planning end here, and the test of whether any of '
        'it worked is simple: plan an essay in twelve minutes and write '
        'it in twenty-eight, and see whether the plan held. Use the full '
        'sequence one final time on the cycle 5 question. Brainstorm '
        'eight ideas without judging them. Cross out the ones that '
        'answer a different question. Group what remains into two or '
        'three headings and write a thesis that states a position rather '
        'than a topic. Put two supports under each heading and check '
        'that each one is a fact or an example rather than a '
        'restatement. Then put the plan at the top of the page and write '
        'the essay without adding a new idea. That last instruction is '
        'the whole exercise. An essay that departs from its plan '
        'halfway is an essay that had no plan, and the examiner sees it '
        'as a loss of coherence rather than a change of mind. If you '
        'reach the end and the plan held, you are ready for the next '
        'volume, where the texts get faster and this part gets no '
        'harder.'),
  frame=('The effect is real in music judged on execution and largely '
         'absent elsewhere, and the cost falls on performers rather than '
         'on audiences',
         [('In the concert hall the claim holds, and the mechanism is '
           'specific',
           ['a record is assembled over days and a concert is one '
            'evening',
            'conductors argue modern playing is more accurate and less '
            'adventurous']),
          ('Elsewhere the expectation runs the other way',
           ['audiences at rock and folk concerts complain when a band '
            'plays the record exactly',
            'listeners raised on live video have heard more unedited '
            'performance than their parents'])]),
  task='Plan the cycle 5 essay in twelve minutes, write it in '
       'twenty-eight, and mark where you departed from the plan.',
  qs=['Did you cross out the ideas that answered a different question?',
      'Does your thesis state a position or name a topic?',
      'Is every support a fact or an example?',
      'Did you add any idea while writing that was not in the plan?',
      'If you did, did the essay get better or only longer?'],
  answers=['about half of a brainstormed list, every time',
           'if it could be a title, it is a topic and not a thesis',
           'a restatement of the heading is not a support',
           'almost everybody does, in the third body paragraph',
           'longer, in my experience, and less coherent']),
 candos=['I can read hire information for the conditions rather than '
         'the prices',
         'I can confirm and query in a single letter without mixing '
         'them',
         'I can describe a four-line graph by grouping the lines that '
         'behave alike',
         'I can explain what recording gained and what it cost',
         'I can sit a full Listening paper under time without '
         'pausing'],
 tip=('This is the end of Volume 2. Before you start Volume 3, sit both '
      'papers at the back of this book under time on the same day, in '
      'the order they come in the real exam. The difference between '
      'practising skills and sitting a paper is the thing the next '
      'volume assumes you have found out.'),
)
