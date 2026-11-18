# -*- coding: utf-8 -*-
"""Unit 30 - Sport: Money and Ethics. IELTS Volume 3, band 6.0."""

_PIE_A = dict(kind='pie', teaches='data',
              title='Income sources: Harlow Vale FC',
              sub='per cent of total income, 2023',
              slices=[('Broadcast rights', 54), ('Gate receipts', 14),
                      ('Sponsorship', 22), ('Other', 10)])

_PIE_B = dict(kind='pie', teaches='data',
              title='Income sources: Carrick Athletic',
              sub='per cent of total income, 2023',
              slices=[('Broadcast rights', 18), ('Gate receipts', 41),
                      ('Sponsorship', 19), ('Other', 22)])

_TAB = dict(kind='table', teaches='data',
            title='Four clubs: income, wages and league '
                                'position',
            sub='2023, income and wages in millions',
            headers=['Club', 'Income', 'Wages', 'Wages as % of income',
                     'Position'],
            widths=[1.25, 0.8, 0.8, 1.35, 0.8],
            rows=[['Harlow Vale', '186', '151', '81', '4'],
                  ['Carrick Athletic', '29', '17', '59', '11'],
                  ['Dunmore City', '94', '88', '94', '17'],
                  ['Pellow Rangers', '41', '19', '46', '6']])

