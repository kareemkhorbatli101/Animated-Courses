# -*- coding: utf-8 -*-
"""Unit 42 - Risk and Regulation. IELTS Volume 5, band 7.0."""

_EXTR = dict(kind='bar',
             title='Recorded extreme rainfall events by decade',
             sub='events per decade exceeding the 1961–1990 threshold, and '
                 'exceeding a threshold recalculated each decade',
             cats=['1961–70', '1971–80', '1981–90', '1991–2000',
                   '2001–10', '2011–20'],
             series=[('Against the fixed 1961–90 threshold',
                      [9, 11, 10, 14, 19, 27]),
                     ('Against a threshold recalculated each decade',
                      [10, 10, 10, 11, 10, 11])])

UNIT = dict(
 n=42, vol=5, level='B2+/C1', band='7.0',
 theme='Risk and Regulation',
 opener=(
   'A chart in this unit shows the same rainfall record twice and gives two '
   'opposite answers, and the difference between them is a decision about '
   'the baseline that nobody writes on the axis. The unit works out from '
   'there: which risks a regulator is permitted to act on, why a rule '
   'precise enough to enforce is specific enough to evade, and what it '
   'costs to be too careful — a cost that is real and is never counted, '
   'because it consists of things that did not happen.'),

 cycles=[
  dict(
   sub='Reporting a hazard',
   step=1,
   read=[
    dict(heading='Reporting a workplace danger',
         kind='Procedure notice',
         task='Multiple choice and note completion',
         band='gt_short', qtype='Questions 1-6',
         skill=('A reporting procedure is read for the branch points',
                ['Procedures of this kind are not a straight line. They '
                 'branch, usually twice, and each branch leads somewhere '
                 'different.',
                 'Mark every "if" as you read. In a flow-chart completion '
                 'task the gaps are placed at the branches far more often '
                 'than along the straight stretches.']),
         paras=[
          'Raise the matter with the duty holder first. The duty holder is '
          'the person in control of the premises, who is not always the '
          'employer and is almost never the person who manages you. Their '
          'name is on the notice displayed at the main entrance, and if it '
          'is not, that absence is itself reportable.',
          'Allow twenty-one days for a reply. If the risk is immediate — '
          'meaning that somebody could be seriously injured today — do not '
          'wait: report to us at once and tell the duty holder that you have '
          'done so. Immediate risk is the only branch that skips this step, '
          'and it is defined by time rather than by severity.',
          'If twenty-one days pass without a reply, or the reply does not '
          'address the risk, report to us using the online form. We will ask '
          'for the premises, the class of risk and what the duty holder said '
          'or failed to say, and you will be given a reference beginning WH.',
          'We assess every report and investigate a minority. The deciding '
          'question is whether the matter falls inside the regulations we '
          'enforce, and the commonest reason for taking no action is that '
          'the risk is real and belongs to a different body. Where that '
          'happens, we forward the report and tell you where it has gone.',
          'You may report anonymously and the report will be assessed in the '
          'usual way. We cannot then tell you the outcome, we cannot ask you '
          'the follow-up questions that resolve about a third of reports '
          'without a visit, and an inspector arriving at small premises on '
          'an anonymous report rarely leaves anybody in doubt about the '
          'source.'],
         items=[
          ('The duty holder is',
           ['your line manager', 'the person in control of the premises', 'the regulator', 'the building owner\u2019s insurer'],
           1,
           'Paragraph 1, which notes this is often not the employer.',
           {0: 'Paragraph 1 says it is almost never the person who '
               'manages you.', 2: 'The regulator receives reports; it is not the duty '
               'holder.', 3: 'No insurer is mentioned in the guidance.'}),
          ('Immediate risk is defined by',
           ['severity', 'time', 'the number of people affected', 'the duty holder'],
           1, 'Paragraph 2: somebody could be seriously injured today.',
           {0: 'Paragraph 2 says it is defined by time rather than '
               'severity.', 2: 'The number affected is not part of the definition.', 3: 'The duty holder is told, but does not define the risk.'}),
          ('The commonest reason for no action is that the risk',
           ['is not real', 'belongs to a different body', 'is too small', 'was reported late'],
           1, 'Paragraph 4, after which the report is forwarded.',
           {0: 'A real risk is assumed; the issue is whose it is.', 2: 'Size of the risk is not the reason given.', 3: 'Lateness is not among the reasons for no action.'}),
          ('Normal waiting time for a reply from the duty holder: '
           '____________ days', None, 'twenty-one',
           'Paragraph 2, unless the risk is immediate.'),
          ('Reference numbers begin with the letters ____________.', None,
           'WH', 'Paragraph 3, issued when the online form is '
           'submitted.'),
          ('Follow-up questions resolve about ____________ of reports '
           'without a visit.', None, 'a third',
           'Paragraph 5, which is why anonymity has a cost.')]),
    dict(heading='What the regulator will and will not investigate',
         kind='Guidance', task='Matching features and multiple choice',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'We investigate where the regulations we enforce appear to have '
          'been breached and the breach is capable of being remedied. Both '
          'limbs matter: a historic breach that has already been put right '
          'is recorded and does not normally lead to an investigation, which '
          'surprises people who have waited until they left a job to '
          'report.',
          'We do not investigate matters of employment: pay, dismissal, '
          'rotas, bullying by a manager that does not create a risk to '
          'health, or a disagreement about duties. These are real and they '
          'go to a different body, whose address appears on the final page '
          'of this guidance.',
          'We investigate as a priority where a report concerns equipment '
          'that has failed in service, where a previous notice on the same '
          'premises has not been complied with, or where the same risk class '
          'has been reported at the same premises twice within a year. '
          'Repetition is weighted more heavily than severity at this stage, '
          'because repetition is evidence about a system and severity is '
          'often evidence about a day.',
          'We will not disclose who reported a matter, and we will tell a '
          'duty holder that a report has been received where doing so is '
          'necessary to resolve it. In small premises those two statements '
          'are in practical tension, and we say so here rather than leaving '
          'people to discover it.'],
         items=[
          ('Which of these would the regulator investigate?',
           ['A dispute about rotas', 'Equipment that failed in service', 'Bullying by a manager with no health risk', 'A disagreement about duties'],
           1, 'Paragraph 3 lists this among the priority categories.',
           {0: 'Paragraph 2 sends rota disputes to a different body.', 2: 'Paragraph 2 excludes bullying with no health risk.', 3: 'Paragraph 2 excludes disagreements about duties.'}),
          ('A breach already put right is normally',
           ['investigated as a priority', 'recorded without investigation', 'forwarded elsewhere', 'closed without record'],
           1,
           'Paragraph 1, which surprises people who wait until they '
           'leave.',
           {0: 'Priority goes to the three categories in paragraph 3.', 2: 'Forwarding happens where the risk belongs elsewhere.', 3: 'The breach is recorded, not closed without trace.'}),
          ('At the assessment stage, repetition is weighted',
           ['less heavily than severity', 'more heavily than severity', 'equally with severity', 'not at all'],
           1, 'Paragraph 3: repetition is evidence about a system.',
           {0: 'Paragraph 3 reverses this at the assessment stage.', 2: 'The two are not weighted equally.', 3: 'Repetition is one of the three priority grounds.'}),
          (
           'The guidance admits a practical tension between '
           'confidentiality and',
           ['speed', 'telling the duty holder', 'cost', 'anonymity'], 1,
           'Paragraph 4, which says so rather than letting people find '
           'out.',
           {0: 'Speed is not what the tension is between.', 2: 'Cost is not mentioned in paragraph 4.', 3: 'Anonymity is the confidentiality side of the tension.'})])],
   listen=[
    dict(heading='Reporting a hazard to the regulator', part='Part 1',
         task='A call to a safety regulator · note completion', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Officer', 'Safety line, Rosalind speaking.'),
          ('Caller', 'Hello. I want to report something at the warehouse '
           'where I work and I am not sure you are the right people.'),
          ('Officer', 'Tell me what it is and I will tell you honestly if we '
           'are not.'),
          ('Caller', 'The loading bay doors. The sensor that stops them '
           'closing has not worked since August and they have been operating '
           'them manually.'),
          ('Officer', 'That is us. Equipment that has failed in service, '
           'which is one of our priority categories. Premises address?'),
          ('Caller', 'Unit nine, Carrowmore Industrial Estate.'),
          ('Officer', 'Unit nine. And have you raised it with the duty '
           'holder?'),
          ('Caller', 'I told my supervisor twice.'),
          ('Officer', 'Your supervisor is almost certainly not the duty '
           'holder. The duty holder is whoever controls the premises, and '
           'their name is on a notice at the main entrance.'),
          ('Caller', 'I have walked past that notice for four years.'),
          ('Officer', 'Everybody has. Have a look on your way in and report '
           'it to that person in writing, and then give them twenty-one '
           'days.'),
          ('Caller', 'And if somebody is hurt in those twenty-one days?'),
          ('Officer', 'Then you do not give them twenty-one days. If the '
           'risk is immediate — and immediate means today, not serious — '
           'you come straight to us and tell them you have.'),
          ('Caller', 'A door that closes on somebody is today.'),
          ('Officer', 'It may well be. Let me ask the question that settles '
           'it: is anybody working under those doors this week?'),
          ('Caller', 'Six of us, every shift.'),
          ('Officer', 'Then that is immediate and I am taking it now. The '
           'risk class is mechanical, and your reference is W-H, then '
           'three-eight-one-six.'),
          ('Caller', 'Will they be told it was me?'),
          ('Officer', 'We will not say. I would rather tell you plainly that '
           'in a unit with six people on a shift, an inspector arriving on '
           'Thursday does not leave much doubt. You can report anonymously '
           'and I would then not be able to ring you back.'),
          ('Caller', 'Put my name on it.'),
          ('Officer', 'Noted, and thank you. One last thing: has this been '
           'reported before, by anybody?'),
          ('Caller', 'Somebody reported the same doors last winter, I '
           'think.'),
          ('Officer', 'Then say so in the form. Twice at the same premises '
           'inside a year moves it up our list on its own.')],
         items=[
          ('Premises: Unit ____________, Carrowmore Industrial Estate',
           None, 'nine', 'Where the caller works on the loading bay.'),
          ('The fault: the ____________ that stops the doors closing',
           None, 'sensor',
           'Not working since August, with doors operated manually.'),
          ('Risk class: ____________', None, 'mechanical',
           'Which the officer assigns while taking the report.'),
          ('Reference: WH____________', None, '3816',
           'Issued once the report is taken as immediate.'),
          ('"Immediate" means ____________, not serious.', None, 'today',
           'Which the officer stresses as the test that decides the '
           'branch.'),
          ('Reporting the same risk twice at one premises within a '
           '____________ raises its priority.', None, 'year',
           'Which the caller is asked to state on the form.')]),
    dict(heading='A short talk: risks people accept', part='Part 2',
         task='A talk at a risk communication seminar · multiple choice and matching', band='l2',
         qtype='Questions 17-20',
         script=[
          ('Speaker', 'I have spent fourteen years asking people which risks '
           'they will accept, and I want to start by dismantling the finding '
           'everybody in this room has already heard, which is that the '
           'public is bad at numbers.'),
          ('Speaker', 'The public is bad at numbers. So is everybody. But '
           'that is not what produces the pattern you are here about, '
           'because the pattern survives when you give people the numbers, '
           'when you give them time, and when you ask people who work with '
           'numbers professionally.'),
          ('Speaker', 'The actual variable is consent. A risk somebody has '
           'chosen is tolerated at between five hundred and a thousand times '
           'the level of an identical risk imposed on them. That is not a '
           'rounding error and it is not innumeracy; it is a consistent and '
           'defensible judgement that the two things are different objects.'),
          ('Speaker', 'And I would argue it is correct. A risk I choose I '
           'can also stop choosing. I control the exposure, I get whatever '
           'benefit it carries, and I knew about it. An imposed risk has '
           'none of those three properties, so treating the two as the same '
           'quantity because the probability matches is the mistake, and it '
           'is our mistake rather than the public’s.'),
          ('Speaker', 'Two other factors move the tolerated level and both '
           'are smaller than consent. Dread matters: risks that kill a few '
           'people at once in a way that is easy to picture are tolerated '
           'less than risks that kill far more people separately. And '
           'familiarity matters, which is why a new technology is held to a '
           'standard the thing it replaces has never met.'),
          ('Speaker', 'The practical consequence for anybody writing a '
           'regulation is that comparing an imposed risk to a chosen one is '
           'not an argument, it is an irritant. If you tell people that the '
           'plant is safer than their own driving, you have told them you do '
           'not understand the objection, and every evaluation I have run '
           'shows that message performing worse than saying nothing.')],
         items=[
          (
           'The "bad at numbers" explanation fails because the pattern '
           'survives when people are given the numbers and '
           '____________.', None, 'time',
           'It also appears among people who work with numbers '
           'professionally.'),
          (
           'A chosen risk is tolerated at how many times the level of '
           'an imposed one?',
           ['Five to ten', 'Fifty to a hundred', 'Five hundred to a thousand', 'Ten thousand'],
           2,
           'Which the speaker calls defensible rather than innumerate.',
           {0: 'Far smaller than the ratio he reports.', 1: 'Still an order below the figure he gives.', 3: 'Higher than the range he names.'}),
          ('Which three properties does a chosen risk have?',
           ['Cheapness, speed, visibility', 'Control, benefit, prior knowledge', 'Novelty, dread, familiarity', 'Consent, cost, scale'],
           1, 'None of which an imposed risk has.',
           {0: 'These are not the properties he lists.', 2: 'Dread and familiarity are the two smaller factors.', 3: 'Consent is the heading, not one of the three '
               'properties.'}),
          (
           'Comparing an imposed risk to a chosen one performs '
           '____________ than saying nothing.', None,
           'worse', 'In every evaluation the speaker has run.')])],
   speak=dict(
    part='Part 1', focus='Safety where you work or study',
    intro=('Two or three sentences each. Concrete detail from your own '
           'experience beats a general observation at this level.'),
    qs=['Is safety taken seriously where you work or study?',
        'Have you ever had safety training?',
        'Do people follow the rules in practice?',
        'Who should be responsible for safety in a workplace?'],
    shape=[('answer', 'Taken very seriously on paper and moderately in '
            'practice.'),
           ('support', 'We have an hour of training every September and a '
            'fire door that is propped open every day.'),
           ('follow-up', 'Which tells you something about where the '
            'attention actually goes.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Reporting an unresolved safety concern',
         prompt=('You have reported a safety problem at work and nothing has '
                 'been done. Write a letter to the regulator. In your '
                 'letter: describe the problem; set out what you have '
                 'already done; say what you would like the regulator to do. '
                 'Write at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing about a mechanical risk at Unit 9, Carrowmore '
          'Industrial Estate, which has been reported internally twice and '
          'remains unresolved.',
          'The sensor that prevents the loading bay doors from closing on a '
          'person has been inoperative since 14 August. The doors have been '
          'operated manually since then, by staff who are also loading, and '
          'six people work beneath them on every shift.',
          'The matter was reported to the duty holder on 2 September and '
          'again on 30 September, on both occasions in writing, and no '
          'action has been taken since. The second reply stated that a part '
          'was on order. I asked for the order reference on 7 October and '
          'have had no response.',
          'I am also aware that the same doors were reported by a colleague '
          'in February of last year. I do not know what came of that report '
          'and raise it because repetition at the same premises may be '
          'relevant to how this one is assessed.',
          'I would ask you to inspect the installation and, if the sensor '
          'cannot be repaired promptly, to require that the bay be taken out '
          'of use while people are working beneath the doors. I am content '
          'to be identified and would prefer to be, since I have raised this '
          'internally under my own name twice already.',
          'Yours faithfully,',
          'J. Okonkwo-Lindahl'],
         notes=[
          'Every claim carries a date, and the record is given as a '
          'sequence: reported, replied to, chased, unanswered. A regulator '
          'assessing whether to act is looking for exactly that sequence, '
          'and a letter that supplies it has done the assessor’s first '
          'half-hour of work.',
          'The fourth paragraph volunteers the earlier report without '
          'claiming to know its outcome. Offering a fact you cannot verify, '
          'and saying that you cannot, is more persuasive than asserting it '
          'and is the register this reader expects.',
          'The request has a fallback: repair, or take the bay out of use. '
          'A request with a second position is far harder to refuse '
          'outright, and it signals that the writer wants the risk closed '
          'rather than the employer punished.'],
         criterion=[('A dated sequence rather than a complaint',
                     'Task Achievement'),
                    ('Volunteering a fact you cannot verify, and saying so',
                     'Task Response'),
                    ('A request with a fallback position',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Factual report with dates, actions and outcomes',
    explain=('A report to an authority is assessed on whether it can be '
             'acted on. These patterns put the date, the action and the '
             'outcome in one sentence and keep the writer out of it.'),
    examples=['The matter was reported on 2 September and no action has been '
              'taken since.',
              'The sensor has been inoperative since 14 August.',
              'I asked for the order reference on 7 October and have had no '
              'response.',
              'I do not know what came of that report.'],
    task='Rewrite each sentence as a factual report with its date and '
         'outcome.',
    items=[('They keep ignoring me.',
            'The matter was reported on 2 and 30 September and no response '
            'has been received to either.'),
           ('The doors are dangerous.',
            'The sensor preventing the doors from closing on a person has '
            'been inoperative since 14 August.'),
           ('Somebody complained before.',
            'A colleague reported the same equipment in February 2023; I do '
            'not know the outcome.'),
           ('Management does not care.',
            'The reply of 30 September stated that a part was on order; a '
            'request for the order reference on 7 October is unanswered.'),
           ('It is only a matter of time.',
            'Six people work beneath the doors on each shift while they are '
            'operated manually.')]),
   vocab=[('duty holder', 'the person legally responsible for premises'),
          ('control measure', 'a step taken to reduce a risk'),
          ('prohibition notice', 'an order to stop an activity at once'),
          ('non-compliance', 'a failure to meet what a rule requires'),
          ('rectify', 'to put a failure right'),
          ('risk class', 'the category a danger is recorded under'),
          ('inoperative', 'not working'),
          ('in service', 'in normal use rather than in testing')],
   expr=[('The matter was reported on... and no action has been taken since',
          'the standard sentence of an unresolved report'),
         ('immediate means today, not serious',
          'defines a term against the obvious misreading'),
         ('repetition is evidence about a system',
          'explains why a second report counts for more'),
         ('I am content to be identified and would prefer to be',
          'converts a risk into a statement of confidence')],
   trans=['furthermore', 'in this connection', 'on both occasions',
          'I would ask you to'],
  ),

  dict(
   sub='Risks people accept',
   step=2,
   read=[
    dict(heading='Four people on risks they take',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 21-26',
         paras=[
          'A  Severin: I climb, and I am tired of being told that climbing '
          'is more dangerous than the things I campaign about. It is. That '
          'is not the inconsistency people think it is, because I chose the '
          'climbing and I did not choose the incinerator, and anybody who '
          'cannot see the difference between those two sentences is not '
          'going to persuade me of anything.',
          'B  Lucinde: I gave up the motorbike when my daughter was born and '
          'I want to be honest that nothing about the risk changed. The '
          'number was the same number. What changed is who else was going to '
          'carry the consequences, and I notice that this is exactly the '
          'reasoning I dismiss when the people near the chemical works use '
          'it.',
          'C  Bartholomew: I work offshore and the safety regime is the '
          'strictest I have encountered anywhere, and it works. What I '
          'resent is being asked to find a two-in-a-million workplace risk '
          'intolerable while the helicopter that takes me there is the most '
          'dangerous twenty minutes of my month and nobody mentions it, '
          'because it is not in the regulations that apply to me.',
          'D  Ngozi: I used to think the public simply could not do '
          'probability, and I ran the comparison study that convinced me '
          'otherwise. Give people the numbers and the time and they produce '
          'the same ranking. What they will not do is treat a risk they '
          'accepted and a risk done to them as the same object, and after '
          'four years I stopped thinking they were wrong about that.'],
         items=[
          (
           'Which person accepts that their own activity is more '
           'dangerous than what they campaign about?',
           ['Severin', 'Lucinde', 'Bartholomew', 'Ngozi'], 0,
           'And argues the difference is consent rather than '
           'magnitude.',
           {1: 'Lucinde notices using reasoning they reject in others.', 2: 'Bartholomew objects to a risk being outside the '
               'applicable rules.', 3: 'Ngozi changed their professional view after running a '
               'study.'}),
          (
           'Which person notices using reasoning they reject in '
           'others?',
           ['Severin', 'Lucinde', 'Bartholomew', 'Ngozi'], 1,
           'About who carries the consequences of a risk.',
           {0: 'Severin accepts that their own activity is more '
               'dangerous than what they campaign about.', 2: 'Bartholomew objects to a risk being outside the '
               'applicable rules.', 3: 'Ngozi changed their professional view after running a '
               'study.'}),
          (
           'Which person objects to a risk being outside the '
           'applicable rules?',
           ['Severin', 'Lucinde', 'Bartholomew', 'Ngozi'], 2,
           'The helicopter journey, which no regulation covers.',
           {0: 'Severin accepts that their own activity is more '
               'dangerous than what they campaign about.', 1: 'Lucinde notices using reasoning they reject in others.', 3: 'Ngozi changed their professional view after running a '
               'study.'}),
          (
           'Which person changed their professional view after running '
           'a study?',
           ['Severin', 'Lucinde', 'Bartholomew', 'Ngozi'], 3,
           'Which showed people produce the same ranking given numbers '
           'and time.',
           {0: 'Severin accepts that their own activity is more '
               'dangerous than what they campaign about.', 1: 'Lucinde notices using reasoning they reject in others.', 2: 'Bartholomew objects to a risk being outside the '
               'applicable rules.'}),
          (
           'Lucinde believes the risk of motorcycling fell after her '
           'daughter was born.', ['Yes', 'No', 'Not Given'],
           1, 'She states that nothing about the risk changed.',
           {0: 'Yes would need a fall; she says nothing about the risk '
               'changed.', 2: 'Not Given is wrong because she addresses the risk '
               'directly.'}),
          (
           'Bartholomew considers the offshore safety regime '
           'ineffective.', ['Yes', 'No', 'Not Given'], 1,
           'He calls it the strictest he has encountered and says it '
           'works.',
           {0: 'Yes would need ineffectiveness; he calls it the '
               'strictest he has met.', 2: 'Not Given is wrong because he rates the regime.'})])],
   listen=[
    dict(heading='Two regulators disagree about proportionality',
         part='Part 3', task='A conversation between two regulators · multiple choice',
         band='l3', qtype='Questions 27-32',
         script=[
          ('Marisol', 'I am going to recommend we close the whole category '
           'and I would rather fight about it here than in front of the '
           'board.'),
          ('Yannick', 'Then let me be the board. Two deaths in nine years, '
           'across four hundred sites. You are proposing a control that '
           'costs the sector eleven million a year.'),
          ('Marisol', 'I am, and I accept the arithmetic is against me if '
           'the arithmetic is deaths divided by pounds.'),
          ('Yannick', 'What else is it?'),
          ('Marisol', 'It is who agreed to it. Nobody working in those '
           'buildings chose this exposure, nobody is paid extra for it, and '
           'most of them do not know the category exists. That is an imposed '
           'risk, and we hold imposed risks to a different standard for '
           'reasons that are in our own guidance.'),
          ('Yannick', 'I accept the principle and I think you are applying '
           'it past the point where it helps. Eleven million a year buys '
           'about nine lives a year if it is spent on the things we already '
           'know work. You are not choosing between this control and '
           'nothing. You are choosing between this control and nine.'),
          ('Marisol', 'That is the strongest version of the objection and it '
           'is the one I find hardest. Can I say why I still disagree?'),
          ('Yannick', 'Please.'),
          ('Marisol', 'Because the eleven million does not go to those nine '
           'lives. It goes back to the operators. The counterfactual is not '
           'a better safety programme; it is a slightly larger dividend, and '
           'we both know which of those two actually happens.'),
          ('Yannick', 'That is a fair hit and it does not dispose of the '
           'point. It means the comparison should be made against what will '
           'really happen rather than against the ideal, which is an '
           'argument for insisting on the better use of the money, not for '
           'pretending the trade-off does not exist.'),
          ('Marisol', 'Would you support the control if the sector funded '
           'the other programme as a condition of it?'),
          ('Yannick', 'I would support that enthusiastically and I would '
           'tell you now that we have no power to require it.'),
          ('Marisol', 'We have the power to make it a condition of the '
           'phasing. Three years instead of one, conditional on the '
           'programme.'),
          ('Yannick', 'That is cleverer than anything I had. I will support '
           'it, and I want the trade-off written into the paper rather than '
           'left in this room, because somebody is going to ask in four '
           'years what we knew.')],
         items=[
          (
           'Marisol proposes a control costing the sector ____________ '
           'million a year.', None, 'eleven',
           'Against two deaths in nine years across four hundred '
           'sites.'),
          (
           'Her argument rests on the risk being ____________ rather '
           'than chosen.', None, 'imposed',
           'Nobody in those buildings chose the exposure or is paid '
           'for it.'),
          (
           'Yannick objects that the same money would buy about '
           '____________ lives a year elsewhere.', None,
           'nine',
           'So the choice is not between the control and nothing.'),
          (
           'Marisol answers that the money would actually go back to '
           'the ____________.', None, 'operators',
           'Making the counterfactual a dividend rather than nine '
           'lives.'),
          ('Yannick calls that',
           ['irrelevant', 'a fair hit that does not dispose of the point', 'decisive', 'outside their powers'],
           1,
           'And an argument for insisting on better use of the money.',
           {0: 'He treats her point as relevant and partial.', 2: 'He says it does not dispose of his point.', 3: 'Their powers come up later, over the condition.'}),
          ('What do they agree to propose?',
           ['Dropping the control', 'A three-year phasing conditional on the programme', 'An immediate ban', 'A further study'],
           1, 'With the trade-off written into the paper.',
           {0: 'She keeps the control, with conditions.', 2: 'No ban is proposed by either regulator.', 3: 'No further study is suggested.'})])],
   speak=dict(
    part='Part 1 into Part 2', focus='Risk',
    longturn=[('The risk I want to describe is leaving a permanent job to join '
               'a company of six people that had been running for fourteen '
               'months.'),
              ('I was considering it because the work was the work I wanted to '
               'do and nobody established was offering it to me, and because I '
               'had watched two colleagues do the same thing, one of whom was '
               'now doing very well and one of whom had come back.'),
              ('What I decided was to go, with two conditions I set for '
               'myself: I would do it only if I had nine months of expenses '
               'saved, which took me a year to arrange, and only if the '
               'company would put the equity terms in writing before I '
               'resigned.'),
              ('How I weighed it up at the time was more structured than I '
               'would have expected of myself, and also wrong in one important '
               'way. I listed what I would lose if it failed and found that '
               'the honest answer was about eighteen months of earnings and '
               'some pride, both recoverable. I listed what I would lose by '
               'not going, which was harder, because it was a probability '
               'rather than a quantity. What I failed to think about at all '
               'was the correlation: I assumed my savings were safe if the job '
               'went, and if the sector had turned, which is in fact why small '
               'companies fail, my next job would have been hard to find at '
               'the same moment. I was lucky rather than right about that, and '
               'it is the thing I would now add to the calculation.')],
    intro=('Short answers, then the long turn. At band 7 the explanation '
           'bullet should carry most of the two minutes.'),
    cue=('Describe a risk you decided to take.',
         ['what the risk was', 'why you were considering it',
          'what you decided',
          'and explain how you weighed it up at the time']),
    qs=['Do you consider yourself a cautious person?',
        'Are young people more willing to take risks?',
        'Now look at the card. You have one minute to make notes.',
        'Should people be free to take risks that only affect '
        'themselves?'],
    shape=[('answer', 'I left a secure job for a department that had '
            'existed for six months.'),
           ('support', 'The pay was the same and the organisation was not '
            'obviously stable.'),
           ('follow-up', 'What I actually weighed was how recoverable it '
            'was.'),
           ('support', 'I could have gone back to the same kind of work '
            'within a year.'),
           ('follow-up', 'Which I now think is the only risk calculation I '
            'have ever done honestly.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Protecting people from risks they choose',
         prompt=('Some people believe governments should protect individuals '
                 'from risks they have chosen to take. To what extent do you '
                 'agree? Write at least 250 words.'),
         model=[
          'The strength of this proposition depends entirely on a '
          'distinction the question suppresses, which is that almost no risk '
          'is chosen by one person alone, and the degree to which it is '
          'chosen varies across a wide range rather than taking one of two '
          'values.',
          'Where a risk really is confined to the person choosing it, I think '
          'the case for intervention is weak and the usual arguments for it '
          'are worse than their advocates suppose. A chosen risk differs '
          'from an imposed one in three respects that matter: the person can '
          'stop, the person receives whatever benefit it carries, and the '
          'person knew. Overriding a decision with those three properties '
          'requires an argument that the chooser is mistaken about their own '
          'interests, and that argument is available far less often than '
          'legislators believe.',
          'The difficulty is how rarely the condition holds. A motorcyclist '
          'who is injured is treated at public expense by a trauma service '
          'that must be staffed for the worst week of the year, and the '
          'dependents of a climber are not consulted about the route. This '
          'does not establish that such activities should be restricted; it '
          'establishes that calling them purely self-regarding is false, and '
          'that the real question is how much of the consequence falls '
          'elsewhere.',
          'There is also a problem with the word "chosen" that the strong '
          'libertarian version of this argument never confronts. A worker '
          'who accepts a dangerous job in a town with one employer has '
          'chosen in a sense, and a cyclist who rides on a road built for '
          'lorries has chosen in a much weaker sense, and the policy '
          'conclusions differ accordingly.',
          'My own position is therefore that the state should intervene in '
          'proportion to how much of a risk falls on people who did not '
          'choose it, which handles both ends of the range without needing a '
          'separate principle for either. It licenses almost nothing against '
          'a solitary climber, a great deal against an employer, and in the '
          'contested middle it at least tells you what to measure, which is '
          'more than the question as posed does.'],
         notes=[
          'The first sentence identifies what the prompt suppresses: that '
          '"chosen" is a range, not a category. Finding the false binary in '
          'a question and saying so is one of the highest-value moves '
          'available in Task 2.',
          'Paragraph 3 concedes against its own position and then limits the '
          'concession precisely — the point is not that climbing should be '
          'restricted but that calling it self-regarding is false. '
          'Conceding and then bounding the concession is a band 7 and above '
          'skill.',
          'The conclusion proposes a single criterion that scales across the '
          'range, rather than a compromise between the two positions. A '
          'principle that handles the easy cases and tells you what to '
          'measure in the hard ones is a stronger ending than a '
          'recommendation.'],
         criterion=[('Identifying a false binary in the question',
                     'Task Response'),
                    ('Conceding and then bounding the concession',
                     'Task Response'),
                    ('A criterion that scales rather than a compromise',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Concessive-contrastive chains at length',
    explain=('At band 7 a concession runs for a sentence or two and then '
             'turns, and the turn has to be visible. These patterns concede, '
             'bound the concession, and then press the point.'),
    examples=['A risk chosen and a risk imposed are not the same object.',
              'That is a fair hit and it does not dispose of the point.',
              'This does not establish that such activities should be '
              'restricted; it establishes that calling them self-regarding '
              'is false.',
              'I accept the principle and I think you are applying it past '
              'the point where it helps.'],
    task='Rewrite each pair so that the concession is bounded rather than '
         'open.',
    items=[('You are right about the cost. I still disagree.',
            'The cost figure is right, and it counts against the control '
            'only if the money would otherwise be spent on safety.'),
           ('Climbing is dangerous. People should be allowed to climb.',
            'Climbing is more dangerous than most regulated risks, which '
            'tells us about consent rather than about magnitude.'),
           ('The regime works. I object to it.',
            'The regime works, and my objection is to what it leaves outside '
            'its scope rather than to what it covers.'),
           ('That is a good argument. It does not change my view.',
            'That is the strongest form of the objection and it does not '
            'reach the premise my position rests on.'),
           ('People misjudge probability. They are not wrong here.',
            'People do misjudge probability, and the pattern in question '
            'survives when the numbers are supplied.')]),
   vocab=[('self-chosen', 'accepted by the person who bears it'),
          ('imposed', 'placed on somebody without their agreement'),
          ('tolerability', 'the level of a risk a society will accept'),
          ('precaution', 'a step taken against a possible harm'),
          ('susceptibility', 'how readily a person is harmed by something'),
          ('dread', 'the fear attached to a vivid kind of harm'),
          ('self-regarding', 'affecting only the person who acts'),
          ('lead-in period', 'the time allowed before a rule bites')],
   expr=[('A risk chosen and a risk imposed are not the same object',
          'denies that equal probabilities are equal things'),
         ('you are choosing between this control and nine',
          'states an opportunity cost as a choice'),
         ('the counterfactual is not a better programme; it is a dividend',
          'corrects the comparison being made'),
         ('I would rather fight about it here than in front of the board',
          'invites an objection in order to test it')],
   trans=['whereas', 'that said', 'where the condition holds',
          'my own position'],
  ),

  dict(
   sub='Counting rare events',
   step=3,
   read=[
    dict(heading='Why a one-in-two-hundred-year event happened twice',
         kind='Data article',
         task='Matching information, sentence completion and True/False/Not Given',
         band='gt_work', qtype='Questions 33-38',
         figure=_EXTR,
         paras=[
          'The chart shows the same rainfall record counted in two ways. '
          'Both series report the number of extreme events per decade at one '
          'station between 1961 and 2020. They differ only in what counts as '
          'extreme, and they tell opposite stories.',
          'The first series counts events exceeding a fixed threshold, set '
          'from the distribution of rainfall between 1961 and 1990. On that '
          'measure the count rises from nine in the 1960s to twenty-seven in '
          'the 2010s, a threefold increase, with the whole of the rise after '
          '1990.',
          'The second series counts events exceeding a threshold '
          'recalculated from the preceding thirty years at each decade. On '
          'that measure the count sits between ten and eleven throughout, '
          'with no trend at all. Nothing has been fabricated in either '
          'series; the underlying rainfall figures are identical.',
          'The explanation is that the second measure moves its own '
          'baseline. If the threshold for an extreme event is redefined each '
          'decade from recent experience, then a decade in which rainfall is '
          'generally heavier has a higher bar, and the number of events '
          'clearing it stays roughly constant by construction. The measure '
          'is answering the question "how unusual was this decade compared '
          'with the decade before it", which is a reasonable question and is '
          'not the question most readers assume.',
          'This matters practically because the second kind of measure is '
          'very common in engineering standards. A structure designed to '
          'withstand a one-in-two-hundred-year event is designed against a '
          'threshold derived from a historical record, and if that record is '
          'periodically updated the design standard quietly moves with it '
          'while the label stays the same.',
          'The phrase "one-in-two-hundred-year event" carries an assumption '
          'that is rarely examined: that the underlying distribution is not '
          'changing. Where it is changing, the phrase is not wrong so much '
          'as undefined, because the frequency it names depends on which '
          'period you compute it over, and two competent engineers using two '
          'defensible periods will specify different structures.',
          'None of this is an argument for the fixed baseline either. A '
          'threshold fixed in 1961 becomes less informative every year about '
          'what is unusual now, which is what an operator deciding whether '
          'to close a road actually needs to know. The two measures answer '
          'different questions, and a chart showing one of them without '
          'saying which is not a neutral presentation of the data.'],
         items=[
          (
           'Which paragraph explains why the second series shows no '
           'trend?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           2,
           'A redefined threshold rises with the rainfall, by '
           'construction.',
           {0: 'Paragraph 2 describes the fixed-threshold series.', 1: 'Paragraph 3 describes the recalculated series.', 3: 'Paragraph 5 concerns engineering design standards.'}),
          ('Which paragraph concerns engineering design standards?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           2,
           'Where an updated record moves the standard while the label '
           'stays.',
           {0: 'Paragraph 3 describes the recalculated series.', 1: 'Paragraph 4 explains why the second series shows no '
               'trend.', 3: 'Paragraph 6 examines the phrase itself.'}),
          (
           'Which paragraph argues against the fixed baseline as well?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 4'],
           2,
           'A 1961 threshold says less each year about what is unusual '
           'now.',
           {0: 'Paragraph 5 is about engineering standards.', 1: 'Paragraph 6 examines the phrase itself.', 3: 'Paragraph 4 explains the moving baseline.'}),
          ('Events against the fixed threshold rose from nine to '
           '____________ per decade.', None, 'twenty-seven',
           'Paragraph 2, with the whole of the rise after 1990.'),
          (
           'The two series are computed from different rainfall '
           'records.', ['True', 'False', 'Not Given'], 1,
           'Paragraph 3 says the underlying rainfall figures are '
           'identical in both.',
           {0: 'True contradicts paragraph 3, which insists the '
               'figures are the same.', 2: 'Not Given is wrong because paragraph 3 addresses it in '
               'those words.'}),
          (
           'The writer recommends the fixed baseline over the '
           'recalculated one.',
           ['True', 'False', 'Not Given'], 1,
           'The last paragraph says this is not an argument for the '
           'fixed baseline either.',
           {0: 'True would need a recommendation, and the last '
               'paragraph withholds one.', 2: 'Not Given is wrong because the writer addresses the '
               'fixed baseline directly.'})])],
   listen=[
    dict(heading='An engineer on return periods', part='Part 4',
         task='A lecture on designing for rare events · multiple choice and matching', band='l4',
         qtype='Questions 39-44',
         figure=_EXTR,
         script=[
          ('Engineer', 'I want to take apart a phrase that appears in every '
           'design code I have ever worked to, and that almost nobody using '
           'it can define: the one-in-two-hundred-year event. By the end of '
           'the hour I would like you to be unable to say it without '
           'flinching slightly.'),
          ('Engineer', 'Start with the chart, which is one rainfall record '
           'counted twice. Against a threshold fixed from 1961 to 1990, the '
           'count goes from nine events a decade to twenty-seven. Against a '
           'threshold recalculated each decade, it sits at ten or eleven the '
           'whole way across. Same rain. Same station. Nothing has been '
           'manipulated.'),
          ('Engineer', 'The second measure moves its own baseline, which '
           'means it cannot show a trend in the thing it is measuring. Raise '
           'the bar whenever the jumpers get better and you will report that '
           'athletics has not improved. That is not a criticism of the '
           'measure; it is a statement of what question it answers, which is '
           'how unusual this decade was relative to the one before it.'),
          ('Engineer', 'Now the design code. A one-in-two-hundred-year '
           'return period means a one in two hundred chance in any year, and '
           'that probability is computed from a record. Update the record, '
           'and the number of millimetres that phrase refers to changes '
           'while the phrase on the drawing does not. I have seen two '
           'structures on the same river designed to the same stated '
           'standard and differing by eleven per cent in capacity, and '
           'neither engineer did anything wrong.'),
          ('Engineer', 'Underneath all of this is an assumption called '
           'stationarity: that the distribution generating the events is not '
           'itself changing. Where that assumption fails, the return period '
           'is not inaccurate. It is undefined, which is a different and '
           'more awkward problem, because you cannot fix an undefined '
           'quantity by measuring more carefully.'),
          ('Engineer', 'So what do we do? Three things, and the third is the '
           'one I would argue for. State the period the threshold was '
           'computed over, on the drawing, every time. Design to a range '
           'rather than to a number where the record is short. And stop '
           'reporting return periods to the public at all, because "one in '
           'two hundred years" is heard as "not in my lifetime" and it means '
           'nothing of the sort.'),
          ('Engineer', 'If you take one sentence away, take this one. A '
           'return period is a property of a record, not of a river. Change '
           'the record and you have changed the standard without changing a '
           'word on the drawing, and the only defence against that is '
           'writing the period you computed it over next to the number, '
           'every time, for the rest of your career.')],
         items=[
          (
           'Against the fixed threshold, events per decade rose from '
           'nine to ____________.', None, 'twenty-seven',
           'While the recalculated series stayed at ten or eleven.'),
          (
           'The engineer\u2019s athletics comparison illustrates that a '
           'moving ____________ cannot show a trend.', None,
           'baseline',
           'Raise the bar as the jumpers improve and no improvement is '
           'reported.'),
          (
           'Two structures on one river built to the same stated '
           'standard differed by ____________ per cent.',
           None, 'eleven',
           'Because the underlying record had been updated between '
           'them.'),
          (
           'Stationarity is the assumption that the ____________ '
           'generating events is not changing.', None,
           'distribution',
           'Where it fails, the return period is undefined.'),
          (
           'Where the assumption fails, the return period is '
           '____________.', None, 'undefined',
           'Which cannot be fixed by measuring more carefully.'),
          ('Which recommendation does the engineer most argue for?',
           ['Stating the computation period', 'Designing to a range', 'Not reporting return periods to the public', 'Updating records annually'],
           2, 'Because the phrase is heard as "not in my lifetime".',
           {0: 'Stating the period is his first recommendation.', 1: 'Designing to a range is his second.', 3: 'He does not recommend annual updating.'})])],
   speak=dict(
    part='Part 3', focus='Planning for things that rarely happen',
    intro=('Five or six sentences. Try once to say that a measure answers a '
           'different question from the one assumed.'),
    qs=['How should a country prepare for rare disasters?',
        'Why do people underestimate rare events?',
        'Should money be spent on risks that may never occur?',
        'How should rare risks be explained to the public?'],
    shape=[('answer', 'The difficulty is that the usual measure answers a '
            'different question.'),
           ('support', 'A one-in-two-hundred-year event is computed from a '
            'record of some chosen length.'),
           ('follow-up', 'Change the record and the same phrase means a '
            'different quantity of rain.'),
           ('support', 'And the public hears it as "not in my '
            'lifetime".'),
           ('follow-up', 'So I would report the period it was computed over '
            'and stop using the phrase outside engineering.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Recorded extreme events by decade',
         prompt=('The chart below shows the number of extreme rainfall '
                 'events recorded per decade at one station, counted against '
                 'two different thresholds. Summarise the information by '
                 'selecting and reporting the main features, and make '
                 'comparisons where relevant. Write at least 150 words.'),
         figure=_EXTR,
         model=[
          'The bar chart compares the number of extreme rainfall events '
          'recorded at a single station in each decade from the 1960s to the '
          '2010s, counted in two ways: against a threshold fixed from the '
          'period 1961 to 1990, and against a threshold recalculated at each '
          'decade. Overall, the two counts diverge sharply after 1990, with '
          'the fixed-threshold count rising steeply while the recalculated '
          'count remains almost flat throughout.',
          'Measured against the fixed threshold, the number of events is '
          'broadly stable for the first three decades, moving only between '
          'nine and eleven. From the 1990s it rises continuously, reaching '
          'fourteen in that decade, nineteen in the 2000s and twenty-seven '
          'in the 2010s — three times the figure for the 1960s.',
          'Measured against the recalculated threshold, there is no '
          'comparable movement at any point. The count stands at ten in the '
          '1960s and eleven in the 2010s, and the intervening decades vary '
          'only between those two values.',
          'The divergence between the two series is therefore the main '
          'feature. The two measures agree closely until 1990, differing by '
          'at most one event per decade, and separate thereafter, until by '
          'the 2010s the fixed-threshold count is roughly two and a half '
          'times the recalculated one.'],
         notes=[
          'The opening sentence states what the two series actually measure, '
          'because here the difference between them is the whole content of '
          'the chart. On any chart whose two series share a subject, '
          'defining them is part of the Overall statement, not preamble.',
          'Each series gets a paragraph and the figures chosen mark its '
          'turning point. Note that no sentence here claims the rainfall '
          'changed: Task 1 reports what the chart shows, and attributing a '
          'cause would be the commonest way to lose Task Achievement marks '
          'on this visual.',
          'The final paragraph quantifies the divergence at both ends — at '
          'most one event apart before 1990, two and a half times apart by '
          'the 2010s. On a chart built around a divergence, measuring it is '
          'the selection the rubric is asking for.'],
         criterion=[('Defining what each series measures in the Overall',
                     'Task Achievement'),
                    ('Reporting without attributing a cause',
                     'Task Achievement'),
                    ('Quantifying the divergence at both ends',
                     'Coherence and Cohesion')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing a rate against a moving baseline',
    fix=dict(
     text=('The rate of serious accidents fell by a third, but the number of '
           'vehicles on the road rose by half in the same years. The rate is '
           'therefore falling against a rising baseline, which make the '
           'improvement larger than it first appears. Comparing with 2010, the '
           'road is now about twice as safe per kilometre travelled.'),
     faults=[('which make the improvement larger',
              'which makes the improvement larger',
              ('Which stands for the whole preceding clause and takes a '
               'singular verb.')),
             ('Comparing with 2010',
              'Compared with 2010',
              ('The fixed form is compared with; comparing with would mean the '
               'road is doing the comparing.')),
             ('the road is now about twice as safe per kilometre travelled',
              'the roads are now about twice as safe per kilometre travelled',
              ('The subject is the road network as a whole, which takes the '
               'plural in this idiom.'))]),
    explain=('Where a measure redefines itself as it goes, ordinary '
             'comparison language becomes false. These patterns describe the '
             'measure and the movement in one sentence.'),
    examples=['The return period assumes a climate that no longer holds.',
              'The threshold is recalculated each decade, so the count '
              'cannot rise.',
              'Measured against a fixed baseline the count trebles; against '
              'a moving one it does not change.',
              'The label stayed the same while the quantity it referred to '
              'moved.'],
    task='Rewrite each claim so that the baseline is named.',
    items=[('Extreme events have not become more frequent.',
            'Against a threshold recalculated each decade, the count of '
            'extreme events has not changed.'),
           ('Extreme events have trebled.',
            'Against the 1961 to 1990 threshold, the count has risen from '
            'nine events a decade to twenty-seven.'),
           ('The standard has not changed.',
            'The stated standard is unchanged; the quantity of rainfall it '
            'refers to has risen with each revision of the record.'),
           ('Rainfall is more extreme now.',
            'Rainfall that would have been in the top one per cent of the '
            '1961 to 1990 distribution now occurs three times as often.'),
           ('The two charts disagree.',
            'The two series count the same events against different '
            'thresholds, which is why only one of them shows a trend.')]),
   vocab=[('return period', 'the average interval between events of a '
           'size'),
          ('exceedance', 'an occasion when a threshold is passed'),
          ('stationarity', 'the assumption that a distribution is not '
           'changing'),
          ('reference period', 'the years a measure is computed against'),
          ('design code', 'the standard a structure must be built to'),
          ('by construction', 'as an automatic consequence of the method'),
          ('undefined', 'having no determinate value as stated'),
          ('recalculated', 'computed again from newer data')],
   expr=[('The return period assumes a climate that no longer holds',
          'names a failed assumption under a standard'),
         ('raise the bar whenever the jumpers get better',
          'an analogy for a self-updating measure'),
         ('not inaccurate; it is undefined',
          'distinguishes two kinds of failure'),
         ('a chart showing one of them without saying which is not '
          'neutral', 'treats a presentation choice as a claim')],
   trans=['while', 'by contrast', 'taken together', 'measured against'],
  ),

  dict(
   sub='Why regulation lags',
   step=4,
   read=[
    dict(heading='Writing a rule for a technology that moves',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and note completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'The complaint that regulation always lags behind technology is '
          'ordinarily offered as an observation about speed and is better '
          'understood as a statement about a trade-off that has no good '
          'resolution. Rules can be written in two registers, each of which '
          'fails in a characteristic way, and the lag is produced by '
          'regulators choosing between those failures rather than by any '
          'shortage of urgency.',
          'A prescriptive rule names the thing it governs: it '
          'specifies the guard, the voltage, the data field, the test. '
          'Its great merit is that compliance is a matter of fact: an '
          'inspector can establish in an afternoon whether the guard '
          'is fitted, and a court can decide the question without '
          'hearing expert evidence about intentions. That property is '
          'worth more than it sounds. A rule whose breach can be '
          'established without argument is a rule a regulator with '
          'limited resources can actually use, and most enforcement '
          'everywhere is done by such rules.',
          'Its characteristic failure is obsolescence with evasion. A rule '
          'precise enough to enforce is specific enough to go round, and the '
          'going round is ordinarily lawful. A device redesigned so that the '
          'named component is absent complies with the rule and presents the '
          'identical risk, and the regulator must then write a second rule '
          'naming the new arrangement, which is the activity that looks from '
          'outside like perpetual lateness. The pattern is visible in any '
          'long-running regime: a schedule of technical requirements that '
          'has been amended nineteen times, each amendment a response to a '
          'design that complied with the previous version.',
          'A principle-based rule names the outcome instead. It requires '
          'that risks be reduced so far as is reasonably practicable, that '
          'systems be designed with due regard to foreseeable misuse, that '
          'data be processed fairly. Such rules do not become obsolete, '
          'because they were never tied to a mechanism, and they apply to '
          'the technology that arrives next year without amendment. This '
          'is why such duties survive for decades while the prescriptive '
          'schedules beneath them are rewritten continuously.',
          'Their characteristic failure is unenforceability at the margin. '
          'Whether a firm reduced a risk so far as was reasonably '
          'practicable is a question that can be argued either way by '
          'competent people, and arguing it costs a regulator with sixty '
          'inspectors more than it costs a company with a litigation budget. '
          'The predictable result is that principle-based rules are enforced '
          'against small firms, which settle, and negotiated with large '
          'ones, which do not. Nobody inside the system disputes this '
          'description, and it is not a charge of corruption: it is the '
          'arithmetic of legal spending, and it would hold with saints '
          'running the agency.',
          'There is a further asymmetry that the usual discussion omits. '
          'Prescriptive rules are easy to write and hard to keep current; '
          'principle-based rules are hard to write and easy to keep. '
          'Regulators are staffed and funded on the assumption that '
          'rule-writing is an occasional project rather than a permanent '
          'function, which systematically favours the register that will '
          'need the most revision and least suits the arrangement. An '
          'agency with a standing drafting team and a small inspectorate '
          'would make quite different choices from one with the reverse, '
          'and almost all of them have the reverse.',
          'The hybrid that most mature regimes have converged on is a '
          'principle with prescriptive safe harbours: the general duty '
          'states the outcome, and a schedule lists arrangements that are '
          'deemed to satisfy it. A firm may comply by following the schedule '
          'or by demonstrating that its own arrangement meets the duty. This '
          'is better than either pure form and it has its own failure, which '
          'is that the safe harbours become the de facto standard and the '
          'duty stops doing any work. Firms comply with the schedule, '
          'courts treat the schedule as the measure of reasonableness, and '
          'within a decade the general duty is a preamble rather than an '
          'obligation.',
          'The evidence on timing is less flattering to regulators than they '
          'would like and less damning than critics assert. Across a sample '
          'of twenty-four technologies, the median interval between '
          'widespread use and the first binding rule was six years, and the '
          'interval was substantially shorter where an existing general duty '
          'could be applied without new legislation. Where a new statute was '
          'required the median was eleven years, and in the majority of '
          'those cases the drafting was completed years before a '
          'parliamentary slot became available. The variation around that '
          'median is also informative: the fastest cases were those where '
          'an existing duty could be extended by guidance, and the slowest '
          'involved no technical difficulty at all.',
          'That last finding relocates the problem. A regulator that has '
          'written a rule and cannot enact it is not lagging behind '
          'technology; it is waiting behind a legislature, and the two '
          'failures call for completely different remedies. The first would '
          'be addressed by more technical staff and the second by delegated '
          'powers, and the public argument has for thirty years recommended '
          'the first while the evidence has consistently pointed at the '
          'second. The two are not merely different; they are almost '
          'opposite, since a well-staffed agency that still cannot enact '
          'anything will produce longer delays and better-drafted rules, '
          'which is exactly what the record demonstrates.',
          'None of this means the lag is costless or that the trade-off '
          'should be accepted as given. It means that proposals to fix it by '
          'exhortation — regulators should be more agile, should think '
          'ahead, should understand the technology better — are addressed to '
          'the part of the problem that is not binding, which is why thirty '
          'years of such proposals have produced so little measurable '
          'change.'],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['What a prescriptive rule is', 'Obsolescence and lawful evasion', 'What a principle-based rule is', 'Unenforceability at the margin'],
           1,
           'A rule precise enough to enforce is specific enough to go '
           'round.',
           {0: 'What a prescriptive rule is, is paragraph 2.', 2: 'What a principle-based rule is, is paragraph 4.', 3: 'Unenforceability at the margin is the heading for '
               'paragraph 5.'}),
          ('Choose the best heading for paragraph 5.',
           ['What a principle-based rule is', 'Unenforceability at the margin', 'The staffing asymmetry', 'The hybrid regime'],
           1,
           'Enforced against small firms and negotiated with large '
           'ones.',
           {0: 'What a principle-based rule is, is paragraph 4.', 2: 'The staffing asymmetry is paragraph 6.', 3: 'The hybrid regime is paragraph 7.'}),
          ('Choose the best heading for paragraph 9.',
           ['The hybrid regime', 'The evidence on timing', 'Waiting behind a legislature', 'Exhortation and its limits'],
           2,
           'A written rule awaiting a parliamentary slot is a '
           'different failure.',
           {0: 'The hybrid regime is paragraph 7.', 1: 'The evidence on timing is paragraph 8.', 3: 'Exhortation and its limits are paragraph 10.'}),
          (
           'The writer believes regulators lag mainly through lack of '
           'urgency.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1 attributes the lag to a trade-off rather than '
           'to urgency.',
           {0: 'Yes would need urgency as the cause; paragraph 1 names '
               'a trade-off.', 2: 'Not Given is wrong because the lag is explained.'}),
          ('The writer believes the hybrid regime has no drawbacks.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 7: the safe harbours become the standard and the '
           'duty stops working.',
           {0: 'Yes would need none; paragraph 7 names the one that '
               'matters.', 2: 'Not Given is wrong because the regime is assessed.'}),
          ('Across twenty-four technologies the median interval before a '
           'binding rule was ____________ years.', None, 'six',
           'Paragraph 8, rising to eleven where a new statute was '
           'required.'),
          ('Principle-based rules are enforced against small firms and '
           '____________ with large ones.', None, 'negotiated',
           'Paragraph 5, because contesting them is expensive.'),
          ('The writer says a regulator waiting for a parliamentary slot is '
           'waiting behind a ____________.', None, 'legislature',
           'Paragraph 9, which calls for delegated powers rather than more '
           'staff.')])],
   listen=[
    dict(heading='A lecture on regulatory design', part='Part 4',
         task='A lecture on how rules are written · multiple choice', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'You will all have heard that regulation lags behind '
           'technology. It does. What I want to do today is show you that '
           'this is a statement about a trade-off rather than about speed, '
           'and that almost every remedy proposed in public is aimed at the '
           'part of the problem that is not binding.'),
          ('Lecturer', 'Two registers. A prescriptive rule names the thing: '
           'this guard, this voltage, this data field. Wonderful to enforce '
           '— an inspector settles compliance in an afternoon and a court '
           'needs no expert evidence. And a rule precise enough to enforce '
           'is specific enough to go round. Redesign the device so the named '
           'component is absent and you comply with the rule and present the '
           'same risk, lawfully.'),
          ('Lecturer', 'A principle-based rule names the outcome instead: '
           'reduce the risk so far as is reasonably practicable. That never '
           'goes obsolete, because it was never attached to a mechanism. Its '
           'failure is at the margin. Whether you did reduce the risk so far '
           'as was reasonably practicable can be argued both ways, and '
           'arguing it costs me, with sixty inspectors, far more than it '
           'costs a company with a litigation budget.'),
          ('Lecturer', 'Which produces the pattern you can see in any '
           'enforcement register. Principle-based duties are enforced '
           'against small firms, who settle, and negotiated with large ones, '
           'who do not. That is not corruption. It is the predictable output '
           'of an asymmetry in legal spending, and it would happen with '
           'saints running the agency.'),
          ('Lecturer', 'Now the part that changed my own view. A colleague '
           'went through twenty-four technologies and measured the interval '
           'between widespread use and the first binding rule. Median six '
           'years. But where a new statute was needed the median was eleven, '
           'and in most of those cases the text had been drafted years '
           'before anybody could find parliamentary time for it.'),
          ('Lecturer', 'So the regulator was not lagging behind the '
           'technology. It was waiting behind a legislature, which is a '
           'completely different failure with a completely different remedy. '
           'More technical staff fixes the first. Delegated powers fix the '
           'second. And for thirty years the public conversation has '
           'recommended the first, which is why thirty years of it has '
           'changed almost nothing.'),
          ('Lecturer', 'I will end on the uncomfortable implication for '
           'those of you heading into this work. The reform that would '
           'matter is one no regulator can make for itself, which means the '
           'most useful thing a technically expert official can do is '
           'explain to a legislature why its own timetable is the binding '
           'problem. That is a political skill, and it is not the one any '
           'of you were recruited for.')],
         items=[
          (
           'The lecturer says the lag is a statement about a '
           '____________.', None, 'trade-off',
           'Rather than about urgency or capability.'),
          (
           'A prescriptive rule is easy to enforce because compliance '
           'is',
           ['negotiable', 'a matter of fact', 'self-certified', 'rarely checked'],
           1,
           'An inspector settles it in an afternoon without expert '
           'evidence.',
           {0: 'Negotiation belongs to the principle-based rule.', 2: 'Self-certification is not part of his account.', 3: 'He says such rules are the ones actually enforced.'}),
          ('A principle-based rule fails at the ____________.', None,
           'margin',
           'Where whether a duty was met can be argued either way.'),
          ('The enforcement pattern he describes results from',
           ['corruption', 'an asymmetry in legal spending', 'poor drafting', 'political pressure'],
           1, 'And would happen with saints running the agency.',
           {0: 'He says explicitly that it is not corruption.', 2: 'Drafting quality is not what produces the pattern.', 3: 'Political pressure is not the mechanism he names.'}),
          (
           'Where a new statute was required, the median interval was '
           '____________ years.', None, 'eleven',
           'Against a median of six across all twenty-four '
           'technologies.'),
          ('The remedy the evidence points to is',
           ['more technical staff', 'delegated powers', 'faster drafting', 'international agreement'],
           1,
           'While the public conversation has recommended the other '
           'for thirty years.',
           {0: 'More staff is what thirty years of proposals '
               'recommended.', 2: 'Drafting was already complete in most of those cases.', 3: 'International agreement is not part of his account.'})])],
   speak=dict(
    part='Part 3', focus='Rules and the things they govern',
    followup=[(('You say regulation lags technology. Should rules name '
                'technologies or outcomes?'),
               ('Outcomes, with one exception. A rule naming a technology is '
                'out of date on the day it passes and invites redefinition by '
                'the industry it governs, whereas a duty to achieve a result '
                'survives the next product. The exception is where a specific '
                'thing must be banned outright, and then naming it is the only '
                'enforceable form.')),
              ('Who should write the rules for a new industry?',
               ('Somebody independent of it, informed by it, which is a harder '
                'arrangement than it sounds. The expertise sits inside the '
                'firms, so you cannot exclude them from the drafting, and if '
                'they write it you get a rule that incumbents can meet and '
                'entrants cannot. I would have the industry supply the facts '
                'and a separate body choose the thresholds.')),
              ('Is it possible to regulate something before it exists?',
               ('In the form of a duty, yes, and in the form of a rule, no. '
                'You can require that a system be explicable, auditable and '
                'insurable before it is deployed, without knowing what it will '
                'be. What you cannot do is write the technical standard, and '
                'attempting it is what produces rules everybody works around.')),
              ('Does that not leave firms with too much uncertainty?',
               ('It leaves them with uncertainty about method rather than '
                'about obligation, which is the better of the two. A firm can '
                'design against a clear duty; what paralyses investment is not '
                'knowing whether the duty will exist at all. So I would set '
                'the obligation early and the technical detail late.'))],
    intro=('Five or six sentences. Try once to say that a remedy is aimed at '
           'the wrong part of a problem.'),
    qs=['Why does regulation always seem to be behind technology?',
        'Should rules name specific technologies or general outcomes?',
        'Who should write the rules for new industries?',
        'Is it possible to regulate something before it exists?'],
    shape=[('answer', 'Partly because the two ways of writing a rule fail '
            'differently.'),
           ('support', 'A rule precise enough to enforce is specific enough '
            'to go round.'),
           ('follow-up', 'And a rule stated as an outcome is argued over by '
            'whoever can afford to.'),
           ('support', 'I accept that some of the delay really is '
            'inattention.'),
           ('follow-up', 'But where a statute is needed, most of the wait is '
            'for parliamentary time rather than for drafting.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Six tests, and the premise named for each',
         prompt=('Should new technologies be regulated before they are used? '
                 'Brainstorm ten ideas, run the six tests, and name the '
                 'premise under each survivor. Do not write the essay yet.'),
         plan=('Anticipatory regulation is justified where the harm is '
               'irreversible and unjustified where it is merely large, '
               'because the argument for acting early rests on a premise '
               'about recoverability that most proposals never state',
               [('The case for early rules rests on a premise about what '
                 'cannot be undone',
                 ['it assumes the harm cannot be reversed once done',
                  'where it can, waiting buys information at a known '
                  'price']),
                ('The case against rests on a premise about what the '
                 'regulator could know',
                 ['it assumes nothing useful is knowable in advance',
                  'for most technologies the failure modes are '
                  'documented'])]),
         notes=[
          'Both premises here are about knowledge rather than about values, '
          'which means both can in principle be settled by evidence. Marking '
          'that distinction as you brainstorm tells you which of your ideas '
          'can be supported with facts and which will need an argument from '
          'principle.',
          'The premise test is doing a second job in this unit: it also '
          'rules out ideas that are true but not about this prompt. '
          '"Regulators are underfunded" survives the six tests and its '
          'premise turns out to be about enforcement rather than about '
          'timing, so it belongs in a different essay.',
          'Notice that the thesis takes a position that is neither of the '
          'two offered and specifies when each applies. A criterion that '
          'sorts cases is worth more than a verdict that covers them all.'],
         criterion=[('Naming each premise and marking it empirical or '
                     'evaluative', 'Task Response'),
                    ('Using the premise to detect an off-topic idea',
                     'Task Response')],
         instruct='  Produce the brainstorm, the six tests and the premise '
                  'under each survivor. You will write it in cycle 5.',
         lines=12)],
   gram=dict(
    point='Scope ambiguity and its repair',
    explain=('A claim whose scope is unstated invites an objection the '
             'writer did not intend. At band 7 the repair is made inside the '
             'sentence rather than in a following one.'),
    examples=['A rule precise enough to enforce is specific enough to go '
              'round.',
              'Principle-based rules are enforced against small firms and '
              'negotiated with large ones.',
              'This applies where a new statute is required, and not '
              'otherwise.',
              'The remedy addresses the part of the problem that is not '
              'binding.'],
    task='Rewrite each claim so that its scope is explicit.',
    items=[('Regulation lags behind technology.',
            'Where a new statute is required, the median interval is eleven '
            'years, most of it spent waiting for parliamentary time.'),
           ('Prescriptive rules do not work.',
            'Prescriptive rules enforce well and date quickly, which makes '
            'them suited to stable technologies and poorly suited to moving '
            'ones.'),
           ('Big companies avoid the rules.',
            'Large firms contest principle-based duties that small firms '
            'settle, which is a consequence of legal spending rather than of '
            'the rules.'),
           ('Regulators need to be more agile.',
            'Agility addresses drafting speed, which the evidence does not '
            'identify as the binding constraint.'),
           ('The hybrid approach is best.',
            'The hybrid is better than either pure form and fails in its own '
            'way, as the safe harbours become the standard.')]),
   vocab=[('prescriptive', 'naming the thing that must be done'),
          ('principle-based', 'naming the outcome to be achieved'),
          ('safe harbour', 'an arrangement deemed to satisfy a duty'),
          ('general duty', 'a broad obligation stated as an outcome'),
          ('superseded', 'replaced by something later'),
          ('delegated powers', 'authority to make rules without new law'),
          ('de facto', 'in practice, whatever the formal position'),
          ('rate-limiting step', 'the stage that actually sets the pace')],
   expr=[('A rule precise enough to enforce is specific enough to go round',
          'states a trade-off as a single sentence'),
         ('it would happen with saints running the agency',
          'rules out bad faith as the explanation'),
         ('waiting behind a legislature',
          'relocates a failure to its real place'),
         ('addressed to the part of the problem that is not binding',
          'explains why a remedy achieves nothing')],
   trans=['consequently', 'which in turn', 'as a result',
          'there is a further asymmetry'],
  ),

  dict(
   sub='Whether precaution has a cost',
   step=5,
   read=[
    dict(heading='The harm that was prevented and the harm that was not',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given, sentence completion and short answer',
         band='acad', qtype='Questions 59-66',
         paras=[
          'The precautionary principle instructs a decision-maker to act '
          'against a serious or irreversible harm without waiting for full '
          'scientific certainty. Stated that way it is close to '
          'unobjectionable, and almost every dispute about it concerns a '
          'question the formulation leaves out: what is to be done when '
          'acting carries its own risks, which are also serious and also '
          'uncertain. Every real decision of this kind is a choice between '
          'two uncertain harms, and a principle that addresses only one of '
          'them gives no guidance at the moment guidance is needed.',
          'The asymmetry that makes this difficult is one of visibility '
          'rather than of magnitude. A harm prevented by a precaution is '
          'countable: the collapsed building that did not collapse, the drug '
          'reaction that did not occur. A harm produced by the precaution '
          'consists of things that did not happen — the treatment not '
          'approved, the housing not built, the alternative not developed — '
          'and the people who suffer it cannot ordinarily be identified even '
          'afterwards. This is not a subtle point and it is systematically '
          'missing from the documents in which such decisions are recorded, '
          'which count one column and leave the other blank.',
          'The clearest documented cases come from pharmaceutical '
          'regulation, where both sides of the ledger have occasionally been '
          'quantified. A regulator that delays approval of an effective '
          'treatment by a year imposes a cost measurable in the condition it '
          'treats, and several such delays have been retrospectively costed '
          'in the tens of thousands of life-years. The same regulator '
          'approving an unsafe drug produces identifiable victims, press '
          'coverage and a parliamentary inquiry. The two outcomes are '
          'commensurable in principle and are never placed side by side in '
          'practice, which is the condition under which an asymmetry '
          'becomes a bias.',
          'The incentives this creates are wholly one-directional and are '
          'not disputed by anybody inside the system. An official who '
          'approves too slowly faces no consequence that attaches to them '
          'personally; an official who approves too quickly may lose their '
          'career. Since both errors are real and only one is attributable, '
          'a rational official is systematically biased towards delay, and '
          'this is a property of the accountability structure rather than of '
          'the individuals occupying it. Replacing the officials would '
          'change nothing, and several jurisdictions have tried it.',
          'A second effect is less obvious and probably larger. Precaution '
          'raises the fixed cost of bringing anything to market, and a fixed '
          'cost falls disproportionately on small entrants, so a '
          'precautionary regime predictably concentrates an industry. The '
          'concentration then reduces the number of independent attempts at '
          'any problem, which is itself a risk, and one that no impact '
          'assessment counts because it is not attributable to any single '
          'decision. Concentration also raises the consequences of any '
          'single failure, so a regime adopted to reduce risk can increase '
          'the size of the worst case while reducing its frequency, a '
          'trade almost no assessment states explicitly.',
          'None of this amounts to an argument against precaution, and the '
          'strongest case for it survives all of the above untouched. Where '
          'a harm is genuinely irreversible — a species lost, an aquifer '
          'contaminated, a child permanently damaged — the asymmetry runs '
          'the other way. Waiting buys information at a price, and that '
          'price is only acceptable where the error being avoided can be '
          'corrected later. The real distinction is not between caution and '
          'recklessness but between reversible and irreversible outcomes.',
          'That criterion sorts the hard cases better than either camp’s '
          'rhetoric does. It argues for stringent precaution over '
          'persistent chemicals and against stringent precaution over a '
          'treatment whose effects stop when the treatment does. It explains '
          'why the same person can reasonably want a moratorium in one '
          'domain and rapid approval in another without holding '
          'inconsistent views about risk. That alone recommends the '
          'criterion, since any rule that makes most careful people look '
          'inconsistent is more likely to be mis-specified than they '
          'are.',
          'Two practical measures follow and neither is difficult. The '
          'first is that impact assessments should record the expected cost '
          'of delay explicitly, in the same units as the harm being '
          'prevented, even where the estimate is poor. An estimate with wide '
          'bounds is better than a zero entered by default, which is what an '
          'omitted line amounts to. The objection that such estimates are '
          'too uncertain to publish proves too much: the harm estimates '
          'already published carry bounds of the same order and nobody '
          'proposes withdrawing those.',
          'The second is that decisions to delay should carry a stated '
          'review date and a named condition for lifting them. A precaution '
          'adopted under uncertainty and never revisited becomes a permanent '
          'prohibition justified by an uncertainty that may have been '
          'resolved a decade ago, and the record demonstrates this happening '
          'more frequently than any regulator claims and less frequently '
          'than any critic asserts. The review date is the cheaper of the '
          'two measures by a wide margin and is the one more frequently '
          'refused, for a reason that is rarely stated in public and is not '
          'difficult to reconstruct.',
          'The honest summary is that precaution is a policy about which '
          'error to risk, and that a system which treats one error as a '
          'scandal and the other as an absence will make the same choice '
          'every time, whatever its guidance says. Changing that requires '
          'changing what is counted, which is slow and unglamorous and is '
          'the only part of this argument that would actually alter an '
          'outcome.'],
         items=[
          ('Which paragraph explains the asymmetry of visibility?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'],
           1,
           'A prevented harm is countable; a harm caused by precaution '
           'consists of absences.',
           {0: 'Paragraph 1 states the trade-off the principle omits.', 2: 'Paragraph 3 gives the pharmaceutical cases.', 3: 'Paragraph 4 describes the incentives on officials.'}),
          (
           'Which paragraph concerns the concentration of an industry?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'],
           1,
           'Fixed costs falling disproportionately on small entrants.',
           {0: 'Paragraph 4 describes the incentives on officials.', 2: 'Paragraph 6 states the criterion the writer prefers.', 3: 'Paragraph 7 applies the criterion to hard cases.'}),
          ('Which paragraph states the criterion the writer prefers?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'],
           1,
           'The distinction between reversible and irreversible '
           'outcomes.',
           {0: 'Paragraph 5 concerns the concentration of an industry.', 2: 'Paragraph 7 applies the criterion to hard cases.', 3: 'Paragraph 8 gives the first practical measure.'}),
          (
           'The writer believes the precautionary principle should be '
           'abandoned.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 6 says none of the criticism amounts to an '
           'argument against it.',
           {0: 'Yes would need abandonment; paragraph 6 denies that '
               'follows.', 2: 'Not Given is wrong because the writer says what his '
               'criticism does not amount to.'}),
          (
           'The writer believes officials who delay are acting '
           'irrationally.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 4 calls the bias rational given the '
           'accountability structure.',
           {0: 'Yes would need irrationality; paragraph 4 calls the '
               'bias rational.', 2: 'Not Given is wrong because the officials\u2019 incentives '
               'are set out.'}),
          ('An official who approves too slowly faces no personal '
           '____________.', None, 'consequence',
           'Paragraph 4, while approving too quickly may end a career.'),
          ('The writer says an omitted line in an assessment amounts to a '
           '____________ entered by default.', None, 'zero',
           'Paragraph 8, which argues for an estimate with wide bounds '
           'instead.'),
          (
           'Besides a review date, what should a decision to delay '
           'carry?', None, 'a condition',
           'Paragraph 9, to prevent a precaution becoming a permanent '
           'prohibition.')]),
    dict(heading='The lift inspector',
         kind='Magazine article',
         task='Matching sentence endings',
         band='long',
         qtype='Questions 67-71',
         banklabel='Endings',
         bank=[
          'because the owner, not the manufacturer, carries the duty.',
          'which has not changed in substance since 1902.',
          'so a fault found on a Friday can leave a building without a '
          'lift for a week.',
          'although no inspector has ever asked for one.',
          'and the interval between inspections is six months.',
          'because the parts are no longer made anywhere.',
          'which is the single commonest finding in the whole trade.'],
         skill=('Matching sentence endings', ['Each question is the first half of a sentence. Finish it from the list and use each ending once only.', 'There are more endings than questions, so the last answer cannot be reached by elimination.', 'Several endings will fit the grammar of any beginning. Choose the one the passage supports and read the whole sentence back.']),
         paras=[
          'There are roughly a quarter of a million passenger lifts in '
          'Britain and each of them is examined twice a year by somebody '
          'who does not work for the company that maintains it. That '
          'separation between the maintainer and the examiner is the '
          'whole of the regulatory design, and the interval between '
          'inspections is six months.',
          'The inspection is a legal requirement rather than a '
          'commercial service, and the duty falls in a place that '
          'surprises people. A lift is classed as lifting equipment, and '
          'the obligation to have it examined rests with whoever has '
          'control of it in the building, because the owner, not the '
          'manufacturer, carries the duty. A managing agent who has '
          'never seen a machine room is nevertheless the person '
          'prosecuted if the examinations have not been done.',
          'What the examiner looks at is narrower than most passengers '
          'would guess. Ropes, brakes, overspeed governor, buffers, '
          'door interlocks and the structure that carries the load. The '
          'ride quality, the lighting and the buttons are the '
          'maintainer\u2019s business and are not part of a thorough '
          'examination at all.',
          'The door interlock is the component everything turns on. It '
          'is the switch that proves the landing doors are shut before '
          'the car can move, and a failure of it is the mechanism behind '
          'most serious lift accidents in every country that keeps '
          'records. Inspectors report that an interlock out of '
          'adjustment, rather than broken, is the fault they write up '
          'most often, which is the single commonest finding in the '
          'whole trade.',
          'The examiner has a power that is unusual in British '
          'regulation. On finding a danger, the inspector can serve a '
          'report that takes the lift out of service immediately, and '
          'the owner cannot overrule it. There is no appeal that works '
          'in useful time, so a fault found on a Friday can leave a '
          'building without a lift for a week.',
          'The oldest lifts are the interesting case and are not the '
          'most dangerous. A hydraulic lift from the nineteen-thirties '
          'can be kept in service indefinitely provided the examinations '
          'are passed, and several in London are older than that. What '
          'retires such a machine is not the regulator but the supply '
          'chain: it is condemned because the parts are no longer made '
          'anywhere, and a replacement for a single worn component has '
          'to be made specially at a cost that exceeds a new '
          'installation.',
          'The framework itself is a Victorian inheritance. The duty to '
          'examine lifting equipment at fixed intervals by an '
          'independent person comes from factory legislation, which has '
          'not changed in substance since 1902. It was written for '
          'cranes and hoists in mills, it was extended to passenger '
          'lifts without much alteration, and it is now the reason the '
          'safest place in most buildings is the lift.',
                ('Two features of the arrangement are worth weighing against '
                 'each other, because they pull in opposite directions. The '
                 'first is that the examiner is paid by the owner, which is '
                 'the arrangement every regulator of this kind has and the one '
                 'every inquiry criticises: the person who can close the lift '
                 'is engaged by the person who loses money when it closes. In '
                 'practice the insurance market does most of the work, because '
                 'the examiner is usually an engineer employed by the insurer '
                 'who would pay the claim, and that interest runs the other '
                 'way. The second is that the system generates almost no '
                 'public data. Reports go to the owner and, in a dangerous '
                 'case, to the enforcing authority, and nobody publishes how '
                 'many lifts failed an examination last year or why. The trade '
                 'knows the interlock figure from its own surveys rather than '
                 'from any register, and a regulator asked to justify the six- '
                 'month interval could not produce the evidence either way.')],
         items=[
          ('Each lift is examined twice a year', None, 'E',
           'Paragraph 1 gives the interval as six months.'),
          ('A managing agent can be prosecuted', None, 'A',
           'Paragraph 2 places the duty on whoever controls the '
           'equipment.'),
          ('An interlock out of adjustment is written up constantly',
           None, 'G',
           'Paragraph 4 calls it the commonest finding in the trade.'),
          ('A lift can be taken out of service at once', None, 'C',
           'Paragraph 5 says there is no appeal that works in useful '
           'time.'),
          ('An old lift is eventually condemned', None, 'F',
           'Paragraph 6 gives the supply chain rather than the regulator '
           'as the cause.')])],
   listen=[
    dict(heading='A regulator and an economist disagree', part='Part 4',
         task='A recorded exchange · multiple choice', band='l4', qtype='Questions 72-77',
         script=[
          ('Chair', 'Dr Fanshawe-Oyelude is a medicines regulator. Professor '
           'Barrientos works on the economics of regulation.'),
          ('Barrientos', 'I will start with the concession, because my side '
           'of this usually refuses to make it. The approvals that went '
           'wrong were catastrophic and they were not bad luck. The system '
           'that approved them was too fast and the people who said so at '
           'the time were right.'),
          ('Fanshawe-Oyelude', 'Then I will match it. The delays my agency '
           'has imposed have killed people. I cannot name them, which is '
           'exactly the problem, and I have stopped using the phrase '
           '"abundance of caution" because it describes a cost as though it '
           'were a virtue.'),
          ('Barrientos', 'That is further than I expected you to go.'),
          ('Fanshawe-Oyelude', 'It is where the evidence goes. What I will '
           'not accept is the conclusion you draw, which is that the bias is '
           'a failure of nerve. It is a failure of accounting. If I approve '
           'too fast there are named victims and an inquiry. If I approve '
           'too slowly there is nothing, and no official in any system '
           'anywhere has ever been dismissed for an absence.'),
          ('Barrientos', 'Then we agree about the mechanism and disagree '
           'about the remedy, which is a better place to be than where this '
           'argument usually sits. My remedy is to count the delay cost in '
           'the assessment.'),
          ('Fanshawe-Oyelude', 'I would support that and I want to tell you '
           'what will happen when you do it. The estimate will have bounds '
           'four times wider than the harm estimate, and the first time a '
           'decision goes badly those bounds will be read out in a committee '
           'as evidence that I invented a number to justify a decision.'),
          ('Barrientos', 'And my answer is that a wide estimate is still '
           'better than the zero that an omitted line puts there by '
           'default.'),
          ('Fanshawe-Oyelude', 'I know. I am telling you the cost, not '
           'refusing the proposal. And I would add one of my own that is '
           'cheaper and that nobody argues about: every decision to delay '
           'gets a review date and a named condition for lifting it.'),
          ('Barrientos', 'Why has that not been done?'),
          ('Fanshawe-Oyelude', 'Because it creates a date on which '
           'somebody has to take a decision, and a precaution with no '
           'review date never requires anybody to do anything. That is the '
           'whole of the explanation and I am aware of how it sounds.'),
          ('Barrientos', 'Would you write that down, under your name, in '
           'something I could cite?'),
          ('Fanshawe-Oyelude', 'I would, and I would want the sentence '
           'about delays killing people in the same paragraph, because the '
           'two of them together are an argument and either of them alone '
           'is a weapon.')],
         items=[
          ('Barrientos begins by conceding that',
           ['delays are costless', 'the bad approvals were a genuine failure of a too-fast system', 'regulators are competent', 'his model was wrong'],
           1, 'And that those who warned at the time were right.',
           {0: 'He goes on to argue that delays have a real cost.', 2: 'Competence is not what he concedes.', 3: 'His model is not in question here.'}),
          (
           'Fanshawe-Oyelude says she has stopped using the phrase '
           '"abundance of ____________".', None, 'caution',
           'Because it describes a cost as though it were a virtue.'),
          ('She characterises the bias towards delay as a failure of',
           ['nerve', 'accounting', 'training', 'leadership'], 1,
           'Since no official anywhere has been dismissed for an '
           'absence.',
           {0: 'She says explicitly that it is not a failure of nerve.', 2: 'Training is not what she says is at fault.', 3: 'Leadership is not where she locates the bias.'}),
          ('What does she predict about estimating the cost of delay?',
           ['It is impossible', 'Its bounds will be four times wider than the harm estimate', 'It will be ignored', 'It will be accurate'],
           1, 'And will be used against her in committee.',
           {0: 'She supports the estimate, so does not call it '
               'impossible.', 2: 'She predicts it will be read out, not ignored.', 3: 'She expects wide bounds rather than accuracy.'}),
          ('Barrientos answers that a wide estimate is better than',
           ['no decision', 'the zero an omitted line puts there', 'a narrow one', 'a qualitative judgement'],
           1, 'Which is what leaving the line out amounts to.',
           {0: 'A decision is made either way; the line is what is '
               'missing.', 2: 'A narrow estimate is not available.', 3: 'A qualitative judgement is not what he compares it '
               'with.'}),
          ('Why have review dates not been adopted?',
           ['They are expensive', 'They create a date on which somebody must decide', 'They are unlawful', 'Nobody proposed them'],
           1,
           'Whereas a precaution with no review date requires nothing '
           'of anybody.',
           {0: 'Cost is not the obstacle she names.', 2: 'Legality is not raised by either speaker.', 3: 'She proposes them herself as the cheaper measure.'})]),
    dict(heading='A plan of the factory floor',
         part='Part 2', task='Plan labelling and matching · plan labelling',
         band='l2',
         qtype='Questions 78-82',
         banklabel='Positions on the plan',
         bank=['A', 'B', 'C', 'D', 'E', 'F', 'G'],
         figure=dict(kind='map',
                     title='Ground floor, Kelvedge Works',
                     sub='seven areas, lettered A to G',
                     panels=[('Factory floor',
                              [(0.04, 0.08, 0.2, 0.2, 'A', 'building'),
                               (0.28, 0.08, 0.2, 0.2, 'B', 'building'),
                               (0.52, 0.08, 0.2, 0.2, 'C', 'building'),
                               (0.76, 0.08, 0.2, 0.2, 'D', 'building'),
                               (0.04, 0.52, 0.28, 0.2, 'E', 'building'),
                               (0.36, 0.52, 0.28, 0.2, 'F', 'building'),
                               (0.68, 0.52, 0.28, 0.2, 'G', 'building')],
                              [(0.0, 0.42, 1.0, 0.42, 'Main gangway'),
                               (0.5, 0.95, 0.5, 0.42, 'Personnel door')])]),
         skill=('A plan with lettered positions', ['Find the entrance on the plan before the recording starts and decide which way is left and right from there.', 'Write the letter, not the name. A correct place written in words is marked wrong.', 'The speaker will not take the places in order, so keep your eyes on the plan rather than on the questions.']),
         script=[
          ('Safety officer', 'This is the ground floor. You come in '
           'through the personnel door at the bottom of the plan, in the '
           'middle, and the main gangway runs left to right. Four areas '
           'are above the gangway and three below it, and the gangway is '
           'kept clear at all times, which is not a request.'),
          ('Safety officer', 'The first aid room is immediately on your '
           'left as you come in, so it is the area at the bottom-left of '
           'the plan. Two people on each shift are trained and their '
           'names are on the door.'),
          ('Safety officer', 'The chemical store is at the bottom-right, '
           'furthest from the door on that side, and it is the only area '
           'with its own ventilation. You do not go in without being '
           'asked to.'),
          ('Safety officer', 'The press shop is directly opposite first '
           'aid, at the far left above the gangway. That is where the '
           'noise is, and ear protection is mandatory from the yellow '
           'line onwards.'),
          ('Safety officer', 'The finished goods bay is above the '
           'gangway at the far right, in the top-right corner, because '
           'the loading doors are at that end of the building.'),
          ('Safety officer', 'The tool crib is the middle area on the '
           'lower side, between first aid and the chemical store. '
           'Everything is signed out and nothing leaves the building, '
           'which we check.'),
          ('Safety officer', 'That leaves the two areas above the '
           'gangway in the middle. The one beside the press shop is '
           'assembly, and the one beside the finished goods bay is '
           'inspection, which is where every item goes before it is '
           'packed.'),
          ('Safety officer', 'Two things the plan does not show. The '
           'muster point for a fire alarm is outside the building, at '
           'the far end of the car park, and not in the yard, which is '
           'where everybody went the last two times. And the second '
           'gangway marked along the top of the plan is not a walkway at '
           'all; it is the overhead crane rail, and nothing is to be '
           'stored under it.')],
         items=[
          ('First aid room', None, 'E',
           'Immediately on the left inside the personnel door.'),
          ('Press shop', None, 'A',
           'Directly opposite first aid, at the far left above the '
           'gangway.'),
          ('Finished goods bay', None, 'D',
           'In the top-right corner, beside the loading doors.'),
          ('Tool crib', None, 'F',
           'The middle area on the lower side, between first aid and the '
           'chemical store.'),
          ('Inspection', None, 'C',
           'The upper middle area beside the finished goods bay.')])],
   speak=dict(
    part='Part 3', focus='Acting before the evidence is complete',
    sounds=[('Technical and legal compounds take stress on the first element: '
             'a RISK assessment, a SAFEty case, a COMpliance cost, the '
             'PREcautionary principle, which is the exception and takes it on '
             'the adjective\'s own second syllable.'),
            ('Say each of this unit\'s five key compounds inside a clause. A '
             'compound said with two equal stresses is heard as two separate '
             'nouns and the clause has to be re-parsed.'),
            ('Modal verbs are weak unless they are the argument: it should be '
             'regulated has a weak should; it SHOULD be regulated means '
             'somebody says it should not.'),
            ('Practise the two readings of regulation always lags technology, '
             'once neutral and once with always stressed, and notice that the '
             'second is a complaint rather than an observation.'),
            ('Record yourself on who should write the rules. Check every modal '
             'and decide whether you stressed it on purpose.'),
            ('One last exercise, because this unit\u2019s vocabulary is the '
             'hardest in the book to say at speed. Take the five longest '
             'compounds on this page, put each inside a clause you would '
             'really use in Part 3, and say the clause ten times. The word '
             'is not the difficulty. Producing it inside a sentence you are '
             'also thinking about is the difficulty, and that is what this '
             'trains.')],
    intro=('The hardest turn in the unit. Try once to say that one kind of '
           'error is visible and the other is not.'),
    qs=['Is it better to act too early or too late?',
        'How should a government decide under uncertainty?',
        'Can the cost of caution be measured?',
        'Who should bear the cost of a decision that turns out wrong?'],
    shape=[('answer', 'It depends almost entirely on whether the mistake '
            'can be undone.'),
           ('support', 'A harm prevented is countable and a harm caused by '
            'delay consists of absences.'),
           ('follow-up', 'Nobody is ever dismissed for an absence.'),
           ('support', 'So the bias towards delay is an accounting problem '
            'rather than a failure of nerve.'),
           ('follow-up', 'Which is why I would put the cost of delay in the '
            'assessment, however wide the bounds.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Is it better to regulate too early than too late?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some people say it is better to regulate too early '
                 'than too late. Discuss both views and give your own '
                 'opinion. Write at least 250 words.'),
         model=[
          'Both positions in this debate are usually defended with the same '
          'move, which is to make one kind of error vivid and leave the other '
          'as an abstraction. The argument becomes tractable only when both '
          'errors are described in the same terms, and doing so leads to a '
          'conclusion that is neither of the two on offer.',
          'The case for regulating early rests on the irreversibility of '
          'certain harms. A contaminated aquifer, a species lost, a '
          'generation of children exposed to something that turns out to '
          'damage them: no subsequent correction restores the position, and '
          'the information gained by waiting is bought at a price that '
          'cannot be refunded. Where that description fits, acting on '
          'incomplete evidence is not excessive caution but the only '
          'rational order of operations.',
          'The case for waiting is normally argued in terms of innovation '
          'and is stronger when argued in terms of accounting. Delay kills '
          'people too, in the sense that a treatment approved a year later '
          'has a measurable cost in the condition it treats, and the victims '
          'of that cost cannot be named. Since one error produces an inquiry '
          'and the other produces nothing, every official faces an incentive '
          'to delay regardless of the merits, and this is a property of the '
          'structure rather than of anybody’s character.',
          'The premise shared by both camps, and false, is that this is a '
          'question about how cautious to be in general. It is not. It is a '
          'question about which error can be corrected, and that differs '
          'entirely between domains. A persistent chemical and a reversible '
          'treatment are not two instances of one problem.',
          'My own view is that the criterion should be reversibility rather '
          'than severity, with two procedural requirements attached: the '
          'expected cost of delay recorded in the assessment, in the same '
          'units as the harm, however wide its bounds; and every decision to '
          'delay carrying a review date and a named condition for lifting '
          'it. Neither is expensive. Both are resisted for the same reason, '
          'which is that they create moments at which somebody has to decide '
          'something, and the attraction of an unreviewed precaution is '
          'precisely that it never does.'],
         notes=[
          'The introduction identifies the rhetorical move both sides make '
          'rather than summarising their positions. Describing how an '
          'argument is conducted, before entering it, reads as command of '
          'the material.',
          'Paragraph 3 improves the opposing case by replacing its usual '
          'form — innovation — with a better one — accounting. The third '
          'unit in this volume to use that move, and by now it should be '
          'automatic.',
          'Paragraph 4 names the false premise shared by both camps, which '
          'is the structure Volume 5 teaches, and the conclusion then '
          'replaces severity with reversibility as the criterion. The last '
          'sentence explains why a cheap reform is resisted, which is a '
          'stronger finish than recommending it again.'],
         model65=[
                  'Some people say it is better to regulate too early '
                  'than too late. I think neither error is free, and '
                  'the question is which one a system is already '
                  'biased towards.',
                  'Regulating early has obvious attractions. Harms '
                  'prevented cost nothing to repair, and a rule '
                  'written before an industry is large is easier to '
                  'pass. Where a harm would be irreversible, acting '
                  'early is clearly right.',
                  'But early rules are written in ignorance. A '
                  'regulator who does not yet know how a technology '
                  'will be used may prohibit the useful version and '
                  'permit the harmful one. Rules also freeze: once '
                  'written, they become the standard that everybody '
                  'designs around.',
                  'I think the balance depends on reversibility. Where '
                  'a harm cannot be undone, act early and accept the '
                  'cost of being wrong. Where it can, write a duty '
                  'rather than a rule, so that the obligation survives '
                  'changes in the technology. The important thing is '
                  'to notice which error your own institution is more '
                  'likely to make.',
                  ],
         gap65=[
                'It explains why the accountability structure makes '
                'one error far more visible than the other, and so why '
                'officials lean the way they do.',
                'It names what happens to a safe harbour once it '
                'exists, which is the drawback of the hybrid regime.',
                'It states the reversibility test as a criterion '
                'rather than as a preference.',
                ],
         criterion=[('Describing how the argument is conducted before '
                     'entering it', 'Task Response'),
                    ('Replacing the opposing case with a better version',
                     'Task Response'),
                    ('Naming the false premise shared by both sides',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Counterfactual costs and invisible harms',
    explain=('Writing about what did not happen is grammatically awkward and '
             'is where this kind of argument is won. These patterns name an '
             'absence as a cost without overclaiming.'),
    examples=['The harm prevented is counted; the benefit forgone is not.',
              'A harm produced by the precaution consists of things that did '
              'not happen.',
              'An omitted line amounts to a zero entered by default.',
              'Nobody has been dismissed for an absence.'],
    task='Rewrite each sentence so that the invisible cost is named.',
    items=[('The delay was sensible.',
            'The delay avoided an identifiable harm at a cost measured in '
            'treatments not given, which nobody recorded.'),
           ('Nothing bad happened.',
            'No attributable harm occurred, which is not the same as no harm '
            'occurring.'),
           ('The rule protects people.',
            'The rule prevents a countable harm and forgoes a benefit that '
            'appears in no assessment.'),
           ('The assessment was positive.',
            'The assessment counted the harm prevented and left the cost of '
            'delay blank, which functions as a zero.'),
           ('Caution is free.',
            'Caution has a price paid by people who cannot be identified '
            'even afterwards.')]),
   vocab=[('precautionary principle', 'acting against harm before '
           'certainty'),
          ('opportunity cost', 'the value of what was given up instead'),
          ('type I error', 'acting when you should not have'),
          ('type II error', 'failing to act when you should have'),
          ('irreversible', 'incapable of being put back as it was'),
          ('attributable', 'able to be traced to a particular decision'),
          ('moratorium', 'a temporary ban while a question is settled'),
          ('entrant', 'a firm newly entering a market')],
   expr=[('The harm prevented is counted; the benefit forgone is not',
          'states an asymmetry of visibility'),
         ('it describes a cost as though it were a virtue',
          'criticises a phrase rather than a position'),
         ('a failure of accounting rather than a failure of nerve',
          'relocates an explanation'),
         ('a precaution with no review date never requires anybody to do '
          'anything', 'names the appeal of an unreviewed rule')],
   trans=['admittedly', 'and yet', 'on balance', 'the premise shared by '
          'both'],
  ),
 ],
 technique=dict(
  title='A chart whose baseline moves, and saying so',
  body=('Some Task 1 visuals are built on a baseline that is itself '
        'changing, and a candidate who does not notice writes a description '
        'that is fluent and false. The signals are in the subtitle and the '
        'axis label rather than in the bars: a phrase like "recalculated '
        'each decade", "indexed to the previous year", "relative to the '
        'regional average" or "at constant prices" tells you that what '
        'counts as one unit is not the same at both ends of the chart. When '
        'you see one, your Overall statement has to say what the measure is '
        'measured against, and the comparison you draw has to be between '
        'measures rather than between years. It costs one clause and it is '
        'the difference between a description and a misdescription.'),
  panel=[('Read the subtitle before the bars',
          '"Recalculated", "indexed", "relative to", "at constant prices". '
          'Any of these moves the baseline.'),
         ('Say what it is measured against',
          'In the Overall statement, not in a later sentence. It defines '
          'what the numbers are.'),
         ('Two series, two baselines, no direct comparison',
          'Where series differ in baseline you compare their shapes and '
          'their divergence, never their levels.'),
         ('Report, do not explain',
          'A moving baseline tempts you into saying why. Task 1 gives no '
          'credit for a cause and penalises a wrong one.')],
  task='Take the chart in cycle 3. Write the Overall statement, then one '
       'sentence that would be false if the baseline difference were '
       'ignored.',
  qs=['What does the subtitle say each series is measured against?',
      'Which series can show a trend, and why can the other not?',
      'Write the Overall statement in one sentence.',
      'What would a careless answer claim about the rainfall?',
      'How would you quantify the divergence between the two series?']),
 outlining=dict(
  title='Spot the unequal in a plan where every idea sounds equal',
  body=('A brainstorm of eight ideas that all sound equally good is a '
        'brainstorm you have not finished. Ideas differ in three measurable '
        'ways and a list hides all three: how many supports each one has, '
        'how much of the prompt each one actually answers, and how hard each '
        'would be to attack. Go through the list three times asking one '
        'question each time, and you will usually find that two ideas carry '
        'the essay and the rest are decoration. Combine the decoration into '
        'the two that survive, or drop it; what you must not do is give an '
        'idea a paragraph because it looked the same size as the others on '
        'the page.'),
  frame=('Anticipatory regulation is justified where the harm is '
         'irreversible and unjustified where it is merely large, because '
         'the argument for acting early rests on a premise about '
         'recoverability that most proposals never state',
         [('The case for early rules rests on a premise about what cannot '
           'be undone',
           ['it assumes the harm cannot be reversed once done',
            'where it can, waiting buys information at a known price']),
          ('The case against rests on a premise about what the regulator '
           'could know',
           ['it assumes nothing useful is knowable in advance',
            'for most technologies the failure modes are documented'])]),
  task='Take your brainstorm for the cycle 4 prompt. Count the supports '
       'under each idea, mark how much of the prompt each answers, and say '
       'which two you would build the essay on.',
  qs=['Which idea had the most supports, and which the fewest?',
      'Which idea answers only part of the prompt?',
      'Which two would you build on, and what happened to the rest?',
      'Did combining any two produce a stronger idea than either?'],
  answers=['the irreversibility idea usually carries three or four',
           'anything about funding or staffing answers a different '
           'question',
           'the two in the frame above, with the rest merged as supports',
           'often, and the merged version is the one to keep']),
 candos=['I can read a reporting procedure for its branch points',
         'I can describe a chart whose baseline moves without misdescribing '
         'it',
         'I can explain why the two registers of rule-writing fail '
         'differently',
         'I can find the unequal idea in a brainstorm that looks balanced',
         'I can name a cost that consists of things that did not happen'],
 tip=('Before describing any Task 1 chart, read the subtitle for the words '
      '"indexed", "recalculated", "relative to" or "at constant". Any of '
      'them means the baseline moves, and your Overall statement has to say '
      'so.'),
)
