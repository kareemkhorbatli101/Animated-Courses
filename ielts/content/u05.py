# -*- coding: utf-8 -*-
"""Unit 5 - Technology and Computing. IELTS Volume 1, band 5.0."""

_SCREEN = dict(kind='bar',
               title='Hours a day spent on four kinds of screen',
               sub='two age groups, average weekday, 2024',
               ylab='hours a day',
               cats=['Phone', 'Television', 'Computer at work',
                     'Games console'],
               series=[('16-24', [4.6, 1.2, 2.4, 1.8]),
                       ('45-64', [2.1, 2.8, 3.6, 0.4])])

UNIT = dict(
 n=5, vol=1, level='B1', band='5.0',
 theme='Technology and Computing',
 opener=(
   'A broadband connection that keeps failing, four people with four '
   'ways of keeping an account safe, a chart of how long two age groups '
   'look at four kinds of screen, and then the question this unit is '
   'really about: when a machine puts one answer above another, what is '
   'it actually measuring? The technique page is about Listening, and '
   'about the one skill that separates a band 5 from a band 6 in that '
   'paper: what you do in the four seconds after you miss an answer.'),

 cycles=[
  dict(
   sub='Getting online',
   step=1,
   read=[
    dict(heading='Broadband packages compared',
         kind='Comparison table',
         task='Matching features and note completion',
         band='gt_short', qtype='Questions 1-6',
         skill=('A package comparison is read for what the price '
                'excludes',
                ['The monthly price is the easy fact. The questions are '
                 'usually about the contract length, the set-up charge '
                 'and what happens after the first year.',
                 'One package in every table has a condition the others '
                 'do not. Find it on the first pass.']),
         paras=[
          'Package A costs £24 a month for 24 months, rising to £31 after '
          'the first 12. Average speed 38 Mbps. Installation is free if '
          'a line already exists at the property.',
          'Package B costs £29 a month for 18 months with no price rise '
          'during the contract. Average speed 67 Mbps. Installation is '
          '£49 in every case.',
          'Package C costs £36 a month on a rolling monthly basis, so it '
          'may be cancelled at any time with 30 days’ notice. Average '
          'speed 67 Mbps and installation is free.',
          'Package D costs £41 a month for 24 months. Average speed 145 '
          'Mbps, installation free, and it includes an engineer visit if '
          'the speed falls below 100 Mbps for more than a week.',
          'All four include a router. Only Package D includes a '
          'replacement router if yours fails after the first year; under '
          'the others a replacement costs £65.',
          'Compensation for a loss of service is paid automatically from '
          'the third full day without a connection, at £8.40 a day, on '
          'all four packages.'],
         items=[
          ('Which package can be cancelled at any time?',
           ['A', 'B', 'C', 'D'], 2,
           'Paragraph 3: a rolling monthly basis with 30 days\u2019 notice.',
           {0: 'Package A is a 24-month contract with a price rise.', 1: 'Package B runs for 18 months.', 3: 'Package D is a 24-month contract.'}),
          ('Which package has no price rise during the contract?',
           ['A', 'B', 'C', 'D'], 1,
           'Paragraph 2, held for the whole 18 months.',
           {0: 'Package A rises from \u00a324 to \u00a331 after 12 months.', 2: 'Package C is monthly, so there is no contract to hold '
               'a price.', 3: 'Package D gives no undertaking about the price.'}),
          ('Which package includes an engineer visit for slow speed?',
           ['A', 'B', 'C', 'D'], 3,
           'Paragraph 4, below 100 Mbps for more than a week.',
           {0: 'Package A offers no engineer visit for slow speed.', 1: 'Package B offers no speed guarantee.', 2: 'Package C offers no engineer visit either.'}),
          ('Package A rises to £____________ a month after the first '
           'year.', None, '31',
           'Paragraph 1, from £24 for the first 12 months.'),
          ('A replacement router costs £____________ on packages A, B '
           'and C.', None, '65',
           'Paragraph 5, where only D includes one.'),
          ('Compensation begins on the ____________ full day without a '
           'connection.', None, 'third',
           'Paragraph 6, paid automatically at £8.40 a day.')]),
    dict(heading='What to do if your connection drops',
         kind='Troubleshooting notice', task='Note completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'First check the lights on the router. A steady blue light '
          'means the connection is working and the problem is in your '
          'own equipment. A flashing red light means there is no signal '
          'reaching the property.',
          'If the light is red, switch the router off at the wall, wait '
          'two minutes and switch it on again. Do not simply press the '
          'reset button, which erases your settings and does not help.',
          'If the light is still red after ten minutes, check our status '
          'page for an outage in your area. Reported outages are usually '
          'cleared within four hours and no fault report is needed.',
          'If there is no outage, report the fault online. You will be '
          'given a fault code, and an engineer appointment is offered '
          'only after a remote test has been run, which takes about an '
          'hour.'],
         items=[
          ('A flashing red light means no ____________ is reaching the '
           'property.', None, 'signal',
           'Paragraph 1, as against a steady blue light.'),
          ('After switching off, wait ____________ minutes before '
           'switching on again.', None, 'two',
           'Paragraph 2, and do not press reset.'),
          ('Reported outages are usually cleared within ____________ '
           'hours.', None, 'four',
           'Paragraph 3, with no fault report needed.'),
          ('An engineer appointment is offered only after a '
           '____________ test.', None, 'remote',
           'Paragraph 4, which takes about an hour.')])],
   listen=[
    dict(heading='Reporting a fault', part='Part 1',
         task='A telephone call to a broadband provider · note completion', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Agent', 'Thank you for holding. Can I take your account '
           'number?'),
          ('Customer', 'Seven four one nine, two six.'),
          ('Agent', 'Seven four one nine, two six. Mrs '
           'Achterberg-Nwosu?'),
          ('Customer', 'Yes.'),
          ('Agent', 'How can I help?'),
          ('Customer', 'My connection has been dropping for eleven days. '
           'It goes off for about twenty minutes, several times a '
           'day.'),
          ('Agent', 'Have you reported it before?'),
          ('Customer', 'Twice. On the fourth and the ninth.'),
          ('Agent', 'I can see one report. Let me run a remote test '
           'while we talk.'),
          ('Customer', 'The router light goes red when it happens, and '
           'blue again afterwards.'),
          ('Agent', 'That is useful. The test shows a fault on the line '
           'rather than in the router. Fault code is L as in lima, two '
           'three four.'),
          ('Customer', 'So it is not my equipment.'),
          ('Agent', 'It is not. I am booking an engineer. The next '
           'appointment is Thursday morning, eight until one.'),
          ('Customer', 'I work on Thursday. Is there a Saturday?'),
          ('Agent', 'Saturday the twentieth, one until six.'),
          ('Customer', 'That one, please. And compensation?'),
          ('Agent', 'Automatic from the third full day of total loss. '
           'Yours is dropping rather than off, so it does not qualify, '
           'which I know will not please you.'),
          ('Customer', 'It does not.'),
          ('Agent', 'You can ask for a goodwill payment once the fault '
           'is fixed, and most people in your position get one.')],
         items=[
          ('Account number: ____________', None, '741926',
           'Read back by the agent at the start.'),
          ('The connection has been dropping for ____________ days.',
           None, 'eleven', 'Several times a day, for about twenty '
           'minutes.'),
          ('Fault code: L____________', None, '234',
           'Given by the agent after the remote test.'),
          ('The fault is on the ____________ rather than in the '
           'router.', None, 'line',
           'Which the remote test established.'),
          ('Appointment chosen: Saturday the ____________', None,
           'twentieth', 'An afternoon appointment, from one until six.'),
          ('Automatic compensation applies only after a total loss of '
           '____________ days.', None, 'three',
           'So a dropping connection does not qualify.')])],
   speak=dict(
    part='Part 1', focus='Technology you could not do without',
    intro=('Two or three sentences each. Name the thing and say what '
           'you use it for.'),
    qs=['What piece of technology do you use most?',
        'Could you manage without the internet for a week?',
        'Do you prefer calling or messaging?',
        'Has technology changed how you work or study?'],
    shape=[('answer', 'My phone, and mostly for maps rather than '
            'anything clever.'),
           ('support', 'I could manage without it for a week at home '
            'and not at work.'),
           ('follow-up', 'Everything at work arrives through it now, '
            'which I think is a change for the worse.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Complaining about a service that keeps failing',
         prompt=('Your internet connection has failed repeatedly. Write '
                 'a letter to the company. In your letter: describe the '
                 'problem and when it started; say what you have '
                 'already done; say what you want the company to do. '
                 'Write at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing about the broadband service at 12 Culverhay '
          'Road, account 741926, which has been failing repeatedly since '
          '4 October.',
          'The connection drops for about twenty minutes at a time, '
          'several times a day, and the router light turns red while it '
          'is down. This has now happened on more than thirty occasions '
          'since the beginning of the month.',
          'I have reported the fault twice, on 4 and 9 October, and have '
          'twice been asked to restart the router, which I had already '
          'done. A remote test on 15 October finally showed that the '
          'fault is on the line and not in my equipment, and an engineer '
          'is booked for Saturday 20 October.',
          'I would like two things. First, please confirm that the '
          'engineer will attend on the twentieth, as I have taken the '
          'afternoon off work for it. Second, I would like a goodwill '
          'payment for the sixteen days during which I have paid in full '
          'for a service that has not worked.',
          'I should be grateful for a reply in writing within seven '
          'days.',
          'Yours faithfully,',
          'Philippa Achterberg-Nwosu'],
         notes=[
          'The complaint is specific about frequency: twenty minutes at a '
          'time, more than thirty times, since a stated date. "It keeps '
          'going off" cannot be checked and will be answered with a '
          'suggestion to restart the router.',
          'Reporting what the writer has already tried closes off the '
          'standard first reply. A complaint that pre-empts the obvious '
          'answer gets a second-line response.',
          'Two numbered requests, each with a reason, and a deadline. '
          'Complaints without a requested outcome are filed; complaints '
          'with one are actioned.'],
         criterion=[('A problem described in checkable detail',
                     'Task Achievement'),
                    ('Pre-empting the standard first reply',
                     'Task Response'),
                    ('Two requests, each with a reason',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Present perfect continuous for ongoing problems',
    explain=('A problem that started in the past and is still happening '
             'takes the present perfect continuous, usually with for or '
             'since.'),
    examples=['The connection has been dropping since 4 October.',
              'I have been waiting eleven days for an engineer.',
              'This has now happened on more than thirty occasions.',
              'We have been paying in full for a service that has not '
              'worked.'],
    task='Rewrite each sentence using the present perfect continuous.',
    items=[('The connection drops. It started on 4 October.',
            'The connection has been dropping since 4 October.'),
           ('I am still waiting. It has been eleven days.',
            'I have been waiting for eleven days.'),
           ('I pay the full amount every month and it does not work.',
            'I have been paying in full for a service that has not been '
            'working.'),
           ('You promised an engineer two weeks ago.',
            'I have been waiting for the engineer you promised two weeks '
            'ago.'),
           ('The light goes red every day.',
            'The router light has been turning red several times a day '
            'since the problem began.')]),
   vocab=[('outage', 'a period when a service is not working'),
          ('broadband', 'a fast internet connection'),
          ('router', 'the box that connects a home to the internet'),
          ('fault code', 'a reference number for a reported problem'),
          ('engineer', 'a person who repairs equipment'),
          ('goodwill payment', 'money paid without accepting blame'),
          ('rolling contract', 'an agreement that continues month by '
           'month'),
          ('remote test', 'a check carried out from a distance')],
   expr=[('this has now happened on three occasions since',
          'states frequency in a complaint'),
         ('I had already done that before telephoning',
          'closes off the standard first reply'),
         ('I have taken the afternoon off work for it',
          'gives a reason for a request'),
         ('a reply in writing within seven days',
          'sets a deadline politely')],
   trans=['furthermore', 'in addition', 'secondly', 'accordingly'],
  ),

  dict(
   sub='Passwords and privacy',
   step=2,
   read=[
    dict(heading='Four people on keeping accounts safe',
         kind='Four short texts',
         task='Matching features and True/False/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Casimir: I used the same password everywhere for nine '
          'years. Then one company lost its customer list and somebody '
          'got into four of my accounts in one evening. The password was '
          'not weak. It was repeated, which turns out to be a different '
          'problem.',
          'B  Lucinde: I write them down in a notebook in a drawer. '
          'Everybody tells me this is terrible and nobody can explain '
          'who is going to come to my house for it. The threat I face is '
          'somebody in another country with a list, not a burglar.',
          'C  Teodor: Two-factor authentication, on everything, since my '
          'brother lost his email. It is slightly annoying about once a '
          'day and it has stopped three attempts that I know about, '
          'because I got the message and did not approve it.',
          'D  Yevgenia: I used a password manager for two years and then '
          'forgot the one password that opens it. That took a weekend to '
          'recover from and I still use it, because the alternative is '
          'what I did before, which was worse.'],
         items=[
          (
           'Which person had accounts broken into after a company lost '
           'data?',
           ['Casimir', 'Lucinde', 'Teodor', 'Yevgenia'], 0,
           'Four accounts in one evening, because the password was '
           'repeated.',
           {1: 'Lucinde describes her method and the threat she faces, '
               'not a breach.', 2: 'Teodor acted after his brother lost an email account.', 3: 'Yevgenia had trouble with her own password manager.'}),
          (
           'Which person argues about which threat actually applies to '
           'them?',
           ['Casimir', 'Lucinde', 'Teodor', 'Yevgenia'], 1,
           'Somebody in another country with a list, not a burglar.',
           {0: 'Casimir describes what happened rather than which '
               'threat applies.', 2: 'Teodor reports what his method has stopped.', 3: 'Yevgenia compares her tool with what she did before.'}),
          (
           'Which person has had attempts blocked and knows about '
           'them?',
           ['Casimir', 'Lucinde', 'Teodor', 'Yevgenia'], 2,
           'Three attempts, each refused when the message arrived.',
           {0: 'Casimir found out after four accounts had been '
               'entered.', 1: 'Lucinde reports no attempts at all.', 3: 'Yevgenia reports losing access herself, not blocking '
               'an attempt.'}),
          ('Which person had difficulty with the tool they chose?',
           ['Casimir', 'Lucinde', 'Teodor', 'Yevgenia'], 3,
           'Forgetting the one password that opens the manager.',
           {0: 'Casimir had no tool; he repeated one password.', 1: 'Lucinde uses a notebook and reports no difficulty with '
               'it.', 2: 'Teodor calls his method slightly annoying, not a '
               'difficulty.'}),
          ('Casimir says his password was weak.',
           ['True', 'False', 'Not Given'], 1,
           'He says it was not weak but repeated.',
           {0: 'True would need weakness; he says it was strong but '
               'repeated everywhere.', 2: 'Not Given is wrong because he describes the password '
               'he used.'}),
          ('Lucinde keeps her notebook in a locked drawer.',
           ['True', 'False', 'Not Given'], 2,
           'A drawer is mentioned; whether it locks is not.',
           {0: 'True would need the lock; only a drawer is mentioned.', 1: 'False would need the text to say it does not lock, and '
               'it is silent.'})])],
   listen=[
    dict(heading='An IT officer on account security', part='Part 2',
         task='A talk to new staff · note completion', band='l2',
         qtype='Questions 23-28',
         script=[
          ('Officer', 'Fifteen minutes on account security, and I am '
           'going to spend most of it correcting things you have been '
           'told that are no longer true.'),
          ('Officer', 'First: complicated passwords. The advice about '
           'capital letters and symbols comes from the nineteen '
           'nineties and it produced passwords that people cannot '
           'remember and therefore write down or reuse. Length matters '
           'far more than punctuation.'),
          ('Officer', 'Second, and this is the important one: reuse is '
           'the real danger. Almost nobody is attacked by somebody '
           'guessing their password. What happens is that a company you '
           'dealt with in twenty eighteen loses its list, and a machine '
           'tries your email and that password on four hundred other '
           'sites.'),
          ('Officer', 'Third, two-factor authentication. It stops '
           'essentially all of that, because the password alone is no '
           'longer enough. It is mildly irritating and it is the single '
           'most useful thing in this talk.'),
          ('Officer', 'Fourth, the notebook. I am not going to tell you '
           'to burn it. If your threat is a list of passwords sold '
           'online, a notebook in a drawer at home is genuinely safer '
           'than one password used everywhere. Think about who is '
           'actually coming for you.'),
          ('Officer', 'And last, changing passwords every ninety days. '
           'We stopped requiring that in twenty twenty-two, because '
           'people responded by adding a number to the end, which '
           'defeated the whole point.')],
         items=[
          ('He says the advice about symbols comes from the '
           '____________.', None, 'nineties',
           'And produced passwords people cannot remember.'),
          ('What does he say matters far more than punctuation?', None,
           'length', 'In choosing a password that will hold.'),
          ('What does he say the real danger is?', None, 'reuse',
           'Rather than somebody guessing a password.'),
          ('A machine tries a leaked password on about ____________ '
           'other sites.', None, 'four hundred',
           'After a company loses its customer list.'),
          ('He calls two-factor authentication the single most '
           '____________ thing in the talk.', None, 'useful',
           'Despite being mildly irritating.'),
          ('They stopped requiring password changes every ninety days '
           'because people added a ____________ to the end.', None,
           'number', 'Which defeated the purpose of the rule.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Being online',
    longturn=[('The thing I do to stay safe online is use a password manager, '
               'which means every account I have got has a different password '
               'and I know none of them.'),
              ('I started about four years ago, after a website I had used was '
               'broken into and I got an email telling me to change my '
               'password everywhere.'),
              ('It was difficult for the first fortnight and then it became '
               'easier than what I was doing before. The hard part was the '
               'beginning: I had to go through every account I could remember, '
               'change the password, and save the new one. It took me two '
               'evenings and I am sure I missed some.'),
              ('I do it because of what the alternative actually means. '
               'Before, I had three passwords that I used everywhere with '
               'small changes, which means one broken website would have given '
               'somebody access to my email, and from my email they could have '
               'reset everything else. I had never thought about it in that '
               'order until it nearly happened. Now the worst case is one '
               'account, and I can see which one. It is not perfect security, '
               'but it is the single thing that made the biggest difference '
               'for the least effort.')],
    intro=('Short answers, then the long turn. Say what you do, and '
           'then why.'),
    cue=('Describe something you do to stay safe online.',
         ['what you do', 'when you started doing it',
          'how difficult it is', 'and explain why you do it']),
    qs=['Do you worry about your information online?',
        'Have you ever had an account broken into?',
        'Now look at the card. You have one minute to make notes.',
        'Should children be taught about this at school?'],
    shape=[('answer', 'I use a different password for anything with '
            'money attached.'),
           ('support', 'I started after a friend lost his email '
            'account.'),
           ('follow-up', 'It is not difficult, it is just a nuisance '
            'about twice a week.'),
           ('support', 'The reason is that the danger is not somebody '
            'guessing.'),
           ('follow-up', 'It is a company losing a list and a machine '
            'trying that password everywhere else.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should companies be fined when they lose customer '
                 'data?',
         prompt=('Some people believe companies should be fined when '
                 'they lose customers’ personal data. To what extent '
                 'do you agree? Write at least 250 words.'),
         model=[
          'I agree that companies should be fined for losing customer '
          'data, for one reason that is stronger than the usual ones: '
          'the company that loses the data does not suffer the harm, so '
          'without a fine nobody involved has any reason to prevent '
          'it.',
          'The first argument is about who pays. When a list of '
          'customers is stolen, the cost falls on the customers, who '
          'spend days changing passwords, cancelling cards and '
          'sometimes losing money. The company loses a little '
          'reputation, which fades in about a month. A fine moves part '
          'of the cost back to the party that could have prevented it, '
          'which is the only mechanism that reliably changes '
          'behaviour.',
          'The second argument is that security is invisible until it '
          'fails. A manager choosing between a new product and a '
          'security upgrade is choosing between something customers can '
          'see and something they cannot, and the second will lose every '
          'time unless there is a cost attached to the failure.',
          'There is a fair objection. Very large fines fall most heavily '
          'on small companies, which may be ruined by a mistake that a '
          'large company absorbs as an expense. This is a genuine '
          'problem, and it argues for fines set as a proportion of '
          'revenue rather than as a fixed sum, which is what several '
          'countries now do.',
          'In conclusion, I support fines, with the proportion fixed by '
          'size rather than by the number of records lost. The purpose '
          'is not to punish but to make prevention cheaper than failure, '
          'and a fine is the only thing that puts those two in the same '
          'calculation.'],
         notes=[
          'Structure 1 with a single clear mechanism: the party that '
          'could prevent the harm does not suffer it. One idea that '
          'explains the whole position is worth more than three weak '
          'reasons.',
          'The objection is answered by changing the proposal rather '
          'than by dismissing it. Adjusting your own recommendation in '
          'response to a real objection reads as judgement.',
          'The final sentence states the purpose of the policy, which is '
          'different from restating the position, and gives the essay '
          'somewhere to end.'],
         criterion=[('One mechanism that explains the position',
                     'Task Response'),
                    ('An objection answered by amending the proposal',
                     'Task Response'),
                    ('A conclusion that states a purpose',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Obligation and prohibition: are required to, must not',
    explain=('Rules about what organisations have to do need precise '
             'obligation language, and the negative forms are not '
             'interchangeable.'),
    examples=['Companies are required to report a loss within 72 '
              'hours.',
              'Staff must not reuse a work password on a personal '
              'account.',
              'Customers need not be told if the data was encrypted.',
              'The company is obliged to pay compensation only after '
              'three days.'],
    task='Rewrite each sentence with a precise obligation form.',
    items=[('Companies have to tell people quickly.',
            'Companies are required to report a data loss within '
            'seventy-two hours.'),
           ('Do not use your work password elsewhere.',
            'Staff must not use a work password on any personal '
            'account.'),
           ('They do not have to tell anybody if it was encrypted.',
            'Customers need not be notified where the data was '
            'encrypted.'),
           ('Fines should depend on how big the company is.',
            'Fines ought to be set as a proportion of a company’s '
            'revenue.'),
           ('You cannot share your log-in.',
            'Log-in details must not be shared with anybody, including '
            'colleagues.')]),
   vocab=[('data loss', 'the escape of information held by a '
           'company'),
          ('encryption', 'scrambling data so it cannot be read'),
          ('two-factor', 'needing a second check as well as a '
           'password'),
          ('credentials', 'the details used to log in'),
          ('password manager', 'a program that stores passwords'),
          ('reuse', 'using the same password in several places'),
          ('log-in', 'the act of entering an account'),
          ('customer list', 'the records a company holds about '
           'buyers')],
   expr=[('the responsibility surely lies with',
          'places responsibility in an argument'),
         ('the company that loses the data does not suffer the harm',
          'the sentence this cycle turns on'),
         ('think about who is actually coming for you',
          'reframes a risk sensibly'),
         ('prevention cheaper than failure',
          'states the purpose of a penalty')],
   trans=['firstly', 'secondly', 'finally', 'in practice'],
  ),

  dict(
   sub='Screens and attention',
   step=2,
   read=[
    dict(heading='How long people look at a screen',
         kind='Article',
         task='Matching information and note completion',
         band='gt_work', qtype='Questions 29-34',
         figure=_SCREEN,
         paras=[
          'The chart above shows how long two age groups spent on four '
          'kinds of screen on an average weekday. The totals are '
          'similar, at about ten hours and nine hours, and almost '
          'everything else about them is different.',
          'The youngest group spends more than twice as long on a phone '
          'as the older one, and the older group spends more than twice '
          'as long in front of a television. Those two differences are '
          'the ones that get reported, usually with an opinion attached '
          'about which is worse.',
          'The largest single figure for the older group is the computer '
          'at work, at 3.6 hours, which is also the figure nobody '
          'includes when they describe screen time as a leisure '
          'problem. A great deal of screen use is simply employment.',
          'The difficulty with all of these numbers is that they measure '
          'duration rather than attention. Four hours of phone use '
          'divided into ninety separate pick-ups is a different thing '
          'from four hours of reading, and no survey of this kind '
          'separates them.',
          'What research does separate is interruption. The cost of '
          'being interrupted is not the interruption; it is the time '
          'taken to return to what you were doing, which is measured in '
          'minutes rather than seconds and is the reason a day can '
          'disappear without anything being completed.'],
         items=[
          ('Which paragraph points out that much screen time is work?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'],
           2,
           'The computer at work is the largest figure for the older '
           'group.',
           {0: 'Paragraph 1 gives the totals for the two groups.', 1: 'Paragraph 2 compares phones with television.', 3: 'Paragraph 4 is about duration and attention.'}),
          ('Which paragraph says the figures measure the wrong thing?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           2, 'Duration rather than attention.',
           {0: 'Paragraph 2 reports the two differences usually '
               'quoted.', 1: 'Paragraph 3 identifies work as a large part of the '
               'total.', 3: 'Paragraph 5 is about interruption rather than '
               'measurement.'}),
          (
           'Which paragraph explains the real cost of an interruption?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           3, 'The time taken to return to the task.',
           {0: 'Paragraph 2 compares the two age groups.', 1: 'Paragraph 3 identifies work as a large part of the '
               'total.', 2: 'Paragraph 4 is about duration rather than attention.'}),
          ('The two groups’ totals are about ten hours and '
           '____________ hours.', None, 'nine',
           'Paragraph 1, which is where the similarity ends.'),
          ('The older group spends ____________ hours a day at a work '
           'computer.', None, '3.6',
           'Paragraph 3, their largest single figure.'),
          ('The cost of an interruption is the time taken to '
           '____________ to the task.', None, 'return',
           'Paragraph 5, measured in minutes.')])],
   listen=[
    dict(heading='Two students on phone habits', part='Part 3',
         task='A discussion between two students · note completion and multiple choice', band='l3',
         qtype='Questions 35-40',
         script=[
          ('Casimir', 'My phone says four hours forty yesterday. I do '
           'not believe it.'),
          ('Lucinde', 'Believe it. Mine says three and a half and I '
           'thought it would be one.'),
          ('Casimir', 'The number that frightened me was not the hours. '
           'It was the pick-ups. Ninety-four.'),
          ('Lucinde', 'In a day?'),
          ('Casimir', 'In a day. Which is roughly once every ten minutes '
           'that I am awake.'),
          ('Lucinde', 'So you are never doing anything for ten minutes '
           'without stopping.'),
          ('Casimir', 'That is what it means, and it explains why '
           'reading a chapter now takes me an hour.'),
          ('Lucinde', 'Have you tried turning the notifications off? '
           'That is what everybody recommends.'),
          ('Casimir', 'I turned them off for a fortnight. The pick-ups '
           'went from ninety-four to seventy-one.'),
          ('Lucinde', 'So most of it was you rather than the phone '
           'asking for you.'),
          ('Casimir', 'Most of it was me, which was not the result I '
           'wanted at all and is probably the most useful thing I have '
           'learned this year. I had been blaming the phone for '
           'something I was doing.'),
          ('Lucinde', 'What worked better?'),
          ('Casimir', 'Leaving it in another room. Not switched off, '
           'not on silent, physically in another room. Twenty-two '
           'pick-ups in the whole day.'),
          ('Lucinde', 'Down from ninety-four with the phone in the room.'),
          ('Casimir', 'The distance does what the willpower does not. I '
           'am slightly embarrassed by how well it works.')],
         items=[
          ('Casimir’s phone reported ____________ hours forty '
           'minutes.', None, 'four',
           'Against Lucinde’s three and a half.'),
          ('Which figure worried Casimir?', None, 'pick-ups',
           'Ninety-four of them in a single day.'),
          ('That is roughly once every ____________ minutes he is '
           'awake.', None, 'ten',
           'Which he connects to how long reading now takes.'),
          ('Turning notifications off reduced pick-ups to '
           '____________.', None, 'seventy-one',
           'Measured over a fortnight of trying it.'),
          ('Leaving the phone in another room reduced them to',
           ['fifty-one', 'thirty-three', 'twenty-two', 'eleven'], 2,
           'Down from ninety-four when it was on the desk.',
           {0: 'Fifty-one is not a figure given in the conversation.', 1: 'Thirty-three is not one of the counts mentioned.', 3: 'Eleven is lower than any figure he reports.'}),
          ('What does he say does what willpower does not?', None,
           'the distance', 'Which he admits is slightly embarrassing.')])],
   speak=dict(
    part='Part 3', focus='Attention and distraction',
    intro=('Three or four sentences. Use a number if you have one.'),
    qs=['Do people find it harder to concentrate than they used to?',
        'Should phones be banned in schools?',
        'How do you avoid distractions when you work?',
        'Is it a problem that people check their phones so often?'],
    shape=[('answer', 'Harder, and I think the measurement explains '
            'it.'),
           ('support', 'A friend of mine picked his phone up '
            'ninety-four times in one day.'),
           ('follow-up', 'That is once every ten minutes he was '
            'awake.'),
           ('support', 'Turning off notifications only helped a '
            'little.'),
           ('follow-up', 'What worked was putting it in another room, '
            'which suggests the problem is habit rather than the '
            'alerts.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Hours a day on four kinds of screen, by age group',
         prompt=('The chart below shows the average number of hours a '
                 'day two age groups spent on four kinds of screen in '
                 '2024. Summarise the information by selecting and '
                 'reporting the main features, and make comparisons '
                 'where relevant. Write at least 150 words.'),
         figure=_SCREEN,
         model=[
          'The bar chart compares the average number of hours a day '
          'spent on four kinds of screen by people aged 16 to 24 and by '
          'people aged 45 to 64. Overall, the younger group spent far '
          'longer on phones and games consoles, while the older group '
          'spent longer on television and on a computer at work, so '
          'that the two groups divided neatly between leisure devices '
          'and the rest.',
          'The largest difference was the phone. The younger group spent '
          '4.6 hours a day on it, more than twice the 2.1 hours recorded '
          'for the older group, and this was the highest single figure '
          'in the chart.',
          'The older group’s largest figure was the work computer, at '
          '3.6 hours against 2.4 for the younger group. Television '
          'showed a similar pattern in reverse, at 2.8 hours for the '
          'older group and only 1.2 for the younger.',
          'The games console produced the widest proportional gap, '
          'though not the widest absolute one: 1.8 hours for the '
          'younger group against 0.4 for the older, which is more than '
          'four times as much.'],
         notes=[
          'The Overall statement does more than name the biggest bar: it '
          'describes how the two groups divide. On a two-series chart, '
          'that pattern is the thing being tested.',
          'The fourth paragraph distinguishes the widest proportional gap '
          'from the widest absolute one, which shows the examiner that '
          'the comparison was thought about rather than read off.',
          'Every figure is paired with the other group’s figure for the '
          'same device. Reporting one series and then the other is the '
          'commonest way to lose Coherence marks here.'],
         criterion=[('An Overall describing how the groups divide',
                     'Task Achievement'),
                    ('Proportional and absolute gaps distinguished',
                     'Task Achievement'),
                    ('Figures paired by device, not listed by series',
                     'Coherence and Cohesion')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Expressing proportion and change together',
    fix=dict(
     text=('The pie chart shows that 45 per cent of the energy was used for '
           'heating, while the line graph shows a fall in total consumption. '
           'The proportion of heating rose by 45 per cent to 52 per cent over '
           'the decade. Electricity accounted 18 per cent of the total in '
           '2020. Three quarters of the households was connected to the '
           'network.'),
     faults=[('rose by 45 per cent to 52 per cent',
              'rose from 45 per cent to 52 per cent',
              ('From marks the starting figure. By would mean it rose by '
               'forty-five points.')),
             ('Electricity accounted 18 per cent',
              'Electricity accounted for 18 per cent',
              'Account takes for before the share it covers.'),
             ('Three quarters of the households was connected',
              'Three quarters of the households were connected',
              'The verb agrees with households, which is plural.')]),
    explain=('A comparison is clearer when the proportion and the '
             'absolute difference are not confused with each other.'),
    examples=['The younger group spent roughly twice as long on a phone '
              'as the older one.',
              'The gap was 2.5 hours, which is the largest absolute '
              'difference.',
              'Console use was more than four times higher, though the '
              'gap was only 1.4 hours.',
              'Television use was less than half that of the older '
              'group.'],
    task='Rewrite each comparison so that proportion and size are both '
         'clear.',
    items=[('Young people use phones much more.',
            'The younger group spent 4.6 hours a day on a phone, more '
            'than twice the older group’s 2.1.'),
           ('Consoles are mainly used by young people.',
            'Console use was more than four times higher among the '
            'younger group, although the difference was only 1.4 '
            'hours.'),
           ('Older people watch more television.',
            'The older group spent 2.8 hours watching television against '
            '1.2 for the younger, more than double.'),
           ('Work computers are used more by older people.',
            'Work computer use was 1.2 hours a day higher in the older '
            'group, at 3.6 against 2.4.'),
           ('The totals are close.',
            'The two totals were similar, at about ten and nine hours '
            'respectively.')]),
   vocab=[('screen time', 'time spent looking at a screen'),
          ('pick-up', 'one occasion of taking up a phone'),
          ('multitask', 'to do several things at once'),
          ('focus', 'sustained attention on one thing'),
          ('pop-up message', 'a message that interrupts you'),
          ('time spent', 'how long something lasts'),
          ('habit', 'something done without deciding'),
          ('leisure', 'time not spent working')],
   expr=[('the youngest group spends roughly twice as long as',
          'compares two series on one bar'),
         ('duration rather than attention',
          'names what the figures measure'),
         ('the cost is the time taken to return',
          'explains the real price of interruption'),
         ('the distance does what the willpower does not',
          'the sentence this cycle turns on')],
   trans=['whereas', 'by contrast', 'overall', 'in proportion'],
  ),

  dict(
   sub='How a search engine ranks a page',
   step=3,
   read=[
    dict(heading='What decides what you see first',
         kind='Academic passage',
         task='Matching headings, True/False/Not Given, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 41-48',
         paras=[
          'When a search engine returns ten results in order, somebody '
          'has already decided what "best" is going to mean. That '
          'decision is probably the most consequential piece of design '
          'most people meet every day without ever noticing it. The '
          'ordering is not a fact about the pages. It is the output of '
          'a rule, and rules can be written down, examined and argued '
          'with, which is the only reason this subject can be '
          'discussed at all.',
          'The earliest search engines ranked pages by how often the search '
          'word appeared on them, which worked for about three years. The '
          'weakness is obvious once stated: anybody who wants to be first '
          'simply repeats the word, and by the late nineties pages carried '
          'invisible text repeating search terms hundreds of times. The '
          'measure had become a target, and it stopped measuring anything '
          'useful within about three years of becoming widely known.',
          'The change that solved it was to use information from '
          'outside the page. If many other pages link to a page, that '
          'is a judgement made by people who do not control it. '
          'Judgements of that kind are much harder to fake than the '
          'words on your own site. The ordering became a measure of '
          'what other people pointed at, which is a far better guide '
          'to quality than anything a page can say about itself.',
          'That rule in turn created an industry devoted to producing '
          'links, so the measure was refined. Links from pages that '
          'are themselves linked to count more, and recent links count '
          'more than old ones. A link bought in bulk from a site that '
          'links to everything counts for almost nothing. Each '
          'refinement is a response to an attempt to exploit the rule '
          'before it, which is why these systems become more '
          'complicated over time rather than more accurate. The '
          'complexity is a record of past attacks rather than a sign '
          'of better understanding.',
          'What all of these have in common is that they measure something '
          'that stands in for quality rather than quality itself. Nobody can '
          'write a rule for "this page is accurate". What can be measured is '
          'what people link to, what they click on, and whether they come '
          'back a minute later having found nothing. The whole system rests '
          'on the assumption that those three things point in roughly the '
          'same direction as being right, and that assumption holds far '
          'better on some questions than on others.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['The first rule and its weakness', 'Using evidence from outside', 'Refining the measure', 'Standing in for quality'],
           0, 'Counting the search word, and repeating it to win.',
           {1: 'Using evidence from outside the page is paragraph 3.', 2: 'Refining the measure is paragraph 4.', 3: 'Standing in for quality is paragraph 5.'}),
          ('Choose the best heading for paragraph 4.',
           ['Judgements by other people', 'An industry in links', 'What cannot be measured', 'The earliest engines'],
           1,
           'Each refinement answering an attempt to exploit the last '
           'rule.',
           {0: 'Judgements by other people are paragraph 3.', 2: 'What cannot be measured is paragraph 5.', 3: 'The earliest engines are paragraph 2.'}),
          ('Choose the best heading for paragraph 5.',
           ['Measuring what stands in for quality', 'Why links are hard to fake', 'Clicks and returns', 'The design nobody notices'],
           0, 'Nobody can write a rule for accuracy.',
           {1: 'Why links are hard to fake is paragraph 3.', 2: 'Clicks and returns are examples inside paragraph 5.', 3: 'The design nobody notices is paragraph 1.'}),
          (
           'The earliest ranking method counted how often a word '
           'appeared.', ['True', 'False', 'Not Given'], 0,
           'Paragraph 2 states this about the earliest engines.',
           {1: 'False would need a different early method; paragraph 2 '
               'names this one.', 2: 'Not Given is wrong because the earliest engines are '
               'described.'}),
          ('The writer believes links are impossible to fake.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 4 describes an industry devoted to producing '
           'them.',
           {0: 'Yes would need that claim; paragraph 4 describes an '
               'industry faking them.', 2: 'Not Given is wrong because the writer discusses how '
               'links are manufactured.'}),
          ('Search companies publish the full details of their rules.',
           ['True', 'False', 'Not Given'], 2,
           'Publication is not discussed in this passage.',
           {0: 'True would need a statement that they publish; the '
               'passage never says so.', 1: 'False would need a denial, and publication is not '
               'raised at all.'}),
          ('A link bought in bulk from a site that links to everything '
           'counts for almost ____________.', None, 'nothing',
           'Paragraph 4, as a refinement of the rule.'),
          ('The system assumes that links and clicks point in roughly '
           'the same ____________ as being right.', None, 'direction',
           'The final paragraph, which is the central assumption.')])],
   listen=[
    dict(heading='A lecture on ranking and relevance', part='Part 4',
         task='A lecture on how search results are ordered · note completion and multiple choice', band='l4',
         qtype='Questions 49-54',
         script=[
          ('Lecturer', 'Every ranking system in the world has the same '
           'structure, and once you see it you will see it everywhere: '
           'in search results, in university tables, in the order your '
           'messages arrive.'),
          ('Lecturer', 'The structure is this. You want to measure '
           'something you cannot measure, so you measure something else '
           'that you hope moves with it. You want quality; you can count '
           'links. You want teaching; you can count graduate salaries. '
           'The thing you count is called a proxy.'),
          ('Lecturer', 'The first search engines counted the search '
           'word on the page, and that lasted about three years. By the '
           'late nineties people were putting invisible text on their '
           'pages, repeating a word four hundred times in white letters '
           'on a white background.'),
          ('Lecturer', 'The fix was to count evidence from outside the '
           'page: links from other sites. That is a judgement made by '
           'somebody who does not control your page, which makes it much '
           'harder to fake, though an entire industry then set about '
           'faking it.'),
          ('Lecturer', 'So the rule gets refined. Links from well-linked '
           'pages count more. Recent links count more. Links from a site '
           'that links to everything count for nothing. Each refinement '
           'is an answer to the last attack, which is why these systems '
           'get complicated rather than better.'),
          ('Lecturer', 'And here is the law I want you to remember, '
           'because it is true far outside this subject. When a measure '
           'becomes a target, it stops being a good measure. The moment '
           'you announce what you are counting, people optimise for the '
           'thing you count rather than the thing you wanted.')],
         items=[
          (
           'What is a thing counted in place of what you really want '
           'called?', None, 'a proxy',
           'Quality measured by counting links, for example.'),
          ('The first method lasted about ____________ years.', None,
           'three', 'Counting the search word on the page.'),
          ('People repeated a word four hundred times in '
           '____________.', None, 'white on white',
           'Invisible text, white letters on a white page.'),
          ('Links are harder to fake because they are a judgement by '
           'somebody who does not ____________ your page.', None,
           'control', 'Evidence from outside the page.'),
          ('He says each refinement is an answer to the last',
           ['measure', 'attack', 'ranking', 'result'], 1,
           'Which is why the systems become complicated.',
           {0: 'The measure is what gets refined, not what is '
               'answered.', 2: 'The ranking is the output rather than the attack.', 3: 'A result is what the user sees, not what is answered.'}),
          (
           'What does a measure become when it stops being a good one?',
           None, 'a target',
           'The law he wants the audience to remember.')])],
   speak=dict(
    part='Part 3', focus='What a machine decides for you',
    intro=('Four sentences. Describe what the machine is actually '
           'measuring.'),
    qs=['How do you decide whether something online is reliable?',
        'Should people know how search results are ordered?',
        'Do you look beyond the first few results?',
        'What problems come from machines ranking information?'],
    shape=[('answer', 'Mostly by whether the site has anything to gain '
            'from telling me.'),
           ('support', 'A ranking does not measure whether a page is '
            'right.'),
           ('follow-up', 'It measures what people link to and click '
            'on, which is not the same.'),
           ('support', 'And once people know what is counted, they aim '
            'at that.'),
           ('follow-up', 'Which is why the first result is sometimes '
            'the page that worked hardest rather than the page that '
            'knew most.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Planning: should companies explain how their systems '
                 'rank things?',
         prompt=('Should technology companies be required to explain '
                 'how their systems rank things? Brainstorm eight '
                 'ideas, choose three, and decide the order they go '
                 'in. Twelve minutes.'),
         plan=('Companies should be required to explain what their '
               'systems measure, though not the exact weightings, '
               'because the public interest is in knowing what is being '
               'counted rather than in knowing enough to exploit it',
               [('People are entitled to know what is being measured',
                 ['a ranking is a decision about what counts as best, '
                  'not a fact',
                  'nobody can judge a result without knowing what '
                  'produced it']),
                ('Publishing the exact rule destroys the measure',
                 ['when a measure becomes a target it stops measuring '
                  'what it did',
                  'each past rule was exploited within a few years of '
                  'becoming known'])]),
         notes=[
          'This page is about the order of your paragraphs. The '
          'entitlement argument has to come first, because the second '
          'paragraph is a limit on it, and a limit before the thing it '
          'limits makes no sense to a reader.',
          'The thesis contains the distinction the whole essay depends '
          'on: what is measured against how much each part weighs. Put '
          'that distinction in the thesis and the body writes itself.',
          'Eight ideas will produce two or three about privacy, which is '
          'a different question. Cross them out: they answer "should '
          'companies be regulated" rather than "should they explain '
          'this".'],
         criterion=[('Paragraphs ordered so that the limit follows the '
                     'claim', 'Coherence and Cohesion'),
                    ('A distinction stated in the thesis',
                     'Task Response')],
         instruct='  Twelve minutes, timed. You write this essay in cycle '
                  '5.',
         lines=12)],
   gram=dict(
    point='Describing systems: is determined by, depends on',
    explain=('Describing how a system works needs verbs that say what '
             'decides what, without claiming more than you know.'),
    examples=['The ordering is determined less by accuracy than by '
              'links.',
              'How high a page appears depends on who links to it.',
              'Recent links are weighted more heavily than old ones.',
              'The result rests on an assumption about what links '
              'mean.'],
    task='Rewrite each sentence to show what determines what.',
    items=[('Links decide the order.',
            'The order in which results appear is determined largely by '
            'which pages link to them.'),
           ('New links are more important.',
            'Recent links are weighted more heavily than older ones.'),
           ('Good pages come first.',
            'Pages appear high when the signals the system counts point '
            'towards them, which is not the same as being accurate.'),
           ('The system assumes links mean quality.',
            'The whole arrangement rests on the assumption that links '
            'point in roughly the same direction as quality.'),
           ('Clicks matter too.',
            'How often a result is clicked, and whether the user returns, '
            'also contribute to the ordering.')]),
   vocab=[('ranking', 'the order in which results are shown'),
          ('relevance', 'how closely a result matches a search'),
          ('index', 'the store of pages a search engine holds'),
          ('search results', 'the list returned after a search'),
          ('click', 'one selection of a result'),
          ('stands in for', 'is measured instead of something else'),
          ('exploit a rule', 'to use a rule to gain an unfair '
           'advantage'),
          ('patching a rule', 'changing a method after it is '
           'exploited')],
   expr=[('the ordering is determined less by, than by',
          'describes what decides a result'),
         ('the thing you count is called a proxy',
          'names the central idea of this cycle'),
         ('when a measure becomes a target',
          'the law worth remembering'),
         ('each refinement is an answer to the last attack',
          'explains why systems get complicated')],
   trans=['primarily', 'in addition', 'ultimately', 'as a result'],
  ),

  dict(
   sub='What ranking cannot settle',
   step=4,
   read=[
    dict(heading='Why a good answer and a popular answer differ',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 55-62',
         paras=[
          'Every ranking system measures something it can count in '
          'place of something it wants. The question that decides '
          'whether the system is any good is how closely the two '
          'travel together. The honest answer is that they travel '
          'together well for most questions and come apart badly for a '
          'few. Unfortunately, the few are the ones that matter most, '
          'which is the general shape of a great many problems in this '
          'field.',
          'For an ordinary question — the opening hours of a library, '
          'the spelling of a word, how to change a tyre — what people '
          'link to and click on is an excellent guide to what is '
          'correct. There is no disagreement to exploit and nobody '
          'gains by promoting a wrong answer. The system works almost '
          'perfectly and nobody notices, because working is '
          'invisible.',
          'The difficulty arrives where somebody has an interest in the '
          'answer. For a question about a medicine, a legal right or a '
          'product, there is a party that gains from one answer being '
          'seen first, and that party will invest in being seen. The '
          'measure that worked for library opening hours is now being '
          'actively pushed.',
          'A second kind of failure needs no bad intention at all. '
          'Popularity measures agreement, and on questions where most '
          'people are wrong, it measures the wrong answer accurately. A '
          'system built on what people link to will faithfully reproduce '
          'a common misconception, and will do so most strongly in '
          'exactly those fields where expert opinion is least widely '
          'known.',
          'The proposed remedy is usually transparency: make the '
          'companies publish the rule. The argument against it is not '
          'commercial secrecy but something more awkward. Publishing the '
          'rule invites it to be gamed, and every previous rule that '
          'became known was exploited within a few years. That is a real '
          'cost, and it is not an answer to the objection, because the '
          'alternative is a system nobody outside the company can '
          'examine at all.',
          'The position that follows is narrower than either side usually '
          'states. What is being measured should be public: that the system '
          'counts links, clicks and returns, and what it does not count. How '
          'much each is weighted need not be, and publishing it would help '
          'nobody except the people the rule is designed to defeat. That '
          'distinction between what is counted and how much each count is '
          'worth is available in every argument of this kind, and it is '
          'almost never made by either side.'],
         items=[
          (
           'Which paragraph explains why the system works well '
           'unnoticed?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'],
           1,
           'Library hours and spelling, where nobody gains from a '
           'wrong answer.',
           {0: 'Paragraph 1 states the general question about proxies.', 2: 'Paragraph 3 is where somebody has an interest in the '
               'answer.', 3: 'Paragraph 4 is the failure that needs no bad '
               'intention.'}),
          (
           'Which paragraph describes a failure that needs no bad '
           'intention?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           2, 'Popularity measuring a common misconception accurately.',
           {0: 'Paragraph 2 is where the system works well.', 1: 'Paragraph 3 involves a party that gains, which is '
               'intention.', 3: 'Paragraph 5 is about transparency.'}),
          (
           'Which paragraph states the distinction the writer '
           'recommends?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           3,
           'What is measured should be public; the weightings need '
           'not.',
           {0: 'Paragraph 3 is about interested parties.', 1: 'Paragraph 4 is about popularity and misconception.', 2: 'Paragraph 5 gives the argument against transparency.'}),
          (
           'The writer believes ranking systems fail on most '
           'questions.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1 says they work well for most and fail for a '
           'few.',
           {0: 'Yes would need failure on most; paragraph 1 says they '
               'work well for most.', 2: 'Not Given is wrong because the writer measures where '
               'they fail.'}),
          (
           'The writer believes commercial secrecy is the main '
           'argument against publishing rules.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 5 says the real argument is something more '
           'awkward.',
           {0: 'Yes would need secrecy to be the main reason; '
               'paragraph 5 names a more awkward one.', 2: 'Not Given is wrong because the writer ranks the '
               'arguments.'}),
          ('The writer believes search companies should be broken up.',
           ['Yes', 'No', 'Not Given'], 2,
           'No view on company structure is expressed.',
           {0: 'Yes would need a view on company structure, and none '
               'is given.', 1: 'No would need him to argue against it, which he never '
               'does.'}),
          (
           'An interested party invests in being seen where the '
           'question concerns a medicine, a legal right or a '
           '____________.', None, 'product',
           'Paragraph 3, where somebody gains from the answer.'),
          ('Every previous rule that became known was ____________ '
           'within a few years.', None, 'exploited',
           'Paragraph 5, which the writer accepts as a real cost.')])],
   listen=[
    dict(heading='Two engineers disagree about transparency',
         part='Part 4', task='A recorded discussion · note completion and multiple choice', band='l4',
         qtype='Questions 63-68',
         script=[
          ('Chair', 'Ms Petrakis-Odili builds ranking systems. Dr '
           'Hallworth campaigns for them to be published. Each begins '
           'with the strongest point against their own position.'),
          ('Petrakis-Odili', 'Mine is that I say publishing would let '
           'people game the system, and I also know that people are '
           'gaming it now, using tests rather than documents. Secrecy '
           'slows them down; it does not stop them.'),
          ('Hallworth', 'And mine is that I demand transparency without '
           'saying what I would do with it. If she published four '
           'hundred pages of weightings tomorrow, almost nobody could '
           'read them, and the people who could would mostly be in the '
           'business of exploiting them.'),
          ('Chair', 'Thank you both. So after those two admissions, '
           'what is actually left to disagree about?'),
          ('Hallworth', 'What gets published. I want the list of what is '
           'counted, and what is deliberately not counted. She hears '
           'that as a request for the source code.'),
          ('Petrakis-Odili', 'I did hear it that way, and the list is a '
           'different request. I could publish that list.'),
          ('Hallworth', 'Then publish it. Not the code, not the '
           'numbers. The list.'),
          ('Petrakis-Odili', 'There is a reason nobody does, and it is '
           'not technical. The list reveals what we have decided matters, '
           'and that is a set of value judgements made by about forty '
           'people in one building. We would be asked to defend them in '
           'public.'),
          ('Hallworth', 'Which is exactly what I want and exactly what '
           'you should have to do.'),
          ('Petrakis-Odili', 'I know. That is why I called it the '
           'strongest argument against my own position at the start, and '
           'I notice that admitting it has not made me publish '
           'anything.')],
         items=[
          ('The engineer admits that people are gaming the system now, '
           'using ____________ rather than documents.', None, 'tests',
           'So secrecy slows them rather than stopping them.'),
          ('The campaigner admits he has not said what he would '
           '____________ with the information.', None, 'do',
           'If four hundred pages were published tomorrow.'),
          ('What he actually wants published is the list of what is '
           '____________.', None, 'counted',
           'And what is deliberately not counted.'),
          ('She admits she had heard that as a request for the',
           ['weightings', 'source code', 'test results', 'user data'],
           1, 'Which she agrees is a different request.',
           {0: 'The weightings are what she says need not be '
               'published.', 2: 'Test results are how people game the system now.', 3: 'User data is not part of the request either speaker '
               'makes.'}),
          ('She says the list would reveal a set of ____________ '
           'judgements.', None, 'value',
           'Made by about forty people in one building.'),
          ('The reason nobody publishes the list, she says, is not '
           '____________.', None, 'technical',
           'But that they would have to defend it in public.')])],
   speak=dict(
    part='Part 3', focus='Judging what you are shown',
    sounds=[('A list rises on every item and falls on the last: a phone, a '
             'laptop, and a pair of headphones. The fall is how the examiner '
             'knows you have finished, and candidates who rise at the end are '
             'asked the next question too early.'),
            ('A statement falls; a real question rises. But a statement said '
             'with a rise sounds like you are asking the examiner whether your '
             'own opinion is acceptable, which costs you more than any grammar '
             'error.'),
            ('Practise the fall on three short sentences from your own '
             'answers. Put your hand flat and move it down on the last '
             'stressed syllable, because the gesture makes the pitch follow.'),
            ('Use a rise deliberately when you are not finished: I use it for '
             'two things, rising on things, then carry on. That is how you buy '
             'yourself the time without a filler.'),
            ('Record one answer and listen only to the last word of each '
             'sentence. Decide for each one whether you meant it to go up or '
             'down.')],
    intro=('Four or five sentences. Separate two things people run '
           'together.'),
    qs=['Should companies have to explain how their systems work?',
        'Can ordinary people judge whether a result is good?',
        'Who should check these systems?',
        'Is popularity a good guide to quality?'],
    shape=[('answer', 'They should explain what they measure, not how '
            'much each part counts.'),
           ('support', 'Knowing what is counted lets you judge the '
            'result.'),
           ('follow-up', 'Knowing the exact weights mainly helps the '
            'people trying to cheat.'),
           ('support', 'Popularity is a good guide for ordinary '
            'questions.'),
           ('follow-up', 'It is a poor one wherever somebody gains from '
            'a particular answer, which is where we need it most.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should technology companies publish how their systems '
                 'work?',
         prompt=('Some people say that technology companies should be '
                 'required to publish how their systems work. To what '
                 'extent do you agree? Write at least 250 words.'),
         model=[
          'I agree that technology companies should be required to '
          'publish what their systems measure, and I do not agree that '
          'they should publish how much each part is weighted. The '
          'distinction matters more than the question, because almost '
          'every argument on both sides collapses the two.',
          'The case for publication is about entitlement. A ranking is '
          'not a fact about the world; it is a decision about what '
          'counts as best, made by a small number of people, and it '
          'shapes what millions see first. Nobody can judge a result '
          'without knowing what produced it. When I am told that a '
          'system counts links, clicks and how long people stay, I can '
          'at least ask whether those things point towards accuracy on '
          'the question I am asking.',
          'The objection is practical and serious. Every rule that has '
          'become known has been exploited within a few years: pages '
          'repeated keywords when keywords were counted, and an entire '
          'industry appeared to manufacture links when links were '
          'counted. Publishing a precise formula would reward the people '
          'the formula is designed to defeat.',
          'The reply is that the objection applies only to the '
          'weightings. Knowing that a system counts links does not tell '
          'you how to buy your way to the top; knowing that links from '
          'recent, well-connected pages are worth 2.4 times more does. '
          'The first is the information the public needs and the second '
          'is the information the manipulators need, and they can be '
          'separated.',
          'In conclusion, I would require the list of what is measured, '
          'including what is deliberately excluded, and allow the '
          'weightings to remain private. That answers the real '
          'objection, and it also obliges companies to defend in public '
          'the value judgements they currently make in private.'],
         notes=[
          'Structure 9: a position, an objection, a rebuttal. The '
          'rebuttal does not dismiss the objection; it shows that the '
          'objection applies to half the proposal, which is why the '
          'position was split in the first paragraph.',
          'The third paragraph gives the objection genuine evidence — '
          'keywords, the link industry — rather than a sentence. An '
          'objection you have stated weakly is not worth rebutting.',
          'The final sentence adds a consequence the question did not '
          'ask about: companies having to defend their value judgements. '
          'One extra idea at the end lifts a Task 2 answer.'],
         model65=[
                  'Some people say technology companies should be '
                  'required to publish how their systems work. I '
                  'partly agree, although I think full publication '
                  'would cause problems.',
                  'There are clear reasons to support publication. '
                  'These systems decide what millions of people read, '
                  'and people cannot judge a decision they cannot see. '
                  'If a company ranks results in a way that favours '
                  'its own products, users have no way of knowing. '
                  'Publication would also allow researchers to study '
                  'the effects.',
                  'But there are good arguments against it. If the '
                  'exact rules were published, the people who want to '
                  'manipulate them would read them first. An industry '
                  'already exists to push websites up the rankings, '
                  'and complete transparency would make this far '
                  'easier. Companies also argue that their methods are '
                  'commercial secrets.',
                  'I think companies should publish the '
                  'principles rather than the code: which factors '
                  'count, and in what order of importance. This would '
                  'allow the public to judge the system without giving '
                  'the manipulators a manual. An independent regulator '
                  'could examine the full details without publishing '
                  'them.',
                  ],
         gap65=[
                'It distinguishes publishing the criterion from '
                'publishing the code in its first sentence, and uses '
                'that distinction to structure the whole answer.',
                'It gives the awkward argument - that the rules are '
                'gamed the moment they are known - its full weight '
                'before answering it.',
                'It ends with a mechanism, the independent examiner, '
                'rather than a preference.',
                ],
         criterion=[('A distinction stated in the first paragraph',
                     'Task Response'),
                    ('An objection given real evidence',
                     'Task Response'),
                    ('A rebuttal that limits rather than dismisses',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'plan.',
         lines=18)],
   gram=dict(
    point='Concessive chains: while it is true that, even allowing for',
    explain=('A concession followed by a limit is stronger than a flat '
             'denial, and the limit should be specific.'),
    examples=['While it is true that rules get exploited, that applies '
              'to the weightings rather than the list.',
              'Even allowing for that cost, the alternative is a system '
              'nobody can examine.',
              'Publishing the rule invites it to be gamed; that is a '
              'cost, not an answer.',
              'The objection is serious and it is narrower than it '
              'looks.'],
    task='Rewrite each denial as a concession followed by a limit.',
    items=[('Publishing does not cause problems.',
            'While it is true that publishing invites manipulation, the '
            'risk applies to the weightings rather than to the list of '
            'signals.'),
           ('Secrecy is indefensible.',
            'Even allowing for the need to resist manipulation, a system '
            'nobody outside the company can examine is hard to '
            'defend.'),
           ('People would not understand it anyway.',
            'It is true that few readers could interpret a formula, but '
            'many could understand a list of what is counted.'),
           ('Gaming is not a real risk.',
            'Gaming is a genuine cost rather than an argument, since '
            'every known rule has been exploited.'),
           ('Companies should publish everything.',
            'Companies should publish what is measured, even allowing '
            'for the fact that the weightings must stay private.')]),
   vocab=[('stands in for quality', 'is counted instead of quality'),
          ('transparency about measures', 'saying what is counted'),
          ('gaming the rule', 'exploiting a known measure'),
          ('held to account', 'required to justify a decision'),
          ('popular answer', 'the answer most people give'),
          ('published rule', 'a method made public'),
          ('decision about what matters', 'a judgement of what '
           'counts as better'),
          ('vested interest', 'a reason to prefer one answer')],
   expr=[('publishing the rule invites it to be gamed; that is a cost, '
          'not an answer', 'concedes without conceding the argument'),
         ('they travel together well for most questions',
          'states where a proxy works'),
         ('most strongly where expert opinion is least widely known',
          'identifies where a system fails worst'),
         ('what is measured should be public; how much each weighs '
          'need not be', 'the distinction this unit ends on')],
   trans=['admittedly', 'nevertheless', 'in short', 'even so'],
  ),
 ],
 technique=dict(
  title='Recovering from a miss, in a Part 4 lecture',
  body=('Everybody misses answers in the Listening paper. What '
        'separates a band 5 from a band 6 is almost never the number of '
        'answers heard the first time; it is what happens in the four '
        'seconds afterwards. The destructive response is to keep '
        'thinking about the answer you missed, because the recording '
        'does not wait and the next two answers go past while you are '
        'still on the last one. One miss becomes three. The correct '
        'response is mechanical and must be practised until it needs no '
        'decision: the moment you realise you have missed one, put a '
        'dash in the box, move your pen to the next question and read '
        'it. You are not giving up the mark — you will guess it at the '
        'end — you are protecting the two that follow. Three things '
        'make this easier. Keep your pen on the question you are '
        'currently waiting for, so your eye never has to search. Look '
        'ahead whenever the speaker is giving an example, because '
        'examples rarely contain answers. And when a Part 4 lecture '
        'signposts — "there are three reasons", "the second point is" — '
        'write those numbers in the margin, because they tell you where '
        'you are even when you have lost the thread of the content.'),
  panel=[('Dash, move on, four seconds',
          'One miss costs one mark. Chasing it costs three.'),
         ('Pen on the current question',
          'Your eye should never have to search the page.'),
         ('Read ahead during examples',
          'Examples rarely contain answers.'),
         ('Write the signposts',
          '"The second reason" tells you where you are.')],
  task='Do the cycle 4 and cycle 5 Part 4 lectures without pausing, and '
       'mark every question you missed with a dash as you go.',
  qs=['How many did you miss first time?',
      'How many of those cost you the following question too?',
      'Did you move on within four seconds?',
      'Where was your pen when the answer came?',
      'Did you note the lecturer’s signposts?']),
 outlining=dict(
  title='Outline to essay: write cycle 5 from the cycle 4 plan',
  body=('This is the first unit in which you write a full essay from a '
        'plan you made two cycles earlier, and the gap is deliberate. '
        'By now you will have forgotten exactly what you meant by the '
        'third support, which is the most useful thing that can happen '
        'to you at this stage: it shows you whether your plan was '
        'written for yourself in ten minutes or for a stranger in '
        'twenty-eight. Take the cycle 4 plan and write the essay '
        'without adding a new main idea. You may add examples and you '
        'may change the wording of anything. If you find a heading you '
        'can no longer develop, write in the margin what was missing '
        'from it — usually the support was a repetition of the heading '
        'rather than a fact. If you find yourself wanting a fourth '
        'paragraph, resist it and note why: almost always it is because '
        'one of your three was thinner than it looked on the page. The '
        'plan is not the essay, and a plan that cannot be written from '
        'is not a plan.'),
  frame=('Companies should be required to explain what their systems '
         'measure, though not the exact weightings, because the public '
         'interest is in knowing what is counted rather than in knowing '
         'enough to exploit it',
         [('People are entitled to know what is being measured',
           ['a ranking is a decision about what counts as best, not a '
            'fact',
            'nobody can judge a result without knowing what produced '
            'it']),
          ('Publishing the exact rule destroys the measure',
           ['when a measure becomes a target it stops measuring what it '
            'did',
            'each past rule was exploited within a few years of '
            'becoming known'])]),
  task='Write the cycle 5 essay from your cycle 4 plan, without adding '
       'a new main idea, and note in the margin anything you could not '
       'develop.',
  qs=['Could you develop every heading without inventing a new one?',
      'Which support turned out to be a repetition of its heading?',
      'Did you want a fourth paragraph, and why?',
      'How long did the writing take once the plan existed?',
      'Would a stranger have been able to write from your plan?'],
  answers=['if not, the heading was a sentence rather than an idea',
           'restated headings are the commonest fault in a first plan',
           'usually because one of the three was thin',
           'most people find it halves the writing time',
           'that is the test of a plan, and it is a hard one']),
 candos=['I can compare four packages and find the condition that '
         'differs',
         'I can write a complaint that gives checkable detail',
         'I can describe a chart with two age groups and four '
         'categories',
         'I can recover from a missed answer without losing the next '
         'two',
         'I can write an essay from a plan I made two days earlier'],
 tip=('When you miss an answer in Listening, put a dash and move on '
      'within four seconds. The mark you lost is one mark. The two you '
      'are about to lose while thinking about it are the ones that '
      'matter.'),
)
