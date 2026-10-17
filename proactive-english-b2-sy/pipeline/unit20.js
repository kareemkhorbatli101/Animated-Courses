// Proactive English B2 · Syria Edition · Book 2 · Unit 20 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';
const slip = '**Peer review, B2 band 2.** Name the criterion and **copy the line** — the line itself, not a summary — and say what you found. Then **one thing to keep, and why it works.** Then **rank the slip you were given**: most useful criterion first, least useful last.';

out.push(h1('Unit 20  Giving Bad News in Writing'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit', [
  '**20.1** The sentence that carries the news   ·   **20.2** The reason, and the one you must not give   ·   **20.3** What is still available',
  '**20.4** What it costs them, said by you first   ·   **20.5** Somebody you will meet again   ·   **20.6** The whole letter   ·   **20.7** Review & Mediate: the writer and the reader of bad news',
  '⚠ **Unit 19 was about rooms; 20 is about the letter that follows a decision somebody will not like** — **a refusal, a cancellation, a date withdrawn, a post not confirmed.**',
  '**And the connection to 19.2 should be made on the first day.** ⚠ **A decision that was formulated in the room can be written in four lines.** **One that was never formulated has to be explained** — **and the explanation is where bad-news letters go wrong.**',
], C.lteal, C.teal));

// ===================== 20.1 =====================
out.push(pb());
out.push(h2('20.1  The sentence that carries the news'));
out.push(p('**Function:** putting the news in the first sentence, short and unhedged   ·   **Grammar:** the news sentence — a subject, a verb and a date   ·   **Pronunciation:** the news said once, and then silence'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, with a bad-news letter you have received. ⚠ **Find the sentence that carries the news and say which paragraph it is in.** **Then say what the first sentence of the letter does instead.** **In most letters the news is in the third or fourth paragraph and the first sentence names the file.**'));
out.push(board('We have given careful consideration to your order and to the pressures on our schedule.', 'We cannot print the ministry order by 2 April.'));
out.push(p('**b**  Which carries the news? **1** _We have given careful consideration to your order and to the various pressures on our schedule._  **2** _We cannot print the ministry order by 2 April._  **3** _It has unfortunately been decided that we may not be in a position to assist on this occasion._  **4** _Your apprenticeship will not be confirmed in July._  **5** _I am writing with regard to your order of 11 February._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where does Ms Huda say the news goes, and what does she say a reader does who has to hunt for it?   **A** in the second paragraph; they read on   **B** **in the first sentence, short and with a date in it** — and **a reader who has to hunt reads everything else as an excuse, and is right to**   **C** at the end; they telephone'));
out.push(p('**b**  Listen again. **1** What happened with Mr Tahhan\'s letter of 11 March?   **2** What does Ms Huda say about explaining in the same sentence?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.1  At eight the next morning', [
  ['Ms Huda', 'Mr Tahhan. The letter of the eleventh of March.'],
  ['Bassel', '**I had to tell a customer we could not print the ministry order by the second of April.** ⚠ **Four paragraphs, and the news was in the fourth.**'],
  ['Ms Huda', '**What were the first three?**'],
  ['Bassel', '**The order reference. The pressure on the machines. And nineteen years of working together.** ⚠ **All true, and all of it written before I had told him anything.**'],
  ['Ms Huda', '**And?**'],
  ['Bassel', '⚠ **He telephoned at eight the next morning having read the first paragraph only.** **He thought the letter was about the price.**'],
  ['Ms Huda', '**So the three paragraphs did not soften the news; they hid it, and then he had it from me by telephone with no page in front of him.** ⚠ **Which is the worst way to receive it.**'],
  ['Omar', 'Where does it go, then?'],
  ['Ms Huda', '**The first sentence.** ⚠ **Short, with a date in it, and nothing in front of it.** _We cannot print the ministry order by 2 April._ **Nine words.**'],
  ['Dima', 'And the three faults, because I write all three.'],
  ['Ms Huda', '**Three.** ⚠ **The news buried. The news hedged** — _we may unfortunately not be in a position to_ — **and the news in the passive with nobody in it:** _it has been decided that_.'],
  ['Rim', 'The third is my whole template.'],
  ['Ms Huda', '⚠ **_It has been decided_ tells the reader that somebody decided and that you are not going to say who.** **They will spend the next fortnight finding out, and they will be entitled to.**'],
  ['Adnan', 'And the test?'],
  ['Ms Huda', '**Cover everything but the first sentence and ask somebody what has happened.** ⚠ **If they cannot say, the letter does not carry its news** — **and the test takes four seconds and cannot be argued with.**'],
  ['Hiba', 'Is it not cruel, with nothing in front of it?'],
  ['Ms Huda', '**It is the opposite, and this is the thing the unit has to establish early.** ⚠ **A reader who has to hunt for the news reads everything else as an excuse** — **and they are right, because a letter that delays the news was arranged to delay it.** **The kindness is in paragraphs two to five, which is where this unit goes.**'],
  ['Mazen', 'And saying it out loud?'],
  ['Ms Huda', '🔊 **Once, and then silence.** ⚠ **Say the news and stop.** **Everybody explains in the same breath** — _we cannot print it by the second, because the machines are, as you know, under a great deal of…_ — **and the explanation inside the news sentence is what makes the news sound negotiable.**'],
]));
out.push(sp());
out.push(box('Language box – the sentence that carries the news', [
  '**The news goes in the first sentence.** ⚠ **Short, with a date in it, and nothing in front of it.** _We cannot print the ministry order by 2 April._ **Nine words.**',
  '**Three faults, and most people write all three.** ⚠ **1 The news buried** _(paragraph four)_. **2 The news hedged** _(we may unfortunately not be in a position to)_. **3 The news in the passive with nobody in it** _(it has been decided that)_.',
  '⚠ **_It has been decided_ tells the reader that somebody decided and that you are not going to say who.** **They will spend the next fortnight finding out, and they will be entitled to.**',
  '**The test, and it takes four seconds.** ⚠ **Cover everything but the first sentence and ask somebody what has happened.** **If they cannot say, the letter does not carry its news.**',
  '**Three paragraphs in front of the news do not soften it; they hide it.** ⚠ **Mr Tahhan\'s customer telephoned at eight the next morning having read the first paragraph only** — **and then had the news by telephone with no page in front of him, which is the worst way to receive it.**',
  '⚠ **A reader who has to hunt for the news reads everything else as an excuse** — **and they are right, because a letter that delays the news was arranged to delay it.** **The kindness belongs in paragraphs two to five and not in front of the news.**',
  '**The shapes.** _We cannot ______ by ______._ _Your ______ will not be ______ in ______._ _The ______ is cancelled, with effect from ______._ ⚠ **And the ones that carry nothing:** _I am writing with regard to_ · _we have given careful consideration_ · _it has been decided that_ · _we may not be in a position to_.',
  '**Pronunciation.** 🔊 **Track 20.2** **Once, and then silence.** ⚠ **Say the news and stop.** **Everybody explains in the same breath** — _we cannot print it by the second, because the machines are, as you know, under…_ — **and an explanation inside the news sentence is what makes the news sound negotiable.**',
  '**And one thing about the date, which is the half that gets left out.** ⚠ **A refusal with no date in it is a refusal of everything for ever.** _We cannot print it by 2 April_ **leaves the eleventh of April open;** _we cannot print it_ **does not** — **and the reader will not ask, because they have been refused.**',
  '**Practise:** Put the news in one sentence, with a date. **1** a cancellation  **2** a post not confirmed  **3** a date that cannot be met  **4** one hedged, so that you hear it  **5** one with no date in it, and the repair',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the situation from the card. B gives **the news in one sentence, under fifteen words, with a date in it.** ⚠ **Two rows on each card are situations in which the news has no date**, and B must say what the refusal is actually limited to. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the situation)_ __________.'],
  ['B', '**__________ by __________.** _(and nothing after it)_'],
]));
out.push(table(['Card A – the situation', 'Card B – the situation'], [
  ['_The ministry order cannot be printed by 2 April._', '_The apprenticeship will not be confirmed in July._'],
  ['_⚠ The supplier is being taken off the list._', '_⚠ The archive is being closed to new readers._'],
  ['_The January consignment is refused on batch numbers._', '_The analyser trial is being stopped after two months._'],
  ['_⚠ The post has been withdrawn._', '_⚠ The weekly escalation meeting is ending._'],
  ['_The quoted price cannot be held after 20 May._', '_The second signature is being dropped from 1 August._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each news sentence, its word count and its date. ⚠ **The four rows marked ⚠ have no date in them as they stand** — **and a refusal with no date refuses everything for ever.** **Make the pairs supply the limit:** _off the list for this quarter_, _closed until the index is rebuilt_. **A reader who is refused does not ask what the refusal covers.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a piece of bad news you have had to give. ⚠ **Write it in one sentence, under fifteen words, with a date** — **and then cover the rest of your draft and ask your partner what has happened.**'));
out.push(p('**b**  Swap and perform. Your partner reads your news sentence **with an explanation attached** and then alone. ⚠ They say which version sounds negotiable.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Bassel had to tell a customer that the press could not print the ministry order by the second of April. The letter ran to four paragraphs and the news was in the fourth: the first three were the order reference, the pressure on the machines, and nineteen years of working together — all true, and all of it written before he had told the man anything. The customer telephoned at eight the next morning having read the first paragraph only, and thought the letter was about the price. So the three paragraphs did not soften the news; they hid it, and then he had it by telephone with no page in front of him, which is the worst way to receive it. Omar asked where it goes, and the first sentence: short, with a date in it, and nothing in front of it — we cannot print the ministry order by 2 April, nine words. Dima asked about the three faults, since she writes all three, and three: the news buried, the news hedged — we may unfortunately not be in a position to — and the news in the passive with nobody in it, which is it has been decided that. Rim said the third is her whole template, and it has been decided tells the reader that somebody decided and that you are not going to say who: they will spend the next fortnight finding out, and they will be entitled to. Adnan asked about the test, which is to cover everything but the first sentence and ask somebody what has happened — if they cannot say, the letter does not carry its news, and the test takes four seconds and cannot be argued with. Hiba asked whether it is not cruel with nothing in front of it, and it is the opposite: a reader who has to hunt for the news reads everything else as an excuse, and they are right, because a letter that delays the news was arranged to delay it. The kindness is in paragraphs two to five. And Mazen asked about saying it out loud: once, and then silence, because an explanation inside the news sentence is what makes the news sound negotiable._'));
out.push(p('**Listener task:** write your partner\'s news sentence, its word count and its date.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Bassel sends on the twentieth of March, and the note under it. Answer the questions.'));
out.push(model([
  '**DAR AL-KUTUB PRESS · QASSAA** · 20 March · _to Mr Saqqal, Directorate of Supply_',
  '**We cannot print the ministry order by 2 April.** ⚠ **The earliest date we can hold is 19 April, and I can hold it until Thursday.**',
  '**Why, and it is one reason and not three.** **The older machine has been out since 6 March, waiting for a roller that is coming from Aleppo.** ⚠ **With one machine the order is eleven working days and not five.** **The roller is expected on the 11th and I am not relying on that date; the 19th assumes it arrives on the 14th.**',
  '**What I am not going to say, although it is also true.** ⚠ **We are busy, and the ministry order is not the largest thing on the floor.** **Both of those are my problem and neither of them is a reason you should have to accept** — **the roller is the reason.**',
  '**What is still open.** **The first four thousand can be printed on the newer machine by 2 April**, ⚠ **if you will take them in two deliveries.** **If the second half can wait to the 19th you lose nothing at all except one gate movement.**',
  '**What this costs you, as far as I can see it.** ⚠ **If the whole order must be with the ministry on the 2nd, you will have to place it elsewhere, and the two places that could take it will both quote above us.** **I would rather tell you that than let you find it on Thursday afternoon.**',
  '**And one thing I have put in because he will ask.** ⚠ **The newer machine is running two shifts and the four thousand are the most it can take out of the ministry order without pushing the Suwayda labels off the Thursday run.** **If he wants more than four thousand by the second, something of somebody else\'s is late** — **and I would rather he knew that than thought I was holding back.** **The Suwayda labels are a smaller job than his and the works has printed them every month for eleven years.**',
  '**NOTE for the office, which did not go with the letter.** ⚠ **My letter of 11 March on the same subject ran to four paragraphs and put this news in the fourth.** **Mr Saqqal telephoned at eight the next morning having read the first and thought it was about the price.** **This one is shorter by about a third and it contains one thing the other did not: a date he can still use.**',
]));
out.push(item('1', 'What is the one reason he gives, and what does he refuse to give as a reason?'));
out.push(item('2', 'What is still open, and what does it cost the reader to take it?'));
out.push(item('3', 'What does the note say about the letter of 11 March?'));
out.push(writers([
  'A bad-news letter: **the news in the first sentence, with a date** → **the earliest thing you can still offer, and how long you can hold it** → **one reason, with the fact behind it** → **what you are not going to say, although it is true** → **what is still open, and what it asks of the reader** → **and what it costs them, as far as you can see it.**',
  '⚠ **Put the alternative date in the second sentence, not the fifth.** **A reader who has a usable date by then reads the rest for information; one who has none reads it for an escape.**',
  '**Give one reason and name the ones you are not giving.** ⚠ _We are busy, and the ministry order is not the largest thing on the floor._ **Then:** _both of those are my problem and neither is a reason you should have to accept._ **It costs two lines and it is the most convincing thing on the page.**',
  '**Say what the alternative asks of them.** _If you will take them in two deliveries._ ⚠ **An offer with its own cost hidden is a second piece of bad news with a delay built in.**',
  '⚠ And **price it from their side and say you would rather they heard it from you.** _The two places that could take it will both quote above us._ **A writer who tells a reader what the refusal will cost them has given them the one thing the letter could not be expected to contain.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the bad-news letter (80 words or more).'));
out.push(p('**______________** · ______________ · _to ______________   **______________ by ______________.** ⚠ **The earliest ______________ is ______________, and I can hold it until ______________.**   **Why, and it is one reason and not three.** ______________. ⚠ **With ______________ it is ______________ and not ______________.**   **What I am not going to say, although it is also true.** ⚠ ______________. **Both of those are ______________ and neither of them is ______________.**   **What is still open.** ______________, ⚠ **if you will ______________.**   **What this costs you, as far as I can see it.** ⚠ ______________. **I would rather tell you that than ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The news in the first sentence, under fifteen words, with a date',
  'A usable date by the second sentence, with how long it is held',
  'One reason, and the true ones you refuse to give',
  'The cost to the reader, priced from their side',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first sentence**, and the room says what has happened and by when.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (180 words or more), to the shape in the writer\'s box: the news first with a date, the alternative in the second sentence, one reason with the refused ones named, and the cost from their side.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the news in the first sentence with a date, a usable date by the second, one reason with the true ones you refuse, and the cost priced from the reader\'s side.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your news sentence with an explanation attached, and then alone.** ⚠ **The room says which one sounds negotiable** — **and it is the first, because an explanation inside the news is an invitation to argue with the explanation.** **Do it twice, because the first time the room hears the explanation and the second time it hears the news.** Then the sentence the cycle ends on, which is Mr Tahhan\'s: **he telephoned at eight the next morning having read the first paragraph only.**'));
out.push(hw('Write the letter (80+ words). ⚠ Then take the bad-news letter you brought and do the four-second test on it: **cover everything but the first sentence and give it to somebody.** **Write down what they say has happened.** **Then find the paragraph the news is actually in and write the number.** **20.2 is about the reason** — **and about the one reason you must never give, which is the one most letters give.** ⚠ **And bring a refusal whose reason you did not believe.**'));

// ===================== 20.2 =====================
out.push(pb());
out.push(h2('20.2  The reason, and the one you must not give'));
out.push(p('**Function:** giving one reason, and refusing to give one that is not the operative one   ·   **Grammar:** the reason as a fact with a date behind it   ·   **Pronunciation:** the reason said once, with no _as you know_ in front of it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, with the refusal whose reason you did not believe. ⚠ **Read the reason out and say why you did not believe it.** **Then the question that decides the cycle: if that reason were removed, would the answer have changed?** **In most cases it would not** — **which is why you did not believe it.**'));
out.push(board('Owing to pressure of work we are unable to assist on this occasion.', 'The older machine has been out since 6 March, waiting for a roller from Aleppo.'));
out.push(p('**b**  Which is a reason? **1** _Owing to pressure of work we are unable to assist._  **2** _The older machine has been out since 6 March, waiting for a roller from Aleppo._  **3** _Unfortunately this falls outside our current priorities._  **4** _There is a reason and I am not able to give it; it concerns a third party and not you._  **5** _As you know, our resources are not unlimited._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What test does Ms Huda give for a reason, and what does she say about giving three?   **A** it must be short; three is thorough   **B** **if the reader removed it, would the answer change?** — and **three reasons read as none, because the reader argues with the weakest**   **C** it must be polite; three is generous'));
out.push(p('**b**  Listen again. **1** What does Mr Hariri say happened over his ten letters?   **2** What does Ms Huda say to do when the real reason cannot be given?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.3  Ten letters, four reasons', [
  ['Ms Huda', 'Mr Hariri. The handset batch. How many times did you ask and what were you told?'],
  ['Mazen', '⚠ **Ten letters over fourteen months, and four different reasons.** **The batch was out of warranty. Then the model was discontinued. Then the fault was not a manufacturing fault. Then the warranty question was with their legal office.**'],
  ['Ms Huda', '**Did you believe any of them?**'],
  ['Mazen', '**I believed the first one for about six weeks.** ⚠ **After the third I stopped reading the reasons** — **and that is the cost of this, and it is not recoverable.**'],
  ['Ms Huda', '**Say why four reasons is worse than one.**'],
  ['Mazen', '⚠ **Because each one answered the last.** **If the model is discontinued, the warranty does not matter; if the fault is not theirs, neither does.** **They were not reasons; they were whatever would close the letter.**'],
  ['Ms Huda', '**And the test is one question.** ⚠ **If the reader removed this reason, would the answer change?** **If it would not, it is not the reason** — **it is a sentence put there to fill the place a reason goes.**'],
  ['Omar', 'And three reasons at once?'],
  ['Ms Huda', '**Three read as none.** ⚠ **A reader given three arguments with the weakest, answers it, and now expects the decision to move** — **and when it does not, they have learned that the reasons were ornamental.**'],
  ['Dima', 'What makes a reason a reason?'],
  ['Ms Huda', '**A fact with a date behind it.** ⚠ _The older machine has been out since 6 March, waiting for a roller from Aleppo._ **_Pressure of work_ is a state and it is permanent** — **and a permanent reason is a refusal of everything for ever, which is 20.1 again.**'],
  ['Rim', 'And the reason you must not give?'],
  ['Ms Huda', '⚠ **A true one that is not the operative one.** **Mr Tahhan is busy and the ministry order is not his largest job** — **both true, and if he writes either of them the customer can answer it, and then he must refuse again or give in.**'],
  ['Bassel', '⚠ **So I named them and said they were mine and not reasons he should have to accept.**'],
  ['Ms Huda', '**Which costs two lines and is the most convincing thing on the page.**'],
  ['Adnan', 'And when the real reason cannot be given at all?'],
  ['Ms Huda', '**Then say that, and say what kind of thing it is.** ⚠ _There is a reason and I am not able to give it; it concerns a third party and not you._ **A substitute reason can be answered, and when it is, the refusal looks arbitrary** — **so the silence, named, is the honest form.**'],
  ['Mazen', 'And saying it out loud?'],
  ['Ms Huda', '🔊 **Once, with no _as you know_ in front of it.** ⚠ _As you know_ **does one of two things: it tells the reader something they do not know, or it uses their own knowledge against them.** **Both are heard, and the phrase is four words of the only sentence in the letter that had to be believed.**'],
]));
out.push(sp());
out.push(box('Language box – the reason', [
  '**The test is one question.** ⚠ **If the reader removed this reason, would the answer change?** **If not, it is not the reason** — **it is a sentence put there to fill the place a reason goes.**',
  '**One reason, not three.** ⚠ **Three read as none.** **A reader given three arguments with the weakest, answers it, and expects the decision to move** — **and when it does not, they have learned that the reasons were ornamental.**',
  '**A reason is a fact with a date behind it.** ⚠ _The older machine has been out since 6 March, waiting for a roller from Aleppo._ **_Pressure of work_ is a state, and a permanent state is a refusal of everything for ever.**',
  '**And the one you must not give: a true reason that is not the operative one.** ⚠ **If you write it, the reader can answer it** — **and then you must refuse again or give in.**',
  '**The honest move costs two lines.** ⚠ _We are busy, and your order is not the largest thing on the floor. Both of those are my problem and neither is a reason you should have to accept._ **It is the most convincing thing on the page because it is the only part the writer gains nothing from.**',
  '**When the real reason cannot be given at all, say that and say what kind of thing it is.** ⚠ _There is a reason and I am not able to give it; it concerns a third party and not you._ **A substitute reason can be answered, and when it is, the refusal looks arbitrary.**',
  '⚠ **And four reasons across ten letters is the worst version of all**, **because each one answers the last** — **Mr Hariri stopped reading the reasons after the third, and that is not recoverable.**',
  '**Pronunciation.** 🔊 **Track 20.4** **Once, with no _as you know_ in front of it.** ⚠ **_As you know_ either tells the reader something they do not know, or uses their own knowledge against them.** **Both are heard** — **and it is four words spent on the only sentence in the letter that had to be believed.**',
  '**The shapes.** _______ has been out since ______, waiting for ______._ _One reason and not three: ______._ _There is a reason and I cannot give it; it concerns ______._ ⚠ **And the ones that are not reasons:** _owing to pressure of work_ · _outside our current priorities_ · _as you know, our resources_ · _for operational reasons_.',
  '**Practise:** Give one reason, as a fact with a date. **1** a machine, a person or a document  **2** one with three reasons, cut to one  **3** the true ones you refuse to give  **4** one that cannot be given at all  **5** one with _as you know_ in it, and the repair',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the refusal and its reasons from the card. B gives **the one operative reason, as a fact with a date** — and names any true reasons being refused. ⚠ **Two rows on each card have no giveable reason at all**, and B must use the named-silence form. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the refusal, and the reasons offered)_ __________.'],
  ['B', '**__________ since __________.** **I am not going to say __________, although it is true.**'],
]));
out.push(table(['Card A – the refusal and its reasons', 'Card B – the refusal and its reasons'], [
  ['_No print by 2 April: pressure of work · priorities · the roller since 6 March._', '_No confirmation in July: attitude · the plans · three of four submitted late._'],
  ['_⚠ Supplier off the list: the real reason concerns another customer._', '_⚠ Post withdrawn: the real reason is a budget decision not yet announced._'],
  ['_Consignment refused: batch numbers missing on eleven of fifteen pallets._', '_Trial stopped: the only trained operator is away from 1 July._'],
  ['_⚠ Application refused: the reason is about a third party._', '_⚠ Order not renewed: the decision was taken above me and not explained._'],
  ['_Price not held: the paper quotation expired on 20 May._', '_Meeting ended: it has produced no decision in six meetings._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the one reason for each, and the true ones refused. ⚠ **The four rows marked ⚠ have no giveable reason**, and the honest form is the named silence: _there is a reason and I cannot give it; it concerns a third party._ **A pair that invents a substitute has produced the worst letter in the unit** — **the reader answers the substitute, and the refusal then looks arbitrary.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own bad news. ⚠ **Write the one operative reason as a fact with a date**, **and then write the true reasons you are refusing to give, in one line.**'));
out.push(p('**b**  Swap and perform. Your partner reads your reason **with _as you know_ in front of it** and then without. ⚠ They say what the first version made them feel about the reason.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mazen asked about the handset batch ten times over fourteen months and was given four different reasons: the batch was out of warranty, then the model was discontinued, then the fault was not a manufacturing fault, then the warranty question was with their legal office. He believed the first for about six weeks and stopped reading the reasons after the third — which is the cost, and it is not recoverable. Four reasons is worse than one because each one answered the last: if the model is discontinued the warranty does not matter, and if the fault is not theirs neither does. They were not reasons; they were whatever would close the letter. And the test is one question: if the reader removed this reason, would the answer change? If it would not, it is not the reason but a sentence put there to fill the place a reason goes. Omar asked about three reasons at once, and three read as none: a reader given three arguments with the weakest, answers it, and expects the decision to move, and when it does not, they have learned that the reasons were ornamental. Dima asked what makes a reason a reason, and a fact with a date behind it — the older machine has been out since 6 March, waiting for a roller from Aleppo, whereas pressure of work is a state and a permanent state is a refusal of everything for ever. Rim asked about the reason you must not give, and it is a true one that is not the operative one: Bassel is busy and the ministry order is not his largest job, both true, and if he writes either the customer can answer it and then he must refuse again or give in. So he named them and said they were his and not reasons the customer should have to accept, which costs two lines and is the most convincing thing on the page. Adnan asked what happens when the real reason cannot be given at all, and then you say that and say what kind of thing it is. And Mazen asked about saying it out loud: once, with no as you know in front of it._'));
out.push(p('**Listener task:** write your partner\'s one reason and the true ones they refused to give.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Mazen writes to the distributor after the tenth answer. Answer the questions.'));
out.push(model([
  '**THE FOUR REASONS** · M. Hariri · 24 March · _to the distributor, and copied to nobody_',
  '**I have written to you ten times about the same batch of handsets since January of last year, and you have given me four different reasons.** ⚠ **I am not writing to argue with the fourth. I am writing to tell you what the four have cost you with me.**',
  '**The four, in order.** **November: the batch is out of warranty.** **February: the model has been discontinued.** **June: the fault is not a manufacturing fault.** ⚠ **January: the warranty question is with your legal office.**',
  '**Why four is worse than one.** ⚠ **Each one answers the last.** **If the model is discontinued, the warranty date is beside the point.** **If the fault is not yours, the legal office has nothing to consider.** **A reader who is given four reasons in fourteen months has not been given a reason; he has been given four sentences, each of which closed a letter.**',
  '**What it has cost you.** ⚠ **I stopped reading your reasons after the third.** **I now read your letters for the date and the decision and nothing else** — **and when your man came in February about the new range, I did not ask him anything, because I no longer believe the answers are about the question.** **That is one shop, and I am not the largest, and there are nine of us in this street.**',
  '**What I would have accepted, and I want to be exact.** ⚠ _The batch is out of warranty: it was supplied on 14 March 2022 and the term is two years._ **One reason, with the date in it, in November.** **I would not have liked it and I would not have written nine more letters.**',
  '**And one thing I shall say about your man, because it is not his fault.** ⚠ **The four reasons did not come from him.** **He has been in this street every February for six years and he answered the only one of my ten letters that was answered by a person rather than by a form** — **in June, and he told me then that the fault was probably the board and that he could not say so in writing.** **That is the most useful sentence anybody at your end has given me, and he was not allowed to put it on paper.**',
  '**And what I shall do now, which is not a threat.** **I shall go on buying from you, because you are the nearest and your prices are fair.** ⚠ **But when a customer asks me why a handset cannot be repaired, I shall tell them that I do not know and that I have asked four times** — **because that is true, and I am not going to invent a fifth reason to pass on.**',
]));
out.push(item('1', 'What are the four reasons, and why does he say four is worse than one?'));
out.push(item('2', 'What has it cost the distributor, and what does he say about the man who came in February?'));
out.push(item('3', 'What would he have accepted, and what will he now tell customers?'));
out.push(writers([
  'A letter about reasons that were not reasons: **the count and what you are not writing about** → **the reasons in order, with dates** → **why several is worse than one** → **what it has cost the reader of your letter, in your own behaviour** → **what you would have accepted, written out exactly** → **and what you will do now, said not to be a threat.**',
  '⚠ **Say in the first paragraph that you are not arguing with the latest reason.** _I am not writing to argue with the fourth._ **A letter that argues with the reason invites a fifth one; a letter that prices the pattern does not.**',
  '**Show the reasons cancelling each other.** _If the model is discontinued, the warranty date is beside the point._ ⚠ **One sentence of arithmetic does what no complaint about inconsistency can**, and it cannot be answered.',
  '**Price it in your own behaviour and not in your feelings.** _I did not ask him anything when he came in February._ ⚠ **And then widen it once, with a figure:** _that is one shop, and there are nine of us in this street._',
  '⚠ And **write out the reason you would have accepted.** _It was supplied on 14 March 2022 and the term is two years._ **It proves the letter is about method and not about the outcome** — **and it is the sentence that makes the whole page impossible to dismiss.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter about reasons that were not reasons (80 words or more).'));
out.push(p('**______________** · ______________ · _to ______________   **I have written to you ______ times about ______________ and you have given me ______ different reasons.** ⚠ **I am not writing to argue with the ______. I am writing to tell you ______________.**   **The ______, in order.** ______________.   **Why ______ is worse than one.** ⚠ **Each one answers the last.** **If ______________, then ______________.**   **What it has cost you.** ⚠ **I stopped ______________ after the ______.** **I now ______________ and nothing else.**   **What I would have accepted.** ⚠ _"______________."_ **One reason, with the date in it, in ______________.**   **And what I shall do now, which is not a threat.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The latest reason explicitly not argued with',
  'The reasons shown cancelling each other',
  'The cost priced in your own behaviour, then widened once',
  'The reason you would have accepted, written out',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only the reason they would have accepted**, and the room says whether it has a date in it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (180 words or more), to the shape in the writer\'s box: the latest reason not argued with, the reasons cancelling each other, the cost in your own behaviour, and the reason you would have accepted.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the latest reason not argued with, the reasons shown cancelling each other, the cost in your own behaviour, and the acceptable reason written out with its date.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your reason with _as you know_ in front of it, and then without.** ⚠ **The room says what the first version made it feel about the reason** — **and the answer is always the same: that the writer expected to be argued with.** **And ask the room what it would now do about the reason, which is nothing at all.** Then the sentence the cycle ends on, which is Mr Hariri\'s: **I stopped reading your reasons after the third.**'));
out.push(hw('Write the letter (80+ words). ⚠ Then take your own last refusal and apply the test to its reason: **if the reader removed it, would the answer have changed?** **If not, write the reason that would have changed it** — **and if there is none you can give, write the named silence instead.** **20.3 is about what is still available**, which is the paragraph that decides whether your letter is answered with a decision or with a question. ⚠ **And bring a refusal that offered you nothing at all.**'));

// ===================== 20.3 =====================
out.push(pb());
out.push(h2('20.3  What is still available'));
out.push(p('**Function:** naming what is still open, with its own cost and its date   ·   **Grammar:** the alternative with its condition attached   ·   **Pronunciation:** the alternative said as an offer and not as a consolation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, with the refusal that offered you nothing. ⚠ **Say what you did next.** **In most cases the answer is _I wrote back and asked what could be done_** — **which is a second letter, a second wait, and a decision nobody has taken yet.** **Then say what one sentence would have saved it.**'));
out.push(board('We would of course be happy to consider any future requirements.', 'The first four thousand can be printed by 2 April if you will take them in two deliveries.'));
out.push(p('**b**  Which is an alternative? **1** _We would of course be happy to consider any future requirements._  **2** _The first four thousand can be printed by 2 April if you will take them in two deliveries._  **3** _Please do not hesitate to contact us._  **4** _There is nothing available before the 19th. If the roller arrives by the 14th I shall write the same day; do not wait beyond Thursday._  **5** _We hope to be able to help on another occasion._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say a refusal with nothing after it produces, and what three things must an alternative have?   **A** gratitude; a price, a date and a signature   **B** **a second letter asking what can be done** — and an alternative must have **a date, a stated period it is held for, and its own cost said by you**   **C** silence; a reason, a cost and an apology'));
out.push(p('**b**  Listen again. **1** What does Mrs Shaaban say about the gate telephone?   **2** What does Ms Huda say to write when there is genuinely nothing available?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.5  Do not wait beyond Thursday', [
  ['Ms Huda', 'A refusal with nothing after it. What does the reader do?'],
  ['Tareq', '⚠ **Writes back and asks what can be done.** **I have done it four times and twice I got no answer at all.**'],
  ['Ms Huda', '**So the refusal has produced a second letter, a second wait, and a decision nobody has taken.** ⚠ **One named alternative turns that into a decision made this week.**'],
  ['Omar', 'What does an alternative need?'],
  ['Ms Huda', '**Three things.** ⚠ **A date. A period you will hold it for. And its own cost, said by you.** _The first four thousand by 2 April, held until Thursday, if you will take two deliveries._'],
  ['Dima', 'Why say the cost yourself?'],
  ['Ms Huda', '**Because an offer with its cost hidden is a second piece of bad news with a delay built in.** ⚠ **The reader finds the two deliveries on Friday and now distrusts the offer and the letter** — **and you have spent a concession and bought nothing.**'],
  ['Rim', '⚠ **Ours is smaller than that.** **The gate telephones the supplier\'s office before a driver is turned away.** **Eight of the nineteen refusals last year would have been settled in four minutes.**'],
  ['Ms Huda', '**And that is an alternative built into a refusal rather than offered after it, which is the cheapest form of all.**'],
  ['Bassel', 'And the offers that are not offers?'],
  ['Ms Huda', '⚠ _We would be happy to consider any future requirements_ · _do not hesitate to contact us_ · _we hope to help on another occasion_. **None of them names a thing, a date or a price** — **and all three are read, correctly, as the end of the letter.**'],
  ['Adnan', 'And when there is genuinely nothing?'],
  ['Ms Huda', '**Say so, and then do two things.** ⚠ **Name what would change it, with a date** — **which is 17.3 in a letter** — **and tell them what not to wait for.** _Do not wait beyond Thursday; if your date is fixed, place it elsewhere this week._'],
  ['Hiba', 'That second part is extraordinary. You are telling them to go elsewhere.'],
  ['Ms Huda', '**You are telling them not to lose a week waiting for you**, ⚠ **and it is the sentence a reader remembers two years later when they are choosing.** **A refusal that protects the reader\'s week costs the writer nothing and is almost never written.**'],
  ['Mazen', 'And saying it out loud?'],
  ['Ms Huda', '🔊 **As an offer, at the same weight as the news.** ⚠ _The first four thousand can be printed by the second._ **Not _I suppose we might be able to manage the first four thousand_** — **an alternative said tentatively is heard as a consolation**, **and a consolation is declined out of politeness.**'],
]));
out.push(sp());
out.push(box('Language box – what is still available', [
  '⚠ **A refusal with nothing after it produces a second letter asking what can be done** — **a second wait, and a decision nobody has taken.** **One named alternative turns that into a decision made this week.**',
  '**Three things, and the third is the one that is left out.** ⚠ **1 A date.** **2 A period you will hold it for.** **3 Its own cost, said by you.**',
  '**Why the cost is said by you.** ⚠ **An offer with its cost hidden is a second piece of bad news with a delay built in.** **The reader finds the two deliveries on Friday and then distrusts the offer and the letter** — **and you have spent a concession and bought nothing.**',
  '**The cheapest form of all is an alternative built into the refusal rather than offered after it.** ⚠ **The gate telephones the supplier before the driver is turned away** — **eight of nineteen refusals settled in four minutes.**',
  '**The offers that are not offers.** ⚠ _We would be happy to consider any future requirements_ · _do not hesitate to contact us_ · _we hope to help on another occasion_. **None names a thing, a date or a price**, **and all three are read, correctly, as the end of the letter.**',
  '**When there is genuinely nothing, do two things.** ⚠ **Name what would change it, with a date** — **which is 17.3 in a letter** — **and tell them what not to wait for.** _Do not wait beyond Thursday; if your date is fixed, place it elsewhere this week._',
  '⚠ **The second is almost never written and it is the sentence a reader remembers two years later when they are choosing.** **A refusal that protects the reader\'s week costs the writer nothing.**',
  '**Pronunciation.** 🔊 **Track 20.6** **As an offer, at the same weight as the news.** ⚠ _The first four thousand can be printed by the second._ **Not _I suppose we might be able to manage the first four thousand_** — **an alternative said tentatively is heard as a consolation, and a consolation is declined out of politeness.**',
  '**The shapes.** _______ can be ______ by ______, held until ______, if you will ______._ _There is nothing before ______. If ______ by ______ I shall write the same day._ _Do not wait beyond ______._ ⚠ **And the ones that offer nothing:** _happy to consider_ · _do not hesitate_ · _on another occasion_ · _we shall keep your details_.',
  '**Practise:** Name the alternative, with its date, its period and its cost. **1** part of what was asked for  **2** the same thing later  **3** nothing available, with the condition and the warning  **4** one offered tentatively, so that you hear it  **5** one built into the refusal itself',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the refusal from the card. B names **the alternative: the thing, the date, how long it is held, and its cost.** ⚠ **Two rows on each card have nothing available at all**, and B must give the condition and the warning instead. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the refusal)_ __________.'],
  ['B', '**__________ by __________, held until __________, if you will __________.**'],
]));
out.push(table(['Card A – the refusal', 'Card B – the refusal'], [
  ['_No print by 2 April; one machine, roller from Aleppo._', '_Consignment refused; batch numbers missing on eleven pallets._'],
  ['_⚠ Post withdrawn; the budget line has gone._', '_⚠ Supplier removed from the list for the year._'],
  ['_Apprenticeship not confirmed in July; plans submitted late._', '_Analyser trial stopped; the trained operator is away._'],
  ['_⚠ Archive closed to new readers; the index is being rebuilt._', '_⚠ The escalation meeting is ending; nothing replaces it._'],
  ['_Price not held after 20 May; the paper quotation expired._', '_Second signature dropped from August; the trial is over._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each alternative, its date, its period and its cost. ⚠ **The four rows marked ⚠ have nothing available**, and the pairs must give the condition and the warning: _nothing before September; if the line is restored I shall write the same day; do not hold the post open._ **A pair that invents an alternative has written the offer that is not one**, **and the reader would do nothing with it.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own bad news. ⚠ **Write the alternative with all three parts** — **date, period, cost** — **or, if there is nothing, the condition and the sentence that tells them what not to wait for.**'));
out.push(p('**b**  Swap and perform. Your partner reads your alternative **tentatively** and then **flat, as an offer.** ⚠ They say which version they would have declined out of politeness.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Asked what a reader does with a refusal that has nothing after it, Tareq said he writes back and asks what can be done — he has done it four times and twice got no answer at all. So the refusal has produced a second letter, a second wait, and a decision nobody has taken, and one named alternative turns that into a decision made this week. Omar asked what an alternative needs, and three things: a date, a period you will hold it for, and its own cost said by you. Dima asked why the cost is said by the writer, and because an offer with its cost hidden is a second piece of bad news with a delay built in: the reader finds the two deliveries on Friday and now distrusts the offer and the letter, so you have spent a concession and bought nothing. Rim said theirs is smaller than that — the gate telephones the supplier’s office before a driver is turned away, and eight of the nineteen refusals last year would have been settled in four minutes. Which is an alternative built into a refusal rather than offered after it, and that is the cheapest form of all. Bassel asked about the offers that are not offers, and we would be happy to consider any future requirements, do not hesitate to contact us, we hope to help on another occasion: none of them names a thing, a date or a price, and all three are read, correctly, as the end of the letter. Adnan asked what happens when there is genuinely nothing, and you say so and then do two things: name what would change it, with a date, and tell them what not to wait for — do not wait beyond Thursday; if your date is fixed, place it elsewhere this week. Hiba said that second part is extraordinary, since you are telling them to go elsewhere, and you are telling them not to lose a week waiting for you, and it is the sentence a reader remembers two years later when they are choosing. And Mazen asked about saying it out loud: as an offer, at the same weight as the news, because an alternative said tentatively is heard as a consolation and a consolation is declined out of politeness._'));
out.push(p('**Listener task:** write your partner\'s alternative with its three parts, or the condition and the warning.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Rim sends with a refusal in June. Answer the questions.'));
out.push(model([
  '**CONSIGNMENT 238 · REFUSED** · R. Shaaban · 26 June · _to the supplier_',
  '**The consignment of 24 June is refused.** ⚠ **Eleven of the fifteen pallets have no batch numbers on them, and the rule is in clause nine of the agreement of 2022.**',
  '**What is available, and I can hold it until Thursday at noon.** ⚠ **If the batch numbers reach me in writing by then, from your own production book and not from the pallet labels, the consignment is accepted at the June price.** **It will cost you one telephone call and about twenty minutes of somebody\'s time at your end.**',
  '**And what it will cost at this end, so that you know what you are asking for.** ⚠ **The pallets stay in the cold store until Thursday and that is two days of space I have to find.** **I am willing to find it once.** **If this happens again in the quarter I shall not be able to hold a consignment for anybody.**',
  '**If the numbers cannot be produced.** ⚠ **Then the consignment comes back to you on Friday morning, and I shall write on the Thursday afternoon so that you have a day to arrange the lorry.** **Do not wait for a second letter from me; the Thursday note is the last one.**',
  '**And one thing that is not about this consignment.** **The gate now telephones your office before any load is turned away.** ⚠ **Eight of the nineteen loads we refused last year could have been settled in four minutes by that telephone call** — **and the call was made on this one at half past eight, and your office said they would ring back and did not.** **I am telling you that because the arrangement only works if somebody at your end answers it.**',
  '**And one thing about Thursday noon, because the hour matters.** ⚠ **The cold store is emptied for the Friday loads at two on Thursday afternoon.** **Noon gives me two hours to put your pallets back on the rack if the numbers come, and it is the latest hour at which that is possible** — **it is not a round figure chosen to look firm.** **If your production book is at the works and somebody has to go for it, tell me on Wednesday and I shall ask the store to leave the rack until four.**',
  '**What I am not going to say, although it is also true.** three times this quarter.** **That is a separate matter and it is not a reason for this refusal** — **the batch numbers are.**',
]));
out.push(item('1', 'What is available, and what are the two costs she names?'));
out.push(item('2', 'What happens if the numbers cannot be produced, and what does she tell the supplier not to wait for?'));
out.push(item('3', 'What does she say about the telephone call, and what does she refuse to use as a reason?'));
out.push(writers([
  'A refusal with an alternative: **the news in the first sentence with its rule** → **what is available, with a date and a holding period** → **what it costs the reader** → **what it costs you, and the limit of your willingness** → **what happens if they cannot take it, with the date of your last letter** → **one thing that is not about this case** → **and the true reason you refuse to use.**',
  '⚠ **Say what the alternative costs at your end, and then its limit.** _Two days of space I have to find. I am willing to find it once._ **A concession with no limit is read as a new rule**, and the next consignment will arrive without numbers.',
  '**Name the last letter.** _Do not wait for a second letter from me; the Thursday note is the last one._ ⚠ **A reader who does not know which letter is the last one waits for another**, and the waiting is the expensive part of every refusal in this unit.',
  '**Put the standing arrangement in and say what it needs from them.** _The arrangement only works if somebody at your end answers it._ ⚠ **And give the figure that shows it works** — _eight of the nineteen_ — **and the one that shows it failed here.**',
  '⚠ And **refuse the available grievance, in two lines.** _Your loads have been late three times this quarter. That is a separate matter and it is not a reason for this refusal._ **It is the clause that keeps the refusal narrow enough to be answered.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the refusal with its alternative (80 words or more).'));
out.push(p('**______________ · REFUSED** · ______________ · _to ______________   **______________ is refused.** ⚠ **______________, and the rule is ______________.**   **What is available, and I can hold it until ______________.** ⚠ **If ______________ by then, ______________.** **It will cost you ______________.**   **And what it will cost at this end.** ⚠ ______________. **I am willing to ______________ once.**   **If ______________ cannot be ______________.** ⚠ **Then ______________, and I shall write on ______________ so that ______________.** **Do not wait for ______________.**   **And one thing that is not about this ______________.** ⚠ ______________.   **What I am not going to say, although it is also true.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The alternative with a date and a holding period',
  'What it costs at your end, with the limit of your willingness',
  'The last letter named',
  'The available grievance refused in two lines',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their _do not wait_ sentence**, and the room says what the reader would otherwise have been waiting for.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full refusal (180 words or more), to the shape in the writer\'s box: the alternative with its date and period, both costs, the last letter named, and the grievance refused.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the alternative with date and holding period, your own cost with its limit, the last letter named, and the available grievance refused.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your alternative tentatively and then flat.** ⚠ **The room says which version it would have declined out of politeness** — **and it declines the first, which is why a hedged concession is the most wasteful sentence in a bad-news letter.** **Ask the room which of the two versions it has ever received; it is the first.** Then the sentence the cycle ends on, which is Ms Huda\'s: **a refusal that protects the reader\'s week costs the writer nothing and is almost never written.**'));
out.push(hw('Write the refusal (80+ words). ⚠ Then take the refusal that offered you nothing and write the one sentence that would have saved you a letter. **Count what the missing sentence cost you: the days between your second letter and the answer, or the fact that no answer came.** **20.4 says the cost out loud** — **what the news costs the reader, written by the person giving it** — **which is the hardest paragraph in the unit and the one that is remembered.**'));

// ===================== 20.4 =====================
out.push(pb());
out.push(h2('20.4  What it costs them, said by you first'));
out.push(p('**Function:** naming the cost of the news to the reader, before the reader does   ·   **Grammar:** the cost in the reader\'s units   ·   **Pronunciation:** the cost said without softening and without a plea after it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, with a refusal you have received. ⚠ **Say what it cost you, in days or in money.** **Then say whether the letter mentioned it.** **It almost never does** — **and the sentence it has instead is _we appreciate that this may be inconvenient_, which prices nothing and is read as a request for sympathy.**'));
out.push(board('We appreciate that this may be inconvenient.', 'This means you will be looking for work from 1 August, and the press will give you a reference naming the make-ready figures.'));
out.push(p('**b**  Which names the cost? **1** _We appreciate that this may be inconvenient._  **2** _This means you will be looking for work from 1 August, and the press will give you a reference naming the make-ready figures._  **3** _We regret any disappointment this may cause._  **4** _If the whole order must be with the ministry on the 2nd you will have to place it elsewhere, and both places that could take it will quote above us._  **5** _We trust you will understand our position._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Ms Huda say the writer should cost it first, and what limit does she put on it?   **A** because it is polite; keep it short   **B** **because the reader will cost it anyway, and if the writer does it first it is a description rather than an accusation** — and the limit is **do not cost what you cannot know**   **C** because it is required; cost everything'));
out.push(p('**b**  Listen again. **1** What does Mr Tahhan say he wrote to the apprentice?   **2** What does Ms Huda say must not follow the cost?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.7  You will be looking for work from the first', [
  ['Ms Huda', 'Mr Tahhan. The apprentice. What did the letter have to carry?'],
  ['Bassel', '**That the apprenticeship was not being confirmed in July.** ⚠ **And one sentence I had never written before:** _this means you will be looking for work from 1 August._'],
  ['Ms Huda', '**Why had you never written it?**'],
  ['Bassel', '⚠ **Because it sounds like cruelty on the page and it is the opposite.** **He was going to work it out in the car park in about four seconds.**'],
  ['Ms Huda', '**And that is the whole cycle.** ⚠ **The reader will cost it anyway.** **If you do it first, you are describing; if they do it first, they are accusing** — **and once they are accusing, every true thing in your letter is read as a defence.**'],
  ['Omar', 'In what units?'],
  ['Ms Huda', '**Theirs.** ⚠ **Days, money, somebody\'s work, a post they will now not have.** **Not _inconvenience_, which is a word for the writer\'s discomfort.**'],
  ['Dima', 'And the limit? I could invent costs all afternoon.'],
  ['Ms Huda', '**Do not cost what you cannot know.** ⚠ _I do not know what this does to your own order book_ **is honest and takes nine words.** **Guessing at it is presumption, and a reader who finds one invented cost stops believing the real ones.**'],
  ['Rim', 'And what must not follow it?'],
  ['Ms Huda', '⚠ **A plea for yourself.** **_This will cost you two days, and we are under a great deal of pressure ourselves_ has taken the cost back** — **the reader now has to weigh their two days against your pressure, which is not a comparison anybody can make.**'],
  ['Bassel', '⚠ **I nearly wrote that one.** **I had _we are a works of fourteen people_ in the draft and I took it out.**'],
  ['Ms Huda', '**And what did you put instead?**'],
  ['Bassel', '**The reference.** ⚠ _The press will give you a reference naming the make-ready figures._ **Which is a fact and it is worth something to him on the first of August.**'],
  ['Hiba', 'And when the cost is somebody\'s job, is there no softer form?'],
  ['Ms Huda', '**There is no softer form, and the attempts are all worse.** ⚠ **_We are unable to offer a continuation at this time_ requires him to work out that he is unemployed in July** — **and he will do it while reading, and then read the rest of your letter as evasion.**'],
  ['Mazen', 'And saying it out loud?'],
  ['Ms Huda', '🔊 **Flat, and with nothing after it in the same breath.** ⚠ _You will be looking for work from the first of August._ **Then stop.** **Everybody adds _I am sorry_ to the end of that sentence**, **and the apology in the same breath turns the cost into the writer\'s feeling about the cost.**'],
]));
out.push(sp());
out.push(box('Language box – what it costs them', [
  '⚠ **The reader will cost it anyway.** **If you do it first, you are describing; if they do it first, they are accusing** — **and once they are accusing, every true thing in your letter is read as a defence.**',
  '**In their units.** ⚠ **Days, money, somebody\'s work, a post they will now not have.** **Not _inconvenience_, which is a word for the writer\'s discomfort.**',
  '**The limit: do not cost what you cannot know.** ⚠ _I do not know what this does to your own order book._ **Nine words, and honest.** **A reader who finds one invented cost stops believing the real ones.**',
  '**What must not follow it: a plea for yourself.** ⚠ _This will cost you two days, and we are under a great deal of pressure ourselves._ **The reader now has to weigh their two days against your pressure, which is not a comparison anybody can make** — **and the cost has been taken back.**',
  '**Put something that is worth money to them instead.** ⚠ _The press will give you a reference naming the make-ready figures._ **A fact, and worth something on the first of August.**',
  '**And where the cost is somebody\'s job there is no softer form.** ⚠ **_We are unable to offer a continuation at this time_ requires him to work out that he is unemployed in July** — **and he will do it while reading, and then read the rest as evasion.**',
  '**The shapes.** _This means you will ______ from ______._ _If ______, you will have to ______, and ______._ _I do not know what this does to ______._ ⚠ **And the ones that cost nothing:** _we appreciate that this may be inconvenient_ · _we regret any disappointment_ · _we trust you will understand our position_.',
  '**Pronunciation.** 🔊 **Track 20.8** **Flat, and with nothing after it in the same breath.** ⚠ _You will be looking for work from the first of August._ **Then stop.** **Everybody adds _I am sorry_**, **and the apology in the same breath turns the cost into the writer\'s feeling about the cost.**',
  '**And one place the cost sentence must not go.** ⚠ **Never before the alternative.** **A cost stated before any remedy reads as a threat** — **and the reader has stopped before the paragraph that would have helped them, which is 20.3 wasted.**',
  '**Practise:** Name the cost, in their units. **1** in days  **2** in money  **3** somebody\'s post  **4** one you cannot know, said so  **5** one with a plea attached, so that you hear it',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the news from the card. B names **the cost to the reader, in the reader\'s units** — and says what cannot be known. ⚠ **Two rows on each card invite an invented cost**, and B must use the nine-word form instead. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the news)_ __________.'],
  ['B', '**This means __________ from __________.** **I do not know what this does to __________.**'],
]));
out.push(table(['Card A – the news', 'Card B – the news'], [
  ['_The apprenticeship is not confirmed in July._', '_The order cannot be printed by 2 April._'],
  ['_⚠ The supplier is off the list for the year._', '_⚠ The archive is closed to new readers until September._'],
  ['_The consignment is refused and returns on Friday._', '_The price cannot be held after 20 May._'],
  ['_⚠ The post has been withdrawn._', '_⚠ The trial is stopped after two months._'],
  ['_The second signature is dropped from 1 August._', '_The weekly meeting ends in July._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each cost and its units, and what the pair said could not be known. ⚠ **The four rows marked ⚠ invite invention** — **a writer cannot know what a year off a list does to a supplier\'s order book** — **and the nine-word form is the whole answer.** **A pair that invents a figure has written the sentence that destroys the real ones.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own bad news. ⚠ **Write the cost in the reader\'s units, and then the one thing you cannot know.** **Then strike out anything in your draft that asks for sympathy for yourself.**'));
out.push(p('**b**  Swap and perform. Your partner reads your cost sentence **with _I am sorry_ on the end** and then alone. ⚠ They say whose feelings the first version was about.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Bassel’s letter to the apprentice had to carry that the apprenticeship was not being confirmed in July, and one sentence he had never written before: this means you will be looking for work from 1 August. He had never written it because it sounds like cruelty on the page and is the opposite — the man was going to work it out in the car park in about four seconds. Which is the whole cycle: the reader will cost it anyway, and if you do it first you are describing, and if they do it first they are accusing, and once they are accusing every true thing in your letter is read as a defence. Omar asked in what units, and theirs: days, money, somebody’s work, a post they will now not have — not inconvenience, which is a word for the writer’s discomfort. Dima asked about the limit, since she could invent costs all afternoon, and do not cost what you cannot know: I do not know what this does to your own order book is honest and takes nine words, and a reader who finds one invented cost stops believing the real ones. Rim asked what must not follow it, and a plea for yourself: this will cost you two days, and we are under a great deal of pressure ourselves has taken the cost back, because the reader now has to weigh their two days against your pressure. Bassel said he nearly wrote that one — he had we are a works of fourteen people in the draft and took it out, and put the reference in instead: the press will give you a reference naming the make-ready figures, which is a fact and is worth something to him on the first of August. Hiba asked whether there is no softer form when the cost is somebody’s job, and there is none and the attempts are all worse: we are unable to offer a continuation at this time requires him to work out that he is unemployed in July, and he will do it while reading. And Mazen asked about saying it out loud: flat, and with nothing after it in the same breath._'));
out.push(p('**Listener task:** write your partner\'s cost sentence, its units, and the thing they said they could not know.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Bassel sends to the apprentice. Answer the questions.'));
out.push(model([
  '**DAR AL-KUTUB PRESS · QASSAA** · 28 June · _to Mr M. Said_',
  '**Your apprenticeship will not be confirmed in July.** ⚠ **Your last day is 31 July and I am giving you this now, at the end of June, so that the month is yours to use.**',
  '**The reason, and it is one.** **The published criterion is all fifty-eight jobs entered in the log, and fifty-one of the fifty-eight are entered.** ⚠ **Seven are not, and six of those seven are from the fortnight in March when you were on the second machine alone.** **I know why they are missing. The criterion does not have a clause for why.**',
  '**What this means for you, which I would rather write than let you work out in the yard.** ⚠ **You will be looking for work from the first of August.** **The press will give you a reference naming the make-ready figures** — **fourteen of your nineteen inside forty minutes, and four of the five slow ones had two colour changes** — **and I shall sign it myself and name the colour changes in it, because any works manager in this city will know what that means.**',
  '**What I do not know.** ⚠ **I do not know what the Qassaa works pay an improver or whether they are taking anybody.** **I am not going to guess at it in a letter to you.**',
  '**What is still open, and it is not the apprenticeship.** **There is casual work here in September and October, four days a week, and I shall write to you on 20 August about it whether I have anything or not.** ⚠ **Do not keep yourself free for it.**',
  '**And one thing about the seven entries, because you will be asked about them.** ⚠ **If any works manager telephones me, I shall say exactly what I have written here: that fifty-one of fifty-eight were entered, that the seven missing are from a fortnight when you were alone on the second machine, and that the entries were mine to check and I did not check them.** **I shall not say that your log-keeping is poor, because it is not** — **fifty-one of fifty-eight in a first year is better than two of the four men who were confirmed before you.**',
  '**And the thing I shall not write, although it is true.** ⚠ **I could have entered those seven jobs myself in March and I did not.** **That is my failure and not a reason to confirm you** — **the criterion is about your log and it was published in January** — **but you should have it in writing from me, and I have put the same sentence in the file.**',
]));
out.push(item('1', 'What is the reason, and what does he say about the seven missing entries?'));
out.push(item('2', 'What does he say he does not know, and why does he refuse to guess?'));
out.push(item('3', 'What does he put in writing about himself, and what does he say it is not?'));
out.push(writers([
  'A bad-news letter where the cost is somebody\'s livelihood: **the news with its date** → **why you are sending it now** → **one reason, with the figures** → **the cost to them, flat** → **something that is worth money to them** → **what you do not know** → **what is still open, and the warning not to wait for it** → **and the thing about yourself that you put in writing.**',
  '⚠ **Say why the letter is early.** _I am giving you this now, at the end of June, so that the month is yours to use._ **Timing is the only kindness available in a letter like this, and it has to be named or it is not received.**',
  '**Give the reference its contents.** _Fourteen of your nineteen inside forty minutes._ ⚠ **A reference promised is a courtesy; a reference quoted is an asset**, and the reader can use it on the second of August.',
  '**Name what you cannot know and refuse to guess.** _I do not know what the Qassaa works pay an improver._ ⚠ **A letter that guesses at that has lost the right to be believed about the part it does know.**',
  '⚠ And **put your own share in writing and deny it as a reason.** _I could have entered those seven jobs myself in March and I did not. That is my failure and not a reason to confirm you._ **Both halves** — **the first is what he is owed and the second is why the decision stands.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter where the cost is somebody\'s livelihood (80 words or more).'));
out.push(p('**______________** · ______________ · _to ______________   **______________ will not be ______________ in ______________.** ⚠ **Your last ______________ is ______________ and I am giving you this now so that ______________.**   **The reason, and it is one.** ______________. ⚠ **______ of the ______ are ______________.** **I know why ______________. The criterion does not have a clause for why.**   **What this means for you.** ⚠ **You will ______________ from ______________.** **______________ will give you ______________** — ______________.   **What I do not know.** ⚠ ______________. **I am not going to guess at it.**   **What is still open, and it is not ______________.** ______________. ⚠ **Do not ______________ for it.**   **And the thing I shall not write, although it is true.** ⚠ ______________. **That is ______________ and not a reason to ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Why the letter is early, said in the second sentence',
  'The reference or equivalent given its contents',
  'What you cannot know, with the guess refused',
  'Your own share in writing, and denied as a reason',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their cost sentence**, and the room says whether anything in it is about the writer.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (180 words or more), to the shape in the writer\'s box: the news dated, the reason with its figures, the cost flat, what you cannot know, and your own share denied as a reason.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the reason why the letter is early, the asset given its contents, what you cannot know with the guess refused, and your own share put in writing and denied as a reason.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your cost sentence with _I am sorry_ on the end, and then alone.** ⚠ **The room says whose feelings the first version was about** — **and it is the writer\'s, every time, which nobody intends and everybody does.** **Then read it with the plea attached, and the room will say it had stopped believing the figure.** Then the sentence the cycle ends on, which is Mr Tahhan\'s: **he was going to work it out in the car park in about four seconds.**'));
out.push(hw('Write the letter (80+ words). ⚠ Then take your own last piece of bad news and write the cost sentence that was not in it. **Count what the reader had to work out for themselves.** **Then strike out of your draft every sentence that asks for sympathy for you** — **in most drafts there are two, and one of them is in the paragraph that carries the cost.** **20.5 is about writing to somebody you will meet again**, **which is almost everybody in this city.**'));

// ===================== 20.5 =====================
out.push(pb());
out.push(h2('20.5  Somebody you will meet again'));
out.push(p('**Function:** writing bad news to somebody you will go on dealing with   ·   **Grammar:** the next occasion, named and dated   ·   **Pronunciation:** the next-occasion sentence said as information, not as reassurance'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. A names the last person they gave bad news to in writing. ⚠ **B asks: when did you next see them, and what did you say?** **In most cases the answer is within a fortnight, and what was said was nothing** — **because the letter had been written as though the relationship were over.**'));
out.push(board('We trust this will not affect our future relationship.', 'I shall see you at the gate on Thursday. The batch numbers are the only thing that has changed, and the June price stands for the rest of the quarter.'));
out.push(p('**b**  Which names the next occasion? **1** _We trust this will not affect our future relationship._  **2** _I shall see you at the gate on Thursday; the batch numbers are the only thing that has changed._  **3** _We value your continued custom._  **4** _The next order goes out in September with the same four criteria, and the independence point will be difficult for you again._  **5** _We look forward to working with you in the future._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What two faults does Ms Huda name, and what three things must a letter to somebody you will meet again contain?   **A** rudeness and warmth; a greeting, a reason and an apology   **B** **the formal wall, and false warmth** — and the letter must contain **the next occasion dated, what will be the same, and one thing to do differently**   **C** length and brevity; a date, a price and a signature'));
out.push(p('**b**  Listen again. **1** What does Mr Hariri say about the nine shops?   **2** What does Ms Huda say must not be in the letter?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.9  Thursday at the gate', [
  ['Ms Huda', 'Most bad news in this city goes to somebody you will see again. Mrs Shaaban — how soon?'],
  ['Rim', '⚠ **Thursday.** **The driver I refuse on Tuesday is at my gate on Thursday with another load.**'],
  ['Ms Huda', '**And what does the letter say about Thursday?**'],
  ['Rim', '**Nothing.** ⚠ **It ends _we trust this will not affect our future relationship_, which is a sentence about a thing I have not described.**'],
  ['Ms Huda', '**And there are two faults, and they are opposite.** ⚠ **The formal wall** — **a letter written as though the dealings are over** — **and false warmth, which is a letter written as though nothing has happened.** **Both are read as the same thing: that the writer does not intend to mention it again.**'],
  ['Omar', 'What should be in it?'],
  ['Ms Huda', '**Three things.** ⚠ **The next occasion, named and dated. What will be the same. And one thing to do differently** — **one, not a list.**'],
  ['Dima', 'Why does _what will be the same_ matter?'],
  ['Ms Huda', '⚠ **Because a reader who has had bad news assumes everything is now in doubt.** _The June price stands for the rest of the quarter._ **Eleven words, and they stop a fortnight of quiet anxiety that you will never hear about.**'],
  ['Mazen', '⚠ **And there are nine shops in my street.** **The distributor who gave me four reasons will be selling to all nine next year, and I shall be asked about them.**'],
  ['Ms Huda', '**Which is the arithmetic of the cycle, and it is not sentimental.** ⚠ **A letter to somebody you will meet again is read twice: once by them, and once by whoever asks them about you.**'],
  ['Bassel', 'And what must not be in it?'],
  ['Ms Huda', '**Anything you will have to unsay.** ⚠ _We shall certainly look at you first next time_ — **if you will not, that sentence is a second piece of bad news with a date on it.** **It will be quoted back to you in September.**'],
  ['Adnan', 'And the one thing to do differently?'],
  ['Ms Huda', '**One, chosen because it would have changed this outcome.** ⚠ _Send the batch numbers from the production book, not the pallet labels._ **A list of five is a lecture**, **and a reader who has just been refused reads a lecture as a condition for being forgiven.**'],
  ['Hiba', 'And the test?'],
  ['Ms Huda', '**Read it imagining the person standing in front of you on Thursday.** ⚠ **Every sentence you would not say to their face comes out** — **and that is between one and three sentences in most drafts, and they are always the warm ones.**'],
  ['Tareq', 'And saying it out loud?'],
  ['Ms Huda', '🔊 **The next-occasion sentence as information, not as reassurance.** ⚠ _I shall see you at the gate on Thursday._ **Not _I do hope we shall still see you on Thursday as usual_** — **a next occasion offered as a hope invites the reader to decide whether to grant it.**'],
]));
out.push(sp());
out.push(box('Language box – somebody you will meet again', [
  '**Two faults, and they are opposite.** ⚠ **The formal wall** _(written as though the dealings are over)_ **and false warmth** _(written as though nothing has happened)_. **Both are read as the same thing: that the writer does not intend to mention it again.**',
  '**Three things.** ⚠ **1 The next occasion, named and dated.** **2 What will be the same.** **3 One thing to do differently.**',
  '**Why _what will be the same_ matters.** ⚠ **A reader who has had bad news assumes everything is now in doubt.** _The June price stands for the rest of the quarter._ **Eleven words, and they stop a fortnight of quiet anxiety you will never hear about.**',
  '**And the arithmetic, which is not sentimental.** ⚠ **A letter to somebody you will meet again is read twice: once by them, and once by whoever asks them about you.** **There are nine shops in that street.**',
  '**What must not be in it: anything you will have to unsay.** ⚠ _We shall certainly look at you first next time._ **If you will not, that is a second piece of bad news with a date on it** — **and it will be quoted back to you in September.**',
  '**One thing to do differently, chosen because it would have changed this outcome.** ⚠ _Send the batch numbers from the production book, not the pallet labels._ **A list of five is a lecture, and a reader who has just been refused reads a lecture as a condition for being forgiven.**',
  '**The test.** ⚠ **Read it imagining the person standing in front of you on Thursday.** **Every sentence you would not say to their face comes out** — **between one and three in most drafts, and they are always the warm ones.**',
  '**Pronunciation.** 🔊 **Track 20.10** **The next-occasion sentence as information, not as reassurance.** ⚠ _I shall see you at the gate on Thursday._ **Not _I do hope we shall still see you on Thursday as usual_** — **a next occasion offered as a hope invites the reader to decide whether to grant it.**',
  '**The shapes.** _I shall see you at ______ on ______._ _______ stands for ______._ _One thing for next time: ______._ ⚠ **And the ones that name nothing:** _we trust this will not affect our future relationship_ · _we value your continued custom_ · _we look forward to working with you_.',
  '**Practise:** Name the next occasion, what stays the same, and one thing. **1** a weekly dealing  **2** a yearly one  **3** one where you do not know when you will next meet  **4** with a promise you will have to unsay, so that you hear it  **5** one thing instead of a list',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the bad news and the relationship from the card. B gives **the next occasion dated, what stays the same, and one thing for next time.** ⚠ **Two rows on each card invite a promise the writer will have to unsay**, and B must refuse it. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the news, and the relationship)_ __________.'],
  ['B', '**I shall see you __________ on __________.** **__________ stands.** **One thing for next time: __________.**'],
]));
out.push(table(['Card A – the news and the relationship', 'Card B – the news and the relationship'], [
  ['_Consignment refused; the driver is back on Thursday._', '_Order not printed; the customer orders every month._'],
  ['_⚠ Supplier off the list; they will tender again in September._', '_⚠ Candidate not appointed; the post is advertised again in the autumn._'],
  ['_Apprenticeship not confirmed; nine works in the same street._', '_Handset not repaired; the customer lives above the shop._'],
  ['_⚠ Trial stopped; the laboratory will ask again next year._', '_⚠ Paper not accepted; the contributor writes every month._'],
  ['_Price not held; the quotation is renewed quarterly._', '_Meeting ended; the eleven still work together._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the next occasion, what stays the same, and the one thing. ⚠ **The four rows marked ⚠ invite a promise about the next round** — _we shall certainly look at you first_ — **and the pairs must refuse it and give the truth instead:** _the same four criteria, and the independence point will be difficult for you again._ **Ask the listeners which version they would quote back in September.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own bad news and the person it goes to. ⚠ **Write the three sentences** — **next occasion, what stays the same, one thing** — **and then read the whole draft imagining them in front of you and strike out what you would not say.**'));
out.push(p('**b**  Swap and perform. Your partner reads your next-occasion sentence **as a hope** and then as information. ⚠ They say which version left the decision with them.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Most bad news in this city goes to somebody you will see again, and Rim’s answer was Thursday: the driver she refuses on Tuesday is at her gate on Thursday with another load. Her letter says nothing about Thursday — it ends we trust this will not affect our future relationship, which is a sentence about a thing she has not described. And there are two faults, which are opposite: the formal wall, a letter written as though the dealings are over, and false warmth, a letter written as though nothing has happened. Both are read as the same thing: that the writer does not intend to mention it again. Omar asked what should be in it, and three things: the next occasion named and dated, what will be the same, and one thing to do differently — one, not a list. Dima asked why what will be the same matters, and because a reader who has had bad news assumes everything is now in doubt: the June price stands for the rest of the quarter is eleven words and stops a fortnight of quiet anxiety you will never hear about. Mazen said there are nine shops in his street, and the distributor who gave him four reasons will be selling to all nine next year and he will be asked about them — which is the arithmetic of the cycle and is not sentimental: a letter to somebody you will meet again is read twice, once by them and once by whoever asks them about you. Bassel asked what must not be in it, and anything you will have to unsay: we shall certainly look at you first next time is, if you will not, a second piece of bad news with a date on it, and it will be quoted back to you in September. Adnan asked about the one thing to do differently, and one, chosen because it would have changed this outcome, because a list of five is a lecture and a reader who has just been refused reads a lecture as a condition for being forgiven. Hiba asked about the test, which is to read it imagining the person standing in front of you on Thursday. And Tareq asked about saying it out loud: the next-occasion sentence as information and not as reassurance._'));
out.push(p('**Listener task:** write your partner\'s three sentences and what they struck out of the draft.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Mazen writes to a customer whose handset cannot be repaired. Answer the questions.'));
out.push(model([
  '**M. HARIRI · TELEPHONE REPAIRS · SHAALAN** · 2 July · _to Mrs Jundi, flat 4_',
  '**Your handset cannot be repaired.** ⚠ **It is yours to collect whenever you like and I am not charging for the three days it has been here.**',
  '**The reason, and it is one.** **The board that has gone is the one the distributor stopped supplying in February.** ⚠ **I have two of them left and both are promised to repairs I took in before yours.** **That is a fact about my shelf and not about your handset, and I want to be exact about it: if I had three, yours would be mended tomorrow.**',
  '**What this costs you, as far as I can see.** ⚠ **A new handset of the same kind is about a third more than the repair would have been, and the one the distributor is selling instead does not take your charger.** **So it is the handset and the charger.** **I do not know what you paid for the charger and I am not going to guess.**',
  '**What is still open.** **I can put your name against the next board that comes in** — ⚠ **and I shall write on 20 July whether one has come or not.** **Do not wait for it if you need the telephone this month.**',
  '**And Thursday, because you will be in the shop.** ⚠ **You come in most Thursdays for the top-ups and nothing about that changes.** **The top-up price is the same and so is the queue.** **If you want to ask me anything about this, ask me then and not on the telephone, because I can show you the board.**',
  '**And one thing I am not going to do, although you may expect it.** ⚠ **I am not going to telephone you when a board comes in.** **I shall write on the twentieth, as I have said, and if one comes before then I shall write that day** — **but I am not going to keep a list in my head and ring eleven people, because I have done that before and I rang nine of the eleven and forgot two, and the two were the ones who had waited longest.**',
  '**One thing for next time, and it is one.** ⚠ **If a handset starts cutting out, bring it in the same week.** **Yours had been doing it since April** — **and in April I had four of those boards.** **I am not saying that to make you feel foolish; I am saying it because it is the only thing that would have changed this.**',
]));
out.push(item('1', 'What is the reason, and what does he say about his shelf?'));
out.push(item('2', 'What does he say about Thursday, and what does he ask her to do then?'));
out.push(item('3', 'What is the one thing for next time, and how does he protect her from it?'));
out.push(writers([
  'A bad-news letter to somebody you will see every week: **the news in the first sentence** → **what is not being charged for** → **one reason, said to be about you and not about them** → **the cost, with what you cannot know** → **what is still open, with a date and a warning** → **the next occasion, with what stays the same** → **and one thing for next time, with the reader protected from it.**',
  '⚠ **Say which of your own facts the reason is about.** _That is a fact about my shelf and not about your handset._ **A reader hears a reason as a judgement on their property or their work unless it is explicitly placed somewhere else.**',
  '**Put the next occasion in its own paragraph when it is routine**, **and then use it:** _ask me then and not on the telephone, because I can show you the board._',
  '**Name what stays the same in small, checkable things.** _The top-up price is the same and so is the queue._ ⚠ **A reader who has had bad news does not believe a promise about the relationship and does believe a sentence about the price of a top-up.**',
  '⚠ And **protect the reader from your one thing.** _I am not saying that to make you feel foolish; I am saying it because it is the only thing that would have changed this._ **Without that clause, _bring it in the same week_ is a reproach**, and the letter ends on the reader\'s mistake.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter to somebody you will see again (80 words or more).'));
out.push(p('**______________** · ______________ · _to ______________   **______________ cannot be ______________.** ⚠ **______________ and I am not charging for ______________.**   **The reason, and it is one.** ______________. ⚠ **That is a fact about ______________ and not about ______________.**   **What this costs you, as far as I can see.** ⚠ ______________. **I do not know ______________ and I am not going to guess.**   **What is still open.** ______________ ⚠ **and I shall write on ______________ whether ______________ or not.** **Do not wait for it if ______________.**   **And ______________, because you will be ______________.** ⚠ **______________ and nothing about that changes.** **______________ is the same and so is ______________.**   **One thing for next time, and it is one.** ⚠ ______________. **I am not saying that to ______________; I am saying it because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The reason placed on your own side explicitly',
  'The next occasion in its own paragraph, and used',
  'What stays the same, in small checkable things',
  'The reader protected from your one thing',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their _what stays the same_ sentence**, and the room says whether it is small enough to be believed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (180 words or more), to the shape in the writer\'s box: the reason placed on your side, the next occasion used, what stays the same in small things, and the reader protected from your one thing.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the reason placed on your own side, the next occasion named and used, what stays the same in checkable things, and the reader protected from your one thing.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your next-occasion sentence as a hope, and then as information.** ⚠ **The room says which version left the decision with the reader** — **and the hope does, every time, which is the opposite of what the writer intended.** **And ask the room how soon it will next see the person it wrote to; the usual answer is within a fortnight.** Then the sentence the cycle ends on, which is Mr Hariri\'s: **there are nine shops in my street and I shall be asked about them.**'));
out.push(hw('Write the letter (80+ words). ⚠ Then do the test on your own draft: **read it imagining the person standing in front of you, and strike out every sentence you would not say to their face.** **Count them.** **In most drafts it is between one and three and they are the warm ones.** **20.6 puts the whole letter on one page** — **news, reason, alternative, cost, next occasion** — **and the order of those five is not negotiable.**'));

// ===================== 20.6 =====================
out.push(pb());
out.push(h2('20.6  The whole letter'));
out.push(p('**Function:** the whole bad-news letter — five parts, one page   ·   **Grammar:** the five parts, and the order is not negotiable   ·   **Pronunciation:** the letter read aloud to somebody who has had bad news from you before'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, from memory: **the five parts of a bad-news letter, in order.** ⚠ **Then say which of the five was missing from the last one you received.** **It is the alternative in about half and the cost in most of the rest** — **and nobody has ever received one with the news missing, because without the news it is not a letter.**'));
out.push(board('I am afraid I have some rather disappointing news about the April order.', 'We cannot print the order by 2 April. The earliest we can hold is the 19th. One machine, waiting for a roller. Four thousand by the 2nd if you will take two deliveries. If your date is fixed, place it elsewhere this week.'));
out.push(p('**b**  Which order is right? **1** _reason · news · cost · alternative · next occasion_  **2** _news · reason · alternative · cost · next occasion_  **3** _news · cost · reason · alternative · next occasion_  **4** _news · alternative · reason · next occasion · cost_  **5** _news · reason · cost · alternative · next occasion_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Ms Huda say the cost must come after the alternative, and what test does she give for the whole letter?   **A** because it is longer; count the paragraphs   **B** **because a cost stated before any remedy reads as a threat** — and the test is to give it to somebody who has had bad news from you before and ask **which paragraph they would have stopped at**   **C** because it is the convention; read it aloud'));
out.push(p('**b**  Listen again. **1** What does Mr Ayoub say he did with the letter he was shown?   **2** What does Ms Huda say about the length of the whole letter?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.11  Which paragraph would you have stopped at', [
  ['Ms Huda', 'Five parts, in order. Mr Tahhan.'],
  ['Bassel', '**The news, with its date.** ⚠ **The one reason.** **What is still available.** **What it costs them.** **And the next occasion.**'],
  ['Ms Huda', '**And the one place in that order where people go wrong?**'],
  ['Bassel', '⚠ **The cost before the alternative.** **I had it that way in March and Mr Saqqal stopped reading.**'],
  ['Ms Huda', '**Say why it fails.** ⚠ **A cost stated before any remedy reads as a threat.** **The reader has now been told what the news will do to them and nothing about what can be done** — **and they stop, and the paragraph that would have helped them is below where they stopped.**'],
  ['Tareq', '⚠ **I was shown the two versions and I stopped at the third paragraph of the first one.** **I did not notice that I had stopped.** **I thought I had read it.**'],
  ['Ms Huda', '**Which is the test for the whole page and it is one question.** ⚠ **Give it to somebody who has had bad news from you before and ask which paragraph they would have stopped at.** **Not whether it is clear** — **where they stopped.**'],
  ['Omar', 'And the length?'],
  ['Ms Huda', '**One page, and a bad-news letter is the one document in this book that gets shorter the better it is.** ⚠ **Mr Tahhan\'s second letter is about a third shorter than his first and contains one thing the first did not: a date the reader could still use.**'],
  ['Dima', 'Is there ever a sixth part?'],
  ['Ms Huda', '**One, and only where it applies.** ⚠ **The true reasons you are refusing to give** — _we are busy, and your order is not the largest thing on the floor; both are my problem._ **It sits with the reason and it costs two lines.**'],
  ['Rim', 'And what about an apology? There is no part for it.'],
  ['Ms Huda', '**There is no part for it, and that is deliberate.** ⚠ **An apology for a decision you would take again is not true, and the reader can tell.** **Apologise for a thing you did wrong** — _my letter of 11 March put this in the fourth paragraph_ — **and for nothing else.**'],
  ['Hiba', 'And if the news is not your decision?'],
  ['Ms Huda', '**Then say whose it is in the news sentence and give their reason, not a reason of your own.** ⚠ _The committee has withdrawn the post; the budget line went on 2 June._ **And then the other four parts are yours** — **the alternative, the cost and the next occasion do not belong to whoever decided.**'],
  ['Mazen', 'And reading it aloud?'],
  ['Ms Huda', '🔊 **Aloud to somebody who has had bad news from you before, and watch where their eyes leave the page.** ⚠ **They will not tell you they stopped, because they do not know** — **and the place where it happens is the same in nearly every letter: the end of the paragraph before the alternative.**'],
]));
out.push(sp());
out.push(box('Language box – the whole letter', [
  '**Five parts, in this order, on one page.** ⚠ **1 The news, with its date.** **2 The one reason.** **3 What is still available.** **4 What it costs them.** **5 The next occasion.**',
  '**And the one place people go wrong: the cost before the alternative.** ⚠ **A cost stated before any remedy reads as a threat** — **the reader has been told what the news will do to them and nothing about what can be done, and they stop.**',
  '**The test, and it is one question.** ⚠ **Give it to somebody who has had bad news from you before and ask which paragraph they would have stopped at.** **Not whether it is clear** — **where they stopped.** **They will not know they stopped; the place is nearly always the end of the paragraph before the alternative.**',
  '**One page, and a bad-news letter is the one document in this book that gets shorter the better it is.** ⚠ **Mr Tahhan\'s second letter is about a third shorter than his first and contains one thing the first did not: a date the reader could still use.**',
  '**A sixth part, where it applies: the true reasons you are refusing to give.** ⚠ _We are busy, and your order is not the largest thing on the floor; both are my problem._ **It sits with the reason and costs two lines.**',
  '**There is no part for an apology, and that is deliberate.** ⚠ **An apology for a decision you would take again is not true and the reader can tell.** **Apologise for a thing you did wrong** — _my letter of 11 March put this in the fourth paragraph_ — **and for nothing else.**',
  '**And when the news is not your decision, say whose it is in the news sentence and give their reason.** ⚠ _The committee has withdrawn the post; the budget line went on 2 June._ **The other four parts are still yours** — **the alternative, the cost and the next occasion do not belong to whoever decided.**',
  '**Pronunciation.** 🔊 **Track 20.12** **Aloud to somebody who has had bad news from you before, and watch where their eyes leave the page.** ⚠ **They will not tell you they stopped, because they do not know it.**',
  '**And one warning for the whole unit.** ⚠ **A letter with all five parts in the right order and a hedged news sentence has failed at the first line and the other four parts will not be read.** **Everything in this unit depends on 20.1.**',
  '**Practise:** The five parts, one page. **1** the news with its date  **2** the one reason  **3** the alternative with its period  **4** the cost in their units  **5** the next occasion, dated',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a line from a bad-news letter. B says **which of the five parts it is, whether it is in the right place, and what must come before it.** ⚠ **Two rows on each card are apologies standing where a part should be.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the line)_ __________.'],
  ['B', 'Part ______. **Right place / not.** **Before it:** __________.'],
]));
out.push(table(['Card A – the line', 'Card B – the line'], [
  ['_We cannot print the order by 2 April._', '_The earliest date we can hold is 19 April, until Thursday._'],
  ['_⚠ We very much regret the disappointment this will cause._', '_⚠ Please accept our sincere apologies for this situation._'],
  ['_The older machine has been out since 6 March._', '_You will have to place it elsewhere, and both places will quote above us._'],
  ['_⚠ We are sorry to have to write to you in these terms._', '_⚠ I apologise for any inconvenience caused._'],
  ['_I shall see you at the gate on Thursday; the June price stands._', '_My letter of 11 March put this news in the fourth paragraph._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the part number for each line and what must come before it. ⚠ **The four rows marked ⚠ are apologies standing where a part should be**, and none of them is any of the five. **The repair is the same in all four: say what you did wrong, or say nothing.** **The last row of each card is the one legitimate apology** — **it names an act of the writer\'s and nothing else.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write the whole letter, **five parts, one page.** ⚠ **Then check the order of parts three and four**, **and strike out every apology that is not for something you did.**'));
out.push(p('**b**  Swap. **Your partner reads it aloud** and you watch where their eyes leave the page. ⚠ Then ask the one question: **which paragraph would you have stopped at?**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The five parts, in order, are the news with its date, the one reason, what is still available, what it costs them, and the next occasion. The one place people go wrong is the cost before the alternative: Bassel had it that way in March and Mr Saqqal stopped reading. It fails because a cost stated before any remedy reads as a threat — the reader has been told what the news will do to them and nothing about what can be done, so they stop, and the paragraph that would have helped them is below where they stopped. Tareq said he was shown the two versions and stopped at the third paragraph of the first one, and did not notice that he had stopped: he thought he had read it. Which is the test for the whole page, in one question — give it to somebody who has had bad news from you before and ask which paragraph they would have stopped at. Not whether it is clear: where they stopped. Omar asked about the length, and one page, and a bad-news letter is the one document in this book that gets shorter the better it is: Bassel’s second letter is about a third shorter than his first and contains one thing the first did not, which is a date the reader could still use. Dima asked whether there is ever a sixth part, and one, where it applies: the true reasons you are refusing to give, which sits with the reason and costs two lines. Rim asked about an apology, for which there is no part, and that is deliberate — an apology for a decision you would take again is not true and the reader can tell, so you apologise for a thing you did wrong and for nothing else. Hiba asked what happens if the news is not your decision, and then you say whose it is in the news sentence and give their reason, not a reason of your own, and the other four parts are still yours. And Mazen asked about reading it aloud: aloud, to somebody who has had bad news from you before, watching where their eyes leave the page._'));
out.push(p('**Listener task:** write the paragraph your partner would have stopped at, and why.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Rim sends when a supplier is taken off the list. Answer the questions.'));
out.push(model([
  '**SUPPLY LIST · 2025** · R. Shaaban · 4 July · _to the Qassaa supplier_',
  '**You are off the supply list for the rest of this year.** ⚠ **The decision is the purchasing office\'s and it was taken on 1 July; it is reviewed in January and I shall write to you on 5 January either way.**',
  '**Their reason, and it is one.** **Fourteen of your consignments this year and four refused on batch numbers** — **the rule is three a quarter and four in two quarters is outside it.** ⚠ **That is their reason and I am giving it as theirs; I am not adding one of my own.**',
  '**What is still open, and it is not the list.** **You can supply against single orders where there is no other supplier**, ⚠ **and there have been eleven such orders this year.** **I shall put your name forward for those as they arise.** **It is not the list and it is not nothing.**',
  '**What this costs you, as far as I can see.** ⚠ **Six months of about four consignments a month, which on your own figures is a little under a third of what you send us.** **I do not know what that is as a share of your year and I am not going to guess at it.**',
  '**And Thursday, because your driver will be at the gate with the June order.** ⚠ **The June order stands and is paid on the usual terms.** **Nothing about the single orders changes either.** **If you want to go through the four refusals with me, come with him on Thursday and bring the production book.**',
  '**And one thing about the eleven single orders, because you should know how they arise.** ⚠ **They are not favours and they are not a reserve list.** **They happen when a load is needed inside four days and the two suppliers on the list cannot take it** — **which happened eleven times this year, seven of them in the fortnight before a public holiday.** **I shall put your name forward each time; whether the purchasing office takes it is theirs and not mine, and twice this year they have gone outside the list altogether.**',
  '**One thing for January, and it is one.** ⚠ **Send the batch numbers from the production book and not from the pallet labels.** **Three of the four refusals were pallet labels that had rubbed.** **I am not saying that to make a point; I am saying it because it is the only thing that would have changed four of fourteen.**',
]));
out.push(item('1', 'Whose decision is it, and what does she say about the reason?'));
out.push(item('2', 'What is still open, and what figure does she give for it?'));
out.push(item('3', 'What does she invite him to do on Thursday, and what must he bring?'));
out.push(writers([
  'The whole letter, five parts: **the news with its date and the review date** → **whose decision it is, where it is not yours** → **their reason, given as theirs** → **what is still open, with a figure** → **the cost in their units, with what you cannot know** → **the next occasion, with what stays the same** → **and one thing for next time.**',
  '⚠ **Put the review date in the news paragraph.** _It is reviewed in January and I shall write to you on 5 January either way._ **A decision with no review date is a permanent one, and the reader will treat it as permanent whatever you intended.**',
  '**Give somebody else\'s reason as theirs and add nothing.** _That is their reason and I am giving it as theirs; I am not adding one of my own._ ⚠ **One sentence, and it is the difference between carrying a decision and owning it** — **which is Unit 17.4 inside a letter.**',
  '**Make the alternative countable.** _There have been eleven such orders this year._ ⚠ **An alternative with a figure is an offer; the same alternative without one is a courtesy, and will be read as the end of the letter.**',
  '⚠ And **use the next occasion for the thing a letter cannot do.** _Come with him on Thursday and bring the production book._ **A letter that offers a conversation at a named time, for a named purpose, with a named document, has given the reader the one thing that might change the January decision.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the whole bad-news letter (80 words or more).'));
out.push(p('**______________** · ______________ · _to ______________   **______________.** ⚠ **The decision is ______________\'s and it was taken on ______________; it is reviewed in ______________ and I shall write on ______________ either way.**   **Their reason, and it is one.** ______________. ⚠ **That is their reason and I am giving it as theirs.**   **What is still open, and it is not ______________.** ______________, ⚠ **and there have been ______ such ______________ this year.**   **What this costs you, as far as I can see.** ⚠ ______________. **I do not know ______________ and I am not going to guess.**   **And ______________, because ______________.** ⚠ **______________ stands.** **If you want to ______________, come on ______________ and bring ______________.**   **One thing for ______________, and it is one.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The review date inside the news paragraph',
  'Somebody else\'s reason given as theirs, with nothing added',
  'The alternative made countable',
  'The next occasion used for what a letter cannot do',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only parts three and four, in order**, and the room says whether the cost would have read as a threat the other way round.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (180 words or more), five parts in order: the news dated, the reason, the alternative with a figure, the cost with what you cannot know, and the next occasion with what stays the same.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the review date in the news paragraph, the reason given as its owner\'s, the alternative made countable, and the next occasion used for what a letter cannot do.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Your partner reads your letter aloud and you watch where their eyes leave the page.** ⚠ **Then ask the one question: which paragraph would you have stopped at?** **They will not have known they stopped, and the place is nearly always the end of the paragraph before the alternative.** **Ask them afterwards what the alternative was.** Then the sentence the cycle ends on, which is Mr Ayoub\'s: **I did not notice that I had stopped. I thought I had read it.**'));
out.push(hw('Write the letter (80+ words). ⚠ Then do the test properly: **give it to somebody who has had bad news from you before and ask which paragraph they would have stopped at.** **Bring the paragraph number.** **If they say they read all of it, ask them what the alternative was** — **and write down whether they could say.** **20.7 puts you between the writer of a good bad-news letter and the man who had to carry it to a committee**, which is the last mediation of this unit.'));

// ===================== 20.7 =====================
out.push(pb());
out.push(h2('20.7  Review & Mediate: The writer and the reader of bad news'));
out.push(p('**Function:** mediating between the writer of a good bad-news letter and the man who had to carry it   ·   **Recycling:** Unit 20   ·   **Exam practice:** B2 First Reading and Use of English Part 6 · Writing Part 2 (a letter) · Listening Part 4'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 20 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** The order was cancel on 1 July.  **2** His liable for the delay is not in question.  **3** We regret the terminate of the contract.  **4** The announce was made on Tuesday.  **5** It is a regrettably decision and I would take it again.  **6** The compensate was paid in August.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the letter, and what each side says about it.'));
out.push(box(null, [
  '**ONE LETTER, TWO ACCOUNTS** _(the writer and the man who had to carry it, five weeks apart)_',
  '**The letter.** _"We cannot print the ministry order by 2 April. The earliest date we can hold is 19 April, and I can hold it until Thursday. The older machine has been out since 6 March, waiting for a roller from Aleppo… The first four thousand can be printed by 2 April if you will take them in two deliveries… If the whole order must be with the ministry on the 2nd, you will have to place it elsewhere, and the two places that could take it will both quote above us."_',
  '**The writer.** _"It is the best letter I have written. The news is in the first sentence, the alternative is in the second, there is one reason with a date in it, and the cost is theirs and comes after the remedy. It is a third shorter than the one it replaced."_',
  '**The man who had to carry it.** _"It is the best letter I have had from a supplier. And I had to take it to a committee that reads first paragraphs. The first paragraph says you cannot print it by the second — so they placed the order elsewhere on the Tuesday, and the nineteenth of April never reached them."_',
  '⚠ **Both accounts are accurate and neither of them is about the letter.**',
  '**And the thing the rule cannot do.** **The news-first rule serves the person who opens the envelope** — **and the person who opens the envelope is not always the person who decides.**',
  '**The question for the cycle.** _Who writes the version for the second reader?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. What does Ms Huda say the news-first rule cannot do, and what is the one line that would have helped?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.13  The committee reads first paragraphs', [
  ['Ms Huda', 'A letter that does everything this unit teaches, and the order went elsewhere. Mr Tahhan — is the letter wrong?'],
  ['Bassel', 'No. ⚠ **I would write it again**, and Mr Saqqal is right as well, which I had not expected.'],
  ['Ms Huda', '**Say his account in his words.**'],
  ['Bassel', '⚠ _I had to take it to a committee that reads first paragraphs._ **And my first paragraph says we cannot print it by the second.**'],
  ['Ms Huda', '**Then the mediation, and it is three moves.** One: **separate what the letter is for from what its reader had to do with it.** ⚠ Two: **find the reader the rule cannot see.** Three: **say whether the writer can supply it.**'],
  ['Omar', 'What is the letter for?'],
  ['Bassel', '**Telling one man what has happened and what can still be done, so that he can decide this week.** ⚠ **It did that.** **He knew by Tuesday morning.**'],
  ['Ms Huda', '**And the reader it cannot see?**'],
  ['Rim', '⚠ **The committee.** **They read first paragraphs, and the first paragraph is the news** — **so the rule that protects the first reader destroys the case of the second.**'],
  ['Ms Huda', '**Which is the finding of this cycle and it is new.** ⚠ **The news-first rule serves the person who opens the envelope, and the person who opens the envelope is not always the person who decides.** **Everything in this unit is written for the first reader and says nothing about the second.**'],
  ['Bassel', '⚠ **And if I bury the news to protect the committee, I have undone 20.1** — **and Mr Saqqal is back to telephoning me at eight in the morning.**'],
  ['Ms Huda', '**So what can he supply?**'],
  ['Adnan', ' ⚠ **One line that can be lifted.** _We can hold 19 April until Thursday._ **Placed so that it travels with the news rather than after it** — **and Mr Saqqal can put those nine words at the top of his own paper.**'],
  ['Ms Huda', '**And whose decision is that?**'],
  ['Adnan', '⚠ **Mr Saqqal\'s.** **He is the only person who knows what his committee reads, and he has never asked for it** — **because he has never had a letter worth lifting a line out of.**'],
  ['Hiba', 'And what must we not do?'],
  ['Ms Huda', '**Two things, and the second looks helpful.** ⚠ **Do not bury the news.** **And do not write the letter to the committee instead of to the man** — **he is the one who has to act on Tuesday, and a letter written past him is read by nobody at all.**'],
  ['Mazen', 'And reading the two accounts?'],
  ['Ms Huda', '🔊 **One after the other, at the same speed, neither reasonable at the other\'s expense.** ⚠ **The writer\'s account is a description of a method and the other is a description of an order that went elsewhere** — **and the second is harder to read aloud without sounding like a reproach.** **Read it as a report.**'],
]));
out.push(sp());
out.push(box('Language box – the writer and the reader of bad news', [
  '**The three moves.** ⚠ **1 Separate what the letter is for from what its reader had to do with it.** **2 Find the reader the rule cannot see.** **3 Say whether the writer can supply it.**',
  '⚠ **The finding, and it is new: the news-first rule serves the person who opens the envelope, and that person is not always the person who decides.** **Everything in this unit is written for the first reader and says nothing about the second.**',
  '**Why the writer cannot write for the second reader.** ⚠ **He does not know what the committee reads, how it meets, or which of its members will be there** — **and a letter written for a room he has never seen is a guess that costs the first reader his clarity.**',
  '**And burying the news is not the remedy.** ⚠ **It undoes 20.1**, **and the first reader is back to telephoning at eight in the morning with no page in front of him.**',
  '**What the writer can supply: one line that can be lifted.** ⚠ _We can hold 19 April until Thursday._ **Nine words, placed so that they travel with the news rather than after it** — **and the first reader can put them at the top of his own paper.**',
  '⚠ **And whose decision that is: the first reader\'s.** **He is the only person who knows what his committee reads** — **and he has never asked for it, because he has never had a letter worth lifting a line out of.**',
  '**Two things not to do, and the second looks helpful.** ⚠ **Do not bury the news.** **And do not write the letter to the committee instead of to the man** — **he is the one who has to act on Tuesday, and a letter written past him is read by nobody at all.**',
  '**Pronunciation.** 🔊 **Track 20.14** **The two accounts one after the other, at the same speed, neither reasonable at the other\'s expense.** ⚠ **The writer\'s is a description of a method and the other is a description of an order that went elsewhere** — **and the second is harder to read without sounding like a reproach.**',
  '**And one sentence a writer can add to any bad-news letter tomorrow, which costs nothing.** ⚠ _If this has to go further than you, the line to take with it is: 19 April, held until Thursday._ **Fourteen words, and it hands the second-reader problem to the one person who can solve it.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a letter and two accounts of it, and does **not** show them. A reads the letter, then both accounts. B makes the three moves: **what the letter is for, the reader the rule cannot see, and whether the writer can supply it.** ⚠ **In one of the two pairs the letter is genuinely defective** — the news is hedged — **and B must say so rather than looking for a second reader.** Change roles with the other pair.'));
out.push(table(['Pair A – the print order', 'Pair B – the supply list'], [
  ['_News first, one reason, alternative, cost, next occasion._', '_⚠ News in the third paragraph and hedged in the first._'],
  ['_Writer: "the best letter I have written."_', '_Writer: "I wanted to soften it; he has dealt with us for years."_'],
  ['_Reader: "I had to take it to a committee that reads first paragraphs."_', '_Reader: "I read the first page and thought it was about the price."_'],
  ['_⚠ The question: who writes for the second reader._', '_⚠ Not that question: the news is not in the letter\'s first sentence._'],
  ['_⚠ Answerable, by the first reader, and he has never asked._', '_⚠ The letter is defective and the remedy is 20.1._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three moves for each pair. ⚠ **Pair B is not a second-reader problem:** **a letter whose news is hedged in the first paragraph has failed at the first reader**, and no line about committees will mend it. **Two different faults, two different remedies** — **a question handed to the man who knows his own committee, and a rewritten first sentence today.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **the last piece of bad news you wrote or received** and do the three moves on it in writing. ⚠ **Name the second reader.** Then the question the cycle ends on: **did anybody ever tell the writer that there was one?**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what the rule cannot do:  _A letter that does everything the unit teaches, and the order went elsewhere. Asked whether the letter is wrong, Bassel said no — he would write it again, and Mr Saqqal is right as well, which he had not expected. Mr Saqqal’s account in his own words: I had to take it to a committee that reads first paragraphs. And Bassel’s first paragraph says they cannot print it by the second. So the mediation, in three moves: separate what the letter is for from what its reader had to do with it; find the reader the rule cannot see; and say whether the writer can supply it. The letter is for telling one man what has happened and what can still be done so that he can decide this week, and it did that — he knew by Tuesday morning. The reader it cannot see, Rim said, is the committee: they read first paragraphs, and the first paragraph is the news, so the rule that protects the first reader destroys the case of the second. Which is the finding of the cycle and it is new — the news-first rule serves the person who opens the envelope, and the person who opens the envelope is not always the person who decides. And Bassel said that if he buries the news to protect the committee he has undone 20.1, and Mr Saqqal is back to telephoning at eight in the morning. Adnan said what he can supply is one line that can be lifted — we can hold 19 April until Thursday — placed so that it travels with the news, and Mr Saqqal can put those nine words at the top of his own paper. And whose decision that is: Mr Saqqal’s, because he is the only person who knows what his committee reads, and he has never asked for it, because he has never had a letter worth lifting a line out of. Hiba asked what we must not do: two things, the second of which looks helpful — do not bury the news, and do not write the letter to the committee instead of to the man._'));
out.push(p('**Listener task:** write the second reader of your own last bad-news letter, and whether the writer knew.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 6)', 7));
out.push(p('You are going to read an article about bad-news letters. **Six sentences have been removed.** Choose from the sentences **A–G** the one which fits each gap (**1–6**). **There is one extra sentence you do not need to use.**'));
out.push(model([
  '**THE PARAGRAPH NOBODY REACHES**',
  'A works manager in Qassaa keeps two letters about the same order. The first runs to four paragraphs and the news is in the fourth. **(1)** ______________ He telephoned the next morning having read the first paragraph only, and believed the letter was about the price.',
  'The second letter is about a third shorter and begins with the news. **(2)** ______________ What it adds is a date: the earliest the press can hold is the nineteenth, and he will hold it until Thursday.',
  'The order of what follows is not a matter of taste. **(3)** ______________ A reader who has been told what a decision will cost them, and nothing about what can still be done, stops — and the paragraph that would have helped is below the place where they stopped.',
  'The most surprising rule in the second letter concerns apology. **(4)** ______________ He apologises instead for the letter of the eleventh of March, which put the news in the fourth paragraph, and for nothing else.',
  'He has also learned something about alternatives. **(5)** ______________ The four thousand sheets he can print by the second of April are offered with their cost attached: the customer must take two deliveries.',
  'What he cannot do is know everything. **(6)** ______________ The sentence costs nine words, and it is the reason the rest of his figures are believed.',
  'None of this made the news better, and the manager does not claim that it did. The order was lost anyway, to a works across the river that quoted eleven per cent above him and could print it by the second. What changed was the three days the customer did not spend waiting to find out, and the eleven years of dealings that survived the letter. He keeps both letters in the same folder and shows them to anybody who asks him why his correspondence is so short.',
  'His own summary of the difference runs to a single sentence, and it is about arithmetic rather than about manners. The first letter took three paragraphs to get to the point and cost a telephone call at eight the next morning; the second got there in nine words and cost him nothing at all.',
]));
[
  '**A**  There is no apology anywhere in it for the decision itself.',
  '**B**  He writes that he does not know what the delay does to the customer\'s own order book, and that he is not going to guess at it.',
  '**C**  An offer whose cost is hidden is a second piece of bad news with a delay built into it.',
  '**D**  The customer who received it never reached the fourth paragraph.',
  '**E**  Nothing in it is kinder than anything in the first.',
  '**F**  Most of his customers have been dealing with the press for more than a decade.',
  '**G**  The cost of the news must come after the remedy and never before it.',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of a writer and a reader of bad news (80 words or more).'));
out.push(p('**ONE LETTER, TWO ACCOUNTS** · ______________   **The letter.** _"______________"_   **The writer.** _"______________"_   **The reader.** _"______________"_   ⚠ **Both accounts are accurate and neither is about ______________.**   **What the letter is for.** ______________. ⚠ **It did that.**   **The reader the rule cannot see.** ⚠ ______________.   **Can the writer supply it?** ______________, **because ______________.**   **What the writer can supply.** ⚠ **One line that can be lifted:** _"______________."_   **Whose decision is that?** ⚠ ______________.   **And what I am not doing.** ⚠ **Burying the news**, and **writing the letter to ______________ instead of to ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both accounts quoted, and both allowed to be accurate',
  'What the letter is for, separated from what its reader had to do',
  'The second reader, named in one sentence',
  'The liftable line, and whose decision it is to ask for it',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 2: a letter)', 10));
out.push(box(null, [
  '⚠ **The letter, and the shape is this unit: the news with its date in the first sentence, one reason, what is still available with its period, what it costs them, and the next occasion.** **What 20.7 adds is one line that can be lifted** — **because the person you are writing to may have to take it further.**',
  'Something somebody was expecting from you or your organisation will not now happen. Write to them.',
  'Write your **letter** in **180–220 words**, including **the news with its date**, **one reason**, **what is still available or what would change it**, and **what it costs them.**',
  '⚠ **All four requirements, or the content mark goes.** **And no apology for the decision itself** — **an apology for a decision you would take again is not true, and the examiner is reading for whether the letter could be sent.**',
], C.lorange, C.orange));
out.push(...lines(6));
out.push(pb());
out.push(stage('✓', 'Unit 20 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  The ___ of the order reached us on 1 July, four days before the run.   a) cancellation   b) cancel   c) cancelled',
  '2  His ___ for the delay has never been in question, and he has not disputed it.   a) liably   b) liability   c) liable',
  '3  The ___ of the contract takes effect on 31 August.   a) termination   b) terminate   c) terminating',
  '4  The ___ was made on Tuesday and three of the eleven had not been told.   a) announce   b) announcing   c) announcement',
  '5  It is a ___ decision and I would take it again tomorrow.   a) regret   b) regrettable   c) regretting',
  '6  The ___ was paid in August, four months after the claim was made.   a) compensate   b) compensating   c) compensation',
  '7  There is a ___ about the date that I am not able to explain to you.   a) finality   b) final   c) finally',
  '8  Three posts were made ___ in the same week and the budget line went with them.   a) redundancy   b) redundant   c) redundantly',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 4 style – multiple choice).** 🔊 **Track 20.15** You will hear an interview with a man who runs a printing works in Damascus. For questions **1–7**, choose the answer (**A**, **B** or **C**) which fits best.'));
[
  '**1**  What does he say was wrong with his letter of 11 March?   **A** the news was in the fourth paragraph   **B** it was too short   **C** the reason in it was untrue',
  '**2**  What did the customer think that letter was about?   **A** the delivery date   **B** the price   **C** the quality of the paper',
  '**3**  Why will he not give _pressure of work_ as a reason?   **A** because it is untrue   **B** because his customers would not accept it   **C** because it is permanent, and so refuses everything for ever',
  '**4**  What does he say about the sentence _we are busy_?   **A** that it is the real reason   **B** that it should come first   **C** that it is his problem and not a reason a customer should accept',
  '**5**  What does he say he had never written before this year?   **A** a date he could hold   **B** an apology   **C** what the news would cost the reader',
  '**6**  What does he say about apologising?   **A** apologise only for something you did wrong   **B** never apologise in a letter of this kind   **C** apologise at the end and not at the beginning',
  '**7**  What does he say is the test of a bad-news letter?   **A** counting its paragraphs   **B** asking a reader which paragraph they stopped at   **C** reading it aloud to a colleague',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 20.15  Audio script (read after the check)', [
  ['Interviewer', 'You keep two letters about the same order. Tell me about the first.'],
  ['Bassel', 'Four paragraphs. The order reference, the pressure on the machines, nineteen years of working together, and then the news. The news was in the fourth paragraph and every word of the first three was true.'],
  ['Interviewer', 'What happened?'],
  ['Bassel', 'He telephoned at eight the next morning. He had read the first paragraph and he thought I was writing about the price. So I gave him the news on the telephone with no page in front of him, which is the worst way anybody can get it.'],
  ['Interviewer', 'Your second letter begins with the news. Is that not harsh?'],
  ['Bassel', 'It is the opposite. A man who has to hunt for the news reads everything else as an excuse, and he is right to — a letter that delays the news was arranged to delay it. The kindness goes after, not before.'],
  ['Interviewer', 'And the reason. You could have written that you were busy.'],
  ['Bassel', 'I am busy, and the ministry order is not the largest thing on my floor. Both of those are true and I shall not write either, because they are my problem and not reasons a customer should have to accept. I write that the older machine has been out since the sixth of March waiting for a roller. That is a fact with a date in it.'],
  ['Interviewer', 'What about _owing to pressure of work_?'],
  ['Bassel', 'Pressure of work is not a reason, it is a condition, and it is permanent. A permanent reason refuses everything for ever. If I write it in March the man cannot tell whether to ask me again in May.'],
  ['Interviewer', 'You told me there was a sentence you had never written until this year.'],
  ['Bassel', 'What it costs him. That if the order has to be with the ministry on the second, he will have to place it elsewhere, and the two places that could take it will both quote above us. I had never put that in a letter in nineteen years, and he was going to work it out in about four seconds anyway.'],
  ['Interviewer', 'Is there an apology in it?'],
  ['Bassel', 'Not for the decision. I would take that decision again, so an apology for it would be untrue and he would know. I apologise for the letter of the eleventh of March, which put the news in the fourth paragraph. That was mine and it was wrong.'],
  ['Interviewer', 'And how do you know whether a letter of this kind works?'],
  ['Bassel', 'Give it to somebody who has had bad news from you before, and ask them which paragraph they would have stopped at. Not whether it is clear — where they stopped. They will not know they stopped. Mr Ayoub read my first version and stopped at the third paragraph and told me afterwards that he thought he had read all of it.'],
]));
out.push(p('**C  Writing.** Write the letter (180–220 words): the news with its date, one reason, what is still available, and what it costs them.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 20)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ put the news in the first sentence, under fifteen words, with a date',
  '☐ give one reason, as a fact with a date behind it',
  '☐ name the true reasons I am refusing to give',
  '☐ name an alternative with its date, its holding period and its cost',
  '☐ say what the news costs the reader, in the reader\'s units',
  '☐ say what I cannot know, and refuse to guess at it',
  '☐ name the next occasion, what stays the same, and one thing for next time',
  '☐ put the five parts in order, and never the cost before the remedy',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _let down · put across · scale back · follow up · go through with · pull out of · write off · hand back · spell out · go back on · come clean · put right_.',
  '**This unit\'s word-formation set** _(Reading Part 6 in 20.7 draws on this)_: _cancel → **cancellation** · regret → **regrettable** · terminate → **termination** · compensate → **compensation** · liable → **liability** · final → **finality** · sever → **severance** · redundant → **redundancy** · announce → **announcement**._',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Unit 20 · Student\'s Book');
