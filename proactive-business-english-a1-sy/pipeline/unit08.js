// Proactive Business English A1 · Syria Edition · Book 2 · Unit 8 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'can I have · here you are · thank you · please · tape · pen · key · sorry · we have not got any · out of stock · to need · to lend · to borrow · do you want · to help · to carry · together · thank you for · to offer · favour · spare · to order';
const AHEAD_AT_A2 = 'out of stock · spare · favour';

out.push(h1('Unit 8  Asking For and Giving a Thing'));
out.push(p('_Proactive Business English · A1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**8.1**  ask for a thing',
  '**8.2**  give a thing, and take one',
  '**8.3**  say _please_ — and find out what it is worth',
  '**8.4**  say no, politely',
  '**8.5**  offer to help before you are asked',
  '**8.6**  thank somebody for a named thing',
  '**8.7**  Review: the counter — and one problem to talk about together',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**Hani Deeb** (33) — the other driver. **You have heard his name already: he is the man who swapped eleven Thursdays in Unit 3.7 and never wrote one of them on the board.** **He is good at his job and careless about words.** You meet him in **8.3**.',
], C.grey, C.navy));
out.push(sp());
out.push(box('⚠ Six sentences, and five of them are three words long', [
  '**This is the shortest unit in the book and the one that changes the most.** ⚠ **_Can I have…? · Here you are. · Thank you. · Sorry, we have not got any. · Do you want a hand?_**',
  '⚠ **A man who can say those five sentences is a man people help.** **A man who points and grunts gets the tape, and gets it last.** **Nothing in this unit is difficult and nothing in it is optional.**',
], C.lyellow, C.orange));

