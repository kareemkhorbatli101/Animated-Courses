# -*- coding: utf-8 -*-
"""Unit 39 - Migration and Movement. IELTS Volume 4, band 6.5."""

_FLOWS = dict(kind='table', title='Movement between four regions in one year',
              sub='thousands of people',
              headers=['Region', 'Arrivals', 'Departures', 'Net', 'Turnover'],
              rows=[['North', '118', '96', '+22', '214'],
                    ['East', '64', '71', '−7', '135'],
                    ['Central', '203', '188', '+15', '391'],
                    ['West', '87', '117', '−30', '204']],
              widths=[1.0, 0.8, 0.9, 0.7, 0.8])

UNIT = dict(
 n=39, vol=4, level='B2', band='6.5',
 theme='Migration and Movement',
 opener=(
   'A net figure of plus fifteen thousand can describe a region where almost '
   'nobody moved and a region where four hundred thousand people changed '
   'places. This unit begins with the forms a newcomer fills in during their '
   'first month and ends with the reason a national finding about wages tells '
   'a town council almost nothing about its own labour market.'),

 cycles=[
  dict(
   sub='Registering in a new country',
   step=1,
   read=[
    dict(heading='What to do in your first month',
         kind='Official guidance',
         task='Note completion and matching features',
         band='gt_short', qtype='Questions 1-5',
         skill=('Deadlines are the question in any arrival guidance',
                ['Official guidance for newcomers is organised around dates: '
                 'within X days, before Y, no later than Z.',
                 'On your first pass mark every period. Four of five questions '
                 'will come from them, and the fifth from what happens if you '
                 'miss one.']),
         paras=[
          'You must register your address with the local authority within '
          'fourteen days of arrival. Registration is free, it is required of '
          'everyone staying longer than three months, and almost everything '
          'else you will need depends on the certificate it produces.',
          'Bring your passport, your residence permit if you have one, and '
          'proof of address. Proof of address means a tenancy agreement or a '
          'letter from the person you are staying with, countersigned and '
          'dated within the last month. A utility bill is not accepted for an '
          'initial registration, only for a change of address.',
          'Once registered you will receive a registration certificate, '
          'usually by post within ten working days. You will need it to open '
          'a bank account, to enrol children in school and to register with a '
          'doctor, and you should keep the original instead of relying on '
          'the copy.',
          'If you move, you must notify the authority within fourteen days of '
          'the new address. Failure to register or to notify a change may '
          'result in a fine and, more seriously in practice, in delays to any '
          'later application, since periods of unregistered residence are '
          'treated as gaps.'],
         items=[
          ('You must register within ____________ days of arrival.', None,
           'fourteen', 'Paragraph 1, which also says registration is free.'),
          ('Registration is required of everyone staying longer than '
           '____________ months.', None, 'three',
           'Paragraph 1, and almost everything else depends on the '
           'certificate.'),
          (
           'Which document is NOT accepted as proof of address for an '
           'initial registration?',
           ['A tenancy agreement', 'A utility bill', 'A countersigned letter', 'A residence permit'],
           1,
           'Paragraph 2: a utility bill is accepted only for a change '
           'of address.',
           {0: 'A tenancy agreement is accepted as proof of address.', 2: 'A countersigned letter dated within a month is '
               'accepted.', 3: 'A residence permit proves status, and should be '
               'brought.'}),
          ('The certificate usually arrives within ____________ working '
           'days.', None, 'ten',
           'Paragraph 3, by post, and the original should be kept.'),
          ('Unregistered periods of residence are treated as ____________.',
           None, 'gaps',
           'Paragraph 4, which the writer calls more serious in practice than '
           'the fine.')]),
    dict(heading='Documents and deadlines',
         kind='Table of requirements', task='Table completion',
         band='gt_short', qtype='Questions 6-9',
         figure=dict(kind='table', title='First-month requirements',
                     sub='what to do, by when, and what to bring',
                     headers=['Step', 'Deadline', 'Bring', 'Issued'],
                     rows=[['Address registration', '14 days',
                            'Passport, proof of address', 'Certificate'],
                           ['Tax number', '30 days',
                            'Certificate, passport', 'Number by post'],
                           ['Health registration', 'No deadline',
                            'Certificate, tax number', 'Medical card'],
                           ['Driving licence exchange', '12 months',
                            'Licence, certificate', 'New licence']],
                     widths=[1.2, 0.7, 1.2, 0.9]),
         paras=[
          'The table sets out the four steps most newcomers need in their '
          'first year, in the order in which they must be taken. The order is '
          'not a suggestion: each step after the first requires the document '
          'produced by the one before it.',
          'Note that only two of the four carry a short deadline. Health '
          'registration has none at all, which leads a substantial number of '
          'people to postpone it until they are ill, at which point the '
          'registration itself takes several days and cannot be hurried.',
          'The driving licence exchange has the longest period and the '
          'harshest consequence for missing it. After twelve months a foreign '
          'licence ceases to be valid here, and an exchange is no longer '
          'possible; a full driving test must be taken instead.',
          'Appointments for the first two steps may be booked online or '
          'taken without one, and in practice the waiting time without an '
          'appointment is between one and three hours. Offices open at eight '
          'and the queue is shortest in the last hour of the afternoon, which '
          'is the reverse of what most people assume.',
          'All four steps are free except the licence exchange, for which a '
          'fee is payable. Where a document is not in the official language, '
          'a certified translation is required, and the authority maintains a '
          'list of translators whose certification it accepts.'],
         items=[
          ('Tax number deadline: ____________ days', None, '30',
           'From the table, requiring the registration certificate and a '
           'passport.'),
          ('Health registration deadline: ____________', None, 'none',
           'The table shows no deadline, which paragraph 2 says leads people '
           'to postpone it.'),
          ('Driving licence exchange deadline: ____________ months', None,
           '12', 'After which a full driving test is required instead.'),
          ('Documents not in the official language need a certified '
           '____________.', None, 'translation',
           'Paragraph 4, from a translator on the authority’s accepted '
           'list.')])],
   listen=[
    dict(heading='Registering with the local authority', part='Part 1',
         task='A visit to a registration office · note completion', band='l1',
         qtype='Questions 10-14',
         script=[
          ('Clerk', 'Good morning. Are you here to register an address?'),
          ('Newcomer', 'Yes. I arrived eleven days ago.'),
          ('Clerk', 'Then you are comfortably inside the fourteen days. Can I '
           'have your passport and your proof of address?'),
          ('Newcomer', 'Here is the passport. For the address I have an '
           'electricity bill.'),
          ('Clerk', 'I am afraid I cannot take that for a first '
           'registration. A bill is only accepted when somebody is changing '
           'an address they have already registered. For a first one I need '
           'either a tenancy agreement or a letter from whoever you are '
           'staying with.'),
          ('Newcomer', 'I am renting, so I do have the agreement. It is at '
           'the flat.'),
          ('Clerk', 'Bring it tomorrow and we will do it then; you will still '
           'be within the period. Now, while you are here, let me give you the '
           'sequence, because people take these in the wrong order and lose '
           'weeks. Address first. Then the tax number, within thirty days of '
           'arrival, and you cannot apply for that without the certificate '
           'from today.'),
          ('Newcomer', 'And the doctor?'),
          ('Clerk', 'Health registration has no deadline, which is exactly '
           'why I mention it. People leave it, and then they need a doctor on '
           'a Friday and the registration takes four days whatever anybody '
           'says to us.'),
          ('Newcomer', 'That is useful. What about my driving licence?'),
          ('Clerk', 'Twelve months, and that one is unforgiving. On day three '
           'hundred and sixty-six your licence stops being valid and the '
           'exchange is no longer available. You would have to sit the full '
           'test.'),
          ('Newcomer', 'How long does the certificate take to come?'),
          ('Clerk', 'Ten working days by post. Keep the original somewhere '
           'safe — you will be asked for it four or five times in your first '
           'year, and nobody accepts a photocopy.')],
         items=[
          ('The newcomer arrived ____________ days ago.', None, 'eleven',
           'Which the clerk says is comfortably inside the fourteen-day '
           'period.'),
          ('For a first registration, a ____________ bill is not accepted.',
           None, 'electricity',
           'A bill is accepted only for a change of an already registered '
           'address.'),
          ('The tax number must be applied for within ____________ days of '
           'arrival.', None, 'thirty',
           'And it requires the registration certificate issued first.'),
          ('Health registration takes about ____________ days once '
           'applied for.', None, 'four',
           'The clerk says this is why leaving it until you are ill causes '
           'trouble.'),
          ('The certificate arrives within ____________ working days.', None,
           'ten', 'By post, and the original must be kept because no copy is '
           'accepted.')]),
    dict(heading='A short talk: arriving and settling', part='Part 2',
         task='An induction talk for new arrivals · multiple choice and matching', band='l2',
         qtype='Questions 15-18',
         script=[
          ('Speaker', 'I run this session every month and I have stopped '
           'giving the list of offices, because you can all read. Instead I '
           'want to tell you the four things that people who settled well did '
           'differently, drawn from about nine hundred conversations.'),
          ('Speaker', 'The first is boring and it is the most important: do '
           'the paperwork in the first fortnight, in order, before you look '
           'for anything else. People who start with a job search and leave '
           'registration until later lose on average seven weeks, because '
           'every later step turns out to need the document they did not '
           'get.'),
          ('Speaker', 'The second is to accept a job below your '
           'qualification temporarily and to treat it as temporary in '
           'writing. The people who did badly were not the ones who took such '
           'a job; they were the ones who took it without a date by which '
           'they would review it. Five years later they are still there.'),
          ('Speaker', 'The third surprised me when the pattern emerged. The '
           'people who settled best did not spend their first year only with '
           'others from their own country, and they also did not avoid them. '
           'The ones who struggled were at the extremes — entirely inside a '
           'community or entirely outside one. Both extremes slow down the '
           'language and one of them is also lonely.'),
          ('Speaker', 'The fourth is about the qualification recognition '
           'process, and here my advice is contrarian. Start it immediately, '
           'before you need it, even though it is slow and tedious and you '
           'cannot see the point yet. It takes between eight and fourteen '
           'months, and the people who started in month one had it in hand '
           'exactly when they were ready to use it.'),
          ('Speaker', 'None of this is about effort. Everybody in this room '
           'will work hard. It is about sequence, and sequence is the one '
           'thing nobody tells you because it looks obvious from the other '
           'side.')],
         items=[
          (
           'People lose on average ____________ weeks by delaying '
           'registration.', None, 'seven',
           'Because every later step needs the document they did not '
           'get.'),
          (
           'Those who took a job below their qualification had set a '
           '____________ date in writing.', None, 'review',
           'The ones who did badly had no date by which they would '
           'review it.'),
          ('Which group does the speaker say struggled?',
           ['Those who mixed widely', 'Those at either extreme', 'Those who learned the language first', 'Those who moved cities'],
           1, 'Entirely inside a community or entirely outside one.',
           {0: 'Mixing widely is what the successful group did.', 2: 'Language first is one of two workable routes.', 3: 'Moving between cities is not discussed.'}),
          (
           'Qualification recognition takes between eight and '
           '____________ months.', None, 'fourteen',
           'Which is why she advises starting it in month one.')]),
    dict(heading='Two advisers disagree about integration', part='Part 3',
         task='A conversation between caseworkers · multiple choice', band='l3',
         qtype='Questions 19-23',
         script=[
          ('Hyacinth', 'I want to change the advice we give about language '
           'classes. We tell everyone to start immediately and I think it is '
           'wrong for about half of them.'),
          ('Emeka', 'That is a large claim. Go on.'),
          ('Hyacinth', 'For somebody with savings and no dependants, '
           'immediate full-time language study is clearly right. For a single '
           'parent who needs income in six weeks, telling them to spend '
           'twenty hours a week in a classroom is advice that sounds generous '
           'and is actually careless.'),
          ('Emeka', 'The counterargument is that the job they take without '
           'the language is the job they are still in at forty-five. We see '
           'that constantly.'),
          ('Hyacinth', 'We do, and I accept it, and notice that it is an '
           'argument for evening classes and a review date, not for '
           'full-time study.'),
          ('Emeka', 'Evening classes after a ten-hour shift have an attrition '
           'rate of about seventy per cent. We are choosing between two bad '
           'options and I would rather we said so to people instead of '
           'pretending there is a clean answer.'),
          ('Hyacinth', 'That I agree with entirely. What I object to is a '
           'single piece of advice given to two populations with opposite '
           'constraints.'),
          ('Emeka', 'Then let me propose something concrete instead of '
           'arguing about emphasis. Two tracks, explicitly named, with the '
           'trade-off written down. Track one: language first, slower income, '
           'better ceiling. Track two: income first, evening study, higher '
           'risk of getting stuck, and a mandatory review at twelve months '
           'that we book at the start.'),
          ('Hyacinth', 'The review at twelve months is the part that would '
           'actually change outcomes, and it is the part we have never '
           'done.'),
          ('Hyacinth', 'There is one more thing I would put into track two, '
           'and it costs nothing. Tell people at the start what the ceiling '
           'looks like. Not as a warning, as information: here is what people '
           'who took this route were earning at forty, and here is the other '
           'group.'),
          ('Emeka', 'We do not have those figures for our own caseload.'),
          ('Hyacinth', 'We have eleven years of records and a spreadsheet. '
           'We have never looked, which is a different statement from not '
           'having them.'),
          ('Emeka', 'Noted, and I will stop saying it.'),
          ('Emeka', 'Because nobody is funded to do it. Which is the real obstacle, while we have spent ten minutes on another one.')],
         items=[
          (
           'Hyacinth argues the current advice is wrong for about '
           '____________ of clients.', None, 'half',
           'Specifically those who need income quickly.'),
          (
           'Emeka counters that without the language people stay in '
           'the ____________ job they take.', None, 'first',
           'The job they take is the job they are still in at '
           'forty-five.'),
          (
           'He says evening classes have about ____________ per cent '
           'attrition.', None, 'seventy',
           'After a ten-hour shift, which is why he calls both options '
           'bad.'),
          ('What do they agree to propose?',
           ['One standard route', 'Two named tracks with the trade-off written down', 'Full-time study for all', 'Removing the advice'],
           1,
           'With a mandatory review at twelve months booked at the '
           'start.',
           {0: 'A single route is what they agree to abandon.', 2: 'Full-time study for all is the advice she criticises.', 3: 'They propose more advice, not less.'}),
          (
           'Emeka identifies the real obstacle as nobody being '
           '____________ to do the review.', None, 'funded',
           'Which he says is not what they have been arguing about.')])],
   speak=dict(
    part='Part 1', focus='Moving to a new place',
    intro=('Two or three sentences. Personal experience is ideal here, and '
           'an invented one is fine if you have none.'),
    qs=['Have you ever moved to a new city or country?',
        'Is it common for people to move away from your home town?',
        'What is the hardest thing about being somewhere new?',
        'Do you think you would enjoy living abroad?'],
    shape=[('answer', 'I moved to the capital for university at '
            'eighteen.'),
           ('support', 'The hardest part was not the city but the '
            'paperwork.'),
           ('follow-up', 'Nobody warns you that you need one document to get '
            'the next one.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Writing about a registration problem',
         prompt=('You have recently moved to a new country and there is a '
                 'problem with your registration. Write a letter to the local '
                 'authority. In your letter: give your details and explain '
                 'the problem; say what you have already done; ask what '
                 'should happen next. Write at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing about my address registration, reference '
          'RG/2291/0447. I registered at 12 Lindenhof on 3 September and was '
          'told that the certificate would arrive within ten working days. '
          'Seven weeks later I have not received it.',
          'I have already taken the steps I understood to be open to me. I '
          'telephoned the office on 24 September and again on 11 October, and '
          'on both occasions was told that the certificate had been issued. I '
          'attended in person on 2 November, where a colleague confirmed from '
          'the screen that it had been posted to 12 Lindenhofstrasse, which is '
          'a different street in another district.',
          'I should be grateful if you could tell me what will now happen. '
          'Specifically: can a replacement certificate be issued, and how '
          'long will it take; should I make a fresh application instead; and '
          'will the delay count against me, since I am told that periods '
          'without registration are treated as gaps in residence? That last '
          'point is my real concern.',
          'Yours faithfully,',
          'A. Mwangi-Toledo'],
         notes=[
          'The second bullet is a record: three contacts, three dates, and '
          'what was said each time. A letter that says I have tried several '
          'times is asking to be ignored, because it gives the reader nothing '
          'to check.',
          'The error is stated without accusation — posted to a different '
          'street — and the writer does not say whose fault it was. That is a '
          'deliberate choice: the aim is a certificate, not an apology.',
          'Ending on what the writer actually fears, where a polite formula would normally go, tells the reader which of the three questions to answer '
          'first. That is a use of position that costs nothing.'],
         criterion=[('A checkable record in place of a general complaint',
                     'Task Achievement'),
                    ('Stating an error without assigning blame',
                     'Task Response'),
                    ('Using final position to prioritise a question',
                     'Coherence and Cohesion')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Narrating what you have already done',
    explain=('A letter about an unresolved problem needs a sequence of '
             'completed actions with dates. The present perfect states that '
             'something is done; the past simple places it. Using both '
             'correctly is what makes the record read as a record.'),
    examples=['I have not received the certificate.',
              'I telephoned the office on 24 September and again on 11 '
              'October.',
              'I have already taken the steps open to me.',
              'I attended in person on 2 November, where a colleague '
              'confirmed the error.'],
    task='Put each verb into the right tense for a letter of this kind.',
    items=[('I (wait) seven weeks and nothing (arrive).',
            'I have waited seven weeks and nothing has arrived.'),
           ('I (telephone) twice, on 24 September and 11 October.',
            'I telephoned twice, on 24 September and on 11 October.'),
           ('I (not receive) any written reply.',
            'I have not received any written reply.'),
           ('When I (attend) on 2 November, a colleague (confirm) the '
            'address was wrong.',
            'When I attended on 2 November, a colleague confirmed that the '
            'address was wrong.'),
           ('I (do) everything the guidance (require).',
            'I have done everything the guidance requires.')]),
   vocab=[('registration certificate', 'the document proving a registered '
           'address'),
          ('tenancy agreement', 'the contract between tenant and landlord'),
          ('countersigned', 'signed by a second person as confirmation'),
          ('residence permit', 'official permission to live in a country'),
          ('certified translation', 'a translation accepted as accurate by '
           'an authority'),
          ('exchange', 'swapping one country’s licence for another’s'),
          ('recognition', 'official acceptance of a foreign qualification'),
          ('attrition', 'the rate at which people drop out')],
   expr=[('I am writing about my', 'opens with the matter and the reference'),
         ('I have already taken the steps I understood to be open to me',
          'pre-empts the suggestion that you should have tried something'),
         ('Specifically:', 'introduces numbered questions in a formal '
          'letter'),
         ('That last point is my real concern',
          'tells the reader which question matters most')],
   trans=['however', 'on both occasions', 'specifically', 'since'],
  ),

  dict(
   sub='Arriving and settling',
   step=2,
   read=[
    dict(heading='Four people on their first year',
         kind='Four short texts', task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 24-29',
         paras=[
          'A  Lioubov: The year was far easier than I expected and I think I '
          'know why, and it is not a flattering reason. I arrived with a job, '
          'a flat arranged by the company and a colleague who had done the '
          'paperwork for four people before me. Almost everything people find '
          'difficult, somebody had already done for me.',
          'B  Oyelaran: My qualifications were recognised after eleven '
          'months. For those eleven months I worked nights in a warehouse and '
          'I was told repeatedly that this showed admirable determination. It '
          'showed nothing of the sort. It showed that the recognition process '
          'takes eleven months and that I had rent to pay.',
          'C  Siv: What I underestimated was the small administrative '
          'friction. Not one large obstacle but forty tiny ones: a form that '
          'needs a number you get from another form, an office open on '
          'Tuesdays, a translation from a list of approved translators. Each '
          'one is twenty minutes and together they were my first winter.',
          'D  Tarquin: I would say the loneliness, and I would also say that '
          'I made it worse. I spent eight months refusing to spend time with '
          'anybody from home, because I had read that it slows your language '
          'down. It does. It also means that in month six you have nobody to '
          'be tired with, and I do not think I would do it that way again.'],
         items=[
          ('Which person says their experience was eased by others?',
           ['Lioubov', 'Oyelaran', 'Siv', 'Tarquin'], 0,
           'A job, a flat and a colleague who had done the paperwork '
           'before.',
           {1: 'Oyelaran rejects the way their situation was described '
               'by others.', 2: 'Siv describes an accumulation of small obstacles.', 3: 'Tarquin regrets a strategy they chose deliberately.'}),
          (
           'Which person rejects the way their situation was described '
           'by others?',
           ['Lioubov', 'Oyelaran', 'Siv', 'Tarquin'], 1,
           'He refuses the word determination and names the real '
           'cause.',
           {0: 'Lioubov says their experience was eased by others.', 2: 'Siv describes an accumulation of small obstacles.', 3: 'Tarquin regrets a strategy they chose deliberately.'}),
          (
           'Which person describes an accumulation of small obstacles?',
           ['Lioubov', 'Oyelaran', 'Siv', 'Tarquin'], 2,
           'Forty tiny ones, each twenty minutes, which together were '
           'a winter.',
           {0: 'Lioubov says their experience was eased by others.', 1: 'Oyelaran rejects the way their situation was described '
               'by others.', 3: 'Tarquin regrets a strategy they chose deliberately.'}),
          ('Which person regrets a strategy they chose deliberately?',
           ['Lioubov', 'Oyelaran', 'Siv', 'Tarquin'], 3,
           'He avoided people from home for eight months and would not '
           'do it again.',
           {0: 'Lioubov says their experience was eased by others.', 1: 'Oyelaran rejects the way their situation was described '
               'by others.', 2: 'Siv describes an accumulation of small obstacles.'}),
          (
           'Oyelaran believes the recognition process should be '
           'faster.', ['Yes', 'No', 'Not Given'], 2,
           'He states how long it took without saying whether it '
           'should be shorter.',
           {0: 'Yes would need a recommendation; he gives only how '
               'long it took.', 1: 'No would need him to defend the delay, which he never '
               'does.'}),
          (
           'Tarquin accepts that avoiding his own community helped his '
           'language.', ['Yes', 'No', 'Not Given'], 0,
           'He says plainly that it does slow your language down, and '
           'then gives the cost.',
           {1: 'No would need denial; he says plainly that it does '
               'help.', 2: 'Not Given is wrong because he weighs the benefit and '
               'the cost.'})])],
   listen=[
    dict(heading='Two councillors on where newcomers settle', part='Part 3',
         task='A discussion about housing · multiple choice and matching', band='l3',
         qtype='Questions 30-34',
         script=[
          ('Perpetua', 'The figures came through this morning and they do not '
           'say what either side wanted. Net arrivals in the ward were four '
           'hundred and ten last year.'),
          ('Rutger', 'Which is the number the campaign has been using, and I '
           'notice you are about to tell me it is misleading.'),
          ('Perpetua', 'It is incomplete, not misleading. Twenty-two '
           'hundred people arrived and seventeen hundred and ninety left. The '
           'net figure is four hundred and ten and the number of households '
           'that changed hands is nearly four thousand.'),
          ('Rutger', 'And the services are sized on the net figure.'),
          ('Perpetua', 'The services are sized on the net figure, and almost '
           'every cost they actually incur is driven by the turnover. A school '
           'with the same roll but a third of its pupils new each year is '
           'doing a completely different job.'),
          ('Rutger', 'That cuts against my side as well as yours, so let me '
           'ask the obvious question. If turnover is what costs money, who is '
           'leaving?'),
          ('Perpetua', 'That is the part we do not measure properly. We know '
           'arrivals because people register. Departures we infer, and badly, '
           'because nobody tells us they have gone.'),
          ('Rutger', 'Then the most useful thing this council could do is '
           'unglamorous. Measure departures.'),
          ('Perpetua', 'Yes, and it would cost almost nothing — a question at '
           'the point where people close a council tax account.'),
          ('Rutger', 'Before I agree to anything, tell me what you expect '
           'the answer to be, because I have learned to ask that before '
           'funding a survey.'),
          ('Perpetua', 'I expect departures to be higher than we currently '
           'estimate, which would make the net figure smaller and would be inconvenient for me, which is why you should believe me.'),
          ('Rutger', 'That is the answer that makes me willing to pay for '
           'it.'),
          ('Perpetua', 'And if I am wrong, the number goes the other way and '
           'you have a stronger case than you have now, which you should '
           'also want.'),
          ('Rutger', 'I will support that and I want to be clear that it does '
           'not change my position on the housing target.'),
          ('Perpetua', 'It should not. It should just mean we are both '
           'arguing about a number that exists.')],
         items=[
          ('How many people arrived in the ward last year?', None,
           '2,200',
           'Against seventeen hundred and ninety departures, giving a '
           'net of four hundred and ten.'),
          ('Perpetua says the net figure is ____________.', None,
           'incomplete',
           'She distinguishes incomplete from misleading explicitly.'),
          ('She says costs are driven by the ____________.', None,
           'turnover',
           'A school with the same roll but a third of its pupils new '
           'is doing a different job.'),
          ('Which figure does she say is poorly measured?',
           ['Arrivals', 'Departures', 'Births', 'Households'], 1,
           'Arrivals are registered; departures are inferred badly.',
           {0: 'Arrivals are known because people register.', 2: 'Births are not discussed in the exchange.', 3: 'Household changes are counted, at nearly four '
               'thousand.'}),
          ('What do they agree to?',
           ['Changing the housing target', 'Measuring departures', 'A new survey of arrivals', 'Nothing'],
           1, 'A question asked when a council tax account is closed.',
           {0: 'He says explicitly that it does not change his '
               'position.', 2: 'Arrivals are already well measured.', 3: 'They agree on a specific, cheap measure.'})])],
   speak=dict(
    part='Part 1 into Part 2', focus='Arriving somewhere new',
    longturn=[('The time I was new somewhere was a year I spent working in a '
               'town in the south of Spain, in an office of about thirty '
               'people.'),
              ('I was there on an exchange arranged through my employer, which '
               'meant I had a job, a desk and a flat from the first day, and '
               'almost nothing else.'),
              ('What was difficult was not the language, although my Spanish '
               'was poor, and not the work. It was that I had no reason to be '
               'anywhere outside working hours. At home a Tuesday evening is '
               'full of things that have accumulated over years without my '
               'noticing: people I owe a drink to, a class I go to, a brother '
               'who rings. All of that had gone, and what was left was a flat, '
               'which is how I learned the difference between being alone and '
               'having nothing arranged.'),
              ('What made it easier in the end was a single accident. The '
               'woman at the desk next to mine asked me to make up the numbers '
               'in a five-a-side football team, and I am a bad footballer, and '
               'I went. That team was the whole thing. Within two months I had '
               'Thursday nights, then people who knew my name in a bar, then '
               'invitations that had nothing to do with the office. I did not '
               'solve the problem; somebody included me, and I have tried to '
               'remember that when the new person arrives at my own desk.')],
    intro=('Short answers, then the long turn. One occasion told properly '
           'beats three mentioned.'),
    cue=('Describe a time when you were new somewhere.',
         ['where you were', 'why you were there',
          'what was difficult about it',
          'and explain what made it easier in the end']),
    qs=['Do you remember your first day at a new school or job?',
        'Is it easy to make friends in a new place?',
        'Now look at the card. You have one minute to make notes.',
        'What could organisations do to help newcomers?'],
    shape=[('answer', 'My first month in a town where I knew nobody.'),
           ('support', 'I had taken a job three hundred miles from home.'),
           ('follow-up', 'The work was fine; the evenings were very long.'),
           ('support', 'What changed it was joining a badminton club I was '
            'bad at.'),
           ('follow-up', 'Being bad at something with other people turns out '
            'to be the fastest way in.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should newcomers be required to learn the language?',
         prompt=('Some people believe that people moving to a new country '
                 'should be required to learn the local language. Others say '
                 'this should be a matter of personal choice. Discuss both '
                 'views and give your own opinion. Write at least 250 '
                 'words.'),
         model=[
          'Almost everybody agrees that newcomers should learn the language of '
          'the country they move to, including almost every newcomer. The '
          'disagreement is about the word required, and specifically about '
          'what is supposed to happen to somebody who has not learned it, '
          'which is the part the debate consistently leaves unstated.',
          'The case for a requirement is genuinely strong on consequences. '
          'Without the language, a newcomer is dependent on intermediaries for '
          'medical appointments, school meetings and any dealing with '
          'authority, and that dependence falls hardest on those with least '
          'power within a household. Language is also the single best '
          'predictor of whether somebody is still in their first job a decade '
          'later.',
          'The case against is not that language does not matter but that a '
          'requirement attaches a penalty to something that is mostly '
          'determined by circumstance. A person working two shifts to support '
          'children has not chosen to go without classes. Attaching a '
          'consequence to their failure punishes the shift pattern itself, and the people who would meet the requirement '
          'easily are those who needed it least.',
          'My own position is that the argument is really about provision. If classes are free, available in the evening and '
          'at weekends, and offered with childcare, the number of people who '
          'decline them is very small, and a requirement then does almost no '
          'work because almost nobody fails it. If classes are scarce and '
          'daytime, a requirement is a penalty dressed as an expectation.',
          'What I would support, therefore, is a guarantee before any '
          'obligation: a legal entitlement to a funded place within three '
          'months of arrival, and only then any expectation attached to '
          'taking it. That sequence is also the one that the countries with '
          'the highest rates of language acquisition have actually '
          'followed.'],
         notes=[
          'The opening identifies where the disagreement really sits — on the '
          'word required — instead of restating both sides. That is the '
          'single most reliable way to open a discussion essay at this '
          'band.',
          'Paragraph 4 is a conditional argument: if provision is good the '
          'requirement is idle, if it is bad the requirement is a punishment. '
          'An argument that handles both branches is much stronger than one '
          'that assumes a state of the world.',
          'The conclusion proposes a sequence, not a compromise. Sequence '
          'positions — this first, then that — recur throughout this volume '
          'because they are genuinely the most defensible shape a Task 2 '
          'position can take.'],
         criterion=[('Locating the disagreement on a single word',
                     'Task Response'),
                    ('A conditional argument covering both branches',
                     'Coherence and Cohesion'),
                    ('A sequence, not a compromise',
                     'Task Response')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Conditional arguments that cover both branches',
    explain=('An argument that depends on how the world is can be made '
             'without knowing: state what follows under each condition. This '
             'is far stronger than assuming one, and it is a structure '
             'examiners recognise immediately.'),
    examples=['If classes are available, the requirement does almost no '
              'work.',
              'If they are scarce, it is a penalty dressed as an '
              'expectation.',
              'Either way, the argument turns on provision.',
              'Whichever is true, the same conclusion follows.'],
    task='Turn each claim into a two-branch conditional argument.',
    items=[('A requirement would help.',
            'If provision is adequate the requirement is unnecessary; if it '
            'is not, the requirement punishes circumstance.'),
           ('Fines would make people attend.',
            'If people are choosing not to attend a fine may work; if they '
            'cannot attend, it simply transfers money from the poorest.'),
           ('Testing is the answer.',
            'If the test measures what matters it adds information; if it '
            'does not, it adds a barrier and nothing else.'),
           ('More funding would solve this.',
            'If the shortage is of places, funding solves it; if it is of '
            'time, funding alone will not.'),
           ('The policy failed.',
            'Either the policy was wrong or it was never implemented as '
            'written, and the two call for opposite responses.')]),
   vocab=[('intermediary', 'somebody who acts between two parties'),
          ('entitlement', 'something a person has a right to'),
          ('funded place', 'a class place paid for by the state'),
          ('obligation', 'something a person is required to do'),
          ('fluency', 'the ability to use a language easily'),
          ('dependence', 'having to rely on somebody else'),
          ('childcare', 'care for children while a parent is occupied'),
          ('shift pattern', 'the arrangement of a person’s working hours')],
   expr=[('including almost every newcomer',
          'removes a strawman before it is built'),
         ('which is the part the debate consistently leaves unstated',
          'names an omission in an argument'),
         ('a penalty dressed as an expectation',
          'characterises a policy by its effect'),
         ('before any obligation', 'insists on an order of measures')],
   trans=['specifically', 'if', 'therefore', 'whichever'],
  ),

  dict(
   sub='Who moves where',
   step=3,
   read=[
    dict(heading='Flows between four regions',
         kind='Data article',
         task='Matching features, table completion and matching information',
         band='gt_work', qtype='Questions 35-40',
         figure=_FLOWS,
         paras=[
          'The table shows movement between four regions over one year, in '
          'thousands of people. For each region it gives arrivals, departures, '
          'the net change and the turnover, which is simply arrivals plus '
          'departures and is the figure almost never reported.',
          'Read by the net column alone, the year looks modest. The North '
          'gained twenty-two thousand, Central fifteen thousand; the West lost '
          'thirty thousand and the East seven. Across all four regions the net '
          'changes total zero, which is a property of a closed system, true by construction.',
          'Read by turnover the same year looks entirely different. Central '
          'has a net change of fifteen thousand and a turnover of three '
          'hundred and ninety-one thousand: nearly four hundred thousand '
          'people changed their region of residence in a place whose '
          'population barely moved. The North’s net gain of twenty-two '
          'thousand sits on a turnover of two hundred and fourteen thousand.',
          'The distinction matters because the two figures drive different '
          'things. Net change drives the quantity of housing and school '
          'places a region eventually needs. Turnover drives almost all the '
          'administrative cost: registrations, transfers, tenancies ending, '
          'medical records moving, children arriving mid-year into classes '
          'already formed.',
          'A further use of the two columns together is to compare regions '
          'that look alike on one measure. The North and the West have '
          'turnovers within ten thousand of each other, at two hundred and '
          'fourteen and two hundred and four thousand, and net figures of '
          'opposite sign: plus twenty-two and minus thirty. Similar volumes '
          'of movement, opposite outcomes, which is a comparison the net '
          'column alone could not produce.',
          'The East illustrates the trap most neatly. Its net figure of minus '
          'seven thousand is the smallest absolute change of the four, and it '
          'would be easy to describe the East as the region where least '
          'happened. Its turnover of one hundred and thirty-five thousand is '
          'also the lowest, so in this case the two readings agree — but they '
          'agree by coincidence, and a region with the same net figure and '
          'three times the turnover would be a completely different place.'],
         items=[
          ('Which region had the largest net loss?',
           ['North', 'East', 'Central', 'West'], 3,
           'The West, at minus thirty thousand.',
           {0: 'The North gained twenty-two thousand.', 1: 'The East lost seven thousand, the smallest change.', 2: 'Central had the highest turnover.'}),
          ('Which region had the highest turnover?',
           ['North', 'East', 'Central', 'West'], 2,
           'Central, at three hundred and ninety-one thousand.',
           {0: 'The North\u2019s turnover was two hundred and fourteen '
               'thousand.', 1: 'The East had the lowest turnover of the four.', 3: 'West had the largest net loss.'}),
          ('Arrivals in the North: ____________ thousand', None, '118',
           'Against ninety-six thousand departures, giving a net of plus '
           'twenty-two.'),
          ('Departures from the West: ____________ thousand', None, '117',
           'Against eighty-seven arrivals, giving a net of minus thirty.'),
          ('Turnover is defined as arrivals plus ____________.', None,
           'departures',
           'Paragraph 1, which notes it is almost never reported.'),
          ('Which paragraph explains what each figure drives?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           2,
           'Net change drives housing and school places; turnover '
           'drives administrative cost.',
           {0: 'Paragraph 2 reads the year by the net column.', 1: 'Paragraph 3 reads the same year by turnover.', 3: 'Paragraph 5 compares regions that look alike.'})])],
   listen=[
    dict(heading='A demographer on migration data', part='Part 4',
         task='A lecture on reading flow figures · multiple choice', band='l4',
         qtype='Questions 41-46',
         figure=_FLOWS,
         script=[
          ('Lecturer', 'There is a number in every newspaper article about '
           'migration and it is the wrong number. Not inaccurate — wrong in '
           'the sense of answering a question nobody asked. The number is net '
           'migration, and I want to spend this hour on what it hides.'),
          ('Lecturer', 'Net is arrivals minus departures. Look at Central on '
           'your handout. Net plus fifteen thousand. That sounds like a '
           'region where very little changed. Two hundred and three thousand '
           'people arrived and one hundred and eighty-eight thousand left. '
           'Three hundred and ninety-one thousand people moved house across a '
           'regional boundary, and the headline figure for that is '
           'fifteen.'),
          ('Lecturer', 'Now, why does the difference matter instead of just '
           'being an interesting arithmetic point? Because the two figures '
           'drive different costs, and governments budget on the wrong one. '
           'Net change tells you how many houses you will eventually need. '
           'Turnover tells you how many tenancies will end this year, how '
           'many medical records will move, how many children will arrive in '
           'March into a class formed in September.'),
          ('Lecturer', 'A school with a roll of four hundred and a third of '
           'its pupils new each year is doing a job that a school with a '
           'stable roll of four hundred is not doing, and it is funded '
           'identically. That is not a small inefficiency. In high-turnover '
           'areas it is the single largest unfunded pressure in the '
           'system.'),
          ('Lecturer', 'Second problem, and this one is about measurement itself, before any question of how the number is then reported. Arrivals are counted well, because people '
           'register when they arrive: they need the documents. Departures '
           'are estimated, often from survey data with alarming confidence '
           'intervals, because nobody has any reason to tell an authority '
           'they are leaving.'),
          ('Lecturer', 'So the net figure, which is already the wrong '
           'quantity, is a difference between a well-measured number and a '
           'badly measured one. The error in the small number is almost '
           'entirely the error in the large one, which means net migration is '
           'reported to a precision it does not remotely possess.'),
          ('Lecturer', 'The fix is cheap and nobody does it. Ask one '
           'question when somebody closes a utility or council tax account. '
           'That is all. We would move from estimating departures to counting '
           'most of them, and every net figure in the country would become a '
           'measurement instead of a subtraction of a guess.')],
         items=[
          (
           'The lecturer says the net figure answers a question nobody '
           '____________.', None, 'asked',
           'He distinguishes wrong in that sense from inaccurate.'),
          ('Central\u2019s turnover is ____________.', None, '391,000',
           'Against a net figure of plus fifteen thousand.'),
          ('What does turnover drive?',
           ['The number of houses needed', 'Tenancies, records and mid-year arrivals', 'The birth rate', 'Regional boundaries'],
           1,
           'Net change drives the housing quantity; turnover drives '
           'these.',
           {0: 'Housing quantity follows from net change.', 2: 'The birth rate is not part of either figure.', 3: 'Boundaries are fixed, not driven by turnover.'}),
          (
           'A school with a third of its pupils new each year is '
           'funded ____________ to a stable school.', None,
           'identically',
           'Which he calls the largest unfunded pressure in '
           'high-turnover areas.'),
          (
           'Departures are measured badly because nobody has a '
           '____________ to tell an authority.', None,
           'reason',
           'Arrivals are counted well because people need documents.'),
          ('His proposed fix is to ask a question when somebody',
           ['registers an address', 'closes a utility or tax account', 'applies for a passport', 'enrols a child'],
           1, 'Which would turn an estimate into a count.',
           {0: 'Registering an address is where arrivals are already '
               'counted.', 2: 'Passports are not mentioned in the lecture.', 3: 'School enrolment is an arrival, not a departure.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='Why people move',
    intro=('Work the card first: a minute of notes, the long turn, then '
           'the one or two questions that round it off. The discussion '
           'after that: four or five sentences. Where you use a figure, '
           'say what it measures.'),
    cue=(('Describe somebody you know who moved to another town or '
          'country.'),
         ['who they are',
          'where they moved from and to',
          'why they moved',
          'and explain how the move worked out']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Do they plan to go back?',
        'What did they find hardest?',
        'Why do people move from one part of a country to another?',
        'Should governments try to influence where people live?',
        'What are the effects on the places people leave?',
        'Is it better to grow up in one place or in several?'],
    shape=[('answer', 'Mostly work, and after that housing cost.'),
           ('support', 'People follow jobs and then discover they cannot '
            'afford to stay.'),
           ('follow-up', 'Which produces a lot of movement that nets out to '
            'almost nothing.'),
           ('support', 'The places people leave lose the young first.'),
           ('follow-up', 'So the effect on a town is not captured by its '
            'population total at all.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Flows between four regions',
         prompt=('The table below shows movement between four regions in one '
                 'year. Summarise the information by selecting and reporting '
                 'the main features, and make comparisons where relevant. '
                 'Write at least 150 words.'),
         figure=_FLOWS,
         model=[
          'The table shows arrivals, departures, net change and total '
          'turnover for four regions over a single year, in thousands of '
          'people. Overall, the net changes are small in every region and in '
          'two cases negative, while the volume of movement behind them is '
          'many times larger, so that the region with the smallest net gain '
          'has by far the most people moving.',
          'Taking the net figures first, two regions gained and two lost. The '
          'North gained most, at 22,000, followed by Central at 15,000. The '
          'East lost 7,000 and the West lost 30,000, the largest change of '
          'any region in either direction.',
          'The arrivals and departures behind these figures are of a wholly '
          'different order. Central saw 203,000 arrivals and 188,000 '
          'departures, giving a turnover of 391,000 — more than twenty-six '
          'times its net change. The North’s turnover was 214,000 and the '
          'West’s 204,000, which are very similar to one another despite net '
          'changes of opposite sign.',
          'The East is the only region where both measures are lowest: 135,000 '
          'of turnover and a net change of 7,000. Across all four regions the '
          'net changes sum to zero, while over 940,000 individual moves lie '
          'behind them.'],
         notes=[
          'The data are two-dimensional — region by measure — and the answer '
          'structures by measure: all four regions through net, then all four '
          'through turnover. The alternative, a paragraph per region, would '
          'produce four small paragraphs and no comparison.',
          'The Overall statement contains the finding: small nets, large '
          'flows, and the mismatch between them. On a table with a derived '
          'column, the relationship between the columns is almost always the '
          'main feature.',
          'Note the handling of the North and West — very similar turnover, '
          'opposite net sign. Pointing out that two regions are alike on one '
          'measure and opposite on another is exactly the comparison the task '
          'asks for.'],
         criterion=[('Structuring by measure, not by region',
                     'Coherence and Cohesion'),
                    ('An Overall statement about the relationship between '
                     'columns', 'Task Achievement'),
                    ('Comparing two regions alike on one measure and '
                     'opposite on another', 'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Reporting a net figure and the flows behind it',
    fix=dict(
     text=('Net migration was 240,000 in 2019, which is the difference between '
           '680,000 arrivals and 440,000 departures. The net figure fell in '
           '2020, but both the flows behind it fell more sharply. A net figure '
           'can stay the same although the two flows change greatly, so it '
           'hide as much as it shows.'),
     faults=[('both the flows behind it fell more sharply',
              'both of the flows behind it fell more sharply',
              ('Both comes before the noun or takes of before the: both flows, '
               'or both of the flows.')),
             ('so it hide as much as it shows',
              'so it hides as much as it shows',
              'The subject it is singular, so the verb is hides.'),
             (('A net figure can stay the same although the two flows change '
               'greatly'),
              ('A net figure can stay the same even when both flows change '
               'greatly'),
              ('Although needs a contrast between two statements; here the '
               'second clause is a condition, so even when is the link.'))]),
    explain=('A net figure is a difference, and describing it honestly means '
             'giving the two numbers it came from. These patterns do that '
             'compactly.'),
    examples=['Central gained 15,000 on arrivals of 203,000 and departures '
              'of 188,000.',
              'The net change was small, while the movement behind it was '
              'many times larger.',
              'Turnover was twenty-six times the net figure.',
              'Across all four regions the net changes sum to zero.'],
    task='Rewrite each net statement so that the underlying flows appear.',
    items=[('The North gained 22,000.',
            'The North gained 22,000, from 118,000 arrivals against 96,000 '
            'departures.'),
           ('The West lost 30,000.',
            'The West lost 30,000, with 87,000 arriving and 117,000 '
            'leaving.'),
           ('Central barely changed.',
            'Central changed by only 15,000, although 391,000 people moved '
            'in or out.'),
           ('The East had the smallest change.',
            'The East had both the smallest net change, at 7,000, and the '
            'lowest turnover, at 135,000.'),
           ('The regions balance out.',
            'The four net figures sum to zero, while more than 940,000 '
            'individual moves lie behind them.')]),
   vocab=[('net change', 'arrivals minus departures'),
          ('turnover', 'the total number of moves in and out'),
          ('inflow', 'movement into an area'),
          ('outflow', 'movement out of an area'),
          ('closed system', 'one in which totals must balance'),
          ('roll', 'the number of pupils on a school’s register'),
          ('mid-year', 'during a school year, not at the start of one'),
          ('confidence interval', 'the range an estimate is likely to lie '
           'in')],
   expr=[('is a property of a closed system, true by construction',
          'dismisses an artefact of definition'),
         ('they agree by coincidence', 'warns against a conclusion that '
          'happens to hold'),
         ('a difference between a well-measured number and a badly measured '
          'one', 'explains why a figure is imprecise'),
         ('the fix is cheap and nobody does it',
          'names an available remedy and its neglect')],
   trans=['read by', 'the distinction matters', 'so that', 'while'],
  ),

  dict(
   sub='What migration does to wages',
   step=4,
   read=[
    dict(heading='The evidence and its disagreements',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 47-53',
         paras=[
          'Few empirical questions have been studied as intensively as the '
          'effect of immigration on the wages of existing workers, and few '
          'have produced a literature so consistently misread. The central '
          'finding is not in serious dispute among economists: across whole '
          'national labour markets, the average effect on wages is close to '
          'zero and cannot be reliably distinguished from it.',
          'The mechanism behind this result is worth stating, because '
          'the intuition against it is strong. More workers does mean '
          'more labour supplied, but it also means more consumption, '
          'more demand for housing, food and services, and therefore '
          'more labour demanded. Arrivals additionally bring different '
          'skills from those already present, so they are frequently '
          'complements to existing workers.',
          'But the average is not the finding, and treating it as one is '
          'where most of the public argument goes wrong. Within the average, '
          'the effects fall very unevenly. Workers whose skills most closely '
          'substitute for those of recent arrivals — typically previous '
          'arrivals, and workers without qualifications in sectors with '
          'little wage floor — experience measurable downward pressure. '
          'Workers whose skills complement them experience gains.',
          'The size of these distributional effects is contested, and the '
          'disagreement is methodological, not political, and it has persisted '
          'for thirty years because each approach fails in a different '
          'place. One approach '
          'compares cities with different levels of immigration. The '
          'difficulty is that migrants choose cities with strong labour '
          'markets, so a positive correlation between immigration and wages '
          'may record where people went, with causation playing no part in it.',
          'A second approach uses natural experiments: sudden arrivals caused '
          'by events unconnected with local conditions. These are far better '
          'identified and far rarer, and the most famous of them have been '
          're-analysed repeatedly with results that depend on choices about '
          'the comparison group, which is itself informative about how much '
          'weight any single study can carry.',
          'A third approach models the labour market structurally and asks '
          'what the effects must be given assumptions about how different '
          'kinds of labour substitute for one another. This can address '
          'questions no natural experiment reaches, at the price that its '
          'answers follow substantially from its assumptions, which are '
          'themselves estimated from data of the kind in dispute.',
          'The honest position is that the aggregate result is robust, the '
          'distributional results are real but imprecisely estimated, and the '
          'dynamic effects over ten or twenty years are weakly identified. '
          'None of these three statements is politically convenient, which is '
          'why public discussion typically quotes the first and omits the '
          'other two.',
          'The time dimension deserves separate treatment, because it is '
          'where the strongest claims on both sides are made with the weakest '
          'evidence. Most studies measure effects over one to five years. '
          'What happens over twenty — whether arrivals raise the capital '
          'stock, whether their children earn more than the national average, '
          'whether the sectors they entered expanded or contracted — is '
          'studied with far fewer observations and far more assumptions, and '
          'the results are correspondingly less secure.',
          'This matters because the political argument is almost entirely '
          'about the long run. Both the claim that migration transforms an '
          'economy and the claim that it depresses a generation’s wages are '
          'claims about twenty years, made on evidence collected over five. '
          'The literature is strongest exactly where the argument is '
          'weakest, and weakest exactly where the argument is loudest, which '
          'is an unusually unhelpful arrangement.',
          'There is also a question the literature barely addresses. Wages '
          'are one channel; rents, public service capacity and the pace of '
          'change in a neighbourhood are others, and they are experienced by '
          'the same people. A worker whose wage is unaffected and whose rent '
          'rises has not been left unaffected, and an argument that answers '
          'only the wage question will not sound honest to them, because it '
          'is not an answer to what they asked.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['Why the average effect is near zero', 'Who loses within the average', 'Comparing cities', 'What is not measured'],
           0,
           'More workers also means more demand, and arrivals are '
           'often complements.',
           {1: 'Who loses within the average is the heading for '
               'paragraph 3.', 2: 'Comparing cities is paragraph 4, the first approach.', 3: 'What is not measured is paragraph 10, the last.'}),
          ('Choose the best heading for paragraph 3.',
           ['Why the average effect is near zero', 'Who loses within the average', 'Natural experiments', 'Structural models'],
           1,
           'Substitutes experience downward pressure; complements '
           'experience gains.',
           {0: 'Why the average effect is near zero is the heading for '
               'paragraph 2.', 2: 'Natural experiments are paragraph 5, the second '
               'approach.', 3: 'Structural models are paragraph 6, the third approach.'}),
          ('Choose the best heading for paragraph 8.',
           ['The honest position', 'Structural models', 'Channels other than wages', 'Why studies disagree'],
           2,
           'Rents, services and the pace of change are experienced by '
           'the same people.',
           {0: 'The honest position is paragraph 7.', 1: 'Structural models are paragraph 6, the third approach.', 3: 'Why studies disagree is paragraphs 4 to 6.'}),
          ('The writer believes immigration lowers wages overall.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1: the average effect is close to zero, and '
           'cannot be reliably distinguished from it.',
           {0: 'Yes would need a fall; paragraph 1 puts the average '
               'effect near zero.', 2: 'Not Given is wrong because the average effect is '
               'given.'}),
          (
           'The writer believes the disagreement among economists is '
           'political.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 4 states that the disagreement is '
           'methodological, not political.',
           {0: 'Yes would need politics; paragraph 4 calls it '
               'methodological.', 2: 'Not Given is wrong because the disagreement is '
               'characterised.'}),
          ('Workers whose skills ____________ those of arrivals experience '
           'gains.', None, 'complement',
           'Paragraph 3, as against those whose skills substitute for '
           'them.'),
          ('The approach using sudden arrivals unconnected with local '
           'conditions is called a ____________ experiment.', None,
           'natural',
           'Paragraph 5: better identified, far rarer, and repeatedly '
           're-analysed.')])],
   listen=[
    dict(heading='A lecture on labour market effects', part='Part 4',
         task='A lecture on reading an economics literature · multiple choice and matching', band='l4',
         qtype='Questions 54-59',
         script=[
          ('Lecturer', 'I am going to do something that will annoy both '
           'halves of this room, which is to tell you what the evidence on '
           'immigration and wages actually says, including the parts that '
           'neither side quotes.'),
          ('Lecturer', 'The aggregate result first. Across a national labour '
           'market the average wage effect is approximately zero. This is '
           'robust, it has survived forty years of attack, and the mechanism '
           'is not mysterious: arrivals supply labour and they also demand '
           'it. They rent flats, buy food, use dentists. A migrant is not a '
           'unit of supply with no other properties.'),
          ('Lecturer', 'Now the part that the people who like the first '
           'sentence tend to stop before. An average is a distribution with '
           'the detail removed. Within it, workers who substitute closely for '
           'recent arrivals face downward pressure — and the group that '
           'substitutes most closely is almost always previous arrivals. The '
           'people most affected by this year’s migration are frequently last '
           'decade’s migrants.'),
          ('Lecturer', 'Why is the size of that effect still disputed after '
           'so much work? Three methods, three problems. Compare cities, and '
           'you face the fact that migrants choose thriving cities, so your correlation may record destination choice alone. '
           'Use a natural experiment, and you have excellent identification '
           'and a sample of about four events in modern history, each '
           're-analysed with conflicting results.'),
          ('Lecturer', 'The third method builds a structural model and asks '
           'what must follow from assumptions about how different kinds of '
           'labour substitute. It reaches questions the other two cannot, and '
           'its answers depend heavily on parameters estimated from exactly '
           'the data under dispute. That is not a scandal. It is a limit, and '
           'you should know which limit you are inside when you quote a '
           'number.'),
          ('Lecturer', 'A word about time, which is where both sides '
           'overreach. Nearly all of this evidence covers one to five years. '
           'The political argument is about twenty. So the literature is '
           'strongest where the argument is quietest, and weakest where it '
           'is loudest, and anybody quoting a twenty-year claim at you is '
           'extrapolating whichever side they are on.'),
          ('Lecturer', 'My last point is the one I care about most and the '
           'literature says least about. Wages are one channel. Rent is '
           'another. Waiting times are another. The pace at which a street '
           'changes is another, and it is not measured at all. Somebody whose '
           'wage is unchanged and whose rent has risen eleven per cent has not '
           'been told anything useful by my discipline, and when we reply to '
           'their concern with our aggregate wage finding, we are answering a '
           'question they did not ask and then calling them irrational for '
           'not being satisfied.')],
         items=[
          (
           'The lecturer says the aggregate wage effect is '
           'approximately ____________ and robust.', None,
           'zero',
           'It has survived forty years of attack, and the mechanism '
           'is not mysterious.'),
          (
           'Which group does he say substitutes most closely for '
           'recent arrivals?',
           ['Graduates', 'Previous arrivals', 'Older workers', 'Public sector workers'],
           1,
           'The people most affected by this year\u2019s migration are '
           'often last decade\u2019s migrants.',
           {0: 'Graduates are more often complements than substitutes.', 2: 'Age is not the basis of substitution he names.', 3: 'The public sector is not part of his account.'}),
          (
           'The problem with comparing cities is that migrants choose '
           '____________ cities.', None, 'thriving',
           'So the correlation may record destination choice alone.'),
          (
           'How many natural experiments does he say exist in modern '
           'history?', None, 'about four',
           'Each re-analysed with conflicting results.'),
          ('What does he say about structural models?',
           ['They are scandalous', 'Their answers depend on contested parameters', 'They are the most reliable', 'They are rarely used'],
           1, 'He calls this a limit, not a scandal.',
           {0: 'He says explicitly that it is not a scandal.', 2: 'He calls their dependence on assumptions a limit.', 3: 'He treats them as one of three standard methods.'}),
          ('His final point is that the literature says least about',
           ['wages', 'channels other than wages', 'long-run effects', 'measurement error'],
           1,
           'Rent, waiting times and the pace at which a street '
           'changes.',
           {0: 'Wages are the best-measured channel.', 2: 'Long-run effects are his earlier point about time.', 3: 'Measurement error is not the gap he identifies.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='Work and newcomers',
    followup=[(('You say the wage effect is small. Who benefits most when a '
                'population grows?'),
               ('Owners of things that cannot be added to quickly, which in '
                'most countries means housing. Output rises and so does demand '
                'for a fixed stock, so the gain concentrates in land values '
                'while the costs show up in rents, and that distribution has '
                'nothing to do with the newcomers themselves.')),
              ('Should a country choose which skills it admits?',
               ('It will, whatever it says, and I would be modest about how '
                'well it can be done. Governments have a poor record of '
                'forecasting which skills are needed in ten years, so a points '
                'system is really a guess with administrative costs. I would '
                'weight it towards people who can move between occupations.')),
              (('How should governments respond to people who feel they have '
                'lost out?'),
               ('By addressing the thing they are describing rather than the '
                'thing they are blamed for believing. Where a town\'s surgery '
                'and school are full, the shortage is real even if the '
                'national average is fine, and it is fixed with capacity. '
                'Telling somebody the aggregate data disagrees with their '
                'waiting list is not an answer.'))],
    intro=('Take the card first. One minute to make notes, then one to two '
           'minutes of talk, and the bullets are the order to take them '
           'in. Then the discussion: four or five sentences. Try to '
           'distinguish an average from a distribution at least once.'),
    cue=('Describe a place where you were the newcomer.',
         ['where it was',
          'why you were there',
          'how you were received',
          'and explain how long it took you to settle']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Who helped you most?',
        'What would have made it easier?',
        'Does immigration affect the wages of local workers?',
        'Who benefits most when a country’s population grows?',
        'Should a country choose which skills it admits?',
        ('How should governments respond to people who feel they have lost '
         'out?')],
    shape=[('answer', 'On average very little, and that is not the whole '
            'answer.'),
           ('support', 'An average hides who gained and who lost within '
            'it.'),
           ('follow-up', 'The people who lose are usually those doing the '
            'most similar work.'),
           ('support', 'And often those who arrived a decade earlier.'),
           ('follow-up', 'So telling them the average is zero answers a '
            'question they did not ask.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Two brainstorms, one overlap',
         prompt=('Should governments select immigrants by skill? Brainstorm '
                 'alone for five minutes. Then exchange with a partner, '
                 'brainstorm the opposite position, and find the overlap. Do '
                 'not write the essay yet.'),
         plan=('Selection by skill is defensible as a tool and indefensible '
               'as a whole policy',
               [('Selection answers a question about the economy, which is not the one usually asked',
                 ['it shapes what arrivals do, not how many arrive',
                  'the public concern is usually about pace and place, not '
                  'skill mix']),
                ('A skills test measures what is easy to measure',
                 ['credentials transfer badly and are recognised slowly',
                  'the sectors with the worst shortages score lowest on most '
                  'points systems'])]),
         notes=[
          'The exercise is to brainstorm both sides and then look for the '
          'overlap: the claims that appear in both lists. Those are the ones '
          'nobody is disputing, which means they belong in your framing, where your body paragraphs have no use for them.',
          'On this prompt the overlap is usually large: both sides agree that '
          'shortages exist, that recognition is slow, and that the public '
          'debate is not really about skill. A position built on the overlap '
          'is almost unanswerable, because the other side has already '
          'conceded it.',
          'What is left after removing the overlap is the real disagreement, '
          'and it is usually smaller and more specific than either brainstorm '
          'suggested. That is the point of the exercise.'],
         criterion=[('Identifying what both sides already concede',
                     'Task Response'),
                    ('Building the body paragraphs on the genuine '
                     'disagreement', 'Coherence and Cohesion')],
         instruct='  Produce both brainstorms, the overlap and the outline. '
                  'You will write it in cycle 5.',
         lines=12)],
   gram=dict(
    point='Distinguishing an average from a distribution',
    explain=('The commonest statistical error in Task 2 writing is to treat '
             'an average as a statement about individuals. These structures '
             'keep the two apart and are worth a band on their own in an '
             'essay about evidence.'),
    examples=['The average effect is near zero, which is not a statement '
              'about any particular worker.',
              'An average is a distribution with the detail removed.',
              'Within that average, some groups gain and others lose.',
              'The aggregate result and the distributional result are both '
              'true.'],
    task='Rewrite each claim so that average and distribution are kept '
         'apart.',
    items=[('Immigration does not affect wages.',
            'The average effect on wages is close to zero, while some groups '
            'experience measurable pressure.'),
           ('Everyone benefits from growth.',
            'The aggregate gain is clear; whether any particular group '
            'benefits depends on where they sit in the distribution.'),
           ('The policy worked.',
            'The policy improved the average outcome, which does not tell us '
            'how it affected the worst-off.'),
           ('Wages rose.',
            'Mean wages rose, although the median may have moved less or not '
            'at all.'),
           ('Nobody was harmed.',
            'No harm appears in the aggregate figures, which are not designed '
            'to reveal it.')]),
   vocab=[('substitute', 'a worker whose skills replace another’s'),
          ('complement', 'a worker whose skills increase another’s value'),
          ('aggregate', 'relating to the total, not to its parts'),
          ('distributional', 'concerning how effects are shared out'),
          ('natural experiment', 'a real event that resembles an assigned '
           'one'),
          ('identification', 'how well a study isolates the effect it '
           'claims'),
          ('parameter', 'a value assumed or estimated within a model'),
          ('wage floor', 'a minimum below which wages cannot fall')],
   expr=[('is not in serious dispute among', 'reports a settled finding'),
         ('the average is not the finding', 'rejects a common misreading'),
         ('three methods, three problems', 'announces a structured '
          'critique'),
         ('we are answering a question they did not ask',
          'identifies a mismatch between argument and concern')],
   trans=['but', 'within that', 'at the price that', 'there is also'],
  ),

  dict(
   sub='True of the country, false of the town',
   step=5,
   read=[
    dict(heading='Why national figures settle nothing locally',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given, sentence completion and short answer',
         band='acad', qtype='Questions 60-66',
         paras=[
          'A national finding and a local one can both be correct and point '
          'in opposite directions, and the resulting arguments are among the '
          'least productive in public life, because each party is quoting '
          'accurate evidence about a different object. The wage literature is '
          'the clearest case, but the structure recurs wherever a policy is '
          'national and its effects are local.',
          'Begin with why the national average is near zero. Arrivals supply '
          'labour and demand it; they move towards work, so the places that '
          'receive them are the places with jobs; and over a few years, '
          'capital adjusts, firms open, and the local economy accommodates '
          'the change. The mechanisms that produce the reassuring national '
          'figure are all adjustment mechanisms, and adjustment takes time.',
          'Now consider a town of twenty thousand that receives two thousand '
          'arrivals in eighteen months. Nothing in the national finding is '
          'false there, but almost none of it has happened yet. The capital '
          'has not adjusted, the firms have not opened, the school places '
          'were allocated under the previous roll, and the housing stock is '
          'what it was. The long-run equilibrium is real and the town is not '
          'living in it.',
          'There is a second asymmetry. National figures average across '
          'places, so a large positive in one region offsets a large negative '
          'in another and the result is a small number. That small number is '
          'an accurate description of the country and an accurate description '
          'of nowhere in it. The variance across localities is a finding, and '
          'it is discarded by the very operation that produces the headline.',
          'A third point concerns which effects are measured: the '
          'national literature is strongest on wages, because wages '
          'are measured continuously and well. It is far weaker on '
          'rents at the neighbourhood level, on the capacity of a '
          'particular surgery, on waiting times for a particular '
          'school. These are the channels through which a resident '
          'actually experiences a change, and they are the ones least '
          'represented in the evidence.',
          'The consequence is a dialogue with a predictable shape: a '
          'resident describes something they have observed, and a '
          'national figure is produced in reply. The resident does not '
          'accept it, because it is not about their town, and is then '
          'described as having rejected evidence. In fact they have '
          'rejected an inference from evidence about a different unit, '
          'which is a reasonable thing to do.',
          'None of this shows that local accounts are reliable; '
          'residents misattribute, remember selectively and generalise '
          'from vivid cases, exactly as everyone does. The point is '
          'narrower: a national average cannot refute a local claim, '
          'and producing one as though it could is a category error '
          'that happens to be very common among people who are '
          'otherwise careful about evidence.',
          'It is worth adding that the mismatch runs in both directions. '
          'Just as a national figure cannot settle a local question, a vivid '
          'local account cannot settle a national one, and policy made from '
          'the loudest locality is as badly founded as policy that ignores '
          'every locality. The remedy is not to prefer one unit to the other '
          'but to stop treating evidence about either as though it answered '
          'the other.',
          'What would actually help is unglamorous and specific: measurement '
          'at the level where effects are experienced, and funding that follows turnover. Where this has been tried '
          'the political temperature has fallen noticeably, which suggests '
          'that much of what is read as hostility to migration is hostility '
          'to an unfunded local pressure that nobody will acknowledge '
          'exists.',
          'That last claim should be held loosely. The places where such '
          'measures have been introduced chose to introduce them, and may '
          'differ in other ways from those that did not. The pattern is '
          'suggestive and it is not identified, which is a sentence this '
          'volume has now used about four different literatures and will use '
          'again.',
                ('One more point should be added, since it affects how the '
                 'whole argument is received. A person describing a full '
                 'surgery and a full school is reporting an observation, not a '
                 'theory, and telling them that the national data disagrees '
                 'does not address what they said. The reply they are owed is '
                 'about their town. Where that reply has been given, with '
                 'figures for the town and funding attached to them, the '
                 'argument has shifted from identity to capacity, which is a '
                 'question that can be answered.')],
         items=[
          (
           'Which paragraph explains why the national average is near '
           'zero?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'],
           1,
           'Supply and demand, movement towards work, and capital '
           'adjusting over time.',
           {0: 'Paragraph 1 states the general structure of the '
               'problem.', 2: 'Paragraph 3 describes the town of twenty thousand.', 3: 'Paragraph 4 describes a figure true of a country and '
               'of nowhere in it.'}),
          (
           'Which paragraph describes a figure true of a country and '
           'of nowhere in it?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           1,
           'Paragraph 4: averaging discards the variance across '
           'localities.',
           {0: 'Paragraph 3 describes the town of twenty thousand.', 2: 'Paragraph 5 is about which effects are measured.', 3: 'Paragraph 6 describes the shape of the dialogue.'}),
          (
           'Which paragraph concedes that local accounts are also '
           'unreliable?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'],
           2,
           'Paragraph 7: residents misattribute, remember selectively '
           'and generalise.',
           {0: 'Paragraph 5 is about which effects are measured.', 1: 'Paragraph 6 describes the shape of the dialogue.', 3: 'Paragraph 8 says the mismatch runs both ways.'}),
          (
           'The writer believes residents who reject national figures '
           'are being irrational.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 6 says they have rejected an inference about a '
           'different unit, which is reasonable.',
           {0: 'Yes would need irrationality; paragraph 6 calls their '
               'rejection reasonable.', 2: 'Not Given is wrong because the writer judges the '
               'residents\u2019 reasoning.'}),
          (
           'The writer believes the evidence on funding by turnover is '
           'conclusive.', ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph says the pattern is suggestive, and '
           'stops short of calling it identified.',
           {0: 'Yes would need conclusiveness; the final paragraph '
               'calls the pattern suggestive.', 2: 'Not Given is wrong because the strength of the '
               'evidence is stated.'}),
          ('The mechanisms producing the national figure are all '
           '____________ mechanisms.', None, 'adjustment',
           'Paragraph 2, and adjustment takes time, which is the whole '
           'argument.'),
          ('What does the writer say funding should follow instead of net '
           'change?', None, 'turnover',
           'Paragraph 8, together with measurement at the level where effects '
           'are experienced.')])],
   listen=[
    dict(heading='An economist and a councillor disagree', part='Part 4',
         task='A recorded exchange at a local inquiry · multiple choice', band='l4',
         qtype='Questions 67-72',
         script=[
          ('Chair', 'Dr Steinhauer-Okafor is an economist. Councillor '
           'Brannigan represents the ward in question.'),
          ('Steinhauer-Okafor', 'My evidence is straightforward. Across the '
           'national labour market the wage effect of migration is '
           'indistinguishable from zero. That result is about as solid as '
           'anything in applied economics.'),
          ('Brannigan', 'I do not dispute your figure and I am going to ask '
           'you to stop producing it, because it is not about my ward and '
           'everybody in this room knows that except, apparently, the people '
           'who keep quoting it.'),
          ('Steinhauer-Okafor', 'You are entitled to be impatient with that, and I want to '
           'answer it properly instead of repeating myself. The national result '
           'is produced by adjustment: firms open, capital arrives, the '
           'economy accommodates. All of those take between three and seven '
           'years. Your ward received its arrivals in eighteen months. Nothing '
           'in my finding has had time to happen there.'),
          ('Brannigan', 'Then why is it offered as a reply to me?'),
          ('Steinhauer-Okafor', 'Because it is the number that exists. We '
           'measure wages nationally and continuously. We do not measure '
           'rents on your estate, or the roll at your primary school, or how '
           'long your surgery takes to answer the telephone. My profession '
           'produces the figure it can produce and then uses it to answer '
           'questions it was not built for.'),
          ('Brannigan', 'That is the most honest thing an expert has said to '
           'this committee in four years.'),
          ('Steinhauer-Okafor', 'I would ask you to hold your own evidence to '
           'the same standard, though. You have told me three times that the '
           'school is full. The roll figures I have seen show it at eighty-six '
           'per cent of capacity.'),
          ('Brannigan', 'The reception year is full. The school is not. And '
           'you are right that I have been saying the second when I mean the '
           'first, which is exactly the kind of thing I have been complaining '
           'about you doing.'),
          ('Steinhauer-Okafor', 'And I would add the symmetrical point '
           'against myself. A vivid local account cannot settle a national '
           'question either. If this committee recommended national policy on '
           'the strength of one ward, it would be making my mistake in the '
           'opposite direction.'),
          ('Brannigan', 'Which is a sentence I would like minuted, because '
           'three of my colleagues have proposed exactly that this year.'),
          ('Steinhauer-Okafor', 'Then here is what I think we agree on. '
           'Measurement at the level where people live, and funding that follows the number of children moving, as against the number arriving net.'),
          ('Brannigan', 'Neither of us can deliver any of that, which is worth minuting too.')],
         items=[
          ('What does the councillor say about the national figure?',
           ['It is wrong', 'It is not about his ward', 'It is out of date', 'It is too small'],
           1, 'He explicitly says he does not dispute the figure.',
           {0: 'He says he does not dispute the figure.', 2: 'He does not question how current it is.', 3: 'Its size is not his objection.'}),
          ('How long does the economist say adjustment takes?',
           ['Under a year', 'One to two years', 'Three to seven years', 'A generation'],
           2, 'And the ward received its arrivals in eighteen months.',
           {0: 'Faster than the adjustment he describes.', 1: 'Still shorter than the period he names.', 3: 'Longer than the three to seven years he gives.'}),
          (
           'Why does he say the national figure gets offered in reply?',
           ['It is persuasive', 'It is the number that exists', 'It is required', 'It is cheap'],
           1,
           'Rents, school rolls and surgery waiting times are not '
           'measured.',
           {0: 'He does not claim it persuades anybody.', 2: 'No requirement obliges him to quote it.', 3: 'Cost is not his explanation.'}),
          ('What challenge does the economist put to the councillor?',
           ['His figures are invented', 'He has said the school is full when the reception year is', 'He has misread the roll', 'He has no evidence'],
           1,
           'The roll figures show the school at eighty-six per cent of '
           'capacity.',
           {0: 'He does not accuse the councillor of inventing '
               'figures.', 2: 'The roll figures are the economist\u2019s, not a '
               'misreading.', 3: 'The councillor has evidence, which is the point at '
               'issue.'}),
          ('How does the councillor respond?',
           ['He disputes it', 'He accepts it and notes the parallel', 'He changes the subject', 'He withdraws his evidence'],
           1,
           'He says it is exactly the kind of thing he has been '
           'complaining about.',
           {0: 'He accepts the correction at once.', 2: 'He answers the challenge directly.', 3: 'He refines his claim rather than withdrawing it.'}),
          ('What do they agree should be funded?',
           ['Net arrivals', 'The number of children moving', 'Language classes', 'New housing'],
           1,
           'Together with measurement at the level where people live.',
           {0: 'Net arrivals are what funding currently follows.', 2: 'Language classes are the earlier cycle\u2019s subject.', 3: 'Housing follows net change, not turnover.'})])],
   speak=dict(
    part='Part 3', focus='National policy, local effects',
    sounds=[('Nationality and place words carry stress that moves with the '
             'suffix: SPAIN but SPANish, ITaly but iTALian, JApan but '
             'japaNESE. The -ese ending always takes it.'),
            ('This unit asks you to speak about yourself in a new place, which '
             'means first-person narrative at speed. Practise the past forms '
             'with their endings audible: arrived, managed, struggled, '
             'settled.'),
            ('The phrase on my own and the phrase by myself are both single '
             'chunks. Said as three and two words they sound translated.'),
            ('Keep the stress off the pronouns unless they are the contrast: I '
             'found it difficult is neutral; I found it difficult says '
             'somebody else did not.'),
            ('Record yourself on a time you were new somewhere. Listen for '
             'pronouns you stressed by accident, because each one implies a '
             'comparison you may not have meant.')],
    intro=('The hardest turn in the unit. Try once to say what unit a claim '
           'is about.'),
    qs=['Why do national statistics often feel wrong to local people?',
        'Should local areas have a say in national policy?',
        'How should a government respond when a policy helps the country '
        'but harms a town?',
        'Can statistics ever capture how people experience a change?'],
    shape=[('answer', 'Usually because the statistic is about a different '
            'unit.'),
           ('support', 'A national average is a description of the country '
            'and of nowhere in it.'),
           ('follow-up', 'So a resident rejecting it is not rejecting '
            'evidence.'),
           ('support', 'They are rejecting an inference from one unit to '
            'another.'),
           ('follow-up', 'Which is the same mistake experts would call out '
            'in anybody else.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should governments select immigrants by skill?',
         prompt=('Write the essay you planned in cycle 4. Some countries '
                 'select immigrants according to their skills and '
                 'qualifications. Others do not. Discuss the advantages and '
                 'disadvantages of selection by skill and give your own '
                 'opinion. Write at least 250 words.'),
         model=[
          'Selection by skill is often discussed as though it were the whole '
          'of immigration policy, when it is a decision about composition alone. That distinction matters because the public '
          'concern it is usually offered to address — the pace at which a '
          'particular place changes — is a question about scale, and '
          'selection does not touch it.',
          'The advantages of selection are real where the policy is '
          'understood narrowly. A government that needs anaesthetists and '
          'gets anaesthetists has solved something, and points systems do '
          'raise the average qualification of arrivals, which improves fiscal '
          'contribution in the first years and reduces competition with '
          'workers at the bottom of the labour market, who are the group the '
          'evidence identifies as most exposed.',
          'The disadvantages begin with what a skills test can measure. '
          'Points systems score formal credentials, and formal credentials '
          'transfer badly: a qualified engineer whose certificate is '
          'recognised after fourteen months spends those months driving. The '
          'sectors with the most severe shortages in most countries — social '
          'care, agriculture, hospitality — score poorly on almost every '
          'points system in use, so the policy reliably excludes the workers '
          'it is most short of.',
          'There is also a mismatch between the policy and the complaint. If '
          'a town of twenty thousand receives two thousand people in '
          'eighteen months, its schools and housing are under pressure '
          'whatever those people’s qualifications are. Answering that concern '
          'with a change to the skill mix is answering a question that was '
          'not asked, which is a large part of why these policies satisfy '
          'nobody.',
          'My own view is that selection is a reasonable instrument for a '
          'narrow purpose and a poor substitute for the policies the public '
          'argument is actually about. I would keep a points system for '
          'identified shortages, fix recognition of qualifications so the '
          'skills admitted are usable, and attach funding to local turnover '
          'so that the places absorbing change are resourced to do it. The '
          'last of those would do more than any change to the selection '
          'criteria.'],
         notes=[
          'The essay is built on the overlap found in the cycle 4 exercise: '
          'both sides agree shortages exist, that recognition is slow and '
          'that the public debate is not really about skill. Those agreed '
          'points are used as framing, and the body paragraphs argue about '
          'what is genuinely disputed.',
          'Paragraph 3 is the strongest because it contains a specific, '
          'checkable mechanism: the sectors with the worst shortages score '
          'worst on the test. An examiner cannot verify it, but it reads as knowledge, which is what Lexical Resource '
          'rewards at this band.',
          'The conclusion ranks its own three proposals. Saying which of your '
          'recommendations matters most is a small move that makes a position sound held, where a list of three sounds assembled.'],
         model65=[
                  'Some countries select immigrants according to their '
                  'skills. I think this is reasonable, although it is '
                  'often defended for the wrong reasons.',
                  'The usual argument is economic. A country that '
                  'chooses people with skills it lacks fills vacancies '
                  'quickly, and those workers pay more tax than they '
                  'cost in services. Several countries that select '
                  'this way have strong public support for immigration '
                  'as a result.',
                  'But the economic case is weaker than it sounds. The '
                  'measured effect of immigration on average wages is '
                  'close to zero either way, so selection is not '
                  'rescuing wages. Points systems also leave shortages '
                  'in work they score poorly, such as care work, which '
                  'is essential and badly paid.',
                  'I think selection is defensible as a way of '
                  'planning services and keeping public consent, '
                  'rather than as a way of raising wages. A country '
                  'that selects should be honest that it is choosing '
                  'who arrives, not improving the economy, and should '
                  'design the system around the work it actually '
                  'needs.',
                  ],
         gap65=[
                'It reports what the wage literature measures and what '
                'it cannot, instead of reporting its headline.',
                'It explains why national averages and local '
                'experience diverge, which is why the public argument '
                'is so bitter.',
                'It names the kind of work a points system reliably '
                'misses and why.',
                ],
         criterion=[('Framing on what both sides concede',
                     'Task Response'),
                    ('A specific mechanism in the strongest body paragraph',
                     'Lexical Resource'),
                    ('Ranking your own proposals', 'Task Response')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=20)],
   gram=dict(
    point='Saying which unit a claim is about',
    explain=('Most arguments that go nowhere are arguments between claims '
             'about different units: a country and a town, an average and a '
             'person, a decade and a year. Naming the unit ends them.'),
    examples=['That is a description of the country and of nowhere in it.',
              'The finding is about national labour markets, not about this '
              'ward.',
              'The long-run equilibrium is real and the town is not living '
              'in it.',
              'They have rejected an inference about a different unit.'],
    task='Rewrite each claim so that the unit it describes is explicit.',
    items=[('Immigration has no effect on wages.',
            'Across national labour markets the average wage effect is close '
            'to zero.'),
           ('The policy worked.',
            'The policy improved outcomes nationally over ten years, which '
            'says little about any one area in its first.'),
           ('Local people are wrong about this.',
            'Local accounts conflict with a national figure, which is not the '
            'same as being wrong about the locality.'),
           ('Services are not under strain.',
            'Services are not under strain on average; particular schools and '
            'surgeries may be.'),
           ('Housing is affordable.',
            'Housing is affordable relative to median national earnings, '
            'which is not a claim about this town.')]),
   vocab=[('equilibrium', 'the state a system settles into'),
          ('variance', 'how much values differ from one another'),
          ('locality', 'a small area such as a town or ward'),
          ('capacity', 'how much a service can handle'),
          ('misattribute', 'to assign something to the wrong cause'),
          ('unit of analysis', 'the thing a figure actually describes'),
          ('composition', 'what something is made up of'),
          ('fiscal contribution', 'what a person pays in tax against what '
           'they receive')],
   expr=[('both correct and point in opposite directions',
          'describes a conflict without a mistake'),
         ('nothing in my finding has had time to happen there',
          'limits a result by the time it needs'),
         ('the number that exists', 'explains why a poor measure is used'),
         ('should be held loosely', 'marks a claim as suggestive')],
   trans=['begin with', 'now consider', 'the consequence',
          'what would actually help'],
  ),
 ],
 technique=dict(
  title='Flows in two directions: reading a net figure honestly',
  body=('A net figure is a subtraction, and a subtraction destroys '
        'information. Plus fifteen thousand can mean a sleepy region where '
        'almost nobody moved, or a region where four hundred thousand people '
        'changed places and the totals happened to balance. In Task 1 this '
        'matters for coverage: a table that gives arrivals, departures and '
        'net is giving you three columns, and an answer that reports only the '
        'third has omitted most of the data. In Reading and Listening it '
        'matters because questions are built precisely on the difference '
        'between the flow and the balance.'),
  panel=[('Report the flows', 'Give arrivals and departures, then the net. '
          'The net alone is a third of the information and the least '
          'interesting third.'),
         ('Name the turnover', 'Where a table gives it, or where you can see '
          'it, say how large the movement was relative to the balance.'),
         ('Watch the sign', 'A loss of thirty thousand is a larger change '
          'than a gain of twenty-two. Size and direction are separate '
          'features.'),
         ('Balancing is not a finding', 'In a closed system the net figures '
          'must sum to zero. Reporting that as a discovery wastes a '
          'sentence.')],
  task='Using the table in cycle 3, write the four sentences this panel asks '
       'for, and then one sentence that a reader of the net column alone '
       'would get wrong.',
  qs=['Write a sentence reporting the North using all three figures.',
      'Which region has the largest turnover relative to its net change?',
      'Which region has the largest absolute change, and in which '
      'direction?',
      'Why is the sum of the net column not worth reporting?',
      'What would somebody reading only the net column conclude about '
      'Central?']),
 outlining=dict(
  title='Two brainstorms, one overlap',
  body=('Brainstorm your position. Then brainstorm the opposite position as '
        'though you held it. Then mark everything that appears in both. The '
        'overlap is what nobody disputes, and it belongs in your framing — '
        'where it does the work of making you sound fair — leaving your body paragraphs to argue with somebody. What is left '
        'is the real disagreement, and it is almost always smaller and more '
        'specific than either list suggested.'),
  frame=('Selection by skill is a tool for a narrow purpose, not an answer to '
         'the public argument',
         [('Selection decides composition while the concern is about scale',
           ['a town absorbs the same number whatever their qualifications',
            'the policy is offered as an answer to a different question']),
          ('A points system measures what is easy to measure',
           ['credentials transfer badly and are recognised slowly',
            'the worst shortages score lowest on most systems'])]),
  task='Do both brainstorms for the cycle 4 prompt, mark the overlap, and '
       'write one sentence saying what the real disagreement is.',
  qs=['Which claims appeared in both brainstorms?',
      'Where in your essay should those claims go?',
      'What is left once the overlap is removed?',
      'Is the remaining disagreement big enough for two body paragraphs?'],
  answers=['usually that shortages exist and recognition is slow',
           'in the introduction and the framing, not the body',
           'the genuine dispute, usually about what selection can achieve',
           'if not, you have found that the question is narrower than it '
           'looked, which is worth saying']),
 candos=['I can report a net figure together with the flows behind it',
         'I can say which unit a claim describes',
         'I can distinguish an average from a distribution',
         'I can build a conditional argument that covers both branches',
         'I can find the overlap between two brainstorms and use it as '
         'framing'],
 tip=('When a table gives you a column that is the difference between two '
      'other columns, the relationship between the three is the main '
      'feature. Reporting the derived column alone is the commonest coverage '
      'failure on tables.'),
)
