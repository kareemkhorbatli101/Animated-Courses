// Proactive Business English A1 · Syria Edition · Book 1 · Unit 3 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 3  The Day, the Week and the Shift'));
out.push(p('_Proactive Business English · A1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('Before you teach this unit', [
  'Every task has an answer. Where a task is open, this key gives a **full sample answer** — speaking, reports, checklists and homework too. Learners\' own answers will be different and that is correct.',
  '⚠ **This unit carries the one piece of grammar in Book 1 that learners get wrong for years: the -s on _he starts_.** **It arrives in 3.4 with nothing else in the way, which is deliberate.** **Protect that cycle. Do not let 3.4 turn into a vocabulary lesson about Fadi.**',
  '⚠ **The week in this book runs Sunday to Thursday.** **Most of the class learned at school that the week starts on Monday.** **Draw the week on the board starting at Sunday BEFORE 3.1, not after** — **otherwise half the room answers Saturday for _the day before Friday_ and you will spend the lesson on a calendar instead of on English.**',
  '⚠ **Two orderings in this unit come from the workplace, not from English, and both are worth saying in Arabic once.** **3.5: ask the other man first, then the supervisor. 3.6: the TIME first, then the reason.** **A learner who produces a perfect sentence in the wrong order has learned the sentence and missed the unit.**',
  '⚠ **3.7 is the first problem in this book with nobody at fault.** **Hani did the right thing, Samih did the right thing, nobody was late — and eleven records are wrong.** **Some classes will hunt for the guilty man for ten minutes and not find one.** **Let that run. The search is the lesson.**',
  '**Word counts.** Stage 6 asks for **15 words or more**, stage 7 for **20 to 35**. ⚠ **Cycle 7\'s written task is four sentences in about 30 words**, which is the shape of an A2 Key Writing Part 6 one step down.',
], C.grey, C.navy));

