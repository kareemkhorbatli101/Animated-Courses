// Proactive Business English A2 · Syria Edition · Book 2 · Unit 18 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'attachment · attach · forward · reply all · subject line · inbox · back-up · password · log in · log out · crash · freeze · restart · network · server · offline · shared drive · file name · version · spreadsheet · printout · scan · link · spam · icon · screen shot';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 18  Technology at Work'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**18.1**  write the fixed phrases of a work email',
  '**18.2**  give instructions in order, so somebody can follow them',
  '**18.3**  describe something that is not working',
  '**18.4**  compare two ways of doing the same job',
  '**18.5**  say where a file is kept, and name it so it can be found',
  '**18.6**  give a safe-working rule about a message nobody expected',
  '**18.7**  Review & Mediate: tell a colleague what the IT notice says',
], C.lblue, C.navy));
out.push(sp());
out.push(box('What this unit is not about', [
  'It is not about computers. Almost nothing here needs you to understand how anything works, and the few technical words — _server, network, back-up_ — are in the unit so that you can **say** them, not so that you can fix anything.',
  'It is about four things that are entirely about English: writing an email that gets an answer, giving instructions somebody can follow, describing a failure to somebody who can repair it, and naming a file so that a colleague can find it in two years.',
  '⚠ And one that is about judgement rather than English: 18.6, a message nobody expected. The rule there is three words long and it is the same in every language. **Do not click.**',
], C.lyellow, C.orange));

