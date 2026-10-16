// Proactive English B1 · Syria Edition · Book 1 · Unit 11 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 11  Defining and Adding'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**11.1**  define which one you mean',
  '**11.2**  add information about somebody',
  '**11.3**  say whose, where and when',
  '**11.4**  combine two sentences into one',
  '**11.5**  leave the pronoun out',
  '**11.6**  write a description that defines and adds',
  '**11.7**  Review & Mediate: explain a page of definitions',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**Two commas that change a sentence completely.** _The nurse who records her own errors has been given a trial_ and _the nurse, who records her own errors, has been given a trial_ are not the same sentence. The first says there are several nurses. The second says there is one. Nothing else is different.',
  '**The definitions clause.** Bassel\'s ministry contract has a page before the conditions that nobody reads, and every sentence on it is a relative clause. In **11.7** the class finds out that the page before the conditions decides what the conditions mean.',
  '**One thing you can already do.** _The man I met · the book I read · the thing you put papers in._ You have been leaving the pronoun out for nine units without being told you could. 11.5 explains it and tells you where you cannot.',
], C.lyellow, C.orange));

// ======================= 11.1 =======================
out.push(pb());
out.push(h2('11.1  The nurse who records her own errors'));
out.push(p('**Function:** defining which one you mean   ·   **Grammar:** defining relative clauses   ·   **Pronunciation:** the defining clause run on with no pause'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out the sentence you copied from your own writing containing _who_, _which_ or _that_. Your teacher writes six on the board and puts a ring round the commas. Then one question: does the sentence say **which one**, or does it **add something** about one you have already named?'));
out.push(board('The nurse who records her own errors has been given a trial.', 'who · which · that · no commas'));
out.push(p('**b**  Which one, or extra information? **1** _The men who were in shirtsleeves had taken their jackets off._  **2** _Bassel, who has run the shop for nineteen years, crossed nine of them out._  **3** _The room that has no switch is 14._  **4** _Room 14, which has no switch, is at the end._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What do the two sentences on the board differ by?   **A** one word   **B** two commas   **C** the tense'));
out.push(p('**b**  Listen again. **1** What does the first sentence say that the second does not?   **2** What does Rasha say about which one is in the minutes?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.1  Two commas', [
  ['Ms Huda', 'Two sentences. "The nurse who records her own errors has been given a trial." "The nurse, who records her own errors, has been given a trial." What is different?'],
  ['Jad', 'Two commas.'],
  ['Ms Huda', 'And what do the two commas do?'],
  ['Lubna', 'The first one tells you there is more than one nurse and that this is the one who records her errors. It is telling you **which** nurse.'],
  ['Ms Huda', 'And the second?'],
  ['Lubna', 'The second one says there is one nurse, you already know who she is, and by the way she records her own errors. The clause is extra. You could take it out and the sentence still says what happened.'],
  ['Rasha', 'There are two nurses on those nights.'],
  ['Ms Huda', 'Then which sentence is true?'],
  ['Rasha', 'The first one. And I have just realised which one is in the minutes, because I wrote them.'],
  ['Fares', 'Which one?'],
  ['Rasha', 'I wrote "Sister Barakat, who had kept a record since January, presented it to the committee." With commas. Which says: there is one of me, you know who I am, and incidentally I keep records. What is actually true is that there are two night nurses, and the one who had kept a record got a trial, and the one who had not kept a record had been getting the same errors for fourteen years and nobody knew.'],
  ['Ms Huda', 'So the commas are wrong.'],
  ['Rasha', 'The commas are wrong and nobody will ever notice, and the sentence without them is the only sentence in those minutes that explains why this happened to me and not to her. Two commas, and the whole reason is gone.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the defining relative clause: no commas**',
  table(['you say', 'what it does'], [
    ['_The nurse **who** records her errors…_', 'says **which** nurse — people'],
    ['_The room **that** has no switch…_', 'says **which** room — things'],
    ['_The report **which** went to an empty post…_', 'the same; _which_ is a little more formal than _that_'],
    ['_The man **that** signed it…_', 'acceptable for people in speech; _who_ is better'],
  ], [2.3, 2.3]),
  '**A defining clause answers the question _which one?_** It is part of the noun, it has **no commas**, and you cannot take it out: _the room that has no switch is 14_ becomes nonsense as _the room is 14_.',
  '**People take _who_; things take _that_ or _which_.** _That_ is fine for things in all registers and for people in speech. ⚠ ~~The nurse which~~.',
  '⚠ ~~The nurse who she records her errors~~ — the relative pronoun **is** the subject; do not add another one. This is the commonest error in the unit.',
  '⚠ ~~The room that it has no switch~~ · ~~the man who he signed it~~. Same error.',
  '⚠ ~~The nurse, who records her own errors, has been given a trial~~ when there are two nurses. The commas are not punctuation; they are **meaning**, and nobody will ever tell you that you got them wrong.',
  '**And the test:** take the clause out. If the sentence still says what you meant, the clause needed commas. If it does not, it must not have them.',
  '**Useful phrases:** two commas, and the whole reason is gone · it is telling you which nurse · you could take it out and the sentence still says what happened · the commas are wrong and nobody will ever notice.',
  '**Practise:** Join each pair into one sentence with a defining clause.  1 _The man signed it. He left in March._  2 _The report went to an empty post. Nobody read it._  3 _The room has no switch. It is 14._  4 _The seal had been splitting. It was on the second door._  5 _The nurse had kept a record. She got the trial._',
  '**Pronunciation.** 🔊 **Track 11.2** A defining clause is **run on with no pause at all**: _the nurse who records her own errors has been given a trial._ A non-defining clause has a pause at each comma. The two sentences are identical in words and different in rhythm, and in speech the rhythm is the only clue. Listen to eight and write **defining** or **adding**.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the two short sentences from the card. B joins them with a defining clause, with no commas, and then says how many of the thing there are. A checks for a doubled pronoun. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________. __________.'],
  ['B', 'The __________ who/that __________ __________.'],
  ['A', 'How many __________ are there?'],
  ['B', 'More than one — that is why there are no commas.'],
  ['A', 'Any extra pronouns?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the pairs', 'Card B – the pairs'], [
  ['The man signed it. He left in March.', 'The report went to an empty post. Nobody read it.'],
  ['The room has no switch. It is Room 14.', 'The seal had been splitting. It was on the second door.'],
  ['The nurse kept a record. She got the trial.', 'The model is glued by hand. It separates at the corner.'],
  ['The bay cannot be seen. It is bay five.', 'The chairs came out of the building. There were eleven.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write each joined sentence and mark the doubled pronouns. In a first run there are usually two or three — _the man who he signed it_ — and they come from Arabic, where the pronoun stays.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the sentence you brought from your own writing and say whether the clause is defining or adding, and whether your commas are right. Then say how many of the thing there are.'));
out.push(p('**b**  Swap. Then each of you find one sentence of the other\'s where the commas change what is true.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda put two sentences on the board: the nurse who records her own errors has been given a trial, and the nurse, who records her own errors, has been given a trial. Jad said the difference is two commas. Lubna said the first tells you there is more than one nurse and that this is the one who records her errors — it is telling you which nurse — and the second says there is one nurse, you already know who she is, and by the way she records her own errors; the clause is extra and you could take it out and the sentence would still say what happened. Rasha said there are two nurses on those nights, so the first sentence is the true one — and then she said she had just realised which one is in the minutes, because she wrote them. She had written "Sister Barakat, who had kept a record since January, presented it to the committee", with commas, which says there is one of her, you know who she is, and incidentally she keeps records. What is actually true is that there are two night nurses, and the one who had kept a record got a trial, and the one who had not had been getting the same errors for fourteen years and nobody knew. So the commas are wrong, and nobody will ever notice, and the sentence without them is the only sentence in those minutes that explains why this happened to her and not to the other one. Two commas, and the whole reason is gone._'));
out.push(p('**Listener task:** write a sentence from this room where the commas change what is true.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Rasha sends about one sentence. Answer the questions.'));
out.push(model([
  '**To:** the ward manager · **Subject:** The minutes of 29 May — two commas',
  'Dear Madam,',
  'I wrote those minutes myself and I am asking for a correction to a sentence of my own. It is two commas and it is not a small thing.',
  '**What I wrote.** "Sister Barakat, who had kept a record of her own errors since January, presented it to the committee."',
  '**What it means as written.** That there is one night sister, that you know who she is, and that she happens to keep records. The clause is additional and could be removed without changing the sentence.',
  '**What is true.** There are two night sisters on that ward. One of them had kept a record and one had not. The one who had kept it has a trial. The one who had not has had the same pattern of errors for fourteen years, has never reported it, and told me on 12 May that she had always assumed it was her.',
  '**The sentence I ask for.** "The night sister who had kept a record of her own errors since January presented it to the committee." No commas.',
  '**Why it matters more than it looks.** Without the commas the sentence contains the reason this happened to me and not to her: not that I am a better nurse, but that I wrote things down. With the commas, that reason is invisible, and in September somebody will read those minutes and conclude that one nurse was conscientious.',
  'Yours sincerely, R. Barakat',
]));
out.push(item('1', 'What does the sentence mean as she wrote it?'));
out.push(item('2', 'How many night sisters are there, and what is the difference between them?'));
out.push(item('3', 'What would a reader conclude in September from the version with commas?'));
out.push(writers([
  'A letter about punctuation that is not about punctuation: **what you wrote, quoted** → **what it means as written** → **what is true** → **the sentence you ask for** → **and why it matters more than it looks**.',
  'Say that you wrote it yourself in the first line. A correction to your own sentence is granted; a correction to somebody else\'s is negotiated.',
  'Explain the meaning of the punctuation in plain words: _the clause is additional and could be removed without changing the sentence._ Nobody will act on "the commas are wrong".',
  '⚠ End on the **reader in September**. Commas are invisible to everybody except the person who meant something by them, so the only argument that works is what a stranger will conclude.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter about one sentence of yours where the commas are wrong (50 words or more).'));
out.push(p('**To:** ______________   **Subject:** ______________ — two commas   Dear ______________,   I wrote ______________ myself and I am asking for a correction to a sentence of my own.   **What I wrote.** "______________."   **What it means as written.** That ______________, and that ______________. The clause is ______________.   **What is true.** There are ______________. One of them ______________ and one ______________.   **The sentence I ask for.** "______________." No commas.   **Why it matters more than it looks.** Without the commas the sentence contains ______________. With them, ______________, and in ______________ somebody will read it and conclude that ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Defining clause: **no commas**, and no second pronoun',
  '_who_ for people · _that_ or _which_ for things',
  'The meaning of the punctuation explained in plain words',
  'A last paragraph about what a stranger will conclude',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what it means as written" paragraph only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (100 words or more) about one sentence in something you or somebody else has written — a reference, a report, minutes, a notice. If the commas are right, write about a sentence where the **wrong** clause was made defining, which is the opposite error.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s letter as **the person who would change it**. ★ _The sentence that shows me the difference._  ✓ _One place where you say the commas are wrong without saying what they mean._  ? _What will a stranger conclude?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many sentences in this room have the wrong commas?** More than half. Then: how many of those sentences are in a document somebody else will read? Count. That is the only number that matters.'));
out.push(hw('Find one sentence in a real document — yours or anybody\'s — where a defining clause has commas or an adding clause has none, and write both versions with what each one means (50+ words).'));

// ======================= 11.2 =======================
out.push(pb());
out.push(h2('11.2  Bassel, who has run the shop for nineteen years'));
out.push(p('**Function:** adding information about somebody   ·   **Grammar:** non-defining clauses, and the commas   ·   **Pronunciation:** the two pauses'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: each student adds one true clause about the person on their left. _Fares, who has trained six representatives, is sitting next to me._ Two commas each, and your teacher will stop anybody who gives only one.'));
out.push(board('Fares, who has trained six representatives, has one day in June.', 'two commas, or none at all'));
out.push(p('**b**  Put the commas in — or do not. **1** _Lubna who is in her fourth year measured the site twice._  **2** _The student who measured the site twice is in her fourth year._  **3** _My sister who has three children told me to leave._  **4** _Mazen whose counter is in Shaalan has kept a fault book since September._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Samira notice about her own letter to her sister?   **A** the tense   **B** a clause with one comma   **C** that she never sent it'));
out.push(p('**b**  Listen again. **1** What is the difference between her two versions?   **2** What does Fares mention in passing?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.3  My sister, who had three children', [
  ['Samira', 'I have found something in the letter I wrote to my sister and did not send.'],
  ['Ms Huda', 'Read it.'],
  ['Samira', '"My sister who had three children and a rent of a hundred and ten thousand did not leave that job for eleven months." No commas. I wrote it like that in April and I have only seen it this week.'],
  ['Lubna', 'How many sisters do you have?'],
  ['Samira', 'One. Which means that sentence is wrong — with no commas it says: of my several sisters, the one with three children. I have one sister and everybody who would ever read that letter knows it.'],
  ['Ms Huda', 'And with the commas?'],
  ['Samira', '"My sister, who had three children and a rent of a hundred and ten thousand, did not leave that job for eleven months." Which is what I meant, and it is a different sentence in a way that matters, because the three children are **not** what distinguishes her from anybody. They are the thing I had not thought about for eight months.'],
  ['Jad', 'So the commas carry the apology.'],
  ['Samira', 'The commas carry the whole apology. Without them the children are a label on one of several sisters. With them they are information I am adding because I had left it out, and the two commas are the sound of somebody stopping to say something they should have said earlier.'],
  ['Fares', 'Can I add something? It is small and it is not about commas. September is agreed. Two days a month from September, written, for a year.'],
  ['Rasha', 'Fares.'],
  ['Fares', 'It is two days a month and it is not the post and it is in writing. And I told my own company on the Monday, before I signed anything, which is the part I would not have done in February.'],
  ['Ms Huda', 'Put it in a sentence with two commas in it.'],
  ['Fares', '…Fares Kayyali, who has trained six representatives in car parks, is going to be paid to do it two days a month from September.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the non-defining relative clause: two commas**',
  table(['you say', 'what it does'], [
    ['_Bassel, **who** has run the shop for nineteen years, crossed nine out._', 'adds information about somebody already identified'],
    ['_Room 14, **which** has no switch, is at the end._', 'the same, for a thing'],
    ['_My sister, **who** had three children, did not leave._', 'you have one sister; this is extra'],
    ['_The report, **which** had been filed in February, was never read._', 'one report, already identified'],
  ], [2.6, 2.0]),
  '**Two commas, or none at all.** One comma is always wrong. The pair works like brackets: take the clause and both commas out and the sentence must still stand.',
  '⚠ **_that_ is not allowed in a non-defining clause.** _Bassel, **who**…_ · _Room 14, **which**…_ ⚠ ~~Bassel, that has run the shop,~~ · ~~Room 14, that has no switch,~~.',
  '⚠ You **cannot leave the pronoun out** of a non-defining clause either: _the report, **which** I read in April, was…_ ⚠ ~~the report, I read in April, was…~~',
  '**Use it with a name, a unique thing, or a possessive:** _Bassel · Room 14 · my sister · the second chamber · her own mother_. If the noun is already unique, the clause can only be adding.',
  '**And the thing worth knowing about it:** a non-defining clause is where you put what you had left out. _My sister, who had three children,_ is not a label; it is an admission, and the commas are the sound of somebody stopping to say something they should have said earlier.',
  '**Useful phrases:** two commas, or none at all · the commas carry the whole apology · they are information I am adding because I had left it out · put it in a sentence with two commas in it.',
  '**Practise:** Add a non-defining clause to each, with two commas.  1 _Bassel crossed nine rules out._  2 _Room 14 is at the end of the corridor._  3 _My sister did not leave that job._  4 _The second trolley has not come back._  5 _Fares has one day in June._',
  '**Pronunciation.** 🔊 **Track 11.4** The two commas are **two pauses**, and the clause between them is said slightly lower and faster: _Bassel ‖ who has run the shop for nineteen years ‖ crossed nine of them out._ One pause and no second one is the commonest fault and it leaves the listener waiting. Listen to six and mark the pauses.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the person or thing from the card. B makes a sentence with a non-defining clause, two commas, and something **they had left out** of their own earlier account of it. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '__________, who/which __________, __________.'],
  ['A', 'Is that something you had left out before?'],
  ['B', '__________.'],
  ['A', 'Two commas?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – people and things', 'Card B – people and things'], [
  ['somebody who gave you advice you did not take', 'a room or a machine you have complained about'],
  ['somebody you gave advice to', 'a document you have written about twice'],
  ['the person who answered or did not answer you', 'a thing that has been waiting since February'],
  ['the person you asked for something', 'a place you have described to somebody'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the clause between the commas for each sentence and mark the ones that contain something the speaker had **left out** before. Those are the ones the cycle is for, and there are usually five out of eight.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a person you have written about in this book and add the clause you left out. Two commas. Then say why you left it out the first time.'));
out.push(p('**b**  Swap. Then each of you say whether the clause changes who was right in the story.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Samira has found something in the letter she wrote to her sister and did not send. She had written: my sister who had three children and a rent of a hundred and ten thousand did not leave that job for eleven months — with no commas, in April, and she has only seen it this week. Lubna asked how many sisters she has, and she said one, which means the sentence is wrong: with no commas it says that of her several sisters, the one with three children. She has one sister and everybody who would read that letter knows it. With the commas it is what she meant, and it is a different sentence in a way that matters, because the three children are not what distinguishes her sister from anybody — they are the thing Samira had not thought about for eight months. Jad said so the commas carry the apology, and Samira said they carry the whole apology: without them the children are a label on one of several sisters, and with them they are information she is adding because she had left it out, and the two commas are the sound of somebody stopping to say something they should have said earlier. Then Fares said something small: September is agreed — two days a month from September, written, for a year. He told his own company on the Monday before he signed anything, which is the part he would not have done in February. Ms Huda asked him to put it in a sentence with two commas in it, and he said: Fares Kayyali, who has trained six representatives in car parks, is going to be paid to do it two days a month from September._'));
out.push(p('**Listener task:** write the clause somebody had left out, with its two commas.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Samira sends. Answer the questions.'));
out.push(model([
  '**TO MY SISTER, WITH TWO COMMAS** · S. Deeb · sent on 2 June',
  'I wrote you a letter in April and did not send it, and I have rewritten one sentence of it and now I am sending both.',
  '**What I wrote in April.** "My sister who had three children and a rent of a hundred and ten thousand did not leave that job for eleven months."',
  '**What I should have written.** "My sister, who had three children and a rent of a hundred and ten thousand, did not leave that job for eleven months."',
  '**What the difference is.** Without the commas, the three children and the rent are what tell you which sister I mean, as though I had several and you needed to know. I have one sister and you are her. With the commas, the children and the rent are information I am adding — and I am adding them because for eight months I did not think about either of them, and I told you thirty times to leave a job without ever once saying the words "three children" out loud.',
  '**And one more clause I had left out.** You, who had been doing that job for nine years and knew what every one of those women earned, understood something about the clinic that I never asked you a single question about.',
  '**What I am not doing.** I am not asking you to say that the advice was wrong. It was right and you have said so twice and I would rather you stopped. I am saying that I gave it from a flat with one person in it, and that two commas is the whole of what I understand now and did not then.',
]));
out.push(item('1', 'Why does she say the version without commas is wrong?'));
out.push(item('2', 'What is the second clause she had left out, and what does it concede?'));
out.push(item('3', 'What does she ask her sister to stop doing?'));
out.push(writers([
  'A letter built on a clause: **what you wrote** → **what you should have written** → **what the difference is, in plain words** → **one more clause you had left out** → **and what you are _not_ asking for**.',
  'Explain the punctuation as **meaning**, not as grammar: _as though I had several and you needed to know. I have one sister and you are her._',
  'Add the second clause. One corrected sentence is a point about commas; a second clause that you had also left out is the page becoming honest.',
  '⚠ Refuse the easy ending. _I am not asking you to say that the advice was wrong_ — and _I would rather you stopped_ — is harder and better than being forgiven.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter about a clause you left out (50 words or more).'));
out.push(p('**______________** · ______________   I wrote ______________ and ______________, and I have rewritten one sentence of it.   **What I wrote.** "______________."   **What I should have written.** "______________."   **What the difference is.** Without the commas, ______________ is what tells you ______________, as though ______________. With the commas, ______________ is information I am adding — and I am adding it because ______________.   **And one more clause I had left out.** You, who ______________, ______________.   **What I am not doing.** I am not asking you to ______________. I am saying that ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Two commas, or none at all — never one',
  '_who_ or _which_ in a non-defining clause, never _that_',
  'The pronoun never left out of a non-defining clause',
  'A second clause, containing something you had left out',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the clause they had left out.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (100 words or more) to somebody you have written or spoken about without a clause they deserved. Then write underneath whether you are going to send it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s letter as **the person it is addressed to**. ★ _The clause that changes who was right._  ✓ _One place with one comma._  ? _What are you not asking for?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read only the clauses people had left out.** Most of them are about money, children, time or illness — the things that make somebody\'s situation theirs — and every single one was left out of a sentence that was otherwise true.'));
out.push(hw('Write the clause you left out about one person, with two commas (50+ words), and then say why it was left out the first time. If you can, give the sentence to the person it is about.'));

// ======================= 11.3 =======================
out.push(pb());
out.push(h2('11.3  Whose, where and when'));
out.push(p('**Function:** saying whose, where and when   ·   **Grammar:** _whose_ · _where_ · _when_   ·   **Pronunciation:** _whose_ against _who\'s_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads six sentences from this book with _of which_, _in which_ or two short sentences in them. The class says each one again with _whose_, _where_ or _when_ — and then says which version is better. It is not always the short one.'));
out.push(board('The room whose switch is in Room 13 is this one.', 'whose · where · when'));
out.push(p('**b**  Which word? **1** _the room ___ switch is next door_  **2** _the building ___ the partitions came out in 2009_  **3** _the year ___ the partitions came out_  **4** _the man ___ name is on the report_  **5** _the bay ___ nobody can be seen_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Lubna writing?   **A** a letter   **B** a key to her survey drawings   **C** a complaint'));
out.push(p('**b**  Listen again. **1** Why can she not use short sentences?   **2** What does Jad say about _whose_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.5  A key to a drawing', [
  ['Lubna', 'I have to write the key to the survey drawings and I have been fighting with six sentences for two days.'],
  ['Ms Huda', 'Read one of the six.'],
  ['Lubna', '"Room 14. The switch of this room is in Room 13. The wire of the second switch is on the outside of the wall." Two sentences and the second one is about the first.'],
  ['Mazen', 'Why not leave it as two sentences? You told us two years ago that short sentences are faster.'],
  ['Lubna', 'Because this is a **key**. Somebody is standing in a corridor with a drawing in one hand, looking for the room. They do not read a key; they scan it until they find the thing that describes the room they are standing in. If the information about the switch is in a second sentence, they will stop at the first one.'],
  ['Ms Huda', 'So?'],
  ['Lubna', '"Room 14, whose switch is in Room 13 and whose second switch has an external wire." One entry, one room, everything in it.'],
  ['Jad', '_Whose_ for a room. I thought _whose_ was only for people.'],
  ['Lubna', 'So did I until Tuesday. It works for things and there is nothing else that does the job — _the room of which the switch_ is correct English and no human being has ever written it on a drawing.'],
  ['Ms Huda', 'And the other two words?'],
  ['Lubna', '_Where_ and _when_, and they save me about forty words across six entries. "The stairwell where the fire door swings." "2009, when the partitions came out." I had written "the stairwell in which the fire door swings" and it looks like a contract.'],
  ['Jad', 'And _whose_ is not _who is_.'],
  ['Lubna', 'It is not, and I have written _who\'s_ once in the key and I only found it because I read it out loud, which is the only way anybody ever finds it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – three more relative words**',
  table(['you say', 'what it replaces'], [
    ['_the room **whose** switch is next door_', '_of which the switch_ — possession, for people **and** things'],
    ['_the stairwell **where** the door swings_', '_in which_ — a place'],
    ['_2009, **when** the partitions came out_', '_in which_ — a time'],
    ['_the man **whose** name is on the report_', 'possession, for a person'],
  ], [2.4, 2.2]),
  '**_whose_ works for things.** Most students believe it is only for people. _The room whose switch is next door_ is correct and is the only natural way to say it: _the room of which the switch is next door_ is also correct and nobody writes it.',
  '**_where_ after a place and _when_ after a time**, and both replace a clumsy _in which_ / _on which_: _the ward where I work_ · _the week when it happened_.',
  '⚠ ~~the room where I left it in~~ — _where_ already contains the preposition. Same with _when_: ~~the day when I saw him on~~.',
  '⚠ **_whose_ is not _who\'s_.** _Who\'s_ = _who is_ or _who has_. They sound identical and the only way to find the mistake is to read the sentence aloud and hear whether _who is_ fits.',
  '⚠ _where_ cannot be used for an organisation acting as a body: ~~the company where decided~~ → _the company **which** decided_. It is a place word and it needs a place.',
  '**And the point of the cycle:** these three words exist because a **key, a label, a caption or a list** has one line for each thing, and everything about that thing has to be in the one line. Two sentences is right in a story and wrong in a key.',
  '**Useful phrases:** they do not read a key, they scan it · one entry, one room, everything in it · it is correct English and no human being has ever written it on a drawing · I only found it because I read it out loud.',
  '**Practise:** Rewrite each as one entry with _whose_, _where_ or _when_.  1 _Room 14. Its switch is in Room 13._  2 _The stairwell. The fire door swings there._  3 _2009. The partitions came out then._  4 _The second chamber. Its seal was split._  5 _The man. His name is on the report._',
  '**Pronunciation.** 🔊 **Track 11.6** _whose_ and _who\'s_ are identical in speech, /huːz/, and the sentence is the only clue. Listen to eight sentences and write _whose_ or _who\'s_; then read your own key aloud, which is the only way the mistake is ever found.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the two short sentences from the card. B makes them one entry with _whose_, _where_ or _when_, and then says whether the one-entry version is actually better **here**. Sometimes it is not. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________. __________.'],
  ['B', '__________ whose/where/when __________.'],
  ['A', 'Is the one-entry version better here?'],
  ['B', '__________, because this is a __________ and not a __________.'],
]));
out.push(table(['Card A – the pairs', 'Card B – the pairs'], [
  ['Room 14. Its switch is in Room 13.', 'The stairwell. The fire door swings there.'],
  ['The second chamber. Its seal was split.', '2009. The partitions came out then.'],
  ['Bay five. It cannot be seen from the station.', 'The man. His name is on the report.'],
  ['February. The trolley went down then.', 'The model. Its screen is glued by hand.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the one-entry versions, and mark the ones where two sentences would have been better. There are usually two: the ones that are **telling a story** rather than labelling a thing.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write four entries for a key, a label or a list in your own work, each with _whose_, _where_ or _when_ in it. One line each. Read them to your partner.'));
out.push(p('**b**  Swap. Then each of you find one entry that should be two sentences, and say why.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lubna has to write the key to her survey drawings and has been fighting with six sentences for two days. One of them was: Room 14. The switch of this room is in Room 13. The wire of the second switch is on the outside of the wall. Two sentences, and the second is about the first. Mazen asked why not leave it as two, since she told us two years ago that short sentences are faster, and she said because this is a key: somebody is standing in a corridor with a drawing in one hand, looking for the room, and they do not read a key, they scan it until they find the thing that describes the room they are standing in — so if the information about the switch is in a second sentence, they will stop at the first. Her version is: Room 14, whose switch is in Room 13 and whose second switch has an external wire. One entry, one room, everything in it. Jad said he thought whose was only for people, and she said so did she until Tuesday: it works for things, and there is nothing else that does the job, because "the room of which the switch" is correct English and no human being has ever written it on a drawing. Where and when save her about forty words across six entries — "the stairwell where the fire door swings", "2009, when the partitions came out" — and she had written "the stairwell in which the fire door swings", which looks like a contract. And she had written "who\'s" once and only found it by reading it aloud._'));
out.push(p('**Listener task:** write the entry somebody turned from two sentences into one.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Lubna\'s key. Answer the questions.'));
out.push(model([
  '**KEY TO SHEETS 1–3** · survey of 14 Sharia al-Jalaa · L. Sweidan · June',
  '**1962 structure** — the original building, whose four floors, single staircase and outward-opening doors are all as built. Doors 76 cm.',
  '**1974 extension** — the fourth-floor extension over the yard, whose render contains a different sand and has weathered separately. Visible from the street. Not on any drawing held by the university.',
  '**2009 conversion** — the year when four rooms were divided into nine. Partitions shown dashed.',
  '**Room 13 / Room 14** — two rooms made from one accounts office, whose single lighting circuit and single switch were not altered in 2009. The second switch in Room 14 has an external wire and is shown with an asterisk.',
  '**The stairwell** — the stairwell where the lift shaft was begun and abandoned. Now a store with a steel door and no internal handle.',
  '**South elevation** — the three rooms whose windows were not replaced in 2009 and which run 4–5 °C hotter than the north side in summer. Shaded on sheet 2.',
  '**What this key is not.** It is not a condition survey and it is not a recommendation. Every entry describes what is there and the year it got there, and where I do not know a year I have left the space blank rather than guessing. There are two blanks.',
]));
out.push(item('1', 'How many entries use _whose_, and what do they have in common?'));
out.push(item('2', 'What does she do where she does not know a year?'));
out.push(item('3', 'What does she say the key is not?'));
out.push(writers([
  'A key or a label list: **one entry a line** → **everything about that thing inside the one entry, with _whose_, _where_ or _when_** → **the drawing reference at the end of the entry** → **and a last paragraph saying what the key is _not_**.',
  'Keep every entry **scannable**: the name of the thing first, in bold, then the clause. Somebody standing in a corridor reads the first two words of each line and nothing else until they find theirs.',
  'Leave a **blank** where you do not know, and say how many blanks there are. A key with two admitted gaps is trusted; a key with two guesses in it is worthless and nobody can tell which two.',
  '⚠ End with what the document is not. _It is not a condition survey and it is not a recommendation._ Keys get used as evidence for things they were never meant to say.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the key, label list or legend for something in your own work (50 words or more).'));
out.push(p('**KEY TO ______________** · ______________ · ______________   **______________** — ______________, whose ______________. ______________.   **______________** — ______________, whose ______________ and whose ______________. ______________.   **______________** — the ______________ where ______________. ______________.   **______________** — ______________, when ______________. ______________.   **What this key is not.** It is not ______________ and it is not ______________. Where I do not know ______________ I have left the space blank rather than guessing. There are ______________ blanks.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_whose_ for people **and** things · _where_ for a place · _when_ for a time',
  'No repeated preposition after _where_ or _when_',
  '_whose_ and not _who\'s_ — checked by reading it aloud',
  'Blanks left where you do not know, and counted',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what this key is not" paragraph only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full key (100 words or more) for a place, a machine, a set of records or a group of people you are responsible for. Then read it aloud to yourself and write down what you found.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s key as **somebody standing in the place with it in one hand**. ★ _The entry I could find in two seconds._  ✓ _One _who\'s_, or one entry that should be two sentences._  ? _How many blanks are there, and are they marked?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Who found a _who\'s_ by reading it aloud?** Two or three, every time. Then: who left a blank rather than guessing? Fewer, and that is the harder half of the cycle.'));
out.push(hw('Write the key for something you are responsible for (50+ words), with at least one _whose_, one _where_ and one _when_, and at least one blank where you do not know. Read it aloud before you hand it in.'));

// ======================= 11.4 =======================
out.push(pb());
out.push(h2('11.4  Two sentences or one'));
out.push(p('**Function:** combining two sentences into one   ·   **Grammar:** subordination against two main clauses   ·   **Pronunciation:** hearing where a sentence should end'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out the place in your own writing where two short sentences should have been one. Your teacher writes six on the board and joins them. Then the opposite: your teacher reads three joined sentences from this book and the class breaks them into two. Three each way.'));
out.push(board('Join it when one is about the other. Split it when both are news.', 'subordinate · or two full stops'));
out.push(p('**b**  Join or split? **1** _The report went to a post. The post was empty._  **2** _She stood up. She said four words._  **3** _The trolley has a broken wheel. It went to the workshop in February._  **4** _The lights went out. I found the torch._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the class is now doing wrong?   **A** writing too many short sentences   **B** joining sentences that should be separate   **C** using too many commas'));
out.push(p('**b**  Listen again. **1** What was the Unit 2 rule, and what is the Unit 11 rule?   **2** What does Tareq say about his own nine words?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.7  The opposite problem', [
  ['Ms Huda', 'In Unit 2 I told you to use full stops. Five short sentences, no _and thens_. Do you remember why?'],
  ['Tareq', 'Because it is faster and because students think short sentences are for children.'],
  ['Ms Huda', 'And now, nine units later, I am going to tell you something that sounds like the opposite. Lubna — read me the sentence you found in Omar\'s page.'],
  ['Lubna', '"The report was filed to a post. The post had been empty since March. Nobody read it."'],
  ['Omar', 'Three sentences. Unit 2.'],
  ['Lubna', 'Three sentences, and only the third one is news. The first two are both about the same report and the second is about the first, and I had to read all three to find out that nobody read it.'],
  ['Ms Huda', 'So what is the rule, now that you have both halves of it?'],
  ['Omar', '…Split when both halves are news. Join when one half is about the other.'],
  ['Ms Huda', 'Say it again and give me the example.'],
  ['Omar', 'Split when both are news: she stood up — she said four words. Two events, two full stops, and the full stop is the four seconds. Join when one is about the other: the report, which had been filed to a post that had been empty since March, was never read.'],
  ['Tareq', 'My nine words are the other way round.'],
  ['Ms Huda', 'Go on.'],
  ['Tareq', '"The Harasta road was closed at six and nobody told the depot." I have been proud of those nine words since April. And there are two pieces of news in them and I have joined them with _and_, which is the weakest join there is. The depot not being told is the whole thing. It should be two sentences, and the second one should be four words.'],
  ['Ms Huda', 'Say it.'],
  ['Tareq', 'The Harasta road was closed at six. Nobody told the depot.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Join, or split?**',
  table(['the situation', 'what to do'], [
    ['one half is **about** the other', 'join: a relative clause, no full stop'],
    ['both halves are **news**', 'split: two full stops'],
    ['the second half is the **point**', 'split, and make the second one short'],
    ['the second half is a **label** on the first', 'join with _whose_, _where_, _when_ or _which_'],
  ], [2.4, 2.2]),
  '**Unit 2 and Unit 11 are the same rule from two sides.** _And then · and · and_ joining two events is weak, and a relative clause joining two events is worse. But three full stops where one noun is being described three times is a reader doing your work.',
  '**_and_ is the weakest join in English.** It says only that the two things are both there. If one is about the other, use a clause; if the second is the point, use a full stop.',
  '⚠ **Do not join with a comma alone.** ~~The road was closed at six, nobody told the depot.~~ That is two sentences with the wrong mark between them. Use a full stop, or _and_, or _which_, or a semicolon.',
  '⚠ Do not stack more than two clauses in one sentence. _The report, which had been filed to a post that had been empty since March, was never read_ is at the limit; a third clause loses the reader.',
  '**The test:** read the sentence aloud and listen for where your voice wants to stop. That place is a full stop, whatever you have written there.',
  '**Useful phrases:** only the third one is news · the full stop is the four seconds · _and_ is the weakest join there is · the depot not being told is the whole thing.',
  '**Practise:** Join or split, and say which and why.  1 _The report went to a post. The post was empty._  2 _She stood up. She said four words._  3 _The trolley has a broken wheel. It went to the workshop in February._  4 _The lights went out. I found the torch._  5 _He is sixty-one. He has not answered an email in eleven years._',
  '**Pronunciation.** 🔊 **Track 11.8** Listen to the same four facts read as one long sentence and as four short ones, and then as the right mixture. Mark where the reader\'s voice stops. The right mixture has two stops in four facts, and in almost all student writing the stops are in the wrong places rather than the wrong number.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the pair from the card. B joins or splits it and says which and why. A then asks for the other version and both decide which they would send. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________. __________.'],
  ['B', '__________ — join, because __________. / Split, because __________.'],
  ['A', 'And the other version?'],
  ['B', '__________.'],
  ['A', 'Which would you send?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the pairs', 'Card B – the pairs'], [
  ['The report went to a post. The post was empty.', 'She stood up. She said four words.'],
  ['The trolley has a broken wheel. It went down in February.', 'The lights went out. I found the torch.'],
  ['He is sixty-one. He has not answered an email in eleven years.', 'The seal was split. The batch was lost.'],
  ['The box is three centimetres long. I have filled it in ninety times.', 'I asked her one question. She had known for two years.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** mark each pair _joined_ or _split_. The ones everybody splits are the ones where the second half is a surprise — _she had known for two years_, _the batch was lost_ — and that is the test in one line: a surprise gets a full stop.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take one paragraph of your own from this book and rewrite it, joining what should be joined and splitting what should be split. Then count the full stops before and after.'));
out.push(p('**b**  Swap. Then each of you find one place where the other has joined two pieces of news with _and_.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda reminded us that in Unit 2 she told us to use full stops — five short sentences, no "and thens" — and Tareq said that was because it is faster and because students think short sentences are for children. Then she said she was going to tell us something that sounds like the opposite, and asked Lubna to read a sentence she had found in Omar\'s page: the report was filed to a post; the post had been empty since March; nobody read it. Omar said three sentences, Unit 2. Lubna said three sentences, and only the third is news — the first two are both about the same report and the second is about the first, and she had to read all three to find out that nobody read it. So Omar gave the rule with both halves: split when both are news, join when one is about the other. Split: she stood up, she said four words — two events, two full stops, and the full stop is the four seconds. Join: the report, which had been filed to a post that had been empty since March, was never read. Then Tareq said his nine words are the other way round. He has been proud since April of "the Harasta road was closed at six and nobody told the depot", and there are two pieces of news in it joined with "and", which is the weakest join there is, and the depot not being told is the whole thing. So it should be two sentences, and the second should be four words: the Harasta road was closed at six. Nobody told the depot._'));
out.push(p('**Listener task:** write the two pieces of news somebody had joined with _and_.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the same paragraph three times. Answer the questions.'));
out.push(model([
  '**ONE PARAGRAPH, THREE SHAPES** · from the Unit 7 chain, rewritten',
  '**Version A — all split.** The trolley had a broken wheel. It went to the workshop on 2 February. There is no form for chasing equipment. It was not chased. The ward had one trolley. The ward has five bays. The round was late. It was late thirty-four times.',
  '**Version B — all joined.** The trolley, which had a broken wheel and which went to the workshop on 2 February, where it was not chased because there is no form for chasing equipment, left the ward, which has five bays, with one trolley, which meant that the round, which is written for two, was late on thirty-four occasions.',
  '**Version C.** The second trolley went to the workshop on 2 February with a broken wheel. There is no form for chasing equipment that has gone to the workshop, so it was not chased. That left a five-bay ward with one trolley. The round was late on all thirty-four nights.',
  '**What is wrong with A.** Eight sentences and four of them are labels on the trolley. A reader has to hold the trolley in their head for five sentences before anything happens to it.',
  '**What is wrong with B.** One sentence, five clauses, and by the fourth one nobody knows what the subject is. It is also, word for word, nearly the same as C.',
  '**What C does.** Four sentences. The first two are each one fact with its label attached. The third is the consequence and it is short. The fourth is the news and it is shortest of all.',
]));
out.push(item('1', 'How many sentences are in each version?'));
out.push(item('2', 'What is wrong with version A?'));
out.push(item('3', 'Which sentence in version C is the shortest, and why?'));
out.push(writers([
  'A paragraph in the right shape: **one fact a sentence, with its own label attached by a clause** → **the consequence short** → **and the news shortest of all**.',
  'Write version A first — all split — and then join only the labels. That is easier and more reliable than trying to get the shape right in one attempt.',
  'Never write version B. Five clauses in one sentence is not sophistication; the test is whether a reader can say what the subject of the sentence is by the end of it.',
  '⚠ The last sentence of a paragraph should be the shortest. _The round was late on all thirty-four nights._ If your longest sentence is at the end, the paragraph has no point in it.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take a paragraph of your own and write it in three shapes (50 words or more).'));
out.push(p('**Version A — all split.** ______________. ______________. ______________. ______________. ______________.   **Version B — all joined.** ______________, which ______________, where ______________, which ______________.   **Version C.** ______________. ______________, so ______________. ______________. ______________.   **What is wrong with A.** ______________.   **What is wrong with B.** ______________.   **What C does.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Join when one half is a label; split when both halves are news',
  'No comma alone between two sentences',
  'Not more than two clauses in one sentence',
  'The last sentence of the paragraph the shortest',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read version C only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Rewrite a full page of your own from this book (100 words or more) in the version C shape. Then count the full stops in the original and in the new one, and write both numbers.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s version C aloud. ★ _The short sentence at the end._  ✓ _One place where your voice wanted to stop and there is no full stop._  ? _Which facts are news and which are labels?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Collect the two numbers from everybody.** The counts go both ways — some pages lose full stops and some gain them — and that is the finding: the problem was never the number, it was where they were.'));
out.push(hw('Rewrite one paragraph of your own in the three shapes (50+ words), and then read version C aloud to somebody and ask them to tell you what the news in it was.'));

// ======================= 11.5 =======================
out.push(pb());
out.push(h2('11.5  The man I met'));
out.push(p('**Function:** leaving the pronoun out   ·   **Grammar:** _the man I met · the book I read_   ·   **Pronunciation:** the gap where the pronoun was'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads six phrases with no relative pronoun in them — _the man I met · the thing you put papers in · the four words he said_. The class puts _who_, _which_ or _that_ back in, and then decides which version is better. All six are better without.'));
out.push(board('The four words he said. The man I met. The thing I cannot measure.', 'leave it out when it is the object'));
out.push(p('**b**  Can the pronoun come out? **1** _the man who signed it_  **2** _the man who I met_  **3** _the report which nobody read_  **4** _the report which went to an empty post_  **5** _the room where I work_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Jad been doing for two years without knowing it?   **A** leaving out relative pronouns   **B** using _that_ for people   **C** writing non-defining clauses'));
out.push(p('**b**  Listen again. **1** What is the rule, in Jad\'s words?   **2** What does Ms Huda say about where it cannot be done?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.9  The pronoun nobody told me about', [
  ['Jad', 'I went through forty of my forum answers last night with a pencil, because of this unit.'],
  ['Ms Huda', 'What did you find?'],
  ['Jad', 'I leave the relative pronoun out about half the time and I have never once decided to. "The cable you are using." "The thing it plugs into." "The four screws I mentioned." No _which_, no _that_, nothing.'],
  ['Lubna', 'Is it correct?'],
  ['Ms Huda', 'It is correct, it is normal, and it is what any English speaker would write. The rule is short. Jad, you have the data — tell us.'],
  ['Jad', 'I have been looking at it for an hour and I think it is this. If the thing is doing the verb, you have to keep the pronoun. If the thing is having the verb done to it, you can drop it. "The cable **that** broke" — the cable broke, so it stays. "The cable you are using" — you are using the cable, so it goes.'],
  ['Ms Huda', 'That is exactly right and it is the subject-object rule, and you have arrived at it off forty of your own sentences, which is better than being told it.'],
  ['Omar', 'So where can you not do it?'],
  ['Ms Huda', 'Two places, and both are in this book. You cannot do it in a non-defining clause: _the report, **which** I read in April, was never actioned._ Take the _which_ out and the sentence breaks. And you cannot do it after a preposition that has stayed in front: _the post **to which** it was sent_. With the preposition at the end you can: _the post it was sent to._'],
  ['Jad', 'Which is why every one of mine works. I never write a preposition in front of anything.'],
  ['Ms Huda', 'Nobody does, in writing to a stranger at one in the morning. That is not a failure of your English; it is the register, and it is the right one.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – when the pronoun can go**',
  table(['you say', 'why'], [
    ['_the man **who** signed it_ — pronoun **stays**', 'the man signed it: he is doing the verb'],
    ['_the man I met_ — pronoun **goes**', 'I met the man: it is having the verb done to it'],
    ['_the report **which** went to a post_ — **stays**', 'the report went: subject'],
    ['_the report nobody read_ — **goes**', 'nobody read the report: object'],
  ], [2.4, 2.2]),
  '**The rule in one line: if there is a new subject straight after the noun, the pronoun can go.** _The man **I** met · the report **nobody** read · the four words **he** said._ If the verb comes straight after the noun, it must stay.',
  '**It is not informal.** Leaving it out is the normal written form in English and it makes a sentence shorter and faster. Students keep it in because they were taught it, and the result reads as translated.',
  '⚠ **You cannot leave it out of a non-defining clause:** _the report, **which** I read in April, was never actioned._ ~~the report, I read in April, was~~.',
  '⚠ **You cannot leave it out after a preposition in front:** _the post **to which** it was sent_. Move the preposition to the end and you can: _the post it was sent **to**_ — which is what anybody would actually write.',
  '⚠ ~~the man I met him~~ · ~~the report nobody read it~~ — the object is already accounted for; do not put it back.',
  '**_whom_** is the object form of _who_ and is formal and dying. _The man whom I met_ is correct and nobody writes it; _the man I met_ is what you want. Keep _whom_ for _to whom it may concern_ and after a preposition in front.',
  '**Useful phrases:** I leave it out about half the time and I have never once decided to · if the thing is doing the verb, keep it · you have arrived at it off forty of your own sentences · that is not a failure of your English, it is the register.',
  '**Practise:** Take the pronoun out where you can.  1 _the man who signed it_  2 _the man who I met at the depot_  3 _the four words that he said_  4 _the report that was never read_  5 _the clipboard that I keep behind the door_  6 _the post to which it was sent_',
  '**Pronunciation.** 🔊 **Track 11.10** With the pronoun gone there is **no pause** where it was: _the man I met_ is three words and one piece. Students put a tiny gap in — _the man … I met_ — which is where the missing word used to be, and it makes the phrase sound broken. Listen to eight and repeat them as single pieces.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the phrase from the card with the pronoun in. B takes it out if it can come out, and says why. If it cannot come out, B says what is doing the verb. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '__________ — it can come out, because __________ is doing the verb.'],
  ['A', 'And this one?'],
  ['B', 'It stays, because __________.'],
]));
out.push(table(['Card A – the phrases', 'Card B – the phrases'], [
  ['the man who signed it', 'the man who I met at the depot'],
  ['the four words that he said', 'the report that was never read'],
  ['the clipboard that I keep behind the door', 'the seal which had been splitting'],
  ['the post to which it was sent', 'the question that she did not want to answer'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** mark each phrase _can go_ or _stays_. Four of the eight can go. Then: which of the four sounds better without it? All four — and that is the only reason to learn the rule.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a page of your own writing and find three places where you have kept a pronoun that could come out. Read the three phrases both ways.'));
out.push(p('**b**  Swap. Then each of you find one place where the other has taken it out and should not have.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Jad went through forty of his forum answers with a pencil because of this unit, and found that he leaves the relative pronoun out about half the time and has never once decided to: the cable you are using, the thing it plugs into, the four screws I mentioned — no "which", no "that", nothing. Lubna asked whether it is correct, and Ms Huda said it is correct, it is normal, and it is what any English speaker would write, and that the rule is short — and she asked Jad to give it, because he had the data. He said he had been looking at it for an hour and thought it was this: if the thing is doing the verb, you keep the pronoun, and if the thing is having the verb done to it, you can drop it. The cable that broke — the cable broke, so it stays. The cable you are using — you are using the cable, so it goes. Ms Huda said that is exactly the subject-object rule and that he had arrived at it off forty of his own sentences, which is better than being told it. Omar asked where you cannot do it, and she said two places, both in this book: not in a non-defining clause, because the report, which I read in April, breaks if you take the which out; and not after a preposition that has stayed in front — the post to which it was sent — though with the preposition at the end you can: the post it was sent to. Jad said that is why every one of his works: he never writes a preposition in front of anything._'));
out.push(p('**Listener task:** write one phrase from this room that is better without the pronoun.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Jad\'s page about his own sentences. Answer the questions.'));
out.push(model([
  '**FORTY ANSWERS AND A PENCIL** · J. Attar',
  'I went through forty of my own answers with a pencil and underlined every place where a relative pronoun could have gone and did not. There were thirty-one.',
  '**What I had been doing right without knowing.** _The cable you are using. The thing it plugs into. The four screws I mentioned. The board the connector sits on. The one I would check first._ Thirty-one of those in forty answers, and I had never once thought about it.',
  '**What I had been doing wrong.** Four places where I kept it and should not have — _the fault that you are describing_, which is slower by one word and no clearer — and one place where I took it out and could not: _the board, I replaced in March, has the same fault._ That sentence is broken and it has been on that site for seven months.',
  '**What I notice about where it happens.** Every one of the thirty-one is in a sentence about something **the reader is doing**: the cable you are using, the screws I mentioned, the one I would check first. The pronoun disappears exactly where the sentence is an instruction to a person, which is nearly every sentence I write.',
  '**And the thing that bothers me.** I would have told you last week that I cannot write English. I have thirty-one correct examples of a construction I could not have named, in forty answers, in a language nobody has ever taught me in a classroom. And one broken sentence that has been read by about nine hundred people.',
]));
out.push(item('1', 'How many places were there in forty answers?'));
out.push(item('2', 'What is wrong with the sentence about the board?'));
out.push(item('3', 'Where does he notice the pronoun disappearing?'));
out.push(writers([
  'A page about your own habits: **count something in your own writing** → **what you were doing right** → **what you were doing wrong, with the broken example quoted** → **where the pattern happens** → **and what it means about what you thought you could not do**.',
  'Do the counting with a pencil on real pages of your own. Thirty-one out of forty is a fact; "I sometimes leave it out" is not.',
  'Quote the **broken** one. One wrong sentence, printed, is worth more than the thirty-one right ones, and it is the sentence a reader trusts you for.',
  '⚠ The last paragraph is the one worth the page: _I would have told you last week that I cannot write English._ If your own writing contains a construction you could not name, your account of what you can do is wrong.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Count one thing in your own writing and write the page (50 words or more).'));
out.push(p('**______________** · ______________   I went through ______________ of my own ______________ and underlined every place where ______________. There were ______________.   **What I had been doing right.** ______________. ______________. ______________.   **What I had been doing wrong.** ______________ places where ______________ — and one place where ______________: "______________." That sentence is broken and ______________.   **What I notice about where it happens.** ______________.   **And the thing that bothers me.** I would have told you ______________. I have ______________ correct examples of ______________ that I could not have named.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The pronoun out where there is a new subject after the noun',
  'The pronoun kept in every non-defining clause',
  'No preposition left in front where it could go to the end',
  'A real count, and the broken example quoted',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their broken example only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Count one feature in a page of your own writing (100 words or more) — the pronouns, the _saids_, the full stops, the adjectives, the numbers — and write the page. Real counts only.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody who has read a lot of their writing**. ★ _The count that surprised me._  ✓ _One estimate presented as a count._  ? _What would you have told me last week that you cannot do?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read only the last paragraphs.** Almost everybody in the room can do something in English they would have said they could not, and in every case the evidence was already written down somewhere in their own hand.'));
out.push(hw('Count one feature in thirty of your own sentences — from this book, from work, from anywhere (50+ words). Give the real number, quote one example you got wrong, and say what you would have told somebody last week.'));

// ======================= 11.6 =======================
out.push(pb());
out.push(h2('11.6  Defining and adding, side by side'));
out.push(p('**Function:** writing a description that defines and adds   ·   **Grammar:** the two clause types in one paragraph   ·   **Pronunciation:** reading a list of people aloud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher gives each student the name of one other person in the room. Round the room, each person says **two** sentences about the one they were given: one that would tell a stranger **which** person, and one that **adds** something.'));
out.push(board('The one who keeps a fault book. Mazen, who has mended about 2,300 telephones.', 'which one · and what else'));
out.push(p('**b**  Defining or adding? **1** _the student who measured the site twice_  **2** _Lubna, who is in her fourth year_  **3** _the nurse who kept a record_  **4** _Rasha, whose trial starts on 1 June_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the class writing, and what has Ms Huda asked them not to do?'));
out.push(p('**b**  Listen again. **1** Who will read the page?   **2** What does Umm Kinan say about the two kinds of clause?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.11  Twelve entries', [
  ['Ms Huda', 'Each of you has the name of somebody else in this room. You are going to write their entry for a page that goes to the group that starts in September.'],
  ['Omar', 'They will read it?'],
  ['Ms Huda', 'They will read it in their first week, when they do not know one face from another. So each entry needs a clause that tells them **which** person — no commas — and a clause that tells them something about that person, with commas. And one rule: nothing in it that the person has not said in this room.'],
  ['Umm Kinan', 'The two clauses do completely different jobs and I have only just seen how different. The defining one is for a stranger in a doorway: the one who repairs telephones, the one who works nights. It is a label and it has to be true of nobody else in the room.'],
  ['Lubna', 'And the adding one?'],
  ['Umm Kinan', 'The adding one is what you would tell somebody after they had found the right face. "Mazen, who has mended about two thousand three hundred telephones and found a bad batch in a book he kept himself." That is not a label. Nobody needs it to find him. It is the reason to talk to him.'],
  ['Jad', 'So the first clause finds them and the second one is why you would bother.'],
  ['Umm Kinan', 'Yes. And I would like somebody to write mine, because I have been in rooms for twenty-four years where my defining clause was "the mathematics teacher" and there was never a second clause at all.'],
  ['Ms Huda', 'Whose name have you got?'],
  ['Umm Kinan', 'Yara\'s. "The one who works at the hospital laboratory" finds her. And then: "Yara, who did not speak English out loud to a stranger for twenty-six years and then said four sentences in this room in September." Which is hers and which she said here, and which I would not have had the courage to write about myself.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The two clauses, doing two jobs**',
  table(['the clause', 'what it is for'], [
    ['**defining** — _the one who works nights_', 'finding the person; true of nobody else; **no commas**'],
    ['**adding** — _Rasha, who has 118 shifts in a book,_', 'why you would talk to them; **two commas**'],
    ['**both, in order** — _The one who works nights is Rasha, who…_', 'find them, then tell me about them'],
    ['⚠ **neither** — _Rasha is a nurse._', 'a label with no clause in it finds nobody and adds nothing'],
  ], [2.4, 2.2]),
  '**A defining clause must be true of exactly one person in the group.** _The one who keeps records_ is useless in a room of people who keep records. Test every one against the whole list before you use it.',
  '**An adding clause is not a compliment.** It is the thing somebody would want to know after they had found the right face, and the best ones are facts with numbers in them: _who has mended about 2,300 telephones · who did not speak English to a stranger for twenty-six years_.',
  '⚠ Do not use a defining clause about somebody who is already named. _Rasha who works nights_ — with a name in front, the clause can only be adding, and it needs its commas.',
  '⚠ And do not write a clause about a person that they have not said themselves. In a page about real people, everything in it should be quotable back to them.',
  '**Useful phrases:** the defining one is for a stranger in a doorway · the first clause finds them and the second one is why you would bother · my defining clause was "the mathematics teacher" and there was never a second clause at all.',
  '**Practise:** Write both clauses for each.  1 somebody you work with  2 somebody in your family  3 somebody who taught you something  4 somebody who refused you something  5 yourself',
  '**Pronunciation.** 🔊 **Track 11.12** Reading a list of people aloud: the **defining** clause runs straight on and the **adding** clause is said between two pauses and slightly lower. _The one who works nights is Rasha ‖ who has a hundred and eighteen shifts in a notebook ‖ and who asked one question at a handover in May._ Listen to four entries and mark the pauses.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names somebody from the card. B writes both clauses out loud — the defining one first, then the adding one — and A says whether the defining clause is true of anybody else they both know. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'The one who __________. And then: __________, who __________, __________.'],
  ['A', 'Is the first clause true of anybody else?'],
  ['B', '__________.'],
  ['A', 'Would they recognise the second one?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the people', 'Card B – the people'], [
  ['somebody you work beside every day', 'somebody who taught you something'],
  ['somebody in your family', 'somebody who refused you something'],
  ['somebody you have asked for help', 'somebody who asked you for help'],
  ['the person who has been there longest', 'yourself'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the defining clause and say whether it is unique. Then the one that matters: whose **adding** clause would they want written about them? Everybody has an answer and almost nobody has ever been given one.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write the two clauses for the person whose name you were given. Read them to that person. They may change anything in the adding clause and nothing in the defining one.'));
out.push(p('**b**  Swap. Then each of you say what you would put in your own adding clause, if you had to write it yourself.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda gave each of us the name of somebody else in the room and said we are writing their entry for a page that goes to the group starting in September. Omar asked whether they will read it, and she said they will read it in their first week, when they do not know one face from another — so each entry needs a clause that tells them which person, with no commas, and a clause that tells them something about that person, with commas. And one rule: nothing in it that the person has not said in this room. Umm Kinan said the two clauses do completely different jobs and she has only just seen how different: the defining one is for a stranger in a doorway — the one who repairs telephones, the one who works nights — and it is a label that has to be true of nobody else in the room. The adding one is what you would tell somebody after they had found the right face: Mazen, who has mended about two thousand three hundred telephones and found a bad batch in a book he kept himself. That is not a label; nobody needs it to find him; it is the reason to talk to him. Jad said so the first clause finds them and the second is why you would bother. And Umm Kinan said yes — and that she would like somebody to write hers, because she has been in rooms for twenty-four years where her defining clause was "the mathematics teacher" and there was never a second clause at all. She has Yara\'s name, and her entry is: the one who works at the hospital laboratory finds her, and then — Yara, who did not speak English out loud to a stranger for twenty-six years and then said four sentences in this room in September._'));
out.push(p('**Listener task:** write somebody\'s adding clause, and then write your own.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read four of the twelve entries. Answer the questions.'));
out.push(model([
  '**CLASS 5A, ROOM 14 · FOR THE GROUP STARTING IN SEPTEMBER** · four of the twelve entries',
  '**The one who repairs telephones at a counter in Shaalan** is Mazen Hariri, who has mended about 2,300 of them in nine years and who found a bad batch of fifteen in a fault book he started keeping for no particular reason in September.',
  '**The one who works nights at the hospital** is Rasha Barakat, whose notebook of 118 shifts got a three-month trial out of a rota committee, and who says that the only reason it happened to her and not to the other night sister is that she wrote things down.',
  '**The one who works at the laboratory in Suwayda Street** is Yara Mansour, who had not spoken English out loud to a stranger for twenty-six years when she came into this room in September, and who said four sentences on the first evening and then told us the rest of it three weeks later.',
  '**The one who teaches mathematics** is Siham Dibo — Umm Kinan — who has taught about 25,000 lessons in twenty-four years, who used a projector for the first time at the age of forty-eight on 11 April and took eleven minutes to put a triangle on a wall, and who asked a colleague for forty minutes after four months of not asking.',
  '**A note about these entries.** Every defining clause was tested against the whole list: no two of us can be found by the same one. Every adding clause was read to the person it is about and changed if they wanted it changed. Nothing in any of them was said anywhere but in this room.',
]));
out.push(item('1', 'How was each defining clause tested?'));
out.push(item('2', 'What was done with every adding clause before it was printed?'));
out.push(item('3', 'What do all four adding clauses have in them?'));
out.push(writers([
  'A page of entries: **the defining clause first, in bold, as the way in** → **the name** → **the adding clause or clauses, with commas, with a number in them** → **and a note at the end on how the page was made**.',
  'Test every defining clause against the **whole list**, not against your idea of the person. _The one who keeps records_ fails in this room; _the one who repairs telephones at a counter in Shaalan_ does not.',
  'Put a **number** in every adding clause: 2,300 · 118 · twenty-six years · 25,000 · eleven minutes. A page of adjectives about twelve people is unreadable and a page of numbers is not.',
  '⚠ Read every adding clause to the person it is about, and say in the note that you did. A page about real people that they have not seen is not a description; it is a report.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write four entries for a group you belong to — a class, a shift, a department, a family (50 words or more).'));
out.push(p('**______________ · FOR ______________**   **The one who ______________** is ______________, who ______________ and who ______________.   **The one who ______________** is ______________, whose ______________, and who ______________.   **The one who ______________** is ______________, who ______________, and who ______________.   **The one who ______________** is ______________, who ______________, who ______________, and who ______________.   **A note about these entries.** Every defining clause ______________. Every adding clause ______________. Nothing in any of them ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Defining clause with no commas, true of exactly one person',
  'Adding clause with two commas, and a number in it',
  'No defining clause after a name',
  'A note saying how the entries were checked',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one entry each — somebody else\'s, not their own.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the entries for a whole group (100 words or more) — six people at least. Then write your own, in the third person, with both clauses, and say underneath whether you would want it printed.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s entries as **somebody arriving in September**. ★ _The entry that makes me want to talk to that person._  ✓ _One defining clause that could be two people._  ? _Did you read it to them?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the entries people wrote about themselves.** They are shorter than the ones other people wrote about them, in every single case, and in most cases they have no number in them. That is the finding and it belongs to Umm Kinan.'));
out.push(hw('Write the entry for one person you work with and give it to them (50+ words). Both clauses, a number in the adding one, and nothing in it they have not said. Write down what they changed.'));

// ======================= 11.7 =======================
out.push(pb());
out.push(h2('11.7  Review & Mediate: The page before the conditions'));
out.push(p('**Function:** explaining a page of definitions   ·   **Recycling:** Units 1–11   ·   **Exam practice:** B1 Preliminary Reading Part 1, Writing Part 1, Listening Part 3'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 11 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** The nurse which kept a record got the trial.  **2** The man who he signed it left in March.  **3** Bassel, that has run the shop for nineteen years, crossed nine out.  **4** My sister who had three children did not leave. _(I have one sister.)_  **5** The room where I left it in is 14.  **6** The report, I read in April, was never actioned.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the page that comes before Bassel\'s eleven conditions.'));
out.push(box(null, [
  '**DAR AL-KUTUB PRESS · MINISTRY WORK 2026 · DEFINITIONS** _(the page before the conditions)_',
  '**1** "The contractor" means the person or firm **who signs these conditions**, and includes any person **whom the contractor employs** for any part of the work.',
  '**2** "A working day" means a day **on which the premises are open**, excluding Fridays and public holidays.',
  '**3** "The premises" means the building **in which the work is carried out** and any yard or store **whose access is from that building**.',
  '**4** "Ministry work" means any work **which is listed on an order bearing a ministry reference**, from the time the order is received until the time the finished work leaves the premises.',
  '**5** "Wastage" means sheets **which are spoiled after the proof has been signed**. Make-ready sheets, **which are spoiled before the proof is signed**, are not wastage.',
  '**6** "Authorisation" means permission **given in writing by the contractor or by a person whom the contractor names in writing**.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Lubna and Rasha take the definitions page apart with Bassel. Which definition do they say changes a condition completely, and which one has he been reading the wrong way round for a month?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.13  The page nobody reads', [
  ['Bassel', 'There is a page before the conditions. Six paragraphs. I have had it for five weeks and I have never read it, because it is definitions and definitions are what you skip.'],
  ['Lubna', 'Read definition six.'],
  ['Bassel', '"Authorisation means permission given in writing by the contractor or by a person whom the contractor names in writing."'],
  ['Rasha', 'There it is. You worked out in April that condition seven does not say who authorises, and you wrote a standing note giving it yourself. Definition six says you were right — and it also says something you did not know, which is that you can **name** somebody.'],
  ['Bassel', 'I can name somebody.'],
  ['Rasha', 'In writing. So the man who is actually in the building at seven in the morning can authorise it, and you do not have to be there at all.'],
  ['Bassel', 'I have been going in at seven for the whole of June to be the person who could say yes.'],
  ['Lubna', 'And now look at definition three, because this is the one you have been reading the wrong way round. "The premises means the building in which the work is carried out and any yard or store whose access is from that building."'],
  ['Bassel', 'The yard is the premises.'],
  ['Lubna', 'The yard is the premises, because its access is from the building. Which means that when you told your three men in May that leaving the building included the yard, you were wrong — the yard is inside, not outside. You changed your mind in front of them and made it stricter, and the definitions page says you did not have to.'],
  ['Bassel', 'I stood in that shop and made a rule worse than the one the ministry wrote, out of a sentence on a page I had not read.'],
  ['Ms Huda', 'Which is the whole of this unit in one sentence, so say it again on Thursday to the three of them.'],
  ['Bassel', 'The page before the conditions decides what the conditions mean. And it is six relative clauses long.'],
]));
out.push(sp());
out.push(box('Language box – reading a page of definitions', [
  'A definition is a noun plus a **defining relative clause**, and nothing else: _"the contractor" means the person **who signs these conditions**_. Find the clause and you have the whole definition.',
  'Check what each definition **includes** and what it **excludes**, because that is where the work is done: _and includes any person whom the contractor employs_ · _make-ready sheets, which are spoiled before the proof is signed, are not wastage_.',
  'Notice the two kinds of clause doing two different jobs on the same page. The **defining** clauses say what the word means; the **non-defining** ones, with their commas, carve out an exception — and definition 5 does both in two sentences.',
  'Then go back to the conditions and read them again **with** the definitions. A condition about "the premises" means nothing until you know that the yard is inside it.',
  'Look for the definition that gives you a **power** you did not know you had: _or by a person whom the contractor names in writing_. Definitions pages are mostly restrictive and they usually contain one permission.',
  '⚠ And never tighten a rule on your own because you have not read the definitions. _I made a rule worse than the one the ministry wrote, out of a sentence on a page I had not read._',
  '**Useful phrases:** definitions are what you skip · you can name somebody, in writing · the yard is inside, not outside · the page before the conditions decides what the conditions mean.',
  '**Pronunciation.** 🔊 **Track 11.14** Reading a definition aloud: the **word being defined** is said slowly and in quotation marks, _means_ is almost swallowed, and the clause runs on with no pause. _"A working day" ‖ meansaday on which the premises are open._ Listen to four and mark the one pause each.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has one of the definitions pages below and does **not** show it. A reads it once, then explains it: what each word means, what is included, what is excluded, and which definition gives a power. B and C must each find the definition that changes a rule they thought they understood. Change roles with the other page.'));
out.push(table(['Page A – a school\'s examination rules', 'Page B – a tenancy agreement'], [
  ['"Candidate" means any pupil whose name appears on the entry list.', '"The premises" means the flat and any store whose door opens off the hall.'],
  ['"The examination room" means the room in which the paper is sat.', '"The tenant" means the person who signs and any person whom the tenant permits to live there.'],
  ['"Assistance" means help with the content of a question.', '"Alteration" means work which changes a fixed part of the premises.'],
  ['Reading a word aloud, which does not concern content, is not assistance.', 'Hanging a picture, which does not change a fixed part, is not an alteration.'],
  ['"Invigilator" means a member of staff whom the head names in writing.', '"Notice" means written notice given by the party who is ending the tenancy.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write the definition that changes a rule. On Page A it is the fourth — reading a word aloud is not assistance, which reverses the rule that worried the teacher in 6.6; on Page B it is the fourth as well — hanging a picture is not an alteration. In both cases the **non-defining clause with its commas** is doing the work.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Bring, or write out from memory, the definitions page of something you are under — a contract, a tenancy, a policy, a set of rules, an insurance document. Explain it to your partner **without showing it**: what each word means, what is included and excluded, and which definition gives a power. They must ask: _what does that include?_, _what is excluded, and by which clause?_ and _which rule does that change?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Bassel has had a page of six definitions for five weeks and had never read it, because definitions are what you skip. Definition six says that authorisation means permission given in writing by the contractor or by a person whom the contractor names in writing — so he was right in April that condition seven does not say who authorises, and he also did not know that he can name somebody. In writing. Which means the man who is actually in the building at seven can authorise it, and Bassel has been going in at seven for the whole of June to be the person who could say yes. And definition three is the one he had been reading the wrong way round: the premises means the building in which the work is carried out and any yard or store whose access is from that building — so the yard is the premises, and when he told his three men in May that leaving the building included the yard he was wrong. He changed his mind in front of them and made it stricter, and the definitions page says he did not have to. He said he stood in that shop and made a rule worse than the one the ministry wrote, out of a sentence on a page he had not read. So I decided to find and read the definitions page of my own tenancy, which I have had for four years and which I have never opened past the first page._'));
out.push(p('**Listener task:** which definition changed a rule, and which one gave a power?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 1)', 7));
out.push(p('For each notice, choose the correct explanation: **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _PRINTING SHOP · Make-ready sheets, which are spoiled before the proof is signed, are not counted as wastage._',
  '**2**  _WARD 4 · The clipboard which is kept behind the station door may be used by anybody on nights. The one on the trolley is the day staff\'s._',
  '**3**  _WORKSHOP · Students whose work is on the bench after 18.00 must have told the technician on duty._',
  '**4**  _ROOM 14 · The second switch, which is on the Room 13 circuit, works only when the Room 13 switch is on._',
  '**5**  _COUNTER · Telephones which came in before Thursday are in the blue bags. Everything in the grey bags came in this week._',
], C.lyellow, C.orange));
[
  '**1**  **A** All spoiled sheets count as wastage.   **B** Sheets spoiled before the proof is signed do not count as wastage.   **C** Make-ready sheets must not be spoiled.',
  '**2**  **A** There are two clipboards and night staff may use one of them.   **B** Nobody may use the clipboard.   **C** The clipboard on the trolley is for everybody.',
  '**3**  **A** Students may not leave work on the bench.   **B** Students may leave work there if they have told the technician.   **C** The technician decides whose work stays.',
  '**4**  **A** The second switch does not work.   **B** The second switch works on its own.   **C** The second switch needs the Room 13 switch to be on.',
  '**5**  **A** The blue bags hold the older telephones.   **B** The grey bags hold the older telephones.   **C** All the telephones came in this week.',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the message explaining a definitions page to somebody who is under the same rules (50 words or more).'));
out.push(p('There is a page before the conditions and it is ______________ paragraphs long. Nobody reads it. It decides what the conditions mean.   **______________** means ______________, and it **includes** ______________ — which is the part that matters, because ______________.   **______________** means ______________. The clause with the commas **excludes** ______________, so ______________ is not ______________.   The definition that gives us something is ______________: ______________. Which means ______________.   And the one I had been reading the wrong way round is ______________: ______________. So when I ______________, I was wrong, and I had made it ______________ than it needed to be.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every definition read as a noun plus a defining clause',
  'What each one includes, and what the comma clause excludes',
  'The definition that gives a power, named',
  'The rule you had been reading the wrong way round',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 1)', 10));
out.push(box(null, [
  'Read this email from your English friend **Sam** and the notes you have made.',
  '_"I\'ve signed a contract at work and there\'s a page at the front called Definitions that I skipped completely. My colleague says that page is the most important one. Is she right, and what am I looking for? Sam"_',
  '**Your notes:**  •  _Tell him she is right, and why_  ·  _Explain what a definition is made of_  ·  _Tell him the two things to look for in each one_  ·  _Give him one example from your own life_',
  'Write your email to Sam using **all four** notes. Write **100 words or more**.',
], C.grey, C.navy));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 11 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  The nurse ___ kept a record got the trial.   a) which   b) who   c) who she',
  '2  The report, ___ had been filed in February, was never read.   a) that   b) which   c) what',
  '3  The room ___ switch is in Room 13 is this one.   a) whose   b) who\'s   c) which',
  '4  The stairwell ___ the fire door swings is the first one.   a) where   b) where in   c) which',
  '5  2009 is the year ___ the partitions came out.   a) when   b) when in   c) where',
  '6  The four words ___ said were "the baby is coming".   a) he   b) who he   c) that he it',
  '7  My sister, ___ had three children, did not leave.   a) that   b) who   c) which',
  '8  The post ___ it was sent had been empty since March.   a) which   b) to which   c) where',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 3 style – note completion).** 🔊 **Track 11.15** You will hear a man explaining a page of definitions. Write **one or two words or a number** in each gap.'));
out.push(box('THE PAGE BEFORE THE CONDITIONS', [
  'Number of definitions: **(1)** ______',
  'He had had the page for **(2)** ______ weeks without reading it',
  'Authorisation may be given by the contractor or by a person he **(3)** ______ in writing',
  'The yard counts as part of the **(4)** ______',
  'He has been coming in at **(5)** ______ every morning in June',
  'Sheets spoiled **(6)** ______ the proof is signed are not wastage',
], C.lyellow, C.orange));
out.push(dlg('Track 11.15  Audio script (read after the check)', [
  ['Bassel', 'There is a page before the conditions and there are six definitions on it. I had had it for five weeks and I had never read a word of it, because definitions are the page you skip. Definition six says that authorisation means permission given in writing by the contractor, or by a person whom the contractor names in writing — so I can name somebody, and the man who is actually in the building at seven in the morning can authorise it, and I have been coming in at seven every morning in June for nothing. Definition three says the premises means the building in which the work is carried out and any yard or store whose access is from that building, so the yard is part of the premises, which means it is inside and not outside, and in May I told three men the opposite. And definition five says that sheets spoiled after the proof has been signed are wastage, and make-ready sheets, which are spoiled before the proof is signed, are not — which I had right by accident, because it is how this shop has always counted them.'],
]));
out.push(p('**C  Writing.** Write four entries for a group you belong to (100+ words): each one with a defining clause that finds the person, a name, and an adding clause with a number in it — and a note at the end on how you checked them.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 11)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ write a defining clause with no commas, and know that it says **which one**',
  '☐ write a non-defining clause with **two** commas, and never one',
  '☐ use _that_ only in defining clauses, and _who_ or _which_ in adding ones',
  '☐ use _whose_ for things as well as people, and _where_ and _when_ in a list or a key',
  '☐ decide whether to join two sentences or split them',
  '☐ leave the pronoun out when there is a new subject after the noun',
  '☐ write an entry about a person with both kinds of clause in it',
  '☐ read a page of definitions and say what each word includes and excludes',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 12 – OPINIONS AND AGREEMENT', [
  'The last unit of the book. _I\'d say · up to a point · I see what you mean, but · although · admittedly · on balance._ **12.5** teaches B1 Preliminary **Speaking Part 3**, the collaborative task, which is the last part of the examination you have not met.',
  'And **12.6 opens the envelopes.** Four things were written in this book and put away: the introductions pinned up in **1.1**, the vote in **1.2**, the sealed first-impressions notes from **1.4**, and the two pages from **3.3** and **3.6** — _by the time I finish this course_, and the dated turning-point page. Bring all four. If you have lost one, write it again this week from memory and bring that, and say so.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Unit 11 · Student\'s Book');
