// Proactive Business English B1 · Syria Edition · Book 1 · Unit 1 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'coordinator · counterpart · remit · scope of work · point of contact · chain of command · handover · deputy · stand-in · dotted line · workload · portfolio · brief · terms of reference · account opening · account manager · service level · turnaround · cut-off · standing instruction · delegated authority · sign-off limit · reporting line · desk cover · out of scope · sole contact · copy list · holiday cover · second site · working practice';
const BACK_AT_B1 = 'cover · report to · look after';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 1  The Account and the Person'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**1.1**  say who you are and why you are calling, in ninety seconds',
  '**1.2**  separate what you **do** from what you are **answerable for**',
  '**1.3**  ask a new counterpart four questions, and the fifth that nobody asks',
  '**1.4**  explain a colleague\'s role without tying it to a person',
  '**1.5**  say what is not yours without passing anybody the buck',
  '**1.6**  keep a first call going, usefully, past forty seconds',
  '**1.7**  Review & Mediate: who is on this account, and who is not',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Where this book starts, and who you are in it', [
  'Two years have passed since A2. Sham Trading now has **two sites**: the Mezzeh office, warehouse and trade counter, and the second store at **22 Baghdad Street**, which opened on **8 June**. **Nour Mansour is administration coordinator across both** — which is why this book is different from the last one.',
  'At A2 Nour was told what to do and learned how to say it. At B1 she is **answerable**. That is one word and it changes every document in this book: an explanation has to carry its cause, a rule has to be carried by somebody who did not write it, a report has to say who said what, and a decision has to be written down before the room empties.',
  '⚠ So the English gets harder in a particular direction. The tenses are the ones in the general B1 course, in the same order, and you will meet them on the same page as the people who use them. What is new is **the weight of the sentence**: at A2 a wrong word was a mistake, and at B1 a wrong word is a **claim** — *caused* and *contributed to* are two different things to say about a person, and Unit 7 is about nothing else.',
  '**One practical note.** This book asks for more words than the examination does. B1 Business Preliminary wants about 35 to 45 words in Writing Part 1 and 60 to 80 in Part 2; the units ask for **50 or more** and **100 to 140**. That is on purpose. A writer who can do a hundred and forty can do eighty; the reverse is not true.',
], C.lyellow, C.orange));

