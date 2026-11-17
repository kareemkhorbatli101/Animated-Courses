# -*- coding: utf-8 -*-
"""Unit 19 - Transport and Mobility. IELTS Volume 2, band 5.5."""

_BEFORE = ('The corridor in 2015',
 [(0.06, 0.04, 0.40, 0.14, 'Goods yard', 'building'),
  (0.54, 0.04, 0.40, 0.14, 'Timber store', 'building'),
  (0.06, 0.30, 0.34, 0.16, 'Sidings', 'building'),
  (0.46, 0.30, 0.22, 0.16, 'Scrubland', 'green'),
  (0.74, 0.30, 0.20, 0.16, 'Depot', 'building'),
  (0.06, 0.56, 0.32, 0.16, 'Allotments', 'green'),
  (0.46, 0.56, 0.48, 0.16, 'Level crossing', 'new')],
 [(0.0, 0.24, 1.0, 0.24, 'Dunmorrow Road'),
  (0.0, 0.80, 1.0, 0.80, 'Canal')])

_AFTER = ('The corridor after the new line',
 [(0.06, 0.04, 0.40, 0.14, 'Station', 'new'),
  (0.54, 0.04, 0.40, 0.14, 'Interchange', 'new'),
  (0.06, 0.30, 0.34, 0.16, 'Track and platforms', 'new'),
  (0.46, 0.30, 0.22, 0.16, 'Pocket park', 'green'),
  (0.74, 0.30, 0.20, 0.16, 'Depot retained', 'building'),
  (0.06, 0.56, 0.32, 0.16, 'Allotments retained', 'green'),
  (0.46, 0.56, 0.48, 0.16, 'Underpass', 'new')],
 [(0.0, 0.24, 1.0, 0.24, 'Dunmorrow Road'),
  (0.0, 0.80, 1.0, 0.80, 'Canal'),
  (0.0, 0.52, 1.0, 0.52, 'New footbridge route')])

_KEY = [('Kept from before', 'building'), ('New or rebuilt', 'new'),
        ('Open ground', 'green')]

_MAPS = dict(kind='map',
             title='The Dunmorrow corridor before and after the new line',
             sub='two plans of the same ground, ten years apart',
             panels=[_BEFORE, _AFTER], key=_KEY)

