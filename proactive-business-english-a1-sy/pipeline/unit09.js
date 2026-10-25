// Proactive Business English A1 · Syria Edition · Book 2 · Unit 9 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'was · were · last night · last week · to happen · to arrive · to finish work · to open · to close · to stop · to start · to take · to give · to find · to lose · did not · what happened · then · after that · overnight · overtime · cover';
const AHEAD_AT_A2 = 'overnight · overtime · cover';

out.push(h1('Unit 9  Yesterday'));
out.push(p('_Proactive Business English · A1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**9.1**  say where people were',
  '**9.2**  say what happened — fifteen verbs in the past',
  '**9.3**  say when it happened',
  '**9.4**  say what did NOT happen',
  '**9.5**  ask what happened',
  '**9.6**  tell it in order — three sentences',
  '**9.7**  Review: the shift report — and one problem to talk about together',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**Hala Mourad** (29) — the baker at the shop on the corner. **She starts at four in the morning, before anybody in this book is awake.** **She has her own night shift and her own three sentences.** You meet her in **9.7**.',
], C.grey, C.navy));
out.push(sp());
out.push(box('⚠ Everything in this unit has already finished', [
  '**For eight units you have talked about now.** _I am the storeman. The cartons are crushed. Can I have the tape?_ ⚠ **This unit is about last night.**',
  '⚠ **It is the biggest piece of grammar in the course and it is fifteen verbs and one word.** **The fifteen verbs are the ones you use every day. The one word is _did not_.**',
  '⚠ **And at the end of it you can do the thing a night shift needs: tell a man who was not there what happened, in three sentences, in order.**',
], C.lyellow, C.orange));

