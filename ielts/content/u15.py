# -*- coding: utf-8 -*-
"""Unit 15 - History and Heritage. IELTS Volume 2, band 5.5."""

_REC = dict(kind='bar',
            title='Surviving records from three centuries, by type',
            sub='Caldwell parish, documents held in the county archive',
            ylab='documents held',
            cats=['17th century', '18th century', '19th century'],
            series=[('Parish registers', [31, 96, 100]),
                    ('Land and property', [12, 74, 188]),
                    ('Court papers', [8, 41, 132])])

UNIT = dict(
 n=15, vol=2, level='B1+', band='5.5',
 theme='History and Heritage',
 opener=(
   'This unit is about what survives from the past and what does not. It '
   'begins at the ticket desk of a castle and ends with four groups who '
   'each have a reasonable claim to the same collection of objects. In '
   'between it asks why an archive contains so much about arguments and '
   'so little about ordinary contented life. The technique page is about '
   'describing a chart to somebody who cannot see it.'),

 cycles=[
  dict(
   sub='Visiting a historic site',
   step=1,
   read=[
    dict(heading='Caldwell Castle: visiting and access',
         kind='Visitor notice',
         task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('A visitor notice is read for the exceptions, because '
                'that is where the questions are',
                ['The general opening hours will not be tested. The day '
                 'that is different, the area that is closed and the '
                 'group that pays nothing will all be tested.',
                 'Underline every sentence containing except, apart from '
                 'or only. Three of the six questions usually come from '
                 'those sentences.']),
         paras=[
          'The castle is open daily from 10.00 to 17.00 between March and '
          'October, and from 10.00 to 15.00 for the rest of the year. '
          'Last entry is one hour before closing.',
          'The keep is closed on Mondays throughout the year for '
          'conservation work. The grounds, the tea room and the '
          'exhibition remain open on those days, and the entry charge is '
          'reduced by a third.',
          'Entry is £11 for adults and £6 for children aged 5 to 16. '
          'Children under 5 enter free. Residents of Caldwell parish enter '
          'free on production of a utility bill, which must be dated '
          'within the last six months.',
          'The upper floors of the keep are reached by a spiral stair of '
          '94 steps and there is no lift. A video tour of the upper floors '
          'is shown continuously in the gatehouse for visitors who cannot '
          'use the stair.',
          'Dogs are welcome in the grounds on a lead but are not admitted '
          'to the keep or the tea room, except for assistance dogs, which '
          'are admitted everywhere.',
          'Photography is permitted throughout for personal use. '
          'Photography for publication requires written permission, which '
          'is applied for by email and is normally granted within ten '
          'working days.'],
         items=[
          ('The keep is closed every ____________ for conservation '
           'work.', None, 'Monday',
           'Paragraph 2, while the grounds stay open.'),
          ('On those days the entry charge is reduced by',
           ['a quarter', 'a third', 'a half', 'two thirds'], 1,
           'Paragraph 2, because the keep is not available.'),
          ('Caldwell residents must show a utility bill dated within the '
           'last ____________ months.', None, 'six',
           'Paragraph 3, which admits them free.'),
          ('Visitors unable to use the stair are offered a video tour in '
           'the', ['tea room', 'exhibition', 'gatehouse',
            'grounds'], 2,
           'Paragraph 4, shown continuously.'),
          ('Which dogs are admitted to the tea room?',
           ['all dogs on a lead', 'small dogs only',
            'assistance dogs only', 'no dogs'], 2,
           'Paragraph 5, which is the exception to the rule.'),
          ('Permission for photography for publication is normally granted '
           'within ____________ working days.', None, 'ten',
           'Paragraph 6, applied for by email.')]),
    dict(heading='Guided tours and group bookings',
         kind='Timetable and terms', task='Table completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'General tour. Daily at 11.00 and 14.30, lasting 50 minutes. No '
          'booking required for individuals. £4 in addition to entry.',
          'Tower and roof tour. Saturdays only, at 13.00, lasting 75 '
          'minutes. Booking essential and limited to 12 people. £9 in '
          'addition to entry. Not suitable for children under 8.',
          'Evening tour by lamplight. Last Friday of the month, at 19.00, '
          'lasting 60 minutes. Booking essential. £14 including entry, as '
          'the castle is otherwise closed.',
          'Group bookings of 10 or more receive a 20 per cent reduction on '
          'entry and must be confirmed 14 days in advance. A deposit of '
          'one quarter is payable at the time of booking and is refundable '
          'up to 7 days before the visit.',
          'All tours are led by volunteers and may be cancelled in heavy '
          'rain, in which case the tour charge is returned in full and '
          'entry remains valid for the day.'],
         items=[
          ('Which tour requires no booking for individuals?',
           ['the general tour', 'the tower and roof tour',
            'the evening tour', 'none of them'], 0,
           'Daily at 11.00 and 14.30, with no booking needed.'),
          ('The tower and roof tour is limited to ____________ people.',
           None, '12', 'Saturdays only, and not for children under 8.'),
          ('Group bookings must be confirmed ____________ days in '
           'advance.', None, '14',
           'For a 20 per cent reduction on entry.'),
          ('The deposit is refundable up to ____________ days before the '
           'visit.', None, '7',
           'And amounts to one quarter of the total.')])],
   listen=[
    dict(heading='Booking a guided tour', part='Part 1',
         task='A telephone booking for a group visit', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Clerk', 'Caldwell Castle, bookings.'),
          ('Caller', 'I would like to book a tour for a group.'),
          ('Clerk', 'How many people?'),
          ('Caller', 'Fourteen.'),
          ('Clerk', 'Then you qualify for the group rate, which is twenty '
           'per cent off entry. Which tour?'),
          ('Caller', 'The tower one, if possible.'),
          ('Clerk', 'The tower and roof tour takes twelve at most, so '
           'that will not work for fourteen.'),
          ('Caller', 'Can we split it?'),
          ('Clerk', 'It only runs once on a Saturday, at one o’clock, so '
           'no. I would suggest the general tour.'),
          ('Caller', 'How long is that?'),
          ('Clerk', 'Fifty minutes, and it is four pounds each on top of '
           'entry.'),
          ('Caller', 'That is fine. Saturday the eighth?'),
          ('Clerk', 'Eleven o’clock or half past two?'),
          ('Caller', 'Eleven.'),
          ('Clerk', 'Noted. Does anybody in the group have access '
           'needs?'),
          ('Caller', 'Two people cannot manage stairs.'),
          ('Clerk', 'Then they will want the video tour in the gatehouse, '
           'which runs continuously. The guide will bring the group back '
           'to them.'),
          ('Caller', 'That is helpful. What about the deposit?'),
          ('Clerk', 'A quarter at booking, refundable up to seven days '
           'before.'),
          ('Caller', 'And confirmation?'),
          ('Clerk', 'Fourteen days ahead, so by the twenty-fifth.'),
          ('Caller', 'Understood.'),
          ('Clerk', 'Your booking reference is G as in golf, three seven '
           'one.'),
          ('Caller', 'G three seven one. Is there parking for a '
           'coach?'),
          ('Clerk', 'Behind the gatehouse, and the driver should come to '
           'the desk for a permit on arrival.'),
          ('Caller', 'Thank you very much.')],
         items=[
          ('Group size: ____________', None, 'fourteen',
           'Which qualifies for the group rate.'),
          ('Tour booked: the ____________ tour', None, 'general',
           'Because the tower tour takes only twelve.'),
          ('Day and time: Saturday the eighth at ____________', None,
           'eleven', 'Rather than the half past two departure.'),
          ('Number of people unable to manage stairs: ____________', None,
           'two', 'Offered the video tour in the gatehouse.'),
          ('Deposit: ____________ of the total', None, 'a quarter',
           'Refundable up to seven days before the visit.'),
          ('Booking reference: G-____________', None, '371',
           'Spelled out with the letter at the end of the call.')])],
   speak=dict(
    part='Part 1', focus='Old buildings where you live',
    intro=('Two or three sentences each. Name a real building if you '
           'can.'),
    qs=['Are there many old buildings where you live?',
        'Have you visited any of them?',
        'Do you think old buildings should be protected?',
        'Would you like to live in an old house?'],
    shape=[('answer', 'A few, mostly around the market square.'),
           ('support', 'The oldest is a church from about 1480.'),
           ('follow-up', 'I have been inside twice, both times for '
            'concerts rather than for the building.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Arranging a group visit to a historic site',
         prompt=('You are organising a group visit to a historic site. '
                 'Write a letter to the site. In your letter: give the '
                 'details of your group; ask about tours and prices; '
                 'explain any special requirements. Write at least 150 '
                 'words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing on behalf of a group of fourteen adults to enquire '
          'whether you can accommodate a visit on Saturday 8 June.',
          'We are a local history society and our members are aged '
          'between about fifty and eighty. We would like to join a guided '
          'tour, preferably in the morning, and we would then use the tea '
          'room afterwards if it can take a group of our size.',
          'Could you tell me which tours are available on a Saturday '
          'morning, how long each lasts, and what the charge is in '
          'addition to entry? I understand that a reduction applies to '
          'groups of ten or more, and I should be grateful if you could '
          'confirm the amount and the deposit required.',
          'Two of our members are unable to climb stairs. Could you tell '
          'me what is available to them while the rest of the group is '
          'upstairs, and whether they pay the full entry charge?',
          'I can confirm the booking as soon as I hear from you, and well '
          'inside your fourteen-day deadline.',
          'Yours faithfully,',
          'Rosamund Achebe-Thwaite'],
         notes=[
          'The opening sentence gives the number, the kind of group and '
          'the date. Everything the reader needs to say yes or no is in '
          'the first line, and nothing else has to be read before they '
          'can.',
          'The access question is separate and specific: what is '
          'available, and do they pay full price. Candidates usually write '
          '"two members are disabled" and leave the reader to guess what '
          'is being asked.',
          'The closing line removes the reader’s risk by naming their own '
          'deadline. It also quietly shows that the writer has read the '
          'terms, which changes how the rest of the letter is read.'],
         criterion=[('Everything needed for a yes in the first line',
                     'Task Achievement'),
                    ('An access question that states what is asked',
                     'Task Response'),
                    ('Naming the reader’s own deadline',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Enquiry structures and embedded questions',
    explain=('A letter of enquiry asks several things at once. An '
             'embedded question lets you put three questions into one '
             'sentence without sounding abrupt.'),
    examples=['Could you tell me which tours are available on a Saturday '
              'morning?',
              'I should be grateful if you could confirm the amount and '
              'the deposit required.',
              'I am writing on behalf of a group of fourteen to enquire '
              'whether you can accommodate us.',
              'Could you tell me what is available to them and whether '
              'they pay the full charge?'],
    task='Rewrite each direct question as an embedded one.',
    items=[('How long is the tour?',
            'Could you tell me how long each tour lasts?'),
           ('Is there a discount?',
            'I should be grateful if you could confirm whether a reduction '
            'applies to groups of our size.'),
           ('Can disabled members get in?',
            'Could you tell me what is available to members who are unable '
            'to climb stairs?'),
           ('When must I confirm?',
            'Could you tell me by what date the booking must be '
            'confirmed?'),
           ('I want to book for fourteen people.',
            'I am writing on behalf of a group of fourteen to enquire '
            'whether a visit can be arranged.')]),
   vocab=[('conservation', 'work that keeps an old building standing'),
          ('public access', 'the right of visitors to enter'),
          ('guided tour', 'a visit led by somebody who explains'),
          ('listed', 'legally protected because of its history'),
          ('keep', 'the strongest central tower of a castle'),
          ('castle grounds', 'the land around a castle'),
          ('entry charge', 'the price of admission'),
          ('step-free', 'reachable without using stairs')],
   expr=[('I am writing on behalf of a group of, to enquire whether',
          'the opening line of a group enquiry'),
         ('could you tell me what is available to them',
          'asks an access question precisely'),
         ('well inside your fourteen-day deadline',
          'shows the terms have been read'),
         ('if it can take a group of our size',
          'anticipates the reader’s objection')],
   trans=['furthermore', 'in addition', 'with regard to', 'meanwhile'],
  ),

  dict(
   sub='What people keep',
   step=2,
   read=[
    dict(heading='Four families and the things they kept',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Benedikta: We have my great-grandfather’s carpentry tools, '
          'about forty of them, and nobody in the family has worked wood '
          'for sixty years. They are useless and I would be unable to '
          'throw them away, and I have never managed to explain that to '
          'anybody satisfactorily.',
          'B  Cormac: We kept nothing at all. Three moves in twelve years '
          'and each time the boxes got smaller. I used to feel bad about '
          'it and then I noticed that what I actually wanted was the two '
          'photographs, and we have those.',
          'C  Delphine: My mother kept every letter she received for '
          'fifty-one years, in order, in shoeboxes. It is genuinely '
          'valuable to historians and the county archive has taken it. It '
          'was also, for the whole of my childhood, four cupboards we '
          'could not use.',
          'D  Emrys: We keep a chair that nobody sits on because it came '
          'from the old house. My daughter asked me last year whose chair '
          'it was and I found I did not know, which rather made her '
          'point.'],
         items=[
          ('Which person keeps objects that have no practical use and '
           'cannot be discarded?',
           ['Benedikta', 'Cormac', 'Delphine', 'Emrys'], 0,
           'Forty carpentry tools and nobody who works wood.'),
          ('Which person found that very little was actually wanted?',
           ['Benedikta', 'Cormac', 'Delphine', 'Emrys'], 1,
           'Two photographs, after three moves.'),
          ('Which family’s collection has gone to an archive?',
           ['Benedikta', 'Cormac', 'Delphine', 'Emrys'], 2,
           'Fifty-one years of letters in shoeboxes.'),
          ('Which person discovered they did not know the object’s '
           'story?', ['Benedikta', 'Cormac', 'Delphine', 'Emrys'], 3,
           'When his daughter asked whose chair it was.'),
          ('Delphine regrets that the letters were kept.',
           ['Yes', 'No', 'Not Given'], 2,
           'She gives the cost and the value and never says she '
           'regrets it.',
           {0: 'Yes would need regret; she gives the cost and the '
               'value and judges neither.', 1: 'No would need her to say she is glad, and she never '
               'does.'}),
          ('Cormac now feels guilty about keeping nothing.',
           ['Yes', 'No', 'Not Given'], 1,
           'He says he used to and then stopped.',
           {0: 'Yes would need present guilt; he says he used to feel '
               'it and stopped.', 2: 'Not Given is wrong because he describes exactly this '
               'change.'})])],
   listen=[
    dict(heading='A short talk: what people keep', part='Part 2',
         task='A talk at a local history society', band='l2',
         qtype='Questions 23-26',
         script=[
          ('Speaker', 'I have spent nineteen years taking family papers '
           'into a county archive, and I want to tell you what gets kept '
           'and what that does to history.'),
          ('Speaker', 'Families keep three things reliably. Photographs, '
           'because they are small and have faces. Documents that prove '
           'something, like deeds and certificates, because somebody once '
           'needed them. And objects connected to a named person who is '
           'still remembered.'),
          ('Speaker', 'That third category is the one that disappears, and '
           'it disappears on a schedule. An object survives while somebody '
           'can say whose it was. Roughly three generations, and then '
           'nobody knows, and once nobody knows it is simply an old chair '
           'taking up room.'),
          ('Speaker', 'What families almost never keep is anything about '
           'ordinary weeks. Nobody keeps a shopping list. Nobody keeps the '
           'note saying the baker had no bread. So the written record of '
           'daily life comes almost entirely from people who were unusual '
           'in some way: literate, wealthy, or in trouble.'),
          ('Speaker', 'There is one exception worth knowing, and it is a '
           'strange one. Things survive in enormous numbers when they were '
           'thrown away all at once and then forgotten, which is why '
           'rubbish pits tell us more about ordinary medieval life than '
           'any family collection does.'),
          ('Speaker', 'So when you bring me your boxes, the letters about '
           'arguments are more useful than the ones about love, and the '
           'bills are more useful than either. I say that to every family '
           'and nobody enjoys hearing it.')],
         items=[
          ('Objects survive while somebody can say ____________ they '
           'were.', None, 'whose',
           'Which the speaker says lasts about three generations.'),
          ('Families reliably keep photographs, documents that prove '
           'something, and objects connected to a named',
           ['place', 'person', 'event', 'trade'], 1,
           'The third category being the one that disappears.'),
          ('What families almost never keep is anything about ordinary '
           '____________.', None, 'weeks',
           'Nobody keeps a shopping list or an ordinary note.'),
          ('Things survive in large numbers when they were thrown away '
           'all at once and then', ['sold', 'forgotten', 'recorded',
            'buried deliberately'], 1,
           'Which is why rubbish pits are so informative.')]),
    dict(heading='Two archivists on what to keep', part='Part 3',
         task='A discussion between two archivists', band='l3',
         qtype='Questions 27-32',
         script=[
          ('Delphine', 'We have nineteen metres of shelf and forty-one '
           'metres of material offered this year.'),
          ('Benedikta', 'So we are not deciding what to keep. We are '
           'deciding what to destroy, and I would rather we used the '
           'honest word in meetings.'),
          ('Delphine', 'Agreed. What is your rule?'),
          ('Benedikta', 'Keep what cannot be reconstructed from anything '
           'else. A deed exists in three copies in three offices. A '
           'servant’s diary exists once.'),
          ('Delphine', 'That is the right principle and it fails in '
           'practice, because the servant’s diary arrives unlabelled in a '
           'box with two hundred receipts and nobody has four hours to '
           'find it.'),
          ('Benedikta', 'So we keep the receipts to avoid losing the '
           'diary.'),
          ('Delphine', 'We keep the box. Which is how nineteen metres '
           'became full.'),
          ('Benedikta', 'May I put the argument I actually hold?'),
          ('Delphine', 'Please.'),
          ('Benedikta', 'We over-keep the kinds of document our '
           'profession was trained on. Estate papers, legal series, '
           'anything in a bound volume. We under-keep photographs without '
           'names and anything in a language none of us reads.'),
          ('Delphine', 'That is uncomfortable and I think it is true. The '
           'Bengali material from the mill families sat unlisted for '
           'eleven years.'),
          ('Benedikta', 'And was listed only when we appointed somebody '
           'who could read it.'),
          ('Delphine', 'What would you do?'),
          ('Benedikta', 'Keep a sample of what we would normally destroy, '
           'chosen at random, and write down that we did it. Then somebody '
           'in sixty years can at least measure what we threw away.'),
          ('Delphine', 'That costs almost nothing and it is the first '
           'proposal this year that I would sign today.'),
          ('Benedikta', 'Then put it on the agenda under destruction '
           'rather than under selection, and watch how differently the '
           'committee reads it.')],
         items=[
          ('The archive has nineteen metres of shelf and ____________ '
           'metres offered.', None, 'forty-one',
           'Which is why the decision is about destruction.'),
          ('Benedikta’s rule is to keep what cannot be',
           ['sold', 'reconstructed from elsewhere', 'read easily',
            'stored flat'], 1,
           'A deed exists in three copies; a diary exists once.'),
          ('Delphine objects that the valuable item arrives',
           ['damaged', 'unlabelled in a box', 'too late',
            'in several parts'], 1,
           'With two hundred receipts and nobody with four hours.'),
          ('Benedikta says archivists over-keep the documents their '
           'profession was ____________ on.', None, 'trained',
           'Estate papers, legal series, bound volumes.'),
          ('The Bengali material from the mill families sat unlisted for '
           '____________ years.', None, 'eleven',
           'Until somebody who could read it was appointed.'),
          ('Her proposal is to keep a random ____________ of what would '
           'normally be destroyed.', None, 'sample',
           'And to record that it was done.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Objects',
    longturn=[('The object I want to describe is a clock, a small wooden one '
               'with a brass face, that stands on a shelf in my parents\' house '
               'and has not worked for about thirty years.'),
              ('It came from my great-grandfather, who was a railway clerk, '
               'and we think he was given it when he retired, although nobody '
               'now alive can tell us that for certain.'),
              ('My mother looks after it, which mainly means dusting it and '
               'refusing every offer anybody has ever made to repair it.'),
              ('It matters for a reason that is slightly odd. It is not '
               'valuable, it is not beautiful, and it does not work. What it '
               'does is fix a date. Written inside the case, in pencil, is a '
               'name and a year, and that pencil mark is the only physical '
               'evidence my family has of anybody before my grandmother. '
               'Everything else is stories, which change in the telling. The '
               'clock does not change. My mother will not have it repaired '
               'because a repairer would clean the inside of the case, and '
               'that is where the writing is. So we keep a clock that cannot '
               'tell the time because of four words written on wood, which '
               'when you say it aloud sounds ridiculous and still seems to me '
               'the right decision.')],
    intro=('Short answers, then the long turn. Spend the most time on '
           'the last bullet.'),
    cue=('Describe an old object that matters to your family.',
         ['what the object is', 'where it came from',
          'who looks after it',
          'and explain why it matters to your family']),
    qs=['Do you keep many things from the past?',
        'Is there anything in your home that is very old?',
        'Now look at the card. You have one minute to make notes.',
        'Do people keep too much or too little?'],
    shape=[('answer', 'A box of carpentry tools, about forty of '
            'them.'),
           ('support', 'They belonged to my great-grandfather, who was a '
            'joiner.'),
           ('follow-up', 'My aunt keeps them and nobody has used them for '
            'sixty years.'),
           ('support', 'They matter because somebody can still say whose '
            'they were.'),
           ('follow-up', 'And I suspect that when that stops being true, '
            'they will quietly become a heavy box in a '
            'cupboard.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Preserving expensive old buildings',
         prompt=('Some people believe old buildings should be preserved '
                 'even when they are very expensive to maintain. To what '
                 'extent do you agree? Write at least 250 words.'),
         model=[
          'I agree that old buildings should generally be preserved, and '
          'I think the usual argument for it is weak enough to be worth '
          'replacing, because the weak version loses whenever a council '
          'has to find the money.',
          'The advantages are real. An old building is evidence that '
          'cannot be rebuilt: a reconstruction tells you what people now '
          'believe the past looked like, not what it was. Old buildings '
          'also bring visitors, and in small towns the castle or the mill '
          'is frequently the only reason anybody stops, which supports '
          'shops that have nothing to do with history.',
          'The difficulty is that the cost is certain and the benefit is '
          'hard to price. A roof is forty thousand pounds this year, '
          'while the value of a building standing is spread across many '
          'people over many decades and appears in no budget. An argument '
          'that cannot produce a number tends to lose to one that can.',
          'My own position is that the test should be replaceability '
          'rather than age or beauty. A building that is one of two '
          'hundred of its kind is not evidence of much, and converting it '
          'is not a loss. A building that is the last of its type, or the '
          'only surviving work of a local builder, cannot be replaced at '
          'any price, and that is the case where the expense is '
          'justified.',
          'In conclusion, I would preserve selectively and say openly what '
          'the rule is. Preserving everything is unaffordable and '
          'preserving nothing destroys the only evidence we have, and the '
          'useful question is which buildings are irreplaceable rather '
          'than which are old.'],
         notes=[
          'Structure 4: the advantages first, then a position arrived at '
          'immediately. The position here is a test — replaceability — '
          'rather than a side, which is what makes the conclusion usable.',
          'The sentence about cost and benefit is the engine of the essay. '
          'Naming why one side of an argument usually wins, rather than '
          'just asserting that it should not, is unusual at this band.',
          'The examples in paragraph 4 are concrete and small: one of two '
          'hundred, the last of its type, the only work of a local '
          'builder. Concrete cases make an abstract rule look '
          'workable.'],
         criterion=[('A position that is a test, not a side',
                     'Task Response'),
                    ('Explaining why one argument usually wins',
                     'Task Response'),
                    ('Concrete cases for an abstract rule',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Value and cost structures',
    explain=('Comparing something certain with something vague needs '
             'structures that name both and admit the difference in how '
             'well each can be measured.'),
    examples=['The cost is certain and the benefit is hard to price.',
              'A roof is forty thousand pounds; the value is spread over '
              'decades.',
              'An argument that cannot produce a number tends to lose to '
              'one that can.',
              'It cannot be replaced at any price.'],
    task='Rewrite each sentence so that both the cost and the value '
         'appear.',
    items=[('Old buildings are expensive.',
            'The cost of maintaining an old building is certain and '
            'immediate, while its value is spread across many people over '
            'decades.'),
           ('It is worth saving.',
            'The building is the last of its type, so it cannot be '
            'replaced at any price.'),
           ('The council refused.',
            'The council faced a known bill of forty thousand pounds '
            'against a benefit that appears in no budget.'),
           ('Tourism helps.',
            'Visitors drawn by the castle support shops that have nothing '
            'to do with history, which rarely appears in the '
            'calculation.'),
           ('We cannot keep everything.',
            'Preserving everything is unaffordable, so the question is '
            'which buildings are irreplaceable rather than which are '
            'old.')]),
   vocab=[('running costs', 'what it costs to keep something going'),
          ('put back', 'to return a building to an earlier state'),
          ('pull down', 'to demolish'),
          ('listed status', 'legal protection given to a building'),
          ('keeping in repair', 'the ongoing work of maintenance'),
          ('grant', 'money given for a particular purpose'),
          ('one of a kind', 'the only one of its type'),
          ('conversion', 'changing a building to a new use')],
   expr=[('the cost is certain and the benefit is hard to price',
          'the sentence this cycle is built on'),
         ('a reconstruction tells you what people now believe the past '
          'looked like', 'why the original matters'),
         ('an argument that cannot produce a number tends to lose',
          'explains an outcome rather than regretting it'),
         ('which buildings are irreplaceable rather than which are old',
          'converts a feeling into a test')],
   trans=['whereas', 'even so', 'against this', 'in practice'],
  ),

  dict(
   sub='Reading a document',
   step=3,
   read=[
    dict(heading='What a parish register actually records',
         kind='Article',
         task='Matching information and sentence completion',
         band='gt_work', qtype='Questions 33-38',
         figure=_REC,
         paras=[
          'The chart shows how many documents of three kinds survive from '
          'Caldwell parish for each of three centuries. All three kinds '
          'increase, and they increase at very different rates, which is '
          'the first thing a reader should notice.',
          'Parish registers rise from 31 to 96 and then to 100. The second '
          'rise is almost nothing because the parish registers are nearly '
          'complete by the eighteenth century: a register was kept every '
          'year, so once every year is present no further increase is '
          'possible.',
          'Land and property documents rise from 12 to 74 to 188, and '
          'court papers from 8 to 41 to 132. Both increase roughly '
          'fifteenfold across the period, and neither shows any sign of '
          'reaching a limit.',
          'The seventeenth-century figures are low for two different '
          'reasons that are easy to confuse. Fewer documents were created, '
          'because fewer transactions were written down at all. And a '
          'larger share of what was created has since been lost, because '
          'it has had longer to be lost in.',
          'There is one specific absence that is visible in the archive '
          'and not in this chart. The Caldwell registers contain no '
          'entries at all between 1643 and 1649. The parish did not stop '
          'baptising or burying anybody during those years; the civil war '
          'interrupted the keeping of the register.',
          'That distinction is the one a reader of any historical chart '
          'has to hold onto. A gap in a record is a gap in the recording, '
          'and whether it is also a gap in the events is a separate '
          'question that the record itself cannot answer.'],
         items=[
          ('Which paragraph explains why one category stops rising?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 1,
           'Because a register was kept every year.'),
          ('Which paragraph gives two different reasons for the low early '
           'figures?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 1,
           'Fewer created, and more of them since lost.'),
          ('Which paragraph describes a specific absence in the '
           'registers?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
            'Paragraph 3'], 1,
           'No entries between 1643 and 1649.'),
          ('Parish registers rise from 31 to ____________ and then to '
           '100.', None, '96',
           'With almost no increase in the final step.'),
          ('Court papers increase roughly ____________ across the '
           'period.', None, 'fifteenfold',
           'Matching land and property documents.'),
          ('The registers contain no entries between 1643 and '
           '____________.', None, '1649',
           'Because the civil war interrupted the record-keeping.')])],
   listen=[
    dict(heading='An archivist on sources', part='Part 4',
         task='A lecture on reading old documents', band='l4',
         qtype='Questions 39-44',
         figure=_REC,
         script=[
          ('Archivist', 'I want to teach you one sentence today, and then '
           'spend the rest of the hour showing you why it is harder to '
           'apply than it sounds. The sentence is: the gap is in the '
           'records, not necessarily in the events.'),
          ('Archivist', 'Look at the parish registers on this chart. '
           'Thirty-one documents from the seventeenth century, ninety-six '
           'from the eighteenth, a hundred from the nineteenth. The last '
           'step is almost flat, and the reason is not that anything '
           'changed in the nineteenth century. It is that a register was '
           'kept every year, so once you have every year you cannot have '
           'more.'),
          ('Archivist', 'A category with a ceiling behaves completely '
           'differently from one without. Land documents go twelve, '
           'seventy-four, a hundred and eighty-eight, and they could go on '
           'rising forever, because there is no natural maximum number of '
           'property transactions.'),
          ('Archivist', 'Now the Caldwell registers have a famous hole. '
           'Nothing at all between sixteen forty-three and sixteen '
           'forty-nine. Students write that the parish stopped baptising '
           'children, which would be remarkable. What stopped was the '
           'clerk, because of the civil war.'),
          ('Archivist', 'And here is why the sentence is hard. Sometimes '
           'the gap is in the events. A plague year can genuinely have no '
           'marriages. The record alone cannot tell you which you are '
           'looking at, and the only way through is another source that '
           'failed differently.'),
          ('Archivist', 'For Caldwell we have that. The manorial court '
           'kept sitting through the sixteen-forties and its rolls name '
           'people the register never baptised. So the people existed and '
           'the register did not record them, and we know that only '
           'because two systems failed in different ways.'),
          ('Archivist', 'So the working rule is: when you find an absence, '
           'ask what else should have recorded the same people, and go and '
           'look at that instead of writing a conclusion.'),
          ('Archivist', 'It is slower than writing the conclusion, and '
           'it is the only part of this job that cannot be done from a '
           'desk in another country.')],
         items=[
          ('The sentence he wants taught is that the gap is in the '
           '____________, not necessarily in the events.', None,
           'records', 'Which he says is harder to apply than it sounds.'),
          ('Parish registers stop rising because a register was kept '
           'every ____________.', None, 'year',
           'So once every year is present no further rise is '
           'possible.'),
          ('Land documents could rise indefinitely because there is no '
           'natural', ['record', 'maximum', 'archive', 'index'], 1,
           'Number of property transactions.'),
          ('The gap in the Caldwell registers runs from 1643 to '
           '____________.', None, '1649',
           'When the clerk stopped, not the baptisms.'),
          ('He says a plague year can genuinely have no',
           ['burials', 'marriages', 'baptisms', 'court cases'], 1,
           'Which is why the record alone cannot decide.'),
          ('For Caldwell the answer came from the manorial court, a '
           'source that failed ____________.', None, 'differently',
           'And names people the register never baptised.')])],
   speak=dict(
    part='Part 3', focus='Evidence from the past',
    intro=('Four or five sentences. Try once to distinguish a gap in the '
           'record from a gap in the events.'),
    qs=['How do we know what life was like in the past?',
        'Are old documents reliable?',
        'Should ordinary people’s lives be recorded?',
        'What will survive from our own time?'],
    shape=[('answer', 'Mostly from documents somebody kept for another '
            'reason.'),
           ('support', 'Parish registers were kept for the church, not '
            'for historians.'),
           ('follow-up', 'So they record what the church cared about and '
            'nothing else.'),
           ('support', 'And an absence can mean two different things.'),
           ('follow-up', 'Caldwell has no entries for six years in the '
            '1640s, and the births did not stop; the clerk did.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Surviving records from three centuries, by type',
         prompt=('The chart below shows how many documents of three types '
                 'survive from three centuries in one parish. Summarise '
                 'the information by selecting and reporting the main '
                 'features, and make comparisons where relevant. Write at '
                 'least 150 words.'),
         figure=_REC,
         model=[
          'The bar chart shows the number of surviving documents of three '
          'types held for one parish for each of three centuries. '
          'Overall, all three types increase over time, but they do so at '
          'very different rates: two rise steeply throughout while parish '
          'registers rise sharply once and then stop.',
          'Parish registers are the largest category in the seventeenth '
          'century, with 31 documents, and rise to 96 in the eighteenth. '
          'The rise to 100 in the nineteenth century is only 4, by far the '
          'smallest change on the chart.',
          'The other two types behave alike. Land and property documents '
          'rise from 12 to 74 and then to 188, while court papers rise '
          'from 8 to 41 and then to 132. Both increase roughly fifteenfold '
          'across the period, and both overtake parish registers during '
          'the eighteenth century.',
          'By the nineteenth century the order has completely reversed. '
          'Parish registers, the largest category at the start, are the '
          'smallest at the end, while land and property documents, the '
          'second smallest at the start, are nearly twice the size of any '
          'other category.'],
         notes=[
          'The Overall statement separates the one category that stops '
          'rising from the two that do not. The chart was built around '
          'that contrast, and an answer that lists three rising categories '
          'has missed what it is for.',
          'The final paragraph reports the reversal of order between the '
          'first and last century. Comparing the ranking at the start with '
          'the ranking at the end is a move that works on almost every '
          'grouped bar chart.',
          'Nothing is said about why the registers stop rising. That '
          'explanation is in the passage, not on the chart, and a Task 1 '
          'answer that imports it is writing about something the examiner '
          'did not give it.'],
         criterion=[('Separating the category that stops rising',
                     'Task Achievement'),
                    ('Comparing the order at the start and the end',
                     'Task Achievement'),
                    ('No explanation imported from outside the chart',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing absence and uneven data',
    fix=dict(
     text=('The table gives figures for four regions, but no data is available '
           'for the north before 1990. The figures for the south, which are '
           'complete, show a steady rise. It is not possible to say if the '
           'northern figure rose or fell in those years. The absence of data '
           'mean that no comparison can be made for the whole period.'),
     faults=[('no data is available for the north',
              'no data are available for the north',
              'In formal academic writing data takes a plural verb.'),
             ('It is not possible to say if the northern figure rose or fell',
              ('It is not possible to say whether the northern figure rose or '
               'fell'),
              'Between two alternatives the word is whether, not if.'),
             ('The absence of data mean',
              'The absence of data means',
              ('The subject is absence, which is singular, so the verb is '
               'means.'))]),
    explain=('A gap in a chart needs language that reports it without '
             'claiming to know what caused it. These patterns do that.'),
    examples=['The gap in the 1640s is a gap in the records, not in the '
              'events.',
              'No documents of this type survive from that decade.',
              'The chart shows no entries, which the chart cannot '
              'explain.',
              'Whether the events also stopped is a separate question.'],
    task='Rewrite each sentence so that it reports the absence without '
         'explaining it.',
    items=[('Nobody was born in those years.',
            'No baptisms are recorded in those years, which is not the '
            'same as none occurring.'),
           ('The parish stopped working.',
            'No entries of any kind survive for the period from 1643 to '
            '1649.'),
           ('There was a plague.',
            'The register records no marriages in that year; the cause is '
            'not stated in the document.'),
           ('The data is missing because of the war.',
            'The gap coincides with the civil war, although the register '
            'itself gives no reason.'),
           ('Court papers are more common later.',
            'Far more court papers survive from the nineteenth century '
            'than from the seventeenth.')]),
   vocab=[('parish register', 'the church’s record of births and '
           'deaths'),
          ('inventory', 'a list of goods belonging to somebody'),
          ('attest', 'to state formally that something is true'),
          ('baptism', 'a church ceremony recorded in a register'),
          ('burial', 'the recorded interment of a person'),
          ('clerk', 'the person who kept a written record'),
          ('handwriting', 'the form of writing in an old document'),
          ('natural maximum', 'a limit a figure cannot pass')],
   expr=[('the gap in the 1640s is a gap in the records, not in the '
          'events', 'the sentence this cycle is built on'),
         ('once you have every year you cannot have more',
          'explains a category with a ceiling'),
         ('two systems that failed in different ways',
          'why a second source settles the question'),
         ('ask what else should have recorded the same people',
          'the working rule for an absence')],
   trans=['whereas', 'it should be noted that', 'in addition',
          'by comparison'],
  ),

  dict(
   sub='Why archives are uneven',
   step=3,
   read=[
    dict(heading='Arguments leave paper; agreement leaves none',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'An archive looks like a sample of the past and is not one. It is '
          'what happens to be left after several sieves have operated, and '
          'the sieves are not random. Each one favours a particular kind of '
          'life, and the result is a record that is detailed about a small '
          'number of people and almost silent about most of the population '
          'that actually lived there.',
          'The first sieve is that a document is usually created because an '
          'institution required one. A court case, a tax assessment, a land '
          'sale and a criminal charge all generate paper, and the paper is '
          'kept because somebody might need to consult it. An ordinary week '
          'in which nothing was disputed generates none, and there were a '
          'great many more ordinary weeks than disputes.',
          'This produces a well-known distortion. Arguments leave paper and '
          'agreement leaves none. A disputed field boundary can fill a '
          'folder with depositions, surveys and appeals; a boundary '
          'everybody accepted appears once, when the land changed hands, if '
          'at all. A historian counting disputes in a parish and concluding '
          'that the parish was quarrelsome has measured how quarrels '
          'generate documents rather than how common quarrels were.',
          'The second sieve follows property. People with land leave deeds, '
          'wills and estate accounts, and leave them in several copies held '
          'in several places. People without land appear, if at all, inside '
          'somebody else’s document, described for that person’s purposes '
          'and in that person’s words. A workhouse register is a rich source '
          'about the workhouse and a poor one about the people in it.',
          'The third sieve operates after the fact and is purely physical. '
          'Parchment outlasts paper. Material held by an institution that '
          'continued to exist outlasts material held by one that closed. '
          'Anything stored in one place is lost in one event, which is why a '
          'single fire can remove a century from a county, and why the '
          'surviving record is lumpy in a way that has nothing to do with '
          'what happened.',
          'Recognising these sieves does not lead where students usually '
          'take it. The conclusion is not that nothing can be known. The '
          'sieves have known directions, and a bias whose direction you know '
          'is a very different thing from one you have not noticed at all. '
          'Much of the best historical work consists of reasoning backwards '
          'through a sieve whose shape has already been established.',
          'The techniques for doing that are specific. Where two '
          'institutions recorded overlapping populations for different '
          'reasons, the overlap estimates what each missed. Where one '
          'parish has a complete series and its neighbours have fragments, '
          'the complete one calibrates the others. And where a document '
          'exists because something was exceptional, the exception implies '
          'the rule it departed from.'],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['Documents and institutions', 'Arguments and agreement',
            'Property and paper', 'Reasoning backwards'], 1,
           'A disputed boundary fills a folder; an accepted one does '
           'not.'),
          ('Choose the best heading for paragraph 5.',
           ['The property filter', 'The physical filter',
            'What can still be known', 'Overlapping records'], 1,
           'Parchment, continuing institutions and a single fire.'),
          ('Choose the best heading for paragraph 7.',
           ['Three filters', 'Why nothing can be known',
            'Techniques for reading through a filter',
            'The workhouse register'], 2,
           'Overlaps, calibration and the exception implying a rule.'),
          (
           'The writer believes the filters make historical knowledge '
           'impossible.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 6 says the opposite and explains why.',
           {0: 'Yes would need impossibility; paragraph 6 argues the '
               'opposite.', 2: 'Not Given is wrong because the writer answers the '
               'objection.'}),
          (
           'The writer believes a workhouse register tells us a great '
           'deal about its inmates.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 4 calls it a poor source about the people in it.',
           {0: 'Yes would need richness; paragraph 4 calls it a poor '
               'source about its inmates.', 2: 'Not Given is wrong because the register is assessed as '
               'evidence.'}),
          ('A document is usually created because an ____________ '
           'required it.', None, 'institution',
           'Paragraph 2: courts, taxes, sales and charges.'),
          ('A bias whose ____________ you know differs from one you have '
           'not noticed.', None, 'direction',
           'Paragraph 6, which is why the filters can be worked '
           'through.'),
          ('Where a document exists because something was exceptional, '
           'the exception implies the ____________ it departed from.',
           None, 'rule',
           'The final paragraph, one of three named techniques.')])],
   listen=[
    dict(heading='A historian on archival silence', part='Part 4',
         task='A lecture on what archives do not contain', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Historian', 'I am going to begin with a sentence that sounds '
           'like a complaint and is actually a method. What survives is '
           'the leftovers of an office, not a sample of a society.'),
          ('Historian', 'Think about when paper gets made. Somebody '
           'disputes a boundary: folder. Somebody pays tax: receipt. '
           'Somebody is charged with an offence: file. Somebody spends '
           'forty years farming without arguing with anyone: nothing at '
           'all.'),
          ('Historian', 'So arguments leave paper and agreement leaves '
           'none. If you count disputes in a parish archive and conclude '
           'the parish was quarrelsome, you have measured how quarrels '
           'make documents, which is not the same thing.'),
          ('Historian', 'Second filter: property. Land generates deeds, '
           'wills, accounts. No land, and you appear only inside somebody '
           'else’s document, described the way they needed you described. '
           'A workhouse register is wonderful about the workhouse and '
           'nearly useless about the inmates.'),
          ('Historian', 'Third filter is physical and it is stupid rather '
           'than social. Parchment beats paper. An institution that '
           'survived beats one that closed. And everything stored together '
           'is lost together, so one fire takes a century.'),
          ('Historian', 'Now, students hear all this and conclude that '
           'history is impossible. That is exactly wrong. These filters '
           'have directions. I know which way each one pushes. A bias you '
           'can name is a tool; a bias you have not noticed is the '
           'danger.'),
          ('Historian', 'And here is the best of the techniques. Where two '
           'offices recorded the same people for different reasons, '
           'compare them. The common ground tells you what each one '
           'missed, and that is how we know the size of a silence rather '
           'than just complaining about it.'),
          ('Historian', 'A worked example, briefly. A militia list and a '
           'tax roll for one parish name different men. Put them side by '
           'side and you can estimate how many men the tax roll missed, '
           'and then apply that proportion to the parishes where only the '
           'tax roll survives.')],
         items=[
          ('His opening sentence is that what survives is the leftovers '
           'of an ____________.', None, 'office',
           'Rather than a sample of a society.'),
          ('He says arguments leave paper and ____________ leaves '
           'none.', None, 'agreement',
           'Which is the first distortion he describes.'),
          ('A workhouse register, he says, is nearly useless about the',
           ['parish', 'inmates', 'costs', 'officials'], 1,
           'Although it is excellent about the workhouse.'),
          ('The third filter is described as physical and',
           ['deliberate', 'stupid rather than social', 'recent',
            'reversible'], 1,
           'Parchment, surviving institutions and single fires.'),
          ('He says a bias you can name is a ____________.', None,
           'tool', 'While one you have not noticed is the danger.'),
          ('Comparing two offices that recorded the same people tells you '
           'the size of a ____________.', None, 'silence',
           'Rather than merely complaining about it.')])],
   speak=dict(
    part='Part 3', focus='Whose past gets recorded',
    intro=('Four or five sentences. Try once to say why a source is '
           'uneven rather than wrong.'),
    qs=['Whose lives are best recorded in history?',
        'Why do we know so little about ordinary people?',
        'Can we trust what old documents tell us?',
        'Should governments keep more records?'],
    shape=[('answer', 'People who owned land or went to court.'),
           ('support', 'A dispute generates a folder and a quiet year '
            'generates nothing.'),
           ('follow-up', 'So the record is full of arguments and empty of '
            'agreement.'),
           ('support', 'That does not make it untrustworthy.'),
           ('follow-up', 'It makes it uneven in a direction you can '
            'predict, which is a different problem and a more workable '
            'one.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Planning: should museums return objects?',
         prompt=('Should museums return objects to their countries of '
                 'origin? Brainstorm ten ideas and keep only those that '
                 'answer the question rather than describing the topic. '
                 'Twelve minutes.'),
         plan=('Objects taken without the consent of their communities '
               'should be returned where a specific claim can be made, '
               'while the general case for dispersed collections survives '
               'for objects acquired lawfully, because the two situations '
               'raise different questions and are usually argued as one',
               [('A specific claim is different from a general one',
                 ['a named object taken from a named community is a '
                  'question about that object',
                  'the general argument about world collections answers '
                  'nothing about it']),
                ('The practical objections are weaker than they sound',
                 ['the number of contested objects is small relative to '
                  'any collection',
                  'loans in both directions already work where there is '
                  'trust'])]),
         notes=[
          'The commonest intruder on this question is a sentence about how '
          'many visitors a museum gets. It is true, it is about museums, '
          'and it answers nothing about whether a particular object should '
          'go back.',
          'Splitting the question into specific claims and general '
          'arguments is what makes a 250-word essay possible here. Treated '
          'as one question it cannot be answered in that space without '
          'sounding glib.',
          'Both supports under the second heading are checkable. "It would '
          'empty the museums" is the objection most often made and it has '
          'a number attached to it that nobody quotes.'],
         criterion=[('Ideas that answer the question, not the topic',
                     'Task Response'),
                    ('Splitting a question that is usually argued as one',
                     'Task Response')],
         instruct='  Twelve minutes, timed. You write this essay in cycle '
                  '5.',
         lines=12)],
   gram=dict(
    point='Inference and its limits',
    explain=('Reasoning from a document to the world needs verbs that '
             'show how far the inference goes, and a clause that says '
             'what it does not establish.'),
    examples=['The record implies that the people existed, not that they '
              'were baptised.',
              'What survives is the leftovers of an office, not a '
              'sample.',
              'This suggests a pattern; it does not establish a cause.',
              'The exception implies the rule it departed from.'],
    task='Rewrite each claim so that the limit of the inference is '
         'stated.',
    items=[('The parish was quarrelsome.',
            'The archive contains many disputes, which shows how disputes '
            'generate documents rather than how common they were.'),
           ('Poor people left no record.',
            'Poor people appear mainly inside documents written for other '
            'purposes, which record what those purposes required.'),
           ('The records prove nothing.',
            'The records are uneven in directions that can be named, which '
            'makes them usable rather than useless.'),
           ('There was no plague that year.',
            'No burials are recorded for that year, which does not by '
            'itself establish that none occurred.'),
           ('Two sources agree, so it is true.',
            'Two sources that fail in different ways agreeing is much '
            'stronger evidence than either alone, though not proof.')]),
   vocab=[('what is left over', 'the material that happens to '
           'survive'),
          ('office work', 'the paperwork an institution generates'),
          ('silence', 'the absence of any record of something'),
          ('sieve', 'something that lets only part of a thing through'),
          ('common ground', 'the part two records have in common'),
          ('check against', 'to test one record using another'),
          ('uneven', 'not spread equally'),
          ('workhouse', 'an institution that housed the very poor')],
   expr=[('what survives is the leftovers of an office, not a sample',
          'the sentence this cycle is built on'),
         ('arguments leave paper and agreement leaves none',
          'names the first distortion'),
         ('a bias you can name is a tool',
          'turns a limitation into a method'),
         ('the overlap tells you what each one missed',
          'describes the best technique available')],
   trans=['in consequence', 'therefore', 'as a result', 'for that '
          'reason'],
  ),

  dict(
   sub='Who owns the past',
   step=4,
   read=[
    dict(heading='Four claims on one collection',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 59-66',
         paras=[
          'A collection of about nine hundred carved objects, removed from a '
          'West African palace in 1897 and now held across more than twenty '
          'museums in several countries, has become the case through which '
          'this argument is usually conducted. It is a good case for the '
          'purpose because four separate parties have a claim on the '
          'objects, and because each of the four claims is reasonable when '
          'it is stated on its own.',
          'The first is the present-day state in whose territory the '
          'palace stood. It argues that the objects were taken during a '
          'military expedition, that no consent was given or could have '
          'been, and that lawful title cannot follow from that. This claim '
          'is the strongest and it is also the one most often answered '
          'with arguments about something else.',
          'The second is the royal house from which the objects were '
          'taken, which still exists and which is not the same body as the '
          'state. Its claim is narrower and in one way stronger: the '
          'objects were made for a specific court and had a function '
          'within it, and the house argues that a national museum would be '
          'as foreign to them as a European one.',
          'The third is the museums themselves. They argue that the objects '
          'have been conserved at considerable expense, that they are seen '
          'by millions of visitors who would otherwise see nothing of the '
          'kind, and that a dispersed collection allows comparison with '
          'other traditions in a way no single site can. The weakest part of '
          'this claim is that it would equally justify acquiring the objects '
          'today, which nobody defends.',
          'The fourth claim is the least discussed and is the one that makes '
          'museum arguments sound self-serving when it is handled badly. '
          'Scholars and visitors with no connection to any of the parties '
          'have an interest in the objects remaining accessible somewhere, '
          'and that interest is real even though it is not a right. Treating '
          'an interest as though it were a right is precisely the move that '
          'discredits the rest of the case.',
          'What has actually happened is more interesting than the argument. '
          'Several institutions have transferred legal ownership while '
          'agreeing long loans in the other direction, so that the objects '
          'remain on display where they have been for a century and the '
          'question of title is settled honestly. Others have returned '
          'objects outright and lost nothing they can name. A few have done '
          'nothing at all and say very little about it.',
          'The lesson most often drawn is that ownership and location can '
          'be separated, which is true and is not quite the resolution it '
          'appears to be. The arrangements that work are the ones where '
          'the parties already trust each other, and that is a '
          'description of the easy cases rather than a method for the '
          'hard ones.'],
         items=[
          ('Which paragraph describes the claim of a body that is not the '
           'state?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'The royal house for whose court the objects were made.'),
          ('Which paragraph identifies the weakest part of the museums’ '
           'case?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 1,
           'It would justify acquiring the objects today.'),
          ('Which paragraph describes what institutions have actually '
           'done?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 4'], 1,
           'Transfers of ownership with loans in the other direction.'),
          (
           'The writer believes the museums\u2019 case is entirely without '
           'merit.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 4 sets out real arguments and names only one '
           'weak part.',
           {0: 'Yes would need total rejection; paragraph 4 grants '
               'real arguments.', 2: 'Not Given is wrong because the writer weighs the '
               'museums\u2019 case.'}),
          (
           'The writer believes separating ownership from location '
           'resolves the hard cases.',
           ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph says it describes the easy cases.',
           {0: 'Yes would need resolution; the final paragraph says it '
               'handles the easy cases.', 2: 'Not Given is wrong because the proposal is evaluated.'}),
          ('The objects were removed during a military ____________ in '
           '1897.', None, 'expedition',
           'Paragraph 2, which is why consent could not have been '
           'given.'),
          ('The fourth interest is real even though it is not a '
           '____________.', None, 'right',
           'Paragraph 5, and treating it as one sounds self-serving.'),
          ('The arrangements that work are those where the parties '
           'already ____________ each other.', None, 'trust',
           'The final paragraph, which limits the lesson.')])],
   listen=[
    dict(heading='A curator and a campaigner disagree', part='Part 4',
         task='A recorded discussion', band='l4', qtype='Questions 67-72',
         script=[
          ('Chair', 'Dr Villiers-Okafor is a curator. Ms Adeyemi-Strand '
           'campaigns for return. Each begins with their own weakest '
           'point.'),
          ('Villiers-Okafor', 'Mine is that every argument I make for '
           'keeping these objects would also have justified taking them, '
           'and I do not defend taking them. I have never found a way '
           'round that and I have stopped pretending I have.'),
          ('Adeyemi-Strand', 'And mine is that I talk about a community as '
           'if it were one body. There are at least two claimants here '
           'who disagree with each other, and when I am campaigning I '
           'speak as though there is one voice, because two voices are '
           'harder to put on a placard.'),
          ('Chair', 'So where is the disagreement?'),
          ('Adeyemi-Strand', 'On what the default is. He thinks the '
           'objects stay unless a case is made for moving them. I think '
           'they go unless a case is made for keeping them, because of how '
           'they were obtained.'),
          ('Villiers-Okafor', 'That is exactly it, and it is a question '
           'about the burden rather than about the objects.'),
          ('Adeyemi-Strand', 'May I ask you something directly?'),
          ('Villiers-Okafor', 'Please.'),
          ('Adeyemi-Strand', 'If the transfer of ownership costs you '
           'nothing, because the loan brings them straight back, why has '
           'your institution not done it?'),
          ('Villiers-Okafor', 'Because the board fears that the loan will '
           'not be renewed in thirty years, and I think that fear is both '
           'real and not a reason.'),
          ('Adeyemi-Strand', 'It is not a reason. It is the whole point of '
           'ownership.'),
          ('Villiers-Okafor', 'Yes. If we only transfer title on condition '
           'that nothing changes, we have not transferred anything.'),
          ('Chair', 'Is there anything you both want?'),
          ('Adeyemi-Strand', 'Published provenance for everything, not '
           'just the contested pieces.'),
          ('Villiers-Okafor', 'That I would sign tomorrow, and about a '
           'third of our collection would turn out to have no record at '
           'all, which is its own answer.'),
          ('Adeyemi-Strand', 'And it is the one thing neither of us has '
           'to persuade the other about, which is why I suspect it will be '
           'the last thing either institution does.')],
         items=[
          ('The curator’s own weakest point is that his argument for '
           'keeping would also justify',
           ['selling them', 'taking them', 'lending them',
            'copying them'], 1,
           'Which he says he does not defend.'),
          ('The campaigner admits she speaks of a community as if it were '
           'one ____________.', None, 'body',
           'Although at least two claimants disagree.'),
          ('Their actual disagreement concerns what the ____________ '
           'is.', None, 'default',
           'Whether objects stay unless a case is made, or go.'),
          ('The curator says his board fears the loan will not be renewed '
           'in', ['ten years', 'thirty years', 'fifty years',
            'a century'], 1,
           'A fear he calls real and not a reason.'),
          ('He agrees that transferring title on condition nothing '
           'changes means nothing has been', ['agreed', 'transferred',
            'published', 'insured'], 1,
           'Which concedes the campaigner’s point.'),
          ('Both want published ____________ for the whole collection.',
           None, 'provenance',
           'Which he says a third of it lacks entirely.')])],
   speak=dict(
    part='Part 3', focus='Museums and the objects in them',
    sounds=[('The has three pronunciations, and candidates use only one. '
             'Before a consonant it is weak, before a vowel it is thee, and '
             'when you mean the one everybody knows it is also thee, as in it '
             'is not a museum, it is the museum.'),
            ('The same split applies to a and an, and getting an wrong is '
             'heard immediately: an object, an hour, a university. The sound '
             'decides, not the spelling.'),
            ('Practise the heritage phrases of this unit: the object, the '
             'archive, the original, the eighteenth century. Three of those '
             'four take the strong form.'),
            ('Where a weak the meets a th word, hold the sound once: the '
             'thing, the theory. Two separate th sounds there would be slower '
             'than normal speech.'),
            ('Record yourself describing a family object. Count how many times '
             'you used the strong form where the weak one was needed; at this '
             'level that is the commonest article fault in speech, and it is '
             'not a grammar error at all.')],
    intro=('Five sentences. Try once to say that two good claims '
           'conflict.'),
    qs=['Should museums return objects to their countries of origin?',
        'Who should decide?',
        'Does it matter where an object is kept?',
        'What is a museum for?'],
    shape=[('answer', 'Where the object was taken by force, yes.'),
           ('support', 'Nobody argues that a military expedition created '
            'lawful ownership.'),
           ('follow-up', 'The museum’s own arguments would have '
            'justified taking it.'),
           ('support', 'The harder part is that there is often more than '
            'one claimant.'),
           ('follow-up', 'A state and a royal house can both have a good '
            'claim, which is why I would settle ownership first and argue '
            'about location afterwards.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should museums return objects?',
         prompt=('Some people say museums should return objects to the '
                 'countries they came from. Discuss both views and give '
                 'your own opinion. Write at least 250 words.'),
         model=[
          'This argument is usually conducted as one question and is '
          'really two: what should happen to objects taken by force, and '
          'what should happen to the far larger number acquired in other '
          'ways. My own view depends entirely on which of the two is '
          'being discussed.',
          'The case for return is strongest where consent was impossible. '
          'A collection of about nine hundred objects removed from a West '
          'African palace during a military expedition in 1897 is the '
          'usual example, and the argument against returning it is '
          'difficult to state without defending the expedition. Every '
          'reason a museum gives for keeping such objects would equally '
          'have justified taking them, which is the weakness curators '
          'themselves now concede.',
          'The case for keeping collections together is better than its '
          'opponents allow. Objects have been conserved at great expense, '
          'they are seen by millions, and a collection that brings '
          'traditions together permits comparisons that no single site '
          'can. These are real goods, and they are arguments about where '
          'objects are best kept rather than about who owns them.',
          'That distinction is what settles it for me. Ownership and '
          'location are separate questions, and several museums have '
          'already transferred legal title while agreeing long loans in '
          'the other direction, so that the objects remain on display and '
          'the question of title is answered honestly.',
          'In my opinion, therefore, title should follow how an object was '
          'obtained, and location should follow what the owner then '
          'decides. Objects taken by force should be owned by the '
          'communities they were taken from, whether or not they move, and '
          'a museum that transfers ownership only on condition that '
          'nothing changes has not transferred anything at all.'],
         notes=[
          'The introduction splits one question into two and says the '
          'answer depends on which is asked. On a contested topic this is '
          'the most reliable way to produce a position rather than a '
          'balance.',
          'The second paragraph uses the curators’ own concession against '
          'the museum case. Quoting what the other side admits is stronger '
          'than anything the writer could assert.',
          'The final sentence names the trick: transferring title on '
          'condition that nothing changes is not a transfer. Ending on a '
          'sharp, specific observation beats ending on a summary.'],
         model65=[
                  'Some people say museums should return objects to '
                  'the countries they came from. I will consider both '
                  'sides.',
                  'Those in favour argue that many objects were taken '
                  'without consent during a period when the people '
                  'they belonged to had no power to refuse. Returning '
                  'them corrects this. They also argue that objects '
                  'mean more in the place they came from, where they '
                  'are part of a living culture rather than one case '
                  'among thousands.',
                  'Museums reply that they have cared for these '
                  'objects for a long time, often better than would '
                  'have been possible elsewhere, and that a large '
                  'collection lets visitors compare cultures in one '
                  'building. They also warn that returning one object '
                  'may lead to emptying whole museums.',
                  'I think objects taken by force should be returned '
                  'when the country of origin asks for them and can '
                  'care for them. The argument about care is weaker '
                  'than it was, because many countries now have '
                  'excellent museums. Loans in both directions could '
                  'keep the advantages of a large collection.',
                  ],
         gap65=[
                'It tests each of the four claims separately instead '
                'of grouping them into two sides.',
                'It says what the storage evidence shows about the '
                'care argument, rather than asserting that the '
                'argument is weaker than it was.',
                'It declines to settle the question in general and '
                'says why a general answer is not available.',
                ],
         criterion=[('Splitting the question and saying so',
                     'Task Response'),
                    ('Using the other side’s own concession',
                     'Task Response'),
                    ('A sharp specific observation at the end',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'plan.',
         lines=18)],
   gram=dict(
    point='Competing claims and reconciliation',
    explain=('Writing about two good claims needs language that credits '
             'both and then separates the questions they answer.'),
    examples=['Both claims are good, which is why the question is '
              'hard.',
              'Ownership and location are separate questions.',
              'The state and the royal house are not the same body.',
              'That is an argument about where, not about whose.'],
    task='Rewrite each sentence so that both claims are held at once.',
    items=[('The museum should give them back.',
            'The museum has a real interest in keeping the objects '
            'accessible and no good answer to how they were obtained.'),
           ('The country owns them.',
            'The state has a strong claim, although the royal house for '
            'whose court the objects were made is a separate claimant.'),
           ('Museums look after things well.',
            'Conservation and access are genuine goods, and they are '
            'arguments about location rather than about ownership.'),
           ('Returning them solves it.',
            'Transferring ownership settles the question of title, which '
            'does not by itself determine where the objects are '
            'displayed.'),
           ('Both sides are right.',
            'Both claims are good, which is why the question is hard and '
            'why separating ownership from location helps.')]),
   vocab=[('where it came from', 'the place an object originated'),
          ('chain of ownership', 'the record of who held something'),
          ('shared care', 'an arrangement in which two bodies both '
           'look after'),
          ('giving back', 'returning an object to its community'),
          ('legal owner', 'whoever holds title to a thing'),
          ('long loan', 'a lending arrangement lasting years'),
          ('claimant', 'a party making a claim'),
          ('expedition', 'an organised journey, here a military one')],
   expr=[('both claims are good, which is why the question is hard',
          'the sentence this cycle is built on'),
         ('every argument for keeping them would have justified taking '
          'them', 'the concession the curator makes'),
         ('ownership and location are separate questions',
          'the distinction that allows a settlement'),
         ('transferring title on condition that nothing changes',
          'names an empty gesture')],
   trans=['admittedly', 'and yet', 'on balance', 'in either case'],
  ),
 ],
 technique=dict(
  title='The blind-reader sketch, on a bar chart with a gap in it',
  body=('Here is a test for a Task 1 answer that takes two minutes and '
        'finds almost every weakness. Imagine your answer is being read '
        'aloud to somebody who cannot see the chart, and who must draw it '
        'from what you say. Could they? They need the shape of each '
        'series, the order of the categories, and the places where '
        'something stops or changes direction. They do not need every '
        'number, and a reader given every number and no shape will draw '
        'nothing at all. The test is sharpest on a chart with a gap or a '
        'ceiling in it. If one of your series stops rising, your blind '
        'reader must be told that it stopped, because otherwise they will '
        'draw it continuing. And if a category is missing from a period '
        'entirely, you have to say so in a sentence that reports the '
        'absence without explaining it, because the chart does not tell '
        'you why. Write the answer, then read it aloud slowly, and draw '
        'what you hear.'),
  panel=[('Could they draw it?',
          'Shape first, then order, then the turning points. Numbers '
          'support those.'),
         ('Say when something stops',
          'A series that flattens must be reported as flattening, or your '
          'reader draws it rising.'),
         ('Report a gap, do not explain it',
          '"No documents survive from that decade" is reporting. "Because '
          'of the war" is not in the chart.'),
         ('Numbers serve the shape',
          'Every figure should be attached to a comparison, never listed '
          'on its own.')],
  task='Write the cycle 3 Task 1 answer, then read it aloud and draw the '
       'chart from your own words.',
  qs=['Could somebody draw your chart from your answer?',
      'Did you say which series stops rising?',
      'Did you report the gap without explaining it?',
      'Is every number attached to a comparison?',
      'What did your drawing get wrong, and which sentence caused '
      'that?']),
 outlining=dict(
  title='Outline to essay, then compare with the published model',
  body=('This exercise is the one most students skip and the one that '
        'moves a band fastest. Write the essay from your outline under '
        'time. Then read the model answer in this unit and compare them '
        'paragraph by paragraph, asking a specific question about each: '
        'what does the model do in this paragraph that mine does not? The '
        'answer is almost never vocabulary. It is usually one of four '
        'things. The model concedes something before answering it. The '
        'model has a number or a case where yours has an assertion. The '
        'model\'s position is a rule rather than a side. Or the model\'s '
        'last sentence adds a step instead of summarising. Mark which of '
        'the four you missed, and that is your target for the next essay '
        'rather than a general intention to write better.'),
  frame=('Objects taken without the consent of their communities should '
         'be returned where a specific claim can be made, while the '
         'general case for dispersed collections survives for objects '
         'acquired lawfully, because the two situations raise different '
         'questions and are usually argued as one',
         [('A specific claim is different from a general one',
           ['a named object taken from a named community is a question '
            'about that object',
            'the general argument about world collections answers nothing '
            'about it']),
          ('The practical objections are weaker than they sound',
           ['the number of contested objects is small relative to any '
            'collection',
            'loans in both directions already work where there is '
            'trust'])]),
  task='Write the cycle 5 essay from the frame, then compare it with the '
       'model paragraph by paragraph.',
  qs=['Which paragraph of the model concedes something?',
      'Where does the model have a case and yours an assertion?',
      'Is the model’s position a rule or a side?',
      'What does the model’s last sentence add?',
      'Which of the four will you aim at next time?'],
  answers=['usually the second or third body paragraph',
           'count them: it is often three to nothing',
           'a rule travels further than a side',
           'a step, almost never a summary',
           'pick one, not four']),
 candos=['I can read a visitor notice for its exceptions',
         'I can test a Task 1 answer by trying to draw it',
         'I can report a gap in a chart without explaining it',
         'I can say why an archive is uneven rather than wrong',
         'I can hold two good claims in one sentence'],
 tip=('Read your Task 1 answer aloud and try to draw the chart from your '
      'own words. Whatever you cannot draw is what the examiner cannot '
      'see either.'),
)