UNIT = dict(
 n=19, vol=2, level='B1+', band='5.5',
 theme='Transport and Mobility',
 opener=(
   'Four travel passes, a parking fine you are going to appeal against, '
   'two plans of the same railway corridor ten years apart, and the '
   'finding that makes transport planning so difficult to argue about: '
   'that a new road fills up, and that it fills up because it was '
   'built. The technique page returns to maps and the single habit that '
   'makes two of them manageable.'),

 cycles=[
  dict(
   sub='Season tickets and permits',
   step=1,
   read=[
    dict(heading='Four travel passes compared',
         kind='Comparison table',
         task='Note completion and matching features',
         band='gt_short', qtype='Questions 1-6',
         skill=('A comparison text is read down one column at a time',
                ['Four options and five features is twenty facts. The '
                 'questions ask about four or five of them, so find the '
                 'feature the question names and read only that.',
                 'The option that is cheapest is rarely the one the '
                 'questions are about. Look for the one with a '
                 'restriction the others do not have.']),
         paras=[
          'The Standard Monthly pass costs £74 and may be used at any '
          'time on buses and trams within the city boundary. It is '
          'transferable: anybody may use it, though not two people at '
          'once.',
          'The Off-Peak Monthly costs £48 and may not be used between '
          '07.00 and 09.30 on weekdays. It is valid at all times at '
          'weekends and on public holidays, and it is the only pass that '
          'is not transferable, because it carries a photograph.',
          'The Annual pass costs £740, which is ten months at the '
          'standard rate, and includes two free guest days a month for one '
          'accompanying adult. It cannot be refunded, although it may be '
          'suspended for up to eight weeks a year on production of a '
          'medical note.',
          'The Young Person’s Monthly costs £31 for anybody aged sixteen '
          'to twenty-two. It carries the same weekday restriction as the '
          'Off-Peak pass, and unlike that pass it is valid on the two '
          'riverbus routes.',
          'All four passes include travel to the airport by bus route 90 '
          'only. Travel to the airport by rail requires a separate ticket '
          'in every case.',
          'Passes are posted within three working days. A lost pass is '
          'replaced once a year free and thereafter for £9.'],
         items=[
          ('The Standard Monthly pass costs £____________.', None, '74',
           'Paragraph 1, and it may be used at any time within the '
           'boundary.'),
          ('Which pass is not transferable?',
           ['Standard Monthly', 'Off-Peak Monthly', 'Annual', 'Young Person\u2019s Monthly'],
           1, 'Paragraph 2: it carries a photograph.',
           {0: 'The Standard Monthly may be used by anybody, one at a '
               'time.', 2: 'The Annual pass even brings a guest two days a month.', 3: 'Young Person\u2019s Monthly is valid on the riverbus '
               'routes.'}),
          ('The Annual pass includes ____________ free guest days a '
           'month.', None, 'two',
           'Paragraph 3, for one accompanying adult.'),
          ('The Annual pass may be suspended for up to ____________ '
           'weeks a year.', None, 'eight',
           'Paragraph 3, on production of a medical note.'),
          ('Which pass is valid on the riverbus routes?',
           ['Standard Monthly', 'Off-Peak Monthly', 'Annual', 'Young Person\u2019s Monthly'],
           3, 'Paragraph 4, unlike the Off-Peak pass.',
           {0: 'The Standard Monthly covers buses and trams only.', 1: 'Off-Peak Monthly is not transferable.', 2: 'The Annual pass is the standard pass bought for ten '
               'months.'}),
          ('Travel to the airport is included by bus route '
           '____________ only.', None, '90',
           'Paragraph 5: rail requires a separate ticket.')]),
    dict(heading='How to apply for a parking permit',
         kind='Procedure notice', task='Note completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Check first which permit zone your street is in, using the map '
          'on the council website. A permit is valid in one zone only, '
          'and a street on a boundary is listed under both zones with the '
          'side of the street stated.',
          'Then gather two documents: proof of address dated within the '
          'last three months, and the vehicle registration document. A '
          'lease is accepted as proof of address; a mobile telephone bill '
          'is not.',
          'Apply online or at the Civic Centre. Applications are '
          'processed within ten working days, and a temporary permit '
          'valid for fourteen days is issued at the counter to anybody '
          'who applies in person.',
          'The permit is then posted. Display it in the windscreen with '
          'the expiry date visible from outside the vehicle, as a permit '
          'that cannot be read is treated as a permit that is not '
          'there.'],
         items=[
          ('A permit is valid in ____________ zone only.', None, 'one',
           'Paragraph 1, and boundary streets are listed under both '
           'zones.'),
          ('Proof of address must be dated within the last '
           '____________ months.', None, 'three',
           'Paragraph 2, where a lease is accepted but a telephone '
           'bill is not.'),
          ('Applicants in person receive a temporary permit valid for '
           '____________ days.', None, 'fourteen',
           'Paragraph 3, issued at the counter while the application '
           'is processed.'),
          ('A permit that cannot be read is treated as one that is '
           '____________.', None, 'not there',
           'Paragraph 4, so the expiry date must be visible.')])],
   listen=[
    dict(heading='Applying for a parking permit', part='Part 1',
         task='A conversation at a council counter · note completion', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Clerk', 'Good afternoon. Parking permits?'),
          ('Resident', 'Yes. I have just moved to Fettercairn Street.'),
          ('Clerk', 'Which end?'),
          ('Resident', 'Does it matter?'),
          ('Clerk', 'It does for you. Fettercairn Street is on a '
           'boundary. The even numbers are zone C and the odd numbers are '
           'zone D.'),
          ('Resident', 'I am at forty-one.'),
          ('Clerk', 'Then zone D. Have you brought proof of address?'),
          ('Resident', 'I have a mobile phone bill.'),
          ('Clerk', 'I cannot take that, I am afraid. A lease, a council '
           'tax bill or a bank statement, dated within three months.'),
          ('Resident', 'I have the lease in the car.'),
          ('Clerk', 'That is ideal. And the vehicle registration '
           'document?'),
          ('Resident', 'Here.'),
          ('Clerk', 'Thank you. Registration number?'),
          ('Resident', 'K M nine four, R T O.'),
          ('Clerk', 'K M nine four, R T O. And the permit is sixty-two '
           'pounds for the year in zone D.'),
          ('Resident', 'How long does it take?'),
          ('Clerk', 'Ten working days to process, then it is posted. But '
           'since you are here in person I can give you a temporary one '
           'now, valid fourteen days.'),
          ('Resident', 'That is a relief. I had a fine on Tuesday.'),
          ('Clerk', 'Then appeal it. You have twenty-eight days from the '
           'date on the notice, and say in the letter that your '
           'application was already in progress.'),
          ('Resident', 'Will that work?'),
          ('Clerk', 'Sometimes. It works more often if you attach the '
           'lease and the temporary permit, and if you do it in '
           'writing.')],
         items=[
          ('Street: ____________ Street, number 41', None,
           'Fettercairn', 'Which is listed under two zones.'),
          ('Permit zone: ____________', None, 'D',
           'The odd-numbered side of the street.'),
          ('Proof of address to be used: ____________', None, 'lease',
           'A mobile telephone bill is not accepted.'),
          ('Vehicle registration: ____________ RTO', None, 'KM94',
           'Read back by the clerk to confirm it.'),
          ('Annual cost: £____________', None, '62',
           'The annual cost of a permit in that zone.'),
          ('Deadline to appeal the fine: ____________ days', None,
           'twenty-eight', 'Counted from the date printed on the notice.')])],
   speak=dict(
    part='Part 1', focus='How you get around',
    intro=('Two or three sentences each. Name the actual journey rather '
           'than describing transport in general.'),
    qs=['How do you usually travel to work or college?',
        'Is public transport good where you live?',
        'Do you drive?',
        'Has the way you travel changed in the last few years?'],
    shape=[('answer', 'Tram, about twenty-five minutes door to door.'),
           ('support', 'It is a monthly pass, which works out cheaper '
            'than the bus and the train together.'),
           ('follow-up', 'I drove for two years before that and I do '
            'not miss the parking at all.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Appealing against a parking fine',
         prompt=('You have received a parking fine which you believe is '
                 'unfair. Write a letter to the council. In your letter: '
                 'give the details of the notice; explain why you believe '
                 'it should be cancelled; say what you are enclosing. '
                 'Write at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I wish to appeal against penalty notice number PD/2284/19, '
          'issued at 11.40 on Tuesday 3 March in Fettercairn Street, zone '
          'D, to vehicle KM94 RTO.',
          'I appeal on the grounds that an application for a resident’s '
          'permit for this address was already in progress when the '
          'notice was issued. I moved to 41 Fettercairn Street on 24 '
          'February and applied at the Civic Centre on 2 March, the day '
          'before the notice. I was issued with a temporary permit at the '
          'counter, and I accept that it was in the glove compartment '
          'rather than the windscreen on the morning in question.',
          'I am enclosing three documents: a copy of my lease dated 24 '
          'February, the temporary permit issued on 2 March, and the '
          'receipt for the annual permit fee of £62.',
          'If the notice cannot be cancelled in full, I should be '
          'grateful if you would consider reducing it, as the permit had '
          'been paid for before the notice was issued.',
          'Yours faithfully,',
          'Gideon Rasmussen-Achebe'],
         notes=[
          'The first paragraph is nothing but identifiers: notice number, '
          'time, date, street, zone, registration. An appeal that the '
          'reader cannot match to a record is refused before it is '
          'considered.',
          'The writer admits the one fact against him — the permit was in '
          'the glove compartment — in the middle of his own strongest '
          'paragraph. An appeal that conceals the obvious objection reads '
          'as an appeal that has not thought about it.',
          'The enclosures are listed and dated, and the last paragraph '
          'asks for a reduction if cancellation is refused. Giving the '
          'reader a smaller thing to grant is the move that gets appeals '
          'partly allowed.'],
         criterion=[('An opening paragraph of identifiers only',
                     'Task Achievement'),
                    ('The fact against you, admitted and placed',
                     'Task Response'),
                    ('A smaller alternative the reader can grant',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Appeal structures and conditional reasoning',
    explain=('An appeal states the ground, concedes what is true against '
             'it, and offers a conditional alternative.'),
    examples=['I wish to appeal against the notice issued on 3 March on '
              'the grounds that an application was in progress.',
              'I accept that the permit was not displayed in the '
              'windscreen.',
              'Had the application been processed, no notice would have '
              'been issued.',
              'If the notice cannot be cancelled, I should be grateful if '
              'you would consider reducing it.'],
    task='Rewrite each sentence in the register of a formal appeal.',
    items=[('This fine is unfair.',
            'I wish to appeal against penalty notice PD/2284/19 on the '
            'grounds set out below.'),
           ('I had already applied for a permit.',
            'An application for a resident’s permit was already in '
            'progress when the notice was issued.'),
           ('I admit the permit was in the car, not the window.',
            'I accept that the temporary permit was in the glove '
            'compartment rather than displayed in the windscreen.'),
           ('If you had been quicker there would be no fine.',
            'Had the application been processed within the stated period, '
            'no notice would have been issued.'),
           ('At least reduce it.',
            'If the notice cannot be cancelled in full, I should be '
            'grateful if you would consider a reduction.')]),
   vocab=[('permit zone', 'the area in which a permit is valid'),
          ('exemption', 'a release from a rule that applies to others'),
          ('appeal', 'a formal request to cancel a decision'),
          ('evidence', 'documents supporting a claim'),
          ('proof of address', 'a document showing where you live'),
          ('permit holder', 'a person who has been issued a permit'),
          ('season ticket', 'a pass covering travel for a period'),
          ('fare', 'the price of a single journey')],
   expr=[('I wish to appeal against the notice issued on',
          'the opening sentence of an appeal'),
         ('on the grounds that',
          'introduces the reason, and only one is needed'),
         ('I accept that the permit was not displayed',
          'concedes the fact against you'),
         ('if the notice cannot be cancelled in full',
          'offers a smaller thing to grant')],
   trans=['furthermore', 'in addition', 'accordingly', 'in the '
          'alternative'],
  ),

  dict(
   sub='The daily journey',
   step=2,
   read=[
    dict(heading='Four commuters on what they would change',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Ondine: Fifty-five minutes each way and I would not change '
          'the time. I would change the standing. I can read for '
          'fifty-five minutes sitting down and I can do nothing at all '
          'for fifty-five minutes with my arm through a strap.',
          'B  Thaddeus: Everybody talks about more trains and nobody '
          'talks about the hour. My employer could let me start at ten '
          'and the whole problem disappears for me and for the person who '
          'gets my seat at eight. It costs nothing and it is not '
          'offered.',
          'C  Perpetua: I work from home two days a week and I am not '
          'going to pretend it is simple. My journey is better and my '
          'work is worse. The things that used to get solved in four '
          'minutes beside somebody’s desk now take two days of '
          'messages.',
          'D  Ignatius: I cycle, which everybody praises and nobody '
          'asks about. The distance is fine and the showers are fine. '
          'There is one roundabout where I have twice been hit, and that '
          'roundabout is the entire reason my colleagues do not cycle.'],
         items=[
          (
           'Which commuter objects to the conditions rather than the '
           'length of the journey?',
           ['Ondine', 'Thaddeus', 'Perpetua', 'Ignatius'], 0,
           'She would not change the time, only the standing.',
           {1: 'Thaddeus argues for a change that costs nothing.', 2: 'Perpetua reports a gain and a loss together.', 3: 'Ignatius identifies a single point that deters others.'}),
          ('Which commuter argues for a change that costs nothing?',
           ['Ondine', 'Thaddeus', 'Perpetua', 'Ignatius'], 1,
           'Starting at ten rather than running more trains.',
           {0: 'Ondine objects to the conditions rather than the '
               'length of the journey.', 2: 'Perpetua reports a gain and a loss together.', 3: 'Ignatius identifies a single point that deters others.'}),
          ('Which commuter reports a gain and a loss together?',
           ['Ondine', 'Thaddeus', 'Perpetua', 'Ignatius'], 2,
           'A better journey and worse work.',
           {0: 'Ondine objects to the conditions rather than the '
               'length of the journey.', 1: 'Thaddeus argues for a change that costs nothing.', 3: 'Ignatius identifies a single point that deters others.'}),
          (
           'Which commuter identifies a single point that deters '
           'others?',
           ['Ondine', 'Thaddeus', 'Perpetua', 'Ignatius'], 3,
           'One roundabout, which is the whole reason.',
           {0: 'Ondine objects to the conditions rather than the '
               'length of the journey.', 1: 'Thaddeus argues for a change that costs nothing.', 2: 'Perpetua reports a gain and a loss together.'}),
          (
           'Thaddeus\u2019s employer has refused his request to start '
           'later.', ['Yes', 'No', 'Not Given'], 2,
           'He says only that it is not offered, and no refusal is '
           'ever mentioned.',
           {0: 'Yes would need a refusal; he says only that it is not '
               'offered.', 1: 'No would need the employer to have agreed, which is '
               'never stated.'}),
          (
           'Perpetua believes working from home has improved her work.',
           ['Yes', 'No', 'Not Given'], 1,
           'She says her journey is better and her work is worse.',
           {0: 'Yes would need better work; she says her work is '
               'worse.', 2: 'Not Given is wrong because she rates both the journey '
               'and the work.'})])],
   listen=[
    dict(heading='Two planners on peak demand', part='Part 3',
         task='A discussion between two transport planners · note completion and multiple choice', band='l3',
         qtype='Questions 23-28',
         script=[
          ('Thaddeus', 'Every meeting I go to is about adding capacity. I '
           'want to argue for the other thing.'),
          ('Ondine', 'Spreading the peak.'),
          ('Thaddeus', 'Spreading the peak, which nobody ever puts on '
           'an agenda. Our morning peak is eighty minutes long and it '
           'carries forty per cent of the day’s passengers. Everything we build, we build for those eighty '
           'minutes, and then it stands idle.'),
          ('Ondine', 'Agreed on the diagnosis. My difficulty is that you '
           'cannot deliver it. We control the trains. We do not control '
           'when four hundred employers want people at their desks.'),
          ('Thaddeus', 'We control the price.'),
          ('Ondine', 'We have an off-peak fare and it moves about three '
           'per cent of journeys. The people who can shift have already '
           'shifted.'),
          ('Thaddeus', 'Because the discount is too small and it is in '
           'the wrong place. Twelve per cent off an off-peak ticket is '
           'not a reason to argue with your manager. Thirty per cent '
           'might be.'),
          ('Ondine', 'And what happens to the revenue in the '
           'meantime?'),
          ('Thaddeus', 'Falls in year one. Which is why nobody does it, '
           'and it is a genuine objection rather than an excuse.'),
          ('Ondine', 'May I put the thing I think we both underrate?'),
          ('Thaddeus', 'Please.'),
          ('Ondine', 'Working from home did in eighteen months what '
           'fares failed to do in thirty years. Our Tuesday and Thursday '
           'peaks are now almost the old peak, and Monday and Friday are '
           'twenty per cent below it.'),
          ('Thaddeus', 'Which creates a new problem, because we have to '
           'build for Tuesday.'),
          ('Ondine', 'We do. But it proves the demand is movable, which '
           'is what everybody told me for my whole career that it was '
           'not.')],
         items=[
          ('The morning peak lasts ____________ minutes.', None,
           'eighty', 'And carries forty per cent of the day.'),
          (
           'What share of journeys does the existing off-peak fare '
           'move?', None, 'three per cent',
           'Because those who can shift already have.'),
          (
           'Thaddeus argues the current discount of twelve per cent is '
           'too',
           ['late', 'small', 'complicated', 'generous'], 1,
           'And suggests thirty per cent might work.',
           {0: 'Timing is not his complaint about the existing '
               'discount.', 2: 'He does not say the fare structure is hard to '
               'understand.', 3: 'Generous is the opposite of what he calls twelve per '
               'cent.'}),
          ('He concedes that revenue falls in year ____________.', None,
           'one', 'Which he calls a genuine objection rather than an '
           'excuse.'),
          (
           'Working from home did in eighteen months what fares failed '
           'to do in how long?', None, 'thirty years',
           'According to Ondine, whose career was spent being told '
           'otherwise.'),
          ('Monday and Friday are now ____________ per cent below the '
           'old peak.', None, 'twenty',
           'While Tuesday and Thursday are close to it.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Journeys',
    longturn=[('The journey I would change is my daily one to work, which goes '
               'from the north of the city to an industrial estate on the '
               'eastern edge of it.'),
              ('It takes fifty-five minutes on a good day and an hour and a '
               'half on a bad one, for a distance of about eleven kilometres.'),
              ('I travel by two buses with a wait between them, because there '
               'is no direct route, and the second bus runs every twenty '
               'minutes and is not timed to meet the first.'),
              ('What is wrong with it is almost entirely the gap in the '
               'middle. The buses themselves are fine. I stand at a stop on a '
               'main road with no shelter for anything between two and '
               'nineteen minutes, and because I cannot predict it, I have to '
               'leave as though it will always be nineteen. So the journey '
               'costs me more time in the planning than in the travelling. '
               'What I would change is not the route, which would cost '
               'millions, but the timetable, which costs nothing: hold the '
               'second bus for three minutes after the first arrives. I have '
               'written to the company twice. The second reply explained that '
               'the two routes are operated by different divisions.')],
    intro=('Short answers, then the long turn. Describe the journey '
           'before you say what is wrong with it.'),
    cue=('Describe a journey you would change if you could.',
         ['where it goes and how long it takes', 'how you travel',
          'what is wrong with it',
          'and explain what you would change about it']),
    qs=['How long is your daily journey?',
        'Do you travel at the busiest time?',
        'Now look at the card. You have one minute to make notes.',
        'Should employers let people choose their hours?'],
    shape=[('answer', 'My journey to work, fifty-five minutes each way '
            'by train.'),
           ('support', 'I leave at twenty past seven to be in for '
            'half past eight.'),
           ('follow-up', 'What is wrong with it is not the length, it is '
            'the standing.'),
           ('support', 'I can read for fifty-five minutes if I have a '
            'seat.'),
           ('follow-up', 'So what I would change is my hours rather than '
            'the railway, which is also the cheaper thing to '
            'change.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should employers be required to allow working from '
                 'home?',
         prompt=('Some people believe employers should be required to '
                 'allow employees to work from home. Discuss the '
                 'advantages and disadvantages and give your own '
                 'opinion. Write at least 250 words.'),
         model=[
          'Working from home has produced one clear public benefit and '
          'one largely private cost, and the argument about requiring it '
          'usually ignores the first and exaggerates the second.',
          'The advantages are easy to list and one of them is larger '
          'than the rest. Employees save the journey, which in cities is '
          'commonly an hour each way, and they report less of the fatigue '
          'that journey produces. The public benefit is bigger still. '
          'Where a proportion of employees stay at home on some days, the '
          'morning peak spreads, and spreading the peak does more for a '
          'transport system than adding capacity to it, because the '
          'capacity built for eighty busy minutes stands idle for the '
          'rest of the day.',
          'The disadvantages are real and are mostly felt inside '
          'organisations rather than by the public. Questions that were '
          'settled in four minutes beside a colleague’s desk take two '
          'days of messages, new employees learn their job more slowly, '
          'and the people who suffer most are the least experienced, who '
          'have least to gain from the arrangement and least power to '
          'object to it.',
          'My own view is that a requirement is the wrong instrument '
          'because the right number of days differs by job, and that a '
          'requirement to consider is the right one. An employer who must '
          'answer a request in writing, with reasons, behaves differently '
          'from one who need not, as the experience of flexible hours '
          'suggests.',
          'In conclusion, the gains are shared and the costs are '
          'concentrated, which is exactly the situation in which '
          'employers left alone will offer less than is socially '
          'useful.'],
         notes=[
          'Structure 5: advantages, disadvantages, then a position. The '
          'essay separates who gains from who loses, which is what lifts '
          'this structure above a list.',
          'The position rejects the instrument in the question and '
          'substitutes a weaker one — a duty to consider rather than a '
          'duty to allow. Naming a mechanism that already exists for '
          'flexible hours makes the proposal credible.',
          'The final sentence states the general situation the essay has '
          'described: shared gains, concentrated costs. A conclusion that '
          'names the shape of the problem is stronger than one that '
          'repeats the answer.'],
         criterion=[('Separating who gains from who loses',
                     'Task Response'),
                    ('A weaker instrument, named precisely',
                     'Task Response'),
                    ('A conclusion naming the shape of the problem',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Obligation and exception',
    explain=('Writing about rules needs a clear scale of obligation and '
             'a way of marking the exception.'),
    examples=['Employers should be required to consider a request in '
              'writing.',
              'Spreading the peak does more than adding capacity to '
              'it.',
              'Employers need not grant every request, provided reasons '
              'are given.',
              'The exception is the least experienced employee, who gains '
              'least.'],
    task='Rewrite each sentence with a precise level of obligation.',
    items=[('Companies must let people work at home.',
            'Employers should be required to consider a request to work '
            'from home and to answer it in writing.'),
           ('People should be allowed to pick their hours.',
            'Employees should be entitled to request a change of hours, '
            'which the employer may refuse with reasons.'),
           ('Running more trains is not the answer.',
            'Spreading the peak does more for the network than adding '
            'capacity to it.'),
           ('New staff lose out.',
            'The exception is the newest employees, who learn their work '
            'more slowly at a distance.'),
           ('Nobody has to do it.',
            'An employer need not grant every request, provided that the '
            'refusal is explained.')]),
   vocab=[('peak', 'the busiest period of the day'),
          ('spread the peak', 'to move journeys out of the busiest '
           'period'),
          ('flexible hours', 'start and finish times an employee can '
           'vary'),
          ('working from home', 'doing one’s job away from the '
           'workplace'),
          ('quieter hours', 'the periods when demand is low'),
          ('commuter', 'a person who travels daily to work'),
          ('rush hour', 'the period of heaviest traffic'),
          ('throughput', 'how much a route carries in a given time')],
   expr=[('spreading the peak does more than adding capacity to it',
          'the sentence this cycle turns on'),
         ('the capacity built for eighty minutes stands idle',
          'explains why peaks are expensive'),
         ('the people who suffer most are the least experienced',
          'identifies who bears a cost'),
         ('a requirement to consider rather than a requirement to allow',
          'names a weaker instrument')],
   trans=['whereas', 'even so', 'by contrast', 'on the other hand'],
  ),

  dict(
   sub='A new route through the city',
   step=3,
   read=[
    dict(heading='The Dunmorrow line: a route plan',
         kind='Plan with key',
         task='Matching information and plan labelling',
         band='gt_work', qtype='Questions 29-34',
         figure=_MAPS,
         paras=[
          'The two plans show the same strip of ground on either side of '
          'Dunmorrow Road, before the new line was built and ten years '
          'afterwards. The road and the canal are unchanged in both and '
          'are the features to orient by, since almost everything between '
          'them has moved.',
          'North of the road, the goods yard and the timber store have '
          'both gone. A station stands where the goods yard was, and an '
          'interchange with the tram occupies the site of the timber '
          'store. These are the two largest changes and they are the two '
          'easiest to describe.',
          'In the middle strip, the sidings have been replaced by the '
          'running track and two platforms. The scrubland beside them is '
          'now a small park, and the depot at the eastern end has been '
          'retained in its original position, which is the only building '
          'in the middle strip that survives.',
          'South of the track, the allotments remain, reduced slightly in '
          'area but in the same place. The level crossing has been '
          'removed and replaced by an underpass on roughly the same '
          'alignment, which is the change residents mention first and the '
          'one the plans show least clearly.',
          'A new footbridge route runs east to west across the middle of '
          'the corridor in the later plan, where no crossing existed '
          'before. It connects the station directly to the allotments and '
          'the canal path, and it is the only entirely new line of '
          'movement on either plan.',
          'Taken together, the corridor has changed from a working goods '
          'yard into a passenger railway with a park and two crossings. '
          'The outer edges did not change, and naming them first makes '
          'the rest describable.'],
         items=[
          ('Which paragraph identifies the two features to orient by?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'],
           0, 'The road and the canal, unchanged in both plans.',
           {1: 'Paragraph 2 describes the changes north of the road.', 2: 'Paragraph 3 describes the only surviving building in '
               'the middle strip.', 3: 'Paragraph 4 describes the changes south of the track.'}),
          (
           'Which paragraph describes the only surviving building in '
           'the middle strip?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1, 'The depot, retained in its original position.',
           {0: 'Paragraph 2 covers the station and the tram '
               'interchange.', 2: 'Paragraph 4 covers the allotments and the underpass.', 3: 'Paragraph 5 describes the only entirely new line of '
               'movement.'}),
          (
           'Which paragraph describes the only entirely new line of '
           'movement?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           2, 'The footbridge route across the middle.',
           {0: 'Paragraph 3 covers the track, platforms, park and '
               'depot.', 1: 'Paragraph 4 covers the allotments and the new '
               'underpass.', 3: 'Paragraph 6 sums up the corridor as a whole.'}),
          ('A station now stands where the ____________ was.', None,
           'goods yard', 'Paragraph 2, north of the road.'),
          ('The sidings have been replaced by the running track and two '
           '____________.', None, 'platforms',
           'Paragraph 3, in the middle strip.'),
          ('The level crossing has been replaced by an ____________.',
           None, 'underpass',
           'Paragraph 4, on roughly the same alignment.')])],
   listen=[
    dict(heading='A planner describes the route', part='Part 2',
         task='A talk to a residents’ meeting · plan labelling and multiple choice', band='l2',
         qtype='Questions 35-40',
         figure=_MAPS,
         script=[
          ('Planner', 'Two plans of your own street, ten years apart. I '
           'am going to describe them in the order I would want somebody '
           'to describe them back to me, because that order is the whole '
           'skill.'),
          ('Planner', 'Start with what did not move. Dunmorrow Road runs '
           'across the top of both plans and the canal runs across the '
           'bottom of both. If you lose your place at any point in the '
           'next ten minutes, those two lines will put you back.'),
          ('Planner', 'North of the road, before: goods yard on the left, '
           'timber store on the right. After: a station where the goods '
           'yard stood, and an interchange with the tram where the timber '
           'store stood. Two sites, two replacements, same positions.'),
          ('Planner', 'Middle strip, before: sidings, scrubland, depot. '
           'After: track and two platforms, a pocket park, and the depot '
           'still there. The depot is the only building in that strip '
           'that survives, and it is why the track bends at the eastern '
           'end.'),
          ('Planner', 'South of the track the allotments are still the '
           'allotments, a little smaller and in the same place. And the '
           'level crossing is gone. In its place, on more or less the '
           'same line, there is an underpass, which is the change you '
           'will all raise in the questions.'),
          ('Planner', 'One more thing, and it is the only genuinely new '
           'line on the plan. A footbridge route straight across the '
           'middle, east to west, where nothing crossed before. It joins '
           'the station to the allotments and the canal path.'),
          ('Planner', 'So: a working goods yard has become a passenger '
           'station with a park and two crossings. Everything on the '
           'outer edges stayed. Name the things that stayed first and the '
           'rest describes itself.')],
         items=[
          ('He says to start with what did not ____________.', None,
           'move', 'The road and the canal, top and bottom.'),
          ('North of the road, an interchange with the tram now occupies '
           'the site of the ____________.', None, 'timber store',
           'While a station occupies the goods yard site.'),
          ('In the middle strip, the centre is now a pocket '
           '____________.', None, 'park',
           'Where there was scrubland before.'),
          ('The depot is the only building in that strip that',
           ['moved', 'survives', 'expanded', 'closed'], 1,
           'And it explains why the track bends.',
           {0: 'The depot stayed exactly where it was, which is the '
               'point.', 2: 'No expansion is described; it is unchanged in '
               'position.', 3: 'It is still there, and the track bends around it.'}),
          ('The level crossing has been replaced by an ____________ on '
           'roughly the same line.', None, 'underpass',
           'Which he expects residents to raise.'),
          ('The footbridge route joins the station to the allotments and '
           'the ____________ path.', None, 'canal',
           'And is the only genuinely new line on the plan.')])],
   speak=dict(
    part='Part 2 into Part 3', focus='Building transport through a city',
    intro=('Start with the card. Notes for a minute, then talk, developing '
           'each bullet instead of adding bullets of your own. The '
           'discussion follows: four or five sentences. Describe the '
           'trade-off rather than taking a side immediately.'),
    cue=('Describe building work that disrupted a place you know.',
         ['what was being built',
          'where it was',
          'how long it took',
          'and explain whether it was worth it']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Do you use what was built?',
        'Who was most affected while it went on?',
        'Is it worth disrupting a city to build new transport?',
        'Who should be compensated when a line is built?',
        'Do new stations change the areas around them?',
        'Should old railway land be used for housing instead?'],
    shape=[('answer', 'Usually yes, and the costs and the benefits fall '
            'on different people.'),
           ('support', 'Near us a goods yard became a station and a '
            'park.'),
           ('follow-up', 'The people who gained live about a mile away '
            'and use the station.'),
           ('support', 'The people who lost lived beside the level '
            'crossing for four years of building.'),
           ('follow-up', 'So I would say yes to the scheme and yes to '
            'paying the street that put up with it.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='The route corridor before and after the new line',
         prompt=('The two plans below show a railway corridor before and '
                 'after a new line was built. Summarise the information '
                 'by selecting and reporting the main features. Write at '
                 'least 150 words.'),
         figure=_MAPS,
         model=[
          'The two plans show the same corridor beside Dunmorrow Road '
          'before a new railway line was built and ten years afterwards. '
          'Overall, a working goods yard has been converted into a '
          'passenger railway with a park and two pedestrian crossings, '
          'while the features along the outer edges of the site have been '
          'retained.',
          'The road and the canal, which run along the top and bottom of '
          'both plans, are unchanged, as are the allotments in the south '
          'and the depot at the eastern end of the central strip.',
          'The largest changes are north of the road, where the goods '
          'yard has been replaced by a station and the timber store by an '
          'interchange with the tram, each on its original site. In the '
          'central strip, the sidings have become the running track and '
          'two platforms, and the scrubland beside them is now a small '
          'park.',
          'Finally, the level crossing in the south has been replaced by '
          'an underpass on approximately the same line, and a footbridge '
          'route has been added across the middle of the corridor, where '
          'no crossing previously existed.'],
         notes=[
          'The second paragraph is entirely about what did not change. On '
          'two maps this is the paragraph that makes the rest readable, '
          'and it is the paragraph candidates leave out.',
          'The replacements are reported in pairs with their positions — '
          'goods yard to station, timber store to interchange, each on '
          'its original site — so the reader can follow both plans in the '
          'same order.',
          'The present perfect passive carries the whole answer: has been '
          'replaced, have become, has been added. Two maps separated in '
          'time want that tense, not the past simple.'],
         criterion=[('A paragraph on what did not change',
                     'Task Achievement'),
                    ('Replacements paired with their positions',
                     'Coherence and Cohesion'),
                    ('Present perfect passive throughout',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Spatial description and the perfect passive',
    fix=dict(
     text=('The station stands at the west of the site, beside the main road. '
           'To the east, a cycle route has been built along the river. The '
           'warehouse, which had been used for storage, has demolished in '
           '2019. A footbridge now connects the two halves of the site, where '
           'was closed to the public before 2015.'),
     faults=[('The station stands at the west of the site',
              'The station stands in the west of the site',
              'A region of an area takes in. At is for a point.'),
             ('has demolished in 2019',
              'was demolished in 2019',
              ('Two faults in three words: the passive needs been, and 2019 is '
               'a finished time, so the past simple is right.')),
             ('the site, where was closed to the public',
              'the site, which was closed to the public',
              ('Where cannot be the subject of a verb. The relative pronoun '
               'here is which.'))]),
    explain=('Two plans separated in time take the present perfect '
             'passive, and each change needs a position as well as a '
             'verb.'),
    examples=['The sidings had been replaced by the running track.',
              'A station now stands where the goods yard was.',
              'The depot has been retained in its original position.',
              'A footbridge route has been added across the middle of '
              'the corridor.'],
    task='Rewrite each change with a position and a perfect passive.',
    items=[('They built a station. The goods yard is gone.',
            'A station has been built on the site of the former goods '
            'yard, north of the road.'),
           ('The timber store is now an interchange.',
            'The timber store has been replaced by an interchange with '
            'the tram, in the same position.'),
           ('The scrubland is a park now.',
            'The scrubland in the centre of the corridor has been laid '
            'out as a small park.'),
           ('They kept the depot.',
            'The depot at the eastern end has been retained in its '
            'original position.'),
           ('There is a new footbridge.',
            'A footbridge route has been added east to west across the '
            'middle of the corridor, where no crossing existed '
            'before.')]),
   vocab=[('corridor', 'a strip of land along a route'),
          ('alignment', 'the line a route follows'),
          ('interchange', 'a place where passengers change between '
           'services'),
          ('sidings', 'short tracks where wagons are kept'),
          ('cutting', 'a channel dug through ground for a route'),
          ('underpass', 'a passage beneath a road or railway'),
          ('footbridge', 'a bridge for people on foot'),
          ('level crossing', 'a place where a road crosses a railway on '
           'the flat')],
   expr=[('the sidings had been replaced by',
          'the standard sentence for two maps'),
         ('at the expense of the allotments',
          'reports a loss alongside a gain'),
         ('name the things that stayed first',
          'the method this cycle teaches'),
         ('on more or less the same line',
          'hedges a position accurately')],
   trans=['to the south', 'beyond this', 'meanwhile', 'in the same '
          'position'],
  ),

  dict(
   sub='Why a new road fills up',
   step=3,
   read=[
    dict(heading='The capacity that vanished',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and note completion',
         band='acad', qtype='Questions 41-48',
         paras=[
          'A city widens a congested road from four lanes to six. For '
          'eighteen months the journey is faster. By the fourth year the '
          'journey takes as long as it did before, on a road carrying '
          'half as much traffic again. This has happened often enough, in '
          'enough countries and on enough kinds of road, to be the '
          'expected outcome rather than a disappointing one, and it has a '
          'name: induced demand.',
          'The explanation is not that the engineers miscalculated the '
          'capacity. They calculated it correctly and treated the amount '
          'of traffic as fixed, which is the error. The number of '
          'journeys people make is not a fixed quantity to be '
          'accommodated; it responds to how easy the journeys are, and a '
          'wider road makes them easier.',
          'The response comes from four directions at once, and only the '
          'first is obvious. Some drivers who had been using a slower '
          'back route return to the main road. Some who had been '
          'travelling at half past six move to the hour they would '
          'prefer. Some who had been taking the bus or the train now '
          'drive. And some journeys are made that were not made at all '
          'before, by people for whom the old journey was simply not '
          'worth the trouble.',
          'That fourth group is where most of the argument lies, because '
          'those journeys are a real benefit to the people making them. '
          'Somebody now visits a relative on the other side of the city '
          'twice a month. The road has not failed those people; it has '
          'served them, and a traffic count cannot tell the difference '
          'between a journey restored and a journey newly created.',
          'The timescale is consistent and worth remembering. The '
          'improvement in journey time is real for one to two years, '
          'decays over three to five, and in a growing city disappears '
          'entirely within about a decade. Anybody arguing from the '
          'first eighteen months of evidence is arguing from the part of '
          'the curve that always looks good.',
          'The effect runs in the other direction too, which surprises '
          'people more. Where a road is closed or narrowed, the traffic '
          'that used it does not all reappear elsewhere, and the '
          'surrounding streets absorb less of it than residents expect. '
          'Studies of some seventy closures found that about a quarter of '
          'the journeys simply stopped being made, having been worth '
          'making only while they were easy.',
          'None of this shows that roads should never be widened. It '
          'shows that a road cannot be widened to cure congestion, '
          'because the congestion is what limits the traffic in the first '
          'place. A scheme promising to cure congestion is promising the '
          'one thing it cannot deliver, and a scheme promising more '
          'journeys at the same speed is promising something it can.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['The widened road', 'Treating traffic as fixed', 'Four responses', 'The timescale'],
           1, 'The engineers calculated correctly and assumed wrongly.',
           {0: 'The widened road and its result are paragraph 1.', 2: 'The four responses are paragraph 3.', 3: 'The timescale is paragraph 5, from eighteen months to '
               'a decade.'}),
          ('Choose the best heading for paragraph 4.',
           ['Journeys that were never made before', 'Returning to the main road', 'Road closures', 'What the evidence shows'],
           0, 'The fourth group, and the benefit to them.',
           {1: 'Returning from the back route is the first response, '
               'in paragraph 3.', 2: 'Road closures are paragraph 6, where the effect runs '
               'backwards.', 3: 'What the evidence shows is paragraph 7, the '
               'conclusion.'}),
          ('Choose the best heading for paragraph 6.',
           ['How long the benefit lasts', 'What happens when a road is closed', 'Why widening fails', 'Counting traffic'],
           1, 'Seventy closures and the quarter that vanished.',
           {0: 'How long the benefit lasts is paragraph 5.', 2: 'Why widening fails is paragraphs 2 and 7.', 3: 'Counting traffic is a point inside paragraph 4.'}),
          ('The writer believes roads should never be widened.',
           ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph allows widening where the junction is '
           'the constraint.',
           {0: 'Yes would need never; the final paragraph allows it at '
               'a junction constraint.', 2: 'Not Given is wrong because widening is addressed at '
               'the end.'}),
          (
           'The writer believes the engineers calculated the capacity '
           'wrongly.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 says they calculated it correctly.',
           {0: 'Yes would need an error; paragraph 2 says the '
               'calculation was right.', 2: 'Not Given is wrong because the calculation is '
               'assessed.'}),
          ('The journey-time improvement decays over ____________ to '
           'five years.', None, 'three',
           'Paragraph 5, after one to two years of real benefit.'),
          ('Studies of some ____________ closures were examined.', None,
           'seventy', 'Paragraph 6, where a quarter of journeys '
           'stopped.'),
          ('A road cannot cure congestion because the congestion is what '
           '____________ the traffic.', None, 'limits',
           'The final paragraph, which is why widening cannot cure '
           'it.')])],
   listen=[
    dict(heading='A lecture on induced demand', part='Part 4',
         task='A lecture on traffic and capacity · note completion and multiple choice', band='l4',
         qtype='Questions 49-54',
         script=[
          ('Lecturer', 'Four lanes to six. Eighteen months of faster '
           'journeys. By year four the journey takes what it took before, '
           'on a road carrying fifty per cent more traffic. That is not a '
           'failure of the project. That is the project working exactly as '
           'the evidence says it will.'),
          ('Lecturer', 'The engineers did not get the arithmetic wrong. '
           'They got it right and they treated the traffic as a fixed '
           'quantity that has to be accommodated somewhere. It is not '
           'fixed. The number of journeys responds to how easy the '
           'journeys are, and you have just made them easier.'),
          ('Lecturer', 'Four responses, and they arrive together. One, '
           'drivers come back from the slower back route. Two, drivers '
           'who were leaving at half past six leave at eight, because now '
           'they can. Three, some people stop taking the train. Four, and '
           'this is the interesting one, journeys get made that nobody '
           'made before.'),
          ('Lecturer', 'Hold on to group four, because it is the part the '
           'argument usually misses. Those are real journeys with real '
           'value. Somebody is now visiting their mother twice a month. '
           'Your traffic counter cannot tell that journey apart from a '
           'journey that moved off the back route, and they are not the '
           'same thing at all.'),
          ('Lecturer', 'The timescale is dependable enough to quote. Real '
           'benefit for one to two years. Decaying across three to five. '
           'In a growing city, gone inside a decade. So when somebody '
           'shows you eighteen months of data, they are showing you the '
           'good part of a curve they know the shape of.'),
          ('Lecturer', 'And it works backwards, which nobody expects. '
           'Close a road and the traffic does not all turn up somewhere '
           'else. About seventy closures have been studied properly and '
           'roughly a quarter of the journeys simply stopped. They were '
           'worth making while they were easy and not worth making '
           'otherwise.'),
          ('Lecturer', 'So the conclusion is narrow. Widen roads if you '
           'want more journeys at the same speed, which is a respectable '
           'thing to want. Do not widen a road to cure congestion, '
           'because congestion is the thing that was limiting the traffic '
           'before you started.')],
         items=[
          ('By year four the road carries ____________ per cent more '
           'traffic at the old journey time.', None, 'fifty',
           'After eighteen months of faster journeys.'),
          ('How does he say the engineers treated traffic?', None,
           'as fixed', 'Which is the error rather than the arithmetic.'),
          ('The fourth response is journeys that nobody made',
           ['twice', 'before', 'quickly', 'legally'], 1,
           'Which he calls the interesting one.',
           {0: 'Repetition is not what distinguishes the fourth group.', 2: 'Speed belongs to the second response, about departure '
               'times.', 3: 'Legality is not raised anywhere in the lecture.'}),
          ('A traffic counter cannot tell a new journey apart from one '
           'that moved off the ____________ route.', None, 'back',
           'Although they are not the same thing.'),
          ('How soon is the benefit gone in a growing city?', None,
           'inside a decade',
           'After decaying across three to five years.'),
          ('Of the studied closures, roughly a ____________ of the '
           'journeys simply stopped.', None, 'quarter',
           'Having been worth making only while they were easy.')])],
   speak=dict(
    part='Part 2 into Part 3', focus='Reducing traffic',
    intro=('The long turn first. A minute of notes, then one to two '
           'minutes, and the examiner closes it with a short question or '
           'two. Then the discussion: four or five sentences. Try once to '
           'explain a result that defeats itself.'),
    cue=('Describe a street or a road that is always busy.',
         ['where it is',
          'when it is at its worst',
          'who uses it',
          'and explain what you would do about it']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Has anything been tried there?',
        'Can you avoid it?',
        'How can a city reduce traffic?',
        'Does building more roads help?',
        'Should city centres be closed to cars?',
        'Who loses when driving is made harder?'],
    shape=[('answer', 'Not by building, which is the part people find '
            'hard to accept.'),
           ('support', 'A wider road is faster for about eighteen '
            'months.'),
           ('follow-up', 'Then people who had avoided it come back, and '
            'some journeys get made that nobody made before.'),
           ('support', 'And it works in reverse as well.'),
           ('follow-up', 'When roads are closed about a quarter of the '
            'journeys just stop, because they were only worth making '
            'while they were easy.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Planning: should cities charge drivers to enter the '
                 'centre?',
         prompt=('Should cities charge drivers to enter the centre? '
                 'Brainstorm ten ideas, cross out the ones that answer a '
                 'different question, and write the plan. Twelve '
                 'minutes.'),
         plan=('Cities should charge drivers to enter the centre, because '
               'road space in a centre is scarce and a charge is the only '
               'instrument that both reduces the traffic and raises the '
               'money to improve the alternative',
               [('A charge reduces traffic where building cannot',
                 ['widening a road restores the old journey time within '
                  'about a decade',
                  'a quarter of the journeys on closed roads were never '
                  'made again']),
                ('The revenue answers the strongest objection to it',
                 ['a flat charge falls hardest on those with the lowest '
                  'incomes',
                  'ring-fencing the revenue for buses puts the money back '
                  'where the burden fell'])]),
         notes=[
          'The ten ideas will include several that answer a different '
          'question — whether driving is bad, whether public transport is '
          'good — and crossing those out is the exercise. The question is '
          'about charging.',
          'The second heading is built from the objection rather than '
          'from the case. An essay whose second body paragraph answers '
          'the strongest thing against it is hard to argue with in 250 '
          'words.',
          'Both supports under each heading are facts from this unit. '
          'Planning from material you have just read is the only way '
          'twelve minutes is enough.'],
         criterion=[('Ideas that answer the question actually asked',
                     'Task Response'),
                    ('A body paragraph built from the objection',
                     'Task Response')],
         instruct='  Twelve minutes, timed. You write this essay in cycle '
                  '5.',
         lines=12)],
   gram=dict(
    point='Feedback and self-defeating policy',
    explain=('A result that undoes itself needs a sentence that shows '
             'the loop rather than listing two facts.'),
    examples=['The road filled because it was built, not despite it.',
              'The faster the road, the more journeys are made on it.',
              'Congestion is what limits the traffic in the first '
              'place.',
              'A quarter of the journeys were worth making only while '
              'they were easy.'],
    task='Rewrite each pair of facts as a single sentence showing the '
         'loop.',
    items=[('They widened the road. Traffic increased.',
            'The road filled because it had been widened, not in spite of '
            'it.'),
           ('The road is faster. More people drive on it.',
            'The easier the journey becomes, the more journeys are '
            'made.'),
           ('Congestion returned. The road is still wider.',
            'The congestion returned because the wider road had removed '
            'the thing that was limiting the traffic.'),
           ('They closed a road. Some journeys disappeared.',
            'A quarter of the journeys stopped altogether, having been '
            'worth making only while the road was there.'),
           ('A charge reduces traffic. It also raises money.',
            'A charge reduces the traffic and raises revenue from the '
            'traffic that remains, which is why the two effects are '
            'difficult to separate.')]),
   vocab=[('induced demand', 'new journeys created by making travel '
           'easier'),
          ('latent', 'present but not yet appearing'),
          ('road space', 'the capacity a road provides'),
          ('lane', 'one marked strip of a carriageway'),
          ('bypass', 'a road built around a town'),
          ('ring road', 'a road encircling a city'),
          ('rat run', 'a back route used to avoid a main road'),
          ('freight', 'goods carried by road or rail')],
   expr=[('the road filled because it was built, not despite it',
          'the sentence this cycle is built on'),
         ('a journey restored and a journey newly created',
          'a distinction a traffic count cannot make'),
         ('the part of the curve that always looks good',
          'describes evidence chosen by timing'),
         ('worth making only while they were easy',
          'explains the journeys that vanished')],
   trans=['in turn', 'consequently', 'as a result', 'over time'],
  ),

  dict(
   sub='Whether charging works',
   step=4,
   read=[
    dict(heading='Three cities that charged drivers',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and note completion',
         band='acad', qtype='Questions 55-62',
         paras=[
          'Three cities introduced a charge for driving into the centre '
          'within a decade of one another, and the results are '
          'sufficiently similar to be useful and sufficiently different '
          'to be interesting. In all three, traffic across the charged '
          'boundary fell between fifteen and twenty-two per cent in the '
          'first year and stayed down, which is a larger and more durable '
          'reduction than any of the three had obtained from any other '
          'measure.',
          'The first city charged a flat daily amount on entry during '
          'working hours. Traffic fell by eighteen per cent, bus journey '
          'times improved by about a tenth, and the scheme became '
          'steadily more popular after it began, having been opposed by a '
          'clear majority beforehand. That sequence, opposition before '
          'and acceptance after, has repeated in every city that has '
          'tried it, and it is the single most reliable finding in the '
          'literature.',
          'The second city charged by distance driven inside the boundary '
          'rather than for crossing it. This is harder to administer and '
          'fairer in principle, since a short errand is charged less than '
          'a journey across the whole city, and it produced a slightly '
          'smaller fall in traffic for a noticeably smaller drop in '
          'public support.',
          'The third city charged only at the morning and evening peaks '
          'and nothing in between. Traffic at those hours fell by '
          'twenty-two per cent, the largest fall of the three, and total '
          'traffic fell by eleven, because a substantial number of '
          'journeys moved into the free hours rather than disappearing. '
          'Whether that counts as a success depends on whether the aim '
          'was less traffic or a flatter day.',
          'All three schemes face the same objection, and it is a sound '
          'one. A charge is a fixed sum and incomes are not, so the same '
          'four pounds is trivial to one driver and a serious weekly cost '
          'to another. Measured as a share of income, the burden fell '
          'hardest on drivers in the lowest fifth, who are also those '
          'least able to move house or change their hours.',
          'What the three cities did about that varied, and it is the '
          'variable that predicts whether a scheme survives politically '
          'rather than economically. The two cities that committed the '
          'revenue to bus and tram improvements within the charged area '
          'retained public support throughout; the one that paid the '
          'money into general funds saw support fall steadily and the '
          'scheme reduced in scope after six years.',
          'The honest summary is therefore in two parts, and campaigners '
          'on both sides quote whichever part suits them. Charging '
          'reduces traffic reliably, by amounts that road building cannot '
          'achieve at any price, and the opposition to it reverses once '
          'it is in place. It also falls unevenly on the people least '
          'able to bear it, and whether that is acceptable depends '
          'entirely on what is done with the money it raises.'],
         items=[
          (
           'Which paragraph describes the scheme charging by distance?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1, 'Harder to administer and fairer in principle.',
           {0: 'Paragraph 2 describes the flat daily charge on entry.', 2: 'Paragraph 4 explains why total traffic fell least in '
               'one city.', 3: 'Paragraph 5 sets out the objection about income.'}),
          (
           'Which paragraph explains why total traffic fell least in '
           'one city?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           1, 'Journeys moved into the free hours.',
           {0: 'Paragraph 3 describes the scheme charging by distance.', 2: 'Paragraph 5 is about the burden by income, not the '
               'total fall.', 3: 'Paragraph 6 identifies what predicts political '
               'survival.'}),
          (
           'Which paragraph identifies what predicts political '
           'survival?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'],
           2, 'What was done with the revenue.',
           {0: 'Paragraph 4 explains why total traffic fell least in '
               'one city.', 1: 'Paragraph 5 describes the objection the schemes all '
               'face.', 3: 'Paragraph 7 gives the summary in two halves.'}),
          ('The writer believes charging fails to reduce traffic.',
           ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph calls the reduction reliable.',
           {0: 'Yes would need failure; the final paragraph calls the '
               'reduction reliable.', 2: 'Not Given is wrong because charging is evaluated.'}),
          (
           'The writer believes the objection about income is '
           'unfounded.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 5 calls it a sound objection.',
           {0: 'Yes would need dismissal; paragraph 5 calls the '
               'objection sound.', 2: 'Not Given is wrong because the objection is weighed.'}),
          ('In the first city, bus journey times improved by about a '
           '____________.', None, 'tenth',
           'Paragraph 2, alongside an eighteen per cent fall in '
           'traffic.'),
          ('The burden fell hardest on drivers in the lowest '
           '____________.', None, 'fifth',
           'Paragraph 5, measured as a share of income.'),
          ('The city that paid the revenue into ____________ funds saw '
           'support fall.', None, 'general',
           'Paragraph 6, and the scheme was reduced after six '
           'years.')])],
   listen=[
    dict(heading='A councillor and an economist disagree',
         part='Part 4', task='A recorded discussion · note completion and multiple choice', band='l4',
         qtype='Questions 63-68',
         script=[
          ('Chair', 'Councillor Mbeki-Lindqvist opposes the charge. Dr '
           'Fiorentino studies them. Each starts with their own weakest '
           'point.'),
          ('Mbeki-Lindqvist', 'Mine is that I say it will not work, and '
           'it will. The evidence is consistent across every city that '
           'has tried it and I know that. My objection is about who pays '
           'and I should say so instead.'),
          ('Fiorentino', 'And mine is that I quote the traffic reduction '
           'and hurry past the distribution. It is regressive. A flat '
           'four pounds is nothing to me and it is a serious weekly sum '
           'to a cleaner driving in at five in the morning, and I have '
           'given talks that did not mention her.'),
          ('Chair', 'Thank you both. So what, after those two '
           'admissions, is left of the disagreement?'),
          ('Fiorentino', 'What to do about her. I say charge and spend '
           'the money on buses in the charged area. He says do not charge '
           'at all.'),
          ('Mbeki-Lindqvist', 'Because the buses arrive in year three and '
           'the charge arrives in week one, and she pays for two '
           'years.'),
          ('Fiorentino', 'That is the best argument against me and it is '
           'a sequencing argument, not an argument against charging.'),
          ('Mbeki-Lindqvist', 'It is a sequencing argument that nobody '
           'ever fixes, and an argument that nobody fixes is an argument '
           'about the real world rather than about theory.'),
          ('Fiorentino', 'One city did. Buses first, free for a year, '
           'then the charge. Support never fell below sixty per cent, and '
           'nobody copies it because it costs money before it raises '
           'any.'),
          ('Mbeki-Lindqvist', 'That I did not know, and it is the version '
           'I would vote for.'),
          ('Fiorentino', 'Then we agree on more than the chair hoped. May '
           'I state the thing I want the audience to leave with? It '
           'works, and it works unevenly, and both halves are true. '
           'Anybody quoting one half at you has told you which side they '
           'are on and nothing else.')],
         items=[
          ('The councillor admits his real objection is about who '
           '____________.', None, 'pays',
           'Rather than whether the charge works.'),
          (
           'The economist admits she has given talks that did not '
           'mention the',
           ['council', 'cleaner', 'commuter', 'company'], 1,
           'Who pays a serious weekly sum.',
           {0: 'The council is who she is addressing, not who she '
               'omits.', 2: 'Commuters in general are not the group she names.', 3: 'No company is mentioned by either speaker.'}),
          ('The councillor says the buses arrive in year ____________ '
           'while the charge arrives in week one.', None, 'three',
           'So the lowest-paid driver pays for two years.'),
          ('The economist calls that a ____________ argument rather than '
           'an argument against charging.', None, 'sequencing',
           'And the best argument against her.'),
          ('In the one city that reversed the order, support never fell '
           'below ____________ per cent.', None, 'sixty',
           'Buses first, free for a year, then the charge.'),
          ('Nobody copies that approach because it costs money before it '
           '____________ any.', None, 'raises',
           'Although it kept support high.')])],
   speak=dict(
    part='Part 3', focus='Paying for road space',
    sounds=[('English is stress-timed: the gaps between strong syllables are '
             'roughly equal, however many quiet syllables are squeezed between '
             'them. That is why BUS and the BUS and the BUSes take about the '
             'same time.'),
            ('If your first language gives every syllable equal weight, this '
             'is the single biggest change you can make, and it has nothing to '
             'do with speed.'),
            ('Beat four times on the table, slowly. Fit these into the beats: '
             'BUSes are LATE, the BUSes are often LATE, the BUSes in my CIty '
             'are nearly always LATE. One beat a strong syllable.'),
            ('Practise the transport phrases of this unit the same way: a '
             'CHARGE for the CENtre, conGEStion in the MORning. Keep the beats '
             'steady and crush everything else.'),
            ('Record ninety seconds on your daily journey, then clap along to '
             'your own recording. Where you cannot find the beat is where the '
             'rhythm went flat.')],
    intro=('Five sentences. Try once to hold two true things together.'),
    qs=['Should drivers pay to enter city centres?',
        'Is such a charge fair to people on low incomes?',
        'What should the money be spent on?',
        'Would you support one where you live?'],
    shape=[('answer', 'Yes, and only if the money goes back into buses '
            'in the same area.'),
           ('support', 'The traffic reduction is about a fifth and it '
            'lasts, which building cannot achieve.'),
           ('follow-up', 'But a flat charge is a trivial sum to me and a '
            'weekly problem to somebody earning much less.'),
           ('support', 'The cities that kept public support were the '
            'ones that spent the revenue locally.'),
           ('follow-up', 'So it works, and it works unevenly, and '
            'anybody telling you only one of those has told you which '
            'side they are on.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Charging drivers to enter the city centre',
         prompt=('Some cities charge drivers to enter the centre. '
                 'Discuss the advantages and disadvantages and give your '
                 'own opinion. Write at least 250 words.'),
         model=[
          'Charging drivers to enter a city centre reduces traffic '
          'reliably and distributes the cost unevenly. Both halves of '
          'that sentence are well evidenced, and my own view is that the '
          'second is a reason to design the scheme carefully rather than '
          'a reason to reject it.',
          'The advantages are measured rather than predicted. In the '
          'three cities that have been studied most closely, traffic '
          'across the charged boundary fell by between fifteen and '
          'twenty-two per cent in the first year and stayed down, and bus '
          'journey times improved by about a tenth. No programme of road '
          'building achieves a reduction of that size at any price, '
          'because a wider road is filled by the journeys its own '
          'easiness creates.',
          'The disadvantage is that a charge is a fixed sum and incomes '
          'are not. The same four pounds is trivial to a well-paid '
          'commuter and a serious weekly cost to a cleaner starting at '
          'five in the morning, and measured as a share of income the '
          'burden falls hardest on the lowest fifth of drivers, who are '
          'also least able to move house or change their hours.',
          'There is also a problem of sequence that opponents are right '
          'to raise. The charge begins in week one and the better buses '
          'arrive in year three, so the people least able to afford it '
          'pay for two years before receiving anything. One city reversed '
          'the order, improving the buses first, and public support never '
          'fell below sixty per cent.',
          'In conclusion, I support charging, on the condition that the '
          'revenue is committed to transport within the charged area and '
          'that the improvements come first. The cities that did this '
          'kept their schemes; the city that paid the money into general '
          'funds did not.'],
         notes=[
          'The thesis is two clauses, both conceded, with the position in '
          'the second half. On a discuss-both-views question, holding two '
          'true things together is worth more than choosing one and '
          'defending it.',
          'The sequencing paragraph is the essay’s best material and it '
          'comes from the listening rather than the reading. Bringing one '
          'point the other side is right about raises a Task 2 answer '
          'more than a fourth advantage would.',
          'The conclusion states a condition rather than a preference, '
          'and supports it with what happened in the cities that did and '
          'did not meet it.'],
         model65=[
                  'Some cities charge drivers to enter the centre. I '
                  'will look at the advantages and disadvantages '
                  'before giving my view.',
                  'The advantages are measurable. Where charges have '
                  'been introduced, traffic has fallen reliably, '
                  'journeys have become faster and air quality has '
                  'improved. The money raised can be spent on buses '
                  'and cycling, which gives people an alternative to '
                  'driving.',
                  'The disadvantages are also real. A flat charge '
                  'takes a larger share of a low income than a high '
                  'one, and some people cannot easily change how they '
                  'travel, such as shift workers who finish when buses '
                  'have stopped. Businesses in the centre often fear '
                  'losing customers.',
                  'I think charging is justified, but only if two '
                  'conditions are met. Public transport must be good '
                  'enough to use before the charge begins, not '
                  'afterwards, and the money should be spent visibly '
                  'on alternatives in the same city. Without these, '
                  'the charge is simply a tax on people who have no '
                  'other way of travelling.',
                  ],
         gap65=[
                'It explains why building more road space does not '
                'solve the problem, which is what makes charging the '
                'serious option.',
                'It treats the income objection as sound and answers '
                'it with a mechanism rather than dismissing it.',
                'It states the order of operations - transport first, '
                'then the charge - as the condition the evidence '
                'supports.',
                ],
         criterion=[('A thesis holding two true things together',
                     'Task Response'),
                    ('One point the other side is right about',
                     'Task Response'),
                    ('A conclusion that states a condition',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'plan.',
         lines=18)],
   gram=dict(
    point='Distributional argument: falls hardest on',
    explain=('An argument about who bears a cost needs the measure named '
             'as well as the group.'),
    examples=['Measured as a share of income, the burden falls hardest '
              'on the lowest fifth.',
              'It works, and it works unevenly, and both are true.',
              'The same four pounds is trivial to one driver and serious '
              'to another.',
              'The revenue was committed to buses within the charged '
              'area.'],
    task='Rewrite each claim so that the measure is named.',
    items=[('The charge is unfair.',
            'Measured as a share of income, the charge falls hardest on '
            'drivers in the lowest fifth.'),
           ('Rich people do not care about it.',
            'The same flat sum represents a negligible cost to a high '
            'earner and a significant weekly cost to a low one.'),
           ('It works.',
            'Traffic across the charged boundary fell by between fifteen '
            'and twenty-two per cent and remained down.'),
           ('The money should help the people who pay.',
            'The revenue should be committed to bus and tram improvements '
            'within the charged area itself.'),
           ('The timing is wrong.',
            'The charge begins immediately while the improvements arrive '
            'in the third year, so the burden precedes the benefit by two '
            'years.')]),
   vocab=[('congestion charge', 'a payment for driving into a busy '
           'area'),
          ('cordon', 'the boundary at which a charge applies'),
          ('equity', 'fairness in how a burden is shared'),
          ('revenue', 'money raised by a charge'),
          ('fell hardest on', 'affected one group more than others'),
          ('net income', 'what is left after tax and necessities'),
          ('exemption list', 'the groups that do not have to pay'),
          ('park and ride', 'a car park served by buses into the '
           'centre')],
   expr=[('it works, and it works unevenly, and both are true',
          'the sentence this cycle is built on'),
         ('measured as a share of income',
          'names the measure behind a fairness claim'),
         ('the burden precedes the benefit by two years',
          'the sequencing objection in one line'),
         ('committed to transport within the charged area',
          'the condition that keeps a scheme alive')],
   trans=['admittedly', 'and yet', 'on balance', 'on condition that'],
  ),
 ],
 technique=dict(
  title='Maps again: parallel order across the two plans',
  body=('Two maps of the same place are the hardest Task 1 for most '
        'candidates, and almost all of the difficulty comes from one '
        'habit. The candidate describes the first map completely and '
        'then describes the second map completely, and the reader has to '
        'hold eleven things in mind to see what changed. Do the '
        'opposite. First, find the two or three features that appear in '
        'both maps unchanged — a road, a river, a railway, a boundary — '
        'and say in one sentence that they are unchanged. Those are your '
        'anchors, and they are also what makes everything else '
        'describable: north of the road, in the middle strip, south of '
        'the track. Second, go through the site once in a fixed '
        'geographical order, and for each location report both maps '
        'together: what was there and what is there now. The sentence '
        'you want is a replacement sentence — the sidings have been '
        'replaced by the platforms, the goods yard is now a station — '
        'which carries both maps in one clause. Third, at the end, name '
        'anything entirely new that was not a replacement for anything, '
        'because that is where the marks are and it is usually one '
        'feature.'),
  panel=[('Name the unchanged features first',
          'The road and the canal. One sentence. They are your '
          'anchors.'),
         ('One pass, in geographical order',
          'North, middle, south. Not map one, then map two.'),
         ('Replacement sentences',
          '"X has been replaced by Y" carries both maps in one '
          'clause.'),
         ('New things last',
          'The feature that replaced nothing is where the marks are.')],
  task='Describe the cycle 3 plans in 150 words: anchors first, one '
       'geographical pass, replacement sentences, new features last.',
  qs=['Did you name the unchanged features in your first two '
      'sentences?',
      'Did you make one pass in geographical order?',
      'Is every change written as a replacement?',
      'Did you leave the entirely new feature until the end?',
      'Could a reader who has not seen the maps follow you?']),
 outlining=dict(
  title='Passage to outline, then the one-minute spoken version',
  body=('This is the same reverse-engineering exercise as earlier units '
        'with one addition that makes it much harder and much more '
        'useful. Take the cycle 5 passage and write the outline behind '
        'it: the position, the body headings, the supports. Then put the '
        'passage away and say the outline aloud in one minute, as though '
        'answering a Part 3 question. You will find that the written '
        'outline contains things you cannot say in a minute, and that '
        'the speaking forces a decision the writing let you avoid: which '
        'single support actually matters. That decision is the whole of '
        'planning. A plan is not a list of everything true about the '
        'topic; it is a choice of the two or three things you will '
        'defend, and saying it aloud is the fastest way to find out '
        'whether you have made that choice or merely postponed it.'),
  frame=('Charging drivers to enter a city centre reduces traffic '
         'reliably and distributes the cost unevenly, and the second is '
         'a reason to design the scheme carefully rather than to reject '
         'it',
         [('The reduction is measured rather than predicted',
           ['traffic across the boundary fell fifteen to twenty-two per '
            'cent and stayed down',
            'no road-building programme achieves a reduction of that '
            'size']),
          ('The burden falls unevenly and the revenue can answer that',
           ['a flat charge is a larger share of a low income',
            'the cities that spent the revenue locally kept their '
            'schemes'])]),
  task='Write the outline behind the cycle 5 passage, then say it aloud '
       'in one minute and note what you had to drop.',
  qs=['What is the position, in one sentence?',
      'What are the two body headings?',
      'Which support did you drop when you spoke it?',
      'Was the dropped support the weakest one?',
      'Could you now write the essay from the spoken version alone?'],
  answers=['usually the first or last sentence of the opening paragraph',
           'the two things the passage is prepared to defend',
           'almost always the third, which is why there were three',
           'not always; sometimes you drop the one hardest to say',
           'yes, and that is the test of a plan']),
 candos=['I can read a comparison of four options by column',
         'I can write a formal appeal that concedes the fact against '
         'me',
         'I can describe two maps of the same place in parallel order',
         'I can explain why a wider road fills up again',
         'I can hold two true things together in one argument'],
 tip=('On two maps, your first sentence after the Overall statement '
      'should name what did not change. Everything else is then '
      'describable by position, and a replacement sentence carries both '
      'maps at once.'),
)
