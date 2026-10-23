// Proactive Business English B1 · Syria Edition · Book 1 · Unit 2 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'incident · sequence of events · timeline · on duty · off duty · witness · bystander · eyewitness account · version of events · in hindsight · at the time · beforehand · afterwards · meanwhile · by then · from then on · the upshot · as it turned out · narrative · running order · shift handover · log entry · time-stamped · first-hand · second-hand · hearsay · plausible · recollection · vivid · as far as I could see';
const BACK_AT_B1 = 'order · quote · file';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 2  Telling the Story of a Working Day'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**2.1**  set the scene — say what was happening when the thing happened',
  '**2.2**  tell the sequence, and stop telling it at the right place',
  '**2.3**  say what interrupted what: *while* and *when*',
  '**2.4**  say what used to happen, and what changed',
  '**2.5**  be the listener — the questions that get the rest of the story',
  '**2.6**  say what the story is **for**',
  '**2.7**  Review & Mediate: tell it the way the driver told it',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Why a whole unit on telling a story?', [
  'Because almost everything that goes wrong at work is first reported **out loud, by the person it happened to, in the wrong order**. Somebody arrives at the counter and says *the lorry came and he would not wait and now we have a problem*, and three facts have gone past you before you know what the problem is.',
  'A narrative in this unit is not a pleasure; it is a tool. The past continuous tells a reader what the situation was **before** anybody did anything, which is the half that decides whether the thing was avoidable. _Used to_ tells them what the normal practice was, which is the half that decides whether anybody was at fault.',
  '⚠ **And one warning that runs to the end of this book.** A story and an explanation are not the same document. This unit teaches you to tell what happened. **Unit 3** teaches what had already happened before it, **Unit 7** teaches what caused it, and **Unit 10** teaches how to report what other people said about it. Keep them apart: a narrative that argues is read as an excuse, and an explanation that narrates is never finished.',
], C.lyellow, C.orange));

