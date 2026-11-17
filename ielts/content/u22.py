# -*- coding: utf-8 -*-
"""Unit 22 - Work: Automation and Skills. IELTS Volume 3, band 6.0."""

_TASKS = dict(kind='bar', title='Share of working time by task type',
              sub='four occupations compared, percentage of hours',
              ylab='% of hours',
              cats=['Checkout\noperator', 'Warehouse\npicker',
                    'Care\nassistant', 'Plumber'],
              series=[('Routine manual', [46, 61, 18, 24]),
                      ('Routine cognitive', [34, 17, 12, 9]),
                      ('Non-routine', [20, 22, 70, 67])])

UNIT = dict(
 n=22, vol=3, level='B2', band='6.0',
 theme='Work: Automation and Skills',
 opener=(
   'A secondment form, four people who changed career, and a chart that '
   'explains why a plumber is harder to automate than an accountant. The '
   'unit ends on the gap between a statement that is true of a labour market '
   'and the same statement applied to one worker in it, which is where most '
   'arguments about automation go wrong.'),

 cycles=[
  dict(
   sub='Changing roles at work',
   step=1,
   read=[
    dict(heading='Internal transfers and secondments',
         kind='Policy page', task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-5',
         skill=('Two things with similar names are two sets of questions',
                ['Where a policy defines two arrangements side by side, the '
                 'questions come from the differences between them.',
                 'Make a two-column note as you read. Every row you can fill '
                 'is a question you have already answered.']),
         paras=[
          'A transfer is a permanent move to another role within the '
          'organisation. A secondment is a temporary move, normally between '
          'three and twelve months, after which the employee returns to '
          'their substantive post. Both are advertised internally before any '
          'external advertisement is placed.',
          'Transfers require a formal application and interview. Secondments '
          'may be arranged by agreement between the two managers concerned, '
          'with human resources notified, and no interview is required where '
          'the secondment is under six months.',
          'Pay during a secondment is the higher of the two salaries where '
          'the receiving role pays more. Where it pays less, the employee '
          'keeps their existing salary for the duration. Nobody is ever paid '
          'down for taking a secondment, and this is the point staff most '
          'often fail to check before refusing one.',
          'A substantive post is held open for the length of a secondment and '
          'may be covered temporarily. An employee who wishes to make the '
          'move permanent must apply for the role in the normal way when it '
          'is advertised, and holding it on secondment confers no priority.'],
         items=[
          ('A secondment normally lasts',
           ['up to three months', 'three to twelve months',
            'one to two years', 'as long as both agree'], 1,
           'Paragraph 1, after which the employee returns to the substantive '
           'post.'),
          ('No interview is required for a secondment of under',
           ['three months', 'six months', 'nine months', 'twelve months'], 1,
           'Paragraph 2, where the two managers may arrange it by '
           'agreement.'),
          ('If the receiving role pays less, the employee',
           ['takes the lower salary', 'keeps their existing salary',
            'receives an allowance', 'cannot be seconded'], 1,
           'Paragraph 3: nobody is paid down for taking a secondment.'),
          ('An employee’s ____________ post is held open during a '
           'secondment.', None, 'substantive',
           'Paragraph 4, and it may be covered temporarily.'),
          ('Holding a role on secondment confers no ____________ when it is '
           'advertised.', None, 'priority',
           'Paragraph 4: the employee must apply in the normal way.')]),
    dict(heading='How to apply internally',
         kind='Procedure notice', task='Flow-chart completion',
         band='gt_short', qtype='Questions 6-9',
         paras=[
          'Discuss the move with your current manager before you apply. This '
          'is a requirement and not a courtesy: an application is not '
          'processed until the release form it generates has been signed, and '
          'a manager who first hears of a move from the vacancy system is '
          'entitled to delay it.',
          'Submit the internal application form, which is shorter than the '
          'external one and asks for examples against the four criteria in '
          'the role profile. Do not attach a curriculum vitae; it will not be '
          'read, and the form exists precisely so that internal and external '
          'candidates are scored on the same evidence.',
          'Interviews for internal applicants are held within ten working '
          'days of the closing date. Where an internal candidate is '
          'unsuccessful, written feedback against each of the four criteria '
          'is provided automatically, which does not happen for external '
          'candidates and is worth asking about.',
          'If you are appointed, your release date is agreed between the two '
          'managers and is normally four weeks. It may be extended to eight '
          'where a handover is complex, and a disagreement that cannot be '
          'settled between them goes to the relevant director.'],
         items=[
          ('You must discuss the move with your manager because an '
           'application needs a signed ____________ form.', None, 'release',
           'Paragraph 1, which calls the discussion a requirement and not a '
           'courtesy.'),
          ('Internal applicants should not attach a ____________.', None,
           'curriculum vitae',
           'Paragraph 2: it will not be read, so that everybody is scored on '
           'the same evidence.'),
          ('Interviews are held within ____________ working days of the '
           'closing date.', None, 'ten',
           'Paragraph 3, and unsuccessful internal candidates get written '
           'feedback.'),
          ('The normal release period is ____________ weeks.', None, 'four',
           'Paragraph 4, extendable to eight where a handover is '
           'complex.')])],
   listen=[
    dict(heading='Asking about a secondment', part='Part 1',
         task='A call to a human resources adviser', band='l1',
         qtype='Questions 10-14',
         script=[
          ('Adviser', 'People services, Teodor speaking.'),
          ('Caller', 'Hello. There is a secondment advertised in the data '
           'team and I wanted to ask about it before I say anything to my '
           'manager.'),
          ('Adviser', 'I can help, although I will say at the start that you '
           'do have to speak to her, and sooner is better than later.'),
          ('Caller', 'I know. I wanted to have the facts first.'),
          ('Adviser', 'Fair enough. Which secondment is it?'),
          ('Caller', 'Data analyst, reference D A seven seven one.'),
          ('Adviser', 'D A seven seven one. That is a nine-month secondment, '
           'so it does need an interview; anything under six months does '
           'not.'),
          ('Caller', 'And my own job?'),
          ('Adviser', 'Held open for the nine months. They will probably '
           'cover it temporarily.'),
          ('Caller', 'The analyst role is a lower grade than mine. Does my '
           'pay drop?'),
          ('Adviser', 'No. That is the question everybody asks last and '
           'should ask first. You keep your existing salary for the whole '
           'secondment. If the role were higher, you would move up to it.'),
          ('Caller', 'I had assumed the opposite and I nearly did not '
           'apply.'),
          ('Adviser', 'You are not the first. One more thing worth knowing: '
           'if you want the job permanently afterwards, you apply for it like '
           'anybody else. Doing it for nine months gives you no claim on '
           'it.'),
          ('Caller', 'Is there anything I should put in the application that people usually leave out?'),
          ('Adviser', 'Evidence against all four criteria, with an example each. Internal candidates assume we know what they have done, write three lines, and lose to an external candidate who wrote three pages.'),
          ('Caller', 'That seems harsh.'),
          ('Adviser', 'It is deliberate, so that secondments are not used to '
           'appoint people quietly. The closing date is the eleventh, by the '
           'way, so the conversation with your manager is this week.')],
         items=[
          ('Reference number: ____________', None, 'DA771',
           'Given by the caller and read back by the adviser.'),
          ('Length of the secondment: ____________ months', None, 'nine',
           'Which is why an interview is required.'),
          ('An interview is not needed for secondments under ____________ '
           'months.', None, 'six',
           'Those may be arranged by agreement between the two managers.'),
          ('The caller’s salary will ____________.', None, 'stay the same',
           'Nobody is paid down for a secondment; a higher-paid role would '
           'raise it.'),
          ('Closing date: the ____________', None, 'eleventh',
           'Which the adviser uses to make the point about speaking to the '
           'manager this week.')]),
    dict(heading='A short talk: what moves people actually make',
         part='Part 2', task='A talk on internal career moves', band='l2',
         qtype='Questions 15-18',
         script=[
          ('Speaker', 'I have run internal recruitment for eleven years and I '
           'want to tell you what the data says about moving jobs inside an '
           'organisation, because it contradicts the advice you will get in '
           'every corridor.'),
          ('Speaker', 'The first thing is the direction of successful moves. '
           'People imagine the ladder: same job, one grade up. In practice '
           'the moves that work best are sideways, into a different function '
           'at the same grade, and the people who make one are more likely to '
           'be promoted within three years than the people who went straight '
           'up.'),
          ('Speaker', 'The second thing is timing. The commonest mistake is '
           'applying too late. People wait until they are unhappy, and an '
           'application written by somebody who wants to leave reads '
           'completely differently from one written by somebody who wants to '
           'arrive. Panels can tell, every time.'),
          ('Speaker', 'Third, and this is the one I would put on a poster: '
           'the internal application form is not a formality. Internal '
           'candidates lose to external ones constantly, and when I look at '
           'why, it is almost never ability. It is that the internal '
           'candidate assumed we already knew what they had done and wrote '
           'four lines.'),
          ('Speaker', 'Fourth, feedback. Every unsuccessful internal '
           'candidate here gets written feedback against all four criteria, '
           'automatically. About a third of people read it. Those who do are '
           'appointed at nearly twice the rate on their next attempt, which '
           'is the single clearest number I have.'),
          ('Speaker', 'And a last word about secondments. Take them. The '
           'worst outcome is that you return to your own job having learned '
           'something and made twenty new contacts, and the figure on your '
           'payslip cannot go down.')],
         items=[
          ('Which moves does the speaker say work best?',
           ['One grade up', 'Sideways into a different function',
            'Into management', 'Out of the organisation'], 1,
           'Such people are more likely to be promoted within three years.'),
          ('The commonest mistake with timing is',
           ['applying too early', 'applying too late',
            'applying too often', 'missing the closing date'], 1,
           'An application by somebody who wants to leave reads differently '
           'from one by somebody who wants to arrive.'),
          ('Why do internal candidates lose to external ones?',
           ['Lower ability', 'They assume the panel already knows them',
            'Worse qualifications', 'Manager opposition'], 1,
           'He says it is almost never ability, and that they write four '
           'lines.'),
          ('People who read their feedback are appointed next time at',
           ['the same rate', 'nearly twice the rate', 'three times the '
            'rate', 'a lower rate'], 1,
           'He calls this the single clearest number he has.')])],
   speak=dict(
    part='Part 1', focus='Skills you have learned at work',
    intro=('Two or three sentences each. A job, a course or helping at home '
           'all count; the examiner wants clear English and not a career.'),
    qs=['Have you ever had a job or helped in a family business?',
        'What skills do you think are most useful at work?',
        'Do people in your country often change jobs?',
        'Would you like to learn something new for work?'],
    shape=[('answer', 'I worked in my uncle’s shop for two summers.'),
           ('support', 'What I learned there was how to talk to people who '
            'were annoyed.'),
           ('follow-up', 'That has been more useful than anything else I was '
            'taught.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Applying for a secondment',
         prompt=('You would like to apply for a temporary position in another '
                 'department. Write a letter to your manager. In your letter: '
                 'say which position you want and why; explain how your work '
                 'would be covered; ask for a meeting to discuss it. Write at '
                 'least 150 words.'),
         model=[
          'Dear Mrs Lindqvist,',
          'I am writing to tell you that I would like to apply for the '
          'nine-month secondment in the data team, reference DA771, which '
          'closes on the eleventh. I wanted you to hear it from me before you '
          'saw it on the system.',
          'My reason is that the role uses the reporting work I have been '
          'doing for our own team since last autumn, and it would let me '
          'learn the analysis side properly. I would expect to come back a '
          'more useful member of this department than I left it.',
          'On cover, the monthly returns are now fully documented and Idris '
          'has produced the last two without help. The part that would need '
          'arranging is the supplier reconciliation, which takes two days a '
          'month and which I could train somebody to do before I leave.',
          'Could we find half an hour this week to discuss it? I am free on '
          'Wednesday and Thursday afternoon, and I am happy to come to you.',
          'Yours sincerely,',
          'P. Castellanos'],
         notes=[
          'The first paragraph does something the task does not require and '
          'that every reader notices: it explains why the letter exists '
          'before the manager hears the news elsewhere. One sentence, and it '
          'changes the tone of everything after it.',
          'The cover bullet names what is already solved and what is not. A '
          'letter claiming everything is covered is not believed; a letter '
          'naming the one awkward task and proposing a fix is.',
          'The meeting request gives two specific times and offers to travel. '
          'Asking "could we meet soon" puts the work back on the reader, '
          'which is the opposite of what you want.'],
         criterion=[('Explaining why the letter exists before the news '
                     'travels', 'Task Response'),
                    ('Naming the one task that is not yet covered',
                     'Task Achievement'),
                    ('A meeting request with specific times',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Announcing something before somebody else does',
    explain=('A letter that brings news to a manager is easier to write if '
             'you say why you are writing first. These patterns do that '
             'without sounding apologetic.'),
    examples=['I am writing to tell you that I would like to apply for...',
              'I wanted you to hear it from me before you saw it on the '
              'system.',
              'I thought I should mention it before the closing date.',
              'I would rather discuss it with you first.'],
    task='Rewrite each opening so the reason for writing comes first.',
    items=[('I want the job in the data team.',
            'I am writing to tell you that I would like to apply for the '
            'secondment in the data team.'),
           ('You will see my name on the list.',
            'I wanted you to hear this from me before my name appears on the '
            'list.'),
           ('I am leaving in four weeks.',
            'I am writing to let you know that I have been offered a move, '
            'with a release date four weeks from now.'),
           ('Can we meet?',
            'I would be grateful for half an hour to discuss it with you.'),
           ('I did not want to tell you late.',
            'I thought it better to raise it now than after the closing '
            'date.')]),
   vocab=[('secondment', 'a temporary move to another role'),
          ('substantive post', 'the job somebody permanently holds'),
          ('handover', 'passing work to the person taking it on'),
          ('release date', 'when an employee leaves one role for another'),
          ('role profile', 'the document describing a job and its criteria'),
          ('internal candidate', 'an applicant already working there'),
          ('cover', 'arrangements for work while somebody is away'),
          ('reconciliation', 'checking two sets of figures against each '
           'other')],
   expr=[('I wanted you to hear it from me first',
          'manages news before it travels'),
         ('The part that would need arranging is',
          'names the one genuine difficulty'),
         ('I am happy to come to you', 'removes an obstacle to a meeting'),
         ('I would expect to come back a more useful member of this '
          'department', 'frames a request as a benefit to the reader')],
   trans=['on cover', 'which', 'before', 'and'],
  ),

  dict(
   sub='Retraining',
   step=2,
   read=[
    dict(heading='Four workers who changed career',
         kind='Four short texts', task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 19-24',
         paras=[
          'A  Benedetta: I retrained at forty-six and the hardest part was '
          'not the learning. It was eleven months of being the oldest person '
          'in the room and the worst at everything in it. Nobody warns you '
          'about that, and it is the reason most of the people who started '
          'with me stopped.',
          'B  Kwabena: The course was free and that was the problem. I did '
          'three before I finished one, because nothing was lost by walking '
          'away. When I eventually paid four hundred pounds of my own money '
          'for the last one, I finished it in eleven weeks.',
          'C  Marguerite: I did not retrain at all and I want that counted. I '
          'kept the same job title and the work underneath it changed '
          'completely over six years. Everybody talks about moving to a new '
          'career; most of us stay still while the career moves.',
          'D  Haruki: The qualification got me interviews and nothing else. '
          'What got me the job was three months of unpaid work that I could '
          'only do because my partner was earning. I am wary of advice from '
          'people who did what I did and think it was their determination.'],
         items=[
          ('Which person says the main difficulty was psychological?',
           ['Benedetta', 'Kwabena', 'Marguerite', 'Haruki'], 0,
           'Eleven months of being the oldest and the worst at everything.'),
          ('Which person found that paying made them finish?',
           ['Benedetta', 'Kwabena', 'Marguerite', 'Haruki'], 1,
           'Three free courses abandoned, one paid course finished in eleven '
           'weeks.'),
          ('Which person changed without moving jobs?',
           ['Benedetta', 'Kwabena', 'Marguerite', 'Haruki'], 2,
           'Same job title, completely different work underneath it.'),
          ('Which person credits circumstances others may not have?',
           ['Benedetta', 'Kwabena', 'Marguerite', 'Haruki'], 3,
           'Three months unpaid, possible only because a partner was '
           'earning.'),
          ('Kwabena believes free courses are a bad idea.',
           ['Yes', 'No', 'Not Given'], 2,
           'He reports what happened to him; he never recommends '
           'charging everybody.',
           {0: 'Yes would need that view; he reports his own case and '
               'recommends nothing.', 1: 'No would need him to argue for free courses, which he '
               'never does.'}),
          ('Marguerite thinks her experience is unusual.',
           ['Yes', 'No', 'Not Given'], 1,
           'She says most of us stay still while the career moves, '
           'which is the opposite.',
           {0: 'Yes would need it to be unusual; she says most of us '
               'are in it.', 2: 'Not Given is wrong because she places herself among '
               'the majority.'})])],
   listen=[
    dict(heading='A short talk: retraining', part='Part 2',
         task='A talk at a careers centre', band='l2',
         qtype='Questions 25-28',
         script=[
          ('Speaker', 'Everybody in this room has been told that the answer '
           'to a changing job market is retraining. I want to spend fifteen '
           'minutes on what that word hides, because it covers four quite '
           'different things.'),
          ('Speaker', 'The first is a short course that adds a tool to a job '
           'you already do. A fortnight, often paid for by an employer, and '
           'it has the highest completion rate of anything we offer: around '
           'ninety per cent. It also changes your pay least.'),
          ('Speaker', 'The second is a qualification in a field next to your '
           'own, which takes six to twelve months. Completion is about '
           'sixty-five per cent, and the people who finish usually move. '
           'This is the one that does what the word retraining is supposed to '
           'mean.'),
          ('Speaker', 'The third is a full change of field, two years or '
           'more, often with a drop in income during it. Completion falls to '
           'about forty per cent, and the single best predictor of finishing '
           'is not ability or motivation. It is whether somebody else in the '
           'household is earning.'),
          ('Speaker', 'The fourth is the one nobody counts: staying where you '
           'are while the job changes under you. Most people do this, nobody '
           'calls it retraining, and it gets no funding and no certificate, '
           'although it is by a wide margin the commonest way a workforce '
           'changes what it can do.'),
          ('Speaker', 'So when a politician says we will retrain people, ask '
           'which of the four they mean. The first is cheap and does little. '
           'The third works and requires somebody at home with an income, '
           'which is a fact about households and not about training policy at '
           'all.')],
         items=[
          ('Which type has the highest completion rate?',
           ['A short course', 'A qualification next to your field',
            'A full change of field', 'Staying and adapting'], 0,
           'Around ninety per cent, and it changes pay least.'),
          ('Completion for a qualification in a neighbouring field is about',
           ['forty per cent', 'sixty-five per cent', 'ninety per cent',
            'unknown'], 1,
           'And the people who finish usually move jobs.'),
          ('The best predictor of finishing a full change of field is',
           ['ability', 'motivation', 'another earner in the household',
            'previous qualifications'], 2,
           'He says explicitly that it is not ability or motivation.'),
          ('Which type does nobody count?',
           ['Short courses', 'Neighbouring qualifications',
            'Full changes', 'Adapting in the same job'], 3,
           'No funding, no certificate, and the commonest way a workforce '
           'changes.')]),
    dict(heading='Two advisers on retraining schemes', part='Part 3',
         task='A discussion between careers advisers', band='l3',
         qtype='Questions 29-33',
         script=[
          ('Rosalind', 'The completion figures came through and the two-year '
           'programme is at thirty-eight per cent. The department will want '
           'to close it.'),
          ('Emeka', 'And they will be comparing it with the fortnight courses '
           'at ninety, which is comparing a marathon with a bus ride.'),
          ('Rosalind', 'That is the argument I want to make and I need it '
           'sharper than that.'),
          ('Emeka', 'Then make it about who. Nobody drops out of a fortnight '
           'course because their landlord put the rent up. Thirty-eight per '
           'cent of a two-year programme is thirty-eight per cent of people '
           'who had to survive two years.'),
          ('Rosalind', 'The counter is obvious, though. If two thirds do not '
           'finish, the money spent on them produced nothing.'),
          ('Emeka', 'Which is true and is an argument for maintenance '
           'payments, not for closing it. We know what causes the dropout. We '
           'have known for six years.'),
          ('Rosalind', 'We also have no evidence that maintenance payments '
           'fix it, because nobody has tried.'),
          ('Emeka', 'Fair. So propose the trial rather than the programme. '
           'Two hundred people, half with a living allowance, and we will '
           'know in two years.'),
          ('Rosalind', 'That is a better paper than the one I was going to '
           'write, and it has a problem: two years is longer than this '
           'department has ever waited for anything.'),
          ('Emeka', 'Then give them an interim at twelve months. Dropout is '
           'front-loaded; most of it happens in the first four.'),
          ('Rosalind', 'How many would we need in each arm for the twelve-month figure to mean anything?'),
          ('Emeka', 'A hundred each, at the dropout rates we see, which is why I said two hundred. Below that we will produce a number nobody can act on and everybody will quote.'),
          ('Rosalind', 'Then I will ask for two hundred and settle for a hundred and sixty, which is how this always ends.'),
          ('Rosalind', 'Then I can report something before they lose interest, which is the actual constraint we are designing '
           'around.')],
         items=[
          ('The completion rate for the two-year programme is',
           ['thirty-eight per cent', 'sixty-five per cent',
            'ninety per cent', 'not yet known'], 0,
           'Which Rosalind expects will prompt the department to close it.'),
          ('Emeka says comparing it with fortnight courses is like comparing',
           ['two marathons', 'a marathon with a bus ride',
            'two bus rides', 'a course with a job'], 1,
           'His point is that the two populations are not comparable.'),
          ('What does he say causes the dropout?',
           ['Poor teaching', 'Surviving two years financially',
            'Lack of interest', 'Difficult assessment'], 1,
           'Nobody leaves a fortnight course because of a rent increase.'),
          ('What does Rosalind point out about maintenance payments?',
           ['They are too expensive', 'Nobody has tested them',
            'They have failed before', 'The department forbids them'], 1,
           'Which is why Emeka proposes a trial instead of a programme.'),
          ('Why do they add an interim report at twelve months?',
           ['The funder requires it', 'Dropout happens early',
            'The sample is small', 'To save money'], 1,
           'Most of it happens in the first four months, so an early report '
           'is informative.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Change at work',
    longturn=[('The thing I had to learn was a new system for logging hospital '
               'appointments, which replaced one that had been in use for '
               'eleven years.'),
              ('I had to learn it because the old system was being switched '
               'off on a fixed date, and I was one of four people in the '
               'department expected to be able to use the new one from the '
               'morning it started.'),
              ('The way I went about it was not the way I was told to. There '
               'was a two-day course, which covered everything and taught me '
               'almost nothing, because I could not tell which parts I would '
               'need. So after the course I asked a colleague for the twenty '
               'things she did most often, wrote them down in order, and '
               'practised only those until I could do them without the notes. '
               'Everything else I learned when I needed it, by looking it up '
               'with a patient waiting, which is not ideal but is how it '
               'actually happened.'),
              ('Once I could do it, I felt relieved rather than pleased, and '
               'then slightly annoyed. Relieved because the first fortnight '
               'had been genuinely stressful. Annoyed because I realised the '
               'new system was better, and I had spent two months explaining '
               'to colleagues why the change was unnecessary. I have been more '
               'careful since about the difference between a change being '
               'badly introduced and a change being wrong.')],
    intro=('Short answers, then the long turn. One occasion told properly is '
           'worth more than three mentioned.'),
    cue=('Describe a time you had to learn something new for work or study.',
         ['what you had to learn', 'why you had to learn it',
          'how you went about it',
          'and explain how you felt once you could do it']),
    qs=['Have you learned anything new in the last year?',
        'Do people in your country take courses after they start work?',
        'Now look at the card. You have one minute to make notes.',
        'Should employers pay for training?'],
    shape=[('answer', 'Spreadsheets, properly, at twenty-six.'),
           ('support', 'My manager left and the monthly figures became '
            'mine.'),
           ('follow-up', 'I had two weeks and a colleague who answered '
            'questions.'),
           ('support', 'I was embarrassed at how long I had avoided it.'),
           ('follow-up', 'And it turned out to be four hours of learning '
            'spread over two years of worry.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Who should pay for retraining?',
         prompt=('Some people think employers should pay to retrain workers '
                 'whose jobs change. Others believe it is the '
                 'responsibility of the worker or the government. Discuss '
                 'both views and give your own opinion. Write at least 250 '
                 'words.'),
         model=[
          'This question is usually argued as though training were one thing. '
          'It is at least three, and who should pay has a different answer '
          'for each, which is why the general argument never reaches a '
          'conclusion.',
          'The case for employers is strongest where the training is '
          'specific. A company that introduces a new system creates the need '
          'for the training itself, and it captures the benefit directly, so '
          'asking the worker to fund it would be asking them to pay for a '
          'decision somebody else made. Most employers accept this and the '
          'dispute is not really here.',
          'The case against employers is strongest where the skill is '
          'general. A firm that pays to turn a warehouse worker into an '
          'electrician has bought a qualification the worker can take '
          'anywhere, and may take to a competitor within a year. This is not '
          'meanness; it is a genuine reason why general training is '
          'systematically underfunded by firms everywhere.',
          'That gap is where the public case sits. Where a benefit is spread '
          'across many future employers and across the worker, no single '
          'party has a reason to pay for all of it, and the result is that '
          'nobody does. Governments fund exactly this kind of thing in other '
          'areas without much argument.',
          'My own position follows the specificity: employers should pay for '
          'firm-specific training, the state for general qualifications, and '
          'the worker for neither. What I would add is that fees are not the '
          'binding constraint. The best predictor of whether somebody '
          'completes a long course is whether the household can survive '
          'while they do it, and a free course with no maintenance is free '
          'to people who were never going to be stopped by the fee.'],
         notes=[
          'The essay divides the subject before arguing about it, which is '
          'the move this volume teaches most often. Once training is split '
          'into specific and general, the two cases stop contradicting each '
          'other.',
          'Paragraph 3 gives the employers’ objection its real force, '
          'including the word that makes it respectable: this is not '
          'meanness. Examiners notice an opposing case that has been '
          'understood.',
          'The final sentence moves the argument from fees to maintenance. '
          'Ending on the factor the question did not mention is a strong '
          'close when, as here, the essay has already answered what was '
          'asked.'],
         criterion=[('Dividing the subject before arguing about it',
                     'Task Response'),
                    ('Giving the opposing case its real force',
                     'Task Response'),
                    ('Closing on the factor the question omitted',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Dividing a subject before arguing about it',
    explain=('Many Task 2 prompts ask one question about something that is '
             'really several things. Splitting it in the introduction makes '
             'every paragraph after it easier to write.'),
    examples=['Training is at least three things, and who pays differs for '
              'each.',
              'The case for employers is strongest where the training is '
              'specific.',
              'Once the two are separated, the arguments stop '
              'contradicting each other.',
              'The question has a different answer in each case.'],
    task='Split each subject into the parts that need separate answers.',
    items=[('Should education be free?',
            'School, undergraduate study and professional retraining raise '
            'different questions about who benefits and who should pay.'),
           ('Is technology good for work?',
            'Technology that replaces tasks and technology that replaces '
            'whole jobs have different effects on the same worker.'),
           ('Should the government support industry?',
            'Support for a new industry and support for a declining one are '
            'opposite policies with the same name.'),
           ('Do qualifications matter?',
            'A qualification can signal ability or supply a skill, and only '
            'the second is worth paying for directly.'),
           ('Should people work from home?',
            'Work that is individual and work that depends on others answer '
            'this differently.')]),
   vocab=[('specific training', 'training useful mainly to one employer'),
          ('general training', 'training a worker can take anywhere'),
          ('maintenance', 'money to live on while studying'),
          ('completion rate', 'the share of people who finish'),
          ('dropout', 'leaving a course before the end'),
          ('allowance', 'a regular payment for a particular purpose'),
          ('underfund', 'to provide less money than something needs'),
          ('binding constraint', 'the limit that is actually stopping '
           'something')],
   expr=[('comparing a marathon with a bus ride',
          'rejects a comparison between unlike things'),
         ('which is true and is an argument for X, not for Y',
          'accepts a fact and redirects what follows from it'),
         ('propose the trial rather than the programme',
          'offers a testable version of a proposal'),
         ('this is not meanness', 'protects an opponent from a cheap '
          'reading')],
   trans=['the case for', 'the case against', 'that gap', 'what I would '
          'add'],
  ),

  dict(
   sub='Which tasks machines take',
   step=3,
   read=[
    dict(heading='Routine, non-routine and the jobs in between',
         kind='Data article',
         task='Matching information and True/False/Not Given',
         band='gt_work', qtype='Questions 34-39',
         figure=_TASKS,
         paras=[
          'The chart divides the working time of four occupations into three '
          'kinds of task. Routine manual work follows a physical procedure '
          'that does not change. Routine cognitive work follows a rule that '
          'can be written down. Non-routine work requires judgement, physical '
          'adaptation to an unpredictable situation, or dealing with '
          'people.',
          'The division matters because machines have historically taken '
          'routine tasks of both kinds and left the rest. A warehouse picker '
          'spends 61 per cent of the working day on routine manual tasks and '
          'a checkout operator 34 per cent on routine cognitive ones, which '
          'is why both occupations have changed sharply in twenty years.',
          'Care assistants and plumbers sit at the other end, at 70 and 67 '
          'per cent non-routine. Neither job is cognitively demanding in the '
          'way an accountant’s is, and both have proved far harder to '
          'automate than many jobs requiring longer training. This is the '
          'finding that surprises people and it has a name: the paradox is '
          'that what is hard for a human is often easy for a machine, and '
          'what any four-year-old can do is often impossible for one.',
          'The chart also shows why whole-occupation predictions tend to be '
          'wrong. No occupation here is entirely routine or entirely not. A '
          'checkout operator is 80 per cent routine and 20 per cent '
          'something else, and that 20 per cent is why the job has changed '
          'shape instead of disappearing: the machine took the scanning and '
          'the person kept the exceptions.',
          'That pattern repeats across the labour market and is the reason '
          'forecasts of job destruction have consistently overshot. Tasks are '
          'automated; jobs are bundles of tasks; and a bundle usually loses '
          'some of its contents and acquires others instead of being thrown '
          'away.'],
         items=[
          ('Which occupation has the highest share of routine manual work?',
           ['Checkout operator', 'Warehouse picker', 'Care assistant',
            'Plumber'], 1,
           'At 61 per cent, against 46 for the checkout operator.'),
          ('Which paragraph explains why whole-occupation forecasts fail?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'], 2,
           'No occupation is entirely routine, and the remainder is what '
           'changes the job’s shape.'),
          ('Which two occupations are hardest to automate?',
           ['Checkout and warehouse', 'Warehouse and care',
            'Care and plumbing', 'Checkout and plumbing'], 2,
           'At 70 and 67 per cent non-routine respectively.'),
          ('Routine ____________ work follows a rule that can be written '
           'down.', None, 'cognitive',
           'Paragraph 1, as against routine manual work, which follows a '
           'physical procedure.'),
          (
           'Care assistants spend more of their time on non-routine '
           'work than plumbers do.',
           ['True', 'False', 'Not Given'], 0,
           'Paragraph 3 gives care assistants 70 per cent against 67 '
           'for plumbers.',
           {1: 'False reverses the two figures given in paragraph 3.', 2: 'Not Given is wrong because both percentages are '
               'stated.'}),
          ('Forecasts of job destruction have usually been too low.',
           ['True', 'False', 'Not Given'], 1,
           'The last paragraph says such forecasts have consistently '
           'overshot.',
           {0: 'True reverses the finding; overshooting means the '
               'forecasts were too high.', 2: 'Not Given is wrong because the last paragraph states '
               'the direction.'})])],
   listen=[
    dict(heading='A lecture on task composition', part='Part 4',
         task='A lecture on what automation actually takes', band='l4',
         qtype='Questions 40-45',
         figure=_TASKS,
         script=[
          ('Lecturer', 'The question "will this job be automated" is the '
           'wrong question, and I can show you why with the chart on your '
           'handout in about ten minutes.'),
          ('Lecturer', 'Three categories. Routine manual: a physical '
           'procedure that repeats. Routine cognitive: a rule you could write '
           'down. Non-routine: judgement, an unpredictable physical '
           'environment, or other people. Machines take the first two and '
           'struggle with the third, and that has been true for forty '
           'years.'),
          ('Lecturer', 'Look at the care assistant: seventy per cent '
           'non-routine. Now compare that with a job we think of as skilled, '
           'say a junior accountant, which is mostly rule-following. The '
           'accountant has the longer training and the more automatable '
           'day.'),
          ('Lecturer', 'That inversion has a name in my field. The things '
           'humans find hard — arithmetic, memory, rule-following at speed — '
           'are what computers were built to do. The things any small child '
           'does without noticing — recognising a face, crossing a cluttered '
           'room, telling when somebody is upset — remain extremely '
           'difficult. Hard for us, easy for them; easy for us, hard for '
           'them.'),
          ('Lecturer', 'So here is why whole-job forecasts keep failing. No '
           'job on this chart is a hundred per cent anything. A checkout '
           'operator is eighty per cent routine, and the remaining twenty is '
           'the awkward customer, the item that will not scan, the thing that '
           'has to be judged. Automate eighty per cent and you do not get '
           'eight-tenths of a redundancy; you get a job with a different '
           'shape and often a worse one, because what is left is the '
           'exceptions all day.'),
          ('Lecturer', 'One more thing the chart cannot show, and it is the reason I am careful with it. These are shares of time, not shares of difficulty. The twenty per cent of a checkout operator’s day that is non-routine contains every angry customer and every exception, and it is the part that makes the job hard to do and hard to leave.'),
          ('Lecturer', 'That last point is where I would put the policy attention. The studies that count jobs lost have consistently '
           'overshot. The studies that look at what the remaining work feels '
           'like have barely been done, and the people in those jobs have '
           'been telling us about it for a decade.')],
         items=[
          ('The lecturer says the wrong question is',
           ['which tasks are routine', 'will this job be automated',
            'how fast machines improve', 'who pays for retraining'], 1,
           'He proposes task composition as the right one.'),
          ('Which category do machines struggle with?',
           ['Routine manual', 'Routine cognitive', 'Non-routine',
            'All three equally'], 2,
           'Judgement, unpredictable physical settings and other people.'),
          ('He compares the care assistant with',
           ['a plumber', 'a junior accountant', 'a warehouse picker',
            'a teacher'], 1,
           'The accountant has longer training and a more automatable day.'),
          ('The inversion he describes is that',
           ['machines do everything better',
            'what is hard for humans is easy for machines',
            'training predicts automation', 'small children learn faster'], 1,
           'And what a small child does without noticing remains very '
           'difficult.'),
          ('Automating eighty per cent of a job produces',
           ['eight-tenths of a redundancy', 'a job with a different shape',
            'no change', 'a new occupation'], 1,
           'And often a worse one, because what is left is the exceptions '
           'all day.'),
          ('Where does he say policy attention should go?',
           ['Counting jobs lost', 'What the remaining work feels like',
            'Training budgets', 'Machine capability'], 1,
           'Studies of this have barely been done, though workers have '
           'reported it for a decade.')])],
   speak=dict(
    part='Part 3', focus='Work that cannot be automated',
    intro=('Four or five sentences. Try once to talk about tasks instead of '
           'jobs.'),
    qs=['Which jobs do you think machines will never do?',
        'Is it a problem if machines do more of the work?',
        'Should companies have to say when a machine makes a decision?',
        'What kind of work do people find most satisfying?'],
    shape=[('answer', 'I would rather talk about tasks than whole jobs.'),
           ('support', 'Almost no job is entirely one kind of work.'),
           ('follow-up', 'Machines take the repeating parts and leave the '
            'exceptions.'),
           ('support', 'So the job changes shape instead of disappearing.'),
           ('follow-up', 'Which can leave somebody doing only the difficult '
            'parts all day.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Working time by task type',
         prompt=('The chart below shows how four occupations divide their '
                 'working time between three kinds of task. Summarise the '
                 'information by selecting and reporting the main features, '
                 'and make comparisons where relevant. Write at least 150 '
                 'words.'),
         figure=_TASKS,
         model=[
          'The bar chart compares four occupations by the share of working '
          'time each spends on routine manual, routine cognitive and '
          'non-routine tasks. Overall, the four fall into two clear pairs: '
          'checkout operators and warehouse pickers spend most of their time '
          'on routine work of one kind or another, while care assistants and '
          'plumbers spend around two thirds of theirs on non-routine '
          'tasks.',
          'Taking the routine-heavy pair first, the warehouse picker spends '
          'the largest single share of any worker on one category, at 61 per '
          'cent routine manual, with a further 17 per cent routine cognitive. '
          'The checkout operator divides routine time more evenly, at 46 and '
          '34 per cent, giving a combined routine share of 80 per cent, the '
          'highest of the four.',
          'The second pair is almost the mirror image. Care assistants spend '
          '70 per cent of their time on non-routine tasks and plumbers 67 per '
          'cent, with the remainder divided unevenly: the plumber does rather '
          'more routine manual work, at 24 per cent against 18.',
          'Routine cognitive work is the smallest category throughout, '
          'ranging from 34 per cent for the checkout operator down to 9 per '
          'cent for the plumber.'],
         notes=[
          'The Overall statement names the grouping, which is the main '
          'feature: two pairs behaving in opposite ways. Grouping by '
          'behaviour is the move this volume teaches in unit 29 and it '
          'applies here.',
          'Each pair gets a paragraph, and inside the paragraph the two '
          'occupations are compared with each other. That is what makes it an '
          'answer and not a list of twelve numbers.',
          'The last paragraph handles the third series on its own, because '
          'it behaves the same way everywhere. A series with no variation to '
          'report still has to be reported, and a sentence is enough.'],
         criterion=[('Grouping four occupations into two behaving pairs',
                     'Coherence and Cohesion'),
                    ('Comparing within each pair, not listing',
                     'Task Achievement'),
                    ('Reporting the flattest series briefly',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing shares that add to a whole',
    fix=dict(
     text=('The chart shows four shares which together make up the whole. '
           'Manufacturing accounted for 34 per cent, the largest single share. '
           'Services took 28 per cent, and agriculture and construction made '
           'up the remainder. The four shares are adding to 100 per cent, so '
           'no category has been left out of the figure.'),
     faults=[('agriculture and construction made up the remainder',
              'agriculture and construction made up the remaining 38 per cent',
              ('The remainder leaves the reader to do the arithmetic, which a '
               'Task 1 answer should do for them.')),
             ('The four shares are adding to 100 per cent',
              'The four shares add to 100 per cent',
              ('A permanent fact about the chart takes the present simple, not '
               'the continuous.')),
             ('so no category has been left out of the figure',
              'so no category has been left out',
              ('Of the figure adds nothing and makes the sentence harder to '
               'parse.'))]),
    explain=('When three categories make up 100 per cent, the language has to '
             'keep the reader aware of the whole. These patterns do that and '
             'avoid listing every figure separately.'),
    examples=['The warehouse picker spends 61 per cent on routine manual '
              'work, with a further 17 per cent routine cognitive.',
              'This gives a combined routine share of 80 per cent.',
              'The remainder is divided unevenly between the other two.',
              'Routine cognitive work is the smallest category throughout.'],
    task='Rewrite each pair of figures as a share of the whole.',
    items=[('Routine manual 46%. Routine cognitive 34%.',
            'Routine work accounts for 80 per cent in total, split 46 and 34 '
            'between manual and cognitive.'),
           ('Non-routine 70%.',
            'Non-routine tasks take up 70 per cent of the working day, '
            'leaving less than a third for everything else.'),
           ('Plumber: 24% manual, 9% cognitive, 67% non-routine.',
            'Two thirds of a plumber’s time is non-routine, with the '
            'remaining third weighted towards manual work.'),
           ('Care assistant 18% manual, plumber 24% manual.',
            'The plumber spends rather more time on routine manual work than '
            'the care assistant, at 24 per cent against 18.'),
           ('Cognitive is lowest everywhere.',
            'Routine cognitive work is the smallest category in all four '
            'occupations.')]),
   vocab=[('routine', 'following the same procedure every time'),
          ('non-routine', 'requiring judgement or adaptation'),
          ('cognitive', 'involving thinking rather than physical action'),
          ('task mix', 'the proportions of different work in one job'),
          ('occupation', 'the kind of work a person does'),
          ('redundancy', 'the loss of a job because it is no longer needed'),
          ('forecast', 'a prediction about the future'),
          ('overshoot', 'to go further than the true figure')],
   expr=[('the paradox is that', 'introduces a counter-intuitive finding'),
         ('you do not get eight-tenths of a redundancy',
          'rejects a proportional inference'),
         ('a job with a different shape',
          'describes change that is not loss'),
         ('tasks are automated; jobs are bundles of tasks',
          'states a distinction compactly')],
   trans=['taking the first', 'the second pair', 'with the remainder',
          'throughout'],
  ),

  dict(
   sub='What happened the last four times',
   step=4,
   read=[
    dict(heading='Two centuries of machines and the jobs that followed',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 46-52',
         paras=[
          'Anxiety about machines destroying work is not new, and the four '
          'episodes usually cited have more in common than the accounts of '
          'them suggest. In each, a technology removed a large share of the '
          'tasks in a major occupation; in each, total employment was higher '
          'twenty years later; and in each, the people displaced were not the '
          'people who took the new jobs.',
          'The first episode is the one everybody names. Mechanised weaving '
          'removed most of the manual work in textiles over roughly fifty '
          'years. Employment in textiles rose for much of that period, '
          'because cloth became cheap enough that demand grew faster than '
          'the labour needed per metre fell. This is the standard reassuring '
          'story and it is accurate as far as it goes.',
          'What the standard account omits is the distribution. The weavers '
          'whose skill was removed did not become factory operatives on '
          'better terms. Many ended their working lives poorer, and the '
          'better-paid work appeared a generation later and in different '
          'towns. The aggregate recovered inside a decade; the individuals '
          'mostly did not recover at all.',
          'The second and third episodes, mechanised agriculture and '
          'containerised shipping, follow the same shape with better records. '
          'Agricultural employment fell by more than ninety per cent in most '
          'industrial countries. The children of farm labourers did take the '
          'new urban jobs, which is the adjustment working, and it took a '
          'generation, which is the part policy discussions rarely price.',
          'The fourth episode is office computerisation, and it is the one '
          'that resembles the present most closely. Here the displaced work '
          'was cognitive and middle-paid: clerks, typists, book-keepers. The '
          'new jobs appeared at both ends, in professional work requiring '
          'more education and in services requiring less, which is the '
          'pattern economists call polarisation.',
          'Polarisation matters because it changes what adjustment means. '
          'When agriculture shed labour, the new work was mostly at a similar '
          'level and often paid better. When offices shed clerks, a worker in '
          'the middle had to move up, which requires time and money, or down, '
          'which requires neither. The commonest outcome was down, and it was '
          'recorded in the aggregate as a successful reallocation of '
          'labour.',
          'A fifth episode is rarely counted and belongs in the list. The '
          'spread of the telephone switchboard, and then its automation, '
          'employed and then released several hundred thousand young women '
          'in a single generation. It is omitted from most accounts because '
          'the work was done by women and classified as temporary, which is '
          'a fact about record-keeping and not about the labour market.',
          'Including it changes the picture in one respect. The displaced '
          'switchboard operators did not move into comparable work, and no '
          'account at the time described this as a problem, because the '
          'expectation was that they would leave the workforce on marriage. '
          'The aggregate recorded no difficulty, and the aggregate was '
          'measuring a population it had already decided not to follow.',
          'This is the point at which the historical record stops being '
          'reassuring and starts being specific. The claim that employment '
          'recovers is well supported. The claim that displaced workers '
          'recover is not supported at all, and the two are reported '
          'interchangeably in public discussion because the first is easy to '
          'measure and the second requires following people for twenty '
          'years.',
          'A fair summary would be that the optimists have the better of the '
          'argument about totals and the pessimists have the better of it '
          'about people. Both have been making their case with the same four '
          'examples for two hundred years, and the examples support both, '
          'which is a sign that the question has been badly framed rather '
          'than that the evidence is poor.'],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['The reassuring account', 'What the account leaves out',
            'A generation of adjustment', 'Work at both ends'], 1,
           'The aggregate recovered in a decade; the individuals mostly did '
           'not.'),
          ('Choose the best heading for paragraph 5.',
           ['A generation of adjustment', 'Work at both ends',
            'Why adjustment changed', 'Two claims, reported as one'], 1,
           'New jobs appearing at both ends, which is polarisation.'),
          ('Choose the best heading for paragraph 7.',
           ['Why adjustment changed', 'Two claims, reported as one',
            'Work at both ends', 'A badly framed question'], 1,
           'Employment recovers is supported; displaced workers recover is '
           'not.'),
          ('The writer believes machines reduce total employment.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1: total employment was higher twenty years '
           'later in every episode.',
           {0: 'Yes would need a reduction; paragraph 1 finds '
               'employment higher afterwards.', 2: 'Not Given is wrong because every episode is counted.'}),
          ('The writer believes the historical evidence is poor.',
           ['Yes', 'No', 'Not Given'], 1,
           'The final sentence attributes the disagreement to a badly '
           'framed question.',
           {0: 'Yes would need poor evidence; the disagreement is '
               'traced to the question.', 2: 'Not Given is wrong because the writer rates the '
               'evidence.'}),
          ('Agricultural employment fell by more than ____________ per cent.',
           None, 'ninety',
           'Paragraph 4, in most industrial countries.'),
          ('New jobs appearing at both ends of the pay range is called '
           '____________.', None, 'polarisation',
           'Paragraph 5, in the episode of office computerisation.')])],
   listen=[
    dict(heading='A lecture on technological unemployment', part='Part 4',
         task='A lecture on four historical episodes', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'Every generation believes machines are about to end '
           'work, and so far every generation has been wrong about the total '
           'and right about somebody. I want to separate those two claims, '
           'because almost all the confusion lives in the gap between '
           'them.'),
          ('Lecturer', 'Four episodes. Mechanised weaving, mechanised '
           'agriculture, containerised shipping, office computerisation. In '
           'all four a technology removed most of the tasks in a large '
           'occupation. In all four, total employment was higher twenty years '
           'on. That is the optimists’ case and it is correct.'),
          ('Lecturer', 'Now the other half. In all four, the people displaced '
           'were not the people who got the new jobs. Weavers did not become '
           'well-paid factory hands; many finished poorer. The new work '
           'arrived a generation later, in different towns, and went to other '
           'people’s children.'),
          ('Lecturer', 'Agriculture is the clearest because the records are '
           'good. Employment fell more than ninety per cent. The adjustment '
           'genuinely worked, and it took about thirty years, which is a '
           'working life. When an economist says the market adjusts, that is '
           'the timescale they are quietly using.'),
          ('Lecturer', 'The fourth episode is the one that looks like now. '
           'Computers took middle-paid cognitive work: clerks, typists, '
           'book-keeping. The jobs that replaced them were at the top and the '
           'bottom. We call that polarisation, and it matters because a '
           'worker in the middle must move up, which costs time and money, or '
           'down, which costs neither. Most moved down, and the statistics '
           'recorded a successful reallocation.'),
          ('Lecturer', 'One caution about all four of these, since I have been using them as evidence. They are the four everybody cites, and they are the four where the adjustment eventually worked. Episodes where an industry left a region and nothing replaced it do not become famous examples, because there is no interesting story to tell about them.'),
          ('Lecturer', 'So my own evidence is selected in the direction of optimism, and I would rather say that than have one of you point it out afterwards. It does not overturn the aggregate finding, which comes from national statistics and not from the four stories. It should make you cautious about the stories.'),
          ('Lecturer', 'So my conclusion is a request. When you read that '
           'history shows there is nothing to worry about, ask what the '
           'sentence is about. Totals, or people. The evidence says one thing '
           'about the first and something quite different about the second, '
           'and anybody who gives you a single answer has merged two '
           'questions.')],
         items=[
          ('The lecturer says each generation has been',
           ['wrong about everything', 'wrong about the total and right about '
            'somebody', 'right about the total', 'too pessimistic'], 1,
           'He sets out to separate the two claims.'),
          ('In all four episodes, total employment twenty years later was',
           ['lower', 'the same', 'higher', 'not measured'], 2,
           'Which he calls the optimists’ case, and correct.'),
          ('What happened to the displaced weavers?',
           ['They became factory hands', 'Many finished poorer',
            'They moved abroad', 'They retrained'], 1,
           'The new work came a generation later and went to other people’s '
           'children.'),
          ('How long did agricultural adjustment take?',
           ['Ten years', 'About thirty years', 'Fifty years',
            'A century'], 1,
           'Which he points out is a working life.'),
          ('Office computerisation removed work that was',
           ['manual and low-paid', 'cognitive and middle-paid',
            'professional', 'seasonal'], 1,
           'Clerks, typists and book-keeping, replaced at both ends.'),
          ('His closing request is to ask whether a claim is about',
           ['the past or the future', 'totals or people',
            'machines or software', 'one country or many'], 1,
           'Because the evidence differs for each.')])],
   speak=dict(
    part='Part 3', focus='Predicting the effect of a technology',
    followup=[(('You say we cannot predict which jobs go. Does history not '
                'tell us anything?'),
               ('It tells us the shape and not the detail. Every previous wave '
                'removed tasks rather than occupations, and employment '
                'recovered while particular trades did not, so the aggregate '
                'reassurance is probably sound. What history does not tell us '
                'is who, or where, or how long the gap lasts, and those are '
                'the only things a person losing a job needs to know.')),
              ('Then who should help the workers whose jobs disappear?',
               ('The people who capture the gain, which in practice means the '
                'firm and the state together. The efficiency saving is real '
                'and it is collected in one place while the cost is spread '
                'across a town, so I would fund retraining out of that gain '
                'rather than out of general taxation, because otherwise the '
                'losers are asked to pay for their own displacement.')),
              ('Is change at work actually faster now than in the past?',
               ('It feels faster, and I am not convinced it is. Measured by '
                'how quickly occupations rise and fall, the middle of the last '
                'century was more violent than the last twenty years. What has '
                'changed is that the disruption now reaches people who '
                'expected to be protected from it, and that is a different '
                'claim from speed.'))],
    intro=('Four or five sentences. Say once whether you are talking about a '
           'total or about individuals.'),
    qs=['Can we predict which jobs a new technology will replace?',
        'Does history tell us anything useful about automation?',
        'Who should help workers whose jobs disappear?',
        'Is change at work faster now than in the past?'],
    shape=[('answer', 'Badly, and we are worse at predicting what '
            'appears.'),
           ('support', 'Forecasts of jobs lost have overshot every time.'),
           ('follow-up', 'Because jobs are bundles and only some tasks '
            'go.'),
           ('support', 'What history does show is that the total recovers.'),
           ('follow-up', 'Though the people displaced usually do not, and '
            'those are different claims.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Spot the unequal: a brainstorm that looks balanced',
         prompt=('New technology creates as many jobs as it destroys. To what '
                 'extent do you agree? Brainstorm, then find the idea that '
                 'is carrying twice the weight of the others. Do not write '
                 'the essay yet.'),
         plan=('History supports the claim about totals and not the claim '
               'about people, and the prompt merges them',
               [('Totals have recovered in every episode on record',
                 ['employment was higher twenty years after each',
                  'forecasts of permanent job loss have overshot every time']),
                ('The displaced and the newly employed are different people',
                 ['new work arrived a generation later and elsewhere',
                  'polarisation forces a middle-paid worker up or down'])]),
         notes=[
          'The test this unit adds is weight. A brainstorm can pass '
          'distinctness and still be unbalanced: one idea supports four '
          'sentences easily and another needs padding to reach three.',
          'Check it by drafting the topic sentence and counting what you '
          'could say under each. If one would take a paragraph and a half, '
          'either split it or demote the other.',
          'On this prompt the unequal idea is usually "machines also create '
          'new industries", which is a support for the first main idea and '
          'not a second main idea.'],
         criterion=[('Testing two main ideas for equal weight',
                     'Coherence and Cohesion'),
                    ('Demoting an idea that is really a support',
                     'Task Response')],
         instruct='  Produce the brainstorm and the outline. You will write '
                  'it in cycle 5.',
         lines=12)],
   gram=dict(
    point='Keeping a claim about totals apart from a claim about people',
    explain=('This is the distinction the whole unit turns on, and it is worth '
             'a band on its own in an essay about economics or policy.'),
    examples=['Total employment recovered; the displaced workers did not.',
              'The aggregate is higher and the individuals are poorer.',
              'That is a claim about the market, not about any worker in '
              'it.',
              'The two are reported interchangeably because one is easy to '
              'measure.'],
    task='Rewrite each claim so that the unit it describes is explicit.',
    items=[('Technology does not destroy jobs.',
            'Technology has not reduced total employment, though it has '
            'ended particular jobs.'),
           ('The economy adjusted.',
            'The labour market as a whole adjusted over about thirty '
            'years.'),
           ('Workers moved into new industries.',
            'New industries grew, largely employing people other than those '
            'displaced.'),
           ('Automation made everyone better off.',
            'Average incomes rose, which says nothing about any particular '
            'household.'),
           ('History shows there is nothing to worry about.',
            'History shows that totals recover; it shows the opposite about '
            'displaced individuals.')]),
   vocab=[('displaced', 'put out of work by a change'),
          ('national total', 'a figure summed across a whole country'),
          ('polarisation', 'growth at the top and bottom but not the middle'),
          ('reallocation', 'the movement of workers between jobs'),
          ('mechanised', 'done by machine instead of by hand'),
          ('settling', 'the process by which a market reaches a new balance'),
          ('episode', 'one period or event being studied'),
          ('interchangeably', 'as though two things were the same')],
   expr=[('accurate as far as it goes', 'accepts a claim and signals its '
          'limit'),
         ('which is the part policy discussions rarely price',
          'names a cost that is left out'),
         ('stops being reassuring and starts being specific',
          'marks a turn in an argument'),
         ('the examples support both',
          'explains a long disagreement by the framing')],
   trans=['in each', 'what the standard account omits', 'this is the point',
          'a fair summary'],
  ),

  dict(
   sub='True of the market, false of the worker',
   step=5,
   read=[
    dict(heading='The aggregate that hides the person',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 59-65',
         paras=[
          'A statement can be true of a labour market and false of every '
          'worker a reader has in mind. This is not a trick of language; it '
          'follows from what an aggregate is, and the failure to notice it '
          'explains a large share of the distance between economists and the '
          'public on the subject of automation.',
          'Take the standard finding. Across an economy, technological change '
          'has not reduced total employment, and real wages across a century '
          'have risen several times over. Both statements are well supported. '
          'Neither tells a fifty-two-year-old machine operator in a town with '
          'one employer anything about what will happen to him, and he is '
          'correct to notice that.',
          'The reason is that an aggregate is produced by adding, and adding '
          'destroys information. A country in which half the workforce gains '
          'ten per cent and half loses ten per cent reports an average of '
          'zero, which describes nobody. A country in which everybody gains '
          'five per cent reports an average of five, which describes '
          'everybody. The two are indistinguishable in the headline and '
          'completely different to live in.',
          'There is a second mechanism that is less obvious and matters more. '
          'Adjustment in a labour market happens partly through people and '
          'partly through time. When economists say a market adjusts, the '
          'mechanism is often that the displaced generation does not recover '
          'and the next generation enters the new jobs directly. The '
          'aggregate recovers because the population turns over, which is '
          'adjustment at the level of a country and bereavement at the level '
          'of a town.',
          'Geography compounds both effects. National figures average across '
          'places, and the places that lose an industry are rarely the places '
          'that gain one. A worker is not an average: he lives somewhere, '
          'owns a house there that is now worth less, and has a partner whose '
          'job is also local. Mobility, which the models treat as a cost, is '
          'in practice a sequence of losses that a national figure cannot '
          'represent.',
          'None of this shows the aggregate findings to be wrong, and it is '
          'important to be clear about that. Total employment really has '
          'recovered every time. The error is not in the measurement; it is '
          'in the inference from the measurement to an individual, and that '
          'inference is made constantly, usually by people who would spot it '
          'instantly in another context.',
          'A third mechanism is worth separating from the other two because '
          'it is the one most often mistaken for bad faith. Averages are '
          'usually weighted by something, and the weight is rarely stated. '
          'A figure for average wage change across an industry weights each '
          'worker equally; a figure for the industry\u2019s wage bill weights '
          'them by pay. The two can move in opposite directions in the same '
          'year, and both are published without the word weighted '
          'appearing.',
          'Where an argument turns on which of those is quoted, neither side '
          'is inventing anything and both can produce a source. The '
          'disagreement is about a choice of weighting that nobody made '
          'deliberately and that neither party can see, which is a poor '
          'basis for a public argument and a common one.',
          'It follows that the two sides of the public argument are often '
          'not disagreeing. An economist citing aggregate recovery and a '
          'worker describing a town are both reporting accurately about '
          'different objects, and the conversation fails because each hears '
          'the other as making a claim about the object they care about.',
          'The practical consequence is a test worth applying to any claim '
          'about automation, your own included. Ask what the sentence is '
          'about: a total, an average, a distribution, or a person. The '
          'evidence is strong for the first, adequate for the second, '
          'patchy for the third and almost absent for the fourth, which is '
          'exactly the reverse of the order in which people argue about '
          'them.',
                ('One further point belongs here, because it is the part most '
                 'often left out. The four objects are not equally expensive '
                 'to measure. A total can be read from tax records that '
                 'already exist; a distribution requires a survey; a person '
                 'requires an interview that nobody commissions. The cheapest '
                 'evidence therefore supports the broadest claim, and the '
                 'claim a reader actually wants tested is the one for which no '
                 'funder has ever paid. That is not a conspiracy. It is a '
                 'budget, and it explains the shape of the literature better '
                 'than any argument about ideology does.')],
         items=[
          ('Which paragraph explains why averaging destroys information?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'], 1,
           'Half gaining and half losing reports the same average as nobody '
           'changing.'),
          ('Which paragraph describes adjustment through population '
           'turnover?', ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 1,
           'Adjustment at the level of a country and bereavement at the level '
           'of a town.'),
          ('Which paragraph argues that the two sides often do not '
           'disagree?', ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 8'], 2,
           'Both report accurately about different objects.'),
          ('The writer believes the aggregate findings are wrong.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 6 says the error is in the inference and not the '
           'measurement.',
           {0: 'Yes would need the measurement to be wrong; paragraph '
               '6 locates the error in the inference.', 2: 'Not Given is wrong because the findings are assessed.'}),
          ('The writer believes economists are being dishonest.',
           ['Yes', 'No', 'Not Given'], 2,
           'He says the inference is usually made by people who would '
           'spot it elsewhere; dishonesty is never alleged.',
           {0: 'Yes would need a charge of dishonesty, which is never '
               'made.', 1: 'No would need a defence against it, and the charge '
               'never arises.'}),
          ('An aggregate is produced by adding, and adding destroys '
           '____________.', None, 'information',
           'Paragraph 3, which is the core of the argument.'),
          (
           'Besides a total, an average and a distribution, what may a '
           'claim be about?', None, 'a person',
           'The final paragraph, with the evidence strongest for the '
           'first and weakest for the last.')]),
    dict(heading='What a job advertisement does not say',
         kind='Magazine article',
         task='Matching sentence endings',
         band='long',
         qtype='Questions 66-70',
         banklabel='Endings',
         bank=[
          'because the employer has not decided what the job is.',
          'which is a legal requirement in several countries and not in '
          'Britain.',
          'so the applicants who most need the information never see it.',
          'although the research on it is weaker than its advocates '
          'claim.',
          'and the number of applications falls by about a fifth.',
          'which tells an applicant almost nothing about the work.',
          'because the wording has been copied from an earlier '
          'advertisement.'],
         skill=('Matching sentence endings', ['Each question is the first half of a sentence. Finish it from the list and use each ending once only.', 'There are more endings than questions, so the last answer cannot be reached by elimination.', 'Several endings will fit the grammar of any beginning. Choose the one the passage supports and read the whole sentence back.']),
         paras=[
          'An advertisement for a job is a short document with an '
          'unusually large amount of information missing from it, and '
          'the pattern of what is missing is consistent enough to be '
          'worth describing.',
          'The commonest omission is the salary. Surveys of large job '
          'boards find that between forty and sixty per cent of '
          'advertisements give no figure at all, offering instead a '
          'phrase such as competitive or commensurate with experience, '
          'which tells an applicant almost nothing about the work. '
          'Publishing a range is a legal requirement in several '
          'countries and not in Britain, and where it has been '
          'introduced the research finds two effects: more applications '
          'from women, and a narrowing of the gap between what two '
          'people doing the same job are paid.',
          'The second omission is the reason the post exists. An '
          'advertisement rarely says whether the previous holder was '
          'promoted, left in frustration, or whether the post is new. '
          'That information is available, is not confidential, and '
          'would be the first question an experienced applicant asks at '
          'interview.',
          'A third pattern is a list of requirements that nobody '
          'possesses. Advertisements routinely ask for a combination of '
          'qualifications, years of experience and software skills that '
          'the person eventually appointed does not have, which happens '
          'because the employer has not decided what the job is. '
          'Recruiters describe this as a wish list, and it has a '
          'measurable cost: well-qualified applicants who do not meet '
          'every item frequently do not apply, and the number of '
          'applications falls by about a fifth.',
          'Much of the wording is also inherited. Studies that compare '
          'advertisements for the same post across years find whole '
          'paragraphs repeated for a decade, including requirements for '
          'systems the organisation has stopped using, because the '
          'wording has been copied from an earlier advertisement.',
          'Finally, the parts an applicant would most value are the '
          'parts least often included: how the work is actually '
          'organised, how much of it is done alone, whether the hours '
          'are predictable, and what the first six months look like. '
          'These are rarely in the advertisement and are usually '
          'available on request, so the applicants who most need the '
          'information never see it.',
                ('There is one further pattern, and it is the most recent. A '
                 'growing share of advertisements are posted for roles that '
                 'are not open: a department advertises to build a list of '
                 'candidates for a vacancy it expects later, or to satisfy a '
                 'rule requiring an external advertisement when an internal '
                 'appointment has already been decided. Estimates of how '
                 'common this is vary widely because nobody collects the '
                 'figure, and the practice is not illegal. What it costs is '
                 'the applicant\'s time, which the advertisement does not '
                 'mention either. Anybody applying in volume should expect a '
                 'proportion of silence that has nothing to do with the '
                 'quality of the application.')],
         items=[
          ('Many advertisements give no salary figure', None, 'F',
           'Paragraph 2 says a phrase such as competitive tells an '
           'applicant almost nothing.'),
          ('Publishing a salary range', None, 'B',
           'Paragraph 2 contrasts the legal position in Britain with '
           'that in several other countries.'),
          ('A list of impossible requirements appears', None, 'A',
           'Paragraph 4 traces the wish list to an undecided job.'),
          ('A long list of requirements has a cost', None, 'E',
           'Paragraph 4 gives the fall in applications as the measurable '
           'effect.'),
          ('The information applicants most want is held back', None, 'C',
           'Paragraph 6 says it is available on request, which is the '
           'point.')])],
   listen=[
    dict(heading='Two economists disagree about adjustment', part='Part 4',
         task='A recorded exchange', band='l4', qtype='Questions 71-76',
         script=[
          ('Chair', 'Professor Oyelaran-Smit works on labour market '
           'adjustment. Dr Barczak studies displaced workers.'),
          ('Barczak', 'I want to start somewhere we agree, because it is '
           'wider than people assume. Aggregate employment recovers. I have '
           'never disputed it and I do not know a serious person who '
           'does.'),
          ('Oyelaran-Smit', 'Then our disagreement is about what follows, '
           'which is a better place to start than most of these '
           'conversations manage.'),
          ('Barczak', 'What follows is this. Your models represent adjustment '
           'as workers moving between sectors. In my data the dominant '
           'mechanism is that the displaced cohort never recovers and the '
           'next cohort enters the new jobs directly. Both show the same '
           'aggregate path. Only one of them is anybody moving.'),
          ('Oyelaran-Smit', 'That is correct and it is in the models, as a '
           'parameter nobody looks at. I will concede something further: when '
           'we calibrate that parameter we usually calibrate it to the '
           'aggregate, which means your mechanism and mine fit equally well '
           'by construction.'),
          ('Barczak', 'I did not expect that and I am grateful for it.'),
          ('Oyelaran-Smit', 'Let me take something back, though. You write as '
           'though the policy conclusion were obvious once the mechanism is '
           'established, and it is not. If the displaced cohort does not '
           'recover, the choice is between compensating them and speeding up '
           'the transition, and those pull in opposite directions.'),
          ('Barczak', 'They do, and I have been sliding past that for ten '
           'years.'),
          ('Oyelaran-Smit', 'Then here is a proposal. We stop arguing about '
           'whether adjustment happens and start publishing how long it '
           'takes, by cohort, in every paper either of us writes.'),
          ('Barczak', 'Agreed, and I would add the geography, because a '
           'national figure hides a town.'),
          ('Barczak', 'May I add the thing that worries me most about both our literatures? We publish averages weighted in ways we never state. Wage change per worker and wage change across a wage bill can move in opposite directions in the same year, and both get printed as what happened to wages.'),
          ('Oyelaran-Smit', 'That is true and it is embarrassing, and the fix costs one sentence in a methods section.'),
          ('Oyelaran-Smit', 'That is a larger concession than mine and you '
           'have made it look small.')],
         items=[
          ('What does Barczak say they agree on?',
           ['Models are wrong', 'Aggregate employment recovers',
            'Policy should change', 'Data is poor'], 1,
           'He says he has never disputed it.'),
          ('In his data, the dominant mechanism is that',
           ['workers move between sectors',
            'the displaced cohort never recovers',
            'wages fall everywhere', 'firms retrain staff'], 1,
           'And the next cohort enters the new jobs directly.'),
          ('What does Oyelaran-Smit concede about calibration?',
           ['It is never done', 'It fits both mechanisms by construction',
            'It uses the wrong data', 'It is too slow'], 1,
           'Because the parameter is calibrated to the aggregate.'),
          ('What does she then take back?',
           ['Her concession', 'That the policy conclusion is obvious',
            'The aggregate finding', 'The model'], 1,
           'Compensating the displaced and speeding the transition pull in '
           'opposite directions.'),
          ('What do they agree to publish in future papers?',
           ['Larger samples', 'How long adjustment takes, by cohort',
            'Their disagreements', 'Regional wages'], 1,
           'With Barczak adding geography to the proposal.'),
          ('How does Oyelaran-Smit describe his addition?',
           ['A small point', 'A larger concession than hers',
            'Unnecessary', 'Already standard'], 1,
           'She says he has made it look small.')]),
    dict(heading='A plan of the new training centre',
         part='Part 2', task='Plan labelling and matching',
         band='l2',
         qtype='Questions 77-81',
         banklabel='Positions on the plan',
         bank=['A', 'B', 'C', 'D', 'E', 'F', 'G'],
         figure=dict(kind='map',
                     title='Ground floor of the Brackmoor training centre',
                     sub='seven rooms, lettered A to G',
                     panels=[('Ground floor',
                              [(0.04, 0.08, 0.2, 0.2, 'A', 'building'),
                               (0.28, 0.08, 0.2, 0.2, 'B', 'building'),
                               (0.52, 0.08, 0.2, 0.2, 'C', 'building'),
                               (0.76, 0.08, 0.2, 0.2, 'D', 'building'),
                               (0.04, 0.52, 0.28, 0.2, 'E', 'building'),
                               (0.36, 0.52, 0.28, 0.2, 'F', 'building'),
                               (0.68, 0.52, 0.28, 0.2, 'G', 'building')],
                              [(0.0, 0.42, 1.0, 0.42, 'Corridor'),
                               (0.5, 0.95, 0.5, 0.42, 'Main entrance')])]),
         skill=('A plan with lettered positions',
                ['Find the entrance on the plan before the recording '
                 'starts, and decide which way is left and right from '
                 'there. Every instruction will be relative to it.',
                 'Write the letter, not the name of the room. A correct '
                 'room written in words is marked wrong.',
                 'The speaker will not take the rooms in order. Keep '
                 'your eyes on the plan rather than on the list of '
                 'questions.']),
         script=[
          ('Guide', 'This is the ground floor. You come in at the bottom '
           'of the plan, in the middle, and the corridor runs left to '
           'right across the building. There are four rooms along the '
           'north side and three along the south.'),
          ('Guide', 'Reception is immediately on your left as you come '
           'through the door, so it is the room at the bottom-left '
           'corner.'),
          ('Guide', 'The computer suite is at the far left of the north '
           'side, directly opposite reception across the corridor. It '
           'has the only windows on that side.'),
          ('Guide', 'The workshop needs the double doors, which are at '
           'the far right of the corridor on the north side, so it is '
           'the room in the top-right corner.'),
          ('Guide', 'The quiet study room is the middle room on the '
           'south side, between reception and the room at the '
           'bottom-right. People ask why it is beside the entrance, and '
           'the answer is that it used to be a store.'),
          ('Guide', 'The staff room is the bottom-right room, furthest '
           'from reception on that side.'),
          ('Guide', 'That leaves two rooms on the north side, between '
           'the computer suite and the workshop. The one next to the '
           'workshop is the assessment room, which is where you will all '
           'be on Friday morning. It is kept locked and the key is at '
           'reception, which is a nuisance and is not going to change.'),
          ('Guide', 'The other one, next to the computer suite, is the '
           'kitchen, and it is the only room on the plan with a sink.'),
          ('Guide', 'One more thing about the layout. There is no door '
           'between the assessment room and the workshop, although the '
           'plan makes it look as though there might be, so you have to '
           'go round by the corridor.')],
         items=[
          ('Reception', None, 'E',
           'The first room on the left as you come in, at the '
           'bottom-left of the plan.'),
          ('Computer suite', None, 'A',
           'At the far left of the north side, opposite reception.'),
          ('Workshop', None, 'D',
           'The room with the double doors, in the top-right corner.'),
          ('Quiet study room', None, 'F',
           'The middle room on the south side, between reception and the '
           'staff room.'),
          ('Assessment room', None, 'C',
           'Of the two remaining north rooms, the one next to the '
           'workshop.')])],
   speak=dict(
    part='Part 3', focus='Who bears the cost of change',
    sounds=[('A three-part list has its own rhythm: two items rising and the '
             'third falling, with the pause before the third slightly longer. '
             'Tasks, not jobs, and not whole careers.'),
            ('Keep the grammar of the three parts parallel, because the rhythm '
             'exposes it. Who gains, who loses, and who pays is sayable; who '
             'gains, the people who lose out, and the question of payment is '
             'not.'),
            ('Practise one list from this unit\'s vocabulary until it needs no '
             'thought, because a list is the easiest place to buy yourself '
             'three seconds in Part 3.'),
            ('Do not use four. The three-part rhythm is a shape a listener '
             'recognises, and a fourth item turns it back into an ordinary '
             'enumeration.'),
            ('Record yourself answering who should help displaced workers. '
             'Find your list, and check that the last item fell.')],
    intro=('The hardest turn in the unit. Try to name the unit a claim is '
           'about before you agree or disagree with it.'),
    qs=['Who should pay when an industry closes?',
        'Is it reasonable to ask people to move for work?',
        'Do national statistics describe ordinary lives?',
        'How should a government help a town that loses its main '
        'employer?'],
    shape=[('answer', 'Whoever gains from the change, which is usually '
            'everybody.'),
           ('support', 'The gains are spread thinly and the losses are '
            'concentrated.'),
           ('follow-up', 'A national average records the gain and hides the '
            'town.'),
           ('support', 'Asking people to move treats mobility as a cost.'),
           ('follow-up', 'When it is really a sequence of losses that no '
            'figure represents.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Does new technology create as many jobs as it destroys?',
         prompt=('Write the essay you planned in cycle 4. New technology '
                 'creates as many jobs as it destroys. To what extent do you '
                 'agree or disagree? Write at least 250 words.'),
         model=[
          'The statement is true and it is answering a question most people '
          'asking it do not mean. Technology has not reduced total '
          'employment in any episode on record. Whether it creates as many '
          'jobs for the people whose jobs it destroyed is a different '
          'question, and the historical answer to that one is no.',
          'The evidence for the first claim is as good as evidence in '
          'economics gets. Mechanised weaving, mechanised agriculture, '
          'containerisation and office computerisation each removed most of '
          'the tasks in a large occupation, and total employment was higher '
          'twenty years after every one of them. Forecasts of permanent mass '
          'unemployment have been made for two centuries and have been wrong '
          'every time.',
          'The second claim fails on the same evidence. The weavers did not '
          'become factory hands; many finished their working lives poorer, '
          'and the better work appeared a generation later in different '
          'towns. Agricultural adjustment worked and took about thirty '
          'years, which is a working life rather than an inconvenience. In '
          'each case the aggregate recovered partly because the population '
          'turned over.',
          'The recent episode is harder again. Computerisation removed '
          'middle-paid clerical work and the new jobs appeared above and '
          'below it, so a displaced worker had to move up, which costs time '
          'and money, or down, which costs neither. Most moved down, and the '
          'statistics recorded that as a successful reallocation of labour.',
          'So I agree with the statement about totals and disagree with the '
          'use almost always made of it. What follows is not that change '
          'should be resisted, which has never worked and would make '
          'everybody poorer. It is that the cost of adjustment falls on '
          'identifiable people in identifiable places, and a society that '
          'collects the gains nationally can afford to compensate them '
          'there.'],
         notes=[
          'The opening agrees and disagrees in three sentences by separating '
          'two claims the prompt has merged. That move is the whole essay, '
          'and doing it first means every paragraph afterwards knows which '
          'claim it belongs to.',
          'Paragraph 2 concedes fully, with evidence. An essay that is going '
          'to disagree later is strongest when it has first agreed '
          'generously; grudging agreement reads as reluctance.',
          'The conclusion refuses a position the writer was not asked about — '
          'resisting change — before giving the one they hold. Naming what '
          'you are not arguing protects a position from the easiest '
          'objection.'],
         model65=[
                  'New technology is said to create as many jobs as it '
                  'destroys. I agree that it has so far, but the claim '
                  'hides something important.',
                  'The historical evidence supports it. In every major '
                  'episode, from mechanised weaving to the cash '
                  'machine, total employment was higher twenty years '
                  'later. Jobs that nobody could have described '
                  'appeared, and people moved into them. Predictions '
                  'of permanent mass unemployment have been made in '
                  'every generation and have not come true.',
                  'But the total is not what people experience. The '
                  'jobs disappear quickly and the new ones appear '
                  'slowly, often in different places and requiring '
                  'different skills. A worker of fifty whose job is '
                  'automated may never find equivalent work, and for '
                  'that person the national total is irrelevant.',
                  'I think the claim is true about the total and '
                  'misleading about the individual. Governments should '
                  'so accept the technology and spend seriously '
                  'on the transition, because the cost falls on a few '
                  'people while the gain is spread across everybody.',
                  ],
         gap65=[
                'It locates the error in the inference from the '
                'aggregate to the individual, and names it, instead of '
                'observing that the total hides something.',
                'It explains why the gap between the two timescales '
                'opens, which turns a complaint into a mechanism.',
                'It says what the historical record can and cannot '
                'support, rather than using it as a single block of '
                'evidence.',
                ],
         criterion=[('Separating two claims the prompt has merged',
                     'Task Response'),
                    ('Conceding fully and with evidence before disagreeing',
                     'Task Response'),
                    ('Naming the position you are not taking',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Agreeing with a statement and refusing its usual use',
    explain=('Some prompts are true as written and misleading as meant. These '
             'patterns let you accept the sentence and reject the argument '
             'built on it, which is a high-band move at any level.'),
    examples=['The statement is true and it answers a question most people '
              'do not mean.',
              'I agree about totals and disagree with the use made of it.',
              'That is correct, and very little follows from it.',
              'The claim holds; the inference from it does not.'],
    task='Accept each statement and limit what follows from it.',
    items=[('Technology creates as many jobs as it destroys.',
            'It has done so in total; it has not done so for the people '
            'displaced.'),
           ('Average wages have risen.',
            'They have, which tells us nothing about the distribution '
            'underneath.'),
           ('People adapt to change.',
            'Populations adapt, often by one generation replacing another.'),
           ('The economy is stronger than ever.',
            'The national figures are strong, and some regions have not '
            'recovered since the 1980s.'),
           ('Retraining is available.',
            'Courses exist; whether a household can survive the two years of '
            'one is a separate question.')]),
   vocab=[('generation', 'all the people born at roughly the same time'),
          ('calibrate', 'to set a model’s values from data'),
          ('assumption', 'something a model takes to be true without testing it'),
          ('mobility', 'the ability to move for work'),
          ('compensate', 'to pay for a loss somebody has suffered'),
          ('transition', 'the period of moving from one state to another'),
          ('concentrated', 'falling heavily on a few'),
          ('identifiable', 'able to be named or located')],
   expr=[('I want to start somewhere we agree',
          'opens a disagreement by narrowing it'),
         ('as a parameter nobody looks at',
          'concedes that something is present but ignored'),
         ('I have been sliding past that for ten years',
          'admits a long-standing evasion'),
         ('you have made it look small', 'acknowledges a large concession')],
   trans=['take the standard finding', 'there is a second mechanism',
          'it follows that', 'the practical consequence'],
  ),
 ],
 technique=dict(
  title='Matching Information across a 700-word passage',
  body=('Matching Information asks which paragraph contains a given fact, and '
        'it is the question type that punishes the loop least and rewards it '
        'most. It punishes it least because the questions are genuinely out '
        'of order and you cannot predict where anything sits. It rewards it '
        'most because, if you have read each paragraph once and know what it '
        'did, you are answering from memory in seconds while another '
        'candidate is reading the whole passage for the fourth time. The '
        'discipline is to give each paragraph a two-word label as you finish '
        'it, in the margin, before you move on.'),
  panel=[('Label as you go', 'Two words in the margin at the end of every '
          'paragraph: what it did, not what it was about. "Admits cost", '
          '"second mechanism", "rejects word".'),
         ('Read the questions for verbs', 'Matching Information stems usually '
          'describe an action the writer performed: explains, concedes, '
          'compares, defines. Your labels should be in the same '
          'vocabulary.'),
         ('Answer from the labels first', 'Go through the questions matching '
          'against your labels. Most will land. Only then go back to the '
          'text, and only for the ones that did not.'),
         ('Expect repeats and gaps', 'A paragraph may answer two questions '
          'and several may answer none. A question you cannot place is '
          'usually in a paragraph you labelled too vaguely.')],
  task='Take the cycle 5 passage and label all eight paragraphs in two words '
       'each. Then answer the three matching questions using only your '
       'labels, and record how many you had to check.',
  qs=['What label did you give each paragraph?',
      'Which labels were too vague to use?',
      'How many questions did you answer from labels alone?',
      'How long did the labelling add to your reading?',
      'Would the labels have helped on the Yes/No/Not Given questions '
      'too?']),
 outlining=dict(
  title='Spot the unequal in a brainstorm that looks balanced',
  body=('Two main ideas can be distinct, both true and both relevant, and '
        'still produce a lopsided essay, because one of them supports four '
        'sentences without effort and the other needs padding to reach three. '
        'The test is to draft the topic sentence for each and then count what '
        'you could say underneath. If one would run to a paragraph and a '
        'half, either it contains two ideas and should be split, or the other '
        'is really a support and should be demoted.'),
  frame=('History supports the claim about totals and not the claim about '
         'people',
         [('Totals have recovered in every episode on record',
           ['employment was higher twenty years after each',
            'forecasts of permanent loss have overshot every time']),
          ('The displaced and the newly employed are different people',
           ['new work arrived a generation later and elsewhere',
            'polarisation forces a middle-paid worker up or down'])]),
  task='Take your brainstorm from cycle 4. Draft a topic sentence for each '
       'surviving idea, count the supports you could write, and record which '
       'one you split or demoted.',
  qs=['Which idea could carry the most sentences?',
      'Which needed padding to reach three?',
      'Did you split one or demote the other, and why?',
      'Are the two now of roughly equal weight?'],
  answers=['usually the one with concrete examples attached',
           'usually the one that is a principle rather than a finding',
           'splitting is right when the heavy idea contains two claims',
           'if not, the essay will have a long paragraph and a short one, '
           'which is a Coherence fault']),
 candos=['I can tell a transfer from a secondment by what each requires',
         'I can label paragraphs as I read and answer Matching Information '
         'from the labels',
         'I can divide a subject before arguing about it',
         'I can keep a claim about totals apart from a claim about people',
         'I can test two main ideas for equal weight'],
 tip=('Two words in the margin at the end of each paragraph costs about four '
      'seconds and saves the second reading. On Matching Information it is '
      'the difference between finishing the passage and running out of '
      'time.'),
)
