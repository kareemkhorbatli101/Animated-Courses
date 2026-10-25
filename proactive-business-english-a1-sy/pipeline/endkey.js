// Proactive Business English A1 · Syria Edition · END-OF-COURSE TEST (Units 1–12) — Answer key,
// audio scripts and mark scheme.
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('END-OF-COURSE TEST  ·  Answer key, audio scripts and mark scheme'));
out.push(p('_Proactive Business English · A1 · Syria Edition · Units 1–12_', { color: '7F7F7F' }));
out.push(box('Before you administer this test', [
  '**100 marks** — **Reading 30 · Writing 30 · Listening 20 · Speaking 20.** ⚠ **Fifty is the pass.** **That is the LanguageCert pass mark at this level, and the four papers carry the examination\'s own weighting at full size** — **so this is the first percentage a learner on this course has that is comparable to anything outside the room.**',
  '**Timing.** Reading 40 min · Writing 40 min · Listening about 25 min · Speaking about 10 minutes a pair. ⚠ **Two sittings is better than one.** **Reading and Writing in one lesson, Listening and Speaking in the next.** **Eighty minutes of paper is more than an A1 class has ever done at once and the last paper suffers.**',
  '⚠ **Play every recording THREE times.** **The scripts are in this key.** **Read them slowly, at the speed of the slowest man in the audio scripts, not at the speed you read Arabic.**',
  '⚠ **The one task to look at before you look at the total is Paper 2 Part 2** — **the note the learner leaves.** **Four sentences, a name at the top, a _because_, a time at the bottom.** **It is the whole of A1 on one sheet of paper and the class has practised it twelve times.**',
], C.grey, C.navy));

