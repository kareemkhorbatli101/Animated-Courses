# -*- coding: utf-8 -*-
"""Volume 6 timed Listening paper: four parts, 40 questions, about 30 min."""

LPAPER = dict(
 vol=6, level='C1', band='7.5',
 title='Listening Paper',
 intro=(
   'Four parts, forty questions, one hearing of each recording. Part 1 is a '
   'conversation about arrangements, Part 2 a talk by a single speaker, Part '
   '3 a discussion between three people, and Part 4 a lecture. At this level '
   'three things are harder than in Volume 5: the answers arrive closer '
   'together, speakers correct themselves and each other more often, and '
   'several questions turn on a distinction drawn once and never '
   'restated.'),
 instruct=[
  'Read the questions for each part before the recording begins. You are '
  'given that time whether you use it or not, and at this level it is the '
  'difference between six marks and ten.',
  'Predict the form of every answer before you hear it: a number, a date, a '
  'name, a plural noun, a word that must be an adjective. Knowing what you '
  'are waiting for is most of the work.',
  'Listen for the correction. A speaker gives a figure and revises it, or a '
  'second speaker contradicts the first; the answer is what the recording '
  'settles on, not what it says first.',
  'In Part 3 there are three voices. Track who holds which position, '
  'because at least two questions will ask you whose view something was.',
  'If you miss one, leave it and look ahead. Chasing a missed answer costs '
  'you the two that follow, which is the commonest way to lose six marks in '
  'ninety seconds.',
  'On the computer-delivered test there is no ten-minute transfer window: '
  'you are given two minutes to check what you have typed. Practise to that '
  'rule and not to the paper one.'],

 parts=[

  dict(no=1, first=1, part='Part 1', band='l1',
       heading='Enquiring about a residential course',
       task='A conversation between a caller and a course office · note completion',
       qtype='Questions 1-10',
       blurb='Questions 1–10. Complete the enquiry form. Write ONE WORD '
             'AND/OR A NUMBER for each answer.',
       script=[
        ('Office', 'Barrowfield Centre, course enquiries. Hyacinth '
         'speaking.'),
        ('Caller', 'Hello. I am interested in the translation course in '
         'the spring.'),
        ('Office', 'The literary translation week, or the technical one?'),
        ('Caller', 'Technical, I think. I work on patents.'),
        ('Office', 'Then technical, yes. That runs from the sixteenth to '
         'the twenty-third of April.'),
        ('Caller', 'Is that a Monday start?'),
        ('Office', 'A Tuesday, this year. We moved it because of the bank '
         'holiday.'),
        ('Caller', 'And the fee?'),
        ('Office', 'Nine hundred and forty pounds residential, six hundred '
         'and eighty if you do not stay.'),
        ('Caller', 'Residential, please. Does that include meals?'),
        ('Office', 'Breakfast and dinner. Lunch is in the village and '
         'people tend to go out.'),
        ('Caller', 'Is there a deposit?'),
        ('Office', 'Two hundred, refundable up to four weeks before. After '
         'that we keep it.'),
        ('Caller', 'What do I need to send?'),
        ('Office', 'A short sample of your own translation work. Six '
         'hundred words, and it does not have to be published.'),
        ('Caller', 'Into English or out of it?'),
        ('Office', 'Whichever direction you want to work in on the course. '
         'Most people send the direction they find harder.'),
        ('Caller', 'Mine is into English.'),
        ('Office', 'Then send that. And a note of which language pairs you '
         'work with, which goes to the tutor rather than to me.'),
        ('Caller', 'How many on the course?'),
        ('Office', 'Fourteen maximum. We had eleven last year.'),
        ('Caller', 'Is there anything on terminology management? That is '
         'the part I am weakest on.'),
        ('Office', 'Two afternoons, and they are the two people ask for '
         'more of every year.'),
        ('Caller', 'Can I get there without a car?'),
        ('Office', 'There is a bus from Thirsk station, the four twenty, '
         'and it is the only one that meets a train.'),
        ('Caller', 'Four twenty. And if I miss it?'),
        ('Office', 'A taxi is about eighteen pounds and we can book one if '
         'you tell us the train.'),
        ('Caller', 'Lovely. How do I apply?'),
        ('Office', 'Online, and quote reference T as in Thomas, six two '
         'nine.'),
        ('Caller', 'T six two nine. Thank you.')],
       items=[
        ('Course: ____________ translation', None, 'technical',
         'Chosen over the literary course because the caller works on '
         'patents.'),
        ('Dates: 16 to 23 April, starting on a ____________', None,
         'Tuesday',
         'Moved from Monday because of the bank holiday.'),
        ('Residential fee: £____________', None, '940',
         'Against 680 for non-residential.'),
        ('Meals included: breakfast and ____________', None, 'dinner',
         'Lunch is taken in the village instead.'),
        ('Deposit: £200, refundable up to ____________ weeks before',
         None, 'four',
         'After that the centre keeps it.'),
        ('Send a sample of ____________ words', None, '600',
         'Of the applicant’s own translation work, published or not.'),
        ('Maximum number on the course: ____________', None, 'fourteen',
         'There were eleven participants last year.'),
        ('Sessions on terminology management: ____________ afternoons',
         None, 'two',
         'The sessions people ask for more of every year.'),
        ('Bus from Thirsk station at ____________', None, '4.20',
         'The only bus that meets a train.'),
        ('Application reference: T-____________', None, '629',
         'Quoted when applying online; spelled out at the end of the call.')]),

  dict(no=2, first=11, part='Part 2', band='l2',
       heading='A talk on a town’s new bus contract',
       task='A talk by a transport officer to a residents’ forum · multiple choice',
       qtype='Questions 11-20',
       blurb='Questions 11–20. Choose the correct letter, A, B, C or D.',
       script=[
        ('Officer', 'Thank you for coming out on a wet evening. I will '
         'explain what changes in March, and be specific about one thing '
         'we got wrong.'),
        ('Officer', 'The contract first. From March the town moves from '
         'eleven separate commercial routes to a single contract covering '
         'the whole network. We set the timetable, the fares and the '
         'standards; one operator runs the buses for a fee.'),
        ('Officer', 'The reason is not cost. The new arrangement costs '
         'about four per cent more. The reason is that we could not '
         'require a route to exist: an operator withdrew the evening '
         'service on the Wentbridge route with eight weeks’ notice and we '
         'could not stop it.'),
        ('Officer', 'So the four per cent buys enforceable minimum '
         'service. Every route must run until eleven at night, seven days '
         'a week, with a penalty for each cancelled journey.'),
        ('Officer', 'Fares. A single journey anywhere becomes one pound '
         'ninety, a rise for the two shortest routes and a fall for '
         'everybody else. The daily cap is four pounds fifty and applies '
         'automatically, so you need not decide in advance.'),
        ('Officer', 'The timetable is simpler. Buses go every twenty '
         'minutes on every route, all day, instead of twelve at peak and '
         'forty off peak. The morning peak gets slightly worse and the '
         'middle of the day much better.'),
        ('Officer', 'Now what we got wrong: the consultation. Published '
         'in August, four-week window, ninety-one responses from a town '
         'of forty thousand. I am not going to call that '
         'consultation.'),
        ('Officer', 'So we have reopened one part. The route structure is '
         'fixed, the contract being signed; the stopping pattern on the '
         'Wentbridge and Carr Lane routes is not. You have until the end '
         'of January.'),
        ('Officer', 'One more change. School journeys stay as they are '
         'for a year and then join the main contract, because every '
         'school route we have touched has gone wrong in the first week '
         'of term.'),
        ('Officer', 'Finally, how you will know whether it worked. Four '
         'figures monthly: punctuality, cancelled journeys, passenger '
         'numbers and complaints, against a baseline of the twelve months '
         'to last December. Hold us to the cancelled journeys figure, '
         'because that is the one the penalty attaches to.')],
       items=[
        ('From March the town\u2019s buses will be run under',
         ['eleven commercial routes', 'a single contract for the whole network', 'two competing contracts', 'direct council operation'],
         1, 'The council specifies and one operator runs the network.',
         {0: 'Eleven commercial routes is the old arrangement.', 2: 'One operator runs it, not two competing ones.', 3: 'The council specifies; an operator runs the buses.'}),
        ('The reason for the change is',
         ['lower cost', 'the power to require a route to exist', 'new vehicles', 'a government order'],
         1, 'The new arrangement costs about four per cent more.',
         {0: 'The new arrangement costs four per cent more.', 2: 'New vehicles are not given as the reason.', 3: 'No government order is mentioned in the talk.'}),
        (
         'Under the old system an operator withdrew the evening '
         'service on the Wentbridge route with',
         ['two weeks\u2019 notice', 'four weeks\u2019 notice', 'eight weeks\u2019 notice', 'no notice'],
         2, 'And the council had no power to prevent it.',
         {0: 'Two weeks is shorter than the notice given.', 1: 'Four weeks is the consultation window, not the notice.', 3: 'Notice was given; the council simply could not refuse.'}),
        ('Every route in the new contract must run until',
         ['ten at night', 'eleven at night', 'midnight', 'the last train'],
         1, 'Seven days a week, with penalties for cancellations.',
         {0: 'Ten at night is an hour earlier than the standard.', 2: 'Midnight is later than the contract requires.', 3: 'No train time is mentioned in the contract.'}),
        ('A single journey anywhere in the town will cost',
         ['\u00a31.50', '\u00a31.90', '\u00a32.50', '\u00a34.50'], 1,
         'A rise for the two shortest routes and a fall for the rest.',
         {0: '\u00a31.50 is below the new single fare.', 2: '\u00a32.50 is above the new single fare.', 3: '\u00a34.50 is the daily cap, not the single fare.'}),
        ('The daily cap applies',
         ['on request', 'automatically', 'only with a smartcard', 'at weekends only'],
         1, 'So no decision is needed in advance.',
         {0: 'No request is needed for the cap to apply.', 2: 'No smartcard condition is mentioned.', 3: 'The cap applies every day, not only at weekends.'}),
        ('Under the new timetable buses will run',
         ['every twelve minutes at peak', 'every twenty minutes all day', 'every forty minutes off peak', 'hourly on Sundays'],
         1, 'Replacing a peak and off-peak pattern.',
         {0: 'Twelve minutes at peak is the old pattern.', 2: 'Forty minutes off peak is the old pattern.', 3: 'Sunday service runs on the same twenty-minute pattern.'}),
        ('The consultation received',
         ['nine responses', 'ninety-one responses', 'four hundred responses', 'no responses'],
         1,
         'From a town of forty thousand people, which he declines to '
         'call consultation.',
         {0: 'Nine is a tenth of the responses received.', 2: 'Four hundred is far more than were received.', 3: 'Ninety-one responses did arrive.'}),
        ('What has been reopened for comment is',
         ['the route structure', 'the stopping pattern on two routes', 'the fares', 'the school journeys'],
         1, 'Until the end of January, since the contract is signed.',
         {0: 'The route structure is fixed, the contract being signed.', 2: 'Fares are set in the contract.', 3: 'School journeys stay as they are for a year.'}),
        (
         'He asks residents to hold the council particularly to the '
         'figure for',
         ['punctuality', 'cancelled journeys', 'passenger numbers', 'complaints'],
         1, 'Because that is the figure the penalty attaches to.',
         {0: 'Punctuality is one of the four figures but carries no '
             'penalty.', 2: 'Passenger numbers carry no penalty.', 3: 'Complaints carry no penalty either.'})]),

  dict(no=3, first=21, part='Part 3', band='l3',
       heading='Three students plan a dissertation study',
       task='A discussion between two students and their supervisor · multiple choice and matching',
       qtype='Questions 21-30',
       blurb='Questions 21–30. Choose the correct letter, A, B, C or D, '
             'and match each view to the speaker who holds it.',
       script=[
        ('Supervisor', 'You have both written "we will survey local '
         'residents" and neither of you has said how many or about '
         'what.'),
        ('Clemency', 'Our question is whether the new bus contract changed '
         'how people travel.'),
        ('Supervisor', 'That is a good question and you cannot answer it '
         'with a survey next March.'),
        ('Olufemi', 'Because we have no before?'),
        ('Supervisor', 'Because you have no before. The contract starts in '
         'March. A survey in April tells you what people do in April.'),
        ('Clemency', 'We could ask people what they used to do.'),
        ('Olufemi', 'Which is a recall question and they are notoriously '
         'unreliable about travel, particularly about frequency.'),
        ('Clemency', 'I know, and I would rather have unreliable recall '
         'than nothing at all.'),
        ('Supervisor', 'You have something better than either. The council '
         'publishes passenger numbers monthly with a baseline for the '
         'twelve months to last December.'),
        ('Olufemi', 'Then our study is reading somebody else’s '
         'numbers.'),
        ('Supervisor', 'Your study is explaining them, which is harder and '
         'more interesting. The numbers will tell you that boardings '
         'changed. They will not tell you who changed or why.'),
        ('Clemency', 'So the survey answers the why.'),
        ('Supervisor', 'The survey answers the who, if you design it '
         'properly. The why needs interviews.'),
        ('Olufemi', 'How many interviews?'),
        ('Supervisor', 'Twelve to fifteen, and that is not a small number '
         'for a dissertation. People hear twelve and think it sounds '
         'thin.'),
        ('Clemency', 'It does sound thin.'),
        ('Supervisor', 'It sounds thin and it is not, because you are not '
         'estimating a proportion. You are finding out what kinds of '
         'reason exist, and new kinds stop appearing after about ten '
         'conversations.'),
        ('Olufemi', 'Can I raise the thing nobody has raised? We both live '
         'on the Wentbridge route.'),
        ('Clemency', 'That is true and I do not see it as a problem.'),
        ('Olufemi', 'It is a problem if we recruit through people we know, '
         'because Wentbridge is the route that lost its evening service, '
         'and everybody on it has a grievance ready.'),
        ('Supervisor', 'That is the sharpest point made this afternoon. '
         'What would you do about it?'),
        ('Olufemi', 'Recruit at bus stops on three routes, not one, and '
         'record the route against every interview.'),
        ('Clemency', 'Then I would add weekday and weekend, because the '
         'timetable change does different things on different days.'),
        ('Supervisor', 'Both of those. Anything else missing?'),
        ('Clemency', 'The people who stopped using the bus. They are not '
         'at a bus stop.'),
        ('Supervisor', 'And they are the most informative group you could '
         'possibly reach, which is why almost nobody reaches them. Have a '
         'think about where they are.'),
        ('Olufemi', 'Car parks?'),
        ('Supervisor', 'Car parks, or the two streets where the evening '
         'service was withdrawn. Write me four hundred words on '
         'recruitment by Friday and we will decide then.')],
       items=[
        ('The supervisor\u2019s first objection to the plan is that',
         ['the question is too broad', 'there is no measurement from before the change', 'surveys are unreliable', 'the sample is too small'],
         1,
         'A survey in April tells them only what people do in April.',
         {0: 'He calls the question a good one.', 2: 'Recall unreliability is his second objection.', 3: 'Sample size is raised later, not first.'}),
        (
         'Who objects that recall questions about travel are '
         'unreliable?',
         ['Clemency', 'Olufemi', 'the supervisor', 'nobody'], 1,
         'Particularly about frequency of travel.',
         {0: 'Clemency says she would rather have unreliable recall.', 2: 'The supervisor\u2019s first objection was the missing before.', 3: 'One of the two students does raise it.'}),
        ('Who says they would prefer unreliable recall to nothing?',
         ['Clemency', 'Olufemi', 'the supervisor', 'nobody'], 0,
         'Said immediately after the objection to recall.',
         {1: 'Olufemi objects that recall about travel is unreliable.', 2: 'The supervisor points to the published numbers instead.', 3: 'One of the two students does say it.'}),
        (
         'The supervisor says the published passenger numbers will '
         'show that boardings changed but not',
         ['by how much', 'who changed or why', 'on which routes', 'in which months'],
         1, 'Which is what the students\u2019 study is for.',
         {0: 'The numbers do give the size of the change.', 2: 'Routes are recorded in the published figures.', 3: 'The figures are published monthly, so months are '
             'covered.'}),
        ('According to the supervisor, the survey answers',
         ['the why', 'the who', 'the how much', 'the when'], 1,
         'The why requires interviews instead.',
         {0: 'The why needs interviews, not the survey.', 2: 'The published numbers give the how much.', 3: 'The monthly figures give the when.'}),
        ('The number of interviews recommended is',
         ['five to eight', 'twelve to fifteen', 'twenty to thirty', 'fifty'],
         1, 'Which he says sounds thin and is not.',
         {0: 'Five to eight is below the number he recommends.', 2: 'Twenty to thirty is more than a dissertation needs.', 3: 'Fifty is far beyond what he recommends.'}),
        ('Twelve interviews are defensible because the study is',
         ['estimating a proportion', 'finding what kinds of reason exist', 'testing a hypothesis', 'piloting a survey'],
         1,
         'And new kinds stop appearing after about ten conversations.',
         {0: 'Estimating a proportion is what it is not doing.', 2: 'No hypothesis is being tested by the interviews.', 3: 'The interviews are not a pilot for the survey.'}),
        (
         'Who raises the problem that both students live on the same '
         'bus route?',
         ['Clemency', 'Olufemi', 'the supervisor', 'nobody'], 1,
         'Called the sharpest point of the afternoon.',
         {0: 'Clemency replies that she does not see it as a problem.', 2: 'The supervisor calls it the sharpest point made.', 3: 'One of the two students does raise it.'}),
        ('Who proposes adding weekday and weekend recruitment?',
         ['Clemency', 'Olufemi', 'the supervisor', 'nobody'], 0,
         'Because the timetable change differs by day.',
         {1: 'Olufemi proposes three routes rather than one.', 2: 'The supervisor accepts both additions.', 3: 'One of the two students does propose it.'}),
        (
         'The group the supervisor calls most informative and hardest '
         'to reach is',
         ['evening passengers', 'people who stopped using the bus', 'school pupils', 'car owners'],
         1,
         'They are not at a bus stop, so almost nobody reaches them.',
         {0: 'Evening passengers are still at a bus stop.', 2: 'School pupils stay on the old arrangement for a year.', 3: 'Car parks are where to find them, not the group itself.'})]),

  dict(no=4, first=31, part='Part 4', band='l4',
       heading='A lecture on the coming of standard time',
       task='A lecture on the standardisation of clocks · note completion',
       qtype='Questions 31-40',
       blurb='Questions 31–40. Complete the notes. Write ONE WORD AND/OR '
             'A NUMBER for each answer.',
       script=[
        ('Lecturer', 'Until the 1840s every town in Britain kept its own '
         'time, set by the sun, and the differences were real rather than '
         'notional: Bristol was ten minutes behind London and nobody found '
         'that inconvenient, because nothing happened fast enough for ten '
         'minutes to matter.'),
        ('Lecturer', 'The railway made it matter, and it is worth being '
         'precise about how. The problem was not passengers missing '
         'trains. The problem was single-track lines, where two trains '
         'approaching from opposite ends are kept apart by a timetable, '
         'and a timetable that means different things at each end of the '
         'line is a mechanism for collisions.'),
        ('Lecturer', 'So the railways standardised before the country did. '
         'The Great Western adopted London time across its network in '
         '1840, others followed through the decade, and by 1847 most '
         'companies had agreed to run on what they called railway time, '
         'which was Greenwich time by another name.'),
        ('Lecturer', 'The country followed slowly and with resistance that '
         'was not merely sentimental. A town’s time was set by its own '
         'authority, and adopting London’s was a transfer of a small '
         'piece of local power. Several towns ran two times for years: '
         'Bristol’s Corn Exchange clock was given a second minute hand, '
         'and you can still see it.'),
        ('Lecturer', 'Parliament settled it in 1880, forty years after the '
         'Great Western. The Act made Greenwich mean time the legal time '
         'throughout Great Britain, which sounds like the end of the story '
         'and is the middle of it, because the same problem had meanwhile '
         'appeared between countries.'),
        ('Lecturer', 'The international version was harder for an obvious '
         'reason. Picking a prime meridian means picking a nation, and '
         'everybody understood that the nation whose meridian was chosen '
         'acquired something. At the Washington conference of 1884, '
         'twenty-five nations voted for Greenwich, France abstained, and '
         'France went on using Paris time in its official documents for '
         'another thirty-five years.'),
        ('Lecturer', 'The argument for Greenwich was not national merit, '
         'and the delegates said so. It was that about two thirds of the '
         'world’s shipping already carried charts numbered from Greenwich, '
         'so choosing it meant reprinting the fewest charts. The strongest '
         'argument in the room was about the cost of paper.'),
        ('Lecturer', 'Now the thing I want you to take from this, which is '
         'about standards generally rather than about clocks. At every '
         'stage, the standard was adopted first by whoever bore the cost '
         'of its absence. Railways standardised time because railways '
         'crashed; towns did not, because towns did not.'),
        ('Lecturer', 'And that gives you a general prediction which holds '
         'up remarkably well across the history of standardisation, from '
         'screw threads to shipping containers to character encoding: the '
         'standard arrives when the cost of incompatibility lands on '
         'somebody with the power to end it, and not when the '
         'incompatibility becomes obvious. Those are usually decades '
         'apart.'),
        ('Lecturer', 'One last detail, because it is my favourite. The '
         '1880 Act had a consequence nobody anticipated: a licensing case '
         'turned on whether a pub had closed at local time or Greenwich '
         'time, and the answer decided whether a man went to prison.')],
       items=[
        ('Before the 1840s, Bristol was ____________ minutes behind '
         'London.', None, 'ten',
         'A real difference that nobody found inconvenient.'),
        ('The railway problem was not missed trains but ____________-track '
         'lines.', None, 'single',
         'Where a timetable keeps two trains apart.'),
        ('The ____________ Western adopted London time across its network '
         'in 1840.', None, 'Great',
         'The first railway company to standardise.'),
        ('By 1847 most companies ran on what they called ____________ '
         'time.', None, 'railway',
         'Which was Greenwich time by another name.'),
        ('Resistance was partly because a town’s time was a small piece '
         'of local ____________.', None, 'power',
         'Set by the town’s own authority.'),
        ('Bristol’s Corn Exchange clock was given a second minute '
         '____________.', None, 'hand',
         'So that the town could run two times at once.'),
        ('Parliament made Greenwich mean time legal throughout Great '
         'Britain in ____________.', None, '1880',
         'Forty years after the Great Western adopted it.'),
        ('At the Washington conference, ____________ nations voted for '
         'Greenwich.', None, 'twenty-five',
         'With France abstaining and continuing to use Paris time.'),
        ('The decisive argument for Greenwich was that it meant reprinting '
         'the fewest ____________.', None, 'charts',
         'Two thirds of world shipping already used Greenwich-numbered '
         'charts.'),
        ('The general prediction is that a standard arrives when the cost '
         'of incompatibility lands on somebody with the ____________ to '
         'end it.', None, 'power',
         'Rather than when the incompatibility becomes obvious.')]),
 ],
)
