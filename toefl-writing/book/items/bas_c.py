# -*- coding: utf-8 -*-
"""Build a Sentence - families 7 to 12 (items 51-100)."""

HOW = ('One sentence is complete; the reply has its words out of order. Move '
       'them into a reply that is both grammatical and a sensible answer to '
       'the cue. No partial credit.')

SETS = [

# ====================================================== family 7
{
 'id': 'BAS 051–058', 'task': 'BUILD A SENTENCE', 'time': '8 items',
 'function': 'Family 7 of 12 — comparison',
 'payload': {
   'Strategy': 'most arguments are comparisons; say precisely how much more',
   'Grammar': 'comparatives, superlatives, equatives, correlatives, so/such',
   'Vocabulary': 'modifiers of degree: far, slightly, nowhere near, by far',
   'Convention': 'comparing like with like, and finishing the comparison',
 },
 'intro': [HOW,
   'Two things earn marks here. One is the grammar of the comparison itself. '
   'The other is the modifier in front of it: a writer who says ',
   'slightly better rather than better is being precise, and precision is '
   'what the band-5 descriptor is asking for.'],
 'preview': [
  ('P1', 'How much more?', [
     'Put these in order from smallest difference to largest:',
     ('mono', ['far better · slightly better · no better · '
               'marginally better · vastly better']),
   ]),
  ('P2', 'Finish the comparison', [
     'Each of these is incomplete in a way that would cost you a mark. What '
     'is missing?',
     ('mono', ['(a) The online version is clearer.',
               '(b) This method is more reliable than the other one is.',
               '(c) The train costs more than the bus.']),
     ('note', 'Only one of the three is genuinely faulty. Decide which, and '
              'why the other two are acceptable.'),
   ]),
  ('P3', 'Like with like', [
     'What is wrong with this sentence, and what is it accidentally comparing?',
     ('mono', ['The results of this trial were better than the first study.']),
   ]),
 ],
 'items': [
  (51, 'comparative + than', 'Is the new library quieter?',
   ['It', 'is', 'much quieter', 'than'],
   'It is much quieter than the old reading room.',
   'the old reading room.',
   'much, far and a great deal all modify a comparative. very cannot: very '
   'quieter is impossible.'),
  (52, 'superlative + of', 'Which module was hardest?',
   ['Statistics', 'was', 'by far', 'the hardest'],
   'Statistics was by far the hardest of the four.',
   'of the four.',
   'by far is the standard intensifier for a superlative. Use of for a group '
   'you can count, in for a place: the hardest of the four, the hardest in '
   'the department.'),
  (53, 'as … as', 'Is the online version any good?',
   ['It', 'is not as clear', 'as', 'the printed one'],
   'It is not as clear as the printed one, but it is free.',
   'but it is free.',
   'as … as for equality, not as … as for a shortfall. The second as '
   'is obligatory — dropping it is a very common slip.'),
  (54, 'the more … the more', 'Does planning really help?',
   ['The more', 'you', 'the faster', 'plan'],
   'The more you plan, the faster you write.',
   'you write.',
   'Two comparatives locked together, each with the. No that, and the comma '
   'between them is required.'),
  (55, 'modified comparative', 'Is the second draft better?',
   ['It', 'is', 'slightly', 'better'],
   'It is slightly better, but not enough to pass.',
   'but not enough to pass.',
   'slightly, marginally and a little scale the comparison down. Without one '
   'of them better is an unqualified claim, and unqualified claims are easy '
   'to attack.'),
  (56, 'comparing two clauses', 'Which costs more, the bus or the train?',
   ['The train', 'costs more', 'than', 'the bus does'],
   'The train costs more than the bus does on this route.',
   'on this route.',
   'Repeating the auxiliary (than the bus does) makes the comparison explicit '
   'and is standard in careful writing.'),
  (57, 'would rather', 'Shall we meet on Monday?',
   ['I', 'would', 'rather', 'meet', 'on Tuesday'],
   'I would rather meet on Tuesday if that suits you.',
   'if that suits you.',
   'would rather takes a bare infinitive: rather meet, never rather to meet. '
   'prefer takes to: I would prefer to meet.'),
  (58, 'so … that', 'Why did you leave the lecture?',
   ['The room', 'was', 'so crowded', 'that'],
   'The room was so crowded that I could not hear a word.',
   'I could not hear a word.',
   'so + adjective + that; such + noun phrase + that. It was such a crowded '
   'room that … is the other half of the pair.'),
 ],
 'followup': [
  ('F1', 'Scale the claim', [
     'Rewrite the bare claim three times, so that it is (a) barely true, '
     '(b) clearly true, (c) overwhelmingly true.',
     ('mono', ['Online teaching is more flexible than classroom teaching.']),
   ]),
  ('F2', 'Error autopsy', [
     ('mono', ['(a) This method is more easier to apply.',
               '(b) She is the most tallest in the group.',
               '(c) The weather here is worse than London.',
               '(d) I would rather to stay another night.']),
   ]),
  ('F3', 'Put it to work', [
     'The discussion task is almost always a comparison in disguise. Write one '
     'sentence for each, using a modified comparative.',
     ('mono', ['(a) Which matters more for learning: class size or teacher quality?',
               '(b) Is a short deadline better or worse for the quality of work?']),
   ]),
 ],
 'keys': [
  ('P1', [['no better < marginally < slightly < far < vastly.'],
          ['Keep this ladder in your head. Most candidates own exactly two '
           'rungs of it — ', ('better', {'italic': True}), ' and ',
           ('much better', {'italic': True}),
           ' — and the gap shows immediately in the vocabulary score.']]),
  ('P2', [[('(a)', {'bold': True}), ' is the faulty one: clearer ',
           ('than what?', {'italic': True}),
           ' A comparative with no second term leaves the reader to guess.'],
          ['(b) is fine — repeating ', ('is', {'italic': True}),
           ' is optional but careful. (c) is fine; the second term is there.']]),
  ('P3', [['It compares ', ('results', {'italic': True}), ' with a ',
           ('study', {'italic': True}),
           '. You need results with results: ',
           ('better than those of the first study', {'italic': True}), ', or ',
           ('better than the first study’s', {'italic': True}), '.'],
          ['This is the commonest comparison error in academic writing, and it '
           'survives into very advanced work.']]),
  ('F1', [['(a) Online teaching is marginally more flexible than classroom '
           'teaching.'],
          ['(b) Online teaching is considerably more flexible …'],
          ['(c) Online teaching is far more flexible …, and nowhere near '
           'as constrained by timetabling.'],
          ['Same claim, three different levels of commitment. Choosing the '
           'right one is an argumentative decision, not a stylistic one.']]),
  ('F2', [['(a) → easier, or more easy to apply. Never both markers.'],
          ['(b) → the tallest.'],
          ['(c) → worse than it is in London, or worse than London’s. '
           'As written it compares weather with a city.'],
          ['(d) → I would rather stay. No ', ('to', {'italic': True}),
           ' after would rather.']]),
  ('F3', [['(a) Teacher quality matters considerably more than class size, at '
           'least above a certain threshold.'],
          ['(b) A short deadline is marginally better for focus but far worse '
           'for revision.'],
          ['The modifier does the arguing: it concedes something small to '
           'claim something large.']]),
 ],
},

# ====================================================== family 8
{
 'id': 'BAS 059–066', 'task': 'BUILD A SENTENCE', 'time': '8 items',
 'function': 'Family 8 of 12 — emphasis and information structure',
 'payload': {
   'Strategy': 'the end of the sentence is the loudest place; put the point there',
   'Grammar': 'it-clefts, wh-clefts, fronting, negative inversion, there, end weight',
   'Vocabulary': 'nothing new — this family rearranges what you already have',
   'Convention': 'inversion after a fronted negative is obligatory, not optional',
 },
 'intro': [HOW,
   'English has fixed word order, so emphasis has to be built rather than '
   'spoken. These are the devices that build it. They are also the clearest '
   'single signal of a writer operating above band 3, because they require '
   'you to decide what your sentence is actually about.'],
 'preview': [
  ('P1', 'Move the spotlight', [
     'The plain sentence is: ',
     ('mono', ['The timing put me off.']),
     'Rewrite it twice, once beginning It was … and once beginning What '
     '… . What does each version emphasise?',
   ]),
  ('P2', 'The obligatory inversion', [
     'One of these is wrong. Which, and what rule has been broken?',
     ('mono', ['(i)  Never before had I seen such a crowd.',
               '(ii) Never before I had seen such a crowd.']),
   ]),
  ('P3', 'Why the long thing goes last', [
     ['Which of these reads better, and what principle decides it?'],
     ('mono', ['(a) The committee made the report it had suppressed for a',
               '    year public last week.',
               '(b) The committee made public last week the report it had',
               '    suppressed for a year.']),
   ]),
 ],
 'items': [
  (59, 'it-cleft', 'Was it the cost that put you off?',
   ['It', 'was', 'the timing', 'that'],
   'It was the timing that put me off, not the cost.',
   'put me off, not the cost.',
   'The it-cleft isolates one element and contrasts it with another. It is '
   'the natural way to correct somebody without contradicting them flatly.'),
  (60, 'wh-cleft', 'What would actually help?',
   ['What', 'we', 'need', 'most'],
   'What we need most is a longer deadline.',
   'is a longer deadline.',
   'The wh-cleft delays the point to the end and builds a little suspense. '
   'Very common in spoken argument, and effective in a discussion post.'),
  (61, 'fronted adverbial', 'Where did you find the file?',
   ['At the bottom', 'of the drawer', 'the missing folder'],
   'At the bottom of the drawer the missing folder was lying untouched.',
   'was lying untouched.',
   'Fronting the place phrase sets the scene before the thing appears. No '
   'inversion is required here, because the fronted element is not negative.'),
  (62, 'negative inversion', 'Had you ever seen anything like it?',
   ['Never', 'before', 'had', 'I'],
   'Never before had I seen such a crowd.',
   'seen such a crowd.',
   'Front a negative adverbial and the subject and auxiliary must swap. '
   'Rarely, seldom, no sooner, under no circumstances and not only all do '
   'this.'),
  (63, 'there-existential', 'Is there any point applying?',
   ['There', 'are', 'still', 'two places'],
   'There are still two places left on the course.',
   'left on the course.',
   'there holds the subject slot so the real subject can arrive later, where '
   'new information belongs. The verb agrees with the real subject: two '
   'places are.'),
  (64, 'neither do I', 'I don’t think the deadline is realistic.',
   ['Neither', 'do', 'I'],
   'Neither do I, and nor does my supervisor.',
   'and nor does my supervisor.',
   'Agreeing with a negative takes neither or nor plus inversion. So do I is '
   'the positive equivalent.'),
  (65, 'emphatic do', 'You never replied to my message.',
   ['I', 'did', 'reply'],
   'I did reply, but it bounced back.',
   'but it bounced back.',
   'do inserted into a positive statement contradicts an assumption. It is '
   'the politest way to say you are wrong, because it argues with the belief '
   'rather than the person.'),
  (66, 'end weight', 'What did the committee do about the report?',
   ['The committee', 'made public', 'last week'],
   'The committee made public last week the report it had suppressed for a year.',
   'the report it had suppressed for a year.',
   'The object is long, so it moves to the end and the short adverbial jumps '
   'ahead of it. English consistently prefers short before long.'),
 ],
 'followup': [
  ('F1', 'Three ways to say one thing', [
     'Rewrite as (a) an it-cleft, (b) a wh-cleft, (c) with negative inversion.',
     ('mono', ['The lack of consultation annoyed people most.']),
   ]),
  ('F2', 'Error autopsy', [
     ('mono', ['(a) Not only she was late, but she forgot the files.',
               '(b) It was the timing what put me off.',
               '(c) There is two places left.',
               '(d) Rarely I have seen such a poor turnout.']),
   ]),
  ('F3', 'Put it to work', [
     'Open a discussion response with each device, on the question: should '
     'attendance at lectures be compulsory?',
     ('mono', ['(a) an it-cleft', '(b) a wh-cleft', '(c) emphatic do']),
   ]),
 ],
 'keys': [
  ('P1', [['It was the timing that put me off. — isolates ',
           ('the timing', {'italic': True}),
           ' and implies a contrast with something else.'],
          ['What put me off was the timing. — holds the answer back and '
           'lands it at the end.'],
          ['Both move the same words; they differ in where the reader’s '
           'attention is when the key word arrives.']]),
  ('P2', [[('(ii)', {'bold': True}), '. A fronted negative forces inversion: ',
           ('had I', {'italic': True}), ', not ', ('I had', {'italic': True}),
           '. This is not a stylistic preference; the uninverted version is '
           'simply ungrammatical.']]),
  ('P3', [[('(b)', {'bold': True}), '. End weight: a thirteen-word object '
           'should not sit between ', ('made', {'italic': True}), ' and ',
           ('public', {'italic': True}),
           ', where it makes the reader hold the verb open far too long. '
           'Short elements first, heavy ones last.']]),
  ('F1', [['(a) It was the lack of consultation that annoyed people most.'],
          ['(b) What annoyed people most was the lack of consultation.'],
          ['(c) Nothing annoyed people more than the lack of consultation. '
           '(Or: Not since the last reorganisation had feeling run so high.)']]),
  ('F2', [['(a) → Not only was she late … . Inversion is obligatory '
           'after fronted not only.'],
          ['(b) → that put me off. An it-cleft takes ',
           ('that', {'italic': True}), ' or ', ('who', {'italic': True}),
           ', never ', ('what', {'italic': True}), '.'],
          ['(c) → There are two places. The verb agrees with ',
           ('two places', {'italic': True}), ', not with ',
           ('there', {'italic': True}), '.'],
          ['(d) → Rarely have I seen … .']]),
  ('F3', [['(a) It is the weakest students, not the strongest, that a '
           'compulsory register actually reaches.'],
          ['(b) What compulsory attendance measures is presence, not learning.'],
          ['(c) Lectures do matter; what does not follow is that attendance '
           'should be enforced.'],
          ['All three put the position in the strongest slot in the '
           'sentence.']]),
 ],
},

# ====================================================== family 9
{
 'id': 'BAS 067–074', 'task': 'BUILD A SENTENCE', 'time': '8 items',
 'function': 'Family 9 of 12 — coordination and correlatives',
 'payload': {
   'Strategy': 'joining clauses correctly is the floor below which nothing else counts',
   'Grammar': 'and/but/so, not only, either/neither, both, parallelism, ellipsis',
   'Vocabulary': 'the correlative pairs and what each signals',
   'Convention': 'the comma splice, and why examiners treat it as consequential',
 },
 'intro': [HOW,
   'This family contains the single error most likely to pull a response from '
   'band 4 to band 3: the comma splice. It also contains parallelism, which '
   'is invisible when you get it right and conspicuous when you do not.'],
 'preview': [
  ('P1', 'Comma or no comma', [
     'Which of these needs a comma before the conjunction, and what is the '
     'rule?',
     ('mono', ['(a) I got there late ___ but they still let me in.',
               '(b) I got there late ___ and apologised.']),
   ]),
  ('P2', 'The splice', [
     'What is wrong with this, and give three different repairs.',
     ('mono', ['The seminar was cancelled, nobody booked the room this week.']),
   ]),
  ('P3', 'Make them match', [
     'Why does this list feel wrong, and what is the minimum fix?',
     ('mono', ['The role involves running sessions, records, and to write a',
               'short report.']),
   ]),
 ],
 'items': [
  (67, 'and / but / so', 'Did you manage to see the exhibition?',
   ['I', 'got there late', 'but', 'they'],
   'I got there late, but they still let me in.',
   'still let me in.',
   'Two full clauses joined by but take a comma before the conjunction. One '
   'clause with two verbs does not.'),
  (68, 'not only … but also', 'Was the course worth it?',
   ['It', 'improved', 'not only', 'my writing'],
   'It improved not only my writing but also my confidence.',
   'but also my confidence.',
   'What follows not only and what follows but also must be the same kind of '
   'thing — here, two noun phrases.'),
  (69, 'neither … nor', 'Who is covering the class?',
   ['Neither', 'the tutor', 'nor', 'the assistant'],
   'Neither the tutor nor the assistant is available on Friday.',
   'is available on Friday.',
   'The verb agrees with the nearer subject: assistant is. With neither the '
   'assistants nor the tutor, it would be tutor is.'),
  (70, 'both … and', 'Which campus has a gym?',
   ['Both', 'the north site', 'and', 'the south site'],
   'Both the north site and the south site have one.',
   'have one.',
   'both … and is always plural, unlike neither … nor.'),
  (71, 'parallel list', 'What does the role involve?',
   ['It involves', 'running sessions', 'keeping records', 'and'],
   'It involves running sessions, keeping records and writing a short report.',
   'writing a short report.',
   'Three gerunds. Mixing a gerund with an infinitive or a bare noun in the '
   'same list is the classic parallelism failure.'),
  (72, 'correlative inversion', 'Did the delay cause problems?',
   ['Not only', 'were', 'the parts', 'late'],
   'Not only were the parts late, but the invoice was wrong too.',
   'but the invoice was wrong too.',
   'When not only starts the sentence rather than sitting inside it, the '
   'inversion from family 8 applies.'),
  (73, 'ellipsis', 'Did both of you apply?',
   ['I', 'applied', 'and she', 'did'],
   'I applied and she did too.',
   'too.',
   'did stands in for applied. English prefers this to repeating the verb, '
   'and repeating it sounds laboured.'),
  (74, 'splice repaired', 'Why is the room locked?',
   ['The seminar was cancelled', 'so', 'nobody', 'booked'],
   'The seminar was cancelled, so nobody booked the room this week.',
   'the room this week.',
   'so is a coordinating conjunction and can join two clauses with a comma. '
   'A comma on its own cannot.'),
 ],
 'followup': [
  ('F1', 'Splice hunt', [
     'Three of these four are comma splices. Find them and repair each a '
     'different way.',
     ('mono', ['(a) The library closes at six, the lab stays open until ten.',
               '(b) The library closes at six, but the lab stays open.',
               '(c) I emailed twice, nobody replied.',
               '(d) It was raining, therefore we cancelled.']),
   ]),
  ('F2', 'Error autopsy', [
     ('mono', ['(a) Neither the students nor the tutor were informed.',
               '(b) He is good at both writing and to speak.',
               '(c) Not only the parts were late but also the invoice.',
               '(d) She likes reading, to swim and cycling.']),
   ]),
  ('F3', 'Put it to work', [
     'Write one sentence for each, on the topic of mandatory attendance.',
     ('mono', ['(a) using not only … but also',
               '(b) using a three-item parallel list',
               '(c) joining two clauses with so, correctly punctuated']),
   ]),
 ],
 'keys': [
  ('P1', [['(a) needs the comma — two independent clauses. (b) does not '
           '— one subject with two verbs.'],
          ['The test: can the words after the conjunction stand alone as a '
           'sentence? If yes, comma.']]),
  ('P2', [['Two independent clauses joined by nothing but a comma. Repairs: '
           'a full stop; a semicolon; or a conjunction (',
           ('so nobody booked', {'italic': True}), ').'],
          ['Examiners treat this as consequential because it signals that the '
           'writer cannot tell where one sentence ends — which is exactly '
           'the judgement the band descriptors are making.']]),
  ('P3', [['Three items in three different forms: a gerund, a bare noun, an '
           'infinitive. Minimum fix: make all three gerunds — ',
           ('running sessions, keeping records and writing a short report',
            {'italic': True}), '.']]),
  ('F1', [['(a), (c) and (d) are splices.'],
          ['(a) → full stop: The library closes at six. The lab stays '
           'open until ten.'],
          ['(c) → conjunction: I emailed twice, but nobody replied.'],
          ['(d) → semicolon: It was raining; therefore we cancelled. ',
           ('therefore', {'italic': True}), ' is an adverb, not a '
           'conjunction — it cannot join clauses on its own.'],
          ['(b) is correct as it stands.']]),
  ('F2', [['(a) → the tutor was informed. Agreement with the nearer '
           'subject.'],
          ['(b) → both writing and speaking.'],
          ['(c) → Not only were the parts late … .'],
          ['(d) → reading, swimming and cycling.']]),
  ('F3', [['(a) Compulsory attendance not only fails to raise attainment but '
           'also diverts staff time into registers.'],
          ['(b) A good lecture rewards attending, repays attention and '
           'justifies the hour; a poor one does none of the three.'],
          ['(c) Attendance is already recorded electronically, so the '
           'administrative argument for a formal rule has largely '
           'disappeared.']]),
 ],
},

# ====================================================== family 10
{
 'id': 'BAS 075–082', 'task': 'BUILD A SENTENCE', 'time': '8 items',
 'function': 'Family 10 of 12 — subordination and connectors',
 'payload': {
   'Strategy': 'subordination tells the reader which of two facts you think matters',
   'Grammar': 'concession, contrast, purpose, result, time, reason',
   'Vocabulary': 'although / despite / whereas / given that / so that',
   'Convention': 'conjunction, preposition or adverb — and the punctuation each takes',
 },
 'intro': [HOW,
   'Most of the trouble in this family comes from one confusion: although is '
   'a conjunction and takes a clause, despite is a preposition and takes a '
   'noun, and however is an adverb and takes neither. Sorting those three out '
   'removes a whole class of error.'],
 'preview': [
  ('P1', 'Three words, three grammars', [
     'Complete each with the same idea, and notice what has to change:',
     ('mono', ['Although ______________ , nearly two hundred came.',
               'Despite  ______________ , nearly two hundred came.',
               'It rained. ______________ , nearly two hundred came.']),
   ]),
  ('P2', 'Which half matters?', [
     ['These report the same two facts. What is different about what the '
      'writer thinks?'],
     ('mono', ['Although the conference was too long, I learned a great deal.',
               'Although I learned a great deal, the conference was too long.']),
   ]),
  ('P3', 'Purpose or result?', [
     'Both use so that. Which is which, and what is the grammatical give-away?',
     ('mono', ['(a) I wrote again so that there would be a record.',
               '(b) The system went down, so that nobody could submit.']),
   ]),
 ],
 'items': [
  (75, 'concession', 'Did you enjoy the conference?',
   ['Although', 'it', 'was', 'too long'],
   'Although it was too long, I learned a great deal.',
   'I learned a great deal.',
   'although + clause. The main point is in the main clause, always — '
   'which is why the concession goes first.'),
  (76, 'despite + noun', 'How did the event go in that weather?',
   ['Despite', 'the rain', 'nearly two hundred'],
   'Despite the rain, nearly two hundred people came.',
   'people came.',
   'despite and in spite of take a noun or an -ing form, never a clause. '
   'Despite it rained is the error; despite the rain or despite its raining.'),
  (77, 'purpose', 'Why did you email the office twice?',
   ['I wrote again', 'so that', 'there would be', 'a record'],
   'I wrote again so that there would be a record of the request.',
   'of the request.',
   'Purpose clauses take a modal: so that there would be, so that we can. '
   'Without a modal it reads as a result instead.'),
  (78, 'result', 'What happened when the server failed?',
   ['The system went down', 'with the result', 'that', 'nobody'],
   'The system went down, with the result that nobody could submit on time.',
   'could submit on time.',
   'A result clause reports what did happen, so it is set off by a comma and '
   'takes no modal of intention.'),
  (79, 'time clause', 'Were you still there when it finished?',
   ['By the time', 'the talk', 'ended', 'most of us'],
   'By the time the talk ended, most of us had already left.',
   'had already left.',
   'by the time pairs naturally with the past perfect: the leaving happened '
   'before the ending.'),
  (80, 'reason', 'Why was the deadline moved?',
   ['Given that', 'half the class', 'was', 'ill'],
   'Given that half the class was ill, the tutor moved it.',
   'the tutor moved it.',
   'given that introduces a reason the reader is expected to accept. It is '
   'more formal than because and very useful in a discussion post.'),
  (81, 'contrast', 'Are the two campuses similar?',
   ['The north site', 'is modern', 'whereas', 'the south site'],
   'The north site is modern, whereas the south site dates from 1890.',
   'dates from 1890.',
   'whereas and while mark a straight contrast between two equally true '
   'things. Unlike although, neither half is being conceded.'),
  (82, 'conjunctive adverb', 'Did the appeal succeed?',
   ['The appeal failed', 'however', 'the fee', 'was refunded'],
   'The appeal failed; however, the fee was refunded in the end.',
   'in the end.',
   'however cannot join two clauses. It needs a semicolon or a full stop in '
   'front of it and a comma after it. Therefore, moreover and nevertheless '
   'behave the same way.'),
 ],
 'followup': [
  ('F1', 'Swap the grammar', [
     'Rewrite each sentence twice, using the other two words.',
     ('mono', ['Although the fee was high, the course was worth it.',
               '  → despite …', '  → however …']),
   ]),
  ('F2', 'Error autopsy', [
     ('mono', ['(a) Despite the fee was high, I enrolled.',
               '(b) Although it was expensive, but I enrolled.',
               '(c) The fee was high, however I enrolled.',
               '(d) I saved for a year so that I could to afford it.']),
   ]),
  ('F3', 'Put it to work', [
     'Concede and then counter, in one sentence each, on: should museums '
     'charge for entry?',
     ('mono', ['(a) with although', '(b) with despite',
               '(c) with whereas']),
   ]),
 ],
 'keys': [
  ('P1', [['Although ', ('it rained', {'bold': True}),
           ' — a clause.'],
          ['Despite ', ('the rain', {'bold': True}),
           ' — a noun phrase.'],
          ['It rained. ', ('However', {'bold': True}),
           ', nearly two hundred came — a separate sentence.'],
          ['Three grammars for one idea. Choosing the wrong one is not a '
           'style error; it is a structural one, and it reads as such.']]),
  ('P2', [['The main clause carries the writer’s real view. In the first '
           'the conference was worth it; in the second it was not.'],
          ['Everything you put in an although-clause you are agreeing to give '
           'away. Make sure it is the part you can afford to lose.']]),
  ('P3', [['(a) is purpose — note ', ('would', {'italic': True}),
           ', and no comma. (b) is result — note the comma, and no '
           'modal.'],
          ['The give-away is the modal: intention needs one, consequence does '
           'not.']]),
  ('F1', [['Despite the high fee, the course was worth it.'],
          ['The fee was high; however, the course was worth it.'],
          ['Note that ', ('despite', {'italic': True}),
           ' forced the clause to become a noun phrase.']]),
  ('F2', [['(a) → Despite the high fee, or Although the fee was high.'],
          ['(b) → drop ', ('but', {'italic': True}),
           '. English allows one connector per join, not two.'],
          ['(c) → The fee was high; however, I enrolled.'],
          ['(d) → so that I could afford it. No ',
           ('to', {'italic': True}), ' after a modal.']]),
  ('F3', [['(a) Although free entry undoubtedly raises visitor numbers, it '
           'shifts the cost onto taxpayers who may never visit.'],
          ['(b) Despite the obvious appeal of free access, the museums that '
           'charge are the ones still able to fund conservation.'],
          ['(c) Entry charges deter casual visitors, whereas membership '
           'schemes deter only the occasional ones.']]),
 ],
},

# ====================================================== family 11
{
 'id': 'BAS 083–090', 'task': 'BUILD A SENTENCE', 'time': '8 items',
 'function': 'Family 11 of 12 — modality and hedging',
 'payload': {
   'Strategy': 'claim only as much as you can defend, and say how much that is',
   'Grammar': 'epistemic and deontic modals, perfect modals, hedging verbs',
   'Vocabulary': 'tend to, appear to, be likely to, be supposed to',
   'Convention': 'an unhedged generalisation is the easiest thing to attack',
 },
 'intro': [HOW,
   'Modality is how English marks the difference between what is, what might '
   'be, and what ought to be. In the discussion task it does something more '
   'specific: it lets you make a strong claim without making an absolute one, '
   'and an absolute claim is the one a reader will go after first.'],
 'preview': [
  ('P1', 'How sure?', [
     'Order these from least certain to most:',
     ('mono', ['must be · might be · could well be · is · '
               'is likely to be · may be']),
   ]),
  ('P2', 'Looking back', [
     'What is the difference between these, and what does each tell you about '
     'the form?',
     ('mono', ['(a) It must have gone to the wrong address.',
               '(b) It should have arrived on Monday.',
               '(c) It could have been lost in the post.']),
   ]),
  ('P3', 'Defend the claim', [
     ['Which of these is easier to attack, and why?'],
     ('mono', ['(a) Students ignore feedback.',
               '(b) Students tend to ignore feedback unless it arrives',
               '    before the next assignment.']),
   ]),
 ],
 'items': [
  (83, 'epistemic modal', 'Why hasn’t she replied?',
   ['She', 'might', 'still', 'be'],
   'She might still be away on fieldwork.',
   'away on fieldwork.',
   'might, may and could all express possibility. They are guesses about what '
   'is true, not statements about what is permitted.'),
  (84, 'deontic modal', 'What do I do if the alarm sounds?',
   ['You', 'should', 'leave', 'by the nearest exit'],
   'You should leave by the nearest exit without collecting anything.',
   'without collecting anything.',
   'Here should is about obligation, not probability. The same modal does '
   'both jobs, and only the context separates them.'),
  (85, 'perfect modal', 'The office never got my form.',
   ['It', 'must', 'have', 'gone'],
   'It must have gone to the wrong address.',
   'to the wrong address.',
   'modal + have + participle looks back at a past event and judges it. must '
   'have = the only explanation; might have = one explanation.'),
  (86, 'would for the hypothetical', 'Is a later deadline realistic?',
   ['An extra week', 'would', 'make', 'all the difference'],
   'An extra week would make all the difference to the quality.',
   'to the quality.',
   'would states a consequence in a world that does not yet exist. It is the '
   'main clause of an invisible conditional.'),
  (87, 'hedge: tend to', 'Do students use the drop-in sessions?',
   ['They', 'tend', 'to be busiest', 'in the weeks'],
   'They tend to be busiest in the weeks before a deadline.',
   'before a deadline.',
   'tend to converts an absolute claim into a tendency, which is almost '
   'always what you actually mean and is far harder to refute.'),
  (88, 'be supposed to', 'Wasn’t the result published last week?',
   ['It', 'was supposed', 'to appear', 'on Monday'],
   'It was supposed to appear on Monday, but nothing has been posted.',
   'but nothing has been posted.',
   'be supposed to reports an expectation and quietly implies it was not '
   'met. Very useful in a complaint, because it states the failure without '
   'accusing anyone of it.'),
  (89, 'had better', 'Shall I leave it until tomorrow?',
   ['You', 'had', 'better', 'send it tonight'],
   'You had better send it tonight, or you will miss the deadline.',
   'or you will miss the deadline.',
   'had better is stronger than should and carries a threat of consequences. '
   'Bare infinitive, and it is not a past tense despite the had.'),
  (90, 'be likely to', 'Will the funding be renewed?',
   ['It', 'is likely to', 'be', 'renewed'],
   'It is likely to be renewed, though nothing is confirmed.',
   'though nothing is confirmed.',
   'be likely to is a calibrated prediction: more than may, less than will. '
   'Note the passive infinitive after it.'),
 ],
 'followup': [
  ('F1', 'Calibrate', [
     'Rewrite the flat claim at four levels of confidence, using a different '
     'device each time.',
     ('mono', ['Smaller classes improve results.']),
   ]),
  ('F2', 'Error autopsy', [
     ('mono', ['(a) It must gone to the wrong address.',
               '(b) You had better to send it tonight.',
               '(c) She might can come on Friday.',
               '(d) The form was supposed be signed.']),
   ]),
  ('F3', 'Put it to work', [
     'Take a position you only half believe, and defend it in one hedged '
     'sentence.',
     ('mono', ['Homework should be abolished in primary schools.']),
   ]),
 ],
 'keys': [
  ('P1', [['might be < may be < could well be < is likely to be < must be < is.'],
          ['Note where ', ('must', {'italic': True}), ' sits. In English ',
           ('it must be true', {'italic': True}),
           ' is weaker than ', ('it is true', {'italic': True}),
           ': must signals that you are inferring rather than knowing.']]),
  ('P2', [['(a) a confident inference about what happened. (b) an expectation '
           'that was not met. (c) one possibility among several.'],
          ['All three are modal + have + past participle. The modal changes; '
           'the frame does not.']]),
  ('P3', [['(a). It claims all students always do this, so a single '
           'counterexample destroys it.'],
          ['(b) claims a tendency and names the condition under which it '
           'holds. It is a smaller claim and a far stronger position — '
           'and it reads as more expert, not less confident.']]),
  ('F1', [['Smaller classes may improve results.'],
          ['Smaller classes tend to improve results.'],
          ['Smaller classes are likely to improve results, at least in the '
           'early years.'],
          ['Smaller classes must improve results, given what we know about '
           'contact time. — note this last is an inference, and invites '
           'the question of what exactly we know.']]),
  ('F2', [['(a) → must have gone.'],
          ['(b) → had better send. No ', ('to', {'italic': True}), '.'],
          ['(c) → might be able to come. Two modals cannot stack.'],
          ['(d) → was supposed to be signed.']]),
  ('F3', [['Model: ', ('Homework in the early primary years appears to do '
                       'little for attainment and a good deal of harm to '
                       'attitudes, though the evidence thins out sharply '
                       'above the age of about nine.', {'italic': True})],
          ['Three hedges — ', ('appears to', {'italic': True}), ', ',
           ('little', {'italic': True}), ', ',
           ('though the evidence thins', {'italic': True}),
           ' — and the position is still perfectly clear. Hedging is not '
           'vagueness; it is accuracy about your own confidence.']]),
 ],
},

# ====================================================== family 12
{
 'id': 'BAS 091–100', 'task': 'BUILD A SENTENCE', 'time': '10 items',
 'function': 'Family 12 of 12 — noun phrase, agreement and determiners',
 'payload': {
   'Strategy': 'find the real head of the subject before you choose the verb',
   'Grammar': 'articles, quantifiers, agreement, appositives, adjective order',
   'Vocabulary': 'countable and uncountable pairs that trip writers up',
   'Convention': 'singular they, and possessives of people against things',
 },
 'intro': [HOW,
   'This last family collects the errors that survive longest. They are small, '
   'they are frequent, and because they cluster in the noun phrase they tend '
   'to arrive several at a time — which is exactly the accumulation the '
   'band descriptors are measuring.'],
 'preview': [
  ('P1', 'Find the head', [
     'Which word decides the verb in each?',
     ('mono', ['The list of corrections at the back ______ incomplete.',
               'The microscopes in the lab ______ not covered.',
               'Every seminar room ______ a projector.']),
   ]),
  ('P2', 'Countable or not', [
     'Which of these can take a and a plural?',
     ('mono', ['identification · form · advice · recommendation',
               'equipment · device · research · study']),
   ]),
  ('P3', 'Whose what', [
     ['Which sounds right, and what is the principle?'],
     ('mono', ['(a) the supervisor’s signature / the signature of the supervisor',
               '(b) the page’s bottom / the bottom of the page']),
   ]),
 ],
 'items': [
  (91, 'articles', 'Do I need to bring anything?',
   ['You', 'need', 'some', 'identification'],
   'You need some identification and a signed form.',
   'and a signed form.',
   'identification is uncountable: no a, no plural. form is countable and '
   'needs one. Mixing the two in a single sentence is a good test of control.'),
  (92, 'quantifiers', 'Were many people at the meeting?',
   ['Very few', 'students', 'turned up', 'and'],
   'Very few students turned up, and little interest was shown.',
   'little interest was shown.',
   'few with countables, little with uncountables. Note the difference '
   'between few (almost none, negative) and a few (some, positive).'),
  (93, 'agreement across a phrase', 'Are the corrections complete?',
   ['The list', 'of corrections', 'at the back'],
   'The list of corrections at the back is incomplete.',
   'is incomplete.',
   'The head is list, singular, however many nouns follow it. Delete the '
   'modifiers and the agreement becomes obvious.'),
  (94, 'collective noun', 'What did the committee decide?',
   ['The committee', 'was', 'divided', 'and'],
   'The committee was divided, and its members could not agree.',
   'its members could not agree.',
   'A collective noun takes a singular verb when the group acts as one body. '
   'Keep the pronoun consistent: its, not their, once you have chosen.'),
  (95, 'every + singular', 'Do all the rooms have projectors?',
   ['Every', 'seminar', 'room', 'has'],
   'Every seminar room has one, but not every lecture hall does.',
   'one, but not every lecture hall does.',
   'every, each and either are grammatically singular however many things '
   'they cover.'),
  (96, 'appositive', 'Who is supervising you?',
   ['Dr Mensah,', 'the head', 'of the department,'],
   'Dr Mensah, the head of the department, has agreed to take me on.',
   'has agreed to take me on.',
   'An appositive renames the noun beside it and is fenced by two commas. '
   'Leaving the second comma out is the usual slip.'),
  (97, 'adjective order', 'What was in the box?',
   ['Two', 'small', 'wooden', 'trays'],
   'Two small wooden trays and a roll of tape.',
   'and a roll of tape.',
   'Number, then size, then material. Native speakers never think about this '
   'and never get it wrong; learners must learn the order explicitly.'),
  (98, 'possessive', 'Whose signature is missing?',
   ['The supervisor’s', 'signature', 'is missing from', 'the bottom'],
   'The supervisor’s signature is missing from the bottom of the second page.',
   'of the second page.',
   "'s for people and organisations, of for inanimate things. The page's "
   'bottom is wrong; the bottom of the page is right.'),
  (99, 'pronoun agreement', 'Did the students get their results?',
   ['Each student', 'received', 'their', 'own'],
   'Each student received their own results by email.',
   'results by email.',
   'Singular they is now standard after each, every, anyone and someone, and '
   'is preferred to he or she. The verb stays singular: each student '
   'received.'),
  (100, 'there is / there are', 'What still needs doing?',
   ['There', 'is', 'a form', 'to sign'],
   'There is a form to sign and two receipts to attach.',
   'and two receipts to attach.',
   'In a there-sentence the verb agrees with the first element of the list. '
   'Reverse the order and it becomes There are two receipts to attach and a '
   'form to sign.'),
 ],
 'followup': [
  ('F1', 'Delete the middle', [
     'Cross out everything between the head noun and the verb, then choose.',
     ('mono', ['(a) The quality of the submissions ______ (has/have) fallen.',
               '(b) A number of students ______ (was/were) waiting.',
               '(c) The number of students ______ (was/were) falling.']),
     ('note', 'Items (b) and (c) look identical and behave differently. '
              'That is the point of the exercise.'),
   ]),
  ('F2', 'Error autopsy', [
     ('mono', ['(a) I need an advice about the equipments.',
               '(b) Each of the students have their own tutor.',
               '(c) She gave me a many useful informations.',
               '(d) The report’s conclusion of the committee was ignored.']),
   ]),
  ('F3', 'Put it to work', [
     'Write the opening sentence of an email reporting a problem, using a '
     'subject whose head noun is separated from its verb by at least four '
     'words. Then check the agreement by deleting the middle.',
   ]),
 ],
 'keys': [
  ('P1', [['list ', ('is', {'bold': True}), ' · microscopes ',
           ('are', {'bold': True}), ' · every seminar room ',
           ('has', {'bold': True}), '.'],
          ['In each case the verb reaches back to the head of the subject, '
           'ignoring everything in between.']]),
  ('P2', [[('form, recommendation, device, study', {'bold': True}),
           ' are countable. ',
           ('identification, advice, equipment, research', {'bold': True}),
           ' are not: no a, no plural, ever.'],
          ['Note the pairs: ', ('advice', {'italic': True}), ' is '
           'uncountable but ', ('a recommendation', {'italic': True}),
           ' is countable; ', ('research', {'italic': True}),
           ' is uncountable but ', ('a study', {'italic': True}),
           ' is countable. English is not being consistent, and there is '
           'nothing to do but learn them.']]),
  ('P3', [['(a) both are acceptable, and the possessive is more natural '
           'because a supervisor is a person.'],
          ['(b) only ', ('the bottom of the page', {'bold': True}),
           '. Inanimate things take of.'],
          ['The principle is animacy: people own things, pages have parts.']]),
  ('F1', [['(a) ', ('has', {'bold': True}), ' — head is quality.'],
          ['(b) ', ('were', {'bold': True}), ' — ',
           ('a number of', {'italic': True}),
           ' is a quantifier meaning several, so the real head is students.'],
          ['(c) ', ('was', {'bold': True}), ' — ',
           ('the number', {'italic': True}),
           ' is a genuine head noun, singular. The article is the only '
           'difference between them.']]),
  ('F2', [['(a) → some advice about the equipment. Both uncountable.'],
          ['(b) → Each of the students has their own tutor. ',
           ('each', {'italic': True}), ' is the head, not ',
           ('students', {'italic': True}), '.'],
          ['(c) → a great deal of useful information.'],
          ['(d) → The committee’s report was ignored, or The '
           'conclusion of the committee’s report was ignored. As written '
           'the modifiers have been stacked in the wrong order.']]),
  ('F3', [['Model: ', ('The confirmation email for the three rooms we booked '
                       'in March has still not arrived.', {'italic': True})],
          ['Delete the middle: ', ('The confirmation email … has not '
                                   'arrived.', {'italic': True}),
           ' Agreement holds. This is the only reliable way to check a long '
           'subject, and it takes two seconds.']]),
 ],
},
]
