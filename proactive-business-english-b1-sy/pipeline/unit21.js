// Proactive Business English B1 · Syria Edition · Book 2 · Unit 21 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a stated position · an interest · an opening position · a reservation price · a walk-away point · a fall-back · leverage · a bargaining chip · to table an offer · to improve an offer · to split the difference · a conditional concession · a reciprocal concession · an anchor · a deadlock · to break a deadlock · a face-saving formula · the non-negotiable · a side letter · a term sheet · the agreed terms · a point of principle · to reopen a settled point · to be bound · in good faith · without commitment · to shake hands on · a trade · a package · to concede a point';
const BACK_AT_B1 = 'negotiate · counter-offer · in principle';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 21  Negotiating and Compromise'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**21.1**  separate what somebody wants from what they need',
  '**21.2**  state the condition that makes yes possible',
  '**21.3**  make a conditional offer, and never a concession without one',
  '**21.4**  respond to a move so that it keeps moving',
  '**21.5**  say what you will not trade, whatever else you agree',
  '**21.6**  write the two-column page before the meeting',
  '**21.7**  Review & Mediate: two people who both compromised',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ A year, not an order', [
  '**The hundred cartons went on 10 April** and on the 14th Ms Tannous wrote again. ⚠ **She does not want another order; she wants an arrangement for the year** — a consignment every month — and she has asked for **seven per cent off the price** and **ninety days to pay.**',
  '⚠ **Neither of those can be given as they stand.** Seven per cent is most of the margin on an export carton, and ninety days cannot be funded by a company that pays for generator fuel in cash every week. ⚠ **And a flat refusal ends the only arrangement anybody here has ever been offered from outside Syria.**',
  '**So this unit is one negotiation, from both ends.** ⚠ **It is also the first negotiation this company has prepared for on paper rather than conducted on the telephone** — and the page it prepares is written before the meeting and not after it.',
], C.lyellow, C.orange));

