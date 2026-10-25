// Proactive Business English A1 · Syria Edition · Book 1 · Unit 1 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 1  Your Name and the Gate'));
out.push(p('_Proactive Business English · A1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('Before you teach this unit', [
  'Every task has an answer. Where a task is open, this key gives a **full sample answer** — speaking, reports, checklists and homework too. Learners\' own answers will be different and that is correct.',
  '⚠ **This is the first unit of the first book of the course, and most of the class has never written an English sentence that anybody read.** **Teach it with that in mind.** The six functions are small on purpose: a name, the letters, a list, a third person, hello and goodbye, and _Sorry?_',
  '⚠ **Arabic is allowed in this class, all year, and the book says so on its first page.** **Do not ration it.** Ask in Arabic; say the English part in English. Every other level in this series restricts Arabic by unit; **A1 does not, because restricting it at A1 buys nothing and costs the quiet learners.**',
  '⚠ **The one thing to insist on from the first hour: a bare yes is the same as silence.** **Full sentences, every time, even slow ones.** A learner who answers _yes_ has told you nothing and has practised nothing.',
  '⚠ **1.6 is the most useful cycle in the unit and it is the one teachers skip.** ***Sorry? Again, please. Can you write it down?*** **A storeman who can say those three things will not put fourteen boxes where forty should go** — **and that is worth more than any grammar in this unit.**',
  '**Word counts.** Stage 6 asks for **15 words or more**, stage 7 for **20 to 35**. ⚠ **Cycle 7\'s written task is four sentences in about 30 words**, which is the shape of an A2 Key Writing Part 6 one step down.',
], C.grey, C.navy));

