// Proactive Business English B1 · Syria Edition · Book 1 · Unit 4 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'track record · curriculum vitae · character reference · testimonial · secondment · placement · apprenticeship · time served · continuous service · length of service · career break · unbroken record · competence · proficiency · aptitude · transferable skill · strength · shortcoming · to date · year to date · running total · capability statement · remit held · breadth of role · self-taught · on the job · formally trained · certificate of service · terms of leaving · leaving date';
const BACK_AT_B1 = 'training · service · induction';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 4  Experience and Evidence'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**4.1**  state your record — the present perfect for what you have done',
  '**4.2**  describe the work you are in the middle of',
  '**4.3**  measure a relationship: *for* and *since*',
  '**4.4**  chase something politely with the present perfect',
  '**4.5**  say where you are: *so far* and *not yet*',
  '**4.6**  answer *have you ever handled…?* honestly and well',
  '**4.7**  Review & Mediate: what does this capability statement actually claim?',
], C.lblue, C.navy));
out.push(sp());
out.push(box('The tense of the claim', [
  'The present perfect is the tense you use about yourself when somebody is deciding whether to trust you — on a CV, in an interview, in a capability statement, in the third email about an invoice. *I have done it* says: this is my record, and it is still the case.',
  '⚠ **Which is why it is the easiest tense in English to exaggerate in.** *I have handled customs clearance* can mean eleven years of it or one afternoon under supervision, and both are true sentences. This unit spends as much time on **how to be precise** — numbers, dates, *twice*, *once*, *for two years* — as on the form, because a claim with a number in it can be believed and a bare claim cannot.',
  '**And the same tense chases an invoice.** *We have not received it* is the politest possible way of saying something is late, because it reports a state of affairs rather than an accusation, and 4.4 is about exactly that.',
], C.lyellow, C.orange));

