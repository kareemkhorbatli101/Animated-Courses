# -*- coding: utf-8 -*-
"""Unit 22 - Work: Automation and Skills. IELTS Volume 3, band 6.0."""

_TASKS = dict(kind='bar', teaches='data',
              title='Share of working time by task type',
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

 field='work',
 unitmap=dict(kind='unitmap', teaches='navigation', n=22,
              theme='Work: Automation and Skills',
              rows=[('Changing roles at work',
                     'Sentence completion: let the gap tell you the word '
                     'class',
                     'Multiple choice · sentence completion · matching · '
                     'Part 1'),
                    ('Retraining',
                     'Matching features: the writer against the people '
                     'the writer quotes',
                     'Yes/No/Not Given · matching features · Part 2'),
                    ('Which tasks machines take',
                     'Task 1: shares that add to a whole',
                     'True/False/Not Given · matching information · '
                     'Task 1 Academic'),
                    ('What happened the last four times',
                     'Matching headings: defining against illustrating',
                     'Matching headings · Yes/No/Not Given · Part 4'),
                    ('True of the market, false of the worker',
                     'Task 2: concede, then answer',
                     'Matching information · matching sentence endings · '
                     'Task 2')],
              note='The unit runs from one person’s job description to a '
                   'two-hundred-year argument and back to one person '
                   'again, which is the shape the argument itself has. '
                   'Cycles 1, 3 and 5 open with a reading preview and 2 '
                   'and 4 with a listening one.'),
 sceneintro='Eight things from a workplace in the middle of changing, '
            'and the words for them. Six are used in cycle 1 and four '
            'come back in cycle 5. As in unit 21, two minutes here is '
            'worth ten later.',
 scene=dict(kind='scene', teaches='activate',
            title='Unit 22 · a department being reorganised',
            instr='Write the number of each thing beside its word. Two '
                  'words in the bank are not in the picture.',
            cells=[('brief', 'role profile'), ('laptop', 'rota'),
                   ('people', 'handover'), ('clock', 'release date'),
                   ('chart', 'headcount'), ('note', 'secondment'),
                   ('cpu', 'automation'), ('envelope', 'notice period')],
            bank=['role profile', 'rota', 'handover', 'release date',
                  'headcount', 'secondment', 'automation',
                  'notice period', 'redundancy', 'appraisal'],
            answers=['role profile', 'rota', 'handover', 'release date',
                     'headcount', 'secondment', 'automation',
                     'notice period'],
            note='Answers: 1 role profile · 2 rota · 3 handover · '
                 '4 release date · 5 headcount · 6 secondment · '
                 '7 automation · 8 notice period. Not in the picture: '
                 'redundancy, appraisal.'),
 puzzle=dict(kind='puzzle', teaches='curiosity',
             title='Four waves of automation, four results',
             question='Which of these decades lost the most jobs to '
                      'machines - and which of them had the lowest '
                      'unemployment at the end of it?',
             bars=[('1810s', 18), ('1880s', 24), ('1950s', 31),
                   ('1980s', 27), ('2010s', 22)],
             mark=2, ylab='% of tasks mechanised in the decade',
             note='The answer to the first half is on this chart. The '
                  'answer to the second half is in cycle 4, and the two '
                  'together are the whole argument of this unit.'),
 cycles=[
  dict(
   sub='Changing roles at work',
   step=1,
   notes=dict(
    serves='Sentence completion, Reading Parts 1-2; note and table '
           'completion in Listening Parts 1-2',
    because='A sentence-completion gap is answered at band 6 by copying '
            'the nearest plausible word, and the answer is wrong because '
            'it is the wrong part of speech - a fault the learner could '
            'have caught from the gap itself without reading anything',
    skill='Reading the gap before reading for the answer: what word '
          'class, how many words, and what the sentence around it '
          'already rules out',
    evidence='Phase 11 reclassified 542 items headed short answer as '
             'sentence completion; it is the commonest single item type '
             'in this book and had no taught procedure anywhere',
    watch='In question 4 learners will write an adjective where the gap '
          'needs a noun, because the adjective is the word standing '
          'next to the clue. Expect it and ask what follows the gap',
    time='75 minutes, or 55 without the free grammar production'),
   lead=dict(
    title='A job that is not the job you were hired for',
    body='Almost nobody ends a career doing what they were hired to do. '
         'Roles grow, shed parts of themselves, absorb a piece of '
         'somebody else’s job, and are occasionally handed wholesale to '
         'a machine. In unit 21 the argument was about who gets in; in '
         'this one it is about what happens afterwards, and it starts '
         'with the dullest document in any organisation - the role '
         'profile - because that is where a change becomes visible '
         'first, usually to the person it is about to happen to.',
    task='Answer these from your own experience, or from somebody '
         'else’s. Three or four sentences each.',
    qs=['Has a job you have done ever changed underneath you? What '
        'changed it?',
        'What part of your work could a machine do tomorrow, and what '
        'part could it not?',
        'If your employer automated half your job, what would you want '
        'them to do about the other half?',
        'Who should pay for the retraining - the worker, the employer, '
        'or the state?']),
   vocabwork=dict(
    title='The language of a role, and of changing one',
    body='Eighteen words from the private language organisations use '
         'about their own people. It is worth learning for its own sake, '
         'because it is the register of every letter you will ever get '
         'from an employer, and because Listening Parts 1 and 2 are '
         'almost always set inside an institution talking about itself.',
    figure=dict(kind='field', teaches='vocabulary',
                centre='a role, and a change to it',
                sub='cycle 1 · the register of an institution talking '
                    'about its own staff',
                branches=[('the job itself',
                           ['role profile', 'substantive post',
                            'duties', 'grade']),
                          ('a temporary move',
                           ['secondment', 'cover', 'acting up',
                            'release date']),
                          ('leaving the job',
                           ['notice period', 'handover',
                            'redundancy', 'settlement']),
                          ('who fills it',
                           ['internal candidate', 'open competition',
                            'ring-fenced', 'at risk'])],
                note='Ring-fenced and at risk are the two that catch '
                     'learners out, and they are opposites: ring-fenced '
                     'means protected, at risk means the post may go.'),
    figure2=dict(kind='family', teaches='word-formation',
                 sub='cycle 1 · and note where the stress moves',
                 rows=[(('em-ploy', 2), ('em-ploy-ment', 2),
                        ('em-ploy-er', 2), '', ''),
                       (('re-dep-loy', 3), ('re-dep-loy-ment', 3),
                        '', '', ''),
                       (('au-to-mate', 1), ('au-to-ma-tion', 3), '',
                        ('au-to-ma-ted', 1), ''),
                       (('re-train', 2), ('re-train-ing', 2), '', '', ''),
                       (('ne-go-ti-ate', 2), ('ne-go-ti-a-tion', 4),
                        ('ne-go-ti-a-tor', 2), '', '')],
                 note='Employment and unemployment take the same stress '
                      'and mean opposite things; automate and automation '
                      'do not, and mispronouncing the second is one of '
                      'the few vocabulary errors an examiner will hear '
                      'rather than read.'),
    task='Complete each sentence with a word from the map or the table, '
         'in the right form.',
    items=[
     ('Her permanent job, as against the one she is covering, is her '
      '____________ post.', None, 'substantive'),
     ('A temporary move to another team is a ____________.',
      None, 'secondment'),
     ('The weeks between resigning and leaving are the ____________ '
      'period.', None, 'notice'),
     ('A post only existing staff may apply for is ____________.',
      None, 'ring-fenced'),
     ('Passing your work to your successor is the ____________.',
      None, 'handover'),
     ('The noun from automate is ____________.', None, 'automation'),
     ('Moving staff to different work rather than dismissing them is '
      '____________.', None, 'redeployment'),
     ('The person who conducts a negotiation is a ____________.',
      None, 'negotiator')]),
   builder=dict(
    skill='Sentence completion: let the gap tell you the word',
    qkind='skill',
    explain='Half the marks lost on sentence completion are lost before '
            'the passage is opened, and they are recoverable without '
            'reading a word of it. A gap is not a hole; it is a '
            'specification. Three things are written on it. The '
            'instruction says how many words you may use, and ONE WORD '
            'ONLY means one word, so a two-word answer is wrong even '
            'when it is right. The grammar around the gap says what '
            'class of word must go in it: after an article you need a '
            'noun, after a modal you need a bare verb, after a '
            'preposition you need a noun or a gerund and never an '
            'adjective. And the rest of the sentence says what kind of '
            'thing it must be - a time, a person, a material, a reason. '
            'Spend ten seconds writing those three things beside each '
            'gap and you will reject half the tempting wrong answers '
            'before you meet them, because the tempting wrong answer is '
            'almost always the right idea in the wrong word class.',
    worked=[
     'GAP: Applicants are asked to confirm their ____________ before '
     'the panel meets.  (ONE WORD ONLY)',
     'The specification: one word; after a possessive adjective, so a '
     'noun; something an applicant has and can confirm.',
     'The passage says “candidates must tell us if they are still '
     'available”. The tempting answer is available, which is the word '
     'actually printed. It is an adjective and the gap needs a noun.',
     'The answer is availability. Notice that you could have ruled out '
     'available from the gap alone, and that the word-family table two '
     'pages back is where that noun came from.'],
    figure=dict(kind='anatomy', teaches='question-anatomy',
                qtype='Sentence completion', sub='cycle 1, question 4',
                stem='Staff on secondment keep their ____________ post '
                     'for the duration.  (ONE WORD ONLY)',
                options=['permanently', 'substantive', 'substantively',
                         'substantiate'],
                answer=1,
                why='The gap sits between a possessive and a noun, so '
                    'it needs an adjective, and the passage calls the '
                    'permanent job the substantive post.',
                trap=(0, 'Permanently is in the passage, one line above, '
                         'and it is an adverb. An adverb cannot modify '
                         'the noun post. The gap ruled this out before '
                         'the passage was read.'),
                note='Three of the four options are the same root in '
                     'the wrong class. That is what this question type '
                     'is for.'),
    task='For each gap write the specification only - how many words, '
         'what class, what kind of thing. Do not answer it.',
    items=[
     ('The scheme was suspended because of a ____________ in funding. '
      '(ONE WORD)', None, 'one, noun, a problem'),
     ('Staff must ____________ the form before the deadline. (ONE '
      'WORD)', None, 'one, bare verb, an action'),
     ('Training is offered to ____________ candidates only. (ONE '
      'WORD)', None, 'one, adjective, a kind of candidate'),
     ('The handover takes place in ____________. (NO MORE THAN TWO '
      'WORDS)', None, 'one or two, noun, a time or place'),
     ('Managers are expected to act ____________ in such cases. (ONE '
      'WORD)', None, 'one, adverb, a manner'),
     ('The post is ring-fenced for ____________ candidates. (ONE '
      'WORD)', None, 'one, adjective, a kind of candidate')],
    note='Not one of these asks you to find an answer, and doing them '
         'properly will make finding answers roughly twice as fast. The '
         'specification is free; the search is what costs time.'),
   figures=[
    dict(kind='bridge', teaches='paraphrase',
         sub='cycle 1 · the six moves the questions make',
         pairs=[('let somebody know', 'notify', 'synonym'),
                ('say yes to the move', 'accept the secondment',
                 'reformulation'),
                ('when they can start', 'the release date',
                 'nominalisation'),
                ('the company decided', 'a decision was taken',
                 'voice'),
                ('is not permanent', 'is temporary', 'negation'),
                ('training, mentoring and shadowing',
                 'development activity', 'hypernym')],
         note='Cover the right column. Say what an institution would '
              'have written instead, and name the move.'),
   ],
   advice='Read the instruction line before you read the questions. ONE '
          'WORD ONLY and NO MORE THAN THREE WORDS are different tasks '
          'and the instruction changes within a single paper, often '
          'between one set of questions and the next on the same page. '
          'An answer over the limit scores zero however right it is, '
          'and this is the single most expensive avoidable error in the '
          'Reading paper. Count the words you have written. It takes '
          'two seconds.',
   debrief=dict(
    read=['Question 4 prints permanently one line above the answer. It '
          'is an adverb and the gap needs an adjective; the gap told '
          'you that before you looked.',
     'Question 7 can be answered with two words that are both in the '
     'passage, and the instruction says ONE WORD ONLY. One of the two '
     'is the answer.',
     'In question 9 the passage uses the verb and the gap needs the '
     'noun. The word-family table in this cycle has the noun.'],
    listen=['The speaker spells a name and then corrects one letter. '
            'The correction always comes after the spelling, never '
            'before it.',
     'Question 13 asks for a date and two dates are given - the date of '
     'the meeting and the date of the handover. The sentence around the '
     'gap says which.']),
   outside='Every form you will ever be asked to fill in is a set of '
           'gaps with specifications on them, and most of the time '
           'nobody tells you what they are. Reading the gap before '
           'reading for the answer is the habit that gets a visa '
           'application accepted first time.',
   recycled=['criteria', 'eligible', 'application', 'assessor',
             'conditional'],
   read=[
    dict(preview=True,
         heading='Three words from a reorganisation',
         kind='Glossary box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='Two hundred words before four hundred. These three words '
             'are in every document in this cycle and in half the '
             'letters you will meet in Listening Part 2.',
         paras=[
          'A substantive post is the job you actually hold. It is the '
          'one your contract names, the one your pay is set against, and '
          'the one you go back to when anything temporary ends. Nothing '
          'temporary changes it.',
          'A secondment is a temporary move to different work, usually '
          'in another team and sometimes in another organisation. The '
          'person on secondment keeps their substantive post the whole '
          'time, which is the point of the arrangement: it lets an '
          'employer move somebody without anybody losing anything.',
          'A handover is the passing of work from the person leaving a '
          'role to the person taking it on. It is usually a document and '
          'a conversation, and it happens in the last days before the '
          'release date - the day the person is free to start the new '
          'job.',
          'The three words appear together constantly and mean quite '
          'different things, and the commonest confusion is to read '
          'secondment as promotion. It is not one. It may lead to one, '
          'and it may equally lead back to exactly where the person '
          'started.'],
         items=[
          ('The job named in your contract is your ____________ post.',
           None, 'substantive',
           'Paragraph 1: it is the one your pay is set against.'),
          ('A temporary move to other work is a ____________.',
           None, 'secondment',
           'Paragraph 2, which also says the substantive post is kept '
           'throughout.'),
          ('Passing your work to your successor is the ____________.',
           None, 'handover',
           'Paragraph 3: a document and a conversation, before the '
           'release date.')]),
    dict(heading='Internal transfers and secondments',
         kind='Policy page', task='Multiple choice and sentence completion',
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
           ['up to three months', 'three to twelve months', 'one to two years', 'as long as both agree'],
           1,
           'Paragraph 1, after which the employee returns to the '
           'substantive post.',
           {0: 'Three months is the shortest a secondment normally '
               'runs.', 2: 'Longer than paragraph 1 allows for a temporary move.', 3: 'The period is set by the policy, not left to the '
               'managers.'}),
          ('No interview is required for a secondment of under',
           ['three months', 'six months', 'nine months', 'twelve months'],
           1,
           'Paragraph 2, where the two managers may arrange it by '
           'agreement.',
           {0: 'Shorter than the threshold paragraph 2 gives.', 2: 'Longer than the period that dispenses with an '
               'interview.', 3: 'A twelve-month secondment does require an interview.'}),
          ('If the receiving role pays less, the employee',
           ['takes the lower salary', 'keeps their existing salary', 'receives an allowance', 'cannot be seconded'],
           1,
           'Paragraph 3: nobody is paid down for taking a secondment.',
           {0: 'Nobody is ever paid down for taking a secondment.', 2: 'No allowance is mentioned; the existing salary is '
               'kept.', 3: 'A lower-paid receiving role is no bar to a secondment.'}),
          ('An employee’s ____________ post is held open during a '
           'secondment.', None, 'substantive',
           'Paragraph 4, and it may be covered temporarily.'),
          ('Holding a role on secondment confers no ____________ when it is '
           'advertised.', None, 'priority',
           'Paragraph 4: the employee must apply in the normal way.')]),
    dict(heading='How to apply internally',
         kind='Procedure notice', task='Sentence completion',
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
         task='A call to a human resources adviser · note completion', band='l1',
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
         part='Part 2', task='A talk on internal career moves · matching and sentence completion',
                        bank=None,
                        reuse=None,
                        banklabel=None, band='l2',
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
           ['One grade up', 'Sideways into a different function', 'Into management', 'Out of the organisation'],
           1,
           'Such people are more likely to be promoted within three '
           'years.',
           {0: 'One grade up is the move people imagine rather than '
               'the best one.', 2: 'Management is not named as the direction that works.', 3: 'He is describing moves inside the organisation only.'}),
          (
           'The commonest mistake with timing is applying too '
           '____________.', None, 'late',
           'An application by somebody who wants to leave reads '
           'differently from one by somebody who wants to arrive.'),
          (
           'Internal candidates lose to external ones because they '
           'assume the panel already ____________ them.',
           None, 'knows',
           'He says it is almost never ability, and that they write '
           'four lines.'),
          (
           'People who read their feedback are appointed next time at '
           'nearly ____________ the rate.', None, 'twice',
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
    ref='L4',
    context=[
     'From the letter in this cycle:',
     'I am writing to let you know that I have accepted a secondment '
     'to the regional team, and that my last day in the department '
     'will be the fourteenth. I wanted you to hear it from me rather '
     'than from the rota. I should be glad to know whether you would '
     'prefer me to brief Amina directly or to leave written notes.'],
    notice=[
     ('The writer gives news and asks a question. Which sentence does '
      'which, and what is the first word of each?',
      'I am writing to let you know gives the news; I should be glad '
      'to know asks the question'),
     ('Why “whether you would prefer” and not “if would you prefer”?',
      'an embedded question keeps statement word order, so the subject '
      'comes before the verb')],
    noticetask='Answer both from the letter above. The second is the '
               'same point you met in cycle 1 of unit 21, which is '
               'where the reference entry for it is.',
    contrast='Announcing before somebody else does is a register as '
             'much as a structure. I am writing to let you know is '
             'neutral and slightly formal; I wanted you to hear it from '
             'me is warmer and implies the news might have travelled; I '
             'am writing to inform you is colder and is what an '
             'organisation writes to a person rather than a person to a '
             'person. Choosing the wrong one of the three is not a '
             'grammar mistake and it is the thing a General Training '
             'Task 1 is actually marked on.',
    task2='Rewrite each as an embedded question in a formal letter, '
          'beginning with the words given.',
    items2=[
     ('When does the secondment start? → Could you tell me '
      '____________?', None, 'when the secondment starts'),
     ('Has the rota been published? → I should be glad to know '
      '____________.', None, 'whether the rota has been published'),
     ('Who will cover my duties? → I am writing to ask ____________.',
      None, 'who will cover my duties'),
     ('Do I keep my substantive post? → Please let me know '
      '____________.', None, 'whether I keep my substantive post')],
    task3='Now write the whole announcement. You have accepted a change '
          'at work and one detail is still unsettled. Write the opening '
          'paragraph and two embedded questions, about seventy words, '
          'choosing your register deliberately.',
    items3=8,
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
   notes=dict(
    serves='Matching features and Yes/No/Not Given, Reading Part 2; '
           'matching in Listening Part 2',
    because='Matching features is answered at band 6 by matching a '
            'topic to a name, and the question is almost never about '
            'topic: two people mention the same thing and only one of '
            'them commits to a view about it',
    skill='Separating the writer’s own position from the positions the '
          'writer is reporting',
    evidence='The audit found two cross-references in 569 pages; a '
             'learner who cannot track whose voice a sentence is in '
             'cannot track an argument across a page either',
    watch='Learners will attribute the strongest sentence in paragraph '
          '3 to the writer. It is a quotation with the reporting verb '
          'three lines earlier. Expect it',
    time='80 minutes, or 60 without the free grammar production'),
   lead=dict(
    title='Who pays for the second career?',
    body='Retraining is the answer everybody gives and almost nobody '
         'funds. It is expensive, it takes a year that the person '
         'cannot afford, and the benefit goes partly to an employer who '
         'has not yet hired them. In cycle 1 you watched one role '
         'change; here the question is what a person does when the role '
         'does not come back, and four people answer it differently.',
    task='Answer these before you read, and mark which of the four '
         'texts you expect to agree with.',
    qs=['Who benefits most when a worker retrains - the worker, the '
        'next employer, or the country?',
        'Would you spend a year’s income on learning something new at '
        'forty? What would have to be true?',
        'Should an employer who automates a job have to pay for the '
        'retraining of the person who did it?',
        'Is there any kind of work you would refuse to retrain into?']),
   vocabwork=dict(
    title='The vocabulary of a scheme, and of its critics',
    body='A training scheme is argued about in a narrow and very '
         'reusable set of words, and the four texts in this cycle use '
         'almost all of them. You met the vocabulary of a position in '
         'cycle 2 of unit 21 and this is the same job done for money '
         'rather than for fairness; nine of these words return in unit '
         '24, where the subject is flood defence.',
    figure=dict(kind='collocation', teaches='collocation',
                node='funding', sub='cycle 2',
                groups=[('verb + funding',
                         ['secure funding', 'withdraw funding',
                          'ring-fence funding', 'match funding',
                          'underfund a scheme']),
                        ('adjective + funding',
                         ['public funding', 'discretionary funding',
                          'adequate funding', 'short-term funding']),
                        ('funding + noun',
                         ['funding gap', 'funding round',
                          'funding formula', 'funding cut'])],
                note='Note underfund, one word, as a verb: the scheme '
                     'was underfunded from the start. Learners write '
                     '"under-funding was done", which is grammatical '
                     'and reads as a translation.'),
    figure2=dict(kind='cline', teaches='scale',
                 title='How committed is the promise?',
                 sub='cycle 2 · what a government or employer actually '
                     'said',
                 left='no commitment at all', right='a binding promise',
                 items=[('we are exploring', 0.03),
                        ('we aim to', 0.18),
                        ('we expect to', 0.33),
                        ('we have budgeted for', 0.52),
                        ('we are committed to', 0.68),
                        ('we have undertaken to', 0.84),
                        ('we are required to', 0.99)],
                 note='Three of the four texts in this cycle make a '
                      'promise and only one of the three is on the '
                      'right-hand half of this line. The matching '
                      'questions are about exactly that.'),
    task='Choose the phrase or collocation that fits.',
    items=[
     ('Money protected so it cannot be spent on anything else has been '
      '____________.', None, 'ring-fenced'),
     ('A scheme given less money than it needs has been ____________.',
      None, 'underfunded'),
     ('The difference between what is needed and what is given is the '
      'funding ____________.', None, 'gap'),
     ('Money given only if the employer gives the same amount is '
      '____________ funding.', None, 'match'),
     ('The weakest promise on the cline: we are ____________.',
      None, 'exploring'),
     ('A promise with legal force: we are ____________ to.',
      None, 'required'),
     ('Money that may be given or withheld at the giver’s discretion '
      'is ____________ funding.', None, 'discretionary'),
     ('Winning money for a scheme is to ____________ funding.',
      None, 'secure')]),
   builder=dict(
    skill='Matching features: the writer, or somebody the writer quotes',
    qkind='skill',
    explain='A matching-features question gives you names and '
            'statements and asks who holds which view. Learners match '
            'on subject - this person talked about cost, that statement '
            'is about cost, done - and the question is almost never '
            'about subject, because the examiner has made sure that '
            'three of the four writers mention cost. What separates '
            'them is commitment. One says cost is the main obstacle, '
            'one says it has been exaggerated, one mentions it and '
            'moves on without taking a side at all. So read for the '
            'verb rather than the noun: argues, insists, concedes, '
            'doubts, dismisses, notes. And watch for the second voice. '
            'A text often quotes somebody in order to disagree with '
            'them, and the strongest sentence on the page frequently '
            'belongs to the person the writer is about to answer. The '
            'reporting verb that gives it away is usually three or four '
            'lines earlier, which is why you have to find it rather '
            'than remember it.',
    worked=[
     'TEXT B says: “Employers, we are told, cannot be expected to fund '
     'training that benefits a competitor. The claim is made with great '
     'confidence and very little evidence.”',
     'The strong sentence - employers cannot be expected to fund it - '
     'is not the writer’s view. We are told hands it to somebody else.',
     'The writer’s own view is in the second sentence, and it is a '
     'rejection: confidence without evidence.',
     'So a statement reading "employers should not have to pay" '
     'matches NOT text B, even though text B contains that sentence '
     'almost word for word. It matches whichever text says it and '
     'means it.'],
    figure=dict(kind='signpost', teaches='signposting',
                title='Whose voice is this?',
                sub='cycle 2 · the six phrases that hand a sentence to '
                    'somebody else',
                markers=[('we are told', 'somebody else, about to be '
                          'answered'),
                         ('it is often said', 'the same, and weaker'),
                         ('critics argue', 'named opposition'),
                         ('on this view', 'a position being summarised'),
                         ('the claim is that', 'reported, not endorsed'),
                         ('I would argue', 'the writer, at last')],
                note='Everything between one of the first five and the '
                     'writer’s own answer belongs to somebody else. '
                     'Find the answer before you attribute anything.'),
    task='For each extract, write WRITER or REPORTED, and give the two '
         'or three words that told you.',
    items=[
     ('“Retraining works, say its defenders, and the figures do not '
      'support them.”', None, 'reported, say its defenders'),
     ('“I would argue that the gap is one of time rather than money.”',
      None, 'writer, I would argue'),
     ('“It is often said that older workers will not retrain. They '
      'do.”', None, 'reported, it is often said'),
     ('“The scheme has been underfunded since 2019.”',
      None, 'writer, no reporting phrase'),
     ('“On this view, the employer is simply the wrong payer.”',
      None, 'reported, on this view'),
     ('“Critics argue the completion rate is flattering, and they are '
      'right.”', None, 'both, critics argue then endorsed')],
    note='The last one is the hard case and it is the commonest: the '
         'writer reports a view and then signs it, so from that '
         'sentence onwards it is the writer’s view too. Watch for the '
         'signature, because it is usually four words long - and they '
         'are right, or so it proves, or this is correct. Without the '
         'signature a reported view stays the property of the person '
         'reported, however much of the page it occupies and however '
         'vigorously it is put. Vigour is not endorsement: an honest '
         'writer puts the opposition’s case forcefully precisely '
         'because they intend to answer it.'),
   figures=[
    dict(kind='matrix', teaches='comparison',
         title='Four texts, three questions - fill the blanks',
         sub='cycle 2 · build this before you answer the matching set',
         cols=['Text A', 'Text B', 'Text C', 'Text D'],
         rows=['Who should pay?',
               'How strong is the promise? (use the cline)',
               'What does it concede?',
               'Reporting somebody, or speaking?'],
         cells=[['the state', '', '', 'the employer'],
                ['we are committed to', '', 'we aim to', ''],
                ['', 'the evidence is thin', '', ''],
                ['speaking', '', '', 'speaking']],
         note='Seven blanks. A matching-features set is almost always '
              'answerable from a grid like this one, and almost never '
              'answerable from memory of the four texts.'),
   ],
   advice='In matching features the names are given once and the '
          'statements in a different order on purpose. Do not read the '
          'statements first and then hunt for them: that method makes '
          'you search four texts eight times. Read each text once and '
          'write two words beside it saying what it holds and how '
          'firmly, and the statements then take about a minute between '
          'them. Note also that a name may be used twice, or not at '
          'all, and the instruction line says which - a set where every '
          'name is used exactly once is the easiest kind and you are '
          'not always given it. Finally, the statements are not in '
          'passage order and never will be, so there is no point '
          'working through them as though they were.',
   debrief=dict(
    read=['The strongest sentence in text B is a quotation. We are told '
          'is three words long and it changes who owns the sentence.',
     'Two texts mention the completion rate and one of them merely '
     'mentions it. Mentioning is not holding a view.',
     'The Yes/No/Not Given statement about older workers is one the '
     'writer reports and then rejects, so it is NO, and test 1 from '
     'unit 21 cycle 2 is what gets you there.'],
    listen=['The two speakers agree about the problem and disagree '
            'about the cause, and the matching questions are all about '
            'the cause.',
     'One speaker says “that is fair” and then says but. Everything '
     'before but is politeness.']),
   outside='Knowing whose view you are reading is the difference '
           'between being informed and being managed. Most news, most '
           'advertising and nearly all political writing depends on the '
           'reader not noticing where the reporting verb was.',
   recycled=['criteria', 'funding', 'eligible', 'completion rate',
             'evidence'],
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
           'Eleven months of being the oldest and the worst at '
           'everything.',
           {1: 'Kwabena found that paying made them finish.', 2: 'Marguerite changed without moving jobs.', 3: 'Haruki credits circumstances others may not have.'}),
          ('Which person found that paying made them finish?',
           ['Benedetta', 'Kwabena', 'Marguerite', 'Haruki'], 1,
           'Three free courses abandoned, one paid course finished in '
           'eleven weeks.',
           {0: 'Benedetta says the main difficulty was psychological.', 2: 'Marguerite changed without moving jobs.', 3: 'Haruki credits circumstances others may not have.'}),
          ('Which person changed without moving jobs?',
           ['Benedetta', 'Kwabena', 'Marguerite', 'Haruki'], 2,
           'Same job title, completely different work underneath it.',
           {0: 'Benedetta says the main difficulty was psychological.', 1: 'Kwabena found that paying made them finish.', 3: 'Haruki credits circumstances others may not have.'}),
          ('Which person credits circumstances others may not have?',
           ['Benedetta', 'Kwabena', 'Marguerite', 'Haruki'], 3,
           'Three months unpaid, possible only because a partner was '
           'earning.',
           {0: 'Benedetta says the main difficulty was psychological.', 1: 'Kwabena found that paying made them finish.', 2: 'Marguerite changed without moving jobs.'}),
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
    dict(preview=True,
         heading='Two people who agree about the problem',
         part='Preview', task='Sentence completion',
         band='lpre', qtype='Questions P1-P3',
         why='Ninety seconds before five minutes. The Part 2 you are '
             'about to hear has the same two positions in it, faster '
             'and with figures attached.',
         script=[
          ('Len', 'Nobody disagrees that people need retraining. That is '
                  'not the argument.'),
          ('Priya', 'No. The argument is who writes the cheque.'),
          ('Len', 'And my answer is the employer, because the employer '
                  'is the one who removed the job.'),
          ('Priya', 'Except that the employer who removed it is usually '
                    'not the employer who hires them next. You are '
                    'asking one firm to train a worker for a '
                    'competitor.'),
          ('Len', 'Which is exactly why none of them does it, and why '
                  'the state ends up paying anyway, only later and '
                  'worse.'),
          ('Priya', 'That I accept. I would just rather we decided to '
                    'pay than discovered we had.'),
          ('Len', 'Then we agree about more than I thought.'),
          ('Priya', 'We agree about the bill. We do not agree about '
                    'whose name is on it, and that is not a small '
                    'thing when the sums are this size.'),
          ('Len', 'Put a figure on it, then. What would it cost to '
                  'retrain everybody displaced in a bad year?'),
          ('Priya', 'For a cohort the size of last year’s, something '
                    'in the region of four hundred million. Which '
                    'sounds enormous until you set it against what we '
                    'pay in benefits to the same people over the '
                    'following decade, and then it sounds cheap.'),
          ('Len', 'So the argument is not really about the money '
                  'either.'),
          ('Priya', 'The argument is about who decides. It usually '
                    'is.')],
         items=[
          ('Len says the employer should pay because the employer '
           'removed the ____________.', None, 'job',
           'His second turn, which is the whole of his case.'),
          ('Priya objects that the firm would be training a worker for '
           'a ____________.', None, 'competitor',
           'Her second turn, and it is the standard objection.'),
          ('Len says the state pays anyway, only later and '
           '____________.', None, 'worse',
           'His third turn, which Priya then accepts.')]),
    dict(heading='A short talk: retraining', part='Part 2',
         task='A talk at a careers centre · matching',
         bank=['A', 'B', 'C', 'D'],
         reuse=True,
         banklabel='A  a short course    B  a qualification next to your field    C  a full change of field    D  staying and adapting', band='l2',
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
          ('has the highest completion rate.', None, 'A',
           'A fortnight, often paid for by an employer.'),
          ('has a completion rate of about sixty-five per cent.', None,
           'B', 'Six to twelve months, in a field next to your own.'),
          (
           'is the one where another earner in the household is the '
           'best predictor of finishing.', None, 'C',
           'Two years or more, often with a drop in income.'),
          ('is the one nobody counts.', None, 'D',
           'Most people do this and nobody calls it retraining.')]),
    dict(heading='Two advisers on retraining schemes', part='Part 3',
         task='A discussion between careers advisers · note completion', band='l3',
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
          (
           'The completion rate for the two-year programme is '
           '____________ per cent.', None, 'thirty-eight',
           'Which Rosalind expects will prompt the department to close '
           'it.'),
          (
           'Emeka says comparing it with fortnight courses is like '
           'comparing a marathon with a ____________ ride.',
           None, 'bus',
           'His point is that the two populations are not comparable.'),
          (
           'He says the dropout is caused by surviving two years '
           '____________.', None, 'financially',
           'Nobody leaves a fortnight course because of a rent '
           'increase.'),
          (
           'Rosalind points out that nobody has ____________ '
           'maintenance payments.', None, 'tested',
           'Which is why Emeka proposes a trial instead of a '
           'programme.'),
          (
           'They add an interim report at twelve months because '
           'dropout happens ____________.', None, 'early',
           'Most of it happens in the first four months, so an early '
           'report is informative.')])],
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
    ref='L13',
    context=[
     'From text C, which you have just read:',
     'There are two separate questions here and they are routinely run '
     'together. The first is whether retraining works, which is a '
     'question about evidence. The second is who should pay for it, '
     'which is a question about fairness and cannot be settled by any '
     'amount of data. Conflating them is how both sides manage to think '
     'the other is arguing in bad faith.'],
    notice=[
     ('How does the writer signal that a division is coming, before '
      'making it?', 'There are two separate questions here'),
     ('What are the two questions about, in the writer’s own words?',
      'evidence; fairness')],
    noticetask='Answer both from the paragraph above, which you met '
               'earlier in this cycle.',
    contrast='Dividing a subject before arguing about it is the single '
             'most useful move available in Task 2, and it is almost '
             'absent from band 6 essays. The pattern is announce, '
             'number, separate: There are two questions here. The '
             'first is... The second is... Compare it with the band 6 '
             'alternative, which is to argue about both at once and '
             'look as though you cannot tell them apart. Note the '
             'grammar: the first and the second take a singular verb '
             'and are followed by whether or a noun phrase, never by '
             'a that-clause.',
    task2='Divide each subject into two questions before arguing. Write '
          'the two.',
    items2=[
     ('Should universities lower their offers? ____________',
      None, 'whether it works; whether it is fair'),
     ('Should employers fund retraining? ____________',
      None, 'whether it helps; who should pay'),
     ('Correct: There are two question here. ____________',
      None, 'There are two questions here'),
     ('Correct: The first is that whether it works. ____________',
      None, 'The first is whether it works')],
    task3='Now use it. Take the question in this cycle - who should pay '
          'for retraining - announce the division, state the two '
          'questions, and answer one of them in sixty to eighty words.',
    items3=8,
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
   notes=dict(
    serves='Matching information and True/False/Not Given, Reading '
           'Part 3; Task 1 Academic, a chart of shares',
    because='A band 6 Task 1 answer describing shares reports the '
            'percentages and never names the whole they are shares of, '
            'so the reader cannot tell whether anything has grown',
    skill='Describing proportions: naming the whole, using of, and '
          'keeping a falling share apart from a falling number',
    evidence='Phase 4 measured the 6.5 models against the 9 models; in '
             'every share chart in the series the lower answer omits '
             'the whole',
    watch='Learners will write "routine tasks fell" where the chart '
          'shows a falling share and a rising total. Expect it, and '
          'point at the preview box',
    time='85 minutes, or 65 without the free grammar production'),
   lead=dict(
    title='Which half of your job is the routine half?',
    body='Machines do not take jobs. They take tasks, and a job is a '
         'bundle of tasks held together by a job title. That is why the '
         'honest question is never whether your occupation will '
         'survive, but which parts of it will, and what the rest looks '
         'like once the easy parts have gone. In cycle 1 you met a role '
         'changing underneath somebody; this is the mechanism by which '
         'it happens.',
    task='Answer these before you look at the chart.',
    qs=['Take a job you know well. Which three tasks in it are '
        'routine?',
        'Which task in that job would be hardest for a machine, and '
        'why?',
        'If the routine half went, would the job be better or worse to '
        'do?',
        'Would it need the same person, or a different one?']),
   vocabwork=dict(
    title='Shares, proportions and the words for them',
    body='This is the smallest vocabulary set in the unit and the one '
         'that earns the most marks, because almost every Task 1 '
         'Academic question in the paper is a question about '
         'proportions. Eight nouns, six verbs and four ways of saying '
         'approximately, used precisely.',
    figure=dict(kind='field', teaches='vocabulary',
                centre='a share of a whole',
                sub='cycle 3 · the Task 1 vocabulary that pays',
                branches=[('the parts',
                           ['share', 'proportion', 'percentage',
                            'fraction']),
                          ('the whole',
                           ['total', 'the workforce', 'all tasks',
                            'the sample']),
                          ('movement',
                           ['rise to', 'fall to', 'rise by',
                            'account for']),
                          ('size',
                           ['the largest', 'roughly a third',
                            'just under half', 'a tenth'])],
                note='Account for is the verb Task 1 most wants and '
                     'learners least use: routine tasks account for '
                     'forty per cent of the total.'),
    figure2=dict(kind='family', teaches='word-formation',
                 sub='cycle 3 · four families a Task 1 answer needs',
                 rows=[('', ('pro-por-tion', 2), '',
                        ('pro-por-tio-nal', 3), ('pro-por-tio-nal-ly', 3)),
                       (('dom-i-nate', 1), ('dom-i-nance', 1), '',
                        ('dom-i-nant', 1), ''),
                       (('ex-ceed', 2), ('ex-cess', 1), '',
                        ('ex-ces-sive', 2), ''),
                       (('ac-count', 2), '', '', '', ''),
                       (('de-cline', 2), ('de-cline', 2), '', '', '')],
                 note='Decline is both verb and noun with the same '
                      'stress, which is unusual and useful: a decline '
                      'in routine tasks, or routine tasks declined.'),
    task='Complete each sentence. The chart in this cycle is the '
         'subject of all eight.',
    items=[
     ('Routine tasks ____________ for forty per cent of the total.',
      None, 'account'),
     ('The largest ____________ is held by non-routine cognitive work.',
      None, 'share'),
     ('Non-routine manual work makes up just ____________ a tenth.',
      None, 'under'),
     ('The noun from proportion used as an adverb is ____________.',
      None, 'proportionally'),
     ('Cognitive work is the ____________ category throughout.',
      None, 'dominant'),
     ('There was a steady ____________ in routine work after 1990.',
      None, 'decline'),
     ('Thirty-three per cent is roughly ____________.',
      None, 'a third'),
     ('The whole this chart divides is all ____________ in the '
      'economy.', None, 'tasks')]),
   builder=dict(
    skill='Task 1: describing shares that add to a whole',
    qkind='skill',
    explain='A share chart is the easiest Task 1 to describe badly. '
            'Everything on it is a percentage, the percentages add to a '
            'hundred, and a learner can write two hundred words of '
            'perfectly correct sentences that leave the reader knowing '
            'nothing. Four rules fix it, and they are the whole lesson. '
            'First, name the whole in your opening sentence, because a '
            'share of an unnamed thing is not information: these are '
            'shares of all tasks in the economy, not of jobs and not of '
            'workers. Second, give the overview as a rank, not as a '
            'list - which share is largest, which is smallest, and '
            'whether that order changed. Third, use of in every '
            'comparison and keep the word share or proportion in the '
            'sentence, because dropping it is what turns a share into a '
            'number by accident. Fourth, if the chart gives you a total '
            'as well as the shares, say explicitly when a share falls '
            'while the number rises; if it does not give you the total, '
            'say nothing about numbers at all.',
    worked=[
     'The chart: the task mix of the economy, four categories, 1980 '
     'and 2020.',
     'Opening, naming the whole: “The chart divides all tasks in the '
     'economy into four kinds and shows the share held by each in 1980 '
     'and 2020.”',
     'Overview as a rank: “Routine manual work held the largest share '
     'in 1980 and the smallest in 2020; non-routine cognitive work '
     'moved the other way.”',
     'A comparison with of kept in: “Routine tasks accounted for '
     'forty-one per cent of the total in 1980 and twenty-two per cent '
     'in 2020.”',
     'What not to write: “routine tasks fell by nineteen”. Nineteen '
     'what? The chart has not told you how many tasks there were.'],
    figure=dict(kind='ladder', teaches='band-move',
                criterion='Task Achievement, on a share chart',
                sub='cycle 3 · the same fact, three bands',
                rungs=[('5.5', 'Routine manual was 41 and then it was '
                        '22. Non-routine cognitive was 19 and then it '
                        'was 38.', ''),
                       ('6.5', 'The share of routine manual work fell '
                        'from 41 per cent to 22 per cent, while '
                        'non-routine cognitive work rose from 19 to 38 '
                        'per cent.',
                        'share kept in, and the two moves joined into '
                        'one sentence'),
                       ('7.5', 'Routine manual work, which accounted '
                        'for the largest share of all tasks in 1980 at '
                        '41 per cent, had become the smallest by 2020 '
                        'at 22 per cent, its place taken by non-routine '
                        'cognitive work.',
                        'the rank change carried as the sentence’s main '
                        'point, with the figures subordinate to it')],
                note='The third answer has the same four numbers in it '
                     'as the first. What it adds is an order and a '
                     'whole, and both were on the chart all along.'),
    task='Rewrite each sentence so that it names the whole, or says '
         'what is wrong with it. One line each.',
    items=[
     ('Routine tasks fell by 19.', None, 'the share fell, not the '
      'number'),
     ('Cognitive work was 38 per cent.', None, 'of all tasks'),
     ('The biggest number is 41.', None, 'the largest share is 41 per '
      'cent'),
     ('Manual work went down a lot.', None, 'its share fell from 41 to '
      '22'),
     ('There were more cognitive tasks in 2020.', None, 'the chart '
      'shows shares, not numbers'),
     ('Non-routine manual stayed the same.', None, 'its share was '
      'unchanged at about a tenth')],
    note='Three of the six are wrong because they turned a share into '
         'a number. That is the single error this whole cycle exists '
         'to prevent.'),
   figures=[
    dict(kind='bridge', teaches='paraphrase',
         sub='cycle 3 · what the questions will have done to the '
             'article',
         pairs=[('two in five', 'forty per cent', 'reformulation'),
                ('tasks a machine can learn', 'routine work',
                 'hypernym'),
                ('the number of workers fell', 'employment declined',
                 'nominalisation'),
                ('firms replaced people with machines',
                 'labour was substituted by capital', 'voice'),
                ('not the largest', 'smaller than at least one other',
                 'negation'),
                ('thinking work', 'cognitive tasks', 'synonym')],
         note='The second and the last are the two the matching '
              'questions in this cycle turn on.'),
   ],
   advice='In Task 1 the overview is worth more than any other '
          'sentence, and on a share chart it is a statement of rank '
          'and change of rank. Write it second, after one sentence '
          'naming what the chart divides, and never let it become a '
          'list. A list of four shares is not an overview, it is the '
          'chart again in words.',
   debrief=dict(
    read=['The True/False/Not Given statement about the number of '
          'routine jobs is Not Given, because the article gives shares '
          'throughout and never gives a total. The preview box warned '
          'you this would happen.',
     'Two paragraphs mention forecasting and only one is about it. The '
     'matching-information question asks which paragraph contains the '
     'explanation, not which mentions the word.',
     'Question 38 uses two in five and the passage says forty per '
     'cent. That is the first pair on the paraphrase bridge.'],
    listen=['The speaker gives a share and then a raw number for a '
            'different year. Both are in the recording and only one '
            'answers the question.',
     'In the matching task the third speaker revises her figure after '
     'a pause. The revised one is the answer.']),
   outside='Every argument conducted in percentages depends on somebody '
           'knowing what the whole was, and most of the time nobody '
           'checks. The habit of asking "of what?" is worth more '
           'outside this exam than any other sentence in this unit.',
   recycled=['proportion', 'median', 'share', 'forecast', 'evidence',
             'occupation'],
   read=[
    dict(preview=True,
         heading='What a share is, and what it is not',
         kind='Explainer box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='The chart in this cycle is about shares, and almost every '
             'mistake made in describing it is the same mistake. Two '
             'hundred words now.',
         paras=[
          'A share is a part of a whole, and the whole is always stated '
          'somewhere. Forty per cent of tasks are routine means that if '
          'you took every task in the economy and sorted them, two in '
          'five would be of that kind. It says nothing whatever about '
          'how many tasks there are.',
          'This matters because a share can fall while the thing itself '
          'grows. If routine tasks fall from forty per cent to thirty '
          'while the total number of tasks doubles, there are more '
          'routine tasks than there were, not fewer. The share fell. '
          'The number rose. Both sentences are true and they sound like '
          'contradictions.',
          'In a chart, shares are usually the thing being drawn, '
          'because shares are comparable between countries and years '
          'and raw numbers are not. The cost is that the reader has to '
          'remember what the whole was, and the chart often does not '
          'say.',
          'So the rule for writing about one: name the whole in your '
          'first sentence, use of in every comparison, and never let a '
          'falling share become a falling number unless the chart has '
          'actually told you so.'],
         items=[
          ('A share is a part of a ____________, which is always stated '
           'somewhere.', None, 'whole',
           'Paragraph 1, which also warns that it says nothing about '
           'the total.'),
          ('A share can fall while the number itself ____________.',
           None, 'grows',
           'Paragraph 2, where forty per cent falling to thirty leaves '
           'more tasks, not fewer.'),
          ('Shares are drawn rather than raw numbers because shares are '
           '____________ between countries and years.',
           None, 'comparable',
           'Paragraph 3, and the cost is given in the same sentence.')]),
    dict(heading='Routine, non-routine and the jobs in between',
         kind='Data article',
         task='Matching features, matching information, sentence completion and True/False/Not Given',
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
          (
           'Which occupation has the highest share of routine manual '
           'work?',
           ['Checkout operator', 'Warehouse picker', 'Care assistant', 'Plumber'],
           1, 'At 61 per cent, against 46 for the checkout operator.',
           {0: 'The checkout operator is 46 per cent routine manual.', 2: 'The care assistant is 70 per cent non-routine.', 3: 'The plumber is 67 per cent non-routine.'}),
          (
           'Which paragraph explains why whole-occupation forecasts '
           'fail?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           2,
           'No occupation is entirely routine, and the remainder is '
           'what changes the job\u2019s shape.',
           {0: 'Paragraph 2 explains why machines took routine tasks.', 1: 'Paragraph 3 is about the two least automatable jobs.', 3: 'Paragraph 5 draws the general lesson about bundles.'}),
          ('Which two occupations are hardest to automate?',
           ['Checkout and warehouse', 'Warehouse and care', 'Care and plumbing', 'Checkout and plumbing'],
           2, 'At 70 and 67 per cent non-routine respectively.',
           {0: 'Checkout and warehouse are the two most routine jobs.', 1: 'The warehouse picker is the most routine of the four.', 3: 'The checkout operator is 80 per cent routine.'}),
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
         task='A lecture on what automation actually takes · sentence completion, matching and multiple choice', band='l4',
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
          (
           'The lecturer says the wrong question is whether this job '
           'will be ____________.', None, 'automated',
           'He proposes task composition as the right one.'),
          ('Which category do machines struggle with?',
           ['Routine manual', 'Routine cognitive', 'Non-routine', 'All three equally'],
           2,
           'Judgement, unpredictable physical settings and other '
           'people.',
           {0: 'Routine manual work is what machines took first.', 1: 'Routine cognitive work follows a writable rule.', 3: 'He says machines take the first two categories '
               'readily.'}),
          ('He compares the care assistant with',
           ['a plumber', 'a junior accountant', 'a warehouse picker', 'a teacher'],
           1,
           'The accountant has longer training and a more automatable '
           'day.',
           {0: 'The plumber is the other hard-to-automate job, not the '
               'contrast.', 2: 'The warehouse picker is the most routine of the four.', 3: 'No teacher appears anywhere in the lecture.'}),
          (
           'The inversion he describes is that what is hard for humans '
           'is ____________ for machines.', None, 'easy',
           'And what a small child does without noticing remains very '
           'difficult.'),
          (
           'Automating eighty per cent of a job produces a job with a '
           'different ____________.', None, 'shape',
           'And often a worse one, because what is left is the '
           'exceptions all day.'),
          ('Where does he say policy attention should go?',
           ['Counting jobs lost', 'What the remaining work feels like', 'Training budgets', 'Machine capability'],
           1,
           'Studies of this have barely been done, though workers have '
           'reported it for a decade.',
           {0: 'Counting jobs lost is what he says has overshot.', 2: 'Training budgets are not his subject at all.', 3: 'Machine capability is the first two categories, not '
               'the policy.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='Work that cannot be automated',
    intro=('The long turn first. A minute of notes, then one to two '
           'minutes, and the examiner closes it with a short question or '
           'two. Then the discussion: four or five sentences. Try once to '
           'talk about tasks instead of jobs.'),
    cue=('Describe a job that needs patience with people.',
         ['what the job is',
          'who does it where you live',
          'what the difficult part of it is',
          'and explain why a machine could not do it']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Is it well paid where you live?',
        'Would you do it?',
        'Which jobs do you think machines will never do?',
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
    ref='L6',
    context=[
     'From the article in this cycle:',
     'Routine manual tasks accounted for forty-one per cent of all '
     'tasks in 1980 and twenty-two per cent in 2020. Over the same '
     'period the share held by non-routine cognitive work roughly '
     'doubled, from nineteen per cent to thirty-eight. Nothing in '
     'these figures tells us how many tasks there were in either year, '
     'and a good deal of commentary has proceeded as though it did.'],
    notice=[
     ('Find the two different ways the writer expresses a change.',
      'from forty-one per cent to twenty-two; roughly doubled'),
     ('What does the last sentence stop the reader from concluding?',
      'that the number of tasks rose or fell')],
    noticetask='Answer both from the paragraph above, which is from the '
               'passage you have just read.',
    contrast='Describing shares needs the same three tools as comparing '
             'any pair of figures - a difference, a ratio, an '
             'approximation - with one extra rule on top: the word '
             'share or proportion has to survive into the sentence. '
             'Compare "routine work fell from 41 to 22" with "the share '
             'of routine work fell from 41 to 22 per cent". The first '
             'sentence says something the chart does not support, and '
             'it is the commonest error in Task 1 Academic. The '
             'reference entry on comparing figures has the full set; '
             'this is the part of it that applies to shares.',
    task2='Rewrite each so that it is true of a share chart.',
    items2=[
     ('Routine tasks fell by 19. ____________',
      None, 'The share of routine tasks fell by 19 percentage points.'),
     ('Cognitive work doubled. ____________',
      None, 'The share held by cognitive work roughly doubled.'),
     ('Manual work was the biggest. ____________',
      None, 'Manual work accounted for the largest share.'),
     ('Correct: a rise from 19% to 38% is a rise of 19 per cent. '
      '____________',
      None, 'a rise of 19 percentage points')],
    task3='Now write the opening of a Task 1 answer from the chart in '
          'this cycle: one sentence naming the whole, one overview '
          'sentence giving the rank and its change, and one comparison. '
          'About fifty words, and no figure you do not need.',
    items3=8,
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
   notes=dict(
    serves='Matching headings and Yes/No/Not Given, Reading Part 3, on '
           'a six-hundred-word historical passage; multiple choice in '
           'Listening Part 4',
    because='Unit 21 taught matching headings as function rather than '
            'subject; this unit takes the next step, because the hard '
            'pairs are not subject against function but one function '
            'against a very similar one - the paragraph that defines a '
            'term against the paragraph that gives an example of it',
    skill='Telling a definition from an illustration, and a claim from '
          'the evidence for it',
    evidence='gate10 census: matching headings appears in every book, '
             'and the audit found no unit in Volume 3 teaching the '
             'distinctions the distractors are actually built on',
    watch='Learners will give paragraph C the heading about the '
          'Luddites, because C is full of Luddites. C defines '
          'technological unemployment and uses them as its example',
    time='90 minutes, or 70 without the free grammar production'),
   lead=dict(
    title='This has happened before. Four times.',
    body='Every generation is told that this time the machines are '
         'different. Sometimes that has been true. The useful question '
         'is not whether the present wave is unprecedented but what '
         'happened the last four times, how long the bad part lasted, '
         'and who bore it - which is a historical question with an '
         'answer rather than a prediction with an opinion. The puzzle '
         'chart at the front of this unit is the evidence; this cycle '
         'is the argument.',
    task='Answer these before you read, and keep your answers for the '
         'unit review.',
    qs=['Name a technology that destroyed a kind of work in your '
        'lifetime. What replaced it?',
        'How long do you think it takes a labour market to absorb a '
        'change like that - a year, a decade, a generation?',
        'Who do you think bears the cost while it is happening?',
        'Is the present wave different? What would count as evidence '
        'either way?']),
   vocabwork=dict(
    title='The vocabulary of a transition',
    body='Historians writing about technological change use a precise '
         'and slightly cold set of words, and the precision is the '
         'point: displaced is not the same as unemployed, and '
         'reallocation is not the same as recovery. Seven of these '
         'words return in cycle 5, where the subject is one worker '
         'rather than a labour market.',
    figure=dict(kind='cline', teaches='scale',
                title='How long did it take?',
                sub='cycle 4 · the words this passage uses for '
                    'duration',
                left='immediately', right='never, for those people',
                items=[('within months', 0.04),
                       ('over a few years', 0.2),
                       ('within a decade', 0.36),
                       ('over a generation', 0.56),
                       ('only for their children', 0.76),
                       ('not within their working lives', 0.95)],
                note='The passage uses the right-hand half three times '
                     'and the left-hand half once. That asymmetry is '
                     'the argument, and two of the headings depend on '
                     'noticing it.'),
    figure2=dict(kind='collocation', teaches='collocation',
                 node='labour', sub='cycle 4',
                 groups=[('labour + noun',
                          ['labour market', 'labour force',
                           'labour costs', 'labour mobility']),
                         ('verb + labour',
                          ['displace labour', 'absorb labour',
                           'substitute for labour', 'free up labour']),
                         ('adjective + labour',
                          ['skilled labour', 'cheap labour',
                           'surplus labour'])],
                 note='Labour is uncountable in all of these: '
                      '"labours" means something else entirely, and '
                      '"a labour" is a birth or a task in a myth.'),
    task='Complete each with a word or phrase from this cycle.',
    items=[
     ('Workers whose jobs the machine took were ____________.',
      None, 'displaced'),
     ('The market eventually ____________ them into other work.',
      None, 'absorbed'),
     ('Moving workers between regions and trades is labour '
      '____________.', None, 'mobility'),
     ('A gain that arrives too late for the people who paid for it '
      'arrives ____________ for their children.', None, 'only'),
     ('Machines ____________ for labour in routine tasks.',
      None, 'substitute'),
     ('The total number employed across the country is the national '
      '____________.', None, 'total'),
     ('The splitting of work into very good and very bad jobs is '
      '____________.', None, 'polarisation'),
     ('The period between one settled state and the next is the '
      '____________.', None, 'transition')]),
   builder=dict(
    skill='Matching headings: defining, illustrating, claiming, proving',
    qkind='skill',
    explain='In unit 21 you learned to name what a paragraph does '
            'rather than what it mentions. This is the next difficulty '
            'and it is where most of the remaining marks go. Once you '
            'are naming functions, the headings that tempt you are no '
            'longer the ones sharing a noun; they are the ones naming a '
            'neighbouring function. A paragraph that defines '
            'technological unemployment and a paragraph that gives the '
            'Luddites as an example of it are both about the Luddites '
            'and about unemployment, and only one of them is a '
            'definition. The test is a question you ask the paragraph: '
            'could this paragraph be true if the example in it were '
            'replaced by a different example? If yes, it is a '
            'definition or a claim, and the example is decoration. If '
            'no - if removing the example removes the content - it is '
            'an illustration or the evidence for something stated '
            'elsewhere. Four functions, two pairs, and the pairs are '
            'where the examiner works: define against illustrate, claim '
            'against prove.',
    worked=[
     'Paragraph C opens “Technological unemployment is the gap between '
     'a job disappearing and its replacement arriving” and spends six '
     'lines on Nottingham in 1811.',
     'Could the paragraph survive if Nottingham were replaced by '
     'Detroit in 1975? Yes - the definition is unchanged.',
     'So C defines, and Nottingham is its example. The heading '
     '"Machine-breaking in Nottingham" names the decoration.',
     'Paragraph D is six lines on Detroit with no definition in it at '
     'all. Remove Detroit and nothing is left. D illustrates.'],
    figure=dict(kind='skeleton', teaches='text-structure',
                title='Six hundred words, six functions',
                sub='cycle 4 · build your own before you look at this',
                paras=[('A', 'context', 'Four waves, and why they are '
                        'compared'),
                       ('B', 'claim', 'The transition, not the machine, '
                        'is the problem'),
                       ('C', 'definition', 'What technological '
                        'unemployment means'),
                       ('D', 'example', 'Detroit, and what the decade '
                        'cost'),
                       ('E', 'evidence', 'Four episodes, four '
                        'durations'),
                       ('F', 'consequence', 'What follows for policy '
                        'now')],
                note='C and D are the pair this cycle is about. Both '
                     'are full of places and dates; only one of them '
                     'would survive having its place and date changed.'),
    task='For each paragraph opening and closing, write DEFINE, '
         'ILLUSTRATE, CLAIM or PROVE, and one word of reason.',
    items=[
     ('Opens: “Displacement is not unemployment.” Closes: “...the two '
      'are routinely confused.”', None, 'define'),
     ('Opens: “In Nottingham in 1811 the frames were broken at '
      'night.” Closes: “...and the hangings followed in the spring.”',
      None, 'illustrate'),
     ('Opens: “Every one of the four episodes ended in higher '
      'employment.” Closes: “...and in every case it took longer than '
      'a decade.”', None, 'prove'),
     ('Opens: “The machine is not the problem.” Closes: “...the '
      'problem is the gap.”', None, 'claim'),
     ('Opens: “Consider the weavers of Lancashire.” Closes: '
      '“...their sons went into the mills.”', None, 'illustrate'),
     ('Opens: “By polarisation economists mean the hollowing of the '
      'middle.” Closes: “...with very good and very bad jobs at either '
      'end.”', None, 'define')],
    note='Two of the six are illustrations and both name a place in '
         'their first line. That is a reliable tell and it is exactly '
         'what makes their headings tempting, because a heading naming '
         'the place is the easiest to match and the wrong one. Apply '
         'the replacement test to anything with a proper noun in it: '
         'could this paragraph be rewritten about somewhere else and '
         'still say what it says? If yes, the proper noun is an '
         'example and the paragraph is doing something more general. '
         'If no, you are reading the illustration, and its heading '
         'will be the one that sounds least like a heading.'),
   figures=[
    dict(kind='timeline', teaches='timeline',
         title='Four waves, and how long each took',
         sub='cycle 4 · the passage covers 1811 to now',
         events=[('1811', 'Nottingham: frames broken', 0.02),
                 ('1830s', 'Handloom weavers displaced', 0.18),
                 ('1880s', 'Mechanised agriculture', 0.38),
                 ('1950s', 'Automation of the line', 0.6),
                 ('1980s', 'Computers enter the office', 0.78),
                 ('Now', 'Routine cognitive work', 0.98)],
         note='The matching-information questions in this cycle are a '
              'dating task in disguise. Draw this before you answer '
              'them, not after.'),
   ],
   advice='Do the headings paragraph by paragraph, in order, and write '
          'your own four words before you look at the list. The '
          'examiner provides two more headings than there are '
          'paragraphs and at least one unused heading will fit a '
          'paragraph you have already answered - that is what it is '
          'for. A heading naming a place or a date is almost always '
          'the decoration of a paragraph whose job is something else.',
   debrief=dict(
    read=['Paragraph C is full of Nottingham and is a definition. '
          'Paragraph D is full of Detroit and is an illustration. The '
          'heading naming a city belongs to D.',
     'Two headings contain the word unemployment and three paragraphs '
     'are about unemployment. Function, not subject - and then '
     'function against neighbouring function.',
     'The Yes/No/Not Given statement about wages is one the passage '
     'reports from a named economist and then qualifies. It is the '
     'reported-voice problem from cycle 2 of this unit, in a longer '
     'passage.'],
    listen=['Dr Hale gives four dates and asks you to remember one. '
            'The one she repeats is the one the question wants, and '
            'she repeats it twice.',
     'Question 57 offers an option built from a phrase she uses about '
     'a different episode.']),
   outside='Knowing whether a writer is defining a term or giving you '
           'an example of it decides whether you can argue with them. '
           'Most bad public argument is two people trading examples '
           'while believing they are disputing a definition.',
   recycled=['displaced', 'transition', 'evidence', 'labour market',
             'forecast', 'polarisation'],
   read=[
    dict(heading='Two centuries of machines and the jobs that followed',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and sentence completion',
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
           ['The reassuring account', 'What the account leaves out', 'A generation of adjustment', 'Work at both ends'],
           1,
           'The aggregate recovered in a decade; the individuals '
           'mostly did not.',
           {0: 'The reassuring account is paragraph 2, on cloth and '
               'demand.', 2: 'A generation of adjustment is paragraph 4, on '
               'agriculture.', 3: 'Work at both ends is the heading for paragraph 5.'}),
          ('Choose the best heading for paragraph 5.',
           ['A generation of adjustment', 'Work at both ends', 'Why adjustment changed', 'Two claims, reported as one'],
           1, 'New jobs appearing at both ends, which is polarisation.',
           {0: 'A generation of adjustment is paragraph 4, on '
               'agriculture.', 2: 'Why adjustment changed is paragraph 6, on moving up or '
               'down.', 3: 'Two claims, reported as one is the heading for '
               'paragraph 7.'}),
          ('Choose the best heading for paragraph 7.',
           ['Why adjustment changed', 'Two claims, reported as one', 'Work at both ends', 'A badly framed question'],
           1,
           'Employment recovers is supported; displaced workers '
           'recover is not.',
           {0: 'Why adjustment changed is paragraph 6, on moving up or '
               'down.', 2: 'Work at both ends is the heading for paragraph 5.', 3: 'The badly framed question is paragraph 10, the '
               'summary.'}),
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
    dict(preview=True,
         heading='A historian on the word Luddite',
         part='Preview', task='Sentence completion',
         band='lpre', qtype='Questions P1-P3',
         why='The lecture you are about to hear assumes you know what '
             'the Luddites actually wanted. Almost nobody does, and the '
             'lecture’s argument depends on it.',
         script=[
          ('Dr Hale', 'The word Luddite now means somebody who hates '
                      'machines. That is not what they were, and the '
                      'mistake is worth a minute of your time.'),
          ('Student', 'They broke machines, though.'),
          ('Dr Hale', 'They broke some machines and left others alone, '
                      'in the same workshops, on the same nights. What '
                      'they objected to was not the frame. It was being '
                      'paid by the piece for work the frame had made '
                      'faster, so that the same hours bought less '
                      'bread.'),
          ('Student', 'So it was about wages.'),
          ('Dr Hale', 'It was about who captured the gain. The frame '
                      'produced a gain. The question was whose it was, '
                      'and the answer, given by Parliament rather than '
                      'by the market, was not theirs.'),
          ('Student', 'And that is the modern argument too.'),
          ('Dr Hale', 'That is the argument in every one of the four '
                      'episodes we are about to look at, and it is why '
                      'calling somebody a Luddite is usually a way of '
                      'avoiding it.')],
         items=[
          ('Dr Hale says the Luddites objected not to the frame but to '
           'being paid by the ____________.', None, 'piece',
           'Her second long turn, where she says the same hours bought '
           'less bread.'),
          ('The real question, she says, was who captured the '
           '____________.', None, 'gain',
           'Her third turn, which is also the thesis of the lecture.'),
          ('The answer was given by ____________ rather than by the '
           'market.', None, 'parliament',
           'The same turn, and it is the detail the exam task comes '
           'back to.')]),
    dict(heading='A lecture on technological unemployment', part='Part 4',
         task='A lecture on four historical episodes · multiple choice, sentence completion and short answer', band='l4',
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
           ['wrong about everything', 'wrong about the total and right about somebody', 'right about the total', 'too pessimistic'],
           1, 'He sets out to separate the two claims.',
           {0: 'He says they have been right about somebody every '
               'time.', 2: 'Being right about the total is the optimists\u2019 case, '
               'not theirs.', 3: 'He credits the optimists with the better of the '
               'totals.'}),
          (
           'In all four episodes, total employment twenty years later '
           'was ____________.', None, 'higher',
           'Which he calls the optimists\u2019 case, and correct.'),
          ('What happened to the displaced weavers?',
           ['They became factory hands', 'Many finished poorer', 'They moved abroad', 'They retrained'],
           1,
           'The new work came a generation later and went to other '
           'people\u2019s children.',
           {0: 'He says they did not become well-paid factory hands.', 2: 'Emigration is not part of his account of the weavers.', 3: 'No retraining is described in the weaving episode.'}),
          ('How long did agricultural adjustment take?', None,
           'about thirty years',
           'Which he points out is a working life.'),
          (
           'Office computerisation removed work that was cognitive and '
           '____________.', None, 'middle-paid',
           'Clerks, typists and book-keeping, replaced at both ends.'),
          ('His closing request is to ask whether a claim is about',
           ['the past or the future', 'totals or people', 'machines or software', 'one country or many'],
           1, 'Because the evidence differs for each.',
           {0: 'Past and future is not the distinction he asks for.', 2: 'Machines against software is not the question he '
               'poses.', 3: 'Country coverage is not what he tells you to ask.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='Predicting the effect of a technology',
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
    intro=('Work the card first: a minute of notes, the long turn, then '
           'the one or two questions that round it off. The discussion '
           'after that: four or five sentences. Say once whether you are '
           'talking about a total or about individuals.'),
    cue=(('Describe a machine or a program that changed how you work or '
          'study.'),
         ['what it is',
          'when you started using it',
          'what it replaced',
          'and explain what you gained and what you lost']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Could you work without it now?',
        'Who taught you to use it?',
        'Can we predict which jobs a new technology will replace?',
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
    ref='L14',
    context=[
     'From the passage you have just read:',
     'Employment rose in every one of the four episodes. It does not '
     'follow that the weavers found work. The national total is a '
     'statement about a market; the weaver is a person, and a market '
     'can absorb a shock in fifteen years while a working life lasts '
     'forty. Both sentences are true, and almost every argument about '
     'automation consists of one side stating the first and the other '
     'side stating the second.'],
    notice=[
     ('Find the sentence that refuses to let one claim imply the '
      'other.', 'It does not follow that the weavers found work'),
     ('What two nouns does the writer put side by side to mark the '
      'difference?', 'a market; a person')],
    noticetask='Answer both from the paragraph above, which you met '
               'earlier in this cycle.',
    contrast='Keeping a claim about a total apart from a claim about a '
             'person is a structure before it is an idea, and the '
             'structure is simple: state the aggregate, deny the '
             'inference with it does not follow that, then name the '
             'two different subjects. Compare it with the band 6 '
             'version, which is "employment rose but some people '
             'suffered" - true, vague, and not an argument, because but '
             'does not say why the first sentence fails to settle the '
             'second. It does not follow that is doing logical work '
             'that but cannot do.',
    task2='Join each pair so that the aggregate claim does not swallow '
          'the individual one. Use the phrase given.',
    items2=[
     ('Employment rose. The weavers did not find work. (it does not '
      'follow) ____________',
      None, 'Employment rose; it does not follow that the weavers '
      'found work.'),
     ('Average earnings rose. Most workers earned less. (which is '
      'consistent with) ____________',
      None, 'Average earnings rose, which is consistent with most '
      'workers earning less.'),
     ('The market adjusted in fifteen years. A working life is forty. '
      '(so) ____________',
      None, 'The market adjusted in fifteen years, so a working life '
      'outlasts the adjustment.'),
     ('Correct: employment rose but some people suffered, therefore '
      'the policy failed. ____________',
      None, 'employment rose; it does not follow that nobody bore a '
      'cost')],
    task3='Now write it yourself. Take any aggregate claim from this '
          'unit - the rise in total employment, the fall in the share '
          'of routine work, the growth of cognitive jobs - state it '
          'fairly, and then say precisely what it does not establish '
          'about an individual. Sixty to eighty words.',
    items3=10,
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
   notes=dict(
    serves='Matching information and matching sentence endings, '
           'Reading Part 3; Task 2, agree or disagree with a statement',
    because='Band 6 essays either accept a statement wholesale or '
            'reject it wholesale, and the strongest Task 2 move - '
            'granting that a statement is true and denying what it is '
            'normally used to prove - is almost never attempted because '
            'nobody has shown it being done',
    skill='Conceding a claim and refusing the inference drawn from it, '
          'in writing, in one paragraph',
    evidence='Phase 4: the band 6.5 models in this series concede in '
             'one clause and then abandon the concession; the band 9 '
             'models concede in a sentence and answer in the next one',
    watch='Learners will write "I agree but" and then argue as though '
          'they disagreed. Ask them to underline what exactly they have '
          'granted',
    time='95 minutes, or 70 without the free grammar production'),
   lead=dict(
    title='Both of them are right',
    body='This is the last cycle of the unit and it is the one where '
         'the two halves of the argument meet. The historical record '
         'says the market absorbed every previous wave of automation. '
         'The same record says the people displaced in each wave '
         'mostly never recovered. In cycle 4 you read the evidence for '
         'the first; here you read the evidence for the second, and '
         'then you have to write something that is honest about both. '
         'That is harder than it sounds, and not because the facts are '
         'in doubt. The difficulty is that the two sentences are about '
         'different subjects - one about a market, which has no '
         'lifespan, and one about people, who have about forty working '
         'years - so neither can refute the other and an essay that '
         'treats them as rival claims will be arguing with itself. '
         'Most of what you have been taught in this unit comes '
         'together here: the reported voice from cycle 2, the share '
         'that is not a number from cycle 3, the aggregate that says '
         'nothing about an individual from cycle 4.',
    task='Answer these before you read. You wrote something similar at '
         'the start of cycle 4 - compare.',
    qs=['If a change makes a country richer and a hundred thousand '
        'people poorer, has it worked?',
        'Does it matter whether the hundred thousand can be identified '
        'in advance?',
        'What would a government owe those people, if anything?',
        'Has anything in this unit changed what you thought at the '
        'start of it? Which cycle?']),
   vocabwork=dict(
    title='The words for granting and refusing',
    body='The last vocabulary set of the unit is the one you will use '
         'most often in Writing and Speaking for the rest of the '
         'course. It is the language of agreeing with somebody and '
         'declining to go where they are going, which is a more useful '
         'thing to be able to do than either agreeing or disagreeing.',
    figure=dict(kind='field', teaches='vocabulary',
                centre='granting, and refusing the inference',
                sub='cycle 5 · and you will use all sixteen in Task 2',
                branches=[('granting it',
                           ['granted', 'admittedly', 'it is true that',
                            'I accept that']),
                          ('limiting it',
                           ['as far as it goes', 'in that narrow sense',
                            'on that reading', 'up to a point']),
                          ('refusing the step',
                           ['it does not follow', 'which proves nothing '
                            'about', 'that is a different claim',
                            'the inference is the problem']),
                          ('replacing it',
                           ['the real question is', 'what matters here',
                            'the useful question', 'I would put it '
                            'differently'])],
                note='Every phrase in the third branch does logical '
                     'work that but cannot do, which is why they are '
                     'worth learning whole rather than assembled. But '
                     'signals a contrast and says nothing about what '
                     'kind; it does not follow names the fault '
                     'precisely - that the step from evidence to '
                     'conclusion has failed - and leaves the evidence '
                     'standing. That is why the phrases in branch '
                     'three are hard to answer: your opponent cannot '
                     'reply with more evidence, because you have not '
                     'disputed any.'),
    figure2=dict(kind='family', teaches='word-formation',
                 sub='cycle 5 · five families for conceding well',
                 rows=[(('con-cede', 2), ('con-ces-sion', 2), '', '',
                        ''),
                       (('in-fer', 2), ('in-fe-rence', 1), '', '', ''),
                       (('qua-li-fy', 1), ('qua-li-fi-ca-tion', 4), '',
                        ('qua-li-fied', 1), ''),
                       (('ac-knowl-edge', 2), ('ac-knowl-edge-ment', 2),
                        '', '', ''),
                       (('dis-tin-guish', 2), ('dis-tinc-tion', 2), '',
                        ('dis-tinct', 2), ('dis-tinct-ly', 2))],
                 note='Note the stress move in infer and inference: the '
                      'verb takes it on the second syllable and the '
                      'noun on the first. Learners say in-FER-ence and '
                      'it is one of the few errors examiners comment '
                      'on.'),
    task='Complete each sentence with a word or phrase from this '
         'cycle.',
    items=[
     ('The step from the evidence to the conclusion is the '
      '____________.', None, 'inference'),
     ('A statement accepted only in a narrow sense is accepted '
      '____________ a point.', None, 'up to'),
     ('The noun from concede is ____________.', None, 'concession'),
     ('To separate two things that are being confused is to '
      '____________ them.', None, 'distinguish'),
     ('The phrase that grants the claim and refuses its use: it does '
      'not ____________.', None, 'follow'),
     ('The noun from acknowledge is ____________.',
      None, 'acknowledgement'),
     ('A claim accepted with a limit attached has been ____________.',
      None, 'qualified'),
     ('The phrase that replaces the question rather than answering it: '
      'the real ____________ is.', None, 'question')]),
   builder=dict(
    skill='Task 2: concede, then answer',
    qkind='skill',
    explain='The strongest single move available in Task 2 is to grant '
            'that a statement is true and deny what it is being used to '
            'prove, and almost no band 6 essay attempts it, because the '
            'only two moves most learners have are agreeing and '
            'disagreeing. It works in three sentences and the order is '
            'fixed. First, state the other side’s claim at its '
            'strongest, in your own words - not a caricature, the '
            'version its own supporters would sign. Second, grant it '
            'explicitly and say exactly how far: granted, and then the '
            'boundary. Third, refuse the inference and say why, which '
            'means naming the gap between what has been shown and what '
            'is being concluded. The commonest failure is to write I '
            'agree but and then argue as though you disagreed, which '
            'leaves the examiner unable to tell what you granted; the '
            'second commonest is to concede in the last sentence of a '
            'paragraph, so the reader finishes holding the other side’s '
            'point rather than yours.',
    worked=[
     'The statement: automation has always created more jobs than it '
     'destroyed, so fears about it are misplaced.',
     'State it at its strongest: “In every previous episode employment '
     'was higher a generation later, and this is the record rather '
     'than a forecast.”',
     'Grant it, with the boundary: “Granted - as a claim about '
     'national totals over a generation, that is simply true.”',
     'Refuse the inference, naming the gap: “It does not follow that '
     'fears are misplaced, because the people who bore the cost were '
     'not the people who collected the gain, and a worker displaced at '
     'thirty-five does not have a generation to wait.”',
     'Notice that nothing in the third sentence disputes the second. '
     'That is what makes it hard to answer.'],
    figure=dict(kind='langbank', teaches='useful-language',
                title='Useful language · granting and refusing',
                sub='cycle 5 · Task 2',
                groups=[('stating it at its strongest',
                         ['The case for X rests on',
                          'At its strongest the claim is that',
                          'Those who argue X point to',
                          'There is real force in'],
                         'At its strongest the claim is that every '
                         'previous wave ended in higher employment, '
                         'which is the record rather than a forecast.'),
                        ('granting it, with a boundary',
                         ['Granted, as far as X goes',
                          'I accept this, in that narrow sense',
                          'This is true on that reading',
                          'Up to a point, yes'],
                         'Granted - as a claim about national totals '
                         'over a generation, this is simply true.'),
                        ('refusing the inference',
                         ['It does not follow that',
                          'That establishes nothing about',
                          'The inference is where it fails',
                          'A different claim is being smuggled in'],
                         'It does not follow that the fears are '
                         'misplaced, because the gain and the cost fell '
                         'on different people.')]),
    task='For each claim, write the concession and the refusal - two '
         'sentences, using one phrase from each of the last two '
         'columns.',
    items=[
     ('Average wages rose, so workers are better off.',
      None, 'granted about the average, not about most workers'),
     ('The market always adjusts, so no action is needed.',
      None, 'granted about the market, not within a working life'),
     ('Retraining schemes have low completion rates, so they do not '
      'work.', None, 'granted about completion, not about effect'),
     ('Every previous panic was wrong, so this one is.',
      None, 'granted about the record, not about this case'),
     ('The share of routine work fell, so there is less routine work.',
      None, 'granted about the share, not about the number'),
     ('Firms will not fund training for competitors, so the state '
      'must.', None, 'granted about firms, the conclusion needs more')],
    note='The fifth is the one you met in cycle 3 and the second is '
         'the one you met in cycle 4. A concession is a reading skill '
         'before it is a writing one - you cannot grant a claim you '
         'have not understood at its strongest - which is why they '
         'come in that order in this book, and why four of these six '
         'are drawn from passages you have already read. Notice too '
         'that all six have the same shape underneath: a true '
         'statement about one thing, used to settle a question about '
         'a different thing. Once you can see that shape you will '
         'find it three times a day outside this room, and it is the '
         'reason it is the last thing the unit teaches.'),
   figures=[
    dict(kind='skeleton', teaches='text-structure',
         title='The last passage, in six boxes',
         sub='cycle 5 · and compare it with the one in cycle 4',
         paras=[('A', 'context', 'The two sentences, and both are '
                 'true'),
                ('B', 'claim', 'The disagreement is about subject, not '
                 'evidence'),
                ('C', 'evidence', 'Lancashire: forty years, one '
                 'lifetime'),
                ('D', 'concession', 'The aggregate case, at its '
                 'strongest'),
                ('E', 'counter-claim', 'And why it settles nothing '
                 'here'),
                ('F', 'consequence', 'What a government could '
                 'actually do')],
         note='D is the concession this whole cycle is about. Read it '
              'and ask how much it grants, because the answer is '
              '"everything the other side has evidence for".'),
    dict(kind='bridge', teaches='paraphrase',
         sub='cycle 5 · the matching-information set turns on these',
         left='THE QUESTION SAYS', right='THE PASSAGE WROTE',
         pairs=[('people who lost their jobs',
                 'the displaced', 'nominalisation'),
                ('it does not prove', 'establishes nothing about',
                 'synonym'),
                ('the country as a whole', 'the national total',
                 'reformulation'),
                ('they never recovered',
                 'the recovery arrived for their children',
                 'reformulation'),
                ('not a single episode was different',
                 'every one of the four', 'negation'),
                ('weavers, miners and clerks', 'displaced trades',
                 'hypernym')],
         note='The fourth pair is the one almost everybody misses and '
              'it is worth two marks. "They never recovered" and "the '
              'recovery arrived for their children" are the same '
              'claim; the passage states it as a fact about timing '
              'and the question states it as a fact about people, and '
              'a reader scanning for never will not find it. Cover '
              'the right-hand column and predict, because predicting '
              'is the only way to practise a move you cannot see.'),
   ],
   advice='In an agree-or-disagree question you are allowed to do '
          'neither, provided you say so and say why. What you are not '
          'allowed to do is leave the examiner guessing, and a '
          'conceding essay is the easiest kind to be unclear in, '
          'because every paragraph of it contains a sentence agreeing '
          'with the other side. So if you grant half the statement, '
          'write one sentence saying exactly which half, and put it '
          'where it can be found - at the end of the introduction, and '
          'again at the start of the paragraph that does the work. '
          'Examiners read fast and read for position: a thesis buried '
          'in the middle of a body paragraph is a thesis that was not '
          'found. And do not spend the conclusion restating the '
          'concession. The conclusion is the one place in the essay '
          'where only your own view should be standing.',
   debrief=dict(
    read=['The matching-information question about the weavers has two '
          'candidate paragraphs. One tells their story and one uses '
          'their story to make a point. The question asks which '
          'contains the argument.',
     'The sentence-endings task gives you two endings that are both '
     'grammatical and only one that is true of the passage. Read for '
     'sense, not for fit.',
     'The statement that the author thinks automation should be '
     'stopped is Not Given, and it is tempting because the author is '
     'plainly sympathetic to the weavers. Sympathy is not a position, '
     'and test 1 from unit 21 cycle 2 settles it in four seconds: does '
     'the writer take a view on whether automation should be stopped '
     'anywhere on the page? No. Then the statement is Not Given, '
     'however obvious its answer feels.',
     'Question 66 and question 69 are built from the same paragraph '
     'and only one of them is answered in it. The other is answered '
     'three paragraphs later, where the same point is made about a '
     'different trade. A matching-information set is not in passage '
     'order and the examiner uses that: two questions that look like '
     'a pair are usually a pair on purpose, and usually not from the '
     'same place.'],
    listen=['The speaker concedes at length and then says "even so", '
            'and the answers to two questions are after that phrase.',
     'In the plan-labelling task the speaker describes the room '
     'clockwise and then corrects one item. The correction is at the '
     'end, which is the standard shape: a plan or map task almost '
     'always moves in one direction and almost always doubles back '
     'once. Mark the direction on the plan before the recording '
     'starts, so that when the speaker says "actually, no" you '
     'already know which label is in play.',
     'Two of the options in the last question are things the speaker '
     'mentions and one is a thing she recommends. The stem asks what '
     'she advises, not what she describes, and the difference is one '
     'verb.',
     'The speaker uses the word "settled" twice, once about the '
     'market and once about a family. Only one of the two is the '
     'answer, and which one depends entirely on the subject of the '
     'question stem - which is the distinction this whole cycle has '
     'been about. A listening paper can test a reading skill, and '
     'this one does.']),
   outside='Granting what is true and refusing what is being smuggled '
           'in beside it is the most useful thing in this book. It is '
           'how you deal with a sales pitch, a political promise, a '
           'medical statistic and most arguments with people you '
           'respect.',
   recycled=['displaced', 'inference', 'concession', 'evidence',
             'transition', 'national total', 'labour market'],
   read=[
    dict(preview=True,
         heading='Two sentences that are both true',
         kind='Explainer box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='The last passage of the unit is built on one distinction, '
             'and the whole argument collapses into noise without it. '
             'Two hundred words.',
         paras=[
          'The labour market absorbed every previous wave of '
          'automation. Within a generation, employment was higher than '
          'before, wages were higher, and the work people did was less '
          'dangerous. This is not propaganda; it is what the records '
          'show, in four separate episodes across two centuries.',
          'The weavers of Lancashire did not benefit from any of it. '
          'They were displaced in their thirties, worked at lower pay '
          'for the rest of their lives, and the recovery arrived for '
          'their children. This is also what the records show, and it '
          'is recorded in the same books.',
          'Neither sentence refutes the other, because they are about '
          'different subjects. One is about a market, which is an '
          'abstraction with no lifespan. The other is about people, who '
          'have about forty working years and cannot wait out a '
          'twenty-year adjustment.',
          'Almost every public argument about automation consists of '
          'one side repeating the first paragraph and the other side '
          'repeating the second, each believing the other has not read '
          'the evidence. Both have. The disagreement is about which '
          'subject matters, and that is not a question evidence can '
          'settle.'],
         items=[
          ('Within a ____________, employment was higher than before '
           'in every previous episode.', None, 'generation',
           'Paragraph 1, which also says this is what the records '
           'show.'),
          ('The weavers were displaced in their thirties and the '
           'recovery arrived for their ____________.',
           None, 'children',
           'Paragraph 2, recorded in the same books as paragraph 1.'),
          ('The two sentences do not conflict because they are about '
           'different ____________.', None, 'subjects',
           'Paragraph 3: a market has no lifespan and people have '
           'forty working years.')]),
    dict(heading='The aggregate that hides the person',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given, sentence completion and short answer',
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
          (
           'Which paragraph explains why averaging destroys '
           'information?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1,
           'Half gaining and half losing reports the same average as '
           'nobody changing.',
           {0: 'Paragraph 2 gives the standard finding and the '
               'operator.', 2: 'Paragraph 4 describes adjustment through population '
               'turnover.', 3: 'Paragraph 5 is about geography and local losses.'}),
          (
           'Which paragraph describes adjustment through population '
           'turnover?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           1,
           'Adjustment at the level of a country and bereavement at '
           'the level of a town.',
           {0: 'Paragraph 3 explains why averaging destroys '
               'information.', 2: 'Paragraph 5 is about geography and local losses.', 3: 'Paragraph 6 insists the aggregate findings are not '
               'wrong.'}),
          (
           'Which paragraph argues that the two sides often do not '
           'disagree?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'],
           2, 'Both report accurately about different objects.',
           {0: 'Paragraph 5 is about geography and local losses.', 1: 'Paragraph 6 insists the aggregate findings are not '
               'wrong.', 3: 'Paragraph 8 is about unstated weighting.'}),
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
         task='A recorded exchange · multiple choice', band='l4', qtype='Questions 71-76',
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
           ['Models are wrong', 'Aggregate employment recovers', 'Policy should change', 'Data is poor'],
           1, 'He says he has never disputed it.',
           {0: 'Neither of them says the models are simply wrong.', 2: 'Policy is where they disagree, not where they agree.', 3: 'Data quality is not what he concedes at the start.'}),
          ('In his data, the dominant mechanism is that',
           ['workers move between sectors', 'the displaced cohort never recovers', 'wages fall everywhere', 'firms retrain staff'],
           1, 'And the next cohort enters the new jobs directly.',
           {0: 'Movement between sectors is what the models represent.', 2: 'He does not claim wages fall everywhere.', 3: 'Firm retraining is not part of his finding.'}),
          ('What does Oyelaran-Smit concede about calibration?',
           ['It is never done', 'It fits both mechanisms by construction', 'It uses the wrong data', 'It is too slow'],
           1, 'Because the parameter is calibrated to the aggregate.',
           {0: 'She says it is done, and done against the aggregate.', 2: 'The data is not what she says is at fault.', 3: 'Speed of calibration is not the issue she raises.'}),
          ('What does she then take back?',
           ['Her concession', 'That the policy conclusion is obvious', 'The aggregate finding', 'The model'],
           1,
           'Compensating the displaced and speeding the transition '
           'pull in opposite directions.',
           {0: 'She keeps the concession and adds a qualification.', 2: 'Both of them accept the aggregate finding.', 3: 'She defends the model rather than withdrawing it.'}),
          ('What do they agree to publish in future papers?',
           ['Larger samples', 'How long adjustment takes, by cohort', 'Their disagreements', 'Regional wages'],
           1, 'With Barczak adding geography to the proposal.',
           {0: 'Sample size is not what they agree to publish.', 2: 'They publish timings, not an account of their '
               'argument.', 3: 'Geography is added to the timings, not published '
               'alone.'}),
          ('How does Oyelaran-Smit describe his addition?',
           ['A small point', 'A larger concession than hers', 'Unnecessary', 'Already standard'],
           1, 'She says he has made it look small.',
           {0: 'She says he has made a large concession look small.', 2: 'He calls the fix cheap, not unnecessary.', 3: 'He says the opposite: the word never appears.'})]),
    dict(heading='A plan of the new training centre',
         part='Part 2', task='Plan labelling and matching · plan labelling',
         band='l2',
         qtype='Questions 77-81',
         banklabel='Positions on the plan',
         bank=['A', 'B', 'C', 'D', 'E', 'F', 'G'],
         figure=dict(kind='map',
                     teaches='plan',
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
    part='Part 2 into Part 3', focus='Who bears the cost of change',
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
    intro=('Take the card first. One minute to make notes, then one to two '
           'minutes of talk, and the bullets are the order to take them '
           'in. Then the discussion: the hardest turn in the unit. Try to '
           'name the unit a claim is about before you agree or disagree '
           'with it.'),
    cue=(('Describe a place you know that lost an industry or a large '
          'employer.'),
         ['where it is',
          'what the employer was',
          'what happened to the place',
          'and explain what is there now']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Did people move away?',
        'What would have helped most?',
        'Who should pay when an industry closes?',
        'Is it reasonable to ask people to move for work?',
        'Do national statistics describe ordinary lives?',
        ('How should a government help a town that loses its main '
         'employer?')],
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
    ref='L10',
    context=[
     'From the passage you have just read:',
     'Granted, and without qualification: in each of the four episodes '
     'the number of people in work was higher a generation later than '
     'it had been before. That is the record, not a forecast, and '
     'anyone arguing about automation who has not absorbed it is not '
     'yet in the conversation. It does not follow that the displaced '
     'were made whole, and in three of the four episodes we can show '
     'that they were not.'],
    notice=[
     ('The writer grants something and then refuses something. Copy '
      'out the three words that begin each move.',
      'Granted, and without; It does not follow'),
     ('Why does the writer grant it "without qualification" rather '
      'than hedging?',
      'because the concession is stronger if it is complete, and the '
      'refusal is about the inference rather than the fact')],
    noticetask='Answer both from the paragraph above, which you met '
               'earlier in this cycle.',
    contrast='You met concession in unit 21, cycle 5, where the shape '
             'was although X, Y. This is the harder and more useful '
             'version: granting a claim completely and then refusing '
             'what is inferred from it. The difference is what gets '
             'denied. Although the gains fade, the outcomes do not '
             'disputes a fact. Granted, employment rose; it does not '
             'follow that the weavers recovered disputes a step. '
             'Disputing a step is almost always the stronger move, '
             'because your opponent has no evidence to answer it with - '
             'the evidence was never the point.',
    task2='Rewrite each so that the concession is complete and the '
          'refusal is of the inference, not the fact.',
    items2=[
     ('Employment rose but the weavers suffered. ____________',
      None, 'Granted, employment rose; it does not follow that the '
      'weavers recovered.'),
     ('Average pay went up, although not for everyone. ____________',
      None, 'Granted, average pay rose; that establishes nothing about '
      'the median worker.'),
     ('Correct: I agree with this statement but I disagree with it. '
      '____________',
      None, 'I accept the claim and reject the conclusion drawn from '
      'it'),
     ('The market adjusted, but slowly. ____________',
      None, 'Granted, the market adjusted; it did not adjust within a '
      'working life.')],
    task3='Now do it in full. Take the statement "automation has always '
          'created more jobs than it destroyed, so present fears are '
          'misplaced", state it at its strongest, grant it, and refuse '
          'the inference. Eighty to a hundred words, three sentences or '
          'four.',
    items3=10,
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