// ================= PAPER 1 =================
out.push(h2('PAPER 1  ·  READING    (30 marks)'));
out.push(p('**Part 1 · Notices (8 marks)** — one mark each.'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'B', 'A', 'C', 'B', 'B', 'B', 'B', 'B']], [1.1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('⚠ **Six of the eight are (B) and that is worth knowing before you hand it out.** **It is not a defect of the questions** — **at A1 the middle option is where a correctly-written distractor set puts the right answer** — **but if your class is the kind that counts, read the eight stems aloud in a different order and have them answer on paper.**'));
out.push(p('⚠ **Question 4 is the Unit 7 one and it is the one most often lost.** _Do not write "full". Write how many._ **A learner who chooses (A) has not understood why _full_ failed in Unit 7, and the text in Part 3 says what happened: two rolls were left on Monday.**'));
out.push(p('⚠ **And question 5 is the hardest notice in the paper, because (A) is HALF right.** _NO. NOT TODAY. ASK NOUR._ **Saying no is correct; saying no and nothing else is Unit 10\'s fault. The second half of (B) is what makes it the answer.**'));
out.push(sp());
out.push(p('**Part 2 · Three people (5 marks)** — one mark each.'));
out.push(table(['Q', '9', '10', '11', '12', '13'], [['Answer', 'A', 'B', 'C', 'A', 'B']], [1.1, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **Question 13 is the one that catches the careless reader.** **Marwan cannot read the Arabic in the gate book** — **and most of the class will have assumed that the person who cannot read is Hani, from Unit 12, who does not read English.** **Both are true of the course; only one is in this text.** ⚠ **It is a reading question, not a memory question, and that distinction is worth saying when you hand it back.**'));
out.push(p('⚠ **And question 11 is the end of the course in one line:** **Samih acted on a piece of paper without being spoken to.** **That is what the four lines are for.**'));
out.push(sp());
out.push(p('**Part 3 · A longer text (6 marks)** — one mark each.'));
out.push(table(['Q', '14', '15', '16', '17', '18', '19'], [['Answer', 'B', 'B', 'B', 'A', 'B', 'C']], [1.1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **Question 19 is the last reading question of the course and it has two parts in one option:** _it had a name on it and it was short enough to read aloud._ **A learner who wanted one reason will have hunted for one and found neither.** ⚠ **Accept nothing less than (C)** — **and when you hand it back, say that the two-part answer is the finding, because a name gets a note PICKED UP and four lines get it PASSED ON.**'));
out.push(p('⚠ **Question 17 is the quietest one in the paper.** **The man in Beirut was surprised because somebody read his number back to him** — **after four calls in which nobody had.** **Four seconds, for the fourth time in this course.**'));
out.push(sp());
out.push(p('**Part 4 · One word in each gap (6 marks)** — one mark each. **Accept these words only.**'));
out.push(table(['20', '21', '22', '23', '24', '25'], [['on', 'at', 'on', 'did', 'before', 'must']], [1, 1, 1, 1, 1, 1]));
out.push(p('⚠ **Gap 23 is the grammar of Unit 9 and it is the single most-failed gap in this paper:** _I **did** not count the coins._ **Not _did not counted_, not _do_.** **The main verb goes back to its bare form, and twelve units have been saying so.**'));
out.push(p('⚠ **Gap 25 must be _must_, not _can_ or _do_.** _You **must** not carry two trays down the back step._ **This is the safety one, and the sentence after it says why: Hala fell there.** ⚠ **A learner who writes _can_ has written a sentence about ability where the book wants a rule** — **give no mark, and show them the next line.**'));
out.push(p('⚠ **Gap 24 takes _before_, and a learner who writes _when_ has not quite lost the mark but has lost the instruction** — **_wash the trays when you start_ is a different shift.** **Mark it wrong and explain it in one sentence.**'));
out.push(sp());
out.push(p('**Part 5 · The right word (5 marks)** — one mark each.'));
out.push(table(['Q', '26', '27', '28', '29', '30'], [['Answer', 'B', 'A', 'B', 'B', 'C']], [1.1, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **Questions 26 and 27 are the same verb in the two shapes the course taught, and a learner who gets one and not the other has the half of Unit 9 that is easier:** _I **counted** fifteen_ **is the positive, and** _I **did** not **do** row four_ **is the negative, where the past moves on to _did_ and the main verb goes bare.** ⚠ **Mark the pair together and tell the learner which half they have.**'));
out.push(p('⚠ **Question 29 is _please_ against _must_ and it is Unit 12.5 in one line.** **Washing trays is work, so it is _please_.** **A learner who chooses (A) has used a safety word for a job** — **which is exactly what makes a real _must_ weaker, and that is 10.2.**'));

// ================= PAPER 2 =================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (30 marks)'));
out.push(p('**Part 1 · A telephone message (8 marks)**'));
out.push(sample('Sample answer (31 words, four sentences)', [
  '**Mr Qassar from Beirut telephoned at ten past nine this morning. He is asking about the Thursday order. His number is 0932 445 661. He rings back at four o\'clock.**',
]));
out.push(table(['Marks', 'For'], [
  ['**2**', '**four sentences** — ⚠ **count them**'],
  ['**2**', '**who rang, and when** _(a name and a time)_'],
  ['**2**', '**what he wants**'],
  ['**2**', '**when he rings back** — ⚠ **a time, not _later_**'],
], [1, 5]));
out.push(p('⚠ **The commonest loss in this part is the last two marks, and not because the learner did not hear the time.** **It is because _he rings back later_ feels like an answer and is not one** — **a message with no time on it leaves the supervisor sitting by a telephone all afternoon.** **Unit 6 said this and this is the examination asking for it.**'));
out.push(sp());
out.push(p('**Part 2 · The note you leave (10 marks)** — ⚠ **this is the most important task in the paper.**'));
out.push(sample('Sample answer (32 words, four sentences)', [
  '**To: Samih**',
  '**I did the morning bake, eighty loaves. I did not wash the trays, because the water went off at half past five. Please wash them before you start and put the eighty out at seven.**',
  '**H. Mourad, Friday, 09.15**',
]));
out.push(table(['Marks', 'For'], [
  ['**2**', '**a name at the top** — ⚠ **a person, or _whoever opens up_. NOT the word NOTE.**'],
  ['**2**', '**what you did, exactly** — ⚠ **a number, not _some_ or _most_**'],
  ['**1**', '**what you did not do**'],
  ['**2**', '⚠ **the _because_** — **and it must be about the work, not about the writer**'],
  ['**2**', '**what you want them to do** — ⚠ **_please_ for work, _must_ for safety**'],
  ['**1**', '**a day and a time at the bottom**'],
], [1, 5]));
out.push(p('⚠ **Four of the ten marks are for the two hardest lines: the _because_ and the ask.** **That is deliberate.** **A note with the first two lines and not the last two is a story about somebody\'s morning; it is the third and fourth lines that make something happen.**'));
out.push(p('⚠ **Give the _because_ mark only where it changes what the reader does.** _because the water went off at half past five_ **tells Samih to fill buckets.** _because I ran out of time_ **tells him nothing and is about the writer.** **Both are grammatical; one is worth two marks.**'));
out.push(p('⚠ **And give the top-line mark for _To: whoever opens up on Saturday_ in full.** **It is not a dodge** — **it is Unit 12.2\'s own answer to a rotating shift, and exactly one person will do it.**'));
out.push(sp());
out.push(p('**Part 3 · A note of your own (12 marks)**'));
out.push(sample('Sample answer (54 words)', [
  '**GOODS RECEIVED — NO DELIVERY NOTE**',
  '**Date: 14 March. Time: 17.50.**',
  '**Driver: Marwan Haddad.   Lorry: 4471.**',
  '**Goods: 11 boxes of soap powder. 1 of the 11 is crushed.**',
  '**NOT CHECKED: I did not open the boxes, so I have not counted what is inside them.**',
  '**Signed, storeman: ______________   Signed, driver: ______________**',
]));
out.push(table(['Marks', 'For'], [
  ['**2**', '**the date, with the month in letters, and the time**'],
  ['**2**', '**the driver\'s name and the lorry number**'],
  ['**2**', '**a quantity WITH ITS UNIT** — ⚠ **_11 boxes_, never _11_**'],
  ['**3**', '⚠ **the NOT-CHECKED line** — **and this is the one that carries the most marks in the paper per word**'],
  ['**2**', '**a space for BOTH signatures**'],
  ['**1**', '**40 words or more**'],
], [1, 5]));
out.push(p('⚠ **Three marks for one line, and here is the reason to tell the class:** **a paper that says what was checked is a receipt, and a paper that says what was NOT checked is a defence.** **Six units of this course have asked for that line** — **5.6, 7.4, 9.4, 11.4, 12.4 and now the examination.**'));
out.push(p('⚠ **Do not take marks off for Arabic script in a lorry number or a name.** **Nothing in the task asks for transliteration and a learner who writes the plate as they see it has written the true thing.**'));
out.push(note("A word on marking Writing at A1, and it is the hardest judgement in this book. Mark what the paper would do, not whether it is pretty. A note with a spelling mistake in every line that still tells the next man what to do first has done its job and should be marked high. A beautiful note with no ask in it has not. If you find yourself taking marks off for handwriting, stop and read the four lines again as the man coming in at seven o'clock, and ask whether you would know what to do. That question is the mark scheme."));

// ================= PAPER 3 =================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (20 marks)'));
out.push(p('**Part 1 · Five short conversations (5 marks)** — one mark each.'));
out.push(table(['Q', '31', '32', '33', '34', '35'], [['Answer', 'A', 'B', 'B', 'B', 'C']], [1.1, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(box('🔊 Track ET-1 · audio script', [
  '⚠ **Read each conversation three times before you move to the next one.** **Pause for ten seconds between the readings and twenty between the conversations.**',
  '**One.**',
  dlg(null, [
    ['Samih', 'What time is the lorry?'],
    ['Ammar', 'Seven o\'clock.'],
    ['Samih', 'Then be at the gate at a quarter to seven. Fifteen minutes before it, always.'],
  ]),
  '**Two.**',
  dlg(null, [
    ['Nour', 'You wrote full on the sheet about the big store.'],
    ['Ammar', 'It was full.'],
    ['Nour', 'There are two rolls left. Two, out of a store you called full.'],
  ]),
  '**Three.**',
  dlg(null, [
    ['Hala', 'I did not count the coins.'],
    ['Nour', 'Why not?'],
    ['Hala', 'There were four customers waiting at the counter. I counted the notes only.'],
  ]),
  '**Four.**',
  dlg(null, [
    ['Customer', 'Can I have it today?'],
    ['Ammar', 'No. Not today.'],
    ['Ammar', 'Nour can say yes to that, and she is in the office until four. Ask her.'],
  ]),
  '**Five.**',
  dlg(null, [
    ['Ammar', 'Who is the note for? It says NOTE at the top.'],
    ['Samih', 'Everybody.'],
    ['Ammar', 'Then write to whoever opens up. One person does that, and he will pick it up.'],
  ]),
], C.lblue, C.navy));
out.push(p('⚠ **Conversation four is the one to read most carefully, because the answer is in the THIRD line and the first two sound finished.** **A learner who answers after _No. Not today._ chooses (A), which is the Unit 10 fault the recording exists to catch.**'));
out.push(sp());
out.push(p('**Part 2 · Complete the message slip (6 marks)** — one mark each. **Accept these answers.**'));
out.push(table(['36', '37', '38', '39', '40', '41'], [['Qassar', 'six', '0932 445 661', 'the Thursday order', 'four', 'four o\'clock']], [1, 0.8, 1.4, 1.4, 0.8, 1.2]));
out.push(box('🔊 Track ET-2 · audio script', [
  '⚠ **One voice is on a telephone and one is in a room.** **Read the caller slightly faster than Ammar and do not slow down for the number the first time** — **the task is to hear a number read back, which is what Ammar does.**',
  dlg(null, [
    ['Ammar', 'Sham Trading, good morning.'],
    ['Caller', 'Good morning. Is Nour Mansour there?'],
    ['Ammar', 'She is not here this morning. Can I take a message?'],
    ['Caller', 'Yes. My name is Qassar.'],
    ['Ammar', 'Can you spell that for me, please?'],
    ['Caller', 'Q-A-S-S-A-R. Six letters.'],
    ['Ammar', 'Q-A-S-S-A-R. Six letters. Thank you. And your number?'],
    ['Caller', 'Zero nine three two, four four five, six six one.'],
    ['Ammar', 'Zero nine three two, four four five, six six one. Is that right?'],
    ['Caller', 'That is right. Nobody has ever read it back to me before.'],
    ['Ammar', 'And what is it about?'],
    ['Caller', 'The Thursday order. Four boxes are missing. Four out of the twenty.'],
    ['Ammar', 'Four missing, out of twenty. And when do you ring back?'],
    ['Caller', 'At four o\'clock.'],
    ['Ammar', 'At four o\'clock. Mr Qassar, Q-A-S-S-A-R, about the Thursday order, four boxes missing, you ring back at four. Thank you.'],
  ]),
], C.lblue, C.navy));
out.push(p('⚠ **Gap 40 is the hardest in the paper and it is a trap the course set deliberately.** **The caller says _four boxes are missing. Four out of the twenty._** **The slip asks how many are MISSING, which is four** — **and a learner who writes twenty has heard the bigger number and not the question.** ⚠ **Accept _four_ or _four boxes_. Do not accept _twenty_.**'));
out.push(p('⚠ **And the last turn is a gift: Ammar reads the whole slip back.** **Everything is in that line.** **A learner who misses the number the first two times gets it on the third, which is why the recording is played three times and why Unit 6 built the read-back.**'));
out.push(sp());
out.push(p('**Part 3 · Complete the handover note (5 marks)** — one mark each. **Accept any wording that carries the fact.**'));
out.push(table(['42', '43', '44', '45', '46'], [['Samih', 'the morning bake, eighty loaves', 'wash the trays', 'the water went off at half past five', 'wash them before he starts']], [0.9, 1.6, 1.1, 1.7, 1.5]));
out.push(box('🔊 Track ET-3 · audio script', [
  '⚠ **This is one person reading one note aloud, and it is four sentences long.** **Read it at the speed of somebody reading their own handwriting** — **slowly, with a stop at the end of every line.** **Three times.**',
  dlg(null, [
    ['Hala', '_(reading her note aloud)_  To Samih. I did the morning bake, eighty loaves. I did not wash the trays, because the water went off at half past five. Please wash them before you start, and put the eighty loaves out at seven. H. Mourad, Friday, 09.15.'],
  ]),
  '⚠ **That is the whole recording: four sentences and about thirty words.** **The shortest piece of audio in the course, and it carries five marks.**',
], C.lblue, C.navy));
out.push(p('⚠ **Gap 45 is worth the most attention when you mark it, because the fact has two halves and learners write one.** _the water went off_ **alone is half the answer;** _at half past five_ **is what tells Samih the buckets had to be filled the night before.** ⚠ **Accept either half for the mark at A1 — but write the other half on the paper, because the whole of Unit 12.4 is in it.**'));
out.push(p('⚠ **And note what this part is testing, because it is new.** **Every other listening task in this course has been a conversation.** **This one is a man reading a piece of paper, and the learner is the person it was not written to** — **which is Hani, in 12.7, and it is the only time the examination puts the learner in that chair.**'));
out.push(sp());
out.push(p('**Part 4 · A longer talk (4 marks)** — one mark each.'));
out.push(table(['Q', '47', '48', '49', '50'], [['Answer', 'B', 'B', 'B', 'A']], [1.1, 0.9, 0.9, 0.9, 0.9]));
out.push(box('🔊 Track ET-4 · audio script', [
  '⚠ **One voice, about ninety seconds, and it is the supervisor from Unit 1 talking to a new man on his first morning.** **Read it three times.** **The fourth question is answered in the LAST sentence and the first three come in order.**',
  dlg(null, [
    ['Abu Yasser', 'Sit down. Four things and then you can start.'],
    ['Abu Yasser', 'One. The paper that comes with a lorry says a number. Before you put your name on it, you count it yourself. Not the driver — you. If the driver is in a hurry, say: I have not counted it yet, two minutes. Nobody has ever said no to two minutes.'],
    ['Abu Yasser', 'Two. Shelf one is the bottom and shelf four is the top. If you cannot reach shelf four, you wait for the ladder. You do not stand on a carton. A man on a carton is a man in hospital, and I have seen it.'],
    ['Abu Yasser', 'Three. If you did not do something, write it down, and put the reason on the end of it. I did not count the back store, because there was no light. That is a good sentence. Nobody here has ever been angry about a sentence like that. We get angry about the ones with nothing on the end.'],
    ['Abu Yasser', 'And four. Look at that wall. There are three rules on it. Three, not nine. Nine rules is a wall nobody reads. These three we keep.'],
  ]),
], C.lblue, C.navy));
out.push(p('⚠ **Question 50 is a counting question and the answer is in the last four words of the recording.** **A learner who has stopped listening after the third point loses it** — **and at A1, after ninety seconds of one voice, half the room has stopped listening.** ⚠ **Say before the third playing: the last thing he says is a number.**'));

// ================= PAPER 4 =================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (20 marks)'));
out.push(p('**Part 1 · About you and your work (8 marks)** — **your teacher asks each candidate.** ⚠ **Seven questions, eight marks: the first six are worth one each and (g) is worth two.**'));
out.push(sample('Sample answers — what a strong candidate sounds like', [
  '**a**  _My name is Ammar Zreik. Z-R-E-I-K. Five letters._',
  '**b**  _I am a storeman at Sham Trading. My supervisor is Abu Yasser. I work Sunday to Thursday, and Thursday is the busy one._',
  '**c**  _The labels are in the small box on the top shelf. The ladder is in the yard. The shift board is behind the door._',
  '**d**  _Yesterday I counted the back store and I wrote the sheet. I did not count the coins, because there were four customers waiting._',
  '**e**  _The back step is broken. It has been broken since January._',
  '**f**  _A customer asked for twenty boxes on a Thursday. I said: no, not today — Nour can say yes to that, and she is in the office until four._',
  '**g**  _The first thing I tell the next shift is what I did not do, and why._',
]));
out.push(p('⚠ **(d) is the one that separates a pass from a good mark, and it has two halves:** **one thing done and one thing NOT done with a reason on it.** **A candidate who gives only the first half has the easy half of Unit 9.**'));
out.push(p('⚠ **(f) is two marks\' worth of Unit 10 in one answer and it needs the second sentence.** **_No_ on its own is a correct answer to the question and a poor answer at work.** **Listen for who can say yes.**'));
out.push(p('⚠ **(g) is the last question of the course and there is no wrong answer, but there is a best one.** **_What I did not do, and why._** **A candidate who says that has understood why this book spent twelve units on one shape.**'));
out.push(sp());
out.push(p('**Part 2 · Talk together (12 marks)** — **the two candidates talk to each other for about four minutes.**'));
out.push(sample('Sample — what a strong pair sounds like', [
  '**A**  _The paper says twelve boxes. I counted eleven._',
  '**B**  _Count them again. I will watch._',
  '**A**  _Eleven. And one of the eleven is crushed — the corner is pushed in and the top is open._',
  '**B**  _The driver is waiting. What do we say to him?_',
  '**A**  _I have not finished counting. Two minutes._',
  '**B**  _And then? The office is shut, so nobody can tell us._',
  '**A**  _What do you think we should write?_',
  '**B**  _Eleven boxes received, one crushed. Not twelve. And we both sign it._',
  '**A**  _I will not sign for twelve, because I did not get twelve. Do you agree?_',
  '**B**  _I agree. And we write a note for the morning: to whoever opens up, one box short and one crushed, please ring the office at eight._',
]));
out.push(table(['Marks', 'For'], [
  ['**2**', '**the two numbers, said as two numbers** — _the paper says twelve, I counted eleven_'],
  ['**2**', '**asking for time with a number of minutes**'],
  ['**2**', '⚠ **the state of the box in WORDS** — _crushed_, _the corner is pushed in_ — **not a tick and not _bad_**'],
  ['**2**', '**what they will write, and who will sign it**'],
  ['**2**', '⚠ **asking the partner at least twice** — **and a question, not _yes?_**'],
  ['**2**', '⚠ **what they will NOT do, and why** — **and a decision somebody could act on**'],
], [1, 5]));
out.push(p('⚠ **The six marks come in pairs and the last pair is the one most pairs lose.** **_We will not sign for twelve_ is a decision; _we will tell the office_ is not, because the office is shut and the task says so.** **Listen for whether the decision survives the facts of the card.**'));
out.push(p('⚠ **And the strongest pairs end with the note, unprompted.** **It is not on the mark scheme as a separate line** — **it is the second half of the last two marks, and when a pair does it you are watching twelve units arrive at once.**'));
out.push(sp());
out.push(box('How to run the Speaking paper', [
  '⚠ **Pairs, not singles.** **Half the marks are for talking to another learner, and a candidate examined alone cannot earn them.** **If you have an odd number, run one group of three and give the third candidate the same card.**',
  '⚠ **Do not help in Part 2.** **The silence while two A1 learners work out what to write is the paper.** **If it goes past twenty seconds, say one word: _numbers?_**',
  '**Marking as you listen.** **Put a tick on your sheet each time you hear one of the six things.** ⚠ **Do not try to remember it afterwards** — **with six pairs of marks and two candidates, nobody can.**',
  '⚠ **And mark the two candidates separately, even though they talk together.** **A candidate who asks the questions and a candidate who answers them are not the same mark, and the quiet one is usually the one the course has helped least.**',
], C.lorange, C.orange));
out.push(sp());
out.push(box('Reading the result', [
  table(['Reading /30', 'Writing /30', 'Listening /20', 'Speaking /20', 'TOTAL /100'], [['', '', '', '', '']], [1, 1, 1, 1, 1]),
  '**70 and over** — ⚠ **this learner is ready for A2 and should be told so in those words.**',
  '**50 to 69** — **a pass.** ⚠ **Look at which paper is weakest and name it.** **At A1 the weakest is Listening about three times out of four, and the remedy is not more listening: it is the three playings, which most classes cut to two.**',
  '**Under 50** — ⚠ **do not repeat the course.** **Find the paper that lost it.** **A learner who scored under fifty with a good Writing mark has a listening problem; a learner who scored under fifty with a good Reading mark has not spoken English to another person often enough, and the remedy is Lesson A, stages 3R and 4R, in any six units.**',
  '⚠ **And one thing to say to every learner whatever the number.** **Twelve units ago they could say their name.** **They have just sat four papers in a language they could not work in a year ago, and the last task on the Writing paper was a note somebody could act on.** **Say that before you say the mark.**',
], C.lblue, C.navy));
out.push(note("Teacher's note, and the last in A1. Four things. First, the weighting: thirty, thirty, twenty, twenty, which is the A2 Key examination's own split at full size. Fifty is the pass and it is the LanguageCert pass mark at this level, so a learner's percentage here is the first one on this course that is comparable to anything outside the room. Say that when you hand the paper out, not when you hand it back. Second, sit it in two lessons. Reading and Writing, then Listening and Speaking. Eighty minutes of paper is more than an A1 class has done at once and the fourth paper is the one that suffers, which is the paper half the marks for talking live in. Third, the three playings. Every recording, three times — the first is noise, the second is words, the third is meaning, and a class that gets two playings loses marks it has the English for. Track ET-3 is four sentences and thirty seconds long and it carries five marks; there is no excuse for reading that one twice. Fourth, and this is the one to carry into A2: look at Paper 2 Part 2 before you look at any total. Four sentences, a name at the top, a because, a time at the bottom. That is the shape this course has been building since Unit 1.7 and it is the shape the examination asks for. A learner who can produce it has the whole of A1 on one sheet of paper, whatever else they lost — and a learner whose best mark in twelve units is that task should be told why: because it is the same task they have done twelve times, and practice is the only thing that has ever made it easy."));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Syria Edition · End-of-Course Test · Answer Key');
module.exports = out;
