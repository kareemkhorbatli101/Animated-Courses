// Proactive Business English A2 · Syria Edition · Book 2 · Unit 13 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'experience · CV · applicant · candidate · interview · vacancy · qualification · degree · diploma · certificate · skill · fluent · reference · referee · employer · employment · trial period · contract · full-time · part-time · salary · notice period · covering letter · apply for · shortlist · appoint';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 13  Experience and the CV'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**13.1**  say how long you have done something',
  '**13.2**  ask and answer about experience',
  '**13.3**  say what is done already, and what is not done yet',
  '**13.4**  tell the difference between finished time and time that is still going',
  '**13.5**  describe your skills without exaggerating and without hiding',
  '**13.6**  answer "tell me about yourself" in sixty seconds',
  '**13.7**  Review & Mediate: tell a colleague what a job advertisement asks for',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Book 2 starts here — and one thing has changed', [
  'A year has passed at Sham Trading. Nour is not the new assistant any more; **Hala Mourad** is the new one, in customer service, and in this unit she is still a name on a piece of paper.',
  'Book 1 was about the day: the telephone, the order, the delivery, the price. **Book 2 is about the year** — what has happened, what is going to happen, what has changed, and what you would say about your own work if somebody asked you to describe it.',
  'Three things step up. You write **35 words or more** where you wrote 25, and **60 to 100** where you wrote 35. The peer-review slip asks you to **name the criterion**, not just the fix. And the mediation task in every cycle 7 now has something in it that the document does not say outright.',
], C.lyellow, C.orange));

