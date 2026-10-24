// Proactive Business English B2 · Syria Edition · Book 2 · Unit 20 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a handover document · to hand over · a successor · your first week · what only one person knows · a task nobody has written down · a judgement that looks like a routine · to carry something alone · a dependency on one person · to make yourself replaceable · the thing you got wrong · a mistake worth handing on · a relationship that does not transfer · to introduce somebody properly · an appointment from inside · an appointment from outside · the case you cannot make out loud · an acting appointment · to act in a post · a deferred decision · a decision that becomes permanent by drift · a date by which it will be decided · the authority without the title · to be told rather than left to infer · a shadow period · to overlap for a fortnight · the week after you have gone · what a successor will change first · a judgement you would defend · a judgement you would not defend again · to leave somebody the reasons · the post as it will be, not as it was';
const COLLOC = 'to hand over a post · to act in a post · to hold a decision open · to carry a risk alone · to make a post replaceable · to overlap with a successor · to introduce a contact · to date a deferral';
const BACK_AT_B2 = 'handover · delegated authority · to confirm in post';

out.push(h1('Unit 20  Succession, and the Week After You Have Gone'));
out.push(p('_Proactive Business English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**20.1**  write a handover that is about judgements rather than tasks',
  '**20.2**  write your successor\'s first week, and name what they will change',
  '**20.3**  name the thing you have been carrying that should never have been one person\'s',
  '**20.4**  hand on a judgement you would not defend again, and say why',
  '**20.5**  hand over a relationship that does not transfer, and introduce it properly',
  '**20.6**  make the case for an appointment, including the part you cannot say out loud',
  '**20.7**  Review & Mediate: the right appointment at the wrong moment',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ April, and a post that has had one holder since 2011', [
  '⚠ **Mr Khaled Ayoub has been office manager of Sham Trading since 2011 and hands over on 30 April.** **Sixteen years, two site openings, one closure, a reopening, and an arbitration he is leaving in the middle of.**',
  '⚠ **He is the only person who knows why Homs closed, who the Doctor was, which customers may be invoiced late without complaint, and what Abu Yasser will and will not do if he is asked in the wrong order.** ⚠ **Unit 18 got the first two onto paper. This unit is the rest of it.**',
  '⚠ **And the firm has to choose.** **Nour Mansour is the obvious successor and is carrying the Beirut arbitration to an award in June.** **Bassel Nassif wants the post and would be adequate.** ⚠ **The right long-term appointment is the wrong April appointment, and everybody in the room can see it.**',
  '⚠ **One warning before you start, because this unit has a trap in it.** **A handover is not a list of what you do.** ⚠ **A list of tasks can be written in an afternoon and is worth almost nothing** — **the valuable half is the judgements that look like routines, and the person doing them has usually stopped noticing that they are judgements at all.**',
], C.lyellow, C.orange));