// ======================= CYCLE 2.1 =======================
out.push(pb());
out.push(h2('2.1  Before anything happened'));
out.push(p('**Function:** setting the scene   ·   **Grammar:** past continuous for the situation   ·   **Pronunciation:** the long first clause, and where it breathes'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of something that went wrong at work. Before you say what happened, say what was going on at the time: who was where, what was running, what the weather was doing.'));
out.push(p('**b**  Which tells you more about whether it could have been avoided? _The lorry came at seven and we were not ready. · We were counting the Homs order and two men were on the roof when the lorry came at seven._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour ask for first?   **A** whose fault it was   **B** what was happening before the lorry arrived   **C** the time'));
out.push(p('**b**  Listen again. **1** Why does she stop Fadi when he starts with the argument? **2** What two facts about the situation change the whole story?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.1  "Start before it started"', [
  ['Fadi', 'The Jaber lorry came and the driver would not wait and now there is half a pallet on the floor of the yard.'],
  ['Nour', 'Stop there. I am going to have to write this down for Mr Ayoub, and if I write it in that order he will think somebody was careless. Start before it started. What was happening at seven?'],
  ['Fadi', 'We were counting the Homs order. It had come in on Thursday and nobody had touched it.'],
  ['Nour', 'Good. Who is "we"?'],
  ['Fadi', 'Abu Yasser and me. And two of the men were on the roof, because the gutter had come down in the rain and Mr Ayoub wanted it up before the next lot.'],
  ['Nour', 'So at seven o\'clock, four people were in the yard and two of them were twelve feet up a ladder.'],
  ['Fadi', 'Yes. And it was raining again, lightly.'],
  ['Nour', 'That is the story. Now the lorry.'],
  ['Fadi', 'The lorry came at ten past. He was early — he was booked for eleven.'],
  ['Nour', 'And nobody could leave the count or the ladder.'],
  ['Fadi', 'Nobody could leave the ladder. You do not come down a ladder quickly in the rain.'],
  ['Nour', 'Then that is what I am writing, and it is a completely different note from the one I would have written four minutes ago. Half a pallet on the floor with four men standing about is carelessness. Half a pallet on the floor with two men up a ladder in the rain and a lorry fifty minutes early is a booking problem.'],
  ['Fadi', 'It is the same half a pallet.'],
  ['Nour', 'It is the same half a pallet and it is not the same report.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Setting the scene — the past continuous**',
  table(['Shape', 'Example', 'What it does'], [
    ['**was / were** + -ing', 'We **were counting** the Homs order.', 'the situation, already running'],
    ['two at once', 'Two men **were** on the roof; it **was raining**.', 'the picture, not the action'],
    ['**at** + time', '**At seven**, four people were in the yard.', 'the moment the picture is taken'],
    ['**nobody could** + verb', 'Nobody **could leave** the ladder.', 'the constraint — why nothing was done'],
    ['then the past simple', 'The lorry **came** at ten past.', 'the event that breaks the picture'],
  ], [1.4, 2.3, 1.8]),
  '⚠ **Set the scene before the event, always.** The scene is the half that decides whether the thing was avoidable, and a reader who gets the event first has already decided it was.',
  '⚠ **The past continuous is for the picture; the past simple is for the thing that breaks it.** _We were counting … the lorry came_. Swap them and the sentence says the opposite: _we counted while the lorry was coming_ makes the count the interruption.',
  '⚠ **Name the constraint.** *Nobody could leave the ladder* is the most important sentence in Fadi\'s account and he did not volunteer it; it was the answer to a question. A scene with no constraint in it reads as a scene with spare hands in it.',
  '⚠ Do not argue in the scene. *He was early and he should not have been* is two sentences doing two jobs; keep *he was booked for eleven* and let the reader do the rest.',
  '**Practise:** Set the scene for each, in two sentences and with a constraint. 1 a lorry arriving early 2 the system going down 3 a customer arriving at closing time 4 a power cut mid-order 5 two deliveries at once',
  '**Useful phrases:**  We were counting…  ·  Two of the men were…  ·  At seven, …  ·  Nobody could leave…  ·  and it was raining again, lightly',
  '**Pronunciation – the long first clause.** 🔊 **Track 2.2** Listen: _We were counting the Homs order // and two of the men were on the roof // when the lorry came._ Three groups, two small breaths, and the voice does not fall until *came*. Said in one breath it is unfollowable. Repeat twice.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A begins with the problem; B stops them and asks for the scene, the people and the constraint. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ and now there is __________.'],
  ['B', 'Stop there. I am going to have to write this down, and in that order it reads as __________. Start before it started. What was happening at __________?'],
  ['A', 'We were __________. It had __________ and nobody had __________.'],
  ['B', 'Good. Who is "we"?'],
  ['A', '__________ and me. And __________ were __________, because __________.'],
  ['B', 'So at __________, __________ people were __________ and __________.'],
  ['A', 'Yes. And __________.'],
  ['B', 'That is the story. Now __________.'],
]));
out.push(table(['Role card 1 — the system went down', 'Role card 2 — two customers at once'], [[
  'A starts with "we lost the whole afternoon". The scene: a stock count half entered, the only person who knows the software at the clinic with a child, the counter busy because it was the first of the month.',
  'A starts with "he walked out and he will not come back". The scene: one person on the counter at four on a Thursday, the second counter staff at Baghdad Street, a telephone ringing that was the bank.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the scene in one sentence and the constraint in another. Then say whether the thing now sounds avoidable. The answer usually changes.'));
out.push(PHRASE_CARD(['We were counting…', 'Two of the men were…', 'At seven, …', 'Nobody could leave…', 'he was booked for eleven', 'Start before it started.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** things that went wrong at your work. For each, write the scene, the people, the constraint — and only then the event.'));
out.push(table(['The scene (was / were -ing)', 'Who was where', 'The constraint', 'Then: the event'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 1.2, 1.3, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We were _______ and _______ were _______. Nobody could _______. Then _______._'));
out.push(p('**Listener task:** write down the constraint in each story. Then say which constraints were the same constraint — in most workplaces, two or three of them are.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we was counting_ and _when the lorry was coming, we counted_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note as Nour finally wrote it, and answer the questions.'));
out.push(box(null, [
  '**NOTE — half a pallet of wrap on the yard floor, Tuesday 17th, about 7.15 a.m.**',
  '**What was happening before it.** Abu Yasser and Fadi were counting in the Homs order, which had arrived on the Thursday and had not been touched because of the holiday. Two of the yard men were on the roof refitting the gutter that came down in the rain on Sunday — Mr Ayoub had asked for it before the next rain, and it was raining again lightly that morning. So at seven o\'clock there were four men in the yard and two of them were up a ladder.',
  '**The constraint.** Nobody could come off the ladder quickly. In the rain that is not a thing you hurry.',
  '**What happened.** The Jaber lorry arrived at about ten past seven. It was booked for eleven. The driver said he had a second drop in Adra and could not wait, and he began unloading onto the ground by the gate rather than onto the bay. About half a pallet of wrap — fourteen boxes — went onto wet concrete. Four of the fourteen are water-marked and the other ten are sound.',
  '**What I am not saying.** I am not saying the driver was at fault and I am not saying our men were. I am saying the lorry was fifty minutes early and we had two men on a ladder.',
  '**What I would like.** Jaber Freight to telephone the yard before a lorry arrives outside its booked window, which they already do for two of our neighbours. I will ask on Thursday.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many sentences go by before anything happens, and what are they for?'));
out.push(item('2', 'What does the fourth paragraph refuse to do?'));
out.push(item('3', 'What is the last paragraph asking for, and what does it already know about it?'));
out.push(box('Writer\'s box', [
  '**An incident note — five headed parts:** what was happening before it → **the constraint** → what happened → **what I am not saying** → what I would like.',
  '**Give the scene its own paragraph and let it be long.** Four or five clauses of past continuous is not padding; it is the half of the account that the reader cannot get anywhere else, and it is the half nobody writes.',
  '**Write "what I am not saying" and mean it.** _I am not saying the driver was at fault and I am not saying our men were._ An incident note that assigns blame is answered with a defence, and then the fourteen boxes take a month. Unit 7 will teach you how to say *caused* when you really mean it.',
  '⚠ **Count the damage exactly and split it.** *Fourteen boxes — four water-marked, ten sound.* A note that says *half a pallet* invites an argument about how much half a pallet is.',
  '⚠ Ask for **one** change, and say if somebody else already has it. *They already do it for two of our neighbours* turns a request into a precedent, and a precedent is very hard to refuse.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the incident note for something that went wrong where you work (**50 words or more**). Use the frame.'));
out.push(p('**NOTE — ______________, ______________, about ______________**   **What was happening before it.** ______________ were ______________, which ______________. ______________ were ______________, because ______________. So at ______________ there were ______________.   **The constraint.** ______________.   **What happened.** ______________ at about ______________. ______________. ______________ — ______________ — ______________.   **What I am not saying.** I am not saying ______________ and I am not saying ______________. I am saying ______________.   **What I would like.** ______________. I will ask on ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says name the constraint. I can see four people in your scene and no reason why none of them went over — what stopped them?"',
  '⚠ Quote the box, ask one question, and **do not supply the constraint**. The writer was there; you were not.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would a reader who was not there think this was avoidable?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The scene, in the past continuous, before the event', ''],
  ['The constraint, in its own line', ''],
  ['The damage counted and split', ''],
  ['A "what I am not saying" paragraph, and one ask', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their scene only — nothing after it. The class guesses what happened next. Where they guess right, the scene is doing its work.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a day at work that did not go as planned (**100 to 140 words**). Begin before it started: what was already running, who was where, and what nobody could leave.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the detail of the scene you can still picture_   ✓ _past continuous for the situation, past simple for the event?_   ? _what was the constraint?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many was the real trouble the **scene** rather than the event? That is usually the answer, and it is why this cycle comes before 2.2.'));
out.push(box('Homework', ['Write your final text. Then take an incident your workplace has already written up and add the missing first paragraph — the scene and the constraint (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 2.2 =======================
out.push(pb());
out.push(h2('2.2  And then, and then, and then'));
out.push(p('**Function:** telling a sequence   ·   **Grammar:** past simple, sequenced; *first · then · after that · in the end*   ·   **Pronunciation:** the list that does not sound like a list'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Tell a colleague about yesterday at work in six sentences. Count how many begin with *and then*.'));
out.push(p('**b**  Which of these is a sequence, and which is a story? _We counted, we signed, we loaded, we left. · We counted it twice because the first count was eleven short, and by the time we had found the eleven the driver had gone._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub object to?   **A** the facts   **B** that the account never ends   **C** the order of events'));
out.push(p('**b**  Listen again. **1** Where does he say the story should have stopped? **2** What does he say the last sentence of a sequence is for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.3  "Where does it stop?"', [
  ['Bassel', 'So I went to Homs on the Tuesday, and I saw the two shops in the morning, and then I went to the third one, and the man there was not in, so I waited, and then he came at two, and we talked for an hour, and then I drove back, and the road was closed at Qara so I went round, and I got in at nine.'],
  ['Mr Ayoub', 'And what came of it?'],
  ['Bassel', 'The third one wants to order.'],
  ['Mr Ayoub', 'That is the end of your story and it arrived after the road closure. Tell it again in four sentences.'],
  ['Bassel', 'I saw three shops in Homs on Tuesday. Two will reorder in the spring. The third wants to open an account now — forty boxes a month.'],
  ['Mr Ayoub', 'Three sentences, and I have the thing I needed. What happened to the road at Qara?'],
  ['Bassel', 'It cost me two hours.'],
  ['Mr Ayoub', 'Then it belongs in the story — but at the end, as a cost, and not in the middle as an event. *It cost me two hours on the road and I would rather see three shops in a day than four.*'],
  ['Bassel', 'The long version is what actually happened.'],
  ['Mr Ayoub', 'Everything that actually happened is in the long version, which is why nobody can use it. A sequence has to stop at the thing it was for. Everything after that is travel.'],
  ['Bassel', 'And if the travelling is the point? If the road is closed every week?'],
  ['Mr Ayoub', 'Then the road is the story and the shops are the travel, and you tell it the other way round. But you have to decide which it is before you open your mouth, and that is the whole of this.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Sequencing — and stopping**',
  table(['Shape', 'Use'], [
    ['**First** … **then** … **after that** …', 'three or four steps, no more'],
    ['**By the time** + past perfect', '**By the time** we had found them, the driver **had gone**. (Unit 3)'],
    ['**In the end** / **the upshot was**', 'the last sentence, which is the point'],
    ['**It cost me** + time/money', 'the cost, at the end, not in the middle'],
    ['**As it turned out**', 'the thing nobody knew at the time'],
  ], [1.9, 2.1]),
  '⚠ **A sequence stops at the thing it was for.** Everything after that is travel. Decide what the story is for **before** you open your mouth — and if the travelling is the point, tell the travel and make the shops the travel.',
  '⚠ **_And then_ three times is not a story, it is a list.** Three or four steps is the most anybody can hold. If there are nine, you are telling two stories and should say which one first.',
  '⚠ **Costs go at the end.** *It cost me two hours* in the middle of a sequence reads as a complaint; at the end it reads as information, and it is the sentence that changes a practice.',
  '⚠ The strongest last sentence is a **consequence**, not a conclusion: *the third wants to open an account — forty boxes a month*.',
  '**Practise:** Tell each in four sentences, ending at the point. 1 a day of visits 2 a delivery that went wrong 3 a complaint handled 4 a repair 5 a journey you would not repeat',
  '**Useful phrases:**  First… then… after that…  ·  In the end…  ·  The upshot was…  ·  It cost me two hours.  ·  As it turned out…',
  '**Pronunciation – the list that is not a list.** 🔊 **Track 2.4** Listen to the same four steps said two ways: all on one tone, which is a list; then with the voice falling at the end of each step and the last step lower still. The final fall is what tells a listener you have finished. Repeat the four steps twice.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A tells it long; B asks what came of it and makes them tell it in four. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'So I __________, and then __________, and then __________, and __________, so __________, and then __________.'],
  ['B', 'And what came of it?'],
  ['A', '__________.'],
  ['B', 'That is the end of your story and it arrived last. Tell it again in four sentences.'],
  ['A', '__________. __________. __________. __________.'],
  ['B', 'And what happened to __________?'],
  ['A', 'It cost me __________.'],
  ['B', 'Then it belongs at the end, as a cost, and not in the middle as an event.'],
]));
out.push(table(['Role card 1 — a morning at the bank', 'Role card 2 — chasing a part'], [[
  'A went to the bank about the second account, queued twice, was sent to a different branch and came back. The point: the account can be opened, but only with the lease, which nobody had mentioned. The cost: a morning.',
  'A spent a day finding a shutter part. The point: the part is available locally and costs a third of the importer\'s price. The cost: a day, and a tank of fuel.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs tell the short version for the class – **without the book**.'));
out.push(p('**Listener task:** write the last sentence you hear. If it is not the point of the story, say what the point was and where it appeared.'));
out.push(PHRASE_CARD(['First… then… after that…', 'In the end…', 'The upshot was…', 'It cost me two hours.', 'As it turned out…', 'Where does it stop?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** things that happened at work last week. Tell each in four sentences, with the point last and the cost after it.'));
out.push(table(['What it was', 'Four sentences — the last one is the point', 'The cost'], [['', '', ''], ['', '', ''], ['', '', '']], [1, 3, 0.9]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your shortest one. Then say what you cut, and whether anything you cut was the actual point.'));
out.push(p('**Listener task:** write each speaker\'s point in one line. Where you cannot, say so — that is the most useful thing a listener can give back.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _after that I was going_ and a sequence of six _and thens_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the week\'s handover note, and answer the questions.'));
out.push(box(null, [
  '**HANDOVER — the week of the 15th, from Nour to Hala. I am away from Sunday.**',
  '**Four things are live.** Everything else can wait for me.',
  '**1 · The fourteen wrap boxes (Jaber).** Four are water-marked and are stacked separately in the small store, not thrown away. Jaber Freight have the note and have not answered. **If they telephone:** take the name and say I will write on Thursday. **If they have not telephoned by Wednesday:** telephone Mr Jaber, not the office, and say I asked you to.',
  '**2 · The second bank account.** They need a copy of the lease, which is in the blue file in Mr Ayoub\'s drawer. The appointment is Tuesday at ten and **it is in my name** — if you go instead, telephone them first or they will turn you away, which is what happened to me on the 9th.',
  '**3 · The Homs account (Bassel).** Forty boxes a month, first order to go out next week. Bassel will ask you to raise it. **Do not raise it until the credit form is back** — it went out on the 12th. This is the only thing on this page that could cost us money.',
  '**4 · The label proofs.** With Tannous since the 14th. No approval by telephone, whatever anybody says. If the proof comes, it waits for me; nothing is late until the 24th.',
  '**What I am not leaving you.** The stock count. It is not due until the 29th and I would rather do it myself than have it done twice.',
  '**If something happens that is not on this page**, telephone me. I would rather be telephoned on the Tuesday than find out on the Sunday after.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How does each numbered item tell the reader what to do, and what makes item 3 different?'));
out.push(item('2', 'Why does the note say what happened on the 9th?'));
out.push(item('3', 'What does the last line give permission for?'));
out.push(box('Writer\'s box', [
  '**A handover note — four live items at most, each with an "if":** the state of it → **if they telephone** → **if they have not by —** → and, where it applies, *do not* and why.',
  '**Say which single item could cost money.** *This is the only thing on this page that could cost us money.* A list where everything looks equally urgent is a list where the expensive one gets the same attention as the labels.',
  '**Put the precedent in.** *Which is what happened to me on the 9th.* A reader follows an instruction with a scar on it; a bare instruction gets improvised around on a busy Tuesday.',
  '⚠ **Say what you are *not* handing over**, and why. A colleague who finds the stock count undone assumes it was forgotten and either does it badly or worries about it all week.',
  '⚠ End by giving permission to telephone you. Everybody writes *telephone me if you need to* and nobody believes it; *I would rather be telephoned on Tuesday than find out on the Sunday after* is believed, because it says which outcome you fear.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the handover note for a week you are away (**50 words or more**). Four live items. Use the frame.'));
out.push(p('**HANDOVER — ______________, from ______________ to ______________. I am away from ______________.**   **______________ things are live.** Everything else ______________.   **1 · ______________.** ______________. **If ______________:** ______________. **If ______________ by ______________:** ______________.   **2 · ______________.** ______________ — ______________, which is what happened ______________.   **3 · ______________.** ______________. **Do not ______________ until ______________.** This is the only thing on this page that ______________.   **4 · ______________.** ______________. Nothing is late until ______________.   **What I am not leaving you.** ______________, because ______________.   **If something happens that is not on this page**, ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says say which single item could cost money. All four of yours are marked urgent — which one would you want telephoning about at nine on a Sunday night?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could the colleague run the week from this page without telephoning the writer?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Four live items, and a line saying the rest can wait', ''],
  ['An "if they telephone" and an "if they have not by —" on each', ''],
  ['One item named as the expensive one', ''],
  ['What is *not* being handed over, and why', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their expensive item. The class says whether they would have spotted it as the expensive one without being told.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a week you came back to after being away (**100 to 140 words**). Say what you had left, what you found, what nobody had told you, and what you write differently now.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the thing nobody told them_   ✓ _the sequence stops at its point?_   ? _whose fault was it, honestly?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many of the problems were **in the handover and not read**, rather than missing from it? Both happen, and the first is the more annoying.'));
out.push(box('Homework', ['Write your final text. Then write the four live items of your own work this week, each with an "if", and leave it where a colleague could use it (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 2.3 =======================
out.push(pb());
out.push(h2('2.3  While I was waiting'));
out.push(p('**Function:** saying what interrupted what   ·   **Grammar:** *while* + past continuous; *when* + past simple   ·   **Pronunciation:** the clause boundary'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Finish these about your own week: _While I was _______, _______._ and _When I _______, I _______._'));
out.push(p('**b**  Which is right, and what does the other one mean? _While I was telephoning him, he arrived. · When I was telephoning him, he arrived. · While I telephoned him, he arrived._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What happened while Nadia was at the bank?   **A** the system went down   **B** a customer paid in cash   **C** the auditor telephoned'));
out.push(p('**b**  Listen again. **1** What is the difference Nour draws between *while* and *when*? **2** Why does the order of the two clauses matter here?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.5  Two things at once', [
  ['Nadia', 'I was at the bank for an hour and a half and when I came back everything had changed.'],
  ['Nour', 'Tell me in two halves. What were you doing, and what happened?'],
  ['Nadia', 'While I was queueing at the bank, a customer paid eight hundred thousand in cash at the counter.'],
  ['Nour', 'Eight hundred. Who took it?'],
  ['Nadia', 'Hala took it, correctly, and wrote it in the day book. The trouble is that while she was writing it in the day book, the system went down, so it is in the book and not in the system.'],
  ['Nour', 'So two things were running and one interrupted the other.'],
  ['Nadia', 'Three, really. While the system was down, two more customers paid, and those are on a pad.'],
  ['Nour', 'Say that last part again with *when*.'],
  ['Nadia', 'When the system came back, we had three payments on paper and nothing in the ledger.'],
  ['Nour', 'And that is the difference. *While* is for the long thing — the queue, the writing, the system being down. *When* is for the moment something changed: when it came back, when you returned.'],
  ['Nadia', 'And if I say *when I was queueing*?'],
  ['Nour', 'You can, and it sounds like the queue was a point in time rather than an hour and a half, which is not the story you are telling. The hour and a half is the story: it is why there are three payments on a pad.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_While_ and _when_**',
  table(['Shape', 'Use', 'Example'], [
    ['**While** + was/were -ing', 'the **long** thing that was running', '**While I was queueing** at the bank…'],
    ['**When** + past simple', 'the **moment** something changed', '**When the system came back**, …'],
    ['**while** … **,** + past simple', 'the interruption', 'While she **was writing** it, the system **went down**.'],
    ['**just as**', 'the two coincided exactly', '**Just as** he signed, the lorry pulled away.'],
    ['**by then**', 'looking back from a later point', '**By then** three people had paid.'],
  ], [1.5, 1.5, 2.3]),
  '⚠ **_While_ takes the long thing; _when_ takes the moment.** Both are correct English in both places, so this is not a right-and-wrong rule — it is a **choice about what you want the reader to see as long**. *While I was queueing* makes the hour and a half the story; *when I was queueing* makes it a point, and the three payments on a pad then come from nowhere.',
  '⚠ **Put the long clause first when it is the reason**, and the moment first when it is the news. _While she was writing it, the system went down_ explains; _the system went down while she was writing it_ reports.',
  '⚠ Three things can be running at once and the sentence will not hold all three. Two per sentence, and use *by then* for the third.',
  '**Practise:** Say each with *while* and then with *when*, and say which is the better story. 1 at the bank 2 the system down 3 a lorry waiting 4 a count half done 5 a customer on hold',
  '**Useful phrases:**  While I was…  ·  When it came back…  ·  Just as he signed…  ·  By then…  ·  Tell me in two halves.',
  '**Pronunciation – the clause boundary.** 🔊 **Track 2.6** Listen: _While she was writing it in the day book // the system went down._ The comma is a real pause and the voice rises slightly before it. Without the pause, the listener hears one long thing and misses the interruption. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports in a lump; B asks for two halves and then for the third thing. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I was __________ and when I came back __________.'],
  ['B', 'Tell me in two halves. What were you doing, and what happened?'],
  ['A', 'While I was __________, __________.'],
  ['B', '__________. Who __________?'],
  ['A', '__________, correctly, and __________. The trouble is that while __________, __________.'],
  ['B', 'So two things were running and one interrupted the other.'],
  ['A', 'Three, really. While __________, __________.'],
  ['B', 'Say that last part again with *when*.'],
]));
out.push(table(['Role card 1 — the ladder and the lorry', 'Role card 2 — the engineer and the power'], [[
  'A was up a ladder for forty minutes. While A was up there: a lorry came, a customer left, and the telephone rang eleven times. The third thing: by then the count sheet had blown off the bench.',
  'A was with the engineer at the machine. While they were working: the power went, the generator did not start, and a delivery arrived. The third thing: by then the engineer had packed up.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** draw a line for the long thing and ticks for the moments on it. Then say which moment mattered most.'));
out.push(PHRASE_CARD(['While I was…', 'When it came back…', 'Just as he signed…', 'By then…', 'Tell me in two halves.', 'two per sentence, no more']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** things that happened while you were doing something else. Write each as a long clause and a moment — and mark which of the two is the story.'));
out.push(table(['While I was… (the long thing)', '…, (the moment)', 'Which is the story?'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.8, 1.8, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _While I was _______, _______. By then _______._'));
out.push(p('**Listener task:** write down any sentence where the long thing and the moment are the wrong way round. It happens often and it reverses the meaning.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _while I waited, he was arriving_ and _when I was going to the bank, the system was going down_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the log of the afternoon, and answer the questions.'));
out.push(box(null, [
  '**LOG — the afternoon the system was down, Wednesday 19th. Written the same evening by Nour, from the day book and from what Hala and Nadia told me.**',
  table(['Time', 'What was running', 'What happened'], [
    ['1.05', 'Nadia at the bank; Hala alone on the counter', 'Mr Haffar paid 800,000 in cash'],
    ['1.10', 'Hala writing it in the day book', '**the system went down**'],
    ['1.10–3.40', 'the system down; counter open; two staff', 'two further payments taken, on a pad'],
    ['2.15', 'still down; Hala telephoned me at Baghdad Street', 'I told her to keep the pad and number the lines'],
    ['3.55', 'still down', '**the system came back**'],
    ['4.00', 'the three payments being entered', 'the generator came off — it runs from one until four — and the counter went to daylight'],
    ['4.30', 'Nadia back; three payments on paper', 'all three entered, against the pad, in her hand'],
  ], [0.7, 2, 2.3]),
  '**What this log is for.** The money is right and was always right. What was wrong for two hours and fifty minutes is that the only record of 800,000 was one line in a day book in one person\'s handwriting, with one person in the building who had seen it paid.',
  '**What I am asking for.** A numbered duplicate pad at each counter, which is about 2,000 and which we should have had since June. ⚠ Not a change to the system, and not a second person on the counter: those are both larger arguments and this is not the week to have them.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Where did the writer get the facts, and why does the heading say so?'));
out.push(item('2', 'What does the note say was never actually wrong?'));
out.push(item('3', 'What two things does the writer deliberately **not** ask for, and why?'));
out.push(box('Writer\'s box', [
  '**A log — a three-column table:** the time → **what was running** → what happened. The middle column is the past continuous and it is the one that makes a log readable rather than a list of times.',
  '**Say where the facts came from, in the heading.** *From the day book and from what Hala and Nadia told me.* A log written from memory a week later and a log written the same evening from a book are different documents, and the reader is entitled to know which this is. Unit 10 will teach you how to report the "what they told me" part properly.',
  '**Say what was *not* wrong.** *The money is right and was always right.* Without that sentence a log of a bad afternoon reads as a cash discrepancy, and somebody senior spends a day on the wrong problem.',
  '⚠ **Ask for the small thing and name the big things you are not asking for.** *Not a change to the system, and not a second person on the counter.* A note that asks for one cheap fix gets it; a note that opens two arguments gets a meeting in three weeks.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the log of an afternoon or a morning that went wrong (**50 words or more**). Use the frame — five or six rows, then the two paragraphs.'));
out.push(p('**LOG — ______________, ______________. Written ______________ from ______________.**   ______________ | ______________ | ______________   ______________ | ______________ | ______________   ______________ | ______________ | ______________   ______________ | ______________ | ______________   ______________ | ______________ | ______________   **What this log is for.** ______________ was always ______________. What was wrong for ______________ is that ______________.   **What I am asking for.** ______________, which is about ______________. ⚠ Not ______________ and not ______________: those are larger arguments.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says say what was not wrong. Your log reads as though money went missing — did any?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could somebody senior read this and act on the right thing?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A "what was running" column in the past continuous', ''],
  ['Where the facts came from, in the heading', ''],
  ['What was never wrong', ''],
  ['One cheap ask, and the big asks named and declined', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their middle column only. The class says whether they can tell what kind of afternoon it was from that column alone.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something that happened while you were somewhere else (**100 to 140 words**). Say what you were doing, what you came back to, how you found out, and what you have done differently since.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the moment on the long line_   ✓ _while and when chosen on purpose?_   ? _who told them, and when?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many found out the same day? The ones that took a week are the ones worth talking about, and the reason is almost never that somebody hid it.'));
out.push(box('Homework', ['Write your final text. Then keep a three-column log of one busy hour — time, what was running, what happened — and write three lines on what the middle column shows that a list of times would not (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 2.4 =======================
out.push(pb());
out.push(h2('2.4  We used to do it the other way'));
out.push(p('**Function:** describing the old practice   ·   **Grammar:** *used to*; *would* for repeated past   ·   **Pronunciation:** _used to_ said as one word'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three things your workplace used to do differently. For each, say whether the change was decided or just happened.'));
out.push(p('**b**  Which are right? _We used to deliver on Thursdays. · We are used to deliver on Thursdays. · We would deliver on Thursdays. · We use to deliver on Thursdays._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does the old practice matter now?   **A** it explains the gate sheet   **B** it was cheaper   **C** nobody remembers it'));
out.push(p('**b**  Listen again. **1** What used to happen, and what does Abu Yasser say it cost? **2** What does Nour mean by "a practice with a date on it"?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.7  "We used to sign at the gate"', [
  ['Nour', 'The gate sheet. The auditor is going to ask me when it started and why, and I do not know either answer.'],
  ['Abu Yasser', 'It started the summer the three pallets went to Jaramana.'],
  ['Nour', 'Tell me what you used to do before that.'],
  ['Abu Yasser', 'We used to sign the driver\'s note at the gate. He would hand it over, I would sign it, he would go. Nobody counted anything, because the pallets were wrapped and you cannot count through wrap.'],
  ['Nour', 'And that worked, for how long?'],
  ['Abu Yasser', 'Years. It worked because it was always the same driver and he always had the right pallets. When the driver changed we went on signing, and twice in one month we signed for pallets that were not ours.'],
  ['Nour', 'So the practice was fine and the circumstances moved.'],
  ['Abu Yasser', 'The practice was fine until it was not. That is how it always goes.'],
  ['Nour', 'And now?'],
  ['Abu Yasser', 'Now nothing is signed until it is counted against the order, and my name goes on it. It costs me twenty minutes a lorry and it has found three errors this year.'],
  ['Nour', 'Twenty minutes a lorry. Did anybody ever tell you that was an acceptable cost?'],
  ['Abu Yasser', 'Nobody ever asked. I decided it was.'],
  ['Nour', 'Then I am going to write that down, with the date of the Jaramana pallets, because a practice with a date on it is a decision and a practice with no date on it is a habit. The auditor can argue with a decision. He cannot do anything with a habit except ask why.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The old practice**',
  table(['Shape', 'Use', 'Example'], [
    ['**used to** + verb', 'a past state or habit, now finished', 'We **used to sign** at the gate.'],
    ['**would** + verb', 'a repeated past **action**, in a narrative', 'He **would hand** it over and I **would sign** it.'],
    ['**didn\'t use to**', 'the negative', 'We **didn\'t use to** count anything.'],
    ['**until it was not**', 'the turn', 'It worked **until it did not**.'],
    ['**it costs** + time/money', 'the price of the new practice', 'It **costs** twenty minutes a lorry.'],
  ], [1.4, 1.6, 2.3]),
  '⚠ **_Used to_ for the state, _would_ for the action inside it.** *We used to sign at the gate* is the practice; *he would hand it over and I would sign it* is the film of it. ⚠ **_Would_ cannot start the story** — a reader needs *used to* first or they do not know it is the past.',
  '⚠ **Spelling and form.** *used to* in the positive; *didn\'t use to* and *did you use to* with no **d**. ~~We use to deliver~~ and ~~we are used to deliver~~ are two different errors, and the second belongs to a different structure entirely (Book 2, Unit 17).',
  '⚠ **Say what the old practice cost and what the new one costs.** A change with no price on either side cannot be argued about, which sounds restful and means it will be reversed by somebody who has not counted.',
  '⚠ **A practice with a date on it is a decision; a practice with no date is a habit.** Find the date. Somebody always remembers what it was the summer of.',
  '**Practise:** Say each as *used to* + *would*, with the cost. 1 signing at the gate 2 ordering by telephone 3 one delivery day 4 cash only 5 no written approval',
  '**Useful phrases:**  We used to…  ·  He would hand it over and I would sign it.  ·  We didn\'t use to…  ·  It worked until it did not.  ·  It costs twenty minutes a lorry.',
  '**Pronunciation – _used to_.** 🔊 **Track 2.8** Listen: _we **useta** sign at the gate_ — one word, the *d* gone into the *t*. Said as two clear words it sounds like *we used it to sign*. Repeat four, then four of _didn\'t use to_.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks about an old practice; B describes it, says why it worked, and names the turn. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________. The auditor is going to ask me when it started and why.'],
  ['B', 'It started __________.'],
  ['A', 'Tell me what you used to do before that.'],
  ['B', 'We used to __________. He would __________, I would __________. Nobody __________, because __________.'],
  ['A', 'And that worked, for how long?'],
  ['B', '__________. It worked because __________. When __________ changed, __________.'],
  ['A', 'So the practice was fine and the circumstances moved.'],
  ['B', 'The practice was fine until it was not.'],
]));
out.push(table(['Role card 1 — ordering by telephone', 'Role card 2 — one price list a year'], [[
  'They used to telephone orders through and write them on a pad. It worked while there was one supplier and one person ordering. The turn: a second supplier with similar box codes.',
  'They used to print a price list every January and hold it all year. It worked while prices held. The turn: the year prices moved twice before March. Cost of the new way: re-quoting, and a fortnight\'s validity.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the old practice, the turn and the cost of the new way. Then say whether the new way is worth its price on the evidence given.'));
out.push(PHRASE_CARD(['We used to…', 'He would hand it over…', 'We didn\'t use to…', 'It worked until it did not.', 'It costs twenty minutes a lorry.', 'a practice with a date on it']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** practices at your work that have changed. For each: the old way, why it worked, the turn, and what the new way costs.'));
out.push(table(['We used to…', 'It worked because…', 'The turn', 'The new way costs'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.4, 1.2, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We used to _______. It worked because _______. Then _______, and now we _______, which costs _______._'));
out.push(p('**Listener task:** write down any practice that changed with **no turn** — nobody can say what moved. Those are the changes most likely to be reversed.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we use to sign_ and _we didn\'t used to count_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page written for the auditor, and answer the questions.'));
out.push(box(null, [
  '**GOODS INWARDS — the practice, how it used to be, and when it changed**',
  '**Before August 2024.** A driver would hand over his note at the gate and the supervisor would sign it. Nothing was counted against the order, because pallets arrive wrapped and a wrapped pallet cannot be counted without unwrapping it. This worked for several years and we did not think about it: the same haulier sent the same driver, and the pallets were always ours.',
  '**What changed.** In July and August 2024 the haulier changed drivers twice. In that month we signed for two consignments that were not ours — one was for a shop in Jaramana with a similar name. Both were sorted out within a week and neither cost us money, which is exactly why they are worth recording: nothing went wrong enough to force a change, and we changed anyway.',
  '**Since 1 September 2024.** Nothing is signed until it has been counted against the **order** — not against the driver\'s note — and the person who counted it writes their name on the gate sheet. Wrapped pallets are cut and counted at the gate.',
  '**What it costs.** About twenty minutes a lorry, which is roughly two hours a week of the supervisor\'s time. ⚠ Nobody authorised that cost; the supervisor decided it was acceptable and it has never been reviewed. We are telling you so rather than waiting to be asked.',
  '**What it has found.** Three errors in the year to date: one short consignment, one duplicate pallet, and one in which the driver\'s note and the order disagreed and the order was right.',
  '**What we have not done.** We have not put the gate sheet on the system. It is a paper book in the warehouse and if it were lost we would have no record at all. We know this and have not fixed it.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does the page say the two wrong consignments cost nothing?'));
out.push(item('2', 'What does the page admit about who authorised the cost?'));
out.push(item('3', 'What is the last paragraph for, in a document written for an auditor?'));
out.push(box('Writer\'s box', [
  '**A practice page — five or six headed parts:** before the date → **what changed** → since the date → what it costs → what it has found → **what we have not done**.',
  '**Date the turn.** *Before August 2024 · Since 1 September 2024.* A page with dates is a page about decisions; a page without them is a page about habits, and an auditor can only ask why about a habit.',
  '**Record the near-miss.** *Neither cost us money, which is exactly why they are worth recording: nothing went wrong enough to force a change, and we changed anyway.* That sentence is the strongest thing on the page.',
  '⚠ **Admit what was never authorised.** Two hours a week of somebody\'s time, decided by that somebody. **Telling an auditor before they find it** is worth more than the two hours.',
  '⚠ **End with "what we have not done."** In a document written for somebody who is looking for gaps, naming your own gap is the only move that cannot be beaten. It also, in practice, gets it fixed.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the practice page for something that has changed where you work (**50 words or more**). Use the frame.'));
out.push(p('**______________ — the practice, how it used to be, and when it changed**   **Before ______________.** ______________ would ______________ and ______________ would ______________. Nothing was ______________, because ______________. This worked for ______________ and we did not think about it.   **What changed.** In ______________, ______________. ______________, which is exactly why ______________.   **Since ______________.** ______________. ______________ writes their name on ______________.   **What it costs.** About ______________. ⚠ ______________ authorised that cost.   **What it has found.** ______________.   **What we have not done.** ______________. We know this and ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says date the turn. Your page says *a few years ago* — what was it the summer of? Somebody always remembers."',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could an auditor read this and find nothing you have not already told them?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_Used to_ and _would_ used correctly, and dated', ''],
  ['The turn, with what moved', ''],
  ['What the new practice costs, and who decided', ''],
  ['A "what we have not done" paragraph', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what we have not done". The class says which admission they would have been most tempted to leave out.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a practice at your work that nobody has ever reviewed (**100 to 140 words**). Say what it is, how long it has been that way, who decided it, and what the turn would have to be for it to change.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the practice nobody has reviewed_   ✓ _used to / would correct?_   ? _who decided, and are they still there?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many is the person who decided still in the building? Where they are not, nobody can say why the practice exists — which is the commonest reason a bad practice survives.'));
out.push(box('Homework', ['Write your final text. Then find the date of one practice at your workplace by asking the longest-serving person what it was the summer of (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 2.5 =======================
out.push(pb());
out.push(h2('2.5  Being the one who listens'));
out.push(p('**Function:** getting the rest of the story   ·   **Grammar:** short responses; echo questions; *so you mean…*   ·   **Pronunciation:** the response that does not interrupt'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  When somebody tells you something at work, what do you say while they are telling it? List four things. How many of them are questions?'));
out.push(p('**b**  Which of these keeps a story going, and which stops it? _Right. · Did he really? · Why didn\'t you telephone me? · And then what? · So you mean nobody signed._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which of Nour\'s responses produces the most?   **A** *Why did you not telephone me?*   **B** *So you mean nobody signed.*   **C** *Right.*'));
out.push(p('**b**  Listen again. **1** What happens when she asks *why did you not telephone me*? **2** What does she do instead, and what does Hala then volunteer?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.9  The question that stops a story', [
  ['Hala', 'The Haffar order went out on Thursday and it was two boxes short.'],
  ['Nour', 'Why did you not telephone me?'],
  ['Hala', '…I did not know until Friday.'],
  ['Nour', 'Sorry. That came out as an accusation and it stopped you. Start again — the order went out two short.'],
  ['Hala', 'Two short. I found out on the Friday when he telephoned.'],
  ['Nour', 'Mm. And then what?'],
  ['Hala', 'And then I looked at the gate sheet and the gate sheet says twelve, and the order says fourteen.'],
  ['Nour', 'So you mean the gate sheet was right and the order was not filled.'],
  ['Hala', 'That is what I mean, yes. And — this is the thing — the picking list in the warehouse says twelve as well.'],
  ['Nour', 'Ah.'],
  ['Hala', 'Which means it was never picked as fourteen, so it was not lost in the yard. It was wrong before it got there.'],
  ['Nour', 'And where does a picking list come from?'],
  ['Hala', 'From me. From the order. So it is mine.'],
  ['Nour', 'Possibly. Would you rather I had asked you that at the start?'],
  ['Hala', 'No. At the start I would have said I did not know.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Listening, in four moves**',
  table(['Move', 'Example', 'What it does'], [
    ['**the small response**', 'Mm. · Right. · Ah.', 'keeps the floor with the speaker'],
    ['**and then what?**', '**And then what?**', 'asks for the next step and nothing else'],
    ['**the echo as a statement**', '**So you mean** the gate sheet was right.', '⚠ makes them confirm or correct — the strongest move here'],
    ['**the widening question**', 'And where does a picking list **come from**?', 'lets them find the thing themselves'],
    ['the move to avoid', '~~Why did you not telephone me?~~', 'ends the story and starts a defence'],
  ], [1.4, 2.2, 2.2]),
  '⚠ **_Why did you not…?_ stops a story dead**, however reasonably it is asked, because it asks the speaker to account for themselves in the middle of telling you something. Save it — and after Unit 7 you will have better ways of asking it.',
  '⚠ **The echo as a statement, not a question.** *So you mean the gate sheet was right* invites a correction; *was the gate sheet right?* invites a yes. The first one is how you get *and — this is the thing —*.',
  '⚠ **Ask where a document comes from and let them answer.** Hala arrived at *so it is mine* on her own, in four moves. Told it at the start, she would have denied it, and she would have been right to.',
  '⚠ If an accusation escapes you, **say so and restart**. *That came out as an accusation and it stopped you* costs four seconds and recovers the whole conversation.',
  '**Practise:** Listen to a partner\'s account using only the four moves. Count how many times you want to ask *why* and do not.',
  '**Useful phrases:**  Mm.  ·  And then what?  ·  So you mean…  ·  And where does … come from?  ·  That came out as an accusation.  ·  Start again.',
  '**Pronunciation – responding without interrupting.** 🔊 **Track 2.10** Listen to *mm* and *right* dropped in at the end of the speaker\'s clause, quietly and on a falling tone. On a rising tone they mean *is that so?* and the speaker stops to justify. Repeat six.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A tells a work story; B uses **only** the four moves — no *why* at all. Then swap, and compare how much came out.'));
out.push(dlg(null, [
  ['A', '__________ and it was __________.'],
  ['B', 'Mm. And then what?'],
  ['A', 'And then I looked at __________ and __________ says __________, and __________ says __________.'],
  ['B', 'So you mean __________.'],
  ['A', 'That is what I mean, yes. And — this is the thing — __________.'],
  ['B', 'Ah.'],
  ['A', 'Which means __________.'],
  ['B', 'And where does __________ come from?'],
]));
out.push(table(['Role card 1 — a short delivery', 'Role card 2 — a lost proof'], [[
  'A found out from the customer, two days late. The documents disagree. The thing A has not said out loud yet is which document they produce themselves.',
  'A has been waiting for a proof that was never sent, and has just discovered that the email went to an address with one letter wrong — typed by A.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** count the moves and write down the sentence the speaker volunteered after the echo. There is almost always one, and it is almost always the important one.'));
out.push(PHRASE_CARD(['Mm.', 'And then what?', 'So you mean…', 'And where does … come from?', 'That came out as an accusation.', 'Start again.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Interview a colleague about something that went wrong, using only the four moves. Write down what they volunteered that you had not asked for.'));
out.push(table(['My move', 'What they said', 'Volunteered, not asked for'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.1, 2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I used _______ moves. The thing they volunteered was _______. The question I wanted to ask and did not was _______._'));
out.push(p('**Listener task:** write down how many people wanted to ask *why did you not…*. It is nearly everybody, which is the point of the cycle.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _So you mean that nobody did not sign_ and _And then what happened then?_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note written after that conversation, and answer the questions.'));
out.push(box(null, [
  '**NOTE — the Haffar order, two boxes short. From a conversation with Hala, Friday afternoon. Her account, not mine.**',
  '**What she found.** The order was for fourteen and twelve went. The customer telephoned on the Friday; nobody here had noticed on the Thursday.',
  '**The three documents.** The **order** says fourteen. The **picking list** says twelve. The **gate sheet** says twelve. So the gate count was correct against the picking list, and the picking list did not match the order.',
  '**Where the picking list comes from.** It is typed by whoever takes the order, from the order. On Thursday that was Hala.',
  '**What she said about that, in her own words.** *So it is mine.* She said it before I asked, having worked through the three documents herself.',
  '⚠ **What I am not writing.** I am not writing that it was Hala\'s fault, because I do not yet know whether the order was legible, whether she was alone on the counter, or whether the fourteen was a late addition by telephone. I will ask those three things on Sunday, and the note will be finished then. **Unfinished is better than wrong.**',
  '**What is already certain, whatever the answer.** Two boxes went to a customer who paid for fourteen, and a gate check against the **picking list** cannot catch a picking list that is wrong. That second point is not about Thursday and it is the more expensive of the two.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does the heading say "her account, not mine"?'));
out.push(item('2', 'What three things does the writer not yet know, and what does she refuse to write until she does?'));
out.push(item('3', 'What is the point in the last paragraph that has nothing to do with Thursday?'));
out.push(box('Writer\'s box', [
  '**A note written from somebody else\'s account — the shape:** whose account it is, in the heading → what they found → **the documents, and what they say** → where each document comes from → **their own words, where they are the finding** → what you are not writing yet, and when you will → what is certain whatever the answer.',
  '**Mark it as somebody else\'s account in the heading.** *Her account, not mine.* It costs four words, it is honest, and it is the difference between a note and a verdict. Unit 10 teaches the grammar of this properly; Unit 2 teaches the habit.',
  '**Quote the sentence they volunteered.** *So it is mine.* An admission arrived at by somebody themselves is worth recording in their words; the same point in yours reads as an accusation.',
  '⚠ **Say what you are not writing, and when the note will be finished.** *Unfinished is better than wrong.* Three questions and a date is a better document than a confident conclusion on a Friday afternoon.',
  '⚠ **Separate the day from the system.** *A gate check against the picking list cannot catch a picking list that is wrong.* The expensive finding is almost never about the day the thing happened, and it is the one that gets lost if the note is about blame.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a note from somebody else\'s account of something (**50 words or more**). Use the frame.'));
out.push(p('**NOTE — ______________. From a conversation with ______________, ______________. Their account, not mine.**   **What they found.** ______________.   **The documents.** The ______________ says ______________. The ______________ says ______________. So ______________.   **Where ______________ comes from.** ______________.   **What they said about that, in their own words.** ______________.   ⚠ **What I am not writing.** I am not writing that ______________, because I do not yet know ______________. I will ask on ______________.   **What is already certain, whatever the answer.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says separate the day from the system. Everything here is about Thursday — is there anything in this that would still be true if Thursday had gone perfectly?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could the person whose account this is read it without feeling misrepresented?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Whose account it is, in the heading', ''],
  ['The documents, and where each comes from', ''],
  ['Their own words where they are the finding', ''],
  ['What is not yet written, with a date — and the system point', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what is certain whatever the answer". The class says which of those findings is about a system rather than a day.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time somebody listened to you properly, or did not (**100 to 140 words**). Say what you were trying to tell them, what they said, and what you did not get to say.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the thing they did not get to say_   ✓ _the four moves, and no accusation?_   ? _did the listener ever find out?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many did the thing never said turn out to matter? That is the cost of *why did you not*, and it is usually paid much later.'));
out.push(box('Homework', ['Write your final text. Then listen to somebody\'s account using only the four moves, and write down the sentence they volunteered (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 2.6 =======================
out.push(pb());
out.push(h2('2.6  And that was the point'));
out.push(p('**Function:** saying what a story is for   ·   **Grammar:** *the upshot was · what that means for us is · I am telling you because*   ·   **Pronunciation:** the sentence that lands'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Tell a colleague a work story in four sentences, then say *I am telling you this because…* and finish it. Was the because the thing you expected?'));
out.push(p('**b**  Which of these is a point, and which is only an ending? _…and in the end he paid. · …so we are never going to accept a telephone approval again. · …and that was that._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub want at the end of the story?   **A** a conclusion   **B** what changes on Monday   **C** an apology'));
out.push(p('**b**  Listen again. **1** What is wrong with "we must all be more careful"? **2** What does he accept instead?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.11  "So what changes on Monday?"', [
  ['Nour', 'So the order said fourteen, the picking list said twelve, and the gate check could not catch it because the gate checks against the picking list. We must all be more careful with picking lists.'],
  ['Mr Ayoub', 'No.'],
  ['Nour', 'No?'],
  ['Mr Ayoub', 'The story is good and the last sentence is wallpaper. Nobody has ever been more careful because they were told to be. What changes on Monday?'],
  ['Nour', 'The gate check could go against the order instead of the picking list.'],
  ['Mr Ayoub', 'Now that is a point. What does it cost?'],
  ['Nour', 'Abu Yasser has to have the order at the gate, which means it is printed twice, and he has to read two documents instead of one. Five minutes a lorry, perhaps.'],
  ['Mr Ayoub', 'And what does it catch that we were not catching?'],
  ['Nour', 'Exactly this. A picking list that is wrong before it leaves the office.'],
  ['Mr Ayoub', 'Then tell the story that way round: here is what happened, here is the one thing it shows, here is what I propose, here is what it costs. Four sentences and I can say yes or no.'],
  ['Nour', 'And *we must all be more careful*?'],
  ['Mr Ayoub', 'Is what people say when they have not worked out what to change. It is not dishonest; it is unfinished. If you genuinely cannot find a change, say that instead — *I cannot see a change that would have caught this* — and I will believe you, and we will leave it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The point of a story**',
  table(['Shape', 'Example'], [
    ['**The upshot was…**', '**The upshot was** that two boxes went short.'],
    ['**What that shows is…**', '**What that shows is** that the gate check cannot catch an office error.'],
    ['**So what I propose is…**', '**So what I propose is** checking against the order.'],
    ['**It would cost…** and **it would catch…**', '**It would cost** five minutes a lorry and **catch** exactly this.'],
    ['the honest nil return', '**I cannot see a change** that would have caught this.'],
  ], [1.8, 2.6]),
  '⚠ **_We must all be more careful_ is wallpaper.** Nobody has ever been more careful because they were told to be. It is not dishonest — it is **unfinished**, and it is what a person says when they have not yet worked out what to change.',
  '⚠ **The four sentences that get an answer:** what happened · the one thing it shows · what I propose · what it costs and what it catches. In that order, a manager can say yes or no in a minute.',
  '⚠ **The honest nil return is a real option and a strong one.** *I cannot see a change that would have caught this* is believed, and it closes the matter. Reaching for it too early is the risk; never reaching for it is a worse one.',
  '⚠ One thing it shows. Not three. A story that shows three things shows none.',
  '**Practise:** Give the four sentences for each. 1 a short delivery 2 a telephone approval that went wrong 3 a lorry that came early 4 a payment on a pad 5 something where there is no change to make',
  '**Useful phrases:**  The upshot was…  ·  What that shows is…  ·  So what I propose is…  ·  It would cost … and catch …  ·  I cannot see a change that would have caught this.',
  '**Pronunciation – the sentence that lands.** 🔊 **Track 2.12** Listen to the four sentences. The third is said slower and the fourth lower; the voice does not rise anywhere. A proposal delivered at the speed of the narrative is heard as part of the narrative. Repeat the last two.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A tells a story and ends with wallpaper; B refuses it and asks what changes on Monday. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'So __________, and __________, and __________. We must all be more careful with __________.'],
  ['B', 'No. The story is good and the last sentence is wallpaper. What changes on Monday?'],
  ['A', '__________ could __________ instead of __________.'],
  ['B', 'Now that is a point. What does it cost?'],
  ['A', '__________, which means __________. __________, perhaps.'],
  ['B', 'And what does it catch that we were not catching?'],
  ['A', 'Exactly this. __________.'],
  ['B', 'Then tell it that way round, in four sentences, and I can say yes or no.'],
]));
out.push(table(['Role card 1 — a telephone approval', 'Role card 2 — no change available'], [[
  'A proof was approved by telephone and the colour was disputed. A\'s wallpaper: "we should always get things in writing." The real proposal: the proof number on the approval email, and no proof released without one.',
  'A lorry was hit by another lorry in the street outside. A wants to propose something and there is nothing to propose. B must let A arrive at the nil return — and accept it.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four sentences. Then say whether you would authorise the proposal on what you heard.'));
out.push(PHRASE_CARD(['The upshot was…', 'What that shows is…', 'So what I propose is…', 'It would cost… and catch…', 'What changes on Monday?', 'I cannot see a change.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** stories from your own work. Give the four sentences for each. At least one should honestly end in a nil return.'));
out.push(table(['What happened', 'What it shows', 'What I propose', 'Cost / what it catches'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.3, 1.4, 1.4, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your four sentences. The class says yes, no, or *not yet* — and *not yet* must come with the question that is missing.'));
out.push(p('**Listener task:** write down every proposal whose cost was not stated. A proposal with no cost gets a *not yet* every time, and should.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _What that shows that…_ and _I propose to checking_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the finished note, and answer the questions.'));
out.push(box(null, [
  '**THE HAFFAR ORDER — what happened, what it shows, and what I propose**',
  '**What happened.** On Thursday 20th an order for fourteen boxes went out as twelve. The order says fourteen; the picking list says twelve; the gate sheet says twelve and is correct against the picking list. The customer telephoned on the Friday. I asked the three questions I did not have answers to on Friday: the order was legible, Hala was alone on the counter, and the fourteenth and thirteenth boxes **were** a late addition, added by telephone at about 4.40 after the picking list had been typed.',
  '**What it shows.** One thing, and it is not about Thursday: **a gate check against the picking list cannot catch an error made before the picking list.** Our whole goods-out check assumes the picking list is right.',
  '**What I propose.** The gate check goes against the **order**, not the picking list, with both documents at the gate.',
  '**What it would cost, and what it would catch.** About five minutes a lorry — the order printed twice, and the supervisor reading two documents instead of one. On this year\'s figures it would have caught this one error. ⚠ **One error a year for about four hours a year of warehouse time.** I think that is worth it and I can see that somebody might not.',
  '**What I am not proposing.** A rule about late telephone additions. They are a quarter of our afternoon orders and they are the reason Mr Haffar orders from us rather than from Jaramana. The answer is not to stop taking them.',
  '**And one thing I have already done.** The picking list now prints the order number and the time it was typed, which takes nobody any time at all and would have shown us in four seconds on the Friday what took me a day.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What did the three questions turn out to show, and whose fault does that make it?'));
out.push(item('2', 'How does the writer present the cost, and what does she concede?'));
out.push(item('3', 'What is the writer not proposing, and why not?'));
out.push(box('Writer\'s box', [
  '**The four-part note, written out:** what happened → **what it shows — one thing** → what I propose → what it would cost **and** what it would catch. Then two optional parts that make it a better document: **what I am not proposing**, and **what I have already done**.',
  '**Put the cost and the catch in the same sentence and let the reader judge.** *One error a year for about four hours a year of warehouse time.* ⚠ And then concede: *I think that is worth it and I can see that somebody might not.* A proposal that admits its own arithmetic is weak is the one that gets approved.',
  '**Name the thing you are not proposing.** Late telephone additions are a quarter of the afternoon and the reason the customer is a customer. Saying so stops somebody senior solving the problem the expensive way.',
  '⚠ **End with the free fix you have already made.** The order number and the time on the picking list cost nothing and save a day. Every one of these notes has one; it is usually smaller than the proposal and worth more.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the four-part note for something at your work (**50 words or more**). Use the frame.'));
out.push(p('**______________ — what happened, what it shows, and what I propose**   **What happened.** ______________. ______________ says ______________; ______________ says ______________. I asked ______________, and ______________.   **What it shows.** One thing, and it is not about ______________: **______________.**   **What I propose.** ______________.   **What it would cost, and what it would catch.** About ______________. It would have caught ______________. ⚠ ______________ for ______________. I think that is worth it and I can see that somebody might not.   **What I am not proposing.** ______________, because ______________.   **And one thing I have already done.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says one thing it shows. I can count three in your second paragraph — which one would you keep if you could only have one?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could somebody say yes or no to this in a minute?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What happened, with the documents', ''],
  ['**One** thing it shows, and not about the day', ''],
  ['A proposal with its cost and its catch in one sentence', ''],
  ['Something not proposed, and something already done', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their cost-and-catch sentence. The class votes yes or no. A sentence that cannot be voted on is not finished.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time somebody told you to be more careful (**100 to 140 words**). Say what had happened, what was actually said, whether anything changed, and what a proposal would have looked like.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the change that was never proposed_   ✓ _the four sentences?_   ? _did it happen again?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many did the same thing happen again? *Be more careful* has a known success rate and the room has just measured it.'));
out.push(box('Homework', ['Write your final text. Then take one thing that went wrong at your work and write the four sentences — including the cost — and give them to whoever could say yes (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 2.7 =======================
out.push(pb());
out.push(h2('2.7  Review & Mediate: tell it the way the driver told it'));
out.push(p('**Function:** passing on somebody else\'s account   ·   **Review:** the scene · the sequence · *while* and *when* · *used to* · listening · the point'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 2 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** Which tense sets the scene, and what does the scene decide?',
  '**2** Where does a sequence stop?',
  '**3** *While* takes the ______ thing; *when* takes the ______.',
  '**4** Which question stops a story dead?',
  '**5** What is wrong with *we must all be more careful*?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has gone wrong in the retelling?   **A** the facts   **B** the scene has been dropped and the account now sounds like carelessness   **C** the names'));
out.push(p('**b**  Listen again. **1** What did Bassel leave out, and what does Nour put back? **2** What does she say a retelling owes the person who told it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.13  "That is not what he told you"', [
  ['Bassel', 'I told Mr Ayoub about the wrap. Half a pallet on the floor and four of them water-marked.'],
  ['Nour', 'What did he say?'],
  ['Bassel', 'He said somebody should have been on the gate.'],
  ['Nour', 'Then that is not what Fadi told you. Fadi told you four men were in the yard and two were up a ladder in the rain, and the lorry was fifty minutes early.'],
  ['Bassel', 'I said it was a mess in the yard.'],
  ['Nour', 'Which is true and is the only part that is not the story. You passed on the damage and dropped the scene, so Mr Ayoub heard carelessness — and the man who gets that is Abu Yasser, who was counting, and Fadi, who could not come off a ladder.'],
  ['Bassel', 'I was not blaming anybody.'],
  ['Nour', 'You were not. You told it in the order it reached you, which is the order everything reaches everybody, and the scene is always the part that falls off — because it takes four clauses and the damage takes four words.'],
  ['Bassel', 'So what do I owe him?'],
  ['Nour', 'Whoever tells you something is owed the **constraint**. You can cut his adjectives, his weather and his opinion of the driver. You cannot cut the reason nobody did anything, because without it the account accuses him.'],
  ['Bassel', 'Shall I go back and say it again?'],
  ['Nour', 'Yes, and in one sentence, which is all a second go ever gets: *two of them were up a ladder in the rain and the lorry was fifty minutes early.* He will take it; he has not decided anything yet.'],
  ['Bassel', 'And if he had decided?'],
  ['Nour', 'Then we would be having a much longer conversation, and Fadi would be in it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – passing on an account you were given**',
  table(['What you may cut', 'What you may not', 'How to repair it'], [
    ['adjectives, weather, opinion of a third party', '**the constraint** — why nobody acted', 'one sentence, which is all a second go gets'],
    ['the order it reached you in', 'the proportion and the position of the damage', 'He has not decided anything yet.'],
  ], [2, 1.9, 2]),
  '⚠ **The scene is always the part that falls off**, and not out of malice: it takes four clauses and the damage takes four words. ⚠ **So the one thing a retelling owes the teller is the constraint.** Without it, every account of a mess accuses whoever was nearest.',
  '⚠ **A second go gets one sentence.** Choose it before you go back in, and make it the constraint and the thing outside anybody\'s control: *two of them were up a ladder in the rain and the lorry was fifty minutes early.*',
  '⚠ **Repair it before a decision is taken.** *He has not decided anything yet* is the difference between a correction and an argument.',
  '**Practise:** You passed on an account and dropped the scene. Work out the one sentence that puts it back, and say when you would say it.',
  '**Useful phrases:**  That is not what he told you.  ·  You passed on the damage and dropped the scene.  ·  Whoever tells you something is owed the constraint.  ·  one sentence, which is all a second go gets  ·  He has not decided anything yet.',
  '**Pronunciation – the one-sentence repair.** 🔊 **Track 2.14** Listen: _two of them were up a ladder in the rain // and the lorry was fifty minutes early._ Two groups, flat, no emphasis anywhere — because emphasis sounds like argument and this sentence has to sound like information. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has passed on an account badly; B works out with them what was dropped and what the one-sentence repair is. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'A told the manager that the counter was shut for twenty minutes on Tuesday. What A left out: the only person there had been called to the yard because a lorry was blocking the gate, and had put a note on the door. The one who gets the blame is Hala.',
  'A told a customer that the delivery was late "because of the warehouse". What A left out: the order was taken at 4.40 as a telephone addition and the picking list had been typed at four. The one who gets the blame is Abu Yasser, who never saw the addition.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the one-sentence repair. Then say who it protects, and whether they will ever know.'));
out.push(PHRASE_CARD(['That is not what he told you.', 'You dropped the scene.', 'owed the constraint', 'one sentence, no more', 'He has not decided anything yet.', 'Shall I go back?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a first-hand account. Pass it on to **two** colleagues — once in thirty seconds and once in two sentences. Then ask each what they think happened and who they think was at fault.'));
out.push(table(['Who I told', 'How I told it', 'Who they thought was at fault'], [['', '', ''], ['', '', '']], [1, 1.6, 1.8]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what happened to the account as it travelled. This is the **second** unit of this book, and the unwritten thing is the one the whole unit has been circling: **a story shortens from the front.** The scene goes first, then the constraint, then the proportion — and what is left is the damage and the nearest name, which is an accusation nobody made.'));
out.push(p('_I told ______ in ______ seconds and they thought ______ was at fault. What I had dropped was ______._'));
out.push(p('**Listener task:** add to the Book 1 office-word list: _incident · timeline · version of events · in hindsight · log entry · hearsay._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 4)', 10));
out.push(p('⚠ **This unit practises Part 4: right, wrong, or doesn\'t say.** Read the text. For each statement choose **A** (right), **B** (wrong) or **C** (the text does not say).'));
out.push(box(null, [
  '**NOTICE TO ALL STAFF — goods inwards, from 1 September**',
  'Until this year a driver\'s note was signed at the gate and nothing was counted against the order. That practice began before most of us were here and worked for several years, because the same haulier sent the same driver.',
  'In July and August the haulier changed drivers twice and we twice signed for consignments that were not ours. Neither cost us money. Both were returned within a week.',
  'From 1 September, nothing is signed until it has been counted against the order, and whoever counted it writes their name on the gate sheet. Wrapped pallets are cut and counted at the gate. This takes about twenty minutes a lorry.',
  'The gate sheet is a paper book kept in the warehouse. It is not on the system.',
], 'FFFFFF', C.navy));
[
  '**1**  Before this year, goods were counted against the order at the gate.',
  '**2**  The old practice had worked for several years.',
  '**3**  The company lost money on the two wrong consignments.',
  '**4**  The new check takes about twenty minutes for each lorry.',
  '**5**  The manager decided that twenty minutes a lorry was acceptable.',
  '**6**  There is no electronic copy of the gate sheet.',
  '**7**  The haulier has been changed since August.',
].forEach(t => out.push(p(t + '   **A** right   **B** wrong   **C** doesn\'t say', { indent: 200, after: 50 })));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 1 — an internal message, 35 to 45 words,** three content points.',
  'For passing on an account the three points are nearly always: **what happened** · **the one thing that explains it** · **what the reader should do or not do**.',
  '⚠ **In forty words the constraint has to survive.** If you can only keep one clause of the scene, keep the one that says why nobody acted — that is the clause that stops the message being an accusation.',
  '⚠ No reason, no history, no apology. The examination does not ask for them and forty words will not hold them.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** Something went wrong and your colleagues will hear about it today. Write an internal message (**35 to 45 words**). Say **what happened**, **the one thing that explains it**, and **what they should do**.'));
out.push(p('______________ this morning: ______________. ______________ because ______________. Please ______________ and do not ______________ until ______________. ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What happened', ''],
  ['The constraint — the one thing that explains it', ''],
  ['What the reader should do', ''],
  ['35 to 45 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full account of something that went wrong at your work (**100 to 140 words**), in the shape of this whole unit: the scene first, the constraint, the sequence in four steps, and the one thing it shows.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then pass one real account on to somebody, deliberately keeping the constraint, and write down whether they asked whose fault it was (50+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 2 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  We ___ the Homs order when the lorry came.   a) counted   b) were counting   c) are counting',
  '2  ___ she was writing it in the day book, the system went down.   a) While   b) When   c) During',
  '3  ___ the system came back, we had three payments on paper.   a) While   b) When   c) Meanwhile',
  '4  We ___ sign the driver\'s note at the gate.   a) used to   b) are used to   c) use to',
  '5  We ___ count anything.   a) didn\'t used to   b) didn\'t use to   c) not used to',
  '6  He ___ hand it over and I would sign it.   a) will   b) would   c) was',
  '7  So you ___ the gate sheet was right.   a) mean   b) means   c) meaning',
  '8  What that ___ is that the gate check cannot catch an office error.   a) show   b) shows   c) showing',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 2.15** Listen to the account of the yard. Complete the note.   What was running: ______   How many men, and where: ______   The constraint: ______   The lorry: ______   The damage, counted: ______'));
out.push(dlg('Track 2.15  Audio script (read after the check)', [
  ['Fadi', 'At seven we were counting in the Homs order — it had come on the Thursday and nobody had touched it because of the holiday.'],
  ['Fadi', 'There were four of us in the yard. Abu Yasser and me on the count, and two of the men were up on the roof putting the gutter back, because it came down in the rain on Sunday.'],
  ['Fadi', 'It was raining again, lightly. Nobody could come off that ladder quickly — you do not hurry a ladder in the rain.'],
  ['Fadi', 'The Jaber lorry came at about ten past seven. It was booked for eleven. The driver said he had a drop in Adra and could not wait, so he put it down by the gate on the concrete.'],
  ['Fadi', 'Fourteen boxes of wrap went on wet ground. Four are water-marked. The other ten are sound and I have put them back on the bay.'],
]));
out.push(p('**C  Writing.** Write the four sentences of 2.6 about something at your work (**50 words or more**): what happened, the one thing it shows, what you propose, and what it would cost and catch.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 2)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ set the scene in the past continuous before saying what happened',
  '☐ name the constraint — why nobody did anything',
  '☐ tell a sequence in four steps and stop at the point',
  '☐ choose *while* or *when* on purpose, and say which thing is the long one',
  '☐ describe an old practice with *used to* and *would*, and date the turn',
  '☐ listen with four moves and no *why did you not*',
  '☐ say what a story is for: what it shows, what I propose, what it costs',
  '☐ write an incident note, a handover, a log, a practice page and a four-part proposal',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 2 · Student\'s Book');