// ======================= CYCLE 18.1 =======================
out.push(pb());
out.push(h2('18.1  Please find attached'));
out.push(p('**Function:** the fixed phrases of a work email   ·   **Grammar:** set expressions, subject lines   ·   **Pronunciation:** reading an email aloud to check it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How many work emails did you send last week? How many got an answer the same day?'));
out.push(p('**b**  Which subject line would you open first? _Hello_ · _Question_ · _Invoice 0612 — wrong total, please reissue_ · _URGENT!!!_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is wrong with the email Hala wrote?   **A** the English   **B** the subject line and the ending   **C** the attachment'));
out.push(p('**b**  Listen again. **1** What does Nour say a subject line is for? **2** What is the last line of a work email for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.1  Before you send it', [
  ['Hala', 'Can you read this before I send it? It is to the Aleppo supplier.'],
  ['Nour', 'The English is fine. The subject line says "Hello".'],
  ['Hala', 'It is a greeting.'],
  ['Nour', 'It is the only part she reads before she decides when to open it. She gets forty emails a day. Put what it is and what you want: "Order 0618 — two items missing, please confirm by Thursday".'],
  ['Hala', 'That is almost the whole email in the subject.'],
  ['Nour', 'Then she will answer it from the subject line, which is the best thing that can happen. And the last line — "thank you very much, best regards, I hope you are well".'],
  ['Hala', 'Too much?'],
  ['Nour', 'The last line is for the thing you want. _Could you confirm by Thursday?_ Then thank you, then your name. The thanks goes before the name, not instead of the request.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The fixed phrases of a work email — learn them as whole chunks**',
  table(['Where', 'Phrase'], [
    ['**Subject**', 'What it is + what you want: _Order 0618 — two items missing, please confirm by Thursday_'],
    ['**Opening**', 'Dear Ms Shamsi, · Dear Sir or Madam, · Hello Hala, (a colleague)'],
    ['**Why you are writing**', '**I am writing to** ask about… · **I am writing about**…'],
    ['**The attachment**', '**Please find attached** the invoice. · **I have attached** the list.'],
    ['**The request**', '**Could you** confirm…? · **Please let me know by**…'],
    ['**Close**', 'Thank you. **Best regards,** / **Kind regards,** + your name'],
  ], [1.1, 3.2]),
  '⚠ **The subject line is the email.** A reader with forty messages decides from it alone when — or whether — to open yours. Put the **thing** and the **ask** in it: a noun, a number, and what you want.',
  '⚠ **The request goes in the last line, not the middle.** Readers read the first line and the last line; a request buried in the fourth sentence of five is a request that gets missed, and then it is your fault twice.',
  '⚠ _Please find attached_ is fixed and slightly formal; _I have attached_ is fixed and normal. Both are correct. ~~Please find attach~~ and ~~I attach you~~ are not.',
  '⚠ Never write in capitals and never use more than one exclamation mark. At best it looks young; at worst it looks angry, and neither gets a faster answer.',
  '**Practise:** Write subject lines for: 1 a late delivery 2 a wrong invoice 3 a price request 4 a meeting change 5 a thank-you',
  '**Useful phrases:**  I am writing to…  ·  Please find attached…  ·  Could you confirm by…?  ·  Please let me know by…  ·  Best regards,',
  '**Pronunciation – reading an email aloud.** 🔊 **Track 18.2** Listen to an email read aloud at normal speed. Reading your own email aloud before sending is the fastest check there is: anything you stumble over is a sentence the reader will stumble over too.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has written an email; B checks the subject line and the last line only. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Can you read this before I send it? It is to __________.'],
  ['B', 'The English is fine. The subject line says "__________".'],
  ['A', 'It is __________.'],
  ['B', 'It is the only part they read before deciding __________. Put what it is and what you want: "__________".'],
  ['A', 'That is almost the whole email.'],
  ['B', 'Then they will answer it from the subject line. And the last line — "__________".'],
  ['A', 'Too much?'],
  ['B', 'The last line is for the thing you want. __________ Then thank you, then your name.'],
]));
out.push(table(['Role card 1 — to a customer', 'Role card 2 — to the bank'], [[
  'An email telling a customer his order will be two days late, and asking whether he wants a part delivery on Tuesday. The draft has the subject line "Information" and ends with three sentences of apology and no question.',
  'An email asking the bank for a statement for March and April. The draft has the subject line "Request" and the request is in the middle, between two paragraphs about the company.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their check for the class – **without the book**.'));
out.push(p('**Listener task:** write the new subject line. Then say whether the email could be answered from it alone.'));
out.push(PHRASE_CARD(['I am writing to…', 'Please find attached…', 'Could you confirm by…?', 'Best regards,', 'what it is and what you want', 'the last line is for the thing you want']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write subject lines for **five** emails you have really sent or will send. For each, say what you want and by when. Then have a colleague say which they would open first.'));
out.push(table(['The email', 'My subject line', 'What I want, and by when'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.2, 2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My subject line was _______. What I want is _______ by _______. My partner said they would open _______ first._'));
out.push(p('**Listener task:** write down the subject line in the room you would open last. Say why — it is nearly always because it does not say what it is about.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _Please find attach_ and _I am writing for ask_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two versions of the same email, and answer the questions.'));
out.push(box(null, [
  '**Version 1**',
  '**Subject:** Hello',
  'Dear Ms Shamsi, I hope you are well and that your family is well. I am writing to you today about our order which we made last week and which we have now received, and there is a problem with it because two items are missing from it, which has caused us some difficulty here as you can imagine. We would be grateful for your help in this matter. Thank you very much for everything and best regards, Hala.',
  '**Version 2**',
  '**Subject:** Order 0618 — two items missing, please confirm by Thursday',
  'Dear Ms Shamsi,',
  'I am writing about order 0618, received on Tuesday.',
  'Two lines are missing: 20 rolls of wide wrap and 4 boxes of tape. The other five lines are complete and correct.',
  'Please find attached the delivery note with the two lines marked.',
  'Could you confirm by Thursday whether the two lines are coming, and on which date? If they are not, I will order them here.',
  'Thank you. Best regards, Hala Mourad · Sham Trading · 011 ___ ____',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many facts are in version 1? How many in version 2?'));
out.push(item('2', 'What does version 2 do that version 1 never does?'));
out.push(item('3', 'What is the point of "If they are not, I will order them here"?'));
out.push(box('Writer\'s box', [
  '**A work email — six lines and no more:** subject (thing + ask) → greeting → **why you are writing**, with the reference → **the facts, in a list** → the attachment → **the request, with a date** → thanks, name, company, telephone.',
  '**One fact per line.** Two missing lines, five complete ones, a date. Version 1 has the same information in one paragraph and the reader must take it apart; nobody does.',
  '**Say what you will do if they do not answer.** _If they are not, I will order them here._ That is not a threat; it is a deadline that works without one, and it is the single most useful sentence in business email.',
  '⚠ Sign with your name, company and telephone. An email with no telephone number makes the reader write back to ask one question that could have been settled in a minute.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a real work email, in six lines (35 words or more). Use the frame.'));
out.push(p('**Subject:** ______________ — ______________, please ______________ by ______________   Dear ______________,   I am writing about ______________.   ______________. ______________.   Please find attached ______________.   Could you ______________ by ______________? If ______________, I will ______________.   Thank you. Best regards, ______________ · ______________ · ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says the subject line carries the thing and the ask. Yours says _Delivery_ — what exactly, and what do you want?"',
  'Quote the box, ask the question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could this be answered from the subject line?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A subject line with the thing and the ask', ''],
  ['One fact per line', ''],
  ['A request with a date', ''],
  ['What the writer will do if nobody answers', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their subject line and their last line. The class says what the email is about and what is wanted. If they cannot, the email is not finished.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an email you sent that got no answer (60 to 100 words). Say what you wanted, what the subject line was, how long you waited, and what you would write now.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the subject line I would use_   ✓ _was there a date in the request?_   ? _did you ever telephone instead?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many would a telephone call have settled it in two minutes? Say the number; it is the most useful thing in the cycle.'));
out.push(box('Homework', ['Write your final text. Then rewrite one real email you have sent, in six lines with a working subject line, and compare the two (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 18.2 =======================
out.push(pb());
out.push(h2('18.2  First open the order screen'));
out.push(p('**Function:** giving instructions   ·   **Grammar:** imperatives and sequencers   ·   **Pronunciation:** the falling voice of an instruction'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Tell your partner how to make tea the way it is made at your work. Count the steps.'));
out.push(p('**b**  Which is an instruction and which is a description? _You click the middle button._ / _Click the middle button._ Which is easier to follow?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many steps are there?   **A** three   **B** five   **C** seven'));
out.push(p('**b**  Listen again. **1** What is the warning in the middle? **2** What does Nour say about the word "then"?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.3  Say it as steps', [
  ['Fadi', 'Tell me again how to put a delivery on the screen. You told me on Tuesday and I did it wrong.'],
  ['Nour', 'I told you in a paragraph on Tuesday. That is why. Listen for the numbers.'],
  ['Fadi', 'Go on.'],
  ['Nour', 'One: open the Deliveries screen — the lorry icon, not the box icon. Two: enter the note number from the paper, not the customer number. Three: check the date; it puts today in and your note may be yesterday\'s.'],
  ['Fadi', 'Three is the one I got wrong.'],
  ['Nour', 'Everybody gets three wrong. Four: enter the number of items you actually delivered. Five: save with the middle button and wait for the green line before you close it.'],
  ['Fadi', 'Five steps. On Tuesday it sounded like one long sentence with "and then" in it four times.'],
  ['Nour', 'It was. "Then" is the word that hides a step. Number them and you cannot.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Giving instructions – imperatives and order**',
  table(['Shape', 'Example'], [
    ['**Imperative** — the bare verb', '**Open** the Deliveries screen. **Enter** the note number.'],
    ['Negative imperative', '**Do not close** it before the green line.'],
    ['**Sequencers**', '**First** … **Then** … **After that** … **Finally** …'],
    ['**Numbers**', '**One:** … **Two:** … **Three:** …'],
    ['Not this, but that', 'The **lorry** icon, **not** the box icon.'],
  ], [1.4, 2.4]),
  '⚠ **Use the bare imperative.** _Click the middle button_ — not _you click_ and not _you should click_. An instruction that describes what somebody does is harder to follow than one that tells them to do it.',
  '⚠ **Number the steps; do not join them with _and then_.** _Then_ is the word that hides a step, because two actions get stuck into one sentence and the second one is forgotten. Numbers make that impossible.',
  '⚠ **Name the wrong one as well as the right one.** _The lorry icon, not the box icon._ Every screen has a pair that look alike and every learner picks the wrong one once.',
  '⚠ Put the **warning inside the step it belongs to**, not at the end: _check the date; it puts today in and your note may be yesterday\'s_.',
  '**Practise:** Give each in numbered steps, with one "not this, that" and one warning. 1 making tea 2 locking up 3 a screen 4 a machine 5 the way to your workplace',
  '**Useful phrases:**  One: open…  ·  not the box icon  ·  Everybody gets three wrong.  ·  wait for the green line  ·  "Then" is the word that hides a step.',
  '**Pronunciation – the instruction falls.** 🔊 **Track 18.4** Listen: _**Open** the Deliveries screen._ The voice falls and stops. Said with a rise it sounds like a question, and the listener waits instead of acting. Repeat six.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks to be told again; B gives numbered steps with one warning and one "not this, that". Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Tell me again how to __________. You told me __________ and I did it wrong.'],
  ['B', 'I told you in a paragraph. Listen for the numbers.'],
  ['A', 'Go on.'],
  ['B', 'One: __________ — __________, not __________. Two: __________. Three: __________; __________.'],
  ['A', '__________ is the one I got wrong.'],
  ['B', 'Everybody gets __________ wrong. Four: __________. Five: __________ and __________ before __________.'],
]));
out.push(table(['Role card 1 — locking up', 'Role card 2 — the goods-in screen'], [[
  'Six steps: the back gate, the shutter, the two lights, the alarm, the front door, the key in the box. Warning: the shutter must be fully down before the alarm, or the alarm will not set and you will not know.',
  'Five steps. Not this, that: the delivery number is on the note, not on the box. Warning: count before you enter, not after.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs give their instructions for the class – **without the book**. One listener writes them down and reads them back.'));
out.push(p('**Listener task:** count the steps. If the number you wrote is smaller than the number they said, a _then_ hid one.'));
out.push(PHRASE_CARD(['One: open…', 'not the box icon', 'Do not close it before…', 'After that…', 'Finally…', 'Everybody gets three wrong.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Teach **two** colleagues something in numbered steps while they write it down. Then read their version and find the step they merged.'));
out.push(table(['What I taught', 'My steps', 'Their steps', 'What got merged'], [['', '', '', ''], ['', '', '', '']], [1.3, 0.8, 0.8, 1.9]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I taught _______ in _______ steps. They wrote _______. The step that got merged was _______._'));
out.push(p('**Listener task:** write down how often the merged step was the **warning**. It usually is, because a warning is not an action and listeners drop it.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _you must to click_ and _after that you clicking_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the instruction sheet, and answer the questions.'));
out.push(box(null, [
  '**PUTTING A DELIVERY ON THE SCREEN — five steps**',
  '_Written by Fadi, shown by Nour, 2 December. If this is wrong, correct it and put your name on it._',
  '**1** Open **Deliveries** — the lorry icon, **not** the box icon (the box icon is Goods In).',
  '**2** Enter the **note number** from the paper note. It begins with D. The customer number begins with C and will be accepted without a warning.',
  '**3** **Check the date.** The screen puts today\'s date in. If you are entering yesterday\'s notes, change it. ⚠ **This is the one everybody gets wrong.**',
  '**4** Enter the number of items **you delivered**, not the number on the note. If they are different, enter what you delivered and tell the office the same day.',
  '**5** Save with the **middle** button. Wait for the green line before you close the screen — if you close it first, nothing is saved and nothing tells you.',
  '_If you cannot find the delivery afterwards, do not enter it again. Ask. Two deliveries are much harder to remove than one._',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which two pairs of things are named as "this, not that"?'));
out.push(item('2', 'What happens if you close the screen before the green line, and why is that worth a whole sentence?'));
out.push(item('3', 'What does the last line stop somebody doing?'));
out.push(box('Writer\'s box', [
  '**An instruction sheet — the shape:** a title with the **number of steps** → who wrote it, who showed it, the date → numbered steps, one line each → **the trap marked** → a last line about what to do when it goes wrong.',
  '**Every step is an imperative.** _Open · Enter · Check · Save._ The reason goes after it, in brackets or after a dash.',
  '**Name the lookalike.** _The lorry icon, not the box icon_ · _it begins with D; the customer number begins with C._ Most mistakes on a screen are two things that look alike, and the sheet exists to say which is which.',
  '⚠ **Say when a failure is silent.** _If you close it first, nothing is saved and nothing tells you._ A silent failure is the most expensive kind, and it is the thing a new person cannot possibly work out alone.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an instruction sheet for something at your work (35 words or more). Use the frame.'));
out.push(p('**______________ — ______________ steps**   _Written by ______________, shown by ______________, ______________._   **1** ______________ — ______________, **not** ______________.   **2** ______________. ______________.   **3** ______________. ⚠ **This is the one everybody gets wrong.**   **4** ______________, not ______________.   **5** ______________. ______________ before ______________.   _If ______________, do not ______________. Ask._'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says name the lookalike. Step 2 says _enter the number_ — which number, and what else on the paper could be mistaken for it?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap sheets with another pair and follow one. Tick ✓ or cross ✗ at the step where you stop.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every step an imperative', ''],
  ['A lookalike named at least once', ''],
  ['The trap marked', ''],
  ['A silent failure described, if there is one', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read step 3 of their sheet — the trap. The class says which traps they have fallen into themselves.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write instructions for something nobody at your work has written down (60 to 100 words). Number the steps, name one lookalike, mark the trap, and say what to do if it goes wrong.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the trap_   ✓ _imperatives throughout?_   ? _where would you keep this sheet?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Decide, as a class, where such sheets should live at a workplace so that somebody finds them in two years. The answer is never "in an email".'));
out.push(box('Homework', ['Write your final text. Then follow somebody else\'s instruction sheet exactly, without asking anything, and write down the first step where you stopped (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 18.3 =======================
out.push(pb());
out.push(h2('18.3  The system is down'));
out.push(p('**Function:** describing a failure   ·   **Grammar:** _isn\'t working_, _is down_, _won\'t_, _has frozen_   ·   **Pronunciation:** staying calm on the telephone'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What stops at your work when the computers stop? Name three things, and three that carry on.'));
out.push(p('**b**  Which is which? _It is slow · it is down · it has frozen · it will not open · it is offline_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What exactly is wrong?   **A** the whole network   **B** one screen is frozen   **C** the server is down for everybody'));
out.push(p('**b**  Listen again. **1** What has Nadia already checked? **2** What does the office carry on doing while it is down?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.5  The morning the system is down', [
  ['Nadia', 'The system is down. Not slow — down. Nothing opens on any of the four screens.'],
  ['Nour', 'Have you tried restarting?'],
  ['Nadia', 'All four, twice. The network light on the box in the corner is red and it is usually green. I have telephoned the engineer and he is coming at eleven.'],
  ['Nour', 'Then until eleven we are a company from 1998. Abu Yasser, we need the book.'],
  ['Abu Yasser', 'I have it.'],
  ['Nour', 'Of course you have it. Right — we take orders on paper with the date and the time on every one. We do not promise any stock we have not seen on the shelf. We telephone the three customers who are expecting a confirmation today and tell them it will be after twelve.'],
  ['Hala', 'And if a customer asks why?'],
  ['Nour', 'Tell them the truth: our system is down this morning and the engineer is here at eleven. Do not say "there is a small problem". They have heard that from everybody and they do not believe it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Describing a failure – the words, from smallest to largest**',
  table(['Words', 'Means'], [
    ['It is **slow**.', 'working, but badly'],
    ['It has **frozen** / it is stuck.', 'one screen, not responding'],
    ['It **will not open** / it **is not working**.', 'one thing, this computer'],
    ['It is **offline**.', 'no connection; other things still work'],
    ['It is **down**.', 'the whole system, for everybody'],
  ], [1.7, 2.2]),
  '⚠ **These are not synonyms and the difference is money.** _The system is down_ sends an engineer; _my screen has frozen_ does not. Say the smallest true one, and say what you have already tried.',
  '⚠ **"Not slow — down."** Say the contrast out loud, because the first question anybody asks is whether you have waited long enough.',
  '⚠ Report a failure in three parts: **what is not working · what you have tried · who you have told, and when they are coming.** The third part is what turns a complaint into a report.',
  '⚠ **Tell customers the truth.** _Our system is down this morning and the engineer is here at eleven._ Nobody believes "a small problem", because everybody says it.',
  '**Practise:** Describe each failure in three parts, choosing the right word for its size. 1 one screen 2 the printer 3 the whole system 4 the telephone line 5 the card machine',
  '**Useful phrases:**  Not slow — down.  ·  I have tried restarting, twice.  ·  the engineer is coming at eleven  ·  we are a company from 1998  ·  we do not promise stock we have not seen',
  '**Pronunciation – calm on the telephone.** 🔊 **Track 18.6** Listen to the same sentence said fast and said slowly. Under pressure everybody speeds up; the slow one is the one customers believe. Repeat four, slowly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports a failure in three parts; B decides what the office does until it is fixed. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ is __________. Not __________ — __________. __________.'],
  ['B', 'Have you tried __________?'],
  ['A', '__________, twice. __________. I have telephoned __________ and __________.'],
  ['B', 'Then until __________ we __________. __________, we need __________.'],
  ['A', '__________.'],
  ['B', 'Right — we __________. We do not __________. We telephone __________ and tell them __________.'],
]));
out.push(table(['Role card 1 — the card machine', 'Role card 2 — the telephone line'], [[
  'The card machine will not connect. Cash still works. Tried: restarting twice, the other socket. The provider says four hours. Until then: cash only, a sign on the counter, and telephone the three customers who always pay by card.',
  'The main line is dead; the mobile works. Tried: both handsets, the socket in the warehouse. Engineer tomorrow morning. Until then: the mobile number on a notice at the counter, and somebody must check it every twenty minutes.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write what the office **carries on doing**. A good failure report is half about what still works.'));
out.push(PHRASE_CARD(['Not slow — down.', 'I have tried restarting.', 'the engineer is coming at…', 'until then we…', 'we do not promise what we have not seen', 'Tell them the truth.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Describe **three** real failures at your work, each in three parts, and say what the workplace does in the meantime.'));
out.push(table(['What is not working', 'What I have tried', 'Who I told / when', 'What we do meanwhile'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1.2, 1.2, 1.5]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ is _______. I have tried _______. _______ is coming at _______. Until then we _______._'));
out.push(p('**Listener task:** write down which workplace in the room could carry on longest without its computers. Ask them why — the answer is always a piece of paper.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _the system is downed_ and _it doesn\'t work since this morning_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the notice Nour puts on the counter, and answer the questions.'));
out.push(box(null, [
  '**OUR SYSTEM IS DOWN THIS MORNING**',
  'It went down at twenty past eight. The engineer is here at eleven.',
  '**What we can still do:** take your order on paper · tell you what is on the shelf, because we have looked · take cash · deliver everything already loaded.',
  '**What we cannot do until it is back:** confirm a price from the system · tell you what is in stock in the Homs branch · print an invoice · take a card.',
  '**What we will do:** everything taken on paper this morning goes on the system first, before anything else, and anybody who has waited gets a telephone call before four o\'clock.',
  '**If you would rather come back:** we will be normal after twelve. Nothing you order now will be lost; the paper is kept and it is numbered.',
  'We are sorry. It is not a small problem and we are not pretending it is. — Sham Trading',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many of the four headings are about what still works?'));
out.push(item('2', 'What promise is made about the paper orders?'));
out.push(item('3', 'Why does the last line say what it says?'));
out.push(box('Writer\'s box', [
  '**A notice about a failure — four headings:** **what we can still do** · what we cannot do · **what we will do** afterwards · what to do if you would rather come back.',
  '**Put what still works first.** A customer who reads two lines and leaves should have read the useful half. A notice that opens with apology tells them nothing they can act on.',
  '**Promise the order of the recovery.** _Everything taken on paper goes on the system first, before anything else._ That is the sentence that stops people going elsewhere: not the apology, the queue position.',
  '⚠ Give the time it went down and the time the engineer is expected. A notice with no times reads as "we do not know", which is worse than any bad news in it.',
  '⚠ _It is not a small problem and we are not pretending it is._ Say it once. Everybody else says "a small technical issue" and nobody believes any of them.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a notice about a failure at your workplace (35 words or more). Use the frame.'));
out.push(p('**______________ IS ______________**   It ______________ at ______________. ______________ at ______________.   **What we can still do:** ______________ · ______________ · ______________.   **What we cannot do:** ______________ · ______________.   **What we will do:** ______________ goes ______________ first, and ______________ before ______________.   **If you would rather come back:** ______________. Nothing ______________.   ______________. — ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says put what still works first. Yours opens with the apology — what can a customer still do here this morning?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would a customer stay?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What still works, first', ''],
  ['Two times — when it failed, when help comes', ''],
  ['The order of the recovery promised', ''],
  ['No pretending it is small', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what we can still do". The class says which shop they would stay in.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a day when something failed at your work (60 to 100 words). Say what stopped, what carried on, what you did on paper, and what you would keep from that day.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what carried on_   ✓ _the right word for the size of the failure?_   ? _is the paper way still possible today?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Ask whether each workplace could still do the paper version today. In about half the cases the answer is no, and nobody has noticed.'));
out.push(box('Homework', ['Write your final text. Then write the one page your workplace would need on the morning everything stops — what still works, what does not, and who to telephone (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 18.4 =======================
out.push(pb());
out.push(h2('18.4  The book is slower and it is never down'));
out.push(p('**Function:** comparing two ways of doing the same job   ·   **Grammar:** comparatives revisited, _both … and_, _neither_   ·   **Pronunciation:** _-er than_ in connected speech'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name one job at your work that is done two ways — on paper and on a screen. Which is used more?'));
out.push(p('**b**  Make three comparisons: _The book is ______ than the screen. The screen is ______ than the book. Neither is ______._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub decide?   **A** keep both   **B** stop the book   **C** stop the screen'));
out.push(p('**b**  Listen again. **1** What is the book better at? **2** What does Abu Yasser say about the question itself?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.7  Two ways, side by side', [
  ['Mr Ayoub', 'After Tuesday morning I want to settle this. The book or the screen.'],
  ['Nadia', 'The screen is faster, it is searchable, and two people can read it at once. The book is none of those.'],
  ['Abu Yasser', 'The book is slower and it is never down. It was the only thing in this building that worked on Tuesday.'],
  ['Nadia', 'Once in nine years.'],
  ['Abu Yasser', 'Once in nine years for nine days. And it is not only Tuesday. The book shows what we did; the screen shows what we have. They answer different questions and you are asking which one to keep.'],
  ['Mr Ayoub', 'Then neither of them is the answer and both of them are. Keep the book for the daily close and the screen for everything else, and I do not want to hear this discussion again for three years.'],
  ['Nadia', 'It costs eleven minutes a day.'],
  ['Mr Ayoub', 'It costs eleven minutes a day and it saved nine days once. I can do that arithmetic.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Comparing two ways of doing the same job**',
  table(['Shape', 'Example'], [
    ['**-er than** / **more … than**', 'The screen is **faster than** the book.'],
    ['**not as … as**', 'The book is **not as fast as** the screen.'],
    ['**both … and**', '**Both** the book **and** the screen are kept.'],
    ['**neither … nor**', '**Neither** is the whole answer.'],
    ['Different questions', 'The book shows what we **did**; the screen shows what we **have**.'],
  ], [1.6, 2.4]),
  '⚠ **The strongest move in a comparison is to say the two things answer different questions.** Most "which is better" arguments at work are two people comparing two things that do different jobs, and nobody has said so.',
  '⚠ Put the **cost on both sides**: eleven minutes a day against nine days once. A comparison with a number on only one side is an opinion wearing arithmetic.',
  '⚠ _Neither … nor_ takes a singular verb: _neither **is** the answer_.',
  '**Practise:** Compare each pair, then say what different questions they answer. 1 paper and screen 2 telephone and email 3 a van and a service driver 4 cash and terms 5 a meeting and a message',
  '**Useful phrases:**  faster than · not as … as · both … and · neither is the whole answer · they answer different questions · I can do that arithmetic',
  '**Pronunciation – _-er than_.** 🔊 **Track 18.8** Listen: _fast**er than** · slow**er than** · cheap**er than**_. The _-er than_ runs together into one weak sound. Repeat six.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A and B argue for two ways; C decides, and must say what different questions they answer. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ or __________. I want to settle it.'],
  ['B', '__________ is __________, it is __________, and __________. __________ is none of those.'],
  ['C', '__________ is __________ and it is never __________. It was the only thing that __________.'],
  ['B', 'Once in __________.'],
  ['C', 'Once in __________ for __________. __________ shows __________; __________ shows __________. They answer different questions.'],
  ['A', 'Then neither is the answer and both are. Keep __________ for __________ and __________ for everything else.'],
]));
out.push(table(['Role card 1 — telephone or email', 'Role card 2 — van or service driver'], [[
  'Email: a record, no interruption, works at night. Telephone: an answer now, and you hear whether the person means it. Different questions: email proves what was agreed; the telephone finds out what is actually happening.',
  'Own van: our driver, our note, our face at the door. Service driver: cheaper for one or two items, there in two hours. Different questions: the van is for the round; the service driver is for the emergency.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform for the class – **without the book**.'));
out.push(p('**Listener task:** write the two different questions. If the group never got to them, say so — that is the commonest reason these arguments are repeated every year.'));
out.push(PHRASE_CARD(['faster than', 'not as … as', 'both … and', 'neither is the answer', 'they answer different questions', 'I can do that arithmetic']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** pairs of ways at your work. Compare each with a number on both sides, and say what different questions they answer.'));
out.push(table(['The two ways', 'What each is better at', 'The cost of each', 'The different questions'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1.4, 1.2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ is _______ than _______, and _______ is never _______. One costs _______; the other costs _______. They answer different questions: _______ and _______._'));
out.push(p('**Listener task:** write down the pair in the room that is still being argued about. Ask whether anybody has ever put the two costs side by side.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _more faster_ and _neither are_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mr Ayoub writes after the decision, and answer the questions.'));
out.push(box(null, [
  '**Decision — the stock book and the stock screen, 5 December**',
  'Both are kept. This is not a compromise; they do different jobs.',
  '**The screen** is faster, searchable, and readable by two people in two places. It shows **what we have**. It is used for everything except the daily close.',
  '**The book** is slower — about eleven minutes a day — and it has never once been unavailable. It shows **what we did**, in order, with a signature. It is used for the daily close and nothing else.',
  '**The arithmetic.** The book costs about forty-five hours a year. In nine years it has been the only record once, for nine days, and on that occasion it was the reason we could trade at all.',
  '**What would change this.** If the system goes a further five years without a day down, the daily close can move to the screen and the book can stop. I will look again in December 2030 and not before.',
  '**What is not a reason to reopen it:** that the book looks old-fashioned to a visitor.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the note say the two things each show?'));
out.push(item('2', 'What figure is given for the cost of the book, and over what period?'));
out.push(item('3', 'What two things does the note fix for the future?'));
out.push(box('Writer\'s box', [
  '**A decision note comparing two ways — five parts:** the decision in one line → **each way, with what it is better at and what it shows** → the arithmetic, with both costs → **what would change the decision** → what is not a reason to reopen it.',
  '**Say what each one shows, not only what each one is like.** _What we have_ against _what we did_ is the sentence that ends the argument, because it proves they are not competing.',
  '**Put a date on the review.** _I will look again in December 2030 and not before._ That is what stops a settled question being reopened every time somebody new arrives.',
  '⚠ The last line is the most useful one in any decision note: **name the bad argument in advance.** Every workplace has a decision that gets reopened on a weak reason, and writing that reason down kills it.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a decision note comparing two ways at your work (35 words or more). Use the frame.'));
out.push(p('**Decision — ______________, ______________**   ______________. They do different jobs.   **______________** is ______________. It shows ______________. It is used for ______________.   **______________** is ______________. It shows ______________. It is used for ______________.   **The arithmetic.** ______________ costs ______________. ______________.   **What would change this.** If ______________, ______________. I will look again in ______________.   **What is not a reason to reopen it:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says say what each one **shows**, not just what it is like. Yours says one is faster and one is cheaper — what question does each one answer?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would this stop the argument for three years?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What each one shows', ''],
  ['A cost on both sides', ''],
  ['A date for the review', ''],
  ['A bad argument named in advance', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what is not a reason". The class says which bad argument they have heard most often.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about two ways of doing the same job at your work (60 to 100 words). Give the cost of each, say what different questions they answer, and say what you would decide and for how long.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the different questions_   ✓ _a number on both sides?_   ? _who would have to agree?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many has the argument already been had more than once? Those are the ones that need a dated decision note rather than another discussion.'));
out.push(box('Homework', ['Write your final text. Then put the two costs of one real pair side by side, with real numbers, and show them to somebody who has an opinion (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 18.5 =======================
out.push(pb());
out.push(h2('18.5  It is in the shared folder, under Suppliers'));
out.push(p('**Function:** saying where a file is kept   ·   **Grammar:** prepositions of place for files and folders; naming   ·   **Pronunciation:** reading a file name aloud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Where is last month\'s price list kept at your work? Could a colleague find it without you?'));
out.push(p('**b**  Which file name is best? _list.xlsx · new list final.xlsx · Prices_2026-03-14_Aleppo.xlsx · FINAL FINAL use this one.xlsx_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why can nobody find the price list?   **A** it was deleted   **B** there are four files with similar names   **C** it is on one person\'s computer'));
out.push(p('**b**  Listen again. **1** What is the naming rule Nadia gives? **2** Where must the file be kept, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.9  Which one is the real one?', [
  ['Hala', 'Which of these is the real price list? There are four and they all look the same.'],
  ['Nadia', 'Read me the names.'],
  ['Hala', '"prices", "prices new", "prices new 2", and "prices FINAL use this".'],
  ['Nadia', 'None of them is the real one, because none of them has a date. Open all four and look at the top line.'],
  ['Hala', 'Three say March and one says January.'],
  ['Nadia', 'Then there are two real ones and we do not know which March file is later. From today: every file is named **what it is, then the date, then whose it is** — _Prices_2026-03-14_Aleppo_. No "new", no "final", no "use this one".'],
  ['Hala', 'And where?'],
  ['Nadia', 'In the shared folder, under Suppliers. Never on your own computer — a file on your computer is a file that does not exist on the day you are not here.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Where it is kept, and what it is called**',
  table(['Shape', 'Example'], [
    ['**in** the folder · **in** the shared drive', 'It is **in** the shared folder.'],
    ['**under** a sub-folder', '**under** Suppliers · **under** March'],
    ['**on** a computer / a disk', 'It is **on** my computer. (avoid)'],
    ['**attached to** an email', 'It is **attached to** Tuesday\'s email. (avoid)'],
    ['The naming rule', '**what it is _ the date _ whose it is**'],
  ], [1.6, 2.4]),
  '⚠ **_In_ a folder, _on_ a computer, _under_ a sub-folder.** The prepositions are fixed and there is nothing to understand; learn the three phrases whole.',
  '⚠ **A date in the name, always, and in the order year-month-day.** _2026-03-14_ sorts itself; _14 March_ does not. This is the one technical habit in the unit and it is worth more than the rest put together.',
  '⚠ **The words _new_, _final_, _latest_ and _use this one_ are forbidden.** Every one of them was true on the day it was written and is a lie a month later.',
  '⚠ **A file on your own computer does not exist** on the day you are away, ill, or have left. Say it in those words; it is the sentence that changes behaviour.',
  '**Practise:** Name these files properly, and say where each is kept. 1 a price list 2 a stock count 3 a customer letter 4 a photograph of a damaged pallet 5 a rota',
  '**Useful phrases:**  in the shared folder, under Suppliers  ·  what it is, then the date, then whose  ·  no "new", no "final"  ·  Read me the names.  ·  a file on your computer does not exist',
  '**Pronunciation – reading a file name aloud.** 🔊 **Track 18.10** Listen: _Prices — underscore — two thousand and twenty-six, oh three, fourteen — underscore — Aleppo._ Repeat four. Say _underscore_ and say the date in full; a file name said quickly is a file nobody finds.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A cannot find a file; B asks for the names, finds the fault, and gives the rule. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Which of these is the real __________? There are __________ and they all look the same.'],
  ['B', 'Read me the names.'],
  ['A', '"__________", "__________", "__________", and "__________".'],
  ['B', 'None of them is the real one, because __________. Open all __________ and look at __________.'],
  ['A', '__________ say __________ and one says __________.'],
  ['B', 'From today: every file is named __________. And it goes __________, never __________.'],
]));
out.push(table(['Role card 1 — the rota', 'Role card 2 — the stock count'], [[
  'Five files called "rota", "rota new", "rota July", "rota july2" and "ROTA USE THIS". Two are for July and three are undated. One of them is the only one with the holiday cover on it.',
  'Three files: "count", "count ok" and "stocktake". One is a count from last year. One is this quarter but was never finished. One is right and is on somebody\'s own computer.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the correct new name for one file, with its date in the right order.'));
out.push(PHRASE_CARD(['in the shared folder', 'under Suppliers', 'what it is, then the date', 'no "final"', 'Read me the names.', 'a file on your computer does not exist']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Find **four** badly named files at your work — or four you have made yourself. Rename them properly and say where each one should be kept.'));
out.push(table(['The old name', 'The new name', 'Where it goes'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.3, 2, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It was called _______. Now it is _______ and it is in _______, under _______._'));
out.push(p('**Listener task:** count how many files in the room are on one person\'s own computer. Ask what happens to each of them if that person is ill for a week.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _on the folder_ and _in my computer_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the one-page rule, and answer the questions.'));
out.push(box(null, [
  '**WHERE THINGS ARE KEPT — one page, and it is the whole rule**',
  '**Everything that more than one person needs goes in the shared folder.** Nothing that more than one person needs lives on anybody\'s own computer. A file on your computer does not exist on the day you are not here.',
  '**Folders:** Suppliers · Customers · Stock · Staff · Vehicles · Old. Nothing else. If a file does not fit one of the six, it goes in the nearest and you tell Nadia.',
  '**Names:** _WhatItIs_YYYY-MM-DD_Whose_. For example: **Prices_2026-03-14_Aleppo** · **StockCount_2026-02-28_Warehouse** · **Rota_2026-04_Counter**.',
  '**Forbidden in a file name:** new · newer · final · FINAL · latest · use this one · copy · copy (2) · and your own first name on its own.',
  '**When a file is replaced:** the old one goes into **Old**, with the same name. It is not deleted. Twice this year we have needed a price list from three versions ago.',
  '**Who to ask if you cannot find something:** Nadia, and then Hala. Do not make a second file. A second file is how there came to be four price lists.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many folders are there, and what happens if a file does not fit?'));
out.push(item('2', 'What happens to a file that is replaced?'));
out.push(item('3', 'What is the instruction that stops the whole problem recurring?'));
out.push(box('Writer\'s box', [
  '**A "where things are kept" page — six short rules, and it must fit on one page:** where things live · the folders, listed · the naming pattern, with **real examples** · what is forbidden in a name · what happens to the old version · **who to ask, and what not to do**.',
  '**Give real examples of names, not a pattern alone.** _Prices_2026-03-14_Aleppo_ teaches the rule in one line; _WhatItIs_Date_Whose_ does not.',
  '**List the forbidden words.** They are specific, everybody uses them, and a list is funnier and more memorable than a principle.',
  '⚠ The last rule is the one that matters: **do not make a second file.** Every mess of this kind was made by somebody who could not find something and solved it privately. Name that behaviour and give them a person to ask instead.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the "where things are kept" page for your own workplace (35 words or more). Use the frame.'));
out.push(p('**WHERE THINGS ARE KEPT**   Everything that ______________ goes ______________. Nothing ______________ lives ______________.   **Folders:** ______________ · ______________ · ______________ · ______________. Nothing else.   **Names:** ______________. For example: **______________** · **______________**.   **Forbidden in a file name:** ______________ · ______________ · ______________.   **When a file is replaced:** ______________. It is not ______________.   **Who to ask:** ______________. Do not ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box asks for real example names, not just the pattern. Could you write out two files you actually have, named the new way?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could a new person file something correctly from this page alone?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The folders listed, and no others', ''],
  ['Two real example names with dates', ''],
  ['A list of forbidden words', ''],
  ['Who to ask — and "do not make a second file"', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their forbidden list. The class adds the words they have actually seen. The combined list is usually longer than anybody expects.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a file or a document nobody can find at your work (60 to 100 words). Say what it is, how many versions there are, what it has cost, and what one page would fix it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the cost of not finding it_   ✓ _in / on / under correct?_   ? _who could write the one page?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Ask who in the room could write their workplace\'s one page this week. It takes about twenty minutes and almost nobody has done it.'));
out.push(box('Homework', ['Write your final text. Then rename five files properly and move them into one folder, and write down how long it took (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 18.6 =======================
out.push(pb());
out.push(h2('18.6  Do not click it'));
out.push(p('**Function:** a safe-working rule   ·   **Grammar:** negative imperatives for rules   ·   **Pronunciation:** the short flat warning'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Has anybody at your work ever had a message that was not what it looked like? What happened?'));
out.push(p('**b**  Which is a rule and which is advice? _You should not click it. · Do not click it. · It is better not to click it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is wrong with the message?   **A** it is in English   **B** it is from a supplier nobody has heard of   **C** it asks for a payment to a new account and it was not expected'));
out.push(p('**b**  Listen again. **1** What three things does Nadia tell everybody to do? **2** What does she tell them **not** to feel?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.11  A message nobody expected', [
  ['Hala', 'There is an email from Ms Shamsi saying her bank account has changed and asking us to pay the March invoice to a new number. It has her name at the bottom.'],
  ['Nadia', 'Do not pay it. Do not reply to it. Do not click anything in it.'],
  ['Hala', 'It looks exactly like her emails.'],
  ['Nadia', 'They always do. Three things, in this order. One: do not act on it. Two: telephone her — on the number **we** have, from the file, not a number in the message. Three: tell me, whatever she says.'],
  ['Hala', 'And if it turns out to be real?'],
  ['Nadia', 'Then you will have telephoned a supplier of eleven years and she will say yes, and that is a thirty-second conversation. There is no version of this where telephoning is the wrong thing.'],
  ['Hala', 'I feel stupid for even asking.'],
  ['Nadia', 'Do not. The ones who get caught are never the people who ask; they are the people who did not want to look as though they did not know. Ask every time, and ask loudly, so the new people hear you doing it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A safe-working rule – the negative imperative**',
  table(['Shape', 'Example'], [
    ['**Do not** + verb', '**Do not click** it. **Do not reply** to it.'],
    ['**Never** + verb', '**Never pay** a new account from an email alone.'],
    ['Order of actions', '**One:** do not act. **Two:** telephone. **Three:** tell somebody.'],
    ['From the file, not the message', 'On the number **we** have, **not** a number in the message.'],
    ['Permission to ask', '**Ask every time**, and ask loudly.'],
  ], [1.5, 2.5]),
  '⚠ **A rule is a negative imperative. Advice is not a rule.** _You should not click it_ leaves a decision with somebody who is in a hurry. _Do not click it_ does not.',
  '⚠ **The rule for any unexpected message asking for money, a password or a click is the same three steps, in this order:** do not act · check by a channel you already had · tell somebody. The second step is the whole of it, and _a channel you already had_ means a number from your own file.',
  '⚠ **Say that asking costs nothing.** The people who get caught are not the ones who ask; they are the ones who did not want to look foolish. A workplace where asking is loud and normal is a workplace this does not happen in.',
  '⚠ This is the only cycle in the book where the right answer is to do **nothing** quickly.',
  '**Practise:** Give the rule and the three steps for each. 1 a new bank account 2 a password request 3 an unexpected attachment 4 a telephone call asking to confirm details 5 a message that says "urgent, today"',
  '**Useful phrases:**  Do not click it.  ·  Never pay from an email alone.  ·  on the number we have  ·  tell me, whatever she says  ·  Ask every time, and ask loudly.',
  '**Pronunciation – the short flat warning.** 🔊 **Track 18.12** Listen: _do not click it_ — three short words, flat, no rise. A rise makes it a suggestion. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A brings an unexpected message; B gives the rule and the three steps, and removes the embarrassment. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'There is __________ saying __________ and asking us to __________. It has __________.'],
  ['B', 'Do not __________. Do not __________. Do not __________.'],
  ['A', 'It looks exactly like __________.'],
  ['B', 'They always do. Three things, in this order. One: __________. Two: __________ — on __________, not __________. Three: __________.'],
  ['A', 'And if it is real?'],
  ['B', 'Then it is a __________ conversation. There is no version of this where __________ is wrong.'],
  ['A', 'I feel stupid for asking.'],
  ['B', 'Do not. The ones who get caught are __________.'],
]));
out.push(table(['Role card 1 — the password', 'Role card 2 — the urgent transfer'], [[
  'A message that looks like it is from the company that supplies the accounts system, saying the password must be confirmed today or the account will be closed. It has the right logo.',
  'A message that looks like it is from the manager, sent at half past six in the evening, asking for a payment to be made before the morning and saying he is in a meeting and cannot take calls.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the **second** step — the channel they checked by. If it was a number from the message, the whole thing failed.'));
out.push(PHRASE_CARD(['Do not click it.', 'Never pay from an email alone.', 'on the number we have', 'tell me, whatever they say', 'Ask every time.', 'There is no version where telephoning is wrong.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** situations at your own work where money, a password or a click could be asked for unexpectedly. For each, write the rule, the three steps, and the number or person you would check with.'));
out.push(table(['The situation', 'The rule', 'Who I would check with, and how'], [['', '', ''], ['', '', ''], ['', '', '']], [1.3, 1.5, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _If _______, the rule is: do not _______. Then telephone _______ on _______, and tell _______._'));
out.push(p('**Listener task:** write down whether your workplace has ever said any of this out loud. In most workplaces the answer is no, and the rule exists only in the heads of two people.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _don\'t to click_ and _never not pay_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the notice that went up the same afternoon, and answer the questions.'));
out.push(box(null, [
  '**IF A MESSAGE ASKS FOR MONEY, A PASSWORD OR A CLICK AND YOU WERE NOT EXPECTING IT**',
  '**Do not act on it.** Do not pay. Do not reply. Do not click anything in it. Do not open an attachment you were not expecting.',
  '**Check by a number we already have.** Telephone the person on the number in **our** file — never a number written in the message. If it is a supplier, the number is in the Suppliers folder. If it is somebody here, walk to their desk.',
  '**Tell Nadia, whatever the answer is.** Including when it turns out to be genuine. We want to know what is being sent to us.',
  '**It will look real.** The name, the logo and the way they write will all be right. That is not evidence of anything. The only evidence is a telephone call to a number we already had.',
  '**Nobody here will ever be criticised for asking**, and nobody will ever be criticised for a delay caused by checking. A payment can wait an hour. The other thing cannot be undone.',
  '**Ask loudly.** If you ask quietly, the person next to you does not learn anything.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many separate things does the notice tell you not to do?'));
out.push(item('2', 'What does it say is **not** evidence, and what is?'));
out.push(item('3', 'Why does it say "ask loudly"?'));
out.push(box('Writer\'s box', [
  '**A safe-working notice — five parts:** the rule as **negative imperatives** · how to check, naming the channel · who to tell, **including when it is genuine** · why it looks real · and the permission: **nobody is criticised for asking**.',
  'Keep every instruction an imperative and keep them short. This is the one document at work that will be read by somebody in a hurry who is already slightly frightened.',
  '**Say "including when it turns out to be genuine".** Otherwise people only report the ones they are sure about, which is the half you do not need.',
  '⚠ The permission paragraph is not a kindness; it is the operative part. A rule that makes people feel foolish is a rule that is quietly ignored, and every person caught by one of these messages was someone who did not want to ask.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the safe-working notice for your own workplace (35 words or more). Use the frame.'));
out.push(p('**IF ______________ AND YOU WERE NOT EXPECTING IT**   **Do not ______________.** Do not ______________. Do not ______________.   **Check by ______________.** Telephone ______________ on ______________ — never ______________.   **Tell ______________, whatever ______________.** Including ______________.   **It will look real.** ______________. The only evidence is ______________.   **Nobody will ever be criticised for ______________.** ______________ can wait an hour; ______________ cannot be undone.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says include the permission paragraph. Without it, would you have asked, on a Thursday, with the counter full?"',
  'That question answers itself and it is the only one worth asking about this notice.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would a frightened person in a hurry follow this?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Negative imperatives, short', ''],
  ['A named channel to check by', ''],
  ['Tell somebody, including when it is genuine', ''],
  ['Nobody is criticised for asking', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their permission paragraph. The class says whose workplace they would feel safest asking in.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time something at work was not what it looked like (60 to 100 words). It can be a message, a caller, an invoice or a visitor. Say what gave it away, or what did not.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what gave it away_   ✓ _negative imperatives in the rule?_   ? _does your workplace have a rule for this?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Ask how many workplaces in the room have ever written the rule down. Then ask who will write it this week.'));
out.push(box('Homework', ['Write your final text. Then find out where your workplace keeps the real telephone number of its main supplier, and check that you could find it in a hurry (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 18.7 =======================
out.push(pb());
out.push(h2('18.7  Review & Mediate: the IT notice'));
out.push(p('**Function:** telling a colleague what an IT notice means for them   ·   **Review:** email phrases · instructions · failures · comparing · file names · the safe-working rule'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 18 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What two things must a subject line carry?',
  '**2** Why is "then" the word that hides a step?',
  '**3** _It is slow · it has frozen · it is down_ — which one sends an engineer?',
  '**4** What is wrong with a file called "prices final"?',
  '**5** What are the three steps for a message you were not expecting?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Fadi think the notice means?   **A** he must buy something   **B** he has done something wrong   **C** the system is being replaced'));
out.push(p('**b**  Listen again. **1** What does the notice actually ask him to do? **2** Which sentence in it is the one that matters for him?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.13  "Is this about the photographs?"', [
  ['Fadi', 'The IT notice. "All business documents must be stored in the shared folder. Local storage is not permitted." I photograph the shelf labels on my telephone. Is that local storage?'],
  ['Nour', 'Read me the next sentence.'],
  ['Fadi', '"Where a photograph or note is taken on a personal device for operational purposes, it must be transferred the same day and then deleted."'],
  ['Nour', 'So the answer is yes and it is allowed. You take the photograph, you put it in the folder the same day, and you delete it from your telephone. Nobody is telling you to stop.'],
  ['Fadi', 'It says "not permitted".'],
  ['Nour', 'The first sentence says where documents **live**. The second says what to do about the way you actually work. People read the first sentence and stop, and then either they panic or they ignore the whole notice.'],
  ['Fadi', 'And the folder?'],
  ['Nour', 'Stock, under Deliveries. I will show you — ten minutes, before you go out. And bring your telephone: we will do one together and you will write the steps down.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – a technical notice, where the second sentence is the one that matters**',
  table(['To slow the reading down', 'To find the exception', 'To say what it asks'], [
    ['Read me the next sentence.', 'The first says ___ ; the second says ___ .', 'The only thing it asks of you is ___ .'],
    ['People read the first sentence and stop.', 'Nobody is telling you to stop ___ .', 'I will show you — ten minutes.'],
  ], [1.8, 1.8, 1.8]),
  '⚠ **A technical notice is usually a rule followed by its exception, and almost nobody reads as far as the exception.** The mediator\'s first move is not to explain anything: it is to make the reader read the next sentence.',
  '⚠ **Find the sentence that describes how the person actually works.** It is nearly always there, in a longer and uglier sentence than the rule, and finding it is what turns a notice from a threat into an instruction.',
  '⚠ **End with an offer of ten minutes.** This unit has taught the whole chain: ask for ten minutes, do it yourself, write the steps, leave them for the next person. A mediation that ends in a step sheet has ended properly.',
  '**Practise:** The notice says all documents must be in the shared folder and local storage is not permitted; a later sentence allows photographs if they are transferred the same day. Explain it to somebody who photographs labels all day.',
  '**Useful phrases:**  Read me the next sentence.  ·  The first sentence says… the second says…  ·  Nobody is telling you to stop.  ·  the only thing it asks of you  ·  ten minutes, before you go out',
  '**Pronunciation – reading a formal sentence aloud, slowly.** 🔊 **Track 18.14** Listen to the long sentence read at half speed, with a pause at each comma. Repeat it. Most formal English becomes clear at half speed and this is the cheapest comprehension trick there is.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a notice silently; B has read only the first sentence and is alarmed. A finds the exception and ends with an offer of ten minutes. Then swap.'));
out.push(table(['Notice 1 — for A', 'Notice 2 — for B'], [[
  '**PASSWORDS.** _Passwords must not be written down. Where a shared system is used by more than one member of staff, a single account must not be used; individual accounts are to be requested from the office and may be issued the same day._  **B says:** the whole warehouse uses one login and it is written on the wall.',
  '**BACK-UPS.** _The shared folder is backed up nightly. Files held elsewhere are not covered. Staff requiring assistance in moving files are to contact the office, and no file will be deleted without the owner being informed._  **A says:** everything I have is on my own machine and they are going to delete it.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the sentence that **allowed** something. Every notice has one and it is never the first sentence.'));
out.push(PHRASE_CARD(['Read me the next sentence.', 'the first says… the second says…', 'Nobody is telling you to stop.', 'the only thing it asks of you', 'ten minutes, before you go out', 'we will do one together']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a technical notice. Read it silently. Then explain to **two** colleagues what it forbids, what it allows, and the one thing it asks of them.'));
out.push(table(['Who I told', 'What they thought it said', 'The sentence that allowed it'], [['', '', ''], ['', '', '']], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the notice you mediated. This is the **sixth** unit of Book 2 — the last before the Mid-Book Test — and the unwritten thing this time is where the exception lives: never in the first sentence, and never in the heading.'));
out.push(p('_It\'s a ______. They read ______ and stopped. The next sentence says ______. The only thing it asks of them is ______._'));
out.push(p('**Listener task:** add to the Book 2 office-word list: _shared drive · back-up · local storage · permitted · device · transferred_.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short workplace texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _Please find attached the delivery note._   **A** The note is in the email. **B** Please send the note. **C** The note has been lost.',
  '**2**  _Do not close the screen before the green line appears._   **A** Close it when the line appears. **B** Wait for the line, then close it. **C** Never close the screen.',
  '**3**  _The system is down; the engineer is here at eleven._   **A** It is slow. **B** Nothing is working and help is coming at eleven. **C** One screen has frozen.',
  '**4**  _Files held outside the shared folder are not backed up._   **A** Your own computer is not backed up. **B** Everything is backed up. **C** The shared folder is not backed up.',
  '**5**  _Never pay a new bank account from an email alone._   **A** Telephone to check first. **B** Do not pay suppliers. **C** Pay only by email.',
  '**6**  _Where a photograph is taken on a personal device, it must be transferred the same day._   **A** Photographs are forbidden. **B** Photographs are allowed if moved that day. **C** Photographs must be printed.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more),** three points, all three present.',
  'For a message about something technical, the three points are usually: **what has happened** · **what it means for the reader** · **what they should do, and when**.',
  '⚠ Use the unit\'s plain words — _is down_, _do not click_, _in the shared folder_. A short message is not the place for a long noun phrase.',
  '⚠ If the message is a warning, the instruction is a **negative imperative** and it goes first.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task.** Something has gone wrong with the computers at work. Write a message to a colleague (25 words or more). Say **what has happened**, **what it means for them**, and **what they should do**.'));
out.push(p('Hi ______________, the ______________ is ______________. It means you ______________ until ______________. Please ______________ and ______________. ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What has happened, in plain words', ''],
  ['What it means for this person', ''],
  ['An instruction with a time', ''],
  ['25 words or more', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the one page your workplace should have about computers (60 to 100 words): where files live, what to do when something stops, and the rule about a message nobody expected.'));
out.push(...lines(6));
out.push(box('Homework', ['Write your final text. Then put one of these pages on a wall at your workplace and write down what the first person who read it said (35+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 18 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  Please ___ attached the invoice.   a) find   b) to find   c) finding',
  '2  I am writing ___ about order 0618.   a) for ask   b) to ask   c) asking',
  '3  ___ the middle button and wait.   a) You click   b) Clicking   c) Click',
  '4  ___ close the screen before the green line.   a) Not   b) Do not   c) No',
  '5  The system is ___ — nothing works on any screen.   a) slow   b) down   c) frozen',
  '6  It is in the shared folder, ___ Suppliers.   a) under   b) on   c) at',
  '7  The book is slower ___ the screen.   a) that   b) than   c) then',
  '8  Neither of them ___ the whole answer.   a) are   b) is   c) be',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 18.15** Listen to instructions for a screen. Write the five steps in note form.   1 ______   2 ______   3 ______   4 ______   5 ______'));
out.push(dlg('Track 18.15  Audio script (read after the check)', [
  ['Nour', 'One: open the Deliveries screen — the lorry icon, not the box icon. Two: enter the note number from the paper, not the customer number.'],
  ['Nour', 'Three: check the date. It puts today in, and your note may be yesterday\'s. That is the one everybody gets wrong.'],
  ['Nour', 'Four: enter the number of items you actually delivered. Five: save with the middle button, and wait for the green line before you close it.'],
]));
out.push(p('**C  Writing.** Write a work email in six lines (35+ words): a subject line with the thing and the ask, the facts one per line, and a request with a date.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 18)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ write a subject line that carries the thing and the ask',
  '☐ put the request in the last line, with a date, and say what I will do if nobody answers',
  '☐ give instructions as numbered steps, with the lookalike named and the trap marked',
  '☐ describe a failure with the right word for its size, and say what has been tried',
  '☐ say what still works while something is broken',
  '☐ compare two ways of doing a job and say what different questions they answer',
  '☐ name a file so that somebody can find it in two years, and say where it is kept',
  '☐ give the three-step rule for a message nobody expected — and ask loudly',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 18 · Student\'s Book');
