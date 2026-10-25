// Proactive Business English A1 · Syria Edition · Book 1 · BOOK 1 TEST (Units 1–6) — Answer key, scripts, mark scheme
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('BOOK 1 TEST  ·  Units 1–6  —  Answer Key'));
out.push(p('_Proactive Business English · A1 · Book 1 · Syria Edition · Teacher\'s material_', { color: '7F7F7F' }));
out.push(box('Before you give this test', [
  '**60 marks: Reading 18 · Writing 18 · Listening 12 · Speaking 12.** **That is the A2 Key weighting (30 · 30 · 20 · 20 per cent) scaled to sixty**, **so a percentage from this paper can be compared with an examination result.** ⚠ **Say that to the class. It is the first time most of them have sat anything that can be compared with anything.**',
  '⚠ **Play every listening recording THREE times, not twice.** **The paper says so and it is a departure from every other level in this series.** **At A1 the first play is noise, the second is words and the third is meaning.** **A teacher who plays it twice is testing hearing, not listening.**',
  '⚠ **Arabic is allowed for questions to you, in every paper, including Speaking.** **The answers are in English.** **That is the Book 1 rule and the test does not change it** — **a test that withdraws the help the course gave is testing a different course.**',
  '⚠ **The pass mark is 30 out of 60, which is fifty per cent and the LanguageCert pass mark at this level.** **36 or more is a good pass.** **Under 30 means Units 1–6 again before Unit 7, and saying so is kinder than letting somebody into Book 2 who cannot say _twelve what?_**',
  '**Timing: Reading 25 · Writing 25 · Listening about 15 · Speaking about 6 in pairs.** ⚠ **Reading is 25 minutes, not 30** — **the A1 texts are shorter and twenty-five minutes is already generous.** **If most of the room is still writing at 25, let them finish and write the time you actually gave on the top of the paper.**',
], C.grey, C.navy));

