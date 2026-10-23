// Proactive Business English A2 · Syria Edition · Book 2 · Unit 22 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'addressee · recipient · cc · signature block · courtesy · phrasing · draft · wording · tone · abbreviation · acknowledgement · prompt reply · at your earliest convenience · with reference to · further to · please note · kindly · on behalf of · enquiry · correspondence · bullet point · paragraph · salutation · sign-off · greeting line · attachment line';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 22  Emails and Requests'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**22.1**  open an email correctly, to anybody',
  '**22.2**  state your purpose in the first line',
  '**22.3**  make a formal request',
  '**22.4**  give a deadline that works',
  '**22.5**  close, and choose between the four closings',
  '**22.6**  write the same message two ways, for two readers',
  '**22.7**  Review & Mediate: tell a colleague what two emails are really doing',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Unit 18 taught the shape. This unit teaches the register.', [
  'Unit 18 gave you the structure of a work email: a subject line that carries the thing and the ask, one fact per line, a request with a date. Nothing in this unit replaces that.',
  'What this unit adds is **who you are writing to**. The same request to Abu Yasser, to a bank and to a customer you have never met is three different emails, and the difference is not politeness — it is **distance**. A message that is too formal for a colleague is cold; one that is too friendly for a bank is not answered.',
  '⚠ One warning about the formal phrases in this unit — _at your earliest convenience_, _further to_, _kindly_. They are real and they are used, and they are also the easiest way in the world to write four lines that say nothing. Learn them, and then ask of every one: **what does this sentence make the reader do?**',
], C.lyellow, C.orange));

