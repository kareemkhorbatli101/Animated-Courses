# -*- coding: utf-8 -*-
"""Unit 40 - Technology and Autonomy. IELTS Volume 4, band 6.5."""

_SCORER = dict(kind='device', title='How an automated decision is produced',
               sub='the components of a scoring system and the path through '
                   'them',
               parts=[('in', 0.02, 0.02, 0.24, 0.17, 'Applicant data'),
                      ('hist', 0.02, 0.29, 0.24, 0.17, 'Historical records'),
                      ('mod', 0.38, 0.15, 0.24, 0.17, 'Model and weights'),
                      ('sc', 0.74, 0.02, 0.24, 0.17, 'Score'),
                      ('th', 0.74, 0.29, 0.24, 0.17, 'Threshold'),
                      ('rev', 0.02, 0.56, 0.24, 0.17, 'Human review'),
                      ('dec', 0.38, 0.56, 0.24, 0.17, 'Decision'),
                      ('out', 0.38, 0.83, 0.24, 0.17, 'Outcome notified')],
               flows=[('in', 'mod', 'current case'),
                      ('hist', 'mod', 'training'),
                      ('mod', 'sc', ''),
                      ('sc', 'th', 'compared'),
                      ('th', 'dec', ''),
                      ('dec', 'rev', 'if requested'),
                      ('rev', 'out', ''),
                      ('dec', 'out', 'if not')])