// ===================== PAPER 1 =====================
out.push(h2('PAPER 1  ·  READING    (18 marks)'));
out.push(h3('Part 1  ·  Notices  (6 marks, 1 each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6'], [['Answer', 'B', 'B', 'C', 'A', 'B', 'B']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(note("All six notices are taken from the six units in order, which is deliberate: a learner who has done the course recognises every one of them and a learner who has not recognises none. Question 3 is the only one with two pieces of information in the stem — shelf 1 is the bottom AND rows count from the door — and it is the one to expect wrong, because option C is the only answer that contains both halves and learners who read for the first match stop at A."));
out.push(h3('Part 2  ·  Three men at Sham Trading  (4 marks, 1 each)'));
out.push(table(['Q', '7', '8', '9', '10'], [['Answer', 'A', 'B', 'C', 'A']], [1.2, 0.8, 0.8, 0.8, 0.8]));
out.push(note("Question 7 needs arithmetic from the text: Fadi starts at six and finishes at six, so twelve hours. Nothing in the paragraph says twelve, and a learner who answers C has chosen the man who starts earliest. Question 10 catches the learners who answer 7 and 10 the same way for a different reason — Fadi has the only big licence, which is stated, and the arithmetic is not needed twice."));
out.push(h3('Part 3  ·  A short text  (5 marks, 1 each)'));
out.push(table(['Q', '11', '12', '13', '14', '15'], [['Answer', 'B', 'C', 'B', 'B', 'C']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(note("Question 14 is the one worth marking carefully: the answer is not talking, which is stated as the stopping is harder than the talking, and a learner has to recognise that stopping and not talking are the same thing. Question 15 is the whole of 6.7 in one item and the three options are a fair test of whether the learner understood that nobody was at fault — A and B both blame somebody and C does not."));
out.push(h3('Part 4  ·  One word in each gap  (3 marks, 1 each)'));
out.push(table(['16', '17', '18'], [['**on**', '**at**', '**on**']], [1, 1, 1]));
out.push(note("Three prepositions and two of them are the same word doing two different jobs: on a day in 16, at a time in 17, on a shelf in 18. That is on purpose. A learner who has learned on Monday and at seven as a pair, which is how 3.1 and 3.2 teach them, gets all three; a learner who has learned them as a list of small words gets 17 wrong, because in feels right to an Arabic ear for a clock time. Accept nothing else in any of the three."));
out.push(sp());
out.push(box('Marking Paper 1', [
  '**18 marks, one per question, no half marks.** ⚠ **Circle the wrong ones and write nothing else.** **At A1 a corrected reading paper with explanations on it is a paper nobody reads.**',
  '⚠ **The profile to expect: Part 1 high, Part 2 split on question 7, Part 3 high except question 14, Part 4 split on question 17.** **A class that scores 14 or more out of 18 has Book 1.**',
], C.lteal, C.navy));

// ===================== PAPER 2 =====================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (18 marks)'));
out.push(h3('Part 1  ·  A message  (6 marks)'));
out.push(sample('Model answer (30 words, four sentences)', [
  '**Mouallem rang at half past one. He says the March invoice is wrong — sixteen boxes, we paid for twelve. He wants a credit note. He rings back at four.**',
]));
out.push(table(['Marks', 'For'], [
  ['**2**', '⚠ **FOUR sentences — not three, and not one long one**'],
  ['**1**', '**who rang, by name**'],
  ['**1**', '**when he rang — a time**'],
  ['**1**', '**what he wants**'],
  ['**1**', '⚠ **when he rings back — a TIME, not _later_**'],
], [1, 5]));
out.push(note("Count the sentences with a pen, four strokes in the margin, before you read for anything else. It is the fastest mark in the paper and it is the one the course has drilled six times. The commonest shape of a five-mark answer is three sentences with the second one carrying two ideas, and the learner cannot see it until somebody counts."));
out.push(h3('Part 2  ·  A note you write yourself  (12 marks)'));
out.push(sample('Model answer (47 words)', [
  '**GOODS RECEIVED — NO DELIVERY NOTE**',
  '**Date:** 18 March 2026   **Time:** 9.20',
  '**Driver:** Marwan Haddad   **Lorry:** 345 871',
  '**Goods:** 6 pallets, empty bags.',
  '⚠ **Not checked:** did not count the bags inside — the pallets are wrapped.',
  '**Driver says:** the Homs office did not give him a note.',
  '**Received by:** _A. Zreik_   **Driver\'s signature:** _M. Haddad_',
]));
out.push(table(['Marks', 'For'], [
  ['**2**', '**the date, with the month IN LETTERS** _(1 for a date at all, 1 for letters)_'],
  ['**1**', '**a time as well as a date**'],
  ['**2**', '**the driver\'s name AND the lorry number** _(1 each — the lorry number is the one that finds the lorry again)_'],
  ['**2**', '**the goods with a quantity AND a unit** _(1 each; _6 pallets_ scores both, _6_ scores one)_'],
  ['**2**', '⚠ **a line saying what was NOT checked** — **the hardest idea in Unit 5 and the one that protects the writer**'],
  ['**2**', '**a space for BOTH signatures** _(1 each)_'],
  ['**–1**', '⚠ **a claim to have checked something that could not be seen** _(e.g. "all correct" with the pallets wrapped)_'],
], [1, 5]));
out.push(note("The minus mark is the only negative marking in either test and it is there because the fault it catches is worse than an omission. A note that says all correct about wrapped pallets has not just failed to protect the writer — it has moved the blame onto him with his own signature underneath, which is exactly what 5.6 says a paper must never do. Use it sparingly and explain it once when you hand the papers back."));
out.push(sp());
out.push(box('Marking Paper 2', [
  '⚠ **Mark the LIST, not the English.** **Spelling, handwriting and word order are not marked in this paper** — **the five bullets on the question are the mark scheme and the learner can see them.**',
  '⚠ **But do mark the month in letters, the unit on the quantity, and the _not checked_ line.** **Those three are the content of Book 1 and they are worth five of the twelve marks between them.**',
  '**Part 2 asks for 40 words or more.** **A note shorter than that has left something out, and the something will be in the table above.** ⚠ **Do not take a mark off for length as well as for the missing item** — **that is the same fault counted twice.**',
], C.lteal, C.navy));

// ===================== PAPER 3 =====================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (12 marks)'));
out.push(p('⚠ **Play each recording THREE times.** **Say nothing between the plays.**'));
out.push(h3('Part 1  ·  Four short conversations  (4 marks, 1 each)'));
out.push(table(['Q', '19', '20', '21', '22'], [['Answer', 'B', 'C', 'A', 'B']], [1.2, 0.8, 0.8, 0.8, 0.8]));
out.push(dlg('Track BT-1  ·  Script (four short conversations)', [
  ['Abu Yasser', '**1**  The lorry comes at quarter past seven.'],
  ['Ammar', 'Quarter past seven. And me?'],
  ['Abu Yasser', 'At the gate at seven. Not quarter past. Seven.'],
  ['Samih', '**2**  Nour, put the packets on shelf four.'],
  ['Nour', 'I can reach shelf three. I cannot reach shelf four.'],
  ['Samih', 'Then wait for the ladder. Do not stand on a carton.'],
  ['Ammar', '**3**  Abu Yasser. I am twenty minutes late. The road was closed at Jaramana.'],
  ['Abu Yasser', 'Twenty minutes. All right. Next time, telephone.'],
  ['Ammar', '**4**  Abu Yasser, can I swap Thursday?'],
  ['Abu Yasser', 'Swap with who?'],
  ['Ammar', 'With Samih. He is off on Thursday.'],
  ['Abu Yasser', 'Then ask Samih first. Not me.'],
]));
out.push(note("Item 19 is the trap of the unit it comes from: two times are said, quarter past seven and seven, and the question asks about the gate. A learner who writes 7.15 has heard the lorry. Item 21 has two numbers and two reasons in play across items 21 and the distractors; the road, not the bus, and twenty minutes, not forty. Read the options aloud once before the first play so that nobody loses a mark to the reading rather than the listening."));
out.push(h3('Part 2  ·  Complete the message slip  (5 marks, 1 each)'));
out.push(table(['23', '24', '25', '26', '27'], [[
  '**Qassar**',
  '**six** _(or 6)_',
  '**0932 445 661**',
  '**the Thursday order** _(accept: the order, six pallets, pallets)_',
  '**four o\'clock** _(or 4.00)_',
]], [1, 0.8, 1.4, 1.8, 1.2]));
out.push(dlg('Track BT-2  ·  Script (a telephone call)', [
  ['Ammar', 'Sham Trading, good morning.'],
  ['Caller', 'Good morning. Is Mrs Mansour there?'],
  ['Ammar', 'She is at lunch. She is back at two. Your name, please.'],
  ['Caller', 'Qassar.'],
  ['Ammar', 'Sorry? Again, please.'],
  ['Caller', 'Qassar. Q, A, S, S, A, R.'],
  ['Ammar', 'Q, A, S, S, A, R. Six letters. Qassar. Your number, please.'],
  ['Caller', 'Zero nine three two, four four five, six six one.'],
  ['Ammar', 'Zero nine three two, four four five, six six one. Is that it?'],
  ['Caller', 'That is it. Tell her the Thursday order is six pallets, not four.'],
  ['Ammar', 'Six pallets, not four. Thursday.'],
  ['Caller', 'And I ring back at four o\'clock.'],
  ['Ammar', 'Four o\'clock. I will tell her at two, and the slip goes on the spike now.'],
]));
out.push(note("Gap 25 must be in groups to score. A learner who writes 0932445661 has the eleven digits and has not done the task, and the task is the thing that stops the digits being wrong — mark it zero and explain it once. Gap 24 is the letter count, which the course has used as a check since Unit 1.2, and it is the only gap where the answer is a number that nobody says twice. Gap 26 is open on purpose: anything that names the Thursday order scores, because this is a listening test and not a vocabulary one."));
out.push(h3('Part 3  ·  A longer talk  (3 marks, 1 each)'));
out.push(table(['Q', '28', '29', '30'], [['Answer', 'A', 'B', 'B']], [1.2, 0.8, 0.8, 0.8]));
out.push(dlg('Track BT-3  ·  Script (a supervisor and a new storeman)', [
  ['Abu Yasser', 'Three things on your first morning, and they are the three that cost money.'],
  ['Abu Yasser', 'One. The rows. Row one is the row nearest the door, and you count from the door, always. Not from the wall. Everybody asks, so ask.'],
  ['Abu Yasser', 'Two. The delivery note. The driver will say sign here and he will be late. You say: I have not counted it yet, two minutes. Then you count it yourself. Not his number — yours.'],
  ['Abu Yasser', 'Three. Shelf four. You need the ladder for shelf four and the ladder is next to the long bench. If it is not there, put the thing on shelf three and tell me.'],
  ['Abu Yasser', 'And the one thing you never do. You never stand on a carton. Not a carton, not a pallet, not a chair. A man on a carton is a man in hospital.'],
]));
out.push(note("All three items are stated and none needs inference, which is right for a three-mark part at the end of an A1 listening paper. Item 29 is the only one where the correct option paraphrases rather than repeats — the talk says count it yourself and the option says count it yourself, but the distractor read the name at the top is also true of a delivery note and comes from Unit 5.1. A learner who chose A knows the course and misread the question."));
out.push(sp());
out.push(box('Marking Paper 3', [
  '**12 marks, one per question.** ⚠ **Gap 25 scores only if the number is in groups.** **Everything else is marked for content, not spelling** — **a learner who writes _Kassar_ for _Qassar_ in gap 23 scores the mark.**',
  '⚠ **The profile to expect: Part 1 split on item 19, Part 2 split on gap 25, Part 3 high.** **If Part 3 is low across the room, you played it twice.**',
], C.lteal, C.navy));

// ===================== PAPER 4 =====================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (12 marks)'));
out.push(p('**In pairs, about six minutes.** **Part 1 — six questions to each candidate, 6 marks. Part 2 — the two candidates talk to each other, 6 marks.**'));
out.push(h3('Part 1  ·  What a 5–6 answer sounds like'));
out.push(sample('Model answers', [
  '**1**  _My name is Samih Qassar. Q, A, S, S, A, R. Six letters._',
  '**2**  _I am a storeman. My supervisor is Abu Yasser Khalil._',
  '**3**  _I work Sunday to Thursday. Monday is the busy day, because the big delivery comes._',
  '**4**  _I start at half past six. That is six thirty and half past six. I finish at four o\'clock._',
  '**5**  _The count sheets are on the table. The labels are in a small box on the top shelf. The ladder is next to the long bench._',
  '**6**  _I can reach shelf three. I cannot reach shelf four. I put the thing on shelf three and I tell Samih._',
]));
out.push(note("Question 1 is the only one with a right answer and it has three parts: the name, the letters, the count. The other five are marked on shape rather than content. Question 6 is the one that separates the room: half the candidates will stop at I cannot reach shelf four, which is the useless half of the answer, and the ones who add what they do instead have understood 4.6 rather than memorised it."));
out.push(h3('Part 2  ·  What a 5–6 conversation sounds like'));
out.push(sample('Model — the twelve-box problem', [
  '**A** _The paper says twelve boxes. I counted eleven._',
  '**B** _Eleven. Are you sure? Count it again._',
  '**A** _I counted twice. Eleven boxes._',
  '**B** _The driver is late. He has four more stops._',
  '**A** _I say: I have not counted it yet, two minutes. Then he waits._',
  '**B** _You counted. So what do we write?_',
  '**A** _I write eleven and I sign it. And I write "one box short" next to my name._',
  '**B** _And the driver signs it too?_',
  '**A** _The driver signs it too. Then it is a fact, not an argument. What do you think?_',
  '**B** _I think the same. And we tell the office today, not next week._',
]));
out.push(table(['', '5–6 marks', '3–4 marks', '0–2 marks'], [
  ['**Words and sentences** (6)', 'Full sentences. The -s on _he starts_. _on_ a day, _at_ a time. Place words. A quantity with its unit. _can / cannot_. The telephone sentences when they are needed.', 'Some good language; repeats the same words; drops the -s; gives a bare number with no unit.', 'Single words and bare yes / no; very little work language.'],
  ['**Being understood** (6)', 'Slow and clear. Spells a name when asked. Reads a number back. Asks the partner a question. Reaches a decision.', 'Answers when asked but waits to be asked; agrees with everything; sometimes hard to hear.', 'Needs a lot of help; hard to understand; no decision.'],
], [1.1, 1.8, 1.4, 1.1]));
out.push(sp());
out.push(box('Marking Paper 4', [
  '⚠ **The two things that decide the second band are not language at all:** **did the candidate ask the partner a question, and did the pair reach a decision?** **A pair who both spoke well and agreed with everything score 4, not 6**, **and they should be told why.**',
  '⚠ **Say _yes_ or _no_ and nothing else and the answer scores nothing.** **That is the first rule in the book, from the first hour, and the test keeps it.** **One prompt — _and?_ — then move on.**',
  '⚠ **Arabic is allowed for a question to you.** **A candidate who asks in Arabic what the task means and then does it in English loses no marks.** **A candidate who answers the task in Arabic scores nothing for that answer.**',
  '**Mark while they speak, not afterwards.** ⚠ **And give each candidate their two numbers before the next pair comes in** — **a speaking mark the learner hears three days later teaches nothing.**',
], C.lteal, C.navy));
out.push(sp());
out.push(box('The whole paper  —  60 marks', [
  table(['Paper', 'Marks', 'Questions', 'What it is really testing'], [
    ['**Reading**', '**18**', '1–18', 'whether the six units\' notices and documents can be read at speed'],
    ['**Writing**', '**18**', '— ', '⚠ **four sentences, and a paper that protects the writer**'],
    ['**Listening**', '**12**', '19–30', 'names spelled, numbers in groups, and a procedure heard once'],
    ['**Speaking**', '**12**', '— ', '⚠ **full sentences, a question to the partner, and a decision**'],
  ], [1.2, 0.8, 1, 4]),
  '**Pass 30. Good pass 36.** ⚠ **Under 30: Units 1–6 again before Unit 7, and say so plainly** — **letting somebody into Book 2 who cannot say _twelve what?_ is not a kindness.**',
], C.grey, C.navy));
out.push(note("Teacher's note. Four things about this test and the first is the three plays. The paper tells the candidates that each recording is played three times and that is not generosity, it is the A1 listening condition: the first play is noise, the second is words, the third is meaning. A teacher who plays twice will see Part 3 collapse across the whole room and will think the class cannot listen. Second, the Arabic. It has been allowed all year and it is allowed in the test, including in Speaking, for questions to you. A test that withdraws the help the course gave is testing a different course, and the quiet learners are the ones who would lose. Third, the negative mark in Paper 2. It is the only one in either test and it catches a note that claims to have checked wrapped pallets. That fault is worse than leaving the line out, because the learner has moved the blame onto himself with his own signature underneath, which is the thing 5.6 exists to prevent. Use it once, explain it once, and do not hunt for it. Fourth, what the two halves of the mark scheme are actually for. Reading and Listening test whether the course was learned. Writing Part 2 and Speaking Part 2 test whether it can be used: a note that protects its writer, and a pair who ask each other something and decide. A learner can pass this paper on the first two and still not be ready, so look at the Writing Part 2 and Speaking Part 2 marks separately before you tell anybody to go on to Unit 7."));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 1 · Syria Edition · Book 1 Test · Answer Key');
module.exports = out;