// ======================= CYCLE 22.1 =======================
out.push(pb());
out.push(h2('22.1  Dear Mr Ayoub, Dear Sir or Madam, Hello Hala'));
out.push(p('**Function:** opening an email   ·   **Grammar:** salutations and what each one costs   ·   **Pronunciation:** reading a name aloud before you write it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How do you open an email to: your manager · a customer you know well · a bank · somebody whose name you do not know?'));
out.push(p('**b**  Which is wrong, and why? _Dear Mr Khaled, · Dear Mr Ayoub, · Dear Khaled, · Dear Sir Ayoub,_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is wrong with the first line of Hala\'s email?   **A** the spelling   **B** she has used the first name after "Mr"   **C** it is too friendly'));
out.push(p('**b**  Listen again. **1** What does Nour say about "Dear Sir or Madam"? **2** What should you do if you do not know whether a name is a man\'s or a woman\'s?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.1  The first line', [
  ['Hala', 'I have written to the bank. "Dear Mr Samir,"'],
  ['Nour', 'Not Mr Samir. Samir is his first name. In English, **Mr** goes with the family name: Mr Haddad.'],
  ['Hala', 'And if I only have "Samir Haddad" on an email?'],
  ['Nour', 'Then Dear Mr Haddad. If you have met him twice and he signs himself Samir, you may write Dear Samir. Not both.'],
  ['Hala', 'And when I do not know the name at all?'],
  ['Nour', 'Dear Sir or Madam. It is correct, it is cold, and it tells the reader that nobody troubled to find out who they are. Spend two minutes on the telephone first and you can usually write a name.'],
  ['Hala', 'There is a name on this one and I cannot tell whether it is a man or a woman.'],
  ['Nour', 'Then write the whole name: Dear Samir Haddad. It is slightly unusual and it is never wrong, and it is a great deal better than guessing and being wrong in the first line.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Opening an email – and what each opening costs**',
  table(['Opening', 'When', 'What it costs'], [
    ['**Dear Mr / Ms** + **family name**,', 'formal; somebody you have not met', 'nothing — the safe default'],
    ['**Dear** + **first name**,', 'a colleague; somebody who signs that way', 'nothing, if they have done it first'],
    ['**Dear** + **full name**,', 'you cannot tell Mr from Ms', 'slightly unusual, never wrong'],
    ['**Dear Sir or Madam,**', 'you have no name at all', 'cold; says nobody found out who you are'],
    ['**Hello** / **Hi** + first name,', 'a colleague you write to daily', 'nothing inside the company; too casual outside it'],
  ], [1.4, 1.3, 1.6]),
  '⚠ **Mr and Ms go with the family name, never the first name.** _Mr Samir_ is the commonest error in the region and it is noticed every time by an English reader, in the first two words.',
  '⚠ **Ms** is the normal form for a woman at work in English, married or not. _Mrs_ is used only when you know she uses it.',
  '⚠ Do not open with _Dear Sir or Madam_ if two minutes of telephoning would get you a name. It is correct and it is an admission.',
  '⚠ Follow the other person down, not up: once they sign _Samir_, you may write _Dear Samir_. Until then, stay formal — it costs nothing and nobody has ever been offended by it.',
  '**Practise:** Choose the opening for each. 1 your manager 2 a bank you have never written to 3 a supplier of eleven years 4 a name you cannot read 5 a customer who writes to you as "Hi"',
  '**Useful phrases:**  Dear Mr Haddad,  ·  Dear Ms Shamsi,  ·  Dear Samir Haddad,  ·  Dear Sir or Madam,  ·  Hello Hala,  ·  Not both.',
  '**Pronunciation – reading a name aloud before you write it.** 🔊 **Track 22.2** Listen to four names read aloud and spelled. Say a name out loud before typing it; most mis-spelled names in emails are names nobody ever said.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has written an opening; B corrects it and explains the cost. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I have written to __________. "__________"'],
  ['B', 'Not __________. __________ is __________. In English, __________ goes with __________.'],
  ['A', 'And if I only have __________?'],
  ['B', 'Then __________. If __________, you may write __________. Not both.'],
  ['A', 'And when I do not know __________?'],
  ['B', '__________. It is correct, it is cold, and it tells the reader __________.'],
]));
out.push(table(['Role card 1 — a government office', 'Role card 2 — a new customer'], [[
  'The letter is to a department, not a person. A has written "Dear Sirs". There is a named officer on the website, found in ninety seconds.',
  'The customer wrote first and signed "Rasha". A has written "Dear Mrs Rasha" and also "Hi Rasha" in a second draft.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the correction for the class – **without the book**.'));
out.push(p('**Listener task:** write the correct opening for each case. Then say how long it would take to find the name.'));
out.push(PHRASE_CARD(['Dear Mr Haddad,', 'Dear Ms Shamsi,', 'Dear Samir Haddad,', 'Dear Sir or Madam,', 'Hello Hala,', 'Not both.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** emails you have really sent. Write the opening you used and the opening you would use now. Where you used _Dear Sir or Madam_, say whether a name could have been found.'));
out.push(table(['To whom', 'What I wrote', 'What I would write now', 'Could a name be found?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.2, 1.3, 1.5]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I wrote _______ to _______. I would now write _______, because _______._'));
out.push(p('**Listener task:** count how many _Dear Sir or Madam_ openings in the room could have been a name. It is usually most of them.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _Dear Mr Samir_ and _Dear Mrs_ with no name. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page from the office guide, and answer the questions.'));
out.push(box(null, [
  '**HOW WE OPEN AND CLOSE EMAILS — one page, and it settles most arguments**',
  '**Somebody we have not met, name known:** _Dear Mr Haddad,_ / _Dear Ms Shamsi,_ — close with _Yours sincerely_ or _Best regards_.',
  '**Somebody we have not met, name unknown:** _Dear Sir or Madam,_ — close with _Yours faithfully_ or _Best regards_. ⚠ Telephone first. In the last year, every single "Dear Sir or Madam" we sent could have had a name on it.',
  '**A name we cannot assign:** _Dear Samir Haddad,_ — the whole name, no title. Never guess.',
  '**A supplier or customer we know:** _Dear Ms Shamsi,_ until she signs _Dima_, then _Dear Dima,_. Follow them down, never up.',
  '**A colleague:** _Hello Fadi,_ or just _Fadi,_. Inside the building, _Dear_ sounds like a complaint is coming.',
  '**Never:** _Dear Mr_ + first name · _Dear Mrs_ unless she uses it · _To whom it may concern_ in an email (it belongs on a reference) · an opening with no name at all when you have one.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the guide say about "Dear Sir or Madam", and what is the evidence?'));
out.push(item('2', 'What does "follow them down, never up" mean?'));
out.push(item('3', 'Why does _Dear_ sound wrong to a colleague?'));
out.push(box('Writer\'s box', [
  '**An office style page — one line per case, with the matching close**, and a short **Never** list at the bottom.',
  'Pair the opening with the closing on the same line. Most people learn them separately and then mix a formal opening with a friendly close, which reads as a letter written by two people.',
  '**Put the evidence in.** _In the last year, every single one could have had a name on it._ A style rule with a fact behind it is followed; one without is argued about.',
  '⚠ The **Never** list is the half people read. Keep it to five items, all of them things that actually happen in your office — not things from a textbook.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the opening-and-closing page for your own workplace (35 words or more). Use the frame.'));
out.push(p('**HOW WE OPEN AND CLOSE EMAILS**   **______________:** _______________,_ — close with _______________._   **______________:** _______________,_ — close with _______________._ ⚠ ______________.   **______________:** _______________,_ — ______________.   **______________:** ______________ until ______________, then ______________.   **A colleague:** ______________.   **Never:** ______________ · ______________ · ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says pair the opening with its closing on the same line. Which close goes with the second opening here?"',
  'Quote the box, ask the question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could a new person open any email correctly from this page?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Mr / Ms with the family name', ''],
  ['A line for a name that cannot be assigned', ''],
  ['Each opening paired with its close', ''],
  ['A short "Never" list from real life', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "Never" list. The class adds the mistakes they have actually seen; the combined list is the useful one.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time an email opening went wrong, or felt wrong (60 to 100 words). Say what was written, how it was read, and what it cost — if only a moment of coldness.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what the opening said about the writer_   ✓ _Mr / Ms with the family name?_   ? _did the relationship recover?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many of these were about distance rather than grammar? Nearly all, which is the point of the unit.'));
out.push(box('Homework', ['Write your final text. Then find the name of one person your workplace writes to as "Dear Sir or Madam", and write how you found it and how long it took (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 22.2 =======================
out.push(pb());
out.push(h2('22.2  I am writing to ask about…'));
out.push(p('**Function:** stating your purpose   ·   **Grammar:** _I am writing to… · with reference to… · further to…_   ·   **Pronunciation:** the first line read aloud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Open the last three emails you received. How many say what they want in the first line?'));
out.push(p('**b**  Which first line tells you most? _I hope you are well. · With reference to your email of 3 May. · I am writing to ask for a copy of invoice 0612._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is wrong with the draft?   **A** the purpose is in the fourth line   **B** it is too short   **C** the name is wrong'));
out.push(p('**b**  Listen again. **1** What does Nour say the first line is for? **2** When is "I hope you are well" right?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.3  The first line is not a greeting', [
  ['Hala', 'Read the first three lines. "Dear Mr Haddad, I hope this email finds you well. I hope your family are well. We have been customers of your bank for some years now and we value the relationship."'],
  ['Nour', 'And what do you want?'],
  ['Hala', 'A copy of the March statement.'],
  ['Nour', 'Which is in line five. He will read lines one to three, decide this is not urgent, and come back to it on Thursday — if Thursday exists.'],
  ['Hala', 'So I take out the good wishes?'],
  ['Nour', 'You move them. _Dear Mr Haddad, I am writing to ask for a copy of the March statement for account 4471._ Then, if you like, _I hope you are well_ — after the purpose, where it is a courtesy and not a delay.'],
  ['Hala', 'It feels abrupt.'],
  ['Nour', 'It feels abrupt to you. To him it feels like somebody who knows he has forty emails. The kindest thing you can do to a busy person is tell them in the first line whether this one is for them.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Stating your purpose – the first line**',
  table(['Shape', 'Example'], [
    ['**I am writing to** + verb', '**I am writing to ask for** a copy of the March statement.'],
    ['**I am writing about** + noun', '**I am writing about** order 0618.'],
    ['**With reference to** + noun', '**With reference to** your email of 3 May,'],
    ['**Further to** + noun', '**Further to** our telephone call this morning,'],
    ['Courtesy **after** the purpose', 'I hope you are well.'],
  ], [1.7, 2.3]),
  '⚠ **The purpose goes in the first line, after the greeting and nothing else.** Good wishes, context and history all go **after** it, where they are courtesy. Before it, they are a delay the reader pays for.',
  '⚠ _With reference to_ and _further to_ are for replies and follow-ups and they must be followed by **the thing**, not by a feeling: _further to our call this morning, could you…_',
  '⚠ **Include the reference number in the first line** if there is one. _Invoice 0612_ · _account 4471_ · _order 0618_. It is what lets somebody act without opening a file.',
  '⚠ _I hope you are well_ is not forbidden; it is misplaced. One line, after the purpose, and never two.',
  '**Practise:** Write the first line for each. 1 asking for a statement 2 answering a complaint 3 following up a call 4 asking a price 5 chasing something promised a fortnight ago',
  '**Useful phrases:**  I am writing to ask for…  ·  I am writing about…  ·  With reference to your email of…  ·  Further to our call this morning…  ·  for account 4471',
  '**Pronunciation – the first line read aloud.** 🔊 **Track 22.4** Listen to two first lines, one with the purpose and one without. Read your own first line aloud: if it does not say what you want, nothing after it will.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a draft whose purpose is buried; B moves it to the first line. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Read the first three lines. "__________"'],
  ['B', 'And what do you want?'],
  ['A', '__________.'],
  ['B', 'Which is in line __________. He will read __________, decide __________, and come back to it on __________.'],
  ['A', 'So I take out __________?'],
  ['B', 'You move them. __________. Then, if you like, __________ — after the purpose, where it is a courtesy and not a delay.'],
]));
out.push(table(['Role card 1 — chasing a document', 'Role card 2 — answering a complaint'], [[
  'Four lines of history about a loan application before the request, which is for one signed form. The reader is a bank officer with a queue of applications.',
  'Three lines of apology and company background before the thing the customer actually wants, which is a date for the replacement.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the correction for the class – **without the book**.'));
out.push(p('**Listener task:** write the new first line. Then say how many lines of the original it replaced.'));
out.push(PHRASE_CARD(['I am writing to ask for…', 'I am writing about…', 'With reference to…', 'Further to our call…', 'after the purpose, not before', 'whether this one is for them']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Rewrite the first line of **five** real emails — yours or ones you have received. Each new first line: the purpose and the reference number.'));
out.push(table(['The email', 'The old first line', 'The new first line'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1, 1.6, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It began _______. Now it begins _______. That replaced _______ lines._'));
out.push(p('**Listener task:** write down the longest delay before a purpose that anybody found. Four lines is common; seven is not rare.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I am writing for ask_ and _With reference to I hope you are well_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two versions of the same email, and answer the questions.'));
out.push(box(null, [
  '**Before**',
  'Dear Mr Haddad, I hope this email finds you well, and I hope your family are well also. We have been customers of your branch for a number of years now and we have always valued the relationship and the service we receive. I am writing to you today because we have a small matter which we hope you will be able to assist us with. We require a copy of our statement for the month of March for our account.',
  '**After**',
  '**Subject:** Account 4471 — copy of the March statement, needed by 12 May',
  'Dear Mr Haddad,',
  'I am writing to ask for a copy of the March statement for account 4471, in the name of Sham Trading Co.',
  'We need it for the auditor, who is here on 12 May. A PDF by email is enough; we do not need a stamped copy.',
  'I hope you are well — and thank you for the quick answer about the standing order last month.',
  'Thank you. Best regards, Nour Mansour · Sham Trading · 011 ___ ____',
], 'FFFFFF', C.navy));
out.push(item('1', 'In which line of the "Before" version does the purpose appear?'));
out.push(item('2', 'What two pieces of information in the "After" version save the reader a question?'));
out.push(item('3', 'Where have the good wishes gone, and what has been added to them?'));
out.push(box('Writer\'s box', [
  '**A request email — four lines of work and one of warmth:** subject with the thing, the reference and the date → greeting → **purpose, with the reference number** → **why, and what form the answer should take** → the courtesy, with something specific in it → thanks, name, telephone.',
  '**Say what form the answer should take.** _A PDF by email is enough; we do not need a stamped copy._ It removes the most common reason a reply is slow: the reader does not know how much trouble you want them to go to.',
  '**Make the courtesy specific.** _Thank you for the quick answer about the standing order last month._ A general good wish is wallpaper; a particular one is a person.',
  '⚠ Say **why** you need it. Not to justify yourself — to let the reader judge the urgency honestly. _The auditor is here on 12 May_ does more than _urgent_ ever does.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Rewrite a real email of your own in the "After" shape (35 words or more). Use the frame.'));
out.push(p('**Subject:** ______________ — ______________, needed by ______________   Dear ______________,   I am writing to ask for ______________, for ______________.   We need it for ______________, who ______________. ______________ is enough; we do not need ______________.   I hope you are well — and thank you for ______________.   Thank you. ______________ · ______________ · ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says say what form the answer should take. Would a PDF do here, or does it have to be stamped? The reader cannot tell."',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could the reader act without asking anything?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The purpose in the first line, with a reference', ''],
  ['Why it is needed', ''],
  ['What form the answer should take', ''],
  ['A specific courtesy, after the purpose', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their first line and their courtesy line. The class says which email they would answer today.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an email you sent that did what it was supposed to do (60 to 100 words). Say what you wanted, how you opened it, what you said about the deadline, and how fast the answer came.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the line that did the work_   ✓ _purpose in the first line?_   ? _would it work with a stranger?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. What did the fast answers have in common? It is nearly always a reference number and a reason.'));
out.push(box('Homework', ['Write your final text. Then rewrite the first line of three emails sitting in your sent folder, and count the lines each new version replaced (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 22.3 =======================
out.push(pb());
out.push(h2('22.3  Could you possibly send it?'));
out.push(p('**Function:** making a formal request   ·   **Grammar:** _Could you…? · Would you be able to…? · I would be grateful if…_   ·   **Pronunciation:** politeness without pleading'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Ask a colleague for a document, three ways: as you would ask a friend, your manager, and a government office.'));
out.push(p('**b**  Put these in order, least to most formal: _Send me the form. · Can you send the form? · Could you send the form? · I would be grateful if you could send the form._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour change in the request?   **A** she makes it more polite   **B** she makes it more specific   **C** she makes it shorter'));
out.push(p('**b**  Listen again. **1** What is wrong with "I would be grateful if you could possibly assist us in this matter"? **2** What does she say politeness is made of?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.5  Polite is not the same as vague', [
  ['Hala', 'The request line: "I would be grateful if you could possibly assist us in this matter at your earliest convenience."'],
  ['Nour', 'Assist us with what, and by when?'],
  ['Hala', 'The statement. By the twelfth.'],
  ['Nour', 'Then neither of those is in the sentence. It is a very polite sentence that asks for nothing and gives no date.'],
  ['Hala', 'But it is polite.'],
  ['Nour', 'It is polite in the way a locked door is polite. Try: _Could you send a PDF of the March statement for account 4471 by 12 May?_'],
  ['Hala', 'That is almost an instruction.'],
  ['Nour', 'It is a question, it has _could_ in it, and it tells him exactly what will make you happy. Politeness in English is made of **could** and **thank you**, not of length. Long sentences are not polite; they are expensive.'],
  ['Hala', 'And "at your earliest convenience"?'],
  ['Nour', 'Means nothing and is heard as nothing. A date is a courtesy; "at your earliest convenience" is a way of not giving one.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Making a formal request – polite and specific at the same time**',
  table(['Shape', 'Feel'], [
    ['**Could you** + verb?', 'the normal, useful, polite request'],
    ['**Would you be able to** + verb?', 'a little more formal; good with strangers'],
    ['**I would be grateful if you could** + verb', 'formal; keep it for one request, not three'],
    ['**Please** + imperative', 'direct; fine between colleagues, blunt outside'],
    ['**Could you possibly** + verb?', 'for something genuinely inconvenient — not for everything'],
  ], [1.9, 2.1]),
  '⚠ **Politeness is made of _could_ and _thank you_, not of length.** A long sentence is not more polite; it is more expensive to read, and it usually hides the ask.',
  '⚠ **Every request needs the thing and the date in the same sentence as the politeness.** _Could you send a PDF of the March statement for account 4471 by 12 May?_ — polite, specific, answerable.',
  '⚠ **_At your earliest convenience_ means nothing.** It is heard as "no particular date", which is how it will be treated. If you want a date, write a date.',
  '⚠ Save _could you possibly_ for a real imposition. Used on everything, it stops meaning anything, and then you have nothing left for the day you need it.',
  '**Practise:** Make each request specific and polite, with a date. 1 a document 2 a price 3 a visit 4 a correction 5 something you have already asked for twice',
  '**Useful phrases:**  Could you send…?  ·  Would you be able to…?  ·  I would be grateful if you could…  ·  by 12 May  ·  Politeness is made of _could_ and _thank you_.',
  '**Pronunciation – politeness without pleading.** 🔊 **Track 22.6** Listen: _could you send a PDF by the twelfth?_ — level, falling at the end. Said rising and slowly it becomes pleading, which invites delay. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a polite vague request; B makes it specific without making it rude. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The request line: "__________"'],
  ['B', '__________ with what, and by when?'],
  ['A', '__________. By __________.'],
  ['B', 'Then neither of those is in the sentence. It is a very polite sentence that asks for nothing.'],
  ['A', 'But it is polite.'],
  ['B', 'It is polite in the way a locked door is polite. Try: __________'],
  ['A', 'That is almost an instruction.'],
  ['B', 'It is a question, it has _could_ in it, and it tells them exactly what will make you happy.'],
]));
out.push(table(['Role card 1 — a correction', 'Role card 2 — a visit'], [[
  'The polite version: "We would be most grateful if you might be able to look into the matter of the invoice at your convenience." What is wanted: a corrected invoice 3318, by Thursday, by email.',
  'The polite version: "It would be very helpful if somebody could perhaps come and see the machine when possible." What is wanted: an engineer, Tuesday or Wednesday morning, with the limit switch.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the correction for the class – **without the book**.'));
out.push(p('**Listener task:** write the new request. Count the words in both versions; the specific one is nearly always shorter.'));
out.push(PHRASE_CARD(['Could you send…?', 'Would you be able to…?', 'I would be grateful if you could…', 'by 12 May', 'polite in the way a locked door is polite', 'Could you possibly…?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write **five** requests you have to make this month. Each one: _could_, the exact thing, and a date. Then say each aloud to a colleague, who may answer only yes or no.'));
out.push(table(['To whom', 'The request, with the date', 'Could they answer yes or no?'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1, 2.2, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I would write: "Could you _______ by _______?" My partner could answer _______._'));
out.push(p('**Listener task:** write down any request that could not be answered yes or no. That is a request with something missing.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _Could you to send_ and _I would be grateful if you can_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the formal request email, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Account 4471 — certified statement for March, needed by 12 May',
  'Dear Mr Haddad,',
  'I am writing to ask for a certified copy of the March statement for account 4471, in the name of Sham Trading Co.',
  '**What we need:** a stamped and signed copy, on paper. A PDF is not enough this time; the auditor requires the branch stamp.',
  '**When:** by 12 May. The auditor is here on the 13th and the file closes that day.',
  '**Could you confirm by Thursday that this is possible?** If it is not possible by the 12th, please tell me — there is another way of satisfying the auditor and I would rather know now than on the 12th.',
  'If it would help, I can come to the branch and collect it, any morning this week.',
  'Thank you. Best regards, Nour Mansour · Sham Trading · 011 ___ ____',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is asked for in the first line, and what is added under "What we need"?'));
out.push(item('2', 'What is the request that is **not** about the statement?'));
out.push(item('3', 'What does the writer offer, and why does it help?'));
out.push(box('Writer\'s box', [
  '**A formal request — the shape:** purpose with the reference → **what we need**, exactly, including the form → **when**, with the reason → **a request for confirmation**, with its own earlier date → an offer to make it easier → thanks and a telephone number.',
  '**Ask for confirmation separately, and earlier.** _Could you confirm by Thursday that this is possible?_ It converts a silent risk into an answer eight days before it matters.',
  '**Say what you will do if the answer is no.** _There is another way of satisfying the auditor and I would rather know now._ It removes the fear of disappointing you, which is why people go quiet.',
  '⚠ **Offer to make it easier.** _I can come and collect it._ A request that includes an offer is answered faster than one that only asks, and the offer is usually not taken up.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a formal request for something you really need (35 words or more). Use the frame.'));
out.push(p('**Subject:** ______________ — ______________, needed by ______________   Dear ______________,   I am writing to ask for ______________, for ______________.   **What we need:** ______________. ______________ is not enough; ______________.   **When:** by ______________. ______________.   **Could you confirm by ______________ that this is possible?** If it is not possible, ______________.   If it would help, I can ______________.   Thank you. ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says ask for confirmation separately and earlier. What date is the confirmation asked for here, and how much warning does it give you?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could this be answered yes or no in thirty seconds?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_Could you_ with the exact thing', ''],
  ['The form it must take', ''],
  ['A date, with the reason', ''],
  ['A separate, earlier confirmation date', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their confirmation sentence. The class says how many days of warning each one buys.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a request that was never answered (60 to 100 words). Say what you asked for, how you asked, whether there was a date in it, and what you would write now.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what was missing_   ✓ _could / would be able to used correctly?_   ? _did you ever telephone?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many unanswered requests had no date in them? Nearly all of them, every time.'));
out.push(box('Homework', ['Write your final text. Then send one request with _could_, the exact thing, a date, and a separate earlier confirmation date — and write down when the answer came (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 22.4 =======================
out.push(pb());
out.push(h2('22.4  Please let me know by Thursday'));
out.push(p('**Function:** giving a deadline   ·   **Grammar:** _by_ and _before_; _by the end of_; what happens next   ·   **Pronunciation:** saying a date so it cannot be mistaken'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What is the difference between _by Thursday_ and _before Thursday_? Which would you rather be given?'));
out.push(p('**b**  Which deadline works? _as soon as possible · urgently · by Thursday · by 4 p.m. on Thursday 14 May_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why is "as soon as possible" useless?   **A** it is rude   **B** it is not a date   **C** it is too formal'));
out.push(p('**b**  Listen again. **1** What three things does a deadline need? **2** What does Nour say you must never do with a false deadline?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.7  A deadline is a date and a consequence', [
  ['Hala', 'I have put "as soon as possible".'],
  ['Nour', 'Which means nothing. He has eleven things that are as soon as possible and yours will be the eleventh.'],
  ['Hala', 'Then "urgently".'],
  ['Nour', 'Worse. Everybody writes urgent and nobody believes it. A deadline is three things: a **date**, a **time** if the date is tight, and **what happens after it**.'],
  ['Hala', 'What happens after it?'],
  ['Nour', 'By Thursday the twelfth, because the auditor is here on the thirteenth. That is not pressure; it is information. He can now decide honestly whether he can do it.'],
  ['Hala', 'And if I give a date that is not really the date? If I say Thursday when I need it on Sunday?'],
  ['Nour', 'Then you have taught him that your dates are not real, and every date you give him for the rest of your working life is worth less. Ask for the date you need. If you need room, ask for confirmation earlier — that is honest and it does the same work.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Giving a deadline**',
  table(['Shape', 'Example'], [
    ['**by** + a day or date', '**by Thursday** · **by 12 May**'],
    ['**before** + a point', '**before Thursday** (= Wednesday at the latest)'],
    ['**by the end of** + period', '**by the end of the week**'],
    ['With a time, when it is tight', '**by 4 p.m. on Thursday 14 May**'],
    ['The reason — what happens after', 'because the auditor is here **on the 13th**'],
  ], [1.6, 2.4]),
  '⚠ **_By_ includes the day; _before_ does not.** _By Thursday_ means Thursday is fine. _Before Thursday_ means Wednesday. People use them as though they were the same and lose a day.',
  '⚠ **A deadline without a reason is pressure; with a reason it is information.** The reason lets the other person tell you honestly that they cannot — which is the answer you actually need.',
  '⚠ **Never give a false deadline.** It works once. After that every date you give is discounted, including the real ones, and you cannot get that back.',
  '⚠ If you need room, **ask for confirmation earlier**, not for the thing earlier. _Could you confirm by Thursday that the 12th is possible?_',
  '**Practise:** Give each a date, a time if needed, and a reason. 1 a document 2 a decision 3 a delivery 4 a reply 5 something you have already asked for twice',
  '**Useful phrases:**  by Thursday the twelfth  ·  before the end of the week  ·  by 4 p.m.  ·  because the auditor is here on the 13th  ·  Could you confirm by…?',
  '**Pronunciation – a date that cannot be mistaken.** 🔊 **Track 22.8** Listen: _by Thursday the twelfth of May_ — the day name, the date and the month, with small pauses. On the telephone, always all three. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A offers a vague deadline; B turns it into a date with a reason, and refuses the false one. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I have put "__________".'],
  ['B', 'Which means nothing. They have __________ things that are __________.'],
  ['A', 'Then "__________".'],
  ['B', 'Worse. A deadline is three things: a date, a time if it is tight, and what happens after it.'],
  ['A', 'What happens after it?'],
  ['B', 'By __________, because __________. That is not pressure; it is information.'],
  ['A', 'And if I ask for __________ when I need __________?'],
  ['B', 'Then you have taught them that your dates are not real.'],
]));
out.push(table(['Role card 1 — a decision from a manager', 'Role card 2 — a reply from a supplier'], [[
  'A needs a decision about the lorry hire. Real deadline: the depot holds the rate until the 15th. Temptation: ask for the 10th "to be safe".',
  'A needs a price. Real deadline: the quarter order goes in on Friday. Temptation: say "urgent" because the last three emails were ignored.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the reason attached to the deadline. Then say whether you would believe the date.'));
out.push(PHRASE_CARD(['by Thursday the twelfth', 'before the end of the week', 'because the auditor is here', 'That is not pressure; it is information.', 'Ask for the date you need.', 'confirm by Thursday']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** things you are waiting for. For each, write the real deadline, the reason, and the confirmation date you would ask for.'));
out.push(table(['What I am waiting for', 'The real deadline', 'The reason', 'Confirmation by'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.3, 1, 1.5, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I need _______ by _______, because _______. I would ask them to confirm by _______._'));
out.push(p('**Listener task:** write down how many people have ever given a deadline earlier than the real one. Almost everybody, and almost everybody has also been on the receiving end of it.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _until Thursday_ for a deadline and _in Thursday_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the chasing email, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Account 4471 — certified March statement, still needed; can you confirm today?',
  'Dear Mr Haddad,',
  'Further to my email of 2 May and my telephone call on the 6th, I am still waiting for the certified copy of the March statement for account 4471.',
  '**The position.** I asked for it by 12 May. It is now the 9th. The auditor is here on the 13th and the file closes that day.',
  '**What I need from you today**, and it is not the statement: **can it be done by the 12th, yes or no?**',
  '**If yes:** I will say nothing further and collect it on the 12th.',
  '**If no:** tell me today and I will use the alternative — an electronic statement with a letter from you confirming it is complete. That is acceptable to the auditor, I have checked, and it takes you ten minutes rather than two days.',
  'I am not chasing the statement. I am chasing the answer, because the answer is what lets me plan.',
  'Thank you. Best regards, Nour Mansour · 011 ___ ____',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is being chased, and what is not?'));
out.push(item('2', 'What does the writer do about the "no" case before it happens?'));
out.push(item('3', 'Why does it say how long the alternative would take him?'));
out.push(box('Writer\'s box', [
  '**A chasing email — five parts:** _further to_ with the two previous contacts and their dates → **the position**, in two lines of dates → **what I need today**, which is the **answer** and not the thing → **if yes / if no**, with the alternative worked out → and one line saying what you are really chasing.',
  '**Chase the answer, not the thing.** The thing may be impossible; the answer never is. Once you have it, you can plan — and that is what you actually needed all along.',
  '**Do the "no" work in advance.** _I have checked, and it takes you ten minutes rather than two days._ A reader who can see that the alternative is cheap for them says no quickly instead of going silent.',
  '⚠ Give the dates of the earlier contacts. _My email of 2 May and my call on the 6th._ It is not an accusation; it is what stops a fourth email being needed.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a chasing email for something you are waiting for (35 words or more). Use the frame.'));
out.push(p('**Subject:** ______________ — still needed; can you confirm ______________?   Dear ______________,   Further to ______________ and ______________, I am still waiting for ______________.   **The position.** I asked for it by ______________. It is now ______________. ______________.   **What I need from you today**, and it is not ______________: **______________, yes or no?**   **If yes:** ______________.   **If no:** tell me today and I will ______________. ______________.   I am not chasing ______________. I am chasing ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says do the \'no\' work in advance. What is the alternative here, and does the reader know how much trouble it is for them?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **can the reader reply with one word?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The earlier contacts, with dates', ''],
  ['The answer asked for, not the thing', ''],
  ['An "if no" with a worked-out alternative', ''],
  ['One line saying what is really being chased', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "if no". The class says which alternative they would take if they were the reader.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you have been waiting for for a long time (60 to 100 words). Say how many times you have asked, what deadline you gave, whether you ever asked for a yes or no, and what you would do now.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the alternative they could offer_   ✓ _by / before used correctly?_   ? _have they ever been asked for a yes or no?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many has nobody ever been asked for a simple yes or no? That is the sentence this cycle exists to produce.'));
out.push(box('Homework', ['Write your final text. Then send one email that asks only for a yes or a no, with the alternative worked out, and write down how quickly it was answered (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 22.5 =======================
out.push(pb());
out.push(h2('22.5  Thank you in advance, Best regards'));
out.push(p('**Function:** closing an email   ·   **Grammar:** the four closings and what each one means   ·   **Pronunciation:** the signature block read aloud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How do you close an email to a colleague? To a bank? Do you have more than one way?'));
out.push(p('**b**  Which of these do you know the rule for? _Yours sincerely · Yours faithfully · Best regards · Kind regards · Regards_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which closing goes with "Dear Sir or Madam"?   **A** Yours sincerely   **B** Yours faithfully   **C** Best regards'));
out.push(p('**b**  Listen again. **1** What does Nour say about "Thank you in advance"? **2** What must a signature block contain?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.9  The last four lines', [
  ['Hala', 'I never know how to end. I have written "Thank you in advance".'],
  ['Nour', 'Which means: I am thanking you now so that I do not have to thank you later, and also I am assuming you will say yes.'],
  ['Hala', 'Everybody writes it.'],
  ['Nour', 'Everybody does, and plenty of English readers dislike it. _Thank you_ on its own is better and shorter. Thank them again when they have done it — that one is worth something.'],
  ['Hala', 'And the closing?'],
  ['Nour', 'Two old rules that still hold in a letter: _Dear Mr Haddad_ ends _Yours sincerely_; _Dear Sir or Madam_ ends _Yours faithfully_. Name, sincerely. No name, faithfully.'],
  ['Hala', 'And in an email?'],
  ['Nour', '**Best regards** is right for almost every email you will ever write, to anybody. Then your name, your company, and a telephone number. An email without a telephone number costs somebody a second email to ask for one.'],
  ['Hala', 'Mine just says "Hala".'],
  ['Nour', 'Then half your readers do not know which company you are, and one of them has two suppliers called Hala.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Closing – and the four lines after it**',
  table(['Closing', 'When'], [
    ['**Best regards,**', 'almost every email, to anybody — the safe default'],
    ['**Kind regards,**', 'slightly warmer; somebody you deal with often'],
    ['**Yours sincerely,**', 'a letter opened with a **name**'],
    ['**Yours faithfully,**', 'a letter opened with **Dear Sir or Madam**'],
    ['**Regards,** / nothing', 'a colleague, a third email in one day'],
  ], [1.4, 2.6]),
  '**The signature block — four lines, every time:**  your **name** · your **position**, if the reader may not know you · your **company** · a **telephone number** that is answered.',
  '⚠ **Name, sincerely. No name, faithfully.** It is the one old rule worth keeping, and English readers notice when it is wrong.',
  '⚠ **_Thank you in advance_ assumes the answer is yes.** Many readers find it presumptuous. _Thank you_ is shorter and safe; the real thanks comes afterwards, when they have done it.',
  '⚠ **An email with no telephone number costs a second email.** Put it in the block, not in the text, and make it the number that is actually answered.',
  '**Practise:** Choose the opening and the closing together for each. 1 a bank, no name 2 a bank, with a name 3 a supplier of eleven years 4 a colleague 5 a customer complaining',
  '**Useful phrases:**  Best regards,  ·  Kind regards,  ·  Yours sincerely,  ·  Yours faithfully,  ·  Thank you.  ·  a number that is answered',
  '**Pronunciation – the signature block read aloud.** 🔊 **Track 22.10** Listen to a block read aloud: name, position, company, number — four short falls. Read your own aloud; if it takes more than five seconds it is too long.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has an ending; B fixes the closing and builds the signature block. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I never know how to end. I have written "__________".'],
  ['B', 'Which means: __________.'],
  ['A', 'Everybody writes it.'],
  ['B', 'Everybody does. __________ is better and shorter.'],
  ['A', 'And the closing?'],
  ['B', '__________ ends __________; __________ ends __________. Name, sincerely. No name, faithfully.'],
  ['A', 'And my name?'],
  ['B', 'Name, position, company, and a telephone number that is answered.'],
]));
out.push(table(['Role card 1 — a one-word signature', 'Role card 2 — a block that is too long'], [[
  'The email ends "Thanks! Hala". It is going to a bank. There is no company name, no number, and no closing.',
  'The block has seven lines including a quotation about teamwork, two email addresses and a fax number that no longer exists.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the correction for the class – **without the book**.'));
out.push(p('**Listener task:** write the finished signature block. Count the lines; four is right.'));
out.push(PHRASE_CARD(['Best regards,', 'Kind regards,', 'Yours sincerely,', 'Yours faithfully,', 'Thank you.', 'a number that is answered']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write your own signature block in four lines. Then write the closing you would use for **five** different readers, with the opening that goes with it.'));
out.push(table(['Reader', 'Opening', 'Closing'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.4, 1.4, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _For _______ I would open _______ and close _______. My block is: _______._'));
out.push(p('**Listener task:** write down how many blocks in the room have a telephone number in them. Then ask how many of those numbers are answered.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _Yours sincerely_ after _Dear Sir or Madam_ and _Best regard_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the second page of the office guide, and answer the questions.'));
out.push(box(null, [
  '**HOW WE CLOSE — and the four lines under it**',
  '**Best regards,** — use it unless there is a reason not to. It is right for a bank, a customer, a supplier and a stranger.',
  '**Kind regards,** — somebody we deal with weekly and like.',
  '**Yours sincerely,** — a printed letter opened with a name. **Yours faithfully,** — a printed letter opened _Dear Sir or Madam_. We write about four printed letters a year and we get this wrong on two of them.',
  '**Regards,** or nothing — the third email to a colleague on the same day.',
  '**The block, four lines, no more:** Name · Position · Sham Trading Co., Mezzeh, Damascus · a telephone number that is answered. No quotations, no fax number, no second email address.',
  '⚠ **"Thank you in advance" is not used here.** Say _thank you_, and then thank them properly when they have done it. The second thank-you is the one that is remembered.',
  '⚠ **The telephone number is the point of the block.** Last year four emails came back asking only for a number. That is four emails, two days and somebody\'s patience, for a line we already had.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many printed letters a year does the company write, and why is that mentioned?'));
out.push(item('2', 'What is forbidden in the signature block?'));
out.push(item('3', 'What evidence is given for the telephone number rule?'));
out.push(box('Writer\'s box', [
  '**A closing page — one line per closing, then the block, then two warnings with evidence.**',
  '**Admit where you get it wrong.** _We write about four printed letters a year and we get this wrong on two of them._ A style guide that confesses is read; one that instructs is filed.',
  '**Four lines in the block, and say what is not allowed.** Quotations, old fax numbers and second addresses all cost the reader time and tell them nothing.',
  '⚠ Put the evidence next to the rule — _four emails came back asking only for a number_. It is the difference between a rule people follow and a rule people resent.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the closing page for your own workplace (35 words or more). Use the frame.'));
out.push(p('**HOW WE CLOSE**   **______________,** — use it unless ______________.   **______________,** — ______________.   **______________,** — ______________. **______________,** — ______________.   **The block, ______________ lines:** ______________ · ______________ · ______________ · ______________.   ⚠ **______________ is not used here.** ______________.   ⚠ ______________. Last year ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says put the evidence next to the rule. What happened at your workplace that makes the telephone-number rule worth having?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would somebody follow this page, or resent it?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A default closing, with permission to vary', ''],
  ['Sincerely / faithfully explained', ''],
  ['A four-line block, with what is not allowed', ''],
  ['Evidence next to at least one rule', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their warnings. The class says which workplace they would rather write for.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the way people sign off at your workplace (60 to 100 words). Say what the commonest ending is, what it says about the place, and what one line you would add to everybody\'s block.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the line they would add_   ✓ _sincerely / faithfully correct?_   ? _who would have to agree?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many workplaces does everybody sign off differently? That is normal, and it is one short page away from not being.'));
out.push(box('Homework', ['Write your final text. Then fix your own signature block to four lines with a number that is answered, and count how many emails in your sent folder had no number at all (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 22.6 =======================
out.push(pb());
out.push(h2('22.6  The same message, two ways'));
out.push(p('**Function:** choosing the register   ·   **Grammar:** formal and friendly versions of the same content   ·   **Pronunciation:** hearing the distance in a sentence'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the same thing three ways: to Abu Yasser, to a customer, to a bank — "I need the figures by Thursday."'));
out.push(p('**b**  What changes between the three? Make a list: words, length, what is explained, what is assumed.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the same in both versions?   **A** the length   **B** the facts and the date   **C** the opening'));
out.push(p('**b**  Listen again. **1** What does the formal version explain that the friendly one does not? **2** What does Nour say you must never change between versions?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.11  Two readers, one message', [
  ['Nour', 'The same message goes to Abu Yasser and to the bank. Write both.'],
  ['Hala', 'To Abu Yasser: "Abu Yasser — I need the March stock figures by Thursday for the auditor. Paper is fine."'],
  ['Nour', 'Good. Short, no explanation, because he knows what an auditor is and he knows you.'],
  ['Hala', 'To the bank: "Dear Mr Haddad, I am writing to ask for a certified copy of the March statement for account 4471. We need it for our auditor, who is here on 13 May; the branch stamp is required. Could you confirm by Thursday that 12 May is possible?"'],
  ['Nour', 'That is the same message. Longer, because he does not know you, does not know the account, and cannot guess what form you need.'],
  ['Hala', 'So formal means longer.'],
  ['Nour', 'Formal means **more explained**, which is usually longer. It does not mean more words about nothing. And one thing never changes between the two versions: the facts and the date. If Abu Yasser gets Thursday and the bank gets Sunday, you have two stories and one of them will be quoted back at you.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The same message, two registers**',
  table(['What changes', 'What does not'], [
    ['the opening: _Abu Yasser,_ / _Dear Mr Haddad,_', '**the facts**'],
    ['how much is explained', '**the date**'],
    ['_I need_ / _Could you_', '**the reference number**'],
    ['the length', '**what you will do if the answer is no**'],
    ['the closing and the block', '**the truth**'],
  ], [2.2, 1.8]),
  '⚠ **Formal means more explained, not more words.** Everything the reader cannot be assumed to know goes in: who you are, which account, what form, why. Nothing else.',
  '⚠ **The facts and the date never change between versions.** Two versions of a message are a translation, not two stories. The day somebody compares them is the day you lose the argument.',
  '⚠ Inside the company you may give an instruction: _I need the figures by Thursday._ Outside it, the same content becomes a question: _could you send…?_ The content is identical and the shape is not.',
  '**Practise:** Write both versions of each. 1 a deadline 2 a complaint 3 a thank-you 4 a refusal 5 bad news',
  '**Useful phrases:**  Paper is fine.  ·  the branch stamp is required  ·  Could you confirm by…?  ·  more explained, not more words  ·  two stories, and one will be quoted back',
  '**Pronunciation – hearing the distance.** 🔊 **Track 22.12** Listen to the same sentence said to a colleague and to a stranger. The words change little; the speed and the pauses change a great deal. Repeat both.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A writes the friendly version; B writes the formal one; both check that the facts and the date are identical. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The same message goes to __________ and to __________. Write both.'],
  ['B', 'To __________: "__________"'],
  ['A', 'Good. Short, no explanation, because __________.'],
  ['B', 'To __________: "__________"'],
  ['A', 'That is the same message. Longer, because __________.'],
  ['B', 'So formal means longer.'],
  ['A', 'Formal means more explained. And one thing never changes: __________.'],
]));
out.push(table(['Role card 1 — bad news', 'Role card 2 — a refusal'], [[
  'A delivery will be two days late. One version to the warehouse, one to the customer. Same new date in both, same reason.',
  'You cannot do a job by Friday. One version to a colleague who asked, one to a customer who asked. Same alternative date in both.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs read both versions for the class – **without the book**.'));
out.push(p('**Listener task:** check that the facts and the date match. Then write what the formal version explained that the friendly one did not.'));
out.push(PHRASE_CARD(['Paper is fine.', 'the stamp is required', 'Could you confirm…?', 'more explained, not more words', 'the facts never change', 'two stories']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** real messages. Write each one twice — for a colleague and for an outsider. Then have a partner check that nothing but the register changed.'));
out.push(table(['The message', 'To a colleague', 'To an outsider', 'What changed'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.4, 1.6, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _To _______ I wrote _______. To _______ I wrote _______. What changed was _______; what did not was _______._'));
out.push(p('**Listener task:** write down any pair where a fact or a date changed between the versions. Say which version you would be quoting back.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for a formal opening with an instruction, and _Dear Abu Yasser_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the same message written two ways, and answer the questions.'));
out.push(box(null, [
  '**To the warehouse**',
  '**Subject:** March stock figures — need them Thursday for the auditor',
  'Abu Yasser — I need the March stock figures by Thursday the 12th. The auditor is here on the 13th. Paper is fine; I will type them. If Thursday is not possible, tell me tomorrow and I will come and count with you on Wednesday. — Nour',
  '**To the bank**',
  '**Subject:** Account 4471 — certified March statement, needed by 12 May',
  'Dear Mr Haddad,',
  'I am writing to ask for a certified copy of the March statement for account 4471, in the name of Sham Trading Co.',
  'We need it for our auditor, who is here on 13 May. The auditor requires the branch stamp, so a PDF is not enough this time.',
  'Could you confirm by Thursday 8 May that 12 May is possible? If it is not, please tell me then — there is an alternative that the auditor will accept, and it takes ten minutes rather than two days.',
  'Thank you. Best regards, Nour Mansour · Administration · Sham Trading Co., Mezzeh · 011 ___ ____',
], 'FFFFFF', C.navy));
out.push(item('1', 'List everything that is the same in both messages.'));
out.push(item('2', 'List everything the bank version explains that the warehouse version does not.'));
out.push(item('3', 'Both versions contain an "if no". How do they differ?'));
out.push(box('Writer\'s box', [
  '**Writing the same message twice — the method:** write the **facts, the date and the "if no"** first, in a list. Then write each version around that list, changing only the opening, the amount explained, the request form and the closing.',
  'Writing the list first is what keeps the two versions honest. Most people write the friendly one and then dress it up, and in the dressing up a date moves.',
  '**Both versions carry an "if no".** To a colleague it is an offer of help; to a bank it is an alternative that is cheap for them. Same purpose, different shape.',
  '⚠ Inside the company: an instruction, a first name, no signature block. Outside: a question, a title, the full block. Neither is more polite than the other; they are aimed at different distances.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write one real message in both registers (35 words or more). Use the frame.'));
out.push(p('**The facts:** ______________. **The date:** ______________. **If no:** ______________.   **To a colleague** — Subject: ______________   ______________ — I need ______________ by ______________. ______________. If ______________, ______________. — ______________   **To an outsider** — Subject: ______________   Dear ______________, I am writing to ask for ______________. We need it for ______________. Could you confirm by ______________? If it is not possible, ______________.   Thank you. ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says the facts and the date never change. Do the two versions here carry the same date, and the same \'if no\'?"',
  'Quote, question, stop. Where they differ, the writer nearly always did not notice.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **if both readers compared these, would anything embarrass the writer?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The same facts in both', ''],
  ['The same date in both', ''],
  ['An "if no" in both', ''],
  ['Only the register changed', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read both of their versions. The class listens only for differences in fact or date.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time two versions of the same thing did not match (60 to 100 words). It can be at work or not. Say what differed, who noticed, and what it cost.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what differed_   ✓ _was it register or fact?_   ? _was it deliberate?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many differences were deliberate, and how many were carelessness? The second kind is commoner and more damaging.'));
out.push(box('Homework', ['Write your final text. Then take one message you sent to two people this month and check whether the facts and dates matched (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 22.7 =======================
out.push(pb());
out.push(h2('22.7  Review & Mediate: two emails compared'));
out.push(p('**Function:** telling a colleague what two emails are really doing   ·   **Review:** openings · purpose · requests · deadlines · closings · register'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 22 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What is wrong with _Dear Mr Samir_?',
  '**2** Where does _I hope you are well_ belong?',
  '**3** What is wrong with _at your earliest convenience_?',
  '**4** _By Thursday_ or _before Thursday_ — which includes Thursday?',
  '**5** Name, sincerely. No name, ______.',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which email will be answered first?   **A** the long polite one   **B** the short specific one   **C** neither'));
out.push(p('**b**  Listen again. **1** What does the long email never do? **2** What does Nour say about the word "urgent" in the subject line?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.13  "Which one would you answer?"', [
  ['Fadi', 'Two emails came for the same thing. One is long and very polite and one is four lines. The long one must be the better one.'],
  ['Nour', 'Read me the last line of the long one.'],
  ['Fadi', '"We look forward to your kind cooperation in this matter."'],
  ['Nour', 'And what does it want?'],
  ['Fadi', '…It does not say. It says the matter is important and that they hope for cooperation.'],
  ['Nour', 'So you cannot answer it. You would have to write back and ask what they want, which is a day gone, and most people do not write back; they put it in the pile. Read the short one.'],
  ['Fadi', '"Could you confirm by Thursday whether the 12th is possible? If not, tell me and I will use the alternative."'],
  ['Nour', 'That one can be answered in one word while standing up. Which would you answer first?'],
  ['Fadi', 'The short one. But the long one has "URGENT" in the subject.'],
  ['Nour', 'Everybody writes urgent. The word that makes something urgent is a date, and the long one does not have one anywhere.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – two emails, and which one gets answered**',
  table(['To test an email', 'To find the ask', 'To rank them'], [
    ['Read me the last line.', 'And what does it want?', 'Which can be answered while standing up?'],
    ['Could you answer this in one word?', 'It does not say.', 'The word that makes something urgent is a **date**.'],
  ], [1.8, 1.7, 2]),
  '⚠ **The test of an email is whether it can be answered.** Not whether it is polite, not whether it is long. An email that cannot be answered without a second email has failed, however courteous it is.',
  '⚠ **Look for the ask and the date.** If either is missing, the email will be read, admired, and put in the pile — which is the fate of most very polite correspondence.',
  '⚠ **_Urgent_ in a subject line is noise.** Everybody writes it, so it carries nothing. A date carries everything: _by Thursday 12 May_ is urgent in a way that _URGENT_ is not.',
  '⚠ When a colleague brings you two emails, do not say which is politer. Ask them which they could answer standing up, and let them notice.',
  '**Practise:** You have two emails about the same thing — one long and polite with no date, one short with a date and an "if no". Explain to a colleague which will be answered and why.',
  '**Useful phrases:**  Read me the last line.  ·  And what does it want?  ·  answered in one word while standing up  ·  The word that makes something urgent is a date.  ·  it goes in the pile',
  '**Pronunciation – reading a vague sentence aloud.** 🔊 **Track 22.14** Listen: _we look forward to your kind cooperation in this matter._ Read it aloud and ask what you are supposed to do. Reading a sentence aloud is the fastest test of whether it contains anything.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has two emails; B believes the long one is better. A finds the ask in each, or shows there is none. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  '**Long:** _Dear Sir or Madam, We are writing with regard to the ongoing matter of the supply agreement which has been under discussion, and would be most grateful for your kind attention to this important matter at your earliest convenience. We look forward to hearing from you._  **Short:** _Dear Mr Nassar, Could you confirm by Thursday 8 May whether you can supply 300 units a quarter at the price we discussed? If not, I will go back to the alternative supplier and there is no difficulty. Thank you._',
  '**Long:** _Dear valued customer, We would like to take this opportunity to thank you for your continued custom and to inform you that certain changes may be implemented in due course which may affect your account._  **Short:** _Dear Mr Haffar, From 1 June the minimum order is 50 boxes, up from 30. Your last six orders have all been over 80, so this does not affect you. If you ever need fewer than 50, telephone me and we will deal with it. Thank you._',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their comparison for the class – **without the book**.'));
out.push(p('**Listener task:** write what each long email wanted. Where it wanted nothing, write that — it is the finding.'));
out.push(PHRASE_CARD(['Read me the last line.', 'And what does it want?', 'answered while standing up', 'urgent is noise', 'a date carries everything', 'it goes in the pile']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you two emails about the same subject. Read them silently. Then explain to **two** colleagues which will be answered first and why, without using the word "polite".'));
out.push(table(['Who I told', 'Which they thought was better', 'Which can be answered, and why'], [['', '', ''], ['', '', '']], [1, 1.6, 2]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the two emails. This is the **tenth** unit of Book 2, and the unwritten thing is the one this whole unit has been circling: an email is judged by whether it can be answered, and nothing on the page says so.'));
out.push(p('_One was ______ and one was ______. The first wanted ______. The second could be answered ______. The one that will be answered first is ______._'));
out.push(p('**Listener task:** add to the Book 2 office-word list: _with reference to · further to · at your earliest convenience · kindly · acknowledgement · on behalf of_.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short workplace texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _Dear Sir or Madam,_   **A** The writer knows the name. **B** The writer does not know the name. **C** The reader is a man.',
  '**2**  _I am writing to ask for a copy of invoice 0612._   **A** The purpose is clear in the first line. **B** The writer is complaining. **C** The invoice is attached.',
  '**3**  _Please let me know by Thursday._   **A** Thursday is too late. **B** Thursday is the last day. **C** Reply on Friday.',
  '**4**  _Please reply before Thursday._   **A** Wednesday at the latest. **B** Thursday is fine. **C** Any time that week.',
  '**5**  _Yours faithfully,_   **A** The letter began with a name. **B** The letter began "Dear Sir or Madam". **C** It is an email to a colleague.',
  '**6**  _We look forward to your kind cooperation in this matter._   **A** A clear request. **B** A deadline. **C** A sentence that asks for nothing.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more),** three points, all three present.',
  'For a request, the three points are nearly always: **what you want** · **why** · **by when**.',
  '⚠ In twenty-five words, use _could you_ and a date. There is no room for _at your earliest convenience_ and no reason for it anywhere.',
  '⚠ One courtesy only: _thank you_ at the end. Opening good wishes cost you a third of your words.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task.** You need something from another company. Write a short email (25 words or more). Say **what you want**, **why**, and **by when**.'));
out.push(p('Dear ______________, I am writing to ask for ______________. We need it for ______________. Could you send it by ______________? Thank you. ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The purpose in the first line', ''],
  ['A reason', ''],
  ['A date', ''],
  ['25 words or more', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the email you have been putting off (60 to 100 words). Open it properly, say the purpose in the first line, make the request with a date, and close it. Then decide whether to send it.'));
out.push(...lines(6));
out.push(box('Homework', ['Write your final text — and send it. Then write three lines about what happened, or about why you did not send it (35+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 22 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  ___ Haddad, — with the family name.   a) Dear Mr   b) Dear Mr Samir   c) Dear Sir',
  '2  I am writing ___ ask for a copy.   a) for   b) to   c) that',
  '3  ___ to your email of 3 May,   a) With reference   b) With referring   c) In reference of',
  '4  ___ you send it by Thursday?   a) Could   b) Would to   c) May you',
  '5  Please reply ___ Thursday — Thursday is the last day.   a) before   b) by   c) until',
  '6  Dear Sir or Madam, … Yours ___ ,   a) sincerely   b) faithfully   c) truly',
  '7  Thank you ___ advance.   a) on   b) in   c) by',
  '8  I would be grateful ___ you could send it.   a) that   b) if   c) when',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 22.15** Listen to an email read aloud. Complete the note.   Opening used: ______   Purpose: ______   Form required: ______   Deadline: ______   Confirmation asked by: ______'));
out.push(dlg('Track 22.15  Audio script (read after the check)', [
  ['Nour', 'Dear Mr Haddad. I am writing to ask for a certified copy of the March statement for account 4471, in the name of Sham Trading.'],
  ['Nour', 'We need it for our auditor, who is here on the thirteenth of May. He requires the branch stamp, so a PDF is not enough this time.'],
  ['Nour', 'Could you confirm by Thursday the eighth that the twelfth is possible? If it is not, please tell me then. Thank you. Best regards, Nour Mansour.'],
]));
out.push(p('**C  Writing.** Write a formal request (35+ words): the purpose in the first line with a reference, what form the answer must take, a date with its reason, and a confirmation date.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 22)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ open an email to anybody, and put Mr and Ms with the family name',
  '☐ put the purpose in the first line, with the reference number',
  '☐ put the good wishes after the purpose, and make them specific',
  '☐ make a request that is polite **and** answerable yes or no',
  '☐ give a deadline with a date and a reason, and never a false one',
  '☐ ask for a confirmation earlier than the thing itself',
  '☐ close correctly, with a four-line block and a number that is answered',
  '☐ write the same message twice without changing a fact or a date',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 22 · Student\'s Book');
