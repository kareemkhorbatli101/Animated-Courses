# -*- coding: utf-8 -*-
"""Foundation 1, Unit 6 - Work and Jobs.

Adverts, a first week, asking for time off, and then the two readings
that carry the unit: what automation has actually done to work, and why
the same fear returns in every generation. Volume 1's work vocabulary is
large, so this unit's share of the gap is large too.
"""

_SHIFT = dict(kind='bar',
              title='When four workers start and finish',
              sub='hours of the day, one week in May',
              cats=['Ana', 'Bilal', 'Cora', 'Dev'],
              series=[('Start', [6.0, 9.0, 14.0, 22.0]),
                      ('Finish', [14.0, 17.5, 22.0, 6.0])],
              ylab='hour of the day')

_JOBS = dict(kind='line',
             title='Share of workers in three kinds of job',
             sub='per cent of all workers, 1900 to 2020',
             x=['1900', '1930', '1960', '1990', '2020'],
             series=[('Agricultural', [41.0, 29.0, 14.0, 5.0, 2.0]),
                     ('Factory', [27.0, 33.0, 36.0, 24.0, 12.0]),
                     ('Service', [32.0, 38.0, 50.0, 71.0, 86.0])],
             ylab='per cent')

UNIT = dict(
 n=6, vol=7, level='A1-A2', band='below 4.0',
 theme='Work and Jobs',
 opener=(
   'This unit is about getting work and keeping it. You will read three '
   'job adverts and a staff handbook, ask a manager for a day off, '
   'describe when four workers start and finish, and read about what '
   'machines have done to jobs over a hundred and twenty years. The '
   'technique page is hearing the correction: what to do when a speaker '
   'gives an answer and then changes it, which is how Listening Part 1 '
   'catches people out.'),

 cycles=[
  dict(
   sub='Looking for work',
   step=1,
   read=[
    dict(heading='Three job adverts on a noticeboard',
         kind='Adverts', task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-5',
         skill=('Adverts are read for the condition, not the job',
                ['Every advert has one condition: experience, a '
                 'licence, a particular day. Find it first.',
                 'Pay and hours are the two facts every question '
                 'asks about. Underline both in all three.']),
         paras=[
          'A. Kitchen assistant, twenty hours a week, mostly evenings. '
          'Eleven pounds an hour. No experience required; training is '
          'given in the first week.',
          'B. Delivery driver, full-time. Thirteen pounds an hour and a '
          'van is provided. A clean licence held for two years is '
          'required, and the post is not open to applicants without '
          'one.',
          'C. Shop assistant, Saturdays only, nine until six. Twelve '
          'pounds an hour. Previous retail experience is desirable but '
          'not essential.'],
         items=[
          ('Which job pays the most per hour?', ['A', 'B', 'C'], 1,
           'Advert B, at thirteen pounds an hour.',
           {0: 'Advert A pays eleven pounds fifty.', 2: 'Advert C pays twelve pounds and asks for experience.'}),
          ('Which job needs no experience at all?', ['A', 'B', 'C'], 0,
           'Advert A: training is given in the first week.',
           {1: 'Advert B asks for a year in a similar job.', 2: 'Advert C asks for experience with a till.'}),
          ('How many hours a week is the kitchen job?', None, 'twenty',
           'Advert A, and the hours are mostly evenings.'),
          ('For how long must a driver have held a licence?', None,
           'two years', 'Advert B, and it must be clean.'),
          ('What time does the Saturday job finish?', None, 'six',
           'Advert C, which runs from nine in the morning.')])],
   listen=[
    dict(heading='Asking about a job', part='Part 1',
         task='A telephone call about an advert', band='l1',
         qtype='Questions 6-10',
         script=[
          ('Caller', 'I am calling about the kitchen job on the '
           'noticeboard.'),
          ('Manager', 'Yes. Have you worked in a kitchen before?'),
          ('Caller', 'Not in a kitchen. I worked in a shop for a year.'),
          ('Manager', 'That is fine. The advert says no experience '
           'required and I mean it.'),
          ('Caller', 'What are the hours exactly?'),
          ('Manager', 'Five until eleven, Wednesday to Sunday. Twenty '
           'hours, but it is twenty-four in the two weeks before '
           'Christmas.'),
          ('Caller', 'And the pay is eleven pounds?'),
          ('Manager', 'Eleven, and twelve after six months. Paid '
           'monthly, on the twenty-eighth.'),
          ('Caller', 'Is there a break?'),
          ('Manager', 'Half an hour, paid, and a meal.'),
          ('Caller', 'When would the job start?'),
          ('Manager', 'The first of next month. Could you come in on '
           'Thursday at four? Bring something with your name and '
           'address on it.'),
          ('Caller', 'Thursday at four. Who should I ask for?'),
          ('Manager', 'Ask for Ruth at the back door, not the front.')],
         items=[
          ('The hours are five until ____________.', None, 'eleven',
           'Wednesday to Sunday, the manager says.'),
          ('The pay rises to ____________ pounds after six months.',
           None, 'twelve', 'From eleven pounds at the start.'),
          ('Workers are paid on the ____________ of the month.', None,
           'twenty-eighth', 'The pay is monthly, not weekly.'),
          ('The break is ____________ an hour, and paid.', None,
           'half',
           'A paid break, and a meal is given as well.'),
          ('The caller should ask for ____________ at the back door.',
           None, 'Ruth', 'On Thursday at four, with identification.')])],
   speak=dict(
    part='Part 1', focus='Work you do or would like to do',
    intro='Say what, then why. If you do not work, talk about the work '
          'you want.',
    qs=['Do you work or are you a student?',
        'What do you do in a normal day at work?',
        'Would you like to change your job?',
        'What job would you never do?'],
    shape=[('answer', 'I work in a shop three days a week and study on '
            'the other two.'),
           ('support', 'Most of the day I am on the till, and I order '
            'the stock on Tuesdays.'),
           ('follow-up', 'I would like to manage a shop eventually, '
            'which is why I am studying.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Applying for a part-time job',
         prompt='You have seen an advert for a part-time job. Write a '
                'letter to the manager. In your letter: say which job '
                'you are applying for; say what experience you have; '
                'say when you are free to work.',
         instruct='  Write at least 80 words in about 15 minutes.',
         lines=10,
         model=[
          'Dear Sir or Madam,',
          'I am writing to apply for the kitchen assistant post '
          'advertised on the noticeboard at the library this week.',
          'I have not worked in a kitchen, but I worked for a year in a '
          'busy shop, where I was responsible for the stock and for '
          'opening on Saturdays. I am used to working quickly with '
          'other people and I am rarely ill.',
          'I am free every evening except Tuesday, and I could start '
          'from the first of next month.',
          'I would be glad to come in and meet you at any time.',
          'Yours faithfully,',
          'Lena Marek'],
         notes=['The post is named in the first sentence, with where '
                'the advert was seen.',
                'The experience paragraph does not hide the gap. It '
                'names it and then gives what is relevant instead.',
                'Availability is exact, including the exception, which '
                'saves a second letter.'],
         criterion=[('The post named in the first sentence',
                     'Task Achievement'),
                    ('Relevant experience given', 'Task Achievement'),
                    ('Exact availability', 'Task Response'),
                    ('Formal opening and closing', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='Present simple for facts about a job',
    explain='Use the present simple for what is always true of a job: '
            'hours, pay and duties.',
    examples=['The job pays eleven pounds an hour.',
              'She works Wednesday to Sunday.',
              'The shift starts at five.',
              'They provide a van.'],
    items=[('The job (pay) eleven pounds an hour.',
            'The job pays eleven pounds an hour.'),
           ('She (work) five days a week.',
            'She works five days a week.'),
           ('The shift (start) at five.', 'The shift starts at five.'),
           ('They (provide) a van.', 'They provide a van.'),
           ('He (not have) a licence.', 'He does not have a licence.')],
    task='Write each sentence in the present simple.'),
   vocab=[('held', 'past of hold: kept or owned'),
          ('period', 'a length of time'),
          ('post', 'a job or position'),
          ('rise', 'to go up'),
          ('century', 'a hundred years'),
          ('particular', 'one specific thing and not another'),
          ('afterwards', 'after that'),
          ('sharply', 'suddenly and by a large amount'),
          ('widely', 'in many places or by many people'),
          ('experience', 'what you have done and learned before'),
          ('national', 'belonging to a whole country'),
          ('total', 'the whole amount')],
   expr=[('I am calling about the job.', 'opening a call about work'),
         ('No experience is required.', 'what an advert may say'),
         ('When would the job start?', 'asking about a start date'),
         ('Who should I ask for?', 'checking before you arrive')],
   trans=['and', 'then', 'but', 'so']),

  dict(
   sub='A day at work',
   step=1,
   read=[
    dict(heading='Your first week: a staff handbook page',
         kind='Handbook', task='Note completion',
         band='gt_short', qtype='Questions 11-15',
         paras=[
          'Arrive ten minutes before your shift. The rota for the whole '
          'month is on the wall by the canteen and is put up on the '
          'twenty-fifth of the month before.',
          'If you cannot come in, telephone the supervisor before seven '
          'in the morning. A text message is not accepted, because the '
          'supervisor is not at a desk and will not see it.',
          'Breaks are taken when the supervisor says, not when the '
          'clock says. The total amount is the same for everybody: '
          'thirty minutes on a six-hour shift and an hour on a shift of '
          'nine or more.'],
         items=[
          ('Arrive ____________ minutes before your shift.', None,
           'ten', 'The first line of the handbook page.'),
          ('The rota is on the wall by the ____________.', None,
           'canteen', 'Put up on the twenty-fifth of the month '
           'before.'),
          ('Telephone the supervisor before ____________ in the '
           'morning.', None, 'seven',
           'A text message is not accepted instead.'),
          ('Who will not see a text message?', None, 'the supervisor',
           'Because the supervisor is not at a desk.'),
          ('A six-hour shift has a break of ____________ minutes.',
           None, 'thirty', 'An hour is given on nine hours or more.')])],
   listen=[
    dict(heading='Showing a new worker round', part='Part 2',
         task='One speaker explaining a workplace', band='l2',
         qtype='Questions 16-20',
         script=[
          ('Speaker', 'Welcome. I will show you round in ten minutes, '
           'and I will tell you the four things that actually matter '
           'first.'),
          ('Speaker', 'One. The rota goes up on the twenty-fifth. Check '
           'it the same day, because swaps are easy in the first week '
           'of the month and nearly impossible in the last.'),
          ('Speaker', 'Two. If you are ill, telephone before seven. Not '
           'a message, a telephone call. The supervisor is on the floor '
           'and does not look at a screen until the afternoon.'),
          ('Speaker', 'Three. Your break happens when we are quiet, not '
           'at a fixed time. New people find that uncomfortable for '
           'about a fortnight and then prefer it.'),
          ('Speaker', 'Four, and this is the one people get wrong. If '
           'you do not know how to do something, ask in the first five '
           'minutes. Nobody here minds a question. Everybody minds a '
           'job done twice.'),
          ('Speaker', 'That is it. Everything else you will pick up by '
           'watching, and you are expected to be slow for two weeks.')],
         items=[
          ('The rota goes up on the ____________.', None,
           'twenty-fifth', 'And swaps are easiest in the first week.'),
          ('If you are ill you must make a telephone ____________.',
           None, 'call', 'Not a message, the speaker insists.'),
          ('The supervisor does not look at a screen until the '
           '____________.', None, 'afternoon',
           'Because the supervisor is on the floor.'),
          ('Breaks happen when the workplace is ____________.', None,
           'quiet',
           'Rather than at a time fixed by the clock.'),
          ('New workers are expected to be slow for ____________ '
           'weeks.', None, 'two',
           'Everything else is picked up by watching.')])],
   speak=dict(
    part='Part 1', focus='A normal working day',
    intro='Take the day in order. Three sentences is the right length '
          'in Part 1.',
    qs=['What time do you start work?',
        'What do you do first?',
        'Do you work with other people?',
        'What is the best part of your day?'],
    shape=[('answer', 'I start at nine and the first thing I do is '
            'check what came in overnight.'),
           ('support', 'Most of the morning I work alone and the '
            'afternoon is meetings.'),
           ('follow-up', 'The best part is the first hour, because '
            'nobody has asked me for anything yet.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='When four workers start and finish',
         figure=_SHIFT,
         prompt='The chart shows the hours worked by four people in one '
                'week. Describe the chart and compare the shifts.',
         instruct='  Write at least 90 words in about 20 minutes.',
         lines=11,
         model=[
          'The chart shows the hour at which four workers start and '
          'finish their shifts.',
          'Three of the four work in the day. Ana starts earliest, at '
          'six in the morning, and finishes at two in the afternoon. '
          'Bilal works from nine until half past five, and Cora from '
          'two in the afternoon until ten at night.',
          'Dev is the exception. He starts at ten at night and finishes '
          'at six in the morning, so his shift runs through the night '
          'and ends as Ana’s begins.',
          'All four work about eight hours, so the difference between '
          'them is entirely a difference of timing rather than of '
          'length.'],
         notes=['The three similar cases are grouped and the exception '
                'is given its own paragraph.',
                'The link between Dev finishing and Ana starting is the '
                'kind of detail that shows the chart has been read '
                'rather than copied.',
                'The closing sentence makes the point the chart is '
                'really about.'],
         criterion=[('All four shifts described', 'Task Achievement'),
                    ('The exception identified', 'Task Response'),
                    ('A closing point about the pattern', 'Coherence '
                     'and Cohesion'),
                    ('Times written clearly', 'Grammatical Range and '
                     'Accuracy')])],
   gram=dict(
    point='Adverbs of frequency with work routines',
    explain='Put always, usually, often, sometimes and never before '
            'the main verb and after be.',
    examples=['I usually start at nine.',
              'She never works on Sunday.',
              'They often swap shifts.',
              'He is always early.'],
    items=[('I (usually) start at nine.', 'I usually start at nine.'),
           ('She (never) works on Sunday.',
            'She never works on Sunday.'),
           ('They (often) swap shifts.', 'They often swap shifts.'),
           ('He (always) is early.', 'He is always early.'),
           ('We (sometimes) finish late.',
            'We sometimes finish late.')],
    task='Put the adverb in the right place.'),
   vocab=[('application', 'a formal request for a job or place'),
          ('employment', 'the state of having paid work'),
          ('form', 'a printed paper with spaces to fill in'),
          ('argue', 'to give reasons for or against'),
          ('recent', 'happening a short time ago'),
          ('previous', 'coming before this one'),
          ('contains', 'has inside it'),
          ('decade', 'ten years'),
          ('employer', 'a person or company that pays you to work'),
          ('applicants', 'people who apply for a job'),
          ('excellent', 'very good indeed'),
          ('correct', 'right, with no mistakes')],
   expr=[('Arrive ten minutes before your shift.', 'a handbook '
          'instruction'),
         ('Ask in the first five minutes.', 'advice about a new job'),
         ('You are expected to be slow at first.',
          'reassuring a new worker'),
         ('Everybody minds a job done twice.', 'explaining a rule by '
          'its reason')],
   trans=['also', 'too', 'and', 'but']),

  dict(
   sub='Asking for time off',
   step=2,
   read=[
    dict(heading='Holiday requests: how the system works',
         kind='Notice', task='Short answer and matching',
         band='gt_work', qtype='Questions 21-25',
         skill=('A rule page is read for the number and the exception',
                ['Three numbers run through any holiday policy: how '
                 'much notice, how many at once, how many days a '
                 'year.',
                 'The exception is usually in the last paragraph, and '
                 'that is usually where the questions are.']),
         paras=[
          'Requests must be made at least four weeks before the first '
          'day you want off. A later request may still be approved if '
          'cover is available.',
          'No more than two people from one department may be away at '
          'once. Requests are approved in the order they arrive, so '
          'January for August is safe and July is not.',
          'The year runs from April. Any days not taken by the '
          'thirty-first of March are lost, and the company does not pay '
          'for them.',
          'Two periods are different. Nobody may take leave in the two '
          'weeks before Christmas unless it was booked before the end '
          'of September. In an emergency, leave is granted at once and '
          'the paperwork is done afterwards.'],
         items=[
          ('Requests must be made at least ____________ weeks '
           'beforehand.', None, 'four',
           'Paragraph 1, unless cover already exists.'),
          ('No more than ____________ people from a department may be '
           'away at once.', None, 'two',
           'Paragraph 2, and requests are taken in order.'),
          ('The holiday year runs from ____________.', None, 'April',
           'Paragraph 3, and ends on 31 March.'),
          ('Leave in the two weeks before Christmas must be booked '
           'before the end of ____________.', None, 'September',
           'Paragraph 4, the first of the two exceptions.'),
          ('In an emergency, the paperwork is done ____________.',
           None, 'afterwards',
           'Paragraph 4: leave is granted immediately.')])],
   listen=[
    dict(heading='Asking the manager for a day off', part='Part 1',
         task='A conversation at work', band='l1',
         qtype='Questions 26-30',
         script=[
          ('Worker', 'Could I ask about a day off in June?'),
          ('Manager', 'Which day?'),
          ('Worker', 'The fourteenth. It is my sister’s wedding.'),
          ('Manager', 'Let me look. Dev has the fourteenth and '
           'fifteenth already.'),
          ('Worker', 'Only one of us can be away?'),
          ('Manager', 'Two can, so that is not the problem. The problem '
           'is that the fourteenth is a Saturday and we are two people '
           'short on Saturdays in June.'),
          ('Worker', 'Could I work the Sunday instead?'),
          ('Manager', 'That would solve it. Work Sunday the fifteenth '
           'and take Saturday the fourteenth.'),
          ('Worker', 'That is fine. Do I need to fill in the form?'),
          ('Manager', 'Yes, today, because it is less than four weeks '
           'away. Write "swap agreed" on it and I will sign it.'),
          ('Worker', 'And is it one of my holiday days?'),
          ('Manager', 'No. It is a swap, so it costs you nothing. If it '
           'had been a holiday day you would have fourteen left instead '
           'of fifteen.'),
          ('Worker', 'Thank you. I will bring the form before I '
           'leave.'),
          ('Manager', 'Put it in my tray, not on the desk.')],
         items=[
          ('The worker wants the ____________ of June off.', None,
           'fourteenth', 'For a family wedding, they explain.'),
          ('The real problem is that the shop is short on '
           '____________.', None, 'Saturdays',
           'Two people short in June, the manager says.'),
          ('The worker offers to work on ____________ instead.', None,
           'Sunday', 'Which solves the problem, the manager agrees.'),
          ('The form must be filled in ____________.', None, 'today',
           'Because the date is less than four weeks away.'),
          ('The swap costs the worker ____________ holiday days.',
           None, 'no', 'A holiday day would have left fourteen.')])],
   speak=dict(
    part='Part 2', focus='Time off',
    longturn=[('I am going to talk about a time I needed time off work. I '
               'asked for two days in May.'),
              ('I needed them because my father had an operation on his knee. '
               'He lives two hours away and lives alone, so somebody '
               'had to take him to hospital and bring him home the '
               'next day.'),
              ('I asked my manager on a Monday, about three weeks before. I '
               'did not send a message. I went to her office and '
               'explained, and I said which days were quiet in our '
               'team, so she knew the work would be fine. She said yes '
               'in about a minute.'),
              ('What happened was better than I expected. The operation went '
               'well, and my father was walking a little after two '
               'days. At work a colleague did my job for those two '
               'days, and I did hers in June when her son was ill. So '
               'we helped each other. I learned that it is much better '
               'to ask early and to explain clearly. When I was '
               'younger I was afraid to ask, and that was a mistake.')],
    intro='One minute to prepare. Tell it as a story with a problem '
          'and an end.',
    qs=['Describe a time you needed time off work or school.',
        'Say why you needed it.',
        'Say how you asked.',
        'Say what happened.'],
    shape=[('answer', 'Last June I needed a Saturday off for my '
            'sister’s wedding.'),
           ('support', 'Saturday is our busiest day, so I knew it would '
            'be difficult.'),
           ('support', 'I offered to work the Sunday instead, and I '
            'asked six weeks beforehand.'),
           ('follow-up', 'It was agreed in two minutes, and I learned '
            'that bringing the solution with you is most of the '
            'battle.')]),
   write=[
    dict(task='Task 2', heading='Should workers have more holidays?',
         prompt='Some people think workers should have more days of '
                'paid holiday. Others think the present amount is '
                'enough. What do you think? Give your opinion and '
                'reasons.',
         instruct='  Write at least 130 words in about 25 minutes.',
         lines=16, wband='essay',
         plan=('Workers should have more paid holiday',
               [('Rested workers do better work',
                 ['tired workers make more mistakes, which cost money',
                  'the cost of a mistake is often larger than the day '
                  'off']),
                ('Holiday is one of the few things that cannot be '
                 'bought later',
                 ['a child is six once',
                  'money saved by working can never buy that week '
                  'back'])]),
         model=[
          'Some people believe workers should get more paid holiday and '
          'others think the present amount is enough. I believe more '
          'would be better, for two reasons.',
          'The first is practical. A tired worker makes more mistakes, '
          'and in most jobs a single serious mistake costs the employer '
          'more than a week of wages. Countries with longer holidays do '
          'not produce less for each hour worked, which suggests the '
          'rest is paid for by the work itself.',
          'The second reason is harder to measure and matters more. '
          'Time is the one thing that cannot be bought back. A child is '
          'six for a year, and the parent who works through that year '
          'cannot buy it again with the money they earned.',
          'A small company with four staff cannot always give more, and '
          'for them it is a real cost. But for most employers I believe '
          'the gain would be larger than the cost.'],
         notes=['One reason is about money and one is not, which keeps '
                'them from overlapping.',
                'The practical reason answers the obvious objection '
                'inside the paragraph.',
                'The concession names a specific case rather than '
                'saying "of course some people disagree".'],
         criterion=[('An opinion in the first paragraph', 'Task '
                     'Response'),
                    ('Two reasons of different kinds', 'Task '
                     'Response'),
                    ('A specific concession', 'Coherence and '
                     'Cohesion'),
                    ('Modal verbs used correctly', 'Grammatical Range '
                     'and Accuracy')])],
   gram=dict(
    point='can, could and may for requests',
    fix=dict(
     text=('Can I to ask you something? I need two days off in May, because my '
           'father has an operation on his knee. Could you tell me if that is '
           'possible? I know the work must be covered. May I can take the '
           'Thursday and the Friday? Those days are quiet in our team, so I '
           'think it will be all right.'),
     faults=[('Can I to ask you something?',
              'Can I ask you something?',
              ('After a modal verb such as can the next verb has no to: can '
               'ask.')),
             ('May I can take the Thursday',
              'May I take the Thursday',
              ('Two modal verbs cannot stand together. Use one, either may or '
               'can.')),
             ('take the Thursday and the Friday',
              'take Thursday and Friday',
              'Days of the week take no article when you simply name them.')]),
    explain='Can is normal, could is more polite, may is formal. The '
            'verb after them has no to.',
    examples=['Can I take Friday off?',
              'Could I ask about a day in June?',
              'May I leave an hour early?',
              'Could you sign the form?'],
    items=[('(I / take) Friday off?', 'Can I take Friday off?'),
           ('(I / ask) about a day in June?',
            'Could I ask about a day in June?'),
           ('(I / leave) an hour early?', 'May I leave an hour '
            'early?'),
           ('(you / sign) the form?', 'Could you sign the form?'),
           ('(we / swap) shifts next week?',
            'Could we swap shifts next week?')],
    task='Write each request with can, could or may.'),
   vocab=[('fifth', 'number five in an order'),
          ('fifty', 'the number 50'),
          ('skill', 'something you can do well because you learned it'),
          ('full-time', 'working the whole normal week'),
          ('repeatedly', 'again and again'),
          ('quoted', 'repeated the exact words of'),
          ('sixty-one', 'the number 61'),
          ('further', 'more, or to a greater degree'),
          ('local', 'belonging to the area near you'),
          ('manager', 'a person who runs part of a company'),
          ('invited', 'asked to come or to take part'),
          ('regular', 'happening at even times')],
   expr=[('Could I ask about a day off?', 'opening a request'),
         ('Would it help if I worked Sunday?', 'bringing a solution'),
         ('It costs you nothing.', 'explaining a swap'),
         ('Put it in my tray.', 'a specific instruction')],
   trans=['first', 'next', 'then', 'finally']),

  dict(
   sub='What machines have done to work',
   step=2,
   read=[
    dict(heading='A hundred and twenty years of work',
         kind='Short factual article',
         task='Matching information and short answer',
         band='acad', qtype='Questions 31-36',
         paras=[
          'In 1900, forty-one per cent of workers in this country were '
          'agricultural. By 2020 the figure was two per cent. Almost '
          'nobody argues that this was a disaster, and yet the same '
          'change is described as a disaster whenever it is predicted '
          'rather than remembered. That is the single most useful fact '
          'in the whole subject, and it should make everybody cautious '
          'in both directions.',
          'What happened to the agricultural workers is not that they '
          'became unemployed. Their children took jobs that did not '
          'exist in 1900, in shops, offices, hospitals and schools, '
          'and the service share of employment rose from a third to '
          'eighty-six per cent. Factory work rose first and then fell. '
          'It was thirty-six per cent in 1960 and twelve per cent in '
          '2020. That is a fall as sharp as the agricultural one and '
          'far more recent.',
          'The uncomfortable part is the timing. Jobs disappear in a '
          'decade and new kinds of job appear over a generation, and '
          'the person whose work disappears is rarely the person who '
          'gets the new job. A region can lose its factories in ten '
          'years and recover over forty, which is useless to a worker '
          'of fifty. Every honest account of automation says both '
          'things. In total it has created more work than it '
          'destroyed. For particular people in particular places it '
          'has been exactly the disaster they said it was.'],
         items=[
          ('In 1900, ____________ per cent of workers were '
           'agricultural.', None, 'forty-one',
           'Paragraph 1, against two per cent in 2020.'),
          (
           'Which paragraph explains what happened to the children of '
           'agricultural workers?',
           ['Paragraph 2', 'Paragraph 1', 'Paragraph 3'], 0,
           'They took jobs that did not exist in 1900.',
           {1: 'Paragraph 1 is about the fall in agricultural work '
               'itself.', 2: 'Paragraph 3 is about the most recent fall, in '
               'factories.'}),
          ('The service share rose to ____________ per cent.', None,
           'eighty-six', 'Paragraph 2, from about a third.'),
          ('Factory work was thirty-six per cent in ____________.',
           None, '1960', 'Paragraph 2, and twelve per cent in 2020.'),
          ('Jobs disappear in a ____________ and new ones appear over '
           'a generation.', None, 'decade',
           'Paragraph 3, which is the uncomfortable part.'),
          ('What does the writer say an honest account must do?',
           ['choose one side', 'quote the figures', 'say both things',
            'predict the next change'], 2,
           'Paragraph 3: more work in total, disaster for some.')])],
   listen=[
    dict(heading='A talk about work and machines', part='Part 4',
         task='A short lecture to first-year students', band='l4',
         qtype='Questions 37-41',
         script=[
          ('Speaker', 'I am going to give you two numbers and then one '
           'warning. In 1900, forty-one per cent of workers here were '
           'agricultural. Today it is two.'),
          ('Speaker', 'Nobody calls that a tragedy now, and yet exactly '
           'the same change, when it was predicted, was described in '
           'exactly the language used about automation today. That '
           'should make you cautious about confident predictions in '
           'either direction.'),
          ('Speaker', 'Here is what actually happened. The work did not '
           'vanish; it moved. Service employment went from about a '
           'third of all jobs to eighty-six per cent. The new jobs were '
           'not better by definition, but there were more of them.'),
          ('Speaker', 'Now the warning, and it is the part that gets '
           'left out. Those totals are true and they are no comfort to '
           'an individual. A factory region can lose its work in ten '
           'years and take forty to recover. If you are twenty-two, '
           'forty years is an abstraction. If you are fifty, it is the '
           'rest of your working life.'),
          ('Speaker', 'So when you read that automation creates more '
           'jobs than it destroys, the sentence is true, and it is also '
           'irrelevant to the person asking the question.')],
         items=[
          ('In 1900, ____________ per cent of workers were '
           'agricultural.', None, 'forty-one',
           'Today the figure is two per cent.'),
          ('Service employment rose to ____________ per cent.', None,
           'eighty-six', 'From about a third of all jobs.'),
          ('A factory region can lose its work in ____________ years.',
           None, 'ten', 'And take forty years to recover.'),
          ('For a worker of ____________, forty years is the rest of a '
           'working life.', None, 'fifty',
           'For somebody of twenty-two it is an abstraction.'),
          ('The speaker says the total figures are true and also '
           '____________ to the person asking.', None, 'irrelevant',
           'Which is the part usually left out.')])],
   speak=dict(
    part='Part 3', focus='Machines and work',
    intro='Give both sides, then your own view. A one-sided answer is '
          'an incomplete answer in Part 3.',
    qs=['Will machines take most jobs in the future?',
        'Should governments help workers whose jobs disappear?',
        'Which jobs could never be done by a machine?'],
    shape=[('answer', 'I think machines will change most jobs rather '
            'than remove them.'),
           ('support', 'That is what happened to farming: the work '
            'moved instead of vanishing.'),
           ('support', 'But the people who lose a job are usually not '
            'the people who get the new one.'),
           ('follow-up', 'So I would spend the money on retraining '
            'older workers rather than on stopping the change.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Share of workers in three kinds of job',
         figure=_JOBS,
         prompt='The graph shows the share of workers in three kinds of '
                'job between 1900 and 2020. Describe the graph and '
                'compare the three lines.',
         instruct='  Write at least 90 words in about 20 minutes.',
         lines=11,
         model=[
          'The graph shows what share of all workers was employed in '
          'agricultural, factory and service work over a hundred and '
          'twenty years.',
          'Agricultural work fell throughout, from forty-one per cent '
          'in 1900 to two per cent in 2020. Service work did the '
          'opposite, rising from thirty-two per cent to eighty-six.',
          'Factory work is the only line that changes direction. It '
          'rose from twenty-seven per cent to a peak of thirty-six in '
          '1960, and then fell to twelve by 2020.',
          'The crossing point is around 1930, when service work passed '
          'agricultural work and never fell below it again.'],
         notes=['The two simple lines are described first and the '
                'turning line afterwards, which is the clearest '
                'order.',
                'The peak is given with its year, which is what a '
                'turning point needs.',
                'The crossing point is identified, and most candidates '
                'leave it out.'],
         criterion=[('All three lines described', 'Task Achievement'),
                    ('The peak identified with its year', 'Task '
                     'Achievement'),
                    ('The crossing point mentioned', 'Task Response'),
                    ('Past tenses used throughout', 'Grammatical Range '
                     'and Accuracy')])],
   gram=dict(
    point='Past simple for finished changes',
    explain='Use the past simple with a finished time: in 1960, '
            'between 1900 and 2020, last year.',
    examples=['Agricultural work fell to two per cent.',
              'Factory work rose until 1960.',
              'Service work passed agricultural work in 1930.',
              'The region lost its factories in ten years.'],
    items=[('Agricultural work (fall) to two per cent.',
            'Agricultural work fell to two per cent.'),
           ('Factory work (rise) until 1960.',
            'Factory work rose until 1960.'),
           ('Service work (pass) the others in 1930.',
            'Service work passed the others in 1930.'),
           ('The region (lose) its factories.',
            'The region lost its factories.'),
           ('New jobs (appear) over a generation.',
            'New jobs appeared over a generation.')],
    task='Write each sentence in the past simple.'),
   vocab=[('physical', 'of the body, or of material things'),
          ('wave', 'a moving ridge of water, or a period of change'),
          ('current', 'happening now'),
          ('ability', 'being able to do something'),
          ('individual', 'one single person'),
          ('confident', 'sure that you are right'),
          ('uncomfortable', 'not comfortable, or awkward'),
          ('objection', 'a reason given against something'),
          ('region', 'a large area of a country'),
          ('relevant', 'connected with what is being discussed'),
          ('cheaper', 'costing less'),
          ('irrelevant', 'not connected with the subject')],
   expr=[('The work did not vanish; it moved.', 'correcting a common '
          'belief'),
         ('That should make you cautious.', 'drawing a lesson'),
         ('It is true and it is also irrelevant.',
          'accepting a fact while rejecting its use'),
         ('Every honest account says both things.', 'insisting on a '
          'balance')],
   trans=['after that', 'before', 'then', 'finally']),

  dict(
   sub='Why the fear keeps returning',
   step=3,
   read=[
    dict(heading='The same argument, every generation',
         kind='Short factual article',
         task='Matching information and short answer',
         band='acad', qtype='Questions 42-47',
         paras=[
          'The belief that machines are about to end work is at least '
          'two hundred years old, and it has been stated with total '
          'confidence in every decade since. The printing of books was '
          'going to destroy the work of scribes, and it did. It also '
          'created so much work that the total employed in making books '
          'rose enormously within a century. Both halves of that '
          'sentence are true, and arguments about automation nearly '
          'always quote one half.',
          'Why does the fear return? Partly because the losses are '
          'visible and the gains are not. A closed factory is a '
          'photograph. A job that was created in a company that did not '
          'exist yet cannot be photographed, and nobody can be '
          'interviewed about it. Partly, too, because the gains are '
          'spread thinly over many people and the losses fall heavily '
          'on few, and attention follows concentration.',
          'There is one genuine difference this time, and it is worth '
          'stating carefully rather than loudly. Earlier waves '
          'replaced physical work and left the judging to people. '
          'Current software is beginning to do some of the judging. '
          'Whether that is a difference of kind or merely of degree is '
          'not known. Anybody who tells you they are certain is '
          'telling you about their temperament rather than about the '
          'evidence.'],
         items=[
          ('The belief is at least ____________ hundred years old.',
           None, 'two', 'Paragraph 1, and stated confidently since.'),
          ('Printing destroyed the work of ____________.', None,
           'scribes', 'Paragraph 1, and created far more work.'),
          (
           'Which paragraph explains why losses are more visible than '
           'gains?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'], 1,
           'A closed factory is a photograph.',
           {0: 'Paragraph 1 states the figures rather than explaining '
               'them.', 2: 'Paragraph 3 is about what every honest account says.'}),
          ('Losses fall ____________ on few people.', None, 'heavily',
           'Paragraph 2, while gains are spread thinly.'),
          ('Earlier waves replaced ____________ work.', None,
           'physical', 'Paragraph 3, leaving the judging to people.'),
          ('What does the writer say about anybody who is certain?',
           ['they have read the evidence', 'they are describing their temperament', 'they are probably right', 'they work in software'],
           1,
           'Paragraph 3, the last sentence, which is about certainty '
           'itself.')])],
   listen=[
    dict(heading='Two students disagree about automation',
         part='Part 3',
         task='A discussion between two students', band='l3',
         qtype='Questions 48-52',
         script=[
          ('Tutor', 'You read the same three papers and reached '
           'different conclusions. Start with where you agree.'),
          ('Hana', 'We agree on the numbers. Total employment has risen '
           'through every previous wave of automation.'),
          ('Theo', 'Agreed. The disagreement is about whether the past '
           'tells us anything about this time.'),
          ('Tutor', 'Hana?'),
          ('Hana', 'I think it does. Every generation has believed its '
           'own change was different, and every generation has been '
           'wrong in the same way.'),
          ('Theo', 'That argument proves too much. If it were '
           'conclusive, nothing could ever be different, and sooner or '
           'later something will be.'),
          ('Hana', 'Fair. My real position is that the burden of proof '
           'is on the person claiming the break.'),
          ('Theo', 'And mine is that the thing being automated has '
           'changed. Earlier machines took the lifting. Software is '
           'taking some of the deciding.'),
          ('Tutor', 'Can you measure that?'),
          ('Theo', 'Not yet. That is the weakness of my position and I '
           'will say so in the essay.'),
          ('Hana', 'Then we write both, and we both state our own '
           'weakness. That is more interesting than agreeing.')],
         items=[
          ('They agree that total ____________ has risen through '
           'previous waves.', None, 'employment',
           'The numbers are not in dispute, Hana says.'),
          ('Hana says every generation believed its own change was '
           '____________.', None, 'different',
           'And was wrong in the same way, she argues.'),
          ('Theo says that argument proves too ____________.', None,
           'much', 'Because then nothing could ever be different.'),
          ('Hana says the burden of ____________ is on the person '
           'claiming a break.', None, 'proof',
           'Which she calls her real position.'),
          ('Theo admits his position cannot yet be ____________.',
           None, 'measured', 'He says he will admit that in the essay.')])],
   speak=dict(
    part='Part 3', focus='Work in the future',
    sounds=[('Past forms need to be heard, because they carry the time. Asked, '
             'worked and helped end with a t sound. Needed and wanted have an '
             'extra part: need-id, want-id.'),
            ('Say these six words: asked, worked, helped, needed, wanted, '
             'started. Three are short and three are longer.'),
            ('Work words have the stress at the front: MANager, COlleague, '
             'HOliday. Employer takes the second part.'),
            ('Practise one sentence: I asked my manager three weeks before. '
             'The past form must be audible.'),
            ('Record yourself talking about a working day in the past. Listen '
             'only for the ends of the verbs.')],
    intro='Say what you think, then say what would change your mind. '
          'That second part is rare and it is impressive.',
    qs=['Will people work fewer hours in the future?',
        'Is it the job of a government to protect jobs?',
        'What should schools teach for a changing job market?'],
    shape=[('answer', 'I think hours will fall slowly, as they have '
            'for a century.'),
           ('support', 'A working week was sixty hours in 1900 and is '
            'under forty now.'),
           ('support', 'What would change my mind is evidence that the '
            'fall has stopped in rich countries.'),
           ('follow-up', 'Schools should teach the thing machines are '
            'worst at, which is judging what matters.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking a former employer for a reference',
         prompt='You are applying for a job and need a reference. Write '
                'to a former employer. In your letter: say which job '
                'you are applying for; remind them when you worked for '
                'them; ask for the reference by a date.',
         instruct='  Write at least 80 words in about 15 minutes.',
         lines=10,
         model=[
          'Dear Ms Hale,',
          'I am applying for a kitchen assistant post at the Corner '
          'Cafe and I would be grateful if you could give me a '
          'reference.',
          'I worked in your shop from March 2023 until June 2024, '
          'mostly on the till and on the Saturday stock order. You may '
          'remember that I covered the two weeks in December when two '
          'people were ill.',
          'The employer has asked for references by the twentieth of '
          'this month. Their email address is on the form I have '
          'attached.',
          'Thank you for considering it.',
          'Yours sincerely,',
          'Lena Marek'],
         notes=['The request is in the first sentence, with the job '
                'named, so the reader knows what is being asked.',
                'The dates and the duties remind a busy person who you '
                'were, which is the real purpose of that paragraph.',
                'The deadline is given, with the practical detail of '
                'where to send it.'],
         criterion=[('The request and the job in the first sentence',
                     'Task Achievement'),
                    ('Dates and duties given', 'Task Achievement'),
                    ('A clear deadline', 'Task Response'),
                    ('Formal register throughout', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='Present perfect for experience',
    explain='Use have or has with the past participle for experience '
            'at no particular time.',
    examples=['I have worked in a shop.',
              'She has never used that machine.',
              'They have applied for three jobs.',
              'Have you worked nights before?'],
    items=[('I (work) in a shop before.',
            'I have worked in a shop before.'),
           ('She (never / use) that machine.',
            'She has never used that machine.'),
           ('They (apply) for three jobs.',
            'They have applied for three jobs.'),
           ('(you / work) nights before?',
            'Have you worked nights before?'),
           ('He (not / have) a full-time job yet.',
            'He has not had a full-time job yet.')],
    task='Write each sentence in the present perfect.'),
   vocab=[('agricultural', 'to do with farming'),
          ('automated', 'done by machine instead of by people'),
          ('desirable', 'wanted, but not necessary'),
          ('distinction', 'a clear difference between two things'),
          ('predictions', 'statements about what will happen'),
          ('quantity', 'how much there is'),
          ('involved', 'taking part in, or included in'),
          ('destroy', 'to ruin completely'),
          ('whom', 'the object form of who, used formally'),
          ('interview', 'a formal meeting with questions'),
          ('technology', 'machines and methods based on science'),
          ('embarrassed', 'feeling awkward about something')],
   expr=[('Both halves of that sentence are true.',
          'insisting on a whole picture'),
         ('A closed factory is a photograph.', 'explaining why '
          'attention goes one way'),
         ('The burden of proof is on...', 'naming who has to show '
          'something'),
         ('That is the weakness of my position.',
          'admitting a limit in your own argument')],
   trans=['because', 'so', 'however', 'for example'])],

 technique=dict(
  title='Hearing the correction: when the speaker changes the answer',
  body='This is the trick that costs more marks in Listening Part 1 '
       'than any other, and once you know it you will hear it every '
       'time. A speaker gives a number, a date or a name, and then '
       'changes it. "The train is at ten past three. Sorry, that is '
       'the Saturday time; on a weekday it is twenty past." The '
       'candidate who wrote "ten past three" has the wrong answer and '
       'does not know it, because they stopped listening the moment '
       'they heard a number. The test does this deliberately, and it is '
       'not unfair: in real life people correct themselves constantly. '
       'The habit to build is simple. When you hear what you think is '
       'the answer, write it in pencil and keep listening until the '
       'speaker has clearly moved on to the next topic. Listen '
       'especially for the words that signal a correction: sorry, '
       'actually, no wait, I mean, that is the old price, let me check. '
       'When you hear one of them, your pen goes straight back to the '
       'answer you have just written. A second pattern is the pair that '
       'is offered and rejected: "We have Tuesday and Thursday. Tuesday '
       'is full, so Thursday." Both days are said; only one is the '
       'answer. Write the one that survives the sentence, not the one '
       'you heard first.',
  panel=[('Write it, but keep listening',
          'The answer is the last version, not the first.'),
         ('Learn the signal words',
          'Sorry, actually, I mean, let me check, no wait.'),
         ('Offered and rejected',
          'Two dates are given; one is refused. Take the survivor.'),
         ('Only move on when the topic does',
          'The speaker leaving the subject is your signal.')],
  qs=['Did you write the first number you heard?',
      'Did the speaker correct anything?',
      'Which signal word did you hear?',
      'Were two options given and one refused?',
      'Did you keep listening until the topic changed?'],
  task='Do the five listening sections in this unit and mark every '
       'place where a speaker corrects themselves or refuses one of two '
       'options. There are at least four. Compare with the answer key.'),

 outlining=dict(
  title='Spot the unequal: a main idea that is really a detail',
  body='Unit 3 taught you to find two ideas that are secretly one. This '
       'page is about the other way a pair of ideas can be wrong: one '
       'of them is not a main idea at all, but a detail of the other, '
       'and it has been promoted because the plan needed a second '
       'paragraph. Take the question about holidays. A candidate writes '
       '"rested workers make fewer mistakes" and "tired workers are '
       'more likely to have accidents". The second is not a second '
       'idea. It is an example of the first, and the moment it becomes '
       'a paragraph the essay repeats itself with worse support. The '
       'test is to ask: if idea two were true and idea one were false, '
       'would idea two still stand? Here it would not, because the '
       'accident is a kind of mistake. Compare that with the real pair '
       'in the model: "rested workers do better work" and "time cannot '
       'be bought back". If the first were false the second would still '
       'stand, because it is about something else entirely. That is '
       'what two ideas means. When you find an unequal pair, the detail '
       'does not disappear: it goes underneath the main idea as its '
       'support, which is where it was always going to be useful.',
  frame=('Workers should have more paid holiday',
         [('Rested workers do better work',
           ['tired workers make more mistakes, including accidents',
            'the cost of one serious mistake exceeds a week of '
            'wages']),
          ('Time is the one thing that cannot be bought back',
           ['a child is six once, and only for a year',
            'the money earned that year cannot buy the year again'])]),
  qs=['If idea one were false, would idea two still stand?',
      'Is idea two an example of idea one?',
      'Are the two ideas about different things, or the same thing '
      'twice?',
      'Where should the detail go instead?',
      'What would a genuinely different second idea be?'],
  task='Write two ideas for the cycle 3 question. Test them with the '
       '"if one were false" question, and if they fail, move one '
       'underneath the other and find a new second idea.',
  answers=['a detail promoted to a paragraph repeats the first one',
           'the test is whether idea two survives idea one being '
           'false',
           'a demoted detail is still useful as support',
           'two ideas should be about different things',
           'needing a second paragraph is not a reason to have one']),

 candos=['I can compare three job adverts and find the condition in '
         'each',
         'I can ask for time off and offer a solution',
         'I can describe a graph with three lines and a turning point',
         'I can hear a speaker correct an answer and take the second '
         'one',
         'I can tell a main idea from a detail of it'],

 tip=('In Listening, the answer is the last version the speaker gives, '
      'not the first. Write in pencil and keep listening until the '
      'subject has clearly changed.'))