// ======================= CYCLE 21.1 =======================
out.push(pb());
out.push(h2('21.1  What they want, and what they need'));
out.push(p('**Function:** separating a position from an interest   ·   **Grammar:** _she is asking for … · what she actually needs is …_   ·   **Pronunciation:** the two halves kept apart'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of something somebody asked you for at work. Say what they asked for, and then why they asked.'));
out.push(p('**b**  Which is the need? _He wants a discount. · He has to show his own manager that the price came down. · He wants it cheaper._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour decide Ms Tannous actually needs?   **A** seven per cent   **B** a date she can give her own customer   **C** ninety days'));
out.push(p('**b**  Listen again. **1** What question produced the answer? **2** What does Mr Ayoub say about the two things she asked for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.1  "Ask what she will tell her customer"', [
  ['Mr Ayoub', 'Seven per cent and ninety days. Which one does she care about?'],
  ['Nour', 'I do not know. She asked for both in the same sentence.'],
  ['Mr Ayoub', '⚠ **Then you are negotiating against a sentence and not against a person.** What do you know about her year?'],
  ['Nour', 'She sells to one customer, mostly. He takes about eight hundred cartons a year and he orders at short notice.'],
  ['Mr Ayoub', '⚠ **So ask her what she will tell him.** Not what she wants from us — ⚠ **what she has to be able to say to him.**'],
  ['Nour', 'I telephoned her. She said: *I need to be able to tell him a date in the month and be right.*'],
  ['Mr Ayoub', 'And the seven per cent?'],
  ['Nour', '⚠ **She said *and obviously the price matters*, and then she went back to the dates for four minutes.** ⚠ **She spent four minutes on the dates and nine words on the price.**'],
  ['Mr Ayoub', '⚠ **Then the price is her position and the date is her interest.** ⚠ **A position is what somebody asks for; an interest is what they are trying to do.** And you can sometimes give a man what he needs without giving him what he asked for.'],
  ['Nour', 'Is the discount not real?'],
  ['Mr Ayoub', '⚠ **It is perfectly real and she will take it if we give it.** ⚠ **But it is not what she is frightened of.** She is frightened of telling her customer the twelfth and it arriving on the twenty-first, ⚠ **which happened to her once, with us, in January.**'],
  ['Nour', 'So the nine cartons are in this letter.'],
  ['Mr Ayoub', '⚠ **Everything that has gone wrong between two companies is in the next thing they ask each other for**, and it is usually not mentioned. The seven per cent is January, written as a number.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A position and an interest**',
  table(['', 'What it is', 'In this negotiation'], [
    ['**a stated position**', 'what they ask for', 'seven per cent off, and ninety days'],
    ['⚠ **an interest**', '⚠ **what they are trying to do**', '⚠ **to tell her customer a date in the month and be right**'],
    ['**the question that finds it**', '⚠ **what will you tell your customer?**', 'not *what do you want from us?*'],
    ['**the evidence**', '⚠ **time spent, not words used**', '⚠ **four minutes on the dates, nine words on the price**'],
  ], [1.7, 2, 2.3]),
  '⚠ **A position is what somebody asks for; an interest is what they are trying to do** — and ⚠ **you can sometimes give a person what they need without giving them what they asked for.**',
  '⚠ **The question that finds an interest is never *what do you want?*** It is ⚠ ***what will you tell your own customer?*** or *what happens to you if this goes wrong?* **Both ask about somebody who is not in the room**, and that is why they work.',
  '⚠ **Measure by time and not by words.** ⚠ *Four minutes on the dates and nine words on the price.* **People talk at length about what frightens them and briefly about what they have been told to ask for.**',
  '⚠ **The position is real and they will take it.** ⚠ **It is simply not the thing they are frightened of** — and a negotiation that answers only the position buys nothing, because the fear is still there afterwards.',
  '⚠ **And look for the last thing that went wrong.** ⚠ *Everything that has gone wrong between two companies is in the next thing they ask each other for, and it is usually not mentioned.* **The seven per cent is January, written as a number.**',
  '**Practise:** For each, write the position and the interest. 1 a discount 2 ninety days 3 a written guarantee 4 a meeting with the owner 5 a penalty clause',
  '**Useful phrases:**  she is asking for …  ·  what she actually needs is …  ·  what will you tell your customer?  ·  four minutes on this and nine words on that  ·  it is her position, not her interest  ·  the last thing that went wrong',
  '**Pronunciation – the two halves kept apart.** 🔊 **Track 21.2** Listen: _she is asking for seven per CENT // what she actually needs is a DATE she can be right about._ ⚠ A clear break between the halves, and the second half slower. **Said in one breath it sounds like a refusal; said in two it sounds like an analysis.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A states what somebody asked for; B finds the interest. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', '__________ and __________. Which one does __________ care about?'],
  ['A', 'I do not know. __________ asked for both in the same sentence.'],
  ['B', '⚠ Then you are negotiating against a sentence. What do you know about __________?'],
  ['A', '__________.'],
  ['B', '⚠ So ask __________ what __________ will tell __________.'],
  ['A', '__________ said: *__________*.'],
  ['B', '⚠ Then __________ is the position and __________ is the interest.'],
]));
out.push(table(['Role card 1 — seven per cent and ninety days', 'Role card 2 — the time test'], [[
  'She asked for both in one sentence. ⚠ **Four minutes on the dates and nine words on the price.** Her customer takes about eight hundred cartons a year at short notice, ⚠ **and in January she told him the twelfth and it came on the twenty-first.** The interest is a date she can be right about.',
  'A reports a conversation; B\'s only job is to ask ⚠ **how long each thing was talked about.** ⚠ **Then rank them by minutes and not by order of mention** — the thing asked for first is usually the position, **because it is the thing somebody rehearsed before they telephoned.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the position, the interest, and the question that found it. ⚠ Then write the last thing that went wrong between the two companies.'));
out.push(PHRASE_CARD(['she is asking for …', 'what she needs is …', 'what will you tell your customer?', 'four minutes and nine words', 'position, not interest', 'the last thing that went wrong']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** things somebody has asked you for. Write the position, the interest, and the evidence.'));
out.push(table(['Who', 'The position — what they asked for', 'The interest — what they are trying to do', 'The evidence'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [0.8, 1.8, 2, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ is asking for _______. What _______ actually needs is _______, and I know because _______._'));
out.push(p('**Listener task:** count the interests in the room that are about somebody not in the room. ⚠ Then ask how many were found by asking *what will you tell your customer?*'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _he wants it cheaper_ offered as an interest. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**WHAT SHE IS ASKING FOR, AND WHAT SHE NEEDS. 16 April. N. Mansour. ⚠ From a telephone call of twenty-two minutes.**',
  table(['Asked for', 'Minutes spent on it', 'What it is really for', 'Position or interest'], [
    ['**seven per cent off**', '⚠ **under one**', '⚠ **unknown — she said *obviously the price matters* and moved on**', '⚠ **position**'],
    ['**ninety days to pay**', 'about two', 'her customer pays her at sixty', 'position, with a real cause behind it'],
    ['⚠ **a date in the month she can be right about**', '⚠ **four**', '⚠ **she tells her customer a date and he books a lorry against it**', '⚠ **interest**'],
    ['the stencil code on every order', 'three', 'January', '⚠ **interest, and it is the one she did not ask for**'],
    ['somebody who answers in the evening', 'two', 'her day ends when ours has finished', 'interest'],
  ], [1.6, 0.9, 2.3, 1.4]),
  '⚠ **She asked for two things and needs four, and the two she asked for are the two she spent least time on.** ⚠ **Three of the four needs were never put as requests at all**: they came out while she was explaining why the price mattered.',
  '⚠ **The fourth is the one to notice.** *The stencil code on every order* is not a commercial term and she did not ask for it. ⚠ **She described January three times in twenty-two minutes** — the nine cartons, her agent at the port, the deduction her customer made — **and never once asked us to do anything about it.**',
  '⚠ **What this changes.** We were preparing to argue about seven per cent. ⚠ **We are now preparing to offer a date list, the code on every order, and an evening telephone number** — **none of which costs anything** — and to deal with the price separately and last.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many things did she ask for, and how many does she need?'));
out.push(item('2', 'Which need was never put as a request, and how was it found?'));
out.push(item('3', 'What does the writer now intend to offer, and what does it cost?'));
out.push(box('Writer\'s box', [
  '**What they are asking for and what they need — four parts:** **a table: *asked for · minutes spent · what it is really for · position or interest*** → ⚠ **how many they asked for against how many they need** → ⚠ **the need that was never a request** → **what this changes about your preparation.**',
  '⚠ **Put the minutes in.** ⚠ *Under one minute on the price and four on the dates* is the whole analysis, **and it is a measurement rather than an impression** — which means somebody else can disagree with it properly.',
  '⚠ **Write *unknown* where you do not know.** *She said obviously the price matters and moved on.* ⚠ **An invented interest is worse than a blank**, because the whole page will then be built on it.',
  '⚠ **Look for the need that was never a request.** ⚠ *She described January three times and never once asked us to do anything about it.* **People do not ask for the thing they have stopped expecting** — and that is usually the cheapest thing on the page to give.',
  '⚠ **Count what the needs cost.** ⚠ *A date list, the code on every order, an evening telephone number — none of which costs anything.* **A negotiation that has found the interests usually finds that most of them are free.**',
  '⚠ **And say what the page changes.** *We were preparing to argue about seven per cent.* ⚠ **The page is only worth writing if it moves the preparation**, and it should say so in a line.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *what they are asking for and what they need* for a negotiation at your work (**60 words or more**). Use the frame.'));
out.push(p('**WHAT ______________ IS ASKING FOR, AND WHAT ______________ NEEDS. ______________. ______________. ⚠ From ______________.**   **______________** | ⚠ **______________** | ⚠ **______________** | ⚠ **position**   **______________** | ______________ | ______________ | ______________   ⚠ **______________** | ⚠ **______________** | ⚠ **______________** | ⚠ **interest**   ⚠ **______________ asked for ______________ things and needs ______________**, and ⚠ **______________ were never put as requests at all.**   ⚠ **The one to notice.** ______________ is ______________ and ______________ did not ask for it. ⚠ ______________ described ______________ ______________ times and never once asked us to ______________.   ⚠ **What this changes.** We were preparing to ______________. ⚠ We are now preparing to ______________ — **______________** — and to deal with ______________ separately and last.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 and one move — name the reader, then quote, ask, stop', [
  '"**I am reading this as the person on the other side of the table, who has seen the page by accident.** The box says write *unknown* where you do not know. Your third row gives a reason for something they only mentioned once — ⚠ **is that theirs or is it yours?**"',
  '⚠ In this unit the reader to name is usually ⚠ **the other side, reading your preparation page** — and it is the most useful reader in the book, because ⚠ **a page that would embarrass you if they saw it is a page built on guesses.**',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **which of these interests is a guess?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *minutes spent* column', ''],
  ['*Unknown* where the interest is not known', ''],
  ['The need that was never a request', ''],
  ['What each need would cost', ''],
  ['A line saying what the page changes', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the need that was never a request. The class says what it would cost to give.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a negotiation where somebody asked for one thing and needed another (**140 to 180 words**). Say what they asked for, what they needed, how you found out, and which they got.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is the interest about somebody not in the room?_   ? _how long did they talk about each thing?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the interest never stated as a request? Usually two of three — ⚠ **and in both the person had stopped expecting it.**'));
out.push(box('Homework', ['Write your final text. Then telephone or ask somebody who wants something from you *what will you tell your own customer or manager?* and write down what you learn (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 21.2 =======================
out.push(pb());
out.push(h2('21.2  The condition that makes yes possible'));
out.push(p('**Function:** saying yes with a condition   ·   **Grammar:** _provided that · as long as · on condition that · so long as_   ·   **Pronunciation:** the condition said as part of the yes'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of something you could say yes to at work if one thing were true. Say the yes and the one thing.'));
out.push(p('**b**  Complete: _We can hold the price for the year _______ the quantity is confirmed each quarter. · I can do Thursday _______ the sheet is signed by noon._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour find she can say yes to?   **A** seven per cent   **B** a fixed price for the year, on one condition   **C** ninety days'));
out.push(p('**b**  Listen again. **1** What is the condition? **2** What does Mr Attar say is the difference between a condition and a hope?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.3  "Yes, provided that"', [
  ['Nour', 'I cannot give seven per cent. The margin on an export carton is about eleven.'],
  ['Mr Attar', 'Can you give anything at all?'],
  ['Nour', '⚠ **I can hold the present price for twelve months**, which is worth something in a year when everything moves.'],
  ['Mr Attar', 'And what makes that possible?'],
  ['Nour', 'Knowing roughly what the quantity is. ⚠ **If she takes eight hundred cartons I can hold the price; if she takes forty I cannot, because the board setup is the cost.**'],
  ['Mr Attar', '⚠ **Then that is the sentence.** *We can hold the present price for twelve months, **provided that** the quantity for each quarter is confirmed in writing four weeks before it starts.*'],
  ['Nour', 'And if she will not confirm quantities?'],
  ['Mr Attar', '⚠ **Then the answer is still yes — to something smaller.** *Provided that* is not a refusal with a condition on it; ⚠ **it is the shape of every yes that a company can actually keep.**'],
  ['Nour', 'I would rather say *we hope to be able to hold the price*.'],
  ['Mr Attar', '⚠ **Then you have said nothing and she will plan against it.** ⚠ **A condition is a thing somebody can do; a hope is a thing somebody can only wait for** — and in four months she will say we promised and we will say we hoped, and both of us will be right.'],
  ['Nour', 'So the condition protects her as well.'],
  ['Mr Attar', '⚠ **It tells her exactly what to do to be certain**, which is the only kind of certainty anybody can give. ⚠ **And it has to be a thing she can do by herself.** *Provided that trade is normal* is not a condition; **it is a hope with grammar round it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Saying yes with a condition**',
  table(['Form', 'Example'], [
    ['**provided that** + clause', 'We can hold the price for twelve months **provided that** each quarter is confirmed in writing.'],
    ['**as long as / so long as**', 'I can do Thursday **as long as** the sheet is signed by noon.'],
    ['**on condition that**', 'We will carry the cost **on condition that** it is not repeated.'],
    ['⚠ **the test**', '⚠ **can they do it by themselves?**'],
    ['~~we hope to be able to~~', '⚠ **a hope with grammar round it**'],
  ], [1.9, 3.3]),
  '⚠ ***Provided that* is not a refusal with a condition on it; it is the shape of every yes that a company can actually keep.** **Say the yes first, in full, and then the condition** — the order is what makes it an offer.',
  '⚠ **A condition is a thing somebody can do; a hope is a thing somebody can only wait for.** ⚠ *We hope to be able to hold the price* says nothing, **and in four months she will say we promised and we will say we hoped, and both will be right.**',
  '⚠ **The condition must be something the other side can do by themselves.** ⚠ *Provided that trade is normal* fails the test; *provided that each quarter is confirmed in writing four weeks before it starts* passes it. **Ask: could they make this true this afternoon?**',
  '⚠ **A condition protects the other side too.** ⚠ **It tells them exactly what to do to be certain**, which is the only kind of certainty anybody can give.',
  '⚠ **And if they refuse the condition, the answer is still yes — to something smaller.** A fixed price for one quarter rather than four; a price held on one size rather than all. **A refused condition is a smaller deal and not a dead one.**',
  '**Practise:** Turn each hope into a condition. 1 we hope to hold the price 2 we hope to deliver monthly 3 we hope to answer in the evenings 4 we hope the dates will hold 5 we hope to keep the same driver',
  '**Useful phrases:**  provided that …  ·  as long as …  ·  on condition that …  ·  could you make that true this afternoon?  ·  a hope with grammar round it  ·  then yes, to something smaller',
  '**Pronunciation – the condition inside the yes.** 🔊 **Track 21.4** Listen: _we can hold the present price for twelve months, provided that each quarter is confirmed in writing._ ⚠ **No pause before *provided that*, and no fall before it either.** **A pause makes the condition sound like a catch.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A says what cannot be given; B finds the yes and its condition. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I cannot give __________.'],
  ['B', 'Can you give anything at all?'],
  ['A', '⚠ I can __________, which is worth something because __________.'],
  ['B', 'And what makes that possible?'],
  ['A', '__________. If __________ then __________; if __________ then __________.'],
  ['B', '⚠ Then that is the sentence: *__________, **provided that** __________.*'],
  ['A', 'And if __________ will not __________?'],
  ['B', '⚠ Then the answer is still yes — to something smaller.'],
]));
out.push(table(['Role card 1 — the price held for a year', 'Role card 2 — the hope test'], [[
  'Seven per cent is impossible on eleven points of margin. ⚠ **What is possible is the present price held for twelve months**, because the board setup is the cost. ⚠ **The condition: *provided that the quantity for each quarter is confirmed in writing four weeks before it starts.*** And if she will not: one quarter at a time.',
  'A offers four sentences beginning *we hope*. ⚠ B\'s job is to apply one test to each: ⚠ **could the other side make this true this afternoon?** *Provided that trade is normal* — no. *Provided that the order is in writing by Thursday* — yes. ⚠ **Everything that fails the test is a hope with grammar round it.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the yes and the condition. ⚠ Then say whether the other side could make the condition true by themselves, and by when.'));
out.push(PHRASE_CARD(['provided that …', 'as long as …', 'could you make that true today?', 'a hope with grammar round it', 'yes, to something smaller', 'say the yes first']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** things you cannot give as asked. Write the yes, the condition, and the smaller yes.'));
out.push(table(['What was asked', 'The yes I can give', 'Provided that…', 'If they refuse the condition'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.5, 1.7, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I cannot give _______. What I can give is _______, provided that _______. If they will not, then _______._'));
out.push(p('**Listener task:** count the conditions in the room the other side could make true by themselves. ⚠ Then read out the ones that could not, and name what they really are.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _provided that business improves_ and _we hope to be able to_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE FOUR CONDITIONS, AND WHAT EACH BUYS. 18 April. N. Mansour. ⚠ Every one of them is something she can do by herself in an afternoon.**',
  table(['What she gets', 'Provided that…', 'Why that makes it possible', 'If she refuses'], [
    ['⚠ **the present price held twelve months**', '⚠ **each quarter is confirmed in writing four weeks before it starts**', '⚠ **the board setup is the cost; eight hundred cartons carries it and forty does not**', 'one quarter at a time, at the same price'],
    ['a date in the month, in writing, three months ahead', 'the order reaches us by the 20th of the month before', 'the stencil press runs on the generator, which runs from one until four', 'a date two weeks ahead instead of three months'],
    ['**the code on every order**', '**she sends the code with the order and not after it**', 'we cannot carry her customer\'s codes in our heads', '—'],
    ['an evening telephone number', 'it is used for things that cannot wait until eight', 'it is a house with a child in it', '—'],
  ], [1.7, 2.1, 2.2, 1.5]),
  '⚠ **Two of the four conditions cost her nothing and she will agree to them before she has finished reading.** The code with the order and the evening number used sparingly ⚠ **are not concessions at all; they are instructions for making the thing work.**',
  '⚠ **The first condition is the one that is actually being negotiated**, and it is worth being honest about why. ⚠ **It is not a trick to make her commit to volume; it is the only way a fixed price for a year can be true**, because the cost on this product is the setting-up and not the board.',
  '⚠ **And the fourth column is the part people leave out.** ⚠ **Every condition has a smaller version**, and writing it in advance means a refusal does not end the conversation: *one quarter at a time, at the same price* keeps everything except the length.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which two conditions cost her nothing?'));
out.push(item('2', 'Why does a fixed price for a year require a quantity?'));
out.push(item('3', 'What is in the fourth column, and what is it for?'));
out.push(box('Writer\'s box', [
  '**The conditions page — four parts:** **a table: *what they get · provided that · why that makes it possible · if they refuse*** → ⚠ **which conditions cost them nothing** → ⚠ **which condition is the one actually being negotiated** → **what the smaller version is.**',
  '⚠ **Put *why that makes it possible* in writing.** ⚠ *The board setup is the cost; eight hundred cartons carries it and forty does not.* **A condition with its reason attached is read as arithmetic; one without is read as leverage.**',
  '⚠ **Separate the conditions that are really instructions.** ⚠ *Send the code with the order and not after it* is not a concession — **it is how the thing works** — and calling it a condition makes a small favour look like a price.',
  '⚠ **Name the one condition that is actually being negotiated**, and be honest about it: ⚠ *it is not a trick to make her commit to volume; it is the only way a fixed price for a year can be true.* **One sentence of candour on the real term buys more than three pages of terms.**',
  '⚠ **Write the smaller version before you need it.** ⚠ *One quarter at a time, at the same price.* **A refusal then costs the length of the deal and not the deal** — and you will never think of it as calmly during the meeting.',
  '⚠ **Test every condition the same way:** could they make it true by themselves, this afternoon? ⚠ **If not, it is a hope**, and a hope in a term sheet is a quarrel with a date on it.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a conditions page for a negotiation at your work (**60 words or more**). Use the frame.'));
out.push(p('**THE ______________ CONDITIONS, AND WHAT EACH BUYS. ______________. ______________. ⚠ Every one is something ______________ can do ______________.**   ⚠ **______________** | ⚠ **provided that ______________** | ⚠ **______________** | ______________   ______________ | provided that ______________ | ______________ | ______________   **______________** | **______________** | ______________ | —   ⚠ **______________ of the ______________ conditions cost ______________ nothing** — ⚠ **they are not concessions at all; they are ______________.**   ⚠ **The one actually being negotiated is ______________**, and ⚠ **it is not ______________; it is the only way ______________ can be true, because ______________.**   ⚠ **And the smaller version.** ______________, which keeps everything except ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be the other side, reading it by accident** — then ask one question: **could I make this condition true this afternoon?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every condition doable by the other side alone', ''],
  ['*Why that makes it possible*, with the arithmetic', ''],
  ['Instructions separated from concessions', ''],
  ['The condition actually being negotiated, named', ''],
  ['A smaller version for each', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their smaller version. The class says what it costs compared with the full one.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the letter that says yes with conditions (**140 to 180 words**): the yes in the first line in full, each condition with the reason it is needed, the ones that cost nothing marked as instructions, and the smaller version offered in advance.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _does the yes come before the condition?_   ? _which condition is a hope?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is there at least one hope dressed as a condition? Usually all three — ⚠ **and it is always the condition about trade, or the market, or circumstances.**'));
out.push(box('Homework', ['Write your final text. Then take three sentences at your work beginning *we hope* and turn each into a condition the other side could make true by themselves (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 21.3 =======================
out.push(pb());
out.push(h2('21.3  Never a concession without one'));
out.push(p('**Function:** making a conditional offer   ·   **Grammar:** _I would be prepared to …, if you would …_   ·   **Pronunciation:** the two halves given equal weight'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of something you gave away at work and got nothing for. Say what happened to it afterwards.'));
out.push(p('**b**  Which is a conditional offer? _We can do three per cent. · I would be prepared to look at three per cent, if you would take the full quarter in one consignment._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What happened to the two per cent Nour gave away last year?   **A** it was refused   **B** it became the price   **C** it was returned'));
out.push(p('**b**  Listen again. **1** Why did she give it? **2** What does Mr Ayoub say every concession must be tied to?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.5  "What did we get for the two per cent?"', [
  ['Mr Ayoub', 'Last March you gave Mr Tarabishi two per cent. What did we get for it?'],
  ['Nour', 'Nothing. ⚠ **He had been difficult about the delivery and I wanted the conversation to end.**'],
  ['Mr Ayoub', 'And what is his price now?'],
  ['Nour', '⚠ **Two per cent below the list, and he has never paid the list since.** ⚠ **It was a gesture for one order and it is now the price.**'],
  ['Mr Ayoub', '⚠ **Every concession you give becomes the floor.** Nobody goes back up. ⚠ **So the question before you give anything is not *can we afford it?* but *what is it buying?***'],
  ['Nour', 'And if the answer is nothing?'],
  ['Mr Ayoub', '⚠ **Then do not give it; ask for something with it.** ⚠ *I would be prepared to look at three per cent, **if you would** take the quarter in one consignment instead of three.* **Three deliveries into one is most of the three per cent back.**'],
  ['Nour', 'And if she says no to the consignment?'],
  ['Mr Ayoub', '⚠ **Then the three per cent was never offered.** That is the whole value of the shape: ⚠ **the offer and the ask are one sentence, so a refusal of one is a refusal of both** — and nothing has been left on the table.'],
  ['Nour', 'It sounds like a trick.'],
  ['Mr Ayoub', '⚠ **It is the opposite of a trick.** A concession with nothing attached looks generous for about a week and then becomes the baseline, ⚠ **and the next time she asks, you have nothing left to move** — which is how a supplier ends up at cost, one kind gesture at a time.'],
  ['Nour', 'So what do I ask for with the three per cent?'],
  ['Mr Ayoub', '⚠ **Ask for the thing that pays for it.** One consignment instead of three, or payment at thirty days instead of sixty, or the quantity in writing. ⚠ **Never ask for goodwill; ask for something that appears in the arithmetic.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The conditional offer**',
  table(['Form', 'Example'], [
    ['**I would be prepared to …, if you would …**', '**I would be prepared to** look at three per cent, **if you would** take the quarter in one consignment.'],
    ['**we could …, provided you …**', '**We could** hold the price, **provided you** confirm the quarter in writing.'],
    ['⚠ **one sentence, not two**', '⚠ **a refusal of one half is a refusal of both**'],
    ['**the question first**', '⚠ **not *can we afford it?* but *what is it buying?***'],
    ['~~a gesture~~', '⚠ **a concession with nothing attached becomes the price**'],
  ], [2.3, 3.2]),
  '⚠ **Every concession you give becomes the floor. Nobody goes back up.** ⚠ *It was a gesture for one order and it is now the price* — **two per cent given to end a conversation, and a year of invoices below the list.**',
  '⚠ **The question before giving anything is not *can we afford it?* but *what is it buying?*** ⚠ **If the answer is nothing, ask for something with it.**',
  '⚠ **Put the offer and the ask in one sentence.** ⚠ **Then a refusal of one half is a refusal of both, and nothing has been left on the table.** Two sentences and the first one has already been given away.',
  '⚠ **Ask for the thing that pays for it.** ⚠ **Never ask for goodwill; ask for something that appears in the arithmetic** — one consignment instead of three, thirty days instead of sixty, the quantity in writing.',
  '⚠ **And know that it is the opposite of a trick.** ⚠ **A concession with nothing attached looks generous for a week and then becomes the baseline**, and the next time there is nothing left to move — *which is how a supplier ends up at cost, one kind gesture at a time.*',
  '**Practise:** Attach an ask to each. 1 three per cent 2 a free delivery 3 an extra week 4 a longer price hold 5 a man on a Saturday',
  '**Useful phrases:**  I would be prepared to …, if you would …  ·  what is it buying?  ·  one sentence, not two  ·  ask for what pays for it  ·  nothing on the table  ·  it becomes the price',
  '**Pronunciation – equal weight on the two halves.** 🔊 **Track 21.6** Listen: _I would be prepared to look at three per CENT // if you would take the quarter in ONE conSIGNment._ ⚠ **The second half as loud as the first and no falling tone at the comma.** **Drop the voice and you have made an offer and mumbled a condition.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names a concession; B attaches the ask. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Last __________ you gave __________ __________. What did we get for it?'],
  ['A', 'Nothing. ⚠ __________ and I wanted __________.'],
  ['B', 'And what is __________ now?'],
  ['A', '⚠ __________, and __________ has never __________ since.'],
  ['B', '⚠ Every concession becomes the floor. So: what is it buying?'],
  ['A', 'Nothing.'],
  ['B', '⚠ Then: *I would be prepared to __________, **if you would** __________.*'],
]));
out.push(table(['Role card 1 — the two per cent', 'Role card 2 — what pays for it'], [[
  'Two per cent given to Mr Tarabishi last March ⚠ **to end a difficult conversation about a delivery.** ⚠ **It is now his price and he has never paid the list since.** The repair, for this negotiation: *I would be prepared to look at three per cent, if you would take the quarter in one consignment instead of three.*',
  'A proposes four concessions with nothing attached. ⚠ B\'s job is to find, for each, ⚠ **the thing that pays for it in the arithmetic** — one delivery instead of three, thirty days instead of sixty, the quantity in writing, the code with the order. ⚠ **Refuse *goodwill* and *a good relationship* as answers.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the concession and the ask as one sentence. ⚠ Then say what happened to the last concession anybody gave with nothing attached.'));
out.push(PHRASE_CARD(['I would be prepared to …, if you would …', 'what is it buying?', 'one sentence', 'ask for what pays for it', 'it becomes the price', 'nobody goes back up']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** things you could concede. Write the ask that pays for each, and what it is worth.'));
out.push(table(['The concession', 'What it costs us', 'If you would…', 'What the ask is worth'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.3, 1.8, 1.7]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I would be prepared to _______, if you would _______. The concession costs _______ and the ask is worth _______._'));
out.push(p('**Listener task:** count the asks in the room that appear in the arithmetic. ⚠ Then read out any that are goodwill, and say what they are worth.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we can do three per cent_ and _if you would be reasonable about the dates_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**WHAT WE HAVE GIVEN AWAY FOR NOTHING SINCE 2019. 19 April. N. Mansour. ⚠ Six things. Five of them are now the price.**',
  table(['What', 'When, and why', 'What we got for it', 'What it is now'], [
    ['**two per cent to Mr Tarabishi**', 'March, to end an argument about a delivery', '⚠ **nothing**', '⚠ **his price. He has not paid the list since.**'],
    ['**free delivery to Ghouta**', '2019, for one urgent order', '⚠ **nothing**', 'free delivery to Ghouta, for everybody east of the ring road'],
    ['**a man on a Saturday morning**', 'once, for Mr Haffar\'s stocktake', '⚠ **nothing**', 'two Saturdays a month, and nobody can remember agreeing'],
    ['**sixty days to Ms Shamsi**', 'thirty was the term; she asked twice', '⚠ **nothing**', '⚠ **sixty days, and she now asks for seventy-five**'],
    ['⚠ **a price held for fourteen days**', '2021, written into a quotation', '⚠ **the order, in writing, within the fourteen days**', '⚠ **a term in every quotation, and it works**'],
    ['**four cartons replaced after a split**', 'January, a real fault of ours', '⚠ **nothing asked and nothing wanted**', 'nothing. ⚠ **It was not a concession; it was a repair.**'],
  ], [1.6, 1.8, 1.5, 2.2]),
  '⚠ **Four of the six became permanent and we got nothing for any of them.** ⚠ **Each one was given to end a conversation**, and each one ended that conversation and opened a cheaper one.',
  '⚠ **The fifth is the only concession in nine years that bought anything**, and the reason is that it was written as a trade: ⚠ **the price is held fourteen days and the order must come inside the fourteen days.** ⚠ **It is still in every quotation and it has never been argued about**, because both halves are in the same sentence.',
  '⚠ **And the sixth is not on this list by mistake.** ⚠ **Replacing four split cartons after a fault of ours is not a concession and must never be traded** — it is a repair, and asking for anything in return for it would have cost more than the cartons.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many of the six became permanent, and what was got for them?'));
out.push(item('2', 'Why did the fifth one work?'));
out.push(item('3', 'Why is the sixth on the list, and what is it not?'));
out.push(box('Writer\'s box', [
  '**What we have given away for nothing — four parts:** **a table: *what · when and why · what we got · what it is now*** → ⚠ **how many became permanent** → ⚠ **the one that bought something, and why** → ⚠ **the one that is not a concession at all.**',
  '⚠ **Write the *why* honestly: *to end an argument*.** ⚠ **Almost every unpaid concession was given to end a conversation**, and naming that once is worth more than any rule — because it is recognisable and it will happen again this month.',
  '⚠ **Make the last column *what it is now* and not *what it cost*.** ⚠ *His price. He has not paid the list since.* **The cost of a concession is not the per cent; it is the permanence**, and only this column shows it.',
  '⚠ **Find the one that worked and say why.** ⚠ *The price is held fourteen days and the order must come inside the fourteen days — both halves in the same sentence.* **One worked example is a better rule than the rule.**',
  '⚠ **And mark what is not a concession.** ⚠ **A repair after your own fault is not a bargaining chip** — *asking for anything in return would have cost more than the cartons* — and a page that mixes the two teaches people to haggle over their own mistakes.',
  '⚠ **Count, do not characterise.** ⚠ *Six things. Five of them are now the price.* **A number at the top of a page is read; an adjective is skipped.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *what we have given away for nothing* for your work (**60 words or more**). Use the frame.'));
out.push(p('**WHAT WE HAVE GIVEN AWAY FOR NOTHING SINCE ______________. ______________. ______________. ⚠ ______________ things. ______________ of them are now ______________.**   **______________** | ______________, to ______________ | ⚠ **nothing** | ⚠ **______________**   **______________** | ______________ | ⚠ **nothing** | ______________   ⚠ **______________** | ______________ | ⚠ **______________** | ⚠ **______________, and it works**   ⚠ **______________ of the ______________ became permanent and we got nothing for any of them.** ⚠ Each was given to ______________, and each ⚠ **ended that conversation and opened a cheaper one.**   ⚠ **The one that bought something** worked because ______________: ⚠ **both halves in the same sentence.**   ⚠ **And ______________ is not a concession at all.** ______________ is ______________, and ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **what is this now?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The honest *why* — usually to end a conversation', ''],
  ['A *what it is now* column', ''],
  ['A count at the top, not an adjective', ''],
  ['The one that bought something, with the reason', ''],
  ['What is a repair and not a concession', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only *what it is now*. The class says how long ago the gesture was made.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a concession somebody gave for nothing (**140 to 180 words**). Say what was given, why, what it bought, and what it is now.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _was anything asked for in the same sentence?_   ? _what is the concession now?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the concession become permanent? Usually all three — ⚠ **and in all three nobody can name the day it stopped being a favour.**'));
out.push(box('Homework', ['Write your final text. Then list four things your work gives away and write the ask that would have paid for each, in one sentence apiece (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 21.4 =======================
out.push(pb());
out.push(h2('21.4  In that case'));
out.push(p('**Function:** responding to a move so that it keeps moving   ·   **Grammar:** _in that case · then we could · that changes …_   ·   **Pronunciation:** _in that case_ as an opening, not a conclusion'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a time somebody moved towards you in a negotiation. Say what you said next.'));
out.push(p('**b**  Which keeps it moving? _Thank you, I will think about it. · In that case we could look at the price for the first quarter._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What did Ms Tannous move on?   **A** the discount   **B** the ninety days, down to sixty   **C** nothing'));
out.push(p('**b**  Listen again. **1** What does Nour say first? **2** What does Mr Attar say silence does to a move?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.7  "She has moved, and you said thank you"', [
  ['Nour', 'She has come down from ninety days to sixty.'],
  ['Mr Attar', 'And what did you say?'],
  ['Nour', 'I said thank you, and that I would put it to Mr Ayoub.'],
  ['Mr Attar', '⚠ **Then the negotiation has stopped and she does not know why.** ⚠ **A move that is received in silence is a move that was free**, and she will not make another one.'],
  ['Nour', 'I did not want to answer before I had asked.'],
  ['Mr Attar', '⚠ **You do not have to answer. You have to say what it changes.** ⚠ ***In that case* I can look at the price for the first quarter**, or *in that case the evening number becomes easier*, or even *in that case I will have an answer by Thursday instead of next week.*'],
  ['Nour', 'The last one gives nothing at all.'],
  ['Mr Attar', '⚠ **It gives her a date, which is the thing she actually wants**, and it tells her the move was noticed. ⚠ **Both halves of a negotiation are made of noticing.**'],
  ['Nour', 'And if the move is small?'],
  ['Mr Attar', '⚠ **Then *in that case* is small too, and that is honest.** *You have come down thirty days; ⚠ **in that case** I can take the setting-up charge off the first consignment, which is about a quarter of what you asked for.* ⚠ **Say the proportion out loud** — it stops both sides pretending.'],
  ['Nour', 'And if I have nothing to give?'],
  ['Mr Attar', '⚠ **Then say what it changes about the process.** *In that case I can put this to Mr Ayoub tomorrow rather than next week, and I will telephone you either way on Thursday.* ⚠ **A negotiation where nothing moves still has dates in it**, and a date is a real answer.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Responding to a move**',
  table(['Form', 'Example'], [
    ['**in that case** + offer', 'You have come down thirty days; **in that case** I can look at the first quarter.'],
    ['**then we could …**', '**Then we could** take the setting-up charge off the first consignment.'],
    ['**that changes …**', '**That changes** what I can put to Mr Ayoub.'],
    ['⚠ **when you have nothing to give**', '⚠ ***in that case* I can answer by Thursday instead of next week**'],
    ['⚠ **the proportion**', '⚠ **which is about a quarter of what you asked for**'],
  ], [2.1, 3.3]),
  '⚠ **A move that is received in silence is a move that was free, and nobody makes a second one.** ⚠ *Thank you, I will put it to Mr Ayoub* stops the negotiation **and the other side does not know why.**',
  '⚠ **You do not have to answer; you have to say what it changes.** ⚠ **Both halves of a negotiation are made of noticing** — and *in that case* is the whole of noticing in three words.',
  '⚠ **If the move is small, the answer is small, and say the proportion out loud.** ⚠ *About a quarter of what you asked for.* **Naming the proportion stops both sides pretending** — and pretending is what produces the deadlock two meetings later.',
  '⚠ **If you have nothing to give, give a date.** ⚠ *In that case I can put it to him tomorrow rather than next week, and I will telephone you either way on Thursday.* **A negotiation where nothing moves still has dates in it, and a date is a real answer.**',
  '⚠ **And answer in the meeting, not after it.** An answer that arrives in a letter three days later is received as a new position, ⚠ **not as a response** — and the other side will have spent three days hardening.',
  '**Practise:** Respond with *in that case*. 1 they come down thirty days 2 they drop one of two requests 3 they offer a longer order 4 they agree to confirm in writing 5 they offer nothing but ask for a date',
  '**Useful phrases:**  in that case …  ·  then we could …  ·  that changes what I can put to him  ·  which is about a quarter of what you asked  ·  I will telephone you either way on Thursday  ·  a date is a real answer',
  '**Pronunciation – _in that case_ as an opening.** 🔊 **Track 21.8** Listen: _in that case // I can look at the price for the first quarter._ ⚠ **Rising on *case*, not falling.** **Falling, it closes the subject; rising, it opens the next thing** — and the difference is a whole meeting. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports a move; B answers it three ways. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ has come down from __________ to __________.'],
  ['B', 'And what did you say?'],
  ['A', 'I said thank you, and that __________.'],
  ['B', '⚠ Then the negotiation has stopped and __________ does not know why.'],
  ['A', 'I did not want to answer before __________.'],
  ['B', '⚠ You do not have to answer. ⚠ **You have to say what it changes.** *In that case __________.*'],
  ['A', 'And if I have nothing to give?'],
  ['B', '⚠ Then: *in that case __________ by __________ instead of __________.*'],
]));
out.push(table(['Role card 1 — ninety days to sixty', 'Role card 2 — three answers to one move'], [[
  'She has moved thirty days and Nour said thank you. ⚠ **A move received in silence is a move that was free.** Three possible answers: ⚠ **the first quarter\'s price**, the setting-up charge off the first consignment (**about a quarter of what she asked**), or ⚠ **an answer by Thursday instead of next week.**',
  'A makes one move. ⚠ B must answer it three times: ⚠ **once with something that costs money, once with something that costs nothing, and once with only a date.** ⚠ **Then the pair decides which to use** — and in most real cases it is the second or the third.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the move and the three answers. ⚠ Then say which answer you would give, and what the move would have been worth if nobody had answered it.'));
out.push(PHRASE_CARD(['in that case …', 'then we could …', 'that changes what I can put to him', 'about a quarter of what you asked', 'either way on Thursday', 'a date is a real answer']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** moves somebody has made towards you. Write the three answers for each.'));
out.push(table(['The move', 'In that case — costing money', 'In that case — costing nothing', 'In that case — a date'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.3, 1.6, 1.6, 1.5]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The move was _______. In that case I could _______, or _______, or at least _______ by _______._'));
out.push(p('**Listener task:** count the answers in the room that cost nothing. ⚠ Then ask which moves in the room were received in silence, and what happened next.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _thank you, I will come back to you_ and an *in that case* with a falling tone. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE MOVES, IN ORDER, AND WHAT EACH WAS ANSWERED WITH. 22 April. N. Mansour. ⚠ Five moves. Two of ours cost money.**',
  table(['Whose', 'The move', 'Answered with', 'Cost'], [
    ['hers', 'ninety days down to sixty', '⚠ **the setting-up charge off the first consignment**', '⚠ **about 40,000 — a quarter of what she asked for, and said so**'],
    ['ours', 'the present price held twelve months', 'she confirmed the quarters in writing', 'nothing; ⚠ **it is what makes the price possible**'],
    ['hers', 'she dropped the seven per cent to four', '⚠ **four on the first quarter only, if the quarter comes in one consignment**', 'about 55,000, ⚠ **and three deliveries into one gives most of it back**'],
    ['hers', '⚠ **she stopped asking about the discount and asked for the date list**', '⚠ **the date list, three months ahead, in writing, by the 20th**', '⚠ **nothing at all**'],
    ['ours', 'the evening number', 'nothing asked for', 'nothing. ⚠ **It was never a concession; it was an answer to January.**'],
  ], [0.8, 2, 2.3, 2.1]),
  '⚠ **Five moves in eight days, and the one that settled it cost nothing.** ⚠ **When she stopped asking about the discount and asked for the date list, the negotiation was over**, and neither of us said so at the time.',
  '⚠ **Both of the answers that cost money were given with their proportion attached** — *a quarter of what you asked for*, and *four per cent on one quarter of four.* ⚠ **Saying the proportion cost nothing and stopped two arguments before they started.**',
  '⚠ **And every one of her moves was answered on the telephone, the same day.** ⚠ **The one time I waited to ask Mr Ayoub first, nothing came back for six days** — and when it did, it came back as a new position and not as a reply.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many moves were there, and what did the one that settled it cost?'));
out.push(item('2', 'What was attached to both of the answers that cost money?'));
out.push(item('3', 'What happened the one time an answer was delayed?'));
out.push(box('Writer\'s box', [
  '**The moves page — four parts:** **a table: *whose · the move · answered with · cost*** → ⚠ **the move that settled it, and what it cost** → ⚠ **what was attached to the answers that cost money** → ⚠ **what happened when an answer was delayed.**',
  '⚠ **Write the moves in order and mark whose each was.** ⚠ **A negotiation read back in order is a different thing from the one both sides remember**, and the order is the only honest record of who moved first.',
  '⚠ **Put the cost in money and the proportion in words.** ⚠ *About 40,000 — a quarter of what she asked for, and said so.* **The proportion is what makes a small answer to a small move look like arithmetic instead of meanness.**',
  '⚠ **Find the move that settled it.** ⚠ *When she stopped asking about the discount and asked for the date list, the negotiation was over, and neither of us said so at the time.* **The settling move is usually the one nobody noticed.**',
  '⚠ **Record the delay.** ⚠ *The one time I waited, nothing came back for six days, and it came back as a new position and not as a reply.* **One recorded delay is the whole argument for answering in the meeting.**',
  '⚠ **And mark what was never a concession.** *The evening number was an answer to January.* ⚠ **A page that calls a repair a concession will be quoted back at you**, and then you will have to charge for being sorry.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *the moves, in order* for a negotiation at your work (**60 words or more**). Use the frame.'));
out.push(p('**THE MOVES, IN ORDER, AND WHAT EACH WAS ANSWERED WITH. ______________. ______________. ⚠ ______________ moves. ______________ of ours cost money.**   ______________ | ______________ | ⚠ **______________** | ⚠ **______________ — ______________ of what ______________ asked for, and said so**   ______________ | ______________ | ______________ | nothing; ⚠ **it is what makes ______________ possible**   ______________ | ⚠ **______________** | ⚠ **______________** | ⚠ **nothing at all**   ⚠ **______________ moves in ______________, and the one that settled it cost ______________.** ⚠ When ______________, the negotiation was over, **and neither of us said so at the time.**   ⚠ **Both answers that cost money were given with their proportion attached.** ______________.   ⚠ **And every move was answered ______________.** ⚠ The one time ______________, ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **which of my moves did nobody answer?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The moves in order, with whose each was', ''],
  ['The cost in money and the proportion in words', ''],
  ['The move that settled it, named', ''],
  ['A delay recorded, with what it cost', ''],
  ['What was never a concession, marked', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the move that settled it. The class says what it cost, and how many noticed it at the time.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the record of a negotiation move by move (**140 to 180 words**): whose each move was, what it was answered with, what it cost with the proportion attached, the move that settled it, and any answer that was delayed.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _was every move answered the same day?_   ? _which move settled it, and did anybody notice?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the settling move cost nothing? Usually two of three — ⚠ **and in both it was a request the other side had almost given up making.**'));
out.push(box('Homework', ['Write your final text. Then take the last negotiation at your work and write the moves in order with whose each was, and mark the one nobody answered (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 21.5 =======================
out.push(pb());
out.push(h2('21.5  Whatever else we agree'));
out.push(p('**Function:** stating the one thing you will not trade   ·   **Grammar:** _whatever else we agree · on this I cannot move · this is not a position_   ·   **Pronunciation:** the non-negotiable said once, quietly'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of one thing at your work that could not be traded away whatever the price. Say what it is.'));
out.push(p('**b**  Which is a non-negotiable? _We would prefer thirty days. · Whatever else we agree, the goods are paid for before the lorry leaves the yard._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the one thing Mr Ayoub will not trade?   **A** the price   **B** payment before the lorry leaves the yard, on the first consignment of each quarter   **C** the delivery dates'));
out.push(p('**b**  Listen again. **1** Why is it not negotiable? **2** What does he say happens if you have four non-negotiables?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.9  "There is one line and everybody should know it"', [
  ['Mr Ayoub', 'Before you go back to her, what will you not trade?'],
  ['Nour', 'The price, below about four.'],
  ['Mr Ayoub', '⚠ **That is a number and a number can always be traded; it is just a question of how much.** ⚠ **A non-negotiable is not a number. It is a thing that stops being this company if you give it away.**'],
  ['Nour', 'Then: paid before the lorry leaves the yard.'],
  ['Mr Ayoub', '⚠ **On the first consignment of each quarter, yes.** And why?'],
  ['Nour', '⚠ **Because the fuel for the generator is cash, every week, and the men are paid on Thursdays.** If a quarter goes unpaid we stop in eleven days.'],
  ['Mr Ayoub', '⚠ **Then say it once, say why, and say it before she asks.** *Whatever else we agree, the first consignment of each quarter is paid before it leaves the yard. ⚠ **That is not a position; it is the week\'s wages.***'],
  ['Nour', 'Is it not weak to explain it?'],
  ['Mr Ayoub', '⚠ **An unexplained refusal is tested; an explained one is planned around.** ⚠ **She will test *we cannot do that* three times and she will not test the men\'s wages once** — and if she can plan round it, she will, because she wants the arrangement too.'],
  ['Nour', 'How many of these may I have?'],
  ['Mr Ayoub', '⚠ **One.** ⚠ **A man with four non-negotiables has none, because the other side simply picks the softest and tests that**, and then all four are in play. ⚠ **One line, said once, and everything else is a trade.**'],
  ['Nour', 'And if she refuses it outright?'],
  ['Mr Ayoub', '⚠ **Then there is no arrangement, and we say so without any temper** — and we keep selling her cartons one order at a time, as we did in January. ⚠ **A walk-away that costs nothing to say is the only reason anybody believes the line at all.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The one thing you will not trade**',
  table(['', 'The rule'], [
    ['**the form**', '**Whatever else we agree, …**  ·  *on this I cannot move*  ·  *that is not a position*'],
    ['⚠ **not a number**', '⚠ **a number can always be traded; it is only a question of how much**'],
    ['⚠ **how many**', '⚠ **one**'],
    ['**say why**', '⚠ **an unexplained refusal is tested; an explained one is planned around**'],
    ['**the walk-away**', '⚠ **and we keep selling one order at a time, as before**'],
  ], [1.5, 4.3]),
  '⚠ **A non-negotiable is not a number. It is a thing that stops being this company if you give it away.** ⚠ *Paid before the lorry leaves the yard* is one; *four per cent* is not, **and four per cent will be traded whatever anybody says now.**',
  '⚠ **One, and only one.** ⚠ **A man with four non-negotiables has none, because the other side picks the softest and tests that** — and when it moves, all four are in play.',
  '⚠ **Say it before they ask, say it once, and say why.** ⚠ *That is not a position; it is the week\'s wages.* **An unexplained refusal is tested three times; an explained one is planned around** — and the other side wants the arrangement too.',
  '⚠ **Say it quietly and do not repeat it.** A line said twice in one meeting is being defended, ⚠ **and a line that is being defended is being negotiated.**',
  '⚠ **And have the walk-away ready in a form that costs nothing to say.** ⚠ *Then there is no arrangement, and we keep selling cartons one order at a time, as we did in January.* **A walk-away that is survivable is the only reason anybody believes the line.**',
  '**Practise:** For each, say whether it is a non-negotiable or a number. 1 payment before the lorry leaves 2 four per cent 3 our name on the carton 4 thirty days 5 the stencil code from the order',
  '**Useful phrases:**  whatever else we agree …  ·  that is not a position  ·  it is the week\'s wages  ·  one line, said once  ·  if not, there is no arrangement  ·  as we did in January',
  '**Pronunciation – the line said quietly.** 🔊 **Track 21.10** Listen: _whatever else we agree, the first consignment of each quarter is paid before it leaves the yard._ ⚠ **Flat, quiet, and slower than everything round it. No stress on *whatever*.** **Loudness is heard as a bluff.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names four non-negotiables; B reduces them to one. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'What will you not trade?'],
  ['A', '__________, __________, __________ and __________.'],
  ['B', '⚠ Which of those is a number?'],
  ['A', '__________ and __________.'],
  ['B', '⚠ Then they are trades. Of the other two, ⚠ **which one stops being your company if you give it away?**'],
  ['A', '__________.'],
  ['B', '⚠ Then say it once, say why, and say it before __________ asks.'],
]));
out.push(table(['Role card 1 — the week\'s wages', 'Role card 2 — four into one'], [[
  'Paid before the lorry leaves the yard, on the first consignment of each quarter. ⚠ **Why: generator fuel is cash weekly and the men are paid on Thursdays; an unpaid quarter stops us in eleven days.** ⚠ **The walk-away: no arrangement, and we go on selling one order at a time, as in January.**',
  'A has four. ⚠ B\'s job is to strike out every number and then ask of what is left: ⚠ **which one stops being your company if you give it away?** ⚠ **A man with four has none** — the other side picks the softest, tests it, and then all four are in play.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the one line, the reason, and the walk-away. ⚠ Then say which of the discarded three was the softest.'));
out.push(PHRASE_CARD(['whatever else we agree …', 'that is not a position', 'it is the week\'s wages', 'one line, said once', 'if not, no arrangement', 'as we did in January']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write **four** things you think you cannot trade. Then strike out the numbers and choose one.'));
out.push(table(['The thing', 'A number, or not?', 'Does it stop being us?', 'Keep or trade'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2, 1.2, 1.5, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Whatever else we agree, _______. That is not a position; it is _______. If they refuse it, _______._'));
out.push(p('**Listener task:** count the non-negotiables in the room that are really numbers. ⚠ Then ask each student which of their four the other side would test first.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for a non-negotiable with a figure in it, and one said three times. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE ONE LINE, AND THE THREE WE THOUGHT WERE LINES. 24 April. N. Mansour.**',
  table(['What we said we would not trade', 'Number?', 'Stops being us?', 'What it really is'], [
    ['**four per cent and no lower**', '⚠ **yes**', 'no', '⚠ **a trade. It will go to five if the quarter comes in one consignment, and we know it.**'],
    ['**thirty days, not sixty**', '⚠ **yes**', 'no', 'a trade, and already traded once with Ms Shamsi'],
    ['**our name on the outside of the carton**', 'no', '⚠ **no — and this is the one that surprised us**', '⚠ **a preference. Her customer does not want it and it costs us nothing but pride.**'],
    ['⚠ **paid before the lorry leaves the yard, first consignment of each quarter**', 'no', '⚠ **yes — eleven days**', '⚠ **the one line. Generator fuel is cash weekly; the men are paid on Thursdays.**'],
  ], [2.3, 0.8, 1.4, 2.7]),
  '⚠ **Three of the four were not lines at all, and the third is the instructive one.** ⚠ **Our name on the carton felt like the most important thing on the list and it is a preference.** Her customer sells them on and does not want another company\'s name on the outside; ⚠ **it costs us nothing, and we had been prepared to lose an arrangement for it.**',
  '⚠ **The one that survived is the only one with a date attached to the consequence.** ⚠ **If a quarter goes unpaid we stop in eleven days** — and that is the test: a non-negotiable has an arithmetic behind it and a preference has a feeling.',
  '⚠ **And the line is written to be said once, before she asks.** *Whatever else we agree, the first consignment of each quarter is paid before it leaves the yard. ⚠ **That is not a position; it is the week\'s wages.*** ⚠ **If she refuses, there is no arrangement and we go on as we did in January** — which is survivable, and that is why the line is believable.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many of the four were real lines?'));
out.push(item('2', 'Which one surprised the writer, and why is it only a preference?'));
out.push(item('3', 'What test separates a non-negotiable from a preference?'));
out.push(box('Writer\'s box', [
  '**The one line — four parts:** **a table: *what we said we would not trade · number? · stops being us? · what it really is*** → ⚠ **how many were not lines** → ⚠ **the one that surprised you** → **the line itself, written to be said once, with the walk-away.**',
  '⚠ **Strike out the numbers first.** ⚠ **A number can always be traded and both sides know it** — *it will go to five if the quarter comes in one consignment, and we know it.* **Writing that down is uncomfortable and it is the whole value of the page.**',
  '⚠ **Expect one item to collapse from a principle into a preference.** ⚠ *Our name on the carton felt like the most important thing on the list and it is a preference.* **Ask who actually wants it** — here, nobody — **and the answer is usually pride, which is not cheap but is tradeable.**',
  '⚠ **The test is a consequence with a date on it.** ⚠ *If a quarter goes unpaid we stop in eleven days.* **A non-negotiable has arithmetic behind it and a preference has a feeling** — and eleven days is the arithmetic.',
  '⚠ **Write the line to be said once and before they ask**, and put its reason in the same sentence: *that is not a position; it is the week\'s wages.*',
  '⚠ **And write the walk-away in a survivable form.** ⚠ *There is no arrangement and we go on as we did in January.* **A walk-away that would ruin you is not a walk-away**, and the other side can always tell.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *the one line* for a negotiation at your work (**60 words or more**). Use the frame.'));
out.push(p('**THE ONE LINE, AND THE ______________ WE THOUGHT WERE LINES. ______________. ______________.**   **______________** | ⚠ **yes** | no | ⚠ **a trade. ______________, and we know it.**   **______________** | yes | no | ______________   **______________** | no | ⚠ **no** | ⚠ **a preference. ______________.**   ⚠ **______________** | no | ⚠ **yes — ______________** | ⚠ **the one line. ______________.**   ⚠ **______________ of the ______________ were not lines at all**, and ⚠ **______________ felt like the most important thing on the list and is a preference**: ______________.   ⚠ **The one that survived is the only one with ______________.** ⚠ If ______________, ______________.   ⚠ **And the line, to be said once:** *Whatever else we agree, ______________. That is not a position; it is ______________.* ⚠ If ______________, ______________, **which is survivable.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **which of these would I test first?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The numbers struck out and called trades', ''],
  ['One item that collapsed into a preference', ''],
  ['A consequence with a date behind the surviving line', ''],
  ['The line written to be said once, with its reason', ''],
  ['A survivable walk-away', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the item that turned out to be a preference. The class says who actually wanted it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something your work would not trade (**140 to 180 words**). Say what it is, what the arithmetic behind it is, what you discovered was only a preference, and what you would do if it were refused.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is there a consequence with a date on it?_   ? _which of these is really a preference?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was one supposed principle really a preference? Usually all three — ⚠ **and in two of three it was about a name, a title, or who speaks first.**'));
out.push(box('Homework', ['Write your final text. Then write your four non-negotiables, strike out every number, and find the arithmetic behind the one that is left (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 21.6 =======================
out.push(pb());
out.push(h2('21.6  The two-column page'));
out.push(p('**Function:** preparing a negotiation on paper   ·   **Grammar:** theirs and ours, side by side   ·   **Pronunciation:** reading your own column aloud before the meeting'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of the last negotiation at your work. Say whether anything was written down before it.'));
out.push(p('**b**  Which belongs in the *theirs* column? _what we will not trade · what they will tell their customer · our price list · their walk-away_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Lina find missing from the page?   **A** the price   **B** their walk-away   **C** the dates'));
out.push(p('**b**  Listen again. **1** What does she say about a page with only one column? **2** What does Nour put in the empty box?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.11  "You have written ours twice"', [
  ['Lina', 'May I read the page? ⚠ **You have two columns and they both say ours.**'],
  ['Nour', 'The left one is hers.'],
  ['Lina', '⚠ **It is what we think she should want.** *A fair price. A reasonable arrangement. A reliable supplier.* ⚠ **Those are our words.**'],
  ['Nour', 'What should be in it?'],
  ['Lina', '⚠ **What she said, in her words, with the minutes beside it.** *A date in the month I can be right about* — four minutes. *Obviously the price matters* — nine words.'],
  ['Nour', 'And the rest of her column?'],
  ['Lina', '⚠ **Her walk-away, which is the box you have left empty.** ⚠ **What does she do if we say no to everything?**'],
  ['Nour', '…She buys in Lebanon. There are two companies in Beirut that make an export carton.'],
  ['Lina', '⚠ **At what price, and how long is the lead time?**'],
  ['Nour', 'Dearer, I think. And I do not know the lead time.'],
  ['Lina', '⚠ **Then that is the most important blank on the page and it is the one we have not even guessed at.** ⚠ **A negotiation page with their walk-away empty is a page about ourselves.**'],
  ['Nour', 'And if I cannot find out?'],
  ['Lina', '⚠ **Write *unknown* in capital letters, so that nobody in the meeting pretends to know.** ⚠ **Half of what people concede, they concede to a walk-away they have imagined** — and in January we were frightened of Beirut for six weeks and she never once mentioned it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The two-column page**',
  table(['', 'Theirs', 'Ours'], [
    ['**what they ask for**', 'in their words', 'in ours'],
    ['⚠ **what they need**', '⚠ **with the minutes beside it**', 'with the arithmetic beside it'],
    ['**what it costs us to give**', '—', 'in money'],
    ['⚠ **the walk-away**', '⚠ **what do they do if we say no to everything?**', 'what we do — and it must be survivable'],
    ['**the non-negotiable**', 'theirs, if they have said one', 'ours — **one line**'],
  ], [1.7, 2.1, 2.1]),
  '⚠ **A page whose *theirs* column is in your words has one column.** ⚠ *A fair price. A reasonable arrangement.* **Those are our words** — and a column of our words tells us nothing we did not know before we sat down.',
  '⚠ **Put their needs in their words, with the minutes beside each.** *A date in the month I can be right about* — four minutes; *obviously the price matters* — nine words. ⚠ **The minutes are the only part of the column that is evidence.**',
  '⚠ **The walk-away box is the most important on the page**, and ⚠ **a negotiation page with their walk-away empty is a page about ourselves.** What do they do if we say no to everything: at what price, and how long is the lead time?',
  '⚠ **Where you do not know, write UNKNOWN in capital letters**, so that nobody in the meeting pretends to know. ⚠ **Half of what people concede, they concede to a walk-away they have imagined** — *we were frightened of Beirut for six weeks and she never mentioned it.*',
  '⚠ **And write it before the meeting, not after.** A page written afterwards records what happened; ⚠ **a page written before decides what you will not do** — and the second is the only one worth the paper.',
  '**Practise:** Fill the five rows of the *theirs* column for a negotiation of yours. ⚠ Write UNKNOWN where you do not know, and count how many boxes it goes in.',
  '**Useful phrases:**  what do they do if we say no?  ·  in their words, with the minutes  ·  UNKNOWN, in capitals  ·  a page about ourselves  ·  written before, not after  ·  we were frightened of something she never mentioned',
  '**Pronunciation – reading your own column aloud.** 🔊 **Track 21.12** Listen to the *ours* column read aloud in forty seconds: _one line we will not trade · two things we will trade and what pays for them · what we do if there is no arrangement._ ⚠ **Said aloud once before the meeting, it is remembered; read silently, it is not.** Repeat the three.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A shows a one-column page; B finds the missing column. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', '⚠ You have two columns and they both say ours.'],
  ['A', 'The left one is __________.'],
  ['B', '⚠ It is what we think __________ should want. *__________.* ⚠ Those are our words.'],
  ['A', 'What should be in it?'],
  ['B', '⚠ What __________ said, in __________ words, ⚠ **with the minutes beside it.**'],
  ['A', 'And the rest?'],
  ['B', '⚠ __________ walk-away. ⚠ **What does __________ do if we say no to everything?**'],
]));
out.push(table(['Role card 1 — the empty box', 'Role card 2 — UNKNOWN in capitals'], [[
  'The *theirs* column reads *a fair price, a reasonable arrangement, a reliable supplier* — ⚠ **all our words.** It should read *a date in the month I can be right about* (four minutes) and *obviously the price matters* (nine words). ⚠ **And her walk-away: two companies in Beirut make an export carton, price dearer, lead time UNKNOWN.**',
  'A wants to guess at four blanks. ⚠ B\'s job is to write **UNKNOWN** in capitals in each. ⚠ **Half of what people concede, they concede to a walk-away they have imagined** — *we were frightened of Beirut for six weeks and she never once mentioned it.* **Then agree who will find each one out, and by when.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the five rows of the *theirs* column. ⚠ Then count the UNKNOWNs, and say who could find each one out.'));
out.push(PHRASE_CARD(['what do they do if we say no?', 'in their words, with the minutes', 'UNKNOWN in capitals', 'a page about ourselves', 'written before, not after', 'who will find out, and by when']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Draw the two-column page for a negotiation of yours. Fill every box or write UNKNOWN.'));
out.push(table(['', 'Theirs', 'Ours'], [
  ['What they ask for', '', ''],
  ['⚠ **What they need** (with minutes)', '', ''],
  ['What it costs to give', '', ''],
  ['⚠ **The walk-away**', '', ''],
  ['The non-negotiable', '', ''],
], [1.8, 2.1, 2.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _In the *theirs* column I have _______ and _______ UNKNOWNs. Their walk-away is _______. Our one line is _______._'));
out.push(p('**Listener task:** count the pages in the room whose *theirs* column is in the other side\'s own words. ⚠ Then count the empty walk-away boxes.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for a *theirs* column saying _a fair price_ and a walk-away box left blank. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE TANNOUS ARRANGEMENT — PAGE WRITTEN BEFORE THE MEETING. 25 April. N. Mansour and L. Barakat.**',
  table(['', 'Hers', 'Ours'], [
    ['**asks for**', 'seven per cent; ninety days', 'the quarter confirmed in writing; the code with the order'],
    ['⚠ **needs**', '⚠ **"a date in the month I can be right about" — 4 min · "obviously the price matters" — 9 words · the code on every order (described January three times, asked for nothing)**', '⚠ **the quantity, because the setting-up is the cost: 800 carries it, 40 does not**'],
    ['**costs**', '—', '4 per cent on one quarter is about 55,000; the setting-up charge off one consignment is about 40,000'],
    ['⚠ **walk-away**', '⚠ **two companies in Beirut make an export carton. Price: dearer, we think. Lead time: UNKNOWN. Whether her customer accepts a Lebanese carton: UNKNOWN**', '⚠ **no arrangement; we sell her cartons one order at a time, as in January. Survivable.**'],
    ['**the one line**', 'none stated', '⚠ **whatever else we agree, the first consignment of each quarter is paid before it leaves the yard**'],
  ], [1.1, 2.9, 2.6]),
  '⚠ **Two UNKNOWNs, both in her walk-away box, and both in capitals** so that nobody in the meeting pretends to know. ⚠ **Lina is telephoning the freight agent on Thursday to ask what a Beirut carton costs to bring in** — and if he does not know, the boxes stay in capitals.',
  '⚠ **The *needs* row is the only row with evidence in it**, and the evidence is minutes and repetitions: four minutes on the dates, nine words on the price, ⚠ **January described three times and never once turned into a request.**',
  '⚠ **And the page is one side of one sheet, written before the meeting.** ⚠ **The version we wrote after the last negotiation ran to three pages and changed nothing**, because by then every decision had been made in a room without it.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many UNKNOWNs are there, and where?'));
out.push(item('2', 'What evidence is in the *needs* row?'));
out.push(item('3', 'What is said about the page written after the last negotiation?'));
out.push(box('Writer\'s box', [
  '**The two-column page — four parts:** **the table: *asks for · needs · costs · walk-away · the one line*, theirs and ours** → ⚠ **the UNKNOWNs, counted and in capitals, with who is finding them out** → ⚠ **the evidence in the needs row** → **when the page was written.**',
  '⚠ **Quote their needs inside quotation marks with the minutes attached.** ⚠ *"A date in the month I can be right about" — 4 min.* **Quotation marks keep your words out of their column**, which is the discipline the whole page depends on.',
  '⚠ **Put money in the costs row and nothing else.** ⚠ *Four per cent on one quarter is about 55,000.* **A costs row without figures is an opinion**, and in the meeting it will be argued about instead of used.',
  '⚠ **Write UNKNOWN in capitals and then name who will find it out and when.** ⚠ *Lina is telephoning the freight agent on Thursday.* **An UNKNOWN with a name against it becomes a fact in two days; one without stays unknown for a year.**',
  '⚠ **Record what their walk-away would really require** — here, whether her customer would accept a Lebanese carton at all. ⚠ **Most walk-aways have a condition inside them that nobody checks.**',
  '⚠ **And say when the page was written.** ⚠ *Written before the meeting.* **The version written afterwards ran to three pages and changed nothing**, which is the only argument for the whole exercise.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the two-column page for a negotiation at your work (**60 words or more**). Use the frame.'));
out.push(p('**______________ — PAGE WRITTEN BEFORE THE MEETING. ______________. ______________.**   **asks for** | ______________ | ______________   ⚠ **needs** | ⚠ **"______________" — ______________ min · "______________" — ______________ words** | ⚠ **______________, because ______________**   **costs** | — | ______________   ⚠ **walk-away** | ⚠ **______________. ______________: UNKNOWN. ______________: UNKNOWN** | ⚠ **______________. Survivable.**   **the one line** | ______________ | ⚠ **whatever else we agree, ______________**   ⚠ **______________ UNKNOWNs, both in ______________, and both in capitals** so that ______________. ⚠ ______________ is finding out ______________ by ______________.   ⚠ **The *needs* row is the only row with evidence in it**: ______________.   ⚠ **And the page is ______________, written before the meeting.** ⚠ The version we wrote after the last one ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be the other side, reading your page by accident** — then ask one question: **is my column in my words?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Their needs in quotation marks, with minutes', ''],
  ['Figures in the costs row', ''],
  ['UNKNOWN in capitals, with a name and a date', ''],
  ['Their walk-away, and the condition inside it', ''],
  ['One line only in the non-negotiable box', ''],
  ['When the page was written', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *walk-away* row. The class says which half is guessed and which is known.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full two-column page for a negotiation ahead of you (**140 to 180 words**): their asks and needs in their own words with the minutes, the costs in money, both walk-aways with the UNKNOWNs in capitals, and your one line.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is their walk-away box filled or guessed?_   ? _which box is in your words rather than theirs?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the other side\'s walk-away a guess? Usually all three — ⚠ **and in two of three the guess is more frightening than anything the other side has actually said.**'));
out.push(box('Homework', ['Write your final text. Then fill the walk-away box for a negotiation ahead of you: what they do if you say no to everything, at what price, and how long it takes them. Write UNKNOWN where you do not know, and name who will find out (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 21.7 =======================
out.push(pb());
out.push(h2('21.7  Review & Mediate: two people who both compromised'));
out.push(p('**Function:** explaining an agreement to the people who will keep it   ·   **Review:** position and interest · the condition · the conditional offer · *in that case* · the non-negotiable · the two-column page'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 21 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What is the difference between a position and an interest, and what question finds the interest?',
  '**2** What is the test of a condition, and what is a hope with grammar round it?',
  '**3** Why must the offer and the ask be in one sentence?',
  '**4** What does silence do to a move, and what can you say when you have nothing to give?',
  '**5** How many non-negotiables may you have, and why?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Lina notice about the agreed terms?   **A** they are too short   **B** the thing that settled it is not in them   **C** they are in the wrong order'));
out.push(p('**b**  Listen again. **1** What do both sides believe about who gave more? **2** Why is the date list not in the agreement?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.13  "The thing that settled it is not in the agreement"', [
  ['Lina', 'May I ask about the agreed terms? ⚠ **There are five lines and the thing that settled it is not one of them.**'],
  ['Nour', 'Go on.'],
  ['Lina', 'The five lines are the price held twelve months, four per cent on the first quarter, the quarters confirmed in writing, sixty days, and the first consignment of each quarter paid before it leaves. ⚠ **Every one of those is something one of us gave up.**'],
  ['Nour', 'That is what an agreement is.'],
  ['Lina', '⚠ **And the thing that ended the argument was the date list**, which is not in it anywhere. She stopped asking about the discount the afternoon you sent her the dates for three months. ⚠ **It cost nothing, so nobody wrote it down.**'],
  ['Nour', 'It is in a letter.'],
  ['Lina', '⚠ **It is in a letter of mine to her, which is in a file, and in two years nobody will know it was the reason for any of this.** ⚠ **They will have the five expensive lines and none of the cheap one.**'],
  ['Nour', 'Does that matter, if the dates keep being sent?'],
  ['Lina', '⚠ **They will keep being sent while you are here.** ⚠ **And both of you think you gave more than you got** — she says she came down from seven to four and from ninety to sixty, and you say you held a price for a year and took the setting-up charge off.'],
  ['Nour', 'We both did give more than we got.'],
  ['Lina', '⚠ **You both gave up the things the other one did not want.** ⚠ **She did not want seven per cent; she wanted to be right in front of her customer. You did not want sixty days; you wanted the quarter paid at the start.** ⚠ **So each of you paid in a currency the other one does not spend.**'],
  ['Nour', 'And what do I do about it?'],
  ['Lina', '⚠ **Put the date list in the agreed terms, as a line, with no price next to it** — *the date list for the following three months reaches her by the 20th of each month.* ⚠ **It is the only line in the document that anybody will thank us for**, and it is the only one that is currently nowhere.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – what is in the agreement, and what settled it**',
  table(['What settled it', 'What is in the agreed terms'], [
    ['⚠ **the date list, three months ahead, by the 20th**', '⚠ **nothing — it cost nothing, so nobody wrote it down**'],
    ['—', 'the price held twelve months'],
    ['—', 'four per cent on the first quarter'],
    ['—', 'the quarters confirmed in writing'],
    ['—', 'sixty days, and the first consignment paid before it leaves'],
  ], [2.6, 3]),
  '⚠ **The thing that settles a negotiation is usually the thing that cost nothing, and what gets written down is what cost something** — ⚠ **so an agreement records the price of the deal and not the reason for it.**',
  '⚠ **And then the person who made it leaves, and the reason leaves with them.** ⚠ *They will have the five expensive lines and none of the cheap one.* **The dates will keep being sent while the person who understands why is in the room.**',
  '⚠ **Both sides believe they gave more, and both are right** — ⚠ **because each gave up the thing the other did not want.** *She did not want seven per cent; she wanted to be right in front of her customer. You did not want sixty days; you wanted the quarter paid at the start.*',
  '⚠ **Each paid in a currency the other one does not spend**, which is what a good arrangement looks like from the inside: **it feels expensive to both and is cheap to both.**',
  '⚠ **So put the free thing in the document, as a line, with no price next to it.** ⚠ *The date list for the following three months reaches her by the 20th of each month.* **It will be the only line anybody thanks you for, and it is the only one that is currently nowhere.**',
  '**Practise:** Take an agreement at your work. List what is in it, then say what actually settled it. ⚠ Ask whether that thing is written anywhere at all.',
  '**Useful phrases:**  the thing that settled it  ·  it cost nothing, so nobody wrote it down  ·  both of us think we gave more  ·  a currency the other does not spend  ·  put it in with no price next to it  ·  the reason leaves with the person',
  '**Pronunciation – the line with no price next to it.** 🔊 **Track 21.14** Listen: _the date list for the following three months reaches her by the twentieth of each month._ ⚠ **Read exactly like the other four lines — same speed, same flatness.** **A free line read warmly sounds like a favour, and a favour can be withdrawn.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A describes an agreement; B finds what actually settled it and asks whether it is written down.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'Five agreed terms, every one a thing somebody gave up. ⚠ **The date list settled it and is in no line of the document.** Both sides believe they gave more, ⚠ **because each gave up what the other did not want.** The repair: one line, no price next to it.',
  'Take an agreement of your own. ⚠ B asks two questions: **what is written in it**, and then ⚠ **what was the last thing that changed before they said yes?** ⚠ **Expect the second answer to be absent from the document**, and expect it to have cost nothing.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the lines of the agreement and the thing that settled it. ⚠ Then say which side gave up what the other did not want.'));
out.push(PHRASE_CARD(['the thing that settled it', 'it cost nothing, so nobody wrote it', 'both think they gave more', 'a currency the other does not spend', 'one line, no price next to it', 'the reason leaves with the person']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher pairs you with somebody whose work you do not know. Find what settled an agreement of theirs, and whether it is written anywhere.'));
out.push(table(['What is in the agreement', 'What it cost', 'What actually settled it', 'Is it written anywhere?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.8, 1, 1.8, 1.4]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what settled their agreement. This is the **ninth** unit of this book, and the thing nobody writes down is this: **an agreement records what each side gave up, because that is what each side will want proof of, and the thing that actually ended the argument is almost always something that cost nobody anything and therefore appears in no line of it — so the document holds the price of the arrangement and not the reason for it, and when the two people who made it have gone, their successors inherit five expensive terms, no idea why any of them were acceptable, and both sides still believing they were the one who gave more.**'));
out.push(p('_The agreement says _______. What settled it was _______, which cost _______ and is written _______._'));
out.push(p('**Listener task:** add to the Book 2 office-word list: _a stated position · an interest · a conditional concession · the non-negotiable · the agreed terms · a walk-away point._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 7)', 10));
out.push(p('⚠ **This unit practises Part 7: filling in a form from a text.** Read the extract, then complete the negotiation record. Write **one, two or three words or a number** in each space.'));
out.push(box(null, [
  '**Extract from the covering note to the agreed terms, 28 April. N. Mansour to Mr Ayoub.**',
  '_Five lines agreed. The price held twelve months, four per cent on the first quarter only and on condition the quarter comes in one consignment, the quantity for each quarter confirmed in writing four weeks before it starts, sixty days to pay, and the first consignment of each quarter paid before it leaves the yard. That last one I said once, before she asked, and gave the reason, and she never came back to it. She opened at seven per cent and ninety days and came down twice. We answered every move the same day except one, and that one took six days and came back as a new position. What actually ended the argument was the list of dates for three months ahead, sent on the 22nd, which costs us nothing and is in none of the five lines; I am adding it as a sixth, with no price against it. Her alternative was two companies in Beirut; the lead time is still unknown and so is whether her customer would accept a Lebanese carton. Four per cent on one quarter is about 55,000, and the setting-up charge we took off the first consignment is about 40,000._',
]));
out.push(table(['NEGOTIATION RECORD', ''], [
  ['Lines agreed', '______________'],
  ['Her opening position', '______________'],
  ['Number of times she came down', '______________'],
  ['Our non-negotiable', '______________'],
  ['Number of times it was stated', '______________'],
  ['Moves answered late', '______________'],
  ['What the late answer came back as', '______________'],
  ['⚠ **What actually ended the argument**', '______________'],
  ['Her walk-away', '______________'],
  ['Cost of the four per cent', '______________'],
], [2.2, 3]));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 1 — an internal note, 35 to 45 words.** Here: telling the person who will keep an agreement what actually settled it.',
  'The shape: ⚠ **what settled it** · ⚠ **what it costs** · **what must go on happening, by when.**',
  '⚠ **In forty words you cannot summarise the terms, so do not try.** The terms are in the document; ⚠ **the reason is in nobody\'s head but yours**, and that is the only thing worth forty words.',
  '⚠ **Give the date, not the sentiment.** *The date list reaches her by the 20th of each month* — ⚠ **a thing a successor can do** — rather than *we must keep her informed*, which nobody can do on purpose.',
  '⚠ **And say what it costs, even when the answer is nothing.** ⚠ *It costs us nothing* is the most important four words in the note, **because a free thing with no price written against it is the first thing a successor stops doing.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** Write to the person who will keep an agreement after you (**35 to 45 words**). Give ⚠ **what settled it**, ⚠ **what it costs**, and **what must go on happening, by when.**'));
out.push(p('______________, the ______________ is what settled ______________, not ______________. ⚠ **It costs ______________.** It must reach ______________ by ______________ of each ______________. ⚠ If ______________ stops, ______________ will ______________, and ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['⚠ What settled it, named', ''],
  ['What it costs — even if nothing', ''],
  ['What must go on happening, with a date', ''],
  ['35 to 45 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the agreed terms of an arrangement at your work in full (**140 to 180 words**): each line with its condition, the non-negotiable stated once with its reason, and ⚠ **the line that settled it, with no price against it.**'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then take one agreement at your work, find what actually settled it, and write it as a line of the agreement with no price next to it (60+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 21 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  She asked for a discount and spent four minutes on delivery dates. Her interest is ___.   a) the discount   b) the dates   c) both equally',
  '2  Which question finds an interest?   a) what do you want from us?   b) what will you tell your own customer?   c) what is your best price?',
  '3  _We ___ hold the price for the year provided that each quarter is confirmed._   a) hope to   b) can   c) might',
  '4  Which is a condition rather than a hope?   a) provided that trade is normal   b) provided that the order is in writing by Thursday   c) provided that things improve',
  '5  _I would be prepared to look at three per cent ___ you would take the quarter in one consignment._   a) if   b) when   c) unless',
  '6  She comes down from ninety days to sixty. You say ___.   a) thank you, I will come back to you   b) in that case I can look at the first quarter   c) nothing, and wait',
  '7  How many non-negotiables should you have?   a) one   b) three or four   c) as many as you need',
  '8  A concession given with nothing attached becomes ___.   a) goodwill   b) the price   c) a precedent you can withdraw',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 21.15** Listen to the exchange. Complete the note.   Lines in the agreement: ______   What settled it: ______   Where it is written: ______   What each side believes: ______   What each gave up: ______'));
out.push(dlg('Track 21.15  Audio script (read after the check)', [
  ['Lina', 'There are five lines in the agreed terms and the thing that settled it is not one of them.'],
  ['Nour', 'The five are the price held twelve months, four per cent on the first quarter, the quarters confirmed in writing, sixty days, and the first consignment paid before it leaves.'],
  ['Lina', 'Every one of those is something one of you gave up. And the thing that ended the argument was the date list, which is in a letter in a file and in no line of the document. It cost nothing, so nobody wrote it down.'],
  ['Nour', 'Does that matter, if the dates keep being sent?'],
  ['Lina', 'They will keep being sent while you are here. And both of you think you gave more than you got.'],
  ['Nour', 'We both did.'],
  ['Lina', 'You both gave up the things the other one did not want. She did not want seven per cent; she wanted to be right in front of her customer. You did not want sixty days; you wanted the quarter paid at the start. Each of you paid in a currency the other one does not spend.'],
  ['Nour', 'So what do I do?'],
  ['Lina', 'Put the date list in as a sixth line, with no price next to it.'],
]));
out.push(p('**C  Writing.** Write three lines of an agreement at your work (**60 words or more**): one with a condition attached, the non-negotiable with its reason, and the line that settled it with no price against it.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 21)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ tell a position from an interest, and ask the question that finds the interest',
  '☐ say yes with a condition the other side can make true by themselves',
  '☐ attach an ask to every concession, in one sentence',
  '☐ answer a move with *in that case*, and give a date when I have nothing else',
  '☐ state one non-negotiable, once, with its reason and a survivable walk-away',
  '☐ write the two-column page before the meeting, with UNKNOWN in capitals',
  '☐ find what actually settled an agreement and put it in writing',
  '☐ write a conditions page, a moves record, a two-column page and the agreed terms',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Unit 21 · Student\'s Book');