// ======================= CYCLE 4.1 =======================
out.push(pb());
out.push(h2('4.1  What I have done'));
out.push(p('**Function:** stating a record   ·   **Grammar:** present perfect simple, with numbers   ·   **Pronunciation:** the contracted _I\'ve_ and the full _I have_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three things you have done at work that you would put on a CV. Now put a number or a date on each one.'));
out.push(p('**b**  Which tells a stranger more? _I have dealt with complaints. · I have dealt with about forty complaints in two years, eleven of them in writing._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub do to each of Nour\'s claims?   **A** doubts them   **B** asks for a number   **C** shortens them'));
out.push(p('**b**  Listen again. **1** Why does he say *I have run the office* is a worse claim than the longer one? **2** What does he say about the claim she took out?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.1  "How many, and over how long?"', [
  ['Nour', 'The form for the chamber of commerce. It asks what I have done.'],
  ['Mr Ayoub', 'Read me the first line.'],
  ['Nour', '"I have run the office administration."'],
  ['Mr Ayoub', 'How many sites, how long, and how many people?'],
  ['Nour', 'Two sites, since June, and nineteen people.'],
  ['Mr Ayoub', 'Then write that. *I have run the administration for two sites and nineteen staff since June.* Thirteen words, and every one of them can be checked.'],
  ['Nour', 'The next line says "I have dealt with suppliers."'],
  ['Mr Ayoub', 'Everybody has dealt with suppliers. How many, and what did you do with them?'],
  ['Nour', 'Four regular ones. I have opened two accounts and renegotiated one price.'],
  ['Mr Ayoub', 'Now that is a record. The word *renegotiated* is doing work and nobody can say it of themselves without having done it.'],
  ['Nour', 'And I have taken out the line about the Homs store.'],
  ['Mr Ayoub', 'Why?'],
  ['Nour', 'Because I did the paperwork for closing it and that is not an achievement.'],
  ['Mr Ayoub', 'Put it back. *I have closed a branch* is a rarer line than *I have opened one* and a great deal harder, and the person reading that form will know it. ⚠ What you must not write is that you decided to close it, because you did not, I did.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The present perfect, with evidence attached**',
  table(['Shape', 'Weak', 'With evidence'], [
    ['**I have** + third form', 'I have run the office.', 'I **have run** the administration for **two sites and nineteen staff since June**.'],
    ['+ a number', 'I have dealt with suppliers.', 'I **have opened two accounts** and **renegotiated one price**.'],
    ['+ **twice** / **once**', 'I have covered the counter.', 'I **have covered** the second site **every Saturday since June**.'],
    ['a strong verb', 'I have helped with…', 'I **have renegotiated** · **closed** · **opened** · **introduced**'],
    ['⚠ what is not yours', '—', 'I **did the paperwork for** closing a branch — I did not decide it.'],
  ], [1.5, 1.6, 2.4]),
  '⚠ **A claim with no number in it cannot be believed or disbelieved**, so it does nothing. *I have dealt with suppliers* is true of everybody who has ever answered a telephone. **Two sites, nineteen staff, since June, two accounts, one price** — those are the words that work.',
  '⚠ **Choose the verb that nobody can say without having done it.** *Renegotiated · commissioned · closed · introduced · trained* are all claims that can be tested. *Helped with · was involved in · supported* are not claims at all.',
  '⚠ **And the harder half: do not claim the decision if you carried it out.** *I closed a branch* when somebody else decided it is the one kind of exaggeration that will be found out, because the person who decided it is usually in the room.',
  '⚠ The thing you are embarrassed about may be your best line. Closing a branch is rarer and harder than opening one, and a reader who has done either will know that.',
  '**Practise:** Say each with a number or a date and a strong verb. 1 what you run 2 who you deal with 3 what you have changed 4 what you have covered 5 something you did and did not decide',
  '**Useful phrases:**  I have run … since …  ·  I have opened two …  ·  I have renegotiated …  ·  every Saturday since June  ·  I did the paperwork for it; I did not decide it.',
  '**Pronunciation – _I\'ve_ and _I have_.** 🔊 **Track 4.2** Listen: _I\'ve run the administration_ in speech, and _I **have** run the administration_ when it is a claim being made against doubt. The full form with stress on *have* is how English insists. Repeat four of each.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a bare claim; B asks for the number and the verb. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The form asks what I have done. "__________."'],
  ['B', 'How many, how long, and __________?'],
  ['A', '__________, since __________, and __________.'],
  ['B', 'Then write that. Every one of those words can be checked.'],
  ['A', 'The next line says "__________."'],
  ['B', 'Everybody has done that. How many, and what did you do with them?'],
  ['A', '__________. I have __________ and __________.'],
  ['B', 'Now that is a record. ⚠ And what have you taken out?'],
]));
out.push(table(['Role card 1 — a driver\'s record', 'Role card 2 — a counter record'], [[
  'Fadi has "I have driven for the company" on a form. The facts: nine years, two vehicles, about 180 deliveries a month, Ghouta and Homs, no claim in nine years. The line he has left out: he trained two drivers.',
  'Hala has "I have worked in customer service". The facts: two years, about forty complaints, eleven answered in writing, two sites, and she has opened the second store alone on sixty Saturdays. The line she is embarrassed about: she lost a customer in her first month.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the numbers you hear. Then say which single number did most work.'));
out.push(PHRASE_CARD(['I have run … since …', 'I have opened two …', 'I have renegotiated …', 'every Saturday since June', 'no claim in nine years', 'I did not decide it.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write **five** lines of your own record. Each one: a strong verb, a number, and a date or a period. Then mark the one you were going to leave out.'));
out.push(table(['The claim, with its number', 'How it could be checked'], [['', ''], ['', ''], ['', ''], ['', ''], ['', '']], [2.4, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I have _______ for _______ since _______. It could be checked by _______. The line I was going to leave out is _______._'));
out.push(p('**Listener task:** write down the strongest verb you hear. Then count how many claims in the room have no number in them at all.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I have run the office since two years_ and _I am working here since 2017_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the capability statement, and answer the questions.'));
out.push(box(null, [
  '**SHAM TRADING CO. — what we have actually done. Capability statement, October.**',
  '**Trading.** We have supplied packaging in Damascus **since 1998** and have traded through every year of that, including the years when we were down to four staff. We have **never** failed to open the Mezzeh counter on a working day.',
  '**Scale.** We have about four hundred trade customers. We have **added** 61 and **lost** 14 in the last two years; the fourteen are not a secret and we will say why about any of them if you ask.',
  '**Sites.** We have operated two sites since 8 June. Before that we had one for thirteen years and, for two of those years, a branch in Homs, which **we opened in 2019 and closed in 2021**.',
  '**What we have introduced.** A gate count against the order, with a name on it, since September 2024 — it has found three errors in the past year. A written price held fourteen days, since April 2025. Both of these cost us time and we have kept them.',
  '**What we have not done.** We have **never** exported. We have **not** worked with a letter of credit. We have no experience of a contract longer than one year, and the longest written contract we have ever signed ran to four pages.',
  '⚠ **Why the last paragraph is here.** Because you are going to find it out, and because a company that tells you what it has not done is telling you something about the rest of the page.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which claims in this statement could a stranger check, and how?'));
out.push(item('2', 'What does the company volunteer about the fourteen lost customers?'));
out.push(item('3', 'What is in the last paragraph, and what does the page say it is for?'));
out.push(box('Writer\'s box', [
  '**A capability statement — five or six headed parts:** trading, with a date → scale, with numbers **both ways** → sites → **what we have introduced**, with what it found → **what we have not done**.',
  '**Give the losses as well as the gains.** *Added 61 and lost 14.* A page of gains only is read as a page with the losses taken off it, and the reader then discounts the gains too.',
  '**Make one claim out of something you kept that cost you.** *Both of these cost us time and we have kept them.* It is the only kind of claim that cannot be made by a company that has not done it.',
  '⚠ **Write "what we have not done" and make it specific.** *We have never exported. We have not worked with a letter of credit.* Vague modesty is worthless; three named gaps make the other twenty lines believable, and they are the gaps the reader was going to discover in week three anyway.',
  '⚠ *Never* with the present perfect is a strong and useful word — *we have never failed to open the counter* — and it is a claim you should only write if it is exactly true.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the capability statement for your own workplace (**50 words or more**). Use the frame.'));
out.push(p('**______________ — what we have actually done.**   **Trading.** We have ______________ since ______________ and have ______________. We have **never** ______________.   **Scale.** We have about ______________. We have **added** ______________ and **lost** ______________.   **What we have introduced.** ______________ since ______________ — it has ______________. ______________. Both of these cost us ______________ and we have kept them.   **What we have not done.** We have **never** ______________. We have **not** ______________. We have no experience of ______________.   ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says give the losses as well as the gains. Your scale paragraph has one number and it goes upwards — what is the other number?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could a reader check three of these claims without asking the writer?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A number or a date on every claim', ''],
  ['Numbers that go both ways', ''],
  ['One thing kept that cost something', ''],
  ['Three named gaps in "what we have not done"', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what we have not done". The class says which statement they would believe most — it is always one of these.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write your own record for a job one step up from the one you have (**100 to 140 words**). Every claim with a number or a date. Include the line you were going to leave out.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the claim with the best number in it_   ✓ _present perfect, not present simple, for the record?_   ? _what did you leave out, and why?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many of the left-out lines were the best lines? It is often one of the three, and it is usually something that went badly and was dealt with.'));
out.push(box('Homework', ['Write your final text. Then put a number on every line of your own CV, and mark any line you cannot put a number on (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 4.2 =======================
out.push(pb());
out.push(h2('4.2  What I have been doing'));
out.push(p('**Function:** describing work in progress   ·   **Grammar:** present perfect continuous, against the simple   ·   **Pronunciation:** _I\'ve been_ as one sound'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name one thing you have finished this month and one thing you have been doing all month and have not finished.'));
out.push(p('**b**  What is the difference? _I have written the procedures. · I have been writing the procedures._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which tense does Nadia tell Nour to use for the stock system?   **A** the simple, because it is finished   **B** the continuous, because it is not   **C** either'));
out.push(p('**b**  Listen again. **1** What does the continuous tell the reader that the simple does not? **2** Why does Nadia say the continuous is riskier?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.3  Finished, and not finished', [
  ['Nour', 'For the report: "I have moved the stock records onto the system."'],
  ['Nadia', 'Have you? All of them?'],
  ['Nour', 'Three store rooms of four.'],
  ['Nadia', 'Then you have not moved them; you **have been moving** them. There is a world between those two sentences and the world is the fourth store room.'],
  ['Nour', 'It sounds less impressive.'],
  ['Nadia', 'It sounds **accurate**, and it tells Mr Ayoub something the other sentence does not — that there is work in progress and it has a shape. *I have been moving the stock records onto the system; three store rooms of four are done and the fourth is the wrap room, which is the biggest.* He now knows where you are and what is left.'],
  ['Nour', 'And the procedures? I have written four one-page procedures and I am going to write more.'],
  ['Nadia', 'Those are finished things, so the simple: *I have written four one-page procedures.* The continuous is for the thing that is still running, not for the thing you intend to do more of.'],
  ['Nour', 'So *I have been writing procedures* would be wrong?'],
  ['Nadia', 'Not wrong, and riskier. It makes the whole of it sound unfinished, including the four that are done and on the wall. ⚠ Use the continuous where the **unfinishedness is the information**. Where it is not, it only loses you four finished procedures.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The two present perfects**',
  table(['', 'Use it for', 'Example'], [
    ['**have** + third form', 'a **finished** thing, counted', 'I **have written** four procedures.'],
    ['**have been** + -ing', 'work **in progress**, with its shape', 'I **have been moving** the records; three rooms of four are done.'],
    ['**have been** + -ing + **since**', 'how long it has been running', 'I **have been covering** both sites **since June**.'],
    ['⚠ the trap', 'the continuous on finished work', '~~I have been writing four procedures~~ loses the four'],
    ['the shape', 'say where you are', 'three of four · about halfway · the biggest one is left'],
  ], [1.4, 1.7, 2.4]),
  '⚠ **Use the continuous where the unfinishedness is the information.** *I have been moving the records; three rooms of four* tells a manager where you are and what is left. On finished work it does the opposite — it makes the done part sound provisional.',
  '⚠ **Always give the shape with the continuous.** *Three store rooms of four, and the fourth is the biggest* is the sentence; the tense alone says only *not finished*, which is what every late piece of work says.',
  '⚠ **_Have been doing_ is not an excuse.** It is a report. If the thing is late as well as unfinished, that is a separate sentence and Unit 7 will give you the grammar for it.',
  '⚠ Both tenses take **since** + a point and **for** + a length, which is 4.3.',
  '**Practise:** Say each twice, once in each tense, and say which is true. 1 the procedures 2 the stock records 3 covering two sites 4 a price negotiation 5 training somebody',
  '**Useful phrases:**  I have written four…  ·  I have been moving…  ·  three of four are done  ·  the biggest one is left  ·  I have been covering both sites since June.',
  '**Pronunciation – _I\'ve been_.** 🔊 **Track 4.4** Listen: _I\'ve been moving them_ — *I\'ve been* is one short sound and the stress is on *moving*. Said as three clear words it sounds like a complaint. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A overclaims with the simple; B corrects to the continuous and asks for the shape. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'For the report: "I have __________."'],
  ['B', 'Have you? All of them?'],
  ['A', '__________ of __________.'],
  ['B', 'Then you have not __________; you **have been** __________. And what is left?'],
  ['A', '__________, which is __________.'],
  ['B', 'Then say that. He now knows where you are and what is left.'],
  ['A', 'It sounds less impressive.'],
  ['B', 'It sounds accurate, and it tells him something the other sentence does not.'],
]));
out.push(table(['Role card 1 — the price review', 'Role card 2 — training somebody'], [[
  'A has "I have reviewed the prices". In fact: twenty of the twenty lines at the second site, none of the four hundred at Mezzeh. What is left is the big half.',
  'A has "I have trained Hala on the stock screen". In fact: two sessions, she can enter but not correct, and the quarter-end has not been tried. What is left is the only part that matters.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the correction for the class – **without the book**.'));
out.push(p('**Listener task:** write the shape — how much is done and what is left. Then say whether the left part is the easy half or the hard half.'));
out.push(PHRASE_CARD(['I have written four…', 'I have been moving…', 'three of four are done', 'the biggest one is left', 'since June', 'where you are and what is left']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** pieces of work. For each, choose the tense, and give the shape: how much, what is left, and whether what is left is the hard part.'));
out.push(table(['The work', 'Tense, and why', 'The shape', 'Is the rest the hard part?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.1, 1.3, 1.5, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I have been _______ since _______. _______ of _______ is done. What is left is _______, which is the easy / hard part because _______._'));
out.push(p('**Listener task:** write down anybody who used the simple for something unfinished. That is the commonest fault in a progress report and it is always discovered.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I am moving them since June_ and _I have been written four procedures_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the progress note, and answer the questions.'));
out.push(box(null, [
  '**ADMINISTRATION — where I am, 31 October**',
  '**Finished, and countable.** I **have written** four one-page procedures: credit notes, covering Baghdad Street, the gate count, and guarantees. All four are on the office wall and all four have been corrected by somebody who had never done the job.',
  '**In progress, with its shape.** I **have been moving** the stock records onto the system since August. Three store rooms of four are entered. ⚠ The fourth is the wrap room, which holds more lines than the other three together, so the work is about half done and not three-quarters.',
  '**In progress, and stuck.** I **have been trying** to get the Homs figures from 2019–21 out of the old cash books since September. I have found six months of twenty-four. I do not think the rest exist and I would like to stop looking.',
  '**Not started.** The quarterly stock count procedure. Nothing is written and only I have ever done one, which makes it the most important page not yet on the wall.',
  '**What I have been doing that is not on any list.** Covering the Baghdad Street counter every Saturday since June. It is about four hours a week and it is the reason the fourth store room is not entered.',
  '⚠ **One ask.** Either somebody else covers two Saturdays a month, or the wrap room is entered in January rather than November. Both are acceptable to me; drifting is not.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does the note say the work is half done rather than three-quarters?'));
out.push(item('2', 'What does the writer ask permission to stop doing?'));
out.push(item('3', 'What is the connection between the last two paragraphs?'));
out.push(box('Writer\'s box', [
  '**A progress note — five headings that between them hold everything:** **finished and countable** → **in progress, with its shape** → **in progress and stuck** → **not started** → **what I have been doing that is on no list**.',
  '**Correct the arithmetic of your own progress.** *Three of four rooms, but the fourth holds more than the other three together, so it is half done.* A reader who later finds that out has been misled by a true sentence.',
  '**Ask permission to stop.** *I do not think the rest exist and I would like to stop looking.* Work that is stuck stays on a list for years because nobody will say that; the sentence costs nothing and frees a week.',
  '⚠ **Put in what you have been doing that is on no list**, and connect it to what is late. *Four hours a week, and it is the reason the fourth store room is not entered.* That is not a complaint; it is the arithmetic the reader cannot otherwise do.',
  '⚠ **End with a choice, not a grievance.** *Either somebody covers two Saturdays or the wrap room is January. Both are acceptable; drifting is not.*',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own progress note under the five headings (**50 words or more**). Use the frame.'));
out.push(p('**______________ — where I am, ______________**   **Finished, and countable.** I **have** ______________ ______________. ______________.   **In progress, with its shape.** I **have been** ______________ since ______________. ______________ of ______________ is done. ⚠ ______________, so the work is about ______________ and not ______________.   **In progress, and stuck.** I **have been trying** to ______________ since ______________. I have found ______________. I would like to ______________.   **Not started.** ______________.   **What I have been doing that is not on any list.** ______________. It is about ______________ a week and it is the reason ______________.   ⚠ **One ask.** Either ______________ or ______________. Both are acceptable to me; drifting is not.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says correct the arithmetic of your own progress. You have three of five done — are the two that are left the same size as the three?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **does the reader know what to do, and what will slip if they do nothing?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Finished work in the simple, counted', ''],
  ['Work in progress with its real shape, not its arithmetic', ''],
  ['Something stuck, with permission asked to stop', ''],
  ['The unlisted work, connected to what is late, and one choice', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "stuck" paragraph. The class says which one they would give permission to stop, and why.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a piece of work you have been doing for a long time (**100 to 140 words**). Say how long, how much is done, what is left, why it is slow, and what would finish it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the real shape of it_   ✓ _simple for finished, continuous for in progress?_   ? _what would actually finish it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many is the thing that would finish it **somebody else\'s decision**? That is usually the answer, and it is usually never been asked for.'));
out.push(box('Homework', ['Write your final text. Then write your own five-heading progress note and give it to whoever decides what you do next (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 4.3 =======================
out.push(pb());
out.push(h2('4.3  For nine years, since 2017'));
out.push(p('**Function:** measuring a relationship   ·   **Grammar:** *for* and *since*; *it is nine years since…*   ·   **Pronunciation:** saying a span so it is heard as evidence'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How long has your workplace dealt with its oldest supplier? Say it two ways — with *for* and with *since*.'));
out.push(p('**b**  Which are right? _We have bought from her for eleven years. · We have bought from her since eleven years. · We buy from her since 2014. · It is eleven years since we changed supplier._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Bassel want the figure in the letter?   **A** to be friendly   **B** because it is the strongest thing they have   **C** to fill the page'));
out.push(p('**b**  Listen again. **1** What two spans does he put in? **2** What does Nour add that makes the span mean something?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.5  "Eleven years is the argument"', [
  ['Bassel', 'The letter to Ms Shamsi about the new price. What do I lead with?'],
  ['Nour', 'What is the strongest thing we have?'],
  ['Bassel', 'That we are right about the market?'],
  ['Nour', 'Everybody says that. What is the strongest **fact**?'],
  ['Bassel', '…We have bought from her for eleven years.'],
  ['Nour', 'Eleven years, since 2014, and never once late with a payment. That is the letter.'],
  ['Bassel', 'Is it not a little obvious?'],
  ['Nour', 'It is obvious to us and it is not written down anywhere she can see. She has four hundred customers; she does not know which of them have been with her for eleven years unless somebody tells her.'],
  ['Bassel', 'And the payments?'],
  ['Nour', 'That is the part that makes the eleven years mean something. A span on its own only says we have not left. *Eleven years and never a late payment* says what kind of eleven years they were. ⚠ And it is checkable — she has the ledger.'],
  ['Bassel', 'She might check it.'],
  ['Nour', 'I hope she does. We have been paying her on time for eleven years and the only risk in that sentence is that it is not true, and it is.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Spans, and what makes them mean something**',
  table(['Shape', 'Example'], [
    ['**for** + a length', 'We have bought from her **for eleven years**.'],
    ['**since** + a point', 'We have bought from her **since 2014**.'],
    ['both, for weight', '**for eleven years, since 2014**'],
    ['**It is … since** + past simple', '**It is eleven years since** we changed supplier.'],
    ['⚠ the qualifier that pays', '…and **never once** late with a payment'],
  ], [1.9, 2.5]),
  '⚠ **_For_ a length, _since_ a point, and both take the present perfect.** ~~since eleven years~~ and ~~we buy from her since 2014~~ are the two errors, and the second is the commoner because the present simple is right in Arabic and in French.',
  '⚠ **A span on its own only says you have not left.** *Eleven years* is a fact about time; *eleven years and never once late* is a fact about you. Always attach the qualifier, and make it one that could be checked against the other side\'s own records.',
  '⚠ **The other side does not know your span.** A supplier with four hundred customers cannot know which of them is eleven years old unless somebody writes it down. It is the commonest piece of unused evidence in business.',
  '⚠ _It is eleven years since we changed supplier_ takes the **past simple** after *since*, because that is a point. Learners mix this with the present perfect and the sentence collapses.',
  '**Practise:** Say each with both forms and a qualifier that could be checked. 1 a supplier 2 a customer 3 a member of staff 4 a bank 5 a practice you have kept',
  '**Useful phrases:**  for eleven years, since 2014  ·  never once late  ·  It is eleven years since…  ·  she has the ledger  ·  what kind of eleven years they were',
  '**Pronunciation – a span heard as evidence.** 🔊 **Track 4.6** Listen: _for **eleven** years // and **never once** late._ The number is stressed and there is a pause before the qualifier, which lands separately. Said in one run it sounds like a sales line. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is writing a letter and reaching for an opinion; B finds the span and the qualifier. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The letter to __________ about __________. What do I lead with?'],
  ['B', 'What is the strongest thing we have?'],
  ['A', 'That we are right about __________?'],
  ['B', 'Everybody says that. What is the strongest **fact**?'],
  ['A', '…We have __________ for __________.'],
  ['B', '__________ years, since __________, and __________. That is the letter.'],
  ['A', 'Is it not obvious?'],
  ['B', 'It is obvious to us and it is not written down anywhere they can see.'],
]));
out.push(table(['Role card 1 — asking a bank for a limit', 'Role card 2 — keeping a customer'], [[
  'The strongest fact: the account has been with that branch since 1998 and has never been overdrawn. A wants to lead with the second store and the growth figures.',
  'A customer is being courted by a competitor. The strongest fact: nineteen years, and we have delivered on the agreed day 51 weeks out of the last 52. A wants to lead with a discount.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the span and the qualifier. Then say whether the other side could check it.'));
out.push(PHRASE_CARD(['for eleven years, since 2014', 'never once late', 'It is eleven years since…', 'they have the ledger', 'what kind of years they were', 'nobody has written it down']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** relationships at your work. For each: the span both ways, a qualifier that could be checked, and whether the other side knows the span.'));
out.push(table(['Who', 'For… / since…', 'The qualifier', 'Do they know?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.3, 1.6, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We have _______ for _______ years, since _______, and _______. They do / do not know, because _______._'));
out.push(p('**Listener task:** write down every relationship where the other side does not know the span. Each one is a letter nobody has written.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _since eleven years_ and _it is eleven years since we have changed_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter, and answer the questions.'));
out.push(box(null, [
  '**Subject:** The October price — and eleven years of ledger',
  'Dear Ms Shamsi,',
  'We have bought boxes from you **for eleven years, since March 2014**, and in that time we have **never once** been late with a payment. Your own ledger will show it, and I would rather you checked it than took my word.',
  'I am writing about the new price, and I am going to make the weakest possible version of our case, because the strong version is not true.',
  '**What is true.** The new price is **fourteen per cent** up on the last one. We have had one increase from you in each of the last two years and both were smaller.',
  '**What is also true.** Your costs have risen and we know it, because every other box supplier in Damascus has moved in the same quarter. We are **not** saying the increase is unjustified and we are not going to pretend to be shopping around when we are not.',
  '**What we are asking.** Not a lower price. **A longer one** — hold this price for six months rather than three, and we will give you the whole year\'s order in two deliveries instead of six, which saves you five journeys.',
  '**Why we think you might.** It is eleven years since we opened the account and in that time you have never had to chase us, carry us, or put us on stop. That has a value to you which a new customer at a slightly better margin does not have, and it is the only thing we are trading on.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the writer offer the reader at the end of the first paragraph?'));
out.push(item('2', 'What is the company **not** asking for, and what is it asking for instead?'));
out.push(item('3', 'What is the only thing the letter says it is trading on?'));
out.push(box('Writer\'s box', [
  '**A letter that trades on a span — the shape:** the span and the qualifier in the **first sentence**, with an invitation to check it → *the weakest version of our case, because the strong version is not true* → **what is true** → **what is also true** (their side of it) → what we are asking → **why we think you might**.',
  '**Invite them to check.** *Your own ledger will show it, and I would rather you checked it than took my word.* A claim offered for checking is worth four claims asserted.',
  '**Concede their case before they make it.** *Your costs have risen and we know it.* A letter that argues against an increase every other supplier has also made is a letter that will be answered with the market.',
  '⚠ **Ask for something other than money.** A longer price instead of a lower one, two deliveries instead of six. The span buys you a **term**, not a discount, and a discount is the one thing a supplier cannot give an old customer without giving it to everybody.',
  '⚠ End by naming exactly what you are trading on, and nothing else: *you have never had to chase us, carry us, or put us on stop.*',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a letter that trades on a span (**50 words or more**). Use the frame.'));
out.push(p('**Subject:** ______________ — and ______________ of ______________   Dear ______________,   We have ______________ **for ______________, since ______________**, and in that time we have **never once** ______________. Your own ______________ will show it, and I would rather you checked it.   I am going to make the weakest version of our case, because ______________.   **What is true.** ______________.   **What is also true.** ______________. We are **not** saying ______________.   **What we are asking.** Not ______________. ______________.   **Why we think you might.** It is ______________ since ______________, and in that time you have never had to ______________. That has a value to you which ______________ does not have.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says ask for something other than money. Yours asks for a lower price — what else would be worth as much to you, that costs them less?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could the reader say yes without losing anything they would miss?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The span and the qualifier in the first sentence', ''],
  ['An invitation to check it', ''],
  ['Their case conceded', ''],
  ['An ask that is not a discount', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their ask. The class says which they would grant if they were the supplier, and what it would cost them.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the longest relationship your workplace has (**100 to 140 words**). Say how long, what has never happened in that time, whether the other side knows, and what it has been worth.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the thing that has never happened_   ✓ _for and since correct?_   ? _has anybody ever told them?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many has anybody ever told the other side the span? Almost none — and every one of those is an unwritten letter with a figure in it.'));
out.push(box('Homework', ['Write your final text. Then write the first sentence of a letter to your oldest supplier or customer, with the span and the qualifier in it, and send it (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 4.4 =======================
out.push(pb());
out.push(h2('4.4  We have not received it yet'));
out.push(p('**Function:** chasing without accusing   ·   **Grammar:** present perfect negative; *yet · still · as at today*   ·   **Pronunciation:** the chase that does not sound like one'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How do you chase something at work for the third time? Say the sentence aloud and listen for the edge in it.'));
out.push(p('**b**  Put these in order, least to most accusing: _You have not sent it. · We have not received it. · It has not arrived. · You still have not sent it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour change in the third chaser?   **A** the date   **B** the subject of the sentence   **C** the tone'));
out.push(p('**b**  Listen again. **1** Why is *we have not received it* better than *you have not sent it*? **2** What does she put in the third chaser that the first two did not have?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.7  The third chaser', [
  ['Hala', 'Third time asking for the credit form. I have written "You still have not sent the credit form."'],
  ['Nour', 'True, and it will cost us a week. Change the subject of the sentence.'],
  ['Hala', 'From him to…?'],
  ['Nour', 'To us, or to the form. *We have not received the credit form* or *the credit form has not reached us.* Nobody is accused and the fact is identical.'],
  ['Hala', 'It is a bit weak for a third time.'],
  ['Nour', 'The strength does not come from blaming him. It comes from the **record**. Put the dates in: *we asked on the 12th and again on the 19th; as at today, the 26th, we have not received it.*'],
  ['Hala', 'That is quite hard, actually.'],
  ['Nour', 'It is hard and it is not rude, and that is the whole trick of a third chaser. Three dates on a page say everything *you still have not sent it* says, and they say it in a form he can forward to his own manager without being embarrassed.'],
  ['Hala', 'And if there is a fourth time?'],
  ['Nour', 'Then the fourth one goes to somebody else, and it says *I have written three times and I am now writing to you, which I would rather not have had to do.* ⚠ But never in the same breath as the chase itself — a chaser that threatens is answered by a defence and not by a form.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Chasing with the present perfect**',
  table(['Shape', 'Who is the subject', 'Effect'], [
    ['**We have not received** it.', 'us', 'the fact, nobody accused'],
    ['**It has not reached us.**', 'the thing', 'softer still'],
    ['~~You have not sent it.~~', 'them', '⚠ an accusation, and answered as one'],
    ['**We asked on the 12th and again on the 19th.**', 'the record', 'the actual strength of a third chaser'],
    ['**As at today**, the 26th, …', 'the date', 'makes the gap countable'],
  ], [1.9, 1.1, 1.8]),
  '⚠ **Change the subject of the sentence and the accusation disappears while the fact stays.** *We have not received it* is exactly as informative as *you have not sent it* and produces a form instead of a defence.',
  '⚠ **A third chaser gets its strength from dates, not from tone.** Three dates on a page say everything an angry sentence says, and they can be forwarded to the other person\'s own manager without embarrassing them — which is usually how a third chaser actually gets answered.',
  '⚠ **_Yet_ and _still_.** *We have not received it **yet*** is neutral. *You **still** have not sent it* is the sharpest word in the cycle; keep it for a fourth time and know what it costs.',
  '⚠ **Never chase and threaten in one message.** A chaser that mentions consequences is answered by a defence of the delay rather than by the thing you asked for. If it is time to escalate, that is a different letter to a different person.',
  '**Practise:** Chase each three times, with dates, and no accusation. 1 a credit form 2 a proof 3 a payment 4 a signature 5 a delivery date',
  '**Useful phrases:**  We have not received…  ·  It has not reached us.  ·  We asked on the 12th and again on the 19th.  ·  As at today…  ·  not yet',
  '**Pronunciation – the chase that does not sound like one.** 🔊 **Track 4.8** Listen: _we have not received it yet_ — flat, with no stress on *not* and none on *yet*. Stress either and it becomes a reproach. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has written an accusing chaser; B changes the subject and adds the record. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Third time asking for __________. I have written "You still have not __________."'],
  ['B', 'True, and it will cost us __________. Change the subject of the sentence.'],
  ['A', 'From them to…?'],
  ['B', 'To us, or to the thing. *We have not __________* or *__________ has not reached us.*'],
  ['A', 'It is a bit weak for a third time.'],
  ['B', 'The strength comes from the record. Put the dates in: we asked on __________ and again on __________; as at today, __________.'],
  ['A', 'And if there is a fourth time?'],
  ['B', 'Then it goes to somebody else — ⚠ but never in the same breath as the chase.'],
]));
out.push(table(['Role card 1 — a payment', 'Role card 2 — a signature'], [[
  'A customer owes 640,000 since August. A has written "You have not paid us". The dates: invoiced 2 August, reminded 1 September, reminded 1 October, today 14 October.',
  'A needs a signature on a lease variation from the landlord. Asked three times, twice in person. Nothing in writing at all — which is the first thing to fix.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the rewriting for the class – **without the book**.'));
out.push(p('**Listener task:** write the new sentence and the dates. Then say whether the new version could be forwarded to somebody\'s manager.'));
out.push(PHRASE_CARD(['We have not received…', 'It has not reached us.', 'We asked on the 12th and again on the 19th.', 'As at today…', 'not yet', 'never chase and threaten together']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** things you are waiting for. Write the first, second and third chaser for each — no accusation anywhere, and the dates building up.'));
out.push(table(['What I am waiting for', 'First', 'Second', 'Third, with the record'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.1, 1.2, 1.2, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your third chaser. The class listens only for an accusation; if they hear one, say which word did it.'));
out.push(p('**Listener task:** write down the dates in each third chaser. A third chaser with no dates in it is a first chaser sent three times.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we did not receive it yet_ and _we are waiting since the 12th_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the third chaser, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Credit account form — asked 12 and 19 October; as at today, 26 October, not received',
  'Dear Mr Nassar,',
  'We have not yet received the credit account form for the Homs order. **The record, so that we are both working from the same one:** we asked on 12 October, by email to this address; we asked again on 19 October, by email and in a telephone call to your office; and as at today, 26 October, it has not reached us.',
  '**What is held up.** One order, forty boxes, which has been packed and standing in our warehouse since the 15th. We are not charging you storage and we are not going to.',
  '**What I think may have happened.** The 12th was the day your office moved floors. ⚠ I am not making that up to be polite — it is the only thing I can think of, and if it is wrong I would rather know what did happen so that I can stop guessing.',
  '**What would end this today.** A photograph of the signed form, on a telephone, to this address. We will take that and raise the order on it, and the paper original can follow whenever it suits you.',
  '**And one thing that is ours.** We should have telephoned on the 15th when the order was packed, rather than waiting until the 19th. We did not, and that is four days of this that are mine.',
  'Thank you. Best regards, Hala Mourad',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is in the subject line, and why is it there rather than in the body?'));
out.push(item('2', 'What does the writer offer as a way of ending it today?'));
out.push(item('3', 'What does the writer take responsibility for, and how many days?'));
out.push(box('Writer\'s box', [
  '**A third chaser — six short parts:** the subject line carrying **the whole record** → *the record, so that we are both working from the same one* → what is held up → **what I think may have happened** → **what would end this today** → and one thing that is ours.',
  '**Put the record in the subject line.** *Asked 12 and 19 October; as at today, 26 October, not received.* It is the only part that is certain to be read, and it is the part that does the work.',
  '**Offer a cheaper way of complying.** *A photograph of the signed form, on a telephone.* Most delays are not refusals; they are a small inconvenience that keeps losing to other small inconveniences. Lower the cost and the thing arrives.',
  '⚠ **Guess at the cause generously, and say you are guessing.** *The 12th was the day your office moved floors. I am not making that up to be polite.* It gives the other person a way to answer without an admission, which is the single most effective thing in a third chaser.',
  '⚠ **Find your own four days.** *We should have telephoned on the 15th. That is four days of this that are mine.* A chaser that takes some of the delay is answered; one that takes none is argued with.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a third chaser for something you are really waiting for (**50 words or more**). Use the frame.'));
out.push(p('**Subject:** ______________ — asked ______________ and ______________; as at today, ______________, not received   Dear ______________,   We have not yet received ______________. **The record, so that we are both working from the same one:** we asked on ______________, by ______________; again on ______________, by ______________; and as at today ______________.   **What is held up.** ______________ since ______________.   **What I think may have happened.** ______________. ⚠ If it is wrong I would rather know what did happen.   **What would end this today.** ______________.   **And one thing that is ours.** ______________, and that is ______________ of this that are mine.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says offer a cheaper way of complying. Yours asks again for the same thing in the same form — what would be easier for them than what you first asked for?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could the reader forward this to their own manager without embarrassment?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The record in the subject line', ''],
  ['No accusation anywhere — check every subject of every verb', ''],
  ['A cheaper way of complying', ''],
  ['A generous guess, and some of the delay taken', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "one thing that is ours". The class says which admission would most change the reader\'s mood.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you chased for a long time (**100 to 140 words**). Say how many times, what you wrote each time, what finally produced it, and whether the delay was ever explained.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what finally produced it_   ✓ _present perfect negative, no accusation?_   ? _was the delay ever explained?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. What produced the thing in the end? It is almost never the sharpest letter; it is usually a telephone call, a photograph, or somebody else being copied in.'));
out.push(box('Homework', ['Write your final text. Then send one third chaser with the record in the subject line and a cheaper way of complying, and write down what came back (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 4.5 =======================
out.push(pb());
out.push(h2('4.5  So far, and not yet'));
out.push(p('**Function:** reporting a position mid-period   ·   **Grammar:** *so far · to date · year to date · not yet · already*   ·   **Pronunciation:** the figure said against the target'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Where is your work against where it should be, this month? Say it in one sentence with a number in it.'));
out.push(p('**b**  Which is the most useful to somebody who has to decide something? _We are doing well. · We have done 61 so far. · We have done 61 so far against 90 for the quarter, with five weeks left._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is missing from Bassel\'s figure?   **A** the figure itself   **B** what it is measured against   **C** the date'));
out.push(p('**b**  Listen again. **1** What three things does Mr Ayoub want with every *so far*? **2** Why does he say *we are a bit behind* is worse than a bad number?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.9  "So far against what?"', [
  ['Bassel', 'We have opened eleven new accounts so far this year.'],
  ['Mr Ayoub', 'So far against what, and with how long left?'],
  ['Bassel', 'Against twenty for the year. Two and a half months left.'],
  ['Mr Ayoub', 'Then the sentence is *eleven of twenty, with ten weeks left*, and I can do the arithmetic myself — which is that we will not get to twenty.'],
  ['Bassel', 'We might.'],
  ['Mr Ayoub', 'We might, and the number says we probably will not, and I would rather know that in October than in December. What have you **not** done yet that would change it?'],
  ['Bassel', 'I have not been to Homs since August.'],
  ['Mr Ayoub', 'That is a better sentence than the eleven. *I have not been to Homs since August* tells me exactly what to decide.'],
  ['Bassel', 'I was going to say we are a bit behind.'],
  ['Mr Ayoub', 'Never say that to me. *A bit behind* can be anything from one account to nine, and the person who says it is asking me to not ask. Eleven of twenty with ten weeks left is a worse position and a better sentence.'],
  ['Bassel', 'And if the number is embarrassing?'],
  ['Mr Ayoub', 'Then it is embarrassing in October, which is cheap, instead of in December, which is not.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Reporting a position: three things, every time**',
  table(['', 'What it is', 'Example'], [
    ['**the figure**', 'what has been done', 'We have opened **eleven** accounts…'],
    ['**the measure**', '⚠ against what', '…**of twenty** for the year…'],
    ['**the time left**', 'how long is left', '…**with ten weeks left**.'],
    ['**not yet**', 'the thing that would change it', 'I **have not been** to Homs **since August**.'],
    ['**so far / to date / year to date**', 'the period, named', '**so far this year** · **year to date**'],
  ], [1.3, 1.5, 2.4]),
  '⚠ **A figure with no measure against it is not information.** *Eleven accounts* could be excellent or a disaster. **Figure · measure · time left** — and then the reader does the arithmetic and owns the conclusion.',
  '⚠ **_A bit behind_ is the worst sentence in this unit.** It can mean one or nine, and the person saying it is asking the reader not to ask. ⚠ A bad number said plainly is a better sentence than a vague one, and it is cheaper in October than in December.',
  '⚠ **Follow every *so far* with a *not yet*.** The *not yet* is where the decision is: *I have not been to Homs since August* tells a manager what to change, and *eleven of twenty* only tells him to worry.',
  '⚠ *So far* and *to date* are interchangeable; *year to date* is the written form and belongs in a table.',
  '**Practise:** Report each with figure, measure, time left and a *not yet*. 1 new accounts 2 the stock records 3 procedures written 4 debts collected 5 complaints answered',
  '**Useful phrases:**  eleven of twenty  ·  with ten weeks left  ·  so far this year  ·  year to date  ·  I have not … yet  ·  not *a bit behind*',
  '**Pronunciation – the figure against the measure.** 🔊 **Track 4.10** Listen: _**eleven** of **twenty** // with **ten weeks** left._ Three stresses, two groups. The arithmetic is audible. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives a bare figure or a vague phrase; B asks for the measure, the time left and the *not yet*. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'We have __________ so far this __________.'],
  ['B', 'So far against what, and with how long left?'],
  ['A', 'Against __________. __________ left.'],
  ['B', 'Then the sentence is *__________ of __________, with __________ left*, and I can do the arithmetic myself.'],
  ['A', 'We might still __________.'],
  ['B', 'We might. What have you **not** done yet that would change it?'],
  ['A', 'I have not __________ since __________.'],
  ['B', 'That is a better sentence than the figure.'],
]));
out.push(table(['Role card 1 — debts', 'Role card 2 — the stock records'], [[
  'A says collections are "going quite well". The facts: 2.1 million of 3.4 collected, six weeks of the quarter left, and A has not telephoned the four largest debtors since September.',
  'A says the stock records are "nearly done". The facts: three store rooms of four, the fourth is the biggest, and A has not had a Saturday free since June.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three numbers and the *not yet*. Then do the arithmetic aloud and say what you would decide.'));
out.push(PHRASE_CARD(['eleven of twenty', 'with ten weeks left', 'so far this year', 'year to date', 'I have not … yet', 'never "a bit behind"']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Report **four** of your own positions with figure, measure, time left and a *not yet*.'));
out.push(table(['What', 'Figure', 'Of what', 'Time left', 'What I have not done yet'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [1.1, 0.7, 0.8, 0.8, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I have _______ of _______, with _______ left. What I have not done yet is _______._'));
out.push(p('**Listener task:** write down any position with no measure. Then ask what the measure is — the speaker always knows, and has often never said it aloud.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _until now we have done eleven_ for *so far*, and _I did not go to Homs yet_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the quarterly position note, and answer the questions.'));
out.push(box(null, [
  '**POSITION — year to date, 31 October. Three figures and three things not yet done.**',
  table(['', 'Year to date', 'Of', 'Left', 'Will we?'], [
    ['New trade accounts', '11', '20', '10 weeks', '**No** — 16 or 17 on this rate'],
    ['Debt over 60 days', '1.3m', 'target under 1.0m', '10 weeks', 'Only if the four largest pay'],
    ['Procedures written', '4', '9', '10 weeks', 'Yes, if Saturdays are covered'],
  ], [1.6, 1, 1.2, 0.9, 1.9]),
  '**The three things not yet done, which are the whole of this note.**',
  '**1.** Bassel **has not been** to Homs since August. Six of last year\'s eleven accounts came from two Homs trips. ⚠ This is the single item on the page that would move the first line.',
  '**2.** Nobody **has** yet **telephoned** the four largest debtors — 940,000 between them — since September. They are not disputes; they are four telephone calls nobody has made.',
  '**3.** The Baghdad Street Saturday **has not been** covered by anybody but me since June. Four hours a week, and it is why five procedures are unwritten.',
  '**What I am not saying.** I am not saying we will miss the twenty because of Homs. We were at nine last year on this date and finished at eleven, so the rate is not steady and the forecast in the last column is a guess. **It is a guess I would rather put on paper than not.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the last column do, and what does the note say about it?'));
out.push(item('2', 'Which of the three "not yet" items is named as the one that would change the first line?'));
out.push(item('3', 'What are the four telephone calls worth?'));
out.push(box('Writer\'s box', [
  '**A position note — a five-column table and three "not yet" paragraphs.** The table carries figure, measure, time left and a **forecast**; the paragraphs carry the three things that have not been done, which are what the reader can actually act on.',
  '**Put a forecast in the last column and say it is a guess.** *No — 16 or 17 on this rate.* A table of positions with no forecast makes the reader guess; a forecast labelled as a guess makes them decide.',
  '**Rank the "not yets" and name the one that moves the biggest number.** *This is the single item on the page that would move the first line.* Three equal items is a list; one named item is a decision.',
  '⚠ **Price the inaction.** *Four telephone calls nobody has made*, worth 940,000. *Four hours a week, and it is why five procedures are unwritten.* Inaction with a price on it gets acted on; inaction described as a delay does not.',
  '⚠ **Undercut your own forecast with last year\'s figure.** *We were at nine last year on this date and finished at eleven.* It is the sentence that stops a panic and it also makes the rest of the page trustworthy.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a position note for your own work (**50 words or more**). Use the frame — a table of three lines, then three "not yet" paragraphs.'));
out.push(p('**POSITION — ______________. Three figures and three things not yet done.**   ______________ | ______________ | ______________ | ______________ | ______________   ______________ | ______________ | ______________ | ______________ | ______________   ______________ | ______________ | ______________ | ______________ | ______________   **1.** ______________ **has not** ______________ since ______________. ⚠ This is the single item that would move ______________.   **2.** Nobody **has** yet ______________. ______________ between them.   **3.** ______________ **has not been** ______________ since ______________. ______________, and it is why ______________.   **What I am not saying.** ______________. The forecast is a guess. **It is a guess I would rather put on paper than not.**'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says price the inaction. Your second item says nobody has done it — what is it worth, in money or in hours?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could the reader decide one thing from this page?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Figure, measure and time left on every line', ''],
  ['A forecast, named as a guess', ''],
  ['One "not yet" named as the one that moves the biggest number', ''],
  ['A price on the inaction', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their ranked "not yet". The class says which they would act on first, and what it would cost to act.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something at your work that is behind (**100 to 140 words**). Give the figure, the measure and the time left, and say what has not been done that would change it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the "not yet" that would change the number_   ✓ _figure, measure, time left?_   ? _has anybody been told the measure?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many does anybody else in the company know the measure? Where nobody does, the thing cannot be behind — which is comfortable and useless.'));
out.push(box('Homework', ['Write your final text. Then write your own position in one line — figure, measure, time left — and put it where your manager will see it (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 4.6 =======================
out.push(pb());
out.push(h2('4.6  Have you ever handled…?'));
out.push(p('**Function:** answering a question about experience   ·   **Grammar:** *Have you ever…?*; *I have, once · I have not, but I have…*   ·   **Pronunciation:** the honest answer that does not sound like a refusal'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Somebody asks whether you have ever done something, and you have done it once, badly. What do you say?'));
out.push(p('**b**  Which answer would you trust? _Yes, of course. · Yes — once, two years ago, with somebody checking it. · No. · No, but I have done the same thing for a different form._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the interviewer think of Nour\'s *no*?   **A** it costs her the job   **B** it is the answer he was waiting for   **C** he does not notice'));
out.push(p('**b**  Listen again. **1** What does she add after every *no*? **2** What does the interviewer say about the candidates who said yes?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.11  "Have you ever done a letter of credit?"', [
  ['Customer', 'Have you ever handled a letter of credit?'],
  ['Nour', 'No. I have never seen one.'],
  ['Customer', 'Thank you. Have you handled customs documents?'],
  ['Nour', 'Twice, both last year, both with our broker sitting beside me. I could not do one alone and I know what the four documents are called.'],
  ['Customer', 'And a contract longer than a year?'],
  ['Nour', 'No. The longest we have ever signed ran to four pages and one year. But I have written nine one-page procedures this year, and a contract is a procedure that somebody can sue you over, so I am not frightened of the reading.'],
  ['Customer', 'That is a good answer and it is the third thing you have told me you cannot do.'],
  ['Nour', 'Would you rather I had said yes?'],
  ['Customer', 'Two of the four people I have seen this week said yes to the letter of credit. One of them had seen one. I did not ask him which bank, because by then it did not matter.'],
  ['Nour', 'How would you have known?'],
  ['Customer', 'I would have asked what the beneficiary does if the dates on the documents do not match, and he would have talked about communication. ⚠ Everybody who has really done one has a story about a date on a bill of lading, and nobody who has not can invent it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Answering a question about experience**',
  table(['Shape', 'Example'], [
    ['**No.** + what you have never done', '**No. I have never seen one.**'],
    ['**Twice** / **once** + when + conditions', '**Twice**, both last year, **with our broker beside me**.'],
    ['what you could and could not do alone', 'I **could not** do one alone. I **know** what the documents are called.'],
    ['**No, but I have** + the nearest real thing', '**No, but I have written** nine procedures…'],
    ['the bridge', '…and a contract is a procedure **somebody can sue you over**.'],
  ], [2, 2.6]),
  '⚠ **Say the number and the conditions.** *Twice, both last year, with the broker beside me* is a complete, honest and useful answer. *Yes* is none of those and will be tested by one specific question.',
  '⚠ **A plain _no_ is a strong answer and almost nobody gives it.** Give it, and then give the nearest real thing you **have** done and the bridge between them. *No, but I have written nine procedures, and a contract is a procedure somebody can sue you over.*',
  '⚠ **Say what you could not do alone.** It is the sentence that makes everything else you say believable, and an experienced interviewer is listening for it.',
  '⚠ **Why a false yes fails:** everybody who has really done a thing has a **specific story** — a date on a document, an argument with a clerk — and nobody who has not can invent one. The follow-up question is always about a detail, never about the task.',
  '**Practise:** Answer each honestly, with a number, the conditions, and the nearest real thing. 1 a letter of credit 2 customs documents 3 a long contract 4 a disciplinary 5 an audit',
  '**Useful phrases:**  No. I have never…  ·  Twice, both last year, with … beside me  ·  I could not do one alone.  ·  No, but I have…  ·  and the two are closer than they look',
  '**Pronunciation – an honest no.** 🔊 **Track 4.12** Listen: _**No.** I have never seen one._ Said flatly and then stopped, with no apology and no rush into the next sentence. The pause is the thing; filling it is what makes a *no* sound like a failure. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks four *have you ever* questions; B answers honestly with numbers and bridges. Then swap, and compare which answers were believed.'));
out.push(dlg(null, [
  ['A', 'Have you ever __________?'],
  ['B', 'No. I have never __________.'],
  ['A', 'Have you __________?'],
  ['B', '__________, both __________, both with __________. I could not __________ alone and I know __________.'],
  ['A', 'And __________?'],
  ['B', 'No. __________. But I have __________, and __________, so __________.'],
  ['A', 'That is the third thing you have told me you cannot do.'],
  ['B', 'Would you rather I had said yes?'],
]));
out.push(table(['Role card 1 — the interviewer', 'Role card 2 — the customer'], [[
  'B is being interviewed for a job one step up. Ask about: a letter of credit, an audit, dismissing somebody, a budget. B has genuinely done one of the four.',
  'B is being asked by a prospective customer what the company has done. Ask about: exporting, a letter of credit, a contract over a year, a claim on insurance. The company has done none of them.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** mark each answer *believed* or *not believed*, and say which word decided it. It is nearly always a number or a condition.'));
out.push(PHRASE_CARD(['No. I have never…', 'Twice, both last year', 'with our broker beside me', 'I could not do one alone.', 'No, but I have…', 'and the two are closer than they look']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write honest answers to **five** *have you ever* questions about your own work — including at least two *no*s with a bridge.'));
out.push(table(['The question', 'My honest answer, with numbers', 'The bridge, if no'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.2, 2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class two of your answers — one yes with its conditions, one no with its bridge.'));
out.push(p('**Listener task:** write down the best bridge you hear. A good bridge names a real piece of work and says what the two things have in common.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _Have you ever did…?_ and _I never did it before_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter answering a prospective customer\'s questions, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Your four questions — answered, including the two where the answer is no',
  'Dear Ms Tannous,',
  'You asked four questions on the telephone and I said I would answer them in writing. Two of the answers are no.',
  '**1 · Have we exported?** **No.** We have never sent goods outside Syria. What we have done, since 1998, is supply four hundred businesses here, including sixty-one opened in the last two years, and the paperwork for a border is paperwork, which is the part of this we are least worried about.',
  '**2 · Have we worked with a letter of credit?** **No**, and nobody here has seen one. If this order needs one, we would need your bank or ours to walk us through the first one, and I would rather say so now than discover it in February.',
  '**3 · Can we supply 300 units a quarter?** **Yes**, and that one is easy: we have supplied that volume to one customer for six years. Our constraint is not volume, it is **the second quarter**, when wrap is short across the whole market; I would want that written into any agreement rather than discovered.',
  '**4 · Have we ever failed a delivery date?** **Yes**, four times in two years, all four in the second quarter, all four by between two and nine days, all four with a telephone call before the date rather than after it. ⚠ I could have answered that question with *rarely* and you would have learned nothing.',
  '**What I would like you to take from this.** Two of your four questions got a no. The two yeses have numbers on them that you can check with the customers concerned, and I will give you their names if you ask.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How does the writer treat the two questions where the answer is no?'));
out.push(item('2', 'What does the company volunteer about its failures, and in what detail?'));
out.push(item('3', 'What is offered at the end, and why does it matter?'));
out.push(box('Writer\'s box', [
  '**A letter answering questions about experience — one numbered paragraph per question**, each beginning with the bare **Yes** or **No** in bold, then the numbers, then the bridge or the constraint.',
  '**Put the nos first and say how many there are.** *Two of the answers are no.* The reader is going to count them anyway; counting them yourself is the difference between candour and being caught.',
  '**Answer the failure question in full.** *Four times in two years, all four in the second quarter, all four by two to nine days, all four with a telephone call before the date.* ⚠ And then say the alternative out loud: *I could have answered that with "rarely" and you would have learned nothing.*',
  '**Name your real constraint rather than your capacity.** *Our constraint is not volume, it is the second quarter.* A supplier who names the quarter when things go wrong is a supplier you can plan around.',
  '⚠ **Offer the referees unasked.** *I will give you their names if you ask.* It is the only sentence in the letter that cannot be written by somebody who is exaggerating.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Answer four real questions about your own workplace\'s experience (**50 words or more**). At least one answer must be no. Use the frame.'));
out.push(p('**Subject:** Your ______________ questions — answered, including the ______________ where the answer is no   Dear ______________,   You asked ______________. ______________ of the answers are no.   **1 · ______________?** **No.** We have never ______________. What we have done is ______________.   **2 · ______________?** **No**, and ______________. If ______________, we would need ______________, and I would rather say so now than ______________.   **3 · ______________?** **Yes**, and ______________. Our constraint is not ______________, it is ______________.   **4 · ______________?** **Yes**, ______________ times in ______________, all of them ______________. ⚠ I could have answered that with ______________ and you would have learned nothing.   **What I would like you to take from this.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says name your real constraint rather than your capacity. Yours says you can do the volume — what is the thing that would actually make you late?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would a reader trust the yeses more because of the nos?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The nos counted and put first', ''],
  ['A bare Yes or No at the start of each answer', ''],
  ['The failure question answered with numbers', ''],
  ['The real constraint named, and referees offered', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their failure answer. The class says which company they would place a first order with.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you said yes to something you had not done (**100 to 140 words**). Say why, what happened, who found out, and what you would say now.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the moment it was found out_   ✓ _have you ever / I have never correct?_   ? _what would the honest answer have cost?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. What did the false yes actually cost, and what would the honest no have cost? The second figure is nearly always smaller, and nearly always felt larger at the time.'));
out.push(box('Homework', ['Write your final text. Then write three honest answers about things your workplace has never done, each with a bridge to something it has (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 4.7 =======================
out.push(pb());
out.push(h2('4.7  Review & Mediate: what does this claim?'));
out.push(p('**Function:** reading somebody else\'s capability statement for a colleague   ·   **Review:** the two present perfects · *for* and *since* · chasing · *so far* and *not yet* · honest answers'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 4 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What must every claim on a CV have attached to it?',
  '**2** When do you use the present perfect **continuous**?',
  '**3** _We have bought from her _______ eleven years, _______ 2014._',
  '**4** Why is *we have not received it* better than *you have not sent it*?',
  '**5** What is wrong with *we are a bit behind*?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour find in the other company\'s statement?   **A** a lie   **B** three claims with no numbers and one with a number that undercuts them   **C** nothing'));
out.push(p('**b**  Listen again. **1** What does she say about *a leading supplier*? **2** What is the one number in the document, and what does it tell her?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.13  "Read me the one with a number in it"', [
  ['Bassel', 'The other distributor\'s capability statement. It is four pages and it is very good.'],
  ['Nour', 'Read me a line.'],
  ['Bassel', '"A leading supplier of packaging solutions with extensive experience across the Syrian market."'],
  ['Nour', 'How many customers, since when, and how many staff?'],
  ['Bassel', 'It does not say.'],
  ['Nour', 'Four pages and it does not say. Find me a line with a number in it.'],
  ['Bassel', '"Our team has grown to eleven."'],
  ['Nour', 'Eleven. And we are nineteen. So the company with extensive experience across the Syrian market has eleven people, and they have put the one number in the document because they are proud of it.'],
  ['Bassel', 'It might be eleven very good people.'],
  ['Nour', 'It might. ⚠ And I am not saying they are not good — I am saying that **four pages with one number in them is a document that cannot be checked**, and that the one number they chose tells us what they want us to look at.'],
  ['Bassel', 'Ours has about thirty numbers in it and three paragraphs of things we cannot do.'],
  ['Nour', 'Which is why ours is two pages and theirs is four. Everything you cannot check takes up room.'],
  ['Bassel', 'So what do I do with theirs?'],
  ['Nour', 'Ask them the four questions from 4.6, in writing, and see which answers come back with numbers. **You are not trying to catch them out.** You are trying to find out whether there is anybody there who writes the way we do, because that is the person you will be dealing with for the next nine years.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – reading a claim for somebody else**',
  table(['To test it', 'To find the shape', 'To act'], [
    ['How many, since when, how many staff?', 'Find me a line with a number in it.', 'Ask the four questions in writing.'],
    ['Four pages and it does not say.', 'The one number they chose is the one they are proud of.', 'See which answers come back with numbers.'],
  ], [1.9, 2.1, 2]),
  '⚠ **Count the numbers.** A long document with few numbers is not dishonest and it is **uncheckable**, which for a reader comes to the same thing. The ratio of pages to checkable facts is the fastest test there is.',
  '⚠ **The one number a document does include tells you what it wants you to look at**, and sometimes — as with eleven staff against nineteen — it tells you the opposite of what was intended.',
  '⚠ **Everything you cannot check takes up room.** That is why a page of claims is longer than a page of facts, and it is a useful thing to say to a colleague who thinks the longer document is the better one.',
  '⚠ **Do not read a competitor\'s claims to catch them out.** Read them to find out whether anybody there writes with numbers, because that is the person you will deal with for years. That is a more useful question and a kinder one.',
  '**Practise:** A colleague brings you a long, impressive document. Count its numbers, ask the three questions, and say what you would do next.',
  '**Useful phrases:**  How many, since when?  ·  Find me a line with a number in it.  ·  four pages and it does not say  ·  the one number they chose  ·  I am not trying to catch them out.',
  '**Pronunciation – reading a claim aloud flatly.** 🔊 **Track 4.14** Listen: _a leading supplier of packaging solutions with extensive experience across the Syrian market_ — read without expression, at a steady pace. ⚠ Read flatly, an empty claim sounds empty; read with enthusiasm, it sounds like information. Try it both ways. Repeat once each.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A brings an impressive document; B counts the numbers and finds the shape. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'A brochure: *market-leading · comprehensive range · nationwide coverage · trusted by hundreds*. The only numbers: "over 20 years" and "a team of 11". B must find both and say what they mean together.',
  'A CV: *extensive experience in administration · excellent communication skills · strong work ethic*. The only numbers: two dates, which show eight months in one job and seven in the next. B must find them without becoming unkind.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the reading for the class – **without the book**.'));
out.push(p('**Listener task:** write the number of pages and the number of checkable facts. The ratio is the finding.'));
out.push(PHRASE_CARD(['How many, since when?', 'Find me a line with a number.', 'it does not say', 'the one number they chose', 'everything uncheckable takes up room', 'not to catch them out']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a real capability statement or CV. Read it for **two** colleagues: one who is impressed by it and one who has to act on it.'));
out.push(table(['Who I told', 'What impressed them', 'The numbers I found', 'What I would ask'], [['', '', '', ''], ['', '', '', '']], [1, 1.2, 1.2, 1.5]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the document. This is the **fourth** unit of this book, and the unwritten thing is the one the whole unit has been circling: **a claim with a number in it can be disbelieved, and that is why it is worth making.** Everything that cannot be checked is free, so everybody writes it, so it is worth nothing — and the writer who gives you a figure has taken a risk on your behalf.'));
out.push(p('_The document said ______. It had ______ pages and ______ checkable facts. The one number was ______, which tells me ______._'));
out.push(p('**Listener task:** add to the Book 1 office-word list: _track record · capability statement · continuous service · year to date · shortcoming · referee._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 2)', 10));
out.push(p('⚠ **This unit practises Part 2: matching.** Read the five descriptions of people, then the eight short notices. For each person, choose the notice (**A–H**) that suits them. There are more notices than people.'));
out.push(box(null, [
  '**1**  Somebody who has worked in a warehouse for nine years and has never used a computer.',
  '**2**  Somebody with two years in customer service who wants a job with more writing in it.',
  '**3**  Somebody returning to work after a four-year career break.',
  '**4**  Somebody who has done customs paperwork twice, with help, and wants to do it properly.',
  '**5**  Somebody who has run a small office alone and wants to work in a bigger one.',
], 'FFFFFF', C.navy));
out.push(box(null, [
  '**A**  _Trainee broker. No experience required; formal training given over 18 months. Must be willing to study._',
  '**B**  _Stores supervisor. Nine years\' warehouse experience or more. Paper records; no computer work._',
  '**C**  _Correspondence clerk. Two years in a customer-facing role. The work is writing: letters, claims, replies._',
  '**D**  _Night security. No experience required._',
  '**E**  _Returners\' scheme. For anybody who has been out of work for two years or more. Twelve weeks, paid._',
  '**F**  _Administration coordinator. Must have run an office alone and be ready to work in a department of nine._',
  '**G**  _Delivery driver. Clean licence, five years._',
  '**H**  _Customs documentation. For somebody who has handled the documents under supervision and wants to be signed off._',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 1 — an internal message, 35 to 45 words.** Here: telling a colleague where a piece of work has got to.',
  'For a progress message the three points are: **what is done, with a number** · **what is not done yet** · **what you need from them**.',
  '⚠ **In forty words, the number is not optional.** *Three of four rooms* costs four words and is the whole message; *going well* costs two and says nothing.',
  '⚠ No explanation of why. A progress message that explains itself is a defence, and at forty words there is no room for both.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** Tell a colleague where a piece of your work has got to. Write an internal message (**35 to 45 words**). Say **what is done, with a number**, **what is not done yet**, and **what you need from them**.'));
out.push(p('______________: I have ______________ of ______________. I have not ______________ yet. ______________ by ______________, and then I can ______________. ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What is done, with a number', ''],
  ['What is not done yet', ''],
  ['What you need from the reader', ''],
  ['35 to 45 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write your own capability statement — for yourself, not your company (**100 to 140 words**): what you have done with numbers, what you have been doing and how far it has got, how long you have been where you are and what has never happened in that time, and three things you have never done.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then count the numbers in your own CV and in one you have been sent, and write three lines comparing the two (50+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 4 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  I ___ the administration for two sites since June.   a) run   b) have run   c) am running',
  '2  I ___ the stock records; three rooms of four are done.   a) have moved   b) have been moving   c) moved',
  '3  We have bought from her ___ eleven years.   a) since   b) for   c) during',
  '4  We have bought from her ___ 2014.   a) since   b) for   c) from',
  '5  It is eleven years ___ we changed supplier.   a) since   b) that   c) when',
  '6  We ___ received the form yet.   a) did not   b) have not   c) are not',
  '7  We have opened eleven accounts ___ this year.   a) until now   b) so far   c) by now',
  '8  ___ you ever handled a letter of credit?   a) Did   b) Have   c) Are',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 4.15** Listen to the position report. Complete the note.   New accounts, year to date: ______   Target: ______   Time left: ______   The one thing not done yet: ______   Last year on this date: ______'));
out.push(dlg('Track 4.15  Audio script (read after the check)', [
  ['Bassel', 'Position at the end of October. We have opened eleven new trade accounts year to date, against a target of twenty for the year, with ten weeks left.'],
  ['Bassel', 'On that rate we will finish at sixteen or seventeen, and I would rather say so now than in December.'],
  ['Bassel', 'The one thing I have not done yet that would change it: I have not been to Homs since August. Six of last year\'s eleven accounts came from two Homs trips.'],
  ['Bassel', 'One figure against the forecast: we were at nine on this date last year and finished at eleven, so the rate is not steady and what I have just told you is a guess.'],
]));
out.push(p('**C  Writing.** Write four lines of your own record (**50 words or more**): each with a strong verb and a number, plus one line beginning *I have never…*.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 4)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ state my record in the present perfect with a number on every claim',
  '☐ choose a verb nobody can say without having done it',
  '☐ use the continuous for work in progress, and give its real shape',
  '☐ measure a relationship with *for* and *since*, and attach a qualifier that can be checked',
  '☐ chase three times with dates and no accusation',
  '☐ report a position as figure, measure and time left — and never as *a bit behind*',
  '☐ answer *have you ever…?* with a number, a condition, or an honest no and a bridge',
  '☐ count the checkable facts in somebody else\'s document',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 4 · Student\'s Book');
