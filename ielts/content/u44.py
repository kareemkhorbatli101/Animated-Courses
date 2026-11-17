# -*- coding: utf-8 -*-
"""Unit 44 - Attention and the Information Environment. Volume 5, band 7.0."""

_USE = dict(kind='bar',
            title='Reported and measured phone use',
            sub='hours per day, four age groups',
            cats=['13–17', '18–29', '30–49', '50+'],
            series=[('Reported by the user', [3.1, 3.4, 2.6, 1.5]),
                    ('Measured on the device', [6.8, 5.9, 3.9, 2.1])])

UNIT = dict(
 n=44, vol=5, level='B2+/C1', band='7.0',
 theme='Attention and the Information Environment',
 opener=(
   'A two-series chart in which neither series is the finding: what matters '
   'is the gap between them, how it changes across the four groups, and the '
   'fact that it runs in the same direction every time. From there the unit '
   'works out to the market that attention is bought and sold in, and ends '
   'on the question that is argued about most loudly and understood least: '
   'what the evidence on harm to young people actually licenses anybody to '
   'say.'),

 cycles=[
  dict(
   sub='Managing your own attention',
   step=1,
   read=[
    dict(heading='Digital wellbeing settings explained',
         kind='Guidance page', task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('A settings page is read for what each control actually '
                'governs',
                ['Guidance about settings is written by people who know '
                 'which control does what, for readers who do not, and the '
                 'names are chosen by marketing rather than by engineering.',
                 'For each control, mark whether it governs what is '
                 'collected, what is shown, or what is permitted. Questions '
                 'at this level turn almost entirely on that distinction.']),
         paras=[
          'Screen time limits govern how long an application may be opened '
          'for in a day. They do not govern what the application does while '
          'it is open, and they do not reduce the number of messages it '
          'sends you. A limit reached produces a full-screen prompt that may '
          'be dismissed, and dismissals are recorded in the weekly summary '
          'but do not themselves trigger anything.',
          'Notification controls are separate and are the more effective of '
          'the two for most people. Switching an application to silent '
          'delivery means its messages arrive without sound or banner and '
          'are collected into a single digest at times you choose. The '
          'application is not told that you have done this.',
          'Focus modes combine the two and add a third thing: they can '
          'prevent an application from being opened at all during a stated '
          'period. This is the only control on the device that is a '
          'prohibition rather than a prompt, and it is the one with by far '
          'the lowest take-up, at under four per cent of accounts.',
          'Parental controls on a family account are a different system. '
          'The limits are set from the organiser’s device and a request to '
          'exceed one is sent there for approval. More than three '
          'approvals in a week cause the system to suggest raising the '
          'limit, which many organisers experience as the device '
          'negotiating with them.',
          'All of these controls operate on the device and none of them '
          'affects what is collected about use. A phone with every limit set '
          'to its strictest value sends the same information about the '
          'periods when it is in use, and the settings described on this '
          'page should not be understood as privacy controls, which are '
          'documented separately.'],
         items=[
          ('A screen time limit, when reached, produces',
           ['an automatic shutdown', 'a prompt that may be dismissed', 'a message to a parent', 'a reduced data allowance'],
           1,
           'Paragraph 1, with dismissals recorded in the weekly '
           'summary.',
           {0: 'Paragraph 1 says the prompt may be dismissed.', 2: 'Parental approval belongs to the family account '
               'system.', 3: 'Data allowances are not mentioned in the notice.'}),
          (
           'Which control actually prevents an application from '
           'opening?',
           ['A screen time limit', 'Silent delivery', 'A focus mode', 'A parental approval'],
           2, 'Paragraph 3, the only prohibition rather than a prompt.',
           {0: 'A screen time limit produces a prompt, not a block.', 1: 'Silent delivery changes how messages arrive, not '
               'access.', 3: 'Parental approval raises a limit rather than enforcing '
               'one.'}),
          (
           'When an application is switched to silent delivery, the '
           'application',
           ['is told', 'is not told', 'is blocked', 'is uninstalled'],
           1,
           'Paragraph 2, which also collects its messages into a '
           'digest.',
           {0: 'Paragraph 2 says the application is not told.', 2: 'Blocking is what a focus mode does.', 3: 'Nothing is removed from the device.'}),
          ('Take-up of focus modes is under ____________ per cent of '
           'accounts.', None, 'four',
           'Paragraph 3, the lowest of any control described.'),
          ('More than ____________ approvals in a week prompt the system to '
           'suggest raising the limit.', None, 'three',
           'Paragraph 4, which organisers experience as negotiation.'),
          ('None of these controls affects what is ____________ about '
           'use.', None, 'collected',
           'Paragraph 5, which directs the reader to the privacy '
           'documentation.')]),
    dict(heading='Turning off notifications',
         kind='Procedure notice', task='Flow-chart completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Begin from the notification list rather than from inside each '
          'application. The list shows every application that has sent you '
          'anything in the last thirty days, ordered by volume, and the '
          'order is itself informative: most people find that four '
          'applications account for more than eighty per cent of what they '
          'receive.',
          'For each of those four, choose one of three states rather than '
          'switching everything off. Immediate delivery should be reserved '
          'for messages from people. Silent delivery suits anything you want '
          'to see eventually. Off entirely is right for applications that '
          'notify you about their own activity rather than about yours.',
          'Set your digest times before leaving the screen, because a digest '
          'with no times set delivers at nine in the morning by default and '
          'this is the commonest reason people conclude the feature does not '
          'work. Two times a day suits most people and three suits almost '
          'nobody.',
          'Review the list again after a fortnight, and then after a '
          'quarter. Applications may request immediate delivery again '
          'after an update, and a request granted during an update is '
          'granted for good, which is a design decision rather than an '
          'accident.'],
         items=[
          ('Start from the ____________ list rather than inside each '
           'application.', None, 'notification',
           'Paragraph 1, ordered by volume over thirty days.'),
          ('Immediate delivery should be reserved for messages from '
           '____________.', None, 'people',
           'Paragraph 2, which gives three states to choose between.'),
          ('Set your ____________ times before leaving the screen.', None,
           'digest',
           'Paragraph 3, or delivery defaults to nine in the morning.'),
          ('Review the list again after a ____________.', None,
           'fortnight',
           'Paragraph 4, because updates can restore immediate '
           'delivery.')])],
   listen=[
    dict(heading='Setting up screen limits for a family account',
         part='Part 1', task='A call to a support line', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Adviser', 'Family accounts, Thaddeus speaking.'),
          ('Caller', 'Hello. I have set up limits for my son and they do not '
           'seem to be doing anything.'),
          ('Adviser', 'Let me check a few things. Is he on the family '
           'account as a member, or does he have his own account?'),
          ('Caller', 'A member. I added him in September.'),
          ('Adviser', 'Good, that is the right setup. What limit have you '
           'set?'),
          ('Caller', 'Two hours a day for the video application.'),
          ('Adviser', 'And when the two hours are up, what does he see?'),
          ('Caller', 'A message, I think. He says it goes away.'),
          ('Adviser', 'It does. A screen time limit produces a prompt and '
           'the prompt can be dismissed. It is not a block, which is the '
           'single most common misunderstanding on this line.'),
          ('Caller', 'Then what is the point of it?'),
          ('Adviser', 'For most people the prompt is enough, and the weekly '
           'summary shows you how often it was dismissed. If you want '
           'something that actually prevents it, that is a focus mode, which '
           'is a different control and does block.'),
          ('Caller', 'I would like that.'),
          ('Adviser', 'Then set a focus mode on his device for the hours you '
           'choose. The usual choice is school hours and after nine in the '
           'evening. Which would you like?'),
          ('Caller', 'After nine. He is fine during the day.'),
          ('Adviser', 'After nine it is. And he can send you a request to '
           'override it, which arrives on your device for approval.'),
          ('Caller', 'Will he do that constantly?'),
          ('Adviser', 'In my experience, twice a week for the first '
           'fortnight and then rarely. One thing to know: if you approve '
           'more than three in a week, the system will suggest raising the '
           'limit.'),
          ('Caller', 'It negotiates with me?'),
          ('Adviser', 'That is exactly how people describe it, and you can '
           'turn the suggestion off in the same menu. Shall I send you the '
           'instructions?'),
          ('Caller', 'Please. One more thing — does this stop the app '
           'collecting information about him?'),
          ('Adviser', 'No, and I am glad you asked, because the two are '
           'completely separate. Every limit on this page is about what the '
           'device permits. What is collected is in the privacy settings, '
           'which is a different menu and a different conversation.')],
         items=[
          ('The son is on the family account as a ____________.', None,
           'member', 'Added in September, which the adviser confirms is '
           'correct.'),
          ('Current limit: ____________ hours a day for the video '
           'application', None, 'two',
           'Which produces a prompt rather than a block.'),
          ('The control that actually blocks is a ____________ mode.',
           None, 'focus',
           'Which the adviser distinguishes from a screen time limit.'),
          ('Chosen period: after ____________ in the evening', None,
           'nine', 'Rather than during school hours.'),
          ('Approving more than ____________ requests in a week prompts a '
           'suggestion to raise the limit.', None, 'three',
           'Which the caller describes as the device negotiating.'),
          ('What is collected is governed by the ____________ settings.',
           None, 'privacy',
           'A different menu, which the adviser says is a separate '
           'matter.')]),
    dict(heading='A short talk: what holds attention', part='Part 2',
         task='A talk at a design conference', band='l2',
         qtype='Questions 17-20',
         script=[
          ('Speaker', 'I designed engagement systems for nine years and I am '
           'going to describe how they work, without the apology that '
           'usually accompanies this talk, because I think the apology gets '
           'in the way of the mechanism.'),
          ('Speaker', 'The core of it is not addiction and it is not '
           'dopamine, whatever you have read. It is a property of variable '
           'reward schedules that has been understood since the nineteen '
           'fifties: a reward that arrives unpredictably sustains a behaviour '
           'far longer than one that arrives every time, and far longer than '
           'one that never arrives at all.'),
          ('Speaker', 'That is why a feed is refreshed by pulling down. Not '
           'because pulling is pleasant, but because the gesture is '
           'separated from its outcome by half a second and the outcome '
           'varies. If every refresh produced exactly one new item, the '
           'gesture would stop within a week.'),
          ('Speaker', 'The second mechanism is friction, and it works in the '
           'other direction. Every additional step before an action removes '
           'about a fifth of the people who were going to take it, which '
           'means that the easiest way to change behaviour at scale is not '
           'persuasion but the position of a button. We moved a confirmation '
           'dialogue once and lost nineteen per cent of a behaviour we had '
           'spent two years encouraging.'),
          ('Speaker', 'And the third is the one I would want a regulator to '
           'understand, because it is where the design decisions actually '
           'get made. Nobody in the room is asked to maximise time spent. '
           'They are asked to maximise a metric that correlates with time '
           'spent, which is chosen because it is measurable weekly, and '
           'nobody ever revisits whether it still correlates with anything '
           'anybody wanted.'),
          ('Speaker', 'So when people ask me whether these systems are '
           'designed to be addictive, my honest answer is that they are '
           'designed to improve a number, and that the number was selected '
           'eight years ago by somebody who has left, and that this is '
           'worse than deliberate malice because there is nobody to '
           'persuade.')],
         items=[
          ('The speaker says the core mechanism is',
           ['dopamine', 'variable reward schedules', 'social comparison', 'addiction'],
           1, 'Understood since the nineteen fifties.',
           {0: 'He says explicitly that it is not dopamine.', 2: 'Social comparison is not the mechanism he names.', 3: 'He says the core of it is not addiction.'}),
          ('A feed is refreshed by pulling down because',
           ['pulling is pleasant', 'the gesture is separated from a varying outcome', 'it saves data', 'it is easier to learn'],
           1,
           'A fixed one-item result would end the gesture within a '
           'week.',
           {0: 'He says it is not because pulling is pleasant.', 2: 'Data use is not part of his explanation.', 3: 'Ease of learning is not the reason he gives.'}),
          ('Each additional step before an action removes about',
           ['a tenth of people', 'a fifth of people', 'half of people', 'nobody'],
           1,
           'Which the speaker illustrates with a nineteen per cent '
           'loss.',
           {0: 'Smaller than the share he reports losing.', 2: 'Larger than the fifth he gives.', 3: 'He reports a measurable loss at each step.'}),
          (
           'What does the speaker most want a regulator to understand?',
           ['That designers intend harm', 'That teams maximise a proxy metric nobody revisits', 'That friction is unavoidable', 'That users choose freely'],
           1, 'Chosen because it is measurable weekly.',
           {0: 'He says there is nobody to persuade of harm.', 2: 'Friction is a tool, not what he wants understood.', 3: 'Free choice is not the point he makes to regulators.'})])],
   speak=dict(
    part='Part 1', focus='How you use your phone',
    intro=('Two or three sentences each. Honest detail is more impressive '
           'here than a virtuous answer.'),
    qs=['How much do you use your phone?',
        'What do you use it for most?',
        'Have you ever tried to use it less?',
        'Do you think people use their phones too much?'],
    shape=[('answer', 'Considerably more than I would admit without '
            'checking.'),
           ('support', 'I looked at the weekly figure last month and it was '
            'about double my guess.'),
           ('follow-up', 'Most of it is reading things I would not have '
            'sought out, which is the part I mind.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking a school to restrict phones in class',
         prompt=('You believe phones are disrupting lessons at your '
                 'child’s school. Write a letter to the head teacher. In '
                 'your letter: explain the problem; say what you would like '
                 'done; respond to a likely objection. Write at least 150 '
                 'words.'),
         model=[
          'Dear Ms Oyelaran,',
          'I am writing about the use of phones during lessons in Year 9, '
          'and to suggest a change which I think is more workable than the '
          'outright ban that has been proposed at two recent meetings.',
          'My son reports that between four and six phones are visible '
          'during a typical lesson and that teachers vary in whether they '
          'intervene. He is not complaining; he was explaining why he had '
          'stopped trying to work in the last twenty minutes of the day. I '
          'recognise that a single account from one pupil is weak evidence, '
          'which is partly why I am writing rather than asserting.',
          'I would suggest that phones be collected at the start of each '
          'lesson into a numbered rack by the door and returned at the end. '
          'Several schools in the county operate this and the arrangement '
          'takes about ninety seconds of a lesson.',
          'I appreciate the practical difficulties, and the one I would '
          'anticipate is responsibility for a lost or damaged phone. The '
          'schools operating this scheme address it by making the rack '
          'optional and recording a refusal rather than compelling a '
          'handover, which keeps liability with the family while making the '
          'default the other way round.',
          'I would be glad to help trial this in one year group if that '
          'would be useful.',
          'Yours sincerely,',
          'T. Varga-Oduya'],
         notes=[
          'The second paragraph volunteers the weakness of its own '
          'evidence. A reader who is used to receiving confident assertions '
          'from parents will read the rest of this letter differently, and '
          'it costs one clause.',
          'The fourth paragraph names the objection the head teacher would '
          'raise and answers it with how other schools handle it. '
          'Anticipating the strongest objection is the difference between a '
          'letter that gets a reply and one that gets a file.',
          'The proposal is specific to ninety seconds and the offer at the '
          'end is to do work rather than to be consulted. Both signal that '
          'the writer wants an outcome rather than a hearing.'],
         criterion=[('Volunteering the weakness of your own evidence',
                     'Task Response'),
                    ('Naming and answering the likely objection',
                     'Task Achievement'),
                    ('Offering work rather than asking to be consulted',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Proposal and anticipated objection',
    explain=('A proposal that answers its own strongest objection is read '
             'as having been thought about. These patterns raise the '
             'objection without weakening the proposal.'),
    examples=['I appreciate the practical difficulties, but would '
              'suggest...',
              'The objection I would anticipate is responsibility for a lost '
              'phone.',
              'I recognise that a single account is weak evidence.',
              'Several schools operate this, and the arrangement takes '
              'ninety seconds.'],
    task='Rewrite each proposal so that it anticipates an objection.',
    items=[('Phones should be banned in lessons.',
            'I would suggest collection at the door rather than a ban, since '
            'a ban relies on enforcement in every lesson by every '
            'teacher.'),
           ('This would be easy to do.',
            'The arrangement takes about ninety seconds of a lesson, which I '
            'accept is ninety seconds somebody has to find.'),
           ('My son says it is disruptive.',
            'A single account from one pupil is weak evidence, which is why '
            'I am suggesting a trial rather than a policy.'),
           ('Other schools manage it.',
            'Several schools in the county operate this, and I would be glad '
            'to find out how they handle breakages.'),
           ('You should act on this.',
            'I would be glad to help trial this in one year group if that '
            'would be useful.')]),
   vocab=[('notification', 'a message an application sends unprompted'),
          ('silent delivery', 'arriving without sound or banner'),
          ('digest', 'several messages collected and delivered together'),
          ('focus mode', 'a setting that blocks applications for a period'),
          ('override', 'permission to exceed a limit on one occasion'),
          ('adoption rate', 'the share of people who start using something'),
          ('full-screen message', 'a notice that interrupts what is on screen'),
          ('rack', 'a holder with numbered places')],
   expr=[('I appreciate the practical difficulties, but would suggest',
          'raises an objection before the reader does'),
         ('I recognise that a single account is weak evidence',
          'concedes the quality of your own evidence'),
         ('which many organisers experience as the device negotiating with '
          'them', 'describes a reaction a designer did not intend'),
         ('it is not a block, which is the commonest misunderstanding',
          'corrects an expectation about what a control does')],
   trans=['furthermore', 'in this connection', 'I would suggest',
          'the objection I would anticipate'],
  ),

  dict(
   sub='What holds attention',
   step=2,
   read=[
    dict(heading='Four people on what they cannot stop reading',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 21-26',
         paras=[
          'A  Oleander: I read local planning disputes for two hours a '
          'night and I live four hundred miles from the town in question. '
          'Nobody designed that. There is no algorithm pushing drainage '
          'objections at me; I found them myself and the platform is '
          'probably losing money on my attention. I mention it because every '
          'explanation I read assumes the pull comes from outside.',
          'B  Fenwick: What holds me is the unfinished argument. If I read a '
          'thread in which somebody has been wrong and has not yet been '
          'corrected, I cannot leave, and I have tested this on myself by '
          'reading threads where the correction is already visible. Those I '
          'close immediately. It is not the subject and it is not the '
          'people. It is the open loop.',
          'C  Marguerite: I turned everything off for a month and the '
          'honest result is that my total time barely moved. What changed '
          'was that I chose it. Same hours, different route in, and I felt '
          'dramatically better about it, which makes me suspicious of my own '
          'report and also of every study that measures hours.',
          'D  Ignatius: I build these systems and I am as caught as anybody, '
          'which I used to think was a point in their favour. I have '
          'stopped thinking that. Knowing precisely why a gesture works does '
          'not stop it working, any more than knowing how a magic trick is '
          'done stops you looking at the hand that is moving.'],
         items=[
          (
           'Which person describes attention that nothing was designed '
           'to capture?',
           ['Oleander', 'Fenwick', 'Marguerite', 'Ignatius'], 0,
           'Local planning disputes four hundred miles away.',
           {1: 'Fenwick identifies an unresolved argument as the hook.', 2: 'Marguerite found that total time changed very little.', 3: 'Ignatius says expertise does not confer immunity.'}),
          (
           'Which person identifies an unresolved argument as the '
           'hook?',
           ['Oleander', 'Fenwick', 'Marguerite', 'Ignatius'], 1,
           'Threads where the correction is already visible are closed '
           'at once.',
           {0: 'Oleander describes attention that nothing was designed '
               'to capture.', 2: 'Marguerite found that total time changed very little.', 3: 'Ignatius says expertise does not confer immunity.'}),
          ('Which person found that total time changed very little?',
           ['Oleander', 'Fenwick', 'Marguerite', 'Ignatius'], 2,
           'Though she felt dramatically better about the same hours.',
           {0: 'Oleander describes attention that nothing was designed '
               'to capture.', 1: 'Fenwick identifies an unresolved argument as the hook.', 3: 'Ignatius says expertise does not confer immunity.'}),
          ('Which person says expertise does not confer immunity?',
           ['Oleander', 'Fenwick', 'Marguerite', 'Ignatius'], 3,
           'Compared to knowing how a magic trick is done.',
           {0: 'Oleander describes attention that nothing was designed '
               'to capture.', 1: 'Fenwick identifies an unresolved argument as the hook.', 2: 'Marguerite found that total time changed very little.'}),
          ('Marguerite fully trusts her own account of the month.',
           ['Yes', 'No', 'Not Given'], 1,
           'She says the result makes her suspicious of her own '
           'report.',
           {0: 'Yes would need trust; she says the result makes her '
               'suspicious of it.', 2: 'Not Given is wrong because she rates her own report.'}),
          ('Ignatius believes designers are less affected than users.',
           ['Yes', 'No', 'Not Given'], 1,
           'He says he is as caught as anybody and has stopped '
           'thinking that is a defence.',
           {0: 'Yes would need an exemption; he says he is as caught '
               'as anybody.', 2: 'Not Given is wrong because he places himself among the '
               'affected.'})])],
   listen=[
    dict(heading='Two designers disagree about engagement', part='Part 3',
         task='A conversation between two product designers', band='l3',
         qtype='Questions 27-32',
         script=[
          ('Rosalind', 'I want to take the autoplay out of the next '
           'release.'),
          ('Casimir', 'You will lose eleven per cent of session length and '
           'you will be asked to put it back within a quarter.'),
          ('Rosalind', 'I know the number. What I want to argue is that '
           'session length is not the thing we should be defending.'),
          ('Casimir', 'Then argue it, because I have made that speech twice '
           'and been beaten by the dashboard both times.'),
          ('Rosalind', 'The dashboard measures what we chose to measure in '
           '2019. Session length was picked because it was available '
           'weekly, and nobody has asked since whether it tracks anything a '
           'user would recognise as value.'),
          ('Casimir', 'I agree with all of that and I think you will lose '
           'anyway, and I want to tell you why so that you can answer it. '
           'The alternative metrics are quarterly. You are asking a team '
           'that reports weekly to accept a number that moves four times a '
           'year.'),
          ('Rosalind', 'That is the real objection, and it is about '
           'reporting cadence rather than about values.'),
          ('Casimir', 'It is. And it is why every company that has tried '
           'this has reverted within eighteen months, including two I '
           'worked at.'),
          ('Rosalind', 'Then what if we keep the weekly reporting and '
           'change what is in it? Session length stays, and beside it we '
           'publish the proportion of sessions a user described as worth '
           'their time, from the one-question survey we already run.'),
          ('Casimir', 'That survey has a four per cent response rate.'),
          ('Rosalind', 'It does, and a four per cent sample of two hundred '
           'million is not a precision problem. It is a selection problem, '
           'and I would rather argue about selection with a number on the '
           'dashboard than have no number there at all.'),
          ('Casimir', 'That is the first version of this I have heard that '
           'might survive a planning meeting. I would add one thing and it '
           'is the part you will not like.'),
          ('Rosalind', 'Go on.'),
          ('Casimir', 'Publish both numbers for two quarters before you '
           'touch autoplay. If the second number does not move when the '
           'first one does, you have an argument. If it does move together, '
           'you have learned something you did not want to learn and you '
           'should say so.')],
         items=[
          ('Removing autoplay is expected to cost',
           ['four per cent of sessions', 'eleven per cent of session length', 'a quarter of users', 'nothing measurable'],
           1,
           'And Casimir predicts it would be reinstated within a '
           'quarter.',
           {0: 'Four per cent is the survey response rate.', 2: 'User numbers are not the figure he gives.', 3: 'He gives a definite cost in session length.'}),
          (
           'Rosalind objects that session length was chosen because it',
           ['matters most', 'was available weekly', 'is standard across the industry', 'users asked for it'],
           1, 'Picked in 2019 and never revisited.',
           {0: 'She argues it is not what matters most.', 2: 'Industry practice is not her explanation.', 3: 'No user request is mentioned for the metric.'}),
          ('Casimir\u2019s main objection concerns',
           ['user preferences', 'the reporting cadence of alternative metrics', 'legal risk', 'engineering cost'],
           1,
           'A weekly-reporting team being asked to accept a quarterly '
           'number.',
           {0: 'User preferences are what she wants measured.', 2: 'Legal risk is not raised in the exchange.', 3: 'Engineering cost is not his objection.'}),
          ('Rosalind proposes publishing session length alongside',
           ['revenue', 'the share of sessions users called worth their time', 'complaint volume', 'retention'],
           1, 'From a one-question survey already running.',
           {0: 'Revenue is not what she proposes publishing beside it.', 2: 'Complaints are not the measure she names.', 3: 'Retention is close to session length, not her '
               'proposal.'}),
          ('She characterises the four per cent response rate as',
           ['a precision problem', 'a selection problem', 'fatal', 'irrelevant'],
           1, 'Given a base of two hundred million users.',
           {0: 'She says a four per cent sample of millions is precise '
               'enough.', 2: 'She wants the number published, so not fatal.', 3: 'She treats the selection issue as worth arguing about.'}),
          ('What does Casimir add as a condition?',
           ['Remove autoplay first', 'Publish both numbers for two quarters first', 'Raise the response rate', 'Get legal approval'],
           1, 'And say so if the two numbers move together.',
           {0: 'He asks for the numbers first, before the change.', 2: 'The response rate is not what he asks her to change.', 3: 'Legal approval is not mentioned in the exchange.'})])],
   speak=dict(
    part='Part 1 into Part 2', focus='Attention',
    longturn=[('The thing that holds my attention is restoring old radios, '
               'which has occupied most of my spare time for about six years.'),
              ('I came across it in the least promising way imaginable. A '
               'neighbour was clearing a house and asked whether I wanted a '
               'wooden valve set from the nineteen-forties, and I took it '
               'because refusing seemed rude, and it sat in a cupboard for '
               'most of a year before I plugged it in and nothing happened.'),
              ('How much time I give it varies between two hours a week and '
               'whole weekends, and the pattern is not random: it absorbs me '
               'most when everything else is going badly, which I have stopped '
               'pretending is a coincidence.'),
              ('Why I think it holds me comes down to the structure of the '
               'problem rather than any interest in radios as such. A fault in '
               'a valve set is always findable. There are perhaps forty '
               'components, the circuit is printed in a service manual '
               'somebody wrote in 1948, and the thing either works at the end '
               'or it does not, so there is no judgement to be exercised about '
               'whether I have succeeded. Almost nothing else in my life has '
               'that shape. My work is never finished and the standard is '
               'somebody else\'s opinion. Three hours with a meter and a '
               'soldering iron gives me a problem with a right answer, and I '
               'think the appeal is entirely that, which is why the radios '
               'themselves mostly end up being given away.')],
    intro=('Short answers, then the long turn. Choose something genuine '
           'rather than something respectable.'),
    cue=('Describe something that holds your attention.',
         ['what it is', 'how you came across it',
          'how much time you give to it',
          'and explain why you think it holds you']),
    qs=['Do you find it easy to concentrate?',
        'Has that changed over the last few years?',
        'Now look at the card. You have one minute to make notes.',
        'Is a long attention span still useful?'],
    shape=[('answer', 'Transcripts of planning inquiries, which I accept is '
            'an odd answer.'),
           ('support', 'I found one while looking for something else about '
            'four years ago.'),
           ('follow-up', 'Perhaps three hours a week, mostly late.'),
           ('support', 'I think it is the structure rather than the '
            'subject.'),
           ('follow-up', 'Somebody is wrong and somebody else is slowly '
            'demonstrating it, and I cannot leave before that '
            'finishes.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Designing for engagement',
         prompt=('Some people believe platforms should be prevented from '
                 'designing their products to maximise the time users spend '
                 'on them. What are the advantages of such a restriction, '
                 'and do you think it should be introduced? Write at least '
                 '250 words.'),
         model=[
          'The advantages of such a restriction are easy to state and the '
          'difficulty is entirely in the drafting, which is why I support '
          'the aim and expect any version of the rule to fail in a way worth '
          'predicting in advance.',
          'The case for it is that designing for time spent and designing '
          'for value are not the same aim, and where they diverge the first '
          'wins by default because it is measurable weekly and the second is '
          'not. Teams are not instructed to capture attention. They are '
          'instructed to improve a metric chosen years earlier for its '
          'availability, and nobody revisits whether it still corresponds to '
          'anything a user would recognise as benefit. A restriction that '
          'forced a second number onto the dashboard would change more '
          'behaviour than any prohibition, because it would change what the '
          'weekly meeting is about.',
          'The difficulty is that almost every technique at issue has a '
          'legitimate use. A notification is a nuisance and is also how a '
          'message from a relative arrives. Automatic playback is a '
          'retention device and is also what makes a lecture series usable. '
          'A rule naming techniques would therefore prohibit things nobody '
          'objects to, and a rule naming intentions is unenforceable, since '
          'intention inside a company is distributed across a hundred '
          'decisions nobody made alone.',
          'My own position is that the restriction should attack the metric '
          'rather than the mechanism. I would require any platform above a '
          'size threshold to publish, quarterly, both its engagement measure '
          'and a measure of whether users judged the time well spent, '
          'obtained by a method it does not control. That is a disclosure '
          'rule rather than a design rule, and disclosure rules are the only '
          'kind that have ever survived contact with a technology that '
          'changes faster than the drafting.',
          'I would expect that to be resisted far more strongly than a ban '
          'on any particular feature, which is the best evidence available '
          'that it would work.'],
         notes=[
          'The introduction announces both the support and the predicted '
          'failure, which is structure 4 — advantages, then an immediate '
          'position — executed in one sentence.',
          'Paragraph 3 concedes that every technique has a legitimate use '
          'and then shows that both available drafting strategies fail, '
          'which is a stronger objection than opposing the aim.',
          'The conclusion converts a design rule into a disclosure rule, and '
          'the final line offers the resistance a proposal would attract as '
          'evidence for it. That inference is slightly cheeky and is exactly '
          'the kind of thing a band 8 answer can afford.'],
         criterion=[('Supporting an aim while predicting the failure',
                     'Task Response'),
                    ('Showing both drafting strategies fail',
                     'Task Response'),
                    ('Converting a design rule into a disclosure rule',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Qualification and scope: only, even, at least',
    explain=('At this level the small qualifiers do precise work, and '
             'misplacing one changes the claim. Put the word immediately '
             'before what it limits.'),
    examples=['Designing for time spent and designing for value are not the '
              'same aim.',
              'Only the engagement measure is published weekly.',
              'Even the designers are not immune to the mechanism.',
              'At least four applications account for most of what arrives.'],
    task='Rewrite each sentence so that the qualifier limits the right '
         'thing.',
    items=[('The company only measures engagement.',
            'The company measures engagement only weekly, and measures '
            'satisfaction not at all.'),
           ('Even users complain about notifications.',
            'Even the designers who built the notification system silence '
            'it on their own devices.'),
           ('At least the limit produces a prompt.',
            'The limit produces at least a prompt, which is less than most '
            'parents expect and more than nothing.'),
           ('Only four per cent respond.',
            'Only four per cent respond, which on a base of two hundred '
            'million is a selection problem rather than a precision one.'),
           ('They only changed the button.',
            'They changed only the position of the button, and nineteen per '
            'cent of the behaviour disappeared.')]),
   vocab=[('variable reward', 'a reward that arrives unpredictably'),
          ('friction', 'anything that makes an action slightly harder'),
          ('autoplay', 'content starting without being chosen'),
          ('session length', 'how long a single period of use lasts'),
          ('proxy metric', 'a number stood in for what is really wanted'),
          ('cadence', 'how often something is reported'),
          ('open loop', 'an unfinished matter that holds attention'),
          ('reinstated', 'put back after being removed')],
   expr=[('Designing for time spent and designing for value are not the '
          'same aim', 'separates two objectives that are usually '
          'conflated'),
         ('beaten by the dashboard',
          'describes losing an argument to a metric'),
         ('it is a selection problem, not a precision problem',
          'reclassifies an objection to a sample'),
         ('nobody has asked since whether it tracks anything a user would '
          'recognise', 'names an unexamined assumption in an '
          'organisation')],
   trans=['whereas', 'that said', 'the case for it', 'the difficulty'],
  ),

  dict(
   sub='Where the hours go',
   step=3,
   read=[
    dict(heading='Measured use against reported use',
         kind='Data article',
         task='Matching information and True/False/Not Given',
         band='gt_work', qtype='Questions 33-38',
         figure=_USE,
         paras=[
          'The chart shows two measures of the same behaviour for four age '
          'groups: how long people said they used their phones each day, and '
          'how long the device recorded. The two series are drawn from the '
          'same individuals, which is what makes the comparison worth '
          'anything.',
          'Every group underestimates, and the direction never reverses. '
          'Those aged 13 to 17 reported 3.1 hours against a measured 6.8; '
          'the 18 to 29 group 3.4 against 5.9; the 30 to 49 group 2.6 '
          'against 3.9; and those over 50 reported 1.5 against 2.1.',
          'The gap is therefore the finding rather than either series. It '
          'runs from 0.6 hours in the oldest group to 3.7 in the youngest, '
          'and expressed proportionally it is larger still: the oldest group '
          'under-reports by about a third of its true figure and the '
          'youngest by more than half.',
          'Two explanations are usually offered and the evidence supports '
          'the less flattering one only partly. The first is deliberate '
          'understatement. The second is that people recall deliberate '
          'episodes — sitting down to watch something, a long conversation — '
          'and do not recall the thirty-second checks, of which the median '
          'participant in this study made fifty-eight a day.',
          'The second explanation accounts for most of the gap, and there is '
          'a clean test for it. Where participants were asked to report '
          'immediately after a period rather than at the end of a week, the '
          'gap narrowed by roughly two thirds in every age group, which '
          'deliberate understatement would not predict.',
          'There is a methodological caution that applies to both series '
          'and is rarely stated. The device measures when the screen is lit '
          'and an application is in the foreground, which counts a phone '
          'left unlocked on a table and does not count time spent listening '
          'with the screen off. Neither error is small and they run in '
          'opposite directions, so the measured series is more precise than '
          'the reported one without being straightforwardly correct.',
          'The practical consequence is for research rather than for '
          'individuals. Any study relating phone use to an outcome using '
          'self-reported hours is using a variable whose error is '
          'systematic, correlated with age, and larger than most of the '
          'effects being looked for. A finding based on such a variable can '
          'be produced or destroyed by the measurement method alone.'],
         items=[
          ('Which paragraph gives the proportional size of the gap?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1,
           'A third for the oldest group, more than half for the '
           'youngest.',
           {0: 'Paragraph 2 gives the four pairs of figures.', 2: 'Paragraph 4 gives the two explanations.', 3: 'Paragraph 5 describes a test between the two '
               'explanations.'}),
          (
           'Which paragraph describes a test between the two '
           'explanations?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'],
           1, 'Reporting immediately narrowed the gap by two thirds.',
           {0: 'Paragraph 4 gives the two explanations.', 2: 'Paragraph 6 identifies errors in the measured series.', 3: 'Paragraph 7 draws the consequence for research.'}),
          ('Which paragraph identifies errors in the measured series?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 4'],
           1,
           'A phone left unlocked is counted and audio with the screen '
           'off is not.',
           {0: 'Paragraph 5 describes the test between explanations.', 2: 'Paragraph 7 draws the consequence for research.', 3: 'Paragraph 4 gives the two explanations.'}),
          ('The 13 to 17 group reported 3.1 hours against a measured '
           '____________ hours.', None, '6.8',
           'Paragraph 2, the largest gap of the four groups.'),
          (
           'Reported use was lower than measured use in every age '
           'group.', ['True', 'False', 'Not Given'], 0,
           'Paragraph 2 says every group underestimates and the '
           'direction never reverses.',
           {1: 'False would need one group to over-report, and '
               'paragraph 2 denies it.', 2: 'Not Given is wrong because paragraph 2 gives all four '
               'pairs of figures.'}),
          (
           'The device measure counts time spent listening with the '
           'screen off.', ['True', 'False', 'Not Given'], 1,
           'Paragraph 6 says it counts a lit screen and does not count '
           'listening with it off.',
           {0: 'True contradicts paragraph 6, which lists this as one '
               'of two errors.', 2: 'Not Given is wrong because paragraph 6 names both '
               'errors.'})])],
   listen=[
    dict(heading='A researcher on self-reported data', part='Part 4',
         task='A lecture on measurement error', band='l4',
         qtype='Questions 39-44',
         figure=_USE,
         script=[
          ('Researcher', 'This chart is the reason I no longer accept '
           'reviews of papers that use self-reported screen time, and I want '
           'to take you through why the gap rather than either bar is the '
           'thing you should be looking at.'),
          ('Researcher', 'Four age groups, two measures, same people. '
           'Thirteen to seventeen say three point one hours and the device '
           'records six point eight. Eighteen to twenty-nine, three point '
           'four against five point nine. Thirty to forty-nine, two point '
           'six against three point nine. Over fifty, one point five against '
           'two point one.'),
          ('Researcher', 'Everybody underestimates. Nobody over-estimates. '
           'And the gap is not constant: it is three point seven hours in '
           'the youngest group and nought point six in the oldest, which '
           'means that the error is correlated with the variable most of '
           'these studies are controlling for.'),
          ('Researcher', 'Now, why do people underestimate? The '
           'uncharitable answer is that they are embarrassed. The evidence '
           'mostly says otherwise. People recall episodes — sitting down to '
           'watch something — and do not recall checks, and the median '
           'participant here checked fifty-eight times a day. You cannot '
           'recall fifty-eight of anything.'),
          ('Researcher', 'And there is a clean test. Ask people immediately '
           'after a period instead of at the end of the week and the gap '
           'closes by about two thirds. Embarrassment would not do that. '
           'Forgetting would, and does.'),
          ('Researcher', 'One caution about my own measure before anybody '
           'quotes it at me. The device counts screen-on with an app in '
           'front. That counts a phone face-up on a table and misses an '
           'hour of audio with the screen dark. Both errors are '
           'substantial, they go in opposite directions, and I would rather '
           'you treated the measured series as better than the reported one '
           'than as correct.'),
          ('Researcher', 'The consequence is the part that matters for your '
           'own work. If the error in your exposure variable is systematic, '
           'correlated with age, and larger than the effect you are hunting, '
           'then your result is a property of your instrument. I can produce '
           'or destroy most published findings in this field by changing '
           'nothing except how the hours were obtained.'),
          ('Researcher', 'So what should you do? Not abandon self-report, '
           'which would end most research in the area. Collect both from a '
           'subsample, estimate the error, and correct for it, which is '
           'tedious and is the only honest route. And when you review a '
           'paper that has not done it, say so in the first line rather '
           'than in a final paragraph nobody reaches.')],
         items=[
          ('The over-50 group reported 1.5 hours against a measured',
           ['1.9 hours', '2.1 hours', '3.9 hours', '6.8 hours'], 1,
           'The smallest gap of the four groups.',
           {0: 'No figure of that size appears for this group.', 2: '3.9 hours is the measured figure for the 30 to 49 '
               'group.', 3: '6.8 hours is the measured figure for 13 to 17.'}),
          ('The gap ranges from',
           ['0.2 to 1.1 hours', '0.6 to 3.7 hours', '1.0 to 2.0 hours', '2.0 to 5.0 hours'],
           1, 'Oldest group to youngest group.',
           {0: 'Narrower than the range he reports.', 2: 'Neither end matches the figures he gives.', 3: 'Wider at the bottom than the gap he reports.'}),
          ('The researcher says the main cause of under-reporting is',
           ['embarrassment', 'failure to recall brief checks', 'misunderstanding the question', 'deliberate deception'],
           1, 'The median participant checked fifty-eight times a day.',
           {0: 'He says the evidence mostly says otherwise.', 2: 'Misunderstanding the question is not his explanation.', 3: 'He rules out deliberate understatement as the main '
               'cause.'}),
          ('The clean test is to ask people',
           ['twice', 'immediately after a period', 'in writing', 'anonymously'],
           1, 'Which closes the gap by about two thirds.',
           {0: 'Asking twice is not the test he describes.', 2: 'The medium of the question is not what he varies.', 3: 'Anonymity is not the variable in the test.'}),
          ('The device measure wrongly counts',
           ['audio with the screen off', 'a phone left face-up on a table', 'time on another device', 'notifications'],
           1,
           'While missing screen-off listening, in the opposite '
           'direction.',
           {0: 'Screen-off audio is what the measure misses.', 2: 'Other devices are outside the measure entirely.', 3: 'Notifications are not what the measure counts.'}),
          ('His conclusion about published findings is that he could',
           ['replicate them all', 'produce or destroy most by changing the measurement method', 'confirm the largest effects', 'improve them with bigger samples'],
           1, 'Because the error is larger than the effects sought.',
           {0: 'He says the findings depend on the instrument.', 2: 'He makes no exception for the largest effects.', 3: 'Sample size is not what he says would fix them.'})])],
   speak=dict(
    part='Part 3', focus='Measuring behaviour',
    intro=('Five or six sentences. Try once to say that an error in a '
           'measure is systematic rather than random.'),
    qs=['How accurately do people describe their own behaviour?',
        'Should researchers rely on what people tell them?',
        'Is it intrusive to measure behaviour directly?',
        'What would make a study of this kind convincing?'],
    shape=[('answer', 'Much less accurately than the studies relying on it '
            'assume.'),
           ('support', 'Every age group under-reports phone use and the '
            'youngest by more than half.'),
           ('follow-up', 'Mostly because nobody can recall fifty-eight '
            'brief checks.'),
           ('support', 'The important part is that the error grows with '
            'age, in one direction.'),
           ('follow-up', 'So it is systematic rather than random, which '
            'means a bigger sample does not help.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Reported and measured phone use, four age groups',
         prompt=('The chart below shows how long people in four age groups '
                 'said they used their phones each day and how long their '
                 'devices recorded. Summarise the information by selecting '
                 'and reporting the main features, and make comparisons '
                 'where relevant. Write at least 150 words.'),
         figure=_USE,
         model=[
          'The bar chart compares self-reported and device-measured daily '
          'phone use across four age groups. Overall, every group reported '
          'less time than was recorded, and the difference between the two '
          'figures narrows steadily with age, from 3.7 hours among '
          'thirteen- to seventeen-year-olds to 0.6 hours among those over '
          'fifty.',
          'Measured use falls consistently across the age groups. It is '
          'highest in the youngest group at 6.8 hours a day, declining to '
          '5.9 hours among 18- to 29-year-olds, 3.9 hours among 30- to '
          '49-year-olds and 2.1 hours among those aged 50 and over.',
          'Reported use follows a flatter path and does not decline '
          'uniformly. The 18 to 29 group reported the highest figure of any '
          'group at 3.4 hours, slightly above the 3.1 hours reported by '
          'teenagers, after which reported use falls to 2.6 and then 1.5 '
          'hours.',
          'The gap between the two series is therefore the clearest feature '
          'of the chart, and it is proportionally as well as absolutely '
          'largest among the young: the youngest group reported less than '
          'half of its recorded use, while the oldest group reported around '
          'seventy per cent of its own.'],
         notes=[
          'The Overall statement describes the gap and the way it changes '
          'with age, not the height of either series. Where two series run '
          'in parallel, the distance between them is the finding and '
          'describing the bars one at a time will not score.',
          'The second and third paragraphs note that only one series '
          'declines uniformly: reported use peaks in the 18 to 29 group, not '
          'among teenagers. Spotting the one point where the two series '
          'behave differently is the kind of selection the rubric is '
          'asking for.',
          'The final paragraph quantifies the gap proportionally as well as '
          'absolutely, which is what shows that it is not simply a fixed '
          'amount of forgetting across all groups.'],
         criterion=[('An Overall statement about the gap, not the series',
                     'Task Achievement'),
                    ('Noting where the two series behave differently',
                     'Task Achievement'),
                    ('Quantifying the gap proportionally and absolutely',
                     'Lexical Resource')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing a systematic gap between two series',
    fix=dict(
     text=('The two series run in parallel but one is consistently above the '
           'other. The gap between them is systematically, at about eight '
           'percentage points in every year. Neither line crosses the other at '
           'any point in the period, which mean the difference is not caused '
           'by a single year. The gap is widest in 2018, when it reach eleven '
           'points.'),
     faults=[('The gap between them is systematically',
              'The gap between them is systematic',
              ('After is the word describes the gap, so it needs the adjective '
               'systematic.')),
             ('which mean the difference is not caused by a single year',
              'which means the difference is not caused by a single year',
              ('Which stands for the preceding clause and takes a singular '
               'verb.')),
             ('when it reach eleven points',
              'when it reached eleven points',
              ('The sentence is about 2018, a finished year, so the verb is '
               'past.'))]),
    explain=('Where two series never cross, the language of comparison has '
             'to describe a relationship rather than two shapes. These '
             'patterns do it compactly.'),
    examples=['Every group underestimates, and the youngest underestimates '
              'most.',
              'The gap narrows steadily with age.',
              'The direction never reverses.',
              'The youngest group reported less than half its recorded '
              'use.'],
    task='Rewrite each sentence so that it describes the gap rather than '
         'the series.',
    items=[('Teenagers said 3.1 and the devices recorded 6.8.',
            'Teenagers reported less than half of their recorded use, the '
            'widest discrepancy of the four groups.'),
           ('Older people use their phones less.',
            'The gap between reported and recorded use falls with age, to '
            'under an hour among those over fifty.'),
           ('Both measures decline with age.',
            'Measured use declines steadily with age while reported use '
            'declines more slowly, so the two converge.'),
           ('People are not accurate.',
            'Under-reporting occurs in every group and in one direction '
            'only.'),
           ('The error is bigger for young people.',
            'The discrepancy is largest among the youngest group both in '
            'hours and as a proportion of recorded use.')]),
   vocab=[('self-report', 'data supplied by the person being studied'),
          ('telemetry', 'data recorded automatically by a device'),
          ('recall bias', 'systematic error in what people remember'),
          ('discrepancy', 'a difference between two accounts of one thing'),
          ('under-report', 'to state a figure lower than the true one'),
          ('systematic', 'running in one direction rather than at random'),
          ('exposure variable', 'the thing whose effect is being studied'),
          ('foreground', 'the application currently on the screen')],
   expr=[('Every group underestimates, and the youngest underestimates '
          'most', 'states a direction and a gradient together'),
         ('you cannot recall fifty-eight of anything',
          'explains a bias without attributing motive'),
         ('your result is a property of your instrument',
          'attributes a finding to the method'),
         ('better than the reported one rather than correct',
          'grades a measure without endorsing it')],
   trans=['while', 'by contrast', 'taken together', 'the gap is therefore'],
  ),

  dict(
   sub='Why attention is a market',
   step=4,
   read=[
    dict(heading='The thing being sold is you',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'The phrase "if you are not paying, you are the product" is '
          'accurate enough to be useful and crude enough to obscure the '
          'mechanism it describes. What is sold is neither the user nor '
          'their data in most cases, but a probability: the chance that a '
          'specific message placed in front of a specific person will '
          'produce a specific behaviour. Understanding that this is the unit '
          'of trade explains almost every design decision that otherwise '
          'looks arbitrary. It also explains why the industry finds the '
          'slogan irritating and cannot produce a better one: the accurate '
          'description takes a paragraph and the inaccurate one takes eight '
          'words.',
          'The structure is what economists call a two-sided market. A '
          'platform serves two groups who need each other and would not find '
          'each other efficiently alone, and it charges one side while '
          'subsidising the other. Payment card networks, newspapers, '
          'shopping centres and dating applications all work this way, and '
          'in every case the subsidised side is the one whose participation '
          'the paying side is buying access to. None of these '
          'arrangements is novel, and the oldest of them predates '
          'electricity.',
          'Two-sided markets have a characteristic property that is widely '
          'misunderstood: the subsidised side is not being cheated. A '
          'newspaper reader has historically paid a fraction of the cost of '
          'production and received a product assembled at great expense, and '
          'that arrangement was not a scandal. What changes with digital '
          'platforms is not the structure but the precision with which the '
          'paying side can specify what it is buying. That is a '
          'difference of degree which has become a difference of kind, in '
          'the way that differences of degree occasionally do.',
          'That precision is the whole of the commercial advance, and it is '
          'where the harms live. An advertiser buying newspaper space bought '
          'an audience defined by the publication. An advertiser buying '
          'placement on a platform buys an audience defined by inferred '
          'characteristics, down to units of a few thousand people, and can '
          'measure within hours whether the purchase produced the behaviour '
          'it wanted. The second capability matters more than the first. '
          'An audience you can define is useful; an audience whose '
          'response you can measure within hours is a feedback loop, and '
          'feedback loops optimise.',
          'The consequence for design is direct and is rarely stated so '
          'plainly. The platform’s revenue is a function of the number of '
          'opportunities to place a message and the accuracy with which '
          'placement can be targeted. Time spent raises the first term and '
          'behavioural data raises the second, so a feature that increases '
          'either is funded and a feature that reduces either must be '
          'justified against a measurable loss. Nothing in that sentence '
          'requires anybody to want a worse product, which is why '
          'arguments conducted in terms of corporate intention tend to '
          'miss.',
          'This is also why appeals to the goodwill of individual designers '
          'achieve so little. Nobody in the process is choosing between the '
          'user’s interests and the company’s; they are choosing between a '
          'metric that moves this quarter and a diffuse benefit that no '
          'system measures. A designer who declines on principle is replaced '
          'by the next proposal in the queue, and the structure is '
          'unchanged.',
          'There is a further feature of this market that distinguishes it '
          'from the newspaper case and is the strongest argument for '
          'treating it differently. In a two-sided market with strong '
          'network effects, the subsidised side cannot easily leave, because '
          'the value of the service to them is largely the presence of the '
          'other users. Dissatisfaction therefore does not produce exit in '
          'the way it does in an ordinary market, and the usual discipline '
          'on a seller is absent. Switching costs in an ordinary market '
          'are the price of the alternative; here they are the loss of '
          'everybody you came for, which is not a price anybody can '
          'quote.',
          'Economists call the resulting costs externalities: effects that '
          'fall on somebody other than the parties to the transaction. The '
          'transaction here is between a platform and an advertiser. Any '
          'effect on the user that neither of them values is, by '
          'construction, outside the price, and a market cannot be expected '
          'to correct something it does not price. This is the same '
          'argument made about effluent in a river and it is not '
          'weakened by the fact that the product in question is '
          'pleasant.',
          'None of this establishes that the harms are large, which is a '
          'separate empirical question taken up in the next cycle. What it '
          'establishes is structural: that the incentives run in one '
          'direction, that the usual market correction is weakened by '
          'network effects, and that the costs at issue are by definition '
          'not in the price. Those three facts together are the standard '
          'case for intervention in any industry, and they are true here '
          'whatever the size of the harm turns out to be. What the size '
          'determines is the strength of the remedy, not whether the case '
          'for one exists.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['What is actually sold', 'The two-sided market', 'Precision as the commercial advance', 'Why network effects matter'],
           1, 'A platform charging one side and subsidising the other.',
           {0: 'What is sold is paragraph 1, the probability.', 2: 'Precision as the commercial advance is the heading for '
               'paragraph 4.', 3: 'Network effects are paragraph 7, on exit.'}),
          ('Choose the best heading for paragraph 4.',
           ['The two-sided market', 'Precision as the commercial advance', 'The consequence for design', 'Externalities'],
           1,
           'Audiences defined by inferred characteristics in small '
           'units.',
           {0: 'The two-sided market is the heading for paragraph 2.', 2: 'The consequence for design is paragraph 5.', 3: 'Externalities are paragraph 8.'}),
          ('Choose the best heading for paragraph 7.',
           ['The consequence for design', 'Why appeals to designers fail', 'Why network effects prevent exit', 'Externalities'],
           2,
           'Dissatisfaction does not produce exit as in an ordinary '
           'market.',
           {0: 'The consequence for design is paragraph 5.', 1: 'Why appeals to designers fail is paragraph 6.', 3: 'Externalities are paragraph 8.'}),
          (
           'The writer believes the subsidised side of a two-sided '
           'market is necessarily cheated.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 3 says explicitly that it is not.',
           {0: 'Yes would need cheating; paragraph 3 denies it '
               'explicitly.', 2: 'Not Given is wrong because the subsidised side is '
               'discussed.'}),
          (
           'The writer believes this passage establishes that the '
           'harms are large.', ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph says that is a separate empirical '
           'question.',
           {0: 'Yes would need that conclusion; the final paragraph '
               'calls it a separate question.', 2: 'Not Given is wrong because the writer states what the '
               'passage shows.'}),
          ('What is sold is best described as a ____________ that a message '
           'will produce a behaviour.', None, 'probability',
           'Paragraph 1, which the writer calls the unit of trade.'),
          ('Costs falling on somebody outside the transaction are called '
           '____________.', None, 'externalities',
           'Paragraph 8, which is why the market cannot correct them.'),
          ('A designer who refuses on principle is replaced by the next '
           '____________ in the queue.', None, 'proposal',
           'Paragraph 6, leaving the structure unchanged.')])],
   listen=[
    dict(heading='A lecture on the attention economy', part='Part 4',
         task='A lecture on two-sided markets', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', '"If you are not paying, you are the product." It is '
           'a good slogan and it hides the mechanism, and the mechanism is '
           'what you need if you are going to say anything useful about '
           'regulation.'),
          ('Lecturer', 'What is sold is not you and in most cases is not '
           'your data either. What is sold is a probability: the chance that '
           'this message, in front of this person, at this moment, produces '
           'a purchase. Once you see that as the unit of trade, the design '
           'decisions stop looking arbitrary.'),
          ('Lecturer', 'The structure is a two-sided market. Two groups who '
           'need each other, one of them charged and one of them subsidised. '
           'Payment cards, shopping centres, newspapers, dating apps. And '
           'note that the subsidised side is not being swindled: a newspaper '
           'reader paid a fraction of what the paper cost to produce and '
           'nobody called that a scandal.'),
          ('Lecturer', 'What changed is precision. An advertiser in a '
           'newspaper bought the readership of that newspaper. An advertiser '
           'on a platform buys an audience defined by inferred traits, in '
           'units of a few thousand people, and knows within hours whether '
           'it worked. That precision is the whole commercial advance, and '
           'it is also where the trouble is.'),
          ('Lecturer', 'From which the design follows mechanically. Revenue '
           'equals opportunities to place a message, times accuracy of '
           'placement. Time spent raises the first. Behavioural data raises '
           'the second. So a feature that raises either gets built, and a '
           'feature that lowers either has to defend itself against a number '
           'on a dashboard.'),
          ('Lecturer', 'Now the point that matters for policy. In an '
           'ordinary market, if I treat you badly you leave. In a market '
           'with strong network effects, you cannot leave, because what you '
           'value is the presence of everybody else. So the normal '
           'discipline on a seller is weakened, and the costs that fall on '
           'you are, by construction, not in the price that the platform and '
           'the advertiser agreed.'),
          ('Lecturer', 'And that is a structural argument, which is why I '
           'teach it before the evidence on harm. Even if the harms turn out '
           'to be modest, you have an industry whose incentives run one way, '
           'whose customers cannot exit, and whose costs are outside the '
           'price. In any other sector that combination is the textbook case '
           'for intervention and nobody argues about it.'),
          ('Lecturer', 'One qualification before you write this in an '
           'essay. A structural case tells you that intervention is '
           'justified; it does not tell you what the intervention should '
           'be, and the gap between those two is where most policy in this '
           'area has gone wrong. I would rather you ended an essay with '
           'one narrow proposal than with a paragraph of structural '
           'argument and nothing to do about it.')],
         items=[
          ('The lecturer says what is sold is',
           ['the user', 'the user\u2019s data', 'a probability of a behaviour', 'advertising space'],
           2, 'Which he calls the unit of trade.',
           {0: 'He says the user is not what is sold.', 1: 'He says the data is not what is sold in most cases.', 3: 'Space was what a newspaper sold, which is his '
               'contrast.'}),
          ('He says the subsidised side of a two-sided market',
           ['is always exploited', 'is not necessarily being swindled', 'pays indirectly', 'subsidises itself'],
           1, 'Giving the historical newspaper reader as the example.',
           {0: 'He says the opposite about the newspaper reader.', 2: 'He describes a subsidy, not an indirect payment.', 3: 'The paying side subsidises the other.'}),
          ('What changed with digital platforms is',
           ['the structure', 'the precision of targeting', 'the price', 'the number of advertisers'],
           1,
           'Audiences in units of a few thousand, measurable within '
           'hours.',
           {0: 'He says the structure is not new.', 2: 'Price is not what he says changed.', 3: 'Advertiser numbers are not his point.'}),
          ('In his formulation, revenue is a function of',
           ['users times time', 'opportunities to place a message times accuracy of placement', 'advertisers times price', 'data times storage'],
           1, 'Which explains which features get built.',
           {0: 'Users times time is nearer the first term alone.', 2: 'Advertiser numbers are not in his formulation.', 3: 'Storage is not part of the revenue function.'}),
          ('Network effects matter because dissatisfied users',
           ['complain more', 'cannot easily leave', 'pay more', 'are more valuable'],
           1,
           'So the normal market discipline on a seller is weakened.',
           {0: 'Complaint volume is not what he says changes.', 2: 'The subsidised side does not pay at all.', 3: 'Value to advertisers is a separate matter.'}),
          (
           'He teaches the structural argument before the evidence on '
           'harm because',
           ['the evidence is weak', 'the structural case holds even if harms are modest', 'it is simpler', 'students prefer it'],
           1, 'Incentives one way, no exit, costs outside the price.',
           {0: 'He takes the evidence up in the next cycle rather than '
               'dismissing it.', 2: 'Simplicity is not his reason for the order.', 3: 'Student preference is not his reason.'})])],
   speak=dict(
    part='Part 3', focus='Free services and what they cost',
    followup=[(('You say the services are not free. Who should pay for the '
                'ones people use daily?'),
               ('Users, where the service can be priced, and I accept that '
                'this excludes people. The honest options are a subscription, '
                'a public provider, or advertising, and advertising is the one '
                'that looks free while being paid for in attention and in '
                'data, which is a price nobody is quoted.')),
              ('Can competition solve problems of this kind?',
               ('Not on its own, because the product people choose between is '
                'not the product being sold. Two networks competing for users '
                'compete on engagement, which is the mechanism causing the '
                'harm, so more competition on that dimension makes it worse '
                'rather than better.')),
              ('Should there be paid versions without advertising?',
               ('There should be, and I would not expect much from it. Where '
                'they exist, a small minority subscribes, which means the ad- '
                'funded version remains the default for almost everybody and '
                'the harms stay where they were. It converts a public problem '
                'into a private solution for people who can afford one.')),
              ('What would you regulate, then?',
               ('The design features with the clearest evidence behind them, '
                'rather than the content: autoplay, infinite scroll, and '
                'notifications timed to re-engage. Those are decisions '
                'somebody made and can unmake, and they are testable, which '
                'content moderation rules are not.'))],
    intro=('Five or six sentences. Try once to say what a cost falling '
           'outside a price means.'),
    qs=['Are free online services really free?',
        'Who should pay for the services people use every day?',
        'Can competition solve problems of this kind?',
        'Should there be paid versions without advertising?'],
    shape=[('answer', 'They are paid for by a transaction you are not a '
            'party to.'),
           ('support', 'A platform sells advertisers the probability that a '
            'message changes a behaviour.'),
           ('follow-up', 'Any effect on me that neither side values is '
            'outside that price.'),
           ('support', 'Normally I would leave, which disciplines a '
            'seller.'),
           ('follow-up', 'But what I value is that everybody else is there, '
            'so leaving costs me the thing I came for.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Name the premise under each idea',
         prompt=('Should advertising-funded platforms be regulated like '
                 'broadcasters? Brainstorm ten ideas, run the six tests, and '
                 'name the premise under each survivor. Do not write the '
                 'essay yet.'),
         plan=('Platforms should be regulated on the obligations that '
               'follow from scale rather than on the model that funds them, '
               'because the broadcasting analogy rests on a premise about '
               'scarcity that no longer holds anywhere',
               [('The broadcasting rules rest on a premise about a scarce '
                 'public resource',
                 ['spectrum was finite and allocated by the state',
                  'the obligations were the price of a licensed '
                  'monopoly']),
                ('What justifies obligations now is reach rather than '
                 'scarcity',
                 ['a platform decides what millions see, without '
                  'scarcity',
                  'that is the feature any workable rule has to attach '
                  'to'])]),
         notes=[
          'The premise under the broadcasting analogy is historical and is '
          'almost never stated: broadcasting was regulated because spectrum '
          'was scarce and had to be allocated, and the public service '
          'obligations were the price of receiving a slice of it. Name that '
          'and the analogy either has to be defended differently or '
          'abandoned.',
          'This is the clearest case in the volume of a premise test doing '
          'real work. The idea "platforms are like broadcasters" passes all '
          'six earlier tests comfortably and fails the seventh, and an essay '
          'built on it would have been attacked at exactly that point.',
          'What replaces it is narrower and defensible: an obligation '
          'attached to reach. Notice that the replacement is still an '
          'argument for regulation, so the premise test strengthened the '
          'position rather than abandoning it.'],
         criterion=[('Naming a historical premise inside an analogy',
                     'Task Response'),
                    ('Replacing a failed premise rather than abandoning the '
                     'position', 'Task Response')],
         instruct='  Produce the brainstorm, the tests and the premise under '
                  'each survivor. You will write it in cycle 5.',
         lines=12)],
   gram=dict(
    point='Metadiscourse: saying what a paragraph is doing',
    explain=('In a long argument the reader needs to know whether a '
             'paragraph is establishing, conceding, qualifying or '
             'concluding. At band 7 that is signalled once per paragraph and '
             'never twice.'),
    examples=['The user is not the customer, which explains the design.',
              'None of this establishes that the harms are large.',
              'What it establishes is structural.',
              'There is a further feature that distinguishes this case.'],
    task='Rewrite each sentence so that it signals the move the paragraph '
         'is making.',
    items=[('Platforms make money from advertising.',
            'The structure to understand first is that two groups are being '
            'served, and only one of them is charged.'),
           ('The harms might not be large.',
            'None of this establishes the size of the harm, which is a '
            'separate empirical question.'),
           ('Here is another point.',
            'There is a further feature of this market that distinguishes it '
            'from the newspaper case.'),
           ('I disagree with that analogy.',
            'The analogy rests on a premise about scarcity that no longer '
            'holds.'),
           ('So regulation is justified.',
            'What the argument establishes is structural rather than '
            'empirical, and that is sufficient for the conclusion drawn '
            'here.')]),
   vocab=[('externality', 'a cost falling on somebody outside a deal'),
          ('two-sided market', 'a market serving two groups who need each '
           'other'),
          ('monetisation', 'turning activity into revenue'),
          ('subsidised side', 'the group that is not charged'),
          ('network effect', 'value that rises with the number of users'),
          ('exit', 'leaving a service, as a discipline on a seller'),
          ('inferred trait', 'a characteristic guessed rather than given'),
          ('placement', 'where a message is shown and to whom')],
   expr=[('The user is not the customer, which explains the design',
          'derives a design from a market structure'),
         ('a market cannot correct something it does not price',
          'states why an externality persists'),
         ('replaced by the next proposal in the queue',
          'explains why individual refusal changes nothing'),
         ('true whatever the size of the harm turns out to be',
          'separates a structural claim from an empirical one')],
   trans=['consequently', 'which in turn', 'as a result',
          'there is a further feature'],
  ),

  dict(
   sub='Whether the harm is demonstrated',
   step=5,
   read=[
    dict(heading='Correlation, birth year and the studies that disagree',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 59-66',
         paras=[
          'Few empirical questions have been argued about more publicly, or '
          'understood less, than whether social media damages the mental '
          'health of adolescents. The literature is large, the effects '
          'reported are small, and the disagreement between competent '
          'researchers is genuine rather than a product of bad faith on '
          'either side. It repays going through slowly.',
          'Begin with what is agreed. Across dozens of large cross-sectional '
          'studies, there is a consistent negative association between '
          'self-reported social media use and self-reported wellbeing among '
          'adolescent girls. The association is robust in the sense that it '
          'appears in very nearly every dataset. It is also small: the usual '
          'estimates put it at between 0.3 and 0.9 per cent of the variation '
          'in wellbeing, which is comparable to the association with wearing '
          'spectacles and smaller than that with regularly eating potatoes. '
          'Associations of that size are not nothing and they are not what '
          'the public debate is about, which is the first thing to notice '
          'before anything else is said.',
          'Those comparisons have been widely quoted and are more '
          'double-edged than the people quoting them notice. A small '
          'average association can conceal a large effect on a minority, and '
          'the distribution matters more than the mean for a question about '
          'harm. If three per cent of users are seriously affected and the '
          'rest are not, the average will look like the potato finding and '
          'the policy implication will be nothing like it. Nobody has '
          'characterised that distribution properly, which means the '
          'question at issue has not been measured rather than having '
          'been measured and found small.',
          'The second agreed point is about direction. These are '
          'correlations, and reverse causation is not merely a theoretical '
          'possibility here: adolescents who are unhappy use more social '
          'media, which is well documented, and the same correlation would '
          'be produced by that mechanism alone. The studies that follow the '
          'same individuals over time find small effects running in both '
          'directions, with the larger of the two ordinarily running from '
          'distress to use rather than the reverse. That finding is awkward '
          'for both camps and tends to be cited by neither, which is a '
          'reasonable indication of its reliability.',
          'The third is about measurement, and it is where the previous '
          'cycle becomes relevant. Almost all of this literature uses '
          'self-reported hours, which carry an error that is systematic, '
          'correlated with age, and larger than the effects being measured. '
          'The handful of studies using device-measured use find smaller '
          'associations than the self-report studies, and that pattern is '
          'what measurement error would predict. It is also what a '
          'genuinely smaller effect would produce, and nothing currently '
          'available separates those two explanations.',
          'Where the genuine disagreement lies is in what to do with a body '
          'of evidence of this shape. One camp argues that a small, '
          'contested, possibly reversed association across a population of '
          'hundreds of millions describes a real harm at scale, and that '
          'waiting for better evidence has a cost measured in children. The '
          'other argues that interventions based on misidentified causes '
          'reliably fail and sometimes do damage, and that the history of '
          'moral concern about new media — novels, radio, television, video '
          'games — is an unbroken record of effects that did not '
          'materialise. Both camps can cite the same five historical '
          'episodes, and do, in support of opposite conclusions about what '
          'those episodes show.',
          'Both of these are serious positions and the second is ordinarily '
          'presented badly. The historical record is not an argument that '
          'nothing is ever harmful; it is an argument about the base rate of '
          'such claims being correct, which is low, and about the '
          'characteristic shape of the error, which is to mistake a change '
          'in what young people do for a change in how they are.',
          'There is one line of evidence that both camps treat as stronger '
          'than the rest and that has had less attention than it deserves. '
          'Studies exploiting the staggered arrival of high-speed internet '
          'or of a specific platform in different regions provide something '
          'closer to a natural experiment, since the timing was determined '
          'by infrastructure rather than by the characteristics of the '
          'people affected. These find effects that are small, positive for '
          'some outcomes and negative for others, and concentrated in the '
          'same subgroup the distributional argument predicts. They are also '
          'the studies with the smallest samples and the fewest outcome '
          'measures, which is the usual price of better identification.',
          'The honest summary is therefore uncomfortable for everybody. The '
          'association is robust and small and of unknown direction; the '
          'average conceals a distribution nobody has characterised '
          'properly; the measurement is poor in a way that inflates the '
          'estimates; and the best-identified studies find small effects '
          'concentrated in a minority. That combination licenses '
          'precautionary action aimed at the minority and does not license '
          'the claim that a generation has been damaged, which is the claim '
          'actually being made in public by people who are citing this '
          'literature.'],
         items=[
          (
           'Which paragraph explains why a small average may conceal a '
           'large effect?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1,
           'Three per cent seriously affected would produce the same '
           'average.',
           {0: 'Paragraph 2 gives the agreed size of the association.', 2: 'Paragraph 4 concerns the direction of causation.', 3: 'Paragraph 5 is about measurement error.'}),
          ('Which paragraph concerns the direction of causation?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           1,
           'Unhappy adolescents use more social media, which is well '
           'documented.',
           {0: 'Paragraph 3 explains why a small average may conceal a '
               'large effect.', 2: 'Paragraph 5 is about measurement error.', 3: 'Paragraph 6 describes the two camps.'}),
          ('Which paragraph describes natural-experiment evidence?',
           ['Paragraph 6', 'Paragraph 7', 'Paragraph 8', 'Paragraph 9'],
           2, 'The staggered arrival of high-speed internet by region.',
           {0: 'Paragraph 6 describes the two camps.', 1: 'Paragraph 7 defends the historical argument.', 3: 'Paragraph 9 gives the honest summary.'}),
          (
           'The writer believes the association between use and '
           'wellbeing does not exist.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 calls it robust across nearly every dataset.',
           {0: 'Yes would need absence; paragraph 2 calls the '
               'association robust.', 2: 'Not Given is wrong because the association is '
               'reported.'}),
          (
           'The writer believes the historical record shows new media '
           'are never harmful.', ['Yes', 'No', 'Not Given'],
           1,
           'Paragraph 7 says it is an argument about base rates, not '
           'about never.',
           {0: 'Yes would need never; paragraph 7 frames it as base '
               'rates.', 2: 'Not Given is wrong because the historical argument is '
               'characterised.'}),
          ('The association accounts for between 0.3 and ____________ per '
           'cent of the variation in wellbeing.', None, '0.9',
           'Paragraph 2, comparable to wearing spectacles.'),
          ('Studies using device-measured use find ____________ '
           'associations than self-report studies.', None, 'smaller',
           'Paragraph 5, which is what measurement error would predict.'),
          (
           'The evidence licenses precautionary action aimed at the '
           '____________.', None, 'minority',
           'The final paragraph, and not the claim that a generation '
           'has been damaged.')])],
   listen=[
    dict(heading='Two psychologists disagree about harm', part='Part 4',
         task='A recorded exchange', band='l4', qtype='Questions 67-72',
         script=[
          ('Chair', 'Professor Lindqvist-Oyelaran argues the evidence '
           'supports action. Dr Abiodun-Reyes argues it does not yet.'),
          ('Abiodun-Reyes', 'I will start where I always start, which is by '
           'agreeing that the association is real. It appears in nearly '
           'every dataset. Anybody telling you the correlation is '
           'manufactured has not read the papers, and that includes people '
           'on my side of this.'),
          ('Lindqvist-Oyelaran', 'And I will agree in return that it is '
           'small, that it is contested in direction, and that the spectacles '
           'comparison is fair as far as it goes.'),
          ('Abiodun-Reyes', 'As far as it goes being the operative phrase, '
           'because I know what you are about to say and I think it is the '
           'strongest thing you have.'),
          ('Lindqvist-Oyelaran', 'Then I will say it. A small average is '
           'compatible with a large effect on a few per cent. If three per '
           'cent of girls are seriously harmed and ninety-seven are not, I '
           'get an average that looks like the potato finding and a public '
           'health problem that looks nothing like it. We are averaging over '
           'the people the question is about.'),
          ('Abiodun-Reyes', 'I accept that completely and it is why I have '
           'stopped quoting the spectacles comparison. My objection is that '
           'nobody has characterised that distribution. You are inferring a '
           'vulnerable minority from the shape of an average, which is a '
           'reasonable hypothesis and is not a finding.'),
          ('Lindqvist-Oyelaran', 'The regional rollout studies find exactly '
           'that pattern.'),
          ('Abiodun-Reyes', 'They find small effects concentrated in '
           'subgroups, yes, and they are the best-identified work in the '
           'field, and they also find positive effects for some outcomes, '
           'which neither of us mentions in interviews.'),
          ('Lindqvist-Oyelaran', 'That is fair and I will add something '
           'against myself. The measurement problem runs my way. '
           'Self-report inflates these estimates, the device-measured '
           'studies find less, and most of what I cite is self-report.'),
          ('Abiodun-Reyes', 'Then can we agree on what the evidence '
           'licenses? Action aimed at an identified minority, yes. The claim '
           'that a generation has been damaged, no.'),
          ('Lindqvist-Oyelaran', 'I can agree to that, and I would add '
           'that the second claim is the one being made on my behalf by '
           'people who cite me, and that I have been slow to correct it '
           'because the correction helps your side.'),
          ('Abiodun-Reyes', 'Would you correct it jointly?'),
          ('Lindqvist-Oyelaran', 'I would, and I would want the first '
           'sentence to be that we both think a vulnerable minority is '
           'likely and nobody has found it, because that is the sentence '
           'that gets a study funded and neither of our press offices '
           'would write it alone.')],
         items=[
          ('Abiodun-Reyes begins by agreeing that',
           ['the effects are large', 'the association is real and appears in nearly every dataset', 'the data is fabricated', 'the question is settled'],
           1, 'Including against people on his own side.',
           {0: 'He agrees the effects are small, not large.', 2: 'He says the correlation is not manufactured.', 3: 'He argues the evidence does not yet settle it.'}),
          ('Lindqvist-Oyelaran\u2019s strongest argument is that',
           ['the studies are new', 'a small average is compatible with a large effect on a few per cent', 'the data is better now', 'the effects are increasing'],
           1,
           'Three per cent seriously harmed would produce that '
           'average.',
           {0: 'Novelty of the studies is not her argument.', 2: 'Data quality is what she later concedes runs against '
               'her.', 3: 'No trend over time is her argument here.'}),
          ('Abiodun-Reyes answers that the vulnerable minority is',
           ['disproved', 'inferred from the shape of an average rather than found', 'too small to matter', 'already identified'],
           1, 'A reasonable hypothesis rather than a finding.',
           {0: 'He calls it a reasonable hypothesis, not disproved.', 2: 'He accepts that a small minority would matter.', 3: 'He says nobody has characterised it properly.'}),
          ('The regional rollout studies are described as',
           ['unreliable', 'the best-identified work in the field', 'too old', 'too small'],
           1,
           'Though they also find positive effects for some outcomes.',
           {0: 'They both treat them as the strongest evidence.', 2: 'Age of the studies is not raised.', 3: 'Small samples are the price, but not how they are '
               'described.'}),
          ('What does Lindqvist-Oyelaran concede against herself?',
           ['Her sample was small', 'The measurement problem runs her way', 'Her funding was commercial', 'She misread a paper'],
           1,
           'Self-report inflates estimates and most of what she cites '
           'is self-report.',
           {0: 'Sample size is not what she concedes.', 2: 'Funding is not mentioned by either.', 3: 'No misreading is admitted.'}),
          ('What do they agree the evidence licenses?',
           ['No action', 'Action aimed at an identified minority', 'A general ban', 'Further funding only'],
           1, 'And not the claim that a generation has been damaged.',
           {0: 'They agree some action is licensed.', 2: 'No general ban is proposed by either.', 3: 'They agree on action as well as on funding a study.'})])],
   speak=dict(
    part='Part 3', focus='Evidence of harm',
    sounds=[('This unit\'s vocabulary is mostly compound and all front- '
             'stressed: SCREEN time, ATtention economy, ENgagement metrics, '
             'NOtification. Get the first element strong and the rest follows.'),
            ('Where a compound is also an argument, the stress carries the '
             'point: it is not screen TIME that matters, it is what the screen '
             'is DOing.'),
            ('Brand-style words and recent coinages are where candidates '
             'hesitate most. Decide your pronunciation before the exam and '
             'then say it without pausing, because the pause costs more than a '
             'wrong vowel.'),
            ('Practise the phrase free at the point of use as one chunk with '
             'one stress. It is four words of grammar and one of content.'),
            ('Record yourself on whether free services are free. Find the '
             'place you slowed down for a term, and say that clause again at '
             'speed.')],
    intro=('The hardest turn in the unit. Try once to say that an average '
           'conceals a distribution.'),
    qs=['Is social media harmful to young people?',
        'How should governments act when evidence is mixed?',
        'Who should decide what children can use?',
        'Why do people disagree so strongly about this?'],
    shape=[('answer', 'The association is real, small, and of uncertain '
            'direction.'),
           ('support', 'It accounts for well under one per cent of the '
            'variation in wellbeing.'),
           ('follow-up', 'But a small average is compatible with serious '
            'harm to a few per cent.'),
           ('support', 'And unhappy adolescents demonstrably use more, '
            'which produces the same correlation.'),
           ('follow-up', 'So I would act for the minority and stop short of '
            'saying a generation has been damaged.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Is social media damaging young people?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some people say social media is damaging young '
                 'people. To what extent do you agree? Write at least 250 '
                 'words.'),
         model=[
          'I agree with a narrow version of this claim and disagree with the '
          'version usually advanced, and the gap between them is almost '
          'entirely a matter of what the evidence will carry.',
          'What is established is less than either side of the public '
          'argument suggests. Across dozens of large studies there is a '
          'consistent negative association between social media use and '
          'wellbeing among adolescent girls, and it is small: under one per '
          'cent of the variation, comparable to associations with things '
          'nobody regulates. It is also of uncertain direction, since '
          'unhappy adolescents demonstrably use more, which would produce '
          'the same correlation without any harm being done.',
          'Those two facts are usually offered as a refutation and they are '
          'not one. A small average is entirely compatible with serious harm '
          'to a small minority, and for a question about harm the '
          'distribution matters more than the mean. If three per cent of '
          'users are badly affected and the rest are unaffected, the average '
          'will be reassuring and the problem will be real. The studies that '
          'come closest to an experiment — those exploiting the staggered '
          'arrival of fast internet by region — find exactly that pattern: '
          'small effects, concentrated in subgroups, and positive on some '
          'measures.',
          'There is also a measurement problem that cuts against the '
          'alarmist case and is rarely mentioned by it. Almost all of this '
          'literature uses self-reported hours, whose error is systematic '
          'and larger than the effects being sought, and the few studies '
          'using device measurement find weaker associations, which is what '
          'measurement error predicts.',
          'To the extent that I agree, then, it is that the evidence '
          'licenses precautionary action directed at an identifiable '
          'minority: default protections for younger accounts, and funding '
          'to characterise the vulnerable group properly, which nobody has '
          'yet done. It does not license the claim that a generation has '
          'been damaged. That claim is being made in public by people citing '
          'this literature, and it is not in it.'],
         notes=[
          'The essay refuses both available positions and specifies what the '
          'evidence carries, which is the "to what extent" question answered '
          'precisely rather than split down the middle.',
          'Paragraph 3 is the pivot and it is generous to the opposing side: '
          'the small average is not a refutation. An essay that explains why '
          'its own best evidence is weaker than it looks is doing the thing '
          'band 8 descriptors mean by a well-developed position.',
          'The last sentence distinguishes what the literature says from '
          'what is said in its name. Separating a body of evidence from its '
          'public use is a sophisticated close and is available in any '
          'science-and-society prompt.'],
         model65=[
                  'Some people say social media is damaging young '
                  'people. I think the evidence shows an association, '
                  'and that the cause is still unclear.',
                  'The association is well established. Across many '
                  'datasets, young people who use social media heavily '
                  'report lower wellbeing. The pattern appears in '
                  'different countries and has been found repeatedly, '
                  'which is more than can be said for many claims '
                  'about young people.',
                  'But association is not cause. Unhappy young people '
                  'may use these services more rather than being made '
                  'unhappy by them, and the studies that can separate '
                  'the two are rare. Historically, every new medium '
                  'from novels to television has been blamed for '
                  'harming the young, and those claims were mostly '
                  'wrong.',
                  'I think the sensible response is to act where the '
                  'harm is specific and measurable, such as sleep lost '
                  'to night-time use, rather than on the general '
                  'claim. That reflects the evidence without waiting '
                  'for a certainty that may never arrive.',
                  ],
         gap65=[
                'It states what the base-rate argument from earlier '
                'media does and does not license, instead of using it '
                'to dismiss the claim.',
                'It names the particular harms that are measurable '
                'now, which is where the recommendation gets its '
                'force.',
                'It separates the empirical question from the design '
                'question about two-sided markets.',
                ],
         criterion=[('Specifying what the evidence carries rather than '
                     'splitting the difference', 'Task Response'),
                    ('Explaining why your own best evidence is weaker than '
                     'it looks', 'Task Response'),
                    ('Separating the literature from its public use',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Effect size and what a correlation licenses',
    explain=('Writing accurately about evidence means saying how big an '
             'effect is, how certain its direction is, and what follows. '
             'These patterns do all three without hedging into '
             'meaninglessness.'),
    examples=['The association is robust and small and of unknown '
              'direction.',
              'A small average is compatible with a large effect on a '
              'minority.',
              'That licenses action aimed at the minority and not the '
              'general claim.',
              'The same correlation would be produced by reverse causation '
              'alone.'],
    task='Rewrite each claim so that it says what the evidence actually '
         'licenses.',
    items=[('Studies show social media harms teenagers.',
            'Studies show a small, consistent association whose direction is '
            'contested, which licenses concern about a subgroup rather than '
            'a general conclusion.'),
           ('The effect is tiny, so there is no problem.',
            'The average effect is small, which is compatible with serious '
            'harm to a minority the averages conceal.'),
           ('Correlation is not causation.',
            'The correlation is equally consistent with distress causing '
            'use, which the longitudinal studies find to be the larger of '
            'the two directions.'),
           ('More research is needed.',
            'What is missing specifically is a characterisation of the '
            'affected subgroup, which no study has yet attempted.'),
           ('The evidence justifies a ban.',
            'The evidence justifies default protections for younger '
            'accounts; a general prohibition rests on a claim the literature '
            'does not support.')]),
   vocab=[('effect magnitude', 'how large a measured relationship is'),
          ('confounder', 'a third factor producing an apparent link'),
          ('reverse causation', 'the outcome causing the supposed cause'),
          ('cross-sectional', 'measured at one point in time'),
          ('longitudinal', 'following the same people over time'),
          ('quasi-experiment', 'a study using a real event in place of '
           'randomisation'),
          ('prior probability', 'how likely a claim is before the evidence'),
          ('phased by region', 'reaching different areas at different times')],
   expr=[('The association is robust and small and of unknown direction',
          'three properties of evidence in one clause'),
         ('we are averaging over the people the question is about',
          'objects to an average on distributional grounds'),
         ('a reasonable hypothesis and not a finding',
          'grades a claim precisely'),
         ('the claim being made in public by people citing this literature',
          'separates evidence from its use')],
   trans=['admittedly', 'nevertheless', 'in short', 'to the extent that'],
  ),
 ],
 technique=dict(
  title='A two-series chart where the gap is the finding',
  body=('Sometimes two series on a chart never cross, run roughly parallel, '
        'and are individually uninteresting. When that happens the question '
        'is not about either series: it is about the distance between them, '
        'whether that distance is constant or changes across the '
        'categories, and whether it ever reverses direction. The failing '
        'answer describes series one, then series two, and never mentions '
        'the gap; it is fluent, accurate and scores badly, because it has '
        'reported the data without selecting anything. Put the gap in the '
        'Overall statement, say what happens to it across the categories, '
        'and quantify it in both absolute and proportional terms — those '
        'two can tell different stories and the difference between them is '
        'often the real finding.'),
  panel=[('Check whether the series cross',
          'If they never do, the gap is the subject and the two series are '
          'the setting.'),
         ('Gap in the Overall statement',
          'Its direction, and whether it widens, narrows or stays '
          'constant.'),
         ('Absolute and proportional',
          '0.6 hours and thirty per cent are different claims. Give both '
          'where they diverge.'),
         ('Find where the pattern breaks',
          'One category usually behaves differently. That is the selection '
          'the rubric wants.')],
  task='Take the chart in cycle 3. Write the Overall statement about the '
       'gap, then the sentence identifying where the pattern breaks.',
  qs=['Do the two series ever cross?',
      'Does the gap widen, narrow or stay constant?',
      'What is the gap in absolute terms at each end?',
      'What is it proportionally, and does that change the story?',
      'Which category behaves differently from the others?']),
 outlining=dict(
  title='Name the premise, then test whether the evidence reaches it',
  body=('The premise test from unit 41 has a second half that is where most '
        'of the value is. Once you have written the sentence that must be '
        'true for your idea to work, ask whether the evidence you were '
        'planning to cite actually establishes that sentence, or whether it '
        'establishes something adjacent. This is the commonest failure in '
        'band 6.5 writing and it is invisible to the writer: the evidence '
        'is real, the premise is plausible, and the gap between them is '
        'never crossed. A correlation does not reach a premise about '
        'causation. A survey does not reach a premise about behaviour. An '
        'average does not reach a premise about a minority. Where the gap '
        'exists, either find different evidence or weaken the premise until '
        'the evidence reaches it — and the second option is usually the '
        'better essay.'),
  frame=('Platforms should be regulated on the obligations that follow from '
         'scale rather than on the model that funds them, because the '
         'broadcasting analogy rests on a premise about scarcity that no '
         'longer holds anywhere',
         [('The broadcasting rules rest on a premise about a scarce public '
           'resource',
           ['spectrum was finite and allocated by the state',
            'the obligations were the price of a licensed monopoly']),
          ('What justifies obligations now is reach rather than scarcity',
           ['a platform decides what millions see, without scarcity',
            'that is the feature any workable rule has to attach to'])]),
  task='For each premise you named in the cycle 4 brainstorm, write the '
       'evidence you would cite and say in one line whether it reaches the '
       'premise or stops short of it.',
  qs=['Which premise is about causation, and is your evidence '
      'correlational?',
      'Which premise is about behaviour, and is your evidence a survey?',
      'Where the evidence stops short, can you weaken the premise?',
      'Does weakening it still support your thesis?',
      'Which idea did you abandon because nothing reaches its premise?'],
  answers=['the harm premise, almost always',
           'the usage premise, where self-report is the only source',
           'usually yes, by restricting the claim to a subgroup or a '
           'period',
           'if it does not, the thesis was resting on the strong version',
           'often the most attractive idea on the list']),
 candos=['I can read a settings page for what each control actually '
         'governs',
         'I can make the gap between two series the subject of a Task 1 '
         'answer',
         'I can explain why a small average is compatible with serious '
         'harm',
         'I can test whether my evidence reaches the premise it is offered '
         'for',
         'I can state what a correlation licenses and what it does not'],
 tip=('When two series on a chart never cross, the gap is the answer. Put '
      'it in the Overall statement, say whether it widens or narrows, and '
      'give it both in absolute terms and as a proportion.'),
)
