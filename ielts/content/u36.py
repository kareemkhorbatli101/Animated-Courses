# -*- coding: utf-8 -*-
"""Unit 36 - Energy Transition. IELTS Volume 4, band 6.5."""

_DAY = dict(kind='line', title='Demand and generation across one day',
            sub='a winter weekday, gigawatts', ylab='GW',
            x=['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
            series=[('Demand', [28, 26, 38, 40, 46, 42, 31]),
                    ('Wind', [14, 15, 12, 9, 7, 6, 9]),
                    ('Solar', [0, 0, 3, 11, 2, 0, 0]),
                    ('Gas', [9, 7, 19, 16, 31, 30, 17]),
                    ('Imports and storage', [5, 4, 4, 4, 6, 6, 5])])

UNIT = dict(
 n=36, vol=4, level='B2', band='6.5',
 theme='Energy Transition',
 opener=(
   'A farmer wants to connect a wind turbine and discovers that the queue is '
   'eleven years long. That is where this unit starts. It ends with the number '
   'everybody quotes — the cost per unit of electricity from a wind farm — '
   'and the question of what that number leaves outside its boundary. In '
   'between: a day on the grid hour by hour, who pays the levies, and why '
   'storage is the part nobody has solved.'),

 cycles=[
  dict(
   sub='Connecting to the grid',
   step=1,
   read=[
    dict(heading='Connecting a generator: the process',
         kind='Procedure notice', task='Flow-chart completion and multiple choice',
         band='gt_short', qtype='Questions 1-5',
         figure=dict(kind='process',
                     title='From enquiry to energisation',
                     sub='the six stages of a grid connection',
                     stages=[('Enquiry', 'capacity, location, technology'),
                             ('Offer', 'terms, charges and a date'),
                             ('Acceptance', '90 days to sign and pay'),
                             ('Design', 'detailed engineering'),
                             ('Construction', 'reinforcement if required'),
                             ('Energisation', 'commissioning and testing')],
                     phases=[('Application', 0, 2), ('Delivery', 3, 5)]),
         paras=[
          'Any generator above 3.68 kilowatts per phase requires a connection '
          'agreement before it may export to the network. The process begins '
          'with an enquiry stating the capacity sought, the location and the '
          'technology, and there is no charge for making one.',
          'The network operator responds with a connection offer. This sets '
          'out the works required, the charge payable and the earliest date on '
          'which energisation can take place. The applicant has ninety days in '
          'which to accept; an offer not accepted within that period lapses '
          'and the application must be made again from the beginning.',
          'Where the existing network cannot accept the capacity sought, the '
          'offer will include reinforcement works. These are the principal '
          'source of both cost and delay, and an applicant who can reduce the '
          'capacity sought below the reinforcement threshold will usually '
          'receive a materially cheaper and earlier offer.',
          'Connection dates are allocated in order of acceptance, with the date of enquiry carrying no weight, and projects that accept and then fail to proceed have '
          'until recently retained their place. The queue at some grid supply '
          'points now extends beyond 2037, and reform of the queue is the '
          'single most discussed subject in the industry.'],
         items=[
          ('A connection is required above ____________ kilowatts per phase.',
           None, '3.68', 'Paragraph 1, which also lists what an enquiry must '
           'state.'),
          ('An offer must be accepted within ____________ days.', None,
           'ninety', 'Paragraph 2: an offer not accepted in time lapses '
           'entirely.'),
          ('Where the network cannot accept the capacity, the offer includes '
           '____________ works.', None, 'reinforcement',
           'Paragraph 3 calls these the principal source of cost and delay.'),
          ('Connection dates are allocated in order of ____________.', None,
           'acceptance',
           'Paragraph 4, where the date of enquiry counts for nothing, which is why the '
           'queue behaves as it does.'),
          ('What does the writer say reform of the queue is?',
           ['A government priority', 'The most discussed subject in the industry', 'Unlikely to happen', 'A legal requirement'],
           1,
           'Paragraph 4, where the queue at some supply points extends '
           'beyond 2037.',
           {0: 'No government priority is mentioned in the notice.', 2: 'The notice reports it as under discussion, not '
               'hopeless.', 3: 'No legal requirement to reform the queue is given.'})]),
    dict(heading='Charges and timescales',
         kind='Table of charges', task='Table completion',
         band='gt_short', qtype='Questions 6-9',
         figure=dict(kind='table', title='Connection charges and timescales',
                     sub='indicative figures for a single site',
                     headers=['Capacity', 'Enquiry fee', 'Typical offer',
                              'Typical wait'],
                     rows=[['Up to 50 kW', 'None', '£1,400', '3 months'],
                           ['50 kW – 1 MW', '£250', '£18,000', '14 months'],
                           ['1 – 5 MW', '£800', '£140,000', '4 years'],
                           ['Above 5 MW', '£1,600', 'Case by case',
                            '7 years +']],
                     widths=[1.0, 0.8, 0.9, 0.9]),
         paras=[
          'The figures opposite are indicative only and apply to a single site '
          'with no unusual site conditions. They exclude the cost of the '
          'generating equipment itself, of planning permission and of any '
          'private cable run between the generator and the connection point.',
          'Two features of the table deserve comment. The first is that the '
          'enquiry fee rises gently while the offer figure rises very steeply: '
          'the cost of asking is not a guide to the cost of connecting, and '
          'applicants routinely plan on the wrong one of these.',
          'The second is the relationship between capacity and wait. The jump '
          'between the 50 kilowatt band and the 1 megawatt band is slightly '
          'over four times in time and roughly eight times in cost, but the '
          'jump above 5 megawatts is where reinforcement of the wider network '
          'becomes likely and the figures cease to be predictable at all.',
          'Note also that the wait shown is the wait from acceptance of an '
          'offer, not from the date of enquiry. The period spent obtaining an '
          'offer must be added to it, and for the larger bands that period is '
          'itself measured in months.',
          'Applicants are strongly advised to obtain a budget estimate before '
          'committing to a site. A budget estimate costs the enquiry fee, is '
          'not binding on either party, and takes about twenty-five working '
          'days.'],
         items=[
          ('Enquiry fee for a 2 MW generator: £____________', None, '800',
           'From the table, the 1 to 5 MW band.'),
          ('Typical offer for a 300 kW generator: £____________', None,
           '18,000', 'The 50 kW to 1 MW band in the table.'),
          ('Typical wait above 5 MW: ____________ years or more', None,
           'seven', 'The last row of the table, where figures cease to be '
           'predictable.'),
          ('A budget estimate takes about ____________ working days.', None,
           'twenty-five',
           'Paragraph 4, and it is not binding on either party.')])],
   listen=[
    dict(heading='Applying for a grid connection', part='Part 1',
         task='A call to a network operator · note completion', band='l1',
         qtype='Questions 10-14',
         script=[
          ('Operator', 'Connections team, Aoife speaking.'),
          ('Caller', 'Hello. I farm near Ravensthorpe and I want to put up a '
           'single turbine. I need to know what is involved.'),
          ('Operator', 'I can help with that. What capacity are you looking '
           'at?'),
          ('Caller', 'Five hundred kilowatts.'),
          ('Operator', 'Five hundred. And the site postcode?'),
          ('Caller', 'It is R G twelve, four Q N.'),
          ('Operator', 'R G one two, four Q N. Thank you. Now, at five '
           'hundred kilowatts you are in our medium band, so the enquiry fee '
           'is two hundred and fifty pounds and I would expect an offer in '
           'the region of eighteen thousand, though that varies a great deal '
           'with what is already on your local network.'),
          ('Caller', 'And how long before it could be running?'),
          ('Operator', 'Realistically, fourteen months from acceptance. I '
           'should warn you now about the ninety days, because it catches '
           'people. Once we make you an offer you have ninety days to accept '
           'and pay. If you let it lapse you go back to the beginning of the '
           'process, not the beginning of the queue.'),
          ('Caller', 'That is a distinction I would rather learn now.'),
          ('Operator', 'Most people learn it the other way. One more thing '
           'that might save you a considerable amount. If you can live with '
           'four hundred and fifty kilowatts instead of five hundred, you '
           'may come in under the threshold that triggers reinforcement at '
           'your local substation. I cannot promise that until we have '
           'looked, but it is worth asking for both figures.'),
          ('Caller', 'I had no idea that was how it worked.'),
          ('Operator', 'It is the most useful thing I say all week. Shall I '
           'send you a budget estimate form? It takes twenty-five working '
           'days and it is not binding on either of us.')],
         items=[
          ('Site postcode: ____________', None, 'RG12 4QN',
           'Given letter by letter and read back by the operator.'),
          ('Capacity sought: ____________ kilowatts', None, '500',
           'Which places the caller in the medium band.'),
          ('Enquiry fee: £____________', None, '250',
           'With an offer expected in the region of eighteen thousand.'),
          ('An offer must be accepted within ____________ days.', None,
           'ninety',
           'And letting it lapse returns you to the beginning of the '
           'process.'),
          ('The operator suggests also asking for a quote at ____________ '
           'kilowatts.', None, '450',
           'It may come in under the threshold that triggers reinforcement at '
           'the local substation.')])],
   speak=dict(
    part='Part 1', focus='Where your electricity comes from',
    intro=('Two or three sentences. Everyday knowledge is enough; the '
           'examiner is listening to your English, not testing your physics.'),
    qs=['Do you know how the electricity in your home is produced?',
        'Have you seen wind turbines or solar panels where you live?',
        'Do people in your country worry about the cost of energy?',
        'Would you put solar panels on your own home?'],
    shape=[('answer', 'Mostly gas, I think, and a growing amount of wind.'),
           ('support', 'There are turbines along the ridge north of our '
            'town.'),
           ('follow-up', 'They went up about six years ago and nobody talks '
            'about them now.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Writing about a connection application',
         prompt=('You have applied to connect a small generator to the '
                 'electricity network and the process is taking longer than '
                 'you were told. Write a letter to the network operator. In '
                 'your letter: give the details of your application; explain '
                 'what you were originally told; say what you would like them '
                 'to do. Write at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing about my application to connect a 500 kW wind turbine '
          'at Ravensthorpe Farm, reference RG12/4QN/0881. The enquiry was '
          'made on 3 February and the fee of £250 was paid on the same day.',
          'When I telephoned your connections team in February I was told to '
          'expect an offer within twenty-five working days, and that the '
          'connection itself would take approximately fourteen months from '
          'acceptance. Seven months have now passed and I have received '
          'neither an offer nor a budget estimate. My two written enquiries, '
          'sent in May and July, have not been acknowledged.',
          'I would be grateful if you could do three things. First, confirm '
          'in writing whether my application is still live. Second, provide '
          'either the offer or a date by which it will be issued. Third, '
          'confirm that the ninety-day acceptance period will run from the date I receive the offer, as against the date it is drawn up, '
          'since I have no means of knowing the latter.',
          'I look forward to hearing from you.',
          'Yours faithfully,',
          'N. Castellanos'],
         notes=[
          'The third bullet is answered as a numbered list of three specific '
          'requests. In a letter of complaint this is far stronger than a '
          'general demand for action, and it gives the reader something they '
          'can actually do on the day they open it.',
          'Notice the reference number, the dates and the amounts. A letter '
          'about an administrative failure is only as persuasive as its '
          'record, and these cost very few words.',
          'Dear Sir or Madam with Yours faithfully. The writer does not know '
          'a name, and inventing one to be able to use sincerely is a mistake '
          'some candidates make.'],
         criterion=[('Specific, actionable requests in place of a general '
                     'demand', 'Task Achievement'),
                    ('A documented record of dates and amounts',
                     'Task Achievement'),
                    ('Firm but controlled register', 'Lexical Resource')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Reporting what you were told',
    explain=('A letter about a broken expectation needs the expectation '
             'reported accurately and without accusation. Reported speech '
             'does both: it states what was said and leaves the reader to '
             'see the gap.'),
    examples=['I was told to expect an offer within twenty-five working '
              'days.',
              'Your colleague advised me that the wait would be fourteen '
              'months.',
              'I understood from that conversation that no further fee was '
              'payable.',
              'It was suggested that I apply for two capacities.'],
    task='Report each statement as it would appear in a formal letter.',
    items=[('They said: "It will take three weeks."',
            'I was told that the application would take three weeks.'),
           ('They said: "You do not need to pay again."',
            'I understood from your colleague that no further payment would '
            'be required.'),
           ('They said: "We will call you back."',
            'Your adviser undertook to telephone me, and I have had no '
            'call.'),
           ('They said: "Apply for both figures."',
            'It was suggested that I apply for both capacities.'),
           ('They said: "The offer is in the post."',
            'I was informed on 14 June that the offer had been sent.')]),
   vocab=[('energisation', 'the moment a new connection is switched on'),
          ('reinforcement', 'strengthening the network to take more power'),
          ('substation', 'equipment that changes voltage between networks'),
          ('export', 'to send electricity out onto the network'),
          ('lapse', 'to expire through not being acted on'),
          ('indicative', 'given as a guide, not as a firm figure'),
          ('commissioning', 'testing new equipment before it is used'),
          ('grid supply point', 'where a local network joins the national '
           'one')],
   expr=[('I am writing about my application to',
          'names the matter and the reference at once'),
         ('I would be grateful if you could do three things',
          'announces a list the reader can act on'),
         ('I have received neither an offer nor',
          'states an omission precisely'),
         ('since I have no means of knowing',
          'gives the reason for an unusual request')],
   trans=['first', 'second', 'third', 'since'],
  ),

  dict(
   sub='Who pays for the change',
   step=2,
   read=[
    dict(heading='Four households on energy bills',
         kind='Four short texts', task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 15-20',
         paras=[
          'A  Ekaterina: We put in a heat pump and solar two years ago and our '
          'bills went down by about half. What I notice is that everybody '
          'congratulating us owns their home. The grant covered a third. The '
          'two thirds we found ourselves is more than most of my neighbours '
          'have, and the scheme was designed by people who have it.',
          'B  Dermot: I am completely in favour of all of it and I object to '
          'how it is paid for. The levies sit on the electricity bill, not on '
          'gas and not on income, so a household heating with electricity pays '
          'for the transition and a household heating with gas does not. We '
          'have put the charge on exactly the wrong fuel.',
          'C  Priyanka: I rent. I cannot install anything, I do not choose the '
          'boiler, and I pay the bill. Every scheme I have read about is '
          'addressed to somebody who owns the roof. The only policy that would '
          'reach me is a minimum standard the landlord has to meet, and that '
          'is the one nobody wants to legislate.',
          'D  Sigurd: My bill went up four hundred a year and I was told it '
          'was the green levies. I looked it up, because I am that sort of '
          'person, and the levies were about a tenth of the rise. The rest was '
          'the gas price. I am still angry about the four hundred and I am no '
          'longer angry about the wrong thing.'],
         items=[
          (
           'Which person argues the cost is attached to the wrong '
           'fuel?',
           ['Ekaterina', 'Dermot', 'Priyanka', 'Sigurd'], 1,
           'The levies sit on electricity alone, leaving gas and '
           'income untouched.',
           {0: 'Ekaterina says the schemes are designed for owners.', 2: 'Priyanka names a policy that would reach them.', 3: 'Sigurd checked a claim and found it largely wrong.'}),
          ('Which person says the schemes are designed for owners?',
           ['Ekaterina', 'Dermot', 'Priyanka', 'Sigurd'], 0,
           'She notes the grant covered a third and the rest is more '
           'than her neighbours have.',
           {1: 'Dermot argues the cost is attached to the wrong fuel.', 2: 'Priyanka names a policy that would reach them.', 3: 'Sigurd checked a claim and found it largely wrong.'}),
          ('Which person checked a claim and found it largely wrong?',
           ['Ekaterina', 'Dermot', 'Priyanka', 'Sigurd'], 3,
           'The levies were about a tenth of the rise; the rest was '
           'the gas price.',
           {0: 'Ekaterina says the schemes are designed for owners.', 1: 'Dermot argues the cost is attached to the wrong fuel.', 2: 'Priyanka names a policy that would reach them.'}),
          ('Which person names a policy that would reach them?',
           ['Ekaterina', 'Dermot', 'Priyanka', 'Sigurd'], 2,
           'A minimum standard the landlord has to meet.',
           {0: 'Ekaterina says the schemes are designed for owners.', 1: 'Dermot argues the cost is attached to the wrong fuel.', 3: 'Sigurd checked a claim and found it largely wrong.'}),
          ('Dermot opposes the transition to renewable energy.',
           ['Yes', 'No', 'Not Given'], 1,
           'He says he is completely in favour of all of it and '
           'objects only to how it is paid for.',
           {0: 'Yes would need opposition; he says he is in favour of '
               'all of it.', 2: 'Not Given is wrong because he states his position and '
               'his objection.'}),
          ('Sigurd now accepts that his bill should have risen.',
           ['Yes', 'No', 'Not Given'], 2,
           'He says he is still angry about the rise, only no longer '
           'angry about the wrong cause.',
           {0: 'Yes would need acceptance; he is still angry about the '
               'rise itself.', 1: 'No would need him to reject the explanation too, and '
               'he accepts that part.'})])],
   listen=[
    dict(heading='A short talk: who pays for the change', part='Part 2',
         task='A talk at a public meeting · multiple choice', band='l2',
         qtype='Questions 21-24',
         script=[
          ('Speaker', 'I have been asked to explain what is actually on your '
           'electricity bill, and I am going to do it with four numbers in place of four arguments.'),
          ('Speaker', 'Take a typical annual bill. Roughly forty per cent of '
           'it is the wholesale cost of the energy itself. About twenty-two '
           'per cent is networks: the wires, the substations, the people who '
           'come out when a line comes down. Around sixteen per cent is '
           'what are loosely called levies, and the remainder is the '
           'supplier’s own costs, value added tax and a margin.'),
          ('Speaker', 'Now, the sixteen. It is not one thing. Rather over half '
           'of it funds contracts that pay renewable generators a fixed price, '
           'which is the part people mean when they say green levies. The rest '
           'funds the warm home discount, insulation for low-income '
           'households, and the social obligations. Calling the whole sixteen '
           'per cent an environmental charge is wrong by about half.'),
          ('Speaker', 'The question I was actually asked is who pays, and here '
           'is the honest answer. Almost all of this sits on electricity and '
           'almost none of it sits on gas. Since electricity is the clean '
           'fuel and gas is not, we have arranged our charges so that the '
           'household doing the right thing pays for the policy and the '
           'household doing the cheaper thing does not.'),
          ('Speaker', 'I am not going to tell you what to do about that, '
           'because moving the charge onto gas raises the bills of people '
           'who cannot afford a heat pump, and moving it onto general taxation '
           'is a decision for a chancellor, which I am not. But if you leave '
           'tonight knowing one thing, know that this is a choice about where to put a cost, made by people who could have chosen otherwise.')],
         items=[
          (
           'What proportion of a typical bill is the wholesale cost of '
           'energy?',
           ['Sixteen per cent', 'Twenty-two per cent', 'Forty per cent', 'Over half'],
           2,
           'Networks take about twenty-two and levies about sixteen.',
           {0: 'Sixteen per cent is the share taken by levies.', 1: 'Twenty-two per cent is the share taken by networks.', 3: 'Higher than the share she gives for wholesale energy.'}),
          ('Rather over half of the levies fund',
           ['insulation', 'contracts paying renewable generators', 'the warm home discount', 'network repairs'],
           1,
           'The rest funds the warm home discount, insulation and '
           'social obligations.',
           {0: 'Insulation is funded from the remainder of the levies.', 2: 'The warm home discount is part of the remainder.', 3: 'Network repairs are the separate twenty-two per cent.'}),
          (
           'The speaker says calling the whole sixteen per cent '
           'environmental is',
           ['correct', 'wrong by about half', 'deliberately misleading', 'a recent change'],
           1, 'Because a substantial part of it is social in purpose.',
           {0: 'She says the description is wrong by about half.', 2: 'She does not accuse anybody of deliberate deception.', 3: 'No recent change in the levies is described.'}),
          ('Her main point about who pays is that',
           ['gas users pay most', 'the charge sits on the clean fuel', 'taxpayers pay', 'suppliers absorb it'],
           1,
           'The household doing the right thing pays for the policy.',
           {0: 'Almost none of the charge sits on gas, she says.', 2: 'Taxation is one of the options she declines to choose.', 3: 'Suppliers\u2019 own costs are a separate part of the bill.'})]),
    dict(heading='Two councillors disagree about levies', part='Part 3',
         task='A discussion after the meeting · multiple choice and matching', band='l3',
         qtype='Questions 25-29',
         script=[
          ('Marguerite', 'I thought she was admirably clear and I think her '
           'conclusion is wrong. Move the levies to general taxation and you '
           'have solved it in one line.'),
          ('Jerzy', 'You have moved it. Whether you have solved it depends '
           'who pays tax, and in this country that is a more progressive group '
           'than bill payers, so I grant you it is an improvement.'),
          ('Marguerite', 'Then we agree.'),
          ('Jerzy', 'On that step. What I do not grant is that it is one '
           'line. The levies fund long contracts. Generators have signed on '
           'the basis of a bill-funded revenue stream and their lenders have '
           'priced it. Change the source and the contracts are fine; announce '
           'that you might change it and the cost of capital for the next '
           'round of projects rises before you have legislated anything.'),
          ('Marguerite', 'That is an argument against ever reforming '
           'anything.'),
          ('Jerzy', 'No, it is an argument for announcing the reform and the '
           'guarantee in the same sentence. I am not defending the present '
           'arrangement. I think it is indefensible, and I want it changed '
           'carefully rather than cleanly.'),
          ('Marguerite', 'All right. But let me put the other half to you. '
           'While we are being careful, every month, a household heating with '
           'electricity is subsidising a household heating with gas. That is a '
           'real transfer from poorer to richer and it is happening now, not '
           'in a scenario.'),
          ('Jerzy', 'That is the strongest thing anybody has said this '
           'evening and I do not have an answer to it.'),
          ('Jerzy', 'Let me try to give you something instead of only '
           'objections. If the motion said that the levies move to taxation '
           'over three years, with the existing contracts underwritten by the '
           'Treasury on day one, I would vote for it tomorrow and I would '
           'speak for it.'),
          ('Marguerite', 'Three years is longer than I want and shorter than '
           'I feared. What does underwritten mean in practice?'),
          ('Jerzy', 'A statutory guarantee that payments due under existing '
           'contracts are met whatever the funding source. It costs nothing '
           'unless it is needed, and it is the sentence the lenders are '
           'waiting to read.'),
          ('Marguerite', 'Then will you support the motion?'),
          ('Jerzy', 'I will support a motion that asks for the change and '
           'specifies a transition period. I will not support one that says '
           'abolish the levies by April, which is what the draft says.'),
          ('Marguerite', 'Give me a period you would accept and I will '
           'redraft it tonight.')],
         items=[
          ('Jerzy accepts that moving levies to taxation is',
           ['impossible', 'an improvement', 'irrelevant', 'too expensive'],
           1,
           'Because taxpayers are a more progressive group than bill '
           'payers.',
           {0: 'He accepts the move as possible, if not simple.', 2: 'He treats it as a real improvement, not beside the '
               'point.', 3: 'Cost to the Treasury is not his objection.'}),
          ('His objection concerns',
           ['the cost of capital for future projects', 'existing contracts being broken', 'the level of taxation', 'the speed of construction'],
           0,
           'Announcing a possible change raises it before anything is '
           'legislated.',
           {1: 'He says the existing contracts would be fine.', 2: 'The level of taxation is not what he raises.', 3: 'Construction speed is not part of his objection.'}),
          ('What does he say he wants?',
           ['No change', 'Change announced with a guarantee', 'A referendum', 'A review'],
           1,
           'He calls the present arrangement indefensible and wants it '
           'changed carefully rather than cleanly.',
           {0: 'He calls the present arrangement indefensible.', 2: 'No referendum is suggested by either councillor.', 3: 'He wants a guarantee, not a review.'}),
          (
           'Which of Marguerite\u2019s points does Jerzy say he cannot '
           'answer?',
           ['The cost of capital', 'The transfer from poorer to richer', 'The speed of reform', 'The wording of the motion'],
           1,
           'He calls it the strongest thing anybody has said this '
           'evening.',
           {0: 'The cost of capital is his own argument.', 2: 'Speed is what they negotiate, not what defeats him.', 3: 'The wording is what he offers to amend.'}),
          ('What will Jerzy support?',
           ['Abolition by April', 'A motion specifying a transition period', 'The draft as written', 'Nothing'],
           1, 'And Marguerite offers to redraft it that night.',
           {0: 'Abolition by April is what he refuses to support.', 2: 'The draft is what he says he cannot support.', 3: 'He offers to support a redrafted motion.'})])],
   speak=dict(
    part='Part 1 into Part 2', focus='Energy',
    longturn=[('The change I made because of energy costs was to stop heating '
               'two of the four rooms in my flat, and to move my desk into the '
               'kitchen.'),
              ('I made it in the October when the new tariff arrived, having '
               'spent September telling myself the figure in the letter must '
               'be wrong.'),
              ('How much difference it made I can state fairly precisely, '
               'because I had the previous winter to compare with. The bill '
               'fell by about a third, which was more than I expected, and the '
               'flat became noticeably damper in the two cold rooms, which I '
               'had not thought about at all until a wall started to mark.'),
              ('How I felt about having to make it is the part I find hardest '
               'to say politely. I was not in difficulty; I could have paid, '
               'and that is precisely why the feeling surprised me. What I '
               'resented was that the whole adjustment was on my side of the '
               'meter. I changed where I worked, what I wore indoors and when '
               'I washed, and none of it touched the reason the price had '
               'moved. I also noticed how quickly I began to think of it as '
               'normal, and that is the thing I would warn somebody about. A '
               'reduction accepted under pressure gets described afterwards as '
               'a choice, and once it is a choice, nobody has to explain the '
               'price.')],
    intro=('Short answers, then the long turn. Four bullets in order, equal '
           'weight, and developed instead of listed.'),
    cue=('Describe a change you made because of the cost of energy.',
         ['what the change was', 'when you made it',
          'how much difference it made',
          'and explain how you felt about having to make it']),
    qs=['Has the cost of energy changed where you live?',
        'Do people try to use less electricity in your country?',
        'Now look at the card. You have one minute to make notes.',
        'Should energy be cheaper for people on low incomes?'],
    shape=[('answer', 'We stopped heating the two rooms nobody uses.'),
           ('support', 'That was the winter the price doubled.'),
           ('follow-up', 'It saved perhaps a fifth of the bill.'),
           ('support', 'Honestly I resented it more than it cost.'),
           ('follow-up', 'Because it felt like a decision somebody else had '
            'made for us.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should governments subsidise renewable energy?',
         prompt=('Some people think governments should pay to develop '
                 'renewable energy. Others believe the market should decide '
                 'how electricity is produced. Discuss both views and give '
                 'your own opinion. Write at least 250 words.'),
         model=[
          'The question of whether governments should fund renewable '
          'generation is usually argued as though support and the market were '
          'alternatives. They are not, and the more useful question is what '
          'support is for, because a subsidy that is paying for one thing is '
          'often defended as though it were paying for another.',
          'The case for public support rests on two features of energy that '
          'markets handle badly. The first is that the damage done by burning '
          'fossil fuels is not paid for by whoever burns them, so unsupported '
          'prices compare a cost that includes everything with a cost that '
          'leaves out the most expensive part. The second is that new '
          'technologies are expensive until they are built at scale, and no '
          'individual firm can justify being the one that makes a technology '
          'cheap for its competitors.',
          'The case against is that support, once given, is extremely hard to '
          'withdraw. An industry built on a subsidy acquires an interest in '
          'the subsidy, and governments choosing technologies have a long '
          'record of choosing badly and then protecting the choice. There is '
          'also the matter of who pays: in many countries these costs sit on '
          'electricity bills, which fall most heavily on households least able '
          'to escape them.',
          'My own view is that the second argument defeats a particular kind of support, leaving the principle standing. Support justified by the '
          'learning argument should fall automatically as deployment rises, '
          'because its entire purpose is to become unnecessary; support '
          'justified by unpriced damage should be replaced by pricing the '
          'damage, which does the same work without choosing a winner.',
          'What should not survive is open-ended support with no mechanism for '
          'ending it. That is the form the objections genuinely describe, and '
          'it is the form that is easiest to legislate and hardest to '
          'remove.'],
         notes=[
          'Structure 3, and the resolution again divides instead of splitting: '
          'it accepts the opponents’ objection and shows that it lands on one '
          'design of subsidy, not on subsidy as such.',
          'The two reasons in paragraph 2 are genuinely different kinds of '
          'reason — an unpriced cost and a collective-action problem. '
          'Candidates who give two versions of the same reason lose marks for '
          'development even when both sentences are good.',
          'The conclusion names the thing that should not survive. Ending on '
          'a specific target is far stronger than ending on a balance.'],
         criterion=[('Two reasons of genuinely different kinds',
                     'Coherence and Cohesion'),
                    ('Defeating a design, not a principle',
                     'Task Response'),
                    ('A conclusion naming a specific target',
                     'Task Response')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Saying where a cost falls',
    explain=('Energy and tax arguments are won or lost on precision about '
             'incidence — who actually bears a cost, as against who hands over '
             'the money. These patterns state it.'),
    examples=['The levies sit on electricity, not on gas.',
              'These costs fall most heavily on households least able to '
              'escape them.',
              'The charge is collected from suppliers and borne by '
              'consumers.',
              'The damage is not paid for by whoever causes it.'],
    task='Rewrite each sentence to say where the cost actually falls.',
    items=[('Energy is expensive.',
            'The cost of energy falls hardest on households that cannot '
            'change how they heat.'),
           ('Companies pay the levy.',
            'The levy is collected from suppliers and passed through to '
            'bills.'),
           ('Pollution is bad.',
            'The cost of pollution is borne by people other than those who '
            'cause it.'),
           ('Subsidies are expensive.',
            'The cost of subsidy falls on bill payers, a narrower group than taxpayers.'),
           ('Taxes would be fairer.',
            'Funding the policy through taxation would shift the cost onto a '
            'more progressive group.')]),
   vocab=[('levy', 'a charge added to a bill to fund a policy'),
          ('wholesale', 'the price at which energy is bought in bulk'),
          ('incidence', 'who actually bears a cost'),
          ('progressive', 'taking proportionally more from higher incomes'),
          ('cost of capital', 'what it costs a project to borrow money'),
          ('deployment', 'the amount of a technology actually installed'),
          ('open-ended', 'with no fixed end point'),
          ('transition period', 'time allowed for adjusting to a change')],
   expr=[('You have moved it. Whether you have solved it depends',
          'accepts a step while questioning the claim'),
         ('I do not have an answer to it',
          'concedes outright, which costs less than it seems'),
         ('changed carefully rather than cleanly',
          'contrasts two ways of doing the same thing'),
         ('and it is happening now, not in a scenario',
          'contrasts present harm with predicted harm')],
   trans=['on that step', 'while we are being careful', 'therefore',
          'what should not survive'],
  ),

  dict(
   sub='A day on the grid',
   step=3,
   read=[
    dict(heading='Demand, supply and the hours in between',
         kind='Data article',
         task='Matching information and note completion',
         band='gt_work', qtype='Questions 30-35',
         figure=_DAY,
         paras=[
          'The chart shows demand and four sources of supply across a single '
          'winter weekday, in gigawatts. Demand follows the familiar shape: a '
          'trough overnight at around 26 GW, a sharp climb through the morning, '
          'and a peak of 46 GW at four in the afternoon, when lighting and '
          'heating load arrives before industrial demand has fallen away.',
          'Wind does almost the opposite. It is at its highest overnight, at '
          '14 to 15 GW, and falls steadily through the day to a minimum of 6 '
          'GW at eight in the evening. This is a particular day, not a pattern, but the general problem it illustrates is real: wind is '
          'not more available when demand is higher, and on many days it is '
          'markedly less.',
          'Solar makes a brief appearance, reaching 11 GW at midday and '
          'returning to zero by late afternoon. On a winter day its '
          'contribution is small and, more importantly, it has ended several '
          'hours before the peak. Solar reduces the quantity of energy '
          'required across a year; it does very little for the hour that '
          'actually sets the size of the system.',
          'Gas is the variable that absorbs everything else. It sits at 7 to 9 '
          'GW overnight, climbs to 19 GW during the morning, falls back at '
          'midday as solar arrives, and then rises to 31 GW for the evening '
          'peak. Its shape is not a decision about gas. It is whatever is left '
          'when the other lines are subtracted from demand.',
          'Imports and storage move hardly at all on this day, between 4 and 6 '
          'GW. This is the line most readers skip and it is the one that has '
          'to change. Everything that is currently done by gas — the climb, '
          'the fall, the evening rise — must in a decarbonised system be done '
          'by something, and that something is largely this line.'],
         items=[
          (
           'Which paragraph explains that one source simply absorbs '
           'the remainder?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           2,
           'Paragraph 4: the shape of gas is what is left when the '
           'other lines are subtracted.',
           {0: 'Paragraph 2 warns against treating one day as a '
               'pattern.', 1: 'Paragraph 3 describes solar and its early finish.', 3: 'Paragraph 5 describes imports and storage.'}),
          (
           'Which paragraph warns against treating one day as a '
           'pattern?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 5'],
           1,
           'Paragraph 2 says this is a particular day, before giving '
           'the general problem.',
           {0: 'Paragraph 1 describes the demand curve itself.', 2: 'Paragraph 3 describes solar and its early finish.', 3: 'Paragraph 5 describes imports and storage.'}),
          ('Demand peaks at ____________ GW.', None, '46',
           'Paragraph 1, at four in the afternoon.'),
          ('Wind falls to a minimum of ____________ GW.', None, '6',
           'Paragraph 2, at eight in the evening.'),
          ('Solar reaches ____________ GW at midday.', None, '11',
           'Paragraph 3, and has ended several hours before the peak.'),
          ('The writer says solar does little for the hour that sets the '
           '____________ of the system.', None, 'size',
           'Paragraph 3, distinguishing annual energy from peak '
           'capacity.')])],
   listen=[
    dict(heading='A control room engineer on balancing', part='Part 4',
         task='A talk on keeping supply and demand equal · multiple choice', band='l4',
         qtype='Questions 36-41',
         figure=_DAY,
         script=[
          ('Engineer', 'My job is to make two numbers equal every second of '
           'every day, and if I fail by more than about one per cent for more '
           'than a few seconds the frequency moves far enough that things '
           'start disconnecting themselves to survive.'),
          ('Engineer', 'Look at the chart in front of you. Demand bottoms out '
           'around twenty-six gigawatts at four in the morning and peaks at '
           'forty-six at four in the afternoon. That twenty gigawatt swing is '
           'what I am managing, and notice that it happens within twelve '
           'hours.'),
          ('Engineer', 'Now the awkward part. Wind, on this day, is highest '
           'exactly when demand is lowest and lowest when demand peaks. '
           'Fifteen gigawatts at four in the morning and six at eight in the '
           'evening. People assume renewables are unpredictable. The real '
           'problem on most days is not that they are unpredictable, it is '
           'that they are predictably in the wrong place in time.'),
          ('Engineer', 'Solar is the clearest case. Eleven gigawatts at noon '
           'on this winter day, nothing by four. It cannot contribute to the '
           'evening peak at any installed capacity whatever, because at six '
           'in the evening in January the amount of sun falling on this '
           'country is zero. No quantity multiplied by zero helps.'),
          ('Engineer', 'So gas does the work. Nineteen gigawatts in the '
           'morning, down at midday when solar arrives, thirty-one for the '
           'evening peak. And I want to be precise about what gas is providing '
           'there, because it is two different services and people conflate '
           'them. It provides energy, which is the area under the curve. It '
           'also provides the ability to change output quickly, which is the '
           'steepness of the curve. A system can be short of either one.'),
          ('Engineer', 'One more thing about the morning climb, because it '
           'is the part that is getting harder, not easier. Between '
           'four and eight in the morning demand rises twelve gigawatts, and '
           'as more heating and more vehicles move onto electricity that climb '
           'gets steeper every year. A system can have more than enough '
           'generation in total and still be unable to get up that slope.'),
          ('Engineer', 'That is why I spend my time on the line most people '
           'ignore, which is imports and storage, sitting flat at four to six '
           'gigawatts. Everything gas currently does has to be done by '
           'something else eventually, and almost all of it lands on that '
           'line. When people ask what the hard part of decarbonising '
           'electricity is, the honest answer is that it is not generating '
           'the energy. It is being able to change your mind quickly at six '
           'in the evening in January.')],
         items=[
          ('What happens if supply and demand differ for too long?',
           ['Prices rise', 'Equipment disconnects itself', 'Imports increase', 'Storage discharges'],
           1,
           'The frequency moves far enough that things disconnect to '
           'survive.',
           {0: 'Prices are not what he describes happening.', 2: 'Imports are a line he says barely moves.', 3: 'Storage discharge is not the consequence he names.'}),
          ('The daily swing in demand on this chart is about',
           ['10 GW', '20 GW', '26 GW', '46 GW'], 1,
           'From twenty-six at four in the morning to forty-six at '
           'four in the afternoon.',
           {0: 'Smaller than the swing he describes.', 2: 'Twenty-six is the overnight trough, not the swing.', 3: 'Forty-six is the afternoon peak, not the swing.'}),
          (
           'What does the engineer say the real problem with '
           'renewables is?',
           ['They are unpredictable', 'They are predictably in the wrong place in time', 'They are expensive', 'They are too small'],
           1,
           'He explicitly corrects the assumption about '
           'unpredictability.',
           {0: 'He corrects this assumption explicitly.', 2: 'Cost is not his subject in the control room.', 3: 'Size is not what he says the problem is.'}),
          ('Why can solar not contribute to the winter evening peak?',
           ['Panels are too few', 'There is no sun at that hour', 'The grid cannot take it', 'Storage is full'],
           1, 'No quantity multiplied by zero helps, as he puts it.',
           {0: 'He says no installed capacity would help.', 2: 'Grid capacity is not the limit he names.', 3: 'Storage is the line he says must grow, not the '
               'obstacle.'}),
          ('The two services gas provides are energy and',
           ['frequency', 'the ability to change output quickly', 'voltage', 'reserve capacity'],
           1,
           'The area under the curve and the steepness of the curve.',
           {0: 'Frequency is what he keeps steady, not a service gas '
               'sells.', 2: 'Voltage is not among the two services he names.', 3: 'Reserve capacity is part of being there, not the '
               'second service.'}),
          ('He says the hard part of decarbonising electricity is',
           ['generating the energy', 'building the wires', 'changing output quickly at the peak', 'the cost'],
           2,
           'Being able to change your mind quickly at six in the '
           'evening in January.',
           {0: 'He says generating the energy is not the hard part.', 1: 'Wires are not what he names as the difficulty.', 3: 'Cost is not his answer to the question.'})])],
   speak=dict(
    part='Part 3', focus='Keeping the lights on',
    intro=('Four or five sentences. These questions invite speculation; mark '
           'clearly where you are speculating.'),
    qs=['How important is it that electricity is always available?',
        'Should people be paid to use less electricity at busy times?',
        'Who should be responsible when the power fails?',
        'Do you think people understand how the electricity system works?'],
    shape=[('answer', 'More important than almost anything else we pay '
            'for.'),
           ('support', 'Everything else assumes it, including water and '
            'phones.'),
           ('follow-up', 'So a failure is never only a failure of '
            'electricity.'),
           ('support', 'I would guess people underestimate that.'),
           ('follow-up', 'Though I am speculating, because we have had very '
            'few failures to learn from.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='One day of demand and supply',
         prompt=('The graph below shows electricity demand and four sources '
                 'of supply across one winter day. Summarise the information '
                 'by selecting and reporting the main features, and make '
                 'comparisons where relevant. Write at least 150 words.'),
         figure=_DAY,
         model=[
          'The line graph shows electricity demand and four sources of supply '
          'across a single winter day, measured in gigawatts. Overall, demand '
          'varies by about twenty gigawatts between its overnight low and its '
          'late-afternoon peak, and gas is the source that moves to match it, '
          'while wind runs broadly opposite to demand and solar contributes '
          'only in the middle of the day.',
          'Demand begins at 28 GW at midnight, falls slightly to 26 GW by four '
          'in the morning and then climbs steeply, reaching 38 GW at eight and '
          'peaking at 46 GW at four in the afternoon before falling back to 31 '
          'GW by midnight.',
          'Two sources behave in the opposite way to this. Wind is at its '
          'strongest overnight, between 14 and 15 GW, and declines through the '
          'day to a low of 6 GW at eight in the evening. Solar is absent for '
          'most of the period, rising to 11 GW at midday and returning to zero '
          'by late afternoon, several hours before demand peaks.',
          'Gas, by contrast, follows demand closely. It is lowest overnight at '
          '7 to 9 GW, rises to 19 GW by eight in the morning, falls back to 16 '
          'GW at midday as solar arrives, and then more than doubles to 31 GW '
          'for the evening peak. Imports and storage remain almost constant '
          'throughout, between 4 and 6 GW.'],
         notes=[
          'Five series is too many to take one at a time. The grouping here is '
          'by behaviour, not by name: demand first because the others are '
          'described against it, then the two that run opposite to it, then '
          'the one that follows it, then the one that does nothing.',
          'That grouping is a judgement about the data and it is the whole of '
          'the Coherence mark on a chart like this. Grouping by fuel type '
          'would put wind and solar together for a reason that has nothing to '
          'do with what the chart shows.',
          'The flat line is reported instead of ignored. A series that does '
          'not move is still a main feature, and leaving it out is a coverage '
          'failure under Task Achievement.'],
         criterion=[('Grouping five series by behaviour, not by name',
                     'Coherence and Cohesion'),
                    ('Describing later series against the first',
                     'Coherence and Cohesion'),
                    ('Reporting the series that does not move',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing one series against another',
    fix=dict(
     text=('Coal generation fell steadily, whereas wind generation rose. In '
           '2010 coal provided five times as much electricity than wind. By '
           '2022 the position had reversed, and wind provided more than twice '
           'as much as coal. The total of both sources remained almost '
           'unchanged, which mean the one simply replaced the other.'),
     faults=[('five times as much electricity than wind',
              'five times as much electricity as wind',
              'The pattern is as much as, not as much than.'),
             ('which mean the one simply replaced the other',
              'which suggests that one largely replaced the other',
              ('Two faults: the verb must be singular, and mean states as fact '
               'a substitution the chart can only suggest.')),
             ('The total of both sources remained almost unchanged',
              ('The combined total of the two sources remained almost '
               'unchanged'),
              ('The total of both sources is ambiguous between the sum and '
               'each one\'s total.'))]),
    explain=('When several lines share a chart, each one after the first '
             'should be described in relation to what you have already '
             'established. These patterns do that and remove the need for a '
             'separate sentence of comparison.'),
    examples=['Gas follows demand closely, rising and falling with it.',
              'Wind runs broadly opposite to demand throughout the period.',
              'Solar is absent for most of the day, peaking several hours '
              'before demand does.',
              'Imports and storage remain almost constant while everything '
              'else moves.'],
    task='Rewrite each pair of facts as one sentence of comparison.',
    items=[('Demand peaks at 16:00. Wind is lowest at 20:00.',
            'Wind reaches its minimum shortly after demand peaks.'),
           ('Solar peaks at 12:00. Demand peaks at 16:00.',
            'Solar peaks four hours before demand does.'),
           ('Gas rises in the evening. Demand rises in the evening.',
            'Gas rises with demand through the evening.'),
           ('Imports stay at 4-6 GW. Other sources vary widely.',
            'Imports and storage vary hardly at all compared with the other '
            'sources.'),
           ('Wind is high at night. Demand is low at night.',
            'Wind is at its highest when demand is at its lowest.')]),
   vocab=[('gigawatt', 'a thousand million watts'),
          ('peak demand', 'the highest demand of the day'),
          ('trough', 'the lowest point of a cycle'),
          ('balancing', 'keeping supply and demand equal moment by moment'),
          ('frequency', 'the rate of the alternating current, held near 50 '
           'Hz'),
          ('ramp', 'a rapid change in output'),
          ('installed capacity', 'the maximum a generator could produce'),
          ('intermittent', 'available only at some times')],
   expr=[('runs broadly opposite to', 'relates one series to another'),
         ('by contrast', 'marks a change of behaviour between series'),
         ('remain almost constant throughout',
          'reports a flat series as a finding'),
         ('several hours before demand peaks',
          'compares timing, not value')],
   trans=['overall', 'by contrast', 'then', 'throughout'],
  ),

  dict(
   sub='Why storage is the hard part',
   step=4,
   read=[
    dict(heading='Four hours, four days, four weeks',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 42-48',
         paras=[
          'Discussions of electricity storage are made confusing by a word '
          'that conceals three different problems. A battery, a pumped hydro '
          'scheme and a store of hydrogen are all called storage, and they '
          'solve requirements that differ by orders of magnitude in duration. '
          'Nothing useful can be said about whether storage is solved until '
          'the question is asked separately for each.',
          'The first requirement is measured in hours: demand peaks '
          'for three or four hours in the early evening and solar '
          'output ends before it. This is the problem lithium '
          'batteries address, and it is close to solved: costs have '
          'fallen by roughly ninety per cent since 2010, installation '
          'is now routine, and the economics work without support in '
          'several markets. When commentators say storage costs are '
          'collapsing, this is the storage they mean.',
          'The second requirement is measured in days. Still, cold, cloudy '
          'weather can sit over a region for a week, during which wind and '
          'solar together may deliver a fifth of their usual output. Meeting a '
          'week of demand with lithium batteries would require a quantity of '
          'cells that does not exist and, at current production rates, could '
          'not be built this decade. This is a different problem that happens '
          'to share a name with the first.',
          'The third requirement is measured in weeks and seasons. Demand for '
          'heat is concentrated in winter and solar output in summer, and no '
          'battery technology is a candidate for moving energy across that '
          'gap, because the cost of a store is roughly proportional to the '
          'energy held and the energy involved is enormous. The candidates '
          'here are hydrogen, thermal stores and, in practice, keeping some '
          'gas plant and running it rarely.',
          'The economics change character as duration rises, and this is the '
          'point most often missed. A four-hour battery is used every day, so '
          'its capital cost is spread over three hundred and sixty-five cycles '
          'a year. A store sized for a two-week wind drought might be used '
          'fully twice in a decade. Identical capital costs produce wholly '
          'different costs per unit delivered, and a technology that is cheap '
          'at one duration can be absurd at another.',
          'This explains an otherwise puzzling feature of the policy debate. '
          'Advocates cite battery costs, which are genuinely falling fast, in '
          'support of claims about system reliability, which depend on the '
          'second and third requirements. Critics cite the impossibility of '
          'seasonal battery storage in support of claims that renewables '
          'cannot work, which depends on the first. Both are answering a '
          'question the other is not asking.',
          'It is worth adding what the three requirements do to one another, '
          'because they are not independent. Solving the first cheaply makes '
          'the second worse in one respect: a system with abundant four-hour '
          'storage will run its conventional plant less often, which means '
          'that plant earns less and is likelier to close, which removes the '
          'very capacity the multi-day problem relies on. The economics of '
          'rare use are hostile to anything that must simply be present.',
          'There is also an asymmetry in how the three are discussed. '
          'The first has a product, a price list and an industry, so '
          'it generates announcements; the third has none of those and '
          'generates papers. Attention in this field follows the '
          'availability of something to sell, and a reader who tracks '
          'the volume of coverage will form an impression of progress '
          'that is roughly the inverse of where the difficulty lies.',
          'The honest summary is that the short-duration problem is solved, '
          'the multi-day problem has candidate solutions at uncertain cost, '
          'and the seasonal problem currently has no answer that anybody has '
          'demonstrated at scale. Those three sentences are compatible with '
          'optimism and with pessimism, which is why both camps find it '
          'convenient to use one word for all three.',
          'What follows practically is that the value of a storage asset '
          'cannot be read from its cost per kilowatt-hour, the figure that '
          'dominates the reporting. It depends on how often the asset will be '
          'used, which depends on the shape of the gap it is filling, which is a property of the weather and the demand curve, where everybody looks for one of the technology.',
                ('That last point has an awkward corollary for planning. The '
                 'assets most valuable in a seasonal gap are the ones used '
                 'least often, and an asset used twice a year cannot recover '
                 'its cost from the market as markets are currently designed. '
                 'Somebody has to pay for capacity that earns almost nothing '
                 'and is indispensable for a fortnight, which is an argument '
                 'about institutions rather than about technology.')],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['Hours: close to solved', 'Days: no answer at scale', 'Seasons: a different problem', 'Why the debate is confused'],
           0,
           'Lithium batteries, costs down ninety per cent, economics '
           'working without support.',
           {1: 'Days is paragraph 3, with the still, cold week.', 2: 'Seasons is paragraph 4, with heat in winter.', 3: 'Why the debate is confused is paragraph 6.'}),
          ('Choose the best heading for paragraph 5.',
           ['Hours: close to solved', 'Why duration changes the economics', 'Seasons: a different problem', 'What follows practically'],
           1,
           'A daily cycle spreads capital cost over 365 uses; a '
           'decadal one does not.',
           {0: 'Hours: close to solved is the heading for paragraph 2.', 2: 'Seasons is paragraph 4, with heat in winter.', 3: 'What follows practically is paragraph 10.'}),
          ('Choose the best heading for paragraph 6.',
           ['Why duration changes the economics', 'Both sides answer different questions', 'The honest summary', 'What follows practically'],
           1, 'Advocates cite one requirement and critics another.',
           {0: 'Why duration changes the economics is the heading for '
               'paragraph 5.', 2: 'The honest summary is paragraph 9.', 3: 'What follows practically is paragraph 10.'}),
          ('The writer believes storage is a solved problem.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 7: the seasonal problem has no answer '
           'demonstrated at scale.',
           {0: 'Yes would need a solution; paragraph 7 says the '
               'seasonal problem has none at scale.', 2: 'Not Given is wrong because storage is assessed.'}),
          ('The writer believes renewable energy cannot work.',
           ['Yes', 'No', 'Not Given'], 1,
           'He attributes that claim to critics and says it rests on '
           'the wrong requirement.',
           {0: 'Yes would need that conclusion; he attributes it to '
               'critics and answers it.', 2: 'Not Given is wrong because the claim is named and '
               'judged.'}),
          ('Battery costs have fallen by roughly ____________ per cent since '
           '2010.', None, 'ninety',
           'Paragraph 2, which is the figure commentators are quoting.'),
          ('The cost of a store is roughly proportional to the ____________ '
           'held.', None, 'energy',
           'Paragraph 4, which is why batteries are not candidates for '
           'seasonal storage.')])],
   listen=[
    dict(heading='A lecture on storage duration', part='Part 4',
         task='A lecture on three storage problems · multiple choice', band='l4',
         qtype='Questions 49-54',
         script=[
          ('Lecturer', 'I am going to ban a word for the next forty minutes. '
           'The word is storage, used on its own. You may say four-hour '
           'storage, multi-day storage or seasonal storage, and the reason is '
           'that these are three unrelated engineering problems that we have '
           'carelessly given one name.'),
          ('Lecturer', 'Problem one: hours. The evening peak lasts three to '
           'four hours and solar has stopped. Lithium batteries do this, the '
           'cost has fallen about ninety per cent since 2010, and in several '
           'markets they are built without any support at all. If somebody '
           'tells you storage costs are collapsing, they are telling you the '
           'truth about this problem and nothing about the others.'),
          ('Lecturer', 'Problem two: days. A still, cold, overcast week. Wind '
           'and solar at perhaps a fifth of normal for seven days. To cover '
           'that with lithium you would need a quantity of cells that does not '
           'exist and cannot be manufactured this decade at current rates. '
           'There are candidates — hydrogen, compressed air, long-duration '
           'flow batteries — and none of them has been demonstrated at the '
           'scale required.'),
          ('Lecturer', 'Problem three: seasons. Heat demand is in January and '
           'solar output is in June. No battery is even a candidate, because '
           'the cost of a store scales with the energy you put in it and the '
           'energy here is enormous. Realistically this is hydrogen, thermal '
           'storage, or keeping gas plant and running it for forty hours a '
           'year.'),
          ('Lecturer', 'Now the point I actually want you to leave with, '
           'which is about economics. A four-hour '
           'battery cycles every day: three hundred and sixty-five uses a '
           'year, so its capital cost is divided by a large number. A store '
           'built for a two-week wind drought might be used fully twice in a '
           'decade. Same capital, utterly different cost per unit delivered.'),
          ('Lecturer', 'Which means you cannot evaluate a storage asset from '
           'its cost per kilowatt-hour, and that is the number every article '
           'quotes. What matters is how often it runs, and that is set by the '
           'weather and the demand curve, not by the technology.'),
          ('Lecturer', 'And one interaction that catches people. Solving '
           'problem one well makes problem two harder. Fill a system with '
           'four-hour batteries and your gas plant runs less, earns less and '
           'closes — and it was the thing covering the still fortnight. The '
           'economics of being rarely used are brutal for anything whose job '
           'is simply to be there.'),
          ('Lecturer', 'So: problem one solved, problem two has candidates at '
           'uncertain cost, problem three has nothing demonstrated. Hold all '
           'three sentences at once and you will be better informed than '
           'almost everybody arguing about this in public.')],
         items=[
          ('Why does the lecturer ban the word storage on its own?',
           ['It is imprecise about cost', 'It names three unrelated problems', 'It is a marketing term', 'It excludes hydrogen'],
           1, 'Hours, days and seasons, which he treats separately.',
           {0: 'Imprecision about cost follows from the confusion, not '
               'the ban.', 2: 'He treats it as a careless habit, not a marketing '
               'term.', 3: 'Hydrogen is one of the candidates he names.'}),
          (
           'What does he say about claims that storage costs are '
           'collapsing?',
           ['They are false', 'They are true of the four-hour problem only', 'They are true of all three', 'They are out of date'],
           1, 'True about problem one and nothing about the others.',
           {0: 'He says the claim is true of the first problem.', 2: 'He says it tells you nothing about the other two.', 3: 'The figures he quotes are current.'}),
          ('For the multi-day problem he says the candidates',
           ['do not exist', 'have not been demonstrated at scale', 'are too expensive to consider', 'are already built'],
           1,
           'Hydrogen, compressed air and long-duration flow batteries.',
           {0: 'He names three candidates, so they exist.', 2: 'He calls the cost uncertain rather than prohibitive.', 3: 'None has been built at the scale required.'}),
          ('Why is no battery a candidate for seasonal storage?',
           ['The chemistry degrades', 'Cost scales with energy stored', 'The land requirement', 'Safety regulation'],
           1, 'And the energy involved across a season is enormous.',
           {0: 'Degradation is not the reason he gives.', 2: 'Land is not among the obstacles he names.', 3: 'Safety regulation is not mentioned.'}),
          (
           'A store built for a two-week wind drought might be used '
           'fully',
           ['every day', 'twice a decade', 'once a year', 'never'], 1,
           'Which is why identical capital produces a different cost '
           'per unit.',
           {0: 'Daily use is the four-hour battery.', 2: 'More often than he says a drought store would run.', 3: 'It would be used, if rarely.'}),
          (
           'What does he say determines how often a storage asset '
           'runs?',
           ['The technology', 'The weather and the demand curve', 'The regulator', 'The cost per kilowatt-hour'],
           1,
           'Not the technology, which is why the quoted cost figure '
           'misleads.',
           {0: 'He says explicitly that it is not the technology.', 2: 'The regulator is not part of his answer.', 3: 'Cost per kilowatt-hour is the figure he says misleads.'})])],
   speak=dict(
    part='Part 3', focus='Reliability in a renewable system',
    followup=[(('You say shortages are possible. Is it reasonable to expect '
                'electricity at all times?'),
               ('It is reasonable to expect it for the things that matter and '
                'expensive to guarantee it for everything. We already accept '
                'interruption in water pressure and in trains. The honest '
                'conversation is about which loads can be shifted by an hour, '
                'and that conversation is easier than building the last ten '
                'per cent of capacity.')),
              (('Should people accept occasional shortages to reduce '
                'emissions?'),
               ('Only if they are asked rather than told, and only where the '
                'burden is not concentrated on the people who cannot work '
                'round it. A planned, paid, voluntary reduction at peak '
                'already works in industry; an unplanned cut falls hardest on '
                'whoever is at home and ill.')),
              (('What should a government do about a problem with no solution '
                'yet?'),
               ('Fund several candidate answers, build what is already '
                'deployable, and avoid committing the whole system to one bet. '
                'The error to avoid is the one that looks decisive: picking '
                'the winning technology early and discovering in fifteen years '
                'that the subsidy went to the wrong one.'))],
    intro=('Four or five sentences. Try to distinguish once between two '
           'things a single word is covering.'),
    qs=['Can a country run entirely on renewable energy?',
        'Is it reasonable to expect electricity to be available at all '
        'times?',
        'Should people accept occasional shortages to reduce emissions?',
        'What should a government do about a problem with no solution yet?'],
    shape=[('answer', 'It depends which part of the problem you mean.'),
           ('support', 'Covering an evening is largely solved now.'),
           ('follow-up', 'Covering a still fortnight in January is not.'),
           ('support', 'So the honest answer is partly, and not yet entirely.'),
           ('follow-up', 'Which is less satisfying than either of the '
            'answers people usually give.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Brainstorm and outline: should countries keep fossil fuel '
                 'plants?',
         prompt=('Some people argue that countries should close all fossil '
                 'fuel power stations as soon as possible. Others say some '
                 'should be kept as a reserve. Do not write the essay yet. '
                 'Brainstorm, outline, and then outline the strongest '
                 'objection to your own position.'),
         plan=('A small reserve should be kept and run rarely, until '
               'long-duration storage exists',
               [('The gap being covered is a rare one, and rarity changes the '
                 'argument',
                 ['a plant run forty hours a year emits very little',
                  'the alternative is not zero emissions but unserved '
                  'demand']),
                ('Keeping a reserve is reversible; losing the capability is '
                 'not',
                 ['plants closed are not rebuilt when the gap reappears',
                  'the reserve can be retired once storage is '
                  'demonstrated'])]),
         notes=[
          'The plan names a condition — until long-duration storage exists — '
          'which converts a position people will attack into one they have to '
          'argue with. Conditions are the cheapest way to make a thesis '
          'defensible.',
          'The second idea is about reversibility, where the first was about emissions, so the two main ideas rest on different grounds. That is the test '
          'from unit 34 applied again.',
          'The task asks you to outline the objection as well. The strongest '
          'one is that a reserve kept for emergencies is reliably used for '
          'more than emergencies, and your essay is stronger for having met '
          'it than for having avoided it.'],
         criterion=[('A thesis with a condition attached', 'Task Response'),
                    ('Outlining the objection to your own position',
                     'Task Response')],
         instruct='  Produce the outline and the objection. You will write it '
                  'in cycle 5.',
         lines=12)],
   gram=dict(
    point='Separating senses of a single word',
    explain=('Many arguments are confused because one word covers several '
             'things. Naming the senses explicitly is a high-band move and '
             'takes one sentence.'),
    examples=['Storage covers three problems that differ by orders of '
              'magnitude in duration.',
              'The word is doing two jobs here and they should be '
              'separated.',
              'By cost they mean capital cost; by cost I mean cost per unit '
              'delivered.',
              'Reliability in the sense of hours and reliability in the sense '
              'of seasons are different claims.'],
    task='Split each sentence into the senses the key word is hiding.',
    items=[('Storage is getting cheaper.',
            'Four-hour storage is getting cheaper; seasonal storage has no '
            'demonstrated cost at all.'),
           ('Renewables are unreliable.',
            'Renewables are variable hour by hour and also vary across '
            'seasons, and these raise different problems.'),
           ('Energy is expensive.',
            'The unit price has risen and the total bill has risen, and these '
            'can move separately.'),
           ('The plant is needed.',
            'The plant is needed for forty hours a year, which is a different '
            'claim from being needed continuously.'),
           ('Capacity is sufficient.',
            'Installed capacity is sufficient; firm capacity available at the '
            'peak may not be.')]),
   vocab=[('duration', 'how long a store can deliver for'),
          ('cycle', 'one full charge and discharge of a store'),
          ('wind drought', 'an extended period of very low wind output'),
          ('seasonal', 'varying between summer and winter'),
          ('thermal store', 'a store that holds energy as heat'),
          ('flow battery', 'a battery storing energy in liquid tanks'),
          ('utilisation', 'how much of the time an asset is actually used'),
          ('orders of magnitude', 'factors of ten')],
   expr=[('I am going to ban a word', 'announces a distinction forcefully'),
         ('they are telling you the truth about this and nothing about the '
          'others', 'limits a true claim'),
         ('hold all three sentences at once',
          'asks for a position that is not a single slogan'),
         ('which is a property of the weather, not of the technology',
          'relocates where a variable comes from')],
   trans=['problem one', 'now the point', 'which means', 'so'],
  ),

  dict(
   sub='What the cheapest number hides',
   step=5,
   read=[
    dict(heading='Unit cost, system cost and the boundary between',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given, sentence completion and short answer',
         band='acad', qtype='Questions 55-61',
         paras=[
          'The claim that wind and solar are now the cheapest sources of '
          'electricity is repeated so often that it has stopped being read as '
          'a claim at all. It rests on a specific measure, the levelised cost '
          'of energy, and understanding what that measure includes and '
          'excludes is the difference between knowing something and repeating '
          'it.',
          'Levelised cost takes the lifetime cost of building and running a '
          'generator, divides it by the energy the generator is expected to '
          'produce over its life, and discounts both to a present value. It is '
          'a genuinely useful number and it is calculated honestly. On this '
          'measure onshore wind and utility solar are now cheaper than new gas '
          'in most of the world, and that result is robust.',
          'What the measure does not include is anything that happens outside '
          'the generator’s own boundary. It does not include the transmission '
          'built to reach a windy place, the reinforcement of the network to '
          'carry a variable flow, the reserve held against a still week, or '
          'the cost of running a gas plant at low utilisation so that it is '
          'there when needed. These costs are real, they are caused by the '
          'addition of the generator, and they are paid by somebody.',
          'They are known collectively as integration costs, and estimates of '
          'their size vary by more than an order of magnitude, which should '
          'itself be informative. At low shares of variable generation they '
          'are small, perhaps a few per cent. At shares above half they rise '
          'sharply and non-linearly, because the system must increasingly be '
          'sized for conditions that occur rarely.',
          'The temptation at this point is to conclude that the headline claim '
          'is false. That is not right either, and the error is symmetrical '
          'with the first one. The comparison that excludes integration costs '
          'for renewables also excludes the system costs that conventional '
          'plant imposes, which are smaller but not zero: reserve is held '
          'against the failure of large units, and a system built around a few '
          'enormous generators needs different reinforcement than one built '
          'around many small ones.',
          'A further complication is that integration cost is not a property '
          'of a technology. It is a property of a technology in a particular '
          'system at a particular share. The same wind farm imposes almost no '
          'integration cost in a system with abundant hydro storage and a '
          'substantial one in an isolated system with none. A figure quoted '
          'without its system is not a figure.',
          'A reader may reasonably ask why, if all this is known, the simple '
          'comparison persists. Part of the answer is that it is the only '
          'figure that exists for every technology in every country on a '
          'consistent basis, and a flawed figure available everywhere beats a '
          'good figure available for three systems. Part of it is that both '
          'advocacy positions find it useful, which removes the constituency '
          'that would otherwise complain.',
          'There is also a structural reason. Levelised cost is produced by '
          'organisations that model generators, and integration cost requires '
          'modelling a whole system hour by hour across a weather year. The '
          'second is perhaps fifty times the work and cannot be done without '
          'detailed data that system operators hold and do not always publish. '
          'The simple number is not merely more quotable; it is very much '
          'cheaper to produce.',
          'This is why serious analysis has largely abandoned comparing '
          'technologies and compares portfolios instead: not what does a '
          'megawatt-hour of wind cost, but what does this whole system cost, '
          'with this mix, meeting this demand, in this weather year. The '
          'answers are less quotable and considerably more useful, and they '
          'rarely favour either the all-renewable or the keep-everything '
          'position.',
          'The practical lesson is narrower than either camp would like. '
          'Levelised cost is a good measure of what it says it measures and a '
          'poor measure of what people use it for. Anybody comparing whole systems needs a different number, and the '
          'availability of a simple figure is not a reason to answer a '
          'question it was not built to answer.'],
         items=[
          ('Which paragraph explains what levelised cost measures?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'],
           1,
           'Lifetime cost divided by lifetime output, discounted to '
           'present value.',
           {0: 'Paragraph 1 introduces the claim and the measure.', 2: 'Paragraph 3 lists what the measure leaves out.', 3: 'Paragraph 4 gives the size of integration costs.'}),
          (
           'Which paragraph argues that the critics make a symmetrical '
           'error?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           2,
           'Conventional plant also imposes system costs that the '
           'comparison excludes.',
           {0: 'Paragraph 3 lists what the measure leaves out.', 1: 'Paragraph 4 gives the size of integration costs.', 3: 'Paragraph 6 says a figure must be quoted with its '
               'system.'}),
          (
           'Which paragraph says a figure must be quoted with its '
           'system?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'],
           2,
           'The same wind farm imposes different integration costs in '
           'different systems.',
           {0: 'Paragraph 4 gives the size of integration costs.', 1: 'Paragraph 5 argues that the critics make a symmetrical '
               'error.', 3: 'Paragraph 7 explains why the simple comparison '
               'persists.'}),
          (
           'The writer believes the claim that renewables are cheapest '
           'is false.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 5 says that conclusion is not right either and '
           'calls the error symmetrical.',
           {0: 'Yes would need falsity; paragraph 5 calls that error '
               'symmetrical with the first.', 2: 'Not Given is wrong because the claim is tested.'}),
          (
           'The writer believes levelised cost is calculated '
           'dishonestly.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 calls it genuinely useful and honestly '
           'calculated.',
           {0: 'Yes would need dishonesty; paragraph 2 calls the '
               'calculation honest.', 2: 'Not Given is wrong because the measure is rated.'}),
          ('Costs arising outside the generator’s boundary are known '
           'collectively as ____________ costs.', None, 'integration',
           'Paragraph 4, where estimates vary by more than an order of '
           'magnitude.'),
          ('What does serious analysis now compare instead of technologies?',
           None, 'portfolios',
           'Paragraph 7: whole systems with a given mix, demand and weather '
           'year.')])],
   listen=[
    dict(heading='Two analysts disagree about system cost', part='Part 4',
         task='A recorded exchange · multiple choice', band='l4',
         qtype='Questions 62-67',
         script=[
          ('Chair', 'Dr Oyelowo-Brandt publishes levelised cost estimates. '
           'Professor Ingrassia has criticised their use. Professor '
           'Ingrassia.'),
          ('Ingrassia', 'My criticism is not of the number. It is calculated '
           'properly and I have never said otherwise. It is of the sentence '
           'built on it, which is that wind is the cheapest source of '
           'electricity. Cheapest source implies a comparison of systems, and '
           'the number is a comparison of generators.'),
          ('Oyelowo-Brandt', 'I accept that entirely, and I would add that we '
           'say so in the methodology every year and nobody reads it. What I '
           'resist is the next move, where integration costs are produced as '
           'though they settled the matter. The range in that literature is a '
           'factor of twenty.'),
          ('Ingrassia', 'The range is embarrassing and it is also '
           'informative. It is wide because integration cost is not a property '
           'of a technology. It is a property of a system at a share. Quoting '
           'it without the system is as bad as quoting your number without the '
           'boundary.'),
          ('Oyelowo-Brandt', 'Then we are in violent agreement and the '
           'disagreement is about who is misusing which figure.'),
          ('Ingrassia', 'Partly. There is one substantive difference. I think '
           'the non-linearity matters more than you allow. Below about thirty '
           'per cent variable share, integration costs are small and your '
           'number is nearly right. Above sixty per cent they rise steeply, '
           'because you are sizing the system for conditions that happen for '
           'ten days a decade.'),
          ('Oyelowo-Brandt', 'That I would qualify, not dispute. The '
           'steepness depends on what else is in the system — interconnection, '
           'hydro, flexible demand. In a well-connected system with storage '
           'the curve is far flatter, and treating sixty per cent as a '
           'universal threshold imports an assumption about the system you '
           'have just told me not to leave out.'),
          ('Ingrassia', 'You have me there, and I will not pretend otherwise.'),
          ('Ingrassia', 'May I ask you something I have never asked in '
           'public? Why does your organisation not publish a system cost '
           'alongside the generator cost?'),
          ('Oyelowo-Brandt', 'Because it is roughly fifty times the work and '
           'it requires hourly system data we do not hold for most of the '
           'countries we cover. We could publish it for perhaps eight '
           'markets. The comparison people want is across sixty.'),
          ('Ingrassia', 'That is a better answer than the one I had assumed, '
           'which was that the simple number is more useful commercially.'),
          ('Oyelowo-Brandt', 'That is also true and I would not pretend '
           'otherwise.'),
          ('Oyelowo-Brandt', 'Where does that leave somebody reading a '
           'newspaper?'),
          ('Ingrassia', 'With one sentence, I hope. Levelised cost tells you '
           'what it costs to build and run one generator, and nothing about '
           'what it costs to run a country. Anybody who crosses that gap in a '
           'single sentence is selling you something, whichever direction they '
           'are going in.')],
         items=[
          ('Ingrassia says his criticism is of',
           ['the calculation', 'the sentence built on the number', 'the data sources', 'the discount rate'],
           1, 'He states that the number is calculated properly.',
           {0: 'He says the calculation is done properly.', 2: 'Data sources are not what he criticises.', 3: 'The discount rate is not his objection.'}),
          ('What does Oyelowo-Brandt say about the methodology?',
           ['It is confidential', 'It states the limits and nobody reads it', 'It is revised annually', 'It excludes gas'],
           1, 'She accepts the criticism and adds this.',
           {0: 'The methodology is published, not confidential.', 2: 'Annual revision is not what she says about it.', 3: 'Gas is included in the comparison.'}),
          ('The range of integration cost estimates is a factor of',
           ['two', 'five', 'ten', 'twenty'], 3,
           'Which Ingrassia calls embarrassing and also informative.',
           {0: 'Far narrower than the range he reports.', 1: 'Still narrower than the factor he gives.', 2: 'Half the factor he names.'}),
          ('Ingrassia says integration cost is a property of',
           ['a technology', 'a system at a share', 'a country', 'a weather year'],
           1,
           'Which is why quoting it without the system is as bad as '
           'the error he criticised.',
           {0: 'He says explicitly that it is not a property of a '
               'technology.', 2: 'A country is not the unit he names.', 3: 'A weather year is an input, not what it belongs to.'}),
          (
           'What does Oyelowo-Brandt say about the sixty per cent '
           'threshold?',
           ['It is too low', 'It assumes a particular system', 'It is well established', 'It applies only to solar'],
           1,
           'Interconnection, hydro and flexible demand flatten the '
           'curve.',
           {0: 'She does not say the threshold is too low.', 2: 'She says it imports an assumption, so not established.', 3: 'She discusses variable share in general, not solar '
               'alone.'}),
          (
           'His closing advice to a newspaper reader is that levelised '
           'cost says nothing about',
           ['the price of gas', 'what it costs to run a country', 'future technology', 'subsidy levels'],
           1,
           'Anybody crossing that gap in one sentence is selling you '
           'something.',
           {0: 'The gas price is an input to the measure.', 2: 'Future technology is not what he says it omits.', 3: 'Subsidy levels are not his point.'})])],
   speak=dict(
    part='Part 3', focus='Comparing costs honestly',
    sounds=[('Units and their numbers form one chunk: a hundred and twenty '
             'kilowatt hours, four pence a unit. The unit word is unstressed '
             'and the figure is not.'),
            ('This unit\'s technical words have one strong syllable each: '
             'inTERmittent, transMISsion, caPAcity, reNEWable. Say each one in '
             'a phrase, never alone.'),
            ('The word energy is stressed on the first syllable and the word '
             'efficiency on the second, which is a pair candidates routinely '
             'swap.'),
            ('Practise the sentence the cost has fallen but the bill has not, '
             'which needs two stresses and no more, and is the sentence this '
             'unit is about.'),
            ('Record yourself on whether a country can run on renewables. '
             'Listen only for your technical vocabulary and check the strong '
             'syllable in each word.')],
    intro=('The hardest turn in the unit. Say once what a figure you are '
           'using does not include.'),
    qs=['Why do you think simple figures are so often quoted?',
        'Should journalists be required to explain what a statistic '
        'excludes?',
        'Is it possible to compare two very different things fairly?',
        'How should a government decide between energy technologies?'],
    shape=[('answer', 'Because a simple figure is the only kind that '
            'travels.'),
           ('support', 'A number with three conditions attached will not fit '
            'in a headline.'),
           ('follow-up', 'So the conditions get dropped and the number '
            'survives.'),
           ('support', 'I would not blame journalists alone for that.'),
           ('follow-up', 'The people producing the figures know how it will '
            'be used.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should countries keep fossil fuel power stations?',
         prompt=('Write the essay you planned in cycle 4. Some people argue '
                 'that countries should close all fossil fuel power stations '
                 'as soon as possible. Others say a small number should be '
                 'kept as a reserve. Discuss both views and give your own '
                 'opinion. Write at least 250 words.'),
         model=[
          'Both sides of this argument are usually arguing about a plant that '
          'runs continuously, and the plant actually in question runs for '
          'about forty hours a year. Once that is clear, much of the '
          'disagreement turns out to be about different things, and my own '
          'position is that a small reserve should be retained and run rarely '
          'until long-duration storage has been demonstrated at scale.',
          'The case for closing everything is straightforward and partly '
          'right. Emissions are cumulative, every year of delay adds to a '
          'total that does not decline, and an industry permitted to keep '
          'assets open will always produce a reason why this year is not the '
          'year. There is also a credibility argument: a country that keeps '
          'its coal plants while instructing others to close theirs is not '
          'persuasive.',
          'The case for a reserve rests on what happens in a still, cold week '
          'in winter. Wind and solar may deliver a fifth of their usual output '
          'for seven consecutive days, and no storage technology has yet been '
          'built at the scale that period requires. The alternative to a '
          'reserve, in those conditions, is not lower emissions; it is demand '
          'that goes unserved, which in a cold week is a question of mortality.',
          'The strongest objection to my position is that a reserve kept for '
          'emergencies is reliably used for more than emergencies, and the '
          'history of such arrangements supports it. I think the answer is design: a running-hours limit written into the '
          'licence, published annually, with the reserve retired automatically '
          'once multi-day storage is demonstrated. If that condition is never '
          'met, the objection was right and the plants stay, which is a cost I '
          'would accept over the alternative.',
          'What makes this tractable is that the two positions disagree about '
          'a quantity, not a principle. Nobody is defending forty hours a year '
          'of gas as a good thing. The argument is about whether we can yet do '
          'without it, and that is a question evidence can settle.'],
         notes=[
          'Structure 9: position, objection, rebuttal. The objection is given '
          'its full force — with the admission that history supports it — and the rebuttal is a design.',
          'The opening sentence reframes the question by naming what is '
          'actually at stake. Compare an opening that restates the prompt: '
          'this one has already done work by the end of its first line.',
          'The concession in paragraph 4 — if the condition is never met, the '
          'objection was right — is the most confident sentence in the essay. '
          'A position that states its own defeat condition reads as '
          'thought-through.'],
         model65=[
                  'Some people argue that countries should close all '
                  'fossil fuel power stations immediately. I think '
                  'this would be unwise, although the direction is '
                  'right.',
                  'The reason for closing them is obvious and serious. '
                  'Burning coal and gas is the largest single cause of '
                  'the warming now being measured, and every year of '
                  'delay adds to a total that cannot be removed '
                  'easily.',
                  'But electricity has to arrive when it is needed. '
                  'Wind and solar are now the cheapest sources to '
                  'build, yet demand peaks in the early evening when '
                  'solar output has ended. Storage can cover hours but '
                  'not a still, cold week, and no country has '
                  'demonstrated a seasonal answer at scale.',
                  'I think countries should build renewable capacity '
                  'as fast as possible and keep a small number of gas '
                  'stations available for the hours when nothing else '
                  'can supply. Closing them before the replacement '
                  'exists would cause failures that would turn opinion '
                  'against the whole transition.',
                  ],
         gap65=[
                'It separates the cost of generating electricity from '
                'the cost of supplying it reliably, and shows that '
                'both claims are true.',
                'It distinguishes the daily storage problem from the '
                'seasonal one, because only one of them is solved.',
                'It says what the keeping of a gas station is actually '
                'buying, so the recommendation is costed.',
                ],
         criterion=[('Position, objection, rebuttal with the objection at '
                     'full strength', 'Task Response'),
                    ('A rebuttal that is a design, not a denial',
                     'Task Response'),
                    ('Stating the condition under which you would be wrong',
                     'Task Response')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=20)],
   gram=dict(
    point='Stating what a figure excludes',
    explain=('Any argument that uses numbers is strengthened by one clause '
             'saying what the number leaves out. It costs very little and it '
             'is the clearest signal of a careful writer an examiner can '
             'read.'),
    examples=['The figure covers the generator and excludes everything '
              'outside its boundary.',
              'This measures what it costs to build one plant, not what it '
              'costs to run a system.',
              'The comparison leaves out the reserve held against a still '
              'week.',
              'A figure quoted without its system is not a figure.'],
    task='Add a clause naming what each figure excludes.',
    items=[('Wind is the cheapest source of electricity.',
            'Wind is the cheapest generator to build and run, excluding the '
            'network and reserve it requires.'),
           ('Solar costs have fallen ninety per cent.',
            'The cost of solar panels has fallen ninety per cent, which is '
            'not the same as the cost of a solar-powered system.'),
           ('Batteries are cheap now.',
            'Four-hour batteries are cheap now; nothing is known about the '
            'cost of seasonal storage.'),
           ('Gas is expensive.',
            'Gas is expensive per unit of fuel, before counting what the '
            'flexibility it provides is worth.'),
           ('This technology is the cheapest option.',
            'This technology is cheapest on a per-generator measure, in a '
            'system of the kind assumed.')]),
   vocab=[('levelised cost', 'lifetime cost divided by lifetime output'),
          ('integration cost', 'the cost a generator imposes on the system '
           'around it'),
          ('transmission', 'moving electricity at high voltage over '
           'distance'),
          ('non-linear', 'rising faster than in proportion'),
          ('portfolio', 'the whole mix of generation in a system'),
          ('scope', 'what a measure counts and what it leaves out'),
          ('firm capacity', 'generation that can be relied on at the peak'),
          ('unserved demand', 'demand that cannot be met')],
   expr=[('My criticism is not of the number. It is of the sentence built on '
          'it', 'separates a measure from its misuse'),
         ('we are in violent agreement',
          'notes that an apparent dispute is not one'),
         ('You have me there, and I will not pretend otherwise',
          'concedes a specific point without conceding the argument'),
         ('whichever direction they are going in',
          'applies a criticism to both sides at once')],
   trans=['on this measure', 'at this point', 'a further complication',
          'the practical lesson'],
  ),
 ],
 technique=dict(
  title='Five series: group by behaviour, not by name',
  body=('A chart with five lines cannot be described one line at a time: you '
        'will run to four hundred words and still have made no comparison. '
        'The move is to group, and the grouping must come from what the lines '
        'do, not from what they are called. On the day graph, wind and solar '
        'go together because they run against demand, not because they are '
        'both renewable; gas goes on its own because it follows demand; the '
        'flat line goes last and is still reported. Choose the anchor series '
        'first — usually the one everything else is described against — and '
        'the rest of the answer arranges itself.'),
  panel=[('Anchor', 'Name the series the others relate to, and describe it '
          'fully first. On the day graph that is demand.'),
         ('Group by behaviour', 'Put together the series that do the same '
          'thing: run against the anchor, follow it, or stay flat.'),
         ('One sentence of relation each', 'Every later series gets a clause '
          'tying it to the anchor. Runs opposite to, follows closely, peaks '
          'four hours earlier.'),
         ('Report the flat one', 'A line that does not move is a main '
          'feature. Omitting it is a coverage failure, not a stylistic '
          'choice.')],
  task='Look at the day graph again and write the four parts: your anchor and '
       'why, your groups, one relational clause for each series, and your '
       'sentence about the flat line.',
  qs=['Which series is the anchor, and why that one?',
      'Which series belong together, and on what behaviour?',
      'Write the relational clause for gas.',
      'Write the relational clause for solar.',
      'Write the sentence reporting imports and storage.']),
 outlining=dict(
  title='Fill the outline, write it, then outline the objection',
  body=('A plan you agree with is only half a plan. The exercise that moves '
        'students fastest at this level is to build the outline, then build a '
        'second outline for the strongest case against it, and only then '
        'write. You will usually find that one of your supports was answering '
        'the objection all along, in which case it belongs in a different '
        'paragraph, and sometimes that the objection is better than your '
        'position, in which case you have been saved forty minutes.'),
  frame=('A small fossil reserve should be kept until long-duration storage '
         'is demonstrated',
         [('The gap is rare, and rarity changes the calculation',
           ['forty hours a year emits very little',
            'the alternative is unserved demand, not zero emissions']),
          ('Keeping the capability is reversible; losing it is not',
           ['closed plants are not rebuilt when the gap returns',
            'the reserve retires automatically once storage exists'])]),
  task='Outline the strongest objection to the position above, then say where '
       'in your essay it should be met and why there.',
  qs=['What is the strongest single objection to the position?',
      'Which of the two main ideas does it attack?',
      'Should the objection be met in a body paragraph or its own?',
      'What would have to be true for the objection to win outright?'],
  answers=['a reserve kept for emergencies will be used for more than '
           'emergencies',
           'the second: it denies that the arrangement is really reversible',
           'its own paragraph, because meeting it requires a design, which a sentence cannot carry',
           'that running-hours limits are never enforced anywhere, which is '
           'checkable']),
 candos=['I can group five series on a chart by what they do',
         'I can report a flat series as a finding instead of skipping it',
         'I can separate three problems hiding behind one word',
         'I can state what a figure excludes in a single clause',
         'I can outline the objection to my own position before writing'],
 tip=('Before you write a Task 1 answer with four or more series, write the '
      'word anchor at the top of your page and name one. Everything else in '
      'the answer is described against it.'),
)
