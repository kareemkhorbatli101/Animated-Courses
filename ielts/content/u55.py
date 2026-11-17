# -*- coding: utf-8 -*-
"""Unit 55 - The Commons and Collective Action. IELTS Volume 6, band 7.5."""

_FISH = dict(kind='line',
             title='Estimated spawning stock in four fisheries',
             sub='thousand tonnes, 1994 to 2024, with the year each '
                 'management regime began marked in the text',
             ylab='thousand tonnes',
             x=['1994', '1999', '2004', '2009', '2014', '2019', '2024'],
             series=[('Brindle Bank', [420, 268, 141, 64, 38, 31, 29]),
                     ('Ashcombe Deep', [390, 246, 128, 155, 241, 318, 362]),
                     ('Kelverstone', [310, 302, 297, 304, 299, 306, 301]),
                     ('Tarnmouth', [355, 221, 109, 52, 34, 27, 24])])

UNIT = dict(
 n=55, vol=6, level='C1', band='7.5',
 theme='The Commons and Collective Action',
 opener=(
   'Four lines on one chart and four names that tell you nothing. Two of '
   'the fisheries collapsed, one collapsed and came back, and one never '
   'moved, and the Task 1 lesson is that the names are not the grouping: '
   'you group by what the lines did. The argument that follows is about '
   'why some shared resources are destroyed and others are not, and it '
   'ends on the most frequently misused finding in the social sciences '
   '— a list of eight features that was a description and is read as a '
   'recipe.'),

 cycles=[
  dict(
   sub='Sharing a resource',
   step=2,
   read=[
    dict(heading='Allotment water use — the new rules',
         kind='Association notice',
         task='Note completion and multiple choice',
         band='gt_short', qtype='Questions 1-6',
         skill=('A shared-resource rule is read for what happens when '
                'somebody ignores it',
                ['Any rule governing something shared has two halves: what '
                 'you may take, and what follows if you take more.',
                 'The second half is the one that determines whether the '
                 'rule works, and it is the half most notices bury at the '
                 'end. Find it first.']),
         paras=[
          'From 1 April, mains water is available between 6am and 9am and '
          'between 6pm and 9pm. Outside those hours the standpipes are '
          'locked. The restriction follows three summers in which supply '
          'failed on nineteen days, every one between noon and four.',
          'Each plot is allocated a rota slot within those windows and the '
          'rota is posted at the gate. Watering outside your slot is '
          'permitted where no other plot-holder is waiting, which in '
          'practice means early mornings in April and almost never in '
          'July.',
          'Hosepipes are not permitted on the standpipes at any time. Cans '
          'may be filled and carried. The association recognises that this '
          'is harder work and notes that a hosepipe left running delivers '
          'in eleven minutes what a plot requires in a week, which is the '
          'behaviour the supply failures were traced to.',
          'Water butts are encouraged and the association supplies them at '
          'cost. A plot with two butts draws on mains about a third as '
          'often as a plot with none, measured across the site last '
          'season, and butts are the only intervention that has reduced '
          'total draw rather than redistributing it.',
          'A plot-holder who takes water outside their slot where others '
          'are waiting receives a note from the committee. A second '
          'instance within the season is heard by the committee. A third '
          'may result in the tenancy being reviewed, and the escalation is '
          'deliberate: a single penalty for a first offence drives disputes '
          'underground and the committee hears nothing until somebody '
          'stops speaking to somebody else.',
          'Any plot-holder may report a breach and reports are not '
          'anonymous, because the committee has found that an anonymous '
          'report is almost never actionable and frequently concerns a '
          'dispute about something else. The person reported is told who '
          'reported them and both are heard at the same meeting.'],
         items=[
          ('Mains water is available between 6am and ____________.',
           None, '9am',
           'Paragraph 1, with an evening window as well.'),
          ('The supply failed on nineteen days, all between noon and',
           ['two', 'three', 'four', 'six'], 2,
           'Paragraph 1, which is why the restriction was introduced.',
           {0: 'Earlier than the end of the failure window.', 1: 'Still short of the hour paragraph 1 gives.', 3: 'Later than the end of the window given.'}),
          ('A hosepipe left running delivers in ____________ minutes what '
           'a plot needs in a week.', None, 'eleven',
           'Paragraph 3, the behaviour the failures were traced to.'),
          ('A plot with two water butts draws on mains about',
           ['half as often', 'a third as often', 'a quarter as often', 'the same amount'],
           1, 'Paragraph 4, the only measure that reduced total draw.',
           {0: 'More often than paragraph 4 reports.', 2: 'Less often than the figure given.', 3: 'Butts reduced the draw rather than leaving it '
               'unchanged.'}),
          ('A second instance within the season is ____________ by the '
           'committee.', None, 'heard',
           'Paragraph 5, with escalation to tenancy review on a third.'),
          (
           'Reports of a breach are not anonymous because an anonymous '
           'report is almost never',
           ['believed', 'actionable', 'received', 'recorded'], 1,
           'Paragraph 6, and often concerns a different dispute.',
           {0: 'Belief is not the reason paragraph 6 gives.', 2: 'Anonymous reports are received; they cannot be acted '
               'on.', 3: 'Reports are recorded whether or not they lead '
               'anywhere.'})]),
    dict(heading='How disputes are settled',
         kind='Procedure notice', task='Note completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Speak to the other plot-holder first, and the committee will ask '
          'whether you have. Roughly four disputes in five end here, and '
          'the ones that do not are rarely about the thing named in the '
          'complaint, which is why the committee asks.',
          'Where that fails, submit the complaint in writing with the plot '
          'numbers and the dates. A complaint without dates cannot be put '
          'to the other party in a form they can answer, and the committee '
          'will return it rather than hear it.',
          'Both parties are heard at the same meeting, in each other’s '
          'presence. Separate hearings were tried for two seasons and '
          'abandoned, because each party then answered a version of the '
          'complaint they had heard second-hand.',
          'The committee decides within seven days and the decision is '
          'posted at the gate without names. Publication without names is '
          'deliberate: the site learns what the rule means in practice, '
          'and nobody is made an example of.',
          'Either party may ask for the matter to be reconsidered once, '
          'and only where something has come to light that was not before '
          'the committee. A request that repeats the original argument is '
          'refused, and the committee has never in eleven years reversed '
          'a decision on a repeated argument, which it records here so '
          'that nobody spends a fortnight preparing one.'],
         items=[
          ('Roughly ____________ disputes in five end after speaking to '
           'the other plot-holder.', None, 'four',
           'Paragraph 1, which is why the committee asks first.'),
          ('A complaint must include plot numbers and ____________.',
           None, 'dates',
           'Paragraph 2: without them it cannot be answered.'),
          ('Both parties are heard at the same ____________.', None,
           'meeting',
           'Paragraph 3, after separate hearings were abandoned.'),
          ('The decision is posted at the gate without ____________.',
           None, 'names',
           'Paragraph 4, so the site learns the rule without anybody being '
           'made an example.')])],
   listen=[
    dict(heading='Raising a dispute with the committee', part='Part 1',
         task='A call to an allotment association secretary · note completion', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Secretary', 'Fernhill Allotments, Hildegarde speaking.'),
          ('Caller', 'Hello. I want to raise a complaint about water '
           'use.'),
          ('Secretary', 'Which plot are you?'),
          ('Caller', 'Forty-seven B.'),
          ('Secretary', 'Forty-seven B. And the complaint is about?'),
          ('Caller', 'The plot next to mine runs a hosepipe in the '
           'afternoons, when the standpipes are supposed to be locked.'),
          ('Secretary', 'Have you spoken to them?'),
          ('Caller', 'No. Do I have to?'),
          ('Secretary', 'You do not have to and the committee will ask, '
           'and four disputes in five end at that conversation. The ones '
           'that do not are usually not about the thing in the '
           'complaint.'),
          ('Caller', 'I will speak to them. If it does not work?'),
          ('Secretary', 'In writing, with the plot numbers and the dates. '
           'Dates especially — without them we cannot put it to the other '
           'party in a form they can answer and it comes back to you.'),
          ('Caller', 'I have four dates written down.'),
          ('Secretary', 'That is more than most people bring. Now, you '
           'should know both of you are heard at the same meeting, in the '
           'same room.'),
          ('Caller', 'I would rather not.'),
          ('Secretary', 'Most people say that. We tried separate hearings '
           'for two seasons and each side ended up answering a version of '
           'the complaint they had heard second-hand, so we stopped.'),
          ('Caller', 'Fair enough. When would it be heard?'),
          ('Secretary', 'The committee sits on the second Tuesday, so that '
           'is the fourteenth of June, and the decision comes within seven '
           'days.'),
          ('Caller', 'Will my name be posted?'),
          ('Secretary', 'The decision goes on the gate without names. The '
           'other party will know it was you, because they are in the room, '
           'but the site does not.'),
          ('Caller', 'And what can actually happen to them?'),
          ('Secretary', 'A note for a first instance, a hearing for a '
           'second, and on a third the tenancy is reviewed. It steps up on '
           'purpose, so that a first complaint is not a catastrophe for '
           'anybody.')],
         items=[
          ('Caller\u2019s plot number: ____________', None, '47B',
           'The plot number is given as the caller introduces herself.'),
          ('The committee will ask whether the caller has ____________ to '
           'the other plot-holder.', None, 'spoken',
           'Four disputes in five end at that conversation.'),
          ('A written complaint must carry plot numbers and ____________.',
           None, 'dates',
           'Without which it is returned rather than heard.'),
          ('Both parties are heard in the same ____________.', None,
           'room',
           'After separate hearings were abandoned.'),
          ('Hearing date: ____________ June', None, '14',
           'The second Tuesday, with a decision within seven days.'),
          ('On a third instance the ____________ is reviewed.', None,
           'tenancy',
           'After a note and then a hearing.')])],
   speak=dict(
    part='Part 1', focus='Things people share where you live',
    intro=('Two or three sentences each. Something actually shared where '
           'you live beats a general comment.'),
    qs=['Do people share anything where you live?',
        'Are there rules about it?',
        'Do people follow the rules?',
        'What happens if somebody does not?'],
    shape=[('answer', 'A courtyard and a bin store, and the bin store is '
            'the problem.'),
           ('support', 'There is a rota for cleaning it that four flats '
            'out of nine follow.'),
           ('follow-up', 'Nothing happens to the other five, which is '
            'probably why there are five.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Proposing a fairer rule for a shared resource',
         prompt=('A rule about something shared where you live is unfair. '
                 'Write a letter proposing a better one. In your letter: '
                 'say what the present rule is; explain why it is unfair; '
                 'propose an alternative. Write at least 150 words.'),
         model=[
          'Dear Committee,',
          'I am writing about the bin store rota for Carrow Court, and I am '
          'proposing a change rather than complaining about particular '
          'neighbours.',
          'The present rule assigns each of the nine flats one week in '
          'nine. The present rule rewards those who ignore it, in that a '
          'flat which does nothing in its week imposes the work on whoever '
          'has the following week, and the following week always arrives. '
          'There is no point at which an unperformed week is noticed by '
          'anybody except the next household in the sequence, who then has '
          'to decide between doing double work and starting an argument '
          'with a neighbour. Four flats perform their week and five do '
          'not, which I would expect of any rule built this way.',
          'I propose that the rota be posted with a dated tick sheet in the '
          'store, that any resident may mark a week as not done, and that '
          'three unmarked weeks in a year are raised at the annual meeting '
          'without naming the flat. I anticipate two objections. The first '
          'is that nobody wants to inform on a neighbour, which is why the '
          'sheet records the week rather than the person. The second is '
          'that this adds administration; it adds one laminated sheet.',
          'Yours faithfully,',
          'P. Adeyemi-Kowalczyk'],
         notes=[
          'The diagnosis is structural rather than personal: the rule '
          'places the cost of non-performance on the next household rather '
          'than on the defaulter. A proposal that explains why reasonable '
          'people produce a bad outcome is far harder to dismiss than one '
          'that names names.',
          'The two objections are anticipated and answered inside the '
          'proposal. A committee reading an unanswered objection will '
          'raise it and defer; a committee reading an answered one has to '
          'find a new one.',
          '"It adds one laminated sheet" is doing real work. Costing your '
          'own proposal precisely, and finding the cost trivial, removes '
          'the standard reason for doing nothing.'],
         criterion=[('A structural diagnosis rather than a personal one',
                     'Task Response'),
                    ('Objections anticipated and answered',
                     'Task Achievement'),
                    ('The proposal costed, and the cost trivial',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Proposal with anticipated objections answered',
    explain=('A proposal that answers its objections before they are made '
             'is decided on its merits. These patterns raise an objection '
             'and close it in one movement.'),
    examples=['The present rule rewards those who ignore it, in that...',
              'I anticipate two objections. The first is that...',
              'Which is why the sheet records the week rather than the '
              'person.',
              'It adds administration; it adds one laminated sheet.'],
    task='Rewrite each sentence so that it raises and answers an '
         'objection.',
    items=[('People will say this is extra work.',
            'This adds administration, in the form of one sheet renewed '
            'annually.'),
           ('Some will not want to report neighbours.',
            'Nobody wishes to inform on a neighbour, which is why the sheet '
            'records the week and not the household.'),
           ('The rota is unfair.',
            'The rota places the cost of an unperformed week on the next '
            'household rather than on the one that skipped it.'),
           ('People might abuse the tick sheet.',
            'A sheet could be marked maliciously, which the annual review '
            'of three marks rather than one is designed to absorb.'),
           ('It has always been done this way.',
            'The present arrangement has stood for six years, over which '
            'performance has fallen from seven flats to four.')]),
   vocab=[('rota', 'a list assigning turns in order'),
          ('free rider', 'somebody who benefits without contributing'),
          ('standpipe', 'a fixed outdoor tap on shared ground'),
          ('escalating penalty', 'a consequence that rises with '
           'repetition'),
          ('infringement', 'a failure to observe a rule'),
          ('right to occupy', 'the entitlement to hold a plot'),
          ('ration by turn', 'allocating a resource by taking turns'),
          ('standing to object', 'the right to raise a complaint')],
   expr=[('The present rule rewards those who ignore it, in that...',
          'the structural opening of a proposal'),
         ('a single penalty for a first offence drives disputes '
          'underground', 'defends escalation'),
         ('the site learns what the rule means and nobody is made an '
          'example', 'explains naming policy'),
         ('it adds one laminated sheet',
          'costs a proposal out of its own objection')],
   trans=['furthermore', 'in this connection', 'I anticipate',
          'I propose that'],
  ),

  dict(
   sub='When everyone acts alone',
   step=4,
   read=[
    dict(heading='Four users of one shared resource',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Thaddeus, skipper, Tarnmouth: I knew the stock was going. '
          'Everybody knew by about 2003. What nobody could do was stop '
          'alone, because a boat that ties up for a season does not save a '
          'single fish — the quota it does not take is taken by the boat '
          'alongside. I was not the villain of this and I was part of '
          'it.',
          'B  Marguerite, Ashcombe Deep: Ours went the same way until 2007, '
          'when the fleet agreed a closed season and an independent '
          'observer on every boat. The observers cost us about four per '
          'cent of the catch value and the agreement held, and the '
          'agreement held because of the observers rather than because we '
          'are better people than Tarnmouth.',
          'C  Hieronymus, Kelverstone: Our stock has not moved in thirty '
          'years and people treat us as the success story, which I resist. '
          'Our grounds are hard to reach, the weather is foul, and the '
          'shoals sit where nets tear. Nobody has ever been able to fish it '
          'hard. Being protected by difficulty is not the same as being '
          'well governed.',
          'D  Perpetua, who regulates all four: I have watched three of '
          'these and inherited the fourth. The thing I would say to anybody '
          'drawing lessons is that Ashcombe did something and Kelverstone '
          'did not, and from outside they look similar. A rule that was '
          'never tested is not a rule that worked.'],
         items=[
          (
           'Which person explains why stopping alone achieves nothing?',
           ['Thaddeus', 'Marguerite', 'Hieronymus', 'Perpetua'], 0,
           'The quota not taken is taken by the next boat.',
           {1: 'Marguerite credits an enforcement mechanism rather '
               'than character.', 2: 'Hieronymus resists being described as a success.', 3: 'Perpetua warns that two different cases look alike '
               'from outside.'}),
          (
           'Which person credits an enforcement mechanism rather than '
           'character?',
           ['Thaddeus', 'Marguerite', 'Hieronymus', 'Perpetua'], 1,
           'Observers costing about four per cent of catch value.',
           {0: 'Thaddeus explains why stopping alone achieves nothing.', 2: 'Hieronymus resists being described as a success.', 3: 'Perpetua warns that two different cases look alike '
               'from outside.'}),
          ('Which person resists being described as a success?',
           ['Thaddeus', 'Marguerite', 'Hieronymus', 'Perpetua'], 2,
           'Protected by difficulty rather than by governance.',
           {0: 'Thaddeus explains why stopping alone achieves nothing.', 1: 'Marguerite credits an enforcement mechanism rather '
               'than character.', 3: 'Perpetua warns that two different cases look alike '
               'from outside.'}),
          (
           'Which person warns that two different cases look alike '
           'from outside?',
           ['Thaddeus', 'Marguerite', 'Hieronymus', 'Perpetua'], 3,
           'One did something and the other did not.',
           {0: 'Thaddeus explains why stopping alone achieves nothing.', 1: 'Marguerite credits an enforcement mechanism rather '
               'than character.', 2: 'Hieronymus resists being described as a success.'}),
          (
           'Thaddeus believes he bears no responsibility for the '
           'collapse.', ['Yes', 'No', 'Not Given'], 1,
           'He says he was part of it while not being its villain.',
           {0: 'Yes would need exemption; he says he was part of it.', 2: 'Not Given is wrong because he places himself in the '
               'story.'}),
          (
           'Marguerite attributes her fishery\u2019s recovery to the '
           'character of its fleet.',
           ['Yes', 'No', 'Not Given'], 1,
           'She credits the observers rather than being better people.',
           {0: 'Yes would need character; she credits the observers.', 2: 'Not Given is wrong because she gives the cause.'})])],
   listen=[
    dict(heading='A short talk: when everyone acts alone', part='Part 2',
         task='A talk to an environmental policy group · multiple choice', band='l2',
         qtype='Questions 23-26',
         script=[
          ('Speaker', 'I want to describe the structure that produces these '
           'outcomes, because once you can see it you stop being surprised '
           'by them and you also stop moralising about them, which is the '
           'more useful of the two.'),
          ('Speaker', 'Here is the shape. A resource that nobody can be '
           'excluded from, and that is diminished by use. Each user faces '
           'the same arithmetic: the benefit of taking more goes entirely '
           'to them, and the cost of the resource declining is shared among '
           'everybody. So taking more is individually correct at every '
           'level of stock, including the level at which the thing is about '
           'to disappear.'),
          ('Speaker', 'Notice what that does and does not require. It does '
           'not require greed, ignorance or short-sightedness. A skipper '
           'who knows precisely what is happening, cares about it, and '
           'intends to leave the boat to a daughter faces the same '
           'arithmetic, because tying up for a season does not save a fish. '
           'The quota he leaves is taken by the boat alongside.',),
          ('Speaker', 'Which is why the moral framing fails so completely. '
           'Telling users to restrain themselves asks each of them to bear '
           'a cost for a benefit that will be captured by whoever does not '
           'restrain themselves, and the people who comply are selected '
           'against. Appeals of this kind do not merely fail; they fail in '
           'a direction.'),
          ('Speaker', 'The escapes are therefore structural. Exclude people '
           'from the resource, by ownership or by licence. Or let the users '
           'bind themselves jointly, which is what Ashcombe did, and notice '
           'that the agreement there held because of observers on every '
           'boat rather than because of goodwill. Goodwill was present at '
           'Tarnmouth too.'),
          ('Speaker', 'And the warning I would leave you with concerns the '
           'fourth case on my chart, which never declined at all. It is '
           'not a success. Nobody has ever been able to fish it hard, '
           'because the grounds are difficult and the weather is foul. A '
           'rule that was never tested is not a rule that worked, and the '
           'policy literature is full of institutions praised for surviving '
           'a pressure they never experienced.')],
         items=[
          ('The structure requires a resource that is',
           ['owned', 'impossible to exclude people from and diminished by use', 'scarce and valuable', 'publicly funded'],
           1, 'Giving each user the same arithmetic.',
           {0: 'Ownership is what would break the structure.', 2: 'Scarcity alone does not produce the arithmetic.', 3: 'Public funding is not part of the structure.'}),
          ('The outcome does not require',
           ['many users', 'greed or short-sightedness', 'a large resource', 'weak law'],
           1,
           'A skipper who knows and cares faces the same arithmetic.',
           {0: 'He does not say the number of users is irrelevant.', 2: 'Resource size is not what he rules out.', 3: 'Weak law is not the condition he dismisses.'}),
          ('He says appeals for restraint fail',
           ['sometimes', 'in a direction, because compliers are selected against', 'only where users are many', 'unless repeated'],
           1,
           'The benefit is captured by whoever does not restrain '
           'themselves.',
           {0: 'He says they fail in a direction, not sometimes.', 2: 'He does not limit the failure to large groups.', 3: 'Repetition does not change the arithmetic.'}),
          ('The fourth fishery, which never declined, he describes as',
           ['the best governed', 'not a success', 'a model for others', 'poorly measured'],
           1, 'Because nobody has ever been able to fish it hard.',
           {0: 'He says it is not a case of governance at all.', 2: 'He warns against treating it as a model.', 3: 'Measurement is not what he questions about it.'})]),
    dict(heading='Two residents disagree about shared costs',
         part='Part 3', task='A discussion between two residents · multiple choice',
         band='l3', qtype='Questions 27-32',
         script=[
          ('Casimir', 'I am going to propose we charge every flat for the '
           'courtyard maintenance whether they use it or not.'),
          ('Thomasina', 'And I am going to resist that, and I want to say '
           'first that I accept the problem.'),
          ('Casimir', 'Say what you accept.'),
          ('Thomasina', 'Four flats pay, nine benefit, and the four who pay '
           'are the four who always pay for everything. That is unjust and '
           'it is also unstable, because they will eventually stop.'),
          ('Casimir', 'Then what is the objection?'),
          ('Thomasina', 'Compulsion for the courtyard is fine. Compulsion '
           'as a principle worries me, because the next proposal is the '
           'roof garden, which three flats use and nobody else can reach, '
           'and the argument you have just made covers that too.'),
          ('Casimir', 'That is a fair extension and I had not thought it '
           'through.'),
          ('Thomasina', 'Most people have not. The test I would use is '
           'whether somebody can be excluded from the benefit. Nobody can '
           'be excluded from a clean courtyard; you walk through it. Three '
           'flats can be excluded from the roof garden, and are, by a '
           'locked door.'),
          ('Casimir', 'So compulsory for things you cannot be kept out of, '
           'and voluntary for things you can.'),
          ('Thomasina', 'That is the line, and it is not mine — it is '
           'about two hundred years old and it is why street lighting is '
           'paid from taxes and gyms are not.'),
          ('Casimir', 'And where does the stairwell lighting go?'),
          ('Thomasina', 'Compulsory. Nobody can walk up unlit stairs '
           'selectively.'),
          ('Casimir', 'The window boxes on the front elevation?'),
          ('Thomasina', 'Voluntary, and I would expect about three flats '
           'to pay and everybody to enjoy them, which is exactly the '
           'situation you object to and I am prepared to live with '
           'because the sum is eleven pounds.'),
          ('Casimir', 'So the test has a threshold under it that you have '
           'not mentioned.'),
          ('Thomasina', 'It does, and that is worth putting in '
           'writing.'),
          ('Casimir', 'Then let me test it. The bin store. You can be '
           'excluded; it has a key.'),
          ('Thomasina', 'And a dirty bin store attracts rats that do not '
           'respect the key, so the benefit of cleaning it reaches '
           'everybody whether or not they hold one. It goes on the '
           'compulsory side.'),
          ('Casimir', 'So the test is about the benefit rather than the '
           'access.'),
          ('Thomasina', 'That is the refinement, and you found it rather '
           'than me. Put it in the proposal that way.')],
         items=[
          ('Thomasina begins by accepting that',
           ['the courtyard is clean', 'four flats pay and nine benefit', 'compulsion is needed', 'the rota works'],
           1, 'Which she calls unjust and unstable.',
           {0: 'Cleanliness of the courtyard is not what she concedes.', 2: 'Compulsion for the courtyard she accepts later, '
               'separately.', 3: 'No rota is part of this dispute.'}),
          ('Her objection concerns',
           ['the courtyard', 'compulsion as a principle extending to the roof garden', 'the cost', 'the committee'],
           1, 'Which Casimir\u2019s argument would also cover.',
           {0: 'She accepts compulsion for the courtyard.', 2: 'Cost comes in only at the window boxes.', 3: 'The committee is not what she objects to.'}),
          ('The test she proposes is whether somebody can be',
           ['charged', 'excluded from the benefit', 'identified', 'consulted'],
           1, 'Nobody can be excluded from a clean courtyard.',
           {0: 'Charging is what follows from the test, not the test.', 2: 'Identifying users is not the question she asks.', 3: 'Consultation is not part of her test.'}),
          ('She says the principle is',
           ['hers', 'about two hundred years old', 'new', 'contested'],
           1,
           'And explains why street lighting is taxed and gyms are '
           'not.',
           {0: 'She says explicitly that it is not hers.', 2: 'She dates it back about two hundred years.', 3: 'She treats it as settled, with examples.'}),
          ('The bin store falls on the compulsory side because',
           ['it has a key', 'rats do not respect the key', 'everybody uses it', 'it is expensive'],
           1, 'So the benefit of cleaning reaches everybody.',
           {0: 'The key is why it looks excludable.', 2: 'Use is not what puts it on the compulsory side.', 3: 'Cost is not the deciding factor here.'}),
          ('The refinement they reach is that the test concerns',
           ['access', 'the benefit rather than the access', 'cost', 'frequency of use'],
           1, 'Which Casimir found rather than Thomasina.',
           {0: 'Access is the test they start with and refine.', 2: 'Cost is the threshold under the test, separately.', 3: 'Frequency of use is not part of the test.'})])],
   speak=dict(
    part='Part 1 into Part 2', focus='Sharing',
    longturn=[('The shared thing I want to describe is a set of allotment '
               'gardens behind a row of houses, about thirty plots, which '
               'worked for decades and then nearly collapsed.'),
              ('It was shared by the tenants of the plots, who paid a small '
               'rent to the council but ran everything else themselves: a '
               'water supply, two sheds of communal tools, a compost area, and '
               'a rota for cutting the paths.'),
              ('What happened was that the water bill, which had been divided '
               'thirty ways and paid by a treasurer, went unpaid for most of a '
               'year after the treasurer moved away, and the supply was cut '
               'off in July. By the time it was restored, about a third of the '
               'plots had been abandoned, and the following spring the paths '
               'were not cut because the rota had been kept in the treasurer\'s '
               'head.'),
              ('Why I think it failed is nothing to do with the usual story '
               'about shared resources. Nobody over-used the water and nobody '
               'took more than their share of the tools; the free-riding '
               'problem that the textbooks predict simply did not arise in '
               'twenty years. What failed was succession. Every function that '
               'worked depended on one person who had always done it, and none '
               'of it was written down, so the loss of a single member took '
               'out the water, the rota and the records at once. The '
               'arrangement that survived for decades was not robust; it was '
               'lucky, and it had no way of knowing the difference. What it '
               'needed was the dullest possible intervention: two signatories, '
               'a written rota, and a list of who pays what.')],
    intro=('Short answers, then the long turn. The final bullet is where '
           'the band is decided.'),
    cue=('Describe something shared that worked well or failed.',
         ['what was shared', 'who shared it',
          'what happened',
          'and explain why you think it worked or failed']),
    qs=['Do you share things with neighbours or colleagues?',
        'Is sharing common where you live?',
        'Now look at the card. You have one minute to make notes.',
        'Why do shared arrangements sometimes break down?'],
    shape=[('answer', 'A shared bin store in my building, which '
            'failed.'),
           ('support', 'Nine flats, a rota, and four of them doing it.'),
           ('follow-up', 'The five who skipped never faced anything at '
            'all.'),
           ('support', 'And the cost of a skipped week fell on whoever had '
            'the next one.'),
           ('follow-up', 'So the rule punished the people following it, '
            'which is why it was always going to end up where it '
            'did.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should people be compelled to contribute to shared '
                 'goods?',
         prompt=('Some believe people should be compelled to contribute to '
                 'shared goods such as parks, defence and public '
                 'broadcasting; others believe contribution should be '
                 'voluntary. Discuss both views and give your own opinion. '
                 'Write at least 250 words.'),
         model=[
          'The argument for voluntary contribution rests on a principle '
          'most people accept, and it fails for a reason that has nothing '
          'to do with the principle and everything to do with the '
          'arithmetic facing each contributor.',
          'That principle is real and should be stated properly. Compelled '
          'payment for something a person does not want is a transfer '
          'taken by force, and the fact that a majority wanted it does not '
          'make it voluntary for the minority. Any serious defence of '
          'compulsion has to accept that it is compulsion, and the '
          'defences that describe taxation as a kind of subscription are '
          'evading the thing they are meant to justify.',
          'The difficulty is structural. Where a good cannot be withheld '
          'from those who do not pay, each individual faces the same '
          'calculation: contributing costs them the full amount and '
          'produces a benefit shared across everybody, while not '
          'contributing costs nothing and loses almost nothing. The '
          'arithmetic is identical for a generous person and a selfish '
          'one, which is why appeals to generosity do not merely fail but '
          'fail in a direction: those who comply bear the cost and are '
          'selected against.',
          'What follows is a usable line rather than a general preference, '
          'and it is about the benefit rather than about access. A clean '
          'courtyard cannot be withheld from a resident who walks through '
          'it; street lighting cannot be withheld from a passer-by. A gym '
          'can be, by a door. The first category needs compulsion because '
          'nothing else is stable; the second does not, and compelling '
          'contributions to it is simply a transfer towards the people who '
          'use it.',
          'My own position is therefore narrow and I would hold it firmly. '
          'Compel contribution where the benefit reaches people who have '
          'not paid and cannot be prevented from receiving it; leave it '
          'voluntary where exclusion is practical, even where the thing is '
          'plainly good. And apply the test to the benefit and not to the '
          'gate: a bin store has a key, but the rats it attracts do not '
          'respect it, and that is what puts cleaning it on the compulsory '
          'side of the line.'],
         notes=[
          'The second paragraph concedes that compulsion is compulsion and '
          'refuses the usual euphemism. Structure 6 at this level requires '
          'the rejected option to be stated in terms its holders would '
          'accept, and this one is stated more honestly than they usually '
          'manage.',
          'Paragraph 3 identifies the failure as arithmetic rather than '
          'moral, and the clause "identical for a generous person and a '
          'selfish one" is what makes it an argument rather than an '
          'assertion.',
          'The final paragraph produces a test that can be applied by a '
          'reader to a case the essay never mentions, and then applies it '
          'to one awkward case. An essay that survives its own hardest '
          'example is doing something few do.'],
         criterion=[('Conceding that compulsion is compulsion',
                     'Task Response'),
                    ('Locating the failure in arithmetic, not character',
                     'Task Response'),
                    ('A test the reader can apply to a new case',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Concessive-contrastive chains',
    explain=('At this level a concession is a short chain rather than a '
             'word: grant the point fully, mark its limit, state yours. '
             'These patterns build the chain without losing the reader.'),
    examples=['Each acting reasonably produces an outcome none of them '
              'wanted.',
              'I was not the villain of this and I was part of it.',
              'Goodwill was present at Tarnmouth too, which is why it '
              'explains nothing.',
              'Being protected by difficulty is not the same as being well '
              'governed.'],
    task='Rewrite each pair as a concessive chain.',
    items=[('People are selfish. That is why commons fail.',
            'Commons fail where the arithmetic is the same for a generous '
            'user as for a selfish one, which is why character explains '
            'so little of the variation.'),
           ('He knew the stock was collapsing. He kept fishing.',
            'He knew precisely what was happening and kept fishing, '
            'because a boat that ties up saves no fish at all.'),
           ('That fishery never declined. It is well governed.',
            'That fishery never declined, and nobody has ever been able to '
            'fish it hard, so its rules have not been tested.'),
           ('Observers cost money. The agreement held.',
            'The observers cost about four per cent of catch value, and '
            'the agreement held because of them rather than despite '
            'them.'),
           ('Appeals to restraint are well meant. They do not work.',
            'Appeals to restraint are well meant and fail in a direction, '
            'since those who comply bear a cost the others '
            'capture.')]),
   vocab=[('non-contributor', 'somebody who benefits without putting in'),
          ('sanction', 'a penalty attached to a breach'),
          ('reciprocity', 'contributing because others do'),
          ('collective action', 'acting together where acting alone '
           'fails'),
          ('keeping others out', 'preventing non-payers from '
           'benefiting'),
          ('mutual coercion', 'a rule users impose on themselves '
           'jointly'),
          ('withholding', 'keeping a benefit from those who do not pay'),
          ('contribution', 'what each participant puts in')],
   expr=[('Each acting reasonably produces an outcome none of them '
          'wanted', 'the cycle’s governing sentence'),
         ('appeals of this kind do not merely fail; they fail in a '
          'direction', 'states a selection effect'),
         ('a rule that was never tested is not a rule that worked',
          'refuses a false success story'),
         ('the test is about the benefit rather than the access',
          'refines a line in nine words')],
   trans=['whereas', 'that said', 'what follows is',
          'the difficulty is structural'],
  ),

  dict(
   sub='What happens without rules',
   step=5,
   read=[
    dict(heading='Four fisheries and four outcomes',
         kind='Data article',
         task='Matching information and note completion',
         band='gt_work', qtype='Questions 33-38',
         figure=_FISH,
         paras=[
          'The chart shows estimated spawning stock in four fisheries over '
          'thirty years. The four names carry no information and the four '
          'lines carry a great deal, and a description organised by name '
          'will say almost nothing that a description organised by outcome '
          'says immediately.',
          'Two of the four follow an almost identical path. Brindle Bank '
          'fell from 420 thousand tonnes to 29 and Tarnmouth from 355 to '
          '24, both declining steeply to about 2009 and then flattening at '
          'a very low level. Neither has recovered in the fifteen years '
          'since, and the flattening is the shape of a stock too small to '
          'rebuild rather than of one being managed.',
          'A third, Ashcombe Deep, declined on the same trajectory and then '
          'reversed. It fell from 390 to 128 by 2004, reached its minimum '
          'in that period, and rose steadily thereafter to 362 by 2024, '
          'ending within eight per cent of where it began. The reversal '
          'begins between the 2004 and 2009 readings.',
          'The fourth, Kelverstone, did not move. It stood at 310 in 1994 '
          'and 301 in 2024, varying by no more than nine thousand tonnes '
          'in either direction across the whole period, which is a '
          'different kind of line from the other three and needs its own '
          'sentence rather than a mention.',
          'The management histories explain three of the four and are worth '
          'setting beside the lines. Brindle Bank and Tarnmouth operated '
          'under quota from 1996, with reporting by the vessels '
          'themselves. Ashcombe Deep operated under the same system until '
          '2007, when its fleet agreed a closed season and an independent '
          'observer on every boat, at a cost of about four per cent of '
          'catch value.',
          'Kelverstone has no management regime at all. Its grounds are '
          'distant, its weather is poor and its shoals sit over ground that '
          'damages gear, and effort there has never risen high enough to '
          'threaten the stock. It is the only one of the four whose '
          'stability owes nothing to any decision anybody took.',
          'That last point is the one most often lost. A chart of this kind '
          'invites the reading that two fisheries were badly governed, one '
          'well governed and one best governed of all, and the fourth case '
          'is not a case of governance. An institution that was never under '
          'pressure has not demonstrated anything about institutions, and '
          'the policy literature contains a long list of models drawn from '
          'exactly this error.'],
         items=[
          (
           'Which paragraph describes the two fisheries that collapsed '
           'and stayed collapsed?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           0,
           'Brindle Bank and Tarnmouth, flattening at a very low '
           'level.',
           {1: 'Paragraph 3 describes the fishery that recovered.', 2: 'Paragraph 4 describes the fishery that did not move.', 3: 'Paragraph 5 gives the management histories.'}),
          (
           'Which paragraph explains why one fishery was never under '
           'pressure?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'],
           2,
           'Distant grounds, poor weather and ground that damages '
           'gear.',
           {0: 'Paragraph 4 describes that fishery\u2019s flat line.', 1: 'Paragraph 5 gives the management histories.', 3: 'Paragraph 7 warns against reading the fourth case as '
               'governance.'}),
          (
           'Which paragraph warns against reading the fourth case as '
           'governance?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 4'],
           2,
           'An institution never under pressure has demonstrated '
           'nothing.',
           {0: 'Paragraph 5 gives the management histories.', 1: 'Paragraph 6 explains why that fishery was never '
               'pressed.', 3: 'Paragraph 4 describes its flat line.'}),
          ('Ashcombe Deep ended 2024 at ____________ thousand tonnes.',
           None, '362',
           'Paragraph 3, within eight per cent of its 1994 level.'),
          ('Ashcombe’s fleet agreed a closed season and observers in '
           '____________.', None, '2007',
           'Paragraph 5, at about four per cent of catch value.'),
          ('Kelverstone varied by no more than ____________ thousand '
           'tonnes across the period.', None, 'nine',
           'Paragraph 4, in either direction.')])],
   listen=[
    dict(heading='An economist on common resources', part='Part 4',
         task='A lecture on shared resources · multiple choice', band='l4',
         qtype='Questions 39-44',
         figure=_FISH,
         script=[
          ('Economist', 'Four lines, four fisheries, thirty years. The '
           'names on the key are the least informative thing on this chart '
           'and most people organise their description around them. Group '
           'by what the lines did and the whole thing takes two minutes.'),
          ('Economist', 'Group one: Brindle Bank and Tarnmouth. Four '
           'hundred and twenty down to twenty-nine. Three hundred and '
           'fifty-five down to twenty-four. Same shape, steep to about '
           '2009, then flat along the bottom for fifteen years. That '
           'flatness is not stability. It is a stock too small to '
           'rebuild.'),
          ('Economist', 'Group two has one member, Ashcombe Deep. Same '
           'collapse to 2004 — three hundred and ninety down to a hundred '
           'and twenty-eight — and then it turns and climbs all the way '
           'back to three hundred and sixty-two. Within eight per cent of '
           'where it started.'),
          ('Economist', 'Group three also has one member, Kelverstone, and '
           'it is a different kind of line entirely. Three hundred and ten '
           'to three hundred and one over thirty years, never varying by '
           'more than nine either way. Flat from the beginning, not flat '
           'after a fall.'),
          ('Economist', 'Now the management, which explains three of them. '
           'Brindle and Tarnmouth: quota from 1996, with the vessels '
           'reporting their own catches. Ashcombe: identical system until '
           '2007, when the fleet itself agreed a closed season and an '
           'independent observer on every boat, costing them about four per '
           'cent of catch value.'),
          ('Economist', 'So the difference between the collapse group and '
           'the recovery is not the rule. All three had quota. The '
           'difference is who verified the numbers, and the fleet that '
           'recovered paid for its own verification and imposed it on '
           'itself.'),
          ('Economist', 'And Kelverstone has no management regime '
           'whatsoever. Distant grounds, foul weather, shoals sitting over '
           'ground that tears nets. Effort has never been high enough to '
           'threaten anything. Its stability is a fact about the weather.'),
          ('Economist', 'Which gives the warning I most want you to carry '
           'out. A chart like this invites you to rank four institutions, '
           'and one of the four is not an institution at all. A rule that '
           'was never tested is not a rule that worked, and I could show '
           'you twenty years of policy papers built on exactly that '
           'mistake.'),
          ('Economist', 'One more number, because it is the one that '
           'changes minds. Ashcombe’s observers cost the fleet about '
           'four per cent of catch value every year, and their stock is '
           'now twelve times Tarnmouth’s. Four per cent, paid for '
           'voluntarily, against a fishery that is gone.'),
          ('Economist', 'So when you meet a success story, the first '
           'question is not what it did. It is whether it was ever under '
           'the pressure the failures were under, and surprisingly often '
           'the answer is no.')],
         items=[
          ('He says the least informative thing on the chart is',
           ['the vertical scale', 'the names in the key', 'the dates', 'the units'],
           1, 'And that most people organise around them.',
           {0: 'The vertical scale carries the stock figures.', 2: 'The dates define the thirty-year period.', 3: 'The units are thousands of tonnes, which he uses.'}),
          ('The flatness of the collapsed group represents',
           ['stability', 'a stock too small to rebuild', 'successful management', 'a measurement limit'],
           1, 'After fifteen years along the bottom.',
           {0: 'He says explicitly that it is not stability.', 2: 'The collapsed group was not well managed.', 3: 'No measurement limit is suggested.'}),
          (
           'Ashcombe Deep ended within what percentage of its starting '
           'level?', ['two', 'eight', 'fifteen', 'twenty'],
           1, 'Climbing from a minimum of 128 in 2004.',
           {0: 'Closer than the figure he gives.', 2: 'Further than the eight per cent he reports.', 3: 'Far further than the gap he gives.'}),
          (
           'The difference between the collapse group and the recovery '
           'was',
           ['the quota', 'who verified the numbers', 'fleet size', 'the species'],
           1, 'All three operated under quota.',
           {0: 'All three operated under quota, which is his point.', 2: 'Fleet size is not what he identifies.', 3: 'The species is not the variable he names.'}),
          ('Kelverstone\u2019s stability is described as a fact about',
           ['its rules', 'the weather', 'its fleet', 'its quota'], 1,
           'Since effort has never threatened the stock.',
           {0: 'It has no rules at all, which is his point.', 2: 'The fleet is not what keeps the stock steady.', 3: 'It has no quota in place.'}),
          ('On meeting a success story, his first question is',
           ['what it did', 'whether it was ever under pressure', 'who funded it', 'how long it lasted'],
           1, 'And the answer is surprisingly often no.',
           {0: 'What it did is the question he says comes second.', 2: 'Funding is not his first question.', 3: 'Duration is not what he asks about first.'})])],
   speak=dict(
    part='Part 3', focus='Managing what everyone uses',
    intro=('Five or six sentences. Try once to say why a success might not '
           'be one.'),
    qs=['How should shared natural resources be managed?',
        'Do international agreements work?',
        'Who should pay for protecting them?',
        'Can local communities manage resources themselves?'],
    shape=[('answer', 'By whoever can verify what is actually being '
            'taken.'),
           ('support', 'Three fisheries I read about all had the same '
            'quota.'),
           ('follow-up', 'Two collapsed and one recovered.'),
           ('support', 'The difference was observers on every boat, paid '
            'for by the fleet itself.'),
           ('follow-up', 'And a fourth that never declined turned out to '
            'be protected by bad weather rather than by any rule.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Stock and catch in four fisheries over thirty years',
         prompt=('The graph below shows estimated spawning stock in four '
                 'fisheries between 1994 and 2024. Summarise the '
                 'information by selecting and reporting the main features, '
                 'and make comparisons where relevant. Write at least 150 '
                 'words.'),
         figure=_FISH,
         model=[
          'The line graph shows estimated spawning stock in four fisheries '
          'over thirty years. Overall, the four fall into three distinct '
          'patterns rather than four separate cases: two declined steeply '
          'and did not recover, one declined and then returned almost to '
          'its original level, and one remained essentially unchanged '
          'throughout.',
          'Brindle Bank and Tarnmouth follow almost the same path. Both '
          'fell sharply from their 1994 levels of 420 and 355 thousand '
          'tonnes to around 60 and 50 by 2009, and both then flattened at a '
          'very low level, finishing at 29 and 24 respectively.',
          'Ashcombe Deep began by declining on a comparable trajectory, '
          'from 390 to a low of 128 in 2004. It then reversed, rising '
          'steadily through the remaining twenty years to 362 by 2024, '
          'ending only marginally below where it started.',
          'Kelverstone is unlike the other three in that it shows no '
          'significant movement in either direction. Beginning at 310 and '
          'ending at 301, it fluctuated within a band of roughly nine '
          'thousand tonnes for the entire period, and at no point did it '
          'approach the low values reached by the other three.'],
         notes=[
          'The Overall statement says "three distinct patterns rather than '
          'four separate cases". Grouping is the whole of this question, '
          'and the grouping belongs in the first paragraph, not discovered '
          'in the last.',
          'The two collapsed fisheries share one paragraph because they '
          'share a shape. Giving them a paragraph each would use twice the '
          'words to say the same thing and would obscure the fact that '
          'they behaved identically.',
          'Kelverstone gets its own paragraph and an explicit statement '
          'that it is unlike the others. A flat line is easy to under-'
          'report, and here the flatness is one of the three findings.'],
         criterion=[('Grouping stated in the Overall statement',
                     'Task Achievement'),
                    ('One paragraph for two series that share a shape',
                     'Coherence and Cohesion'),
                    ('The flat series reported as a finding',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Grouping series by outcome',
    fix=dict(
     text=('The six fisheries can be grouped by outcome. Three of them, which '
           'all have a clear boundary and a small user group, remained stable. '
           'The other three, where all are open-access, collapsed within '
           'twenty years. The grouping therefore follows the conditions and '
           'not the species, which the table shows in the final column.'),
     faults=[('The other three, where all are open-access,',
              'The other three, which are all open-access,',
              ('Where introduces a place; for a group of fisheries the pronoun '
               'is which.')),
             ('follows the conditions and not the species',
              'follows the conditions rather than the species',
              'Rather than is the form for a formal contrast of this kind.'),
             ('which the table shows in the final column',
              'as the final column of the table shows',
              ('Which has no antecedent to attach to, and the natural link is '
               'as.'))]),
    explain=('Four series are rarely four stories. These patterns name a '
             'group by its behaviour and attach its members, which is what '
             'lets one sentence do the work of four.'),
    examples=['Two collapsed, one recovered and one never fell.',
              'The four fall into three distinct patterns rather than four '
              'cases.',
              'Brindle Bank and Tarnmouth follow almost the same path.',
              'Kelverstone is unlike the other three in showing no '
              'movement.'],
    task='Rewrite each description so that it groups by behaviour.',
    items=[('Brindle Bank fell and Tarnmouth fell.',
            'Brindle Bank and Tarnmouth followed almost the same path, '
            'falling steeply to 2009 and flattening thereafter.'),
           ('Ashcombe went down then up.',
            'Ashcombe Deep alone reversed, declining to 128 in 2004 and '
            'recovering to 362 by 2024.'),
           ('Kelverstone did not change.',
            'Kelverstone is unlike the other three in showing no '
            'significant movement in either direction.'),
           ('There are four fisheries with different results.',
            'The four fisheries fall into three patterns: two collapsed, '
            'one recovered and one never declined.'),
           ('They all started around the same level.',
            'All four began between 310 and 420 thousand tonnes, so the '
            'divergence is in what followed rather than in the starting '
            'point.')]),
   vocab=[('spawning stock', 'the breeding population of a fishery'),
          ('effort', 'how much fishing is being done'),
          ('quota', 'the quantity a vessel is permitted to take'),
          ('collapse', 'a fall to a level from which recovery is slow'),
          ('closed season', 'a period when taking is prohibited'),
          ('observer', 'an independent person verifying what is taken'),
          ('effort creep', 'catching more without more boats'),
          ('rebuild', 'to recover a stock to a sustainable level')],
   expr=[('Two collapsed, one recovered and one never fell',
          'the grouping sentence this cycle is built on'),
         ('that flatness is not stability; it is a stock too small to '
          'rebuild', 'reads a shape correctly'),
         ('the difference is who verified the numbers',
          'locates a cause precisely'),
         ('its stability is a fact about the weather',
          'denies a case any explanatory value')],
   trans=['while', 'by contrast', 'taken together', 'the four fall into'],
  ),

  dict(
   sub='Why some commons survive',
   step=5,
   read=[
    dict(heading='Eight conditions and the villages that met them',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and note completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'For most of the twentieth century the standard analysis of shared '
          'resources predicted their destruction. The reasoning was valid '
          'and the prediction was testable, and when somebody eventually '
          'undertook an investigation, a substantial quantity of commons '
          'proved to have been managed sustainably for centuries by their '
          'users, without privatisation and without state control. The '
          'discovery was not that the reasoning contained an error, which it '
          'did not, but that it described a situation in which users cannot '
          'communicate, and most actual users can.',
          'The research programme consequent upon this was comparative '
          'rather than theoretical. It examined irrigation systems, alpine '
          'pastures, inshore fisheries and communal forests, across several '
          'hundred instances, and enquired what distinguished the '
          'arrangements that endured from those that collapsed. It did not '
          'commence from a theory of what ought to succeed. That sequence is '
          'consequential, since a programme commencing from a theory locates '
          'the instances conforming to it, and this one could not, having '
          'commenced from the instances.',
          'Eight features recurred in the durable cases. The '
          'boundaries of the resource and of the group entitled to '
          'employ it were evidently defined, and the rules of '
          'appropriation fitted local conditions rather than a general '
          'template. Those affected by the rules could take part in '
          'changing them, and monitoring was conducted by the users '
          'themselves or by people accountable to them.',
          'The remaining four concern what happens when a rule is '
          'broken and when the arrangement meets the outside world. '
          'Sanctions were graduated, beginning trivially, and conflict '
          'resolution was cheap and locally available. The right of '
          'users to organise was not challenged by external '
          'authorities, and in larger systems arrangements were '
          'nested, with local units inside broader ones.',
          'Several features of this enumeration repay attention, '
          'beginning with what is absent from it: ownership does not '
          'appear. Neither does state enforcement, market pricing, nor '
          'any of the remedies the preceding literature had treated as '
          'the sole available options. The durable instances achieved '
          'exclusion and restraint by alternative means, and those '
          'alternative means constitute what the enumeration '
          'describes. A reader approaching it in expectation of a '
          'verdict on ownership discovers instead that ownership was '
          'never the variable performing the work.',
          'Graduated sanctions constitute the condition practitioners '
          'find most counter-intuitive and they repay the attention. '
          'An initial breach attracts something approaching nothing: a '
          'word, a token fine, an entry in a book, and the severity '
          'escalates only with repetition. The mechanism appears to be '
          'that a trivial initial sanction retains enforcement inside '
          'the community rather than displacing it to courts, and '
          'prevents a solitary lapse from becoming a permanent enmity '
          'between neighbours obliged to continue co-operating.',
          'Monitoring by users is the condition most frequently dismissed as '
          'utopian and is the most practically significant. The users know '
          'the resource, are present continuously, and are the only people '
          'who can observe a breach at the moment it occurs. The usual '
          'objection — that they will not report their neighbours — is '
          'answered in the successful cases by making monitoring a rotating '
          'paid office rather than a civic duty.',
          'The nesting condition is the least discussed and becomes '
          'decisive at scale. A system governing a single valley can be '
          'face-to-face throughout; one governing a river basin cannot, and '
          'the durable large systems were built as layers of small units '
          'with defined relations rather than as single large bodies. This '
          'is the condition most frequently ignored when the list is '
          'applied by outsiders. A single committee for a whole basin '
          'satisfies no part of the condition and is what most '
          'externally designed systems have produced.',
          'It is essential to be clear about what variety of finding '
          'this is: the eight features were observed in institutions '
          'that had survived. They constitute a description of the '
          'survivors and not a demonstration that the features '
          'generated the survival, and the distinction is not '
          'pedantic: the instances were not assigned their features by '
          'anybody, and instances possessing the identical features '
          'that collapsed may be less liable to have been studied. The '
          'surviving institutions were visible precisely because they '
          'survived, which is the oldest difficulty in comparative '
          'work and possesses no general remedy.',
          'The author of the work was consistently careful about this and '
          'the subsequent literature has not been. The eight conditions '
          'appear in policy documents as a checklist for implementation, and '
          'projects designed against them exhibit a mixed record that the '
          'original research neither predicts nor explains, having never '
          'constituted a theory of how such institutions might be '
          'constructed. The author stated so repeatedly and in print, and '
          'the sentence is quoted far less frequently than the enumeration '
          'it qualifies.',
          'That disparity between a descriptive finding and a prescriptive '
          'programme is the most consequential feature of this literature '
          'and recurs far beyond it. A set of features common to '
          'institutions that developed constitutes no instruction for '
          'constructing one, and the transition from the former to the '
          'latter is almost invariably accomplished silently, by somebody '
          'who would defend it if challenged and is never challenged.',
          'None of which diminishes the original achievement: the '
          'prediction that commons are necessarily destroyed was '
          'widespread, confident, and false, and it was refuted by '
          'fieldwork rather than by argument. What has been done with '
          'the refutation since is a separate matter and a less '
          'creditable one.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['The failed prediction', 'A comparative research programme', 'The eight features', 'Description against prescription'],
           1,
           'Paragraph 2 is the scale of the fieldwork: several hundred '
           'cases.',
           {0: 'The failed prediction is paragraph 1.', 2: 'The eight features are paragraphs 3 and 4.', 3: 'Description against prescription is paragraph 11.'}),
          ('Choose the best heading for paragraph 6.',
           ['Monitoring by users', 'Why sanctions begin trivially', 'Nesting at scale', 'What is absent from the list'],
           1,
           'Keeping enforcement local and preventing permanent enmity.',
           {0: 'Monitoring by users is paragraph 7.', 2: 'Nesting at scale is paragraph 8.', 3: 'What is absent from the list is paragraph 5.'}),
          ('Choose the best heading for paragraph 9.',
           ['The nesting condition', 'What kind of finding this is', 'The policy record', 'The original achievement'],
           1,
           'A description of survivors, not a demonstration of cause.',
           {0: 'The nesting condition is paragraph 8.', 2: 'The policy record is paragraph 10.', 3: 'The original achievement is paragraph 12.'}),
          (
           'The writer believes ownership is one of the eight '
           'features.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 5 says ownership does not appear.',
           {0: 'Yes would need ownership on the list; paragraph 5 says '
               'it is absent.', 2: 'Not Given is wrong because the list is enumerated.'}),
          (
           'The writer believes the original researcher confused '
           'description with prescription.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 10 says the author was consistently careful and '
           'the later literature was not.',
           {0: 'Yes would need the confusion; paragraph 10 says the '
               'author was careful.', 2: 'Not Given is wrong because the writer separates author '
               'from literature.'}),
          ('In the successful cases, monitoring was made a rotating paid '
           '____________ rather than a civic duty.', None, 'office',
           'Paragraph 7, answering the objection about reporting '
           'neighbours.'),
          ('In larger systems, arrangements were ____________, with local '
           'units inside broader ones.', None, 'nested',
           'Paragraph 4, the condition most ignored by outsiders.'),
          ('The prediction that commons are necessarily destroyed was '
           'refuted by ____________ rather than by argument.', None,
           'fieldwork',
           'The final paragraph, which calls that the original '
           'achievement.')])],
   listen=[
    dict(heading='A lecture on governing the commons', part='Part 4',
         task='A lecture on durable shared institutions · multiple choice and matching', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'The standard prediction was that a shared resource '
           'gets destroyed. Good reasoning, testable, and when somebody '
           'went and looked at actual commons, a great many had been '
           'managed sustainably by their users for several centuries. No '
           'privatisation. No state. The theory had been refuted by '
           'fieldwork, which is rarer than it sounds.'),
          ('Lecturer', 'The programme that followed was comparative, not '
           'theoretical. Irrigation systems, alpine pasture, inshore '
           'fisheries, communal forest. Several hundred cases. One '
           'question: what distinguishes the arrangements that lasted from '
           'the ones that did not?'),
          ('Lecturer', 'Eight features recurred. Clear boundaries, of the '
           'resource and of who may use it. Rules fitted to local '
           'conditions rather than a template. Those affected able to '
           'change the rules. Monitoring by the users or by people '
           'answerable to them.'),
          ('Lecturer', 'And four more, about breach and about the outside '
           'world. Graduated sanctions, starting trivially. Cheap local '
           'conflict resolution. The right to organise not challenged from '
           'outside. And for big systems, nesting — small units inside '
           'larger ones.'),
          ('Lecturer', 'Now look at what is not on that list. Ownership is '
           'not on it. State enforcement is not on it. Market pricing is '
           'not on it. The entire menu of remedies the previous literature '
           'offered is absent, and these institutions achieved restraint '
           'by other means for centuries.'),
          ('Lecturer', 'Two conditions deserve a minute each. Graduated '
           'sanctions: a first breach gets almost nothing, a word or a '
           'token fine. People find that weak. It appears to work because '
           'it keeps enforcement inside the community instead of in court, '
           'and because it stops one lapse becoming a permanent quarrel '
           'between neighbours who have to keep co-operating.'),
          ('Lecturer', 'Monitoring by users: dismissed as utopian, and the '
           'most practically important of the eight. They know the '
           'resource, they are there, they are the only ones who can see a '
           'breach happen. And the objection — they will not report a '
           'neighbour — is answered in the successful cases by making '
           'monitoring a rotating paid job rather than a moral duty.'),
          ('Lecturer', 'Now the thing I care most about, and it is about '
           'what kind of finding this is. Those eight features were '
           'observed in institutions that survived. That is a description '
           'of survivors. It is not a demonstration that the features '
           'caused the survival, and nobody assigned these villages their '
           'features.'),
          ('Lecturer', 'The original author was careful about exactly that '
           'and the literature since has not been. The conditions turn up '
           'in policy documents as a checklist to implement, and projects '
           'designed from the checklist have a mixed record the original '
           'research neither predicts nor explains, because it was never a '
           'theory of how to build one of these things. The features were '
           'found in institutions that grew, which is not advice.')],
         items=[
          ('The standard prediction was refuted by',
           ['argument', 'fieldwork', 'simulation', 'legislation'], 1,
           'Which the lecturer says is rarer than it sounds.',
           {0: 'He says it was refuted by looking, not by arguing.', 2: 'No simulation is mentioned in the lecture.', 3: 'Legislation is not what refuted the prediction.'}),
          ('The research programme is described as',
           ['theoretical', 'comparative', 'experimental', 'historical'],
           1,
           'The programme covered four kinds of resource, several '
           'hundred cases.',
           {0: 'He says explicitly that it was not theoretical.', 2: 'Nothing was assigned or randomised in the programme.', 3: 'Historical depth is a property of the cases, not the '
               'method.'}),
          ('Which of these is NOT among the eight features?',
           ['clear boundaries', 'ownership', 'graduated sanctions', 'nesting'],
           1, 'He stresses that ownership is absent from the list.',
           {0: 'Clear boundaries is the first of the eight.', 2: 'Graduated sanctions is among the eight.', 3: 'Nesting is the eighth feature.'}),
          ('Graduated sanctions appear to work because they',
           ['deter strongly', 'keep enforcement inside the community', 'are cheap to administer', 'are legally required'],
           1, 'And stop a lapse becoming a permanent quarrel.',
           {0: 'They begin trivially, so they do not deter strongly.', 2: 'Cheapness is a property of conflict resolution.', 3: 'No legal requirement is involved.'}),
          (
           'The objection to monitoring by users is answered by making '
           'it',
           ['anonymous', 'a rotating paid job', 'external', 'voluntary'],
           1, 'Rather than being left as a moral duty of neighbours.',
           {0: 'Anonymity is not what the successful cases used.', 2: 'External monitoring is what the condition rules out.', 3: 'A voluntary duty is exactly what fails.'}),
          ('He says the eight features are',
           ['a theory of institution-building', 'a description of survivors', 'a legal framework', 'a prediction'],
           1, 'Observed in institutions that survived.',
           {0: 'He says it was never a theory of institution-building.', 2: 'No legal framework is described.', 3: 'A description of survivors predicts nothing.'})])],
   speak=dict(
    part='Part 3', focus='Rules people make for themselves',
    followup=[(('You say succession failed rather than free-riding. Are self- '
                'made rules better than imposed ones?'),
               ('Better complied with, because the people who wrote them can '
                'see each other and have most to lose, and not inherently '
                'better designed. The successful cases in the literature share '
                'conditions rather than virtues: a clear boundary, a small '
                'enough group, and a way of excluding outsiders.')),
              ('Why might a small penalty work better than a large one?',
               ('Because its purpose is information rather than deterrence. A '
                'small, certain, graduated sanction tells everybody that the '
                'rule is being enforced and leaves the relationship intact; a '
                'large one is rarely applied, because nobody wants to destroy '
                'a neighbour, and an unapplied penalty teaches that the rule '
                'is optional.')),
              ('Who should monitor whether rules are followed?',
               ('The users, where they can see the resource, because they are '
                'already there and the cost is near zero. The moment '
                'monitoring requires somebody employed to do it, the '
                'arrangement needs a budget, and that is usually where self- '
                'governance stops scaling.')),
              ('Do such arrangements work in cities?',
               ('At the scale of a stair, a street or a garden, yes, and the '
                'conditions are the same ones. Above that the group can no '
                'longer see itself, and what works is a formal body with local '
                'membership rather than either spontaneous cooperation or a '
                'distant authority.'))],
    intro=('Five or six sentences. Try once to say why a first penalty '
           'should be small.'),
    qs=['Are rules people make themselves better than imposed ones?',
        'Why might a small penalty work better than a large one?',
        'Who should monitor whether rules are followed?',
        'Do such arrangements work in cities?'],
    shape=[('answer', 'Often, though not for the reason people '
            'assume.'),
           ('support', 'The durable cases all had penalties that started '
            'almost at nothing.'),
           ('follow-up', 'A word, or a token fine, rising only on '
            'repetition.'),
           ('support', 'That keeps the enforcement inside the group rather '
            'than in a court.'),
           ('follow-up', 'And it stops one mistake becoming a permanent '
            'quarrel between people who still have to co-operate '
            'tomorrow.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='What a study found and what it recommends',
         prompt=('Should shared resources be privatised or governed '
                 'collectively? Brainstorm ten, run the six tests, name '
                 'the premise under each survivor, and mark which of your '
                 'evidence is descriptive and which is prescriptive. '
                 'Twelve minutes.'),
         plan=('Collective governance works where eight specific '
               'conditions hold and those conditions were observed in '
               'institutions that grew rather than designed, so the real '
               'question is not which form of ownership is better but '
               'whether the conditions can be built, which the evidence '
               'does not answer',
               [('The case for collective governance rests on a premise '
                 'about what the comparative evidence shows, which holds '
                 'descriptively',
                 ['several hundred commons were managed sustainably for '
                  'centuries without ownership or state control',
                  'eight features recur in the durable cases and ownership '
                  'is not among them']),
                ('The case for applying it rests on a premise about '
                 'transfer that the same evidence cannot support',
                 ['the features were observed in survivors, not assigned '
                  'to them',
                  'projects built from the checklist have a mixed record '
                  'the research does not explain'])]),
         notes=[
          'The new discipline here is marking each piece of evidence as '
          'descriptive or prescriptive before using it. Most misuse of '
          'social science consists of a descriptive finding doing '
          'prescriptive work, and the misuse is invisible unless you '
          'label.',
          'Notice that both ideas use the same body of evidence and reach '
          'different distances with it. That is not a weakness in the '
          'plan; it is the plan, and the thesis is built on the gap '
          'between how far the evidence reaches and how far it is '
          'taken.',
          'The thesis refuses the question as posed — privatise or '
          'govern collectively — and replaces it with one the evidence '
          'can be about. That refusal has to be earned, and here it is '
          'earned by the descriptive/prescriptive marking rather than '
          'asserted.'],
         criterion=[('Marking evidence as descriptive or prescriptive',
                     'Task Response'),
                    ('Building the thesis on the gap between them',
                     'Coherence and Cohesion')],
         instruct='  Twelve minutes, timed. You write this in cycle 5.',
         lines=12)],
   gram=dict(
    point='Conditions, not laws: describing contingent findings',
    explain=('A finding that holds under conditions must be written as '
             'conditional, or it will be read as a law. These patterns '
             'keep the conditions attached.'),
    examples=['The successful cases share eight features and none of them '
              'is ownership.',
              'Where boundaries are clear and sanctions graduated, such '
              'arrangements have lasted.',
              'The features recurred in the durable cases rather than '
              'causing their durability.',
              'This holds in systems small enough to be face-to-face.'],
    task='Rewrite each claim so that its conditions are attached.',
    items=[('Communities manage shared resources well.',
            'Communities have managed shared resources sustainably where '
            'boundaries were clear, monitoring was local and sanctions '
            'began trivially.'),
           ('Graduated sanctions work.',
            'Graduated sanctions recur in the arrangements that lasted, '
            'apparently by keeping enforcement inside the community.'),
           ('Ownership is not necessary.',
            'Several hundred documented commons achieved restraint without '
            'ownership, over periods of centuries.'),
           ('Nesting is important.',
            'Nesting becomes decisive once a system is too large for '
            'face-to-face dealing, and matters little below that.'),
           ('The eight conditions should be implemented.',
            'The eight conditions describe institutions that survived, and '
            'whether building them produces the same result is a separate '
            'question.')]),
   vocab=[('graduated sanction', 'a penalty that rises with '
           'repetition'),
          ('nested', 'organised as small units inside larger ones'),
          ('monitoring', 'observing whether rules are being kept'),
          ('appropriation', 'taking a share of a shared resource'),
          ('clear edges', 'a defined boundary to a resource or group'),
          ('self-governed', 'run by the people who use it'),
          ('long-lasting', 'surviving over many generations'),
          ('common right', 'an entitlement to use shared ground')],
   expr=[('The successful cases share eight features and none of them is '
          'ownership', 'the cycle’s governing sentence'),
         ('a description of survivors, not a demonstration of cause',
          'marks the limit of a comparative finding'),
         ('making monitoring a rotating paid office rather than a civic '
          'duty', 'answers an objection with a mechanism'),
         ('refuted by fieldwork rather than by argument',
          'describes how a theory actually fell')],
   trans=['consequently', 'which in turn', 'as a result',
          'what is absent from the list'],
  ),

  dict(
   sub='Whether the conditions can be designed',
   step=5,
   read=[
    dict(heading='Three attempts to build what had grown',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and note completion',
         band='acad', qtype='Questions 59-66',
         paras=[
          'Once a set of features has been identified in institutions that '
          'succeeded, the attempt to construct institutions possessing those '
          'features follows almost automatically. Three such attempts are '
          'documented in sufficient detail for comparison, and the '
          'comparison is more instructive than either the successes or the '
          'failures considered separately. Two collapsed and one did not, '
          'and the one that did not attempted considerably less than either '
          'of the others, which is the initial feature a reader should '
          'notice.',
          'The first, a forest management programme in a region possessing '
          'no tradition of communal forestry, implemented all eight features '
          'as formulated. Boundaries were surveyed, user groups constituted, '
          'graduated sanctions specified in a document, and monitoring posts '
          'funded and rotated. It collapsed within six years and the '
          'post-mortem identified the cause as the absence of any prior '
          'relationship among the users, who constituted a group solely in '
          'the sense of having been enrolled in one. The specification had '
          'been satisfied in every particular and the entity specified had '
          'not come into existence.',
          'The second, in an irrigation system that already had customary '
          'arrangements, implemented a subset of the features and left the '
          'existing ones alone. It is still operating after nineteen '
          'years. Its designers describe their contribution as removing an '
          'external legal obstacle to the users organising, which is the '
          'seventh of the eight conditions and the only one they addressed '
          'directly.',
          'The third attempted to transplant the whole arrangement from one '
          'valley to a neighbouring one with comparable geography, '
          'comparable crops and a comparable population. It failed, and the '
          'failure is the most informative of the three because the two '
          'valleys differed in no respect anybody had thought to record. The '
          'best available reconstruction is that the receiving valley had a '
          'history of litigation between two families that made joint '
          'monitoring unacceptable to both. Nobody surveying the two valleys '
          'beforehand would have recorded that, and no specification anybody '
          'has written contains a field for it.',
          'A pattern suggests itself and merits statement with some '
          'caution, since three instances support little: the '
          'intervention that succeeded undertook least. It removed an '
          'obstacle to something the users were already attempting, '
          'rather than supplying an institution they were not. The two '
          'that collapsed both constructed, and constructed '
          'competently, against the specification. The competence '
          'merits emphasis, since the obvious explanation for a failed '
          'project is incompetent execution and in neither instance '
          'was that available.',
          'If that pattern is genuine, the explanation most consistent with '
          'it concerns what the eight features are features of. Defined '
          'boundaries, local monitoring and graduated sanctions constitute '
          'the visible structure of an arrangement whose operative '
          'components are relationships: a group possessing a history of '
          'co-operation, mutual knowledge of who is reliable, and an '
          'expectation of further dealings. The features are constructible '
          'in an afternoon; their foundations cannot be constructed by an '
          'outsider at all.',
          'This carries an uncomfortable implication that the literature '
          'largely evades. If the preconditions are historical, then the '
          'localities most requiring superior collective institutions are '
          'systematically the localities in which constructing them will '
          'fail, since a history of conflict constitutes both the reason the '
          'resource is poorly managed and the reason the remedy will not '
          'establish itself. That is a genuinely unwelcome conclusion and is '
          'rendered no less probable by being unwelcome.',
          'Avoiding that implication has produced a quantity of writing '
          'about building trust and social capital, which treats the '
          'precondition as something that can be supplied by programme. '
          'The evidence for that proposition is weaker than the evidence '
          'for the original eight conditions, and its weakness is rarely '
          'noted in documents that cite the eight conditions '
          'approvingly.',
          'There is a more modest reading, and it is the one the three '
          'cases support. Where co-operation is already being attempted '
          'and is blocked by something external, removing the obstacle '
          'works and is cheap. Where it is not being attempted, the '
          'question is open and the honest answer is that nobody knows '
          'how to start one of these institutions from nothing, because '
          'the documented successes all began from something. That is a '
          'statement about the present state of knowledge rather than a '
          'claim that it cannot be done, and the distinction matters a '
          'great deal to anybody deciding whether to fund the '
          'attempt.',
          'That answer is unsatisfying to anybody who has to write a '
          'programme, which is why it is so seldom given. A funding proposal '
          'reading "we will identify places where this is already being '
          'attempted and remove obstacles" describes a smaller intervention '
          'than the sector is organised to deliver, and would probably work '
          'more frequently.',
          'None of this bears upon whether collective governance is '
          'preferable to the alternatives, which is the question ordinarily '
          'under dispute. The comparative evidence establishes that such '
          'arrangements are capable of succeeding and have succeeded, which '
          'the previous orthodoxy denied. What it does not establish is that '
          'they can be installed, and the two propositions are routinely '
          'advanced as one.',
          'The reader’s test is to separate the two whenever a finding is '
          'cited in support of a programme. Did this study observe things '
          'that existed, or create them and watch? If the former, the step '
          'to a programme requires an argument, and the argument is scarcely '
          'ever supplied because the gap is scarcely ever noticed.'],
         items=[
          (
           'Which paragraph describes the attempt that is still '
           'operating?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1,
           'An irrigation system with customary arrangements already '
           'in place.',
           {0: 'Paragraph 2 describes the forest programme that '
               'collapsed.', 2: 'Paragraph 4 describes the failed transplant.', 3: 'Paragraph 5 draws the pattern from the three.'}),
          (
           'Which paragraph gives the uncomfortable implication about '
           'where remedies will not work?',
           ['Paragraph 6', 'Paragraph 7', 'Paragraph 8', 'Paragraph 9'],
           1,
           'A history of conflict is both the cause and the obstacle '
           'to the remedy.',
           {0: 'Paragraph 6 explains what the features are features '
               'of.', 2: 'Paragraph 8 describes how the implication is evaded.', 3: 'Paragraph 9 gives the more modest reading.'}),
          (
           'Which paragraph says a smaller intervention would probably '
           'work more often?',
           ['Paragraph 9', 'Paragraph 10', 'Paragraph 11', 'Paragraph 12'],
           1,
           'A proposal to find existing attempts and remove obstacles.',
           {0: 'Paragraph 9 gives the more modest reading.', 2: 'Paragraph 11 separates succeeding from being '
               'installed.', 3: 'Paragraph 12 gives the reader\u2019s test.'}),
          (
           'The writer believes the three cases establish the pattern '
           'firmly.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 5 says three cases support little and urges '
           'caution.',
           {0: 'Yes would need firmness; paragraph 5 says three cases '
               'support little.', 2: 'Not Given is wrong because the strength of the '
               'evidence is stated.'}),
          (
           'The writer believes collective governance is worse than '
           'the alternatives.', ['Yes', 'No', 'Not Given'],
           1, 'Paragraph 11 says none of this bears on that question.',
           {0: 'Yes would need a comparison; paragraph 11 says none of '
               'this bears on it.', 2: 'Not Given is wrong because the writer says what his '
               'argument does not settle.'}),
          ('The second project describes its contribution as removing an '
           'external ____________ obstacle.', None, 'legal',
           'Paragraph 3, the seventh of the eight conditions.'),
          ('The receiving valley in the third case had a history of '
           '____________ between two families.', None, 'litigation',
           'Paragraph 4, which made joint monitoring unacceptable.'),
          ('The writer says nobody knows how to start such an institution '
           'from ____________.', None, 'nothing',
           'Paragraph 9: the documented successes all began from '
           'something.')])],
   listen=[
    dict(heading='A policy adviser and an anthropologist disagree',
         part='Part 4', task='A recorded exchange · multiple choice', band='l4',
         qtype='Questions 67-72',
         script=[
          ('Chair', 'Mr Oyelaran-Beck advises on rural development '
           'programmes. Dr Haraldsen-Achebe has spent fifteen years '
           'studying irrigation institutions.'),
          ('Oyelaran-Beck', 'I will put my own side’s weakness first. We '
           'use the eight conditions as a design specification and the '
           'research they come from is a description of survivors. I know '
           'that. I have written the sentence acknowledging it into four '
           'funding proposals and then designed against the checklist '
           'anyway.'),
          ('Haraldsen-Achebe', 'Then I will say what my own side does, '
           'which is to identify that problem and stop. "It is more '
           'complicated than that" is true, is where most of my colleagues '
           'finish, and is useless to a man with a budget and a '
           'deadline.'),
          ('Oyelaran-Beck', 'So what should I actually do on Monday?'),
          ('Haraldsen-Achebe', 'Find the places where people are already '
           'trying something and ask what is stopping them. The one '
           'intervention in the literature that is still running after '
           'nineteen years did exactly that, and its designers describe '
           'their contribution as removing a legal obstacle.'),
          ('Oyelaran-Beck', 'That is a much smaller programme than I am '
           'funded to deliver, and I want to be honest about why that '
           'matters. A proposal for a small intervention in a few places '
           'does not get funded, and the officer writing it does not get '
           'promoted.'),
          ('Haraldsen-Achebe', 'I know, and the fact that your incentive '
           'runs that way is not a reason for me to pretend the evidence '
           'runs the other.'),
          ('Oyelaran-Beck', 'No, it is not. Where does that leave the '
           'places with no existing attempt?'),
          ('Haraldsen-Achebe', 'Honestly? Nobody knows how to start one '
           'from nothing. Every documented success began from something, '
           'and the ones built from scratch have a mixed record at '
           'best.'),
          ('Oyelaran-Beck', 'And those are exactly the places that need it '
           'most.'),
          ('Haraldsen-Achebe', 'And I want to be careful about the shape '
           'of that claim. I am not saying it cannot be done. I am '
           'saying nobody has yet shown how, which is a statement about '
           'what we know rather than about what is possible, and funders '
           'hear the two as the same sentence.'),
          ('Oyelaran-Beck', 'They do, and so do I when I am '
           'tired.'),
          ('Haraldsen-Achebe', 'They are, and that is the implication my '
           'field avoids by writing about building social capital, which '
           'has thinner evidence behind it than the eight conditions do '
           'and gets cited in the same paragraph as though it had '
           'more.'),
          ('Oyelaran-Beck', 'Let me ask the question my director will '
           'ask. If I take your advice, how do I show a result in three '
           'years?'),
          ('Haraldsen-Achebe', 'You probably cannot, and I would rather '
           'tell you that than invent a metric. The nineteen-year case '
           'looked like nothing at all for its first four years, and the '
           'funder who backed it did so on a judgement rather than on '
           'indicators.'),
          ('Oyelaran-Beck', 'I would rather have that sentence from you '
           'than another paper telling me it is complicated.')],
         items=[
          (
           'Oyelaran-Beck concedes that he has designed against the '
           'checklist',
           ['without knowing the problem', 'after writing the acknowledgement into four proposals', 'only once', 'against advice'],
           1, 'Knowing the research describes survivors.',
           {0: 'He says he knows the problem perfectly well.', 2: 'He names four proposals, not one.', 3: 'Nobody advised him against it in the exchange.'}),
          ('Haraldsen-Achebe says her own side\u2019s failing is to',
           ['overstate findings', 'identify the problem and stop', 'refuse funding', 'avoid fieldwork'],
           1, 'Which she calls useless to somebody with a budget.',
           {0: 'Overstating findings is the adviser\u2019s side of the '
               'problem.', 2: 'Funding is what the adviser has to secure.', 3: 'Fieldwork is what her field does.'}),
          ('Her practical advice is to find places where people are',
           ['wealthiest', 'already trying something', 'most in need', 'best organised'],
           1, 'And ask what is stopping them.',
           {0: 'Wealth is not the criterion she gives.', 2: 'The neediest places are where she says it will not '
               'work.', 3: 'Existing organisation is nearer, but she says trying.'}),
          ('He says a small intervention is a problem because',
           ['it is ineffective', 'it does not get funded and the officer is not promoted', 'it takes longer', 'it is hard to measure'],
           1, 'Which he raises as an honest account of his incentives.',
           {0: 'He does not say a small intervention fails.', 2: 'Duration is her point about the nineteen-year case.', 3: 'Measurement is the director\u2019s question, raised later.'}),
          ('For places with no existing attempt, she says',
           ['the conditions should be built', 'nobody knows how to start one from nothing', 'privatisation is better', 'the state should act'],
           1, 'Since every documented success began from something.',
           {0: 'Building the conditions is what she says nobody knows '
               'how to do.', 2: 'Privatisation is not what she recommends.', 3: 'State action is not her answer either.'}),
          (
           'She says her field avoids the implication by writing about',
           ['ownership', 'building social capital', 'monitoring', 'sanctions'],
           1, 'Which has thinner evidence than the eight conditions.',
           {0: 'Ownership is absent from the eight conditions.', 2: 'Monitoring is one of the eight conditions.', 3: 'Sanctions are one of the eight conditions.'})])],
   speak=dict(
    part='Part 3', focus='Designing institutions',
    sounds=[('This unit\'s terms come from economics and keep irregular stress: '
             'a COMmons, colLECtive action, free RIDing, which is a compound '
             'and takes the first element.'),
            ('Say each inside a clause until the clause runs at speed, because '
             'these are the words candidates define instead of using.'),
            ('The phrase rules people make for themselves has one stress, on '
             'themselves, and the whole phrase is one unit. Stressing rules '
             'makes it a different claim.'),
            ('Where you list conditions, use the three-part rhythm from Volume '
             '3: a clear boundary, a small group, and a way of excluding '
             'outsiders.'),
            ('Record ninety seconds on whether self-made rules are better. '
             'Check that your list fell on the last item.')],
    intro=('The hardest turn in the unit. Try once to say that a finding '
           'is not advice.'),
    qs=['Can successful institutions be copied from one place to '
        'another?',
        'What makes a rule stick?',
        'Should outside organisations design local arrangements?',
        'Is it possible to build trust deliberately?'],
    shape=[('answer', 'Rarely, and the failures are more informative than '
            'the successes.'),
           ('support', 'One study found eight features in arrangements '
            'that lasted centuries.'),
           ('follow-up', 'Projects built from that list have a mixed '
            'record.'),
           ('support', 'Because the features were found in institutions '
            'that grew.'),
           ('follow-up', 'What they rest on is a history of people '
            'dealing with each other, and nobody can supply that from '
            'outside.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should users manage shared resources themselves?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some say shared resources are best managed by '
                 'the people who use them. Discuss both views and give '
                 'your own opinion. Write at least 250 words.'),
         model=[
          'The evidence on this question is much stronger than the debate '
          'around it suggests, and it answers a narrower question than the '
          'one usually asked. It establishes that users can manage shared '
          'resources well. It does not establish that they can be enabled '
          'to, and the two claims are routinely treated as one.',
          'The case for user management rests on fieldwork rather than '
          'theory, which is what makes it formidable. For most of the last '
          'century the standard analysis predicted that shared resources '
          'would be destroyed; several hundred documented commons '
          '— irrigation systems, alpine pasture, inshore fisheries '
          '— had in fact been managed sustainably by their users for '
          'centuries, without ownership and without state control. Eight '
          'features recur in the durable cases, and ownership is not among '
          'them.',
          'The case for external management is weaker than its proponents '
          'think and is not empty. Where users are numerous, dispersed and '
          'unknown to each other, the conditions under which collective '
          'management has worked are simply absent: monitoring by users '
          'requires users who are present, graduated sanctions require '
          'people who will meet again, and neither describes a fishery '
          'worked by vessels from six countries.',
          'What neither side usually notices is what kind of finding the '
          'eight conditions are. They were observed in institutions that '
          'had survived. That is a description of survivors, not a '
          'demonstration that the features caused the survival, and '
          'projects designed from the list as a specification have a mixed '
          'record the original research neither predicts nor explains. The '
          'one documented intervention still running after nineteen years '
          'did least: it removed a legal obstacle to users who were already '
          'organising.',
          'My own position follows from that gap. Where people are already '
          'attempting to co-operate, support them and remove what is '
          'blocking them, because that is the intervention with evidence '
          'behind it and it is cheap. Where they are not, no one presently '
          'knows how to begin, and the honest response is to say so rather '
          'than to build the eight features and hope — which is '
          'uncomfortable, because the places with no existing attempt are '
          'exactly the places that need one most.'],
         notes=[
          'The first paragraph separates two claims and says they are '
          'treated as one. Structure 3 needs a third position, and here it '
          'arrives in the first sentence because the whole essay is about '
          'the distinction.',
          'Paragraph 3 gives the opposing case a genuine domain rather '
          'than dismissing it — dispersed users, vessels from six '
          'countries — which is what stops a discuss-both-views essay '
          'becoming a straw contest.',
          'The conclusion names the cost of its own honesty: the places '
          'with no existing attempt are the ones that need it most. '
          'Finishing on the discomfort rather than resolving it is the '
          'mark of a writer who has not flinched.'],
         model65=[
                  'Some say shared resources are best managed by the '
                  'people who use them. In my view the evidence supports '
                  'this more often than the conventional theory anticipated, '
                  'but not always.',
                  'The argument for users is now well supported. '
                  'Studies of fisheries, grazing land and irrigation '
                  'have found long-lived local arrangements that '
                  'averted the collapse the textbook prediction. Users '
                  'know the resource, can see each other, and have '
                  'most to lose from ruin.',
                  'However, these successes share conditions that cannot be '
                  'assumed. The group is small enough to monitor '
                  'itself, the boundary is clear, and outsiders can be '
                  'excluded. Where any of these fails, as with the '
                  'open ocean or the atmosphere, local management '
                  'cannot work, however willing the participants are.',
                  'I think the right conclusion is a test rather than '
                  'a preference. Where a user group can see and '
                  'exclude, give it the authority and an enforceable '
                  'right. Where it cannot, no amount of community '
                  'spirit substitutes for a broader agreement, and '
                  'pretending otherwise postpones the agreement that is required.',
                  ],
         gap65=[
                'It states the enabling conditions and then uses them '
                'as a test, which is what turns the finding into a '
                'recommendation.',
                'It names the cases where local management is '
                'impossible rather than merely difficult.',
                'It says what the textbook forecast got wrong and why '
                'the counter-examples matter.',
                ],
         criterion=[('Separating two claims the debate treats as one',
                     'Task Response'),
                    ('Giving the opposing case a real domain',
                     'Task Response'),
                    ('Finishing on the discomfort rather than resolving '
                     'it', 'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Descriptive findings and prescriptive claims distinguished',
    explain=('The commonest misuse of evidence is a description doing '
             'prescriptive work. These patterns mark which kind of claim '
             'is being made, which is a band 8 habit.'),
    examples=['The features were found in institutions that grew, which is '
              'not advice.',
              'This study observed arrangements that existed; it did not '
              'create them.',
              'That such systems can work does not establish that they can '
              'be installed.',
              'The step from a finding to a programme requires an argument '
              'nobody supplies.'],
    task='Rewrite each claim so that its evidential status is marked.',
    items=[('The eight conditions should be implemented.',
            'The eight conditions were observed in surviving institutions, '
            'and whether implementing them produces survival is '
            'untested.'),
           ('Community management works.',
            'Community management has worked, in documented cases that '
            'arose rather than being designed.'),
           ('This proves local monitoring is effective.',
            'Local monitoring is present in the durable cases, which is '
            'consistent with its being effective and does not establish '
            'it.'),
           ('We should build these institutions.',
            'Building such institutions has a mixed record, which the '
            'research describing them neither predicts nor explains.'),
           ('The study recommends graduated sanctions.',
            'The study found graduated sanctions in the surviving cases; '
            'the recommendation is a step its author did not take.')]),
   vocab=[('emergent', 'arising without being designed'),
          ('transplant', 'to move an arrangement to another place'),
          ('grown rather than built', 'arising over time rather than '
           'designed'),
          ('precondition', 'something that must exist beforehand'),
          ('specification', 'a written description of what to build'),
          ('post-mortem', 'an examination of why something failed'),
          ('customary', 'established by long practice rather than rule'),
          ('obstacle removal', 'clearing what blocks an existing '
           'attempt')],
   expr=[('The features were found in institutions that grew, which is '
          'not advice', 'the cycle’s governing sentence'),
         ('the intervention that worked did least',
          'states a finding against expectation'),
         ('the features can be built in an afternoon; what they rest on '
          'cannot', 'separates structure from substrate'),
         ('nobody knows how to start one from nothing',
          'an honest answer that is rarely given')],
   trans=['admittedly', 'and yet', 'on balance',
          'what neither side notices'],
  ),
 ],
 technique=dict(
  title='Four series grouped by outcome rather than by label',
  body=('A chart with four series invites four paragraphs, and four '
        'paragraphs is almost always the wrong answer. The names in the '
        'key carry no information; what the lines did carries all of it, '
        'and two series with the same shape belong in one sentence. The '
        'grouping goes in the Overall statement, not discovered somewhere '
        'near the end — "the four fall into three patterns" tells a '
        'reader what the chart is for before they have seen a single '
        'figure. Watch particularly for the flat line, which is the one '
        'candidates under-report because nothing happened to it: where '
        'three series move and one does not, the one that did not move is '
        'a third of your finding and needs its own paragraph saying so '
        'explicitly.'),
  panel=[('Group before you count',
          'Which lines share a shape? That question is answered before '
          'any figure is written down.'),
         ('The grouping goes in the Overall',
          '"Three patterns, not four cases" in the first paragraph, every '
          'time.'),
         ('Two series, one paragraph',
          'Identical shapes share a paragraph. Writing them separately '
          'hides that they are identical.'),
         ('The flat line is a finding',
          'No movement is a result. Say so, and say it is unlike the '
          'others.')],
  task='Describe the cycle 3 chart in 150 words with the grouping stated '
       'in your first paragraph.',
  qs=['How many patterns are there, and what are they?',
      'Which two series share a paragraph, and why?',
      'What did you say about the series that did not move?',
      'Did any name appear before its group was named?',
      'Could a reader of your first paragraph predict the rest?']),
 outlining=dict(
  title='Separating what a study found from what it recommends',
  body=('A great deal of weak argument consists of a descriptive finding '
        'quietly performing prescriptive work, and the move is almost '
        'invisible once it has been made. A study observes eight features '
        'in institutions that lasted; a policy document lists eight '
        'features to implement. Nothing in the first licenses the second, '
        'and the step between them is taken in silence by people who would '
        'defend it if asked. So before you build an idea on a piece of '
        'evidence, mark the evidence: did somebody observe this, or did '
        'somebody do it and watch? If observed, your idea needs an extra '
        'sentence explaining why what was found in cases that arose should '
        'hold in cases that are built — and if you cannot write that '
        'sentence, the idea is weaker than it looked.'),
  frame=('Collective governance works where eight specific conditions '
         'hold and those conditions were observed in institutions that '
         'grew rather than designed, so the real question is not which '
         'form of ownership is better but whether the conditions can be '
         'built, which the evidence does not answer',
         [('The case for collective governance rests on a premise about '
           'what the comparative evidence shows, which holds '
           'descriptively',
           ['several hundred commons were managed sustainably for '
            'centuries without ownership or state control',
            'eight features recur in the durable cases and ownership is '
            'not among them']),
          ('The case for applying it rests on a premise about transfer '
           'that the same evidence cannot support',
           ['the features were observed in survivors, not assigned to '
            'them',
            'projects built from the checklist have a mixed record the '
            'research does not explain'])]),
  task='Go through your cycle 4 evidence and mark each item D or P. Then '
       'answer the five questions.',
  qs=['How many of your items are descriptive?',
      'Which idea depends on a descriptive item doing prescriptive '
      'work?',
      'Can you write the sentence that bridges the gap?',
      'If not, does the idea survive in a weaker form?',
      'Is the gap itself more interesting than the idea?'],
  answers=['nearly all of them, in most brainstorms',
           'usually the one you were most confident about',
           'if you can, the essay just got better',
           'usually yes, as a claim about what has happened',
           'at this level, frequently, and it belongs in the thesis']),
 candos=['I can read a shared-resource rule for what happens on a breach',
         'I can group four chart series by outcome rather than by name',
         'I can explain why individually reasonable choices destroy a '
         'shared resource',
         'I can say what a comparative study does and does not establish',
         'I can mark my own evidence as descriptive or prescriptive'],
 tip=('With four or more series, decide the grouping before you write a '
      'word, and put it in the first paragraph. A flat line among moving '
      'ones is a finding, not a gap in the story.'),
)
