# -*- coding: utf-8 -*-
"""Unit 58 - Prediction and Uncertainty. IELTS Volume 6, band 7.5."""

_SKILL = dict(kind='line',
              title='Forecast skill by lead time, three methods',
              sub='skill score 0-100 against observed rainfall, averaged '
                  'over four years',
              ylab='skill score',
              x=['6h', '12h', '24h', '48h', '72h', '120h', '168h'],
              series=[('Numerical model', [92, 89, 84, 74, 63, 44, 31]),
                      ('Statistical method', [78, 75, 71, 65, 58, 47, 38]),
                      ('Persistence', [86, 74, 55, 32, 18, 7, 3])])

UNIT = dict(
 n=58, vol=6, level='C1', band='7.5',
 theme='Prediction and Uncertainty',
 opener=(
   'Three lines that all go down, which is the hardest version of the '
   'grouping problem: when every series shares a direction, the finding is '
   'in the rates, and the method that starts highest finishes second. The '
   'argument that follows is about the two mistakes a warning system can '
   'make, only one of which anybody ever counts, and ends on the sentence '
   'that costs more forecasters their jobs than any other — "you said '
   'thirty per cent and it happened".'),

 cycles=[
  dict(
   sub='Acting on a warning',
   step=2,
   read=[
    dict(heading='Severe weather warnings — what each level means',
         kind='Public guidance',
         task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('Warning guidance is read for what the colour means about '
                'likelihood and impact',
                ['A warning level is not a measure of how bad the weather '
                 'will be. It combines how likely an impact is with how '
                 'severe it would be, and the two can trade off.',
                 'Find the sentence that says so. It explains why a red '
                 'warning can be issued for a less extreme event than an '
                 'amber one, which is the thing readers find hardest to '
                 'believe.']),
         paras=[
          'Warnings are issued at three levels. Yellow indicates that '
          'severe weather is possible and that some disruption may occur. '
          'Amber indicates an increased likelihood of impacts and that '
          'people should be prepared to change plans. Red indicates that '
          'dangerous weather is expected and that action is required.',
          'The level combines likelihood with impact and is not a measure '
          'of severity alone. A red warning may be issued for a less '
          'extreme event than an amber one where the impact would be '
          'greater: flooding of a known hospital access route is treated '
          'as a greater impact than heavier rain over open ground, and the '
          'levels reflect that.',
          'Warnings carry a lead time appropriate to the action they call '
          'for. A red warning is issued with at least twelve hours’ '
          'notice wherever possible, because the actions it requires '
          'include moving people and equipment. Yellow warnings may be '
          'issued with as little as three hours’ notice.',
          'Warnings are updated rather than replaced. A warning upgraded '
          'from amber to red retains its original reference number, and '
          'the published record shows the sequence of upgrades, so that it '
          'is possible to see afterwards what was known and when.',
          'No warning is issued for an event whose probability falls below '
          'the stated threshold for that level, even where the potential '
          'impact is extreme. The threshold for red is a twenty per cent '
          'probability of the stated impact, which many people assume is '
          'much higher and which reflects the cost of missing such an '
          'event.',
          'A warning that is issued and not followed by the forecast event '
          'is not an error. Twenty per cent means one occurrence in five, '
          'and a system issuing red warnings that were all followed by the '
          'event would be setting its threshold far too high and missing '
          'events it should have caught.'],
         items=[
          ('Amber indicates an increased likelihood of impacts and that '
           'people should be prepared to change ____________.', None,
           'plans',
           'Paragraph 1, between yellow and red.'),
          ('A red warning may be issued for a less extreme event than an '
           'amber one where', ['the area is larger', 'the impact would be '
            'greater', 'more people complain', 'the forecast is '
            'later'], 1,
           'Paragraph 2: level combines likelihood with impact.'),
          ('Red warnings are issued with at least ____________ hours’ '
           'notice where possible.', None, 'twelve',
           'Paragraph 3, because of the actions required.'),
          ('An upgraded warning retains its original ____________ '
           'number.', None, 'reference',
           'Paragraph 4, so the sequence of upgrades is visible.'),
          ('The probability threshold for a red warning is',
           ['five per cent', 'twenty per cent', 'fifty per cent',
            'eighty per cent'], 1,
           'Paragraph 5, lower than most people assume.'),
          ('A red warning not followed by the event is',
           ['an error', 'not an error', 'reported as a failure',
            'downgraded retrospectively'], 1,
           'Paragraph 6: twenty per cent means one occurrence in five.')]),
    dict(heading='What to do at each level',
         kind='Procedure notice', task='Flow-chart completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'At yellow, check the detail rather than the colour. The warning '
          'text names the hazard, the area and the window, and a yellow '
          'warning for ice on a morning you cycle is more relevant to you '
          'than a red warning for wind two counties away.',
          'At amber, decide in advance what you will do if it is upgraded. '
          'The upgrade typically arrives with less notice than the original '
          'warning, because it reflects a forecast that has firmed up, and '
          'a decision made at amber is a better decision than the same one '
          'made at red.',
          'At red, act on the instruction rather than on the weather '
          'outside your window. Red warnings are issued for areas and the '
          'hazard will not arrive everywhere at once, and the commonest '
          'reason people are caught is that conditions looked ordinary '
          'when they set out. The hazard is forecast for the area and not '
          'for your doorstep, and a quiet street at the moment of departure '
          'carries no information about the road ahead.',
          'After the event, report impacts through the online form whether '
          'or not a warning was issued. Reports of impacts without '
          'warnings are the main source of information about missed '
          'events, which the service cannot otherwise detect, and about '
          'four fifths of reports it receives are of this kind.'],
         items=[
          ('At yellow, check the ____________ rather than the colour.',
           None, 'detail',
           'Paragraph 1: hazard, area and window.'),
          ('At amber, decide in advance what to do if the warning is '
           '____________.', None, 'upgraded',
           'Paragraph 2, since the upgrade comes with less notice.'),
          ('At red, act on the instruction rather than on the '
           '____________ outside your window.', None, 'weather',
           'Paragraph 3, because conditions often look ordinary at the '
           'start.'),
          ('Reports of impacts without warnings are the main source of '
           'information about ____________ events.', None, 'missed',
           'Paragraph 4: about four fifths of reports received.')])],
   listen=[
    dict(heading='Querying a warning that was not issued', part='Part 1',
         task='A call to a weather service enquiry line', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Officer', 'Weather service enquiries, Rosalind speaking.'),
          ('Caller', 'Hello. There was flooding in our village on Tuesday '
           'and there was no warning.'),
          ('Officer', 'I am sorry to hear it. Which village?'),
          ('Caller', 'Nether Haldane.'),
          ('Officer', 'Let me look. Tuesday the eleventh?'),
          ('Caller', 'That is right.'),
          ('Officer', 'There was a yellow warning for rain covering the '
           'county from six in the morning. No amber and no red.'),
          ('Caller', 'A yellow warning is not much use.'),
          ('Officer', 'It names the hazard, the area and the window, and I '
           'accept that most people read the colour and stop. Can I ask '
           'what the impact was?'),
          ('Caller', 'Eleven properties flooded on Mill Lane.'),
          ('Officer', 'That is worth reporting formally and I will take it '
           'now. Reports of impacts are how we find out about events we '
           'missed — we cannot see them otherwise, and about four fifths '
           'of what we receive is exactly this.'),
          ('Caller', 'So you did not know it had happened?'),
          ('Officer', 'Not until somebody tells us, no. It is the part of '
           'the system people least expect.'),
          ('Caller', 'Should there have been an amber?'),
          ('Officer', 'That is a question for the review rather than for '
           'me, and I will log it as one. The reviewers look at whether '
           'the probability of the stated impact reached the threshold on '
           'the information available at the time.'),
          ('Caller', 'Not on what actually happened?'),
          ('Officer', 'Not on what actually happened, and that is the part '
           'people find hardest. A warning can be correct and the event '
           'can still occur, and it can be wrong even though nothing '
           'happened.'),
          ('Caller', 'How long does the review take?'),
          ('Officer', 'Twenty-eight days, and you get the finding in '
           'writing whichever way it goes.'),
          ('Caller', 'Is there a reference?'),
          ('Officer', 'W as in warning, three one five two. And can I take '
           'the number of properties again for the impact report?'),
          ('Caller', 'Eleven.')],
         items=[
          ('Village affected: Nether ____________', None, 'Haldane',
           'Given at the start of the call.'),
          ('Warning in force: ____________ for rain, from 6am', None,
           'yellow',
           'Covering the county, with no amber or red.'),
          ('Properties flooded: ____________', None, 'eleven',
           'On Mill Lane, confirmed twice in the call.'),
          ('Reports of impacts are how the service learns about '
           '____________ events.', None, 'missed',
           'About four fifths of what it receives.'),
          ('The review considers the information available at the '
           '____________.', None, 'time',
           'Rather than what actually happened.'),
          ('Reference number: W-____________', None, '3152',
           'Given near the end of the call.')])],
   speak=dict(
    part='Part 1', focus='Weather and warnings',
    intro=('Two or three sentences each. A real occasion beats a general '
           'comment.'),
    qs=['Do you check the weather forecast?',
        'Have you ever changed plans because of a forecast?',
        'Are weather warnings common where you live?',
        'Do people take them seriously?'],
    shape=[('answer', 'Every morning, and only the next twelve hours.'),
           ('support', 'We had an amber warning for wind last October and '
            'I cancelled a drive.'),
           ('follow-up', 'Nothing happened, and I still think cancelling '
            'was right, which took me a while to be comfortable '
            'with.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking why a warning was not issued',
         prompt=('Severe weather affected your area and no warning was '
                 'issued. Write a letter to the weather service. In your '
                 'letter: say what happened; ask why no warning was '
                 'issued; say what you would like done. Write at least 150 '
                 'words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing about flooding at Nether Haldane on Tuesday 11 '
          'November, reference W-3152, and about the warnings in force '
          'that day.',
          'Eleven properties on Mill Lane flooded internally between '
          '10am and noon, with depths reported from 150 to 400 '
          'millimetres. A yellow warning for rain covering the county was '
          'in force from 6am. No amber or red warning was issued at any '
          'point.',
          'No warning was issued at amber, although the stated threshold '
          'appears to have been met: your published criteria set amber at '
          'a ten per cent probability of significant property flooding, '
          'and the rainfall recorded at the Haldane gauge between 8am and '
          '11am was within the range your own guidance associates with '
          'that outcome in this catchment. I appreciate that the question '
          'is what was forecast rather than what fell, and I am asking '
          'whether the forecast at 6am supported the threshold.',
          'I would ask for two things: a review of the warning decision '
          'under your twenty-eight day procedure, and confirmation that '
          'the eleven impacts I have reported have been recorded, since I '
          'understand these are your principal source of information about '
          'events you did not catch.',
          'Yours faithfully,',
          'E. Haldane-Oduya'],
         notes=[
          'The letter separates what happened from what was forecast, and '
          'says so explicitly. A complaint that argues from the outturn '
          'invites the reply that forecasts are probabilistic; this one '
          'has already conceded the point and asked the right '
          'question.',
          'The threshold is quoted from the service’s own criteria. '
          'Arguing inside somebody’s published framework is the single '
          'most effective move available in a letter of this kind.',
          'The second request is for something the service wants — '
          'impact reports — which makes the letter useful to the reader '
          'as well as to the writer, and makes a cooperative reply much '
          'more likely.'],
         criterion=[('Separating what happened from what was forecast',
                     'Task Response'),
                    ('Quoting the reader’s own published threshold',
                     'Task Achievement'),
                    ('Asking for something the reader also wants',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Enquiry about a decision made under uncertainty',
    explain=('Writing about a decision taken before the outcome was known '
             'requires keeping forecast and outturn apart. These patterns '
             'do that, which is what makes such a letter answerable.'),
    examples=['No warning was issued, although the stated threshold '
              'appears to have been met.',
              'I appreciate that the question is what was forecast rather '
              'than what fell.',
              'I am asking whether the forecast at 6am supported the '
              'threshold.',
              'A warning can be correct and the event still occur.'],
    task='Rewrite each complaint so that forecast and outcome stay '
         'separate.',
    items=[('You should have warned us; it flooded.',
            'I am asking whether the forecast available at 6am met your '
            'published amber threshold.'),
           ('The forecast was wrong.',
            'The event occurred, which does not by itself establish that '
            'the forecast was in error.'),
           ('Nothing happened, so the warning was unnecessary.',
            'The warning was issued at a twenty per cent threshold, under '
            'which four occasions in five pass without the event.'),
           ('You missed it.',
            'No warning above yellow was issued, and I am asking what '
            'probability was assigned at the time.'),
           ('Your thresholds are too high.',
            'I would ask whether the amber threshold of ten per cent was '
            'reached on the information then available.')]),
   vocab=[('lead time', 'how far ahead a warning is issued'),
          ('issue a warning', 'to publish a formal alert'),
          ('impact', 'the consequence a hazard would have'),
          ('upgrade', 'to raise a warning to a higher level'),
          ('amber', 'the middle warning level'),
          ('red warning', 'the highest level, requiring action'),
          ('river basin', 'the area draining into one watercourse'),
          ('gauge', 'an instrument recording rainfall or level')],
   expr=[('No warning was issued, although the stated threshold appears to '
          'have been met', 'the core sentence of a warning enquiry'),
         ('the question is what was forecast rather than what fell',
          'concedes the right point in advance'),
         ('a warning can be correct and the event still occur',
          'separates a decision from its outcome'),
         ('reports of impacts are how we find out about events we missed',
          'explains why a complaint is useful')],
   trans=['furthermore', 'in this connection', 'I appreciate that',
          'I would ask for'],
  ),

  dict(
   sub='Living with a forecast',
   step=4,
   read=[
    dict(heading='Four people on acting before they knew',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Perpetua, who runs a ferry: I cancel on an amber warning and '
          'I am wrong about four times in five, by which I mean the '
          'crossing would have been fine. I have had two angry seasons of '
          'that and one afternoon in 2019 that justified every cancellation '
          'I have ever made. The arithmetic is not close and it does not '
          'feel like arithmetic at the time.',
          'B  Casimir, farming: I act on the three-day forecast and ignore '
          'the seven-day, and that is not scepticism about the seven-day. '
          'It is that nothing I can do in response to a seven-day forecast '
          'is cheap enough to be worth doing at the confidence it carries. '
          'The forecast improves every year and my cut-off has not '
          'moved.',
          'C  Thaddeus, a council emergency planner: My difficulty is that '
          'every unnecessary evacuation is on the front page and every '
          'avoided disaster is invisible. I cannot point at the people who '
          'did not drown. So my successes are unobservable and my failures '
          'are photographed, and I would ask anybody designing an incentive '
          'scheme to sit with that for a minute.',
          'D  Winifred, who writes the warnings: I have stopped defending '
          'the false alarm rate and started publishing it. Twenty per cent '
          'of red warnings are followed by the event, and that is the '
          'threshold working rather than failing. Saying so in advance is '
          'the only thing that has ever reduced the complaints, and it '
          'took eleven years to get it into the guidance.'],
         items=[
          ('Which person says the arithmetic does not feel like arithmetic '
           'at the time?', ['Perpetua', 'Casimir', 'Thaddeus',
            'Winifred'], 0,
           'After two angry seasons and one justifying afternoon.'),
          ('Which person ignores a longer forecast for reasons about cost '
           'rather than accuracy?',
           ['Perpetua', 'Casimir', 'Thaddeus', 'Winifred'], 1,
           'Nothing cheap enough to be worth doing at that confidence.'),
          ('Which person describes successes that cannot be observed?',
           ['Perpetua', 'Casimir', 'Thaddeus', 'Winifred'], 2,
           'Unable to point at the people who did not drown.'),
          ('Which person publishes the false alarm rate rather than '
           'defending it?',
           ['Perpetua', 'Casimir', 'Thaddeus', 'Winifred'], 3,
           'Which took eleven years to get into the guidance.'),
          ('Casimir believes the seven-day forecast is unreliable.',
           ['Yes', 'No', 'Not Given'], 1,
           'He says his reason is about the cost of acting, not about '
           'scepticism.'),
          ('Winifred regards the twenty per cent figure as a failure of '
           'the system.', ['Yes', 'No', 'Not Given'], 1,
           'She calls it the threshold working rather than failing.')])],
   listen=[
    dict(heading='A short talk: living with a forecast', part='Part 2',
         task='A talk to emergency planners', band='l2',
         qtype='Questions 23-26',
         script=[
          ('Speaker', 'Any warning system makes two kinds of mistake, and '
           'everything difficult about this job comes from the fact that '
           'only one of them is ever counted.'),
          ('Speaker', 'Mistake one: you warn and nothing happens. Visible, '
           'expensive, on the front page, and somebody writes to their '
           'councillor. Mistake two: you do not warn and something happens. '
           'Also visible, and far worse, and much rarer. Notice that both '
           'of those are things somebody can point at afterwards.'),
          ('Speaker', 'But there is a third thing that is not a mistake and '
           'that nobody can see at all: you warn, people act, and the event '
           'happens but hurts nobody. That is the system working perfectly '
           'and it is indistinguishable, from outside, from mistake '
           'one.'),
          ('Speaker', 'Which gives you the asymmetry that shapes this whole '
           'profession. Each missed event is visible and each unnecessary '
           'warning is visible and every avoided disaster is invisible. You '
           'cannot photograph the people who did not drown. So an official '
           'optimising for how their performance looks will warn too '
           'rarely, and an official optimising for outcomes will warn too '
           'often, and only the first of those feels defensible in a '
           'meeting.'),
          ('Speaker', 'The one intervention that has reliably helped is '
           'publishing the false alarm rate in advance. Say, before the '
           'season, that one red warning in five will be followed by the '
           'event. The complaints do not vanish and they change character: '
           'people stop writing to say you were wrong and start writing to '
           'ask whether the threshold is right, which is a conversation '
           'worth having.'),
          ('Speaker', 'And it took one service eleven years to get that '
           'sentence into its published guidance, which tells you something '
           'about how organisations under criticism behave.'),
          ('Speaker', 'So if you take one thing away: the number you are '
           'judged on is not the number you are trying to improve, and the '
           'only honest response to that is to publish the gap rather than '
           'to close it by warning less.')],
         items=[
          ('The difficulty of the job, he says, comes from the fact that',
           ['both mistakes are costly', 'only one kind of mistake is '
            'counted', 'forecasts are poor', 'the public does not '
            'listen'], 1,
           'Of the two kinds any warning system makes.'),
          ('The thing nobody can see at all is',
           ['a missed event', 'an unnecessary warning',
            'a warning that worked', 'a late warning'], 2,
           'Indistinguishable from a false alarm from outside.'),
          ('An official optimising for how their performance looks will',
           ['warn too often', 'warn too rarely', 'warn correctly',
            'avoid deciding'], 1,
           'While one optimising for outcomes will warn too often.'),
          ('Publishing the false alarm rate changes complaints from saying '
           'you were wrong to asking whether the',
           ['forecast was accurate', 'threshold is right', 'warning was '
            'timely', 'area was correct'], 1,
           'Which he calls a conversation worth having.')]),
    dict(heading='Two officers disagree about false alarms', part='Part 3',
         task='A discussion between two emergency officers', band='l3',
         qtype='Questions 27-32',
         script=[
          ('Thaddeus', 'I am going to propose we raise the evacuation '
           'threshold and I know how that sounds.'),
          ('Marguerite', 'It sounds like you want fewer front pages. Say '
           'the real reason.'),
          ('Thaddeus', 'That is part of it and I will not pretend '
           'otherwise. The substantive reason is compliance. We evacuated '
           'four times last winter and nothing happened four times, and on '
           'the fifth occasion about a third of the street stayed '
           'put.'),
          ('Marguerite', 'That is the strongest argument available and it '
           'is not an argument about thresholds.'),
          ('Thaddeus', 'Go on.'),
          ('Marguerite', 'Compliance fell because people inferred that we '
           'cry wolf. They inferred it because nobody told them the base '
           'rate. If you say in advance that four in five evacuations will '
           'look unnecessary, the fifth one does not feel like evidence '
           'that you were wrong four times.'),
          ('Thaddeus', 'You think telling people the rate in advance holds '
           'compliance?'),
          ('Marguerite', 'I think it is the only thing with evidence behind '
           'it. One service published its rate before the season and '
           'compliance held at eighty per cent across six warnings, three '
           'of which were false alarms.'),
          ('Thaddeus', 'One service, one season.'),
          ('Marguerite', 'One service, one season, and it is more evidence '
           'than exists for raising the threshold, which has never been '
           'evaluated anywhere I can find.'),
          ('Thaddeus', 'That lands, and I want to put the other half. '
           'Raising the threshold has a cost we can quantify and your '
           'proposal has one we cannot. If I raise it, I can tell you '
           'roughly how many more events I will miss. If I publish the rate '
           'and compliance still falls, I find out afterwards.'),
          ('Marguerite', 'Which is true, and the way to answer it is to '
           'measure compliance this season rather than argue about it, '
           'because every month we spend arguing is a month in which '
           'whichever of us is wrong is still wrong.'),
          ('Thaddeus', 'And if compliance has already fallen, your '
           'measurement tells me that and does not recover it.'),
          ('Marguerite', 'Then we will know how far it has fallen, which '
           'is the number neither of us has, and we are both arguing '
           'from one street and one Tuesday.'),
          ('Thaddeus', 'That is fair. Door-to-door after each warning?'),
          ('Marguerite', 'A sample of forty households, twenty minutes '
           'each, within a week. Three hundred pounds and a Saturday, and '
           'it settles an argument we have been having since I '
           'arrived.')],
         items=[
          ('Thaddeus’s substantive reason for raising the threshold is',
           ['cost', 'falling compliance', 'staff shortages',
            'political pressure'], 1,
           'A third of the street staying put on the fifth occasion.'),
          ('Marguerite says compliance fell because people were not told',
           ['the forecast', 'the base rate', 'the cost', 'the '
            'area'], 1,
           'And so inferred that the service cries wolf.'),
          ('Her evidence is one service whose compliance held at',
           ['sixty per cent', 'eighty per cent', 'ninety per cent',
            'full compliance'], 1,
           'Across six warnings, three of them false alarms.'),
          ('She answers "one service, one season" by saying it is more '
           'evidence than exists for',
           ['publishing rates', 'raising the threshold', 'door-to-door '
            'surveys', 'evacuation'], 1,
           'Which she says has never been evaluated.'),
          ('Thaddeus’s remaining objection is that his option has a cost '
           'that is', ['smaller', 'quantifiable in advance',
            'political', 'temporary'], 1,
           'While hers is discovered afterwards.'),
          ('Their agreed next step is to',
           ['raise the threshold', 'measure compliance this season',
            'publish the rate', 'consult the public'], 1,
           'Using a sample of forty households.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Acting in advance',
    intro=('Short answers, then the long turn. The explanation bullet is '
           'where the band is decided.'),
    cue=('Describe a time you acted on a warning or a prediction.',
         ['what the warning was', 'what you did',
          'what actually happened',
          'and explain whether you think you were right to act']),
    qs=['Do you plan ahead or deal with things as they come?',
        'Have you ever prepared for something that did not happen?',
        'Now look at the card. You have one minute to make notes.',
        'Is it worth preparing for unlikely events?'],
    shape=[('answer', 'An amber wind warning that made me cancel a '
            'drive.'),
           ('support', 'I rearranged two days of work around it.'),
           ('follow-up', 'The wind was unremarkable and nothing '
            'happened.'),
           ('support', 'I still think cancelling was right.'),
           ('follow-up', 'Because the question is what I knew that '
            'morning, not what the afternoon turned out to be.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Warn too often or too rarely?',
         prompt=('Warning systems must choose between issuing warnings '
                 'that often prove unnecessary and issuing fewer warnings '
                 'and missing some events. Discuss both approaches and '
                 'give your own opinion. Write at least 250 words.'),
         model=[
          'The choice is usually presented as a trade-off between two '
          'errors and is better understood as a trade-off between two '
          'errors that are not equally visible, which is why systems drift '
          'in one direction without anybody deciding that they should.',
          'The case for warning rarely is about credibility rather than '
          'cost. A service whose warnings are frequently followed by '
          'nothing teaches its public that warnings can be ignored, and a '
          'system nobody acts on protects nobody however accurate it is. '
          'One emergency service evacuated four times in a winter without '
          'incident and found a third of a street declining to leave on '
          'the fifth occasion, which is the mechanism working exactly as '
          'the argument describes.',
          'The case for warning often rests on the asymmetry of the two '
          'errors. A missed event kills people; an unnecessary warning '
          'costs a wasted day. If the ratio is anything like that, the '
          'threshold should be set low, and the published thresholds of '
          'most services reflect this: a red warning at a twenty per cent '
          'probability means four such warnings in five will be followed '
          'by nothing, and this is the system working rather than '
          'failing.',
          'What is missing from both cases is the third outcome, which is '
          'invisible and is the one that matters. A warning is issued, '
          'people act, the event occurs and nobody is hurt. From outside, '
          'that is indistinguishable from a false alarm, and it is counted '
          'as one. An official cannot point at the people who did not '
          'drown, so successes are unobservable while both kinds of '
          'failure are photographed.',
          'My position is that the real decision is not about the '
          'threshold at all. The credibility problem is caused by an '
          'expectation the service created by never stating its false '
          'alarm rate, and it is cheaper to fix the expectation than the '
          'threshold. Publish the rate before the season: one warning in '
          'five will be followed by the event. The one service that has '
          'done this held compliance at eighty per cent across six '
          'warnings, three of which proved unnecessary — which is a '
          'single season and more evidence than exists for raising '
          'thresholds, an intervention that appears never to have been '
          'evaluated at all.'],
         notes=[
          'The opening reframes a trade-off between two errors as a '
          'trade-off between two visibilities. Structure 6 at this level '
          'is strongest when the choice is re-described before it is '
          'made.',
          'Paragraph 4 introduces the outcome neither side counts, and the '
          'sentence "an official cannot point at the people who did not '
          'drown" does more than any amount of abstract argument about '
          'counterfactuals.',
          'The conclusion refuses the choice the question offered and '
          'proposes something cheaper, then ends by comparing the evidence '
          'for each option. Noting that the rival intervention has never '
          'been evaluated is a quiet and devastating last clause.'],
         criterion=[('Reframing the trade-off before choosing',
                     'Task Response'),
                    ('Introducing the outcome neither side counts',
                     'Task Response'),
                    ('Comparing the evidence behind each option',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Two kinds of error and their visibility',
    explain=('Writing about false alarms and missed events requires '
             'language that names which error is in question and who can '
             'see it. These patterns do both.'),
    examples=['Each missed event is visible and each avoided disaster is '
              'not.',
              'Four warnings in five will be followed by nothing, which is '
              'the threshold working.',
              'A warning that is issued and not followed by the event is '
              'not an error.',
              'Successes are unobservable and failures are photographed.'],
    task='Rewrite each sentence so that the kind of error is named.',
    items=[('The warning was wrong.',
            'The warning was issued and the event did not follow, which is '
            'expected in four cases out of five at this threshold.'),
           ('They should have warned us.',
            'No warning was issued and the event occurred, which is the '
            'error the threshold is set low to avoid.'),
           ('The system works well.',
            'Most warnings are followed by action and no injury, an '
            'outcome that cannot be distinguished from a false alarm.'),
           ('People have stopped listening.',
            'Compliance fell after four consecutive warnings not followed '
            'by the event.'),
           ('We cannot measure success here.',
            'An avoided disaster leaves no record, so the successes of a '
            'warning system are systematically uncounted.')]),
   vocab=[('false alarm', 'a warning not followed by the event'),
          ('false negative', 'an event that occurred without a warning'),
          ('cry wolf', 'to lose credibility through repeated warnings'),
          ('compliance', 'the proportion of people who act on a '
           'warning'),
          ('trigger level', 'the probability at which a warning is issued'),
          ('precautionary action', 'acting before an event is certain'),
          ('lopsidedness', 'two things being unequal in weight or '
           'visibility'),
          ('unobservable', 'leaving no evidence that can be seen')],
   expr=[('Each missed event is visible and each unnecessary warning is '
          'not', 'states the asymmetry this cycle is about'),
         ('you cannot photograph the people who did not drown',
          'names an uncountable success'),
         ('that is the threshold working rather than failing',
          'reinterprets a false alarm rate'),
         ('people stop writing to say you were wrong and start asking '
          'whether the threshold is right',
          'describes a better conversation')],
   trans=['whereas', 'that said', 'what is missing from both cases',
          'the case for'],
  ),

  dict(
   sub='How good is a forecast',
   step=5,
   read=[
    dict(heading='Three ways of scoring a prediction',
         kind='Data article',
         task='Matching information and table completion',
         band='gt_work', qtype='Questions 33-38',
         figure=_SKILL,
         paras=[
          'The graph shows forecast skill against lead time for three '
          'methods of predicting rainfall, scored from 0 to 100 against '
          'what was subsequently observed and averaged over four years. '
          'All three decline as the forecast reaches further ahead, which '
          'is expected, and the interest lies entirely in how fast each '
          'one falls.',
          'Persistence is the simplest method and consists of forecasting '
          'that tomorrow will resemble today. It begins respectably at 86 '
          'for six hours, which surprises people, and collapses: 55 at '
          'twenty-four hours, 18 at seventy-two, and 3 at a week. Its '
          'decline is the steepest of the three throughout.',
          'The numerical model begins highest at 92 and declines steadily '
          'rather than sharply, reaching 74 at forty-eight hours and 31 at '
          'a week. It is the best method at every lead time up to five '
          'days and is overtaken thereafter.',
          'The statistical method begins lowest of the three at 78 and '
          'declines most gently, reaching 65 at forty-eight hours and 38 at '
          'a week. It crosses the numerical model between five and seven '
          'days, and is the best available method beyond that point.',
          'The crossing is the finding and it is easy to miss. A reader '
          'comparing starting values would conclude that the numerical '
          'model is the better method, which is true for the first five '
          'days and false for the period that matters most to anybody '
          'planning a week ahead.',
          'The explanation given in the literature is about what each '
          'method relies on. Numerical models depend on the current state '
          'of the atmosphere, which is known accurately now and whose '
          'influence decays. Statistical methods rely on relationships '
          'between large-scale patterns and local outcomes, which are '
          'weaker at short range and do not decay in the same way.',
          'One practical consequence follows for anybody reading forecast '
          'comparisons. A single headline figure for forecast skill is '
          'almost meaningless unless the lead time is stated, and a '
          'comparison between two methods at one lead time tells you '
          'nothing about their ranking at another. The question is always '
          'which method at which range.'],
         items=[
          ('Which paragraph identifies the crossing as the finding?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'True for the first five days and false thereafter.'),
          ('Which paragraph explains what each method relies on?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
            'Paragraph 7'], 2,
           'The current atmospheric state against large-scale '
           'patterns.'),
          ('Which paragraph warns about headline skill figures?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 4'], 2,
           'A figure is meaningless unless the lead time is stated.'),
          ('Persistence scores ____________ at seventy-two hours.', None,
           '18', 'Paragraph 2, down from 86 at six hours.'),
          ('The numerical model reaches ____________ at a week.', None,
           '31', 'Paragraph 3, having begun highest at 92.'),
          ('The statistical method is the best available beyond '
           '____________ days.', None, 'five',
           'Paragraph 4, where it crosses the numerical model.')])],
   listen=[
    dict(heading='A forecaster on verification', part='Part 4',
         task='A lecture on scoring forecasts', band='l4',
         qtype='Questions 39-44',
         figure=_SKILL,
         script=[
          ('Forecaster', 'Three lines, all going down. That is the '
           'difficulty with this chart and it is why I set it: when '
           'everything shares a direction, the direction is not the '
           'finding, and a description that says "all three decline" has '
           'told you nothing you could not have guessed.'),
          ('Forecaster', 'Start with persistence, which is the method of '
           'saying tomorrow will be like today. Eighty-six at six hours. '
           'People find that shocking and it should not be: over six hours '
           'the weather mostly is like it was. Then fifty-five at a day, '
           'eighteen at three days, three at a week. It falls off a '
           'cliff.'),
          ('Forecaster', 'The numerical model starts highest at '
           'ninety-two, and falls steadily rather than steeply. '
           'Seventy-four at two days. Thirty-one at a week. Best method at '
           'every range up to about five days.'),
          ('Forecaster', 'The statistical method starts lowest of the '
           'three, at seventy-eight, and declines most gently of all. '
           'Sixty-five at two days, thirty-eight at a week. And somewhere '
           'between five and seven days it crosses the numerical model and '
           'becomes the best thing available.'),
          ('Forecaster', 'That crossing is the whole chart. A reader who '
           'compares the starting values concludes the numerical model '
           'wins, and they are right for five days and wrong for the '
           'horizon most people actually plan on.'),
          ('Forecaster', 'The reason is what each method leans on. '
           'Numerical models lean on the current state of the atmosphere, '
           'which we know well today and whose influence decays as the '
           'system forgets its starting point. Statistical methods lean on '
           'relationships between big patterns and local outcomes. Those '
           'are weaker at short range and they do not decay the same '
           'way.'),
          ('Forecaster', 'So here is what to take from the shape rather '
           'than from the numbers. Where three series all decline, group '
           'them by rate. One falls off a cliff, one declines steadily, '
           'one declines gently, and the gentle one wins in the end '
           'despite starting last.'),
          ('Forecaster', 'And the practical rule: a headline figure for '
           'forecast skill means nothing without a lead time attached. '
           'Anybody who tells you method A beats method B, without saying '
           'at what range, has not told you anything, and may not know '
           'that they have not.'),
          ('Forecaster', 'Which is why every verification report I sign '
           'has lead time on the horizontal axis and why I have never '
           'managed to get one onto a press release. A single number is '
           'what a press office wants, and a single number is exactly what '
           'this chart shows you cannot honestly give them.')],
         items=[
          ('He says that when all series share a direction, the direction '
           'is', ['the finding', 'not the finding', 'misleading',
            'unreliable'], 1,
           'Because it could have been guessed.'),
          ('Persistence at six hours scores',
           ['55', '78', '86', '92'], 2,
           'Which he says people find shocking and should not.'),
          ('The numerical model is the best method up to about',
           ['two days', 'three days', 'five days', 'a week'], 2,
           'Starting highest at ninety-two.'),
          ('The statistical method starts',
           ['highest', 'lowest of the three', 'second', 'equal with '
            'persistence'], 1,
           'And declines most gently of all.'),
          ('Numerical models rely on the current state of the atmosphere, '
           'whose influence', ['grows', 'decays', 'stays constant',
            'reverses'], 1,
           'As the system forgets its starting point.'),
          ('His practical rule is that a skill figure means nothing '
           'without', ['a sample size', 'a lead time attached',
            'a confidence interval', 'a baseline'], 1,
           'Which he says is missing from most press releases.')])],
   speak=dict(
    part='Part 3', focus='Measuring a prediction',
    intro=('Five or six sentences. Try once to say that the best method '
           'depends on the range.'),
    qs=['How would you judge whether a forecast is good?',
        'Are long-range forecasts worth making?',
        'Should forecasters be held accountable for errors?',
        'Do people understand what a forecast is saying?'],
    shape=[('answer', 'By how far ahead it is, which almost nobody '
            'states.'),
           ('support', 'One method scores ninety-two at six hours and '
            'thirty-one at a week.'),
           ('follow-up', 'Another starts at seventy-eight and finishes '
            'higher.'),
           ('support', 'So which is better depends entirely on the '
            'range.'),
           ('follow-up', 'And a comparison with no lead time attached '
            'tells you nothing at all.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Forecast skill by lead time, three methods',
         prompt=('The graph below shows forecast skill against lead time '
                 'for three forecasting methods. Summarise the information '
                 'by selecting and reporting the main features, and make '
                 'comparisons where relevant. Write at least 150 words.'),
         figure=_SKILL,
         model=[
          'The line graph shows skill scores for three forecasting methods '
          'at lead times from six hours to one week. Overall, all three '
          'decline as the forecast period lengthens, and what distinguishes '
          'them is the rate of that decline rather than the direction: '
          'persistence falls most sharply, the numerical model steadily, '
          'and the statistical method most gently, so that the ranking at '
          'six hours is reversed by the end of the week.',
          'Persistence declines fastest. From 86 at six hours it falls to '
          '55 at twenty-four hours and 18 at seventy-two, finishing at 3 '
          'after a week, a loss of 83 points.',
          'The numerical model begins highest of the three at 92 and '
          'declines more gradually, through 74 at forty-eight hours to 31 '
          'at a week, losing 61 points. It is the highest-scoring method at '
          'every lead time up to 120 hours.',
          'The statistical method begins lowest at 78 and loses only 40 '
          'points across the week, reaching 38 at 168 hours. It therefore '
          'crosses the numerical model between 120 and 168 hours, and ends '
          'as the highest-scoring of the three despite having started '
          'last.'],
         notes=[
          'The Overall statement says what distinguishes the three is the '
          'rate and not the direction, and names the reversal. Where every '
          'series moves the same way, saying so is not a finding, and the '
          'question exists to test whether the candidate knows that.',
          'Each paragraph gives the total loss in points across the week '
          '— 83, 61 and 40 — which the chart does not print. Comparing '
          'rates requires a number for the rate, and this is the cheapest '
          'one available.',
          'The crossing is identified with a range rather than a point, '
          'because the chart does not show where between 120 and 168 hours '
          'it occurs. Claiming a precise crossing point would be reading '
          'in what is not there.'],
         criterion=[('An Overall statement about rate, not direction',
                     'Task Achievement'),
                    ('A figure for each rate of decline',
                     'Task Achievement'),
                    ('The crossing given as a range, not a point',
                     'Coherence and Cohesion')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Comparing rates rather than levels',
    explain=('When several series share a direction, the comparison is '
             'between rates. These patterns describe a rate and compare '
             'two of them without reverting to levels.'),
    examples=['All three decline; what separates them is how fast.',
              'Persistence loses 83 points across the week against the '
              'statistical method’s 40.',
              'The gentlest decline ends highest despite starting '
              'lowest.',
              'The two series cross between 120 and 168 hours.'],
    task='Rewrite each sentence so that it compares rates rather than '
         'levels.',
    items=[('The numerical model is the best.',
            'The numerical model scores highest up to 120 hours, after '
            'which its steeper decline carries it below the statistical '
            'method.'),
           ('Persistence is poor.',
            'Persistence declines fastest of the three, losing 83 points '
            'between six hours and a week.'),
           ('All the methods get worse.',
            'All three decline with lead time, at rates differing by a '
            'factor of two.'),
           ('The statistical method ends up on top.',
            'The statistical method loses the fewest points and therefore '
            'finishes highest, having started lowest.'),
           ('They swap places later on.',
            'The statistical method crosses the numerical model somewhere '
            'between 120 and 168 hours.')]),
   vocab=[('skill score', 'a measure of how good a forecast is'),
          ('forecast horizon', 'how far ahead a forecast reaches'),
          ('verification', 'checking forecasts against what occurred'),
          ('resolution', 'a forecast’s ability to distinguish cases'),
          ('climatology', 'the long-run average used as a baseline'),
          ('decay rate', 'how fast an influence is lost over time'),
          ('order change', 'where two series swap places'),
          ('rate of decline', 'how fast a series falls')],
   expr=[('All three decline; what separates them is how fast',
          'the cycle’s governing sentence'),
         ('right for five days and wrong for the horizon most people plan '
          'on', 'states when a true claim misleads'),
         ('a skill figure means nothing without a lead time attached',
          'names a missing dimension'),
         ('the gentle one wins in the end despite starting last',
          'reports a reversal compactly')],
   trans=['while', 'by contrast', 'taken together',
          'what distinguishes them'],
  ),

  dict(
   sub='Why rare events are hard to predict',
   step=5,
   read=[
    dict(heading='Base rates and the warning that is usually wrong',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'A detection system that is right ninety-nine times in a hundred '
          'sounds reliable, and when it is applied to a rare event most of '
          'the alarms it raises will be false. This is not a defect in the '
          'system, it is not an error in the reasoning, and it is the single '
          'most consequential piece of arithmetic that most individuals '
          'never encounter. It is taught in a single lecture in most '
          'statistics courses and is absent from the training of almost '
          'everybody who designs, operates or reports on a detection system.',
          'The arithmetic merits setting out. Suppose an event occurs on one '
          'day in a thousand, and a detector catches ninety-nine per cent of '
          'occurrences while raising a false alarm on one per cent of '
          'ordinary days. Across a thousand days there is roughly one real '
          'event, which is detected, and approximately ten false alarms. '
          'Ninety per cent of alarms are therefore false, from a detector '
          'that is ninety-nine per cent accurate in both directions.',
          'The feature that drives this is the base rate: how frequently the '
          'thing happens at all. Where the base rate is low, the population '
          'of non-events is so much larger than the population of events '
          'that even a very small false alarm rate produces more false '
          'alarms than there are real cases to find. Nothing about the '
          'detector has to be poor for this to occur, which is why the '
          'result is so consistently disbelieved: the arithmetic delivers a '
          'disappointing outcome from excellent components.',
          'This is why improving a detector frequently fails to improve the '
          'experience of using it. Halving the miss rate changes almost '
          'nothing, because misses were rare already. Halving the false '
          'alarm rate halves the alarms, because false alarms are most of '
          'them, and the two improvements are ordinarily presented as '
          'equivalent achievements in the same paper. A reader who does not '
          'hold the base rate in mind has no way to tell which of the two '
          'reported improvements will be noticed by anybody using the '
          'system.',
          'The consequences are visible wherever rare things are screened '
          'for. Medical screening for uncommon conditions produces mostly '
          'false positives and a further round of testing. Security systems '
          'searching for very rare threats generate alarms that are almost '
          'invariably wrong. Fraud detection, structural monitoring and '
          'earthquake early warning all live with the same arithmetic.',
          'A common response is to raise the threshold so that fewer alarms '
          'are raised. This works, in the sense that it reduces false '
          'alarms, and it reduces detections proportionately more than most '
          'individuals expect, because the real events cluster near the '
          'threshold rather than far above it. The trade is genuine and is '
          'much worse than it looks. The distribution of real events near '
          'the boundary is an empirical question with a distinct answer in '
          'every application, and raising a threshold without measuring it '
          'is guessing at the one number that matters.',
          'A second and better response is to accept the false alarm rate '
          'and design the system around it. Where an alarm triggers a '
          'cheap confirmatory step rather than an expensive action, a high '
          'false alarm rate is affordable, and almost every well-designed '
          'screening system in medicine is built this way, with a cheap '
          'and inaccurate first stage and an expensive and accurate '
          'second.',
          'The third response is informational and is the one most '
          'frequently neglected. Tell the people receiving the alarms what '
          'the false alarm rate is, in advance. The alternative is that '
          'they infer it from experience, and the inference they draw is '
          'reliably more pessimistic than the truth, because a run of '
          'false alarms is more memorable than a correct quiet period. '
          'The inference is also durable: once a population has concluded '
          'that a system cries wolf, a run of accurate warnings corrects '
          'the belief far more slowly than the false alarms created it.',
          'Evidence for the third response is limited and consistent as '
          'far as it goes. Where services have published their false alarm '
          'rate before a season, compliance with subsequent warnings has '
          'held at levels that previously fell away after two or three '
          'unnecessary alerts. The studies are small, there are few of '
          'them, and no service has yet reported a null result. That last '
          'observation should be read with care, since services that '
          'publish their rate and then see compliance collapse have an '
          'obvious reason not to write the result up.',
          'The deepest difficulty is not arithmetical but institutional. A '
          'system with a high false alarm rate looks incompetent to anybody '
          'who does not know the base rate, and the officials responsible '
          'are judged by people who do not. The pressure therefore runs '
          'towards raising thresholds, which reduces the visible error and '
          'increases the invisible one. No individual in that chain behaves '
          'irrationally, which is what renders the pattern so hard to '
          'reverse by replacing the individuals.',
          'That asymmetry is the practical content of this whole subject. '
          'An unnecessary warning is observable, attributable and '
          'complained about. A missed event is observable and rarer. An '
          'avoided disaster is not observable at all, and it is the thing '
          'the system exists to produce.',
          'What a careful reader should take from this is a single question '
          'to ask of any alarm: how frequently does the thing happen anyway? '
          'Without that figure, no accuracy claim about a detector can be '
          'interpreted, and the figure is scarcely ever given alongside the '
          'accuracy claim, which should be treated as a warning in itself.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['Why base rates matter', 'The arithmetic worked through',
            'Raising the threshold', 'Telling people the rate'], 1,
           'A thousand days, one real event, ten false alarms.'),
          ('Choose the best heading for paragraph 6.',
           ['The arithmetic', 'Raising the threshold and what it costs',
            'Designing around the rate', 'The institutional '
            'difficulty'], 1,
           'Real events cluster near the threshold rather than far above '
           'it.'),
          ('Choose the best heading for paragraph 10.',
           ['Designing around the rate', 'Telling people in advance',
            'Why the pressure runs one way', 'The question to ask'], 2,
           'Officials judged by people who do not know the base rate.'),
          ('The writer believes a high false alarm rate indicates a faulty '
           'detector.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1 says it is not a defect in the system.'),
          ('The writer believes raising the threshold costs less than '
           'people expect.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 6 says the trade is much worse than it looks.'),
          ('With a one-in-a-thousand event and a one per cent false alarm '
           'rate, ____________ per cent of alarms are false.', None,
           'ninety',
           'Paragraph 2, from a detector accurate in both directions.'),
          ('Well-designed screening systems use a cheap first stage and an '
           'expensive and accurate ____________.', None, 'second',
           'Paragraph 7, so a high false alarm rate is affordable.'),
          ('The question to ask of any alarm is how often the thing '
           'happens ____________.', None, 'anyway',
           'The final paragraph, a figure rarely given with an accuracy '
           'claim.')])],
   listen=[
    dict(heading='A lecture on base rates', part='Part 4',
         task='A lecture on detecting rare events', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'A test that is right ninety-nine times in a hundred '
           'is usually wrong here. That sentence is not a paradox, it is '
           'not a trick, and if you leave today with the arithmetic behind '
           'it you will read half the news differently for the rest of your '
           'life.'),
          ('Lecturer', 'The numbers. An event happens one day in a '
           'thousand. Your detector catches ninety-nine per cent of real '
           'events and gives a false alarm on one per cent of ordinary '
           'days. Over a thousand days: one real event, caught. And ten '
           'false alarms, because one per cent of nine hundred and '
           'ninety-nine is about ten.'),
          ('Lecturer', 'So ninety per cent of your alarms are false, from '
           'a detector that is ninety-nine per cent accurate in both '
           'directions. Nothing is broken. That is what ninety-nine per '
           'cent accuracy buys you when the thing is rare.'),
          ('Lecturer', 'The driver is the base rate: how often it happens '
           'at all. The pile of non-events is so much bigger than the pile '
           'of events that a tiny error rate applied to the big pile '
           'swamps the small one.'),
          ('Lecturer', 'Which has a consequence for how you improve a '
           'system, and it is counter-intuitive. Halving your miss rate '
           'achieves almost nothing, because misses were already rare. '
           'Halving your false alarm rate halves the alarms. Those two '
           'improvements go in the same paper as though they were '
           'comparable, and they are not.'),
          ('Lecturer', 'Now, the response everybody reaches for is to '
           'raise the threshold. Fewer alarms, yes. And you lose '
           'detections faster than you expect, because real events cluster '
           'just above the threshold rather than way above it. The trade is '
           'worse than it looks and almost nobody models it before doing '
           'it.'),
          ('Lecturer', 'The better response is to make the alarm cheap. If '
           'an alarm triggers a confirmatory test rather than an '
           'evacuation, you can afford ninety per cent false alarms. Every '
           'good medical screening programme is built exactly this way: '
           'cheap inaccurate first stage, expensive accurate second.'),
          ('Lecturer', 'And the third response, which costs nothing and is '
           'skipped everywhere: tell people the rate in advance. If you do '
           'not, they estimate it from experience, and the estimate is '
           'always worse than the truth, because three false alarms in a '
           'row are memorable and a quiet month is not.'),
          ('Lecturer', 'So one question for any alarm you ever meet. How '
           'often does the thing happen anyway? Without it, no accuracy '
           'figure can be interpreted at all — and you will notice that '
           'the base rate is almost never printed next to the accuracy '
           'claim.')],
         items=[
          ('In the worked example, how many false alarms occur in a '
           'thousand days?', ['one', 'about ten', 'ninety-nine',
            'a hundred'], 1,
           'Against one real event that is caught.'),
          ('The proportion of alarms that are false is',
           ['one per cent', 'ten per cent', 'ninety per cent',
            'ninety-nine per cent'], 2,
           'From a detector accurate in both directions.'),
          ('Halving the miss rate achieves almost nothing because misses '
           'are', ['uncounted', 'already rare', 'unreported',
            'expensive'], 1,
           'While halving the false alarm rate halves the alarms.'),
          ('Raising the threshold loses detections faster than expected '
           'because real events', ['are mismeasured', 'cluster just above '
            'the threshold', 'occur at night', 'are '
            'under-reported'], 1,
           'Rather than far above the threshold, so detections fall fast.'),
          ('A high false alarm rate is affordable where an alarm triggers',
           ['an evacuation', 'a cheap confirmatory step', 'a report',
            'a shutdown'], 1,
           'As in medical screening programmes.'),
          ('If people are not told the rate, their estimate of it is',
           ['accurate', 'always worse than the truth', 'too '
            'optimistic', 'unstable'], 1,
           'Because repeated false alarms are more memorable than quiet '
           'periods.')])],
   speak=dict(
    part='Part 3', focus='Rare events',
    intro=('Five or six sentences. Try once to explain why an accurate '
           'test can be usually wrong.'),
    qs=['Should societies prepare for events that rarely happen?',
        'How should governments decide what to prepare for?',
        'Is it rational to worry about unlikely dangers?',
        'Who should pay for preparing?'],
    shape=[('answer', 'Yes, and the arithmetic is less obvious than it '
            'looks.'),
           ('support', 'A detector that is ninety-nine per cent accurate '
            'sounds excellent.'),
           ('follow-up', 'Applied to a one-in-a-thousand event, nine '
            'alarms in ten are false.'),
           ('support', 'Nothing is broken; that is what the accuracy '
            'buys.'),
           ('follow-up', 'So the question to ask about any alarm is how '
            'often the thing happens anyway, and that figure is almost '
            'never printed.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='A premise about probability',
         prompt=('Should resources be spent preparing for rare disasters? '
                 'Brainstorm ten, run the six tests, name the premise '
                 'under each survivor, and check whether any premise is '
                 'really a claim about probability that could be checked. '
                 'Twelve minutes.'),
         plan=('Preparation for rare disasters is worth funding where the '
               'preparation is also useful for common events, and the '
               'argument against it rests on a premise about probability '
               'that is correct about single events and wrong about '
               'portfolios of them',
               [('The case for preparing rests on a premise about expected '
                 'cost that holds and is routinely miscalculated',
                 ['a one-in-two-hundred-year event has a fourteen per cent '
                  'chance of occurring in thirty years',
                  'people read the return period as a schedule rather than '
                  'as a rate']),
                ('The case against rests on a premise that each rare event '
                 'is separately improbable, which is true and does not '
                 'reach the conclusion',
                 ['across many distinct rare hazards, some will occur',
                  'preparation that serves several hazards is not priced '
                  'against any one of them'])]),
         notes=[
          'The question this unit adds is whether a premise is really a '
          'probability claim in disguise. Premises of that kind look like '
          'judgements and are in fact arithmetic, and arithmetic can be '
          'checked, which changes what the essay has to do.',
          'Here the opposing premise is true of each hazard separately and '
          'false of the set of them. That gap between the individual and '
          'the aggregate is the commonest error in public reasoning about '
          'risk, and spotting it is what makes the essay.',
          'Notice the thesis is conditional: worth funding where the '
          'preparation serves common events too. A conditional thesis is '
          'stronger than an unconditional one when the condition does real '
          'work, and here it does: it names which preparations survive '
          'the objection.'],
         criterion=[('Spotting a premise that is really arithmetic',
                     'Task Response'),
                    ('Separating the single case from the aggregate',
                     'Task Response')],
         instruct='  Twelve minutes, timed. You write this in cycle 5.',
         lines=12)],
   gram=dict(
    point='Probability, base rate and what follows',
    explain=('Writing about likelihood requires naming which probability '
             'is meant: of the event, of a detection, or of a detection '
             'given an alarm. These patterns keep them apart.'),
    examples=['A test that is right ninety-nine times in a hundred is '
              'usually wrong here.',
              'Ninety per cent of alarms are false, and the detector is '
              'not at fault.',
              'The probability of an alarm given no event is small; the '
              'probability of no event given an alarm is large.',
              'The base rate determines which of those matters.'],
    task='Rewrite each sentence so that it is clear which probability is '
         'meant.',
    items=[('The test is ninety-nine per cent accurate, so an alarm '
            'probably means something.',
            'The test catches ninety-nine per cent of events, which does '
            'not tell you what proportion of alarms are real.'),
           ('Most alarms are false, so the system is broken.',
            'Most alarms are false because the event is rare, which is '
            'what the arithmetic predicts for an accurate detector.'),
           ('Rare events are unlikely, so preparation is wasted.',
            'Each rare hazard is individually unlikely, while the '
            'probability that some member of a large set occurs is '
            'not.'),
           ('It happens once every two hundred years.',
            'It has a one in two hundred chance in any given year, giving '
            'about fourteen per cent over thirty years.'),
           ('Improving the detector will reduce alarms.',
            'Reducing the false alarm rate reduces alarms; reducing the '
            'miss rate does almost nothing, since misses are already '
            'rare.')]),
   vocab=[('underlying frequency', 'how often something happens at all'),
          ('specificity', 'how rarely a test alarms without cause'),
          ('rare event', 'something with a very low base rate'),
          ('screening', 'testing a whole population for a condition'),
          ('confirmatory step', 'a second test after a first alarm'),
          ('recurrence interval', 'the average interval between occurrences'),
          ('risk pool', 'a set of distinct hazards taken together rather '
           'than one by one'),
          ('swamp', 'to overwhelm by sheer number')],
   expr=[('A test that is right ninety-nine times in a hundred is usually '
          'wrong here', 'the cycle’s governing sentence'),
         ('nothing is broken; that is what the accuracy buys you',
          'defends a high false alarm rate'),
         ('a tiny error rate applied to the big pile swamps the small '
          'one', 'explains the arithmetic in one clause'),
         ('how often does the thing happen anyway',
          'the question to ask of any alarm')],
   trans=['consequently', 'which in turn', 'as a result',
          'the driver is'],
  ),

  dict(
   sub='What a probability does not tell you',
   step=5,
   read=[
    dict(heading='The thirty per cent that happened',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 59-66',
         paras=[
          'A forecaster who says there is a thirty per cent chance of '
          'flooding, and is followed by flooding, has not been shown to be '
          'mistaken. This is widely known, widely stated, and scarcely ever '
          'believed by anybody who has just been flooded, and the gap '
          'between the technical position and the public one is the subject '
          'of this passage. The gap is not a gap in understanding, or not '
          'only that, and treating it as one has been the profession’s '
          'strategy for forty years with very little to show for it.',
          'The technical position is straightforward. A probability attached '
          'to a single event cannot be refuted by that event, because thirty '
          'per cent is a statement that the event is expected in roughly '
          'three cases out of ten and not a statement that it will not '
          'occur. A forecaster whose thirty per cent forecasts were never '
          'followed by the event would be badly miscalibrated in the other '
          'direction. The same point can be put the other way round, which '
          'is more uncomfortable: a forecaster who wanted never to be '
          'accused of error could achieve it by assigning every event a '
          'probability near fifty per cent, and would be useless.',
          'Calibration is the property that can be assessed, and it requires '
          'a run of forecasts rather than one. A forecaster is well '
          'calibrated when the events they assign thirty per cent to occur '
          'approximately thirty per cent of the time, across many occasions. '
          'The assessment is straightforward, is routinely performed by '
          'meteorological services, and is scarcely ever reported to the '
          'public. The computation requires only the archive of forecasts '
          'and the archive of outcomes, both of which these services already '
          'keep.',
          'That omission matters more than it appears to. A public that is '
          'never shown calibration data has no way to distinguish a '
          'well-calibrated forecaster from a badly calibrated one, and in '
          'its absence judges each forecast by its outcome, which is the '
          'one method guaranteed to be uninformative about a probabilistic '
          'claim.',
          'There is a second difficulty, and it is a genuine one rather than '
          'a public misunderstanding. A person deciding whether to move '
          'their possessions upstairs faces a single occasion, not a run of '
          'them, and the calibration of the forecaster across many occasions '
          'does not tell them what to do on this one. It tells them how to '
          'weight the number, which is a genuine answer and is not the '
          'answer they wanted.',
          'This is why the demand for a single answer rather than a '
          'probability is more reasonable than forecasters ordinarily '
          'acknowledge. The person asking is not confused about probability; '
          'they are asking somebody with more information to make a '
          'recommendation, and "thirty per cent" declines to make one while '
          'appearing to be responsive. The complaint, properly stated, is '
          'not that the number is wrong but that it answers a distinct '
          'question from the one that was asked.',
          'The honest counter is that the recommendation is contingent on '
          'facts the forecaster does not have: what the possessions are '
          'worth, how hard they are to move, whether anybody is at home. A '
          'single answer would embed an assumption about those and would be '
          'wrong for most of the people receiving it, which is precisely why '
          'the probability is given instead. The reasoning is sound and it '
          'merits noticing that it establishes only that no single answer '
          'suits everybody, not that no advice of any kind can be given.',
          'The resolution that works in practice is neither a bare '
          'probability nor a single answer, and it is in limited use. It '
          'is to give the probability together with a recommendation for a '
          'stated case: "thirty per cent chance of flooding above '
          'floorboard level; if you have items that would be destroyed and '
          'can be moved in under an hour, move them". The reader can then '
          'substitute their own circumstances. The recommendation is '
          'conditional rather than universal, which costs a sentence and '
          'preserves everything the probability was protecting.',
          'Where this has been tried, reported comprehension rises and '
          'complaints after non-events fall, and the forecasters involved '
          'report finding it uncomfortable. The discomfort merits examining: '
          'it derives from making a recommendation that will occasionally '
          'be mistaken, which is exactly what the probability was protecting '
          'them from. A number cannot be accused of giving bad advice, and a '
          'conditional recommendation can, which is a difference in exposure '
          'rather than in accuracy.',
          'That protection has a cost that is rarely acknowledged within '
          'the profession. A probability transfers the decision to the '
          'recipient along with the responsibility for it, and does so '
          'under the description of respecting their autonomy. Where the '
          'recipient has no basis for the decision, this is not autonomy; '
          'it is abandonment with a technically accurate alibi.',
          'None of which argues for abolishing probabilistic forecasts, '
          'which carry information a single answer cannot. It argues for '
          'publishing calibration data so that the numbers can be trusted, '
          'and for pairing the number with a conditional recommendation so '
          'that it can be used. Neither measure requires new science, new '
          'funding or a change in how forecasts are produced, which is '
          'some evidence about why they have not been adopted.',
          'The reader’s version is short. When you are given a probability, '
          'ask two things: how well calibrated is this source, and what '
          'would the person giving it do in my position? The first is '
          'answerable from published data where any exists, and the second '
          'is a question forecasters are trained not to answer and can '
          'ordinarily answer very well.'],
         items=[
          ('Which paragraph defines calibration?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'Events assigned thirty per cent occurring about thirty per '
           'cent of the time.'),
          ('Which paragraph says the demand for a single answer is more '
           'reasonable than forecasters acknowledge?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 8'], 1,
           'The asker is requesting a recommendation, not confused about '
           'probability.'),
          ('Which paragraph describes the paired probability and '
           'conditional recommendation?',
           ['Paragraph 7', 'Paragraph 8', 'Paragraph 9',
            'Paragraph 10'], 1,
           'With a stated case the reader can substitute into.'),
          ('The writer believes a thirty per cent forecast is refuted by '
           'the event occurring.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1 and 2: it cannot be refuted by a single event.'),
          ('The writer believes probabilistic forecasts should be '
           'abolished.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 11 says they carry information a single answer '
           'cannot.'),
          ('A forecaster whose thirty per cent forecasts were never '
           'followed by the event would be badly ____________.', None,
           'miscalibrated',
           'Paragraph 2, in the other direction.'),
          ('The writer describes transferring a decision to a recipient '
           'with no basis for it as abandonment with a technically '
           'accurate ____________.', None, 'alibi',
           'Paragraph 10, offered under the description of autonomy.'),
          ('Forecasters are trained not to answer what the reader’s '
           'second question asks, and can usually answer it very '
           '____________.', None, 'well',
           'The final paragraph, which is the reader\u2019s second question.')])],
   listen=[
    dict(heading='A forecaster and a politician disagree', part='Part 4',
         task='A recorded exchange', band='l4', qtype='Questions 67-72',
         script=[
          ('Chair', 'Dr Oyelaran-Strand is a senior forecaster. Mr '
           'Beckwith-Nakamura chairs a regional authority.'),
          ('Beckwith-Nakamura', 'I will start where I am weakest. I have '
           'said in public that a thirty per cent forecast followed by '
           'flooding was a failure, and I knew when I said it that it was '
           'not. It was a useful sentence in a difficult week.'),
          ('Oyelaran-Strand', 'Thank you for that, and let me match it. My '
           'profession hides behind the same arithmetic. "You cannot refute '
           'a probability with one event" is true and it is also what we '
           'say instead of answering the question we were asked.'),
          ('Beckwith-Nakamura', 'Which question?'),
          ('Oyelaran-Strand', 'What should I do. A householder asking about '
           'thirty per cent is not confused about statistics. They are '
           'asking somebody who knows more than they do for a '
           'recommendation, and we give them a number and call it '
           'respecting their judgement.'),
          ('Beckwith-Nakamura', 'I would take a recommendation and I '
           'suspect you will not give me one.'),
          ('Oyelaran-Strand', 'I will give you a conditional one, which is '
           'the compromise that works. Thirty per cent of flooding above '
           'floorboard level; if you have things that would be destroyed '
           'and can be moved in an hour, move them. You substitute your own '
           'situation.'),
          ('Beckwith-Nakamura', 'That is usable and I notice it would have '
           'prevented my sentence, because I could not have called it a '
           'failure without first saying which part of the advice had '
           'failed.'),
          ('Oyelaran-Strand', 'It would, and it makes my colleagues '
           'uncomfortable, and the discomfort is the point. A conditional '
           'recommendation will sometimes be wrong for somebody. The bare '
           'probability never is, which is why we prefer it.'),
          ('Beckwith-Nakamura', 'Then what do you want from me?'),
          ('Oyelaran-Strand', 'Publish our calibration. We measure it '
           'already — whether the things we call thirty per cent happen '
           'thirty per cent of the time — and we have never told anybody. '
           'Without it your public has no way to tell a good forecaster '
           'from a bad one and falls back on judging single '
           'outcomes.'),
          ('Beckwith-Nakamura', 'My officers will ask what it costs to '
           'publish it.'),
          ('Oyelaran-Strand', 'Nothing. It is already computed every season '
           'and it sits in an internal report that four people read. The '
           'cost is not money, it is that somebody will find a year where '
           'we were badly out and quote it for a decade.'),
          ('Beckwith-Nakamura', 'And if the calibration turns out to be '
           'poor?'),
          ('Oyelaran-Strand', 'Then you will know something true that you '
           'currently do not, and I would rather be criticised for a real '
           'failing than defended for a false one.')],
         items=[
          ('Beckwith-Nakamura opens by admitting he called a forecast a '
           'failure', ['by mistake', 'knowing it was not',
            'on advice', 'after a review'], 1,
           'Describing it as a useful sentence in a difficult week.'),
          ('Oyelaran-Strand says her profession hides behind',
           ['the data', 'the arithmetic about probabilities',
            'its procedures', 'its independence'], 1,
           'Instead of answering the question it was asked.'),
          ('The question she says householders are actually asking is',
           ['how likely it is', 'what they should do', 'who is '
            'responsible', 'when it will happen'], 1,
           'From somebody who knows more than they do.'),
          ('Her compromise is a probability paired with',
           ['a confidence interval', 'a conditional recommendation',
            'a single answer', 'an apology'], 1,
           'Which the listener substitutes their own situation into.'),
          ('She says the bare probability is preferred because it',
           ['is more accurate', 'is never wrong for anybody',
            'is quicker', 'is required'], 1,
           'Whereas a conditional recommendation sometimes will be.'),
          ('What she asks the authority to publish is',
           ['the forecasts', 'the calibration data', 'the warnings',
            'the complaints'], 1,
           'Which is measured already and never disclosed.')])],
   speak=dict(
    part='Part 3', focus='Probability and advice',
    intro=('The hardest turn in the unit. Try once to say that a true '
           'statement can be an evasion.'),
    qs=['Should experts give a single answer or a probability?',
        'Is it fair to blame a forecaster when a predicted event does not '
        'happen?',
        'How should uncertainty be explained to the public?',
        'Who should decide what to do about a risk?'],
    shape=[('answer', 'Both, and in that order.'),
           ('support', 'A probability carries information a single answer '
            'cannot.'),
           ('follow-up', 'But "thirty per cent" does not answer the '
            'question somebody actually asked.'),
           ('support', 'They were asking what to do, not how likely it '
            'is.'),
           ('follow-up', 'So the number plus a conditional recommendation '
            'is the honest version, and forecasters dislike it because it '
            'can be wrong.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='A single answer or a probability?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some say forecasters should give a single answer '
                 'rather than a probability. To what extent do you agree? '
                 'Write at least 250 words.'),
         model=[
          'I disagree with the proposal and think the complaint behind it '
          'is correct, which is an uncomfortable combination and is where '
          'the evidence points. People asking for a single answer are not '
          'confused about probability; they are asking a question that a '
          'probability declines to answer.',
          'The case against single answers is decisive on its own terms. A '
          'probability carries information that one answer cannot: it '
          'distinguishes a near-certainty from a serious possibility, and '
          'it can be checked. Calibration — whether the events a '
          'forecaster calls thirty per cent occur about thirty per cent of '
          'the time — is measurable across a run of forecasts, and a '
          'single answer offers nothing to measure. A forecaster whose '
          'thirty per cent forecasts were never followed by the event '
          'would be badly miscalibrated, not impressively cautious.',
          'But the complaint is not really about statistics, and treating '
          'it as though it were is what keeps this argument going. A '
          'householder told there is a thirty per cent chance of flooding '
          'is asking somebody with more information what to do, and '
          '"thirty per cent" transfers that decision back to them along '
          'with responsibility for it, under the description of respecting '
          'their judgement. Where they have no basis for deciding, this is '
          'not respect; it is abandonment with a technically accurate '
          'alibi.',
          'The resolution is not to choose between the two. It is to give '
          'the probability with a conditional recommendation attached: '
          'thirty per cent of flooding above floorboard level, and if you '
          'have possessions that would be destroyed and can be moved in an '
          'hour, move them. The reader substitutes their own '
          'circumstances, the number remains checkable, and the question '
          'they asked gets answered.',
          'To the extent I agree with the proposal, then, it is about what '
          'the public is owed rather than about the format. Two things '
          'would be owed and neither is currently supplied: the '
          'calibration record, which services measure and do not publish, '
          'so that a good forecaster can be told from a bad one; and a '
          'recommendation for a stated case. Forecasters resist the second '
          'because it can be wrong for somebody, and a bare probability '
          'never can — which is precisely the reason to doubt that the '
          'preference for it is about the public.'],
         notes=[
          'The first sentence disagrees with the proposal while agreeing '
          'with the complaint behind it, and calls that uncomfortable. '
          'Structure 9 needs the objection taken seriously, and taking it '
          'seriously here means conceding that it has identified something '
          'real.',
          'Paragraph 3 reinterprets the complaint as being about advice '
          'rather than statistics, which is the move the whole essay turns '
          'on. "Abandonment with a technically accurate alibi" states a '
          'strong charge in a form that can be defended.',
          'The last sentence is the sharpest in the essay: the preference '
          'for a bare probability protects the forecaster, which is a '
          'reason to doubt the justification offered for it. Noticing '
          'whose interest a stated principle serves is a band 9 move.'],
         criterion=[('Disagreeing with a proposal while granting its '
                     'complaint', 'Task Response'),
                    ('Reinterpreting what the objection is about',
                     'Task Response'),
                    ('Noticing whose interest the stated principle '
                     'serves', 'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Calibration, single cases and what a number owes',
    explain=('Writing about probability requires distinguishing a claim '
             'about a run from a claim about one occasion. These patterns '
             'keep them apart and say what each can support.'),
    examples=['A thirty per cent forecast is not refuted by the event '
              'occurring.',
              'Calibration is assessed across many forecasts and says '
              'nothing about this one.',
              'The number tells you how to weight it, not what to do.',
              'A conditional recommendation can be wrong for somebody; a '
              'bare probability cannot.'],
    task='Rewrite each sentence so that run and single case stay '
         'distinct.',
    items=[('They said thirty per cent and it happened, so they were '
            'wrong.',
            'The event occurred after a thirty per cent forecast, which is '
            'what happens in about three such cases in ten.'),
           ('Their forecasts are reliable.',
            'Their forecasts are well calibrated across a run, which does '
            'not tell you what will happen on any one occasion.'),
           ('The probability tells me what to do.',
            'The probability tells you how to weight the possibility; what '
            'to do depends on facts the forecaster does not have.'),
           ('A single answer would be clearer.',
            'A single answer would embed an assumption about the '
            'recipient’s circumstances and be wrong for most of them.'),
           ('They should be accountable for wrong forecasts.',
            'They can be held to their calibration record, which is '
            'measurable, rather than to individual outcomes, which are '
            'not.')]),
   vocab=[('well calibrated', 'assigning probabilities that match observed '
           'frequencies'),
          ('single case', 'one occasion rather than a run'),
          ('hedging', 'qualifying a claim to avoid being wrong'),
          ('conditional recommendation', 'advice given for a stated '
           'situation'),
          ('self-determination', 'leaving a decision to the person affected'),
          ('alibi', 'a defence that excuses without answering'),
          ('miscalibrated', 'assigning probabilities that do not '
           'match'),
          ('comprehension', 'how well a message is understood')],
   expr=[('A thirty per cent forecast is not refuted by the event '
          'occurring', 'the cycle’s governing sentence'),
         ('abandonment with a technically accurate alibi',
          'names what a bare probability can do'),
         ('the discomfort is the point',
          'identifies what an objection is really protecting'),
         ('I would rather be criticised for a real failing than defended '
          'for a false one', 'states a principle about disclosure')],
   trans=['admittedly', 'nevertheless', 'in short',
          'to the extent I agree'],
  ),
 ],
 technique=dict(
  title='Three declining series: comparing slope, not level',
  body=('When every series on a chart moves the same way, the direction '
        'is not the finding and saying it is wastes your Overall '
        'statement. What distinguishes three declining lines is how fast '
        'each one falls, and the figure for that is almost never printed: '
        'you get it by subtracting the last value from the first. Three '
        'numbers — 83, 61 and 40 — turn a vague impression into a '
        'comparison, and they take ten seconds. Then look for a crossing. '
        'Where lines decline at different rates they frequently change '
        'order somewhere, and the method that starts lowest can finish '
        'highest, which is the most interesting thing such a chart ever '
        'says. Give the crossing as a range if the chart does not show '
        'exactly where it falls, because claiming a precise point is '
        'reading in what is not there.'),
  panel=[('Rate, not direction',
          '"All three decline" is not a finding. "They decline at rates '
          'differing by a factor of two" is.'),
         ('Subtract for each series',
          'First value minus last. Three numbers, ten seconds, and the '
          'comparison becomes quantitative.'),
         ('Hunt for the crossing',
          'Different rates means an order change somewhere. Find it; it '
          'is usually the point of the question.'),
         ('A crossing is a range',
          'If the chart does not show the exact point, say "between 120 '
          'and 168 hours". Precision you do not have costs marks.')],
  task='Describe the cycle 3 graph in 150 words, giving a rate figure '
       'for each series and the crossing as a range.',
  qs=['What are the three rates of decline, in points?',
      'Which series declines fastest and which most gently?',
      'Where does the crossing occur, and how did you express it?',
      'Which method is best at 24 hours, and which at a week?',
      'Does your Overall statement mention rate or only direction?']),
 outlining=dict(
  title='Premise testing on an argument about probability',
  body=('Arguments about risk hide arithmetic inside what look like '
        'judgements, and the premise test needs a specific question for '
        'them: is this premise actually a claim about probability, and '
        'could it be checked? "Rare disasters are too unlikely to prepare '
        'for" sounds like a judgement about priorities and is a '
        'calculation — one that is usually wrong, because a '
        'one-in-two-hundred-year event has a fourteen per cent chance of '
        'arriving in thirty years and people read the return period as a '
        'schedule. Watch particularly for premises that are true of a '
        'single case and false of a set: each hazard separately improbable, '
        'and some member of a large set near-certain. That gap is the '
        'commonest failure in public reasoning about risk, and an essay '
        'that spots it has found its argument.'),
  frame=('Preparation for rare disasters is worth funding where the '
         'preparation is also useful for common events, and the argument '
         'against it rests on a premise about probability that is correct '
         'about single events and wrong about portfolios of them',
         [('The case for preparing rests on a premise about expected cost '
           'that holds and is routinely miscalculated',
           ['a one-in-two-hundred-year event has a fourteen per cent '
            'chance of occurring in thirty years',
            'people read the return period as a schedule rather than as a '
            'rate']),
          ('The case against rests on a premise that each rare event is '
           'separately improbable, which is true and does not reach the '
           'conclusion',
           ['across many distinct rare hazards, some will occur',
            'preparation that serves several hazards is not priced against '
            'any one of them'])]),
  task='Take each premise from your cycle 4 brainstorm and mark whether '
       'it is a probability claim. For those that are, do the '
       'arithmetic.',
  qs=['Which of your premises are really probability claims?',
      'Is each one about a single case or about a set?',
      'Does the arithmetic support it when you do it?',
      'Does your opponent’s premise survive the single-to-set step?',
      'Has the arithmetic changed your thesis?'],
  answers=['more than you expect, especially the confident ones',
           'the single-case ones are usually true and insufficient',
           'return periods are the commonest thing people get wrong',
           'very often it does not, and that is the essay',
           'if it has, say so in the introduction rather than hiding it']),
 candos=['I can read warning guidance for what a level actually means',
         'I can compare three series by rate rather than by level',
         'I can explain why an accurate detector is usually wrong about a '
         'rare event',
         'I can say what a probability does and does not tell a single '
         'person',
         'I can spot a premise that is really arithmetic'],
 tip=('When every line on a chart goes the same way, stop looking at the '
      'direction. Subtract first value from last for each series, compare '
      'those three numbers, and then look for the place where two lines '
      'change order.'),
)
