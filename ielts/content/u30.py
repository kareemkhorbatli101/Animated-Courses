# -*- coding: utf-8 -*-
"""Unit 30 - Sport: Money and Ethics. IELTS Volume 3, band 6.0."""

_PIE_A = dict(kind='pie', title='Income sources: Harlow Vale FC',
              sub='per cent of total income, 2023',
              slices=[('Broadcast rights', 54), ('Gate receipts', 14),
                      ('Sponsorship', 22), ('Other', 10)])

_PIE_B = dict(kind='pie', title='Income sources: Carrick Athletic',
              sub='per cent of total income, 2023',
              slices=[('Broadcast rights', 18), ('Gate receipts', 41),
                      ('Sponsorship', 19), ('Other', 22)])

_TAB = dict(kind='table', title='Four clubs: income, wages and league '
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

 cycles=[
  dict(
   sub='Club membership and facilities',
   step=1,
   read=[
    dict(heading='Community club — membership categories',
         kind='Club information',
         task='Table completion and matching features',
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
          ('A player who turns eighteen in January remains a junior until',
           ['January', 'the end of the season', 'the following September',
            'their next birthday'], 2,
           'Paragraph 1, which matters because adult membership costs almost '
           'four times as much.'),
          ('The reduced adult rate applies to members who',
           ['are students', 'live more than twenty miles away',
            'train twice a week', 'joined before September'], 1,
           'Paragraph 2, and the reduction must be asked for.'),
          ('A junior without a signed consent section may',
           ['neither train nor play', 'train but not be selected',
            'play but not train', 'train for one month'], 1,
           'Paragraph 4, discovered most often on a Saturday morning.'),
          ('Family membership costs £____________.', None, '240',
           'Paragraph 3, against £466 if four members paid separately.'),
          ('Non-member facility hire: £____________ an hour', None, '18',
           'Paragraph 5, with members free outside coaching hours.')]),
    dict(heading='Safeguarding and codes of conduct',
         kind='Policy notice', task='Short answer',
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
         task='A call to a community sports club', band='l1',
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
         task='A talk at a sports participation conference', band='l2',
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
          ('The speaker says the membership fee is',
           ['the main barrier', 'almost never the barrier',
            'too low', 'unfairly charged'], 1,
           'Four pounds a month, affordable to most families who do not '
           'join.'),
          ('What stops people, in the speaker’s view?',
           ['The fee', 'Accumulated small unpredictable costs',
            'Lack of interest', 'Travel distance alone'], 1,
           'Boots, lifts, tournament entries announced on Thursday.'),
          ('Why did the subsidy schemes fail?',
           ['They were too small', 'They removed the fee, which was not the '
            'problem', 'Families did not apply', 'Clubs refused them'], 1,
           'Leaving every unpredictable cost in place.'),
          ('What did the successful approach include?',
           ['A larger subsidy', 'One September payment covering everything '
            'and three weeks’ notice of any cost',
            'Free coaching only', 'A new clubhouse'], 1,
           'Participation rose eleven per cent and total cost fell.')])],
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
   read=[
    dict(heading='Four families on the cost of sport',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
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
           'Eleven pounds on a Wednesday for a Saturday tournament.'),
          ('Which person pays in full but finds it a real burden?',
           ['Gudrun', 'Matteus', 'Oluwaseun', 'Bronwen'], 1,
           'About nine per cent of income after rent.'),
          ('For which person was the barrier unrelated to money?',
           ['Gudrun', 'Matteus', 'Oluwaseun', 'Bronwen'], 2,
           'Transport, and no fee changed at any point.'),
          ('Which person left for reasons of time rather than cost?',
           ['Gudrun', 'Matteus', 'Oluwaseun', 'Bronwen'], 3,
           'Four evenings and a Saturday that nobody was enjoying.'),
          ('Matteus thinks the cost of sport should be reduced.',
           ['Yes', 'No', 'Not Given'], 2,
           'He describes what it costs his family and says he would not '
           'stop; he proposes nothing.'),
          ('Oluwaseun’s daughter stopped playing because the fees rose.',
           ['Yes', 'No', 'Not Given'], 1,
           'She stopped when the parent organising lifts moved away, with no '
           'change in fees.')])],
   listen=[
    dict(heading='Two coaches disagree about fees', part='Part 3',
         task='A conversation at a club committee', band='l3',
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
          ('Ferdinand’s original proposal was to',
           ['raise fees', 'abolish junior fees', 'reduce coaching',
            'buy a scoreboard'], 1,
           'Fourteen thousand a year, to be raised from the sponsor.'),
          ('The county programme’s fee waiver raised participation by',
           ['two per cent', 'eleven per cent', 'twenty per cent',
            'nothing'], 0,
           'Having removed the one predictable cost.'),
          ('What raised participation by eleven per cent?',
           ['A bigger waiver', 'One September payment covering everything, '
            'with three weeks’ notice of any cost',
            'Free transport only', 'More coaches'], 1,
           'And it cost the programme less.'),
          ('Why did the successful approach cost less?',
           ['Fewer families joined', 'A waiver goes to everybody who asks',
            'Sponsors paid more', 'Fixtures were reduced'], 1,
           'While a bundled payment is chosen by those needing '
           'predictability.'),
          ('What does Chiara say Ferdinand will not like?',
           ['Losing the scoreboard', 'The notice rule binding coaches',
            'Paying the sponsor back', 'Fewer tournaments for seniors'], 1,
           'Meaning no entry to a tournament heard about on the Monday.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Cost',
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
   read=[
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
          ('Which paragraph explains why broadcast and gate income behave '
           'differently?', ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'A collective contract revised every three years against eleven '
           'thousand local decisions.'),
          ('Which paragraph states the finding about absolute and '
           'proportional spending?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'Spending more is associated with finishing higher; spending a '
           'higher share is not.'),
          ('Which paragraph identifies the structure behind insolvencies?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
            'Paragraph 2'], 2,
           'A variable income matched against a fixed obligation.'),
          ('Harlow Vale: broadcast rights, ____________ per cent', None,
           '54', 'Paragraph 2, against 14 per cent from the gate.'),
          ('Dunmore City: wages as a share of income, ____________ per '
           'cent', None, '94', 'Paragraph 4, with a seventeenth-place '
           'finish.'),
          ('Pellow Rangers: income of ____________ million', None, '41',
           'Paragraph 4, against Dunmore City’s 94 million.')])],
   listen=[
    dict(heading='An analyst on club finances', part='Part 4',
         task='A talk on where club money comes from', band='l4',
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
          ('Why are three visuals needed?',
           ['The data is incomplete', 'No two of them answer the question',
            'The charts are unreliable', 'To compare four clubs'], 1,
           'The charts give sources and the table gives what happens to the '
           'money.'),
          ('Carrick Athletic draws what share from gate receipts?',
           ['14 per cent', '18 per cent', '41 per cent', '54 per cent'], 2,
           'Against 18 per cent from broadcast rights.'),
          ('Broadcast income can fall by',
           ['a tenth', 'a third', 'a half', 'nothing'], 1,
           'On a renegotiation, without local behaviour changing.'),
          ('Dunmore City finished',
           ['fourth', 'sixth', 'eleventh', 'seventeenth'], 3,
           'Paying 94 per cent of income in wages.'),
          ('Which distinction does the analyst say people collapse?',
           ['Income and wages', 'Absolute spending and spending as a share '
            'of income', 'Gate and broadcast', 'Position and points'], 1,
           'The first tends to move a club up; the second does not.'),
          ('What structure lies behind most insolvencies?',
           ['Low gate receipts', 'A variable income matched against a fixed '
            'obligation', 'Too little sponsorship', 'Falling attendances'], 1,
           'Which is invisible in any single one of the three visuals.')])],
   speak=dict(
    part='Part 3', focus='Money in sport',
    intro=('Four or five sentences. Try once to distinguish an amount from a '
           'share.'),
    qs=['Where does the money in professional sport come from?',
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
    point='Hybrid: charts then table, joined explicitly',
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
   read=[
    dict(heading='What happens when the prize gets large',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
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
          'can be altered by a committee.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['Prize structures as design', 'Risk and the gap between first '
            'and second', 'Effort in the middle of a field',
            'Doping'], 1,
           'A competitor behind has little to lose and one ahead has much '
           'to protect.'),
          ('Choose the best heading for paragraph 5.',
           ['Doping', 'Promotion and relegation', 'Punishment',
            'Flattening the gradient'], 1,
           'A club three points above the line in April.'),
          ('Choose the best heading for paragraph 6.',
           ['Promotion and relegation', 'Why punishment disappoints',
            'Flattening the gradient', 'What the analysis establishes'], 1,
           'Punishment raises the cost of being caught while the prize '
           'raises the value of winning.'),
          ('The writer believes doping is mainly a failure of character.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 4 says the distribution follows the prize structure '
           'rather than character.'),
          ('The writer believes the objections to flattening prize '
           'structures are unreasonable.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 7 calls them serious rather than merely '
           'self-interested.'),
          ('Detected doping clusters just ____________ the best '
           'competitors.', None, 'below',
           'Paragraph 4, among those for whom a small gain crosses a large '
           'threshold.'),
          ('The writer says such behaviour is a predictable response to a '
           'reward structure somebody ____________.', None, 'chose',
           'The final paragraph, which is why a committee could change '
           'it.')])],
   listen=[
    dict(heading='A lecture on incentives in sport', part='Part 4',
         task='A lecture on prize structures', band='l4',
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
           ['sport is improving', 'arithmetic can be changed and character '
            'cannot', 'punishment works', 'committees are reliable'], 1,
           'Most of what is called an ethical crisis follows from '
           'committees’ decisions.'),
          ('A larger gap between first and second increases',
           ['effort in the middle', 'risk-taking', 'attendance',
            'fairness'], 1,
           'Because the competitor behind has nothing to lose.'),
          ('Paying prize money by position to the bottom',
           ['reduces effort', 'sustains effort further down the field',
            'has no effect', 'increases doping'], 1,
           'Because finishing eleventh instead of fourteenth then pays '
           'something.'),
          ('Detected doping clusters',
           ['among the very best', 'just below the very best',
            'at the bottom', 'evenly'], 1,
           'Among those for whom one per cent crosses a financial line.'),
          ('Tougher punishment has mainly produced',
           ['less cheating', 'better concealment', 'fewer competitors',
            'lower prizes'], 1,
           'Where the value of winning exceeds the cost of being caught.'),
          ('What does he say about the optimal gradient?',
           ['It is known', 'He does not know and distrusts anybody who '
            'claims to', 'It is zero', 'It is the same in every sport'], 1,
           'While accepting that flattening has real costs.')])],
   speak=dict(
    part='Part 3', focus='Winning and how it is rewarded',
    intro=('Four or five sentences. Try once to explain a behaviour by an '
           'incentive rather than by a character.'),
    qs=['Why do some athletes break the rules?',
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
   read=[
    dict(heading='Three attempts to limit spending',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
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
          ('Which paragraph explains why the soft cap survives longer?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'It prices spending rather than limiting it.'),
          ('Which paragraph describes the valuation problem?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 1,
           'Sponsorship paid by a party related to the owner.'),
          ('Which paragraph says a rule preserves the existing hierarchy?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 8'], 1,
           'A club can never outspend one with four times the income.'),
          ('The writer believes clubs avoid spending rules illegally.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 5 says the structures are legal and advised on by '
           'reputable firms.'),
          ('The writer believes hard caps never work anywhere.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 says they have largely worked with a single employer '
           'controlling entry.'),
          ('A rule limiting spending to a share of income is called a '
           '____________ rule.', None, 'ratio',
           'Paragraph 4, the form most competitions have adopted.'),
          ('The real problem is the ____________ of the rewards.',
           None, 'steepness',
           'The final paragraph: the instrument leaves the steepness '
           'in place.')])],
   listen=[
    dict(heading='An administrator and an economist disagree',
         part='Part 4', task='A recorded exchange', band='l4',
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
           ['The rule is illegal', 'The ratio rule has not improved '
            'competitive balance', 'The figures are secret',
            'Clubs are cheating'], 1,
           'With published figures that are flat.'),
          ('What does Tanaka-Whitbourne concede in return?',
           ['The rule is popular', 'The rule has substantially reduced '
            'insolvency', 'His figures are wrong',
            'Balance does not matter'], 1,
           'Fewer clubs going under than in any comparable period.'),
          ('Why can a ratio rule not close a gap?',
           ['Clubs ignore it', 'A club with four times the income may spend '
            'four times as much', 'It is too low', 'It expires'], 1,
           'Which writes the existing hierarchy into the regulations.'),
          ('What does she say enforcement becomes?',
           ['A criminal matter', 'A valuation argument', 'A vote',
            'An audit'], 1,
           'And the club with the better expert has won every case.'),
          ('What does he propose instead?',
           ['A hard cap', 'Limiting the gradient by distributing broadcast '
            'money more equally', 'Larger penalties',
            'Abolishing regulation'], 1,
           'So that the policed behaviour stops being worth the money.'),
          ('Why can she not deliver it?',
           ['It is unlawful', 'It needs fourteen of twenty votes and the '
            'losers hold nine', 'The clubs are insolvent',
            'The broadcasters refuse'], 1,
           'Which she calls the honest position.')])],
   speak=dict(
    part='Part 3', focus='Fairness in competition',
    intro=('The last Part 3 of the volume. Try once to separate what a rule '
           'achieved from what it was sold on.'),
    qs=['Can rules make sporting competition fairer?',
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
