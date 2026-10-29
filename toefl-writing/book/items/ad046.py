# -*- coding: utf-8 -*-
"""Item AD046 - Write for an Academic Discussion - Technology and AI."""

ITEM = {
 'id': 'AD 046', 'task': 'WRITE FOR AN ACADEMIC DISCUSSION', 'time': '10 minutes',
 'function': 'Policy choice — should X be required?',
 'payload': {
   'Strategy':   'find the axis of disagreement, then contribute a third thing',
   'Grammar':    'conditional qualification; the participial adverbial',
   'Vocabulary': 'stance markers that concede and reverse in one move',
   'Convention': 'engaging with classmates by name without merely agreeing',
 },

 'professor': [
   'Many universities now ask students to add a short statement declaring any use '
   'of generative AI tools in their written assignments. Supporters say disclosure '
   'protects academic honesty; critics say it is unenforceable and treats students '
   'as suspects. What do you think — should a declaration of AI use be a formal '
   'requirement for every written assignment? Why or why not?',
 ],
 'prof_name': 'Dr Lindqvist',
 'students': [
   ('Marco',
    'I support mandatory disclosure. Writing is assessed as evidence of a '
    'student’s own thinking, and if part of that thinking was outsourced, the '
    'grade no longer means what it claims to mean. A declaration is a small price '
    'for protecting the value of everyone’s degree.'),
   ('Priya',
    'I’m against it. Nobody can actually verify these statements, so honest '
    'students will declare and dishonest ones simply won’t — the rule lands on '
    'exactly the people it doesn’t need to reach. We would be adding paperwork '
    'while changing nothing about real misconduct.'),
 ],
 'instructions': [
   'Express and support your opinion.',
   'Make a contribution to the discussion in your own words.',
   'An effective response will contain at least 100 words.',
 ],

 # ------------------------------------------------------------ preview
 'preview': [
  ('P1', 'Find the axis of disagreement', [
     'a.  Marco and Priya reach opposite conclusions. But are they arguing about '
     'the same thing? Write down, in one phrase each, what each of them is '
     'actually claiming.',
     ['b.  One is making a claim about ', ('values', {'italic': True}),
      '; the other a claim about what will ', ('happen', {'italic': True}),
      '. Which is which?'],
     ('note', 'This question is the whole task in miniature. Two classmates who '
              'are answering different questions leave a gap, and the gap is where '
              'your own contribution goes.'),
   ]),
  ('P2', 'Prime the stance markers', [
     'a.  Order these by how strongly they concede, from weakest to strongest:',
     ('mono', ['I suppose  ·  Granted  ·  Admittedly  ·  There is no denying that']),
     'b.  Which of them set you up to reverse direction in the next clause, and '
     'which simply surrender the point?',
     'c.  Supply the missing nouns for this debate: a rule that stops people acting '
     'is a d________ ; the act of making people follow it is e________ ; '
     'unclear wording that lets people escape is a________ .',
   ]),
  ('P3', 'Write it before you read it', [
     'In one sentence, concede Priya’s point and then take it away from her. '
     'Use the frame below, and do not exceed 30 words.',
     ('mono', ['If the purpose of the rule were ________ , then ________ .']),
   ]),
  ('P4', 'Commit to a position', [
     'Set a timer for 10 minutes and write your full response now. Before you '
     'start, write one sentence in the margin: ',
     ('note', 'The one thing I will say that neither Marco nor Priya has said is …'),
     'If you cannot finish that sentence, you are not ready to write — and you '
     'are about to produce a response that only agrees.',
   ]),
  ('P5', 'Predict the pitfall', [
     'Which of these openings cannot lead to a band-5 answer, and why?',
     ('mono', [
       '(A) I agree with Marco. Academic honesty is very important for all',
       '    students in the university.',
       '(B) Priya’s objection is the serious one, but I think it misses what a',
       '    declaration is for.',
       '(C) I think both Marco and Priya make good points, and both sides of',
       '    this issue have advantages and disadvantages.']),
   ]),
 ],

 # ------------------------------------------------------------ model
 'model_band': 5,
 'model': [
   'Priya’s objection is the serious one, but I think it misses what a '
   'declaration is for. Granted, nobody can verify these statements, and if the '
   'purpose of the rule were detection, it would indeed be useless. The purpose, '
   'though, is not detection but definition. A disclosure requirement forces a '
   'department to say in writing what counts as acceptable assistance, and in my '
   'experience most students are unclear about that line rather than dishonest '
   'about crossing it.',
   'I would qualify Marco’s position in one respect. Disclosure is worth '
   'requiring only where the assessment is genuinely a test of composition — a '
   'reflective essay, say, rather than a problem set whose answers are fixed. '
   'Applied indiscriminately, the declaration becomes a box that students tick '
   'without reading, and a rule that is routinely ignored quietly teaches contempt '
   'for the rules that do matter.',
 ],

 # ------------------------------------------------------------ follow-up
 'followup': [
  ('F1', 'Take the answer apart', [
     'a.  Give each of the six sentences a one-word job: concede, reframe, '
     'define, evidence, qualify, warn.',
     ['b.  Which single sentence is the ', ('contribution', {'italic': True}),
      ' — the thing neither classmate said?'],
     ['c.  The response never uses the words ', ('I agree', {'italic': True}),
      ' or ', ('I disagree', {'italic': True}),
      '. How does it make its position clear without them?'],
   ]),
  ('F2', 'Harvest the grammar', [
     ['a.  “If the purpose of the rule ', ('were', {'italic': True}),
      ' detection, it ', ('would', {'italic': True}),
      ' indeed be useless.” The writer agrees with this sentence — so why '
      'put it in the unreal conditional?'],
     ['b.  “', ('Applied indiscriminately', {'italic': True}),
      ', the declaration becomes a box …” Expand this into a full clause. '
      'What has the participle bought in exchange for the words it saved?'],
     ['c.  “Disclosure is worth requiring ', ('only where', {'italic': True}),
      ' …” Replace ', ('only where', {'italic': True}), ' with ',
      ('if', {'italic': True}), '. Why is the original sharper?'],
     ('note', 'The participial adverbial in (b) is structure 36 in Task 1. You '
              'drilled it as a sentence-building puzzle; here it is doing real '
              'argumentative work.'),
   ]),
  ('F3', 'Harvest the vocabulary', [
     ['a.  ', ('Granted', {'italic': True}), ' — what does it do that ',
      ('I agree', {'italic': True}), ' cannot?'],
     ['b.  The model says a rule can “', ('quietly teach contempt', {'italic': True}),
      '”. A rule cannot literally teach. What is this figure doing, and why '
      'is it safe to use in an academic discussion?'],
     ['c.  Why “', ('indiscriminately', {'italic': True}),
      '” rather than “in all cases”?'],
     'd.  Distinguish: a deterrent, a safeguard, a formality, a sanction. '
     'Which one is the model accusing a badly-designed rule of becoming?',
   ]),
  ('F4', 'Why this is a 5 and that is a 3', [
     'Below is another response to the same discussion. Using the official '
     'band descriptors at the front of this book, name the three things that '
     'hold it at band 3.',
   ]),
  ('F5', 'Now you do it', [
     ['A different discussion: ', ('Should universities cap the number of hours '
      'students may work in paid jobs during term?', {'italic': True}),
      ' One classmate says yes, to protect study time; another says no, because '
      'poorer students need the income. In 40–60 words write only the '
      'concede-and-reframe move: grant the second classmate the premise, then '
      'show that it points somewhere neither of them went.'],
   ]),
 ],

 'degraded_band': 3,
 'degraded': [
   'I agree with Marco’s opinion. In my opinion the disclosure of AI should be '
   'required because the academic honesty is very important thing in university '
   'life. If students use AI and don’t say it, so the teacher cannot know the '
   'real level of the student. Also Priya said nobody can verify, but I think the '
   'university can make some punishment for the students who are lying. In my '
   'country many universities are starting to do this rule and it is working good. '
   'So I believe that every student must write a declaration for every assignment '
   'because honesty is the base of the education.',
 ],

 # ------------------------------------------------------------ keys
 'keys': [
  ('P1', [
    ['a.  Marco: ', ('a grade is a claim about its owner, so undeclared help '
     'makes the claim false', {'italic': True}), '. Priya: ',
     ('a rule that cannot be checked will be obeyed only by the people it was '
      'not aimed at', {'italic': True}), '.'],
    ['b.  Marco is arguing about ', ('values', {'bold': True}),
     ' — what a grade ought to mean. Priya is arguing about ',
     ('consequences', {'bold': True}), ' — what the rule will actually do. '
     'They are not contradicting each other at all: both could be entirely right.'],
    ['Spotting that is what lets you write something new rather than picking a '
     'side. The model takes Priya’s factual premise, accepts it, and shows it '
     'does not reach Marco’s conclusion — because the rule has a purpose '
     'neither of them named.'],
  ]),
  ('P2', [
    ['a.  I suppose < Granted < Admittedly < There is no denying that.'],
    ['b.  ', ('Granted', {'bold': True}), ' and ', ('Admittedly', {'bold': True}),
     ' are built for reversal: they are nearly always followed by ',
     ('but', {'italic': True}), ' or ', ('though', {'italic': True}),
     '. ', ('There is no denying that', {'italic': True}),
     ' concedes so completely that it is hard to turn round afterwards, and ',
     ('I suppose', {'italic': True}),
     ' sounds grudging rather than fair-minded — it makes you look like a '
     'reluctant loser of the argument.'],
    ['c.  a ', ('deterrent', {'bold': True}), ' ; ',
     ('enforcement', {'bold': True}), ' ; an ', ('ambiguity', {'bold': True}),
     ' (or ', ('a loophole', {'italic': True}), ').'],
  ]),
  ('P3', [
    ['The model’s version: “If the purpose of the rule ',
     ('were detection', {'italic': True}), ', it would indeed be useless.”'],
    ['Notice the trick. You state your opponent’s strongest point as a ',
     ('hypothetical you do not hold', {'bold': True}),
     '. You have conceded nothing real, yet you sound completely fair.'],
  ]),
  ('P4', [
    ['No single answer. But test your draft honestly: cover up Marco’s and '
     'Priya’s posts and read your response alone. If it still says something, '
     'you contributed. If it collapses into “yes, what Marco said”, you '
     'did not — and the rubric word is ',
     ('contribution', {'italic': True}), '.'],
  ]),
  ('P5', [
    [('(A) and (C) both fail.', {'bold': True})],
    ['(A) agrees and then restates a platitude. It can still reach 100 words, but '
     'it will reach them without adding anything — and the task asks for a ',
     ('contribution to the discussion in your own words', {'italic': True}), '.'],
    ['(C) is the commonest trap of all: the ',
     ('both-sides opening', {'bold': True}),
     '. It sounds balanced and is actually empty, because it postpones the '
     'moment of taking a position — and in a 10-minute task you may never '
     'arrive at one.'],
    ['(B) names the strongest opposing argument in the first six words and '
     'announces that it is going to be answered. The reader now knows the '
     'position, the target, and that something is coming.'],
  ]),
  ('F1', [
    ['a.  concede · reframe · define · evidence · qualify · warn.'],
    ['b.  “The purpose, though, is not detection but definition.” '
     'Everything else supports it. Marco argued honesty, Priya argued '
     'enforceability; nobody had suggested the rule’s real value is forcing '
     'the ', ('department', {'italic': True}),
     ' to define its own standard.'],
    ['c.  By ', ('doing', {'italic': True}), ' rather than ',
     ('announcing', {'italic': True}),
     '. “misses what a declaration is for” is a disagreement; “I '
     'would qualify Marco’s position” is a partial agreement. Stating '
     'where you stand through the verbs costs no words and reads as far more '
     'confident than “I agree with …”.'],
  ]),
  ('F2', [
    ['a.  Because the writer wants to grant the ',
     ('logic', {'italic': True}), ' without granting the ',
     ('premise', {'italic': True}),
     '. The unreal form says: that conclusion would follow, in a world where '
     'the rule were about detection. Since we are not in that world, Priya’s '
     'objection is answered rather than denied. Agreeing with somebody’s '
     'reasoning while refusing their starting point is one of the most useful '
     'moves in academic writing, and English does it with the unreal conditional.'],
    ['b.  Full clause: “', ('If it is applied indiscriminately', {'italic': True}),
     ', the declaration becomes …”. The participle saves three words, but '
     'what it really buys is ', ('subordination', {'bold': True}),
     ': the condition is pushed into the background so the main clause lands '
     'harder. Note the rule — the participle’s understood subject must be '
     'the subject of the main clause (', ('the declaration', {'italic': True}),
     '). Break that and you have written a dangling modifier.'],
    ['c.  ', ('if', {'italic': True}), ' makes it a condition that might '
     'happen anywhere; ', ('only where', {'bold': True}),
     ' makes it a boundary, and boundaries are what the question was about. '
     'The word ', ('only', {'italic': True}), ' is doing the argumentative work.'],
  ]),
  ('F3', [
    ['a.  ', ('Granted', {'bold': True}), ' concedes ',
     ('one specific point', {'italic': True}),
     ' while signalling that the main argument is still coming. ',
     ('I agree', {'italic': True}),
     ' concedes your whole position and leaves you nowhere to stand.'],
    ['b.  It is a ', ('personification', {'bold': True}),
     ' — the rule is given the power to teach. It is safe here because it is '
     'a ', ('conventional', {'italic': True}),
     ' one: institutions, laws and habits are routinely said to teach, reward '
     'or punish. Reach for a fresh, surprising metaphor in a 10-minute exam and '
     'you will usually produce something that reads as odd rather than vivid.'],
    ['c.  ', ('in all cases', {'italic': True}), ' is neutral; ',
     ('indiscriminately', {'bold': True}),
     ' carries the judgement inside the word — it means “in all cases, ',
     ('without thinking', {'italic': True}),
     '”. One word that both describes and evaluates is exactly what the '
     'descriptor means by precise word choice.'],
    ['d.  A ', ('formality', {'bold': True}),
     ' — something performed because it is required, with no effect. '
     '(A deterrent discourages; a safeguard protects; a sanction punishes.)'],
  ]),
  ('F4', [
    ['1.  ', ('It is not a contribution.', {'bold': True}),
     ' It opens “I agree with Marco” and then restates Marco. The one '
     'original idea — punishing students who lie — is dropped after half a '
     'sentence. Band 3 is worded ',
     ('part of an explanation, example or detail may be missing, unclear or '
      'irrelevant', {'italic': True}), '.'],
    ['2.  ', ('Padding instead of elaboration.', {'bold': True}),
     ' “In my opinion” twice, “very important thing”, '
     '“honesty is the base of the education”. These reach the 100-word '
     'minimum without developing anything. Length is not the target; the minimum '
     'is a floor, not a goal.'],
    ['3.  ', ('Accumulated error.', {'bold': True}),
     ' “the academic honesty”, “very important thing” (a very '
     'important thing), “If … don’t say it, so the teacher” '
     '(a comma splice with a stray ', ('so', {'italic': True}),
     '), “it is working good” (working well), “make some '
     'punishment” (impose a penalty). Individually survivable; together they '
     'are what the descriptor calls ',
     ('some noticeable lexical and grammatical errors', {'italic': True}), '.'],
    ('note', 'Worth noticing: this response is longer than the band-5 model. '
             'Students routinely believe more words mean more marks. They do not.'),
  ]),
  ('F5', [
    ['A model move:'],
    [('“The income argument is the one that has to be answered, and it is '
      'right as far as it goes. But it tells against a flat cap, not against '
      'any limit at all: a rule that bit only above, say, twenty-five hours '
      'would leave the students who need the money untouched and catch only the '
      'ones who are quietly failing.”', {'italic': True})],
    ['Check yours: did you grant the premise ', ('in full', {'bold': True}),
     ' before turning it? A half-granted premise reads as evasion, and the turn '
     'then convinces nobody.'],
  ]),
 ],
}
