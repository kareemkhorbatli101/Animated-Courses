// Proactive English B2 · Syria Edition · Book 2 · Unit 22 — Student's Book
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

out.push(h1('Unit 22  Proposals'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit', [
  '**22.1** The thing you are asking for   ·   **22.2** The problem, in the reader\'s units   ·   **22.3** What you are not asking for',
  '**22.4** The alternative you considered and rejected   ·   **22.5** What it looks like if it fails   ·   **22.6** The whole proposal   ·   **22.7** Review & Mediate: the proposer and the person who has to find the money',
  '⚠ **Unit 21 is this unit turned round.** **There you wrote criteria and somebody else had to meet them; here you are asking somebody to accept yours instead of meeting theirs** — **and the person you are asking has a reason not to tell you what is wrong with your proposal.**',
  '**So the seventeen words of 21.7 come back on the first day.** ⚠ **A proposal that does not say what an objection to it will cost the reader gets the silence Ms Shaaban got in February** — **and a proposal read in silence has been declined slowly.**',
], C.lteal, C.teal));

// ===================== 22.1 =====================
out.push(pb());
out.push(h2('22.1  The thing you are asking for'));
out.push(p('**Function:** putting the ask in one sentence, with its cost and its date   ·   **Grammar:** the ask sentence — _I am asking for ___, which costs ___, by ____   ·   **Pronunciation:** the figure said once, without a run-up'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, with a proposal you have written or received. ⚠ **Find the sentence that says what is being asked for and say which page it is on.** **Then count the words in front of it.** **In most proposals the ask is on the third page and there are eight hundred words in front of it, every one of them true.**'));
out.push(board('We feel there may be a case for looking at some form of structured provision.', 'I am asking for eight afternoons a year for eleven people, starting in October.'));
out.push(p('**b**  Which is the ask? **1** _We feel there may be a case for some form of structured provision._  **2** _I am asking for eight afternoons a year for eleven people, starting in October._  **3** _The situation has been under review for some time._  **4** _I should like to request consideration of additional resource._  **5** _I am asking for one engineer, two days a week, from 1 September until the end of March._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the ask needs, and what does she say happens to a proposal whose ask is on the third page?   **A** more detail; nothing   **B** **a thing, a cost and a date, in one sentence at the top** — and **a proposal whose ask is on page three is read by somebody who has already decided what it is about, and they are usually wrong**   **C** a stronger justification; it is referred back'));
out.push(p('**b**  Listen again. **1** What happened to Ms Sabbagh\'s first proposal?   **2** What does Ms Huda say about the word _some_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.1  Eight afternoons', [
  ['Ms Huda', 'Ms Sabbagh. The proposal that came back with one word on it.'],
  ['Nour', '**Four pages about escalation calls, and Mr Jabri wrote _costs?_ in the margin and sent it back.** ⚠ **The cost was in it.** **It was on page three.**'],
  ['Ms Huda', '**What was on page one?**'],
  ['Nour', '**The thirty-four escalations out of forty-one that involve an unrecorded promise.** ⚠ **All of it true, and none of it asking for anything.**'],
  ['Ms Huda', '**And what did he think the paper was about?**'],
  ['Nour', '⚠ **A complaint about the call handlers.** **He told me so a fortnight later.** **He had read page one and formed a view, and nothing on page three could undo it.**'],
  ['Ms Huda', '**Which is the unit in one sentence.** ⚠ **A proposal whose ask is on page three is read by somebody who has already decided what it is about** — **and they are usually wrong, and they are not reading carelessly.** **They are reading the way everybody reads.**'],
  ['Omar', 'What does the ask need?'],
  ['Ms Huda', '**Three things, in one sentence, at the top.** ⚠ **A thing — what you want.** **A cost — in the units the reader controls.** **And a date — when it starts.**'],
  ['Nour', '⚠ _I am asking for eight afternoons a year for eleven people, starting in October._ **Fourteen words, and it took me three weeks to be willing to write them** — **because the moment the figure is on the page it can be refused, and while it was on page three I could believe the paper was still being considered.**'],
  ['Ms Huda', '**That is the honest answer and the room should have it.** ⚠ **A buried ask is not a drafting fault; it is a way of not being refused yet** — **and the price of it is that the paper is answered by somebody who does not know what it asks for.**'],
  ['Rim', 'And the words that look like asks?'],
  ['Ms Huda', '⚠ **_Some_, _a degree of_, _additional_, _appropriate_, _structured_, _a form of_.** **Six words, and every one of them is a figure the writer has declined to state.**'],
  ['Hiba', 'I write _some additional support_ on every form.'],
  ['Ms Huda', '**And what does the person with the budget do with it?**'],
  ['Hiba', '⚠ **Picks a number.** **Always the smallest one that could be called support.**'],
  ['Ms Huda', '**Which is the cost of _some_, and it is not a small one.** ⚠ **A word that leaves the figure open hands the figure to the person paying** — **and they will choose honestly and they will choose low, because low is what the word invited.**'],
  ['Jad', 'And saying the figure out loud?'],
  ['Ms Huda', '🔊 **Once, with no run-up, and then stop.** ⚠ **_Eight afternoons a year for eleven people._** **Not** _what I was wondering was whether there might be any possibility of perhaps eight afternoons_. **The run-up tells the reader the figure is an opening position.**'],
]));
out.push(sp());
out.push(box('Language box – the thing you are asking for', [
  '**The ask needs three things, in one sentence, at the top.** ⚠ **A thing** _(what you want)_ · **a cost** _(in the units the reader controls)_ · **and a date** _(when it starts)_. _I am asking for **eight afternoons a year** for **eleven people**, starting in **October**._',
  '**A proposal whose ask is on page three is read by somebody who has already decided what it is about.** ⚠ **And they are usually wrong, and they are not reading carelessly** — **they are reading the way everybody reads.** **Ms Sabbagh\'s reader thought her paper was a complaint about the call handlers.**',
  '⚠ **A buried ask is not a drafting fault; it is a way of not being refused yet.** **While the figure is on page three the paper can still be believed to be under consideration** — **and the price is that it is answered by somebody who does not know what it asks for.**',
  '**The six words that look like asks and are not.** ⚠ _some_ · _a degree of_ · _additional_ · _appropriate_ · _structured_ · _a form of_. **Every one is a figure the writer has declined to state.**',
  '⚠ **And a word that leaves the figure open hands the figure to the person paying.** **They will choose honestly and they will choose low, because low is what the word invited.** **_Some additional support_ becomes the smallest thing that could be called support.**',
  '**The shapes.** _I am asking for ______, which costs ______, starting ______._ _I am asking for ______ days a week from ______ until ______._ ⚠ **And the ones that ask for nothing:** _there may be a case for_ · _I should like to request consideration of_ · _some form of_ · _the situation has been under review_.',
  '**Pronunciation.** 🔊 **Track 22.2** **The figure once, with no run-up, and then stop.** ⚠ _Eight afternoons a year for eleven people._ **Not** _what I was wondering was whether there might perhaps be any possibility of_. **The run-up tells the reader the figure is an opening position.**',
  '**And one thing about the date, which is the part that is left out most often of the three.** ⚠ **An ask with no start date is an ask that can be agreed and never begun.** _Starting in October_ **gives the reader something to refuse or to diarise;** _as soon as possible_ **gives them a sentiment.**',
  '**Practise:** Put the ask in one sentence. **1** people  **2** time  **3** equipment  **4** one with no date, and the repair  **5** one hedged with _some_, so that you hear what it hands over',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the situation from the card. B gives **the ask in one sentence, under twenty words, with a cost and a date.** ⚠ **Two rows on each card have no natural unit of cost**, and B must choose one the reader controls and say why. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the situation)_ __________.'],
  ['B', '**I am asking for __________, which costs __________, starting __________.**'],
]));
out.push(table(['Card A – the situation', 'Card B – the situation'], [
  ['_Escalation calls: the promises are not recorded._', '_Eleven sites: two of them are a fortnight from an engineer._'],
  ['_⚠ The archive index has never been checked._', '_⚠ The bindery proofs come back after the reader has gone._'],
  ['_The older press is down for a roller every spring._', '_The afternoon analyser run finishes after the ward round._'],
  ['_⚠ Nobody has written the plate-condition procedure._', '_⚠ The committee minutes carry no dates against actions._'],
  ['_The handset test card exists at one end only._', '_The gate has one steel rule and three inspectors._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each ask, its cost and its date. ⚠ **The four rows marked ⚠ have no obvious unit of cost** — **an index, a reader\'s hours, a procedure, a minute-taker\'s habit** — **and the pairs must choose a unit the reader actually controls.** **Hours and people are controlled; goodwill and attention are not.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take something you have wanted at work for more than six months. ⚠ **Write the ask in one sentence with a cost and a date** — **and then say out loud how long you have been willing to write that sentence, and why not before.**'));
out.push(p('**b**  Swap and perform. Your partner reads your ask **with a run-up** and then alone. ⚠ They say which one sounds like an opening position.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour wrote four pages about escalation calls and Mr Jabri sent it back with the single word costs in the margin. The cost was in it: it was on page three. Page one was the thirty-four escalations out of forty-one that involve an unrecorded promise — all of it true, and none of it asking for anything. He thought the paper was a complaint about the call handlers, and he told her so a fortnight later: he had read page one, formed a view, and nothing on page three could undo it. Which is the unit in one sentence — a proposal whose ask is on page three is read by somebody who has already decided what it is about, and they are usually wrong, and they are not reading carelessly; they are reading the way everybody reads. Omar asked what the ask needs, and three things in one sentence at the top: a thing, which is what you want; a cost, in the units the reader controls; and a date, which is when it starts. Nour gave hers — I am asking for eight afternoons a year for eleven people, starting in October — fourteen words, and it took her three weeks to be willing to write them. Asked why three weeks, she said that the moment the figure is on the page it can be refused, and while it was on page three she could believe the paper was still being considered. Which is the honest answer and the room should have it: a buried ask is not a drafting fault but a way of not being refused yet, and the price is that the paper is answered by somebody who does not know what it asks for. Rim asked about the words that look like asks, and there are six: some, a degree of, additional, appropriate, structured, a form of. Hiba said she writes some additional support on every form, and the person with the budget picks a number, always the smallest one that could be called support. And Jad asked about saying the figure out loud: once, with no run-up, because the run-up tells the reader the figure is an opening position._'));
out.push(p('**Listener task:** write your partner\'s ask, its cost and its date.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the first page of the proposal Nour sends in May, and the note under it. Answer the questions.'));
out.push(model([
  '**ESCALATION HANDLING: A PROPOSAL** _(page 1 of 3 · 12 May · to Mr Jabri)_',
  '**What I am asking for.** ⚠ **Eight afternoons a year for eleven people, starting in October.** **Four hundred and forty hours of staff time in the year, and no money.**',
  '**When I need the answer, and why that date.** ⚠ **By 10 June.** **The eleven people are on a shift rota drawn up a quarter in advance, and the October rota is drawn on 15 June** — **so an answer on 20 June costs us until January whatever it says.**',
  '**What it is not.** ⚠ **It is not a complaint about the call handlers.** **I am putting that in the first paragraph because my paper of February was read as one, and it was my fault: the first page gave the figures and asked for nothing, so the figures were the whole paper.**',
  '**The figure, so that it can be refused properly.** **Eight afternoons is two per quarter.** ⚠ **Eleven people at five hours an afternoon is four hundred and forty hours.** **At our present rate of escalation work that is about eleven days of one person\'s time spread across eleven people and four quarters** — **and the comparison I would want if I were you is in paragraph two of page two, which is what the unrecorded promises cost us in repeat calls.**',
  '**What I am not asking for, and I want it said on page one.** ⚠ **I am not asking for another person, I am not asking for any part of the equipment budget, and I am not asking for the afternoons to be protected from an emergency.** **If a ward goes down on a Tuesday the afternoon is lost and I shall not ask for it back.**',
  '**And one thing about the shape of this paper, which I have changed since February.** ⚠ **The ask is here, at the top, in fourteen words, and the thirty-four escalations are on page two.** **In February it was the other way round and the paper was answered in one word.**',
  '**NOTE for my own file, which did not go with the proposal.** ⚠ **The three weeks between writing the figure and sending it were not spent calculating.** **The arithmetic took an afternoon.** **They were spent being unwilling to put a number where somebody could refuse it** — **and I would not have been able to say that in February.**',
]));
out.push(item('1', 'Why does the proposal need an answer by 10 June, and what does it cost if the answer is late?'));
out.push(item('2', 'What does the writer say about her February paper, and whose fault does she say it was?'));
out.push(item('3', 'What does the note say the three weeks were spent on?'));
out.push(writers([
  'A proposal\'s first page: **the ask in one sentence with its cost and its date** → **when you need the answer and why that date** → **what the paper is not** → **the figure broken down so that it can be refused properly** → **and what you are not asking for.**',
  '⚠ **Give the answer date and the reason for it.** _The October rota is drawn on 15 June, so an answer on 20 June costs us until January whatever it says._ **A deadline with a mechanism behind it is kept; one without is read as pressure.**',
  '**Say what the paper is not, if a previous one was misread.** ⚠ _It is not a complaint about the call handlers, and my paper of February was read as one, and it was my fault._ **Taking the fault is what makes the sentence believed.**',
  '**Break the figure down into the reader\'s units.** ⚠ _Eight afternoons is two per quarter; eleven people at five hours is four hundred and forty hours._ **A figure that has been divided is a figure the reader can argue with, and a reader who can argue with it can agree to it.**',
  '⚠ And **say what you are not asking for, on the first page.** _Not another person, not any part of the equipment budget, and not protection from an emergency._ **It is the cheapest paragraph in a proposal and the one that gets it read to the end.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first page of the proposal (80 words or more).'));
out.push(p('**______________: A PROPOSAL** _(page ______ · ______________ · to ______________)_   **What I am asking for.** ⚠ **______________, starting ______________.** **______________, and ______________.**   **When I need the answer, and why that date.** ⚠ **By ______________.** **______________, so an answer on ______________ costs us ______________.**   **What it is not.** ⚠ **It is not ______________.**   **The figure, so that it can be refused properly.** ⚠ **______________ is ______________. ______________ at ______________ is ______________.**   **What I am not asking for.** ⚠ **I am not asking for ______________, and I am not asking for ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The ask in one sentence at the top, with a cost and a date',
  'The answer date, with the mechanism that makes it that date',
  'The figure divided into units the reader controls',
  'What you are not asking for, on the first page',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first sentence**, and the room says what is being asked for, what it costs and when it starts.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full first page (180 words or more), to the shape in the writer\'s box: the ask at the top, the answer date with its mechanism, what the paper is not, the figure divided, and what you are not asking for.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the ask in one sentence with cost and date, an answer date with a mechanism, the figure divided into the reader\'s units, and what you are not asking for.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your ask, and then say how long you have been willing to write that sentence.** ⚠ **The room is listening for the second answer and not the first** — **and in this class the gap between wanting a thing and being willing to put a figure on it has run from three weeks to four years.** Then the sentence the cycle ends on, which is Ms Sabbagh\'s: **while it was on page three I could believe the paper was still being considered.**'));
out.push(hw('Write **the ask** for something you have wanted for more than six months: **one sentence, a cost in the reader\'s units, and a start date.** ⚠ **Then write the paragraph that says what you are not asking for** — **three things, and one of them should be something you would quite like** — **because that is the paragraph that gets the paper read to the end.**'));

// ===================== 22.2 =====================
out.push(pb());
out.push(h2('22.2  The problem, in the reader\'s units'));
out.push(p('**Function:** pricing the problem in the units the reader already counts   ·   **Grammar:** comparative arithmetic — _which is ___ a year, against ___ for the remedy_   ·   **Pronunciation:** two figures compared, with the stress on the second'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. ⚠ **Name a problem at your work and then ask what the person with the budget counts.** **Hours, vehicles, beds, machine time, complaints, overtime** — **and then price your problem in one of those and not in the one you feel it in.** **Most people price a problem in frustration, which nobody holds a budget for.**'));
out.push(board('The unrecorded promises cause an enormous amount of avoidable work.', 'The unrecorded promises cost about three hundred repeat calls a year.'));
out.push(p('**b**  Which is priced in the reader\'s units? **1** _The problem causes considerable difficulty._  **2** _The unrecorded promises cost about three hundred repeat calls a year._  **3** _Morale in the section is affected._  **4** _Two of the eleven sites wait a fortnight, which is about nine lost working days a quarter._  **5** _It is extremely frustrating for everybody involved._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say about pricing a problem in the unit you feel it in?   **A** it is the honest way   **B** **it is honest and it is unusable** — and **a reader who holds a budget cannot spend anything against frustration, however real it is**   **C** it is the best argument available'));
out.push(p('**b**  Listen again. **1** How did Mr Darwish price the fortnight at the two distant sites?   **2** What does Ms Huda say about a figure the reader can check?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.3  Nine lost days a quarter', [
  ['Ms Huda', 'Mr Darwish. The two sites that wait a fortnight. How did you price it?'],
  ['Omar', '**Badly, the first time.** ⚠ **I wrote that the delay was unacceptable and that the registry staff were demoralised.** **Both true, and he cannot spend anything against either.**'],
  ['Ms Huda', '**And the second time?**'],
  ['Omar', '⚠ **Nine lost working days a quarter at the two sites**, **which I got from the registry\'s own closure book and not from my own records.**'],
  ['Ms Huda', '**Why from their book?**'],
  ['Omar', '⚠ **Because he can check it in four minutes without asking me**, **and a figure he can check is a figure he does not have to decide whether to trust.**'],
  ['Ms Huda', '**Which is the finding of this cycle.** ⚠ **A figure from your own records is an assertion; a figure from theirs is a fact.** **Use theirs even when yours is better.**'],
  ['Nour', 'And if their book does not record it?'],
  ['Ms Huda', '**Then say so, and say what you have instead, and say what it would take to know properly.** ⚠ _Nobody records this; my own log gives nine days and it is the only count there is._ **A reader who is told the strength of a figure will use it; one who is given a confident number and finds out later will not use anything of yours again.**'],
  ['Rim', 'How big does the problem figure have to be?'],
  ['Ms Huda', '⚠ **Bigger than the ask, and it has to be a comparison the reader makes rather than one you make for them.** **Put the two figures in the same paragraph in the same units and stop.** **Four hundred and forty hours against three hundred repeat calls is not a comparison; it is two facts.**'],
  ['Omar', '**So I have to convert.**'],
  ['Ms Huda', '**You have to convert, and you have to show the conversion.** ⚠ _Three hundred repeat calls at about forty minutes each is two hundred hours; the eight afternoons are four hundred and forty._ **Which does not favour the proposal, and that is the paragraph the reader believes.**'],
  ['Jad', 'Is it not a mistake to show a figure against yourself?'],
  ['Ms Huda', '⚠ **It is the only way to be believed about the others.** **And in that example the case is still there** — **it is in the second year, because the four hundred and forty hours are paid once and the two hundred are paid every year.** **Say that, and you have an argument instead of an assertion.**'],
  ['Hiba', 'And reading two figures out loud?'],
  ['Ms Huda', '🔊 **The stress on the second, and no pause before it.** ⚠ _Two hundred hours a year against four hundred and forty **once**._ **People put a long pause before the second figure, which tells the room they are about to be persuaded, and then they listen for the trick.**'],
]));
out.push(sp());
out.push(box('Language box – the problem, in the reader\'s units', [
  '**Price the problem in the units the reader already counts.** ⚠ **Hours, vehicles, beds, machine time, complaints, overtime** — **not in the unit you feel it in.** **Most people price a problem in frustration, and nobody holds a budget for that.**',
  '⚠ **A figure from your own records is an assertion; a figure from theirs is a fact.** **Use theirs even when yours is better.** **Mr Darwish took nine lost working days a quarter from the registry\'s own closure book, which the reader can check in four minutes without asking him.**',
  '**And where the figure does not exist, say so.** ⚠ _Nobody records this; my own log gives nine days and it is the only count there is._ **A reader told the strength of a figure will use it; one given a confident number who finds out later will not use anything of yours again.**',
  '**The problem figure has to be bigger than the ask, in the same units, in the same paragraph.** ⚠ **Four hundred and forty hours against three hundred repeat calls is not a comparison; it is two facts.** **Convert, and show the conversion.**',
  '⚠ **Show the conversion even when it does not favour you.** _Three hundred repeat calls at about forty minutes each is two hundred hours; the eight afternoons are four hundred and forty._ **That is the paragraph the reader believes, and it is the one that makes the rest of your figures usable.**',
  '**And then make the argument the arithmetic actually supports.** ⚠ **Four hundred and forty hours are paid once and two hundred are paid every year** — **so the case is in the second year, and saying so is an argument where a bare comparison would have been an assertion.**',
  '**Pronunciation.** 🔊 **Track 22.4** **Two figures compared: the stress on the second and no pause before it.** ⚠ _Two hundred hours a year against four hundred and forty **once**._ **A long pause before the second figure tells the room it is about to be persuaded, and then it listens for the trick.**',
  '**And one thing about the units themselves, which is easy to get wrong in the other direction.** ⚠ **Do not convert a human cost into money to make it respectable.** **Three hundred repeat calls is a better figure than any sum of money you could derive from it, because the reader has a book with repeat calls in it and no book at all with your conversion rate in it.**',
  '**Practise:** Price the problem. **1** in hours  **2** in the reader\'s own records  **3** with a conversion shown  **4** one where the figure does not exist, and what you say instead  **5** one that does not favour your proposal, and the argument that survives it',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the problem from the card. B prices it **in a unit the reader controls**, and says **whose records the figure comes from.** ⚠ **Two rows on each card have no record anywhere**, and B must say so and say what would be needed to know. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the problem)_ __________.'],
  ['B', '**About __________ a year, from __________\'s own __________.**'],
]));
out.push(table(['Card A – the problem', 'Card B – the problem'], [
  ['_Promises in escalation calls are not recorded._', '_Two sites wait a fortnight for an engineer._'],
  ['_⚠ The archive index has never been checked._', '_⚠ Nobody knows how often a plate is reused._'],
  ['_The older press loses a week every spring._', '_Proofs arrive after the reader has gone home._'],
  ['_⚠ The committee\'s actions carry no dates._', '_⚠ Inspectors disagree about the top layer._'],
  ['_The analyser run finishes after the ward round._', '_The gate has one rule and three inspectors._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each figure, its unit and whose records it came from. ⚠ **The four rows marked ⚠ have no record at all** — **and the answer is not a guess dressed as a figure.** **It is the sentence that says nobody counts this, here is the only count there is, and here is what it would take to know** — **which is a smaller claim and a stronger one.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your problem from 22.1. ⚠ **Price it in a unit the reader controls, from their records if you can get them** — **and then do the conversion that does not favour you and see what is left of the case.**'));
out.push(p('**b**  Swap and perform. Your partner reads your two figures **with a long pause before the second** and then without. ⚠ They say which one they listened to for a trick.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Omar priced the fortnight at the two distant sites badly the first time: he wrote that the delay was unacceptable and the registry staff demoralised, both true, and Mr Jabri cannot spend anything against either. The second time he wrote nine lost working days a quarter at the two sites, which he took from the registry\'s own closure book and not from his own records. Asked why from their book, he said because the reader can check it in four minutes without asking him, and a figure he can check is a figure he does not have to decide whether to trust. Which is the finding of the cycle: a figure from your own records is an assertion and a figure from theirs is a fact, and you use theirs even when yours is better. Nour asked what happens if their book does not record it, and then you say so, and say what you have instead, and say what it would take to know properly — nobody records this, my own log gives nine days, and it is the only count there is. A reader who is told the strength of a figure will use it, and one who is given a confident number and finds out later will not use anything of yours again. Rim asked how big the problem figure has to be, and bigger than the ask, in the same units and in the same paragraph, because four hundred and forty hours against three hundred repeat calls is not a comparison but two facts. So Omar has to convert, and has to show the conversion: three hundred repeat calls at about forty minutes each is two hundred hours, against four hundred and forty for the afternoons — which does not favour the proposal, and that is the paragraph the reader believes. Jad asked whether it is not a mistake to show a figure against yourself, and it is the only way to be believed about the others; and in that example the case is still there, because the four hundred and forty are paid once and the two hundred are paid every year._'));
out.push(p('**Listener task:** write your partner\'s problem figure, its unit, and whose records it came from.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the second page of Omar\'s proposal, and the note under it. Answer the questions.'));
out.push(model([
  '**MAINTENANCE COVER AT THE TWO DISTANT SITES: THE PROBLEM** _(page 2 of 3 · 19 May · to Mr Jabri)_',
  '**The figure, and it is not mine.** ⚠ **Nine lost working days a quarter at Deir Atiyah and Salkhad**, **taken from the registry\'s own closure book for the four quarters to March.** **You can check it without asking me: the book is at each site and the closures are initialled.**',
  '**What a lost day is, because the term has to be defined before the figure means anything.** **A day on which the registry could not issue** — ⚠ **not a day on which the machine was slow, and not a day on which somebody worked round it.** **I have counted only full closures, and the effect of that is to make my figure smaller than the truth.**',
  '**The conversion, which does not favour what I am asking for.** ⚠ **Nine days a quarter is thirty-six days a year across two sites.** **What I am asking for is one engineer two days a week for seven months, which is about sixty days of engineer time.** **Sixty against thirty-six, and the comparison is against me on the first year.**',
  '**So here is the argument the arithmetic actually supports, and it is not the one I wanted.** ⚠ **The sixty days buy the two sites a four-hour response in place of a fortnight, and they buy it for every year after this one at the cost of the rota and not of a new post.** **The case is in the second year and I am not going to pretend it is in the first.**',
  '**One figure I do not have.** ⚠ **Nobody records what a closed registry day costs the public who come to the counter and are turned away.** **I asked at both sites and there is no count, and I am not going to invent one** — **the clerk at Salkhad says between twenty and forty people, and that is a recollection and not a record, and I have written it here as a recollection.**',
  '**And the figure that changed my mind about my own proposal.** ⚠ **Eleven of the thirty-six lost days were the same fault: a drive failure on the same model of machine, which is at nine of the eleven sites.** **Which means about a third of this problem is not a travel problem at all, and two of the sixty days I am asking for should be spent replacing nine drives.**',
  '**NOTE for the file, which did not go with the paper.** ⚠ **The drive finding came out of reading the closure book line by line, which took an afternoon, and I had been arguing about travel time for eighteen months.** **Nobody had read their book because it is their book** — **and that is the whole of this cycle in one sentence.**',
]));
out.push(item('1', 'Why does the writer define _a lost day_ before giving the figure?'));
out.push(item('2', 'What does the conversion show, and what argument does the writer make instead?'));
out.push(item('3', 'What did reading the closure book line by line produce?'));
out.push(writers([
  'A problem page: **the figure, and whose records it comes from** → **the definition of the unit you are counting** → **the conversion into the same units as the ask** → **the argument the arithmetic actually supports** → **the figure you do not have** → **and anything you found that changes your own proposal.**',
  '⚠ **Take the figure from the reader\'s records and tell them how to check it.** _The book is at each site and the closures are initialled._ **A figure the reader can verify without asking you is a figure they do not have to decide whether to trust.**',
  '**Define the unit, and say which way your definition errs.** ⚠ _I have counted only full closures, and the effect is to make my figure smaller than the truth._ **A writer who says which way they have erred is believed about the size.**',
  '**Show the conversion even when it goes against you.** ⚠ _Sixty against thirty-six, and the comparison is against me on the first year._ **Then make the argument the arithmetic supports and not the one you wanted** — **the case is in the second year, and saying so is worth more than the first year would have been.**',
  '⚠ And **mark a recollection as a recollection.** _The clerk says between twenty and forty people, and that is a recollection and not a record._ **One number dressed as a count will cost you every other number on the page.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the problem page (80 words or more).'));
out.push(p('**______________: THE PROBLEM** _(page ______ · ______________)_   **The figure, and it is not mine.** ⚠ **______________, taken from ______________\'s own ______________.** **You can check it without asking me: ______________.**   **What ______________ means.** ⚠ **Not ______________, and not ______________.** **I have counted only ______________, and the effect is ______________.**   **The conversion, which does not favour what I am asking for.** ⚠ **______________ against ______________.**   **So the argument the arithmetic supports.** ⚠ **______________, and the case is in ______________.**   **One figure I do not have.** ⚠ **Nobody records ______________, and I am not going to invent one.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The figure, with whose records it came from and how to check it',
  'The unit defined, and which way the definition errs',
  'The conversion into the same units as the ask, shown',
  'The figure you do not have, named and not invented',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their conversion only**, and the room says whether it favours the proposal and what argument is left if it does not.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full problem page (180 words or more), to the shape in the writer\'s box: the figure from their records, the unit defined, the conversion shown, the argument it supports, and the figure you do not have.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the figure from the reader\'s records with a way to check it, the unit defined, the conversion shown even against you, and any recollection marked as one.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your conversion, and then say whether it favours your proposal.** ⚠ **The room counts how many conversions in the class go against the proposer** — **and in this class it has been about half, which is the figure to put on the board.** **A room in which every conversion favours every proposal has not done the arithmetic.** Then the sentence the cycle ends on, which is Mr Darwish\'s: **nobody had read their book because it is their book.**'));
out.push(hw('Price your problem from 22.1 **in the reader\'s own records**, and bring **the page or the book you took it from**. ⚠ **Then do the conversion into the units of your ask and bring it even if it goes against you** — **and bring one figure you do not have, written as the sentence that says nobody counts it.**'));

// ===================== 22.3 =====================
out.push(pb());
out.push(h2('22.3  What you are not asking for'));
out.push(p('**Function:** naming the things you are not asking for, including one you want   ·   **Grammar:** _I am not asking for · nor am I asking · and I shall not come back for_   ·   **Pronunciation:** a renunciation said without regret in it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. ⚠ **Take a proposal of your own and list three things somebody reading it would be afraid it leads to.** **A post. A precedent. A second request in March.** **Then ask whether any of those three is ruled out anywhere on the page** — **and the answer is almost always no, because it never occurred to the writer that the reader was afraid of anything.**'));
out.push(board('This is only the first step and I am sure more will be needed later.', 'I am not asking for a post, and I shall not come back in March for one.'));
out.push(p('**b**  Which rules something out? **1** _This is a modest first step._  **2** _I am not asking for a post, and I shall not come back in March for one._  **3** _I would not expect this to grow significantly._  **4** _Nor am I asking for any part of the equipment budget._  **5** _The cost should remain manageable._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the reader of a proposal is actually deciding?   **A** whether the figure is right   **B** **whether the figure is the last figure** — and **nothing on a page that only says what it asks for can answer that**   **C** whether the writer is reliable'));
out.push(p('**b**  Listen again. **1** What did Ms Nasser rule out, and which of the three did she mind giving up?   **2** What does Ms Huda say about the phrase _a first step_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.5  The one you would quite like', [
  ['Ms Huda', 'Ms Nasser. Your training proposal was agreed in eleven days. Say what the page did.'],
  ['Hiba', '**Three sentences near the top, and they cost me nothing to write and one of them cost me something real.** ⚠ **I am not asking for a post. I am not asking for a room of our own. And I shall not come back in the spring for the other half.**'],
  ['Ms Huda', '**Which was the real one?**'],
  ['Hiba', '⚠ **The room.** **I want a room.** **I have wanted one for two years and ruling it out in writing was the hardest line on the page.**'],
  ['Ms Huda', '**And what did ruling it out buy?**'],
  ['Hiba', '⚠ **The eleven days.** **Mr Jabri told me afterwards that the room was the only thing he had been worried about** — **he had read the paper as the beginning of a building conversation.**'],
  ['Ms Huda', '**Which is what a reader of a proposal is actually deciding, and it is not what the proposal is about.** ⚠ **They are deciding whether your figure is the last figure.** **Nothing on a page that says only what it asks for can answer that.**'],
  ['Nour', 'And if you might want the room later?'],
  ['Ms Huda', '**Then you say so now and put a date on it, or you rule it out and keep your word.** ⚠ **What you must not do is leave it unsaid and then ask in March** — **because the March request does not cost you a room, it costs you every figure you ever write again.**'],
  ['Omar', 'Is that not giving away a position?'],
  ['Ms Huda', '⚠ **It is giving away a position you were not going to be given.** **Ms Nasser was never getting the room in the same paper as the afternoons** — **what the silence about it bought her was eleven weeks of hesitation instead of eleven days.**'],
  ['Rim', 'How many should there be?'],
  ['Ms Huda', '**Three, and one of them has to be something you actually want.** ⚠ **Three things you never wanted anyway is a paragraph the reader can see through in four seconds**, **and it is worse than nothing, because it tells them you are managing them.**'],
  ['Jad', 'And _a first step_?'],
  ['Ms Huda', '⚠ **Strike it out.** **_A modest first step_ is the sentence a reader fears, written by the writer, in their own hand.** **It says there will be a second step and declines to say how big.** **Nobody has ever been reassured by it and everybody writes it.**'],
  ['Hiba', '**I had written it in the February draft.**'],
  ['Ms Huda', '**And it is the one phrase in a proposal that argues against the proposal.** ⚠ **If it genuinely is the first of several, write the several** — _eight afternoons now, and the other eight in the year after next if the first eight show what I think they will show_ — **and then the reader is deciding about sixteen, which is a real decision they can actually take.**'],
  ['Omar', 'And saying it out loud?'],
  ['Ms Huda', '🔊 **Flat, and with no regret in it.** ⚠ **People say _I am not asking for a room_ with a small sigh on _room_**, **and the sigh re-opens everything the sentence shut.** **If you cannot say it without the sigh, you are not ready to write it.**'],
]));
out.push(sp());
out.push(box('Language box – what you are not asking for', [
  '**What the reader of a proposal is actually deciding is not what the proposal is about.** ⚠ **They are deciding whether your figure is the last figure** — **and nothing on a page that says only what it asks for can answer that.**',
  '**Three renunciations, and one of them has to be something you want.** ⚠ _I am not asking for a post. I am not asking for a room of our own. And I shall not come back in the spring for the other half._ **Three things you never wanted anyway is seen through in four seconds and is worse than nothing.**',
  '⚠ **The real one is the one that buys the decision.** **Ms Nasser\'s was the room, which she has wanted for two years** — **and the reader told her afterwards that the room was the only thing he had been worried about.**',
  '**You are giving away a position you were not going to be given.** ⚠ **She was never getting the room in the same paper as the afternoons** — **what the silence bought her was eleven weeks of hesitation instead of eleven days.**',
  '**If you might want it later, say so now with a date, or rule it out and keep your word.** ⚠ **The request in March does not cost you a room; it costs you every figure you ever write again.**',
  '⚠ **Strike out _a modest first step_.** **It is the sentence the reader fears, written by the writer in their own hand:** **it promises a second step and declines to say how big.** **If it genuinely is the first of several, write the several** — _eight now, and eight in the year after next if the first eight show what I think_ — **and the reader can take a real decision.**',
  '**Pronunciation.** 🔊 **Track 22.6** **Flat, with no regret in it.** ⚠ **People say _I am not asking for a room_ with a small sigh on _room_, and the sigh re-opens everything the sentence shut.** **If you cannot say it without the sigh, you are not ready to write it.**',
  '**And one thing about keeping the word afterwards, which is where most of these paragraphs are lost.** ⚠ **A renunciation is a promise with no date on it and therefore no end** — **so write it in a place you will see again**, **and if the need changes, the sentence to use is not a fresh request but** _I ruled this out in May and I am asking you to release me from that, and here is what changed._',
  '**Practise:** Rule it out. **1** a post  **2** a precedent  **3** a second request, with a date  **4** one you actually want  **5** one you may need later, written as the several rather than as a first step',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the proposal from the card. B gives **three renunciations, one of which B must say is something they would want.** ⚠ **Two rows on each card genuinely are the first of several**, and B must write the several with dates rather than ruling anything out. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the proposal)_ __________.'],
  ['B', '**I am not asking for __________. Nor am I asking for __________. And I shall not come back for __________.** _(and the one I want is __________)_'],
]));
out.push(table(['Card A – the proposal', 'Card B – the proposal'], [
  ['_Eight afternoons a year for eleven people._', '_One engineer, two days a week, for seven months._'],
  ['_⚠ Nine replacement drives, as a first batch._', '_⚠ A trial of the afternoon analyser run, three months._'],
  ['_A second steel rule for the gate._', '_A test card for the handsets, both ends._'],
  ['_⚠ One index checker for the archive, part time._', '_⚠ A plate-condition procedure, drafted by the engineer._'],
  ['_Four hours a week of the reader\'s time for proofs._', '_A date column in the committee minutes._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three renunciations and which one the speaker wants. ⚠ **The four rows marked ⚠ genuinely are the first of several** — **drives, a trial, an index, a procedure** — **and for these the honest answer is to write the several with dates and not to rule anything out.** **_A first batch_ is _a first step_ wearing work clothes.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your proposal from 22.1 and 22.2. ⚠ **Write three renunciations and mark the one you actually want** — **and then say out loud how long you have wanted it, which is the part the room will remember.**'));
out.push(p('**b**  Swap and perform. Your partner reads your real renunciation **with the sigh** and then flat. ⚠ They say which one left the question shut.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Hiba\'s training proposal was agreed in eleven days, and what the page did was three sentences near the top: I am not asking for a post, I am not asking for a room of our own, and I shall not come back in the spring for the other half. Two cost her nothing and one cost her something real — the room. She wants a room, she has wanted one for two years, and ruling it out in writing was the hardest line on the page. What it bought was the eleven days: Mr Jabri told her afterwards that the room was the only thing he had been worried about, because he had read the paper as the beginning of a building conversation. Which is what a reader of a proposal is actually deciding, and it is not what the proposal is about: they are deciding whether your figure is the last figure, and nothing on a page that says only what it asks for can answer that. Nour asked what to do if you might want the room later, and then you say so now and put a date on it, or you rule it out and keep your word — what you must not do is leave it unsaid and ask in March, because the March request does not cost you a room, it costs you every figure you ever write again. Omar asked whether that is not giving away a position, and it is giving away a position you were not going to be given: she was never getting the room in the same paper as the afternoons, and the silence about it bought her eleven weeks of hesitation instead of eleven days. Rim asked how many there should be, and three, one of which has to be something you actually want, because three things you never wanted anyway can be seen through in four seconds and are worse than nothing. And Jad asked about a modest first step, which is the sentence the reader fears written by the writer in their own hand._'));
out.push(p('**Listener task:** write your partner\'s three renunciations and the one they want.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Hiba added to her proposal in April, and the note under it. Answer the questions.'));
out.push(model([
  '**TEACHER TRAINING: WHAT I AM NOT ASKING FOR** _(page 2 of 2 · 6 April · to Mr Jabri)_',
  '**Three things, and one of them I want.** ⚠ **I am not asking for a post.** **I am not asking for a room of our own.** **And I shall not come back in the spring for the other half of the programme.**',
  '**The one I want is the room, and I am saying so rather than letting you find it out.** ⚠ **I have wanted a room for two years and I have asked for one twice.** **It is not in this paper and it will not be in this paper, and if I ask again it will be a separate request on its own merits in a different year.**',
  '**Why the post is ruled out, which is arithmetic and not generosity.** ⚠ **Eight afternoons a year is four hundred and forty hours, and a post is about seventeen hundred.** **If I needed a post I should be asking for a post** — **and a paper that asks for four hundred hours while meaning seventeen hundred is a paper that will be found out in the second year.**',
  '**Why the spring request is ruled out, and this is the one that is a promise.** ⚠ **The programme is sixteen afternoons over two years and I am asking for eight.** **I am not asking for the second eight now and I am not asking for them in the spring: I shall ask in the autumn of next year, and only if the first eight have done what I say they will do.** **That is the several, written out, so that you are deciding about sixteen and not about eight with something behind it.**',
  '**What a renunciation is worth, said plainly, because you will be weighing it.** ⚠ **It is a promise with no date on it and therefore no end.** **If the need changes I shall not send you a fresh request; I shall write that I ruled this out in April and ask you to release me from it, and say what changed.** **That is a harder letter to write and it is the only honest way out of this paragraph.**',
  '**And one sentence struck out of the February draft.** ⚠ **I had written that the programme was _a modest first step_.** **It is the sentence you were afraid of, written by me, in my own hand** — **and it promised a second step while declining to say how big.**',
  '**NOTE for my own file, which did not go with the paper.** ⚠ **The three sentences took forty minutes and the room sentence took thirty of them.** **I wrote it four times, and the first three versions all had a clause at the end explaining that a room would of course still be desirable** — **which is the sigh, in writing.**',
]));
out.push(item('1', 'Which renunciation does the writer want, and what does she say about asking for it again?'));
out.push(item('2', 'Why is the post ruled out, and what is the arithmetic?'));
out.push(item('3', 'What did the first three versions of the room sentence have at the end, and what does the note call it?'));
out.push(writers([
  'A renunciation page: **three things you are not asking for** → **the one you want, named as the one you want** → **the arithmetic behind the biggest renunciation** → **the several, written out with dates, instead of a first step** → **what a renunciation is worth and how you would honestly come out of it** → **and the sentence you have struck out.**',
  '⚠ **Name the one you want rather than letting the reader find it.** _I have wanted a room for two years and I have asked for one twice._ **A renunciation that costs nothing persuades nobody; one that is admitted to be a loss is the only kind that buys a decision.**',
  '**Give the arithmetic, so the renunciation is not read as generosity.** ⚠ _Eight afternoons is four hundred and forty hours and a post is about seventeen hundred; if I needed a post I should be asking for a post._ **Generosity is doubted and arithmetic is not.**',
  '**Write the several, with dates, in place of _a first step_.** ⚠ _Sixteen afternoons over two years; I am asking for eight, and I shall ask in the autumn of next year._ **The reader is then deciding about sixteen, which is a decision they can actually take.**',
  '⚠ And **say how you would honestly come out of it.** _I shall not send a fresh request; I shall write that I ruled this out in April and ask to be released from it._ **It is the only exit that leaves your figures worth anything.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the renunciation page (80 words or more).'));
out.push(p('**______________: WHAT I AM NOT ASKING FOR** _(page ______ · ______________)_   **Three things, and one of them I want.** ⚠ **I am not asking for ______________. I am not asking for ______________. And I shall not come back for ______________.**   **The one I want is ______________.** ⚠ **I have wanted ______________ for ______________, and if I ask again it will be ______________.**   **Why ______________ is ruled out, which is arithmetic and not generosity.** ⚠ **______________ is ______________, and ______________ is about ______________.**   **The several, written out.** ⚠ **______________ over ______________; I am asking for ______________, and I shall ask ______________.**   **And one sentence struck out.** ⚠ **I had written _______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Three renunciations, and the one you want named as such',
  'The arithmetic behind the largest one',
  'The several written out with dates, and no _first step_',
  'How you would honestly come out of a renunciation if the need changed',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their real renunciation only**, and the room says whether there is a clause at the end explaining that the thing would still be desirable.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full renunciation page (180 words or more), to the shape in the writer\'s box: three renunciations, the one you want, the arithmetic, the several with dates, and the honest exit.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: three renunciations with one you want, arithmetic rather than generosity, the several written out with dates, no _first step_, and an honest exit.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your real renunciation flat, and let the room listen for the clause at the end.** ⚠ **Almost every first draft has one** — _which would of course still be desirable_ — **and the room can hear it even when the speaker cannot.** **Then say how long you have wanted the thing you have just given up.** Then the sentence the cycle ends on, which is Ms Nasser\'s: **the first three versions all had a clause at the end, which is the sigh, in writing.**'));
out.push(hw('Write **three renunciations** for your proposal, **one of which is something you want**, and the arithmetic behind the largest. ⚠ **Then find _a first step_ or _a first batch_ or _initially_ in something you have written** — **it will be there** — **and replace it with the several, written out with dates.**'));

// ===================== 22.4 =====================
out.push(pb());
out.push(h2('22.4  The alternative you considered and rejected'));
out.push(p('**Function:** setting out the cheaper option and saying honestly why it will not do   ·   **Grammar:** _I considered ___ and rejected it because ___ · the cheaper option is ___ and it would_   ·   **Pronunciation:** the rejected option given its full value'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. ⚠ **Name the cheapest thing somebody could do instead of what you are asking for** — **and then say whether it is in your paper.** **It is almost never in the paper, and it is always the first thing the reader thinks of**, **which means the reader gets there alone and in silence.**'));
out.push(board('There is really no alternative to what I am proposing.', 'The cheaper option is nine drives at a tenth of the cost, and it fixes a third of the problem.'));
out.push(p('**b**  Which sets out an alternative honestly? **1** _No alternative has been identified._  **2** _The cheaper option is nine drives at a tenth of the cost, and it fixes a third of the problem._  **3** _Various options were considered._  **4** _Doing nothing would clearly be unacceptable._  **5** _A rota change costs nothing and would solve two of the four sites, and here is why it will not do for the other two._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say happens when the cheaper option is left out?   **A** nothing; the reader accepts the proposal   **B** **the reader finds it alone, and a reader who finds an option you did not mention concludes you had not thought of it or had hidden it** — and **both conclusions cost more than the option would have**   **C** the proposal looks stronger'));
out.push(p('**b**  Listen again. **1** What was the cheaper option in Mr Ayoub\'s case, and what did it fix?   **2** What does Ms Huda say about _doing nothing_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.7  A third of the problem for a tenth of the money', [
  ['Ms Huda', 'Mr Ayoub. The route proposal, and the thing you nearly left out.'],
  ['Tareq', '**I asked for a second vehicle on the Harasta road.** ⚠ **And the cheaper option is a rota change that costs nothing and solves two of my four late deliveries.**'],
  ['Ms Huda', '**Was it in the paper?**'],
  ['Tareq', '⚠ **No.** **I had a paragraph saying no alternative had been identified, which was not true.** **I had identified it in March and I did not like it.**'],
  ['Ms Huda', '**And what would have happened?**'],
  ['Tareq', '⚠ **Mr Jabri drives that road twice a month.** **He would have thought of the rota in about nine seconds** — **and then the question is not about vehicles, it is about why it was not in my paper.**'],
  ['Ms Huda', '**Which is the cost of leaving it out, and it is larger than the option.** ⚠ **A reader who finds an option you did not mention concludes one of two things: you had not thought of it, or you had hidden it** — **and both of those cost you more than the option ever would.**'],
  ['Nour', 'So what does the paragraph look like?'],
  ['Ms Huda', '**Three sentences, and the first one has to be generous.** ⚠ **What the cheaper option is, what it would actually achieve, and why it will not do.** **And _what it would achieve_ has to be the real figure and not a grudging one.**'],
  ['Tareq', '⚠ _A rota change costs nothing and would end the lateness on two of the four days._ **Which is half my problem for no money at all.**'],
  ['Ms Huda', '**And now say why it will not do, in the same voice.**'],
  ['Tareq', '⚠ **Because the other two days are the Harasta run and the rota cannot move them** — **both are ministry deliveries with a fixed gate time, and the gate closes at eleven.** **No arrangement of my four drivers puts a vehicle at that gate before eleven.**'],
  ['Rim', 'And if the cheap option fixes most of it?'],
  ['Ms Huda', '⚠ **Then you propose the cheap option and ask for the rest later, and you have been more useful than your original paper was.** **This is the cycle that occasionally destroys a proposal, and that is not a fault in the cycle.** **Mr Darwish found in 22.2 that nine drives are a third of his problem** — **and he put them in his own paper, against himself.**'],
  ['Hiba', 'And _doing nothing_?'],
  ['Ms Huda', '**Always on the list, and never dismissed in one line.** ⚠ **_Doing nothing_ is what will happen if you are refused**, **so you already know its cost: it is the figure from 22.2.** **A paper that says _doing nothing would be unacceptable_ has declined to use the only figure it has.**'],
  ['Jad', 'And reading the rejected option out loud?'],
  ['Ms Huda', '🔊 **At full value, at the same speed as your own proposal.** ⚠ **People read the alternative quickly and the rejection slowly, and the room hears exactly that.** **Read the rota sentence as though you were proposing it** — **and if you cannot, you have not finished thinking about it.**'],
]));
out.push(sp());
out.push(box('Language box – the alternative you considered and rejected', [
  '**The cheapest thing somebody could do instead is the first thing your reader will think of.** ⚠ **Leave it out and they find it alone, in silence** — **and conclude either that you had not thought of it or that you had hidden it, both of which cost more than the option would have.**',
  '**Three sentences, and the first has to be generous.** ⚠ **What the cheaper option is · what it would actually achieve · and why it will not do.** _A rota change costs nothing and would end the lateness on two of the four days._ **The achievement has to be the real figure and not a grudging one.**',
  '**Then the rejection, in the same voice, with a mechanism in it.** ⚠ _The other two days are the Harasta run and the rota cannot move them: both are ministry deliveries with a fixed gate time, and the gate closes at eleven._ **A rejection with no mechanism is a preference.**',
  '⚠ **And if the cheap option fixes most of it, propose the cheap option.** **You will have been more useful than your original paper was.** **Mr Darwish found that nine drives are a third of his problem and put them in his own paper, against himself.**',
  '**_Doing nothing_ is always on the list and is never dismissed in one line.** ⚠ **It is what will happen if you are refused, so you already know its cost** — **it is the figure from 22.2.** **A paper that calls it unacceptable has declined to use the only figure it has.**',
  '**The forms.** _I considered ______ and rejected it because ______._ _The cheaper option is ______ and it would ______._ _Doing nothing costs ______ a year, which is the figure at page 2._ ⚠ **And the ones to strike out:** _no alternative has been identified_ · _various options were considered_ · _clearly unacceptable_.',
  '**Pronunciation.** 🔊 **Track 22.8** **The rejected option at full value, at the same speed as your own proposal.** ⚠ **People read the alternative quickly and the rejection slowly, and the room hears exactly that.** **If you cannot read it as though you were proposing it, you have not finished thinking about it.**',
  '**And one thing about this cycle that has to be said plainly.** ⚠ **It occasionally destroys a proposal, and that is not a fault in the cycle.** **A proposal that cannot survive its own cheapest alternative being stated fairly was going to be refused in a room you were not in** — **and this way you are there, and the refusal is of a smaller thing, and it arrives in June instead of October.**',
  '**Practise:** State and reject. **1** the cheaper option  **2** what it would achieve, at full value  **3** the mechanism of the rejection  **4** _doing nothing_, with its figure  **5** one where the cheap option wins, and the paper you write instead',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the proposal from the card. B gives **the cheaper option, what it would achieve at full value, and the mechanism of the rejection.** ⚠ **Two rows on each card are ones where the cheap option wins**, and B must say so and say what paper they would write instead. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the proposal)_ __________.'],
  ['B', '**The cheaper option is __________, and it would __________. It will not do because __________.**'],
]));
out.push(table(['Card A – the proposal', 'Card B – the proposal'], [
  ['_A second vehicle on the Harasta road._', '_One engineer two days a week for the distant sites._'],
  ['_⚠ A new guillotine for the trim faults._', '_⚠ An index checker for the archive._'],
  ['_Eight afternoons for the escalation handlers._', '_A second steel rule for the gate._'],
  ['_⚠ A third analyser for the afternoon run._', '_⚠ A second sub-editor for the bulletin._'],
  ['_A test card at both ends for the handsets._', '_A date column in the committee minutes._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the option, its real achievement and the mechanism of the rejection. ⚠ **In the four rows marked ⚠ the cheap option wins** — **a guillotine against a blade change, a checker against a sampling rule, an analyser against a rota, a sub-editor against a shorter bulletin** — **and the pairs must say what paper they would write instead.** **A pair that defends all ten proposals has not done the cycle.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your proposal. ⚠ **Write the cheapest alternative, what it would really achieve, and the mechanism of your rejection** — **and then decide honestly whether your proposal has survived it.**'));
out.push(p('**b**  Swap and perform. Your partner reads your alternative **quickly** and your rejection **slowly**, then both at the same speed. ⚠ They say which version they believed.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Tareq asked for a second vehicle on the Harasta road, and the cheaper option is a rota change that costs nothing and solves two of his four late deliveries. It was not in the paper: he had a paragraph saying no alternative had been identified, which was not true — he had identified it in March and did not like it. Mr Jabri drives that road twice a month and would have thought of the rota in about nine seconds, and then the question is not about vehicles but about why it was not in the paper. Which is the cost of leaving it out, and it is larger than the option: a reader who finds an option you did not mention concludes either that you had not thought of it or that you had hidden it, and both cost more than the option ever would. Nour asked what the paragraph looks like, and three sentences, the first of which has to be generous — what the cheaper option is, what it would actually achieve, and why it will not do — and the achievement has to be the real figure and not a grudging one. Tareq gave his: a rota change costs nothing and would end the lateness on two of the four days, which is half his problem for no money at all. Then the rejection in the same voice: the other two days are the Harasta run and the rota cannot move them, because both are ministry deliveries with a fixed gate time and the gate closes at eleven. Rim asked what happens if the cheap option fixes most of it, and then you propose the cheap option and ask for the rest later, and you have been more useful than your original paper was. Hiba asked about doing nothing, which is always on the list and never dismissed in one line: it is what will happen if you are refused, so you already know its cost, and it is the figure from 22.2. A paper that calls it unacceptable has declined to use the only figure it has. And Jad asked about reading the rejected option out loud: at full value, at the same speed as your own proposal, because people read the alternative quickly and the rejection slowly and the room hears exactly that._'));
out.push(p('**Listener task:** write your partner\'s cheaper option, its real achievement and the mechanism of the rejection.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the alternatives page from Tareq\'s proposal, and the note under it. Answer the questions.'));
out.push(model([
  '**THE HARASTA ROUTE: WHAT I CONSIDERED INSTEAD** _(page 3 of 4 · 24 May · to Mr Jabri)_',
  '**The cheaper option, and it is a good one.** ⚠ **A rota change costs nothing at all.** **Moving the Jaramana run to the afternoon would end the lateness on two of my four late days, which is half the problem for no money** — **and you would be entitled to ask why I am not simply doing that and stopping.**',
  '**Why it will not do for the other two days, and the mechanism is the gate.** ⚠ **The remaining two are ministry deliveries on the Harasta road and the ministry gate closes at eleven.** **No arrangement of four drivers and three vehicles puts a vehicle at that gate before eleven on a day when the Harasta run and the Douma run both have to be made** — **because one vehicle cannot be in two places and the third vehicle has been off the road since February.**',
  '**What I am therefore asking for, which is smaller than what I asked for in March.** ⚠ **I am doing the rota change this month, whatever you decide.** **And I am asking for the second vehicle for the two Harasta days only** — **two days a week and not five.**',
  '**_Doing nothing_, with its figure, because you should not have to ask me for it.** ⚠ **Four late days a month on ministry deliveries.** **The ministry\'s own gate book records a late arrival as a refused delivery, and there were eleven refused in the four months to April** — **which is their count and not mine, and you can see it at the gate.**',
  '**The third option, which I rejected and which somebody will raise.** ⚠ **Hiring a vehicle for the two days.** **It works, and it costs about a third more over a year than buying**, **and at the eighteen-month point it has cost more than the vehicle.** **If the decision has to be this year\'s money rather than next year\'s, hiring is the better answer and I would not argue with it.**',
  '**And what has changed in my own view since March.** ⚠ **I asked for five days of a vehicle in March and I am asking for two now.** **The rota change did that, and I found it in March and did not put it in the paper, because I had already decided what I wanted** — **which cost me two months and a paper that was refused in nine seconds by somebody who drives that road.**',
  '**NOTE for my own file, which did not go with the paper.** ⚠ **Writing the rota sentence at full value is what produced the smaller ask.** **While I was writing it badly, the vehicle was five days; the first time I wrote it as though I were proposing it, the answer was two.** **The cycle did not weaken the paper. It found the real figure.**',
]));
out.push(item('1', 'What does the rota change achieve, and what is the mechanism that stops it doing the rest?'));
out.push(item('2', 'What is the third option, and under what condition does the writer say it is better?'));
out.push(item('3', 'What does the note say writing the rota sentence at full value produced?'));
out.push(writers([
  'An alternatives page: **the cheaper option, stated generously** → **what it really achieves** → **the mechanism of the rejection** → **what you are therefore asking for, which may be smaller** → **_doing nothing_ with its figure from their records** → **the third option somebody will raise** → **and what has changed in your own view.**',
  '⚠ **Say the sentence your reader is already forming.** _You would be entitled to ask why I am not simply doing that and stopping._ **A paper that puts the reader\'s objection in the reader\'s words has nothing left to be caught out by.**',
  '**Give the rejection a mechanism, not a preference.** ⚠ _One vehicle cannot be in two places and the third has been off the road since February._ **A mechanism can be checked and a preference can only be overruled.**',
  '**Reduce the ask if the alternative has reduced it.** ⚠ _I asked for five days in March and I am asking for two now._ **A proposal that gets smaller between drafts is the most persuasive document in this unit, and it cannot be faked.**',
  '⚠ And **concede the condition under which you lose.** _If the decision has to be this year\'s money, hiring is the better answer and I would not argue with it._ **Naming the condition that beats you is what makes your own recommendation worth reading.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the alternatives page (80 words or more).'));
out.push(p('**______________: WHAT I CONSIDERED INSTEAD** _(page ______ · ______________)_   **The cheaper option, and it is a good one.** ⚠ **______________ costs ______________.** **It would ______________, which is ______________** — **and you would be entitled to ask ______________.**   **Why it will not do, and the mechanism is ______________.** ⚠ **______________ because ______________.**   **What I am therefore asking for, which is smaller than ______________.** ⚠ **______________.**   **_Doing nothing_, with its figure.** ⚠ **______________, from ______________\'s own ______________.**   **The third option, which somebody will raise.** ⚠ **______________. It works, and ______________. If ______________, it is the better answer.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The cheaper option stated generously, with its real achievement',
  'A mechanism in the rejection, not a preference',
  '_Doing nothing_ priced from the reader\'s own records',
  'The condition under which your own recommendation loses',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their cheaper option only**, and the room says whether it sounds like something the writer would propose.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full alternatives page (180 words or more), to the shape in the writer\'s box: the cheap option at full value, the mechanism of the rejection, the ask as it now stands, _doing nothing_ with its figure, and the condition under which you lose.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the cheaper option stated generously, a mechanism in the rejection, _doing nothing_ priced from their records, and the condition under which your recommendation loses.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your cheaper option as though you were proposing it, and then say whether your ask has got smaller.** ⚠ **The room counts the proposals that shrank** — **and those are the ones that will be agreed.** **Then the harder admission: did you know about the cheap option before today, and for how long?** Then the sentence the cycle ends on, which is Mr Ayoub\'s: **I found it in March and did not put it in the paper, because I had already decided what I wanted.**'));
out.push(hw('Write **the cheapest alternative** to your proposal **as though you were proposing it**, with what it would really achieve. ⚠ **Then write the mechanism of your rejection** — **and then look at your ask again and see whether it has got smaller.** **If it has not, read your own alternative aloud once more.**'));

// ===================== 22.5 =====================
out.push(pb());
out.push(h2('22.5  What it looks like if it fails'));
out.push(p('**Function:** stating how the reader will know it has not worked, and by when   ·   **Grammar:** the failure condition — _if by ___ ___ has not ___, it has not worked_   ·   **Pronunciation:** the failure date given as plainly as the start date'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. ⚠ **Ask how anybody would know that something you proposed had not worked** — **and in what month they would know it.** **In almost every case the honest answer is that nobody would ever know, because nothing was ever going to be measured** — **and a thing that cannot fail cannot be shown to have worked either, which is 21.1 arriving in a different unit.**'));
out.push(board('We will of course keep it under review and report back in due course.', 'If by March the repeat calls have not fallen below two hundred, it has not worked.'));
out.push(p('**b**  Which is a failure condition? **1** _Progress will be monitored._  **2** _If by March the repeat calls have not fallen below two hundred, it has not worked._  **3** _We will review the position after a suitable period._  **4** _If fewer than nine of the eleven have completed four afternoons by January, I shall say so._  **5** _I am confident this will produce real benefits._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say a proposal with no failure condition asks for?   **A** a decision   **B** **money with no end to it** — and **a reader who cannot be shown that a thing failed will be asked for more of it every year by somebody who believes it is working**   **C** too much trust'));
out.push(p('**b**  Listen again. **1** What failure condition did Mr Attar write, and what did it cost him to write it?   **2** What does Ms Huda say about who should be told?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.9  How you will know it did not work', [
  ['Ms Huda', 'Mr Attar. Your forum proposal has the sentence most proposals do not have. Read it.'],
  ['Jad', '⚠ _If by the end of March fewer than sixty of the hundred and ten engineers have posted a question, the forum has not worked and I shall say so in writing._'],
  ['Ms Huda', '**And what did that sentence cost you?**'],
  ['Jad', '⚠ **Two nights.** **Because sixty is a real number and I think the true figure will be about forty-five.**'],
  ['Ms Huda', '**So why sixty?**'],
  ['Jad', '⚠ **Because forty-five is the number I would be able to explain away**, **and sixty is the number that would make the thing worth the machine it sits on.** **If it is forty-five, it has not worked, and I shall have to say so.**'],
  ['Ms Huda', '**Which is what a failure condition is for, and it is not for the reader.** ⚠ **It is the only thing that stops you, in March, from being a person who explains why forty-five was always the realistic figure.**'],
  ['Nour', 'And what does the reader get out of it?'],
  ['Ms Huda', '**An end.** ⚠ **A proposal with no failure condition is asking for money with no end to it** — **and a reader who cannot be shown that a thing failed will be asked for more of it every year by somebody who sincerely believes it is working.**'],
  ['Omar', 'What makes a usable condition?'],
  ['Ms Huda', '**Three things.** ⚠ **A figure that could actually come out the wrong way.** **A date that is sooner than the next request.** **And somebody who is told, who is not you.**'],
  ['Rim', 'Why somebody who is not me?'],
  ['Ms Huda', '⚠ **Because you will be the last person to believe it.** **Name the person and the month** — _I shall write to Mr Jabri in the first week of April_ — **and the sentence now has a mechanism and not an intention.**'],
  ['Hiba', 'And if the figure is on the edge?'],
  ['Ms Huda', '**Then say what you will do at the edge, now, in advance.** ⚠ _At fifty I shall ask for one more quarter and no more money; below fifty I shall close it._ **A writer who decides the edge in October is making a judgement; the same writer deciding it in March is defending a position.**'],
  ['Jad', '**And if it has worked?**'],
  ['Ms Huda', '⚠ **Then the same sentence is worth more to you than to anybody.** **You have a figure, a date and a named witness** — **and the next proposal you write will be read by a man who has seen you call your own result.** **That is the only kind of credit in this unit that compounds.**'],
  ['Tareq', 'And saying the failure date out loud?'],
  ['Ms Huda', '🔊 **As plainly as the start date, and in the same breath as it.** ⚠ _Starting in October; and if it has not worked by March I shall say so._ **People drop their voice on the second half, and a dropped voice there tells the room the sentence is a formality.**'],
]));
out.push(sp());
out.push(box('Language box – what it looks like if it fails', [
  '**A failure condition needs three things.** ⚠ **A figure that could actually come out the wrong way · a date sooner than the next request · and somebody who is told, who is not you.** _If by the end of March fewer than sixty of the hundred and ten have posted a question, it has not worked, and I shall write to Mr Jabri in the first week of April._',
  '⚠ **It is not for the reader.** **It is the only thing that stops you, in March, from being the person who explains why forty-five was always the realistic figure.**',
  '**And what the reader gets is an end.** ⚠ **A proposal with no failure condition asks for money with no end to it** — **and a reader who cannot be shown that a thing failed will be asked for more of it every year by somebody who sincerely believes it is working.**',
  '**Choose the figure that makes the thing worth doing, not the figure you could explain away.** ⚠ **Mr Attar wrote sixty and expects forty-five.** **Sixty is the number that justifies the machine; forty-five is the number he could talk round in April.**',
  '**Name somebody who is not you.** ⚠ **You will be the last person to believe it.** _I shall write to Mr Jabri in the first week of April_ **gives the sentence a mechanism instead of an intention.**',
  '⚠ **Decide the edge now.** _At fifty I shall ask for one more quarter and no more money; below fifty I shall close it._ **A writer who decides the edge in October is making a judgement; the same writer deciding it in March is defending a position.**',
  '**Pronunciation.** 🔊 **Track 22.10** **The failure date as plainly as the start date, and in the same breath.** ⚠ _Starting in October; and if it has not worked by March I shall say so._ **A dropped voice on the second half tells the room the sentence is a formality.**',
  '**And one thing for the case where it works, which is the part nobody thinks about when writing it.** ⚠ **The sentence is then worth more to you than to anybody else.** **You have a figure, a date and a named witness** — **and your next proposal is read by somebody who has seen you call your own result.** **It is the only credit in this unit that compounds.**',
  '**Practise:** Write the failure condition. **1** with a figure that could go wrong  **2** with a date sooner than the next request  **3** with a named person who is not you  **4** with the edge decided in advance  **5** one where the honest figure is lower than the justifying figure, and what you do about that',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the proposal from the card. B gives **the failure condition: a figure, a date, a named person and the edge.** ⚠ **Two rows on each card have no measurable outcome at all**, and B must say what would have to start being counted, and from when. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the proposal)_ __________.'],
  ['B', '**If by __________ __________ has not __________, it has not worked, and I shall tell __________ in __________.**'],
]));
out.push(table(['Card A – the proposal', 'Card B – the proposal'], [
  ['_Eight afternoons for the escalation handlers._', '_A forum for a hundred and ten engineers._'],
  ['_⚠ A plate-condition procedure._', '_⚠ A date column in the committee minutes._'],
  ['_One engineer two days a week at the distant sites._', '_A test card for the handsets at both ends._'],
  ['_⚠ A second steel rule and a definition of the top layer._', '_⚠ Eight afternoons of training for the index checkers._'],
  ['_The afternoon analyser run moved forward by an hour._', '_A second vehicle on the Harasta road for two days._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the figure, the date, the person and the edge. ⚠ **The four rows marked ⚠ have nothing measurable yet** — **a procedure, a column, a rule, a course** — **and the honest answer is to name what would have to start being counted and from when.** **_We shall see how it goes_ is the answer to catch, and somebody always gives it.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your proposal. ⚠ **Write the failure condition with all four parts** — **and then write, privately, the figure you actually expect**, **and look at the two numbers together.**'));
out.push(p('**b**  Swap and perform. Your partner reads your start date and failure date **dropping their voice on the second** and then level. ⚠ They say which one sounded like a formality.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Jad\'s forum proposal carries the sentence most proposals do not have: if by the end of March fewer than sixty of the hundred and ten engineers have posted a question, the forum has not worked and he will say so in writing. It cost him two nights, because sixty is a real number and he thinks the true figure will be about forty-five. Asked why sixty, he said because forty-five is the number he would be able to explain away and sixty is the number that would make the thing worth the machine it sits on — and if it is forty-five, it has not worked and he will have to say so. Which is what a failure condition is for, and it is not for the reader: it is the only thing that stops you, in March, from being a person who explains why forty-five was always the realistic figure. Nour asked what the reader gets out of it, and an end — a proposal with no failure condition is asking for money with no end to it, and a reader who cannot be shown that a thing failed will be asked for more of it every year by somebody who sincerely believes it is working. Omar asked what makes a usable condition, and three things: a figure that could actually come out the wrong way, a date sooner than the next request, and somebody who is told, who is not you. Rim asked why somebody who is not her, and because you will be the last person to believe it — name the person and the month and the sentence has a mechanism instead of an intention. Hiba asked what happens if the figure is on the edge, and then you say what you will do at the edge now, in advance, because a writer who decides the edge in October is making a judgement and the same writer deciding it in March is defending a position. And Jad asked what happens if it has worked, and then the same sentence is worth more to him than to anybody else: he has a figure, a date and a named witness, and his next proposal will be read by a man who has seen him call his own result, which is the only kind of credit in this unit that compounds._'));
out.push(p('**Listener task:** write your partner\'s figure, date, named person and edge.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the failure page from Jad\'s proposal, and the note under it. Answer the questions.'));
out.push(model([
  '**THE ENGINEERS\' FORUM: HOW YOU WILL KNOW IT HAS NOT WORKED** _(page 4 of 4 · 2 June · to Mr Jabri)_',
  '**The condition, and it is one sentence.** ⚠ **If by 31 March fewer than sixty of the hundred and ten engineers have posted at least one question, the forum has not worked.** **I shall write to you in the first week of April and say so.**',
  '**Why sixty and not forty-five.** ⚠ **Forty-five is the figure I privately expect and it is the figure I could explain away in April.** **Sixty is the figure at which the forum is worth the machine, the moderation and the hundred and ten people\'s time** — **so sixty is the figure that goes on the page, and I am aware of what I have done.**',
  '**What happens at the edge, decided now rather than in March.** ⚠ **Between fifty and sixty I shall ask you for one further quarter and for no further money, and I shall say in the same letter what I think changed.** **Below fifty I shall close it and write the reasons up for whoever tries this next, which is the only useful thing a failure produces.**',
  '**What I am not going to count, and why.** ⚠ **Not visits.** **A visit count would give me a number in the thousands within a fortnight and it would mean nothing** — **eleven of our own engineers would produce most of it, because they are the people who look at a thing eleven times.** **A question posted is a person who had a problem and chose this instead of the telephone, and that is the only thing I am claiming the forum does.**',
  '**And one figure that is already in from the pilot, which does not help me.** ⚠ **In the four-week pilot, nineteen of the hundred and ten posted a question and fourteen of the nineteen were in the first week.** **Extended across six months that is well short of sixty, and the pilot is the strongest evidence against this paper** — **which is why it is on this page rather than left for you to find.**',
  '**What I am asking you to hold me to.** ⚠ **The letter in April, whatever it says.** **If it has worked you will have a figure and a date from somebody who set them before the result** — **and that is worth more to me, next time I write to you, than this forum is.**',
  '**NOTE for my own file, which did not go with the paper.** ⚠ **I wrote _progress will be reviewed_ in the first draft and it took me a week to see that it is a sentence with nobody in it and no month in it.** **Then I wrote sixty, and then I did not send the paper for two nights.** **The two nights are the honest part of this proposal and the forty-five is what I think will happen.**',
]));
out.push(item('1', 'Why is the figure sixty rather than forty-five?'));
out.push(item('2', 'Why does the writer refuse to count visits?'));
out.push(item('3', 'What does the pilot figure show, and why is it on this page?'));
out.push(writers([
  'A failure page: **the condition in one sentence** → **why that figure and not the one you expect** → **the edge, decided now** → **what you are not going to count, with the reason** → **any evidence that is already against you** → **and what you are asking the reader to hold you to.**',
  '⚠ **Put the figure that justifies the thing, not the figure you could explain away.** _Forty-five is what I privately expect and sixty is the figure at which it is worth the machine._ **Saying both, in the same paragraph, is what makes the rest of the page credible.**',
  '**Decide the edge in advance and in writing.** ⚠ _Between fifty and sixty: one further quarter and no further money. Below fifty: close it._ **The edge decided in October is a judgement and the same edge decided in March is a defence.**',
  '**Refuse the easy count, and say why it is easy.** ⚠ _A visit count would give me thousands in a fortnight and mean nothing: eleven of our own engineers would produce most of it._ **A writer who names the number they could have used has told the reader what they are not doing.**',
  '⚠ And **put the evidence against you on your own page.** _Nineteen in the four-week pilot, fourteen of them in the first week._ **It is the strongest thing against the paper and the strongest thing in favour of the writer, and only one of those is recoverable if the reader finds it alone.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the failure page (80 words or more).'));
out.push(p('**______________: HOW YOU WILL KNOW IT HAS NOT WORKED** _(page ______ · ______________)_   **The condition.** ⚠ **If by ______________ fewer than ______________ have ______________, it has not worked.** **I shall write to ______________ in ______________ and say so.**   **Why ______ and not ______.** ⚠ **______ is the figure I privately expect; ______ is the figure at which ______________.**   **What happens at the edge, decided now.** ⚠ **Between ______ and ______ I shall ______________. Below ______ I shall ______________.**   **What I am not going to count, and why.** ⚠ **Not ______________. It would ______________ and it would mean ______________.**   **And one figure already in that does not help me.** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A figure that could come out the wrong way, with a date',
  'A named person who is not the writer',
  'The edge decided in advance, both sides of it',
  'The easy count refused, with the reason it is easy',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their condition only**, and the room says whether the figure could actually come out the wrong way.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full failure page (180 words or more), to the shape in the writer\'s box: the condition, the two figures, the edge, the count you refuse, and the evidence against you.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a figure that could go the wrong way with a date, a named person who is not the writer, the edge decided in advance, and the easy count refused with its reason.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your condition, and then say the figure you privately expect.** ⚠ **The room writes down both numbers for each speaker** — **and the gap between them is the only honest measure of a proposal in this unit.** **A room in which the two numbers are the same has not written a condition; it has written a prediction.** Then the sentence the cycle ends on, which is Mr Attar\'s: **forty-five is the number I would be able to explain away.**'));
out.push(hw('Write **the failure condition** for your proposal: **a figure, a date, a named person who is not you, and the edge decided in advance.** ⚠ **Then write the figure you privately expect, on the same sheet, and keep it.** **If the two numbers are the same you have written a prediction** — **and if the second is lower, you have found out something about your proposal that nobody else could have told you.**'));

// ===================== 22.6 =====================
out.push(pb());
out.push(h2('22.6  The whole proposal'));
out.push(p('**Function:** assembling the whole paper — ask, problem, renunciations, alternatives, failure, decision   ·   **Grammar:** the decision line — _what I need from you is ___ by ____   ·   **Pronunciation:** reading a one-page summary aloud in ninety seconds'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. ⚠ **Put the parts of a proposal in the order a reader needs them:** _the ask · what you need from them and by when · the problem in their units · what you are not asking for · the alternative you rejected · how they will know it failed._ **Then say which part most papers put first and which part most papers leave out altogether.**'));
out.push(board('I attach a paper on the escalation position for your consideration.', 'What I need from you is a yes or a no by 10 June. The paper is three pages.'));
out.push(p('**b**  Which belongs on the first page? **1** the history of the problem  **2** the ask  **3** what you need from the reader, and by when  **4** what you are not asking for  **5** the alternative you rejected'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say about the decision line?   **A** it is implied by the ask   **B** **it is a different sentence from the ask and most papers have neither** — and **a reader who is not told what is wanted from them will do the thing that is always available, which is to think about it**   **C** it belongs at the end'));
out.push(p('**b**  Listen again. **1** What is the difference between the ask and the decision line?   **2** What does Ms Huda say about the length of a proposal?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.11  A yes or a no by the tenth', [
  ['Ms Huda', 'Six parts, and the five cycles have given you five. Ms Sabbagh, name them.'],
  ['Nour', '**The ask. The problem in his units. What I am not asking for. The alternative I rejected. And how he will know it failed.** ⚠ **And the one we have not done is what I need from him.**'],
  ['Ms Huda', '**Which is not the same sentence as the ask, and most papers have neither.** ⚠ **The ask is _eight afternoons for eleven people from October_.** **The decision line is _what I need from you is a yes or a no by 10 June_.**'],
  ['Omar', 'Is the second not obvious from the first?'],
  ['Ms Huda', '⚠ **No, and this is where more proposals die than anywhere else.** **The ask tells him what the thing is.** **It does not tell him whether he is being asked to decide, to comment, to forward it, or to be informed** — **and those are four different afternoons of his.**'],
  ['Nour', '**He forwarded my February paper to the training section.**'],
  ['Ms Huda', '**Which was a reasonable thing to do with a paper that did not say what it wanted from him.** ⚠ **A reader who is not told what is wanted will do the thing that is always available, which is to think about it** — **or to send it to somebody whose problem it looks like.**'],
  ['Rim', 'And what are the forms?'],
  ['Ms Huda', '⚠ _What I need from you is a yes or a no by ______._ _What I need from you is a signature on page 4._ _I am not asking you to decide; I am asking you to forward this to ______ with a line of your own._ **Four words of difference and four different outcomes.**'],
  ['Jad', 'How long should the whole paper be?'],
  ['Ms Huda', '**One page, and then as many pages as the figures need.** ⚠ **The first page is the whole proposal** — **ask, decision line, the problem figure, the renunciations** — **and pages two to four are where a reader goes when they want to check something.**'],
  ['Hiba', 'Nobody reads past page one.'],
  ['Ms Huda', '⚠ **Nobody reads past page one in order, and that is not the same thing.** **They read page one, and then they jump to the one number they do not believe.** **So every figure on page one must have a page number beside it** — _the thirty-six lost days are at page 2, paragraph 1_ — **and then the jump lands where you want it to.**'],
  ['Nour', 'And the history of the problem?'],
  ['Ms Huda', '⚠ **Page two at the earliest, and in most papers it should not be there at all.** **A reader who needs the history will ask for it** — **and a page one that opens with how we arrived here has spent its first third on the only part of the paper that cannot be acted on.**'],
  ['Tareq', 'And the summary out loud?'],
  ['Ms Huda', '🔊 **Ninety seconds, the whole of page one, and nothing added.** ⚠ **People add while they read** — _and of course the real problem behind all this is_ — **and the addition is always the part they were least sure of.** **If ninety seconds is not enough, page one is too long and not your delivery.**'],
]));
out.push(sp());
out.push(box('Language box – the whole proposal', [
  '**Six parts, in the order a reader needs them.** ⚠ **1 The ask · 2 what you need from them and by when · 3 the problem in their units · 4 what you are not asking for · 5 the alternative you rejected · 6 how they will know it failed.**',
  '**The decision line is not the ask.** ⚠ **The ask tells the reader what the thing is; the decision line tells them whether they are deciding, commenting, forwarding or being informed** — **and those are four different afternoons of theirs.**',
  '**It is where more proposals die than anywhere else.** ⚠ **Ms Sabbagh\'s February paper was forwarded to the training section**, **which was a reasonable thing to do with a paper that did not say what it wanted from the reader.**',
  '**The forms, and four words of difference give four outcomes.** ⚠ _What I need from you is a yes or a no by 10 June._ _What I need is a signature on page 4._ _I am not asking you to decide; I am asking you to forward this with a line of your own._ _This is for information and needs nothing from you._',
  '**One page, and then as many pages as the figures need.** ⚠ **Page one is the whole proposal; pages two to four are where a reader goes to check something.**',
  '⚠ **Nobody reads past page one in order, and that is not the same as not reading past page one.** **They read page one and then jump to the one number they do not believe** — **so give every figure on page one a page reference,** _the thirty-six lost days are at page 2, paragraph 1_, **and the jump lands where you want it to.**',
  '**Pronunciation.** 🔊 **Track 22.12** **Ninety seconds, the whole of page one, and nothing added.** ⚠ **People add while they read** — _and of course the real problem behind all this is_ — **and the addition is always the part they were least sure of.** **If ninety seconds is not enough, page one is too long.**',
  '**And one thing about the order, which is the opposite of how papers are written.** ⚠ **You write it last to first and you read it first to last.** **The failure condition is written in October and the ask is finished in May** — **because until you know what failure looks like you do not know what you are asking for, and Mr Ayoub\'s ask went from five days to two for exactly that reason.**',
  '**Practise:** Assemble. **1** the ask  **2** the decision line  **3** the problem figure with its page reference  **4** two renunciations  **5** the failure condition, in one sentence',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names a proposal from the card. B assembles **page one aloud, in the six parts, in ninety seconds.** ⚠ **Two rows on each card are papers where the decision line is _not_ a yes or a no**, and B must say which of the four forms it is and why. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the proposal)_ __________.'],
  ['B', '**The ask: __________. What I need from you: __________. The problem: __________. Not asking for: __________. Instead of this: __________. If it fails: __________.**'],
]));
out.push(table(['Card A – the proposal', 'Card B – the proposal'], [
  ['_Eight afternoons for eleven escalation handlers._', '_One engineer two days a week at the distant sites._'],
  ['_⚠ Nine replacement drives, found while writing page 2._', '_⚠ A plate-condition procedure, to be written by somebody else._'],
  ['_A second vehicle for two Harasta days._', '_A forum for a hundred and ten engineers._'],
  ['_⚠ A definition of the top layer, for issue 4._', '_⚠ A date column in the committee minutes._'],
  ['_A test card for the handsets at both ends._', '_The analyser run moved forward by an hour._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the six parts, and which of the four decision lines each paper needs. ⚠ **The four rows marked ⚠ are not yes-or-no papers** — **drives need a signature, a procedure needs forwarding to its owner, a definition needs nothing but notice, and a minutes column needs the chairman and not the budget.** **A pair that asks for a yes on all ten has not read the cycle.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Assemble your own page one from 22.1 to 22.5, in the six parts, with a page reference against every figure. ⚠ **Then read it to your partner in ninety seconds** — **and if you do not finish, cut page one rather than reading faster.**'));
out.push(p('**b**  Swap and perform. Your partner reads your page one **adding one sentence of their own invention** and then exactly as written. ⚠ You say which sentence they added, and whether it is the part you were least sure of.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Six parts, and the five cycles had given the class five. Nour named the ask, the problem in his units, what she is not asking for, the alternative she rejected, and how he will know it failed — and said the one not yet done is what she needs from him. Which is not the same sentence as the ask, and most papers have neither: the ask is eight afternoons for eleven people from October, and the decision line is what I need from you is a yes or a no by the tenth of June. Omar asked whether the second is not obvious from the first, and no, and this is where more proposals die than anywhere else: the ask tells him what the thing is and does not tell him whether he is being asked to decide, to comment, to forward it or to be informed, and those are four different afternoons of his. Nour said he forwarded her February paper to the training section, which was a reasonable thing to do with a paper that did not say what it wanted from him — a reader who is not told what is wanted will do the thing that is always available, which is to think about it, or to send it to somebody whose problem it looks like. Rim asked about the forms, and four words of difference give four different outcomes. Jad asked how long the whole paper should be, and one page, and then as many pages as the figures need: the first page is the whole proposal and pages two to four are where a reader goes when they want to check something. Hiba said nobody reads past page one, and nobody reads past page one in order, which is not the same thing — they read page one and then jump to the one number they do not believe, so every figure on page one needs a page reference beside it. And Tareq asked about the summary out loud: ninety seconds, the whole of page one and nothing added, because people add while they read and the addition is always the part they were least sure of — and if ninety seconds is not enough, page one is too long and the delivery is not the problem._'));
out.push(p('**Listener task:** write your partner\'s six parts, and which decision line their paper needs.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read page one of Nour\'s finished proposal, and the note under it. Answer the questions.'));
out.push(model([
  '**ESCALATION HANDLING: PROPOSAL** _(page 1 of 3 · 12 May · to Mr Jabri · replaces my paper of 9 February)_',
  '**1  What I am asking for.** ⚠ **Eight afternoons a year for eleven people, starting in October.** **Four hundred and forty hours of staff time in the year, and no money.**',
  '**2  What I need from you.** ⚠ **A yes or a no by 10 June.** **Not a comment, and not a referral to the training section** — **the October rota is drawn on 15 June and an answer after that date costs us until January whatever it says.**',
  '**3  The problem, in your units.** ⚠ **Three hundred repeat calls a year**, **from the switchboard\'s own call book for the twelve months to March** _(page 2, paragraph 1 — and the book is in the switchboard room and the duplicates are initialled)_. **At about forty minutes each that is two hundred hours a year, against four hundred and forty once** — **so this paper does not pay for itself in the first year and pays for itself every year after it** _(page 2, paragraph 3)_.',
  '**4  What I am not asking for.** ⚠ **Not another person. Not any part of the equipment budget. And not protection for the afternoons: if a ward goes down on a Tuesday the afternoon is lost and I shall not ask for it back** _(page 3, paragraph 1)_.',
  '**5  What I considered instead.** ⚠ **A printed promise slip at every desk, which costs nothing and which I use already.** **It catches the promises that are made in writing and it catches none of the ones made on the telephone, which is thirty-one of the thirty-four** _(page 3, paragraph 2)_. **Doing nothing costs the three hundred calls above, which is the only figure in this paper I did not have to estimate.**',
  '**6  How you will know it has not worked.** ⚠ **If the repeat calls for the twelve months to March of next year are not below two hundred and twenty, it has not worked, and I shall write and say so in the first week of April.** **Between two hundred and twenty and two hundred and sixty I shall ask for one more year and no more afternoons; above two hundred and sixty I shall stop it** _(page 3, paragraph 4)_.',
  '**NOTE for my own file, which did not go with the paper.** ⚠ **I wrote this page last and in the order 6, 5, 4, 3, 2, 1.** **The ask was eight afternoons for all twenty-two people until I wrote paragraph 6 and could not name a figure that would show it had worked for twenty-two** — **and then it became eleven, and the paper became something I can defend in a room.**',
]));
out.push(item('1', 'Why does the proposal need an answer by 10 June, and what are the two things the writer says she does not want?'));
out.push(item('2', 'What does the printed promise slip catch, and what does it miss?'));
out.push(item('3', 'In what order was page one written, and what did writing paragraph 6 change?'));
out.push(writers([
  'Page one of a proposal, numbered 1 to 6: **the ask** → **what you need from the reader and by when** → **the problem in their units, with page references** → **what you are not asking for** → **what you considered instead, with _doing nothing_ priced** → **and how they will know it has not worked.**',
  '⚠ **Say what you do not want from them as well as what you do.** _Not a comment, and not a referral to the training section._ **A paper that rules out the two easy responses has removed the two things that will otherwise happen to it.**',
  '**Put a page reference against every figure on page one.** ⚠ _Page 2, paragraph 1 — and the book is in the switchboard room and the duplicates are initialled._ **Nobody reads past page one in order; they jump to the number they do not believe, and the reference decides where they land.**',
  '**Keep the arithmetic that is against you on page one, not on page three.** ⚠ _This paper does not pay for itself in the first year and pays for itself every year after it._ **On page one it is candour; on page three it is something the reader found.**',
  '⚠ And **write the page backwards, 6 to 1.** **Ms Sabbagh\'s ask was eight afternoons for twenty-two people until she wrote the failure condition and could not name a figure that would show success for twenty-two** — **and then it became eleven.** **The failure condition is what tells you what you are actually asking for.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write page one of the proposal (80 words or more).'));
out.push(p('**______________: PROPOSAL** _(page 1 of ______ · ______________ · to ______________)_   **1  What I am asking for.** ⚠ **______________, starting ______________.**   **2  What I need from you.** ⚠ **______________ by ______________.** **Not ______________, and not ______________** — **because ______________.**   **3  The problem, in your units.** ⚠ **______________, from ______________\'s own ______________** _(page ______)_. **At ______________ that is ______________, against ______________.**   **4  What I am not asking for.** ⚠ **Not ______________. Not ______________. And not ______________.**   **5  What I considered instead.** ⚠ **______________, which costs ______________.** **It catches ______________ and misses ______________.**   **6  How you will know it has not worked.** ⚠ **If by ______________ ______________, it has not worked, and I shall ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Six numbered parts in the reader\'s order, on one page',
  'A decision line that says what you do not want as well as what you do',
  'A page reference against every figure',
  'The arithmetic that goes against you, on page one',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their paragraphs 1 and 2 only**, and the room says what is being asked for and what the reader is being asked to do about it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole of page one (180 words or more), to the shape in the writer\'s box: six numbered parts, the decision line with its exclusions, page references against the figures, and the arithmetic that is against you kept on page one.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: six numbered parts on one page, a decision line that rules out the easy responses, a page reference against every figure, and the unfavourable arithmetic kept on page one.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your page one in ninety seconds, and let the room time you.** ⚠ **Anybody who does not finish cuts the page rather than reading faster, and the room says which paragraph to cut** — **which is almost always the history nobody asked for.** **Then say in which order you wrote the six parts.** Then the sentence the cycle ends on, which is Ms Sabbagh\'s: **the ask was eight afternoons for twenty-two people until I wrote paragraph 6.**'));
out.push(hw('Assemble **the whole of page one** from 22.1 to 22.5, numbered 1 to 6, with a page reference against every figure. ⚠ **Write it in the order 6, 5, 4, 3, 2, 1** — **and then look at paragraph 1 and see whether the failure condition has changed what you are asking for.** **In this class it has changed it for about half the writers, and never upwards.**'));

// ===================== 22.7 =====================
out.push(pb());
out.push(h2('22.7  Review & Mediate: The proposer and the person who has to find the money'));
out.push(p('**Function:** mediating between a proposal that is right and a reader who cannot grant it   ·   **Recycling:** Unit 22   ·   **Exam practice:** B2 First Reading and Use of English Part 3 · Writing Part 2 (a report) · Listening Part 2'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 22 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** The feasible of the scheme was never tested.  **2** The implement will begin in October.  **3** We have had no allocate from the budget.  **4** The provide of a second vehicle is not agreed.  **5** He gave me a commit in writing.  **6** The fund runs out in March.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the proposal summary, and what each side says about it.'));
out.push(box(null, [
  '**ONE PROPOSAL, TWO ACCOUNTS** _(the proposer and the man who has to find it, six weeks apart)_',
  '**The paper.** _"Eight afternoons a year for eleven people, starting in October. Four hundred and forty hours of staff time, and no money. What I need from you is a yes or a no by 10 June… Three hundred repeat calls a year, from the switchboard\'s own call book… Not another person, not any part of the equipment budget… If the repeat calls are not below two hundred and twenty by March, it has not worked."_',
  '**The proposer.** _"It is the best paper I have written. The ask is in fourteen words, the problem is in his units and out of his own book, the arithmetic against me is on page one, and the failure condition is a figure that can come out the wrong way."_',
  '**The man who has to find it.** _"It is the best paper that has reached me this year. And I cannot say yes to it. The four hundred and forty hours are not mine. They are the ward rota\'s, and the rota is held by Mrs Khalaf, who has never seen this paper, and who will be shown eight afternoons as a loss and nothing at all as a gain."_',
  '⚠ **Both accounts are accurate and neither of them is about the paper.**',
  '**And the thing the proposal cannot do.** **A proposal priced in the reader\'s units has to be granted by whoever holds those units** — **and the rule that makes it readable is the rule that sends it to the wrong desk.**',
  '**The question for the cycle.** _Who tells the proposer whose hours they are?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. What does Ms Huda say the proposal cannot do, and what is the one question that would have changed May?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.13  Whose hours are they', [
  ['Ms Huda', 'A paper that does everything this unit teaches, and the answer was neither yes nor no. Ms Sabbagh — is the paper wrong?'],
  ['Nour', 'No. ⚠ **I would write it again.** **And Mr Jabri is right as well, which took me a fortnight to accept.**'],
  ['Ms Huda', '**Say his account in his words.**'],
  ['Nour', '⚠ _The four hundred and forty hours are not mine; they are the ward rota\'s._ **And Mrs Khalaf, who holds the rota, has never seen the paper.**'],
  ['Ms Huda', '**Then the mediation, and it is three moves.** One: **separate what the paper is for from what its reader could do about it.** ⚠ Two: **find the thing the document cannot do.** Three: **say whether the writer can supply it.**'],
  ['Omar', 'What is the paper for?'],
  ['Nour', '**Getting a decision out of one man by the tenth of June, on a figure he can check.** ⚠ **And it did that** — **he read it in a day and answered in three.**'],
  ['Ms Huda', '**And the thing it cannot do?**'],
  ['Jad', '⚠ **Reach the person who holds what is being asked for.** **A proposal priced in the reader\'s units has to be granted by whoever holds those units** — **and the rule from 22.2 that makes the paper readable is the rule that sends it to the wrong desk.**'],
  ['Ms Huda', '**Which is the finding of this cycle and it is new.** ⚠ **Everything in this unit has been about one reader.** **Nothing in it asks the question that would have answered this in May, which is four words long:** _whose hours are these?_'],
  ['Tareq', '**And I could not have asked it.** ⚠ **I do not know what Mr Jabri controls.** **Nobody outside his office does.**'],
  ['Ms Huda', '**So what can Ms Sabbagh supply?**'],
  ['Hiba', ' ⚠ **One sentence in paragraph 2.** _If any part of this is not yours to grant, tell me whose it is and I shall write the same paper in their units._ **Twenty-one words, and it is the only thing in this unit that turns a referral into an address.**'],
  ['Ms Huda', '**And whose decision is that?**'],
  ['Hiba', '⚠ **Mr Jabri\'s.** **He is the only person who knows that the hours are not his, and he has never said so** — **because a man who holds a budget is not in the habit of announcing what he does not control.**'],
  ['Rim', 'And what must we not do?'],
  ['Ms Huda', '**Two things, and the second looks efficient.** ⚠ **Do not write the paper to the whole organisation** — **a paper addressed to everybody is priced in nobody\'s units and is 22.2 undone.** **And do not send the same page to Mrs Khalaf** — **it is written in repeat calls, and she holds a rota.**'],
  ['Nour', 'And reading the two accounts?'],
  ['Ms Huda', '🔊 **One after the other, at the same speed, neither reasonable at the other\'s expense.** ⚠ **The proposer\'s account is a description of a method and the other is a description of a wall** — **and the second is harder to read aloud without sounding like an excuse.** **Read it as a report.**'],
]));
out.push(sp());
out.push(box('Language box – the proposer and the person who has to find the money', [
  '**The three moves.** ⚠ **1 Separate what the paper is for from what its reader could do about it.** **2 Find the thing the document cannot do.** **3 Say whether the writer can supply it.**',
  '⚠ **The finding, and it is new: a proposal priced in the reader\'s units has to be granted by whoever holds those units.** **The rule from 22.2 that makes the paper readable is the rule that sends it to the wrong desk.**',
  '**And the proposer could not have known.** ⚠ **Nobody outside a budget-holder\'s office knows what that office controls** — **so this is not a failure of research; it is a thing the writer has no way of finding out.**',
  '**What the writer can supply: one sentence, in paragraph 2.** ⚠ _If any part of this is not yours to grant, tell me whose it is and I shall write the same paper in their units._ **Twenty-one words, and it turns a referral into an address.**',
  '⚠ **And whose decision that is: the reader\'s.** **He is the only person who knows the hours are not his, and he has never said so** — **because a man who holds a budget is not in the habit of announcing what he does not control.**',
  '**Two things not to do, and the second looks efficient.** ⚠ **Do not write the paper to the whole organisation** — **a paper addressed to everybody is priced in nobody\'s units, which is 22.2 undone.** **And do not send the same page on to the rota-holder** — **it is written in repeat calls and she holds a rota.**',
  '**So the second paper is a second paper and not a copy.** ⚠ **Same ask, same failure condition, same renunciations** — **and the problem, the alternative and the arithmetic all re-priced in the units of whoever holds the thing.** **It is about forty minutes of work and it is the whole of this cycle.**',
  '**Pronunciation.** 🔊 **Track 22.14** **The two accounts one after the other, at the same speed, neither reasonable at the other\'s expense.** ⚠ **The proposer\'s is a description of a method and the other is a description of a wall** — **and the second is harder to read without sounding like an excuse.**',
  '**And one question any proposal can carry tomorrow, which costs four words.** ⚠ _Whose hours are these?_ **Put it in paragraph 2 and the worst answer you can get is the one you would otherwise have got in October.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a proposal and two accounts of it, and does **not** show them. A reads the paper, then both accounts. B makes the three moves: **what the paper is for, the thing it cannot do, and whether the writer can supply it.** ⚠ **In one of the two pairs the paper is genuinely defective** — there is no decision line — **and B must say so rather than looking for a resource-holder.** Change roles with the other pair.'));
out.push(table(['Pair A – the escalation afternoons', 'Pair B – the archive index'], [
  ['_Ask, decision line, problem in his units, renunciations, failure._', '_⚠ Four pages and no sentence saying what is wanted._'],
  ['_Proposer: "the best paper I have written."_', '_Proposer: "I assumed he would see what was needed."_'],
  ['_Reader: "the hours are not mine; they are the ward rota\'s."_', '_Reader: "I passed it to the archive section for comment."_'],
  ['_⚠ The question: who tells the proposer whose hours they are._', '_⚠ Not that question: there is no decision line to answer._'],
  ['_⚠ Answerable, by the reader, and he has never said it._', '_⚠ The paper is defective and the remedy is 22.6._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three moves for each pair. ⚠ **Pair B is not a resource-holder problem:** **a paper with no decision line was always going to be forwarded to whoever the subject belongs to**, and no question about units will mend it. **Two different faults, two different remedies** — **a sentence added by the person who holds the budget, and a decision line written today.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **a proposal of yours that was neither agreed nor refused** and do the three moves on it in writing. ⚠ **Name the person who actually held the thing you were asking for.** Then the question the cycle ends on: **did anybody ever tell you that it was not the person you wrote to?**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what the proposal cannot do:  _A paper that does everything the unit teaches, and the answer was neither yes nor no. Asked whether the paper is wrong, Nour said no — she would write it again, and Mr Jabri is right as well, which took her a fortnight to accept. His account in his own words: the four hundred and forty hours are not mine, they are the ward rota\'s. And Mrs Khalaf, who holds the rota, has never seen the paper. So the mediation, in three moves: separate what the paper is for from what its reader could do about it; find the thing the document cannot do; and say whether the writer can supply it. The paper is for getting a decision out of one man by the tenth of June on a figure he can check, and it did that — he read it in a day and answered in three. The thing it cannot do, Jad said, is reach the person who holds what is being asked for: a proposal priced in the reader\'s units has to be granted by whoever holds those units, and the rule from 22.2 that makes the paper readable is the rule that sends it to the wrong desk. Which is the finding of the cycle and it is new — everything in the unit has been about one reader, and nothing in it asks the question that would have answered this in May, which is four words long: whose hours are these? Tareq said he could not have asked it, because he does not know what Mr Jabri controls and nobody outside his office does. Hiba said what she can supply is one sentence in paragraph 2: if any part of this is not yours to grant, tell me whose it is and I shall write the same paper in their units. And whose decision that is: Mr Jabri\'s, because he is the only person who knows the hours are not his, and he has never said so, since a man who holds a budget is not in the habit of announcing what he does not control. Rim asked what we must not do: do not write the paper to the whole organisation, and do not send the same page to the rota-holder._'));
out.push(p('**Listener task:** write the person who actually held the thing you asked for, and whether anybody told you.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 3)', 7));
out.push(p('Read the text below. Use the word given in capitals at the end of each line to form a word that fits in the gap in the same line. For questions **1–8**, write the word.'));
out.push(box(null, [
  '**THE PAPER THAT WAS NEITHER AGREED NOR REFUSED**',
  'A section head in Damascus spent three weeks on a paper and received no answer at all. The **(1)** ______________ of the scheme was never in question; her reader said it was the best paper to reach him that year.   **FEASIBLE**',
  'What he could not do was grant it. The hours she wanted were not his, and the **(2)** ______________ of staff time across the wards is held by somebody who had never seen the paper.   **ALLOCATE**',
  'Her arithmetic was in his units and came out of his own book. Her figures did not need defending; what needed defending was the assumption that the man who reads a paper is the man who can act on it. No amount of **(3)** ______________ of the problem solves that.   **QUANTIFY**',
  'Nor is the remedy a longer paper. The **(4)** ______________ of a second version in somebody else\'s units takes about forty minutes, and it is a second paper and not a copy.   **PROVIDE**',
  'The question that would have saved the three weeks is four words long and nobody in the course had thought of it before this cycle. It costs nothing, it carries no **(5)** ______________ of any kind, and it can be put in the second paragraph of anything.   **COMMIT**',
  'There is one thing a writer cannot do, and it should be said plainly. Nobody outside a budget office knows what that office controls, so the **(6)** ______________ of requests between desks is invisible from the outside.   **PRIORITISE**',
  'The reader can mend it in one sentence, and the reason he does not is not obstruction. A man who holds money is not in the habit of announcing where the **(7)** ______________ actually stops.   **FUND**',
  'And the arrangement that follows is **(8)** ______________ in a way that a clever paper is not: both sides now know which desk holds which unit, and the next proposal arrives at the right one.   **SUSTAIN**',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of a proposal and the person who had to find it (80 words or more).'));
out.push(p('**ONE PROPOSAL, TWO ACCOUNTS** · ______________   **The paper.** _"______________"_   **The proposer.** _"______________"_   **The reader.** _"______________"_   ⚠ **Both accounts are accurate and neither is about ______________.**   **What the paper is for.** ______________. ⚠ **It did that.**   **The thing the document cannot do.** ⚠ ______________.   **Can the writer supply it?** ______________, **because ______________.**   **What the writer can supply.** ⚠ **One sentence in paragraph 2:** _"______________."_   **Whose decision is that?** ⚠ ______________.   **And what I am not doing.** ⚠ **Writing the paper to ______________**, and **sending the same page to ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both accounts quoted, and both allowed to be accurate',
  'What the paper is for, separated from what its reader could do',
  'The thing the document cannot do, named in one sentence',
  'The sentence the writer can supply, and whose decision it is',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 2: a report)', 10));
out.push(box(null, [
  '⚠ **The report, and the shape is the one you know: a title, a purpose line, headed sections, figures with their sources, and a recommendation that can be acted on.** **What Unit 22 adds is paragraph 2** — **so the recommendation must say who is being asked to do what, and what to do if it is not theirs to do.**',
  'Your manager has asked you to write a **report** on something at your workplace that is not working, recommending what should be done about it.',
  'Write your **report** in **180–220 words**, including **what you are recommending**, **what the problem costs in figures**, **what you are not asking for**, and **how anybody would know it had not worked.**',
  '⚠ **All four requirements, or the content mark goes.** **And the fourth is where the marks are** — **a report with a recommendation and no failure condition is asking for something with no end to it, and the examiner is reading for whether the thing could actually be decided.**',
], C.lorange, C.orange));
out.push(...lines(6));
out.push(pb());
out.push(stage('✓', 'Unit 22 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  The ___ of the scheme was never in question; the money was.   a) feasibility   b) feasible   c) feasibly',
  '2  ___ of the scheme begins in October and the first afternoon is on the ninth.   a) Implement   b) Implementation   c) Implementing',
  '3  We have had no ___ from the equipment budget and I have not asked for one.   a) allocate   b) allocating   c) allocation',
  '4  The ___ of a second vehicle for two days is what I am asking for.   a) provision   b) provide   c) providing',
  '5  He gave me a ___ in writing and he has kept it for eleven years.   a) commit   b) commitment   c) committing',
  '6  ___ for the scheme runs out in March and the rota is drawn in June.   a) Fund   b) Funded   c) Funding',
  '7  The ___ of requests between the four desks is invisible from outside.   a) prioritisation   b) prioritise   c) prioritising',
  '8  It is a ___ arrangement because both sides now know which desk holds what.   a) sustain   b) sustainable   c) sustaining',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 2 style – sentence completion).** 🔊 **Track 22.15** You will hear a woman talking about a proposal she wrote. For questions **1–10**, complete the sentences with **a word or short phrase.**'));
[
  '**1**  Her February paper was returned with the single word ______________ written on it.',
  '**2**  The cost had in fact been in the paper, on page ______________.',
  '**3**  Her reader had understood the February paper to be a ______________ about the call handlers.',
  '**4**  The ask she finally wrote was ______________ words long.',
  '**5**  The three weeks before she sent it were spent being unwilling to put a number where it could be ______________.',
  '**6**  She needed an answer by 10 June because the October rota is drawn on ______________.',
  '**7**  The repeat-call figure came out of the switchboard\'s own ______________.',
  '**8**  She wrote the six paragraphs of page one in the order ______________.',
  '**9**  Writing the failure condition reduced the number of people in the ask from twenty-two to ______________.',
  '**10**  The hours she was asking for turned out to belong to the ______________.',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 22.15  Audio script (read after the check)', [
  ['Interviewer', 'Your first paper came back in a day. Tell me what was on it.'],
  ['Nour', 'One word, in the margin. _Costs?_ And the cost was in the paper. It was on page three, in a table, correct to the hour.'],
  ['Interviewer', 'What was on page one?'],
  ['Nour', 'The thirty-four escalations out of forty-one that involve a promise nobody wrote down. All true, and not one sentence of it asking for anything. He read page one, formed a view, and the view was that I had written a complaint about the call handlers. He told me so a fortnight later and he was not being unfair to me. That is what the page said.'],
  ['Interviewer', 'And the second paper begins with the ask.'],
  ['Nour', 'Eight afternoons a year for eleven people, starting in October. Fourteen words. And I want to be honest about the three weeks between working out the figure and sending it, because the arithmetic took an afternoon. The three weeks were spent being unwilling to put a number somewhere it could be refused. While it sat on page three I could believe the paper was still being considered.'],
  ['Interviewer', 'You gave him a date for the answer.'],
  ['Nour', 'The tenth of June, and I gave the reason in the same sentence, because a date without a reason reads as pressure. The October rota is drawn up on the fifteenth of June. An answer on the twentieth costs us until January whatever it says.'],
  ['Interviewer', 'The repeat-call figure is the heart of it. Where did it come from?'],
  ['Nour', 'The switchboard\'s own call book, for the twelve months to March. Not my records. He can walk into the switchboard room and check it in four minutes without asking me anything, and a figure a man can check is a figure he does not have to decide whether to trust.'],
  ['Interviewer', 'And you wrote page one backwards.'],
  ['Nour', 'Six, five, four, three, two, one. And it changed the paper. The ask was eight afternoons for all twenty-two people until I wrote paragraph six, and then I could not name any figure that would have shown it had worked for twenty-two. So it became eleven. The failure condition is what told me what I was actually asking for.'],
  ['Interviewer', 'And the answer, in the end?'],
  ['Nour', 'Neither yes nor no, and he was right. The four hundred and forty hours are not his. They belong to the ward rota, and the woman who holds the rota had never seen the paper. Nobody outside his office could have known that. It is four words I shall put in paragraph two of everything I write from now on: whose hours are these?'],
]));
out.push(p('**C  Writing.** Write the report (180–220 words): the recommendation, the problem in figures with its source, what you are not asking for, and how anybody would know it had not worked.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 22)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ put the ask in one sentence with a cost and a date',
  '☐ price the problem in the reader\'s units, out of the reader\'s own records',
  '☐ show a conversion that does not favour my own proposal',
  '☐ name three things I am not asking for, one of which I want',
  '☐ state the cheaper alternative at full value and reject it with a mechanism',
  '☐ write a failure condition with a figure, a date and a named witness',
  '☐ write a decision line that says what I do not want as well as what I do',
  '☐ ask whose resource it is, and write the second paper in their units',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _put up · draw up · cost out · sound out · flesh out · thrash out · phase in · push through · carry through · stand behind · stack up · hinge on_.',
  '**This unit\'s word-formation set** _(Reading Part 3 in 22.7 draws on this)_: _feasible → **feasibility** · implement → **implementation** · allocate → **allocation** · provide → **provision** · commit → **commitment** · sustain → **sustainable** · fund → **funding** · prioritise → **prioritisation** · quantify → **quantification**._',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Unit 22 · Student\'s Book');
