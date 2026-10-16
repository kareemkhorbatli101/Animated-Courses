// Proactive English B1 · Syria Edition · Book 1 · Unit 3 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 3  Looking Back Further'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**3.1**  say what had happened before the story started',
  '**3.2**  explain why something went wrong',
  '**3.3**  say what had and had not happened by a point',
  '**3.4**  correct somebody\'s version of events',
  '**3.5**  give a chronology from notes',
  '**3.6**  say what you had never done before that day',
  '**3.7**  Review & Mediate: explain a timeline to somebody',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**A tense you have never been given.** If you did A2 in this centre you have read twenty-four units and two answer keys without meeting the past perfect once. That was deliberate. This unit is why.',
  '**Yara says the rest of it.** In the first week she said four sentences and then said there was more and that she would tell us next week. It has been three weeks. In 3.6 she tells us.',
  '**The timeline on the wall.** Room 14 gets a long sheet of paper down one side, and everything in this unit goes on it in the order it actually happened — which is never the order anybody tells it in.',
], C.lyellow, C.orange));

// ======================= 3.1 =======================
out.push(pb());
out.push(h2('3.1  What had already happened'));
out.push(p('**Function:** saying what happened before the story started   ·   **Grammar:** the past perfect   ·   **Pronunciation:** _\'d_ — the contraction you will not hear'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out the sentence from your homework — the thing that was **already true** before you arrived in your own story. Your teacher writes six on the board exactly as you wrote them. Most of them will be in the past simple.'));
out.push(board('The midwife had been standing for twenty minutes.', 'had + past participle'));
out.push(p('**b**  Which happened **first**? **1** _When I arrived, she left._  **2** _When I arrived, she had left._  **3** _The bus went when I got to the stop._  **4** _The bus had gone when I got to the stop._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Ms Huda not taught in two years?   **A** the past continuous   **B** the past perfect   **C** reported speech'));
out.push(p('**b**  Listen again. **1** Why does she say she kept it back?   **2** What does Bassel notice about his own sentence?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.1  The tense you have not been given', [
  ['Ms Huda', 'Six sentences on the board, and five of them are wrong. Not wrong English — wrong tense for what you are telling me.'],
  ['Bassel', 'Mine says "the driver was in Kilis since Sunday". That is what happened.'],
  ['Ms Huda', 'When did you find out?'],
  ['Bassel', 'Tuesday morning.'],
  ['Ms Huda', 'So on Tuesday morning, the being-in-Kilis was already four days old. Your sentence puts it on the same shelf as the telephone call, and it is on the shelf behind it.'],
  ['Jad', 'So what do we say?'],
  ['Ms Huda', '"He **had been** in Kilis since Sunday." Had plus the third form. And before anybody asks: yes, you have been in this building for two years and you have never once been given it.'],
  ['Omar', 'I thought I had missed a lesson.'],
  ['Ms Huda', 'You have not missed a lesson. I kept it back. At A2 you had enough to carry, and a tense that only exists to put a second past behind the first one is no use to somebody who is still deciding between _went_ and _have gone_. You have not needed it until now. From this evening you need it in nearly everything.'],
  ['Bassel', '(looking at the board) Mine is not one sentence, is it. It is two sentences and I have written them as one.'],
  ['Ms Huda', 'Say that again for the room, because that is the whole unit.'],
  ['Bassel', 'There is what happened, and there is what was already true when it happened. I have been putting both of them in the same tense for forty-one years.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the past perfect: _had_ + past participle**',
  table(['the story', 'what was already true'], [
    ['_When I **arrived**…_', '_…she **had left**._'],
    ['_On Tuesday he **rang**…_', '_…he **had been** in Kilis since Sunday._'],
    ['_By the time I **got** to the stop…_', '_…the bus **had gone**._'],
    ['_She **stood** up and said…_', '_…she **had been** standing for twenty minutes._'],
  ], [1.8, 2.4]),
  '**It has one job.** It puts a second past **behind** the past you are already in. You are standing in the story; the past perfect is what was true before you got there.',
  '**The form never changes:** _had_ + the third form, for every person. _I had · he had · they had_. In speech it is almost always _**\'d**_: _she\'d left · he\'d been there since Sunday_.',
  '⚠ You do **not** need it for every earlier thing. If the order is obvious — because the sentence tells you, or because you are using _then_, _after that_ or a date — the past simple is correct and better. _I got up, had breakfast and left_ needs no past perfect anywhere.',
  '⚠ ~~When I arrived she had left and then she had gone to the shop.~~ One past perfect is usually enough; once you have stepped back, the rest of the earlier part can run in the past simple.',
  '⚠ ~~I had went.~~ → _I **had gone**._ The third form, not the past simple. _go – went – **gone** · see – saw – **seen** · do – did – **done** · take – took – **taken** · write – wrote – **written** · speak – spoke – **spoken**_.',
  '**Useful phrases:** that is on the shelf behind it · I thought I had missed a lesson · what happened, and what was already true when it happened · I have been putting both of them in the same tense for forty-one years.',
  '**Practise:** Put the earlier part behind.  1 I got to the stop. The bus / go.  2 She rang. I / already / leave.  3 We arrived. They / eat.  4 He said sorry. I / wait / an hour.  5 The machine stopped. Nobody / check / it / that morning.',
  '**Pronunciation.** 🔊 **Track 3.2** You will hardly ever hear _had_. You will hear _\'d_, and sometimes you will hear almost nothing at all — the only clue is the third form at the end: _she\'d **GONE**_ · _he\'d **BEEN** there_. Listen to eight pairs and write **simple** or **perfect** for each; the participle is the only evidence.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the two halves from the card. B joins them, putting the earlier one behind with the past perfect, and then says **which half is the story** and which is the thing that was already true. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________ / __________.'],
  ['B', 'When __________, __________ had __________.'],
  ['A', 'Which half is the story?'],
  ['B', '__________. The other half was already true when it happened.'],
  ['A', 'Does it need the past perfect?'],
  ['B', '__________, because __________.'],
]));
out.push(table(['Card A – the two halves', 'Card B – the two halves'], [
  ['I got to the stop / the bus go', 'he rang / I already leave the office'],
  ['we arrived / they eat', 'the machine stopped / nobody check it that morning'],
  ['she said sorry / I wait an hour', 'I opened the box / somebody already open it'],
  ['I got up, had breakfast and left', 'he came in, sat down and said nothing'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the two sentences on each card that do **not** need a past perfect, and say why. There are two, and they are the last line of each card.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the story you wrote in Unit 2 and find the thing that was **already true** before your scene began. Say it to your partner in one sentence with the past perfect in it.'));
out.push(p('**b**  Swap. Then each of you say whether your story is better with that sentence in it, and where in the story it would go.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda put six sentences on the board and said five of them were in the wrong tense — not wrong English, wrong tense for what was being told. Bassel\'s said the driver was in Kilis since Sunday, and she asked when he found out; he said Tuesday morning, so on Tuesday the being-in-Kilis was already four days old, and his sentence put it on the same shelf as the telephone call when it belongs on the shelf behind it. Then she said the thing nobody expected: we have been in this building for two years and we have never once been given this tense. Omar said he thought he had missed a lesson. She said she kept it back — at A2 we had enough to carry, and a tense that exists only to put a second past behind the first is no use to somebody still deciding between went and have gone. And Bassel looked at the board and said his sentence is not one sentence, it is two written as one: there is what happened, and there is what was already true when it happened, and he has been putting both in the same tense for forty-one years._'));
out.push(p('**Listener task:** write the sentence from your own story that was two sentences written as one.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the same paragraph written twice. Answer the questions.'));
out.push(model([
  '**THE SAME MORNING, TWO SHELVES** · Bassel Tahhan',
  '**Version 1 — everything on one shelf.** The lorry did not come. I stood in the yard until half past nine. The telephone rang. The driver was in Kilis since Sunday. Nobody told us. The machine stopped. I stayed on the telephone eleven minutes. The roller took four hundred sheets.',
  '**Version 2 — two shelves.** The lorry did not come, so I stood in the yard until half past nine. When the telephone finally rang, the driver had been sitting in Kilis since the Sunday — four days — and nobody at either end had thought to tell us. While he was explaining that, the machine stopped. I stayed on the telephone for eleven minutes, and by the time I got to the floor the roller had taken four hundred sheets.',
  '**What changed.** Not one fact. Version 1 is seven things that happened and the reader has to work out which of them were already true; version 2 says so. Two sentences carry the past perfect — the driver in Kilis, and the four hundred sheets — and both of them are things that were finished before I knew about them. That is the test I am going to use from now on: **was it already over by the time I found out?**',
]));
out.push(item('1', 'How many facts are different between the two versions?'));
out.push(item('2', 'Which two sentences carry the past perfect, and what do they have in common?'));
out.push(item('3', 'What is the test he says he will use?'));
out.push(writers([
  'A paragraph with two shelves: **the story in the past simple** → **what was already true, stepped back with the past perfect** → **and no more than two or three of those in a paragraph**.',
  'The test is the useful part, and it is worth writing in the margin of your own draft: _was it already over by the time I found out?_ If yes, step it back.',
  'Do not step everything back. A page in which every second verb is _had_ + participle is as unreadable as one with none, and the reader loses the shelf that matters.',
  '⚠ The past perfect is a **relationship**, not a time. It only means anything next to another past. A sentence with no story around it does not need it: _I had gone to Aleppo in 2019_ is simply wrong unless something else in 2019 is on the page.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take your Unit 2 story and rewrite one paragraph of it on two shelves (50 words or more).'));
out.push(p('______________, so ______________. When ______________, ______________ had ______________ since ______________ — ______________ — and nobody ______________. While ______________, ______________. ______________, and by the time ______________, ______________ had ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_had_ + the **third form**, not the past simple',
  'No more than two or three past perfects in the paragraph',
  'Every one of them was already over before you found out',
  'The story itself still running in the past simple',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their one past-perfect sentence only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Rewrite your whole Unit 2 story (100 words or more) with the second shelf in it. Put in the two or three things that were already true before your scene began — and take out any past perfect that is not earning its place.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s rewritten story next to the Unit 2 original. ★ _The sentence that is better for being stepped back._  ✓ _One past perfect that is not earning its place._  ? _Was that thing really already over when you found out?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Put the Unit 2 and Unit 3 versions side by side on the desk.** Then: has anybody\'s story got worse? One or two will have, and the reason is always the same — too many shelves.'));
out.push(hw('Find a story you have written or told before this course and put **one** past perfect sentence into it (50+ words). One, not four. Then write what it changed.'));

// ======================= 3.2 =======================
out.push(pb());
out.push(h2('3.2  Because nobody had checked it'));
out.push(p('**Function:** explaining why something went wrong   ·   **Grammar:** _because_ + the past perfect   ·   **Pronunciation:** the stress on the participle'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher names four small disasters. For each one the class gives a reason that was **already true** before it happened. _The machine stopped — because nobody had checked the oil that morning._'));
out.push(board('It stopped because nobody had checked it.', 'because + had + past participle'));
out.push(p('**b**  Reason, or just an earlier event? **1** _It stopped because nobody had checked it._  **2** _It stopped and then we checked it._  **3** _We were late because the road had been closed since six._  **4** _We were late and the road was closed._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What went wrong at the laboratory?   **A** a machine broke   **B** a sample was lost   **C** a result went to the wrong doctor'));
out.push(p('**b**  Listen again. **1** What three things were already true before the alarm went off?   **2** What does Yara say about the word _failed_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.3  It had been like that since Monday', [
  ['Rasha', 'You said you lost three days\' work. What actually happened?'],
  ['Yara', 'The second incubator door. Everybody says the incubator failed. The incubator did not fail.'],
  ['Rasha', 'What failed?'],
  ['Yara', 'Three things, and all three of them had already happened before I came in that morning. The seal on the second door had been splitting since about Monday — you could see it. Somebody had reported it in February and the report had gone to a man who left in March.'],
  ['Mazen', 'So it was in writing.'],
  ['Yara', 'It was in writing, and the writing was in the drawer of somebody who does not work there. And the third thing is mine: I had put the Thursday batch in the second door, and I had put it there because the first door was full of somebody else\'s work that had been finished on Tuesday and never taken out.'],
  ['Rasha', 'That is not your fault.'],
  ['Yara', 'It is not my fault and it is my decision, and those are different. I chose the second door. I knew about the seal. Everybody knew about the seal.'],
  ['Mazen', 'And when you wrote it up?'],
  ['Yara', 'I wrote "the incubator failed", because that is what everybody writes. It is four words and it is a lie made of true words — the machine worked perfectly, it held exactly the temperature it had been told to hold, with a door that would not shut on a seal that had been splitting for eleven days.'],
  ['Rasha', 'Did you change it?'],
  ['Yara', 'I changed it on Monday. Four sentences instead of four words. Nobody has said anything to me about it and the seal was replaced on Wednesday.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – giving a reason that was already true**',
  table(['you say', 'and it means'], [
    ['_It stopped **because** nobody **had checked** it._', 'the not-checking was already true when it stopped'],
    ['_We were late **because** the road **had been** closed since six._', 'the closing came first and was still true'],
    ['_I chose that door **because** the first one **was** full._', 'past simple — the two things were true at the same moment'],
  ], [2.5, 2.1]),
  '**_because_ + past perfect is the sentence that explains a failure**, and it is the single most useful thing in this unit at work. A reason that was already true when the thing happened is the reason; a thing that happened afterwards is a consequence.',
  '⚠ Do not step back a reason that was true **at the same time**: _I chose that door because the first one **was** full_ — the fullness was not earlier, it was simultaneous. Past simple.',
  '⚠ ~~because nobody didn\'t check it~~ → _because nobody **had checked** it_. One negative.',
  '**Three shapes for the same thing:** _It stopped **because** nobody had checked it._ · _Nobody had checked it, **so** it stopped._ · _It stopped. **Nobody had checked it that morning.**_ The third is the strongest in writing, because the reader joins them.',
  '**The useful distinction at work:** _whose fault_ and _whose decision_ are different questions. The past perfect answers the first; the past simple usually answers the second.',
  '**Useful phrases:** a lie made of true words · it is not my fault and it is my decision, and those are different · the writing was in the drawer of somebody who does not work there · four sentences instead of four words.',
  '**Practise:** Give the reason that was already true.  1 The machine stopped.  2 We missed the train.  3 The order went to the wrong address.  4 Nobody came to the meeting.  5 The food was cold.',
  '**Pronunciation.** 🔊 **Track 3.4** In _because nobody had checked it_, _had_ disappears and **checked** takes the stress: /bɪkəz ˈnəʊbədi əd ˈtʃekt ɪt/. Listen to six reasons and write only the participle you hear — that is the word carrying the meaning.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the failure from the card. B gives **two** reasons — one that was already true before it, and one that was true at the same moment — and says which tense each one needs. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'It happened because __________ had __________.'],
  ['A', 'And the other reason?'],
  ['B', 'And because __________ was __________ at the time.'],
  ['A', 'Which is the real reason?'],
  ['B', 'The __________ one, because __________.'],
]));
out.push(table(['Card A – the failures', 'Card B – the failures'], [
  ['The machine stopped.', 'The delivery went to the wrong address.'],
  ['We missed the train.', 'Nobody came to the meeting.'],
  ['The result was lost.', 'The customer left without paying.'],
  ['The class was cancelled.', 'The letter was never answered.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **already true** reason for each failure. Then say which of the four could have been prevented by somebody reading something that was already written down.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner about something that went wrong at work or at home, and give the reason that was **already true** before it happened. Then say who knew about it.'));
out.push(p('**b**  Swap. Then each of you separate the two questions: whose **fault** was it, and whose **decision** was it?'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Yara says everybody calls it an incubator failure and the incubator did not fail. Three things were already true before she came in that morning. The seal on the second door had been splitting since about Monday and you could see it. Somebody had reported it in February and the report had gone to a man who left in March, so it was in writing and the writing was in the drawer of somebody who does not work there. And the third is hers: she had put the Thursday batch in the second door, and she had put it there because the first door was full of somebody else\'s work that had been finished on Tuesday and never taken out. Rasha said that is not her fault, and Yara said it is not her fault and it is her decision, and those are different — she chose the second door and she knew about the seal, and everybody knew about the seal. She first wrote "the incubator failed", which she calls four words and a lie made of true words, because the machine held exactly the temperature it had been told to hold with a door that would not shut. She changed it on Monday to four sentences. Nobody has said anything to her about it and the seal was replaced on Wednesday._'));
out.push(p('**Listener task:** write the thing in your own workplace that everybody knows about and nobody has written down.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two versions of Yara\'s entry. Answer the questions.'));
out.push(model([
  '**ENTRY 41/APR** · laboratory incident book · Y. Mansour',
  '**What I wrote on the day.** "Batch 41 lost. The incubator failed."',
  '**What I wrote on the Monday, after I had read it again.** Batch 41 (three days\' growth, Thursday\'s run) was lost overnight on Saturday. The incubator held its temperature correctly throughout; the temperature log is attached and shows no variation.',
  'The door of the second chamber did not close. The seal had been splitting since at least Monday 8 April and was visible to anybody who opened that door. It had been reported on 14 February by a member of staff who has since left, and the report was filed to a post that has been vacant since March, which is why no action followed.',
  'Batch 41 was in the second chamber because the first chamber was full. It had been full since Tuesday with completed work from another run which had not been removed.',
  'I put batch 41 in the second chamber. I knew the seal was splitting.',
  '**What I would like changed, and it is small.** When a report goes to a post rather than to a person, and that post is empty, the report should come back to whoever sent it after fourteen days. Nothing else in this entry needs a new rule; it needs somebody to read what was already written.',
]));
out.push(item('1', 'What does the temperature log prove?'));
out.push(item('2', 'How long had the seal been splitting, and who had reported it?'));
out.push(item('3', 'What does she ask for, and what does she say is **not** needed?'));
out.push(writers([
  'An incident entry that explains rather than blames: **the loss, plainly** → **what did not fail, with the evidence** → **what had already been true, with dates** → **the one sentence that is yours** → **a small change, and a line saying no new rule is needed**.',
  'Every _had_ in it carries a **date**: _since at least Monday 8 April · on 14 February · since March · since Tuesday_. The past perfect without a date is an excuse; with a date it is a finding.',
  'Put the sentence that is yours on a **line of its own**, in the past simple, with no explanation after it: _I put batch 41 in the second chamber. I knew the seal was splitting._',
  '⚠ Ask for the smallest possible change and say what is **not** needed. _It needs somebody to read what was already written_ is the line that gets a seal replaced on the Wednesday.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an entry about something that went wrong where you work or live (50 words or more).'));
out.push(p('**______________** · ______________   **What was written on the day.** "______________."   **What actually happened.** ______________ was ______________. ______________ did not ______________; ______________ is attached.   ______________ had been ______________ since ______________. It had been reported on ______________ by ______________, and ______________, which is why ______________.   ______________. I ______________. I knew ______________.   **What I would like changed, and it is small.** ______________. Nothing else needs ______________; it needs ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_because_ + past perfect for what was already true; past simple for what was true at the same time',
  'Every past perfect carries a date',
  'Your own sentence on a line of its own, in the past simple',
  'One small change asked for, and a line saying what is not needed',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what I would like changed" line only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full entry (100 words or more) about something that went wrong and was explained as a failure of a machine, a system or a person when it was not. What did not fail, what had already been true, which sentence is yours, and the smallest change.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s entry as **the person who has to act on it**. ★ _The line that tells me what to do on Monday._  ✓ _One past perfect with no date against it._  ? _What is the sentence that is yours?_ — and if there is not one, ask why.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of these could have been prevented by somebody reading something that was already written down?** Count. It is usually more than half, which is the most useful number this unit produces.'));
out.push(hw('Find something at your work or in your building that **everybody knows about and nobody has written down**, and write it down in four sentences with dates (50+ words). Then decide whether to hand it in.'));

// ======================= 3.3 =======================
out.push(pb());
out.push(h2('3.3  By the time I got there'));
out.push(p('**Function:** saying what had and had not happened by a point   ·   **Grammar:** _by the time_ · _already_ · _never before_   ·   **Pronunciation:** _by the time_ as one piece'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher gives a time — _by the time I was twenty-five_ — and everybody finishes it twice: once with something they **had** done and once with something they **had not** done.'));
out.push(board('By the time I got there, it had already started.', 'by the time · already · still hadn\'t · never before'));
out.push(p('**b**  Put the word in. **1** _By the time I got there, it had ___ started._  **2** _At thirty I ___ hadn\'t been on a plane._  **3** _I had ___ spoken English to a stranger before that day._  **4** _By six o\'clock we had ___ finished._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Jad working out?   **A** how late he was   **B** how much of his course is in English   **C** what he had done by nineteen'));
out.push(p('**b**  Listen again. **1** What had Jad done by the time he left school?   **2** What does Umm Kinan say about the list?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.5  By the time I was nineteen', [
  ['Ms Huda', 'Jad. By the time you left school, what had you done?'],
  ['Jad', 'Nothing. I was eighteen.'],
  ['Ms Huda', 'Try again, and count.'],
  ['Jad', '…By the time I left school I had built four computers out of other people\'s broken ones. I had taught myself to read documentation in English, which nobody asked me to do. And I had answered about six hundred questions on a forum, where I was nineteen and everybody thought I was older.'],
  ['Umm Kinan', 'Six hundred?'],
  ['Jad', 'Six hundred and something. It is on the site, you can count them.'],
  ['Ms Huda', 'And what had you not done?'],
  ['Jad', 'By the time I left school I had never spoken English out loud to anybody. Not once. I had read about a million words of it and I had never said a sentence.'],
  ['Umm Kinan', 'That list is not nothing. You said "nothing" thirty seconds ago.'],
  ['Jad', 'It feels like nothing because it is all the same thing. It is a boy in a room.'],
  ['Umm Kinan', 'I am forty-eight and by the time I was your age I had done one thing: I had passed an examination. That is my list. Yours has four items on it and you are nineteen, and I would like you to say "nothing" again now and listen to yourself while you do it.'],
  ['Jad', '…All right.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – marking the point**',
  table(['you say', 'what it does'], [
    ['_**By the time** I got there, it **had already started**._', 'sets a point and says what was finished before it'],
    ['_**By** six o\'clock we **had finished**._', 'the same, with a clock time'],
    ['_At thirty I **still hadn\'t** been on a plane._', 'what was **not** done by the point'],
    ['_I **had never** spoken it to a stranger **before that day**._', 'never, up to the point — and then the day that changed it'],
  ], [2.4, 2.2]),
  '**_by the time_ + past simple, then the past perfect.** _By the time I **got** there_ (the point) _it had **already started**_ (what was finished first). Students reverse these and produce ~~by the time I had got there, it started~~.',
  '⚠ _by_ and _until_ are opposites. _We had finished **by** six_ (it was done before six). _We worked **until** six_ (it went on to six).',
  '**Where the little words go:** _already_ and _never_ go **between** _had_ and the participle — _had already started · had never spoken_. _still_ goes **before** _hadn\'t_ — _I **still hadn\'t** been_. That last one is the only position students reliably get wrong.',
  '**The two lists.** _By the time I was X, I had…_ and _by the time I was X, I still hadn\'t…_ Both are useful and the second is the one that gets written in a job application, in a different form, for the rest of your life.',
  '**Useful phrases:** It is on the site, you can count them. · it is all the same thing — it is a boy in a room. · That list is not nothing. · say "nothing" again now and listen to yourself while you do it.',
  '**Practise:** Finish each one twice — _had_ and _still hadn\'t_.  1 By the time I was eighteen…  2 By the time I left that job…  3 By the time I got to Damascus…  4 By six o\'clock yesterday…',
  '**Pronunciation.** 🔊 **Track 3.6** _By the time_ is said as one piece and fast, /baɪðəˈtaɪm/, and the stress falls on the **verb** after it: _by the time I **GOT** there_. Listen to six and repeat; then listen for _still hadn\'t_, where **still** takes the weight.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the point from the card. B says one thing they **had** done by then and one thing they **still hadn\'t** done, and A asks for the number. Swap cards.'));
out.push(dlg(null, [
  ['A', 'By the time __________?'],
  ['B', 'By then I had __________.'],
  ['A', 'How many / how long?'],
  ['B', '__________.'],
  ['A', 'And what had you not done?'],
  ['B', 'By then I still hadn\'t __________. I had never __________ before __________.'],
]));
out.push(table(['Card A – the points', 'Card B – the points'], [
  ['by the time you left school', 'by the time you were twenty-five'],
  ['by the time you finished A2', 'by the time you started this job'],
  ['by the time you came to Damascus', 'by the time you got married / left home'],
  ['by six o\'clock yesterday', 'by the end of last year'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **numbers**. Every answer in this cycle should have one in it, and the ones that do not are the answers that are hiding something.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Choose a point in your own life. Say four things you **had** done by then, with numbers, and one thing you **still hadn\'t**. Your partner may only say "how many" and "and what else".'));
out.push(p('**b**  Swap. Then each of you say whether the list sounded like nothing while you were saying it, and whether it sounds like nothing now.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda asked Jad what he had done by the time he left school and he said nothing, he was eighteen. She told him to try again and count. By the time he left school he had built four computers out of other people\'s broken ones, he had taught himself to read documentation in English, which nobody asked him to do, and he had answered about six hundred questions on a forum where everybody thought he was older. Umm Kinan said six hundred, and he said six hundred and something and that it is on the site and you can count them. What he had not done, by the time he left school, was speak English out loud to anybody — not once; he had read about a million words of it and had never said a sentence. Umm Kinan said that list is not nothing and that he had said "nothing" thirty seconds earlier. He said it feels like nothing because it is all the same thing, a boy in a room. And she said she is forty-eight and by his age she had done one thing, passed an examination, and that his list has four items on it at nineteen — and she asked him to say "nothing" again and listen to himself while he did it._'));
out.push(p('**Listener task:** write the item from somebody else\'s list that they called nothing.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Jad writes afterwards. Answer the questions.'));
out.push(model([
  '**BY THE TIME I WAS NINETEEN** · Jad Attar, written because I was told to say it again and listen',
  'I said "nothing" and a woman of forty-eight made me count. This is the count.',
  '**What I had done by the time I left school.** I had built four working computers out of other people\'s broken ones, between the ages of fourteen and seventeen. I had taught myself to read technical documentation in English, which took about two years and which nobody asked me to do and nobody knew about. I had answered six hundred and forty-one questions on a forum under a name nobody there has ever connected to a nineteen-year-old in Damascus. And I had taught my mother to use three things on her telephone that she now uses every day without thinking about them, which she would not count and which took longer than the computers.',
  '**What I still hadn\'t done.** I had never spoken English out loud to anybody. Not one sentence, in six years of reading it every day. I had never asked anybody for help with anything technical, because I had decided at about fifteen that asking was the thing I did not do.',
  '**Why the list felt like nothing while I was saying it.** Because every item on it happened in one room, alone, and I have been taught — not by anybody in particular — that things that happen alone in a room do not count.',
  '**What I notice now, written down.** The fourth item is the only one with another person in it, and it is the one I nearly did not write.',
]));
out.push(item('1', 'What are the four things on his list, and which took longest?'));
out.push(item('2', 'What had he decided at about fifteen?'));
out.push(item('3', 'What does he notice about the fourth item?'));
out.push(writers([
  'A "by the time" page: **the point, and why you are counting** → **what you had done, with numbers** → **what you still hadn\'t, and the decision underneath it** → **why the list felt like nothing** → **one thing you notice only now that it is written down**.',
  'Every item takes a **number or a span**: _four computers, between fourteen and seventeen · six hundred and forty-one · about two years_. A list without numbers reads as a boast; a list with them reads as a record.',
  'Put the thing you **still hadn\'t** done next to the decision that caused it: _I had never asked anybody for help, because I had decided at about fifteen that asking was the thing I did not do._',
  '⚠ The last section is the point of the exercise. Write the list, then look at it as if it were somebody else\'s and say what you can see.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own "by the time" page (50 words or more).'));
out.push(p('**BY THE TIME I WAS ______________** · ______________   **What I had done.** I had ______________, between ______________ and ______________. I had ______________, which took ______________ and which ______________. I had ______________. And I had ______________, which ______________.   **What I still hadn\'t done.** I had never ______________. I had never ______________, because I had decided at about ______________ that ______________.   **Why it felt like nothing.** Because ______________.   **What I notice now.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_by the time_ + past simple, then the past perfect',
  '_already_ and _never_ **between** _had_ and the participle · _still_ **before** _hadn\'t_',
  'A number or a span against every item',
  'A last line saying what you can see only now that it is written',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one item from the list and its number.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more) for a point in your own life — leaving school, leaving a job, arriving in this city, the day before something changed. Four things you had done, two you still hadn\'t, why it felt like nothing, and what you can see now.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody who is at that point now**. ★ _The item I would not have counted either._  ✓ _One item with no number against it._  ? _What did you decide, and at what age?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read only the "what I still hadn\'t done" lines.** How many of them are about speaking, asking or being seen? In most rooms it is nearly all of them, and that is worth saying out loud in week four of a B1 course.'));
out.push(hw('Write the same page for **by the time I finish this course** (50+ words) — in the future, as a list of things you intend to have done. Keep it; it is opened in Unit 12.'));

// ======================= 3.4 =======================
out.push(pb());
out.push(h2('3.4  No — she had already gone'));
out.push(p('**Function:** correcting somebody\'s version of events   ·   **Grammar:** the past perfect in a correction   ·   **Pronunciation:** the stress that carries the correction'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher tells the class a short account of something that happened in Room 14 last week, with **two** things wrong in it. The class corrects both, out loud, as politely as it can manage.'));
out.push(board('No — she\'d already gone by then.', 'No, — actually — in fact'));
out.push(p('**b**  Soften each correction. **1** _That is wrong._  **2** _No, she left first._  **3** _You have got the order wrong._  **4** _That is not what happened._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is being corrected?   **A** who paid   **B** the order of events   **C** how long it took'));
out.push(p('**b**  Listen again. **1** What does Samira think happened?   **2** What had actually happened before Mr Khaled came in?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.7  Actually, by then…', [
  ['Samira', 'So Mr Khaled came in, saw the figures, and told Lina to write to Türkiye herself.'],
  ['Lina', 'That is the story everybody tells and it is the wrong way round.'],
  ['Samira', 'Is it not what happened?'],
  ['Lina', 'Every fact in it is right and the order is wrong, which makes it a completely different story about me. By the time he came in, I had already written the letter.'],
  ['Omar', 'You had written it?'],
  ['Lina', 'I had written it on the Tuesday evening, at home, and I had not shown it to anybody. It had been sitting in my drafts for two days. He did not tell me to write to Türkiye. He came in, and I said "I have written it", and he said "then send it".'],
  ['Samira', 'That is not the same at all.'],
  ['Lina', 'It is not the same at all. In the version everybody tells, a manager pushed a frightened woman into doing something. In what happened, a frightened woman had already done it and was waiting for permission she did not need.'],
  ['Omar', 'Why have you let everybody tell it the other way for six months?'],
  ['Lina', '…Because the other way is easier to be in. If he pushed me then it is his, and if I had already done it then it is mine, and I have spent six months being more comfortable with his version than with my own.'],
  ['Samira', 'I am going to correct it now, every time I hear it.'],
  ['Lina', 'Do not do that. I will.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Correcting an order of events**',
  table(['you say', 'how strong it is'], [
    ['_**Actually**, by then she **had already gone**._', 'the normal, usable correction'],
    ['_**In fact** I **had written** it two days before._', 'slightly more formal'],
    ['_**No** — she\'d gone by then._', 'direct; fine among friends, risky at work'],
    ['_I think that may be the other way round._', 'the softest, and the one to use with a manager'],
  ], [2.4, 2.2]),
  '**The correction is in the tense, not in the words.** _She left_ and _she had already left_ contain the same facts; the second one says **when** it was true, and that is usually the whole disagreement.',
  '**Correct the order, then say what it changes.** _Every fact in it is right and the order is wrong, which makes it a different story about me._ Without the second half, a correction sounds like pedantry.',
  '⚠ ~~You are wrong.~~ → _I think that may be the other way round._  ⚠ ~~That is not true.~~ → _**Actually**, by then…_',
  '**_actually_ in English is not an accusation.** It introduces a correction of **fact**, politely, and it is one of the most useful words at B1 — unlike beginning with _no_, which sounds much harder in English than it is meant to.',
  '**Useful phrases:** That is the story everybody tells and it is the wrong way round. · every fact in it is right and the order is wrong · the other way is easier to be in · Do not do that. I will.',
  '**Practise:** Correct each one with _actually_ and a past perfect.  1 "He told you to write it." 2 "You left before she arrived." 3 "They paid after the delivery." 4 "She found out on the Monday."',
  '**Pronunciation.** 🔊 **Track 3.8** The correction is carried by **one** stressed word and everything else stays flat: _actually, by then I\'d **ALREADY** written it_ · _she\'d gone **BEFORE** he came in_. Put the stress on the wrong word and the sentence sounds like an argument. Listen to six and mark the stressed word.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A tells the version on the card, which has the order wrong. B corrects it with _actually_ and a past perfect, and then says what the correction changes. Swap cards.'));
out.push(dlg(null, [
  ['A', 'So __________, and then __________.'],
  ['B', 'Actually, by then __________ had already __________.'],
  ['A', 'Does that matter?'],
  ['B', 'It does, because in your version __________, and in what happened __________.'],
  ['A', 'I have been telling it wrong.'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the versions with the order wrong', 'Card B – the versions with the order wrong'], [
  ['Mr Khaled told Lina to write to Türkiye.', 'The seal split and then the batch was lost.'],
  ['The midwife stood up when Tareq asked.', 'Bassel rang the driver and found out about Kilis.'],
  ['Jad learned English when he started university.', 'The lift was reported after Rasha was stuck in it.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write what each correction **changes** — not the fact, the story. In two of the three, the person in the story moves from being pushed to having decided.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner a version of something that happened to you that other people tell with the order wrong. Say what the real order was and what the wrong version makes you.'));
out.push(p('**b**  Swap. Then each of you say whether you have let the wrong version stand, and why.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Samira said Mr Khaled came in, saw the figures and told Lina to write to Türkiye herself. Lina says the facts are all right and the order is wrong, which makes it a different story about her. By the time he came in she had already written the letter — on the Tuesday evening, at home — and she had not shown it to anybody. He did not tell her to write it; she said "I have written it", and he said "then send it". Omar asked why she had let the wrong version stand for six months, and she said because the other way is easier to be in. Samira said she would correct it every time she heard it, and Lina said no — she will._'));
out.push(p('**Listener task:** write the version of a story about you that other people tell with the order wrong.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Lina writes. Answer the questions.'));
out.push(model([
  '**THE ORDER OF IT** · Lina Haddad · not sent to anybody',
  'The story that is told about me in that office is that Mr Khaled came in one morning in March, looked at the April figures, and told me to write to Anadolu Tekstil myself for the first time. Everybody who tells it means it kindly. Rana told it at her leaving lunch.',
  'Here is the order it actually happened in.',
  'By the Monday I had been doing the account alone for six working days, because Rana had gone on the Thursday before. By the Tuesday evening I had written the letter — at home, at the kitchen table, between nine and about eleven. By the Wednesday morning I had read it eleven times and I had not shown it to a single person. It had been sitting in my drafts for two days when he came in on the Thursday.',
  'He did not tell me to write it. He asked how the account was going. I said, "I have written to them and I have not sent it." He said, "Then send it."',
  '**Why the order matters.** In the version that is told, somebody made me do the thing I was frightened of. In the order it happened, I had already done the thing I was frightened of and I was waiting for somebody to say it was allowed. Those are two different women and only one of them is me.',
  '**Why I have not corrected it before now.** Because his version costs me nothing. If he pushed me, the courage is his and the fear is mine, which is a more comfortable arrangement than the truth: both of them were mine and I gave one of them away.',
]));
out.push(item('1', 'How long had the letter been in her drafts when he came in?'));
out.push(item('2', 'What did he actually ask, and what did she actually say?'));
out.push(item('3', 'What does she say his version costs her?'));
out.push(writers([
  'A note that corrects the order: **the version that is told, and that people mean it kindly** → **"here is the order it actually happened in"** → **a chain of _by the_ + past perfect, with dates** → **the two sentences that were actually said** → **why the order matters** → **why you let it stand**.',
  'Build the real order as a **ladder**: _by the Monday · by the Tuesday evening · by the Wednesday morning · when he came in on the Thursday_. Four rungs, and the reader cannot get it wrong.',
  'Quote the two lines of dialogue exactly and leave them bare. _"Then send it."_ Three words, no comment.',
  '⚠ The last section is the hard one and the reason to write the page: say what the wrong version **gives** you. Nobody lets a wrong story stand for six months unless it is doing something for them.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note about a story told about you with the order wrong (50 words or more).'));
out.push(p('**______________** · ______________   The story that is told about me is that ______________. Everybody who tells it ______________.   Here is the order it actually happened in.   By ______________ I had ______________. By ______________ I had ______________ and I had not ______________. It had been ______________ when ______________.   ______________ did not ______________. ______________ asked ______________. I said, "______________." ______________ said, "______________."   **Why the order matters.** In the version that is told, ______________. In the order it happened, ______________.   **Why I have not corrected it.** Because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_by the_ + a point, then the past perfect, at least three times',
  'The two lines actually said, quoted and left bare',
  'A paragraph saying what the order changes about the **person**',
  'A last paragraph saying what the wrong version gives you',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the "why the order matters" paragraph only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (100 words or more). It does not have to be sent, and most of them will not be. The ladder of dates, the two quoted lines, what the order changes, and what the wrong version does for you.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s note as **somebody who has told the wrong version**. ★ _The rung of the ladder that changed my mind._  ✓ _One place where the correction becomes an accusation._  ? _Are you going to correct it, or is this the correction?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Who is going to correct a version this week, out loud, to somebody?** Not many hands, and the reason is in everybody\'s last paragraph. Read three of those last paragraphs aloud instead of arguing about it.'));
out.push(hw('Correct one version, to one person, out loud, and write down what happened (50+ words) — including if they did not believe you.'));

// ======================= 3.5 =======================
out.push(pb());
out.push(h2('3.5  The order it happened in'));
out.push(p('**Function:** giving a chronology from notes   ·   **Grammar:** two past times in one sentence   ·   **Pronunciation:** reading dates and times aloud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads six events out of order with their dates. The class puts them in order out loud, and then says the whole thing as **three** sentences rather than six.'));
out.push(board('It had been reported twice before anybody came.', 'the timeline, in sentences'));
out.push(p('**b**  Say each pair as one sentence. **1** _14 Feb: reported. 9 Apr: batch lost._  **2** _Tue: chamber full. Thu: batch put in second door._  **3** _Sunday: driver in Kilis. Tuesday: telephone call._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are they building?   **A** a complaint   **B** a timeline on the wall   **C** a report for the municipality'));
out.push(p('**b**  Listen again. **1** What does Mazen say the fault book shows?   **2** What does Ms Huda say a timeline is for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.9  Put it on the wall', [
  ['Ms Huda', 'Mazen, you have been keeping a book since September. Put it on the wall.'],
  ['Mazen', 'It is a list of telephone faults. There is nothing on the wall in it.'],
  ['Ms Huda', 'Read me the first four entries with their dates.'],
  ['Mazen', 'Third of September, one model, screen. Ninth of September, same model, same screen. Fourteenth, same again. By the end of September I had written that model down eleven times.'],
  ['Yara', 'Eleven in a month?'],
  ['Mazen', 'Eleven in four weeks. And here is the thing I did not see until I wrote them in a line: all eleven of them had been bought from the same two shops, and all eleven had been sold between January and March. I did not know that. I had the information in a book for four months and I did not have it in my head.'],
  ['Ms Huda', 'That is what a timeline is for. It is not a record — the record was already in the book. It is for seeing a shape that was already there.'],
  ['Mazen', 'The shape is that somebody sold a bad batch in this city in the winter and I have been mending them one at a time for nine months and charging people for it.'],
  ['Yara', 'What are you going to do?'],
  ['Mazen', 'I have written to the two shops. Not angry — a list. Eleven dates, one model, one fault. I sent it on Monday and I have had nothing back, and I would be surprised if I do, and I am going to send the next eleven when I have them.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Turning notes into a chronology**',
  table(['notes', 'one sentence'], [
    ['14 Feb reported · 9 Apr lost', '_The batch was lost on 9 April. It **had been reported** on 14 February._'],
    ['Tue full · Thu second door', '_She put it in the second door on the Thursday because the first **had been** full since the Tuesday._'],
    ['Sun in Kilis · Tue call', '_When he rang on the Tuesday, he **had been** in Kilis since the Sunday._'],
  ], [1.7, 2.6]),
  '**Say the later thing first.** A chronology read out in order — _first this, then this, then this_ — is a list and nobody hears the shape. Put the **event** first and step the earlier things behind it; that is what the past perfect is for.',
  '**Three sentences, not six.** Join pairs with _because_, _when_, _by the time_ and _which had_. Six separate dated sentences is a police statement; three is an account.',
  '⚠ Dates in British English: **14 February** or **14 Feb**, said _the fourteenth of February_. ⚠ ~~on 14/2~~ in running text; keep figures for tables.',
  '**The point of a timeline is the shape, not the record.** The record already exists; the line is what lets you see that eleven things are one thing.',
  '**Useful phrases:** I had the information in a book for four months and I did not have it in my head · it is for seeing a shape that was already there · not angry — a list · I would be surprised if I do.',
  '**Practise:** Say each pair as one sentence, later thing first.  1 Mon seal splitting / Sat batch lost  2 Feb report / Mar man leaves  3 Sep first fault / Dec eleventh fault  4 Tue letter written / Thu manager comes in',
  '**Pronunciation.** 🔊 **Track 3.10** Dates and times read aloud: _the fourteenth of February_ · _the ninth of April_ · _since the Sunday_ · _by the end of September_. Note **the** before the month-date, and the stress on the number. Listen to eight and read the four entries of the fault book aloud.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the notes on the card, out of order. B says the whole thing in **three** sentences, later thing first, with at least two past perfects. A checks that nothing has been added. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________ · __________ · __________ · __________.'],
  ['B', 'On __________, __________. It had __________ on __________, and ______ had __________ since __________.'],
  ['A', 'Anything added?'],
  ['B', 'No — __________.'],
]));
out.push(table(['Card A – the notes', 'Card B – the notes'], [
  ['8 Apr seal splitting · 14 Feb reported · Mar man leaves · 13 Apr batch lost', '3 Sep first fault · 30 Sep eleven faults · Jan–Mar all sold · Mon letter sent'],
  ['Tue letter written · Thu Khaled comes in · Thu before Rana leaves · Fri letter sent', 'Sun driver in Kilis · Tue call · Tue machine stops · Fri paper arrives'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the three sentences and check them against the notes. Did anybody add a word that was not in the notes — a _because_, a _so_, a reason? It is the commonest thing to add and the hardest to notice.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a set of your own notes — a diary, a record, a book of anything you have kept — and put four entries in a line. Tell your partner the shape in three sentences.'));
out.push(p('**b**  Swap. Then each of you say whether the shape was a surprise, and how long the information had been in your possession before you saw it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda asked Mazen to put his fault book on the wall and he said it is a list of telephone faults and there is nothing on the wall in it. She asked for the first four entries with their dates: the third of September, one model, screen; the ninth, same model, same screen; the fourteenth, same again — and by the end of September he had written that model down eleven times. Eleven in four weeks. And the thing he says he did not see until he wrote them in a line is that all eleven had been bought from the same two shops and all eleven had been sold between January and March. He had the information in a book for four months and he did not have it in his head. Ms Huda said that is what a timeline is for: it is not a record, because the record was already in the book — it is for seeing a shape that was already there. Mazen says the shape is that somebody sold a bad batch in this city in the winter and he has been mending them one at a time for nine months and charging people for it. He has written to the two shops, not angry, a list: eleven dates, one model, one fault. He sent it on Monday, he has had nothing back, he would be surprised if he does, and he is going to send the next eleven when he has them._'));
out.push(p('**Listener task:** write the shape somebody else found in information they already had.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Mazen sends. Answer the questions.'));
out.push(model([
  '**To:** the manager · Al-Nour Mobile and Al-Badr Communications, Shaalan',
  '**Subject:** Eleven repairs of the same model, September',
  'Dear Sir,',
  'I repair telephones at the counter opposite the pharmacy in Shaalan. I am not making a complaint and I am not asking you for anything. I am sending you a list, because I think you have the same information in a different form and have not put it in a line.',
  'Between 3 and 30 September I repaired the same fault on the same model eleven times: the screen separating from the frame at the lower left corner. The dates were the 3rd, 9th, 14th, 14th, 16th, 19th, 21st, 23rd, 26th, 28th and 30th.',
  'All eleven had been bought from your two shops. All eleven had been sold between January and March. Nine of the eleven had been carried in a case, so it is not how people are treating them.',
  'I am not able to say what that means and I have not told any of the customers. You are in a position to know whether those eleven came out of one batch, and I am not.',
  'If it is useful to you I will send the next eleven when I have them, with the same information. If it is not useful, tell me and I will stop.',
  'Yours faithfully, Mazen Hariri',
]));
out.push(item('1', 'What does he say he is **not** doing?'));
out.push(item('2', 'What is the significance of the nine out of eleven?'));
out.push(item('3', 'What two things does he offer at the end?'));
out.push(writers([
  'A letter made of a chronology: **who you are and what you are not asking for** → **the span and the count** → **the dates, in a line** → **what they had in common, in past perfects** → **the thing you cannot say** → **an offer, and a way to refuse it**.',
  'Say what you are **not** doing in the first paragraph. _I am not making a complaint and I am not asking you for anything_ is what gets the letter read past line three.',
  'Put the dates in **one line**, bare. Eleven numbers in a row is an argument that no sentence can make.',
  '⚠ Name the limit of what you know: _I am not able to say what that means._ A letter that draws the conclusion for the reader invites them to disagree with the conclusion instead of looking at the dates.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a letter made out of your own chronology (50 words or more).'));
out.push(p('**To:** ______________   **Subject:** ______________   Dear ______________,   I ______________. I am not ______________ and I am not ______________. I am sending you ______________, because ______________.   Between ______________ and ______________ I ______________ ______________ times: ______________. The dates were ______________.   All ______________ had been ______________. ______________ of the ______________ had ______________, so ______________.   I am not able to say ______________. You are in a position to ______________, and I am not.   If it is useful I will ______________. If it is not, ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The later thing first; earlier things stepped back with the past perfect',
  'The dates in one line, in British form',
  'A sentence saying what you are not asking for',
  'A sentence naming the limit of what you know, and a way for them to refuse',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their line of dates only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (100 words or more) out of a record you actually keep — faults, absences, deliveries, payments, journeys, anything with dates. Find the shape first; the letter is only worth writing if there is one.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s letter as **the manager who receives it**. ★ _The line that would make me look it up._  ✓ _One conclusion you have drawn for me._  ? _How long had you had this information before you put it in a line?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Who has information in a book that they have never put in a line?** Almost everybody. Then: how long has it been there? Collect the longest three; one of them is always years.'));
out.push(hw('Put four entries of something you record into a line, with dates, and write the shape in three sentences (50+ words). If there is no shape, write that — it is a result.'));

// ======================= 3.6 =======================
out.push(pb());
out.push(h2('3.6  I had never done it before that day'));
out.push(p('**Function:** saying what you had never done   ·   **Grammar:** _had never_ + before + the day that changed it   ·   **Pronunciation:** the weight on _never_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One sentence each round the room: _Before that day I had never…_ — and it must be something you have done since.'));
out.push(board('I had never said a word of it to a stranger.', 'had never … before that day'));
out.push(p('**b**  Finish them. **1** _Before I came to Damascus I had never…_  **2** _Before that interview I had never…_  **3** _Before last year I had never…_  **4** _Until that evening I had never…_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is speaking, and what has she been waiting to say?   **A** Lubna, about the drawing   **B** Yara, about the first week   **C** Rasha, about the lift'));
out.push(p('**b**  Listen again. **1** What happened when Yara was eleven?   **2** What three things had she already done by the time she told her mother?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.11  The rest of it', [
  ['Yara', 'In the first week I said four sentences and then I said there was more and that I would say it next week. It has been three weeks.'],
  ['Ms Huda', 'It has. Nobody has mentioned it.'],
  ['Yara', 'Everybody has mentioned it. Samira has mentioned it twice.'],
  ['Samira', 'Three times.'],
  ['Yara', 'The thing I said in the first week was that I have studied English since I was eleven and have never spoken it to a stranger. That is true and it is not the sentence. The sentence is that when I was eleven an inspector came to our school and asked me a question in English in front of the class, and I knew the answer, and I said nothing. For about nine seconds. And then he moved on and that was the end of it, and I have not spoken English to a stranger since. That is twenty-six years ago next month.'],
  ['Mazen', 'Nine seconds.'],
  ['Yara', 'Nine seconds, and I have built most of a life around them. And the second thing, which nobody here knows: when I took the laboratory job in Damascus, I did not tell my mother until it was done. By the time I told her I had already accepted it, I had already given notice at the pharmacy in Suwayda, and I had already found a room. She found out on a Thursday that she was losing me on the Sunday.'],
  ['Ms Huda', 'Why that way round?'],
  ['Yara', 'Because I had never once won an argument with her, and I had decided that I was not going to have one — I was going to have a fact instead. I had never done anything like that before that week and I have not done anything like it since, and I would like to be the sort of person who does not need to do it like that.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the thing you had never done**',
  table(['you say', 'what it does'], [
    ['_Before that day I **had never** spoken to a stranger._', 'sets the whole of your life up to a point'],
    ['_By the time I told her I **had already accepted** it._', 'three things, all finished, before the moment'],
    ['_I **had never once** won an argument with her._', '**once** makes the never absolute'],
    ['_I **have not done** anything like it **since**._', 'and then the present perfect brings it to now'],
  ], [2.4, 2.2]),
  '**The shape of a turning-point story:** _I had never X_ → **the day** → _and I have not X since_ / _and I have done it X times since_. Past perfect for before, past simple for the day, present perfect for after. Three tenses, one sentence each.',
  '**_never once_** is stronger than _never_ and is worth having: _I had never once won an argument with her._',
  '⚠ ~~I never spoke English to a stranger before that day.~~ is understandable and loses the step back. With _before that day_ in the sentence, use _had_.',
  '⚠ ~~I had never done it since.~~ → _since_ belongs with the **present** perfect: _I have not done it since._',
  '**A number makes a _never_ real.** _nine seconds · twenty-six years next month · she found out on a Thursday that she was losing me on the Sunday._ Without the numbers these are feelings; with them they are events.',
  '**Useful phrases:** that is true and it is not the sentence · I have built most of a life around them · I was going to have a fact instead · I would like to be the sort of person who does not need to do it like that.',
  '**Practise:** Three tenses, three sentences.  1 speaking in a meeting  2 travelling alone  3 asking for money you are owed  4 saying no to a relative',
  '**Pronunciation.** 🔊 **Track 3.12** All the weight goes on **never**, and _had_ vanishes: _I\'d **NEV**er spoken it to a stranger._ With _once_, the two words share it: _I\'d **NEV**er **ONCE** won._ Listen to six and repeat, then say your own sentence from Stage 1 with the weight in the right place.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the thing from the card. B tells it in three sentences — _had never_, the day, and _have … since_ — with a number in each. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'Before __________ I had never __________.'],
  ['A', 'What happened?'],
  ['B', 'On __________, __________.'],
  ['A', 'And since?'],
  ['B', 'I have __________ since. __________ times.'],
]));
out.push(table(['Card A – the things', 'Card B – the things'], [
  ['speaking in front of people', 'travelling somewhere alone'],
  ['asking for money you are owed', 'saying no to a relative'],
  ['complaining in a shop', 'telling somebody at home a decision after you made it'],
  ['writing something in English that mattered', 'disagreeing with a teacher or a manager'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the three tenses — the _had never_, the day, and the _since_. Which of the four had the biggest gap between the day and now?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner about a day you did something you had never done before. Three sentences, three tenses, a number in each. Then say what you had been avoiding by not doing it.'));
out.push(p('**b**  Swap. Then each of you say whether you have done it again since, and how many times.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Yara said the rest of it. The sentence she gave in the first week — that she has studied English since she was eleven and has never spoken it to a stranger — is true and is not the sentence. When she was eleven an inspector came to the school and asked her a question in English in front of the class, and she knew the answer and said nothing, for about nine seconds, and then he moved on. She has not spoken English to a stranger since, and that is twenty-six years ago next month. She says she has built most of a life around those nine seconds. The second thing nobody knew: when she took the laboratory job in Damascus she did not tell her mother until it was done. By the time she told her she had already accepted it, had already given notice at the pharmacy in Suwayda and had already found a room — her mother found out on a Thursday that she was losing her on the Sunday. Ms Huda asked why that way round, and Yara said because she had never once won an argument with her mother and had decided not to have one: she was going to have a fact instead. She had never done anything like that before that week, she has not done anything like it since, and she says she would like to be the sort of person who does not need to do it like that._'));
out.push(p('**Listener task:** write the nine seconds from somebody else\'s life — the small thing a lot was built on.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Yara writes afterwards. Answer the questions.'));
out.push(model([
  '**NINE SECONDS** · Yara Mansour',
  'I am thirty-seven in March. For twenty-six years of that I have not spoken English to a stranger, and the whole twenty-six years rests on nine seconds in a classroom in Suwayda when I was eleven.',
  'An inspector came. He asked me a question in English in front of thirty-one children and a headmaster. I knew the answer. I had known that answer for a week; we had been taught it the week before and I had written it out four times because I liked the shape of it. And I said nothing, for about nine seconds, and he smiled and moved on, and nobody in that room ever mentioned it again — not the teacher, not my mother, not one of the thirty-one.',
  'I had never been frightened of English before that day. That is the part I have only understood recently. I was not a frightened child and I was not bad at the subject; I was the best in the room and that is why he asked me.',
  'Since that day I have read English for twenty-six years. I have read it every working day for the last eleven. And in twenty-six years I have not said one sentence of it to a person I did not know.',
  '**What I am doing about it.** I said four sentences in this room in September, to eleven strangers, which was the first thing I had done about it in twenty-six years. It took me three weeks to say the rest. I am writing this down because I would like there to be a date on it.',
]));
out.push(item('1', 'How long had she known the answer, and what had she done with it?'));
out.push(item('2', 'What does she say she has only understood recently?'));
out.push(item('3', 'Why is she writing it down?'));
out.push(writers([
  'A turning-point page: **the span, and what it rests on** → **the day itself, in the past simple, with what was already true behind it** → **what you have only understood recently** → **the arithmetic of since** → **what you are doing about it, with a date**.',
  'Give the small thing its **exact size** — nine seconds, thirty-one children, four times — and give the large thing its exact size too: twenty-six years. The page is the gap between the two numbers.',
  'Say what was **already true** on the day: _I had known that answer for a week · I had written it out four times_. That is where the past perfect earns its keep: it is the difference between bad luck and a loss.',
  '⚠ End with a date, not a resolution. _I am writing this down because I would like there to be a date on it_ is a thing somebody can be held to; _I am going to try harder_ is not.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own turning-point page (50 words or more).'));
out.push(p('**______________** · ______________   I am ______________. For ______________ of that I have not ______________, and the whole ______________ rests on ______________.   ______________. I had ______________ for ______________; I had ______________ because ______________. And I ______________, and nobody ______________.   I had never ______________ before that day. That is the part I have only understood recently.   Since that day I have ______________. And in ______________ I have not ______________.   **What I am doing about it.** ______________. I am writing this down because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_had never_ + _before that day_ · _have not … since_ for the years after',
  'What was already true on the day, in the past perfect',
  'A number on the small thing and a number on the large one',
  'A date at the end, not a resolution',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their first two sentences only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more). It does not have to be about English and it does not have to be sad — the shape works for the day somebody said one sentence to you that you have arranged twenty years around.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page carefully and slowly. ★ _The number that made me stop._  ✓ _One place where you explain what the page has already shown._  ? _What are you doing about it, and is there a date on it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Nobody has to read anything out.** Instead: how many of these pages rest on something that happened before you were fifteen? Count the hands. Then put the pages away; they are not for the wall.'));
out.push(hw('Write the **date** at the bottom of your page and one sentence saying what you will have done about it by the end of this course (50+ words). It is opened in Unit 12.'));

// ======================= 3.7 =======================
out.push(pb());
out.push(h2('3.7  Review & Mediate: What happened first?'));
out.push(p('**Function:** explaining a timeline to somebody   ·   **Recycling:** Units 1–3   ·   **Exam practice:** B1 Preliminary Reading Part 6, Writing Part 1, Listening Part 3'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 3 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** When I arrived she had left and then she had gone to the shop.  **2** I had went to Aleppo before.  **3** By the time I had got there, it started.  **4** I had never done it since.  **5** I never spoke to a stranger before that day.  **6** It stopped because nobody didn\'t check it.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the timeline that goes up on the wall of Room 14.'));
out.push(box(null, [
  '**ROOM 14 · THE WALL** — four things that happened this term, in the order they actually happened',
  '**14 February** · A member of staff reports a splitting seal on the second incubator door at the hospital laboratory. The report is filed to a post, not to a person.',
  '**March** · The man holding that post leaves. Nobody is appointed. The report stays in the drawer.',
  '**3 September** · Mazen writes down a telephone fault. He has started a book; he does not know yet that it is a book about anything.',
  '**Monday 8 April** · The seal is visibly splitting. Several people see it. Nobody writes anything.',
  '**Tuesday 9 April** · The first incubator chamber is filled with completed work. It is not removed.',
  '**Thursday 11 April** · Yara puts batch 41 in the second chamber, knowing about the seal.',
  '**Saturday 13 April** · Batch 41 is lost. Three days\' growth.',
  '**Monday 15 April** · Yara rewrites four words as four sentences.',
  '**Wednesday 17 April** · The seal is replaced. Fourteen months after it was first reported.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Lubna explains the wall to Fares, who was in Homs. What does she say the wall is **not**, and which date does she say is the one that matters?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.13  Nine dates and one of them matters', [
  ['Fares', 'Nine dates. Where do I start?'],
  ['Lubna', 'Not at the top. The wall is not a story about Yara and it looks like one.'],
  ['Fares', 'What is it about?'],
  ['Lubna', 'A piece of paper that sat in a drawer for fourteen months. Everything else on that wall happened because of the fourteen months, including the part that looks like Yara\'s fault.'],
  ['Fares', 'She put the batch in the broken one.'],
  ['Lubna', 'She did, and she has written that down in a sentence of its own, which is more than anybody else in this story has done. But by the time she made that choice, the seal had been splitting for three days in front of everybody, the first chamber had been full since the Tuesday, and the report had been in a dead man\'s drawer since February. She made a bad choice inside a situation that four other people had already built.'],
  ['Fares', 'So which date matters?'],
  ['Lubna', 'The fourteenth of February. Everything else is a consequence, and the only date on that wall that could have been different without anybody being braver is that one — somebody just had to send the report to a person.'],
  ['Fares', 'And the seventeenth of April?'],
  ['Lubna', 'Two days after she rewrote four words as four sentences. That is the other thing the wall says and it does not say it loudly: it took fourteen months and one honest paragraph.'],
]));
out.push(sp());
out.push(box('Language box – explaining a timeline', [
  'Say what the timeline is **not** before you say what it is: _the wall is not a story about Yara and it looks like one_. Every timeline has an obvious wrong reading and the person listening will take it unless you stop them.',
  'Name the date that **matters** and say why it is different from the others: it is the one that could have been different without anybody being braver.',
  'Use the past perfect to stack what was already true at the moment of the choice: _by the time she made that choice, the seal **had been** splitting for three days, the chamber **had been** full since Tuesday, and the report **had been** in a drawer since February_.',
  'Separate **choice** from **situation**: _she made a bad choice inside a situation that four other people had already built_. That sentence is the whole skill.',
  'Give the quiet consequence its own line: _it took fourteen months and one honest paragraph_.',
  'Do not read the dates out in order. Start at the one that matters and move outwards.',
  '**Useful phrases:** Where do I start? — Not at the top. · it looks like one · a piece of paper that sat in a drawer for fourteen months · it does not say it loudly.',
  '**Pronunciation.** 🔊 **Track 3.14** Stacking is done with a **list rhythm**: three clauses, each one a little lower, with a pause between them. _The seal had been splitting for three days_ ‖ _the chamber had been full since Tuesday_ ‖ _and the report had been in a drawer since February._ Listen, then stack three of your own.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has one of the timelines below and does **not** show it. A explains it to B and C, who must each end by naming the date that matters and the obvious wrong reading. Change roles with the other timeline.'));
out.push(table(['Timeline A – a delivery that failed', 'Timeline B – a student who stopped coming'], [
  ['12 Jan · the supplier changes its payment terms by letter', '3 Oct · she misses a Monday and tells nobody'],
  ['Jan–Mar · the letter is filed unread', '10 Oct · she misses the Thursday after the first test'],
  ['2 Apr · an order is placed on the old terms', '11 Oct · four people notice and each assumes another will ring'],
  ['9 Apr · the order is held', '24 Oct · her name is still on the register'],
  ['15 Apr · the customer is told it is a transport problem', '2 Nov · the register is corrected'],
  ['22 Apr · the letter is found', '— · nobody has rung her'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write the date that matters, the obvious wrong reading, and one sentence that stacks three things with the past perfect.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Build a timeline of six dates for something that went wrong in your own work, building or family, and explain it to your partner **without showing it**. They must ask: _what is the obvious wrong reading?_, _which date matters?_, _what had already been true when the choice was made?_ and _what could have been different without anybody being braver?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Rasha explained the timeline of the lift. The obvious wrong reading is that the lift is old, and she says that is not it: the lift is nineteen years old and works. The dates are that the emergency telephone stopped working at some point before 2019 — nobody can date it, which she says is the first thing the wall tells you — that it was reported verbally at least three times between 2019 and now, that it has never once appeared in a maintenance record, that she was stuck in it for two hours in January with a four-year-old, that she wrote the first written report of the telephone on the Monday after, and that the part was ordered in March and has not come. She says the date that matters is the one nobody has: the day the telephone stopped. Everything after it is a consequence of nobody writing down the one thing everybody knew. And what could have been different without anybody being braver is that somebody could have put it in the book in 2019 in eleven seconds. So I decided to write down the thing in my own department that everybody knows and nobody has recorded, which is that the second fire door does not close, and I am going to put a date on it this week._'));
out.push(p('**Listener task:** did they give you the wrong reading first? Which date matters, and could it have been different without courage?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 6)', 7));
out.push(p('Read the text and write **one** word for each gap. Write only one word.'));
out.push(model([
  '**FOURTEEN MONTHS**  · a note for the laboratory\'s own file',
  'The seal on the second chamber was replaced on 17 April. It **(1)** ______ first been reported on 14 February of the previous year, which is fourteen months and three days.',
  'In **(2)** ______ fourteen months the report was read by nobody, because it had been sent to a post rather than to a person, and the person holding that post left in the March. No replacement was appointed, **(3)** ______ meant that the drawer belonged to nobody at all.',
  'By the time the batch was lost, the seal **(4)** ______ been visibly splitting for at least three days and the first chamber had been full since the Tuesday. The member of staff who made the final choice has recorded that choice in a sentence of her own, **(5)** ______ is more than anybody else involved has done.',
  'The seal was replaced two days **(6)** ______ that sentence was written. Fourteen months, and then forty-eight hours.',
]));
[
  '**1**  _It ___ first been reported on 14 February_',
  '**2**  _In ___ fourteen months the report was read by nobody_',
  '**3**  _No replacement was appointed, ___ meant that…_',
  '**4**  _the seal ___ been visibly splitting for at least three days_',
  '**5**  _in a sentence of her own, ___ is more than anybody else has done_',
  '**6**  _replaced two days ___ that sentence was written_',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message explaining the wall to somebody who has not seen it (50 words or more).'));
out.push(p('It is ______________ dates and it looks like a story about ______________. It is not. It is about ______________.   By the time ______________, ______________ had ______________, ______________ had ______________, and ______________ had ______________.   The date that matters is ______________, because it is the only one that could have been different without ______________.   And the quiet part: ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The wrong reading named and refused before anything else',
  'Three things stacked with the past perfect in one sentence',
  'The date that matters, with the reason it is different',
  'Choice separated from situation',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 1)', 10));
out.push(box(null, [
  'Read this email from your English friend **Sam** and the notes you have made.',
  '_"Something went wrong at my work last month and everyone is blaming one person, and I don\'t think it\'s that simple. You always say the order of things matters. How would you work out what actually happened? Sam"_',
  '**Your notes:**  •  _Tell him what to write down first_  ·  _Explain why the order matters_  ·  _Give an example from your own work_  ·  _Warn him about one thing_',
  'Write your email to Sam using **all four** notes. Write **100 words or more**.',
], C.grey, C.navy));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 3 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  When I arrived, she ___ .   a) had already left   b) has already left   c) had already leave',
  '2  By the time I got there, it ___ .   a) started   b) had started   c) was starting',
  '3  I ___ to Aleppo before that year.   a) had never been   b) had never gone   c) never had been',
  '4  At thirty I ___ been on a plane.   a) still hadn\'t   b) hadn\'t still   c) still didn\'t have',
  '5  It stopped because nobody ___ it.   a) didn\'t check   b) had checked   c) had not checked',
  '6  I had ___ spoken English to a stranger.   a) never   b) not never   c) ever not',
  '7  I ___ it since.   a) had not done   b) have not done   c) did not do',
  '8  He ___ in Kilis since the Sunday.   a) was   b) had been   c) has been',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 3 style – note completion).** 🔊 **Track 3.15** You will hear a woman explaining a timeline. Write **one or two words or a number** in each gap.'));
out.push(box('THE SECOND CHAMBER · what happened, in order', [
  'Seal first reported on: **14 (1) ______**',
  'The report was sent to a **(2) ______**, not to a person',
  'The man holding that post left in: **(3) ______**',
  'Seal visibly splitting for at least **(4) ______** days before the loss',
  'Batch lost on Saturday **(5) ______ April**',
  'Seal finally replaced **(6) ______** days after the rewritten report',
], C.lyellow, C.orange));
out.push(dlg('Track 3.15  Audio script (read after the check)', [
  ['Lubna', 'Let me take you through it in order, because the order is the whole thing. The seal was first reported on the fourteenth of February of last year. It was reported properly, in writing, by somebody who no longer works there — and that is the first problem, because the report was sent to a post and not to a person. The man who held that post left in the March, and nobody was appointed after him, so for fourteen months that piece of paper belonged to nobody at all. Now, by April of this year the seal was splitting so badly that you could see it, and it had been like that for at least three days before anything was lost. The first chamber had been full since the Tuesday with work that should have been taken out. The batch went into the second chamber on the Thursday and it was lost on Saturday the thirteenth of April. The report was rewritten on the Monday — four words became four sentences — and the seal was replaced two days after that. Fourteen months, and then two days.'],
]));
out.push(p('**C  Writing.** Something went wrong where you work or live and one person is being blamed. Write the timeline (100+ words): the obvious wrong reading, six dated events with the earlier ones stepped back, the date that matters, and what could have been different without anybody being braver.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 3)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ use _had_ + the third form to put a second past behind the first',
  '☐ leave the past perfect out when the order is already obvious',
  '☐ give a reason that was already true with _because_ + the past perfect',
  '☐ use _by the time_, _already_, _still hadn\'t_ and _never before_ in the right places',
  '☐ correct somebody\'s order of events with _actually_, and say what it changes',
  '☐ turn dated notes into three sentences instead of six',
  '☐ tell a turning point in three tenses: had never · the day · have not since',
  '☐ explain a timeline, and separate somebody\'s choice from the situation around it',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 4 – EXPERIENCE AND EVIDENCE', [
  'Unit 3 put a second past behind the first. Unit 4 comes forward to now: _I have worked here for four years_ against _I have been working here since June_ — what you have done, and how long you have been doing it.',
  'Before the next lesson: write down **three things you have done** that you would put on a page about yourself, and **one thing you have been doing** that is not finished. Unit 4 is built on the difference.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Unit 3 · Student\'s Book');
