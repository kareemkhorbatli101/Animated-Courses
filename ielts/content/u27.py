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

_MAPS = dict(kind='map', teaches='plan', title='The Brackwell site now and under the '
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

 field='planning',
 unitmap={'kind': 'unitmap', 'teaches': 'navigation', 'n': 27, 'theme': 'Urban Planning', 'rows': [('Having your say', 'Short answer: how many words, and what counts as one', 'Matching features · multiple choice · short answer · Part 1'), ('What people want from a street', 'Yes/No/Not Given: the concessive sentence', 'Yes/No/Not Given · matching features · Part 2'), ('A plan on paper', 'Task 1: a plan, and the words of place', 'Matching information · plan labelling · Task 1 Academic'), ('Why density divides people', 'Matching headings: ranking paragraphs by how general they are', 'Matching headings · Yes/No/Not Given · Part 4'), ('What the modelling leaves out', 'Task 2: the process objection', 'Matching information · short answer · Task 2')], 'note': 'Unit 26 was about who gains from visitors; this is about who decides anything at all. Cycles 1, 3 and 5 open with a reading preview and 2 and 4 with a listening one.'},
 sceneintro='Eight things from a planning process, and the words for them. Six are used in cycle 1 and four come back in cycle 3, where the subject is the drawing rather than the argument.',
 scene={'kind': 'scene', 'teaches': 'activate', 'title': 'Unit 27 · a site, and the paperwork about it', 'instr': 'Write the number of each thing beside its word. Two words in the bank are not in the picture.', 'cells': [('brief', 'local plan'), ('note', 'representation'), ('people', 'inspector'), ('city', 'frontage'), ('chart', 'masterplan'), ('clock', 'phasing'), ('leaf', 'public realm'), ('envelope', 'notice of hearing')], 'bank': ['local plan', 'representation', 'inspector', 'frontage', 'masterplan', 'phasing', 'public realm', 'notice of hearing', 'soundness', 'junction'], 'answers': ['local plan', 'representation', 'inspector', 'frontage', 'masterplan', 'phasing', 'public realm', 'notice of hearing'], 'note': 'Answers: 1 local plan · 2 representation · 3 inspector · 4 frontage · 5 masterplan · 6 phasing · 7 public realm · 8 notice of hearing. Not in the picture: soundness, junction.'},
 puzzle={'kind': 'puzzle', 'teaches': 'curiosity', 'title': 'Who actually turns up', 'question': 'Every one of these groups was invited to the same consultation on the same terms. Which group is almost absent, and what would you need to know before guessing why?', 'bars': [('Owners over 60', 41), ('Owners under 40', 14), ('Renters', 6), ('Businesses', 23), ('Under-25s', 3)], 'mark': 4, 'ylab': '% of responses received, by group', 'note': 'Cycle 5 is about what a consultation measures when this is who answers it. Write your guess in the margin before you read.'},
 cycles=[
  dict(
   sub='Having your say',
   step=1,
   notes=dict(
    serves='Matching features and short answer, Reading Parts 1-2; note completion in Listening Part 1',
    because='Short answer looks easier than it is: the instruction says NO MORE THAN THREE WORDS AND/OR A NUMBER, and candidates write four, write a full sentence, or hyphenate to cheat the count, and all three score zero however right the content',
    skill='Writing an answer that fits the word limit and still answers the question',
    evidence='Phase 11 reclassified 542 items as sentence completion; what remains labelled short answer is the type where the limit itself is the difficulty',
    watch='Learners will answer question 8 with a clause. The limit is three words and the answer is two. Expect it',
    time='75 minutes, or 55 without the free grammar production'),
   lead=dict(
    title='The part where you are consulted',
    body='Every large change to a place goes through a stage at which the public may object, and almost nobody does. The chart at the front of this unit shows who answered one consultation: owners over sixty, businesses, and essentially nobody else. That is not apathy in any simple sense, and this cycle is the documents that produce it - a local plan, a notice, a form with a word limit on it.',
    task='Answer these from where you live. Three or four sentences each.',
    qs=[
        'Have you ever been asked your opinion about a change near you? Did you answer?',
        'What would have made you answer?',
        'Who do you think should be asked about a new building - neighbours, the town, everybody?',
        'If only older owners reply, whose street gets built?',
       ]),
   vocabwork=dict(
    title='The language of being consulted',
    body='Sixteen words from a planning process. The register is the one you met in unit 21, unit 23 and unit 26 - an institution deciding something and writing to the people it affects - and by now most of it should be familiar. What is new is that here you are invited to answer, and the words for your answer are precise.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'a plan, and your say in it', 'sub': 'cycle 1 · the fourth institution in this book to write to you', 'branches': [('the document', ['local plan', 'masterplan', 'policy', 'allocation']), ('your answer', ['representation', 'objection', 'support', 'grounds']), ('the test', ['soundness', 'deliverable', 'evidence base', 'examination']), ('who decides', ['inspector', 'committee', 'modify', 'adopt'])], 'note': 'Soundness is a term of art: a plan is sound if it is positively prepared, justified, effective and consistent with national policy. Objecting on any other ground is allowed and is almost always ignored, which is the single most useful fact in this cycle.'},
    figure2={'kind': 'family', 'teaches': 'word-formation', 'sub': 'cycle 1 · and two of these have no verb', 'rows': [(('rep-re-sent', 3), ('rep-re-sen-ta-tion', 4), '', '', ''), (('ex-am-ine', 2), ('ex-am-i-na-tion', 4), ('ex-am-in-er', 2), '', ''), ('', ('sound-ness', 1), '', ('sound', 1), ''), (('de-liv-er', 2), ('de-liv-er-y', 2), '', ('de-liv-er-a-ble', 2), ''), (('mod-i-fy', 1), ('mod-i-fi-ca-tion', 4), '', '', '')], 'note': 'Representation here does not mean a picture or a spokesperson. It is the technical word for a written comment on a plan, and a gap will want it in that sense.'},
    task='Complete each sentence with a word from this cycle, in the right form.',
    items=[
     ('A written comment on a plan is a ____________.', None,
      'representation'),
     ('A plan is tested for its ____________.', None,
      'soundness'),
     ('The person who holds the examination is the ____________.', None,
      'inspector'),
     ('A site that can realistically be built is ____________.', None,
      'deliverable'),
     ('The reasons an objection is based on are its ____________.', None,
      'grounds'),
     ('The noun from modify is ____________.', None,
      'modification'),
     ('To approve a plan finally is to ____________ it.', None,
      'adopt'),
     ('The research supporting a plan is its evidence ____________.', None,
      'base'),
    ]),
   builder=dict(
    skill='Short answer: the limit is the question',
    qkind='skill',
    explain='Short answer gives you a direct question and a word limit, and the limit is not a formatting detail - it is information about the answer. NO MORE THAN THREE WORDS means the examiner knows of an answer that fits in three, so if yours needs five you have found the wrong thing. Four rules follow and they recover marks candidates are currently throwing away. Count the words you wrote, every time, because an answer over the limit scores zero however right it is. A hyphenated word counts as one and a number counts as one, which the instruction usually says explicitly - AND/OR A NUMBER means you may write three words and a number. Do not write a sentence: the question asks what, not whether, and articles are usually unnecessary and sometimes fatal to the count. And take the words from the passage wherever you can, because an answer in your own words may be right and unrecognisable, and the marking is done against a list.',
    worked=[
      'QUESTION: what must a plan be shown to be, besides justified? (NO MORE THAN THREE WORDS)',
      'The passage: “A plan is sound if it is positively prepared, justified, effective and consistent with national policy.”',
      'Four candidates. Positively prepared is two words. Effective is one. Consistent with national policy is four and does not fit, which tells you it is not the answer wanted.',
      'The limit has eliminated an option for you before you thought about meaning at all. That is what it is for.',
     ],
    figure={'kind': 'anatomy', 'teaches': 'question-anatomy', 'qtype': 'Short answer', 'sub': 'cycle 1, question 8', 'stem': 'What does an inspector test a plan for? (NO MORE THAN THREE WORDS)', 'options': ['its soundness', 'whether the plan is sound and deliverable', 'soundness and deliverability', 'the inspector tests soundness'], 'answer': 0, 'why': 'Two words, taken from the passage, answering the question asked. Its soundness is within the limit and is the word the document uses.', 'trap': (1, 'Seven words, and it is the fullest and most accurate statement of what the passage says. It scores zero. Accuracy beyond the limit is not accuracy.'), 'note': 'Options B and D are both true and both over the limit. This question type punishes knowing more than you were asked.'},
    task='For each answer write FITS or OVER, and the word count.',
    items=[
     ('its soundness (limit: three)', None,
      'fits two'),
     ('whether the plan is sound (limit: three)', None,
      'over four'),
     ('positively prepared (limit: three)', None,
      'fits two'),
     ('consistent with national policy (limit: three)', None,
      'over four'),
     ('the evidence base (limit: three)', None,
      'fits three'),
     ('a well-prepared evidence base (limit: three)', None,
      'fits four hyphenated as three'),
    ],
    note='The last one is the rule worth knowing: well-prepared is hyphenated and counts as one word, so the answer is three. Hyphenation is not a trick to be used on anything - you can only hyphenate what the passage hyphenated.'),
   figures=[
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 1 · six moves the questions make', 'pairs': [('a written comment', 'a representation', 'nominalisation'), ('the plan was changed', 'modifications were made', 'voice'), ('can actually be built', 'deliverable', 'synonym'), ('not consistent with policy', 'in conflict with policy', 'negation'), ('houses, shops and offices', 'development', 'hypernym'), ('the research behind it', 'the evidence base', 'reformulation')], 'note': 'The third is the pair the short-answer questions are built on: the question uses six ordinary words and the answer is one technical one.'},
   ],
   advice='Count the words in every short answer before you move on. An answer over the limit scores zero and no part mark exists, which makes it the cheapest mark in the paper to throw away and the easiest to keep. Use the passage’s own words, leave out articles where you can, and treat the limit as a clue to which answer the examiner has in mind.',
   debrief=dict(
    read=[
      'Question 8 can be answered correctly in seven words and the limit is three. The three-word version is in the passage, four lines above the seven-word one.',
      'Question 11 asks what an inspector may do and an option says what an inspector must do. Modals again, from unit 26.',
      'In the matching set two sources object on grounds that are not soundness, and the passage says what happens to those.',
     ],
    listen=[
      'The officer spells a name and gives a reference. One gap wants each and they come in the opposite order to the questions.',
      'Question 13 asks for a date and three are given, two of them about other stages of the process.',
     ]),
   outside='Every form with a word limit on it - a job application, a complaint, a grant - is telling you how long the answer ought to be. Writing more is not generosity; it is usually read as an inability to say what you mean.',
   recycled=[
      'representation',
      'evidence',
      'criteria',
      'grounds',
      'licence',
      'objection',
     ],
   read=[
    dict(preview=True,
         heading='Three words from a planning notice',
         kind='Glossary box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='Two hundred words before four hundred. The third of these three decides whether an objection is read or filed.',
         paras=[
          'A local plan is the document that says what may be built where, for the next fifteen years or so. It is written by a council, tested by an independent inspector, and once adopted it decides most individual applications without anybody arguing again.',
          'A representation is a written comment on that plan. It is not a petition and not a vote; a thousand identical representations count as one argument, and one well-evidenced representation can change a policy. This is the part of the system that people most reliably misunderstand.',
          'Soundness is the test the inspector applies, and it has four parts: the plan must be positively prepared, justified, effective and consistent with national policy. An objection that the development would be ugly, or unpopular, or inconvenient is a real objection and is about none of these.',
          'So the three words together explain why consultation feels like theatre to the people taking part in it. They are answering a question about whether they like it; the inspector is answering a question about whether the plan is sound.',
         ],
         items=[
          ('The document saying what may be built where is the ____________ plan.',
           None, 'local',
           'Paragraph 1: it decides most individual applications once adopted.'),
          ('A written comment on the plan is a ____________.',
           None, 'representation',
           'Paragraph 2, which says a thousand identical ones count as one argument.'),
          ('The four-part test the inspector applies is ____________.',
           None, 'soundness',
           'Paragraph 3: positively prepared, justified, effective, consistent.'),
         ]),
    dict(heading='The local plan — how to comment',
         kind='Consultation notice',
         task='Multiple choice, matching features and sentence completion',
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
           ['considered late', 'recorded but not considered', 'returned', 'published only'],
           1,
           'Paragraph 1, which closes at five o\u2019clock on 28 February.',
           {0: 'Paragraph 1 says they are recorded but not considered.', 2: 'Nothing is returned; late comments are kept on record.', 3: 'All comments are published, so this is not the '
               'distinction.'}),
          ('Which of these is a matter of soundness?',
           ['The effect on house prices', 'Whether a policy is justified by evidence', 'Whether residents like the plan', 'Whether the plan is ambitious'],
           1,
           'Paragraph 3, alongside deliverability and consistency with '
           'national policy.',
           {0: 'Paragraph 3 says house prices are expressly set aside.', 2: 'Whether residents like the plan is not a soundness '
               'matter.', 3: 'Paragraph 2 says an ambition objection carries no '
               'weight.'}),
          ('Anonymous comments are refused because',
           ['they are rude', 'an inspector must confirm a representation was made', 'they are too numerous', 'the law forbids them'],
           1,
           'Paragraph 4, although addresses are removed from what is '
           'published.',
           {0: 'Tone is not the reason given in paragraph 4.', 2: 'Volume of comments is not why anonymity is refused.', 3: 'The reason given is the inspector, not a legal '
               'prohibition.'}),
          ('A useful comment refers to a numbered ____________.', None,
           'policy',
           'Paragraph 2, which contrasts two versions of the same '
           'objection.'),
          ('The council may not adopt the plan until the ____________ has '
           'reported.', None, 'inspector',
           'Paragraph 5, and the inspector may require changes.')]),
    dict(heading='What happens to your comment',
         kind='Procedure notice', task='Sentence completion',
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
         task='A call to a planning policy team · note completion', band='l1',
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
         task='A talk at a neighbourhood forum · sentence completion, short answer and matching', band='l2',
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
          (
           'The speaker says people disagree about what a street is '
           '____________.', None, 'for',
           'Which is why two people can argue while agreeing on every '
           'fact.'),
          ('How many definitions of a street does the speaker name?',
           None, 'four', 'Route, destination, frontage and home.'),
          (
           'When somebody objects, the speaker advises asking which '
           '____________ they speak for.', None,
           'definition',
           'Because half the objections turn out to be compatible.'),
          ('Which scheme survives a consultation?',
           ['The cheapest', 'The best', 'The one whose designers can name their choice', 'The one with fewest objections'],
           2, 'Residents forgive a choice they can see.',
           {0: 'Cost is not what he says decides survival.', 1: 'He says the surviving scheme is almost never the best.', 3: 'Objection counts are not his criterion.'})])],
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
    ref='L21',
    context=[
      'From the representation in this cycle:',
      'I object to Policy H3 on two grounds, both going to soundness. First, the housing requirement relies on a growth forecast that the council’s own evidence base, at paragraph 4.12, describes as an upper estimate. Second, the site at Mill Field is not deliverable within the plan period: there is no agreed access, as the highway authority confirmed in its response of 3 May.',
     ],
    notice=[
     ('Both grounds point at the same test. Which word names it?', None,
      'soundness'),
     ('Each ground attaches a fact somebody else wrote. Copy out both references.', None,
      'the evidence base at paragraph 4.12; the highway authority’s response of 3 May'),
    ],
    noticetask='Answer both from the representation above, which you read earlier in this cycle.',
    contrast='You met the shape of an objection in unit 26 cycle 1. Here it is sharpened by one thing: both grounds are tied to the test the decision-maker is actually applying. An objection that says the building is ugly is a real objection and is not about soundness, so it is read and filed. An objection that says the forecast is an upper estimate, and cites the council’s own paragraph number, has to be answered in writing. Find the test, aim at it, and quote the other side’s own document wherever you can.',
    task2='Rewrite each objection so that it aims at the stated test and cites something checkable.',
    items2=[
     ('The new flats will be ugly.', None,
      'The design is not consistent with the policy on local character at paragraph 6.4.'),
     ('There is too much traffic already.', None,
      'The junction is already at capacity, as the council’s own transport assessment records at table 9.'),
     ('Correct: I object on the ground of that it is unsound.', None,
      'I object on the ground that the plan is unsound.'),
     ('Nobody can build there.', None,
      'The site is not deliverable: there is no agreed access, confirmed by the highway authority on 3 May.'),
    ],
    task3='Now write the representation. You are objecting to a plan near you on two grounds, both aimed at the test the decision actually applies. Write the opening and both grounds, about eighty words, citing something for each.',
    items3=8,
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
   notes=dict(
    serves='Yes/No/Not Given and matching features, Reading Part 2; multiple choice in Listening Part 2',
    because='A concessive sentence - although X, Y - contains two claims, and a statement built from the subordinate half looks like a match and is the opposite of the writer’s view',
    skill='Reading a concessive sentence for which half the writer believes',
    evidence='Unit 21 cycle 5 taught writing concessions; this teaches reading them, and the audit found the reading side taught nowhere in Volume 3',
    watch='Learners will mark statement 21 YES because the words are in the passage. They are in the although clause. Expect it',
    time='80 minutes, or 60 without the free grammar production'),
   lead=dict(
    title='Some shops against other shops',
    body='The argument about closing a street to traffic is always reported as shops against pedestrians, and on the street itself it is almost never that. It is the carpet shop against the coffee shop, and they are both right about their own takings. That is what makes it bitter and that is what the consultation form, with its two options, is incapable of recording. In cycle 1 you met the form; here you meet the people filling it in.',
    task='Answer these before you read, and mark which of the four sources you expect to agree with.',
    qs=[
        'Is there a street near you that has been pedestrianised? What happened to it?',
        'Who gains when cars are removed, and who loses?',
        'If two shopkeepers on the same street want opposite things, how should it be decided?',
        'What would you add to a form that offered only two options?',
       ]),
   vocabwork=dict(
    title='The vocabulary of a street',
    body='Thirteen words, and the valuable half is the technical half: footfall, severance, permeability, frontage. These are the words a planner uses and a resident does not, and knowing them is what lets an objection be read rather than filed - which was the lesson of cycle 1.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'a street, and what it does', 'sub': 'cycle 2 · the words a planner uses for what you can see', 'branches': [('movement', ['footfall', 'through traffic', 'permeability', 'severance']), ('the edges', ['frontage', 'active frontage', 'setback', 'blue badge']), ('the trade', ['takings', 'dwell time', 'anchor', 'vacancy rate']), ('the change', ['pedestrianise', 'traffic calming', 'reallocate', 'pilot'])], 'note': 'Severance is the word for a road cutting a place in two so that the halves stop being one place. It is invisible to anybody who has not been given the word, and it is the strongest argument in this unit.'},
    figure2={'kind': 'cline', 'teaches': 'scale', 'title': 'How permanent is the change?', 'sub': 'cycle 2 · the language of a scheme being tried', 'left': 'reversible tomorrow', 'right': 'irreversible', 'items': [('a trial closure', 0.05), ('an experimental order', 0.2), ('a pilot scheme', 0.34), ('a temporary order', 0.5), ('a permanent order', 0.76), ('physical works', 0.95)], 'note': 'The order of these matters in the passage: a scheme that begins as a trial and becomes permanent without a further decision is one of the two things the objectors complain about.'},
    task='Complete each with a word or phrase from this cycle.',
    items=[
     ('The number of people passing on foot is the ____________.', None,
      'footfall'),
     ('A road cutting a neighbourhood in two causes ____________.', None,
      'severance'),
     ('How easy a place is to walk through is its ____________.', None,
      'permeability'),
     ('The part of a building facing the street is its ____________.', None,
      'frontage'),
     ('A short-term scheme meant to be tested is a ____________.', None,
      'pilot'),
     ('Traffic passing through without stopping is ____________ traffic.', None,
      'through'),
     ('The share of shops standing empty is the vacancy ____________.', None,
      'rate'),
     ('How long people stay once they arrive is the ____________ time.', None,
      'dwell'),
    ]),
   builder=dict(
    skill='Yes/No/Not Given: the concessive sentence',
    qkind='skill',
    explain='A concessive sentence contains two claims and the writer believes one of them. Although the scheme raised footfall, takings fell on three of the four streets - both halves are true and the writer’s point is the second. The examiner builds a statement from the first half, and a reader who searches for words finds it, finds it word for word, and marks YES. The habit that fixes it is to read the whole sentence and find the conjunction. Although, while, even though, despite and notwithstanding all mark the clause the writer is conceding, and the main clause is what the writer is claiming. A statement built from a concession is not false - the writer agreed with it - but it is not the writer’s point, and the right answer depends on what the statement asserts. If the statement simply repeats the conceded fact, it is YES. If it presents the conceded fact as the writer’s conclusion, it is NO. That distinction is the whole of this lesson and it is worth two marks in most sets.',
    worked=[
      'The passage: “Although the scheme raised footfall by a fifth, takings fell on three of the four streets measured.”',
      'STATEMENT A: the scheme increased the number of people on foot. That is the conceded half, repeated as a fact. The writer agrees. YES.',
      'STATEMENT B: the scheme was a success for the shops. That presents the conceded half as the conclusion. The writer’s main clause says the opposite. NO.',
      'Both statements are built from the same six words. The difference is whether the statement is repeating the concession or drawing a conclusion from it.',
     ],
    figure={'kind': 'decide', 'teaches': 'decision', 'title': 'A concessive sentence, and what to do with it', 'sub': 'cycle 2 · find the conjunction first', 'nodes': [('Does the sentence contain although, while, even though, despite or notwithstanding?', 'the clause it introduces is CONCEDED; the other is CLAIMED', 'use the three tests from unit 21 as usual'), ('Does the statement merely repeat the conceded fact?', 'YES - the writer granted it', 'go on'), ('Does the statement present the conceded fact as the writer’s conclusion?', 'NO - the main clause says otherwise', 'check scope, then the three tests')], 'note': 'By this unit you have four checks to run - voice, scope, describe-or-recommend, and now concession - and they take about twenty seconds between them. All four catch statements that would pass the three tests.'},
    task='For each sentence say which half is CONCEDED and which is CLAIMED.',
    items=[
     ('Although footfall rose, takings fell.', None,
      'conceded footfall, claimed takings'),
     ('Takings fell, although footfall rose.', None,
      'conceded footfall, claimed takings'),
     ('Despite the trial’s popularity, the order lapsed.', None,
      'conceded popularity, claimed lapse'),
     ('While the scheme is cheap, it solves nothing.', None,
      'conceded cheap, claimed solves nothing'),
     ('The scheme is cheap, but it solves nothing.', None,
      'conceded cheap, claimed solves nothing'),
     ('Even though three shops closed, the street is busier.', None,
      'conceded closures, claimed busier'),
    ],
    note='Items one and two are the same sentence with the clauses reversed, and the writer believes the same half in both. Order does not decide it; the conjunction does. That is worth knowing, because a candidate who reads only the first half of a sentence gets item one right and item two wrong, and never finds out why.'),
   figures=[
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 2 · the Yes/No/Not Given set turns on these', 'pairs': [('more people on foot', 'footfall rose', 'nominalisation'), ('the road splits the area', 'severance', 'reformulation'), ('shops took less money', 'takings fell', 'synonym'), ('it did not help the shops', 'the commercial effect was negative', 'negation'), ('cafes, carpet shops and chemists', 'retail of different kinds', 'hypernym'), ('the council ended the trial', 'the order was allowed to lapse', 'voice')], 'note': 'The fourth is the one that catches people: a negative statement about a positive sentence, which needs the whole concessive sentence read before it can be answered.'},
   ],
   advice='When you find a statement’s words in the passage, read the whole sentence they are in before you answer. If they are inside an although or a despite clause, the writer has conceded them and is about to say something else, and your answer depends on whether the statement repeats the concession or builds on it. Two marks a set turn on this and they are invisible to anybody matching words.',
   debrief=dict(
    read=[
      'Statement 21 is word for word inside an although clause. The main clause says the opposite and is six words away.',
      'Statement 24 repeats a conceded fact without drawing a conclusion from it, so it is YES even though the writer’s overall view is the other way.',
      'In the matching set, one source concedes everything the others claim and still disagrees with all of them.',
     ],
    listen=[
      'Mina concedes Yusuf’s point and then sharpens her own. The answer is after "which makes it worse".',
      'Yusuf says "that is fair" and then says the thing the question asks about.',
     ]),
   outside='Reading a concession correctly is how you avoid quoting somebody as saying the opposite of what they said, which is the commonest way a careful writer is misrepresented and the easiest to do by accident.',
   recycled=[
      'footfall',
      'evidence',
      'representation',
      'severance',
      'pilot',
      'takings',
     ],
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
           'She measures the street in minutes.',
           {1: 'Taavi was wrong about the effect on trade.', 2: 'Marguerite wants the street quiet after ten at night.', 3: 'Ignatius argues for choosing between competing aims.'}),
          ('Which person was wrong about the effect on trade?',
           ['Rosalind', 'Taavi', 'Marguerite', 'Ignatius'], 1,
           'He predicted ruin and his takings rose eleven per cent.',
           {0: 'Rosalind values the street mainly as a route.', 2: 'Marguerite says nobody has ever asked her about the '
               'evening.', 3: 'Ignatius argues for choosing between competing aims.'}),
          ('Which person\u2019s concern is about the evening?',
           ['Rosalind', 'Taavi', 'Marguerite', 'Ignatius'], 2,
           'She lives above the chemist and wants quiet after ten.',
           {0: 'Rosalind values the street mainly as a route.', 1: 'Taavi was wrong about the effect on trade.', 3: 'Ignatius argues for choosing between competing aims.'}),
          ('Which person argues for choosing between competing aims?',
           ['Rosalind', 'Taavi', 'Marguerite', 'Ignatius'], 3,
           'He says schemes promising everybody everything get '
           'withdrawn.',
           {0: 'Rosalind values the street mainly as a route.', 1: 'Taavi was wrong about the effect on trade.', 2: 'Marguerite argues for one aim, quiet, rather than for '
               'choosing.'}),
          ('Taavi now supports the widened pavement.',
           ['Yes', 'No', 'Not Given'], 0,
           'He reports higher takings and says he has said so '
           'publicly.',
           {1: 'No would need opposition; he reports higher takings '
               'and says so publicly.', 2: 'Not Given is wrong because his present position is '
               'stated.'}),
          ('Marguerite has objected at a consultation.',
           ['Yes', 'No', 'Not Given'], 2,
           'She says nobody has asked her about eleven at night; '
           'whether she objected is not said.',
           {0: 'Yes would need an objection; she says only that nobody '
               'asked her.', 1: 'No would need her to say she stayed silent by choice, '
               'which she does not.'})])],
   listen=[
    dict(preview=True,
         heading='Two shopkeepers on one street',
         part='Preview', task='Sentence completion',
         band='lpre', qtype='Questions P1-P3',
         why='Ninety seconds before five minutes. The Part 2 you are about to hear has the same disagreement with a traffic count attached.',
         script=[
          ('Mina',
           'If you close it to cars my takings halve. I am not speculating, it happened during the roadworks.'),
          ('Yusuf',
           'And mine went up during the roadworks. Same street, same fortnight.'),
          ('Mina',
           'Because you sell coffee and I sell carpets. Nobody carries a carpet home on foot.'),
          ('Yusuf',
           'That is fair, and it is the thing the campaign keeps not saying. It is not shops against cars. It is some shops against other shops.'),
          ('Mina',
           'Which makes it worse, not better. At least cars cannot be offended.'),
          ('Yusuf',
           'So what would you accept?'),
          ('Mina',
           'Loading in the morning, closed in the afternoon. I have said so in every meeting and nobody writes it down because it is not one of the two options.'),
          ('Yusuf',
           'There are only ever two options.'),
          ('Mina',
           'There are only ever two options on the form. That is a different thing, and it is the thing I actually object to.'),
          ('Yusuf',
           'Put it in writing, then. Not at the meeting - in writing, before the consultation closes, with the hours on it.'),
          ('Mina',
           'I did. Twice. It came back as a point noted, which I am told is what they write when something does not fit either column.'),
         ],
         items=[
          ('Mina says her takings halved during the ____________.',
           None, 'roadworks',
           'Her first turn, where she says she is not speculating.'),
          ('Yusuf says it is not shops against cars but some shops against other ____________.',
           None, 'shops',
           'His second turn, which Mina then sharpens.'),
          ('Mina would accept loading in the morning and closure in the ____________.',
           None, 'afternoon',
           'Her fourth turn, and nobody writes it down.'),
         ]),
    dict(heading='Two councillors disagree about parking', part='Part 3',
         task='A discussion before a committee vote · multiple choice and sentence completion', band='l3',
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
          ('Bogdan\u2019s first objection is based on',
           ['a survey', 'what shopkeepers tell him and the Pell Street case', 'council figures', 'national research'],
           1, 'He accepts the first is not a survey.',
           {0: 'He accepts that what shopkeepers tell him is not a '
               'survey.', 2: 'Council figures are what Alinta produces against him.', 3: 'No national research is cited by either councillor.'}),
          ('Takings in Pell Street rose ____________ per cent.', None,
           'eleven',
           'And the two shops that closed were already failing.'),
          (
           'The inconvenient detail was published in the ____________.',
           None, 'appendix',
           'Which Alinta says is where such things are hidden.'),
          (
           'Bogdan\u2019s revised objection concerns who can ____________ '
           'the high street.', None, 'reach',
           'Drivers there are disproportionately old and disabled.'),
          ('What do they agree?',
           ['Twelve bays', 'Ten bays and the bus review in the paper', 'No change', 'Eight bays only'],
           1, 'With the frequency review brought forward.',
           {0: 'Twelve is his opening figure, not the agreement.', 2: 'They agree a scheme with bays and a review.', 3: 'Eight is her opening offer, not the agreement.'})])],
   speak=dict(
    part='Part 1 into Part 2', focus='Streets',
    longturn=[('The street I know best is the one I grew up on, a long '
               'terraced street running downhill from a main road to a railway '
               'bridge.'),
              ('On it there are about ninety houses, almost all identical from '
               'the outside, and at the top a corner shop that has changed '
               'hands four times, a launderette, and a dental surgery in what '
               'used to be two houses knocked together.'),
              ('Who uses it has changed completely. When I was small it was '
               'families, and the street was full of children because there '
               'was nowhere else to be. It is now mostly rented, largely by '
               'people in their twenties, and the cars are parked nose to tail '
               'from the bridge to the main road, which is the single biggest '
               'visible difference.'),
              ('What I like about it is the thing that should not work: the '
               'houses are too close together, and because of that everybody '
               'knows everybody\'s business, which when I was fifteen I found '
               'suffocating and now think is the whole value of the place. '
               'What I dislike is the traffic, and specifically that it has '
               'become a route rather than a destination. The street was built '
               'before cars, and it is now the quickest way between two roads '
               'that were built for them, which is nobody\'s fault and will not '
               'be solved by asking people to drive more slowly.')],
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
    ref='L10',
    context=[
      'From text C, which you have just read:',
      'Although the trial raised footfall by a fifth, takings fell on three of the four streets measured; and while the headline figure is often quoted, the disaggregated one almost never is. Even so, the scheme should probably continue - not because the objectors are wrong about their own takings, which they are not, but because the street is now crossable by a child, and that was never on the form.',
     ],
    notice=[
     ('The writer concedes three separate things in this paragraph. Find two of them.', None,
      'footfall rose; the objectors are right about their own takings'),
     ('What does the writer finally claim, and which three words introduce it?', None,
      'the scheme should continue - Even so'),
    ],
    noticetask='Answer both from the paragraph above, which you met earlier in this cycle.',
    contrast='A concessive chain is three or four concessions in a row before a claim, and it is the strongest structure available in Task 2 because it answers the objections before they are made. The grammar is the same as unit 21 cycle 5 - although X, Y - repeated, with the claim held back until the end and introduced by even so, nevertheless or all the same. Two cautions. The chain must end: four concessions and no claim is a surrender in instalments. And the claim must not contradict a concession, or the whole paragraph collapses - notice that the writer above never denies that takings fell.',
    task2='Build a concessive chain. Concede both, then claim the third.',
    items2=[
     ('Footfall rose. Takings fell. The scheme should continue.', None,
      'Although footfall rose and takings fell, the scheme should continue.'),
     ('Correct: Although it is cheap, but it solves nothing.', None,
      'Although it is cheap, it solves nothing.'),
     ('The objectors are right. The street is safer. Continue.', None,
      'The objectors are right about their takings; even so, the street is now safer, and the scheme should continue.'),
     ('Correct: However the trial was popular, the order lapsed.', None,
      'Although the trial was popular, the order lapsed.'),
    ],
    task3='Now write the chain. Take the street in this cycle, concede two things the other side is right about, and then make your own claim without contradicting either. Eighty to a hundred words.',
    items3=10,
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
   notes=dict(
    serves='Matching information and plan labelling, Reading Part 2-3; Task 1 Academic, a site plan',
    because='A plan is organised in space and candidates describe it in the order their eye happens to travel, producing an answer nobody can follow without the drawing - which is the one thing the examiner does not have in front of them while reading',
    skill='Describing a plan: one direction, fixed references, and the five passive verbs',
    evidence='About one Task 1 in eight is a map or plan, and the phase 4 models show the band 6.5 answers using left and right throughout, which is meaningless without the reader standing where the writer is',
    watch='Learners will write "on the right of the site". The examiner does not know which way you are facing. Expect it, and ask for a compass point or a named feature',
    time='85 minutes, or 65 without the free grammar production'),
   lead=dict(
    title='The drawing that decides it',
    body='Everything argued about in cycles 1 and 2 is eventually settled by a drawing: a plan with blocks on it, a key, and a phasing table. The drawing is the most consequential document in the process and the one fewest people can read, because it is in a language - massing, phasing, public realm, setback - that nobody is taught. This cycle teaches enough of it to describe one, which is also exactly what Task 1 asks when it gives you a map.',
    task='Answer these before you look at the plan.',
    qs=[
        'Have you ever seen a plan of somewhere you know? Did it look like the place?',
        'What would you want to know about a new development near you, that a drawing could tell you?',
        'If the school is built last, who pays for that?',
        'Why do you think the spaces between buildings are cut first when money is short?',
       ]),
   vocabwork=dict(
    title='The words of a drawing',
    body='Fourteen words, and the first eight are the ones a plan is labelled with. The second six are the ones a Task 1 answer needs to move around it - and every one of those six is a preposition or a direction, which is why they are easy to learn and easy to get wrong.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'a site plan', 'sub': 'cycle 3 · eight words on the drawing, six for moving round it', 'branches': [('on the drawing', ['masterplan', 'massing', 'storey', 'landscaped']), ('in the table', ['phasing', 'retained', 'zone', 'completion']), ('position', ['adjoining', 'set back from', 'at the junction of', 'bounded by']), ('direction', ['to the north of', 'in the north of', 'clockwise from', 'beyond'])], 'note': 'To the north of is outside the site; in the north of is inside it. The two phrases differ by one word and by the whole position of whatever you are describing, and both are tested.'},
    figure2={'kind': 'family', 'teaches': 'word-formation', 'sub': 'cycle 3 · the five verbs a plan comparison is made of', 'rows': [(('re-tain', 2), ('re-ten-tion', 2), '', ('re-tained', 2), ''), (('de-mol-ish', 2), ('de-mo-li-tion', 3), '', '', ''), (('con-vert', 2), ('con-ver-sion', 2), '', ('con-ver-ted', 2), ''), (('ex-tend', 2), ('ex-ten-sion', 2), '', ('ex-ten-ded', 2), ''), (('re-lo-cate', 3), ('re-lo-ca-tion', 3), '', ('re-lo-ca-ted', 3), '')], 'note': 'All five are normally used in the passive on a plan, because the drawing does not say who did it: the hall was demolished, the lake was retained. That is the same point as the process description in unit 25 cycle 3.'},
    task='Complete each sentence with a word from this cycle, in the right form.',
    items=[
     ('The size and shape of the buildings is the ____________.', None,
      'massing'),
     ('The order of construction is the ____________.', None,
      'phasing'),
     ('Buildings kept from the earlier layout were ____________.', None,
      'retained'),
     ('The open space between buildings is the public ____________.', None,
      'realm'),
     ('Inside the northern part of the site: ____________ the north of the site.', None,
      'in'),
     ('Outside it, further north: ____________ the north of the site.', None,
      'to'),
     ('The old mill became flats: it was ____________.', None,
      'converted'),
     ('A building moved to another part of the site was ____________.', None,
      'relocated'),
    ]),
   builder=dict(
    skill='Task 1: describing a plan',
    qkind='skill',
    explain='A map or plan is organised in space, and the single thing that separates a band 7 answer from a band 6 one is that the reader can follow it without the drawing. Four rules. Choose a direction and say what it is - moving clockwise from the main entrance, or from north to south - and then hold it, because an answer that wanders is unreadable however accurate each sentence is. Use fixed references rather than left and right: the examiner is not standing where you are, so opposite the station and to the east of the lake work and on the right does not. Use the passive for what was done to the site, because the plan names nobody. And for a before-and-after pair, organise by what changed rather than by where things are - the woodland was cleared and replaced by housing, while the lake was retained - because the examiner wants the comparison and not two tours of the same field.',
    worked=[
      'The plan: a site before and after, with a lake, a woodland, a hall and a new housing area.',
      'Overview, naming the organising principle: “The site was transformed from open land into a residential development, with only the lake and the hall retained.”',
      'A change, in the passive, with a fixed reference: “The woodland to the north of the lake was cleared and replaced by two-storey housing.”',
      'Direction held: “Moving clockwise from the entrance, the car park was relocated to the eastern boundary.”',
      'What not to write: “On the left there is a lake. On the right there are houses.” Both sentences are true of the drawing and neither is usable by somebody who has not got it.',
     ],
    figure={'kind': 'ladder', 'teaches': 'band-move', 'criterion': 'Coherence, on a plan', 'sub': 'cycle 3 · the same change, three bands', 'rungs': [('5.5', 'On the left there was a wood. Now there are houses there. The lake is still there.', ''), ('6.5', 'The woodland in the north of the site was replaced by housing, while the lake was retained.', 'fixed reference, the passive, and the two changes joined'), ('7.5', 'The woodland bounding the lake to the north was cleared and given over to two-storey housing, the lake itself being one of only two features retained from the original layout.', 'the change is the subject, the retention is subordinate, and the overview is carried inside the sentence')], 'note': 'The third rung has no left or right in it and no "there is". A plan answer that avoids both is most of the way to band 7 before anything else is considered.'},
    task='Rewrite each so that a reader without the drawing could follow it.',
    items=[
     ('On the left there is a lake.', None,
      'a lake lies in the west of the site'),
     ('They knocked down the hall.', None,
      'the hall was demolished'),
     ('There are houses where the wood was.', None,
      'the woodland was replaced by housing'),
     ('The car park moved.', None,
      'the car park was relocated to the eastern boundary'),
     ('Opposite side from the station.', None,
      'on the far side of the site from the station'),
     ('They kept the lake.', None,
      'the lake was retained'),
    ],
    note='Five of the six go into the passive and all six replace a position relative to the reader with a position relative to something on the drawing. Those two changes, applied to every sentence, are the whole of a band 7 plan description.'),
   figures=[
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 3 · what the labelling questions turn on', 'pairs': [('knocked down', 'demolished', 'synonym'), ('kept as it was', 'retained', 'reformulation'), ('the order of building', 'the phasing', 'nominalisation'), ('not built until later', 'in a subsequent phase', 'negation'), ('paths, squares and verges', 'the public realm', 'hypernym'), ('they moved the car park', 'the car park was relocated', 'voice')], 'note': 'The fourth is the one the phasing questions are built on, and it is the difference between a school that exists and one that is promised.'},
   ],
   advice='On a plan, say your direction of travel in the first sentence and then hold it. Use compass points or named features, never left and right, and put every change into the passive. A reader who cannot follow your tour cannot give you marks for accuracy, however accurate you were.',
   debrief=dict(
    read=[
      'In the labelling task two blocks could be the school. The phasing table decides which, and it is below the drawing rather than on it.',
      'The matching-information question about the public realm has two candidate paragraphs: one describes it and one explains why it is cut first.',
      'Question 37 uses "in a subsequent phase" and the passage says "not until phase four". The bridge has the pair.',
     ],
    listen=[
      'The speaker describes the site anticlockwise and then doubles back once. The doubling-back is where two labels are settled.',
      'She says "the old hall, which stays" - and stays is the word, not the technical one. The question uses retained.',
     ]),
   outside='Describing a place so that somebody who cannot see it can follow you is a skill with obvious uses, and almost everybody does it badly: left and right, over there, near the shop. Compass points and named references cost nothing and work every time.',
   recycled=[
      'phasing',
      'retained',
      'evidence',
      'masterplan',
      'public realm',
      'frontage',
     ],
   read=[
    dict(preview=True,
         heading='Reading a plan: three words',
         kind='Explainer box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='The plan in this cycle has these three words on it and none of them means what it means elsewhere. Two hundred words.',
         paras=[
          'Massing is the size and shape of buildings taken together, without any detail of what they look like. A plan showing massing is telling you how much building there is and where the light will fall, and deliberately not telling you about windows or materials, because those are decided later and by somebody else.',
          'Phasing is the order the parts will be built in, and it matters more than almost anything else on the drawing. A scheme where the housing is phase one and the school is phase four is a scheme where four hundred children arrive six years before their classrooms.',
          'The public realm is everything between the buildings that anybody may walk on - streets, squares, paths, the strip of grass. It is drawn last, costed last and cut first, which is why so many finished schemes look nothing like the pictures.',
          'All three are planning words rather than ordinary ones, and all three appear on the plan you are about to describe. A Task 1 answer that uses them correctly reads as though written by somebody who has seen a plan before.',
         ],
         items=[
          ('The size and shape of buildings without their detail is ____________.',
           None, 'massing',
           'Paragraph 1: it tells you where the light will fall.'),
          ('The order the parts will be built in is the ____________.',
           None, 'phasing',
           'Paragraph 2, with the school in phase four.'),
          ('Everything between the buildings that anyone may walk on is the public ____________.',
           None, 'realm',
           'Paragraph 3: drawn last, costed last and cut first.'),
         ]),
    dict(heading='The Brackwell masterplan — two maps',
         kind='Plan and key',
         task='Matching information and plan labelling',
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
          (
           'Which paragraph explains why the new blocks differ in '
           'height?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           0,
           'The taller blocks face the railway, the shorter the '
           'existing terraces.',
           {1: 'Paragraph 3 describes the central zone and its uses.', 2: 'Paragraph 4 describes the zone that changes least.', 3: 'Paragraph 5 describes the new pedestrian route.'}),
          ('Which paragraph describes the zone that changes least?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           2, 'The canal basin and the retained allotments.',
           {0: 'Paragraph 2 explains why the new blocks differ in '
               'height.', 1: 'Paragraph 3 describes the central zone and its uses.', 3: 'Paragraph 5 describes the new pedestrian route.'}),
          (
           'Which paragraph identifies the risk in the delivery order?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           3, 'The canal park comes in phase three and may be dropped.',
           {0: 'Paragraph 3 describes the central zone and its uses.', 1: 'Paragraph 4 describes the zone that changes least.', 2: 'Paragraph 5 describes the new pedestrian route.'}),
          ('The car park becomes a ____________.', None, 'school',
           'Paragraph 3, in the central zone.'),
          ('The bus depot becomes ____________.', None, 'workshops',
           'Paragraph 3, on the eastern side of the central zone.'),
          ('The new east-west feature is a ____________ route.', None,
           'pedestrian',
           'Paragraph 5, which has no equivalent on the first map.')])],
   listen=[
    dict(heading='A planner presents the masterplan', part='Part 4',
         task='A presentation of two site plans · plan labelling, multiple choice and matching', band='l4',
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
          ('The planner organises the presentation by ____________.',
           None, 'zone', 'Because that is how the plan was designed.'),
          (
           'The western half of the northern zone will be ____________ '
           'storeys.', None, 'six',
           'Facing the railway, while the east is four storeys facing '
           'the terraces.'),
          ('In the central zone, the car park becomes a ____________.',
           None, 'school', 'Alongside the scrubland becoming a square.'),
          ('The square is placed to serve',
           ['residents only', 'children and workshop workers', 'visitors', 'the school alone'],
           1, 'Giving four busy periods a day.',
           {0: 'Residents are served, but the placing is for two '
               'groups.', 2: 'Visitors are not mentioned in the planning of the '
               'square.', 3: 'The workshops supply the midday use as well.'}),
          ('A ____________ route crosses all three zones.', None,
           'pedestrian',
           'With nothing corresponding to it on the first map.'),
          (
           'Which element is most at risk if housing sells below '
           'forecast?',
           ['The school', 'The canal park', 'The workshops', 'The allotments'],
           1, 'Because it falls in phase three, nine years away.',
           {0: 'The school falls in phase two, before the risk.', 2: 'The workshops are part of the central zone works.', 3: 'The allotments are retained at no cost.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='Plans and what gets built',
    intro=('Work the card first: a minute of notes, the long turn, then '
           'the one or two questions that round it off. The discussion '
           'after that: four or five sentences. Try once to say that a '
           'plan and its delivery are different things.'),
    cue=(('Describe a new neighbourhood or housing development you have '
          'seen.'),
         ['where it is',
          'what it contains',
          'who lives there',
          'and explain what it still needs']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Was anything promised that never arrived?',
        'Would you live there?',
        'Do new developments usually turn out as planned?',
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
    ref='L25',
    context=[
      'From the article in this cycle:',
      'Moving clockwise from the main entrance, the car park has been relocated to the eastern boundary and the woodland that formerly bounded the lake to the north has been cleared. Only the lake itself and the hall, which stands set back from the road at the southern edge, have been retained from the original layout.',
     ],
    notice=[
     ('The writer names a direction of travel in the first four words. Copy them out.', None,
      'Moving clockwise from the main entrance'),
     ('Find two phrases that fix a position without using left or right.', None,
      'to the eastern boundary; set back from the road at the southern edge'),
    ],
    noticetask='Answer both from the paragraph above, which is from the passage you read earlier in this cycle.',
    contrast='Space is organised differently from time and needs different words. A chart answer moves from left to right because the axis does; a plan answer has no axis, so you must supply the order yourself and say what it is. The phrases that do the work are prepositional: adjoining, set back from, bounded by, at the junction of, beyond, within. Note the two that learners confuse, because the exam does too: in the north of the site is inside it and to the north of the site is outside it.',
    task2='Rewrite each with a fixed reference and the passive where it applies.',
    items2=[
     ('They moved the car park to the right.', None,
      'The car park was relocated to the eastern boundary.'),
     ('There is a wood next to the lake.', None,
      'A woodland adjoins the lake.'),
     ('Correct: the hall is in the north of the site, outside it.', None,
      'the hall is to the north of the site'),
     ('Start your description and say the direction.', None,
      'Moving clockwise from the main entrance...'),
    ],
    task3='Now write the opening of a Task 1 answer from the plan in this cycle: one overview sentence saying what the site became and what was kept, and two sentences describing changes, holding one direction. About fifty words.',
    items3=8,
    point='Spatial organisation by zone, not by date',
    fix=dict(
     text=('The site is divided into three zones. In the north there is '
           'housing, in the centre there are the shops, and the south is '
           'industrial. The housing zone, which was built in the nineteen- '
           'sixties, contains about four hundred homes. The industrial zone is '
           'the larger of the three, and it occupies almost half of the site.'),
     faults=[('in the centre there are the shops',
              'in the centre there are shops',
              ('The is not needed with a plural noun that is being introduced '
               'for the first time.')),
             ('The industrial zone is the larger of the three',
              'The industrial zone is the largest of the three',
              'With three items the superlative is needed: the largest.'),
             ('it occupies almost half of the site',
              'it occupies almost half the site',
              ('Half takes no of before the, so half the site is the natural '
               'form.'))]),
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
   notes=dict(
    serves='Matching headings and Yes/No/Not Given, Reading Part 3, on a seven-hundred-word passage; multiple choice in Listening Part 4',
    because='By unit 27 a learner can name what a paragraph does; what remains is telling two paragraphs apart when both do the same thing at different levels of generality - a general claim and the particular case that shows it',
    skill='Ranking paragraphs by how general they are, and matching the heading to the level',
    evidence='Unit 21 taught function over subject and unit 22 taught defining against illustrating; the remaining confusion is two claims, one about everywhere and one about one place',
    watch='Learners will give the general heading to the paragraph about Bristol, because it is the clearest paragraph. It is clear because it is particular. Expect it',
    time='90 minutes, or 70 without the free grammar production'),
   lead=dict(
    title='One word for three objections',
    body='Density means homes per hectare and nothing else, and almost nobody arguing about it means homes per hectare. They mean height, or parking, or who the new people will be, and the word lets all three be argued without any of them being named. That is why these arguments never resolve: the two sides are not disagreeing about the quantity they are both quoting. In cycle 2 you met two shopkeepers who were both right; this is the same problem one level up.',
    task='Answer these before you read, and keep them for the unit review.',
    qs=[
        'How many homes per hectare do you live at? Could you guess within a factor of two?',
        'When people object to density, what do you think they are objecting to?',
        'Is it legitimate to object to who your new neighbours might be? Does the answer change if you say it aloud?',
        'What word would you use instead, and what would it leave out?',
       ]),
   vocabwork=dict(
    title='The vocabulary of how much is built',
    body='Twelve words. Four are measurements, four are objections and four are the language of a decision that was never taken. That last group - commitment, in perpetuity, non-decision, default - is the most useful in this book for writing about any system that produces outcomes nobody chose.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'how much gets built', 'sub': 'cycle 4 · and the last group is the useful one', 'branches': [('the measures', ['density', 'homes per hectare', 'storeys', 'floor area ratio']), ('the objections', ['sprawl', 'swamped', 'overlooking', 'marginal cost']), ('the commitments', ['commitment', 'in perpetuity', 'allocation', 'mains']), ('the non-choices', ['non-decision', 'default', 'by omission', 'drift'])], 'note': 'A non-decision is an outcome produced by nobody deciding anything - the default running on. Unit 26 cycle 1 had one: a street turning over one flat at a time with nobody choosing it. Having the word makes the thing visible.'},
    figure2={'kind': 'cline', 'teaches': 'scale', 'title': 'How binding is it?', 'sub': 'cycle 4 · what a planning document has actually promised', 'left': 'an aspiration', 'right': 'enforceable for ever', 'items': [('is encouraged', 0.04), ('will be sought', 0.2), ('is expected', 0.36), ('is required', 0.58), ('is secured by agreement', 0.78), ('in perpetuity', 0.95)], 'note': 'Will be sought is the phrase to watch: it appears in almost every plan, promises nothing, and is read by residents as a commitment. Three of the questions in this cycle turn on it.'},
    task='Complete each sentence with a word or phrase from this cycle.',
    items=[
     ('Homes per hectare is a measure of ____________.', None,
      'density'),
     ('Low-density building spreading outward is ____________.', None,
      'sprawl'),
     ('A promise with legal force attached to land is ____________ by agreement.', None,
      'secured'),
     ('An outcome produced by nobody deciding is a ____________.', None,
      'non-decision'),
     ('The phrase that promises nothing: will be ____________.', None,
      'sought'),
     ('Binding for ever is in ____________.', None,
      'perpetuity'),
     ('The cost of one more unit is the ____________ cost.', None,
      'marginal'),
     ('Water, power and drains together are the ____________.', None,
      'mains'),
    ]),
   builder=dict(
    skill='Matching headings: how general is this paragraph?',
    qkind='skill',
    explain='By this unit you can name what a paragraph does rather than what it mentions, and you can tell a definition from an illustration. The confusion that remains is the one the hardest sets are built on: two paragraphs doing the same job at different levels of generality. A general claim about density everywhere, and the Bristol case that shows it. Both are claims, both are about density, both are about the same point, and there are two headings - one naming the argument and one naming the case. The test is a question about scope rather than function: does this paragraph support a claim about everywhere, or about one place? Count the proper nouns and the dates; a paragraph with four of them is almost always the particular one, and a paragraph with none is almost always the general one. Then match the levels: the general heading to the general paragraph, however much duller it reads, and the heading naming a place to the paragraph that names it. The particular paragraph is usually the clearest on the page, and clarity is what makes it tempting for the general heading.',
    worked=[
      'Paragraph C: “Density is a poor proxy for everything people object to. It measures homes per hectare; the objections are to height, to parking and to neighbours, and none of the three is a function of it.”',
      'Paragraph E: “In Bristol in 2019 a scheme at 68 homes per hectare was refused after 340 objections, of which eleven mentioned density and two hundred mentioned parking.”',
      'Proper nouns and dates: C has none, E has four. C is general, E is particular.',
      'Heading “Why the measure misses the complaint” is general and belongs to C. Heading “A refusal and what it was really about” names a case and belongs to E. The second reads better and belongs to the duller paragraph’s neighbour, which is the trap.',
     ],
    figure={'kind': 'skeleton', 'teaches': 'text-structure', 'title': 'Seven hundred words, and two levels', 'sub': 'cycle 4 · mark the general ones G and the particular ones P', 'paras': [('A', 'context', 'G - what the word is used for'), ('B', 'definition', 'G - homes per hectare, and nothing else'), ('C', 'claim', 'G - a poor proxy for the real objections'), ('D', 'evidence', 'P - three schemes and their objection counts'), ('E', 'example', 'P - Bristol, 2019, and the parking'), ('F', 'consequence', 'G - what to ask residents instead')], 'note': 'Four general paragraphs and two particular ones, which is the usual ratio. The two particular ones are the easiest to read and the easiest to mislabel.'},
    task='For each paragraph opening write GENERAL or PARTICULAR, and the signal.',
    items=[
     ('“Density is a poor proxy for everything people object to.”', None,
      'general, no names'),
     ('“In Bristol in 2019 a scheme at 68 homes per hectare was refused.”', None,
      'particular, place and date'),
     ('“Objections to height are objections to height.”', None,
      'general, no names'),
     ('“Of 340 responses, two hundred mentioned parking.”', None,
      'particular, figures'),
     ('“What residents are asked is not what they are answering.”', None,
      'general, no names'),
     ('“The Leeds scheme was approved at twice the density.”', None,
      'particular, place'),
    ],
    note='Three general, three particular, and every particular one names a place or a number in its first line. That is a reliable tell and it takes two seconds, which is why it is worth more than reading the paragraph.'),
   figures=[
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 4 · the Yes/No/Not Given set turns on these', 'pairs': [('homes per hectare', 'residential density', 'nominalisation'), ('nobody decided it', 'the outcome was a non-decision', 'reformulation'), ('the council will try to get it', 'will be sought', 'synonym'), ('it does not measure crowding', 'density is silent on occupancy', 'negation'), ('height, parking and neighbours', 'the real objections', 'hypernym'), ('residents objected', 'objections were received', 'voice')], 'note': 'The third is the one worth two marks: an ordinary phrase in the question and a term of art in the passage, promising much less than it appears to.'},
   ],
   advice='In matching headings, count the proper nouns in each paragraph before you read it properly. A paragraph naming a place, a date or a figure is almost always the particular one and takes the heading that names a case; a paragraph naming none is the general one and takes the heading that names an argument. The particular paragraph is clearer and that is exactly why its heading gets misassigned.',
   debrief=dict(
    read=[
      'The heading naming a refusal belongs to the Bristol paragraph, not to the paragraph arguing that density is a poor proxy - even though the second is where the argument is.',
      'Statement 50 uses "will be sought" from the plan and treats it as a commitment. The passage says explicitly what the phrase promises.',
      'One statement repeats a conceded half of a concessive sentence, which is cycle 2 of this unit at seven hundred words.',
     ],
    listen=[
      'Dr Keane names three objections and says one of them is never said aloud. The question asks which.',
      'She gives a figure for Paris and one for this country. The question names the city.',
     ]),
   outside='Noticing whether somebody is making a general claim or telling you about one case is the difference between evidence and anecdote, and most public argument runs on the second while sounding like the first.',
   recycled=[
      'density',
      'evidence',
      'non-decision',
      'commitment',
      'allocation',
      'marginal cost',
     ],
   read=[
    dict(heading='Building up, building out, building nothing',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 42-48',
         paras=[
          'Every growing city faces the same three options and '
          'discusses them as though there were two. It can build '
          'upwards, increasing the number of homes on land already '
          'serviced; it can build outwards, adding land at the edge; '
          'or it can build very little. Building very little is a '
          'choice made by default, and it has consequences as large as '
          'either of the others, almost none of them recorded anywhere '
          'a council would look.',
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
          'What is genuinely settled is the arithmetic of servicing. A '
          'city that grows outwards commits itself to a maintenance '
          'liability it carries for a century. The kilometres of pipe '
          'and road per household are two to four times higher at the '
          'edge than in the centre, and those assets have to be '
          'renewed on a cycle whatever happens to the city\u2019s '
          'population.',
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
          'explanation for its popularity.',
                ('One asymmetry deserves a sentence of its own, because it '
                 'explains why the third option is chosen so often. The costs '
                 'of building upwards and outwards fall on identifiable people '
                 'who can be interviewed, photographed and quoted. The cost of '
                 'building nothing falls on households that do not yet exist '
                 'in the constituency, and on young people who will form them '
                 'somewhere else. A planning process that hears objections '
                 'hears the first two and cannot hear the third, so the option '
                 'with the least visible cost wins by a mechanism that has '
                 'nothing to do with its merits.')],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['Three options', 'Cheap to serve, expensive to build', 'Cheap to build, expensive to serve', 'The cost of building nothing'],
           1, 'Existing infrastructure against high construction cost.',
           {0: 'The three options are paragraph 1.', 2: 'Cheap to build and expensive to serve is paragraph 3.', 3: 'The cost of building nothing is the heading for '
               'paragraph 4.'}),
          ('Choose the best heading for paragraph 4.',
           ['Cheap to build, expensive to serve', 'The cost of building nothing', 'What is settled', 'What is not settled'],
           1,
           'Prices rise and the city exports the people who staff it.',
           {0: 'Cheap to build and expensive to serve is paragraph 3.', 2: 'What is settled is paragraph 6, the servicing '
               'arithmetic.', 3: 'What is not settled is the heading for paragraph 7.'}),
          ('Choose the best heading for paragraph 7.',
           ['What is settled', 'What is not settled', 'Three distributions of cost', 'Transport emissions'],
           1, 'The claim that density produces community.',
           {0: 'What is settled is paragraph 6, the servicing '
               'arithmetic.', 2: 'The three distributions of cost are paragraph 8.', 3: 'Transport emissions appear in paragraph 5, among the '
               'mixed evidence.'}),
          ('The writer believes building outwards is cheaper overall.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 3 and paragraph 6: construction is cheap and the '
           'servicing liability lasts a century.',
           {0: 'Yes would need it cheaper; paragraphs 3 and 6 set the '
               'century-long liability against the cheap construction.', 2: 'Not Given is wrong because both costs are given.'}),
          (
           'The writer believes density reliably creates a stronger '
           'sense of community.', ['Yes', 'No', 'Not Given'],
           1, 'Paragraph 7 calls the research weak in both directions.',
           {0: 'Yes would need reliability; paragraph 7 calls the '
               'research weak both ways.', 2: 'Not Given is wrong because the claim is examined.'}),
          ('Kilometres of pipe and road per household are ____________ to '
           'four times higher at the edge.', None, 'two',
           'Paragraph 6, and must be renewed whatever happens to the '
           'population.'),
          ('The writer says only building nothing requires no '
           '____________.', None, 'decision',
           'The final paragraph, which is part of why it is popular.')])],
   listen=[
    dict(preview=True,
         heading='A planner on the word density',
         part='Preview', task='Sentence completion',
         band='lpre', qtype='Questions P1-P3',
         why='The lecture you are about to hear uses density forty times. Ninety seconds on what it does and does not mean.',
         script=[
          ('Student',
           'People say density like it is obviously bad.'),
          ('Dr Keane',
           'People say it like it is one thing, which is the bigger problem. Density is homes per hectare. It says nothing whatever about height, about crowding inside the homes, or about what the street feels like.'),
          ('Student',
           'But tall buildings are dense.'),
          ('Dr Keane',
           'Some are. A terrace of four-storey houses with small gardens is denser than most tower blocks in this country, because the towers are surrounded by grass nobody uses. The densest parts of Paris are six storeys.'),
          ('Student',
           'So what are people actually objecting to?'),
          ('Dr Keane',
           'Three different things, usually at once. Height, which is visible. Parking, which is immediate. And the people, which nobody says aloud. Density is the word that lets all three be argued without any of them being named.'),
          ('Student',
           'And the planners?'),
          ('Dr Keane',
           'We use it because it is measurable. That is a reason and it is not a defence: a measurable word standing in for three unmeasured ones is how a consultation produces an answer nobody meant.'),
         ],
         items=[
          ('Dr Keane says density means homes per ____________.',
           None, 'hectare',
           'Her first answer, which also says what it does not mean.'),
          ('The densest parts of Paris are ____________ storeys.',
           None, 'six',
           'Her second answer, with the terrace and the tower block.'),
          ('She says planners use the word because it is ____________.',
           None, 'measurable',
           'Her last turn, where she says that is a reason and not a defence.'),
         ]),
    dict(heading='A lecture on density and infrastructure', part='Part 4',
         task='A lecture on how cities grow · sentence completion, matching and multiple choice', band='l4',
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
          (
           'The lecturer says the public argument covers ____________ '
           'of the three options.', None, 'two',
           'While most cities have chosen the third.'),
          (
           'A tall building costs per square metre two to ____________ '
           'times a house.', None, 'three',
           'And takes four to seven years from permission to '
           'occupation.'),
          ('Who pays the cost of building outwards?',
           ['The developer', 'The public, later', 'The buyer', 'Nobody'],
           1,
           'Roads, a school, water mains and a loss-making bus route.',
           {0: 'The developer pays for building upwards.', 2: 'The buyer pays the construction cost of building '
               'upwards.', 3: 'The cost is real and falls on the public purse.'}),
          (
           'Building nothing is not recorded anywhere because it is '
           'the sum of individual ____________.', None,
           'refusals', 'So no planning document contains it.'),
          (
           'The lecturer treats the ____________ arithmetic as '
           'settled.', None, 'servicing',
           'Pipe and road per household two to four times higher at '
           'the edge.'),
          ('What is he more careful about than his colleagues?',
           ['Cost figures', 'The claim that density produces community', 'Emissions data', 'Travel times'],
           1,
           'Because it is the easiest claim for opponents to show '
           'overstated.',
           {0: 'Cost figures are what he treats as reliable.', 2: 'Emissions data is not what he singles out.', 3: 'Travel times are not mentioned in the lecture.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='How a city should grow',
    followup=[(('You say cities should grow upwards. Who pays when a city '
                'spreads instead?'),
               ('Everybody, but not at the same time, which is why the cost is '
                'so easy to ignore. The developer pays for the houses and the '
                'public pays for the roads, the schools and the sewers, and '
                'those bills arrive over thirty years. Spreading is cheaper '
                'for whoever builds and dearer for whoever is there '
                'afterwards.')),
              ('Is it reasonable for residents to object to new building?',
               ('It is reasonable and it is also systematically unbalanced. '
                'The people who would live in the new homes cannot attend the '
                'meeting, because they are not there yet, so every hearing is '
                'weighted towards those who already have one. I would not '
                'remove the objection; I would require the decision to record '
                'the interest nobody was present to state.')),
              ('What happens to a city that builds very little?',
               ('It does not stay the same, which is the assumption behind the '
                'question. Demand moves into the existing stock, prices rise, '
                'households share, and the people who cannot pay leave. So the '
                'choice is not between change and no change; it is between '
                'visible change and a slower change that shows up in who can '
                'afford to live there.'))],
    intro=('Take the card first. One minute to make notes, then one to two '
           'minutes of talk, and the bullets are the order to take them '
           'in. Then the discussion: four or five sentences. Try once to '
           'name a cost that falls on somebody who is not present.'),
    cue=('Describe a tall building you know.',
         ['where it is',
          'what it is used for',
          'how it fits its surroundings',
          'and explain what you think of it']),
    qs=['Now look at the card. You have one minute to make notes.',
        'What was there before it?',
        'Should more be built like it?',
        'Should cities grow upwards or outwards?',
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
    ref='L20',
    context=[
      'From the passage you have just read:',
      'The plan says that affordable housing will be sought on sites of ten homes or more. It does not say that it will be required, nor that ten is a threshold rather than a target, nor that only sites above ten are affected. Three of those readings are available and the drafting chooses one; residents read a fourth, which is that affordable housing will be built.',
     ],
    notice=[
     ('Find the three things the plan does NOT say.', None,
      'that it will be required; that ten is a threshold; that only sites above ten are affected'),
     ('Where does the word only sit, and what does it limit?', None,
      'before "sites above ten", limiting which sites'),
    ],
    noticetask='Answer both from the paragraph above, which you met earlier in this cycle.',
    contrast='You met the scope of only in unit 25. Here the same machinery is doing something slightly different: the writer is listing the readings a sentence does not have, which is the most precise way to say what it does have. The structure is cumulative negation - It does not say X, nor Y, nor Z - and the nor requires inversion in formal writing: nor does it say, not nor it says. It is a long way round and it is worth it when a single word is carrying an argument, which in planning and in law is most of the time.',
    task2='Rewrite each as a cumulative negation with correct inversion.',
    items2=[
     ('It does not say it is required. It does not say ten is a threshold.', None,
      'It does not say that it will be required, nor that ten is a threshold.'),
     ('Correct: nor it says that the site is allocated.', None,
      'nor does it say that the site is allocated'),
     ('The scheme is not funded and it is not approved.', None,
      'The scheme is neither funded nor approved.'),
     ('Correct: The plan does not say only sites above ten, nor it mentions the smaller ones.', None,
      'nor does it mention the smaller ones'),
    ],
    task3='Now write it. Take a phrase from this cycle that promises less than it seems to - will be sought, is expected, is encouraged - and write sixty to eighty words saying what it does say and listing what it does not, with correct inversion after nor.',
    items3=8,
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
   notes=dict(
    serves='Matching information and short answer, Reading Part 3; Task 2, discuss both views and give your own opinion',
    because='Band 6 essays argue about the answer; the strongest Task 2 move available on any policy question is to argue about the process that produced it, and almost nobody attempts it because nobody has shown it being done',
    skill='Making a process objection: arguing about how a question was decided rather than about the answer',
    evidence='Unit 26 cycle 5 taught answering the displacement objection; this is its partner, the objection to the procedure, which is what the chart at the front of this unit is evidence for',
    watch='Learners will argue for or against the scheme. Ask them whether the consultation could have produced any other answer, given who replied',
    time='95 minutes, or 70 without the free grammar production'),
   lead=dict(
    title='Who answered, and what was asked',
    body='This is the last cycle of the unit and it is where everything in it meets. The form had two options and Mina wanted a third. The model stopped at the junction. Three per cent of the under-25s replied and forty-one per cent of owners over sixty. Every one of those is a fact about the process rather than about the scheme, and together they raise a question that no amount of arguing about the scheme can answer: whether this consultation could have produced any other result.',
    task='Answer these before you read, and compare them with the guess you wrote on the puzzle chart at the front of the unit.',
    qs=[
        'If only one group answers a consultation, what has the consultation measured?',
        'Is a process objection a real objection, or a way of avoiding the question?',
        'What would you change about how the question was asked?',
        'Has anything in this unit changed what you thought at the start of it? Which cycle did it?',
       ]),
   vocabwork=dict(
    title='The vocabulary of how a decision was reached',
    body='The last set of the unit, and the most transferable in it: these are the words for criticising a procedure rather than an outcome, and they work on a consultation, a hiring decision, a committee or a trial. Five of them you met in unit 23 and unit 25, where the subject was evidence rather than process.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'how the decision was made', 'sub': 'cycle 5 · and these transfer to any procedure at all', 'branches': [('who answered', ['self-selected', 'representative', 'under-reported', 'response rate']), ('what was asked', ['framing', 'option set', 'leading question', 'false dichotomy']), ('what was modelled', ['model boundary', 'assumed constant', 'disbenefit', 'appraisal']), ('what follows', ['legitimacy', 'process question', 'reopened', 'standing'])], 'note': 'A self-selected sample is one where the respondents chose themselves, which every consultation produces and almost no consultation adjusts for. It is not a flaw in the method so much as the method, and saying so is the whole of a process objection.'},
    figure2={'kind': 'family', 'teaches': 'word-formation', 'sub': 'cycle 5 · the last word family of the unit', 'rows': [(('rep-re-sent', 3), ('rep-re-sen-ta-tion', 4), '', ('rep-re-sen-ta-tive', 3), ''), (('le-git-i-mise', 2), ('le-git-i-ma-cy', 2), '', ('le-git-i-mate', 2), ''), (('ap-praise', 2), ('ap-prais-al', 2), '', '', ''), (('as-sume', 2), ('as-sump-tion', 2), '', ('as-sumed', 2), ''), (('ex-clude', 2), ('ex-clu-sion', 2), '', ('ex-clu-sive', 2), '')], 'note': 'Representative here is the statistical sense - resembling the population - and not the political one. You met the planning sense of representation in cycle 1 of this unit, which is a third meaning again. Context decides, and the exam knows it.'},
    task='Complete each sentence with a word from this cycle, in the right form.',
    items=[
     ('A sample where people chose themselves is ____________.', None,
      'self-selected'),
     ('The share of those invited who replied is the response ____________.', None,
      'rate'),
     ('The way a question is put, which shapes the answer, is the ____________.', None,
      'framing'),
     ('A choice between two options when others exist is a false ____________.', None,
      'dichotomy'),
     ('The line round what the model counts is the model ____________.', None,
      'boundary'),
     ('The noun from legitimate is ____________.', None,
      'legitimacy'),
     ('A cost a scheme produces, in appraisal language, is a ____________.', None,
      'disbenefit'),
     ('A sample resembling the population is ____________.', None,
      'representative'),
    ]),
   builder=dict(
    skill='Task 2: the process objection',
    qkind='skill',
    explain='Every Task 2 prompt invites you to argue about an answer, and on almost any policy question there is a stronger move available: arguing about the process that produced it. The scheme may be good or bad, but if the consultation offered two options and three per cent of young people replied, then the result tells you about the process rather than about the scheme, and saying so is not evasion - it is the most testable claim in the essay. Three conditions make it work and all three must be met, or it reads as a candidate avoiding the question. First, be specific: name the defect, with a figure if you have one, rather than saying people were not properly consulted. Second, say what difference it made - would the answer plausibly have been different, and in which direction. And third, still answer the original question, because the rubric asked for your opinion on the scheme and a process objection does not discharge that. Done properly it occupies one body paragraph, usually the third, and it is the paragraph that makes an essay look like thinking rather than recital.',
    worked=[
      'PROMPT: pedestrianising town centres improves life for residents. To what extent do you agree?',
      'The ordinary essay: benefits, drawbacks, a position.',
      'The process paragraph: “The evidence usually cited is consultation support, and consultations of this kind are self-selected: in the case described above, forty-one per cent of owners over sixty replied and three per cent of under-25s.”',
      'What difference it made: “Since the two groups differ most on exactly this question, a representative sample would plausibly have produced a different answer, and in a predictable direction.”',
      'Still answering: “I none the less agree with the claim, on grounds that do not depend on consultation at all - severance, and the fact that the street is now crossable by a child.”',
      'Three sentences, and the third is what stops it being an evasion.',
     ],
    figure={'kind': 'matrix', 'teaches': 'comparison', 'title': 'Three conditions for a process objection', 'sub': 'cycle 5 · fill the right-hand column from this unit', 'cols': ['The condition', 'Your version'], 'rows': ['Name the defect, with a figure', 'Say what difference it plausibly made', 'Say in which direction', 'Answer the original question anyway'], 'cells': [['not "they were not consulted properly"', '3% of under-25s replied'], ['would the answer have differed?', ''], ['which way, and why that way?', ''], ['the rubric asked for your opinion', '']], 'note': 'Three blanks. An objection that fills only the first row is a complaint; one that fills all four is an argument, and the difference is about forty words.'},
    task='For each process objection write STRONG or WEAK, and why in three words.',
    items=[
     ('“The consultation was not properly carried out.”', None,
      'weak, no specifics'),
     ('“Three per cent of under-25s replied, and they are the group most affected.”', None,
      'strong, figure and relevance'),
     ('“The model stopped at the junction, so the delay moved rather than fell.”', None,
      'strong, named and directional'),
     ('“People are always against change at first.”', None,
      'weak, not about process'),
     ('“The form offered two options and the submissions included a third.”', None,
      'strong, specific and checkable'),
     ('“The council had already decided.”', None,
      'weak, asserted not shown'),
    ],
    note='The three strong ones all name something checkable and say what it changed. The three weak ones are all true-sounding and unfalsifiable, which is what makes them weak: an objection nobody can test is an objection nobody has to answer.'),
   figures=[
    {'kind': 'skeleton', 'teaches': 'text-structure', 'title': 'Six hundred words, six functions', 'sub': 'cycle 5 · the last passage of the unit', 'paras': [('A', 'context', 'What the appraisal concluded'), ('B', 'definition', 'What a model boundary is'), ('C', 'claim', 'The boundary decided the answer'), ('D', 'evidence', 'The junction, and the next junction'), ('E', 'concession', 'Nothing dishonest happened'), ('F', 'consequence', 'What to ask of any appraisal')], 'note': 'E is the concession and it is the one that makes the passage persuasive: a process objection that accuses somebody of bad faith is much weaker than one that does not need to.'},
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 5 · the matching-information set turns on these', 'left': 'THE QUESTION SAYS', 'right': 'THE PASSAGE WROTE', 'pairs': [('the people who replied chose themselves', 'a self-selected sample', 'nominalisation'), ('the model ignored it', 'it lay outside the model boundary', 'reformulation'), ('the delay moved elsewhere', 'the disbenefit was displaced', 'hypernym'), ('nobody was dishonest', 'no impropriety is alleged', 'negation'), ('the question shaped the answer', 'framing effects', 'nominalisation'), ('the council asked residents', 'residents were consulted', 'voice')], 'note': 'The third is the displacement idea from unit 26 cycle 5, arriving in a different subject and a different word. That is what a syllabus is for.'},
   ],
   advice='A process objection is the strongest unused move in Task 2 and it is easy to do badly. Name the defect with a figure, say what difference it plausibly made and in which direction, and then answer the original question anyway. Without the last of those three it reads as a candidate who did not want to take a position, which is the one thing Task Response cannot forgive.',
   debrief=dict(
    read=[
      'The matching-information question about the next junction has two candidate paragraphs: one describes the modelling and one draws the conclusion from it.',
      'The short-answer question about the boundary has a three-word answer in the passage and a nine-word one. The limit tells you which, as it did in cycle 1.',
      'One statement presents paragraph E - nothing dishonest happened - as the writer’s conclusion. It is a concession, and by now you have met that trap in five units.',
     ],
    listen=[
      'The speaker gives two response rates and one of them is for a different consultation.',
      'She concedes the method and objects to the boundary, and the question asks what she objects to.',
     ]),
   outside='Arguing about how a decision was reached, rather than about the decision, is what lawyers, auditors and good committee members do, and it is the only kind of argument that can reopen something already settled. It is also the easiest to do badly, which is why it is the last thing this unit teaches.',
   recycled=[
      'model boundary',
      'evidence',
      'legitimacy',
      'representative',
      'framing',
      'disbenefit',
      'appraisal',
     ],
   read=[
    dict(preview=True,
         heading='What a model boundary is',
         kind='Explainer box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='The last passage of the unit is about what a transport model leaves out, and the phrase for it is the one word nobody defines. Two hundred words.',
         paras=[
          'A model boundary is the line drawn round what the model counts. Everything inside it is represented; everything outside it is assumed not to change. Drawing the boundary is the first decision in any modelling exercise and it is almost never discussed, because it is technical and because it happens before the interesting arguments start.',
          'The boundary decides the answer more often than the data does. A model of a junction that stops at the junction will show that widening it reduces delay. A model of the catchment will show the same cars arriving three minutes earlier at the next junction, which was outside the first boundary and inside the second.',
          'Nothing dishonest need have happened. The modeller was asked about a junction and modelled a junction, and the consultation then reports that delay falls, which is true inside the boundary and false for anybody driving through it.',
          'So the question worth asking of any model is not whether it is accurate but where its boundary is, and what was assumed constant on the other side of the line.',
         ],
         items=[
          ('The line drawn round what a model counts is the model ____________.',
           None, 'boundary',
           'Paragraph 1: everything outside it is assumed not to change.'),
          ('A model of a junction that stops at the junction will show that widening it reduces ____________.',
           None, 'delay',
           'Paragraph 2, where the same cars reach the next junction earlier.'),
          ('The question worth asking is not whether a model is accurate but where its ____________ is.',
           None, 'boundary',
           'Paragraph 4, with what was assumed constant.'),
         ]),
    dict(heading='The journeys the model did not count',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given, sentence completion and short answer',
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
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'],
           1,
           'Journeys crossing the edge are treated as arrivals and '
           'departures.',
           {0: 'Paragraph 1 says the gap is not bad arithmetic.', 2: 'Paragraph 3 is about which trip types are counted.', 3: 'Paragraph 4 explains why that omission matters.'}),
          ('Which paragraph states the limits of local knowledge?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'],
           1,
           'Residents\u2019 predictions about trade have a poor record.',
           {0: 'Paragraph 4 explains why the omission matters.', 2: 'Paragraph 6 compares the two kinds of evidence.', 3: 'Paragraph 7 separates legitimacy from accuracy.'}),
          ('Which paragraph separates legitimacy from accuracy?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'],
           2, 'A trade between different people is not a calculation.',
           {0: 'Paragraph 5 states the limits of local knowledge.', 1: 'Paragraph 6 compares the two kinds of evidence.', 3: 'Paragraph 8 sets out the procedural repair.'}),
          ('The writer believes transport models are badly built.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1 calls them sound, well-calibrated and '
           'competently run.',
           {0: 'Yes would need bad models; paragraph 1 calls them '
               'sound and well calibrated.', 2: 'Not Given is wrong because the models are rated.'}),
          (
           'The writer believes residents are good at predicting the '
           'effect on trade.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 5 says their record on this is poor.',
           {0: 'Yes would need accuracy; paragraph 5 calls their '
               'record poor.', 2: 'Not Given is wrong because their predictions are '
               'compared with outcomes.'}),
          ('Models are built from household surveys recording '
           '____________ journeys.', None, 'purposeful',
           'Paragraph 3: commuting, school, shopping and business.'),
          (
           'Besides the trip types, what should be published on the '
           'first page?', None, 'the model boundary',
           'The final paragraph, as part of a procedural repair.')])],
   listen=[
    dict(heading='A planner and a resident disagree', part='Part 4',
         task='A recorded exchange · multiple choice and sentence completion', band='l4', qtype='Questions 62-67',
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
           'Checked by somebody who does it for a living.',
           {0: 'Age of the model is not what he concedes.', 2: 'Complexity is not his concession.', 3: 'The model was open enough to be checked.'}),
          ('His objection concerns the model ____________.', None,
           'boundary', 'The traffic appears on a road outside it.'),
          (
           'The boundary is where it is because of a ____________ '
           'decision in 2019.', None, 'funding',
           'Because that is where the survey data ends.'),
          ('The second weakness she names is',
           ['long commutes', 'short walking trips by children and older people', 'freight', 'bus journeys'],
           1, 'Under-reported in surveys and too short for the zones.',
           {0: 'Long commutes are what the model counts well.', 2: 'Freight is not among the weaknesses she names.', 3: 'Bus journeys are purposeful trips the surveys capture.'}),
          ('What concession does she ask of him?',
           ['To support the scheme', 'That residents\u2019 trade predictions were wrong', 'To stop objecting', 'To fund a survey'],
           1,
           'Takings rose eleven per cent after the association '
           'predicted closures.',
           {0: 'She asks for a concession, not for support.', 2: 'She does not ask him to stop objecting.', 3: 'Funding a survey is not what she asks of him.'}),
          ('What does she agree to publish from now on?',
           ['All the data', 'The boundary and the trip types on the first page', 'A new model', 'The funding decision'],
           1, 'Which takes a paragraph and would have saved two years.',
           {0: 'All the data is more than she undertakes to publish.', 2: 'No new model is promised.', 3: 'The funding decision is explained, not published.'})])],
   speak=dict(
    part='Part 3', focus='Evidence and local knowledge',
    sounds=[('Phrasal verbs stress the particle, not the verb: the scheme fell '
             'THROUGH, they pulled it DOWN, the plan was brought FORward. '
             'Stressing the verb sounds like a translation.'),
            ('When the object is a pronoun it goes in the middle: they pulled '
             'it down, never they pulled down it. The rhythm will tell you '
             'before the grammar does.'),
            ('Practise the planning verbs of this unit inside sentences: the '
             'application was turned DOWN, the street was closed OFF, the row '
             'dragged ON for years.'),
            ('A separable verb with a long object keeps the particle at the '
             'end or moves it, and both are correct: they turned the '
             'application down, they turned down the application. Say each and '
             'keep the one that fits the rhythm you are in.'),
            ('Record ninety seconds on how a city should grow. Mark your '
             'phrasal verbs and check that the particle carried the stress.')],
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
         model65=[
                  'Some people say planning decisions should be made '
                  'by experts rather than by residents. I think both '
                  'are needed, for different parts of the decision.',
                  'Experts have knowledge residents do not. Traffic '
                  'models, drainage calculations and the long-term '
                  'cost of servicing new areas require training to '
                  'produce and to read. Residents also tend to '
                  'underestimate how much new building a growing town '
                  'needs.',
                  'But residents know things experts do not. They know '
                  'where a junction is dangerous at four in the '
                  'afternoon and which street floods. Their knowledge '
                  'is local and specific, and plans made without it '
                  'often fail in small ways that could have been '
                  'avoided.',
                  'I think experts should decide what the options are '
                  'and what each would cost, and residents should '
                  'decide which option the town prefers. Keeping the '
                  'two separate also makes the decision honest: '
                  'residents cannot be blamed for a technical error, '
                  'and experts cannot present a preference as a '
                  'calculation.',
                  ],
         gap65=[
                'It says which predictions residents are reliably good '
                'at and which they are reliably poor at, rather than '
                'crediting local knowledge in general.',
                'It identifies what the models do not model, which is '
                'where the two kinds of knowledge actually meet.',
                'It explains why the division of labour it proposes '
                'makes the decision auditable.',
                ],
         criterion=[('Rejecting the premise both sides share',
                     'Task Response'),
                    ('Concessions that cost something', 'Task Response'),
                    ('Dividing the decision by type of question',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    ref='L26',
    context=[
      'From the passage you have just read:',
      'This section does not dispute the appraisal’s arithmetic, which is sound; nor is anything here an allegation of bad faith. The argument is about the boundary, and it has two parts. The first concerns what was assumed constant; the second concerns who was asked. I take them in turn, and leave aside the question of cost, which is a separate argument and a weaker one.',
     ],
    notice=[
     ('Find the two things the writer explicitly sets aside.', None,
      'the arithmetic; the question of cost'),
     ('What does the writer promise about structure, and in how many words?', None,
      'it has two parts, and I take them in turn - eleven words'),
    ],
    noticetask='Answer both from the paragraph above, which you met earlier in this cycle.',
    contrast='Metadiscourse is writing about your own writing, and used sparingly it is worth a great deal in Task 2: it tells a marker you have a structure before they have read it. The three moves are announcing (this essay argues that, two considerations are decisive), positioning (the first of these, having established X I turn to Y) and limiting (I leave aside, nothing here turns on). The third is the one nobody uses and the one that most impresses, because it shows you can see the edge of your own claim. Two cautions: three such sentences in a 260-word essay is plenty, and discuss takes no preposition - discuss the question, never discuss about it.',
    task2='Rewrite each as metadiscourse.',
    items2=[
     ('I am going to give two reasons.', None,
      'Two considerations are decisive, and I shall take them in turn.'),
     ('Correct: In this essay I will discuss about two reasons.', None,
      'In this essay I shall discuss two reasons.'),
     ('I am not going to talk about cost.', None,
      'I leave aside the question of cost, which is a separate argument.'),
     ('The exact number does not matter to my argument.', None,
      'Nothing here turns on the exact figure.'),
    ],
    task3='Now write the opening of a Task 2 on the consultation in this cycle. Announce your thesis, say how many considerations you will give, and set one thing aside explicitly. Three sentences, about sixty words, and no more metadiscourse than that.',
    items3=8,
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
