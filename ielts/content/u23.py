# -*- coding: utf-8 -*-
"""Unit 23 - Public Health. IELTS Volume 3, band 6.0."""

_CASES = dict(kind='line', title='Reported cases and hospital admissions',
              sub='one outbreak, twelve weeks', ylab='per 100,000',
              x=['Wk 1', 'Wk 3', 'Wk 5', 'Wk 7', 'Wk 9', 'Wk 11'],
              series=[('Reported cases', [12, 48, 140, 96, 44, 21]),
                      ('Hospital admissions', [3, 7, 18, 29, 24, 12])])

UNIT = dict(
 n=23, vol=3, level='B2', band='6.0',
 theme='Public Health',
 opener=(
   'A vaccination notice, four people who ignored advice, and two lines on a '
   'graph that peak three weeks apart for a reason worth understanding. The '
   'unit ends on a single number that governments used to run a country, and '
   'on why that number describes a population nobody lives in.'),

 cycles=[
  dict(
   sub='A vaccination programme',
   step=1,
   read=[
    dict(heading='Autumn vaccination: who is eligible',
         kind='Public notice', task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-5',
         skill=('Eligibility lists are read for the exceptions',
                ['A notice that lists who qualifies will also list who '
                 'qualifies under a different condition, and the second list '
                 'is where the questions come from.',
                 'Mark every also, in addition and if you. Those sentences '
                 'carry more questions than the main list does.']),
         paras=[
          'The autumn vaccination is offered without charge to everyone aged '
          '65 and over, to anyone aged 6 months or older with a long-term '
          'health condition on the published list, and to pregnant women at '
          'any stage of pregnancy.',
          'You are also eligible if you live with somebody who has a weakened '
          'immune system, or if you are the main carer for an older or '
          'disabled person. These two routes are the least used and the most '
          'often missed, because people assume eligibility follows from their '
          'own health and not from the household they are in.',
          'Front-line health and social care staff are vaccinated through '
          'their employer, not through this programme. Staff who cannot '
          'access an employer scheme may book here, and should bring proof of '
          'employment to the appointment.',
          'Children between 2 and 11 are offered a nasal spray instead of an '
          'injection. Where a nasal spray is unsuitable for medical or other '
          'reasons, an injection is available on request and no explanation '
          'is required.'],
         items=[
          ('The vaccination is free for everyone aged',
           ['50 and over', '60 and over', '65 and over', '70 and over'], 2,
           'Paragraph 1, alongside those with a listed condition and pregnant '
           'women.'),
          ('Which group is vaccinated through their employer?',
           ['Carers', 'Pregnant women', 'Front-line health and care staff',
            'Children'], 2,
           'Paragraph 3, though they may book here if no employer scheme '
           'exists.'),
          ('Children aged 2 to 11 are normally offered',
           ['an injection', 'a nasal spray', 'nothing', 'a choice'], 1,
           'Paragraph 4, with an injection available on request.'),
          ('You are eligible if you are the main ____________ for an older or '
           'disabled person.', None, 'carer',
           'Paragraph 2, one of the two least-used routes.'),
          ('Staff booking here should bring proof of ____________.', None,
           'employment',
           'Paragraph 3, where no employer scheme is available to them.')]),
    dict(heading='How to book and what to bring',
         kind='Procedure notice', task='Flow-chart completion',
         band='gt_short', qtype='Questions 6-9',
         paras=[
          'Book online, by telephone or at a participating pharmacy. The '
          'online system opens three weeks before the first clinic and '
          'releases appointments daily, so a week with nothing available is '
          'worth checking again the following morning.',
          'Bring your booking reference and, if you are attending under the '
          'household or carer route, something showing the address or the '
          'caring relationship. A letter addressed to both of you is enough; '
          'no formal documentation is required.',
          'Appointments last about ten minutes, of which the vaccination '
          'itself takes seconds. You will be asked to wait for fifteen '
          'minutes afterwards in the area provided, and you should not drive '
          'during that period.',
          'If you are unwell with a fever on the day, do not attend. '
          'Rebooking is free and can be done through the same system; a '
          'missed appointment with no notice is recorded, and three of them '
          'in one season suspend online booking for the rest of it.'],
         items=[
          ('The online system opens ____________ weeks before the first '
           'clinic.', None, 'three',
           'Paragraph 1, releasing appointments daily rather than all at '
           'once.'),
          ('Under the household route, bring something showing the '
           '____________.', None, 'address',
           'Paragraph 2, or the caring relationship; a letter to both is '
           'enough.'),
          ('You must wait ____________ minutes after the vaccination.', None,
           'fifteen', 'Paragraph 3, and should not drive during that '
           'period.'),
          ('____________ missed appointments in one season suspend online '
           'booking.', None, 'Three',
           'Paragraph 4, where rebooking in advance is free.')])],
   listen=[
    dict(heading='Booking a vaccination', part='Part 1',
         task='A call to a vaccination booking line', band='l1',
         qtype='Questions 10-14',
         script=[
          ('Clerk', 'Vaccination bookings, Ingrid speaking.'),
          ('Caller', 'Hello. I want to book for my mother, and possibly for '
           'myself, although I am not sure I qualify.'),
          ('Clerk', 'Let us do your mother first. Can I take her date of '
           'birth?'),
          ('Caller', 'The fourth of March, nineteen fifty-one.'),
          ('Clerk', 'So she is seventy-four. She qualifies on age. And her '
           'postcode?'),
          ('Caller', 'It is P E nine, two L T.'),
          ('Clerk', 'P E nine, two L T. I have two clinics near her. '
           'Thursday the sixth at the health centre, or Saturday the eighth '
           'at the pharmacy on Market Street.'),
          ('Caller', 'Saturday is better. She does not like going out in the '
           'dark.'),
          ('Clerk', 'Saturday the eighth it is, at ten forty. Now, about '
           'you.'),
          ('Caller', 'I am forty-six and perfectly healthy, so I assumed '
           'not.'),
          ('Clerk', 'Do you live with her?'),
          ('Caller', 'I do, since her operation.'),
          ('Clerk', 'Then you may well qualify as a carer, and this is the '
           'route people miss constantly. Are you her main carer?'),
          ('Caller', 'I suppose I am. I had not thought of it as a role.'),
          ('Clerk', 'Most people have not. Bring something with both your '
           'names on it, a letter or a bill, and that is all the proof we '
           'need. I will put you on the same appointment, so one journey '
           'covers both of you.'),
          ('Caller', 'That had not occurred to me either.'),
          ('Caller', 'Should I bring anything else?'),
          ('Clerk', 'Her booking reference, which I will text you, and something with both your names on it for the carer route. A bank letter or a utility bill is fine; we do not need anything formal.'),
          ('Caller', 'And how long will it take?'),
          ('Clerk', 'Ten minutes each, and then fifteen minutes sitting down afterwards, which people forget when they park.'),
          ('Clerk', 'It is the most useful thing I say all day.')],
         items=[
          ('Mother’s age: ____________', None, '74',
           'From the date of birth given, which qualifies her on age '
           'alone.'),
          ('Postcode: ____________', None, 'PE9 2LT',
           'Given letter by letter and read back by the clerk.'),
          ('Appointment: Saturday the ____________', None, 'eighth',
           'At the Market Street pharmacy, chosen over the Thursday '
           'clinic.'),
          ('Time: ____________', None, '10.40',
           'Both appointments are placed together so one journey covers '
           'them.'),
          ('The caller qualifies as a ____________.', None, 'carer',
           'Which the clerk calls the route people miss constantly.')]),
    dict(heading='A short talk: advice people follow and ignore',
         part='Part 2', task='A talk to public health trainees', band='l2',
         qtype='Questions 15-18',
         script=[
          ('Speaker', 'I have spent nineteen years writing health advice that '
           'people do not take, and I want to tell you what I have learned '
           'about why, because almost none of it is what I expected when I '
           'started.'),
          ('Speaker', 'The first thing is that people are not ignorant. In '
           'survey after survey, those who do not follow a piece of advice '
           'can state it accurately. They know what we said. Campaigns built '
           'on the assumption that the message has not arrived are solving a '
           'problem that does not exist.'),
          ('Speaker', 'The second is that advice competes with other advice, '
           'and we rarely acknowledge this. A parent told to bring a child in '
           'for a vaccination has also been told not to take time off work, '
           'not to use the car for short journeys, and not to bother the '
           'health service with minor things. We issue those messages from '
           'different offices and the parent receives them all from the same '
           'authority.'),
          ('Speaker', 'The third thing is the one I find hardest to teach. '
           'The advice most often ignored is the advice that is easiest to '
           'follow. Washing hands, closing a window, moving a chair. We '
           'assume that effort is the obstacle and so we concentrate on '
           'making things easier, and the evidence does not support that at '
           'all.'),
          ('Speaker', 'What does predict following advice is whether somebody '
           'has seen the consequence of not following it, preferably in '
           'somebody they know. That is uncomfortable, because it is not '
           'something a campaign can manufacture, and the campaigns that try '
           'are the ones people describe as frightening.'),
          ('Speaker', 'So my working rule is this: do not tell people things '
           'they already know, do not make it easier when it is already easy, '
           'and find out what the competing advice is before you add '
           'another.')],
         items=[
          ('What does the speaker say about people who ignore advice?',
           ['They have not heard it', 'They can state it accurately',
            'They distrust the source', 'They forget it'], 1,
           'Campaigns assuming the message has not arrived solve a '
           'non-existent problem.'),
          ('Her second point is that advice',
           ['is too complicated', 'competes with other advice',
            'changes too often', 'comes too late'], 1,
           'Issued from different offices and received from one '
           'authority.'),
          ('Which advice is most often ignored?',
           ['The most expensive', 'The hardest to follow',
            'The easiest to follow', 'The most recent'], 2,
           'Which she says is the thing she finds hardest to teach.'),
          ('What predicts following advice?',
           ['Understanding the science', 'Having seen the consequence',
            'Trusting the government', 'Being reminded often'], 1,
           'Preferably in somebody the person knows.')])],
   speak=dict(
    part='Part 1', focus='Health services where you live',
    intro=('Two or three sentences each. Everyday experience is the right '
           'material; no medical knowledge is being tested.'),
    qs=['Is it easy to see a doctor where you live?',
        'Do people in your country take advice about health seriously?',
        'What do you do when you have a cold?',
        'Has the way people look after their health changed?'],
    shape=[('answer', 'Reasonably easy, if you are willing to wait.'),
           ('support', 'You ring at eight and take whatever is left.'),
           ('follow-up', 'Which works for me and would not work with '
            'children.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Writing about an appointment',
         prompt=('You missed a medical appointment and have been told you '
                 'cannot book online for the rest of the season. Write a '
                 'letter to the health centre. In your letter: give the '
                 'details of the appointment you missed; explain what '
                 'happened; ask them to restore your online booking. Write at '
                 'least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing about an appointment on Saturday 8 November at 10.40 '
          'at the Market Street pharmacy, booking reference VC/4471, which I '
          'did not attend. I have since received a letter telling me that '
          'online booking has been suspended for the rest of the season.',
          'I should explain what happened. My mother, whom I care for, was '
          'admitted to hospital on the Friday evening and I was with her '
          'until the Saturday afternoon. I did telephone the booking line at '
          '8.15 on the Saturday morning, but the line was not open at '
          'weekends and the website offers no way to cancel within twelve '
          'hours of an appointment. I enclose a copy of the hospital letter '
          'confirming the admission.',
          'I would be grateful if you would restore my online booking and '
          'remove the missed appointment from my record. I would also '
          'suggest, for other people in the same position, that the website '
          'allow a late cancellation to be recorded even when it is too late '
          'to be useful.',
          'Yours faithfully,',
          'R. Vasquez'],
         notes=[
          'The explanation does the work by including what the writer tried '
          'to do. "I could not cancel" invites doubt; "I telephoned at 8.15 '
          'and the line was closed" cannot be argued with.',
          'The suggestion in the last paragraph is not required by the task '
          'and belongs there anyway: it shows the writer is not only asking '
          'for an exception. Keep it to one sentence, after the request.',
          'Enclosing evidence is mentioned in a clause, not a paragraph. A '
          'letter that spends three sentences on an attachment has lost the '
          'proportion of the task.'],
         criterion=[('An explanation that includes what was attempted',
                     'Task Achievement'),
                    ('A request followed by a short general suggestion',
                     'Task Response'),
                    ('Evidence mentioned in proportion',
                     'Coherence and Cohesion')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Explaining what prevented you',
    explain=('A letter explaining a failure is believed when it says what was '
             'tried and what stopped it. These patterns give the obstacle and '
             'the attempt in one sentence.'),
    examples=['I did telephone the booking line, but it was not open at '
              'weekends.',
              'The website offers no way to cancel within twelve hours.',
              'I was unable to attend because my mother had been admitted to '
              'hospital.',
              'By the time I was free, the appointment had passed.'],
    task='Rewrite each excuse so that it names an attempt and an obstacle.',
    items=[('I could not come.',
            'I was unable to attend because I was at the hospital with a '
            'relative.'),
           ('Nobody answered.',
            'I telephoned twice on the Saturday morning, and the line was '
            'closed at weekends.'),
           ('The website did not work.',
            'The website does not accept cancellations within twelve hours '
            'of an appointment.'),
           ('I forgot.',
            'I had noted the appointment but was called away that morning '
            'and did not think to cancel until afterwards.'),
           ('It was too late.',
            'By the time I was free to telephone, the appointment had '
            'already passed.')]),
   vocab=[('eligible', 'allowed to receive something'),
          ('immune system', 'the body’s defence against infection'),
          ('nasal spray', 'a medicine breathed in through the nose'),
          ('booking reference', 'the code identifying an appointment'),
          ('suspend', 'to stop something temporarily'),
          ('rebook', 'to arrange a new appointment'),
          ('front-line', 'working directly with the public'),
          ('participating', 'taking part in a scheme')],
   expr=[('I am writing about an appointment on',
          'opens with the matter and the date'),
         ('I should explain what happened',
          'signals an account rather than an excuse'),
         ('I would also suggest, for other people in the same position',
          'generalises a complaint into a proposal'),
         ('I enclose a copy of', 'mentions evidence without dwelling on '
          'it')],
   trans=['since', 'but', 'I would also', 'for other people'],
  ),

  dict(
   sub='Advice people follow and ignore',
   step=2,
   read=[
    dict(heading='Four people on health advice',
         kind='Four short texts', task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 19-24',
         paras=[
          'A  Sigrun: I followed every piece of advice for about a year and '
          'then I stopped, and the reason was that it kept changing. Butter '
          'was bad and then it was fine. I understand why that happens and I '
          'still found it exhausting, and exhaustion is a reason people give '
          'up that nobody plans for.',
          'B  Oluwafemi: I ignore most of it and I am not proud of that. What '
          'I would say in my defence is that I have been given forty '
          'instructions and no sense of which three matter. If somebody told '
          'me the three, I would do the three.',
          'C  Petra: I started doing all of it after my brother had a stroke '
          'at fifty-one. Nothing in the leaflets had moved me and watching '
          'him learn to hold a cup again moved me permanently. I am aware '
          'that this is not a strategy anybody can recommend.',
          'D  Dawit: The advice assumes a life I do not have. Walk thirty '
          'minutes a day: I drive a van for ten hours. Cook from fresh: I get '
          'home at nine. I am not refusing the advice. I am saying it was '
          'written for somebody with a different timetable.'],
         items=[
          ('Which person stopped because the guidance changed?',
           ['Sigrun', 'Oluwafemi', 'Petra', 'Dawit'], 0,
           'She names exhaustion as a reason nobody plans for.'),
          ('Which person wants to know which advice matters most?',
           ['Sigrun', 'Oluwafemi', 'Petra', 'Dawit'], 1,
           'Forty instructions and no sense of which three matter.'),
          ('Which person changed after seeing somebody else’s illness?',
           ['Sigrun', 'Oluwafemi', 'Petra', 'Dawit'], 2,
           'Watching her brother relearn to hold a cup.'),
          ('Which person says the advice assumes a different life?',
           ['Sigrun', 'Oluwafemi', 'Petra', 'Dawit'], 3,
           'Ten hours driving a van, home at nine.'),
          ('Petra recommends that others wait for a shock before changing.',
           ['Yes', 'No', 'Not Given'], 1,
           'She says explicitly that it is not a strategy anybody can '
           'recommend.'),
          ('Dawit believes the advice is wrong.',
           ['Yes', 'No', 'Not Given'], 1,
           'He says he is not refusing it; his objection is about the '
           'timetable it assumes.')])],
   listen=[
    dict(heading='Two public health officers disagree', part='Part 3',
         task='A planning discussion', band='l3', qtype='Questions 25-29',
         script=[
          ('Annelise', 'The uptake figures are in. Sixty-one per cent '
           'overall, which is up two points, and thirty-four in the two wards '
           'we targeted.'),
          ('Faisal', 'Thirty-four after a campaign aimed at them '
           'specifically. That is the number I would lead with.'),
          ('Annelise', 'It was twenty-nine last year.'),
          ('Faisal', 'And the overall figure rose by two without any campaign '
           'at all, so five points in the targeted wards is three points of '
           'campaign and two points of whatever moved everybody.'),
          ('Annelise', 'That is a fairer way to read it than mine and it is '
           'still a success.'),
          ('Faisal', 'A small one, for forty thousand pounds. I am not '
           'arguing we stop. I am arguing we find out which part of it '
           'worked, and at the moment we cannot, because we changed four '
           'things at once.'),
          ('Annelise', 'We changed four things because we had one season.'),
          ('Faisal', 'I know, and next season we will have one season again, '
           'and we will say the same thing. At some point somebody has to '
           'run two wards differently.'),
          ('Annelise', 'Then propose that, with the wards named, and I will '
           'back it. What I will not back is reporting thirty-four as a '
           'failure, because the people who did come were the hardest to '
           'reach and the staff worked weekends for them.'),
          ('Faisal', 'I would never report it as a failure. I would report it '
           'as a number we cannot yet explain, which is different and less '
           'satisfying.'),
          ('Faisal', 'One more thing for the paper. We should say what we would need to see next year to call it working, and say it now, before we have the figure.'),
          ('Annelise', 'Thirty-eight per cent, and the overall figure flat.'),
          ('Faisal', 'Then put that in writing and neither of us can move the target afterwards, which is the thing this department does every single year.'),
          ('Annelise', 'Less satisfying is accurate. Write it that way and I will sign it.')],
         items=[
          ('Uptake in the targeted wards was',
           ['twenty-nine per cent', 'thirty-four per cent',
            'sixty-one per cent', 'two per cent'], 1,
           'Up from twenty-nine the previous year.'),
          ('Faisal argues that of the five-point rise,',
           ['all is the campaign', 'three points are the campaign',
            'none is the campaign', 'it cannot be estimated'], 1,
           'Because the untargeted overall figure rose by two anyway.'),
          ('Why does he say they cannot tell what worked?',
           ['The sample is small', 'They changed four things at once',
            'The data is late', 'Staff were untrained'], 1,
           'Which is his argument for running two wards differently.'),
          ('What will Annelise not support?',
           ['A new campaign', 'Reporting thirty-four as a failure',
            'Naming the wards', 'Spending more'], 1,
           'Because those who came were the hardest to reach.'),
          ('How does Faisal propose to describe the result?',
           ['A failure', 'A success', 'A number they cannot yet explain',
            'An improvement'], 2,
           'Which he calls different and less satisfying.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Advice',
    intro=('Short answers, then the long turn. Four bullets in order, equal '
           'weight, developed one at a time.'),
    cue=('Describe some advice you were given and did not take.',
         ['what the advice was', 'who gave it to you',
          'why you did not take it',
          'and explain what you think about it now']),
    qs=['Do you ask other people for advice?',
        'Is advice from family different from advice from experts?',
        'Now look at the card. You have one minute to make notes.',
        'Why do people ignore advice that is good for them?'],
    shape=[('answer', 'To learn to drive at eighteen, from my father.'),
           ('support', 'I was about to leave for a city with trams.'),
           ('follow-up', 'So it seemed like money spent on nothing.'),
           ('support', 'I was thirty-one before I passed.'),
           ('follow-up', 'And I have thought about those thirteen years '
            'fairly often since.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should governments tell people how to live healthily?',
         prompt=('Some people believe governments should campaign to change '
                 'unhealthy behaviour. Others think this is not a matter for '
                 'governments. Discuss both views and give your own opinion. '
                 'Write at least 250 words.'),
         model=[
          'The argument about health campaigns is usually conducted as a '
          'dispute about liberty, and the evidence suggests it should be a '
          'dispute about effectiveness. Most campaigns do not change '
          'behaviour, which makes the liberty objection a complaint about a '
          'power that is not being exercised successfully.',
          'The case for government action rests on a fact about costs. Where '
          'treatment is paid for publicly, an individual’s health is not an '
          'entirely private matter, and a government that must fund the '
          'consequences has an interest in the causes. There is also an '
          'information argument: nobody can personally test what a diet does '
          'over thirty years, so somebody has to do that work and report '
          'it.',
          'The case against is partly about liberty and more interestingly '
          'about accuracy. Advice has been reversed often enough that the '
          'reversals are themselves a cost, and a population that has been '
          'told four contradictory things stops listening to the fifth. There '
          'is also a fairness objection: advice is usually written for a life '
          'with time in it, and telling a van driver to walk for thirty '
          'minutes a day is addressing somebody else.',
          'My own position is that governments should do less telling and '
          'more arranging. The interventions with the best evidence behind '
          'them are not messages at all: they are changes to what is '
          'available, what is priced how, and what happens by default. Nobody '
          'experienced the removal of lead from petrol as a lecture, and it '
          'did more for health than any campaign of that decade.',
          'That is where I would put the money. Campaigns that tell people '
          'things they already know are the least effective instrument '
          'available and the most politically comfortable, which is probably '
          'why they remain the commonest.'],
         notes=[
          'The opening relocates the disagreement from liberty to '
          'effectiveness, and then observes that this undercuts the liberty '
          'objection. Two sentences doing argumentative work is the fastest '
          'way into a good Task 2 introduction.',
          'The opposing case in paragraph 3 is given two arguments, and the '
          'second one — fairness — is the stronger. Placing the better '
          'objection second means the reader meets it last.',
          'The lead-in-petrol example is specific, checkable and not about '
          'messaging at all, which is exactly why it supports the position. '
          'One real example beats three invented statistics.'],
         criterion=[('Relocating a dispute from liberty to effectiveness',
                     'Task Response'),
                    ('The stronger objection placed second',
                     'Coherence and Cohesion'),
                    ('A specific example that does the argument’s work',
                     'Lexical Resource')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Moving a dispute onto better ground',
    explain=('Many prompts invite an argument that cannot be settled. Saying '
             'what the dispute should be about instead gives you a position '
             'nobody else in the room is taking.'),
    examples=['This is usually a dispute about liberty and should be one '
              'about effectiveness.',
              'The question is not whether governments may act but whether '
              'acting works.',
              'That objection applies to a power nobody is exercising '
              'successfully.',
              'The disagreement is really about which instrument to use.'],
    task='Move each dispute onto ground where evidence could settle it.',
    items=[('Should the government ban advertising for unhealthy food?',
            'The question worth asking is whether such bans change what '
            'children eat, which has been measured.'),
           ('Is it the state’s business what people eat?',
            'Where the state pays for treatment, the practical question is '
            'which interventions reduce that cost.'),
           ('People should take responsibility for themselves.',
            'The useful question is which choices people are actually able '
            'to make given their circumstances.'),
           ('Health campaigns are a waste of money.',
            'The measurable question is how campaign spending compares with '
            'spending on availability and price.'),
           ('Experts keep changing their minds.',
            'The question is how often advice has been reversed and what '
            'that does to how the next advice is received.')]),
   vocab=[('uptake', 'the proportion of people who take something up'),
          ('campaign', 'an organised effort to change behaviour'),
          ('measure', 'an action taken by an authority to change something'),
          ('by default', 'what happens unless somebody chooses otherwise'),
          ('instrument', 'a means a government uses to achieve something'),
          ('reversal', 'a change to the opposite position'),
          ('contradictory', 'saying opposite things'),
          ('availability', 'how easily something can be obtained')],
   expr=[('That is a fairer way to read it than mine',
          'concedes a better interpretation'),
         ('I am not arguing we stop', 'removes a misreading of a '
          'criticism'),
         ('a number we cannot yet explain',
          'describes a result without judging it'),
         ('Less satisfying is accurate', 'accepts an unwelcome description')],
   trans=['the case for', 'the case against', 'there is also',
          'that is where'],
  ),

  dict(
   sub='Counting a disease',
   step=3,
   read=[
    dict(heading='Incidence, prevalence and what gets missed',
         kind='Data article',
         task='Matching information and sentence completion',
         band='gt_work', qtype='Questions 30-35',
         figure=_CASES,
         paras=[
          'The graph shows two measures from one outbreak over twelve weeks: '
          'reported cases and hospital admissions, both per hundred thousand '
          'people. The shapes are similar and the timing is not. Cases peak '
          'in week five at 140; admissions peak in week seven at 29, two '
          'weeks later and at a fifth of the height.',
          'The lag has a simple explanation. Somebody who will need hospital '
          'care is usually infected, then unwell, then seriously unwell, and '
          'the interval between the second and third stages is about two '
          'weeks. Admissions are therefore a delayed picture of infections '
          'that happened a fortnight earlier, and treating the two lines as '
          'describing the same moment is the commonest error in reading this '
          'kind of graph.',
          'The difference in height has a less simple explanation, and it is '
          'where most of the misunderstanding lives. The ratio between the '
          'lines is not the proportion of infected people who become '
          'seriously ill. It is the proportion of reported cases who do, and '
          'reporting depends on who is tested, which changes from week to '
          'week and is usually highest when public anxiety is highest.',
          'In this outbreak, testing expanded in week four. Part of the sharp '
          'rise to the week-five peak is therefore more infections and part '
          'of it is more detection of infections that would previously have '
          'gone uncounted. Nothing on the graph distinguishes the two, and no '
          'amount of care in reading it can recover the difference.',
          'Admissions are less affected by this, which is why analysts watch '
          'them even though they arrive late. A person ill enough for '
          'hospital is counted whether or not a testing programme exists. The '
          'line is slower, smaller and more honest, and a graph that showed '
          'only admissions would have told a government less at the time and '
          'misled it less afterwards.'],
         items=[
          ('Reported cases peak in week',
           ['three', 'five', 'seven', 'nine'], 1,
           'At 140 per hundred thousand, two weeks before admissions peak.'),
          ('Which paragraph explains the two-week gap between the peaks?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'], 1,
           'The interval between being unwell and being seriously unwell.'),
          ('Which paragraph explains why the ratio between the lines '
           'misleads?', ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'It is a proportion of reported cases, and reporting depends on '
           'testing.'),
          ('Admissions peak at ____________ per hundred thousand.', None,
           '29', 'In week seven, a fifth of the height of the case peak.'),
          ('Testing expanded in week ____________.', None, 'four',
           'So part of the rise to the week-five peak is more detection.'),
          ('The writer calls the admissions line slower, smaller and more '
           '____________.', None, 'honest',
           'Because a person ill enough for hospital is counted whatever the '
           'testing programme.')])],
   listen=[
    dict(heading='An epidemiologist on case counts', part='Part 4',
         task='A lecture on reading outbreak data', band='l4',
         qtype='Questions 36-41',
         figure=_CASES,
         script=[
          ('Lecturer', 'I am going to spend this hour on two lines on a '
           'graph, because almost every mistake made in public about an '
           'outbreak is a mistake about the relationship between them.'),
          ('Lecturer', 'Reported cases and hospital admissions. Same '
           'outbreak, twelve weeks. Cases peak in week five, admissions in '
           'week seven. The first thing to say is that the gap is not a '
           'mystery: people are infected, then unwell, then seriously unwell, '
           'and that last step takes about a fortnight.'),
          ('Lecturer', 'So admissions this week are telling you about '
           'infections a fortnight ago. If you are deciding policy on '
           'Thursday using an admissions figure, you are responding to the '
           'epidemic as it was when the figure was created, and it has moved '
           'since in a direction the figure cannot show you.'),
          ('Lecturer', 'Now the heights, which is where it gets genuinely '
           'difficult. One hundred and forty cases, twenty-nine admissions. '
           'It is tempting to say that one in five infected people needed '
           'hospital. That is wrong, and the error is in the word infected. '
           'The denominator is reported cases, not infections.'),
          ('Lecturer', 'Reported cases depend on testing, and testing is a '
           'policy decision that changes mid-outbreak. In this one it '
           'expanded in week four. So the climb to the week-five peak is some '
           'mixture of more infection and more looking, and nothing in the '
           'data separates them. A government that cut testing in week six '
           'would have produced a beautiful falling line and no change '
           'whatever in the epidemic.'),
          ('Lecturer', 'There is a second distortion worth knowing about, and it runs the other way. Weekends. Fewer people seek a test on a Sunday and fewer laboratories report, so almost every national case series has a seven-day sawtooth in it that has nothing whatever to do with the disease.'),
          ('Lecturer', 'That is why you will see these figures smoothed over seven days, and smoothing is itself a choice: it removes the sawtooth and it also delays your view of any genuine turn by about three days.'),
          ('Lecturer', 'Which brings me to why I watch the slower line. '
           'Admissions are not much affected by how hard you look, because a '
           'person that ill arrives at a hospital either way. It is late, it '
           'is smaller, and it is far harder to distort. If I could have only '
           'one of these two lines during an outbreak, I would take the one '
           'that tells me less and lies to me less.')],
         items=[
          ('The gap between the peaks is caused by',
           ['testing delays', 'the time from unwell to seriously unwell',
            'reporting errors', 'weekend effects'], 1,
           'About a fortnight, which he says is not a mystery.'),
          ('An admissions figure on Thursday describes the epidemic',
           ['that day', 'a week earlier', 'a fortnight earlier',
            'a month earlier'], 2,
           'Which is why policy made from it responds to a past state.'),
          ('Why is "one in five infected people needed hospital" wrong?',
           ['The figures are rounded', 'The denominator is reported cases',
            'Admissions are undercounted', 'The weeks differ'], 1,
           'The error is in the word infected.'),
          ('Testing in this outbreak expanded in week',
           ['two', 'four', 'six', 'eight'], 1,
           'So part of the rise to the peak is more looking.'),
          ('A government that cut testing in week six would produce',
           ['a real fall', 'a falling line and no epidemiological change',
            'more admissions', 'no visible effect'], 1,
           'Which is his illustration of how easily the case line is '
           'distorted.'),
          ('He would prefer the line that',
           ['tells him more', 'tells him less and lies less',
            'arrives soonest', 'is easiest to explain'], 1,
           'Because admissions are harder to distort.')])],
   speak=dict(
    part='Part 3', focus='Measuring an outbreak',
    intro=('Four or five sentences. Where you use a number, say what it is a '
           'number of.'),
    qs=['How should a government decide when to act in an epidemic?',
        'Should health figures be published daily?',
        'Do people understand the numbers they are shown?',
        'What makes one piece of data more reliable than another?'],
    shape=[('answer', 'Not on the figure that is easiest to collect.'),
           ('support', 'Case counts depend on how hard you look for '
            'cases.'),
           ('follow-up', 'So they can fall because testing fell.'),
           ('support', 'Admissions are slower and much harder to '
            'distort.'),
           ('follow-up', 'I would rather have the honest number late than '
            'the convenient one on time.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Two measures from one outbreak',
         prompt=('The graph below shows reported cases and hospital '
                 'admissions during one outbreak over twelve weeks. Summarise '
                 'the information by selecting and reporting the main '
                 'features, and make comparisons where relevant. Write at '
                 'least 150 words.'),
         figure=_CASES,
         model=[
          'The line graph compares reported cases with hospital admissions '
          'per hundred thousand people over the twelve weeks of a single '
          'outbreak. Overall, the two measures follow a similar rise-and-fall '
          'shape, but admissions peak two weeks later than cases and at a '
          'far lower level, so that the gap between the lines is widest '
          'exactly when cases are highest.',
          'Reported cases rise steeply from 12 in week one to a peak of 140 '
          'in week five, a figure almost twelve times the starting point. '
          'The decline afterwards is equally rapid: 96 by week seven, 44 by '
          'week nine and 21 by week eleven, which is below the week-three '
          'level.',
          'Admissions follow a much flatter path. They begin at 3, climb '
          'slowly to 18 by week five and continue climbing for a further two '
          'weeks to a peak of 29, at which point cases have already fallen by '
          'a third. Admissions then decline to 12 by week eleven.',
          'The two therefore diverge in the middle of the period and converge '
          'at both ends. In week five, cases stand almost eight times higher '
          'than admissions, while by week eleven the difference has narrowed '
          'to under twofold.'],
         notes=[
          'The Overall statement names three things: the shared shape, the '
          'two-week lag and the difference in level. On a two-line graph '
          'where the lines behave differently, that relationship is the main '
          'feature.',
          'Each line gets a paragraph and the figures are selected rather '
          'than listed: starting value, peak, and the decline. Six numbers '
          'per line is plenty, and twelve would be fewer marks, not more.',
          'The last paragraph compares the lines at two points. That is the '
          'comparison the task asks for, and it is the paragraph most '
          'candidates leave out when a graph has two series.'],
         criterion=[('An Overall statement naming shape, lag and level',
                     'Task Achievement'),
                    ('Figures selected, not listed',
                     'Coherence and Cohesion'),
                    ('A closing comparison at two points in time',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing two lines that peak at different times',
    explain=('A graph with a lag between two series needs language for the '
             'gap itself, not just for each line. These patterns describe the '
             'relationship.'),
    examples=['Admissions peak two weeks later than cases and at a far lower '
              'level.',
              'The gap between the lines is widest when cases are highest.',
              'They continue climbing for a further two weeks.',
              'The two diverge in the middle of the period and converge at '
              'both ends.'],
    task='Rewrite each pair of facts as one sentence about the '
         'relationship.',
    items=[('Cases peak in week 5. Admissions peak in week 7.',
            'Admissions reach their peak two weeks after cases do.'),
           ('Cases fall after week 5. Admissions rise until week 7.',
            'Admissions continue to rise for two weeks after cases have '
            'begun to fall.'),
           ('Cases 140, admissions 18, in week 5.',
            'In week five, cases stand almost eight times higher than '
            'admissions.'),
           ('Both lines fall at the end.',
            'The two measures converge again over the final weeks as both '
            'decline.'),
           ('Admissions change less than cases.',
            'Admissions vary across a much narrower range than cases '
            'throughout the period.')]),
   vocab=[('new cases', 'infections first recorded in a given period'),
          ('prevalence', 'the number of existing cases at one time'),
          ('admission', 'a patient being taken into hospital'),
          ('lag', 'a delay between two related events'),
          ('base figure', 'the total a proportion is calculated from'),
          ('detection', 'the finding of cases that exist'),
          ('distort', 'to change the appearance of something'),
          ('outbreak', 'a sudden rise in cases of a disease')],
   expr=[('the gap is not a mystery', 'dismisses a puzzle before explaining '
          'it'),
         ('the error is in the word', 'locates a mistake precisely'),
         ('some mixture of more infection and more looking',
          'names two causes the data cannot separate'),
         ('tells me less and lies to me less',
          'prefers a limited but reliable measure')],
   trans=['so', 'now the heights', 'which brings me to', 'therefore'],
  ),

  dict(
   sub='Why an outbreak ends',
   step=4,
   read=[
    dict(heading='The epidemic that stops before everyone has had it',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 42-48',
         paras=[
          'Epidemics end. They end, in almost every recorded case, well '
          'before the disease has reached everybody it could have reached, '
          'and the explanation for that is less obvious than it appears and '
          'is routinely got wrong in public discussion.',
          'The familiar account runs as follows. Each infected person passes '
          'the disease to a certain number of others. If that number is above '
          'one the epidemic grows; if it falls below one it shrinks. As more '
          'people become immune there are fewer available to infect, the '
          'number falls below one, and the outbreak declines. The account is '
          'correct and incomplete.',
          'What it omits is that the number is not a property of the disease. '
          'It is a property of the disease, the population, and the behaviour '
          'of that population on the day. The same virus in the same city '
          'produces a different figure in February and in June, and a '
          'different figure again in the week after a government '
          'announcement.',
          'This matters because the familiar account predicts a threshold: a '
          'particular share of the population immune, after which the '
          'epidemic must decline. Thresholds calculated this way have been '
          'wrong, in both directions, in almost every outbreak where they '
          'have been calculated in advance, and the reason is that behaviour '
          'moved while the arithmetic assumed it had not.',
          'A second omission concerns who becomes immune first. The standard '
          'calculation treats a population as a well-mixed pool in which '
          'everybody is equally likely to meet everybody else. Real '
          'populations are nothing like that. The people infected earliest '
          'are disproportionately those with most contacts, and they are also '
          'the people whose immunity does most to slow the spread.',
          'The consequence is that an epidemic slows sooner than a well-mixed '
          'model predicts, because the first fifteen per cent to be infected '
          'are not a random fifteen per cent. This effect is real, it is '
          'measurable, and it was used during one recent outbreak to argue '
          'that the end was closer than it was, which illustrates the '
          'difficulty: the effect exists and its size is extremely hard to '
          'estimate in advance.',
          'There is a third reason epidemics end that is often forgotten '
          'entirely, which is that they run out of season. Many respiratory '
          'diseases transmit far better in cold, dry air and in buildings '
          'with closed windows. An outbreak that declines in April may be '
          'declining because of immunity, because of behaviour, or because it '
          'is April, and separating those three has defeated better '
          'statisticians than the ones usually asked to do it on deadline.',
          'A fourth mechanism is worth adding because it is the one most '
          'often confused with immunity. People change what they do. They '
          'change it in response to news, to the illness of somebody they '
          'know, and to how full the local hospital is reported to be, and '
          'these responses begin before any instruction is issued and '
          'continue after one is withdrawn.',
          'Behavioural change of this kind is difficult to measure and '
          'easy to attribute wrongly. Where it coincides with a government '
          'announcement it is read as compliance; where it precedes one it '
          'is rarely recorded at all. Several studies of mobility data have '
          'found movement falling before restrictions were announced, in '
          'countries whose governments later described the fall as the '
          'effect of those restrictions.',
          'The honest position is that an epidemic ending is overdetermined. '
          'Several mechanisms are pushing in the same direction at once, each '
          'sufficient to produce a decline on its own, which makes the '
          'decline easy to predict and its cause nearly impossible to '
          'attribute. That combination is uncomfortable for policy, because '
          'the question policy asks is not whether the epidemic will end but '
          'which of the things we did made it end sooner.'],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['The familiar account', 'A number that is not fixed',
            'Who is infected first', 'Running out of season'], 1,
           'The figure depends on the population and its behaviour, not just '
           'the disease.'),
          ('Choose the best heading for paragraph 5.',
           ['A number that is not fixed', 'Who is infected first',
            'Running out of season', 'Several causes at once'], 1,
           'Real populations are not well-mixed pools.'),
          ('Choose the best heading for paragraph 7.',
           ['Who is infected first', 'Running out of season',
            'Several causes at once', 'The familiar account'], 1,
           'Many respiratory diseases transmit better in cold, dry air.'),
          ('The writer believes the familiar account is wrong.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 calls it correct and incomplete.'),
          ('The writer believes thresholds can be calculated reliably in '
           'advance.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 4 says such thresholds have been wrong in both '
           'directions almost every time.'),
          ('The people infected earliest tend to be those with the most '
           '____________.', None, 'contacts',
           'Paragraph 5, which is why their immunity slows the spread '
           'disproportionately.'),
          ('The writer describes an epidemic ending as ____________.', None,
           'overdetermined',
           'Paragraph 8: several mechanisms each sufficient on their own.')])],
   listen=[
    dict(heading='A lecture on transmission and immunity', part='Part 4',
         task='A lecture on why outbreaks decline', band='l4',
         qtype='Questions 49-54',
         script=[
          ('Lecturer', 'Here is a question that sounds simple and is not. Why '
           'does an epidemic stop before it has infected everybody? Most of '
           'you will give me the textbook answer, and the textbook answer is '
           'true and about a third of the story.'),
          ('Lecturer', 'The textbook answer: each case produces a certain '
           'number of further cases. Above one, growth. Below one, decline. '
           'Immunity accumulates, the available people run out, the number '
           'drops under one, the epidemic turns over. Fine. Now the three '
           'things that answer leaves out.'),
          ('Lecturer', 'First, that number is not a property of the virus. It '
           'is a property of a virus in a population behaving in a particular '
           'way in a particular season. The same organism gives you different '
           'figures in February and June, and different figures the week '
           'after a televised announcement. Treating it as a constant is the '
           'single commonest error in this field, including among people who '
           'know better.'),
          ('Lecturer', 'Second, mixing. The standard model assumes everybody '
           'is equally likely to meet everybody. Nobody lives like that. The '
           'people infected first are the people with the most contacts, and '
           'those are precisely the people whose immunity matters most for '
           'transmission. So the epidemic slows earlier than the simple model '
           'says, and I want to be careful here, because this true observation '
           'was used to make a badly wrong prediction a few years ago.'),
          ('Lecturer', 'Third, and this one gets forgotten: seasons. Many '
           'respiratory infections spread better in cold dry air and in '
           'closed buildings. An epidemic that fades in April may be fading '
           'because of immunity, because people changed what they did, or '
           'because it is April.'),
          ('Lecturer', 'A fourth thing, which I have started putting in because it gets attributed wrongly more than any of the others. People change their behaviour on their own. Mobility data from several countries shows movement falling before restrictions were announced, and those same falls were later described by governments as the effect of the restrictions.'),
          ('Lecturer', 'Now put those together and you get the conclusion I '
           'want you to leave with. The ending of an epidemic is '
           'overdetermined: several causes are pushing the same way, any one '
           'of which would do it. That makes the decline easy to forecast and '
           'the credit nearly impossible to assign, which is exactly the '
           'reverse of what every government wants from us.')],
         items=[
          ('The lecturer says the textbook answer is',
           ['wrong', 'true and about a third of the story',
            'out of date', 'too technical'], 1,
           'He then gives the three things it leaves out.'),
          ('The number of further cases is a property of',
           ['the virus', 'a virus in a population behaving a certain way',
            'the season only', 'the health system'], 1,
           'And he calls treating it as a constant the commonest error in '
           'the field.'),
          ('The standard model wrongly assumes that',
           ['everybody is immune', 'everybody is equally likely to meet '
            'everybody', 'nobody travels', 'all cases are reported'], 1,
           'Whereas the first infected are those with the most contacts.'),
          ('Why is he careful about the mixing point?',
           ['It is disputed', 'A true observation was used for a badly wrong '
            'prediction', 'It is hard to measure', 'It applies only to '
            'cities'], 1,
           'A few years ago, which is why he flags it.'),
          ('The third reason he gives is',
           ['vaccination', 'seasons', 'travel restrictions',
            'better treatment'], 1,
           'Many respiratory infections spread better in cold dry air.'),
          ('He says an epidemic ending is overdetermined, which makes the '
           'decline easy to forecast and the credit',
           ['easy to assign', 'nearly impossible to assign',
            'shared equally', 'irrelevant'], 1,
           'Which he calls the reverse of what governments want.')])],
   speak=dict(
    part='Part 3', focus='Stopping the spread of disease',
    intro=('Four or five sentences. Try once to say that several causes may '
           'be acting at the same time.'),
    qs=['What is the best way to stop a disease spreading?',
        'Should governments restrict travel during an outbreak?',
        'Why do people disagree about what worked?',
        'What should a country prepare in advance?'],
    shape=[('answer', 'Probably several things at once, which is the '
            'difficulty.'),
           ('support', 'An outbreak declines for three or four reasons '
            'together.'),
           ('follow-up', 'Any one of them would have produced a fall on its '
            'own.'),
           ('support', 'So the decline is easy to predict.'),
           ('follow-up', 'And deciding which measure deserves the credit is '
            'nearly impossible.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Passage to outline, then outline to essay',
         prompt=('Reduce the cycle 4 passage to the outline its writer must '
                 'have worked from. Then use the same outline shape for this '
                 'prompt: governments should be judged on how they handled an '
                 'epidemic. Do not write the essay yet.'),
         plan=('An epidemic ending is overdetermined, so crediting one '
               'measure is unsound',
               [('The decline has several sufficient causes at once',
                 ['immunity, behaviour and season all push the same way',
                  'any one of them would produce a fall alone']),
                ('Judging a government therefore needs a comparison, not an '
                 'outcome',
                 ['a falling curve is compatible with every policy',
                  'the useful comparison is with similar places at the same '
                  'time'])]),
         notes=[
          'Reducing a passage to its outline is the fastest way to see how '
          'an argument is built, because the paragraphs that are supports '
          'become obvious once you try to list main ideas and find you have '
          'eight.',
          'The passage has two main ideas and four supports, and the '
          'seasonal paragraph is a support of the first, not a third main '
          'idea. Most readers promote it, which is the error the exercise '
          'is for.',
          'Applying the same shape to a new prompt tests whether you '
          'extracted a structure or just a summary. A summary does not '
          'transfer; a structure does.'],
         criterion=[('Reducing eight paragraphs to two main ideas',
                     'Coherence and Cohesion'),
                    ('Recognising a support that looks like a main idea',
                     'Task Response')],
         instruct='  Produce both outlines. You will write it in cycle 5.',
         lines=12)],
   gram=dict(
    point='Saying that several causes act at once',
    explain=('Where more than one explanation is true at the same time, '
             'English needs care: a list of causes can read as uncertainty '
             'about which one it is. These patterns say that all of them are '
             'operating.'),
    examples=['Several mechanisms push in the same direction at once.',
              'Each would be sufficient on its own.',
              'The decline may be due to immunity, to behaviour, or to the '
              'season, and probably to all three.',
              'That makes the outcome easy to predict and its cause hard to '
              'attribute.'],
    task='Rewrite each sentence so that it names several simultaneous '
         'causes.',
    items=[('Something made the epidemic end.',
            'Immunity, changed behaviour and the season were all acting at '
            'once.'),
           ('We do not know what worked.',
            'Several measures were introduced together, each capable of '
            'producing the fall on its own.'),
           ('The policy succeeded.',
            'The outbreak declined after the policy, as it was also '
            'declining elsewhere without it.'),
           ('Cases fell because of the vaccine.',
            'Cases fell as vaccination rose, during a season in which they '
            'typically fall anyway.'),
           ('The cause is unclear.',
            'The cause is not uncertain so much as multiple, which is a '
            'different problem.')]),
   vocab=[('onward infection', 'the passing of a disease to further people'),
          ('immunity', 'protection against a disease'),
          ('tipping point', 'the level at which a trend reverses'),
          ('well-mixed', 'assuming everybody meets everybody equally'),
          ('respiratory', 'relating to breathing'),
          ('overdetermined', 'having more causes than are needed'),
          ('attribute', 'to say what caused something'),
          ('sufficient', 'enough on its own')],
   expr=[('correct and incomplete', 'accepts an account and names what is '
          'missing'),
         ('I want to be careful here', 'flags a true point that has been '
          'misused'),
         ('any one of which would do it', 'states that causes are '
          'individually sufficient'),
         ('exactly the reverse of what every government wants',
          'notes a mismatch between evidence and demand')],
   trans=['the familiar account', 'what it omits', 'the consequence',
          'the honest position'],
  ),

  dict(
   sub='One number for a population that is not one population',
   step=5,
   read=[
    dict(heading='Why a single reproduction number misleads',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 55-61',
         paras=[
          'For two years, a single figure governed decisions affecting many '
          'millions of people. It was reported weekly, discussed in '
          'parliaments and printed beside weather forecasts, and almost '
          'everything about the way it was used was unsound in ways that were '
          'known in advance by the people producing it.',
          'The figure describes how many further cases an average infected '
          'person produces. The difficulty begins with the word average. The '
          'distribution of onward infection is not merely uneven but '
          'extremely so: in most respiratory outbreaks studied, a large '
          'majority of infected people pass the disease to nobody at all, '
          'while a small minority produce a great many cases.',
          'Where a distribution has that shape, the average is a poor '
          'description of any individual and a poor guide to what an '
          'intervention will do. Two populations with the same average can '
          'behave completely differently, because one spreads through steady '
          'person-to-person contact and the other through occasional large '
          'events, and measures that work in one do very little in the '
          'other.',
          'The second difficulty is geographical. A national figure averages '
          'across regions, and regions in an outbreak are rarely '
          'synchronised. A country can report a figure just below one while '
          'containing a city in rapid growth and a countryside in decline, '
          'and the number tells a government nothing about the only question '
          'it needs answered, which is where to send resources.',
          'The third is timing, and it is the least discussed. The figure is '
          'estimated from data that arrive with delays of days to weeks and '
          'is then smoothed, so a published value describes the situation of '
          'perhaps ten days earlier. During rapid change this makes it a '
          'historical document, and during rapid change is precisely when it '
          'is most consulted.',
          'Those producing the estimates said all of this, repeatedly and in '
          'writing. The reports carried ranges, caveats about regional '
          'variation and explicit warnings against using the figure as a '
          'trigger for action. What reached decision-makers and the public '
          'was a single number, often to one decimal place, and the '
          'transformation happened somewhere between the technical annexe and '
          'the press conference.',
          'This is worth stating carefully, because the obvious conclusion is '
          'that scientists were ignored, and that is not quite what occurred. '
          'A decision-making system under extreme time pressure requires '
          'something it can act on, and a range with caveats is not that. The '
          'number was not misunderstood so much as converted into a form that '
          'could be used, and the conversion destroyed the information that '
          'made it trustworthy.',
          'It is worth asking what a better practice would have looked '
          'like, since criticism of this kind is cheap without one. The '
          'proposal most often made by the people who produced the '
          'estimates is unglamorous: publish the range as the headline, '
          'with the same form of words every week, and never a central '
          'value on its own.',
          'The objection to that is practical and serious. A range is '
          'harder to act on, and a decision-maker who must choose on '
          'Thursday will convert it into a point estimate privately if '
          'nobody does so publicly, at which point the conversion is '
          'invisible and unrecorded. Whether a published range would have '
          'survived contact with a press conference has not been tested '
          'anywhere.',
          'The lesson is not that the figure was useless. It was a reasonable '
          'summary of one aspect of an outbreak and nobody has proposed a '
          'better single summary. The lesson concerns what happens to '
          'uncertainty as it travels through an institution, and the answer '
          'is that it is removed at each step by people who are each behaving '
          'reasonably, until a number with error bars wider than its value '
          'appears on a screen behind a minister.'],
         items=[
          ('Which paragraph explains that most infected people infect '
           'nobody?', ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 1,
           'A large majority pass it to nobody while a small minority produce '
           'many cases.'),
          ('Which paragraph describes the problem of regional averaging?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'], 1,
           'A national figure below one can contain a city in rapid '
           'growth.'),
          ('Which paragraph argues that scientists were not simply ignored?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'], 2,
           'The number was converted into a usable form, and the conversion '
           'destroyed the information.'),
          ('The writer believes the figure should never have been '
           'calculated.', ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph calls it a reasonable summary with no better '
           'alternative proposed.'),
          ('The writer believes the people producing the estimates concealed '
           'the uncertainty.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 6 says they stated it repeatedly and in writing.'),
          ('A published value describes the situation about ____________ '
           'days earlier.', None, 'ten',
           'Paragraph 5, because of reporting delays and smoothing.'),
          (
           'Uncertainty is ____________ at each step as it travels '
           'through an institution.', None, 'removed',
           'The final paragraph, by people who are each behaving '
           'reasonably.')])],
   listen=[
    dict(heading='Two modellers disagree', part='Part 4',
         task='A recorded discussion', band='l4', qtype='Questions 62-67',
         script=[
          ('Chair', 'Dr Wrzesniewski builds transmission models. Professor '
           'Agbaje advises on how their results are communicated.'),
          ('Agbaje', 'My criticism is not of your models and I want that on '
           'the record first, because it usually gets lost. The models carried '
           'their uncertainty properly. What I object to is a system that '
           'took a range and published a point.'),
          ('Wrzesniewski', 'I accept the description and I would resist the '
           'word system, because it sounds like nobody did it. People did it, '
           'at identifiable meetings, and I was in some of them.'),
          ('Agbaje', 'That is a more honest version than mine. Go on.'),
          ('Wrzesniewski', 'What happens is that somebody asks what the '
           'number is. You say between point eight and one point four. They '
           'say yes, but what is it. And there is a point at which continuing '
           'to answer properly reads as evasion, and you give a central '
           'estimate, and it is on a slide within the hour.'),
          ('Agbaje', 'Then the fix is not scientific, it is procedural. The '
           'answer to what is it should be a sentence everybody has agreed in '
           'advance, and it should be the same sentence every week.'),
          ('Wrzesniewski', 'I would sign that. Although I would add that our '
           'side is not blameless. We kept producing a national figure '
           'because it was asked for, knowing that regions were not '
           'synchronised and that the national figure was nobody’s.'),
          ('Agbaje', 'Why did you keep producing it?'),
          ('Wrzesniewski', 'Because refusing to answer a question is not '
           'available to you at eleven at night in an emergency, and because '
           'we told ourselves the caveats were in the annexe. They were. '
           'Nobody reads an annexe during an emergency, and we knew that '
           'too.'),
          ('Agbaje', 'May I test one thing? Suppose you had published only the range, every week, in the same words. Would it have held?'),
          ('Wrzesniewski', 'Honestly, I do not know. Somebody has to decide on Thursday, and if we publish a range they will form a point estimate privately and nobody will see them do it. That may be worse than doing it in public where it can be argued with.'),
          ('Agbaje', 'That is a genuine objection to my own proposal and I had not met it before.'),
          ('Agbaje', 'That is the most useful thing anybody has said to me about this, and it is an argument for deciding the format before '
           'the next one, not during it.')],
         items=[
          ('Agbaje says his criticism is not of',
           ['the communication', 'the models', 'the government',
            'the data'], 1,
           'He states that the models carried their uncertainty properly.'),
          ('What word does Wrzesniewski resist?',
           ['Model', 'Uncertainty', 'System', 'Estimate'], 2,
           'Because it sounds as though nobody did it, when identifiable '
           'people did.'),
          ('He says answering properly eventually reads as',
           ['caution', 'evasion', 'expertise', 'disagreement'], 1,
           'Which is the point at which a central estimate gets given.'),
          ('Agbaje says the fix is',
           ['scientific', 'procedural', 'legal', 'political'], 1,
           'An agreed sentence, the same every week.'),
          ('Why did the modellers keep producing a national figure?',
           ['It was accurate', 'It was asked for',
            'Regions were synchronised', 'It was required by law'], 1,
           'Though they knew regions were not synchronised.'),
          ('What do they conclude about the format?',
           ['It should be decided during an emergency',
            'It should be decided before the next one',
            'It cannot be fixed', 'It should be left to scientists'], 1,
           'Because nobody reads an annexe during an emergency.')])],
   speak=dict(
    part='Part 3', focus='Models and the decisions made from them',
    intro=('The hardest turn in the unit. Say once what a number cannot tell '
           'you.'),
    qs=['Should governments publish the figures they are using?',
        'How should uncertainty be explained to the public?',
        'Is it reasonable to expect a single number to guide policy?',
        'Who should decide what information is released?'],
    shape=[('answer', 'Yes, and with the range and not just the middle.'),
           ('support', 'A single figure averages across regions that are not '
            'in step.'),
           ('follow-up', 'So it can sit below one while a city is '
            'growing.'),
           ('support', 'The people producing it said so at the time.'),
           ('follow-up', 'The uncertainty was removed on the way to the '
            'press conference, not in the laboratory.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should governments be judged on how they handled an '
                 'epidemic?',
         prompt=('Write the essay you planned in cycle 4. Governments should '
                 'be judged on how well they handled an epidemic. To what '
                 'extent do you agree or disagree? Write at least 250 '
                 'words.'),
         model=[
          'Governments should certainly be judged, and the usual method of '
          'judging them is close to worthless. Comparing a country’s '
          'outcome with its own expectations tells you very little, because '
          'an epidemic declines for several reasons at once and any of them '
          'would have produced a falling curve on its own.',
          'The difficulty is that outcomes are overdetermined. Immunity '
          'accumulates, people change their behaviour, and many respiratory '
          'diseases fade in warmer months in any case. A government that '
          'acted in March and saw cases fall in April has evidence of a '
          'sequence and not of a cause, which is exactly the inference its '
          'opponents will refuse to accept and its supporters will treat as '
          'settled.',
          'There is a second problem with outcome-based judgement, which is '
          'that it rewards luck. An island with two airports and a young '
          'population will record better figures than a densely populated '
          'trading hub whatever either government does. Judging by results '
          'here is judging geography and demography, and calling it '
          'competence.',
          'What can be judged is the decisions, assessed against what was '
          'known at the time. Did the government act when its own advisers '
          'recommended acting, or three weeks later? Did it publish the '
          'uncertainty it had been given, or a single figure to one decimal '
          'place? Did it prepare the things that can only be prepared in '
          'advance? Those questions have answers that do not depend on how '
          'the epidemic happened to turn out.',
          'So I agree that governments should be judged and disagree with '
          'judging them by the death toll. The comparison worth making is '
          'with similar countries at the same moment, and the question worth '
          'asking is whether the decision was reasonable on the evidence '
          'available on the day it was taken.'],
         notes=[
          'The first line agrees and then immediately disagrees with the '
          'method, which lets the essay answer the question asked while '
          'arguing about something more interesting.',
          'Paragraph 4 is a list of questions, which is a risk and works here '
          'because each one is answerable. A list of rhetorical questions '
          'would be a weakness; a list of checkable ones is a proposal.',
          'The conclusion names the comparison that should be made. Having '
          'spent the essay saying what does not work, the ending has to say '
          'what does, or the reader is left with a complaint.'],
         criterion=[('Agreeing with the question and rejecting the method',
                     'Task Response'),
                    ('Checkable questions in place of rhetorical ones',
                     'Task Response'),
                    ('Ending on the comparison that should be made',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Judging a decision rather than an outcome',
    explain=('Where luck affects results, the fair test is the decision as it '
             'looked at the time. These patterns make that distinction '
             'explicit.'),
    examples=['The decision should be assessed against what was known at the '
              'time.',
              'That is evidence of a sequence and not of a cause.',
              'Judging by results here is judging geography and calling it '
              'competence.',
              'The question is whether the decision was reasonable on the '
              'day it was taken.'],
    task='Rewrite each judgement so that it assesses the decision rather '
         'than the outcome.',
    items=[('The policy failed because cases rose.',
            'Cases rose afterwards, which does not by itself show the policy '
            'was wrong when it was taken.'),
           ('That country handled it best.',
            'That country recorded the best figures, which its geography and '
            'age structure partly explain.'),
           ('They should have locked down sooner.',
            'The question is whether the evidence available at the time '
            'supported acting sooner.'),
           ('The minister was right.',
            'The decision was reasonable on what was known, whatever '
            'followed from it.'),
           ('The outcome proves the strategy worked.',
            'The outcome is consistent with the strategy working and with '
            'several other explanations.')]),
   vocab=[('reproduction number', 'how many further cases one case '
           'produces'),
          ('spread of values', 'how widely figures differ across a group'),
          ('synchronised', 'happening at the same time'),
          ('smoothed', 'averaged to remove short-term variation'),
          ('qualifier', 'a phrase that limits how a claim should be read'),
          ('annexe', 'a section added at the end of a report'),
          ('error bar', 'the range of uncertainty around a figure'),
          ('demography', 'the structure of a population by age and type')],
   expr=[('I want that on the record first',
          'protects a point from being lost'),
         ('That is a more honest version than mine',
          'concedes a better formulation'),
         ('refusing to answer is not available to you at eleven at night',
          'explains a decision by its circumstances'),
         ('an argument for deciding the format before the next one',
          'converts a post-mortem into a proposal')],
   trans=['the difficulty begins', 'the second difficulty', 'the third is',
          'the lesson'],
  ),
 ],
 technique=dict(
  title='Two series that diverge: reading a graph against its caption',
  body=('A graph with two lines usually comes with a caption telling you what '
        'it shows, and the caption is written by somebody with an argument. '
        'The discipline is to read the axes and the lines first, in silence, '
        'and to write down what you see before you read a word of the text '
        'around it. Then compare. Where the caption says a thing the lines do '
        'not show — a cause, a proportion, a claim about people rather than '
        'about reported figures — you have found the question the examiner '
        'has built, because that gap is exactly where Yes/No/Not Given and '
        'matching questions are set.'),
  panel=[('Axes first', 'What is measured, per what, over what. Per hundred '
          'thousand and per cent behave completely differently and look '
          'identical.'),
         ('Describe before you read', 'One sentence per line, written before '
          'the caption. Peaks, direction, and where they differ.'),
         ('Find the lag', 'Two lines that peak at different times are telling '
          'you about a process with a delay in it. The delay is usually the '
          'point.'),
         ('Ratio is not proportion', 'The gap between two lines is a ratio of '
          'what was counted, and what was counted depends on who was '
          'looking.')],
  task='Take the graph in cycle 3. Write your own two sentences before '
       'rereading the article, then list every claim the article makes that '
       'the graph alone does not support.',
  qs=['What do the axes actually measure?',
      'Which line peaks first, and by how long?',
      'What claim does the text make that the graph cannot show?',
      'What would you need to know to turn the ratio into a proportion?',
      'Which of your two sentences did the article contradict?']),
 outlining=dict(
  title='Passage to outline, then outline to essay',
  body=('Two exercises that look the same and train opposite muscles. '
        'Reducing a passage to an outline is comprehension: you are finding '
        'the structure somebody else built, and the test of success is that '
        'your outline has two or three main ideas and not eight. Building an '
        'essay from that same outline shape is production: you are putting '
        'your own content into a structure you have proved works. Doing them '
        'in that order, on the same day, is the fastest way to stop writing '
        'essays that are a list of true sentences.'),
  frame=('An epidemic ending is overdetermined, so crediting one measure is '
         'unsound',
         [('The decline has several sufficient causes at once',
           ['immunity, behaviour and season all push the same way',
            'any one of them would produce a fall alone']),
          ('Judging a government therefore needs a comparison, not an '
           'outcome',
           ['a falling curve is compatible with every policy',
            'the useful comparison is with similar places at the same '
            'time'])]),
  task='Outline the cycle 4 passage, then use the same two-idea shape for '
       'the cycle 5 prompt, then compare the two outlines side by side.',
  qs=['How many main ideas did the passage turn out to have?',
      'Which paragraph did you first mistake for a main idea?',
      'Did the shape transfer to the new prompt without strain?',
      'Where did your essay outline need a support the passage did not '
      'have?'],
  answers=['two, with the season paragraph a support of the first',
           'usually the seasonal one, because it introduces new material',
           'it should: a two-idea shape is the commonest Task 2 structure',
           'usually a concrete comparison, which an essay needs and a '
           'passage can assume']),
 candos=['I can read an eligibility notice for its exceptions',
         'I can describe two lines that peak at different times',
         'I can say that several causes are acting at once',
         'I can judge a decision by what was known at the time',
         'I can reduce a passage to the outline it was built from'],
 tip=('When a graph has two lines, write your own sentence about each before '
      'you read the caption. The gap between what you wrote and what the '
      'caption claims is where the questions are.'),
)