UNIT = dict(
 n=40, vol=4, level='B2', band='6.5',
 theme='Technology and Autonomy',
 opener=(
   'The last unit of this volume. It begins with a letter refusing you '
   'something, signed by nobody, and ends with the question of what an '
   'auditor can establish about a system whose owner will not show it to '
   'them. Between those, the unit takes apart a scoring system component by '
   'component and proves — proves, in the mathematical sense — that three '
   'reasonable definitions of fairness cannot all hold at once.'),

 cycles=[
  dict(
   sub='Automated decisions',
   step=1,
   read=[
    dict(heading='When a decision about you is automated',
         kind='Rights notice', task='Note completion, matching features and multiple choice',
         band='gt_short', qtype='Questions 1-5',
         skill=('A right with three conditions is a right with three '
                'questions',
                ['Where a notice says a right applies only if A, B and C, '
                 'every one of those conditions is a question waiting to be '
                 'asked.',
                 'Number them as you read. The paragraph that lists '
                 'exceptions is worth more marks than the paragraph that '
                 'grants the right.']),
         paras=[
          'You have the right not to be subject to a decision based solely on '
          'automated processing which produces legal effects concerning you '
          'or similarly significantly affects you. The word solely is doing '
          'considerable work here: a decision reviewed meaningfully by a '
          'person before it takes effect is not solely automated.',
          'The right does not apply where the decision is necessary for '
          'entering into a contract with you, where it is authorised by law, '
          'or where you have given explicit consent. In the first and third '
          'of these cases you retain the right to obtain human intervention, '
          'to express your point of view and to contest the decision.',
          'You are entitled to meaningful information about the logic '
          'involved. This does not extend to the source code or to the full '
          'model, but it must be sufficient for you to understand which '
          'factors were taken into account and how they were weighted in '
          'broad terms.',
          'A request for human review must be answered within one month, '
          'extendable by two further months where the request is complex. The '
          'reviewer must have the authority and the competence to change the '
          'decision; a review by somebody who can only confirm it does not '
          'satisfy the requirement, and this is where most complaints '
          'succeed.'],
         items=[
          ('The right applies to decisions based ____________ on automated '
           'processing.', None, 'solely',
           'Paragraph 1, where a meaningful human review takes a decision '
           'outside it.'),
          ('In which case is there no retained right to contest?',
           ['Entering a contract', 'Authorised by law', 'Explicit consent', 'All three retain it'],
           1,
           'Paragraph 2 names the first and third as retaining the '
           'right, not the second.',
           {0: 'Paragraph 2 says the contract case retains the right.', 2: 'Paragraph 2 says explicit consent retains the right.', 3: 'Only two of the three retain it.'}),
          ('Information about the logic does not extend to the source code '
           'or the full ____________.', None, 'model',
           'Paragraph 3, though it must show which factors counted and '
           'roughly how.'),
          ('A review request must be answered within ____________ month.',
           None, 'one',
           'Paragraph 4, extendable by two further months where complex.'),
          ('What does the writer say most complaints turn on?',
           ['Late replies', 'A reviewer without authority to change the decision', 'Missing information', 'Consent'],
           1,
           'Paragraph 4: a review by somebody who can only confirm '
           'does not satisfy the requirement.',
           {0: 'The one-month deadline is a separate requirement.', 2: 'Information about the logic is a different '
               'entitlement.', 3: 'Consent is one of the exceptions, not the usual '
               'complaint.'})]),
    dict(heading='Asking for a human review',
         kind='Procedure notice', task='Note completion',
         band='gt_short', qtype='Questions 6-9',
         paras=[
          'Begin by requesting the information you are entitled to, in '
          'writing. Ask specifically which factors were taken into account, '
          'how they were weighted in general terms, and whether any human '
          'being considered your case before the decision was issued. That '
          'last question is the important one and it is rarely volunteered.',
          'On receiving the reply, identify the factual errors. Most '
          'successful challenges turn on data that is simply wrong: an '
          'address you left four years ago, an account recorded as yours that '
          'is not, an income figure from the wrong year. Correct these first, '
          'in writing, with evidence.',
          'Then request human review, stating the grounds. Grounds that '
          'succeed are of three kinds: the data were wrong, a relevant '
          'circumstance was not capable of being entered, or the decision was '
          'not in fact reviewed by anybody with power to change it. A general '
          'statement that the decision is unfair is not a ground.',
          'If the review upholds the decision, you may complain to the '
          'supervisory authority, and separately you may have a route through '
          'the courts. Keep every reply: the chronology of what you asked and '
          'when you were answered is frequently more useful than the content '
          'of the replies.'],
         items=[
          ('Ask whether any ____________ considered your case before the '
           'decision.', None, 'human being',
           'Paragraph 1, which calls this the important question and says it '
           'is rarely volunteered.'),
          ('Most successful challenges turn on data that is ____________.',
           None, 'wrong',
           'Paragraph 2, with examples including an old address and the wrong '
           'year’s income.'),
          ('A general statement that the decision is unfair is not a '
           '____________.', None, 'ground',
           'Paragraph 3, which lists the three kinds of ground that '
           'succeed.'),
          ('Keep every reply, because the ____________ is often more useful '
           'than the content.', None, 'chronology',
           'Paragraph 4, alongside the routes to the supervisory authority '
           'and the courts.')])],
   listen=[
    dict(heading='Requesting a human review', part='Part 1',
         task='A call to a complaints line · note completion', band='l1',
         qtype='Questions 10-14',
         script=[
          ('Adviser', 'Customer resolutions, Nkechi speaking.'),
          ('Caller', 'I have had a letter refusing my application and it does '
           'not say who decided it.'),
          ('Adviser', 'Let me look. Can I take the reference from the top of '
           'the letter?'),
          ('Caller', 'It is A P eight, two four, zero six six.'),
          ('Adviser', 'A P eight, two four, zero six six. Thank you. Yes, '
           'that was an automated assessment.'),
          ('Caller', 'So nobody looked at it.'),
          ('Adviser', 'Not before the letter went out, no. You are entitled '
           'to ask for a human review and I can start that now if you '
           'want.'),
          ('Caller', 'I do. What do I need to say?'),
          ('Adviser', 'You need grounds, and I will be honest with you about '
           'what works, because people often give the wrong one. Saying the '
           'decision is unfair is not a ground. Saying a specific piece of '
           'information is wrong is.'),
          ('Caller', 'The income figure they used is from two years ago. I '
           'earn considerably more now.'),
          ('Adviser', 'That is exactly the right kind of ground. Send a '
           'recent payslip and the last two months of statements. Now, the '
           'timescale. We have one month to answer, and we can extend it by '
           'two if it is complex. I would expect three weeks for this.'),
          ('Caller', 'Do I need to put the request in writing as well?'),
          ('Adviser', 'I will log it now and I would send a short letter too, '
           'because the written date is the one that counts if this goes '
           'further. Mark it for the attention of the review team and quote '
           'the application reference.'),
          ('Caller', 'And if the review says the same thing?'),
          ('Adviser', 'Then you can take it to the supervisory authority. One '
           'piece of advice: keep every letter, including this call reference, '
           'which is four four one nine. The dates matter more than people '
           'expect.')],
         items=[
          ('Application reference: ____________', None, 'AP824066',
           'Spelled out by the caller and read back by the adviser.'),
          ('The decision was an ____________ assessment.', None, 'automated',
           'With no human involvement before the letter was sent.'),
          ('The caller’s ground is that the ____________ figure is out of '
           'date.', None, 'income',
           'From two years ago, which the adviser calls exactly the right '
           'kind of ground.'),
          ('The caller should send a recent payslip and ____________ months '
           'of statements.', None, 'two',
           'As evidence for the corrected figure.'),
          ('Call reference: ____________', None, '4419',
           'Which the adviser tells the caller to keep along with every '
           'letter.')]),
    dict(heading='A short talk: letting a machine choose', part='Part 2',
         task='A talk on automated decisions in public services · multiple choice', band='l2',
         qtype='Questions 15-18',
         script=[
          ('Speaker', 'I spent six years approving or refusing applications '
           'by hand and four years overseeing the system that replaced me, so '
           'I am going to try to be fair to both.'),
          ('Speaker', 'Start with what automation genuinely fixed, because it '
           'is substantial and it is rarely said. Human decisions in my old '
           'office were inconsistent in ways we could measure and could not '
           'defend. The same file given to two officers got different answers '
           'about a fifth of the time, and decisions made after four in the '
           'afternoon were measurably harsher than the same decisions made at '
           'ten in the morning.'),
          ('Speaker', 'The system does not do that. It gives the same answer '
           'to the same inputs on a Friday afternoon as on a Monday morning, '
           'and that consistency is a real gain for applicants, not a '
           'managerial convenience.'),
          ('Speaker', 'Now the losses, and there are two. The first is that '
           'the system is consistent about the wrong things as well as the '
           'right ones. A human officer applying a bad rule applies it '
           'unevenly, which means some people escape it. A system applies it '
           'to everybody, every time. Consistency converts a patchy injustice '
           'into a uniform one.'),
          ('Speaker', 'The second loss is the one that reaches me as '
           'complaints. An officer could hear a circumstance that no form has '
           'a field for. My mother had died that week; the business had lost '
           'its only customer; the address is wrong because I fled it. There '
           'is no box for any of that, and a system can only act on what has '
           'a box.'),
          ('Speaker', 'So my view, after ten years on both sides, is that '
           'the argument about whether machines should decide is the wrong '
           'argument. The question is what happens to the cases that do not '
           'fit, and we automated the deciding without building the route for '
           'those, because the deciding was the part that was expensive.')],
         items=[
          (
           'Two officers gave different answers to the same file a '
           '____________ of the time.', None, 'fifth',
           'And decisions after four in the afternoon were measurably '
           'harsher.'),
          (
           'The speaker says consistency converts a patchy injustice '
           'into a ____________ one.', None, 'uniform',
           'A human applying a bad rule applies it unevenly, so some '
           'people escape.'),
          (
           'The second loss concerns circumstances that have no '
           '____________ on the form.', None, 'box',
           'A system can only act on what has a box.'),
          ('What does she say the real question is?',
           ['Whether machines should decide', 'What happens to cases that do not fit', 'How much it costs', 'Who writes the rules'],
           1,
           'The deciding was automated without building the route for '
           'those.',
           {0: 'She calls that the wrong argument.', 2: 'Cost is why the deciding was automated, not the '
               'question.', 3: 'Who writes the rules is not the question she poses.'})])],
   speak=dict(
    part='Part 1', focus='Decisions made about you',
    intro=('Two or three sentences. Ordinary experience — a bank, a form, an '
           'application — is exactly what is wanted.'),
    qs=['Have you ever applied for something online?',
        'Do you prefer dealing with a person or a website?',
        'Is it important to know who made a decision about you?',
        'Do people in your country trust computer systems with important '
        'decisions?'],
    shape=[('answer', 'A person, if the thing is at all unusual.'),
           ('support', 'A website is faster when my case is ordinary.'),
           ('follow-up', 'But there is never anywhere to explain the thing '
            'that makes it not ordinary.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Challenging an automated decision',
         prompt=('An application of yours has been refused by an automated '
                 'system. Write a letter to the organisation. In your letter: '
                 'give the details of the application; explain why you '
                 'believe the decision is wrong; say what you would like them '
                 'to do. Write at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing about application AP824066, refused by letter dated 9 '
          'May. Your adviser confirmed by telephone on 14 May, call reference '
          '4419, that the assessment was automated and that no member of '
          'staff considered the application before the refusal was issued.',
          'I believe the decision is wrong because it relies on an income '
          'figure that is two years out of date. The letter gives my annual '
          'income as £19,400, which was correct for the year ending April '
          '2023. My current income is £31,200. I enclose my most recent '
          'payslip and two months of bank statements, which show the current '
          'figure.',
          'I am requesting a human review of the decision on that ground, '
          'under the provisions concerning automated decisions. I should be '
          'grateful if you would confirm three things in your reply: that the '
          'corrected income figure has been entered; that the reviewer has authority to change the decision, as against only to confirm it; '
          'and the date by which I may expect an answer.',
          'Yours faithfully,',
          'D. Abara-Lindgren'],
         notes=[
          'The second bullet gives one ground, stated as a correctable fact, '
          'with the wrong figure and the right figure side by side. That is '
          'the kind of ground the unit’s reading says succeeds, and the '
          'letter is testing whether you noticed.',
          'The third request — that the reviewer has authority to change the '
          'decision — is the sharpest sentence in the letter. It comes from '
          'the passage, it is the thing most reviews fail on, and asking for '
          'it in advance makes a tick-box review harder to perform.',
          'Notice the evidence trail: letter date, call date, call reference. '
          'Three facts, nine words, and the letter can no longer be answered '
          'with we have no record of your contact.'],
         criterion=[('A ground stated as a correctable fact',
                     'Task Achievement'),
                    ('Asking in advance for what reviews usually fail on',
                     'Task Response'),
                    ('A compact evidence trail', 'Coherence and Cohesion')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Setting out a correction precisely',
    explain=('A correction is persuasive when the wrong value and the right '
             'value appear together with the reason for the difference. These '
             'patterns do it in one or two sentences.'),
    examples=['The letter gives my annual income as £19,400, which was '
              'correct for the year ending April 2023.',
              'My current income is £31,200, as the enclosed payslip '
              'shows.',
              'The address held is one I left in 2021.',
              'The account recorded in my name was closed before the '
              'application was made.'],
    task='Write each correction with both values and the reason.',
    items=[('They have the wrong address.',
            'The address held is 14 Mill Row, which I left in March 2021; my '
            'current address is on this letter.'),
           ('My income is higher now.',
            'The figure used, £19,400, was correct two years ago; my current '
            'income is £31,200.'),
           ('That account is not mine.',
            'The account ending 4471 is recorded in my name but was closed by '
            'its holder in 2019.'),
           ('They used the wrong year.',
            'The assessment uses the 2023 tax year instead of the most '
            'recent one.'),
           ('I did pay that bill.',
            'The payment recorded as missed was made on 3 February, as the '
            'enclosed statement shows.')]),
   vocab=[('automated processing', 'a decision made by a system without a '
           'person'),
          ('legal effects', 'consequences recognised in law'),
          ('human intervention', 'a person stepping into an automated '
           'process'),
          ('contest', 'to formally challenge a decision'),
          ('supervisory authority', 'the regulator overseeing data rights'),
          ('grounds', 'the stated reasons for a challenge'),
          ('uphold', 'to confirm a decision on review'),
          ('meaningful review', 'a review by somebody able to change the '
           'outcome')],
   expr=[('I am writing about application', 'opens with the reference'),
         ('Your adviser confirmed by telephone on',
          'converts a call into evidence'),
         ('I should be grateful if you would confirm three things',
          'frames a list the reader must answer'),
         ('rather than only to confirm it',
          'closes a loophole in advance')],
   trans=['because', 'which', 'on that ground', 'rather than'],
  ),

  dict(
   sub='Letting a machine choose',
   step=2,
   read=[
    dict(heading='Four people on recommendations',
         kind='Four short texts', task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 19-24',
         paras=[
          'A  Mirembe: I have no objection to being recommended things and I '
          'have a strong objection to the pretence that it is for me. The '
          'system is not trying to find what I would most like. It is trying '
          'to find what will keep me here longest, and those two things '
          'overlap enough that the difference is hard to see from inside.',
          'B  Quillon: Honestly, it is better at choosing than I am. Left to '
          'myself I watch the same four things. The recommendations have '
          'given me perhaps a dozen writers I would never have found, and I '
          'think people who complain about this are defending a version of '
          'themselves that does not exist.',
          'C  Ndidi: What worries me is not the recommendation but the '
          'default. I can change any setting on that system and I never do, '
          'and neither does anybody. Whoever chooses the default is making '
          'the decision for ninety per cent of users, and nobody elected '
          'them or even knows their name.',
          'D  Fredrik: I turned all of it off two years ago and I want to be '
          'honest about the result, which is mixed. I read more '
          'deliberately and I read less. I have found nothing new in two '
          'years. I would still not switch it back on, but I no longer '
          'pretend the cost was zero.'],
         items=[
          (
           'Which person distinguishes what they want from what holds '
           'their attention?',
           ['Mirembe', 'Quillon', 'Ndidi', 'Fredrik'], 0,
           'The system optimises for time spent, not for preference.',
           {1: 'Quillon believes the criticism rests on a false '
               'picture of people.', 2: 'Ndidi says the power lies in the default setting.', 3: 'Fredrik reports a cost to their own decision.'}),
          ('Which person says the power lies in the default setting?',
           ['Mirembe', 'Quillon', 'Ndidi', 'Fredrik'], 2,
           'Whoever chooses it decides for ninety per cent of users.',
           {0: 'Mirembe distinguishes what they want from what holds '
               'their attention.', 1: 'Quillon believes the criticism rests on a false '
               'picture of people.', 3: 'Fredrik reports a cost to their own decision.'}),
          ('Which person reports a cost to their own decision?',
           ['Mirembe', 'Quillon', 'Ndidi', 'Fredrik'], 3,
           'He reads more deliberately and less, and has found nothing '
           'new.',
           {0: 'Mirembe distinguishes what they want from what holds '
               'their attention.', 1: 'Quillon believes the criticism rests on a false '
               'picture of people.', 2: 'Ndidi says the power lies in the default setting.'}),
          (
           'Which person believes the criticism rests on a false '
           'picture of people?',
           ['Mirembe', 'Quillon', 'Ndidi', 'Fredrik'], 1,
           'Defending a version of themselves that does not exist.',
           {0: 'Mirembe distinguishes what they want from what holds '
               'their attention.', 2: 'Ndidi says the power lies in the default setting.', 3: 'Fredrik reports a cost to their own decision.'}),
          ('Mirembe wants recommendation systems to be banned.',
           ['Yes', 'No', 'Not Given'], 2,
           'She objects to a pretence, and says nothing about banning '
           'anything.',
           {0: 'Yes would need a ban; she objects to a pretence '
               'instead.', 1: 'No would need her to defend the systems, which she '
               'does not.'}),
          ('Ndidi has changed the settings on the system she uses.',
           ['Yes', 'No', 'Not Given'], 1,
           'She says she can change any setting and never does.',
           {0: 'Yes would need a change; she says she never does.', 2: 'Not Given is wrong because she says what she does with '
               'the settings.'})])],
   listen=[
    dict(heading='Two designers disagree about defaults', part='Part 3',
         task='A product meeting · multiple choice', band='l3', qtype='Questions 25-29',
         script=[
          ('Ingrid', 'I want personalisation off by default and on by '
           'choice. I have wanted it for two years and I have never had a '
           'good answer.'),
          ('Casimiro', 'You have had an answer, you have not liked it. If we '
           'default it off, about four per cent turn it on, the product is '
           'worse for the other ninety-six, and they do not know why.'),
          ('Ingrid', 'Four per cent is the number that proves my point, not yours. If almost nobody moves from the default in either '
           'direction, then the default is the decision, and we are the '
           'people making it for everybody.'),
          ('Casimiro', 'Yes. That is true and it is unavoidable. There is no '
           'neutral default. Off is a choice, on is a choice, and a prompt '
           'asking people to choose is also a choice, and it is the one that '
           'produces the worst outcomes because people answer prompts to make '
           'them go away.'),
          ('Ingrid', 'I accept all of that. It does not tell us which choice '
           'to make. It only tells us we cannot avoid making one.'),
          ('Casimiro', 'Then make it on the evidence. People who have it on '
           'report higher satisfaction and stay longer.'),
          ('Ingrid', 'Stay longer is not satisfaction. We measure time spent '
           'because we can measure it, and then we talk as though we had '
           'measured whether people are glad afterwards, which we have never '
           'measured once.'),
          ('Casimiro', 'Our metrics deserve that and I do not '
           'have an answer to it.'),
          ('Ingrid', 'Here is a proposal, then. Default on, which you want. '
           'Plus a monthly one-line summary of what it has been doing, in the product itself, where people will see it. And a measure of whether people '
           'are glad a week later, which we build before the next '
           'release.'),
          ('Casimiro', 'A week later is an expensive measure to build. We '
           'would have to contact people who have already left.'),
          ('Ingrid', 'Which is exactly the population whose view we have '
           'never collected, and I notice that is an argument for building it.'),
          ('Casimiro', 'The summary will reduce engagement.'),
          ('Ingrid', 'Almost certainly. Say that out loud in the meeting '
           'rather than in this room and I will accept whatever we '
           'decide.')],
         items=[
          (
           'If personalisation is off by default, ____________ per '
           'cent turn it on.', None, 'four',
           'Which Ingrid says proves her point, not his.'),
          ('Casimiro concedes that there is no ____________ default.',
           None, 'neutral', 'Off, on and a prompt are all choices.'),
          (
           'Ingrid objects that time spent is measured because it '
           '____________ be measured.', None, 'can',
           'And then discussed as though satisfaction had been '
           'measured.'),
          ('What does Casimiro say he has no answer to?',
           ['The default question', 'The criticism of their metrics', 'The summary proposal', 'The release date'],
           1, 'He concedes that their metrics deserve it.',
           {0: 'He answers the default question at length.', 2: 'He answers the summary proposal with a cost objection.', 3: 'The release date is not what he concedes.'}),
          ('What does Ingrid ask him to do in the larger meeting?',
           ['Support her proposal', 'Say out loud that the summary will reduce engagement', 'Delay the release', 'Present the data'],
           1, 'And she will then accept whatever is decided.',
           {0: 'Her proposal is what she is already putting to him.', 2: 'No delay to the release is requested.', 3: 'She asks for a statement, not a presentation.'})])],
   speak=dict(
    part='Part 1 into Part 2', focus='Choosing',
    longturn=[('The choice I want to describe is which route I take home, '
               'which used to be a decision and is now made for me by a map on '
               'my phone.'),
              ('What the technology did was quite specific. It knows where the '
               'traffic is, it recalculates while I am driving, and it will '
               'send me down streets I had never used in fifteen years of '
               'making that journey.'),
              ('Whether it helped depends on which journey you ask about. '
               'Measured in minutes it helped, and the saving is real: four or '
               'five minutes most days and twenty on a bad one. Measured in '
               'anything else I am less sure. I no longer know the city the '
               'way I did. If the phone is flat I am slower than I was before '
               'I had it, which is a strange thing to be able to say.'),
              ('How I feel about it now is less comfortable than I would have '
               'said two years ago. The part that concerns me is not the '
               'dependence, which I accept, but that the route is chosen for a '
               'reason I cannot see. It sends several thousand of us down a '
               'residential street to save four minutes, and nobody who lives '
               'on that street was consulted, and no planner decided it. A '
               'choice that used to be mine and visible has become somebody\'s '
               'optimisation, and it is not even clear whose.')],
    intro=('Short answers, then the long turn. Bullets in order, equal '
           'weight, and developed instead of merely listed.'),
    cue=('Describe a choice that was made easier or harder for you by '
         'technology.',
         ['what the choice was', 'what the technology did',
          'whether it helped',
          'and explain how you feel about it now']),
    qs=['Do you use apps that suggest things to you?',
        'Is having many choices always a good thing?',
        'Now look at the card. You have one minute to make notes.',
        'Should people be able to turn these features off?'],
    shape=[('answer', 'Choosing something to read in the evening.'),
           ('support', 'The app puts five things in front of me instead of '
            'forty thousand.'),
           ('follow-up', 'Which genuinely helps, because forty thousand is '
            'not a choice.'),
           ('support', 'The difficulty is that the five are chosen for '
            'me.'),
           ('follow-up', 'And I have no way of knowing what was in the other '
            'thirty-nine thousand nine hundred and ninety-five.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Do recommendation systems narrow what people see?',
         prompt=('Some people believe that systems recommending films, music '
                 'and news narrow what people experience. Others argue they '
                 'widen it. Discuss both views and give your own opinion. '
                 'Write at least 250 words.'),
         model=[
          'The question is usually posed as though the alternative to being '
          'recommended things were choosing freely from everything available. '
          'It is not. Nobody chooses from forty thousand items, and the real '
          'comparison is between one filter and another — an algorithm, a '
          'friend, a critic, a shop’s front table, or your own habits, which '
          'are the narrowest filter of the four.',
          'Those who argue that recommendation widens experience have the '
          'better of the empirical argument, at least at the level of the '
          'individual. Left alone, most people return to what they already '
          'know; a system that has seen what similar people enjoyed will '
          'reliably produce items the user would never have reached. The '
          'range of things an ordinary listener now hears in a year is wider '
          'than it was when the filter was a local shop with limited shelf '
          'space.',
          'The case that it narrows is better understood as a claim about the objective, where the mechanism is sound enough. These systems are '
          'built to maximise time spent, because time spent is what can be '
          'measured, and what holds attention is not always what a person '
          'would endorse afterwards. A filter optimising for engagement will '
          'drift towards the familiar and the reactive, because those hold '
          'attention most reliably.',
          'My own position is that the important question is not breadth but '
          'who sets the default, and this is where both views understate the '
          'problem. The evidence is consistent across products: almost nobody '
          'changes a setting. Four per cent is a typical figure. Whoever '
          'chooses the default is therefore making the decision for almost '
          'everybody, and that is a transfer of a choice, which is a different complaint from a narrowing of one.',
          'What follows is modest and specific. I would not ban these '
          'systems or require them to be off. I would require that what they '
          'optimise for is stated plainly, and that a user can see what has '
          'been filtered out, because the thing that makes a filter '
          'acceptable is not its width but the possibility of looking around '
          'it.'],
         notes=[
          'The opening rejects the implied comparison in the question. '
          'Checking what a question is comparing against is one of the fastest '
          'ways into a strong Task 2 introduction, and it takes two '
          'sentences.',
          'Paragraph 3 relocates the criticism: not the mechanism but the '
          'objective. Being precise about which part of a thing you are '
          'criticising is a 7.0 habit, and it also makes your concession in '
          'paragraph 2 safe.',
          'The conclusion deliberately declines the strong options — ban, '
          'require off — before giving the modest ones. Naming what you are '
          'not proposing makes what you are proposing sound considered.'],
         criterion=[('Questioning what the prompt compares against',
                     'Task Response'),
                    ('Criticising an objective, not a mechanism',
                     'Task Response'),
                    ('Declining the strong options before proposing the '
                     'modest ones', 'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Naming the real comparison',
    explain=('Many prompts smuggle in a comparison that will not survive '
             'inspection. Saying what the alternative actually is reframes '
             'the question and gives you a paragraph nobody else will '
             'write.'),
    examples=['The alternative is not choosing freely but choosing by a '
              'different filter.',
              'The comparison is between one filter and another.',
              'Compared with what? Not with perfect information.',
              'The relevant alternative is your own habits, which are '
              'narrower still.'],
    task='Name the real alternative in each case.',
    items=[('Recommendations narrow what people see.',
            'Narrower than what? Not than everything available, which nobody '
            'browses, but than some other filter.'),
           ('Online shopping reduces choice.',
            'The alternative is the stock of a nearby shop, which is '
            'smaller.'),
           ('Automated decisions are unfair.',
            'Less fair than what? Human decisions were measurably '
            'inconsistent.'),
           ('Social media makes people less informed.',
            'Less informed than readers of what, and than which '
            'readers?'),
           ('Machine translation is inaccurate.',
            'Inaccurate compared with a professional translator, or with the '
            'nothing most people would otherwise have?')]),
   vocab=[('default setting', 'what applies unless somebody changes it'),
          ('personalisation', 'tailoring content to an individual'),
          ('engagement', 'how long and how often people use something'),
          ('optimise', 'to design something to maximise a chosen measure'),
          ('metric', 'the quantity an organisation measures'),
          ('filter', 'anything that reduces what reaches you'),
          ('endorse', 'to approve of on reflection'),
          ('opt in', 'to choose to take part')],
   expr=[('You have had an answer, you have not liked it',
          'distinguishes disagreement from absence of a reply'),
         ('There is no neutral default', 'states an unavoidable choice'),
         ('Stay longer is not satisfaction',
          'separates a measure from the thing it stands for'),
         ('Say that out loud in the meeting rather than in this room',
          'asks for a concession to be made public')],
   trans=['then', 'almost certainly', 'what follows', 'because'],
  ),

  dict(
   sub='How a system decides',
   step=3,
   read=[
    dict(heading='Inputs, weights and the output',
         kind='Process article',
         task='Diagram labelling, matching information and multiple choice',
         band='gt_work', qtype='Questions 30-35',
         figure=_SCORER,
         paras=[
          'The diagram shows the components of an automated decision system '
          'and the path a case takes through them. Two things feed the model: '
          'the applicant data for the case being decided, and the historical '
          'records from which the weights were learned. The second of these '
          'is the one applicants never see and the one that determines most '
          'of what happens.',
          'The model combines the inputs according to its weights and '
          'produces a score. The score is a number and is not yet a decision. '
          'It becomes one only when compared with a threshold, which is set '
          'separately, usually by the organisation, where everybody assumes its authors set it, and which can be moved without changing the model '
          'at all.',
          'This separation is the most commonly misunderstood part of the '
          'diagram. A complaint that a system is too harsh is frequently a complaint about the threshold, where the model is blamed, and the two '
          'are owned by different people and changed by different processes. '
          'A system can be made more generous overnight without anybody '
          'retraining anything.',
          'The decision then goes to one of two places. If no review is '
          'requested it is notified directly as the outcome. If review is '
          'requested, it passes to a human reviewer, and the question of '
          'whether that reviewer may change the decision or only confirm it '
          'is decided by policy, which the diagram cannot show.',
          'The historical records deserve a sentence of their own. The model '
          'learned from decisions made in the past, so it reproduces whatever '
          'pattern those decisions contained. If the past decisions were '
          'inconsistent, the model learns the average; if they were '
          'systematically skewed, the model learns the skew and applies it '
          'with perfect consistency to everybody.'],
         items=[
          ('The two inputs to the model are applicant data and ____________ '
           'records.', None, 'historical',
           'Paragraph 1: the second is the one applicants never see.'),
          ('The model produces a ____________, which is not yet a decision.',
           None, 'score',
           'Paragraph 2, which becomes a decision only on comparison.'),
          ('The score becomes a decision when compared with a '
           '____________.', None, 'threshold',
           'Paragraph 2, set separately and movable without retraining.'),
          ('If no review is requested, the decision is notified as the '
           '____________.', None, 'outcome',
           'Paragraph 4, which is the direct path on the diagram.'),
          (
           'Which paragraph explains that a complaint about harshness '
           'may concern the threshold?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1,
           'Model and threshold are owned by different people and '
           'changed by different processes.',
           {0: 'Paragraph 2 describes the score and the threshold.', 2: 'Paragraph 4 describes where the decision goes.', 3: 'Paragraph 5 is about the historical records.'}),
          (
           'What does the writer say a model learns from skewed past '
           'decisions?',
           ['Nothing', 'The average', 'The skew', 'A corrected pattern'],
           2,
           'Paragraph 5: and applies it with perfect consistency to '
           'everybody.',
           {0: 'A skew is learned, not ignored.', 1: 'The average is what inconsistency produces.', 3: 'Nothing in the model corrects the past pattern.'})])],
   listen=[
    dict(heading='An engineer on a scoring system', part='Part 4',
         task='A talk on how a decision is produced · matching and multiple choice', band='l4',
         qtype='Questions 36-41',
         figure=_SCORER,
         script=[
          ('Engineer', 'I build these systems and I am going to walk you '
           'through one honestly, including the parts my industry prefers to '
           'leave vague.'),
          ('Engineer', 'Two things go in. The case in front of us, which '
           'everybody knows about, and the historical records the weights '
           'were learned from, which almost no applicant has ever seen. The '
           'second matters more. We did not write the rules; we showed a '
           'program several million past decisions and it inferred them.'),
          ('Engineer', 'That has a consequence people find uncomfortable and '
           'which I want stated plainly. The system reproduces the pattern in '
           'the past decisions. If those were inconsistent, it learns the '
           'average of them. If they were skewed in some direction, it learns '
           'the skew, and then applies it to every single case without the '
           'variation that used to let some people slip through.'),
          ('Engineer', 'Out of the model comes a score. A number. It is not '
           'a decision and I want to insist on that, because the next box is '
           'where most of the public argument should be happening and '
           'never is.'),
          ('Engineer', 'The threshold. The score is compared with a cut-off, '
           'and the cut-off is set by the organisation, not by us. It can be '
           'moved on a Tuesday afternoon by somebody in finance with no '
           'retraining, no new data and no technical work of any kind. When '
           'people say the algorithm has become harsher, nine times in ten '
           'the algorithm has not changed and the threshold has.'),
          ('Engineer', 'Then the decision goes out, or it goes to a human '
           'reviewer if one is requested. And here is the part I would change '
           'if I could change one thing. Whether that reviewer is permitted '
           'to overturn us, or only to check that we ran correctly, is a '
           'policy setting in a document, not a property of the system. In '
           'most deployments I have seen it is the latter, and the applicant '
           'is told they have had a human review.'),
          ('Engineer', 'One more thing about the historical records, since '
           'people ask. We cannot simply remove the protected attribute and '
           'declare the problem solved. Postcode, employer and the age of a '
           'bank account between them reconstruct most of what you deleted, '
           'and a model will find that reconstruction without being told to, '
           'because it is useful.'),
          ('Engineer', 'So if you take away one slide, take this. Ask which '
           'box the thing you are angry about lives in. Model, threshold or '
           'review policy. They are owned by three different people and '
           'changed by three different processes, and almost every public '
           'argument about algorithms is aimed at the wrong one.')],
         items=[
          ('Which input does the engineer say matters more?',
           ['The applicant data', 'The historical records', 'The threshold', 'The reviewer'],
           1,
           'Almost no applicant has seen it, and the weights were '
           'learned from it.',
           {0: 'The applicant data is what everybody knows about.', 2: 'The threshold is set later, outside the model.', 3: 'The reviewer comes after the decision.'}),
          (
           'A system learns the ____________ in past decisions and '
           'applies it consistently.', None, 'skew',
           'Without the variation that used to let some people slip '
           'through.'),
          ('He insists that the score is not a ____________.', None,
           'decision', 'It becomes a decision only at the next box.'),
          ('Who sets the threshold?',
           ['The engineers', 'The organisation', 'The regulator', 'The reviewer'],
           1,
           'And it can be moved with no retraining or technical work.',
           {0: 'He says explicitly that the engineers do not set it.', 2: 'No regulator sets the cut-off in his account.', 3: 'The reviewer comes after the threshold has been '
               'applied.'}),
          (
           'When people say the algorithm has become harsher, the '
           '____________ has usually changed instead.', None,
           'threshold', 'Nine times in ten, by his account.'),
          ('What does he say is decided by a policy document?',
           ['The weights', 'The score', 'Whether a reviewer may overturn the decision', 'The input data'],
           2,
           'In most deployments the reviewer may only check that the '
           'system ran correctly.',
           {0: 'The weights are learned from the historical records.', 1: 'The score comes out of the model itself.', 3: 'The input data is supplied by the case and the '
               'records.'})])],
   speak=dict(
    part='Part 3', focus='Explaining a decision',
    intro=('Four or five sentences. Try to use the model-threshold-policy '
           'distinction at least once.'),
    qs=['Should organisations have to explain how a decision was made?',
        'How much explanation is enough?',
        'Who should be responsible when an automated decision is wrong?',
        'Would you trust a decision you could not have explained to you?'],
    shape=[('answer', 'Yes, though explain covers three different things '
            'here.'),
           ('support', 'There is the model, the cut-off it is compared '
            'with, and who may overturn it.'),
           ('follow-up', 'Most people asking for an explanation want the '
            'second and are given the first.'),
           ('support', 'The cut-off is also the part that changes most '
            'often.'),
           ('follow-up', 'So publishing it would answer more complaints than '
            'publishing the code.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='The components of an automated decision system',
         prompt=('The diagram below shows how an automated decision is '
                 'produced. Summarise the information by selecting and '
                 'reporting the main features. Write at least 150 words.'),
         figure=_SCORER,
         model=[
          'The diagram shows the components of an automated decision system '
          'and the route a case takes through them. Overall, two separate '
          'inputs feed a central model whose output is converted into a '
          'decision only by comparison with a threshold, after which the '
          'case follows one of two paths depending on whether a review is '
          'requested.',
          'Taking the components first, there are eight in total. On the left '
          'are the two inputs, applicant data and historical records, '
          'together with the human review stage. In the centre lie the model '
          'and its weights and, below them, the decision itself. On the right '
          'are the score, the threshold against which it is measured, and the '
          'outcome as notified.',
          'Turning to the movement between them, the applicant data for the '
          'current case and the historical records used for training both '
          'enter the model. The model produces a score, which is then '
          'compared with the threshold, and that comparison yields the '
          'decision.',
          'At this point the path divides. Where a review has been requested, '
          'the decision passes to human review before the outcome is '
          'notified; where none has been requested, it proceeds directly to '
          'notification. The outcome is therefore the single end point of '
          'both routes.'],
         notes=[
          'A device diagram is described in two movements: the apparatus '
          'statically, then its operation dynamically. That is why paragraph '
          '2 lists what is there and paragraph 3 says what moves. Candidates '
          'who interleave the two produce an answer that is impossible to '
          'follow.',
          'The static paragraph is organised spatially — left, centre, right '
          '— which gives the reader a map before anything starts moving. Any '
          'consistent spatial order works; having none does not.',
          'The branch is reported as a branch, with both arms followed to '
          'the same end point. A process answer that follows one arm and '
          'forgets the other is the most frequent coverage failure on '
          'diagrams of this kind.'],
         criterion=[('Apparatus first, operation second',
                     'Coherence and Cohesion'),
                    ('A consistent spatial order in the static paragraph',
                     'Coherence and Cohesion'),
                    ('Following both arms of the branch to the end point',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing a branching process',
    fix=dict(
     text=('The application is received and then it checks against three '
           'criteria. If all three are met, it is approved automatically. If '
           'one is not met, the case is refer to an officer. The officer, who '
           'sees the same three scores, can approve it or reject it, and the '
           'applicant is informed either way. No reason is given when a case '
           'is rejected, which the chart does not explain.'),
     faults=[('then it checks against three criteria',
              'then it is checked against three criteria',
              'The application does not check. The passive is it is checked.'),
             ('the case is refer to an officer',
              'the case is referred to an officer',
              'The passive takes the past participle: is referred.'),
             ('which the chart does not explain',
              'a feature the diagram does not explain',
              ('Which has no clear antecedent, so the reader cannot tell what '
               'is unexplained; and the source here is a diagram, not a chart.'))]),
    explain=('A diagram with a fork needs language that follows both arms '
             'and rejoins them. Without it, an answer silently drops half the '
             'diagram, which costs a band on Task Achievement.'),
    examples=['At this point the path divides.',
              'Where a review has been requested, the decision passes to a '
              'reviewer.',
              'Where none has been requested, it proceeds directly to '
              'notification.',
              'The outcome is the single end point of both routes.'],
    task='Describe each branch in a single sentence covering both arms.',
    items=[('Review requested: human review. Not requested: straight to '
            'outcome.',
            'Where a review is requested the decision passes to a human '
            'reviewer; otherwise it goes directly to the outcome.'),
           ('Above threshold: approved. Below: refused.',
            'Scores above the threshold result in approval, while those below '
            'it are refused.'),
           ('Complete application: assessed. Incomplete: returned.',
            'Complete applications proceed to assessment, whereas incomplete '
            'ones are returned to the applicant.'),
           ('Eligible: continues. Not eligible: ends.',
            'Eligible cases continue through the process; ineligible ones end '
            'at this stage.'),
           ('Both routes end at notification.',
            'Both paths converge at the point of notification, which is the '
            'single end point of the process.')]),
   vocab=[('weights', 'the importance a model gives to each input'),
          ('score', 'the number a model produces before any decision'),
          ('training data', 'the past records a model learns from'),
          ('skew', 'a systematic lean in one direction'),
          ('retrain', 'to build a model again from newer data'),
          ('cut-off', 'the value dividing one outcome from another'),
          ('end point', 'where a process finishes'),
          ('branch', 'a point where a process divides')],
   expr=[('is not yet a decision', 'separates an output from its '
          'consequence'),
         ('owned by different people and changed by different processes',
          'explains why two parts must be distinguished'),
         ('ask which box the thing you are angry about lives in',
          'directs a complaint to the right component'),
         ('a policy setting in a document, not a property of the system',
          'locates a constraint outside the technology')],
   trans=['taking the components first', 'turning to', 'at this point',
          'therefore'],
  ),

  dict(
   sub='Why fairness cannot be fully specified',
   step=4,
   read=[
    dict(heading='Three definitions that cannot all hold',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 42-48',
         paras=[
          'Demands that an automated system be fair are usually made as '
          'though fairness were a single property that a sufficiently careful '
          'engineer could build in. The more uncomfortable position, '
          'established mathematically rather than argued politically, is that '
          'several reasonable definitions of fairness are mutually '
          'incompatible, so that a system satisfying one necessarily violates '
          'the others.',
          'Consider a system that scores applicants and a protected '
          'characteristic such as age or sex. The first definition is '
          'calibration: among everybody who receives a score of seventy, the '
          'proportion who turn out to repay should be the same regardless of '
          'group. This is what it means for a score to mean the same thing '
          'for everybody, and it is the property most people assume is what '
          'fairness means.',
          'The second is balance for those who would have succeeded: among '
          'applicants who would in fact have repaid, the average score should '
          'be the same across groups. If one group’s good applicants score '
          'systematically lower, they are refused more often despite '
          'identical outcomes, which is unfair in a sense anybody would '
          'recognise.',
          'The third is the mirror image: among applicants who would in fact '
          'have defaulted, the average score should also be the same across '
          'groups. One group’s poor applicants scoring systematically higher '
          'means they are approved more often and then suffer the '
          'consequences, which is a harm dressed as a benefit.',
          'Each of these is defensible and each corresponds to a complaint '
          'somebody could reasonably make. The result, proved in 2016 and '
          'robust to every attempt to escape it, is that a system can satisfy '
          'all three only if the groups have identical underlying rates or '
          'the system is a perfect predictor. Neither condition ever holds in '
          'practice.',
          'The conclusion is not that fairness is meaningless or that we '
          'should abandon the attempt. It is that choosing a fairness '
          'criterion is a choice about which harm to accept, and that this '
          'choice is political, not technical. An engineer who selects '
          'one has made a decision about distribution that nobody elected '
          'them to make, usually without noticing that the decision was '
          'available.',
          'It is worth being concrete about what choosing looks like in '
          'practice, because the word suggests a deliberation that rarely '
          'occurs. Nobody writes we select calibration and accept the '
          'resulting imbalance. The criterion is fixed implicitly, by which '
          'error the training objective penalises, and that objective is '
          'typically inherited from an earlier project or from whatever the '
          'library makes convenient. The distributive decision is real and '
          'is made by default.',
          'Nor does removing the protected characteristic from the inputs '
          'escape the result, which is the first remedy everybody proposes. '
          'Postcode, occupation, the age of an account and a dozen other '
          'variables jointly reconstruct the characteristic well enough for a '
          'model to use it without ever seeing it. Deleting the column '
          'removes the ability to measure the disparity while leaving the disparity in place, which is worse than doing nothing.',
          'This reframes what transparency should require. Publishing source '
          'code reveals which criterion was implemented only to somebody able '
          'to read it and willing to spend a week. Publishing the criterion '
          'itself, in a sentence, tells everybody which harm the organisation '
          'chose to bear and which it chose to impose, and that sentence is '
          'the thing a public can actually argue about.',
          'There is a final observation that makes the problem harder, '
          'not easier: the impossibility concerns groups that have '
          'been defined. Any real population can be divided in many '
          'ways, and a system calibrated across one division will '
          'generally fail calibration across another that nobody '
          'thought to check. There is no finite list of groups whose '
          'fairness can be certified, which means that fairness, in '
          'the sense the public wants, is not a property a system can '
          'be proved to have.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['A score that means the same for everyone', 'Equal treatment of those who would succeed', 'The impossibility result', 'What transparency should require'],
           0,
           'Calibration: the same proportion repay at a given score in '
           'every group.',
           {1: 'Balance for those who would succeed is paragraph 3.', 2: 'The impossibility result is the heading for paragraph '
               '5.', 3: 'What transparency should require is paragraph 9.'}),
          ('Choose the best heading for paragraph 5.',
           ['Equal treatment of those who would fail', 'The impossibility result', 'A political choice', 'Groups that were never defined'],
           1,
           'All three hold only with identical underlying rates or a '
           'perfect predictor.',
           {0: 'Balance for those who would fail is paragraph 4.', 2: 'The political choice is paragraphs 6 and 7.', 3: 'Groups that were never defined is the heading for '
               'paragraph 8.'}),
          ('Choose the best heading for paragraph 8.',
           ['A political choice', 'What transparency should require', 'Groups that were never defined', 'The impossibility result'],
           2, 'No finite list of groups can be certified.',
           {0: 'The political choice is paragraphs 6 and 7.', 1: 'What transparency should require is paragraph 9.', 3: 'The impossibility result is the heading for paragraph '
               '5.'}),
          ('The writer believes fairness is a meaningless idea.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 6 states explicitly that this is not the '
           'conclusion.',
           {0: 'Yes would need meaninglessness; paragraph 6 denies '
               'that conclusion.', 2: 'Not Given is wrong because the writer says what the '
               'impossibility does not show.'}),
          (
           'The writer believes publishing source code is the best '
           'form of transparency.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 7 argues that publishing the criterion in a '
           'sentence is more useful.',
           {0: 'Yes would need code to win; paragraph 7 prefers the '
               'criterion in a sentence.', 2: 'Not Given is wrong because forms of transparency are '
               'compared.'}),
          ('The first definition discussed is ____________.', None,
           'calibration',
           'Paragraph 2: a score meaning the same thing for everybody.'),
          ('All three can hold only if the groups have identical underlying '
           '____________ or the system predicts perfectly.', None, 'rates',
           'Paragraph 5, and neither condition ever holds in practice.')])],
   listen=[
    dict(heading='A lecture on fairness criteria', part='Part 4',
         task='A lecture on an impossibility result · multiple choice', band='l4',
         qtype='Questions 49-54',
         script=[
          ('Lecturer', 'I am going to present a result that I think every '
           'person who writes about this subject should know and that most '
           'do not, and then I am going to argue that its consequences are '
           'political, not technical.'),
          ('Lecturer', 'Set up the problem. A system scores people. There are '
           'two groups. Here are three things you might reasonably mean by '
           'fair, and I want you to notice that you probably believe all '
           'three.'),
          ('Lecturer', 'One: calibration. If I tell you somebody scored '
           'seventy, that should mean the same thing whichever group they are '
           'in — the same proportion of seventies repay. Two: among people '
           'who would actually have repaid, the average score should not '
           'differ by group, or you are refusing good applicants from one '
           'group more than the other. Three: among people who would actually '
           'have defaulted, the average score should not differ either.'),
          ('Lecturer', 'The result, from 2016, is that you can have all '
           'three only in two circumstances: the two groups have identical '
           'base rates, or your predictor is perfect. Neither happens. Not '
           'approximately, not with better data, not with a cleverer model. '
           'It is a theorem, not an engineering limitation.'),
          ('Lecturer', 'So every deployed system has chosen. Usually without '
           'knowing, because the choice is implicit in which error the '
           'training objective penalises. An engineer picking a loss function '
           'at four in the afternoon has decided which group bears which harm '
           'for the next five years.'),
          ('Lecturer', 'This is why I say the consequence is political. There '
           'is no technically correct answer to pick. Which harm to accept is '
           'a distributive question, and distributive questions have '
           'legitimate decision procedures in our societies, and none of them '
           'is an engineer choosing a loss function.'),
          ('Lecturer', 'Before the last point, dispose of the remedy '
           'everybody proposes first: just do not give the model the '
           'protected attribute. Postcode, employer, account age and a dozen '
           'others reconstruct it. You have removed your ability to measure '
           'the disparity and left the disparity in place, which is strictly '
           'worse than doing nothing.'),
          ('Lecturer', 'Last thing, and it is the one that makes me '
           'pessimistic about certification schemes. The theorem concerns '
           'groups you have defined. A population can be cut a hundred '
           'different ways, and a system calibrated across the division you '
           'checked will generally fail across one you did not. There is no '
           'complete list. So fairness, in the sense of a property you can '
           'certify a system as having, does not exist — which is not an '
           'argument for giving up, but is an argument against believing a '
           'certificate.')],
         items=[
          (
           'How many definitions of fairness does the lecturer set '
           'out?', None, 'three',
           'Calibration and two balance conditions, which he says most '
           'people believe simultaneously.'),
          (
           'Calibration means a score of seventy should mean the '
           '____________ thing in both groups.', None,
           'same',
           'The same proportion of seventies repay in each group.'),
          (
           'All three can hold only if base rates are identical or the '
           'predictor is ____________.', None, 'perfect',
           'And he says neither ever happens.'),
          ('He describes the result as a ____________.', None,
           'theorem',
           'Not approximately solvable with better data or a cleverer '
           'model.'),
          ('Where does he say the choice is usually implicit?',
           ['In the data collection', 'In which error the training objective penalises', 'In the threshold', 'In the review policy'],
           1,
           'An engineer picking a loss function has made a '
           'distributive decision.',
           {0: 'Data collection is not where he locates the choice.', 2: 'The threshold is a separate box in the earlier cycle.', 3: 'Review policy is a third, separate setting.'}),
          (
           'He is pessimistic about certification because there is no '
           'complete ____________ of groups.', None, 'list',
           'A system calibrated on one division will generally fail on '
           'another.')])],
   speak=dict(
    part='Part 3', focus='Fair decisions',
    followup=[(('You say the decision should be explainable. Should the public '
                'be involved in choices like this?'),
               ('In setting what the system is for, yes. The public is good at '
                'deciding whether it is acceptable to rank people by postcode '
                'and bad at auditing a model, so I would consult on the '
                'objective and the constraints, and leave the implementation '
                'to people who can read it.')),
              ('Is a consistent decision necessarily a fair one?',
               ('No, and the two are easy to confuse because consistency is '
                'what you can measure. A rule applied identically to everybody '
                'can embed the same error every time, which is worse than '
                'inconsistency, because there is no second opinion anywhere in '
                'the system to catch it.')),
              ('Can fairness ever be measured?',
               ('Several ways, and that is the difficulty rather than the '
                'answer. Equal error rates between groups, equal treatment of '
                'similar cases, and equal outcomes are all defensible '
                'definitions, and it has been proved that you cannot satisfy '
                'them together. So the measurement is possible once somebody '
                'chooses, and the choice is political.'))],
    intro=('Four or five sentences. Say once what you mean by a word before '
           'arguing with it.'),
    qs=['What makes a decision fair?',
        'Should the public be involved in choices like this?',
        'Is a consistent decision necessarily a fair one?',
        'Can fairness ever be measured?'],
    shape=[('answer', 'It depends which of several things we mean by '
            'fair.'),
           ('support', 'One is that a score means the same for '
            'everybody.'),
           ('follow-up', 'Another is that people with the same outcome are '
            'treated alike.'),
           ('support', 'Those two pull against each other mathematically.'),
           ('follow-up', 'So the question is which unfairness we are '
            'choosing, not whether to have one.')]),
   write=[
    dict(task='Task 2 · planning', fork=None, wband='model',
         heading='Every outlining family once, against the clock',
         prompt=('Should companies be required to explain automated '
                 'decisions? Run all five outlining families in twelve '
                 'minutes: brainstorm, the six tests, the distinctness check, '
                 'the overlap with the opposing brainstorm, and the objection '
                 'to your own position.'),
         plan=('Yes, but what must be explained is the criterion and the '
               'threshold, not the code',
               [('Code is not an explanation to anybody who needs one',
                 ['reading it requires expertise almost no applicant has',
                  'it reveals the mechanism while hiding the choice behind it']),
                ('The criterion and the cut-off are a sentence each and '
                 'settle most complaints',
                 ['they name which harm the organisation chose to impose',
                  'the cut-off changes far more often than the model'])]),
         model=[
          'Twelve minutes, five families, in this order. Two minutes '
          'brainstorming, without judging anything.',
          'Three minutes on the six tests: does each idea answer the question '
          'asked, is it true, can you support it for four sentences, is it '
          'distinct, is it of roughly equal weight, does it depend on '
          'another. Cross out as you go instead of deliberating.',
          'Two minutes on distinctness specifically, because it is the test '
          'that fails most often and the one you will be tempted to skip. '
          'Look for two ideas that are the same idea in different clothes; '
          'there is almost always a pair.',
          'Three minutes brainstorming the opposite position as though you '
          'held it, and marking the overlap. Whatever appears in both lists '
          'goes into your introduction, not your body.',
          'Two minutes on the strongest objection to what survives, and one '
          'sentence on where in the essay you will meet it. If you cannot '
          'name an objection, you have not understood your own position well '
          'enough to defend it.',
          'This is the last planning exercise in the volume. By Volume 5 the '
          'whole sequence should take you eight minutes and happen without '
          'the headings.'],
         notes=[
          'Twelve minutes of planning out of forty sounds extravagant and is '
          'not. The candidates who run out of time in Task 2 are almost never '
          'the ones who planned; they are the ones who started writing and '
          'discovered their second paragraph in the middle of it.',
          'Do the families in this order. The tests before the opposite '
          'brainstorm, because testing a long list is quick and brainstorming '
          'against a tested list is sharper.',
          'The point of doing all five once, under time pressure, is that '
          'you will never do all five in the exam. You will do the two that '
          'this exercise shows you need.'],
         criterion=[('Planning as a timed sequence, not a pause',
                     'Coherence and Cohesion'),
                    ('Knowing which families you personally need',
                     'Task Response')],
         instruct='  Twelve minutes, timed. Write the essay in cycle 5.',
         lines=12)],
   gram=dict(
    point='Stating an impossibility precisely',
    explain=('Writing about a trade-off that cannot be escaped requires '
             'language stronger than difficult and weaker than never. These '
             'patterns state an impossibility result without overclaiming.'),
    examples=['A system satisfying one criterion necessarily violates the '
              'others.',
              'All three can hold only if the base rates are identical.',
              'This is a theorem, not an engineering limitation.',
              'The choice is which harm to accept, not whether to accept '
              'one.'],
    task='Restate each as a precise impossibility, not as a '
         'difficulty.',
    items=[('It is hard to be fair to everybody.',
            'Three reasonable fairness criteria cannot all be satisfied '
            'unless the groups have identical base rates.'),
           ('Better data would solve this.',
            'The result is mathematical, so no quantity of data removes the '
            'conflict.'),
           ('Engineers should try harder.',
            'The choice between criteria cannot be made technically, because '
            'each is internally consistent.'),
           ('Some unfairness is inevitable.',
            'Some group must bear one of the three harms; which group is a '
            'decision, not an accident.'),
           ('Certification would help.',
            'No certificate can cover every division of a population, so '
            'certification cannot establish the property it names.')]),
   vocab=[('calibration', 'a score meaning the same thing across groups'),
          ('base rate', 'the underlying frequency in a population'),
          ('predictor', 'a system producing an estimate of an outcome'),
          ('criterion', 'the standard chosen for judging something'),
          ('distributive', 'concerning how benefits and harms are shared'),
          ('loss function', 'the rule a model is trained to minimise'),
          ('certify', 'to declare officially that something holds'),
          ('protected characteristic', 'an attribute the law forbids '
           'discriminating on')],
   expr=[('established mathematically rather than argued politically',
          'distinguishes a proof from a position'),
         ('you probably believe all three',
          'prepares the reader for an incompatibility'),
         ('which is not an argument for giving up',
          'prevents a nihilistic reading'),
         ('nobody elected them to make',
          'challenges the legitimacy of a decision-maker')],
   trans=['consider', 'the result', 'the conclusion is not',
          'there is a final observation'],
  ),

  dict(
   sub='What an audit can and cannot reach',
   step=5,
   read=[
    dict(heading='Auditing a system nobody can inspect',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 55-61',
         paras=[
          'The standard proposal for holding automated systems to account is '
          'the audit, and it has become the default recommendation of '
          'regulators, select committees and professional bodies '
          'simultaneously. Its appeal is that it borrows a settled '
          'institution: we audit accounts, and the arrangement, whatever its '
          'failures, is one society has learned to operate.',
          'The analogy breaks in three places, and they are worth '
          'taking in order of how fixable they are. The first is '
          'access: a financial auditor has a statutory right to the '
          'books. An algorithmic auditor generally has whatever access '
          'the audited firm agrees to give, and firms have commercial '
          'reasons to give as little as possible. This is the most '
          'tractable problem, because it is a matter of legislation, '
          'and legislation is a thing a parliament can pass in an '
          'afternoon when it decides to.',
          'The second is the object of the audit: accounts are a '
          'finite record of what happened. A model is a function, and '
          'auditing a function means establishing how it behaves '
          'across inputs, including inputs nobody has yet supplied. An '
          'auditor can test the cases they think to test, which is why '
          'audits reliably find the problems somebody already '
          'suspected and reliably miss the others.',
          'The third is the one that does not yield to resources at all, and '
          'it follows from the impossibility result discussed in the previous '
          'cycle. Since no system can satisfy every reasonable fairness '
          'criterion, an auditor must choose which to test against. That '
          'choice is the political decision the audit was supposed to '
          'scrutinise, now taken by the auditor, in private.',
          'None of this means audits are worthless. They have found real '
          'faults: training data missing whole categories of people, '
          'thresholds set without documentation, systems in production that '
          'nobody in the organisation could explain, and deployments running '
          'for years on models the firm believed had been replaced. These are '
          'ordinary governance failures and auditing is good at ordinary '
          'governance failures.',
          'The error is in what audits are asked to certify. A statement that '
          'a system has been audited is widely read as a statement that it is '
          'fair, and the previous cycle established that fairness in that '
          'sense is not a property a system can have. What an audit can '
          'establish is narrower and still valuable: that documentation '
          'exists, that the stated criterion is the one implemented, that the '
          'threshold is recorded, that review authority is real.',
          'That narrower list points to a better arrangement, which some '
          'regulators have begun to adopt. Rather than certifying fairness, '
          'require publication: the criterion chosen in a sentence, the '
          'threshold and who may change it, the date the model was last '
          'trained, and the review policy. Each of these is short, checkable '
          'and meaningful to a non-specialist.',
          'The objection is that publication of this kind invites gaming, and '
          'it is a real objection: a published threshold can be worked '
          'around. It is also an objection that proves less than it appears '
          'to, since the alternative is a situation in which the only parties '
          'who know the threshold are the firm and whoever has reverse '
          'engineered it, which in practice is the better-resourced '
          'applicants.',
          'There is one further asymmetry that the accounting analogy '
          'obscures: a financial audit is repeated annually on a '
          'record that is finished. An algorithmic audit examines a '
          'system that may be retrained the following month, after '
          'which the audited object no longer exists. Any certificate '
          'therefore describes a version, and the public reads it as '
          'describing a product.',
          'The conclusion this volume has reached repeatedly applies here '
          'too. The question is rarely whether to have oversight but what '
          'kind of thing oversight can establish, and a great deal of '
          'disappointment in regulation comes from asking an institution to '
          'certify a property that nothing can be certified as having.',
                ('A closing observation concerns what can be certified rather '
                 'than what cannot. Nothing can certify that a system is fair, '
                 'because fairness has several incompatible definitions and '
                 'the system has to choose between them. Something can certify '
                 'that a particular definition was chosen, written down, and '
                 'tested against the live data on a stated date. That is a '
                 'much smaller claim, and it is one an auditor can actually '
                 'sign, which is more than the current regime asks for.')],
         items=[
          ('Which paragraph identifies the most easily fixed problem?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'],
           1,
           'Access, which legislation could fix tomorrow if anybody '
           'wished to.',
           {0: 'Paragraph 1 explains the appeal of the analogy.', 2: 'Paragraph 3 is about auditing a function.', 3: 'Paragraph 4 says the auditor ends up making the '
               'political choice.'}),
          (
           'Which paragraph says the auditor ends up making the '
           'political choice?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           2,
           'Paragraph 4: the auditor must choose which criterion to '
           'test against, in private.',
           {0: 'Paragraph 2 identifies the most easily fixed problem.', 1: 'Paragraph 3 is about auditing a function.', 3: 'Paragraph 5 lists what audits have genuinely found.'}),
          ('Which paragraph lists what audits have genuinely found?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'],
           1,
           'Missing categories in training data, undocumented '
           'thresholds, unexplained systems in production.',
           {0: 'Paragraph 4 says the auditor ends up making the '
               'political choice.', 2: 'Paragraph 6 is about what audits are asked to certify.', 3: 'Paragraph 7 proposes publication instead.'}),
          ('The writer believes audits should be abandoned.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 5 says explicitly that none of this means audits '
           'are worthless.',
           {0: 'Yes would need abandonment; paragraph 5 says audits '
               'are not worthless.', 2: 'Not Given is wrong because the writer states what '
               'audits can do.'}),
          (
           'The writer believes the gaming objection is without merit.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 8 calls it a real objection before limiting it.',
           {0: 'Yes would need dismissal; paragraph 8 calls it real '
               'before limiting it.', 2: 'Not Given is wrong because the objection is weighed.'}),
          ('An auditor can test the cases they think to ____________.',
           None, 'test',
           'Paragraph 3, which is why audits find suspected problems '
           'and miss the others.'),
          ('Instead of certifying fairness, the writer recommends '
           '____________.', None, 'publication',
           'Paragraph 7: the criterion, the threshold, the training date and '
           'the review policy.')])],
   listen=[
    dict(heading='An auditor and an engineer disagree', part='Part 4',
         task='A recorded panel at a standards conference · multiple choice', band='l4',
         qtype='Questions 62-67',
         script=[
          ('Chair', 'Ms Delacroix-Mbeki audits algorithmic systems. Dr '
           'Yusupov builds them.'),
          ('Delacroix-Mbeki', 'I will start against my own interest. My '
           'profession is being asked to certify something that cannot be '
           'certified. When a report says this system has been audited, the '
           'public reads this system is fair, and I cannot deliver that and '
           'neither can anybody else.'),
          ('Yusupov', 'That is more than I expected you to concede and I '
           'should say where I think you understate your value. You find '
           'things. In the last four audits of systems I have been near, you '
           'found training data with no records at all for people over '
           'seventy-five, and a model in production that three teams believed '
           'had been switched off in 2021.'),
          ('Delacroix-Mbeki', 'Those are governance failures and we are good '
           'at governance failures. What I cannot do is tell you how your '
           'model behaves on inputs nobody has given it. I test the cases I '
           'think of, which means I find what somebody already suspected.'),
          ('Yusupov', 'Then let me push on the part I think you are too soft '
           'about. When you choose which fairness criterion to test against, '
           'you are making the political decision. Privately. With no '
           'mandate. That is worse than a firm making it openly, because at '
           'least the firm can be voted against by its customers.'),
          ('Delacroix-Mbeki', 'That is the strongest criticism of my '
           'profession and I accept it without qualification. It is also an argument for publication, which is a reform and not an abolition.'),
          ('Yusupov', 'Publication invites gaming. Publish my threshold and '
           'applicants optimise to it.'),
          ('Delacroix-Mbeki', 'Some will. Which ones? The ones with advisers. '
           'Right now the threshold is known to you and to anybody who has '
           'paid somebody to reverse engineer it, which is the same '
           'population. Secrecy is not protecting the applicant you are '
           'describing; it is protecting the asymmetry.'),
          ('Yusupov', 'I have used that argument for six years and I have '
           'not heard that answer to it.'),
          ('Yusupov', 'There is one thing in your favour that you have not '
           'claimed, so I will. An audit dates the system. We retrain every '
           'few months, and your report at least fixes what was running on a '
           'particular day, which is more than our own change logs reliably '
           'do.'),
          ('Delacroix-Mbeki', 'That is true and it is also an argument that '
           'a certificate describes a version while the public reads it as '
           'describing a product.'),
          ('Delacroix-Mbeki', 'Then here is what I would legislate. Four '
           'sentences published: the criterion, the threshold and who may '
           'move it, the date of last training, and whether a reviewer may '
           'overturn. Everything else stays confidential.'),
          ('Yusupov', 'Put those four in a statute and my industry will fight every one of them, which is how I know they are the right four.')],
         items=[
          ('What does the auditor concede at the start?',
           ['Audits are too expensive', 'Her profession is asked to certify the uncertifiable', 'Firms are dishonest', 'Standards are weak'],
           1,
           'The public reads audited as fair, which she cannot '
           'deliver.',
           {0: 'Cost is not what she concedes.', 2: 'She does not accuse firms of dishonesty.', 3: 'Standards are not what she says is at fault.'}),
          ('What examples does the engineer give of audit findings?',
           ['Pricing errors', 'Missing records for the over-seventy-fives and a model nobody knew was running', 'Security breaches', 'Late reporting'],
           1, 'He offers these against his own side of the argument.',
           {0: 'Pricing is not among the findings he cites.', 2: 'Security is not what the audits found.', 3: 'Late reporting is not among his examples.'}),
          ('Why does she say audits find only suspected problems?',
           ['Time limits', 'She tests the cases she thinks of', 'Firms hide data', 'Models change'],
           1,
           'She cannot say how a model behaves on inputs nobody has '
           'supplied.',
           {0: 'Time is not the limit she describes.', 2: 'Access is her first problem, but not this one.', 3: 'Retraining is the engineer\u2019s later point about dating.'}),
          (
           'The engineer\u2019s strongest criticism is that the auditor',
           ['charges too much', 'makes the political choice privately', 'lacks technical skill', 'reports too slowly'],
           1,
           'With no mandate, which he says is worse than the firm '
           'doing it openly.',
           {0: 'Fees are not what he criticises.', 2: 'He credits her with finding real faults.', 3: 'Reporting speed is not his objection.'}),
          (
           'Her answer to the gaming objection is that secrecy '
           'protects the ____________.', None, 'asymmetry',
           'Because the threshold is already known to those who can '
           'pay to find it.'),
          ('How many sentences does she propose should be published?',
           None, 'four',
           'Criterion, threshold and who may move it, training date, '
           'and review authority.')])],
   speak=dict(
    part='Part 3', focus='Accountability for machines',
    sounds=[('Abstract nouns in this unit are long and front-loaded or not at '
             'all: ACcountability is stressed in the middle, transPARency in '
             'the middle, AUtonomy on the second. Learn each one as a shape.'),
            ('Say the four key terms inside a claim, not alone: accountability '
             'means somebody can be named, which is the sentence and the '
             'pronunciation practice together.'),
            ('Where two abstractions meet, keep one strong syllable each and '
             'one pause between them: a fair decision, pause, and an '
             'explainable one.'),
            ('Avoid chaining three abstract nouns without a pause. It is '
             'grammatical, it is common in writing, and in speech it is '
             'unintelligible.'),
            ('Record yourself on what makes a decision fair. Find the longest '
             'noun phrase you produced and say it again as two chunks.')],
    intro=('The last Part 3 of the volume. Hold a position, concede '
           'something real, and say what would change your mind.'),
    qs=['Who should be accountable when an automated system causes harm?',
        'Is independent inspection of these systems possible?',
        'Should companies publish how their systems work?',
        'Will regulation ever keep up with technology?'],
    shape=[('answer', 'The organisation deploying it, not the people who '
            'built it.'),
           ('support', 'They chose the cut-off and the review policy, which '
            'is where most harm sits.'),
           ('follow-up', 'And those are decisions, not technical '
            'properties.'),
           ('support', 'The honest difficulty is that inspection cannot '
            'establish very much.'),
           ('follow-up', 'So I would want publication of four or five facts '
            'instead of a certificate that sounds stronger than it is.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should companies be required to explain automated '
                 'decisions?',
         prompt=('Write the essay you planned in cycle 4. Some people believe '
                 'companies should be required to explain how automated '
                 'decisions about individuals are made. Others say this is '
                 'impractical and would damage legitimate business '
                 'interests. Discuss both views and give your own opinion. '
                 'Write at least 250 words.'),
         model=[
          'Arguments about explaining automated decisions almost always '
          'become arguments about source code, and that is why they go '
          'nowhere. Code is not an explanation to anybody who needs one, and '
          'refusing to publish it is not a refusal to explain. The useful '
          'question is which four or five facts would actually answer the '
          'complaints that people make.',
          'Those who demand explanation are right about the underlying '
          'problem. A person refused a loan, a tenancy or a benefit is '
          'entitled to know why, and an answer which amounts to the system '
          'declined is not a reason at all. Without something to point at, '
          'the right to contest a decision is empty, since a challenge '
          'requires a ground and a ground requires knowing what was '
          'weighed.',
          'Those who resist have a case that is weaker than they think on '
          'confidentiality and stronger than critics allow on practicality. A '
          'modern model genuinely cannot be explained in the way a rulebook '
          'can: it has no rules, it has weights learned from several million '
          'past cases, and a sincere engineer describing its logic would '
          'produce something no applicant could use.',
          'My own position is that both sides are arguing about the wrong '
          'object. What determines most outcomes is not the model but the '
          'threshold the score is compared with, and that is a single number, '
          'set by the organisation, beyond the reach of any engineer, changeable in an afternoon without retraining anything. Alongside it sit the '
          'fairness criterion the system was built to satisfy, the date the '
          'model was last trained, and whether a human reviewer may overturn '
          'a decision or only confirm it.',
          'Those four facts are a paragraph. They are intelligible to a '
          'non-specialist, they answer the complaints that are actually made, '
          'and none of them reveals anything a competitor could use. '
          'Requiring them is a modest demand that would do more than any '
          'amount of published code, which is the usual pattern with '
          'transparency: the useful disclosure is small, specific, and almost never the one being argued about.'],
         notes=[
          'The essay refuses the object of the dispute in its first '
          'paragraph and replaces it. That is the riskiest of the moves this '
          'volume has taught and the most rewarded when the replacement is '
          'concrete — here, four named facts.',
          'Paragraph 3 gives the opposing side a genuine technical point, '
          'and does so in its strongest form. Conceding something real is '
          'what buys the reader’s assent for the relocation that follows.',
          'The closing generalisation — the useful disclosure is small, specific and almost never the one being argued about — lifts the essay from '
          'a position on one question to a claim about a kind of question. '
          'That is the last thing to add and only when the specific case has '
          'been made.'],
         model65=[
                  'Some people believe companies should be required to '
                  'explain automated decisions. I agree, provided that '
                  'explanation means the right thing.',
                  'The case is strong. These systems decide who gets a '
                  'loan, an interview or a place, and a person refused '
                  'has no way of knowing whether the decision used '
                  'information it should not have. An explanation also '
                  'allows mistakes to be found, which benefits the '
                  'company.',
                  'But explanation is harder than it sounds. '
                  'Publishing the code tells almost nobody anything, '
                  'and a system may use hundreds of factors with no '
                  'single reason for a decision. There is also a real '
                  'risk that a published rule will simply be gamed by '
                  'applicants who can afford advice.',
                  'I think the requirement should be to publish the '
                  'criterion in a sentence a person can check: what '
                  'the system is trying to predict, and what it is '
                  'allowed to use. That is more useful than the code, '
                  'and it lets a regulator test whether the system '
                  'does what the sentence says.',
                  ],
         gap65=[
                'It shows that the impossibility result limits which '
                'fairness definitions can hold together, instead of '
                'treating fairness as one idea.',
                'It explains why the criterion in a sentence is more '
                'auditable than the code, rather than asserting that '
                'it is.',
                'It gives the gaming objection its weight and then '
                'bounds it.',
                ],
         criterion=[('Replacing the object of the dispute with something '
                     'concrete', 'Task Response'),
                    ('Conceding the opposing technical point at full '
                     'strength', 'Task Response'),
                    ('A closing generalisation earned by the specific case',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=20)],
   gram=dict(
    point='Replacing the object of a dispute',
    explain=('The strongest and riskiest Task 2 move is to say that both '
             'sides are arguing about the wrong thing. It works only when the '
             'replacement is concrete and named. These patterns make the '
             'substitution cleanly.'),
    examples=['Both sides are arguing about the wrong object.',
              'What determines most outcomes is not the model but the '
              'threshold.',
              'The useful question is which four facts would answer the '
              'complaint.',
              'Code is not an explanation to anybody who needs one.'],
    task='Replace the object of each dispute with something more '
         'specific.',
    items=[('Should algorithms be transparent?',
            'The question is which facts about a system a person needs, and '
            'the code is not among them.'),
           ('Are automated decisions fair?',
            'The question is which fairness criterion was chosen, since no '
            'system can satisfy them all.'),
           ('Should companies publish their models?',
            'Publishing the threshold and the review policy would answer more '
            'complaints than publishing a model.'),
           ('Is regulation keeping up?',
            'The question is what regulation can establish, not how fast it '
            'moves.'),
           ('Do these systems discriminate?',
            'The question is which group bears which of three harms, because '
            'one of them must.')]),
   vocab=[('audit', 'an independent examination of a system or record'),
          ('statutory right', 'a right granted by legislation'),
          ('governance', 'how an organisation controls what it does'),
          ('in production', 'running and affecting real decisions'),
          ('reverse engineer', 'to work out how something functions from '
           'outside'),
          ('gaming', 'adjusting behaviour to exploit a known rule'),
          ('asymmetry of information', 'one side knowing more than the '
           'other'),
          ('publication requirement', 'a duty to make stated facts '
           'public')],
   expr=[('I will start against my own interest',
          'signals an unusual concession'),
         ('that is more than I expected you to concede',
          'acknowledges an opponent’s candour'),
         ('Secrecy is not protecting the applicant you are describing',
          'redirects a protective argument'),
         ('Put those four in a statute and my industry will fight every one, which is how I know they are the right all four', 'agrees while forecasting resistance')],
   trans=['the analogy breaks', 'none of this means', 'rather than',
          'the conclusion'],
  ),
 ],
 technique=dict(
  title='A full timed Reading paper, at Volume 4 length',
  body=('You have now done the loop a hundred and fifty times on single '
        'passages. The timed paper at the end of this volume puts three '
        'together under the real clock: sixty minutes, forty questions, no '
        'extra time to transfer answers. The arithmetic you should carry in '
        'is this. Thirty seconds to orient and two minutes to load the '
        'questions costs you seven and a half minutes across three passages. '
        'At a hundred words a minute, two thousand four hundred words of text '
        'costs twenty-four. That leaves roughly twenty-eight minutes for '
        'forty questions — about forty seconds each — and that is the number '
        'to feel, not the misleading ninety seconds you get by dividing sixty '
        'by forty.'),
  panel=[('Twenty minutes a passage', 'Not twenty for the first and forty '
          'for the rest. Write the clock times on the paper before you '
          'start: 20, 40, 60.'),
         ('Load before you read', 'Two minutes on the questions, every time, '
          'including when you are behind. The temptation to skip this is '
          'strongest exactly when it costs most.'),
         ('Leave it and move', 'A question you cannot close after reading '
          'its paragraph gets a mark in the margin and nothing more. Two '
          'minutes on one question is three questions you never reach.'),
         ('Answer everything', 'There is no penalty. Any blank at minute '
          'fifty-nine is a mark given away, and the last ninety seconds are '
          'for filling them.')],
  task='Sit the timed paper at the end of this volume under exam conditions. '
       'Then answer these five questions in writing before you look at the '
       'key.',
  qs=['What were your clock times at the end of each passage?',
      'Which passage cost you the most, and was it the text or the '
      'questions?',
      'How many questions did you mark and return to?',
      'Did you load the questions before the third passage, or skip it?',
      'How many blanks were there at minute fifty-eight?']),
 outlining=dict(
  title='Every outlining family once, against the clock',
  body=('This volume has taught five planning moves: the brainstorm, the six '
        'tests, the distinctness check, the overlap with the opposing '
        'brainstorm, and the objection to your own position. In the exam you '
        'will use two of them. The purpose of running all five once under '
        'twelve minutes is to find out which two you personally need, because '
        'it is different for different writers and nobody can tell you from '
        'outside.'),
  frame=('Companies should publish the criterion and the threshold, not the '
         'code',
         [('Code is not an explanation to anybody who needs one',
           ['reading it requires expertise almost no applicant has',
            'it shows the mechanism while hiding the choice behind it']),
          ('The criterion and the cut-off are a sentence each and settle most '
           'complaints',
           ['they name which harm the organisation chose to impose',
            'the cut-off changes far more often than the model does'])]),
  task='Run all five families on the cycle 4 prompt in twelve minutes, timed. '
       'Then write one sentence naming the two you will use in the exam, and '
       'why those two.',
  qs=['Which family produced the idea you actually used?',
      'Which family took longest and produced least for you?',
      'Did the opposite brainstorm change your position or only your '
      'framing?',
      'Could you name the objection to your own position in under a '
      'minute?'],
  answers=['for most writers it is the brainstorm, with the tests doing the '
           'cutting',
           'commonly the overlap exercise, which is slow and occasionally '
           'decisive',
           'framing far more often than position, which is its real value',
           'if not, plan for the objection explicitly in every essay until '
           'you can']),
 candos=['I can challenge an automated decision on a ground that succeeds',
         'I can describe a device diagram as apparatus then operation',
         'I can follow both arms of a branch to the end point',
         'I can state an impossibility precisely, not as a '
         'difficulty',
         'I can sit a full timed Reading paper to the clock times I set'],
 tip=('This is the last unit of the volume. Before you sit the timed paper, '
      'write the three clock times at the top of the page: 20, 40, 60. '
      'Candidates who do this finish; candidates who intend to watch the '
      'clock do not.'),
)