// ======================= CYCLE 20.1 =======================
out.push(pb());
out.push(h2('20.1  Judgements, not tasks'));
out.push(p('**Function:** separating what you do from what you decide   ·   **Grammar:** _it looks like X; it is actually a decision about Y_   ·   **Pronunciation:** a routine named as a judgement'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something you do every week that looks mechanical. ⚠ Then say what you decide while doing it.'));
out.push(p('**b**  Which belongs in a handover? _check the delivery sheet every morning · the delivery sheet is checked every morning, and the judgement in it is which of the four late customers gets telephoned and which gets left, which depends on who is paying and who is merely slow_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Sayegh say is wrong with Mr Ayoub\'s draft?   **A** nothing   **B** it is forty tasks and no judgements   **C** it is too long'));
out.push(p('**b**  Listen again. **1** What is the test he gives? **2** Why does he say the person doing the job is the worst person to spot them?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.1  "Forty tasks and no decisions"', [
  ['Mr Sayegh', 'Your handover note. Forty items. Every one of them is a task.'],
  ['Mr Ayoub', 'That is what I do.'],
  ['Mr Sayegh', '⚠ **It is what you are seen doing.** ⚠ **A list of forty tasks can be written in an afternoon and anybody can learn it in a fortnight.** **It is not what the firm is about to lose.**'],
  ['Mr Ayoub', 'Then what is?'],
  ['Mr Sayegh', '⚠ **The judgements inside the tasks.** ⚠ **Take item nine. *Check the delivery sheet every morning.* What do you actually do with it?**'],
  ['Mr Ayoub', 'I look at who is late.'],
  ['Mr Sayegh', '⚠ **And then?**'],
  ['Mr Ayoub', 'And then I telephone some of them.'],
  ['Mr Sayegh', '⚠ **Which ones?**'],
  ['Mr Ayoub', '(pause) ⚠ **The ones who are not paying. Not the ones who are merely slow.** ⚠ **Hamdan is three weeks late every month and has never missed a payment in nine years, so I leave him. Tarabishi is four days late and I telephone him the same morning, because when Tarabishi is late it means something.**'],
  ['Mr Sayegh', '⚠ **That is the handover.** ⚠ **Nothing in your forty items contains it, and in six weeks nobody in this company will know it.**'],
  ['Mr Ayoub', 'It had not occurred to me that it was a decision. I just do it.'],
  ['Mr Sayegh', '⚠ **That is why the person doing the job is the worst person in the building at finding them.** ⚠ **A judgement you have made four thousand times stops feeling like a judgement** — **it feels like the task.**'],
  ['Mr Ayoub', 'So how do I find the rest of them?'],
  ['Mr Sayegh', '⚠ **Take each task and ask what you would get wrong if you did it carelessly.** ⚠ **If the answer is nothing, it is a task. If the answer is something, the something is the judgement** — **and that question is the only reliable way in, because you cannot see them by looking.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A task, and the judgement inside it**',
  table(['', 'What the list says', 'What the handover needs'], [
    ['**the delivery sheet**', '⚠ *check it every morning*', '⚠ *the judgement is which late customer gets telephoned* — **Hamdan is three weeks late every month and always pays; Tarabishi four days late means something**'],
    ['**the bank**', '*reconcile on the 5th*', '⚠ *the judgement is which unexplained item is worth asking about and which will explain itself by the 20th*'],
    ['**the orders**', '*confirm by Wednesday*', '⚠ *the judgement is which customer is told a date we can keep and which is told a date we would like* — **and only two of them are ever told the second**'],
    ['⚠ **the test**', '**(none)**', '⚠ *what would I get wrong if I did this carelessly?* — **nothing means task; something means the something is the judgement**'],
  ], [1.5, 2.6, 4.9]),
  '⚠ **A list of tasks can be written in an afternoon and learned in a fortnight.** ⚠ **It is not what a firm loses when somebody leaves** — **so a handover made of tasks has described the post and handed over nothing.**',
  '⚠ **The person doing the job is the worst person in the building at finding the judgements.** ⚠ **A judgement made four thousand times stops feeling like a judgement and starts feeling like the task** — **which is why *tell me what you decide* produces nothing and the test below produces everything.**',
  '⚠ **The test, and it is the whole cycle:** ⚠ *what would I get wrong if I did this carelessly?* **Nothing → it is a task. Something → the something is the judgement, and the something is what you write down.**',
  '⚠ **Write the judgement with its examples, by name.** ⚠ **Hamdan and Tarabishi are worth more than any rule about late customers**, **because a successor can apply a named case and cannot apply *use your discretion*.**',
  '⚠ **And expect to be surprised by your own answers.** ⚠ *It had not occurred to me that it was a decision. I just do it.* **That sentence is the normal response and it is not a confession of carelessness** — **it is what competence feels like from inside.**',
  '**Practise:** Take four tasks of yours. Apply the test to each. Write the judgement where there is one, with a named example.',
  '**Useful phrases:**  what you are seen doing  ·  the judgement inside the task  ·  which ones?  ·  what would I get wrong if I did this carelessly?  ·  it feels like the task',
  '**Pronunciation – a routine named as a judgement.** 🔊 **Track 20.2** Listen twice. ⚠ **The first says *Hamdan is three weeks late every month and has never missed a payment* at an even pace, as information.** ⚠ **The second slows on *never missed a payment*.** **Even, it is a fact a successor can use; slowed, it is a defence of Hamdan, and a successor hears a friendship instead of a rule.** Say it four times, even.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names a task; B finds the judgement.'));
out.push(dlg(null, [
  ['A', 'Every week I __________.'],
  ['B', '⚠ **What would you get wrong if you did that carelessly?**'],
  ['A', '__________.'],
  ['B', '⚠ **So the judgement is __________. How do you actually make it?**'],
  ['A', '__________.'],
  ['B', '⚠ **Give me a name it applies to.**'],
  ['A', '__________.'],
  ['B', '⚠ **And a name it does not apply to.**'],
  ['A', '__________.'],
  ['B', '⚠ **Those two names are worth more than the rule.**'],
]));
out.push(table(['Role card 1 — that is just the job', 'Role card 2 — use your discretion'], [[
  '⚠ **A insists that the forty items are the job and that there is nothing underneath them.** ⚠ **B takes one item and asks what would go wrong if it were done carelessly, and then asks *which ones?* twice.** ⚠ **B\'s point: a judgement made thousands of times stops feeling like one, so the honest answer *I just do it* is evidence that a judgement is there rather than evidence that it is not.**',
  '⚠ **A writes *use your discretion on late customers* and considers the judgement captured.** ⚠ **B asks what a successor does on their first Tuesday with four late accounts and no discretion to use yet.** ⚠ **B\'s point: a successor can apply a named case and cannot apply a disposition** — **Hamdan and Tarabishi are usable on day one and *discretion* is usable in about two years.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write one task, its judgement, and two names — one the judgement applies to and one it does not. ⚠ Then say why the person doing the job cannot see these by looking.'));
out.push(PHRASE_CARD(['carelessly, what goes wrong?', 'which ones?', 'give me a name', 'and a name it is not', 'it feels like the task']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** tasks of yours.'));
out.push(table(['The task', 'Carelessly, what goes wrong?', 'So the judgement is', 'A name it applies to, and one it does not'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.8, 2.2, 2.4, 2.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Every week I _______. Done carelessly I would get _______ wrong. So the judgement is _______. It applies to _______ and it does not apply to _______._'));
out.push(p('**Listener task:** count how many tasks turned out to contain a judgement. ⚠ Then ask how many of those judgements are written down anywhere, and expect none.'));
out.push(p('**Board clinic:** your teacher writes four handover items on the board — find the one that is a task pretending to be a judgement, and the one that says *use your discretion*. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**HANDOVER: THE OFFICE MANAGER\'S POST. PAGE 3: THE JUDGEMENTS. K. Ayoub, 6 April. Not the task list — that is at pages 1 and 2 and it is the shorter half.**',
  table(['It looks like', 'The judgement in it', 'Named cases'], [
    ['**checking the delivery sheet**', '⚠ **which late customer is telephoned the same morning and which is left**', '⚠ **Hamdan: three weeks late every month, nine years, never missed a payment. Leave him.** ⚠ **Tarabishi: four days late means something is wrong at his end. Telephone the same morning.**'],
    ['**confirming order dates**', '⚠ **which customer is given a date we can keep and which is given a date we would like**', '⚠ **Only two are ever given the second: the Ministry contract and Dallal, both of whom build in their own slack.** **Everybody else gets a date we can keep, including when they push.**'],
    ['**the monthly reconciliation**', '⚠ **which unexplained item is worth a telephone call and which will explain itself by the 20th**', '**Under 50,000 and on a Thursday: it is a cash sale somebody has not written up. Over 50,000, or on any other day: ask the same day.**'],
    ['⚠ **approving overtime**', '⚠ **this one is not a judgement and I have been treating it as one**', '⚠ **I approve it all. I have approved every request in sixteen years.** **Writing this page is how I found that out, and it should be somebody\'s judgement and has not been mine.**'],
  ], [1.8, 2.8, 4.4]),
  '⚠ **How I found these, because the method matters more than the four of them.** **I did not write them by asking myself what I decide.** ⚠ **I took each of the forty items on pages 1 and 2 and asked what I would get wrong if I did it carelessly.** **Thirty-one of the forty produced nothing, and are tasks. Nine produced something.**',
  '⚠ **The last row is the one I did not expect.** **Approving overtime looked like the most obvious judgement on the list and it is not a judgement at all** — **I approve everything, I always have, and nobody has ever asked me the criteria because I have never had any.** ⚠ **It is recorded here as an absence and not as a practice**, **because a successor who inherits it as a practice will think there is a system to learn.**',
  '⚠ **And one thing about the named cases.** **Hamdan and Tarabishi are in this document by name, with figures, because a rule about late customers cannot be applied by anybody on their first Tuesday.** ⚠ **A successor can apply a named case in week one.** **They can apply a disposition in about two years, which is roughly when they would have worked it out anyway.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How did the writer find the judgements, and what were the numbers?'));
out.push(item('2', 'What does the last row record, and why is it recorded as an absence?'));
out.push(item('3', 'Why are Hamdan and Tarabishi named, with figures?'));
out.push(box('Writer\'s box', [
  '**The judgements page — five parts:** ⚠ **three columns: what it looks like · the judgement in it · named cases** → ⚠ **named cases with figures, on both sides of the line** → **the method, and the counts it produced** → ⚠ **anything you discovered was not a judgement at all** → ⚠ **and why the names are there rather than a rule.**',
  '⚠ **Put the task in the first column and the judgement in the second, and never merge them.** ⚠ **A successor reads the first column to find the thing they are holding and the second to find out what they are deciding** — **and merged, the page becomes a task list again.**',
  '⚠ **Name cases on BOTH sides of the line, with figures.** ⚠ **Hamdan is left and Tarabishi is telephoned**, **and a successor needs the one that is left as much as the one that is acted on, because the error that costs a firm a customer is acting on a Hamdan.**',
  '⚠ **Give the method and its counts.** ⚠ *Thirty-one of forty produced nothing; nine produced something.* **The counts tell a successor that the page is complete rather than selected** — **and they tell the next person leaving the post how to write theirs.**',
  '⚠ **Record anything you discovered was NOT a judgement, as an absence.** ⚠ *I approve it all. I always have. It should be somebody\'s judgement and has not been mine.* **A successor who inherits that as a practice will spend a month looking for a system** — **and this is the row that only gets written because the method was applied honestly.**',
  '⚠ **And say why the names are there.** ⚠ *A successor can apply a named case in week one and a disposition in about two years.* **One sentence, and it stops the next person deleting the names in favour of a general rule.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a judgements page for your own post (**80 words or more**). Use the frame.'));
out.push(p('**HANDOVER: ______________. THE JUDGEMENTS. ______________, ______________. Not the task list.**   **It looks like** | ⚠ **The judgement in it** | ⚠ **Named cases**   **______________** | ⚠ **______________** | ⚠ **______________: ______________. ______________: ______________.**   **______________** | ⚠ **______________** | ⚠ **______________**   ⚠ **______________** | ⚠ **this one is not a judgement and I have been treating it as one** | ⚠ **______________**   ⚠ **How I found these. I took each of my ______________ tasks and asked what I would get wrong if I did it carelessly. ______________ produced nothing. ______________ produced something.**   ⚠ **One thing about the named cases. ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The task and the judgement in separate columns', ''],
  ['Named cases with figures, on both sides of the line', ''],
  ['The method, with its counts', ''],
  ['Anything found not to be a judgement, recorded as an absence', ''],
  ['Nothing anywhere saying *use your discretion*', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their named cases. ⚠ The class says of each whether a successor could act on it on their first Tuesday.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a judgement in your own work that looks like a routine (**200 to 240 words**). Say what the task is, what you actually decide, who it applies to and who it does not, and what would happen in the first month if nobody knew.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _task or judgement?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had the writer not previously thought of it as a decision? ⚠ **Usually all three** — **and that is not carelessness, it is what competence feels like from inside, which is the finding of the cycle.**'));
out.push(box('Homework', ['Write your final text. Then take five of your own tasks, apply the careless test to each, and write the judgement wherever one appears (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 20.2 =======================
out.push(pb());
out.push(h2('20.2  Your successor\'s first week'));
out.push(p('**Function:** writing the week somebody else will have   ·   **Grammar:** _in your first week you will have to X; nobody will tell you about Y_   ·   **Pronunciation:** an instruction given to somebody not present'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say what happened in your own first week in your present job. ⚠ Then say what nobody told you and what it cost.'));
out.push(p('**b**  Which is useful to a successor? _familiarise yourself with the systems · in your first week the April invoices go out on the 7th, Abu Yasser will test you once, and nobody will tell you that the Ministry order has to be confirmed by Wednesday because the person who used to remind us retired_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Lina say about her own first week?   **A** it went well   **B** she spent it on things nobody had mentioned and the things she had been briefed on were easy   **C** she was not briefed'));
out.push(p('**b**  Listen again. **1** What are the three kinds of thing she says a first week contains? **2** What does Mr Ayoub add that she had not thought of?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.3  "Nobody told me about the Wednesday"', [
  ['Mr Ayoub', 'Lina, you joined two years ago. What did your first week actually consist of?'],
  ['Lina', '⚠ **Almost nothing I had been told about.** ⚠ **I had a briefing on the filing and the telephone system and I could have worked both out in an hour.**'],
  ['Mr Ayoub', 'And what did it actually consist of?'],
  ['Lina', '⚠ **Three kinds of thing.** ⚠ **Fixed events that happened to fall in that week** — **the invoices went out on the Tuesday and I had no idea they were due.** ⚠ **People testing me once** — **Abu Yasser asked me for something he knew I could not give him, and watched.** ⚠ **And one piece of knowledge nobody had because the person who had it had gone.**'],
  ['Mr Ayoub', 'Which was?'],
  ['Lina', '⚠ **That the Ministry order has to be confirmed by Wednesday.** **It is not in any document. The woman before me used to remind everybody and she retired, and for two months nobody confirmed it on time and nobody knew why things felt wrong.**'],
  ['Mr Ayoub', 'So a first week is a calendar, a set of tests, and a hole.'],
  ['Lina', '⚠ **Yes. And nobody writes any of the three.** **They write the filing system.**'],
  ['Mr Ayoub', '⚠ **There is a fourth and you have just told me what it is without noticing.** ⚠ **What a successor will change first.**'],
  ['Lina', 'I changed the invoice run to the Monday.'],
  ['Mr Ayoub', '⚠ **In your first fortnight. And was it an improvement?**'],
  ['Lina', '⚠ **No. I moved it back in June, because the Monday clashed with the bank.** ⚠ **Nobody had told me why it was on the Tuesday, so I assumed it was on the Tuesday for no reason.**'],
  ['Mr Ayoub', '⚠ **Which is the most useful line in this conversation.** ⚠ **A successor changes the things that look arbitrary, and the things that look arbitrary are the ones whose reasons were never written down** — **so a handover that names them saves a change, a reversal and four months.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A first week has four things in it, and the briefing contains none of them**',
  table(['', 'What it is', 'How to write it'], [
    ['**1 the calendar**', '**fixed events that happen to fall in that week**', '⚠ *the April invoices go out on the 7th; the Ministry order is confirmed by Wednesday*'],
    ['⚠ **2 the tests**', '⚠ **people who will try you once, by name**', '⚠ *Abu Yasser will ask you for something he knows you cannot give. Say no and say why. He will not ask twice.*'],
    ['⚠ **3 the hole**', '⚠ **knowledge that left with somebody**', '⚠ *nobody now knows which of the two Ministry contacts answers e-mail. Find out in week one.*'],
    ['⚠ **4 what they will change**', '⚠ **whatever looks arbitrary** — **and it looks arbitrary because its reason was never written**', '⚠ *the invoice run is on Tuesday because Monday clashes with the bank. Do not move it. Somebody moved it in 2025 and moved it back.*'],
  ], [1.9, 3.1, 4]),
  '⚠ **A briefing describes the systems and a first week consists of none of them.** ⚠ **The filing can be worked out in an hour; the Wednesday cannot be worked out at all.**',
  '⚠ **Name the people who will test a successor, by name, with what they will ask and what to answer.** ⚠ *He will not ask twice.* **It is the single kindest thing in any handover and it is almost never written, because the person leaving stopped being tested years ago.**',
  '⚠ **The fourth item is the one that saves real time.** ⚠ **A successor changes what looks arbitrary, and what looks arbitrary is exactly what has no recorded reason** — **so every undocumented arrangement is a change, a reversal and four months, waiting to happen.**',
  '⚠ **Write it as a prohibition WITH its reason and its history.** ⚠ *Do not move it. Somebody moved it in 2025 and moved it back.* **A bare *do not move it* is an instruction a successor is entitled to ignore; the same line with a reversal in it is a fact.**',
  '⚠ **And name the holes as holes, with a week-one action.** ⚠ *Nobody now knows which contact answers e-mail. Find out in week one.* **A hole handed over with an instruction is a task; one handed over silently is a discovery in month three.**',
  '**Practise:** Write the four items for your own post, as though for somebody arriving on Monday.',
  '**Useful phrases:**  the calendar, the tests, the hole, the change  ·  he will not ask twice  ·  it looks arbitrary because nobody wrote the reason  ·  do not move it, and here is why  ·  find out in week one',
  '**Pronunciation – an instruction to somebody not present.** 🔊 **Track 20.4** Listen twice. ⚠ **The first says *say no and say why; he will not ask twice* briskly, as a procedure.** ⚠ **The second says it slowly and warmly.** **Brisk, it is usable advice; warm, it sounds like a warning about a difficult man, and the successor arrives braced for a fight that is not coming.** Say it four times, briskly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A describes a post; B builds the four items.'));
out.push(dlg(null, [
  ['A', 'My post is __________.'],
  ['B', '⚠ **What falls in the first week, by date?**'],
  ['A', '__________.'],
  ['B', '⚠ **Who will test them once, and with what?**'],
  ['A', '__________.'],
  ['B', '⚠ **What does nobody know any more?**'],
  ['A', '__________.'],
  ['B', '⚠ **And what will they change in the first fortnight, because it looks arbitrary?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then write that one down with its reason, or they will change it and change it back.**'],
]));
out.push(table(['Role card 1 — they will pick it up', 'Role card 2 — I cannot name people'], [[
  '⚠ **A believes a competent successor will work out the first week unaided.** ⚠ **B asks about the Ministry Wednesday, which is in no document and was lost for two months.** ⚠ **B\'s point: a competent person works out everything that is written down and nothing that is not** — **and the things that are not written down are, by definition, the ones that caused the trouble.**',
  '⚠ **A is uncomfortable naming colleagues who will test a successor, in case the document is seen.** ⚠ **B asks what the alternative costs the successor on their third day.** ⚠ **B\'s point: *he will ask you for something he knows you cannot give; say no and say why; he will not ask twice* is not a criticism of anybody** — **it is a description, it is kind to both people, and a handover that cannot be shown to the people in it is written wrongly rather than written honestly.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four items for one post. ⚠ Then say why the fourth saves the most time, and give the reversal rule in one sentence.'));
out.push(PHRASE_CARD(['what falls that week?', 'who tests them, and how?', 'what does nobody know?', 'what will they change?', 'with its reason, or they change it back']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take your own post, or one you know well.'));
out.push(table(['The calendar', 'The tests, by name', 'The hole', 'What they will change, and why not'], [['', '', '', '']], [2.2, 2.4, 2, 2.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _In the first week, _______ falls due. _______ will test them by _______. Nobody now knows _______. And they will change _______, which is the way it is because _______._'));
out.push(p('**Listener task:** count how many of the fourth items have a recorded reason anywhere. ⚠ Then ask how many of the writers have themselves changed something and changed it back.'));
out.push(p('**Board clinic:** your teacher writes four first-week notes on the board — find the one that describes the filing system, and the one whose prohibition has no reason attached. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**HANDOVER, PAGE 4: YOUR FIRST WEEK. Written for whoever holds this post on 1 May. K. Ayoub, 7 April.**',
  '⚠ **1  The calendar. Four things fall in your first week and none of them will wait.** **The April invoices go out on the 7th and Nadia needs the delivery sheets by the 5th. The Ministry order is confirmed by Wednesday — this is in no document and I will come to it below. The Beirut bundle closes on the 9th, and Nour will handle it, but you sign the covering letter. And the Homs lease completes on the 12th.**',
  '⚠ **2  The tests. Two people will try you once each, and both are reasonable men.** ⚠ **Abu Yasser will ask you to release stock against a verbal order, probably in your first three days. He knows you cannot. Say no, and say that it is because the gate sheet is the only record of what left the yard. He will not ask again, and after that he will tell you things nobody else tells you.** ⚠ **Bassel will bring you a proposal in your first fortnight and ask for a decision in the same conversation. Say you will read it and answer on a named day. Then answer on that day.**',
  '⚠ **3  The holes. Three things nobody now knows, and one of them is urgent.** ⚠ **Which of the two Ministry contacts answers e-mail: find out in week one, because the Wednesday depends on it. Who the Doctor was: see the Homs file, page 2A, and Nour has a list. And what our actual overtime criteria are: see page 3, where I record that I have never had any.**',
  '⚠ **4  What you will want to change, and the two I ask you not to.** ⚠ **You will want to move the invoice run off the 7th. Do not: the 7th is after the bank reconciliation and before the Ministry cut-off, and the only month it moved was May 2025, when it moved back in six weeks.** ⚠ **You will want to stop telephoning Tarabishi on day four. Do not: see page 3.** **Everything else on pages 1 and 2 you should change if you can see a better way, and I would rather you changed it in June than in your first fortnight.**',
  '⚠ **A note on why item 4 exists at all.** **Every arrangement in this office that looks arbitrary looks arbitrary because nobody wrote down why it was like that.** ⚠ **A new holder changes those first, because they are the only things that appear to cost nothing to change** — **and two of them cost four months each.** **This page is the cheapest thing in the handover and it took me an hour.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the writer say about Abu Yasser, and what happens after the test?'));
out.push(item('2', 'How many holes are named, and what is the week-one action on the urgent one?'));
out.push(item('3', 'Why does item 4 exist, and what does the writer say it cost to write?'));
out.push(box('Writer\'s box', [
  '**The first-week page — five parts:** ⚠ **the calendar, with dates and who needs what by when** → ⚠ **the tests, by name, with the answer to give** → ⚠ **the holes, with a week-one action on each** → ⚠ **what they will change, with two prohibitions that carry reasons and histories** → ⚠ **and a line saying why the last item exists.**',
  '⚠ **Date the calendar items and name who depends on each.** ⚠ *The invoices go out on the 7th and Nadia needs the delivery sheets by the 5th.* **A date with a dependency attached cannot be missed by somebody reading it on the 4th.**',
  '⚠ **Name the testers, say what they will ask, give the answer, and say what follows.** ⚠ *He will not ask again, and after that he will tell you things nobody else tells you.* **The last clause is what makes the paragraph kind rather than a warning** — **and it is true, which is why it can be written.**',
  '⚠ **Give every hole a week-one action and say why it is urgent.** ⚠ *Find out in week one, because the Wednesday depends on it.* **A hole with a reason attached gets closed; one listed without a reason gets read as background.**',
  '⚠ **Make the prohibitions few, reasoned and historical.** ⚠ *Do not: the 7th is after the reconciliation and before the cut-off, and the only month it moved was May 2025, when it moved back in six weeks.* **Two prohibitions with reasons will be obeyed; twelve without them will all be ignored.**',
  '⚠ **And license everything else, with a date.** ⚠ *Everything else you should change if you can see a better way, and I would rather you changed it in June than in your first fortnight.* **A handover that forbids nothing is useless and one that forbids everything is worse** — **this one forbids two things and invites the rest.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a first-week page for your own post (**80 words or more**). Use the frame.'));
out.push(p('**HANDOVER: YOUR FIRST WEEK. Written for whoever holds this post on ______________. ______________, ______________.**   ⚠ **1  The calendar. ______________ things fall in your first week. ______________, and ______________ needs ______________ by ______________.**   ⚠ **2  The tests. ______________ will ask you for ______________, probably in your first ______________. Say ______________, and say that it is because ______________. ______________.**   ⚠ **3  The holes. ______________ things nobody now knows. ______________: find out in week one, because ______________.**   ⚠ **4  What you will want to change, and the ______________ I ask you not to. You will want to ______________. Do not: ______________, and the only time it changed was ______________, when it changed back in ______________.** ⚠ **Everything else you should change if you can see a better way, and I would rather you did it in ______________ than in your first fortnight.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Dates, and who needs what by when', ''],
  ['Testers named, with the answer to give and what follows', ''],
  ['A week-one action and a reason on every hole', ''],
  ['Prohibitions few, with reasons and histories', ''],
  ['Everything else licensed, with a date', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their prohibitions. ⚠ The class says of each whether a new holder would obey it, and the test is whether it carries a history.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about your own first week in a job (**200 to 240 words**). Say what you were briefed on, what the week actually consisted of, what nobody told you, and what you changed and then changed back.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _would this have been in a briefing?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the writer change something and change it back? ⚠ **Usually two of three** — **and in every case the thing changed had no recorded reason, which is 18.4 and 20.2 being the same finding seen from two ends.**'));
out.push(box('Homework', ['Write your final text. Then write the four first-week items for your own post, as though for somebody arriving on Monday (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 20.3 =======================
out.push(pb());
out.push(h2('20.3  What you have been carrying alone'));
out.push(p('**Function:** naming a single-person dependency   ·   **Grammar:** _if I were not here, X would simply stop_   ·   **Pronunciation:** a dependency named without self-importance'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one thing at your work that would simply stop if you were away for a month. ⚠ Then say whether anybody above you knows that.'));
out.push(p('**b**  Which is useful? _I am quite important to the invoicing · if I were away for a month the Ministry confirmation would not happen, because I am the only person who knows it is due on a Wednesday, and nobody would notice until the following month_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say is wrong with how people write this?   **A** nothing   **B** they write it as a claim about their own value instead of as a risk with a consequence and a remedy   **C** they exaggerate'));
out.push(p('**b**  Listen again. **1** What three parts does she say a dependency needs? **2** What does she say about the remedy being the writer\'s own job?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.5  "That is not a risk, that is a boast"', [
  ['Mr Ayoub', 'Page six. The things that would stop if I were not here.'],
  ['Nadia', 'Read me the first one.'],
  ['Mr Ayoub', '"The relationship with the landlord in Homs depends entirely on me."'],
  ['Nadia', '⚠ **That is not a risk. That is a boast with a worried face on it.**'],
  ['Mr Ayoub', 'It is true.'],
  ['Nadia', '⚠ **It may be, and as written it tells a reader that you are valuable and nothing else.** ⚠ **A dependency needs three parts: what stops, what it costs, and what would have to happen for it not to stop.**'],
  ['Mr Ayoub', 'Give me it for the landlord.'],
  ['Nadia', '⚠ **What stops: the lease discussions in 2029, because he will deal with you and has twice refused to deal with anybody else.** ⚠ **What it costs: a renewal on worse terms, or a move, which in 2029 is about four million.** ⚠ **What would have to happen: somebody else is in the room with you at the next two meetings, before 30 April.**'],
  ['Mr Ayoub', 'There is one meeting before 30 April.'],
  ['Nadia', '⚠ **Then say that, and say that one is not enough, and say what you would do with the second.** **A remedy you cannot complete is still worth writing, with what is missing from it.**'],
  ['Mr Ayoub', 'And if there is no remedy at all?'],
  ['Nadia', '⚠ **Then it is a risk the firm carries and somebody above you has to know they are carrying it.** ⚠ **Which is the point: a dependency on one person is not that person\'s achievement and it is not their fault either. It is a decision the firm took by not deciding.**'],
  ['Mr Ayoub', 'Nobody ever decided that I would be the only one who speaks to him.'],
  ['Nadia', '⚠ **Nobody ever decides any of them.** ⚠ **It happened once because you were there, and then it was easier for everybody for sixteen years** — **and the last four words of your sentence should be *and nobody chose this*.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A dependency has three parts, and a boast has one**',
  table(['', 'Not this', 'This'], [
    ['**the claim**', '⚠ *the relationship with the landlord depends entirely on me*', '⚠ **(the same fact, as the first of three parts)**'],
    ['**1 what stops**', '**—**', '⚠ *the 2029 lease discussions stop: he will deal with me and has twice refused anybody else*'],
    ['⚠ **2 what it costs**', '**—**', '⚠ *a renewal on worse terms, or a move, which in 2029 is about four million*'],
    ['⚠ **3 the remedy**', '**—**', '⚠ *somebody else in the room at the next two meetings* — **and only one falls before 30 April, so say that too**'],
  ], [1.6, 3.3, 4.1]),
  '⚠ **A dependency written as one sentence is a boast with a worried face on it.** ⚠ **It tells a reader that you are valuable and tells them nothing they can act on** — **and the writer usually did not intend the first part at all.**',
  '⚠ **What stops · what it costs · what would have to happen.** ⚠ **Three parts, and the third is the one that makes the paragraph a handover rather than a complaint.**',
  '⚠ **Write a remedy you cannot complete, with what is missing.** ⚠ *There is one meeting before 30 April and one is not enough.* **An incomplete remedy with its gap named is usable by a successor; a remedy omitted because it cannot be finished is a problem nobody inherits.**',
  '⚠ **Where there is no remedy, say the firm is carrying the risk and name who has to know.** ⚠ **That is not passing a problem upwards** — **it is the only honest destination for a risk one person cannot remove.**',
  '⚠ **And the last four words.** ⚠ *And nobody chose this.* **A dependency on one person is nobody\'s achievement and nobody\'s fault: it happened once because somebody was there and then it was easier for everybody for years** — **and saying so is what stops the paragraph reading as either a boast or an accusation.**',
  '**Practise:** Take two things that would stop without you. Write all three parts, and the last four words.',
  '**Useful phrases:**  a boast with a worried face  ·  what stops, what it costs, what would have to happen  ·  one is not enough  ·  the firm is carrying this  ·  and nobody chose this',
  '**Pronunciation – a dependency without self-importance.** 🔊 **Track 20.6** Listen twice. ⚠ **The first says *he will deal with me and has twice refused anybody else* flatly, as a fact about the landlord.** ⚠ **The second stresses *me*.** **Flat, it is a risk; stressed, it is a claim about the speaker, and a reader stops reading for the remedy.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names a dependency; B asks for the three parts.'));
out.push(dlg(null, [
  ['A', 'If I were not here, __________ would depend on nobody.'],
  ['B', '⚠ **What exactly stops?**'],
  ['A', '__________.'],
  ['B', '⚠ **And what does that cost, in money or in time?**'],
  ['A', '__________.'],
  ['B', '⚠ **What would have to happen for it not to stop?**'],
  ['A', '__________.'],
  ['B', '⚠ **Can you complete that before you go?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then say what is missing, and add *and nobody chose this*.**'],
]));
out.push(table(['Role card 1 — it sounds like boasting', 'Role card 2 — I cannot fix it, so I will not write it'], [[
  '⚠ **A refuses to write the dependency at all, because any version of it sounds self-important.** ⚠ **B agrees that the one-sentence version does, and asks for the cost and the remedy.** ⚠ **B\'s point: three parts cannot be read as a boast, because two of them are about the firm and one is a job for somebody else** — **and the *nobody chose this* clause removes the last of it.**',
  '⚠ **A leaves out a dependency with no available remedy, on the ground that writing it achieves nothing.** ⚠ **B asks who is carrying the risk once A has gone.** ⚠ **B\'s point: an unremovable risk has to be held by somebody who knows they are holding it** — **and a successor who discovers it in month three has been handed a problem that was known and not stated.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write one dependency in all three parts. ⚠ Then say what is missing from the remedy, and add the last four words.'));
out.push(PHRASE_CARD(['what stops?', 'what does it cost?', 'what would have to happen?', 'what is missing from that?', 'and nobody chose this']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** things that would stop without you.'));
out.push(table(['What stops', 'What it costs', 'What would have to happen', 'Can you complete it?'], [['', '', '', ''], ['', '', '', '']], [2.2, 2.2, 2.6, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _If I were not here, _______ would stop. That costs _______. For it not to stop, _______ would have to happen. I _______ complete it, and what is missing is _______. And nobody chose this._'));
out.push(p('**Listener task:** count how many remedies could be completed before the writer left. ⚠ Then ask how many of the dependencies anybody senior currently knows about.'));
out.push(p('**Board clinic:** your teacher writes four dependency paragraphs on the board — find the one that is a boast with a worried face, and the one with no remedy and no named holder. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**HANDOVER, PAGE 6: FIVE THINGS THIS FIRM HAS BEEN CARRYING THROUGH ONE PERSON. K. Ayoub, 9 April.**',
  '⚠ **Nobody chose any of these. Each happened once because I was there, and was then easier for everybody for several years.**',
  table(['What stops', 'What it costs', 'What would have to happen'], [
    ['**the Homs landlord**', '**the 2029 lease: he will deal with me and has twice refused anybody else. A renewal on worse terms or a move, which at 2029 rents is about 4 m.**', '⚠ **somebody in the room at the next two meetings. Only one falls before 30 April. The second is in September and I will attend it unpaid if the firm asks me to** — **which is a remedy with a hole in it and the hole is mine.**'],
    ['**Abu Yasser on exceptions**', '**he will refuse a verbal release to anybody; he will tell ME when something is wrong in the yard before it becomes a loss. Twice this has saved about 300,000.**', '⚠ **nothing I can do in three weeks.** **This is a risk the firm carries and Mr Sayegh now knows it does.** ⚠ **It is not transferable by introduction; it took nine years.**'],
    ['**the Ministry Wednesday**', '**about 200,000 a year in late-payment interest, as happened for two months in 2025**', '⚠ **it is written on page 4 and in the diary from May.** ⚠ **DONE** — **and it is the only one of the five that a document could fix, which is worth noticing.**'],
    ['**which customers may be invoiced late**', '**four customers, about 1.2 m of turnover, and the relationships are the asset rather than the terms**', '**page 3 names them, and Nour has met three of the four with me since February**'],
    ['⚠ **the overtime approvals**', '⚠ **nothing** — **and this is the discovery of the exercise**', '⚠ **I thought this depended on me and it does not: I have approved everything for sixteen years, so there is nothing here to transfer.** ⚠ **It needs somebody to DECIDE it, which is a different request and I am making it of Mr Sayegh rather than of my successor.**'],
  ], [2, 3.4, 3.6]),
  '⚠ **Three observations, and the third is the one I would want read.**',
  '**First, only one of the five could be fixed by writing something down, and it has been.** ⚠ **The other four are either a relationship or a decision, and a document cannot carry either.**',
  '**Second, two of the five I cannot discharge before 30 April and I have said which and why.** ⚠ **A remedy with a hole in it, with the hole named, is worth four times a remedy I pretend to have completed.**',
  '⚠ **Third, and this is uncomfortable to write: the firm has been running on five single-person dependencies for years and nobody has ever written them down, including me.** ⚠ **I am not writing this page because I am leaving.** **I should have written it in 2015, when it would have been four pages and a reorganisation instead of three weeks and a hope.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many of the five could be fixed by writing something down, and what does the writer say about the rest?'));
out.push(item('2', 'What is the discovery in the last row, and who is the request being made of?'));
out.push(item('3', 'What does the writer say in the third observation, and when should the page have been written?'));
out.push(box('Writer\'s box', [
  '**The dependencies page — five parts:** ⚠ **a line saying nobody chose any of them** → ⚠ **three columns: what stops · what it costs · what would have to happen** → ⚠ **a remedy marked DONE where it is, and a named hole where it is not** → ⚠ **anything you discovered was not a dependency at all** → ⚠ **and when the page should have been written.**',
  '⚠ **Open with *nobody chose any of these*, and say how they happen.** ⚠ *Each happened once because I was there and was then easier for everybody.* **Two sentences that stop the whole page reading as either a boast or an accusation, and they cost nothing.**',
  '⚠ **Cost each one in money where you can.** ⚠ *About 4 m · about 300,000 twice · about 200,000 a year · about 1.2 m of turnover.* **A dependency with a figure gets a decision; one without gets agreement and no action.**',
  '⚠ **Mark DONE where it is done, and name the hole where it is not.** ⚠ *Only one meeting falls before 30 April. I will attend the September one unpaid if the firm asks.* **That is a remedy with a hole and an offer** — **and the hole being named is what makes the rest of the page believable.**',
  '⚠ **Say which kind each one is, because the kinds behave differently.** ⚠ **A document fixes one of five; a relationship cannot be transferred by introduction** — *it took nine years* — **and a decision has to be made by somebody rather than handed to anybody.**',
  '⚠ **And say when the page should have been written.** ⚠ *I should have written it in 2015, when it would have been four pages and a reorganisation instead of three weeks and a hope.* **That sentence is the only thing on the page addressed to the person who is NOT leaving**, **and it is the most useful line in it.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a dependencies page for your own post (**80 words or more**). Use the frame.'));
out.push(p('**HANDOVER: THINGS THIS FIRM HAS BEEN CARRYING THROUGH ONE PERSON. ______________, ______________.**   ⚠ **Nobody chose any of these. Each happened once because ______________.**   **What stops** | **What it costs** | ⚠ **What would have to happen**   **______________** | **______________** | ⚠ **______________, and what is missing is ______________**   **______________** | **______________** | ⚠ **nothing I can do in ______________. This is a risk the firm carries and ______________ now knows it does.**   ⚠ **______________** | ⚠ **nothing** | ⚠ **I thought this depended on me and it does not: ______________**   ⚠ **Observations. First, ______________ of them could be fixed by writing something down.** ⚠ **Second, ______________.** ⚠ **Third, I should have written this page in ______________, when it would have been ______________ instead of ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*Nobody chose any of these*, and how they happen', ''],
  ['A figure against each cost where one is possible', ''],
  ['DONE where done; the hole named where not', ''],
  ['Which kind each one is — document, relationship, decision', ''],
  ['When the page should have been written', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *what would have to happen* column. ⚠ The class says of each whether it could be completed before the writer left, and most cannot.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something your firm carries through one person (**200 to 240 words**). Say what stops, what it costs, what would have to happen, whether anybody senior knows, and when somebody should have written it down.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _is there a remedy, or only a complaint?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many does the dependency rest on the writer themselves? ⚠ **Usually two of three** — **and ask in those cases whether anybody senior knows, because the answer is usually no and the writer has never thought it was their job to say so.**'));
out.push(box('Homework', ['Write your final text. Then take one dependency at your work and write all three parts, with a figure against the cost (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 20.4 =======================
out.push(pb());
out.push(h2('20.4  The judgement you would not defend again'));
out.push(p('**Function:** handing on your own mistake   ·   **Grammar:** _I did X; I would not do it again; what I would do is Y_   ·   **Pronunciation:** a mistake stated without performance'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a decision of yours at work that you would now take differently. ⚠ Then say whether anybody who comes after you will ever hear about it.'));
out.push(p('**b**  Which is worth handing on? _I have made mistakes like everybody · in 2021 I closed Homs rather than spending a year finding out what was wrong, and I would still close it; what I would not do again is decide it alone in a fortnight_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub distinguish?   **A** nothing   **B** the decision he would take again from the way he took it, which he would not   **C** two mistakes'));
out.push(p('**b**  Listen again. **1** What does he say the difference is between a confession and a handover? **2** What does Nour say about the third part?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.7  "I would do it again. I would not do it that way again"', [
  ['Nour', 'Page eight. "Judgements I would not defend again." You have written one.'],
  ['Mr Ayoub', '⚠ **Homs, 2021. And I need to be exact, because the exactness is the whole value of it.** ⚠ **I would close it again. What I would not do again is decide it alone, in a fortnight, without counting anything.**'],
  ['Nour', 'Those are different things.'],
  ['Mr Ayoub', '⚠ **They are, and most people writing this page cannot separate them.** ⚠ **They either defend the decision entirely, which is useless, or they disown it entirely, which is dishonest** — **because I still think closing was right.**'],
  ['Nour', 'So what is a successor supposed to take from it?'],
  ['Mr Ayoub', '⚠ **Not *do not close shops*. That would be the wrong lesson from the right mistake.** ⚠ **The lesson is: a decision you could test for four million and will have to live with for six years is a decision worth testing.** **I could have borne the four million. I decided I could not bear another year of not knowing, and that was the error.**'],
  ['Nour', 'And what do you say happened as a result?'],
  ['Mr Ayoub', '⚠ **That is the part I was going to leave out, and I will not.** ⚠ **The firm spent six years without a northern site and reopened in 2027 at a rent a third higher than the one we gave up.** **That is the cost of the error, in a figure, and if I write the error without the figure it is a reflection rather than a warning.**'],
  ['Nour', 'There is a third part and you have not written it.'],
  ['Mr Ayoub', 'Go on.'],
  ['Nour', '⚠ **What would stop it happening again.** ⚠ **Not what you would do differently** — **you will not be here.** **What would make it hard for the next person to do what you did.**'],
  ['Mr Ayoub', '(pause) ⚠ **A rule that a site decision needs a count and a second signature. Which I would have resented in 2021 and which would have saved six years.**'],
  ['Nour', '⚠ **Then that is the sentence.** **Everything above it is history and that one is a handover.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A judgement you would not defend again — four parts**',
  table(['', 'The part', 'Here'], [
    ['**1 the decision**', '**what you did, with the date**', '⚠ *in November 2021 I closed Homs rather than restocking it*'],
    ['⚠ **2 the split**', '⚠ **what you would do again, and what you would not** — **and they are different**', '⚠ *I would close it again. I would not decide it alone, in a fortnight, without counting anything.*'],
    ['⚠ **3 the cost, as a figure**', '⚠ **what the error actually cost**', '⚠ *six years with no northern site, and a 2027 rent a third higher than the one we gave up*'],
    ['⚠ **4 what would stop it recurring**', '⚠ **not what YOU would do** — **you will not be here**', '⚠ *a site decision needs a count and a second signature* — **which I would have resented in 2021**'],
  ], [2, 3.2, 3.8]),
  '⚠ **Separate the decision from the way you took it, and be exact about which you are disowning.** ⚠ **A writer who defends everything has handed on nothing; one who disowns everything has handed on something untrue** — **and the second is commoner, because it feels humble.**',
  '⚠ **Give the cost as a figure, even when it is the part you were going to leave out.** ⚠ *A rent a third higher than the one we gave up.* **An error without a figure is a reflection; the same error with one is a warning.**',
  '⚠ **And the fourth part is the only one that is actually a handover.** ⚠ **Not what you would do differently** — **you will not be there.** **What would make it HARD for the next person to do what you did: a rule, a second signature, a required count.**',
  '⚠ **Say if you would have resented the remedy at the time.** ⚠ *Which I would have resented in 2021.* **It is the sentence that makes the remedy credible, because it concedes that the person it would have constrained is you** — **and a successor who is about to be constrained by it needs to know that.**',
  '⚠ **The lesson is never the obvious one.** ⚠ **Not *do not close shops*, which is the wrong lesson from the right mistake** — **but *a decision you could test for four million and will live with for six years is worth testing*, which transfers to things that are not shops at all.**',
  '**Practise:** Take a decision of yours you would now take differently. Write all four parts, and be exact in the second.',
  '**Useful phrases:**  I would do it again · I would not do it that way again  ·  the wrong lesson from the right mistake  ·  what it cost, in a figure  ·  what would make it hard to repeat  ·  which I would have resented',
  '**Pronunciation – a mistake without performance.** 🔊 **Track 20.8** Listen twice. ⚠ **The first says *I would not decide it alone, in a fortnight, without counting anything* evenly.** ⚠ **The second slows and softens on *without counting anything*.** **Even, it is a finding a successor can use; softened, it is a confession, and the successor consoles the writer instead of reading the remedy.** Say it four times, even.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A brings a decision; B works the four parts.'));
out.push(dlg(null, [
  ['A', 'In __________ I __________.'],
  ['B', '⚠ **Would you take the same decision again?**'],
  ['A', '__________.'],
  ['B', '⚠ **And what about the way you took it?**'],
  ['A', '__________.'],
  ['B', '⚠ **What did the error cost? Give me a figure.**'],
  ['A', '__________.'],
  ['B', '⚠ **Now the useful one. What would make it HARD for the next person to do what you did?**'],
  ['A', '__________.'],
  ['B', '⚠ **Would you have resented that at the time?**'],
]));
out.push(table(['Role card 1 — I would do nothing differently', 'Role card 2 — it was all my fault'], [[
  '⚠ **A defends the decision and the method together and offers the page as having nothing in it.** ⚠ **B asks how long A took and what A counted.** ⚠ **B\'s point: the decision can be right and the method wrong, and a page that defends both has handed on nothing** — **the split is the whole exercise and it is not an admission of error in the decision.**',
  '⚠ **A disowns the decision entirely and writes *I should never have closed it*.** ⚠ **B asks whether A actually believes that.** ⚠ **B\'s point: A still thinks closing was right, so the humble version is the dishonest one** — **and a successor who inherits *do not close shops* has been given the wrong lesson from the right mistake.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four parts for one decision. ⚠ Then say whether the writer would have resented the remedy at the time, because that is the sentence that makes it credible.'));
out.push(PHRASE_CARD(['the same decision again?', 'and the way you took it?', 'what did it cost?', 'what would make it hard to repeat?', 'would you have resented it?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** decisions you would now take differently.'));
out.push(table(['The decision, and when', 'What you would do again', 'What you would not', 'The cost, and what would stop a repeat'], [['', '', '', ''], ['', '', '', '']], [2.2, 2, 2, 2.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _In _______ I _______. I would _______ again. I would not _______. It cost _______. And what would make it hard to repeat is _______, which I would have resented at the time._'));
out.push(p('**Listener task:** count how many separated the decision from the method. ⚠ Then ask how many of the fourth parts are rules that would have constrained the writer, because those are the ones worth having.'));
out.push(p('**Board clinic:** your teacher writes four of these on the board — find the one that disowns a decision the writer plainly still believes in, and the one whose lesson is the wrong lesson from the right mistake. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**HANDOVER, PAGE 8: THREE JUDGEMENTS I WOULD NOT DEFEND AGAIN. K. Ayoub, 11 April.**',
  '⚠ **This page is not a confession and it is not for my benefit. Each entry has four parts and the fourth is the only one that is any use to you.**',
  '⚠ **1  Homs, November 2021.** **I closed the Homs store rather than restocking it.** ⚠ **I would close it again.** ⚠ **What I would not do again is decide it alone, in a fortnight, without counting anything** — **the walk-in trade had never been measured and I did not measure it before deciding, and the whole question was whether the counter trade had gone because of the site or because of the stock.** ⚠ **What it cost: six years with no northern presence, and a reopening in 2027 at a rent about a third above the one we gave up.** ⚠ **What would stop it happening again: a site decision should require a count and a second signature.** **I would have resented that in 2021 and it would have saved six years.**',
  '⚠ **2  Clause 19, June 2026.** **I accepted an arbitration clause in a supplier\'s standard form without reading it.** ⚠ **I would still have signed the agreement.** ⚠ **What I would not do again is sign a dispute clause I have not read, in any document, at any value** — **because the cost of reading it was ten minutes and the cost of not reading it is a hearing in Beirut.** ⚠ **What it cost: about 4 m in fees and management time, and a forum we would not have chosen.** ⚠ **What would stop it: no agreement over 5 m is signed until somebody has initialled the dispute clause specifically.** **That is one line on a form.**',
  '⚠ **3  The overtime approvals, 2011 to 2027.** **I approved every overtime request for sixteen years.** ⚠ **I would not defend any part of this.** ⚠ **It is the only entry on this page with no half I would keep** — **I did not decide it, I never set a criterion, and I did not notice until I wrote page 3 of this handover.** ⚠ **What it cost: I do not know, and that is the finding.** **Nobody has ever calculated it, so it is not in any figure in this company.** ⚠ **What would stop it: somebody has to own this and it should not be my successor in their first month.** **I am asking Mr Sayegh.**',
  '⚠ **A note on why there are three and not thirty.** **I could write thirty and nobody would read them.** ⚠ **These are the three where the fourth part is a rule somebody could actually impose** — **a required count, an initialled clause, an owner.** **Everything else I would do differently is a matter of how I would behave, and I will not be here to behave.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'In entry 1, what would the writer do again and what would he not?'));
out.push(item('2', 'What is different about entry 3, and what does the writer say the cost was?'));
out.push(item('3', 'Why are there three entries rather than thirty?'));
out.push(box('Writer\'s box', [
  '**The not-defend-again page — five parts:** ⚠ **a line saying it is not a confession** → ⚠ **four parts per entry, with the split stated exactly** → ⚠ **a figure on every cost, or *I do not know* where that is the finding** → ⚠ **a fourth part that is a rule somebody could impose** → ⚠ **and a line saying why there are three and not thirty.**',
  '⚠ **Say at the top that it is not a confession and not for your benefit.** ⚠ **Otherwise a successor reads the page as an apology and takes nothing from it** — **and the writer, knowing that, writes a softer page.**',
  '⚠ **Be exact in the split and expect it to be uncomfortable.** ⚠ *I would close it again. What I would not do is decide it alone, in a fortnight, without counting anything.* **Entry 3 has no half worth keeping and says so, which is what makes entries 1 and 2 believable.**',
  '⚠ **Where you do not know the cost, write *I do not know, and that is the finding*.** ⚠ **Sixteen years of unexamined approvals have a cost that is in no figure in the company** — **and the absence of the figure is worth more than a guess at it.**',
  '⚠ **The fourth part must be a rule, not a disposition.** ⚠ *A count and a second signature · an initialled dispute clause · a named owner.* **Three impositions, each of which could be in place next month** — **and *be more careful* is not one of them.**',
  '⚠ **And limit the page, with the reason.** ⚠ *These are the three where the fourth part is a rule somebody could impose. Everything else is how I would behave, and I will not be here to behave.* **That sentence is the selection criterion, and it is why the page is three entries rather than a memoir.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a not-defend-again page for your own work (**80 words or more**). Use the frame.'));
out.push(p('**HANDOVER: JUDGEMENTS I WOULD NOT DEFEND AGAIN. ______________, ______________.**   ⚠ **This page is not a confession. Each entry has four parts and the fourth is the only one of any use to you.**   ⚠ **1  ______________, ______________. I ______________.** ⚠ **I would ______________ again.** ⚠ **What I would not do again is ______________.** ⚠ **What it cost: ______________.** ⚠ **What would stop it happening again: ______________. I would have resented that at the time.**   ⚠ **2  ______________. I would not defend any part of this. What it cost: ______________.** ⚠ **What would stop it: ______________.**   ⚠ **A note on why there are ______________ and not thirty. ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['An exact split: what again, what not again', ''],
  ['A figure on the cost, or *I do not know, and that is the finding*', ''],
  ['A fourth part that is a rule, not a disposition', ''],
  ['*Which I would have resented*, where true', ''],
  ['A selection criterion for why these and not others', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their fourth parts. ⚠ The class says of each whether it could be imposed next month by somebody other than the writer.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a judgement of yours you would not defend again (**200 to 240 words**). Separate the decision from the way you took it, give the cost, and say what rule would make it hard for the next person to repeat.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _is the fourth part a rule, or a disposition?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the fourth part a rule somebody could impose? ⚠ **Usually one of three** — **and the other two say *be more careful* in longer words, which is the fault the cycle exists to find.**'));
out.push(box('Homework', ['Write your final text. Then take one decision of yours and write the fourth part only: the rule that would make it hard for somebody else to repeat it (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 20.5 =======================
out.push(pb());
out.push(h2('20.5  The relationship that does not transfer'));
out.push(p('**Function:** handing over a person rather than a file   ·   **Grammar:** _I cannot hand you X; what I can do is Y_   ·   **Pronunciation:** an introduction that transfers standing'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say somebody outside your firm who deals with you rather than with your company. ⚠ Then say how long that took to build.'));
out.push(p('**b**  Which transfers something? _this is Nour, she is taking over from me · Abu Yasser, this is Nour. She is taking the post on 1 May. The last two times you told me something was wrong in the yard before it became a loss, I acted on it the same day. She will too, and she can sign what I sign._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Abu Yasser say about being introduced?   **A** nothing   **B** that he has been introduced to four people in nine years and only one of them mattered   **C** that he does not want to meet anybody'));
out.push(p('**b**  Listen again. **1** What does he say made the difference with that one? **2** What are the three things Mr Ayoub puts into the introduction?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.9  "I have been introduced to four people"', [
  ['Mr Ayoub', 'Abu Yasser. I want to introduce you properly to Nour before I go.'],
  ['Abu Yasser', '⚠ **You have introduced me to four people in nine years.** ⚠ **Three of them I never saw again and one of them mattered.**'],
  ['Mr Ayoub', 'Which one?'],
  ['Abu Yasser', '⚠ **Mr Attar. Because you did not say *this is the auditor*. You said *when this man asks you for the gate sheets, give him the originals, and if I am not here you do it anyway.*** ⚠ **That was not an introduction. That was you telling me what I was allowed to do without you.**'],
  ['Mr Ayoub', 'So an introduction is about authority.'],
  ['Abu Yasser', '⚠ **It is about whether I am going to be wrong for dealing with the person.** ⚠ **Nobody says no to a new office manager because they dislike them. They say no because they do not know whether it counts.**'],
  ['Mr Ayoub', 'Then let me do it properly. Three things.'],
  ['Abu Yasser', 'Go on.'],
  ['Mr Ayoub', '⚠ **One: what you and I have actually done, said out loud in front of her.** *Twice you have told me something was wrong in the yard before it became a loss, and twice I acted the same day.* ⚠ **Two: what she can do without me.** *She can sign what I sign, from 1 May, including a write-off up to half a million.* ⚠ **Three: what has not changed.** *The gate sheet is still the only record of what left the yard, and she knows that, and she will not ask you for a verbal release.*'],
  ['Abu Yasser', '⚠ **The second one is the only one I needed and it is the one people leave out.** ⚠ **The first is nice. The third is a courtesy.** **The second is the one that means I can say yes to her on a Thursday without telephoning anybody.**'],
  ['Mr Ayoub', 'And is nine years transferable in one conversation?'],
  ['Abu Yasser', '⚠ **No. The authority transfers in one conversation and the rest takes as long as it takes.** ⚠ **But without the authority the rest never starts, because she spends a year asking permission and I spend a year watching her ask.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**An introduction that transfers standing — three parts, and the second does the work**',
  table(['', 'The part', 'The words'], [
    ['**1 the history, out loud**', '**what the two of you have actually done**', '⚠ *twice you told me something was wrong before it became a loss, and twice I acted the same day*'],
    ['⚠ **2 the authority**', '⚠ **what the successor can do WITHOUT the person leaving** — **and this is the only part that matters on the day**', '⚠ *she can sign what I sign, from 1 May, including a write-off up to half a million*'],
    ['**3 what has not changed**', '**the rule that still applies, so nobody fears a new regime**', '⚠ *the gate sheet is still the only record, and she will not ask you for a verbal release*'],
  ], [2.2, 3.2, 3.6]),
  '⚠ **Nobody refuses a new office manager because they dislike them.** ⚠ **They refuse because they do not know whether it counts** — **so the introduction that transfers anything is the one that says what the new person can do without you.**',
  '⚠ **Part 2 needs a date and a limit.** ⚠ *From 1 May, including a write-off up to half a million.* **A limit is not a restriction on your successor; it is the thing that makes the authority real to the other person, because an unlimited claim is not believed.**',
  '⚠ **Say the history out loud, in front of both of them.** ⚠ **It tells the successor what the relationship is FOR**, **which no file conveys** — **and it tells the other person that you have said it in company, which is itself a kind of commitment.**',
  '⚠ **And say what has not changed.** ⚠ **Every handover arrives at an outsider as a possible new regime**, **and one sentence confirming the old rule removes a month of cautious behaviour on both sides.**',
  '⚠ **Do not claim that nine years transfers.** ⚠ *The authority transfers in one conversation and the rest takes as long as it takes.* **But without the authority the rest never starts, because the successor spends a year asking permission and the other person spends a year watching them ask.**',
  '**Practise:** Take one outside contact. Write the three parts, and put a date and a limit in the second.',
  '**Useful phrases:**  they do not know whether it counts  ·  she can sign what I sign, from  ·  including up to  ·  what has not changed  ·  the authority transfers; the rest takes as long as it takes',
  '**Pronunciation – an introduction that transfers.** 🔊 **Track 20.10** Listen twice. ⚠ **The first says *she can sign what I sign, from 1 May* as a statement of fact, with no rise at the end.** ⚠ **The second ends on a slight rise.** **Flat, it is a delegation; risen, it sounds like a hope, and the person you are introducing hears that it has not been settled.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A introduces a successor; B is the outside contact and asks the question that matters.'));
out.push(dlg(null, [
  ['A', '__________, this is __________. She is taking the post on __________.'],
  ['B', '⚠ **What can she do without you?**'],
  ['A', '__________.'],
  ['B', '⚠ **From when, and up to what?**'],
  ['A', '__________.'],
  ['B', '⚠ **And what has changed about what I have to give you?**'],
  ['A', '__________.'],
  ['B', '⚠ **Say the history out loud, so she knows what this is for.**'],
  ['A', '__________.'],
  ['B', '⚠ **Now I can say yes to her on a Thursday without telephoning anybody.**'],
]));
out.push(table(['Role card 1 — she will build her own relationship', 'Role card 2 — I cannot give her a limit'], [[
  '⚠ **A believes introductions are a formality and that the successor will build her own standing in time.** ⚠ **B asks what happens in the meantime, on a Thursday, with a decision that needs taking.** ⚠ **B\'s point: without the authority the building never starts** — **the successor spends a year asking permission and the contact spends a year watching, and both of them conclude the relationship has not transferred.**',
  '⚠ **A will not state a figure, because the limit is not formally agreed.** ⚠ **B says an unlimited claim is not believed and asks what is actually true.** ⚠ **B\'s point: a limit is what makes authority real to an outsider** — **and if the limit is not agreed, the honest version is *she can sign what I sign up to X; above that she comes to Mr Sayegh, as I did*, which is both true and usable.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three parts for one contact. ⚠ Then say why the second part is the only one that matters on the day, and what a missing limit does to it.'));
out.push(PHRASE_CARD(['what can she do without you?', 'from when, up to what?', 'what has not changed', 'say the history out loud', 'so I can say yes on a Thursday']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** outside contacts who deal with you personally.'));
out.push(table(['The contact', 'The history, in one line', 'What a successor could do without you, from when and up to what', 'What has not changed'], [['', '', '', ''], ['', '', '', '']], [1.6, 2.4, 3, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The contact is _______. What we have done is _______. A successor could _______, from _______, up to _______. And what has not changed is _______._'));
out.push(p('**Listener task:** count how many of the authority statements have both a date and a limit. ⚠ Then ask how many of the writers could actually make that statement today without asking anybody.'));
out.push(p('**Board clinic:** your teacher writes four introductions on the board — find the one that gives a name and a job title and nothing else, and the one whose authority has no limit. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter, and answer the questions.'));
out.push(box(null, [
  '**To: Mr Z. Attar, external auditor   From: K. Ayoub   16 April   Copy: N. Mansour, N. Sayegh**',
  '**Mr Attar,**',
  '**I hand over the office manager\'s post on 30 April. This letter is to transfer, as far as a letter can, what has been between you and this office since 2019.**',
  '⚠ **What has actually passed between us.** **You have asked this office for original gate sheets eleven times in eight years and received them eleven times, twice within the hour. In 2024 you wrote a sentence in your audit note that this firm has quoted in half for two years, and when Nour put it to you in February you declined to write a letter explaining it, on the ground that it would make you a witness about a company you audit.** ⚠ **I record that refusal here because it was the right answer and because I would not want a successor to read it as unhelpfulness.**',
  '⚠ **What N. Mansour can do without me, from 1 May.** **She can release any document you ask for, including originals, without reference to anybody. She can agree the audit timetable. She can commit this firm to a management-letter response. She can authorise a write-off up to 500,000.** ⚠ **Above that she comes to Mr Sayegh, which is exactly what I did.**',
  '⚠ **What has not changed.** **The gate sheet remains the only record of what left the yard. Nothing in this handover alters what you are entitled to ask for, and nothing in it alters your independence** — ⚠ **and I would rather say that in writing than have anybody wonder.**',
  '⚠ **One thing I cannot hand over, and I would rather name it than pretend.** **You tell me things about this company\'s records before they become findings.** **That is eight years old, it is not in any document, and a letter cannot transfer it.** ⚠ **What I can do is tell her it exists, tell you that I have told her, and leave the rest to the two of you.**',
  '**K. Ayoub**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the writer record about Mr Attar\'s refusal, and why?'));
out.push(item('2', 'What four things can the successor do, and what happens above 500,000?'));
out.push(item('3', 'What does the writer say he cannot hand over, and what does he do instead?'));
out.push(box('Writer\'s box', [
  '**The handover letter to an outside contact — five parts:** ⚠ **what has actually passed between you, with counts** → ⚠ **what the successor can do without you, from a date, with a limit and what lies above it** → **what has not changed** → ⚠ **what cannot be transferred, named rather than pretended** → ⚠ **and what you will do about that instead.**',
  '⚠ **Give the history in counts rather than in adjectives.** ⚠ *Eleven times in eight years, twice within the hour.* **A count is a fact the other person recognises as true of themselves; *an excellent working relationship* is a claim they have to take your word for.**',
  '⚠ **Record anything they did that could be misread, and say it was right.** ⚠ *I record that refusal here because it was the right answer and because I would not want a successor to read it as unhelpfulness.* **It costs four lines and it protects a relationship from a successor\'s first wrong inference.**',
  '⚠ **List the authority as specific permissions, with a limit AND what lies above it.** ⚠ *Up to 500,000. Above that she comes to Mr Sayegh, which is exactly what I did.* **The last clause is what makes the limit a continuation rather than a demotion.**',
  '⚠ **State what has not changed, including their independence.** ⚠ *Nothing in this handover alters what you are entitled to ask for, and nothing alters your independence.* **Say it even though nobody asked** — **because an outside professional reading a handover letter is working out whether a new regime is arriving.**',
  '⚠ **And name what cannot be transferred.** ⚠ *You tell me things before they become findings. That is eight years old and a letter cannot transfer it. What I can do is tell her it exists, tell you that I have told her, and leave the rest to the two of you.* **That is the honest maximum, and claiming more would be the one sentence in the letter that nobody believed.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a handover letter to an outside contact (**80 words or more**). Use the frame.'));
out.push(p('**To: ______________   From: ______________   ______________   Copy: ______________**   **I hand over ______________ on ______________. This letter is to transfer, as far as a letter can, ______________.**   ⚠ **What has actually passed between us. ______________ times in ______________ years. ______________.**   ⚠ **What ______________ can do without me, from ______________. She can ______________. She can ______________. She can authorise up to ______________.** ⚠ **Above that she comes to ______________, which is exactly what I did.**   ⚠ **What has not changed. ______________. Nothing in this handover alters ______________.**   ⚠ **One thing I cannot hand over. ______________. What I can do is tell her it exists, tell you that I have told her, and leave the rest to the two of you.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['History in counts, not adjectives', ''],
  ['Authority as permissions, with a date and a limit', ''],
  ['What lies above the limit, and that it is unchanged', ''],
  ['What has not changed, including their independence', ''],
  ['What cannot be transferred, named rather than claimed', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their authority paragraph. ⚠ The class says of each whether the contact could act on it on a Thursday without telephoning anybody.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a relationship at your work that would not survive your leaving (**200 to 240 words**). Say what it consists of, how long it took, what a letter could transfer, and what it could not.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _does the authority have a date and a limit?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the thing that cannot be transferred the most valuable part of the relationship? ⚠ **Usually all three** — **and the honest response is the letter\'s: name it, say you have named it to both people, and stop claiming the rest.**'));
out.push(box('Homework', ['Write your final text. Then write the authority paragraph for one outside contact: what a successor could do without you, from when, up to what, and what lies above it (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 20.6 =======================
out.push(pb());
out.push(h2('20.6  The case you cannot make out loud'));
out.push(p('**Function:** recommending a person, in writing   ·   **Grammar:** _I recommend X; the case against is Y; the thing I cannot say in a meeting is Z_   ·   **Pronunciation:** a recommendation with a reservation in it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say what you would want said about you if somebody recommended you for a post. ⚠ Then say what you would want left out, and whether leaving it out would help you.'));
out.push(p('**b**  Which is a recommendation? _Nour is the obvious choice · I recommend N. Mansour. The case against her is that she is carrying the arbitration to an award in June. The thing I cannot say in a meeting is that Bassel will apply, and that he would be adequate, and that adequate is not what this post needs in 2027._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Sayegh insist Mr Ayoub puts in writing?   **A** nothing   **B** the case against his own candidate, and the thing he would not say in a meeting   **C** two names'));
out.push(p('**b**  Listen again. **1** Why does he say a recommendation with no case against it is worthless? **2** What is the rule he gives about the unsayable part?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.11  "Write the sentence you would not say in the room"', [
  ['Mr Ayoub', 'I recommend Nour. I do not need two pages to say so.'],
  ['Mr Sayegh', '⚠ **You need one page and it has to contain the case against her, or it is not a recommendation.** ⚠ **It is a preference.**'],
  ['Mr Ayoub', 'The case against her is that she is in the middle of Beirut.'],
  ['Mr Sayegh', '⚠ **Write it. And write what happens to the arbitration if she takes this post on 1 May.**'],
  ['Mr Ayoub', 'It goes to somebody who has read the bundle twice instead of fifty times. It probably costs us issue two.'],
  ['Mr Sayegh', '⚠ **Then your recommendation is harder than you thought and the page is worth writing.** ⚠ **A recommendation that does not cost anything has not been thought about.**'],
  ['Mr Ayoub', 'And Bassel?'],
  ['Mr Sayegh', '⚠ **Which brings us to the sentence you have been avoiding for a week.** ⚠ **Say it to me now.**'],
  ['Mr Ayoub', '(pause) ⚠ **Bassel will apply. He would be adequate. And adequate is not what this post needs in the year we are reopening a site and finishing an arbitration.**'],
  ['Mr Sayegh', '⚠ **That is the most useful sentence in your recommendation and you were going to leave it out.**'],
  ['Mr Ayoub', 'I cannot say that in a meeting. He will be in the meeting.'],
  ['Mr Sayegh', '⚠ **You cannot say it in a meeting and you can write it to me.** ⚠ **The rule is this: anything you would say about a candidate behind a closed door belongs in the written recommendation, provided you would be willing to say it to the candidate themselves afterwards if they asked.**'],
  ['Mr Ayoub', 'Would I say *adequate* to Bassel?'],
  ['Mr Sayegh', '⚠ **Would you?**'],
  ['Mr Ayoub', '⚠ **I would say that the post this year needs somebody who has run a dispute, and that he has not.** ⚠ **Which is the same thing and it is better, because it names what is missing instead of grading him.**'],
  ['Mr Sayegh', '⚠ **Then write that, and the test has done its work** — **it has not censored you, it has made you precise.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A recommendation with the unsayable part in it**',
  table(['', 'The part', 'Here'], [
    ['**1 the recommendation**', '**one line, with a name**', '⚠ *I recommend N. Mansour for the post.*'],
    ['⚠ **2 the case against**', '⚠ **the real one, costed** — **and without it the page is a preference**', '⚠ *she is carrying the arbitration to an award in June; moving her on 1 May probably costs us issue two*'],
    ['⚠ **3 the unsayable part**', '⚠ **what you would say behind a closed door**', '⚠ *Bassel will apply and would be adequate; adequate is not what this post needs this year*'],
    ['⚠ **4 the test on part 3**', '⚠ **would you say it to the candidate if they asked?**', '⚠ *the post this year needs somebody who has run a dispute, and he has not* — **the same thing, and better, because it names what is missing instead of grading him**'],
  ], [2.1, 3.1, 3.8]),
  '⚠ **A recommendation with no case against it is a preference.** ⚠ **And a recommendation that costs nothing has not been thought about** — **so write what your own choice costs the firm, in the thing it costs.**',
  '⚠ **The unsayable part belongs in the writing.** ⚠ **Not in a meeting, where the candidate is present** — **in the written recommendation, to the person deciding.**',
  '⚠ **And the test is one question:** ⚠ *would you be willing to say it to the candidate themselves if they asked?* **If no, it does not go in. If yes, it goes in** — **and the test almost never censors a sentence; it makes it precise.**',
  '⚠ **Watch what the test did here.** ⚠ *He would be adequate* **becomes** *the post this year needs somebody who has run a dispute, and he has not.* **The second is sayable to Bassel, it is more informative, and it names what is missing instead of grading the man** — **which is the whole difference between an assessment and a judgement of a person.**',
  '⚠ **Name what is missing rather than ranking the candidate.** ⚠ **A missing thing can be acquired, pointed at, and argued with.** **A grade cannot be any of the three, and it follows somebody for years.**',
  '**Practise:** Recommend somebody for something. Write the case against, then the unsayable sentence, then apply the test to it.',
  '**Useful phrases:**  that is a preference, not a recommendation  ·  what does your choice cost?  ·  the sentence you would not say in the room  ·  would you say it to them if they asked?  ·  name what is missing, not the person',
  '**Pronunciation – a recommendation with a reservation.** 🔊 **Track 20.12** Listen twice. ⚠ **The first says *I recommend N. Mansour; the case against her is that she is carrying the arbitration* in one unbroken line.** ⚠ **The second pauses before *the case against*.** **Unbroken, the reservation is part of the recommendation; after a pause, it sounds like a retraction beginning.** Say it four times, unbroken.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A recommends; B asks the four questions.'));
out.push(dlg(null, [
  ['A', 'I recommend __________ for __________.'],
  ['B', '⚠ **What is the case against them?**'],
  ['A', '__________.'],
  ['B', '⚠ **And what does your choice cost the firm?**'],
  ['A', '__________.'],
  ['B', '⚠ **Now the sentence you would not say in the room.**'],
  ['A', '__________.'],
  ['B', '⚠ **Would you say that to them if they asked you?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then say the version you WOULD say, and that is the one that goes in.**'],
]));
out.push(table(['Role card 1 — it is obvious, so why write it', 'Role card 2 — I cannot write that about a colleague'], [[
  '⚠ **A says the choice is obvious and a page is bureaucracy.** ⚠ **B asks what the choice costs, and A has to say it probably costs an issue in Beirut.** ⚠ **B\'s point: a recommendation that costs nothing has not been thought about, and the page exists so that the person deciding knows the price of the obvious answer** — **which is almost never zero.**',
  '⚠ **A refuses to write anything comparative about a colleague who will see the decision.** ⚠ **B applies the test: would you say it to him if he asked?** ⚠ **B\'s point: the test does not silence the sentence, it rewrites it** — ***adequate* becomes *the post needs somebody who has run a dispute, and he has not*, which is sayable, more useful, and names a gap rather than grading a man.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write a recommendation, its case against, and the unsayable sentence in both versions. ⚠ Then say which version names a gap rather than grading a person.'));
out.push(PHRASE_CARD(['the case against?', 'what does it cost?', 'the sentence you would not say', 'would you say it to them?', 'name the gap, not the person']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** recommendations you could make at your work.'));
out.push(table(['The recommendation', 'The case against, costed', 'The unsayable sentence', 'The version you would say to them'], [['', '', '', ''], ['', '', '', '']], [2, 2.4, 2.4, 2.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I recommend _______. The case against is _______, which costs _______. What I would not say in a meeting is _______. And the version I would say to them is _______._'));
out.push(p('**Listener task:** count how many unsayable sentences survived the test. ⚠ Then ask how many came out of it better — more precise, naming a gap — and expect most of them to have done.'));
out.push(p('**Board clinic:** your teacher writes four recommendations on the board — find the one with no case against it, and the one that grades a person instead of naming a gap. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the recommendation, and answer the questions.'));
out.push(box(null, [
  '**RECOMMENDATION: THE OFFICE MANAGER\'S POST FROM 1 MAY. K. Ayoub to N. Sayegh, 18 April. One page, and not for circulation.**',
  '⚠ **1  My recommendation.** **N. Mansour, substantively, with the start date deferred to 1 July.**',
  '⚠ **2  The case against her, which is real.** **She is carrying the Beirut arbitration to an award and the hearing is in June.** **If she takes this post on 1 May the arbitration goes to somebody who has read the bundle twice rather than fifty times**, ⚠ **and my estimate is that it probably costs us issue two, which is worth about 4 m.** **That is the price of the obvious answer and it is not small.**',
  '⚠ **3  What I would say behind a closed door, and would say to the person if asked.** **B. Nassif will apply.** ⚠ **The post this year needs somebody who has run a dispute and who has written for a tribunal, and he has not done either** — **which is a gap and not a grade, and it is a gap he could close in two years if the firm gave him something to close it on.** **I am not saying he would do the job badly. I am saying that 2027 is the wrong year to find out.**',
  '⚠ **4  What I am NOT saying, and I want this on the page because somebody will assume it.** **I am not saying Bassel is unsuitable for the post in general. I am not saying he lacks judgement** — **his December paper on Homs was wrong about the threshold and right about the method, and I have said so to him.** ⚠ **And I am not recommending against him because he and I disagreed in December.** **If that is what anybody thinks this page is, then the page has failed and I would rather be asked.**',
  '⚠ **5  What follows from the deferral, because a deferral that is not dated becomes permanent by drift.** **Somebody has to act in the post from 1 May to 30 June.** ⚠ **It should be B. Nassif, he should be told in writing that it is an acting appointment, and he should be told that the substantive appointment has been decided rather than left open** — **because the cruellest version of this is the one where he acts for two months and infers.**',
  '⚠ **6  And a date.** **If the substantive appointment is not confirmed by 15 July, this recommendation lapses and should be made again by whoever holds the post then.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the case against the writer\'s own candidate, and what figure does he put on it?'));
out.push(item('2', 'What three things does paragraph 4 say the writer is NOT saying?'));
out.push(item('3', 'What does paragraph 5 say should happen, and what does it call the cruellest version?'));
out.push(box('Writer\'s box', [
  '**The written recommendation — five parts:** ⚠ **the recommendation in one line, with dates** → ⚠ **the case against your own candidate, costed** → ⚠ **the closed-door sentence, rewritten as a gap** → ⚠ **what you are NOT saying** → ⚠ **and what follows, with a date on every deferral.**',
  '⚠ **Cost the case against your own candidate in the thing it costs.** ⚠ *Probably issue two, which is worth about 4 m.* **A case against with no figure reads as a formality; one with a figure makes the reader decide rather than agree.**',
  '⚠ **Rewrite the closed-door sentence as a gap with a closing route.** ⚠ *He has not run a dispute or written for a tribunal — a gap he could close in two years if the firm gave him something to close it on.* **And add the disclaimer the gap needs:** *I am not saying he would do the job badly; I am saying 2027 is the wrong year to find out.*',
  '⚠ **Write the *what I am NOT saying* paragraph, and include the motive somebody will attribute to you.** ⚠ *I am not recommending against him because he and I disagreed in December.* **It is the paragraph that costs the most to write and it is the one that makes the rest readable** — **and *I would rather be asked* is the right way to end it.**',
  '⚠ **Put a date on every deferral.** ⚠ *A deferral that is not dated becomes permanent by drift.* **And say what happens if the date passes:** *this recommendation lapses and should be made again.*',
  '⚠ **And name the cruelty you are trying to avoid.** ⚠ *The cruellest version is the one where he acts for two months and infers.* **Somebody acting in a post without being told what has been decided will work it out, wrongly, and resent it correctly** — **so being told is the kindness, not being spared.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a recommendation for a post or a piece of work (**80 words or more**). Use the frame.'));
out.push(p('**RECOMMENDATION: ______________. ______________ to ______________, ______________.**   ⚠ **1  My recommendation. ______________.**   ⚠ **2  The case against, which is real. ______________, which costs about ______________.**   ⚠ **3  What I would say behind a closed door, and would say to the person if asked. ______________ needs somebody who ______________, and they have not ______________** — **which is a gap and not a grade.** ⚠ **I am not saying ______________. I am saying ______________.**   ⚠ **4  What I am NOT saying. I am not saying ______________. And I am not recommending this because ______________. If that is what anybody thinks this page is, the page has failed and I would rather be asked.**   ⚠ **5  What follows. ______________ should ______________, and should be told in writing that ______________.**   ⚠ **6  And a date. If ______________ is not confirmed by ______________, this recommendation lapses.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A case against the writer\'s own candidate, costed', ''],
  ['The closed-door sentence, as a gap with a route', ''],
  ['A *what I am NOT saying* paragraph, with the motive in it', ''],
  ['A date on every deferral, and what happens if it passes', ''],
  ['Nothing anywhere that grades a person', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their closed-door sentence in both versions. ⚠ The class says of each whether the second names a gap and whether it could be said to the person.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a decision at your work where the right answer costs something (**200 to 240 words**). Say what you would recommend, what it costs, what you would not say in a meeting, and whether you would say it to the person concerned.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _gap, or grade?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the unsayable sentence survive the test? ⚠ **Usually all three, in a better form** — **and that is the finding: the test is not a muzzle, it is a drafting instrument, and the sentence it produces is the one the writer actually meant.**'));
out.push(box('Homework', ['Write your final text. Then take one person you would recommend and write the case against them, with a figure or a consequence (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 20.7 =======================
out.push(pb());
out.push(h2('20.7  Review & Mediate: the right appointment at the wrong moment'));
out.push(p('⚠ **This is the eighth unit of this book, and the one in which the post Unit 13 described changes hands.** ⚠ **Everything Units 13 to 19 produced** — **the clause register, the acceptance standard, the Homs file, the arbitration bundle** — **is now somebody else\'s, and the question is what travels with it.**'));
out.push(p('**Function:** splitting a decision in time   ·   **Grammar:** _X acts until Y; the substantive decision is taken now and starts then_   ·   **Pronunciation:** a deferral that does not sound like a doubt'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 20 quiz', 6));
out.push(table(['Say it in one sentence', '✓'], [
  ['**20.1**  What question finds the judgement inside a task?', ''],
  ['**20.2**  What four things does a first week actually contain?', ''],
  ['**20.3**  What are the three parts of a dependency, and the last four words?', ''],
  ['**20.4**  What makes the fourth part of a not-defend-again entry useful?', ''],
  ['**20.5**  Which part of an introduction matters on the day, and why?', ''],
  ['**20.6**  What is the test on a sentence you would not say in a meeting?', ''],
], [6, 1]));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say the firm is about to do?   **A** appoint Bassel   **B** take the right decision in a way that makes it look like indecision   **C** nothing'));
out.push(p('**b**  Listen again. **1** What does Nour say she will not do, and why? **2** What are the four things the final minute has to contain?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.13  "Decided, and starting later"', [
  ['Mr Sayegh', 'So: Nour from 1 July, Bassel acting for two months. Everybody agrees.'],
  ['Nadia', '⚠ **Everybody agrees and we are about to do it badly.** ⚠ **As it stands, Bassel is handed a post for two months and told nothing, and he will spend both months believing he is on trial** — **which is a different job from the one we are asking him to do.**'],
  ['Bassel', 'I would rather be told.'],
  ['Nour', '⚠ **Then I will tell you, now, in front of everybody, because I am the reason for the two months.** ⚠ **The substantive post is mine from 1 July. It has been decided, today, not deferred. You are acting, and you are not auditioning.**'],
  ['Bassel', 'And if I do it well?'],
  ['Nour', '⚠ **Then you will have done it well and the decision will still be the same, and I am saying that now rather than in June.** ⚠ **If I left you to hope, you would do everything for the wrong reason for two months and you would be entitled to be angry in July.**'],
  ['Bassel', 'That is a hard thing to be told on a Thursday.'],
  ['Nour', '⚠ **It is, and the alternative is worse and you said so yourself thirty seconds ago.**'],
  ['Mr Sayegh', 'And what does the minute say?'],
  ['Nadia', '⚠ **Four things, and the fourth is the one that stops this becoming permanent by drift.** ⚠ **One: the substantive appointment, decided today, effective 1 July. Two: the acting appointment, 1 May to 30 June, with the same authority and the same limit. Three: the reason for the gap, which is the arbitration and not anybody\'s capability.**'],
  ['Mr Sayegh', 'And four?'],
  ['Nadia', '⚠ **That if the substantive appointment has not taken effect by 15 July, the acting appointment ends anyway and the matter comes back to this table.** ⚠ **Otherwise a two-month arrangement with nobody watching it becomes a two-year one, and the only person who could complain about that is the one who was told not to hope.**'],
  ['Bassel', '⚠ **I want one more thing in it.** ⚠ **What I am supposed to be doing in the two months, as a job, and not as a holding operation.** **Give me the Homs reopening and I will have run something by July.**'],
  ['Nour', '⚠ **That is the right ask and it is better than anything the three of us had written down.** **It is also the gap in 20.6, and you have just proposed how to close it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Splitting a decision in time, without turning it into an audition**',
  table(['', 'The move', 'Why'], [
    ['**1 decide, and say so**', '⚠ *the substantive post is decided today, effective 1 July* — **decided, not deferred**', '⚠ **a deferral sounds like a doubt, and a decision with a later start date does not**'],
    ['⚠ **2 say what the acting post is NOT**', '⚠ *you are acting, and you are not auditioning*', '⚠ **otherwise two months are worked for the wrong reason and the anger in July is earned**'],
    ['**3 give the reason for the gap**', '*the arbitration, and not anybody\'s capability*', '**an unexplained gap is read as a judgement about the person holding it**'],
    ['⚠ **4 date the end of the arrangement**', '⚠ *if the substantive appointment has not taken effect by 15 July, the acting post ends anyway and the matter returns*', '⚠ **a two-month arrangement nobody is watching becomes a two-year one**'],
  ], [2, 3.6, 3.4]),
  '⚠ **Decided and starting later is a different sentence from deferred.** ⚠ **The first is a decision with a date; the second is an absence of one** — **and the person acting in the gap can hear the difference immediately.**',
  '⚠ **Say what the acting appointment is NOT, in those words.** ⚠ *You are not auditioning.* **It is the hardest sentence in the cycle and the kindest** — **because the alternative is letting somebody hope, which costs them two months of working for the wrong reason and a legitimate grievance afterwards.**',
  '⚠ **Give the reason for the gap and attach it to a thing rather than a person.** ⚠ *The arbitration, and not anybody\'s capability.* **A gap with no reason is filled in by whoever is standing in it, and they fill it in badly.**',
  '⚠ **Date the end of the arrangement, not just its start.** ⚠ **Every temporary thing nobody has dated has become permanent somewhere** — **and the person who is entitled to object to it is exactly the person who was told not to hope.**',
  '⚠ **And expect the person in the gap to improve the arrangement, if you have told them the truth.** ⚠ *Give me the Homs reopening and I will have run something by July.* **That ask only becomes available once he knows he is not auditioning** — **a man who thinks he is on trial asks for nothing and volunteers for everything.**',
  '**Useful phrases:**  decided today, effective later  ·  you are acting, not auditioning  ·  the reason is the arbitration, not your capability  ·  if it has not taken effect by  ·  as a job, not a holding operation',
  '**Pronunciation – a deferral that is not a doubt.** 🔊 **Track 20.14** Listen twice. ⚠ **The first says *it has been decided, today, not deferred* with the stress on *decided*.** ⚠ **The second stresses *today*.** **On *decided*, the listener hears that the matter is closed; on *today*, they hear that today is one of several days it might have been** — **and start waiting for the next one.** Say it four times, stressing *decided*.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is making a split appointment; B is the person acting in the gap. ⚠ **Use the five steps in order.**'));
out.push(table(['B asks', 'A answers'], [
  ['⚠ **Has it been decided, or is it open?**', '______________'],
  ['⚠ **So am I acting, or auditioning?**', '______________'],
  ['⚠ **Why is there a gap at all? Is it about me?**', '______________'],
  ['⚠ **When does this arrangement end, whatever happens?**', '______________'],
  ['⚠ **And what am I supposed to actually DO in it, as a job?**', '______________'],
], [4.4, 4.6]));
out.push(table(['Role card 1 — leave it open, it is kinder', 'Role card 2 — two months, nobody need date it'], [[
  '⚠ **A wants to leave the substantive appointment open so as not to disappoint anybody now.** ⚠ **B asks what they will be doing for two months, and what they will feel in July.** ⚠ **B\'s point: leaving it open does not spare the person, it postpones the same news and adds two months of work done for a reason that was never available** — **and the grievance in July is then entirely legitimate.**',
  '⚠ **A sees no need to date the end of a two-month arrangement that everybody understands.** ⚠ **B asks what happens if the award slips to September.** ⚠ **B\'s point: every permanent temporary arrangement anybody has ever seen began as a short one nobody dated** — **and the person with standing to object is the one who was told not to hope, which makes the drift both likely and unanswerable.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four things the minute must contain. ⚠ Then say what the person in the gap asked for, and why they could only ask once they had been told the truth.'));
out.push(PHRASE_CARD(['decided, or open?', 'acting or auditioning?', 'is the gap about me?', 'when does it end?', 'as a job, not a holding operation']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** temporary arrangements at your work, now or in the past.'));
out.push(table(['The arrangement', 'Was it decided or left open?', 'Was an end date set?', 'What it became'], [['', '', '', ''], ['', '', '', '']], [2.2, 2.4, 1.8, 2.4]));
out.push(stage('4R', 'Mediate and report', 9));
out.push(p('**The mediation.** The right appointment is Nour. The right April appointment is not. Bassel wants the post and will be asked to hold it without getting it.'));
out.push(table(['What each side is right about', 'What each side gives up', 'What the minute ends up saying'], [[
  '⚠ **Nadia:** **the decision everybody has agreed will be executed badly** — **two months of silence turns an acting appointment into an audition and earns the resentment that follows.**  ⚠ **Nour:** **she cannot leave the post for May and June without probably losing issue two, and she is the only person who can say so without it sounding like ambition.**  ⚠ **Bassel:** **he is entitled to know, and a holding operation is not a job.**',
  '⚠ **Nour:** **the post for two months, and the comfort of letting somebody else deliver the news** — **she says it herself, in front of everybody, because she is the reason for the gap.**  ⚠ **Bassel:** **the hope. He is told on a Thursday that doing it well will not change the outcome** — **which he asked for and which is still hard.**  ⚠ **Mr Sayegh:** **the tidiness of one appointment on one date.**',
  '⚠ **Minute of 24 April, four paragraphs:** *the substantive appointment of N. Mansour, decided today, effective 1 July · the acting appointment of B. Nassif, 1 May to 30 June, with the same authority and the same 500,000 limit · the reason for the gap, which is the arbitration and not any question of capability · and that if the substantive appointment has not taken effect by 15 July the acting appointment ends and the matter returns to the board.*  ⚠ **And a fifth, added by Bassel: that he carries the Homs reopening through to completion, as a job and not as cover.**',
]], [1, 1, 1.3]));
out.push(p('**Then report:** _Everybody is right about something. _______ is right that _______. _______ is right that _______. So the minute says _______, _______, _______ and _______ — and _______ gives up _______ while _______ gives up _______._'));
out.push(p('⚠ **And the sentence that cost the most to say, which is Nour\'s and not Nadia\'s:** *"If I left you to hope, you would do everything for the wrong reason for two months and you would be entitled to be angry in July."* ⚠ **It is the whole cycle, it was said to the person\'s face, and it is the reason the fifth paragraph exists** — **because a man who has been told the truth asks for the Homs reopening, and a man who thinks he is on trial asks for nothing.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 5)', 10));
out.push(p('⚠ **This unit is Part 5: error correction, twelve lines. It is the second time in the level.** ⚠ **In some lines there is one extra word which is GRAMMATICALLY WRONG. Some lines are correct.** **For a correct line write **CORRECT**. For an incorrect line write the extra word. Write in **CAPITAL LETTERS**.'));
out.push(box(null, [
  '**To: B. Nassif   From: N. Sayegh   25 April   The acting appointment**',
  '**1**  Thank you for your note of 14 April. I have set out below the   ______________',
  '**2**  position on the acting appointment, and I have been tried to be exact   ______________',
  '**3**  about what has been decided and what has not. The post of office   ______________',
  '**4**  manager will be held by you from 1 May until 30 of June, on   ______________',
  '**5**  an acting basis. This is an acting appointment and it is not a trial.   ______________',
  '**6**  The substantive appointment has been decided it and is recorded in   ______________',
  '**7**  the minute of 24 April, which you may read. I would rather you read   ______________',
  '**8**  it than infer anything from two months of acting in to the post.   ______________',
  '**9**  Your authority during May and June is the same as mine was,   ______________',
  '**10**  including write-offs up to 500,000. Above that you will come to me,   ______________',
  '**11**  as I did. Nothing about the acting period is provisional in except its   ______________',
  '**12**  length. If you want to discuss any of this, my door is open.   ______________',
]));
out.push(p('⚠ **Reminder:** the extra word must be **grammatically wrong**, not merely unnecessary. **A word you could delete without breaking the grammar is not the answer.**'));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 1 — an internal communication, 40 to 50 words, 10 marks.** **Three content points, all three present.** ⚠ **This is the fifth Part 1 of Book 2, after Units 13, 15, 17 and 19** — **and the first in which the reader is the person the news is about.**',
  '⚠ **For a message about an acting appointment, the three points are: what has been decided · what the acting post is not · and when the arrangement ends whatever happens.** ⚠ **Not reassurance** — **the reader can supply their own and will supply the wrong one.**',
  '⚠ **Lead on the decision, with both dates.** ⚠ *The substantive appointment was decided on 24 April and takes effect on 1 July.* **Two dates in fourteen words, and the reader now knows it is closed rather than pending.**',
  '⚠ **Then the hard sentence, and do not soften it.** ⚠ *You are acting from 1 May to 30 June. This is not a trial.* **Twelve words.** **A candidate who writes *we very much value your contribution* has used nine words to say nothing and lost the content point.**',
  '⚠ **And the end date, with its consequence.** ⚠ *If the substantive appointment has not taken effect by 15 July, the acting appointment ends and the matter returns to the board.* **It protects the reader, which is why it belongs in a message TO them rather than only in the minute.**',
  '⚠ **Part 5 tip, for the error correction above.** ⚠ **Four of the five extra words in that text are the same fault: a preposition or auxiliary inserted where the structure does not take one** — ***been* in a perfect active, *of* in a date, *to* after *in*, *in* before *except*.** ⚠ **Read each line for the structure and not for the sense**, **because every one of the twelve lines makes perfect sense.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** Write a message to a colleague who is about to act in a post (**40 to 50 words**). Include **what has been decided, with dates** · **what the acting post is not** · and **when the arrangement ends whatever happens**.'));
out.push(p('**To:** ______________   **From:** ______________   **Date:** ______________   **Subject:** ______________   ⚠ **The substantive appointment was decided on ______________ and takes effect on ______________.**   ⚠ **You are acting from ______________ to ______________. This is not ______________.**   ⚠ **If it has not taken effect by ______________, the acting appointment ends and ______________.**   **Words: ______**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.** Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The decision, with both dates', ''],
  ['What the acting post is NOT, said plainly', ''],
  ['An end date with a consequence', ''],
  ['No reassurance in place of a content point', ''],
  ['40 to 50 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a temporary arrangement at your work that outlasted its purpose (**200 to 240 words**). Say what it was for, whether it was dated, who was in it, what they were told, and what it became.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then take one current temporary arrangement at your work and write the four things its minute should have said (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 20 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  This is an acting appointment and it is not ___ trial.   a) the   b) a   c) one',
  '2  He should be told ___ writing.   a) in   b) on   c) at',
  '3  A deferral that is not dated becomes permanent ___ drift.   a) with   b) through   c) by',
  '4  She can sign what I sign, ___ 1 May.   a) since   b) from   c) out of',
  '5  Nobody ever ___ any of them.   a) chose   b) choose   c) chosen',
  '6  I would not defend any part ___ this.   a) for   b) in   c) of',
  '7  It would have saved six years, which I would ___ resented.   a) has   b) have   c) had',
  '8  The authority transfers ___ one conversation.   a) in   b) on   c) by',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 20.15** Listen to the conversation on 30 April. Complete the note.   What Mr Ayoub says the handover is actually made of: ______   How many of his forty items turned out to be judgements: ______   The page he says he should have written in 2015: ______   What he says about the overtime approvals: ______   What he asks Nour to do with the handover in 2029: ______   The one thing he says he got right by accident: ______'));
out.push(p('**C  Reading.** Read the dependencies page at 20.3 again. Say how many of the five a document could fix, what the last row discovered, and when the writer says the page should have been written.'));
out.push(p('**D  Writing.** Take one task of your own. Apply the careless test, write the judgement inside it, and name one case it applies to and one it does not (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 20.15  Audio script (read after the check)', [
  ['Nour', 'Last day. What is actually in that folder?'],
  ['Mr Ayoub', '⚠ **Not what I thought when I started.** ⚠ **Pages one and two are forty tasks and they are the part nobody will need after a fortnight.**'],
  ['Nour', 'And the rest?'],
  ['Mr Ayoub', '⚠ **Nine judgements out of the forty.** **I asked of each task what I would get wrong if I did it carelessly, and thirty-one produced nothing.** ⚠ **Nine produced something, and those nine are the handover.**'],
  ['Nour', 'Page six was the hardest to read.'],
  ['Mr Ayoub', '⚠ **Page six is the one I should have written in 2015.** ⚠ **Five things this firm has been carrying through one person, and in 2015 it would have been four pages and a reorganisation.** **In April it is three weeks and a hope.**'],
  ['Nour', 'And the overtime?'],
  ['Mr Ayoub', '⚠ **Sixteen years of approving everything, and I found out by writing a page about judgements.** ⚠ **It is the only thing in the folder that is not a handover at all** — **there is nothing to hand over, because there was never anything there.** **I have asked Mr Sayegh to give it to somebody.**'],
  ['Nour', 'Is there anything you want me to do with all this?'],
  ['Mr Ayoub', '⚠ **Read page four again in 2029, before the lease.** **And when you hand over, write page six first and pages one and two last** — ⚠ **I did it the other way round and lost a week.**'],
  ['Nour', 'And is there anything you got right by accident?'],
  ['Mr Ayoub', '(pause) ⚠ **I introduced Abu Yasser to Mr Attar in 2019 by telling him what he was allowed to do without me.** ⚠ **I had no idea that was the right way to do it. It was the only one I could think of at the time, and it is the only one of my four introductions in nine years that worked.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**20.1** find the judgement inside a task, and name the cases it applies to and the cases it does not',
  '**20.2** write a successor\'s first week: the calendar, the tests, the holes, and what they will change',
  '**20.3** write a single-person dependency in three parts, with a figure and a named hole',
  '**20.4** hand on a judgement you would not defend again, with a rule somebody could impose',
  '**20.5** introduce a successor so that an outsider can say yes to them without telephoning anybody',
  '**20.6** recommend a person in writing, with the case against and the sentence you would not say aloud',
  '**20.7** split a decision in time without turning the gap into an audition',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Back at B2 — three things you already have', [
  '⚠ **' + BACK_AT_B2 + '** — **all three are from earlier in this course, and all three turn out to have been the wrong size.** ⚠ **A handover at B1 was a shift note: what happened, what is outstanding, who to telephone.** **Here it is sixteen years, and the shift-note form holds almost none of it.**',
  '⚠ **And *delegated authority* was a phrase about limits.** ⚠ **In 20.5 it is the only part of an introduction that does any work** — **because an outsider refusing a new office manager is not refusing the person, they are refusing to find out whether it counts.** ⚠ **To confirm in post, at B1, was a formality.** **Here it is paragraph one of a minute, and the reason it is paragraph one is that an unconfirmed appointment becomes permanent by drift.**',
], C.lteal));
out.push(sp());
out.push(p('**Lexis in this unit (32):** ' + LEXIS, { size: 18, color: '595959' }));
out.push(p('**Collocations (8):** ' + COLLOC, { size: 18, color: '595959' }));
out.push(p('**Back at B2 (3):** ' + BACK_AT_B2, { size: 18, color: '595959' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 2 · Syria Edition · Unit 20 · Student\'s Book');
module.exports = out;
