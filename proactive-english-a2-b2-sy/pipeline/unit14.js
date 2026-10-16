// Proactive English A2 · Syria Edition · Book 2 · Unit 14 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 14  Plans and Predictions'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**14.1**  make predictions about the future',
  '**14.2**  make a decision or an offer on the spot',
  '**14.3**  say that you are not sure',
  '**14.4**  ask other people about the future',
  '**14.5**  talk about plans you have already made',
  '**14.6**  talk about the far future',
  '**14.7**  Review & Mediate: explain a weather page and a travel warning',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**The predictions envelope.** Ms Huda collects the three predictions everybody wrote at the end of Unit 13 and puts them in an envelope. The class will open it again in Unit 24.',
  '**Rami\'s site may move to Latakia** — the company has not decided. If it moves, he goes for eight months.   ·   **Lina\'s company is waiting** for a decision from a supplier in Türkiye; nobody knows which way it will go.',
  '**Omar predicts the football** every week and is wrong almost every week, which has become the class\'s way of talking about certainty.',
], C.lyellow, C.orange));

// ======================= 14.1 =======================
out.push(pb());
out.push(h2('14.1  I think it will be a good year'));
out.push(p('**Function:** making predictions about the future   ·   **Grammar:** _will_ and _won\'t_ for predictions   ·   **Pronunciation:** the contraction _\'ll_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you think will happen this year? _prices · the weather · your job or your studies · your city · this class_. Your teacher writes the class\'s ideas on the board in two columns: **will** and **won\'t**.'));
out.push(board('I think prices will go up.', 'Prices ↑ — 9 people · ↓ — 1 person'));
out.push(p('**b**  Which of these is a **prediction** and which is a **fact**? **1** _It will rain on Friday._  **2** _Friday is the fourteenth._  **3** _The new road won\'t be finished this year._  **4** _The centre closes at nine._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is in the envelope?   **A** the exam results   **B** the predictions the class wrote in Unit 13   **C** a letter from the director'));
out.push(p('**b**  Listen again. **1** What does Omar predict about the football?   **2** What does Ms Huda say she will do with the envelope?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.1  The envelope', [
  ['Ms Huda', 'Three predictions each, from last week. Fold them. I\'ll put them all in here.'],
  ['Hiba', 'And then what? Will you read them?'],
  ['Ms Huda', 'No. I\'ll put the envelope in the cupboard and we will open it in Unit 24, in the summer.'],
  ['Omar', 'That is a long time to wait to be right.'],
  ['Ms Huda', 'Or wrong. What did you write, Omar?'],
  ['Omar', 'I wrote that Al-Jaish will win on Friday. They won\'t, but I wrote it.'],
  ['Rami', '(laughs) You write that every week.'],
  ['Omar', 'And one week I will be right, and then none of you will be able to say anything.'],
  ['Hiba', 'Mine are more serious. I think prices will go up, I think I will pass this level, and I think the lift in this building will break before March.'],
  ['Ms Huda', 'That last one is not a prediction, Hiba, that is a diagnosis.'],
  ['Lina', 'I wrote that our company will get an answer from Türkiye. I didn\'t write which answer.'],
  ['Ms Huda', 'That is a careful prediction. Careful predictions are the ones that come true.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _will_ and _won\'t_ for predictions**',
  table(['+', '–', '?'], [
    ['I **will** (**\'ll**) pass.\nIt **will** (**\'ll**) rain.\nPrices **will** go up.',
     'They **won\'t** win.\nIt **won\'t** be easy.\n(won\'t = will not)',
     '**Will** it rain?\n– Yes, it **will**. / No, it **won\'t**.'],
  ], [1.2, 1, 1.2]),
  '**One form for everybody:** I / you / he / she / it / we / they **will**. There is no _wills_ and no _to_: ~~He will to come.~~ ~~She wills come.~~',
  'We use _will_ for what we **think, believe, expect or guess** — not for what is already arranged: _I **think** it **will** rain._ · _I\'m **sure** they **won\'t** come._ · _I **expect** prices **will** go up._',
  '⚠ The opinion verb goes **first** and stays in the present: _I **think** it will rain_, not ~~I will think it rains~~. And in English we say _I **don\'t think** it will rain_, not ~~I think it won\'t rain~~.',
  table(['how sure', 'what we say'], [
    ['very sure', '_I\'m sure (that) … will…_ · _… definitely will…_'],
    ['fairly sure', '_I think (that) … will…_ · _I expect…_'],
    ['not sure the other way', '_I don\'t think … will…_'],
    ['very sure the other way', '_I\'m sure … won\'t…_'],
  ], [1, 2]),
  '**Practise:** Make a prediction with _will_ or _won\'t_.  1 I think the bus ______ (be) late.  2 I\'m sure she ______ (not forget).  3 Prices ______ (go) up again in the summer.  4 I don\'t think it ______ (rain) today.  5 They ______ (not finish) the road this year.  6 ______ you ______ (come) on Friday?',
  '**Useful phrases:** I think… · I don\'t think… · I\'m sure… · I expect… · We\'ll see. · Careful predictions are the ones that come true.',
  '**Pronunciation.** 🔊 **Track 14.2** In speech _will_ almost disappears: _I\'ll_ /aɪl/ · _he\'ll_ /hiːl/ · _we\'ll_ /wiːl/ · _they\'ll_ /ðeɪl/. But _won\'t_ /wəʊnt/ is **loud**, because it carries the meaning. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a question from the card; B makes a prediction and says how sure they are. A must disagree with **one** of them. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'What do you think will happen to __________?'],
  ['B', 'I think __________ will __________.'],
  ['A', 'Are you sure?'],
  ['B', 'I\'m sure it __________. / I don\'t think it __________.'],
  ['A', 'I don\'t agree. I think __________.'],
  ['B', 'We\'ll see. Write it down.'],
]));
out.push(table(['Card A – ask about…', 'Card B – ask about…'], [
  ['the price of bread this year', 'the weather next week'],
  ['the new road near the centre', 'the number of students in this class in June'],
  ['your own English in six months', 'the football on Friday'],
  ['the lift in this building', 'the shop on the corner'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** write **three** predictions you hear — one with _will_, one with _won\'t_, and one with _I don\'t think_.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your own **three** predictions: one about yourself, one about this class, one about your city. Then tell your partner, and say how sure you are about each one. Your partner must ask _"Why do you think that?"_ about one of them.'));
out.push(p('**b**  Swap partners. This time your new partner has to say whether they agree, and give **one** reason. Keep the predictions — you will need them in Unit 24.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class what your partner predicted:  _Nour thinks she will finish her training course in April, and she is sure about that one because the dates are on the wall at work. She thinks this class will lose two people before the summer, which I did not enjoy hearing. And she doesn\'t think the new road will open this year. Her reason is that she has walked past it every day for seven months and she has seen four men working on it, twice._'));
out.push(p('**Listener task:** which prediction in the room is the bravest? Which one is so careful that it cannot be wrong?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page from the English Club noticeboard. Answer the questions.'));
out.push(model([
  '**WHAT WILL HAPPEN THIS YEAR?** — the club\'s predictions, January',
  'We asked twenty-two members for one prediction each. Here is what the club thinks.',
  '**The city.** Nineteen of you think the new road will open — but only four think it will open this year. One member wrote: "It will open, and on the first day there will be a traffic jam on it."',
  '**Money.** Everybody except one person thinks prices will go up. The one person did not write a reason, and we would like to speak to them.',
  '**This club.** Eleven of you think we will be more than forty members by the summer. Nobody thinks we will be fewer. We will count in June and put the number here.',
  '**Yourselves.** This is the part we liked. Fourteen of you wrote a prediction about your own English, and twelve of those fourteen said some form of "I will be better, but not as much better as I want".',
  'We have kept every paper. We will print this page again in July with ✓ and ✗ next to each line.',
]));
out.push(item('1', 'How many members think the new road will open **this year**?'));
out.push(item('2', 'Why does the club want to speak to one member?'));
out.push(item('3', 'What will the club do with this page in July?'));
out.push(writers([
  'A predictions page: **where the numbers came from** → **one area at a time** → **the numbers, not your opinion** → **what you will do to check**.',
  'Give the **count**, not "most people": _Nineteen of you_ · _Eleven of you_ · _twelve of those fourteen_. A predictions page with no numbers in it is just an opinion with a title.',
  'Quote **one** member exactly. One short quotation is worth four sentences of summary.',
  '⚠ End with a **date and a method**: _We will count in June._ A prediction nobody plans to check is not a prediction.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a short predictions page for your class (35 words or more). Use the skeleton.'));
out.push(p('**WHAT WILL HAPPEN ______________?**   We asked ______________ people for ______________.   **______________.** ______________ of them think ______________ will ______________. Only ______________ think ______________.   One person wrote: "______________".   We will ______________ in ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Capital letters, full stops, and a title at the top',
  '_will_ / _won\'t_ with no _to_ and no _-s_ (_she will come_, not ~~she wills~~)',
  'At least three numbers, and one exact quotation in quotation marks',
  'All three parts: where the numbers came from · the predictions · when you will check',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write **your own** page of predictions for this year (60 words or more): three for yourself, two for the people around you, one for your city. Say how sure you are about each, and say how you will know whether you were right.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody who will read it again in July**. ★ _The prediction I most want to be true._  ✓ _One that needs a number or a date._  ? _How exactly will you know?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Fold the pages and put them in the class envelope. **Which prediction in this room would you bet on?** Say why — and remember that in Unit 24 you will find out.'));
out.push(hw('Write **three predictions about somebody in your family** (40+ words) — one you are sure about, one you think is likely, and one you hope is wrong.'));

// ======================= 14.2 =======================
out.push(pb());
out.push(h2('14.2  I\'ll do it'));
out.push(p('**Function:** making instant decisions and offers   ·   **Grammar:** _will_ for a decision made now   ·   **Pronunciation:** _I\'ll_ /aɪl/, _we\'ll_ /wiːl/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher says a problem; the first person to offer help wins the point. _"I\'ve left my book at home." · "This table is dirty." · "Nobody has the handout." · "The window is open and it\'s cold."_'));
out.push(board('I\'ll get you one.', 'Offers: Hiba 3 · Rami 2'));
out.push(p('**b**  Which answer is an **offer made now** and which is a **plan from before**? _"The phone is ringing." — **a)** I\'ll answer it. **b)** I\'m going to answer it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the problem in the classroom?   **A** the heating is off   **B** the photocopier is broken   **C** two students have no book'));
out.push(p('**b**  Listen again. **1** What does Rami offer to do?   **2** What does Ms Huda decide at the end?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.3  Nobody has a handout', [
  ['Ms Huda', 'Right — the photocopier downstairs has stopped again, so I have four handouts for eleven people.'],
  ['Rami', 'I\'ll photograph it and send it to everybody. Two minutes.'],
  ['Ms Huda', 'Thank you. Not everybody has the group, though.'],
  ['Hiba', 'I\'ll add them. Who isn\'t in it?'],
  ['Lina', 'I\'m not. And my battery is at four per cent, so I\'ll share with Nour.'],
  ['Nour', 'Fine. And I\'ll bring my charger on Thursday — I\'ll leave it in the room, actually, then it\'s there for everybody.'],
  ['Omar', 'I\'ll tell Mr Bassam about the photocopier on my way out.'],
  ['Ms Huda', 'You told him last week.'],
  ['Omar', 'Then I\'ll tell him again, and this time I\'ll write it on a piece of paper, because a piece of paper is harder to forget than me.'],
  ['Ms Huda', '(laughs) Good. Then here is my decision: we won\'t wait for the photocopier. I\'ll put every handout in the group on Wednesday evening, and you will all come with it on your phones.'],
  ['Lina', 'Charged.'],
  ['Ms Huda', 'Charged.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _will_ for something you decide **now**',
  table(['the moment', 'what you say'], [
    ['you hear the problem and decide **this second**', '_I **\'ll** do it._ · _I **\'ll** get one._ · _I **\'ll** tell him._'],
    ['you offer to help', '_**I\'ll** carry that for you._ · _**Shall I** open the window?_'],
    ['you promise', '_I **\'ll** bring it on Thursday, I promise._'],
    ['you refuse', '_I **won\'t** do that._ · _It **won\'t** open._ (= it refuses to)'],
  ], [1, 1.6]),
  '⚠ The big one: a decision made **now** is _will_; a plan made **before** is _going to_ (14.5). The phone rings → _**I\'ll** answer it._ You already planned it → ~~I\'ll answer it~~ is wrong, say _I\'m **going to** answer it._',
  '⚠ ~~I will to help you.~~ ⚠ ~~I help you.~~ → _I **\'ll** help you._  In speech it is nearly always **\'ll**, not the full _will_. The full form sounds like an argument.',
  '**Offers and answers:**  _I\'ll do it._ – _Thank you, that\'s very kind._ · _Shall I help?_ – _Yes please. / No, it\'s fine, thanks._ · _Don\'t worry, I\'ll sort it out._',
  '**Practise:** Answer with an offer using _\'ll_.  1 "This bag is heavy." → ______  2 "I don\'t understand question four." → ______  3 "We need ten chairs." → ______  4 "Nobody has told Mr Bassam." → ______  5 "There\'s no water." → ______',
  '**Useful phrases:** I\'ll do it. · Shall I…? · Don\'t worry, I\'ll… · Leave it to me. · I\'ll sort it out. · Two minutes.',
  '**Pronunciation.** 🔊 **Track 14.4** The whole offer rides on one small sound: _I\'ll_ /aɪl/ · _we\'ll_ /wiːl/ · _he\'ll_ /hiːl/. Say _I\'ll get it_ three times, faster each time, until the _will_ has gone.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a problem from the card; B offers to deal with it, **now**, and adds when. A accepts or says it is not necessary. Then swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'Don\'t worry, I\'ll __________.'],
  ['A', 'Are you sure? It\'s __________.'],
  ['B', 'It\'s fine. I\'ll __________ on __________.'],
  ['A', 'Thank you, that\'s very kind.'],
  ['B', 'And shall I __________ as well?'],
  ['A', 'No, it\'s all right, __________.'],
]));
out.push(table(['Card A – problems', 'Card B – problems'], [
  ['the printer has no paper', 'nobody has told the new student about Thursday'],
  ['these boxes have to go upstairs', 'the window has been open all night'],
  ['Mr Bassam doesn\'t know about the room change', 'we need twelve cups for the party'],
  ['my phone is dead and I have to ring home', 'the list on the door is last month\'s'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **three** offers you hear and whether each one was accepted or refused.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  **The helpful room.** Your teacher gives the class six real problems from this building. Stand up. Every student must make **one** offer and **accept** one. Nobody may offer the same thing twice.'));
out.push(p('**b**  Sit down with a partner and tell them what you have promised to do, and by when. Your partner writes it down, because next week they are going to ask you.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class what was offered:  _Four people offered to speak to Mr Bassam, which means nobody will. Rami said he will bring a spare charger and leave it in the room, and Hiba said she will make a new list for the door and put it up before Thursday. I offered to carry the boxes and Lina refused me, which I am still thinking about. The one job nobody offered to do was washing the twelve cups afterwards._'));
out.push(p('**Listener task:** which offer will actually happen? Write the name and the job, and check next week.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the three messages in the class group. Answer the questions.'));
out.push(model([
  '**AL-YASMIN 4B — class group, Wednesday evening**',
  '**Ms Huda:** The photocopier is still broken, so here is Thursday\'s handout as a photograph. Please come with it on your phone, and please come with a charged phone.',
  '**Rami:** I\'ll print ten copies at the office tomorrow morning. It costs nothing and it takes four minutes. Nobody has to read anything on a telephone.',
  '**Ms Huda:** That is very kind. Don\'t print eleven — Lina reads better from the screen than from paper, she told me.',
  '**Hiba:** I\'ll bring the new list for the door. And I\'ll put it up before the lesson this time, not after it.',
  '**Nour:** I\'ll leave my old charger in the cupboard in Room 12. It\'s the white one. It is not a loan, it lives there now.',
  '**Omar:** I\'ll say nothing to Mr Bassam, because I have said it twice and I have become part of the problem.',
]));
out.push(item('1', 'Why does Rami offer to print the handout?'));
out.push(item('2', 'Why does Ms Huda ask for ten copies and not eleven?'));
out.push(item('3', 'What does Omar mean by "I have become part of the problem"?'));
out.push(writers([
  'A message that offers help: **what you will do** → **when** → **one detail that makes it easy to accept** (_it costs nothing · it takes four minutes · it\'s the white one_).',
  'Offer **one** thing and be exact about it. _I\'ll print ten copies tomorrow morning_ is an offer. _Let me know if I can help_ is not — it hands the work straight back.',
  'Say the **size** of the favour, so the other person can accept without feeling they owe you: _four minutes_ · _it costs nothing_ · _it lives there now_.',
  '⚠ Don\'t offer what you cannot do. In this class the person who offers four things and does none is worse than the person who offers nothing.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message offering to help with something real (35 words or more).'));
out.push(p('______________,   I\'ve seen that ______________.   I\'ll ______________ on ______________. It ______________ and it takes ______________.   Shall I also ______________?   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A greeting and a name at the end',
  '_\'ll_ for every offer (not _I going to_, not the bare verb)',
  'One exact time **and** one detail that shows the size of the favour',
  'Only what you can really do — read it again and cross out anything you will not do',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the message you would really send (60 words or more) to a group — your class, your family, your neighbours, your colleagues — offering to do **two** things, with times, and asking for **one** thing you need from them.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as **a member of the group**. ★ _The offer I would accept immediately._  ✓ _One offer that needs a time._  ? _What do you want me to do?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three messages aloud. **Which group would you like to be in?** The answer is usually the group where the offers are small and exact.'));
out.push(hw('Write the **reply** somebody sends to your message (40+ words): accept one offer, refuse the other politely, and make one offer of your own.'));

// ======================= 14.3 =======================
out.push(pb());
out.push(h2('14.3  It might move to Latakia'));
out.push(p('**Function:** saying you are not sure   ·   **Grammar:** _might_ / _might not_; _probably_, _definitely_   ·   **Pronunciation:** weak _might_ in fast speech'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Put these on a line on the board, from **certain yes** to **certain no**: _will · won\'t · might · probably will · probably won\'t · definitely will · might not_.'));
out.push(board('It might move. I\'m not sure yet.', '100% will · 80% probably · 50% might'));
out.push(p('**b**  Which is more sure? **1** _It will rain._ / _It might rain._  **2** _I probably won\'t come._ / _I might not come._  **3** _She\'ll definitely pass._ / _She\'ll probably pass._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What might happen to Rami?   **A** he might lose his job   **B** his site might move to Latakia   **C** he might become a manager'));
out.push(p('**b**  Listen again. **1** How long would he go for?   **2** What has his company **definitely** decided?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.5  Nobody has decided anything', [
  ['Omar', 'You were quiet in there. What\'s happened?'],
  ['Rami', 'Nothing has happened. That is the problem. The site might move to Latakia.'],
  ['Omar', 'Might?'],
  ['Rami', 'Might. They haven\'t decided. They will decide in February, probably. Or in March.'],
  ['Omar', 'And if it moves?'],
  ['Rami', 'Then I go for eight months. Probably eight. It might be a year.'],
  ['Omar', 'So you might be in Latakia for a year, you might be here, and nobody will tell you until March.'],
  ['Rami', 'That is exactly it. The only thing they have definitely decided is that the Damascus office will stay open, so I definitely won\'t lose the job. Everything else is a maybe.'],
  ['Omar', 'That is not nothing. A year ago that sentence would have been the other way round.'],
  ['Rami', 'True. And I probably won\'t say anything to my mother until it\'s certain.'],
  ['Omar', 'She\'ll find out.'],
  ['Rami', 'She definitely will. She always does. But not from me.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – how sure are you?**',
  table(['about this sure', 'yes', 'no'], [
    ['100 %', '_It **will** happen._ · _It **definitely will**._', '_It **won\'t** happen._ · _It **definitely won\'t**._'],
    ['about 80 %', '_It **will probably** happen._ · _It **probably will**._', '_It **probably won\'t** happen._'],
    ['about 50 %', '_It **might** happen._ · _It **may** happen._', '_It **might not** happen._'],
  ], [1, 1.4, 1.4]),
  '**_might_ is a modal:** _might_ + **the bare verb**, for everybody, with no _to_ and no _-s_: _He **might come**._ ~~He might to come.~~ ~~He mights come.~~',
  '⚠ **Word order is where this goes wrong.** _probably_ and _definitely_ go **after _will_** and **before _won\'t_**: _She **will probably** come._ but _She **probably won\'t** come._ Say both twice.',
  '⚠ There is no ~~might will~~ and no ~~will might~~. Choose one: _It **might** rain._ / _It **will** rain._',
  '**Practise:** Rewrite with the word in brackets, in the right place.  1 She will come. (probably)  2 They won\'t finish today. (probably)  3 It will be cold. (definitely)  4 I won\'t be late. (definitely)  5 He will be at home. (might → rewrite the whole verb)',
  '**Useful phrases:** Nobody has decided anything. · They haven\'t decided yet. · It\'s a maybe. · Probably. Or… · The only thing that is certain is… · We\'ll know in March.',
  '**Pronunciation.** 🔊 **Track 14.6** In fast speech _might_ loses its final sound before another consonant: _it migh(t) rain_ /ɪt maɪ reɪn/ · _I migh(t) come_ /aɪ maɪ kʌm/. Listen and repeat, then say them slowly and hear the difference.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks about the situation on the card; B answers using **three** different levels of certainty — one _definitely_, one _probably_, one _might_. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'So what\'s happening with __________?'],
  ['B', 'Nobody has decided anything yet.'],
  ['A', 'But what do you think?'],
  ['B', 'Well — we definitely __________, and we\'ll probably __________.'],
  ['A', 'And __________?'],
  ['B', 'That might __________. It might not. We\'ll know in __________.'],
  ['A', 'And how do you feel about it?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the situations', 'Card B – the situations'], [
  ['your company is deciding about a new office', 'your building is deciding about a new lift'],
  ['certain: the job is safe', 'certain: the work will start this year'],
  ['probable: the decision comes in March', 'probable: it will cost more than they said'],
  ['possible: eight months away from home', 'possible: no lift at all for three months'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write **one** thing that is certain, **one** that is probable and **one** that is only possible.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think of something real in your own life that has **not been decided yet** — at work, at home, at college, in your building, in your family. Tell your partner what is certain, what is probable and what is only possible. Your partner must ask **when** you will know.'));
out.push(p('**b**  Swap. This time your partner must also ask _"And what do you want to happen?"_ — which is a different question from _"What do you think will happen?"_'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rami\'s site might move to Latakia. The thing that is certain is that the Damascus office will stay open, so he definitely won\'t lose his job. It will probably be decided in February, although he says February in that company has meant March twice before. If it moves he will go for eight months, possibly a year. What he wants and what he expects are not the same thing, and he was honest about that, which I thought was brave for half past six on a Thursday._'));
out.push(p('**Listener task:** whose situation has the most **certain** things in it? Whose has the fewest?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message Rami sends to his brother. Answer the questions.'));
out.push(model([
  '**To:** Samer   **Subject:** Latakia — but don\'t tell anybody yet',
  'Samer,',
  'Something might be happening and I want one person to know before it is certain.',
  'The company might move my site to Latakia. If it moves, I go for eight months, possibly a year.',
  'What is certain: the Damascus office will stay open and I definitely won\'t lose the job. That part is signed.',
  'What is probable: they will decide in February. February in this company has meant March twice, so say March.',
  'What is only possible: the eight months, the year, the flat, all of it.',
  'Please don\'t say anything to Mother. She will find out — she definitely will — but not in February, and not from either of us.',
  'Rami',
]));
out.push(item('1', 'Why is Rami telling Samer before anything is certain?'));
out.push(item('2', 'Which part of the situation is signed?'));
out.push(item('3', 'Why does he say "say March"?'));
out.push(writers([
  'A message about something not yet decided: **a warning line** → **what is certain** → **what is probable** → **what is only possible** → **what you want the reader to do**.',
  'The three-level shape is the whole letter. Put each level under its own line and the reader cannot misunderstand you — which is the entire purpose of writing before the news is certain.',
  'Be honest about your own **doubt about the dates**: _February in this company has meant March twice._ That sentence is worth more than a paragraph of hoping.',
  '⚠ Never write a maybe as though it were a fact, and never bury the certain part at the bottom. The reader\'s first question is always _"is your job safe?"_ — answer it in line three.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message about something in your life that is not decided yet (35 words or more).'));
out.push(p('**To:** ______________   **Subject:** ______________   ______________,   Something might ______________.   **What is certain:** ______________.   **What is probable:** ______________ will probably ______________.   **What is only possible:** ______________ might ______________.   Please ______________.   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A greeting, a subject line and a name at the end',
  '_might_ + bare verb · _will probably_ but _probably won\'t_ · _definitely_ in the right place',
  'The three levels are separate, and the certain one comes first',
  'One sentence saying what you want the reader to do (or not do)',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real message (60 words or more) you would send to one person about something that has not been decided in your life. Three levels of certainty, at least one _might not_, and one clear request at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as **the one person they told**. ★ _The line that told me most._  ✓ _One thing I still don\'t know how sure you are about._  ? _When exactly will you know?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read two messages aloud. **Which writer would you want to hear bad news from?** The answer is the one who separated the certain from the possible.'));
out.push(hw('Write **the reply** (40+ words): say what you will do, what you probably won\'t do, and the one thing you promise.'));

// ======================= 14.4 =======================
out.push(pb());
out.push(h2('14.4  Will they tell you before March?'));
out.push(p('**Function:** asking other people about the future   ·   **Grammar:** _will_ questions and short answers   ·   **Pronunciation:** rising intonation in yes/no questions'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher writes one future event on the board — _the end-of-course evening_. In ninety seconds, the class must produce **ten** questions about it. Count them.'));
out.push(board('Will there be food?', 'Questions in 90 seconds: 10 ✓'));
out.push(p('**b**  Make the question. **1** _They will decide in March._ → ______?  **2** _There will be forty people._ → How many ______?  **3** _She won\'t come._ → ______?  **4** _It will cost 50,000._ → How much ______?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is asking the questions?   **A** Lina, about the supplier   **B** Hiba, about the exam   **C** Rana, about the new office'));
out.push(p('**b**  Listen again. **1** What **two** things does Mr Khaled say he does not know?   **2** What does he promise?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.7  Six questions for Mr Khaled', [
  ['Lina', 'Mr Khaled, may I ask you about Türkiye? I have six questions and they are all short.'],
  ['Mr Khaled', 'Six is a lot of short questions. Go on.'],
  ['Lina', 'Will they give us an answer this month?'],
  ['Mr Khaled', 'They will. Probably at the end of it.'],
  ['Lina', 'Will the prices change if they say yes?'],
  ['Mr Khaled', 'They will. Everything changes if they say yes.'],
  ['Lina', 'Will I have to do the supplier list again?'],
  ['Mr Khaled', 'Yes, I\'m afraid you will. All of it.'],
  ['Lina', 'How many suppliers will there be?'],
  ['Mr Khaled', 'I don\'t know. More than now.'],
  ['Lina', 'Will you tell me the day it arrives, or at the end of the week?'],
  ['Mr Khaled', 'The day. I promise you that one.'],
  ['Lina', 'And my last question. Will any of this be decided before I go to Homs on the nineteenth?'],
  ['Mr Khaled', '(pause) I don\'t know, Lina. That is an honest answer and it is the only one I have.'],
  ['Lina', 'Thank you. Four answers and two "I don\'t know"s is better than I expected.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – asking about the future**',
  table(['question', 'short answer'], [
    ['**Will** they answer this month?', 'Yes, they **will**. / No, they **won\'t**.'],
    ['**Will** there **be** enough chairs?', 'Yes, there **will**. / No, there **won\'t**.'],
    ['**Who will** come?  ·  **What will** happen?', '(no short answer — give the information)'],
    ['**When / Where / How much / How many will**…?', '_They\'ll decide in March._ · _About fifty thousand._'],
  ], [1.2, 1.4]),
  '**The shape never changes:** **Will** + person + **bare verb**. ~~Will they to come?~~ ~~Will they comes?~~ ~~Do they will come?~~',
  '⚠ With a question word, _will_ still comes **before** the person: _When **will they** decide?_ not ~~When they will decide?~~',
  '⚠ The short answer keeps _will_ and nothing else: _Yes, I **will**._ ~~Yes, I will come.~~ is not wrong but it is not the answer; ~~Yes, I do.~~ is wrong.',
  '**Softer ways to ask, for work:** _May I ask you about…?_ · _Do you know when…?_ · _Can you tell me whether…?_ · _Will you let me know the day it arrives?_',
  '**Practise:** Make the question.  1 (they / answer / this month) ______?  2 (how many people / come) ______?  3 (there / be / enough chairs) ______?  4 (when / you / know) ______?  5 (she / have to / do it again) ______?',
  '**Useful phrases:** May I ask you about…? · I have six questions and they are all short. · I don\'t know, and that is an honest answer. · I promise you that one. · Will you let me know?',
  '**Pronunciation.** 🔊 **Track 14.8** A yes/no question goes **up** at the end: _Will they answer this month?_ ↗  A question with a question word goes **down**: _When will they answer?_ ↘  Listen and repeat, then ask your partner one of each.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has the card and is the person who knows; B must ask **six** questions — four yes/no and two with question words — and may say "that is six" only when they have an answer or an honest _I don\'t know_ to each. Then swap.'));
out.push(dlg(null, [
  ['B', 'May I ask you about __________? I have six questions.'],
  ['A', 'Go on.'],
  ['B', 'Will __________?'],
  ['A', 'Yes, it will. / No, it won\'t. / I don\'t know.'],
  ['B', 'How many __________?'],
  ['A', '__________.'],
  ['B', 'And will you __________ when you know?'],
  ['A', 'I will. I promise you that one.'],
]));
out.push(table(['Card A – you know about the end-of-course evening', 'Card B – you know about the new timetable'], [
  ['certain: it will be in the big hall, in June', 'certain: it will start in April'],
  ['certain: there will be food; everybody brings one dish', 'probable: Thursday classes will move to Wednesday'],
  ['probable: about sixty people', 'you don\'t know: the time of the new evening class'],
  ['you don\'t know: whether the director will come', 'you don\'t know: whether the rooms will change'],
  ['you don\'t know: whether there will be certificates', 'you promise: you will put it on the door the day you know'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **two** questions that got an honest _I don\'t know_. Were they the most important ones?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Choose one real thing in your life that somebody else decides — your work, your course, your building, your family. Write the **six** questions you would ask the person who knows. Then ask your partner, who answers as that person and must say _I don\'t know_ at least once.'));
out.push(p('**b**  Swap. Then both of you look at your six questions and mark the **one** you would ask if you only had one.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Hiba asked about the teacher-training course. Her six questions were: will it start in September, will it cost more this year, how long will it take, will she be able to work at the same time, who will teach it, and will they tell her before July. She got three real answers and three "I don\'t know"s. The one question she would keep is whether she can work at the same time, because everything else depends on the answer to that._'));
out.push(p('**Listener task:** write down somebody else\'s **one** question. Is it the question you would have chosen for them?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message Lina sends after the conversation. Answer the questions.'));
out.push(model([
  '**To:** Rana   **Subject:** Türkiye — what we know and what we don\'t',
  'Rana,',
  'I asked Mr Khaled this morning, so here is where we are.',
  '**We know:** they will answer this month, probably at the end. Prices will change if the answer is yes. And yes — we will have to do the supplier list again, all of it.',
  '**We don\'t know:** how many suppliers there will be, except "more than now". And we don\'t know whether anything will be decided before the nineteenth.',
  '**He has promised:** he will tell us the day the answer arrives, not at the end of that week.',
  'Will you be here on the nineteenth? If the answer comes while I am in Homs, I would rather one of us saw it the same day.',
  'Lina',
]));
out.push(item('1', 'What **will** happen to the supplier list?'));
out.push(item('2', 'What exactly has Mr Khaled promised?'));
out.push(item('3', 'Why does Lina ask whether Rana will be here on the nineteenth?'));
out.push(writers([
  'A "where we are" message: **where the information came from** → **what we know** → **what we don\'t know** → **what has been promised** → **one question for the reader**.',
  'The three headings do the work. A reader who only has ten seconds reads the three bold words and already knows more than a page of prose would tell them.',
  'Put the **question for the reader at the end**, on its own, so it cannot be missed — and make it a real question, not _let me know your thoughts_.',
  '⚠ Write _we don\'t know_ when you don\'t know. An office where nobody writes that sentence is an office where everybody guesses.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a "where we are" message about something at your work, your college or your home (35 words or more).'));
out.push(p('**To:** ______________   **Subject:** ______________   ______________,   I asked ______________, so here is where we are.   **We know:** ______________ will ______________.   **We don\'t know:** whether ______________.   **______________ has promised:** ______________ will ______________.   Will you ______________?   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A greeting, a subject line and a name at the end',
  '_Will_ + person + bare verb in every question · short answers keep only _will_ / _won\'t_',
  'The three headings, in that order, and the source in the first line',
  'One real question for the reader, at the end, on its own line',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real message (60 words or more) you would send to the person who is waiting with you — about work, a course, a flat, a family decision. Three headings, at least four _will_ sentences, and one question at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as **the person who is waiting with them**. ★ _The thing I am most relieved to know._  ✓ _One thing that should be under a different heading._  ? _Your question — my answer is…_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Swap messages across the room and **answer somebody else\'s final question** in one line. Give it back. Read what you got.'));
out.push(hw('Write **the six questions** you would ask about the end of this course (40+ words), and mark the one you would keep.'));

// ======================= 14.5 =======================
out.push(pb());
out.push(h2('14.5  I\'m going to apply'));
out.push(p('**Function:** talking about plans you have already made   ·   **Grammar:** _going to_ and _will_   ·   **Pronunciation:** _going to_ /ˈɡənə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What have you **already decided** to do before the summer? Not hopes — decisions. Your teacher writes five of them on the board.'));
out.push(board('I\'m going to apply in March.', 'Already decided: 5 · still thinking: lots'));
out.push(p('**b**  _will_ or _going to_? **1** "The bag is heavy." — "I ______ carry it."  **2** "Why have you got the forms?" — "I ______ apply."  **3** "Look at those clouds." — "It ______ rain."  **4** "What do you think about prices?" — "They ______ go up."'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Hiba already decided?   **A** to leave the class   **B** to apply for a teacher-training course   **C** to go to Beirut in the summer'));
out.push(p('**b**  Listen again. **1** When is she going to apply?   **2** What does Lama offer to do, and is it a plan or a decision made now?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.9  The forms on the table', [
  ['Lama', 'What are all these?'],
  ['Hiba', 'Forms. I\'m going to apply for the teacher-training course.'],
  ['Lama', 'Since when?'],
  ['Hiba', 'Since December. I didn\'t say anything because I wanted to look at the forms first, and now I have looked at them and I\'m still going to do it.'],
  ['Lama', 'When?'],
  ['Hiba', 'I\'m going to send everything in March. The course starts in September. I\'m going to keep working until July, and then I\'m going to stop and have six weeks of nothing before it starts.'],
  ['Lama', 'That is a whole plan. That is not a hope, that is a plan.'],
  ['Hiba', 'It took two months to become one.'],
  ['Lama', 'This bit here needs two referees. Who are you going to ask?'],
  ['Hiba', 'Ms Huda, and my old school. I haven\'t asked either of them yet.'],
  ['Lama', 'I\'ll ask Ms Huda for you on Thursday — I see her before you do.'],
  ['Hiba', 'No. Thank you, but no. I\'m going to ask her myself. If I can\'t ask her, I can\'t do the course.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _going to_ (a plan from before) and _will_ (a decision now)**',
  table(['_going to_ — decided **before** now', '_will_ — decided **at this moment**'], [
    ['_I **\'m going to** apply in March._ (the forms are on the table)\n_She **\'s going to** stop working in July._\n_We **\'re not going to** wait._',
     '_"This is heavy." – "**I\'ll** carry it."_ (you decided as you spoke)\n_I **\'ll** ask her for you._\n_**I\'ll** have the chicken, please._'],
  ], [1.3, 1.3]),
  '**Form:** _am / is / are_ + **going to** + bare verb. The question: _**Are** you **going to** apply?_ – _Yes, I am. / No, I\'m not._',
  '⚠ ~~I will going to apply.~~  ⚠ ~~I\'m going to applying.~~  ⚠ ~~I going to apply.~~ → _I **\'m going to apply**._',
  '**The other _going to_:** when you can **see it coming**, use _going to_, not _will_: _Look at those clouds — it\'s **going to** rain._ · _He\'s **going to** drop that._',
  '⚠ A hope is not a plan. _I **want to** do the course_ and _I **hope to** do the course_ are not _I **\'m going to** do the course_. Only say _going to_ when something has actually been decided.',
  '**Practise:** _will_ or _going to_?  1 "There\'s no milk." – "I ______ get some." (deciding now)  2 Why have you got a ticket? Where ______ you ______?  3 I think she ______ pass.  4 Look out — that box ______ fall!  5 We ______ paint the flat in April; we bought the paint last week.',
  '**Useful phrases:** I\'m going to… · Since when? · That is not a hope, that is a plan. · I haven\'t asked yet. · I\'m going to ask her myself.',
  '**Pronunciation.** 🔊 **Track 14.10** Nobody says _going to_ slowly. It becomes /ˈɡənə/: _I\'m gonna apply_ /aɪm ˈɡənə əˈplaɪ/. Listen and repeat — and then write it as **going to**, always.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks about the plan on B\'s card. B answers with _going to_ and the dates. A then makes **one** offer with _\'ll_, which B may accept or refuse. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'What are all these?'],
  ['B', 'I\'m going to __________.'],
  ['A', 'Since when?'],
  ['B', 'Since __________.'],
  ['A', 'When are you going to __________?'],
  ['B', 'In __________. And then I\'m going to __________.'],
  ['A', 'I\'ll __________ for you.'],
  ['B', 'Thank you — / No, I\'m going to __________ myself, because __________.'],
]));
out.push(table(['Card A – your plan', 'Card B – your plan'], [
  ['move to a bigger flat', 'open a small shop with your brother'],
  ['decided: in November', 'decided: last summer'],
  ['give notice in May · move in July', 'find the place in April · open in September'],
  ['not done yet: tell the landlord', 'not done yet: speak to the bank'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **three** things that are already decided and the **one** thing that has not been done yet.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner about something you have **really** decided to do this year, with the dates in order. They must ask: _since when?_, _what haven\'t you done yet?_, and _what will you do if it doesn\'t work?_'));
out.push(p('**b**  Swap. Then each of you say **one** thing you only **hope** to do, and notice how differently it sounds.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Hiba is going to apply for the teacher-training course. She decided in December and she is going to send the forms in March. She is going to keep working until July and then stop. The thing she hasn\'t done yet is ask her two referees, and she is going to ask them herself, although Lama offered. If it doesn\'t work she is going to apply again next year, which she said without any pause at all, so I think she has thought about it._'));
out.push(p('**Listener task:** who in this class has the most complete plan? Which plan has a part missing?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Hiba\'s plan from the club\'s "This year" page. Answer the questions.'));
out.push(model([
  '**THIS YEAR I AM GOING TO** — Hiba',
  'I decided in December and I have told four people, which makes it difficult to stop.',
  '**March.** I am going to send the forms for the teacher-training course. Before that I am going to ask Ms Huda and my old school to be my referees. I am going to ask them myself, in person, even though somebody offered to do it for me.',
  '**July.** I am going to stop working. Six weeks of nothing. I have never had six weeks of nothing.',
  '**September.** If I get a place, the course starts. If I don\'t, I am going to apply again next year, and work on my English in between, because that is where I lost marks last time.',
  'What I am **not** going to do is tell everybody in my family in March. I am going to tell them when there is something to tell.',
]));
out.push(item('1', 'Why does Hiba say it is now difficult to stop?'));
out.push(item('2', 'What is her plan if she does **not** get a place?'));
out.push(item('3', 'What is the one thing she is **not** going to do?'));
out.push(writers([
  'A plan page: **when you decided** → **the steps with their months, in order** → **what happens if it doesn\'t work** → **one thing you are _not_ going to do**.',
  'Put a **month at the top of each step**. A plan written as a paragraph is a wish; a plan written as dates is a plan.',
  'The _if it doesn\'t work_ paragraph is what separates a real plan from an announcement. Write it even when it is uncomfortable.',
  '⚠ The last line — _what I am **not** going to do_ — is the one readers remember, and it is usually the hardest part of the plan. Do not leave it out.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own plan for this year (35 words or more).'));
out.push(p('**THIS YEAR I AM GOING TO ______________**   I decided in ______________.   **______________.** I am going to ______________. Before that I am going to ______________.   **______________.** I am going to ______________.   If ______________, I am going to ______________.   What I am **not** going to do is ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title with the plan in it, and your name',
  '_am / is / are_ + _going to_ + bare verb every time (never ~~will going to~~, never ~~going to applying~~)',
  'At least three months or dates, in order',
  'All three parts: the steps · what happens if it doesn\'t work · the thing you are not going to do',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real plan (60 words or more) for the thing you have actually decided to do this year. Months in order, one _if it doesn\'t work_ paragraph, and one thing you are not going to do.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s plan as **somebody who will ask them about it in June**. ★ _The step that makes this real._  ✓ _One step with no date on it._  ? _What is the first thing you have to do, and when?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the plans on the wall under the months. **Which month is the busiest in this class?** Look at who has written nothing before July, and ask them one question.'));
out.push(hw('Write the **first message** of your plan (40+ words) — the one you have to send to somebody else: asking a referee, telling a landlord, writing to a college.'));

// ======================= 14.6 =======================
out.push(pb());
out.push(h2('14.6  In ten years it will be quieter'));
out.push(p('**Function:** talking about the far future   ·   **Grammar:** _will_ + comparative; _there will be_   ·   **Pronunciation:** stress on the new information'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In ten years, will there be **more** or **fewer** of these in your city? _cars · trees · shops · people · buses · bicycles · bookshops_. Count the class\'s votes on the board.'));
out.push(board('There will be more cars.', 'more cars 14 · fewer bookshops 11'));
out.push(p('**b**  _more_ or _fewer_ or _less_? _______ cars · _______ noise · _______ people · _______ water · _______ shops · _______ traffic_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are they describing?   **A** their own streets in ten years   **B** this language centre in ten years   **C** their own streets now'));
out.push(p('**b**  Listen again. **1** What does Omar think will be better, and why?   **2** What does Nour say will **not** change?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.11  Ten years from now', [
  ['Ms Huda', 'Last question of the evening. Your street, in ten years. One sentence each.'],
  ['Nour', 'There will be more cars and less space, and it will be louder than it is now.'],
  ['Omar', 'I disagree. There will be more cars but it will be quieter, because they will be quieter cars. In ten years half of them won\'t make any noise at all.'],
  ['Hiba', 'There will be fewer shops. The small ones are going one at a time and they don\'t come back.'],
  ['Rami', 'There will be more buildings and they will be taller. I know that one because I have seen the drawings.'],
  ['Ms Huda', 'That is not a prediction, Rami, that is information.'],
  ['Rami', '(laughs) It is the only kind I trust.'],
  ['Lina', 'There will be more trees. Somebody planted eleven on our street in November and nine of them are still alive, which for our street is a record.'],
  ['Nour', 'And one thing will not change. There will still be a man selling coffee on the corner at six in the morning. Different man, same corner, same hour.'],
  ['Ms Huda', 'That is the best sentence of the evening, and I want all of you to notice why. It is the only one with something in it that stays.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the far future**',
  table(['the pattern', 'examples'], [
    ['**there will be** + more / fewer / less + noun',
     '_**There will be more** cars._ · _**There will be fewer** shops._\n_**There will be less** space._ · _**There won\'t be** a bookshop._'],
    ['**it will be** + comparative',
     '_It **will be louder**._ · _It **will be quieter than** it is now._\n_They **will be taller**._'],
    ['**will still** + verb (what does not change)',
     '_There **will still be** a man on the corner._'],
  ], [1.1, 1.7]),
  '⚠ **_fewer_ for things you can count; _less_ for things you cannot:** _fewer **cars**, fewer **shops**, fewer **people**_ · _less **noise**, less **space**, less **water**, less **traffic**_.',
  '⚠ ~~more taller~~ → _**taller**_.  ~~more quiet~~ → _**quieter**_.  One-syllable and _-y_ adjectives take **-er**: _loud → louder · quiet → quieter · tall → taller · easy → easier_. Longer ones take _more_: _more expensive · more difficult_.',
  '⚠ ~~It will be louder that now.~~ → _louder **than** now_. _than_, with an **a**.',
  '**Practise:** Finish the sentence about your city in ten years.  1 There will be more ______.  2 There will be fewer ______.  3 There will be less ______.  4 It will be ______ (noisy) than it is now.  5 There will still be ______.',
  '**Useful phrases:** In ten years… · I disagree. · one at a time · which for our street is a record · One thing will not change. · Different man, same corner.',
  '**Pronunciation.** 🔊 **Track 14.12** Put the stress on the **new** word, not on the whole sentence: _There will be **MORE** cars but it will be **QUIETER**._ Listen and repeat, then say Nour\'s last sentence and find the two words that carry it.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a topic from the card; B gives **three** sentences about it in ten years — one _there will be more / fewer / less_, one _it will be_ + comparative, and one _there will still be_. A disagrees with one. Then swap.'));
out.push(dlg(null, [
  ['A', '__________, in ten years. Three sentences.'],
  ['B', 'There will be more __________.'],
  ['B', 'It will be __________ than it is now.'],
  ['B', 'And there will still be __________.'],
  ['A', 'I disagree with the second one. I think __________.'],
  ['B', 'Why?'],
  ['A', 'Because __________.'],
]));
out.push(table(['Card A – topics', 'Card B – topics'], [
  ['your street', 'this language centre'],
  ['the buses in your city', 'the shops where you buy food'],
  ['books and reading', 'the work you do'],
  ['the weather in the summer', 'the way people learn English'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **one** thing somebody said would **still** be there in ten years. Do you agree?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Your city in ten years. Give your partner **five** sentences: two about what there will be more or less of, two about what will be better or worse, and **one** about something that will not change. Your partner must disagree with exactly one and say why.'));
out.push(p('**b**  Swap partners. Now say the same five sentences about **this class** in ten years, which is harder and usually funnier.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour thinks her street will be louder, with more cars and less space. Omar disagreed with her: he thinks there will be more cars but that it will be quieter, because the cars will be quieter. I think Omar is right about the cars and wrong about the street. The sentence I will remember is Nour\'s last one — that there will still be a man selling coffee on the corner at six in the morning, a different man, the same corner._'));
out.push(p('**Listener task:** write the prediction you would like to be wrong about.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page from the club noticeboard. Answer the questions.'));
out.push(model([
  '**OUR STREET IN TEN YEARS** — four members, four streets',
  '**Nour · Mezzeh.** There will be more cars and less space. It will be louder than it is now. The small garden at the end will be a building, and everybody knows it and nobody says it.',
  '**Omar · Aleppo.** There will be more cars and it will be **quieter**, because in ten years half the cars won\'t make a sound. The city I grew up in was quieter than this one and it had fewer cars, so I have stopped believing that more cars means more noise.',
  '**Lina · Jaramana.** There will be more trees. Somebody planted eleven in November and nine are alive, which on our street is a record. In ten years there will be nine trees, or eleven, or none, and I know which I am betting on.',
  '**Rami · Homs.** There will be more buildings and they will be taller. This is not a prediction. I have seen the drawings, and the drawings are already three years old.',
]));
out.push(item('1', 'Why does Omar no longer believe that more cars means more noise?'));
out.push(item('2', 'How many of the eleven trees are still alive?'));
out.push(item('3', 'Why does Rami say his is not a prediction?'));
out.push(writers([
  'A "ten years" note: **the place and your name** → **more / fewer / less** → **the comparative** → **the one detail you actually know** → **what stays**.',
  'Everybody writes the same first two sentences. The note becomes yours at the **detail**: _eleven trees, nine alive_ · _the drawings are three years old_. Find your number.',
  'Use _fewer_ for counted things and _less_ for the rest, and read it aloud — the ear catches _less cars_ long before the eye does.',
  '⚠ Avoid the big empty prediction (_the world will change · technology will be better_). A street you have walked down is worth ten of them.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own "ten years" note (35 words or more).'));
out.push(p('**______________ · ______________.**  There will be more ______________ and fewer ______________.  It will be ______________ than it is now.  ______________, which ______________.  And there will still be ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The place and your name at the top',
  '_there will be_ · _fewer_ for countable, _less_ for uncountable · comparative + _than_',
  'At least one number you really know',
  'All three parts: more / fewer · better or worse · the thing that stays',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about **your street, or your city, in ten years** (60 words or more): what there will be more and less of, what will be better and worse, the one thing you know for certain, and the one thing that will still be there.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s note as **somebody who has never been to that street**. ★ _The detail that put me there._  ✓ _One sentence anybody could have written — replace it._  ? _Will you still be living there?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Collect the notes into one class page: **Our streets in ten years.** Put it in the envelope with the predictions. **Whose street would you most like to see in ten years?**'));
out.push(hw('Write the same note about **your street ten years ago** (40+ words): what there was more of, what was better, and what is still there.'));

// ======================= 14.7 =======================
out.push(pb());
out.push(h2('14.7  Review & Mediate: What does the weather page say?'));
out.push(p('**Function:** explaining a weather page and a travel warning   ·   **Recycling:** Units 1–14   ·   **Exam practice:** A2 Key Reading Part 2, Writing Part 6, Listening Part 5'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 14 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** He will to come on Friday.  **2** I think it won\'t rain.  **3** She probably will not come. _(word order)_  **4** It might to be cold.  **5** I will going to apply in March.  **6** There will be less cars and it will be more quiet.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the weather page and the warning that Maya finds before her trip to Latakia.'));
out.push(box(null, [
  '**WEATHER · COASTAL ROAD · FRIDAY TO SUNDAY**',
  '**Friday** — Heavy rain from 06:00. Max 11°C. Strong wind on high ground.',
  '**Saturday** — Rain easing by midday. Max 13°C. Cloudy.',
  '**Sunday** — Dry and bright. Max 16°C. Light wind.',
  '**⚠ TRAVEL WARNING — issued Thursday 17:00**',
  'Drivers are advised not to use the mountain road on **Friday morning**. Surface water and poor visibility are expected between 06:00 and 12:00.',
  'The coastal road will remain open. Delays of up to **90 minutes** are likely.',
  'Buses will run, but services after 20:00 on Friday **may be cancelled** at short notice.',
  'This warning will be reviewed at **12:00 on Friday** and updated on this page.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Maya explains the page to her mother, who does not read English. Which day does her mother want her to travel?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.13  Explaining the weather page', [
  ['Mother', 'What does it say? All I can see is numbers.'],
  ['Maya', 'It\'s three days, side by side. Friday, Saturday, Sunday. The numbers are how warm it will be — eleven, thirteen, sixteen. So it will get warmer every day.'],
  ['Mother', 'And the rain?'],
  ['Maya', 'Friday is the bad one. Heavy rain from six in the morning, and wind up on the high ground. Saturday it stops around the middle of the day. Sunday is dry.'],
  ['Mother', 'And this part, with the triangle?'],
  ['Maya', 'That\'s a warning. It\'s not an order — it says drivers are advised not to use the mountain road on Friday morning. Advised. Nobody will stop you; they are telling you it would be stupid.'],
  ['Mother', 'So the road is closed.'],
  ['Maya', 'No — and this is the part people get wrong. The mountain road is the one they are warning about. The coastal road will stay open. It will just be slow: it says delays of up to an hour and a half.'],
  ['Mother', 'And the buses?'],
  ['Maya', 'The buses will run. But it says services after eight at night on Friday may be cancelled. _May._ Which means they don\'t know yet, and they won\'t tell you until the last minute.'],
  ['Mother', 'Then you are not travelling on Friday.'],
  ['Maya', 'I was going to say Saturday morning.'],
  ['Mother', 'Sunday. It says dry and bright. I can read sixteen.'],
]));
out.push(sp());
out.push(box('Language box – explaining a page of predictions and warnings', [
  'Give the **shape first**: _It\'s three days side by side, and the numbers are how warm it will be._ Then go day by day.',
  'Translate the **strength** of a warning, which is where the meaning lives: _advised not to_ = they are not stopping you, they are telling you it would be stupid. _may be cancelled_ = they do not know yet.',
  'Say clearly **which thing** the warning is about: _the **mountain** road is the one they are warning about; the **coastal** road will stay open._ Most mistakes with a warning are mistakes about **which**.',
  'Turn the numbers into time people feel: _delays of up to 90 minutes_ → _it will just be slow — an hour and a half._',
  'Say when the page will **change**: _This will be reviewed at twelve on Friday_ → _so look again at midday._',
  '**Useful phrases:** It\'s … side by side. · The numbers are… · That\'s a warning, not an order. · This is the part people get wrong. · They don\'t know yet. · Look again at…',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has one of the notices below and does **not** show it. A explains it to B and C, who have not seen it and ask about anything unclear. B and C then say what they will do. Change roles with the other notice.'));
out.push(table(['Notice A – at the language centre', 'Notice B – at the bus garage'], [
  ['BUILDING WORK — MARCH', 'TICKETS — NEW SYSTEM FROM 1 APRIL'],
  ['The lift will be out of use from 2 to 20 March.', 'From 1 April all tickets must be bought before boarding.'],
  ['Evening classes will move to the ground floor.', 'Tickets will no longer be sold on the bus.'],
  ['Room numbers will stay the same on the timetable.', 'Prices will not change until June.'],
  ['The car park may be closed at short notice.', 'The office will open at 06:00 from April (now 06:30).'],
  ['This notice will be updated on 1 March.', 'Ask at the window if you are not sure.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write **two** things that will **definitely** happen and **one** that only **may** happen.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a **real** notice, forecast or warning in your own life — at work, at your building, on your phone, at a station, from a school. Explain it to your partner so completely that they could act on it without seeing it. They must ask about the **strength** of each statement: is it certain, likely, or only possible? Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Lina explained the notice in her building about the water. It says the water will be off on Tuesday from eight until two, and it says it may also be off on Wednesday, but they have not decided. The part she had to explain to me twice is that "may" is not the same as "will" — the Tuesday is certain and the Wednesday is not. It also says that the building will tell everybody by a note on the door, which she says means nothing, because the last note was put up on the morning it happened. So I decided that if I lived there I would fill something on Monday night and not wait for a note._'));
out.push(p('**Listener task:** did they tell you the **strength** of each statement? Which part of the notice would you have misunderstood on your own?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 2)', 7));
out.push(p('Read about three places to go in the spring. For questions **1–6**, write **A**, **B** or **C**.'));
out.push(model([
  '**THREE DAYS OUT THIS SPRING**',
  '**A · Bloudan.** It will be cold until the end of April, so take a coat even on a bright day. The buses leave every hour and the journey takes about an hour and a half. There is nowhere to buy food after four in the afternoon, so take something with you. Best in May, when the weather will be warmer and the road will be clear.',
  '**B · Maaloula.** Warmer than Bloudan and only an hour away, but the last bus back leaves at five and it is often full. If you miss it there is no other way home. Go early. There is a small café by the steps that opens at eight and will make you breakfast for very little money.',
  '**C · The lake road.** The easiest of the three — forty minutes, buses all day, and the last one back is at nine in the evening. It will probably be busy on a Friday. There is nothing to see except water and trees, which some people think is the point.',
]));
[
  '**1**  Which place has the **longest** journey?     **A** Bloudan   **B** Maaloula   **C** the lake road',
  '**2**  Where should you take your own food?     **A** Bloudan   **B** Maaloula   **C** the lake road',
  '**3**  Which place is the most difficult to get home from?     **A** Bloudan   **B** Maaloula   **C** the lake road',
  '**4**  Where can you eat early in the morning?     **A** Bloudan   **B** Maaloula   **C** the lake road',
  '**5**  Which place will probably be crowded at the end of the week?     **A** Bloudan   **B** Maaloula   **C** the lake road',
  '**6**  Which place does the writer say is better later in the spring?     **A** Bloudan   **B** Maaloula   **C** the lake road',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message to a friend who wants to travel to the coast on Friday (35 words or more). Use the weather page and the warning above.'));
out.push(p('Hi ______!   Don\'t travel on ______________.   It will ______________ from ______________, and there\'s a warning about ______________. It says drivers ______________. The coastal road ______________, but ______________.   The buses ______________, but after ______________ they ______________.   Come on ______________ instead — it will be ______________ and ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A greeting, an ending, and two short paragraphs',
  '_will_ for what is certain · _may / might_ for what is not · _probably_ and _definitely_ in the right place',
  'At least two linkers (_and · but · because · so_)',
  'All three content points: the weather · the warning and what it really means · what your friend should do instead',
]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 10));
out.push(box(null, [
  'Your English friend **Sam** is going to visit your city next month and has asked what it will be like.',
  'Write an email to Sam.  In your email:  •  say **what the weather will be like**  •  say **one thing he should bring**  •  tell him **one thing you are going to do together**.',
  'Write **25 words or more**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(pb());
out.push(stage('✓', 'Unit 14 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I think it ___ rain tomorrow.   a) will   b) wills   c) will to',
  '2  "This bag is heavy." – "I ___ carry it."   a) am going to   b) will   c) carry',
  '3  She ___ come, but she isn\'t sure.   a) will   b) might   c) might to',
  '4  He ___ be late — he never is.   a) probably won\'t   b) won\'t probably   c) don\'t probably',
  '5  Why have you got the forms? What ___ do?   a) will you   b) are you going to   c) you are going to',
  '6  ___ they tell you before March?   a) Do   b) Will   c) Are',
  '7  There will be ___ shops in ten years.   a) less   b) fewer   c) fewest',
  '8  It will be ___ than it is now.   a) more quiet   b) quieter   c) quietest',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 5 style – matching).** 🔊 **Track 14.14** Ms Huda says what each person has told her about this year. Write a letter **A–G**. There are **two** extra letters.'));
out.push(table(['People', 'This year'], [
  ['1  Rami ___', 'A  is going to apply for a course'],
  ['2  Hiba ___', 'B  might have to work in another city'],
  ['3  Lina ___', 'C  will probably move to a bigger flat'],
  ['4  Omar ___', 'D  is waiting for a decision from another country'],
  ['5  Nour ___', 'E  will definitely finish a training course'],
  ['', 'F  is going to buy a car'],
  ['', 'G  might stop studying English'],
], [1, 2]));
out.push(dlg('Track 14.14  Audio script (read after the check)', [
  ['Ms Huda', 'Before we finish, here is what you have all told me about this year. Rami still does not know where he will be working — the site might move to Latakia, and nobody will decide before February. Hiba has the forms on her table and she is going to send them in March, for the teacher-training course. Lina is waiting, and so is her whole office, for an answer from a supplier in Türkiye; it will come this month. Omar told me he will probably move — a bigger flat, nearer the workshop, before the summer. And Nour starts her training next month and she will definitely finish it in April, because she has already seen the dates on the wall.'],
]));
out.push(p('**C  Writing.** Somebody is going to visit your city for the first time next month. Write them a message (40+ words): what the weather will probably be like, one thing that might be difficult, one thing you are going to do together, and one thing you promise.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 14)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ make a prediction with _will_ and _won\'t_',
  '☐ offer to do something on the spot with _I\'ll_',
  '☐ say how sure I am with _probably_, _definitely_ and _might_',
  '☐ put _probably_ and _definitely_ in the right place',
  '☐ ask questions about the future',
  '☐ tell the difference between a plan (_going to_) and a decision (_will_)',
  '☐ talk about the far future with _there will be_ and comparatives',
  '☐ explain a weather page and a warning to somebody who cannot read it',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 15 – PROBLEMS AND SOLUTIONS', [
  'Unit 14 was about what you think **will** happen. Unit 15 is about what happens **if** it does: _If the lift breaks, we\'ll move downstairs._',
  'Before the next lesson: find **one** thing in your building, your work or your home that might go wrong this month, and come with one sentence about what you will do if it does.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Unit 14 · Student\'s Book');
