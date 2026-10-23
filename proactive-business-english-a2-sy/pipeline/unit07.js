// Proactive Business English A2 · Syria Edition · Book 1 · Unit 7 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'appointment · meeting · agenda · minutes · boardroom · book · cancel · postpone · confirm · reschedule · available · fully booked · attend · chair · apologies · venue · host · guest · arrange · put back · bring forward · double-booked · reminder · slot · agree a time · at short notice';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 7  Appointments and Arrangements'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**7.1**  say what you can and can\'t do at work',
  '**7.2**  ask somebody politely to come, send or change something',
  '**7.3**  talk about your diary and what you are doing next week',
  '**7.4**  suggest another time when the first one does not work',
  '**7.5**  accept an invitation, and refuse one without closing the door',
  '**7.6**  say which you prefer, and why',
  '**7.7**  Review & Mediate: tell a colleague what a meeting invitation says',
], C.lblue, C.navy));
out.push(sp());
out.push(box('The diary at Sham Trading — before you start', [
  'The **Monday meeting** is at **8.30**, in the small room upstairs. Everybody comes; it lasts half an hour and Mr Ayoub chairs it.',
  'Supplier and customer meetings are in the **boardroom** on the ground floor — one long table, six chairs, and a window that does not close properly.',
  'Nour keeps the diary. If two things are booked at the same time, she tells Mr Ayoub **the same morning**, not on the day.',
  'A meeting that is moved is **rescheduled**; a meeting that is stopped is **cancelled**. At work the two words are not the same, and this unit is partly about that.',
], C.lyellow, C.orange));