UNIT = dict(
 n=30, vol=3, level='B2', band='6.0',
 theme='Sport: Money and Ethics',
 opener=(
   'The last unit of Volume 3. A club’s membership categories, four families '
   'counting what sport costs, two pie charts and a table on the same '
   'question, and the volume’s hardest reading: what happens to a sport when '
   'the prize gets large, and why every attempt to limit spending has been '
   'met by a structure designed to go round it. The unit ends with the full '
   'timed Reading paper.'),

 field='sport',
 unitmap={'kind': 'unitmap', 'teaches': 'navigation', 'n': 30, 'theme': 'Sport: Money and Ethics', 'rows': [('Club membership and facilities', 'Multiple choice: when two options are both true', 'Multiple choice · sentence completion · short answer · Part 1'), ('Paying to play', 'Multiple choice: the option that is true and not the reason', 'Yes/No/Not Given · matching features · Part 2'), ('Where the money comes from', 'Task 1: charts and a table, joined explicitly', 'Matching information · note completion · Task 1 Academic'), ('Why money changes a sport', 'Matching headings: incentive and consequence', 'Matching headings · Yes/No/Not Given · Part 4'), ('Whether rules can hold', 'Task 2: an evaluative claim and its standard', 'Matching information · Yes/No/Not Given · Task 2')], 'note': 'The last unit of the first ten. Everything in it is revision at speed except cycle 5, which teaches the one thing a whole book of evidence has been leading to: that an evaluation needs a standard before it can be argued about at all.'},
 sceneintro='Eight things from a sports club, and the words for them. Six are used in cycle 1 and five come back in cycle 2, where the subject is who can afford them.',
 scene={'kind': 'scene', 'teaches': 'activate', 'title': 'Unit 30 · a club, on a Saturday', 'instr': 'Write the number of each thing beside its word. Two words in the bank are not in the picture.', 'cells': [('brief', 'code of conduct'), ('coin', 'subscription'), ('people', 'welfare officer'), ('clock', 'fixture list'), ('note', 'consent section'), ('chart', 'gate receipts'), ('envelope', 'background check'), ('cap', 'qualifying line')], 'bank': ['code of conduct', 'subscription', 'welfare officer', 'fixture list', 'consent section', 'gate receipts', 'background check', 'qualifying line', 'safeguarding', 'sponsorship'], 'answers': ['code of conduct', 'subscription', 'welfare officer', 'fixture list', 'consent section', 'gate receipts', 'background check', 'qualifying line'], 'note': 'Answers: 1 code of conduct · 2 subscription · 3 welfare officer · 4 fixture list · 5 consent section · 6 gate receipts · 7 background check · 8 qualifying line. Not in the picture: safeguarding, sponsorship.'},
 puzzle={'kind': 'puzzle', 'teaches': 'curiosity', 'title': 'Where a club’s money comes from', 'question': 'One of these five has grown from almost nothing to the largest in forty years. Which, and what would you expect that to have changed about the sport?', 'bars': [('Gate receipts', 11), ('Broadcast rights', 54), ('Sponsorship', 19), ('Matchday other', 7), ('Member subscriptions', 9)], 'mark': 1, 'ylab': '% of total revenue, top-division clubs', 'note': 'Cycle 4 is about what follows from that bar. Write your guess in the margin before you read it: the answer is not mainly about money.'},
 cycles=[
  dict(
   sub='Club membership and facilities',
   step=1,
   notes=dict(
    serves='Multiple choice and short answer, Reading Parts 1-2; note completion in Listening Part 1',
    because='The hardest multiple-choice questions give two options that are both true of the passage, and only one of which answers the question asked - which is not a reading difficulty but a question-reading one',
    skill='Choosing between two true options by re-reading the stem',
    evidence='Unit 21 cycle 1 taught reading an option as a claim; this is what remains once a learner does that, and the census shows multiple choice in every Part 1 of this book',
    watch='In question 4 both B and C are true of the handbook. The stem asks what members MUST do and only one of them is an obligation. Expect it',
    time='75 minutes, or 55 without the free grammar production'),
   lead=dict(
    title='A club, and its paperwork',
    body='A sports club is a voluntary organisation that has acquired, over about thirty years, the documentation of a small employer: a code of conduct, a safeguarding policy, background checks, consent forms, a complaints procedure. Most of it is there for good reasons and all of it is read by almost nobody. This cycle is that paperwork, and the skill is the one you need whenever two answers are both true.',
    task='Answer these from your own experience. Three or four sentences each.',
    qs=[
        'Have you belonged to a club? What did you have to sign?',
        'What would make you read a code of conduct rather than tick a box?',
        'Who should check the adults who coach children, and how often?',
        'Is there a point at which paperwork stops protecting people and starts protecting the club?',
       ]),
   vocabwork=dict(
    title='The language of belonging to something',
    body='Sixteen words from a club’s documents. By unit 30 the institutional register should be nearly automatic - this is the eighth institution in this book to write to you - so the work here is in the safeguarding vocabulary, which is precise, recent and almost never taught.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'joining a club', 'sub': 'cycle 1 · the eighth institution in this book', 'branches': [('joining', ['subscription', 'membership year', 'qualifying line', 'pro rata']), ('the rules', ['code of conduct', 'disrepute', 'sanction', 'suspension']), ('protecting people', ['safeguarding', 'welfare officer', 'background check', 'consent section']), ('playing', ['fixture', 'eligibility', 'registration', 'forfeit'])], 'note': 'Safeguarding is the technical word for protecting children and vulnerable adults, and it is not a synonym for safety: a safeguarding concern is about a person’s treatment and a safety concern is about the pitch.'},
    figure2={'kind': 'family', 'teaches': 'word-formation', 'sub': 'cycle 1 · the last word-family table of the book', 'rows': [(('sub-scribe', 2), ('sub-scrip-tion', 2), ('sub-scrib-er', 2), '', ''), (('qual-i-fy', 1), ('qual-i-fi-ca-tion', 4), '', ('qual-i-fied', 1), ''), (('sus-pend', 2), ('sus-pen-sion', 2), '', ('sus-pen-ded', 2), ''), (('con-sent', 2), ('con-sent', 2), '', '', ''), (('e-lect', 2), ('e-lec-tion', 2), '', ('e-lec-ted', 2), '')], 'note': 'Subscription means the annual fee here and the act of signing up elsewhere, and a gap will want the first. Consent is noun and verb with the same stress, which you met in unit 25.'},
    task='Complete each sentence with a word from this cycle, in the right form.',
    items=[
     ('The annual fee for membership is the ____________.', None,
      'subscription'),
     ('The date after which a new member pays a reduced fee is the qualifying ____________.', None,
      'line'),
     ('Protecting children and vulnerable adults is ____________.', None,
      'safeguarding'),
     ('A temporary exclusion from playing is a ____________.', None,
      'suspension'),
     ('Being allowed to play for a team is ____________.', None,
      'eligibility'),
     ('Fees charged in proportion to the part-year remaining are charged ____________ rata.', None,
      'pro'),
     ('The person responsible for members’ welfare is the welfare ____________.', None,
      'officer'),
     ('Behaviour bringing the club into disrepute may attract a ____________.', None,
      'sanction'),
    ]),
   builder=dict(
    skill='Multiple choice: two true options, one answer',
    qkind='skill',
    explain='The hardest multiple-choice questions in this paper do not contain three false options. They contain two false ones and two true ones, and only one of the two true ones answers the question asked. This is not a reading difficulty and cannot be solved by reading the passage again; it is solved by reading the stem again, which candidates almost never do once they have found something that matches. Three things in a stem decide between two true options. The verb: must, may, should and is encouraged to pick out different sentences, as you learned in unit 26. The scope word: the main reason, one reason, all members, some members. And the question word: what, why, when and who send you to different parts of the same sentence, and an option answering the wrong one of those is the commonest wrong answer in the paper. When two options survive your first pass, do not reread the passage. Reread the stem, word by word, and the loser will usually be obvious in about four seconds.',
    worked=[
      'The handbook: “Members must complete the consent section before their first fixture. Members are encouraged to attend the welcome evening, at which the code of conduct is explained.”',
      'STEM: what must a new member do before playing?',
      'Option B: attend the welcome evening. True of the handbook, and encouraged rather than required.',
      'Option C: complete the consent section. True of the handbook, and required.',
      'Both options are true. The word must in the stem settles it in four seconds, and nothing in the passage needed rereading.',
     ],
    figure={'kind': 'anatomy', 'teaches': 'question-anatomy', 'qtype': 'Multiple choice', 'sub': 'cycle 1, question 4', 'stem': 'What must a new member do before their first fixture?', 'options': ['attend the welcome evening', 'complete the consent section', 'pay the full annual subscription', 'meet the welfare officer'], 'answer': 1, 'why': 'The handbook says members must complete the consent section before their first fixture. Must in the stem, must in the passage.', 'trap': (0, 'Attending the welcome evening is in the handbook, is sensible, and is encouraged rather than required. It is a true statement about the club and not an answer to this question.'), 'note': 'Options A and B are both true of the handbook. Options C and D are not. The difficulty is entirely between the two true ones and is settled by one word of the stem.'},
    task='For each stem and pair of true options, say which answers the question and which word decides it.',
    items=[
     ('MUST do before playing: attend the evening / complete the consent section.', None,
      'consent section, must'),
     ('WHY the fee rose: costs rose / members voted for it.', None,
      'costs rose, why'),
     ('WHO checks coaches: the welfare officer / the county board.', None,
      'depends on the stem, who'),
     ('The MAIN reason for the deficit: pitch hire / lost sponsorship.', None,
      'the larger one, main'),
     ('ALL members pay: the subscription / the match fee.', None,
      'subscription, all'),
     ('WHEN the suspension ends: after four weeks / after a hearing.', None,
      'the stated date, when'),
    ],
    note='Every one of the six is decided by a single word in the stem - must, why, who, main, all, when - and in every one both options are true of the passage. Rereading the passage cannot help with any of them.'),
   figures=[
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 1 · six moves the questions make', 'pairs': [('has to', 'is required to', 'synonym'), ('we would like you to', 'members are encouraged to', 'voice'), ('the yearly fee', 'the annual subscription', 'nominalisation'), ('they may not play', 'eligibility is withdrawn', 'negation'), ('coaches, officials and volunteers', 'those in regulated roles', 'hypernym'), ('checking an adult’s record', 'a background check', 'reformulation')], 'note': 'The first two are the pair this cycle is about: an obligation and a recommendation, four lines apart in the same document.'},
   ],
   advice='When two multiple-choice options both look true, reread the stem rather than the passage. The deciding word is almost always in the question - must, main, why, all - and it takes four seconds, where another pass through the passage takes a minute and finds both options again.',
   debrief=dict(
    read=[
      'Question 4 has two options that are both in the handbook. The word must in the stem decides it, and it is the fourth word of the question.',
      'Question 7 asks why and one option says when. Both are true of the same sentence.',
      'The short-answer question has a three-word answer and a seven-word one. The limit decides, as it did in unit 27 cycle 1.',
     ],
    listen=[
      'The secretary gives two fees, one full and one pro rata. The notes say which member type.',
      'Question 13 asks who is responsible and three roles are named in one sentence.',
     ]),
   outside='When two answers are both true, the question was asking something narrower than you thought. That is as true of an argument, an interview and a form as it is of this paper, and rereading the question is almost always cheaper than rereading everything else.',
   recycled=[
      'eligible',
      'criteria',
      'consent',
      'code',
      'sanction',
      'subscription',
     ],
   read=[
    dict(preview=True,
         heading='Three words from a club handbook',
         kind='Glossary box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='Two hundred words before four hundred, and the third of these is the one that decides who can play.',
         paras=[
          'A subscription is the annual fee for membership, and it is not the same as a match fee, which is paid each time you play. Most clubs charge both, and a document that mentions one usually mentions the other within two lines, which is how a question gets built.',
          'Safeguarding is the protection of children and vulnerable adults from harm, and it is a technical term rather than a general one. A safeguarding concern is about how somebody has been treated; a safety concern is about the surface of the pitch. Clubs are required to have a welfare officer, and to check the background of anybody in a regulated role.',
          'The qualifying line is the date in the membership year after which a new member pays a reduced, pro rata fee. It is an administrative detail that decides, in practice, whether somebody joins in March or waits until September.',
          'Three words: one about money, one about protection, one about a date. The third sounds the least important and is the one most members are affected by.',
         ],
         items=[
          ('The annual fee for membership is the ____________.',
           None, 'subscription',
           'Paragraph 1: it is not the same as a match fee.'),
          ('The protection of children and vulnerable adults is ____________.',
           None, 'safeguarding',
           'Paragraph 2, which distinguishes it from safety.'),
          ('The date after which a new member pays pro rata is the ____________ line.',
           None, 'qualifying',
           'Paragraph 3: it decides whether somebody joins in March or September.'),
         ]),
    dict(heading='Community club — membership categories',
         kind='Club information',
         task='Multiple choice and sentence completion',
         band='gt_short', qtype='Questions 1-5',
         skill=('A table of categories is read by finding the one condition '
                'that moves you between them',
                ['Membership schemes look like a list of prices and are '
                 'really a set of boundaries: age, residence, hours of use.',
                 'Find the condition each boundary turns on before reading '
                 'any price. Questions here are nearly always about the '
                 'boundary and not the amount.']),
         paras=[
          'Junior membership covers players under eighteen on 1 September and '
          'costs £48 a year, including coaching on two evenings a week and '
          'entry to league fixtures. A player who turns eighteen during the '
          'season remains a junior until the following September, which '
          'matters because adult subscription is almost four times as much.',
          'Student membership costs £75 and requires proof of full-time '
          'study. Adult membership is £185, reduced to £120 where a member '
          'lives more than twenty miles from the ground and therefore trains '
          'elsewhere. The reduction is not advertised and must be asked '
          'for.',
          'Family membership at £240 covers two adults and any number of '
          'juniors at one address. Two adults and two juniors paying '
          'separately would pay £466, so the family category is the single '
          'largest saving in the scheme and is taken up by about a third of '
          'those entitled to it.',
          'All members must complete the code of conduct form annually, and '
          'all junior members require a parent or guardian to sign the '
          'consent section. A junior without a completed consent section may '
          'train but may not be selected for a fixture, which is discovered '
          'most often on a Saturday morning.',
          'Facility hire is free to members outside coaching hours and '
          '£18 an hour to non-members. Members may bring one guest a month '
          'without charge; a second guest in the same month is charged at the '
          'non-member rate.'],
         items=[
          (
           'A player who turns eighteen in January remains a junior '
           'until',
           ['January', 'the end of the season', 'the following September', 'their next birthday'],
           2,
           'Paragraph 1, which matters because adult membership costs '
           'almost four times as much.',
           {0: 'The birthday itself does not change the category.', 1: 'The category runs to September, which outlasts the '
               'season.', 3: 'The next birthday is a year after the change of age.'}),
          ('The reduced adult rate applies to members who',
           ['are students', 'live more than twenty miles away', 'train twice a week', 'joined before September'],
           1, 'Paragraph 2, and the reduction must be asked for.',
           {0: 'Students have their own category at seventy-five '
               'pounds.', 2: 'Training twice a week is what junior membership '
               'includes.', 3: 'Date of joining does not affect the adult rate.'}),
          ('A junior without a signed consent section may',
           ['neither train nor play', 'train but not be selected', 'play but not train', 'train for one month'],
           1,
           'Paragraph 4, discovered most often on a Saturday morning.',
           {0: 'Paragraph 4 allows training without the consent '
               'section.', 2: 'Selection for fixtures is exactly what is barred.', 3: 'No one-month allowance appears in paragraph 4.'}),
          ('Family membership costs £____________.', None, '240',
           'Paragraph 3, against £466 if four members paid separately.'),
          ('Non-member facility hire: £____________ an hour', None, '18',
           'Paragraph 5, with members free outside coaching hours.')]),
    dict(heading='Safeguarding and codes of conduct',
         kind='Policy notice', task='Short answer and sentence completion',
         band='gt_short', qtype='Questions 6-9',
         paras=[
          'Every adult working with junior members holds a current '
          'background check and is named on the list displayed in the '
          'clubhouse. A parent may ask to see the certificate itself, and the '
          'club will show it; the club will not photocopy it, for reasons of '
          'the certificate holder’s own privacy.',
          'The club appoints two welfare officers, of whom at least one is '
          'not a coach. A concern may be raised with either of them, in '
          'person or by the email address on the noticeboard, and will be '
          'recorded whether or not any action follows.',
          'Coaches do not transport junior members alone. Where transport is '
          'unavoidable, a second adult travels, and a parent is told in '
          'advance which adults those are. This rule is the one most often '
          'relaxed informally and is the one the club will not relax.',
          'The code of conduct applies to parents as well as players. A '
          'parent may be asked to watch from the far side of the ground, and '
          'in two cases in the club’s history has been asked not to attend '
          'for the remainder of a season.'],
         items=[
          ('How many welfare officers does the club appoint?', None, 'two',
           'Paragraph 2, of whom at least one is not a coach.'),
          (
           'The club will show but not photocopy the background check '
           '____________.', None, 'certificate',
           'Paragraph 1, for the certificate holder\u2019s privacy.'),
          ('How many adults travel when transport is unavoidable?', None,
           'two',
           'Paragraph 3, with parents told in advance who they are.'),
          ('Who else does the code of conduct apply to?', None, 'parents',
           'Paragraph 4, who may be asked to watch from the far side.')])],
   listen=[
    dict(heading='Registering a junior player', part='Part 1',
         task='A call to a community sports club · note completion', band='l1',
         qtype='Questions 10-14',
         script=[
          ('Secretary', 'Harlow Vale juniors, Niamh speaking.'),
          ('Caller', 'Hello. I would like to register my son. He is '
           'seventeen.'),
          ('Secretary', 'Seventeen on the first of September?'),
          ('Caller', 'He was seventeen in June, so yes.'),
          ('Secretary', 'Then he is a junior for this whole season, which is '
           'forty-eight pounds rather than a hundred and eighty-five, and he '
           'stays a junior until next September even though he turns '
           'eighteen in June.'),
          ('Caller', 'That is a considerable difference.'),
          ('Secretary', 'It is the thing I most often have to explain twice. '
           'Do you have other children who might play?'),
          ('Caller', 'A daughter, who is twelve, and she probably would.'),
          ('Secretary', 'Then look at family membership before you pay '
           'anything. Two adults and any number of juniors, two hundred and '
           'forty pounds. If your daughter joins and either parent plays or '
           'uses the gym, it is cheaper, sometimes by a great deal.'),
          ('Caller', 'I had not even seen that on the form.'),
          ('Secretary', 'About a third of the families who would gain from '
           'it take it, which tells you something about the form. Now, two '
           'things I need from you. The code of conduct, which everybody '
           'signs each year, and the consent section, which a parent signs '
           'for a junior.'),
          ('Caller', 'Can I do those online?'),
          ('Secretary', 'The code yes, the consent section no, it needs a '
           'signature. And I would do it this week rather than next, because '
           'a junior without consent can train and cannot be selected, and '
           'parents find that out at nine on a Saturday morning with a bag '
           'in the car.'),
          ('Caller', 'Understood. Who do I send it to?'),
          ('Secretary', 'To me, or to either welfare officer — there are two '
           'and one of them is not a coach, which is deliberate.')],
         items=[
          ('Junior membership: £____________ a year', None, '48',
           'Against £185 for adult membership.'),
          ('Family membership: £____________', None, '240',
           'Covering two adults and any number of juniors.'),
          ('About ____________ of eligible families take family '
           'membership.', None, 'a third',
           'Which the secretary says tells you something about the form.'),
          ('The ____________ section cannot be completed online.', None,
           'consent', 'Because it needs a parent’s signature.'),
          ('A junior without consent may train but may not be '
           '____________.', None, 'selected',
           'Which parents discover on a Saturday morning.')]),
    dict(heading='A short talk: paying to play', part='Part 2',
         task='A talk at a sports participation conference · sentence completion and multiple choice', band='l2',
         qtype='Questions 15-18',
         script=[
          ('Speaker', 'I ran a county participation programme for nine years '
           'and I want to correct the way cost is usually discussed, because '
           'the way we discuss it guarantees that our interventions '
           'fail.'),
          ('Speaker', 'We talk about the fee. The fee is almost never the '
           'barrier. Forty-eight pounds a year for junior membership is four '
           'pounds a month and is genuinely affordable to most families who '
           'do not join.'),
          ('Speaker', 'What stops people is the accumulation of small '
           'unpredictable costs around the fee. Boots, which are outgrown. '
           'The away fixture that needs a lift and the parent who cannot '
           'drive. Three pounds for the tournament entry, told to you on '
           'Thursday for Saturday. A kit change in the second year. The fee '
           'is small, and it is the third small fee that week.'),
          ('Speaker', 'And the second thing, which took me years to see: '
           'unpredictability costs more than amount. A family on a tight '
           'budget can plan for forty-eight pounds in September. They cannot '
           'absorb four pounds demanded with two days’ notice, and the child '
           'then misses the fixture, and after three missed fixtures the '
           'child stops going.'),
          ('Speaker', 'Which is why our subsidy schemes have had such poor '
           'results. We wrote off the membership fee, which was not the '
           'problem, and left every unpredictable cost in place. '
           'Participation among the families we targeted rose by about two '
           'per cent, and we reported that as a success for three years.'),
          ('Speaker', 'What worked, when we finally tried it, was dull. One '
           'payment in September covering everything including transport and '
           'tournament entries, a boot exchange at the clubhouse, and a rule '
           'that no cost may be announced with less than three weeks’ '
           'notice. Participation in the targeted group rose eleven per cent '
           'and the total cost to us fell, because the subsidy was no longer '
           'going to families who did not need it.')],
         items=[
          (
           'The speaker says the membership fee is almost never the '
           '____________.', None, 'barrier',
           'Four pounds a month, affordable to most families who do '
           'not join.'),
          (
           'What stops people is accumulated small ____________ costs.',
           None, 'unpredictable',
           'Boots, lifts, tournament entries announced on Thursday.'),
          (
           'The subsidy schemes failed because they removed the '
           '____________, which was not the problem.', None,
           'fee', 'Leaving every unpredictable cost in place.'),
          ('What did the successful approach include?',
           ['A larger subsidy', 'One September payment covering everything and three weeks\u2019 notice of any cost', 'Free coaching only', 'A new clubhouse'],
           1, 'Participation rose eleven per cent and total cost fell.',
           {0: 'A larger subsidy is what he says did not work.', 2: 'Free coaching is already part of junior membership.', 3: 'No building work is part of the approach.'})])],
   speak=dict(
    part='Part 1', focus='Sport you play or watch',
    intro=('Two or three sentences each. A specific sport and a specific '
           'detail.'),
    qs=['Do you play any sport?',
        'Do you watch sport on television?',
        'Was sport important at your school?',
        'Is sport expensive where you live?'],
    shape=[('answer', 'Badminton, once a week, badly.'),
           ('support', 'There is a court at the community centre for four '
            'pounds an hour.'),
           ('follow-up', 'Which is about the only sport near me that has '
            'stayed that cheap.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking a club to review a membership decision',
         prompt=('A sports club has refused you or a family member a reduced '
                 'membership rate. Write a letter to the club committee. In '
                 'your letter: explain the decision; say why you believe it '
                 'is wrong; say what you would like the committee to do. '
                 'Write at least 150 words.'),
         model=[
          'Dear Members of the Committee,',
          'I am writing about the decision of 14 October refusing my '
          'application for the reduced adult rate, and to ask the committee '
          'to review it.',
          'The reduction, as published in the membership information, applies '
          'to a member who lives more than twenty miles from the ground and '
          'who therefore trains elsewhere. My application was refused on the '
          'ground that I attend the clubhouse regularly, which I do, as a '
          'parent of a junior member on Tuesday evenings.',
          'I believe the decision misreads the condition. The published rule '
          'concerns where a member trains, and my own training takes place at '
          'the Fennimore Lane courts, twenty-three miles from the ground, as '
          'the attached fixture record shows. Attending as a parent is not '
          'training, and the information makes no mention of attendance in '
          'any form.',
          'I should be grateful if the committee would reconsider the '
          'application against the published wording. If the committee '
          'intends the reduction to depend on attendance rather than on '
          'training, I would ask that the information be amended, since '
          'eleven other members live beyond the boundary and three of them '
          'have told me they were refused on the same ground.',
          'I am content for this letter to be read at the meeting.',
          'Yours faithfully,',
          'R. Okonkwo-Lindahl'],
         notes=[
          'The letter quotes the published condition and then shows that the '
          'refusal used a different one. Appeals succeed on the gap between '
          'the rule as written and the rule as applied, and almost never on '
          'fairness in general.',
          'The third paragraph concedes the fact relied on — I do attend — '
          'and shows it is irrelevant. Conceding a fact while denying its '
          'relevance is a stronger move than disputing it.',
          'The final request has two branches, and the second one makes the '
          'issue bigger than the writer: eleven members, three refusals. A '
          'committee that can fix a policy rather than make an exception '
          'usually prefers to.'],
         criterion=[('Quoting the published condition exactly',
                     'Task Achievement'),
                    ('Conceding a fact and denying its relevance',
                     'Task Response'),
                    ('A request with a second branch for the committee',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    ref='L27',
    context=[
      'From the letter in this cycle:',
      'I am writing to ask whether the committee would consider waiving the junior subscription for families receiving free school meals. Three neighbouring clubs do so and have reported no fall in income, since the places were previously unfilled. I would be willing to administer the scheme myself and to report on it at the annual meeting.',
     ],
    notice=[
     ('The writer makes a request, gives a reason and offers something. Copy out the offer.', None,
      'I would be willing to administer the scheme myself and to report on it'),
     ('Why "whether the committee would consider" rather than "to waive"?', None,
      'it asks for a decision the committee can actually take at a meeting'),
    ],
    noticetask='Answer both from the letter above, which you read earlier in this cycle.',
    contrast='You met the proposal letter in unit 28 cycle 1, and this is its most useful variant: an appeal, where you are asking for something that costs the reader money. Three things make one succeed. Ask for a decision the reader can take, not for the outcome you want - would consider, rather than will waive. Pre-answer the obvious objection, which for any appeal about money is "we cannot afford it" - hence the three neighbouring clubs and the unfilled places. And offer labour, because a committee refuses requests that create work and accepts requests that arrive with the work attached.',
    task2='Rewrite each appeal so it asks for a decision, answers the objection and offers something.',
    items2=[
     ('Please waive the fee for poorer families.', None,
      'I am writing to ask whether the committee would consider waiving the junior subscription for families receiving free school meals.'),
     ('It will not cost you anything.', None,
      'Three neighbouring clubs do so and report no fall in income, since the places were previously unfilled.'),
     ('Correct: I am writing for ask about the fee.', None,
      'I am writing to ask about the fee.'),
     ('Add the offer.', None,
      'I would be willing to administer the scheme and report on it at the annual meeting.'),
    ],
    task3='Now write the appeal. You want an organisation to waive or reduce a charge for somebody. Ask for a decision they can take, answer the money objection, and offer to do the work. About eighty words.',
    items3=8,
    point='Appeal and reasoned request',
    explain=('An appeal has a standard shape: the decision, the rule, the '
             'gap between them, and the request. The register is formal and '
             'the tone is not aggrieved, because an aggrieved appeal is '
             'easier to refuse.'),
    examples=['I should be grateful if the committee would reconsider the '
              'application against the published wording.',
              'I believe the decision misreads the condition.',
              'Attending as a parent is not training.',
              'If the committee intends the reduction to depend on '
              'attendance, I would ask that the information be amended.'],
    task='Rewrite each complaint as a reasoned appeal.',
    items=[('Your decision was unfair.',
            'I believe the decision applies a condition that does not appear '
            'in the published information.'),
           ('I should get the discount.',
            'I should be grateful if the committee would reconsider my '
            'application against the published wording.'),
           ('You are wrong about where I train.',
            'My training takes place twenty-three miles from the ground, as '
            'the attached fixture record shows.'),
           ('Other people have had the same problem.',
            'Three other members beyond the boundary have been refused on the '
            'same ground, which suggests the wording rather than the '
            'applications.'),
           ('I want an answer.',
            'I am content for this letter to be read at the meeting, and '
            'would welcome a decision in writing.')]),
   vocab=[('subscription', 'the annual fee for membership'),
          ('safeguarding', 'protecting young or vulnerable members'),
          ('code of conduct', 'rules of behaviour members accept'),
          ('welfare officer', 'the person a concern is reported to'),
          ('background check', 'an official check on somebody working with '
           'children'),
          ('fixture', 'a scheduled match'),
          ('consent section', 'the part of a form a parent signs'),
          ('qualifying line', 'the point at which a condition applies')],
   expr=[('I should be grateful if the committee would reconsider',
          'the formal register for an appeal'),
         ('the decision misreads the condition',
          'locates an error in the rule applied'),
         ('Attending as a parent is not training',
          'denies relevance without denying a fact'),
         ('it is the third small fee that week',
          'reframes a cost as an accumulation')],
   trans=['furthermore', 'in this connection', 'as published',
          'if the committee intends'],
  ),

  dict(
   sub='Paying to play',
   step=2,
   notes=dict(
    serves='Yes/No/Not Given, matching features and multiple choice, Reading Part 2; multiple choice in Listening Part 2',
    because='The most expensive wrong answer in multiple choice is an option that states something true and offered as the reason for something it did not cause - and candidates select it because it is true',
    skill='Separating a true fact from the reason the stem is asking for',
    evidence='Unit 21 taught reading options as claims and unit 30 cycle 1 taught choosing between two true ones; this is the last and hardest case, where the true option is also relevant',
    watch='In question 23 the option about boot costs is true and is not the reason take-up fell. The passage gives the reason two lines later. Expect it',
    time='80 minutes, or 60 without the free grammar production'),
   lead=dict(
    title='Eighty pounds, and four hundred and ten',
    body='The subscription is eighty pounds and the season costs four hundred and ten, and nobody is lying about either. Boots, travel, a tour deposit, a kit refresh: each item is reasonable, each is charged by somebody different, and the total is nobody’s responsibility. That structure - a cost that is nobody’s decision - is the thing this cycle is about, and you have met it twice before, in unit 26 with short-term lets and in unit 27 with a non-decision.',
    task='Answer these before you read, and mark which source you expect to agree with.',
    qs=[
        'Add up what one season of something has cost you or your family. Was the headline price most of it?',
        'Who should be responsible for a total that nobody charges?',
        'Would knowing the number in advance have changed anything?',
        'Is a club that cannot afford to waive fees obliged to say so?',
       ]),
   vocabwork=dict(
    title='The vocabulary of cost and access',
    body='Fourteen words. Eight are about money and six are about who is kept out by it, and the second group is the transferable one: barrier, take-up, means-tested and waive appear in every argument about access to anything, and you met four of them in unit 21 cycle 1 about university fees.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'what a season costs', 'sub': 'cycle 2 · and four of these are from unit 21 cycle 1', 'branches': [('the charges', ['subscription', 'match fee', 'kit levy', 'tour deposit']), ('the help', ['subsidy', 'means-tested', 'waive', 'hardship fund']), ('who is kept out', ['barrier', 'take-up', 'unpredictability', 'cumulative cost']), ('the response', ['bundle', 'cap', 'boot exchange', 'flat fee'])], 'note': 'Unpredictability is a barrier in its own right, separately from size: a household can plan for four hundred pounds and cannot plan for an unknown number of forty-pound demands, and the passage argues the second deters more people than the first.'},
    figure2={'kind': 'cline', 'teaches': 'scale', 'title': 'How much of a barrier is it?', 'sub': 'cycle 2 · the language the sources use about the same fee', 'left': 'no obstacle at all', 'right': 'excludes people outright', 'items': [('is affordable for most', 0.06), ('is a consideration', 0.2), ('deters some families', 0.4), ('is a real barrier', 0.6), ('puts the sport out of reach', 0.8), ('excludes a whole group', 0.95)], 'note': 'All four sources in this cycle are describing the same eighty-pound fee. Which phrase each chooses is their whole position, and the matching-features questions are about nothing else - which is the same exercise as unit 24 cycle 2 and unit 25 cycle 2.'},
    task='Complete each with a word or phrase from this cycle.',
    items=[
     ('A fee reduced according to household income is ____________.', None,
      'means-tested'),
     ('To cancel a fee for somebody is to ____________ it.', None,
      'waive'),
     ('The share of those eligible who take part is the ____________.', None,
      'take-up'),
     ('All the charges added together are the ____________ cost.', None,
      'cumulative'),
     ('Not knowing what the next demand will be is ____________.', None,
      'unpredictability'),
     ('Charging one price for everything is a ____________ fee.', None,
      'flat'),
     ('Money set aside to help members in difficulty is a ____________ fund.', None,
      'hardship'),
     ('Selling several things together at one price is a ____________.', None,
      'bundle'),
    ]),
   builder=dict(
    skill='Multiple choice: true, relevant, and not the reason',
    qkind='skill',
    explain='The most expensive distractor in this paper is not false and not irrelevant. It is a true statement about the subject of the question, offered as the answer to a question about cause, and a candidate selects it because everything in it checks out. Boots cost forty pounds: true, in the passage, about the subject, and not why take-up fell. The habit that catches it is to read the stem for the relation it asks about rather than the topic it names. If the stem says why, the answer must be a cause, and an option that is merely a true fact about the same topic is not one. If the stem says what deterred people, the answer must have been given as a deterrent by the passage, not merely have existed. And the giveaway, once you look for it, is that the passage itself usually supplies the actual reason within two lines of the distractor, in a sentence containing because, which meant that, or the result was - because the examiner has to put the right answer somewhere and that is where it goes.',
    worked=[
      'The passage: “Boots cost about forty pounds a pair and are outgrown annually. Take-up fell in 2019, however, because the tour deposit moved from June to February, which meant it fell in the same month as the kit levy.”',
      'STEM: why did take-up fall in 2019?',
      'Option A: boots cost forty pounds and are outgrown annually. True, in the passage, about cost, and not the reason.',
      'Option B: two large charges fell in the same month. The word because is in the passage, pointing at it.',
      'The distractor is the sentence immediately before the answer, which is where it almost always is.',
     ],
    figure={'kind': 'decide', 'teaches': 'decision', 'title': 'Is this option the reason, or just true?', 'sub': 'cycle 2 · three questions, in this order', 'nodes': [('Does the stem ask why, or what caused, or what deterred?', 'the answer must be a CAUSE, not a fact', 'the stem asks what or which - a true fact may be the answer'), ('Is this option given by the passage as a cause - because, so, which meant, the result was?', 'it is a candidate', 'it is true and it is not the answer'), ('Is there another option the passage marks with a causal word?', 'that one is the answer', 'reread the stem - you may be answering the wrong question')], 'note': 'Step two is the whole of it: scan for because, so, which meant and as a result, and the right answer is attached to one of them about four times in five.'},
    task='For each stem and option, write REASON or MERELY TRUE.',
    items=[
     ('WHY take-up fell / boots cost forty pounds.', None,
      'merely true'),
     ('WHY take-up fell / two charges fell in one month.', None,
      'reason'),
     ('WHAT the club charges / a tour deposit.', None,
      'reason'),
     ('WHY families left / the club is twelve miles away.', None,
      'merely true'),
     ('WHY families left / travel costs were not mentioned at joining.', None,
      'reason'),
     ('WHAT deters most / unpredictability of the total.', None,
      'reason'),
    ],
    note='Items one and four are both true, both relevant and both wrong, and in a real paper they would be the most attractive options on the page. The difference is that the passage never attaches a causal word to either of them.'),
   figures=[
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 2 · the matching set turns on these', 'pairs': [('everything added together', 'the cumulative cost', 'nominalisation'), ('the club stopped charging it', 'the fee was waived', 'voice'), ('families on low incomes', 'households below the threshold', 'hypernym'), ('it is not the price that stops them', 'the barrier is not the headline fee', 'negation'), ('fewer children joined', 'take-up fell', 'synonym'), ('nobody knows what it will come to', 'the total is unpredictable', 'reformulation')], 'note': 'The fourth is the claim three of the four sources are arguing about, and it is a negative, which is why scanning will not find it.'},
   ],
   advice='When a multiple-choice stem asks why, scan the passage for because, so, which meant and as a result. The answer is attached to one of them about four times in five, and the most attractive wrong option is usually the sentence immediately before it - true, relevant, and not a cause.',
   debrief=dict(
    read=[
      'Question 23 offers the boot cost, which is true, is about money, and is the sentence before the one containing because.',
      'Two sources describe the same fee and use phrases at opposite ends of the cline. Neither is wrong about the number.',
      'The Yes/No/Not Given statement about hardship funds is reported from a governing body and is not endorsed. The reporting verb is "claims", which by unit 29 you read as a rejection.',
     ],
    listen=[
      'The parent gives four figures and then the total. The question asks for the total, which she says once.',
      'The coach concedes and then reports what the committee will say. The second is not his view.',
     ]),
   outside='A true fact offered as a reason is the commonest move in advertising, politics and every argument about blame. Asking whether the speaker ever said the word because is usually enough to see it.',
   recycled=[
      'means-tested',
      'waive',
      'barrier',
      'evidence',
      'take-up',
      'cumulative cost',
     ],
   read=[
    dict(heading='Four families on the cost of sport',
         kind='Four short texts',
         task='Matching features, multiple choice and Yes/No/Not Given',
         band='gt_short', qtype='Questions 19-24',
         paras=[
          'A  Gudrun: The subscription is not the problem and I wish somebody '
          'would stop congratulating themselves about waiving it. Forty-eight '
          'pounds in September is fine. It is the eleven pounds on a '
          'Wednesday for a tournament on Saturday that ends the season, and '
          'nobody designing these schemes has ever been asked for eleven '
          'pounds on a Wednesday.',
          'B  Matteus: We pay everything and it is a large part of what we '
          'spend. Two children, three sports between them, and I have worked '
          'out that it comes to about nine per cent of our income after rent. '
          'I would not stop, and I would like people to know that affording '
          'something and finding it easy are not the same.',
          'C  Oluwaseun: Transport is the whole of it for us. The club is '
          'four miles away, the fixtures are further, and we have no car. '
          'When the club arranged lifts my daughter played for two seasons. '
          'When the parent who organised that moved away, she stopped, and no '
          'fee changed at any point.',
          'D  Bronwen: I am going to say the unpopular thing. We could afford '
          'it and we stopped anyway, because the whole arrangement had become '
          'four evenings and a Saturday and nobody in the family was enjoying '
          'it. Cost is not the only reason people leave and it is the only '
          'one that gets studied.'],
         items=[
          ('Which person identifies short-notice costs as decisive?',
           ['Gudrun', 'Matteus', 'Oluwaseun', 'Bronwen'], 0,
           'Eleven pounds on a Wednesday for a Saturday tournament.',
           {1: 'Matteus pays in full but finds it a real burden.', 2: 'Oluwaseun names transport as the whole of the problem.', 3: 'Bronwen left for reasons of time rather than cost.'}),
          ('Which person pays in full but finds it a real burden?',
           ['Gudrun', 'Matteus', 'Oluwaseun', 'Bronwen'], 1,
           'About nine per cent of income after rent.',
           {0: 'Gudrun identifies short-notice costs as decisive.', 2: 'Oluwaseun says no fee changed at any point for her '
               'family.', 3: 'Bronwen left for reasons of time rather than cost.'}),
          ('For which person was the barrier unrelated to money?',
           ['Gudrun', 'Matteus', 'Oluwaseun', 'Bronwen'], 2,
           'Transport, and no fee changed at any point.',
           {0: 'Gudrun identifies short-notice costs as decisive.', 1: 'Matteus pays in full but finds it a real burden.', 3: 'Bronwen left for reasons of time rather than cost.'}),
          ('Which person left for reasons of time rather than cost?',
           ['Gudrun', 'Matteus', 'Oluwaseun', 'Bronwen'], 3,
           'Four evenings and a Saturday that nobody was enjoying.',
           {0: 'Gudrun identifies short-notice costs as decisive.', 1: 'Matteus pays in full but finds it a real burden.', 2: 'Oluwaseun stopped when the lifts ended, not over time.'}),
          ('Matteus thinks the cost of sport should be reduced.',
           ['Yes', 'No', 'Not Given'], 2,
           'He describes what it costs his family and says he would '
           'not stop; he proposes nothing.',
           {0: 'Yes would need a proposal, and he makes none.', 1: 'No would need him to defend the cost, which he does '
               'not.'}),
          (
           'Oluwaseun\u2019s daughter stopped playing because the fees '
           'rose.', ['Yes', 'No', 'Not Given'], 1,
           'She stopped when the parent organising lifts moved away, '
           'with no change in fees.',
           {0: 'Yes would need fees; she stopped when the '
               'lift-organising parent moved.', 2: 'Not Given is wrong because the reason is given.'})])],
   listen=[
    dict(preview=True,
         heading='A coach and a parent on the cost of a season',
         part='Preview', task='Sentence completion',
         band='lpre', qtype='Questions P1-P3',
         why='The Part 2 you are about to hear puts figures on this conversation. Ninety seconds on the shape of it first.',
         script=[
          ('Parent',
           'It is eighty pounds for the season. That is not the problem.'),
          ('Coach',
           'Go on.'),
          ('Parent',
           'It is eighty for the season, forty for the boots, twelve a week for the away travel and thirty for the tour deposit in February, and nobody ever says the total out loud because nobody is charging it.'),
          ('Coach',
           'That is fair, and I had not added it up.'),
          ('Parent',
           'Nobody has. Each bit is reasonable. The thing nobody is responsible for is the sum.'),
          ('Coach',
           'So what would help?'),
          ('Parent',
           'Say the number in September. Four hundred and ten pounds, and here is what we can do about it. I would rather be told and offered something than be surprised in February.'),
          ('Coach',
           'The committee will say that putting the number up will frighten people off.'),
          ('Parent',
           'It frightens them off in February instead, and by then their child has made friends and is the one who has to be told.'),
          ('Coach',
           'Which is worse for everybody, including the committee.'),
          ('Parent',
           'Which is worse for everybody. Say four hundred and ten in September, say what help there is, and let people decide while deciding is still easy.'),
         ],
         items=[
          ('The parent says the real difficulty is the ____________.',
           None, 'sum',
           'Her third turn: each bit is reasonable and nobody is responsible for the total.'),
          ('She wants the number said in ____________.',
           None, 'september',
           'Her fourth turn, where she gives the figure.'),
          ('The coach expects the committee to say the number will ____________ people off.',
           None, 'frighten',
           'His last turn, which the parent then answers.'),
         ]),
    dict(heading='Two coaches disagree about fees', part='Part 3',
         task='A conversation at a club committee · sentence completion and multiple choice', band='l3',
         qtype='Questions 25-29',
         script=[
          ('Ferdinand', 'I want to abolish junior fees entirely. Forty-eight '
           'pounds, three hundred juniors, fourteen thousand a year. We could '
           'raise that from the sponsor.'),
          ('Chiara', 'You could, and I think you would be disappointed by '
           'the result, and I say that having wanted the same thing for about '
           'five years.'),
          ('Ferdinand', 'Go on.'),
          ('Chiara', 'The county programme did exactly that. Waived the '
           'membership fee for the families they were targeting and measured '
           'participation afterwards. It went up two per cent. They had '
           'removed the one cost that was predictable and left every '
           'unpredictable one in place.'),
          ('Ferdinand', 'I had not seen those figures. That is a '
           'disappointing number for the amount of money involved.'),
          ('Chiara', 'What worked was one payment in September covering '
           'everything — transport, tournament entries, kit — and a rule '
           'that nothing could be charged on less than three weeks’ notice. '
           'Eleven per cent, and it cost them less.'),
          ('Ferdinand', 'Why did it cost less?'),
          ('Chiara', 'Because a waived fee goes to everybody who asks, '
           'including the families who were always going to pay. A bundled '
           'single payment is chosen by the people who need the '
           'predictability.'),
          ('Ferdinand', 'Then let me keep half my proposal. I will drop the '
           'abolition and I want the sponsorship money spent on the bundle '
           'and the boot exchange rather than on the new scoreboard.'),
          ('Chiara', 'I will support that, and I would add one thing you '
           'will not like. The three-week notice rule has to bind the '
           'coaches, which means you cannot enter a tournament you hear about '
           'on the Monday.'),
          ('Ferdinand', 'That is the part that will actually be hard.'),
          ('Chiara', 'It is the part the county programme nearly abandoned, '
           'and the only reason it worked is that they wrote it down and '
           'published it, so that a parent could point at it when a coach '
           'forgot.'),
          ('Ferdinand', 'Then write it down and I will be the first one it '
           'catches, which is probably the only way it survives past '
           'Christmas.'),
          ('Chiara', 'That is the most useful thing anybody has offered in '
           'this room for two years, and I would like it in the minutes '
           'before you reconsider.')],
         items=[
          (
           'Ferdinand\u2019s original proposal was to abolish junior '
           '____________.', None, 'fees',
           'Fourteen thousand a year, to be raised from the sponsor.'),
          (
           'The county programme\u2019s fee waiver raised participation by '
           '____________ per cent.', None, 'two',
           'Having removed the one predictable cost.'),
          ('What raised participation by eleven per cent?',
           ['A bigger waiver', 'One September payment covering everything, with three weeks\u2019 notice of any cost', 'Free transport only', 'More coaches'],
           1, 'And it cost the programme less.',
           {0: 'A bigger waiver is what the programme had already '
               'tried.', 2: 'Transport is one part of the bundle, not the whole.', 3: 'Coaching numbers are not part of the change.'}),
          (
           'The successful approach cost less because a ____________ '
           'goes to everybody who asks.', None, 'waiver',
           'While a bundled payment is chosen by those needing '
           'predictability.'),
          (
           'Chiara says Ferdinand will not like the ____________ rule '
           'binding coaches.', None, 'notice',
           'Meaning no entry to a tournament heard about on the '
           'Monday.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Cost',
    longturn=[('The thing I wanted to do and could not afford was to row '
               'competitively at university, which I had done at school for '
               'four years.'),
              ('I wanted it partly because I was reasonably good, and much '
               'more because of what the four years before had been: six '
               'mornings a week with the same eight people, and I have never '
               'found anything since that produced that kind of company.'),
              ('I could not afford it for reasons that were not the ones I '
               'expected. The club fee was manageable. What was not was the '
               'rest: a season\'s kit, the training camp at Easter, the travel '
               'to six regattas, and above all the twenty hours a week, which '
               'ruled out the job I needed to pay rent. Nobody ever told me '
               'the real figure; I worked it out in November and then spent a '
               'fortnight pretending I had not.'),
              ('What I did instead was coach. The school I had left needed '
               'somebody on Saturday mornings, paid a little, and I did it for '
               'two years. It was not the same, and for the first term I was '
               'quietly resentful about it. By the end I had learned more '
               'about the sport than I had in four years of doing it, because '
               'explaining a stroke to a fourteen-year-old who cannot feel it '
               'forces you to understand what you had only been imitating. I '
               'would still rather have rowed.')],
    intro=('Short answers, then the long turn. The fourth bullet carries the '
           'marks.'),
    cue=('Describe something you wanted to do but could not afford.',
         ['what it was', 'why you wanted to do it',
          'why you could not afford it',
          'and explain what you did instead']),
    qs=['Are activities for children expensive where you live?',
        'Did you do any activities outside school as a child?',
        'Now look at the card. You have one minute to make notes.',
        'Should local councils pay for sports facilities?'],
    shape=[('answer', 'Learning the clarinet, when I was about eleven.'),
           ('support', 'Two friends were doing it and the school had a '
            'teacher come in.'),
           ('follow-up', 'The lessons were affordable and the instrument '
            'was not.'),
           ('support', 'So I joined the choir, which cost nothing at '
            'all.'),
           ('follow-up', 'And I still sing, so it worked out better than it '
            'felt at the time.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should children play sport free of charge?',
         prompt=('Some people believe children should be able to take part '
                 'in sport free of charge. Do you agree? Give reasons for '
                 'your answer. Write at least 250 words.'),
         model=[
          'I agree that children should be able to play without charge, and I '
          'want to argue it for a reason that is usually left out, because '
          'the usual argument makes a promise free sport cannot keep.',
          'The first reason is the ordinary one and it is sound. '
          'Participation in childhood predicts activity in adult life, the '
          'health consequences of inactivity are expensive and well '
          'measured, and a charge that excludes a child at eleven is '
          'therefore buying a cost the same public purse pays at fifty-five. '
          'This is a transfer across time rather than a subsidy.',
          'The second reason is about who the charge selects. A fee does not '
          'filter by interest or by talent; it filters by household income '
          'and, more sharply, by how predictable that income is. A club that '
          'charges is therefore choosing its members partly by a criterion '
          'nobody would defend if it were written down.',
          'The third reason is the one I think matters most and it is a '
          'warning as much as an argument. Abolishing the fee alone does very '
          'little. In the programmes that have been evaluated, waiving '
          'membership raised participation among targeted families by about '
          'two per cent, because the fee was the one cost those families '
          'could already plan for. What raised it elevenfold more was a '
          'single payment covering transport, kit and tournament entries, and '
          'a rule that no further cost could be demanded at short notice.',
          'So I agree with the proposal and would ask for it to be '
          'implemented properly. Free means free of everything, announced in '
          'advance; a club that abolishes its subscription and then asks for '
          'eleven pounds on a Wednesday has changed its accounts and not its '
          'membership.'],
         notes=[
          'Structure 1: one position, three reasons, in rising order of '
          'interest. The third reason is the strongest and is deliberately '
          'last.',
          'The second reason reframes a fee as a selection criterion — '
          'income, and especially its predictability. Describing what a '
          'policy selects for is a reliable way to make a familiar argument '
          'feel new.',
          'The third reason supports the essay’s own position while '
          'attacking the usual version of it, with two figures. Agreeing with '
          'a proposal and criticising its supporters is a sophisticated '
          'position and is well within reach at this level.'],
         criterion=[('Three reasons in rising order of interest',
                     'Coherence and Cohesion'),
                    ('Describing what a policy selects for',
                     'Task Response'),
                    ('Agreeing with a proposal while criticising its usual '
                     'form', 'Task Response')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    ref='L19',
    context=[
      'From text B, which you have just read:',
      'A club may keep its subscription low at the cost of charging for everything else, or charge one flat fee at the cost of looking expensive in September. The more visible the price, the fewer people enquire; the less visible it is, the more leave in February. There is no arrangement in which the money is both small and predictable, and pretending otherwise is how most clubs arrive at the worst of both.',
     ],
    notice=[
     ('Find the structure that names what each option costs.', None,
      'at the cost of'),
     ('Find the paired structure that links two quantities moving in opposite directions.', None,
      'The more visible the price, the fewer people enquire'),
    ],
    noticetask='Answer both from the paragraph above, which you met earlier in this cycle.',
    contrast='You met trade-off structures in unit 25 cycle 2 and this is the version for a choice between two options rather than a single exchange. At the cost of names the price of the thing you are recommending, which concedes and argues in one phrase. The more X, the more Y states a relationship holding across cases, which is a stronger claim and needs evidence. And the closing move - there is no arrangement in which both - is what turns a pair of observations into an argument, because it rules out the option everybody is hoping for.',
    task2='Rewrite each with the structure named.',
    items2=[
     ('Low subscription, high extras. (at the cost of)', None,
      'The subscription can be kept low at the cost of charging for everything else.'),
     ('More visible price, fewer enquiries. (the more)', None,
      'The more visible the price, the fewer people enquire.'),
     ('Correct: in exchange of a lower fee.', None,
      'in exchange for a lower fee'),
     ('Rule out the option everybody wants.', None,
      'There is no arrangement in which the money is both small and predictable.'),
    ],
    task3='Now write it. Take the choice in this cycle - a low subscription with many extras, or one flat fee - and write sixty to eighty words naming what each costs, stating one relationship with the more... the more, and ruling out the thing everybody hopes for.',
    items3=8,
    point='Cost and access argument structures',
    explain=('Arguments about cost need language that distinguishes amount '
             'from predictability, and the fee from everything around it. '
             'These patterns do that work.'),
    examples=['The fee is small and it is the third small fee that week.',
              'Unpredictability costs more than amount.',
              'A charge filters by income rather than by interest.',
              'Affording something and finding it easy are not the same.'],
    task='Rewrite each sentence so that it separates amount from '
         'predictability or from accumulation.',
    items=[('Sport is too expensive.',
            'The subscription is affordable; the unplanned costs around it '
            'are what end a season.'),
           ('Families cannot pay the fee.',
            'Families can usually plan for a September fee and cannot absorb '
            'four pounds demanded on a Thursday.'),
           ('Fees stop children playing.',
            'A fee filters by household income, and more sharply by how '
            'predictable that income is.'),
           ('We should make it free.',
            'Free has to mean free of transport, kit and entry fees, or the '
            'change is only in the accounts.'),
           ('The subsidy did not work.',
            'The subsidy removed the one cost families could already plan '
            'for.')]),
   vocab=[('subsidy', 'money paid to reduce a price'),
          ('means-tested', 'given according to income'),
          ('barrier', 'something preventing people taking part'),
          ('waive', 'to decide not to charge something'),
          ('bundle', 'to combine several charges into one'),
          ('unpredictability', 'not knowing what will be asked and when'),
          ('boot exchange', 'a scheme for passing on outgrown equipment'),
          ('take-up', 'the share of eligible people who use something')],
   expr=[('it is the third small fee that week',
          'reframes a cost as an accumulation'),
         ('affording something and finding it easy are not the same',
          'distinguishes two senses of a word'),
         ('a waiver goes to everybody who asks',
          'explains why a cheaper scheme costs more'),
         ('no fee changed at any point',
          'rules out the expected explanation')],
   trans=['whereas', 'that said', 'the first reason', 'so I agree'],
  ),

  dict(
   sub='Where the money comes from',
   step=3,
   notes=dict(
    serves='Matching information and note completion, Reading Parts 2-3; Task 1 Academic, a chart and a table together',
    because='The hybrid Task 1 - two charts and a table, or a chart and a process - is the one that produces three separate descriptions and no answer, because the candidate treats each visual as a separate question',
    skill='Writing the sentence that uses all the visuals, and saying explicitly which one each figure came from',
    evidence='Unit 26 cycle 3 taught joining two visuals; a hybrid with three requires the same move plus explicit attribution, which the phase 4 models show missing entirely at band 6.5',
    watch='Learners will write three paragraphs. Ask for one sentence that needs two of the three visuals and could not be written from either',
    time='85 minutes, or 65 without the free grammar production'),
   lead=dict(
    title='Where the money comes from',
    body='The chart at the front of this unit shows that broadcast rights have gone from almost nothing to more than half of top-division income in forty years. That is a fact about money, and cycle 4 is about what follows from it, which is not. This cycle is the arithmetic: three visuals, one answer, and the discipline of saying which number came from where.',
    task='Answer these before you look at the visuals.',
    qs=[
        'Where do you think a football club’s money comes from?',
        'If more than half comes from broadcasters, who is the customer?',
        'What would happen to a club that lost that income for one season?',
        'Should money be shared equally between clubs, or earned?',
       ]),
   vocabwork=dict(
    title='The vocabulary of where money comes from',
    body='Thirteen words of plain accounting, and they transfer to any organisation at all: fixed, variable, ratio, insolvency, renegotiate. Five of them you met in unit 26, where the subject was a visitor economy, and the arithmetic is identical.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'a club’s money', 'sub': 'cycle 3 · five of these are from unit 26 cycle 4', 'branches': [('coming in', ['broadcast rights', 'gate receipts', 'sponsorship', 'prize money']), ('going out', ['wage bill', 'fixed charge', 'variable charge', 'amortisation']), ('the measures', ['wage ratio', 'turnover', 'margin', 'solvency']), ('going wrong', ['insolvency', 'administration', 'points deduction', 'renegotiate'])], 'note': 'Administration means two quite different things in this book: the running of an organisation, and the legal process a company enters when it cannot pay. Cycle 1 used the first and this cycle uses the second.'},
    figure2={'kind': 'family', 'teaches': 'word-formation', 'sub': 'cycle 3 · the last word-family table of Volume 3', 'rows': [(('fi-nance', 2), ('fi-nance', 1), '', ('fi-nan-cial', 2), ('fi-nan-cial-ly', 2)), ('', ('sol-ven-cy', 1), '', ('sol-vent', 1), ''), (('ne-go-ti-ate', 2), ('ne-go-ti-a-tion', 4), '', '', ''), (('dis-trib-ute', 2), ('dis-tri-bu-tion', 3), '', '', ''), (('sus-tain', 2), ('sus-tain-a-bil-i-ty', 4), '', ('sus-tain-a-ble', 2), '')], 'note': 'fiNANCE is the verb and FInance the noun, which is the last of the six stress-shifting pairs in this volume. The others were produce, import, permit, object and compact.'},
    task='Complete each sentence with a word from this cycle, in the right form.',
    items=[
     ('A cost that does not move with activity is a ____________ charge.', None,
      'fixed'),
     ('Wages as a share of revenue is the wage ____________.', None,
      'ratio'),
     ('Money from broadcasters is broadcast ____________.', None,
      'rights'),
     ('Being able to pay your debts is ____________.', None,
      'solvency'),
     ('The legal process when a club cannot pay is ____________.', None,
      'administration'),
     ('To agree new terms for an existing deal is to ____________.', None,
      'renegotiate'),
     ('The noun from distribute is ____________.', None,
      'distribution'),
     ('Total income before costs is ____________.', None,
      'turnover'),
    ]),
   builder=dict(
    skill='Task 1: a hybrid, and where each number came from',
    qkind='skill',
    explain='A hybrid Task 1 gives you two or three visuals of different kinds - a chart and a table, two charts and a diagram - and the band 6 answer gives one paragraph to each, which produces three accurate descriptions and nothing the examiner was looking for. Two things fix it and the second is the one nobody does. First, find the sentence that uses more than one visual, exactly as in unit 26 cycle 3: the one fact that neither visual states and both support. Second, attribute explicitly - according to the table, the chart shows, while the table gives - because when three sources of numbers are in play a reader cannot tell where a figure came from, and the examiner is marking you partly on whether the answer can be followed. It costs four words a sentence and it is the clearest single signal that you have understood the task rather than described the page. There is a third thing worth knowing about hybrids, which is where the overview sentence comes from. With a single chart the overview is the largest movement or the largest share, and you can see it. With two visuals of different kinds the overview is almost always a relationship between them, and relationships are not visible: they have to be looked for. So before writing anything, ask one question of the pair - what does the second visual tell me about the first? A pie of income sources and a table of wages are two pictures until you ask that, and then they are one fact: the clubs most dependent on broadcast money are the clubs spending the highest proportion of it on wages. That sentence is the answer. Everything else in the four paragraphs is there to support it, and a candidate who finds it in the first two minutes writes a better answer in twenty minutes than a candidate who writes for the full forty without it.',
    worked=[
      'The visuals: a chart of revenue by source, 1985 to 2025; a table of wage ratios for five clubs in 2025.',
      'The chart alone: “Broadcast rights rose from under five per cent of revenue in 1985 to fifty-four in 2025.”',
      'The table alone: “Wage ratios in 2025 ranged from fifty-eight per cent to a hundred and six.”',
      'The sentence that needs both: “The clubs with the highest wage ratios in the table are those most dependent on the broadcast income that the chart shows arriving only after 2003 - a source that did not exist when their grounds were built.”',
      'Attribution, four words at a time: “According to the table...”, “while the chart shows...”. Without them, the last sentence is unfollowable.',
     ],
    figure={'kind': 'matrix', 'teaches': 'comparison', 'title': 'Three visuals, four questions', 'sub': 'cycle 3 · fill the right-hand column before writing', 'cols': ['Which visual answers it?', 'Your sentence'], 'rows': ['What is the largest source now?', 'What changed most since 1985?', 'Which club is most exposed?', 'What do the two together show?'], 'cells': [['the chart', 'broadcast rights, at 54 per cent'], ['the chart', ''], ['the table', ''], ['both', '']], 'note': 'Three blanks, and the fourth row is the one the answer lives in. If you cannot fill it, you have two descriptions rather than an answer.'},
    task='For each observation, say which visual it comes from, or BOTH.',
    items=[
     ('Broadcast rights are 54 per cent of revenue.', None,
      'chart'),
     ('One club has a wage ratio over 100.', None,
      'table'),
     ('The most exposed clubs rely on the newest income source.', None,
      'both'),
     ('Gate receipts have fallen as a share since 1985.', None,
      'chart'),
     ('Wage ratios range from 58 to 106.', None,
      'table'),
     ('No club with a low ratio is heavily broadcast-funded.', None,
      'both'),
    ],
    note='Two of the six need both visuals, and those two are the overview. The other four are support. An answer with none of the first kind has not attempted the question.'),
   figures=[
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 3 · what the questions do to the article', 'pairs': [('money from television', 'broadcast rights', 'nominalisation'), ('they could not pay', 'the club became insolvent', 'reformulation'), ('wages as a share of income', 'the wage ratio', 'synonym'), ('it does not change with activity', 'a fixed charge', 'negation'), ('tickets, programmes and catering', 'matchday income', 'hypernym'), ('the league divides it', 'the money is distributed by formula', 'voice')], 'note': 'The fourth is the pattern this volume has used twelve times and the last time it will: a negative in the question and a technical noun in the passage.'},
   ],
   advice='On a hybrid Task 1, attribute every figure to its source - according to the table, the chart shows - and make sure at least one sentence uses more than one visual. Three paragraphs describing three visuals is three answers to a question that was asked once, and the overview is the thing that is missing.',
   debrief=dict(
    read=[
      'The note-completion gap wants a figure from the table and the passage gives a similar one from the chart two lines earlier.',
      'Two paragraphs mention insolvency and only one explains the mechanism. Matching information wants the mechanism.',
      'Question 39 says "money from television" and the article says "broadcast rights". The bridge has the pair.',
     ],
    listen=[
      'The speaker gives a wage ratio and then a revenue figure. The notes say which.',
      'In the matching task two clubs are named early and their figures given late.',
     ]),
   outside='Saying where a number came from is a courtesy that doubles as a defence: a reader who can check you is a reader who can believe you, and most reports that are disbelieved are disbelieved for being unfollowable rather than wrong.',
   recycled=[
      'ratio',
      'evidence',
      'turnover',
      'fixed charge',
      'distribution',
      'wage bill',
     ],
   read=[
    dict(preview=True,
         heading='Fixed, variable and what a wage ratio is',
         kind='Explainer box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='The visuals in this cycle are a chart and a table and they use three accounting words that decide what the numbers mean. Two hundred words.',
         paras=[
          'A fixed charge is one that does not change with how well a club does: the ground, the insurance, the administration. A variable charge moves with activity - travel, match officials, prize money. The distinction matters because a club with high fixed charges cannot shrink its way out of trouble, which is the single commonest route to insolvency.',
          'A wage ratio is wages as a share of revenue, and it is the number every regulator watches. Sixty per cent is comfortable, eighty is dangerous and over a hundred means the club is paying its players more than it receives, which is survivable only while somebody is willing to cover the difference.',
          'Broadcast rights are money paid by broadcasters for permission to show matches, and they are shared out by formula rather than earned individually. A club’s broadcast income therefore depends on decisions taken elsewhere, which is why losing a place in a division costs so much more than the gate receipts suggest.',
          'Three words: one about the shape of costs, one about their size relative to income, and one about where the income comes from in the first place.',
         ],
         items=[
          ('A charge that does not move with activity is a ____________ charge.',
           None, 'fixed',
           'Paragraph 1: the ground, the insurance, the administration.'),
          ('Wages as a share of revenue is the wage ____________.',
           None, 'ratio',
           'Paragraph 2: sixty is comfortable and over a hundred is not.'),
          ('Money paid by broadcasters is shared out by ____________.',
           None, 'formula',
           'Paragraph 3, which is why relegation costs so much.'),
         ]),
    dict(heading='Broadcast, gate and sponsorship',
         kind='Data article',
         task='Matching information and table completion',
         band='gt_work', qtype='Questions 30-35',
         figure=_PIE_A, figure2=_PIE_B, figure3=_TAB,
         paras=[
          'Three visuals and one question. The pie charts give the income mix '
          'of two clubs at opposite ends of the same league; the table gives '
          'income, wages and league position for four of them. The charts '
          'say where the money comes from and the table says what happens to '
          'it.',
          'Harlow Vale draws 54 per cent of its income from broadcast rights '
          'and only 14 per cent from gate receipts. Carrick Athletic '
          'reverses this almost exactly: 18 per cent broadcast and 41 per '
          'cent gate. Sponsorship is similar for both, at 22 and 19 per '
          'cent.',
          'The difference is not about size alone. A club dependent on '
          'broadcast income is dependent on a contract negotiated '
          'collectively and revised every three years, and its revenue can '
          'fall by a third without anybody in the town changing their '
          'behaviour. A club dependent on gate receipts is dependent on eleven '
          'thousand local decisions, which move slowly and recover slowly.',
          'Turning to the table, the wage ratio tells a different story from '
          'either chart. Harlow Vale pays 81 per cent of income in wages and '
          'finished fourth. Dunmore City pays 94 per cent and finished '
          'seventeenth. Pellow Rangers pays 46 per cent and finished sixth, '
          'on income of 41 million against Dunmore’s 94.',
          'Those four rows contain the finding that matters. Spending more in '
          'absolute terms is associated with finishing higher; spending a '
          'higher share of your own income is not. Dunmore City spent more '
          'than Pellow Rangers in every sense and finished eleven places '
          'below them, having committed almost everything it earned.',
          'The charts and the table have to be read together to see why that '
          'is dangerous rather than merely unsuccessful. Dunmore’s income is '
          'mostly broadcast income, which can fall by a third on a contract '
          'renewal, and its wages are contracted for three or four years. A '
          'club in that position has matched a variable income against a '
          'fixed obligation, which is the structure behind almost every '
          'insolvency in the sport.'],
         items=[
          (
           'Which paragraph explains why broadcast and gate income '
           'behave differently?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1,
           'A collective contract revised every three years against '
           'eleven thousand local decisions.',
           {0: 'Paragraph 2 gives the two income mixes.', 2: 'Paragraph 4 turns to the wage ratios in the table.', 3: 'Paragraph 5 states the finding about absolute and '
               'proportional spending.'}),
          (
           'Which paragraph states the finding about absolute and '
           'proportional spending?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           2,
           'Spending more is associated with finishing higher; '
           'spending a higher share is not.',
           {0: 'Paragraph 3 explains why broadcast and gate income '
               'behave differently.', 1: 'Paragraph 4 gives the wage ratios and positions.', 3: 'Paragraph 6 identifies the structure behind '
               'insolvencies.'}),
          (
           'Which paragraph identifies the structure behind '
           'insolvencies?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 2'],
           2, 'A variable income matched against a fixed obligation.',
           {0: 'Paragraph 4 gives the wage ratios and positions.', 1: 'Paragraph 5 states the finding about absolute and '
               'proportional spending.', 3: 'Paragraph 2 gives the two income mixes.'}),
          ('Harlow Vale: broadcast rights, ____________ per cent', None,
           '54', 'Paragraph 2, against 14 per cent from the gate.'),
          ('Dunmore City: wages as a share of income, ____________ per '
           'cent', None, '94', 'Paragraph 4, with a seventeenth-place '
           'finish.'),
          ('Pellow Rangers: income of ____________ million', None, '41',
           'Paragraph 4, against Dunmore City’s 94 million.')])],
   listen=[
    dict(heading='An analyst on club finances', part='Part 4',
         task='A talk on where club money comes from · table completion and matching', band='l4',
         qtype='Questions 36-41',
         figure=_PIE_A, figure2=_PIE_B, figure3=_TAB,
         script=[
          ('Analyst', 'Two pie charts and a table, and the reason you have '
           'all three is that no two of them answer the question. The charts '
           'tell you where the money comes from. The table tells you what '
           'happens to it. The risk is only visible when you hold them '
           'together.'),
          ('Analyst', 'Harlow Vale: fifty-four per cent broadcast, fourteen '
           'per cent gate. Carrick Athletic: eighteen broadcast, forty-one '
           'gate. Sponsorship is roughly the same for both at around twenty '
           'per cent, which is the only similarity in either chart.'),
          ('Analyst', 'Now why that matters, because it is not simply that '
           'one club is bigger. Broadcast income comes from a collective '
           'contract that is renegotiated every three years and can fall by a '
           'third without one person in the town behaving differently. Gate '
           'income comes from eleven thousand individual decisions. It is '
           'smaller, it is slower to grow, and it is far harder to lose '
           'suddenly.'),
          ('Analyst', 'Turning to the table. Harlow Vale pays eighty-one per '
           'cent of income in wages and finished fourth. Dunmore City pays '
           'ninety-four per cent and finished seventeenth. Pellow Rangers '
           'pays forty-six per cent and finished sixth on less than half '
           'Dunmore’s income.'),
          ('Analyst', 'So the finding is a distinction people constantly '
           'collapse. Spending more in absolute terms does tend to move you '
           'up the table. Spending a higher proportion of your own income '
           'does not, and Dunmore is the illustration: more money than '
           'Pellow Rangers, almost all of it committed, eleven places '
           'lower.'),
          ('Analyst', 'And here is the sentence I would want you to leave '
           'with, which needs all three visuals. Dunmore’s income is mostly '
           'broadcast money, which is variable, and its wages are contracted '
           'for three or four years, which is fixed. Matching a variable '
           'income against a fixed obligation is the structure behind nearly '
           'every insolvency in this sport, and it is invisible in any single '
           'one of these three pictures.'),
          ('Analyst', 'Which gives you the practical rule I use. Whenever '
           'you are shown a pie chart of income, ask for the wage ratio, '
           'and whenever you are shown a wage ratio, ask what the income '
           'is made of. Either one on its own is a presentation and the '
           'pair of them is an accounts department.')],
         items=[
          (
           'Three visuals are needed because no ____________ of them '
           'answer the question.', None, 'two',
           'The charts give sources and the table gives what happens '
           'to the money.'),
          (
           'Carrick Athletic draws ____________ per cent from gate '
           'receipts.', None, '41',
           'Against 18 per cent from broadcast rights.'),
          ('Broadcast income can fall by a ____________.', None,
           'third',
           'On a renegotiation, without local behaviour changing.'),
          ('Dunmore City finished ____________.', None, 'seventeenth',
           'Paying 94 per cent of income in wages.'),
          ('Which distinction does the analyst say people collapse?',
           ['Income and wages', 'Absolute spending and spending as a share of income', 'Gate and broadcast', 'Position and points'],
           1, 'The first tends to move a club up; the second does not.',
           {0: 'Income and wages are both in the table, and distinct.', 2: 'Gate and broadcast are separated clearly in the '
               'charts.', 3: 'Points and position are not what he says are confused.'}),
          (
           'Behind most insolvencies lies a variable income matched '
           'against a ____________ obligation.', None,
           'fixed',
           'Which is invisible in any single one of the three visuals.')])],
   speak=dict(
    part='Part 2 into Part 3', focus='Money in sport',
    intro=('Take the card first. One minute to make notes, then one to two '
           'minutes of talk, and the bullets are the order to take them '
           'in. Then the discussion: four or five sentences. Try once to '
           'distinguish an amount from a share.'),
    cue=('Describe a sports club or a team you support or know about.',
         ['which club it is',
          'where it plays',
          'who pays for it',
          'and explain what it means to the area']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Has its ownership changed?',
        'Do local people go?',
        'Where does the money in professional sport come from?',
        'Is it a problem if clubs depend on television money?',
        'Should clubs be allowed to spend all their income on wages?',
        'Who should own a sports club?'],
    shape=[('answer', 'Mostly broadcasting at the top and ticket sales '
            'further down.'),
           ('support', 'One club in these figures takes fifty-four per cent '
            'from broadcast and fourteen from the gate.'),
           ('follow-up', 'Another reverses it almost exactly.'),
           ('support', 'The risk is that broadcast money can fall by a '
            'third at a renewal.'),
           ('follow-up', 'While the wages it paid for are contracted for '
            'four years.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Income sources and wage ratios for four clubs',
         prompt=('The charts show the income sources of two sports clubs and '
                 'the table gives income, wages and league position for four '
                 'clubs. Summarise the information by selecting and '
                 'reporting the main features, and make comparisons where '
                 'relevant. Write at least 150 words.'),
         figure=_PIE_A, figure2=_PIE_B, figure3=_TAB,
         model=[
          'The two pie charts show how two clubs earned their income in 2023, '
          'while the table gives income, wages and final league position for '
          'four clubs. Overall, the two clubs charted rely on almost opposite '
          'sources, and the table shows that a high wage bill in absolute '
          'terms accompanies a high finish, whereas a high wage bill as a '
          'share of income does not.',
          'Taking the charts first, Harlow Vale depends chiefly on broadcast '
          'rights, which supply 54 per cent of its income, with only 14 per '
          'cent from gate receipts. Carrick Athletic shows nearly the reverse '
          'proportions, at 18 and 41 per cent respectively. Sponsorship is '
          'comparable in both cases, at around a fifth.',
          'Turning to the table, the two highest finishers differ sharply in '
          'their wage ratios. Harlow Vale finished fourth paying 81 per cent '
          'of its income in wages, while Pellow Rangers finished sixth paying '
          'only 46 per cent, on income of 41 million.',
          'The clearest contrast in the table is between Dunmore City and '
          'Pellow Rangers. Dunmore had more than twice the income and spent '
          '94 per cent of it on wages, yet finished seventeenth, eleven '
          'places below Pellow Rangers.'],
         notes=[
          'Charts first, table second, joined by an explicit handover: '
          '"Turning to the table". With three visuals, signposting is not '
          'optional and costs three words.',
          'The Overall statement covers all three visuals and names the '
          'distinction between absolute and proportional spending. That '
          'distinction is the reason the table was given at all.',
          'The final paragraph picks the single most instructive pair of rows '
          'rather than describing all four. With a table of four rows, '
          'selecting two and comparing them properly beats listing all of '
          'them.'],
         criterion=[('An explicit handover between visuals',
                     'Coherence and Cohesion'),
                    ('One Overall statement covering all three',
                     'Task Achievement'),
                    ('Selecting two rows rather than listing four',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    ref='L6',
    context=[
      'From the article in this cycle:',
      'According to the chart, broadcast rights rose from under five per cent of revenue in 1985 to fifty-four in 2025, while gate receipts fell from forty-one to eleven. The table gives the consequence: the five clubs with the highest wage ratios are precisely those whose grounds were built for a crowd that no longer pays the bills.',
     ],
    notice=[
     ('The writer attributes each figure to a visual. Copy out both attribution phrases.', None,
      'According to the chart; The table gives'),
     ('Which sentence could not have been written from either visual alone?', None,
      'the second'),
    ],
    noticetask='Answer both from the paragraph above, which is from the passage you read earlier in this cycle.',
    contrast='A hybrid task needs the comparison vocabulary you already have and one thing more: explicit attribution. According to the chart, the table gives, as the diagram shows. It reads as slightly laborious in a single-visual answer and is indispensable in a hybrid, because a reader cannot otherwise tell which of three sources a figure came from. Note that while is doing contrastive rather than temporal work here, as it was in unit 26 cycle 3, and that the second sentence is the overview even though it contains no number at all.',
    task2='Join each pair with attribution and derive the third fact where there is one.',
    items2=[
     ('Chart: broadcast 54%. Table: highest wage ratios.', None,
      'According to the chart broadcast rights are 54 per cent of revenue, while the table shows the highest wage ratios among the clubs most dependent on them.'),
     ('Correct: the chart shows that broadcast rights rose by 54 per cent.', None,
      'the chart shows that broadcast rights rose TO 54 per cent'),
     ('Chart: gate receipts fell. Table: old grounds.', None,
      'Gate receipts fell from 41 to 11 per cent, according to the chart; the table shows that the clubs with the oldest grounds are the most exposed.'),
     ('Say which visual, in four words.', None,
      'As the table shows...'),
    ],
    task3='Now write the opening of a Task 1 answer from the two visuals in this cycle: one sentence saying what each shows, one overview sentence that uses both, and one supporting comparison with its attribution. About sixty words.',
    items3=8,
    point='Hybrid: charts then table, joined explicitly',
    fix=dict(
     text=('The two charts show prize money and the table shows participation. '
           'Prize money rose by 300 per cent between 2000 and 2020, whereas '
           'participation fell slightly. Taken together, the charts and the '
           'table suggests that the money has concentrated at the top. The '
           'number of professional players, which is given in the table, has '
           'fell by a fifth.'),
     faults=[('the charts and the table suggests',
              'the charts and the table suggest',
              'Two subjects joined by and take a plural verb.'),
             ('has fell by a fifth',
              'has fallen by a fifth',
              'After has the verb takes its past participle: fallen.'),
             (('Taken together, the charts and the table suggests that the '
               'money has concentrated at the top'),
              ('Taken together, the charts and the table show that prize money '
               'rose while participation fell'),
              ('Suggest and concentrated at the top go beyond what the figures '
               'state, which is a Task 1 answer arguing rather than '
               'describing.'))]),
    explain=('With three visuals you must say where you are at all times. '
             'These phrases move the reader between visuals and are marked '
             'under Coherence and Cohesion.'),
    examples=['Taking the charts first, Harlow Vale depends chiefly on '
              'broadcast rights.',
              'Turning to the table, the wage ratio tells a different '
              'story.',
              'Read together, the charts and the table show why the position '
              'is risky.',
              'The clearest contrast in the table is between two of the four '
              'clubs.'],
    task='Rewrite each sentence so that it names the visual it comes from.',
    items=[('Broadcast income is 54 per cent.',
            'In the first chart, broadcast rights supply 54 per cent of '
            'Harlow Vale’s income.'),
           ('Dunmore spent 94 per cent on wages.',
            'Turning to the table, Dunmore City spent 94 per cent of its '
            'income on wages.'),
           ('The two clubs are opposites.',
            'The two pie charts show almost exactly reversed proportions of '
            'broadcast and gate income.'),
           ('High spending does not guarantee success.',
            'In the table, the club spending the highest share of its income '
            'finished lowest of the four.'),
           ('The risk comes from both.',
            'Read together, the charts and the table show a variable income '
            'committed to a fixed wage bill.')]),
   vocab=[('broadcast rights', 'payment for the right to televise'),
          ('gate receipts', 'money taken from ticket sales'),
          ('sponsorship', 'payment for advertising association'),
          ('wage ratio', 'wages as a share of income'),
          ('insolvency', 'inability to pay what you owe'),
          ('renegotiate', 'to agree a contract again on new terms'),
          ('variable', 'liable to change from year to year'),
          ('fixed charge', 'a cost that does not change with income')],
   expr=[('no two of them answer the question',
          'justifies using three visuals'),
         ('eleven thousand individual decisions',
          'contrasts a distributed cause with a single one'),
         ('a variable income matched against a fixed obligation',
          'names a structural risk in eight words'),
         ('invisible in any single one of these three pictures',
          'states what only a combined reading shows')],
   trans=['while', 'turning to', 'taken together', 'read together'],
  ),

  dict(
   sub='Why money changes a sport',
   step=4,
   notes=dict(
    serves='Matching headings and Yes/No/Not Given, Reading Part 3, on a seven-hundred-word passage; multiple choice in Listening Part 4',
    because='A passage about incentives contains paragraphs about what the incentive is and paragraphs about what it produces, and candidates match headings about consequences to paragraphs about structures because both mention the same thing',
    skill='Telling the paragraph that describes an incentive from the one that describes its consequence',
    evidence='Unit 29 cycle 4 taught mechanism against cause; this is the same family at a different joint, and it is the last matching-headings lesson in the book',
    watch='Learners will give the heading about risk-taking to the paragraph about the prize structure. The prize structure paragraph is about the shape of the reward. Expect it',
    time='90 minutes, or 70 without the free grammar production'),
   lead=dict(
    title='Ten times for first, and what follows',
    body='If finishing first is worth ten times finishing fourth, then a strategy with a small chance of winning and a large chance of finishing tenth beats a reliable fourth, and it does so by arithmetic rather than by anybody’s character. That sentence explains doping, financial recklessness, tactical desperation and most of what people call a decline in sporting values. It is the last mechanism this book teaches and it is the most portable.',
    task='Answer these before you read, and keep them for the unit review.',
    qs=[
        'Think of a competition you have been in. How steeply did the reward rise towards the top?',
        'Did that change what people did? What exactly?',
        'If you wanted less risk-taking, what would you change about the prizes?',
        'Is there a sport where you would want a steep gradient?',
       ]),
   vocabwork=dict(
    title='The vocabulary of an incentive',
    body='Fourteen words, and the first six are a framework that works on anything with a reward attached: gradient, taper, prize structure, convexity, risk-taking, unintended consequence. Five of the others you met in unit 26 cycle 5, where the subject was a cap.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'what a prize structure does', 'sub': 'cycle 4 · the last framework in this book', 'branches': [('the shape', ['prize structure', 'gradient', 'taper', 'winner-takes-all']), ('the response', ['risk-taking', 'gaming', 'short-termism', 'corner-cutting']), ('the damage', ['doping', 'cover-up', 'insolvency', 'spectacle']), ('the remedies', ['flatten', 'redistribute', 'relegation', 'parachute payment'])], 'note': 'A taper is a gradual reduction rather than a cliff: parachute payments taper over three years so that a relegated club does not lose everything at once. Any rule with a cliff in it invites behaviour on both sides of the cliff, which is why tapers exist.'},
    figure2={'kind': 'cline', 'teaches': 'scale', 'title': 'How steep is the gradient?', 'sub': 'cycle 4 · from flat to winner-takes-all', 'left': 'everyone gets the same', 'right': 'the winner gets everything', 'items': [('equal shares', 0.04), ('a modest premium', 0.2), ('a graduated scale', 0.4), ('steeply graduated', 0.62), ('heavily top-weighted', 0.8), ('winner-takes-all', 0.96)], 'note': 'The passage puts this sport at the fifth position and one of the comparison sports at the second, and the matching-headings questions are about what follows from that difference rather than about either description.'},
    task='Complete each sentence with a word from this cycle.',
    items=[
     ('How steeply reward rises towards the top is the ____________.', None,
      'gradient'),
     ('A gradual reduction rather than a cliff is a ____________.', None,
      'taper'),
     ('Obeying a rule’s words while defeating its purpose is ____________.', None,
      'gaming'),
     ('Payments that cushion a relegated club are ____________ payments.', None,
      'parachute'),
     ('A structure where only first place is rewarded is ____________.', None,
      'winner-takes-all'),
     ('To reduce the steepness is to ____________ the gradient.', None,
      'flatten'),
     ('Pursuing this season at the expense of the next is ____________.', None,
      'short-termism'),
     ('The entertainment a contest provides is the ____________.', None,
      'spectacle'),
    ]),
   builder=dict(
    skill='Matching headings: the incentive and its consequence',
    qkind='skill',
    explain='A passage about incentives has two kinds of paragraph and they are about the same subject. One describes the structure: how the prizes are arranged, how steeply the reward rises, where the cliffs are. The other describes the behaviour that follows: more risk-taking, more short-termism, three clubs in administration. The headings for the two sound almost the same - "How the prizes are arranged" and "What the arrangement produces" - and the second is far the more interesting to read, which is exactly why it gets assigned to the wrong paragraph. The test is a question about tense and agency. A structure paragraph is written in the present and has no human subject: the gradient is steep, first place is worth ten times fourth. A consequence paragraph has people in it doing things, usually in the past: three clubs borrowed against future income, two managers chose the riskier formation. Count the human subjects. None, and you are in the structure paragraph however exciting it sounds.',
    worked=[
      'Paragraph C: “First place is worth roughly ten times fourth, and the gap between fourth and fifth is larger again, since fifth carries no European place.”',
      'No human subject, present tense, a description of an arrangement. This is the structure.',
      'Paragraph D: “Three clubs borrowed against future broadcast income to buy a squad for one season; two are now in administration and the third sold its ground.”',
      'Human subjects, past tense, things people did. This is the consequence.',
      'Heading “The shape of the reward” belongs to C and “Borrowing against a season” to D - and D is the paragraph a reader remembers, which is why its heading tends to get given to C.',
     ],
    figure={'kind': 'skeleton', 'teaches': 'text-structure', 'title': 'Seven hundred words, structures and consequences', 'sub': 'cycle 4 · count the human subjects in each', 'paras': [('A', 'context', 'The money, and the forty years'), ('B', 'definition', 'What a prize gradient is'), ('C', 'structure', 'Ten times for first, and the European cliff'), ('D', 'consequence', 'Three clubs, and what they did'), ('E', 'counter-claim', 'The sport that flattened it, and what happened'), ('F', 'consequence', 'What follows for anybody setting a prize list')], 'note': 'B defines, C describes a structure and D and F describe consequences. Four paragraphs, all about incentives, and the headings will mention prizes in at least three of them.'},
    task='For each paragraph opening write STRUCTURE or CONSEQUENCE, and the signal.',
    items=[
     ('“First place is worth ten times fourth.”', None,
      'structure, no human subject'),
     ('“Three clubs borrowed against future income.”', None,
      'consequence, people doing things'),
     ('“The gap between fourth and fifth is larger again.”', None,
      'structure, present and impersonal'),
     ('“Two managers chose the riskier formation.”', None,
      'consequence, human subjects'),
     ('“Parachute payments taper over three years.”', None,
      'structure, impersonal'),
     ('“Attendances fell in the lower division.”', None,
      'consequence, past and measurable'),
    ],
    note='Every structure sentence here is in the present with no person in it, and every consequence sentence is in the past with somebody doing something. That is a reliable enough tell to use at speed, which is what Part 3 requires.'),
   figures=[
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 4 · the Yes/No/Not Given set turns on these', 'pairs': [('how steeply the reward rises', 'the prize gradient', 'nominalisation'), ('they took bigger risks', 'risk-taking increased', 'voice'), ('nobody behaved badly', 'no misconduct is alleged', 'negation'), ('doping, overspending and gaming', 'the predicted responses', 'hypernym'), ('the reward falls away gradually', 'the payment tapers', 'synonym'), ('the same people made different choices', 'behaviour changed without any change in personnel', 'reformulation')], 'note': 'The last is the claim of the whole passage and the answer to two questions: it is the sentence that distinguishes an incentive argument from a character argument.'},
   ],
   advice='In matching headings on a passage about incentives, count the human subjects in each paragraph. None, in the present tense, is a structure paragraph and takes the heading about arrangement; people doing things, in the past, is a consequence paragraph and takes the heading about what happened. The consequence paragraphs are the memorable ones and that is why their headings migrate.',
   debrief=dict(
    read=[
      'The heading about borrowing belongs to D, which has three clubs doing things in it, and not to C, which describes the gradient that made borrowing rational.',
      'Statement 50 says the passage blames the clubs. The passage says explicitly that the same people made different choices under a different structure, which makes it NO.',
      'One statement repeats paragraph E, which describes the sport that flattened its gradient, as though it were the writer’s recommendation. Describing is not recommending, which is unit 26 cycle 4.',
     ],
    listen=[
      'Dr Ferreira names three sports and one reversal. The question asks how many reversed.',
      'She declines to say whether flattening is right, and the refusal is the answer to the last question.',
     ]),
   outside='Prize structures are everywhere - bonuses, league tables, grant rounds, examination grades - and almost every complaint about how people behave under one is really a complaint about its shape. Looking at the gradient before looking at the people is the most useful habit in this unit.',
   recycled=[
      'gradient',
      'evidence',
      'incentive',
      'taper',
      'risk-taking',
      'unintended effect',
     ],
   read=[
    dict(heading='What happens when the prize gets large',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 42-48',
         paras=[
          'Competitions are designed objects, and the design that receives '
          'least attention is the prize structure: how much more the winner '
          'receives than the runner-up, and how steeply the rewards fall away '
          'after that. Changing those numbers changes behaviour reliably, in '
          'directions that are predictable in advance and are predicted '
          'almost nowhere. A committee that votes to raise the first '
          'prize is voting on behaviour as surely as one that votes on a '
          'code of conduct, and it does not experience the decision that '
          'way.',
          'The central result is straightforward. The larger the gap between '
          'first and second, the greater the incentive to take risks, '
          'because a competitor who is behind has little to lose and a '
          'competitor who is ahead has a great deal to protect. This applies '
          'to tactics, to injury management, to the decision to appeal, and '
          'to every form of cheating. It applies with the same arithmetic '
          'whether the competitors are honourable or not, which is why '
          'selecting better people has never worked as a remedy.',
          'Prize structures also determine effort in the middle of a field. '
          'Where rewards are concentrated at the top, competitors with no '
          'realistic chance of winning reduce effort, since the marginal '
          'reward for finishing eleventh rather than fourteenth is nothing. '
          'Where rewards taper gradually, effort is sustained much further '
          'down, which is why some leagues pay prize money by position all '
          'the way to the bottom. The effect on the middle of a field is '
          'larger than the effect at the top and attracts almost no '
          'attention, because nobody watches the middle of a field.',
          'The doping literature fits this pattern precisely and '
          'uncomfortably. Detected doping clusters not among the best '
          'competitors but just below them, among those for whom a small '
          'improvement crosses a large financial threshold. The distribution '
          'of detected cases follows the shape of the prize structure more '
          'closely than it follows any measure of character or culture. '
          'That is an awkward finding for a sport that prefers to discuss '
          'the question in terms of values.',
          'Promotion and relegation create the steepest gradients in team '
          'sport, and the behaviour around them is the clearest '
          'demonstration of the mechanism. A club three points above the line '
          'in April is facing a loss of income far larger than any gain '
          'available from finishing higher, and clubs in that position '
          'consistently spend beyond their means, appoint and dismiss '
          'managers faster, and play more cautiously than their position '
          'warrants. The same clubs behave quite differently in a season '
          'in which they are safe by eight points, which rules out any '
          'explanation resting on who runs them.',
          'The usual response to behaviour of this kind is to strengthen '
          'punishment, and the reason it disappoints is visible in the same '
          'analysis. Punishment raises the cost of being caught while the '
          'prize continues to raise the value of winning, and where the '
          'second is larger than the first the behaviour persists with better '
          'concealment. Several sports have run this experiment and reported '
          'the result as a failure of enforcement. Describing it that way '
          'guarantees that the next response is more enforcement.',
          'The alternative is to flatten the gradient, and the objections to '
          'it are serious rather than merely self-interested. A flatter '
          'structure reduces the spectacle, since close competition at the '
          'top is partly produced by the stakes, and it reduces the reward '
          'for the excellence the sport exists to display. Nobody has '
          'demonstrated where the optimum lies and it is unlikely to be the '
          'same for every sport.',
          'What the analysis does establish is narrower and useful. '
          'Behaviour that is described as a cultural problem, a failure of '
          'integrity or a generational decline is in most cases a predictable '
          'response to a reward structure somebody chose, and could be '
          'changed by changing it. That is a less satisfying explanation than '
          'a moral one, and it has the advantage of naming something that '
          'can be altered by a committee.',
                ('One qualification should be stated, because the argument is '
                 'easy to overextend. A reward structure explains the rate at '
                 'which rules are broken, not the fact that they are. Sports '
                 'with flat prizes still have cheats, and individuals still '
                 'choose, and the explanation offered here removes no '
                 'responsibility from anybody. What it does is identify the '
                 'variable a governing body can actually move, which is not '
                 'the character of its athletes.')],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['Prize structures as design', 'Risk and the gap between first and second', 'Effort in the middle of a field', 'Doping'],
           1,
           'A competitor behind has little to lose and one ahead has '
           'much to protect.',
           {0: 'Prize structures as design is paragraph 1.', 2: 'Effort in the middle is paragraph 3.', 3: 'Doping is paragraph 4, with the clustering finding.'}),
          ('Choose the best heading for paragraph 5.',
           ['Doping', 'Promotion and relegation', 'Punishment', 'Flattening the gradient'],
           1, 'A club three points above the line in April.',
           {0: 'Doping is paragraph 4, with the clustering finding.', 2: 'Punishment is paragraph 6, where it disappoints.', 3: 'Flattening the gradient is paragraph 7, with its '
               'costs.'}),
          ('Choose the best heading for paragraph 6.',
           ['Promotion and relegation', 'Why punishment disappoints', 'Flattening the gradient', 'What the analysis establishes'],
           1,
           'Punishment raises the cost of being caught while the prize '
           'raises the value of winning.',
           {0: 'Promotion and relegation is the heading for paragraph '
               '5.', 2: 'Flattening the gradient is paragraph 7, with its '
               'costs.', 3: 'What the analysis establishes is paragraph 8.'}),
          (
           'The writer believes doping is mainly a failure of '
           'character.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 4 says the distribution follows the prize '
           'structure rather than character.',
           {0: 'Yes would need character; paragraph 4 follows the '
               'prize structure instead.', 2: 'Not Given is wrong because the distribution is '
               'explained.'}),
          (
           'The writer believes the objections to flattening prize '
           'structures are unreasonable.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 7 calls them serious rather than merely '
           'self-interested.',
           {0: 'Yes would need dismissal; paragraph 7 calls them '
               'serious.', 2: 'Not Given is wrong because the objections are weighed.'}),
          ('Detected doping clusters just ____________ the best '
           'competitors.', None, 'below',
           'Paragraph 4, among those for whom a small gain crosses a large '
           'threshold.'),
          ('The writer says such behaviour is a predictable response to a '
           'reward structure somebody ____________.', None, 'chose',
           'The final paragraph, which is why a committee could change '
           'it.')])],
   listen=[
    dict(preview=True,
         heading='An economist on what a prize does',
         part='Preview', task='Sentence completion',
         band='lpre', qtype='Questions P1-P3',
         why='The lecture you are about to hear is about incentives rather than about sport. Ninety seconds on the idea it runs on.',
         script=[
          ('Interviewer',
           'More money in the sport. Surely that is good for it.'),
          ('Dr Ferreira',
           'More money changes what the sport rewards, and what it rewards is what it will get more of. Whether that is good depends entirely on the shape of the prize.'),
          ('Interviewer',
           'The shape?'),
          ('Dr Ferreira',
           'How steeply the reward rises as you go up. If finishing first is worth ten times finishing fourth, then a strategy with a small chance of first and a large chance of tenth beats a steady fourth every time. The arithmetic does that, not the character of the people.'),
          ('Interviewer',
           'And that is where doping comes in.'),
          ('Dr Ferreira',
           'That is where every kind of risk-taking comes in - financial, tactical, medical. Flatten the gradient and the same people make different choices. We have watched it happen in three sports and in reverse in one.'),
          ('Interviewer',
           'So you would flatten it.'),
          ('Dr Ferreira',
           'I would say that anybody who steepens it and then complains about risk-taking has misunderstood their own prize list. Whether to flatten it is a question about what you want the sport to be, and that is not mine to answer.'),
         ],
         items=[
          ('Dr Ferreira says more money changes what the sport ____________.',
           None, 'rewards',
           'Her first answer, which is the whole mechanism.'),
          ('The shape of a prize is how steeply the reward rises as you go ____________.',
           None, 'up',
           'Her second answer, with the ten times and the steady fourth.'),
          ('She says flattening the ____________ changes the choices the same people make.',
           None, 'gradient',
           'Her third answer, which names three sports and one reversal.'),
         ]),
    dict(heading='A lecture on incentives in sport', part='Part 4',
         task='A lecture on prize structures · multiple choice and sentence completion', band='l4',
         qtype='Questions 49-54',
         script=[
          ('Lecturer', 'I am going to argue that most of what sport describes '
           'as an ethical crisis is an arithmetic consequence of decisions '
           'taken by committees about prize money, and that this is good '
           'news, because arithmetic can be changed and character '
           'cannot.'),
          ('Lecturer', 'Start with the central result. The larger the gap '
           'between first and second, the greater the incentive to take '
           'risks. If you are behind you have nothing to lose and if you are '
           'ahead you have everything to protect. That covers tactics, '
           'injury management, whether you appeal a decision, and every form '
           'of cheating anybody has catalogued.'),
          ('Lecturer', 'Second result, less famous and I think more '
           'important: the shape of the taper governs effort in the middle. '
           'If all the money is at the top, the competitor who cannot win '
           'reduces effort, because finishing eleventh instead of fourteenth '
           'pays nothing. Pay prize money by position to the bottom of the '
           'field and effort is sustained all the way down.'),
          ('Lecturer', 'Now the doping evidence, which fits this so neatly '
           'that it makes people uncomfortable. Detected cases do not cluster '
           'among the very best. They cluster just below them, among the '
           'people for whom one per cent of improvement crosses a large '
           'financial line. The distribution follows the prize structure more '
           'closely than it follows any measure of culture.'),
          ('Lecturer', 'Which tells you why tougher punishment has '
           'disappointed everywhere it has been tried. Punishment raises the '
           'cost of being caught. The prize keeps raising the value of '
           'winning. If the second is bigger than the first you have not '
           'removed the behaviour, you have purchased better concealment, and '
           'at least four sports have run that experiment and published the '
           'result as an enforcement failure.'),
          ('Lecturer', 'I want to be fair about the alternative. Flattening '
           'the gradient has real costs: a flatter structure means less '
           'spectacle, because the tension at the top is partly made of the '
           'stakes, and it pays excellence less. I do not know where the '
           'optimum is and I would distrust anybody who told you they '
           'did.'),
          ('Lecturer', 'What I will say is that the question is answerable '
           'and nobody has funded the answer. You would need two '
           'competitions in the same sport with different gradients and ten '
           'years of data, which exists in two sports and has never been '
           'compared, because no governing body wants to find out.')],
         items=[
          ('The lecturer calls his conclusion good news because',
           ['sport is improving', 'arithmetic can be changed and character cannot', 'punishment works', 'committees are reliable'],
           1,
           'Most of what is called an ethical crisis follows from '
           'committees\u2019 decisions.',
           {0: 'He does not claim that sport is improving.', 2: 'He argues that punishment has disappointed.', 3: 'He says committees do not see what they are voting on.'}),
          (
           'A larger gap between first and second increases '
           '____________.', None, 'risk-taking',
           'Because the competitor behind has nothing to lose.'),
          ('Paying prize money by position to the bottom',
           ['reduces effort', 'sustains effort further down the field', 'has no effect', 'increases doping'],
           1,
           'Because finishing eleventh instead of fourteenth then pays '
           'something.',
           {0: 'Concentrating the money at the top is what reduces '
               'effort.', 2: 'He reports a clear effect further down the field.', 3: 'Doping follows the gradient, which this flattens.'}),
          (
           'Detected doping clusters just below the very ____________.',
           None, 'best',
           'Among those for whom one per cent crosses a financial '
           'line.'),
          (
           'Tougher punishment has mainly produced better '
           '____________.', None, 'concealment',
           'Where the value of winning exceeds the cost of being '
           'caught.'),
          ('What does he say about the optimal gradient?',
           ['It is known', 'He does not know and distrusts anybody who claims to', 'It is zero', 'It is the same in every sport'],
           1, 'While accepting that flattening has real costs.',
           {0: 'He says nobody has demonstrated where it lies.', 2: 'He accepts that flattening has real costs, so not '
               'zero.', 3: 'He says it is unlikely to be the same for every sport.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='Winning and how it is rewarded',
    followup=[(('You say athletes break the rules because of the rewards. '
                'Would sharing prize money help?'),
               ('A little, and less than you would hope. Flattening the prizes '
                'reduces the gain from cheating at the top and also reduces '
                'the gain from winning, which is what the sport is for. I '
                'would rather change the probability of being caught, because '
                'that affects the calculation without weakening the '
                'competition.')),
              ('Does money make sport better or worse to watch?',
               ('Better in quality and worse in competition, which is why the '
                'argument never settles. More money buys better training, '
                'better pitches and better coverage, and it also concentrates '
                'the best players in six clubs, so the standard of play rises '
                'while the result becomes predictable. Which of those you '
                'weigh more heavily is a matter of taste rather than evidence.')),
              ('How should a sport deal with cheating?',
               ('By making detection credible and sanctions boring. Long '
                'investigations and dramatic bans look decisive and arrive '
                'years late, by which time the result stands in everybody\'s '
                'memory. Frequent, routine, well-funded testing with quick '
                'results does less for the news and much more for the honesty '
                'of the sport.'))],
    intro=('The card comes first. Make your notes inside the minute you '
           'are given, speak until you are stopped, and let the last '
           'bullet carry the weight. Then the discussion: four or five '
           'sentences. Try once to explain a behaviour by an incentive '
           'rather than by a character.'),
    cue=('Describe a competition you took part in.',
         ['what it was',
          'when it was',
          'how you prepared for it',
          'and explain how you did']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Was it fairly judged?',
        'Would you enter again?',
        'Why do some athletes break the rules?',
        'Should prize money be shared more evenly?',
        'Does money make sport better or worse to watch?',
        'How should a sport deal with cheating?'],
    shape=[('answer', 'Mostly because of how steeply the rewards fall after '
            'first place.'),
           ('support', 'Detected cases cluster just below the very best.'),
           ('follow-up', 'Where one per cent of improvement crosses a large '
            'financial line.'),
           ('support', 'Which means punishment alone raises the cost of '
            'being caught and nothing else.'),
           ('follow-up', 'And several sports have tried exactly that and '
            'called the result an enforcement failure.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Six tests, and ordering on purpose',
         prompt=('Should there be a limit on what clubs can spend? '
                 'Brainstorm, run the six tests, and order the survivors '
                 'deliberately, saying why you chose that order. Do not '
                 'write the essay yet.'),
         plan=('A limit is justified in principle and has failed in every '
               'implemented form, which argues for limiting the gradient of '
               'the rewards rather than the spending',
               [('Unlimited spending produces the behaviour everybody '
                 'objects to, by arithmetic rather than by character',
                 ['steep rewards increase risk-taking and concealment',
                  'relegation gradients produce spending beyond means']),
                ('Every spending limit so far has been met by a structure '
                 'designed to go round it',
                 ['related-party sponsorship at inflated value',
                  'enforcement requires valuing transactions nobody can '
                  'value'])]),
         notes=[
          'This is the last planning task of the volume, so the exercise '
          'includes stating why you ordered as you did. If you cannot say '
          'why, the order is accidental and the reader will feel it.',
          'Here the order is: principle first, failure second, because the '
          'thesis concedes the principle and attacks the mechanism. Had the '
          'thesis been that limits are wrong in principle, the order would '
          'reverse.',
          'Notice the shape that has recurred through five units: agree with '
          'the aim, attack the instrument, propose a different instrument. It '
          'is available for most policy prompts and it is worth having as a '
          'default when nothing better suggests itself.'],
         criterion=[('Stating the reason for your chosen order',
                     'Coherence and Cohesion'),
                    ('Separating the aim of a policy from its instrument',
                     'Task Response')],
         instruct='  Produce the brainstorm, the tests, the order and your '
                  'reason for it. You will write it in cycle 5.',
         lines=12)],
   gram=dict(
    ref='L24',
    context=[
      'From the passage you have just read:',
      'Were first place worth twice fourth rather than ten times, the borrowing would not have been rational and would not have happened. Had the European place not created a cliff between fourth and fifth, the final fortnight would not be the most dangerous period in the financial year. Nothing in either sentence is a claim about anybody’s character.',
     ],
    notice=[
     ('Find the two inverted conditionals and say which is about the present and which about the past.', None,
      'Were first place worth twice - present; Had the European place not created - past'),
     ('What does the last sentence rule out?', None,
      'that this is an argument about character'),
    ],
    noticetask='Answer both from the paragraph above, which you met earlier in this cycle.',
    contrast='You met inverted conditionals in unit 26 and unit 28, and this is their natural home: an argument about incentives is an argument about what would happen under a different structure, which is a counterfactual by definition. Were plus the bare subjunctive for the present, Had plus the past participle for the past, no if in either. And the closing move is the one that makes it an argument rather than an observation: saying what the claim is not about. An incentive argument that does not explicitly rule out the character explanation will be read as making it.',
    task2='Rewrite each as an inverted conditional and then rule out the character reading.',
    items2=[
     ('If first place were worth twice fourth, nobody would borrow.', None,
      'Were first place worth twice fourth, nobody would borrow.'),
     ('If the cliff had not existed, the fortnight would have been ordinary.', None,
      'Had the cliff not existed, the fortnight would have been ordinary.'),
     ('Correct: If were the gradient flatter, behaviour would change.', None,
      'Were the gradient flatter, behaviour would change.'),
     ('Rule out the character explanation in eight words.', None,
      'Nothing here is a claim about anybody’s character.'),
    ],
    task3='Now write it. Take the prize structure in this cycle, say what would happen were the gradient flatter and what would have happened had the cliff not existed, and then rule out the character explanation. Eighty to a hundred words.',
    items3=10,
    point='Incentive and unintended consequence',
    explain=('Explaining behaviour by an incentive needs a particular '
             'sentence shape: the structure, the resulting calculation, and '
             'the behaviour. Getting all three in makes the explanation '
             'persuasive rather than cynical.'),
    examples=['The larger the gap between first and second, the greater the '
              'incentive to take risks.',
              'Punishment raises the cost of being caught while the prize '
              'raises the value of winning.',
              'Where rewards are concentrated at the top, competitors in the '
              'middle reduce effort.',
              'You have not removed the behaviour; you have purchased better '
              'concealment.'],
    task='Rewrite each explanation so that the incentive appears in it.',
    items=[('Some athletes cheat.',
            'Where one per cent of improvement crosses a large financial '
            'line, a predictable minority will buy that one per cent.'),
           ('Clubs overspend.',
            'A club three points above relegation faces a loss larger than '
            'any gain from finishing higher, and spends accordingly.'),
           ('Middle-ranked competitors give up.',
            'Where all the reward sits at the top, finishing eleventh instead '
            'of fourteenth pays nothing and effort falls.'),
           ('Tougher penalties did not work.',
            'The penalty raised the cost of detection while the prize kept '
            'rising, so concealment improved instead of behaviour.'),
           ('It is a cultural problem.',
            'The behaviour follows the shape of the prize structure more '
            'closely than any measure of culture.')]),
   vocab=[('prize structure', 'how rewards are distributed by position'),
          ('taper', 'a gradual reduction across positions'),
          ('risk-taking', 'accepting a chance of loss for a chance of '
           'gain'),
          ('doping', 'using banned substances to improve performance'),
          ('relegation', 'being moved down to a lower division'),
          ('cover-up', 'an effort to keep something hidden'),
          ('gradient', 'how steeply something changes across a range'),
          ('spectacle', 'the quality of being exciting to watch')],
   expr=[('arithmetic can be changed and character cannot',
          'prefers a structural explanation for a practical reason'),
         ('you have purchased better concealment',
          'states what a policy actually bought'),
         ('serious rather than merely self-interested',
          'grants weight to an objection'),
         ('I would distrust anybody who told you they did',
          'marks the limit of what is known')],
   trans=['consequently', 'which in turn', 'as a result', 'I want to be fair '
          'about'],
  ),

  dict(
   sub='Whether rules can hold',
   step=5,
   notes=dict(
    serves='Matching information and Yes/No/Not Given, Reading Part 3, and multiple choice in Listening Part 3; Writing Task 2, an evaluate-this-claim question, and Speaking Part 3',
    because='Candidates evaluate a claim about sport by saying whether they like it, when the question asks whether it is true, and a claim about what something is for cannot be evaluated at all until the purpose is named',
    skill='Evaluating a claim by naming the standard you are judging it against',
    evidence='Unit 27 cycle 5 taught the two-part position and unit 29 cycle 5 the concession; this is the last writing lesson in the book and the most transferable of the three',
    watch='Learners will write that the claim is right because redistribution is fair. Fair by what standard is the entire question. Send them back to the lead-in',
    time='90 minutes plus the writing'),
   lead=dict(
    title='Right by what standard?',
    body='Here is a claim: a sports league should share its money equally among its clubs. You cannot evaluate that until you say what the league is for. If it exists to identify the best team, equal shares are perverse. If it exists to sustain a competition people will pay to watch, equal shares are close to necessary. The claim is not true or false in itself; it is true relative to a purpose, and naming the purpose is the move that turns an opinion into an argument.',
    task='Decide these before you write, and keep your answers.',
    qs=[
        'What do you think a professional league is for? Say it in one sentence.',
        'By that standard, should money be shared equally?',
        'Name a standard by which your answer would be wrong.',
        'Which standard would most people in your country name?',
       ]),
   vocabwork=dict(
    title='The vocabulary of evaluating',
    body='Twelve words for judging a claim rather than agreeing with it. The first six are the ones examiners reward because they signal that a standard is being applied: criterion, by that measure, defensible, perverse, warranted, self-defeating.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'judging a claim', 'sub': 'cycle 5 · the last word field in this book', 'branches': [('the standard', ['criterion', 'purpose', 'measure', 'the prior question']), ('it holds', ['defensible', 'warranted', 'there is a case for', 'sustainable']), ('it fails', ['perverse', 'self-defeating', 'unwarranted', 'hard to defend']), ('choosing', ['adopt', 'on balance', 'rather than', 'as such'])], 'note': 'Sixteen words, and not one of them is about sport. That is deliberate: this is the only cycle in the book whose vocabulary you can carry unchanged into a Task 2 on any subject at all, which is why it is the last one.'},
    figure2={'kind': 'langbank', 'teaches': 'useful-language', 'title': 'The language of evaluating a claim', 'sub': 'cycle 5 · by what it does, not by where it goes', 'groups': [('naming a standard', ['judged by', 'measured against', 'by the criterion of', 'on that measure'], 'Judged by the goal of competitive balance, the policy is defensible.'), ('saying it holds', ['the claim holds', 'defensible', 'warranted', 'there is a case for'], 'On that criterion the claim holds, and holds without qualification.'), ('saying it fails', ['self-defeating', 'perverse', 'it inverts the incentive', 'hard to defend'], 'Measured against revenue, the same policy is self-defeating.'), ('choosing between them', ['it is the first of these', 'I take the purpose to be', 'the prior question', 'rather than'], 'It is the second standard that I adopt, and for a stated reason rather than a preference.')], 'note': 'The four functions are the four paragraphs of the essay you are about to write, in order, and each phrase list is a drawer you open at that point. The worked sentence under each one is the register to aim at throughout.'},
    task='Complete each sentence with a word or phrase from this cycle.',
    items=[
     ('A standard you judge something against is a ____________.', None,
      'criterion'),
     ('A measure that defeats its own purpose is ____________.', None,
      'self-defeating'),
     ('A policy that inverts the incentive it intends is ____________.', None,
      'perverse'),
     ('A claim that can be reasonably held is ____________.', None,
      'defensible'),
     ('A conclusion the evidence supports is ____________.', None,
      'warranted'),
     ('Judged by that standard, we say ____________ that measure.', None,
      'by that measure'),
     ('A question that must be settled first is the ____________ question.', None,
      'prior'),
     ('What a thing exists to do is its ____________.', None,
      'purpose'),
    ]),
   builder=dict(
    skill='Evaluating a claim: name the standard first',
    qkind='skill',
    explain='An evaluate-this-claim question asks whether something is right, and almost every candidate answers whether they like it. The move that separates a band seven answer from a band five is one sentence early on that names the standard: judged by X, the claim holds; judged by Y, it does not. Once that sentence is on the page the rest of the essay writes itself, because each body paragraph can take one standard and follow it honestly to its conclusion. Without it you are left saying that something is fair, which invites the examiner to ask fair by what measure, and you have no answer. There is a second move that follows from the first and is worth as much: say which standard you are adopting and why, rather than leaving the reader to guess. An essay that names two standards and chooses between them is doing the thing the task actually asks.',
    worked=[
      'Claim: a league should share its money equally.',
      'Weak: “I agree, because it is fairer for all the clubs.” Fairer by what measure is unanswered.',
      'Strong, first move: “Judged by the goal of sustaining a watchable competition, equal shares are close to necessary; judged by the goal of identifying the best team, they are perverse.”',
      'Strong, second move: “I take the first to be the purpose of a professional league, because a league with a single plausible winner has no audience and therefore no money to distribute at all.”',
      'That is two sentences, and they are the whole structure of a band seven answer to this task.',
     ],
    figure={'kind': 'ladder', 'teaches': 'band-move', 'criterion': 'Evaluating a claim about a league’s money', 'sub': 'cycle 5 · one judgement, written three ways', 'rungs': [('5.5', 'I agree with this because it is fairer for all of the clubs and the small clubs need help.', 'a preference, with no standard named'), ('6.5', 'Judged by the goal of sustaining a watchable competition, equal shares are close to necessary, though they are perverse if the league exists to find the strongest team.', 'name the standard, and name the rival standard'), ('7.5', 'It is the first of these goals that I take to be the purpose of a professional league, and it is for that reason, rather than from any commitment to equality as such, that I would redistribute.', 'choose a standard, give the reason, rule out the misreading')], 'note': 'The three sentences say nearly the same thing about sport. What rises is not the opinion but the amount of reasoning visible on the page, and the band descriptors are describing exactly that when they ask for a clear position.'},
    task='For each claim write the two standards it could be judged by.',
    items=[
     ('Prize money should be equal for men and women.', None,
      'equal pay for equal work / revenue generated'),
     ('Clubs should not be allowed to overspend.', None,
      'competitive balance / the owner’s freedom'),
     ('Doping bans should be for life.', None,
      'deterrence / proportionality'),
     ('Hosting a tournament is worth the cost.', None,
      'economic return / national prestige'),
     ('Relegation should be abolished.', None,
      'investor certainty / sporting merit'),
     ('School sport should be compulsory.', None,
      'public health / individual choice'),
    ],
    note='Each of those pairs is a complete essay plan, and the six together are a usable preparation exercise: a task you can do in ninety seconds that puts you in a position to write for forty minutes.'),
   figures=[
    {'kind': 'skeleton', 'teaches': 'text-structure', 'title': 'Six hundred and twenty words about what a league is for', 'sub': 'cycle 5 · two standards, and a choice between them', 'paras': [('A', 'context', 'The money, and the complaint about it'), ('B', 'definition', 'What a league is not: market, charity'), ('C', 'standard one', 'If it exists to find the best team'), ('D', 'standard two', 'If it exists to sustain a competition'), ('E', 'counter-claim', 'The governing bodies that will not say'), ('F', 'conclusion', 'Which standard the writer adopts, and why')], 'note': 'C and D are the same length and the same shape, and that is the argument: two standards followed honestly. F is where the writer chooses. The essay you will write in this cycle has exactly this skeleton, which is not a coincidence.'},
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 5 · turning liking into judging', 'pairs': [('I agree with this', 'the claim holds, on one standard', 'evaluation'), ('it is unfair', 'it is inequitable by the criterion of need', 'specification'), ('it would not work', 'it would be self-defeating', 'register'), ('people would not like it', 'it would not command consent', 'formality'), ('that is the real question', 'that is the prior question', 'precision'), ('both sides have a point', 'the disagreement is about the criterion, not the facts', 'reformulation')], 'note': 'The last pair is the most useful sentence in this book for a Task 2 that asks you to discuss two views, because it is usually true.'},
    {'kind': 'tracker', 'teaches': 'self-assessment', 'title': 'Before you hand in an evaluate-this-claim essay', 'sub': 'cycle 5 · the last record in this book: tick, half, cross', 'cols': ['essay 1', 'essay 2', 'essay 3'], 'rows': [('A sentence naming the standard, in paragraph one', ['✓', '', '']), ('Each body paragraph follows one standard to its end', ['½', '', '']), ('Paragraph four is about the standard, not the claim', ['', '', '']), ('A reason given for adopting that standard', ['', '', '']), ('Middle register throughout, no borrowed sentence', ['', '', ''])], 'note': 'Five rows, three essays, ninety seconds each time, and a date in the last column. The first row is filled in as a model. In our marking these five questions are worth more than any further vocabulary a candidate could learn in the same week.'},
   ],
   advice='When a Task 2 question asks whether a claim is right, do not start by agreeing or disagreeing. Write one sentence naming the standard: judged by X it holds, judged by Y it does not. Then take a body paragraph for each, and in the conclusion say which standard you adopt and why. Your position is a position about the standard.',
   debrief=dict(
    write=[
      'An essay that says equal shares are fairer, with no standard named, is a band five however well it is written. Add the one sentence and the same content reaches six and a half.',
      'The commonest failure in the fourth paragraph is restating the claim instead of choosing a standard. Reread the two worked sentences above.',
      'Keep the register of the worked sentences in the language bank. One sentence far above the rest of an essay reads as borrowed and is marked as such.',
     ],
    speak=[
      'In Part 3 the same move works and takes four words: it depends what the league is for. Then answer for each case.',
     ]),
   outside='This is the last thing the book teaches and it is the least to do with examinations. Most public disagreements that look like disagreements about facts are disagreements about the standard being applied, and almost nobody names theirs. Naming yours is a habit that will make you clearer than most people you argue with, in any language.',
   recycled=[
      'criterion',
      'position',
      'concession',
      'standard',
      'self-defeating',
      'purpose',
     ],
   read=[
    dict(preview=True,
         heading='A columnist on what a league is for',
         part='Preview', task='True / False / Not Given',
         band='pre', qtype='Questions P1-P3',
         why='The long passage argues about standards. This is the shortest possible version of the same argument.',
         paras=[
          'A league is not a market and it is not a charity, and most of the bad arguments about sport come from treating it as one or the other. A market rewards the efficient and lets the inefficient close; a league needs its weakest members to survive, because a competition with only one plausible winner is not a competition and nobody will pay to watch it.',
          'That is the uncomfortable fact at the centre of every dispute about money in sport: the strong clubs need the weak ones in a way that strong firms do not need weak firms, and they resent being told so. A charity, on the other hand, distributes according to need, and a league that did that would reward failure and remove the reason for anybody to try.',
          'So the question is never whether to redistribute but how much and on what basis, and the honest answer is that nobody knows, because the right answer depends on what you think the league is for. If it exists to find the best team, redistribute little. If it exists to sustain a competition people want to watch, redistribute a great deal. Most governing bodies have never said which they believe, and the vagueness is deliberate, because saying it would cost them the support of one half of their membership.',
         ],
         items=[
          ('The writer says a league is a kind of market.',
           None, 'False',
           'The first sentence says it is not a market and not a charity.'),
          ('The writer says the strong clubs need the weak ones.',
           None, 'True',
           'The middle of the paragraph, where the contrast with firms is made.'),
          ('The writer says most governing bodies redistribute too little.',
           None, 'Not Given',
           'The writer says they have never said what they believe, which is a different complaint.'),
         ]),
    dict(heading='Three attempts to limit spending',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 55-61',
         paras=[
          'Three families of spending limit have been tried in professional '
          'sport over the last forty years, in different competitions and on '
          'different continents, and the pattern across them is consistent '
          'enough to be worth setting out before any fourth attempt is '
          'designed. Each family failed differently, and the differences '
          'are more instructive than the common failure.',
          'The first is the hard cap: an absolute ceiling on wages, equal for '
          'every club. Where it has been applied with a single employer '
          'controlling entry to the sport, it has largely worked, holding '
          'wage shares stable for decades. Where clubs are independent '
          'businesses able to compete in other competitions, it has been '
          'abandoned within about a decade in every case, because a capped '
          'club loses its best players to an uncapped market. The '
          'condition that makes a hard cap work is therefore not legal '
          'drafting but the absence of anywhere else to go.',
          'The second is the soft cap, which permits spending above the '
          'ceiling at a financial penalty. This survives much longer and '
          'does something different from what it says: it does not limit '
          'spending, it prices it. Clubs that can afford the penalty treat it '
          'as a cost of competing, and the limit becomes a transfer from '
          'richer clubs to poorer ones, which is a defensible policy under a '
          'misleading name. Competitions that have described it honestly, '
          'as a tax on outspending, have had fewer disputes about it than '
          'those that have called it a limit.',
          'The third is the ratio rule, limiting spending to a proportion of '
          'the club’s own income. This is the form most competitions have '
          'adopted and it has the most interesting failure. Because income '
          'includes sponsorship, and sponsorship can be paid by a party '
          'related to the owner, the rule requires somebody to decide whether '
          'a given sponsorship is paid at a fair value. Every attempt to '
          'enforce it has turned into a dispute about valuation, and '
          'valuation disputes are won by whoever can afford the better '
          'expert.',
          'So every limit has been met by a structure designed to go round '
          'it, and the structures are legal, documented and advised on by '
          'reputable firms. This is worth stating plainly because the usual '
          'framing is one of cheating, and a rule that is circumvented '
          'lawfully by everybody who can afford advice has a design problem '
          'rather than a compliance problem. The distinction matters '
          'because the two diagnoses lead to opposite responses: one to '
          'more investigators, the other to a different rule.',
          'The ratio rule has a second and less discussed consequence: it '
          'locks in the existing order. A club permitted to spend a '
          'proportion of its own income can never outspend a club with four '
          'times the income, so a rule introduced to improve competitive '
          'balance guarantees that the hierarchy at its introduction is '
          'preserved. Several competitions have observed exactly this and '
          'described it as an unexpected outcome.',
          'What has worked, where anything has, is narrower and duller than a '
          'cap. Rules on the timing and documentation of transactions are '
          'enforceable because they concern facts rather than values. '
          'Mandatory distribution of a share of collective income reduces the '
          'gradient without requiring anybody to be policed. And requiring '
          'wages to be contracted for shorter terms limits the damage when '
          'income falls, which is the mechanism behind most insolvencies.',
          'The honest conclusion is that limits on spending address a real '
          'problem with an instrument badly suited to it. The problem is the '
          'steepness of the rewards; the instrument constrains the response '
          'to that steepness while leaving the steepness in place. A '
          'competition that reduced the gap between first and last would not '
          'need to police spending, because the behaviour it is policing '
          'would no longer be worth the money.'],
         items=[
          (
           'Which paragraph explains why the soft cap survives longer?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1, 'It prices spending rather than limiting it.',
           {0: 'Paragraph 2 describes the hard cap and its condition.', 2: 'Paragraph 4 describes the valuation problem.', 3: 'Paragraph 5 is about lawful circumvention in general.'}),
          ('Which paragraph describes the valuation problem?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           1, 'Sponsorship paid by a party related to the owner.',
           {0: 'Paragraph 3 explains why the soft cap survives longer.', 2: 'Paragraph 5 is about lawful circumvention in general.', 3: 'Paragraph 6 says a rule preserves the existing '
               'hierarchy.'}),
          (
           'Which paragraph says a rule preserves the existing '
           'hierarchy?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'],
           1,
           'A club can never outspend one with four times the income.',
           {0: 'Paragraph 5 is about lawful circumvention in general.', 2: 'Paragraph 7 lists the narrower rules that have worked.', 3: 'Paragraph 8 gives the honest conclusion.'}),
          ('The writer believes clubs avoid spending rules illegally.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 5 says the structures are legal and advised on '
           'by reputable firms.',
           {0: 'Yes would need illegality; paragraph 5 says the '
               'structures are legal.', 2: 'Not Given is wrong because their legality is '
               'addressed.'}),
          ('The writer believes hard caps never work anywhere.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 says they have largely worked with a single '
           'employer controlling entry.',
           {0: 'Yes would need never; paragraph 2 names where they '
               'have worked.', 2: 'Not Given is wrong because the conditions for working '
               'are given.'}),
          ('A rule limiting spending to a share of income is called a '
           '____________ rule.', None, 'ratio',
           'Paragraph 4, the form most competitions have adopted.'),
          ('The real problem is the ____________ of the rewards.',
           None, 'steepness',
           'The final paragraph: the instrument leaves the steepness '
           'in place.')])],
   listen=[
    dict(heading='An administrator and an economist disagree',
         part='Part 4', task='A recorded exchange · multiple choice', band='l4',
         qtype='Questions 62-67',
         script=[
          ('Chair', 'Ms Bergkamp-Osei has run financial regulation for a '
           'league for nine years. Dr Tanaka-Whitbourne studies competitive '
           'balance.'),
          ('Bergkamp-Osei', 'I will start by conceding the thing I am '
           'usually asked to defend. Our ratio rule has not improved '
           'competitive balance. I have the figures, they are published, and '
           'they are flat.'),
          ('Tanaka-Whitbourne', 'Then let me say the part my own paper gets '
           'wrong in return. I have described your rule as a failure and it '
           'is not. It has very substantially reduced insolvency. Fewer clubs '
           'have gone under in the last nine years than in any comparable '
           'period, and that is your rule.'),
          ('Bergkamp-Osei', 'Which is the outcome I would defend it on, and '
           'not the one it was sold on.'),
          ('Tanaka-Whitbourne', 'My objection is to the mechanism. A rule '
           'allowing each club to spend a share of its own income cannot '
           'close a gap, because the club with four times the income is '
           'permitted four times the spending. You have written the existing '
           'hierarchy into the regulations.'),
          ('Bergkamp-Osei', 'That is accurate and I would add something you '
           'did not mention, which is worse. Enforcement is a valuation '
           'argument. Is this sponsorship paid at a fair value? That '
           'question has no determinate answer, and in every case we have '
           'brought, the club with the better expert has won.'),
          ('Tanaka-Whitbourne', 'May I offer the move I think follows? Stop '
           'trying to limit spending. Limit the gradient. Distribute a larger '
           'share of the collective broadcast money equally, and the '
           'behaviour you are policing stops being worth the money.'),
          ('Bergkamp-Osei', 'I agree with the economics entirely and I '
           'cannot deliver it, which is the honest position. Redistribution '
           'needs fourteen votes out of twenty and the clubs that would lose '
           'hold nine.'),
          ('Tanaka-Whitbourne', 'Then that is what my next paper should be '
           'about, and it is not a paper about regulation at all.'),
          ('Bergkamp-Osei', 'Write it. And put in it that the regulator '
           'agreed with you, because that sentence is worth more to this '
           'argument than anything I can do with the rules I have.'),
          ('Tanaka-Whitbourne', 'I will put it in the first paragraph. And '
           'I will take out the sentence calling your rule a failure, '
           'because it is not one and I knew that when I wrote it.'),
          ('Bergkamp-Osei', 'Then we have both given something up, which '
           'is more than happened in the last nine years of this '
           'argument.')],
         items=[
          ('What does Bergkamp-Osei concede at the start?',
           ['The rule is illegal', 'The ratio rule has not improved competitive balance', 'The figures are secret', 'Clubs are cheating'],
           1, 'With published figures that are flat.',
           {0: 'Legality is not what she concedes about the rule.', 2: 'She says the figures are published.', 3: 'She describes lawful structures rather than cheating.'}),
          ('What does Tanaka-Whitbourne concede in return?',
           ['The rule is popular', 'The rule has substantially reduced insolvency', 'His figures are wrong', 'Balance does not matter'],
           1, 'Fewer clubs going under than in any comparable period.',
           {0: 'Popularity is not what he concedes.', 2: 'He stands by his own figures on balance.', 3: 'He continues to treat balance as the aim.'}),
          ('Why can a ratio rule not close a gap?',
           ['Clubs ignore it', 'A club with four times the income may spend four times as much', 'It is too low', 'It expires'],
           1,
           'Which writes the existing hierarchy into the regulations.',
           {0: 'Clubs comply, which is part of the difficulty.', 2: 'The level of the ratio is not what prevents closing a '
               'gap.', 3: 'No expiry of the rule is mentioned.'}),
          ('What does she say enforcement becomes?',
           ['A criminal matter', 'A valuation argument', 'A vote', 'An audit'],
           1, 'And the club with the better expert has won every case.',
           {0: 'No criminal process is described by either speaker.', 2: 'Votes decide redistribution, not enforcement.', 3: 'An audit would establish facts, which is her contrast.'}),
          ('What does he propose instead?',
           ['A hard cap', 'Limiting the gradient by distributing broadcast money more equally', 'Larger penalties', 'Abolishing regulation'],
           1,
           'So that the policed behaviour stops being worth the money.',
           {0: 'A hard cap is not what he proposes here.', 2: 'Larger penalties are the punishment route he avoids.', 3: 'He proposes a different instrument, not none.'}),
          ('Why can she not deliver it?',
           ['It is unlawful', 'It needs fourteen of twenty votes and the losers hold nine', 'The clubs are insolvent', 'The broadcasters refuse'],
           1, 'Which she calls the honest position.',
           {0: 'Lawfulness is not the obstacle she names.', 2: 'She says insolvency has fallen under her rule.', 3: 'Broadcasters are not mentioned as an obstacle.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='Fairness in competition',
    sounds=[('A two-minute long turn loses energy somewhere around the ninety- '
             'second mark, and the drop is audible: the pitch narrows, the '
             'pace rises and the endings go.'),
            ('Plan the last twenty seconds before you start. Knowing how the '
             'answer ends is what stops the voice sagging into it, and the '
             'examiner\'s last impression is formed there.'),
            ('Breathe at the chunk boundaries you marked in Volume 1. Running '
             'out of air is what makes the second half quieter, and it is a '
             'mechanical problem with a mechanical fix.'),
            ('Practise the whole two minutes without stopping, four times this '
             'week, on four different cue cards. Stamina in speech is trained '
             'in the same way as anything else.'),
            ('Record two long turns a week apart and compare only the final '
             'fifteen seconds of each. That is where the band is decided and '
             'the part nobody rehearses.')],
    intro=('Card first, and the last bullet is the one that earns the '
           'band: it asks you to explain rather than to list. After the '
           'long turn the discussion opens: the last Part 3 of the volume. '
           'Try once to separate what a rule achieved from what it was '
           'sold on.'),
    cue=('Describe a match or a contest that was decided unfairly.',
         ['what the event was',
          'what happened',
          'who was affected',
          'and explain what should have been done']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Was the result changed?',
        'Do the rules prevent it now?',
        'Can rules make sporting competition fairer?',
        'Should richer clubs share their income?',
        'Has money ruined professional sport?',
        'What makes a competition worth watching?'],
    shape=[('answer', 'Some rules can, and not the ones usually '
            'proposed.'),
           ('support', 'A rule limiting spending to a share of income '
            'preserves the existing order.'),
           ('follow-up', 'Because a club with four times the income may '
            'spend four times as much.'),
           ('support', 'What that rule did achieve was far fewer '
            'insolvencies.'),
           ('follow-up', 'Which is a real success and not the one it was '
            'sold on.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Has money ruined professional sport?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some people say money has ruined professional '
                 'sport. To what extent do you agree? Write at least 250 '
                 'words.'),
         model=[
          'I agree that money has produced most of what people object to in '
          'professional sport, and disagree that it has ruined it, and the '
          'distinction rests on separating the amount of money from the shape '
          'in which it is distributed.',
          'What money has clearly done is steepen the rewards, and the '
          'behaviour follows from that with some reliability. The larger the '
          'gap between winning and not winning, the greater the incentive to '
          'take risks with tactics, with injuries and with the rules: '
          'detected doping clusters not among the very best but just below '
          'them, where a one per cent improvement crosses a large financial '
          'line. Clubs near relegation spend beyond their means for the same '
          'reason. None of this requires anybody to have become less '
          'honourable than their grandparents.',
          'What money has not done is reduce the quality of the sport itself. '
          'Athletes are better trained, injuries are better managed, more '
          'people watch more competition than at any point in history, and '
          'participation at junior level in most countries is higher than it '
          'was. A sport that had been ruined would not look like that.',
          'The attempts to fix the problem are where I would place the real '
          'failure. Every spending limit has been met by a structure designed '
          'to go round it, lawfully and on professional advice, and the rule '
          'most competitions now use — limiting spending to a share of each '
          'club’s own income — permits a club with four times the income to '
          'spend four times as much, which writes the existing order into the '
          'regulations.',
          'So my answer is that the problem is the gradient and not the '
          'money. A competition distributing more of its collective income '
          'equally would reduce the behaviour it currently polices, because '
          'that behaviour would no longer be worth the money. That is '
          'politically very hard, since the clubs that would lose by it hold '
          'the votes, and it is a different difficulty from the one the '
          'question describes.'],
         notes=[
          'Structure 11, and the agreement and disagreement are about '
          'different things, stated in the first sentence: money caused the '
          'behaviour, and did not ruin the sport.',
          'Paragraph 3 is the one most candidates omit. An essay about what '
          'money has damaged needs a paragraph on what it demonstrably '
          'improved, or the reader supplies the objection themselves.',
          'The conclusion names a political obstacle rather than pretending '
          'the answer is easy. Ending on why the right policy is hard is '
          'stronger than ending on a recommendation nobody could '
          'implement.'],
         model65=[
                  'Some people say money has ruined professional '
                  'sport. I think it has changed it, and that the '
                  'damage is in particular places rather than '
                  'everywhere.',
                  'There is evidence for the complaint. The gap '
                  'between rich and poor clubs has widened, and in '
                  'many leagues the same few clubs win almost every '
                  'year. Ticket prices have risen, so the people who '
                  'supported a club for decades can no longer afford '
                  'to attend.',
                  'But money has also brought benefits. Players are '
                  'paid properly and are no longer forced to retire '
                  'into poverty. Facilities, coaching and medical care '
                  'have improved enormously, and more sport is '
                  'available to watch than ever before.',
                  'I think the problem is not money itself but how the '
                  'rewards are arranged. Where the prizes rise steeply '
                  'at the top, clubs take risks and doping becomes '
                  'more likely. Flatter prize structures and limits on '
                  'spending have worked where one organisation '
                  'controls entry, and those are the changes I would '
                  'support.',
                  ],
         gap65=[
                'It locates the harm in the shape of the reward '
                'structure rather than in the presence of money, and '
                'shows why that shape produces the behaviour.',
                'It reports where spending limits have worked and what '
                'condition made them work.',
                'It treats the objections to flattening prizes as '
                'serious rather than as self-interest.',
                ],
         criterion=[('Agreeing and disagreeing about different things',
                     'Task Response'),
                    ('A paragraph on what money demonstrably improved',
                     'Task Response'),
                    ('Ending on the real obstacle rather than a '
                     'recommendation', 'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    ref='L31',
    context=[
      'From the model answer to this cycle’s task:',
      'Judged by the goal of sustaining a watchable competition, equal shares are close to necessary; judged by the goal of identifying the strongest team, they are perverse. It is the first of these that I take to be the purpose of a professional league, and it is for that reason, rather than from any commitment to equality as such, that I would redistribute.',
     ],
    notice=[
     ('Find the two participle clauses that name a standard.', None,
      'Judged by the goal of sustaining... / judged by the goal of identifying...'),
     ('Find the cleft that selects between them.', None,
      'It is the first of these that I take to be the purpose'),
    ],
    noticetask='Answer both from the paragraph above.',
    contrast='Two structures, and together they are the most efficient way in English to evaluate a claim. The reduced participle clause - judged by X, assessed against Y, measured in Z - names a standard in three words where a full clause takes eight. The it-cleft - it is the first of these that I take to be - selects one item from a set and marks the selection as the point of the sentence. You met clefts in unit 24 for emphasis; this is the same structure doing a different job, which is selection. And notice the final move: rather than from any commitment to equality as such rules out the reason a reader would otherwise assume. Ruling out the obvious misreading is worth more in Task 2 than any further argument.',
    task2='Rewrite each using a participle clause, a cleft, or both.',
    items2=[
     ('If you judge it by the goal of competitive balance, it works.', None,
      'Judged by the goal of competitive balance, it works.'),
     ('If you measure it against revenue, it fails.', None,
      'Measured against revenue, it fails.'),
     ('The second standard is the one I adopt.', None,
      'It is the second standard that I adopt.'),
     ('Rule out the obvious misreading of your position, in ten words.', None,
      'not from any commitment to equality as such'),
    ],
    task3='Now write it, and this is the last writing you will do in this book. Take the claim that a league should share its money equally. Name two standards in participle clauses, select one with a cleft, give your reason, and rule out the misreading a reader would otherwise make. A hundred and twenty words.',
    items3=10,
    point='Evaluative claims and the evidence for them',
    explain=('A word like "ruined" is an evaluation, not a fact, and an '
             'essay has to say what would count as evidence for it. These '
             'patterns attach a test to a judgement.'),
    examples=['Every limit was met by a structure designed to go round it.',
              'A sport that had been ruined would not look like that.',
              'The problem is the gradient and not the money.',
              'That is a real success and not the one it was sold on.'],
    task='Rewrite each judgement so that it names what would count as '
         'evidence.',
    items=[('Money has ruined sport.',
            'If money had ruined the sport, participation and standards '
            'would have fallen, and both have risen.'),
           ('The rule failed.',
            'The rule did not improve competitive balance, which is what it '
            'was introduced to do, and it did reduce insolvency.'),
           ('Clubs cheat.',
            'Clubs circumvent the rule lawfully, on professional advice, '
            'which is a design problem rather than a compliance one.'),
           ('Sport is less fair than it was.',
            'The spread of outcomes between richest and poorest clubs has '
            'widened, which is the measure fairness claims usually rest '
            'on.'),
           ('The new rules are better.',
            'The new rules concern facts rather than values, which is why '
            'they can be enforced at all.')]),
   vocab=[('competitive balance', 'how evenly matched competitors are'),
          ('circumvention', 'lawfully getting round a rule'),
          ('hard cap', 'an absolute ceiling on spending'),
          ('soft cap', 'a ceiling that may be exceeded at a penalty'),
          ('ratio rule', 'a limit set as a share of income'),
          ('related party', 'a business connected to an owner'),
          ('valuation', 'deciding what something is worth'),
          ('redistribution', 'moving income from richer to poorer '
           'members')],
   expr=[('a structure designed to go round it',
          'describes lawful avoidance precisely'),
         ('a design problem rather than a compliance problem',
          'relocates a failure'),
         ('the outcome I would defend it on, and not the one it was sold '
          'on', 'separates achievement from promise'),
         ('I agree with the economics entirely and I cannot deliver it',
          'concedes a case and names the obstacle')],
   trans=['admittedly', 'nevertheless', 'in short', 'so my answer'],
  ),
 ],
 technique=dict(
  title='A full timed Reading paper at Volume 3 length',
  body=('The paper at the back of this book is three passages of 620 to 820 '
        'words and forty questions in sixty minutes, and the arithmetic '
        'matters more than any technique. Dividing sixty by forty gives '
        'ninety seconds a question, which is the figure that ruins people, '
        'because it ignores reading. At 125 to 140 words a minute, the three '
        'passages take about eighteen minutes, and orienting and loading '
        'questions takes about seven. That leaves thirty-five minutes for '
        'forty questions: roughly fifty seconds each. Plan to that number. '
        'The loop is unchanged — orient, load the questions, then one '
        'paragraph at a time — and the only thing the clock changes is that '
        'you do not get to reread a paragraph you did not understand the '
        'first time unless you have decided to spend a question’s worth of '
        'time on it.'),
  panel=[('Seven minutes orienting and loading',
          'Title, headings, first and last sentence of each passage, then '
          'read every question stem before reading the body.'),
         ('Eighteen minutes of reading',
          'About 2,200 words at your current speed. Underline and keep '
          'going.'),
         ('Thirty-five minutes of questions',
          'Fifty seconds each, not ninety. Answer in passage order, not '
          'question order, where they differ.'),
         ('Transfer as you go',
          'There is no transfer time on the computer-delivered test, only a '
          'two-minute check at the end.')],
  task='Sit the paper at the back of this book under timed conditions. Then '
       'answer the five questions below before looking at the key.',
  qs=['How long did orienting and loading actually take you?',
      'Which passage cost you the most time, and why?',
      'How many questions did you leave to come back to?',
      'Did you run out of time, and at which question number?',
      'Which question type was slowest for you, and by how much?']),
 outlining=dict(
  title='The whole toolkit, then a timed outline',
  body=('This is the last outlining lesson of the volume, and it asks you to '
        'use everything: brainstorm ten and keep two; spot the overlap; the '
        'four-sentence test; the six tests; the intruder and the unequal; '
        'ideas of equal weight; and an order chosen on purpose. Run all of '
        'them on one prompt, slowly, and write down which two did the most '
        'work. Then do it again against a twelve-minute clock, and find out '
        'which two you actually use under time pressure. Those two are your '
        'planning method; the rest are training. Nobody uses seven tools in '
        'the exam, and the point of learning seven is to discover which two '
        'are yours.'),
  frame=('A limit is justified in principle and has failed in every '
         'implemented form, which argues for limiting the gradient of the '
         'rewards rather than the spending',
         [('Unlimited spending produces the behaviour everybody objects to, '
           'by arithmetic rather than by character',
           ['steep rewards increase risk-taking and concealment',
            'relegation gradients produce spending beyond means']),
          ('Every spending limit so far has been met by a structure designed '
           'to go round it',
           ['related-party sponsorship at inflated value',
            'enforcement requires valuing transactions nobody can '
            'value'])]),
  task='Take any Task 2 prompt from this volume you have not written. Plan '
       'it with all seven tools untimed, then plan a second prompt in twelve '
       'minutes and record which tools you used.',
  qs=['Which two tools did the most work untimed?',
      'Which two did you use under the clock?',
      'Were they the same two, and if not, why not?',
      'How long did your twelve-minute plan actually take?',
      'Is your outline shorter than seventy words?'],
  answers=['for most people the four-sentence test and the overlap',
           'usually the fastest two, which are not always the most useful',
           'if they differ, practise the useful ones until they are fast',
           'most people need fourteen and get to eleven within a fortnight',
           'if it is longer, you are drafting rather than planning']),
 candos=['I can read a membership scheme for the condition that moves me '
         'between categories',
         'I can organise three visuals with explicit handovers between them',
         'I can explain a behaviour by the incentive that produces it',
         'I can choose the order of my outline on purpose and say why',
         'I can plan a timed Reading paper to the real arithmetic'],
 tip=('Sixty minutes divided by forty questions is not ninety seconds a '
      'question. Take out eighteen minutes of reading and seven of '
      'orienting, and the real figure is about fifty. Plan to fifty.'),
)
