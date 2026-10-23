// Proactive Business English B1 · Syria Edition · Book 1 · Unit 11 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a defining clause · a non-defining clause · the restrictive sense · the non-restrictive sense · a defined term · the definition clause · for the purposes of this agreement · means · includes · excludes · save that · subject to clause · the party · the parties · hereunder · thereafter · the goods as described · of the kind described · such goods · any such · the said · an exclusion · a limitation · a warranty · a condition precedent · the governing provision · construed · the ordinary meaning · ambiguity · the effect of the comma';
const BACK_AT_B1 = 'item · reference number · due';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 11  Defining and Adding'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**11.1**  define which one you mean',
  '**11.2**  add information about one you have already identified',
  '**11.3**  use *whose*, *where* and *when*',
  '**11.4**  see what a comma does to a liability',
  '**11.5**  leave the relative out — and know when you cannot',
  '**11.6**  put defining and adding side by side in one paragraph of terms',
  '**11.7**  Review & Mediate: the page before the conditions',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ The one punctuation mark in this book that can cost money', [
  '*We will replace any item **which is faulty on delivery**.* — only the faulty ones.',
  '*We will replace any item**, which is faulty on delivery**.* — every item, and by the way they are all faulty.',
  '⚠ **One comma, and the second sentence promises to replace the whole order.** Nobody would write the second on purpose, and people write it every week, because in speech the two are nearly the same and in writing they are opposites.',
  '**So 11.4 is the cycle this unit exists for**, and the rest of it is the equipment you need to see what 11.4 is about. ⚠ The test is in the box and it takes four seconds: **read the sentence without the clause. If it still says what you meant, the clause is an addition and takes commas. If it now says something larger than you meant, the clause is defining and takes none.**',
], C.lyellow, C.orange));