// ======================= CYCLE 7.1 =======================
out.push(pb());
out.push(h2('7.1  I can use the system, but I can\'t sign'));
out.push(p('**Function:** saying what you can and can\'t do at work   ·   **Grammar:** _can / can\'t_   ·   **Pronunciation:** weak _can_, strong _can\'t_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Tick what you can do at work. Then tell a partner **one** you can do and **one** you can\'t — yet.'));
out.push(table(['Can ✓', 'At work'], [['', 'answer the telephone in English'], ['', 'write an email to a supplier'], ['', 'use the accounts system'], ['', 'sign an order'], ['', 'drive a forklift'], ['', 'take the minutes of a meeting']], [1, 4]));
out.push(p('**b**  Which is about **ability** and which is about **permission**? _I can drive. · I can\'t sign orders over 500,000. · She can speak French. · You can\'t park there._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub want Nour to do?   **A** chair the Monday meeting   **B** cover for Nadia   **C** drive the van'));
out.push(p('**b**  Listen again. **1** Name two things Nour can do.   **2** Why can\'t she sign?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.1  Covering for Nadia', [
  ['Mr Ayoub', 'Nour, Nadia is away for five days from Sunday. Can you cover the simple things?'],
  ['Nour', 'Which things exactly?'],
  ['Mr Ayoub', 'The counter money, the small invoices, the bank at nine.'],
  ['Nour', 'I can do the counter money — Nadia showed me twice. I can use the accounts system, but only to look, not to change anything.'],
  ['Mr Ayoub', 'That\'s enough for the small invoices?'],
  ['Nour', 'It is. But I can\'t sign them. The system won\'t let me, and I shouldn\'t anyway.'],
  ['Mr Ayoub', 'No, you shouldn\'t. I\'ll sign at four every day; you put them in the blue tray.'],
  ['Nour', 'And the bank? I can go at nine, but I can\'t be in two places — the counter opens at half past eight.'],
  ['Mr Ayoub', 'Then Hala opens the counter on those five days. Can you show her on Thursday?'],
  ['Nour', 'I can show her Thursday afternoon. She learns quickly.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – can / can\'t**',
  table(['+', '–', '?'], [
    ['I **can** use the system.', 'I **can\'t** sign them.', '**Can** you cover the simple things?'],
    ['She **can** speak French.', 'He **can\'t** drive a forklift.', '**Can** you show her on Thursday?'],
  ], [1.3, 1.3, 1.5]),
  '**can** has two meanings at work: **ability** (_I can use the system_) and **permission** (_I can\'t sign them_). The form is the same; the sentence tells you which.',
  '⚠ No **to**: _I can **use**_, not ~~can to use~~. No **-s**: _She can **speak**_.',
  '⚠ The most useful answer at work is not _yes_ or _no_ but **what exactly**: _I can use the system, **but only to look, not to change anything**._',
  '**Practise:** Answer with _can_ or _can\'t_ and add **what exactly**.',
  '1 Can you use the accounts system?  2 Can you sign an invoice?  3 Can you drive the van?  4 Can you take the minutes?  5 Can you show Hala the counter?',
  '**Useful phrases:**  Which things exactly?  ·  I can…, but only…  ·  That\'s enough for…?  ·  I can\'t be in two places.  ·  She learns quickly.',
  '**Pronunciation – can and can\'t.** 🔊 **Track 7.2** Listen. _can_ is weak and short /kən/; _can\'t_ is long and strong /kɑːnt/. The difference is the **vowel**, not the **t** — many learners cannot hear the t at all, and do not need to. Repeat the six pairs.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks a colleague to cover some work; B says what they can and can\'t do, and names the limit. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ is away for __________. Can you cover __________?'],
  ['B', 'Which things exactly?'],
  ['A', '__________, __________ and __________.'],
  ['B', 'I can __________. I can use __________, but only __________, not __________.'],
  ['A', 'That\'s enough for __________?'],
  ['B', 'It is. But I can\'t __________.'],
  ['A', 'Then __________. Can you __________ on __________?'],
  ['B', 'I can __________. __________.'],
]));
out.push(table(['Role card 1 — a pharmacy', 'Role card 2 — a workshop'], [[
  'B can: serve customers, use the till, order the usual items. B can\'t: give advice on prescriptions, open the controlled cupboard, sign for deliveries over 500,000.',
  'B can: cut and fit glass, use the small machine, quote for a standard window. B can\'t: use the big saw (no certificate), quote for a shopfront, accept cash.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the **limit** — the sentence that starts _but only…_ or _but I can\'t…_'));
out.push(PHRASE_CARD(['Which things exactly?', 'I can…', 'but only…, not…', 'I can\'t…', 'That\'s enough for…?', 'She learns quickly.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Tell **three** colleagues three things you can do at work and one you can\'t — yet. Ask each of them the same. Make notes.'));
out.push(table(['Name', 'Can…', 'Can\'t… yet', 'Who could teach them?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.4, 1.4, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ can _______ and _______. He / She can\'t _______ yet, but _______ could show him / her._'));
out.push(p('**Listener task:** write the skill that most of the class can do, and the one only one person can.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _can to_ and _she cans_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the handover note Nadia leaves before her five days away, and answer the questions.'));
out.push(box(null, [
  '**HANDOVER — Nadia Sayegh, 16–20 April**   ·   for Nour, copy to Mr Ayoub',
  '**What Nour can do without asking me:** take the counter money and count it twice · enter the small invoices (under 100,000) in the system · go to the bank at nine with the blue folder · answer any customer question about a **paid** invoice.',
  '**What Nour can do, but must tell Mr Ayoub first:** anything over 100,000 · any change to an invoice that is already in the system · any promise about a payment date.',
  '**What Nour can\'t do, and nobody expects her to:** sign invoices — Mr Ayoub signs at four every day · open the bank account page (she has no password, and she should not have one) · agree a discount.',
  '**If something happens that is not on this page:** write it down, leave it in the blue tray and telephone me. I have my phone. I would rather answer one question than find six mistakes on Thursday.',
  'Nadia',
], 'FFFFFF', C.navy));
out.push(item('1', 'Name two things Nour can do without asking anybody.'));
out.push(item('2', 'What must she do before entering an invoice for 180,000?'));
out.push(item('3', 'What does Nadia prefer, and why?'));
out.push(box('Writer\'s box', [
  '**Shape of a handover note:** who is away and when → **what the other person can do without asking** → **what they can do but must tell somebody first** → **what they can\'t do, and who does it instead** → what to do with anything not on the page.',
  'Three lists, not two. The middle list — _can, but tell somebody first_ — is the one that prevents both the mistakes and the paralysis.',
  'For every _can\'t_, name **who does it instead**: _Mr Ayoub signs at four every day_. A _can\'t_ with no alternative stops work.',
  '⚠ End by making it easy to ask. _I would rather answer one question than find six mistakes on Thursday_ costs one line and saves the week.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a handover note for a week away from **your** job (25 words or more). Use the frame.'));
out.push(p('**HANDOVER — ______________, ______________**   ·   for ______________.  **What ______ can do without asking me:** ______________.  **What ______ can do, but must tell ______________ first:** ______________.  **What ______ can\'t do:** ______________ — ______________ does that.  **If something happens that is not on this page:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('How to give good feedback (we use this all year)', [
  '**Not helpful:** "Good." / "Bad." / "Many mistakes."',
  '**Helpful:** "The three lists are clear. The middle one is empty — is there really nothing in between? And who signs while you are away?"',
  'Be kind, be clear, and point to **one** thing to fix.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Be the person covering. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three lists, and the middle one is not empty', ''],
  ['Every _can\'t_ names who does it instead', ''],
  ['_can_ with no _to_ and no _-s_', ''],
  ['A way to ask about anything not on the page', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their middle list. The class says which item they would have put in the wrong list.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you learned to do at work or at home that you could not do a year ago (35 words or more). Say who taught you, what you still can\'t do, and what you would like to learn next.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I\'d like to learn that too._   ✓ _Who could teach you the next thing?_   ? _a question about learning it_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the texts on the wall. Find somebody who can do something **you** want to learn, and arrange ten minutes with them.'));
out.push(box('Homework', ['Write your final text. Then write a short handover for one day of your own work, with the three lists (20+ words). Give it to somebody and ask whether they could do your job from it.'], C.lblue, C.navy));

// ======================= CYCLE 7.2 =======================
out.push(pb());
out.push(h2('7.2  Could you come at ten instead?'));
out.push(p('**Function:** asking politely for a change   ·   **Grammar:** _could_   ·   **Pronunciation:** weak _could you_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Make each one more polite, then more polite again: _Come at ten. → ______ → _______'));
out.push(p('**b**  Which is the strongest request, and which is the softest? _Can you…? · Could you…? · Would you mind…? · I need you to…_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is telephoning whom?   **A** Nour to a supplier   **B** a customer to Nour   **C** Nour to a customer'));
out.push(p('**b**  Listen again. **1** What time was the meeting?   **2** What three things does Nour ask for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.3  Moving the Thursday meeting', [
  ['Nour', 'Ms Shamsi, good morning. It\'s Nour at Sham Trading. I\'m telephoning about Thursday.'],
  ['Ms Shamsi', 'Eleven o\'clock, in your boardroom. Is there a problem?'],
  ['Nour', 'A small one. Mr Ayoub has the bank at eleven on Thursday. Could you come at ten instead?'],
  ['Ms Shamsi', 'Ten. Let me look… yes, ten is possible. I leave Aleppo at six anyway.'],
  ['Nour', 'Thank you. And could you bring the new price list? We only have the January one.'],
  ['Ms Shamsi', 'I can bring it. Anything else?'],
  ['Nour', 'One more thing — could you send me the figures for the wrap before Thursday? Then Mr Ayoub can read them and we don\'t spend the meeting on numbers.'],
  ['Ms Shamsi', 'That\'s a good idea. I\'ll send them Tuesday evening.'],
  ['Nour', 'Thursday at ten, the new price list, and the figures on Tuesday. Thank you, Ms Shamsi.'],
  ['Ms Shamsi', 'You read everything back. Somebody taught you well.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – could for polite requests**',
  table(['Asking', 'Softer still', 'Answering'], [
    ['**Could you** come at ten?', '**Would you mind** coming at ten?', 'Yes, of course.  ·  Ten is possible.'],
    ['**Could you** bring the price list?', '**I wonder if you could**…', 'I can bring it.'],
    ['**Could you** send it before Thursday?', '**Do you think you could**…?', 'I\'ll send it Tuesday evening.'],
  ], [1.4, 1.4, 1.4]),
  '**could** is **not** the past of _can_ here. It is simply more polite, and at work it is the normal form for asking somebody outside your own team.',
  '⚠ _Would you mind **coming**_ — **-ing** after _mind_. And the answer to _Would you mind…?_ is confusing: _No, not at all_ means **yes, I will**.',
  '⚠ Three requests in one call is the limit. Put the **most important one first**, and say _one more thing_ before the third.',
  '**Practise:** Make each one polite with _could_, and add a reason.',
  '1 Come at ten. → ______  2 Bring the price list. → ______  3 Send the figures. → ______  4 Telephone me on Tuesday. → ______  5 Change the meeting to the boardroom. → ______',
  '**Useful phrases:**  I\'m telephoning about…  ·  Is there a problem?  ·  A small one.  ·  Could you… instead?  ·  Anything else?  ·  One more thing —',
  '**Pronunciation – could you.** 🔊 **Track 7.4** Listen and repeat. The two words join: _could you_ /ˈkʊdʒə/ · _could you come at ten?_ · _could you send it?_ Say it as **one** word and it sounds natural; say it as two and it sounds like a test.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, back to back. A telephones with **three** requests; B answers each one. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________, good morning. It\'s __________ at __________. I\'m telephoning about __________.'],
  ['B', '__________. Is there a problem?'],
  ['A', 'A small one. __________. Could you __________ instead?'],
  ['B', 'Let me look… yes, __________ is possible.'],
  ['A', 'Thank you. And could you __________? We only have __________.'],
  ['B', 'I can __________. Anything else?'],
  ['A', 'One more thing — could you __________ before __________? Then __________.'],
  ['B', 'That\'s a good idea. I\'ll __________.'],
  ['A', '__________, __________, and __________. Thank you.'],
]));
out.push(table(['Role card 1 — a builder and a client', 'Role card 2 — a clinic and a patient'], [[
  'A wants: the work to start Saturday not Monday · the old tiles taken away · a written price before starting. B: Saturday is possible; the tiles cost extra; the price by Friday evening.',
  'A wants: the appointment moved from 9 to 11 · the results sent by message · a prescription in English for travel. B: 11.30 is possible; results by message yes; the prescription needs the doctor\'s signature on Thursday.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs make their call for the class – **without the book**.'));
out.push(p('**Listener task:** write the three requests. Did the caller read them back at the end?'));
out.push(PHRASE_CARD(['I\'m telephoning about…', 'Could you… instead?', 'Let me look…', 'Anything else?', 'One more thing —', 'Thank you.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Telephone **three** colleagues with a real request each — change a time, borrow something, ask for information. Use _could_ every time, and give a reason. Make notes.'));
out.push(table(['Who', 'What I asked for', 'Reason I gave', 'Answer'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.6, 1.4, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I asked _______ if he / she could _______, because _______. He / She said _______._'));
out.push(p('**Listener task:** write the request that got the quickest _yes_. What made it easy to agree to?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _could you to come_ and _would you mind to come_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the email Nour sends after the call, and answer the questions.'));
out.push(box(null, [
  '**To:** Ms Dima Shamsi, Shamsi Packaging   **From:** Nour Mansour, Sham Trading   **Subject:** Thursday 20 April — now 10 am (was 11)',
  'Dear Ms Shamsi,',
  'Thank you for moving the meeting. In writing, so that we both have it:',
  '**Thursday 20 April, 10 am**, in our boardroom, ground floor — the door on the right as you come in from the yard.',
  'Two things you kindly agreed to bring or send:',
  '•  the **new price list** (we only have January\'s);',
  '•  the **figures for the wide wrap**, by Tuesday evening, so that Mr Ayoub can read them before you arrive and we do not spend the meeting on numbers.',
  'Could you also tell me whether you are coming alone? I will arrange the chairs and the tea.',
  'If anything changes at your end, my extension is 212 and my mobile is on this message.',
  'Nour',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the subject line tell you before you open the email?'));
out.push(item('2', 'Why does Nour want the figures **before** Thursday?'));
out.push(item('3', 'What is the fourth request, and why does she make it?'));
out.push(box('Writer\'s box', [
  '**Shape of a confirming email:** thank them → _in writing, so that we both have it_ → the **new time, date and place**, in bold, with how to find it → the things they agreed to do, as **bullets** → one further request, with its reason → your numbers.',
  'Put the change **in the subject line**, with the old time in brackets: _now 10 am (was 11)_. It is read by people who never open the email.',
  'Turn agreements into **bullets**. A promise inside a paragraph is a promise that gets forgotten.',
  '⚠ Every request needs its **reason** — _so that Mr Ayoub can read them before you arrive_. A reason turns an instruction into a plan the other person can improve.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a confirming email after a call of your own (25 words or more). Use the frame.'));
out.push(p('**Subject:** ______________ — now ______ (was ______).  Dear ______________, Thank you for ______________. In writing, so that we both have it:  **______________, ______________**, ______________.  Two things you agreed to:  •  ______________;  •  ______________, by ______________, so that ______________.  Could you also ______________? If anything changes, ______________.  ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read **only the subject line** and say what you know. Then read the rest. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The change is in the subject line, with the old time', ''],
  ['Time, date **and** place', ''],
  ['Agreements as bullets', ''],
  ['Every request has a reason', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their subject lines. The class says which they would act on without opening.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write an email making **three** requests to somebody outside your company (35 words or more). Put the most important first, give each a reason, and make the third easy to refuse.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s email as the person receiving it. Write on a slip:  ★ _I\'d do this one first._   ✓ _Can you say why you need…?_   ? _the one I would say no to_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three emails. Which third request was easiest to refuse? Does making it easy to refuse make it more or less likely to be done?'));
out.push(box('Homework', ['Write your final email. Then write the **reply** the other person would send: agree to two requests and refuse the third politely, with a reason and an offer (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 7.3 =======================
out.push(pb());
out.push(h2('7.3  What are you doing on Thursday?'));
out.push(p('**Function:** talking about your diary   ·   **Grammar:** present continuous for the future   ·   **Pronunciation:** days and dates'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Fill in your own week. Write **one real thing** in three of the boxes.'));
out.push(table(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'], [['', '', '', '', ''], ['', '', '', '', '']], [1, 1, 1, 1, 1]));
out.push(p('**b**  Which sentence is about a **plan already made**? _I\'m seeing the supplier on Thursday. · I usually see suppliers on Thursday. · I\'ll see him if he comes._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub want to find?   **A** a free morning   **B** the price list   **C** a new supplier'));
out.push(p('**b**  Listen again. **1** Why is Wednesday difficult?   **2** When do they agree to meet?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.5  Looking for a free morning', [
  ['Mr Ayoub', 'Nour, I need an hour with you and Abu Yasser about the stock card. What are we doing this week?'],
  ['Nour', 'Let me look at the diary. Sunday morning you\'re seeing the bank.'],
  ['Mr Ayoub', 'And Monday is the meeting.'],
  ['Nour', 'Monday is the meeting, and after it Bassel is coming in with the Homs figures. Tuesday the Aleppo lorry arrives, so Abu Yasser is at the gate all morning.'],
  ['Mr Ayoub', 'Wednesday?'],
  ['Nour', 'Wednesday is difficult. Hala is starting at the counter, so I\'m with her from half past eight.'],
  ['Mr Ayoub', 'And Thursday?'],
  ['Nour', 'Thursday Ms Shamsi is coming at ten. But we\'re free from eight to half past nine — Abu Yasser is here from half past seven anyway.'],
  ['Mr Ayoub', 'Thursday at eight, then. One hour, not more.'],
  ['Nour', 'Thursday at eight. I\'ll tell Abu Yasser today, not on Thursday morning.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – present continuous for arrangements**',
  table(['Use it for', 'Example'], [
    ['a plan already made, with a time', 'Ms Shamsi **is coming** at ten on Thursday.'],
    ['your own diary', 'I**\'m seeing** the bank on Sunday morning.'],
    ['asking about somebody\'s diary', '**What are you doing** on Thursday?'],
    ['saying you are not free', 'I**\'m with** Hala from half past eight.'],
  ], [1.4, 2.2]),
  '⚠ Use the **present continuous**, not _will_, for something already arranged: _She **is coming** at ten_, not ~~she will come at ten~~. _Will_ sounds like a guess, and at work a guess is not a diary.',
  '⚠ Use the **present simple** for a timetable: _The lorry **arrives** on Tuesday. The bus **leaves** at seven._',
  '**Practise:** Put the verb in the right form.',
  '1 Ms Shamsi ______ (come) at ten on Thursday.  2 The Aleppo lorry ______ (arrive) on Tuesday — it always does.  3 What ______ you ______ (do) on Wednesday?  4 I ______ (see) the bank on Sunday.  5 Hala ______ (start) at the counter on Wednesday.',
  '**Useful phrases:**  Let me look at the diary.  ·  What are we doing this week?  ·  …is difficult.  ·  We\'re free from… to…  ·  One hour, not more.',
  '**Pronunciation – days and dates.** 🔊 **Track 7.6** Listen and repeat: _on Thursday_ /ɒn ˈθɜːzdeɪ/ · _on the twentieth of April_ · _Thursday the twentieth_. The day is strong; _on_ and _the_ are weak.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A needs an hour with B; B reads out the diary and they find a slot. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I need an hour about __________. What are we doing this week?'],
  ['B', 'Let me look. __________ you\'re __________.'],
  ['A', 'And __________?'],
  ['B', '__________ is __________, and after it __________ is __________.'],
  ['A', '__________?'],
  ['B', '__________ is difficult. __________ is __________, so I\'m __________.'],
  ['A', 'And __________?'],
  ['B', '__________ __________ is coming at __________. But we\'re free from __________ to __________.'],
  ['A', '__________, then. One hour, not more.'],
]));
out.push(table(['Role card 1 — B\'s week at a school', 'Role card 2 — B\'s week at a garage'], [[
  'Sun: exams all day. Mon: teaching 8–1, parents 2–4. Tue: the inspector is coming at 10. Wed: free after 11. Thu: trip to the museum, back at 2.',
  'Sun: two services booked. Mon: the parts man is coming at 9. Tue: free in the morning. Wed: the big van is in all day. Thu: closing at 12 for the inspection.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the slot they found, and the two they rejected.'));
out.push(PHRASE_CARD(['What are we doing…?', 'Let me look.', '…is coming at…', '…is difficult.', 'We\'re free from… to…', 'One hour, not more.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Find a free hour with **two** colleagues for a real or invented meeting. Each of you must read out at least **three** things you are doing next week before you agree on a time.'));
out.push(table(['Who', 'Their week', 'The slot we found'], [['', '', ''], ['', '', '']], [1, 2.4, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ is _______ on Monday and _______ on Wednesday, so we\'re meeting on _______ at _______._'));
out.push(p('**Listener task:** write the busiest day in the class. Why is it that day?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _will come_ where an arrangement is meant. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the week Nour sends round on Sunday morning, and answer the questions.'));
out.push(box(null, [
  '**THE WEEK — 16 to 20 April**   ·   from Nour, to everybody',
  '**Sunday**  Mr Ayoub is at the bank, 9–11. The counter opens as usual.',
  '**Monday**  Meeting 8.30, small room, half an hour. Bassel is coming in afterwards with the Homs figures.',
  '**Tuesday**  The Aleppo lorry arrives in the afternoon. Abu Yasser is at the gate from two; please don\'t ask him for anything between two and four.',
  '**Wednesday**  Hala is starting at the trade counter. I\'m with her from 8.30 until 11. If you need me before eleven, it must be urgent.',
  '**Thursday**  Ms Shamsi (Shamsi Packaging) is coming at 10, boardroom. Mr Ayoub, Abu Yasser and I are meeting at 8 about the stock card — one hour.',
  '**Not happening this week:** the Hama delivery (moved to next Tuesday) and the printer repair (the part has not come).',
  'If something changes I will send one message, not five.',
], 'FFFFFF', C.navy));
out.push(item('1', 'When must nobody ask Abu Yasser for anything, and why?'));
out.push(item('2', 'What two things are **not** happening this week?'));
out.push(item('3', 'What does Nour promise at the end?'));
out.push(box('Writer\'s box', [
  '**Shape of a week:** one line per day, the day in bold → who is where, with **times** → a line that says what it means for other people → a **not happening this week** line → a promise about changes.',
  'Say what each arrangement **means for the reader**: _please don\'t ask him for anything between two and four_. A diary that only lists events makes everybody work out their own consequences.',
  'The **not happening** line is as useful as the rest. People plan around things they think are happening.',
  '⚠ Promise **one** message about changes, not a message per change. Five messages are read as noise and the sixth, the important one, is not read at all.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the week for your own workplace, team or family (25 words or more). Use the frame.'));
out.push(p('**THE WEEK — ______ to ______**   ·   from ______________.  **______________**  ______________.  **______________**  ______________. Please ______________.  **______________**  ______________ is ______________ at ______. If you need ______________, ______________.  **Not happening this week:** ______________. If something changes ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read it as somebody who needs a decision on Wednesday. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Present continuous for arrangements, present simple for timetables', ''],
  ['At least one line that says what it means for the reader', ''],
  ['A _not happening_ line', ''],
  ['Times, not only days', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their _not happening_ line. The class says which one would have saved somebody a wasted journey.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the busiest week you can remember (35 words or more). Say what you were doing each day, what you cancelled, and what you would do differently.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I\'m tired just reading it._   ✓ _Could you have cancelled…?_   ? _a question about that week_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In each one, find the thing that should have been cancelled first. Do the writers agree with you?'));
out.push(box('Homework', ['Write your final text. Then write your own real week ahead, in the shape of the Writer\'s box, including the _not happening_ line (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 7.4 =======================
out.push(pb());
out.push(h2('7.4  How about Tuesday instead?'));
out.push(p('**Function:** suggesting another time   ·   **Grammar:** _How about…? / What about…?_   ·   **Pronunciation:** the rising alternative'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your partner suggests a time; you cannot. Offer another, three different ways: _How about…? · What about…? · Would ______ suit you better?_'));
out.push(p('**b**  Which is after _how about_: a verb, an **-ing** form, or a noun? Test all three: _How about Tuesday? · How about meeting on Tuesday? · How about we meet on Tuesday?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many times is the meeting moved?   **A** once   **B** twice   **C** three times'));
out.push(p('**b**  Listen again. **1** Why can\'t Mr Tarabishi come on Thursday?   **2** What finally works?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.7  Finding a time that suits everybody', [
  ['Nour', 'Mr Tarabishi, about the meeting on the new branch. Could you come on Thursday at eleven?'],
  ['Mr Tarabishi', 'Thursday I\'m in Homs. The new branch, you understand — I\'m there every Thursday now.'],
  ['Nour', 'Of course. How about Wednesday, same time?'],
  ['Mr Tarabishi', 'Wednesday morning the stock comes. In the afternoon I can.'],
  ['Nour', 'Wednesday afternoon… Mr Ayoub is at the head office until four.'],
  ['Mr Tarabishi', 'Then we are two busy men and one busy girl.'],
  ['Nour', 'What about Tuesday instead? Mr Ayoub is here all day, and the counter is quiet after two.'],
  ['Mr Tarabishi', 'Tuesday at half past two. That suits me better than any of them — I pass your street anyway.'],
  ['Nour', 'Tuesday the eighteenth, half past two, in the boardroom. I\'ll send it in writing.'],
  ['Mr Tarabishi', 'Send it in writing. My memory is not what it was, and my son will ask me where I am going.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – suggesting another time**',
  table(['Suggesting', 'Saying it doesn\'t work', 'Agreeing'], [
    ['**How about** Wednesday?', 'Wednesday morning the stock comes.', 'That suits me.'],
    ['**How about meeting** on Tuesday? (**-ing**)', 'I\'m in Homs on Thursday.', 'That suits me **better than**…'],
    ['**What about** Tuesday **instead**?', 'He\'s at the head office until four.', 'Tuesday at half past two, then.'],
    ['**Would** Tuesday **suit you** better?', 'I\'m afraid that\'s difficult.', 'I pass your street anyway.'],
  ], [1.4, 1.6, 1.4]),
  '**How about** and **What about** take a **noun** or an **-ing** form, never a plain verb: _How about **Tuesday**? · How about **meeting** on Tuesday?_ — not ~~how about meet~~.',
  '⚠ Say **why** a time does not work. _I can\'t_ makes the other person guess; _I\'m in Homs on Thursday_ lets them suggest Friday.',
  '⚠ When you refuse a time, **offer one**. Two people who only refuse can spend a week not meeting.',
  '**Practise:** Refuse with a reason, then offer another time.',
  '1 Thursday at eleven?  2 Wednesday morning?  3 Friday?  4 Monday at eight?  5 This afternoon?',
  '**Useful phrases:**  How about…?  ·  What about… instead?  ·  Would… suit you better?  ·  That suits me.  ·  I pass your street anyway.  ·  I\'ll send it in writing.',
  '**Pronunciation – the rising alternative.** 🔊 **Track 7.8** Listen. An alternative **rises**, because it is a real question: _How about ↗Wednesday?_ A falling tone here sounds like a decision, not an offer. Repeat the five.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A suggests three times; B refuses two with a reason and accepts the third. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'About __________. Could you come on __________ at __________?'],
  ['B', '__________ I\'m __________.'],
  ['A', 'Of course. How about __________, same time?'],
  ['B', '__________ morning __________. In the afternoon I can.'],
  ['A', '__________ afternoon… __________ is __________ until __________.'],
  ['B', 'Then we are both busy.'],
  ['A', 'What about __________ instead? __________, and __________.'],
  ['B', '__________ at __________. That suits me better.'],
]));
out.push(table(['Role card 1 — a parent and a teacher', 'Role card 2 — two engineers and a site'], [[
  'B works 7–3 and cannot leave; the school closes at 2; Wednesday is the only late day. A is free after 4 and on Saturday morning.',
  'B can only be on site when the power is off, which is Sunday and Wednesday mornings. A is in another city on Sundays.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the reason given for each refusal. Was any refusal made without one?'));
out.push(PHRASE_CARD(['How about…?', 'What about… instead?', 'In the afternoon I can.', 'That suits me.', '…suits me better.', 'I\'ll send it in writing.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('In **threes**, find one hour next week when all three of you are free, for a real thing — a lesson, a meal, a job. Everybody must give a real reason for every time they refuse.'));
out.push(table(['Time suggested', 'Who couldn\'t', 'Reason'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.2, 1, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We suggested _______ times. _______ couldn\'t do _______ because _______. In the end we agreed on _______._'));
out.push(p('**Listener task:** write the number of suggestions each group needed. What made some groups faster?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _how about meet_ and _what about to meet_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message Nour sends to three people at once, and answer the questions.'));
out.push(box(null, [
  '**To:** Mr Ayoub, Abu Yasser, Hala   **From:** Nour   **Subject:** The stock-card hour — three options, please answer by Sunday',
  'We need one hour together about the stock card. Three dates work for the room. **Please tick the ones you can do** and send it back; I will take the one that works for everybody and tell you by Sunday evening.',
  '**A  Tuesday 18, 8.00–9.00** — before the counter opens. Short, and everybody is here anyway.',
  '**B  Thursday 20, 8.00–9.00** — but Ms Shamsi comes at ten, so we must finish exactly at nine.',
  '**C  Monday 24, 9.00–10.00** — after the weekly meeting. A week later, and the stock card keeps going wrong in the meantime.',
  'If none of the three works for you, tell me **which day** is possible instead — not just that you are busy.',
  'Nour',
], 'FFFFFF', C.navy));
out.push(item('1', 'What must the three people do, and by when?'));
out.push(item('2', 'What is the disadvantage of option C?'));
out.push(item('3', 'What does Nour ask people to do if none of the options works?'));
out.push(box('Writer\'s box', [
  '**Shape of a three-option message:** why you need the meeting → **tick the ones you can do** → three lettered options, each with its **time and its drawback** → who decides and when → what to do if none works.',
  'Give each option its **drawback**. An option with only advantages looks like the one you want, and people stop reading the others.',
  'Say **who decides and by when**. Three people who all say "whatever suits the others" have arranged nothing.',
  '⚠ _Tell me **which day** is possible instead — not just that you are busy._ This one sentence saves the second round of messages, which is where arrangements die.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a three-option message for a real or invented meeting (25 words or more). Use the frame.'));
out.push(p('**Subject:** ______________ — three options, please answer by ______________.  We need ______________. Please tick the ones you can do.  **A  ______________** — ______________.  **B  ______________** — but ______________.  **C  ______________** — ______________.  I will take ______________ and tell you by ______________. If none works, tell me ______________ — not just that you are busy.  ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Be a busy person who can do none of the three. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three options, each with a time', ''],
  ['Each option has a drawback', ''],
  ['Who decides, and by when', ''],
  ['What to do if none of them works', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their option **C**. The class says which drawback is real and which is there to make option A look good.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about arranging something difficult with several people — a family event, a journey, a repair at home (35 words or more). Say how many times it moved and what finally made it work.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _This happens in my family too._   ✓ _Who decided in the end?_   ? _a question about the arrangement_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In each, who decided in the end — the busiest person, the most patient one, or the one who offered times instead of refusing them?'));
out.push(box('Homework', ['Write your final text. Then write five different ways of refusing a time, each with a reason **and** an alternative (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 7.5 =======================
out.push(pb());
out.push(h2('7.5  I\'d love to, but I\'m afraid I can\'t'));
out.push(p('**Function:** accepting and refusing an invitation   ·   **Grammar:** _I\'d love to / I\'m afraid_   ·   **Pronunciation:** the warm refusal'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Accept these three warmly, in one sentence each: _Come to the opening on Friday. · Join us for lunch. · Will you take the minutes on Monday?_'));
out.push(p('**b**  Now refuse the same three — without using the word **no**.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Nour invited to?   **A** a wedding   **B** a branch opening   **C** a training day'));
out.push(p('**b**  Listen again. **1** Why can\'t Mr Ayoub come?   **2** What does Nour offer instead?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.9  Two invitations, one morning', [
  ['Mr Tarabishi', 'Nour, the new branch opens on Wednesday at eleven. You will come, you and Mr Ayoub.'],
  ['Nour', 'Thank you — I\'d love to. Wednesday at eleven. Let me check for Mr Ayoub.'],
  ['Mr Tarabishi', 'He must come. Twelve years we have worked together.'],
  ['Nour', 'I know. I\'m afraid he can\'t on Wednesday — he\'s at the head office in Aleppo until Thursday. He will be very sorry.'],
  ['Mr Tarabishi', 'Aleppo. Of course. Business.'],
  ['Nour', 'But he asked me to say this: he would like to come to the branch the following week, when the shop is quiet and he can see it properly. Would that suit you?'],
  ['Mr Tarabishi', 'That is better than the opening. At an opening nobody talks.'],
  ['Nour', 'Then I\'ll come on Wednesday with the gift, and Mr Ayoub comes the Tuesday after.'],
  ['Mr Tarabishi', 'Good. And tell him: the new branch has a chair for him, by the window.'],
  ['Nour', 'I\'ll tell him exactly that.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – accepting and refusing**',
  table(['Accepting', 'Refusing — warmly', 'Keeping the door open'], [
    ['Thank you — **I\'d love to**.', '**I\'m afraid** I can\'t.', 'But **he would like to** come the following week.'],
    ['That\'s very kind.', 'I\'m afraid he **can\'t on Wednesday** — he\'s in Aleppo.', '**Would that suit you?**'],
    ['**I\'d be glad to.**', 'He **will be very sorry**.', 'Could we… **instead**?'],
  ], [1.3, 1.7, 1.6]),
  '**I\'d love to** = _I would love to_. It is warm and completely normal in business English — warmer than _yes, thank you_, and it costs nothing.',
  '⚠ A refusal at work has three parts, as in Unit 2: _I\'m afraid_ → **the reason** → **what you can do instead**. Here the third part matters most: a refusal with no alternative ends a relationship that took twelve years.',
  '⚠ Say that the person will be **sorry**. It is a small sentence and it is the difference between a refusal and a snub.',
  '**Practise:** Refuse warmly, with a reason and an alternative.',
  '1 Come to the opening on Wednesday.  2 Can you take the minutes on Monday?  3 Join us for lunch.  4 Can you come to Homs with me?  5 Will you speak at the training day?',
  '**Useful phrases:**  I\'d love to.  ·  Let me check for…  ·  I\'m afraid he can\'t…  ·  He will be very sorry.  ·  Would that suit you?  ·  I\'ll tell him exactly that.',
  '**Pronunciation – the warm refusal.** 🔊 **Track 7.10** Listen. _I\'m afraid_ is said **gently and a little slowly**, and the voice falls: _I\'m aFRAID he ↘can\'t._ Said fast and flat it sounds like relief. Repeat the five refusals twice: once badly, once well.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A invites; B accepts for one person and refuses for another, with an alternative. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ on __________ at __________. You will come, you and __________.'],
  ['B', 'Thank you — I\'d love to. __________ at __________. Let me check for __________.'],
  ['A', 'He / She must come. __________.'],
  ['B', 'I know. I\'m afraid he / she can\'t on __________ — __________. He / She will be very sorry.'],
  ['A', 'Of course.'],
  ['B', 'But __________ would like to __________, when __________. Would that suit you?'],
  ['A', 'That is better than __________.'],
]));
out.push(table(['Role card 1 — a wedding', 'Role card 2 — a training day'], [[
  'A invites the whole office to a cousin\'s wedding on Friday. B can go; the manager is travelling and will be sorry; alternative — the manager visits the family the following week.',
  'A asks two people to speak at a training day. B will speak; the second person is on leave; alternative — a recorded five minutes, or the following month\'s session.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the alternative offered. Was it better than the original invitation, or only polite?'));
out.push(PHRASE_CARD(['I\'d love to.', 'Let me check for…', 'I\'m afraid he can\'t…', 'He will be very sorry.', 'Would that suit you?', 'That is better than…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Invite **three** colleagues to something real or invented. Accept one invitation warmly, refuse one warmly with an alternative, and think carefully before the third.'));
out.push(table(['Invitation', 'Accepted or refused?', 'What I said'], [['', '', ''], ['', '', ''], ['', '', '']], [1.4, 1.2, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ invited me to _______. I said _______, because _______. I offered _______ instead._'));
out.push(p('**Listener task:** write the warmest refusal you hear today, word for word.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I\'m afraid no_ and _I would love_ without _to_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two replies to the same invitation, and answer the questions.'));
out.push(box(null, [
  '**The invitation:** _Tarabishi Stores invites Sham Trading Co. to the opening of our new branch in Homs, Wednesday 19 April at 11 am._',
  '**Reply 1 — from Nour**',
  'Dear Mr Tarabishi, Thank you for the invitation. I\'d love to come, and I will be there on Wednesday at eleven with something small for the new shop.',
  'I\'m afraid Mr Ayoub can\'t come that day — he is at the head office in Aleppo until Thursday. He was very sorry when I told him; twelve years is twelve years.',
  'He asked me to suggest this instead: he would like to visit the branch on **Tuesday 25**, when the shop is quiet and he can see it properly and meet your staff. Would that suit you? If another day is better, tell me and I will move everything else.',
  'Congratulations to you and your son. Nour',
  '**Reply 2 — from another company**',
  'Dear Sir, Thank you for your invitation. Unfortunately we are unable to attend. We wish you every success. Regards.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does Reply 1 do that Reply 2 does not? Name three things.'));
out.push(item('2', 'Which sentence in Reply 1 shows the relationship, not the business?'));
out.push(item('3', 'Is Reply 2 impolite? What is wrong with it?'));
out.push(box('Writer\'s box', [
  '**Shape of a reply to an invitation:** thank them → **accept warmly** for whoever is coming, and say what you will bring or do → **refuse warmly** for whoever is not, with the **reason** and the **regret** → offer the **alternative**, with a date → ask whether it suits → one warm line that is not business.',
  'Name the **person** who is sorry, not the company: _he was very sorry when I told him_. Companies are never sorry; people are.',
  'Put a **date** on the alternative. _We hope to visit soon_ is a polite way of not visiting.',
  '⚠ Reply 2 is not rude. It is **correct and empty**, which over twelve years is worse than rude: it says the relationship is worth four sentences.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a reply to an invitation: one person accepts, one cannot come (25 words or more). Use the frame.'));
out.push(p('Dear ______________, Thank you for ______________. I\'d love to come, and I will be there on ______________ with ______________. I\'m afraid ______________ can\'t come that day — ______________. He / She was very sorry ______________. He / She asked me to suggest this instead: ______________ on ______________. Would that suit you? ______________.  ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read it as the person who sent the invitation. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A warm acceptance, with what you will bring or do', ''],
  ['A refusal with a reason **and** a named person who is sorry', ''],
  ['An alternative **with a date**', ''],
  ['One line that is not business', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their non-business line. The class says which one they would remember a year later.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an invitation you had to refuse (35 words or more). Say what it was, why you refused, how you refused, and whether you would do it the same way now.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _You did the right thing._   ✓ _Did you offer anything instead?_   ? _a question about what happened after_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many of the writers are still thinking about that refusal? What does that tell you?'));
out.push(box('Homework', ['Write your final text. Then write Reply 2 again — the empty one — as it should have been written, in five sentences (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 7.6 =======================
out.push(pb());
out.push(h2('7.6  I\'d rather meet in the morning'));
out.push(p('**Function:** saying which you prefer, and why   ·   **Grammar:** _prefer / I\'d rather_   ·   **Pronunciation:** _I\'d rather_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Which do you prefer, and why? _morning or afternoon meetings · the telephone or email · working alone or in a team · a long lunch or an early finish_'));
out.push(p('**b**  Say the same preference three ways: _I prefer ______ · I prefer ______ to ______ · I\'d rather ______ than _______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are they deciding?   **A** who comes to the meeting   **B** where and when to meet   **C** what to put on the agenda'));
out.push(p('**b**  Listen again. **1** Why does Abu Yasser prefer the morning?   **2** Where does Nour prefer to meet, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.11  Morning or afternoon, office or warehouse?', [
  ['Mr Ayoub', 'The stock-card hour. Morning or afternoon?'],
  ['Abu Yasser', 'Morning. I\'d rather talk before the lorries than after them. After four o\'clock my head is full of numbers that are not the ones you want.'],
  ['Mr Ayoub', 'Nour?'],
  ['Nour', 'I prefer the morning too, but for a different reason — I\'d rather do difficult things early than carry them all day.'],
  ['Mr Ayoub', 'Morning it is. And where? Here, or down in the warehouse?'],
  ['Abu Yasser', 'The warehouse. I\'d rather show you the shelf than describe it.'],
  ['Nour', 'I\'d prefer the office, honestly. In the warehouse we\'ll stop every two minutes — somebody always needs you.'],
  ['Abu Yasser', 'That is true.'],
  ['Mr Ayoub', 'Then we do both: half an hour in the office with the card, and ten minutes at the shelf afterwards. Does that suit everybody?'],
  ['Nour', 'That suits me better than either.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – prefer and would rather**',
  table(['Pattern', 'Example'], [
    ['**prefer** + noun', 'I **prefer** the morning.'],
    ['**prefer** + noun + **to** + noun', 'I **prefer** email **to** the telephone.'],
    ['**prefer** + **-ing**', 'I **prefer working** alone.'],
    ['**I\'d rather** + **plain verb**', 'I**\'d rather talk** before the lorries.'],
    ['**I\'d rather** + verb + **than** + verb', 'I**\'d rather show** you the shelf **than describe** it.'],
    ['**I\'d prefer** + **to** + verb', 'I**\'d prefer to meet** in the office.'],
  ], [1.5, 2.2]),
  '⚠ **I\'d rather** takes a **plain verb** — no _to_: _I\'d rather **go**_, not ~~I\'d rather to go~~. **I\'d prefer** takes **to**: _I\'d prefer **to go**_.',
  '⚠ **prefer … to …** but **would rather … than …**. The two little words are not interchangeable.',
  '⚠ A preference at work is useless without its **reason**. _I prefer the morning_ is a taste; _I\'d rather do difficult things early than carry them all day_ is an argument.',
  '**Practise:** Say each preference twice — once with _prefer_, once with _I\'d rather_ — and add a reason.',
  '1 morning meetings  2 email  3 working in a team  4 an early finish  5 the office, not the warehouse',
  '**Useful phrases:**  Morning or afternoon?  ·  I\'d rather… than…  ·  but for a different reason  ·  honestly  ·  Then we do both.  ·  That suits me better than either.',
  '**Pronunciation – I\'d rather.** 🔊 **Track 7.12** Listen and repeat: _I\'d rather_ /aɪd ˈrɑːðə/ — three syllables, the first very short. Many learners say _I would rather_ in full, which is correct but sounds formal and slow. Repeat the five.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks about two choices; B gives a preference **with a reason** each time. Then find a third answer that suits both. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________. __________ or __________?'],
  ['B', '__________. I\'d rather __________ than __________. __________.'],
  ['A', 'And where? __________, or __________?'],
  ['B', '__________. I\'d rather __________ than __________.'],
  ['A', 'I\'d prefer __________, honestly. In __________ we\'ll __________.'],
  ['B', 'That is true.'],
  ['A', 'Then we do both: __________ and __________. Does that suit everybody?'],
]));
out.push(table(['Role card 1 — a family decision', 'Role card 2 — two shopkeepers'], [[
  'Travel to the village: early Friday or late Thursday? Stay two nights or one? Drive or go by bus? Each person has a real reason.',
  'Open on Friday morning or close all Friday? Sell fewer things well or more things badly? Pay the rent monthly or six months in advance at a discount?',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the **reasons**, not the preferences. Which reason would change your own mind?'));
out.push(PHRASE_CARD(['I prefer…', 'I\'d rather… than…', 'I\'d prefer to…', 'but for a different reason', 'Then we do both.', '…better than either.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Ask **three** colleagues about four real choices at work. For each answer, ask _why?_ — a preference without a reason does not count.'));
out.push(table(['Choice', 'Name', 'Prefers…', 'Because…'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1, 1.2, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ would rather _______ than _______, because _______. I\'d rather _______, because _______._'));
out.push(p('**Listener task:** write a preference the class is split on, and the two reasons behind it.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I\'d rather to go_ and _I prefer the morning than the afternoon_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Nour\'s reply when Ms Shamsi offers two ways of working, and answer the questions.'));
out.push(box(null, [
  '**To:** Ms Dima Shamsi   **From:** Nour Mansour   **Subject:** Monthly or quarterly — our preference, with the reason',
  'Dear Ms Shamsi,',
  'Thank you for the two options. We would rather order **monthly** than quarterly, and I want to tell you why, because the reason may change the offer.',
  'Quarterly is three per cent cheaper and we know it. But we would be holding three months of wrap in a warehouse where the shelves are already full, and twice in two years we have paid for stock we did not use before it was damaged.',
  'If the price is the only difference, monthly is better for us even at the higher price. If you could offer the quarterly discount on a **monthly** order with a twelve-month commitment, we would prefer that to either — and you would have a year of certain orders rather than four large ones.',
  'I would rather ask than assume. Tell me what is possible.',
  'Nour',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which option does Sham Trading prefer, and which is cheaper?'));
out.push(item('2', 'What is the real reason behind the preference?'));
out.push(item('3', 'What third option does Nour invent, and what does the supplier get from it?'));
out.push(box('Writer\'s box', [
  '**Shape of a written preference:** thank them for the options → state the preference and say **why the reason matters** → admit what the other option has in its favour → give the **real reason**, with evidence → invent a **third option** that gives both sides something → invite an answer.',
  '**Admit the other side\'s strongest point first.** _Quarterly is three per cent cheaper and we know it._ A preference that pretends the alternative is worthless is not believed.',
  'Use **evidence**, not adjectives: _twice in two years we have paid for stock we did not use_. One fact beats three opinions.',
  '⚠ The third option is where business English earns its money. Both offered choices usually suit the person who offered them; the useful reply is the one neither side had thought of.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a reply choosing between two options, real or invented (25 words or more). Use the frame.'));
out.push(p('Dear ______________, Thank you for the two options. We would rather ______________ than ______________, and I want to tell you why. ______________ is ______________ and we know it. But ______________, and ______________. If you could ______________, we would prefer that to either — and you would ______________. I would rather ask than assume.  ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read it as the person who made the offer. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The other option\'s strongest point is admitted', ''],
  ['The reason has evidence, not only adjectives', ''],
  ['A third option that gives both sides something', ''],
  ['_prefer to_ / _rather than_ used correctly', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their third option. The class says whether the other side would really gain from it, or only appear to.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a choice where you took the more expensive or harder option (35 words or more). Say what the cheap option was, why you did not take it, and whether you were right.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _You were right._   ✓ _What would have changed your mind?_   ? _a question about the choice_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Did anybody regret the harder choice? What makes people sure they were right?'));
out.push(box('Homework', ['Write your final text. Then write six sentences about your preferences at work, three with _prefer_ and three with _would rather_, each with its reason (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 7.7 =======================
out.push(pb());
out.push(h2('7.7  Review & Mediate: what does the invitation say?'));
out.push(p('**Function:** telling a colleague, in simple words, what a meeting invitation says   ·   **Review:** _can/can\'t_ · _could_ · the diary · suggesting times · accepting and refusing · preferences'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 7 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** Answer this with _what exactly_: _Can you use the accounts system?_',
  '**2** Make it polite: _Come at ten._ Then make it softer still.',
  '**3** Which tense for a meeting already arranged, and which for a bus timetable?',
  '**4** Two ways to suggest another time, with the form that follows each.',
  '**5** The three parts of a warm refusal.',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Abu Yasser want to know?   **A** whether he must come   **B** what the meeting is about   **C** both'));
out.push(p('**b**  Listen again. **1** Where is the meeting, and when?   **2** What must he bring?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.13  The invitation on the board', [
  ['Abu Yasser', 'Nour, there\'s a paper on the board with my name on it. It says "attendance" and "apologies". Am I in trouble?'],
  ['Nour', 'You\'re not in trouble. It\'s a meeting invitation. I\'ll tell you what it means for you.'],
  ['Abu Yasser', 'What it means for me. Good.'],
  ['Nour', 'Thursday the twentieth, eight o\'clock, in the small room upstairs. One hour, not more.'],
  ['Abu Yasser', 'Eight o\'clock. I\'m here at half past seven anyway. And what is it about?'],
  ['Nour', 'The stock card — why the shelf and the screen keep disagreeing. You, Mr Ayoub and me.'],
  ['Abu Yasser', 'And "apologies"?'],
  ['Nour', 'That only means: if you can\'t come, tell me before, so I don\'t wait for you. It isn\'t an apology for anything you\'ve done.'],
  ['Abu Yasser', 'Ah. In my day it said "be there at eight".'],
  ['Nour', 'One more thing: bring the book. Not the computer figures — the book, with the pencil marks. That\'s the part people get wrong; they bring the printout.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – a meeting invitation, for somebody who must act**',
  table(['To calm and start', 'To give what matters', 'To warn'], [
    ['You\'re not in trouble.', 'When: ___ , ___ . Where: ___ .', 'One more thing: bring ___ .'],
    ['I\'ll tell you what it means **for you**.', 'What it\'s about: ___ . Who: ___ .', 'That\'s the part people get wrong.'],
    ['It\'s a ___ .', '"Apologies" only means ___ .', 'Not ___ — ___ .'],
  ], [1.5, 1.8, 1.5]),
  '⚠ When a document **frightens** somebody, deal with the fear before the facts: _you\'re not in trouble_. A worried listener does not hear a time.',
  '⚠ Translate the **office word**, don\'t repeat it. _Apologies_ means _tell me if you can\'t come_. _Attendance_ means _who is coming_. The words are the reason they asked you.',
  '⚠ End with what to **bring** and what **not** to bring. The commonest meeting failure is the right people with the wrong paper.',
  '**Practise:** The invitation says: _Attendance is required. Please forward apologies to the chair in advance. Agenda items to be submitted 24 hours prior._ Say it in easy English for a colleague.',
  '**Useful phrases:**  You\'re not in trouble.  ·  I\'ll tell you what it means for you.  ·  It only means…  ·  One more thing: bring…  ·  Not… — …  ·  That\'s the part people get wrong.',
  '**Pronunciation – calming, then informing.** 🔊 **Track 7.14** Listen. The calming sentence is **low and slow**; the facts that follow are at a normal speed. Repeat the four pairs.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads invitation 1 silently and tells B what it means for B. B closes the book. Then swap with invitation 2.'));
out.push(table(['Invitation 1 — for A', 'Invitation 2 — for B'], [[
  '**MEETING NOTICE.** Subject: stock reconciliation. Venue: small meeting room, 2nd floor. Date/time: Thursday 20 April, 08.00–09.00. Attendance: K. Ayoub (chair), Y. Khalil, N. Mansour. _Apologies to the chair in advance. Attendees are requested to bring source documentation, not system printouts. Agenda items to be submitted 24 hours prior._',
  '**TRAINING NOTICE.** Subject: fire safety refresher, mandatory for all warehouse personnel. Venue: the yard, by the green door. Date/time: Wednesday 26 April, 15.30, duration 45 minutes. _Non-attendance must be authorised by a supervisor. Personnel are reminded that high-visibility clothing is required. A register will be taken._',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs mediate their invitation for the class – **without the book**.'));
out.push(p('**Listener task:** write the time, the place and the **one thing to bring or wear**. Did the speaker explain the office words?'));
out.push(PHRASE_CARD(['You\'re not in trouble.', 'what it means for you', 'It only means…', 'One more thing: bring…', 'Not… — …', 'people get wrong']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you an invitation or a notice in formal English. Read it silently. Then tell **two** colleagues what it means for them. Do not show them the paper.'));
out.push(table(['Who I told', 'When and where', 'What they must bring or do'], [['', '', ''], ['', '', '']], [1, 1.6, 1.6]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the invitation you mediated. This is the **seventh** unit of this book, and the mediation task comes back in every unit — so listen for the **office word** that was explained.'));
out.push(p('_It\'s a ______. It\'s on ______ at ______, in ______. It\'s about ______. The word people don\'t know is ______ — it only means ______._'));
out.push(p('**Listener task:** write the office word and its plain meaning. Collect them: by Unit 12 you will have a list.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short workplace texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _Meeting Thu 20, 08.00–09.00. Apologies to the chair in advance._   **A** Say sorry to the chair after the meeting. **B** Tell the chair before if you cannot come. **C** The meeting is one hour late.',
  '**2**  _Bring source documentation, not system printouts._   **A** Bring the original book or paper. **B** Print the figures from the computer. **C** Bring nothing.',
  '**3**  _Nour — can\'t do Thursday, I\'m in Homs. Wednesday pm possible. — F.T._   **A** He is free on Thursday. **B** He can meet on Wednesday afternoon. **C** He will not meet at all.',
  '**4**  _Fire training Wed 26, 15.30, 45 min. Mandatory, warehouse staff._   **A** Warehouse staff must attend. **B** It lasts all afternoon. **C** It is for office staff.',
  '**5**  _I\'d love to, but Mr Ayoub is in Aleppo that day. Tuesday 25 instead?_   **A** Nobody is coming. **B** One person is coming; another suggests a different day. **C** The meeting is cancelled.',
  '**6**  _Three options below — please tick the ones you CAN do, by Sunday._   **A** Choose one option only. **B** Mark every option that is possible for you. **C** Answer after Sunday.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more).** The task gives you **three** things to write about. All three must be there, or you lose marks even if your English is perfect.',
  '**Shape:** greeting → the three points, one short sentence each → a friendly close and your name.',
  'For a message about a **meeting**, the three points are nearly always: **when and where** · **what it is about** · **one thing to bring or do beforehand**.',
  '⚠ Count the three points **before** you write, and tick them off **after**.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a message to Abu Yasser about the Thursday meeting. Say: **(1)** when and where it is, **(2)** what it is about, **(3)** that he must bring the stock book, not the printout. Use the frame.'));
out.push(p('Dear Abu Yasser, There is a meeting on ______________ at ______ in ______________. It\'s about ______________. Please bring ______________, not ______________. Thank you.   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count your partner\'s three points. Tick each one.'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [['1  When and where', ''], ['2  What it is about', ''], ['3  Bring the book, not the printout', ''], ['25 words or more', '']], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 12));
out.push(p('You are organising something with friends. Write a message (25 words or more). Say: **(1)** when and where you are meeting, **(2)** what you are going to do, **(3)** one thing each person should bring.'));
out.push(...lines(5));
out.push(box('Homework', ['Write your final message. Then write the **reply** one friend would send (20+ words), e.g. _I can come at six but not at five — I finish work at half past four. I\'ll bring the bread._'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 7 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  I ___ use the system, but only to look.   a) can   b) can to   c) cans',
  '2  ___ you come at ten instead, please?   a) Could   b) Do   c) Must',
  '3  Would you mind ___ at ten?   a) come   b) to come   c) coming',
  '4  Ms Shamsi ___ at ten on Thursday — it\'s arranged.   a) comes   b) is coming   c) will come',
  '5  How about ___ on Tuesday?   a) meet   b) meeting   c) to meet',
  '6  I\'d love ___, but I\'m afraid I can\'t.   a) to   b) it   c) coming',
  '7  I\'d rather ___ in the morning.   a) to meet   b) meet   c) meeting',
  '8  I prefer email ___ the telephone.   a) than   b) to   c) from',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 7.15** Listen to a call about a meeting. Complete the note.   Day: ______   New time: ______   Place: ______   Bring: ______   Tell them by: ______'));
out.push(dlg('Track 7.15  Audio script (read after the check)', [
  ['Nour', 'Mr Tarabishi, I\'m telephoning about the meeting on Tuesday.'],
  ['Mr Tarabishi', 'Half past two, I have it here.'],
  ['Nour', 'Could we make it three instead? Mr Ayoub is at the bank until half past two.'],
  ['Mr Tarabishi', 'Three o\'clock is fine. In the boardroom?'],
  ['Nour', 'In the boardroom, on the ground floor. Could you bring last year\'s order sheets?'],
  ['Mr Tarabishi', 'I\'ll bring them. Anything else?'],
  ['Nour', 'If anything changes, could you tell me by Monday evening?'],
]));
out.push(p('**C  Writing.** Write a short message moving a meeting (25+ words). Give the new time, the place, and one thing the person should bring.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 7)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say what I can and can\'t do at work, and name the limit exactly',
  '☐ ask politely for a change, and give the reason',
  '☐ talk about my diary, and use the right tense for an arrangement',
  '☐ suggest another time when the first one does not work',
  '☐ accept warmly, and refuse warmly with an alternative',
  '☐ say which I prefer, and give a reason somebody could argue with',
  '☐ tell a colleague in easy English what a meeting invitation means for them',
  '☐ write a handover note, a confirming email, a week, a three-option message, a reply to an invitation and a written preference',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 7 · Student\'s Book');
