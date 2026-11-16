# -*- coding: utf-8 -*-
"""Unit 27 - Urban Planning. IELTS Volume 3, band 6.0."""

_NOW = ('The site today',
 [(0.06, 0.05, 0.40, 0.15, 'Disused warehouses', 'building'),
  (0.52, 0.05, 0.42, 0.15, 'Timber yard', 'building'),
  (0.06, 0.34, 0.26, 0.18, 'Car park', 'new'),
  (0.36, 0.34, 0.26, 0.18, 'Scrubland', 'green'),
  (0.66, 0.34, 0.28, 0.18, 'Bus depot', 'building'),
  (0.06, 0.58, 0.40, 0.18, 'Canal basin', 'water'),
  (0.52, 0.58, 0.42, 0.18, 'Allotments', 'green')],
 [(0.0, 0.90, 1.0, 0.90, 'Brackwell Road')])

_PLAN = ('Under the masterplan',
 [(0.06, 0.05, 0.40, 0.15, 'Housing, 6 storeys', 'new'),
  (0.52, 0.05, 0.42, 0.15, 'Housing, 4 storeys', 'new'),
  (0.06, 0.34, 0.26, 0.18, 'School', 'new'),
  (0.36, 0.34, 0.26, 0.18, 'Square', 'green'),
  (0.66, 0.34, 0.28, 0.18, 'Workshops', 'new'),
  (0.06, 0.58, 0.40, 0.18, 'Canal park', 'water'),
  (0.52, 0.58, 0.42, 0.18, 'Allotments retained', 'green')],
 [(0.0, 0.90, 1.0, 0.90, 'Brackwell Road'),
  (0.0, 0.29, 1.0, 0.29, 'New pedestrian route')])

_KEY = [('Existing building', 'building'), ('New or rebuilt', 'new'),
        ('Water', 'water'), ('Open ground', 'green')]

_MAPS = dict(kind='map', title='The Brackwell site now and under the '
                               'masterplan',
             sub='two maps of the same ground', panels=[_NOW, _PLAN],
             key=_KEY)