// ======================= CYCLE 11.1 =======================
out.push(pb());
out.push(h2('11.1  The customer who pays on delivery'));
out.push(p('**Function:** defining which one you mean   ·   **Grammar:** defining relative clauses, no commas   ·   **Pronunciation:** the defining clause said without a break'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your workplace has several customers. Describe one so that a colleague knows which one you mean, without using a name.'));
out.push(p('**b**  Which of these identifies one customer? _The customer, who pays on delivery. · The customer who pays on delivery._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What goes wrong?   **A** a price is wrong   **B** Hala looks for the wrong customer because a clause did not define   **C** nothing'));
out.push(p('**b**  Listen again. **1** What had Nour written, and what did Hala understand? **2** What is the rule Nadia gives for a list?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.1  "Which customer?"', [
  ['Hala', 'You said to telephone the customer who has not paid since September. There are four.'],
  ['Nour', 'Four?'],
  ['Hala', 'Tarabishi, Haffar, the school and the man in Jaramana. I telephoned Tarabishi because he was first in the book.'],
  ['Nour', 'I meant the one with the standing order.'],
  ['Hala', 'Then that is two clauses and you gave me one. *The customer who has not paid since September* is four people. *The customer with a standing order who has not paid since September* is one.'],
  ['Nour', 'And I have had you telephone a man who owes us nothing.'],
  ['Hala', 'He was very pleasant about it. He thought we were chasing him for the September order he paid in cash and he has the receipt, which he read to me.'],
  ['Nadia', 'May I. ⚠ A defining clause has one job: **to cut a group down to the one you mean.** If it leaves four, it has not finished, and you add clauses until one is left.'],
  ['Nour', 'How do I know when it is enough?'],
  ['Nadia', '⚠ **Count what is left.** Not *does it sound clear* — count. *The customer who has not paid*: four. *The customer with a standing order who has not paid*: one. ⚠ **A defining clause is right when the count is one, and nothing else tells you.**'],
  ['Hala', 'And if there is genuinely more than one?'],
  ['Nadia', 'Then say so and name them. *Four customers have not paid since September: …* ⚠ **A plural you have hidden inside a singular is the thing that sent Hala to the wrong telephone number.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Defining relative clauses — no commas, and the count must be one**',
  table(['Form', 'Example'], [
    ['**who** for a person', 'the customer **who** has not paid since September'],
    ['**which / that** for a thing', 'the invoice **which** was raised from the order'],
    ['**two clauses** where one is not enough', 'the customer **with a standing order who** has not paid'],
    ['⚠ **no commas, ever**', '~~the customer, who has not paid,~~ means something else'],
    ['⚠ **the plural, stated**', 'Four customers have not paid since September: …'],
  ], [2.2, 3.1]),
  '⚠ **A defining clause has one job: to cut a group down to the one you mean.** If it leaves four, it has not finished — **add clauses until one is left.**',
  '⚠ **The test is a count, not a feeling.** Do not ask whether it sounds clear; ask how many things in the world the sentence fits. ⚠ *A defining clause is right when the count is one, and nothing else tells you.*',
  '⚠ **Never put commas round a defining clause.** The commas turn it into an addition about a thing already identified, which is Unit 11.2 and is a different sentence entirely.',
  '⚠ **If there is genuinely more than one, say so and name them.** *A plural hidden inside a singular* is what sends somebody to the wrong telephone number.',
  '⚠ *That* is possible for things and ⚠ **not for people** in careful writing: *the customer who*, not ~~the customer that~~.',
  '**Practise:** Define each down to one, and say how many each clause leaves. 1 a customer 2 an invoice 3 a delivery 4 a member of staff 5 a store room',
  '**Useful phrases:**  the customer who…  ·  the invoice which…  ·  the one with … who …  ·  how many does that leave?  ·  Four have not paid: …',
  '**Pronunciation – the defining clause with no break.** 🔊 **Track 11.2** Listen: _the customer who has not paid since September_ — one unbroken group, no pause after *customer*. ⚠ A pause there turns it into an addition, and in speech the pause is the only punctuation there is. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives an instruction with a clause that does not define; B counts what is left. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'You said to __________ the __________ who __________. There are __________.'],
  ['A', '__________?'],
  ['B', '__________, __________, __________ and __________. I __________ because __________.'],
  ['A', 'I meant the one with __________.'],
  ['B', 'Then that is two clauses and you gave me one. ⚠ *The __________ who __________* is __________. *The __________ with __________ who __________* is one.'],
  ['A', 'How do I know when it is enough?'],
  ['B', '⚠ Count what is left.'],
]));
out.push(table(['Role card 1 — the invoice', 'Role card 2 — the store room'], [[
  '"Find the invoice that was wrong." There are three wrong invoices this month. The defining clauses needed: *the invoice which was priced from the list of the 5th* — one. ⚠ A asked for *the wrong one* and there is no such thing in a month with three.',
  '"Count the room that has not been done." Two have not been counted: the fourth store and the yard container. *The room which has not been entered since August* is still two, because neither has. *The room which holds about 900 cartons and has not been entered* is one.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the first clause and the count it leaves, then the clauses that bring it to one. ⚠ Then say what the wrong action was.'));
out.push(PHRASE_CARD(['the customer who…', 'the invoice which…', 'the one with … who …', 'how many does that leave?', 'count what is left', 'no commas']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** instructions you might give. For each: the clause you would use, the count it leaves, and the clause that brings it to one.'));
out.push(table(['The instruction', 'The clause I would have used', 'How many it leaves', 'The clause that leaves one'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.3, 1.6, 0.8, 1.9]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I would have said the _______ who _______. That leaves _______. The one that leaves one is _______._'));
out.push(p('**Listener task:** count the instructions in the room that left more than one. ⚠ Then ask what each of them would have caused — the cost is always somebody doing the wrong thing confidently.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _the customer, who has not paid, is Tarabishi_ and _the customer that has not paid_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the list, and answer the questions.'));
out.push(box(null, [
  '**ACCOUNTS NOT PAID SINCE SEPTEMBER. Prepared 1 December. ⚠ Four accounts, not one.**',
  '**Why this is a list and not a sentence.** On 28 November I asked Hala to telephone *the customer who has not paid since September*. **There are four**, and she telephoned the first in the book, who had paid in cash and had the receipt. ⚠ **The fault was in my sentence and not in her telephoning.**',
  table(['The account', 'The clause that identifies it alone', 'Owing', 'Due'], [
    ['Mr F. Tarabishi', '— **nothing owing**; paid in cash on 14 September, receipt held by him', '0', '—'],
    ['Mr Haffar', 'the account **with a weekly standing order which** has not paid since September', '1,240,000', '30 days'],
    ['Al-Nahda School', 'the account **which pays by transfer on a purchase order**', '680,000', '60 days'],
    ['The Jaramana account', 'the account **whose** last payment was in July ⚠ **not September**', '310,000', '30 days'],
  ], [1.3, 3, 0.8, 0.7]),
  '⚠ **What the table shows that my sentence hid.** One of the four owes nothing. One has not paid since **July** and not September, so the clause I used does not even fit him. And of the two that do fit, they are on different terms — thirty days and sixty — **so they are not even the same kind of problem, and a single telephone call would have been wrong for whichever one it reached.**',
  '**What I should have written.** *Telephone Mr Haffar — the weekly standing order, 1,240,000, thirty days, nothing since 2 September.* ⚠ **A name, a figure and a date, which is what a defining clause is trying to be and never does as well.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why is this a list and not a sentence?'));
out.push(item('2', 'What three things did the original sentence hide?'));
out.push(item('3', 'What does the writer say she should have written instead?'));
out.push(box('Writer\'s box', [
  '**A list that replaces a sentence — three parts:** ⚠ **why this is a list and not a sentence** → a table with **the clause that identifies each one alone** → ⚠ **what the table shows that the sentence hid.**',
  '**Take the fault for the sentence, not the action.** *The fault was in my sentence and not in her telephoning.*',
  '**Give each row the clause that identifies it alone.** *The account with a weekly standing order which has not paid since September.* ⚠ Writing one for each row is the quickest way to discover that your original clause fitted several — or none.',
  '⚠ **Say what the sentence hid.** One owes nothing; one is July and not September; and the two that fit are on different terms, ⚠ **so they are not even the same kind of problem.**',
  '⚠ **Then abandon the clause for a name and a figure.** *A name, a figure and a date, which is what a defining clause is trying to be and never does as well.* ⚠ The best defining clause in a working document is usually a name.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take an instruction you have given that was ambiguous and write the list that replaces it (**50 words or more**). Use the frame.'));
out.push(p('**______________. Prepared ______________. ⚠ ______________, not one.**   **Why this is a list and not a sentence.** On ______________ I asked ______________ to ______________ *the ______________ who ______________*. **There are ______________.** ⚠ The fault was in my sentence and not in ______________.   ______________ | the one **which** ______________ | ______________   ______________ | the one **whose** ______________ | ______________   ______________ | the one **with** ______________ | ______________   ⚠ **What the table shows that my sentence hid.** ______________. ______________. ______________.   **What I should have written.** ______________ — ______________, ______________, ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says give each row the clause that identifies it alone. Your second row says *the other one* — what clause fits only that account?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **does any clause here fit more than one row?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Why it is a list and not a sentence', ''],
  ['A clause for each row that fits only that row', ''],
  ['What the original sentence hid', ''],
  ['The name-and-figure version that should have been written', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read what their sentence hid. The class says which omission would have caused the most trouble.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time an instruction at your work fitted more than one thing (**100 to 140 words**). Say what was said, what was done, and what the instruction should have contained.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what was actually done_   ✓ _defining clauses without commas?_   ? _how many things did the original instruction fit?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the person who acted get blamed? Usually two of three — and in all three the instruction was the fault.'));
out.push(box('Homework', ['Write your final text. Then take one instruction you are about to give, count what your clause fits, and add clauses until it fits one (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 11.2 =======================
out.push(pb());
out.push(h2('11.2  Ms Shamsi, who has supplied us for eleven years'));
out.push(p('**Function:** adding information about one already identified   ·   **Grammar:** non-defining clauses, with commas   ·   **Pronunciation:** the two pauses that carry the commas'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name one supplier or customer, then add one fact about them in the same sentence.'));
out.push(p('**b**  What is the difference? _Our supplier who is in Aleppo has raised her price. · Our supplier, who is in Aleppo, has raised her price._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia notice about the sentence?   **A** it implies the company has more than one supplier   **B** the price is wrong   **C** the date is wrong'));
out.push(p('**b**  Listen again. **1** What does the version without commas imply? **2** What does she say the commas are for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.3  "How many suppliers do we have?"', [
  ['Nadia', 'Your letter says *our supplier who is in Aleppo has raised her price*.'],
  ['Nour', 'She has.'],
  ['Nadia', 'How many suppliers do we have?'],
  ['Nour', 'Nine.'],
  ['Nadia', 'And how many are in Aleppo?'],
  ['Nour', 'One. Ms Shamsi.'],
  ['Nadia', 'Then with no commas you are telling the bank we have several suppliers and distinguishing one of them by being in Aleppo — which is true and is not what you meant. You meant *Ms Shamsi, who is in Aleppo, has raised her price*: the name identifies her and the clause adds something.'],
  ['Nour', 'So the commas mean the clause is not doing the identifying.'],
  ['Nadia', 'The commas mean you have already identified her and are adding a fact. ⚠ And it matters here because the bank is reading this to understand our supply, and *our supplier who is in Aleppo* invites them to ask about the other eight.'],
  ['Nour', 'Which I would rather they did not, because two of them are the same company under two names.'],
  ['Nadia', '⚠ Which you should tell them before they find it, but not in this letter and not by accident in a relative clause.'],
  ['Nour', 'So the rule is: name first, then add.'],
  ['Nadia', 'Name first, then add, and the adding goes between commas. ⚠ **And if you cannot name, you are defining and not adding, and the commas have to come out.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Non-defining clauses — two commas, and a thing already identified**',
  table(['Form', 'Example'], [
    ['**a name**, who …, …', '**Ms Shamsi**, who is in Aleppo, has raised her price.'],
    ['**the only one**, which …, …', 'Our **second site**, which opened on 8 June, has traded every week.'],
    ['⚠ **two commas, not one**', '~~Ms Shamsi, who is in Aleppo has raised~~ is wrong'],
    ['⚠ **never *that***', '~~Ms Shamsi, that is in Aleppo,~~ is wrong'],
    ['⚠ the test', 'Can I name it? Then I am **adding**.'],
  ], [2.2, 3.1]),
  '⚠ **Name first, then add, and the adding goes between commas.** ⚠ **If you cannot name it, you are defining and not adding, and the commas have to come out.**',
  '⚠ **A defining clause after a plural noun tells the reader there are others.** *Our supplier who is in Aleppo* says there are several suppliers and this is the Aleppo one — which may be true and may be more than you meant to say.',
  '⚠ **Two commas, not one.** A non-defining clause is a parenthesis and needs closing. ⚠ The missing second comma is the commonest punctuation error in business writing and it leaves a sentence that cannot be parsed.',
  '⚠ **_That_ is impossible in a non-defining clause.** Use *who* for people and *which* for things.',
  '⚠ **Watch what a relative clause reveals.** *Our supplier who is in Aleppo* invites a reader to ask about the others, and a clause is a poor place to disclose anything by accident.',
  '**Practise:** Turn each into *name first, then add*. 1 our supplier in Aleppo 2 our second site 3 the customer with the standing order 4 the member of staff who covers Saturdays 5 the store room that is not counted',
  '**Useful phrases:**  X, who…, …  ·  Y, which…, …  ·  Can I name it?  ·  two commas  ·  name first, then add',
  '**Pronunciation – the two pauses.** 🔊 **Track 11.4** Listen: _Ms Shamsi // who is in Aleppo // has raised her price_. ⚠ Two clear breaks, and the main sentence can be heard across them. Repeat four, then say the same words with no breaks and hear it become a different sentence.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A writes a defining clause where they meant to add; B asks the count and repairs it. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Your letter says *our __________ who __________*.'],
  ['A', 'That is right.'],
  ['B', 'How many __________ do we have?'],
  ['A', '__________.'],
  ['B', 'And how many __________?'],
  ['A', 'One. __________.'],
  ['B', 'Then with no commas you are telling __________ that __________. You meant *__________, who __________, __________*.'],
  ['A', 'So the commas mean I have already identified them.'],
  ['B', '⚠ Name first, then add. And if you cannot name, you are defining.'],
]));
out.push(table(['Role card 1 — the second site', 'Role card 2 — the staff member'], [[
  '"Our site which opened in June has traded every week." ⚠ With no commas it says the company has several sites and distinguishes the June one — which is true but tells a reader to ask how many. *Our second site, which opened on 8 June, …* is what was meant.',
  '"The member of staff who covers Saturdays has asked for a different day." There is one. ⚠ With no commas it implies several Saturday coverers; and naming her would be better still, because a reader who cannot name her cannot act on the sentence.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the repair for the class – **without the book**.'));
out.push(p('**Listener task:** write both versions and what each implies. ⚠ Then say what the no-comma version invited the reader to ask.'));
out.push(PHRASE_CARD(['X, who…, …', 'Y, which…, …', 'Can I name it?', 'two commas', 'name first, then add', 'never "that"']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** sentences from your own writing with a relative clause. Decide for each: defining or adding, and whether it is punctuated right.'));
out.push(table(['The sentence', 'Defining or adding?', 'Punctuated right?', 'The repair'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2, 1.1, 0.9, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I wrote _______. That is defining / adding, so it needs _______. What it implied was _______._'));
out.push(p('**Listener task:** count the sentences in the room with one comma instead of two. ⚠ It is the commonest error and it leaves a sentence nobody can parse.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _Ms Shamsi, that is in Aleppo, has raised her price_ and _Ms Shamsi, who is in Aleppo has raised her price_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the paragraph of a letter, and answer the questions.'));
out.push(box(null, [
  '**Extract from a letter to the bank, 2 December — the supply paragraph, written twice.**',
  '⚠ **The version I nearly sent.** *Our supplier who is in Aleppo has raised her price by about four per cent and our haulier who serves the northern route has not changed his rates since March. The customer who has the largest standing order has been with us since 2017.*',
  '⚠ **What that version told the bank, none of it on purpose.** That we have several suppliers and one is in Aleppo. That we have several hauliers and one serves the north. That we have several standing orders and one is the largest. **All three are true and all three invite a question I would rather answer in a paragraph of my own choosing** — in particular the haulier, because we have two and one of them is the same man under a trading name.',
  '**The version I sent.** *Ms Dima Shamsi, who has supplied our packaging from Aleppo since 2014, has raised her price by about four per cent, which we have absorbed. Mr Jaber, who carries the northern route, has not changed his rates since March. Mr Haffar, our largest standing order, has been with us since 2017.*',
  '⚠ **Why it is better and not merely tidier.** Three names, three facts, and nothing about how many of anything we have. **A reader who wants to know how many hauliers we use now has to ask**, and when they ask I will tell them the whole of it, including the trading name, in a sentence written for the purpose.',
  '⚠ **And one thing I have learned from writing it twice.** The first version is what I would say out loud, because in speech the commas are a pause and I would have paused. ⚠ **The error is not in my thinking; it is in the gap between what my voice does and what the page does** — and the only fix is to read the page without the clauses and see what is left.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What three things did the first version tell the bank by accident?'));
out.push(item('2', 'Why does the writer say the second version is better and not merely tidier?'));
out.push(item('3', 'What does the writer say about the gap between speech and the page?'));
out.push(box('Writer\'s box', [
  '**A paragraph written twice — four parts:** ⚠ **the version you nearly sent** → ⚠ **what it told the reader, none of it on purpose** → the version you sent → **why it is better and not merely tidier.**',
  '**Quote your own bad version in full.** It is the only way to show what the punctuation did, and it costs nothing because nobody saw it.',
  '⚠ **List what the defining clauses revealed.** *That we have several hauliers and one serves the north.* ⚠ Every defining clause after a plural noun is a small disclosure, and three of them in a paragraph is a paragraph about your scale that you did not write.',
  '⚠ **Say what you would rather disclose deliberately.** *When they ask I will tell them the whole of it, in a sentence written for the purpose.* The point is not concealment; it is that a relative clause is a poor place to disclose anything.',
  '⚠ **Name the mechanism: speech has pauses and the page has commas.** *The error is not in my thinking; it is in the gap between what my voice does and what the page does.*',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take a paragraph of your own and write it twice (**50 words or more**). Use the frame.'));
out.push(p('⚠ **The version I nearly sent.** *Our ______________ who ______________ has ______________. Our ______________ who ______________ has ______________.*   ⚠ **What that told the reader, none of it on purpose.** That we have ______________. That we have ______________.   **The version I sent.** *______________, who ______________, has ______________. ______________, who ______________, has ______________.*   ⚠ **Why it is better and not merely tidier.** ______________ names, ______________ facts, and nothing about ______________. A reader who wants to know ______________ now has to ask.   ⚠ **And one thing I have learned.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says list what the defining clauses revealed. Yours says the first version was unclear — what did it actually tell the reader about your scale?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **what does the first version tell you that the writer did not mean to say?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The bad version quoted in full', ''],
  ['What it revealed, listed', ''],
  ['The good version: name first, then add, two commas', ''],
  ['The mechanism named — speech pauses, the page commas', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *what that told the reader*. The class says which accidental disclosure was the largest.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something your workplace has disclosed by accident in writing (**100 to 140 words**). Say what the sentence was, what it revealed, who read it, and whether it mattered.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what was revealed_   ✓ _defining and non-defining punctuated correctly throughout?_   ? _would the writer have said it out loud?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many would the writer have said the same thing out loud quite happily? Usually all three — which is the point: the disclosure is an accident of punctuation and not of judgement.'));
out.push(box('Homework', ['Write your final text. Then take one paragraph you have sent and read it without the relative clauses. Write down what is left (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 11.3 =======================
out.push(pb());
out.push(h2('11.3  Whose, where, when'));
out.push(p('**Function:** relating by possession, place and time   ·   **Grammar:** *whose · where · when*   ·   **Pronunciation:** _whose_ and _where_ in a long sentence'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Describe a place at your work using *where*, and a thing using *whose*.'));
out.push(p('**b**  Which is right? _the branch where the stock is held · the branch which the stock is held · the branch where the stock is held in it_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is wrong with the insurance wording?   **A** the sum insured   **B** *where* makes the cover follow the place and not the goods   **C** nothing'));
out.push(p('**b**  Listen again. **1** What does Nadia work out about the container? **2** What does she say about *whose*?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.5  "Where, and that is the problem"', [
  ['Nadia', 'The policy covers *stock held at the premises where the business is carried on*.'],
  ['Nour', 'Which is both sites.'],
  ['Nadia', 'Both sites and nothing else. Where are the five hundred cartons?'],
  ['Nour', 'In the container. In the yard.'],
  ['Nadia', 'Is the yard a premises where the business is carried on?'],
  ['Nour', '…The yard is at the Mezzeh premises. The container is in the yard.'],
  ['Nadia', 'Then it probably is, and *probably* is doing a great deal of work in a sentence about five hundred cartons. ⚠ The clause makes the cover follow **the place** and not the goods, so every question about whether something is covered becomes a question about what counts as the premises.'],
  ['Nour', 'And the wrap at Ms Shamsi\'s, waiting for us?'],
  ['Nadia', 'Not covered by this clause at all, because it is not at a premises where our business is carried on. ⚠ **Which nobody has ever thought about, because the clause reads as though it is about our stock and it is actually about our addresses.**'],
  ['Nour', 'Is there a wording that follows the goods?'],
  ['Nadia', '*Stock whose property in the goods has passed to the insured*, which follows the ownership wherever it is. ⚠ **_Whose_ relates by possession and _where_ relates by place, and for stock in transit the difference is the whole policy.**'],
  ['Nour', 'I would never have read that clause twice.'],
  ['Nadia', 'Nobody does. ⚠ **The relative pronoun is the smallest word in an insurance clause and it decides what the clause is about.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_Whose_, _where_ and _when_ — and what each makes the sentence about**',
  table(['Form', 'Relates by', 'Example'], [
    ['**whose**', '⚠ **possession**', 'stock **whose** property has passed to us'],
    ['**where**', '⚠ **place**', 'the premises **where** the business is carried on'],
    ['**when**', 'time', 'the week **when** the generator failed'],
    ['**in which / at which**', 'place, formal', 'the room **in which** the stock is held'],
    ['⚠ what to drop', '—', '~~the branch where the stock is held in it~~'],
  ], [1.5, 1.4, 2.8]),
  '⚠ **The relative pronoun decides what the clause is about.** *Stock held at the premises **where** the business is carried on* is a clause about **addresses**; *stock **whose** property has passed to the insured* is a clause about **ownership** — and for stock in transit that difference is the whole policy.',
  '⚠ **_Whose_ works for things as well as people.** *A pallet whose base is split*, *an invoice whose reference is missing*. ⚠ Learners avoid it for things and reach for *of which*, which is correct and heavy.',
  '⚠ **Do not add a preposition after *where*.** ~~the room where the stock is held in it~~ — *where* has already done that work.',
  '⚠ **_When_ needs a time noun in front of it**: *the week when*, *the day when*, *the month when* — not ~~the generator failed when~~.',
  '**Practise:** Relate each by possession, place or time, and say which the sentence is then about. 1 stock in a container 2 a pallet with a split base 3 the premises 4 the week of the failure 5 an invoice with no reference',
  '**Useful phrases:**  stock whose…  ·  the premises where…  ·  the week when…  ·  the room in which…  ·  which does this clause follow — the goods or the place?',
  '**Pronunciation – _whose_ and _where_ in a long sentence.** 🔊 **Track 11.6** Listen: _stock **whose** property has passed to the insured_ // _the premises **where** the business is carried on_. ⚠ Both carry a small stress, because in a clause of fifteen words they are the two words that decide everything. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a clause; B works out whether it follows the goods, the place or the time. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The __________ covers *__________ where __________*.'],
  ['B', 'Which is __________.'],
  ['A', '__________ and nothing else. Where is __________?'],
  ['B', 'In __________.'],
  ['A', 'Is __________ a __________ where __________?'],
  ['B', '…__________.'],
  ['A', '⚠ Then the clause makes it follow __________ and not __________.'],
  ['B', 'Is there a wording that follows __________?'],
  ['A', '*__________ whose __________*, which follows __________ wherever it is.'],
]));
out.push(table(['Role card 1 — the delivery clause', 'Role card 2 — the guarantee'], [[
  '"Risk passes on delivery to the premises where the customer trades." ⚠ A customer with two shops and a lock-up: delivery to the lock-up is not delivery to a premises where he trades, so risk has not passed and a loss there is ours.',
  '"We guarantee goods whose fault appears within twelve months." ⚠ This follows the **fault** and not the sale, so a fault appearing in month eleven on goods sold three years ago is covered. The intended wording is *goods whose date of sale is within twelve months*.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write what the clause follows and what it should follow. ⚠ Then write the case where the difference costs money.'));
out.push(PHRASE_CARD(['stock whose…', 'the premises where…', 'the week when…', 'the room in which…', 'goods or place?', 'no preposition after "where"']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** clauses from real documents at your work. For each: what it follows, and one case where that matters.'));
out.push(table(['The clause', 'Follows the…', 'One case where it matters'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [2.2, 1, 2.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It says _______. That follows _______, so _______ is not covered / is covered, and nobody has thought about it._'));
out.push(p('**Listener task:** count how many clauses in the room follow a place where they were meant to follow the goods. ⚠ It is the commonest of the three and the most expensive.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _the room where the stock is held in it_ and _the branch which the stock is held_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note to the broker, and answer the questions.'));
out.push(box(null, [
  '**To the broker. 3 December. Three clauses, and what each of them follows.**',
  '**Clause 4 — stock.** *Stock held at the premises **where** the business is carried on.* ⚠ **This clause follows the place and not the goods.** So: the Mezzeh building, covered. The Baghdad Street building, covered. The yard container — **probably**, because the yard is at the Mezzeh premises, and *probably* is doing a lot of work in a sentence about five hundred cartons. Stock standing at a supplier\'s awaiting collection — **not covered**, and we have about 600,000 of wrap at Aleppo today.',
  '**Clause 9 — goods in transit.** *Goods in transit in a vehicle **whose** owner is the insured.* ⚠ **This clause follows the ownership of the vehicle**, so a load on Mr Jaber\'s lorry is not covered by it at all. We have believed since 2019 that it was, and the belief rests on nothing but the word *transit* in the heading.',
  '**Clause 12 — the period.** *Any claim arising in the period **when** the premium is paid up.* ⚠ **This follows the time of the claim and not the time of the loss** — which is the one of the three in our favour, because a loss in a lapsed month would still be claimable if we had paid by the time we claimed. ⚠ **I am pointing that out because it is in our favour and you may want to correct it**, and I would rather it were corrected than relied on.',
  '⚠ **What I am asking for.** A wording for clause 4 that follows the goods — *stock whose property has passed to the insured, wherever situated* — and confirmation in writing of what covers a load on a third-party vehicle.',
  '⚠ **And one thing about how this was found.** Nobody read these clauses. **I read them because Unit 11 of an English course made me ask what a relative pronoun was doing**, and the three findings above took about forty minutes. **They have been in the policy since 2019.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does each of the three clauses follow?'));
out.push(item('2', 'Which clause is in the company\'s favour, and what does the writer do about it?'));
out.push(item('3', 'How were the three findings made, and how long did they take?'));
out.push(box('Writer\'s box', [
  '**A note about wording — one paragraph per clause:** quote it, ⚠ **say what it follows**, then list what is in and what is out, **with a figure where there is one**.',
  '**Put *probably* where it belongs and then point at it.** *Probably, and probably is doing a lot of work in a sentence about five hundred cartons.*',
  '⚠ **Report the clause that favours you, and say you would rather it were corrected.** *I am pointing that out because it is in our favour and you may want to correct it.* ⚠ A note that reports only the clauses against you is a negotiating document; one that reports both is a reading, and it will be believed about the first kind.',
  '**Ask for a specific replacement wording, not a review.** *Stock whose property has passed to the insured, wherever situated.*',
  '⚠ **Say how it was found and how long it took.** *About forty minutes. They have been in the policy since 2019.* ⚠ The second sentence is the finding about the organisation, and it is larger than any of the three clauses.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take a real document at your work and write the note about what its clauses follow (**50 words or more**). Use the frame.'));
out.push(p('**To ______________. ______________. ______________ clauses, and what each follows.**   **Clause ______________.** *______________ **where** ______________.* ⚠ **This follows ______________ and not ______________.** So: ______________, covered. ______________ — **probably**. ______________ — **not covered**, and we have about ______________ today.   **Clause ______________.** *______________ **whose** ______________.* ⚠ This follows ______________, so ______________.   **Clause ______________.** ⚠ This one is in our favour, and ______________. I am pointing it out because ______________.   ⚠ **What I am asking for.** ______________.   ⚠ **And how this was found.** ______________, and it took about ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says report the clause that favours you. All three of yours are against you — is there really nothing in that document in your favour?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **does every clause say what it follows?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Each clause quoted and what it follows stated', ''],
  ['What is in, what is out, with a figure', ''],
  ['One clause that favours the writer, reported', ''],
  ['A specific replacement wording asked for', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the clause that favours them. The class says which writer they would trust about the rest of the document.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a document at your work that nobody has read (**100 to 140 words**). Say what it governs, how long it has been in force, and what you found when you read one paragraph of it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what they found_   ✓ _whose / where / when used for the right relation?_   ? _how long has it been in force, and who signed it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had anybody read the document since it was signed? Usually none — and in all three it took under an hour to find something.'));
out.push(box('Homework', ['Write your final text. Then read one clause of a real document at your work and write down what it follows — the goods, the place or the time (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 11.4 =======================
out.push(pb());
out.push(h2('11.4  The comma that changes a liability'));
out.push(p('**Function:** controlling what a sentence promises   ·   **Grammar:** the comma test   ·   **Pronunciation:** two sentences that sound the same and mean the opposite'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read these aloud to your partner. Can they hear the difference? _We will replace any item which is faulty. · We will replace any item, which is faulty._'));
out.push(p('**b**  What does the second one promise?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has the comma done?   **A** nothing   **B** promised to replace a whole order   **C** cancelled the guarantee'));
out.push(p('**b**  Listen again. **1** What is the four-second test? **2** What does Mr Attar say about the person who typed it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.7  "Read it without the clause"', [
  ['Mr Attar', 'Your terms say *we will replace any item, which is faulty on delivery.*'],
  ['Nour', 'That is the guarantee.'],
  ['Mr Attar', 'Read it without the clause.'],
  ['Nour', '*We will replace any item.*'],
  ['Mr Attar', 'That is what it promises. The clause is between commas, so it is an addition — and what it adds is the information that every item is faulty on delivery, which is an odd thing to tell a customer.'],
  ['Nour', 'It is meant to be *any item which is faulty on delivery*. Only the faulty ones.'],
  ['Mr Attar', 'Then the comma comes out, and the test is four seconds. ⚠ **Read the sentence without the clause. If it still says what you meant, the clause is an addition and keeps its commas. If it now says something larger than you meant, the clause was defining and the commas come out.**'],
  ['Nour', 'How long has that been in our terms?'],
  ['Mr Attar', 'Since September, and it has been sent to about thirty customers.'],
  ['Nour', 'Has anybody relied on it?'],
  ['Mr Attar', 'No, because nobody reads terms, which is the only reason this conversation is cheap. ⚠ And I want to say one thing about whoever typed it: **they did not make a mistake about commas. They typed what they would have said, and in speech there is a small pause there, and the pause is right.** The page is what is unforgiving.'],
  ['Nour', 'I typed it.'],
  ['Mr Attar', '⚠ I know. And in six years of this work I have found that comma eleven times, and ten of them were in documents written by careful people.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The four-second test**',
  table(['Step', 'Example'], [
    ['**1 · Read it without the clause.**', '*We will replace any item.*'],
    ['**2 · Does it still say what you meant?**', 'No — it promises the whole order.'],
    ['**3 · Then the clause was defining.**', 'Take the commas out.'],
    ['⚠ **If it does still say what you meant**', 'the clause is an addition — keep the commas.'],
    ['⚠ the rule in one line', 'commas = *by the way*; no commas = *which one*'],
  ], [2.4, 3]),
  '⚠ **Commas mean _by the way_; no commas mean _which one_.** *Any item, which is faulty* promises every item and adds a strange remark. *Any item which is faulty* promises the faulty ones.',
  '⚠ **The test takes four seconds and nothing else works**, because the two versions sound the same — in speech there is a small pause in both, and **the pause is right in speech**.',
  '⚠ **Nobody makes this error through carelessness.** It is the gap between the voice and the page, and it appears in documents written by careful people. ⚠ Say so when you find one in somebody else\'s work, because the writer will otherwise defend the sentence rather than test it.',
  '⚠ **The worst cases are *any*, *all* and *every*.** *All goods, which are inspected before dispatch* says every item is inspected; *all goods which are inspected before dispatch* says only the inspected ones are covered — and both may be wrong.',
  '**Practise:** Apply the test to each and say what the comma version promises. 1 any item which is faulty 2 all goods which are inspected 3 every invoice which is queried 4 any customer who pays on time 5 all stock which is held at our premises',
  '**Useful phrases:**  Read it without the clause.  ·  Does it still say what you meant?  ·  commas = by the way  ·  no commas = which one  ·  what does that promise?',
  '**Pronunciation – two sentences that sound the same.** 🔊 **Track 11.8** Listen to both versions read by the same voice. ⚠ They are almost indistinguishable, and that is the whole problem. Repeat both and then say which is which with your eyes closed — you cannot.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a clause from real terms; B applies the four-second test. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'It says *__________, which __________*.'],
  ['B', 'Read it without the clause.'],
  ['A', '*__________.*'],
  ['B', 'That is what it promises. ⚠ Does it still say what you meant?'],
  ['A', 'No. It means __________.'],
  ['B', 'Then the comma comes out.'],
  ['A', 'How long has it been there?'],
  ['B', 'Since __________, and it has gone to about __________ people.'],
]));
out.push(table(['Role card 1 — all goods', 'Role card 2 — the comma that should stay'], [[
  '"All goods, which are inspected before dispatch, are covered by our guarantee." ⚠ Without the clause: *all goods are covered by our guarantee* — which may be exactly what was meant, in which case the commas are right and the inspection remark is a boast. **Test first, then decide.**',
  '"Our second site, which opened in June, trades six days a week." ⚠ Without the clause: *our second site trades six days a week* — still true and still what was meant. **The commas stay.** B must resist taking them out, because by now the class removes every comma it sees.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the test for the class – **without the book**.'));
out.push(p('**Listener task:** write the sentence without the clause and then say whether the commas stay or go. ⚠ For role card 2 the answer is **stay**, and the class should notice how hard that is by now.'));
out.push(PHRASE_CARD(['Read it without the clause.', 'Does it still say what you meant?', 'commas = by the way', 'no commas = which one', 'what does that promise?', 'sometimes the commas stay']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** sentences from real documents at your work with *any*, *all* or *every* and a relative clause. Apply the test to each.'));
out.push(table(['The sentence', 'Without the clause, it says…', 'Commas: stay or go?'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [2.2, 2.2, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It says _______. Without the clause it says _______, which is / is not what was meant, so the commas go / stay._'));
out.push(p('**Listener task:** count how many of the room\'s sentences promise more than their writers intended. ⚠ Then count how many are in documents that have been sent to customers.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we will replace any item, which is faulty_ and _our second site which opened in June trades six days_. Correct them together — ⚠ and notice that the two faults are in opposite directions.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the correction notice, and answer the questions.'));
out.push(box(null, [
  '**CORRECTION TO OUR TERMS OF BUSINESS — clause 8. To all trade customers. 4 December.**',
  '**What clause 8 has said since 1 September.** *We will replace any item, which is faulty on delivery, free of charge within fourteen days.*',
  '**What it should say, and now says.** *We will replace any item which is faulty on delivery, free of charge within fourteen days.*',
  '⚠ **What the difference is.** One comma. With it, the clause is an addition and the promise is to replace **any item** — the whole order, faulty or not. Without it, the promise is to replace the faulty ones, which is what was intended and what we have always done.',
  '⚠ **Why we are writing to you about a comma.** Because for fourteen weeks our terms promised more than we meant, and **three of you could have relied on it** — two of you placed orders over a million in that period. ⚠ **If any of you did read clause 8 as written and ordered on that basis, tell us and we will honour it as written.** We think that is unlikely and we are not going to decide on your behalf that it did not happen.',
  '**What has not changed.** Fourteen days, free of charge, faulty on delivery, no return of made-to-order goods. ⚠ **The guarantee is the same guarantee it has always been in practice** — this is a correction to a sentence and not a reduction of a promise.',
  '⚠ **And how it was found.** By our auditor, reading clause 8 aloud. **Nobody here had read it since it was typed, including the person who typed it**, which is me.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What exactly is the difference between the two versions?'));
out.push(item('2', 'What does the company offer to anybody who relied on the wrong version?'));
out.push(item('3', 'How was the error found, and who had read the clause?'));
out.push(box('Writer\'s box', [
  '**A correction notice — six parts:** what it has said, quoted → what it now says, quoted → ⚠ **what the difference is** → ⚠ **why you are writing about a comma** → what has **not** changed → how it was found.',
  '**Quote both versions so that the reader can see one comma.** Describing the change would be absurd here; showing it takes two lines.',
  '⚠ **Offer to honour the wrong version if anybody relied on it.** *Tell us and we will honour it as written. We think that is unlikely and we are not going to decide on your behalf that it did not happen.* ⚠ That paragraph is the whole difference between a correction and a quiet retraction.',
  '⚠ **Say what has not changed, in a list.** A customer reading a correction assumes something has been taken away; four words of *what has not changed* prevent that.',
  '⚠ **Say how it was found and who had not read it.** *Nobody here had read it since it was typed, including the person who typed it, which is me.*',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a correction notice for a real sentence at your work (**50 words or more**). Use the frame.'));
out.push(p('**CORRECTION TO ______________. To ______________. ______________.**   **What it has said since ______________.** *______________.*   **What it now says.** *______________.*   ⚠ **What the difference is.** ______________. With it, ______________. Without it, ______________.   ⚠ **Why we are writing to you about ______________.** Because for ______________ our ______________ promised more than we meant. ⚠ **If any of you relied on it, tell us and we will honour it as written.**   **What has not changed.** ______________, ______________, ______________.   ⚠ **And how it was found.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says offer to honour the wrong version if anybody relied on it. Yours corrects the sentence and stops — what happens to somebody who read the old one?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **does this read as a correction or as a retraction?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Both versions quoted', ''],
  ['The difference explained, and what each version promises', ''],
  ['An offer to honour the wrong version', ''],
  ['What has not changed, listed', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their offer paragraph. The class says which notice they would rather receive as a customer.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a sentence at your work that promises more than anybody intends (**100 to 140 words**). Say what it says, what it was meant to say, how long it has said it, and what would happen if somebody relied on it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what it promises_   ✓ _the four-second test applied and shown?_   ? _how long has it said that, and to how many people?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had anybody relied on the sentence? Usually none — and that is luck, not design, because nobody reads terms until something has gone wrong.'));
out.push(box('Homework', ['Write your final text. Then apply the four-second test to every *any*, *all* and *every* sentence in one document at your work (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 11.5 =======================
out.push(pb());
out.push(h2('11.5  The invoice I queried'));
out.push(p('**Function:** leaving the relative out   ·   **Grammar:** the omitted object relative — and when it cannot be omitted   ·   **Pronunciation:** the join where the word has gone'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say *the invoice which I queried* and then *the invoice I queried*. Which do you say at work?'));
out.push(p('**b**  Which of these can lose its relative? _the invoice which I queried · the invoice which was queried_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is wrong with the sentence in the letter?   **A** a missing relative that cannot be left out   **B** the tense   **C** the figure'));
out.push(p('**b**  Listen again. **1** What is the rule Nadia gives? **2** What does the broken sentence turn out to mean?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.9  "You cannot leave that one out"', [
  ['Nadia', 'Your letter says *the invoice was raised from the order carries no quotation reference*.'],
  ['Nour', 'It does carry no reference. That is the point of the sentence.'],
  ['Nadia', 'Read it to me again slowly.'],
  ['Nour', '*The invoice was raised from the order carries no quotation reference.* …There are two verbs.'],
  ['Nadia', 'Two verbs and one subject, so one of them has nothing to belong to. You meant *the invoice **which** was raised from the order*.'],
  ['Nour', 'And I left out *which* because I have been leaving out *which* all week.'],
  ['Nadia', 'You have been leaving it out where it is the **object**: *the invoice I queried*, *the order he placed*, *the price we quoted*. ⚠ Those are fine and they are how people speak. **But where the relative is the subject of its own clause, it cannot go** — *the invoice which was raised* has nothing left to do the raising if you remove it.'],
  ['Nour', 'How do I tell which is which?'],
  ['Nadia', '⚠ **Look at what comes straight after the noun.** If it is a person or a thing — *the invoice **I** queried* — the relative was the object and can go. If it is a verb — *the invoice **was raised*** — the relative was the subject and must stay.'],
  ['Nour', 'And the sentence as it stands?'],
  ['Nadia', 'Means nothing at all, which is the good news. ⚠ **A missing subject relative produces a sentence nobody can read, so somebody queries it.** A missing comma produces a sentence everybody can read that means the opposite — **and that is the one that costs money.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Leaving the relative out — and the one case where you cannot**',
  table(['Sentence', 'Relative is…', 'Can it go?'], [
    ['the invoice **which** I queried', 'the **object** of *queried*', '✓ yes — *the invoice I queried*'],
    ['the order **which** he placed', 'the object of *placed*', '✓ yes'],
    ['the invoice **which** was raised from the order', '⚠ the **subject** of *was raised*', '⚠ **no**'],
    ['the customer **who** telephoned', '⚠ the subject of *telephoned*', '⚠ **no**'],
    ['⚠ the test', 'what comes straight after the noun?', 'a person/thing → go · a verb → stay'],
  ], [2.4, 1.6, 1.9]),
  '⚠ **The test: look at what comes straight after the noun.** *The invoice **I** queried* — a pronoun follows, so the relative was the object and can go. *The invoice **was raised*** — a verb follows, so the relative was the subject and must stay.',
  '⚠ **A missing object relative is normal, natural and correct**, and it is how everybody speaks: *the price we quoted*, *the day he came*, *the man I telephoned*.',
  '⚠ **A missing subject relative produces a sentence nobody can read.** That is the good news — somebody will query it. ⚠ **A missing comma produces a readable sentence that means the opposite, and that is the one that costs money.**',
  '⚠ **Never omit a relative in a non-defining clause.** ~~Ms Shamsi, I telephoned, has raised her price~~ is not a sentence.',
  '**Practise:** Say whether the relative can go, and why. 1 the invoice which I queried 2 the invoice which was queried 3 the customer who telephoned 4 the price which we quoted 5 the load which left at 10.30',
  '**Useful phrases:**  the invoice I queried  ·  the order he placed  ·  the invoice which was raised  ·  what comes after the noun?  ·  object out, subject stays',
  '**Pronunciation – the join where the word has gone.** 🔊 **Track 11.10** Listen: _the invoice I queried_ — no pause at all, and the two nouns run together. ⚠ A pause there makes a listener wait for a verb that never comes. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a broken sentence; B finds the missing relative and applies the test. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'It says *the __________ __________ carries __________*.'],
  ['A', 'That is what I meant.'],
  ['B', 'Read it to me slowly.'],
  ['A', '…There are two verbs.'],
  ['B', 'Two verbs and one subject. You meant *the __________ **which** __________*.'],
  ['A', 'And I left it out because I leave it out everywhere.'],
  ['B', 'Where it is the **object**, which is fine. ⚠ Here it is the subject. Look at what comes straight after the noun.'],
  ['A', 'A verb. So it stays.'],
]));
out.push(table(['Role card 1 — three broken sentences', 'Role card 2 — three correct ones'], [[
  '"The customer telephoned on Tuesday wants a credit." "The load left at 10.30 arrived at 4.20." "The man signed the sheet has gone home." ⚠ All three have lost a **subject** relative and all three are unreadable.',
  '"The price we quoted holds for fourteen days." "The order he placed is on the Thursday run." "The man I telephoned has the receipt." ⚠ All three are correct, natural and complete — B must resist putting *which* back, because by now the class is inserting it everywhere.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write each sentence and mark it *object — can go* or *subject — must stay*. ⚠ For role card 2 the answer is that all three are already right.'));
out.push(PHRASE_CARD(['the invoice I queried', 'the order he placed', 'the invoice which was raised', 'what comes after the noun?', 'object out, subject stays', 'never in a non-defining clause']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** sentences you have written with relative clauses. Mark each and repair any that need it.'));
out.push(table(['The sentence', 'Object or subject?', 'Right as it stands?'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [2.6, 1.3, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I wrote _______. The relative was the _______, so it can go / must stay._'));
out.push(p('**Listener task:** count how many sentences in the room were already right. ⚠ Most — and say so, because a class halfway through this unit starts correcting things that do not need it.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _the customer telephoned on Tuesday wants a credit_ and _the price which we quoted holds_ where nothing was wrong. Correct the first and leave the second.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**SIX SENTENCES FROM LAST MONTH\'S LETTERS, MARKED. For the office noticeboard. 5 December.**',
  table(['The sentence as sent', 'What is wrong, if anything'], [
    ['The price we quoted holds for fourteen days.', '⚠ **Nothing.** The relative was the object of *quoted* and is correctly left out. This is how everybody speaks and writes.'],
    ['The order he placed on the 14th is on the Thursday run.', '⚠ **Nothing.** Object again.'],
    ['The invoice was raised from the order carries no reference.', '**Broken.** *Which* was the subject of *was raised* and cannot go. ⚠ The sentence has two verbs and one subject and means nothing — **which is why Nadia queried it and why it never reached a customer.**'],
    ['The customer telephoned on Tuesday wants a credit.', '**Broken.** Same fault. ⚠ **This one did reach a customer**, who replied asking what we meant, politely.'],
    ['We will replace any item, which is faulty on delivery.', '⚠ **Readable and wrong.** The comma makes it a promise to replace any item. **Nobody queried it in fourteen weeks.**'],
    ['Ms Shamsi, who has supplied us since 2014, has raised her price.', '⚠ **Nothing.** A name, then an addition, two commas.'],
  ], [2.6, 3.4]),
  '⚠ **Why these six are on a noticeboard.** Two of the six are broken and were caught, one is broken and was sent, one is wrong and was not caught for fourteen weeks, and two are perfectly correct and look careless to anybody who has just learned the rule.',
  '⚠ **And the thing worth noticing about the fourth and the fifth.** The **broken** sentence reached a customer who asked what it meant, and the **readable, wrong** sentence reached thirty customers and nobody said a word. **The sentence that fails loudly is the cheap one.** ⚠ *Which is why the four-second comma test matters more than anything else in this unit.*',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which of the six sentences have nothing wrong with them?'));
out.push(item('2', 'What happened to the broken sentence that reached a customer?'));
out.push(item('3', 'What is the point the page makes about the fourth and fifth sentences?'));
out.push(box('Writer\'s box', [
  '**A marked-sentence page — two columns:** the sentence as sent, and ⚠ **what is wrong, if anything** — ⚠ **including the ones where the answer is _nothing_.**',
  '**Include correct sentences and say they are correct.** *Nothing. The relative was the object of *quoted* and is correctly left out.* ⚠ A page of only errors teaches a class to break working sentences.',
  '**Say what happened to each in the real world.** *This one did reach a customer, who replied asking what we meant, politely.*',
  '⚠ **Draw the comparison between the loud failure and the quiet one.** *The broken sentence reached one customer who asked. The readable, wrong sentence reached thirty and nobody said a word.* ⚠ **The sentence that fails loudly is the cheap one** — and that is the argument for ranking the comma above everything else in the unit.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take six real sentences from your own documents and mark them (**50 words or more**). Use the frame.'));
out.push(p('**SIX SENTENCES FROM ______________, MARKED.**   *______________* | ⚠ **Nothing.** The relative was the ______________ and is correctly left out.   *______________* | **Broken.** ______________ was the subject of ______________ and cannot go.   *______________* | ⚠ **Readable and wrong.** ______________.   *______________* | ⚠ **Nothing.**   ⚠ **Why these are on a noticeboard.** ______________ of the six are ______________, ______________ is ______________, and ______________ are perfectly correct.   ⚠ **And the thing worth noticing.** The broken sentence ______________ and the readable wrong one ______________. **The sentence that fails loudly is the cheap one.**'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says include correct sentences and say they are correct. All six of yours are errors — which of your sentences was already right?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **has the writer marked anything as wrong that was right?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Six sentences, as they were actually sent', ''],
  ['At least two marked *nothing wrong*', ''],
  ['What happened to each in the real world', ''],
  ['The loud-failure and quiet-failure comparison', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read a sentence they marked *nothing wrong*. The class says whether they would have corrected it an hour ago.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a sentence at your work that nobody could understand (**100 to 140 words**). Say what it said, who queried it, how quickly, and what it was supposed to say.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _who queried it and how quickly_   ✓ _object and subject relatives handled correctly?_   ? _would a readable version of the same error have been queried at all?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the unreadable sentence queried within a day? Usually all three. ⚠ And in how many has anybody ever queried a readable sentence that was wrong?'));
out.push(box('Homework', ['Write your final text. Then mark six sentences from your own documents, and make sure at least two of them are marked *nothing wrong* (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 11.6 =======================
out.push(pb());
out.push(h2('11.6  One paragraph of terms, read twice'));
out.push(p('**Function:** defining and adding together   ·   **Grammar:** both clause types in one paragraph   ·   **Pronunciation:** a paragraph of terms read aloud to somebody who has not seen it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Take any paragraph of terms at your work. Read it aloud to your partner once. Can they say what it requires?'));
out.push(p('**b**  Why is a paragraph with four relative clauses in it hard to read aloud?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala find when the paragraph is read to her twice?   **A** nothing   **B** that one clause defines and she had heard it as an addition   **C** that it is too long'));
out.push(p('**b**  Listen again. **1** What does she say about hearing it the first time? **2** What is the rule they arrive at for a paragraph of terms?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.11  "Read it to me again"', [
  ['Nour', '*A customer who holds a written quotation, which is valid for fourteen days, is entitled to the quoted price on any order, which is placed within that period.*'],
  ['Hala', 'So a written quotation lasts fourteen days and the price holds.'],
  ['Nour', 'Read it again.'],
  ['Hala', '…*any order, which is placed within that period.* With commas. So it is every order, and the clause is just telling me they are all placed within the period, which is not true.'],
  ['Nour', 'Which means the paragraph entitles a customer with a quotation to the quoted price on **any order at all**, for ever.'],
  ['Hala', 'And the first time I heard it, it sounded completely normal.'],
  ['Nour', 'That is the problem with a paragraph of terms. ⚠ **Four relative clauses in one sentence and the reader hears the one they expect.**'],
  ['Hala', 'What is the rule?'],
  ['Nour', '⚠ **One clause per sentence in a paragraph of terms.** Not because long sentences are bad, but because the test in 11.4 only works on one clause at a time, and nobody applies it four times in a sentence they are reading at speed.'],
  ['Hala', 'And this paragraph as four sentences?'],
  ['Nour', '*A written quotation is valid for fourteen days from its date. A customer who holds a written quotation is entitled to the quoted price. The entitlement applies to any order which is placed within the fourteen days. Thereafter the current list applies.*'],
  ['Hala', 'That I could act on at the counter without reading it twice. ⚠ **And I have just realised I have been honouring quotations for about a month on the basis of the version I heard.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A paragraph of terms — one clause per sentence**',
  table(['Instead of', 'Write'], [
    ['one sentence with four clauses', '⚠ **four sentences with one clause each**'],
    ['*A customer who holds a quotation, which is valid for fourteen days, is entitled…*', '*A written quotation is valid for fourteen days. A customer who holds one is entitled…*'],
    ['a definition inside a clause', 'a definition in **its own sentence**, first'],
    ['⚠ the reason', 'the comma test works on one clause at a time'],
  ], [2.6, 3]),
  '⚠ **One clause per sentence in a paragraph of terms.** Not because long sentences are bad — ⚠ **because the four-second test only works on one clause at a time, and nobody applies it four times in a sentence they are reading at speed.**',
  '⚠ **Put the definition first, in its own sentence.** *A written quotation is valid for fourteen days from its date.* Then every later sentence can refer to it without re-defining it in a clause.',
  '⚠ **Read a paragraph of terms aloud to somebody who has not seen it, twice.** ⚠ The first hearing tells you what a reader **expects** it to say; the second tells you what it says. The gap between the two is the fault.',
  '⚠ **A reader hears the clause they expect.** That is not carelessness: four clauses in one sentence exceed what anybody holds while reading at working speed.',
  '**Practise:** Break each into one clause per sentence. 1 the quotation paragraph 2 a returns paragraph 3 a delivery paragraph 4 a payment paragraph 5 a claims paragraph',
  '**Useful phrases:**  A … is valid for…  ·  A customer who holds one is entitled…  ·  The entitlement applies to any order which…  ·  Thereafter…  ·  Read it to me again.',
  '**Pronunciation – terms read aloud to somebody who has not seen them.** 🔊 **Track 11.12** Listen to the four-clause version and then the four-sentence version. ⚠ The first is a sentence you can follow and not hold; the second you can act on. Repeat the four short sentences.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a paragraph of terms twice; B says what they heard the first time and what it says the second. Use the skeleton, then the cards.'));
out.push(dlg(null, [
  ['A', '*__________ which __________, which __________, __________ on any __________, which __________.*'],
  ['B', 'So __________ and __________.'],
  ['A', 'Read it again.'],
  ['B', '…*any __________, which __________.* With commas. So it is every __________.'],
  ['A', 'Which means it promises __________.'],
  ['B', '⚠ And the first time I heard it, it sounded completely normal.'],
  ['A', 'How would you write it?'],
  ['B', '__________ sentences, one clause each.'],
]));
out.push(table(['Pair 1 — for A to read', 'Pair 2 — for B to read'], [[
  '*Goods which are returned in their original packaging, which must be unopened, will be credited in full on any return, which is made within fourteen days.* ⚠ Two of the three clauses are punctuated as additions and the paragraph promises a full credit on **any** return.',
  '*A customer whose account is in credit, which is checked monthly, may place an order on any terms, which are agreed in writing.* ⚠ As written, any customer may place an order on any terms at all.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs do the double reading for the class – **without the book**.'));
out.push(p('**Listener task:** write what you heard the first time and what it says. ⚠ Then rewrite it as one clause per sentence and count the sentences.'));
out.push(PHRASE_CARD(['A … is valid for…', 'A customer who holds one…', 'applies to any order which…', 'Thereafter…', 'Read it to me again.', 'one clause per sentence']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take a real paragraph of terms from your work. Read it to two colleagues twice each, then rewrite it.'));
out.push(table(['Who I read it to', 'What they heard first', 'What it says', 'My version, in sentences'], [['', '', '', ''], ['', '', '', '']], [1, 1.4, 1.4, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _They heard _______. It says _______. My version is _______ sentences with one clause each._'));
out.push(p('**Listener task:** count how many paragraphs in the room said something different from what everybody heard. ⚠ Then ask how long each has been in use.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _goods which are returned in their original packaging, which must be unopened, will be credited_ and correct the punctuation. Then break it into sentences.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the rewritten terms, and answer the questions.'));
out.push(box(null, [
  '**TERMS OF BUSINESS — clause 12, rewritten. Effective 8 December. ⚠ One clause per sentence.**',
  '⚠ **What clause 12 said until today.** *A customer who holds a written quotation, which is valid for fourteen days, is entitled to the quoted price on any order, which is placed within that period.*',
  '**What it says now.** **12.1** A written quotation is valid for fourteen days from the date on it. **12.2** A customer who holds a valid written quotation is entitled to the quoted price. **12.3** The entitlement applies to any order which is placed within the fourteen days. **12.4** After the fourteen days the current price list applies.',
  '⚠ **What was wrong, and it was not the length.** The old clause 12 had four relative clauses and two of them were punctuated as additions. Read as written, it entitled any customer holding any quotation to the quoted price **on any order at all, with no time limit**. ⚠ **Read aloud, it sounds exactly like what we meant** — which is why it survived three months and two readings by me.',
  '⚠ **What it has cost.** Mrs Mourad honoured a quotation from August on a November order, on the basis of the clause as she had heard it read, for about 90,000 below list. **She was right to**, because that is what the clause said. ⚠ **The 90,000 is ours and she will not be asked about it again.**',
  '**And why it is now four numbered sentences.** So that each one can be read on its own at a counter, and so that the comma test can be applied to each one in four seconds. ⚠ **One clause per sentence is not a style; it is what makes a clause testable.**',
  '⚠ **One thing we are not claiming.** This is the second clause in three months found to say more than we meant. **I am not going to describe clause 12 as an isolated error** — I am going to read all nineteen clauses aloud to somebody who has not seen them, and I will report what I find whether it is in our favour or not.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What did the old clause entitle a customer to, read as written?'));
out.push(item('2', 'What did it cost, and what does the company say about the person who applied it?'));
out.push(item('3', 'What does the company refuse to describe clause 12 as?'));
out.push(box('Writer\'s box', [
  '**Rewritten terms — five parts:** the old clause quoted → ⚠ **the new one, numbered, one clause per sentence** → what was wrong, ⚠ **and that it was not the length** → ⚠ **what it has cost, and that the person who applied it was right** → why it is now numbered sentences.',
  '**Say that the old version sounded right.** *Read aloud, it sounds exactly like what we meant — which is why it survived three months and two readings by me.*',
  '⚠ **Name the cost and clear the person.** *She was right to, because that is what the clause said. The 90,000 is ours and she will not be asked about it again.* ⚠ Anything less makes every future application of a clause a risk to the applier.',
  '**Say why the numbering exists.** *So that the comma test can be applied to each one in four seconds.* ⚠ *One clause per sentence is not a style; it is what makes a clause testable.*',
  '⚠ **Refuse to call it isolated, and say what you will do instead.** *This is the second in three months. I am going to read all nineteen aloud to somebody who has not seen them, and I will report what I find whether it is in our favour or not.*',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Rewrite a real paragraph of terms (**50 words or more**). Use the frame.'));
out.push(p('**______________ — clause ______________, rewritten. Effective ______________. ⚠ One clause per sentence.**   ⚠ **What it said until today.** *______________.*   **What it says now.** **.1** ______________. **.2** ______________. **.3** ______________. **.4** ______________.   ⚠ **What was wrong, and it was not the length.** ______________ relative clauses and ______________ were punctuated as additions. Read as written it ______________. ⚠ Read aloud, it sounds like what we meant.   ⚠ **What it has cost.** ______________. **They were right to**, because that is what it said.   **Why it is now numbered sentences.** ______________.   ⚠ **One thing we are not claiming.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says name the cost and clear the person. Yours says the clause was misapplied — who applied it, and were they wrong to?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Read your partner\'s new version aloud to them once. Can they say what it requires? Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The old clause quoted in full', ''],
  ['The new one numbered, one clause per sentence', ''],
  ['That the old version sounded right', ''],
  ['The cost named and the person cleared', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *what it has cost*. The class says which company they would rather work for.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a paragraph at your work that everybody has been applying as they heard it (**100 to 140 words**). Say what it says, what everybody thinks it says, and what the difference has cost or saved.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what everybody thinks it says_   ✓ _one clause per sentence in their rewrite?_   ? _has the difference cost or saved, and who applied it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many has the misreading **saved** the company money? At least one, usually — and that is the uncomfortable case, because correcting it costs something and nobody will thank anybody for it.'));
out.push(box('Homework', ['Write your final text. Then read one paragraph of your workplace\'s terms aloud to somebody who has not seen it, twice, and write down the gap (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 11.7 =======================
out.push(pb());
out.push(h2('11.7  Review & Mediate: the page before the conditions'));
out.push(p('**Function:** explaining defined terms to somebody who must apply them   ·   **Review:** defining · adding · *whose/where/when* · the comma test · the omitted relative · one clause per sentence'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 11 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What is the test for a defining clause, and what does it count?',
  '**2** What do two commas round a clause tell a reader?',
  '**3** What is the difference between *whose* and *where* in a policy clause?',
  '**4** What is the four-second test, and what does it decide?',
  '**5** When can a relative not be left out?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala need from the terms?   **A** the whole document   **B** the definitions page, because the conditions use its words   **C** the prices'));
out.push(p('**b**  Listen again. **1** Why does she say the definitions page matters more than the conditions? **2** What does she find in a definition?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.13  "I need the page before the conditions"', [
  ['Hala', 'If I am applying clause 12 at the counter, I need the page before it.'],
  ['Nour', 'The definitions?'],
  ['Hala', 'Every condition is made of the words on that page. Clause 12 says *a valid written quotation*, and whether somebody has one is decided on page one and not in clause 12.'],
  ['Nour', 'Page one says *"written quotation" means a quotation issued on our quotation form and signed by an authorised signatory*.'],
  ['Hala', 'Then about half of what I have been treating as quotations are not. I write prices on the back of an order pad about four times a week.'],
  ['Nour', '…So do I.'],
  ['Hala', 'And when somebody brings one of those back, I honour it, because it has my handwriting on it and the price on it. **Under page one it is not a quotation at all** and I have no authority to honour it — and I have been honouring them for two years.'],
  ['Nour', 'You have been doing the right thing by the customer and the wrong thing by the document.'],
  ['Hala', '⚠ Which means one of the two is wrong, and I do not think it is me. **Either the definition should include a written price on any of our paper, or we should stop writing prices on order pads** — and the second one is not going to happen, because a customer standing at the counter wants a number on something.'],
  ['Nour', 'So the definition is wrong and the practice is right.'],
  ['Hala', '⚠ **And the definition has been wrong since 2019, and the only reason nobody has found it is that nobody at a counter has ever read page one.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – explaining defined terms to somebody who must apply them**',
  table(['To orient them', 'To find the fault', 'To place it'], [
    ['Every condition is made of the words on that page.', 'Then half of what I treat as X are not X.', 'The definition is wrong and the practice is right.'],
    ['Whether somebody has one is decided on page one.', 'I have been honouring them for two years.', 'Nobody at a counter has ever read page one.'],
  ], [2, 2, 2.1]),
  '⚠ **Start with the definitions and not the conditions.** *Every condition is made of the words on that page* — whether clause 12 applies is decided by the definition of *written quotation*, not by clause 12.',
  '⚠ **Ask the person who applies it what they actually treat as the defined thing.** *I write prices on the back of an order pad about four times a week.* ⚠ The gap between the definition and the practice is invisible from the office and obvious at the counter.',
  '⚠ **Then decide which is wrong.** *One of the two is wrong and I do not think it is me.* ⚠ A definition that excludes what everybody does is a defective definition, not a workforce problem — and the test is whether the practice is the right thing to do for the customer.',
  '⚠ **Say how long and why nobody found it.** *Since 2019, and nobody at a counter has ever read page one.* ⚠ The definitions page is read by whoever drafts and by nobody who applies.',
  '**Practise:** Explain a definitions page to somebody who applies the conditions. Ask what they treat as the defined thing, and decide which is wrong.',
  '**Useful phrases:**  I need the page before the conditions.  ·  Every condition is made of those words.  ·  Then half of what I treat as X are not.  ·  One of the two is wrong.  ·  Nobody who applies it has read it.',
  '**Pronunciation – reading a definition aloud to somebody who will apply it.** 🔊 **Track 11.14** Listen: _"written quotation" **means** a quotation issued on our quotation form **and** signed by an authorised signatory_. ⚠ *Means* and *and* both stressed, because a definition with two requirements is failed by missing either. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a definition; B says what they actually treat as the defined thing. Then decide which is wrong.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  '*"Delivery" means delivery to the customer\'s registered trading address.* ⚠ B delivers to building sites, lock-ups and a man\'s brother\'s shop. Under the definition, none of those is a delivery, so risk has never passed on any of them.',
  '*"Working day" means a day on which our office is open.* ⚠ B works Saturdays at the counter when the office is shut, so a Saturday is not a working day — which means the fourteen-day price hold is longer than anybody thinks and the three-day claim window is shorter.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the definition, what the person actually treats as the defined thing, and which of the two is wrong. ⚠ Then say how long the gap has existed.'));
out.push(PHRASE_CARD(['I need the page before the conditions.', 'made of those words', 'half of what I treat as X', 'One of the two is wrong.', 'and it is not me', 'nobody who applies it has read it']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a definitions page. Take it to **two** people who apply the conditions and collect what each treats as the defined thing.'));
out.push(table(['Who I asked', 'The definition', 'What they actually treat as it', 'Which is wrong'], [['', '', '', ''], ['', '', '', '']], [1, 1.4, 1.6, 1.4]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what the definitions page turned out to exclude. This is the **eleventh** unit of this book, and the thing nobody writes down is the one the unit has been building to: **a definitions page is read by whoever drafts it and by nobody who applies it — so every definition narrower than the practice has been failed every day since it was written, by people doing the right thing.**'));
out.push(p('_The definition says _______. What we actually do is _______. One of the two is wrong, and it has been wrong since _______._'));
out.push(p('**Listener task:** add to the Book 1 office-word list: _a defined term · for the purposes of this agreement · includes · excludes · construed · the effect of the comma._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 2)', 10));
out.push(p('⚠ **This unit practises Part 2: matching.** Five people need an answer. Read the five definitions **A–E** and choose the one that decides each question.'));
out.push(box(null, [
  '**A**  _"Written quotation" means a quotation issued on our quotation form and signed by an authorised signatory._',
  '**B**  _"Delivery" means delivery to the customer\'s registered trading address._',
  '**C**  _"Working day" means a day on which our office is open._',
  '**D**  _"Goods" means goods of the kind described in the order and does not include goods made to the customer\'s own measurements._',
  '**E**  _"Account in credit" means an account on which no sum is due at the date of the order._',
], 'FFFFFF', C.navy));
[
  '**1**  A customer wants to return shelving cut to his own sizes. Which definition decides it?',
  '**2**  A customer brings back a price written on an order pad. Which definition decides it?',
  '**3**  A load was left at a lock-up and has gone missing. Which definition decides whether risk had passed?',
  '**4**  A claim was made on the third Saturday. Which definition decides whether it was in time?',
  '**5**  A customer with one overdue invoice wants to order on terms. Which definition decides it?',
].forEach(t => out.push(p(t + '   **A** · **B** · **C** · **D** · **E**', { indent: 200, after: 50 })));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 1 — an internal note, 35 to 45 words.** Here: telling a colleague which definition decides the thing they are about to do.',
  'The shape: **the definition, quoted or summarised** · ⚠ **what it excludes that they are doing** · **what to do until it is fixed**.',
  '⚠ **In forty words the exclusion is the point.** A note that explains a definition without saying what it leaves out has told the reader nothing they can act on.',
  '⚠ And the interim instruction carries your own name, as in 6.7 — not an invented rule, but what to do until somebody decides.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** A definition at your work excludes something a colleague does every week. Write them a note (**35 to 45 words**). Give **the definition**, ⚠ **what it excludes**, and **what to do until it is fixed**.'));
out.push(p('______________, page one says "______________" means ______________. That excludes ______________, which you do ______________. Until it is changed: ______________, and tell me each time. That is mine, not the document\'s.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The definition, quoted or summarised accurately', ''],
  ['What it excludes that the reader does', ''],
  ['An interim instruction, owned by the writer', ''],
  ['35 to 45 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Rewrite a paragraph of terms from your work in full (**100 to 140 words**): one clause per sentence, numbered, with the definition first, every defining clause unpunctuated, every addition in two commas, and a note of what the old version said.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then take your workplace\'s definitions page to one person who applies the conditions and write down what it excludes (50+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 11 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  Four customers have not paid. _The customer ___ has not paid_ is therefore wrong because it ___.   a) who / leaves four   b) who / is ungrammatical   c) that / is informal',
  '2  Ms Shamsi is our only Aleppo supplier. Write:   a) our supplier who is in Aleppo   b) Ms Shamsi, who is in Aleppo,   c) Ms Shamsi who is in Aleppo',
  '3  stock ___ property has passed to us   a) where   b) which   c) whose',
  '4  the premises ___ the business is carried on   a) whose   b) where   c) which',
  '5  _We will replace any item, which is faulty._ Without the clause this promises ___.   a) only faulty items   b) nothing   c) every item',
  '6  Which can lose its relative?   a) the invoice which I queried   b) the invoice which was raised   c) the customer who telephoned',
  '7  _The customer telephoned on Tuesday wants a credit._ This is wrong because ___.   a) a subject relative is missing   b) an object relative is missing   c) a comma is missing',
  '8  In a paragraph of terms, how many relative clauses per sentence?   a) as many as needed   b) two   c) one',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 11.15** Listen to the exchange. Complete the note.   The definition, in full: ______   What Hala actually does: ______   How often: ______   Which of the two is wrong: ______   How long it has been wrong: ______'));
out.push(dlg('Track 11.15  Audio script (read after the check)', [
  ['Nour', 'Page one says "written quotation" means a quotation issued on our quotation form and signed by an authorised signatory.'],
  ['Hala', 'Then about half of what I treat as quotations are not. I write prices on the back of an order pad about four times a week, and when somebody brings one back I honour it.'],
  ['Hala', 'Under page one it is not a quotation at all and I have no authority to honour it. I have been doing it for two years.'],
  ['Hala', 'So one of the two is wrong and I do not think it is me. Either the definition should include a written price on any of our paper, or we stop writing prices on order pads — and the second will not happen.'],
  ['Nour', 'So the definition has been wrong since 2019, and nobody at a counter has ever read page one.'],
]));
out.push(p('**C  Writing.** Rewrite three sentences of terms from your work (**50 words or more**): one clause per sentence, defining clauses with no commas, additions in two commas, and say what one of them said before.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 11)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ define down to one, and count what a clause leaves',
  '☐ name first and then add, with two commas',
  '☐ use *whose*, *where* and *when*, and say what a clause follows',
  '☐ apply the four-second comma test, and leave the commas where they belong',
  '☐ leave out an object relative and keep a subject one',
  '☐ write terms with one clause per sentence, definition first',
  '☐ take a definitions page to the person who applies it, and find what it excludes',
  '☐ write a list that replaces a sentence, a paragraph written twice, a correction notice and rewritten terms',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 11 · Student\'s Book');
