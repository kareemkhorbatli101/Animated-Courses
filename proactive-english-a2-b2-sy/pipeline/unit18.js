// Proactive English A2 · Syria Edition · Book 2 · Unit 18 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 18  Technology and Online Life'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**18.1**  ask how to do something online',
  '**18.2**  give step-by-step instructions',
  '**18.3**  say what you have done, when the result is there now',
  '**18.4**  describe a problem with a device',
  '**18.5**  suggest a solution',
  '**18.6**  talk about staying safe online',
  '**18.7**  Review & Mediate: explain an app screen and a confirmation message',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**The timetable has gone online.** The centre has taken the paper one off the door and put everything on a website, and about half the class cannot find anything.',
  '**The Saturday clinic.** Omar and Nour have started an hour before the conversation club — bring a telephone or a laptop with one problem. Room 3, 10:00–11:00.',
  '**Mr Bassam** has been given an account for the website and has already locked himself out of it twice.',
  '**After this unit comes the Mid-Book Test** — Units 13 to 18.',
], C.lyellow, C.orange));

// ======================= 18.1 =======================
out.push(pb());
out.push(h2('18.1  How do I find the timetable?'));
out.push(p('**Function:** asking how to do something online   ·   **Grammar:** _How do I…?_ + imperatives   ·   **Pronunciation:** /dʒ/ and /tʃ/ in digital words'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Take out your telephone. What is the **one** thing on it you have never understood and never asked anybody about? Your teacher collects six on the board — anonymously.'));
out.push(board('How do I find the timetable?', 'How do I…? → Go to… Tap… Then…'));
out.push(p('**b**  Match the verb to the thing. _tap · scroll · click · type · download · attach · log in · sign up_ → _a button · down the page · your password · a file to a message · an app · a new account · a link · a word in the box_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has the centre done?   **A** changed the timetable   **B** put the timetable online and taken the paper one down   **C** closed Room 12'));
out.push(p('**b**  Listen again. **1** How many taps does Nour say it takes?   **2** What does Mr Bassam say happened to him twice?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.1  Where has the paper gone?', [
  ['Mr Bassam', 'It is all on the website now. They took the paper one off the door on Monday.'],
  ['Hiba', 'And how do I find the timetable?'],
  ['Mr Bassam', 'You go on the website.'],
  ['Hiba', 'Mr Bassam, that is not an answer. That is the name of the place.'],
  ['Nour', 'May I? It\'s four taps. Open the browser, type al-yasmin dot sy, scroll down to where it says TIMETABLES, and tap your level.'],
  ['Hiba', 'Four taps.'],
  ['Nour', 'Four. And the thing nobody tells you: do it once and then save it, so it is one tap for ever.'],
  ['Hiba', 'How do I save it?'],
  ['Nour', 'Tap the three dots at the top and choose "add to home screen". Then it sits with your apps and it looks like an app and it is not an app.'],
  ['Mr Bassam', 'I did not know you could do that.'],
  ['Nour', 'Nobody knows. Mr Bassam, how do you get into your account?'],
  ['Mr Bassam', 'I don\'t. I have locked myself out twice. The second time I wrote the password on a piece of paper and then I lost the piece of paper, so now I am a man with no password and no paper.'],
  ['Omar', 'Bring it on Saturday. Ten o\'clock, Room 3. One problem each.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking: _How do I…?_**',
  table(['question', 'why this one'], [
    ['**How do I** find the timetable?', 'the standard question — asks for the **steps**'],
    ['**How do you** add it to the home screen?', 'the same thing; _you_ = people in general'],
    ['**Where do I** find…?', 'when you only need the **place**'],
    ['**What do I** do if…?', 'when something has gone wrong'],
  ], [1.1, 1.5]),
  '⚠ ~~How I find the timetable?~~ → _**How do I** find…?_ The _do_ is not optional in a question.',
  '**Answering: the imperative.** Give the steps as bare verbs — no _you_, no _should_: _**Open** the browser. **Type** the address. **Scroll** down. **Tap** your level._',
  '**The verbs of this unit:**',
  table(['verb', 'what you do it to'], [
    ['**tap** / **click**', 'a button · a link · an icon'],
    ['**scroll** (down / up)', 'a page'],
    ['**type** / **enter**', 'an address · a password · a name'],
    ['**download** / **upload**', 'an app · a file · a photograph'],
    ['**attach**', 'a file **to** a message'],
    ['**log in** / **log out** · **sign up**', 'an account'],
    ['**save** · **share** · **update** · **delete**', 'almost anything'],
  ], [1, 1.6]),
  '⚠ "Go on the website" is **the name of the place, not an instruction.** An instruction says what your finger does. Nour\'s answer has four verbs in it; Mr Bassam\'s has one and it is useless.',
  '**Practise:** Complete with a verb from the box.  1 ______ down to the bottom of the page.  2 ______ your password in the second box.  3 ______ the blue button.  4 ______ the file to the message.  5 ______ in with your email address.  6 ______ the app from the store.',
  '**Pronunciation.** 🔊 **Track 18.2** Two sounds that do a lot of work here. /dʒ/ in _di**g**ital · mana**g**e · char**g**er · messa**g**e_. /tʃ/ in _**ch**arge · sear**ch** · tou**ch** · **ch**oose_. Listen and repeat, then say _charge the charger_ three times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks _How do I…?_ about something on the card; B answers with **four** steps, all imperatives, and then adds "and the thing nobody tells you is…". A must ask one follow-up question. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'How do I __________?'],
  ['B', 'It\'s __________ steps. __________, __________, __________, and then __________.'],
  ['A', 'And where is __________?'],
  ['B', '__________.'],
  ['A', 'Right. And then?'],
  ['B', 'And the thing nobody tells you is __________.'],
]));
out.push(table(['Card A – how do I…', 'Card B – how do I…'], [
  ['find the timetable on the centre\'s website', 'send a photograph in a message'],
  ['save a page so it is one tap', 'change the language of an app'],
  ['stop an app sending me a message every day', 'find something I downloaded last week'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** write the **four** steps in order. Could you do it from your notes, without asking anybody?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take out the thing from Stage 1 — the one you have never asked about. Ask your partner. If they do not know either, ask a third person. **Everybody in this room must get one real answer by the end of nine minutes.**'));
out.push(p('**b**  Then teach it back to the person who taught you, as four imperatives, without looking at the telephone.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class what you learned:  _I have never known how to stop an app sending me a message every morning at seven. Omar showed me: open settings, scroll down to the name of the app, tap notifications, and turn the top one off. Four taps. I have been woken up at seven by an app for about a year and a half because I never asked anybody a four-tap question. The thing he says nobody tells you is that turning it off there does not delete anything — the messages are still in the app if you want them, they just stop shouting._'));
out.push(p('**Listener task:** write down the question somebody asked today that you also did not know the answer to.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the card on the door of Room 3. Answer the questions.'));
out.push(model([
  '**THE SATURDAY CLINIC** — Room 3, 10:00–11:00, before the conversation club',
  'Bring a telephone or a laptop and **one** problem. Not four. One.',
  '**It is for you if** you have been doing something the long way for a year, or if there is a thing on your telephone that you have never understood and have never asked about because you thought everybody else knew.',
  '**What to bring.** The device, charged. The password, if the problem has a password in it. And if somebody set it up for you, the name of that person, because we will probably have to ask them something.',
  '**What we do.** We fix it with you watching, not for you. Then you do it again with us watching. If you cannot do it the second time, we have not finished.',
  '**What we don\'t do.** We don\'t say "it\'s easy". We don\'t take your telephone away to a corner. And nobody is asked how old they are.',
  '**It is free** and it will stay free. — Omar and Nour',
]));
out.push(item('1', 'Why does the card say "one problem, not four"?'));
out.push(item('2', 'What do they do after they have fixed it?'));
out.push(item('3', 'Why do you think "nobody is asked how old they are" is on the card?'));
out.push(writers([
  'A notice for help with technology: **what to bring** → **who it is for** → **what we do** → **what we don\'t do** → **the price**.',
  '_**It is for you if…**_ should describe the **shame**, not the problem: _you thought everybody else knew_. That sentence is the one that gets people through the door.',
  'Say what you will **not** do. _We don\'t say "it\'s easy"_ and _we don\'t take your telephone away_ are the two things people are actually afraid of.',
  '⚠ Make the test of success the **learner doing it**, not you fixing it: _if you cannot do it the second time, we have not finished._ Write that sentence into any notice about teaching anything.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a notice for a help session you could run — about anything you can do and other people cannot (35 words or more).'));
out.push(p('**______________** — ______________, ______________   Bring ______________ and **one** ______________.   **It is for you if** you have been ______________ or if ______________ because you thought ______________.   **What to bring.** ______________. ______________.   **What we do.** We ______________ with you watching, not for you. Then ______________.   **What we don\'t do.** We don\'t ______________. We don\'t ______________.   **It is ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title with the place and the time at the top',
  'Imperatives for the instructions (_bring_, _charge_, _write_), not _you should bring_',
  'An _it is for you if_ line that names the embarrassment, not just the problem',
  'A **What we don\'t do** section with at least two things in it',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full notice (60 words or more) for the thing **you** could teach other people — a device, a form, a kitchen, a bicycle, a language, a city. Who it is for, what to bring, what you will not do, and the price.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s notice as **somebody who is embarrassed about needing it**. ★ _The line that would get me through the door._  ✓ _One thing I am still afraid will happen._  ? _What if my problem is stupid?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the notices on the wall. **Which session would you go to?** Put a mark. Then find the person whose session you chose and tell them your one problem.'));
out.push(hw('Write the **four steps** for the thing you learned today (40+ words), as if for somebody who has never done it — four imperatives, and one line beginning _"The thing nobody tells you is…"_'));

// ======================= 18.2 =======================
out.push(pb());
out.push(h2('18.2  First, open the app'));
out.push(p('**Function:** giving step-by-step instructions   ·   **Grammar:** sequencers + imperatives   ·   **Pronunciation:** pausing between steps'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One student gives the class instructions for something physical — making tea, getting from this room to the street — and the class must follow them **exactly**, including the mistakes. Do it twice.'));
out.push(board('First, open the app.', 'First · Then · After that · Finally'));
out.push(p('**b**  Put these in order: _After that, type your password. · First, open the app. · Finally, tap the blue button. · Then scroll down to "account"._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Nour teaching Mr Bassam to do?   **A** send a message   **B** get back into his account   **C** buy something online'));
out.push(p('**b**  Listen again. **1** Why does Nour stop after each step?   **2** What does she tell him to do with the new password?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.3  Four steps and a pause', [
  ['Nour', 'Right. I am going to say four steps, and I am going to stop after each one, and you are going to do it. Don\'t do anything until I finish the sentence.'],
  ['Mr Bassam', 'Understood.'],
  ['Nour', 'First, open the website and tap "log in".'],
  ['Mr Bassam', '…Done.'],
  ['Nour', 'Then tap "forgotten your password?" — it is the small grey writing under the box.'],
  ['Mr Bassam', 'I have never once looked at that writing.'],
  ['Nour', 'Nobody has. After that, type your email address — not your name, the email address — and tap "send".'],
  ['Mr Bassam', 'And now?'],
  ['Nour', 'Now we wait, and that is a step too. They send you a message with a link. Finally, open that message, tap the link, and choose a new password.'],
  ['Mr Bassam', 'And I write it on a piece of paper.'],
  ['Nour', 'No. That is how we got here. Open your telephone\'s notes, type it there, and call the note something that is not "password".'],
  ['Mr Bassam', 'What do I call it?'],
  ['Nour', 'Anything. "Shopping". Now do all four steps again on your own and I will say nothing at all.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Giving instructions: the sequencers**',
  table(['word', 'where it goes'], [
    ['**First,** / **First of all,**', 'step 1'],
    ['**Then** / **Next,**', 'steps 2, 3, 4…'],
    ['**After that,**', 'a step that clearly follows the one before'],
    ['**Finally,** / **Last,**', 'the last step'],
    ['**Before you… ,** / **When you… ,**', 'a condition inside a step'],
  ], [1, 1.6]),
  '**Punctuation:** _First_, _Then_, _After that_ and _Finally_ take a **comma** when they start the sentence — except _Then_, which usually does not: _**First,** open the app._ · _**Then** scroll down._ · _**After that,** type your password._',
  '**Every step is an imperative — a bare verb.** _Open… Tap… Type… Choose…_ ~~You should open…~~ is advice, not an instruction, and in a list of steps it slows everything down.',
  '**Make the step findable, not just correct:** _tap "forgotten your password?" — **it is the small grey writing under the box**._ Half of an instruction is telling somebody **where to look**.',
  '⚠ **Waiting is a step.** _Now we wait, and that is a step too._ An instruction that skips the waiting makes people press things again.',
  '⚠ Say what **not** to type: _type your email address — **not your name**_. The commonest error is predictable, so prevent it.',
  '**Practise:** Put the four steps in order and add the sequencers.  _type your password · open the app · tap "log in" · scroll down to "account"_',
  '**Useful phrases:** I am going to stop after each one. · Don\'t do anything until I finish the sentence. · Now do it again on your own and I will say nothing.',
  '**Pronunciation.** 🔊 **Track 18.4** Instructions need **pauses**, not speed: _First, open the app._ ⟍ (pause) _Then tap "log in"._ ⟍ Listen to the same four steps said fast and said properly, and count how many you can follow each time.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives the instructions on the card, **stopping after each step**; B does it (or mimes it) and may not look ahead. Then B does all the steps again with A silent. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'I\'m going to say __________ steps and stop after each one.'],
  ['A', 'First, __________.'],
  ['B', 'Done.'],
  ['A', 'Then __________ — it\'s __________.'],
  ['B', '__________.'],
  ['A', 'After that, __________ — not __________, __________.'],
  ['B', 'And now?'],
  ['A', 'Now __________, and that is a step too. Finally, __________.'],
  ['A', 'Now do it again on your own and I will say nothing.'],
]));
out.push(table(['Card A – the steps', 'Card B – the steps'], [
  ['getting back into an account you are locked out of', 'attaching a photograph to a message'],
  ['1 open the site, tap "log in"', '1 open the message you are writing'],
  ['2 tap "forgotten your password?" (small grey writing)', '2 tap the paper-clip at the bottom'],
  ['3 type your email address — not your name', '3 choose "photos" — not "files"'],
  ['4 wait · open the message · tap the link · choose a new one', '4 choose one, wait for it to load, then tap send'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the four steps. Then cross out any step that did **not** tell you where to look.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Teach your partner, step by step, something **you** can do and they cannot. Stop after every step. They must do it, or mime it, and they may not help you by guessing the next step.'));
out.push(p('**b**  Then they do the whole thing again with you completely silent. **If they cannot, you have not finished** — go back and find the step that was missing.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour taught Mr Bassam to get back into his account in four steps, stopping after each one. The step I would never have thought of is the second: tap "forgotten your password", which is the small grey writing under the box, and which Mr Bassam said he has never once looked at. She also counted the waiting as a step, which stopped him pressing things, and she told him not to write the new password on paper but to put it in his notes under a name that is not "password". Then she made him do all four again with no help, which is when we found out he did not really do step three._'));
out.push(p('**Listener task:** which step in the room was the one that needed "where to look"?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the card Omar and Nour give out at the clinic. Answer the questions.'));
out.push(model([
  '**HOW TO FIND THE TIMETABLE** — keep this in your purse, not on your telephone',
  'Four steps. It takes about twenty seconds once, and one second for ever after that.',
  '**1. First,** open your browser — the round one you use for websites, not the one with the letter in it.',
  '**2. Then** type **al-yasmin.sy** in the long box at the top. Not in the search box in the middle of the page. The long box at the top.',
  '**3. After that,** scroll down. Keep going past the photographs. The word you want is **TIMETABLES**, in blue capitals, about two thumbs from the bottom.',
  '**4. Finally,** tap your level. Yours is **4B**.',
  '**And now the part that saves you doing this again.** With the timetable on the screen, tap the three dots at the top right, and choose **"add to home screen"**. It will sit with your apps. It is not an app and nothing has been downloaded; it is a door.',
  '**If it goes wrong:** come on Saturday at ten. Do not ask a grandchild; they will do it for you and you will be here again in March.',
]));
out.push(item('1', 'Where should you type the address, and where should you not?'));
out.push(item('2', 'What does "add to home screen" actually do?'));
out.push(item('3', 'Why does the card say not to ask a grandchild?'));
out.push(writers([
  'A step card: **how long it takes** → **numbered steps with sequencers** → **where to look, for each one** → **the step that saves doing it again** → **what to do if it goes wrong**.',
  'Every step needs a **place**: _the long box at the top_ · _about two thumbs from the bottom_ · _the three dots at the top right_. A step with no place in it is a step somebody will fail.',
  'Say what it is **not**: _not the search box_ · _not the one with the letter in it_ · _nothing has been downloaded_. Each one prevents a specific, predictable mistake.',
  '⚠ The last line is the real teaching: _do not ask a grandchild; they will do it for you._ Somebody doing it for you is why the card is needed in the first place.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a step card for something people ask you to do for them (35 words or more).'));
out.push(p('**HOW TO ______________**   ______________ steps. It takes about ______________.   **1. First,** ______________ — ______________, not ______________.   **2. Then** ______________. Not ______________. ______________.   **3. After that,** ______________. The ______________ is ______________.   **4. Finally,** ______________.   **If it goes wrong:** ______________. Do not ______________; ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title saying what the card is for, and how long it takes',
  'Numbered steps, each one a bare verb, with _First, / Then / After that, / Finally,_',
  'Every step says **where to look**, and at least two say what it is **not**',
  'A last line saying what to do if it goes wrong',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full step card (60 words or more) for the thing people most often ask **you** to do for them. Steps with places, the things it is not, the step that saves repeating it, and what to do when it goes wrong.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s card and **actually try to follow it**, exactly, with no guessing. ★ _The step that told me where to look._  ✓ _The step where I had to guess._  ? _What do I do if it says something different?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Swap cards across the room and follow somebody else\'s, exactly. **How many cards worked without a word being said?** Those are the finished ones.'));
out.push(hw('Write the **same card for somebody who has never used a telephone like yours** (40+ words). You will find you have to add two steps you did not know were steps.'));

// ======================= 18.3 =======================
out.push(pb());
out.push(h2('18.3  I\'ve sent it'));
out.push(p('**Function:** saying what you have done, when the result is there now   ·   **Grammar:** the present perfect for a result   ·   **Pronunciation:** the contraction _I\'ve_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher does five small things in the room (opens a window, writes a word, moves a chair). After each one the class says what has happened: _You\'ve opened the window._'));
out.push(board('I\'ve sent it.', 'the action is finished, the result is here'));
out.push(p('**b**  Which is right, and why? **1** _I sent it yesterday._ / _I\'ve sent it yesterday._  **2** _I\'ve sent it — look._ / _I sent it — look._  **3** _Have you sent it?_ / _Did you send it?_ — when do you use each?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has gone wrong?   **A** nothing has been sent   **B** the file has been sent to the wrong person   **C** the file was sent but it did not arrive'));
out.push(p('**b**  Listen again. **1** What **four** things has Lina done?   **2** What does Rana say is the only question that matters?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.5  It says sent', [
  ['Lina', 'They say they haven\'t got it. I\'ve sent it three times.'],
  ['Rana', 'Right. Tell me what you have actually done, not what you meant to do.'],
  ['Lina', 'I\'ve attached the file. I\'ve typed the address. I\'ve pressed send. And I\'ve looked in the sent folder and it is there, three times, with the right address on it.'],
  ['Rana', 'Then it has gone. Have you checked the size?'],
  ['Lina', 'The size?'],
  ['Rana', 'That is the only question that matters. A big file leaves your side and never arrives at theirs, and nobody tells anybody, and both offices spend a day being angry with each other.'],
  ['Lina', '…It\'s forty-one megabytes.'],
  ['Rana', 'There it is. Have you got it as a smaller file?'],
  ['Lina', 'I\'ve got the original. I haven\'t made a smaller one.'],
  ['Rana', 'Then make one, or put it somewhere and send them a link. And write one line to Mr Yilmaz now: say it has been sent three times, say you have just found out why, and say the new one is coming in ten minutes.'],
  ['Lina', 'I\'ve already written to him twice today.'],
  ['Rana', 'Three times with a reason is better than twice with none.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the present perfect for a result you can see now**',
  table(['now', 'then'], [
    ['**present perfect** — the result is here\n_I **\'ve sent** it._ (it is gone)\n_I **\'ve attached** the file._ (it is on)\n_She **has locked** herself out._ (she is out)',
     '**past simple** — a finished time\n_I **sent** it yesterday._\n_I **attached** it this morning._\n_She **locked** herself out in January._'],
  ], [1.3, 1.3]),
  '⚠ The same rule as Unit 13, in a new place: **the moment you say when, it is past simple.** ~~I\'ve sent it yesterday~~ → _I **sent** it yesterday._',
  '**The question:** _**Have you** checked the size?_ · _**Have you** sent it?_ (= is it gone now?) against _**Did you** send it on Monday?_ (= on that day)',
  '**The negative is the useful one in this unit:** _I **haven\'t made** a smaller one._ · _They **haven\'t got** it._ · _It **hasn\'t arrived**._',
  '**A row of them is how you describe what you have done:** _I\'ve attached the file. I\'ve typed the address. I\'ve pressed send. I\'ve looked in the sent folder._ Four sentences, four results, no times.',
  '**Practise:** Present perfect or past simple?  1 I ______ (send) it three times — look.  2 I ______ (send) it yesterday morning.  3 ______ you ______ (check) the size?  4 She ______ (lock) herself out again; she\'s standing outside.  5 He ______ (buy) that telephone in 2019.  6 ______ it ______ (arrive) yet?',
  '**Useful phrases:** Tell me what you have actually done. · Then it has gone. · That is the only question that matters. · There it is. · Three times with a reason is better than twice with none.',
  '**Pronunciation.** 🔊 **Track 18.6** _I\'ve_ is one short sound: /aɪv/ — _I\'ve sent it_ /aɪv sent ɪt/. The full _I have sent it_ sounds like an argument. Listen to both, then say the four sentences from the dialogue at speed.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has the problem on the card; B asks _"what have you actually done?"_ and A lists **four** things with the present perfect. B then finds the one thing A **hasn\'t** done. Then swap cards.'));
out.push(dlg(null, [
  ['A', '__________. I\'ve tried __________ times.'],
  ['B', 'Tell me what you have actually done.'],
  ['A', 'I\'ve __________. I\'ve __________. I\'ve __________. And I\'ve __________.'],
  ['B', 'Have you __________?'],
  ['A', '…No. I haven\'t __________.'],
  ['B', 'There it is.'],
]));
out.push(table(['Card A – the problem', 'Card B – the problem'], [
  ['they say the file never arrived', 'the app will not let you in'],
  ['done: attached · typed the address · pressed send · checked the sent folder', 'done: typed the password · tried twice · restarted the telephone · asked your sister'],
  ['not done: checked the size (41 MB)', 'not done: checked that it is the right account — you have two'],
  ['the problem: the shop says it has not been paid', 'the problem: the photograph will not send'],
  ['done: paid · got a message · shown them the message', 'done: chosen it · waited · pressed send twice'],
  ['not done: looked at which account the money left', 'not done: noticed you have no signal'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **four** things they have done and the **one** they have not. Was the missing one obvious from outside?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think of something that is not working in your life right now — not only a device: a form, a payment, a request, a repair, a message nobody has answered. Tell your partner **everything you have done**, in the present perfect, as a list. Your partner listens for the gap.'));
out.push(p('**b**  Your partner must ask three _"have you…?"_ questions. At least one must be something you have not done.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lina has sent the same file three times and the office in Istanbul says it has not arrived. She has attached it, she has typed the address, she has pressed send, and she has looked in the sent folder and seen it there three times with the right address. Rana asked the only question that matters, which was the size, and it is forty-one megabytes, which leaves one office and never reaches the other and nobody is told. She hasn\'t made a smaller version. Two offices have spent a day being angry about a number neither of them looked at._'));
out.push(p('**Listener task:** write the **gap** somebody else found today. How many of them were about checking rather than doing?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message Lina sends. Answer the questions.'));
out.push(model([
  '**To:** Mr Yilmaz   **Subject:** The price file — found the problem',
  'Dear Mr Yilmaz,',
  'I have found out why you have not received the file, and I am sorry it has taken a day.',
  'I have sent it three times and all three have left this office — they are in my sent folder with your address on them. What I did not check is the size. The file is 41 MB, which is too big for your system to accept, and neither side gets told.',
  'I have now made a smaller version (3 MB) and I have attached it to this message. I have also put the full one in a folder and the link is below, in case you want the photographs at full size.',
  'Please tell me within the hour whether the small one has arrived. If it has not, I will stop sending files and we will do this another way.',
  'With apologies for the day,',
  'Lina Haddad · Accounts · Medica Trading',
]));
out.push(item('1', 'How does Lina know the three files left her office?'));
out.push(item('2', 'What had she not checked?'));
out.push(item('3', 'What does she ask Mr Yilmaz to do, and by when?'));
out.push(writers([
  'A "found the problem" message: **the cause, in line one** → **what you have done** → **what you did not check** → **what you have done now** → **what you need from them, with a time**.',
  'Put the **cause first**. A reader who has been waiting a day does not want the story in order; they want to know whether it is fixed.',
  'Admit the gap in one clause and move on: _What I did not check is the size._ No paragraph of apology — one line at the end does more.',
  '⚠ Ask for a **confirmation with a deadline**: _tell me within the hour whether it has arrived_. Without that, you are about to spend a second day not knowing.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a "found the problem" message about something that went wrong (35 words or more).'));
out.push(p('**To:** ______________   **Subject:** ______________   Dear ______________,   I have found out why ______________, and I am sorry ______________.   I have ______________ and ______________. What I did not check is ______________.   I have now ______________ and I have ______________.   Please tell me within ______________ whether ______________. If it has not, ______________.   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A greeting, a subject line that says what it is about, and a full name',
  'Present perfect for every result (_I have sent · I have attached · you have not received_)',
  'The cause in the **first** line, and the gap admitted in one clause',
  'A request with a time limit, and a plan if it still does not work',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real message (60 words or more) for something that has gone wrong and been waiting: a payment, a form, a delivery, a repair, a reply. Cause first, what you have done, what you missed, what you have done now, what you need and by when.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as **the person who has been waiting a day**. ★ _The line that stopped me being angry._  ✓ _One place where you explained instead of telling me._  ? _What happens if the new one doesn\'t arrive either?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read two messages aloud. **Which one would end the problem today?** It is the one whose first sentence is the cause.'));
out.push(hw('Write **the reply** (40+ words) from the person who was waiting: confirm, say one thing they will do differently, and one thing they want you to do next time.'));

// ======================= 18.4 =======================
out.push(pb());
out.push(h2('18.4  It won\'t turn on'));
out.push(p('**Function:** describing a problem with a device   ·   **Grammar:** present continuous for a temporary fault; _it won\'t…_   ·   **Pronunciation:** stress on _won\'t_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher says six faults in your own language or in simple words; the class must produce the English sentence. _No battery · no sound · very slow · the screen is black · it stops by itself · the button does nothing._'));
out.push(board('It won\'t turn on.', 'won\'t = refuses to'));
out.push(p('**b**  Match. _It won\'t charge. · It keeps turning off. · It\'s not working today. · The screen has gone black. · It\'s very slow._ → _a permanent refusal · it happens again and again · temporary, not usual · a result you can see · a general complaint_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is wrong with the woman\'s telephone?   **A** the screen is broken   **B** it will not charge   **C** it has no signal'));
out.push(p('**b**  Listen again. **1** What does Omar ask her to show him?   **2** What is the actual problem?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.7  The Saturday clinic', [
  ['Umm Rashid', 'It won\'t charge. My son says I need a new telephone.'],
  ['Omar', 'Your son may be right and he may be selling you something. Tell me what it does.'],
  ['Umm Rashid', 'I put the wire in and nothing happens. Sometimes the little picture comes on for a second and then it goes off again.'],
  ['Omar', 'So it isn\'t "it won\'t charge". It\'s "it keeps starting and stopping". Those are two different faults and that one sentence has probably saved you a telephone. Can I see the wire?'],
  ['Umm Rashid', 'Here.'],
  ['Omar', 'Right. Now look at the end of it. Do you see how this piece is bent?'],
  ['Umm Rashid', 'My grandson sat on it.'],
  ['Omar', 'Your grandson sat on it. Nour — have you got a spare?'],
  ['Nour', 'Here. Try this one.'],
  ['Omar', '(pause) It\'s charging. Look at the little picture — it isn\'t going off.'],
  ['Umm Rashid', 'So the telephone is not broken.'],
  ['Omar', 'The telephone is four years old and perfectly well. The wire is broken. A new wire is eight thousand and a new telephone is not.'],
  ['Umm Rashid', 'What do I say to my son?'],
  ['Omar', 'Say the wire was bent. And if you want my advice, say it in front of other people.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Describing a fault — four shapes, four meanings**',
  table(['you say', 'it means'], [
    ['_It **won\'t** turn on._ · _It **won\'t** charge._', 'it **refuses** — every time, completely'],
    ['_It **keeps** turning off._ · _It **keeps** asking for the password._', 'again and again — the commonest real fault'],
    ['_It**\'s not working** today._ · _It**\'s being** slow._', '**present continuous** — temporary, not how it usually is'],
    ['_The screen **has gone** black._ · _It **has stopped** working._', '**present perfect** — the result is there now'],
  ], [1.4, 1.4]),
  '⚠ **_won\'t_ here is not the future.** _It **won\'t** open_ = it refuses to open, now. The same word, a different job — and it is the shortest, most useful fault sentence in English.',
  '⚠ **The right shape saves money.** _It won\'t charge_ and _it keeps starting and stopping_ are different faults. Umm Rashid came in with the first sentence and the second one was true.',
  '**Being exact about _what it does_:** _I put the wire in and nothing happens._ · _The little picture comes on for a second and then goes off._ Describe the **behaviour**, not your theory about the cause.',
  '**Useful fault words:** _the screen · the battery · the charger · the wire · the button · the signal · an app · it freezes · it restarts itself · it\'s very slow_',
  '**Practise:** Choose the right shape.  1 I press the button and ______ (nothing / happen).  2 It ______ (keep) turning off by itself.  3 It ______ (not work) today — it was fine yesterday.  4 The screen ______ (go) black and it won\'t come back.  5 It ______ (not / charge) at all, with any wire.',
  '**Useful phrases:** Tell me what it does. · Those are two different faults. · Can I see…? · Do you see how…? · It isn\'t going off. · Say it in front of other people.',
  '**Pronunciation.** 🔊 **Track 18.8** _won\'t_ is loud and long: _It **WON\'T** turn on._ /wəʊnt/ Compare it with _want_ /wɒnt/, which is short — _I want it_ / _it won\'t_. Listen and repeat both until they are clearly different.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A brings the fault on the card and **starts with the wrong sentence**; B asks _"tell me what it does"_ and gets the right description, then finds the cause. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'It won\'t __________. __________ says I need a new one.'],
  ['B', 'Tell me what it does.'],
  ['A', 'I __________ and nothing happens. Sometimes __________ for a second and then __________.'],
  ['B', 'So it isn\'t "__________". It\'s "__________". Those are two different faults.'],
  ['A', 'Is that bad?'],
  ['B', 'Can I see __________? … Do you see how __________?'],
  ['A', '__________.'],
  ['B', 'Then it isn\'t the __________. It\'s the __________.'],
]));
out.push(table(['Card A – the faults', 'Card B – the faults'], [
  ['"it won\'t charge" → it keeps starting and stopping (bent wire)', '"it won\'t send photographs" → it keeps asking to sign in (wrong account)'],
  ['"the screen is broken" → the screen is very dark (brightness)', '"it\'s too slow" → it keeps restarting (no space left)'],
  ['"it won\'t turn on" → it turns on and shows nothing (volume and brightness both at zero)', '"it has no signal" → it has no signal in one room only'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **first** sentence and the **true** sentence. How different were they?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Describe a real fault — a device, a machine at home, a car, a door, a tap, an app. Start with the sentence you would normally say. Your partner must make you describe what it actually **does**, step by step, and must not accept a theory.'));
out.push(p('**b**  Swap. Then both of you notice how many of the first sentences were **theories** (_the battery is dead_) rather than **behaviour** (_it turns on for a second and goes off_).'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _A woman came to the clinic on Saturday and said her telephone wouldn\'t charge and that her son told her to buy a new one. Omar asked her what it actually does, and it turned out to be different: she puts the wire in, nothing happens, and sometimes the little picture comes on for a second and then goes off. He said that is not "it won\'t charge", it is "it keeps starting and stopping", and that those are two different faults. The wire was bent, because her grandson sat on it. Eight thousand instead of a telephone, from one sentence said properly._'));
out.push(p('**Listener task:** how many first sentences in this room were theories rather than descriptions?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the card from the clinic. Answer the questions.'));
out.push(model([
  '**HOW TO DESCRIBE A FAULT** — so that somebody can help you',
  'We cannot help you with "it\'s broken". Nobody can. Here is what to say instead.',
  '**Say what it does, not what you think is wrong.** _"The battery is dead"_ is a theory, and it is wrong about half the time. _"I put the wire in and nothing happens"_ is a description, and it is never wrong.',
  '**Say whether it is every time or sometimes.** _It **won\'t** turn on_ means never, not once, with everything you have tried. _It **keeps** turning off_ means again and again. These are different faults and they have different causes.',
  '**Say when it started and what changed.** _"It has been doing it since Thursday"_ is worth more than any other sentence. Something changed on Thursday, and it is usually not the machine.',
  '**Say what you have already tried.** _"I\'ve tried two wires and I\'ve restarted it twice."_ Then nobody wastes your Saturday doing what you did on Tuesday.',
  '**And bring the thing.** Not a photograph of the thing. The thing, charged if it can be.',
]));
out.push(item('1', 'Why is "the battery is dead" a bad thing to say?'));
out.push(item('2', 'What is the difference between "it won\'t turn on" and "it keeps turning off"?'));
out.push(item('3', 'Why is "it has been doing it since Thursday" so useful?'));
out.push(writers([
  'A "how to describe it" card: **the thing people say that does not work** → **one rule per paragraph, in bold** → **the reason** → **an example of the right sentence**.',
  'Give the **wrong sentence and the right sentence** next to each other every time. Nobody learns to describe a fault from a principle; they learn it from two sentences side by side.',
  'Name the **cost** of getting it wrong: _nobody wastes your Saturday doing what you did on Tuesday_. People describe things badly because they do not know it costs anything.',
  '⚠ Finish with the practical one. _Bring the thing, not a photograph of the thing_ is the line everybody will remember and the one most often ignored.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a "how to describe it" card for a problem you often have to listen to (35 words or more).'));
out.push(p('**HOW TO DESCRIBE ______________** — so that somebody can help you   We cannot help you with "______________". Here is what to say instead.   **Say what ______________, not what ______________.** "______________" is ______________. "______________" is ______________.   **Say whether ______________.** ______________.   **Say when ______________.** ______________ is worth more than ______________.   **Say what you have already tried.** ______________.   **And ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title and a first line naming the useless thing people say',
  '_won\'t_ / _keeps_ + -ing / present continuous / present perfect — each used correctly',
  'A wrong sentence and a right sentence side by side, at least twice',
  'A last line that is practical, not a principle',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full card (60 words or more) for something **you** get asked about: a device, a car, a form, a health problem, a recipe that goes wrong, a child\'s homework. Wrong sentence, right sentence, and what to bring.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s card as **somebody who always says the wrong sentence**. ★ _The pair of sentences that showed me the difference._  ✓ _One rule with no example under it._  ? _What if I don\'t know when it started?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Each student says the **wrong sentence** they personally always use. Collect them. **How many are theories?** Write the right version of three of them on the board together.'));
out.push(hw('Write the **message you would send to a repair shop** (40+ words) about a real fault: what it does, every time or sometimes, when it started, and what you have already tried.'));

// ======================= 18.5 =======================
out.push(pb());
out.push(h2('18.5  Have you tried restarting it?'));
out.push(p('**Function:** suggesting a solution   ·   **Grammar:** _Have you tried_ + **-ing**?; _Why don\'t you…?_   ·   **Pronunciation:** _Have you_ /həvjə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads four problems. For each one the class must suggest a solution **three** ways: _Have you tried…? · Why don\'t you…? · You could…_'));
out.push(board('Have you tried restarting it?', 'Have you tried + -ING'));
out.push(p('**b**  Which sounds best to somebody who is already annoyed, and why? _"Restart it." · "You should restart it." · "Have you tried restarting it?" · "Why don\'t you restart it?"_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is annoyed?   **A** Nour   **B** Rami   **C** both of them'));
out.push(p('**b**  Listen again. **1** Why does Rami object to the first suggestion?   **2** What actually works, and what does Nour say about where the idea came from?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.9  Have you tried turning it off?', [
  ['Rami', 'Don\'t say it.'],
  ['Nour', 'Have you tried—'],
  ['Rami', 'I have tried turning it off and on again. Everybody always says that and it is never the answer.'],
  ['Nour', 'It is the answer about four times in ten, which is why everybody says it. But all right. Have you tried using a different wire?'],
  ['Rami', 'Yes. Two.'],
  ['Nour', 'Have you tried charging it from a wall and not from the laptop?'],
  ['Rami', '…No.'],
  ['Nour', 'Try that.'],
  ['Rami', '(pause) It\'s charging.'],
  ['Nour', 'A laptop gives out about a quarter of what a wall gives out. If the battery is very low, the telephone uses more than it is getting and it never catches up.'],
  ['Rami', 'How do you know that?'],
  ['Nour', 'Because a man came to the clinic in January with exactly this and I did not know, and I asked somebody, and now I know. That is the whole of my job.'],
  ['Rami', 'I have been charging it from the laptop for two years.'],
  ['Nour', 'Then why don\'t you move the charger to the wall by your bed? You will get it back in an hour instead of six.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Suggesting a solution — four ways, from softest to hardest**',
  table(['you say', 'how it lands'], [
    ['_**Have you tried** restart**ing** it?_', 'softest — assumes they are capable and may have done it'],
    ['_**Why don\'t you** try a different wire?_', 'friendly, direct, between equals'],
    ['_**You could** charge it from the wall._', 'offers an option without pushing'],
    ['_**Restart** it._', 'an order — fine between friends, bad with a stranger who is annoyed'],
  ], [1.3, 1.5]),
  '⚠ **_Have you tried_ + -ing**, always: ~~Have you tried to restart it?~~ → _Have you tried **restarting** it?_ (Unit 17: _try_ + -ing is the experiment.)',
  '⚠ ~~Why don\'t you to try…?~~ → _Why don\'t you **try**…?_  ⚠ ~~Why you don\'t try?~~ → _**Why don\'t you** try?_',
  '**Why _Have you tried…?_ wins with an annoyed person:** it lets them answer _"yes"_ without losing anything. _"Restart it"_ makes them say _"I have ALREADY restarted it"_, and now you are having a different conversation.',
  '**The honest line to keep:** _I did not know, and I asked somebody, and now I know._ Nobody suggesting a solution has to pretend they always knew it.',
  '**Practise:** Suggest a solution three ways for each.  1 The screen is very dark. 2 It keeps asking for the password. 3 The photograph won\'t send. 4 There is no space left. 5 It\'s very slow in the evening.',
  '**Useful phrases:** Have you tried…? · Why don\'t you…? · You could… · Try that. · That is the whole of my job. · about four times in ten',
  '**Pronunciation.** 🔊 **Track 18.10** _Have you_ at the start of a question becomes /həvjə/ — almost one syllable: _**Have you tried** restarting it?_ /həvjə traɪd/. Listen and repeat, then ask three suggestions at speed.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has the problem and is **annoyed**; B must suggest **four** solutions, starting with _Have you tried…?_ A rejects the first two with a reason. Then swap cards.'));
out.push(dlg(null, [
  ['A', '__________. And don\'t say __________.'],
  ['B', 'Have you tried __________?'],
  ['A', 'Yes. __________ times.'],
  ['B', 'Have you tried __________?'],
  ['A', 'Yes, and __________.'],
  ['B', 'Have you tried __________?'],
  ['A', '…No.'],
  ['B', 'Try that.'],
  ['A', '__________.'],
  ['B', 'Then why don\'t you __________?'],
]));
out.push(table(['Card A – the problems', 'Card B – the problems'], [
  ['the telephone will not charge (it is on a laptop)', 'the photographs will not send (no space on the account)'],
  ['the laptop is very slow after four o\'clock', 'the app keeps asking for the password (two accounts)'],
  ['the messages arrive a day late', 'the screen is unreadable outside (brightness is on automatic)'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **four** suggestions. Which one worked, and was it the simplest or the cleverest?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Bring your real problem back from 18.4. Your partner must suggest **four** solutions, all starting _Have you tried…?_ You must reject at least two **with a reason**, not just "no".'));
out.push(p('**b**  Swap. Then each of you say honestly which suggestion you will actually try, and when.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rami\'s telephone would not charge and he told Nour not to say the obvious thing, so she said it anyway and pointed out it is the answer about four times in ten. He has tried two wires. The one he has not tried is charging it from a wall instead of from the laptop, and that was it: a laptop gives out about a quarter of what a wall gives, so a flat telephone uses more than it is getting and never catches up. He has been charging it from a laptop for two years. When he asked her how she knew, she said a man came to the clinic in January with exactly this, she did not know, she asked somebody, and now she knows, and that is the whole of her job._'));
out.push(p('**Listener task:** write the solution that worked today that cost nothing.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page from the clinic\'s notebook. Answer the questions.'));
out.push(model([
  '**WHAT WE FIXED IN FEBRUARY** — Saturday clinic, Room 3',
  'Eleven people, eleven problems. We solved nine. Here are the ones worth knowing about.',
  '**"It won\'t charge" — four people, three different causes.** One bent wire. One telephone being charged from a laptop, which gives out about a quarter of what a wall gives. And one where the small hole was full of pocket dust. Only the first one needed any money, and it was eight thousand.',
  '**"It keeps asking for my password" — two people, same cause.** Both had two accounts and were typing the password of one into the other. Have you tried looking at which address is in the box? That is the whole fix.',
  '**"It\'s very slow" — three people, same cause.** No space left. Nobody has looked, because nobody has ever been told where to look.',
  '**The two we did not solve.** One laptop that is nine years old and is simply finished. And one where the problem is the signal in one room of one building, which is not a telephone problem and which we could not fix with anything in that room.',
  '**What we have learned.** Nine of eleven were free. The question that solves most problems is still "tell me exactly what it does".',
]));
out.push(item('1', 'What were the three different causes of "it won\'t charge"?'));
out.push(item('2', 'Why were two people being asked for a password again and again?'));
out.push(item('3', 'What do the writers say they have learned?'));
out.push(writers([
  'A "what we fixed" page: **the numbers** → **the complaint in quotation marks, then the causes** → **the ones you could not fix** → **what you have learned**.',
  'Group by the **sentence people said**, not by the cause — because the reader is somebody who is about to say one of those sentences.',
  'Report the **failures** honestly, with reasons. A page where everything was fixed is an advertisement; a page with two failures in it is a record.',
  '⚠ Give the **cost**. _Nine of eleven were free_ is the most useful sentence on the page, and it is the one that brings people next month.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a "what we fixed" page for a month of something you help people with (35 words or more).'));
out.push(p('**WHAT WE FIXED IN ______________**   ______________ people, ______________ problems. We solved ______________.   **"______________" — ______________ people, ______________ causes.** ______________. ______________.   **"______________" — ______________ people, same cause.** ______________.   **The ones we did not solve.** ______________.   **What we have learned.** ______________ were free. The question that solves most problems is still ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title with the month, and the numbers in the first line',
  '_Have you tried_ + **-ing** · present perfect for results (_nobody has looked_, _we have learned_)',
  'The complaints in quotation marks, grouped by what people said',
  'At least one thing you could **not** fix, with the reason',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (60 words or more) about a month of the thing you help with — at work, at home, in your family, in your building. Grouped by what people say, with the causes, the failures, and what it cost.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody thinking of coming next month**. ★ _The problem that is mine._  ✓ _One group with no cause given._  ? _What would you not be able to help me with?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Collect the pages. **Count how many problems in this room were free to fix.** That number is the reason the clinic exists, and it is the reason to say it out loud.'));
out.push(hw('Write the **page for one person** (40+ words): the problem they came with, the four things you suggested, which one worked, and what they should do if it comes back.'));

// ======================= 18.6 =======================
out.push(pb());
out.push(h2('18.6  You shouldn\'t click on that'));
out.push(p('**Function:** talking about staying safe online   ·   **Grammar:** _should_ / _shouldn\'t_; _be careful_ + to / -ing   ·   **Pronunciation:** warning intonation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Has anybody in this room ever had a message that was not really from the person it said it was from? What did it ask for? Your teacher collects the examples on the board.'));
out.push(board('You shouldn\'t click on that.', 'should / shouldn\'t · be careful about + -ing'));
out.push(p('**b**  Real or not? _A message from your bank asking you to confirm your password. · A message from a friend asking for money quickly. · A message saying you have won something you did not enter. · A message from the centre saying the room has changed._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Hiba received?   **A** a bill   **B** a message saying her account will close   **C** a message from Ms Huda'));
out.push(p('**b**  Listen again. **1** What **three** things does Nour say are wrong with the message?   **2** What does she say you should do instead of clicking?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.11  It says my account will close', [
  ['Hiba', 'I\'ve had this three times. It says my account will close tomorrow unless I confirm my details.'],
  ['Nour', 'Don\'t click it. Let me see. Right — three things, and any one of them is enough.'],
  ['Hiba', 'Go on.'],
  ['Nour', 'One: it is in a hurry. "Tomorrow." Everybody who wants to steal something from you is in a hurry, because a person in a hurry does not look carefully. Two: look at the address it came from. Not the name — the address, the long one in the small writing.'],
  ['Hiba', 'That is not their address at all.'],
  ['Nour', 'It never is. And three: no real company ever asks you to confirm a password. Not one, not ever. If you remember only one sentence from today, that is the one.'],
  ['Hiba', 'So what should I do?'],
  ['Nour', 'Nothing with this message. Don\'t click it, don\'t reply to it, and don\'t worry about it. If you are not sure whether something is real, close it and go to the company yourself — type the address you already know, or ring the number on your card. Never use the link in the message.'],
  ['Hiba', 'And if I click it by mistake one day?'],
  ['Nour', 'Then you change the password, from the proper place, today. You shouldn\'t feel stupid about it either. These are written by people whose whole job is this, and they are good at it, and the ones who click are not the careless ones. They are the ones who were busy.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Giving a safety warning**',
  table(['you say', 'when'], [
    ['_You **should** change your password._', 'a good idea'],
    ['_You **shouldn\'t** click on that._', 'a bad idea — the standard warning'],
    ['_**Never** use the link in the message._', 'absolute — stronger than _shouldn\'t_'],
    ['_**Be careful about** opening files from strangers._', '_be careful about_ + **-ing**'],
    ['_**Be careful not to** type it twice._', '_be careful **not to**_ + bare verb'],
  ], [1.4, 1.4]),
  '⚠ _should_ and _shouldn\'t_ + **bare verb**, for everybody: ~~You should to change it.~~ ~~She shoulds change it.~~',
  '⚠ ~~Be careful to not click.~~ → _Be careful **not to** click._  ⚠ ~~Be careful of clicking.~~ → _Be careful **about** clicking._',
  '**The three signs, worth copying into a notebook:**  **1** it is **in a hurry** · **2** the **address** is not the real one (look at the address, not the name) · **3** it asks you to **confirm a password** — which no real company ever does.',
  '**What to do instead of clicking:** _Close it and go to the company yourself._ Type an address you already know, or ring the number on your card. **Never** use the link in the message.',
  '⚠ The sentence to keep for other people: _**the ones who click are not the careless ones; they are the ones who were busy.**_ Shame stops people telling anybody, and not telling anybody is what does the damage.',
  '**Practise:** _should_, _shouldn\'t_, _never_ or _be careful_?  1 You ______ give your password to anybody, including a bank.  2 You ______ change it today if you clicked.  3 ______ use the link in a message you were not expecting.  4 You ______ ______ opening files from people you don\'t know.  5 You ______ feel stupid about it.',
  '**Pronunciation.** 🔊 **Track 18.12** A warning is **slower** and the key word is **longer**: _You **SHOULDN\'T** click on that._ · _**NEVER** use the link._ Said at normal speed it sounds like information and people ignore it. Listen and repeat both.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the message on the card aloud; B finds **three** things wrong with it and says what A should do instead. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'I\'ve had this. It says __________.'],
  ['B', 'Don\'t click it. Let me see. Three things.'],
  ['B', 'One: __________.'],
  ['B', 'Two: look at __________. Not __________ — __________.'],
  ['A', 'That isn\'t __________.'],
  ['B', 'It never is. And three: __________.'],
  ['A', 'So what should I do?'],
  ['B', 'Nothing with this. __________, and __________. If you\'re not sure, __________. Never __________.'],
]));
out.push(table(['Card A – the messages', 'Card B – the messages'], [
  ['"Your account will close tomorrow unless you confirm your details."', '"You have won a telephone. Click here within 24 hours."'],
  ['"Your delivery is waiting. Pay 3,000 to release it."', '"Hello it\'s me, I\'ve lost my phone, can you send money quickly?"'],
  ['"Your password has expired. Enter the old one and a new one."', '"Your photographs will be deleted. Log in to keep them."'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **three** signs. Which of them would you have noticed on your own at half past eight in the morning?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Has this happened to anybody you know? Tell your partner the story: what the message said, what the person did, and what happened. If it has never happened to anybody you know, that is itself worth saying out loud.'));
out.push(p('**b**  Then each of you decide **one** thing you are going to do this week: change one password, look at one address properly, or tell one person in your family the three signs. Say which, and to whom.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Hiba has had the same message three times, saying her account will close tomorrow unless she confirms her details. Nour gave three signs: it is in a hurry, because somebody in a hurry does not look carefully; the address it came from is not the company\'s address at all, and you have to look at the address and not the name; and no real company ever asks you to confirm a password, not one and not ever. What you should do instead of clicking is close it and go to the company yourself — type an address you know or ring the number on your card. The sentence I am taking away is that the people who click are not the careless ones, they are the ones who were busy._'));
out.push(p('**Listener task:** write the one person you are going to tell the three signs to this week.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the card from the clinic. Answer the questions.'));
out.push(model([
  '**THREE SIGNS, AND WHAT TO DO** — keep this where somebody older than you can see it',
  'These messages are written by people whose whole job is writing them. They are good at it. If you have clicked one, you are not careless; you were busy, and being busy is what they are counting on.',
  '**Sign 1: it is in a hurry.** "Tomorrow." "Within 24 hours." "Your account will close." Nothing real in your life closes tomorrow without three letters first.',
  '**Sign 2: the address is wrong.** Look at the address it came from, not the name at the top. The name can say anything. The long address in the small writing is the one that cannot lie, and it is never the real company.',
  '**Sign 3: it asks for a password.** No real company has ever asked anybody to confirm a password. Not one. Not ever. If you remember one sentence from this card, that is it.',
  '**What to do instead.** Close the message. Go to the company yourself — type the address you already know, or ring the number printed on your card. Never use the link in the message, even if it looks right.',
  '**And if you clicked.** Change that password today, from the proper place, and tell somebody. The damage is almost never the click. It is the two weeks of saying nothing because you were embarrassed.',
]));
out.push(item('1', 'Why does the card say the people who click are not careless?'));
out.push(item('2', 'Which part of a message cannot lie?'));
out.push(item('3', 'According to the card, what actually causes the damage?'));
out.push(writers([
  'A safety card: **remove the shame first** → **numbered signs, each with examples** → **what to do instead** → **what to do if it has already happened**.',
  'The **first paragraph decides whether the card works**. A card that begins _be careful_ is read by the people who are already careful. One that begins _you are not careless, you were busy_ is read by everybody.',
  'Give the **exact words** the messages use: _"within 24 hours" · "your account will close"_. People recognise a phrase long after they have forgotten a rule.',
  '⚠ The last section is the most important and is the one always left out. Name the real damage — _the two weeks of saying nothing_ — so that the reader tells somebody on the first day.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a safety card for something you know about (35 words or more) — online, at home, in the street, with money, with documents.'));
out.push(p('**______________ SIGNS, AND WHAT TO DO** — keep this ______________   ______________. If you have ______________, you are not ______________; you were ______________.   **Sign 1: ______________.** "______________." ______________.   **Sign 2: ______________.** ______________ cannot lie.   **Sign 3: ______________.** If you remember one sentence from this card, ______________.   **What to do instead.** ______________. Never ______________.   **And if ______________.** ______________ today, and tell somebody. The damage is almost never ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title, and a first paragraph that removes the shame',
  '_should_ / _shouldn\'t_ + bare verb · _never_ for the absolute ones · _be careful about_ + -ing',
  'At least two exact phrases in quotation marks',
  'A final section saying what to do **if it has already happened**',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full card (60 words or more) for the person in your family who most needs it. Three signs with their exact words, what to do instead, and what to do if it has already happened.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s card as **the person it was written for**. ★ _The line that would stop me clicking._  ✓ _One sign I would not recognise from your description._  ? _What if I\'ve already done it and I didn\'t tell anybody?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Everybody takes their card home and gives it to the person they wrote it for. **Next week, say whether they read it.** That is the only homework in this book that is checked by somebody who is not in the room.'));
out.push(hw('Write the **message you would send to your whole family group** (40+ words): the three signs, in your own words, short enough that people read all of it.'));

// ======================= 18.7 =======================
out.push(pb());
out.push(h2('18.7  Review & Mediate: What does the screen say?'));
out.push(p('**Function:** explaining an app screen and a confirmation message   ·   **Recycling:** Units 1–18   ·   **Exam practice:** A2 Key Reading Part 4, Writing Part 6, Listening Part 5'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 18 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** How I find the timetable?  **2** You should to open the app first.  **3** I\'ve sent it yesterday.  **4** It doesn\'t want to turn on.  **5** Have you tried to restart it?  **6** Be careful to not click the link.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the confirmation message on the screen of Nour\'s telephone, after she books a bus ticket for her mother.'));
out.push(box(null, [
  '**BOOKING CONFIRMED** ✔',
  '**Reference:** DX4-91T   ·   **Keep this reference. You cannot change the booking without it.**',
  '**Passenger:** NASSER, S.   ·   **Seat:** 14A (window)',
  '**Damascus → Latakia** · Friday 21 March · Departs **07:00** · Arrives approx. **12:30**',
  '**Boarding closes 10 minutes before departure.**',
  '**Paid:** 48,000 SYP · card ending 4417',
  '**Changes:** one change allowed, free, up to 18:00 the day before. After that, no change and no refund.',
  '**This screen is not a ticket.** Show the reference at the window on the day and collect the ticket there.',
  '**A copy has been sent to the email address on the account.** If it has not arrived in 10 minutes, check the address in Settings → Account.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Nour explains the screen to her mother. What does her mother have to do on the day, and what does she almost get wrong?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.13  It is not a ticket', [
  ['Mother', 'So that is my ticket. Put it on the telephone and I will show them the telephone.'],
  ['Nour', 'No — and this is the one thing on this screen that matters. It says, here, "this screen is not a ticket". It is a confirmation. On the day you go to the window, you say this reference, and they give you a paper ticket.'],
  ['Mother', 'Then what is the point of the telephone?'],
  ['Nour', 'The point of the telephone is that the seat is yours. 14A, by the window, which I did on purpose.'],
  ['Mother', 'Say the letters again.'],
  ['Nour', 'D, X, four, nine, one, T. I have written it on a piece of paper for your purse, because you will not have the telephone out at the window with a bag in each hand.'],
  ['Mother', 'And the times?'],
  ['Nour', 'It leaves at seven and arrives about half past twelve. And read this line: boarding closes **ten minutes** before. So not seven. Quarter to seven, standing there.'],
  ['Mother', 'And if Rania\'s exam moves and I have to go on the Saturday?'],
  ['Nour', 'You can change it once, free, but only until six o\'clock the evening before. After six, nothing — no change and no money back. So if anything moves, you ring me on Thursday afternoon, not Thursday night.'],
  ['Mother', 'And what is this last part?'],
  ['Nour', 'It says a copy has gone to the email on the account, which is mine. So if anything is wrong with it, it comes to me and not to you, and that is correct and I am leaving it like that.'],
]));
out.push(sp());
out.push(box('Language box – explaining a confirmation screen', [
  'Find the one line that **changes what the person must do** and give it first: _"this screen is not a ticket"_. A confirmation screen usually contains one trap and nine facts.',
  'Give the **reference** slowly, letter by letter, and put it somewhere that is not the telephone: _I have written it on a piece of paper for your purse, because you will not have the telephone out with a bag in each hand._',
  'Turn the times into an **arrival time for the person**: _boarding closes ten minutes before_ → _so not seven. Quarter to seven, standing there._',
  'Explain the **deadline** as a day and an hour, with the consequence: _free until six the evening before; after six, nothing_ → _so you ring me on Thursday **afternoon**_.',
  'Say who the **copy goes to** and whether that is right: _it comes to me and not to you, and I am leaving it like that_.',
  'End with the **two things to do**: the paper in the purse, and the time to be standing there.',
  '**Useful phrases:** This is the one thing that matters. · It says, here… · Say the letters again. · So not seven — quarter to seven. · If anything moves, ring me on…',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has one of the screens below and does **not** show it. A explains it to B and C, who ask about anything unclear and must each end by saying what they will do and when. Change roles with the other screen.'));
out.push(table(['Screen A – a clinic appointment', 'Screen B – an online order'], [
  ['APPOINTMENT CONFIRMED · Ref CL-2280', 'ORDER PLACED · No. 77341'],
  ['Dr Khalil · Tuesday 25 March · 16:40', 'Delivery: Tuesday–Thursday, 09:00–18:00'],
  ['Arrive 15 minutes early with your ID.', 'Somebody must be at the address. Two attempts only.'],
  ['Cancel free up to 24 hours before. After that a fee applies.', 'Pay the driver in cash. We do not take cards at the door.'],
  ['This confirmation is not a prescription.', 'Check the items now. You cannot change the order after 20:00 today.'],
  ['A reminder will be sent the day before.', 'Keep this number for any question.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write the **reference**, the **deadline**, and the **one thing the screen is not**.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Find a **real** confirmation on your own telephone — a booking, an order, an appointment, a payment, a form you sent. Explain it to your partner so completely that they could act on it for you. They must ask: _what is the reference?_, _what is this screen not?_, _what is the deadline?_ and _who does the copy go to?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Hiba explained the confirmation for an order she made last week. The number at the top is the order number and it is the only thing anybody will ask her for. The delivery is between Tuesday and Thursday, nine until six, which is not a time, it is three days, and somebody has to be at the address — they try twice and then it goes back. You pay the driver in cash and they do not take a card at the door, which she says is the line everybody misses and which would have caught her. And she could not change the order after eight o\'clock that evening, which was already past when she showed me. So I decided that when I order anything I am going to read the "you cannot change this after" line first, before I read what I have bought._'));
out.push(p('**Listener task:** did they tell you what the screen **is not** before the details? What was the deadline that was already past?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 4)', 7));
out.push(p('Read the text and choose **A**, **B** or **C** for each question.'));
out.push(model([
  '**ELEVEN PEOPLE, NINE PROBLEMS**  · by Nour',
  'We have been running the Saturday clinic for six weeks now, and I have learned more in six Saturdays than in two years of being the person at work who fixes things.',
  'The first thing I have learned is that almost nobody can describe a fault. They tell you what they think is wrong instead of what the machine does, and the two are different about half the time. A woman came in February and said her telephone would not charge; what it actually did was start and stop. Her grandson sat on the wire. She was about to buy a telephone.',
  'The second thing is the money. Of the eleven problems we have had this month, nine cost nothing at all and the tenth cost eight thousand. The one we could not solve was a laptop that is nine years old, and I told her so, and she thanked me for not pretending.',
  'The third thing is harder. People do not come because they are embarrassed, and the ones who most need an hour on a Saturday are the ones who will not walk in. Mr Bassam has locked himself out of his account twice and has not once come to Room 3, and he works here.',
  'So from next month the card on the door has one new line on it, and it is the only line I have ever written that I am proud of: **nobody is asked how old they are.**',
]));
[
  '**1**  What has Nour learned most about?     **A** repairing machines   **B** how people describe faults   **C** how to run a club',
  '**2**  What was really wrong with the woman\'s telephone?     **A** the battery   **B** the wire   **C** nothing at all',
  '**3**  How much did nine of the eleven problems cost?     **A** nothing   **B** eight thousand   **C** she does not say',
  '**4**  Why did the woman with the old laptop thank her?     **A** because it was fixed   **B** because it was free   **C** because Nour was honest with her',
  '**5**  What does Nour say about Mr Bassam?     **A** he has come twice   **B** he needs help and has not come   **C** he has fixed it himself',
  '**6**  Why is the new line on the card important to her?     **A** it brings more people   **B** it is about the reason people stay away   **C** it was somebody else\'s idea',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message to the person who is travelling (35 words or more). Use the confirmation screen above.'));
out.push(p('Mum —   It\'s booked. The reference is ______________ — I\'ve ______________, because ______________.   You\'re on the ______________ bus on ______________, seat ______________, ______________. It arrives about ______________.   This is **not** ______________. At the window you ______________ and they ______________.   Boarding closes ______________, so be there at ______________, not ______________.   If anything changes, ring me ______________ — after ______________ there\'s ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A greeting, an ending, and two short paragraphs',
  'Present perfect for results (_I\'ve booked · it has been sent_) · imperatives for the instructions',
  'At least two linkers (_and · but · because · so_)',
  'All three content points: the reference and the times · what the screen is not · the deadline for changing it',
]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 10));
out.push(box(null, [
  'Your English friend **Sam** cannot open a file you sent him.',
  'Write an email to Sam.  In your email:  •  say **what you have done**  •  suggest **one thing he should try**  •  tell him **what to do if it still doesn\'t work**.',
  'Write **25 words or more**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(pb());
out.push(stage('✓', 'Unit 18 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  ___ I find the timetable?   a) How do   b) How   c) How I do',
  '2  First, ___ the app. Then type your password.   a) you open   b) open   c) to open',
  '3  I ___ it three times — look, it\'s in the sent folder.   a) sent   b) have sent   c) send',
  '4  I ___ it yesterday morning.   a) have sent   b) sent   c) have send',
  '5  It ___ turn on. I\'ve tried everything.   a) won\'t   b) doesn\'t want to   c) isn\'t',
  '6  It ___ asking for my password.   a) keeps   b) keep   c) is keep',
  '7  Have you tried ___ it?   a) to restart   b) restarting   c) restart',
  '8  You ___ click on a link in a message you weren\'t expecting.   a) shouldn\'t   b) shouldn\'t to   c) don\'t should',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 5 style – matching).** 🔊 **Track 18.14** Ms Huda says what each person brought to the Saturday clinic. Write a letter **A–G**. There are **two** extra letters.'));
out.push(table(['People', 'What was really wrong'], [
  ['1  Umm Rashid ___', 'A  there was no space left on the device'],
  ['2  Rami ___', 'B  the wire was bent'],
  ['3  Hiba ___', 'C  two accounts, and the wrong password each time'],
  ['4  Mr Bassam ___', 'D  the message was not from the company it said'],
  ['5  Lama ___', 'E  it was being charged from a laptop, not a wall'],
  ['', 'F  the screen was broken and had to be replaced'],
  ['', 'G  the device was too old to repair'],
], [1, 2]));
out.push(dlg('Track 18.14  Audio script (read after the check)', [
  ['Ms Huda', 'Before we finish, here is what the Saturday clinic found this month. Umm Rashid came in certain that she needed a new telephone; what she needed was a new wire, because her grandson sat on the old one. Rami\'s telephone would not charge either, and there was nothing wrong with the wire at all — he has been charging it from his laptop for two years, which gives out about a quarter of what a wall gives. Hiba brought a message saying her account would close the next day, and the address it came from was not the company\'s address, which is the thing to look at and the thing nobody looks at. Mr Bassam finally came, after two months of being locked out, and it turned out he has two accounts and has been typing the password of one into the other. And Lama\'s laptop was simply full — no space left, and nobody has ever told her where to look.'],
]));
out.push(p('**C  Writing.** Somebody in your family cannot do something on their telephone. Write them a card (40+ words): four steps with _First / Then / After that / Finally_, one line saying where to look, and one line saying what to do if it goes wrong.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 18)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ ask _How do I…?_ and give the answer as steps',
  '☐ give four instructions with _First, Then, After that, Finally_',
  '☐ say where to look, not just what to do',
  '☐ say what I have done with the present perfect',
  '☐ describe a fault by what it **does**, not what I think is wrong',
  '☐ suggest a solution with _Have you tried…?_',
  '☐ give a safety warning with _shouldn\'t_ and _never_',
  '☐ explain a confirmation screen to somebody who cannot read it',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: THE MID-BOOK TEST — UNITS 13 TO 18', [
  'The Mid-Book Test comes next in this book. It is **60 marks**: Reading Parts 1–3, Writing Part 6, Listening Parts 1–2.',
  'It covers **Units 13 to 18** — the present perfect, _will_ and _going to_, conditionals, _used to_, verb patterns, and instructions.',
  'Before it: look again at the **"I can…"** box at the end of each of the six units. The lines you have not ticked are the lines the test will find.',
  'After it, Unit 19 begins the second half of the book.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Unit 18 · Student\'s Book');