UNIT = dict(
 n=27, vol=3, level='B2', band='6.0',
 theme='Urban Planning',
 opener=(
   'A consultation notice, four residents of one street who want four '
   'different things from it, and two maps of the same ground. The Task 1 '
   'lesson here is the one candidates most often get wrong: two maps invite '
   'you to organise by time, and organising by zone is almost always the '
   'better answer.'),

 cycles=[
  dict(
   sub='Having your say',
   step=1,
   read=[
    dict(heading='The local plan — how to comment',
         kind='Consultation notice',
         task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-5',
         skill=('A consultation notice is read for what counts and what does '
                'not',
                ['Every consultation notice says, usually in one sentence, '
                 'which kinds of comment will be considered and which will '
                 'be set aside.',
                 'Find that sentence before anything else. Three of these '
                 'five questions depend on it, and so does any letter you '
                 'ever write to a council.']),
         paras=[
          'The draft local plan sets out where development will be permitted '
          'in the district until 2041. It is open for comment for six weeks, '
          'closing at five o’clock on 28 February. Comments received after '
          'that time will be recorded but not considered.',
          'Comments are most useful when they refer to a numbered policy. A '
          'comment saying that the plan is too ambitious carries almost no '
          'weight; a comment saying that Policy H4 allocates eighty homes to '
          'a site with a single access road carries a great deal.',
          'The council must consider whether each comment concerns the '
          'soundness of the plan. Matters of soundness include whether a '
          'policy is justified by evidence, whether it is deliverable, and '
          'whether it is consistent with national policy. Objections based '
          'on the effect on a particular house price are not matters of '
          'soundness and will be set aside.',
          'All comments are published with the name of the person who made '
          'them, although addresses are removed. Anonymous comments cannot be '
          'accepted at this stage, because an inspector must be able to '
          'confirm that a representation was genuinely made.',
          'After the consultation closes, the plan and all comments go to an '
          'independent inspector, who may hold hearings. The inspector may '
          'require changes, and the council may not adopt the plan until the '
          'inspector has reported.'],
         items=[
          ('Comments arriving after the deadline will be',
           ['considered late', 'recorded but not considered', 'returned',
            'published only'], 1,
           'Paragraph 1, which closes at five o’clock on 28 February.'),
          ('Which of these is a matter of soundness?',
           ['The effect on house prices', 'Whether a policy is justified by '
            'evidence', 'Whether residents like the plan',
            'Whether the plan is ambitious'], 1,
           'Paragraph 3, alongside deliverability and consistency with '
           'national policy.'),
          ('Anonymous comments are refused because',
           ['they are rude', 'an inspector must confirm a representation was '
            'made', 'they are too numerous', 'the law forbids them'], 1,
           'Paragraph 4, although addresses are removed from what is '
           'published.'),
          ('A useful comment refers to a numbered ____________.', None,
           'policy',
           'Paragraph 2, which contrasts two versions of the same '
           'objection.'),
          ('The council may not adopt the plan until the ____________ has '
           'reported.', None, 'inspector',
           'Paragraph 5, and the inspector may require changes.')]),
    dict(heading='What happens to your comment',
         kind='Procedure notice', task='Flow-chart completion',
         band='gt_short', qtype='Questions 6-9',
         paras=[
          'Your comment is logged on arrival and given a reference beginning '
          'with the letters LP. Quote that reference in any later '
          'correspondence, because comments are filed by reference and not by '
          'name, and three people on one street may share a surname.',
          'An officer then sorts every comment by the policy it concerns. A '
          'comment naming no policy is sorted by subject, which takes longer '
          'and produces a worse result, since the officer has to guess which '
          'policy you meant.',
          'A summary of comments on each policy is prepared for the '
          'inspector, with the full text attached. Your comment is not '
          'rewritten, but the summary is what most people read, so the first '
          'two sentences of what you send matter more than the rest.',
          'If you asked to speak at a hearing, you will be written to about '
          'six weeks beforehand. Speaking is not necessary and does not add '
          'weight; it is useful only where you have something the written '
          'comment could not carry, such as a photograph taken at the '
          'junction in question.'],
         items=[
          ('Your comment is given a reference beginning ____________.',
           None, 'LP',
           'Paragraph 1, because comments are filed by reference, not by '
           'name.'),
          ('A comment naming no policy is sorted by ____________.', None,
           'subject', 'Paragraph 2, which takes longer and works less well.'),
          ('A ____________ of comments on each policy goes to the '
           'inspector.', None, 'summary',
           'Paragraph 3, with the full text attached.'),
          ('Speakers are written to about ____________ weeks beforehand.',
           None, 'six',
           'Paragraph 4, and speaking adds no weight by itself.')])],
   listen=[
    dict(heading='Submitting a comment', part='Part 1',
         task='A call to a planning policy team', band='l1',
         qtype='Questions 10-14',
         script=[
          ('Officer', 'Planning policy, Rohan speaking.'),
          ('Caller', 'Hello. I want to object to the housing on the old '
           'timber yard.'),
          ('Officer', 'Good. Can you tell me which policy number that is?'),
          ('Caller', 'I have no idea. It is the timber yard on Brackwell '
           'Road.'),
          ('Officer', 'Then it is H4, and I would ask you to put that in your '
           'letter, because it is the difference between a comment that gets '
           'read with the policy and one that an officer has to guess the '
           'home of.'),
          ('Caller', 'H4. Thank you. Does objecting actually achieve '
           'anything?'),
          ('Officer', 'Sometimes, and it depends entirely on what the '
           'objection is about. If you tell me the plan is too ambitious, '
           'nothing happens. If you tell me H4 puts eighty homes behind a '
           'single access road, the inspector has to deal with it.'),
          ('Caller', 'That is exactly my point, in fact.'),
          ('Officer', 'Then you have a good comment and you should make it '
           'in those words. What will not help, and I say this to everybody, '
           'is anything about the effect on the value of your house. That is '
           'not a matter of soundness and it is set aside.'),
          ('Caller', 'I had intended to mention it.'),
          ('Officer', 'Most people do. Leave it out and the rest of your '
           'letter is stronger. Can you also put the two best sentences '
           'first? Your full text goes to the inspector, but the summary is '
           'what gets read, and the summary is built from the opening.'),
          ('Caller', 'When does it close?'),
          ('Officer', 'Five o’clock on the twenty-eighth of February. After '
           'that I log it and nobody considers it, which is a sad little job '
           'I do every March.'),
          ('Caller', 'And will my name be published?'),
          ('Officer', 'Your name yes, your address no. We cannot take it '
           'anonymously, because the inspector has to be able to confirm the '
           'comment was really made.')],
         items=[
          ('Relevant policy number: ____________', None, 'H4',
           'Covering the housing on the old timber yard.'),
          ('The strong objection is that H4 puts eighty homes behind a '
           'single ____________ road.', None, 'access',
           'Which the officer says the inspector has to deal with.'),
          ('The caller is advised to leave out any reference to house '
           '____________.', None, 'value',
           'Because it is not a matter of soundness.'),
          ('The deadline is five o’clock on ____________ February.', None,
           '28', 'After which comments are logged but not considered.'),
          ('Published with each comment: the name, but not the '
           '____________.', None, 'address',
           'And anonymous comments cannot be accepted.')]),
    dict(heading='A short talk: what a street is for', part='Part 2',
         task='A talk at a neighbourhood forum', band='l2',
         qtype='Questions 15-18',
         script=[
          ('Speaker', 'I have run consultations on street schemes for nine '
           'years, and I want to tell you the single thing I have learned, '
           'because it would save every one of you an evening of '
           'frustration.'),
          ('Speaker', 'People do not disagree about streets. They disagree '
           'about what a street is for, and because nobody says which one '
           'they mean, two people can argue for an hour while agreeing on '
           'every fact.'),
          ('Speaker', 'There are four answers in the room, always. A street '
           'is a route, and the people who think so care about how long it '
           'takes to get through. A street is a destination, and those people '
           'care about whether anybody stops. A street is a frontage, which '
           'is the shopkeepers, and they care about what happens in the three '
           'metres outside their door. And a street is a home, which is '
           'everybody upstairs, and they care about noise at eleven at '
           'night.'),
          ('Speaker', 'Every scheme serves two of those four and damages the '
           'other two, and the arguments you have been having are the four '
           'definitions colliding rather than a disagreement about '
           'evidence.'),
          ('Speaker', 'Here is the practical use of that. When somebody '
           'objects, ask which of the four they are speaking for. You will '
           'find that half the objections are compatible with your scheme '
           'once the definition is on the table, and the other half are real '
           'and you now know exactly what they cost.'),
          ('Speaker', 'And the scheme that survives a consultation is almost '
           'never the best scheme. It is the one whose designers could say, '
           'in one sentence, which two of the four they had chosen and why. '
           'Residents forgive a choice they can see. They do not forgive a '
           'scheme that pretends to serve everybody.')],
         items=[
          ('The speaker says people disagree about',
           ['the evidence', 'what a street is for', 'the cost',
            'the designers'], 1,
           'Which is why two people can argue while agreeing on every '
           'fact.'),
          ('How many definitions of a street does the speaker name?',
           ['Two', 'Three', 'Four', 'Five'], 2,
           'Route, destination, frontage and home.'),
          ('What does the speaker advise doing when somebody objects?',
           ['Explain the evidence', 'Ask which definition they speak for',
            'Offer a compromise', 'Refer them to the policy'], 1,
           'Because half the objections turn out to be compatible.'),
          ('Which scheme survives a consultation?',
           ['The cheapest', 'The best', 'The one whose designers can name '
            'their choice', 'The one with fewest objections'], 2,
           'Residents forgive a choice they can see.')])],
   speak=dict(
    part='Part 1', focus='Changes in your town',
    intro=('Two or three sentences each. One specific change is worth three '
           'general ones.'),
    qs=['Has anything been built near you recently?',
        'Do people in your area get a say in such decisions?',
        'What would you change about where you live?',
        'Do you prefer new buildings or old ones?'],
    shape=[('answer', 'Forty flats on what used to be a car park.'),
           ('support', 'There was a consultation and about nine people '
            'went.'),
           ('follow-up', 'Which I think is why the bus stop was never '
            'moved.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Commenting on a planning application near you',
         prompt=('A development has been proposed near your home. Write a '
                 'letter to the council. In your letter: say what the '
                 'proposal is; explain your concern; say what change you '
                 'would like. Write at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing about application 24/0417, the proposal for eighty '
          'homes on the former timber yard at Brackwell Road, and about '
          'Policy H4 of the draft local plan, on which the application '
          'relies.',
          'My objection rests on access rather than on the principle of '
          'building here. The site has one entrance, onto Brackwell Road '
          'eleven metres from the junction with Pell Street, and that '
          'junction already queues back past my gate between eight and nine '
          'each morning. Eighty homes would add, on the council’s own '
          'figure of 1.2 cars per home, something close to ninety vehicles '
          'using that single entrance.',
          'I should make clear that I am not opposed to the site being '
          'developed. The yard has been empty for nine years and the land '
          'would be better used for housing than for nothing.',
          'What I would ask is that permission be made conditional on a '
          'second access, through the bus depot land to the east, which is in '
          'the same ownership. If that is not possible, I would ask that the '
          'number of homes be reduced to a level the junction can carry, and '
          'that the figure be stated in the decision rather than left to the '
          'developer.',
          'Yours faithfully,',
          'D. Achterberg-Nwosu'],
         notes=[
          'The first sentence gives the application number and the policy. A '
          'letter that names both is filed with both, which doubles the '
          'number of officers who see it.',
          'The objection is narrowed in its first six words and then '
          'supported with the council’s own figure. Using the reader’s '
          'number against the reader’s proposal is the strongest move '
          'available in this kind of letter.',
          'Two requests, in order of preference, and the second one is '
          'specific about who states the figure. Asking for a number to '
          'appear in the decision rather than in a later negotiation is what '
          'planning officers themselves ask for.'],
         criterion=[('Naming the application and the policy',
                     'Task Achievement'),
                    ('Using the reader’s own figure',
                     'Task Response'),
                    ('Two requests in order of preference',
                     'Coherence and Cohesion')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Grounds and evidence in a formal objection',
    explain=('An objection is judged on what it rests on. Saying so in the '
             'first sentence of the argument tells the reader which category '
             'to file it under, and keeps it out of the category that gets '
             'set aside.'),
    examples=['My objection rests on access rather than on the principle of '
              'building here.',
              'I am not opposed to the site being developed.',
              'On the council’s own figure of 1.2 cars per home, that is '
              'ninety vehicles.',
              'I would ask that the figure be stated in the decision.'],
    task='Rewrite each objection so that it names what it rests on.',
    items=[('I do not want this built.',
            'My objection rests on the single access road, not on the '
            'principle of development.'),
           ('There will be too much traffic.',
            'On the council’s own figure of 1.2 cars per home, eighty homes '
            'generate ninety vehicles through one junction.'),
           ('It will spoil the area.',
            'The proposed six storeys exceed the three-storey limit set by '
            'Policy D2.'),
           ('My house will lose value.',
            'I would ask instead that the access arrangements be reconsidered '
            'under Policy T1.'),
           ('Nobody was consulted.',
            'The notice was posted on 4 March and the site lies outside the '
            'area notified under the statutory procedure.')]),
   vocab=[('local plan', 'a document saying where building is allowed'),
          ('representation', 'a formal comment on a plan'),
          ('inspector', 'an independent official who examines a plan'),
          ('soundness', 'whether a plan is justified and deliverable'),
          ('deliverable', 'able actually to be carried out'),
          ('access', 'the way vehicles enter and leave a site'),
          ('subject to', 'granted only if something else is done'),
          ('junction', 'a place where two roads meet')],
   expr=[('My objection rests on access rather than on the principle',
          'files an objection in the right category'),
         ('on the council’s own figure',
          'uses the reader’s number against their proposal'),
         ('I am not opposed to the site being developed',
          'removes the easiest way to dismiss you'),
         ('that the figure be stated in the decision',
          'asks for a commitment rather than an intention')],
   trans=['furthermore', 'in this connection', 'what I would ask',
          'if that is not possible'],
  ),

  dict(
   sub='What people want from a street',
   step=2,
   read=[
    dict(heading='Four residents on the same street',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 19-24',
         paras=[
          'A  Rosalind: I drive through here twice a day and I measure this '
          'street in minutes. Four minutes before they changed the lights, '
          'eleven after. I do not care what it looks like and I am aware that '
          'makes me unpopular at meetings, but somebody on this street has to '
          'say that getting somewhere is a legitimate use of a road.',
          'B  Taavi: I have the shop at number nine and my whole business '
          'lives in the three metres outside my door. Parking, loading, '
          'whether people walk past slowly. I predicted ruin when they '
          'widened the pavement and I was wrong: my takings went up eleven '
          'per cent, and I have had to say so in public, which I did not '
          'enjoy.',
          'C  Marguerite: I live above the chemist and what I want is quiet '
          'after ten. Everything else in this argument is somebody’s '
          'daytime. The scheme that made the street nicer also made it the '
          'place where people stand outside until midnight, and nobody at any '
          'consultation has ever asked me about eleven at night.',
          'D  Ignatius: I am on the committee and I have changed my mind '
          'twice. What I have ended up believing is that we cannot have all '
          'four things and should say which two we are choosing. We keep '
          'designing schemes that promise everybody everything, and those are '
          'the schemes that get withdrawn.'],
         items=[
          ('Which person values the street mainly as a route?',
           ['Rosalind', 'Taavi', 'Marguerite', 'Ignatius'], 0,
           'She measures the street in minutes.'),
          ('Which person was wrong about the effect on trade?',
           ['Rosalind', 'Taavi', 'Marguerite', 'Ignatius'], 1,
           'He predicted ruin and his takings rose eleven per cent.'),
          ('Which person’s concern is about the evening?',
           ['Rosalind', 'Taavi', 'Marguerite', 'Ignatius'], 2,
           'She lives above the chemist and wants quiet after ten.'),
          ('Which person argues for choosing between competing aims?',
           ['Rosalind', 'Taavi', 'Marguerite', 'Ignatius'], 3,
           'He says schemes promising everybody everything get withdrawn.'),
          ('Taavi now supports the widened pavement.',
           ['Yes', 'No', 'Not Given'], 0,
           'He reports higher takings and says he has said so publicly.'),
          ('Marguerite has objected at a consultation.',
           ['Yes', 'No', 'Not Given'], 2,
           'She says nobody has asked her about eleven at night; whether she '
           'objected is not said.')])],
   listen=[
    dict(heading='Two councillors disagree about parking', part='Part 3',
         task='A discussion before a committee vote', band='l3',
         qtype='Questions 25-29',
         script=[
          ('Alinta', 'We vote on Thursday and I would rather we disagreed '
           'now than in public.'),
          ('Bogdan', 'Then I will be blunt. Removing forty spaces from the '
           'high street will finish four of those shops.'),
          ('Alinta', 'What is that based on?'),
          ('Bogdan', 'What the shopkeepers tell me, which I accept is not a '
           'survey, and what happened in Pell Street in 2019.'),
          ('Alinta', 'Pell Street is the case I was going to raise, because '
           'the figures went the other way. Takings rose eleven per cent in '
           'the two years after, and the two shops that closed were a '
           'bookmaker and a shop that had been losing money since 2016.'),
          ('Bogdan', 'I did not know the second part, and I should have.'),
          ('Alinta', 'It is in the appendix rather than the summary, which is '
           'where we hide everything inconvenient to whoever wrote the '
           'summary.'),
          ('Bogdan', 'Let me change my objection, then, because I still have '
           'one and it is not about takings. It is about who can get here. '
           'The people who drive to that high street are disproportionately '
           'old and disabled, and the bus from the estates takes '
           'thirty-five minutes.'),
          ('Alinta', 'That objection I cannot answer and I am not going to '
           'pretend to. The honest reply is that the scheme is better for '
           'most people and worse for the people least able to absorb it.'),
          ('Bogdan', 'Would you put that in the committee paper?'),
          ('Alinta', 'I will, if you will support the scheme with eight '
           'spaces kept as blue badge bays at the top end.'),
          ('Bogdan', 'Twelve.'),
          ('Alinta', 'Ten, and I will ask for the bus frequency review to be '
           'brought forward, which is the actual answer to your objection and '
           'is not in my gift.'),
          ('Bogdan', 'Ten and the review in the paper. We have a deal, and I '
           'would still rather you had not been right about Pell Street.'),
          ('Alinta', 'I would rather I had read the appendix four years '
           'ago, which is the version of that sentence I have to live '
           'with.'),
          ('Bogdan', 'Then put the appendix figures in the summary this '
           'time, and I will stop making arguments I have to withdraw in '
           'committee.')],
         items=[
          ('Bogdan’s first objection is based on',
           ['a survey', 'what shopkeepers tell him and the Pell Street '
            'case', 'council figures', 'national research'], 1,
           'He accepts the first is not a survey.'),
          ('What happened to takings in Pell Street?',
           ['They fell', 'They rose eleven per cent', 'They were '
            'unchanged', 'Nobody measured'], 1,
           'And the two shops that closed were already failing.'),
          ('Where was the inconvenient detail published?',
           ['The summary', 'The appendix', 'A press release',
            'Nowhere'], 1,
           'Which Alinta says is where such things are hidden.'),
          ('Bogdan’s revised objection concerns',
           ['takings', 'who can reach the high street', 'noise',
            'construction'], 1,
           'Drivers there are disproportionately old and disabled.'),
          ('What do they agree?',
           ['Twelve bays', 'Ten bays and the bus review in the paper',
            'No change', 'Eight bays only'], 1,
           'With the frequency review brought forward.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Streets',
    intro=('Short answers, then the long turn. The fourth bullet is the one '
           'that separates a band 6 from a band 7.'),
    cue=('Describe a street you know well.',
         ['where it is', 'what is on it', 'who uses it',
          'and explain what you like or dislike about it']),
    qs=['Is there a street in your town that everybody knows?',
        'Do you walk much where you live?',
        'Now look at the card. You have one minute to make notes.',
        'Should streets be designed for cars or for people?'],
    shape=[('answer', 'Pell Street, which runs down to the canal.'),
           ('support', 'A chemist, three cafes and a shop that sells '
            'nothing identifiable.'),
           ('follow-up', 'Everybody uses it and all of them differently.'),
           ('support', 'What I like is that it is busy without being '
            'loud.'),
           ('follow-up', 'What I dislike is that the pavement is too narrow '
            'outside the chemist, which is where the queue forms.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should city centres be closed to private cars?',
         prompt=('Some people believe city centres should be closed to '
                 'private cars. Others think this would damage businesses '
                 'and exclude people. Discuss both views and give your own '
                 'opinion. Write at least 250 words.'),
         model=[
          'This argument is usually conducted with the wrong evidence on both '
          'sides, because the two questions it contains — what happens to '
          'trade, and who can still get there — have different answers, and '
          'only the first one has been settled.',
          'The case for closure is now supported by measurement rather than '
          'by principle. In the schemes that have been evaluated, retail '
          'takings in pedestrianised streets have generally risen rather than '
          'fallen, typically by around ten per cent, and the businesses that '
          'closed were in most cases already failing. Shopkeepers predicted '
          'ruin and the figures say otherwise, consistently enough that the '
          'prediction is no longer evidence of anything.',
          'The case against is usually made with the same trade argument, '
          'which is why it loses. Its stronger form is about access. The '
          'people who drive into a city centre are disproportionately old, '
          'disabled or carrying something, and a bus journey of thirty-five '
          'minutes is not an answer to somebody who cannot manage the walk at '
          'either end. Closure is an improvement for most people that is paid '
          'for by the people least able to absorb it.',
          'My own position is that centres should be closed to through '
          'traffic and not to all private cars, with permits and short-stay '
          'bays kept for those who demonstrably need them. The congestion '
          'and the noise come overwhelmingly from vehicles passing through, '
          'and the access problem comes from vehicles arriving.',
          'That distinction is available in every scheme I have read about '
          'and is taken in surprisingly few of them, usually because '
          '"pedestrianised" is a simpler thing to announce than "closed to '
          'through traffic with two hundred permits". The simpler '
          'announcement is also the one that produces the objection it '
          'deserves.'],
         notes=[
          'The introduction separates two questions and says that only one is '
          'settled. That tells the examiner immediately that the essay will '
          'do something other than list.',
          'Paragraph 3 says the opposing case loses because it uses the wrong '
          'argument, and then supplies its better one. Improving your '
          'opponent’s case before answering it is the single most reliable '
          'route to a high Task Response mark.',
          'The resolution turns on a distinction inside the question: '
          'through traffic against arriving traffic. Finding the distinction '
          'the prompt conceals is worth more than any amount of balance.'],
         criterion=[('Separating two questions in the introduction',
                     'Task Response'),
                    ('Improving the opposing case before answering it',
                     'Task Response'),
                    ('A resolution built on a distinction inside the '
                     'question', 'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Concessive-contrastive chains',
    explain=('A concession followed by a contrast is the commonest shape of '
             'a strong argument, and it can be extended into a chain: '
             'concede, contrast, concede again. Each link must be short or '
             'the reader loses the thread.'),
    examples=['Shopkeepers predicted ruin; the footfall figures say '
              'otherwise.',
              'Takings rose, admittedly from a low base, and the trend has '
              'held for four years.',
              'The scheme is better for most people and worse for those least '
              'able to absorb it.',
              'That is a real objection, and it is not the one usually '
              'made.'],
    task='Join each pair into a concessive-contrastive sentence.',
    items=[('Shops objected. Takings rose.',
            'The shops objected and their takings subsequently rose by '
            'eleven per cent.'),
           ('Two shops closed. They were already failing.',
            'Two shops did close, although both had been losing money for '
            'three years beforehand.'),
           ('The scheme helps most people. It harms some.',
            'The scheme is an improvement for most people, and it is paid '
            'for by a minority.'),
           ('Buses exist. They take thirty-five minutes.',
            'There is a bus, admittedly one taking thirty-five minutes from '
            'the estates.'),
           ('The evidence is clear. The objection remains.',
            'The trade evidence is clear; the access objection survives it '
            'untouched.')]),
   vocab=[('footfall', 'the number of people passing on foot'),
          ('severance', 'a road cutting a community in two'),
          ('permeability', 'how easily people can move through an area'),
          ('frontage', 'the part of a building facing the street'),
          ('pedestrianise', 'to close a street to vehicles'),
          ('blue badge', 'a permit for a disabled driver'),
          ('through traffic', 'vehicles passing without stopping'),
          ('takings', 'the money a shop receives')],
   expr=[('Shopkeepers predicted ruin; the figures say otherwise',
          'sets a prediction against a measurement'),
         ('That objection I cannot answer and I am not going to pretend to',
          'concedes without collapsing'),
         ('it is in the appendix rather than the summary',
          'notes where an inconvenient fact was put'),
         ('which is not in my gift',
          'marks the limit of your own authority')],
   trans=['whereas', 'that said', 'admittedly', 'its stronger form'],
  ),

  dict(
   sub='A plan on paper',
   step=3,
   read=[
    dict(heading='The Brackwell masterplan — two maps',
         kind='Plan and key',
         task='Plan labelling and matching information',
         band='gt_work', qtype='Questions 30-35',
         figure=_MAPS,
         paras=[
          'The two maps show the Brackwell site as it stands and as the '
          'masterplan proposes it. The ground is unchanged, the road along '
          'the southern edge is unchanged, and almost everything between them '
          'is not.',
          'In the northern zone the disused warehouses and the timber yard '
          'give way to housing, at six storeys on the western half and four '
          'on the eastern. That difference is deliberate: the taller blocks '
          'face the railway and the shorter ones face the existing terraces '
          'across the road to the east.',
          'The central zone changes use rather than density. The car park '
          'becomes a primary school, the scrubland becomes a public square, '
          'and the bus depot becomes workshops. The square sits between the '
          'school and the workshops, which is a decision about who uses it at '
          'what time of day: children at nine and three, workers at '
          'midday.',
          'The southern zone is the one that barely changes, and the plan is '
          'careful to say so twice. The canal basin becomes a canal park, '
          'meaning that the water remains and the ground beside it is '
          'planted. The allotments are retained, which was the single '
          'commonest request in the first consultation.',
          'One entirely new feature crosses all three zones: a pedestrian '
          'route running east to west between the northern and central zones. '
          'There is nothing corresponding to it on the first map, and it is '
          'what turns three parcels of land into one place.',
          'Phasing is the part of a masterplan that most often fails. The '
          'housing comes first because it funds everything else, the school '
          'in phase two, and the canal park in phase three, which means the '
          'park exists on paper for nine years and may be the thing that is '
          'quietly dropped if the housing sells for less than forecast.'],
         items=[
          ('Which paragraph explains why the new blocks differ in height?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 0,
           'The taller blocks face the railway, the shorter the existing '
           'terraces.'),
          ('Which paragraph describes the zone that changes least?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 2,
           'The canal basin and the retained allotments.'),
          ('Which paragraph identifies the risk in the delivery order?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 3,
           'The canal park comes in phase three and may be dropped.'),
          ('The car park becomes a ____________.', None, 'school',
           'Paragraph 3, in the central zone.'),
          ('The bus depot becomes ____________.', None, 'workshops',
           'Paragraph 3, on the eastern side of the central zone.'),
          ('The new east-west feature is a ____________ route.', None,
           'pedestrian',
           'Paragraph 5, which has no equivalent on the first map.')])],
   listen=[
    dict(heading='A planner presents the masterplan', part='Part 4',
         task='A presentation of two site plans', band='l4',
         qtype='Questions 36-41',
         figure=_MAPS,
         script=[
          ('Planner', 'Two maps, the same ground, and I am going to walk you '
           'through them by zone rather than by date, because that is how the '
           'plan was actually designed and it is also how you will understand '
           'it in ten minutes rather than forty.'),
          ('Planner', 'Northern zone first, along the top of both maps. '
           'Today: disused warehouses to the west, a timber yard to the east, '
           'both empty for most of a decade. Under the plan: housing across '
           'the whole strip, six storeys on the western half and four on the '
           'eastern. People ask why the step, and the answer is what each '
           'half faces. The west faces the railway. The east faces the '
           'terraced houses across the road, and putting six storeys opposite '
           'two is how a scheme loses a consultation.'),
          ('Planner', 'Central zone. This is where the uses change and the '
           'density does not. The car park becomes a primary school, the '
           'scrubland becomes a public square, the bus depot becomes '
           'workshops. The square between the school and the workshops is '
           'doing deliberate work: it is busy at nine and at three with '
           'children, and at midday with the people from the workshops, which '
           'is four busy periods a day in a space that would otherwise be '
           'empty.'),
          ('Planner', 'Southern zone, and here the honest answer is that we '
           'have left it alone. The canal basin stays water and becomes a '
           'canal park, which means planting beside it and nothing done to '
           'it. The allotments are retained. That was the most common single '
           'request in the first round of consultation and it cost us very '
           'little to agree to, which is the kind of thing you should take '
           'when it is offered.'),
          ('Planner', 'One new element crosses everything: a pedestrian route '
           'running east to west between the northern and central zones. '
           'Nothing on the first map corresponds to it. It is the cheapest '
           'line on the drawing and it is the one that turns three pieces of '
           'land into a single place, and if I had to defend one decision to '
           'an inspector it would be that one.'),
          ('Planner', 'Finally, phasing, and I will be direct because you '
           'will ask. Housing in phase one, because it pays for the rest. '
           'School in phase two. Canal park in phase three, which is nine '
           'years away. If the housing sells below forecast, the canal park is '
           'the thing at risk, and anybody who tells you otherwise has not '
           'watched this happen before.')],
         items=[
          ('The planner organises the presentation by',
           ['date', 'zone', 'cost', 'phase'], 1,
           'Because that is how the plan was designed.'),
          ('The western half of the northern zone will be',
           ['four storeys', 'six storeys', 'workshops', 'unchanged'], 1,
           'Facing the railway, while the east is four storeys facing the '
           'terraces.'),
          ('In the central zone, the car park becomes a',
           ['square', 'school', 'workshop', 'park'], 1,
           'Alongside the scrubland becoming a square.'),
          ('The square is placed to serve',
           ['residents only', 'children and workshop workers',
            'visitors', 'the school alone'], 1,
           'Giving four busy periods a day.'),
          ('What crosses all three zones?',
           ['A road', 'A pedestrian route', 'The canal', 'A railway'], 1,
           'With nothing corresponding to it on the first map.'),
          ('Which element is most at risk if housing sells below forecast?',
           ['The school', 'The canal park', 'The workshops',
            'The allotments'], 1,
           'Because it falls in phase three, nine years away.')])],
   speak=dict(
    part='Part 3', focus='Plans and what gets built',
    intro=('Four or five sentences. Try once to say that a plan and its '
           'delivery are different things.'),
    qs=['Do new developments usually turn out as planned?',
        'Why do some parts of a plan never get built?',
        'Should developers be made to build the public parts first?',
        'Who should decide what a new neighbourhood contains?'],
    shape=[('answer', 'The housing does; the park often does not.'),
           ('support', 'The housing is in phase one because it funds '
            'everything.'),
           ('follow-up', 'The park is in phase three, nine years out.'),
           ('support', 'So the park exists on paper for a decade.'),
           ('follow-up', 'Which is why I would require the public parts '
            'early, even though it costs the scheme money.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='The Brackwell site now and under the masterplan',
         prompt=('The maps below show a site as it is today and as it is '
                 'proposed under a masterplan. Summarise the information by '
                 'selecting and reporting the main features. Write at least '
                 '150 words.'),
         figure=_MAPS,
         model=[
          'The two maps show an area of former industrial land as it exists '
          'today and as a masterplan proposes to redevelop it. Overall, the '
          'northern and central parts of the site are to be entirely '
          'rebuilt, while the southern strip along the canal is largely '
          'retained, and a new pedestrian route is to be introduced across '
          'the middle of the site.',
          'In the northern zone, the disused warehouses and the timber yard '
          'are to be replaced by housing along the full width of the site, at '
          'six storeys in the west and four in the east.',
          'The central zone is to change in use rather than in scale. The car '
          'park is to be replaced by a school, the area of scrubland by a '
          'public square, and the bus depot by workshops, so that the square '
          'lies between the school and the workshops.',
          'In the southern zone the canal basin is to be retained as water '
          'and landscaped as a canal park, while the allotments to its east '
          'are to be kept unaltered. Brackwell Road, along the southern '
          'boundary, is unchanged, and the only entirely new feature is the '
          'pedestrian route running from east to west between the northern '
          'and central zones.'],
         notes=[
          'Three paragraphs, three zones, north to south. Organising two maps '
          'by zone keeps each piece of ground together; organising by time '
          'forces you to describe the whole site twice and run out of '
          'words.',
          'The Overall statement says which parts change and which do not. On '
          'a pair of maps, what stayed the same is always part of the main '
          'feature and is the thing most candidates omit entirely.',
          'Note the tense pattern: present for the existing map, "is to be" '
          'for the proposal. Mixing a future passive into a description of '
          'the present is the commonest grammar failure on this task type.'],
         criterion=[('Organising by zone rather than by map',
                     'Coherence and Cohesion'),
                    ('Reporting what did not change', 'Task Achievement'),
                    ('Present for the existing, "is to be" for the proposal',
                     'Grammatical Range')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Spatial organisation by zone, not by date',
    explain=('Describing two or three maps needs language that fixes a place '
             'and then reports the change there. Fix the place first and the '
             'sentence writes itself.'),
    examples=['In the northern zone the warehouses give way to housing.',
              'Along the southern edge, the canal basin is retained.',
              'To the east of the square, the bus depot is to become '
              'workshops.',
              'The road along the southern boundary is unchanged.'],
    task='Rewrite each sentence so that it begins with the place.',
    items=[('The warehouses will be demolished.',
            'In the northern zone, the warehouses are to be replaced by '
            'housing.'),
           ('A school is planned.',
            'In the centre of the site, the car park is to become a primary '
            'school.'),
           ('The allotments stay.',
            'Along the southern edge, the allotments are to be retained '
            'unaltered.'),
           ('They are adding a footpath.',
            'Between the northern and central zones, a new pedestrian route '
            'is to be introduced.'),
           ('Nothing happens to the road.',
            'Brackwell Road, along the southern boundary, is unchanged in the '
            'proposal.')]),
   vocab=[('masterplan', 'a single plan for a whole site'),
          ('phasing', 'the order in which parts are built'),
          ('massing', 'the size and shape of buildings on a site'),
          ('public realm', 'the streets and spaces between buildings'),
          ('storey', 'one floor of a building'),
          ('landscaped', 'planted and shaped deliberately'),
          ('retained', 'kept rather than removed'),
          ('zone', 'one part of a site considered together')],
   expr=[('by zone rather than by date', 'announces an organisation'),
         ('the honest answer is that we have left it alone',
          'states a non-change without apology'),
         ('the cheapest line on the drawing',
          'identifies value disproportionate to cost'),
         ('anybody who tells you otherwise has not watched this happen '
          'before', 'claims authority from experience')],
   trans=['to the north', 'in the centre', 'along the southern edge',
          'finally'],
  ),

  dict(
   sub='Why density divides people',
   step=4,
   read=[
    dict(heading='Building up, building out, building nothing',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 42-48',
         paras=[
          'Every growing city faces the same three options and discusses them '
          'as though there were two. It can build upwards, increasing the '
          'number of homes on land already serviced; it can build outwards, '
          'adding land at the edge; or it can build very little, which is a '
          'choice made by default and has consequences as large as either of '
          'the others, and almost none of them recorded anywhere a '
          'council would look.',
          'Building upwards is cheap to serve and expensive to build. The '
          'pipes, cables, buses and schools largely exist, and each '
          'additional household uses them at a lower marginal cost than a new '
          'household at the edge. Against that, tall buildings cost two to '
          'three times as much per square metre as houses, require '
          'professional management in perpetuity, and take four to seven '
          'years from permission to completion, during which the shortage the '
          'building was meant to relieve continues.',
          'Building outwards reverses every term. Construction is cheap, '
          'quick and uses techniques any regional builder can manage, which '
          'is why most housing in most countries is built this way. The '
          'public cost arrives afterwards and is almost never counted against '
          'the scheme: new roads, a new school, water mains, and a bus '
          'service that will run at a loss for as long as the estate exists. '
          'None of those costs appears in the price of the house that '
          'generated them.',
          'The third option, building little, is the one most cities have '
          'actually chosen over the past thirty years, and its costs fall on '
          'people who are not in the room when the decision is made. Prices '
          'rise, households form later, young workers commute from further '
          'away, and the city gradually exports the people who staff it. None '
          'of this appears in a planning document, because it is the '
          'consequence of a series of individual refusals rather than of any '
          'single decision.',
          'The argument between the first two options is usually conducted as '
          'though it were about taste, and the evidence on it is more mixed '
          'than either side admits. Dense areas have lower transport '
          'emissions per household and higher construction emissions per '
          'home. They support better public transport and produce more '
          'objections per unit of development. They use less land and '
          'generate more local opposition at each individual site. Somebody '
          'arguing either case can assemble a consistent set of true '
          'statements, which is why the argument has lasted forty years '
          'without moving.',
          'What is genuinely settled is the arithmetic of servicing. A city '
          'that grows outwards commits itself to a maintenance liability it '
          'carries for a century: the kilometres of pipe and road per '
          'household are two to four times higher at the edge than in the '
          'centre, and those assets have to be renewed on a cycle whatever '
          'happens to the city’s population.',
          'What is not settled, and is often asserted, is the claim that '
          'density produces community. The research here is weak in both '
          'directions, the effects found are small, and they are swamped by '
          'the design of individual buildings and by how long people stay. A '
          'well-managed street of houses and a well-managed block of flats '
          'resemble each other more than either resembles a badly managed '
          'version of itself.',
          'The practical conclusion is that the choice is not between two '
          'physical forms but between three distributions of cost. Upwards '
          'puts the cost on the developer and the buyer; outwards puts it on '
          'the public purse, decades later; building nothing puts it on '
          'people who do not yet live there and cannot object. Only the third '
          'option requires no decision, which is a large part of the '
          'explanation for its popularity.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['Three options', 'Cheap to serve, expensive to build',
            'Cheap to build, expensive to serve',
            'The cost of building nothing'], 1,
           'Existing infrastructure against high construction cost.'),
          ('Choose the best heading for paragraph 4.',
           ['Cheap to build, expensive to serve',
            'The cost of building nothing', 'What is settled',
            'What is not settled'], 1,
           'Prices rise and the city exports the people who staff it.'),
          ('Choose the best heading for paragraph 7.',
           ['What is settled', 'What is not settled',
            'Three distributions of cost', 'Transport emissions'], 1,
           'The claim that density produces community.'),
          ('The writer believes building outwards is cheaper overall.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 3 and paragraph 6: construction is cheap and the '
           'servicing liability lasts a century.'),
          ('The writer believes density reliably creates a stronger sense of '
           'community.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 7 calls the research weak in both directions.'),
          ('Kilometres of pipe and road per household are ____________ to '
           'four times higher at the edge.', None, 'two',
           'Paragraph 6, and must be renewed whatever happens to the '
           'population.'),
          ('The writer says only building nothing requires no '
           '____________.', None, 'decision',
           'The final paragraph, which is part of why it is popular.')])],
   listen=[
    dict(heading='A lecture on density and infrastructure', part='Part 4',
         task='A lecture on how cities grow', band='l4',
         qtype='Questions 49-54',
         script=[
          ('Lecturer', 'There are three ways a city can grow and the public '
           'argument covers two of them. Up, out, or not at all, and the '
           'third is the one most cities have chosen while believing they '
           'were having an argument about the first two.'),
          ('Lecturer', 'Up is cheap to serve and expensive to build. The '
           'pipes and the buses are already there, so each extra household '
           'costs the public very little. But a tall building costs two to '
           'three times per square metre what a house costs, needs managing '
           'for ever, and takes between four and seven years from permission '
           'to somebody moving in.'),
          ('Lecturer', 'Out is the mirror image. Cheap to build, quick, and '
           'any regional builder can do it, which is why most housing '
           'everywhere is built this way. The bill arrives later and lands on '
           'the public: new roads, a school, water mains, and a bus route '
           'that loses money for as long as the estate stands.'),
          ('Lecturer', 'Not at all is the interesting one. Its costs are '
           'real and they fall entirely on people who are not in the room. '
           'Prices rise, people have children later, workers commute from '
           'two counties away, and the city slowly exports the staff it '
           'depends on. No document records this, because it is the sum of a '
           'hundred individual refusals and not a decision anybody made.'),
          ('Lecturer', 'Now let me separate what is settled from what is '
           'asserted, because I think this is where the public debate goes '
           'wrong. Settled: the servicing arithmetic. Pipe and road per '
           'household at the edge runs two to four times what it runs in the '
           'centre, and you renew those assets on a cycle whatever your '
           'population does. That is a liability for a century and it is '
           'rarely counted against the planning application.'),
          ('Lecturer', 'Asserted, and I would say believed rather than '
           'demonstrated: that density produces community. The research is '
           'weak in both directions and the effects are swamped by how well '
           'the building is managed and how long people stay. I would be more '
           'careful with that claim than most of my colleagues are, because '
           'it is the one opponents can most easily show to be '
           'overstated.')],
         items=[
          ('The lecturer says the public argument covers',
           ['all three options', 'two of the three options',
            'none of them', 'only building upwards'], 1,
           'While most cities have chosen the third.'),
          ('A tall building costs per square metre',
           ['the same as a house', 'two to three times a house',
            'half as much', 'four times as much'], 1,
           'And takes four to seven years from permission to occupation.'),
          ('Who pays the cost of building outwards?',
           ['The developer', 'The public, later', 'The buyer',
            'Nobody'], 1,
           'Roads, a school, water mains and a loss-making bus route.'),
          ('Why is building nothing not recorded anywhere?',
           ['It is secret', 'It is the sum of individual refusals rather '
            'than a decision', 'It is illegal', 'Nobody has studied it'], 1,
           'So no planning document contains it.'),
          ('What does the lecturer treat as settled?',
           ['That density builds community', 'The servicing arithmetic',
            'Emissions', 'Construction cost'], 1,
           'Pipe and road per household two to four times higher at the '
           'edge.'),
          ('What is he more careful about than his colleagues?',
           ['Cost figures', 'The claim that density produces community',
            'Emissions data', 'Travel times'], 1,
           'Because it is the easiest claim for opponents to show '
           'overstated.')])],
   speak=dict(
    part='Part 3', focus='How a city should grow',
    intro=('Four or five sentences. Try once to name a cost that falls on '
           'somebody who is not present.'),
    qs=['Should cities grow upwards or outwards?',
        'Who pays when a city spreads?',
        'Is it reasonable for residents to object to new building?',
        'What happens to a city that builds very little?'],
    shape=[('answer', 'Upwards, mainly because of who pays for the '
            'pipes.'),
           ('support', 'A household at the edge needs two to four times the '
            'road and pipe.'),
           ('follow-up', 'And the public renews those for a century.'),
           ('support', 'The option nobody discusses is building almost '
            'nothing.'),
           ('follow-up', 'Which costs the people who would have moved there '
            'and cannot object.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Ideas of equal weight, each developable',
         prompt=('Should cities grow upwards or outwards? Brainstorm, then '
                 'build an outline in which the two main ideas are of '
                 'genuinely equal weight. Do not write the essay yet.'),
         plan=('Upwards is the better choice because the costs it imposes '
               'are paid by the people who benefit, while the real '
               'alternative is not outward growth but no growth',
               [('Outward growth transfers a century-long servicing cost to '
                 'the public',
                 ['pipe and road per household two to four times higher',
                  'renewed on a cycle whatever the population does']),
                ('The genuine alternative is building little, whose costs '
                 'fall on absent people',
                 ['prices rise and households form later',
                  'the city exports the workers it depends on'])]),
         notes=[
          'Equal weight is a structural requirement, not a politeness. If '
          'one body paragraph has two supports and the other has four, the '
          'reader scores the essay as having one argument and a '
          'postscript.',
          'The test is mechanical: count the supports, count the sentences, '
          'and check that each paragraph could stand as the essay’s main '
          'point if the other were removed. Here both can.',
          'Notice that the second idea changes what the question is about. '
          'An outline is allowed to do that, provided the essay still answers '
          'the question asked; the reframing goes in the conclusion, not '
          'instead of the answer.'],
         criterion=[('Two body paragraphs of genuinely equal weight',
                     'Coherence and Cohesion'),
                    ('Each paragraph able to stand as the main point',
                     'Task Response')],
         instruct='  Produce the brainstorm and the balanced outline. You '
                  'will write it in cycle 5.',
         lines=12)],
   gram=dict(
    point='Qualification and scope in argument',
    explain=('A claim that is true in one respect and false in another has '
             'to be written carefully or an examiner reads it as '
             'self-contradiction. Name the respect.'),
    examples=['Density is cheap to serve and expensive to build.',
              'Dense areas produce fewer transport emissions and more '
              'construction emissions.',
              'The claim is settled about servicing and asserted about '
              'community.',
              'That is true per household and false per hectare.'],
    task='Rewrite each claim so that the respect in which it holds is '
         'named.',
    items=[('Building up is cheaper.',
            'Building up is cheaper to service and more expensive to '
            'construct.'),
           ('Dense cities are greener.',
            'Dense cities have lower transport emissions per household and '
            'higher emissions from construction.'),
           ('Suburbs are popular.',
            'Suburbs are popular with buyers and expensive for the authority '
            'that must service them.'),
           ('Density builds community.',
            'Density is associated with community in some studies, by amounts '
            'smaller than the effect of building management.'),
           ('Objections are a problem.',
            'Dense development attracts more objections per home and uses '
            'less land per home.')]),
   vocab=[('marginal cost', 'the cost of one more unit'),
          ('sprawl', 'low-density spreading at a city edge'),
          ('commitment', 'a cost you have taken on for the future'),
          ('in perpetuity', 'for ever, with no end date'),
          ('mains', 'the main pipes or cables serving an area'),
          ('completion', 'the point at which building work finishes'),
          ('swamped', 'made insignificant by a larger effect'),
          ('non-decision', 'an outcome produced by deciding nothing')],
   expr=[('cheap to serve and expensive to build',
          'states a two-sided cost in six words'),
         ('people who are not in the room',
          'names an absent interest'),
         ('the sum of a hundred individual refusals',
          'explains an outcome nobody chose'),
         ('I would be more careful with that claim than most of my '
          'colleagues', 'marks a disagreement inside a field')],
   trans=['consequently', 'which in turn', 'as a result', 'what is settled'],
  ),

  dict(
   sub='What the modelling leaves out',
   step=5,
   read=[
    dict(heading='The journeys the model did not count',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 55-61',
         paras=[
          'A transport model is a piece of arithmetic about journeys, and '
          'like any arithmetic it answers the question it was given. The '
          'models used to assess street schemes are generally sound, '
          'well-calibrated and competently run, and they are nevertheless the '
          'commonest source of the gap between what a scheme was predicted to '
          'do and what residents report afterwards. That gap is not caused by '
          'bad arithmetic, and attributing it to bad arithmetic is why it '
          'keeps recurring.',
          'The reason is the model boundary. A model covers an area, counts '
          'the journeys inside it, and treats journeys that cross its edge as '
          'arrivals and departures. Everything inside is described in detail; '
          'everything outside is a number entering at a point. Where a scheme '
          'moves traffic rather than removing it, the movement may well '
          'happen outside the boundary, and the model will report a '
          'reduction which is accurate inside its own area and misleading '
          'as a description of what happened.',
          'The second limitation is the trip types counted. Models are built '
          'from household surveys that record purposeful journeys: commuting, '
          'school, shopping, business. They are poor at short local trips, '
          'especially those made on foot by children and older people, '
          'because such trips are under-reported in surveys and too short to '
          'register in the zones a model uses. A journey of two hundred metres '
          'across one road is invisible to an instrument built to measure '
          'movement between districts.',
          'This matters because the journeys a model is worst at counting are '
          'exactly the journeys a street scheme most affects. A scheme that '
          'adds forty seconds to a car commute and removes a road a child '
          'crossed twice a day will be assessed as a small disbenefit, '
          'because one of those changes is in the model and the other is not. '
          'The assessment is arithmetically correct and answers a question '
          'nobody at the meeting was asking.',
          'Local knowledge is often described as a corrective to this, and it '
          'is, within a limit worth stating. Residents know which crossings '
          'are frightening, where the queue actually begins, and which route '
          'the lorries take at six in the morning. They do not know how much '
          'traffic will reappear within two years, and their predictions '
          'about trade have a poor record, as the schemes evaluated in the '
          'last decade have repeatedly shown.',
          'So the two kinds of evidence fail in different places, which is a '
          'more useful statement than either side usually makes. The model is '
          'reliable about volumes and unreliable about edges and short trips. '
          'Residents are reliable about the street and unreliable about how '
          'people will respond over time. A process that treated them as '
          'complementary rather than competing would produce better schemes '
          'and does not exist in most authorities, largely because no '
          'professional body trains anybody to run one.',
          'There is also a question about legitimacy that is separate from '
          'accuracy. Even a perfect model cannot settle whether forty seconds '
          'of delay for two thousand drivers is worth a safer crossing for '
          'forty children, because that is a trade between different people '
          'and not a calculation. Presenting it as a calculation is the thing '
          'residents detect and resent, and they are right to.',
          'The repair is procedural rather than technical. Publish the model '
          'boundary and the trip types on the first page. Commission a count '
          'of what the model does not cover, and expect it to be small and to '
          'matter. State the trade-off in the words of the people on each '
          'side of it. None of that improves the arithmetic, and all of it '
          'improves the decision, which is a distinction most consultations '
          'are not designed to notice.'],
         items=[
          ('Which paragraph explains the model boundary?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 1,
           'Journeys crossing the edge are treated as arrivals and '
           'departures.'),
          ('Which paragraph states the limits of local knowledge?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
            'Paragraph 7'], 1,
           'Residents’ predictions about trade have a poor record.'),
          ('Which paragraph separates legitimacy from accuracy?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 8'], 2,
           'A trade between different people is not a calculation.'),
          ('The writer believes transport models are badly built.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1 calls them sound, well-calibrated and competently '
           'run.'),
          ('The writer believes residents are good at predicting the effect '
           'on trade.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 5 says their record on this is poor.'),
          ('Models are built from household surveys recording '
           '____________ journeys.', None, 'purposeful',
           'Paragraph 3: commuting, school, shopping and business.'),
          ('What does the writer say should be published on the first '
           'page?', None, 'the model boundary and the trip types',
           'The final paragraph, as part of a procedural repair.')])],
   listen=[
    dict(heading='A planner and a resident disagree', part='Part 4',
         task='A recorded exchange', band='l4', qtype='Questions 62-67',
         script=[
          ('Chair', 'Ms Lindqvist-Oduya ran the modelling for the Pell Street '
           'scheme. Mr Abubakar chairs the residents’ association.'),
          ('Abubakar', 'I will start with a concession, because I have made '
           'this argument badly for two years. Your model is not wrong. I '
           'have had it checked by somebody who does this for a living and he '
           'told me it was competent, which was not what I was paying him '
           'for.'),
          ('Lindqvist-Oduya', 'That is a more generous opening than I '
           'expected.'),
          ('Abubakar', 'My point is about what it covers. Your boundary stops '
           'at the ring road. The traffic we are complaining about appears on '
           'Fennimore Lane, which is outside it, so your model reports a '
           'reduction and we are standing in the increase.'),
          ('Lindqvist-Oduya', 'That is accurate and I would add something '
           'worse that nobody has raised. The boundary is where it is because '
           'that is where the survey data ends, and the survey data ends there '
           'because of a funding decision in 2019.'),
          ('Abubakar', 'So the boundary is an accident.'),
          ('Lindqvist-Oduya', 'The boundary is a budget. And there is a '
           'second thing my model is bad at, which is short walking trips by '
           'children and older people. They are under-reported in the surveys '
           'and too short for the zones. Those are exactly the trips a street '
           'scheme changes most.'),
          ('Abubakar', 'Then why was the scheme assessed as a benefit?'),
          ('Lindqvist-Oduya', 'Because the forty seconds saved by two '
           'thousand drivers is in the model and the crossing used by forty '
           'children is not. I would defend the arithmetic and I would not '
           'defend presenting that as a complete answer.'),
          ('Abubakar', 'What I want is for that paragraph to appear in the '
           'next committee paper, in those words.'),
          ('Lindqvist-Oduya', 'I will write it. What I want from you is the '
           'opposite concession: your association predicted the shops would '
           'close and their takings rose eleven per cent. Residents are '
           'reliable about the street and unreliable about how people respond '
           'over two years.'),
          ('Abubakar', 'That is fair and I have been avoiding saying it.'),
          ('Lindqvist-Oduya', 'Then we have the useful version of this '
           'argument, which is that we fail in different places. I will '
           'publish the boundary and the trip types on the first page from '
           'now on, which takes a paragraph and would have saved us both two '
           'years.')],
         items=[
          ('Abubakar begins by conceding that the model is',
           ['out of date', 'competent', 'too complex', 'secret'], 1,
           'Checked by somebody who does it for a living.'),
          ('His objection concerns',
           ['the arithmetic', 'the model boundary', 'the software',
            'the consultation'], 1,
           'The traffic appears on a road outside it.'),
          ('Why is the boundary where it is?',
           ['A technical limit', 'A funding decision in 2019',
            'A legal requirement', 'A resident request'], 1,
           'Because that is where the survey data ends.'),
          ('The second weakness she names is',
           ['long commutes', 'short walking trips by children and older '
            'people', 'freight', 'bus journeys'], 1,
           'Under-reported in surveys and too short for the zones.'),
          ('What concession does she ask of him?',
           ['To support the scheme', 'That residents’ trade predictions '
            'were wrong', 'To stop objecting', 'To fund a survey'], 1,
           'Takings rose eleven per cent after the association predicted '
           'closures.'),
          ('What does she agree to publish from now on?',
           ['All the data', 'The boundary and the trip types on the first '
            'page', 'A new model', 'The funding decision'], 1,
           'Which takes a paragraph and would have saved two years.')])],
   speak=dict(
    part='Part 3', focus='Evidence and local knowledge',
    intro=('The hardest turn in the unit. Try once to say that two sources '
           'of evidence fail in different places.'),
    qs=['Should planning decisions be made by experts or by residents?',
        'What do local people know that a study cannot?',
        'What are residents usually wrong about?',
        'How should a council resolve a disagreement of this kind?'],
    shape=[('answer', 'Both, because they are wrong about different '
            'things.'),
           ('support', 'Residents know where the queue really starts and '
            'which crossing frightens people.'),
           ('follow-up', 'Models know volumes and miss what happens outside '
            'their boundary.'),
           ('support', 'Residents are poor at predicting how trade '
            'responds.'),
           ('follow-up', 'So I would use each for what it is reliable about, '
            'which is not how either side argues.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Experts or residents?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some people say planning decisions should be made '
                 'by experts rather than by residents. Discuss both views '
                 'and give your own opinion. Write at least 250 words.'),
         model=[
          'The usual version of this argument assumes that one side has '
          'better information than the other. The more accurate statement is '
          'that the two sides have information about different things and are '
          'unreliable in different places, which points to a conclusion '
          'neither of them argues for.',
          'The case for experts rests on the kinds of knowledge residents '
          'cannot have. A transport model measures volumes across a whole '
          'network, which no amount of local observation can do, and it '
          'forecasts how people respond over several years. Residents have a '
          'poor record on exactly that: in scheme after scheme shopkeepers '
          'have predicted closures and takings have risen, consistently '
          'enough that the prediction now carries very little weight.',
          'The case for residents rests on what a model cannot see. Models '
          'are built from surveys of purposeful journeys and are weakest at '
          'short local trips, particularly those made on foot by children and '
          'older people. They also stop at a boundary, and a scheme that '
          'pushes traffic beyond that boundary registers in the arithmetic as '
          'a reduction while residents stand in the increase.',
          'There is a further point that is not about accuracy at all. '
          'Whether forty seconds of delay for two thousand drivers is worth a '
          'safer crossing for forty children is a trade between different '
          'people, and no model can settle it. Presenting such a trade as a '
          'calculation is what residents detect and resent, and they are '
          'right to.',
          'My own position is therefore neither of the two offered. Experts '
          'should decide what will happen and residents should decide what is '
          'worth having, with the model boundary and the trip types published '
          'on the first page so that everybody can see which question is '
          'being answered. That is a procedural change rather than a '
          'technical one, and it is cheap, which is a poor explanation for '
          'its rarity.'],
         notes=[
          'The introduction rejects the premise shared by both positions '
          '— that one side simply knows more — and replaces it. This is '
          'structure 3: two positions, then a third.',
          'Each body paragraph concedes something expensive. The '
          'pro-resident paragraph admits residents predict badly; the '
          'pro-expert paragraph admits the model stops at a boundary. '
          'Concessions that cost you something are the ones that persuade.',
          'The fourth paragraph introduces legitimacy, which is not an '
          'accuracy argument at all, and the conclusion divides the decision '
          'by type of question rather than by person. Splitting a question '
          'in two is usually available and almost always scores.'],
         criterion=[('Rejecting the premise both sides share',
                     'Task Response'),
                    ('Concessions that cost something', 'Task Response'),
                    ('Dividing the decision by type of question',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Metadiscourse and the shape of an argument',
    explain=('Metadiscourse is language about your own argument: saying what '
             'you are about to do, or what a point is an instance of. Used '
             'sparingly it raises Coherence and Cohesion; used heavily it '
             'reads as padding.'),
    examples=['The model counted the trips it was built to count.',
              'There is a further point that is not about accuracy at all.',
              'My position is therefore neither of the two offered.',
              'That is a procedural change rather than a technical one.'],
    task='Rewrite each sentence so that it names what kind of point it is.',
    items=[('Residents often object.',
            'The objection I want to examine is not about accuracy but about '
            'who decides.'),
           ('The model was wrong.',
            'The difficulty is not an error in the model but the edge of the '
            'area it covers.'),
           ('I disagree with both.',
            'My own position is neither of the two usually offered.'),
           ('Publishing the boundary would help.',
            'The repair I would propose is procedural rather than '
            'technical.'),
           ('This is a trade-off.',
            'This is a trade between different people, which is why no '
            'calculation settles it.')]),
   vocab=[('model boundary', 'the edge of the area a model covers'),
          ('local knowledge', 'what people know from living somewhere'),
          ('legitimacy', 'the right of a decision to be accepted'),
          ('under-reported', 'recorded less often than it happens'),
          ('disbenefit', 'a cost counted in an appraisal'),
          ('complementary', 'useful in combination rather than instead'),
          ('appraisal', 'a formal assessment of a scheme'),
          ('process question', 'a question about how a decision is made')],
   expr=[('the model counted the trips it was built to count',
          'limits a result without disputing it'),
         ('the boundary is a budget',
          'reveals the real cause of a technical choice'),
         ('we fail in different places',
          'reframes a dispute as a division of labour'),
         ('would have saved us both two years',
          'measures the cost of a missing paragraph')],
   trans=['admittedly', 'and yet', 'on balance', 'there is a further'],
  ),
 ],
 technique=dict(
  title='Maps structured by zone instead of by time',
  body=('Two or three maps of the same ground invite you to organise by date: '
        'everything about the first map, then everything about the second. '
        'That structure makes you describe the whole site twice, runs you out '
        'of words before the third map, and separates each piece of ground '
        'from its own change. Organising by zone fixes all three problems at '
        'once. Divide the ground into two or three areas, take each one '
        'through both maps in a single paragraph, and report what stayed the '
        'same as deliberately as what changed — the unchanged road or '
        'retained allotment is part of the main feature, and leaving it out '
        'is the omission examiners see most often on this task.'),
  panel=[('Divide the ground first',
          'North, centre, south; or left, middle, right. Two or three zones, '
          'before you write anything.'),
         ('One paragraph per zone',
          'Each zone taken through every map in one place, so its change is '
          'described once.'),
         ('Report what did not change',
          'A retained building, an unaltered road. This is selection, not '
          'padding.'),
         ('Mind the tense',
          'Present for what exists, "is to be" for what is proposed. Mixing '
          'them is the commonest grammar failure here.')],
  task='Take the two maps in cycle 3. Write your zone division, then the '
       'Overall statement, then the topic sentence of each zone paragraph.',
  qs=['How many zones will you use, and on what basis?',
      'What is unchanged between the two maps?',
      'Write the Overall statement in one sentence.',
      'Which tense belongs to each map?',
      'Which feature appears on one map and has no equivalent on the '
      'other?']),
 outlining=dict(
  title='Passage to outline on a 720-word text',
  body=('This is the reverse exercise and it is the fastest way to learn what '
        'a good outline looks like. Take the academic passage from cycle 4 '
        'and reduce it to the outline its author must have worked from: a '
        'thesis in one sentence, two or three main points, two supports '
        'under each. You will find that a well-built passage reduces cleanly '
        'and that the reduction is shorter than you expect — eight hundred '
        'words of argument usually comes from about sixty words of plan. Then '
        'look at the shape you have recovered, because that shape is what '
        'your own planning minute should be producing.'),
  frame=('Upwards is the better choice because the costs it imposes are paid '
         'by the people who benefit, while the real alternative is not '
         'outward growth but no growth',
         [('Outward growth transfers a century-long servicing cost to the '
           'public',
           ['pipe and road per household two to four times higher',
            'renewed on a cycle whatever the population does']),
          ('The genuine alternative is building little, whose costs fall on '
           'absent people',
           ['prices rise and households form later',
            'the city exports the workers it depends on'])]),
  task='Reduce the cycle 4 passage to a thesis, three main points and two '
       'supports under each, then compare its shape with the frame above.',
  qs=['What is the thesis in one sentence?',
      'How many main points does the passage actually have?',
      'Which paragraph is a support and which is a point?',
      'How many words is your recovered outline?'],
  answers=['that the choice is between three distributions of cost, not two '
           'physical forms',
           'three: upwards, outwards, and building nothing',
           'the two paragraphs on settled and unsettled evidence support the '
           'third point',
           'about sixty, from roughly eight hundred words of passage']),
 candos=['I can find the sentence in a notice that says which comments count',
         'I can organise two maps by zone and report what did not change',
         'I can name a cost that falls on people who are not in the room',
         'I can reduce a long passage to the outline behind it',
         'I can say that two sources of evidence fail in different places'],
 tip=('With two or three maps, divide the ground into zones before you write '
      'a word, and decide now that you will report one thing that did not '
      'change. Both decisions take ten seconds and both are marked.'),
)