// ======================= CYCLE 9.1 =======================
out.push(pb());
out.push(h2('9.1  Where everybody was at four o\'clock'));
out.push(p('**You can:** say where people were   ·   **Grammar:** _was / were_   ·   **Sound:** was and were, both quiet'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Where were you at eight o\'clock this morning? **Say it:** _I was ______._'));
out.push(p('**b**  Where were you and your family last night? **Say it:** _We were ______._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where was Fadi at four?   **A** in the yard   **B** on the Homs road   **C** at the gate'));
out.push(p('**b**  Listen again.   **1** Who was in the office?   **2** Why does Abu Yasser want to know?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 9.1  At four o\'clock', [
  ['Abu Yasser', 'At four o\'clock yesterday. Where was everybody?'],
  ['Ammar', 'I was in the back store. On row three.'],
  ['Abu Yasser', 'And Samih?'],
  ['Ammar', 'He was with me. We were both on row three.'],
  ['Abu Yasser', 'Fadi?'],
  ['Ammar', 'Fadi was on the Homs road. He left at two.'],
  ['Abu Yasser', 'And Nour and Majd?'],
  ['Ammar', 'Nour was in the office. Majd was at the counter.'],
  ['Abu Yasser', 'So nobody was in the yard at four.'],
  ['Ammar', 'Nobody was in the yard. Why?'],
  ['Abu Yasser', 'Because somebody left the big gate open and I want to know who was near it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_was_ and _were_**',
  table(['was', 'were'], [
    ['**I was** in the back store.', '**We were** on row three.'],
    ['**He was** on the road.', '**You were** at the counter.'],
    ['**She was** in the office.', '**They were** in the yard.'],
    ['**It was** open.', '**Nobody was** in the yard. _(nobody takes **was**)_'],
  ], [2, 2.4]),
  '⚠ **_was_ for one person: I, he, she, it.** **_were_ for more than one: we, you, they.** ⚠ **_I was_, not ~~I were~~** — **and that is the one to get right.**',
  '⚠ **_nobody_ and _everybody_ take _was_**, **even though they feel like a lot of people.** _Nobody **was** in the yard._',
  '⚠ **And say WHERE exactly.** _In the back store, on row three._ **Unit 4 again: a place with a number on it is an answer; _in the store_ is nearly an answer.**',
  '**Practise:** Write _was_ or _were_.',
  '1 I ______ in the yard.   2 We ______ on row three.   3 Fadi ______ on the road.   4 Nobody ______ at the gate.',
  '**Useful words:**  I was…  ·  we were…  ·  nobody was…  ·  at four o\'clock  ·  on row three',
  '**Sound — was and were, both quiet.** 🔊 **Track 9.2** Listen. _I was in the BACK STORE._ **_was_ is quiet and fast; the PLACE is the loud part.** **A loud _was_ sounds like you are arguing about it.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One asks about four o\'clock. One answers. Then change places.'));
out.push(dlg(null, [
  ['A', 'At __________ yesterday. Where was everybody?'],
  ['B', 'I was __________. __________.'],
  ['A', 'And __________?'],
  ['B', 'He was with me. We were both __________.'],
  ['A', '__________?'],
  ['B', '__________ was __________. He left at __________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['four o\'clock · in the back store · on row three · Samih · Fadi · on the Homs road · two', 'six o\'clock · at the counter · by the till · Hala · the driver · at the bakery · five']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write where three people were. Three places.'));
out.push(PHRASE_CARD(['I was…', 'we were…', 'nobody was…', 'at four o\'clock', 'on row three']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Where were five people at your work at four o\'clock yesterday? **Write it.**'));
out.push(table(['Who', 'Where they were', 'was / were'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.2, 2.8, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _At four o\'clock I was ______. ______ was ______. ______ and ______ were ______._'));
out.push(p('**Listener task:** count the _was_ and _were_ mistakes. **A number, not a list.**'));
out.push(p('**Board clinic:** your teacher writes six lines. Three have the wrong one. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the sheet Abu Yasser filled in. Then answer.'));
out.push(box(null, [
  '**WHERE EVERYBODY WAS — THURSDAY, 4.00 p.m.**',
  table(['Who', 'Where', 'Near the big gate?'], [
    ['Ammar Zreik', 'back store, row 3', 'no'],
    ['Samih Qassar', 'back store, row 3', 'no'],
    ['Fadi Saeed', 'the Homs road — left at 2.00', 'no'],
    ['Nour Mansour', 'the office', 'no'],
    ['Majd Bitar', 'the counter', 'no'],
    ['Abu Raed Najjar', '⚠ **the small gate, until 3.45**', '⚠ **yes — and he went home at 3.45**'],
  ], [1.8, 2.4, 1.8]),
  '⚠ **Six people. Five were nowhere near it. One was, and he went home fifteen minutes before. A.Y.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many people were in the back store?'));
out.push(item('2', 'Who was nearest the big gate, and when did he leave?'));
out.push(item('3', 'What does the sheet NOT tell you?'));
out.push(box('Writer\'s box', [
  '**A where-everybody-was sheet has three columns:** who → **where, exactly** → **the question you are actually asking**.',
  '⚠ **The third column is the point.** **Abu Yasser is not interested in where people were; he is interested in who was near the big gate.** **A sheet with no third column is a sheet that answers nothing.**',
  '⚠ **And put the TIME in the heading, with a.m. or p.m.** **_4.00_ on its own is two different times, and 3.1 said so.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a where-everybody-was sheet for your own work (**15 words or more**). Pick a question for the third column.'));
out.push(table(['Who', 'Where', '______________?'], [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
], [1.8, 2.4, 1.8]));
out.push(p('⚠ **______________** ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['A time in the heading, with a.m. or p.m.', ''],
  ['A place with a number or a name, not just _the store_', ''],
  ['A third column that asks something', ''],
  ['A line at the bottom saying what it adds up to', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their third column heading. The class says what question it answers.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about where you and the people at your work were at one time yesterday (**20 to 35 words**). Who was alone? Who was with somebody?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Who could say where you were?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many people were alone, with nobody who could say where they were? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** where six people at your work were at one time yesterday (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 9.2 =======================
out.push(pb());
out.push(h2('9.2  Fifteen verbs, and what they do in the past'));
out.push(p('**You can:** say what happened   ·   **Grammar:** the past simple — fifteen verbs   ·   **Sound:** the -ed at the end'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say three things you did yesterday. In Arabic. Your teacher writes the English.'));
out.push(p('**b**  Look at the fifteen verbs in the box. Which five do you use most at work? **Say it.**'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What happened at eleven o\'clock?   **A** the lorry came   **B** the light went out   **C** the gate closed'));
out.push(p('**b**  Listen again.   **1** What did Samih do first?   **2** How many things does he say happened?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 9.3  The night shift, in order', [
  ['Abu Yasser', 'The night shift. Tell me.'],
  ['Samih', 'I started at ten. I opened the back store and I checked the shelves.'],
  ['Abu Yasser', 'Then?'],
  ['Samih', 'At eleven the light over the loading door went out. I stopped work.'],
  ['Abu Yasser', 'You stopped?'],
  ['Samih', 'I stopped. I took the torch from the counter. I finished row one with the torch.'],
  ['Abu Yasser', 'And then?'],
  ['Samih', 'Then the lorry arrived at one. Early. I opened the gate and we unloaded it in the dark.'],
  ['Abu Yasser', 'In the dark.'],
  ['Samih', 'In the dark. I gave the driver the note at two and he left. Then I closed the gate and I finished at six.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Fifteen verbs. Learn these fifteen and you can tell a shift.**',
  table(['now', 'yesterday', 'now', 'yesterday'], [
    ['**start**', '**started**', '**take**', '⚠ **took**'],
    ['**finish**', '**finished**', '**give**', '⚠ **gave**'],
    ['**open**', '**opened**', '**find**', '⚠ **found**'],
    ['**close**', '**closed**', '**lose**', '⚠ **lost**'],
    ['**stop**', '**stopped**', '**go**', '⚠ **went**'],
    ['**check**', '**checked**', '**come**', '⚠ **came**'],
    ['**arrive**', '**arrived**', '**leave**', '⚠ **left**'],
    ['**happen**', '**happened**', '', ''],
  ], [1, 1.2, 1, 1.2]),
  '⚠ **Eight of them just add _-ed_.** **start → started. open → opened.** **_stop_ doubles the p: stopped.**',
  '⚠ **Seven do not, and they are the seven you use most.** **took · gave · found · lost · went · came · left.** **There is no rule. Learn the seven.**',
  '⚠ **And the past is the SAME for everybody:** _I opened · he opened · we opened · they opened._ **No -s, no change.** **After Unit 3.4 that is a relief, and it is worth saying so.**',
  '**Practise:** Write the past.',
  '1 I ______ (start) at ten.   2 The light ______ (go) out.   3 I ______ (take) the torch.   4 The lorry ______ (arrive) at one.   5 He ______ (leave) at two.',
  '**Say it. Write it. Check it** — say each past verb aloud before you write it, then check it against the fifteen in the table.',
  '**Useful words:**  I started…  ·  I took…  ·  it went out  ·  the lorry arrived  ·  he left',
  '**Sound — the -ed at the end.** 🔊 **Track 9.4** Listen. **Three sounds and you cannot choose:** _start**ed** /ɪd/ · open**ed** /d/ · check**ed** /t/._ **Say each one four times. Nobody will correct you if you get it wrong, and your ear will get it right in a month.**',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One asks. One tells the shift, in order. Then change places.'));
out.push(dlg(null, [
  ['A', 'The night shift. Tell me.'],
  ['B', 'I started at __________. I opened __________ and I checked __________.'],
  ['A', 'Then?'],
  ['B', 'At __________ the __________ __________. I stopped work.'],
  ['A', 'And then?'],
  ['B', 'I took __________. Then the lorry arrived at __________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['ten · the back store · the shelves · eleven · light went out · the torch · one', 'nine · the shop · the bread · ten · water stopped · a bucket · midnight']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the verbs you hear in the past. **How many? Count them.**'));
out.push(PHRASE_CARD(['I started…', 'I took…', 'it went out', 'the lorry arrived', 'he left']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Six things that happened at your work yesterday. **Write it** with the past verb.'));
out.push(table(['', 'What happened', 'The verb'], [['**1**', '', ''], ['**2**', '', ''], ['**3**', '', ''], ['**4**', '', ''], ['**5**', '', ''], ['**6**', '', '']], [0.6, 3.6, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Yesterday I ______. Then ______. At ______ the ______ ______._'));
out.push(p('**Listener task:** how many of the SEVEN hard verbs did you hear? _took · gave · found · lost · went · came · left._'));
out.push(p('**Board clinic:** your teacher writes eight past verbs. Three are wrong — _goed_, _taked_, _leaved_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the night-shift sheet. Then answer.'));
out.push(box(null, [
  '**NIGHT SHIFT — THURSDAY INTO FRIDAY — S. QASSAR**',
  table(['Time', 'What happened'], [
    ['22.00', 'I **started**. I **opened** the back store.'],
    ['22.15', 'I **checked** rows one to four.'],
    ['23.00', '⚠ **The light over the loading door went out.** I **stopped** work.'],
    ['23.10', 'I **took** the torch from the counter.'],
    ['01.00', '⚠ **The lorry arrived — two hours early.** I **opened** the gate.'],
    ['01.00–02.00', 'We **unloaded** in the dark. ⚠ **I did not count it.**'],
    ['02.00', 'I **gave** the driver the note. He **left**.'],
    ['06.00', 'I **closed** the gate and **finished**.'],
  ], [1.2, 4.4]),
  '⚠ **The light is still out. Nobody has been told but you. S.Q.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What time did the light go out?'));
out.push(item('2', 'How early was the lorry?'));
out.push(item('3', 'Which line is the one Abu Yasser will stop at?'));
out.push(box('Writer\'s box', [
  '**A shift sheet is a TIME column and a what-happened column, in order, from the start to the end.**',
  '⚠ **24-hour time on a night shift. Always.** **_1.00_ on a sheet that covers Thursday into Friday is unreadable;** **_01.00_ is not.** **Unit 3.2 said this and a night shift is where it matters.**',
  '⚠ **And the line that costs money goes on the sheet too:** _I did not count it._ **A shift sheet with only the good news on it is a shift sheet the next man cannot use.** **9.4 is about that sentence.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a shift sheet for your own last shift (**15 words or more**). 24-hour time, in order.'));
out.push(table(['Time', 'What happened'], [
  ['', ''],
  ['', ''],
  ['', ''],
  ['', ''],
  ['', ''],
  ['', ''],
], [1.2, 4.4]));
out.push(p('⚠ **______________** ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['24-hour time on every line', ''],
  ['The lines are in order', ''],
  ['Past verbs — no _goed_, no _taked_', ''],
  ['At least one line that is bad news', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their bad-news line. The class says if they would have written it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a shift that did not go to plan (**20 to 35 words**). What happened? When? What did you do?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Did you write it down at the time?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many was it written down at the time? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** your last shift as a sheet, with 24-hour times and eight lines (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 9.3 =======================
out.push(pb());
out.push(h2('9.3  Last night, last week, on Monday'));
out.push(p('**You can:** say when it happened   ·   **Grammar:** _last night · yesterday · on Monday · at eleven_   ·   **Sound:** the time word at the front'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say four times in the past. _Last night · yesterday · last week · on Monday._ Which is nearest to now?'));
out.push(p('**b**  Read the two lines. Which tells you more? _The light went out · Last night at eleven the light went out._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How long has the light been out?   **A** one night   **B** three nights   **C** a week'));
out.push(p('**b**  Listen again.   **1** What did Samih think?   **2** What does that change?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 9.5  Three nights, not one', [
  ['Abu Yasser', 'The light went out last night at eleven.'],
  ['Samih', 'Last night, and the night before, and Tuesday.'],
  ['Abu Yasser', 'Three nights?'],
  ['Samih', 'Three nights. I thought somebody had told you.'],
  ['Abu Yasser', 'Nobody told me anything. I thought it was last night.'],
  ['Samih', 'On Tuesday it went out at half past ten. On Wednesday at eleven. Last night at eleven.'],
  ['Abu Yasser', 'Three times, at about the same time, three nights running.'],
  ['Samih', 'Is that different from one night?'],
  ['Abu Yasser', 'One night is a bulb. Three nights at the same time is the wiring, and the wiring is a man from outside.'],
  ['Samih', 'So the WHEN changes what it is.'],
  ['Abu Yasser', 'The when changes what it is. One night I send you a bulb. Three nights I shut the loading door.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**When it happened**',
  table(['Word', 'What it means', 'Where it goes'], [
    ['**yesterday**', 'the day before today', 'start or end'],
    ['**last night**', 'the night before today', 'start or end'],
    ['**last week**', 'the week before this one', 'start or end'],
    ['**on Monday**', 'that day — ⚠ **_on_, from 3.1**', 'start or end'],
    ['**at eleven**', 'that time — ⚠ **_at_, from 3.2**', 'usually at the end'],
  ], [1.3, 2.4, 1.6]),
  '⚠ **_last_ with night, week, month, year — and NO _the_:** **last night**, not ~~the last night~~.',
  '⚠ **Put the when AT THE FRONT when it is the important part:** _**Last night at eleven** the light went out._ **At the back when the thing is the important part:** _The light went out **last night at eleven**._ **Both are right.**',
  '⚠ **And the finding in the dialogue, which is worth more than the grammar:** **_one night_ and _three nights_ are different problems.** **One night is a bulb. Three nights at the same time is the wiring.** **The WHEN changes WHAT IT IS.**',
  '**Practise:** Add a when.',
  '1 The light went out. → ______________.   2 The lorry came early. → ______________.   3 I lost the key. → ______________.',
  '**Useful words:**  last night  ·  yesterday  ·  last week  ·  on Monday  ·  three nights running',
  '**Sound — the time word at the front.** 🔊 **Track 9.6** Listen. _LAST NIGHT at eleven, the light went out._ **A small stop after the when.** **It tells the listener to put everything that follows in the past.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One reports one time. One says it happened more than once. Then change places.'));
out.push(dlg(null, [
  ['A', 'The __________ __________ last night at __________.'],
  ['B', 'Last night, and the night before, and __________.'],
  ['A', 'Three nights?'],
  ['B', 'Three nights. I thought somebody had told you.'],
  ['A', 'Three times, at about the same time, three nights running.'],
  ['B', 'Is that different from one night?'],
]));
out.push(table(['Card 1', 'Card 2'], [['light went out · eleven · Tuesday', 'water stopped · half past nine · Sunday']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** how many nights? **And at what times?** Write all of them.'));
out.push(PHRASE_CARD(['last night', 'yesterday', 'last week', 'on Monday', 'three nights running']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four things that happened at your work more than once. **Write it** with all the whens.'));
out.push(table(['What happened', 'When — all the times', 'How many times'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.8, 2.4, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ happened on ______, on ______ and ______. ______ times._'));
out.push(p('**Listener task:** which thing has happened most often in this class? **Count the times, not the things.**'));
out.push(p('**Board clinic:** your teacher writes four lines with no when. The class adds one to each — **and then asks whether it happened before.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Abu Yasser wrote after the conversation. Then answer.'));
out.push(box(null, [
  '**THE LOADING DOOR LIGHT — WHAT WE ACTUALLY KNOW**',
  table(['When', 'Time it went out', 'Who was there'], [
    ['Tuesday night', '22.30', 'S. Qassar'],
    ['Wednesday night', '23.00', 'S. Qassar'],
    ['Thursday night', '23.00', 'S. Qassar'],
  ], [1.8, 1.6, 1.8]),
  '⚠ **Three nights. Always between half past ten and eleven. Always after about an hour of use.**',
  '⚠ **Not a bulb. An electrician, Monday. Loading door CLOSED after dark until then.**',
  '⚠ **And one more thing: three nights and one man knew. A.Y.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many nights, and at what times?'));
out.push(item('2', 'What did Abu Yasser decide it was?'));
out.push(item('3', 'What is the last line about?'));
out.push(box('Writer\'s box', [
  '**A happened-again sheet has one line for every time it happened**, **with the date and the time on each.**',
  '⚠ **One line per time, not one line for the problem.** **Three lines showing half past ten, eleven and eleven is a PATTERN.** **One line saying _happens most nights_ is a complaint.**',
  '⚠ **Then one line saying what the pattern means**, **and one saying what happens now.** **A sheet that stops at the pattern is still only information.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a happened-again sheet for something at your own work (**15 words or more**).'));
out.push(table(['When', 'Time', 'Who was there'], [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
], [1.8, 1.6, 1.8]));
out.push(p('⚠ **The pattern:** ______________   ⚠ **So:** ______________   ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['One line for every time, with a date', ''],
  ['A time on every line', ''],
  ['A line naming the pattern', ''],
  ['A line saying what happens now', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their pattern line. The class says if they can see it in the table above.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something that keeps happening at your work (**20 to 35 words**). How many times? When? Has anybody written it down?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _How many people know?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many of these things are known to only one person? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** every time one thing has happened at your work, with dates and times (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 9.4 =======================
out.push(pb());
out.push(h2('9.4  I did not count it'));
out.push(p('**You can:** say what did not happen   ·   **Grammar:** _did not_ + the bare verb   ·   **Sound:** DID NOT, said clearly'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name one thing you did not finish yesterday. **Say it:** _I did not ______._'));
out.push(p('**b**  Read the two lines. Which is correct? _I did not counted it · I did not count it_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What did Samih not do?   **A** open the gate   **B** count the load   **C** give the driver the note'));
out.push(p('**b**  Listen again.   **1** Why not?   **2** What does Abu Yasser say about him writing it down?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 9.7  The line that was hardest to write', [
  ['Abu Yasser', 'Line six. _I did not count it._'],
  ['Samih', 'I did not count it. We unloaded in the dark with one torch.'],
  ['Abu Yasser', 'Forty cartons in the dark.'],
  ['Samih', 'Forty on the paper. I did not count forty. I counted nothing.'],
  ['Abu Yasser', 'Did you sign the note?'],
  ['Samih', 'I signed it and I wrote _not counted, no light_ beside my name. Like Unit five.'],
  ['Abu Yasser', 'Good. And you wrote it on the sheet as well.'],
  ['Samih', 'That line was the hardest one to write.'],
  ['Abu Yasser', 'I know. And it is the only line on that sheet I am going to use.'],
  ['Samih', 'Use it for what?'],
  ['Abu Yasser', 'To tell the office why we are counting forty cartons again this morning. Without that line I would not know to.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Saying what did not happen**',
  table(['+', '–'], [
    ['I **counted** it.', 'I **did not count** it.'],
    ['I **took** the torch.', 'I **did not take** the torch.'],
    ['The lorry **came**.', 'The lorry **did not come**.'],
    ['I **went** home.', 'I **did not go** home.'],
  ], [2, 2.6]),
  '⚠ **_did not_ + THE BARE VERB.** **_I did not count_, not ~~I did not counted~~.** ⚠ **And the hard verbs go back to normal:** _I **took**_ → _I **did not take**_. _I **went**_ → _I **did not go**_.',
  '⚠ **It is the same move as Unit 3.4:** **the -s went onto _does_ and came off the verb.** **Here the past goes onto _did_ and comes off the verb.** **One idea, twice.**',
  '⚠ **And the thing this cycle is really about.** **_I did not count it_ was the hardest line on Samih\'s sheet and the only one his supervisor used.** **A shift sheet with only the good news on it tells the next man nothing he needs.**',
  '**Practise:** Make it negative.',
  '1 I counted it. → ______________.   2 I took the torch. → ______________.   3 The lorry came. → ______________.   4 I found the key. → ______________.',
  '**Useful words:**  I did not count it.  ·  I did not take…  ·  it did not come  ·  not counted, no light  ·  I could not see.',
  '**Sound — DID NOT, said clearly.** 🔊 **Track 9.8** Listen. _I DID NOT count it.↘_ **Both words, loud, no running together.** ⚠ **At work say _did not_, not _didn\'t_** — **_didn\'t_ disappears on a telephone and in a yard, and then you have said you DID count it.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One asks about the line. One explains. Then change places.'));
out.push(dlg(null, [
  ['A', 'Line six. _I did not __________ it._'],
  ['B', 'I did not __________ it. We __________ in the dark with __________.'],
  ['A', '__________ in the dark.'],
  ['B', '__________ on the paper. I did not __________ __________. I counted nothing.'],
  ['A', 'Did you sign the note?'],
  ['B', 'I signed it and I wrote __________ beside my name.'],
]));
out.push(table(['Card 1', 'Card 2'], [['count · count · unloaded · one torch · Forty · count forty · not counted, no light', 'check · check · loaded · no list · Twelve · check twelve · not checked, no list']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** what did the speaker NOT do, and what did he write beside his name? Two answers.'));
out.push(PHRASE_CARD(['I did not count it.', 'I did not take…', 'it did not come', 'not counted, no light', 'I could not see.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four things you did not do at work yesterday, and why. **Write it.**'));
out.push(table(['What I did not do', 'Why not', 'Did I write it down?', 'Did anybody find out?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 1.4, 1.4, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I did not ______, because ______. I wrote it down / I did not write it down._'));
out.push(p('**Listener task:** count the things that were written down. **Then count the ones somebody found out about anyway.**'));
out.push(p('**Board clinic:** your teacher writes four lines. Two say _did not counted_ or _did not took_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the sheet Nour pinned up afterwards. Then answer.'));
out.push(box(null, [
  '**WHAT THE "I DID NOT" LINES ARE FOR**',
  table(['The line on the sheet', 'What the office did with it'], [
    ['_I did not count the lorry — no light._', '⚠ **counted all forty the next morning; two short; claimed from Aleppo**'],
    ['_I did not lock the small gate — no key._', '**a spare key cut on Monday, 4,000 pounds**'],
    ['_The electrician did not come._', '**rang him at eight; he had the wrong week**'],
    ['_I did not finish row four._', '**Ammar did it at seven; nobody looked for it twice**'],
  ], [2.6, 3.2]),
  '⚠ **Four lines that say somebody did NOT do something, and the office acted on every one. N.M.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What happened because of the first line?'));
out.push(item('2', 'What did the spare key cost?'));
out.push(item('3', 'What did the last line save?'));
out.push(box('Writer\'s box', [
  '**A did-not line has two parts:** **what you did not do** → **why not**.',
  '⚠ **The _why not_ is what makes it a report instead of an admission.** _I did not count it — no light._ **Four words, and now it is about a light and not about a man.**',
  '⚠ **And the line goes on the sheet even when nobody would have known.** **The last line in that table — _I did not finish row four_ — saved Ammar looking for finished work.** **Nobody would ever have found out, and writing it saved somebody twenty minutes.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write four did-not lines from your own work, each with a reason (**15 words or more**).'));
out.push(p('**I DID NOT — ______________**   **1** I did not ______________ — ______________.   **2** I did not ______________ — ______________.   **3** ______________ did not ______________ — ______________.   **4** I did not ______________ — ______________.   ⚠ **Who needs to know:** ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['_did not_ + the bare verb', ''],
  ['A reason on every line', ''],
  ['At least one line nobody would have found out about', ''],
  ['A line saying who needs to know', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read the line nobody would have found out about. The class says what it saves.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you did not do at work and did write down (**20 to 35 words**). What was it? Why not? What happened next?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _What would have happened if you had not written it?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many would nobody have found out? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** four things you did not finish today, with a reason on each (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 9.5 =======================
out.push(pb());
out.push(h2('9.5  What happened?'));
out.push(p('**You can:** ask what happened   ·   **Grammar:** _What happened? · Did you…?_   ·   **Sound:** the open question'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Something has gone wrong and you were not there. What do you ask? Say it in Arabic, then in English.'));
out.push(p('**b**  Read the two questions. Which gets more out of a man? _Who broke it? · What happened?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many questions does Abu Yasser ask?   **A** one   **B** three   **C** six'));
out.push(p('**b**  Listen again.   **1** What is his first question?   **2** What does he NOT ask?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 9.9  One question, and then silence', [
  ['Abu Yasser', 'Samih. What happened?'],
  ['Samih', 'The light went out at eleven. I took the torch. The lorry came at one, two hours early, and we unloaded in the dark. I did not count it. I signed the note and wrote _not counted, no light_.'],
  ['Abu Yasser', '_(says nothing)_'],
  ['Samih', 'And the light has been out three nights, not one. I should have told you on Tuesday.'],
  ['Abu Yasser', 'Yes.'],
  ['Samih', 'Are you not going to ask me anything else?'],
  ['Abu Yasser', 'You told me everything in forty seconds. What would I ask?'],
  ['Samih', 'Most men ask who did it.'],
  ['Abu Yasser', 'Nobody did it. A light went out. And if I had asked _who left the gate open_ you would have told me about the gate and not about the light.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking about the past**',
  table(['The question', 'What it gets you'], [
    ['**What happened?**', '⚠ **everything the other man thinks matters — the best question there is**'],
    ['**What time did it happen?**', 'one fact'],
    ['**Did you count it?**', 'yes or no — ⚠ **ask this LAST, not first**'],
    ['**Who did it?**', '⚠ **a name, and nothing else** — **and often the wrong name**'],
  ], [1.8, 3.6]),
  '⚠ **Open questions first, closed questions last.** **_What happened?_ then silence.** **A man who is asked an open question tells you the thing HE thinks matters, and he is usually right.**',
  '⚠ **_Did you…?_ + the bare verb:** _**Did** you **count** it?_ **Not** ~~did you counted~~. **Same rule as 9.4.**',
  '⚠ **And the thing the dialogue shows rather than says:** **Abu Yasser said nothing for four seconds and got the three-nights story.** **The silence after the question is part of the question.**',
  '**Practise:** Write the question.',
  '1 You want the whole story. ______________?   2 You want the time. ______________?   3 You want yes or no about the count. ______________?',
  '**Useful words:**  What happened?  ·  What time…?  ·  Did you…?  ·  Nobody did it.  ·  What would I ask?',
  '**Sound — the open question.** 🔊 **Track 9.10** Listen. _What HAPPENED?↘_ **Down at the end, because it starts with a question word** — **4.3 and 7.5 again.** **And then nothing. Count four seconds of silence.** Say it four times, with the silence.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One asks _what happened_ and then stays silent. One tells it. Then change places.'));
out.push(dlg(null, [
  ['A', '__________. What happened?'],
  ['B', 'The __________ __________ at __________. I took __________. The __________ came at __________ and we __________ in the dark. I did not __________ it.'],
  ['A', '_(says nothing — count four seconds)_'],
  ['B', 'And it has been __________ __________ nights, not one.'],
  ['A', 'Yes.'],
  ['B', 'Are you not going to ask me anything else?'],
]));
out.push(table(['Card 1', 'Card 2'], [['Samih · light went out · eleven · the torch · lorry · one · unloaded · count · out three', 'Hala · water stopped · ten · a bucket · bread · midnight · washed · wash · off two']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** how many facts did the second speaker give after the silence? **Count them.**'));
out.push(PHRASE_CARD(['What happened?', 'What time…?', 'Did you…?', 'Nobody did it.', 'What would I ask?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('**Ask your partner** _what happened_ about a bad day at their work. **Then say nothing for four seconds.** **Write it.**'));
out.push(table(['What they said first', 'What they added after the silence'], [['', ''], ['', '']], [2.4, 2.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I asked what happened. He said ______. Then I said nothing, and he said ______._'));
out.push(p('**Listener task:** in how many pairs did the silence get more information? **Count them. It is nearly all of them.**'));
out.push(p('**Board clinic:** your teacher asks four students _who did it?_ and then four students _what happened?_ **Compare the answers.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the card in the supervisors\' room. Then answer.'));
out.push(box(null, [
  '**WHEN SOMETHING HAS GONE WRONG — WHAT TO ASK, IN ORDER**',
  '**1** _What happened?_ ⚠ **Then say nothing. Count to four.**',
  '**2** _What time?_ ⚠ **Only if he has not said.**',
  '**3** _Has it happened before?_ ⚠ **This is the question that finds the wiring instead of the bulb.**',
  '**4** _What did you not do?_ ⚠ **Easier to answer than "what went wrong".**',
  '**5** _What do you need?_',
  '⚠ **Do NOT ask who did it. You will get a name and lose the story. A.Y.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What do you do after question 1?'));
out.push(item('2', 'Which question finds a pattern?'));
out.push(item('3', 'Which question must you not ask, and why?'));
out.push(box('Writer\'s box', [
  '**A what-to-ask card is five numbered questions, in order, with the OPEN one first.**',
  '⚠ **And it has a line saying what NOT to ask.** _Do not ask who did it. You will get a name and lose the story._ **The most useful line on the card is the one that takes a question away.**',
  '⚠ **Question 3 is the one most people never ask:** _has it happened before?_ **One night is a bulb and three nights is the wiring** — **and nobody volunteers the other two nights unless they are asked.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a what-to-ask card for your own work (**15 words or more**). Five questions, and one you must not ask.'));
out.push(p('**WHEN SOMETHING HAS GONE WRONG — ______________**   **1** ______________? ⚠ **______________**   **2** ______________?   **3** ______________?   **4** ______________?   **5** ______________?   ⚠ **Do NOT ask ______________, because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['The open question first', ''],
  ['A question about whether it happened before', ''],
  ['A question asking what the person needs', ''],
  ['A line saying what NOT to ask, with the reason', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their _do not ask_ line. The class says what it protects.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time somebody asked you the wrong question (**20 to 35 words**). What did they ask? What did you tell them? What did they not find out?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Did they ever find out the rest?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many was the rest never found out? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** the five questions you would ask, in order, and the one you would not (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 9.6 =======================
out.push(pb());
out.push(h2('9.6  Three sentences, in order'));
out.push(p('**You can:** tell a finished shift in three sentences   ·   **Grammar:** _first · then · after that_   ·   **Sound:** the three stops'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Tell your partner your morning in three sentences. **Not four. Three.**'));
out.push(p('**b**  Read the two versions. Which can you remember? _nine things in one long sentence_ · _three sentences_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many sentences does Samih use?   **A** three   **B** six   **C** nine'));
out.push(p('**b**  Listen again.   **1** What is in the first sentence?   **2** What is in the third?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 9.11  Three sentences at six in the morning', [
  ['Ammar', 'Samih. You are going home. What do I need to know?'],
  ['Samih', 'Three sentences. The light over the loading door went out at eleven and it is still out.'],
  ['Ammar', 'Still out. Right.'],
  ['Samih', 'The lorry came two hours early and we unloaded forty cartons in the dark. I did not count them.'],
  ['Ammar', 'Not counted. Forty on the paper.'],
  ['Samih', 'And row four is not finished. Rows one to three are done.'],
  ['Ammar', 'Three sentences. Light, lorry, row four.'],
  ['Samih', 'Light, lorry, row four. Nine words each and you will still have them at nine o\'clock.'],
  ['Ammar', 'Why three?'],
  ['Samih', 'Because I tried six once and he remembered two. Three is what a man carries across a shift change.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Three sentences, in order, at a shift change**',
  table(['', 'What goes in it'], [
    ['**1**', '⚠ **the thing that is STILL WRONG now** — _the light is still out_'],
    ['**2**', '⚠ **the thing that needs doing TODAY** — _forty cartons, not counted_'],
    ['**3**', '**what you did not finish** — _row four_'],
  ], [0.6, 5]),
  '⚠ **Three. Not six.** **Samih tried six once and the next man remembered two.** **Three is what a man carries across a shift change, and the number is the point of this cycle.**',
  '⚠ **In THAT order: still wrong → needs doing → not finished.** **The first one is what will hurt somebody in the next hour.** **The last one is tidying.**',
  '⚠ **And the ordering words when you need them:** _first · then · after that_. **Use them inside a sentence, not between the three** — **the three stand alone.**',
  '**Practise:** Put these in order 1, 2, 3.',
  '_a) I did not finish the shelves. b) The water is still off. c) Twelve bags came and nobody checked them._',
  '**Useful words:**  Three sentences.  ·  it is still out  ·  I did not count them  ·  not finished  ·  first · then · after that',
  '**Sound — the three stops.** 🔊 **Track 9.12** Listen. **Three sentences with a full stop you can HEAR between them.** _The light went out at eleven and it is still out.↘ … The lorry came early and I did not count it.↘ … Row four is not finished.↘_ Say all three four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One is going home. One is starting. **Three sentences only.** Then change places.'));
out.push(dlg(null, [
  ['A', '__________. You are going home. What do I need to know?'],
  ['B', 'Three sentences. The __________ __________ at __________ and it is still __________.'],
  ['A', 'Still __________. Right.'],
  ['B', 'The __________ came __________ and we __________. I did not __________.'],
  ['A', 'Not __________.'],
  ['B', 'And __________ is not finished.'],
]));
out.push(table(['Card 1', 'Card 2'], [['Samih · light went out · eleven · out · lorry · two hours early · unloaded forty · count them · row four', 'Hala · water stopped · ten · off · bread · an hour late · baked eighty · weigh them · the cold room']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the three things in three words. **Light, lorry, row four.** **Then say them back from memory in two minutes\' time.**'));
out.push(PHRASE_CARD(['Three sentences.', 'it is still out', 'I did not count them', 'not finished', 'first · then · after that']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your last shift, in three sentences. **Write it.** Still wrong, needs doing, not finished.'));
out.push(table(['', 'The sentence', 'Words'], [['**1 still wrong**', '', ''], ['**2 needs doing**', '', ''], ['**3 not finished**', '', '']], [1.4, 3.6, 0.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your three sentences. **Then your partner says them back from memory.**'));
out.push(p('**Listener task:** how many of the three did your partner remember? **Count them. Three out of three is the test.**'));
out.push(p('**Board clinic:** your teacher reads six sentences. The class writes what it remembers. **Then three.** Compare.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two handovers. Then answer.'));
out.push(box(null, [
  '**TWO HANDOVERS, THE SAME NIGHT**',
  '**A — what Samih wrote, six in the morning:**',
  '**1** The light over the loading door went out at 23.00 and it is still out.',
  '**2** Forty cartons came at 01.00 and I did not count them.',
  '**3** Row four is not finished.',
  '**B — what the Tuesday man wrote, the week before:**',
  '_Busy night. Lorry came. Light trouble again. Did what I could. Rows mostly done. Tell A.Y. about the light maybe._',
  '⚠ **Ammar acted on all three of A. He acted on none of B. Same night shift, same problems. N.M.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many things can you act on in handover A?'));
out.push(item('2', 'What is wrong with _light trouble again_?'));
out.push(item('3', 'What does _tell A.Y. maybe_ leave the next man to decide?'));
out.push(box('Writer\'s box', [
  '**A written handover is the same three sentences, numbered.**',
  '⚠ **No _mostly_, no _maybe_, no _did what I could_.** **Those three are the whole of handover B and they are the reason nobody acted on it.** **_Rows mostly done_ means the next man checks all four.**',
  '⚠ **And _again_ is the worst word on the page.** _Light trouble again_ **says it has happened before and does not say how many times** — **which is 9.3, and it is the difference between a bulb and an electrician.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a three-sentence handover for your own work (**15 words or more**). Numbered, no _mostly_, no _maybe_.'));
out.push(p('**HANDOVER — ______________, ______**   **1** ______________.   **2** ______________.   **3** ______________.   ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['Exactly three, numbered', ''],
  ['Sentence 1 is the thing still wrong now', ''],
  ['No _mostly_, no _maybe_, no _again_ without a number', ''],
  ['A time on anything that has a time', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their three. **A third student says them back from memory.** The class counts how many survived.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a handover you were given that was no use (**20 to 35 words**). What did it say? What did you have to find out yourself?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _How long did it take you to find out?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. **Add up the time this class has spent finding out things the last shift knew.** Put the total on the board.'));
out.push(box('Homework', ['Finish your writing. Then **write** your next handover in three numbered sentences and **leave it for the next person** (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 9.7 =======================
out.push(pb());
out.push(h2('9.7  Review: the shift report'));
out.push(p('⚠ **This is the third unit of this book.** Was and were, fifteen verbs, when, _did not_, asking and the three sentences — and now a problem for the class to talk about together.'));
out.push(p('**You can:** write a whole shift report   ·   **Review:** Units 9.1 to 9.6   ·   **Exam practice:** A2 Key Reading Part 1 and Writing Part 6, at A1 length'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 9 quiz', 6));
out.push(table(['Say it in English', '✓'], [
  ['**9.1**  Where were you and two other people at four yesterday?', ''],
  ['**9.2**  Five things that happened. Use two hard verbs.', ''],
  ['**9.3**  Say when. Then say whether it happened before.', ''],
  ['**9.4**  One thing you did not do, and why.', ''],
  ['**9.5**  Something has gone wrong. What do you ask first?', ''],
  ['**9.6**  Your last shift in three sentences.', ''],
], [5, 1]));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the problem?   **A** one man is lying   **B** two men remember the same night differently   **C** nobody wrote anything down'));
out.push(p('**b**  Listen again.   **1** What time does Samih say the lorry came?   **2** What time does Hani say?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 9.13  Two true versions of one night', [
  ['Nour', 'Thursday night. The lorry. Samih says one o\'clock. Hani says three.'],
  ['Samih', 'It came at one. I opened the gate at one.'],
  ['Hani', 'I got there at three and we unloaded it. Three o\'clock.'],
  ['Samih', 'You got there at three. It came at one.'],
  ['Hani', 'Then it sat in the yard for two hours?'],
  ['Samih', 'It sat in the yard for two hours. I could not unload forty cartons alone in the dark, so I waited for you.'],
  ['Hani', 'I did not know that. Nobody told me it had been there since one.'],
  ['Nour', 'So both of you are right, and the lorry was in the yard for two hours with nobody near it.'],
  ['Samih', 'I wrote _01.00 lorry arrived_. I did not write that I waited.'],
  ['Hani', 'And I wrote _03.00 unloaded_. I did not write when I got there.'],
  ['Nour', 'Two true sheets. And between them, two hours that nobody can account for.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Review — the six things from this unit**',
  table(['Cycle', 'You can say'], [
    ['**9.1**', '_I was in the back store. We were on row three. Nobody was in the yard._'],
    ['**9.2**', '_I started at ten. I took the torch. The lorry came at one. He left at two._'],
    ['**9.3**', '_Last night at eleven. And the night before. Three nights running._'],
    ['**9.4**', '_I did not count it — no light._'],
    ['**9.5**', '_What happened?_ **And then nothing.**'],
    ['**9.6**', '_Light, lorry, row four._ **Three sentences.**'],
  ], [1, 5]),
  '⚠ **The new thing here: two men wrote true sheets and between them there is a hole two hours wide.** **Samih wrote when the lorry arrived. Hani wrote when it was unloaded.** **Neither wrote the GAP, because to each of them it was not an event — it was waiting.**',
  '**Useful words:**  it sat in the yard  ·  I waited for you  ·  I did not know that  ·  two true sheets  ·  nobody can account for',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One is Samih. One is Hani. Say why your sheet is right.'));
out.push(table(['Samih says', 'Hani says'], [[
  'It came at one and I wrote 01.00 lorry arrived. ⚠ **That is true, and I could not unload forty cartons alone in the dark.**',
  'I unloaded it at three and I wrote 03.00 unloaded. ⚠ **That is true, and nobody told me it had been sitting there since one.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the two sides for the class — **books closed**.'));
out.push(p('**Listener task:** who wrote a false sheet? Say _neither_. **Then: what is missing from both?**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of two people at your work who would describe the same hour differently. Tell your partner. **Write it.**'));
out.push(table(['The hour', 'What one would say', 'What the other would say', 'What is missing from both'], [['', '', '', ''], ['', '', '', '']], [1.2, 1.6, 1.6, 1.6]));
out.push(stage('4R', 'Report – everybody is right', 9));
out.push(p('**The problem.** Samih wrote _01.00 lorry arrived_. Hani wrote _03.00 unloaded_. Both are true. The lorry sat in the yard for two hours with nobody near it, and no sheet says so.'));
out.push(table(['Samih is right', 'Hani is right', 'So we do this'], [[
  'The lorry came at one and he wrote it. ⚠ **And he was right not to unload forty cartons alone in the dark.**',
  'He unloaded at three and he wrote it. ⚠ **And nobody told him it had been in the yard since one, so he could not have come sooner.**',
  '⚠ **WRITE THE WAITING.** **_01.00 lorry arrived. Waited for second man._ · _02.55 I arrived. Lorry had been in yard since 01.00._** **A gap is an event.** **And the other half: Samih telephones Hani at one, because two hours of a lorry in a dark yard is worth a telephone call at one in the morning.**',
]], [1, 1, 1.5]));
out.push(p('**Then tell the class:**  _______ is right because _______. _______ is right because _______. So we _______._'));
out.push(p('⚠ **The words to keep:** _two true sheets, and between them two hours that nobody can account for._'));
out.push(p('⚠ **And the finding, which is the hardest in Book 2 so far:** **a sheet records what you DID.** **Nobody records what they were WAITING for, because waiting does not feel like an event.** ⚠ **It is the only kind of gap that two honest records can leave between them** — **and it is invisible exactly because both halves are true.** **Unit 7.7 was four men and an empty sheet. This is two men and two full sheets, and it is worse.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1, at A1 length)', 10));
out.push(p('Read the five notices. What does each one say? Choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _NIGHT SHIFT: 24-HOUR TIMES ONLY_   **A** Write 1.00.   **B** Write 01.00.   **C** Do not write times.',
  '**2**  _WRITE WHAT YOU DID NOT DO, AND WHY_   **A** Only write the finished work.   **B** Write the unfinished work with a reason.   **C** Tell somebody instead.',
  '**3**  _HANDOVER: THREE SENTENCES_   **A** Write everything.   **B** Write three things.   **C** Write nothing.',
  '**4**  _ASK WHAT HAPPENED — NOT WHO DID IT_   **A** Find out who is to blame.   **B** Ask an open question first.   **C** Do not ask anything.',
  '**5**  _HAPPENED BEFORE? WRITE HOW MANY TIMES_   **A** Write "again".   **B** Write the number of times.   **C** It does not matter.',
]));
out.push(box('Writer\'s box', [
  '**Exam practice — A2 Key Writing Part 6, at A1 length.** **Four sentences, about 30 words.**',
  '⚠ **In a message about last night, the TIME and the thing go in the first sentence.** _At eleven the light went out._',
  '⚠ **And one of the four sentences must be a _did not_.** **A report of a shift with nothing missing from it is a report nobody needs.**',
  '**The shape:** when and what → what you did → what you did not do, and why → what the reader must do.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a message about last night (**four sentences, about 30 words**). When, what you did, what you did not do, and what the reader must do.'));
out.push(p('**To:** ______________   _At ______ the ______________. I ______________. I did not ______________ — ______________. Please ______________._'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.** Count the sentences: four.'));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6, at A1 length)', 12));
out.push(p('Write a message to your supervisor about a shift (**four sentences, about 30 words**). A time, what happened, one _did not_ with its reason, and what must be done.'));
out.push(...lines(5));
out.push(box('Homework', ['Finish your message. Then write the **reply** your supervisor would leave (20 words or more).'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 9 check', 15));
out.push(p('**A  Words.** Choose a, b or c.'));
[
  '1  I ___ in the back store at four.   a) were   b) was   c) am',
  '2  We ___ both on row three.   a) was   b) were   c) are',
  '3  Nobody ___ in the yard.   a) were   b) was   c) are',
  '4  I ___ the torch from the counter.   a) taked   b) taken   c) took',
  '5  The light ___ out at eleven.   a) goed   b) went   c) gone',
  '6  I ___ count it — there was no light.   a) did not   b) did not counted   c) not',
  '7  Something has gone wrong. You ask: ___   a) Who did it?   b) What happened?   c) Why me?',
  '8  A handover is ___ sentences.   a) six   b) three   c) as many as you need',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 9.15** Listen. Write the answer.   **1** What time she started: ______   **2** What stopped: ______   **3** At what time: ______   **4** How many nights: ______   **5** What she did not do, and why: ______   **6** Her three sentences, in three words: ______'));
out.push(p('**C  Reading.** Read the two handovers at 9.6 again. How many things can you act on in A? What is wrong with _light trouble again_?'));
out.push(p('**D  Writing.** Write four sentences to your supervisor about a shift (**about 30 words**). A time, what happened, one _did not_ with a reason, and what must be done.'));
out.push(...lines(4));
out.push(dlg('Track 9.15  Audio script (read after the check)', [
  ['Nour', 'Hala. What happened?'],
  ['Hala', 'I started at four in the morning. The water stopped at half past five.'],
  ['Nour', '_(says nothing)_'],
  ['Hala', 'And it stopped on Sunday too, and last Wednesday. Three mornings.'],
  ['Nour', 'Three.'],
  ['Hala', 'I did not wash the trays — there was no water. I baked on the dirty ones and I wrote it down.'],
  ['Nour', 'Three sentences for the next person?'],
  ['Hala', 'Water, trays, the cold room. The water is still off, the trays are not washed, and I did not finish the cold room.'],
]));
out.push(sp());
out.push(box('I can…  (Unit 9)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '**9.1**  say where I and other people were, with _was_ and _were_',
  '**9.2**  use fifteen past verbs, including the seven hard ones',
  '**9.3**  say when — and say whether it has happened before',
  '**9.4**  say what I did not do, with the reason',
  '**9.5**  ask _what happened_ and then say nothing',
  '**9.6**  hand over a shift in three sentences the next man remembers',
  '**9.7**  write a shift report — and say why two true sheets can leave a hole',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Ahead at A2 — three words you will meet again', [
  '⚠ **' + AHEAD_AT_A2 + '** — **all three come back at A2 Business.**',
  '**overnight** — here it is one word about one shift. **At A2 it is a delivery option you choose and pay for.**',
  '**overtime** — here it is the hours you worked. **At A2 you ask for it in writing, and you justify it.**',
  '**cover** — here it is the man who comes when you are off. **At A2 it is a word on a rota and a thing you arrange yourself.**',
], C.lteal));
out.push(sp());
out.push(p('**Words in this unit (22):** ' + LEXIS, { size: 18, color: '595959' }));
out.push(p('**Ahead at A2 (3):** ' + AHEAD_AT_A2, { size: 18, color: '595959' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 2 · Syria Edition · Unit 9 · Student\'s Book');
module.exports = out;
