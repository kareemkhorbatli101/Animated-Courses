# -*- coding: utf-8 -*-
"""Unit 49 - Cities and Public Space. IELTS Volume 5, band 7.0."""

_THEN = ('Market Square, 1965',
 [(0.06, 0.05, 0.40, 0.15, 'Corn Exchange', 'building'),
  (0.52, 0.05, 0.42, 0.15, 'Bus station', 'building'),
  (0.06, 0.34, 0.26, 0.18, 'Open market stalls', 'green'),
  (0.36, 0.34, 0.26, 0.18, 'Car park', 'green'),
  (0.66, 0.34, 0.28, 0.18, 'Public toilets', 'building'),
  (0.06, 0.58, 0.40, 0.18, 'Ornamental fountain', 'water'),
  (0.52, 0.58, 0.42, 0.18, 'Grass and lime trees', 'green')],
 [(0.0, 0.90, 1.0, 0.90, 'Fenwick Street'),
  (0.0, 0.29, 1.0, 0.29, 'Two-way traffic')])

_NOW = ('Market Square today',
 [(0.06, 0.05, 0.40, 0.15, 'Corn Exchange: cafes', 'building'),
  (0.52, 0.05, 0.42, 0.15, 'Library', 'new'),
  (0.06, 0.34, 0.26, 0.18, 'Covered market hall', 'new'),
  (0.36, 0.34, 0.26, 0.18, 'Paved event space', 'new'),
  (0.66, 0.34, 0.28, 0.18, 'Kiosk and seating', 'new'),
  (0.06, 0.58, 0.40, 0.18, 'Water feature', 'water'),
  (0.52, 0.58, 0.42, 0.18, 'Grass and lime trees', 'green')],
 [(0.0, 0.90, 1.0, 0.90, 'Fenwick Street'),
  (0.0, 0.29, 1.0, 0.29, 'Pedestrian only')])

_KEY = [('Existing building', 'building'), ('New or rebuilt', 'new'),
        ('Water', 'water'), ('Open ground', 'green')]

_MAPS = dict(kind='map', title='Market Square in 1965 and today',
             sub='two plans of the same ground', panels=[_THEN, _NOW],
             key=_KEY)

