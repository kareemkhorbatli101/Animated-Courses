# -*- coding: utf-8 -*-
"""Volume 5 timed Listening paper: four parts, 40 questions, about 30 min."""

LPAPER = dict(
 vol=5, level='B2+/C1', band='7.0',
 title='Listening Paper',
 intro=(
   'Four parts, forty questions, one hearing of each recording. Part 1 is a '
   'conversation about everyday arrangements, Part 2 a talk by a single '
   'speaker, Part 3 a discussion, and Part 4 a lecture. At this level the '
   'answers arrive closer together than in earlier volumes, speakers correct '
   'themselves more often, and several questions turn on a distinction drawn '
   'once and not repeated.'),
 instruct=[
  'Read the questions for each part before the recording starts. You are '
  'given the time whether you use it or not.',
  'Predict the form of each answer before you hear it: a number, a date, a '
  'name, a plural noun. Knowing what kind of thing you are waiting for is '
  'most of the work.',
  'Listen for the correction. At this level a speaker frequently gives a '
  'figure and then revises it, and the answer is the second one.',
  'If you miss one, leave it and look ahead. Chasing a missed answer costs '
  'you the two that follow it, which is the commonest way to lose six marks '
  'in ninety seconds.',
  'On the computer-delivered test there is no ten-minute transfer window: '
  'you are given two minutes to check what you have typed. Practise to that '
  'rule.'],

 parts=[

  dict(no=1, first=1, part='Part 1', band='l1',
       heading='Booking a room for a community meeting',
       task='A conversation between a caller and a village hall committee',
       qtype='Questions 1-10',
       blurb='Questions 1–10. Complete the booking form. Write ONE WORD '
             'AND/OR A NUMBER for each answer.',
       script=[
        ('Clerk', 'Thornleigh Village Hall, Wilhelmina speaking.'),
        ('Caller', 'Hello. I would like to book a room for a residents’ '
         'meeting.'),
        ('Clerk', 'Of course. Which room were you thinking of? We have the '
         'main hall and the Rushbrook Room.'),
        ('Caller', 'How many does the smaller one hold?'),
        ('Clerk', 'The Rushbrook takes forty seated. Sorry — thirty-five '
         'seated, forty standing. I always say the wrong one.'),
        ('Caller', 'Thirty-five is fine, we are expecting about thirty.'),
        ('Clerk', 'The Rushbrook then. Which date?'),
        ('Caller', 'Thursday the eleventh of March.'),
        ('Clerk', 'Evening?'),
        ('Caller', 'Seven until nine.'),
        ('Clerk', 'I will put you down from half past six so you have time '
         'to set out chairs. The charge runs from the booked time, not from '
         'when you arrive.'),
        ('Caller', 'That is helpful. What does it cost?'),
        ('Clerk', 'Fourteen pounds an hour for the Rushbrook, and there is a '
         'reduced rate of nine for registered charities and residents’ '
         'associations.'),
        ('Caller', 'We are a residents’ association but not registered '
         'anywhere.'),
        ('Clerk', 'Then it is the nine. The rate is for the type of group, '
         'not for registration, which catches people out.'),
        ('Caller', 'So two and a half hours at nine.'),
        ('Clerk', 'Twenty-two pounds fifty. Now, do you need the kitchen?'),
        ('Caller', 'Just for tea.'),
        ('Clerk', 'Then no extra charge. The kitchen is only chargeable if '
         'you use the ovens.'),
        ('Caller', 'And is there a projector?'),
        ('Clerk', 'There is, and you need to bring your own cable. People '
         'assume we have every connector and we have one, which is the old '
         'kind.'),
        ('Caller', 'I will bring an adapter. Anything about keys?'),
        ('Clerk', 'The caretaker opens up at six and locks at ten. If you '
         'need it later than ten you have to book the whole evening, which '
         'is a flat forty.'),
        ('Caller', 'Nine is fine. How do I pay?'),
        ('Clerk', 'Bank transfer within seven days of the booking, or it '
         'releases automatically. That is the one thing people do '
         'forget.'),
        ('Caller', 'Seven days. And my name is Oyelaran-Beckwith.'),
        ('Clerk', 'Could you spell the second part?'),
        ('Caller', 'B-E-C-K-W-I-T-H.'),
        ('Clerk', 'Thank you. And a telephone number?'),
        ('Caller', 'Oh double seven, four one three, two nine six '
         'eight.')],
       items=[
        ('Room booked: the ____________ Room', None, 'Rushbrook',
         'The smaller of the two, chosen for about thirty people.'),
        ('Seated capacity: ____________', None, '35',
         'The clerk corrects herself from forty, which is standing.'),
        ('Date: Thursday ____________ March', None, '11',
         'For a residents’ meeting in the evening.'),
        ('Booking starts at ____________ so chairs can be set out.',
         None, '6.30',
         'Because the charge runs from the booked time.'),
        ('Rate applied: £____________ per hour', None, '9',
         'The reduced rate, which depends on the type of group.'),
        ('Total charge: £____________', None, '22.50',
         'Two and a half hours at the reduced hourly rate.'),
        ('The kitchen is chargeable only if the ____________ are used.',
         None, 'ovens',
         'Tea alone attracts no extra charge.'),
        ('The caller must bring a ____________ for the projector.', None,
         'cable',
         'The hall holds only one connector, of the old kind.'),
        ('Payment is due within ____________ days or the booking is '
         'released.', None, 'seven',
         'By bank transfer, and the clerk says people forget this.'),
        ('Telephone: 077 413 ____________', None, '2968',
         'Given at the end of the call after the name is spelt.')]),

  dict(no=2, first=11, part='Part 2', band='l2',
       heading='A talk on a town’s flood scheme',
       task='A talk to a residents’ forum',
       qtype='Questions 11-20',
       blurb='Questions 11–20. Choose the correct letter, and complete '
             'the notes. Write ONE WORD ONLY for each answer.',
       script=[
        ('Speaker', 'Good evening. I am the engineer on the Marlbrook flood '
         'scheme, and I will cover what it does, what it does not do, and '
         'the one-in-a-hundred-year figure.'),
        ('Speaker', 'Start with that. It does not mean one flood a century. '
         'It means a one per cent chance in any given year, so over a '
         'thirty-year mortgage the chance is about twenty-six per cent. '
         'People hear the phrase and think they have had theirs.'),
        ('Speaker', 'The scheme itself has three parts and only the first is '
         'visible. A wall along Pentreath Street, eight hundred metres and '
         'an average of one metre eighty high. Upstream, two storage areas '
         'on farmland which flood deliberately and hold about four hundred '
         'thousand cubic metres between them. And third, which nobody '
         'photographs, a programme of property-level protection for '
         'forty-one houses the wall cannot reach.'),
        ('Speaker', 'It protects against a river flood. It does not protect '
         'against surface water — rain falling faster than the drains take '
         'it away — and that is what flooded sixty houses in 2019. The '
         'scheme is described locally as the answer to 2019 and would not '
         'have prevented it.'),
        ('Speaker', 'The standard is one in a hundred plus a climate change '
         'allowance of thirty-five per cent on peak flow by 2080. That '
         'allowance is the part most likely to be wrong, and wrong in a '
         'known direction: every revision since 2006 has raised it.'),
        ('Speaker', 'Cost is twenty-two million, fourteen of it national '
         'flood funding. The benefit-cost ratio came out at four point one, '
         'which is what got it funded — and a ratio is calculated from '
         'property values, so expensive areas score better.'),
        ('Speaker', 'Timetable. Clearance began in January. The wall takes '
         'eighteen months with a winter break, storage areas follow, and '
         'completion is spring 2029 — a year later than the leaflet you '
         'were sent.'),
        ('Speaker', 'Finally, the thing to take away. A defence changes the '
         'frequency of flooding, not the possibility, and the houses behind '
         'a wall are most at risk on the day it is exceeded, because '
         'everybody there has stopped expecting it. Keep your flood '
         'plan.')],
       items=[
        ('A one-in-a-hundred-year flood means',
         ['one flood each century', 'a one per cent chance in any year',
          'a flood every hundred years at most',
          'the largest flood on record'], 1,
         'Giving about a twenty-six per cent chance over thirty years.'),
        ('How many parts does the scheme have?',
         ['two', 'three', 'four', 'five'], 1,
         'A wall, upstream storage, and property-level protection.'),
        ('The 2019 flooding in the town was caused by',
         ['the river', 'surface water', 'a burst main', 'the sea'], 1,
         'Which the speaker says the scheme would not have prevented.'),
        ('The climate change allowance is described as',
         ['certainly correct', 'the part most likely to be wrong',
          'too high', 'not used in the design'], 1,
         'And wrong in a known direction, since revisions have raised '
         'it.'),
        ('What got the scheme funded was its',
         ['political support', 'benefit-cost ratio', 'low cost',
          'insurance backing'], 1,
         'Which the speaker notes favours expensive areas.'),
        ('Wall length: ____________ metres', None, '800',
         'At an average height of one metre eighty.'),
        ('Houses receiving property-level protection: ____________', None,
         '41',
         'Those the wall cannot reach, which is the part nobody '
         'photographs.'),
        ('Climate change allowance on peak flow: ____________ per cent',
         None, '35',
         'Applied to the one-in-a-hundred standard by 2080.'),
        ('Total cost: £____________ million', None, '22',
         'Of which fourteen million is national flood funding.'),
        ('Completion: spring ____________', None, '2029',
         'A year later than the leaflet sent the previous autumn.')]),

  dict(no=3, first=21, part='Part 3', band='l3',
       heading='Two students plan a dissertation study',
       task='A discussion between two postgraduate students and a '
            'supervisor',
       qtype='Questions 21-30',
       blurb='Questions 21–30. Choose the correct letter, and match each '
             'statement to the person who makes it.',
       script=[
        ('Supervisor', 'Right. You have a shared design and eleven weeks. '
         'Tell me what you are measuring.'),
        ('Perpetua', 'Whether people who are told a figure is an estimate '
         'treat it differently from people given the same figure without '
         'that word.'),
        ('Supervisor', 'Good question. Sample?'),
        ('Thaddeus', 'Two hundred. Well — we costed two hundred and the '
         'budget takes a hundred and twenty.'),
        ('Supervisor', 'Then say a hundred and twenty and plan for it. What '
         'effect size does a hundred and twenty detect?'),
        ('Perpetua', 'We had not calculated that.'),
        ('Supervisor', 'Calculate it before you recruit anybody. Half the '
         'dissertations I mark are underpowered and the student discovers it '
         'in the discussion section, which is the worst possible place to '
         'discover it.'),
        ('Thaddeus', 'And if a hundred and twenty is not enough?'),
        ('Supervisor', 'Then you change the design rather than the '
         'conclusion. A within-subject design would get you there on this '
         'question, because each person sees both framings.'),
        ('Perpetua', 'That introduces an order effect. Somebody who has seen '
         'the word estimate once is a different participant the second '
         'time.'),
        ('Supervisor', 'It does, and you counterbalance it, and the residual '
         'is smaller than the power you gain. That is the trade I would '
         'make, and I want you to write down why, because an examiner will '
         'ask.'),
        ('Thaddeus', 'I would rather keep the between-subject design and '
         'accept the lower power. It is simpler to describe and the whole '
         'thing is eleven weeks.'),
        ('Supervisor', 'That is a defensible position and it is not the one '
         'I would take. Say which of you is deciding.'),
        ('Perpetua', 'I will take the within-subject and the '
         'counterbalancing, and I will own the order effect in the '
         'limitations.'),
        ('Thaddeus', 'Then we are running two studies rather than one, and I '
         'think that is better anyway.'),
        ('Supervisor', 'It is considerably better, and now preregister both. '
         'Analysis plan published before you collect anything.'),
        ('Thaddeus', 'Is that not a lot of process for a dissertation?'),
        ('Supervisor', 'It takes an afternoon and it is the single thing '
         'that most changes how your result is read. A preregistered null '
         'result is a finding. An unregistered null result reads as a study '
         'that did not work.'),
        ('Perpetua', 'And if we find nothing?'),
        ('Supervisor', 'Then you have found that the framing does not shift '
         'behaviour at the sample size you could afford, which is worth '
         'publishing and which nobody will publish. Write it up properly '
         'anyway.')],
       items=[
        ('What are the students measuring?',
         ['how accurate estimates are',
          'whether labelling a figure an estimate changes how it is '
          'treated', 'how people calculate risk',
          'whether people trust experts'], 1,
         'The same figure given with and without the word estimate.'),
        ('The achievable sample size is',
         ['80', '120', '200', '240'], 1,
         'They costed two hundred and the budget takes fewer.'),
        ('What does the supervisor tell them to do before recruiting?',
         ['pilot the materials', 'calculate the detectable effect size',
          'apply for more funding', 'write the introduction'], 1,
         'Because underpowered studies are discovered too late.'),
        ('If the sample is too small, he says they should change',
         ['the conclusion', 'the design', 'the question',
          'the analysis'], 1,
         'Proposing a within-subject design for this question.'),
        ('Perpetua’s objection to the within-subject design concerns',
         ['cost', 'an order effect', 'recruitment', 'ethics'], 1,
         'Because a participant who has seen the word once is '
         'different.'),
        ('Who prefers the simpler between-subject design?',
         ['Perpetua', 'Thaddeus', 'the supervisor', 'nobody'], 1,
         'Accepting lower power because the project is eleven weeks.'),
        ('Who agrees to run the counterbalanced design?',
         ['Perpetua', 'Thaddeus', 'the supervisor', 'both students'], 0,
         'Owning the order effect in the limitations section.'),
        ('Preregistration means publishing the ____________ plan before '
         'collecting data.', None, 'analysis',
         'Which the supervisor says takes an afternoon.'),
        ('A preregistered null result is described as a ____________.',
         None, 'finding',
         'Whereas an unregistered one reads as a study that did not '
         'work.'),
        ('The supervisor says a null result here would be worth publishing '
         'and that nobody will ____________ it.', None, 'publish',
         'He tells them to write it up properly in any case.')]),

  dict(no=4, first=31, part='Part 4', band='l4',
       heading='A lecture on why large projects run late',
       task='A lecture on the estimation of costs and schedules',
       qtype='Questions 31-40',
       blurb='Questions 31–40. Complete the notes. Write ONE WORD ONLY '
             'for each answer, and choose the correct letter where '
             'indicated.',
       script=[
        ('Lecturer', 'Large projects run late and over budget at a rate '
         'which is not merely high but remarkably stable. Across every '
         'sector studied properly — rail, dams, defence, software, Olympic '
         'games — the pattern and the magnitude are the same, and nothing '
         'has improved measurably since the first decent dataset of the '
         '1980s. That stability is the finding.'),
        ('Lecturer', 'Here is why. If the cause were incompetence, you would '
         'expect improvement as techniques spread. If it were technology, '
         'you would expect variation between old and new sectors. If it were '
         'corruption, you would expect variation between countries. The '
         'overruns are stable across all three dimensions, so whatever is '
         'producing them is something those dimensions have in common.'),
        ('Lecturer', 'The leading explanation is a cognitive one and it has '
         'a name: the inside view. Asked to estimate a project, people '
         'decompose it into tasks, estimate each, and add them up. That '
         'procedure is intuitive, feels rigorous, and systematically '
         'understates, because it captures only the problems you can '
         'currently imagine, and the problems that wreck schedules are the '
         'ones nobody imagined.'),
        ('Lecturer', 'The repair is unglamorous and well evidenced: '
         'reference class forecasting. Ignore your project’s details, find '
         'the outcomes of the most similar class of completed projects, and '
         'take your estimate from that distribution. The evidence that your '
         'project is not special is that every project in the class believed '
         'it was.'),
        ('Lecturer', 'The objection is always the same. The class contains '
         'projects that failed for reasons we have now fixed, so it imports '
         'obsolete failures. True in principle, testable in practice, and '
         'when tested the reference class has outperformed the detailed '
         'estimate in every comparison I know of.'),
        ('Lecturer', 'There is a second mechanism which is not cognitive and '
         'which the cognitive literature tends to understate. Optimistic '
         'estimates are selected for. A project appraised honestly loses '
         'funding to one appraised optimistically, so the projects that get '
         'built are disproportionately the ones whose numbers were wrong, '
         'and nobody involved has to be lying for this to happen.'),
        ('Lecturer', 'The two mechanisms are hard to separate empirically '
         'and they have different remedies, which is why separating them '
         'matters. If the problem is cognitive, better methods help. If the '
         'problem is selection, better methods are irrelevant unless the '
         'incentive changes, because an accurate forecast simply means '
         'somebody else’s project gets approved.'),
        ('Lecturer', 'And the uncomfortable corollary nobody puts in a '
         'report. If selection is doing the work, the overruns are not a '
         'malfunction: they are the price of approving ambitious projects, '
         'and a sector with no overruns would be one that had stopped '
         'attempting difficult things. Not an argument for complacency; an '
         'argument against calling the number a scandal.'),
        ('Lecturer', 'Three things, practically. Collect the reference class '
         'before estimating anything. Publish the forecast and the outcome '
         'both, so the class grows. And when a forecast is unusually '
         'favourable, ask what would have to be true for it to hold.')],
       items=[
        ('Overruns have been stable since the first good dataset of the '
         '____________.', None, '1980s',
         'Which the lecturer calls the finding itself.'),
        ('If incompetence were the cause, the lecturer says we would '
         'expect',
         ['no pattern', 'improvement as techniques spread',
          'variation between countries', 'worse results in new '
          'sectors'], 1,
         'One of three predictions the data do not bear out.'),
        ('The leading explanation is called the ____________ view.', None,
         'inside',
         'Decomposing a project into tasks and adding the estimates up.'),
        ('That procedure understates because it captures only the problems '
         'you can ____________.', None, 'imagine',
         'And the problems that wreck schedules are the unimagined '
         'ones.'),
        ('The recommended repair is called ____________ class '
         'forecasting.', None, 'reference',
         'Taking the estimate from the outcomes of similar completed '
         'projects.'),
        ('The usual objection to it is that the reference class',
         ['is too small', 'imports failures we have since fixed',
          'is secret', 'ignores cost'], 1,
         'Which the lecturer calls true in principle and testable in '
         'practice.'),
        ('When tested against detailed estimates, the reference class has',
         ['performed worse', 'performed about the same',
          'outperformed in every comparison he knows of',
          'not been tested'], 2,
         'Which is why he treats the objection as answered.'),
        ('The second mechanism is that optimistic estimates are '
         '____________ for.', None, 'selected',
         'Because honestly appraised projects lose funding to optimistic '
         'ones.'),
        ('Separating the two mechanisms matters because',
         ['one is dishonest', 'they have different remedies',
          'only one is measurable', 'one is more common'], 1,
         'Better methods are irrelevant if the incentive is '
         'unchanged.'),
        ('If selection is doing the work, a sector with no overruns would '
         'be one that had stopped attempting ____________ things.', None,
         'difficult',
         'Which he offers as an argument against calling the number a '
         'scandal.')]),
 ],
)