// ===================== 1.1 =====================
out.push(h2('1.1  My name is Ammar. I am the new storeman.'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect Arabic first and accept it.** **Write the English beside it on the board and leave it there for the whole lesson.** **Most classes produce _My name is…_ and nothing else; that is the right starting point.**'));
out.push(p('**b**  Open. **The four jobs are the four places in this book: the store, the lorry, the counter, the office.** ⚠ **Ask who in the room does none of the four, and put their job on the board too** — **it will be used in every Your turn for twelve units.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  **1** He is the new storeman.  **2** Ten to seven in the morning.'));
out.push(p('⚠ **Play it three times, not twice.** **At A1 the first listening is noise, the second is words and the third is meaning.** **The book says twice because every other level says twice; this unit is where you ignore that.**'));
out.push(p('⚠ **The line to point at is Abu Raed\'s last one:** _It is ten to seven. You are early. That is good._ **Ammar is ten minutes early on his first day and somebody notices.** **Ask the class whether anybody ever told them that.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Good morning. Your name, please.'],
  ['B', 'Good morning. My name is Fadi Saeed.'],
  ['A', 'And your job?'],
  ['B', 'I am the driver.'],
  ['A', 'Welcome. I am Abu Raed.'],
  ['B', 'Thank you.'],
]));
out.push(note("Run it twice with the book and twice without. The second run without the book is where the sentence actually arrives. Do not correct during the run; put two mistakes on the board afterwards and fix them together, which is the board clinic the unit already provides."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **The five phrases on the card.** **Expect four of five from most pairs.** **The one that goes missing is _Welcome._, because it is the only one that is not about the speaker.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — three colleagues', [
  '**Name:** Samih Qassar   **Job:** storeman',
  '**Name:** Hani Deeb   **Job:** driver',
  '**Name:** Rima Sibai   **Job:** office',
]));
out.push(note("Make them stand up and move. At A1 the sentence that is said sitting down to the person beside you is said once; the same sentence said standing up to three different people is said three times with three different faces, and the third one is the one that will still be there next week."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _This is Samih Qassar. He is the storeman._'));
out.push(p('⚠ **The mistake to expect, and it is the commonest in the unit:** ***This is Samih. Storeman.*** **The verb goes missing in the second sentence.** **Put it on the board, and ask the class to put _he is_ back in.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** He is a storeman.  **2** At 7.10.  **3** Ammar Zreik.'));
out.push(p('⚠ **Question 3 is the one with the finding in it.** **The learner has to read ACROSS the row, not down the column**, **and about half a class reads down.** **That is the skill the whole book is about and it starts here.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (19 words)', [
  '**Date:** 4 March   **Name:** Samih Qassar   **Job:** storeman   **In:** 7.00   **Out:** 4.00',
  '**My name is Samih Qassar and I am the storeman.**',
]));
out.push(p('**What to credit.** ⚠ **A big letter on both names.** **The job.** **Two times, not one.** ⚠ **And _am_ in the sentence.** **Do not take marks off for handwriting at A1. Take them off for a missing surname.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(p('⚠ **Read the feedback box aloud, in Arabic if you need to, and do not move on until the three moves are clear: point, read aloud, say the one missing thing.**'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "samih qassar". ⚠ **The big letter.**',
  '**(pointing)** Here. **(reading)** "In 7.00". ⚠ **Where is the out?**',
]));
out.push(note("Three moves and no more, and the third is the only one that is allowed to be a judgement. A learner who starts explaining has stopped doing the exercise. Point, read, name the one thing. If they want to say more, they say it in Arabic afterwards and that is fine."));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners, one line each, before and after.** **The class says what changed in one word: _the big letter_, _the surname_, _the time_.** **One word is the whole task.**'));
out.push(stage('7', 'Write freely – sample (31 words)'));
out.push(sample('Sample answer', [
  '**My name is Samih Qassar. I am the storeman at Sham Trading. I start at seven o\'clock in the morning. I finish at four o\'clock. Today is my first day.**',
]));
out.push(p('⚠ **Count the words with them, once, in front of the class.** **Thirty-one.** **A learner who has never counted words in a piece of writing does not know what thirty words looks like, and from Unit 12 the examination will ask for exactly that.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  ★ _I like the times._   ? _What is your job number?_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Papers on the wall, learners walking.** **One word on a paper they like.** **Do not make this a competition and do not name a best one** — **the point is that somebody else read it, which for most of this class has never happened in English.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (24 words)', [
  '**Abu Yasser Khalil — supervisor. Fadi Saeed — driver. Majd Bitar — counter. Nour Mansour — office. Four people. All four have a surname.**',
]));

out.push(pb());
// ===================== 1.2 =====================
out.push(h2('1.2  Z, R, E, I, K — how do you spell it?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Do not sing the alphabet.** **Adults in a workplace class find it humiliating and it does not help with the only letters that matter.** **Go straight to the four hard pairs.**'));
out.push(p('**b**  Open. **Every learner writes the letters of their own name.** **It is the first thing most of them will ever spell aloud in English and it should be theirs.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  **1** Five.  **2** He writes the name in Arabic letters.'));
out.push(p('⚠ **This is the cycle that introduces Abu Raed properly and the class will decide about him here.** **He has kept a perfect record for nine years in a script the office cannot read.** ⚠ **He is not a joke and he is not a problem to be solved.** **He is a man doing a skilled job without the language, and the unit ends by keeping his book, not replacing it.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Qassar. How do you spell it?'],
  ['B', 'Q, A, S, S, A, R.'],
  ['A', 'Again, please. Slowly.'],
  ['B', 'Q. A. S. S. A. R. Six letters.'],
  ['A', 'Is it a double S?'],
  ['B', 'A double S. Yes.'],
]));
out.push(note("Learners will produce a double letter in their own names and the book has not taught double. Teach it here as a phrase, not a rule: a double S. It is the single most useful thing a Syrian surname can need in English, and it arrives naturally in this exchange about twice in every class."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **The class writes the name and then shows it.** **Count the right ones.** **In a first class expect three or four of ten, and say the figure out loud** — **it is not a bad result, it is the baseline, and in Unit 6 you will take it again.**'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample('Sample — four names, checked', [
  '**I wrote:** Deeb — ✓   ·   **I wrote:** Sibay — ✗ **(it is Sibai)**   ·   **I wrote:** Najjar — ✓   ·   **I wrote:** Bitar — ✓',
  '⚠ **Three of four. The wrong one was an I at the end that I heard as a Y.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _I wrote four names. Three are right. The hard one was Sibai._'));
