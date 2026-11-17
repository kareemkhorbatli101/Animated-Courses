# -*- coding: utf-8 -*-
"""Unit 13 - Crime and Law. IELTS Volume 2, band 5.5."""

_CRIME = dict(kind='line',
              title='Recorded crime in four categories',
              sub='offences per thousand residents, 2014 to 2024',
              ylab='per thousand residents',
              x=['2014', '2016', '2018', '2020', '2022', '2024'],
              series=[('Burglary', [18, 16, 14, 9, 10, 9]),
                      ('Vehicle theft', [15, 14, 12, 8, 9, 8]),
                      ('Fraud', [11, 14, 19, 26, 32, 38]),
                      ('Criminal damage', [21, 20, 21, 19, 20, 20])])

UNIT = dict(
 n=13, vol=2, level='B1+', band='5.5',
 theme='Crime and Law',
 opener=(
   'This unit begins with the paperwork of reporting a theft and ends with '
   'an argument about what a prison sentence is for. In between it asks a '
   'question the figures answer clearly and almost nobody believes: what '
   'stops people committing crimes is the chance of being caught, not the '
   'size of the punishment. The technique page is about a four-line graph '
   'and the one move that turns a list of lines into a description.'),

 cycles=[
  dict(
   sub='Reporting something',
   step=1,
   read=[
    dict(heading='Reporting a crime: what happens next',
         kind='Procedure notice',
         task='Note completion and multiple choice',
         band='gt_short', qtype='Questions 1-6',
         skill=('A procedure notice tells you what the reader must do and '
                'what the office will do',
                ['Mark the two kinds of sentence differently as you read. '
                 'Questions nearly always ask about one or the other, and '
                 'confusing them is the commonest error here.',
                 'The reference number sentence is almost always tested. '
                 'Find where the number comes from and when it '
                 'arrives.']),
         paras=[
          'Report the incident as soon as you are safe. Call 999 if a '
          'crime is in progress or anybody is injured; otherwise use 101 '
          'or the online form, which is available at all hours.',
          'You will be given a crime reference number at the end of the '
          'call, or within one hour if you report online. Keep it. Your '
          'insurer will ask for it before processing any claim.',
          'An officer will contact you within 48 hours to arrange a '
          'written statement. The statement is taken at your home or at a '
          'station, whichever you prefer, and it may be taken by telephone '
          'where no property was damaged.',
          'Do not move or clean anything until the scene has been '
          'examined. If an examiner is coming you will be told during the '
          'first call.',
          'You will be told the outcome within 28 days. The three '
          'outcomes are: a suspect has been identified and the case '
          'continues, no suspect has been identified and the case is '
          'closed, or the case remains open pending further information.',
          'A closed case can be reopened if new information is received. '
          'Quote your crime reference number and do not submit a second '
          'report, which creates a duplicate record.'],
         items=[
          ('Call ____________ if a crime is in progress or somebody is '
           'injured.', None, '999',
           'Paragraph 1, against 101 or the online form otherwise.'),
          ('An online report produces a crime reference number within',
           ['ten minutes', 'one hour', 'one day', 'one week'], 1,
           'Paragraph 2, and the insurer will ask for it.',
           {0: 'Faster than the passage allows for an online report.', 2: 'A day is longer than paragraph 2 gives for the number.', 3: 'A week is the wait for nothing in this procedure.'}),
          ('An officer will make contact within ____________ hours.', None,
           '48', 'Paragraph 3, to arrange a written statement.'),
          (
           'A statement may be taken by telephone where no property '
           'was', ['stolen', 'damaged', 'insured', 'found'],
           1, 'Paragraph 3, as an alternative to home or station.',
           {0: 'Theft is what the report is about, not what decides '
               'the method.', 2: 'Insurance affects the claim, not how the statement is '
               'taken.', 3: 'Whether property is found is not mentioned in '
               'paragraph 3.'}),
          ('You will be told the outcome within ____________ days.', None,
           '28', 'Paragraph 5, which lists three possible outcomes.'),
          ('Instead of submitting a second report you should quote your '
           'crime ____________ number.', None, 'reference',
           'Paragraph 6: a duplicate record delays both.')]),
    dict(heading='Victim support services',
         kind='Information page', task='Matching features and sentence completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Telephone support line. Open 24 hours. No referral is needed '
          'and you do not have to have reported the crime to use it. '
          'Interpreters are available in 42 languages.',
          'Caseworker service. A named worker for up to twelve weeks, '
          'arranged by referral from the police or by self-referral. Face '
          'to face or by video. The waiting time is currently about two '
          'weeks.',
          'Court familiarisation visit. Available once a trial date is '
          'set. You are shown the courtroom before the day and told where '
          'you will sit. It must be booked at least seven days ahead.',
          'Compensation application. Open to victims of violent crime '
          'only, and the incident must have been reported to the police. '
          'Applications must be made within two years, and the service '
          'will complete the form with you.',
          'Peer support groups. Weekly, in eleven towns, and free. No '
          'booking is required and the service asks only that you tell the '
          'group leader beforehand if you intend to bring somebody with '
          'you.'],
         items=[
          (
           'Which service requires no referral and no report to the '
           'police?',
           ['the telephone support line', 'the caseworker service', 'compensation', 'the court visit'],
           0, 'Open 24 hours, with interpreters in 42 languages.',
           {1: 'The caseworker service is arranged by referral from '
               'the police.', 2: 'Compensation is open only to victims of violent crime.', 3: 'The court visit is available only once a trial date is '
               'set.'}),
          ('Which service is open only to victims of violent crime?',
           ['the telephone line', 'the caseworker service', 'compensation', 'peer support'],
           2, 'And the incident must have been reported.',
           {0: 'The telephone line is open to anybody, reported or '
               'not.', 1: 'The caseworker service takes referrals for any '
               'offence.', 3: 'Peer support groups are free and need no booking at '
               'all.'}),
          ('A court familiarisation visit must be booked at least '
           '____________ days ahead.', None, 'seven',
           'And is available once a trial date is set.'),
          ('The caseworker service currently has a waiting time of about '
           '____________ weeks.', None, 'two',
           'For a named worker for up to twelve weeks.')])],
   listen=[
    dict(heading='Reporting a theft by telephone', part='Part 1',
         task='A call to a police non-emergency line · note completion', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Operator', 'Police non-emergency, how can I help?'),
          ('Caller', 'My bicycle has been stolen.'),
          ('Operator', 'I am sorry to hear that. Is anybody injured?'),
          ('Caller', 'No, nobody.'),
          ('Operator', 'Then I will take it as a report. Where was it '
           'taken from?'),
          ('Caller', 'Outside the library on Parkgate Road.'),
          ('Operator', 'And when did you last see it?'),
          ('Caller', 'About four o’clock yesterday afternoon.'),
          ('Operator', 'Can you describe it?'),
          ('Caller', 'A green touring bicycle, with a brown leather '
           'saddle.'),
          ('Operator', 'Was it locked?'),
          ('Caller', 'Yes, with a D-lock. The lock has gone too.'),
          ('Operator', 'Do you have the frame number?'),
          ('Caller', 'I do. It is on the receipt. F four four two '
           'nine.'),
          ('Operator', 'That is very helpful. Most people do not have '
           'it.'),
          ('Caller', 'Will it be found?'),
          ('Operator', 'I will be honest with you: for a bicycle, rarely. '
           'The frame number makes it more likely than usual, because it '
           'is checked when one is recovered.'),
          ('Caller', 'What do I do about insurance?'),
          ('Operator', 'Your crime reference number is what they need. It '
           'is C as in Charlie, eight one three.'),
          ('Caller', 'C eight one three.'),
          ('Operator', 'An officer will contact you within forty-eight '
           'hours for a statement. That can be by telephone, since nothing '
           'was damaged.'),
          ('Caller', 'And if it turns up?'),
          ('Operator', 'Do not collect it yourself. Call us with the same '
           'number.')],
         items=[
          ('Item stolen: a green touring ____________', None, 'bicycle',
           'Described as green, with a brown leather saddle.'),
          ('Taken from outside the library on ____________ Road', None,
           'Parkgate', 'Last seen at about four o’clock.'),
          ('Secured with a ____________, which was also taken', None,
           'D-lock', 'The operator notes this on the report.'),
          ('Frame number: F____________', None, '4429',
           'Which the caller has from the receipt.'),
          ('Crime reference number: C-____________', None, '813',
           'What the insurer will require.'),
          ('A statement may be taken by telephone because nothing was '
           '____________.', None, 'damaged',
           'Within forty-eight hours of the report.')])],
   speak=dict(
    part='Part 1', focus='Safety where you live',
    intro=('Two or three sentences each. A real example is worth more '
           'than a general view.'),
    qs=['Do you feel safe where you live?',
        'Has that changed since you moved there?',
        'Do people in your area know their neighbours?',
        'What makes a place feel safe?'],
    shape=[('answer', 'Yes, during the day certainly.'),
           ('support', 'The street is busy until about eight because of '
            'the shops.'),
           ('follow-up', 'After the shops close it empties, and that is '
            'the hour I notice.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking the police for an update on a case',
         prompt=('You reported a crime some weeks ago and have heard '
                 'nothing. Write a letter to the police. In your letter: '
                 'give the details of the report; explain what you were '
                 'told would happen; ask what is happening now. Write at '
                 'least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing to enquire about the progress of a report I made '
          'on 3 March. The crime reference number is C-813 and the '
          'incident was the theft of a bicycle from outside the library on '
          'Parkgate Road.',
          'When I reported the theft I was told two things. An officer '
          'would contact me within forty-eight hours to take a statement, '
          'and I would be informed of the outcome within twenty-eight '
          'days. Six weeks have now passed. No officer has contacted me '
          'and I have received no letter or message of any kind.',
          'I should be grateful if you could tell me three things: whether '
          'a statement is still required, whether the case remains open, '
          'and if it has been closed, on what date that decision was '
          'taken. My insurer has asked for the last of these and will not '
          'settle the claim without it.',
          'I can be contacted on 07700 900264 or at the address above, and '
          'I am available to give a statement at any time this month.',
          'Yours faithfully,',
          'Gideon Abara-Lindsay'],
         notes=[
          'The second paragraph quotes what the police themselves said '
          'would happen, with both time limits. A complaint measured '
          'against the reader’s own published standard is much harder to '
          'deflect than one measured against the writer’s expectations.',
          'The three questions are numbered in the sentence and each has a '
          'one-line answer. A reader can reply to all three in two '
          'minutes, which is the difference between a reply next week and '
          'a reply in a month.',
          'The last request has a reason attached: the insurer needs the '
          'date. Giving a reason for the most awkward of your questions '
          'makes it much more likely to be answered.'],
         criterion=[('Measuring against the reader’s own standard',
                     'Task Response'),
                    ('Questions with one-line answers',
                     'Task Achievement'),
                    ('A reason attached to the awkward request',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Past simple and past continuous in a statement',
    explain=('A witness statement needs the background and the event kept '
             'apart. The continuous gives what was already happening; the '
             'simple gives what then occurred.'),
    examples=['I was locking the bicycle when a man asked me the time.',
              'While I was inside the library, the lock was cut.',
              'I last saw the bicycle at about four o’clock.',
              'Two people were standing by the railings when I '
              'arrived.'],
    task='Join each pair, putting the background in the continuous.',
    items=[('I left the library. The bicycle was gone.',
            'When I left the library at about six, the bicycle was no '
            'longer there.'),
           ('I locked it. A man watched me.',
            'A man was watching me while I was locking the bicycle.'),
           ('It rained. I ran to the station.',
            'It was raining heavily, so I ran to the station.'),
           ('I saw two people. They stood by the railings.',
            'Two people were standing by the railings when I arrived.'),
           ('I reported it. They gave me a number.',
            'I reported the theft by telephone and was given a crime '
            'reference number at the end of the call.')]),
   vocab=[('incident', 'an event that is reported'),
          ('witness statement', 'a written account given to the police'),
          ('witness', 'a person who saw what happened'),
          ('reference number', 'the number given to a report'),
          ('result of a case', 'what a reported case led to'),
          ('suspect', 'a person thought to have done it'),
          ('reopen', 'to start work on a closed case again'),
          ('claim', 'a request to an insurer for payment')],
   expr=[('I am writing to enquire about the progress of',
          'the opening line of an enquiry'),
         ('when I reported it I was told two things',
          'measures the reply against what was promised'),
         ('I should be grateful if you could tell me three things',
          'introduces a numbered request'),
         ('my insurer will not settle the claim without it',
          'gives a reason for the awkward question')],
   trans=['furthermore', 'in addition', 'at that point', 'since then'],
  ),

  dict(
   sub='Rules people break',
   step=2,
   read=[
    dict(heading='Four people on rules they ignore',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Oleander: I cycle through red lights when the road is '
          'empty, and I know exactly what I am doing. I have decided the '
          'rule exists for cars and that I am a better judge of my own '
          'junction. I would not accept that argument from anybody '
          'else.',
          'B  Hesper: I park on the pavement outside my own house. There '
          'is nowhere else. The council sends a fine about twice a year, '
          'which I pay, and I regard it as rent for a parking space they '
          'have failed to provide.',
          'C  Wolfram: I used to go through red lights on a bicycle until '
          'a friend was fined and showed me the figure. Fifty pounds was '
          'nothing to me and a week’s food to him, for the same act on the '
          'same street. That ended it for me, and not for the reason the '
          'law intended.',
          'D  Perpetua: I break no rules that I know of, and I think '
          'people who do are usually testing whether anybody is watching '
          'rather than disagreeing with the rule. Enforcement here is '
          'almost nothing, so most people find out that nobody is.'],
         items=[
          (
           'Which person admits applying a standard to themselves they '
           'would not accept from others?',
           ['Oleander', 'Hesper', 'Wolfram', 'Perpetua'], 0,
           'A better judge of their own junction.',
           {1: 'Hesper treats a penalty as a payment for a service.', 2: 'Wolfram changed their behaviour because of what a '
               'penalty cost somebody else.', 3: 'Perpetua thinks rule-breaking is mostly about being '
               'observed.'}),
          ('Which person treats a penalty as a payment for a service?',
           ['Oleander', 'Hesper', 'Wolfram', 'Perpetua'], 1,
           'Regarded as rent for a space the council has not provided.',
           {0: 'Oleander admits applying a standard to themselves they '
               'would not accept from others.', 2: 'Wolfram changed their behaviour because of what a '
               'penalty cost somebody else.', 3: 'Perpetua thinks rule-breaking is mostly about being '
               'observed.'}),
          (
           'Which person changed their behaviour because of what a '
           'penalty cost somebody else?',
           ['Oleander', 'Hesper', 'Wolfram', 'Perpetua'], 2,
           'Fifty pounds was a week\u2019s food to his friend.',
           {0: 'Oleander admits applying a standard to themselves they '
               'would not accept from others.', 1: 'Hesper treats a penalty as a payment for a service.', 3: 'Perpetua thinks rule-breaking is mostly about being '
               'observed.'}),
          (
           'Which person thinks rule-breaking is mostly about being '
           'observed?',
           ['Oleander', 'Hesper', 'Wolfram', 'Perpetua'], 3,
           'Testing whether anybody is watching.',
           {0: 'Oleander admits applying a standard to themselves they '
               'would not accept from others.', 1: 'Hesper treats a penalty as a payment for a service.', 2: 'Wolfram changed their behaviour because of what a '
               'penalty cost somebody else.'}),
          ('Hesper believes the fine is unfair.',
           ['Yes', 'No', 'Not Given'], 2,
           'She treats it as rent; she never says whether it is '
           'unfair.',
           {0: 'Yes would need a judgement of fairness; she treats the '
               'fine as rent.', 1: 'No would need her to call it fair, and she never says '
               'so.'}),
          ('Wolfram stopped because he was afraid of being fined.',
           ['Yes', 'No', 'Not Given'], 1,
           'He stopped because of what it cost his friend.',
           {0: 'Yes would need fear of the fine; he names what it cost '
               'his friend.', 2: 'Not Given is wrong because he gives his reason.'})])],
   listen=[
    dict(heading='A short talk: rules people break', part='Part 2',
         task='A talk to a community meeting · sentence completion and multiple choice', band='l2',
         qtype='Questions 23-26',
         script=[
          ('Speaker', 'I have been asked to talk about why people break '
           'small rules, and I am going to give you the finding that '
           'surprises every audience I give it to.'),
          ('Speaker', 'When researchers ask people what would stop them '
           'breaking a minor rule, almost everybody says a bigger penalty. '
           'When researchers measure what actually stops them, the answer '
           'is the chance of being caught, and the penalty hardly matters '
           'at all.'),
          ('Speaker', 'The clearest example is parking. Doubling a fine '
           'produces almost no change in behaviour. Putting one inspector '
           'on a street twice a week changes it within a fortnight, and '
           'the inspector costs less than the administration of the higher '
           'fine.'),
          ('Speaker', 'There is a second finding that is less comfortable. '
           'A fixed penalty falls far more heavily on some people than '
           'others. Fifty pounds is an irritation to one person and a '
           'week’s food to another, and the rule treats them as though it '
           'were the same act with the same consequence.'),
          ('Speaker', 'Several countries have responded by setting fines '
           'as a share of income rather than a fixed sum. The effect on '
           'behaviour is modest and the effect on fairness is '
           'considerable, which is an unusual combination and worth '
           'knowing about.'),
          ('Speaker', 'So if you take one thing from tonight: when '
           'somebody proposes a tougher penalty for the thing that annoys '
           'you, ask them what it would do to the chance of being caught. '
           'Usually the answer is nothing at all.')],
         items=[
          ('People say a bigger penalty would stop them, but what '
           'actually stops them is the chance of being ____________.',
           None, 'caught',
           'The finding he says surprises every audience.'),
          ('Doubling a parking fine produces',
           ['a large change', 'almost no change', 'a temporary change', 'an immediate change'],
           1,
           'While one inspector twice a week changes behaviour in a '
           'fortnight.',
           {0: 'A large change is what the audience expects and does '
               'not happen.', 2: 'Nothing temporary is reported; the change is almost '
               'nothing.', 3: 'The immediate change comes from the inspector, not the '
               'fine.'}),
          ('An inspector costs less than the administration of the '
           '____________ fine.', None, 'higher',
           'Which is why he calls it the better option.'),
          (
           'Fines set as a share of income have a modest effect on '
           'behaviour and a considerable effect on',
           ['revenue', 'fairness', 'enforcement', 'reporting'], 1,
           'A combination he calls unusual.',
           {0: 'Revenue is not the effect he reports for income-based '
               'fines.', 2: 'Enforcement is the chance of being caught, a separate '
               'point.', 3: 'Reporting is not discussed in connection with these '
               'fines.'})]),
    dict(heading='Two residents on parking and the law', part='Part 3',
         task='A conversation between two neighbours · note completion and multiple choice', band='l3',
         qtype='Questions 27-32',
         script=[
          ('Hesper', 'You reported me, did you not?'),
          ('Perpetua', 'I reported the pavement. Four of you park on it '
           'and I cannot get a pushchair past.'),
          ('Hesper', 'That is fair and I am going to argue with you '
           'anyway.'),
          ('Perpetua', 'Go on.'),
          ('Hesper', 'There are nineteen houses and eleven spaces. The '
           'council built it that way in 1974 and has refused to look at '
           'it twice. Where do you suggest the other eight cars go?'),
          ('Perpetua', 'I do not have an answer to that.'),
          ('Hesper', 'Nobody does. So we park on the pavement, pay a fine '
           'twice a year, and the council collects the money and changes '
           'nothing. That is not enforcement. That is an income.'),
          ('Perpetua', 'That is the part I actually agree with. My '
           'complaint is not that you are fined too little.'),
          ('Hesper', 'Then what is it?'),
          ('Perpetua', 'That the fine lets everybody stop thinking. You '
           'pay, so you feel settled; they collect, so they feel they have '
           'acted; and the pavement is exactly as blocked as it was.'),
          ('Hesper', 'That is a better argument than the one I expected '
           'and I want to add one thing to it.'),
          ('Perpetua', 'Please.'),
          ('Hesper', 'Number seventeen cannot pay it. She has stopped '
           'using the car and she walks to the bus with a stick. The same '
           'fine removed her car and did not remove mine.'),
          ('Perpetua', 'So it enforced the rule on the one person least '
           'able to argue with it.'),
          ('Hesper', 'Yes.'),
          ('Perpetua', 'Shall we write to the council together rather '
           'than about each other?'),
          ('Hesper', 'With the nineteen and the eleven in the first '
           'line.'),
          ('Perpetua', 'And number seventeen in the second.')],
         items=[
          ('The street has nineteen houses and ____________ parking '
           'spaces.', None, 'eleven',
           'Built that way in 1974 and not reviewed since.'),
          ('Hesper argues that the fine is not enforcement but',
           ['a punishment', 'an income', 'a warning', 'a deterrent'], 1,
           'Because the council collects it and changes nothing.',
           {0: 'Punishment is what she thinks the fine fails to '
               'achieve.', 2: 'A warning is not what he calls it; a warning changes '
               'behaviour.', 3: 'A deterrent is precisely what he says it has stopped '
               'being.'}),
          ('Perpetua says her complaint is not that Hesper is fined',
           ['too often', 'too little', 'unfairly', 'too late'], 1,
           'But that the fine lets everybody stop thinking.',
           {0: 'How often he is fined is not her objection either.', 2: 'Unfairness is her point about number seventeen, not '
               'about him.', 3: 'Timing is not raised anywhere in the exchange.'}),
          (
           'The effect of the fine, Perpetua says, is that the '
           'pavement remains',
           ['clearer', 'as blocked as before', 'unsafe at night', 'unrepaired'],
           1, 'While both sides feel the matter is settled.',
           {0: 'Clearer is what neither of them claims has happened.', 2: 'Night-time safety is not mentioned by either resident.', 3: 'Repair is not the issue; the pavement is blocked, not '
               'broken.'}),
          ('Hesper adds that the resident at number seventeen has stopped '
           'using her ____________.', None, 'car',
           'Because she cannot pay the fine.'),
          ('They agree to write to the council about the spaces and about '
           'number ____________.', None, 'seventeen',
           'Rather than complaining about each other.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Rules',
    longturn=[('The rule I think should be changed is the one at my old '
               'university that an assignment submitted one minute late lost '
               'ten per cent, and after twenty-four hours scored nothing at '
               'all.'),
              ('It applied to every undergraduate in every department, with no '
               'distinction between a two-page exercise and a dissertation, '
               'and the only way round it was a medical note.'),
              ('I understand why it existed. Deadlines are fair only if they '
               'are the same for everybody, and a tutor who gives one student '
               'an extra day is marking a different piece of work. Before the '
               'rule, extensions were given informally, which meant they were '
               'given to the confident students who asked.'),
              ('What I would change is the cliff edge rather than the '
               'deadline. I would keep the deadline, keep it absolute, and '
               'replace the penalty with something that falls gradually: two '
               'per cent an hour for the first day, say. That keeps the '
               'fairness, because the rule still applies to everybody equally, '
               'but it stops a printer failure at midnight costing somebody a '
               'grade. I would also publish the number of late submissions '
               'each term, because my suspicion is that the rule\'s real effect '
               'was on what students handed in, not on when.')],
    intro=('Short answers first, then the long turn. The last bullet is '
           'where the band is decided.'),
    cue=('Describe a rule you think should be changed.',
         ['what the rule is', 'who it applies to',
          'why it exists',
          'and explain how you would change it']),
    qs=['Are there many rules where you live?',
        'Do people generally follow them?',
        'Now look at the card. You have one minute to make notes.',
        'Is it ever right to break a rule?'],
    shape=[('answer', 'The parking rule on my street.'),
           ('support', 'Nineteen houses and eleven spaces.'),
           ('follow-up', 'So eight cars are breaking it every night by '
            'arithmetic.'),
           ('support', 'I would not change the rule; I would change the '
            'spaces.'),
           ('follow-up', 'Because a rule that cannot be obeyed by '
            'everybody is really a tax on whoever arrives last.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Fines or community work for minor offences?',
         prompt=('Some people believe minor offences should be punished '
                 'with fines, while others believe community work is '
                 'better. Discuss both and give your own opinion. Write at '
                 'least 250 words.'),
         model=[
          'Both punishments are used for the same offences in most '
          'countries, and the argument between them is usually conducted '
          'without the one fact that decides it, which is what each '
          'punishment costs the person receiving it.',
          'The case for fines is administrative. A fine is cheap to issue, '
          'requires no supervision, and can be collected automatically. '
          'Community work needs a place, a supervisor and a record, and '
          'costs the state money rather than raising it. For a crowded '
          'system dealing with thousands of minor cases, this is a serious '
          'argument.',
          'The case against fines is that the same sum is not the same '
          'punishment. Fifty pounds is an irritation to one person and a '
          'week’s food to another. On my own street a parking fine '
          'removed one neighbour’s car and had no effect whatever on '
          'four others, so the rule was in practice enforced on the person '
          'least able to argue with it.',
          'Community work avoids that problem because it takes time, and '
          'everybody has the same amount. It has a second advantage that '
          'is less often mentioned: the work is visible, so the public can '
          'see that something was done, which fines never show.',
          'My own view is that fines should be set as a share of income '
          'rather than as a fixed sum, which several countries already do, '
          'and that community work should be kept for repeated offences. '
          'That combination keeps the cheap punishment cheap, removes the '
          'unfairness that makes people resent it, and reserves the '
          'expensive one for the cases where the first has already '
          'failed.'],
         notes=[
          'Structure 6: the two choices, then a position that takes '
          'something from each. The conclusion is a rule for when to use '
          'which, not a vote for one side.',
          'Paragraph 3 uses a personal example with numbers in it. At this '
          'band, one specific case is worth more than three general '
          'statements, and it is also much easier to produce under '
          'pressure.',
          'The second advantage of community work is introduced as "less '
          'often mentioned". Adding something the usual argument omits is '
          'the cheapest way to lift an essay above the standard answer.'],
         criterion=[('A position that takes something from each side',
                     'Task Response'),
                    ('One specific case with numbers in it',
                     'Task Response'),
                    ('A point the usual argument omits',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Hypothetical past with would have',
    explain=('Arguing about what a different rule would have done needs '
             'the unreal past. These patterns do it without becoming '
             'tangled.'),
    examples=['A fine set as a share of income would have cost her '
              'nothing.',
              'If the street had eleven more spaces, nobody would have '
              'been fined.',
              'Doubling the fine would not have changed anybody’s '
              'behaviour.',
              'Had an inspector been present, the street would have '
              'cleared.'],
    task='Rewrite each sentence as an unreal past.',
    items=[('The fine did not stop them.',
            'A larger fine would not have stopped them either, because the '
            'chance of being caught did not change.'),
           ('She cannot pay, so she stopped driving.',
            'If the fine had been set as a share of income, she would not '
            'have had to stop driving.'),
           ('There are not enough spaces.',
            'If the council had built nineteen spaces in 1974, the '
            'pavement would not be blocked today.'),
           ('An inspector would work.',
            'Had an inspector visited twice a week, the street would have '
            'cleared within a fortnight.'),
           ('Community work costs more.',
            'Community work would have cost the council more to '
            'administer, though it would have fallen equally on '
            'everybody.')]),
   vocab=[('penalty', 'a punishment for breaking a rule'),
          ('deterrent', 'something that puts people off acting'),
          ('policing', 'the work of enforcing rules'),
          ('obedience', 'following a rule'),
          ('fine', 'a sum of money paid as a punishment'),
          ('community order', 'unpaid work given instead of a fine'),
          ('offence', 'an act that breaks the law'),
          ('in proportion', 'matching the size of something else')],
   expr=[('a fine falls far more heavily on some people than others',
          'the sentence this cycle turns on'),
         ('that is not enforcement; that is an income',
          'reinterprets a penalty'),
         ('it enforced the rule on the one person least able to argue '
          'with it', 'names who a flat penalty reaches'),
         ('a rule that cannot be obeyed by everybody',
          'describes an arithmetic problem, not a moral one')],
   trans=['whereas', 'on the other hand', 'in practice', 'by contrast'],
  ),

  dict(
   sub='What the figures say about crime',
   step=3,
   read=[
    dict(heading='Recorded crime and reported crime are not the same',
         kind='Data article',
         task='Matching information, sentence completion and True/False/Not Given',
         band='gt_work', qtype='Questions 33-38',
         figure=_CRIME,
         paras=[
          'The graph shows recorded crime in four categories over ten '
          'years, measured as offences per thousand residents. Three of '
          'the four lines tell a similar story and the fourth does not, '
          'which is the first thing to say about it.',
          'Burglary and vehicle theft behave almost identically. Burglary '
          'falls from 18 to 9 and vehicle theft from 15 to 8, both '
          'declining steadily until 2020 and then flattening. The two '
          'lines are never more than three points apart.',
          'Criminal damage is the flat line. It begins at 21, ends at 20, '
          'and never leaves the range 19 to 21 in any year measured. It is '
          'the largest category throughout the first half of the period '
          'and the second largest at the end.',
          'Fraud is the exception. It rises from 11 to 38, overtaking '
          'criminal damage in 2021 and becoming the largest category by a '
          'wide margin. It is the only line that rises at all, and it '
          'rises throughout.',
          'The explanation offered for the fall in burglary and vehicle '
          'theft is mostly technical. Cars became harder to steal and '
          'houses easier to alarm, and both changes applied to every '
          'property at once rather than to the people inclined to steal '
          'from it.',
          'The explanation for fraud is partly real and partly '
          'administrative. More fraud is committed, and more of what is '
          'committed is now recorded, because reporting it was moved to a '
          'single national service in 2017. A reader who treats the whole '
          'rise as a rise in offending is reading a change in procedure as '
          'a change in the world.'],
         items=[
          (
           'Which paragraph explains the fall in two of the '
           'categories?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           2, 'Cars harder to steal and houses easier to alarm.',
           {0: 'Paragraph 3 identifies the category that barely moves.', 1: 'Paragraph 4 is about fraud, the one line that rises.', 3: 'Paragraph 6 warns against reading a procedural change '
               'as a real one.'}),
          (
           'Which paragraph warns against reading a procedural change '
           'as a real one?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 3'],
           2, 'Reporting moved to a national service in 2017.',
           {0: 'Paragraph 4 describes fraud, the one line that rises.', 1: 'Paragraph 5 explains the fall in two of the '
               'categories.', 3: 'Paragraph 3 describes criminal damage, the flat line.'}),
          (
           'Which paragraph identifies the category that barely moves?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1, 'Criminal damage, never outside 19 to 21.',
           {0: 'Paragraph 2 pairs burglary with vehicle theft as they '
               'fall.', 2: 'Paragraph 4 describes fraud, which moves most of all.', 3: 'Paragraph 5 explains the fall in two of the '
               'categories.'}),
          ('Burglary fell from 18 to ____________ over the period.', None,
           '9', 'Closely matched by vehicle theft.'),
          (
           'More fraud is now committed than at the start of the '
           'period.', ['True', 'False', 'Not Given'], 0,
           'Paragraph 6 says more fraud is committed as well as more '
           'being recorded.',
           {1: 'False would need the rise to be entirely '
               'administrative, and the text says partly real.', 2: 'Not Given is wrong because paragraph 6 separates the '
               'two causes.'}),
          (
           'Fraud was the largest recorded category throughout the ten '
           'years.', ['True', 'False', 'Not Given'], 1,
           'Paragraph 4 says it overtook criminal damage in 2021, so '
           'not before then.',
           {0: 'True would need fraud largest from the start; it '
               'overtakes in 2021.', 2: 'Not Given is wrong because the year of the crossing is '
               'given.'})])],
   listen=[
    dict(heading='A criminologist on crime statistics', part='Part 4',
         task='A lecture on measuring crime · note completion and multiple choice', band='l4',
         qtype='Questions 39-44',
         figure=_CRIME,
         script=[
          ('Criminologist', 'There are two ways of counting crime and they '
           'disagree, and the disagreement is not a problem to be fixed. '
           'It is the most informative thing in the subject.'),
          ('Criminologist', 'Recorded crime is what the police write down. '
           'Survey crime is what people tell researchers happened to them, '
           'whether or not they told anybody at the time. The gap between '
           'the two has a name: the dark figure.'),
          ('Criminologist', 'The gap is not the same size for every '
           'offence. For vehicle theft it is almost nothing, because you '
           'must report it to claim the insurance. For minor assault it is '
           'enormous. So a table of recorded crime is partly a table of '
           'which crimes people bother to report.'),
          ('Criminologist', 'Now look at the fraud line on this graph. '
           'Eleven to thirty-eight in ten years. Some of that is more '
           'fraud. Some of it is that reporting moved to one national '
           'service in 2017 and became easier, so the dark figure shrank '
           'and the recorded figure rose without anybody committing a '
           'single extra offence.'),
          ('Criminologist', 'You cannot separate the two from this graph. '
           'You can only separate them by comparing it against the survey, '
           'which asks the same question every year regardless of how '
           'reporting works.'),
          ('Criminologist', 'And the survey is why we are confident about '
           'burglary. Recorded burglary halved, and surveyed burglary '
           'halved by a similar amount, so that fall is real. Two methods '
           'that fail in different ways agreeing is much stronger evidence '
           'than either alone.'),
          ('Criminologist', 'So the discipline for the exam and for the '
           'newspaper is the same. When a recorded figure moves, ask '
           'whether anything changed about how it is recorded, and do not '
           'answer the question until you have.'),
          ('Criminologist', 'And one warning about the word crime '
           'itself. Each of these four lines counts a different thing, '
           'and adding them together to produce a total crime figure is '
           'a calculation nobody who studies this would defend, which has '
           'never stopped it appearing on a front page.')],
         items=[
          ('The gap between recorded crime and survey crime is called the '
           '____________ figure.', None, 'dark',
           'And it differs in size by offence.'),
          ('The gap is almost nothing for vehicle theft because victims '
           'must report it to claim the ____________.', None,
           'insurance', 'Unlike minor assault, where the gap is '
           'enormous.'),
          (
           'Part of the rise in recorded fraud is explained by '
           'reporting moving to one national service in',
           ['2014', '2017', '2020', '2022'], 1,
           'Which made reporting easier and shrank the dark figure.',
           {0: 'Three years too early for the change he describes.', 2: 'By 2020 the single service had been running for years.', 3: 'Later than the change that explains part of the rise.'}),
          ('The two counts can only be separated by comparing the graph '
           'against the ____________.', None, 'survey',
           'Which asks the same question every year.'),
          (
           'He is confident about burglary because recorded and '
           'surveyed burglary both',
           ['rose', 'halved', 'flattened', 'diverged'], 1,
           'Two methods failing differently and agreeing.',
           {0: 'A rise is what fraud did, not burglary.', 2: 'Flattening is what criminal damage does throughout.', 3: 'Divergence would weaken his case rather than support '
               'it.'}),
          (
           'His rule is to ask whether anything changed about how a '
           'figure is',
           ['defined', 'recorded', 'published', 'funded'], 1,
           'Before answering any question about it.',
           {0: 'Definition matters, but his rule names the recording.', 2: 'Publication is not what he tells you to question.', 3: 'Funding is not part of the discipline he sets out.'})])],
   speak=dict(
    part='Part 3', focus='Measuring crime',
    intro=('Four or five sentences. Give the reason, then the '
           'consequence.'),
    qs=['Are crime figures reliable?',
        'Why might people not report a crime?',
        'Should crime figures be published?',
        'Does reporting crime in the news change how safe people feel?'],
    shape=[('answer', 'Partly, and the unreliable part is '
            'predictable.'),
           ('support', 'People always report car theft because of '
            'insurance.'),
           ('follow-up', 'They often do not report a minor assault at '
            'all.'),
           ('support', 'So the figures measure reporting as well as '
            'crime.'),
           ('follow-up', 'Which is why a rise can mean more offences or '
            'just an easier form.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Recorded crime in four categories over ten years',
         prompt=('The graph below shows recorded crime in four categories '
                 'over a ten-year period. Summarise the information by '
                 'selecting and reporting the main features, and make '
                 'comparisons where relevant. Write at least 150 words.'),
         figure=_CRIME,
         model=[
          'The line graph shows recorded offences per thousand residents '
          'in four categories between 2014 and 2024. Overall, three of the '
          'four categories either fell or remained stable, while fraud '
          'rose steeply throughout and replaced criminal damage as the '
          'largest category.',
          'Burglary and vehicle theft behave almost identically. Burglary '
          'fell from 18 to 9 and vehicle theft from 15 to 8, both '
          'declining steadily until 2020 and then levelling off. The two '
          'lines remain within three points of each other for the whole '
          'period.',
          'Criminal damage is essentially flat, beginning at 21 and ending '
          'at 20 without leaving the range 19 to 21 in any year.',
          'Fraud is the exception. It more than tripled, from 11 to 38, '
          'and rose in every period measured. It overtook burglary and '
          'vehicle theft before 2018 and passed criminal damage in 2021, '
          'ending 18 points above the next highest category. By the end of '
          'the period it accounted for more recorded offences than '
          'burglary and vehicle theft combined.'],
         notes=[
          'The Overall statement groups three categories together and '
          'names the fourth as the exception. On a four-line graph that '
          'single move is worth more than any individual figure.',
          'Burglary and vehicle theft share a paragraph because they share '
          'a shape. Describing them separately would use twice the words '
          'to say the same thing, and would hide the fact that they '
          'match.',
          'The final paragraph gives fraud the most space because it does '
          'the most. Equal space for four categories is the commonest '
          'reason a four-series answer scores band 5 rather than 6.'],
         criterion=[('Three grouped, one named as the exception',
                     'Task Achievement'),
                    ('Lines that match sharing a paragraph',
                     'Coherence and Cohesion'),
                    ('Most space to the line that does most',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing divergence and convergence in data',
    fix=dict(
     text=('The two lines diverged after 2012, when the figure for burglary '
           'begun to fall. Vehicle crime continued to rise, so that the gap '
           'widened each year. By 2018 the difference had reached 40,000, '
           'which was the widest point. The two series converged again in '
           '2020, when burglary rose and vehicle crime was fell.'),
     faults=[('when the figure for burglary begun to fall',
              'when the figure for burglary began to fall',
              ('The past simple of begin is began. Begun needs have in front '
               'of it.')),
             ('which was the widest point',
              'which was the widest gap in the period',
              ('Widest point is not what the figure describes; the gap, not a '
               'point, is what widened.')),
             ('vehicle crime was fell',
              'vehicle crime fell',
              ('Fell is already the past form, so was cannot stand in front of '
               'it.'))]),
    explain=('Four lines need words for moving together and moving '
             'apart. These patterns give both, and attach a time to the '
             'change.'),
    examples=['Two of the four move together throughout; the other two '
              'diverge after 2018.',
              'The two lines remain within three points of each other.',
              'Fraud overtook criminal damage in 2021.',
              'Both fell steadily until 2020 and then levelled off.'],
    task='Rewrite each sentence so that it names when the change '
         'happened.',
    items=[('Burglary and vehicle theft are similar.',
            'Burglary and vehicle theft move together throughout, '
            'remaining within three points of each other.'),
           ('Fraud became the biggest.',
            'Fraud overtook criminal damage in 2021 and ended as the '
            'largest category.'),
           ('The fall stopped.',
            'Both categories fell steadily until 2020, after which they '
            'levelled off.'),
           ('Criminal damage did not change.',
            'Criminal damage remained within the range 19 to 21 in every '
            'year measured.'),
           ('The lines separate.',
            'The four lines move together until 2016, after which fraud '
            'diverges from the other three.')]),
   vocab=[('recorded crime', 'offences written down by the police'),
          ('reported crime', 'offences that victims tell somebody '
           'about'),
          ('survey', 'a study that asks a sample the same questions'),
          ('dark figure', 'crime that happens and is never recorded'),
          ('clear-up rate', 'the share of cases solved'),
          ('classification', 'how an offence is categorised'),
          ('undercount', 'a figure lower than the real number'),
          ('level off', 'to stop rising or falling')],
   expr=[('two of the four move together throughout; the other two '
          'diverge', 'the grouping sentence for a four-line graph'),
         ('a change in procedure read as a change in the world',
          'the error this cycle warns about'),
         ('two methods that fail in different ways agreeing',
          'why two sources beat one'),
         ('ask whether anything changed about how it is recorded',
          'the question to put to any figure')],
   trans=['whereas', 'at which point', 'overall', 'throughout'],
  ),

  dict(
   sub='Does punishment prevent crime',
   step=3,
   read=[
    dict(heading='Certainty, severity and what deters',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and note completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'The belief that heavier punishment prevents crime is among the '
          'most widely held beliefs about the law, and among the least '
          'supported by evidence. The research on the question is unusually '
          'extensive, it spans sixty years and many countries, and its '
          'central conclusion has been stable for most of that period. It is '
          'also among the few findings in criminology that commands '
          'agreement from researchers who disagree about almost everything '
          'else.',
          'The conclusion is that two different things are confused in '
          'ordinary argument. The chance of being caught and the size of '
          'the punishment are both assumed to deter, and the evidence '
          'separates them sharply. Raising the chance of detection reduces '
          'offending reliably. Raising the penalty, holding detection '
          'constant, produces effects that are small, inconsistent and '
          'frequently absent altogether.',
          'The clearest demonstrations come from changes nobody arranged for '
          'research purposes. Where a police force has redeployed officers '
          'to a particular area, recorded offences in that area have fallen '
          'within weeks and risen again when the officers left. Where a '
          'legislature has increased sentences for an offence, the measured '
          'change in that offence has usually been indistinguishable from '
          'zero. The two kinds of change have been studied with the same '
          'methods by the same people, which is what makes the contrast '
          'persuasive.',
          'Several explanations have been offered and the most plausible '
          'is about information. An offender knows roughly how likely they '
          'are to be caught in a particular street at a particular hour, '
          'because that is visible. Very few know what the current '
          'sentence for their offence is, and those who are asked '
          'routinely give figures that are badly wrong in both '
          'directions.',
          'A second explanation concerns time. The chance of arrest is '
          'immediate and the punishment is distant, and the research on '
          'how people weigh immediate against distant consequences '
          'predicts exactly the pattern observed. A consequence that '
          'arrives years later is weighted close to nothing by many of the '
          'people the law is attempting to influence.',
          'There is an important qualification that supporters of heavier '
          'sentences rarely state and opponents rarely concede. Imprisonment '
          'prevents offences during the period of imprisonment itself, '
          'simply by removing the opportunity, and this effect is real and '
          'measurable. It is an argument for imprisonment, and it is not an '
          'argument about deterrence, and the two are run together so '
          'routinely that the distinction has to be made again in almost '
          'every discussion.',
          'Keeping these apart matters because they lead to different '
          'policies. If deterrence is the aim, the money buys detection: '
          'more officers, better investigation, faster charging. If '
          'prevention through removal is the aim, the money buys prison '
          'places. The two compete for the same budget and are regularly '
          'described as though they were a single policy.'],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['Why offenders lack information', 'Evidence from natural experiments', 'The effect of imprisonment itself', 'Two aims competing for one budget'],
           1, 'Redeployed officers and increased sentences compared.',
           {0: 'Information is paragraph 4, on sentences offenders '
               'cannot name.', 2: 'Imprisonment itself is paragraph 6, the qualification.', 3: 'The competing budgets are paragraph 7, the last '
               'paragraph.'}),
          ('Choose the best heading for paragraph 5.',
           ['Information about sentences', 'Immediate against distant consequences', 'What imprisonment prevents', 'Where the money goes'],
           1,
           'A consequence arriving years later is weighted near zero.',
           {0: 'Information about sentences is paragraph 4, not this '
               'one.', 2: 'What imprisonment prevents is paragraph 6, the '
               'qualification.', 3: 'Where the money goes is paragraph 7, on the two '
               'budgets.'}),
          ('Choose the best heading for paragraph 7.',
           ['Natural experiments', 'The qualification', 'Two aims, two different budgets', 'Why the belief persists'],
           2, 'Detection and prison places compete for the same money.',
           {0: 'Natural experiments are paragraph 3, with the '
               'redeployments.', 1: 'The qualification about imprisonment is paragraph 6.', 3: 'Why the belief persists is not this paragraph, which '
               'is about cost.'}),
          (
           'The writer believes raising penalties reliably reduces '
           'offending.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 says the effects are small and often absent.',
           {0: 'Yes would need reliability; paragraph 2 calls the '
               'effects small and often absent.', 2: 'Not Given is wrong because the writer weighs the '
               'evidence on severity.'}),
          (
           'The writer believes imprisonment has no preventive effect '
           'at all.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 6 calls the removal effect real and measurable.',
           {0: 'Yes would need no effect; paragraph 6 calls the '
               'removal effect real.', 2: 'Not Given is wrong because the writer separates the '
               'two effects.'}),
          ('Offenders know how likely they are to be caught because that '
           'is ____________.', None, 'visible',
           'Paragraph 4, unlike the current sentence for the offence.'),
          ('When asked, offenders give sentence figures that are wrong in '
           'both ____________.', None, 'directions',
           'Paragraph 4, which is the information explanation.'),
          ('If deterrence is the aim, the money buys ____________.', None,
           'detection',
           'The final paragraph, against prison places for removal.')])],
   listen=[
    dict(heading='A lecture on deterrence', part='Part 4',
         task='A lecture on punishment and prevention · note completion and multiple choice', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'I am going to tell you something that almost every '
           'audience resists, and then show you why they resist it, '
           'because the resistance is more interesting than the '
           'finding.'),
          ('Lecturer', 'The finding first. What puts people off committing '
           'an offence is the chance of being caught. The size of the '
           'punishment does almost nothing. Sixty years of research, many '
           'countries, the same answer.'),
          ('Lecturer', 'The evidence is clean because the experiments are '
           'natural. Move officers into an area and offences fall within '
           'weeks. Move them out and offences return. Increase the '
           'sentence for an offence by a third and you get a change you '
           'cannot distinguish from nothing.'),
          ('Lecturer', 'Why? Information, mostly. Somebody standing on a '
           'street at eleven at night knows roughly how often a patrol '
           'comes, because they can see it. Almost nobody knows what the '
           'sentence is. When we ask, the answers are wrong in both '
           'directions, and badly wrong.'),
          ('Lecturer', 'And timing. Arrest is tonight. The sentence is two '
           'years away. We know a great deal about how people weigh a '
           'distant consequence against an immediate one, and it predicts '
           'exactly this.'),
          ('Lecturer', 'Now the qualification, which I want you to be '
           'scrupulous about. Prison does prevent offences while somebody '
           'is in it. That is real and we can measure it. It is also not '
           'deterrence, and running the two together is how this argument '
           'stays confused for sixty years.'),
          ('Lecturer', 'So the resistance. I think people resist this '
           'because it sounds like saying the offence does not matter. It '
           'is not that. It is a claim about which lever moves the number, '
           'and the answer is the unglamorous lever that costs money every '
           'year rather than the one you can announce in a speech.'),
          ('Lecturer', 'Which is also why the finding has survived sixty '
           'years without changing very much policy. Detection is a line '
           'in a budget that must be defended annually. A sentence length '
           'is a line in a statute that is passed once and never costs '
           'anybody anything again.')],
         items=[
          ('What puts people off offending, he says, is the chance of '
           'being ____________.', None, 'caught',
           'Sixty years of research in many countries.'),
          ('Moving officers into an area reduces offences within',
           ['days', 'weeks', 'months', 'a year'], 1,
           'And offences return when the officers leave.',
           {0: 'Days is faster than the lecture claims for the effect.', 2: 'Months is slower than the weeks he reports.', 3: 'A year is far longer than the effect takes to appear.'}),
          (
           'Increasing a sentence by a third produces a change that is',
           ['small but clear', 'indistinguishable from nothing', 'delayed', 'temporary'],
           1, 'Which is the comparison that makes the evidence clean.',
           {0: 'Small but clear is the opposite of what he reports.', 2: 'No delay is described; the change simply does not '
               'appear.', 3: 'Nothing temporary is reported for a longer sentence.'}),
          ('When offenders are asked about sentences, their answers are '
           'wrong in both ____________.', None, 'directions',
           'Which is the information explanation.'),
          (
           'He insists that prison preventing offences during '
           'imprisonment is real but is not',
           ['measurable', 'deterrence', 'expensive', 'common'], 1,
           'And says running the two together keeps the argument '
           'confused.',
           {0: 'He says the opposite: the effect is real and '
               'measurable.', 2: 'Cost is his closing point about budgets, not this one.', 3: 'How common imprisonment is, is not discussed here.'}),
          ('He thinks people resist the finding because it sounds like '
           'saying the offence does not ____________.', None, 'matter',
           'Whereas it is a claim about which lever moves the '
           'number.')])],
   speak=dict(
    part='Part 3', focus='Punishment and prevention',
    intro=('Five sentences. Try once to separate two things people run '
           'together.'),
    qs=['Does the threat of punishment stop people committing crimes?',
        'Should sentences be longer for serious crimes?',
        'What else can reduce crime?',
        'Is prison the right answer for most offences?'],
    shape=[('answer', 'The threat does, and not the part people '
            'think.'),
           ('support', 'What deters is the chance of being caught.'),
           ('follow-up', 'The length of the sentence does almost '
            'nothing.'),
           ('support', 'People know how often a patrol comes and not what '
            'the sentence is.'),
           ('follow-up', 'So I would separate two arguments: deterring '
            'people, and keeping somebody away while they are inside, '
            'which are different things with different costs.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Planning: should sentences be longer?',
         prompt=('Should prison sentences be longer? Brainstorm ten '
                 'ideas, then keep only those that could each fill a '
                 'paragraph. Twelve minutes.'),
         plan=('Sentences should not be lengthened as a way of '
               'preventing crime, because the evidence shows detection '
               'rather than severity is what deters, although there is a '
               'separate and narrower argument for imprisonment that is '
               'worth keeping distinct',
               [('Lengthening sentences does not deter',
                 ['redeploying officers cuts offences within weeks',
                  'increasing a sentence produces no measurable change']),
                ('There is a different argument for imprisonment',
                 ['offences are prevented during the time inside',
                  'that is an argument about removal, not about '
                  'deterrence'])]),
         notes=[
          'The test this unit adds is whether an idea can fill a '
          'paragraph. "Prison is expensive" is true and is one sentence; '
          'it belongs underneath something larger rather than as a heading '
          'of its own.',
          'Both headings are claims with verbs in them. A heading that '
          'reads "sentencing" gives you nothing to write; a heading that '
          'reads "lengthening sentences does not deter" is already the '
          'first sentence of the paragraph.',
          'The second heading concedes something to the other side. An '
          'outline in which both headings argue the same way usually means '
          'the brainstorm stopped too early.'],
         criterion=[('Only ideas that can fill a paragraph',
                     'Task Response'),
                    ('Headings that are claims, not topics',
                     'Coherence and Cohesion')],
         instruct='  Twelve minutes, timed. You write this essay in cycle '
                  '5.',
         lines=12)],
   gram=dict(
    point='Comparing causes: matters more than, is outweighed by',
    explain=('Saying that one cause matters more than another needs '
             'language that compares them directly rather than praising '
             'one and ignoring the other.'),
    examples=['What deters is the chance of being caught, not the size of '
              'the penalty.',
              'The certainty of detection matters more than the length of '
              'the sentence.',
              'Any effect of a longer sentence is outweighed by the '
              'effect of a visible patrol.',
              'The two are regularly confused in public argument.'],
    task='Rewrite each sentence so that the two causes are compared.',
    items=[('Longer sentences do not work.',
            'The length of a sentence matters far less than the chance of '
            'being caught.'),
           ('Police patrols are effective.',
            'A visible patrol reduces offending more reliably than any '
            'increase in penalty yet measured.'),
           ('People do not know the sentences.',
            'Offenders know the chance of arrest because it is visible, '
            'whereas very few know the current sentence.'),
           ('Prison stops crime.',
            'Imprisonment prevents offences during the sentence itself, '
            'which is a different claim from deterrence.'),
           ('Both arguments are used.',
            'The two arguments compete for the same budget and are '
            'regularly presented as one.')]),
   vocab=[('deterrent effect', 'the extent to which a threat puts people '
           'off'),
          ('harshness', 'how severe a punishment is'),
          ('chance of arrest', 'how likely it is that an offender is '
           'caught'),
          ('length of sentence', 'how long a prison term lasts'),
          ('real-world test', 'a change in the world studied like a trial'),
          ('redeploy', 'to move staff to another area'),
          ('immediate', 'happening now rather than later'),
          ('qualification', 'a limit put on a general claim')],
   expr=[('what deters is the chance of being caught, not the size of the '
          'penalty', 'the finding this cycle rests on'),
         ('a change you cannot distinguish from nothing',
          'reports a null result honestly'),
         ('it is an argument for imprisonment and not an argument about '
          'deterrence', 'separates two claims'),
         ('the unglamorous lever that costs money every year',
          'explains why the finding is unpopular')],
   trans=['in particular', 'more importantly', 'consequently',
          'by comparison'],
  ),

  dict(
   sub='What prison does afterwards',
   step=4,
   read=[
    dict(heading='The reoffending that follows a sentence',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and note completion',
         band='acad', qtype='Questions 59-66',
         paras=[
          'About forty per cent of people released from prison in a typical '
          'European country are convicted of a further offence within a '
          'year. The figure is remarkably similar across countries with very '
          'different prison systems, different sentence lengths and '
          'different conditions inside, which is the first thing that makes '
          'it difficult to interpret and the first thing quoted by everybody '
          'who interprets it anyway.',
          'The similarity does not mean that prisons make no difference. '
          'It means that the figure is dominated by who goes to prison '
          'rather than by what happens there. The people sentenced are '
          'disproportionately those with earlier convictions, no '
          'qualifications, unstable housing and untreated addiction, and '
          'all four predict further offending independently of any '
          'sentence.',
          'Separating the effect of the prison from the characteristics of '
          'the prisoner is therefore the central methodological problem in '
          'the field, and it has one good solution. In several countries '
          'cases are assigned to judges effectively at random, and judges '
          'differ substantially in how often they imprison. Comparing '
          'similar defendants who happened to meet different judges produces '
          'an estimate that is not contaminated by who those defendants '
          'were, because nothing about them determined which judge they met.',
          'Those studies find that short prison terms, under about six '
          'months, increase reoffending relative to a community sentence for '
          'a comparable defendant. The effect is consistent across several '
          'countries, it survives every check the authors have applied to '
          'it, and it is usually estimated at between four and seven '
          'percentage points.',
          'The mechanism proposed is mundane. A short sentence is long '
          'enough to cost somebody their job, their rented home and their '
          'place on a waiting list, and too short for any programme inside '
          'to begin. The person is released into a worse position than the '
          'one they occupied, holding the same problems and fewer resources, '
          'and the first weeks after release are when reoffending is most '
          'concentrated.',
          'Longer sentences are harder to study and the findings are mixed. '
          'What is reasonably well established is that the conditions matter '
          'more than the duration: prisons where prisoners work, study and '
          'keep family contact produce lower reoffending than prisons where '
          'they do not, and the difference is larger than the difference '
          'between sentence lengths. That finding is inconvenient for both '
          'sides of the usual argument, which may be why it is cited by '
          'neither.',
          'None of this settles what a sentence is for, which is the '
          'question underneath the argument. A sentence is asked to punish '
          'the offence, to protect the public, and to leave the person '
          'less likely to offend again, and these three aims pull apart. '
          'A short custodial sentence punishes visibly, protects briefly '
          'and leaves the person worse, which is exactly what the evidence '
          'describes.'],
         items=[
          (
           'Which paragraph explains why the reoffending figure is '
           'similar across countries?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'],
           1,
           'Dominated by who goes to prison rather than what happens '
           'there.',
           {0: 'Paragraph 1 gives the figure and says it is hard to '
               'interpret.', 2: 'Paragraph 3 describes the method using random '
               'allocation to judges.', 3: 'Paragraph 4 reports the finding about short prison '
               'terms.'}),
          (
           'Which paragraph describes the method using random '
           'allocation to judges?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1, 'Comparing similar defendants who met different judges.',
           {0: 'Paragraph 2 explains why the reoffending figure is '
               'similar across countries.', 2: 'Paragraph 4 gives the result that method produced.', 3: 'Paragraph 5 gives the mechanism behind the effect of '
               'short sentences.'}),
          (
           'Which paragraph gives the mechanism behind the effect of '
           'short sentences?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'],
           1,
           'Long enough to cost a job and a tenancy, too short for a '
           'programme.',
           {0: 'Paragraph 4 gives the size of the effect, not its '
               'cause.', 2: 'Paragraph 6 is about longer sentences and prison '
               'conditions.', 3: 'Paragraph 7 asks what a sentence is for.'}),
          (
           'The writer believes the similar figures show prisons make '
           'no difference.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 says the opposite, and explains why.',
           {0: 'Yes would need that reading; paragraph 2 explains why '
               'it is wrong.', 2: 'Not Given is wrong because the figures are interpreted '
               'for you.'}),
          (
           'The writer believes prison conditions matter more than '
           'sentence length.', ['Yes', 'No', 'Not Given'], 0,
           'Paragraph 6 states this as reasonably well established.',
           {1: 'No would need a contradiction; paragraph 6 states it '
               'as established.', 2: 'Not Given is wrong because the comparison is made '
               'explicitly.'}),
          ('Short sentences are defined in the research as under about '
           '____________ months.', None, 'six',
           'Paragraph 4, compared with community sentences.'),
          ('The estimated increase in reoffending is between four and '
           '____________ percentage points.', None, 'seven',
           'Paragraph 4, consistent across several countries.'),
          ('A sentence is asked to punish, to protect the public, and to '
           'leave the person less likely to ____________ again.', None,
           'offend', 'The final paragraph, where the three aims pull '
           'apart.')])],
   listen=[
    dict(heading='A judge and a researcher disagree', part='Part 4',
         task='A recorded discussion · multiple choice and sentence completion', band='l4', qtype='Questions 67-72',
         script=[
          ('Chair', 'Judge Aldersey sentences in the Crown Court. Dr '
           'Nakamura-Reilly studies reoffending. Each will start with '
           'their own weakest point.'),
          ('Aldersey', 'Mine is that I have never seen the figures for my '
           'own sentences. I have sat for nineteen years, I have passed '
           'several thousand sentences, and I do not know what happened '
           'to any of those people afterwards. No judge does.'),
          ('Nakamura-Reilly', 'And mine is that my best evidence depends '
           'on judges differing from one another, which means my method '
           'only works because of something the system regards as a '
           'fault.'),
          ('Chair', 'Where is the disagreement?'),
          ('Aldersey', 'On what a sentence is for. She measures '
           'reoffending. I am also asked to punish, and to be seen to '
           'punish, and if I give a community order for a burglary the '
           'victim reads it in the paper as nothing.'),
          ('Nakamura-Reilly', 'That is the strongest thing said this '
           'afternoon and it is not an argument about evidence. It is an '
           'argument about what the sentence is doing, and I accept that '
           'punishment is one of its jobs.'),
          ('Aldersey', 'Thank you.'),
          ('Nakamura-Reilly', 'What I would ask in return is that we stop '
           'claiming the short sentence does the other two. It punishes. '
           'It protects for eleven weeks. And it releases somebody with '
           'no job and no tenancy who is four to seven points more likely '
           'to offend than if I had never seen them.'),
          ('Aldersey', 'I would accept that in my own words. The short '
           'custodial sentence is the one I am least comfortable with and '
           'the one Parliament has made hardest to avoid.'),
          ('Nakamura-Reilly', 'Then the disagreement may be with '
           'Parliament rather than between us.'),
          ('Aldersey', 'It generally is. May I say the thing I would most '
           'want changed?'),
          ('Chair', 'Please.'),
          ('Aldersey', 'Tell me what happened. Send every judge the '
           'figures for their own sentences once a year. I cannot '
           'calibrate on cases whose endings I never learn.')],
         items=[
          (
           'Judge Aldersey\u2019s own weakest point is that he has never '
           'seen',
           ['the research', 'the figures for his own sentences', 'a prison', 'the guidelines'],
           1, 'After nineteen years and several thousand sentences.',
           {0: 'He does not say he is unfamiliar with the research.', 2: 'Prisons are not what he says he has never seen.', 3: 'The guidelines are what he sentences by every day.'}),
          ('Dr Nakamura-Reilly admits her method depends on judges',
           ['agreeing', 'differing from one another', 'keeping records', 'being experienced'],
           1, 'Which the system regards as a fault.',
           {0: 'Agreement between judges would destroy her method.', 2: 'Record-keeping is the judge\u2019s complaint, not her '
               'concession.', 3: 'Experience is not what her method depends on.'}),
          ('The judge says a community order for a burglary is read by the '
           'victim as ____________.', None, 'nothing',
           'Which he says is an argument about what a sentence does.'),
          ('The researcher accepts that ____________ is one of a '
           'sentence’s jobs.', None, 'punishment',
           'In exchange for dropping a claim about the other two.'),
          ('She says a short sentence protects the public for about',
           ['two weeks', 'eleven weeks', 'six months', 'a year'], 1,
           'And releases somebody with no job and no tenancy.',
           {0: 'Too short for the period she names.', 2: 'Six months is where the short-sentence threshold sits.', 3: 'A year is far longer than the protection she '
               'describes.'}),
          (
           'What the judge would most want changed is to be sent the '
           'figures for his own sentences',
           ['monthly', 'once a year', 'on request', 'after each case'],
           1, 'Because he cannot calibrate on endings he never learns.',
           {0: 'Monthly is more often than he asks for.', 2: 'He wants them sent, not supplied when he asks.', 3: 'After each case the ending is still years away.'})])],
   speak=dict(
    part='Part 3', focus='What a sentence is for',
    sounds=[('Vowel length changes meaning, and the pairs that matter most are '
             'bit and beat, full and fool, pull and pool, and live and leave. '
             'Shorten the long one and a listener hears the other word.'),
            ('The short vowel is not just shorter; the tongue is in a '
             'different place. For bit the mouth is relaxed; for beat it is '
             'tense and spread, almost a smile.'),
            ('The crime vocabulary in this unit depends on it: a sentence, to '
             'seize, a fine, a finding. Say each one in a phrase and hold the '
             'long vowels slightly longer than feels natural.'),
            ('Try these three sentences: he will leave on Friday; he will live '
             'on Friday; the fine is the fine point. Say them to somebody and '
             'ask which word they heard.'),
            ('Record yourself on how safe your area is. Listen only for long '
             'vowels, and note any word that came out shorter than you meant.')],
    intro=('Five sentences. Try once to say that two aims pull against '
           'each other.'),
    qs=['What should a prison sentence achieve?',
        'Can punishment and rehabilitation be done at the same time?',
        'Should short prison sentences be used at all?',
        'Who should decide how long a sentence is?'],
    shape=[('answer', 'Three things, and they do not fit together.'),
           ('support', 'It has to punish, protect the public, and leave '
            'the person less likely to offend.'),
           ('follow-up', 'A short sentence does the first and fails the '
            'third.'),
           ('support', 'It costs somebody a job and a flat in eleven '
            'weeks.'),
           ('follow-up', 'So I would keep prison for the cases where '
            'protection is the point and use community orders for the '
            'rest.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should prison punish or rehabilitate?',
         prompt=('Some people say prison should punish offenders, while '
                 'others say it should prepare them to return to society. '
                 'Discuss both views and give your own opinion. Write at '
                 'least 250 words.'),
         model=[
          'The two views are usually presented as a choice, and the '
          'evidence suggests they are not alternatives so much as aims '
          'that a single sentence is asked to serve at once. My own view '
          'is that the conflict is real, that it is sharpest for short '
          'sentences, and that this is where the policy should change.',
          'The argument for punishment is not merely emotional. A sentence '
          'states publicly what the community will not accept, and a '
          'victim who reads that a burglary produced unpaid work may '
          'reasonably conclude that the offence was treated as nothing. '
          'That is a real function and no system that ignores it will keep '
          'public support.',
          'The argument for rehabilitation rests on what happens next. '
          'About forty per cent of those released are convicted again '
          'within a year, and the people sentenced are those most likely '
          'to reoffend before any sentence is passed: earlier '
          'convictions, no qualifications, unstable housing. A sentence '
          'that leaves all four untouched has protected the public for its '
          'own duration and no longer.',
          'The evidence that decides my own position concerns short '
          'sentences in particular. Studies comparing similar defendants '
          'who happened to appear before different judges find that '
          'sentences under six months raise reoffending by four to seven '
          'percentage points compared with a community order. The '
          'mechanism is ordinary: eleven weeks is long enough to lose a '
          'job and a tenancy and too short for any programme to begin.',
          'In my opinion, therefore, prison should be reserved for cases '
          'where protecting the public is the main purpose, and community '
          'sentences used where it is not. That keeps the punishment '
          'visible, which the first argument requires, without producing '
          'the result the second argument warns about.'],
         notes=[
          'The introduction refuses the either-or the question offers and '
          'says where the conflict is sharpest. Narrowing the question to '
          'the place where the evidence is clearest is the most reliable '
          'way to write a strong 250 words.',
          'The argument for punishment is given in its best form, '
          'including the victim reading the newspaper. An essay that '
          'treats the opposing view as merely emotional loses marks under '
          'Task Response even when its own view is right.',
          'Paragraph 4 carries the method as well as the number: similar '
          'defendants, different judges. Saying briefly how a figure was '
          'produced is rare at this band and is noticed.'],
         model65=[
                  'People disagree about whether prison should punish '
                  'offenders or prepare them to return to society. I '
                  'will discuss both views.',
                  'Those who favour punishment argue that a sentence '
                  'expresses how seriously society takes a crime, and '
                  'that victims deserve this. They also point out that '
                  'an offender in prison cannot commit further '
                  'offences outside, which protects the public '
                  'directly.',
                  'Those who favour rehabilitation point to what '
                  'happens afterwards. Most prisoners are released, '
                  'and if they have no skills and no housing they are '
                  'likely to offend again. Programmes that provide '
                  'education and work have been shown to reduce '
                  'reoffending, which protects the public too, but '
                  'later.',
                  'I think prison must do both, but the balance is '
                  'wrong in many countries. Longer sentences have been '
                  'shown to have little deterrent effect, while the '
                  'certainty of being caught has a large one. So I '
                  'would spend more on policing and on rehabilitation, '
                  'and less on simply increasing sentence length.',
                  ],
         gap65=[
                'It separates certainty from severity with the '
                'evidence for each, which is the distinction the whole '
                'question turns on.',
                'It names the three purposes a sentence serves and '
                'shows that they can be met in different proportions, '
                'rather than choosing between two.',
                'It explains why the cheap instrument is the one that '
                'gets used, which is why the imbalance persists.',
                ],
         criterion=[('Refusing the either-or and naming where it bites',
                     'Task Response'),
                    ('The opposing view in its best form',
                     'Task Response'),
                    ('A figure with its method attached',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'plan.',
         lines=18)],
   gram=dict(
    point='Purpose and competing aims in one sentence',
    explain=('Writing about aims that conflict needs structures that hold '
             'two purposes in one sentence and show which one loses.'),
    examples=['A sentence is asked to do three things that pull apart.',
              'It punishes visibly, protects briefly and leaves the '
              'person worse.',
              'Prison should be reserved for cases where protection is '
              'the purpose.',
              'What the first aim requires, the third is damaged by.'],
    task='Rewrite each pair so that both aims appear in one sentence.',
    items=[('Prison punishes. It also makes reoffending more likely.',
            'A short sentence punishes visibly while leaving the person '
            'more likely to offend again.'),
           ('Community orders help. They look weak.',
            'A community order addresses the causes of offending, although '
            'it is read by victims as a lighter response.'),
           ('Protection matters. So does rehabilitation.',
            'Prison protects the public for the duration of the sentence, '
            'which is not the same as reducing offending afterwards.'),
           ('Judges must punish and reduce crime.',
            'A judge is asked both to mark the seriousness of the offence '
            'and to pass the sentence least likely to produce another '
            'one.'),
           ('Short sentences are the problem.',
            'The conflict between the aims is sharpest in short sentences, '
            'which punish without protecting for long and raise '
            'reoffending.')]),
   vocab=[('rehabilitation', 'preparing an offender to live without '
           'crime'),
          ('reoffending', 'committing a further offence after a '
           'sentence'),
          ('prison term', 'a period spent in prison'),
          ('community sentence', 'a punishment served outside prison'),
          ('rented home', 'a home lived in under a tenancy'),
          ('case assignment', 'how cases are given to judges'),
          ('putting right', 'repairing the harm an offence caused'),
          ('pull apart', 'to work against each other')],
   expr=[('a sentence is asked to do three things that pull apart',
          'the sentence this cycle is built on'),
         ('it punishes visibly, protects briefly and leaves the person '
          'worse', 'summarises an evidence finding in one line'),
         ('long enough to cost a job and too short for a programme to '
          'begin', 'gives a mechanism in one clause'),
         ('I cannot calibrate on cases whose endings I never learn',
          'names a gap in professional feedback')],
   trans=['admittedly', 'and yet', 'on balance', 'in the end'],
  ),
 ],
 technique=dict(
  title='Grouping lines that behave alike, in a four-series graph',
  body=('A four-line graph is the Task 1 that most often produces a band 5 '
        'answer from a candidate who understood the chart perfectly. The '
        'reason is always the same: four lines described one at a time, in '
        'the order of the legend, with equal space each. That is a list, '
        'and the mark scheme asks you to select. Do this instead, before '
        'you write a word. Look at the four lines and sort them into '
        'groups by shape, not by size: which ones fall, which rise, which '
        'stay flat. Almost every four-series graph in this exam is built '
        'so that two or three behave alike and one does not — that is what '
        'makes it worth setting. Then write one paragraph for the group, '
        'one for the exception, and give the exception more space, because '
        'it is doing more. Your Overall statement names the grouping '
        'rather than the highest line. And look for the crossing: lines '
        'that behave differently usually change order somewhere, and the '
        'year that happens is the single most quotable fact in the '
        'chart.'),
  panel=[('Sort by shape, not by size',
          'Falling, rising, flat. The legend order is not the answer '
          'order.'),
         ('Group, then except',
          'One paragraph for the lines that match, one for the line that '
          'does not.'),
         ('More space to the exception',
          'It is doing more. Equal space for four lines is what band 5 '
          'looks like.'),
         ('Find the crossing',
          'Where two lines change order, and the year it happened. One '
          'sentence, high value.')],
  task='Describe the cycle 3 graph in 150 words using one paragraph for '
       'the group and one for the exception.',
  qs=['Which lines did you group, and on what basis?',
      'Which line was the exception?',
      'Did the exception get the most space?',
      'What year did the crossing happen?',
      'Does your Overall statement name the grouping or the biggest '
      'line?']),
 outlining=dict(
  title='From passage to outline, then judge the plan',
  body=('This unit\'s outlining exercise runs backwards, which is the '
        'fastest way to learn what a good plan looks like. Take the '
        'academic passage in cycle 4 and write the outline the author must '
        'have had: the thesis in one sentence, two or three body headings, '
        'two supports under each. It takes four minutes and it teaches '
        'more than writing an outline from nothing, because you can see '
        'what the finished thing was built from. Then judge your '
        'reconstruction against the six tests. Does each heading make a '
        'claim? Could each fill a paragraph? Is any pair really the same '
        'idea? Is one heading much bigger than the others? Does each '
        'support actually support its heading rather than the thesis in '
        'general? And does the thesis answer the question, rather than '
        'announcing the topic? A plan that passes all six is rarer than it '
        'sounds, and the passage you are copying from will usually fail '
        'one of them, which is the most useful thing you will learn '
        'today.'),
  frame=('Sentences should not be lengthened as a way of preventing '
         'crime, because the evidence shows detection rather than '
         'severity is what deters, although there is a separate and '
         'narrower argument for imprisonment that is worth keeping '
         'distinct',
         [('Lengthening sentences does not deter',
           ['redeploying officers cuts offences within weeks',
            'increasing a sentence produces no measurable change']),
          ('There is a different argument for imprisonment',
           ['offences are prevented during the time inside',
            'that is an argument about removal, not about deterrence'])]),
  task='Reconstruct the outline of the cycle 4 passage, then run the six '
       'tests on it.',
  qs=['What was the author’s thesis, in one sentence?',
      'How many body headings did the passage actually have?',
      'Which of the six tests does your reconstruction fail?',
      'Did any two headings turn out to be one idea?',
      'Is the passage better or worse than the plan you reconstructed?'],
  answers=['it is usually in the first or the last paragraph',
           'three or four is normal for a passage of this length',
           'almost every reconstruction fails the equal-weight test',
           'if so, the passage probably repeats itself somewhere',
           'published prose fails these tests more often than students '
           'expect']),
 candos=['I can report a crime and ask for an update on a case',
         'I can group four lines on a graph by how they behave',
         'I can explain why recorded crime and real crime differ',
         'I can say what deters and what merely punishes',
         'I can hold two conflicting aims in one sentence'],
 tip=('On a four-line graph, sort the lines by shape before you write. '
      'Two or three will behave alike and one will not, and that single '
      'sorting decision is the difference between a list and a '
      'description.'),
)
