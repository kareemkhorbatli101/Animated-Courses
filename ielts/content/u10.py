# -*- coding: utf-8 -*-
"""Unit 10 - Sport and Fitness. IELTS Volume 1, band 5.0."""

_PART = dict(kind='bar',
             title='Participation in five sports, by age group',
             sub='percentage taking part at least once a week, 2024',
             ylab='% taking part weekly',
             cats=['Swimming', 'Football', 'Running', 'Cycling',
                   'Badminton'],
             series=[('16-29', [14.2, 21.6, 18.4, 12.1, 6.3]),
                     ('50-64', [16.8, 3.4, 7.2, 9.6, 4.1])])

UNIT = dict(
 n=10, vol=1, level='B1', band='5.0',
 theme='Sport and Fitness',
 opener=(
   'The last unit of the volume. It begins with a sports centre and '
   'four people explaining why they stopped going, and it ends with the '
   'reason almost everything you read about successful athletes is '
   'misleading. In between you will describe participation figures for '
   'five sports and find out why improvement comes quickly at first and '
   'then slows. The technique page is not a technique: it is the '
   'Reading paper at the back of this book, sixty minutes, no '
   'stopping.'),

 cycles=[
  dict(
   sub='Using the sports centre',
   step=1,
   read=[
    dict(heading='Riverside Centre: membership and classes',
         kind='Notice and timetable',
         task='Table completion and matching features',
         band='gt_short', qtype='Questions 1-6',
         skill=('A timetable is read for the exception',
                ['Four memberships, five classes and two price columns '
                 'is a lot of detail. Find the one row that behaves '
                 'differently from the rest.',
                 'Peak and off-peak definitions are tested in almost '
                 'every notice of this kind, and they are usually in a '
                 'single sentence.']),
         paras=[
          'Full membership is £38 a month and allows use at any time. '
          'Off-peak membership is £24 and may be used before 4 p.m. on '
          'weekdays and at any time at weekends, which surprises people who '
          'assume weekends are peak.',
          'Both memberships include the gym, the pool and all classes '
          'except Pilates, which is taught by an outside instructor and '
          'costs £6 a session for everybody.',
          'A joining fee of £20 is payable once. It is waived in January and '
          'September and is not refunded if a membership is cancelled early.',
          'New members must complete a gym induction before using the '
          'equipment. Inductions last forty minutes, run on Tuesday '
          'evenings and Saturday mornings, and must be booked at '
          'reception rather than online.',
          'Classes may be booked seven days ahead. A place not claimed ten '
          'minutes before the start is released, and three unclaimed '
          'bookings in a month suspend booking for a fortnight.',
          'Membership may be suspended for up to three months in any '
          'year for illness, injury or work abroad, with one month’s '
          'notice in writing. A suspended membership is charged at £5 a '
          'month.'],
         items=[
          ('Which activity costs extra for all members?',
           ['the gym', 'the pool', 'Pilates', 'the induction'], 2,
           'Paragraph 2: £6 a session, taught by an outside '
           'instructor.'),
          ('Off-peak membership may be used at any time at '
           '____________.', None, 'weekends',
           'Paragraph 1, and before 4 p.m. on weekdays.'),
          ('The joining fee is waived in January and '
           '____________.', None, 'September',
           'Paragraph 3, and is not refunded on early cancellation.'),
          ('An induction lasts ____________ minutes.', None, 'forty',
           'Paragraph 4, booked at reception rather than online.'),
          ('A class place is released ____________ minutes before the '
           'start.', None, 'ten',
           'Paragraph 5, if it has not been claimed.'),
          ('A suspended membership is charged at £____________ a '
           'month.', None, '5',
           'Paragraph 6, for up to three months a year.')]),
    dict(heading='Pool rules', kind='Notice', task='Short answer',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'The pool has three lanes during lane swimming and is open '
          'water at other times. Lane swimming runs 06.30 to 09.00 and '
          '17.00 to 19.30 on weekdays only.',
          'Children under eight must be accompanied in the water by an '
          'adult, one adult to two children. Children aged eight to '
          'eleven may swim unaccompanied if the adult remains in the '
          'building.',
          'Shower before entering. Outdoor shoes are not permitted '
          'beyond the changing room door, which is the rule most often '
          'broken and the reason the floor is cleaned twice daily.',
          'The pool is closed for cleaning on the first Monday of each '
          'month and reopens at 14.00 on that day. Notice is given on '
          'the website and at reception a week ahead.'],
         items=[
          ('How many lanes are used during lane swimming?', None,
           'three', 'Paragraph 1, on weekdays only.'),
          ('What is the adult-to-child ratio for under-eights?', None,
           'one to two', 'Paragraph 2, with the adult in the water.'),
          (
           'Outdoor shoes are not permitted beyond the changing room '
           '____________.', None, 'door',
           'Paragraph 3, the rule most often broken.'),
          ('At what time does the pool reopen after monthly '
           'cleaning?', None, '14.00',
           'Paragraph 4, on the first Monday of the month.')])],
   listen=[
    dict(heading='Joining the centre', part='Part 1',
         task='A conversation at a sports centre', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Staff', 'Riverside Centre, how can I help?'),
          ('Visitor', 'I would like to join. I work shifts, so I am '
           'here at odd hours.'),
          ('Staff', 'What hours?'),
          ('Visitor', 'Mornings mostly, and some weekends.'),
          ('Staff', 'Then off-peak would do you. Twenty-four pounds '
           'instead of thirty-eight, and it covers weekends '
           'completely.'),
          ('Visitor', 'Weekends are not peak?'),
          ('Staff', 'Everybody asks that. No. Weekday evenings are the '
           'expensive part.'),
          ('Visitor', 'Off-peak, then. What about the joining fee?'),
          ('Staff', 'Twenty pounds, but it is waived this month because '
           'it is September.'),
          ('Visitor', 'Good. Can I use the gym today?'),
          ('Staff', 'Not until you have done the induction. Forty '
           'minutes, Tuesday evenings or Saturday mornings.'),
          ('Visitor', 'Saturday, then. The tenth?'),
          ('Staff', 'Saturday the tenth, half past nine. And I need your '
           'bank details for the direct debit, taken on the first of '
           'each month.'),
          ('Visitor', 'One thing. I may be working abroad in the '
           'spring.'),
          ('Staff', 'Then you can suspend for up to three months. Five '
           'pounds a month to hold it, and one month’s notice in '
           'writing.'),
          ('Visitor', 'Writing, not email?'),
          ('Staff', 'Email counts as writing. The fourteen-day thing '
           'people get wrong is classes: miss three booked classes in a '
           'month and you cannot book for a fortnight.'),
          ('Visitor', 'Understood. Membership number?'),
          ('Staff', 'R C eight oh four.')],
         items=[
          ('Membership type chosen: ____________', None, 'off-peak',
           'At £24, because the visitor comes in the mornings.'),
          ('The joining fee is waived because the month is '
           '____________.', None, 'September',
           'One of the two months in which it is not charged.'),
          ('Induction booked for Saturday the ____________', None,
           'tenth', 'At half past nine, lasting forty minutes.'),
          ('Payment is taken on the ____________ of each month.',
           None, 'first', 'Collected by direct debit each month.'),
          ('Suspension costs £____________ a month.', None, '5',
           'For up to three months, with a month’s notice.'),
          ('Membership number: RC____________', None, '804',
           'The membership number follows the RC prefix, at the end.')])],
   speak=dict(
    part='Part 1', focus='Exercise you take',
    intro=('Two or three sentences each. Say what you actually do, not '
           'what you plan to do.'),
    qs=['Do you take much exercise?',
        'Did you play sport at school?',
        'Do you prefer exercising alone or with others?',
        'Is it easy to keep fit where you live?'],
    shape=[('answer', 'I swim twice a week, early, before work.'),
           ('support', 'Early because the pool is empty and because I '
            'will not go later.'),
           ('follow-up', 'I played football at school and stopped at '
            'eighteen when the team did.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking to suspend a membership',
         prompt=('You need to suspend your membership of a sports '
                 'centre. Write a letter to the centre. In your '
                 'letter: give your membership details; explain why '
                 'you need to suspend it; ask about the arrangements. '
                 'Write at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I should like to request that my off-peak membership, number '
          'RC804, be suspended for three months from 1 March.',
          'I have been posted to my employer’s office in Rotterdam from '
          'the beginning of March until the end of May. The posting was '
          'confirmed last week, which is why this letter arrives at '
          'rather less than the month’s notice your terms require, and I '
          'should be grateful if you would accept it.',
          'I understand that a suspended membership is charged at £5 a '
          'month and may be suspended for up to three months in a year. '
          'Could you confirm that the £5 will be collected by the '
          'existing direct debit, so that I do not need to arrange '
          'anything from abroad?',
          'I should also like to ask what happens to the gym induction I '
          'completed in September. If a second induction is required on '
          'my return, I would rather book it now than discover it at '
          'the door in June.',
          'I have been a member for four years and intend to continue '
          'when I return.',
          'Yours faithfully,',
          'Rosalind Ferreira-Nwachukwu'],
         notes=[
          'The short notice is raised by the writer rather than left for '
          'the reader to notice, and the reason is given in the same '
          'sentence. Admitting the problem in your own request is what '
          'gets it waived.',
          'Both questions are practical and anticipate a difficulty — '
          'arranging payment from abroad, being turned away in June. '
          'Questions that show you have imagined the future are '
          'answered carefully.',
          'The last line gives the centre a reason to be helpful. Four '
          'years of membership is a fact, not a plea, and it belongs at '
          'the end.'],
         criterion=[('Raising the problem with your own request',
                     'Task Response'),
                    ('Questions that anticipate a difficulty',
                     'Task Achievement'),
                    ('A closing fact that gives a reason to help',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Requests and conditions in formal writing',
    explain=('A formal request uses the subjunctive or a passive '
             'construction, and any condition attached to it is stated '
             'before the request is made.'),
    examples=['I should like to request that my membership be '
              'suspended from 1 March.',
              'I understand that a month’s notice is normally '
              'required.',
              'If a second induction is necessary, I would rather book '
              'it now.',
              'Could you confirm that the charge will be collected by '
              'direct debit?'],
    task='Rewrite each sentence as a formal request or condition.',
    items=[('Suspend my membership from March.',
            'I should like to request that my membership be suspended '
            'from 1 March.'),
           ('I know I am late telling you.',
            'I understand that your terms require a month’s notice, and '
            'I should be grateful if you would accept this letter.'),
           ('Will you take the five pounds automatically?',
            'Could you confirm that the £5 charge will be collected by '
            'the existing direct debit?'),
           ('Do I have to do the induction again?',
            'I should also like to ask whether a further induction will '
            'be required on my return.'),
           ('I will come back in June.',
            'I intend to resume my membership at the beginning of '
            'June.')]),
   vocab=[('peak hours', 'the busiest and most expensive times'),
          ('off-peak rate', 'the cheaper price at quieter times'),
          ('joining fee', 'a one-off charge to become a member'),
          ('suspension', 'pausing a membership for a period'),
          ('gym assessment', 'a first session showing you the '
           'equipment'),
          ('lane swimming', 'swimming in marked lanes'),
          ('facility', 'a building or service provided for use'),
          ('booking', 'a reserved place in a class')],
   expr=[('I should like to request that my membership be suspended '
          'from', 'the central sentence of a formal request'),
         ('which is why this letter arrives at less than a month’s '
          'notice', 'raises your own difficulty first'),
         ('so that I do not need to arrange anything from abroad',
          'gives a reason for a question'),
         ('I have been a member for four years',
          'a fact that gives the reader a reason to help')],
   trans=['furthermore', 'in addition', 'accordingly', 'in the '
          'meantime'],
  ),

  dict(
   sub='Starting and stopping',
   step=2,
   read=[
    dict(heading='Four people on why they gave up',
         kind='Four short texts',
         task='Matching features and True/False/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Casimir: I joined in January with three friends and we '
          'went four times a week. By March two had stopped and I '
          'stopped the week after. It was never about the exercise. I '
          'was going because they went.',
          'B  Marguerite: I ran for eleven months and then had a '
          'fortnight of flu. I never started again. There was no '
          'decision anywhere; the habit had a gap in it and the gap '
          'closed over.',
          'C  Olubunmi: I stopped because I stopped improving. For four '
          'months I was faster every week, and then I was not, and I had '
          'nothing to go for. Nobody told me that was normal and '
          'everybody knew.',
          'D  Ingrid: I gave up because of the changing room, which '
          'sounds trivial and is not. Forty minutes of swimming and '
          'twenty-five minutes of getting dry in a cold room with no '
          'hooks. The swimming was never the problem.'],
         items=[
          ('Which person stopped when other people did?',
           ['Casimir', 'Marguerite', 'Olubunmi', 'Ingrid'], 0,
           'He was going because his friends went.'),
          ('Which person describes stopping without deciding to?',
           ['Casimir', 'Marguerite', 'Olubunmi', 'Ingrid'], 1,
           'A fortnight of flu and the gap closed over.'),
          ('Which person stopped when progress stopped?',
           ['Casimir', 'Marguerite', 'Olubunmi', 'Ingrid'], 2,
           'Faster every week for four months, and then not.'),
          ('Which person blames the facilities rather than the '
           'activity?',
           ['Casimir', 'Marguerite', 'Olubunmi', 'Ingrid'], 3,
           'The cold changing room with no hooks.'),
          ('Olubunmi was told that reaching a plateau was normal.',
           ['True', 'False', 'Not Given'], 1,
           'He says nobody told him, although everybody knew.',
           {0: 'True would need somebody to have told him; he says '
               'nobody did.', 2: 'Not Given is wrong because he addresses exactly this.'}),
          ('Marguerite intends to start running again.',
           ['True', 'False', 'Not Given'], 2,
           'She says she never started again; her intentions are not '
           'stated.',
           {0: 'True would need a stated intention, and she gives '
               'none.', 1: 'False would need her to rule it out, and she does not.'})])],
   listen=[
    dict(heading='A coach on keeping going', part='Part 2',
         task='A talk to new members', band='l2',
         qtype='Questions 23-28',
         script=[
          ('Coach', 'Welcome. I am going to spend ten minutes on why '
           'people stop, because about half of you will have stopped by '
           'Easter and I would rather it were fewer.'),
          ('Coach', 'The figures first. Of people who join a gym in '
           'January, roughly half have stopped by the end of April, and '
           'the commonest week to stop is the week after a week off. Not '
           'the week off itself. The week after.'),
          ('Coach', 'That tells you what the mechanism is. Almost nobody '
           'decides to stop. A holiday, an illness or a busy fortnight '
           'puts a gap in the habit, and then the habit does not '
           'restart, because restarting takes a decision and continuing '
           'does not.'),
          ('Coach', 'So the single most useful rule I can give you is '
           'about the return rather than the routine. After any break, '
           'come back once, early, and do half of what you normally do. '
           'The session is nearly worthless as exercise and it closes '
           'the gap before it sets.'),
          ('Coach', 'Second reason people stop: progress ends. You '
           'improve quickly for about three months and then you do not, '
           'and nobody warns you. That flattening is normal, it is '
           'physiological, and it catches people who think it means they '
           'are doing something wrong.'),
          ('Coach', 'Third, and I am embarrassed about this one as a '
           'profession: the changing rooms. People leave over hot water, '
           'hooks and crowding far more often than they leave over '
           'anything to do with sport, and the survey we did last year '
           'put facilities ahead of time and cost.')],
         items=[
          ('About ____________ of January joiners have stopped by the '
           'end of April.', None, 'half',
           'Which he gives as the first figure.'),
          ('The commonest week to stop is the week ____________ a '
           'week off.', None, 'after',
           'Rather than the week off itself.'),
          ('He says restarting takes a ____________ and continuing '
           'does not.', None, 'decision',
           'Which is why gaps become endings.'),
          ('After a break he advises coming back once and doing '
           '____________ of the usual amount.', None, 'half',
           'Early, to close the gap before it sets.'),
          ('Improvement typically lasts about ____________ months '
           'before flattening.', None, 'three',
           'Which he says is normal and physiological.'),
          ('Last year’s survey put facilities ahead of time and',
           ['distance', 'cost', 'coaching', 'equipment'], 1,
           'Which he says embarrasses his profession.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Exercise',
    intro=('Short answers, then the long turn. Say what you did and '
           'then what kept it going.'),
    cue=('Describe a time when you kept up a new habit.',
         ['what the habit was', 'when you started it',
          'how long you kept it up',
          'and explain what made it possible']),
    qs=['Do you exercise regularly?',
        'Have you ever stopped and started again?',
        'Now look at the card. You have one minute to make notes.',
        'Why do people find habits hard to keep?'],
    shape=[('answer', 'Swimming before work, which I kept up for about '
            'two years.'),
           ('support', 'I started in the January after my fortieth '
            'birthday, for the usual reasons.'),
           ('follow-up', 'What made it possible was going at half past '
            'six rather than after work.'),
           ('support', 'Nothing competes with you at half past six in '
            'the morning.'),
           ('follow-up', 'I stopped when the pool closed for '
            'refurbishment, and I never restarted, which is apparently '
            'the normal way these things end.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should local councils pay for sports facilities?',
         prompt=('Some people believe local councils should pay for '
                 'sports facilities. To what extent do you agree? '
                 'Write at least 250 words.'),
         model=[
          'I agree that councils should fund sports facilities, '
          'provided the money goes where it changes behaviour, which is '
          'not where it usually goes. The argument for public funding is '
          'strong and the usual version of it is weak, and the '
          'difference is worth setting out.',
          'The weak version is that sport is good for health, so public '
          'money should support it. That is true and it does not '
          'establish very much, because the same could be said of a '
          'dozen other things and the budget is finite. A stronger '
          'version asks who is excluded when there is no public '
          'provision. Private gyms exist in prosperous areas and are '
          'priced for people in regular employment; a public pool in a '
          'poorer district serves people who would otherwise swim '
          'nowhere.',
          'The second argument is that the facilities which change '
          'participation are exactly the ones no private operator will '
          'build. Pools lose money almost everywhere and are used by '
          'children, older people and those recovering from illness. If '
          'councils stop funding pools, pools close, and nothing '
          'replaces them.',
          'There is a reasonable objection about where the money goes '
          'within sport. Councils have historically spent heavily on '
          'pitches for competitive team sports, used mainly by young '
          'men, and comparatively little on the undramatic things that '
          'keep ordinary people coming: hot water, lockers that work, '
          'opening hours that suit shift workers. A survey of people who '
          'had stopped exercising put facilities of that kind ahead of '
          'both time and cost.',
          'In conclusion, I support public funding and would change its '
          'direction. Fund the pool rather than the stadium, and spend '
          'the last ten per cent on the changing rooms, because that is '
          'where people decide whether to come back.'],
         notes=[
          'The essay replaces a weak argument on its own side with a '
          'stronger one in the second paragraph. Discarding the obvious '
          'reason is a reliable way to look like somebody who has '
          'thought about the question.',
          'The objection is about allocation rather than about principle, '
          'which lets the essay agree and still have something to argue '
          'about for a paragraph.',
          'The conclusion is two instructions, both concrete. "Spend the '
          'last ten per cent on the changing rooms" is the sentence a '
          'reader will remember.'],
         criterion=[('Replacing a weak argument with a stronger one',
                     'Task Response'),
                    ('An objection about allocation, not principle',
                     'Task Response'),
                    ('A conclusion made of instructions',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Reason and purpose: in order to, so as to, so that',
    explain=('A purpose clause says what something is for; a reason '
             'clause says why it happened. The two are easy to '
             'confuse.'),
    examples=['Come back early in order to close the gap before it '
              'sets.',
              'He stopped because his friends stopped.',
              'Facilities are funded so that people without money can '
              'use them.',
              'She swims at half past six so as to avoid the crowds.'],
    task='Join each pair with a reason or a purpose clause.',
    items=[('Come back after a break. The gap will close.',
            'Come back once after a break in order to close the gap '
            'before it sets.'),
           ('He stopped. His friends had stopped.',
            'He stopped going because the friends he went with had '
            'stopped.'),
           ('Councils fund pools. Poorer residents can swim.',
            'Councils fund pools so that residents who cannot afford a '
            'private gym are able to swim.'),
           ('She swims early. The pool is empty then.',
            'She swims early so as to use the pool while it is still '
            'empty.'),
           ('They improved the changing rooms. Members were leaving.',
            'The changing rooms were improved because members were '
            'leaving over hot water and crowding.')]),
   vocab=[('giving up', 'stopping an activity for good'),
          ('a gap in the habit', 'a break that interrupts a '
           'routine'),
          ('restarting', 'beginning again after a break'),
          ('levelling off', 'improving more slowly or not at all'),
          ('changing room', 'the room where people change clothes'),
          ('hot water', 'a basic facility people leave over'),
          ('shift worker', 'somebody whose hours change'),
          ('public provision', 'services supplied by a council')],
   expr=[('most people stop not because, but because',
          'the sentence this cycle turns on'),
         ('restarting takes a decision and continuing does not',
          'explains how habits end'),
         ('come back once, early, and do half',
          'the practical rule from the talk'),
         ('facilities ahead of time and cost',
          'reports a surprising finding')],
   trans=['firstly', 'secondly', 'above all', 'in practice'],
  ),

  dict(
   sub='Who takes part',
   step=2,
   read=[
    dict(heading='Participation in five sports, by age',
         kind='Data article',
         task='Matching information and sentence completion',
         band='gt_work', qtype='Questions 29-34',
         figure=_PART,
         paras=[
          'The chart above shows how many people in two age groups took '
          'part in five sports at least once a week. The overall '
          'pattern is what anybody would expect, and the exception to '
          'it is where the useful information is.',
          'The younger group takes part more in four of the five. The '
          'largest gap is football, at 21.6 per cent against 3.4, a '
          'difference of more than six times, and running shows a '
          'similar if smaller pattern.',
          'Swimming is the exception. It is the only sport in which the '
          'older group participates more, at 16.8 per cent against 14.2, '
          'and it is also the only sport in the list that does not '
          'require a team, a fixed time or the ability to run.',
          'That combination explains the figure. A sport that can be '
          'done alone, at any hour, at whatever speed the body allows, '
          'keeps its participants as they age. A sport that needs '
          'twenty-one other people and a fixed Sunday morning does '
          'not.',
          'The practical consequence is about where money goes. '
          'Councils have historically built pitches, which serve the '
          'group whose participation falls fastest anyway, and have '
          'closed pools, which serve the group that keeps going longest. '
          'The chart is an argument about spending rather than about '
          'sport.'],
         items=[
          ('Which paragraph explains why swimming behaves '
           'differently?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 3,
           'It can be done alone, at any hour, at any speed.'),
          ('Which paragraph draws a conclusion about spending?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 3,
           'Pitches built and pools closed.'),
          ('Which paragraph gives the largest gap between the '
           'groups?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 0,
           'Football, at 21.6 per cent against 3.4 per cent.'),
          ('The older group participates more in ____________ '
           'only.', None, 'swimming',
           'Paragraph 3, at 16.8 against 14.2 per cent.'),
          ('Football participation differs by more than ____________ '
           'times.', None, 'six',
           'Paragraph 2, which is the largest gap.'),
          ('Councils have built ____________, which serve the group '
           'whose participation falls fastest.', None, 'pitches',
           'Paragraph 5, while closing pools.')])],
   listen=[
    dict(heading='Two officers discuss participation figures',
         part='Part 3',
         task='A discussion between two council officers', band='l3',
         qtype='Questions 35-40',
         figure=_PART,
         script=[
          ('Ingrid', 'I have the participation figures and they are not '
           'what the committee expects.'),
          ('Olubunmi', 'They expect young people everywhere and old '
           'people nowhere.'),
          ('Ingrid', 'Which is true for four sports out of five. '
           'Football is twenty-one point six against three point four.'),
          ('Olubunmi', 'Six times.'),
          ('Ingrid', 'More than six. And then swimming goes the other '
           'way. Sixteen point eight for the older group and fourteen '
           'point two for the younger.'),
          ('Olubunmi', 'Why would that be?'),
          ('Ingrid', 'Because you can do it alone, at any time, at '
           'whatever speed you have left. Everything else on that chart '
           'needs other people or a working knee.'),
          ('Olubunmi', 'So the sport that holds its participants is the '
           'one we are closing.'),
          ('Ingrid', 'Two pools in six years, and three new pitches.'),
          ('Olubunmi', 'In fairness, the pitches were funded by a grant '
           'that could only be spent on pitches.'),
          ('Ingrid', 'That is true and it is the most common way bad '
           'spending happens. Nobody chose it. A grant existed and we '
           'took it.'),
          ('Olubunmi', 'What would you put to the committee?'),
          ('Ingrid', 'One pool kept open, with longer hours for shift '
           'workers, instead of the fourth pitch. And I would show them '
           'this chart rather than argue with them.'),
          ('Olubunmi', 'They will say the pool loses money.'),
          ('Ingrid', 'It does. The pitches lose less money and serve the '
           'group that leaves anyway, and that is the whole argument in '
           'one sentence.')],
         items=[
          ('The pattern the committee expects holds for ____________ '
           'sports out of five.', None, 'four',
           'With swimming as the exception.'),
          ('Football participation is 21.6 against ____________ per '
           'cent.', None, '3.4',
           'A difference of more than six times.'),
          ('Ingrid says swimming holds participants because it can be '
           'done ____________.', None, 'alone',
           'At any time of day and at whatever speed suits.'),
          ('The council has closed ____________ pools in six years.',
           None, 'two', 'While building three new pitches.'),
          ('Olubunmi says the pitches were funded by a ____________ '
           'that could only be spent that way.', None, 'grant',
           'Which Ingrid calls the commonest way bad spending '
           'happens.'),
          ('She would propose keeping one pool open with longer hours '
           'for ____________ workers.', None, 'shift',
           'Instead of building a fourth pitch, she says.')])],
   speak=dict(
    part='Part 3', focus='Who sport is for',
    intro=('Three or four sentences. Use the figures if they help.'),
    qs=['Why do some people stop taking part in sport as they get '
        'older?',
        'Should councils provide sports facilities for everybody?',
        'Are some sports more welcoming than others?',
        'How could more people be encouraged to take part?'],
    shape=[('answer', 'Mostly because of what the sport requires '
            'rather than the people.'),
           ('support', 'Football needs twenty-one other people and a '
            'fixed Sunday morning.'),
           ('follow-up', 'Swimming needs nobody and no particular '
            'time.'),
           ('support', 'Which is why swimming is the one sport older '
            'people do more of.'),
           ('follow-up', 'So if you want participation to last, you '
            'fund the pool, and most councils have been closing '
            'them.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Participation in five sports by two age groups',
         prompt=('The chart below shows the percentage of two age '
                 'groups taking part in five sports at least once a '
                 'week. Summarise the information by selecting and '
                 'reporting the main features, and make comparisons '
                 'where relevant. Write at least 150 words.'),
         figure=_PART,
         model=[
          'The bar chart compares weekly participation in five sports '
          'among people aged 16 to 29 and those aged 50 to 64. Overall, '
          'the younger group took part more in four of the five sports, '
          'with swimming as the single exception, and the difference '
          'between the groups was far larger in team and running sports '
          'than in the others.',
          'The widest gap was in football, where 21.6 per cent of the '
          'younger group took part weekly against only 3.4 per cent of '
          'the older group, a difference of more than six times. Running '
          'showed the same pattern less sharply, at 18.4 per cent '
          'against 7.2.',
          'Cycling and badminton were closer. Cycling was 12.1 per cent '
          'among the younger group and 9.6 among the older, while '
          'badminton was the least popular sport for both groups, at 6.3 '
          'and 4.1 per cent respectively.',
          'Swimming reversed the pattern. It was the only sport in which '
          'the older group participated more, at 16.8 per cent against '
          '14.2, and it was also the most popular sport of the five '
          'among the over-fifties.'],
         notes=[
          'The Overall statement names the pattern and its exception in '
          'one sentence. On a chart with one clear outlier, that '
          'sentence is most of the Task Achievement mark.',
          'The sports are grouped by size of gap — wide, moderate, '
          'reversed — rather than taken in the order they appear. '
          'Grouping by behaviour is the move being tested.',
          'Swimming gets the final paragraph to itself because it is the '
          'exception. Burying the exception in the middle of a list is '
          'the commonest way to lose marks here.'],
         criterion=[('An Overall naming the pattern and its '
                     'exception', 'Task Achievement'),
                    ('Grouping by behaviour rather than by order',
                     'Coherence and Cohesion'),
                    ('The exception given its own paragraph',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing distributions and exceptions',
    explain=('A pattern with one exception needs the pattern stated '
             'first and the exception marked, not simply listed '
             'alongside.'),
    examples=['The pattern holds for four of the five; swimming is the '
              'exception.',
              'Participation falls with age in every sport except '
              'swimming.',
              'Badminton was the least popular among both groups.',
              'Cycling and badminton showed much smaller differences.'],
    task='Rewrite each list as a pattern with an exception.',
    items=[('Young people do more football, running, cycling and '
            'badminton. Old people do more swimming.',
            'The younger group participated more in four of the five '
            'sports; swimming was the only exception.'),
           ('Football is 21.6 and 3.4.',
            'Football showed the widest gap, at 21.6 per cent against 3.4 '
            'per cent, a difference of more than six times.'),
           ('Badminton is 6.3 and 4.1.',
            'Badminton was the least popular sport for both groups, at '
            '6.3 and 4.1 per cent respectively.'),
           ('Swimming is 14.2 and 16.8.',
            'Swimming reversed the pattern, with 16.8 per cent of the '
            'older group taking part against 14.2 per cent of the '
            'younger.'),
           ('Cycling is close for both.',
            'Cycling showed a comparatively small difference, at 12.1 per '
            'cent and 9.6 per cent.')]),
   vocab=[('taking part', 'joining in an activity'),
          ('once a week', 'a weekly frequency'),
          ('sports hall', 'an indoor space for games'),
          ('pitch', 'a marked field for a team sport'),
          ('age band', 'a range of ages counted together'),
          ('the exception', 'the case that does not follow the '
           'pattern'),
          ('team sport', 'a sport needing several players'),
          ('individual sport', 'a sport done alone')],
   expr=[('the pattern holds for four of the five; swimming is the '
          'exception', 'states a pattern and its exception'),
         ('needs other people or a working knee',
          'explains participation in nine words'),
         ('the sport that holds its participants is the one we are '
          'closing', 'states a contradiction in policy'),
         ('nobody chose it; a grant existed and we took it',
          'explains how bad spending happens')],
   trans=['whereas', 'with the exception of', 'overall',
          'respectively'],
  ),

  dict(
   sub='What training actually does',
   step=3,
   read=[
    dict(heading='Load, rest and the shape of improvement',
         kind='Academic passage',
         task='Matching headings, True/False/Not Given and summary '
              'completion',
         band='acad', qtype='Questions 41-48',
         paras=[
          'Training does not make anybody fitter. Training makes people '
          'temporarily worse, and the recovery afterwards is what makes them '
          'better. That is the single most counter-intuitive fact in the '
          'subject, and it explains most of what beginners get wrong in '
          'their first year.',
          'A hard session damages muscle fibres, empties the fuel stored in '
          'them and produces a measurable fall in performance that lasts for '
          'a day or two afterwards. The body then rebuilds, and it rebuilds '
          'slightly beyond where it started, as a defence against the same '
          'load being imposed again in a week’s time. That rebuilding '
          'requires time, food and sleep, and it cannot be hurried by '
          'wanting it more, by training again the following morning, or by '
          'any of the things an impatient beginner naturally tries first.',
          'This produces the rule that governs all serious training, '
          'in every sport and at every level. Load and rest are a '
          'single system rather than two, and increasing one of them '
          'without the other produces nothing at all. An athlete who '
          'trains hard every day without recovery accumulates damage '
          'rather than fitness, and will reliably perform worse after '
          'six weeks of that regime than after two weeks of it. '
          'Coaches describe this as the commonest mistake made by '
          'people who are working hardest.',
          'The same mechanism explains the shape of improvement, which '
          'surprises almost every beginner who meets it. Gains come '
          'fastest at the very start and slow sharply after about '
          'three months. The first adaptations are the cheap ones: the '
          'nervous system gradually learning to recruit muscle that '
          'the body already possessed and was not using properly. The '
          'later gains require the body to build new tissue, which is '
          'slow, expensive in energy and strictly limited in rate '
          'whatever the athlete does about it. No amount of enthusiasm '
          'raises that ceiling.',
          'That flattening is not a sign of having done anything '
          'wrong. It arrives at almost exactly the point at which most '
          'people stop. That is why so many people give up in their '
          'fourth or fifth month rather than in their first, having '
          'survived the hard part and stopped at the dull one. A '
          'beginner who is told in advance that four months of rapid '
          'improvement will be followed by two years of slow '
          'improvement is far more likely to be training at the end of '
          'those years. One who discovers the flattening alone '
          'concludes, reasonably enough, that the training has stopped '
          'working.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['Why training makes you worse first',
            'Load and rest as one system',
            'The shape of improvement', 'What beginners are not '
            'told'], 0,
           'Damage, then rebuilding slightly beyond the start.'),
          ('Choose the best heading for paragraph 4.',
           ['Accumulated damage', 'Cheap gains first',
            'Food and sleep', 'Why people stop'], 1,
           'The nervous system before new tissue.'),
          ('Choose the best heading for paragraph 5.',
           ['A warning that keeps people training',
            'Six weeks against two', 'Building new tissue',
            'Measuring performance'], 0,
           'Being told in advance makes people more likely to '
           'continue.'),
          (
           'Performance falls measurably for a day or two after a hard '
           'session.', ['True', 'False', 'Not Given'], 0,
           'Paragraph 2 states this about the day after a session.',
           {1: 'False would need no fall; paragraph 2 measures one.', 2: 'Not Given is wrong because the day after a session is '
               'described.'}),
          ('An athlete who trains hard daily improves faster.',
           ['True', 'False', 'Not Given'], 1,
           'Paragraph 3 says such an athlete accumulates damage.',
           {0: 'True would need faster improvement; paragraph 3 says '
               'damage accumulates.', 2: 'Not Given is wrong because daily training is compared '
               'directly.'}),
          (
           'The writer believes most coaches explain this to '
           'beginners.', ['True', 'False', 'Not Given'], 2,
           'What coaches do is not stated.',
           {0: 'Yes would need a claim about coaches, and none is '
               'made.', 1: 'No would need him to say they do not, which he never '
               'says.'}),
          ('The body rebuilds slightly ____________ where it '
           'started.', None, 'beyond',
           'Paragraph 2, as a defence against the same load.'),
          ('Early gains come from the ____________ system learning to '
           'use existing muscle.', None, 'nervous',
           'Paragraph 4, which is why they are fast.')])],
   listen=[
    dict(heading='A physiologist on training and recovery',
         part='Part 4', task='A lecture on how training works',
         band='l4', qtype='Questions 49-54',
         script=[
          ('Physiologist', 'I am going to tell you something that '
           'sounds wrong and is the basis of the whole subject. '
           'Training does not make you fitter. Training makes you worse. '
           'Recovery makes you fitter.'),
          ('Physiologist', 'Here is the sequence, and it is worth '
           'learning in this order. A hard session damages muscle and '
           'empties its fuel stores. For the next day or two you are '
           'measurably weaker than you were before you trained. Then the '
           'body rebuilds, and it rebuilds slightly beyond where you '
           'started, because it is defending itself against the same '
           'thing happening again next week.'),
          ('Physiologist', 'Which means load and rest are one system, '
           'not two. Double your training and keep your sleep the same '
           'and you have not doubled anything; you have accumulated '
           'damage. The athlete training hardest in January is routinely '
           'the slowest athlete in March.'),
          ('Physiologist', 'Now the part that matters to everybody in '
           'this room rather than to athletes. The shape of improvement. '
           'You get better very fast for about three months, and then '
           'you do not, and almost nobody is warned.'),
          ('Physiologist', 'The reason is that the early gains are '
           'cheap. Your nervous system is learning to use muscle you '
           'already had. Once that is done, further gains need new '
           'tissue, which the body builds slowly and in limited '
           'quantities, whatever you do.'),
          ('Physiologist', 'So if you remember one sentence from this '
           'hour, make it this one. The flattening is not failure; it is '
           'the normal second stage of the process, and the people who '
           'know that in advance are the people still training two years '
           'later.')],
         items=[
          ('He says training makes you worse and ____________ makes '
           'you fitter.', None, 'recovery',
           'Which he calls the basis of the subject.'),
          ('For a day or two after a hard session you are measurably '
           '____________.', None, 'weaker',
           'Weaker than before the session, until rebuilding.'),
          ('The body rebuilds slightly beyond where you started, as a '
           '____________ against the same load.', None, 'defence',
           'Which is the mechanism of improvement.'),
          ('The athlete training hardest in January is routinely the '
           'slowest in', ['December', 'March', 'June', 'September'], 1,
           'Because damage accumulates without recovery.'),
          ('Early gains are cheap because the ____________ system is '
           'learning to use existing muscle.', None, 'nervous',
           'After which new tissue is needed.'),
          ('He says the flattening is not failure but the normal '
           'second ____________.', None, 'stage',
           'And knowing that keeps people training.')])],
   speak=dict(
    part='Part 3', focus='Improvement and how long it takes',
    intro=('Four sentences. Describe a process rather than an '
           'opinion.'),
    qs=['Why do people improve quickly at first and then slow down?',
        'Is it useful to know how long improvement takes?',
        'Do people expect results too quickly?',
        'How should beginners be advised?'],
    shape=[('answer', 'Because the first improvements are the cheap '
            'ones.'),
           ('support', 'At the start your nervous system is learning '
            'to use muscle you already have.'),
           ('follow-up', 'After about three months further gains need '
            'the body to build new tissue, which is slow.'),
           ('support', 'Most people stop at exactly that point.'),
           ('follow-up', 'So the useful thing a coach can do is warn '
            'people in advance, because the flattening feels like '
            'failure and is not.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Planning: should children specialise in one sport '
                 'early?',
         prompt=('Should children specialise in one sport from an '
                 'early age? Brainstorm nine ideas, apply every test '
                 'you have learned, and order the surviving ideas on '
                 'purpose. Twelve minutes.'),
         plan=('Children should not specialise in one sport before '
               'about fourteen, because the evidence for early '
               'specialisation comes from a sample that excludes '
               'everybody it failed, and because the costs fall on '
               'children who cannot consent to them',
               [('The evidence is distorted by who we hear from',
                 ['successful athletes are asked about their '
                  'childhoods and those who left are not',
                  'injury and burnout remove participants before '
                  'anybody surveys them']),
                ('What children lose is not recoverable later',
                 ['a range of movement skills is built most easily '
                  'before about fourteen',
                  'a child who leaves a sport at fifteen often leaves '
                  'all sport'])]),
         notes=[
          'This is the last planning page in the volume, so use '
          'everything: the six tests from unit 1, the overlap test from '
          'unit 4, the intruder test from unit 8, and the order test '
          'from unit 5.',
          'The order matters here. The evidence paragraph has to come '
          'first, because the second paragraph is about costs and only '
          'becomes relevant once the usual evidence has been '
          'questioned.',
          'The thesis names an age. A specific number is harder to argue '
          'with than "too early" and shows the examiner that a position '
          'has actually been taken.'],
         criterion=[('Every test applied, not only the first',
                     'Task Response'),
                    ('Paragraphs ordered so the second depends on the '
                     'first', 'Coherence and Cohesion')],
         instruct='  Twelve minutes, timed. You write this essay in cycle '
                  '5.',
         lines=12)],
   gram=dict(
    point='Describing a curve: rapidly at first, then more slowly',
    explain=('A change whose rate alters needs the rate described as '
             'well as the direction.'),
    examples=['Gains come fastest at the start and slow sharply after '
              'about three months.',
              'Performance falls for a day or two before recovering '
              'above its earlier level.',
              'Improvement continues thereafter, but far more slowly.',
              'The curve is steep at first and almost flat by the '
              'second year.'],
    task='Rewrite each sentence so that the rate of change is clear.',
    items=[('People improve and then stop improving.',
            'Improvement is rapid for about three months and then slows '
            'sharply, without stopping altogether.'),
           ('You get weaker after training.',
            'Performance falls measurably for a day or two after a hard '
            'session before rising above its earlier level.'),
           ('Progress is slow later.',
            'Later gains continue at a much slower rate, because they '
            'require new tissue rather than better use of existing '
            'muscle.'),
           ('Training too much is bad.',
            'Performance declines steadily where hard training is '
            'repeated without adequate recovery.'),
           ('The first months are the best.',
            'The steepest part of the curve falls in the first three '
            'months, which is also when most people are least patient.')]),
   vocab=[('training load', 'how much work a session demands'),
          ('rest day', 'a day without training'),
          ('adaptation', 'the body’s change in response to '
           'training'),
          ('overload', 'training beyond what the body can recover '
           'from'),
          ('levelling out', 'improving more and more slowly'),
          ('warm-up', 'gentle activity before harder work'),
          ('injury', 'damage that stops somebody training'),
          ('coach', 'a person who directs training')],
   expr=[('gains come fastest at the start and slow sharply after',
          'describes the shape of improvement'),
         ('load and rest are a single system',
          'the rule this cycle rests on'),
         ('the flattening is not failure',
          'the sentence worth telling a beginner'),
         ('it cannot be hurried by wanting it more',
          'states a limit plainly')],
   trans=['at first', 'thereafter', 'eventually', 'in consequence'],
  ),

  dict(
   sub='Whether early specialisation works',
   step=4,
   read=[
    dict(heading='The children who stopped at fifteen',
         kind='Academic passage',
         task='Matching information, True/False/Not Given and short '
              'answer',
         band='acad', qtype='Questions 55-62',
         paras=[
          'Ask twenty professional athletes how they trained as children and '
          'a clear pattern appears in their answers: an early start, a '
          'single sport, and serious coaching well before the age of twelve. '
          'The conclusion usually drawn is that early specialisation '
          'produces elite athletes. The conclusion does not follow from the '
          'pattern, and the reason it does not follow is worth considerably '
          'more to a reader of evidence than anything else in this passage.',
          'The twenty athletes you asked are, by definition, the ones who '
          'are still there to be asked. Everybody who specialised equally '
          'early and was injured, or worn down, or simply lost interest at '
          'fifteen is not in professional sport today and is therefore not '
          'in the sample you have just collected. We are asking the '
          'survivors how they survived, which tells us a great deal about '
          'survivors and almost nothing about whether the method itself '
          'works.',
          'This is a general fault and it has a name: survivorship. It '
          'appears wherever a successful group is studied without the '
          'unsuccessful group that followed exactly the same path. It '
          'reliably makes risky strategies look brilliant, because the '
          'people those strategies destroyed are not available to be '
          'interviewed about them.',
          'Where the complete group has been followed, the picture '
          'changes. Studies that track whole cohorts of young players '
          'from the age of nine find that early specialisers are '
          'considerably more likely to reach a high standard by '
          'fifteen. They are no more likely to be competing at '
          'twenty-one. Their rates of injury and of leaving the sport '
          'altogether are substantially higher than those of their '
          'peers.',
          'The same studies find an advantage for the opposite approach, and '
          'that finding is reported far less often than the headline one. '
          'Children who play several sports until about fourteen acquire a '
          'wider range of movement skills, and those skills transfer. Late '
          'specialisers catch up quickly in technique and arrive at sixteen '
          'with fewer injuries behind them and a longer history of having '
          'enjoyed sport at all.',
          'None of this proves that early specialisation never works, and '
          'some of the children it suits will be found in any academy. It '
          'establishes something narrower and more useful: that the evidence '
          'everybody quotes for it is collected in a way that cannot show '
          'whether it works, and that the evidence collected properly does '
          'not support it. Those are different claims and the second is the '
          'one that should change what parents do.'],
         items=[
          ('Which paragraph names the fault in the usual evidence?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 2,
           'Survivorship, and why risky strategies look brilliant.'),
          ('Which paragraph reports what whole-cohort studies find?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 2,
           'Ahead at fifteen, no more likely to be competing at '
           'twenty-one.'),
          ('Which paragraph gives an advantage of the opposite '
           'approach?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'A wider range of movement skills, which transfer.'),
          (
           'The writer believes early specialisation never produces '
           'elite athletes.', ['True', 'False', 'Not Given'],
           1, 'The final paragraph says the opposite.',
           {0: 'Yes would need never; the final paragraph allows the '
               'exceptions.', 2: 'Not Given is wrong because the writer addresses the '
               'claim.'}),
          (
           'Early specialisers are more likely to reach a high '
           'standard by fifteen.',
           ['True', 'False', 'Not Given'], 0,
           'Paragraph 4 states this from the whole-cohort studies.',
           {1: 'No would need a contradiction; paragraph 4 reports it '
               'from the cohorts.', 2: 'Not Given is wrong because the fifteen-year-old '
               'comparison is given.'}),
          ('The writer believes parents are mainly to blame.',
           ['True', 'False', 'Not Given'], 2,
           'No attribution of blame to parents appears.',
           {0: 'Yes would need blame to be assigned, and it never is.', 1: 'No would need him to defend parents, which he does '
               'not.'}),
          ('What is the name of the fault described in paragraph 3?',
           None, 'survivorship',
           'Studying a successful group without the unsuccessful '
           'one.'),
          ('Children who play several sports until fourteen acquire a '
           'wider range of ____________ skills.', None, 'movement',
           'Paragraph 5, and those skills transfer.')])],
   listen=[
    dict(heading='Two coaches disagree about specialising',
         part='Part 4', task='A recorded discussion', band='l4',
         qtype='Questions 63-68',
         script=[
          ('Chair', 'Ms Oyelaran-Pike coaches a youth academy. Mr '
           'Halvorsen-Ruiz runs a multi-sport programme. Each begins '
           'with the strongest point against their own position.'),
          ('Oyelaran-Pike', 'Mine is that I can name the eleven players '
           'from my academy who became professional and I cannot name '
           'the two hundred who did not. I use the eleven in every '
           'conversation with a parent, and I know exactly what is wrong '
           'with that.'),
          ('Halvorsen-Ruiz', 'And mine is that multi-sport programmes '
           'suit children who are good at several things, and I have '
           'quietly lost the ones who only ever wanted to play football. '
           'I tell them variety is good for them, and some of them just '
           'leave.'),
          ('Chair', 'Thank you both. So after those admissions, where '
           'do the two of you actually disagree?'),
          ('Halvorsen-Ruiz', 'On the age, almost entirely. I say no specialising before '
           'fourteen. She says twelve for some sports.'),
          ('Oyelaran-Pike', 'Gymnastics and diving, where the careers '
           'end at twenty-two. The arithmetic is different if the sport '
           'is finished before most people start.'),
          ('Halvorsen-Ruiz', 'That is a real exception and I accept it '
           'for those two.'),
          ('Oyelaran-Pike', 'May I say the thing that changed my '
           'practice? We started asking the leavers why they left, which '
           'nobody does because it is depressing. Half said injury and '
           'half said they stopped enjoying it, and almost none of them '
           'play any sport now.'),
          ('Halvorsen-Ruiz', 'That last part is the one that should be '
           'on the wall of every academy in the country.'),
          ('Oyelaran-Pike', 'It is on mine now. It has not made me '
           'close the academy, and it has changed what I say to an '
           'eleven-year-old’s parents.')],
         items=[
          ('She can name ____________ players who became '
           'professional.', None, 'eleven',
           'And cannot name the two hundred who did not.'),
          ('He admits he has lost children who only wanted to play '
           '____________.', None, 'football',
           'Despite telling them variety is good for them.'),
          ('They disagree about the ____________ at which '
           'specialisation should begin.', None, 'age',
           'Fourteen against twelve for some sports.'),
          ('She argues for twelve in gymnastics and diving because '
           'those careers end at', ['eighteen', 'twenty-two',
            'twenty-five', 'thirty'], 1,
           'So the arithmetic is different.'),
          ('Her academy started asking the ____________ why they '
           'left.', None, 'leavers',
           'Which she says nobody does because it is depressing.'),
          ('Almost none of those who left now play any '
           '____________.', None, 'sport',
           'Which he says should be on every academy wall.')])],
   speak=dict(
    part='Part 3', focus='Pushing young people to succeed',
    intro=('Five sentences. This is the last Part 3 of the volume. '
           'Take a position and support it with evidence.'),
    qs=['Should children be pushed to succeed at sport?',
        'At what age should a child specialise?',
        'What do children lose by specialising early?',
        'Who should decide: the child, the parents or the coach?'],
    shape=[('answer', 'Encouraged, yes; pushed into one sport before '
            'fourteen, no.'),
           ('support', 'The evidence people quote comes only from the '
            'ones who succeeded.'),
           ('follow-up', 'Everybody who was injured or stopped '
            'enjoying it is not in the sample.'),
           ('support', 'When whole groups are followed, early '
            'specialisers are ahead at fifteen and not at '
            'twenty-one.'),
           ('follow-up', 'And the ones who leave at fifteen mostly '
            'leave all sport, which is the cost nobody '
            'measures.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should children specialise in one sport early?',
         prompt=('Some people believe children should specialise in '
                 'one sport from an early age, while others believe '
                 'they should play several. Discuss both views and '
                 'give your own opinion. Write at least 250 words.'),
         model=[
          'The case for early specialisation rests on evidence that '
          'cannot support it, and the case against rests on evidence '
          'that is better collected and much less often quoted. My own '
          'position is that children should not specialise before about '
          'fourteen, with a narrow exception for sports whose careers '
          'end unusually young.',
          'Those who favour early specialisation point to professional '
          'athletes, who overwhelmingly began one sport young and were '
          'coached seriously before twelve. The pattern is real. The '
          'difficulty is that these are the athletes who are still '
          'there: everybody who specialised early and was injured, '
          'burned out or lost interest at fifteen is absent from the '
          'sample, so we are asking the survivors how they survived.',
          'Where whole groups have been followed from the age of nine, a '
          'different picture appears. Early specialisers are more likely '
          'to reach a high standard by fifteen and no more likely to be '
          'competing at twenty-one, because their rates of injury and of '
          'leaving the sport are substantially higher. Children who play '
          'several sports until fourteen acquire a wider range of '
          'movement skills, catch up quickly in technique, and arrive '
          'with fewer injuries.',
          'The strongest argument on the other side is about particular '
          'sports. In gymnastics and diving, careers often end at '
          'twenty-two, so a child who waits until fourteen has lost a '
          'third of the available years. That is a genuine exception '
          'rather than a general case, and it should be argued sport by '
          'sport.',
          'In conclusion, I would keep children in several sports until '
          'about fourteen, except where the sport itself ends early. The '
          'cost of getting this wrong is not a lower standard of '
          'performance: it is that children who leave a sport at fifteen '
          'mostly leave all sport, and nobody counts them.'],
         notes=[
          'The essay turns on a point about evidence rather than about '
          'sport, which is what the whole unit has been building '
          'towards. An argument about how we know something is usually '
          'stronger than an argument about what we know.',
          'The exception is granted precisely and limited to two named '
          'sports with a reason. Precise concessions are far more '
          'convincing than general ones.',
          'The final sentence names the cost that nobody measures, which '
          'is both the strongest point in the essay and the right thing '
          'to leave with a reader.'],
         criterion=[('An argument about the evidence, not the topic',
                     'Task Response'),
                    ('An exception granted precisely',
                     'Task Response'),
                    ('A closing cost that nobody counts',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'plan.',
         lines=18)],
   gram=dict(
    point='Selection effects and hedged conclusion',
    explain=('Where a sample is incomplete, the conclusion has to be '
             'stated about the sample rather than about the world.'),
    examples=['We hear from the ones who stayed, not the ones who '
              'left.',
              'The pattern describes successful athletes, not the '
              'method that produced them.',
              'Among those who completed the programme, results were '
              'good.',
              'The evidence cannot show whether the approach works, '
              'which is different from showing that it does not.'],
    task='Rewrite each conclusion so that it refers to the sample '
         'studied.',
    items=[('Early specialisation produces professionals.',
            'Professional athletes largely specialised early, which is a '
            'fact about the survivors rather than about the method.'),
           ('The programme works.',
            'Among the children who completed the programme, results were '
            'good; those who left were not followed.'),
           ('Hard training produces champions.',
            'Champions report having trained hard, and so do many people '
            'who never became champions.'),
           ('The method is safe.',
            'No injuries were recorded among those still participating at '
            'the end of the study.'),
           ('The evidence proves nothing.',
            'The evidence cannot show whether the approach works, which '
            'is not the same as showing that it fails.')]),
   vocab=[('survivorship', 'studying only those who remained'),
          ('those who stayed', 'the people still in a group at the '
           'end'),
          ('whole group study', 'research following everybody who '
           'started'),
          ('worn down', 'exhausted to the point of stopping'),
          ('transferable skill', 'an ability useful in another '
           'activity'),
          ('leaving the sport', 'giving up an activity '
           'permanently'),
          ('standard', 'the level at which somebody competes'),
          ('narrow exception', 'a case that is genuinely different')],
   expr=[('we hear from the ones who stayed, not the ones who left',
          'the sentence this volume ends on'),
         ('asking the survivors how they survived',
          'names the fault in six words'),
         ('ahead at fifteen and not at twenty-one',
          'reports a finding precisely'),
         ('the cost nobody counts',
          'identifies what is missing from a measurement')],
   trans=['admittedly', 'and yet', 'on balance', 'in short'],
  ),
 ],
 technique=dict(
  title='A full timed Reading section: three passages, sixty minutes',
  body=('This is the last technique page in the volume and it asks you '
        'to stop practising and sit the paper. At the back of this book '
        'there is a complete Academic Reading paper: three passages, '
        'forty questions, sixty minutes, no extra time for transferring '
        'answers. Sit it in one go, with a clock, without stopping. '
        'Before you begin, write 20, 40 and 60 at the top of the page: '
        'those are the times by which each passage should be finished, '
        'and the third one is the one candidates overrun. Four rules '
        'carry most of the marks. Move on when your time is up, even '
        'mid-question, because the third passage is worth as many marks '
        'as the first and is the one people never reach. Answer every '
        'question, including the ones you are guessing, because there '
        'is no penalty and a blank is a mark given away. Transfer '
        'answers as you go rather than at the end, since on paper there '
        'is no extra time and on screen there is none either. And when '
        'a question refuses to close after you have read its paragraph, '
        'mark the margin and leave it: two minutes spent on one '
        'question costs you three elsewhere. Afterwards, mark it '
        'honestly and sort your errors into three piles — ran out of '
        'time, misread the question, did not know the words — because '
        'those three have completely different remedies and only the '
        'third is about English.'),
  panel=[('Write 20, 40, 60 at the top',
          'And move on when the time comes, even mid-question.'),
         ('Never leave a blank',
          'There is no penalty. A guess can be right.'),
         ('Transfer as you go',
          'There is no extra time in either format.'),
         ('Sort your errors into three piles',
          'Time, misreading, vocabulary. Different remedies.')],
  task='Sit the full Reading paper at the back of this book in one '
       'uninterrupted hour, then mark it and sort every error into one '
       'of the three piles.',
  qs=['Did you finish Passage 1 by minute 20?',
      'Did you reach the last question of Passage 3?',
      'How many blanks did you leave?',
      'How many errors were time, misreading, or vocabulary?',
      'Which pile was biggest, and what does that tell you to '
      'practise?']),
 outlining=dict(
  title='The whole outlining toolkit on one brainstorm',
  body=('Ten units of planning end here, and the final exercise uses '
        'everything at once on a single question. Brainstorm nine ideas '
        'for the cycle 5 question in four minutes without judging any '
        'of them. Then apply, in this order: the six tests from unit 1, '
        'which will remove about half the list; the unequal-pair test '
        'from unit 2, which finds the idea hiding inside another; the '
        'overlap test from unit 4, which merges the pair that would use '
        'the same evidence; the intruder test from unit 8, which '
        'removes the interesting idea that answers a different '
        'question; and the order test from unit 5, which decides which '
        'surviving paragraph has to come first. Write the plan, then '
        'write the essay from it in twenty-eight minutes without '
        'adding a new main idea. If the plan holds, you are ready for '
        'Volume 2, where the texts get faster and this part does not '
        'get harder. If it does not hold, the fault is almost always '
        'that a support was a restatement of its heading, and that is '
        'worth finding out here rather than in an examination.'),
  frame=('Children should not specialise in one sport before about '
         'fourteen, because the evidence for early specialisation '
         'comes from a sample that excludes everybody it failed, and '
         'because what children lose cannot be recovered later',
         [('The evidence is distorted by who we hear from',
           ['successful athletes are asked about their childhoods and '
            'those who left are not',
            'injury and loss of interest remove participants before '
            'anybody surveys them']),
          ('What children lose is not recoverable later',
           ['a wide range of movement skills is built most easily '
            'before fourteen',
            'a child who leaves a sport at fifteen usually leaves all '
            'sport'])]),
  task='Brainstorm nine ideas for the cycle 5 question, apply all five '
       'tests in order, write the plan, and write the essay from it in '
       'twenty-eight minutes.',
  qs=['How many of the nine survived the six tests?',
      'Which pair was really one idea?',
      'Which two would have used the same evidence?',
      'Which idea was the interesting intruder?',
      'Did the plan hold for the whole twenty-eight minutes?'],
  answers=['four or five, which is still one too many',
           'there is one in almost every brainstorm',
           'merge them; a paragraph with four supports is better',
           'write it in the margin for another essay',
           'if not, look for a support that repeated its heading']),
 candos=['I can read a timetable for its exceptions',
         'I can write a formal request that raises its own '
         'difficulty',
         'I can describe a chart whose pattern has one exception',
         'I can explain why improvement slows after a few months',
         'I can sit a full Reading paper under time and sort my '
         'errors'],
 tip=('This is the end of Volume 1. Before you start Volume 2, sit both '
      'papers at the back of this book under time on the same day. '
      'Practising skills and sitting a paper are different activities, '
      'and the next volume assumes you have found out how different.'),
)
