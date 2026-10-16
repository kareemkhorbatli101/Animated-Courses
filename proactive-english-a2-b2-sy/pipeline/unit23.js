// Proactive English A2 · Syria Edition · Book 2 · Unit 23 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 23  News and Our City'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**23.1**  give somebody news',
  '**23.2**  say how new the news is',
  '**23.3**  give the detail after the news',
  '**23.4**  react to good news and bad news',
  '**23.5**  say where the news came from',
  '**23.6**  ask somebody for news',
  '**23.7**  Review & Mediate: explain a newspaper report to somebody',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**The library in Mezzeh has opened** — closed since 2013, and open again since the fourth of May. Hiba has been three times in nine days.',
  '**Omar has sold a photograph to a newspaper** — the first time anybody in this book has been paid for something they made.',
  '**Hiba has a place on the teacher-training course** in September. She has not told her mother yet, and the reason is Unit 24.',
], C.lyellow, C.orange));

// ======================= 23.1 =======================
out.push(pb());
out.push(h2('23.1  They\'ve opened the library'));
out.push(p('**Function:** giving somebody news   ·   **Grammar:** the present perfect for news   ·   **Pronunciation:** the contractions _\'ve_ and _\'s_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Take out the piece of news from your homework — the one you got from a **person** and not from the internet. Say it in one sentence. Your teacher writes four on the board.'));
out.push(board('They\'ve opened the library.', 'have / has + past participle'));
out.push(p('**b**  News or not news? **1** _The library opened in 1962._  **2** _They\'ve opened the library._  **3** _I went to the library yesterday._  **4** _They\'ve put new lights in the street._ Which two are **news**, and what makes them news?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has happened?   **A** the library is closing   **B** the library has opened again   **C** the library is moving to Mezzeh'));
out.push(p('**b**  Listen again. **1** How long was it closed?   **2** What does Hiba say about the smell?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.1  Have you heard?', [
  ['Hiba', 'Have you heard? They\'ve opened the library.'],
  ['Lina', 'Which library?'],
  ['Hiba', 'Ours. The one in Mezzeh, with the steps. It\'s open.'],
  ['Lina', 'It\'s been shut since I was at school.'],
  ['Hiba', 'Eleven years. I\'ve been three times in nine days and I have taken a book out twice, which I have not done since I was nineteen.'],
  ['Lina', 'Is it the same inside?'],
  ['Hiba', 'They\'ve painted it and they\'ve put new windows in the back room, and they have moved the desk to where you come in, so somebody sees you. But the stairs are the stairs and the smell is the smell.'],
  ['Lina', 'The smell.'],
  ['Hiba', 'You will know it when you are in the door. I have smelt it twice a week for two years of my life and I have not smelt it since 2013.'],
  ['Lina', 'Who did it? Who opened it?'],
  ['Hiba', 'Nobody has said and I have asked twice. There is a woman at the desk called Maysoun and she says "the municipality", which is what people say when they do not know either.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the present perfect for news**',
  table(['news (present perfect)', 'the same thing, as history (past simple)'], [
    ['_They **have opened** the library._', '_The library **opened** on 4 May._'],
    ['_I **have been** three times._', '_I **went** on Tuesday._'],
    ['_They **have painted** it._', '_They **painted** it in April._'],
  ], [1.4, 1.5]),
  '**Use the present perfect when the news is the _result_, not the date.** _They have opened the library_ means it is open **now**, and that is the point. Nobody saying it is telling you about May.',
  '**Form:** _have_ / _has_ + **past participle**. _I/you/we/they **have**_ · _he/she/it **has**_.',
  '⚠ ~~They have opened the library yesterday.~~ With a finished time — _yesterday, in May, on the fourth, last week_ — you must use the **past simple**: _They **opened** it on the fourth._',
  '⚠ ~~I am gone three times.~~ → _I **have been** three times._  ⚠ ~~They have open it.~~ → the **participle**, not the bare verb.',
  '**Irregular participles you will need today:** be → **been** · do → **done** · take → **taken** · put → **put** · see → **seen** · sell → **sold** · win → **won** · build → **built** · give → **given** · tell → **told**.',
  '**Practise:** Make it news.  1 The library opened. 2 They painted the walls. 3 I went twice. 4 Somebody put new windows in. 5 They moved the desk. 6 She took out a book.',
  '**Useful phrases:** Have you heard? · Which library? · It\'s been shut since I was at school. · Nobody has said and I have asked twice. · You will know it when you are in the door.',
  '**Pronunciation.** 🔊 **Track 23.2** Nobody says _they **have** opened_ in news. It is _they**\'ve** opened_ /ðeɪv/ and _she**\'s** been_ /ʃiːz/, and the stress goes on the **participle**: _they\'ve **OPENED** the library._ Listen and repeat eight.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives the news on the card with _Have you heard?_; B asks **two** questions — _which one? · how long? · who did it? · is it the same inside?_ — and A answers. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'Have you heard? They\'ve __________.'],
  ['B', 'Which __________?'],
  ['A', '__________. It\'s __________.'],
  ['B', 'It\'s been __________ since __________.'],
  ['A', '__________ years. I\'ve __________ twice and I have __________.'],
  ['B', 'Who did it?'],
  ['A', 'Nobody has said and I have asked __________.'],
]));
out.push(table(['Card A – your news', 'Card B – your news'], [
  ['They\'ve opened the library in Mezzeh.', 'They\'ve finished the road at the Mezzeh end.'],
  ['They\'ve put new lights in our street.', 'They\'ve opened a bakery where the shoe shop was.'],
  ['Somebody has painted the school gate.', 'They\'ve taken the broken bus off the corner — after four years.'],
  ['They\'ve moved the market to the other side.', 'They\'ve put a clock on the front of the municipality. It is wrong.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** write the **news** in the present perfect and the **detail** in whatever tense you hear. Which one would you tell somebody tonight?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Give your partner the real news from your homework. They ask two questions. Then they give you theirs.'));
out.push(p('**b**  Then both of you decide: is your news **news**, or is it something that happened a long time ago that you have only just heard? They are not the same thing and the second one is still worth telling.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Hiba has news: they have opened the library in Mezzeh, the one with the steps, and it has been shut for eleven years. She has been three times in nine days and she has taken a book out twice, which she has not done since she was nineteen. They have painted it, they have put new windows in the back room and they have moved the desk to the door so that somebody sees you come in, but the stairs are the stairs and the smell is the smell. Nobody has said who opened it — she has asked twice, and the woman at the desk says "the municipality", which Hiba says is what people say when they do not know either._'));
out.push(p('**Listener task:** write the one piece of news from this room that you are going to repeat today.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the board at the entrance of the centre. Answer the questions.'));
out.push(model([
  '**WHAT\'S NEW — the board by the door** · written up each Monday by whoever gets in first',
  '**The library in Mezzeh has opened.** Eleven years shut. Maysoun at the desk, and she will find you anything. Take your identity card the first time.',
  '**Omar has sold a photograph to a newspaper.** It is on page four of Thursday\'s. He has not brought it in and we have all seen it.',
  '**Hiba has a place on the teacher-training course.** September. She has asked us not to make a fuss and this is the fuss.',
  '**Two of our students have left and have not said why.** 4B has gone from thirteen to eleven. If anybody has heard from Rami or from Souad, tell somebody.',
  '**Not news, and it is going on the board anyway:** the kettle is still broken. It has been broken since February. Four people have promised to look at it.',
]));
out.push(item('1', 'How long was the library shut, and what must you take the first time?'));
out.push(item('2', 'What has happened to the lift, and why does the board mention it?'));
out.push(item('3', 'Which item is not news, and why is it on the board?'));
out.push(writers([
  'A news board: **one line of news in the present perfect** → **the detail under it** → **what the reader should do about it, if anything**. Three lines each, never more.',
  'Open every item with the **result**: _the library has opened_ · _the lift has been mended_ · _two students have left_. The date, if there is one, goes in the second line.',
  'Say plainly what is **not** known: _they have not said why_ · _nobody believes it_. A board that only carries finished news stops being read, because nothing is ever finished.',
  '⚠ Put one item on that is somebody\'s **own** news and not the building\'s. A board with only pipes and lifts on it is a notice; a board with Omar\'s photograph on it is read every Monday.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a news board for a place you know — your building, your street, your family, your work (35 words or more).'));
out.push(p('**WHAT\'S NEW — ______________** · ______________   **______________ has ______________.** ______________. ______________.   **______________ has ______________.** ______________.   **______________ have ______________ and have not ______________.** ______________. If anybody ______________, ______________.   **Not news, and it is going on the board anyway:** ______________ is still ______________. It has been ______________ since ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every item opens with the **result**, in the present perfect',
  '_have_ / _has_ + **past participle** — and the participle, not the bare verb',
  'No finished time (_yesterday, in May_) inside a present perfect sentence',
  'One item that is a person\'s own news, and one that says what nobody knows',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one item before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real board (60 words or more) for the place you actually live — six items, in the present perfect, including one piece of somebody\'s own news, one thing nobody knows the reason for, and one thing that has been broken for months.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s board as **somebody who has just moved into that street**. ★ _The item that tells me most about the place._  ✓ _One item where I cannot tell whether it is good or bad._  ? _Who is Maysoun?_ — that is, which item assumes I know somebody I do not know?'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put four boards on the wall. **Which street would you rather live in?** Then: is that because of the street, or because of who wrote the board?'));
out.push(hw('Write the news board for your street as it would have been written **five years ago** (40+ words). Then read the two boards next to each other.'));

// ======================= 23.2 =======================
out.push(pb());
out.push(h2('23.2  I\'ve already been twice'));
out.push(p('**Function:** saying how new the news is   ·   **Grammar:** present perfect + _just · already · yet · recently_   ·   **Pronunciation:** stress on _just_ and _already_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads six sentences. For each one the class says **just**, **already** or **not yet**: _the bread came out of the oven two minutes ago_ · _I went to the library on Monday and it is Tuesday_ · _the children\'s room is still shut_…'));
out.push(board('I\'ve already been twice.', 'just · already · yet · recently'));
out.push(p('**b**  Put the word in. **1** _I have ___ been twice._ (already)  **2** _They have ___ opened it._ (just)  **3** _The children\'s room hasn\'t opened ___._ (yet)  **4** _Have you been ___?_ (yet)'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Omar done?   **A** he has not been to the library yet   **B** he has already been twice   **C** he has taken a book out'));
out.push(p('**b**  Listen again. **1** What has not opened yet?   **2** What has Maysoun just finished doing?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.3  I\'ve already been twice', [
  ['Hiba', 'You should go. It\'s open.'],
  ['Omar', 'I\'ve already been twice.'],
  ['Hiba', 'You\'ve what? When?'],
  ['Omar', 'The first day. I saw the door open from the bus and I got off a stop early.'],
  ['Hiba', 'You have been twice and you have not said anything.'],
  ['Omar', 'I have just taken four photographs of the stairs, which is why I went the second time. The light at four o\'clock comes down the stairs and across the floor and it has been doing that since 1962 with nobody in there to see it.'],
  ['Hiba', 'Have you seen the back room?'],
  ['Omar', 'The one with the new windows, yes. The children\'s room hasn\'t opened yet — it\'s still full of chairs.'],
  ['Hiba', 'Maysoun says that is next month.'],
  ['Omar', 'Maysoun has just finished putting eleven years of books back on the shelves, on her own, in nine weeks. I asked her how many and she said she has not counted and she is not going to.'],
  ['Hiba', 'Has she been paid for the nine weeks?'],
  ['Omar', 'I have not asked her that and I am not going to either.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – how new is it?**',
  table(['word', 'what it means', 'where it goes'], [
    ['**just**', 'a few minutes or hours ago', '_I have **just** taken four photographs._'],
    ['**already**', 'sooner than you expected', '_I have **already** been twice._'],
    ['**yet**', 'not now, but it is coming', '_It hasn\'t opened **yet**._ · _Have you been **yet**?_'],
    ['**recently**', 'in the last weeks', '_They have painted it **recently**._'],
  ], [1, 1.6, 2]),
  '**_just_ and _already_ go between _have_ and the participle.** _I have **just** seen her._ · _They have **already** opened it._',
  '**_yet_ goes at the end**, and only in questions and negatives: _Has it opened **yet**?_ · _It hasn\'t opened **yet**._  ~~It has opened yet.~~',
  '⚠ ~~I have already been there yesterday.~~ — _already_ does not go with a finished time. _I **went** there yesterday._',
  '⚠ ~~I have yet not been.~~ → _I **haven\'t** been **yet**._  ⚠ ~~Have you already been?~~ is a different question: it means _so soon?_, and it is often what you mean.',
  '**Practise:** Put the word in the right place.  1 I have been twice. (already)  2 They have opened it. (just)  3 It hasn\'t opened. (yet)  4 Have you seen it? (yet)  5 They have painted it. (recently)  6 She has finished. (just)',
  '**Useful phrases:** You\'ve what? When? · You have been twice and you have not said anything. · it\'s still full of chairs · I have not asked her that and I am not going to either.',
  '**Pronunciation.** 🔊 **Track 23.4** _just_ is said fast and low and almost disappears — /dʒəs/ — but _already_ takes a real stress on the **second** syllable: _I\'ve **already** been._ Listen and repeat six of each.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has the list on the card. B asks _Have you … yet?_ about each thing; A answers with _already_, _just_ or _not yet_ and adds one detail. Then swap cards.'));
out.push(dlg(null, [
  ['B', 'Have you __________ yet?'],
  ['A', 'I\'ve already __________. __________.'],
  ['B', 'And have you __________?'],
  ['A', 'No, I haven\'t __________ yet. __________.'],
  ['B', 'Has __________ opened yet?'],
  ['A', 'It hasn\'t opened yet. Maysoun says __________.'],
]));
out.push(table(['Card A – your list', 'Card B – your list'], [
  ['been to the library (twice, the first day)', 'seen the new bakery (yesterday, queue to the corner)'],
  ['seen the back room (yes, the new windows)', 'walked on the new road (not yet — no surface at our end)'],
  ['taken a book out (twice)', 'been inside the new building (not yet, it is not open)'],
  ['been in the children\'s room (not yet — full of chairs)', 'met the new neighbours (just — this morning, on the stairs)'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **two** things that have already happened and the **two** that have not happened yet. Then say which one the speaker most wants to happen.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think of something new near you — a shop, a road, a building, a class, a rule. Tell your partner what has **already** happened, what has **just** happened, and what has **not** happened yet.'));
out.push(p('**b**  Swap. Then each of you say which of the "not yet" things you think will never happen, and why you think so.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Omar has already been to the library twice and he has not said a word to anybody. He went the first day, because he saw the door open from the bus and got off a stop early, and he went again to photograph the stairs — he has just taken four photographs of the light at four o\'clock, which has been coming down those stairs since 1962 with nobody in there to see it. The children\'s room has not opened yet; it is still full of chairs, and Maysoun says next month. And Maysoun has just finished putting eleven years of books back on the shelves, on her own, in nine weeks. He asked her how many and she said she has not counted and is not going to. He has not asked whether she has been paid, and he says he is not going to._'));
out.push(p('**Listener task:** write one thing in this city that has not happened yet and that you still expect.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the sheet Maysoun has pinned up inside the library door. Answer the questions.'));
out.push(model([
  '**WHERE WE ARE** — Mezzeh Public Library · 4 May · M. Sabbagh',
  '**Done.** The main room has been painted and the shelves are back up. The windows in the back room have been replaced. The desk has been moved to the door, so that somebody sees you when you come in — this was the first thing I asked for and the last thing I got.',
  '**Just finished.** The books are back on the shelves. All of them. They have been in forty-one boxes in the basement since 2013 and some of the boxes were wet. I have not counted what was lost and I am not going to; I have counted what is on the shelves and it is enough to open with.',
  '**Not yet.** The children\'s room has not opened — still full of the chairs from the main room. The lending cards are not ready, so for now I write your name in a book, which is how it was done here until 1998. The lift has never worked and nobody has promised me anything.',
  '**What I have not been able to find out:** who paid for the paint. I have asked the municipality three times and had three different answers, and the paint is on the walls, so I have stopped asking.',
  '**Open** nine to two, and four to seven, every day but Friday. Bring your identity card the first time. If you have a book of ours from before 2013, bring it; nobody is going to say anything.',
]));
out.push(item('1', 'What was the first thing Maysoun asked for, and when did she get it?'));
out.push(item('2', 'Why does she not write her name on lending cards?'));
out.push(item('3', 'What has she stopped asking about, and why?'));
out.push(writers([
  'A "where we are" sheet: **Done** → **Just finished** → **Not yet** → **What I have not been able to find out** → **what the reader should do**.',
  'The three headings do the grammar for you. Under **Done** everything is a present perfect; under **Not yet** everything is a negative with _yet_; and the reader can see in four seconds which is which.',
  'Put the **honest** item under _Not yet_: _the lift has never worked and nobody has promised me anything_. A list with nothing unfinished on it is not believed.',
  '⚠ The last line is the one people act on: _bring your identity card_ · _if you have a book of ours from before 2013, bring it; nobody is going to say anything._ Say what happens to the reader, not only what has happened to you.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a "where we are" sheet for something you are in the middle of (35 words or more).'));
out.push(p('**WHERE WE ARE** — ______________ · ______________   **Done.** ______________ has been ______________. ______________.   **Just finished.** ______________ has just ______________. ______________.   **Not yet.** ______________ has not ______________ yet. ______________. ______________ has never ______________.   **What I have not been able to find out:** ______________. I have asked ______________ and ______________.   **______________:** ______________. If you ______________, ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Three headings: Done · Just finished · Not yet',
  '_just_ and _already_ **between** _have_ and the participle · _yet_ at the **end**',
  'One honest item under _Not yet_, and one thing you have not been able to find out',
  'A last line saying what the reader should do',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one line before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real sheet (60 words or more) for something **you** are in the middle of — a flat, a course, a repair, a business, an application, a room you are clearing. Done, just finished, not yet, and the thing nobody will tell you.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s sheet as **somebody who has to take this over from you tomorrow**. ★ _The line that tells me where I actually am._  ✓ _One thing under "Done" that I think is not done._  ? _How long has the thing under "never" been like that?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Whose "not yet" list is longest?** Then the real question: how many of those have been "not yet" for more than a year? Count them, and then ask what the oldest one is.'));
out.push(hw('Write the **"not yet" list for your own life** (40+ words) — five things, with how long each one has been on it. Bring it to Unit 24; you will need it.'));

// ======================= 23.3 =======================
out.push(pb());
out.push(h2('23.3  It opened on the fourth'));
out.push(p('**Function:** giving the detail after the news   ·   **Grammar:** present perfect → past simple   ·   **Pronunciation:** the jump from _\'s_ to the past simple'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher gives a piece of news; the class asks _when? · who? · how much? · how?_ The answers all come back in the **past simple**. Do it twice and the pattern is visible.'));
out.push(board('They\'ve sold it. They sold it on Tuesday.', 'news = present perfect · detail = past simple'));
out.push(p('**b**  Add the detail. **1** _They\'ve opened the library._ (on the fourth of May)  **2** _Omar has sold a photograph._ (for twenty-five thousand)  **3** _Hiba has a place on the course._ (she heard on Sunday)'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has happened to Omar?   **A** a newspaper has bought one of his photographs   **B** a newspaper has asked him for photographs   **C** he has been given a job at a newspaper'));
out.push(p('**b**  Listen again. **1** How many did he send, and how many did they take?   **2** How much did they pay, and what does he say about the money?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.5  When exactly?', [
  ['Nour', 'Say it again.'],
  ['Omar', 'A newspaper has bought one of my photographs.'],
  ['Nour', 'When? How? Start at the beginning.'],
  ['Omar', 'They rang on Tuesday. A man asked whether I had pictures of the library — somebody showed him the stairs one. I sent four on Tuesday night. They took one and they printed it on Thursday, on page four, and they put my name under it.'],
  ['Nour', 'How much?'],
  ['Omar', 'Twenty-five thousand.'],
  ['Nour', 'For one photograph.'],
  ['Omar', 'For one photograph that I took in eleven minutes on a Tuesday afternoon because I got off the bus a stop early. I have thought about that for three days and I cannot make it make sense.'],
  ['Nour', 'Have you shown your father?'],
  ['Omar', 'I bought four copies on Thursday morning and I gave him one at lunch, folded at page four, and I did not say anything. He read it, and he looked at it, and he said "this is the staircase at the library" — and then he said "did you do this?" and I said yes.'],
  ['Nour', 'And?'],
  ['Omar', 'And he has put it on the wall in the workshop, where the licence is. He has not mentioned it since and it has been there for a week.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the news, then the detail**',
  table(['the news — present perfect', 'the detail — past simple'], [
    ['_A newspaper **has bought** a photograph._', '_They **rang** on Tuesday. I **sent** four._'],
    ['_They **have opened** the library._', '_It **opened** on the fourth._'],
    ['_He **has put** it on the wall._', '_He **read** it at lunch and **said** nothing._'],
  ], [1.4, 1.5]),
  '**This is the shape of almost every piece of news in English.** One present perfect sentence to say **what has happened**, and then the past simple for **everything that happened** — the day, the number, the price, the words people said.',
  '⚠ Once you are in the detail, **stay** in the past simple. ~~They have rung on Tuesday and I have sent four.~~ → _They **rang** on Tuesday and I **sent** four._',
  '⚠ And do not go back. After _I sent four_, you do not return to the present perfect for the same story unless you are summing it up again at the end.',
  '**The question that moves you from one to the other** is _when?_ or _how?_ — and in real speech it is usually _start at the beginning_.',
  '**Practise:** News, then detail.  1 They\'ve opened the library. (4 May) 2 He\'s sold a photograph. (25,000, Thursday) 3 She\'s got a place on the course. (heard on Sunday) 4 They\'ve mended the lift. (two men, nine days ago) 5 Two students have left. (in March, no reason)',
  '**Useful phrases:** Say it again. · Start at the beginning. · For one photograph. · I have thought about that for three days and I cannot make it make sense. · He has not mentioned it since.',
  '**Pronunciation.** 🔊 **Track 23.6** Listen to the jump: _a newspaper**\'s** bought it_ → _they **rang** on Tuesday_. The first is fast and squeezed, the second is slower and the verb is clear. Say both pairs after the recording.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives the news from the card in one present-perfect sentence. B says _start at the beginning_. A then gives four details in the past simple, using the notes. B asks one more question. Then swap cards.'));
out.push(dlg(null, [
  ['A', '__________ has __________.'],
  ['B', 'When? How? Start at the beginning.'],
  ['A', 'They __________ on __________. I __________. They __________ and they __________.'],
  ['B', 'How much / how many / how long?'],
  ['A', '__________.'],
  ['B', 'For __________.'],
  ['A', 'For __________ that I __________ in __________ because __________.'],
]));
out.push(table(['Card A – the news and the notes', 'Card B – the news and the notes'], [
  ['A newspaper has bought one of my photographs. · rang Tuesday · sent four · took one · page four Thursday · 25,000', 'They\'ve mended the lift. · two men came on the 2nd · worked nine days · nobody ordered it · it still smells of oil'],
  ['Hiba has a place on the teacher-training course. · applied in February · interview on the 9th · heard on Sunday · 40 places, 300 applied', 'My cousin has opened a bakery. · took the shop in January · opened on the 1st · queue to the corner on day one · sold out by ten'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **one** present-perfect sentence and then the **four** past-simple details. Did the speaker stay in the past simple all the way through?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Give your partner your real news in one present-perfect sentence. They say _start at the beginning_. Then tell the whole story in the past simple: when, who, how, how much, and what somebody said.'));
out.push(p('**b**  Swap. Then both of you find the place in the other\'s story where they went back into the present perfect when they should not have.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _A newspaper has bought one of Omar\'s photographs. They rang on Tuesday, because somebody showed a man there the picture of the library stairs; Omar sent four that night, they took one, printed it on Thursday on page four and put his name under it. They paid twenty-five thousand, for a photograph he took in eleven minutes because he got off the bus a stop early, and he says he has thought about that for three days and cannot make it make sense. He bought four copies on Thursday and gave his father one at lunch, folded at page four, and said nothing. His father read it, said "this is the staircase at the library", then asked "did you do this?" — and he has put it on the workshop wall where the licence is. He has not mentioned it since and it has been there a week._'));
out.push(p('**Listener task:** write the sentence from today that you would like somebody to say about you.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Omar writes on the back of the photograph. Answer the questions.'));
out.push(model([
  '**For the wall · the library stairs · page four, Thursday 9 May**',
  'A newspaper has bought this photograph. It is the first thing I have made that anybody has paid for.',
  'This is what happened. I saw the library door open from the bus on the fourth of May and got off a stop early. I went up the stairs, the four o\'clock light was coming down them and across the floor, and I took eleven photographs in eleven minutes and then went to work.',
  'I showed the stairs one to two people. One of them showed it to a man at the newspaper, and on Tuesday the fourteenth he rang and asked whether I had pictures of the library. I sent four that night; they took this one, printed it on Thursday on page four and paid twenty-five thousand pounds.',
  'The part I keep thinking about is this. I did not plan it, I was not asked for it, and I nearly stayed on the bus. The light has come down those stairs at four o\'clock since 1962, and for eleven years there was nobody inside to see it.',
  '**What I have learned, and I am writing it down so that I do not forget it:** take the photograph. Show it to two people. That is the whole of it.',
]));
out.push(item('1', 'What date did he take the photograph, and what date did the newspaper ring?'));
out.push(item('2', 'How did the newspaper come to hear about him?'));
out.push(item('3', 'What are the two things he says he has learned?'));
out.push(writers([
  'A note for the wall: **the news, in one present-perfect sentence** → **"this is what happened" in the past simple, with dates** → **the part you keep thinking about** → **what you have learned, in one line**.',
  'Mark the change of tense with a **sentence of its own**: _This is what happened._ After that line the reader expects dates and the past simple, and you can give six facts in two sentences without it reading like a list.',
  'Keep the **numbers**: eleven photographs, eleven minutes, four sent, one taken, page four, twenty-five thousand. The numbers are what makes it true rather than a feeling about a day.',
  '⚠ End with the thing you are afraid of forgetting, in the shortest sentence on the page: _take the photograph. Show it to two people._ That is the line somebody else can use.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a note for the wall about something that has happened to you (35 words or more).'));
out.push(p('**For the wall · ______________ · ______________**   ______________ has ______________. It is the first ______________ that ______________.   This is what happened. I ______________ on ______________ and I ______________. I ______________ and then ______________.   I showed it to ______________. On ______________ they ______________. They ______________ and they ______________.   The part I keep thinking about is this. I did not ______________, and I nearly ______________.   **What I have learned:** ______________. ______________. That is the whole of it.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'One present-perfect sentence for the news, at the top',
  '_This is what happened._ — and then the **past simple** all the way',
  'At least four numbers or dates',
  'A last line short enough for somebody else to use'
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the first line and the last line only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real note for the wall (60 words or more) about the best thing that has happened to you in the last two years. News in the present perfect, the whole story in the past simple with dates and numbers, the part you keep thinking about, and one line you do not want to forget.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s note as **yourself in ten years**. ★ _The line I would still want on a wall._  ✓ _One place where the tense goes back and should not._  ? _What did the person who helped you actually do?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read six **last lines** aloud, with nothing round them. **Which one is true for more than one person in this room?** Keep that one on the board for the rest of the unit.'));
out.push(hw('Ask somebody older than you for the news of their life in one present-perfect sentence, and then for the whole story. Write it down (40+ words), with their dates and their numbers, not yours.'));

// ======================= 23.4 =======================
out.push(pb());
out.push(h2('23.4  That\'s wonderful — tell me everything'));
out.push(p('**Function:** reacting to news   ·   **Grammar:** short reactions + a follow-up question   ·   **Pronunciation:** the intonation of reactions'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads six pieces of news — three good, three bad, one of them small. The class reacts in one word or one phrase, fast, with no thinking time. Then do it again and add a **question** to each.'));
out.push(board('That\'s wonderful! Tell me everything.', 'react + then ask'));
out.push(p('**b**  Good or bad? Choose the reaction. **1** _I\'ve got a place on the course._  **2** _They\'ve closed the shop on the corner._  **3** _My brother has gone to Germany._  **4** _We\'ve mended the lift._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many pieces of news are there in the conversation?   **A** one   **B** two   **C** three'));
out.push(p('**b**  Listen again. **1** Why has Hiba not told her mother?   **2** What is Lina\'s news, and why is it both good and bad?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.7  Three pieces of news in one evening', [
  ['Hiba', 'I have a place on the teacher-training course. September.'],
  ['Lina', 'Hiba! That\'s wonderful. Tell me everything — when did you hear?'],
  ['Hiba', 'Sunday. Three hundred applied and there are forty places.'],
  ['Lina', 'Does your mother know?'],
  ['Hiba', 'Not yet.'],
  ['Lina', 'Why not?'],
  ['Hiba', 'Because the course is four days a week and I will have to leave the shop, and my mother has worked in that shop since she was seventeen. I will tell her. I am choosing the evening.'],
  ['Lina', 'She will be prouder than you think and she will say nothing for two days. That is what mine did.'],
  ['Hiba', 'What was yours?'],
  ['Lina', 'My news is smaller and it is both things at once. Rana is leaving — she has been given the Aleppo office.'],
  ['Hiba', 'Oh — that\'s a shame. You two have worked together for three years.'],
  ['Lina', 'It is a shame for me and it is the right thing for her, and I am not going to put the first part in front of the second. And the other half is that I am doing her job from June.'],
  ['Hiba', 'Lina! Why is that the second half?'],
  ['Lina', '(laughs) Because I have only known it since Thursday and I have not got used to saying it yet.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Reacting to news**',
  table(['good news', 'bad news', 'surprising news'], [
    ['_**That\'s wonderful!**_\n_**That\'s great news.**_\n_**I\'m so glad.**_\n_**Well done!**_',
     '_**That\'s a shame.**_\n_**I\'m sorry to hear that.**_\n_**Oh no.**_\n_**That\'s hard.**_',
     '_**Really?**_\n_**You\'re joking.**_\n_**I don\'t believe it.**_\n_**Since when?**_'],
  ], [1, 1, 1]),
  '**A reaction on its own is not enough — always add a question.** _That\'s wonderful! **When did you hear?**_ · _I\'m sorry to hear that. **What will you do?**_ The question is what tells the person you mean it.',
  '**The questions that work:** _Tell me everything._ · _When did you hear?_ · _Since when?_ · _Does your mother know?_ · _What will you do?_ · _How do you feel about it?_',
  '⚠ ~~Congratulations~~ is for an achievement, not for every piece of good news. _Congratulations_ on a place on a course or a wedding; _that\'s wonderful_ for news about somebody else.',
  '⚠ ~~I\'m sorry for hear that.~~ → _I\'m sorry **to** hear that._  ⚠ ~~That\'s a pity for you.~~ → _That\'s a shame._',
  '**When news is both things at once**, say the good part first and then the other half: _it is a shame for me and it is the right thing for her_. Putting the complaint first changes what the listener hears.',
  '**Practise:** React and then ask.  1 I\'ve got a place on the course. 2 They\'ve closed the shop. 3 My brother has gone abroad. 4 I\'ve sold a photograph. 5 Rana is leaving. 6 They\'ve mended the lift.',
  '**Pronunciation.** 🔊 **Track 23.8** Reactions live in the **voice**, not the words. _That\'s wonderful_ ↗↘ starts high and falls; _that\'s a shame_ ↘ is low and flat and slow. Said the wrong way round, both sound like the opposite. Listen and copy six.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives the news on the card, one at a time; B reacts and then asks a question; A answers in one sentence. Then swap cards. One of the items on each card is **both** good and bad.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '__________! __________?'],
  ['A', '__________.'],
  ['B', 'Does __________ know?'],
  ['A', 'Not yet. __________.'],
  ['B', 'And how do you feel about it?'],
  ['A', '__________ and __________, and I am not going to put the first part in front of the second.'],
]));
out.push(table(['Card A – your news', 'Card B – your news'], [
  ['I\'ve got a place on the teacher-training course.', 'I\'ve been given a job in Homs. I start in August.'],
  ['They\'ve closed the shop on the corner. Thirty-one years.', 'My sister has had a daughter. Four days ago.'],
  ['My colleague is leaving and I am doing her job.', 'My landlord has sold the building. Nobody has told us anything.'],
  ['They\'ve mended the lift.', 'I\'ve finished the course. I have nothing to do on Thursdays.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **reaction** and the **question** for each piece of news. Which reaction sounded most real, and was it the words or the voice?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Give your partner three pieces of **real** news from the last year — one good, one bad, one that is both. They must react and then ask. Then they give you theirs.'));
out.push(p('**b**  Then each of you say which piece of news you have never told anybody, and why — not the news itself, only the reason.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _There were three pieces of news in one evening. Hiba has a place on the teacher-training course in September; she heard on Sunday, and three hundred applied for forty places. Her mother does not know yet, because the course is four days a week and Hiba will have to leave the shop, and her mother has worked there since she was seventeen. Lina said she will be prouder than Hiba thinks and will say nothing for two days, because that is what her own mother did. Lina\'s news is Rana: she has been given the Aleppo office and she is leaving, which Lina says is a shame for her and the right thing for Rana, and she is not going to put the first part in front of the second. And the second half is that Lina is doing Rana\'s job from June, which she has known only since Thursday._'));
out.push(p('**Listener task:** write the news you heard today that you reacted to badly, and what you should have said.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the four messages Hiba gets after she tells six people. Answer the questions.'));
out.push(model([
  '**1 · Lina, Sunday 21:40.** Hiba! That\'s wonderful and I am not surprised, which you will not believe. Forty of three hundred. When do you start, and what will you do about Thursdays? Tell me when you have told your mother and I will ring her myself.',
  '**2 · Omar, Sunday 22:15.** Well done. Genuinely. One question: are you going to stop coming to the class? Because if you are, say so now and we will do something about it, and if you are not, say that too, because four people will ask me tomorrow.',
  '**3 · her cousin Souad, Monday 08:02.** I\'m so glad for you. I applied for that course in 2019 and did not get in, and I have thought about it every September since. Go — and find out who marks the applications, because I am going to apply again.',
  '**4 · Ustaz Nabil, Monday 19:30.** I heard this morning. Congratulations — this one is the right word for it. I taught for thirty-one years, and the only thing I would tell anybody starting is that the first year is the worst year and it is not a sign of anything. Keep the letter they sent you.',
]));
out.push(item('1', 'Which of the four says "congratulations", and why does he say it is the right word?'));
out.push(item('2', 'What does Omar want to know, and why does he want to know it now?'));
out.push(item('3', 'What does Souad ask Hiba to find out for her?'));
out.push(writers([
  'A message reacting to news: **the reaction in the first four words** → **one thing that is only true because it is you saying it** → **one question** → **one thing you will do**.',
  'The reaction goes **first**, before anything about you. Every one of the four messages does this, and it costs four words.',
  'Add the thing only **you** can add: _I applied for that course in 2019_ · _I taught for thirty-one years_. That is what makes the message something other than politeness.',
  '⚠ End with an action, not a wish: _I will ring her myself_ · _say so now and we will do something about it_ · _keep the letter they sent you_. "Good luck" is where a message goes to be forgotten.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write two messages reacting to news — one to good news and one to bad (35 words or more in total).'));
out.push(p('**To good news:** ______________! ______________. ______________ of ______________. ______________? And ______________? Tell me when ______________ and I will ______________.   **To bad news:** ______________. ______________. I ______________ in ______________, so ______________. ______________? ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The reaction is in the **first four words**',
  '_I\'m sorry **to** hear that_ · _Congratulations_ only for an achievement',
  'One thing that is true only because **you** are the one writing',
  'An action at the end, not a wish',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the first four words of their messages only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real message (60 words or more) to somebody whose news you have heard and not answered. React, add the thing only you can add, ask one question, and say what you will do.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as **the person who got the news**. ★ _The line that made me feel somebody had heard me._  ✓ _One place where it becomes about you._  ? _Are you really going to do the thing at the end?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Send them.** Then: how many of these pieces of news are more than a month old? That number is not about politeness; it is about what everybody thinks somebody else has already said.'));
out.push(hw('Send the message and write down what comes back (40+ words). If nothing comes back, write that, and write what you think the silence means.'));

// ======================= 23.5 =======================
out.push(pb());
out.push(h2('23.5  According to the paper'));
out.push(p('**Function:** saying where the news came from   ·   **Grammar:** _according to_ · _it says (that)_ · _apparently_   ·   **Pronunciation:** stress in _according to_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads four statements about the city. For each, the class asks: _who says so?_ Then the teacher gives the source, and the class decides how much they believe it.'));
out.push(board('According to the paper, it opens in June.', 'according to · it says that · apparently'));
out.push(p('**b**  Give the source. **1** the newspaper  **2** a man who works there  **3** everybody in your building  **4** the municipality\'s own notice. Which of the four would you repeat, and which would you repeat **with the source attached**?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are they disagreeing about?   **A** when the road opens   **B** whether the road is finished   **C** who is paying for the road'));
out.push(p('**b**  Listen again. **1** What does the newspaper say?   **2** What does the man who works there say?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.9  Who says so?', [
  ['Omar', 'The road opens next month. It\'s finished.'],
  ['Nour', 'Who says so?'],
  ['Omar', 'According to the paper. Thursday\'s, page two.'],
  ['Nour', 'What does it actually say? The words.'],
  ['Omar', '"The Mezzeh road is expected to open to traffic in June."'],
  ['Nour', 'Expected by whom?'],
  ['Omar', 'It does not say.'],
  ['Nour', 'Right. My cousin\'s husband has been on that site since January. According to him there are two hundred metres at our end with no surface, and apparently the machine that lays it is in Tartous and has been for five weeks.'],
  ['Omar', 'So the paper is wrong.'],
  ['Nour', 'The paper is not wrong. The paper says it is **expected** to open in June, and somebody does expect that, and it is probably the same person who told the paper. Those are two different sentences: "it opens in June" and "according to the municipality it is expected to open in June".'],
  ['Omar', 'That is a very long way of saying nothing.'],
  ['Nour', 'It is a short way of saying exactly how much is known. And when you tell somebody at work, say which one you have — the paper or the man on the site. The person listening has the right to know which they are getting.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – giving the source**',
  table(['you say', 'and it means'], [
    ['_**According to** the paper, it opens in June._', 'the paper said it — not me'],
    ['_**It says** (that) the road is finished._', 'these are the paper\'s words'],
    ['_**Apparently** the machine is in Tartous._', 'somebody told me and I cannot check it'],
    ['_**I heard** it from a man on the site._', 'a person, named or not'],
  ], [1.6, 1.3]),
  '**_according to_ + a person or a thing**, never a sentence: _according to **the paper**_ · _according to **him**_. ~~According to that the road is finished.~~',
  '⚠ ~~According to me…~~ is wrong in English — for your own opinion say _**I think**…_ Quote the **words**, too: _it says it is **expected** to open in June_. The difference between _opens_ and _is expected to open_ is the whole of this cycle.',
  '**_apparently_** goes at the start or after the subject, and it tells the listener you are passing something on: _**Apparently** the machine is in Tartous._ · _The machine is **apparently** in Tartous._',
  '**Practise:** Add the source.  1 The road opens in June. (the paper) 2 The machine is in Tartous. (apparently) 3 There are no lending cards yet. (the woman at the desk) 4 The rent is going up. (I heard) 5 It will cost two million. (the notice on the door)',
  '**Useful phrases:** Who says so? · What does it actually say? The words. · Expected by whom? · Those are two different sentences. · say which one you have.',
  '**Pronunciation.** 🔊 **Track 23.10** _according to_ is three words said as one, with the stress in the middle: /əˈkɔːdɪŋ tə/ — and the _to_ is weak. Listen and repeat with six different sources.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a statement from the card; B asks _who says so?_; A gives the source; B then asks _what does it actually say?_ and A reads the exact words. Then both decide how much they would repeat. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'Who says so?'],
  ['A', 'According to __________.'],
  ['B', 'What does it actually say? The words.'],
  ['A', '"__________."'],
  ['B', 'So it does not say __________. It says __________.'],
  ['A', 'Would you repeat it?'],
  ['B', 'I would repeat it with __________ attached.'],
]));
out.push(table(['Card A – statement · source · exact words', 'Card B – statement · source · exact words'], [
  ['The road opens in June. · the paper · "the Mezzeh road is expected to open to traffic in June"', 'The rent is going up fifteen per cent. · the committee · "rents will be reviewed annually from 1 July"'],
  ['The children\'s room opens next month. · Maysoun · "that is what I have been told, and I was told April as well"', 'The centre is moving to Qudsiya. · my cousin · "a woman whose sister works there said so"'],
  ['Two students have been thrown out. · a student in 4B · "they have not been in for three weeks"', 'The bakery is closing. · the son · "my father is having an operation and will be shut five weeks"'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **statement** and then the **exact words**. How far apart are they? Put the pair that is furthest apart on the board.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner three things you believe about this city. For each one they ask _who says so?_ and you must answer honestly, including _I do not know where I got it_ if that is the answer.'));
out.push(p('**b**  Swap. Then both of you pick the one you would be most embarrassed to have repeated at work without the source.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Omar said the road opens next month and that it is finished. Nour asked who says so, and the answer is the newspaper — Thursday\'s, page two. But the words are "the Mezzeh road is expected to open to traffic in June", and the paper does not say expected by whom. According to her cousin\'s husband, who has been on that site since January, there are two hundred metres at the Mezzeh end with no surface, and apparently the machine that lays it has been in Tartous for five weeks. Nour says the paper is not wrong: "it opens in June" and "it is expected to open in June" are two different sentences, and the second says exactly how much is known. And when you tell somebody at work, say which one you have — the paper or the man on the site._'));
out.push(p('**Listener task:** write the thing you have repeated this week without knowing where it came from.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the three versions of one piece of news. Answer the questions.'));
out.push(model([
  '**ONE PIECE OF NEWS, THREE VERSIONS** · collected by Nour, for the message book',
  '**1 · What is said in the workshop.** "The road\'s finished. It opens next month."',
  '**2 · What the newspaper says**, Thursday 9 May, page two. "Work on the Mezzeh road is substantially complete and the road is expected to open to traffic in June." The sentence contains "substantially" and "expected", and both are doing work.',
  '**3 · What a man who works on it says**, asked on Friday. "The bridge is finished. The road is not. There are about two hundred metres at the Mezzeh end with no surface, and the machine that lays it has been in Tartous for five weeks. Nobody on the site believes June. Ask me again in August."',
  '**What I would say at work:** the bridge is finished and the road is not. According to the paper it is expected to open in June; according to a man on the site there are two hundred metres with no surface. If you need the road, plan for August and be pleased in June.',
  '**And the rule I am putting in the book:** when the paper says "expected", somebody expects it and the paper has not said who. That word is not a detail. It is the whole sentence.',
]));
out.push(item('1', 'Which two words in the newspaper version change its meaning?'));
out.push(item('2', 'What does the man on the site say when he is asked about June?'));
out.push(item('3', 'What does Nour say somebody should do if they need the road?'));
out.push(writers([
  'A three-version note: **what is being said** → **what the written source says, quoted exactly** → **what somebody who knows says** → **what you would say yourself** → **the rule for next time**.',
  'Quote the written source **word for word**, including the words that weaken it, and then point at them: _the first sentence contains "substantially" and "expected"_.',
  'Give your own version as **advice with a number in it**: _plan for August and be pleased in June_. A note that stops at "nobody knows" has not helped anybody.',
  '⚠ Name the **mechanism** in the last line, not the people: _when the paper says "expected", somebody expects it and the paper has not said who_. That sentence is reusable; "the newspapers are useless" is not.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a three-version note about something being said where you live (35 words or more).'));
out.push(p('**ONE PIECE OF NEWS, THREE VERSIONS** · ______________   **1 · What is said:** "______________."   **2 · What ______________ says:** "______________." The word ______________ is doing the work.   **3 · What ______________ says**, asked on ______________: "______________."   **What I would say:** according to ______________, ______________; according to ______________, ______________. If you ______________, ______________.   **And the rule:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The written source is quoted **word for word**',
  '_according to_ + a person or a thing · _apparently_ for what you cannot check',
  'Your own version gives advice with a number or a date in it',
  'A last line naming the mechanism, not the people',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read version 1 and version 3 next to each other.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full three-version note (60 words or more) about something everybody around you believes — a road, a building, a rule, a price, a job. Find the written source and quote it; find a person who knows and ask them.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s note as **somebody who has to make a decision this week**. ★ _The version I would act on, and why._  ✓ _One place where "apparently" is doing more work than it can carry._  ? _Did you actually ask the person, or is version 3 what you expect them to say?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of you found a written source at all?** Then: how many found a weakening word in it — _expected, likely, planned, under consideration, in the programme_? Collect them on the board.'));
out.push(hw('Find the written source for something you believe and quote it exactly (40+ words). Underline every word in it that means "not yet".'));

// ======================= 23.6 =======================
out.push(pb());
out.push(h2('23.6  Has it opened yet?'));
out.push(p('**Function:** asking somebody for news   ·   **Grammar:** question formation across tenses   ·   **Pronunciation:** question intonation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher says six statements. The class turns each one into a question, fast: _they have opened it_ → _have they opened it?_ · _he sold a photograph_ → _did he sell a photograph?_ · _she is leaving_ → _is she leaving?_'));
out.push(board('Has it opened yet?', 'Have you…? · Did you…? · What\'s happened?'));
out.push(p('**b**  Which question gets more than one word? **1** _Is there any news?_  **2** _What\'s happened since I was last here?_  **3** _Everything all right?_  **4** _What have I missed?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is asking for the news?   **A** Mr Fouad, coming back after two weeks   **B** Nour, coming back after two weeks   **C** Omar, on the telephone'));
out.push(p('**b**  Listen again. **1** What does Nour give him first?   **2** What is the one thing she says she got wrong?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.11  What have I missed?', [
  ['Mr Fouad', 'Right. What have I missed?'],
  ['Nour', 'Sixty-one messages, and the eleven that matter are on top. Those first, or the news?'],
  ['Mr Fouad', 'The news. Has anything broken?'],
  ['Nour', 'Nothing has broken. The lift has been mended, which nobody ordered and nobody understands.'],
  ['Mr Fouad', 'Has anybody collected without a ticket?'],
  ['Nour', 'Nobody. Two tried, and one was Abu Hani, and I said no to him, and he has not spoken to me since.'],
  ['Mr Fouad', 'He will. Did you take any new work?'],
  ['Nour', 'Nothing over one day, as you said. I turned down a four-day job on the eighth and I have thought about it every day since, because it was two hundred thousand.'],
  ['Mr Fouad', 'You were right and you will be unsure for a week. What else has happened?'],
  ['Nour', 'Omar has sold a photograph to a newspaper. And the one thing I got wrong: a man rang on the Tuesday, would not give a name, and I did not ring the number back the next morning. When I did on the Thursday it was dead.'],
  ['Mr Fouad', 'What did he say?'],
  ['Nour', 'That you know what it is about.'],
  ['Mr Fouad', '(after a moment) I do. And you did not get that wrong — I would not have rung back either.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking for news**',
  table(['the question', 'what it gets you'], [
    ['_**What have I missed?**_', 'everything, in their order of importance'],
    ['_**Has anything** broken / changed / happened?_', 'the one thing they are worried about'],
    ['_**Has** it opened **yet**?_', 'yes, no, or not yet'],
    ['_**What else** has happened?_', 'the second half, which is where the real news is'],
  ], [1.5, 1.4]),
  '**The question has to match the tense of the answer you want.** _Has anything happened?_ (news) · _Did you ring him?_ (one finished action, with a time) · _Are you going to tell her?_ (the future).',
  '⚠ Word order: _**Have** you heard?_ ~~You have heard?~~ · _**Did** he sell it?_ ~~He sold it?~~ — the auxiliary comes first, and that is the whole of question formation in English.  ⚠ ~~Did you took?~~ → _Did you **take**?_',
  '**Open questions get news; closed questions get confirmation.** _Everything all right?_ gets you _yes_; _what have I missed?_ gets you sixty-one messages and a man with no name.',
  '**And ask the second question:** _What else has happened?_ People give you the safe news first. The thing they are least comfortable with comes out second, and only if you ask.',
  '**Practise:** Make the question.  1 something / happen 2 the library / open / yet 3 you / take / any new work 4 anybody / ring 5 what / I / miss 6 what else / happen',
  '**Useful phrases:** What have I missed? · Has anything broken? · What else has happened? · I have thought about it every day since. · You were right and you will be unsure for a week.',
  '**Pronunciation.** 🔊 **Track 23.12** _Yes/no_ questions rise at the end: _Has it opened yet?_ ↗  Questions with a question word fall: _What have I missed?_ ↘  Get them the wrong way round and a question sounds like doubt. Listen and repeat eight.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has been away for two weeks and asks the five questions on the card, in order, ending with _what else has happened?_ B answers from their own life. Then swap.'));
out.push(dlg(null, [
  ['A', 'What have I missed?'],
  ['B', '__________. Do you want __________ or __________?'],
  ['A', 'Has anything __________?'],
  ['B', 'Nothing has __________. __________.'],
  ['A', 'Did __________?'],
  ['B', '__________. I __________ and I have __________ since.'],
  ['A', 'What else has happened?'],
  ['B', '__________. And the one thing I got wrong: __________.'],
]));
out.push(table(['Card A – your five questions', 'Card B – your five questions'], [
  ['What have I missed?', 'What\'s happened since Thursday?'],
  ['Has anything broken?', 'Has anybody been asking for me?'],
  ['Did you take any new work?', 'Did you have to decide anything on your own?'],
  ['Has anybody rung who would not give a name?', 'Has the thing we were waiting for arrived yet?'],
  ['What else has happened?', 'And what else?'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the answer to the **last** question. In most pairs the best news, or the worst, comes out only after _what else_.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Your partner has been away from your life for two weeks. Let them ask; answer honestly, in order of importance, and keep one thing for _what else has happened?_'));
out.push(p('**b**  Swap. Then both of you say which question you would like somebody to ask you more often.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Fouad came back after two weeks and asked what he has missed. Nour gave him the news before the messages: nothing has broken, the lift has been mended, which nobody ordered and nobody understands, and nobody has collected without a ticket. Two tried, one was Abu Hani, she said no to him and he has not spoken to her since. She turned down a four-day job on the eighth, as she was told to, and has thought about it every day since because it was two hundred thousand; he said she was right and will be unsure for a week. And the one thing she got wrong is the man with no name: she did not ring the number back the next morning, and by Thursday it was dead. Mr Fouad said he knows what it is about, and that she did not get it wrong, because he would not have rung back either._'));
out.push(p('**Listener task:** write the question you are going to ask somebody this week.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Nour writes before Mr Fouad comes back. Answer the questions.'));
out.push(model([
  '**TWO WEEKS — the handover back** · Nour, for Mr Fouad, 20th',
  '**Read this before the messages.** They are sixty-one, and the eleven that matter are clipped on top.',
  '**Nothing has broken and nobody has been hurt.** That is the first line because it is the first thing anybody wants.',
  '**What has happened.** The lift has been mended — nobody here ordered it and nobody knows who did. Omar has sold a photograph to a newspaper, page four on the 9th. The message book is working; I have written in it sixty-one times.',
  '**What I decided.** I turned down a four-day job on the 8th, two hundred thousand, because of your note. I said no to Abu Hani collecting without a ticket on the 11th, and he has not spoken to me since. I rang you twice at ten and neither was urgent; I would do both again.',
  '**What I got wrong.** A man rang on the 7th, would not give a name, said you know what it is about. I wrote it down. I did not ring the number back the next morning; I rang on the 9th and it was dead. Whatever was there is gone, because I waited two days.',
  '**What has not happened yet.** The parts for the Haddad job have not come — the 22nd now, they say. Nobody has answered the terms letter from Al-Sharq, and the 25th is the day it matters.',
]));
out.push(item('1', 'Why is "nothing has broken" the first line?'));
out.push(item('2', 'What does she say about ringing him twice?'));
out.push(item('3', 'What is the date that matters, and why?'));
out.push(writers([
  'A handover back: **read this first** → **nothing has broken** → **what has happened** → **what I decided** → **what I got wrong** → **what has not happened yet**.',
  'Put the reassurance **first**, as its own line, and say why it is first. Everything after it is read differently.',
  'Own the decisions in the past simple with their dates — _I turned down a four-day job on the 8th_, not "a job was turned down".',
  '⚠ The **What I got wrong** section is what makes the rest of the page believable, and it must be the plainest writing on it: what you did, what it cost, no explaining.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a handover back for a time you were left in charge of something (35 words or more).'));
out.push(p('**______________ — the handover back** · ______________, for ______________   **Read this before ______________.**   **Nothing has ______________ and nobody has ______________**, because ______________.   **What has happened.** ______________ has ______________.   **What I decided.** I ______________ on the ______________, because ______________, and I would ______________ again.   **What I got wrong.** ______________. I did not ______________.   **What has not happened yet.** ______________ is the day it matters.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The reassurance is the first line, with its reason',
  'Present perfect for what has happened · **past simple with dates** for what you decided',
  'A "what I got wrong" section, written plainly and without explaining',
  'A last section of things not finished, with the date that matters',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what I got wrong" line only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real handover back (60 words or more) for the last time you were responsible for something while somebody else was away — a job, a shop, a flat, a family, a class. All six sections.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **the person coming back**. ★ _The line that let me put the page down._  ✓ _One decision I would want to ask about._  ? _Is "what I got wrong" the whole of what went wrong?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three **"what I got wrong"** lines aloud. **Which would you have written down at all?** Most people would not have written any of them, and that is worth a minute.'));
out.push(hw('Write the page **nobody gave you** when you took something over (40+ words). All six sections, in their words, not yours.'));

// ======================= 23.7 =======================
out.push(pb());
out.push(h2('23.7  Review & Mediate: What does the newspaper say?'));
out.push(p('**Function:** explaining a newspaper report to somebody   ·   **Recycling:** Units 1–23   ·   **Exam practice:** A2 Key Reading Part 4, Writing Part 6, Listening Part 5'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 23 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** They have opened the library yesterday.  **2** I have already been there last week.  **3** It has opened yet.  **4** According to me, the road is finished.  **5** You have heard the news?  **6** I\'m sorry for hear that.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the report from Thursday\'s paper.'));
out.push(box(null, [
  '**MEZZEH LIBRARY REOPENS AFTER ELEVEN YEARS** · page four, Thursday 9 May',
  'The public library in Mezzeh has reopened to readers after eleven years, the municipality has confirmed.',
  'The building, which opened in 1962, closed in 2013. Repairs began last August and are described as "substantially complete". The main reading room has been painted and the windows of the rear room replaced.',
  'The collection of some 14,000 volumes was moved to a basement store in 2013. A spokesman said it "has been returned to the shelves" and that losses were "limited".',
  'The children\'s room is expected to open later in the year. Lending cards are not yet available and readers are at present registered by hand.',
  'The municipality has not said what the work cost or who carried it out. Asked about the staff of the library, a spokesman said that "appointments are under consideration".',
  'The library is open daily except Friday, 9 a.m. to 2 p.m. and 4 p.m. to 7 p.m. Readers are asked to bring identification on a first visit.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Hiba explains the report to Maysoun, who has not read it. Which sentence in the report does Maysoun say is the one that matters, and what does Hiba decide to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.13  What it does not say', [
  ['Hiba', 'It is seven paragraphs and three of them are about you.'],
  ['Maysoun', 'Read me the ones about me.'],
  ['Hiba', 'The collection was moved to a basement in 2013, and a spokesman says it "has been returned to the shelves" and that losses were "limited".'],
  ['Maysoun', 'Returned by whom?'],
  ['Hiba', 'It does not say. It is in the passive and there is no name in the sentence.'],
  ['Maysoun', '(laughs) Nine weeks.'],
  ['Hiba', 'Nine weeks, on your own, and the sentence has nobody in it. That is paragraph three. Paragraph four is good news for you — the children\'s room is "expected to open later in the year", and you can say that to people now and it is not you saying it.'],
  ['Maysoun', 'And the last one?'],
  ['Hiba', 'The municipality has not said what the work cost or who did it, and when they were asked about the staff a spokesman said "appointments are under consideration".'],
  ['Maysoun', 'That is the sentence. That is the only sentence in the page that is about whether I have a job in September.'],
  ['Hiba', '"Under consideration" means nothing has been decided and nothing has been refused.'],
  ['Maysoun', 'It means nobody has written anything down. I have known that since March and I have not said it out loud until now.'],
  ['Hiba', 'Then here is what I am going to do, and you can tell me not to. I am going to write to the paper, as a reader, and ask one question: who put fourteen thousand books back on the shelves, and have they been appointed? Nothing else. One question gets answered.'],
]));
out.push(sp());
out.push(box('Language box – explaining a newspaper report', [
  'Say **how many paragraphs there are and how many are about the person listening**: _seven, and three of them are about you_.',
  'Read the **words**, not your version of them. Keep the quotation marks in your voice: _a spokesman said the collection "has been returned to the shelves"_.',
  'Name the sentence that is **the whole report for this person**: _that is the only sentence on the page that is about whether I have a job_.',
  'Translate the official phrase: _"under consideration" means nothing has been decided and nothing has been refused_.',
  'Point at what the **passive** is hiding — _returned by whom? There is no name in the sentence_ — and separate what the report **says** from what it **does not say**: _the municipality has not said what the work cost or who did it_. The second list is often the real news.',
  'End with **one thing somebody could do**, and offer it rather than announce it: _you can tell me not to_.',
  '**Useful phrases:** Read me the ones about me. · Returned by whom? · It does not say. · That is the sentence. · One question gets answered.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has one of the reports below and does **not** show it. A explains it to B and C, who must each end by naming the sentence that is theirs and the one question they would ask. Change roles with the other report.'));
out.push(table(['Report A – the bus route', 'Report B – the evening classes'], [
  ['1. The number 7 route has been changed from 1 June.', '1. Evening classes at the centre have been extended to four nights.'],
  ['2. The municipality says the change is "expected to reduce journey times".', '2. A spokesman said numbers "have grown significantly".'],
  ['3. Two stops have been removed, at Baramkeh and at the hospital.', '3. Fees for new students are "under review".'],
  ['4. A spokesman said that "alternative provision is under consideration".', '4. The centre has not said whether the Thursday class will continue.'],
  ['5. The change has not been advertised on the buses.', '5. Teachers\' hours are described as "unchanged at present".'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write the sentence that is **theirs**, the official phrase that means nothing has been decided, and the one question.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Find a **real** report — a newspaper, a notice, an official page, a letter from an office — about something near you. Explain it to your partner so completely that they could act on it. They must ask: _how many paragraphs are about me?_, _what are the exact words?_, _which sentence is the whole report?_, _what does it not say?_ and _what would you ask?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Omar explained the report about the bus route. Five paragraphs and two of them are mine. The number 7 has been changed from the first of June, and two stops have been removed — one is the hospital, which is the one that matters, because my mother goes there twice a month and cannot walk from the next stop. The municipality says the change is "expected to reduce journey times", which is the word that tells you nobody has measured it, and a spokesman said "alternative provision is under consideration", which means nothing has been decided and nothing refused. The last paragraph is the one I would have missed: the change has not been advertised on the buses, so on the first of June people will stand at a stop that is not there. So I decided I would ask one question: on what date will the removal of the hospital stop be put on the buses themselves?_'));
out.push(p('**Listener task:** did they tell you which paragraphs were **not** about you first? What is the question they are going to ask?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 4)', 7));
out.push(p('Read the text and choose the best word, **A**, **B** or **C**, for each gap.'));
out.push(model([
  '**NINE WEEKS IN A BASEMENT**  · by Maysoun Sabbagh',
  'I have worked in this library since 1998. In 2013 we put fourteen thousand books into forty-one boxes and carried them down to the basement, and last August somebody **(1)** ______ me to come back and open it again.',
  'I have **(2)** ______ counted the books that were lost and I am not going to. Some of the boxes were wet. I have counted what is on the shelves, and it is enough to open **(3)** ______.',
  'The work took nine weeks. I came at eight and I **(4)** ______ at seven, and for the first three weeks nobody knew the building was open, which was the best part of it.',
  'The paper says the collection "has been returned to the shelves". That is true, and **(5)** ______ the paper nobody did it. There is no name in the sentence.',
  'A reader wrote to the paper last week and asked one question: who put the books back, and **(6)** ______ she been given a job? I have not seen an answer. But three people have come in since Thursday and asked for me by name, which has not happened to me in eleven years.',
]));
[
  '**1**   A  asked   B  said   C  told',
  '**2**   A  yet   B  not   C  never',
  '**3**   A  already   B  with   C  yet',
  '**4**   A  have left   B  left   C  leave',
  '**5**   A  according   B  apparently   C  according to',
  '**6**   A  has   B  have   C  did',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message to a friend explaining the newspaper report (35 words or more). Use the report above.'));
out.push(p('There are ______________ paragraphs and ______________ of them matter to ______________.   **The news is:** they have ______________ after ______________ years. It ______________ in 1962 and ______________ in 2013.   **The words to notice:** the repairs are "______________" and the children\'s room is "______________".   **What it does not say:** ______________, ______________, and ______________.   **The sentence that matters is:** "______________", which means ______________.   If you go: ______________ and ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Present perfect for the news · past simple for 1962 and 2013',
  'The official words quoted exactly, inside quotation marks',
  'A paragraph saying what the report does **not** say',
  'A last line telling the reader what to do',
]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 10));
out.push(box(null, [
  'Something new has opened or changed where you live, and an English friend has asked you about it.',
  'Write an email to your friend.  In your email:  •  say **what has happened**  •  say **when it happened and one detail about it**  •  tell your friend **what they should do if they come**.',
  'Write **25 words or more**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(pb());
out.push(stage('✓', 'Unit 23 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  They ___ the library.   a) have opened   b) have open   c) has opened',
  '2  It ___ on the fourth of May.   a) has opened   b) opened   c) have opened',
  '3  I\'ve ___ been twice.   a) yet   b) already   c) still',
  '4  The children\'s room hasn\'t opened ___.   a) already   b) just   c) yet',
  '5  ___ the paper, it opens in June.   a) According   b) According to   c) Apparently to',
  '6  I\'m sorry ___ hear that.   a) for   b) to   c) of',
  '7  ___ anything happened?   a) Has   b) Have   c) Did',
  '8  ___ you take any new work?   a) Have   b) Did   c) Has',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 5 style – matching).** 🔊 **Track 23.14** Ms Huda says what each person\'s news is. Write a letter **A–G**. There are **two** extra letters.'));
out.push(table(['People', 'Their news'], [
  ['1  Maysoun ___', 'A  has sold something they made for the first time'],
  ['2  Omar ___', 'B  has put eleven years of books back on the shelves'],
  ['3  Hiba ___', 'C  has a place on a course and has not told her mother'],
  ['4  Lina ___', 'D  is taking over somebody else\'s job in June'],
  ['5  Nour ___', 'E  has had two weeks of decisions and got one thing wrong'],
  ['', 'F  has been given an office in another city'],
  ['', 'G  has stopped asking a question nobody will answer'],
], [1, 2]));
out.push(dlg('Track 23.14  Audio script (read after the check)', [
  ['Ms Huda', 'Before we finish — five pieces of news, one each. Maysoun has put fourteen thousand books back on the shelves of the Mezzeh library in nine weeks, on her own, and the newspaper managed to describe that without using her name. Omar has sold a photograph to a newspaper; it is the first thing he has made that anybody has paid for, and it is on the wall of his father\'s workshop where the licence is. Hiba has a place on the teacher-training course in September — forty places and three hundred applied — and she has not told her mother yet, because the course is four days a week and her mother has worked in that shop since she was seventeen. Lina is doing Rana\'s job from June, which she has known since Thursday and has not got used to saying. And Nour has had a fortnight of deciding things on her own, turned down two hundred thousand because she was asked to, said no to a man everybody says yes to — and she will tell you the one thing she got wrong before she tells you any of the rest.'],
]));
out.push(p('**C  Writing.** Something has opened, closed, started or changed where you live. Write about it (40+ words): the news in the present perfect, the detail in the past simple with a date, where you heard it, and what somebody should do about it.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 23)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ give news with the present perfect',
  '☐ keep finished times (_yesterday, in May_) out of present perfect sentences',
  '☐ use _just_, _already_ and _yet_ in the right place',
  '☐ give the news in the present perfect and the detail in the past simple',
  '☐ react to good and bad news, and then ask a question',
  '☐ say where news came from with _according to_ and _apparently_',
  '☐ ask for news with the right question — and ask _what else?_',
  '☐ explain a newspaper report, including what it does not say',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 24 – LOOKING FORWARD', [
  'Unit 23 was about what **has** happened. Unit 24 is the last unit of A2, and it is about what **is going to**: plans, hopes, the three futures together, and saying goodbye to people you have been in a room with for a year.',
  'Before the next lesson: bring your **"not yet" list** from 23.2. And if you were in Unit 13, your teacher has an envelope with your name on it. Do not ask what is in it.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Unit 23 · Student\'s Book');
