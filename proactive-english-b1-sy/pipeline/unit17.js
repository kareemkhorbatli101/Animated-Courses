// Proactive English B1 · Syria Edition · Book 2 · Unit 17 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';
const slip = '**Peer review.** No stems. Write your partner **three sentences in English**: what worked, the one place you would change, and the question you are left with.';

out.push(h1('Unit 17  Habits Past and Present'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**17.1**  say what you used to do',
  '**17.2**  say what repeatedly happened',
  '**17.3**  say what you are accustomed to',
  '**17.4**  say what you are becoming accustomed to',
  '**17.5**  describe how a habit changed and why',
  '**17.6**  write about a change in your own life',
  '**17.7**  Review & Mediate: explain how something used to be done here',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**Four forms that look the same and are not.** _I used to work nights_ (I do not now) · _I would wait by the gate_ (it happened again and again) · _I am used to nights_ (they are normal to me) · _I am getting used to days_ (they are becoming normal). Students mix these more often than any other four forms in the language, and the mixing changes what the sentence claims.',
  '**The difference that matters most:** _I used to_ is about **the past**, and _I am used to_ is about **now**. One letter, one word, and a sentence about nine years ago becomes a sentence about this morning.',
  '**17.7 needs a person, not a document.** The cycle is about how something used to be done where you work — and the only reliable source is the oldest person who was there. Most reasons for most rules are in one person\'s memory and have never been written down, and when that person leaves the reason leaves with them.',
  '**And 17.6 is the 3.6 page again, two years on.** In Unit 3 you wrote about the day you did something you had never done before. Now you write about a change: then, now, and the turn between. Find your 3.6 page before you start.',
], C.lyellow, C.orange));