// ======================= CYCLE 1.1 =======================
out.push(pb());
out.push(h2('1.1  Ninety seconds'));
out.push(p('**Function:** opening a call with somebody who does not know you   ·   **Grammar:** present simple and present continuous, contrasted   ·   **Pronunciation:** one stressed word in each of the five parts'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Telephone a colleague and introduce yourself as though they had never heard of you. Time it. How long did it take, and how much of it did they need?'));
out.push(p('**b**  Which of these belongs in the first ninety seconds of a call to a stranger, and which does not? _your name · your job title · your company · which site you are at · how long you have worked there · why you are calling · what you want from this call · how you are_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub say is missing from the ninety seconds?   **A** her name   **B** what she wants from the call   **C** the company name'));
out.push(p('**b**  Listen again. **1** Why does he object to _I am the administration coordinator_ on its own? **2** What is the difference he draws between _I handle_ and _I am covering_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.1  Ninety seconds, timed', [
  ['Mr Ayoub', 'You are telephoning a freight agent who has never heard of us. Ninety seconds. I am timing it.'],
  ['Nour', 'Good morning, my name is Nour Mansour and I am the administration coordinator at Sham Trading.'],
  ['Mr Ayoub', 'Stop. Administration coordinator of what? He has no idea whether that means you order the tea or you sign the contracts.'],
  ['Nour', '…I handle the paperwork for both our sites — the Mezzeh warehouse and the Baghdad Street store.'],
  ['Mr Ayoub', 'Better. That is a job he can picture. Go on.'],
  ['Nour', 'I am calling because we are opening an account with a freight agent this month, and I am collecting three quotations.'],
  ['Mr Ayoub', 'Now the part everybody leaves out. What do you want from this call?'],
  ['Nour', 'A quotation?'],
  ['Mr Ayoub', 'Then say so, and say by when. Otherwise he puts the telephone down with a pleasant feeling and no task.'],
  ['Nour', 'I would like a quotation by Thursday, and I would like to know who I speak to after that.'],
  ['Mr Ayoub', 'Eighty-one seconds, and the last two sentences did the work. One more thing: you said *I am covering Baghdad Street*. Keep that for the temporary half of the job and keep *I handle* for the permanent half. The difference tells him whether to write your name down or the role.'],
  ['Nour', 'And if he asks how long I have been there?'],
  ['Mr Ayoub', 'Answer it honestly and briefly. He is not asking for your history; he is deciding whether he will have to repeat himself in October.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The ninety seconds, in five parts** — and the fifth is the one that is usually missing.',
  table(['Part', 'What it is', 'Example'], [
    ['**1 Who**', 'your name, said slowly', 'My name is Nour Mansour.'],
    ['**2 Where**', 'the company **and the site**', 'from Sham Trading, at the Mezzeh office.'],
    ['**3 What you do**', 'a job a stranger can picture — not a title', 'I handle the paperwork for both our sites.'],
    ['**4 Why you are calling**', 'the occasion', 'We are opening a freight account this month.'],
    ['**5 What you want from this call**', '**the ask, with a date**', 'I would like a quotation by Thursday.'],
  ], [1.1, 2.1, 2.3]),
  '**Present simple and present continuous, in a job description**',
  table(['', 'Use it for', 'Example'], [
    ['**present simple**', 'the permanent half of the job', 'I **handle** the paperwork. We **deliver** on Tuesdays.'],
    ['**present continuous**', 'the temporary half, now', 'I **am covering** Baghdad Street until September.'],
    ['**present continuous**', 'the current occasion', 'We **are opening** an account this month.'],
  ], [1.3, 1.8, 2.4]),
  '⚠ **A job title is not a job.** _I am the administration coordinator_ tells a stranger nothing: he cannot tell whether you order the tea or sign the contracts. **Say what passes through your hands.**',
  '⚠ **Part 5 is the part that is missing**, nine calls out of ten. Without it the other person puts the telephone down with a pleasant feeling and no task, and nothing happens for a fortnight.',
  '⚠ **The simple/continuous choice carries information.** _I handle_ says *write down the role*; _I am covering_ says *write down my name, and ask again in September*. Choose on purpose.',
  '**Practise:** Say your own ninety seconds in five parts. Then say it again with part 3 as a title and notice how much worse it is.',
  '**Useful phrases:**  My name is…  ·  from … , at the … office  ·  I handle…  ·  I am covering… until…  ·  I would like … by Thursday.  ·  and who I speak to after that',
  '**Pronunciation – one stressed word in each part.** 🔊 **Track 1.2** Listen: _**Mansour** · Sham **Trading** · the **paperwork** · a freight **account** · by **Thursday**._ Five parts, five stresses. Said flat, all five sound like one sentence and the listener keeps none of them. Repeat each part twice.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives ninety seconds; B stops them wherever a stranger would be lost, and asks for part 5. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Good morning, my name is __________ and I am the __________ at __________.'],
  ['B', 'Stop. __________ of what? They have no idea whether that means __________ or __________.'],
  ['A', '…I __________ for __________.'],
  ['B', 'Better. That is a job they can picture. Go on.'],
  ['A', 'I am calling because __________, and I am __________.'],
  ['B', 'Now the part everybody leaves out. What do you want from this call?'],
  ['A', '__________, by __________. And __________ after that.'],
  ['B', '__________ seconds, and the last two sentences did the work.'],
]));
out.push(table(['Role card 1 — a bank you have not used', 'Role card 2 — a customer who has changed hands'], [[
  'A is opening a second account for the Baghdad Street takings. The title is useless to the officer; what matters is that A banks the cash from two sites daily and needs a paying-in arrangement. Part 5: an appointment this week.',
  'A\'s customer has been sold to a bigger firm and nobody there knows Sham Trading. Part 5: the name of whoever now approves credit, and whether the existing terms stand.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs give their ninety seconds to the class – **without the book**, and timed.'));
out.push(p('**Listener task:** write the five parts as you hear them, and ring the one that was missing or thin. Then say what the caller wanted, in one sentence. If you cannot, part 5 was the problem.'));
out.push(PHRASE_CARD(['My name is…', 'at the Mezzeh office', 'I handle…', 'I am covering… until…', 'by Thursday', 'and who I speak to after that']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write your own ninety seconds in the five parts, for a real call you have to make. Then say it to two colleagues; each one writes down only what you wanted.'));
out.push(table(['Part', 'Mine'], [
  ['**1 Who**', ''], ['**2 Where**', ''], ['**3 What I do**', ''],
  ['**4 Why I am calling**', ''], ['**5 What I want, with a date**', ''],
], [1.2, 4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My part 3 used to be "_______". It is now "_______". The thing I most often leave out is _______._'));
out.push(p('**Listener task:** count how many people in the room describe their job with a title. Then count how many could say what passes through their hands. The two numbers are rarely the same.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I am handling the paperwork_ for the permanent job, and _I work here since two years_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Sham Trading sends to a new counterpart, and answer the questions.'));
out.push(box(null, [
  '**SHAM TRADING CO. — who we are, and who you will be dealing with**',
  '**The company.** Packaging — wrap, boxes, tape and labels — wholesale to about four hundred businesses in Damascus and the Ghouta, and retail from two stores. We were founded in 1998 and have been in Mezzeh since 2011.',
  '**Two sites, and they are not the same.** The **Mezzeh** site is the office, the warehouse and the trade counter: everything is stocked there and all paperwork is raised there. The **Baghdad Street** store, open since 8 June, carries the twenty lines we sell most and raises no paperwork of its own. If you are delivering, you are delivering to Mezzeh unless somebody has told you otherwise in writing.',
  '**Who you will be dealing with.** **Nour Mansour**, administration coordinator, is the point of contact for both sites — orders, paperwork, queries, anything you are not sure about. **Hala Mourad** runs the Mezzeh counter and will answer if Nour is out. **Abu Yasser** is the warehouse and signs nothing he has not counted. **Mr Khaled Ayoub**, office manager, approves anything over 500,000.',
  '**One thing we ask of you.** Put the **site** on every document. Half the trouble we have ever had with a new supplier has been a lorry at one address and a signature expected at the other.',
  '**And one thing we will do for you.** Anything you ask us in writing is answered the same day, even if the answer is *I do not know yet and I will tell you on Thursday*.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does the page say the two sites are not the same, and what does a reader have to do about it?'));
out.push(item('2', 'What is the difference between the way Nour and the way Hala are described?'));
out.push(item('3', 'What does the last paragraph promise, and what does it carefully not promise?'));
out.push(box('Writer\'s box', [
  '**A "who we are" page — five headed parts:** the company in three lines → **the sites, and how they differ** → who the reader will deal with, by role → **one thing we ask of you** → one thing we will do for you.',
  '**Describe a person by what passes through them, not by their title.** *Orders, paperwork, queries, anything you are not sure about* is a description a stranger can act on. *Administration coordinator* is a description nobody can act on.',
  '**Ask for exactly one thing.** *Put the site on every document.* A page that asks for six things is a page that gets none of them, and the one you choose should be the one that has cost you most — so say what it cost: *half the trouble we have ever had*.',
  '⚠ **Promise something you can keep on your worst day.** *Answered the same day, even if the answer is "I do not know yet"* is keepable; *answered the same day* on its own is not, and the first time you break it the whole page is worth nothing.',
  '⚠ Name people **and** roles. A page of names goes out of date the week somebody leaves; a page of roles tells a stranger nothing about who to ask for. Both, every time.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the "who we are" page for your own workplace (**50 words or more**). Use the frame.'));
out.push(p('**______________ — who we are, and who you will be dealing with**   **The company.** ______________. We were founded in ______________ and ______________.   **______________.** The ______________ site is ______________. The ______________ is ______________. If you are ______________, you are ______________ unless ______________.   **Who you will be dealing with.** ______________, ______________, is the point of contact for ______________. ______________ will answer if ______________. ______________ approves ______________.   **One thing we ask of you.** ______________. ______________ of the trouble we have ever had has been ______________.   **And one thing we will do for you.** ______________, even if ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says describe a person by what passes through them, not by their title. Your second name has a title and no list — what actually arrives on that desk?"',
  '⚠ **Do not rewrite the sentence for the writer.** Quote the box, ask one question, and stop. The writer knows the answer; you do not.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could a stranger use this page to get something done without telephoning to ask who to ask?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The sites, and how they differ', ''],
  ['People described by what passes through them', ''],
  ['Exactly one thing asked of the reader, with what it has cost', ''],
  ['A promise that holds on a bad day', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their **one thing we ask of you**. The class says which one they would actually do, and why the others are too many.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the first time you dealt with a company and could not work out who to speak to (**100 to 140 words**). Say what you were trying to do, how many people you went through, what finally worked, and what one line on a page would have saved you.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the line that would have saved them_   ✓ _present simple for the permanent, continuous for the temporary?_   ? _did anybody ever tell them, or did they work it out?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many people did the room go through in total? Add it up on the board. That number is what a half-page costs when nobody writes it.'));
out.push(box('Homework', ['Write your final text. Then write your own ninety seconds in five parts, use it on a real call this week, and write three lines on what the other person asked you that you had not planned for (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 1.2 =======================
out.push(pb());
out.push(h2('1.2  What I do and what I am answerable for'));
out.push(p('**Function:** describing a role precisely   ·   **Grammar:** _I handle · I am responsible for · I report to · I cover_   ·   **Pronunciation:** the contrastive stress that separates two halves'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three things you **do** every week. Then name three things that **go wrong and come back to you**. How much do the two lists overlap?'));
out.push(p('**b**  Which of these says you would be asked about it if it failed? _I handle the invoices · I am responsible for the invoices · I help with the invoices · The invoices come to me_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Hala written on her part of the page?   **A** too little   **B** her job title and her hours   **C** somebody else\'s job'));
out.push(p('**b**  Listen again. **1** What test does Nour give for *responsible for*? **2** Why does she say the dotted line matters to a stranger?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.3  "Who gets asked if it goes wrong?"', [
  ['Nour', 'Your three lines for the contact page. You have written: Hala Mourad, customer service, Mezzeh counter, eight until four.'],
  ['Hala', 'That is my job.'],
  ['Nour', 'That is your title and your hours. What passes through you?'],
  ['Hala', 'Counter sales. Telephone orders. Complaints, mostly.'],
  ['Nour', 'Good — that is the page. Now a harder one. Of those three, which would you be asked about if it went wrong?'],
  ['Hala', 'All of them?'],
  ['Nour', 'Think about Thursday. The wrap order went out short. Who did Mr Ayoub ask?'],
  ['Hala', 'Abu Yasser. Because it was picked wrong.'],
  ['Nour', 'So you **handle** telephone orders and you are not **answerable** for what leaves the warehouse. Two different sentences, and a stranger needs both: _I handle telephone orders; the picking is the warehouse._'],
  ['Hala', 'And complaints?'],
  ['Nour', 'Complaints you are answerable for, which is why that line should say so. _I am responsible for complaints_ — meaning if a complaint is still open in a fortnight, it is me somebody comes to.'],
  ['Hala', 'There is one more. I cover the counter at Baghdad Street on Saturdays.'],
  ['Nour', 'Then that is a dotted line, and it goes on the page too. A stranger who telephones on a Saturday and is told "she is at the other site" learns that we are disorganised. One line prevents it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Four different claims about a job**',
  table(['Shape', 'What it claims', 'The test'], [
    ['**I handle** + noun', 'it passes through me', 'what arrives on my desk'],
    ['**I am responsible for** + noun', 'I am **answerable** if it fails', '⚠ who gets asked when it goes wrong'],
    ['**I help with** + noun', 'somebody else owns it', 'I could be away and it would still happen'],
    ['**I report to** + person', 'who asks me', 'whose question I must answer'],
    ['**I cover** + noun/person', 'temporary, and it has an end', 'when does it stop'],
  ], [1.6, 1.8, 1.9]),
  '⚠ **The test for _responsible for_ is one question: who gets asked when it goes wrong?** Not who does the work. A learner who applies that test to their own job usually finds that the two lists are different, and that nobody has ever said so out loud.',
  '⚠ **_Handle_ and _be responsible for_ are not synonyms** and the difference is money. *I handle telephone orders; the picking is the warehouse* is a sentence that protects two people.',
  '⚠ **The dotted line goes on the page.** Saturday cover, holiday cover, the second site — the arrangements that are nobody\'s main job are the ones a stranger falls down. One line each.',
  '⚠ _Report to_ in this unit means **whose question you have to answer**. It will mean something else in Unit 10, where you report **to** somebody what somebody else said.',
  '**Practise:** Write your own four lines. 1 what you handle 2 what you are answerable for 3 what you only help with 4 who you report to 5 what you cover, and until when',
  '**Useful phrases:**  I handle…  ·  I am responsible for…  ·  I only help with…  ·  I report to…  ·  I cover … on Saturdays  ·  who gets asked when it goes wrong',
  '**Pronunciation – the contrast that separates two halves.** 🔊 **Track 1.4** Listen: _I handle the **orders**; the **picking** is the warehouse._ The stress moves to the two contrasted words, and the semicolon is a real pause. Said evenly, the sentence sounds like one claim instead of two. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A describes a job by title; B applies the test and separates the two halves. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'My three lines: __________, __________, __________.'],
  ['B', 'That is your title and your hours. What passes through you?'],
  ['A', '__________. __________. __________, mostly.'],
  ['B', 'Good. Now — of those three, which would you be asked about if it went wrong?'],
  ['A', 'All of them?'],
  ['B', 'Think about __________. Who did __________ ask?'],
  ['A', '__________. Because __________.'],
  ['B', 'So you **handle** __________ and you are not **answerable** for __________. A stranger needs both sentences.'],
]));
out.push(table(['Role card 1 — the driver', 'Role card 2 — the accountant'], [[
  'Fadi handles the van, the route and the notes. He is answerable for what he signs for. He is not answerable for what was picked, and has twice been blamed for it.',
  'Nadia handles invoices and the ledger. She is answerable for the figures. She only helps with chasing payment, which is sales — and everybody telephones her about it anyway.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the separation for the class – **without the book**.'));
out.push(p('**Listener task:** draw two columns, *handles* and *answerable for*, and fill them in as you listen. Then say which item in the room is in the wrong column at the moment.'));
out.push(PHRASE_CARD(['I handle…', 'I am responsible for…', 'I only help with…', 'I report to…', 'I cover … on Saturdays', 'who gets asked when it goes wrong']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write your own role in the four claims, with the dotted lines. Then have a colleague who knows your job check the second column — they will move at least one item.'));
out.push(table(['I handle', 'I am answerable for', 'I only help with', 'Dotted lines'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1.3, 1.2, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I handle _______. I am answerable for _______. The one my colleague moved was _______, and they were right / wrong because _______._'));
out.push(p('**Listener task:** write down every item that somebody else moved. Those are the items that have never been agreed out loud by anybody.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I am responsible of_ and _I am reporting to Mr Ayoub_ for the permanent line. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the contact page as it was rewritten, and answer the questions.'));
out.push(box(null, [
  '**SHAM TRADING — WHO TO ASK FOR, AND WHAT FOR**',
  '**Nour Mansour · administration coordinator · both sites · 011 ___ ____**',
  'Handles: orders, paperwork, queries, anything you are not sure about. Answerable for: the account, the paperwork being right, and anything you were told and not told again. Reports to: Mr Ayoub. Dotted line: I am covering Baghdad Street myself until September.',
  '**Hala Mourad · customer service · Mezzeh counter · 8 a.m. to 4 p.m.**',
  'Handles: counter sales, telephone orders, complaints. Answerable for: complaints — if one is still open after a fortnight, ask her. Only helps with: chasing payment. Dotted line: at Baghdad Street on Saturdays, so the Mezzeh counter is Nour on Saturdays.',
  '**Abu Yasser · warehouse · Mezzeh**',
  'Handles: goods in, goods out, the gate sheet. Answerable for: what was counted against the order before loading, which he signs by name. Not answerable for: what was ordered.',
  '**Mr Khaled Ayoub · office manager**',
  'Answerable for: anything over 500,000, and anything anybody has said no to twice.',
  '⚠ **Why this page is laid out in three lines each.** The first line is where to find somebody. The second is what passes through them. The third is **who gets asked when it goes wrong**, which is the line that makes the page worth printing, and the line every contact sheet we have ever been sent leaves out.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the page say about Saturdays, and why does that line exist at all?'));
out.push(item('2', 'What is Abu Yasser **not** answerable for, and why is that worth printing?'));
out.push(item('3', 'What makes Mr Ayoub\'s entry shorter than the others?'));
out.push(box('Writer\'s box', [
  '**A contact page — three lines per person:** where to find them → **handles** → **answerable for**, and where it is useful, *not* answerable for.',
  '**The third line is the page.** Where to find somebody is on any letterhead; what passes through them is guessable; **who gets asked when it goes wrong** is the thing a stranger cannot know and most needs. Every contact sheet omits it.',
  '**Print the negative where it has cost somebody.** *Not answerable for: what was ordered.* Abu Yasser has been blamed for a picking list twice, so that half-line is worth more than his telephone number.',
  '⚠ Put the dotted lines in and make them **reciprocal**: if Hala is at the other site on Saturdays, say who is at this one. A dotted line written from one side only is how a caller gets told *she is not here* and nothing else.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the contact page for your own section — three or four people, three lines each (**50 words or more**). Use the frame.'));
out.push(p('**______________ — WHO TO ASK FOR, AND WHAT FOR**   **______________ · ______________ · ______________ · ______________**   Handles: ______________. Answerable for: ______________. Reports to: ______________. Dotted line: ______________.   **______________ · ______________ · ______________**   Handles: ______________. Answerable for: ______________ — if ______________, ask ______________. Only helps with: ______________.   **______________ · ______________**   Handles: ______________. Answerable for: ______________. Not answerable for: ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says the third line is the page. Two of your people have a *handles* line and no *answerable for* line — who gets asked when those things go wrong?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **if something failed tomorrow, does this page say whose telephone would ring?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three lines for each person', ''],
  ['An _answerable for_ line for everybody', ''],
  ['At least one _not answerable for_, where it has cost somebody', ''],
  ['Dotted lines, written from both sides', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one person\'s three lines. The class says whether they could now ring the right person first time.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something at your work that everybody does a bit of and nobody is answerable for (**100 to 140 words**). Say what it is, what happens when it fails, who ends up dealing with it, and who you think it should belong to.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the thing nobody owns_   ✓ _handle / be responsible for used correctly?_   ? _has anybody ever said this out loud?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Nearly every workplace has one of these. Is it always the same **kind** of thing? It usually is: the task that sits between two people\'s jobs and belongs to the gap.'));
out.push(box('Homework', ['Write your final text. Then write your own three lines — find, handles, answerable for — and show them to the person who would get asked if you were wrong (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 1.3 =======================
out.push(pb());
out.push(h2('1.3  Four questions and a fifth'));
out.push(p('**Function:** opening an account with somebody new   ·   **Grammar:** question forms, direct and indirect   ·   **Pronunciation:** the falling question'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  You are about to deal with a company for the first time. What four things must you know before the first order?'));
out.push(p('**b**  Put these in order of usefulness: _What are your prices? · Who do I speak to about a problem? · What is your lead time? · How do you want the order? · Who signs?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which question gets the most useful answer?   **A** the price question   **B** the one about what goes wrong   **C** the one about signatures'));
out.push(p('**b**  Listen again. **1** Why does Nour ask about problems before she has had one? **2** What does the agent tell her that she had not asked for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.5  The fifth question', [
  ['Nour', 'Four things before we place anything, if I may. Who do I speak to about a collection once it has been booked?'],
  ['Agent', 'Me, or Samira on the desk if I am out. Never the driver — he will agree to anything.'],
  ['Nour', 'Thank you, that is useful already. Second: what notice do you need for a collection?'],
  ['Agent', 'By four o\'clock the day before. After four it becomes a favour rather than a booking.'],
  ['Nour', 'Third: how do you want the booking — telephone, or in writing?'],
  ['Agent', 'In writing, please. Telephone bookings are the ones that go wrong and then it is your word against mine.'],
  ['Nour', 'Fourth: who signs for the goods at your end, and does that person check the count?'],
  ['Agent', 'The driver signs. He does not check the count and he will tell you he has.'],
  ['Nour', 'That is worth knowing. And one more, which is the one I really wanted to ask. **With a new customer like us, what goes wrong most often in the first two months?**'],
  ['Agent', 'Addresses. Nine times out of ten. Somebody gives us the office address and the goods are at the warehouse, or the other way round, and we charge for a failed collection and the customer is furious.'],
  ['Nour', 'We have two sites.'],
  ['Agent', 'Then put the site on the booking, in capitals, every time, and you will never hear from me about it. I tell everybody that and about a third of them do it.'],
  ['Nour', 'Is there anything else you wish customers asked you?'],
  ['Agent', 'That, mostly. You would be surprised how few people ask what goes wrong. They ask the price four times and the address never.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The four questions, and the fifth**',
  table(['#', 'Question', 'Why it is one of the four'], [
    ['**1**', 'Who do I speak to about…, and who if you are out?', 'the name you need on a bad day, got on a good one'],
    ['**2**', 'What notice do you need?', 'the deadline behind every other promise'],
    ['**3**', 'How do you want it — telephone or in writing?', 'their preference, which decides whose fault a mistake is'],
    ['**4**', 'Who signs, and does that person check?', '⚠ a signature that checks nothing is not evidence'],
    ['**5**', '**What goes wrong most often with a new customer like us?**', 'the one nobody asks, and the one with the useful answer'],
  ], [0.5, 2.3, 2.6]),
  '**Asking directly, and asking indirectly**',
  table(['Direct', 'Indirect — longer, and harder to refuse'], [
    ['Who signs for the goods?', '**Could you tell me** who signs for the goods?'],
    ['Do you need notice?', '**I was wondering whether** you need notice.'],
    ['What goes wrong?', '**Would you mind telling me** what goes wrong?'],
  ], [1.6, 2.4]),
  '⚠ **Ask what goes wrong before anything has.** It costs nothing on a first call, the answer is always specific, and it is the only question that gets you somebody else\'s experience for free. Unit 19 will come back to it when something has gone wrong, which is a much more expensive conversation.',
  '⚠ **Ask the deputy\'s name in the same breath as the contact\'s.** *and who if you are out* is five words and it is the difference between a bad Thursday and a lost week.',
  '⚠ **A signature is not a check.** *The driver signs. He does not check the count and he will tell you he has.* Write that down the day you hear it.',
  '**Practise:** Ask the five questions of a company you deal with and do not know well. Write the answers down in their words, not yours.',
  '**Useful phrases:**  Who do I speak to about…?  ·  and who if you are out?  ·  What notice do you need?  ·  Could you tell me who signs?  ·  What goes wrong most often?',
  '**Pronunciation – the falling question.** 🔊 **Track 1.6** Listen: _Who **signs** for the goods?_ — a *wh*-question falls at the end. Rising, it sounds like a challenge. _Do you need **notice**?_ — a yes/no question rises. Repeat four of each.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks the five questions; B is the new counterpart and answers honestly, including the fifth. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Four things before we place anything, if I may. Who do I speak to about __________?'],
  ['B', '__________, or __________ if I am out. Never __________.'],
  ['A', 'Second: what notice do you need for __________?'],
  ['B', 'By __________. After that it becomes a favour rather than a booking.'],
  ['A', 'Third: how do you want __________ — telephone, or in writing?'],
  ['B', '__________, please. __________ are the ones that go wrong.'],
  ['A', 'Fourth: who signs, and does that person check?'],
  ['B', '__________ signs. __________.'],
  ['A', 'And one more. **With a new customer like us, what goes wrong most often in the first two months?**'],
  ['B', '__________. Nine times out of ten.'],
]));
out.push(table(['Role card 1 — a printer', 'Role card 2 — a new bank branch'], [[
  'B prints labels. What goes wrong: customers approve a proof by telephone and then dispute the colour. B wants approval in writing with a date on it, and nobody ever gives it.',
  'B is a bank officer. What goes wrong: cash paid in at one branch against an account opened at another, and a two-day delay nobody warned the customer about.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the five questions for the class – **without the book**.'));
out.push(p('**Listener task:** write the answer to question 5 only. Then say whether anybody in your workplace knows it about the companies you deal with.'));
out.push(PHRASE_CARD(['Who do I speak to about…?', 'and who if you are out?', 'What notice do you need?', 'Could you tell me who signs?', 'What goes wrong most often?', 'nine times out of ten']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take a company you deal with and do not know well. Write the five questions you would ask, in your words. Then ask somebody who deals with them what the answer to the fifth would be.'));
out.push(table(['#', 'My question', 'The answer, in their words'], [
  ['1', '', ''], ['2', '', ''], ['3', '', ''], ['4', '', ''], ['**5**', '', ''],
], [0.4, 2, 2.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I asked _______. The answer to the fifth was _______, which I did not know / knew already and had never written down._'));
out.push(p('**Listener task:** collect the answers to question 5 on the board. Look at them together: how many are about **an address, a name or a date** rather than about a price?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _Could you tell me who does sign?_ and _I was wondering that…_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Nour wrote after the call, and answer the questions.'));
out.push(box(null, [
  '**NEW ACCOUNT — Jaber Freight. What I was told, 14 September, by Mr Jaber himself.**',
  '**Who to speak to.** Mr Jaber, or Samira on the desk if he is out. ⚠ **Not the driver** — his words: *he will agree to anything.*',
  '**Notice.** By four o\'clock the day before. After four it is a favour and not a booking, so it does not count as booked and we should not plan on it.',
  '**How to book.** In writing, always. He says telephone bookings are the ones that go wrong and then it is his word against ours. That suits us; we will book by email and keep the thread.',
  '**Who signs.** Their driver signs, and — his words again — *he does not check the count and he will tell you he has.* So **our** count is the only count, and Abu Yasser\'s gate sheet goes with every collection.',
  '**What goes wrong most often (I asked).** Addresses. Nine times out of ten, with a new customer, the office address is given and the goods are at the warehouse, and the failed collection is charged for.',
  '**So, one standing instruction.** **SITE IN CAPITALS ON EVERY BOOKING.** Mezzeh or Baghdad Street. He says he tells every new customer this and about a third of them do it; we are going to be in the third.',
  '**What I did not ask and should have.** What happens if their lorry is late and ours is waiting — who pays for the waiting hour. I will ask on Monday and add it here.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many times does the note quote the other person\'s own words, and why does it bother?'));
out.push(item('2', 'What does the note turn the answer to question 5 into?'));
out.push(item('3', 'What is the last paragraph for?'));
out.push(box('Writer\'s box', [
  '**A note of a first call — the shape:** who, when, and **who told you** → one headed line per answer → **one standing instruction** that comes out of the answers → and **what you did not ask**, with a date for asking it.',
  '**Quote their words where the words matter.** *He will agree to anything.* A paraphrase of that sentence is worth nothing in three months; the quotation is still evidence.',
  '**Turn an answer into an instruction.** Question 5 produced *addresses*, so the note produces **SITE IN CAPITALS ON EVERY BOOKING**. A note that records an answer and does not change a practice was a pleasant telephone call.',
  '⚠ **End with what you did not ask.** It is the paragraph that makes the note honest and the only one that guarantees a second call. Give it a date, or it never happens.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note of a first call you have had, or will have (**50 words or more**). Use the frame.'));
out.push(p('**NEW ACCOUNT — ______________. What I was told, ______________, by ______________.**   **Who to speak to.** ______________, or ______________ if ______________. ⚠ **Not ______________** — their words: ______________.   **Notice.** By ______________. After that ______________.   **How to ______________.** ______________, always. They say ______________.   **Who signs.** ______________. So ______________.   **What goes wrong most often (I asked).** ______________.   **So, one standing instruction.** **______________.**   **What I did not ask and should have.** ______________. I will ask on ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says turn an answer into an instruction. Your note has five answers and no instruction — which of the five changes what somebody here does on Monday?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **does anything in the office actually change because of this note?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Who told you, and when', ''],
  ['Their own words, where the words matter', ''],
  ['One standing instruction', ''],
  ['What was not asked, with a date', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their standing instruction. The class says which one would survive a busy Thursday.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you found out late that somebody could have told you on the first day (**100 to 140 words**). Say what it was, how you found out, what it cost, and whether anybody had ever been asked.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what nobody told them_   ✓ _question forms correct?_   ? _who knew all along?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many cases did somebody know? Almost always somebody did, and almost never had anybody been asked.'));
out.push(box('Homework', ['Write your final text. Then ask question 5 of one company you deal with, and write their answer in their own words (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 1.4 =======================
out.push(pb());
out.push(h2('1.4  Roles, not people'));
out.push(p('**Function:** explaining a colleague\'s role to an outsider   ·   **Grammar:** third person; *whoever*; roles as subjects   ·   **Pronunciation:** the -s nobody hears themselves drop'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Explain a colleague\'s job to somebody outside your company, in two sentences. Then say it again without using their name.'));
out.push(p('**b**  Which version is more useful on a page a stranger keeps for a year? _Ask Hala. · Ask whoever is on the counter. · Ask Hala, or whoever is on the counter._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is wrong with the way Bassel explains the company?   **A** it is too long   **B** it is all names   **C** it is all job titles'));
out.push(p('**b**  Listen again. **1** What happens to a page of names? **2** Why does Mr Jaber want both?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.7  "Ask whoever is on the counter"', [
  ['Mr Jaber', 'So if I have a query about a collection, I telephone — who?'],
  ['Bassel', 'Hala. Or Nour. Or if it is about the count, Abu Yasser. If it is Saturday, Nour again, unless it is the Baghdad Street one, then Hala.'],
  ['Mr Jaber', 'I have written four names and I am no further on.'],
  ['Bassel', 'They are the right four names.'],
  ['Mr Jaber', 'They are. And in a year two of them will be doing something else and I will still be telephoning them. Tell me the **jobs**.'],
  ['Bassel', 'A collection query goes to whoever is on the counter. A count query goes to the warehouse. Anything about the account goes to the coordinator.'],
  ['Mr Jaber', 'That I can keep. Now give me the names as well, so I know who to ask for today.'],
  ['Bassel', 'Counter is Hala. Warehouse is Abu Yasser. Coordinator is Nour.'],
  ['Mr Jaber', 'Good. Both, always — the role so the page lasts, the name so I do not have to say *whoever is on the counter* to a human being.'],
  ['Bassel', 'And Nour covers the counter on Saturdays.'],
  ['Mr Jaber', 'Then the role is *whoever is on the counter* and on Saturday that happens to be her. You see how much simpler that is than four names and an exception?'],
  ['Bassel', 'My page says *ask Hala*.'],
  ['Mr Jaber', 'Your page will be wrong the first week she is on holiday, and I will think you are disorganised when in fact you are only out of date.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Roles and names, together**',
  table(['Shape', 'Example', 'What it is for'], [
    ['the **role** as subject', 'The **counter** takes collection queries.', 'the page lasts a year'],
    ['**whoever** + verb', 'Ask **whoever is on** the counter.', 'no name, still actionable'],
    ['role **+** name', 'The counter — that is Hala at the moment.', '⚠ both, always'],
    ['third person **-s**', 'She **handles** the counter. He **signs** the gate sheet.', 'the -s nobody hears themselves drop'],
    ['**goes to** + role', 'A count query **goes to** the warehouse.', 'the document, not the person, as subject'],
  ], [1.3, 2.1, 1.6]),
  '⚠ **A page of names goes out of date; a page of roles cannot be used.** Give both: the **role** so that the page is still true in a year, and the **name** so that the reader does not have to say *whoever is on the counter* to a human being.',
  '⚠ **Let the document be the subject.** *A count query goes to the warehouse* is shorter and clearer than *if you have a question about the count you should speak to the person in the warehouse*, and it survives a change of staff.',
  '⚠ **The third-person -s.** *She handle the counter* is the single commonest error at this level and nobody hears it in their own speech. The remedy is not a rule; it is saying four of them aloud every lesson until it is automatic.',
  '⚠ *Whoever* takes a singular verb: *whoever **is** on the counter*, not ~~whoever are~~.',
  '**Practise:** Say each as a role, then add the name. 1 collection queries 2 the count 3 the account 4 anything over 500,000 5 Saturdays',
  '**Useful phrases:**  Ask whoever is on the counter.  ·  A count query goes to the warehouse.  ·  That is Hala at the moment.  ·  the role so the page lasts  ·  the name so I know who to ask for',
  '**Pronunciation – the -s nobody hears.** 🔊 **Track 1.8** Listen: _she **handles** · he **signs** · it **goes** to the warehouse_. Three different sounds — /z/, /z/, /z/ — and one of them is after a vowel, which is where it is dropped. Repeat six.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A explains the company in names; B asks for the jobs, and then for both. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'So if I have a query about __________, I telephone — who?'],
  ['A', '__________. Or __________. Or if it is about __________, __________.'],
  ['B', 'I have written __________ names and I am no further on.'],
  ['A', 'They are the right names.'],
  ['B', 'They are. And in a year __________. Tell me the **jobs**.'],
  ['A', 'A __________ query goes to __________. Anything about __________ goes to __________.'],
  ['B', 'That I can keep. Now give me the names as well.'],
  ['A', '__________ is __________. __________ is __________.'],
]));
out.push(table(['Role card 1 — a workshop of five', 'Role card 2 — a one-person office'], [[
  'Everybody does a bit of everything and A is proud of it. B needs to know who to ring about a delivery date, a price and a complaint. The honest answer is that all three go to the same person — which is itself the finding.',
  'A is the only administrator. B points out that a page saying *ask me* is the most fragile page of all, and asks what happens the week A is away.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the roles in one column and the names in another. Then cross out any name that would be wrong in a year and see what is left.'));
out.push(PHRASE_CARD(['Ask whoever is on the counter.', 'A count query goes to the warehouse.', 'That is Hala at the moment.', 'She handles…', 'He signs…', 'the role, then the name']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write the four or five routes into your workplace as **roles**, then add today\'s names. Then ask yourself which name will still be right in a year.'));
out.push(table(['The query', 'The role it goes to', 'The name today', 'Right in a year?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1.4, 1, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _A _______ query goes to _______, which is _______ at the moment. The one most likely to change is _______._'));
out.push(p('**Listener task:** count how many people in the room are the **only** route for something. Each one of those is a week of trouble waiting for a holiday.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _whoever are on the counter_ and _she handle the counter_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the routing page sent to Jaber Freight, and answer the questions.'));
out.push(box(null, [
  '**SHAM TRADING — WHERE TO SEND WHAT**',
  table(['What you have', 'Where it goes', 'Who that is today'], [
    ['a booking, or a change to one', 'the coordinator, **in writing**', 'Nour Mansour'],
    ['a query on a collection already booked', 'whoever is on the counter', 'Hala Mourad (Nour on Saturdays)'],
    ['a question about a count or a quantity', 'the warehouse', 'Abu Yasser'],
    ['an invoice or a payment query', 'accounts', 'Nadia Sayegh (Sun–Thu, finishes at four)'],
    ['anything over 500,000, or a second refusal', 'the office manager', 'Mr Khaled Ayoub'],
    ['anything you are not sure about', 'the coordinator', 'Nour Mansour'],
  ], [1.7, 1.6, 1.7]),
  '**Two notes on using this page.** The middle column is the one to keep: it will be true next year and the right-hand column may not. And the last line is not a joke — *anything you are not sure about* is a real route, and using it has never once annoyed anybody here.',
  '⚠ **One thing this page does not do.** It does not tell you who is **answerable** when something goes wrong; that is the contact page, which is a different sheet and is on the back. A routing page tells you where to send a thing. An accountability page tells you whose telephone rings. Keeping them apart is deliberate: the first changes every holiday and the second changes about once a year.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which column does the page tell you to keep, and why?'));
out.push(item('2', 'What is the last row for, and what does the page claim about it?'));
out.push(item('3', 'Why are routing and accountability on two different sheets?'));
out.push(box('Writer\'s box', [
  '**A routing page — a three-column table:** what you have → **where it goes**, as a role → who that is today.',
  '**Put the role in the middle column and the name on the right.** The reader reads left to right and stops as soon as they have what they need; the durable column is therefore the one they see first, and the perishable one is at the end where it can be crossed out and rewritten.',
  '**Include the row for "anything you are not sure about".** It is the row that prevents the worst outcome, which is not a misrouted query but a query nobody sent at all.',
  '⚠ **Keep routing and accountability apart, and say that you have.** They change at different speeds — a routing page changes every holiday and an accountability page about once a year — and a sheet that mixes them is out of date as a whole the first time either moves.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the routing page for your own workplace (**50 words or more**). Use the frame — five or six rows, then the two notes.'));
out.push(p('**______________ — WHERE TO SEND WHAT**   ______________ → ______________ → ______________   ______________ → ______________ → ______________   ______________ → ______________ → ______________   ______________ → ______________ → ______________   **anything you are not sure about** → ______________ → ______________   **Two notes.** The ______________ column is the one to keep, because ______________. And ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says put the role in the middle and the name on the right. Three of your middle cells are names — what is the job, if the person left?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would this page still be usable if two of the people left?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Roles in the middle column, names on the right', ''],
  ['A row for anything the reader is unsure about', ''],
  ['Third-person -s correct throughout', ''],
  ['Routing kept separate from accountability', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their middle column only. The class says whether they could use the page with the names covered up.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you were sent to the wrong person (**100 to 140 words**). Say what you wanted, how many people you were passed to, whether anybody apologised, and what the company thought you were being told.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the moment they gave up or got through_   ✓ _roles used, not only names?_   ? _was anybody rude, or only unorganised?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many involved rudeness, and how many only disorganisation? The second is far commoner and reads to a customer exactly like the first.'));
out.push(box('Homework', ['Write your final text. Then write your workplace\'s routing page in roles only, cover the names, and ask a colleague to use it (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 1.5 =======================
out.push(pb());
out.push(h2('1.5  That is not mine — and here is what I will do'));
out.push(p('**Function:** declining ownership without passing the buck   ·   **Grammar:** *that is not mine, but…*; future with a name and a time   ·   **Pronunciation:** the tone that stops it sounding like a refusal'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Somebody telephones you about something that is genuinely not your job. What do you say? Say it aloud and listen to yourself.'));
out.push(p('**b**  Which of these would you rather be told? _That is not my department. · You want accounts, not me. · That is not mine, but I will find out who and telephone you back before twelve._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the customer actually object to?   **A** being told it is not Nour\'s job   **B** being passed on without a name or a time   **C** the price'));
out.push(p('**b**  Listen again. **1** What are the three parts of Nour\'s answer? **2** Why does she refuse to transfer the call?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.9  Three parts, and none of them optional', [
  ['Customer', 'I have been passed to four people about one invoice. The last one said it was not her department and put me back to the switchboard.'],
  ['Nour', 'I am sorry. That should not have happened, and it is not going to happen again on this call.'],
  ['Customer', 'So is it your department?'],
  ['Nour', 'No. Invoices are accounts, and that is Nadia. That is the first part of my answer and it is the useless part.'],
  ['Customer', 'Go on.'],
  ['Nour', 'The second part is the name: Nadia Sayegh, accounts, and she is here until four. The third part is what I am going to do: I am going to take the invoice number from you, put it in front of her myself, and telephone you back before twelve whether she has found it or not.'],
  ['Customer', 'Can you not simply put me through?'],
  ['Nour', 'I could, and if she is on another call you are back at the switchboard and we have made it five people. I would rather take two minutes now and ring you once.'],
  ['Customer', 'Nobody has offered to telephone me back.'],
  ['Nour', 'Then that is the fault, not the department. Invoice number?'],
  ['Customer', '3318.'],
  ['Nour', 'Thank you. And if I have not telephoned you by twelve, telephone me and say "Nour, you said twelve" — I would rather be embarrassed than have you waiting.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Three parts, and the first one is the one everybody stops at**',
  table(['Part', 'What it is', 'Example'], [
    ['**1**', 'it is not mine — the useless part', 'That is not mine; invoices are accounts.'],
    ['**2**', '**the name**, and when they are there', 'Nadia Sayegh, accounts, here until four.'],
    ['**3**', '**what I am going to do anyway**, with a time', 'I will put it in front of her and ring you before twelve.'],
  ], [0.6, 2.4, 3]),
  '⚠ **Stopping at part 1 is what people mean by being passed around.** *That is not my department* is true, polite, and the reason your customer is telling somebody about you this evening.',
  '⚠ **Offer the call back rather than the transfer.** A transfer can fail and then you are the fifth person; a call back cannot fail, because it is yours. ⚠ And if you give a time, telephone **at** it, with or without an answer — *I do not know yet* at twelve is a kept promise.',
  '⚠ **Never name a colleague as a fault.** *That is not mine* names the work; *somebody in accounts should have told you* names a person to a stranger, and you will be quoted.',
  '⚠ The invitation at the end — *telephone me and say "you said twelve"* — sounds like a small thing and it is the sentence people remember a year later.',
  '**Practise:** Give all three parts for each. 1 an invoice 2 a delivery date 3 a price 4 a complaint about somebody else 5 something nobody in the company owns',
  '**Useful phrases:**  That is not mine, but…  ·  the name, and when they are there  ·  what I am going to do is…  ·  before twelve, either way  ·  I would rather ring you once',
  '**Pronunciation – not sounding like a refusal.** 🔊 **Track 1.10** Listen to *that is not mine* said two ways: falling and flat, which closes the conversation; then rising slightly, running straight on into *but* with no pause. The pause is what makes it a refusal. Repeat four, with no pause.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has been passed around; B gives all three parts and refuses to transfer. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I have been passed to __________ people about __________. The last one said __________.'],
  ['B', 'I am sorry. That should not have happened, and it is not going to happen again on this call.'],
  ['A', 'So is it your department?'],
  ['B', 'No. __________ are __________. That is the first part of my answer and it is the useless part.'],
  ['A', 'Go on.'],
  ['B', 'The second part is the name: __________. The third is what I am going to do: __________, and telephone you back before __________ whether __________ or not.'],
  ['A', 'Can you not simply put me through?'],
  ['B', 'I could, and if __________ you are back at the switchboard. I would rather __________.'],
]));
out.push(table(['Role card 1 — a warranty claim', 'Role card 2 — nobody owns it'], [[
  'A wants to claim on a shutter motor fitted last year. It is the fitter\'s warranty, not the shop\'s. B must give the fitter\'s name, the number, and still own the chasing.',
  'A is asking about something genuinely nobody in the company owns — a skip left on the pavement outside. B must say so honestly and still produce a part 3.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the call for the class – **without the book**.'));
out.push(p('**Listener task:** write the three parts. Then say which part the caller will remember in a week; it is never part 1.'));
out.push(PHRASE_CARD(['That is not mine, but…', 'Nadia Sayegh, accounts, here until four', 'What I am going to do is…', 'before twelve, either way', 'I would rather ring you once', 'you said twelve']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** things people telephone you about that are not yours. Write all three parts for each. Then say them aloud and ask a colleague whether part 1 sounded like a door closing.'));
out.push(table(['They ask about', '1 Not mine', '2 The name and when', '3 What I will do, by when'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.1, 1.1, 1.4, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _People telephone me about _______, which is _______. I would say: _______, and I would _______ by _______._'));
out.push(p('**Listener task:** write down any part 3 that is only *I will pass it on*. Passing it on is part 2 with no part 3 at all.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _It is not my work_ for *not my job*, and _I will to telephone you_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the written version of the same move, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Invoice 3318 — not mine, but I have it in hand; answer by twelve tomorrow',
  'Dear Mr Haffar,',
  'Thank you for your patience this morning, and I am sorry you were passed between four people before anybody took the number down.',
  '**Whose it is.** Invoice queries are accounts, which is Nadia Sayegh — not me. I am telling you that so you know where this sits, and it is the least useful sentence in this email.',
  '**What I have done with it.** I have taken the invoice number from you, written it on a slip, and put the slip in front of Nadia rather than in her tray. She is here until four today and all day tomorrow.',
  '**What I will do.** I will telephone you before twelve tomorrow with either the answer or the reason there is not one yet. If the answer is that we are wrong, I will say so in the same call.',
  '**What you should do if I do not.** Telephone me on the number below and say that I said twelve. I would rather be embarrassed than have you waiting a second morning.',
  '**And one thing that is mine.** You were passed around, and that is not accounts, that is the way we answer the telephone. I have put a routing page on both counters this afternoon so that the next person who rings about an invoice is asked for the number in the first ten seconds.',
  'Thank you. Best regards, Nour Mansour · administration coordinator · Sham Trading · 011 ___ ____',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which sentence does the writer herself call the least useful, and why is it there at all?'));
out.push(item('2', 'What is the difference between putting the slip in front of Nadia and putting it in her tray?'));
out.push(item('3', 'What does the writer take ownership of, having just explained that the invoice is not hers?'));
out.push(box('Writer\'s box', [
  '**Declining ownership in writing — five headed parts:** whose it is → **what I have done with it already** → what I will do, with a time → what you should do if I do not → **and one thing that is mine.**',
  '**Say which of your own sentences is the useless one.** *It is the least useful sentence in this email* disarms the reader completely, because it is the sentence they were braced for.',
  '**Show the physical act.** *In front of Nadia rather than in her tray.* A reader who has been passed around does not believe *I have passed it on*; they believe a described action.',
  '⚠ **Find the part that genuinely is yours and take it.** The invoice was not Nour\'s; the four transfers were. A letter that declines everything is a letter from a company where nothing is anybody\'s — and the paragraph that takes one thing is the paragraph that gets believed.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the email for something that is not yours (**50 words or more**). Use the frame.'));
out.push(p('**Subject:** ______________ — not mine, but ______________; answer by ______________   Dear ______________,   Thank you for ______________, and I am sorry ______________.   **Whose it is.** ______________ — not me. ______________.   **What I have done with it.** I have ______________ and ______________ rather than ______________.   **What I will do.** I will ______________ before ______________ with either ______________ or ______________.   **What you should do if I do not.** ______________.   **And one thing that is mine.** ______________. I have ______________ so that ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says find the part that genuinely is yours and take it. I can see four things declined here and nothing taken — what in this went wrong on your side of the wall?"',
  'Quote, question, stop. This is the hardest question in the unit to be asked and the most useful.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would the reader feel handled, or helped?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Whose it is, named, and admitted to be the dull part', ''],
  ['An action already taken, described physically', ''],
  ['A time, and what happens either way', ''],
  ['One thing taken as the writer\'s own', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their last paragraph only — the thing they took. The class says which one they believe.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about being passed around (**100 to 140 words**). Say what you wanted, how many people, what each one said, and the single sentence that would have ended it at the first person.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the sentence that would have ended it_   ✓ _the three parts present?_   ? _did you ever get what you wanted?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many did the caller eventually give up? Those are the ones a company never finds out about, which is why this cycle exists.'));
out.push(box('Homework', ['Write your final text. Then use all three parts on the next call that is not yours, and write down what the other person said when you offered to ring back (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 1.6 =======================
out.push(pb());
out.push(h2('1.6  Keeping it going'));
out.push(p('**Function:** making a first call worth more than its ask   ·   **Grammar:** follow-up questions; the echo; *while I have you*   ·   **Pronunciation:** the echo said as interest, not as doubt'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a call that lasted forty seconds and should have lasted four minutes. What did you not ask?'));
out.push(p('**b**  Which of these keeps a call going without wasting it? _So you deliver on Tuesdays. · And is that the same for both sites? · Really? · While I have you —_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour get out of the call that she did not telephone for?   **A** a lower price   **B** a cut-off time and a name   **C** an apology'));
out.push(p('**b**  Listen again. **1** What does the echo do? **2** What does *while I have you* buy her?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.11  Forty seconds, or four minutes', [
  ['Nour', 'Good morning — Nour Mansour, Sham Trading. I am telephoning to confirm Thursday\'s collection from Mezzeh.'],
  ['Agent', 'Thursday, Mezzeh, booked. Eleven o\'clock.'],
  ['Nour', 'Eleven. Thank you. So eleven is the booked time, not the window.'],
  ['Agent', 'It is the booked time. The window is eleven to one, if I am honest with you.'],
  ['Nour', 'That is useful, and I would rather know. Is the window the same for the afternoon runs?'],
  ['Agent', 'Afternoons are worse. Two to five, and in Ramadan it is anybody\'s guess.'],
  ['Nour', 'Then we will book mornings. And while I have you — what time do you need a change by, if Thursday stops working?'],
  ['Agent', 'Four o\'clock the day before. I know I told you that, but people forget it and then ring me at eight in the morning.'],
  ['Nour', 'You did tell me, and I have it written down. I am checking it because I am about to put it on a card on the wall and I would rather not put a wrong time on a wall.'],
  ['Agent', 'Four o\'clock. And put my mobile on the card as well — the office line rings in an empty room after five.'],
  ['Nour', 'Thank you. That is the thing I did not know I needed.'],
  ['Agent', 'Most people find out at half past five on a Wednesday.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Four moves that keep a call going without wasting it**',
  table(['Move', 'How it sounds', 'What it gets you'], [
    ['**the echo**', 'Eleven. So eleven is the booked time.', 'the difference between what was said and what is true'],
    ['**the widening question**', 'Is that the same for both sites / the afternoon?', 'the exception you would have met in a month'],
    ['**while I have you**', 'And while I have you — what time…?', '⚠ one extra question, at no social cost'],
    ['**the honest reason**', 'I am putting it on a card and would rather not put a wrong time on a wall.', 'permission to check something you were already told'],
  ], [1.4, 2.4, 2.4]),
  '⚠ **The echo is the strongest move on this page.** Repeating the fact back gets you the qualification — *it is the booked time; the window is eleven to one, if I am honest with you* — and nobody volunteers that unless you say the number back to them.',
  '⚠ **_While I have you_ buys exactly one question.** Use it for the question you would otherwise telephone back about, and never for a third and a fourth; it stops working the moment it is a list.',
  '⚠ **Checking something you were already told needs a reason**, or it sounds like you were not listening. *I am about to put it on the wall* is a reason anybody accepts.',
  '⚠ The best thing in a first call is usually the thing you did not telephone for: a mobile number, a cut-off, a name. **Ask one widening question and you will get it.**',
  '**Practise:** Take a one-line call and keep it going with each move in turn. 1 the echo 2 a widening question 3 *while I have you* 4 the honest reason',
  '**Useful phrases:**  So that is the booked time, not the window.  ·  Is that the same for…?  ·  And while I have you —  ·  I would rather not put a wrong time on a wall.  ·  That is the thing I did not know I needed.',
  '**Pronunciation – the echo as interest, not doubt.** 🔊 **Track 1.12** Listen: _Eleven. ↗ So eleven is the **booked** time._ The first word falls, the second clause rises slightly on *booked*. Said flat it sounds like disbelief and the other person defends the number instead of qualifying it. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A makes a one-line call; B answers in one line. A then keeps it going with the four moves. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Good morning — __________. I am telephoning to __________.'],
  ['B', '__________. __________.'],
  ['A', '__________. Thank you. So __________ is __________, not __________.'],
  ['B', 'It is __________. __________, if I am honest with you.'],
  ['A', 'That is useful, and I would rather know. Is __________ the same for __________?'],
  ['B', '__________ are worse. __________.'],
  ['A', 'And while I have you — __________?'],
  ['B', '__________. I know I told you, but people forget it.'],
]));
out.push(table(['Role card 1 — confirming a repair visit', 'Role card 2 — confirming a price'], [[
  'The visit is "Tuesday morning". The real window is seven to one. The thing A does not know they need: the engineer\'s own number, because the office does not pass messages on.',
  'The price is confirmed. The thing A does not know they need: how long it is held for, and that the figure excludes delivery to the second site.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the call for the class – **without the book**.'));
out.push(p('**Listener task:** write down what the caller got that they had not telephoned for. There is always something.'));
out.push(PHRASE_CARD(['So that is the booked time, not the window.', 'Is that the same for…?', 'And while I have you —', 'I would rather not put a wrong time on a wall.', 'I know I told you, but…', 'the thing I did not know I needed']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** calls you have to make. For each, write the one-line ask, then the echo, the widening question, and the one *while I have you*.'));
out.push(table(['The call', 'The echo', 'The widening question', 'While I have you —'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.3, 1.5, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I am telephoning _______ to _______. My echo is _______. My one extra question is _______, because otherwise I would telephone again on _______._'));
out.push(p('**Listener task:** write down the best *while I have you* in the room. Then ask the person what it would have cost them to telephone again.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _Is that the same of both sites?_ and _While I have you, I want three things_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the card that came out of the call, and answer the questions.'));
out.push(box(null, [
  '**JABER FREIGHT — the card on the wall by both telephones**',
  table(['', ''], [
    ['**Book by**', 'email, always. Never telephone — their rule, and it protects us too.'],
    ['**Cut-off for a change**', '**4 p.m. the day before.** After four it is a favour, not a booking.'],
    ['**Morning window**', '11 a.m. booked = **11 to 1** in practice.'],
    ['**Afternoon window**', '2 to 5, and worse in Ramadan. **Book mornings.**'],
    ['**Ask for**', 'Mr Jaber, or Samira on the desk. **Never the driver.**'],
    ['**After 5 p.m.**', 'Mr Jaber\'s mobile — on the back of this card. The office line rings in an empty room.'],
    ['**Every booking must say**', '**SITE IN CAPITALS.** MEZZEH or BAGHDAD STREET.'],
  ], [1.3, 3]),
  '**Why this card exists.** Four of these seven lines were not in the quotation, the terms or the first telephone call. They came out of two calls in which somebody repeated a number back and asked one more question. ⚠ The two most valuable lines on it — the real window and the mobile number — were volunteered, not asked for.',
  '**How to keep it true.** Pencil, not pen, and a date in the corner. A card in ink is a card nobody corrects.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many of the seven lines came from the formal paperwork?'));
out.push(item('2', 'Which two lines does the page call the most valuable, and how were they obtained?'));
out.push(item('3', 'Why pencil?'));
out.push(box('Writer\'s box', [
  '**A card on the wall — seven lines at most, each a fact somebody needs at speed:** how to book → the cut-off → the real windows → who to ask for → out of hours → the one thing every document must carry.',
  '**Print the real figure beside the official one.** *11 a.m. booked = 11 to 1 in practice.* A card with only the official time is a card that makes a liar of whoever wrote it.',
  '**Say where the lines came from.** *Four of these seven were not in the quotation.* It tells the next person that a card is built by asking, and it is the argument for 1.6 in one sentence.',
  '⚠ **Pencil, and a date in the corner.** A card in ink is a card nobody corrects, and an uncorrected card is worse than none because it is trusted.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the card for a company you deal with (**50 words or more**). Seven lines at most. Use the frame.'));
out.push(p('**______________ — the card by the telephone**   **Book by** ______________   **Cut-off** ______________   **The real window** ______________ = ______________ in practice   **Ask for** ______________, never ______________   **Out of hours** ______________   **Every document must say** ______________   **Why this card exists.** ______________ of these lines were not in ______________. ______________ was volunteered, not asked for.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says print the real figure beside the official one. Your window line has one number — is that the booked time or the time things actually happen?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could somebody who has never telephoned this company use the card at four o\'clock on a bad Wednesday?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Seven lines or fewer', ''],
  ['The real figure beside the official one', ''],
  ['Out of hours, and who never to ask', ''],
  ['Where the lines came from, and a date', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their card. The class says which line they would steal for their own workplace.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a fact you only know because somebody once volunteered it (**100 to 140 words**). Say what it is, who told you, what you were actually asking about, and what not knowing it would have cost.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the volunteered fact_   ✓ _the echo and the widening question?_   ? _is it written down anywhere?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many of these facts are written down anywhere? Nearly none, and every one of them leaves the company when the person does.'));
out.push(box('Homework', ['Write your final text. Then make one card for the wall, in pencil, and write three lines on which fact on it came from an echo rather than from paperwork (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 1.7 =======================
out.push(pb());
out.push(h2('1.7  Review & Mediate: who is on this account?'));
out.push(p('**Function:** explaining a contact page to a colleague who has to use it   ·   **Review:** present simple and continuous · *handle / responsible for* · questions · roles · the three parts · the four moves'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 1 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What is the test for *I am responsible for*?',
  '**2** What is part 5 of the ninety seconds, and why is it missing?',
  '**3** What is the fifth question, and why does nobody ask it?',
  '**4** What are the three parts of *that is not mine*?',
  '**5** What does the echo get you that a plain *thank you* does not?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Fadi misread on the page?   **A** he reads the roles as a demotion   **B** the telephone numbers   **C** the Saturday arrangement'));
out.push(p('**b**  Listen again. **1** What does Nour say the middle column is for? **2** What is the one line on the page that is about Fadi?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.13  "Where am I on this page?"', [
  ['Fadi', 'The new page for the freight people. I am not on it.'],
  ['Nour', 'You are, but as a job rather than a name. Read the warehouse row.'],
  ['Fadi', '"A question about a count or a quantity — the warehouse — Abu Yasser."'],
  ['Nour', 'And the collection row above it says *whoever is on the counter*. You are not a route on this page because nothing from Jaber Freight should ever arrive at you first.'],
  ['Fadi', 'It arrives at me constantly. Their drivers ask me where to back up and whether we have signed.'],
  ['Nour', 'Then that is a fault on the page and not a fault in your reading. What do you tell them?'],
  ['Fadi', 'I point at the yard and I say Abu Yasser has the sheet.'],
  ['Nour', 'Which is exactly right, and it should be a row: *a driver at the gate with a question — the warehouse — Abu Yasser*. Thank you; that is the page improved by somebody who uses it.'],
  ['Fadi', 'And the names change. Hala is at Baghdad Street on Saturdays.'],
  ['Nour', 'The middle column is the part that lasts — the **role**. The right-hand column is today\'s names and it is in pencil for that reason. In a year two of those names will be wrong and the middle column will still be true.'],
  ['Fadi', 'So I am the warehouse on a Saturday.'],
  ['Nour', 'On a Saturday you are the only person in the yard, which is a dotted line and belongs on the page. Write it on the sheet and I will put it on properly.'],
  ['Fadi', 'Nobody has ever asked me to correct a page before.'],
  ['Nour', 'Nobody has ever had a page that was wrong in a way anybody could see.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – explaining a page to the person who has to live with it**',
  table(['To orient them', 'To find the gap', 'To keep it true'], [
    ['You are on it, as a job rather than a name.', 'What do they actually ask you?', 'The middle column is the part that lasts.'],
    ['Read the row above it.', 'Then that is a fault on the page.', 'The names are in pencil for that reason.'],
  ], [2, 1.9, 2]),
  '⚠ **A page is explained by having somebody use it, not by reading it to them.** Ask what actually arrives at their desk and compare it with the page; the gap is the improvement, and they find it, not you.',
  '⚠ **Say which column lasts.** A colleague who thinks the whole page is permanent will not correct it; a colleague who knows the names are in pencil will.',
  '⚠ When somebody says *I am not on it*, they are usually telling you about a **route that exists and is not written down**. Hear it as information, not as a complaint about status.',
  '**Practise:** A colleague says they are not on the contact page. Orient them, ask what actually reaches them, and add the row they have just told you about.',
  '**Useful phrases:**  You are on it, as a job rather than a name.  ·  What do they actually ask you?  ·  Then that is a fault on the page.  ·  the middle column is the part that lasts  ·  Write it on the sheet and I will put it on properly.',
  '**Pronunciation – reading a page aloud for somebody.** 🔊 **Track 1.14** Listen to a row read aloud for a colleague: the three cells separated by clear pauses, the role stressed. Reading a table at the speed of speech makes it unusable. Repeat two rows.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a page; B cannot find themselves on it. A orients them, finds the missing route, and agrees the correction. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'B is a driver who is not a route on the page, and is asked constantly at the gate where to back up and whether we have signed. The missing row is *a driver at the gate with a question → the warehouse*.',
  'B is the accountant, who is on the page for invoices but is telephoned all day about chasing payment, which is sales. The missing row is a route that should not exist: *chasing payment → sales*, and somebody has to tell the customers.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the row that was missing. Then say whether it is a route that should exist or one that should be closed — both are findings.'));
out.push(PHRASE_CARD(['as a job rather than a name', 'What do they actually ask you?', 'that is a fault on the page', 'the middle column lasts', 'in pencil, for that reason', 'the page improved by somebody who uses it']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a contact and routing page. Read it silently. Then explain it to **two** colleagues: one who cannot find themselves on it, and one who has never seen it and is about to be sent it.'));
out.push(table(['Who I told', 'What they said about it', 'The row that was missing or wrong'], [['', '', ''], ['', '', '']], [1, 1.5, 2]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the page. This is the **first** unit of this book, and the unwritten thing is the one the whole unit has been circling: **a page of names tells a stranger who to ask for and goes out of date; a page of roles lasts and cannot be used; and nobody writes both because each half looks complete on its own.**'));
out.push(p('_The page said ______. My colleague could not find ______. What they actually get asked is ______, so the missing row is ______._'));
out.push(p('**Listener task:** start the Book 1 office-word list with this unit\'s entries: _remit · point of contact · chain of command · reporting line · delegated authority · out of scope_. It runs to Unit 12 and is collected in the Unit 12 key.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 1)', 10));
out.push(p('⚠ **About the exam practice in this book.** B1 Business Preliminary has **seven** Reading parts, and each unit of this book practises a different one, so that by Unit 12 you have met every part twice. This unit is **Part 1: short notices and messages.** For each question, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _**JABER FREIGHT — BOOKINGS BY EMAIL ONLY.** Telephone bookings cannot be guaranteed._   **A** Telephone to confirm an email booking. **B** A booking made by telephone may not be honoured. **C** Bookings are not taken.',
  '**2**  _Changes to a collection: **by 4 p.m. the day before.** After that we will try.   **A** Changes after four are impossible. **B** Changes after four are not guaranteed. **C** Four o\'clock is the collection time.',
  '**3**  _Nour Mansour — point of contact, both sites. Anything you are not sure about._   **A** Write to her only about the Mezzeh site. **B** She is the person to ask when you do not know who to ask. **C** She deals only with certainties.',
  '**4**  _Abu Yasser signs nothing he has not counted._   **A** He refuses to sign. **B** His signature means a count was made. **C** Somebody else counts.',
  '**5**  _11 a.m. booked = 11 to 1 in practice._   **A** The lorry comes at eleven. **B** Eleven is the earliest it may come. **C** The lorry comes at one.',
  '**6**  _Mr Ayoub approves anything over 500,000._   **A** He approves every order. **B** Orders under 500,000 do not need him. **C** He approves nothing.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 1 — an internal message, 35 to 45 words.** An instruction or a piece of information for a colleague, with **three content points**, all three present.',
  'For a routing message the three points are nearly always: **what has changed** · **what the reader must now do** · **from when**.',
  '⚠ **In forty words there is no room for a reason**, and the examination does not ask for one. That is the examination; it is not this book. Every other writing task in this unit asked for fifty words or more and a reason, and Unit 12 will ask for a hundred and forty.',
  '⚠ Begin with the change, not with a greeting. *From Monday, all freight bookings go by email* uses six of your forty words and does the whole job.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** A new arrangement has been agreed with a supplier and your colleagues need to know. Write an internal message (**35 to 45 words**). Say **what has changed**, **what they must now do**, and **from when**.'));
out.push(p('______________, from ______________ all ______________ must ______________. Please ______________ and ______________. ______________ by ______________. ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What has changed, in the first line', ''],
  ['What the reader must now do', ''],
  ['From when', ''],
  ['35 to 45 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write your own entry for your workplace\'s contact page, in the three lines of 1.2, and then a paragraph about it (**100 to 140 words**): what you handle, what you are answerable for, what you only help with, and the one item you think is in the wrong column.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then show your three lines to the person who would be asked if you got something wrong, and write down what they moved and why (50+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 1 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  I ___ the paperwork for both sites.   a) handle   b) am handling   c) handling',
  '2  I ___ Baghdad Street until September.   a) cover   b) am covering   c) covered',
  '3  I am responsible ___ complaints.   a) of   b) for   c) to',
  '4  I ___ to Mr Ayoub.   a) report   b) am reporting   c) reporting',
  '5  Ask ___ is on the counter.   a) whoever   b) whomever   c) whatever',
  '6  She ___ the counter and the telephone orders.   a) handle   b) handles   c) handling',
  '7  Could you tell me who ___ for the goods?   a) does sign   b) signs   c) sign',
  '8  ___ I have you — what is the cut-off?   a) When   b) While   c) During',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 1.15** Listen to the first call to a new agent. Complete the note.   Who to ask for: ______   And if they are out: ______   Notice needed: ______   Who signs: ______   What goes wrong most often: ______'));
out.push(dlg('Track 1.15  Audio script (read after the check)', [
  ['Nour', 'Good morning — Nour Mansour, Sham Trading, at the Mezzeh office. I handle the paperwork for both our sites. Four questions before we place anything, if I may.'],
  ['Agent', 'Go on.'],
  ['Nour', 'Who do I speak to about a collection once it is booked, and who if you are out?'],
  ['Agent', 'Me — Mr Jaber — or Samira on the desk if I am out. Never the driver; he will agree to anything.'],
  ['Nour', 'Thank you. What notice do you need for a collection?'],
  ['Agent', 'By four o\'clock the day before. After four it is a favour rather than a booking.'],
  ['Nour', 'And who signs for the goods at your end?'],
  ['Agent', 'The driver signs. He does not check the count and he will tell you he has.'],
  ['Nour', 'One more. With a new customer like us, what goes wrong most often in the first two months?'],
  ['Agent', 'Addresses — nine times out of ten. We are given the office and the goods are at the warehouse. Put the site in capitals on every booking and you will never hear from me about it.'],
]));
out.push(p('**C  Writing.** Write three lines for a contact page (**50 words or more**): where to find you, what you handle, and what you are answerable for — with one thing you are **not** answerable for.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 1)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say who I am and what I want from a call, in ninety seconds and five parts',
  '☐ describe my job by what passes through my hands, not by its title',
  '☐ separate what I handle from what I am answerable for, and say both',
  '☐ ask a new counterpart four questions, and the fifth about what goes wrong',
  '☐ explain a colleague\'s job as a role, and add the name as well',
  '☐ say that something is not mine in three parts, with a name and a time',
  '☐ keep a call going with the echo, a widening question and *while I have you*',
  '☐ write a contact page, a routing page, a note of a first call and a card for the wall',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 1 · Student\'s Book');
