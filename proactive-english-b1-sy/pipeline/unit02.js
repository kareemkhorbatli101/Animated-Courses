// Proactive English B1 · Syria Edition · Book 1 · Unit 2 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 2  Telling a Story'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**2.1**  set the scene before anything happens',
  '**2.2**  tell what happened, in order',
  '**2.3**  say what interrupted what',
  '**2.4**  say what used to happen',
  '**2.5**  react while somebody else is telling a story',
  '**2.6**  end a story so that it has a point',
  '**2.7**  Review & Mediate: retell somebody else\'s story accurately',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**Everybody brought three facts** from somebody\'s worst journey, as they were asked to — three facts and not the story. In 2.1 the class finds out why.',
  '**Tareq has eleven years of journeys** and has never told any of them to anybody who was not also a driver.',
  '**The lorry from Türkiye.** Bassel\'s paper was due on a Tuesday in March, and what happened to it is the longest story anybody in Room 14 has.',
], C.lyellow, C.orange));

// ======================= 2.1 =======================
out.push(pb());
out.push(h2('2.1  Before anything happened'));
out.push(p('**Function:** setting the scene   ·   **Grammar:** the past continuous for background   ·   **Pronunciation:** the weak _was_ and _were_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out your **three facts** from the homework. Only the three. Your partner has to ask for the fourth thing they want to know, and you are not allowed to give it yet.'));
out.push(board('It was raining and nobody was talking.', 'past continuous for the scene'));
out.push(p('**b**  Scene or event? **1** _It was raining._  **2** _The bus stopped._  **3** _Nobody was talking._  **4** _A man stood up._  **5** _We were waiting at the Harasta turning._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Ms Huda stop Tareq?   **A** he is talking too fast   **B** he has started with the event   **C** the story is too long'));
out.push(p('**b**  Listen again. **1** What three things does Tareq put in the scene the second time?   **2** What does Ms Huda say the scene is for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.1  Three facts', [
  ['Ms Huda', 'Your three facts, Tareq. Not the story.'],
  ['Tareq', 'February. The Harasta turning. Forty minutes.'],
  ['Jad', 'What happened in the forty minutes?'],
  ['Tareq', 'A woman had a baby on my bus.'],
  ['Jad', 'What?'],
  ['Ms Huda', 'Stop. That is the whole problem and you have just done it beautifully. You have started with the only sentence anybody will remember, and now there is nowhere to go.'],
  ['Tareq', 'It is the interesting part.'],
  ['Ms Huda', 'It is the interesting part and it is worth four seconds. Start again and do not let it happen for a minute. Tell me what the inside of that bus was like before anything happened.'],
  ['Tareq', '…It was half past six in the morning and it was raining, the kind that does not stop. There were nineteen people on a bus for fourteen. Nobody was talking, because nobody talks at half past six. Two women were standing at the front with their backs to me and I could not see past them. The windows were running with water and I had my hand on the cloth the whole way because I was wiping the glass every thirty seconds.'],
  ['Jad', 'And then?'],
  ['Tareq', 'And then one of the two women at the front turned round.'],
  ['Samira', 'Oh.'],
  ['Ms Huda', 'That. That sound is what the scene is for. Jad asked "and then" — nobody asked "and then" the first time, because you told them first.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the past continuous for the scene**',
  table(['what it does', 'example'], [
    ['the weather and the light', '_It **was raining**._ · _It **was getting** dark._'],
    ['what people were in the middle of', '_Nobody **was talking**._ · _Two women **were standing** at the front._'],
    ['what you were doing yourself', '_I **was wiping** the glass every thirty seconds._'],
    ['something going on around the event', '_The windows **were running** with water._'],
  ], [1.7, 2.5]),
  '**The scene is the past continuous; the event is the past simple.** Everything in the scene is **unfinished** and going on at the same time; the event is one finished thing that happens **into** it.',
  '**Three is the number.** Weather or light · what people were doing · one detail nobody else would have noticed. More than four and the listener starts waiting; fewer than three and there is nothing for the event to land on.',
  '⚠ ~~It rained and nobody talked and then a woman turned round.~~ — correct English, and it is a list of three events. The scene has gone, and with it the "and then".',
  '⚠ State verbs do not go in the continuous here either: ~~I was knowing the road~~ → _I **knew** the road_. (Unit 1.2, and it does not stop being true in the past.)',
  '**Useful phrases:** the kind that does not stop · nobody talks at half past six · I could not see past them · and then one of them turned round.',
  '**Practise:** Give three lines of scene before each event.  1 The lights went out.  2 My telephone rang.  3 The door opened.  4 Somebody shouted my name.',
  '**Pronunciation.** 🔊 **Track 2.2** _was_ and _were_ almost disappear and the _-ing_ word takes everything: _it was **RAI**ning_ /ɪt wəz/ · _nobody was **TAL**king_ · _two women were **STAN**ding_. Said in full they sound like an argument. Listen to eight and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the event from the card. B builds three lines of scene **in front of** it and then says the event. A says which of the three lines they can actually see.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'It was __________ and __________. Nobody was __________. I was __________.'],
  ['A', 'And then?'],
  ['B', 'And then __________.'],
  ['A', 'The line I can see is __________.'],
]));
out.push(table(['Card A – the events', 'Card B – the events'], [
  ['The lights went out.', 'The lorry did not come.'],
  ['A man started shouting.', 'The telephone rang at four in the morning.'],
  ['The machine stopped.', 'Somebody knocked on the window.'],
  ['My name was called.', 'The road was closed.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **three** scene lines and the one event. Which scene line was the one nobody else would have thought of?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own three facts from the homework. Build the scene — three lines, no event — and stop. Your partner must ask _and then?_ before you are allowed to go on.'));
out.push(p('**b**  Swap. Then each of you say which line of your partner\'s scene made you want to know.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Tareq gave his three facts — February, the Harasta turning, forty minutes — and when Jad asked what happened he said a woman had a baby on his bus, and Ms Huda stopped him. She said he had started with the only sentence anybody would remember and now there was nowhere to go: it is the interesting part and it is worth four seconds. So he started again with the scene. It was half past six in the morning and it was raining, the kind that does not stop. There were nineteen people on a bus for fourteen. Nobody was talking, because nobody talks at half past six. Two women were standing at the front with their backs to him and he could not see past them, and the windows were running with water so he was wiping the glass every thirty seconds. Then he said that one of the two women turned round, and Samira said "oh" — and Ms Huda said that sound is what the scene is for, because Jad asked "and then", and nobody asked "and then" the first time._'));
out.push(p('**Listener task:** write the scene line from today that you can see most clearly.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two openings. Answer the questions.'));
out.push(model([
  '**ONE STORY, TWO OPENINGS** · the same morning, written twice',
  '**Opening 1.** A woman had a baby on my bus in February at the Harasta turning and it took forty minutes and the ambulance could not get through because of the rain and in the end a passenger who turned out to be a midwife did everything and I just drove.',
  '**Opening 2.** It was half past six on a Tuesday morning in February and it was raining the kind of rain that does not stop. I had nineteen people on a bus built for fourteen. Nobody was talking; nobody talks at half past six, and the ones standing had that face people have when they are counting the stops. Two women were standing at the front with their backs to me, close together, and I could not see past them to the mirror, which irritated me for about two minutes and then stopped irritating me because I was wiping the windscreen every thirty seconds and had other things to think about. We came up to the Harasta turning and the traffic was not moving.',
  'Then one of the two women turned round.',
  '**What is in the second that is not in the first.** The rain is a kind of rain. The bus has a number in it. The silence has a reason. The two women are standing in a particular way and I say what I thought about it at the time, including that it was a small, ordinary irritation. And the event — one of them turned round — is on a line of its own, after everything has been made still.',
]));
out.push(item('1', 'How many facts are in opening 1, and how many of them can you see?'));
out.push(item('2', 'What does the writer say about the two minutes of irritation?'));
out.push(item('3', 'Where is the event put, and what has been done to the page before it?'));
out.push(writers([
  'A story opening: **time, day and weather** → **the number** → **what people were doing, and why** → **one thing you noticed and what you thought about it** → **the event, on a line of its own**.',
  'Make the weather **a kind of weather**: _the kind of rain that does not stop_. The adjective is doing nothing; the clause is doing everything.',
  'Put your own small, unheroic thought in — _which irritated me for about two minutes_. A narrator who was already alert to everything is a narrator nobody believes.',
  '⚠ Give the event **its own line**, with a paragraph break in front of it. The white space on the page does the same work as the pause in the voice.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the opening of your journey story — scene only, and the event on its own line (50 words or more).'));
out.push(p('It was ______________ on a ______________ and it was ______________ the kind of ______________ that ______________. I had ______________. Nobody was ______________; ______________, and ______________. ______________ was ______________, which ______________ for about ______________ and then ______________. We came up to ______________ and ______________.   Then ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Three or four lines of scene, all in the past continuous',
  'Weather is a **kind** of weather; the scene has a number in it',
  'One small ordinary thought of your own',
  'The event on a line of its own, after a break',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the last line of scene and the event only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full opening of the worst journey **you** have made (100 words or more). Scene, and then the event on its own line. Stop at the event; the rest of the story is 2.2.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s opening as **somebody who was not there**. ★ _The line I can see._  ✓ _One line of scene that is really an event in disguise._  ? _What did you think at the time that you have left out?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read six **events** aloud, just the one line each, with no scene. **Which of them is interesting on its own?** Almost none, and that is the argument for the whole cycle.'));
out.push(hw('Write the scene for a morning on which **nothing** happened (50+ words). No event at the end. It is harder and it is the better exercise.'));

// ======================= 2.2 =======================
out.push(pb());
out.push(h2('2.2  And then, and then, and then'));
out.push(p('**Function:** telling what happened, in order   ·   **Grammar:** the past simple chain · sequencers   ·   **Pronunciation:** the -ed ending, three ways'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher gives six verbs. Everybody writes the past simple. Then the class says which of the six are irregular and which of the regular ones end in /t/, /d/ or /ɪd/.'));
out.push(board('She turned round and she said four words.', 'past simple · first · then · after that'));
out.push(p('**b**  Put them in order and join them: _the ambulance did not come_ · _a passenger stood up_ · _she turned round_ · _we stopped at the turning_ · _the baby was born_.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who did the most?   **A** Tareq   **B** the midwife   **C** the woman at the front'));
out.push(p('**b**  Listen again. **1** What were the four words?   **2** What does Tareq say he did that he is not proud of?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.3  Forty minutes', [
  ['Tareq', 'She turned round and she said four words. "The baby is coming."'],
  ['Lubna', 'To you?'],
  ['Tareq', 'To the bus. Not to me. And then nothing happened for about four seconds, which is a long time, and I am not proud of those four seconds because I was thinking about the schedule.'],
  ['Yara', 'What did you do?'],
  ['Tareq', 'I pulled into the service road and I turned the engine off. Then I stood up and I said, in Arabic, "is there a doctor". Nobody moved. So I said it again and a woman at the back said "I am not a doctor, I am a midwife, and I have been standing up for twenty minutes waiting for somebody to ask".'],
  ['Jad', 'She was already there.'],
  ['Tareq', 'She was already there, the whole time, standing up. After that I did almost nothing. I rang for an ambulance and they said forty minutes because of the rain. I asked the men to get off and stand at the front of the bus, and they did, all of them, in that rain, without one word. Then I drove.'],
  ['Lubna', 'You drove?'],
  ['Tareq', 'The midwife said the hospital was eleven minutes away and an ambulance was forty, so I drove, and she talked to me the whole way in a completely flat voice about what she wanted me to do with the corners. In the end the baby was born in the hospital car park, in the bus, four minutes after we stopped.'],
  ['Samira', 'And the men in the rain?'],
  ['Tareq', 'I left them at the Harasta turning. I have thought about that every February since.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the chain of events**',
  table(['what it does', 'example'], [
    ['one finished action after another', '_I **pulled** into the service road and **turned** the engine off._'],
    ['the order, when it is not obvious', '_**Then** I stood up._ · _**After that** I rang for an ambulance._'],
    ['the end of the chain', '_**In the end** the baby was born in the car park._'],
  ], [1.7, 2.5]),
  '**Sequencers, and what they are each for:** _then_ (the next thing) · _after that_ (a new part of the story) · _so_ (this is why the next thing happened) · _in the end_ (the outcome, not the last event).',
  '⚠ ~~At the end the baby was born.~~ → _**In the end**_ means the outcome. _**At the end**_ needs a thing: _at the end of the road · at the end of the day_.',
  '⚠ ~~Finally~~ is not a storyteller\'s word in English — it belongs in instructions and in essays. In a story use _in the end_.',
  '**Do not join everything with _and then_.** Three or four events in a row can simply follow one another: _I pulled in. I turned the engine off. I stood up._ Short sentences are fast, and speed is what the chain is for.',
  '**Pronunciation of _-ed_, three ways:** /t/ after a voiceless sound — _stopped · asked · worked_ · /d/ after a voiced one — _turned · rang_ _(irregular)_ · _answered_ · /ɪd/ only after **t** or **d** — _waited · started · needed_.',
  '**Useful phrases:** nothing happened for about four seconds, which is a long time · I am not proud of those four seconds · she was already there the whole time · I have thought about that every February since.',
  '**Practise:** Say the chain in five short sentences.  1 the lights went out  2 you found the torch  3 the neighbour knocked  4 you went down  5 the whole street was out',
  '**Pronunciation.** 🔊 **Track 2.4** Twelve past-simple verbs. Put each one in the right column — /t/, /d/ or /ɪd/ — then say the sentence from the track that it came in.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has the notes on the card. B tells the chain in order, in short sentences, using **three** different sequencers and not using _and then_ more than once. A counts the _and thens_.'));
out.push(dlg(null, [
  ['A', 'Here are the notes. __________.'],
  ['B', '__________. Then __________. __________, so __________.'],
  ['A', 'How did it end?'],
  ['B', 'After that __________. In the end __________.'],
  ['A', 'You used _and then_ __________ times.'],
]));
out.push(table(['Card A – the notes', 'Card B – the notes'], [
  ['lights went out · found the torch · neighbour knocked · whole street out · back at 2 a.m.', 'lorry late · rang the driver · he was in Homs · machine stopped · lost two days'],
  ['got on the wrong bus · noticed at Jaramana · got off · no money · a woman paid', 'woke at 4 · power cut · exam at 8 · walked · arrived at 7.55'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the sequencers you hear and count the sentences. Which performance was faster, and was it the one with fewer words or more?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Carry on from the scene you wrote in 2.1. Tell the chain — what happened, in order, in short sentences. Your partner counts your _and thens_ and stops you at the third.'));
out.push(p('**b**  Swap. Then each of you say the one event in your own chain that you are not proud of, if there is one.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The woman turned round and said four words to the bus, not to Tareq: the baby is coming. Then nothing happened for about four seconds, which he says is a long time and which he is not proud of, because he was thinking about the schedule. He pulled into the service road and turned the engine off. He stood up and asked in Arabic whether there was a doctor, and nobody moved, so he asked again — and a woman at the back said she was not a doctor, she was a midwife, and she was standing up for twenty minutes waiting for somebody to ask. After that he says he did almost nothing. He rang for an ambulance and was told forty minutes because of the rain. He asked the men to get off and stand at the front of the bus and they did, all of them, in that rain, without a word. The midwife told him the hospital was eleven minutes away, so he drove, and she talked him through the corners in a completely flat voice. In the end the baby was born in the hospital car park, in the bus, four minutes after they stopped. He left the men at the Harasta turning and he has thought about that every February since._'));
out.push(p('**Listener task:** write the four seconds from somebody else\'s story — the moment nobody is proud of.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the middle of the story, as Tareq writes it. Answer the questions.'));
out.push(model([
  '**THE FORTY MINUTES** · Tareq Ayoub · the middle of it',
  'She turned round and said four words. The baby is coming.',
  'For about four seconds nothing happened at all. I want that written down, because every time I have told this story out loud I have left those four seconds out, and in them I was not thinking about the woman. I was thinking that I was already nine minutes behind and that the company counts the nine minutes.',
  'Then I pulled into the service road and turned the engine off. I stood up. I asked whether there was a doctor and nobody moved, so I asked again, louder, and a woman at the back said she was not a doctor, she was a midwife, and she was standing for twenty minutes waiting for somebody to ask. I think about that sentence more than I think about the baby.',
  'After that I was the least important person on the bus. I rang for an ambulance and they said forty minutes, because of the rain. I asked the men to get off and wait at the front and every one of them did it, in that rain, without one word and without one question, which is the part I would not have predicted.',
  'The midwife said the hospital was eleven minutes and the ambulance was forty, so I drove. She talked the whole way in a flat voice about the corners. In the end the baby was born four minutes after we stopped, in the bus, in the hospital car park, and I was outside it holding the door and counting the men I left standing in the rain at Harasta. Eleven. I counted them eleven times on the way.',
]));
out.push(item('1', 'What does he say he has always left out, and what was he actually thinking?'));
out.push(item('2', 'Which sentence does he think about more than the baby?'));
out.push(item('3', 'What is he doing at the end, while the baby is being born?'));
out.push(writers([
  'The middle of a story: **the event** → **the four seconds you are not proud of** → **the chain, in short sentences** → **the thing you would not have predicted** → **what you were doing at the moment everybody thinks you were doing something else**.',
  'Put the unflattering thing in **early**, and say that you usually leave it out. It buys the reader\'s trust for everything after it, which is the only currency a storyteller has.',
  'Name the sentence that stayed with you and say it beat the big event: _I think about that sentence more than I think about the baby._',
  '⚠ End the middle on a **small, exact action**: holding a door and counting to eleven. The large thing is happening off the page and the reader does not need to be taken to it.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the middle of your story (50 words or more).'));
out.push(p('______________.   For about ______________ nothing happened at all. I want that written down, because ______________, and in them I was thinking ______________.   Then I ______________. I ______________. I ______________, so ______________.   After that ______________. ______________, which is the part I would not have predicted.   In the end ______________, and I was ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Past simple all the way through the chain',
  '_and then_ used **once** at most · _in the end_, not _at the end_, for the outcome',
  'The thing you usually leave out, put in early',
  'A small exact action at the close, not the big one',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "four seconds" paragraph only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the middle of your own journey story in full (100 words or more), following the opening you wrote in 2.1. The chain in short sentences, the thing you are not proud of, the thing you would not have predicted, and a small exact action at the end.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s middle as **somebody who was on that bus / in that room**. ★ _The sentence I would remember._  ✓ _One place where the chain slows down and does not need to._  ? _What were you really thinking in the four seconds?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of you put in the thing you are not proud of?** Count. Then ask the ones who did whether the story got better or worse, and listen to the answer, because it is always the same.'));
out.push(hw('Tell your story out loud to somebody at home and then write down **what you left out when you told it** (50+ words). People leave out the same thing every time.'));

// ======================= 2.3 =======================
out.push(pb());
out.push(h2('2.3  While I was waiting'));
out.push(p('**Function:** saying what interrupted what   ·   **Grammar:** _when_ · _while_ · _as_   ·   **Pronunciation:** the pause after the clause'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher says two half-sentences. The class joins them with _when_, _while_ or _as_ and says which half is the long one and which is the short one.'));
out.push(board('I was wiping the glass when she turned round.', 'when · while · as'));
out.push(p('**b**  Which word? **1** _I was waiting ___ the call came._  **2** ___ _I was waiting, I counted the cars._  **3** ___ _I turned round, the door closed._  **4** _He rang ___ I was in the shop._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Bassel\'s story about?   **A** a lorry that did not come   **B** a machine that broke   **C** a man who did not ring back'));
out.push(p('**b**  Listen again. **1** What was he doing when the call came?   **2** What does Fares say about the two days?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.5  While I was standing there', [
  ['Bassel', 'March. A Tuesday. The paper from Türkiye.'],
  ['Fares', 'Three facts. Good man.'],
  ['Bassel', 'The lorry was due at eight. At half past nine I was standing in the yard with a cup of tea going cold in my hand, and I was doing the thing you do, which is looking at the gate as if looking at it helps.'],
  ['Rasha', 'And then the call came.'],
  ['Bassel', 'While I was standing there the telephone went in the office, and Khaled shouted that it was the driver. As I crossed the yard I was already deciding what I was going to say to him, which was a waste, because he did not let me say any of it.'],
  ['Fares', 'What did he say?'],
  ['Bassel', '"I am in Kilis. I have been in Kilis since Sunday." Four days on the Turkish side and nobody told us a thing. And while he was telling me that, the big machine stopped — I heard it stop, through the window, in the middle of the sentence.'],
  ['Jad', 'Two things at once.'],
  ['Bassel', 'Two things at once, and I could only do one of them, and I did the wrong one. I stayed on the telephone for eleven minutes being told about Kilis, and by the time I got to the machine the roller took four hundred sheets.'],
  ['Fares', 'So you lost the two days to the lorry.'],
  ['Bassel', 'No. That is what I thought for a year. I lost the two days to eleven minutes on a telephone, listening to a man tell me something I could not change, while the thing I could change was happening forty metres away.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the long thing and the short thing**',
  table(['you say', 'and it means'], [
    ['_I **was standing** in the yard **when** the telephone **went**._', 'the standing is long; the call is short and comes into it'],
    ['_**While** I **was standing** there, the telephone **went**._', 'the same, with the long thing first'],
    ['_**As** I **crossed** the yard, I **was deciding** what to say._', 'two things, together, and one of them is a movement'],
    ['_**When** I **got** there, the sheets **were** on the floor._', 'both short — one after the other'],
  ], [2.6, 2.2]),
  '**The rule in one line:** the **long** thing is the past continuous, the **short** thing is the past simple, and _when_ usually goes in front of the short one, _while_ in front of the long one.',
  '⚠ ~~While the telephone went, I was standing in the yard.~~ → _while_ goes with the **long** thing. ~~When I was standing, the telephone was going.~~ → both continuous and nothing happens.',
  '⚠ **_when_ + two past simples is not an interruption**, it is a sequence: _When I got there, the sheets were on the floor_ — first one, then the other. Both are correct English and they mean different things.',
  '**_as_** is for two things moving together, and it is the one students never use: _**As** I crossed the yard, I was already deciding what to say._',
  '**Two things at once is the shape of most bad days**, and the sentence that holds them is this one. It is also how you say which of the two you chose: _I stayed on the telephone **while** the machine was taking four hundred sheets._',
  '**Useful phrases:** looking at the gate as if looking at it helps · which was a waste · I could only do one of them and I did the wrong one · something I could not change, while the thing I could change was happening forty metres away.',
  '**Practise:** Join them.  1 I / wait at the stop — the call / come  2 we / have dinner — the lights / go out  3 I / cross the road — I / see him  4 she / talk — I / hear the machine stop',
  '**Pronunciation.** 🔊 **Track 2.6** The clause that comes first is said as one piece and there is a small pause after it before the event: _While I was standing there_ ‖ _the telephone went._ No pause and the sentence has no interruption in it. Listen to six and copy the pause.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the two halves from the card. B joins them **both ways** — _when_ first and _while_ first — and then says which version sounds like the real story. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________ / __________.'],
  ['B', 'I was __________ when __________.'],
  ['B', 'While I was __________, __________.'],
  ['A', 'Which is the real one?'],
  ['B', 'The __________ one, because __________.'],
]));
out.push(table(['Card A – the two halves', 'Card B – the two halves'], [
  ['stand in the yard / the telephone go', 'wait for the result / my mother come in'],
  ['cross the road / see him', 'write the letter / the power go off'],
  ['have dinner / the lights go out', 'drive to Homs / the tyre go'],
  ['talk to the driver / the machine stop', 'count the money / the shop door open'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the version each pair chose as the real one, and say what makes it real: it is nearly always the one that puts the **long** thing first, because that is the order the day actually had.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner about a time **two things happened at once** and you could only do one of them. Say what you were doing, what came into it, and which one you chose.'));
out.push(p('**b**  Swap. Then each of you say whether you chose the right one, and how long it took you to decide that.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Bassel\'s three facts were March, a Tuesday, and the paper from Türkiye. The lorry was due at eight, and at half past nine he was standing in the yard with a cup of tea going cold, looking at the gate as if looking at it helps. While he was standing there the telephone went in the office, and as he crossed the yard he was already deciding what he was going to say, which he says was a waste because the driver did not let him say any of it. The driver said he was in Kilis and was there since Sunday — four days, and nobody told them. And while the driver was telling him that, the big machine stopped; Bassel heard it stop through the window, in the middle of the sentence. Two things at once, and he could only do one, and he says he did the wrong one: he stayed on the telephone for eleven minutes being told about Kilis, and by the time he got to the machine the roller took four hundred sheets. He thought for a year that he lost the two days to the lorry. He says he lost them to eleven minutes on a telephone, listening to something he could not change while the thing he could change was happening forty metres away._'));
out.push(p('**Listener task:** write the two things that happened at once in somebody else\'s story, and which one they chose.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Bassel writes for the wall of the office. Answer the questions.'));
out.push(model([
  '**ELEVEN MINUTES** · for the office wall, Tahhan Printing',
  'On the eleventh of March I lost two days\' work, and for a year I told everybody that the lorry lost them.',
  'This is what actually happened. The lorry was due at eight. At half past nine I was standing in the yard doing nothing useful. While I was standing there the telephone rang, and as I crossed the yard I was composing a speech, which the driver then did not listen to. He was in Kilis. He was in Kilis since Sunday. There was nothing I could do about Kilis on the eleventh of March, and there was nothing I could do about it on the Sunday either.',
  'While he was telling me, the machine stopped. I heard it through the window. I stayed on the telephone for eleven minutes.',
  'The roller took four hundred sheets in those eleven minutes. That is the two days.',
  '**The rule I am putting on this wall.** When two things happen at once, ask one question before you choose: **which of these can I still change?** The lorry was already four days gone. The machine was stopping while I listened. I chose the one that made me feel informed over the one I could do something about, and I would do it again tomorrow if this were not on the wall.',
]));
out.push(item('1', 'What did he tell everybody for a year?'));
out.push(item('2', 'What was he doing while the machine was stopping?'));
out.push(item('3', 'What is the question on the wall, and why does he say the rule has to be written down?'));
out.push(writers([
  'A page that corrects your own story: **what you told everybody** → **what actually happened, with the two things side by side** → **the arithmetic of the loss** → **the rule, as a question** → **the honest line about whether you would do it again**.',
  'Put the two simultaneous things in **one sentence** so the reader sees them overlap: _While he was telling me, the machine stopped._ Two sentences lets the reader off.',
  'Do the arithmetic out loud: _four hundred sheets in those eleven minutes. That is the two days._ A number converted into a consequence is an argument.',
  '⚠ End with the admission that the rule is **not** yet a habit: _I would do it again tomorrow if this were not on the wall._ That is why the page is on the wall and not in a drawer.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page for a day when two things happened at once (50 words or more).'));
out.push(p('**______________** · for ______________   On ______________ I lost ______________, and for ______________ I told everybody that ______________.   This is what actually happened. ______________. While I was ______________, ______________. As I ______________, I was ______________.   While ______________, ______________. I ______________ for ______________.   ______________. That is ______________.   **The rule.** When two things happen at once, ask: **______________?** ______________, and I would ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The long thing in the continuous, the short one in the past simple',
  '_while_ with the long thing · _when_ with the short one · _as_ used once',
  'The two simultaneous things inside one sentence',
  'The arithmetic, and a rule written as a question',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their rule only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more) about a time you chose the wrong one of two things. What you have always said, what happened, the two things in one sentence, the arithmetic, and the rule as a question.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody who works with them**. ★ _The rule I would put on my own wall._  ✓ _One place where the two things are in two sentences and should be in one._  ? _Have you done it again since you wrote this?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Collect the rules.** Read six of them aloud as questions. How many are a version of _which of these can I still change?_ In most rooms it is three or four, which is worth noticing out loud.'));
out.push(hw('Write the same page about a time you chose the **right** one of the two (50+ words). It is harder to write and most people find they cannot remember one, which is itself worth writing down.'));

// ======================= 2.4 =======================
out.push(pb());
out.push(h2('2.4  We used to go every summer'));
out.push(p('**Function:** saying what used to happen   ·   **Grammar:** _used to_ · the repeated past   ·   **Pronunciation:** _used to_ said as one word'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One sentence each round the room: _I used to…_ and it must be something you have stopped doing. No repeats.'));
out.push(board('We used to go every summer.', 'used to + verb · didn\'t use to'));
out.push(p('**b**  _used to_ or past simple? **1** _We ___ go every summer._ (ten years running)  **2** _We ___ to Latakia in 2019._ (once)  **3** _I ___ smoke._ (for six years, stopped)  **4** _I ___ my exam in June._ (once)'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What did the family stop doing?   **A** going to Latakia   **B** travelling by train   **C** eating together on Fridays'));
out.push(p('**b**  Listen again. **1** How many years did they do it, and when did it stop?   **2** What does Umm Kinan say she did not notice at the time?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.7  Every summer until it wasn\'t', [
  ['Umm Kinan', 'Mine is not a journey, it is nineteen journeys. We used to go to Latakia every summer, the same two weeks, the same house, from 1992 to 2011.'],
  ['Samira', 'The same house every year?'],
  ['Umm Kinan', 'The same house, the same room, the same bad mattress. We used to leave at four in the morning so that the children slept through the mountain part, and my husband used to stop at exactly the same place for tea, which was not a good place. He stopped there because he stopped there the first year.'],
  ['Mazen', 'What happened in 2011?'],
  ['Umm Kinan', 'Nothing happened in 2011. That is the thing. We did not go in 2012 because of one small ordinary reason — my daughter had an examination in the August — and we did not go in 2013 either, and by 2014 nobody said anything about it at all.'],
  ['Samira', 'Nobody decided.'],
  ['Umm Kinan', 'Nobody decided. Nineteen years of something, and there was no last time. There was a last time and none of us knew it was the last time, and we would have behaved completely differently if we had known, which is a stupid thing to say about two weeks in a house with a bad mattress.'],
  ['Mazen', 'What did you not notice?'],
  ['Umm Kinan', 'That I did not like it. I used to complain about that house for nineteen years, to my sister, every year. And I would give a great deal to be in it this August with all of them, complaining.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _used to_ for the repeated past**',
  table(['form', 'use'], [
    ['_We **used to** go every summer._', 'something repeated over a period, and now finished'],
    ['_We **didn\'t use to** go in winter._', 'the negative — **use**, with no _d_, after _didn\'t_'],
    ['_**Did** you **use to** go?_', 'the question — **use**, no _d_'],
    ['_We **went** in 2019._', 'one occasion → past simple, never _used to_'],
  ], [1.9, 2.3]),
  '⚠ ~~We used to go to Latakia in 2019.~~ A date for one occasion kills _used to_. Either it is repeated (_every summer_) or it is one event (_in 2019_).',
  '⚠ ~~We didn\'t used to go.~~ → _didn\'t **use** to_.  ⚠ ~~I am used to go.~~ is a completely different structure and it is **Unit 17**; do not reach for it yet.',
  '**_used to_ also covers states**, which the past simple cannot show as finished: _I **used to** like that house._ · _There **used to be** a bakery on this corner._',
  '**The shape of a "we used to" story:** the repeated thing · the detail that was the same every time · the year it stopped · **and nobody decided**. The last part is what makes it a story rather than a list.',
  '**Useful phrases:** the same house, the same room, the same bad mattress · he stopped there because he stopped there the first year · there was no last time · nobody decided.',
  '**Practise:** _used to_ or past simple?  1 We ___ go every summer.  2 We ___ in 2019.  3 There ___ be a bakery here.  4 I ___ my exam in June.  5 She ___ ring every Friday.',
  '**Pronunciation.** 🔊 **Track 2.8** _used to_ is said as one word, /ˈjuːstə/, and the _d_ disappears completely. _We **used to** go_ · _I **used to** like it_. Listen to eight and repeat; then listen for the same sound in the negative, _didn\'t **use to**_, which sounds identical.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the thing from the card. B says what they used to do, **one** detail that was the same every time, and when it stopped — and whether anybody decided. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'We used to __________, every __________, from __________ to __________.'],
  ['A', 'The same every time?'],
  ['B', 'The same __________. __________ because __________ the first year.'],
  ['A', 'When did it stop?'],
  ['B', '__________. Nobody decided. There was a last time and __________.'],
]));
out.push(table(['Card A – the things', 'Card B – the things'], [
  ['a summer you always went to', 'a shop you always used'],
  ['a meal the family always had together', 'a friend you always saw on the same day'],
  ['something you always did on a Friday', 'a programme you never missed'],
  ['a journey you made every week', 'a thing you always did at Eid'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **detail that was the same every time**. It is the part of a _used to_ story that makes it somebody\'s and not everybody\'s.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner about something you used to do for years and have stopped. Say how long, the detail that never changed, and when it stopped — and whether there was a last time you knew about.'));
out.push(p('**b**  Swap. Then each of you say one thing you complained about at the time and would like back.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Umm Kinan\'s story is not one journey, it is nineteen. They used to go to Latakia every summer, the same two weeks, the same house, from 1992 to 2011 — the same room and the same bad mattress. They used to leave at four in the morning so that the children slept through the mountain part, and her husband used to stop at exactly the same place for tea, which was not a good place; he stopped there because he stopped there the first year. Nothing happened in 2011. They did not go in 2012 because her daughter had an examination in the August, they did not go in 2013 either, and by 2014 nobody mentioned it at all. Nineteen years of something and there was no last time — there was a last time and none of them knew it was the last one. And the thing she did not notice at the time is that she did not like it: she complained about that house to her sister every year for nineteen years, and she says she would give a great deal to be in it this August with all of them, complaining._'));
out.push(p('**Listener task:** write the thing somebody complained about for years and would now like back.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Umm Kinan writes. Answer the questions.'));
out.push(model([
  '**NINETEEN AUGUSTS** · Siham Dibo',
  'We used to go to the same house in Latakia for two weeks every August, from 1992 until 2011. Nineteen years. I have counted them twice because the number looks wrong written down.',
  '**What was the same every year.** We used to leave at four in the morning, so that the children slept through the mountain road. My husband used to stop for tea at a place on the Masyaf road that was not a good place; he stopped there in 1992 and so he stopped there for nineteen years. The mattress in the back bedroom used to be too soft and I used to say so on the first night, every year, out loud, and my sister used to say the same thing back to me.',
  '**What I used to think about it.** That it was two weeks of work in a different kitchen. That the house was shabby. That we went because we had always gone, which is a reason I used to despise.',
  '**How it stopped.** It did not stop. In 2012 my daughter had an examination in August, so we did not go that year. In 2013 we did not go either and I cannot now tell you why. By 2014 nobody in the family mentioned it, and I have never once had a conversation with any of them about not going. Nineteen years, and there is no last time in my memory — there is a last time, in August 2011, and I was in it and did not know.',
  '**What I would say to myself in that kitchen.** Nothing about the mattress.',
]));
out.push(item('1', 'Why has she counted the years twice?'));
out.push(item('2', 'What reason for going did she use to despise?'));
out.push(item('3', 'What does she say she would tell herself, and what is she not going to mention?'));
out.push(writers([
  'A "we used to" page: **the repeated thing, with the years** → **what was the same every time** → **what you used to think of it** → **how it stopped, which is usually that it did not** → **one short line to the person you were**.',
  'Three or four _used to_ in the middle section, and then **stop using it**. Once the reader has the rhythm of the repetition, the past simple of the ending lands harder.',
  'Be honest about the complaining: _I used to say so on the first night, every year, out loud._ A page where the past was lovely is a postcard.',
  '⚠ The last line is short, and it is addressed to **you at the time**, not to the reader. _Nothing about the mattress._ Four words after four hundred.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own "we used to" page (50 words or more).'));
out.push(p('**______________** · ______________   We used to ______________ every ______________, from ______________ until ______________. ______________ years.   **What was the same every year.** We used to ______________, so that ______________. ______________ used to ______________, which ______________. ______________ used to ______________ and I used to ______________, every year.   **What I used to think about it.** That ______________. That ______________.   **How it stopped.** It did not stop. In ______________, ______________, so ______________. By ______________ nobody ______________.   **What I would say to myself.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_used to_ only for repeated things · past simple for the single events and the dates',
  '_didn\'t **use** to_ and _did you **use** to_ — no _d_',
  'A detail that was the same every time, and one complaint you made at the time',
  'A last line of four or five words, addressed to yourself'
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their last line only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more) about something you did for years and have stopped — a journey, a meal, a visit, a Friday, a job. The years, the thing that never changed, what you thought of it then, how it stopped, and the short line to yourself.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody from that family or that street**. ★ _The detail that proves you were there._  ✓ _One place where the past was made nicer than it was._  ? _Was there a last time, and were you in it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of these things stopped because somebody decided?** Count. In most rooms it is one or two out of twelve, and the rest simply stopped, which is the most useful thing this cycle has to say.'));
out.push(hw('Ask somebody older than you what **they** used to do every year and when it stopped (50+ words). Write their detail that was the same every time — theirs, not yours.'));

// ======================= 2.5 =======================
out.push(pb());
out.push(h2('2.5  You\'re joking — what did you do?'));
out.push(p('**Function:** reacting while somebody is telling a story   ·   **Grammar:** the listener\'s moves   ·   **Pronunciation:** reactions live in the voice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher tells a story in six sentences and stops after each one. The class gives a reaction to every sentence, out loud, all together. Then the teacher tells it again with the class silent. Which telling was harder to do?'));
out.push(board('You\'re joking. What did you do?', 'react · push · hold'));
out.push(p('**b**  Which is which? **1** _You\'re joking._  **2** _What did you do?_  **3** _Wait — she was already on the bus?_  **4** _Go on._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is telling the story?   **A** Rasha   **B** Mazen   **C** Yara'));
out.push(p('**b**  Listen again. **1** What does the listener do that makes the teller go back?   **2** What does Yara say at the end, and why is it surprising?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.9  Go on', [
  ['Rasha', 'Three facts. A Thursday in January. The lift at the hospital. Two hours.'],
  ['Lubna', 'Two hours?'],
  ['Rasha', 'I was taking a child down to the second floor at about eleven at night and the lift stopped between the third and the second.'],
  ['Lubna', 'With the child in it.'],
  ['Rasha', 'With the child in it, and with his mother, and with me, and the child was four and was in his ninth day in the hospital.'],
  ['Jad', 'What did you do?'],
  ['Rasha', 'Nothing useful for the first minute. I pressed the button like everybody presses the button.'],
  ['Lubna', 'Wait — was there a telephone in it?'],
  ['Rasha', 'There is a telephone in it. It has not worked since before I started. Everybody knows that and nobody has ever written it down, which is a sentence I would like to come back to.'],
  ['Jad', 'Go on.'],
  ['Rasha', 'So the mother started to panic, quietly, the way people do when there is a child watching. And I did the only thing I could think of, which was to ask the child to teach me a song.'],
  ['Lubna', 'You\'re joking.'],
  ['Rasha', 'He taught me a song for an hour and fifty minutes. He was four. It had about nine words in it and we sang it, I would think, three hundred times.'],
  ['Yara', 'What was the song?'],
  ['Rasha', '…Nobody has ever asked me that. I can still sing it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The listener\'s three jobs**',
  table(['move', 'what it sounds like', 'what it does'], [
    ['**react**', '_You\'re joking._ · _No._ · _Oh._', 'tells the teller it landed'],
    ['**push**', '_What did you do?_ · _Go on._ · _And?_', 'asks for the next part'],
    ['**hold**', '_Wait — was there a telephone in it?_', 'stops the story to fix a fact'],
  ], [1, 2.2, 2]),
  '**A hold is the strongest move a listener has and the one students never make.** _Wait —_ stops a story to get something straight, and a teller is never annoyed by it, because it proves somebody is following closely enough to have noticed.',
  '**React in the voice, not in the words.** _Oh._ said low and slow is a complete sentence. _That is very interesting_ said flat is not a reaction, it is a receipt.',
  '⚠ ~~Really? Really? Really?~~ — one reaction per event. Three in a row stops being listening and starts being noise.',
  '⚠ Do not take the story away: _That happened to me once_ ends somebody else\'s story, however true it is. Keep it for the end and hand it over properly.',
  '**Ask the question nobody asks.** Yara asks what the song was and nobody ever has. The last question in a story is usually the one worth asking, because everybody else stopped at the exciting part.',
  '**Useful phrases:** the way people do when there is a child watching · nothing useful for the first minute · which is a sentence I would like to come back to · nobody has ever asked me that.',
  '**Practise:** React, push and hold for each.  1 "The lift stopped." 2 "The telephone in it has never worked." 3 "He taught me a song." 4 "We sang it three hundred times."',
  '**Pronunciation.** 🔊 **Track 2.10** The same four words, four ways: _You\'re joking_ as surprise, as delight, as doubt and as sympathy. The words do nothing; the voice does all of it. Listen and copy all four, then say the one you would use at the lift.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in threes. A tells the story on the card, one sentence at a time, and stops. B reacts. C pushes or holds. A may not continue until both have spoken. Change roles with the other card.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '__________.'],
  ['C', '__________?'],
  ['A', '__________.'],
  ['B', '__________.'],
  ['C', 'Wait — __________?'],
  ['A', '__________.'],
]));
out.push(table(['Card A – the story, in facts', 'Card B – the story, in facts'], [
  ['a lift · two hours · a four-year-old · a song', 'a wedding · the power · four hundred people · a generator'],
  ['the telephone in it has never worked', 'the man who had the key was at the wedding'],
  ['nobody has written it down', 'nobody thought about the key for nine years'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two threes perform. **Listener task:** write every **hold** you hear. There will be very few, and the ones there are will be the best moments in both performances.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  In threes. Tell your own story from the homework a sentence at a time. The other two must react, push and hold — and one of them must ask, at the end, the question nobody has ever asked you about it.'));
out.push(p('**b**  Then each of you say which move you found hardest to make, and why.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rasha\'s three facts were a Thursday in January, the lift at the hospital and two hours. She was taking a child down to the second floor at about eleven at night when the lift stopped between the third and the second, with the child, his mother and her inside; the child was four and was in his ninth day in the hospital. She says she did nothing useful for the first minute and pressed the button the way everybody presses the button. Lubna held the story to ask whether there was a telephone in it, and there is one, and it has not worked since before Rasha started — everybody knows and nobody has ever written it down, which Rasha said was a sentence she wanted to come back to. The mother started to panic quietly, the way people do when there is a child watching, so Rasha asked the child to teach her a song. He taught her one for an hour and fifty minutes. It had about nine words in it and she thinks they sang it three hundred times. Then Yara asked what the song was, and Rasha said nobody has ever asked her that, and that she can still sing it._'));
out.push(p('**Listener task:** write the question nobody had ever asked, from somebody else\'s story.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the same story written two ways. Answer the questions.'));
out.push(model([
  '**THE SAME TWO HOURS** · written for two different readers',
  '**1 · For the hospital\'s incident book.** On Thursday 11 January at approximately 23:05 the service lift stopped between the third and second floors with three people inside: one patient aged four, one parent and one member of nursing staff. The emergency telephone in the lift was inoperative. Contact was made by mobile telephone at 23:14. The lift was opened at 01:02. No injuries. **Recommendation: the emergency telephone has been inoperative since at least 2019 and does not appear in any maintenance record. It should be entered in the record and repaired.**',
  '**2 · For my sister, that night, at two in the morning.** You will not believe where I have been for two hours. The lift, between the third and the second, with Hadi — the four-year-old from room 9 — and his mother. The telephone in there has never worked in nine years and you can hear yourself breathing. His mother went white and did not make a sound, because he was watching her. So I asked him to teach me a song, and he taught me one song for an hour and fifty minutes, and he was so serious about it, correcting me every time, that at one point his mother laughed out loud and then cried and he did not notice either. It has nine words. I will be singing it for the rest of my life.',
  '**What is in both.** The time, the floors, the three people, the telephone, the two hours.',
]));
out.push(item('1', 'What is the recommendation in the first version?'));
out.push(item('2', 'What does the second version say the mother did, and why did she do it that way?'));
out.push(item('3', 'What five things are in both versions?'));
out.push(writers([
  'The same story for two readers: **the facts are identical** → **the first version keeps only what can be acted on** → **the second keeps only what can be felt** → **and the five facts both share are the ones that are actually true**.',
  'The official version is not the dishonest one. It is the one that produces a **repaired telephone**, and it does that by removing every feeling and adding one recommendation.',
  'The personal version earns its emotion with **detail, not adjectives**: she did not make a sound because he was watching her; he corrected me every time.',
  '⚠ Write both and then list what survived in both. That list is the story; everything else is the reader.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your story twice — once for a record, once for one person (50 words or more in total).'));
out.push(p('**1 · For ______________.** On ______________ at approximately ______________, ______________. ______________ was ______________. **Recommendation: ______________.**   **2 · For ______________.** You will not believe ______________. ______________, with ______________. ______________. So I ______________, and ______________. ______________.   **What is in both.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Version 1 has no feeling in it and one recommendation',
  'Version 2 has no adjectives doing the work — detail instead',
  'The same facts, times and numbers in both',
  'A list at the end of what survived in both',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what is in both" line only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write both versions in full (100 words or more in total) of something that happened to you at work or at home. One for a record or a manager, one for the person you would actually tell. Then list what is in both.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read both of your partner\'s versions. ★ _The line in version 2 that I will remember._  ✓ _One feeling that has got into version 1._  ? _Which version is truer?_ — and make them answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Which version would get something repaired?** Then: which one would you want somebody to write about you? They are almost never the same version, and that is the point of the cycle.'));
out.push(hw('Write the recommendation sentence from your version 1 and **send it** to whoever keeps that record (50+ words on what you sent and what happened).'));

// ======================= 2.6 =======================
out.push(pb());
out.push(h2('2.6  And that was the point'));
out.push(p('**Function:** ending a story so that it has a point   ·   **Grammar:** closing moves   ·   **Pronunciation:** the fall that says the story is finished'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher tells a story and stops one sentence before the end. The class writes the last sentence. Six are read out. Which one is best, and is it the funniest or the quietest?'));
out.push(board('I have thought about it every February since.', 'in the end · and that was that · since'));
out.push(p('**b**  Which ending is doing what? **1** _In the end they sent a new one._  **2** _I have never done it since._  **3** _And that was that._  **4** _I still do not know what he meant._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is wrong with Jad\'s ending?   **A** it is too long   **B** it explains the point   **C** it is not true'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say the last line should do?   **2** What does Jad change his ending to?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.11  Do not explain it', [
  ['Jad', '…and in the end they gave us the room back on the Thursday. And that shows that if you are polite and you keep asking, people will listen to you in the end, which is something I have learned this year.'],
  ['Ms Huda', 'Stop at "on the Thursday".'],
  ['Jad', 'But then nobody knows what it means.'],
  ['Ms Huda', 'Everybody knows what it means. You have just spent ninety seconds making them know. The last sentence you said takes it away from them and hands it back as a lesson, and people do not like being handed a lesson by somebody of nineteen or of fifty.'],
  ['Bassel', 'He is not wrong, though.'],
  ['Ms Huda', 'He is not wrong and that is not the question. Jad — what is the last **fact**? Not the meaning. The last fact.'],
  ['Jad', '…The caretaker gave me the key on the Thursday and he did not say anything.'],
  ['Ms Huda', 'That is your ending.'],
  ['Jad', 'That is not an ending, that is just a thing that happened.'],
  ['Ms Huda', 'He did not say anything. After five weeks of saying a great deal. Say it out loud and listen to the room.'],
  ['Jad', '(pause) "He gave me the key on the Thursday and he did not say anything."'],
  ['Samira', 'Oh, that is better.'],
  ['Jad', 'Why is that better? I preferred mine.'],
  ['Ms Huda', 'Everybody prefers their own. Yours tells them what to think and that one lets them do it, and the second one is the one they will repeat to somebody else tomorrow.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Ending a story**',
  table(['ending', 'what it does'], [
    ['_In the end they gave us the room back._', 'the outcome — a fact, not a meaning'],
    ['_And that was that._', 'closes it flatly, when the outcome is small'],
    ['_I have never done it since._ · _I have thought about it every February since._', 'brings it to now, which is the strongest ending there is'],
    ['_I still do not know what he meant._', 'leaves it open on purpose'],
  ], [2.3, 2.3]),
  '**The last line is a fact, not a lesson.** If the story worked, the meaning is already in the room; a closing sentence that explains it takes it back off the listener.',
  '⚠ ~~And this shows that…~~ · ~~So the moral is…~~ · ~~And that is why we should always…~~ — all three end a story badly in English, however true they are.',
  '**The strongest ending brings it to now**, with the present perfect: _I have never done it since_ · _I have thought about it every February since_ · _I can still sing it_. The story stops and the person carries on.',
  '**The quiet fact beats the loud one.** _He did not say anything_ is stronger than _he apologised_, because the listener does the work.',
  '**Useful phrases:** Stop at "on the Thursday". · everybody prefers their own · yours tells them what to think and that one lets them do it · the one they will repeat tomorrow.',
  '**Practise:** End each story with a fact and then with _since_.  1 the lift and the song  2 the lorry and the eleven minutes  3 the nineteen summers  4 the men in the rain',
  '**Pronunciation.** 🔊 **Track 2.12** An ending **falls** and it is slower than the sentence in front of it. _He gave me the key on the Thursday_ ‖ _and he did not say anything._ ↘ Said at the same speed as the rest, it is not an ending and the room will wait for more. Listen to six and copy the slowing.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the ending on the card, which explains itself. B cuts it back to the last **fact**. A then says which version they would repeat to somebody else. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________. And that shows that __________.'],
  ['B', 'Cut it. What is the last fact?'],
  ['A', '__________.'],
  ['B', 'That is the ending.'],
  ['A', 'Which one would you repeat?'],
  ['B', '__________, because __________.'],
]));
out.push(table(['Card A – the endings to cut', 'Card B – the endings to cut'], [
  ['They gave the room back on the Thursday. And that shows that politeness works.', 'The machine was mended on the Friday. And that shows you should always keep the receipt.'],
  ['She paid my fare. And this teaches us that there are good people everywhere.', 'He rang back after nine days. And the moral is that you should not give up.'],
  ['We never went again. And that is why family holidays are important.', 'I passed in the August. And so the lesson is that hard work is rewarded.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the cut version of each ending. Say which of the four you would repeat tomorrow — and the room will agree on one, which is worth noticing.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your whole story from 2.1 to 2.2 to a new partner and end it on the last **fact**. Do not explain it. Then say nothing and let them react.'));
out.push(p('**b**  Swap. Then each of you give the other an alternative last line, brought to now with _since_ or _still_.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Jad finished his story about the room by saying that in the end they gave it back on the Thursday, and that this shows that if you are polite and keep asking, people will listen to you in the end. Ms Huda told him to stop at "on the Thursday". He said then nobody knows what it means, and she said everybody knows what it means — he just spent ninety seconds making them know — and that the last sentence takes it away from them and hands it back as a lesson. She asked him for the last fact instead of the meaning, and he said the caretaker gave him the key on the Thursday and did not say anything. She said that is the ending; he said that is just a thing that happened; and she pointed out that the man said nothing, after five weeks of saying a great deal. When Jad said it out loud Samira said "oh, that is better", and Jad said he preferred his own. Ms Huda said everybody prefers their own, and that his version tells people what to think while the other one lets them do it — and that the second is the one somebody will repeat tomorrow._'));
out.push(p('**Listener task:** write the last line you heard today that you would repeat to somebody else.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read four endings to four stories you now know. Answer the questions.'));
out.push(model([
  '**FOUR LAST LINES** · from the Room 14 stories, with what each one refuses to say',
  '**Tareq, the bus.** "I left them at the Harasta turning. I have thought about that every February since."',
  '_It refuses to say that he feels guilty, that eleven men stood in the rain for a stranger, or that he would do it again. All three are in the line and none of them is written._',
  '**Bassel, the eleven minutes.** "I would do it again tomorrow if this were not on the wall."',
  '_It refuses to promise. The whole page is a lesson and the last line admits the lesson has not taken, which is the only thing that makes the page believable._',
  '**Umm Kinan, the nineteen summers.** "Nothing about the mattress."',
  '_Four words. It refuses to say that she misses her husband, that the children are grown, or that she would go this August. The reader supplies all three, and because the reader supplied them the reader keeps them._',
  '**Rasha, the lift.** "I can still sing it."',
  '_Present tense in a story told entirely in the past. It refuses to say how long two hours is with a frightened child, and it brings the whole thing into the room where she is standing now._',
  '**What all four do.** They stop at a fact. Not one of them contains the word _because_, and not one of them says how anybody felt.',
]));
out.push(item('1', 'What three things does Tareq\'s line refuse to say?'));
out.push(item('2', 'Why does Bassel\'s ending make the page believable?'));
out.push(item('3', 'What do all four endings have in common?'));
out.push(writers([
  'A page about endings: **the line, quoted exactly** → **what it refuses to say** → **why the refusal works** → **the one thing all of them share**.',
  'Write the refusal, not the praise. _It refuses to say that he feels guilty_ is criticism; _it is a powerful ending_ is nothing.',
  'Count what is absent: no _because_, no feeling words, no explanation. Absence is harder to notice than presence and it is where the technique is.',
  '⚠ Quote **exactly**, including the length. _Four words._ The word count is part of the analysis.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take four endings — from this class, from a film, from something you have read, from your own family — and do the same (50 words or more).'));
out.push(p('**______________.** "______________."   _It refuses to say ______________, ______________, or ______________. ______________ and none of them is written._   **______________.** "______________."   _It refuses to ______________. ______________._   **What they all do.** ______________. Not one of them ______________, and not one of them ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every line quoted exactly, with its length if it is short',
  'What it **refuses** to say, not what it achieves',
  'No ending in your list contains _because_ or a feeling word',
  'A closing line naming what they all share',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one quoted ending and its refusal.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the complete version of your own story (100 words or more) — the scene from 2.1, the chain from 2.2, and an ending that stops at a fact. Then write one line underneath saying what your ending refuses to say.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s complete story. ★ _The last line, and whether I would repeat it._  ✓ _One place where you explain something the story has already shown._  ? _What does your ending refuse to say — and did you mean it to?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read only the last lines, all twelve, one after another, with no stories.** Then: which three would you want to hear the story behind? Those three are the best endings in the room and the writers should be told so.'));
out.push(hw('Rewrite the ending of a story you have told many times (50+ words) — the version you usually end with, and the version that stops at a fact.'));

// ======================= 2.7 =======================
out.push(pb());
out.push(h2('2.7  Review & Mediate: Tell it the way she told it'));
out.push(p('**Function:** retelling somebody else\'s story accurately   ·   **Recycling:** Units 1–2   ·   **Exam practice:** B1 Preliminary Reading Part 2, Writing Part 2, Listening Part 2'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 2 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** While the telephone rang, I was standing in the yard.  **2** We used to go to Latakia in 2019.  **3** We didn\'t used to go in winter.  **4** At the end they gave the room back.  **5** It rained and nobody talked and then she turned round.  **6** I was knowing the road very well.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the two retellings of Rasha\'s story, written by two people who heard it.'));
out.push(box(null, [
  '**ONE STORY, RETOLD TWICE** — both by people who were in Room 14 that evening',
  '**Retelling A.** A nurse got stuck in a lift for two hours with a child and his mother. The telephone in the lift was broken. To keep the child calm she sang to him until they were rescued, which I thought was a lovely thing to do.',
  '**Retelling B.** Rasha was taking a four-year-old down to the second floor at about eleven at night on a Thursday in January, and the lift stopped between the third and the second. There were three of them in it: the child, his mother and her. The emergency telephone in that lift has not worked since before she started nine years ago, and she said that everybody knows and nobody has ever written it down. She said she did nothing useful for the first minute. The mother started to panic quietly, because the child was watching her — so Rasha asked **him** to teach **her** a song. He taught her one song for an hour and fifty minutes. It has nine words in it. When somebody asked her what the song was, she said nobody had ever asked her that, and that she can still sing it.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Rasha hears both retellings. Which one does she say is wrong, and what are the two things she says are not true in it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.13  That is not what happened', [
  ['Ms Huda', 'Rasha. Both of those are about you. Which one is wrong?'],
  ['Rasha', 'The first one, and it is not wrong because of the facts. There are only two facts in it that are untrue and they are small.'],
  ['Lubna', 'Which two?'],
  ['Rasha', '"She sang to him." I did not sing to him. He taught me a song — he was teaching, I was learning, and he corrected me about three hundred times. And "until they were rescued", which makes it sound like waiting. We were not waiting. We were doing something for an hour and fifty minutes.'],
  ['Jad', 'That is quite a small difference.'],
  ['Rasha', 'It is the entire thing. In the first version I am a kind nurse who calmed a child down. In what actually happened, a four-year-old in his ninth day in a hospital was given something to be in charge of, by an adult who had run out of ideas, and he did it extremely well.'],
  ['Ms Huda', 'And the last line of the first one?'],
  ['Rasha', '"Which I thought was a lovely thing to do." That is the person retelling it, standing in front of the story. I would take it out, not because it is unkind but because it is in the way.'],
  ['Ms Huda', 'So what is the rule for retelling?'],
  ['Rasha', 'Keep the direction of things. Who was doing what to whom. Everything else you can shorten.'],
]));
out.push(sp());
out.push(box('Language box – retelling somebody else\'s story', [
  'Keep the **direction**: _he taught her_, never _she sang to him_. Reversing who was doing what to whom changes the story completely even when every noun is correct.',
  'Keep the **numbers**: four years old, nine days, an hour and fifty minutes, nine words. Numbers are the first thing a retelling loses and the easiest thing to keep.',
  'Keep the **sentence the teller stopped on**: _I can still sing it_. If they ended there, you end there.',
  'Say **who said it**: _she said that everybody knows and nobody has ever written it down_. At B1, _she said_ + what she said, with no tense change, is still enough — the full system is Unit 10.',
  'Take **yourself** out. _Which I thought was a lovely thing to do_ puts the reteller in front of the story. Admiration is not information.',
  'Shorten anything, but change nothing: a retelling may be a third of the length and must not contain one thing that did not happen.',
  '**Useful phrases:** That is not what happened. · he was teaching, I was learning · we were not waiting, we were doing something · that is the person retelling it, standing in front of the story · keep the direction of things.',
  '**Pronunciation.** 🔊 **Track 2.14** In a retelling the **named person** takes the stress, because the listener does not know who they are yet: _**RA**sha was taking a four-year-old down_ ‖ _when the lift **STOPP**ed._ Listen to the same four sentences with and without that stress, and read the first lines of Retelling B aloud.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in threes. A tells their own story from 2.6 in full. B retells it in a third of the length. C holds a copy of nothing and judges only one thing: did anything change direction? Change roles twice so that everybody does all three jobs.'));
out.push(dlg(null, [
  ['A', '_(the full story)_'],
  ['B', '__________ was __________ when __________. There were __________. ______ said that __________.'],
  ['C', 'Direction: __________. Numbers kept: __________. Last line kept: __________.'],
  ['A', 'The thing you changed is __________.'],
]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two threes perform. **Listener task:** write the one thing that changed in each retelling. There is always one, and it is nearly always the direction of a verb.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Find somebody whose story you have **not** heard. Listen to it once, with the four moves from 1.6. Then retell it to a third person in front of the teller, who may not interrupt until you have finished. Then they correct you — and they must say which corrections are facts and which are direction.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what you retold and what you got wrong:  _I retold Fares\'s story about the night he drove to Hama with the wrong box. He left Damascus at five, got to Hama at seven, and did the whole round of four pharmacies before the last pharmacist opened the box and found that it was somebody else\'s order. I had him noticing it himself in the car, which is not what happened and makes him look better. He said the whole point is that he did not notice, that three pharmacists before that one signed for a box they did not open either, and that he has done that round for six years. The numbers I kept were five o\'clock, four pharmacies and six years. The number I lost was that it was the eleventh time that month he drove to Hama. And his last line, which I cut, is "I rang every one of them back myself, and the first one laughed." So I decided that when I retell something I am going to write the last line down before I start talking, because it is the first thing I lose._'));
out.push(p('**Listener task:** did they keep the direction? What was the last line, and had they kept it?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 2)', 7));
out.push(p('The people below are all looking for something to read. There are eight pieces of writing. Decide which piece (**A–H**) would be the most suitable for each person (**1–5**).'));
out.push(model([
  '**1  Tareq** wants something short that he can read between runs. He likes true accounts of ordinary jobs and he does not like anything that tells him what to think at the end.',
  '**2  Umm Kinan** wants something she can read with her granddaughters on a screen on a Friday. It must be simple enough for a seven-year-old and not childish enough to bore a woman of forty-eight.',
  '**3  Jad** reads everything in English already and wants something difficult and technical that is not about computers, so that he is a beginner at something.',
  '**4  Lubna** is looking for something about buildings that is written by somebody who made them rather than by somebody who studies them.',
  '**5  Rasha** works nights and wants something she can pick up and put down at any point, in pieces of two or three pages, with nothing to follow from one piece to the next.',
]));
out.push(model([
  '**A** _Twelve Months on the Line_ — a bus driver in Beirut writes about one year of his route. Short chapters, no conclusions, a great deal about passengers.',
  '**B** _The Shape of a Dome_ — a working mason explains, in his own words and his own measurements, how six domes were built and what went wrong in two of them.',
  '**C** _Stories for the Very Young_ — forty short tales with pictures, written for children of three to five.',
  '**D** _An Introduction to Structural Engineering_ — a university textbook, third edition, with exercises.',
  '**E** _A Hundred Short Essays_ — two or three pages each, on any subject at all, in any order.',
  '**F** _The Night Sky, Month by Month_ — a serious amateur\'s guide to what can be seen with the naked eye, with charts and a glossary of terms.',
  '**G** _Grandmothers and Granddaughters_ — a set of simple two-page stories with large print and a question to talk about at the end of each one.',
  '**H** _Why We Work_ — essays arguing that modern working life must change, with a programme for action in the last chapter.',
]));
[
  '**1**   A   B   C   D   E   F   G   H',
  '**2**   A   B   C   D   E   F   G   H',
  '**3**   A   B   C   D   E   F   G   H',
  '**4**   A   B   C   D   E   F   G   H',
  '**5**   A   B   C   D   E   F   G   H',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Retell one of this unit\'s stories in a third of its length (50 words or more).'));
out.push(p('______________ was ______________ when ______________. There were ______________ of them: ______________. ______________ had ______________ for ______________. She said that ______________, and that ______________. So ______________. ______________ for ______________. ______________ said ______________, and ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Nothing in it that did not happen',
  'The direction of every verb kept — who did what to whom',
  'At least three numbers kept',
  'The teller\'s last line, and no admiration from you',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 2)', 10));
out.push(box(null, [
  '**Write an article for your college magazine.**',
  '_"We would like to hear about a journey that went wrong. What happened? What do you remember most about it? Write us an article and we will put the best ones in the next issue."_',
  'Write your **article** in **100 words or more**.',
], C.grey, C.navy));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 2 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I ___ in the yard when the telephone rang.   a) stood   b) was standing   c) have stood',
  '2  ___ I was standing there, the machine stopped.   a) When   b) While   c) As soon as',
  '3  We ___ go to Latakia every summer.   a) used to   b) use to   c) were used to',
  '4  We ___ go in winter.   a) didn\'t used to   b) didn\'t use to   c) not used to',
  '5  ___ they gave us the room back.   a) At the end   b) In the end   c) At last of',
  '6  It ___ and nobody ___ .   a) was raining / was talking   b) rained / talked   c) was raining / talked',
  '7  She ___ round and ___ four words.   a) was turning / was saying   b) turned / said   c) turned / was saying',
  '8  I ___ the road very well.   a) was knowing   b) knew   c) have been knowing',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 2 style – matching).** 🔊 **Track 2.15** You will hear five people talking about a journey. For each speaker, choose from the list **A–H** what they say they remember most. There are **three** extra letters.'));
out.push(table(['Speakers', 'What they remember most'], [
  ['1  Speaker 1 ___', 'A  the silence of the other passengers'],
  ['2  Speaker 2 ___', 'B  how long the wait was'],
  ['3  Speaker 3 ___', 'C  how seriously a child took something'],
  ['4  Speaker 4 ___', 'D  the weather'],
  ['5  Speaker 5 ___', 'E  a stranger who paid for them'],
  ['', 'F  a telephone that did not work'],
  ['', 'G  a place they did not like at the time'],
  ['', 'H  a decision they still think about'],
], [1, 2]));
out.push(dlg('Track 2.15  Audio script (read after the check)', [
  ['1  Man', 'Nineteen people on a bus built for fourteen and not one of them said a word. That is what I remember. Half past six in the morning and you could hear the rain and nothing else.'],
  ['2  Woman', 'I got on the wrong bus and I did not notice until Jaramana, and I had no money on me at all. A woman I have never seen before or since paid my fare back and would not take my name.'],
  ['3  Woman', 'Two hours between two floors. What I remember is him correcting me. He was four and he was absolutely serious about it, and every time I got the second line wrong he started the whole thing again from the beginning.'],
  ['4  Man', 'Eleven minutes on the telephone while the thing I could actually do something about was going wrong forty metres away. I have thought about those eleven minutes more than I have thought about the two days.'],
  ['5  Woman', 'We left at four in the morning every year so that the children would sleep, and every year my husband stopped at the same bad place for tea. I would give a great deal to be sitting at that bad place this August.'],
]));
out.push(p('**C  Writing.** Tell the story of something that went wrong (100+ words): three or four lines of scene in the past continuous, the chain of events in the past simple, one sentence with _while_ or _when_ in it, and an ending that stops at a fact.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 2)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ set a scene with three lines of past continuous before anything happens',
  '☐ tell a chain of events in the past simple, in short sentences',
  '☐ use _then_, _after that_, _so_ and _in the end_ — and not _at the end_',
  '☐ put the long thing and the short thing in one sentence with _when_, _while_ or _as_',
  '☐ use _used to_ for the repeated past, and keep it away from single events',
  '☐ react, push and hold while somebody else is telling a story',
  '☐ end a story on a fact instead of a lesson',
  '☐ retell somebody else\'s story without changing the direction of it',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 3 – LOOKING BACK FURTHER', [
  'Unit 2 told the story in the order it happened. Unit 3 is about the part that happened **before** the story started and explains it: _the midwife had been standing for twenty minutes before anybody asked._',
  'Before the next lesson: find the moment in your own story where something was **already** true before you arrived, and write it in one sentence. Unit 3 gives you the tense for it.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Unit 2 · Student\'s Book');