UNIT = dict(
 n=49, vol=5, level='B2+/C1', band='7.0',
 theme='Cities and Public Space',
 opener=(
   'Two plans of one square, forty years apart, and the Task 1 lesson this '
   'volume has been working towards: a pair of maps should be organised by '
   'what kind of change happened, not by which map it happened on, and the '
   'things that did not change belong in the answer too. The argument that '
   'follows is about who a square is for, which turns out to be a question '
   'about which uses a rule quietly excludes.'),

 cycles=[
  dict(
   sub='Using a public space',
   step=1,
   read=[
    dict(heading='Hiring a public square — conditions',
         kind='Council guidance',
         task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('Hire conditions are read for what the hirer is liable for',
                ['A hire agreement allocates risk. Somebody is responsible '
                 'for damage, for noise, for the state of the ground '
                 'afterwards, and for anybody who is hurt.',
                 'Find those sentences first. They are where the money is, '
                 'and they are where the questions are, because they are the '
                 'part applicants skip.']),
         paras=[
          'Market Square may be hired for events on any day except the first '
          'Saturday of the month, when the charter market occupies the '
          'square under a right that predates the council and cannot be set '
          'aside. Applications must be received at least twenty-eight days '
          'before the event, and no application is considered within that '
          'period whatever the circumstances.',
          'The hire fee depends on the area taken and the day of the week. '
          'A refundable deposit of £500 is held against reinstatement and '
          'is returned within ten working days if the square comes back as '
          'it was taken. Making good is charged at cost and deducted '
          'first.',
          'Public liability insurance of £5 million is required and the '
          'certificate must be produced before the hire is confirmed, not '
          'on the day. The council is not insured for your event and will '
          'not become so.',
          'Amplified sound is permitted between 10am and 8pm on weekdays and '
          'until 9pm on Saturdays, subject to a limit of 65 decibels '
          'measured at the facade of the residential block on the north '
          'side. The limit is measured there and not at your speakers, which '
          'is the condition most often breached by people who believe they '
          'are complying.',
          'Where attendance will exceed four hundred, a steward plan is '
          'required naming one steward for every hundred attending, and the '
          'two routes across the square must be kept clear throughout. '
          'These are rights of way and are not in the council’s gift to '
          'suspend.',
          'Trading requires a separate street trading consent, issued by a '
          'different department and taking six weeks. Charity collection is '
          'not trading. Selling food is, including at cost, and including '
          'giving it away where a donation is suggested.'],
         items=[
          ('The square is unavailable on the first ____________ of each '
           'month.', None, 'Saturday',
           'Paragraph 1: the charter market holds a right that predates the '
           'council.'),
          ('Applications must arrive at least how long before the event?',
           ['fourteen days', 'twenty-one days', 'twenty-eight days',
            'six weeks'], 2,
           'Paragraph 1, with no discretion in that period.'),
          ('The refundable deposit is held against ____________.', None,
           'reinstatement',
           'Paragraph 2, returned within ten working days if nothing needs '
           'making good.'),
          ('The insurance certificate must be produced',
           ['on the day', 'before the hire is confirmed', 'within a week '
            'after', 'only if asked'], 1,
           'Paragraph 3: the council is not insured for your event.'),
          ('The decibel limit is measured at the ____________ of the '
           'residential block.', None, 'facade',
           'Paragraph 4, and not at the speakers, which is the usual '
           'breach.'),
          ('Selling food at cost requires a street trading ____________.',
           None, 'consent',
           'Paragraph 6: charity collection is not trading, but selling '
           'food is.')]),
    dict(heading='Applying for an event licence',
         kind='Procedure notice', task='Flow-chart completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Check availability online before anything else. The calendar '
          'shows provisional bookings as well as confirmed ones, and a '
          'provisional booking becomes confirmed on payment, so an apparent '
          'gap can close while you are preparing an application.',
          'Submit the form with a site plan drawn to scale showing the area '
          'you are taking, the position of any structure, and the two routes '
          'that must stay clear. A sketch without dimensions is returned, '
          'and the return does not stop the twenty-eight day clock running '
          'against you.',
          'Pay the fee and the deposit together. The hire is provisional '
          'until the insurance certificate is received, and the insurance is '
          'the step applicants leave until last and the step most likely to '
          'fail, because brokers take a fortnight over a certificate they '
          'describe as immediate.',
          'A pre-event inspection is held with an officer two working days '
          'before, at which the steward plan and the sound equipment are '
          'checked. A post-event inspection follows within one working day, '
          'and the deposit is released from that inspection rather than '
          'from the end of the event.',
          'Cancellation more than fourteen days before the event returns '
          'the fee in full. Inside fourteen days the fee is retained and '
          'the deposit returned. Weather is not a ground for refund, and '
          'the square is not closed for weather except where a structure '
          'has been erected.'],
         items=[
          ('A provisional booking becomes confirmed on ____________.',
           None, 'payment',
           'Paragraph 1, so an apparent gap can close while you apply.'),
          ('The site plan must be drawn to ____________.', None, 'scale',
           'Paragraph 2: a sketch without dimensions is returned.'),
          ('The hire stays provisional until the ____________ certificate '
           'arrives.', None, 'insurance',
           'Paragraph 3, which is the step most likely to fail.'),
          ('The deposit is released from the ____________ inspection.',
           None, 'post-event',
           'Paragraph 4, held within one working day of the event.')])],
   listen=[
    dict(heading='Applying for an event licence', part='Part 1',
         task='A call to a council events office', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Officer', 'Events office, Perpetua speaking.'),
          ('Caller', 'Hello. I want to hire Market Square for a community '
           'food festival.'),
          ('Officer', 'What date were you thinking of?'),
          ('Caller', 'Saturday the sixth of June.'),
          ('Officer', 'That is the first Saturday of the month, so the '
           'charter market has it. I cannot move that one — the right is '
           'older than the council.'),
          ('Caller', 'Then the thirteenth.'),
          ('Officer', 'The thirteenth is showing provisional. Provisional '
           'means somebody has applied and not paid, so it can still go '
           'either way. I would prepare for the twentieth as well.'),
          ('Caller', 'Fine. How many people are we allowed?'),
          ('Officer', 'How many are you expecting?'),
          ('Caller', 'About six hundred across the day.'),
          ('Officer', 'Then you need a steward plan, one steward for every '
           'hundred, so six. And the two crossing routes stay clear all '
           'day.'),
          ('Caller', 'Six stewards. And the fee?'),
          ('Officer', 'The fee depends on the area and the day. The deposit '
           'is fixed at five hundred pounds and you get it back after the '
           'inspection if the ground is as you found it.'),
          ('Caller', 'There is an inspection?'),
          ('Officer', 'Two. One two working days before, one within a '
           'working day after. The deposit is released from the second.'),
          ('Caller', 'Anything else?'),
          ('Officer', 'Insurance. Five million public liability, certificate '
           'before I confirm anything, not on the day.'),
          ('Caller', 'My broker said it is immediate.'),
          ('Officer', 'They all say that. Allow a fortnight. It is the step '
           'that sinks most applications.'),
          ('Caller', 'Noted. And we are selling food, but at cost.'),
          ('Officer', 'Then you need street trading consent, which is a '
           'different department and six weeks. At cost still counts, and so '
           'does free with a suggested donation.'),
          ('Caller', 'Six weeks. That is tighter than the hire itself.'),
          ('Officer', 'It is, and it is why I ask about food in the first '
           'minute. Start that one today.')],
         items=[
          ('The square is unavailable on 6 June because of the '
           '____________ market.', None, 'charter',
           'A right the officer says is older than the council.'),
          ('13 June is showing as ____________.', None, 'provisional',
           'Meaning somebody has applied without paying.'),
          ('Number of stewards required: ____________', None, 'six',
           'One for every hundred of the six hundred expected.'),
          ('Deposit: £____________', None, '500',
           'Returned after the second inspection.'),
          ('Insurance required: £____________ million public liability',
           None, '5',
           'With the certificate needed before confirmation.'),
          ('Selling food at cost needs street trading ____________.',
           None, 'consent',
           'From a different department, taking six weeks.')])],
   speak=dict(
    part='Part 1', focus='Public places you use',
    intro=('Two or three sentences each. Name the actual place rather than '
           'describing places in general.'),
    qs=['Are there many public squares or parks where you live?',
        'Do you spend time in them?',
        'What do people do there?',
        'Have any of them changed recently?'],
    shape=[('answer', 'One square and two small parks within walking '
            'distance.'),
           ('support', 'I use the square because the bus stops there and I '
            'am early for everything.'),
           ('follow-up', 'They took the benches out last year and I now '
            'wait standing up, which is a change somebody decided on.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Objecting to the closure of a public space',
         prompt=('A public space near your home is going to be closed. '
                 'Write a letter to the council. In your letter: explain how '
                 'the space is used; say why the closure would be a loss; '
                 'suggest an alternative. Write at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing to object to application 24/0417, the proposed '
          'closure of Darnley Green for the construction of a depot.',
          'The application describes the green as little used. I have '
          'counted it, because the claim seemed wrong to me. Between 7.30 '
          'and 9am on weekdays it carries about ninety people walking to the '
          'station, who use the diagonal path rather than the pavement '
          'because it is three minutes shorter. Between 3.30 and 5pm it is '
          'used by pupils from Harlow Road School, and on Sundays by an '
          'informal football game that has been running since before I moved '
          'here in 2011. None of this appears in the application, which '
          'surveyed the site once, on a Tuesday in February, at 11am.',
          'The loss would fall unevenly. The pedestrian route would be '
          'replaced by a walk along Carmody Road, which has no pavement on '
          'the eastern side, and the children who use the green after school '
          'have nowhere else within half a mile.',
          'I would suggest an alternative. The depot requires a level site '
          'of about half an acre with vehicle access, and the former coach '
          'yard on Pellworth Street has been vacant for six years, is larger, '
          'and already has a vehicle crossing. I would be glad to be told '
          'why that site was rejected, if it was considered at all.',
          'Yours faithfully,',
          'A. Tendai-Mackinlay'],
         notes=[
          'The second paragraph answers the application’s own claim with '
          'counts and times. An objection that says a space is valued is '
          'weighed against the officer’s report; an objection that says '
          'ninety people an hour use the diagonal path replaces it.',
          'Naming when the council’s own survey was done — one Tuesday in '
          'February at 11am — does more damage than any adjective. Attack '
          'the evidence rather than the conclusion.',
          'The alternative is specific and ends with a question the council '
          'has to answer in writing. An objection that proposes a site '
          'obliges a reply about that site.'],
         criterion=[('Answering the application’s claim with counts',
                     'Task Achievement'),
                    ('Naming when the official survey was taken',
                     'Task Response'),
                    ('An alternative specific enough to require a reply',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Objection with reference to use and alternatives',
    explain=('An objection is weighed, not counted. These patterns put a '
             'use on the record and oblige an answer, which is what '
             'weighing means in practice.'),
    examples=['The square is in daily use by about ninety commuters, which '
              'the application does not record.',
              'The survey was carried out once, on a Tuesday in February, '
              'at 11am.',
              'I would be glad to be told why that site was rejected.',
              'The loss would fall on those with no alternative within half '
              'a mile.'],
    task='Rewrite each objection so that it puts a use on the record.',
    items=[('People like the green.',
            'The green carries about ninety pedestrians an hour between 7.30 '
            'and 9am on weekdays.'),
           ('The survey was useless.',
            'The survey records a single visit, at 11am on a Tuesday in '
            'February.'),
           ('There must be somewhere else.',
            'The former coach yard on Pellworth Street is larger, level, '
            'vacant since 2019 and already has vehicle access.'),
           ('Children need this space.',
            'Pupils from Harlow Road School use the green between 3.30 and '
            '5pm and have no alternative within half a mile.'),
           ('This will cause problems for walkers.',
            'The diagonal route would be replaced by Carmody Road, which has '
            'no pavement on its eastern side.')]),
   vocab=[('byelaw', 'a local rule made by a council'),
          ('reinstatement', 'putting ground back as it was'),
          ('indemnity', 'a promise to cover another party’s loss'),
          ('steward', 'somebody managing a crowd at an event'),
          ('licensee', 'the person a licence is granted to'),
          ('revocable', 'able to be withdrawn'),
          ('noise condition', 'a limit on sound attached to a permission'),
          ('ancillary', 'secondary to the main activity')],
   expr=[('The square is in daily use by..., which the application does not '
          'record', 'the standard objection sentence'),
         ('the limit is measured there and not at your speakers',
          'locates a measurement precisely'),
         ('these are rights of way and are not in the council’s gift to '
          'suspend', 'states what a body cannot do'),
         ('at cost still counts, and so does free with a suggested '
          'donation', 'closes an obvious loophole')],
   trans=['furthermore', 'in this connection', 'accordingly',
          'for the avoidance of doubt'],
  ),

  dict(
   sub='Who a space is for',
   step=2,
   read=[
    dict(heading='Four users of one square',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Clementine, who runs the kiosk: I pay four thousand a year for '
          'this pitch and I want people sitting down for twenty minutes, '
          'because a person sitting down buys a second coffee. The benches '
          'they installed are angled and have a central arm. Nobody stays on '
          'one for twenty minutes. I was consulted and I said this, and the '
          'design had already been bought.',
          'B  Everard, who manages the square: My postbag is noise, '
          'drinking, and young men on bicycles, in that order, and it comes '
          'from the flats on the north side who were there before the square '
          'was refurbished. Every rule I make to answer that postbag '
          'excludes somebody who was doing nothing wrong. I know that. I am '
          'not pretending the trade-off is not there.',
          'C  Marguerite, aged seventy-nine: I come at eleven and I need a '
          'bench with a back and arms, and within sight of a toilet, and '
          'that is the whole of my requirement. The new seating has no backs. '
          'I now walk to the library and sit there, which is indoors and '
          'warm and not what I wanted.',
          'D  Obadiah, aged sixteen: We are the problem the benches were '
          'designed against and everybody is too polite to say so. There is '
          'nowhere else. The skate park closed, the youth centre closed, and '
          'the square has a roof over part of it, which is why we are here '
          'when it rains and why they would rather we were not.'],
         items=[
          ('Which person wants people to stay longer for commercial '
           'reasons?', ['Clementine', 'Everard', 'Marguerite',
            'Obadiah'], 0,
           'A person sitting down buys a second coffee.'),
          ('Which person admits that their own rules exclude innocent '
           'users?', ['Clementine', 'Everard', 'Marguerite',
            'Obadiah'], 1,
           'And says he is not pretending the trade-off is absent.'),
          ('Which person has stopped using the square because of the '
           'seating?', ['Clementine', 'Everard', 'Marguerite',
            'Obadiah'], 2,
           'She now sits in the library instead.'),
          ('Which person says the design was aimed at people like them?',
           ['Clementine', 'Everard', 'Marguerite', 'Obadiah'], 3,
           'And that the alternatives have closed.'),
          (
           'Clementine was consulted about the benches before they '
           'were chosen.', ['Yes', 'No', 'Not Given'], 1,
           'She was consulted after the design had been bought.',
           {0: 'Yes would need consultation first; she was asked after '
               'the purchase.', 2: 'Not Given is wrong because the order of events is '
               'given.'}),
          (
           'Everard believes the complaints he receives are '
           'unreasonable.', ['Yes', 'No', 'Not Given'], 2,
           'He lists them and describes the trade-off without judging '
           'them.',
           {0: 'Yes would need a judgement; he lists them without '
               'judging.', 1: 'No would need him to call them reasonable, which he '
               'does not.'})])],
   listen=[
    dict(heading='Two designers disagree about benches', part='Part 3',
         task='A discussion between two designers', band='l3',
         qtype='Questions 23-28',
         script=[
          ('Ignatius', 'I am going to defend the arm rails and I would '
           'rather do it honestly than pretend they are for comfort.'),
          ('Thomasina', 'Thank you. The comfort argument is what makes me '
           'angry, not the rails.'),
          ('Ignatius', 'So: the rails prevent lying down. That is their '
           'purpose. The brief we were given said the square had an '
           'overnight sleeping problem and asked us to design it out, and we '
           'did, and the client is a public body answerable to a council.'),
          ('Thomasina', 'And did the sleeping stop or move?'),
          ('Ignatius', 'Moved. To the underpass, which I accept is worse for '
           'everybody including the people sleeping.'),
          ('Thomasina', 'Then the design worked and the policy failed, and '
           'the design is what gets photographed.'),
          ('Ignatius', 'That is fair, and here is the part I did not expect. '
           'Dwell time fell by about forty per cent after installation, '
           'measured the same way before and after, and the kiosk takings '
           'fell with it.'),
          ('Thomasina', 'Because a bench you cannot lie on is also a bench '
           'you cannot comfortably sit on for twenty minutes.'),
          ('Ignatius', 'Yes. We solved for one posture and lost four others. '
           'The person we hurt most was not the person we were designing '
           'against; it was an elderly woman who wanted a back and arms.'),
          ('Thomasina', 'Which is the finding I would put in the report, and '
           'it is stronger than my objection because it is yours.'),
          ('Ignatius', 'And I want to be precise about the measurement, '
           'because it is the only part of this I am proud of. Same '
           'observer, same four hours, same days of the week, twelve weeks '
           'before and twelve weeks after. If I had measured it badly I '
           'could have told myself the drop was seasonal.'),
          ('Thomasina', 'Which is what the last three studies in this area '
           'did, and it is why none of them is quoted.'),
          ('Ignatius', 'Put it in. What would you have done?'),
          ('Thomasina', 'Backs and arms on half the seating, no central '
           'rail, and a staffed presence in the evening instead of a '
           'physical answer to a social problem. It costs more every year '
           'rather than once, which is why it loses.'),
          ('Ignatius', 'That is the real reason, and it is a budget reason '
           'dressed as a design reason. Capital money is available and '
           'revenue money is not, so every social problem gets a concrete '
           'answer.'),
          ('Thomasina', 'Say that in the report too.')],
         items=[
          ('Ignatius defends the arm rails as',
           ['a comfort feature', 'a measure to prevent lying down',
            'a cost saving', 'a legal requirement'], 1,
           'And says he would rather defend them honestly.'),
          ('What happened to the sleeping?',
           ['It stopped', 'It moved to the underpass', 'It increased',
            'It was not measured'], 1,
           'Which he accepts is worse for everybody.'),
          ('Dwell time after installation fell by about',
           ['ten per cent', 'twenty-five per cent', 'forty per cent',
            'sixty per cent'], 2,
           'Measured the same way before and after, with kiosk takings '
           'falling too.'),
          ('Who was most harmed, according to Ignatius?',
           ['people sleeping there', 'an elderly woman wanting a back and '
            'arms', 'the kiosk owner', 'teenagers'], 1,
           'Not the person the design was aimed against.'),
          ('Thomasina would have proposed',
           ['no seating', 'backs and arms on half the seating and evening '
            'staff', 'more rails', 'closing the square at night'], 1,
           'A social answer rather than a physical one.'),
          ('Why does her option lose?',
           ['It is unpopular', 'It needs revenue funding rather than '
            'capital', 'It is unlawful', 'It is untested'], 1,
           'Capital money is available and revenue money is not.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Public space',
    intro=('Short answers, then the long turn. Take the bullets in order '
           'and let the last one carry the weight.'),
    cue=('Describe a public place you like or avoid.',
         ['where it is', 'what it is like',
          'what you do there or why you keep away',
          'and explain what about its design produces that']),
    qs=['Do you prefer indoor or outdoor public places?',
        'Are public places in your area well looked after?',
        'Now look at the card. You have one minute to make notes.',
        'Should cities provide more seating?'],
    shape=[('answer', 'The station forecourt, which I avoid.'),
           ('support', 'It is paved, open, and has eleven seats for a '
            'thousand people an hour.'),
           ('follow-up', 'They are metal, backless, and angled forward by '
            'about ten degrees.'),
           ('support', 'So nobody sits unless they have to, which keeps it '
            'clear.'),
           ('follow-up', 'That is the design working; it is just not working '
            'for anybody waiting with luggage.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Residents or visitors?',
         prompt=('Some people believe city centres should be designed '
                 'primarily for the residents who live there; others believe '
                 'they should be designed for visitors and tourists. Discuss '
                 'both views and give your own opinion. Write at least 250 '
                 'words.'),
         model=[
          'The two groups want the same things for about eighty per cent of '
          'the time and want incompatible things for the rest, and the '
          'argument is almost always conducted about the eighty per cent, '
          'where there is nothing to decide.',
          'The case for designing around visitors is economic and is '
          'stronger than residents usually concede. Visitor spending funds '
          'the maintenance of the streets both groups walk on, and a centre '
          'that nobody travels to loses the shops, theatres and restaurants '
          'that residents also use. Cities that have let their centres decay '
          'have not become pleasant residential districts; they have become '
          'empty.',
          'The case for residents rests on a different kind of claim. A '
          'resident bears the costs that a visitor exports: the noise at '
          'midnight, the rent driven up by short lets, the pharmacy replaced '
          'by a souvenir shop. These costs are continuous and the benefits '
          'are collected elsewhere, which is the classic structure of a '
          'problem that markets handle badly and that nobody has to '
          'intend.',
          'What the honest version of the argument turns on is the small '
          'number of genuinely incompatible uses, and they are identifiable. '
          'Late-night licensing, coach access, short-let housing and the '
          'commercial use of public space are the four that recur in every '
          'city I have read about. Pavement width, lighting, benches, trees '
          'and public toilets serve both groups and should never have been '
          'in the argument at all.',
          'My own view is that the decision should be made use by use rather '
          'than group by group, with residents given priority on the four '
          'contested ones for a reason that is procedural rather than '
          'sentimental: they bear the cost whether or not they win, they are '
          'the only group that can be consulted reliably, and they are the '
          'ones who have to live with a mistake that a visitor can simply '
          'stop visiting.'],
         notes=[
          'The introduction refuses the framing by pointing out that most of '
          'the disputed ground is not disputed. This is structure 6 used '
          'properly: both views, then a choice, with the choice narrowed to '
          'where it matters.',
          'Paragraph 3 names the structure of the problem — costs borne '
          'locally, benefits collected elsewhere — rather than listing '
          'grievances. Naming a structure is worth three examples.',
          'The conclusion gives a procedural reason rather than a moral one. '
          '"They bear the cost whether or not they win" is an argument; '
          '"it is their city" is a feeling.'],
         criterion=[('Narrowing the dispute to where it exists',
                     'Task Response'),
                    ('Naming the structure of the problem',
                     'Task Response'),
                    ('A procedural reason for the final preference',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Concessive-contrastive chains',
    explain=('At band 7 a concession is not one word but a short chain: '
             'grant the point, mark its limit, state yours. These patterns '
             'build the chain without losing the reader.'),
    examples=['A bench you cannot lie on is a decision about who may '
              'stay.',
              'The design worked and the policy failed, and the design is '
              'what gets photographed.',
              'I accept that it moved rather than stopped, which is worse '
              'for everybody.',
              'That is fair as far as it goes, and it does not go as far as '
              'the conclusion.'],
    task='Rewrite each pair as a concessive chain.',
    items=[('The rails stop people sleeping. They also stop people '
            'sitting.',
            'The rails do prevent sleeping, and they prevent sitting for '
            'twenty minutes as well, which was nobody’s intention.'),
           ('Visitors bring money. Residents bear the noise.',
            'Visitor spending does fund the maintenance, although the costs '
            'it generates fall on people who collect none of it.'),
           ('The design was successful. The problem moved elsewhere.',
            'The design achieved its brief, granted; the problem it was '
            'aimed at simply relocated to the underpass.'),
           ('Her proposal is better. It costs more.',
            'Her proposal is the better answer and it needs revenue funding '
            'every year, which is why it loses to a one-off.'),
           ('He was consulted. It made no difference.',
            'He was consulted, in the sense that he was asked after the '
            'design had been bought.')]),
   vocab=[('hostile design', 'design intended to prevent certain uses'),
          ('defensible space', 'layout that discourages unwanted use'),
          ('surveillance', 'watching a place to control behaviour'),
          ('inclusion', 'the aim of leaving nobody out'),
          ('loitering', 'remaining in a place without obvious purpose'),
          ('canopy', 'a roof over part of an open space'),
          ('capital funding', 'money for building something once'),
          ('revenue funding', 'money for running something each year')],
   expr=[('A bench you cannot lie on is a decision about who may stay',
          'reads a design choice as a social one'),
         ('we solved for one posture and lost four others',
          'states an unintended narrowing'),
         ('the design worked and the policy failed',
          'separates two kinds of failure'),
         ('a budget reason dressed as a design reason',
          'names a disguised constraint')],
   trans=['whereas', 'that said', 'as far as it goes', 'on the other hand'],
  ),

  dict(
   sub='A square before and after',
   step=3,
   read=[
    dict(heading='Market Square, 1965 and today',
         kind='Two plans with notes',
         task='Plan labelling and matching information',
         band='gt_work', qtype='Questions 29-34',
         figure=_MAPS,
         paras=[
          'The two plans show Market Square as it was in 1965 and as it is '
          'now. The ground is identical and the boundary has not moved. What '
          'has changed is what stands on it, what may be driven across it, '
          'and how long a person is expected to remain.',
          'Three things were removed outright. The bus station on the '
          'north-east corner closed in 1981 and its interchange function '
          'moved to the ring road. The car park in the centre went in 1994. '
          'The public toilets on the north-west corner were demolished in '
          '2003 and were not replaced, which is the single change most '
          'frequently raised in consultations since.',
          'Three things were added where nothing of that kind stood before. '
          'The library occupies the former bus station footprint. The covered '
          'market hall stands where the open stalls were pitched. A kiosk '
          'with seating was placed in the north-west corner, on the ground '
          'the toilets had occupied.',
          'Two things were converted rather than replaced. The Corn '
          'Exchange, which is the oldest structure on the square, remains a '
          'building of the same footprint and height and is now occupied by '
          'cafes rather than by grain trading. The ornamental fountain was '
          'rebuilt as a flush water feature that can be switched off for '
          'events, which the old fountain could not.',
          'Two things did not change at all, and they belong in any honest '
          'description. The grass and lime trees on the south-east side are '
          'as they were, the same trees, now eighty years old. Fenwick '
          'Street still runs along the southern boundary and still carries '
          'two-way traffic.',
          'One change is of a different kind from all the others because it '
          'concerns use rather than fabric. The square was crossed by '
          'two-way traffic until 1994 and is now pedestrian only. Nothing '
          'was built or demolished to achieve that; a line on a plan became '
          'a different line, and it altered the square more than any of the '
          'buildings did.',
          'Grouping the changes this way — removed, added, converted, '
          'unchanged, and change of use — is the organisation a reader can '
          'follow. Walking through the two plans corner by corner describes '
          'the same facts twice and leaves the reader to do the grouping, '
          'which is the work the description was supposed to do.'],
         items=[
          ('On the current plan, the library occupies the site of the former '
           '____________.', None, 'bus station',
           'Paragraph 3: the interchange function moved to the ring road.'),
          ('The kiosk and seating stand where the ____________ used to '
           'be.', None, 'public toilets',
           'Paragraph 3, demolished in 2003 and not replaced.'),
          ('Which paragraph lists what was removed outright?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 0,
           'The bus station, the car park and the public toilets, with the '
           'toilets never replaced.'),
          ('Which paragraph lists what did not change?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'The lime trees to the south-east and Fenwick Street along the '
           'southern edge.'),
          ('Which paragraph describes a change of use rather than of '
           'fabric?', ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
            'Paragraph 7'], 2,
           'Two-way traffic becoming pedestrian only in 1994.'),
          ('The Corn Exchange is now occupied by ____________.', None,
           'cafes',
           'Paragraph 4: converted rather than replaced, same footprint and '
           'height.')])],
   listen=[
    dict(heading='A designer presents the redesign', part='Part 2',
         task='A presentation to a planning committee', band='l2',
         qtype='Questions 35-40',
         figure=_MAPS,
         script=[
          ('Designer', 'I will take you through the two plans by type of '
           'change rather than corner by corner, because corner by corner is '
           'how committees lose track of what we actually did.'),
          ('Designer', 'Removed, three items. The bus station in the '
           'north-east, closed in 1981. The central car park, 1994. And the '
           'public toilets in the north-west, demolished in 2003 and never '
           'replaced, which is the one I still get letters about.'),
          ('Designer', 'Added, three items, each on ground that held '
           'something else. The library sits on the bus station footprint. '
           'The covered market hall stands where the open stalls were. And a '
           'kiosk with seating went into the north-west, on the toilet '
           'site.'),
          ('Designer', 'Converted, two items. The Corn Exchange keeps its '
           'footprint, its height and its name and now holds cafes instead '
           'of grain. The fountain was rebuilt flush with the paving so it '
           'can be switched off, which the 1965 fountain could not, and that '
           'single detail is what makes the event space possible.'),
          ('Designer', 'And a word on the market hall, since the trade '
           'objection is in your papers. The stalls were open and are now '
           'under a roof on the same ground, so I count that as added '
           'rather than converted, and I accept that is a judgement '
           'somebody could take the other way.'),
          ('Designer', 'Unchanged, and please put this in the minutes, two '
           'items. The lime trees and grass on the south-east are exactly as '
           'they were, same trees, now about eighty years old. Fenwick '
           'Street runs where it ran and still takes two-way traffic.'),
          ('Designer', 'Before the last item, one note on the boundary, '
           'because somebody always asks. The boundary of the square has '
           'not moved by a centimetre since 1965. Everything you are '
           'looking at happened inside the same outline, which is why the '
           'two plans are directly comparable and why I can put them side '
           'by side without a scale note.'),
          ('Designer', 'And one change that is not about fabric at all. '
           'Until 1994 you could drive across this square. You cannot now. '
           'Nothing was built to achieve that and it changed the square more '
           'than the library did.')],
         items=[
          ('The bus station closed in',
           ['1965', '1981', '1994', '2003'], 1,
           'With the interchange function moving to the ring road.'),
          ('What now stands on the former public toilets site?',
           ['the library', 'the market hall', 'a kiosk with seating',
            'the water feature'], 2,
           'In the north-west corner, where the toilets stood until '
           '2003.'),
          ('The Corn Exchange is described as',
           ['removed', 'added', 'converted', 'unchanged'], 2,
           'Same footprint, height and name; cafes instead of grain.'),
          ('Why does the rebuilt fountain matter?',
           ['it is cheaper', 'it can be switched off for events',
            'it is larger', 'it is historic'], 1,
           'Which the 1965 fountain could not be.'),
          ('Which items does he describe as unchanged?',
           ['the Corn Exchange and the fountain',
            'the lime trees and Fenwick Street',
            'the market hall and the kiosk', 'the car park and the '
            'stalls'], 1,
           'And asks for it to go in the minutes.'),
          ('The change he says altered the square most was',
           ['the library', 'the market hall',
            'the removal of traffic in 1994', 'the new paving'], 2,
           'Achieved without building anything.')])],
   speak=dict(
    part='Part 3', focus='Redesigning a public place',
    intro=('Five or six sentences. Try once to name a change that cost '
           'nothing to build.'),
    qs=['How have public places in your city changed?',
        'Are such changes usually improvements?',
        'Who should decide how a square is used?',
        'Is it important to keep old buildings in a square?'],
    shape=[('answer', 'The biggest change where I live was removing the '
            'traffic.'),
           ('support', 'Nothing was built and nothing was demolished.'),
           ('follow-up', 'A line on a plan became a different line.'),
           ('support', 'It changed the square more than the new library '
            'did.'),
           ('follow-up', 'Which makes me suspicious of judging a project by '
            'what it cost.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Market Square before and after redesign',
         prompt=('The plans below show Market Square in 1965 and today. '
                 'Summarise the information by selecting and reporting the '
                 'main features, and make comparisons where relevant. Write '
                 'at least 150 words.'),
         figure=_MAPS,
         model=[
          'The two plans show Market Square as it was in 1965 and as it is '
          'today. Overall, the square has been converted from a space partly '
          'given over to vehicles into one used entirely by pedestrians, '
          'with three structures removed, three added, two converted and two '
          'features left as they were.',
          'Three features were removed altogether. The bus station in the '
          'north-east, the car park at the centre of the square and the '
          'public toilets in the north-west have all gone, and the toilets '
          'were not replaced.',
          'Three were added on that same ground. A library now occupies the '
          'bus station site, a covered market hall stands where the open '
          'stalls were, and a kiosk with seating has taken the place of the '
          'toilets. Two further features were converted rather than '
          'replaced: the Corn Exchange keeps its footprint but now contains '
          'cafes, and the ornamental fountain has been rebuilt as a flush '
          'water feature.',
          'Two features are unchanged. The grass and lime trees on the '
          'south-east side remain, and Fenwick Street still runs along the '
          'southern edge. The most significant difference, however, is that '
          'the two-way route across the square has been replaced by '
          'pedestrian access only.'],
         notes=[
          'The answer is organised by type of change — removed, added, '
          'converted, unchanged — and never by date or by corner. This is '
          'the structuring choice the unit teaches and the one examiners '
          'reward on paired maps.',
          'The unchanged features get their own sentence. A reader who '
          'cannot tell from your answer what stayed the same has not been '
          'given a description of the ground, only of the works.',
          'The last sentence gives the change of use its own place, because '
          'it is not a structure and is the largest difference between the '
          'two plans. Counting only what was built would miss it.'],
         criterion=[('Organising by type of change, not by date',
                     'Coherence and Cohesion'),
                    ('Reporting what did not change', 'Task Achievement'),
                    ('Giving the change of use its own sentence',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Maps organised by what changed, not when',
    explain=('Paired maps need language that groups. These patterns name a '
             'type of change and attach several features to it, which is '
             'what lets one sentence do the work of four.'),
    examples=['Three features were removed altogether: the bus station, the '
              'car park and the toilets.',
              'A library now occupies the former bus station site.',
              'The Corn Exchange has been converted rather than replaced.',
              'The grass and lime trees remain as they were.'],
    task='Rewrite each description so that it groups by type of change.',
    items=[('The bus station went. The car park went. The toilets went.',
            'Three features were removed altogether: the bus station, the '
            'car park and the public toilets.'),
           ('There is a library now. There is a market hall. There is a '
            'kiosk.',
            'Three structures were added, each on ground previously occupied: '
            'a library, a covered market hall and a kiosk.'),
           ('The Corn Exchange is still there but different inside.',
            'The Corn Exchange has been converted rather than replaced, '
            'retaining its footprint while its use has changed.'),
           ('The trees are the same. The street is the same.',
            'Two features are unchanged: the grass and lime trees to the '
            'south-east, and Fenwick Street along the southern edge.'),
           ('Cars used to drive across it.',
            'The two-way route across the square has been replaced by '
            'pedestrian access only, without anything being built or '
            'demolished.')]),
   vocab=[('desire line', 'the route people take rather than the one '
           'provided'),
          ('sight line', 'an uninterrupted view across a space'),
          ('setback', 'the distance a building stands back from a street'),
          ('bollard', 'a post preventing vehicles entering'),
          ('planter', 'a container of soil used as a barrier or feature'),
          ('kiosk', 'a small structure selling refreshments'),
          ('flush', 'level with the surrounding surface'),
          ('ground area', 'the extent of land a building covers')],
   expr=[('Grouping the changes: what was added, removed and converted',
          'announces the structure of a map answer'),
         ('a line on a plan became a different line',
          'describes a change of use with no fabric'),
         ('converted rather than replaced',
          'distinguishes two kinds of change'),
         ('the same trees, now eighty years old',
          'reports continuity with a detail')],
   trans=['added', 'removed', 'converted', 'unchanged'],
  ),

  dict(
   sub='Why public space is contested',
   step=4,
   read=[
    dict(heading='Three claims on one square',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 41-48',
         paras=[
          'Disputes about public space are ordinarily reported as '
          'confrontations between those who cherish a place and those who '
          'are indifferent to it. They are almost never that. In the '
          'overwhelming majority of documented instances, every party to the '
          'dispute advances a legitimate claim upon identical ground, the '
          'claims are mutually incompatible, and the apparent villain is '
          'merely the party whose claim prevailed. Grasping this alters what '
          'a sound decision looks like, since it eliminates the possibility '
          'of a resolution that costs nobody anything.',
          'The first kind of claim is the claim of passage. A square is a '
          'route, and for most of the people who cross it that is the whole '
          'of its value. Passage wants width, clear lines, no obstruction '
          'and no reason to stop. Its users are numerous, are ordinarily in '
          'a hurry, and almost never attend a consultation, which means '
          'their claim is systematically under-represented in exactly the '
          'proceedings designed to capture it. They are also the group most '
          'likely to be described as not really using the square at all, by '
          'people who mean that they do not stop.',
          'The second is the claim of dwelling: the wish to stay. Dwelling '
          'wants seating with backs and arms, shade, shelter, a lavatory '
          'within sight and something to look at. Its users are '
          'disproportionately old, young, poor or caring for somebody, and '
          'they are the users for whom a public square is not an amenity but '
          'the only available room. Where dwelling is designed out, these '
          'users do not relocate to a better option; there is no better '
          'option, which is what makes them visible.',
          'The third is the claim of trade. A pitch, a terrace, a market '
          'stall, a kiosk: trade wants footfall and it wants that footfall '
          'to slow down. Trade is the only one of the three claims that pays '
          'rent, which gives it a formal relationship with the authority and '
          'a reliable voice in decisions, and it is also the claim most '
          'frequently blamed for outcomes it did not ask for. Traders asked '
          'for seating in the great majority of the consultations examined, '
          'and the seating that arrived was designed against a problem they '
          'had not raised.',
          'The incompatibility is structural rather than a matter of '
          'personality. Seating that serves dwelling obstructs '
          'passage, and width that serves passage removes the '
          'enclosure that trade and dwelling both need. A terrace that '
          'serves trade encloses ground that passage was using. No '
          'arrangement of a finite square satisfies all three, and a '
          'design that claims to has ordinarily measured only one of '
          'them. The square is finite and the claims are not reducible '
          'to one another, which is the whole of the difficulty and '
          'the reason that goodwill does not dissolve it.',
          'What follows is an uncomfortable conclusion about regulation. '
          'Every rule imposed in a public space safeguards one use by '
          'excluding another, and the exclusion is seldom stated because it '
          'is seldom intended. A prohibition on amplified sound safeguards '
          'residents and excludes performers. A prohibition on cycling '
          'safeguards pedestrians and excludes a constituency with nowhere '
          'else to go. The rule is invariably read as neutral by whoever is '
          'not excluded by it.',
          'Three features of the procedure aggravate these trade-offs beyond '
          'necessity. The first is that consultation reaches those who '
          'attend meetings, who are older, more settled and likelier to be '
          'objecting than the population occupying the square at any given '
          'hour. The second is that capital funding is obtainable for '
          'physical interventions and revenue funding is not, so a social '
          'predicament reliably attracts a concrete remedy.',
          'The third is measurement. Dwell time, footfall and passage counts '
          'are measurable, cheap and almost never collected before a '
          'scheme, which means the baseline against which a change could be '
          'judged does not exist. Schemes are therefore evaluated on '
          'appearance and on complaints received, and complaints are made by '
          'the people who were already attending the meetings. The loop '
          'closes on itself: the process hears one group, builds for that '
          'group, and then evaluates the result using complaints from that '
          'same group.',
          'There is one well-evidenced finding that cuts across all of this '
          'and is worth more than any principle. Interventions that remove a '
          'use rather than accommodate it displace it rather than ending it, '
          'and the place it moves to is almost always worse: less overlooked, '
          'less served, less safe. The underpass is the standard destination '
          'in this literature and it recurs in study after study.',
          'The practical consequence is that the question "what should this '
          'square be for?" admits of no answer, whereas the question "which '
          'of these three claims are we granting here, and what provision '
          'are we making for the other two?" admits of several. Identifying '
          'the loser is not a failure of design. It is the sole form of '
          'candour available in a dispute where somebody must lose.',
          'None of this tells a council what to decide, and that is a '
          'feature rather than a gap. It tells them what to measure before '
          'deciding, whom their process is systematically failing to hear, '
          'and what to expect from an intervention that removes rather than '
          'accommodates. A decision made with those three things in view '
          'will still hurt somebody, and it will at least hurt them on '
          'purpose.'],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['The claim of passage', 'The claim of dwelling',
            'The claim of trade', 'Why rules exclude'], 1,
           'Seating, shade, shelter, and users with no alternative.'),
          ('Choose the best heading for paragraph 5.',
           ['The claim of trade', 'Why the claims cannot all be met',
            'Problems with consultation', 'Measurement'], 1,
           'Seating obstructs passage; width removes enclosure.'),
          ('Choose the best heading for paragraph 9.',
           ['Measurement', 'Displacement rather than resolution',
            'The claim of dwelling', 'Naming the loser'], 1,
           'A removed use moves somewhere less overlooked and less safe.'),
          (
           'The writer believes those who cross a square are well '
           'represented in consultations.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 says their claim is systematically '
           'under-represented.',
           {0: 'Yes would need representation; paragraph 2 says they '
               'are systematically absent.', 2: 'Not Given is wrong because their representation is '
               'assessed.'}),
          (
           'The writer believes trade is usually to blame for poor '
           'outcomes.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 4 says it is blamed for outcomes it did not ask '
           'for.',
           {0: 'Yes would need blame; paragraph 4 says trade is blamed '
               'for what it did not ask for.', 2: 'Not Given is wrong because the writer allocates '
               'responsibility.'}),
          ('The claim of ____________ is the only one that pays rent.',
           None, 'trade',
           'Paragraph 4, which gives it a reliable voice in decisions.'),
          ('A rule is read as ____________ by whoever is not excluded by '
           'it.', None, 'neutral',
           'Paragraph 6, where the exclusion is rarely intended.'),
          ('The standard destination for a displaced use, in this '
           'literature, is the ____________.', None, 'underpass',
           'Paragraph 9: less overlooked, less served and less safe.')])],
   listen=[
    dict(heading='A lecture on the public realm', part='Part 4',
         task='A lecture on contested public space', band='l4',
         qtype='Questions 49-54',
         script=[
          ('Lecturer', 'I want to retire a sentence today, and the sentence '
           'is "this square should be for people". Everybody in every one of '
           'these disputes is a person, every one of them has a legitimate '
           'claim, and the claims do not fit. That is the whole subject, and '
           'the rest of the hour is the structure of it.'),
          ('Lecturer', 'Three claims. Passage: get me across, give me width '
           'and a clear line and no reason to stop. Numerous, in a hurry, '
           'never at the meeting. Their claim is the one your consultation '
           'is worst at hearing, and they are the majority of the people '
           'using the space at any hour.'),
          ('Lecturer', 'Dwelling: let me stay. Backs and arms on the seat, '
           'shade, shelter, a lavatory you can see from where you are '
           'sitting. Old, young, poor, or caring for somebody. For these '
           'users a square is not an amenity, it is the only room available, '
           'and design them out and they do not go somewhere better because '
           'there is nowhere better.'),
          ('Lecturer', 'Trade: come past me and slow down. This is the only '
           'claim of the three that pays rent, which buys it a telephone '
           'number at the council and a place in the process. It also gets '
           'blamed for decisions it argued against, which my evidence '
           'supports more often than I expected.'),
          ('Lecturer', 'Now the structure, and this is the part I want in '
           'your notes. Seating serves dwelling and obstructs passage. Width '
           'serves passage and destroys the enclosure dwelling and trade both '
           'want. A terrace serves trade and takes ground passage was using. '
           'There is no arrangement of a finite square that serves all '
           'three.'),
          ('Lecturer', 'Which gives you the uncomfortable sentence about '
           'rules. Every rule in a public space protects one use by '
           'excluding another, and the exclusion is almost never written '
           'down, because it was almost never intended. No sound: protects '
           'residents, excludes performers. No cycling: protects walkers, '
           'excludes people with nowhere to go.'),
          ('Lecturer', 'One more thing on process, and it is the cheapest '
           'fix in the subject. Dwell time, footfall and passage counts '
           'cost almost nothing to collect and are almost never collected '
           'before a scheme, so the figure you would need to judge the '
           'change does not exist, and the scheme gets judged on its '
           'photographs.'),
          ('Lecturer', 'And the one empirical finding I would have you keep '
           'if you forget everything else. Remove a use instead of '
           'accommodating it and you displace it, you do not end it, and '
           'where it goes is worse: the underpass, every time, less '
           'overlooked and less safe. So name the claim you are granting, '
           'say what you are doing for the other two, and measure the '
           'square before you touch it.')],
         items=[
          ('Which sentence does the lecturer want to retire?',
           ['"squares are for trade"', '"this square should be for '
            'people"', '"consultation works"', '"design solves '
            'conflict"'], 1,
           'Because every party to such a dispute is a person.'),
          ('Which claim does he say consultation hears worst?',
           ['passage', 'dwelling', 'trade', 'residents'], 0,
           'Numerous, in a hurry, and never at the meeting.'),
          ('For dwelling users, he says a square is',
           ['an amenity', 'the only room available', 'a thoroughfare',
            'a workplace'], 1,
           'So designing them out sends them nowhere better.'),
          ('Why does trade have a reliable voice?',
           ['it is better organised', 'it pays rent', 'it is more '
            'numerous', 'it is legally privileged'], 1,
           'Which buys it a telephone number at the council.'),
          ('The incompatibility of the three claims is',
           ['a matter of personality', 'structural, given a finite '
            'square', 'caused by bad consultation', 'recent'], 1,
           'Seating obstructs passage; width destroys enclosure.'),
          ('His single empirical finding is that removing a use',
           ['ends it', 'displaces it somewhere worse', 'reduces it '
            'slightly', 'has no effect'], 1,
           'The underpass being the standard destination.')])],
   speak=dict(
    part='Part 3', focus='Rules in shared places',
    intro=('Five or six sentences. Try once to name who a rule excludes '
           'that nobody intended to exclude.'),
    qs=['Should there be rules about behaviour in public places?',
        'Who is usually left out when such rules are made?',
        'Is it possible to please everybody in a shared space?',
        'How should a city decide between competing uses?'],
    shape=[('answer', 'Rules are unavoidable and each one excludes '
            'somebody.'),
           ('support', 'A ban on amplified sound protects the flats above '
            'and ends the buskers.'),
           ('follow-up', 'Nobody voting for it was thinking about '
            'buskers.'),
           ('support', 'And the people most affected are never at the '
            'meeting.'),
           ('follow-up', 'So I would want the exclusion written down, even '
            'if the rule still passes.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Premise under each, and nothing overlapping',
         prompt=('Should public spaces be privately managed? Brainstorm ten '
                 'ideas, run the six tests, name the premise under each '
                 'survivor, and check that the two you keep are distinct and '
                 'equal. Do not write the essay yet.'),
         plan=('Private management reliably improves the condition of a '
               'space and reliably narrows who uses it, and because the '
               'second effect is invisible to the measures normally '
               'collected, the choice should turn on what is measured '
               'rather than on who holds the keys',
               [('The maintenance advantage is real and rests on a premise '
                 'about incentives that holds',
                 ['a manager whose rent depends on the space has a reason '
                  'to repair it within days',
                  'condition scores on privately managed squares are '
                  'consistently higher']),
                ('The exclusion effect is real and rests on a premise about '
                 'accountability that does not hold',
                 ['a private manager answers to tenants rather than to '
                  'users',
                  'use by the groups least able to go elsewhere falls, and '
                  'nobody collects that figure'])]),
         notes=[
          'The two ideas are distinct because one is about condition and the '
          'other about who is present, and equal because each is supported '
          'by a finding of the same weight. A pair where one side is a study '
          'and the other a worry is not equal.',
          'Each premise is named and judged separately: the incentive '
          'premise holds, the accountability premise does not. Saying which '
          'of your own premises survives is the move that lifts an outline '
          'out of the ordinary.',
          'The thesis does not pick a side on ownership. It relocates the '
          'question to measurement, which is where the evidence actually '
          'bears, and that relocation is what cycle 5 will have to '
          'defend.'],
         criterion=[('Two ideas that are distinct and equal',
                     'Coherence and Cohesion'),
                    ('A premise named and judged under each',
                     'Task Response')],
         instruct='  Produce the brainstorm, the tests, the premises and '
                  'the check. You will write it in cycle 5.',
         lines=12)],
   gram=dict(
    point='Competing legitimate uses',
    explain=('Writing about a conflict in which everybody is right needs '
             'language that grants a claim and names its cost in the same '
             'sentence. These patterns do that.'),
    examples=['Every rule that protects one use excludes another.',
              'Seating that serves dwelling obstructs passage.',
              'No arrangement of a finite square satisfies all three '
              'claims.',
              'The rule is read as neutral by whoever is not excluded by '
              'it.'],
    task='Rewrite each sentence so that the cost of granting a claim is '
         'named.',
    items=[('We should put in more benches.',
            'Additional seating would serve those who need to stay, at the '
            'cost of the width the crossing routes rely on.'),
           ('Ban the music.',
            'A prohibition on amplified sound would protect the flats on the '
            'north side and remove the only pitch available to '
            'performers.'),
           ('Widen the square.',
            'Clearing the centre would serve passage while removing the '
            'enclosure that both trade and dwelling depend on.'),
           ('Stop the cycling.',
            'Excluding bicycles would make the square safer for walkers and '
            'would exclude a group with no other route.'),
           ('Let the cafe have the terrace.',
            'Granting the terrace would serve trade and would enclose ground '
            'that the diagonal route currently uses.')]),
   vocab=[('commons', 'a resource held and used in common'),
          ('exclusion', 'the effect of keeping some users out'),
          ('custodian', 'a body responsible for looking after something'),
          ('upkeep', 'the work of keeping a place in good condition'),
          ('passage', 'movement through rather than within a space'),
          ('enclose', 'to put a boundary around ground'),
          ('before-count', 'a measurement taken prior to a change'),
          ('displace', 'to move a use elsewhere rather than end it')],
   expr=[('Every rule that protects one use excludes another',
          'the central sentence of the cycle'),
         ('for these users a square is not an amenity but the only '
          'available room', 'states what is at stake for one group'),
         ('naming the loser is not a failure of design',
          'reframes an uncomfortable decision'),
         ('it will at least hurt them on purpose',
          'the honest version of a trade-off')],
   trans=['consequently', 'which in turn', 'as a result', 'what follows'],
  ),

  dict(
   sub='Whether management means exclusion',
   step=5,
   read=[
    dict(heading='Three privately managed squares and who uses them',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 55-62',
         paras=[
          'Privately managed public space is now a substantial part of the '
          'urban fabric of most large cities, and it is argued about almost '
          'wholly without evidence. The argument has two settled positions. '
          'Private management produces clean, well-maintained, well-policed '
          'space; or private management produces exclusive space that '
          'excludes the public it claims to serve. The unusual feature of '
          'this dispute is that both positions are well-supported, and by '
          'the same studies. Each side quotes the half of the evidence that '
          'suits it and neither is misrepresenting anything, which is why '
          'thirty years of argument have moved nobody.',
          'Three squares in a single city were compared over six '
          'years, and all three are accessible to the public without '
          'charge. One is administered by the council, one by a '
          'private landowner under an agreement with the council, and '
          'one by a charitable trust constituted for the purpose. The '
          'three lie within two kilometres of one another and serve '
          'populations of comparable size and composition.',
          'On condition, the ranking is unambiguous and stable. The '
          'privately managed square scored highest on every one of the '
          'eleven condition measures used, in every year. Repairs were '
          'completed in a median of four days against twenty-three for the '
          'council square. Litter, graffiti and broken paving were '
          'consistently lowest, and the trust square sat between the two '
          'throughout.',
          'The explanation is neither mysterious nor a matter of competence. '
          'The private manager’s revenue derives from the tenants of the '
          'surrounding buildings, those tenants’ rents depend upon the '
          'square remaining attractive, and a repair postponed for three '
          'weeks is conspicuous to the people who pay. The council square '
          'competes for repair budget with every other asset the authority '
          'owns, from school roofs to street lighting, and loses that '
          'competition in most years for reasons wholly unconnected with the '
          'square.',
          'On use, the picture reverses in a way the condition '
          'measures cannot see. Total footfall was comparable across '
          'the three squares; composition was not. The privately '
          'managed square demonstrated markedly fewer people remaining '
          'for more than twenty minutes, fewer users aged over '
          'seventy, fewer groups of teenagers, and almost no users who '
          'appeared to have nowhere else to be. The same number of '
          'people were present and they were not the same people, '
          'which no measure in routine use would have detected.',
          'The mechanisms are documented and are mostly not rules: '
          'seating was angled and armed. Private security asked people '
          'to move on after approximately twenty minutes, which is '
          'lawful on private land and is not a rule anybody can read. '
          'There was no public lavatory. Photography was discouraged, '
          'and the square closed between midnight and 6am, which the '
          'council square did not. Each of these was introduced '
          'separately, for a stated reason, and in three of the five '
          'cases at the request of a tenant rather than of the '
          'manager.',
          'Each of these is defensible in isolation and the aggregate '
          'pattern is what matters. No individual measure excluded anybody; '
          'cumulatively they produced a square in which a person with '
          'nowhere to go does not remain, and that outcome required nobody’s '
          'choosing in order to be the predictable consequence of each '
          'decision taken on its own merits. This is the hardest proposition '
          'to convey in public argument, because an outcome nobody selected '
          'still appears deliberate to whoever it befalls, and asserting '
          'that it was not deliberate sounds like an excuse.',
          'The trust square is the most interesting of the three and gets '
          'the least attention. It matched the private square on seven of '
          'the eleven condition measures and matched the council square on '
          'composition of use, including users over seventy and users with '
          'nowhere to go. Its governing document requires it to report '
          'annually on who uses the square, which is the only instance of '
          'that requirement among the three. Its condition shortfall '
          'against the private square was concentrated in the four '
          'measures that depend on daily attendance rather than on capital '
          'works.',
          'That final fact may constitute the whole finding. The trust is '
          'not superior because it is a trust; it is superior because '
          'somebody is obliged to publish a figure concerning use, and a '
          'figure that must be published gets managed. The private manager '
          'publishes condition data because its tenants solicit condition '
          'data. Neither body is behaving improperly; each is managing '
          'precisely what it is interrogated about.',
          'This reframes the policy question away from ownership, where it '
          'is ordinarily conducted, and towards obligation, where the '
          'evidence actually bears. A private manager required to publish '
          'annual composition-of-use data would be expected to manage it, '
          'and the cost of that requirement is a few thousand pounds a year '
          'against a capital value in the hundreds of millions. No existing '
          'data collection would need to be stopped, and the manager in the '
          'study already collects most of the figures for its own purposes.',
          'The honest summary is therefore not available as a slogan. '
          'Privately managed squares are better kept and less used by the '
          'people with the fewest alternatives; both halves are true, they '
          'are not in contradiction, and the second half is invisible to '
          'every measure that is currently collected. Change what is '
          'measured and published, and the ownership question becomes '
          'considerably less interesting than it looks.'],
         items=[
          ('Which paragraph explains why the private square is better '
           'maintained?', ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 2,
           'Tenants’ rents depend on the square being attractive.'),
          ('Which paragraph lists the mechanisms of exclusion?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 8'], 1,
           'Angled seating, security, no lavatory, overnight closure.'),
          ('Which paragraph identifies the reporting requirement as the '
           'key difference?', ['Paragraph 7', 'Paragraph 8',
            'Paragraph 9', 'Paragraph 10'], 2,
           'A number that must be published gets managed.'),
          (
           'The writer believes the private manager is behaving badly.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 9 says each body is managing what it is asked '
           'about.',
           {0: 'Yes would need bad behaviour; paragraph 9 says each '
               'body manages what it is asked about.', 2: 'Not Given is wrong because the manager\u2019s conduct is '
               'explained.'}),
          (
           'The writer believes the ownership question is the right '
           'one to argue about.', ['Yes', 'No', 'Not Given'],
           1,
           'The final paragraph calls it considerably less interesting '
           'than it looks.',
           {0: 'Yes would need it to be the right question; the final '
               'paragraph calls it less interesting.', 2: 'Not Given is wrong because the question itself is '
               'rated.'}),
          ('Median repair time on the private square: ____________ days',
           None, 'four',
           'Paragraph 3, against twenty-three on the council square.'),
          ('How many of the eleven condition measures did the trust square '
           'match the private square on?', None, 'seven',
           'Paragraph 8, while matching the council square on '
           'composition.'),
          ('The trust’s governing document requires it to report annually '
           'on ____________.', None, 'use',
           'Paragraph 8: the only such requirement among the three.')])],
   listen=[
    dict(heading='A manager and a campaigner disagree', part='Part 4',
         task='A recorded exchange', band='l4', qtype='Questions 63-68',
         script=[
          ('Chair', 'Mr Osei-Lindqvist manages Ravensmere Square. Ms '
           'Achterberg campaigns on access to public space.'),
          ('Osei-Lindqvist', 'I will start with the number that is used '
           'against me, because I would rather say it than have it read out. '
           'Users over seventy on my square are down by about half against '
           'the council square two streets away, and people staying more '
           'than twenty minutes are down by rather more than half.'),
          ('Achterberg', 'That is the number, and I did not expect to hear '
           'it from you. My usual difficulty is that nobody collects it.'),
          ('Osei-Lindqvist', 'I collect it. I do not publish it, and that is '
           'a distinction I am not comfortable defending. What I will defend '
           'is that I did not set out to produce it. Every one of my '
           'decisions was defensible on its own and the pattern was nobody’s '
           'intention.'),
          ('Achterberg', 'I accept that completely, and it is why I have '
           'stopped arguing about motives. Angled benches, security moving '
           'people on at twenty minutes, no lavatory, closed at midnight. '
           'Each one reasonable. Together, a square where somebody with '
           'nowhere to go does not stay.'),
          ('Osei-Lindqvist', 'And my condition scores are the best in the '
           'city and the repairs are done in four days. That is also real, '
           'and the people who tell me the square is excluding are often the '
           'same people who told the council its paving was dangerous.'),
          ('Achterberg', 'Both halves are true. That is the thing I cannot '
           'get into a press release. Better kept and less used are not a '
           'contradiction.'),
          ('Osei-Lindqvist', 'And I would add the thing my own side will '
           'not say. The security instruction about twenty minutes is not a '
           'rule anybody can read. It is lawful because the land is '
           'private, it is nowhere on a sign, and a person asked to move on '
           'has nothing to appeal against because nothing was published.'),
          ('Achterberg', 'That is the sentence I have been trying to get '
           'somebody in your position to say for nine years, and it is '
           'worth more than the footfall data.'),
          ('Osei-Lindqvist', 'So what do you actually want? Not the slogan, '
           'the clause.'),
          ('Achterberg', 'Publish composition of use annually. Age bands, '
           'dwell time, and refusals by security, on the same page as your '
           'condition scores. I do not want your keys.'),
          ('Osei-Lindqvist', 'I would sign that, and I will tell you exactly '
           'why it works, which is not to my credit. I manage what I am '
           'asked about. Nobody has ever asked me about this, and the moment '
           'it is on a page with my name on it, my benches will change.'),
          ('Achterberg', 'Then that is the whole campaign, and it took me '
           'nine years to work out that it was a reporting clause rather '
           'than an ownership argument.')],
         items=[
          ('Osei-Lindqvist opens by',
           ['disputing the figures', 'stating the figure used against him',
            'blaming the council', 'refusing to comment'], 1,
           'Users over seventy down by about half.'),
          ('What does he admit he is uncomfortable defending?',
           ['collecting the data', 'collecting but not publishing it',
            'the condition scores', 'the security contract'], 1,
           'A distinction he draws himself.'),
          ('Achterberg says she has stopped arguing about',
           ['money', 'motives', 'design', 'ownership'], 1,
           'Accepting that the pattern was nobody’s intention.'),
          ('She describes "better kept and less used" as',
           ['a contradiction', 'both true and not a contradiction',
            'unproven', 'irrelevant'], 1,
           'And says she cannot get it into a press release.'),
          ('What does she actually ask for?',
           ['public ownership', 'annual publication of composition of '
            'use', 'removal of security', 'longer opening hours'], 1,
           'Age bands, dwell time and refusals, beside the condition '
           'scores.'),
          ('Why does he say the clause would work?',
           ['it is cheap', 'he manages what he is asked about',
            'it is legally binding', 'his tenants want it'], 1,
           'And says this is not to his credit.')])],
   speak=dict(
    part='Part 3', focus='Who decides how a place is used',
    intro=('The hardest turn in the unit. Try once to hold two true things '
           'that sound contradictory.'),
    qs=['Should private companies manage public spaces?',
        'How can a city tell whether a space is working?',
        'Is a clean space always a good space?',
        'Who should be accountable for public places?'],
    shape=[('answer', 'I mind less about who manages it than about what '
            'they have to publish.'),
           ('support', 'Privately managed squares are measurably better '
            'kept.'),
           ('follow-up', 'And measurably less used by people over seventy '
            'and people with nowhere to go.'),
           ('support', 'Both of those are true and they are not a '
            'contradiction.'),
           ('follow-up', 'So I would require a figure on who uses it, '
            'because a published number gets managed.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Are privately managed public spaces better?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some people say privately managed public spaces '
                 'are better maintained, while others say they exclude the '
                 'public. Discuss both views and give your own opinion. '
                 'Write at least 250 words.'),
         model=[
          'Both views are correct, which is the only interesting thing about '
          'this dispute and the thing both sides work hardest to avoid '
          'saying. Privately managed squares are better maintained and they '
          'are used by fewer of the people with the fewest alternatives, and '
          'the two findings come from the same studies.',
          'The maintenance advantage is large and the mechanism is plain. A '
          'private manager’s income comes from the tenants around the '
          'square, their rents depend on the square being attractive, and '
          'unrepaired paving is visible to the people who pay. In one '
          'six-year comparison of three squares in a single city, repairs on '
          'the privately managed square were completed in a median of four '
          'days against twenty-three on the council square, which was '
          'competing for budget with every other asset the council owned.',
          'The exclusion finding is equally well documented and is invisible '
          'to the measures that produced the first one. Total footfall was '
          'similar; composition was not. The private square had about half '
          'as many users over seventy and far fewer people staying beyond '
          'twenty minutes. No single rule produced this. Angled seating, '
          'security asking people to move on, no lavatory and an overnight '
          'closure are each defensible alone, and the pattern they make '
          'together was nobody’s intention.',
          'A third square in the same study points to where the answer '
          'actually lies. Managed by a charitable trust, it matched the '
          'private square on seven of eleven condition measures and the '
          'council square on who used it, and the one thing that '
          'distinguished it was a governing document requiring it to publish '
          'annual figures on use. It is not better because it is a trust. It '
          'is better because somebody has to publish a number, and a number '
          'that must be published gets managed.',
          'My own view, therefore, is that the argument about ownership is '
          'the wrong argument. I would permit private management and require '
          'annual publication of composition of use — age bands, dwell '
          'time and security refusals — on the same page as the condition '
          'data that these managers already publish willingly. The cost is a '
          'few thousand pounds a year against capital values in the '
          'hundreds of millions, and it would change the benches, which no '
          'amount of arguing about keys has managed to do.'],
         notes=[
          'The first paragraph grants both views and says why that is not a '
          'fudge: the two findings come from the same studies. Structure 3 '
          'needs the third position to be genuinely third, not a '
          'compromise.',
          'The third square is the hinge of the essay and arrives in '
          'paragraph 4, after both cases have been made at full strength. '
          'Introduced earlier it would look like a preferred answer; '
          'introduced here it looks like a finding.',
          'The recommendation is a clause, not a principle, and it is '
          'costed. An essay that ends with something a council could put in '
          'an agreement is answering the question; one that ends with a '
          'value is restating it.'],
         model65=[
                  'Some people say privately managed public spaces are '
                  'better managed. I think they are better at some '
                  'things and worse at others, and that the argument '
                  'is usually about the wrong question.',
                  'The case for private management is practical. '
                  'Privately managed squares are typically cleaner, '
                  'better maintained and better policed, because '
                  'somebody has a direct interest in their condition '
                  'and a budget to act on it.',
                  'But management serves whoever is paying. Private '
                  'managers commonly discourage uses that produce no '
                  'custom: sitting for a long time, skateboarding, '
                  'protest. A space can be immaculate and still be '
                  'unavailable to the people who most need somewhere '
                  'to be.',
                  'I think the question of ownership is less important '
                  'than the question of what the manager is asked to '
                  'deliver. A public authority with a cleanliness '
                  'target behaves like a private one. What matters is '
                  'whether anybody is accountable for the uses that '
                  'bring no revenue.',
                  ],
         gap65=[
                'It shows that the contest is between uses rather than '
                'between owners, which is why the ownership question '
                'is less interesting than it looks.',
                'It names the uses that are systematically '
                'under-represented in consultation and explains why.',
                'It says what each body is actually being asked about, '
                'instead of blaming the private manager.',
                ],
         criterion=[('Granting both views and saying why that is not a '
                     'fudge', 'Task Response'),
                    ('Holding the third position until both cases are '
                     'made', 'Coherence and Cohesion'),
                    ('Ending with a costed clause rather than a value',
                     'Task Response')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Evidence of exclusion and its measurement',
    explain=('Claims about who is missing from a place need language that '
             'distinguishes a count from a composition, and a pattern from '
             'an intention. These patterns do both.'),
    examples=['Better kept and less used are both true and not a '
              'contradiction.',
              'Total footfall was similar; composition was not.',
              'No single measure excluded anybody; together they did.',
              'A number that must be published gets managed.'],
    task='Rewrite each claim so that the measurement behind it is '
         'visible.',
    items=[('The square keeps people out.',
            'Users over seventy were about half as numerous as on the '
            'comparable council square.'),
           ('It is busy, so it is fine.',
            'Total footfall was similar across the three squares; the '
            'composition of that footfall was not.'),
           ('They designed it to exclude people.',
            'Each measure is defensible alone, and the pattern they produce '
            'together was not anybody’s intention.'),
           ('Private managers do not care about users.',
            'Private managers publish condition data because their tenants '
            'ask for condition data, and nobody asks them about use.'),
           ('A reporting rule would help.',
            'A requirement to publish composition of use annually would put '
            'the figure on a page with a name on it, and figures on such '
            'pages get managed.')]),
   vocab=[('accountability', 'having to answer for what you do'),
          ('answerable', 'obliged to explain yourself to somebody'),
          ('charitable trust', 'a body holding assets for a public '
           'purpose'),
          ('user mix', 'who makes up a group, rather than how many'),
          ('covenant', 'a binding promise attached to land'),
          ('dedication', 'the formal setting aside of land for public '
           'use'),
          ('open to all', 'available without charge or condition'),
          ('reporting requirement', 'an obligation to publish a figure')],
   expr=[('Better kept and less used are both true and not a '
          'contradiction', 'holds two findings at once'),
         ('I do not want your keys',
          'narrows a demand to what is actually wanted'),
         ('a number that must be published gets managed',
          'states the mechanism a clause relies on'),
         ('each is managing what it is asked about',
          'explains behaviour without blaming it')],
   trans=['admittedly', 'and yet', 'on balance', 'the honest summary'],
  ),
 ],
 technique=dict(
  title='Maps structured by change type, and what did not change',
  body=('Two maps of one place are the question candidates handle worst, '
        'and almost always for the same reason: they organise by map. '
        'Paragraph two describes 1965, paragraph three describes today, and '
        'every feature is mentioned twice while the reader is left to work '
        'out which ones moved. Organise by the kind of change instead. '
        'Removed, added, converted, unchanged, and — where there is one '
        '— changed in use. Each group takes one sentence and carries '
        'several features, the reader can follow it, and the answer is '
        'shorter and says more. The group everybody forgets is '
        '"unchanged": a description that lists only the works has described '
        'the project, not the ground.'),
  panel=[('Five groups, not two dates',
          'Removed, added, converted, unchanged, changed in use. Name the '
          'group, then list.'),
         ('Unchanged belongs in the answer',
          'The trees and the street. Without them the reader cannot see '
          'what stayed.'),
         ('A change of use gets its own sentence',
          'Nothing built, nothing demolished, and the largest difference '
          'on the plan.'),
         ('Compass and corner, once each',
          'North-east, centre, south-east. Locate a feature once; do not '
          'tour the square.')],
  task='Take the two plans in cycle 3. Write one sentence per group, in '
       'the order the panel gives.',
  qs=['Which features were removed and not replaced?',
      'Which were added on ground that held something else?',
      'Which were converted rather than replaced?',
      'What did not change at all?',
      'Is there a change of use, and is it the biggest one?']),
 outlining=dict(
  title='The whole toolkit on a contested-use argument',
  body=('This is the volume’s outlining strand run end to end on one hard '
        'prompt, against a clock. Brainstorm ten in two minutes. Run the '
        'six tests. Name the premise under each survivor and ask what else '
        'it commits you to. Check the two you keep are distinct and equal. '
        'Order so the strongest is last. Twelve minutes in total, which is '
        'what you will have. The prompt is chosen because it is the kind '
        'where both sides are right, so the test is not whether you can '
        'pick a side but whether your outline can hold two true things and '
        'still reach a recommendation.'),
  frame=('Private management reliably improves the condition of a space '
         'and reliably narrows who uses it, and because the second effect '
         'is invisible to the measures normally collected, the choice '
         'should turn on what is measured rather than on who holds the '
         'keys',
         [('The maintenance advantage is real and rests on a premise about '
           'incentives that holds',
           ['a manager whose rent depends on the square repairs it in four '
            'days rather than twenty-three',
            'condition scores were highest on every measure in every '
            'year']),
          ('The exclusion effect is real and rests on a premise about '
           'accountability that does not hold',
           ['users over seventy were about half as numerous',
            'the only square reporting on use was the only one that '
            'matched on composition'])]),
  task='Run the whole toolkit on the cycle 5 prompt in twelve minutes, '
       'timed, and keep the sheet.',
  qs=['Did you brainstorm ten before judging any?',
      'Which test eliminated the most ideas this time?',
      'Did either premise commit you to something you reject?',
      'Are your two ideas distinct, and are they equal in weight?',
      'Which two tools did you actually use under the clock?'],
  answers=['ten first, always; judging early is what produces the '
           'four-idea outline',
           'usually the overlap test on a prompt like this',
           'the accountability premise, if you pushed it to ownership',
           'distinct by subject, equal by the weight of their evidence',
           'whichever two they are, those are your tools; the rest are '
           'reference']),
 candos=['I can read hire conditions for what I would be liable for',
         'I can organise a pair of maps by type of change',
         'I can report what did not change as part of a description',
         'I can name whom a rule excludes without intending to',
         'I can hold two findings that sound contradictory and still '
         'recommend'],
 tip=('On paired maps, write removed, added, converted and unchanged, in '
      'that order, before you write any sentences. If a feature appears in '
      'two groups you have misread it.'),
)