// ======================= CYCLE 13.1 =======================
out.push(pb());
out.push(h2('13.1  I have worked here for eleven years'));
out.push(p('**Function:** saying how long   ·   **Grammar:** present perfect with _for_ and _since_   ·   **Pronunciation:** the weak _have_ and the contraction'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How long have you been in your job? Say the number of years or months aloud. Now say it in English without counting first.'));
out.push(p('**b**  _for_ or _since_? _______ 2019 · _______ eleven years · _______ March · _______ six months · _______ I left school'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who has been at Sham Trading the longest?   **A** Nadia   **B** Abu Yasser   **C** Mr Ayoub'));
out.push(p('**b**  Listen again. **1** How long has Nadia worked there? **2** What does Abu Yasser say about the word _experience_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.1  Filling in the form', [
  ['Nour', 'Nadia, the bank form wants the years. How long have you worked here?'],
  ['Nadia', 'Eleven years. Since 2015 — no, since March 2015, so eleven in the spring.'],
  ['Nour', 'Eleven years. And Abu Yasser?'],
  ['Abu Yasser', 'Here, nineteen. In the trade, thirty-one.'],
  ['Nour', 'Thirty-one years. I have worked here for one.'],
  ['Abu Yasser', 'You have worked here for one year and you have learned the thing that takes most people five. Experience is not the number on the form, Nour. The form cannot see the difference between a man who has done one year thirty-one times and a man who has done thirty-one years.'],
  ['Nadia', 'And which are you?'],
  ['Abu Yasser', 'Ask the shelf.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the present perfect for something that is still true**',
  table(['Form', 'Example'], [
    ['**have / has** + past participle', 'I **have worked** here for one year. She **has worked** here for eleven.'],
    ['**for** + a length of time', '**for** eleven years · **for** six months · **for** a long time'],
    ['**since** + a point in time', '**since** 2015 · **since** March · **since** I left school'],
    ['Question: **How long have you…?**', '**How long have you worked** here?'],
    ['Negative', 'I **haven\'t worked** anywhere else.'],
  ], [1.5, 2.2]),
  '⚠ This tense says the job **has not finished**. _I have worked here for eleven years_ means she is still here. _I worked there for eleven years_ means she has left. That one letter of difference is the whole of 13.4.',
  '⚠ Arabic and English divide time differently here, and the commonest A2 mistake is ~~I am working here since 2015~~ or ~~I work here from eleven years~~. Learn the two shapes as chunks: **for** + length, **since** + point.',
  '**Practise:** Say each one twice — once with _for_, once with _since_.',
  '1 your job  2 your town  3 your telephone number  4 this company  5 English',
  '**Useful phrases:**  How long have you…?  ·  for eleven years  ·  since March  ·  I haven\'t worked anywhere else.  ·  Ask the shelf.',
  '**Pronunciation – the weak _have_.** 🔊 **Track 13.2** Listen: _How long have you worked here?_ — _have_ almost disappears: /həv/, sometimes only /v/. And the answer contracts: _I\'ve worked here for a year._ Repeat the pair four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A fills in a form and asks; B answers with **both** _for_ and _since_. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________, the form wants the years. How long have you __________?'],
  ['B', '__________ years. Since __________ — no, since __________, so __________.'],
  ['A', '__________ years. And __________?'],
  ['B', 'Here, __________. In the trade, __________.'],
  ['A', 'I have __________ for __________.'],
  ['B', 'You have __________ for __________ and you have __________.'],
]));
out.push(table(['Role card 1 — the staff list', 'Role card 2 — the bank form'], [[
  'You are completing a staff list for head office. You need: years in the company, years in the trade, and the month they started. Three colleagues, three different answers.',
  'You are completing a bank form for a loan. The bank wants the length of employment and the start date — and it will not accept "a long time".',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write down every _for_ and every _since_ you hear. Was each one right?'));
out.push(PHRASE_CARD(['How long have you…?', 'for eleven years', 'since March', 'in the trade', 'I haven\'t worked anywhere else.', 'so eleven in the spring']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Ask **three** colleagues how long they have done three different things — the job, the journey to work, the city. Write their answers with _for_ **and** with _since_.'));
out.push(table(['Who', 'What', 'for…', 'since…'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.4, 1.2, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ has _______ for _______ — since _______. The longest in this room is _______._'));
out.push(p('**Listener task:** add up the years in the room. Say the total aloud. That number is the class\'s experience and it is usually a surprise.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _since eleven years_ and _I am working here since_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the top of Nadia\'s CV, and answer the questions.'));
out.push(box(null, [
  '**NADIA SAYEGH**  ·  Accountant  ·  Mezzeh, Damascus  ·  011 ___ ____  ·  nadia.sayegh@shamtrading.sy',
  '**Profile**',
  'Accountant with eleven years in import and distribution. I have worked at Sham Trading since March 2015, where I am responsible for invoicing, payments and the monthly figures for a company of nineteen staff. Before that I worked for three years at a construction supplier in Homs.',
  'I have handled the accounts through two system changes and one move of premises without a month being closed late. I speak Arabic and English, and I have taught the invoicing system to four colleagues.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which two sentences use the present perfect, and why?'));
out.push(item('2', 'Which sentence uses the past simple, and why?'));
out.push(item('3', 'Find the sentence that proves she is good at her job without saying "I am good at my job".'));
out.push(box('Writer\'s box', [
  '**The profile at the top of a CV — four sentences, in this order:** what you are and how long → where you are now and what you are responsible for → where you were before → **one sentence of evidence** that nobody else could write.',
  'Use the **present perfect** for the job you still have (_I have worked at ___ since ___ _) and the **past simple** for the job you left (_I worked for three years at ___ _).',
  'The evidence sentence is the only one a reader remembers. _Through two system changes and one move of premises without a month being closed late_ is evidence. _Hard-working and reliable_ is not — everybody writes it, so it says nothing.',
  '⚠ Numbers do the work: eleven years · nineteen staff · four colleagues · three years. A profile with no numbers in it reads as a profile with nothing to report.',
  '⚠ **Length: four sentences.** A profile that runs to ten is a page nobody reads to the end of.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the profile at the top of your own CV (35 words or more). Use the frame.'));
out.push(p('**______________** · ______________ · ______________ · ______________   **Profile**   ______________ with ______________ years in ______________. I have worked at ______________ since ______________, where I am responsible for ______________. Before that I worked for ______________ at ______________. I have ______________ without ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('How to give good feedback — Book 2, band 3: name the criterion', [
  '**Band 1 and 2 (Book 1):** be kind, be clear, point to one thing to fix.',
  '**Band 3 (from this unit on):** point to the thing to fix **and name the criterion from the Writer\'s box that it comes from.**',
  '**Not yet band 3:** "Add a number."   **Band 3:** "The Writer\'s box asks for one sentence of evidence that nobody else could write — yours could have been written by anybody in this room. Which number would fix that?"',
  'Naming the criterion does two things: it tells the writer where to look, and it makes you read the box again.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could this profile have been written by somebody else in this room?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Present perfect for the job they still have', ''],
  ['Past simple for the job they left', ''],
  ['At least two numbers', ''],
  ['One sentence of evidence nobody else could write', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their evidence sentence only. The class says which one could not have been written by anybody else.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the longest thing you have done — a job, a journey, a habit, a friendship (60 to 100 words). Say how long, since when, what has changed in that time, and what has not.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the line I would keep_   ✓ _for / since used correctly?_   ? _a question about the time that has passed_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts aloud. Which was the longest thing in the room, and which was the most surprising? They are rarely the same one.'));
out.push(box('Homework', ['Write your final text. Then ask one person outside the class how long they have done their work, and write their answer in English with **both** _for_ and _since_ (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 13.2 =======================
out.push(pb());
out.push(h2('13.2  Have you ever used this system?'));
out.push(p('**Function:** asking about experience   ·   **Grammar:** _ever_ and _never_ with the present perfect   ·   **Pronunciation:** the question that is not an accusation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Which of these have you done at work? _used an accounts system · trained somebody · taken a complaint · signed for a delivery · spoken English on the telephone_'));
out.push(p('**b**  Make one question with _ever_ and one answer with _never_. Say both aloud.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Mr Ayoub deciding?   **A** who to interview   **B** which system to buy   **C** who to send to Homs'));
out.push(p('**b**  Listen again. **1** What has the second applicant never done? **2** What does Nour say about her own first week?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.3  Three applications', [
  ['Mr Ayoub', 'Three for the customer service post. Have you read them?'],
  ['Nour', 'Twice. Have you ever noticed that they all say the same four words?'],
  ['Mr Ayoub', 'Hard-working, reliable, motivated, team player. Yes. Which one has done the work?'],
  ['Nour', 'The second one has never worked in an office. She has worked in a pharmacy for four years, which is a counter, a queue and a hundred questions a day.'],
  ['Mr Ayoub', 'Has she ever used an order system?'],
  ['Nour', 'She has used a stock system. Not ours. I had never used ours either, and that was one year ago.'],
  ['Mr Ayoub', 'That is the argument. Say it to me again on Sunday with her name in it.'],
  ['Nour', 'Hala Mourad.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _ever_ and _never_ with the present perfect**',
  table(['Shape', 'Example'], [
    ['**Have you ever** + past participle?', '**Have you ever used** this system?'],
    ['Short answers', 'Yes, I have. · No, I haven\'t. · No, never.'],
    ['**I have never** + past participle', 'She **has never worked** in an office.'],
    ['**I had never** …, and that was ___ ', 'I **had never used** ours either, and that was one year ago.'],
    ['Softer than the bare question', 'Have you **had the chance to** use it?'],
  ], [1.6, 2.2]),
  '⚠ _Have you ever…?_ asks about **any time in your life up to now**, so it never takes a time word: ~~Have you ever used it yesterday?~~ For a finished time, use the past simple — _Did you use it yesterday?_',
  '⚠ **Never** is already negative. ~~I haven\'t never used it.~~ One negative is enough in English, unlike Arabic.',
  '⚠ Tone matters more than grammar here. _Have you ever done this?_ with a falling, flat voice is a question; with a rising, sharp voice it means _you obviously have not_. In an interview the first gets an answer and the second gets a wall.',
  '**Practise:** Ask your partner five _Have you ever…?_ questions about work. Two answers must be _never_.',
  '**Useful phrases:**  Have you ever…?  ·  No, never.  ·  She has never worked in…  ·  I had never used it either.  ·  Which one has done the work?',
  '**Pronunciation – the question that is not an accusation.** 🔊 **Track 13.4** Listen to the same question twice: _Have you **ever** used an order system?_ Once flat and once sharp. Repeat the flat one until it sounds like curiosity.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a post to fill; B argues for one candidate. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ for the __________ post. Have you read them?'],
  ['B', 'Twice. Have you ever noticed that they all say __________?'],
  ['A', '__________. Which one has done the work?'],
  ['B', 'The __________ one has never __________. She has __________ for __________, which is __________.'],
  ['A', 'Has she ever __________?'],
  ['B', 'She has __________. Not ours. I had never __________ either, and that was __________.'],
]));
out.push(table(['Role card 1 — a driver', 'Role card 2 — a stock assistant'], [[
  'Three applicants. One has driven for a bakery for six years — early mornings, forty stops, no complaints. He has never driven a lorry over three tonnes.',
  'Two applicants. One has worked in a shoe shop for two years and has counted stock every Thursday night. She has never used a computer system of any kind.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the sentence that turned a _never_ into an argument **for** the person. That move is the whole cycle.'));
out.push(PHRASE_CARD(['Have you ever…?', 'No, never.', 'has never worked in', 'Not ours.', 'I had never used it either', 'Which one has done the work?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Interview **three** colleagues about their experience. Ask three _Have you ever…?_ questions each. Write down one thing each person has never done — and one reason it would not matter.'));
out.push(table(['Who', 'Has ever…', 'Has never…', 'Why it would not matter'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.3, 1.3, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ has never _______. But they have _______ for _______, which is _______._'));
out.push(p('**Listener task:** count how many _nevers_ in this room would stop somebody being employed. Usually none of them.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _Have you ever used it yesterday?_ and the double negative. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the experience section of Hala\'s application, and answer the questions.'));
out.push(box(null, [
  '**Experience**',
  '**Al Shifa Pharmacy, Latakia — counter assistant, 2021 to 2025 (four years)**',
  'I served between eighty and a hundred and twenty customers a day at the counter. I took telephone orders, explained instructions to people who were worried, and kept the stock card for ninety lines.',
  'I have never worked in an office and I have never used an order system. I have used a stock system every day for four years, and I learned it in a week from a colleague who had no time to teach me.',
  'In my last year I trained two new assistants. Both are still there.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does she say she has never done — and where does she put it?'));
out.push(item('2', 'What does she put immediately after the _never_ sentence?'));
out.push(item('3', 'Which sentence is the strongest, and why is it the shortest?'));
out.push(box('Writer\'s box', [
  '**Writing an experience section when you have the wrong experience.** Three moves, in this order:',
  '**1 — What you did, with numbers.** Not the job title: the work. _Between eighty and a hundred and twenty customers a day_ is the job; _counter assistant_ is only the name of it.',
  '**2 — The _never_, said first and said plainly.** If there is an obvious gap, name it yourself. A reader who finds it for themselves stops reading; a reader who is told it carries on.',
  '**3 — The sentence that follows the _never_.** This is the one that matters: what you **have** done that is close, and what it proves. _I have used a stock system every day for four years, and I learned it in a week._',
  '⚠ End with the shortest, hardest fact you have. _Both are still there_ is four words and it answers a question nobody asked out loud.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the experience section for a post you would like — real or invented (35 words or more). Use the frame.'));
out.push(p('**______________ — ______________, ______________ to ______________ (______________)**   I ______________ a day. I ______________, ______________, and ______________. I have never ______________. I have ______________ for ______________, and I ______________. In my last year I ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  'Point at the fix **and** name the criterion it comes from: "Move three — the sentence after the _never_ — is missing. What have you done that is close to it?"',
  'If you cannot name a criterion, you have not found a fault; you have found something you would have written differently. Say so, and move on.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **does the _never_ sentence have an answer under it?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The work described, not the job title', ''],
  ['At least one number', ''],
  ['The gap named by the writer, not hidden', ''],
  ['A sentence after the _never_ that answers it', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their _never_ sentence and the one after it. The class says whether the second one answered the first.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you have never done at work but could do tomorrow (60 to 100 words). Say what is close to it in what you have already done, and what you would need in the first week.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the closest thing they have done_   ✓ _ever / never used correctly?_   ? _what would you ask them at interview?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. For each, the class decides in ten seconds: would you give them the week? Ten seconds is about as long as a real reader gives it.'));
out.push(box('Homework', ['Write your final text. Then find a real job advertisement, in Arabic or English, and write the three _Have you ever…?_ questions you think the interviewer would ask (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 13.3 =======================
out.push(pb());
out.push(h2('13.3  I have already sent it'));
out.push(p('**Function:** saying what is done and what is not   ·   **Grammar:** _already_, _yet_, _just_   ·   **Pronunciation:** stress on the word that carries the news'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of your Monday morning. Name three things you do every Monday, in order.'));
out.push(p('**b**  Which word fits? _I have ______ sent it._ · _Have you sent it ______?_ · _She has ______ telephoned — one minute ago._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is still not done?   **A** the invoices   **B** the Homs delivery note   **C** the interview room'));
out.push(p('**b**  Listen again. **1** What has Nour just done? **2** Why does Abu Yasser say the list is better than the memory?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.5  The Monday checklist', [
  ['Mr Ayoub', 'Monday list. Invoices?'],
  ['Nadia', 'Sent. I have already sent them — Friday, not this morning.'],
  ['Mr Ayoub', 'The Homs note?'],
  ['Nour', 'Not yet. Fadi has just come back and the signature is in the van. I have printed it and I am waiting for the paper.'],
  ['Mr Ayoub', 'And the room for Thursday?'],
  ['Nour', 'Done. I have booked the small room and I have taken the chairs out of it, because last time there were nine chairs and three people.'],
  ['Abu Yasser', 'Write that down.'],
  ['Nour', 'I have already written it down. That is why I remembered it.'],
  ['Abu Yasser', 'That is the whole of it. The list is not better than your memory. The list is your memory, standing where you can see it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _already_, _yet_, _just_**',
  table(['Word', 'Where it goes', 'What it means'], [
    ['**already**', 'between **have** and the verb', 'done — and sooner than you expected. _I have **already** sent them._'],
    ['**yet**', 'at the **end**, in questions and negatives', 'not done, and expected. _Have you sent it **yet**? · Not **yet**._'],
    ['**just**', 'between **have** and the verb', 'done a moment ago. _Fadi has **just** come back._'],
    ['**still**', 'before the negative verb', 'going on longer than it should. _I am **still** waiting._'],
  ], [0.9, 1.5, 2.6]),
  '⚠ Word order is the whole of this box. _Already_ and _just_ go **inside** the verb; _yet_ goes **at the end**. ~~I have sent already it.~~ ~~Have you yet sent it?~~',
  '⚠ _Not yet_ is a complete answer and a useful one. It says: not done, I know, it is coming. Compare it with silence, which says nothing and worries people.',
  '**Practise:** Answer each one with _already_, _yet_ or _just_.',
  '1 Have you sent the invoice? 2 Has the lorry left? 3 Have you booked the room? 4 Has she replied? 5 Have you had lunch?',
  '**Useful phrases:**  I have already…  ·  Not yet.  ·  has just come back  ·  I am still waiting for…  ·  That is why I remembered it.',
  '**Pronunciation – the stress carries the news.** 🔊 **Track 13.6** Listen: _I have **already** sent them_ (the news is the timing) against _I have already sent **them**_ (the news is which ones). Repeat both and say what each one answers.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A runs the Monday list; B answers with _already_, _just_, _not yet_ and _still_. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Monday list. __________?'],
  ['B', '__________. I have already __________ — __________, not this morning.'],
  ['A', 'The __________?'],
  ['B', 'Not yet. __________ has just __________ and __________. I have __________ and I am waiting for __________.'],
  ['A', 'And __________?'],
  ['B', 'Done. I have __________ and I have __________, because last time __________.'],
]));
out.push(table(['Role card 1 — the warehouse list', 'Role card 2 — the office list'], [[
  'Six things: the stock count, the broken pallet, the tape order, the fire door, the new worker\'s badge, the Aleppo return. Three are done, two are not, one has just happened.',
  'Six things: the invoices, the bank, the Thursday room, the Homs note, the supplier\'s price list, the interview letters. Three are done, two are not, one has just happened.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their list for the class – **without the book**.'));
out.push(p('**Listener task:** tick the three words as you hear them — _already_, _just_, _yet_. Were they all in the right place in the sentence?'));
out.push(PHRASE_CARD(['I have already…', 'Not yet.', 'has just come back', 'I am still waiting', 'Done.', 'because last time…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Make your own list of **six** things for this week. Tell a colleague what you have already done, what you have just done, and what is not done yet — and why.'));
out.push(table(['The six things', 'already / just / not yet', 'If not yet: what is it waiting for?'], [['', '', ''], ['', '', ''], ['', '', '']], [1.6, 1.2, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I have already _______. I have just _______. I haven\'t _______ yet, because _______._'));
out.push(p('**Listener task:** write down one thing that is waiting for somebody else. Those are the ones that need a telephone call, not a list.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for the word order of _already_ and _yet_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Nour leaves for Mr Ayoub, and answer the questions.'));
out.push(box(null, [
  '**Monday, 9.40 — before you ask**',
  'Invoices: Nadia has already sent them, on Friday.',
  'Homs delivery note: not yet. Fadi has just come back and the signed copy is in the van. I will have it before eleven.',
  'Thursday room: booked. I have taken six chairs out — last time there were nine chairs and three people and it felt like an inspection.',
  'Aleppo price list: I have asked twice and I am still waiting. If there is nothing by Wednesday I will telephone Ms Shamsi rather than write again.',
  'Nothing here needs you yet. — N.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the title of the note do?'));
out.push(item('2', 'Which item is waiting for somebody outside the company, and what is the plan?'));
out.push(item('3', 'Why is the last line there?'));
out.push(box('Writer\'s box', [
  '**A progress note — the shape:** a heading with the time → one line per item → **status first, explanation second** → for anything not done, **when** or **what it is waiting for** → a last line that tells the reader what they have to do.',
  '**Status first.** _Invoices: already sent._ Not _Nadia had a lot on Friday but in the end the invoices went_. The reader is scanning; give them the word they are scanning for.',
  'Anything _not yet_ must carry a **time or a condition**: _before eleven_ · _if there is nothing by Wednesday_. A _not yet_ with nothing after it is the sentence that gets you telephoned.',
  '⚠ The last line is the kindest line in office writing. _Nothing here needs you yet_ saves a manager four minutes and tells them you know the difference between informing and asking.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a progress note for your own manager, with four items (35 words or more). Use the frame.'));
out.push(p('**______________ — ______________**   ______________: ______________ already ______________. ______________: not yet. ______________ and ______________. I will ______________ before ______________. ______________: ______________. I have ______________ and I am still waiting. If ______________ by ______________ I will ______________. ______________. — ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The Writer\'s box says every _not yet_ carries a time or a condition. Item three has neither — when will it be done, or what is it waiting for?"',
  'Naming the criterion keeps the feedback about the writing. Without it, "I would have put more detail" is just your taste against theirs.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could your manager read this in fifteen seconds and know what to do?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Status word first on every line', ''],
  ['_already_, _just_, _yet_ in the right place', ''],
  ['Every _not yet_ with a time or a condition', ''],
  ['A last line that says what the reader must do', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their last line. The class says which manager would be most grateful.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you have been waiting for at work (60 to 100 words). Say what you have already done about it, what you have just tried, what has not happened yet, and what you will do if it still has not happened next week.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the thing they have already done_   ✓ _does every "not yet" have a plan?_   ? _who else could you ask?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many of the waits could end this week with one telephone call? Say whose.'));
out.push(box('Homework', ['Write your final text. Then write tomorrow\'s list before you go home, and bring it to the next lesson with _already_, _just_ and _not yet_ marked on it (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 13.4 =======================
out.push(pb());
out.push(h2('13.4  I worked there in 2019'));
out.push(p('**Function:** finished time and time that is still going   ·   **Grammar:** present perfect against past simple   ·   **Pronunciation:** the time word at the end of the sentence'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Which of these times are finished? _in 2019 · this year · last Tuesday · since March · yesterday · this morning (it is now 10 a.m.)_'));
out.push(p('**b**  Say one true sentence about a job you left, and one about a job you still have.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Nadia correct Nour?   **A** a wrong date   **B** a wrong tense   **C** a wrong name'));
out.push(p('**b**  Listen again. **1** Where did Hala work in 2019? **2** What does Nadia say the tense tells a reader?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.7  Reading the application again', [
  ['Nour', 'Her application says she has worked at the pharmacy since 2021. And she has worked at a bakery in 2019.'],
  ['Nadia', 'Not _has worked_. She **worked** at a bakery in 2019.'],
  ['Nour', 'It is the same job. Why is it a different tense?'],
  ['Nadia', 'Because 2019 is finished and she is not there. The tense is doing the work of a sentence. _She has worked at the pharmacy since 2021_ — she is still there. _She worked at a bakery in 2019_ — she left.'],
  ['Nour', 'So if I write _has worked_ for the bakery, Mr Ayoub thinks she has two jobs now.'],
  ['Nadia', 'He thinks it for about three seconds, and then he thinks something worse: that the person who wrote the summary did not read the dates.'],
  ['Nour', 'That is me.'],
  ['Nadia', 'That is you. And that is why we do this twice.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – present perfect or past simple?**',
  table(['Use', 'Time words', 'Example'], [
    ['**Present perfect** — still true now', 'for · since · ever · never · already · yet · this year (not finished)', 'She **has worked** there **since** 2021.'],
    ['**Past simple** — finished time', 'in 2019 · last year · yesterday · ago · when I was…', 'She **worked** at a bakery **in 2019**.'],
    ['Both in one sentence', '', 'I **have worked** here for a year; before that I **worked** in a shop.'],
  ], [1.5, 1.8, 2]),
  '⚠ The rule is not about how long ago it was. It is about whether the **time** is finished. _This morning_ is present perfect at nine o\'clock and past simple at six in the evening, and that is not a trick — the morning has ended.',
  '⚠ A finished time word cannot take the present perfect. ~~I have worked there in 2019.~~ If the sentence has _in 2019_, _yesterday_ or _last week_ in it, the verb is past simple.',
  '**Practise:** Put the verb in the right tense.',
  '1 I ______ (work) here since March.  2 She ______ (leave) in 2022.  3 We ______ (not have) a complaint this year.  4 He ______ (telephone) yesterday.  5 They ______ (be) customers for nine years.',
  '**Useful phrases:**  since 2021 · in 2019 · before that I worked… · she is still there · she left · that is why we do this twice',
  '**Pronunciation – the time word lands last.** 🔊 **Track 13.8** Listen: _She worked at a bakery in **2019**._ The time word takes the final stress because it is the information. Repeat five sentences, each ending on its time.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a work history aloud with two mistakes in it; B corrects the tense and says why. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'It says she has __________ since __________. And she has __________ in __________.'],
  ['B', 'Not _has __________ _. She **__________** in __________.'],
  ['A', 'It is the same __________. Why is it a different tense?'],
  ['B', 'Because __________ is finished and she is not there. __________ — she is still there. __________ — she left.'],
  ['A', 'So if I write __________, __________ thinks __________.'],
  ['B', 'And then he thinks __________.'],
]));
out.push(table(['Role card 1 — a driver\'s history', 'Role card 2 — an accountant\'s history'], [[
  'Bakery delivery 2016–2019 · a building company 2019–2023 · with us since 2023. Two of the three are finished. Read it with the wrong tense on one and see if your partner catches it.',
  'A school 2014–2017 · a hotel 2017–2021 · a trading company since 2021, still there. Add the sentence that proves which one is current.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their correction for the class – **without the book**.'));
out.push(p('**Listener task:** write the reason, not the correction. _Because 2019 is finished_ is the reason; _because it is past simple_ is only a name.'));
out.push(PHRASE_CARD(['since 2021', 'in 2019', 'she is still there', 'she left', 'before that I worked…', 'we do this twice']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write your own work history — every job, with dates. Then tell a colleague about it, using the past simple for the finished jobs and the present perfect for the one you have now.'));
out.push(table(['Where', 'From / to', 'Tense, and why'], [['', '', ''], ['', '', ''], ['', '', '']], [1.4, 1, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I worked at _______ from _______ to _______. I have worked at _______ since _______._'));
out.push(p('**Listener task:** listen for one wrong tense in the room and say what the sentence accidentally meant.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — all of them a finished time word with the present perfect. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the work history from Hala\'s CV, and answer the questions.'));
out.push(box(null, [
  '**Employment**',
  '**Al Shifa Pharmacy, Latakia — counter assistant — March 2021 to January 2026**',
  'I have served at the counter since 2021 and I am there until the end of this month. I take telephone orders, keep the stock card for ninety lines, and train the new assistants.',
  '**Mourad Bakery, Latakia — counter and deliveries — 2018 to 2021**',
  'I worked at my uncle\'s bakery for three years while I studied. I opened at five, served until nine, and did the accounts on Fridays.',
  '**Education**',
  'Secondary certificate, Latakia, 2018. Accounting short course (forty hours), Latakia Chamber of Commerce, 2023.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which job is written in the present perfect and the present, and why?'));
out.push(item('2', 'Which job is written in the past simple, and why?'));
out.push(item('3', 'What does the bakery entry tell a reader that the pharmacy entry does not?'));
out.push(box('Writer\'s box', [
  '**A work history — the shape:** newest job first → **employer, place, job title, dates** on one line in bold → two or three sentences underneath → the same pattern every time.',
  '**The current job takes the present and the present perfect.** _I have served since 2021. I take telephone orders._ Everything you left takes the **past simple**: _I worked. I opened. I did._',
  'Keep the **dates honest and specific** — _March 2021 to January 2026_, not _2021–2026_ and not _recently_. A reader who finds one vague date starts looking for others.',
  '⚠ Do not explain gaps in the history here. If there is a gap, it belongs in the covering message, in one sentence, in your own words.',
  '⚠ Education goes **after** employment once you have more than a year of it. Before that, it goes first. Your CV should put your strongest thing where the eye lands.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own two most recent entries, with dates (35 words or more). Use the frame.'));
out.push(p('**______________, ______________ — ______________ — ______________ to ______________**   I have ______________ since ______________ and I ______________. I ______________, ______________, and ______________.   **______________, ______________ — ______________ — ______________ to ______________**   I worked ______________ for ______________. I ______________, ______________, and ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says the current job takes the present perfect and everything you left takes the past simple. The second entry has _I have opened at five_ — which job is that, and are you still there?"',
  'A tense fault in a CV is not a grammar point. It changes what the reader thinks you are doing now.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **from the tenses alone, which job is the current one?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Newest first', ''],
  ['Present perfect only in the current job', ''],
  ['Past simple everywhere else', ''],
  ['Dates to the month', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one entry each. The class says, from the tense alone, whether that person is still there.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a job you left (60 to 100 words). Say when it was, what you did, one thing you learned there that you still use, and why you left. All but one of those sentences is past simple — find the one that is not.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the thing they still use_   ✓ _all finished time in past simple?_   ? _a question about the leaving_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many people learned the thing they still use from a job they were glad to leave?'));
out.push(box('Homework', ['Write your final text. Then write your whole work history with exact dates, and check every verb against the Language box (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 13.5 =======================
out.push(pb());
out.push(h2('13.5  What I can put on a CV after one year'));
out.push(p('**Function:** describing skills   ·   **Grammar:** skills vocabulary, _good at_ + -ing, degrees of ability   ·   **Pronunciation:** saying a strength without apologising for it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three things you can do now at work that you could not do a year ago. Any three.'));
out.push(p('**b**  Which of these say something? _hard-working · good with numbers · reliable · fluent in English · can use the stock system · motivated_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub refuse to let Nour write?   **A** her salary   **B** the word _hard-working_   **C** her age'));
out.push(p('**b**  Listen again. **1** What three things does he say she can do? **2** What is his test for a skill on a CV?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.9  One year on paper', [
  ['Nour', 'If I had to write my own CV today, I would have one year and nothing to say.'],
  ['Mr Ayoub', 'Read me what you would write.'],
  ['Nour', 'Hard-working, reliable, good communication skills.'],
  ['Mr Ayoub', 'Those are three things that cannot be checked. Try again, and only write what somebody could test you on in ten minutes.'],
  ['Nour', 'I can take an order on the telephone with four items and read it back without asking twice. I can raise an invoice and find the mistake before the customer does. I have trained Fadi on the delivery notes.'],
  ['Mr Ayoub', 'That is a year. And it is three sentences, and every one of them could be tested in ten minutes with a telephone and a screen.'],
  ['Nour', 'It sounds like boasting.'],
  ['Mr Ayoub', 'It sounds like a fact. Boasting is what people do instead of facts. Say the fact in a flat voice and let the reader be impressed on their own time.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Describing skills – the words that survive a reader**',
  table(['Weak (everybody writes it)', 'Strong (only you can write it)'], [
    ['hard-working, motivated', 'I have not missed a Monday deadline in a year.'],
    ['good communication skills', 'I take orders on the telephone in Arabic and English and read every number back.'],
    ['good with computers', 'I can use the stock system and the invoicing screen; I learned both in a week.'],
    ['fluent in English', 'I deal with Aleppo and Latakia suppliers in English by email and telephone.'],
    ['team player', 'I trained two new staff; both are still here.'],
  ], [1.7, 2.6]),
  '**Degrees of ability, honestly:**  _I can ___ _ · _I am confident with ___ _ · _I have used ___ for two years_ · _I have some experience of ___ _ · _I can read ___ but I am slower at writing it_',
  '⚠ **The ten-minute test.** Could somebody check this claim in ten minutes with a telephone, a screen and one question? If yes, write it. If no, it is decoration.',
  '⚠ Do not write _fluent_ unless you would take a telephone call in that language with no warning. Write what you actually do: _I deal with suppliers in English by email and telephone._ It is more useful **and** more impressive.',
  '**Practise:** Turn each weak phrase into a strong one about yourself. 1 hard-working 2 good with people 3 organised 4 good English 5 team player',
  '**Useful phrases:**  I can…  ·  I am confident with…  ·  I have some experience of…  ·  I learned it in a week.  ·  Say the fact in a flat voice.',
  '**Pronunciation – saying a strength without apologising.** 🔊 **Track 13.10** Listen to the same sentence twice: once rising at the end, once flat. The rising one asks permission to be believed. Repeat the flat one.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A writes weak phrases; B turns each into a fact that passes the ten-minute test. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'If I had to __________ today, I would have __________ and nothing to say.'],
  ['B', 'Read me what you would write.'],
  ['A', '__________, __________, __________.'],
  ['B', 'Those are three things that cannot be checked. Only write what somebody could test in ten minutes.'],
  ['A', 'I can __________ without __________. I can __________ before __________. I have __________.'],
  ['B', 'That is __________. And every one of them could be tested with __________.'],
]));
out.push(table(['Role card 1 — a warehouse year', 'Role card 2 — a counter year'], [[
  'One year in a warehouse: counted stock twice a month, found a difference of fourteen boxes and traced it, learned the forklift signals, never had a delivery refused for bad packing.',
  'One year at a counter: served about seventy people a day, handled the complaints on Thursdays, learned the price list by heart, trained the Saturday assistant.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their exchange for the class – **without the book**.'));
out.push(p('**Listener task:** for each skill you hear, write the ten-minute test that would check it. If you cannot think of one, say so.'));
out.push(PHRASE_CARD(['I can…', 'I am confident with…', 'I have some experience of…', 'I learned it in a week.', 'could be tested in ten minutes', 'Say the fact in a flat voice.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write **five** skills you would put on your own CV today. Say each one aloud to a colleague, who asks: _how would somebody check that?_ Rewrite any that cannot be answered.'));
out.push(table(['Skill, as first written', 'How it could be checked', 'Skill, rewritten'], [['', '', ''], ['', '', ''], ['', '', '']], [1.5, 1.6, 1.9]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I wrote _______. My partner asked how it could be checked. Now it says _______._'));
out.push(p('**Listener task:** write down the strongest skill in the room. Then write down whether the person who said it sounded as if they believed it.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _good in English_ and _I have experience in use the system_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the skills section of a CV, and answer the questions.'));
out.push(box(null, [
  '**Skills**',
  '**Languages** — Arabic (first language). English: I deal with suppliers in Aleppo and Latakia by email and telephone. I read invoices and contracts in English; I am slower at writing long letters.',
  '**Systems** — Stock system and invoicing screen, daily for one year. I learned both in a week and I have trained one colleague on the delivery notes.',
  '**Telephone** — I take orders of up to six items and read every number back. I have not had an order returned for a wrong quantity.',
  '**Numbers** — I check an invoice against the order and the delivery note before it is sent. I found four pricing errors last year, three of them ours.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which sentence admits a weakness, and does it make the CV weaker?'));
out.push(item('2', 'Find two claims that could be checked in ten minutes.'));
out.push(item('3', 'Why does the last line say _three of them ours_?'));
out.push(box('Writer\'s box', [
  '**A skills section — the shape:** four or five **headings** (Languages · Systems · Telephone · Numbers · Driving) → under each, **what you do**, not what you are → **one number** wherever a number exists.',
  'Use the headings a reader is looking for. They are scanning for the one skill the job needs; if it is buried in a paragraph they will not find it.',
  '**One honest limit makes the rest believable.** _I am slower at writing long letters_ costs nothing and buys the reader\'s trust in the other four lines. A CV with no limit anywhere reads as a CV that has not been checked.',
  '⚠ _Three of them ours_ is the sentence a cautious person would delete. Keep it. It says: I am the kind of person who finds our own mistakes, and I am not frightened to write it down.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own skills section with four headings (35 words or more). Use the frame.'));
out.push(p('**Skills**   **Languages** — ______________. ______________; I am slower at ______________.   **Systems** — ______________, ______________ for ______________. I learned ______________ and I have ______________.   **______________** — ______________. I have not ______________.   **______________** — ______________. I ______________ last year, ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box asks for one honest limit. There isn\'t one here, and the English line says _fluent_ — would you take a telephone call in English tomorrow with no warning?"',
  'Band 3 feedback quotes the box and then asks a question. It does not rewrite the sentence for the writer.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **which of these could I check in ten minutes?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Four or five headings a reader can scan', ''],
  ['What you do, not what you are', ''],
  ['A number under at least two headings', ''],
  ['One honest limit', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their honest limit. The class says whether it made the rest more believable or less.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a skill you have that is not on anybody\'s list (60 to 100 words). Say how you learned it, where it is useful at work, and why it never appears in a job advertisement.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _where this would be worth money_   ✓ _could it be checked?_   ? _who taught you it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Which unlisted skill would you most want in a colleague? Those are the ones employers complain they cannot find.'));
out.push(box('Homework', ['Write your final text. Then take one weak phrase from an old CV of yours — your own or one you have seen — and rewrite it so it passes the ten-minute test (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 13.6 =======================
out.push(pb());
out.push(h2('13.6  Tell me about yourself'));
out.push(p('**Function:** answering the first interview question   ·   **Grammar:** the sixty-second answer — present, past, future in three moves   ·   **Pronunciation:** the pause that ends an answer'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What is the first question in almost every interview? What does the interviewer actually want from it?'));
out.push(p('**b**  Time yourself: say who you are and what you do, in sixty seconds. Most people stop at twenty or run to three minutes.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour say was the best part of Hala\'s answer?   **A** the length   **B** the question at the end   **C** the pharmacy numbers'));
out.push(p('**b**  Listen again. **1** What three parts did Hala\'s answer have? **2** What did she do when she finished?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.11  After the interview', [
  ['Mr Ayoub', 'Well?'],
  ['Nour', 'She answered the first question in about a minute and she had three parts to it. Now: four years at a pharmacy counter, eighty to a hundred and twenty people a day. Then: the bakery, where she learned to open at five and count money while tired. Next: she wants to do the same work where the customer comes back, instead of once.'],
  ['Mr Ayoub', 'And then?'],
  ['Nour', 'And then she stopped. She did not fill the silence. She said "that is me" and waited, and you asked the next question.'],
  ['Mr Ayoub', 'I did. Did she ask us anything?'],
  ['Nour', 'One thing, at the end. She asked what the hardest week of the year is here, so she knows before she starts.'],
  ['Mr Ayoub', 'Write to her tomorrow. And Nour — you have just described a good interview answer better than the book I have in my drawer.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The sixty-second answer – three moves and a stop**',
  table(['Move', 'What it does', 'Opening words'], [
    ['**Now**', 'what you do, where, for how long, with one number', 'I am ___ at ___ , and I have been there ___ .'],
    ['**Then**', 'where you came from and what it taught you', 'Before that I worked ___ , where I learned ___ .'],
    ['**Next**', 'why this job, in one sentence about the work', 'I want to ___ , and this post ___ .'],
    ['**Stop**', 'end the answer and wait', 'That is me. / That is the short version.'],
  ], [0.8, 1.9, 2.2]),
  '⚠ **Sixty seconds is about a hundred and twenty words.** Three sentences a move. Longer than that and the interviewer stops listening; shorter and they have to ask again, and you have made them work.',
  '⚠ **The stop is the hardest part.** When you finish, say your closing phrase and be quiet. Silence in an interview belongs to the interviewer; filling it is the commonest mistake in the room.',
  '⚠ Have **one question** ready for the end — about the work, not the money. _What is the hardest week of the year here?_ is a question from somebody who is already imagining the job.',
  '**Practise:** Say your Now / Then / Next in sixty seconds. Your partner times it and says which move was missing.',
  '**Useful phrases:**  I have been there for…  ·  Before that I worked…  ·  where I learned…  ·  I want to…  ·  That is me.  ·  Could I ask you one thing?',
  '**Pronunciation – the pause that ends an answer.** 🔊 **Track 13.12** Listen: the voice falls on _that is me_ and then there is silence for two full seconds. Repeat it, and hold the silence. It will feel much longer than it is.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A interviews; B gives the sixty-second answer and then stops. A must stay silent for two seconds before speaking. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Tell me about yourself.'],
  ['B', 'Now: I am __________ at __________, and I have been there __________. __________.'],
  ['B', 'Then: before that I worked __________, where I learned __________.'],
  ['B', 'Next: I want to __________, and this post __________. That is me.'],
  ['A', '__________?'],
  ['B', 'Could I ask you one thing? __________?'],
]));
out.push(table(['Role card 1 — the post you have', 'Role card 2 — the post you would like'], [[
  'Answer as yourself, for the job you do now, as if you were applying for it today. Most people have never done this and find it harder than applying for a new one.',
  'Answer as yourself, for a job one step above the one you have. The Next move is the difficult one: say what you want in terms of the work, not the title.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform for the class – **without the book**. The class times the answer.'));
out.push(p('**Listener task:** write the three moves as you hear them. Then write how long the silence was at the end.'));
out.push(PHRASE_CARD(['I have been there for…', 'Before that I worked…', 'where I learned…', 'I want to…', 'That is me.', 'Could I ask you one thing?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Give your sixty-second answer to **three** different colleagues. Change nothing between them. Ask each one afterwards which move they remember.'));
out.push(table(['Who I told', 'The move they remembered', 'What I will change'], [['', '', ''], ['', '', ''], ['', '', '']], [1, 1.6, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _All three remembered _______. Nobody remembered _______, so I am going to _______._'));
out.push(p('**Listener task:** the move nobody remembers is usually **Next**. Count how many people in the room find that.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _Since four years I am working_ and _I am interesting in this job_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Hala\'s covering message, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Customer service post — Hala Mourad',
  'Dear Mr Ayoub,',
  'I am writing to apply for the customer service post advertised at the Chamber of Commerce. My CV is attached.',
  'I have worked at a pharmacy counter in Latakia since 2021, serving between eighty and a hundred and twenty people a day, taking telephone orders and keeping the stock card for ninety lines. Before that I worked three years at a bakery, where I learned to count money accurately at five in the morning.',
  'I have never worked in an office and I have never used an order system. I have used a stock system every day for four years and I learned it in a week. The work you have advertised is the work I do now, with the same customer coming back rather than passing through, which is the part I want.',
  'I can start after four weeks\' notice. I would be glad to come in and be tested on anything in this letter.',
  'Thank you for your time. Best regards, Hala Mourad  ·  Latakia  ·  09__ ___ ___',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which paragraph does the same job as the _Now / Then_ moves in the Language box?'));
out.push(item('2', 'Where does she name her gap, and what does she put after it?'));
out.push(item('3', 'What does the last short paragraph offer?'));
out.push(box('Writer\'s box', [
  '**A covering message — four short paragraphs and nothing more:**',
  '**1 Why you are writing** — the post, where you saw it, and that the CV is attached. One sentence.',
  '**2 Now and Then** — the current job with its numbers, then the one before it and what it taught you.',
  '**3 The gap and the answer** — name what you have never done, then what you have done that is closest, then one sentence on why this work suits you.',
  '**4 The practical close** — when you can start, and an offer: _I would be glad to be tested on anything in this letter._',
  '⚠ A covering message is **not** the CV in sentences. If a paragraph only repeats the CV, delete it.',
  '⚠ Never apologise in a covering message — not for the gap, not for writing, not for your English. Name the gap, answer it, and move on.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a covering message for a post you would like (35 words or more). Use the frame.'));
out.push(p('**Subject:** ______________   Dear ______________, I am writing to apply for ______________. My CV is attached.   I have ______________ since ______________, ______________. Before that I ______________, where I learned ______________.   I have never ______________. I have ______________ and ______________. The work you have advertised is ______________.   I can start ______________. I would be glad to ______________.   Thank you for your time. ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"Paragraph four is missing its offer — the box asks for when you can start **and** an offer to be tested. What could they test you on?"',
  'And the band 3 rule in one line: **quote the box, then ask a question.** Do not write the sentence for them.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **does any paragraph only repeat the CV?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Four paragraphs, no more', ''],
  ['Numbers in the Now paragraph', ''],
  ['The gap named, then answered', ''],
  ['A practical close with an offer', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read paragraph three. The class says whether the answer was stronger than the gap.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the answer you would give to _tell me about yourself_, as if you were writing it down (60 to 100 words). Three moves, then stop. Count the words when you have finished: a hundred and twenty is a minute.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the move that worked_   ✓ _are all three moves there?_   ? _the question you would ask next_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts aloud with a watch running. Whose was closest to sixty seconds, and whose made you want to ask a second question?'));
out.push(box('Homework', ['Write your final text. Then say your sixty-second answer to somebody at home, in English, and ask them which move they remember an hour later (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 13.7 =======================
out.push(pb());
out.push(h2('13.7  Review & Mediate: what the advertisement is really asking for'));
out.push(p('**Function:** telling a colleague what a job advertisement asks for — and what it means   ·   **Review:** for / since · ever / never · already, yet, just · perfect against past · skills · the sixty-second answer'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 13 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** _for_ or _since_: ______ March, ______ eleven years, ______ I left school.',
  '**2** Where does _already_ go, and where does _yet_ go?',
  '**3** Why is _She has worked at a bakery in 2019_ wrong?',
  '**4** What is the ten-minute test for a skill on a CV?',
  '**5** What are the three moves of the sixty-second answer, and what comes after them?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Fadi worried about?   **A** the salary   **B** that the advertisement is not for people like him   **C** the hours'));
out.push(p('**b**  Listen again. **1** What does "minimum two years in a similar role" turn out to mean? **2** What does Nour tell him to put in the first line?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.13  "Is this for me?"', [
  ['Fadi', 'Nour. The notice at the Chamber — warehouse and logistics assistant. It says _minimum two years in a similar role_ and _candidates must be computer literate_. I have driven for six years. That is not a similar role and I am not computer literate.'],
  ['Nour', 'Read me the rest of it.'],
  ['Fadi', '_Responsible for goods in and goods out, checking quantities against the note, keeping the stock record, and liaising with drivers._'],
  ['Nour', 'Fadi, you have done every one of those four things for six years. You have checked quantities against a note at the gate every day of your working life. The two years is in the advertisement because somebody has to write a number; the four jobs underneath are what they actually want.'],
  ['Fadi', 'And computer literate?'],
  ['Nour', 'It means you can be taught the stock screen without somebody sitting with you for a month. You learned the new delivery notes in two days and then you taught Abu Yasser.'],
  ['Fadi', 'So what do I put in the first line?'],
  ['Nour', 'The four things they listed, in their words, with your numbers in them. Make them do no work at all.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – a job advertisement, where the requirement and the work are different things**',
  table(['To separate the two', 'To match the words', 'To free them'], [
    ['The ___ is in the advertisement because somebody has to write a number.', 'You have done every one of those ___ things.', 'It means ___ , not ___ .'],
    ['The list underneath is what they actually want.', 'In their words, with your numbers in them.', 'Make them do no work at all.'],
  ], [1.9, 1.7, 1.6]),
  '⚠ **A job advertisement has two parts and they do not agree.** The requirements are written by a personnel office; the duties are written by the person who needs the work done. Read the duties first — they are the job.',
  '⚠ Translate the code words rather than being stopped by them: _computer literate_ = can be taught a screen · _similar role_ = has done these duties · _excellent communication skills_ = can be put on the telephone to a customer.',
  '⚠ **In their words.** When you reply, use the advertisement\'s own nouns. A reader matching twenty applications to a list is looking for their own words, and a better word that is not theirs is a word they do not see.',
  '**Practise:** The notice says _minimum two years in a similar role · computer literate · excellent communication skills_. Say what each one really asks for, to somebody who is about to decide not to apply.',
  '**Useful phrases:**  Read me the rest of it.  ·  You have done every one of those…  ·  It means…, not…  ·  in their words, with your numbers  ·  Make them do no work at all.',
  '**Pronunciation – reading a list aloud.** 🔊 **Track 13.14** Listen to the four duties read as a list: each one falls, and only the last one falls further. Repeat, and do not let your voice rise at the end of each item — a rise turns a fact into a doubt.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads an advertisement silently; B is about to decide not to apply. A separates the requirements from the duties and matches B to the duties. Then swap.'));
out.push(table(['Advertisement 1 — for A', 'Advertisement 2 — for B'], [[
  '**ACCOUNTS ASSISTANT.** _Minimum three years in accounts. Degree preferred. Candidates must be proficient in accounting software and have excellent attention to detail. Duties: entering invoices, checking supplier statements, chasing late payments by telephone, preparing the monthly figures for the manager._  **B says:** I have no degree and I have never used accounting software.',
  '**CUSTOMER SERVICE OFFICER.** _Two years minimum in a customer-facing role. Fluent English essential. Duties: taking telephone and email enquiries, logging complaints, following up repairs with suppliers, keeping customers informed of delays._  **A says:** my English is not fluent and I have only worked in a shop.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the requirement that frightened the person, and the duty that answered it. They are almost never the same line.'));
out.push(PHRASE_CARD(['Read me the rest of it.', 'You have done every one of those…', 'It means…, not…', 'in their words', 'Make them do no work at all.', 'That is what they actually want.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a real job advertisement. Read it silently. Then explain to **two** colleagues what it is really asking for, and which of their own duties match it.'));
out.push(table(['Who I told', 'The requirement that stopped them', 'The duty that answered it'], [['', '', ''], ['', '', '']], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the advertisement you mediated. This is the **first** unit of Book 2, and the mediation task now has something in it that the document does not say outright — here, that the requirements and the duties were written by two different people.'));
out.push(p('_It\'s a ______. The line that stopped them was ______. The duties underneath asked for ______, and they have done it for ______._'));
out.push(p('**Listener task:** start the Book 2 office-word list on the board with the words from these advertisements: _candidate · applicant · vacancy · desirable · essential · liaise_.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short workplace texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _Applications close Thursday 5 p.m. Late applications will not be considered._   **A** Apply before Thursday evening. **B** Applications are read on Thursday. **C** You may apply late with a reason.',
  '**2**  _Two years in a similar role. Experience of stock systems desirable._   **A** You must have used a stock system. **B** The stock system is wanted but not required. **C** Only stock controllers may apply.',
  '**3**  _Please attach a CV and the names of two referees._   **A** Send two letters from people who know your work. **B** Send a CV and the names of two people who can be asked about you. **C** Bring two people with you.',
  '**4**  _The post is full-time, with a three-month probation period._   **A** The job lasts three months. **B** You work three months without pay. **C** The first three months are a trial, then the post continues.',
  '**5**  _Candidates shortlisted for interview will be contacted by 12 March._   **A** Everybody will hear by 12 March. **B** Only those chosen for interview will hear. **C** Interviews are on 12 March.',
  '**6**  _Notice period: one month._   **A** You must give a month before you leave. **B** The job starts in a month. **C** You are paid monthly.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more).** The task gives you **three** things to write about, and all three must be there.',
  '**In Book 2 the free writing moves to 35 words or more**, and the examination task stays at 25. Write to the task, not to your habit: more words than the task asks for is not a better answer, it is a longer one.',
  'For a message about a job, the three points are usually: **what you are applying for** · **one thing from the advertisement you match** · **what you want them to do next**.',
  '⚠ Use the advertisement\'s **own words** for the thing you match. The reader is scanning for them.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task.** A colleague has sent you a job advertisement. Write them a message (25 words or more). Say **which post** you will apply for, **one thing** in it that matches your work, and **what you will send** and when.'));
out.push(p('Hi ______________, thanks for ______________. I am going to apply for ______________. The duties say ______________, and I have ______________ for ______________. I will send ______________ by ______________. ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The post named', ''],
  ['One matching duty, in the advertisement\'s words', ''],
  ['What will be sent, and when', ''],
  ['25 words or more', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a job you decided not to apply for (60 to 100 words). Say what the advertisement asked for, which line stopped you, and — now — whether that line was a requirement or a duty.'));
out.push(...lines(6));
out.push(box('Homework', ['Write your final text. Then go back to that advertisement, or find it again, and write the first line of the application you would send now (35+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 13 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  I have worked here ___ March.   a) for   b) since   c) from',
  '2  She has worked here ___ eleven years.   a) since   b) for   c) during',
  '3  Have you ___ used this system?   a) ever   b) yet   c) already',
  '4  I haven\'t finished ___ .   a) already   b) just   c) yet',
  '5  She ___ at a bakery in 2019.   a) has worked   b) worked   c) has been working',
  '6  He has ___ telephoned — one minute ago.   a) yet   b) just   c) since',
  '7  I am good ___ numbers.   a) in   b) at   c) of',
  '8  Before that I ___ three years at a hotel.   a) have worked   b) work   c) worked',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 13.15** Listen to a short interview answer. Complete the note.   Now: ______   For how long: ______   Then: ______   What it taught her: ______   Next: ______'));
out.push(dlg('Track 13.15  Audio script (read after the check)', [
  ['Hala', 'I am a counter assistant at a pharmacy in Latakia, and I have been there since 2021 — four years in January. I serve between eighty and a hundred and twenty people a day.'],
  ['Hala', 'Before that I worked three years at my uncle\'s bakery, where I learned to count money accurately at five in the morning, which sounds small and is not.'],
  ['Hala', 'I want to do the same work where the customer comes back instead of passing through. That is me.'],
]));
out.push(p('**C  Writing.** Write the Now move of your own sixty-second answer (35+ words). What you do, where, how long, and one number.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 13)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say how long I have done something, with **for** and with **since**',
  '☐ ask about experience with _ever_, and answer with _never_ without it sounding like a weakness',
  '☐ say what is already done, what has just happened, and what is not done yet — with a time or a condition',
  '☐ choose the present perfect or the past simple by asking whether the time is finished',
  '☐ write a skill that somebody could check in ten minutes',
  '☐ answer "tell me about yourself" in three moves, and then stop',
  '☐ tell a colleague what a job advertisement is really asking for',
  '☐ write a CV profile, an experience section, a work history, a skills section, a progress note and a covering message',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 13 · Student\'s Book');