// ======================= 17.1 =======================
out.push(pb());
out.push(h2('17.1  We used to sign at the bus'));
out.push(p('**Function:** saying what you used to do   ·   **Grammar:** _used to_ + infinitive   ·   **Pronunciation:** _used to_ as /ˈjuːstə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out the one thing you brought that used to be done differently where you work. Your teacher writes the eleven on the board in two columns — **then** and **now** — and then asks one question about each: _does anybody know why it changed?_'));
out.push(board('We used to sign the sheet at the bus. We sign it at the window now.', 'used to + infinitive'));
out.push(p('**b**  _Used to_, or the simple past? **1** _I ___ work nights for nine years._  **2** _I ___ a mistake on Tuesday._  **3** _We ___ sign at the bus until 2019._  **4** _He ___ me in May that the yard was outside._  **5** _She ___ keep the notes in a box._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What used to happen at the depot, and when did it change?   **A** the sheet was collected at the bus until 2019   **B** there was no sheet until 2019   **C** the drivers used to write their own sheets'));
out.push(p('**b**  Listen again. **1** What does Tareq say about the reason for the change?   **2** What does Ms Huda say about a rule whose reason is in one person\'s memory?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.1  Until 2019', [
  ['Tareq', 'I have found out something and I am still annoyed about it. The check sheet did not always go to the office window. Until 2019 the sheets were collected at the bus, by the man who opened the gate, at the end of the day.'],
  ['Nour', 'Which is exactly what you asked for in your letter in September.'],
  ['Tareq', 'Which is exactly what I asked for in September and what I have been told twice is impossible. I asked for a thing that used to happen, and nobody in that office knows it used to happen, because everybody who was there in 2019 has gone except one man.'],
  ['Ms Huda', 'Who is he?'],
  ['Tareq', 'Abu Khaldoun. He is sixty-three and he has worked in that yard since 1989 and he does not drive any more, he hands out the keys. I asked him on Tuesday and he told me in about ninety seconds what I have spent two months writing letters about.'],
  ['Jad', 'What did he say?'],
  ['Tareq', 'He said: we used to collect them at the bus. The man on the gate would take them as the drivers came in, and he would put them in a tin, and on a Thursday the clerk would come out to the gate and take the tin. Then in 2019 the sheets started going to the window.'],
  ['Lubna', 'And why?'],
  ['Tareq', 'That is the part nobody will like. He says there was a morning in 2019 when a sheet went missing and a bus went out with a cracked mirror and somebody from the directorate came, and after that the clerk said the sheets had to come to the window so that he could see them signed. Abu Khaldoun thinks it lasted about a month as a rule and then became the way it is done.'],
  ['Omar', 'Is that written down anywhere?'],
  ['Tareq', 'There is no paper. I asked. There is a man of sixty-three in a yard, and there is me, and from Tuesday there are two of us who know.'],
  ['Ms Huda', 'Say the sentence you said to me before the lesson.'],
  ['Tareq', 'I have been asking for a change for two months and what I was actually asking for was 2019. If I had known that in September, my letter would have been four lines long and it would have had his name in it.'],
  ['Ms Huda', 'And this is the unit, in one case. Every workplace has rules whose reasons are in one person\'s memory and have never been written down — and when that person goes, the rule stays and the reason leaves, and after that nobody can change it, because you cannot argue with a rule that has no reason attached to it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _used to_ + infinitive**',
  table(['you say', 'what it means'], [
    ['_We **used to** collect them at the bus._', 'a past habit or state that has stopped'],
    ['_I **used to** work nights._', 'I do not now — the contrast is the point'],
    ['_He **didn\'t use to** come out to the gate._', 'negative: _didn\'t use to_, no _d_'],
    ['_**Did** you **use to** sign at the bus?_', 'question: _did … use to_'],
    ['_I **worked** nights for nine years._', 'a finished fact, no contrast with now'],
  ], [2.4, 2.2]),
  '**_Used to_ always carries a contrast with now.** If there is no contrast, use the simple past: _I worked nights for nine years_ is a fact; _I used to work nights_ tells you I do not.',
  '**It is for habits and states, not for single events.** ⚠ ~~I used to make a mistake on Tuesday~~ → _I made a mistake on Tuesday_. One Tuesday is not a habit.',
  '⚠ ~~I didn\'t used to~~ · ~~did you used to~~ → _didn\'t use to_, _did you use to_ — no _d_ after _did_. In speech they sound identical, which is why the written form has to be learnt separately.',
  '⚠ ~~I am used to work nights~~ means something completely different (17.3). _Used to_ + infinitive = the past. _Be used to_ + _-ing_ = now.',
  '**And the thing this cycle is really about:** when you ask for a change, find out whether you are asking for something that **used to** happen. A request to go back is a different document from a request to invent, and it has a name and a year in it.',
  '**Useful phrases:** I asked for a thing that used to happen · there is no paper · from Tuesday there are two of us who know · what I was actually asking for was 2019.',
  '**Practise:** Say each as _used to_ and then say what replaced it and when.  1 how a form was collected  2 how somebody was asked for something  3 where a thing was kept  4 who decided something  5 how long something took',
  '**Pronunciation.** 🔊 **Track 17.2** _Used to_ is /ˈjuːstə/ — one piece, with no /d/ sound at all — and it is unstressed: the weight goes on the verb after it. _We **used to** colLECT them at the bus._ Listen to eight and write _used to_ or _didn\'t use to_.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the thing from the card. B says how it used to be done, what replaced it, and when — and then the question that matters: _does anybody know why?_ A asks: _who is the oldest person who was there?_ Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'We used to __________. Now we __________, and it changed in __________.'],
  ['A', 'Does anybody know why?'],
  ['B', '__________.'],
  ['A', 'Who is the oldest person who was there?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the things', 'Card B – the things'], [
  ['how a form is collected or handed in', 'where a key or a record is kept'],
  ['how you ask for something you need', 'who signs for a thing'],
  ['how long a job is allowed to take', 'when a shift starts or ends'],
  ['how a fault is reported', 'who is told when something goes wrong'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight _why_ answers. In a first run six of the eight are _nobody knows_ — and in two or three of those, somebody in the room can name the oldest person who was there and has never asked them.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own then-and-now and say it properly: what used to happen, what happens now, the year it changed, and whether you are asking for something that used to be done.'));
out.push(p('**b**  Swap. Then each of you name the person you are going to ask, and when.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Tareq has found something out and is still annoyed about it. The check sheet did not always go to the office window: until 2019 the sheets were collected at the bus, by the man who opened the gate, at the end of the day — which is exactly what he asked for in September and what he has been told twice is impossible. He asked for a thing that used to happen, and nobody in that office knows it used to happen, because everybody who was there in 2019 has gone except one man: Abu Khaldoun, who is sixty-three, has worked in that yard since 1989 and now hands out the keys. Tareq asked him on Tuesday and was told in about ninety seconds what he has spent two months writing letters about. Abu Khaldoun said: we used to collect them at the bus — the man on the gate would take them as the drivers came in and put them in a tin, and on a Thursday the clerk would come out to the gate and take the tin. Then in 2019 the sheets started going to the window. And the reason is the part nobody will like: there was a morning in 2019 when a sheet went missing and a bus went out with a cracked mirror and somebody from the directorate came, and after that the clerk said the sheets had to come to the window so that he could see them signed. Abu Khaldoun thinks it lasted about a month as a rule and then became the way it is done. Omar asked whether it is written down anywhere, and Tareq said there is no paper: there is a man of sixty-three in a yard, and there is him, and from Tuesday there are two of them who know. And he said he has been asking for a change for two months when what he was actually asking for was 2019 — if he had known that in September, his letter would have been four lines long and would have had Abu Khaldoun\'s name in it._'));
out.push(p('**Listener task:** write one thing from this room that used to be done differently, and the year it changed.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Tareq sends instead of the one he was going to send. Answer the questions.'));
out.push(model([
  '**TO: the depot manager · 18 November**',
  '**Subject:** The check sheets, and what was done before 2019',
  'I wrote to you in September asking that the vehicle check sheet be collected from the bus instead of from the office window, and I was told that this is not possible. This letter is four lines longer than that one and it is about a different thing.',
  '**What used to happen.** Until 2019 the sheets were collected at the bus. The man on the gate took them from the drivers as they came in and put them in a tin, and the clerk came out to the gate on a Thursday and took the tin. I did not know this in September. I have been asking for something new when I was asking for something old.',
  '**Who told me.** Abu Khaldoun, who has been in that yard since 1989 and now hands out the keys. He told me in about ninety seconds, on the nineteenth of November, and he is the only person left in the yard who was there in 2019.',
  '**Why it changed, so far as anybody knows.** He says a sheet went missing on a morning in 2019, a bus went out with a cracked mirror, and somebody came from the directorate. After that the clerk required the sheets at the window so that he could see them signed. Abu Khaldoun believes it was meant to last about a month.',
  '**What I am not claiming.** I am not claiming that the old way is better because it is older, and I am not claiming the 2019 decision was wrong. A missing sheet and a cracked mirror is a serious morning and I would have done the same thing that week.',
  '**What I am asking for.** That the sheets be collected at the bus again, by the man on the gate, with the tin — and that if the answer is still no, somebody writes down why, in one line, so that the next driver who asks is told a reason and not told that it is impossible.',
  '**And one thing that is not a request.** There is no paper anywhere in that yard about any of this. Abu Khaldoun is sixty-three. When he goes, the reason for a rule that affects every driver every day goes with him, and I would ask somebody to spend an hour with him with a notebook before that happens.',
]));
out.push(item('1', 'What does he say he was asking for in September, and what was he actually asking for?'));
out.push(item('2', 'What does he refuse to claim about the 2019 decision?'));
out.push(item('3', 'What is the thing at the end that is not a request?'));
out.push(writers([
  'A letter about something that used to be done: **what you asked for before and what you were told** → **what used to happen, in the past habit form** → **who told you, with a name and a date** → **why it changed, so far as anybody knows** → **what you are not claiming** → **what you are asking for** → **and the thing that is not a request**.',
  'Name the person and the day. _Abu Khaldoun, who has been in that yard since 1989 … told me in about ninety seconds, on the nineteenth of November._ A reason with a name on it cannot be answered with _it has always been like that_.',
  'Refuse the easy argument: _I am not claiming the old way is better because it is older_ — and concede the 2019 morning, because a missing sheet and a cracked mirror was a serious thing and saying so costs nothing.',
  '⚠ End with the request that is not for you: an hour with the oldest man in the yard and a notebook. That paragraph is the most valuable thing in the letter and it will outlast the sheet.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter about something that used to be done differently where you work (60 words or more).'));
out.push(p('**TO:** ______________   **Subject:** ______________, and what was done before ______________   I wrote to you in ______________ asking that ______________, and I was told ______________.   **What used to happen.** Until ______________, ______________. I did not know this. I have been asking for something new when I was asking for something old.   **Who told me.** ______________, who has been ______________ since ______________. He told me on ______________, and he is the only person left who ______________.   **Why it changed, so far as anybody knows.** ______________. After that ______________. He believes it was meant to ______________.   **What I am not claiming.** I am not claiming that the old way is better because it is older, and I am not claiming ______________.   **What I am asking for.** That ______________ — and that if the answer is still no, somebody writes down why, in one line.   **And one thing that is not a request.** ______________ is ______ years old. When he goes, ______________ goes with him.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_used to_ + infinitive for the old habit, with the year it stopped',
  'The name of the person who told you, and the day',
  'A concession about the decision that changed it',
  'A request for a reason in one line — and the hour with a notebook',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "why it changed, so far as anybody knows" paragraph only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (140 words or more) about one thing that used to be done differently where you work. Then write underneath the name and age of the oldest person who was there, and whether you have ever asked them anything.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s letter as **the person who would have to say yes or no to it**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the room are asking for something that used to be done?** Count. Then the other count: how many have a person of sixty or over in their workplace whom nobody has ever asked anything? The two numbers together are the argument for the whole unit.'));
out.push(hw('Ask the oldest person at your work how one thing used to be done, and why it changed (60+ words). Write down what they said, with their name and the date, and give them a copy.'));

// ======================= 17.2 =======================
out.push(pb());
out.push(h2('17.2  He would sweep the floor at seven'));
out.push(p('**Function:** saying what repeatedly happened   ·   **Grammar:** _would_ for a past habit   ·   **Pronunciation:** the contracted _\'d_ and the full _would_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: one thing a person used to do, again and again, that you watched. Not a rule and not a fact — a person, and a repeated action. _My father would read the paper standing up._ Your teacher writes the verbs only.'));
out.push(board('He would sweep the floor at seven, and he would never say why.', 'would + infinitive, for a repeated past'));
out.push(p('**b**  _Would_, or _used to_, or both? **1** _He ___ sweep the floor at seven._  **2** _There ___ be a tin on the gate._  **3** _She ___ come out on a Thursday._  **4** _I ___ work nights._  **5** _We ___ have two trolleys._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Whose habits is Bassel describing, and what has he found in a drawer?'));
out.push(p('**b**  Listen again. **1** What three things did his father do every morning?   **2** What does Ms Huda say _would_ cannot be used for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.3  The things my father did every morning', [
  ['Bassel', 'I was looking for the 2019 paper invoices and I found a notebook of my father\'s in the bottom of the big drawer. Nineteen years I have had that drawer and I have never emptied it.'],
  ['Ms Huda', 'What is in it?'],
  ['Bassel', 'Nothing useful. Prices from 2003, three telephone numbers and a list of names I do not know. But holding it I remembered the things he did every morning, which I have not thought about for years.'],
  ['Nour', 'Tell us three.'],
  ['Bassel', 'He would come in at ten past six, and he would sweep the floor before he did anything else — the whole floor, every morning, and we had a boy who could have done it. He would put the kettle on and then he would walk round both machines with his hand on them, and he would not speak to anybody until he had done it.'],
  ['Lubna', 'Why the hand on the machines?'],
  ['Bassel', 'I asked him once, when I was about twenty-two, and he said: because a bearing tells you a week before it goes, and it tells your hand and not your ear. I thought it was an old man being an old man. I have had the older machine serviced twice this year and both times the engineer found a bearing starting, and both times he asked me whether I had noticed any vibration, and both times I said no, because I do not touch them.'],
  ['Jad', 'Do you sweep the floor?'],
  ['Bassel', 'No. I pay the boy, which is what I decided at twenty-three when it became my shop, and I have never thought about it again until Tuesday. And I used to think the sweeping was about the floor.'],
  ['Ms Huda', 'What was it about?'],
  ['Bassel', 'It was about being in the shop for twenty minutes with nobody talking to him before the work started. He would sweep, and he would look at everything while he swept, because you cannot sweep round a thing without seeing it.'],
  ['Ms Huda', 'Now the grammar, because there is one thing _would_ cannot do. Bassel, say the sentence about the two machines.'],
  ['Bassel', 'There used to be two machines when he started, and the older one was already old.'],
  ['Ms Huda', 'Not _there would be_. **_Would_ is for repeated actions and not for states.** _He would sweep_ — an action, again and again. _There used to be two machines_ — a state, and it takes _used to_. That is the whole difference and it is the commonest error in the cycle.'],
  ['Bassel', 'And I am going to do one of the three. Not the sweeping and not the kettle. From Monday I walk round both machines with my hand on them before I speak to anybody, which will take four minutes and which my father did every morning for thirty-one years.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _would_ for a past habit**',
  table(['you say', 'what it does'], [
    ['_He **would sweep** the floor at seven._', 'a repeated past **action**'],
    ['_She **would come** out on a Thursday._', 'a regular event, again and again'],
    ['_He **wouldn\'t speak** to anybody until he had._', 'a repeated refusal'],
    ['_There **used to be** two machines._', '⚠ a **state** — _would_ is impossible here'],
    ['_I **used to** work nights._', 'a state or situation: _used to_ only'],
  ], [2.4, 2.2]),
  '**_Would_ is for repeated actions; _used to_ works for actions **and** states.** ⚠ ~~There would be a tin on the gate~~ · ~~I would be a nurse~~ · ~~We would have two trolleys~~ — all states, all _used to_.',
  '**_Would_ needs a context in the past already established.** It cannot open a story: start with _used to_ or a date, and then _would_ carries the rest. _Until 2019 the sheets were collected at the bus. The man on the gate **would** take them, and the clerk **would** come out on a Thursday._',
  '**It is the form of remembering a person**, which is why it is warmer than _used to_ and why it comes out when somebody is describing a father, a teacher, an old colleague. Use it when the person matters; use _used to_ when the practice matters.',
  '⚠ _would_ also means other things — a conditional (8.2), a polite request (6.1), a future in the past (10.1). Context does the work, and in writing a date or an _until_ makes it unambiguous.',
  '**Useful phrases:** nineteen years I have had that drawer and I have never emptied it · a bearing tells you a week before it goes, and it tells your hand and not your ear · I used to think the sweeping was about the floor · you cannot sweep round a thing without seeing it.',
  '**Practise:** Describe a person\'s three repeated actions with _would_, and then one state with _used to_.  1 somebody who taught you the work  2 a parent or an uncle  3 the person who had your job before you  4 somebody who has left your workplace  5 yourself, ten years ago',
  '**Pronunciation.** 🔊 **Track 17.4** In connected speech _would_ contracts to /d/ — _he\'d sweep, he\'d put the kettle on_ — and the full form is kept for contrast or emphasis: _he **would** not speak to anybody._ Listen to eight and write the verbs only; four are contracted and four are full.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the person from the card. B describes three things that person would do, again and again, and then one thing that used to be true — a state. A asks the question the cycle is for: _which of the three do you do?_ Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'He/She would __________, and would __________, and would never __________.'],
  ['B', 'And there used to be __________.'],
  ['A', 'Which of the three do you do?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the people', 'Card B – the people'], [
  ['the person who taught you the work', 'a parent, an uncle or an aunt'],
  ['the person who had your job before you', 'somebody who has left your workplace'],
  ['a teacher you remember', 'yourself, ten years ago'],
  ['the oldest person where you work', 'somebody whose habits you copied without deciding to'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight answers to _which of the three do you do?_ Then the harder count: how many of the eight are habits the speaker copied **without ever deciding to**? In a first run it is most of them, and almost nobody has ever noticed.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Describe three repeated actions of somebody who shaped how you work, and say what each one was **for** — if you know. Then say which ones you kept and which you dropped, and when you dropped them.'));
out.push(p('**b**  Swap. Then each of you say which dropped habit the other should probably take back, and why.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Bassel was looking for the 2019 paper invoices and found a notebook of his father\'s in the bottom of the big drawer — nineteen years he has had that drawer and has never emptied it. There is nothing useful in the notebook: prices from 2003, three telephone numbers and a list of names he does not know. But holding it he remembered the things his father did every morning. He would come in at ten past six and he would sweep the floor before anything else — the whole floor, every morning, and they had a boy who could have done it. He would put the kettle on, and then he would walk round both machines with his hand on them, and he would not speak to anybody until he had. Lubna asked why the hand on the machines, and Bassel said he asked his father once, at about twenty-two, and was told: because a bearing tells you a week before it goes, and it tells your hand and not your ear. He thought it was an old man being an old man — and he has had the older machine serviced twice this year, and both times the engineer found a bearing starting, and both times asked whether he had noticed any vibration, and both times he said no, because he does not touch them. Jad asked whether he sweeps the floor, and he said no: he pays the boy, which is what he decided at twenty-three when it became his shop, and he has never thought about it again until Tuesday — and he used to think the sweeping was about the floor. It was about being in the shop for twenty minutes with nobody talking to him before the work started: he would sweep, and he would look at everything while he swept, because you cannot sweep round a thing without seeing it. Then the grammar: not "there would be two machines" — would is for repeated actions and not for states, so "there used to be two machines". And Bassel is going to do one of the three: from Monday he walks round both machines with his hand on them before he speaks to anybody, which takes four minutes and which his father did every morning for thirty-one years._'));
out.push(p('**Listener task:** write one repeated action from this room, and what it was for.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Bassel writes and puts in the drawer with the notebook. Answer the questions.'));
out.push(model([
  '**THREE THINGS HE DID EVERY MORNING** · B. Tahhan · November · put in the big drawer with his notebook',
  'I found my father\'s notebook on Tuesday, nineteen years after he died, in a drawer I have never emptied. There is nothing in it. This is what I remembered while I was holding it.',
  '**He would sweep the whole floor before he did anything else.** Every morning, at about twenty past six, and we had a boy who could have done it and did it in the evenings. I thought for thirty years that this was about the floor.',
  '**He would put the kettle on and not drink the tea until half past seven.** I have no explanation for this one and I am writing it down because it is true and not because I understand it.',
  '**He would walk round both machines with his hand flat on them, and he would not speak to anybody until he had finished.** I asked him once, when I was twenty-two, and he said a bearing tells you a week before it goes, and it tells your hand and not your ear.',
  '**What the sweeping was actually about.** Twenty minutes in the shop with nobody talking to him before the work started — and you cannot sweep round a thing without looking at it. He was walking the shop. The broom was an excuse that nobody could argue with, including him.',
  '**What I kept and what I dropped.** I kept the hours: I come in at ten past six as he did. I dropped all three of the habits, and I dropped them in the same month, when I was twenty-three and the shop became mine and I wanted it to be run by me and not by a dead man.',
  '**What it has cost.** The engineer has found a bearing starting twice this year and has asked me twice whether I noticed any vibration, and I said no both times, because I do not touch them.',
  '**What I am doing from Monday.** The machines. Four minutes, hand flat, before I speak to anybody. Not the sweeping, because the boy is better at it than I am, and not the kettle, because I do not understand it.',
  '**And the thing I would say to him if I could.** You should have told me what the sweeping was for. I would have kept it. You let me think it was about the floor for thirty years, and I think you thought that a man who has to be told is not a man who will do it.',
]));
out.push(item('1', 'What does he say the sweeping was actually about?'));
out.push(item('2', 'What did he keep, and what did he drop, and when?'));
out.push(item('3', 'What does he say he would say to his father, and what does he think his father believed?'));
out.push(writers([
  'A page about somebody\'s habits: **where you found them and why you are writing now** → **three repeated actions with _would_, each one its own paragraph** → **what one of them was actually about** → **what you kept and what you dropped, and when** → **what dropping it cost** → **what you are doing from Monday** → **and the thing you would say to them**.',
  'Keep the habit you do not understand, and say that you do not. _I have no explanation for this one and I am writing it down because it is true._ A page that explains all three is a page that has invented one.',
  'Date the dropping. _I dropped all three in the same month, when I was twenty-three and the shop became mine._ The month a habit is dropped is usually the month somebody took over, and the reason is never about the habit.',
  '⚠ End with the sentence addressed to the person. It is the only part of the page that could not be written about a document, and it is why this cycle is about a person and not a practice.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about three things somebody did repeatedly (60 words or more).'));
out.push(p('**THREE THINGS ______________ DID** · ______________   **He/She would ______________.** ______________. I thought for ______________ that this was about ______________.   **He/She would ______________.** I have no explanation for this one and I am writing it down because it is true.   **He/She would ______________, and would not ______________ until ______________.** I asked once, when I was ______________, and was told ______________.   **What ______________ was actually about.** ______________. ______________ was an excuse that nobody could argue with.   **What I kept and what I dropped.** I kept ______________. I dropped ______________, and I dropped it when ______________.   **What it has cost.** ______________.   **What I am doing from Monday.** ______________. Not ______________, because ______________.   **And the thing I would say to him/her.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_would_ for the repeated actions, _used to_ for any state',
  'One habit kept unexplained',
  'The month the habits were dropped, and what was happening then',
  'One thing being taken back, from a named day',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the habit they do not understand.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (140 words or more) about the repeated habits of somebody who shaped how you work — and end with the sentence you would say to them. Then take one habit back, from a named day, and write the day.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s page as **the person it is about**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the habits in this room were dropped in the month somebody took over?** Count. That is the finding, and it is not about laziness: a habit inherited without a reason is dropped the moment the person doing it is in charge, and the reason was usually never said out loud.'));
out.push(hw('Write the page about one person\'s repeated habits (60+ words), take one habit back from a named day, and — if the person is alive — ask them what one of the three was for. Write down what they said.'));

// ======================= 17.3 =======================
out.push(pb());
out.push(h2('17.3  I am used to being the one they telephone'));
out.push(p('**Function:** saying what you are accustomed to   ·   **Grammar:** _be used to_ + -ing / noun   ·   **Pronunciation:** _used to_ after _am / is / are_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name one thing you do at work that a new person would find difficult and that you no longer notice. Your teacher writes the eleven on the board and asks the second question, which is the one this cycle is about: _when did you stop noticing?_'));
out.push(board('I am used to being telephoned at two in the morning. I was not used to it in January.', 'be used to + -ing'));
out.push(p('**b**  _Used to_ (past) or _am used to_ (now)? **1** _I ___ work nights, and I do not now._  **2** _I ___ working nights; I have done it for nine years._  **3** _She ___ be frightened of the telephone._  **4** _He ___ to being asked._  **5** _We ___ sign at the bus until 2019._  **6** _They ___ not used to being telephoned at all._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Yara used to now that she was not used to in January, and what does she say she should **not** be used to?   **A** being telephoned at night; being the only one   **B** working alone; the new analyser   **C** reading English; writing English'));
out.push(p('**b**  Listen again. **1** What date does Yara give, and why does she say she cannot give a better one?   **2** What does Ms Huda say the danger of _be used to_ is?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.5  I stopped noticing in about March', [
  ['Yara', 'I want to say something that I have only understood this week. I am used to being telephoned at night by the wards. I am the one they telephone. In January I was not used to it, and now I am, and I cannot tell you the day it changed.'],
  ['Ms Huda', 'Tell us what the telephone calls are.'],
  ['Yara', 'A result that does not look right. A nurse rings the laboratory and asks whether the figure can be real, and somebody has to say either yes it can or no, run it again. I am used to answering that at two in the morning. I am used to being woken up. I am used to doing it in English about twice a month, because two of the night doctors are not Arabic speakers, and in January that single fact frightened me more than anything else in my work.'],
  ['Nour', 'And now?'],
  ['Yara', 'Now I am used to it, and this is the part I did not expect: being used to it is not the same as it being all right. It is only that I have stopped noticing.'],
  ['Omar', 'When did you stop?'],
  ['Yara', 'About March. I cannot give you a date and I have thought about it for three days. There is no day. You are not used to a thing, and then at some point you are, and the day it happened is not available to you afterwards, which is why I am writing things down now while they are still difficult.'],
  ['Jad', 'What is the thing you said you should not be used to?'],
  ['Yara', 'That I am the only one. There are four of us in that laboratory and I am the one who is telephoned, every time, because I did a course. It is not in my job. It is not in anybody\'s job. It is not paid, it is not counted, and it is not written anywhere — and I am used to it, which means that for seven months I have not asked anybody a single question about it.'],
  ['Ms Huda', 'Say that again, because it is the sentence this cycle exists for.'],
  ['Yara', 'Being used to something is how a thing stops being a question.'],
  ['Ms Huda', 'That is the danger of _be used to_, and it is not a grammar point, it is the whole of working life. The form describes a state that is comfortable: _I am used to it, it is normal to me, I manage._ And the things we are used to are exactly the things nobody ever reviews, because nobody complains about them, including us. So the useful question is never _can you manage?_ — you can, you are used to it. It is: _what are you used to that is not in anybody\'s job description?_'],
  ['Nour', 'At TechCare that would be a long list.'],
  ['Yara', 'And mine is one line long and I am going to write it on Thursday.'],
]));
out.push(sp());
out.push(box('Language box – be used to + -ing', [
  '**Form:** _am / is / are **used to** + -ing_ or _+ a noun_. _I am used to **being** telephoned at night._ · _She is used to **the** night shift._ · _They are **not** used to **working** in English._ · _**Are** you used to **getting up** at five?_',
  '**Meaning:** it is **normal to me now**. Not easy, not pleasant — normal. The thing was difficult once and has stopped being difficult, and usually you did not notice the moment it stopped.',
  '⚠ **The one mistake to get out of your English.** _I used to_ = the past, and it is finished. _I am used to_ = now. _I used to work nights_ (I do not any more) · _I am used to working nights_ (I do them, and they are normal). One word of difference, and nine years ago becomes this morning.',
  '⚠ **And never _I am used to work_.** After _be used to_ the verb is **-ing**, because _to_ here is a preposition and not part of an infinitive. The test: you can put a noun after it (_I am used to the noise_), and you can never put a noun after a real infinitive.',
  '**Past and future of the same state:** _I **was** not used to it in January._ · _By March I **was** used to it._ · _You **will be** used to it by the spring._',
  '**Useful phrases:** I cannot tell you the day it changed · being used to it is not the same as it being all right · I have stopped noticing · what am I used to that is not in anybody\'s job?',
  '**Practise:** Say each as _I am used to…_ and then say roughly when it stopped being difficult.  1 an hour you work  2 a journey you make  3 a language you work in  4 something you are asked for  5 a noise, a smell or a temperature',
  '**Pronunciation.** 🔊 **Track 17.6** _Used to_ keeps the /s/ and the weak /tə/ in all four forms — /ˈjuːstə/ — so _I used to work_ and _I am used to working_ differ only in **am** and in **-ing**. Listen to eight sentences and write **PAST** or **NOW**.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A takes a card and says what they are used to, and then the hard half: when they stopped noticing, and whether it is in anybody\'s job. B asks the two questions. Swap cards.'));
out.push(dlg(null, [
  ['A', 'I am used to __________.'],
  ['B', 'Were you used to it a year ago?'],
  ['A', 'No. I stopped noticing in about __________.'],
  ['B', 'And is it in anybody\'s job?'],
  ['A', '__________.'],
]));
out.push(table(['Card A – what you are used to', 'Card B – what you are used to'], [
  ['being telephoned outside your hours', 'working in a second language'],
  ['being the one who is asked', 'a journey that nobody else would make'],
  ['doing a job that is not yours', 'noise, cold or standing all day'],
  ['explaining the same thing every week', 'a form that is twice as long as it needs to be'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight things people are used to, and then mark the ones that are **in nobody\'s job**. Count them. In a first run it is between five and seven out of eight, and that is the finding of the cycle: the work that is in nobody\'s job is done by the person who has got used to it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner three things you are used to at work that a new person would find hard. For each one say roughly when you stopped noticing, and whether it is written in anybody\'s job.'));
out.push(p('**b**  Swap. Then each of you choose **one** of your partner\'s three that should be written down somewhere, and say who should write it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Yara is used to being telephoned at night by the wards — a nurse rings the laboratory to ask whether a figure can be real, and somebody has to say either yes it can or no, run it again. She is used to being woken up, and she is used to doing it in English about twice a month, because two of the night doctors are not Arabic speakers, and in January that one fact frightened her more than anything else in her work. Omar asked when she stopped noticing, and she said about March, and that she cannot give a date and has thought about it for three days: there is no day. You are not used to a thing, and then at some point you are, and the day it happened is not available to you afterwards — which is why she is writing things down now, while they are still difficult. Then the sentence she did not expect to be able to say: being used to it is not the same as it being all right; it is only that she has stopped noticing. And the thing she says she should not be used to is that she is the only one. There are four people in that laboratory and she is the one who is telephoned, every time, because she did a course. It is not in her job and it is not in anybody\'s job, it is not paid and it is not counted and it is written nowhere — and she is used to it, which means that for seven months she has not asked one question about it. Ms Huda said that is the danger of the form and it is not a grammar point: the things we are used to are the things nobody ever reviews, because nobody complains about them, including us. So the useful question is never can you manage — you can, you are used to it. It is: what are you used to that is not in anybody\'s job description? Nour said at TechCare that would be a long list, and Yara said hers is one line long and she is going to write it on Thursday._'));
out.push(p('**Listener task:** write one thing from this room that is in nobody\'s job.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Yara writes and leaves for the head of the laboratory. Answer the questions.'));
out.push(model([
  '**NOTE FOR DR SHAABAN · the night calls** · Y. Mansour · 12 November',
  'I am not asking for anything in this note. I am writing down a thing that I have become so used to that I had stopped being able to see it, and I would rather it were on paper than in my head.',
  '**What I am used to.** I am used to being telephoned at night by Wards 2 and 4, about four times a month, to be asked whether a result can be real. I am used to being woken up, and I am used to answering about twice a month in English, because two of the night doctors are not Arabic speakers. In January I was not used to any of it.',
  '**When it became normal.** March, as far as I can tell, and I cannot be more exact than that, which is itself part of the point: nobody notices the day a difficult thing stops being difficult.',
  '**What is not written anywhere.** That I am the one who is telephoned. There are four of us. I am telephoned every time, because I did the course. It is not in my job description, it is not in anybody\'s, it is not counted on any sheet and it has never been discussed.',
  '**Why that matters more than the calls do.** A thing that somebody is used to is a thing nobody reviews, because there is no complaint attached to it. I have not raised this for seven months. Not because I minded and said nothing — because I had stopped noticing, which is worse, and is the only reason this note is late.',
  '**What I think should happen, and it is small.** That the four of us appear on a list, in some order, and that the wards are given the list. Not a rota and not an obligation: a list, so that it is not my telephone by accident.',
  '**And one sentence for myself.** I am going to write down the things that are still difficult now, in November, while I can still see them — because in nine months I will be used to them, and then they will be invisible, and then nobody will be able to fix them, including me.',
]));
out.push(item('1', 'What does she say she is not doing in the note, and what is she doing instead?'));
out.push(item('2', 'Why does she say the seven months of silence is worse than minding and saying nothing?'));
out.push(item('3', 'What does she ask for, and what does she carefully say it is not?'));
out.push(writers([
  'A note about what you are used to: **what you are not asking for** → **what you are used to, with a number** → **when it became normal (and how vague that date is)** → **what is written nowhere** → **why that matters more than the work does** → **the small thing you think should happen** → **and one sentence for yourself**.',
  'Open by taking the complaint off the table. _I am not asking for anything in this note._ A note that announces it is not a demand is read to the end; a note that opens with a demand is read for its demand and no further.',
  'Admit that the date is vague, and say why. _March, as far as I can tell, and I cannot be more exact, which is itself part of the point._ The vagueness is evidence, not weakness.',
  'Ask for the smallest thing that would work. _A list, in some order, given to the wards — not a rota and not an obligation._ Naming what you are **not** asking for is what stops a small request being read as a large one.',
  '⚠ And do not make yourself the victim of it. Yara\'s note says the silence was hers: _not because I minded and said nothing — because I had stopped noticing._ That sentence is why the note cannot be dismissed.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note about something you are used to that is written nowhere (60 words or more).'));
out.push(p('**NOTE FOR ______________** · ______________ · ______________   I am not asking for anything in this note. I am writing down ______________.   **What I am used to.** I am used to ______________, about ______ times a ______________. I am used to ______________. In ______________ I was not used to any of it.   **When it became normal.** ______________, as far as I can tell, and I cannot be more exact than that.   **What is not written anywhere.** ______________.   **Why that matters more than the work does.** ______________. I have not raised it for ______________ — not because ______________, but because ______________.   **What I think should happen, and it is small.** ______________. Not ______________ and not ______________.   **And one sentence for myself.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_am/is/are used to_ + -ing throughout — no _I am used to work_',
  'A number on what you are used to, and a vague date admitted as vague',
  'The thing that is written nowhere, named',
  'The smallest request, with what it is not',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the thing that is written nowhere.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (140 words or more) about something you are so used to that you had stopped seeing it. Include when it became normal, what is written nowhere, the smallest thing that would fix it, and the sentence you write for yourself.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s note as **the person it is addressed to**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the notes in this room are about work that is in nobody\'s job?** Count. Then the second count, which is the one worth taking home: how many of us could name the month it became normal? Almost nobody can, and that is why the only reliable moment to write a difficulty down is while it is still a difficulty.'));
out.push(hw('Write the note (60+ words), and then a second short list: **three things that are difficult for you now, in November**, which you expect to be used to by the summer. Date it and keep it.'));

// ======================= 17.4 =======================
out.push(pb());
out.push(h2('17.4  I am getting used to the fourth night not existing'));
out.push(p('**Function:** saying what is becoming normal   ·   **Grammar:** _get used to_ + -ing   ·   **Pronunciation:** _getting used to_ in connected speech'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name one thing that is **becoming** normal for you and is not normal yet. Then the question that makes it a sentence: how far through are you?'));
out.push(board('I am getting used to finishing on the third night. I am not used to it yet.', 'get used to + -ing'));
out.push(p('**b**  _Used to_, _am used to_ or _am getting used to_? **1** _I ___ work five nights in a row, until October._  **2** _I ___ nights; I have done them for nine years._  **3** _I ___ to three-night blocks — three weeks in, and it is not normal yet._  **4** _She ___ not used to being asked._  **5** _By February you ___ used to it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has changed on Rasha\'s ward, and what does she say she did not expect to miss?   **A** the blocks; the fifth night   **B** the rota; the trolley   **C** the sheets; Sister Nasr'));
out.push(p('**b**  Listen again. **1** Why does she say the fifth night was her best night as well as her worst?   **2** What does Ms Huda say about the difference between _am used to_ and _am getting used to_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.7  Three weeks in', [
  ['Rasha', 'The committee extended it to the whole of nights from the twenty-seventh of October, which Nour predicted in September to the week. So I am three weeks into the thing I asked for.'],
  ['Nour', 'And?'],
  ['Rasha', 'And I am getting used to it. Not used to it — getting used to it, and I want the class to hear the difference, because I would have said those were the same words in April. I am getting used to sleeping at a different time. I am getting used to having two days off in the middle of the week, which is useless for everything except sleeping. I am getting used to the fourth night not existing.'],
  ['Jad', 'Is any of it normal yet?'],
  ['Rasha', 'One thing. I am used to waking up at four in the afternoon, and that took eleven days. Everything else is still being got used to, and I am counting, because in nine months I will not remember any of this.'],
  ['Ms Huda', 'Now the sentence you told me you did not want to say.'],
  ['Rasha', 'I miss the fifth night. I put a trial in writing to get rid of the fourth and fifth nights, I have the figures, the figures are right, seven errors in 118 shifts and every one of them on a fourth or a fifth — and I miss the fifth night.'],
  ['Omar', 'Why?'],
  ['Rasha', 'Because by the fifth night I knew that ward completely. I knew which child was going to be awake before they were awake. I knew what the night was going to do. On a first night I am competent and on a fifth night I was something else, and the something else is what I have given up, and I had not costed it because it was not on my sheet. My sheet had errors on it. It did not have that.'],
  ['Lubna', 'Will you say that in the report?'],
  ['Rasha', 'It is in the report. It is the second thing in it, because I am not having anybody find it later and tell me I hid it. And it does not change the conclusion: an error on a drug chart at four in the morning is not paid for by my knowing the ward well.'],
  ['Ms Huda', 'Hear the grammar in what she has just done, because it is small and it is the whole cycle. _I am used to_ is a state and it is finished moving — it is normal, and you have stopped noticing. _I am getting used to_ is the middle of the road: it is still moving, you can still see it, and you can still describe it. That is why what Rasha has said tonight could not have been said in February and will not be available to her in July. There is a window in which a change can be described, and it is open while you are **getting** used to the thing and it closes when you **are**.'],
  ['Rasha', 'Which is why I am writing it down this week and not in July.'],
]));
out.push(sp());
out.push(box('Language box – get used to + -ing', [
  '**Form:** _get / am getting / got / have got / will get **used to** + -ing_ — and again the verb is **-ing**, because _to_ is a preposition. _I am getting used to **finishing** on the third night._ · _It took me eleven days to get used to **waking** at four._ · _You **will get** used to it._',
  '**Meaning:** it is **becoming** normal and it is not normal yet. The process, not the state. _I am used to it_ = finished. _I am getting used to it_ = still moving.',
  '**Put the distance into the sentence,** because that is what makes it worth saying: _three weeks in_ · _that took eleven days_ · _one of the five is normal and four are not_ · _I am not used to it yet._',
  '**It takes + time + to get used to + -ing:** _it takes about a month to get used to sleeping in the afternoon._ This is the ordinary way to say how long a change costs.',
  '⚠ **Do not use _get used to_ for the past habit.** _I got used to working nights_ = nights became normal to me. _I used to work nights_ = I worked nights and I do not now. Students write the first when they mean the second more often than any other error in this unit.',
  '**And the reason this form matters:** while you are **getting** used to a change you can still describe it. Once you **are** used to it, you cannot, and nobody can — which is why the account is written in the third week and not in the ninth month.',
  '**Useful phrases:** three weeks in · it is not normal yet · that took eleven days · everything else is still being got used to · there is a window in which a change can be described.',
  '**Practise:** Say each as _I am getting used to…_ with the distance in it — _three weeks in_, _that took eleven days_, _not yet_.  1 a new hour or rota  2 a new place  3 a new machine or system  4 a new person above you  5 something you have had to stop doing',
  '**Pronunciation.** 🔊 **Track 17.8** _Getting used to_ runs together as /ˈɡetɪŋ ˈjuːstə/ and the stress lands on the **-ing verb** that follows: _I am getting used to **sleep**ing in the afternoon._ Listen to six and underline the stressed word.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A takes a change from the card and separates the three: what is already normal, what is still becoming normal, and how long each took or is taking. B asks the question that costs something: what have you lost that was not on your list? Swap cards.'));
out.push(dlg(null, [
  ['A', 'I am getting used to __________. Three weeks in.'],
  ['B', 'Is any of it normal yet?'],
  ['A', 'One thing. I am used to __________, and that took __________.'],
  ['B', 'And what have you lost that was not on your list?'],
  ['A', '__________.'],
]));
out.push(table(['Card A – the change', 'Card B – the change'], [
  ['a new rota or new hours', 'a new office, ward, shop or city'],
  ['a new machine or system at work', 'working in English'],
  ['a new manager, or being the manager', 'studying again after years of not'],
  ['a journey twice as long as the old one', 'a job that is half of what it was and twice as exact'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight answers to _what have you lost that was not on your list?_ Then mark the ones the speaker had **not thought of before being asked**. It is usually most of them, because a thing that was never on a list is never counted as lost.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Describe a change you are in the middle of. Separate what is already normal from what is not, put a number of days or weeks on each, and name one thing you have lost that was not on anybody\'s list.'));
out.push(p('**b**  Swap. Then each of you say whether the thing lost changes your partner\'s conclusion — and in most cases it does not, which is worth saying out loud.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The committee extended Rasha\'s trial to the whole of nights from the twenty-seventh of October, which Nour predicted in September to the week, so she is three weeks into the thing she asked for. She is getting used to it — getting used to, not used to, and she wanted the class to hear the difference, because in April she would have said those were the same words. She is getting used to sleeping at a different time, to having two days off in the middle of the week, which is useless for everything except sleeping, and to the fourth night not existing. One thing is normal: she is used to waking at four in the afternoon, and that took eleven days. Everything else is still being got used to and she is counting, because in nine months she will not remember any of it. Then the sentence she said she did not want to say: she misses the fifth night. She put a trial in writing to get rid of the fourth and fifth nights, she has the figures, the figures are right — seven errors in 118 shifts and every one on a fourth or a fifth — and she misses the fifth night, because by the fifth night she knew that ward completely: she knew which child would be awake before they were awake. On a first night she is competent; on a fifth night she was something else, and the something else is what she has given up, and she had not costed it because it was not on her sheet. Her sheet had errors on it and it did not have that. Lubna asked whether it goes in the report, and it is the second thing in it, because she is not having anybody find it later and tell her she hid it — and it does not change the conclusion: an error on a drug chart at four in the morning is not paid for by knowing the ward well. Ms Huda said the grammar in that is the whole cycle: there is a window in which a change can be described, and it is open while you are getting used to the thing and it closes when you are._'));
out.push(p('**Listener task:** write one thing in this room that is becoming normal, and how far through it is.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Rasha writes in the third week and pins inside the drug cupboard door. Answer the questions.'));
out.push(model([
  '**THREE WEEKS IN — FOR WHOEVER IS ON NIGHTS IN JANUARY** · R. Barakat · 17 November',
  'The blocks changed on 27 October. I am writing this in the third week, while I can still see it, because by January I will be used to it and then this page will be impossible to write.',
  '**What is already normal, and how long it took.** Waking at four in the afternoon: eleven days. That is the only one. One out of five, in three weeks.',
  '**What is still becoming normal.** Sleeping at a different time. Two days off in the middle of the week, which are useless for everything except sleeping. Eating at hours that no shop agrees with. And the fourth night not existing, which sounds like nothing and is the strangest of the four, because for nine years the week had a shape and now it does not.',
  '**What I did not expect, and it is a loss.** I miss the fifth night. By the fifth night I knew the ward completely — which child would be awake before they were awake, what the night was going to do. On a first night I am competent. On a fifth night I was something else. I asked for the end of the fifth night, I was right to, and I have lost that, and it was on nobody\'s sheet, including mine.',
  '**Why the loss does not change anything.** Because an error on a drug chart at four in the morning is not paid for by my knowing the ward well. The seven errors were all on a fourth or a fifth night. Both of those sentences are true and the first one does not survive the second.',
  '**What I would tell you if you are reading this in January.** You will be used to it, and you will not remember the eleven days or the four things that were strange. Write your own version of this page in your third week. Do not write it in your ninth month: you will write something calm and useless.',
  '**And the date I read this again.** 27 April, six months in, with the figures for the three-night blocks beside it — so that what I thought in the third week can be read against what actually happened.',
]));
out.push(item('1', 'Why does she say the page would be impossible to write in January?'));
out.push(item('2', 'What is the loss she names, and why does she say it changes nothing?'));
out.push(item('3', 'What does she tell a reader in January to do, and what does she tell them not to do?'));
out.push(writers([
  'A page written in the middle of a change: **the date it changed and why you are writing now** → **what is already normal, with how long it took** → **what is still becoming normal** → **the loss you did not expect** → **why the loss does not change the conclusion** → **what you would tell somebody coming after you** → **and the date you will read it again**.',
  'Count what is normal against what is not. _One out of five, in three weeks._ A change described without that fraction reads as either a complaint or a boast; with it, it reads as a measurement.',
  'Put the days on it. _Waking at four in the afternoon: eleven days._ The number of days a thing took to become normal is the most useful sentence you can leave for the next person, and nobody ever records it.',
  'Name the loss, and then refuse to let it move the conclusion. _Both of those sentences are true and the first one does not survive the second._ That is the sentence that makes the page honest instead of merely frank.',
  '⚠ Address the next person directly, and warn them about the ninth month. A page written once a change is normal is calm, short and worth nothing.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page from the middle of a change (60 words or more).'));
out.push(p('**______________ WEEKS IN — FOR WHOEVER ______________** · ______________   ______________ changed on ______________. I am writing this in the ______________ week, while I can still see it, because by ______________ I will be used to it.   **What is already normal, and how long it took.** ______________: ______________ days. That is ______ out of ______.   **What is still becoming normal.** ______________. ______________. And ______________, which sounds like nothing and is the strangest of them, because ______________.   **What I did not expect, and it is a loss.** ______________. It was on nobody\'s list, including mine.   **Why the loss does not change anything.** ______________. Both of those sentences are true and the first does not survive the second.   **What I would tell you if you are reading this in ______________.** ______________. Write your own version in your ______________ week.   **And the date I read this again.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_get used to_ + -ing for what is still moving, _be used to_ + -ing for what has stopped',
  'Days or weeks on each thing, and the fraction normal / not normal',
  'The loss that was on nobody\'s list',
  'The sentence that refuses to let the loss move the conclusion, and the date it is read again',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the loss that was on nobody\'s list.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (140 words or more) from the middle of a change you are in now: what is normal, what is not, how long each took, the loss, why it changes nothing — and the date you will read it against the figures.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s page as **the person who comes after them**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the losses in this room were on somebody\'s list before today?** Count. A thing that was never written down is never counted as a cost, which is how a change that is correct on paper can still take something from the person who asked for it — and why the third week, not the ninth month, is when the page gets written.'));
out.push(hw('Write the page from the middle of your own change (60+ words) with the days on each item, and put the date you will read it again at the bottom. Then ask somebody who went through the same change nine months ago what they remember of the first three weeks. Write down how much they remember.'));

// ======================= 17.5 =======================
out.push(pb());
out.push(h2('17.5  It used to be done in a car park'));
out.push(p('**Function:** describing how a practice changed, and what it cost   ·   **Grammar:** the four forms in one account   ·   **Pronunciation:** the four forms said one after another'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One sentence each, four forms, about the same thing: _we used to ______ · we would ______ · I am used to ______ · I am getting used to ______._ Your teacher writes the four columns on the board and fills them from the room.'));
out.push(board('It used to be done in a car park. These days it is done in a room with a door, and I am still getting used to that.', 'the four forms in one account'));
out.push(p('**b**  Which form? **1** _We ___ do it on Fridays, before it was moved._  **2** _He ___ bring two of them in his car, every time._  **3** _I ___ to being expected now._  **4** _I ___ to preparing, and I am not there yet._  **5** _It ___ to take four hours and it takes two._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Fares got, and what does he say it has cost?   **A** two days a month in writing; the thing that made the old way work   **B** a promotion; his route   **C** a company car; his Thursday afternoons'));
out.push(p('**b**  Listen again. **1** What were the three things he **would** do, and what were they for?   **2** What does Ms Huda say about a practice that is written down?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.9  The register at the door', [
  ['Fares', 'I have had two of my days now, September and October, and November is next week, so I can say something about the thing I spent a year asking for.'],
  ['Ms Huda', 'Start where it started.'],
  ['Fares', 'It used to be done in a car park. Six representatives over four years, in car parks, after the last call of the day, between about half past five and seven. It was not anybody\'s job, it was not paid, it was not asked for and it was not recorded. If I had been run over, nobody at that company would have known the training existed.'],
  ['Omar', 'What did you actually do, in the car park?'],
  ['Fares', 'Three things, every time. I would get there twenty minutes early and sit in the car and write the three mistakes I had heard that person make, on the back of a call sheet. I would take two of them in my car to the next town and do it while I drove, because a person who is driving will say things they will not say across a table. And I would never write anything down in front of them — never, not one word, for four years.'],
  ['Jad', 'Why not?'],
  ['Fares', 'Because the moment you write, it is a record, and a man who is being recorded stops saying _I do not understand._ That was the whole method and I did not know it was a method until last month.'],
  ['Nour', 'And now?'],
  ['Fares', 'Now it is two days a month, in writing, for a year. There is a room with a door. There is a list of names, and the names are chosen by somebody who is not me. I am used to being expected — that took about three weeks. And I am getting used to preparing, which I am not good at yet, because for four years my preparation was twenty minutes in a car park with a call sheet.'],
  ['Ms Huda', 'And the cost. You told me there was one.'],
  ['Fares', 'There is a register at the door. Attendance is signed. And two of the six have stopped asking questions. Not all six — two, and I can name them, and they are the two who asked the most in the car park. I have got the thing I asked for and I have lost the only feature of the old thing that made it work, which was that nobody could be wrong in front of anybody.'],
  ['Lubna', 'Can you get it back?'],
  ['Fares', 'I think so, and it is small: the last forty minutes of each day with the door shut and nothing written. I am going to ask for that in writing, which is a sentence I can hear the shape of now — I am asking for a thing that used to happen.'],
  ['Ms Huda', 'Which is Tareq\'s sentence from 17.1, and you have arrived at it from the other direction. And hear what the class should take away. Writing a practice down makes it survive you, and it changes it — those are not two outcomes, they are the same outcome. So when you get a thing written down, write down what the old version was **for**, in the same week, because that is the part that is never in the new document and the part that goes first.'],
]));
out.push(sp());
out.push(box('Language box – the four forms in one account', [
  '**Put them in this order and the account writes itself.** **1** _It **used to** be done…_ — the old arrangement, as a whole. **2** _I **would** get there twenty minutes early, I **would** take two of them in my car…_ — the repeated details, which are where the method is hiding. **3** _I **am used to** being expected…_ — what is already normal in the new arrangement. **4** _I **am getting used to** preparing…_ — what is still moving.',
  '**Keep the two _used to_ forms apart by their time.** _It used to be done in a car park_ (then, and not now) · _I am used to being expected_ (now). If you can say _and I do not any more_, it is form 1; if you can say _it is normal to me_, it is form 3.',
  '**_Would_ is the form that recovers a method.** Nobody can tell you their method when you ask for it. Ask what they **would** do, every time, and it arrives in three sentences — _I would never write anything down in front of them._',
  '**Say what each repeated action was for.** _Because the moment you write, it is a record, and a man who is being recorded stops saying I do not understand._ The purpose of a habit is almost never written anywhere, and it is the thing that is lost when the habit is replaced.',
  '**And name the cost in the same paragraph as the gain.** _I have got the thing I asked for and I have lost the only feature of the old thing that made it work._ An account of a change with no cost in it has not been looked at properly.',
  '**Useful phrases:** it used to be done in… · three things, every time · I did not know it was a method until… · that took about three weeks · and I am not there yet · what the old version was for.',
  '**Practise:** Give each in four sentences — _it used to_, _we would_, _I am used to_, _I am getting used to_.  1 how a record is kept  2 how somebody is trained  3 how a shift is handed over  4 how something is ordered  5 how a question is asked of somebody senior',
  '**Pronunciation.** 🔊 **Track 17.10** The four forms in one breath: _it used to be done · I would get there early · I am used to being expected · I am getting used to preparing._ All four keep /ˈjuːstə/; only **am**, **would** and **getting** tell them apart. Listen to eight and write **1**, **2**, **3** or **4**.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A takes a practice from the card and gives the four-part account: how it used to be done, two things they or somebody would do every time and what those were for, what is normal now, and what is still moving. B asks the question of this cycle: what has the new way lost? Swap cards.'));
out.push(dlg(null, [
  ['A', 'It used to be done __________.'],
  ['B', 'What would you do, every time?'],
  ['A', 'I would __________, and I would __________ — because __________.'],
  ['B', 'And now?'],
  ['A', 'I am used to __________, and I am getting used to __________.'],
  ['B', 'What has the new way lost?'],
  ['A', '__________.'],
]));
out.push(table(['Card A – the practice', 'Card B – the practice'], [
  ['training or showing somebody the work', 'keeping a record, before and after a form existed'],
  ['a meeting that used to be a conversation', 'ordering or buying something'],
  ['handing over at the end of a shift', 'asking a question of somebody senior'],
  ['a journey or a route that was changed', 'a job that used to be done by one person'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight answers to _what has the new way lost?_ Then mark the ones where what was lost was the **reason the old way worked**. It is most of them, because a new arrangement is written from what the old one did and never from what it was for.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Give the four-part account of something that changed where you work. Two repeated actions with _would_, with what each was for. Then what is normal now, what is still moving, and the one thing that has been lost.'));
out.push(p('**b**  Swap. Then each of you say what small thing would get the lost feature back, and whether it could be asked for in writing.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Fares has had two of his days now, September and October, with November next week, so he can say something about the thing he spent a year asking for. It used to be done in a car park: six representatives over four years, after the last call of the day, between about half past five and seven — not anybody\'s job, not paid, not asked for and not recorded, and if he had been run over nobody at that company would have known the training existed. Omar asked what he actually did, and there were three things, every time. He would get there twenty minutes early and write the three mistakes he had heard that person make on the back of a call sheet. He would take two of them in his car to the next town and do it while he drove, because a person who is driving will say things they will not say across a table. And he would never write a word in front of them, for four years, because the moment you write it is a record and a man who is being recorded stops saying I do not understand — which he said was the whole method, and he did not know it was a method until last month. Now it is two days a month in writing for a year, in a room with a door, with a list of names chosen by somebody who is not him. He is used to being expected, which took about three weeks, and he is getting used to preparing, which he is not good at yet. And the cost: there is a register at the door, attendance is signed, and two of the six have stopped asking questions — not all six, two, and they are the two who asked the most in the car park. He has got the thing he asked for and lost the only feature of the old thing that made it work, which was that nobody could be wrong in front of anybody. He thinks he can get it back and it is small: the last forty minutes with the door shut and nothing written, asked for in writing — which is Tareq\'s sentence from 17.1 arrived at from the other direction. Ms Huda said that writing a practice down makes it survive you and changes it, so write down what the old version was **for** in the same week: that is never in the new document, and it goes first._'));
out.push(p('**Listener task:** write one practice from this room and what the new version lost.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Fares sends to the training manager at the end of his second month. Answer the questions.'));
out.push(model([
  '**HOW IT USED TO BE DONE, AND WHAT THAT WAS FOR** · F. Kayyali · after the October day',
  'You asked me in September to send a note after two months. This is it, and most of it is about the four years before September, because that is the part that is not written anywhere and I am the only person who has it.',
  '**How it used to be done.** In car parks. Six representatives over four years, after the last call of the day, roughly half past five to seven. It was not anybody\'s job, it was not paid, it was not asked for, and it was not recorded anywhere at all.',
  '**The three things I would do, every time, and what each was for.** I would arrive twenty minutes early and write down, on the back of a call sheet, the three mistakes I had heard that person make that week: that was so that the session was about them and not about the product. I would take two of them in the car to the next town and do it while driving: that was because a person who is driving says things they will not say across a table, and I have no better explanation than that it is true every time. And I would never write a word in front of them: that was so that nobody was being recorded, because a man who is being recorded stops saying _I do not understand_.',
  '**What is already normal now.** Being expected. A room, a door and a list of names I did not choose. That took about three weeks and I would not go back.',
  '**What I am still getting used to.** Preparing properly. I am not good at it yet, and for four years my preparation was twenty minutes in a car park with a call sheet in my hand, so I am learning a skill at thirty-four that I thought I already had.',
  '**What the new arrangement has cost, precisely.** Two of the six have stopped asking questions since September. Not all six — two, and they are the two who asked most in the car park. The register at the door is the only thing that has changed for them.',
  '**What I am asking for, and it is small.** The last forty minutes of each day with the door shut and nothing written down, not minuted and not reported. I am asking for a thing that used to happen, which is the easiest kind of request to grant and the hardest kind to think of.',
  '**And the general point, which is not about me.** When a practice is written down it survives the person who invented it and it changes: those are the same event. So whenever you formalise something, ask the person who did it informally what their habits were **for**, in the same week — that is never in the new document, and it goes first.',
]));
out.push(item('1', 'Why does he say most of the note is about the four years before September?'));
out.push(item('2', 'What were the three repeated actions for, and which of them does he say he cannot explain?'));
out.push(item('3', 'What does he ask for, and why does he call it the hardest kind of request to think of?'));
out.push(writers([
  'A page about how something used to be done: **why you are the one writing it** → **how it used to be done** → **the repeated actions with _would_, each with what it was for** → **what is already normal now** → **what you are still getting used to** → **what the change has cost, precisely** → **the small thing you are asking for** → **and the general point**.',
  'Say why the old version is worth a page. _That is the part that is not written anywhere and I am the only person who has it._ Nobody writes down the informal arrangement, which is why it disappears intact.',
  'Give every repeated action its purpose — and admit the one you cannot explain. _I have no better explanation than that it is true every time._ A page that supplies a reason for everything has invented at least one.',
  'Make the cost exact and small. _Two of the six, and they are the two who asked most._ "Morale has suffered" cannot be acted on; two named people and a register at a door can.',
  '⚠ End with the point that is not about you, and make it an instruction somebody could follow next time: ask what the old habits were **for**, in the same week you write the new rules.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about how something used to be done where you work (60 words or more).'));
out.push(p('**HOW IT USED TO BE DONE, AND WHAT THAT WAS FOR** · ______________   Most of this is about the ______________ before ______________, because that is the part that is not written anywhere.   **How it used to be done.** ______________. It was not ______________ and it was not ______________.   **The things I/we would do, every time, and what each was for.** I/We would ______________: that was so that ______________. I/We would ______________: that was because ______________. And I/we would never ______________: that was so that ______________.   **What is already normal now.** ______________. That took about ______________.   **What I am still getting used to.** ______________, and I am not there yet.   **What the new arrangement has cost, precisely.** ______________.   **What I am asking for, and it is small.** ______________. I am asking for a thing that used to happen.   **And the general point.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'All four forms, each in its own place and none of them mixed',
  'Two or three _would_ actions, each with what it was for',
  'One purpose honestly left unexplained',
  'A precise cost, and a small request for a thing that used to happen',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the repeated action whose purpose they could not explain.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (140 words or more) about a practice that was formalised, or replaced, where you work — the four forms in their order, the purposes, the exact cost, the small request, and the general point for whoever writes the next set of rules.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s page as **the manager who wrote the new arrangement**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the pages in this room describe a change that was an improvement and still lost something?** Count. Almost all of them, and the lost thing is almost always a reason nobody wrote down — which is the argument for 17.7, where you go and find the person who still remembers one.'));
out.push(hw('Write the page (60+ words) with all four forms in their order and every _would_ action given its purpose. Then ask somebody who was there before the change what one of the old habits was for, and write down their answer in their words.'));

// ======================= 17.6 =======================
out.push(pb());
out.push(h2('17.6  Then, now, and the turn in between'));
out.push(p('**Function:** writing about a change in your own life   ·   **Grammar:** _until / by then / from then on / these days_ with the four forms   ·   **Pronunciation:** the stress on the time marker'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Find your **3.6** page — the one about the day you did something you had never done before. Read your own first sentence out, and then say, in one sentence, whether you would still name that day as the turn.'));
out.push(board('Until last year I was the person who did not ask. These days I am the person who is asked.', 'until / these days + the four forms'));
out.push(p('**b**  Fill the markers. **1** ______ April I had never used it alone.  **2** ______ then I had done it eleven times.  **3** ______ then on I stopped counting.  **4** ______ days I do not think about it.  **5** It was around ______ that the asking stopped being difficult.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which day would Umm Kinan have named as the turn, and which day does she now say it was?   **A** 11 April; a day in September   **B** a day in September; 11 April   **C** the first lesson; the last lesson'));
out.push(p('**b**  Listen again. **1** What happened in September, and why does she say it is the real turn?   **2** What does Yara say about the difference between the two kinds of change?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.11  The day it was not', [
  ['Ms Huda', 'Umm Kinan, you have your 3.6 page. Read your first sentence.'],
  ['Umm Kinan', '"I had never used a projector on my own before the eleventh of April." And eleven minutes for one triangle, which I wrote down and which I am still slightly ashamed of.'],
  ['Ms Huda', 'Is the eleventh of April the turn?'],
  ['Umm Kinan', 'No. I would have said so in April and I have been wrong about it for seven months. The eleventh of April was a thing I did. It is not where anything turned.'],
  ['Lubna', 'So what was?'],
  ['Umm Kinan', 'There are two candidates and I decided between them this week. The first is August, when I asked a colleague for forty minutes of her time after four months of not asking, and she said yes in about nine seconds — the day I learned that the asking was never the difficult part; the not asking was.'],
  ['Omar', 'And the second?'],
  ['Umm Kinan', 'September. A young woman came to my door, twenty-four years old, second week in the school, and she asked me why the attendance sheet is taken twice on a Tuesday. And I told her. It takes about forty seconds to tell and I have known it for nineteen years: there were two registers in 2007 because of the afternoon shift, the afternoon shift went in 2011 and the second register stayed, and the reason it stayed is a woman called Mrs Hajjar who is dead, and I am the only person in that building who knows any of it.'],
  ['Jad', 'Why is that the turn and not August?'],
  ['Umm Kinan', 'Because of what I did after she left. For twenty-four years I have been a person who is not asked — I was not asked, and I decided, somewhere, that this was about me. Then somebody asked, and I knew the answer, and I had known it for nineteen years, and nobody had ever come to the door before. Until September I used to think I had nothing anybody needed. From then on I have known that I am the oldest person in that building and that four things are in my head and in nobody else\'s.'],
  ['Ms Huda', 'And you have done something about it.'],
  ['Umm Kinan', 'I have written three of the four down. The fourth I cannot write because I do not know whether it is true or whether I have believed it since 2009 because somebody said it once. I have put a question mark next to it, and on Thursday I am going to find the only person older than me, who is the caretaker, and ask him.'],
  ['Yara', 'May I say the thing I have noticed? There are two kinds of change in this room tonight. One is a thing you did — the projector, my four sentences in week one. The other is a thing you stopped believing about yourself. We all date the first kind, because it has a date, and the turn is always in the second kind, and the second kind has no date at all.'],
  ['Ms Huda', 'Write that down, all of you, and then write your own page.'],
]));
out.push(sp());
out.push(box('Language box – writing about a change in your own life', [
  '**Three parts, and the third is the one people leave out:** **then** (_until last year I used to…_) · **now** (_these days I am used to…_) · **and the turn in between** (_it was around September that…_). A page with only then and now is a list of two states and explains nothing.',
  '**The markers that do the work:** _**until** last year_ · _**by then** I had…_ · _**from then on**_ · _**these days**_ · _**it was around then that**_ · _**for the first time since**_.',
  '**Put the four habit forms in their places.** _Until September I **used to** think I had nothing anybody needed_ (then) · _I **would** put my sheets away before anybody came in_ (the repeated detail) · _These days I **am used to** being asked_ (now) · _I **am getting used to** being the person who knows_ (still moving).',
  '**Separate a thing you did from a thing you stopped believing.** The first has a date and is easy to write. The turn is nearly always the second, and it has no date — so give it a month and say that it is approximate: _it was around September._',
  '**Name the evidence for the turn, not the feeling.** Umm Kinan\'s evidence is what she did after the young woman left: she wrote three of the four things down. A turn with nothing done after it is a mood.',
  '⚠ And mark the thing you are not sure of. _I have put a question mark next to the fourth, because I do not know whether it is true or whether I have believed it since 2009._ One question mark on a page of this kind is worth more than any amount of certainty.',
  '**Useful phrases:** I would have said so in April and I have been wrong about it · there are two candidates and I have decided between them · until September I used to think · from then on I have known · the turn is always in the second kind.',
  '**Practise:** Put each into three sentences with _until_, _these days_ and _it was around ___ that_.  1 something you used to think you could not do  2 something you now ask for  3 a habit you dropped  4 a person you used to avoid  5 a kind of work you used to refuse',
  '**Pronunciation.** 🔊 **Track 17.12** The time marker takes the stress and the rest of the clause runs fast under it: _**UN**til last year I used to think… · **THESE** days I am used to it._ Listen to six and mark the stressed marker.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A takes a change from the card and gives the three parts: then, now, and the turn — with a month on the turn and the evidence for it. B asks the two questions that make it a turn and not a mood. Swap cards.'));
out.push(dlg(null, [
  ['A', 'Until __________ I used to __________.'],
  ['B', 'And these days?'],
  ['A', 'These days I am used to __________.'],
  ['B', 'When was the turn?'],
  ['A', 'It was around __________.'],
  ['B', 'What did you do after it?'],
  ['A', '__________.'],
]));
out.push(table(['Card A – the change', 'Card B – the change'], [
  ['something you used to think you could not do', 'something you used to think was about you'],
  ['a thing you now ask for and did not use to', 'a thing you have stopped apologising for'],
  ['a habit you dropped and have not gone back to', 'a habit you took back'],
  ['a person you used to avoid talking to', 'a kind of work you used to refuse'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each of the eight, write whether the turn named was **a thing they did** or **a thing they stopped believing** — and then count. The second kind outnumbers the first, and it is the kind nobody can date, which is why the month is always approximate and the evidence always comes after.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner your own change in three parts, with your 3.6 page open in front of you. Say whether the day you named in Unit 3 is still the day you would name, and if it is not, say what the turn actually was and what you did after it.'));
out.push(p('**b**  Swap. Then each of you say which of your partner\'s two candidate turns you would choose, and why — and your partner does not have to agree.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Umm Kinan read her 3.6 first sentence — "I had never used a projector on my own before the eleventh of April" — and the eleven minutes for one triangle that she is still slightly ashamed of. Then she said that the eleventh of April is not the turn, and that she has been wrong about it for seven months: it was a thing she did, and it is not where anything turned. There were two candidates. The first is August, when she asked a colleague for forty minutes after four months of not asking and was told yes in about nine seconds — the day she learned that the asking was never the difficult part; the not asking was. The second is September, when a young woman of twenty-four in her second week asked her why the attendance sheet is taken twice on a Tuesday. It takes forty seconds to tell and she has known it for nineteen years: two registers in 2007 because of the afternoon shift, the shift gone in 2011, the second register left behind, and the reason it stayed a woman called Mrs Hajjar who is dead — and she is the only person in that building who knows any of it. Jad asked why that is the turn and not August, and she said because of what she did after the young woman left: for twenty-four years she has been a person who is not asked, and she had decided somewhere that this was about her. Until September she used to think she had nothing anybody needed; from then on she has known that she is the oldest person in that building and that four things are in her head and in nobody else\'s. She has written three of the four down; the fourth has a question mark on it, because she does not know whether it is true or whether she has believed it since 2009 because somebody said it once, and on Thursday she asks the caretaker, who is the only person older than her. And Yara said the thing worth taking home: there are two kinds of change — a thing you did, which has a date, and a thing you stopped believing about yourself, which has none; and the turn is always in the second kind._'));
out.push(p('**Listener task:** write one turn from this room, and the evidence that it was one.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Umm Kinan writes and clips to her 3.6 page. Answer the questions.'));
out.push(model([
  '**THEN, NOW, AND THE TURN** · S. Dibo · November · clipped to the page from March',
  '**Then.** Until about a year ago I was the person who did not ask. Twenty-four years in that school and I had asked a colleague for help, properly, perhaps four times. I would read a manual at home at ten at night rather than ask the man with the same projector in the next room. And I used to think — and this is the sentence the whole page is about — that I had nothing that anybody needed.',
  '**Now.** These days I am asked. Twice in October and once in the first week of November, and once by the deputy head, which I did not expect at all. I am used to the asking. I am getting used to the other half of it, which is being the person who gives the answer and is therefore responsible for it being right.',
  '**The turn, and it was not the day I would have named.** In March I wrote that the turn was the eleventh of April — the day I used the projector alone, eleven minutes for one triangle. That was a thing I did. The turn was September, approximately, when a young woman in her second week came to my door and asked why the attendance sheet is taken twice on a Tuesday, and I told her in forty seconds a thing I have known for nineteen years and had never once said aloud.',
  '**Why I am sure it was that and not August.** August was the day I asked and was told yes in nine seconds, and that only taught me about asking. September taught me that I am the oldest person in the building. Those are different sizes of fact.',
  '**What I did after she left, which is the evidence.** I wrote down the four things that are in my head and in nobody else\'s: the two registers of 2007 and why the second stayed; why the hall is not used after four; why the second-year sets are split as they are; and a fourth with a question mark on it, because I do not know whether it is true or whether I have believed it since 2009 because somebody said it once.',
  '**What I am going to do about the question mark.** Ask the caretaker, who has been there twenty-nine years and is the only person older than me. Thursday.',
  '**And the sentence I did not have in March.** A person who is not asked anything for twenty-four years will conclude that they have nothing, and they will be wrong, and nobody will ever correct them — because the correction only arrives when somebody knocks.',
]));
out.push(item('1', 'What two things does she do with her "now", and which of the two is still moving?'));
out.push(item('2', 'Why does she choose September over August, and what phrase does she use for the difference?'));
out.push(item('3', 'What is the evidence that September was a turn, and what does she do about the fourth item?'));
out.push(writers([
  'A page about a change in your own life: **then, with one repeated action and the belief underneath it** → **now, separating what is normal from what is still moving** → **the turn, and whether it is the day you would once have named** → **why that candidate and not the other** → **what you did after it, which is the evidence** → **what you are going to do next, with a day** → **and the sentence you did not have before**.',
  'Write the belief, not only the behaviour. _I used to think that I had nothing that anybody needed._ The behaviour is what you would do; the belief is why, and it is the only part a reader cannot work out for themselves.',
  'Compare your two candidate turns and say what kind of fact each one taught you. _August only taught me about asking. September taught me that I am the oldest person in the building. Those are different sizes of fact._',
  'Make the evidence an action, with a list in it. A turn is proved by what was done in the following week, not by how it felt.',
  '⚠ End with the sentence you could not have written at the start — and make it about anybody, not only you. _A person who is not asked anything for twenty-four years will conclude that they have nothing, and nobody will ever correct them._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your then-now-and-the-turn page (60 words or more).'));
out.push(p('**THEN, NOW, AND THE TURN** · ______________   **Then.** Until ______________ I was the person who ______________. I would ______________. And I used to think ______________.   **Now.** These days ______________. I am used to ______________. I am getting used to ______________, which is ______________.   **The turn, and it was not the day I would have named.** In ______________ I wrote that the turn was ______________. That was a thing I did. The turn was ______________, approximately, when ______________.   **Why I am sure it was that and not ______________.** ______________ only taught me ______________. ______________ taught me ______________. Those are different sizes of fact.   **What I did after it, which is the evidence.** ______________.   **What I am going to do next.** ______________. ______________ _(a day)_.   **And the sentence I did not have in ______________.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_until / by then / from then on / these days_ in their places',
  'The belief under the old behaviour, written out',
  'Two candidate turns compared, and a month given as approximate',
  'Evidence that is an action, and a day for the next step',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the belief they used to hold.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (140 words or more): then, now, the turn, why that turn and not the other, the evidence, the next step with a day, and the sentence you did not have in March. Clip it to your 3.6 page.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s page as **the person they were in March**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of us named in Unit 3 a day that we would not name now?** Count. And the second count: how many of the real turns are things somebody stopped believing about themselves rather than things they did? That is the finding of this cycle, and it is why the page had to be written twice — once in March with a date on it, and once in November with a month and an argument.'));
out.push(hw('Write your then-now-and-the-turn page (60+ words) and clip it to your 3.6 page. Then bring, for 17.7, the thing that used to be done differently where you work **and the oldest person who was there** — their name, how long they have been there, and whether anybody has ever asked them anything.'));

// ======================= 17.7 =======================
out.push(pb());
out.push(h2('17.7  Review & Mediate: How it used to be done here'));
out.push(p('**Function:** explaining how something used to be done   ·   **Recycling:** Units 1–17   ·   **Exam practice:** B1 Preliminary Reading Part 1, Writing Part 1, Listening Part 1'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 17 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** I am used to work nights.  **2** I used to being telephoned at two in the morning.  **3** She is getting used to finish on the third night.  **4** He would be a driver for nine years.  **5** It use to be done in a car park.  **6** From then I have known why.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the sheet Tareq filled in after ninety seconds of conversation in a yard, and then took back to be corrected.'));
out.push(box(null, [
  '**HOW IT USED TO BE DONE · reconstruction sheet** _(filled in 4 November; read back and corrected 11 November)_',
  table(['', 'As written', 'As corrected by the person who was there'], [
    ['**The practice**', 'Daily check sheets collected at the bus at the end of the day', '— correct'],
    ['**Who collected them**', 'The man on the gate', '— correct: Abu Nazih, on the gate 2004–2020'],
    ['**How**', 'Taken as the drivers came in; put in a tin; the clerk came out for the tin on a Thursday', '— **corrected:** a **Tuesday**, not a Thursday, and the tin was a paint tin'],
    ['**What it was for**', 'So that a driver did not have to walk to the office at the end of a shift', '— **corrected:** also so that a sheet was never carried home, which happened before 2004'],
    ['**When it changed**', '2019', '— correct, spring 2019'],
    ['**Why it changed**', 'A sheet went missing; a bus went out with a cracked mirror; the directorate came', '— correct, and the clerk was **Mr Fayyad**, who left in 2022'],
    ['**How long the new rule was meant to last**', 'About a month', '— **corrected:** nobody said how long; it was never a decision'],
    ['**Who remembers**', 'Abu Khaldoun, 63, in the yard since 1989', '— and nobody else'],
  ], [1.4, 2, 2]),
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. What did reading the sheet back change, and what does Ms Huda say makes a reconstruction evidence?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.13  Read it back to him', [
  ['Tareq', 'I filled this in on the fourth of November from what Abu Khaldoun told me, and then I did what Ms Huda said and took it back to him on the eleventh and read it to him line by line.'],
  ['Ms Huda', 'And?'],
  ['Tareq', 'He corrected three lines and added two names. The clerk came out for the tin on a Tuesday and not a Thursday, and he was definite about it, because Tuesday was the day the clerk came out anyway for the fuel book. The man on the gate had a name — Abu Nazih — and he was there from 2004 to 2020. And the reason I had was only half of it: the sheets were collected at the bus so that a driver did not have to walk to the office, which is what I wanted, and **also** so that no sheet was ever carried home, which used to happen before 2004 and which is the half I would never have guessed.'],
  ['Nour', 'That second half is the one that gets you the change.'],
  ['Tareq', 'That second half is the whole letter. I am not asking for a convenience any more. I am asking for the arrangement that stopped sheets leaving the premises, which is a thing the directorate cares about and I do not have to explain to anybody.'],
  ['Omar', 'What was the third correction?'],
  ['Tareq', 'The one that matters most and the one I had wrong. I wrote that the new rule was meant to last about a month. He said nobody ever said how long — it was never a decision. Somebody did a thing in a bad week in 2019 and nobody has looked at it since, and there is a difference between a rule that was agreed and a rule that was never cancelled, and for two months I have been writing letters to the second kind as though it were the first.'],
  ['Umm Kinan', 'May I say what happened with mine? I had four things in my head and I wrote them down, and the fourth had a question mark on it. I asked the caretaker on Thursday. Twenty-nine years. He answered it in one sentence and the answer was no. The hall is not closed after four because of the roof. It has never been because of the roof. It is because the key used to be held by a man who left at four, and there has been a second key since 2016, in the office, and nobody has ever taken it off the hook.'],
  ['Lubna', 'Since 2016.'],
  ['Umm Kinan', 'I have told nine years of students that the hall closes at four because of the roof. I believed it since 2009 because one person said it once and I have repeated it about two hundred times. And the sheet caught it, because the sheet has a line for _what it was for_ and I could not fill that line in without asking somebody.'],
  ['Ms Huda', 'That is the lesson of the whole unit and I want the words to be exact. A reconstruction is not evidence because you wrote it down. It is evidence when the person who was there has read it back and corrected it — and the corrections are worth more than the sheet, because a correction is the only part nobody could have invented. And notice what both sheets found. Tareq found a purpose he would never have guessed, which is the one that will win his argument. Umm Kinan found that a thing she has repeated two hundred times is false. Neither of those is in any document in either building. They were in two men of sixty-three and twenty-nine years, and nobody had asked either of them.'],
  ['Tareq', 'Four lines went to the depot manager on Wednesday, with his name in them.'],
]));
out.push(sp());
out.push(box('Language box – explaining how something used to be done', [
  '**Say the practice first, in one sentence, with _used to_ and the passive if you do not know who did it:** _the sheets **used to be collected** at the bus at the end of the day._ Then the repeated detail with _would_: _the man on the gate **would** take them as the drivers came in, and **would** put them in a tin._',
  '**Fill in the line that is never filled in: _what it was for_.** And expect two purposes, not one. The first is the convenient one everybody can guess; the second is usually about risk or about somebody who was once blamed, and it is the one that wins arguments. _Also so that no sheet was ever carried home._',
  '**Separate a rule that was agreed from a rule that was never cancelled.** _Nobody ever said how long; it was never a decision._ The two need completely different letters, and most old rules are the second kind.',
  '**Read it back and let them correct you.** _He corrected three lines and added two names._ The corrections are the evidence, because they are the part nobody could have invented — and the dates and the names arrive with them.',
  '**Be ready for the answer to be _no, that was never the reason_.** A sheet with a _what it was for_ line on it catches beliefs that have been repeated for years, including your own.',
  '**Useful phrases:** it used to be done… · the man on the gate would take them · what it was actually for · that is the half I would never have guessed · it was never a decision · he corrected three lines and added two names · nobody had ever asked him.',
  '**Pronunciation.** 🔊 **Track 17.14** Reading a reconstruction back to somebody: **one line, a pause, then the question** — _the clerk came out on a Thursday ‖ is that right?_ The rise is on the question and the line itself is flat. Listen to four and write the correction only.',
], C.lteal));
out.push(stage('3', 'Practise – and then decide together (Speaking Part 3)', 7));
out.push(p('Work in pairs. A has one of the old practices below and does **not** show it. A explains it: what it was, what the man on the gate or whoever it was would do, what it was for — both purposes — when and why it changed, and whether it was ever a decision. B must say which half of the purpose would win an argument today. **Then, in two minutes together**, decide whether you would restore it, restore half of it, or leave it. You do not have to agree. Change roles with the other practice.'));
out.push(table(['Practice A – the paper handover book', 'Practice B – the Thursday walk round'], [
  ['Kept on the ward desk until 2021', 'The manager walked the floor every Thursday until 2018'],
  ['Each nurse would write three lines at the end of a shift', 'He would start at the far end and speak to everybody'],
  ['Purpose given: a record', 'Purpose given: checking the work'],
  ['Second purpose, found later: the night staff read the day\'s', 'Second purpose, found later: people told him things standing up that they would never put in writing'],
  ['Changed when the system went electronic', 'Stopped when he was promoted'],
  ['Was it a decision? Yes, minuted', 'Was it a decision? No — it just stopped'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write each pair\'s decision and the half of the purpose they built it on. The pairs who choose _restore half of it_ nearly always build on the second purpose — the one that was found later — because the first purpose has usually been replaced by something that does it better, and the second has been replaced by nothing at all.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Use the thing you brought and the person you found. Fill in the eight lines of the reconstruction sheet aloud for your partner: the practice, who did it, how, what it was for, when it changed, why, how long the new way was meant to last, and who remembers. Your partner must ask the three questions that matter: _what was the second purpose?_, _was it ever a decision?_ and _have you read it back to them?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner reconstructed and what you decided together:  _Tareq filled in the sheet on the fourth of November from what Abu Khaldoun told him, and then took it back on the eleventh and read it to him line by line. He corrected three lines and added two names. The clerk came out for the tin on a Tuesday and not a Thursday, and he was definite, because Tuesday was the day the clerk came out anyway for the fuel book. The man on the gate had a name — Abu Nazih — and he was there from 2004 to 2020. And the reason Tareq had was only half of it: the sheets were collected at the bus so that a driver did not have to walk to the office, which is what Tareq wanted, and also so that no sheet was ever carried home, which used to happen before 2004 — the half he says he would never have guessed, and the half that is now the whole letter, because he is no longer asking for a convenience but for the arrangement that stopped sheets leaving the premises. The third correction is the one that matters most: he had written that the new rule was meant to last about a month, and Abu Khaldoun said nobody ever said how long, because it was never a decision — somebody did a thing in a bad week in 2019 and nobody has looked at it since. There is a difference between a rule that was agreed and a rule that was never cancelled, and Tareq has spent two months writing to the second kind as though it were the first. Then Umm Kinan: she had four things in her head, wrote them down, and the fourth had a question mark on it, so she asked the caretaker — twenty-nine years — and he answered in one sentence, and the answer was no. The hall is not closed after four because of the roof and never has been: the key used to be held by a man who left at four, there has been a second key in the office since 2016, and nobody has taken it off the hook. She has told nine years of students the roof, about two hundred times, because one person said it once in 2009 — and the sheet caught it, because the sheet has a line for what it was for and she could not fill it in without asking somebody. Ms Huda said a reconstruction is not evidence because you wrote it down; it is evidence when the person who was there has read it back and corrected it, and the corrections are worth more than the sheet, because a correction is the only part nobody could have invented._'));
out.push(p('**Listener task:** write the second purpose somebody found, and one belief that turned out to be false.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 1)', 7));
out.push(p('For each notice, choose the correct explanation: **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _DEPOT · Check sheets used to be collected at the gate. They are now handed in at the office window before 18.00._',
  '**2**  _WARD 4 · Staff who are used to the five-night pattern should read the new block rota before 27 October. It replaces the old pattern completely._',
  '**3**  _HALL · The hall is available until 18.00. A second key has been held in the office since 2016. The 16.00 notice on this door is out of date._',
  '**4**  _TRAINING · Attendance is signed at the door. The last forty minutes of each day are not minuted and not reported._',
  '**5**  _PRESS · The 06.10 opening is unchanged. The morning check of both machines, which stopped in 2007, starts again on Monday._',
], C.lyellow, C.orange));
[
  '**1**  **A** The place where sheets are handed in has changed.   **B** Sheets are still collected at the gate.   **C** Sheets no longer have to be handed in.',
  '**2**  **A** The five-night pattern continues alongside the blocks.   **B** The blocks are only for new staff.   **C** The old pattern has been replaced.',
  '**3**  **A** The hall shuts at 16.00.   **B** The hall may be used until 18.00 and the old notice is wrong.   **C** The second key was lost in 2016.',
  '**4**  **A** Everything in the day is recorded.   **B** Attendance is no longer taken.   **C** Part of the day is deliberately not recorded.',
  '**5**  **A** A practice that stopped is being brought back.   **B** The opening time is changing on Monday.   **C** Both machines are being replaced.',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note reconstructing how something used to be done, for the person who could change it back (60 words or more).'));
out.push(p('**HOW ______________ USED TO BE DONE** · ______________   **The practice.** Until ______________, ______________ used to be ______________.   **The detail.** ______________ would ______________, and would ______________.   **What it was for — and there are two.** The first is ______________. The second, which I would not have guessed, is ______________ — and that is the one I am writing to you about.   **When and why it changed.** ______________, because ______________.   **Whether it was ever a decision.** ______________. There is a difference between a rule that was agreed and a rule that was never cancelled.   **My source.** ______________, ______________ years here, the only person who was there. I read this sheet back to them on ______________ and they corrected ______________ lines: ______________.   **What I am asking for.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_used to_ for the practice, _would_ for the repeated detail',
  'Two purposes, with the second one named as the argument',
  'Agreed, or never cancelled — stated',
  'The source named, and the corrections they made listed',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 1)', 10));
out.push(box(null, [
  'Read this email from your English friend **Sam** and the notes you have made.',
  '_"There is a rule at my work that everybody follows and nobody can explain. I asked three people why and all three said \'it has always been like that\', which cannot be true. I would like it changed but I do not know where to start. Any ideas? Sam"_',
  '**Your notes:**  •  _Tell him who to ask, and why that person_  ·  _Tell him the one line of his sheet that matters most_  ·  _Explain the difference between a rule that was agreed and one that was never cancelled_  ·  _Tell him what to do with what he writes down_',
  'Write your email to Sam using **all four** notes. Write **140 words or more**.',
], C.grey, C.navy));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 17 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  Until 2019 we ___ sign the sheet at the bus.   a) are used to   b) used to   c) would be used to',
  '2  I am used to ___ telephoned at night.   a) being   b) be   c) been',
  '3  He ___ walk round both machines with his hand on them, every morning.   a) is used to   b) used   c) would',
  '4  I am getting used to ___ on the third night.   a) finished   b) finishing   c) finish',
  '5  I ___ used to it in January, and by March I was.   a) am not   b) did not   c) was not',
  '6  These days I ___ used to being asked.   a) am   b) was   c) use',
  '7  ___ then on I have known what is in my head and in nobody else\'s.   a) Since   b) By   c) From',
  '8  She ___ to think she had nothing that anybody needed.   a) is used   b) used   c) was used',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 1 style – three options).** 🔊 **Track 17.15** You will hear seven short extracts. For each one, choose **A**, **B** or **C**.'));
[
  '**1**  What used to happen to the check sheets?   **A** the drivers wrote their own   **B** they were collected at the bus   **C** there were none',
  '**2**  What did the speaker\'s father do every morning before anything else?   **A** counted the stock   **B** locked the gate   **C** swept the whole floor',
  '**3**  What is the speaker used to, and says is in nobody\'s job?   **A** being the one who is telephoned   **B** working alone   **C** a new analyser',
  '**4**  How long did it take the speaker to get used to waking in the afternoon?   **A** three weeks   **B** eleven days   **C** two months',
  '**5**  Where did the training use to be done?   **A** in a hotel   **B** in the office   **C** in car parks',
  '**6**  Which day does the speaker now say was the turn?   **A** a day in April   **B** a day in September   **C** a day in August',
  '**7**  What correction was made to the speaker\'s sheet?   **A** the tin was collected on a Tuesday   **B** the sheets went to the window   **C** the gateman left in 2004',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 17.15  Audio script (read after the check)', [
  ['1  Man', 'I asked for a thing in September and I have been told twice that it is impossible, and it turns out I was asking for 2019. They were taken at the bus, by the man on the gate, as the drivers came in, and he put them in a tin. Nobody in that office knows it, because everybody who was there has gone except one man of sixty-three.'],
  ['2  Man', 'He would come in at ten past six and the first thing, before the kettle and before anything else, was the broom — the whole floor, every morning, and we had a boy who could have done it. I thought for thirty years that it was about the floor. It was about twenty minutes in the shop with nobody talking to him, and you cannot sweep round a thing without looking at it.'],
  ['3  Woman', 'There are four of us and I am the one they ring, every time, because I did the course. It is not in my job, it is not in anybody\'s, it is not paid and it is not counted. And I am used to it, which is exactly why I have not asked one question about it in seven months. Being used to something is how a thing stops being a question.'],
  ['4  Woman', 'Eleven days for that one, and it is the only one of the five that is normal. The sleeping at a different time, the two days off in the middle of the week, the eating at hours no shop agrees with, the fourth night not existing — all of that is still being got used to, and I am counting, because in nine months I will not remember any of it.'],
  ['5  Man', 'Six representatives over four years, in car parks, after the last call of the day, between about half past five and seven. Not anybody\'s job, not paid, not asked for, not recorded. If I had been run over, nobody at that company would have known the training existed. Now there is a room with a door and a list of names I did not choose.'],
  ['6  Woman', 'In March I wrote that it was the eleventh of April, the day I used the projector on my own, eleven minutes for one triangle. That was a thing I did. The turn was a week in September, when a young woman in her second week knocked on my door and asked me why the sheet is taken twice on a Tuesday, and I told her in forty seconds a thing I had known for nineteen years and never said out loud.'],
  ['7  Man', 'I read it back to him line by line and he changed three things. The clerk came out for the tin on a Tuesday, not a Thursday, and he was definite, because Tuesday was the day the clerk came out anyway for the fuel book. He gave me the gateman\'s name as well. And he said nobody ever decided how long the new way would last, which is the correction that changes my letter.'],
]));
out.push(p('**C  Writing.** Write the reconstruction note (140+ words) for a practice that used to be done differently where you work: the practice, the repeated detail, both purposes, when and why it changed, whether it was ever a decision, your source and their corrections, and what you are asking for.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 17)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say what used to be done, and what used to be true',
  '☐ use _would_ for repeated past actions, and say what each one was for',
  '☐ say what I am used to — and notice that I had stopped noticing it',
  '☐ say what is becoming normal, with the days or weeks on it',
  '☐ keep _I used to_ and _I am used to_ apart, every time',
  '☐ put all four forms into one account of a change',
  '☐ write about a change in my own life: then, now, and the turn between',
  '☐ reconstruct how something used to be done, read it back, and be corrected',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 18 – VERB PATTERNS', [
  '_Verb + -ing · verb + to · both, with a change of meaning · adjective + to · preposition + -ing · verb + object + to._ Unit 17 ended with a form where _to_ was a **preposition** — _used to working_. **Unit 18** is the whole system that question belongs to: which verbs take _-ing_, which take _to_, which take both and mean two different things, and why _I stopped to read it_ and _I stopped reading it_ are opposite events.',
  '**18.3 is the cycle to be careful with**: _remember · forget · stop · try · go on_ change their meaning with the pattern, and an instruction sheet that uses the wrong one gives the wrong instruction. **18.6** writes the pattern-dense paragraph, and **18.7** explains an instruction sheet that is full of them.',
  '**And 18.7 takes the prediction board down.** It went up in 14.1 and it has been on the wall for four units. Bring your copy of what you predicted, with your name and your date on it.',
  '**After Unit 18 comes the Mid-Book Test** — Units 13–18, sixty marks: Reading 20, Writing 15, Listening 15, Speaking 10. Everything in it has been taught.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · Unit 17 · Student\'s Book');
