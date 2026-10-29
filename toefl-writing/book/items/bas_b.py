# -*- coding: utf-8 -*-
"""Build a Sentence - families 2 to 6 (items 11-50)."""

HOW = ('One sentence is complete; the reply has its words out of order. Move '
       'them into a reply that is both grammatical and a sensible answer to '
       'the cue. No partial credit.')

SETS = [

# ====================================================== family 2
{
 'id': 'BAS 011–018', 'task': 'BUILD A SENTENCE', 'time': '8 items',
 'function': 'Family 2 of 12 — noun clauses and embedded questions',
 'payload': {
   'Strategy': 'a clause can fill a noun slot: subject, object or complement',
   'Grammar': 'that-clauses, embedded questions, extraposed it, backshift',
   'Vocabulary': 'verbs and adjectives that select a that-clause',
   'Convention': 'an embedded question keeps statement word order',
 },
 'intro': [HOW,
   'A noun clause does the job of a noun. The single most valuable thing in '
   'this family is the word order of embedded questions, because it is wrong '
   'in the speech of most learners at every level, and it is wrong in a way '
   'examiners always notice.'],
 'preview': [
  ('P1', 'The rule that matters most here', [
     'One of these is wrong. Which, and why?',
     ('mono', ['(i)  Nobody told us when the results would be published.',
               '(ii) Nobody told us when would the results be published.']),
   ]),
  ('P2', 'What follows what', [
     'Which of these can be followed directly by a that-clause?',
     ('mono', ['decide · relieved · discuss · clear · explain · suggest']),
   ]),
  ('P3', 'Why bother with it', [
     ['English dislikes a long clause in subject position. Compare:'],
     ('mono', ['That the scheme had been underfunded was clear.',
               'It was clear that the scheme had been underfunded.']),
     'Both are grammatical. Why is the second the one people actually write?',
   ]),
 ],
 'items': [
  (11, 'that-clause as object', 'Why wasn’t the deadline extended?',
   ['The committee', 'that', 'decided', 'the original date'],
   'The committee decided that the original date was perfectly fair.',
   'was perfectly fair.',
   'that introduces the clause and can be dropped after common reporting '
   'verbs: the committee decided the original date was fair.'),
  (12, 'embedded wh-question', 'Do you know when the results come out?',
   ['I have no idea', 'the results', 'when', 'will be'],
   'I have no idea when the results will be published.',
   'published.',
   'Statement order after when: the results will be, never when will the '
   'results be. The question mark has gone, and so has the inversion.'),
  (13, 'embedded yes/no with whether', 'Is the seminar going ahead?',
   ['Nobody has told us', 'it', 'whether', 'is'],
   'Nobody has told us whether it is going ahead or not.',
   'going ahead or not.',
   'whether, not if, when the clause pairs with or not. Both work elsewhere, '
   'but only whether survives in front of an infinitive or after a preposition.'),
  (14, 'extraposed it', 'What did the review conclude?',
   ['It', 'the scheme', 'was clear', 'that'],
   'It was clear that the scheme had been underfunded.',
   'had been underfunded.',
   'The it is empty: it stands in for the that-clause so that the heavy clause '
   'can go at the end, where English prefers weight.'),
  (15, 'wh-clause as subject', 'What bothered you about the proposal?',
   ['What', 'me', 'most', 'worried'],
   'What worried me most was the cost.',
   'was the cost.',
   'The whole of what worried me most is the subject, and it takes a singular '
   'verb. This is the wh-cleft, and it is a very efficient way to put your '
   'main point at the end of the sentence.'),
  (16, 'reported speech with backshift',
   'What did the tutor say about the deadline?',
   ['She said', 'she', 'that', 'would extend it'],
   'She said that she would extend it if we asked.',
   'if we asked.',
   'The tutor’s words were will extend. After a past reporting verb, will '
   'moves back to would. Backshift is automatic unless the fact is still true.'),
  (17, 'noun clause after an adjective', 'How did they react to the news?',
   ['They were', 'that', 'the funding', 'relieved'],
   'They were relieved that the funding had been approved.',
   'had been approved.',
   'Adjectives of feeling and certainty take a that-clause directly: relieved, '
   'glad, aware, confident, sure. No preposition.'),
  (18, 'the fact that', 'Why is everyone so annoyed?',
   ['The fact', 'nobody', 'that', 'was consulted'],
   'The fact that nobody was consulted has upset the whole department.',
   'has upset the whole department.',
   'the fact that packages a whole clause into a noun phrase so it can be a '
   'subject. Useful in writing; wordy if overused.'),
 ],
 'followup': [
  ('F1', 'The order test', [
     'Rewrite each as an embedded clause after the words given.',
     ('mono', ['(a) Where has the meeting been moved to?  → Could you tell me …',
               '(b) Did she submit the form?             → I am not sure …',
               '(c) How much will it cost?               → Nobody has said …']),
   ]),
  ('F2', 'Error autopsy', [
     ('mono', ['(a) I asked him what does he want.',
               '(b) It is obvious that must we change the plan.',
               '(c) He explained me that the lab was closed.',
               '(d) I am not sure that will she come.']),
   ]),
  ('F3', 'Put it to work', [
     'Each of these appears in the Email and Discussion tasks constantly. '
     'Write one sentence of your own using each.',
     ('mono', ['(a) I was wondering whether …',
               '(b) It is worth noting that …',
               '(c) The fact that … means that …']),
   ]),
 ],
 'keys': [
  ('P1', [['(ii) is wrong. Inside a larger sentence the question stops being a '
           'question and becomes a noun clause, so it takes statement order: ',
           ('when the results would be published', {'italic': True}),
           '. Keeping the inversion is the single most persistent error in '
           'learner English.']]),
  ('P2', [['All except ', ('discuss', {'bold': True}), '. You ',
           ('discuss something', {'italic': True}), ', never ',
           ('discuss that …', {'italic': True}),
           '. The others all take a clause: decided that, relieved that, '
           'clear that, explained that, suggest that.']]),
  ('P3', [['End weight. English puts short things first and long things last, '
           'so a clause eight words long sits badly in subject position. ',
           ('It', {'italic': True}), ' holds the subject slot open and lets '
           'the clause go where it is comfortable — and the reader meets '
           'the point (',  ('was clear', {'italic': True}),
           ') before the detail.']]),
  ('F1', [['(a) Could you tell me where the meeting has been moved to?'],
          ['(b) I am not sure whether she submitted the form.'],
          ['(c) Nobody has said how much it will cost.'],
          ['In all three: no inversion, no question mark, and in (b) ',
           ('did submit', {'italic': True}), ' collapses back to ',
           ('submitted', {'italic': True}), '.']]),
  ('F2', [['(a) → I asked him what he wanted. (Inversion removed, and '
           'backshift after a past verb.)'],
          ['(b) → It is obvious that we must change the plan.'],
          ['(c) → He explained to me that … . ',
           ('explain', {'italic': True}), ' cannot take a person as its '
           'direct object; ', ('tell', {'italic': True}), ' can. He told me '
           'that … is fine.'],
          ['(d) → I am not sure whether she will come.']]),
  ('F3', [['Models: ',
           ('I was wondering whether the deadline could be moved. · It is '
            'worth noting that attendance has risen every year. · The fact '
            'that nobody objected means that we can go ahead.',
            {'italic': True})],
          ['All three are structures you will be given credit for in the '
           'written tasks, and all three are noun clauses.']]),
 ],
},

# ====================================================== family 3
{
 'id': 'BAS 019–026', 'task': 'BUILD A SENTENCE', 'time': '8 items',
 'function': 'Family 3 of 12 — conditionals',
 'payload': {
   'Strategy': 'conditionals let you argue about what is not the case',
   'Grammar': 'zero, first, second, third, mixed, inverted, and implied',
   'Vocabulary': 'unless, provided that, as long as, otherwise',
   'Convention': 'the unreal forms are the polite forms',
 },
 'intro': [HOW,
   'Conditionals are worth more marks than any other family, because they do '
   'two jobs at once: they reason about possibilities, and they are the main '
   'politeness machinery of English. Everything you drill here comes back in '
   'the email task.'],
 'preview': [
  ('P1', 'Two steps back from now', [
     'Fill the gaps with the pattern, not the example:',
     ('mono', ['present real    If it ______ , the system ______ a fine.',
               'future possible If three ______ , it ______ go ahead.',
               'present unreal  If I ______ eligible, I ______ apply.',
               'past unreal     If the parts ______ , we ______ finished.']),
   ]),
  ('P2', 'Why the past tense is polite', [
     ['Compare: ', ('If a room is free, can we have it?', {'italic': True}),
      '  and  ', ('If a room were free, could we have it?', {'italic': True})],
     'Both ask the same thing. Which gives the reader an easier way to say no, '
     'and why does that make it the politer one?',
   ]),
  ('P3', 'Spot the one that is not a conditional', [
     ('mono', ['(a) Unless you pay the deposit, your place will go.',
               '(b) Provided that you pay by Friday, you can still join.',
               '(c) Otherwise your place will go to someone else.',
               '(d) As long as the weather holds, we leave at seven.']),
     'All four express a condition. Only one has no conditional clause at all. '
     'Which, and what is carrying the condition instead?',
   ]),
 ],
 'items': [
  (19, 'zero conditional', 'What happens if a book is returned late?',
   ['If', 'a book', 'back late', 'comes'],
   'If a book comes back late, the system charges a fine automatically.',
   'the system charges a fine automatically.',
   'Present + present. This is a rule, not a prediction: it is true every '
   'time, so neither clause needs will.'),
  (20, 'first conditional', 'Will the trip still run?',
   ['If', 'three', 'more people', 'sign up'],
   'If three more people sign up, it will go ahead.',
   'it will go ahead.',
   'Present in the if-clause, will in the main clause. Never will in both: '
   'if three more people will sign up is the classic error.'),
  (21, 'second conditional', 'Why don’t you apply for the scholarship?',
   ['If', 'I', 'eligible', 'were'],
   'If I were eligible, I would apply tomorrow.',
   'I would apply tomorrow.',
   'Past form, present meaning: I am not eligible. were for all persons is the '
   'careful written form, though was is common in speech.'),
  (22, 'third conditional', 'Could the delay have been avoided?',
   ['If', 'the parts', 'earlier', 'had arrived'],
   'If the parts had arrived earlier, we would have finished on time.',
   'we would have finished on time.',
   'Past perfect + would have. Both halves are contrary to fact: the parts did '
   'not arrive, and we did not finish.'),
  (23, 'mixed conditional', 'Why are you still waiting for your results?',
   ['If', 'I', 'the form', 'had submitted'],
   'If I had submitted the form, I would know by now.',
   'I would know by now.',
   'Past condition, present result. The two halves can sit in different times, '
   'and this is the pattern that says a past mistake is still costing you.'),
  (24, 'inversion: Had I known', 'You didn’t tell me the office closed early.',
   ['Had', 'I', 'that', 'known'],
   'Had I known that, I would have gone yesterday.',
   'I would have gone yesterday.',
   'Formal inversion replaces if, which must then disappear: not If had I '
   'known. The same works with Were I … and Should you …'),
  (25, 'provided that', 'Can I still join the trip?',
   ['Yes', 'provided that', 'the deposit', 'you pay'],
   'Yes, provided that you pay the deposit by Friday.',
   'by Friday.',
   'provided that and as long as mean if and only if — they set a '
   'requirement rather than imagine a possibility.'),
  (26, 'implied conditional', 'Do I really need to register tonight?',
   ['Yes', 'otherwise', 'your place', 'will go'],
   'Yes, otherwise your place will go to someone else.',
   'to someone else.',
   'otherwise carries the whole if-clause by itself: if you do not register '
   'tonight. One word, no clause.'),
 ],
 'followup': [
  ('F1', 'Shift the time', [
     'Rewrite this as (a) a second conditional and (b) a third conditional, '
     'and say what changes about who is to blame.',
     ('mono', ['If we book early, we get the lower rate.']),
   ]),
  ('F2', 'Error autopsy', [
     ('mono', ['(a) If I will have time, I will call you.',
               '(b) If she would have told me, I would have helped.',
               '(c) Unless you don’t pay, your place will go.',
               '(d) If had I known, I would have come.']),
   ]),
  ('F3', 'Make it polite', [
     'Rewrite each as an unreal conditional so the reader can refuse without '
     'embarrassment.',
     ('mono', ['(a) Is a room free on Saturday? Give it to us.',
               '(b) Can you move the deadline? I need more time.']),
   ]),
 ],
 'keys': [
  ('P1', [['present real: ', ('comes · charges', {'bold': True}),
           '   future possible: ', ('sign up · will', {'bold': True}),
           '   present unreal: ', ('were · would', {'bold': True}),
           '   past unreal: ', ('had arrived · would have', {'bold': True})],
          ['The pattern is mechanical: each step away from reality is one step '
           'back in tense. That is the whole system.']]),
  ('P2', [['The second. The unreal form presents the room as probably ',
           ('not', {'italic': True}), ' free, so the reader is agreeing with '
           'your own expectation when they say no. The real form presupposes '
           'a room ', ('is', {'italic': True}), ' free, which makes refusing '
           'feel like a contradiction.'],
          ['This is why the past tense is the polite tense in English. '
           'Distance in time stands for distance in imposition.']]),
  ('P3', [[('(c)', {'bold': True}), '. There is no if-clause and no '
           'subordinate clause of any kind — ',
           ('otherwise', {'italic': True}),
           ' is an adverb that points back at the previous sentence and '
           'carries the condition on its own.']]),
  ('F1', [['(a) If we booked early, we would get the lower rate. — we are '
           'not booking early; no blame, just a possibility declined.'],
          ['(b) If we had booked early, we would have got the lower rate. '
           '— we did not, the chance is gone, and this one sounds like a '
           'reproach. The third conditional is rarely neutral.']]),
  ('F2', [['(a) → If I have time … . No will in the if-clause.'],
          ['(b) → If she had told me … . ',
           ('would have', {'italic': True}), ' belongs in the result clause '
           'only.'],
          ['(c) → Unless you pay … . ',
           ('unless', {'italic': True}), ' already means ',
           ('if not', {'italic': True}), ', so the extra negative reverses '
           'the meaning.'],
          ['(d) → Had I known … . Once you invert, ',
           ('if', {'italic': True}), ' must go.']]),
  ('F3', [['(a) If a room were free on Saturday, we would be very glad of it.'],
          ['(b) If there were any way of moving the deadline, it would make a '
           'great difference to me.'],
          ['Notice what has happened in both: the imperative and the direct '
           'question have gone, and nobody is being asked to do anything. The '
           'request is now a description of a world.']]),
 ],
},

# ====================================================== family 4
{
 'id': 'BAS 027–034', 'task': 'BUILD A SENTENCE', 'time': '8 items',
 'function': 'Family 4 of 12 — the passive',
 'payload': {
   'Strategy': 'the passive chooses what the sentence is about, and who vanishes',
   'Grammar': 'simple, modal, perfect, get-, infinitive, reporting, double-object',
   'Vocabulary': 'by-phrase or no by-phrase',
   'Convention': 'leaving the agent out is a social act, not just a grammatical one',
 },
 'intro': [HOW,
   'The passive is not a politer way of saying the same thing; it is a '
   'different sentence about a different topic. Its real power in the email '
   'task is that it lets you describe a problem without naming whoever caused '
   'it.'],
 'preview': [
  ('P1', 'What the passive is for', [
     ['Both are correct. When would you write each?'],
     ('mono', ['Someone double-booked the hall.',
               'The hall was double-booked.']),
   ]),
  ('P2', 'Where the agent goes', [
     'Three of these need no by-phrase at all. Which one does, and why?',
     ('mono', ['(a) The essays are marked ______ two tutors independently.',
               '(b) My bike got stolen ______ outside the library.',
               '(c) The decision was taken ______ without consultation.',
               '(d) The lab is being refitted ______ over the vacation.']),
   ]),
  ('P3', 'Build the chain', [
     'Put be into each form before you meet them:',
     ('mono', ['modal      It should ______ reported.',
               'perfect    It has ______ changed twice.',
               'continuous It is ______ refitted.',
               'gerund     She hates ______ corrected.']),
   ]),
 ],
 'items': [
  (27, 'simple passive', 'Who marks the first-year essays?',
   ['They', 'by', 'marked', 'are'],
   'They are marked by two tutors independently.',
   'two tutors independently.',
   'The by-phrase survives here because the agent is the answer to the '
   'question. Keep it only when it carries information.'),
  (28, 'passive with a modal', 'What should happen to the broken equipment?',
   ['It', 'should', 'be', 'reported', 'to the technician'],
   'It should be reported to the technician immediately.',
   'immediately.',
   'modal + be + past participle. The modal never changes form.'),
  (29, 'present perfect passive', 'Is the timetable final?',
   ['It', 'has', 'been', 'changed', 'twice'],
   'It has been changed twice already this term.',
   'already this term.',
   'has + been + changed. Learners routinely drop been; without it the '
   'sentence says the timetable did the changing.'),
  (30, 'agentless passive', 'Who decided to cancel the lecture?',
   ['The decision', 'last night', 'taken', 'was'],
   'The decision was taken last night without any consultation.',
   'without any consultation.',
   'The question asked who, and the answer refuses to say. That refusal is '
   'the point: the passive lets you report an action while declining to '
   'accuse anybody of it.'),
  (31, 'get-passive', 'What happened to your bike?',
   ['It', 'outside the library', 'stolen', 'got'],
   'It got stolen outside the library last Tuesday.',
   'last Tuesday.',
   'get + participle is informal and implies something sudden, usually '
   'unwelcome. Fine in speech and a friendly email; avoid it in a formal one.'),
  (32, 'passive gerund', 'Why is she upset?',
   ['She hates', 'in front of', 'corrected', 'being'],
   'She hates being corrected in front of the whole class.',
   'the whole class.',
   'After a verb that takes -ing, the passive appears as being + participle.'),
  (33, 'reporting passive', 'Is the new system any better?',
   ['It', 'to be', 'faster', 'is said'],
   'It is said to be faster, but nobody has tested it.',
   'but nobody has tested it.',
   'is said to be, is thought to be, is believed to be. This is how you report '
   'a claim without owning it — very useful when you are not sure.'),
  (34, 'double-object passive', 'Did anyone tell the students about the change?',
   ['They', 'an email', 'sent', 'were'],
   'They were sent an email on Friday afternoon.',
   'on Friday afternoon.',
   'Verbs with two objects give two possible passives. English prefers to '
   'promote the person: They were sent an email beats An email was sent to '
   'them, because people make better topics than things.'),
 ],
 'followup': [
  ('F1', 'Who disappeared?', [
     'For each, say whether the missing agent is unknown, obvious, or '
     'deliberately hidden.',
     ('mono', ['(a) The decision was taken last night.',
               '(b) My bike got stolen.',
               '(c) The essays are marked twice.',
               '(d) Mistakes were made.']),
   ]),
  ('F2', 'Error autopsy', [
     ('mono', ['(a) The timetable has changed twice by the office.',
               '(b) It should reported immediately.',
               '(c) The students were explained the new rules.',
               '(d) The lab is been refitted.']),
   ]),
  ('F3', 'Put it to work', [
     'Rewrite each so the person responsible disappears. You are writing to '
     'the office that made the mistake.',
     ('mono', ['(a) You double-booked our hall.',
               '(b) You never sent us the confirmation.']),
   ]),
 ],
 'keys': [
  ('P1', [['The active when the ', ('someone', {'italic': True}),
           ' matters — you are reporting who did it. The passive when the '
           'hall is what you are talking about, or when naming the person '
           'would be an accusation you do not want to make.'],
          ['Topic first: whatever you put in subject position is what the '
           'sentence is about.']]),
  ('P2', [[('(a)', {'bold': True}), ' — ',
           ('by two tutors', {'italic': True}),
           '. In the others the agent is unknown (b), deliberately withheld '
           '(c), or irrelevant (d). Roughly four passives in five have no '
           'by-phrase at all; adding one out of habit is the commonest '
           'overcorrection.']]),
  ('P3', [['should ', ('be', {'bold': True}), ' · has ',
           ('been', {'bold': True}), ' · is ',
           ('being', {'bold': True}), ' · hates ',
           ('being', {'bold': True}),
           '. One rule covers all four: whatever form the sentence needs, it '
           'lands on ', ('be', {'italic': True}),
           ', and the main verb stays a past participle.']]),
  ('F1', [['(a) deliberately hidden — somebody decided, and the sentence '
           'declines to say who.'],
          ['(b) unknown — nobody knows the thief.'],
          ['(c) obvious — tutors mark essays; saying so would be noise.'],
          ['(d) the famous evasion. Grammatically identical to (a), and the '
           'reason that phrase has become a joke: the passive is doing moral '
           'work, and everybody can see it.']]),
  ('F2', [['(a) → has been changed twice by the office.'],
          ['(b) → It should be reported.'],
          ['(c) → The new rules were explained to the students. ',
           ('explain', {'italic': True}),
           ' does not take a person as object, so it has no personal passive.'],
          ['(d) → is being refitted.']]),
  ('F3', [['(a) Our hall appears to have been double-booked.'],
          ['(b) We do not seem to have received the confirmation.'],
          ['Both say exactly what happened and accuse nobody. Note the second '
           'goes further still — it puts the failure on our side of the '
           'exchange, which is the cheapest possible way to buy goodwill when '
           'you need something fixed.']]),
 ],
},

# ====================================================== family 5
{
 'id': 'BAS 035–042', 'task': 'BUILD A SENTENCE', 'time': '8 items',
 'function': 'Family 5 of 12 — participial and absolute phrases',
 'payload': {
   'Strategy': 'subordinate the less important half and the main point lands harder',
   'Grammar': 'present, past and perfect participles; absolutes; postmodifiers',
   'Vocabulary': 'nothing new — this family buys compression, not words',
   'Convention': 'the participle’s hidden subject must be the main subject',
 },
 'intro': [HOW,
   'A participial phrase is a clause with the grammar taken out. It saves '
   'three or four words every time, and in a ten-minute task that matters '
   'but its real value is rhythm: it keeps one idea clearly subordinate to '
   'another. It also carries the one error examiners are trained to spot.'],
 'preview': [
  ('P1', 'Find the hidden subject', [
     ['Every participle has a subject even though none is written. Who is '
      'working in the first, and who is written in the second?'],
     ('mono', ['Working every evening, she finished the draft in a week.',
               'Written in a hurry, it contained several errors.']),
   ]),
  ('P2', 'The error you must never make', [
     'What is wrong with this, and why is it funny?',
     ('mono', ['Left in the sun overnight, the technician found the sample',
               'had spoiled.']),
   ]),
  ('P3', 'Cut it down', [
     'Reduce each to a participial phrase.',
     ('mono', ['(a) After he had recorded the results, he cleaned up.',
               '(b) While I was checking the figures, I spotted the error.',
               '(c) Anyone who is repeating a module must re-register.']),
   ]),
 ],
 'items': [
  (35, 'present participle adverbial', 'How did she finish so quickly?',
   ['Working', 'every evening', 'she', 'finished'],
   'Working every evening, she finished the whole draft in a week.',
   'the whole draft in a week.',
   'Active meaning: she worked. The subject of the participle and of the main '
   'clause are the same person, which is what licenses the reduction.'),
  (36, 'past participle adverbial', 'Why was the report rejected?',
   ['Written', 'in a hurry', 'it', 'contained'],
   'Written in a hurry, it contained several serious errors.',
   'several serious errors.',
   'Passive meaning: it was written. Compare item 35 — the -ing form '
   'means the subject acted, the -ed form means it was acted on.'),
  (37, 'perfect participle', 'What did he do after the experiment?',
   ['Having', 'the results', 'recorded', 'he'],
   'Having recorded the results, he cleaned the equipment.',
   'cleaned the equipment.',
   'Having + participle marks the first action as finished before the second '
   'began. Use it when the order matters.'),
  (38, 'absolute construction', 'Will the field trip go ahead?',
   ['Weather', 'we', 'permitting', 'leave'],
   'Weather permitting, we leave at seven on Saturday.',
   'at seven on Saturday.',
   'Here the participle has its own subject (weather), different from the '
   'main clause. That is what makes it absolute. All things being equal and '
   'that said work the same way.'),
  (39, 'dangling repaired', 'Why did the sample spoil?',
   ['Left', 'the sample', 'overnight', 'in the sun'],
   'Left in the sun overnight, the sample became unusable.',
   'became unusable.',
   'The sample is what was left, and the sample is the subject. Put anything '
   'else there and the participle attaches to the wrong noun.'),
  (40, 'participle after a conjunction', 'When did you notice the error?',
   ['While', 'the figures', 'checking', 'I'],
   'While checking the figures, I spotted the mistake.',
   'spotted the mistake.',
   'Keeping while or when in front of the participle makes the time relation '
   'explicit. It costs one word and removes all ambiguity.'),
  (41, 'participle as postmodifier', 'Which students must re-register?',
   ['Anyone', 'a module', 'repeating', 'this year'],
   'Anyone repeating a module this year must fill in a new form.',
   'must fill in a new form.',
   'This one sits inside the noun phrase, not in front of the clause: it is a '
   'reduced relative (anyone who is repeating), doing the work of an adjective.'),
  (42, 'being + past participle', 'Why is the lab closed?',
   ['It', 'refitted', 'is', 'being'],
   'It is being refitted over the vacation.',
   'over the vacation.',
   'The passive continuous. Being is doing two jobs: carrying the continuous '
   'and carrying the passive.'),
 ],
 'followup': [
  ('F1', '-ing or -ed?', [
     'Choose, and say what decides it each time.',
     ('mono', ['(a) ______ (lose/lost) in the move, the files were never found.',
               '(b) ______ (arrive/arriving) early, we got the best seats.',
               '(c) ______ (deliver/delivered) late, the parcel was refused.']),
   ]),
  ('F2', 'Dangling autopsy', [
     'Each attaches its participle to the wrong noun. Repair without adding a '
     'conjunction.',
     ('mono', ['(a) Having finished the experiment, the lab was locked.',
               '(b) Walking to campus, the rain started.',
               '(c) Written in 1890, we found the letter in the archive.']),
   ]),
  ('F3', 'Put it to work', [
     'Compress each pair into one sentence with a participial phrase. These '
     'are the kinds of sentences the discussion task rewards.',
     ('mono', ['(a) The rule is applied to every assignment. It becomes a formality.',
               '(b) The scheme was funded for one year only. It never had time to work.']),
   ]),
 ],
 'keys': [
  ('P1', [['In the first, ', ('she', {'bold': True}),
           ' is working. In the second, ', ('it', {'bold': True}),
           ' (the report) was written. In both cases the hidden subject is '
           'the subject of the main clause — that is the rule, and it has '
           'no exceptions outside the absolute construction.']]),
  ('P2', [['It says the ', ('technician', {'italic': True}),
           ' was left in the sun overnight. The participle grabs the nearest '
           'available subject, which is whatever the main clause starts with.'],
          ['Repair: ', ('Left in the sun overnight, the sample spoiled.',
                        {'italic': True}),
           ' Fix it by changing the main clause, not the phrase.']]),
  ('P3', [['(a) Having recorded the results, he cleaned up.'],
          ['(b) While checking the figures, I spotted the error.'],
          ['(c) Anyone repeating a module must re-register.'],
          ['Note that (c) is a different animal: it modifies a noun, not a '
           'clause.']]),
  ('F1', [['(a) ', ('Lost', {'bold': True}),
           ' — the files were lost; passive.'],
          ['(b) ', ('Arriving', {'bold': True}),
           ' — we arrived; active.'],
          ['(c) ', ('Delivered', {'bold': True}),
           ' — the parcel was delivered; passive.'],
          ['The test is always the same: did the subject do it, or was it done '
           'to the subject?']]),
  ('F2', [['(a) → Having finished the experiment, ',
           ('we', {'bold': True}), ' locked the lab.'],
          ['(b) → Walking to campus, ', ('we were caught in the rain',
                                              {'bold': True}), '.'],
          ['(c) → Written in 1890, ', ('the letter', {'bold': True}),
           ' had lain in the archive for a century. (We did not write it.)'],
          ['In every case the repair is to put the right noun in subject '
           'position.']]),
  ('F3', [['(a) Applied to every assignment, the rule becomes a formality.'],
          ['(b) Funded for one year only, the scheme never had time to work.'],
          ['Both now read as judgements: the participle has made the first the '
           'reason for the second.']]),
 ],
},

# ====================================================== family 6
{
 'id': 'BAS 043–050', 'task': 'BUILD A SENTENCE', 'time': '8 items',
 'function': 'Family 6 of 12 — verb complementation',
 'payload': {
   'Strategy': 'the verb decides what may follow it; this is memory, not logic',
   'Grammar': 'gerund, infinitive, object + infinitive, bare infinitive, causative',
   'Vocabulary': 'the high-frequency verbs that select each pattern',
   'Convention': 'a few verbs change meaning with the pattern, not just form',
 },
 'intro': [HOW,
   'There is no rule here that will save you. Which verbs take -ing and which '
   'take to is a fact about each verb, learned one at a time. What this family '
   'gives you is the dozen that appear most often in the writing tasks, plus '
   'the handful where the choice changes the meaning.'],
 'preview': [
  ('P1', 'Sort them now', [
     'Which take -ing, which take to, and which take either?',
     ('mono', ['keep · decide · avoid · manage · suggest',
               'remember · refuse · consider · stop · agree']),
   ]),
  ('P2', 'Meaning, not just form', [
     'These two do not mean the same thing. Say what each means.',
     ('mono', ['I remember locking the lab.',
               'I remembered to lock the lab.']),
   ]),
  ('P3', 'Who does what', [
     ['In which of these is somebody else doing the action?'],
     ('mono', ['(a) My tutor advised me to apply in writing.',
               '(b) My tutor agreed to write a reference.',
               '(c) I had the screen replaced.']),
   ]),
 ],
 'items': [
  (43, 'verb + gerund', 'Has he given up on the project?',
   ['No', 'he', 'working', 'keeps'],
   'No, he keeps working on it every weekend.',
   'on it every weekend.',
   'keep, avoid, consider, suggest, risk, deny and enjoy all take -ing. No to '
   'is possible after any of them.'),
  (44, 'verb + infinitive', 'Will she take the place?',
   ['She', 'to accept', 'has decided', 'the offer'],
   'She has decided to accept the offer after all.',
   'after all.',
   'decide, agree, refuse, manage, offer, promise and hope take to. Again, no '
   'choice is involved.'),
  (45, 'verb + object + infinitive', 'How did you get an extension?',
   ['My tutor', 'me', 'to apply', 'advised'],
   'My tutor advised me to apply in writing.',
   'in writing.',
   'advise, allow, encourage, remind, persuade and ask all insert a person '
   'before the to. The person is the one who acts.'),
  (46, 'verb + object + bare infinitive', 'How did you get in without a card?',
   ['The porter', 'me', 'in', 'let'],
   'The porter let me in through the side door.',
   'through the side door.',
   'make, let and have take a bare infinitive — no to. He made me wait, '
   'she let me go, I had him check it.'),
  (47, 'remember: -ing or to', 'Did you lock the lab?',
   ['I', 'locking', 'remember', 'it'],
   'I remember locking it, but I will check again.',
   'but I will check again.',
   'remember + -ing is a memory of a past act; remember + to is an obligation '
   'you did or did not discharge. stop, regret and try split the same way.'),
  (48, 'adjective + infinitive', 'Is the deadline negotiable?',
   ['The office', 'to move it', 'was willing', 'by a week'],
   'The office was willing to move it by a week, but no further.',
   'but no further.',
   'willing, reluctant, able, keen, likely and glad all take to. Note that '
   'the adjective, not the verb, is selecting here.'),
  (49, 'preposition + gerund', 'How did they justify the delay?',
   ['They apologised', 'for', 'not telling', 'us'],
   'They apologised for not telling us sooner.',
   'sooner.',
   'After any preposition the verb must be -ing: for not telling, before '
   'submitting, without asking, by changing. This is one of the few genuinely '
   'reliable rules in the family.'),
  (50, 'causative', 'Your laptop looks new.',
   ['I', 'the screen', 'had', 'replaced'],
   'I had the screen replaced under warranty.',
   'under warranty.',
   'have or get + object + past participle: somebody else did the work. '
   'Compare I replaced the screen, where you did it yourself.'),
 ],
 'followup': [
  ('F1', 'Sort the answer key', [
     'Go back to P1 and check yourself. Then add three more verbs of your own '
     'to each column from the items you have just built.',
   ]),
  ('F2', 'Error autopsy', [
     ('mono', ['(a) I suggest to meet on Thursday.',
               '(b) She made me to wait outside.',
               '(c) He apologised for not to tell us.',
               '(d) I am looking forward to hear from you.']),
   ]),
  ('F3', 'Put it to work', [
     'Each of these is an email sentence. Complete it with the right form.',
     ('mono', ['(a) I would be grateful if you could consider (extend) …',
               '(b) I am writing to apologise for (miss) …',
               '(c) Could I ask you (confirm) … ?']),
   ]),
 ],
 'keys': [
  ('P1', [[('-ing:', {'bold': True}),
           ' keep, avoid, suggest, consider.  ',
           ('to:', {'bold': True}),
           ' decide, manage, refuse, agree.  ',
           ('either, with a change of meaning:', {'bold': True}),
           ' remember, stop.']]),
  ('P2', [['The first means the locking happened and I can picture it. The '
           'second means the obligation existed and I discharged it.'],
          ['Rule of thumb: ', ('-ing looks back', {'bold': True}),
           ', ', ('to looks forward', {'bold': True}),
           '. The same logic explains stop smoking (you quit) against stop to '
           'smoke (you paused in order to).']]),
  ('P3', [[('(a) and (c).', {'bold': True}),
           ' In (a) I apply; in (c) somebody at a repair shop replaces the '
           'screen. Only in (b) does the subject of the sentence do the thing '
           'the infinitive names.'],
          ['This is why the causative is so useful in an email: ',
           ('I had the form signed', {'italic': True}),
           ' reports the outcome without a word about who signed it.']]),
  ('F1', [['No fixed answer — but if you could not place ',
           ('suggest', {'italic': True}), ' you should note it now. ',
           ('I suggest to meet', {'italic': True}),
           ' is among the commonest errors in written English, and it appears '
           'in F2.']]),
  ('F2', [['(a) → I suggest meeting on Thursday. (Or: I suggest that we '
           'meet.)'],
          ['(b) → She made me wait. No to after make.'],
          ['(c) → for not telling us. Preposition, therefore -ing.'],
          ['(d) → looking forward to hearing. The ',
           ('to', {'italic': True}), ' here is a preposition, not part of an '
           'infinitive — which is exactly why this one catches even '
           'advanced writers.']]),
  ('F3', [['(a) consider ', ('extending', {'bold': True}), ' the deadline'],
          ['(b) apologise for ', ('missing', {'bold': True}), ' the meeting'],
          ['(c) ask you ', ('to confirm', {'bold': True})],
          ['Three different triggers: a verb that takes -ing, a preposition, '
           'and a verb that takes object + to.']]),
 ],
},
]