out.push(p('⚠ **Collect the hard letters on the board as the class reports.** **By the end there will be five or six, and they will be the same five or six in every Syrian class: I and Y, S and double S, the silent H, and the vowel at the end of a surname.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Z, R, E, I, K.  **2** 41.  **3** Five.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (17 words)', [
  '**Name:** SAMIH QASSAR   **Job:** Storeman   **Number:** 38   **Start:** 4 March',
  '**My surname is Qassar. It has six letters.**',
]));
out.push(p('**What to credit.** ⚠ **The name in capitals, every letter.** **The count of letters right.** **All four fields.** ⚠ **The commonest fault is the letter count, and the reason is that learners count without saying** — **make them say each letter aloud and point at it.**'));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A letter count that is wrong by one.** **A name not in capitals.** **A missing field.** ⚠ **Do not fail handwriting.**'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners spell aloud, the class writes, then they show.** **This is the first measurable thing in the course and it should feel like one.**'));
out.push(stage('7', 'Write freely – sample (29 words)'));
out.push(sample('Sample answer', [
  '**My cousin is called Sibai. It is a hard name. People write Sibay with a Y at the end. It is an I. I say it twice now.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The partner spells it aloud and the reader writes it.** **Then compare.** **That is the whole task and it takes ninety seconds.**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Count the right ones on the board.** **Compare with the figure from 3R in the same lesson.** **It goes up, every time, and the class should see the two numbers side by side.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (23 words)', [
  '**Deeb — D, E, E, B. Four letters. Najjar — N, A, J, J, A, R. Six letters, double J. Bitar — five. Qassar — six, double S.**',
]));

out.push(pb());
// ===================== 1.3 =====================
out.push(h2('1.3  This is the list. That is my name.'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect four or five lists: the shift list, the price list, the stock list, the telephone list, the list on the back of the door that nobody has read for a year.** **Write them all up.**'));
out.push(p('**b**  Open. **Most learners do not know where their own name is on any list at their work.** ⚠ **That is the finding of the cycle and it arrives in its first two minutes.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  **1** Eleven.  **2** The morning shift, seven to four.'));
out.push(p('⚠ **Abu Yasser\'s last two lines are the ones to teach:** _Read it. Do not ask me._ **He is not being unkind.** **A supervisor who is asked eleven times what the list says has eleven interruptions, and the list is on the wall.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'This is the store. And this is the shift list.'],
  ['B', 'Where is my name?'],
  ['A', 'Look. Eleven names. That is you — number seven.'],
  ['B', 'Yes. That is me.'],
  ['A', 'You are on the morning shift.'],
  ['B', 'Seven to four.'],
]));
out.push(note("Make them point. This and that cannot be taught sitting still: the hand does half the work and the word does the other half. A learner who says this while pointing at something across the room has not learnt it yet, and the pointing is how you see that."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **The five phrases.** **Watch the hands, not the words** — **if the hand and the word disagree, the word is wrong.**'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample('Sample — four things in the room', [
  '**this** — the table   ·   **that** — the window   ·   **this** — my pen   ·   **that** — the door',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _This is my pen. That is the door._ **(pointing at each)**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Number 7.  **2** Hani Deeb and Omar Sibai.  **3** The week of 4 March.'));
out.push(p('⚠ **Question 3 is the one that matters and it is deliberately last.** **The week is at the top and nobody looks at the top.** ⚠ **Ask the class how many of them checked the date on a list at work this week.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (21 words)', [
  '**Week of:** 11 March',
  '**1** Samih Qassar — morning   **2** Hani Deeb — afternoon   **3** Omar Sibai — morning   **4** Rima Sibai — afternoon',
  '**This is the list for the week of 11 March.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **No week at the top.** **A name with no shift.** **Four names that are not numbered.**'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Only the week line.** **A list with no week is the fault this cycle exists for, and reading only that line makes it impossible to hide.**'));
out.push(stage('7', 'Write freely – sample (28 words)'));
out.push(sample('Sample answer', [
  '**There is a list on the door of the store. It is the stock list. My name is not on it. Only Abu Yasser writes on that list.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('**Sample:**  ? _Where is that list?_  —  _On the door of the store, on the inside._'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Which list is easiest to find?** **The answer is always the one with a place in the sentence, and the class will say so themselves.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (22 words)', [
  '**The shift list is on the wall by the gate, on the right, at the top. Everybody walks past it and nobody stops.**',
]));

out.push(pb());
// ===================== 1.4 =====================
out.push(h2('1.4  He is the driver. She is in the office.'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. **Three names and three jobs.** ⚠ **Write them on the board with _he_ or _she_ in front, because that is the whole cycle.**'));
out.push(p('**b**  **Yard: driver, storeman. Office: accountant. Counter: counter.** ⚠ **Learners will argue about the counter and they are right to** — **it is the one place that is both, and that is worth two minutes.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C   **b**  **1** The driver.  **2** In the office, upstairs.'));
out.push(p('⚠ **The link to A2 Business is here and it is worth saying to the class.** **Nour starts upstairs on the same morning Ammar starts in the yard.** **If your centre runs both courses, the two groups are in the same twelve weeks of the same company and they meet in Unit 5.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'That man is Fadi. He is the driver.'],
  ['B', 'And the woman?'],
  ['A', 'She is Nour. She is in the office.'],
  ['B', 'Is she new?'],
  ['A', 'Yes, she is.'],
  ['B', 'And Majd?'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **The five phrases.** **The one to watch is _Is she new?_** — **a question with _is_ at the front is new in this cycle and most pairs produce a statement with a rising voice instead.** **That is acceptable at A1 and should be praised, then corrected.**'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample('Sample — four people at work', [
  '**Samih** — he — storeman   ·   **Rima** — she — the office   ·   **Hani** — he — driver   ·   **Lamia** — she — the counter',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _Rima is in the office. She is the accountant._'));
out.push(p('⚠ **The fault to expect and it is a first-language fault, not carelessness:** ***it*** **for a person and** ***he*** **for a thing.** **In Arabic a table has a gender; in English it is _it_.** ⚠ **Say that once, plainly, and put four examples on the board.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Fadi, the driver.  **2** Paper: notes, lists and numbers.  **3** Abu Yasser.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (26 words)', [
  '**WHO TO ASK**',
  '**Samih** — he is the storeman. Ask him about the shelves.',
  '**Rima** — she is the accountant. Ask her about the invoices.',
  '**Hani** — he is the driver. Ask him about the lorry times.',
]));
out.push(p('**What to credit.** ⚠ **_he is_ or _she is_ on every line.** **_him_ and _her_ right.** ⚠ **One person per line** — **the fault is two names on one line, and it makes the note unusable in exactly the way the Writer\'s box says.**'));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **_he_ for a woman or _she_ for a man.** **_he_ with no _is_.** **A line with no thing to ask about.**'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Ask who they would go to for help.** **The answer is the line with the clearest thing on it, not the friendliest person, and the class notices that without being told.**'));
out.push(stage('7', 'Write freely – sample (30 words)'));
out.push(sample('Sample answer', [
  '**Rima is in the office. She is the accountant. She is there every day from eight. I ask her about the invoices and about my hours at the end of the month.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('**Sample:**  ? _Is she the accountant?_  —  _Yes, she is._'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Find two people with the same job.** **It makes the class read each other\'s papers for content and not for mistakes, which is the only way papers on a wall ever get read.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (27 words)', [
  '**Samih — the shelves. Rima — the invoices. Hani — the lorry. Lamia — the customers. Abu Raed — the gate and the visitors.**',
]));

out.push(pb());
// ===================== 1.5 =====================
out.push(h2('1.5  Good morning at seven, goodbye at four'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Many learners say nothing at all when they arrive.** **That is worth naming without making anybody feel bad: in a yard, the man who says good morning to the gate every day is the man the gate helps in February.**'));
out.push(p('**b**  **7.00 and 11.00 are morning. 14.00 and 16.00 are afternoon.** ⚠ **Twenty-four-hour times are on every delivery note in this trade and the class should meet them here, not in Unit 5.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  **1** _Four o\'clock. Good. Go home._  **2** He forgets to sign out.'));
out.push(p('⚠ **The forgotten signature is the point of the cycle, and it is money.** **No name in the book at the end of the month is no day of work on the paper.** **Ask whether anybody in the room has ever lost a day that way.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Four o\'clock. Good. Go home.'],
  ['B', 'Goodbye, Abu Yasser.'],
  ['A', 'Goodbye. See you tomorrow morning.'],
  ['B', 'Seven o\'clock. Goodbye.'],
  ['A', 'Ammar! The book.'],
  ['B', 'Sorry. Four o\'clock.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **The five phrases.** **_Good night_ will be used at four in the afternoon by somebody; let it go the first time and fix it on the board.**'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample('Sample — my day', [
  '**I start at** 7.00   **I finish at** 4.00   **I say** Good morning, Abu Raed.',
  '**I start at** 12.00   **I finish at** 9.00   **I say** Good afternoon.',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _I start at seven. I finish at four. In the morning I say good morning to Abu Raed._'));
out.push(stage('5', 'Read'));
out.push(p('**1** Nine o\'clock.  **2** Sign in and sign out.  **3** No day of work on the paper at the end of the month.'));
out.push(p('⚠ **Question 3 is the sentence the learners will remember from this whole unit**, **and it is the only line in the notice with money in it.** **That is not an accident and the Writer\'s box says so.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (23 words)', [
  '**GATE — JARAMANA DEPOT**',
  '**Morning shift:** sign in at **6.30**. Sign out at **3.30**.   **Afternoon shift:** sign in at **3.00**. Sign out at **11.00**.',
  '**You must:** sign in and sign out. Both. Every day.   **If you do not:** no day of work on the paper.',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **Times written as words on a wall notice.** **_in_ before a clock time.** **No consequence line.**'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Only the last line.** **Ask which one they would not forget.** **It is always the one with a number or money in it, never the one that says _please remember_.**'));
out.push(stage('7', 'Write freely – sample (32 words)'));
out.push(sample('Sample answer', [
  '**I come to work at half past six. I say good morning to the man at the gate. I finish at half past three. I say goodbye to him and I sign out.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('**Sample:**  ? _What do you say at four o\'clock?_  —  _Goodbye, and see you tomorrow._'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Count how many said goodbye to a person BY NAME.** **Usually two or three of ten.** **That count is the cycle and it is worth putting on the board.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (21 words)', [
  '**Sunday to Thursday. In at 6.30 in the morning. Out at 3.30 in the afternoon. Four times every day in the book.**',
]));

out.push(pb());
// ===================== 1.6 =====================
out.push(h2('1.6  Sorry — again, please'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Nearly every learner will say, in Arabic, that they nod and do it wrong.** **Let them say it.** **It is the most honest two minutes in the unit and it is why the cycle exists.**'));
out.push(p('**b**  **The second.** ⚠ **Say in terms that asking is not weakness at work: it is the job.** **Doing it wrong is the thing that costs somebody money.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  **1** Fourteen.  **2** The number.'));
out.push(p('⚠ **Abu Yasser\'s last line is the most important sentence in the book so far:** _Do not say sorry. Ask. Always ask. Ask me ten times._ ⚠ **Read it twice and ask what the supervisor would rather have: ten questions, or fourteen boxes on the wrong shelf.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Fourteen boxes to row three, shelf two.'],
  ['B', 'Sorry?'],
  ['A', 'Fourteen boxes. Row three, shelf two.'],
  ['B', 'Again, please. Slowly.'],
  ['A', 'Fourteen. Not forty.'],
  ['B', 'Can you write it down?'],
]));
out.push(note("Tell the A speaker to go fast on purpose, and mean it. A practice in which the first speaker is already being kind teaches nothing, because the real lorry driver at the gate at seven in the morning is not kind, and he is not being unkind either; he is in a hurry."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **The class writes the number and shows it.** **This is the second count of the lesson** — **compare it with 1.2\'s** — **and it is usually better, because the asker now has four phrases instead of none.**'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample('Sample — four numbers', [
  '**I said** 15   **My partner wrote** 50   **✗**',
  '**I said** 60   **My partner wrote** 60   **✓**',
  '**I said** 17   **My partner wrote** 17   **✓**',
  '**I said** 40   **My partner wrote** 14   **✗**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _I said four numbers. My partner wrote two right. The hard one was fifteen and fifty._'));
out.push(p('⚠ **Collect the pairs on the board: 13/30, 14/40, 15/50, 16/60, 17/70, 18/80, 19/90.** ⚠ **All seven, written out, and left on the board for the rest of the course.** **This single board is worth more to a storeman than any other ten minutes in Book 1.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Fourteen.  **2** Ask Abu Yasser. Do not put them somewhere else.  **3** Abu Yasser — the initials A.Y.'));
out.push(p('⚠ **Question 2 is the one to dwell on.** **_Do not put it somewhere else_ is the whole of a storeman\'s discipline in six words**, **and it comes back in Unit 4.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (20 words)', [
  '**FOR HANI — 11 MARCH**',
  '**15** rolls  (one five — NOT 50)   **Place:** row 6, shelf 1',
  '**If there is a problem:** come and find me. Do not leave them on the floor.   **S.Q.**',
]));
out.push(p('**What to credit.** ⚠ **The number written twice.** **A name at the top AND at the end.** ⚠ **The commonest omission is the name at the end, and it is the one that makes a paper unanswerable.**'));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A number that can be read two ways, written once.** **No name at the end.** **No place.**'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Only the number line.** **Ask the class whether it can be read two ways.** **About a third can, and the writers are always surprised.**'));
out.push(stage('7', 'Write freely – sample (33 words)'));
out.push(sample('Sample answer', [
  '**A driver told me sixty cartons. I wrote sixteen. I did not ask again. We sent sixteen and the customer telephoned in the afternoon. Now I always say: is it sixteen or sixty?**',
]));
out.push(note("This sample is the shape to hope for and about a third of a class will produce one like it. Do not rush past it. A learner who has a story of a number they got wrong has the cycle already; what they lack is the four phrases, and that is a much smaller thing to teach than the lesson itself."));
out.push(stage('7P', 'Respond'));
out.push(p('**Sample:**  ? _Did you ask again?_  —  _No. Now I ask._'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Count how many asked again.** **Expect one or two of ten in the story, and ten of ten in the room by the end of the lesson.** **Say both numbers aloud.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (24 words)', [
  '**13 and 30. 15 and 50. 16 and 60. 19 and 90. On the telephone they are all the same. I write both now.**',
]));

out.push(pb());
// ===================== 1.7 =====================
out.push(h2('1.7  Review: the gate book'));
out.push(stage('1', 'Get ready – Unit 1 quiz'));
out.push(table(['', 'The answer'], [
  ['**1.1**', '_My name is ______. I am the ______._'],
  ['**1.2**', 'The letters, said one at a time, then the number of letters.'],
  ['**1.3**', '_This is _______ (near) · _That is _______ (far), with the hand.'],
  ['**1.4**', '_______ is ______. He is / She is the ______._'],
  ['**1.5**', '_Goodbye. See you tomorrow._'],
  ['**1.6**', '_Sorry? Again, please. Can you write it down?_'],
], [1, 6]));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  **1** Nine years, every name, every day.  **2** The names from Tuesday, for the office.'));
out.push(p('⚠ **Nobody in this dialogue is wrong and the class must leave the lesson knowing it.** **Abu Raed has a perfect nine-year record. Nour has an office that needs Tuesday\'s names today. Ammar can read English.** **Three true things.**'));
out.push(p('⚠ **The resolution is in two words and they are worth putting on the board:** ***next to***, **not** ***instead of***. **Nine years of somebody\'s work is not deleted to solve a problem that an extra column solves.**'));
out.push(stage('3', 'Practise'));
out.push(p('**The two sides, and both are true.** ⚠ **Do not let a learner play Abu Raed as foolish.** **If it happens, stop and swap the roles** — **the learner who has just argued his side for two minutes does not play him that way again.**'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **The answer is _both_**, **and if the class says _Nour_ ask them who has not missed a day in nine years.**'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample('Sample — the thing only one person can do', [
  '**The thing:** the old stock book in the back store.   **Who:** Abu Khalil, and only him.   **If he is away:** nobody can find anything from before 2023 and we telephone him at home.',
  '**The thing:** the key cupboard.   **Who:** the supervisor.   **If he is away:** the spare key is with the gate, and three people do not know that.',
]));
out.push(note("Every class finds one of these in about ninety seconds, and in a real workplace class the examples are better than the book's. The second sample is the commoner shape and it is worth naming: the problem is not that one man holds the key, it is that three people do not know where the spare is. That is a sentence, not a crisis, and the sentence is what this unit teaches."));
out.push(stage('4R', 'Mediate and report'));
out.push(p('**The three positions, in full.**'));
out.push(table(['', 'Right about', 'Gives up'], [
  ['**Abu Raed**', '⚠ **nine years, every name, every day, not one day missing — a book that is never wrong**', '**nothing.** ⚠ **His book stays, his script stays, and the new column goes beside it.**'],
  ['**Nour**', '⚠ **the office needs Tuesday\'s names today and cannot read one word**', '**the simple answer, which was to start a new book in English and put the old one away**'],
  ['**Ammar**', '**he can read English and he is at the gate every morning anyway**', '⚠ **two minutes a day, every day, for as long as Abu Raed is on the gate**'],
], [1.2, 4, 4.3]));
out.push(p('**Report (sample):**  _Abu Raed is right because his book has no missing day. Nour is right because the office cannot read it. So Ammar writes the name in English next to Abu Raed\'s, from Monday._'));
out.push(p('⚠ **And the sentence that costs the most is Abu Raed\'s:** _Next to mine. Not instead of mine._ ⚠ **Mark it.** **It is the first time in this course that somebody protects their own work in English, and it is four words.**'));
out.push(stage('5', 'Read – exam practice'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'A', 'B', 'B', 'C', 'B']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **Question 4 is the one this unit was built for.** **_14 (ONE FOUR — NOT 40)_ and the three options are 40, 4 and 14.** **A learner who has done 1.6 gets it in two seconds; a learner who has not will take 40.**'));
out.push(p('⚠ **Tell the class what this task is.** **It is A2 Key Reading Part 1, which they will sit at the end of the NEXT course, with the same five notices and the same three choices** — **one step up.** **Seeing the real shape a year early is worth saying out loud.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (31 words, four sentences)', [
  '**To:** Hani',
  '**My name is Samih Qassar. I am the new storeman. I am in the back store. I start at half past six.**',
]));
out.push(table(['Marks', 'For'], [
  ['**1**', '**the name**'],
  ['**1**', '**the job**'],
  ['**1**', '**the place**'],
  ['**1**', '⚠ **the time, as a time**'],
  ['**1**', '⚠ **four sentences — not three, and not one long one**'],
], [1, 5]));
out.push(stage('6P', 'Check together'));
out.push(p('⚠ **Count the sentences out loud, with fingers.** **Four.** **The commonest fault is three sentences and a very long third one**, **and the learner cannot see it until somebody counts.**'));
out.push(stage('7', 'Write freely – exam practice'));
out.push(p('⚠ **Four sentences, about thirty words, and the fourth must be the thing the reader must DO.** **That last requirement is new and it is the one to mark hardest** — **a message with no instruction in it is a message nobody acts on, and the whole course is built on that sentence.**'));
out.push(sample('Sample answer (30 words, four sentences)', [
  '**Hello. I am Samih, the new storeman in the back store. The key to the back store is with me now, not at the gate. Please ask me for it.**',
]));
out.push(stage('✓', 'Marking the unit check'));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'b', 'c', 'b', 'a', 'a', 'b']], [1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(box('Marking the unit check', [
  '**A  Words — 8 marks**, one each. ⚠ **Question 5 and question 6 are a pair and they are the only grammar point in the unit that is not about a person:** ***at*** **a clock time,** ***in*** **the morning.** **Expect one of the two to be wrong in half the papers.**',
  '**B  Listening — 6 marks**, one each. **Majd Bitar (1) · five (1) · the counter (1) · 7.20, accept _twenty past seven_ (1) · 4.00 (1) · the morning shift (1).** ⚠ **Spelling of the name is NOT marked here** — **the letters are marked in 1.2 and marking them twice punishes the same gap twice.**',
  '**C  Reading — 3 marks:** **Ammar Zreik (1) · driver (1) · 7.10 (1).**',
  '**D  Writing — 8 marks:** **name (1) · job (1) · time in (1) · time out (1) · four sentences (2) · about thirty words (1) · a big letter on the name (1).**',
  '**Total 25.** ⚠ **The profile to expect at the end of a first unit: A split, B high, C high, D split.** ⚠ **B is high because it is the learner\'s own name and job being asked about in a familiar voice; D is split because four sentences is a counting task and nobody has ever asked them to count sentences before.** **Say that to the class when you hand it back** — **it is a skill, not an ability, and it goes up fast.**',
], C.lteal, C.navy));
out.push(note("Teacher's note. Six things, and the first is about the room. Most of this class has never written an English sentence that another person read, and the unit is built so that somebody reads one in the first ninety minutes. Protect that: the papers go on the wall, people walk and read, and nobody is named as best. Second, Arabic. It is allowed all year and the book says so on page one. Do not ration it and do not apologise for it; ask in Arabic, say the English part in English, and the quiet learners stay in the room. Third, the full sentence. A bare yes is the same as silence, and that is house wording from the first hour. A slow full sentence beats a fast fragment every time at this level and you should say so. Fourth, 1.6, which is the cycle teachers skip because it looks like filler. It is not filler. Sorry? Again, please. Can you write it down? Is it 14 or 40? Those four phrases are the difference between a storeman who asks ten questions and a storeman who puts fourteen boxes on the wrong shelf, and the seven number pairs belong on the board for the rest of the course. Take the count in 1.2, take it again in 1.6, and show the class both figures. Fifth, Abu Raed. He cannot read English and he has kept a perfect record for nine years in Arabic script. He is not a joke and he is not a problem; he is an adult doing a skilled job without the language, which describes most of the people this book is for. If a learner plays him as foolish, stop and swap the roles. The resolution is two words — next to, not instead of — and they are on the board for the rest of the book. Sixth, the four sentences in cycle 7. Count them aloud with fingers. The learner cannot see three-sentences-and-a-long-one until somebody counts, and from here to Unit 12 every written task ends in that same count."));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 1 · Syria Edition · Unit 1 · Answer Key');
module.exports = out;
