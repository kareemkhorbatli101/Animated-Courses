# -*- coding: utf-8 -*-
"""Volume 4 second timed Listening paper: four parts, 40 questions."""

LPAPER = dict(
 vol=4, level='B2', band='6.5', form='a',
 title='Listening Paper 2',
 intro=(
   'Four parts, forty questions, one hearing of each recording. Sit this '
   'paper at least a week after the first, and only once you have read '
   'the whole of the first key and the scripts at the back.'),
 instruct=[
  'Read the questions for each part before the recording starts, and '
  'read the last one first.',
  'Name the two kinds of answer you got wrong last time: spellings, '
  'plurals, numbers, or distraction.',
  'Predict the form of each answer before you hear it.',
  'If you miss one, put a dash and move on within four seconds.',
  'Spelling and plurals count, and in Part 4 the answers arrive in the '
  'order of the questions and at the speed of ordinary speech.'],

 parts=[

  dict(no=1, first=1, part='Part 1', band='l1',
       heading='Enquiring about an allotment',
       task='A telephone call to a council office · note completion',
       qtype='Questions 1-10',
       blurb='Questions 1–10. Complete the notes. Write ONE WORD '
             'AND/OR A NUMBER for each answer.',
       script=[
        ('Officer', 'Allotments office, good morning.'),
        ('Caller', 'I would like to put my name down for a plot.'),
        ('Officer', 'Which site? We have four. Kingsmead has the shortest '
         'list, about eleven months. Beechfield is three years. The other '
         'two are closed to new applications because the lists are longer '
         'than the turnover.'),
        ('Caller', 'Kingsmead, then. How big is a plot?'),
        ('Officer', 'A full plot is two hundred and fifty square metres, '
         'and I would not recommend one to begin with. Most people take a '
         'half plot, which is a hundred and twenty-five, and about a third '
         'of full plots are given up in the first two years.'),
        ('Caller', 'What is the rent?'),
        ('Officer', 'For a half plot, forty-eight pounds a year, or '
         'twenty-four if you are over sixty-five or receiving certain '
         'benefits. It runs from the first of October, and if you start '
         'mid-year we charge by the quarter.'),
        ('Caller', 'Is there water?'),
        ('Officer', 'Troughs, not taps, and the supply is turned off from '
         'November to March. There is no electricity on any of our '
         'sites.'),
        ('Caller', 'What am I not allowed to do?'),
        ('Officer', 'No trees over three metres, no bonfires between April '
         'and September, no sheds over six square metres without written '
         'permission, and no sublettting, which people do and which ends '
         'the tenancy.'),
        ('Caller', 'Is there an inspection?'),
        ('Officer', 'Twice a year, in June and September. The test is '
         'whether three quarters of the plot is in cultivation. If it is '
         'not, you get a letter, then twenty-eight days, then a second '
         'inspection.'),
        ('Caller', 'Can I keep chickens?'),
        ('Officer', 'On Kingsmead, yes, up to twelve hens and no cockerels, '
         'and you need to tell us in writing first.'),
        ('Caller', 'My name is Oluwaseun Hartley-Mbeki.'),
        ('Officer', 'Spell the second part for me.'),
        ('Caller', 'Hartley, H-A-R-T-L-E-Y, then M-B-E-K-I.'),
        ('Officer', 'You are on the list from today. I will write to you '
         'each November to ask whether you still want to be on it, and if '
         'you do not reply you come off it.')],
       items=[
        ('Site chosen: ____________', None, 'Kingsmead',
         'Because its waiting list is the shortest of the four.'),
        ('Waiting time: about ____________ months', None, 'eleven',
         'Against three years at Beechfield.'),
        ('Size of a half plot: ____________ square metres',
         None, '125', 'Half of the full two hundred and fifty.'),
        ('About a ____________ of full plots are given up in two years',
         None, 'third',
         'Which is why the officer recommends a half plot to begin '
         'with.'),
        ('Rent for a half plot: £____________ a year', None, '48',
         'Or twenty-four at the concessionary rate.'),
        ('Water supply is off from November to ____________',
         None, 'March', 'And the site has troughs rather than taps.'),
        ('No bonfires between ____________ and September', None, 'April',
         'One of four prohibitions the officer lists.'),
        ('Inspections: ____________ a year', None, 'twice',
         'In June and September, against a test of how much is in '
         'cultivation.'),
        ('Required: ____________ of the plot in cultivation',
         None, 'three quarters',
         'Otherwise a letter, twenty-eight days, and a second '
         'inspection.'),
        ('Chickens allowed: up to ____________ hens', None, 'twelve',
         'With no cockerels, and written notice first.')]),

  dict(no=2, first=11, part='Part 2', band='l2',
       heading='A talk about a museum redisplay',
       task='A talk to museum volunteers · short answer, multiple choice and note completion',
       qtype='Questions 11-20',
       blurb='Questions 11–20. Choose the correct letter, A, B or C, '
             'or write NO MORE THAN TWO WORDS for each answer.',
       script=[
        ('Curator', 'I want to explain what we are doing to the main '
         'gallery, because you will be answering questions about it for '
         'eighteen months.'),
        ('Curator', 'At present the gallery holds about nine hundred '
         'objects in forty cases, arranged by material: metalwork in one '
         'place, ceramics in another, textiles in a third. That '
         'arrangement dates from 1963 and it reflects how curators were '
         'trained rather than how anybody looks at things.'),
        ('Curator', 'The new display will hold about two hundred and '
         'eighty objects, arranged by period. That is a reduction of two '
         'thirds, and it is the change that will generate the complaints, '
         'so I want to give you the reasoning rather than the slogan.'),
        ('Curator', 'We timed visitors. The median time in the gallery '
         'is four minutes and the median number of objects actually '
         'looked at is eleven. So nine hundred objects are eleven seen '
         'and the rest competing for attention.'),
        ('Curator', 'The objects coming off display are not going away. '
         'They go into the study store, which for the first time will be '
         'open to the public, by appointment, two afternoons a week. Any '
         'object can be requested with seven days’ notice.'),
        ('Curator', 'Labels. The new ones will be at most sixty words, '
         'which is a third of the present length, and they will be at a '
         'reading age of eleven rather than fifteen. Several of you will '
         'dislike this. The evidence is consistent: a label over about '
         'eighty words is read by fewer than one visitor in ten.'),
        ('Curator', 'There will be seating, which there is not at the '
         'moment, and there will be a bench in each of the four period '
         'sections. The access audit found that the absence of seating '
         'was the single commonest reason visitors gave for leaving.'),
        ('Curator', 'The gallery closes on the ninth of January and '
         'reopens in the autumn of the following year. During the closure '
         'about sixty of the best objects go into a corridor display, so '
         'the museum is not without them.'),
        ('Curator', 'Your part is awkward. Visitors will ask where '
         'something has gone, and the honest answer is the store, on '
         'request. Say it, then offer to book the appointment '
         'yourself.')],
       items=[
        ('How many objects are on display at present?',
         None, '900', 'In forty cases, arranged by material.'),
        ('The present arrangement dates from',
         ['1963', '1983', '2003'], 0,
         'And the curator says it reflects how curators were trained.',
         {1: 'The curator gives an earlier date than this for the '
             'arrangement.', 2: 'The present arrangement is older than the 2000s.'}),
        ('How many objects will the new display hold?',
         None, '280', 'A reduction of about two thirds.'),
        ('The median time a visitor spends in the gallery is',
         ['two minutes', 'four minutes', 'eleven minutes'], 1,
         'And the median number of objects looked at is eleven.',
         {0: 'Two minutes is shorter than the median the curator '
             'reports.', 2: 'Eleven is the median number of objects, not the minutes.'}),
        ('Objects not on display will go into the ____________ store',
         None, 'study', 'Open to the public by appointment for the first '
         'time.'),
        ('Notice needed to request an object: ____________ days',
         None, 'seven', 'For one of two afternoons a week.'),
        ('New labels will be at most ____________ words', None, '60',
         'A third of the present length.'),
        ('A label over about eighty words is read by fewer than one '
         'visitor in ____________', None, 'ten',
         'Which the curator gives as consistent evidence.'),
        (
         'What did the access audit find was the commonest reason for '
         'leaving?',
         ['poor lighting', 'the absence of seating', 'the labels'], 1,
         'Hence a bench in each of the four period sections.',
         {0: 'Lighting is not what the audit found drove visitors out.', 2: 'The labels are a separate problem, not the commonest '
             'reason.'}),
        ('During the closure, about ____________ objects go into a '
         'corridor display', None, 'sixty',
         'So that the museum is not without its best pieces.')]),

  dict(no=3, first=21, part='Part 3', band='l3',
       heading='Two students discuss a pilot study',
       task='A supervision meeting · short answer, multiple choice and note completion',
       qtype='Questions 21-30',
       blurb='Questions 21–30. Choose the correct letter, A, B or C, '
             'or write NO MORE THAN TWO WORDS for each answer.',
       script=[
        ('Supervisor', 'You ran the pilot last week. Tell me what '
         'happened, starting with the thing that went wrong.'),
        ('Benedikt', 'We tested the interview schedule on six people and '
         'it took fifty minutes instead of the twenty-five we planned.'),
        ('Supervisor', 'Which is the most useful thing a pilot can tell '
         'you. Why?'),
        ('Saoirse', 'Two questions produced very long answers. The one '
         'about why people stopped attending, mainly.'),
        ('Supervisor', 'Then that is your study. You had eleven questions '
         'and one of them is the research. Cut to six and let that one '
         'run.'),
        ('Benedikt', 'We also found that two questions were understood '
         'differently by different people. The word regularly, in '
         'particular.'),
        ('Supervisor', 'Define it in the question. How often is regularly, '
         'to you?'),
        ('Saoirse', 'Once a week, I suppose, if somebody asked me to put '
         'a number on it.'),
        ('Benedikt', 'I would have said once a month.'),
        ('Supervisor', 'And there is your evidence that the word cannot be '
         'used. Put the number in the question and lose nothing.'),
        ('Saoirse', 'The recordings are a problem. Fifty minutes of audio '
         'takes about six hours to transcribe.'),
        ('Supervisor', 'Then do not transcribe all of it. Transcribe the '
         'answers to the two questions that matter and summarise the rest '
         'with timings, so you can go back. Full transcription of '
         'everything is a counsel of perfection that sinks more '
         'dissertations than bad analysis.'),
        ('Benedikt', 'How many interviews should we be aiming for in the '
         'end, then?'),
        ('Supervisor', 'For this design, between twelve and fifteen. After '
         'about twelve you will stop hearing new things, and if you are '
         'still hearing new things at fifteen that is a finding and you '
         'should say so.'),
        ('Saoirse', 'Recruiting is slow. We have seven.'),
        ('Supervisor', 'Ask each of those seven for one name. It is not a '
         'random sample and it was never going to be, and a referral '
         'chain is defensible if you describe it honestly in the '
         'methods.'),
        ('Benedikt', 'When do we need to stop collecting?'),
        ('Supervisor', 'The end of week nine. Not week eleven, whatever '
         'you are tempted to do, because the analysis is where the marks '
         'are and it takes three weeks that nobody ever budgets for.')],
       items=[
        ('How long did the pilot interview take?',
         None, '50 minutes', 'Against the twenty-five that were '
         'planned.'),
        ('How many people were in the pilot?',
         ['six', 'seven', 'eleven'], 0,
         'And the schedule had eleven questions.',
         {1: 'Seven is not the number of people in the pilot.', 2: 'Eleven is the number of questions in the schedule.'}),
        ('The supervisor says the schedule should be cut to '
         '____________ questions', None, 'six',
         'Letting the one that produced long answers run.'),
        ('Which word was understood differently by different people?',
         None, 'regularly',
         'The two students themselves give different definitions of it.'),
        ('The supervisor says the remedy is to put the ____________ in '
         'the question', None, 'number',
         'Which loses nothing and removes the ambiguity.'),
        ('How long does transcribing fifty minutes of audio take?',
         None, 'six hours',
         'Which is why the supervisor recommends partial '
         'transcription.'),
        ('Full transcription is described as',
         ['essential', 'a counsel of perfection', 'quick'], 1,
         'And one that sinks more dissertations than bad analysis.',
         {0: 'The speaker calls it the opposite of essential.', 2: 'Full transcription is described as slow, not quick.'}),
        ('How many interviews are recommended?',
         None, 'twelve to fifteen',
         'After about twelve the students should stop hearing new '
         'things.'),
        ('Still hearing new things at fifteen is itself a ____________',
         None, 'finding', 'And the students should say so.'),
        ('Data collection must stop at the end of week ____________',
         None, 'nine', 'Because the analysis takes three weeks nobody '
         'budgets for.')]),

  dict(no=4, first=31, part='Part 4', band='l4',
       heading='A lecture on why pilot projects succeed',
       task='A lecture on evaluating interventions · note completion',
       qtype='Questions 31-40',
       blurb='Questions 31–40. Complete the notes. Write NO MORE '
             'THAN TWO WORDS AND/OR A NUMBER for each answer.',
       script=[
        ('Lecturer', 'I want to explain why pilot projects almost always '
         'work and full programmes often do not, because the explanation '
         'is not that somebody is lying.'),
        ('Lecturer', 'There are four mechanisms, and they are '
         'cumulative. The first is selection. A pilot runs where somebody '
         'volunteered, and the people who volunteer to try something new '
         'are the people most likely to make it work. The programme then '
         'runs everywhere, including the places that would never have '
         'volunteered.'),
        ('Lecturer', 'The second is the quality of the staff. A pilot is '
         'often delivered by the people who designed it, or by people '
         'chosen by them, with a level of attention nobody can sustain '
         'across four hundred sites. In the literature this is sometimes '
         'called the champion effect, and estimates suggest it accounts '
         'for between a quarter and a half of the difference.'),
        ('Lecturer', 'The third is scale itself. Many interventions depend '
         'on a resource that is scarce. If a scheme requires experienced '
         'supervisors, a pilot can have the best twelve in the country '
         'and a national programme cannot, because they do not exist. '
         'Economists call this a supply constraint and it is the hardest '
         'of the four to design around.'),
        ('Lecturer', 'The fourth is measurement. A pilot is measured '
         'carefully, often by the team that ran it, and against a baseline '
         'collected for the purpose. A programme is measured by routine '
         'administrative data, which is noisier and which almost always '
         'shows a smaller effect even where the effect is identical.'),
        ('Lecturer', 'The practical consequence is a rule of thumb that '
         'has held up reasonably well: expect a full programme to deliver '
         'between a third and a half of the effect measured in its pilot. '
         'If you are planning on the pilot figure you are planning to '
         'fail, and a business case built on it will be quoted back at you '
         'for years.'),
        ('Lecturer', 'What should you do instead? Three things. Pilot in a '
         'place that did not volunteer, which is unpopular and '
         'informative. Deliver the pilot with ordinary staff rather than '
         'with the design team. And measure it with the data the programme '
         'will actually have, which means administrative records, not a '
         'purpose-built survey.'),
        ('Lecturer', 'The one case where a pilot result does transfer is '
         'worth knowing. Where the intervention is a change to a rule '
         'rather than to a practice, there is no champion effect and no '
         'supply constraint, and the pilot figure holds. Changing a '
         'default, a deadline or a form behaves very differently from '
         'changing what people do.'),
        ('Lecturer', 'That distinction, between a rule and a practice, is '
         'the most useful thing in this lecture, and it is why so many of '
         'the interventions that scale successfully look trivial on '
         'paper.')],
       items=[
        ('Number of mechanisms described: ____________', None, 'four',
         'And the lecturer says they are cumulative.'),
        ('The first mechanism is ____________', None, 'selection',
         'Pilots run where somebody volunteered.'),
        ('The staffing mechanism is called the ____________ effect',
         None, 'champion',
         'Delivery by the designers or by people they chose.'),
        ('It accounts for between a quarter and a ____________ of the '
         'difference', None, 'half',
         'According to estimates in the literature.'),
        ('A scarce resource produces a ____________ constraint',
         None, 'supply',
         'And the lecturer calls it the hardest to design around.'),
        ('A programme is measured by routine ____________ data',
         None, 'administrative',
         'Which is noisier than a purpose-built baseline.'),
        ('Rule of thumb: expect between a third and a half of the '
         '____________ effect', None, 'pilot',
         'Planning on the pilot figure is planning to fail.'),
        ('Advice: pilot in a place that did not ____________',
         None, 'volunteer',
         'Which the lecturer calls unpopular and informative.'),
        ('Advice: deliver the pilot with ____________ staff',
         None, 'ordinary', 'Rather than with the design team.'),
        ('Pilot results do transfer where the change is to a '
         '____________ rather than a practice', None, 'rule',
         'Because there is no champion effect and no supply '
         'constraint.')]),
 ])
