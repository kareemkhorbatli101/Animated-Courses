# -*- coding: utf-8 -*-
"""Unit 23 - Public Health. IELTS Volume 3, band 6.0."""

_CASES = dict(kind='line', teaches='data', title='Reported cases and hospital admissions',
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

 field='health',
 unitmap=dict(kind='unitmap', teaches='navigation', n=23,
              theme='Public Health',
              rows=[('A vaccination programme',
                     'Matching features: who said it, not what was said',
                     'Matching features · multiple choice · sentence '
                     'completion · Part 1'),
                    ('Advice people follow and ignore',
                     'Yes/No/Not Given: the writer’s view against a '
                     'reported one',
                     'Yes/No/Not Given · matching features · Part 2'),
                    ('Counting a disease',
                     'Task 1: two lines that peak at different times',
                     'True/False/Not Given · matching information · '
                     'Task 1 Academic'),
                    ('Why an outbreak ends',
                     'Yes/No/Not Given at length: the scope words',
                     'Matching headings · Yes/No/Not Given · Part 4'),
                    ('One number for a population that is not one',
                     'Task 2: the conclusion the essay has earned',
                     'Matching information · Yes/No/Not Given · Task 2')],
              note='Nine of the words in cycle 5 were first met in unit '
                   '21 cycle 5, where the subject was schools rather '
                   'than epidemics: a trial, a control group and an '
                   'objection have the same shape whatever they are '
                   'about, which is the reason this unit sits here.'),
 sceneintro='Eight things from a vaccination clinic, and the words for '
            'them. Seven are used in cycle 1 and four come back in cycle '
            '3. As in units 21 and 22, two minutes here saves ten later.',
 scene=dict(kind='scene', teaches='activate',
            title='Unit 23 · at the clinic',
            instr='Write the number of each thing beside its word. Two '
                  'words in the bank are not in the picture.',
            cells=[('envelope', 'invitation letter'),
                   ('laptop', 'booking reference'),
                   ('people', 'waiting area'),
                   ('cross_med', 'nasal spray'),
                   ('clock', 'appointment slot'),
                   ('note', 'consent form'),
                   ('chart', 'uptake board'),
                   ('brief', 'eligibility list')],
            bank=['invitation letter', 'booking reference',
                  'waiting area', 'nasal spray', 'appointment slot',
                  'consent form', 'uptake board', 'eligibility list',
                  'booster', 'sharps bin'],
            answers=['invitation letter', 'booking reference',
                     'waiting area', 'nasal spray', 'appointment slot',
                     'consent form', 'uptake board', 'eligibility list'],
            note='Answers: 1 invitation letter · 2 booking reference · '
                 '3 waiting area · 4 nasal spray · 5 appointment slot · '
                 '6 consent form · 7 uptake board · 8 eligibility list. '
                 'Not in the picture: booster, sharps bin.'),
 puzzle=dict(kind='puzzle', teaches='curiosity',
             title='Who actually turns up?',
             question='One of these groups was offered the vaccine on '
                      'exactly the same terms as the others and took it '
                      'up at half the rate. Which, and what would you '
                      'need to know before guessing why?',
             bars=[('Over 75s', 88), ('65 to 74', 81), ('At-risk 16-64', 43),
                   ('Pregnant', 54), ('Front-line staff', 62)],
             mark=2, ylab='% of those eligible who were vaccinated',
             note='Cycle 2 answers this, and the answer is not the one '
                  'most people guess. Write your guess in the margin '
                  'now; a guess you have committed to is read quite '
                  'differently from a question you were handed.'),
 cycles=[
  dict(
   sub='A vaccination programme',
   step=1,
   notes=dict(
    serves='Matching features and multiple choice, Reading Parts 1-2; '
           'note completion in Listening Part 1',
    because='Matching features is answered at band 6 by matching a '
            'topic to a name, and in a health text every source '
            'mentions the same three topics - safety, access and cost - '
            'so topic matching is guaranteed to fail',
    skill='Attributing a view to the person who holds it, not to the '
          'person who mentions the subject',
    evidence='Unit 22 cycle 2 taught the writer against the reported '
             'voice inside one text; this is the same problem across '
             'four separate sources, which is the form the exam '
             'actually uses',
    watch='Learners will attribute the strongest safety claim to the '
          'clinician, because clinicians talk about safety. It belongs '
          'to the parent in text D. Expect it',
    time='75 minutes, or 55 without the free grammar production'),
   lead=dict(
    title='Why do people not come?',
    body='A vaccination programme is the easiest thing in medicine to '
         'design and the hardest to deliver, because every part of it '
         'except the last is a logistics problem and the last part is a '
         'person deciding. The chart at the front of this unit shows '
         'five groups offered exactly the same thing on exactly the '
         'same terms, with uptake running from eighty-eight per cent to '
         'forty-three. Nothing in the medicine explains that gap. '
         'Something in the letter, the appointment, the waiting room or '
         'the week might.',
    task='Answer these from your own experience or your family’s. '
         'Three or four sentences each.',
    qs=['Have you ever been invited to a health appointment and not '
        'gone? What actually stopped you?',
        'Who do you trust about a medicine - a doctor, a government, a '
        'friend who had it, a search result?',
        'Should a health service chase people who do not reply, or is '
        'that intrusive?',
        'If uptake in one group is half that in another, where would '
        'you look first for the reason?']),
   vocabwork=dict(
    title='The language of being offered something by an institution',
    body='Sixteen words from the register of a health service writing '
         'to the public. It is the same register you met in unit 21 '
         'cycle 1, where a university was writing to applicants, and '
         'nine of these words are the same words - eligible, criteria, '
         'suspend, confirm. An institution deciding who may have '
         'something writes in one language whatever the something is, '
         'which is why this vocabulary is worth more than its topic.',
    figure=dict(kind='field', teaches='vocabulary',
                centre='being offered a vaccination',
                sub='cycle 1 · and compare it with unit 21 cycle 1',
                branches=[('who may have it',
                           ['eligible', 'at-risk group', 'cohort',
                            'criteria']),
                          ('arranging it',
                           ['invitation', 'booking reference',
                            'appointment slot', 'rebook']),
                          ('the thing itself',
                           ['dose', 'booster', 'nasal spray',
                            'batch']),
                          ('when it stops',
                           ['suspend', 'withdraw', 'contraindicated',
                            'defer'])],
                note='Defer and suspend are the pair that catches '
                     'learners: a person defers an appointment, a '
                     'programme is suspended. Neither word takes the '
                     'other’s subject.'),
    figure2=dict(kind='family', teaches='word-formation',
                 sub='cycle 1 · and two of these are in unit 21',
                 rows=[('', ('e-li-gi-bi-li-ty', 4), '',
                        ('e-li-gi-ble', 1), ''),
                       (('vac-ci-nate', 1), ('vac-ci-na-tion', 3), '',
                        ('vac-ci-na-ted', 1), ''),
                       (('im-mu-nise', 1), ('im-mu-ni-ty', 2), '',
                        ('im-mune', 2), ''),
                       (('pro-tect', 2), ('pro-tec-tion', 2), '',
                        ('pro-tec-tive', 2), ''),
                       (('no-ti-fy', 1), ('no-ti-fi-ca-tion', 4), '',
                        '', '')],
                 note='Vaccine, vaccinate and vaccination are three '
                      'different words and a gap will want one of them '
                      'exactly. The vaccine is the substance, '
                      'vaccinate is what you do with it, and the '
                      'vaccination is the event.'),
    task='Complete each sentence with a word from the map or the table, '
         'in the right form.',
    items=[
     ('People who meet the criteria for the programme are '
      '____________.', None, 'eligible'),
     ('The number on your letter that identifies the appointment is '
      'the booking ____________.', None, 'reference'),
     ('To move your own appointment to a later date is to '
      '____________ it.', None, 'defer'),
     ('A second dose given months later is a ____________.',
      None, 'booster'),
     ('The noun from immunise is ____________.', None, 'immunity'),
     ('The programme was ____________ while the batch was checked.',
      None, 'suspended'),
     ('The event itself, not the substance, is the ____________.',
      None, 'vaccination'),
     ('A reason the vaccine must not be given to someone is that it '
      'is ____________.', None, 'contraindicated')]),
   builder=dict(
    skill='Matching features: who said it, not what it was about',
    qkind='skill',
    explain='A matching-features set gives four or five sources and a '
            'list of statements, and asks who holds which view. In a '
            'health text every source will mention safety, every source '
            'will mention access, and most will mention cost, because '
            'the examiner has arranged it that way: a set where each '
            'source owned a separate topic would be a comprehension '
            'test for people who can spot nouns. What distinguishes '
            'sources is position, not subject. So read each source once '
            'and write two things beside it - what it holds, and how '
            'firmly - and then read the statements. Two further traps '
            'are worth naming now. The first is the reported voice you '
            'met in unit 22: a source may quote somebody in order to '
            'disagree, and the strongest sentence on the page often '
            'belongs to the person about to be answered. The second is '
            'the source that mentions a thing without taking a view on '
            'it at all, which matches no statement and is there to '
            'absorb a guess.',
    worked=[
     'TEXT B, a clinician: “Parents ask me whether it is safe. It is, '
     'and the data on that is as good as data gets. What they are '
     'really asking is whether I would give it to my own child.”',
     'What B holds: safety is settled; the real obstacle is trust.',
     'How firmly: very - as good as data gets.',
     'Now a statement reading "the evidence on safety is conclusive" '
     'matches B. But a statement reading "parents are worried about '
     'safety" matches nobody: B reports that parents ask, and reporting '
     'a worry is not holding one.'],
    figure=dict(kind='matrix', teaches='comparison',
                title='Four sources, three questions',
                sub='cycle 1 · build this before you read the '
                    'statements',
                cols=['Text A', 'Text B', 'Text C', 'Text D'],
                rows=['What does it hold?',
                      'How firmly?',
                      'Whose voice is the strongest sentence?',
                      'Which topic does it mention but take no view '
                      'on?'],
                cells=[['access is the obstacle', 'safety is settled',
                        '', ''],
                       ['', 'very firmly', 'cautiously', ''],
                       ['the writer', 'the writer', '', 'a quoted '
                        'neighbour'],
                       ['', 'cost', '', '']],
                note='Seven blanks. A matching-features set is almost '
                     'always answerable from a grid like this and '
                     'almost never from memory of four texts.'),
    task='For each extract write WHAT IT HOLDS in four words, or NO '
         'VIEW if it only mentions the subject.',
    items=[
     ('“The safety data is as good as data gets.”',
      None, 'safety is settled'),
     ('“Parents often ask about side effects.”', None, 'no view'),
     ('“The clinics close at four, which is the whole problem.”',
      None, 'access is the obstacle'),
     ('“Some say the campaign was patronising. They have a point.”',
      None, 'the campaign was patronising'),
     ('“Cost has been raised, as it always is.”', None, 'no view'),
     ('“I would not call it hesitancy. I would call it a Tuesday '
      'afternoon with no bus.”', None, 'access, not hesitancy')],
    note='Two of the six hold no view at all and both of them name a '
         'topic the statements will also name. That pairing is '
         'deliberate and it is where the set loses most of its marks.'),
   figures=[
    dict(kind='bridge', teaches='paraphrase',
         sub='cycle 1 · six moves the questions make',
         pairs=[('people who may have it', 'those eligible',
                 'nominalisation'),
                ('the clinic stopped giving it',
                 'the programme was suspended', 'voice'),
                ('a second dose later', 'a booster', 'hypernym'),
                ('not many came', 'uptake was low', 'negation'),
                ('tell people', 'notify patients', 'synonym'),
                ('move the appointment', 'rebook', 'reformulation')],
         note='The fourth is the one to practise: a negative in the '
              'question and a positive in the text, which is how '
              'roughly a fifth of all Reading gaps are built.'),
   ],
   advice='In matching features read the instruction line twice. A '
          'letter may be used more than once, or it may not, and the '
          'paper says which - the two instructions produce completely '
          'different strategies, because in the first kind you cannot '
          'eliminate as you go. Then read each source once and annotate '
          'it. Hunting a statement through four texts is four times the '
          'work of reading four texts once.',
   debrief=dict(
    read=['The strongest safety sentence belongs to the parent in text '
          'D, who is quoting a leaflet in order to disagree with it. '
          'The reporting phrase is six words earlier.',
     'Two sources mention cost and neither takes a view on it. The '
     'statement about cost therefore matches nothing, and the '
     'instruction told you that some statements would.',
     'Question 6 and question 9 look like a pair about access. One is '
     'about the clinic’s hours and one is about transport, and only '
     'one source distinguishes them.'],
    listen=['The caller gives a booking reference, is asked to repeat '
            'it, and changes one digit. The second version is the '
            'answer, as it always is.',
     'Question 12 asks which group the caller belongs to. Three group '
     'names are said and two of them are other people’s.']),
   outside='Keeping track of who said a thing, as against who merely '
           'mentioned it, is most of what reading the news well '
           'consists of. It is also how you avoid repeating something '
           'at a dinner table and discovering it was a quotation the '
           'writer had been about to demolish.',
   recycled=['eligible', 'criteria', 'cohort', 'suspend', 'evidence'],
   read=[
    dict(preview=True,
         heading='Three words from a vaccination letter',
         kind='Glossary box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='Two hundred words before four hundred. These three words '
             'are in every letter in this cycle and in most of the '
             'Listening Part 1 you are about to hear.',
         paras=[
          'An eligible person is one who meets the published criteria '
          'for a programme. Eligibility is never a judgement about an '
          'individual; it is a rule applied to a category - an age, a '
          'condition, a job. You met the same word in unit 21, where a '
          'university was deciding who might apply, and it means '
          'exactly what it meant there.',
          'A cohort is a group defined by something they share, usually '
          'when they were born or when they were treated. Health '
          'services invite by cohort because it is the only practical '
          'way to work through a population, and it is why a letter '
          'arrives in March for one person and in June for their '
          'neighbour.',
          'Uptake is the share of those eligible who actually take what '
          'is offered. It is always a proportion and never a number, '
          'which matters: uptake of forty-three per cent in a small '
          'group may be fewer people than uptake of eighty-eight per '
          'cent in a large one, and a headline will usually not say '
          'which.',
          'The three words appear together constantly, and the usual '
          'confusion is to read low uptake as refusal. It may be. It '
          'may equally be a letter sent to an old address.'],
         items=[
          ('A person who meets the published criteria is '
           '____________.', None, 'eligible',
           'Paragraph 1: it is a rule applied to a category, not a '
           'judgement about a person.'),
          ('A group defined by when they were born is a '
           '____________.', None, 'cohort',
           'Paragraph 2, which also explains why letters arrive in '
           'different months.'),
          ('The share of eligible people who accept is the '
           '____________.', None, 'uptake',
           'Paragraph 3, which insists it is a proportion and never a '
           'number.')]),
    dict(heading='Autumn vaccination: who is eligible',
         kind='Public notice', task='Multiple choice, matching features and sentence completion',
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
           ['50 and over', '60 and over', '65 and over', '70 and over'],
           2,
           'Paragraph 1, alongside those with a listed condition and '
           'pregnant women.',
           {0: 'Lower than the age paragraph 1 gives for free '
               'vaccination.', 1: 'Still below the threshold the first paragraph sets.', 3: 'Higher than the age at which the offer begins.'}),
          ('Which group is vaccinated through their employer?',
           ['Carers', 'Pregnant women', 'Front-line health and care staff', 'Children'],
           2,
           'Paragraph 3, though they may book here if no employer '
           'scheme exists.',
           {0: 'Carers book through this programme, not an employer.', 1: 'Pregnant women are eligible at any stage, through this '
               'programme.', 3: 'Children are offered a spray through this programme.'}),
          ('Children aged 2 to 11 are normally offered',
           ['an injection', 'a nasal spray', 'nothing', 'a choice'], 1,
           'Paragraph 4, with an injection available on request.',
           {0: 'An injection is available on request, but is not the '
               'default.', 2: 'This age group is offered the spray, not nothing.', 3: 'The spray is offered first; a choice follows only on '
               'request.'}),
          ('You are eligible if you are the main ____________ for an older or '
           'disabled person.', None, 'carer',
           'Paragraph 2, one of the two least-used routes.'),
          ('Staff booking here should bring proof of ____________.', None,
           'employment',
           'Paragraph 3, where no employer scheme is available to them.')]),
    dict(heading='How to book and what to bring',
         kind='Procedure notice', task='Sentence completion',
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
         task='A call to a vaccination booking line · note completion', band='l1',
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
         part='Part 2', task='A talk to public health trainees · sentence completion and matching', band='l2',
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
          (
           'The speaker says people who ignore advice can state it '
           '____________.', None, 'accurately',
           'Campaigns assuming the message has not arrived solve a '
           'non-existent problem.'),
          (
           'Her second point is that advice ____________ with other '
           'advice.', None, 'competes',
           'Issued from different offices and received from one '
           'authority.'),
          ('Which advice is most often ignored?',
           ['The most expensive', 'The hardest to follow', 'The easiest to follow', 'The most recent'],
           2, 'Which she says is the thing she finds hardest to teach.',
           {0: 'Cost is not one of the factors she discusses.', 1: 'She says the opposite, which is what she finds hard to '
               'teach.', 3: 'How recent the advice is does not predict being '
               'ignored.'}),
          (
           'What predicts following advice is having seen the '
           '____________.', None, 'consequence',
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
    ref='L15',
    context=[
     'From the letter in this cycle:',
     'I am writing about the appointment on the fourteenth, which I was '
     'unfortunately unable to attend. A delay on the line prevented me '
     'from reaching the clinic before it closed, and the booking system '
     'would not let me rebook within the same week. I should be '
     'grateful if you could tell me whether a later slot can be held '
     'open for me.'],
    notice=[
     ('The writer gives a reason without saying "because I was late". '
      'Copy out the structure used instead.',
      'A delay on the line prevented me from reaching the clinic'),
     ('What is the subject of the verb prevented - a person or a '
      'thing?', 'a thing, the delay')],
    noticetask='Answer both from the letter above. The second is the '
               'point of the whole grammar slot.',
    contrast='Compare "I could not come because I was stuck on a '
             'train" with "a delay on the line prevented me from '
             'attending". The information is identical and the register '
             'is not. Putting a thing rather than a person in the '
             'subject position makes the sentence impersonal, which in '
             'a formal letter reads as businesslike rather than cold, '
             'and it is what a General Training Task 1 is marked on '
             'more than on vocabulary. Note the form: prevent somebody '
             'FROM doing, with the -ing and not the infinitive. '
             '"Prevented me to attend" is the commonest error at this '
             'band and it is immediately visible.',
    task2='Rewrite each with a thing as the subject, using the verb '
          'given.',
    items2=[
     ('I was ill so I did not come. (prevent) ____________',
      None, 'Illness prevented me from attending.'),
     ('There were no buses so she missed it. (keep) ____________',
      None, 'The lack of buses kept her from attending.'),
     ('Correct: the strike prevented us to travel. ____________',
      None, 'the strike prevented us from travelling'),
     ('The clinic closed early so I could not be seen. (mean) '
      '____________',
      None, 'The early closure meant that I could not be seen.')],
    task3='Now write the paragraph. You missed a health appointment for '
          'a reason that was not your fault, and you want another. '
          'Write the opening of the letter and your request, about '
          'seventy words, putting a thing rather than yourself in the '
          'subject of the reason.',
    items3=8,
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
   notes=dict(
    serves='Yes/No/Not Given and matching features, Reading Part 2; '
           'multiple choice in Listening Part 2',
    because='Unit 21 taught the three tests for Yes/No/Not Given; the '
            'test that remains hard is test 1, because a writer who '
            'reports a view at length looks exactly like a writer who '
            'holds one, and the paragraph is the same length either '
            'way',
    skill='Deciding whether a view on the page belongs to the writer '
          'before deciding whether you agree with it',
    evidence='Unit 22 cycle 2 found the reporting phrase inside one '
             'text; this cycle asks the same question of a 198-word '
             'argument that changes voice three times',
    watch='Learners will mark statement 22 YES because the passage '
          'contains the sentence. The sentence has "it is often said" '
          'four words before it. Expect it',
    time='80 minutes, or 60 without the free grammar production'),
   lead=dict(
    title='The label decides the remedy',
    body='When uptake is low, somebody has to say why, and the name '
         'they choose decides what gets done. Call it hesitancy and you '
         'print a leaflet. Call it access and you open on a Saturday. '
         'Call it distrust and you spend five years and may still fail. '
         'The argument in this cycle is not about the facts, which '
         'nobody disputes; it is about which name the facts deserve, '
         'and that is a harder argument to follow because both sides '
         'are quoting the same figures.',
    task='Answer these before you read, and look again at the guess you '
         'wrote on the puzzle chart at the front of the unit.',
    qs=['Which of the three names would you have chosen for the gap on '
        'the chart, before reading anything?',
        'What would change your mind - what evidence would you ask '
        'for?',
        'Is it insulting to be described as hesitant when you simply '
        'did not get the letter?',
        'Who should decide what the problem is called - clinicians, '
        'statisticians, or the people in the group?']),
   vocabwork=dict(
    title='The vocabulary of a campaign and its critics',
    body='A public health campaign is argued about in a narrow set of '
         'words, and most of them are the same ones you used about '
         'funding in unit 22 cycle 2 - a scheme, a measure, a '
         'reversal. What is new here is the vocabulary of behaviour: '
         'what people do by default, what an instrument is, and why '
         'uptake is not the same as consent.',
    figure=dict(kind='collocation', teaches='collocation',
                node='uptake', sub='cycle 2',
                groups=[('verb + uptake',
                         ['increase uptake', 'drive uptake',
                          'uptake fell', 'uptake plateaued',
                          'measure uptake']),
                        ('adjective + uptake',
                         ['low uptake', 'patchy uptake',
                          'high uptake', 'declining uptake']),
                        ('uptake + preposition',
                         ['uptake among the over-75s',
                          'uptake in deprived areas',
                          'uptake of the booster'])],
                note='Uptake is uncountable and has no plural. '
                     '"Uptakes were low in three areas" is wrong and '
                     'common; write uptake was low in three areas.'),
    figure2=dict(kind='cline', teaches='scale',
                 title='How far does the writer commit?',
                 sub='cycle 2 · and compare the cline in unit 21 cycle '
                     '2',
                 left='merely reporting it', right='asserting it',
                 items=[('it is often said that', 0.03),
                        ('some have argued that', 0.15),
                        ('the claim is that', 0.28),
                        ('there is something in the view that', 0.45),
                        ('the evidence supports', 0.66),
                        ('it is clear that', 0.82),
                        ('it is simply false that', 0.97)],
                 note='The first three hand the sentence to somebody '
                      'else and the last three keep it. The fourth is '
                      'the one that does both, and it is the hardest '
                      'to mark.'),
    task='Complete each with a collocation or a phrase from the cline.',
    items=[
     ('A campaign that raises the share taking the vaccine is said to '
      '____________ uptake.', None, 'drive'),
     ('Uneven across areas: ____________ uptake.', None, 'patchy'),
     ('Correct the error: uptakes were low in three areas. '
      '____________', None, 'uptake was'),
     ('The preposition before a group: uptake ____________ the '
      'over-75s.', None, 'among'),
     ('The phrase that hands a sentence to an unnamed somebody: it is '
      'often ____________ that.', None, 'said'),
     ('The phrase that half commits: there is something in the '
      '____________ that.', None, 'view'),
     ('Uptake stopped rising without falling: it ____________.',
      None, 'plateaued'),
     ('The strongest rejection on the cline: it is simply '
      '____________ that.', None, 'false')]),
   builder=dict(
    skill='Yes/No/Not Given: whose view is on the page?',
    qkind='skill',
    explain='Yes/No/Not Given asks what the writer thinks, and in a '
            'passage that argues with other people the writer’s own '
            'view may occupy less than half the words. You already have '
            'the three tests from unit 21, and the one that fails is '
            'the first: does the writer take a position on this at all? '
            'A learner reads a confident sentence, finds it on the '
            'page, and marks YES, without noticing that the sentence '
            'was introduced four words earlier by it is often said. So '
            'add one step before test 1. Go to the sentence, then read '
            'backwards to the start of its paragraph looking for a '
            'handover phrase - it is often said, some argue, critics '
            'claim, on this view. If you find one, the sentence belongs '
            'to somebody else until the writer takes it back, and the '
            'taking back is usually explicit: and they are right, or so '
            'it proves. If the writer never takes it back, a statement '
            'repeating that sentence is NOT GIVEN as a statement about '
            'the writer, however prominently it sits on the page.',
    worked=[
     'The passage: “It is often said that low uptake reflects distrust '
     'of government. Distrust is real and I do not wish to minimise '
     'it. But the quarter in which uptake moved most was the quarter '
     'in which the clinics opened on Saturdays.”',
     'STATEMENT: low uptake is mainly caused by distrust of '
     'government.',
     'Find the sentence: it is on the page, almost word for word.',
     'Read backwards: it is often said. Handed over.',
     'Does the writer take it back? No - the writer grants that '
     'distrust is real, which is not the same claim, and then gives '
     'evidence against the stronger one. So the answer is NO, and a '
     'learner who marked YES was reading somebody else’s sentence.'],
    figure=dict(kind='signpost', teaches='signposting',
                title='Where this passage changes voice',
                sub='cycle 2 · the handovers and the takings-back',
                markers=[('It is often said', 'handed to somebody '
                          'else'),
                         ('Distrust is real', 'the writer, conceding'),
                         ('But the quarter', 'the writer, answering'),
                         ('Critics reply', 'handed over again'),
                         ('and they are right', 'taken back, endorsed'),
                         ('What follows is', 'the writer, concluding')],
                note='Four changes of voice in one 198-word passage, '
                     'and five of the eight questions are answered '
                     'between one marker and the next.'),
    task='For each extract write WRITER, REPORTED or TAKEN BACK, and '
         'the words that told you.',
    items=[
     ('“It is often said that leaflets work. They do not.”',
      None, 'reported, it is often said'),
     ('“Critics say the sample was small, and they are right.”',
      None, 'taken back, and they are right'),
     ('“Uptake rose nine points that quarter.”',
      None, 'writer, no handover'),
     ('“On this view the problem is cultural.”',
      None, 'reported, on this view'),
     ('“Distrust is real and I do not wish to minimise it.”',
      None, 'writer, I do not wish'),
     ('“Some have argued that the label is insulting. It is.”',
      None, 'taken back, It is')],
    note='Two of the six are taken back and both of them are taken '
         'back in three words or fewer. That brevity is the point: a '
         'writer who endorses a reported view rarely announces it at '
         'length, so you have to be reading for it.'),
   figures=[
    dict(kind='bridge', teaches='paraphrase',
         sub='cycle 2 · the Yes/No/Not Given set turns on these',
         left='THE STATEMENT SAYS', right='THE WRITER WROTE',
         pairs=[('people do not trust the government',
                 'distrust of the authorities', 'nominalisation'),
                ('leaflets are a waste of money',
                 'printed material has not moved the figure',
                 'reformulation'),
                ('opening longer helped', 'extended hours drove uptake',
                 'synonym'),
                ('it is not mainly cultural',
                 'the cultural explanation is the smallest part',
                 'negation'),
                ('the writer is unsure', 'on the present evidence',
                 'hypernym'),
                ('nobody has tested it', 'no trial has been run',
                 'voice')],
         note='The fifth is the one that decides a Not Given: a hedge '
              'is not a refusal to take a position, it is a position '
              'taken carefully.'),
   ],
   advice='In Yes/No/Not Given, go to the sentence and then read '
          'backwards to the top of the paragraph before you answer. '
          'The handover phrase is almost never in the sentence itself '
          '- that would make the question free - and it is almost '
          'always within four lines above it. Three of the eight marks '
          'in a typical set turn on this and they are the cheapest '
          'three in the paper, because recovering them needs no new '
          'vocabulary at all.',
   debrief=dict(
    read=['Statement 22 is on the page almost word for word and is '
          'introduced by it is often said. The writer spends the rest '
          'of the paragraph answering it.',
     'Statement 25 is true, is agreed by everybody, and the writer '
     'never addresses it. Test 1 settles it, and only test 1 can.',
     'In the matching-features set two sources are quoted inside a '
     'third. Attribute the quotation to the person quoted, not to the '
     'person quoting - which is what unit 22 cycle 2 was for.'],
    listen=['Sister Doyle concedes at length and then says "but that '
            'is the smallest part". Everything before that phrase is '
            'politeness and two answers come after it.',
     'Question 31 offers an option built from a number she gives about '
     'a different quarter.']),
   outside='Almost every public argument you will ever read is '
           'conducted partly in other people’s voices. Knowing where '
           'the handover was is the difference between understanding a '
           'piece of writing and being moved by it, and the technique '
           'takes four seconds a paragraph.',
   recycled=['uptake', 'eligible', 'evidence', 'cohort', 'measure'],
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
           'She names exhaustion as a reason nobody plans for.',
           {1: 'Oluwafemi wants to know which advice matters most.', 2: 'Petra changed after seeing somebody else\u2019s illness.', 3: 'Dawit says the advice assumes a different life.'}),
          ('Which person wants to know which advice matters most?',
           ['Sigrun', 'Oluwafemi', 'Petra', 'Dawit'], 1,
           'Forty instructions and no sense of which three matter.',
           {0: 'Sigrun stopped because the guidance changed.', 2: 'Petra changed after seeing somebody else\u2019s illness.', 3: 'Dawit says the advice assumes a different life.'}),
          (
           'Which person changed after seeing somebody else\u2019s illness?',
           ['Sigrun', 'Oluwafemi', 'Petra', 'Dawit'], 2,
           'Watching her brother relearn to hold a cup.',
           {0: 'Sigrun stopped because the guidance changed.', 1: 'Oluwafemi wants to know which advice matters most.', 3: 'Dawit says the advice assumes a different life.'}),
          ('Which person says the advice assumes a different life?',
           ['Sigrun', 'Oluwafemi', 'Petra', 'Dawit'], 3,
           'Ten hours driving a van, home at nine.',
           {0: 'Sigrun stopped because the guidance changed.', 1: 'Oluwafemi wants to know which advice matters most.', 2: 'Petra changed after seeing somebody else\u2019s illness.'}),
          (
           'Petra recommends that others wait for a shock before '
           'changing.', ['Yes', 'No', 'Not Given'], 1,
           'She says explicitly that it is not a strategy anybody can '
           'recommend.',
           {0: 'Yes would need a recommendation; she says it is not '
               'one anybody can make.', 2: 'Not Given is wrong because she addresses whether it '
               'generalises.'}),
          ('Dawit believes the advice is wrong.',
           ['Yes', 'No', 'Not Given'], 1,
           'He says he is not refusing it; his objection is about the '
           'timetable it assumes.',
           {0: 'Yes would need rejection; he says he is not refusing '
               'it.', 2: 'Not Given is wrong because he states what his '
               'objection is.'})])],
   listen=[
    dict(preview=True,
         heading='A nurse on the word hesitancy',
         part='Preview', task='Sentence completion',
         band='lpre', qtype='Questions P1-P3',
         why='The Part 2 you are about to hear uses the word hesitancy '
             'eleven times. This ninety seconds is what it means to the '
             'people being described by it.',
         script=[
          ('Interviewer', 'The figures get called vaccine hesitancy. Is '
                          'that what you see?'),
          ('Sister Doyle', 'Almost never. Hesitancy means somebody who '
                           'has thought about it and is unsure. Most of '
                           'the people I chase have not thought about '
                           'it at all, because the letter went to an '
                           'address they left in 2019.'),
          ('Interviewer', 'So it is administrative.'),
          ('Sister Doyle', 'A lot of it. Some of it is the clinic '
                           'closing at four when they finish at five. '
                           'Some of it is a text in English to somebody '
                           'who reads Somali. And some of it, yes, is '
                           'genuine worry - but that is the smallest '
                           'part and it is the only part anybody '
                           'writes about.'),
          ('Interviewer', 'Why does the label matter?'),
          ('Sister Doyle', 'Because it tells you what to fix. If you '
                           'think it is hesitancy you make a leaflet. '
                           'If it is an address you buy a data clean, '
                           'and if it is the hour you open on a '
                           'Saturday. We tried the leaflet for three '
                           'years.'),
          ('Interviewer', 'And the Saturday?'),
          ('Sister Doyle', 'The Saturday moved it nine points in one '
                           'quarter. Nothing else we have done has come '
                           'close.')],
         items=[
          ('Sister Doyle says hesitancy properly means somebody who is '
           '____________.', None, 'unsure',
           'Her first answer: somebody who has thought about it and is '
           'unsure.'),
          ('She says much of the problem is ____________.',
           None, 'administrative',
           'Her second answer, which begins "a lot of it".'),
          ('Opening on a Saturday moved uptake by ____________ points.',
           None, 'nine',
           'Her last turn, and she says nothing else has come close.')]),
    dict(heading='Two public health officers disagree', part='Part 3',
         task='A planning discussion · sentence completion and multiple choice', band='l3', qtype='Questions 25-29',
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
          ('Uptake in the targeted wards was ____________ per cent.',
           None, 'thirty-four', 'Up from twenty-nine the previous year.'),
          (
           'Faisal argues that of the five-point rise, ____________ '
           'points are the campaign.', None, 'three',
           'Because the untargeted overall figure rose by two anyway.'),
          (
           'They cannot tell what worked because they changed '
           '____________ things at once.', None, 'four',
           'Which is his argument for running two wards differently.'),
          ('What will Annelise not support?',
           ['A new campaign', 'Reporting thirty-four as a failure', 'Naming the wards', 'Spending more'],
           1, 'Because those who came were the hardest to reach.',
           {0: 'She says she is not arguing that they stop.', 2: 'She offers to back the proposal with the wards named.', 3: 'Spending more is not what she refuses to support.'}),
          ('How does Faisal propose to describe the result?',
           ['A failure', 'A success', 'A number they cannot yet explain', 'An improvement'],
           2, 'Which he calls different and less satisfying.',
           {0: 'He says he would never report it as a failure.', 1: 'A success is her reading, which he calls fair but '
               'early.', 3: 'An improvement is what the figure shows, but not his '
               'wording.'})])],
   speak=dict(
    part='Part 1 into Part 2', focus='Advice',
    longturn=[('The advice I did not take was to turn down the first job I was '
               'offered after graduating and wait for something closer to what '
               'I had studied.'),
              ('It came from my former supervisor, who had known me for three '
               'years and had no reason to say anything other than what she '
               'thought.'),
              ('I did not take it for a reason I would now describe as fear '
               'rather than judgement. I had one offer, I had no savings, and '
               'I had watched two friends spend six months applying for things '
               'and getting nowhere. Her argument was that the first job sets '
               'the direction of the next five years, and I did not disagree '
               'with it; I simply could not act on it while I was worried '
               'about rent. I also suspect I wanted the decision to be over.'),
              ('What I think now is that she was right about the mechanism and '
               'wrong about me. The job did set the direction, exactly as she '
               'said, and I am now in a field I did not choose. But I am not '
               'sure I would have survived six months of uncertainty well '
               'enough to make a good decision at the end of it, and the '
               'version of me that waited might have taken something worse out '
               'of exhaustion. So I think it was good advice that I was not in '
               'a position to use, which is a different thing from bad advice, '
               'and I try to remember that when I am the one giving it.')],
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
    ref='L13',
    context=[
     'From the passage you have just read:',
     'Two questions are being run together here and they have different '
     'answers. The first is why uptake is low in this group, which is a '
     'question about causes and can be settled by evidence. The second '
     'is what the gap should be called, which is a question about '
     'respect and cannot. Most of the heat in this argument comes from '
     'people answering the second while believing they are answering '
     'the first.'],
    notice=[
     ('Find the four words that announce a division before it is '
      'made.', 'Two questions are being run together'),
     ('What kind of question is each - the writer says so explicitly.',
      'one about causes, settled by evidence; one about respect, which '
      'cannot be')],
    noticetask='Answer both from the paragraph above, which you met '
               'earlier in this cycle.',
    contrast='You met this move in unit 22 cycle 2, where the two '
             'questions were whether retraining works and who should '
             'pay for it. The pattern is the same and the payoff '
             'sentence is what makes it worth having: name the KIND of '
             'each question. A question about causes and a question '
             'about respect are not rival answers, they are different '
             'subjects, and saying so is how you move a dispute onto '
             'ground where it can be settled. Note the grammar once '
             'more: the first is followed by why, whether or a noun '
             'phrase, and takes a singular verb.',
    task2='Divide each subject into two questions and name the kind of '
          'each.',
    items2=[
     ('Should we call it hesitancy? ____________',
      None, 'why uptake is low, a question of cause; what to call it, '
      'a question of respect'),
     ('Should the clinic open on Saturdays? ____________',
      None, 'whether it would work, evidence; whether staff can be '
      'required to, fairness'),
     ('Correct: The first is that why uptake is low. ____________',
      None, 'The first is why uptake is low.'),
     ('Correct: Two question are being confused. ____________',
      None, 'Two questions are being confused.')],
    task3='Now use it on something in this unit. Take the gap on the '
          'chart at the front, announce the division, name the two '
          'questions and their kinds, and answer one of them in sixty '
          'to eighty words.',
    items3=8,
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
   notes=dict(
    serves='Matching information and True/False/Not Given, Reading Part '
           '3; Task 1 Academic, two lines with a lag between them',
    because='A band 6 answer to a two-line chart describes each line in '
            'turn and never states the relationship between them, '
            'which is the only thing the chart was drawn to show',
    skill='Reporting a lead and a lag: which line moves first, by how '
          'much, and what that means',
    evidence='Phase 4: in every two-line chart in the series the band '
             '6.5 model gives two separate descriptions and the band 9 '
             'model gives one relationship',
    watch='Learners will write "both lines peaked in January". They '
          'peaked three weeks apart and the dates are on the axis. '
          'Expect it, and make them point at the two peaks',
    time='85 minutes, or 65 without the free grammar production'),
   lead=dict(
    title='Two ways of counting the same illness',
    body='Nothing in public health is counted once. A single person '
         'with a serious infection may appear as a test result, as an '
         'admission, as an occupied bed and, in the worst case, as a '
         'death - four counts, four different weeks, four different '
         'curves. Headlines use whichever curve is doing the most '
         'dramatic thing that day. This cycle is about reading the '
         'relationship between two of them, which is harder than '
         'reading either and is the only thing that tells you what is '
         'actually happening.',
    task='Answer these before you look at the chart.',
    qs=['If cases are falling and hospital admissions are rising, what '
        'is going on?',
        'Which of the two would you want to know about if you ran a '
        'hospital? If you ran a school?',
        'Why might a government prefer to publish one rather than the '
        'other?',
        'What would make a count go up without the illness going up at '
        'all?']),
   vocabwork=dict(
    title='The vocabulary of counting people',
    body='Twelve words that recur in every epidemic and in a surprising '
         'amount of ordinary statistics. Four of them - prevalence, '
         'base figure, detection, distort - are about the gap between '
         'what is happening and what is being counted, which is the '
         'subject of cycle 5 as well.',
    figure=dict(kind='field', teaches='vocabulary',
                centre='counting a disease',
                sub='cycle 3 · four of these return in cycle 5',
                branches=[('what is counted',
                           ['new cases', 'admission', 'prevalence',
                            'incidence']),
                          ('when it is counted',
                           ['lag', 'reporting delay', 'weekly total',
                            'seven-day average']),
                          ('why the count moves',
                           ['detection', 'base figure', 'testing '
                            'capacity', 'definition change']),
                          ('what it does to the picture',
                           ['distort', 'smooth', 'overstate',
                            'artefact'])],
                note='An artefact is a feature of the data produced by '
                     'the way it was collected rather than by the '
                     'world. A step in a line on the day a definition '
                     'changed is an artefact, and Task 1 answers that '
                     'describe one as a real change lose marks for '
                     'accuracy.'),
    figure2=dict(kind='cline', teaches='scale',
                 title='How fast did it move?',
                 sub='cycle 3 · the verbs a Task 1 answer needs',
                 left='no movement', right='violent movement',
                 items=[('held steady', 0.02), ('edged up', 0.16),
                        ('rose gradually', 0.3), ('climbed', 0.48),
                        ('rose sharply', 0.66), ('surged', 0.82),
                        ('more than doubled', 0.97)],
                 note='Choose from the middle unless the chart earns '
                      'the ends. Surged on a line that rose by four '
                      'per cent is an accuracy error, not a vocabulary '
                      'flourish.'),
    task='Complete each with a word from this cycle.',
    items=[
     ('The delay between infection and admission is the '
      '____________.', None, 'lag'),
     ('The number of people who have the disease at one moment is the '
      '____________.', None, 'prevalence'),
     ('A jump caused by a change in the rules rather than in the world '
      'is an ____________.', None, 'artefact'),
     ('Averaging over a week to remove the weekend dip is to '
      '____________ the line.', None, 'smooth'),
     ('The figure everything else is compared with is the '
      '____________ figure.', None, 'base'),
     ('Finding more of something because you looked harder is '
      '____________.', None, 'detection'),
     ('The verb for a line that rose by four per cent: it '
      '____________ up.', None, 'edged'),
     ('The verb for a line that went from 200 to 900: it '
      '____________.', None, 'surged')]),
   builder=dict(
    skill='Task 1: two lines, and the distance between them',
    qkind='skill',
    explain='When a chart has two lines on it, the chart is about the '
            'relationship, not about the lines. A band 6 answer '
            'describes line one from left to right, then line two from '
            'left to right, and ends with the reader knowing both '
            'stories and no connection between them. A band 7 answer '
            'states the relationship first and uses the figures to '
            'support it. Three questions get you there and they work on '
            'every two-line chart in the paper. Which line leads, and '
            'by how much - is one always ahead of the other, and is the '
            'gap constant? Where do they peak, and are the peaks on the '
            'same date? And does the relationship hold for the whole '
            'period, or does it break somewhere - because the place it '
            'breaks is almost always the most interesting sentence '
            'available and almost nobody writes it. Give the answers to '
            'those three as your overview, and then pick four figures '
            'to prove them. Four, not twelve.',
    worked=[
     'The chart: weekly new cases and weekly hospital admissions, '
     'twenty weeks.',
     'Which leads: cases, throughout, by about a fortnight. That is '
     'one sentence and it needs no numbers.',
     'Where they peak: cases in week 9 at 4,100; admissions in week 11 '
     'at 530. Two dates, two figures, and the gap is the point.',
     'Where it breaks: after week 15 cases fall and admissions stay '
     'flat. That is the sentence worth writing, and the passage in '
     'this cycle explains why - a change in who was being tested.',
     'What not to write: "both lines rose and then fell", which is '
     'true of almost every chart ever drawn.'],
    figure=dict(kind='ladder', teaches='band-move',
                criterion='Task Achievement, on a two-line chart',
                sub='cycle 3 · the same chart, three bands',
                rungs=[('5.5', 'Cases went up to 4,100 in week 9 and '
                        'then went down. Admissions went up to 530 in '
                        'week 11 and then went down.', ''),
                       ('6.5', 'Cases peaked in week 9 at 4,100, two '
                        'weeks before admissions peaked at 530 in week '
                        '11.',
                        'the two peaks joined into one sentence, with '
                        'the gap named'),
                       ('7.5', 'Admissions followed cases throughout, '
                        'peaking two weeks later and at roughly an '
                        'eighth of the level, a relationship that held '
                        'until week 15 and then broke.',
                        'the relationship is the subject of the '
                        'sentence, the figures are subordinate, and '
                        'the exception is named')],
                note='The third answer contains fewer numbers than the '
                     'first and scores a band and a half higher. That '
                     'is not a trick; it is what Task Achievement '
                     'measures.'),
    task='For each pair of facts write the single sentence you would '
         'use. One sentence, not two.',
    items=[
     ('Cases peak week 9; admissions peak week 11.',
      None, 'admissions peaked two weeks later'),
     ('Cases 4,100; admissions 530.',
      None, 'admissions were about an eighth of cases'),
     ('Both fall after their peaks.',
      None, 'both declined, admissions again lagging'),
     ('After week 15 cases fall, admissions flat.',
      None, 'the relationship broke after week 15'),
     ('Cases always above admissions.',
      None, 'cases exceeded admissions throughout'),
     ('Admissions never move first.',
      None, 'admissions followed cases without exception')],
    note='Every one of the six answers is a relationship and not a '
         'pair of numbers. If any of yours contains two figures joined '
         'by and, rewrite it: the examiner can see the chart, so the '
         'figures are not the news.'),
   figures=[
    dict(kind='bridge', teaches='paraphrase',
         sub='cycle 3 · what the questions do to the article',
         pairs=[('a fortnight behind', 'with a two-week lag',
                 'nominalisation'),
                ('more people were tested',
                 'testing capacity was expanded', 'voice'),
                ('the figure is misleading',
                 'the count distorts the picture', 'reformulation'),
                ('not a real increase', 'an artefact of detection',
                 'negation'),
                ('people in hospital', 'admissions', 'hypernym'),
                ('the middle value of seven days',
                 'the seven-day average', 'synonym')],
         note='The fourth is the one worth two marks and the one '
              'almost everybody misses, because artefact is a word '
              'learners recognise and do not use.'),
   ],
   advice='In Task 1 the overview is the sentence the examiner looks '
          'for first and the one most answers do not have. On a '
          'two-line chart it is a statement about the relationship - '
          'which leads, by how much, and whether it holds. Write it '
          'second, after one sentence saying what is being counted and '
          'over what period, and never let it become a list of two '
          'peaks.',
   debrief=dict(
    read=['The True/False/Not Given statement about the rise in week '
          '16 is False: the passage says the count rose because '
          'testing was expanded, which is a statement about the '
          'counting and not about the disease.',
     'Two paragraphs mention the lag and only one explains it. '
     'Matching information asks which contains the explanation.',
     'Question 38 uses "a fortnight behind" and the article says "with '
     'a two-week lag". That is the first pair on the paraphrase '
     'bridge.'],
    listen=['The speaker gives a peak figure, then corrects the week '
            'it fell in. The week is the answer and the correction '
            'comes second.',
     'In the note-completion task one gap wants a number and the '
     'speaker gives three in the same sentence. The words either side '
     'of the gap say which.']),
   outside='Almost every number you will ever read about a population '
           'was counted at a particular moment by a particular method, '
           'and the method moves the number. Asking when it was counted '
           'and how is not scepticism; it is the minimum competence for '
           'reading a newspaper.',
   recycled=['uptake', 'cohort', 'prevalence', 'evidence', 'median',
             'base figure'],
   read=[
    dict(preview=True,
         heading='Why the lines do not peak together',
         kind='Explainer box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='The chart in this cycle has two lines on it and they peak '
             'three weeks apart. That gap is the whole story, and it is '
             'invisible unless you know what it means.',
         paras=[
          'Cases are counted when somebody is tested. Admissions are '
          'counted when somebody is ill enough to be taken into '
          'hospital. Those are two different events in the same '
          'person’s illness, and the second follows the first by a '
          'predictable number of days.',
          'That delay is called a lag. In a chart it shows as two lines '
          'of similar shape, one shifted to the right of the other, and '
          'the size of the shift is a fact about the disease rather '
          'than about the counting. Ten to fourteen days is typical for '
          'a respiratory infection.',
          'The lag is why admissions can still be rising while cases '
          'are falling, and why that is not a contradiction. The people '
          'now being admitted were infected a fortnight ago, when cases '
          'were still going up. Nothing has reversed; you are looking '
          'at two photographs taken at different moments.',
          'For a Task 1 answer this matters twice over. The peaks must '
          'be reported separately, with their dates. And the '
          'relationship between them - the lag, and the fact that one '
          'line leads and the other follows - is the overview sentence '
          'the chart is really asking for.'],
         items=[
          ('Cases are counted when somebody is ____________.',
           None, 'tested',
           'Paragraph 1: admissions are counted at a different moment '
           'in the same illness.'),
          ('The delay between the two counts is called a '
           '____________.', None, 'lag',
           'Paragraph 2, which gives ten to fourteen days as typical.'),
          ('Admissions can rise while cases fall because the people '
           'admitted were infected a ____________ earlier.',
           None, 'fortnight',
           'Paragraph 3: two photographs taken at different moments.')]),
    dict(heading='Incidence, prevalence and what gets missed',
         kind='Data article',
         task='Multiple choice, matching information, sentence completion and True/False/Not Given',
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
           'At 140 per hundred thousand, two weeks before admissions '
           'peak.',
           {0: 'Week three is before the peak the passage reports.', 2: 'Week seven is when admissions peak, two weeks later.', 3: 'Later than either peak the graph shows.'}),
          (
           'Which paragraph explains the two-week gap between the '
           'peaks?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'],
           1,
           'The interval between being unwell and being seriously '
           'unwell.',
           {0: 'Paragraph 1 gives the peaks without explaining the '
               'gap.', 2: 'Paragraph 3 explains why the ratio between the lines '
               'misleads.', 3: 'Paragraph 4 is about the expansion of testing in week '
               'four.'}),
          (
           'Which paragraph explains why the ratio between the lines '
           'misleads?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1,
           'It is a proportion of reported cases, and reporting '
           'depends on testing.',
           {0: 'Paragraph 2 explains the two-week gap between the '
               'peaks.', 2: 'Paragraph 4 is about the expansion of testing in week '
               'four.', 3: 'Paragraph 5 explains why admissions are watched '
               'instead.'}),
          ('Admissions peak at ____________ per hundred thousand.', None,
           '29', 'In week seven, a fifth of the height of the case peak.'),
          ('Admissions peak about two weeks after cases do.',
           ['True', 'False', 'Not Given'], 0,
           'Paragraph 1 gives week five for cases and week seven for '
           'admissions.',
           {1: 'False would need a different lag, and the two peak '
               'weeks are given.', 2: 'Not Given is wrong because paragraph 1 dates both '
               'peaks.'}),
          (
           'The ratio between the two lines gives the proportion of '
           'infected people who become seriously ill.',
           ['True', 'False', 'Not Given'], 1,
           'Paragraph 3 says it is the proportion of reported cases, '
           'not of infected people.',
           {0: 'True is the error paragraph 3 exists to correct.', 2: 'Not Given is wrong because paragraph 3 answers it in '
               'those terms.'})])],
   listen=[
    dict(heading='An epidemiologist on case counts', part='Part 4',
         task='A lecture on reading outbreak data · note completion and multiple choice', band='l4',
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
          (
           'The gap between the peaks is caused by the time from '
           'unwell to ____________ unwell.', None,
           'seriously',
           'About a fortnight, which he says is not a mystery.'),
          (
           'An admissions figure on Thursday describes the epidemic a '
           '____________ earlier.', None, 'fortnight',
           'Which is why policy made from it responds to a past state.'),
          (
           '"One in five infected people needed hospital" is wrong '
           'because the ____________ is reported cases.',
           None, 'denominator', 'The error is in the word infected.'),
          ('Testing in this outbreak expanded in week ____________.',
           None, 'four',
           'So part of the rise to the peak is more looking.'),
          ('A government that cut testing in week six would produce',
           ['a real fall', 'a falling line and no epidemiological change', 'more admissions', 'no visible effect'],
           1,
           'Which is his illustration of how easily the case line is '
           'distorted.',
           {0: 'A real fall is what the line would appear to show and '
               'would not be.', 2: 'Admissions would be unaffected by a change in testing.', 3: 'The line would move sharply, which is his point.'}),
          (
           'He would prefer the line that tells him less and '
           '____________ less.', None, 'lies',
           'Because admissions are harder to distort.')])],
   speak=dict(
    part='Part 2 into Part 3', focus='Measuring an outbreak',
    intro=('The card comes first. Make your notes inside the minute you '
           'are given, speak until you are stopped, and let the last '
           'bullet carry the weight. Then the discussion: four or five '
           'sentences. Where you use a number, say what it is a number of.'),
    cue=(('Describe a time you had to decide something without enough '
          'information.'),
         ['what the decision was',
          'what you knew at the time',
          'what you decided',
          'and explain how it turned out']),
    qs=['Now look at the card. You have one minute to make notes.',
        'What would you have wanted to know?',
        'Would you decide the same way again?',
        'How should a government decide when to act in an epidemic?',
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
    ref='L6',
    context=[
     'From the article you have just read:',
     'Admissions followed cases throughout the period, peaking in week '
     '11 at 530 against a case peak of 4,100 two weeks earlier - '
     'roughly one admission for every eight infections detected. The '
     'relationship held until week 15, when cases fell by a third and '
     'admissions did not move at all.'],
    notice=[
     ('The writer gives a ratio and a difference in the same sentence. '
      'Find both.',
      'roughly one in eight is the ratio; two weeks earlier is the '
      'difference'),
     ('What does the second sentence do that the first does not?',
      'it names the point where the relationship stops holding')],
    noticetask='Answer both from the paragraph above, which is from the '
               'passage you read earlier in this cycle.',
    contrast='Comparing two series that move together needs a tool the '
             'single-series comparison does not: a word for the '
             'distance in time. Lead, lag, follow, precede, coincide '
             'with. Compare "cases peaked in week 9 and admissions '
             'peaked in week 11" with "admissions peaked two weeks '
             'after cases". The first is two facts and the second is '
             'one relationship, and a Task 1 answer is marked on the '
             'second. Note the prepositions, which learners reverse: '
             'admissions lagged BEHIND cases, cases led BY two weeks, '
             'admissions peaked two weeks AFTER cases.',
    task2='Join each pair into one sentence naming the relationship.',
    items2=[
     ('Cases peaked week 9. Admissions peaked week 11. ____________',
      None, 'Admissions peaked two weeks after cases.'),
     ('Cases 4,100. Admissions 530. ____________',
      None, 'Admissions ran at roughly an eighth of cases.'),
     ('Correct: admissions lagged cases of two weeks. ____________',
      None, 'admissions lagged behind cases by two weeks'),
     ('The pattern stopped in week 15. ____________',
      None, 'The relationship held until week 15 and then broke.')],
    task3='Now write the opening of a Task 1 answer from the chart in '
          'this cycle: one sentence saying what is counted and over '
          'what period, one overview sentence naming the relationship, '
          'and one comparison. About fifty words, with no figure you do '
          'not need.',
    items3=8,
    point='Describing two lines that peak at different times',
    fix=dict(
     text=('Both series rose and then fell, but they did not peaked in the '
           'same year. Cases peaked in March, whereas deaths peaked four weeks '
           'later, in April. The gap between the two peaks was about a month '
           'in each of the three waves. By June both series had returned to '
           'their starting level, where they stayed until the autumn.'),
     faults=[('they did not peaked in the same year',
              'they did not peak in the same year',
              ('After did not the verb goes back to its plain form: did not '
               'peak.')),
             (('Cases peaked in March, whereas deaths peaked four weeks later, '
               'in April'),
              'Cases peaked in March and deaths four weeks later, in April',
              ('Whereas marks a contrast, and a four-week lag between two '
               'series that behave alike is not one.')),
             ('had returned to their starting level',
              'had returned to their starting levels',
              'Two series have two starting levels, so the noun is plural.')]),
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
   notes=dict(
    serves='Matching headings and Yes/No/Not Given, Reading Part 3, on '
           'a seven-hundred-word passage; multiple choice in Listening '
           'Part 4',
    because='Yes/No/Not Given at length is lost on scope: a statement '
            'saying all, or always, or the main cause, is tested '
            'against a passage saying most, or usually, or one of '
            'several, and a reader who has matched the content will '
            'mark it YES',
    skill='Reading the scope words - all, most, some, only, mainly, '
          'always - as the thing the question is actually about',
    evidence='Unit 21 taught the three tests and unit 23 cycle 2 added '
             'the voice check; what remains is quantifier scope, and '
             'the audit found it taught nowhere in Volume 3',
    watch='Learners will mark statement 50 YES. The statement says the '
          'main reason and the passage says one of four, each '
          'sufficient. Expect it, and point at the preview recording',
    time='90 minutes, or 70 without the free grammar production'),
   lead=dict(
    title='Why did it stop?',
    body='Epidemics end, and the reason is almost never the reason that '
         'gets credited. Whoever acted last tends to be thanked, '
         'whoever acted first tends to be forgotten, and the possibility '
         'that four separate things were each enough on their own is so '
         'unsatisfying that newspapers do not print it. The passage in '
         'this cycle argues for exactly that unsatisfying answer, which '
         'makes it a hard read: the sentences are plain and the shape '
         'of the argument is not.',
    task='Answer these before you read, and keep them for the unit '
         'review.',
    qs=['Think of something that stopped - a fashion, a shortage, an '
        'argument. What ended it?',
        'How would you tell the difference between the cause and the '
        'thing that happened last?',
        'If four things were each enough on their own, which one '
        'caused it?',
        'Is "we do not know which" ever an acceptable answer in '
        'public?']),
   vocabwork=dict(
    title='The words for several causes at once',
    body='The vocabulary of causation you met in unit 21 cycle 4 ran '
         'from associated with to causes. This cycle adds the second '
         'dimension: not how strong a cause is, but how many there are '
         'and how they combine. Necessary, sufficient, contributory, '
         'overdetermined - four words that between them settle most '
         'arguments about blame.',
    figure=dict(kind='field', teaches='vocabulary',
                centre='several causes at once',
                sub='cycle 4 · and compare the ladder in unit 21 cycle '
                    '4',
                branches=[('how it combines',
                           ['necessary', 'sufficient', 'contributory',
                            'jointly']),
                          ('when there are too many',
                           ['overdetermined', 'confounded',
                            'entangled', 'disentangle']),
                          ('how we test it',
                           ['hold constant', 'counterfactual',
                            'natural experiment', 'attribute']),
                          ('what we conclude',
                           ['no single cause', 'in part',
                            'on the balance of evidence',
                            'consistent with'])],
                note='Necessary and sufficient are the pair that does '
                     'the work. A necessary cause is one without which '
                     'it would not have happened; a sufficient cause '
                     'is one that would have been enough by itself. A '
                     'thing can be either, both or neither, and almost '
                     'every public argument about blame is two people '
                     'using different ones.'),
    figure2=dict(kind='family', teaches='word-formation',
                 sub='cycle 4 · and the stress moves in two of them',
                 rows=[(('at-tri-bute', 2), ('at-tri-bu-tion', 3), '',
                        '', ''),
                       (('con-tri-bute', 2), ('con-tri-bu-tion', 3),
                        '', '', ''),
                       (('de-ter-mine', 2), ('de-ter-mi-nant', 2), '',
                        ('de-ter-mined', 2), ''),
                       (('con-found', 2), ('con-foun-der', 2), '',
                        ('con-foun-ded', 2), ''),
                       ('', ('suf-fi-cien-cy', 2), '',
                        ('suf-fi-cient', 2), ('suf-fi-cient-ly', 2))],
                 note='The noun ATtribute and the verb atTRIBute are '
                      'spelled identically and stressed differently. '
                      'This is one of about forty such pairs in '
                      'English and it is the only one you need here.'),
    task='Complete each sentence with a word from this cycle.',
    items=[
     ('A cause without which the event would not have happened is '
      '____________.', None, 'necessary'),
     ('A cause that would have been enough on its own is '
      '____________.', None, 'sufficient'),
     ('An outcome with several sufficient causes is ____________.',
      None, 'overdetermined'),
     ('A third factor producing an apparent link between two others '
      'is a ____________.', None, 'confounder'),
     ('To say what would have happened otherwise is to state a '
      '____________.', None, 'counterfactual'),
     ('The noun from contribute is ____________.',
      None, 'contribution'),
     ('To assign an effect to a cause is to ____________ it.',
      None, 'attribute'),
     ('Several causes acting together act ____________.',
      None, 'jointly')]),
   builder=dict(
    skill='Yes/No/Not Given at length: the scope words',
    qkind='skill',
    explain='In a short text you can hold the whole claim in your head. '
            'In seven hundred words you cannot, and the examiner knows '
            'it, so the statements in a long Yes/No/Not Given set are '
            'rarely false about the content. They are false about the '
            'scope. The passage says most and the statement says all. '
            'The passage says one of several and the statement says the '
            'main. The passage says usually and the statement says '
            'always. A reader who has understood the content will '
            'cheerfully mark YES, because the statement is a fair '
            'summary of what they now believe, and that is precisely '
            'the trap. So before you go hunting, underline the scope '
            'word in the statement - all, most, some, only, mainly, '
            'always, never, the main, a - and treat it as the thing you '
            'are checking. Then find the writer’s own scope word and '
            'compare the two. If the statement is stronger than the '
            'passage, the answer is NO. If the passage simply has no '
            'scope word for that claim, you are probably in NOT GIVEN.',
    worked=[
     'The passage: “Four factors were operating simultaneously, and '
     'each of them would probably have been sufficient on its own.”',
     'STATEMENT: school closures were the main reason the outbreak '
     'ended.',
     'Scope word in the statement: the main. Scope in the passage: one '
     'of four, each sufficient.',
     'The content matches - school closures are indeed in the list. '
     'The scope does not: the passage specifically refuses to rank '
     'them. The answer is NO, and a reader who checked content alone '
     'marked YES.'],
    figure=dict(kind='decide', teaches='decision',
                title='Scope first, then the three tests',
                sub='cycle 4 · the extra step a long passage needs',
                nodes=[('Does the statement contain a scope word - '
                        'all, most, only, mainly, always, the main?',
                        'find the writer’s scope word and compare',
                        'go to the three tests as usual'),
                       ('Is the statement’s scope stronger than the '
                        'writer’s?', 'NO. Stop.',
                        'go to the three tests'),
                       ('Does the writer give any scope for this claim '
                        'at all?', 'compare, then answer',
                        'NOT GIVEN - the claim is outside what is '
                        'said')],
                note='This sits in front of the three tests from unit '
                     '21, it does not replace them. It catches the '
                     'statements that would otherwise pass all three.'),
    task='For each pair write the two scope words and the answer.',
    items=[
     ('PASSAGE: most patients recover within a week.  STATEMENT: all '
      'patients recover within a week.', None, 'most, all, no'),
     ('PASSAGE: one of four sufficient causes.  STATEMENT: the main '
      'cause.', None, 'one of four, the main, no'),
     ('PASSAGE: the measure usually works.  STATEMENT: the measure '
      'always works.', None, 'usually, always, no'),
     ('PASSAGE: some areas reported a rise.  STATEMENT: a rise was '
      'reported in some areas.', None, 'some, some, yes'),
     ('PASSAGE: (gives no proportion)  STATEMENT: most clinicians '
      'agree.', None, 'none, most, not given'),
     ('PASSAGE: schools closed, among other measures.  STATEMENT: '
      'only schools closed.', None, 'among others, only, no')],
    note='Five of the six are decided by the scope word alone and the '
         'content of all six matches. That ratio is not exaggerated '
         'for the exercise: it is roughly what a long Yes/No/Not Given '
         'set looks like.'),
   figures=[
    dict(kind='skeleton', teaches='text-structure',
         title='Seven hundred words, six functions',
         sub='cycle 4 · build your own before you look',
         paras=[('A', 'context', 'The question everyone asks, and its '
                 'shape'),
                ('B', 'definition', 'Necessary, sufficient, and the '
                 'difference'),
                ('C', 'claim', 'The ending was overdetermined'),
                ('D', 'evidence', 'Four factors, and the timing of '
                 'each'),
                ('E', 'concession', 'What a single-cause account '
                 'would explain better'),
                ('F', 'consequence', 'What this means for the next '
                 'one')],
         note='B is a definition and D is evidence, and both are full '
              'of the same four factors. That is the pair from unit 22 '
              'cycle 4 - defining against illustrating - in a passage '
              'where the illustration happens to be the data.'),
   ],
   advice='In a long Yes/No/Not Given set, underline the scope word in '
          'every statement before you read the passage at all. It takes '
          'ninety seconds for eight statements and it is the single '
          'highest-return ninety seconds in the Reading paper, because '
          'the examiner has put the difficulty there on purpose: a set '
          'where the statements were false about content would be a '
          'vocabulary test.',
   debrief=dict(
    read=['Statement 50 says the main reason and the passage says one '
          'of four, each sufficient. The content matches perfectly and '
          'the scope does not.',
     'Statement 53 is stated by a critic the writer quotes in '
     'paragraph E, and the writer answers it in the next sentence. '
     'That is the voice problem from cycle 2 of this unit, at length.',
     'Two headings contain the word cause and three paragraphs are '
     'about causes. B defines and D gives the evidence; the heading '
     'naming the four factors belongs to D.'],
    listen=['Prof Adeyemi gives four factors and is asked which was '
            'biggest. Her refusal is the answer to question 56, and it '
            'is a full sentence rather than a hesitation.',
     'Question 58 offers an option containing the word overdetermined, '
     'which she uses about a different outbreak.']),
   outside='The difference between a necessary cause and a sufficient '
           'one decides blame in a courtroom, credit in a workplace '
           'and most arguments in a family. Four words, and almost '
           'nobody is taught them.',
   recycled=['evidence', 'attribute', 'counterfactual', 'cohort',
             'prevalence', 'sufficient'],
   read=[
    dict(heading='The epidemic that stops before everyone has had it',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and sentence completion',
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
          'which of the things we did made it end sooner.',
                ('It is worth stating what this means for the next outbreak, '
                 'since the practical question is not historical. A government '
                 'that waits for the decline before acting will see one, and '
                 'will be unable to show that its action produced it. A '
                 'government that acts early will also see a decline, and will '
                 'be unable to show that the decline would not have come '
                 'anyway. Neither position is dishonest, and neither can be '
                 'settled after the fact. The only way out is to collect the '
                 'comparison while the outbreak is running, which is '
                 'expensive, unpopular and almost never done.')],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['The familiar account', 'A number that is not fixed', 'Who is infected first', 'Running out of season'],
           1,
           'The figure depends on the population and its behaviour, '
           'not just the disease.',
           {0: 'The familiar account is paragraph 2, with the '
               'threshold.', 2: 'Who is infected first is the heading for paragraph 5.', 3: 'Running out of season is the heading for paragraph 7.'}),
          ('Choose the best heading for paragraph 5.',
           ['A number that is not fixed', 'Who is infected first', 'Running out of season', 'Several causes at once'],
           1, 'Real populations are not well-mixed pools.',
           {0: 'A number that is not fixed is the heading for '
               'paragraph 3.', 2: 'Running out of season is the heading for paragraph 7.', 3: 'Several causes at once is paragraph 10, the summary.'}),
          ('Choose the best heading for paragraph 7.',
           ['Who is infected first', 'Running out of season', 'Several causes at once', 'The familiar account'],
           1,
           'Many respiratory diseases transmit better in cold, dry '
           'air.',
           {0: 'Who is infected first is the heading for paragraph 5.', 2: 'Several causes at once is paragraph 10, the summary.', 3: 'The familiar account is paragraph 2, with the '
               'threshold.'}),
          ('The writer believes the familiar account is wrong.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 calls it correct and incomplete.',
           {0: 'Yes would need error; paragraph 2 calls it correct but '
               'incomplete.', 2: 'Not Given is wrong because the account is rated.'}),
          (
           'The writer believes thresholds can be calculated reliably '
           'in advance.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 4 says such thresholds have been wrong in both '
           'directions almost every time.',
           {0: 'Yes would need reliability; paragraph 4 says they have '
               'been wrong both ways.', 2: 'Not Given is wrong because the record of such '
               'thresholds is given.'}),
          ('The people infected earliest tend to be those with the most '
           '____________.', None, 'contacts',
           'Paragraph 5, which is why their immunity slows the spread '
           'disproportionately.'),
          ('The writer describes an epidemic ending as ____________.', None,
           'overdetermined',
           'Paragraph 8: several mechanisms each sufficient on their own.')])],
   listen=[
    dict(preview=True,
         heading='An epidemiologist on the word because',
         part='Preview', task='Sentence completion',
         band='lpre', qtype='Questions P1-P3',
         why='The lecture you are about to hear refuses, four times, to '
             'name a single cause. Ninety seconds here and the refusal '
             'stops sounding like evasion.',
         script=[
          ('Interviewer', 'So why did the outbreak end?'),
          ('Prof Adeyemi', 'That question has a shape I cannot answer '
                           'in. It assumes there is a because.'),
          ('Interviewer', 'There usually is.'),
          ('Prof Adeyemi', 'There usually are. Four things were '
                           'happening at once. Enough people had been '
                           'infected to slow transmission. The weather '
                           'changed. The schools closed. And people '
                           'started behaving differently about three '
                           'weeks before anybody told them to.'),
          ('Interviewer', 'Which was the biggest?'),
          ('Prof Adeyemi', 'Each of them, on its own, would probably '
                           'have been enough eventually. That is what '
                           'makes the question unanswerable rather '
                           'than merely difficult. We call it '
                           'overdetermined.'),
          ('Interviewer', 'That sounds like a way of avoiding the '
                          'question.'),
          ('Prof Adeyemi', 'It is the opposite. It is a precise claim: '
                           'that removing any one of the four would not '
                           'have changed the outcome. That is testable, '
                           'and in two of the four cases we have '
                           'tested it.'),
          ('Interviewer', 'How do you test a thing that already '
                          'happened?'),
          ('Prof Adeyemi', 'You find somewhere the factor was absent. '
                           'Two neighbouring regions kept their schools '
                           'open, for administrative reasons that had '
                           'nothing to do with the epidemic, and their '
                           'curves turned down within four days of '
                           'everybody else’s. That is not proof. It is '
                           'the strongest evidence this kind of '
                           'question ever gets.'),
          ('Interviewer', 'And the public hears "we do not know".'),
          ('Prof Adeyemi', 'The public hears that because it is shorter. '
                           'What we actually know is quite precise, and '
                           'it is uncomfortable rather than vague.')],
         items=[
          ('Prof Adeyemi says the question assumes there is a '
           '____________.', None, 'because',
           'Her first answer: the question has a shape she cannot '
           'answer in.'),
          ('She names ____________ things that were happening at once.',
           None, 'four',
           'Her second long turn, which lists them.'),
          ('When several causes would each have been enough, the '
           'outcome is ____________.', None, 'overdetermined',
           'Her third turn, and it is the word the lecture is built '
           'on.')]),
    dict(heading='A lecture on transmission and immunity', part='Part 4',
         task='A lecture on why outbreaks decline · multiple choice and sentence completion', band='l4',
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
           ['wrong', 'true and about a third of the story', 'out of date', 'too technical'],
           1, 'He then gives the three things it leaves out.',
           {0: 'He says the textbook answer is true as far as it goes.', 2: 'Age is not what he says is wrong with it.', 3: 'He calls it the textbook answer, not a technical one.'}),
          (
           'The number of further cases is a property of a virus in a '
           '____________ behaving a certain way.', None,
           'population',
           'And he calls treating it as a constant the commonest error '
           'in the field.'),
          (
           'The standard model wrongly assumes everybody is equally '
           'likely to ____________ everybody.', None, 'meet',
           'Whereas the first infected are those with the most '
           'contacts.'),
          ('Why is he careful about the mixing point?',
           ['It is disputed', 'A true observation was used for a badly wrong prediction', 'It is hard to measure', 'It applies only to cities'],
           1, 'A few years ago, which is why he flags it.',
           {0: 'He presents the mixing point as true, not disputed.', 2: 'Measurement difficulty is real but not why he flags '
               'it.', 3: 'He does not restrict the point to cities.'}),
          ('The third reason he gives is ____________.', None,
           'seasons',
           'Many respiratory infections spread better in cold dry air.'),
          (
           'He says an epidemic ending is overdetermined, which makes '
           'the decline easy to forecast and the credit',
           ['easy to assign', 'nearly impossible to assign', 'shared equally', 'irrelevant'],
           1, 'Which he calls the reverse of what governments want.',
           {0: 'He says the credit is the part that cannot be '
               'assigned.', 2: 'Equal sharing is not what overdetermination implies '
               'here.', 3: 'He calls the credit the question governments most '
               'want.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='Stopping the spread of disease',
    followup=[('You mentioned restrictions on travel. Do they work?',
               ('They buy time rather than prevent arrival, and the value of '
                'the time depends entirely on what is done with it. Where a '
                'country used the delay to prepare testing and hospital '
                'capacity, the restriction looks effective in hindsight; where '
                'nothing was prepared, the same measure simply moved the first '
                'case by ten days.')),
              ('Why do people disagree so much about what worked?',
               ('Because almost nothing was tried in isolation. Countries '
                'changed five things in a fortnight, so the evidence cannot '
                'separate them, and anybody arguing for one measure can point '
                'at a country that used it and did well. Until you can compare '
                'like with like, the disagreement is not stubbornness; it is a '
                'genuine limit in what the data can settle.')),
              ('What should a country prepare in advance?',
               ('The things that cannot be bought quickly: trained people, a '
                'surveillance system that already works on ordinary illnesses, '
                'and legal powers agreed before they are needed. Stockpiles '
                'matter less than they appear to, because the stockpile is '
                'always of the last outbreak\'s equipment, whereas the capacity '
                'to find out what is happening is useful whatever arrives.'))],
    intro=('Card first, and the last bullet is the one that earns the '
           'band: it asks you to explain rather than to list. After the '
           'long turn the discussion opens: four or five sentences. Try '
           'once to say that several causes may be acting at the same '
           'time.'),
    cue=('Describe a rule about health that you had to follow.',
         ['what the rule was',
          'when and where it applied',
          'how people around you reacted to it',
          'and explain whether you thought it was sensible']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Was it explained to you?',
        'Is it still in force?',
        'What is the best way to stop a disease spreading?',
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
    ref='L9',
    context=[
     'From the passage you have just read:',
     'Four factors were operating simultaneously, and the honest '
     'account is that each of them would probably have been sufficient '
     'on its own. Accumulated immunity was slowing transmission before '
     'any measure was announced; the weather turned; the schools '
     'closed; and behaviour had already changed. No single one of these '
     'can be shown to have ended the outbreak, because removing any one '
     'of them leaves the other three still doing the work.'],
    notice=[
     ('Find the phrase that says the causes acted at the same time.',
      'were operating simultaneously'),
     ('Why can no single factor be shown to have ended it? The writer '
      'gives the reason explicitly.',
      'because removing any one leaves the other three still doing the '
      'work')],
    noticetask='Answer both from the paragraph above, which you met '
               'earlier in this cycle.',
    contrast='In unit 21 cycle 4 the question was how strongly a cause '
             'could be claimed; here it is how many causes there are '
             'and how they combine, which needs a different set of '
             'words. Jointly, simultaneously, each on its own, '
             'independently, in combination. The structure that does '
             'the real work is the counterfactual: removing any one of '
             'them leaves the others still doing the work. That '
             'sentence is what the word overdetermined means, unpacked, '
             'and an essay that can write it does not need the word at '
             'all.',
    task2='Rewrite each so that it claims several causes rather than '
          'one.',
    items2=[
     ('The schools closing ended the outbreak. ____________',
      None, 'School closures were one of several factors acting at '
      'once.'),
     ('Immunity was the cause. ____________',
      None, 'Immunity contributed, jointly with three other factors.'),
     ('Correct: each of them were sufficient. ____________',
      None, 'each of them was sufficient'),
     ('State the counterfactual: removing the weather changes '
      'nothing. ____________',
      None, 'Removing the change in weather leaves the other three '
      'still sufficient.')],
    task3='Now write the claim yourself. Take the ending of the '
          'outbreak in this cycle, state that it was overdetermined '
          'without using the word, and give the counterfactual that '
          'makes the claim testable. Sixty to eighty words.',
    items3=8,
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
   notes=dict(
    serves='Matching information and Yes/No/Not Given, Reading Part 3; '
           'Task 2, to what extent do you agree',
    because='A band 6 conclusion restates the introduction, and a band '
            '7 conclusion states something the body of the essay has '
            'actually established - the difference is not in the '
            'language of the conclusion but in whether the essay '
            'earned it',
    skill='Writing a conclusion the essay has earned, and noticing '
          'when it has not',
    evidence='Phase 4: the band 6.5 models in this series conclude with '
             'a restatement in eight cases out of ten; the band 9 '
             'models conclude with a consequence',
    watch='Learners will end with "in conclusion, as I have discussed '
          'above". Ask them which sentence in their own body '
          'paragraphs the conclusion depends on, and if there is none, '
          'say so',
    time='95 minutes, or 70 without the free grammar production'),
   lead=dict(
    title='A number that describes nowhere',
    body='This is the last cycle of the unit and it is where public '
         'health meets the problem you first met in unit 21: a single '
         'summary of a varied population is true about the summary and '
         'silent about the population. There the number was a median '
         'salary; here it is a reproduction number, and the stakes are '
         'a national policy that will be too strong in most places and '
         'too weak in the few that matter. The reading is hard because '
         'it is about statistics. The writing is hard for a different '
         'reason: the conclusion has to be one the essay has earned.',
    task='Answer these before you read. You answered something similar '
         'in unit 21 cycle 3 - compare what you wrote then.',
    qs=['Is a national rule better than fifty local ones, even if it '
        'fits nowhere exactly?',
        'Who should decide when a place is different enough to be '
        'treated differently?',
        'What would you need to know before accepting a single '
        'national figure?',
        'Has anything in this unit changed what you thought at the '
        'start of it? Which cycle did it?']),
   vocabwork=dict(
    title='The words for a summary and its limits',
    body='The last vocabulary set of the unit is the one with the '
         'widest reach, because every one of these words applies to any '
         'statistic about any population. Six of them you met in unit '
         '21 cycle 3 with salaries instead of infections; meeting them '
         'again on a different subject is the point, and is what the '
         'word list at the end of this cycle marks.',
    figure=dict(kind='field', teaches='vocabulary',
                centre='a summary, and what it hides',
                sub='cycle 5 · six of these are from unit 21 cycle 3',
                branches=[('the summary',
                           ['average', 'median', 'headline figure',
                            'reproduction number']),
                          ('what it hides',
                           ['spread', 'variation', 'range',
                            'error bar']),
                          ('fixing it',
                           ['disaggregate', 'break down by',
                            'stratify', 'local figure']),
                          ('getting it wrong',
                           ['smoothed', 'synchronised', 'masked',
                            'ecological fallacy'])],
                note='The ecological fallacy is inferring something '
                     'about an individual from a figure about a group. '
                     'It has a name because it is so common, and you '
                     'have now met it three times in this book under '
                     'three different disguises.'),
    figure2=dict(kind='collocation', teaches='collocation',
                 node='figure', sub='cycle 5',
                 groups=[('verb + figure',
                          ['the figure masks', 'the figure conceals',
                           'break the figure down',
                           'the figure stands at']),
                         ('adjective + figure',
                          ['headline figure', 'national figure',
                           'local figure', 'provisional figure']),
                         ('figure + preposition',
                          ['a figure for England',
                           'a figure of one point one',
                           'the figure behind the average'])],
                 note='Note "a figure of" for the value and "a figure '
                      'for" for the place or group. Learners reverse '
                      'them and it is immediately visible.'),
    task='Complete each sentence with a word or phrase from this '
         'cycle.',
    items=[
     ('The variation a single number hides is the ____________.',
      None, 'spread'),
     ('To split a national number into its local parts is to '
      '____________ it.', None, 'disaggregate'),
     ('Inferring about one person from a group statistic is the '
      '____________ fallacy.', None, 'ecological'),
     ('The preposition before a value: a figure ____________ one '
      'point one.', None, 'of'),
     ('The preposition before a place: a figure ____________ '
      'England.', None, 'for'),
     ('A figure not yet final is ____________.', None, 'provisional'),
     ('A national average that hides three hotspots ____________ '
      'them.', None, 'masks'),
     ('The bars on a chart showing uncertainty are ____________ '
      'bars.', None, 'error')]),
   builder=dict(
    skill='Task 2: the conclusion your essay has earned',
    qkind='skill',
    explain='Almost every band 6 essay ends the same way: in '
            'conclusion, as discussed above, both sides have merit and '
            'a balance must be struck. The language is fine. The '
            'problem is that the sentence would fit any essay on any '
            'subject, which means it reports nothing about the one '
            'that precedes it, and an examiner reads that instantly. A '
            'conclusion is earned when it states something the body '
            'paragraphs established and could not have been written '
            'before them. Three tests tell you whether yours is. Could '
            'this conclusion be transplanted into an essay on a '
            'different question - if yes, it is a template and not a '
            'conclusion. Does it name at least one thing your own body '
            'paragraphs showed - if not, it is a restatement of the '
            'introduction. And does it say what follows, rather than '
            'what you discussed - the best conclusions are a '
            'consequence, a condition or a cost, not a summary. A '
            'conclusion that says "so a national figure should be '
            'published with its spread" is worth more than four '
            'sentences of balance, and it is shorter.',
    worked=[
     'The question: to what extent should health policy be set '
     'nationally rather than locally?',
     'A template conclusion: “In conclusion, both national and local '
     'approaches have advantages, and a balance should be struck.” '
     'Transplantable into any essay. Names nothing from the body. Says '
     'what was discussed.',
     'An earned conclusion: “A national figure is therefore not wrong '
     'but incomplete, and the practical remedy is small: publish the '
     'spread beside the average, and let local decisions be made '
     'against the local number.”',
     'Notice that the second could not have been written before the '
     'body paragraphs, because it depends on the distinction between '
     'wrong and incomplete that they established. That is what earned '
     'means.'],
    figure=dict(kind='ladder', teaches='band-move',
                criterion='Task Response, in the conclusion',
                sub='cycle 5 · the same essay, three endings',
                rungs=[('5.5', 'In conclusion, I think both sides have '
                        'good points and a balance is needed.', ''),
                       ('6.5', 'In conclusion, while a national figure '
                        'is simpler to act on, local variation means '
                        'that it will fit few places well.',
                        'it names something the essay showed, instead '
                        'of naming the essay'),
                       ('7.5', 'The national figure is therefore not '
                        'wrong but incomplete, and the remedy is '
                        'smaller than the argument suggests: publish '
                        'the spread beside the average, and let local '
                        'decisions be taken against the local number.',
                        'it states a consequence the body earned, and '
                        'proposes something testable')],
                note='The third is the shortest of the three in '
                     'clauses and the longest in content. Length is '
                     'not what is being measured.'),
    task='For each conclusion write TEMPLATE, RESTATEMENT or EARNED, '
         'and one word of reason.',
    items=[
     ('“In conclusion, both views have merit and a balance must be '
      'struck.”', None, 'template'),
     ('“As I said at the start, uptake is a complex issue.”',
      None, 'restatement'),
     ('“The figure is therefore incomplete rather than wrong, and '
      'publishing the spread would cost nothing.”', None, 'earned'),
     ('“To sum up, I have discussed both sides of this question.”',
      None, 'template'),
     ('“If each of the four causes was sufficient, then crediting any '
      'one of them is a political act rather than a scientific one.”',
      None, 'earned'),
     ('“In conclusion, governments should think carefully about this '
      'important issue.”', None, 'template')],
    note='Three of the six are templates and all three are '
         'grammatical, fluent and worth nothing. That is the point of '
         'the exercise: what is wrong with them cannot be fixed by '
         'improving the English.'),
   figures=[
    dict(kind='skeleton', teaches='text-structure',
         title='The last passage, in six boxes',
         sub='cycle 5 · and compare it with cycle 4',
         paras=[('A', 'context', 'The number everyone quotes'),
                ('B', 'definition', 'What an average of a varied '
                 'thing is'),
                ('C', 'claim', 'The national figure describes '
                 'nowhere'),
                ('D', 'evidence', 'Three cities, and everywhere '
                 'else'),
                ('E', 'concession', 'Why a single number is still '
                 'published'),
                ('F', 'consequence', 'What to publish beside it')],
         note='E is the concession and it is strong - a single number '
              'is published because policy has to be made somewhere '
              'and cannot wait for 300 local ones. Read it before you '
              'write anything, because your essay will have to answer '
              'it.'),
    dict(kind='bridge', teaches='paraphrase',
         sub='cycle 5 · the matching-information set turns on these',
         left='THE QUESTION SAYS', right='THE PASSAGE WROTE',
         pairs=[('the number is useless',
                 'incomplete rather than wrong', 'negation'),
                ('split by area', 'disaggregated', 'nominalisation'),
                ('places are very different from each other',
                 'the spread is wide', 'reformulation'),
                ('nobody publishes it',
                 'the variation is rarely reported', 'voice'),
                ('three cities and the rest',
                 'a minority of local authorities', 'hypernym'),
                ('it hides the hotspots', 'the average masks them',
                 'synonym')],
         note='The first is the one worth two marks: the passage '
              'refuses a word the question supplies, and the refusal '
              'is the answer.'),
   ],
   advice='Write the conclusion last and write it in one sentence '
          'first, before you decorate it. If that sentence could be '
          'moved into an essay on a different question, it is a '
          'template and you have not concluded anything. The strongest '
          'conclusions name a consequence, a condition or a cost, and '
          'the very strongest propose something small and testable - '
          'which is also the hardest thing for an examiner to mark '
          'down.',
   debrief=dict(
    read=['The matching-information question about the three cities '
          'has two candidate paragraphs. D gives the figures and C '
          'makes the argument the figures support.',
     'The statement that the author wants the national figure '
     'abandoned is NO: the author calls it incomplete rather than '
     'wrong and proposes publishing something beside it. That is the '
     'first pair on the paraphrase bridge and the scope problem from '
     'cycle 4 at the same time.',
     'Statement 64 is true of the chart in cycle 3 and is not stated '
     'in this passage. A different cycle is not a source.'],
    listen=['The speaker proposes two remedies and calls one of them '
            'impractical. The question asks what she recommends, and '
            'only one of the two survives the adjective.',
     'Question 70 asks for a figure and three are given in the same '
     'minute. The words either side of the gap say which.']),
   outside='Nearly every figure a government publishes about you is an '
           'average of people who are not much like you. Asking for '
           'the spread - how varied were the people this number '
           'describes - is a single question that changes what the '
           'number is worth, and it works on school results, crime '
           'figures, waiting times and wages.',
   recycled=['prevalence', 'median', 'spread', 'evidence', 'cohort',
             'uptake', 'disaggregate'],
   read=[
    dict(preview=True,
         heading='One number for several different places',
         kind='Explainer box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='The last passage of the unit turns on one idea, and it is '
             'the same idea as the median in unit 21 cycle 3, wearing '
             'different clothes. Two hundred words.',
         paras=[
          'A reproduction number tells you how many people, on average, '
          'each infected person passes the disease to. Above one and '
          'the outbreak grows; below one and it shrinks. It is the most '
          'quoted number in any epidemic and one of the least '
          'understood.',
          'The trouble is the word average. A national figure of one '
          'point one may be one point six in three cities and nought '
          'point eight everywhere else. The national number is true, '
          'and it describes nowhere: there is no town in which the '
          'disease is behaving the way the national figure says.',
          'This is exactly the problem you met with the median in unit '
          '21. A single summary of a varied population tells you about '
          'the summary, not about the population, and the more varied '
          'the population the less the summary means. Statisticians '
          'call the variation the spread, and it is almost never '
          'published beside the headline number.',
          'The practical consequence is that a national policy set by a '
          'national number will be too strong in most places and too '
          'weak where it matters. That is the argument of the passage '
          'you are about to read, and it is an argument about '
          'statistics rather than about medicine.'],
         items=[
          ('A reproduction number above one means the outbreak '
           '____________.', None, 'grows',
           'Paragraph 1: below one and it shrinks.'),
          ('A national figure may describe ____________, if the '
           'variation between places is large.', None, 'nowhere',
           'Paragraph 2, where one point one is one point six in three '
           'cities.'),
          ('The variation that is almost never published beside the '
           'headline is the ____________.', None, 'spread',
           'Paragraph 3, which also refers back to the median in unit '
           '21.')]),
    dict(heading='Why a single reproduction number misleads',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and sentence completion',
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
          (
           'Which paragraph explains that most infected people infect '
           'nobody?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'],
           1,
           'A large majority pass it to nobody while a small minority '
           'produce many cases.',
           {0: 'Paragraph 1 describes how the figure was used.', 2: 'Paragraph 3 explains why such an average misleads.', 3: 'Paragraph 4 describes the problem of regional '
               'averaging.'}),
          (
           'Which paragraph describes the problem of regional '
           'averaging?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           1,
           'A national figure below one can contain a city in rapid '
           'growth.',
           {0: 'Paragraph 3 explains why such an average misleads.', 2: 'Paragraph 5 is about the delay in the estimate.', 3: 'Paragraph 6 reports what the producers said.'}),
          (
           'Which paragraph argues that scientists were not simply '
           'ignored?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'],
           2,
           'The number was converted into a usable form, and the '
           'conversion destroyed the information.',
           {0: 'Paragraph 5 is about the delay in the estimate.', 1: 'Paragraph 6 reports the warnings that were given.', 3: 'Paragraph 8 asks what better practice would look like.'}),
          (
           'The writer believes the figure should never have been '
           'calculated.', ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph calls it a reasonable summary with no '
           'better alternative proposed.',
           {0: 'Yes would need that view; the final paragraph calls it '
               'a reasonable summary.', 2: 'Not Given is wrong because the writer judges the '
               'figure.'}),
          (
           'The writer believes the people producing the estimates '
           'concealed the uncertainty.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 6 says they stated it repeatedly and in writing.',
           {0: 'Yes would need concealment; paragraph 6 says they '
               'stated it in writing.', 2: 'Not Given is wrong because what they published is '
               'described.'}),
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
         task='A recorded discussion · multiple choice and sentence completion', band='l4', qtype='Questions 62-67',
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
           ['the communication', 'the models', 'the government', 'the data'],
           1,
           'He states that the models carried their uncertainty '
           'properly.',
           {0: 'Communication is exactly what he does criticise.', 2: 'He names identifiable meetings rather than the '
               'government.', 3: 'The data is not what either of them faults.'}),
          ('The word Wrzesniewski resists is ____________.', None,
           'system',
           'Because it sounds as though nobody did it, when '
           'identifiable people did.'),
          ('He says answering properly eventually reads as',
           ['caution', 'evasion', 'expertise', 'disagreement'], 1,
           'Which is the point at which a central estimate gets given.',
           {0: 'Caution is how it is meant rather than how it is '
               'heard.', 2: 'Expertise is not how the repeated range is received.', 3: 'Disagreement is not what the questioner hears.'}),
          ('Agbaje says the fix is',
           ['scientific', 'procedural', 'legal', 'political'], 1,
           'An agreed sentence, the same every week.',
           {0: 'He says the models did their part properly.', 2: 'No legal change is proposed by either speaker.', 3: 'He proposes an agreed form of words, not a political '
               'fix.'}),
          ('Why did the modellers keep producing a national figure?',
           ['It was accurate', 'It was asked for', 'Regions were synchronised', 'It was required by law'],
           1, 'Though they knew regions were not synchronised.',
           {0: 'They knew the national figure was nobody\u2019s.', 2: 'They knew the regions were not synchronised.', 3: 'No legal requirement is mentioned in the exchange.'}),
          ('What do they conclude about the format?',
           ['It should be decided during an emergency', 'It should be decided before the next one', 'It cannot be fixed', 'It should be left to scientists'],
           1, 'Because nobody reads an annexe during an emergency.',
           {0: 'Deciding during an emergency is what went wrong.', 2: 'They end by agreeing on a fix, not on impossibility.', 3: 'The fix they reach is procedural and shared.'})])],
   speak=dict(
    part='Part 3', focus='Models and the decisions made from them',
    sounds=[('Hedges have to be said at speed or they stop being hedges. As '
             'far as I can tell, on the evidence we have and it depends what '
             'you mean by should each take under a second.'),
            ('A hedge said slowly sounds like hesitation; said at speed it '
             'sounds like precision. The words are identical and the examiner '
             'marks them differently.'),
            ('Choose three hedges and say each one fifty times this week until '
             'it is a single unit of sound. Then attach each to a sentence '
             'from this unit.'),
            ('The stress inside a hedge is light and falls once: as FAR as I '
             'can tell. Stressing every word in it makes a short phrase into a '
             'long one.'),
            ('Record yourself on whether travel restrictions worked. Time your '
             'hedges. Anything over a second and a half is costing you fluency '
             'rather than buying you accuracy.')],
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
         model65=[
                  'Some people say governments should be judged on how '
                  'well they handled an epidemic. I agree, but the '
                  'judgement has to be made carefully.',
                  'There are good reasons to judge. Governments make '
                  'decisions that affect how many people die, and if '
                  'they are never judged they have little reason to '
                  'prepare. Comparing countries also shows which '
                  'measures worked, which is how preparations improve.',
                  'But comparison is harder than it looks. Countries '
                  'differ in age, density and how deaths are counted, '
                  'so a simple league table may compare measurement '
                  'rather than performance. Decisions also had to be '
                  'made quickly, with incomplete information, and a '
                  'decision can be reasonable at the time and wrong '
                  'afterwards.',
                  'I think governments should be judged on their '
                  'decisions rather than on their outcomes: whether '
                  'they acted on the information available, prepared '
                  'in advance, and corrected course when evidence '
                  'changed. Judging outcomes alone rewards luck, and a '
                  'government that was lucky learns nothing.',
                  ],
         gap65=[
                'It separates the quality of a decision from the '
                'quality of its outcome and applies that distinction '
                'throughout.',
                'It explains what happens to uncertainty as it travels '
                'through an institution, which is why the published '
                'numbers looked firmer than they were.',
                'It says what a fair comparison between countries '
                'would require, instead of noting that comparison is '
                'difficult.',
                ],
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
    ref='L16',
    context=[
     'From the passage you have just read:',
     'With hindsight the national threshold was set too high, and three '
     'cities paid for it. That is not the same as saying the decision '
     'was unreasonable. On the information available in February, when '
     'the local figures were six weeks behind and the spread was not '
     'being published at all, a single national number was the only '
     'instrument anyone had. The question worth asking is not whether '
     'the decision was right but what would have had to be true for a '
     'better one to be possible.'],
    notice=[
     ('The writer distinguishes two judgements about the same '
      'decision. Copy out the phrase that marks each.',
      'With hindsight; On the information available in February'),
     ('The last sentence replaces one question with another. What '
      'kind of question does it ask instead?',
      'not a yes-or-no question about rightness but a question about '
      'what would have had to be true')],
    noticetask='Answer both from the paragraph above, which you met '
               'earlier in this cycle.',
    contrast='Judging a decision and judging an outcome are different '
             'operations and English marks the difference with a small '
             'fixed set of phrases: with hindsight, on the information '
             'available at the time, in retrospect, it was defensible. '
             'Compare "the decision was wrong" with "the decision was '
             'defensible and the outcome was bad". The first is an '
             'accusation and invites a defence; the second is an '
             'analysis and invites a question about what would have '
             'had to change. In Task 2 this is the move that rescues '
             'an essay stuck between two absolutes, and it pairs '
             'naturally with replacing a yes-or-no question with a '
             'how-much one.',
    task2='Rewrite each so that the decision and the outcome are '
          'judged separately.',
    items2=[
     ('They were wrong to set it nationally. ____________',
      None, 'With hindsight the national threshold was too high, '
      'which is not to say the decision was unreasonable.'),
     ('Correct: In hindsight it was a mistake. ____________',
      None, 'With hindsight it was a mistake.'),
     ('Turn into a how-much question: was the policy responsible for '
      'the deaths? ____________',
      None, 'The question is not whether the policy was responsible '
      'but how much of the excess it explains.'),
     ('Correct: on the information which was available at the time, '
      'they could not to know. ____________',
      None, 'on the information available at the time, they could not '
      'have known')],
    task3='Now write it yourself. Take a decision described anywhere in '
          'this unit - the national threshold, the leaflet campaign, '
          'the Saturday opening - judge the outcome, judge the '
          'decision separately, and then replace the yes-or-no '
          'question with a how-much one. Eighty to a hundred words.',
    items3=10,
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
