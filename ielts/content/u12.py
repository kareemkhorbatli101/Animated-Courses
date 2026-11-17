# -*- coding: utf-8 -*-
"""Unit 12 - Money and Consumption. IELTS Volume 2, band 5.5."""

_LOW = dict(kind='pie',
            title='Household spending, lower-income group',
            sub='share of all spending in a year, per cent',
            slices=[('Housing and fuel', 34), ('Food', 22),
                    ('Transport', 13), ('Clothing', 7),
                    ('Leisure and eating out', 9), ('Everything else', 15)])

_HIGH = dict(kind='pie',
             title='Household spending, higher-income group',
             sub='share of all spending in a year, per cent',
             slices=[('Housing and fuel', 21), ('Food', 11),
                     ('Transport', 17), ('Clothing', 8),
                     ('Leisure and eating out', 24),
                     ('Everything else', 19)])

UNIT = dict(
 n=12, vol=2, level='B1+', band='5.5',
 theme='Money and Consumption',
 opener=(
   'This unit is about money: the paperwork of a bank account, what people '
   'save for, where household spending actually goes, and why people buy '
   'things they did not intend to buy. The technique page teaches a test '
   'you can run on your own Task 1 answer in thirty seconds, and most '
   'candidates fail it the first time they try.'),

 cycles=[
  dict(
   sub='Opening an account',
   step=1,
   read=[
    dict(heading='Four accounts compared',
         kind='Comparison table',
         task='Table completion and matching features',
         band='gt_short', qtype='Questions 1-6',
         skill=('A comparison table is read down the column you care '
                'about, not across the rows',
                ['Find the column the question asks about first. Questions '
                 'on a table almost always compare one feature across the '
                 'options, not one option across its features.',
                 'Then watch for the row that breaks the pattern. A table '
                 'with four similar options and one different one is '
                 'always asking about the different one.']),
         paras=[
          'Everyday Account. No monthly fee. An arranged overdraft of up to '
          '£250 is available after six months. Interest paid on balances: '
          'none. Requires proof of address.',
          'Everyday Plus. Monthly fee £5. An arranged overdraft of up to '
          '£1,000 is available immediately. Interest paid: none. Includes '
          'travel insurance and breakdown cover.',
          'Saver Account. No monthly fee. No overdraft is available. '
          'Interest of 3.1 per cent is paid annually. Withdrawals are '
          'limited to three a year; a fourth withdrawal reduces the rate '
          'to 0.5 per cent for that year.',
          'Young Saver. For customers aged 11 to 17. No monthly fee and no '
          'overdraft. Interest of 4.0 per cent is paid annually, with no '
          'limit on withdrawals. An adult must be named on the '
          'application.',
          'All four accounts require photographic identification and a '
          'National Insurance number. Applications made in a branch are '
          'usually completed the same day; those made online take three '
          'working days.'],
         items=[
          ('Which account charges a monthly fee?',
           ['Everyday Account', 'Everyday Plus', 'Saver Account',
            'Young Saver'], 1,
           '£5 a month, with insurance and breakdown cover included.'),
          ('Which account pays the highest rate of interest?',
           ['Everyday Account', 'Everyday Plus', 'Saver Account',
            'Young Saver'], 3,
           '4.0 per cent, and it has no limit on withdrawals.'),
          ('Which account limits the number of withdrawals?',
           ['Everyday Account', 'Everyday Plus', 'Saver Account',
            'Young Saver'], 2,
           'Three a year, after which the rate falls to 0.5 per cent.'),
          ('The Everyday Account offers an overdraft after ____________ '
           'months.', None, 'six',
           'Of up to £250, unlike the Plus which is immediate.'),
          (
           'All applicants must provide photographic identification '
           'and a ____________ Insurance number.', None,
           'National',
           'The final paragraph, which applies to all four accounts.'),
          ('Applications made online take ____________ working days.',
           None, 'three',
           'Against the same day for applications made in a branch.')]),
    dict(heading='What you need to open an account',
         kind='Procedure notice', task='Flow-chart completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Choose the account before you book. Staff cannot change the '
          'account type once an application has been submitted, and a '
          'second application in the same month is refused automatically.',
          'Gather two documents. One must prove who you are: a passport, a '
          'national identity card or a photographic driving licence. The '
          'other must prove where you live, and must be dated within the '
          'last three months.',
          'A bank statement, a council tax bill or a tenancy agreement is '
          'accepted as proof of address. A mobile telephone bill is not, '
          'because the address on it is not verified by anybody.',
          'Book an appointment online or by telephone. Appointments last '
          'twenty minutes and the account is usually opened before you '
          'leave. The card and the personal identification number arrive '
          'separately, within five working days, and neither is sent to an '
          'address other than the one registered.'],
         items=[
          ('The account type cannot be changed once an application has '
           'been ____________.', None, 'submitted',
           'Paragraph 1, and a second application is refused.'),
          ('Proof of address must be dated within the last ____________ '
           'months.', None, 'three',
           'Paragraph 2, alongside photographic identity.'),
          ('Which document is NOT accepted as proof of address?',
           ['a bank statement', 'a council tax bill',
            'a mobile telephone bill', 'a tenancy agreement'], 2,
           'Paragraph 3: the address on it is not verified.'),
          ('The card and the personal identification number arrive within '
           '____________ working days.', None, 'five',
           'Paragraph 4, and they are sent separately.')])],
   listen=[
    dict(heading='Opening an account', part='Part 1',
         task='A conversation in a bank branch', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Adviser', 'Good morning. You have an appointment to open an '
           'account?'),
          ('Customer', 'Yes, at half past ten.'),
          ('Adviser', 'Which account were you thinking of?'),
          ('Customer', 'The Everyday Plus, I think.'),
          ('Adviser', 'That is the one with the five pound fee. Can I ask '
           'why that one?'),
          ('Customer', 'The overdraft. I need it straight away.'),
          ('Adviser', 'Then yes, the Plus is the right choice. The '
           'ordinary Everyday account makes you wait six months.'),
          ('Customer', 'And the limit?'),
          ('Adviser', 'A thousand pounds, arranged. May I see your '
           'identity document?'),
          ('Customer', 'Here is my passport.'),
          ('Adviser', 'Thank you. And proof of address?'),
          ('Customer', 'I brought my phone bill.'),
          ('Adviser', 'I am afraid we cannot take that one. The address on '
           'a telephone bill is not verified.'),
          ('Customer', 'I have a tenancy agreement at home.'),
          ('Adviser', 'That is accepted, if it is dated within three '
           'months.'),
          ('Customer', 'It is from January.'),
          ('Adviser', 'That is fine. You can send a photograph of it '
           'today, and I will complete the application this afternoon.'),
          ('Customer', 'When does the card arrive?'),
          ('Adviser', 'Within five working days, and the number comes '
           'separately a day or so later.'),
          ('Customer', 'To this address?'),
          ('Adviser', 'To the registered address only. We cannot send it '
           'anywhere else, which catches people who are moving.'),
          ('Customer', 'Understood.'),
          ('Adviser', 'Your application reference is A as in alpha, five '
           'one nine.'),
          ('Customer', 'A five one nine. Thank you.')],
         items=[
          ('Account chosen: Everyday ____________', None, 'Plus',
           'Chosen because the overdraft is available immediately.'),
          ('Arranged overdraft limit: £____________', None, '1,000',
           'Against £250 on the ordinary Everyday account.'),
          ('Identity document provided: ____________', None, 'passport',
           'Accepted without question at the appointment.'),
          ('The document refused as proof of address was a ____________ '
           'bill.', None, 'phone',
           'Because the address on it is not verified.'),
          ('The card arrives within ____________ working days.', None,
           'five', 'With the number sent separately a day later.'),
          ('Application reference: A-____________', None, '519',
           'Spelled out at the end of the appointment.')])],
   speak=dict(
    part='Part 1', focus='How you manage money',
    intro=('Two or three sentences each. One concrete detail beats a '
           'general statement.'),
    qs=['Do you prefer to pay with cash or by card?',
        'Do you keep a record of what you spend?',
        'Did anyone teach you about money when you were young?',
        'Is it easy to open a bank account in your country?'],
    shape=[('answer', 'Card for almost everything now.'),
           ('support', 'I think I used cash twice last month, both times '
            'at a market.'),
           ('follow-up', 'Which I do not entirely like, because I notice '
            'the spending much less.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Disputing a charge on your account',
         prompt=('You have found a charge on your bank statement that you '
                 'do not recognise. Write a letter to your bank. In your '
                 'letter: give the details of the charge; explain why you '
                 'believe it is wrong; say what you would like the bank to '
                 'do. Write at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I wish to dispute a charge of £84.99 applied to my current '
          'account on 11 February. The account number is 20461138 and the '
          'transaction is described on my statement as "NXT Digital Ltd".',
          'I do not recognise this company and I have never held a '
          'subscription with them. I was abroad from 4 to 19 February and '
          'my card was not used during that period for any other '
          'transaction, which your own records will confirm. No earlier '
          'payment to this company appears on any of my statements.',
          'I would be grateful if the charge could be refunded while the '
          'matter is investigated, as I understand is your normal practice '
          'for a disputed transaction. I would also like the card to be '
          'cancelled and replaced, since I cannot be certain how the '
          'details were obtained.',
          'Could you confirm in writing what you intend to do and by what '
          'date? I am available on 07700 900318 if you need anything '
          'further from me.',
          'Yours faithfully,',
          'Theodora Mwangi-Bright'],
         notes=[
          'The first paragraph gives the amount, the date, the account '
          'number and the exact wording on the statement. A bank cannot '
          'begin without those four things, and a letter that omits one of '
          'them simply generates a reply asking for it.',
          'The evidence is specific and checkable: a date range abroad, '
          'and the point that the bank’s own records will confirm it. '
          'Pointing at evidence the reader already holds is stronger than '
          'offering your own.',
          'The two requests are separate and both are normal. Asking for '
          'the refund while the matter is investigated shows you know the '
          'procedure, and a reader who sees that tends to follow it.'],
         criterion=[('The four details a bank needs to start',
                     'Task Achievement'),
                    ('Evidence the reader can check themselves',
                     'Task Response'),
                    ('Requests that match the bank’s own procedure',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Formal complaint structures and the passive',
    explain=('A complaint is stronger when the sentence is about the '
             'charge rather than about you. The passive moves the charge '
             'to the front and keeps the tone formal.'),
    examples=['A charge of £84.99 was applied to my account on 11 '
              'February.',
              'I wish to dispute a charge of £84.99.',
              'I would be grateful if the charge could be refunded.',
              'No earlier payment to this company appears on my '
              'statements.'],
    task='Rewrite each sentence in the formal register a bank expects.',
    items=[('You took £84.99 off me.',
            'A charge of £84.99 was applied to my account on 11 '
            'February.'),
           ('I want my money back.',
            'I would be grateful if the charge could be refunded while the '
            'matter is investigated.'),
           ('I never bought anything from them.',
            'I have never held a subscription with this company and no '
            'earlier payment to it appears on my statements.'),
           ('Send me a new card.',
            'I would also like the card to be cancelled and replaced.'),
           ('Tell me what is happening.',
            'Could you confirm in writing what action you intend to take '
            'and by what date?')]),
   vocab=[('overdraft', 'an agreed amount you may go below zero'),
          ('standing order', 'a regular payment you set up yourself'),
          ('statement', 'a list of payments into and out of an '
           'account'),
          ('charge', 'an amount taken from an account'),
          ('direct debit', 'a regular payment a company collects'),
          ('balance', 'the amount in an account'),
          ('dispute', 'to say formally that something is wrong'),
          ('refund', 'money returned to you')],
   expr=[('I wish to dispute a charge of, applied on',
          'the opening line of a complaint'),
         ('your own records will confirm',
          'points at evidence the reader already holds'),
         ('as I understand is your normal practice',
          'shows you know the procedure'),
         ('could you confirm in writing what you intend to do',
          'asks for a dated commitment')],
   trans=['furthermore', 'in addition', 'accordingly', 'in the meantime'],
  ),

  dict(
   sub='Saving and spending',
   step=2,
   read=[
    dict(heading='Four people on what they save for',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Rosalind: I save a fixed amount on the day I am paid, before '
          'I see it. Two hundred pounds, every month, since I was '
          'twenty-three. I could not tell you what it is for and I have '
          'never once missed it, which I think is the whole point.',
          'B  Emeka: I save for specific things. Last year a bicycle, this '
          'year a deposit. It works for me because I can see the thing I '
          'am buying, and it fails whenever the thing is far away. I have '
          'started a pension three times.',
          'C  Marisol: I do not save. I know how that sounds. My rent takes '
          'two thirds of what I earn and the arithmetic does not leave '
          'anything, and I am tired of being told it is a question of '
          'discipline.',
          'D  Finnegan: I saved nothing until I was forty and I now save a '
          'third of my income, which sounds impressive and is not. I had a '
          'windfall, I paid off the mortgage, and the money I used to pay '
          'the bank goes to the savings account instead.'],
         items=[
          ('Which person saves automatically without deciding each '
           'month?', ['Rosalind', 'Emeka', 'Marisol', 'Finnegan'], 0,
           'On payday, before she sees the money.'),
          ('Which person finds saving easier when the goal is visible?',
           ['Rosalind', 'Emeka', 'Marisol', 'Finnegan'], 1,
           'A bicycle and a deposit, but never a pension.'),
          ('Which person says their income makes saving impossible?',
           ['Rosalind', 'Emeka', 'Marisol', 'Finnegan'], 2,
           'Rent takes two thirds of what she earns.'),
          ('Which person’s saving rate rose because a payment ended?',
           ['Rosalind', 'Emeka', 'Marisol', 'Finnegan'], 3,
           'The mortgage payment became a savings payment.'),
          ('Rosalind knows what her savings are for.',
           ['Yes', 'No', 'Not Given'], 1,
           'She says she could not tell you, and calls that the point.',
           {0: 'Yes would need a purpose; she says she could not name '
               'one.', 2: 'Not Given is wrong because she is asked and answers.'}),
          (
           'Marisol believes her situation is caused by poor '
           'discipline.', ['Yes', 'No', 'Not Given'], 1,
           'She says she is tired of being told that.',
           {0: 'Yes would need her to accept that account; she rejects '
               'being told it.', 2: 'Not Given is wrong because she responds to the charge.'})])],
   listen=[
    dict(heading='A short talk: saving and spending', part='Part 2',
         task='A talk at a community centre', band='l2',
         qtype='Questions 23-26',
         script=[
          ('Speaker', 'I am going to say one thing tonight that contradicts '
           'most of what you have read about saving, and I want to explain '
           'why the research supports it.'),
          ('Speaker', 'The usual advice is to make a budget. Write down '
           'everything you spend, find the waste, remove it. It is '
           'sensible, it is what I was taught, and when researchers follow '
           'people who are given that advice, almost nobody is still doing '
           'it after eleven weeks.'),
          ('Speaker', 'What survives is the arrangement you make once. A '
           'standing order that moves money on payday. A pension you are '
           'enrolled in automatically. These require a decision on one '
           'afternoon and no decisions afterwards, and that is why they '
           'work.'),
          ('Speaker', 'The difference is not willpower. It is the number of '
           'times you have to choose. A budget asks you to decide every '
           'time you walk past a shop. The standing order asked you once, '
           'in March, when you were in the mood to be sensible.'),
          ('Speaker', 'So my advice is narrower than the usual advice and '
           'much easier to follow. Do not plan your spending. Move the '
           'money before you see it, and then spend what is left without '
           'guilt, because the saving has already happened.'),
          ('Speaker', 'And if you want one number tonight: in trials of '
           'automatic enrolment, participation rises from about sixty per '
           'cent to above ninety, with no change in anybody’s income or '
           'intentions. The arrangement did all of it.')],
         items=[
          ('Most people stop following budgeting advice after about',
           ['three weeks', 'eleven weeks', 'six months', 'a year'], 1,
           'Which he says is what the research consistently finds.'),
          ('What survives, he says, is the arrangement you make '
           '____________.', None, 'once',
           'Requiring no decisions afterwards.'),
          ('The real difference is not willpower but the number of times '
           'you have to ____________.', None, 'choose',
           'A budget asks you to decide repeatedly.'),
          ('Under automatic enrolment, participation rises from about '
           'sixty per cent to above',
           ['seventy', 'eighty', 'ninety', 'ninety-five'], 2,
           'With no change in income or intentions.')]),
    dict(heading='Two friends on budgeting', part='Part 3',
         task='A conversation between two friends', band='l3',
         qtype='Questions 27-32',
         script=[
          ('Emeka', 'You have never once asked me how much I earn, and you '
           'have asked me four times what I save.'),
          ('Rosalind', 'Because the second one is the one you can '
           'change.'),
          ('Emeka', 'That is exactly the assumption I want to argue '
           'with.'),
          ('Rosalind', 'Go on.'),
          ('Emeka', 'You save two hundred a month and you have said it is '
           'painless. It is painless because your rent is a third of your '
           'income. Marisol’s is two thirds. The same advice is painless '
           'for you and impossible for her.'),
          ('Rosalind', 'That lands, and I will push back on part of it. I '
           'started the two hundred when my rent was half my income and it '
           'was not painless then.'),
          ('Emeka', 'Half is not two thirds.'),
          ('Rosalind', 'No. It is not.'),
          ('Emeka', 'What I object to is that the advice is always aimed at '
           'the spender. Nobody writes an article saying the rent is too '
           'high.'),
          ('Rosalind', 'Because the reader cannot change the rent this '
           'month and can change the coffee.'),
          ('Emeka', 'And so the coffee gets blamed for the rent.'),
          ('Rosalind', 'Which is a good sentence and it does not help '
           'Marisol either.'),
          ('Emeka', 'No. What would help Marisol is a different flat, and '
           'the advice industry cannot supply one.'),
          ('Rosalind', 'Can I take the part of your argument I accept and '
           'say where I stop?'),
          ('Emeka', 'Please.'),
          ('Rosalind', 'I accept that below some income the arithmetic '
           'decides it. I do not accept that it is below every income, and '
           'I meet people earning well who save nothing and tell me the '
           'same sentence Marisol tells me.'),
          ('Emeka', 'That is fair. Two different things are being said in '
           'the same words.'),
          ('Rosalind', 'And nobody can tell which one they are hearing '
           'without asking about the rent.')],
         items=[
          ('Emeka objects that Rosalind asks about saving rather than',
           ['spending', 'earnings', 'debt', 'rent'], 1,
           'Which she says is because saving is what can be changed.'),
          ('Emeka says the same advice is painless for Rosalind because '
           'her rent is', ['a quarter', 'a third', 'half', 'two '
            'thirds'], 1,
           'Against two thirds for Marisol.'),
          ('Rosalind pushes back by saying she began saving when her rent '
           'was', ['a third', 'half', 'two thirds', 'unknown'], 1,
           'And says it was not painless then.'),
          ('Emeka’s main objection is that advice is always aimed at',
           ['the landlord', 'the spender', 'the government',
            'the bank'], 1,
           'Nobody writes that the rent is too high.'),
          ('Rosalind explains this by saying the reader can change the '
           'coffee but not the', ['salary', 'rent', 'bank',
            'budget'], 1,
           'At least not within the month.'),
          ('They agree that two different things are being said in the '
           'same ____________.', None, 'words',
           'And that only a question about rent separates them.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Money',
    longturn=[('The thing I saved up for was a secondhand piano, an upright '
               'one, which is now in the corner of my living room and is the '
               'largest object I have ever bought.'),
              ('I saved for about fourteen months. I had worked out that I '
               'needed roughly a thousand, and I managed about seventy a '
               'month, which was slower than I wanted but faster than I '
               'expected.'),
              ('The way I managed it was by moving the money on the day I was '
               'paid rather than at the end of the month. That sounds obvious, '
               'but it was the whole difference. Before that I had tried to '
               'save whatever was left, and there was never anything left. I '
               'also stopped buying lunch out, which I had always told myself '
               'was too small to matter, and it turned out to be about a third '
               'of the total.'),
              ('When I finally bought it I felt two things at once, and the '
               'second one surprised me. The first was straightforward: I was '
               'pleased, I had wanted one since I was nine. The second was '
               'that the piano mattered less than the fourteen months. I had '
               'proved something to myself about money that I had not believed '
               'before, and that has been more useful than the instrument, '
               'although I do play it.')],
    intro=('Short answers, then the long turn. Use all four bullets and '
           'spend longest on the last.'),
    cue=('Describe something you saved up for.',
         ['what it was', 'how long you saved',
          'how you managed to save',
          'and explain how you felt when you bought it']),
    qs=['Do you find it easy or difficult to save money?',
        'Have you ever saved for something and then changed your mind?',
        'Now look at the card. You have one minute to make notes.',
        'Is it better to save or to enjoy your money now?'],
    shape=[('answer', 'A second-hand piano, about four years ago.'),
           ('support', 'It took eleven months and cost nine hundred '
            'pounds.'),
           ('follow-up', 'I moved fifty pounds every payday so I never '
            'decided twice.'),
           ('support', 'When I bought it I felt almost nothing, which '
            'surprised me.'),
           ('follow-up', 'The pleasure had been spread across eleven '
            'months instead, and I think that is actually the better '
            'deal.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should personal finance be taught in schools?',
         prompt=('Some people believe that personal finance should be a '
                 'compulsory subject in schools. To what extent do you '
                 'agree? Write at least 250 words.'),
         model=[
          'I agree that personal finance should be taught in schools, but '
          'not for the reason usually given, and the reason matters '
          'because it decides what the lessons should contain.',
          'The usual argument is that young people leave school unable to '
          'manage money, and that teaching budgeting would prevent later '
          'debt. The first half of that is true. The second half is weaker '
          'than it sounds. Research on budgeting advice consistently finds '
          'that almost nobody is still following it eleven weeks later, '
          'and a lesson at fifteen is unlikely to survive longer than '
          'advice given at thirty.',
          'What does survive is an arrangement made once. A payment that '
          'moves money automatically on payday, or a pension that enrols '
          'people unless they refuse, changes behaviour permanently '
          'because it requires one decision rather than a decision every '
          'week. In trials, automatic enrolment raised participation from '
          'about sixty per cent to above ninety without changing anybody’s '
          'income.',
          'A school subject built around that finding would look quite '
          'different from the one usually proposed. It would spend less '
          'time on keeping records and more on the three or four '
          'arrangements that do the work, and on reading the documents '
          'that set them up. It would also teach the limits honestly: '
          'where housing costs take two thirds of an income, no amount of '
          'budgeting produces savings, and a course that implies otherwise '
          'teaches blame rather than skill.',
          'In conclusion, I support the subject and would change its '
          'content. Teach the arrangements, not the record-keeping, and '
          'say plainly which problems are not the pupil’s to solve.'],
         notes=[
          'The introduction agrees and immediately says the usual reason '
          'is wrong. Agreeing for a different reason is a stronger answer '
          'than agreeing, and it gives the essay somewhere to go.',
          'Paragraph 2 concedes half of the opposing argument and then '
          'attacks the other half with evidence. Conceding a point you '
          'cannot win is worth marks under Task Response and costs '
          'nothing.',
          'The last body paragraph is about limits, and it is the one most '
          'candidates never write. Saying which problems the subject '
          'cannot solve makes the rest of the essay more believable, not '
          'less.'],
         criterion=[('Agreeing for a reason other than the usual one',
                     'Task Response'),
                    ('Conceding half an argument to attack the other',
                     'Task Response'),
                    ('A paragraph on what the proposal cannot do',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Purpose and result clauses together',
    explain=('A strong sentence often gives the purpose of something and '
             'its result in one structure. These patterns do that without '
             'becoming long.'),
    examples=['The money is moved on payday so that it is never seen.',
              'The arrangement requires one decision, with the result '
              'that it survives.',
              'It is set up once in order to avoid deciding every week.',
              'Participation rose to ninety per cent, which no advice '
              'campaign has achieved.'],
    task='Join each pair so that purpose and result are both clear.',
    items=[('The money leaves on payday. You never see it.',
            'The money is moved on payday so that it is never seen, which '
            'is why the arrangement survives.'),
           ('People are enrolled automatically. Most stay in.',
            'People are enrolled automatically in order to remove the '
            'decision, with the result that most remain in the scheme.'),
           ('A budget needs weekly decisions. People stop.',
            'A budget requires a decision every week, which is why almost '
            'nobody is still following one after three months.'),
           ('Rent is two thirds of her income. She cannot save.',
            'Her rent takes two thirds of her income, so no budgeting '
            'method available to her produces savings.'),
           ('He paid off the mortgage. His saving rose.',
            'He paid off the mortgage, with the result that the payment he '
            'had been making to the bank now goes into savings.')]),
   vocab=[('budget', 'a plan for what you will spend'),
          ('instalment', 'one of several regular payments'),
          ('annual interest', 'what is paid on savings in a year'),
          ('windfall', 'money received unexpectedly'),
          ('saver', 'a person who puts money aside'),
          ('sign up', 'to join a scheme'),
          ('deposit', 'money paid towards a purchase in advance'),
          ('put aside', 'to save regularly')],
   expr=[('move the money before you see it',
          'the practical rule this cycle teaches'),
         ('the difference is not willpower; it is the number of times you '
          'have to choose', 'the mechanism behind it'),
         ('the coffee gets blamed for the rent',
          'names a common unfairness in advice'),
         ('two different things are being said in the same words',
          'separates two cases that sound alike')],
   trans=['firstly', 'secondly', 'above all', 'in practice'],
  ),

  dict(
   sub='Where the money goes',
   step=3,
   read=[
    dict(heading='What a household spends in a year',
         kind='Data article',
         task='Matching information and True/False/Not Given',
         band='gt_work', qtype='Questions 33-38',
         figure=_LOW, figure2=_HIGH,
         paras=[
          'The two charts show how spending is divided between six '
          'categories in a lower-income and a higher-income group of '
          'households. Each chart shows shares of that group’s own '
          'spending, not amounts, so a smaller share can still represent '
          'more money.',
          'Housing and fuel takes the largest share in both groups, though '
          'far more so in the lower-income one, where it accounts for 34 '
          'per cent against 21 per cent. Food shows the same pattern more '
          'sharply, at 22 per cent against 11.',
          'Those two categories behave alike and are usually described '
          'together as essentials. Together they take 56 per cent of '
          'lower-income spending and 32 per cent of higher-income '
          'spending, which is the single most important comparison the '
          'charts support.',
          'Leisure and eating out moves in the opposite direction, rising '
          'from 9 per cent to 24. Transport also rises, from 13 to 17, and '
          'clothing is almost unchanged at 7 and 8 per cent.',
          'The pattern is old enough to have a name. The share of spending '
          'devoted to food falls as income rises, which was first '
          'described in the nineteenth century and has been found in every '
          'country where the measurement has been made since.',
          'A warning follows for anybody reading charts of this kind. A '
          'falling share does not mean falling spending. The '
          'higher-income group spends more on food in pounds than the '
          'lower-income group does; food is simply a smaller part of a '
          'larger total, and a reader who misses that reaches the opposite '
          'conclusion from the correct one.'],
         items=[
          (
           'Which paragraph warns that a falling share is not falling '
           'spending?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           3,
           'Paragraph 3 is where the share and the amount are '
           'separated.'),
          ('Which paragraph groups two categories that behave alike?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'Housing and food, described together as essentials.'),
          ('Which paragraph refers to a pattern first described in the '
           'nineteenth century?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'The share spent on food falls as income rises.'),
          ('Housing and food together take ____________ per cent of '
           'lower-income spending.', None, '56',
           'Against 32 per cent in the higher-income group.'),
          (
           'The pattern named in paragraph 5 has been found wherever '
           'it has been measured.',
           ['True', 'False', 'Not Given'], 0,
           'Paragraph 5 says it has been found in every country where '
           'the measurement has been made.',
           {1: 'False would need a country where it failed, and none '
               'is mentioned.', 2: 'Not Given is wrong because paragraph 5 makes exactly '
               'this claim.'}),
          (
           'Higher-income households spend less money on food than '
           'lower-income households.',
           ['True', 'False', 'Not Given'], 1,
           'The last paragraph says the higher-income group spends '
           'more on food in pounds.',
           {0: 'True confuses the share with the amount, which the '
               'last paragraph separates.', 2: 'Not Given is wrong because the final paragraph '
               'addresses it directly.'})])],
   listen=[
    dict(heading='An economist on household spending', part='Part 4',
         task='A lecture on measuring spending', band='l4',
         qtype='Questions 39-44',
         figure=_LOW,
         script=[
          ('Economist', 'These two charts contain one fact that is two '
           'hundred years old and one trap that catches a third of my '
           'first-year students every single year. I will do the fact '
           'first.'),
          ('Economist', 'The fact is that the share of spending going on '
           'food falls as income rises. A German statistician described it '
           'in the eighteen-fifties and it has held in every country '
           'measured since, through wars, inflation and the invention of '
           'the supermarket.'),
          ('Economist', 'You can see it here. Twenty-two per cent on food '
           'in the lower-income group, eleven in the higher. Housing does '
           'the same thing: thirty-four against twenty-one.'),
          ('Economist', 'Those two together are what we loosely call '
           'essentials, and they take fifty-six per cent of the first '
           'group’s spending and thirty-two per cent of the second’s. '
           'Everything else in both charts follows from that one '
           'difference.'),
          ('Economist', 'Now the trap. A share is not an amount. The '
           'higher-income group spends more on food in pounds than the '
           'lower-income group does. The percentage is smaller because the '
           'total is bigger, and if you write that the rich eat less you '
           'have reached exactly the wrong conclusion from a correct '
           'chart.'),
          ('Economist', 'This matters outside the exam. Newspapers report '
           'that spending on some category has fallen when the share has '
           'fallen and the amount has risen, and the correction, if it is '
           'printed at all, is printed on page nineteen.'),
          ('Economist', 'So the discipline is simple. Whenever you meet a '
           'pie chart, say out loud: this is a share of a total, and I '
           'have not been told the total. Then look for the total, and '
           'notice how rarely anybody gives it to you.'),
          ('Economist', 'One more thing before you go, because it comes '
           'up in every examination I set. Two pie charts can be compared '
           'slice by slice only if you say they are shares. Compare them '
           'as amounts and you are inventing a total nobody measured.')],
         items=[
          ('The relationship between food share and income was first '
           'described in the', ['1750s', '1850s', '1950s',
            '1990s'], 1,
           'By a German statistician, and it has held since.'),
          ('Food accounts for ____________ per cent of lower-income '
           'spending.', None, '22',
           'Against eleven per cent in the higher-income group.'),
          ('Housing and food together take ____________ per cent in the '
           'higher-income group.', None, '32',
           'Against fifty-six in the lower-income group.'),
          ('The trap he describes is that a share is not an',
           ['average', 'amount', 'estimate', 'index'], 1,
           'He names the trap: the higher-income group spends more in '
           'pounds.'),
          ('He says newspaper corrections, if printed at all, appear on '
           'page ____________.', None, 'nineteen',
           'While the original claim appears at the front.'),
          ('His discipline is to say that a chart shows a share of a total '
           'and that you have not been told the',
           ['source', 'total', 'year', 'sample'], 1,
           'And then to look for the total, which is rarely given.')])],
   speak=dict(
    part='Part 3', focus='Necessities and luxuries',
    intro=('Four or five sentences. Give a reason and then an example of '
           'it.'),
    qs=['What would you call a necessity rather than a luxury?',
        'Has that changed since your parents were young?',
        'Should necessities be cheaper for people on low incomes?',
        'Do people in your country spend more than they used to on '
        'leisure?'],
    shape=[('answer', 'An internet connection, which my parents would '
            'have called a luxury.'),
           ('support', 'You cannot apply for most jobs without one '
            'now.'),
           ('follow-up', 'Or book a doctor, in my city.'),
           ('support', 'So it has moved category because the world moved '
            'around it.'),
           ('follow-up', 'Which I think is how most things become '
            'necessities, rather than people becoming softer.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Household spending by category in two income groups',
         prompt=('The charts below show household spending by category in '
                 'a lower-income and a higher-income group. Summarise the '
                 'information by selecting and reporting the main '
                 'features, and make comparisons where relevant. Write at '
                 'least 150 words.'),
         figure=_LOW, figure2=_HIGH,
         model=[
          'The two pie charts compare how lower-income and higher-income '
          'households divide their spending between six categories. '
          'Overall, the lower-income group spends most of its money on '
          'essentials while the higher-income group spends a far larger '
          'share on leisure, and the gap between the two is accounted for '
          'almost entirely by three categories.',
          'Housing and fuel takes the largest share in both groups, but '
          'the difference is substantial: 34 per cent of lower-income '
          'spending against 21 per cent. Food behaves in the same way, at '
          '22 per cent against 11. Together these two essentials account '
          'for 56 per cent of lower-income spending and only 32 per cent '
          'of higher-income spending.',
          'Leisure and eating out moves in the opposite direction, rising '
          'from 9 per cent to 24, which is the largest single change '
          'between the two charts. Transport also rises, though by far '
          'less, from 13 to 17 per cent.',
          'Clothing is the one category that barely differs, at 7 and 8 '
          'per cent, and the remaining spending accounts for 15 and 19 per '
          'cent respectively.'],
         notes=[
          'The Overall statement groups rather than lists: essentials '
          'against leisure, and a note that three categories explain the '
          'gap. Two pie charts are always asking which slices behave '
          'alike.',
          'Housing and food are added together, 56 against 32. That '
          'addition is not printed on either chart and is the single most '
          'useful sentence in the answer.',
          'The category that barely changes gets one short sentence at the '
          'end. Giving an unchanging category the same space as a changing '
          'one is the commonest way this task loses marks.'],
         criterion=[('Grouping slices that behave alike',
                     'Task Achievement'),
                    ('An addition the chart does not print',
                     'Task Achievement'),
                    ('Least space to what changes least',
                     'Coherence and Cohesion')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Proportion and comparison across two charts',
    fix=dict(
     text=('The first chart shows spending by category, while the second shows '
           'income. Food accounted for a quarter of the total, which was the '
           'largest share. Housing took 22 per cent, slightly fewer than food. '
           'In comparison with the income chart, spending on luxuries was rose '
           'in the same years.'),
     faults=[('slightly fewer than food',
              'slightly less than food',
              'A percentage is not counted one by one, so the word is less.'),
             ('spending on luxuries was rose',
              'spending on luxuries rose',
              ('Rose is already the past form; was is not needed in front of '
               'it.')),
             ('In comparison with the income chart',
              'By comparison with the income chart',
              ('In comparison with is used for two things of the same kind; '
               'here the comparison is between a chart and a figure, and by '
               'comparison is the idiom.'))]),
    explain=('Describing shares needs language that keeps share and '
             'amount apart, and that compares two charts without '
             'repeating the figures twice.'),
    examples=['Housing takes the largest share in both, though far more '
              'so in the lower-income group.',
              'Food accounts for 22 per cent against 11.',
              'Together the two essentials take 56 per cent and 32 per '
              'cent respectively.',
              'A smaller share does not mean a smaller amount.'],
    task='Rewrite each sentence so that it compares the two charts in '
         'one move.',
    items=[('Housing is 34 per cent. Housing is 21 per cent.',
            'Housing takes 34 per cent of lower-income spending against 21 '
            'per cent of higher-income spending.'),
           ('The rich spend less on food.',
            'Food accounts for a smaller share of higher-income spending, '
            'although the amount spent is larger.'),
           ('Leisure goes up a lot.',
            'Leisure and eating out rises from 9 to 24 per cent, the '
            'largest change between the two charts.'),
           ('Clothing is about the same.',
            'Clothing is almost unchanged, at 7 and 8 per cent '
            'respectively.'),
           ('Food and housing are both bigger for poorer households.',
            'Together food and housing take 56 per cent of lower-income '
            'spending against 32 per cent of higher-income spending.')]),
   vocab=[('share', 'a part of a total, usually as a percentage'),
          ('essential', 'something that cannot be given up'),
          ('non-essential', 'something that can be given up'),
          ('outgoings', 'everything a household pays out'),
          ('utilities', 'gas, electricity and water'),
          ('basket of goods', 'the set of items used to measure prices'),
          ('category', 'one of the groups a total is divided into'),
          ('in that order', 'matching the order just given')],
   expr=[('housing takes the largest share in both, though far more so in',
          'compares two charts in one sentence'),
         ('a share is not an amount',
          'the warning this cycle is built on'),
         ('the share falls as income rises',
          'names a two-hundred-year-old pattern'),
         ('this is a share of a total, and I have not been told the '
          'total', 'the question to ask of any pie chart')],
   trans=['whereas', 'by contrast', 'in both cases', 'respectively'],
  ),

  dict(
   sub='Why people buy what they do not need',
   step=3,
   read=[
    dict(heading='Scarcity, comparison and the sense of a bargain',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'A price on its own conveys very little. Asked whether forty '
          'pounds is a reasonable sum for a kettle, most people hesitate; '
          'asked whether forty pounds is reasonable for a kettle reduced '
          'from seventy, they answer immediately and in the affirmative. The '
          'second question supplies a comparison, and the comparison does '
          'the work the price alone cannot. Nothing about the kettle has '
          'altered between the two questions, and the respondent will '
          'ordinarily deny that anything about their own judgement has '
          'either.',
          'This is the most reliable finding in the study of consumer '
          'behaviour, and it has an uncomfortable implication. The '
          'comparison is supplied by the seller, not by the buyer. A '
          'retailer who displays an original price beside a reduced one '
          'has chosen the standard against which their own offer is '
          'judged, and the standard need not correspond to any price at '
          'which the item genuinely sold.',
          'Researchers call the effect anchoring. In the original '
          'experiments, participants were shown an arbitrary number '
          'before being asked to value an object, and their valuations '
          'moved towards that number even where they had watched it being '
          'generated at random. The effect persists when participants are '
          'warned about it in advance, which distinguishes it from an '
          'ordinary mistake.',
          'A second mechanism operates through apparent scarcity. A notice '
          'reading "only four left" or "offer ends Thursday" raises the '
          'proportion of visitors who buy, and raises it most among those '
          'who were undecided rather than those who intended to buy anyway. '
          'The shortage need not be real, and in online retail it frequently '
          'is not: the counter is generated by the website and reflects '
          'nothing in any warehouse.',
          'A third works through the order in which options are presented. '
          'Where three versions of a product are offered, most buyers select '
          'the middle one, and a retailer can therefore move sales towards a '
          'chosen item by adding an expensive version nobody is expected to '
          'buy. The additional option alters the decision without being '
          'selected, which makes it difficult to argue that the buyer was '
          'misled by anything they actually looked at.',
          'Each of these effects is modest on a single purchase and '
          'substantial across a population, which is the reason they are '
          'worth money to retailers and difficult for individuals to notice. '
          'A shopper who buys one unnecessary kettle a year will never '
          'detect a pattern in their own behaviour, while a retailer selling '
          'to four million customers detects it within a fortnight and can '
          'measure what it is worth.',
          'The practical response is not to resist the feeling, which does '
          'not work, but to replace the comparison. Asking what the item '
          'is worth to you, or what else forty pounds would buy this week, '
          'substitutes a standard the seller did not choose. It is a '
          'small discipline and it is the only one the evidence '
          'supports.'],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['Scarcity and shortage', 'Anchoring and how it was tested',
            'The middle option', 'What a shopper can do'], 1,
           'Arbitrary numbers moving valuations, even when random.'),
          ('Choose the best heading for paragraph 5.',
           ['Anchoring', 'Apparent scarcity',
            'Adding an option nobody buys', 'Why the effects are hard to '
            'see'], 2,
           'Three versions, and most buyers taking the middle.'),
          ('Choose the best heading for paragraph 7.',
           ['How retailers benefit', 'Replacing the comparison',
            'Why warnings fail', 'The size of the effects'], 1,
           'Asking what else the money would buy this week.'),
          (
           'The writer believes anchoring can be prevented by warning '
           'people about it.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 3 says the effect persists after a warning.',
           {0: 'Yes would need warnings to work; paragraph 3 says the '
               'effect survives them.', 2: 'Not Given is wrong because warning is tested in the '
               'passage.'}),
          (
           'The writer believes scarcity notices are usually truthful '
           'online.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 4 says the shortage frequently is not real.',
           {0: 'Yes would need truthfulness; paragraph 4 says the '
               'shortage often is not real.', 2: 'Not Given is wrong because the notices are examined.'}),
          ('The comparison used to judge a price is supplied by the '
           '____________.', None, 'seller',
           'Paragraph 2, and need not match any genuine price.'),
          ('Scarcity notices have most effect on shoppers who were '
           '____________.', None, 'undecided',
           'Paragraph 4, rather than those who intended to buy.'),
          ('The only response the evidence supports is to replace the '
           '____________.', None, 'comparison',
           'The final paragraph, since resisting the feeling fails.')])],
   listen=[
    dict(heading='A lecture on consumer behaviour', part='Part 4',
         task='A lecture on how prices are judged', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'I want to start with a question that sounds '
           'trivial. Is forty pounds a lot for a kettle? You hesitated. '
           'Now: is forty pounds a lot for a kettle reduced from seventy? '
           'You did not hesitate, and nothing about the kettle '
           'changed.'),
          ('Lecturer', 'That is the whole subject in one example. A price '
           'means nothing by itself. It means something against a '
           'comparison, and the comparison is almost always supplied by '
           'the person selling.'),
          ('Lecturer', 'The formal name is anchoring. The original studies '
           'showed people a number generated at random, then asked them to '
           'value something. The valuations moved towards the random '
           'number. People who watched the wheel spin still moved.'),
          ('Lecturer', 'And here is the part that makes it serious: '
           'warning people does not remove it. Tell a group about '
           'anchoring, then anchor them, and they move. That separates it '
           'from an ordinary error, which information fixes.'),
          ('Lecturer', 'Second mechanism, scarcity. Only four left. Offer '
           'ends Thursday. It raises purchases, and it raises them most '
           'among the undecided, which is commercially the group worth '
           'having. Online, the shortage is frequently invented.'),
          ('Lecturer', 'Third, the middle option. Offer three versions and '
           'most people take the middle one. So a retailer who wants to '
           'sell the ninety-pound model adds a hundred-and-eighty-pound '
           'model that almost nobody buys. The expensive one does its job '
           'without ever being sold.'),
          ('Lecturer', 'What can you do? Not resist the feeling. That has '
           'been tried and it does not work. Replace the comparison '
           'instead: what else would this money buy me this week? That '
           'substitutes a standard the shop did not choose, and it is the '
           'only method with evidence behind it.'),
          ('Lecturer', 'And notice why none of us spot this in ourselves. '
           'One unnecessary purchase a year is invisible in a life and '
           'enormous across four million customers. That asymmetry is why '
           'the work is worth paying for on one side and not worth '
           'noticing on the other.')],
         items=[
          ('The kettle example shows that a price means something only '
           'against a ____________.', None, 'comparison',
           'Which is almost always supplied by the seller.'),
          ('In the original anchoring studies, the number shown to '
           'participants was', ['a real price', 'generated at random',
            'an average', 'chosen by them'], 1,
           'And valuations still moved towards it.'),
          ('What makes anchoring serious, he says, is that it survives',
           ['low prices', 'a warning', 'experience', 'training'], 1,
           'Which separates it from an ordinary error.'),
          ('Scarcity notices raise purchases most among shoppers who are '
           '____________.', None, 'undecided',
           'Commercially the group worth having.'),
          ('A retailer who wants to sell the middle option adds a version '
           'that almost nobody', ['sees', 'buys', 'understands',
            'returns'], 1,
           'And it works without ever being sold.'),
          ('The only method with evidence behind it is to replace the '
           'comparison by asking what else the money would buy '
           '____________.', None, 'this week',
           'A standard the shop did not choose.')])],
   speak=dict(
    part='Part 3', focus='Advertising and choice',
    intro=('Four or five sentences. Try once to describe a mechanism '
           'rather than an opinion.'),
    qs=['Does advertising change what people buy?',
        'Are some kinds of advertising unfair?',
        'Should there be limits on advertising to children?',
        'Can people learn to ignore it?'],
    shape=[('answer', 'Yes, and mostly not by persuading anybody of '
            'anything.'),
           ('support', 'A price reduced from seventy feels different from '
            'the same price alone.'),
           ('follow-up', 'Nothing about the item changed; the comparison '
            'did.'),
           ('support', 'And warning people about it does not stop it '
            'working.'),
           ('follow-up', 'Which is why I think the rules have to be about '
            'the seller rather than about educating the buyer.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Planning: should advertising to children be banned?',
         prompt=('Should advertising aimed at children be banned? '
                 'Brainstorm ten ideas, then keep only the ones that '
                 'answer the question actually asked. Twelve minutes.'),
         plan=('Advertising aimed at children under twelve should be '
               'banned during children’s programming, because the '
               'mechanisms that make advertising work are ones children '
               'cannot be taught to resist, and because the alternative '
               'remedy puts the duty on the wrong person',
               [('Children cannot be taught to resist the mechanisms',
                 ['anchoring survives a warning even in adults',
                  'under about eight, children do not identify an '
                  'advertisement as one']),
                ('Educating the buyer is the wrong remedy',
                 ['the duty would fall on parents during the programme '
                  'itself',
                  'several countries already restrict it and their '
                  'broadcasters survived'])]),
         notes=[
          'The commonest fault in a brainstorm is an idea that is about '
          'the topic but not about the question. "Children watch too much '
          'television" is about children and advertising and answers a '
          'different question, so it goes.',
          'Notice the thesis has a limit in it: under twelve, during '
          'children’s programming. A limited claim is easier to defend in '
          '250 words than a general one, and examiners reward a position '
          'that is clear rather than one that is large.',
          'Both supports under the second heading are facts rather than '
          'opinions. One brainstorm point that can be checked is worth '
          'three that cannot.'],
         criterion=[('Keeping only ideas that answer the question',
                     'Task Response'),
                    ('A thesis with a limit in it', 'Task Response')],
         instruct='  Twelve minutes, timed. You write this essay in cycle '
                  '5.',
         lines=12)],
   gram=dict(
    point='Describing mechanisms: triggers, prompts, leads people to',
    explain=('Explaining how something works needs verbs that name a '
             'cause without claiming it is deliberate or total. These are '
             'the ones examiners expect at this band.'),
    examples=['A displayed original price prompts a comparison the buyer '
              'did not choose.',
              'Apparent scarcity leads undecided shoppers to buy.',
              'Adding a third option moves sales towards the middle '
              'one.',
              'The effect persists even when people are warned about '
              'it.'],
    task='Rewrite each sentence so that it names the mechanism.',
    items=[('Sales go up.',
            'A notice reading "only four left" raises the proportion of '
            'visitors who buy.'),
           ('People like the middle one.',
            'Offering three versions leads most buyers to select the '
            'middle option.'),
           ('Discounts work.',
            'A displayed original price supplies a comparison against '
            'which the reduced price looks reasonable.'),
           ('Knowing about it does not help.',
            'The effect persists when participants are warned about it in '
            'advance.'),
           ('It is bad for shoppers.',
            'Each effect is modest on a single purchase and substantial '
            'across a population.')]),
   vocab=[('anchor', 'a number that influences a later judgement'),
          ('scarcity', 'the appearance that little is available'),
          ('framing', 'the way a choice is presented'),
          ('impulse', 'a sudden decision to buy'),
          ('reference price', 'the price an offer is compared with'),
          ('markdown', 'a reduction from an earlier price'),
          ('retailer', 'a business that sells to the public'),
          ('persist', 'to continue despite something')],
   expr=[('the comparison is supplied by the seller, not by the buyer',
          'the sentence this cycle is built on'),
         ('the effect persists even when people are warned',
          'separates this from an ordinary mistake'),
         ('the expensive option does its job without being sold',
          'describes the middle-option mechanism'),
         ('modest on a single purchase and substantial across a '
          'population', 'explains why nobody notices')],
   trans=['in effect', 'as a result', 'in turn', 'by comparison'],
  ),

  dict(
   sub='Whether people can be nudged',
   step=4,
   read=[
    dict(heading='What happened when the standard choice was changed',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 59-66',
         paras=[
          'Between about 2008 and 2015, governments in several countries '
          'established small units charged with changing behaviour by '
          'altering how choices were presented rather than by passing laws. '
          'The approach was popular with ministers, inexpensive, and '
          'unusually well documented, because the units themselves insisted '
          'on testing what they did. That insistence is the reason the '
          'approach can be assessed at all, and it is more than can be said '
          'for most government activity.',
          'The clearest success concerned pensions. Where employees had '
          'been required to apply in order to join a workplace scheme, the '
          'rule was reversed: employees were enrolled automatically and '
          'had to apply in order to leave. Participation rose from about '
          'sixty per cent to above ninety, and the rise has persisted for '
          'more than a decade.',
          'Nothing was compelled and nothing was forbidden. The amount of '
          'paperwork was identical in both versions; only its direction '
          'changed. This is what makes the pension result the strongest '
          'evidence the approach has produced, and it is quoted in almost '
          'every discussion of the subject, usually within the first two '
          'minutes.',
          'The difficulty is that it is quoted far more often than the '
          'results that followed it. Letters redesigned to increase tax '
          'payment produced rises of one or two percentage points. Reminders '
          'to attend medical appointments reduced missed appointments by '
          'about a quarter in some trials and not at all in others. These '
          'are real effects and they are small, and the gap between how the '
          'pension result is described and how these are described is where '
          'most of the criticism begins.',
          'A second difficulty is whether the effects endure. Several '
          'measures that worked in a first trial produced smaller effects '
          'when repeated, and a few produced none at all. The pension result '
          'is unusual precisely because the change is made once and then '
          'requires nothing further of anybody, while a persuasive letter '
          'must persuade again every year, to a population that has read one '
          'before.',
          'Critics raise a third objection, which concerns consent rather '
          'than evidence. A government that alters how a choice is '
          'presented is influencing people who have not agreed to be '
          'influenced, and doing so in a manner they are unlikely to '
          'notice. Defenders answer that every choice must be presented '
          'somehow, that there is no neutral arrangement, and that the '
          'question is therefore which arrangement rather than whether to '
          'have one.',
          'That answer is sound as far as it goes and does not dispose of '
          'the objection entirely, because it is one thing to arrange a '
          'form unavoidably and another to arrange it deliberately in '
          'pursuit of a result. The honest position is that the approach '
          'is cheap, occasionally effective, frequently small, and that it '
          'has been sold as considerably more than that.'],
         items=[
          ('Which paragraph describes the pension change and its result?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 1,
           'Participation rising from sixty per cent to above ninety.'),
          ('Which paragraph gives the results that are quoted less '
           'often?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 1,
           'Tax letters and appointment reminders.'),
          ('Which paragraph states the objection about consent?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
            'Paragraph 7'], 2,
           'Influencing people who have not agreed to be influenced.'),
          (
           'The writer believes the approach has been accurately '
           'described by its supporters.',
           ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph says it has been sold as more than it '
           'is.',
           {0: 'Yes would need accuracy; the final paragraph says it '
               'was oversold.', 2: 'Not Given is wrong because the writer rates the claims '
               'made for it.'}),
          (
           'The writer believes there is a neutral way to present a '
           'choice.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 6 reports the defenders\u2019 point that there is '
           'none.',
           {0: 'Yes would need neutrality to exist; paragraph 6 '
               'reports that it does not.', 2: 'Not Given is wrong because the question of neutrality '
               'is argued.'}),
          ('Under the new rule, employees had to apply in order to '
           '____________.', None, 'leave',
           'Paragraph 2, the reverse of the earlier arrangement.'),
          ('Redesigned tax letters produced rises of one or two '
           '____________ points.', None, 'percentage',
           'Paragraph 4, which the writer calls real and small.'),
          ('The pension result is unusual because the change is made '
           '____________ and requires nothing further.', None, 'once',
           'Paragraph 5, unlike a letter that must persuade again.')]),
    dict(heading='Why a shop puts the milk at the back',
         kind='Magazine article',
         task='Matching sentence endings',
         band='long',
         qtype='Questions 67-71',
         banklabel='Endings',
         bank=[
          'so a customer walks past everything else to reach it.',
          'because the decision is made in about two seconds.',
          'which is the most profitable shelf in the shop.',
          'although shoppers say they are not influenced by it.',
          'and the effect disappears once it is pointed out.',
          'because the supplier has paid for the position.',
          'which is why the layout rarely changes.'],
         skill=('Matching sentence endings',
                ['Each question is the first half of a sentence. Finish '
                 'it from the list and use each ending once only.',
                 'There are more endings than questions, so elimination '
                 'will not give you the last answer.',
                 'Two or three endings will fit the grammar of any '
                 'beginning. Choose the one the passage supports, not '
                 'the one that reads well.']),
         paras=[
          'A supermarket is one of the most carefully designed '
          'commercial spaces most people enter, and almost nothing in it '
          'is where it is by accident. The milk, the bread and the eggs '
          'are usually at the furthest point from the door, so a '
          'customer walks past everything else to reach it, and the '
          'distance is chosen rather than inherited from the building.',
          'The shelf height matters more than the aisle. Goods placed '
          'between about waist and eye level sell substantially better '
          'than the same goods a metre lower, and that band is the most '
          'profitable shelf in the shop. Manufacturers know it, and in '
          'many chains the position is sold: a product is at eye level '
          'because the supplier has paid for the position, which is a '
          'commercial arrangement rather than a judgement about '
          'quality.',
          'The decisions a shopper makes are faster than they feel. '
          'Studies that film people choosing between similar products '
          'find that the median time spent is under three seconds, and '
          'that packaging, colour and position account for most of the '
          'choice, because the decision is made in about two seconds. '
          'Price comparison, which shoppers describe as their main '
          'method, occupies a small minority of the time recorded.',
          'Music, lighting and smell are all adjusted and all have '
          'measurable effects. Slower music lengthens the visit and '
          'raises the amount spent; the bakery is placed where its smell '
          'reaches the entrance; lighting over fresh food is warmer than '
          'elsewhere in the building. The effects are modest '
          'individually and reliable in aggregate, although shoppers say '
          'they are not influenced by it.',
          'The arrangement is also expensive to alter. Moving a category '
          'means new shelving, a new plan for every store in the chain '
          'and a period during which regular customers cannot find '
          'anything, which is why the layout rarely changes. When a '
          'chain does rearrange, sales usually fall for several weeks '
          'before recovering, and the fall is the cost of the '
          'improvement.',
          'None of this is concealed, and that is the interesting part. '
          'The principles are published in trade manuals, taught on '
          'retail courses and described in newspapers every few years. '
          'Knowing about them changes behaviour less than anybody '
          'expects, and the experiments that have tested this find a '
          'small effect on the first visit and the effect disappears '
          'once it is pointed out.'],
         items=[
          ('Milk is placed at the back of the shop', None, 'A',
           'Paragraph 1 gives the walk past everything else as the '
           'reason for the distance.'),
          ('The band between waist and eye level is sold to suppliers',
           None, 'C',
           'Paragraph 2 calls that band the most profitable shelf in the '
           'shop.'),
          ('Packaging and position decide most choices', None, 'B',
           'Paragraph 3 gives the speed of the decision as the reason '
           'position matters so much.'),
          ('Music and lighting have reliable effects', None, 'D',
           'Paragraph 4 contrasts the measured effects with what '
           'shoppers say about themselves.'),
          ('A chain rearranges its stores rarely', None, 'G',
           'Paragraph 5 gives the cost and the disruption as the '
           'reason.')])],
   listen=[
    dict(heading='Two researchers disagree about nudges', part='Part 4',
         task='A recorded discussion', band='l4', qtype='Questions 72-77',
         script=[
          ('Chair', 'Dr Ferreira runs a behavioural unit. Professor Okonjo '
           'has written against them. Each will begin with their own '
           'weakest point.'),
          ('Ferreira', 'Mine is that we quote the pension result '
           'constantly and it is the least typical thing we have ever '
           'done. Sixty per cent to ninety. Nothing else we have published '
           'is in that league and we put it on the first slide every '
           'time.'),
          ('Okonjo', 'And mine is that I attack the small effects as if '
           'small meant worthless. A letter that raises tax payment by one '
           'point costs almost nothing and collects a great deal of money. '
           'I know that, and I still write as though it were a '
           'failure.'),
          ('Chair', 'So what is the actual disagreement?'),
          ('Okonjo', 'Durability. Her effects mostly need repeating. The '
           'pension one does not, which is why it is the good one. A '
           'letter has to persuade again next year and the year after, and '
           'the evidence on repeated trials is not encouraging.'),
          ('Ferreira', 'That is fair and it is the thing I would most want '
           'funded. We have almost no five-year follow-ups, because '
           'nobody funds the fifth year of anything.'),
          ('Okonjo', 'May I put the objection I care most about?'),
          ('Ferreira', 'Go on.'),
          ('Okonjo', 'Consent. You change how a form is arranged in order '
           'to produce a result, and the person filling it in does not '
           'know. Your answer is that every form is arranged somehow, and '
           'that is true and it is not the same thing as arranging it on '
           'purpose.'),
          ('Ferreira', 'I accept the distinction and I would ask what '
           'follows from it. If I must arrange the form anyway, what '
           'should I arrange it towards? Doing it badly on purpose is not '
           'more respectful.'),
          ('Okonjo', 'Publishing what you did would be. Not a journal '
           'paper. On the form.'),
          ('Ferreira', 'That I would accept tomorrow, and I do not think '
           'any minister would.')],
         items=[
          ('Dr Ferreira’s own weakest point is that the pension result '
           'is', ['disputed', 'the least typical thing they have done',
            'very old', 'from another country'], 1,
           'And it appears on the first slide every time.'),
          ('Professor Okonjo admits that he treats small effects as',
           ['dishonest', 'worthless', 'temporary', 'uncertain'], 1,
           'Although a one-point rise collects a great deal of money.'),
          ('The actual disagreement, he says, concerns',
           ['cost', 'durability', 'sample size', 'ethics'], 1,
           'Because most effects need repeating.'),
          ('Ferreira says almost nothing is known about five-year effects '
           'because nobody funds the ____________ year.', None, 'fifth',
           'Which she says is what she would most want funded.'),
          ('Okonjo’s main objection concerns',
           ['cost', 'consent', 'accuracy', 'speed'], 1,
           'Influencing somebody who does not know it is happening.'),
          ('What Okonjo proposes is publishing what was done on the',
           ['website', 'form', 'statute', 'receipt'], 1,
           'Rather than in a journal paper.')])],
   speak=dict(
    part='Part 3', focus='Changing behaviour without rules',
    sounds=[('The two th sounds are different: thing, think and both are '
             'voiceless, while this, that and they are voiced. Put your hand '
             'on your throat and you will feel the second group buzz.'),
            ('In connected speech the voiced one almost disappears after a '
             'consonant: in that case sounds like in nat case. That is normal, '
             'and it is not the same as replacing it with a d.'),
            ('The words you will use most in Part 3 are full of it: therefore, '
             'nevertheless, whether, although. Say each one inside a phrase '
             'rather than alone.'),
            ('Practise the hardest pair in the language for most learners: I '
             'think that that is the thing that matters. If you can say it at '
             'speed without a stumble, the sound is no longer costing you '
             'anything.'),
            ('Record thirty seconds on saving money. Count the th sounds you '
             'replaced with s, t or d, and say those words again inside their '
             'phrases.')],
    intro=('Five sentences. Try once to say that something is true and '
           'does not settle the question.'),
    qs=['Should governments try to change behaviour without passing '
        'laws?',
        'Is it fair to influence people without telling them?',
        'Which works better, a law or a small change to a form?',
        'Who should decide what behaviour is encouraged?'],
    shape=[('answer', 'Sometimes, and the pension example is the one that '
            'convinces me.'),
           ('support', 'Enrolment rose from sixty per cent to above '
            'ninety.'),
           ('follow-up', 'Nothing was compelled; only the direction of '
            'the paperwork changed.'),
           ('support', 'But most of the other results are one or two '
            'points.'),
           ('follow-up', 'So I would say it works, rarely as well as it '
            'is sold, and the consent question is not answered by saying '
            'every form is arranged somehow.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Changing behaviour by design rather than by law',
         prompt=('Some people say governments should change behaviour by '
                 'altering how choices are presented rather than by '
                 'passing laws. To what extent do you agree? Write at '
                 'least 250 words.'),
         model=[
          'I agree that governments should use these methods and I think '
          'the case for them is weaker than their supporters claim, which '
          'is an uncomfortable position and the one the evidence '
          'supports.',
          'The strongest argument in their favour is a single result. '
          'Where employees had to apply to join a workplace pension, '
          'participation stood at about sixty per cent; where they were '
          'enrolled automatically and had to apply to leave, it rose above '
          'ninety and has stayed there for more than a decade. Nothing was '
          'compelled and the paperwork was identical. A law achieving the '
          'same change would have cost far more and been resisted far '
          'more.',
          'The objection is that this result is quoted far more often than '
          'the ones that followed it. Redesigned tax letters produce rises '
          'of one or two percentage points. Appointment reminders reduced '
          'missed appointments by a quarter in some trials and by nothing '
          'in others. These effects are real, they are small, and several '
          'shrink when the trial is repeated.',
          'My own answer to that objection is that small and cheap is '
          'still worth having, provided it is described honestly. A letter '
          'that raises tax payment by one point costs almost nothing and '
          'collects a large sum. The error is not using the method; it is '
          'presenting a one-point effect in the language used for the '
          'pension result.',
          'There remains a question about consent, and I do not think it '
          'is fully answered. Supporters say every form must be arranged '
          'somehow, which is true, and arranging one deliberately to '
          'produce a result is still a different act. My view is that the '
          'methods should be used and should be printed on the form '
          'itself, so that the person filling it in can see what was '
          'done.'],
         notes=[
          'Structure 9: a position, the objection to it, and a rebuttal '
          'that does not simply dismiss the objection. Here the rebuttal '
          'concedes the size of the effects and relocates the fault to how '
          'they are described.',
          'The pension example carries real figures and the sentence '
          '"nothing was compelled and the paperwork was identical" is what '
          'makes it an argument rather than an anecdote.',
          'The final paragraph leaves an objection standing and proposes '
          'something about it. At this band most essays either ignore the '
          'ethical question or end on it vaguely; naming one concrete '
          'remedy is worth more than either.'],
         model65=[
                  'Some people say governments should change behaviour '
                  'by altering how choices are presented rather than '
                  'by passing laws. I partly agree.',
                  'There are advantages. Changing the default is cheap '
                  'and leaves people free to choose. When a country '
                  'makes organ donation the default option, donation '
                  'rates rise sharply, and anybody who objects can '
                  'still opt out. A law, by contrast, removes the '
                  'choice completely.',
                  'But there are limits. The effects are often small, '
                  'and some disappear after a few months. There is '
                  'also no neutral way to present a choice: something '
                  'has to come first on the form. So the question is '
                  'not whether to influence people but who decides '
                  'how, and that should be open to debate.',
                  'I think both tools are needed. Design is useful for '
                  'small everyday decisions where the cost of a '
                  'mistake is low. For serious harms, such as '
                  'dangerous products, a law is the right instrument. '
                  'Governments should also publish what they are '
                  'doing, so that people can see how a choice has been '
                  'arranged.',
                  ],
         gap65=[
                'It states the defenders\' strongest point - that there '
                'is no neutral presentation - and builds the '
                'conclusion on it rather than listing it as a '
                'limitation.',
                'It gives the condition under which design is the '
                'right instrument and the condition under which law '
                'is, instead of recommending both.',
                'It says what the published evidence actually shows '
                'about the size and persistence of the effects.',
                ],
         criterion=[('An objection taken seriously, not dismissed',
                     'Task Response'),
                    ('A rebuttal that relocates the fault',
                     'Task Response'),
                    ('A concrete proposal at the end',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'plan.',
         lines=18)],
   gram=dict(
    point='Concession and qualification in an argument',
    explain=('An argument improves when it admits what is true on the '
             'other side before answering it. These patterns concede '
             'without giving the argument away.'),
    examples=['The effect was real and it was small and it did not '
              'last.',
              'That is true, and it is not the same thing as arranging it '
              'on purpose.',
              'Small and cheap is still worth having, provided it is '
              'described honestly.',
              'The answer is sound as far as it goes.'],
    task='Rewrite each sentence so that it concedes and then answers.',
    items=[('The method does not work.',
            'The effects are real and they are small, which is an argument '
            'about how they are described rather than about using '
            'them.'),
           ('Critics are wrong about consent.',
            'The point about consent is a genuine one, although it applies '
            'to any arrangement of any form.'),
           ('The pension result proves it works.',
            'The pension result is strong evidence and it is also the '
            'least typical result the field has produced.'),
           ('Laws are better.',
            'A law would have achieved the same change, at a greater cost '
            'and against greater resistance.'),
           ('They should publish their methods.',
            'The methods should be used and should be published on the '
            'form itself rather than in a journal.')]),
   vocab=[('standard choice', 'what happens if you do nothing'),
          ('paternalism', 'deciding what is good for other people'),
          ('informed consent', 'agreement given in full knowledge'),
          ('measure taken', 'an action intended to change an outcome'),
          ('trial', 'a test of whether something works'),
          ('enduring', 'continuing over a long period'),
          ('compel', 'to force somebody to do something'),
          ('second look', 'a later check on an earlier result')],
   expr=[('the effect was real and it was small and it did not last',
          'three concessions in one sentence'),
         ('nothing was compelled and the paperwork was identical',
          'what makes the pension result strong'),
         ('it is quoted far more often than the results that followed '
          'it', 'names a selective use of evidence'),
         ('that is true, and it is not the same thing',
          'concedes without conceding the point')],
   trans=['admittedly', 'nevertheless', 'in short', 'even so'],
  ),
 ],
 technique=dict(
  title='The number-deletion test, on a Task 1 model',
  body=('Here is a test you can run on your own Task 1 answer in thirty '
        'seconds, and most candidates fail it the first time. Cover every '
        'number in what you have written. Read what is left. If the '
        'sentences still say something — the two essentials dominate the '
        'lower-income group, leisure moves the other way, clothing barely '
        'differs — then the numbers were supporting a description. If what '
        'is left is "housing was the largest, then food, then transport", '
        'you have not described the chart. You have read it aloud. The '
        'difference matters because the mark scheme asks you to select and '
        'report main features, and a list selects nothing. The fix is '
        'mechanical. Before you write, decide which items behave alike and '
        'group them; decide which one behaves differently and give it its '
        'own sentence; work out one figure the chart does not print, '
        'usually a total or a difference. Then write, and attach the '
        'numbers to those decisions rather than the other way round.'),
  panel=[('Cover the numbers',
          'Read what is left. If it says nothing, you listed instead of '
          'describing.'),
         ('Group what behaves alike',
          'Housing and food move together. One sentence, not two.'),
         ('Isolate what behaves differently',
          'The category that barely changes gets its own short sentence, '
          'at the end.'),
         ('Compute one figure',
          'A total, a difference, a sum of two slices. Something the '
          'chart does not print.')],
  task='Run the test on the Task 1 answer you wrote in cycle 3, then '
       'rewrite it once.',
  qs=['With the numbers covered, what does your answer still say?',
      'Which two items did you group, and why?',
      'Which item behaved differently?',
      'Which figure did you work out yourself?',
      'Is your Overall statement a grouping or a list?']),
 outlining=dict(
  title='Fill the outline, then write the body paragraph',
  body=('An outline is only useful if a paragraph can be written straight '
        'from it without rereading the question. Test yours like this. '
        'Each body heading should be a full sentence making a claim, not a '
        'topic. "Advertising and children" is a topic and gives you '
        'nothing to write; "children under eight cannot identify an '
        'advertisement as one" is a claim and the paragraph is already '
        'half built. Under each heading put two supports, and make at '
        'least one of them a fact rather than a reason — a figure, a '
        'country, a study. Then write the paragraph in this order: the '
        'claim, the first support, the second support, one sentence saying '
        'what it means for the question. Four sentences, and it will be a '
        'better paragraph than the six you would have written without the '
        'plan.'),
  frame=('Advertising aimed at children under twelve should be banned '
         'during children’s programming, because the mechanisms that make '
         'advertising work are ones children cannot be taught to resist, '
         'and because the alternative remedy puts the duty on the wrong '
         'person',
         [('Children cannot be taught to resist the mechanisms',
           ['anchoring survives a warning even in adults',
            'under about eight, children do not identify an advertisement '
            'as one']),
          ('Educating the buyer is the wrong remedy',
           ['the duty would fall on parents during the programme itself',
            'several countries already restrict it and their broadcasters '
            'survived'])]),
  task='Write one body paragraph from the frame above without looking at '
       'the question again.',
  qs=['Is each of your headings a claim rather than a topic?',
      'Is at least one support under each heading a fact?',
      'Could somebody else write your paragraph from your outline?',
      'How many sentences did the paragraph take?',
      'Did you need to reread the question while writing it?'],
  answers=['a heading without a verb is usually a topic',
           'a figure, a country or a study counts; a reason does not',
           'that is the only real test of an outline',
           'four is normal and is enough',
           'if you did, the outline was not finished']),
 candos=['I can read a comparison table for the option that differs',
         'I can run the number-deletion test on my own Task 1 answer',
         'I can describe two pie charts by grouping slices',
         'I can explain why a falling share is not falling spending',
         'I can concede a point and still answer it'],
 tip=('Cover the numbers in your Task 1 answer and read what is left. If '
      'it does not say anything, you listed the chart instead of '
      'describing it, and no amount of accurate data will fix that.'),
)