// ======================= CYCLE 8.1 =======================
out.push(pb());
out.push(h2('8.1  Can I have the tape, please?'));
out.push(p('**You can:** ask for a thing   ·   **Grammar:** _Can I have…?_   ·   **Sound:** the voice going up'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Ask your partner for three things on the table. **Say it** with _Can I have_.'));
out.push(p('**b**  How do you ask for something at work now? Say it in Arabic. Your teacher writes the English.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ammar ask for?   **A** a pen   **B** the tape   **C** the key'));
out.push(p('**b**  Listen again.   **1** What does Majd ask back?   **2** Why does Ammar need it?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 8.1  The wide one', [
  ['Ammar', 'Majd. Can I have the tape, please?'],
  ['Majd', 'Which tape? There are two.'],
  ['Ammar', 'The wide one. The brown one.'],
  ['Majd', 'The wide brown one. Here you are.'],
  ['Ammar', 'Thank you.'],
  ['Majd', 'What is it for?'],
  ['Ammar', 'Two cartons came crushed. I am taping them before they go on the shelf.'],
  ['Majd', 'Then take the whole roll. Bring it back at four.'],
  ['Ammar', 'The whole roll, back at four. Thank you.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking for a thing**',
  table(['You say', 'When'], [
    ['**Can I have the tape, please?**', 'anything, to anybody — ⚠ **this one sentence does nine jobs out of ten**'],
    ['**Can I borrow your pen?**', 'you will give it back'],
    ['**Have you got any tape?**', 'you do not know whether there is any'],
    ['**Where is the tape?**', '⚠ **only when you want to fetch it yourself** — **4.3**'],
  ], [2, 3.4]),
  '⚠ **_Can I have_ + the thing + _please_.** **Three parts, every time, in that order.**',
  '⚠ **Say WHICH ONE.** _The wide one. The brown one._ **There are two of most things at work, and _can I have the tape_ makes somebody ask you a question.**',
  '⚠ **And say what it is FOR, if you are not asked.** **Majd gave him the whole roll because he knew what it was for.** **A reason turns a borrowed thing into a lent one.**',
  '**Practise:** Write the question.',
  '1 You want the tape. ______________?   2 You want a pen and you will give it back. ______________?   3 You do not know if there is tape. ______________?',
  '**Useful words:**  Can I have…, please?  ·  Can I borrow…?  ·  the wide one  ·  What is it for?  ·  Bring it back at four.',
  '**Sound — the voice going up.** 🔊 **Track 8.2** Listen. _Can I have the tape, please?↗_ **UP at the end.** **Said flat it is an order, and people do not like being given orders by a storeman.** Say it four times, going up.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One asks. One gives. Then change places.'));
out.push(dlg(null, [
  ['A', '__________. Can I have the __________, please?'],
  ['B', 'Which __________? There are two.'],
  ['A', 'The __________ one. The __________ one.'],
  ['B', 'The __________ __________ one. Here you are.'],
  ['A', 'Thank you.'],
  ['B', 'What is it for?'],
]));
out.push(table(['Card 1', 'Card 2'], [['Majd · tape · wide · brown', 'Samih · key · small · black']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** which one did the speaker ask for? **Two describing words.**'));
out.push(PHRASE_CARD(['Can I have…, please?', 'Can I borrow…?', 'the wide one', 'What is it for?', 'Bring it back at four.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four things you ask for at work. **Write it.** Say which one, and what for.'));
out.push(table(['The thing', 'Which one', 'Who I ask', 'What it is for'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1.2, 1.2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I ask ______ for the ______. The ______ one. It is for ______._'));
out.push(p('**Listener task:** count the reports that said WHICH ONE. **_The tape_ on its own makes somebody ask.**'));
out.push(p('**Board clinic:** your teacher writes four requests. Two have no _please_ and two have no _which one_. Fix all four together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the list on the store door. Then answer.'));
out.push(box(null, [
  '**ASK ME, DO NOT TAKE — AND WHO TO ASK**',
  table(['The thing', 'Who has it', 'Back when'], [
    ['the wide brown tape', 'Majd, at the counter', 'same day'],
    ['the back store key', 'Samih', '⚠ **never — ask him to open it**'],
    ['the long ladder', 'anybody, it lives by the bench', 'put it back'],
    ['a pen', 'Nour, upstairs', '⚠ **keep it, she has forty**'],
  ], [1.8, 1.8, 1.8]),
  '⚠ **Ask. A thing that walks off is a thing nobody can find at eight the next morning. A.Y.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Who has the back store key?'));
out.push(item('2', 'Which thing do you not have to give back?'));
out.push(item('3', 'Which thing can you take without asking anybody?'));
out.push(box('Writer\'s box', [
  '**An ask-me list has three columns:** the thing → **who has it** → **when it comes back**.',
  '⚠ **The _who_ column is the useful one.** **A list of things with no names on it tells you what exists and not how to get it.**',
  '⚠ **And the third column must be able to say NEVER and KEEP IT as well as a time.** **_Never — ask him to open it_ is the most important line on this card**, **because a key is the one thing where the answer is not _borrow it_.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an ask-me list for your own work (**15 words or more**).'));
out.push(table(['The thing', 'Who has it', 'Back when'], [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
], [1.8, 1.8, 1.8]));
out.push(p('⚠ **______________** ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['A name in the _who_ column on every line', ''],
  ['A _back when_ on every line', ''],
  ['At least one line that says _never_ or _keep it_', ''],
  ['A reason at the bottom', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read one line. The class says if they could get the thing in one minute.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something at your work that is hard to borrow (**20 to 35 words**). What is it? Who has it? What happens when they are away?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Is there a spare?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many of these things have no spare? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** six things you ask for at work, with who has each one (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 8.2 =======================
out.push(pb());
out.push(h2('8.2  Here you are'));
out.push(p('**You can:** give a thing and take one   ·   **Grammar:** _here you are · thank you_   ·   **Sound:** the two halves of a handover'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Give your partner your pen. **Say it:** _Here you are._ They say _Thank you._ Do it four times.'));
out.push(p('**b**  What do you say now when you hand somebody something? Say it in Arabic. **Is there anything?**'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many things change hands?   **A** one   **B** two   **C** three'));
out.push(p('**b**  Listen again.   **1** What does Majd say when he gives it?   **2** What does Ammar do with the empty roll?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 8.3  Both hands', [
  ['Majd', 'The wide brown tape. Here you are.'],
  ['Ammar', 'Thank you.'],
  ['Majd', 'And the cutter. You will want it.'],
  ['Ammar', 'Here, I have two hands. Thank you for the cutter too.'],
  ['Majd', 'Bring them both back at four.'],
  ['Ammar', '_(at four o\'clock)_ Majd. The tape and the cutter. Here you are.'],
  ['Majd', 'Thank you. Is the roll finished?'],
  ['Ammar', 'Finished. Here is the empty one, so you know to order more.'],
  ['Majd', 'Nobody brings the empty one back. Nobody. Thank you.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Giving and taking — two halves, both said**',
  table(['Giving', 'Taking'], [
    ['**Here you are.**', '**Thank you.**'],
    ['**Here is the ______.**', '**Thank you for the ______.** — ⚠ **8.6**'],
    ['**You will want this too.**', '**Thank you. I have two hands.**'],
  ], [2, 2.6]),
  '⚠ **_Here you are_ when you hand it over.** **_Here is the _______ when you want to name it.** **Both are right and _here you are_ is shorter, so use it.**',
  '⚠ **The HALF PEOPLE MISS is the return.** _Here you are_ **again, when you bring it back, and at the time you said.** **A man who brings a thing back at four without being asked is lent things for the rest of his life.**',
  '⚠ **And the empty roll.** **Bringing back the empty one is not politeness. It is information: _order more_.** **Nobody does it, which is why Majd said thank you twice.**',
  '**Practise:** Write the line.',
  '1 You hand over the tape. ______________.   2 You take it. ______________.   3 You bring it back at four. ______________.',
  '**Say it. Write it. Check it** — hand a real thing to your partner and say both halves aloud before you write them down.',
  '**Useful words:**  Here you are.  ·  Here is the…  ·  Thank you.  ·  I have two hands.  ·  Here is the empty one.',
  '**Sound — the two halves of a handover.** 🔊 **Track 8.4** Listen. _Here you are.↘ — Thank you.↘_ **Both flat, both short, one after the other with no gap.** **A handover with a silence in it feels like a problem.** Say both four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, with real objects. Hand things over. Then change places.'));
out.push(dlg(null, [
  ['A', 'The __________. Here you are.'],
  ['B', 'Thank you.'],
  ['A', 'And the __________. You will want it.'],
  ['B', 'Thank you for the __________ too.'],
  ['A', 'Bring them both back at __________.'],
  ['B', '_(later)_ The __________ and the __________. Here you are.'],
]));
out.push(table(['Card 1', 'Card 2'], [['tape · cutter · four', 'key · torch · six']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed, real objects**.'));
out.push(p('**Listener task:** did both halves get said, both times? **Four sentences in all.** Count them.'));
out.push(PHRASE_CARD(['Here you are.', 'Here is the…', 'Thank you.', 'I have two hands.', 'Here is the empty one.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four things that change hands at your work. **Write it.** Who gives, who takes, what is said.'));
out.push(table(['The thing', 'Who gives', 'Who takes', 'What is said now'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1.2, 1.2, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ gives me the ______. He says ______. I say ______._'));
out.push(p('**Listener task:** in how many reports is nothing said at all? **Count them. That is the gap this cycle fills.**'));
out.push(p('**Board clinic:** your teacher hands four things to four students in silence. The class says what was missing.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the book by the counter. Then answer.'));
out.push(box(null, [
  '**BORROWED FROM THE COUNTER — APRIL**',
  table(['What', 'Who', 'Out', 'Back'], [
    ['wide brown tape + cutter', 'A. Zreik', '4 Apr 8.15', '✓ 4 Apr 16.00'],
    ['torch', 'F. Tarabishi', '4 Apr 9.00', '✓ 4 Apr 17.30'],
    ['small black key', 'S. Qassar', '5 Apr 7.00', '✓ 5 Apr 7.20'],
    ['long ladder', '_(no name)_', '5 Apr ?', '✗ **still out**'],
  ], [2, 1.4, 1.4, 1.6]),
  '⚠ **Three lines have a name and a time. One has neither, and that is the thing nobody can find. M.B.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Who had the torch?'));
out.push(item('2', 'How long did Samih have the key?'));
out.push(item('3', 'Which line is a problem, and why?'));
out.push(box('Writer\'s box', [
  '**A borrowing book has four columns:** what → **who** → out → back.',
  '⚠ **A TIME in both the out and the back column, not just a date.** **_Out 5 April, back 5 April_ tells you nothing; _7.00 and 7.20_ tells you the key was gone for twenty minutes and is fine.**',
  '⚠ **And the line with no name on it is the whole point of the book.** **Keep it on the page.** **A borrowing book with only the returned things in it is a list of nothing.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a borrowing book for one week at your own work (**15 words or more**). Include one line that is still out.'));
out.push(table(['What', 'Who', 'Out', 'Back'], [
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
], [2, 1.4, 1.4, 1.6]));
out.push(p('⚠ **______________** ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['A name on every line', ''],
  ['A time, not just a date, in both columns', ''],
  ['At least one line still out', ''],
  ['Initials at the bottom', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their _still out_ line. The class says who they would ask first.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something that went missing at your work after somebody borrowed it (**20 to 35 words**). What was it? Was it written down? Did it come back?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Was it written down anywhere?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many was the borrowing written down? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** a borrowing book page for your own work, with four columns (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 8.3 =======================
out.push(pb());
out.push(h2('8.3  The same question, twice'));
out.push(p('**You can:** say _please_, and know what it buys   ·   **Grammar:** where _please_ goes   ·   **Sound:** please at the end'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Ask your partner for their pen. **Twice: once with _please_ and once without.** Which did they prefer?'));
out.push(p('**b**  Where does _please_ go in English? **Say it** three ways: at the start, in the middle, at the end.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who gets the tape faster?   **A** the first man   **B** the second man   **C** the same'));
out.push(p('**b**  Listen again.   **1** What is different about the two requests?   **2** What does Majd say about it?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 8.5  Two men, one roll of tape', [
  ['Hani', 'Tape.'],
  ['Majd', '_(looking for it)_ … Which tape?'],
  ['Hani', 'Tape. The tape.'],
  ['Majd', '_(still looking)_ … Here.'],
  ['Ammar', 'Majd. Can I have the wide brown tape, please?'],
  ['Majd', 'Here you are.'],
  ['Ammar', 'Thank you.'],
  ['Hani', 'You gave him his in four seconds. You took two minutes with me.'],
  ['Majd', 'He told me which one and he said please. You said _tape_.'],
  ['Hani', 'It is the same tape.'],
  ['Majd', 'It is the same tape. It is not the same two minutes.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Where _please_ goes, and what it is worth**',
  table(['Where', 'Example', 'Use it?'], [
    ['**at the end**', '_Can I have the tape, **please**?_', '⚠ **yes — the house form**'],
    ['**in the middle**', '_Can I **please** have the tape?_', 'yes, and it sounds impatient'],
    ['**at the start**', '_**Please** can I have the tape?_', 'yes, and it sounds like a child'],
  ], [1.2, 2.6, 2.2]),
  '⚠ **At the end, after a comma.** **One form, use it every time, stop thinking about it.**',
  '⚠ **And what it actually buys, which is the point of this cycle:** **Hani and Ammar asked for the same roll of tape.** **Ammar got it in four seconds because he said WHICH ONE and he said PLEASE.** **Hani waited two minutes.**',
  '⚠ **_Please_ is not about being nice.** **It is a signal that you are asking and not telling, and a man who is being told something looks for it slowly.** **Two minutes, four times a day, is forty minutes a week.**',
  '**Practise:** Write the request properly.',
  '1 _Tape._ → ______________?   2 _Give me the key._ → ______________?   3 _Pen._ → ______________?',
  '**Useful words:**  …, please?  ·  Which one?  ·  Here you are.  ·  the same tape  ·  not the same two minutes',
  '**Sound — please at the end.** 🔊 **Track 8.6** Listen. _Can I have the wide brown tape, PLEASE?↗_ **A small stop before it, then up.** **Run together it disappears and you have asked without it.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in threes. One is Majd. Two ask for the same thing, one well and one badly. Then change places.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '_(looking)_ … Which __________?'],
  ['A', '__________. The __________.'],
  ['C', '__________. Can I have the __________ __________, please?'],
  ['B', 'Here you are.'],
  ['C', 'Thank you.'],
]));
out.push(table(['Card 1', 'Card 2'], [['Tape · tape · wide brown · Majd', 'Key · key · small black · Samih']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two threes perform for the class — **books closed**.'));
out.push(p('**Listener task:** count the seconds each one waited. **Say both numbers.**'));
out.push(PHRASE_CARD(['…, please?', 'Which one?', 'Here you are.', 'the same tape', 'not the same two minutes']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of somebody at your work who always gets things quickly, and somebody who does not. **Write it.** What is the difference?'));
out.push(table(['Who', 'How they ask', 'How fast they get it'], [['', '', ''], ['', '', '']], [1.2, 2.4, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ asks like this: ______. He gets it in ______. _______ asks like this: ______. He waits ______._'));
out.push(p('**Listener task:** is the difference always _please_? **Or is it something else?** Say what.'));
out.push(p('**Board clinic:** your teacher writes four requests with no _please_ and no _which one_. The class fixes all four and reads them aloud.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Majd put above the counter. Then answer.'));
out.push(box(null, [
  '**THE COUNTER — HOW TO GET IT FAST**',
  '**1** Say **which one.** _The wide brown tape_, not _tape_. ⚠ **There are two of everything here.**',
  '**2** Say **please.** ⚠ **It tells me you are asking, and I look faster for a man who is asking.**',
  '**3** Say **what it is for**, if you can. ⚠ **Then I give you the right one, and sometimes the whole roll.**',
  '**4** Say **when it comes back.** ⚠ **Then I say yes, because I know when I get it back.**',
  '⚠ **Four seconds or two minutes. Same tape. Your choice. M.B.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does Majd want you to say which one?'));
out.push(item('2', 'What does saying what it is for get you?'));
out.push(item('3', 'What does saying when it comes back get you?'));
out.push(box('Writer\'s box', [
  '**A how-to-ask card has four numbered steps and ⚠ a REASON on each one — and the reason is about what the READER gets.**',
  '⚠ **_It tells me you are asking, and I look faster for a man who is asking._** **That is not politeness advice.** **It is Majd explaining his own behaviour, which is much harder to argue with.**',
  '⚠ **The last line is a choice, not an instruction:** _four seconds or two minutes. Same tape. Your choice._ **A card that tells a grown man what to do gets ignored. A card that shows him the price lets him decide.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a how-to-ask card for your own work (**15 words or more**). A reason on every step, about what the reader gets.'));
out.push(p('**______________ — HOW TO GET IT FAST**   **1** Say ______________. ⚠ **because** ______________   **2** Say ______________. ⚠ **because** ______________   **3** Say ______________. ⚠ **because** ______________   **4** Say ______________. ⚠ **because** ______________   ⚠ **______________. Your choice.** ______'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['A reason on every step', ''],
  ['The reason says what the ASKER gets', ''],
  ['A step about which one', ''],
  ['A last line that is a choice, not an order', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their last line. The class says if it tells them what to do or lets them choose.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about asking at your work (**20 to 35 words**). Who is easy to ask? Who is hard? What makes the difference?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Have you ever asked the hard one and got it?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. Is the hard person hard to everybody, or only to some people? **Count both on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** four requests you make at work, each with _which one_ and _please_ in it (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 8.4 =======================
out.push(pb());
out.push(h2('8.4  Sorry, we have not got any'));
out.push(p('**You can:** say no, politely   ·   **Grammar:** _we have not got any · it is out of stock_   ·   **Sound:** the soft no'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Somebody asks you for something you have not got. What do you say? Say it in Arabic, then in English.'));
out.push(p('**b**  Read the two lines. Which one would you rather hear? _No. · Sorry, we have not got any. Thursday._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Does the customer go away angry?   **A** yes   **B** no   **C** he waits'));
out.push(p('**b**  Listen again.   **1** What two things does Majd say after _sorry_?   **2** What does the customer do?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 8.7  Sorry, and then two more things', [
  ['Customer', 'Twenty of the small white bags.'],
  ['Majd', 'Sorry, we have not got any. They are out of stock.'],
  ['Customer', 'None at all?'],
  ['Majd', 'None at all. The lorry comes on Thursday.'],
  ['Customer', 'Thursday is three days.'],
  ['Majd', 'I have the small brown ones. Nineteen of those, today.'],
  ['Customer', 'Brown, not white.'],
  ['Majd', 'Brown, not white. Or I keep twenty white ones for you on Thursday and you come at eight.'],
  ['Customer', 'Keep them. I come Thursday at eight.'],
  ['Majd', 'Twenty white, Thursday, eight o\'clock. Your name, please.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Saying no — and the three things that come after it**',
  table(['', 'What you say'], [
    ['**1 the no**', '**Sorry, we have not got any.**'],
    ['**2 when**', '**The lorry comes on Thursday.**'],
    ['**3 instead**', '⚠ **I have the brown ones. Or I keep twenty for you on Thursday.**'],
  ], [1.4, 4]),
  '⚠ **_No_ on its own is never the whole answer at work.** **_Sorry, we have not got any_ is the no. Then WHEN, then WHAT INSTEAD.** **Three parts, and the third one is what keeps the customer.**',
  '⚠ **_any_ comes after a negative:** _we have **not** got **any**_. **And _some_ after a positive:** _I have **some** brown ones._',
  '⚠ **And then the last line, which is 6.2 coming back:** _Your name, please._ **A thing kept for nobody is a thing somebody else buys on Wednesday.**',
  '**Practise:** Write the three parts.',
  '1 The no: ______________.   2 The when: ______________.   3 The instead: ______________.',
  '**Useful words:**  Sorry, we have not got any.  ·  out of stock  ·  None at all.  ·  The lorry comes on…  ·  I keep them for you.',
  '**Sound — the soft no.** 🔊 **Track 8.8** Listen. _Sorry,↘ we have not got any.↘_ **Two flat halves and the voice goes DOWN on both.** **Up at the end makes it sound like a question and the customer asks again.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One is a customer. One says no, in three parts. Then change places.'));
out.push(dlg(null, [
  ['A', '__________ of the __________ __________ __________.'],
  ['B', 'Sorry, we have not got any. They are out of stock.'],
  ['A', 'None at all?'],
  ['B', 'None at all. The lorry comes on __________.'],
  ['A', '__________ is __________ days.'],
  ['B', 'I have the __________ ones. Or I keep __________ for you on __________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['Twenty · small white bags · Thursday · three · brown · twenty', 'Six · wide brown rolls · Sunday · two · narrow · six']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the three parts of the no. **The no, the when, the instead.**'));
out.push(PHRASE_CARD(['Sorry, we have not got any.', 'out of stock', 'None at all.', 'The lorry comes on…', 'I keep them for you.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four times you have had to say no at work. **Write it** in three parts each time.'));
out.push(table(['They wanted', 'The no', 'The when', 'The instead'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.4, 1.2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _He wanted ______. I said sorry, we have not got any. ______. And I offered ______._'));
out.push(p('**Listener task:** count the reports with all THREE parts. **The third part is the one that keeps the customer.**'));
out.push(p('**Board clinic:** your teacher writes four bare _no_ answers. The class adds a _when_ and an _instead_ to each.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the sheet by the till. Then answer.'));
out.push(box(null, [
  '**OUT OF STOCK — WEEK OF 6 APRIL**',
  table(['What', 'Back when', 'What to offer instead'], [
    ['small white bags', 'Thursday', 'small brown — 19 in stock'],
    ['wide brown tape', 'Sunday', '⚠ **narrow brown, and say it is narrower**'],
    ['50kg flour sacks', '⚠ **not known — ask the office**', '25kg, two of them, same price per kilo'],
    ['bread trays', 'Thursday', '⚠ **nothing. Say nothing instead and keep some back.**'],
  ], [1.6, 1.6, 2.6]),
  '⚠ **Every line has a "back when" and an "instead". Where there isn\'t one, the line says so. M.B.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What do you offer instead of white bags?'));
out.push(item('2', 'Which line does not know when it comes back?'));
out.push(item('3', 'Which line has nothing to offer instead, and what does it say to do?'));
out.push(box('Writer\'s box', [
  '**An out-of-stock sheet has three columns:** what → **back when** → **what to offer instead**.',
  '⚠ **A sheet with only the first column is a list of bad news.** **The second and third columns are what turn a no into a conversation.**',
  '⚠ **And where there is no answer, the line must SAY there is no answer:** _not known — ask the office_ · _nothing. Say nothing instead and keep some back._ **A blank square is read as _nobody has thought about this_, which is usually true and never useful.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an out-of-stock sheet for your own work (**15 words or more**). Include one line with no answer.'));
out.push(table(['What', 'Back when', 'What to offer instead'], [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
], [1.6, 1.6, 2.6]));
out.push(p('⚠ **______________** ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['A _back when_ on every line', ''],
  ['An _instead_ on every line', ''],
  ['No blank squares — a line says so where there is no answer', ''],
  ['At least one line that offers nothing, and says what to do', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their _instead_ column. The class says if they would accept it as a customer.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you had to say no at work (**20 to 35 words**). What did they want? What did you say? Did they come back?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Did they come back?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many did the customer come back? **Count them. Then count how many of those were offered something instead.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** four out-of-stock lines from your work, each with a when and an instead (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 8.5 =======================
out.push(pb());
out.push(h2('8.5  Do you want a hand?'));
out.push(p('**You can:** offer, before you are asked   ·   **Grammar:** _do you want…? · shall I…?_   ·   **Sound:** the offer that is easy to refuse'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your partner is carrying something heavy. What do you say? Say it in Arabic, then in English.'));
out.push(p('**b**  Read the two lines. Which is easier to say no to? _I will help you · Do you want a hand?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Does Fouad say yes?   **A** yes   **B** no   **C** yes, but not for the pallet'));
out.push(p('**b**  Listen again.   **1** What is Fouad doing?   **2** What does Ammar end up doing?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 8.9  Not the pallet. The door.', [
  ['Ammar', 'Fouad. Do you want a hand?'],
  ['Fouad', 'With the pallet? No. I have the truck.'],
  ['Ammar', 'All right.'],
  ['Fouad', 'But the door. Hold the door open. That is the hard part.'],
  ['Ammar', 'The door.'],
  ['Fouad', 'Twenty years and the door is still the hard part. The pallet is easy.'],
  ['Ammar', 'I would not have thought of the door.'],
  ['Fouad', 'Nobody thinks of the door. Everybody offers to push the pallet.'],
  ['Ammar', 'So I should ask what the hard part is.'],
  ['Fouad', 'Ask what the hard part is. Then you help with the right thing.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Offering**',
  table(['You say', 'What it does'], [
    ['**Do you want a hand?**', '⚠ **the house form — easy to say yes to AND easy to say no to**'],
    ['**Shall I ______?**', 'you have already decided what would help'],
    ['**What is the hard part?**', '⚠ **the best one in this unit, and almost nobody asks it**'],
    ['**I will help you.**', 'it is not a question, so it is hard to refuse'],
  ], [1.8, 3.4]),
  '⚠ **Offer as a QUESTION.** **_Do you want a hand?_ can be answered _no_ in one second with nobody embarrassed.** **_I will help you_ cannot, so a man who does not want help has to take it.**',
  '⚠ **And then the real thing:** _ask what the hard part is._ **Everybody offers to push the pallet. Nobody thinks of the door.** **The hard part of a job is almost never the heavy part, and only the man doing it knows.**',
  '**Practise:** Write the offer.',
  '1 Somebody is carrying something. ______________?   2 You know what would help. ______________?   3 You do not know what would help. ______________?',
  '**Useful words:**  Do you want a hand?  ·  Shall I…?  ·  What is the hard part?  ·  Hold the door.  ·  The pallet is easy.',
  '**Sound — the offer that is easy to refuse.** 🔊 **Track 8.10** Listen. _Do you want a hand?↗_ **Light and quick, going up.** **Said slowly and heavily it sounds like you have already decided, and then it is not an offer.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One is working. One offers. Then change places.'));
out.push(dlg(null, [
  ['A', '__________. Do you want a hand?'],
  ['B', 'With the __________? No. I have the __________.'],
  ['A', 'All right.'],
  ['B', 'But the __________. __________. That is the hard part.'],
  ['A', 'The __________.'],
  ['B', 'Nobody thinks of the __________. Everybody offers to __________ the __________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['Fouad · pallet · truck · door · hold the door open · push · pallet', 'Samih · sacks · trolley · gate · hold the gate · lift · sacks']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** what was the hard part? **And what did the offerer think it would be?** Two answers.'));
out.push(PHRASE_CARD(['Do you want a hand?', 'Shall I…?', 'What is the hard part?', 'Hold the door.', 'The pallet is easy.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four jobs at your work. What looks hard, and what IS hard? **Write it.**'));
out.push(table(['The job', 'What looks hard', 'What IS hard', 'How somebody could help'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.4, 1.4, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _When I do ______, people think the hard part is ______. The hard part is really ______._'));
out.push(p('**Listener task:** in how many jobs is the hard part NOT the heavy part? **Count them. It is nearly all of them.**'));
out.push(p('**Board clinic:** your teacher writes four offers. Two are not questions. Turn them into questions together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the list Fouad dictated to Ammar. Then answer.'));
out.push(box(null, [
  '**THE FOUR JOBS THAT NEED TWO MEN — AND WHY**',
  table(['The job', 'What people offer', '⚠ What actually helps'], [
    ['moving a full pallet', 'pushing', '**holding the door open**'],
    ['loading the high shelf', 'lifting', '**holding the ladder and passing things up**'],
    ['counting the back store', 'counting too', '**writing while I count — then nobody loses their place**'],
    ['the Thursday lorry', 'unloading', '**standing at the gate and reading the note aloud**'],
  ], [1.6, 1.6, 3]),
  '⚠ **Ask me what the hard part is. Do not guess it. Twenty years. F.T.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What actually helps when a full pallet is moved?'));
out.push(item('2', 'Why is writing better than counting?'));
out.push(item('3', 'What does Fouad say at the bottom?'));
out.push(box('Writer\'s box', [
  '**A two-men list has three columns:** the job → **what people offer** → **what actually helps**.',
  '⚠ **The middle column is not a joke.** **It is what you will be offered, and writing it down is how you stop being offered it.**',
  '⚠ **And the third column needs its reason where it is not obvious:** _writing while I count — then nobody loses their place._ **Six words, and a man who reads them will offer the right thing the first time.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a two-men list for your own work (**15 words or more**).'));
out.push(table(['The job', 'What people offer', '⚠ What actually helps'], [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
], [1.6, 1.6, 3]));
out.push(p('⚠ **______________** ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['A middle column — what people wrongly offer', ''],
  ['A third column that is NOT the heavy part', ''],
  ['A reason where the help is not obvious', ''],
  ['A line at the bottom telling people to ask', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read one line. The class says if they would have guessed the third column.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a job at your work where the hard part is not the obvious one (**20 to 35 words**). What is it? Does anybody know?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Have you ever told anybody?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many had the writer never told anybody what the hard part was? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** the hard part of four jobs you do, and what would actually help (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 8.6 =======================
out.push(pb());
out.push(h2('8.6  Thank you for the ladder'));
out.push(p('**You can:** thank somebody for a named thing   ·   **Grammar:** _thank you for the…_   ·   **Sound:** the stress on the thing'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of the last time somebody at work helped you. **Say it:** _Thank you for ______._'));
out.push(p('**b**  Read the two lines. Which does the other man remember? _Thanks · Thank you for the ladder. I could not have reached it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ammar thank Samih for?   **A** the tape   **B** bringing the ladder   **C** counting with him'));
out.push(p('**b**  Listen again.   **1** What does he add after _thank you_?   **2** What does Samih say about it?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 8.11  Nobody says what for', [
  ['Ammar', 'Samih. Thank you for the ladder this morning.'],
  ['Samih', 'The ladder?'],
  ['Ammar', 'You brought it in from the yard at half past seven. I had shelf four to do.'],
  ['Samih', 'I was coming in anyway.'],
  ['Ammar', 'You were coming in anyway and you carried a ladder. I would have put them on shelf three and moved them twice.'],
  ['Samih', 'Nobody says what for.'],
  ['Ammar', 'What?'],
  ['Samih', 'People say thank you. Nobody says what for. Two years here and that is the second time.'],
  ['Ammar', 'The second time in two years?'],
  ['Samih', 'The second time. The first was Abu Yasser, about the Monday count.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Thanking for a named thing**',
  table(['Weak', 'Strong'], [
    ['**Thanks.**', '**Thank you for the ladder.**'],
    ['**Thank you.**', '**Thank you for the ladder this morning.**'],
    ['**Thank you very much.**', '⚠ **Thank you for the ladder. I could not have reached shelf four.**'],
  ], [1.6, 4]),
  '⚠ **_Thank you_ + _for_ + THE THING.** **And then, if you can, what it saved you.** **Three parts, and the third is what makes the other man remember it.**',
  '⚠ **_Thank you very much_ is not stronger than _thank you for the ladder_. It is weaker.** **_Very much_ adds feeling; the name of the thing adds proof that you noticed.**',
  '⚠ **And the finding in the dialogue, which is worth more than the grammar:** **people say thank you all day and almost nobody says WHAT FOR.** **Samih has been thanked by name twice in two years.** **It costs four words.**',
  '**Practise:** Make it strong.',
  '1 Thanks. → ______________.   2 Thank you. → ______________.   3 Thank you very much. → ______________.',
  '**Useful words:**  Thank you for the…  ·  this morning  ·  I could not have…  ·  I was coming in anyway.  ·  nobody says what for',
  '**Sound — the stress on the thing.** 🔊 **Track 8.12** Listen. _Thank you for the LADDER.↘_ **The loud part is the thing, not the thank you.** **Stress on _thank_ and it sounds like a formality; stress on _ladder_ and it sounds like you noticed.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One thanks, with the thing named. One brushes it off. Then change places.'));
out.push(dlg(null, [
  ['A', '__________. Thank you for the __________ __________.'],
  ['B', 'The __________?'],
  ['A', 'You __________ at __________. I had __________ to do.'],
  ['B', 'I was coming in anyway.'],
  ['A', 'You were coming in anyway and you __________. I would have __________.'],
  ['B', 'Nobody says what for.'],
]));
out.push(table(['Card 1', 'Card 2'], [['Samih · ladder · this morning · brought it in · half past seven · shelf four · carried a ladder', 'Nour · note · yesterday · wrote it out · four o\'clock · the Homs order · wrote it twice']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** what exactly was the thank you for? **Say the thing and the time.**'));
out.push(PHRASE_CARD(['Thank you for the…', 'this morning', 'I could not have…', 'I was coming in anyway.', 'nobody says what for']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four people who helped you at work this month. **Write it.** The thing, the time, and what it saved you.'));
out.push(table(['Who', 'For what', 'When', 'What it saved me'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1.6, 1.2, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Thank you, ______, for the ______ on ______. I could not have ______._'));
out.push(p('**Listener task:** count the reports that named the THING. **Then count the ones that said what it saved.**'));
out.push(p('**Board clinic:** your teacher writes four bare thank-yous. The class adds the thing and the saving to each.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Ammar left for Samih. Then answer.'));
out.push(box(null, [
  '**FOR SAMIH — 7 APRIL**',
  '**Thank you for the ladder this morning.**',
  '**You brought it in from the yard at 7.30, before I asked.**',
  '**I had the whole of shelf four to do. Without it I would have used shelf three and moved it all again at four.**',
  '**That is about forty minutes.**',
  '**A. Zreik**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the note for?'));
out.push(item('2', 'What time did Samih bring the ladder?'));
out.push(item('3', 'How much time did it save?'));
out.push(box('Writer\'s box', [
  '**A thank-you note has four lines:** **the thing** → **when, with a time** → **what it saved you** → **a number if you have one**.',
  '⚠ **The number is the line that makes it a real note and not a kindness.** _That is about forty minutes._ **Somebody can repeat an action that saved forty minutes. Nobody can repeat _you were very helpful_.**',
  '⚠ **And leave it in WRITING, not just say it.** **A spoken thank-you is gone in a second; a note on the bench is still there when the supervisor walks past.** **That is not cynical — it is how a man gets credit for something he did before anybody asked.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a thank-you note for somebody at your own work (**15 words or more**).'));
out.push(p('**FOR ______________ — ______________**   **Thank you for the ______________ ______________.**   **You ______________ at ______.**   **Without it I would have ______________.**   **That is about ______________.**   **______**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['The thing, named', ''],
  ['A time', ''],
  ['What it saved you', ''],
  ['A number', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their note. The class says if the person would know exactly what they did.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about somebody at your work who helps and is never thanked (**20 to 35 words**). Who? What do they do? What would you say to them?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Will you tell them?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many of these people have never been thanked by name? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write** the note and **give it to the person tomorrow** (20 words or more). Then write down what they said.'], C.lblue, C.navy));

// ======================= CYCLE 8.7 =======================
out.push(pb());
out.push(h2('8.7  Review: the counter'));
out.push(p('⚠ **This is the second unit of this book.** Asking, giving, please, saying no, offering and thanking — and now a problem for the class to talk about together.'));
out.push(p('**You can:** work a counter   ·   **Review:** Units 8.1 to 8.6   ·   **Exam practice:** A2 Key Reading Part 1 and Writing Part 6, at A1 length'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 8 quiz', 6));
out.push(table(['Say it in English', '✓'], [
  ['**8.1**  Ask for a thing. Say which one, and please.', ''],
  ['**8.2**  Hand something over, and take it back at four.', ''],
  ['**8.3**  Where does _please_ go, and what does it buy you?', ''],
  ['**8.4**  Say no in three parts.', ''],
  ['**8.5**  Offer help. Then ask the better question.', ''],
  ['**8.6**  Thank somebody for a named thing.', ''],
], [5, 1]));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the problem with Abu Fouad?   **A** he does not pay   **B** he has never said please in eleven years   **C** he always wants credit'));
out.push(p('**b**  Listen again.   **1** How long has he come to the shop?   **2** What does Majd say about his money?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 8.13  Eleven years, and never once', [
  ['Majd', 'Abu Fouad. Eleven years he has come here. Twice a week.'],
  ['Ammar', 'And?'],
  ['Majd', 'He has never said please. Not once. Eleven years.'],
  ['Ammar', 'Never?'],
  ['Majd', 'He says _bags_. He says _flour_. Then he waits.'],
  ['Nour', 'He is the third biggest account in the book.'],
  ['Majd', 'He is the third biggest account in the book. He pays on the day, every time, in cash.'],
  ['Ammar', 'So he is a good customer who is rude.'],
  ['Nour', 'He is not rude. He came from a village where nobody says it. He has told me so.'],
  ['Majd', 'And the two new girls will not serve him. They send him to me.'],
  ['Nour', 'So the best customer in the shop is served by one man, and that man is on holiday in August.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Review — the six things from this unit**',
  table(['Cycle', 'You can say'], [
    ['**8.1**', '_Can I have the wide brown tape, please?_'],
    ['**8.2**', '_Here you are. — Thank you._ **And at four: _Here you are._**'],
    ['**8.3**', '_Four seconds or two minutes. Same tape._'],
    ['**8.4**', '_Sorry, we have not got any. Thursday. I have the brown ones._'],
    ['**8.5**', '_Do you want a hand? What is the hard part?_'],
    ['**8.6**', '_Thank you for the ladder this morning. That is about forty minutes._'],
  ], [1, 5]),
  '⚠ **The new thing here: the customer is right, the shop is right, and the thing everybody has been taught all unit turns out to be a local habit and not a law.** **Abu Fouad pays cash on the day and has done for eleven years.** **He does not say please because where he grew up nobody does.** **And two people in the shop will not serve him.**',
  '**Useful words:**  never once  ·  he pays on the day  ·  he is not rude  ·  they send him to me  ·  on holiday in August',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One is Majd. One is Nour. Say why you are right.'));
out.push(table(['Majd says', 'Nour says'], [[
  'Eleven years and never once. ⚠ **Two of my staff will not go near him, and I cannot make them.**',
  'Third biggest account, cash on the day. ⚠ **And he is not being rude — where he is from, nobody says it.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the two sides for the class — **books closed**.'));
out.push(p('**Listener task:** who is right? Say _both_. **Then: who has the problem?** **The answer is neither of them.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of somebody at your work who does something that looks rude and is not. Tell your partner. **Write it.**'));
out.push(table(['What they do', 'Why it looks rude', 'What it actually is'], [['', '', ''], ['', '', '']], [1.4, 1.6, 1.8]));
out.push(stage('4R', 'Report – everybody is right', 9));
out.push(p('**The problem.** Abu Fouad has come twice a week for eleven years, pays cash on the day, and has never said please. He is not rude; the word is not used where he grew up. Two of the staff will not serve him, and the one who will is away in August.'));
out.push(table(['Majd is right', 'Nour is right', 'So we do this'], [[
  'Two of his staff will not serve the man. ⚠ **He cannot order them to, and the shop cannot run on one man who is away in August.**',
  'Third biggest account, cash on the day, eleven years. ⚠ **And the rudeness is not rudeness** — **it is a village where the word does not exist, and he has said so.**',
  '⚠ **The shop is polite to him; he is not required to be polite back.** **The two who will not serve him are TOLD WHY — not asked to be patient, told the reason** — **and that is Nour\'s job, because she is the one who knows.** **Then Majd is not the only man who can serve the third biggest account.**',
]], [1, 1, 1.4]));
out.push(p('**Then tell the class:**  _______ is right because _______. _______ is right because _______. So we _______._'));
out.push(p('⚠ **The words to keep:** _he is not rude — he came from a village where nobody says it._ ⚠ **And the harder finding, which turns this whole unit sideways:** **every cycle in Unit 8 has taught you that _please_ and _thank you_ buy you time, help and tape.** **They do. And they are a LOCAL HABIT, not a law** — **and a man who does not use them is not a worse man.** **You say please because it works for you. You do not get to require it of a customer who has paid cash twice a week since 2015.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1, at A1 length)', 10));
out.push(p('Read the five notices. What does each one say? Choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _SAY WHICH ONE — THERE ARE TWO OF EVERYTHING HERE_   **A** Ask for anything.   **B** Name the exact thing you want.   **C** Take what you find.',
  '**2**  _OUT OF STOCK? SAY WHEN, AND SAY WHAT INSTEAD_   **A** Just say no.   **B** A no needs two more things with it.   **C** Send the customer away.',
  '**3**  _ASK ME, DO NOT TAKE_   **A** Help yourself.   **B** Ask before you take anything.   **C** Nothing can be borrowed.',
  '**4**  _DO YOU WANT A HAND? — NOT — I WILL HELP YOU_   **A** Offer as a question.   **B** Just start helping.   **C** Never offer help.',
  '**5**  _BRING THE EMPTY ROLL BACK_   **A** Keep the empty one.   **B** Throw it away.   **C** Return it, so more can be ordered.',
]));
out.push(box('Writer\'s box', [
  '**Exam practice — A2 Key Writing Part 6, at A1 length.** **Four sentences, about 30 words.**',
  '⚠ **In a message asking for something, the THING and WHICH ONE go in the first sentence.**',
  '⚠ **_Please_ goes at the end of a question, after a comma. One form, every time.**',
  '**The shape:** who it is to → what you want, and which one → what it is for → when you will bring it back.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a message asking to borrow something (**four sentences, about 30 words**). Which one, what for, and when it comes back.'));
out.push(p('**To:** ______________   _Can I have the ______________, please? ______________. I need it for ______________. I will bring it back at ______._'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.** Count the sentences: four.'));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6, at A1 length)', 12));
out.push(p('Write a message asking somebody at work for something (**four sentences, about 30 words**). Which one, what for, when back, and _please_ in the right place.'));
out.push(...lines(5));
out.push(box('Homework', ['Finish your message. Then write the **answer** the other person would send (20 words or more).'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 8 check', 15));
out.push(p('**A  Words.** Choose a, b or c.'));
[
  '1  ___ have the tape, please?   a) Can I   b) I can   c) Can me',
  '2  You hand it over. You say: ___   a) There it is   b) Here you are   c) Take',
  '3  Where does _please_ go?   a) at the start   b) in the middle   c) at the end, after a comma',
  '4  Sorry, we have not got ___.   a) some   b) any   c) no',
  '5  I have ___ brown ones.   a) any   b) some   c) no',
  '6  You offer help. Best:   a) I will help you   b) Do you want a hand?   c) Help?',
  '7  The better question is: What is the ___ part?   a) heavy   b) hard   c) last',
  '8  Thank you ___ the ladder.   a) for   b) of   c) to',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 8.15** Listen. Write the answer.   **1** What he asks for: ______   **2** Which one: ______   **3** What it is for: ______   **4** When it comes back: ______   **5** What is out of stock: ______   **6** What is offered instead: ______'));
out.push(p('**C  Reading.** Read the borrowing book at 8.2 again. Who had the torch? How long did Samih have the key? Which line is a problem?'));
out.push(p('**D  Writing.** Write four sentences asking somebody at work to lend you something (**about 30 words**). Which one, what for, when back, and _please_.'));
out.push(...lines(4));
out.push(dlg('Track 8.15  Audio script (read after the check)', [
  ['Samih', 'Majd. Can I have the long ladder, please?'],
  ['Majd', 'The long one or the short one?'],
  ['Samih', 'The long one. Shelf four in the back store.'],
  ['Majd', 'Shelf four. Take it. Back by five?'],
  ['Samih', 'Back by five. Thank you. And twenty of the small white bags.'],
  ['Majd', 'Sorry, we have not got any. They are out of stock until Thursday.'],
  ['Samih', 'None at all?'],
  ['Majd', 'None. I have the small brown ones — nineteen of those today.'],
]));
out.push(sp());
out.push(box('I can…  (Unit 8)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '**8.1**  ask for a thing, say which one, and say what it is for',
  '**8.2**  hand a thing over and bring it back at the time I said',
  '**8.3**  put _please_ at the end, and say what it buys me',
  '**8.4**  say no in three parts — the no, the when, the instead',
  '**8.5**  offer as a question, and ask what the hard part is',
  '**8.6**  thank somebody for a named thing, with what it saved me',
  '**8.7**  work a counter — and say why a customer who never says please is not rude',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Ahead at A2 — three words you will meet again', [
  '⚠ **' + AHEAD_AT_A2 + '** — **all three come back at A2 Business.**',
  '**out of stock** — here you say it to a customer. **At A2 you write it on a stock report and reorder.**',
  '**spare** — here it is the thing there is only one of. **At A2 it is a column on a stock card.**',
  '**favour** — here it is asking for a hand. **At A2 it is a sentence in an email you have to judge carefully.**',
], C.lteal));
out.push(sp());
out.push(p('**Words in this unit (22):** ' + LEXIS, { size: 18, color: '595959' }));
out.push(p('**Ahead at A2 (3):** ' + AHEAD_AT_A2, { size: 18, color: '595959' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 2 · Syria Edition · Unit 8 · Student\'s Book');
module.exports = out;