// ===================== 3.1 =====================
out.push(h2('3.1  Sunday, Monday, Tuesday'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Start at Sunday and say all seven.** **Then ask which two are the weekend here, and expect a disagreement** — **in Syria it has been Friday and Saturday for some employers and Friday alone for others, and the class will know their own.** **Both answers are right and the disagreement is useful.**'));
out.push(p('**b**  Open. **Most of the room works five or six days.** ⚠ **Write the days on the board as a row, and tick under the ones most of the class works.** **That row stays up for the whole unit** — **3.2, 3.5 and 3.7 all point back at it.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A   **b**  **1** Five days.  **2** Monday — the big delivery, twelve pallets.'));
out.push(p('⚠ **Play it three times.** **At A1 the first listening is noise, the second is words, the third is meaning.** **The book says twice because every other level says twice.**'));
out.push(p('⚠ **The line to point at is the last one:** _On Thursday we count. Every Thursday, the whole store._ **Ask the class what _every_ does to the sentence.** **It is the difference between one Thursday and all of them, and it is one word.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'You work Sunday to Thursday. Five days.'],
  ['B', 'Sunday to Thursday. Five days.'],
  ['A', 'Friday is your day off.'],
  ['B', 'And the big delivery?'],
  ['A', 'On Monday. Always on Monday.'],
  ['B', 'On Monday. I will be here early.'],
]));
out.push(note("Run it twice with the book and twice without. The run without the book is where the day names actually arrive, because the learner has to find Wednesday in their head instead of on the page. Do not correct during the run; collect two mistakes and do them in the board clinic the unit already provides at 4R."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Two days: the day off and the delivery day.** ⚠ **Expect the delivery day to be right and the day off to be missed**, **because the day off comes early in the exchange when the listeners are still finding their pens.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — my week', [
  '**I work:** Sunday to Thursday   **My day off is:** Friday   **The busy day is:** Monday',
  '**I work:** Monday to Saturday   **My day off is:** Sunday   **The busy day is:** Thursday',
]));
out.push(note("Three columns and three words in each. Resist the urge to ask for sentences here; the sentence comes at 4R and the notes exist so the learner has something to read from. A learner who writes full sentences in the table has done the next stage early and will have nothing left to say."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _I work Sunday to Thursday. My day off is Friday. The busy day is Monday._'));
out.push(p('⚠ **The mistake to expect:** ***I work in Sunday*** **or** ***my day off is in Friday***. **_on_ before a day, and this is its first appearance in the course.** **Put both on the board at the clinic and let the class correct them.**'));
out.push(p('**Then the count:** which day is busy for most people in this class? ⚠ **Put the tally on the board under the row of days from stage 1.** **In a mixed class Monday and Thursday usually win, and the reason is deliveries and counting** — **ask why and you get a real conversation in two languages.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** The big delivery — twelve pallets.  **2** Thursday.  **3** Sunday and Tuesday.'));
out.push(p('⚠ **Question 3 is the one with the finding in it.** **The learner has to notice that _normal_ appears twice and collect BOTH rows** — **and a learner who reads for the first match stops at Sunday.** **That is the reading skill this book is built on, and it is the same skill as question 3 in Unit 1.5.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (22 words)', [
  '**THE WEEK — BACK STORE, SHAM TRADING**',
  '**Sunday** — normal   ·   **Monday** — big delivery, 12 pallets   ·   **Tuesday** — normal',
  '**Wednesday** — lorry to Homs   ·   **Thursday** — count the whole store',
]));
out.push(p('**What to credit.** **A line for every working day.** **A big letter on every day.** ⚠ **And _normal_ written out on the quiet days, not a blank** — **that is the Writer\'s box and it is the only check here worth sending a paper back for.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(p('⚠ **Three moves and no more: point, read aloud, say the one thing that is missing.**'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "tuesday". ⚠ **The big letter.**',
  '**(pointing)** Here. **(reading)** "Wednesday —". ⚠ **Nothing after the line. Write _normal_.**',
]));
out.push(note("The blank day is the one the Writer's box exists for and it is worth naming out loud when a learner finds one: a day with no line is a day nobody has thought about, and that is the day the lorry comes early. Say it once in Arabic and the class will not leave another blank for the rest of the book."));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their busy day.** **The class says which week looks hardest and why, in one phrase.** **Do not let it become a competition about who works more** — **the answer wanted is _because two heavy things are on the same day_, which is a real observation about a timetable.**'));
out.push(stage('7', 'Write freely – sample (29 words)'));
out.push(sample('Sample answer', [
  '**I work five days, Sunday to Thursday. My day off is Friday. Monday is the busy day because the big delivery comes. On Thursday we count the whole store.**',
]));
out.push(p('⚠ **Accept the days in any order and accept _in_ for _on_ in free writing.** **Do NOT ring the small letter on a day here.** **Collect three examples and do them at the clinic next lesson** — **a paper with four rings on it stops being read at the second one.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Why is Monday busy?_ — **_Because twelve pallets come and four men move them._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers read aloud, then the tally on the board.** **The question is which day is busy for most people, and the answer is a number, not an opinion.** **A number on the board is feedback the whole class can read; a comment on each paper is not.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (26 words)', [
  '**Sunday — I check the shelves. Monday — the delivery comes. Tuesday — I check the shelves. Wednesday — the lorry goes to Homs. Thursday — we count.**',
]));

out.push(pb());
// ===================== 3.2 =====================
out.push(h2('3.2  Seven o\'clock, half past four'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Ask for the time now and take whatever comes, including the digits read one by one.** **Then give the two house forms and write both on the board.** **Both stay up for the whole cycle.**'));
out.push(p('**b**  Open. **Start and finish times.** ⚠ **In a working class these are real and they vary a lot** — **six o\'clock for a driver, eight for a counter.** **Write three of them on the board; 3.4 will need other people\'s times and this is where they come from.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  **1** Seven o\'clock — fifteen minutes before the lorry.  **2** Half past ten.'));
out.push(p('⚠ **The line that matters is Abu Yasser\'s third one:** _Say it both ways. Some men say one, some say the other._ **That is not a language point, it is a workplace fact**, **and it is why this cycle teaches two forms instead of one.**'));
out.push(p('⚠ **And the small one worth pointing at:** _At the gate at seven. Not quarter past. Seven._ **Ammar is asked to be there fifteen minutes before the lorry and nobody explains why.** **Ask the class why. They will know.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'The lorry comes at quarter past seven.'],
  ['B', 'Quarter past seven. Seven fifteen.'],
  ['A', 'Say it both ways. And you?'],
  ['B', 'At the gate at seven.'],
  ['A', 'Fifteen minutes early. The break is at half past ten.'],
  ['B', 'Half past ten. Ten thirty.'],
]));
out.push(note("The second speaker says every time twice and that is the drill. It looks repetitive on the page and it is exactly right in the mouth: the learner who has said quarter past seven and seven fifteen in one breath forty times will recognise either of them from a supervisor who says it once and walks away."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Three times, written down.** ⚠ **Accept either form from the listeners** — **they are listening, not converting.** **The conversion is stage 4.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four times from my day', [
  '**I said:** 6.30  →  **half past six**  ·  **six thirty**',
  '**I said:** 8.15  →  **quarter past eight**  ·  **eight fifteen**',
  '**I said:** 12.00  →  **twelve o\'clock**  ·  **twelve**',
  '**I said:** 4.45  →  **quarter to five**  ·  **four forty-five**',
]));
out.push(note("The fourth row is the one to check. Quarter to counts forward to the next hour, and quarter to four for 4.45 is the normal mistake rather than a careless one — Arabic does the same thing, so say it in Arabic once and the room sees it. Expect it from half the class on the first try and from almost nobody by the end of the lesson."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _I start at half past six. That is six thirty and half past six. My break is at ten o\'clock._'));
out.push(p('⚠ **The mistake to expect:** ***I start in half past six***. **_at_ before a time.** **It pairs with _on_ before a day from 3.1, and the two together are the whole preposition load of the unit.**'));
out.push(p('**Then the question:** who starts earliest, said both ways. ⚠ **Drivers win this and they should be asked why** — **the lorry has to be checked before anybody else arrives, which is 3.4 arriving early.**'));
out.push(p('**Board clinic:** four times, two with _in_ for _at_. ⚠ **Let the class find them.** **Do not point.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Half past ten.  **2** Quarter past seven.  **3** Because some men read the numbers and some read the words.'));
out.push(p('⚠ **Accept any answer to 3 that says the two forms are for two kinds of reader.** **A learner who answers _because Abu Yasser said so_ has read the line and not the reason** — **send them back to the note at the bottom of the box.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (20 words)', [
  '**TIMES — BACK STORE**',
  '**Gate:** 7.00  _(seven o\'clock)_   ·   **First job:** 7.15  _(quarter past seven)_',
  '**Break:** 10.30  _(half past ten)_   ·   **Finish:** 16.00  _(four o\'clock)_',
]));
out.push(p('**What to credit.** **Four lines.** **A number AND words on every line.** ⚠ **And 16.00 rather than 4.00 for the afternoon** — **that is the check worth insisting on, because it is the one that stops a real mistake.** **A lorry booked for 4.00 can be met twelve hours late.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "Break: 10.30". ⚠ **No words. Write _half past ten_.**',
  '**(pointing)** Here. **(reading)** "Finish: 4.00". ⚠ **Morning or afternoon? Write 16.00.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **One learner reads one line; the class says the time the other way.** **Round the room, fast, no writing.** **This is the only drill in the unit that can be done in ninety seconds and it is worth doing at the start of the next lesson too.**'));
out.push(stage('7', 'Write freely – sample (31 words)'));
out.push(sample('Sample answer', [
  '**I start at half past six in the morning. That is early, but the lorry comes at seven. My break is at ten o\'clock. I finish at four o\'clock.**',
]));
out.push(p('⚠ **Accept _in_ for _at_ and a missing _o\'clock_.** **Do insist on the hours adding up:** **a learner who starts at seven, finishes at four and writes _six hours_ has not counted** — **that is a maths answer, not an English one, and the fix is to count it aloud together.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _How long is your break?_ — **_Fifteen minutes. From half past ten to quarter to eleven._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then count the hours on the board.** **The longest day in a working class is usually a driver\'s or a counter\'s and the difference is often three hours.** **Say the number. It is more interesting than any sentence on the page.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (24 words)', [
  '**6.30 half past six · 7.00 seven o\'clock · 7.15 quarter past seven · 10.30 half past ten · 12.45 quarter to one · 16.00 four o\'clock**',
]));

out.push(pb());
// ===================== 3.3 =====================
out.push(h2('3.3  I start at seven. I check the shelves.'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Take three jobs in Arabic and put the English on the board.** **This is the last unit where that is the main source of new verbs** — **from Unit 4 the class has enough to build from.**'));
out.push(p('**b**  Open. **The order is _start · count · break · finish_ for most, but not all.** ⚠ **A counter counts the money BEFORE starting, which is 3.4\'s dialogue arriving early.** **If a learner says it here, write it on the board and leave it there** — **you will point at it in two cycles\' time.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  **1** He signs in at the gate.  **2** He puts the sheet on Abu Yasser\'s table and signs out.'));
out.push(p('⚠ **Six things, and the dialogue gives four before the break and two after.** **That split is the shape of the writing task at stage 6, so point at it.**'));
out.push(p('⚠ **And the frame:** _the office needs it on paper_. **Nour is writing a job description, which is the first time in this course that somebody\'s spoken answer becomes a document.** **Everything in Lesson B comes out of that one line.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'What do you do every day?'],
  ['B', 'I sign in. I read the board.'],
  ['A', 'Then?'],
  ['B', 'I check the shelves. I write the numbers.'],
  ['A', 'And at the end?'],
  ['B', 'I put the sheet on the table. I sign out.'],
]));
out.push(note("Every verb here is bare — no -s, because the subject is I. This is the easy half of a pair and it only works if the class leaves it confident that I start has nothing on the end. Do not pre-teach the -s, do not mention it, and do not let a strong learner mention it either: tell them they are right and that it is the next cycle."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Six things, in order.** ⚠ **The order is the task, not the six.** **A listener who writes all six in the wrong order has got half of it, and half is worth saying so.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — six things I do every day', [
  '**1** I sign in at the gate.   **2** I read the shift board.   **3** I check the shelves.',
  '**4** I write the numbers on the sheet.   **5** I put the sheet on the table.   **6** I sign out.',
]));
out.push(note("Six numbered lines and one job on each. The commonest thing a learner does here is write four lines and join two jobs with and on two of them; that is the Writer's box's fault to catch and it is better caught here, in notes, than at stage 6 in a document."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _First I sign in. Then I read the board. After that I check the shelves._'));
out.push(p('⚠ **The three ordering words are the marked thing here:** _first · then · after that_. **A report with six sentences and no ordering words is a list read aloud, which is stage 4, not stage 4R.**'));
out.push(p('**Board clinic:** six lines out of order. ⚠ **Do it as a class with the lines on separate strips if you can** — **physically moving _I sign out_ to the end is worth more than correcting it on a page.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** He checks the shelves.  **2** He writes the numbers on the sheet.  **3** Ammar — on 13 March.'));
out.push(p('⚠ **Question 2 asks what comes AFTER something**, **which means reading down one line from the one you found.** **A learner who answers _he checks the shelves_ has answered question 1 twice** — **and that is the commonest wrong answer in this stage.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (23 words)', [
  '**WHAT I DO — from Samih Qassar, 14 March**',
  '**1** I open the back store.   **2** I read the count sheet.   **3** I check the top shelf.',
  '**4** I write the numbers.   **5** I give the sheet to the supervisor.   **6** I lock the door.',
]));
out.push(p('**What to credit.** **A number on every line.** **One job on every line.** **The lines in order.** ⚠ **And a name and a day at the top** — **a list of jobs from nobody is a list the office cannot ask a question about.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "I check the shelves and write the numbers". ⚠ **Two jobs. Make it two lines.**',
  '**(pointing)** Here. **(reading)** "WHAT I DO". ⚠ **From who? And when?**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read line 1 and line 6 only.** **The class says whether the day starts and ends well.** **The useful answer is about the LAST line: a day that ends with _I sign out_ is finished, and a day that ends with _I check the shelves_ is not.**'));
out.push(stage('7', 'Write freely – sample (33 words)'));
out.push(sample('Sample answer', [
  '**First I open the back store and read the count sheet. Then I check the shelves. That is the longest job, two hours. After that I write the numbers and lock the door.**',
]));
out.push(p('⚠ **The question _what is the longest job_ is the one that produces real language**, **because it is the only part of the stage where the learner has to compare two things.** **It is worth more class time than the list, and a paper that answers it in five words has done more than a paper with eight tidy sentences.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _What is the longest job?_ — **_Checking the shelves. Two hours, every morning._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the tally: which job takes the longest in this class?** **Counting, checking and loading win in that order in most classes.** **Put the three on the board** — **Unit 5 is the delivery note and it will need them.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (27 words)', [
  '**1** I sign in at seven.   **2** I read the board.   **3** I count the back store.   **4** I take the sheet to the office.   **5** I have my break.   **6** I check the top shelf.   **7** I sign out at four.**',
]));

out.push(pb());
// ===================== 3.4 =====================
out.push(h2('3.4  Fadi drives. Majd opens the counter.'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Take three jobs about one other person and write them on the board WITHOUT the -s, exactly as the class says them.** **Then add the -s in a different colour.** **That is the whole cycle in thirty seconds and the board shows it rather than telling it.**'));
out.push(p('**b**  ***Fadi drives the lorry*** **is correct.** ⚠ **Ask why before you confirm.** **Somebody in the room knows, and the explanation from a classmate in Arabic lands harder than the same explanation from the front.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — Fadi, at six.   **b**  **1** Six o\'clock.  **2** He counts the money.'));
out.push(p('⚠ **Count the -s endings in the dialogue with the class: _starts, checks, drives, finishes, opens, counts, come, says_.** **Seven have it and one does not.** **Ask which one and why** — ***the customers come*** **is plural, and that is the exception arriving in the same breath as the rule.**'));
out.push(p('⚠ **And Majd\'s reason, which is worth keeping:** _you cannot count with people waiting_. **It explains why he counts the money BEFORE he opens, and it is the line to point at when somebody asks why the order matters.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'What does Fadi do?'],
  ['B', 'He starts at six. He checks the lorry.'],
  ['A', 'Earlier than you?'],
  ['B', 'An hour earlier.'],
  ['A', 'And Majd?'],
  ['B', 'He opens the counter at eight.'],
]));
out.push(note("Make the listener count the missing -s endings out loud at the end of each run and say the number, not the words. A number is information the speaker can use and it costs nobody any face; a list of their mistakes read back to them in front of the class is the fastest way to stop a quiet learner speaking for the rest of the term."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **How many times was the -s missing?** ⚠ **A number, not a list.** **Two or three is normal in a first run and the number drops on the second** — **show the class both figures, because the drop is the evidence that the drill works.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — two people at my work', [
  '**Name:** Fadi Saeed   **He checks the lorry.**   **He drives to Homs.**   **He finishes at six.**',
  '**Name:** Nour Mansour   **She opens the office.**   **She answers the telephone.**   **She writes the sheets.**',
]));
out.push(note("Three boxes each and a verb with an -s in every one. The table is doing the teaching here: twelve boxes means twelve chances to put the -s on, and a learner who has written it twelve times has a better chance of saying it once under pressure at 4R."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _Fadi starts at six. He checks the lorry. Then he drives to Homs._'));
out.push(p('⚠ **The mistake to expect, and it comes from the strong learners:** ***he does not works***, ***does he counts?*** **The -s moves onto _does_ and comes OFF the verb.** **Praise the rule, then show where it goes** — **a learner producing that error is applying what they just learned and should be told so.**'));
out.push(p('**Board clinic:** six lines, three with no -s. ⚠ **This is the most important clinic in Book 1.** **Give it the full six minutes and do not shorten it to get to Lesson B.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Fadi — 6.00.  **2** He counts the money.  **3** Monday.'));
out.push(p('⚠ **Question 1 needs the learner to compare four times and pick the smallest**, **which is the first comparison task in the book.** **Expect _Majd_ from learners who read the last line first.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (26 words)', [
  '**WHO DOES WHAT — SHAM TRADING**',
  '**Fadi** starts at 6.00. He checks the lorry. He drives to Homs on Wednesday.',
  '**Samih** starts at 7.00. He counts the back store.',
  '**Nour** starts at 8.00. She opens the office.',
  '**Ammar Zreik, 14 March**',
]));
out.push(p('**What to credit.** ⚠ **The -s on every he / she verb** — **this is the one stage in the unit where the -s is a check and not a kindness, because 6P asks for it by name.** **A time on every line.** **One person on each line.** **A name and a day at the end.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "He check the lorry". ⚠ **The -s.**',
  '**(pointing)** Here. **(reading)** "Nour opens the office". ⚠ **No time. What time?**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read one line each and the class listens for the -s only.** **Ears, not eyes** — **the /s/, /z/ and /ɪz/ at the end of a word is a listening skill before it is a writing one, and a learner who cannot hear it will not write it.**'));
out.push(stage('7', 'Write freely – sample (30 words)'));
out.push(sample('Sample answer', [
  '**Fadi starts at six o\'clock, an hour before me. He checks the lorry first. Then he drives to Homs. Nobody else can drive the big lorry.**',
]));
out.push(p('⚠ **Accept a missing -s ONCE and ring it once.** **Do not ring it four times on one paper.** **One ring teaches; four is a page of red ink and the learner stops reading at the second one.** **If a paper has six, write the number at the top instead and say it is the thing to work on.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Does anybody else do that?_ — **_No. Only Fadi has the big licence._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: how many describe a job only ONE person can do?** **In a real workplace class the number is high and it is a finding, not an exercise** — **every one of those jobs is a day the work stops if that person is ill.** **Unit 1.7 was about exactly this and it is worth saying so.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (29 words)', [
  '**Fadi, 6.00 — he checks the lorry, he drives to Homs. Majd, 8.00 — he counts the money, he opens the counter. Nour, 8.00 — she opens the office, she writes the sheets.**',
]));

out.push(pb());
// ===================== 3.5 =====================
out.push(h2('3.5  Can I swap Thursday?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Take the Arabic first and ask who they say it to.** **That answer is the unit.** **In most rooms somebody says _the supervisor_ and somebody says _my friend on the other shift_, and the second one is right.**'));
out.push(p('**b**  ***Can I swap Thursday with Samih?*** **is better.** ⚠ **Ask what is wrong with the other one.** **It is not rude and it is not ungrammatical** — **it announces a decision the other man has not agreed to, and it leaves the shift one man short.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C — yes, if Samih agrees.   **b**  **1** Thursday.  **2** He must ask Samih first.'));
out.push(p('⚠ **Abu Yasser\'s two lines are the whole cycle:** _Then ask Samih first. Not me._ **and** _If he says yes, come and tell me and I write it on the board._ **The supervisor is not the decision; he is the record.** **Say that sentence in Arabic once.**'));
out.push(p('⚠ **And the reason, in four words:** _My brother is in hospital on Thursday._ **Point at how short it is.** **A long story invites a question; four words is believed and the conversation moves on.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'When is the count this week?'],
  ['B', 'Thursday. Every Thursday.'],
  ['A', 'Can I swap Thursday? My brother is in hospital.'],
  ['B', 'Swap with who?'],
  ['A', 'With Samih.'],
  ['B', 'Then ask Samih first. Not me.'],
]));
out.push(note("The question Swap with who? is the hinge of the exchange and it is the line to drill hardest, because it is the supervisor's job doing itself. A learner who has heard it four times will anticipate it and will come with the other man's name already in their mouth, which is exactly the habit this cycle is for."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Who did the speaker ask first?** ⚠ **The answer should be the other man, not the supervisor.** **If a pair gets it the wrong way round, do not correct them** — **ask the class what happens on Thursday morning, and let the class find the hole in the shift.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — a swap I want', [
  '**The day:** Thursday   **Why:** my mother is in hospital   **Swap with:** Samih   **Tell after:** Abu Yasser',
  '**The day:** Friday   **Why:** a wedding in Homs   **Swap with:** Hani   **Tell after:** the supervisor',
]));
out.push(note("Four columns, and the fourth is the one that will be left blank. A learner who fills in the first three has asked for a swap; a learner who fills in all four has finished one. That difference is the entire point of 3.7, which is two cycles away, so leave the blank fourth columns visible rather than correcting them."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _I want to swap Thursday because my mother is in hospital. I ask Samih first. Then I tell Abu Yasser._'));
out.push(p('⚠ **Count the reports that asked the other worker first and put the number on the board.** **That number is the assessment for this cycle.** **A class at twelve out of sixteen has learned the unit; a class at four has learned the sentence.**'));
out.push(p('**Board clinic:** four swap requests, two of which go to the supervisor first. ⚠ **Let the class decide which two.** **If they disagree, that is the discussion** — **and the tie-breaker question is always: who is not at work on Thursday if this goes wrong?**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Samih Qassar.  **2** The supervisor — Abu Yasser, on 18 March.  **3** _Both men agreed._'));
out.push(p('⚠ **Question 1 is a two-step read:** **find Thursday, then find _Now_, then find the name.** **A learner who answers _Ammar Zreik_ has read the _Was_ line**, **and that is the right mistake to make on this document** — **it is exactly the mistake that puts the wrong man in the yard.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (24 words)', [
  '**SWAP — THURSDAY 21 MARCH**',
  '**Was:** Samih Qassar — morning   ·   **Now:** Ammar Zreik — morning',
  '**Was:** Ammar Zreik — off   ·   **Now:** Samih Qassar — off',
  '**Both agreed. A.Y. 18 March.**',
]));
out.push(p('**What to credit.** ⚠ **BOTH halves of the swap** — **one man off and one man on.** **A note with one half leaves a hole in the shift, which is the thing a swap note exists to prevent.** **The day at the top.** **_Both agreed._** **Who wrote it, and when.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "Now: Ammar — morning". ⚠ **And who is off? Half the swap is missing.**',
  '**(pointing)** Here. **(reading)** "SWAP". ⚠ **Which day?**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their note and the class asks one question: is anybody missing from the shift?** **It is answerable from the page in five seconds and it is the only question a supervisor would ask.**'));
out.push(stage('7', 'Write freely – sample (32 words)'));
out.push(sample('Sample answer', [
  '**Last month I needed Friday off for a wedding in Homs. I asked Hani first and he said yes. Then I told the supervisor and he wrote it on the board.**',
]));
out.push(p('⚠ **Accept any story, including one where the writer did it the wrong way round and it went badly.** **Those papers are the most useful ones in the room** — **ask the writer to read it aloud, and the class will supply the fix without being asked.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Who did you ask first?_ — **_Hani. He was off that day._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: in how many did the writer ask the other worker first?** **Put the number beside the one from 4R.** **If the second number is higher, the cycle worked, and the class should see the two figures next to each other.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (25 words)', [
  '**I want to swap Monday. Hani is off on Monday. I ask Hani first, not the supervisor. If he says yes, I tell the supervisor the same day.**',
]));

out.push(pb());
// ===================== 3.6 =====================
out.push(h2('3.6  I am late because the road was closed'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Take the Arabic and listen for how much of it is apology.** **In most rooms it is nearly all apology and no information.** **That is the thing this cycle changes, and the class should hear itself doing it first.**'));
out.push(p('**b**  **The second one is better.** ⚠ **Ask what the supervisor can DO with each.** **With the first he can do nothing; with the second he can move a man for twenty minutes.** **That is the test, and it is a better test than politeness.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — twenty minutes.   **b**  **1** The road was closed at Jaramana.  **2** Telephone — from the road.'));
out.push(p('⚠ **Abu Yasser\'s line is the marked one:** _Say the time and the reason. You did. That is enough._ **Nobody is told off in this dialogue and Ammar was twenty minutes late.** **Ask the class whether that is what happens at their work.**'));
out.push(p('⚠ **And the last exchange:** _Two minutes on the telephone and I move a man._ **It gives the reason for the rule rather than the rule**, **and learners keep a rule they have been given a reason for.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Abu Yasser. I am twenty minutes late. The road was closed at Jaramana.'],
  ['B', 'Twenty minutes. All right.'],
  ['A', 'The lorry?'],
  ['B', 'It came at quarter past. Samih took it.'],
  ['A', 'I will tell Samih thank you.'],
  ['B', 'And next time, telephone.'],
]));
out.push(note("The speaker's third line is the one that will go missing: I will tell Samih thank you. It is not about the lateness at all, which is why it drops out, and it is the line that makes the difference between a man who was late and a man who was late and knows who covered for him. Drill it separately if you have to."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Did the speaker say the TIME first?** ⚠ **Yes or no, nothing else.** **It is a one-word listening task on purpose** — **the ordering is the only thing being assessed and everything else is noise this time.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — two times I was late', [
  '**How late:** 20 minutes   **Why:** the road was closed   **Next time:** I telephone from the road',
  '**How late:** 45 minutes   **Why:** the bus did not come   **Next time:** I take the earlier bus',
]));
out.push(note("The third column is the one to read. A plan in the third column that repeats the second — the road was closed, so next time I will not use that road — is a learner who has understood it. A third column that says I will be more careful is a learner who has written an apology in a box marked plan, and that is worth one sentence of feedback."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _I was twenty minutes late. The road was closed at Jaramana. Next time I telephone._'));
out.push(p('⚠ **Count the reports that said the TIME first and put the number on the board.** **Expect a low number first time** — **the reason comes first in Arabic and in English and in every language in the room, because the reason is what the speaker is worried about.** **The time first is a workplace convention, not a language fact, and it has to be taught as one.**'));
out.push(p('**Board clinic:** four excuses, two starting with a long reason. ⚠ **Ask the class to cut each one to under ten words.** **Cutting is the exercise.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Twenty-five minutes.  **2** Samih — at 7.15.  **3** Telephone from the road.'));
out.push(p('⚠ **Question 2 asks about the WRITER\'S JOB while he was absent**, **which is line three of the note** — **the line most learners skip because it does not look like it is about them.** **It is the line the supervisor reads first.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (23 words)', [
  '**FOR ABU YASSER — 15 MARCH**',
  '**I was 30 minutes late.** The bus did not come.',
  '**My job:** Samih counted the back store at 7.30.',
  '**Next time:** I take the earlier bus.',
  '**S.Q.**',
]));
out.push(p('**What to credit.** **How late, in minutes.** **A short reason.** ⚠ **Who did the job** — **the line that gets left out and the one the supervisor wants.** **And a PLAN, not an apology, on line four.** **Send back a note without line three.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "I am very very sorry". ⚠ **Where is the time? How late?**',
  '**(pointing)** Here. **(reading)** "Next time I am careful". ⚠ **That is not a plan. What will you DO?**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their _next time_ line only, and the class says one word: _plan_ or _sorry_.** **One word, no discussion.** **The class gets this right immediately, which tells you the distinction has landed even where the writing has not.**'));
out.push(stage('7', 'Write freely – sample (34 words)'));
out.push(sample('Sample answer', [
  '**In February I was forty minutes late. The bus did not come and I waited at Mazzeh. Hani opened the store for me. Now I take the bus before it, every day.**',
]));
out.push(p('⚠ **Accept _I am very sorry_ in the free writing and do not correct it.** **The Writer\'s box has already said a plan beats an apology; a learner who writes both has heard it.** **Correct it only if the apology is ALL there is.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Did you telephone?_ — **_No. I did not have the number. I have it now._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: in how many did somebody telephone?** **In most classes it is nearly none, and the follow-up question is the useful one** — **do you have the number?** **Have the class write it in the back of the book before the lesson ends.** **That is the homework and it is the most practical thing in the unit.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (21 words)', [
  '**Abu Yasser — 0944 112 233. The gate — 011 555 7788. If I am late, I ring the gate first.**',
]));

out.push(pb());
// ===================== 3.7 =====================
out.push(h2('3.7  Review: the shift board'));
out.push(stage('1', 'Get ready – Unit 3 quiz'));
out.push(table(['', 'The answer'], [
  ['**3.1**', '_Sunday, Monday, Tuesday, Wednesday, Thursday._ ⚠ **Five, in order, starting at Sunday.**'],
  ['**3.2**', '_Quarter past seven / seven fifteen. Half past ten / ten thirty._ ⚠ **Both ways, both times.**'],
  ['**3.3**', '_I sign in. I read the board. I check the shelves. I write the numbers._'],
  ['**3.4**', '_He starts at six. He checks the lorry._ ⚠ **The -s.**'],
  ['**3.5**', '_Can I swap Thursday? / Can I swap with Samih?_'],
  ['**3.6**', '_I am twenty minutes late._ ⚠ **The TIME, first.**'],
], [1, 6]));
out.push(p('⚠ **Tick, do not mark.** **Anything the class can understand is a tick.** **3.4 is the only one where the form matters** — **and a learner who misses the -s here should hear it once and then be ticked.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — he swaps every week and never writes it down.   **b**  **1** Eleven times.  **2** Because Hani always asks him first and always comes.'));
out.push(p('⚠ **Nobody in this dialogue is wrong, and the class must leave the lesson knowing it.** **Hani asks the right man every time. Samih agrees every time. Hani has never once failed to come. Abu Yasser has eleven wrong records.** **Four true things.**'));
out.push(p('⚠ **The resolution is one sentence and it belongs on the board:** ***the swap is not finished until it is on the board.*** **Not a person changing — a step added to a procedure.** **That is new in this book and it is the harder kind of answer.**'));
out.push(stage('3', 'Practise'));
out.push(p('**The two sides, and both are true.** ⚠ **Do not let a learner play Abu Yasser as a man who cares about paper more than people.** **He is the one who will be asked by the office why Samih was paid for a Thursday that Hani was written down for, and he has no answer.**'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **The answer is _both_**, **and if the class says _Samih_ ask who explains the eleven wrong Thursdays to the office.** **If the class says _Abu Yasser_ ask which shift was ever short.** **Neither question has an answer, which is the point.**'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample('Sample — what everybody knows and no paper says', [
  '**What everybody knows:** Hani and Samih swap Thursdays.   **What the paper says:** Hani works every Thursday.   **Who finds out, and when:** the office, at the end of the month, when it pays the wrong man.',
  '**What everybody knows:** the spare key is at the gate.   **What the paper says:** nothing.   **Who finds out, and when:** the new man, on his first Friday, when the supervisor is away.',
]));
out.push(note("Every workplace class finds one of these in about ninety seconds and the examples are better than the book's. The second sample is the commoner shape and it is worth naming: the problem is not that the key is at the gate, it is that nothing says so. That is a sentence, not a crisis, and the sentence is what this unit teaches. Unit 1.7 was the same shape and it is worth pointing back at it."));
out.push(stage('4R', 'Mediate and report'));
out.push(p('**The three positions, in full.**'));
out.push(table(['', 'Right about', 'Gives up'], [
  ['**Samih**', '⚠ **Hani asks the right man every time, and has never once failed to come — no shift has ever been short**', '**nothing.** ⚠ **The asking stays exactly as it is. 3.5 was right.**'],
  ['**Abu Yasser**', '⚠ **the board has said Hani on eleven Thursdays when it was Samih, and the office pays from the board**', '**the simple answer, which was to stop the swapping or to make the men ask him first**'],
  ['**Hani**', '**he does the hard part right — he finds a man, he asks him, he turns up**', '⚠ **thirty seconds, on the day, every time: he tells the supervisor.** **It is his swap, so he tells.**'],
], [1.2, 4, 4.3]));
out.push(p('**Report (sample):**  _Samih is right because no shift has ever been short. Abu Yasser is right because the board is wrong eleven times and the office pays from the board. So the swap is not finished until it is on the board, and Hani tells him the same day._'));
out.push(p('⚠ **The words to keep:** _the men know, the office does not, and the office pays_. **Mark that sentence.** **A thing everybody knows is written down nowhere, and that is exactly why it gets lost** — **which is the second time in this book that a perfectly working arrangement has turned out to be invisible.**'));
out.push(stage('5', 'Read – exam practice'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'B', 'C', 'B', 'A', 'B']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **Question 4 is arithmetic in English clothing.** **_BREAK 10.30 — 10.45_ is fifteen minutes, and some learners will choose thirty because thirty is the number they can see in _10.30_.** **It is a reading fault, not a maths one** — **point at the dash and ask what is on each side of it.**'));
out.push(p('⚠ **Tell the class what this task is.** **It is A2 Key Reading Part 1, which they will sit at the end of the NEXT course, with the same five notices and the same three choices** — **one step up.** **Seeing the real shape a year early is worth saying out loud.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (31 words, four sentences)', [
  '**To:** Abu Yasser',
  '**I am on the morning shift on Thursday. Samih is off that day and he has agreed to swap. My mother is in hospital. Can you put it on the board?**',
]));
out.push(table(['Marks', 'For'], [
  ['**1**', '**the day**'],
  ['**1**', '**the other man, by name**'],
  ['**1**', '⚠ **the agreement — _he has agreed_, not _I want_**'],
  ['**1**', '**the reason, short**'],
  ['**1**', '⚠ **the ask in the LAST sentence**'],
], [1, 5]));
out.push(stage('6P', 'Check together'));
out.push(p('⚠ **Count the sentences out loud, with fingers.** **Four.** **The commonest fault is three sentences and a very long third one**, **and the learner cannot see it until somebody counts.**'));
out.push(stage('7', 'Write freely – exam practice'));
out.push(p('⚠ **Four sentences, about thirty words, and the last one must be the thing the reader must DO.** **That requirement arrived in Unit 1.7 and it is the one to mark hardest** — **a message with no instruction in it is a message nobody acts on, and this whole unit is about a swap that nobody wrote down.**'));
out.push(sample('Sample answer (30 words, four sentences)', [
  '**Abu Yasser, I am swapping Thursday with Samih. He agreed this morning. My brother is in hospital that day. Please write it on the board today.**',
]));
out.push(stage('✓', 'Marking the unit check'));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'c', 'b', 'b', 'b', 'a', 'a', 'b']], [1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(box('Marking the unit check', [
  '**A  Words — 8 marks**, one each. ⚠ **Questions 1 and 2 are the preposition pair:** ***on*** **a day,** ***at*** **a time.** **Expect one of the two to be wrong in half the papers, and expect it to be question 2** — **_at seven_ feels wrong to an Arabic ear because the Arabic preposition maps onto _in_.** ⚠ **Questions 4 and 5 are the -s pair and they are the ones that matter:** _Fadi **checks**_ **and** _he **does not** work_. **A paper that gets both is a paper that has 3.4.**',
  '**B  Listening — 6 marks**, one each. **Tuesday (1) · Samih (1) · his mother is in hospital (1) · Abu Yasser (1) · quarter past seven, accept 7.15 (1) · thirty minutes (1).** ⚠ **Item 6 is in Samih\'s LAST line, after the lorry time, when the class has stopped listening because they think the dialogue is about the swap.** **Play it twice and say nothing between the plays.**',
  '**C  Reading — 3 marks:** **Monday: the big delivery, twelve pallets (1) · Thursday (1) · Sunday and Tuesday (1).** ⚠ **The third mark needs BOTH normal days** — **one is half an answer and scores nothing, because reading for the first match is the exact habit this book is trying to break.**',
  '**D  Writing — 8 marks:** **four sentences (2) · the day named (2) · the other man named (1) · the agreement stated (1) · about thirty words (1) · the ask last (1).**',
  '**Total 25.** ⚠ **The profile to expect: A split on questions 4 and 5, B high except item 6, C split on the third mark, D better than Unit 1.** ⚠ **D goes up because the class has now counted sentences twice**, **and counting is a skill rather than an ability.** **Say that when you hand it back.**',
], C.lteal, C.navy));
out.push(note("Teacher's note. Five things. First, the week. It runs Sunday to Thursday in this book and most of the class learned at school that it starts on Monday, so draw it on the board starting at Sunday before 3.1 and leave the row there for the whole unit. If you do not, half the room answers Saturday for the day before Friday and you spend the lesson on a calendar. Second, 3.4 and the -s. It is the only piece of grammar in Book 1 that learners get wrong for years and it arrives with nothing else in the way, which is deliberate. Give the board clinic its full six minutes, do not shorten it to reach Lesson B, and expect the error that comes from the strong learners — he does not works, does he counts? — which is the rule being applied one step too far and should be praised before it is placed. Third, the two workplace orderings. Ask the other man first, then the supervisor; and the time first, then the reason. Neither is a fact about English and both have to be taught as conventions with reasons attached. Say each one in Arabic once: the supervisor is not the decision, he is the record; and the supervisor needs the minutes so he can move a man, which the reason does not help him do. Fourth, counting as feedback. This unit asks you to put four numbers on the board — the busy day, who starts earliest, how many asked the other man first, how many telephoned. Those numbers are the assessment and they are better than comments on papers, because the whole class can read them and nobody is named. The 4R and 7R figures for 3.5 should be put side by side; if the second is higher the cycle worked, and the class should see that. Fifth, 3.7, which is the first problem in this book with nobody at fault. Hani did the right thing, Samih did the right thing, nobody was late or lazy, and eleven records are wrong. Some classes will hunt for the guilty man for ten minutes and will not find one; let that run, because the search is the lesson. The resolution is a step added to a procedure rather than a person changing, which is the harder kind of answer and the kind the rest of this course is built on. End on the sentence from the unit: the men know, the office does not, and the office pays."));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 1 · Syria Edition · Unit 3 · Answer Key');
module.exports = out;
