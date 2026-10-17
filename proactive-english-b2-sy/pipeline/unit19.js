// Proactive English B2 · Syria Edition · Book 2 · Unit 19 — Student's Book
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

out.push(h1('Unit 19  Chairing and Minuting'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit', [
  '**19.1** What the meeting is for   ·   **19.2** Getting the decision said in the room   ·   **19.3** Naming what is not being decided',
  '**19.4** Interrupting, and letting somebody finish   ·   **19.5** The item that keeps coming back   ·   **19.6** The chair\'s one page   ·   **19.7** Review & Mediate: the chair and the person who was not heard',
  '⚠ **This unit is 18.3 from the other side of the table.** **18.3 asked how a meeting is written down; 19 asks how it has to be run for six honest lines to be writable at the end of it.**',
  '**A chairman who knows what the minutes will need can get it said in the room.** ⚠ **A chairman who does not leaves the minute-taker inventing a decision** — **which 18.3 called the worst document in the book.**',
], C.lteal, C.teal));

// ===================== 19.1 =====================
out.push(pb());
out.push(h2('19.1  What the meeting is for'));
out.push(p('**Function:** saying what the meeting is for, and what would make it unnecessary   ·   **Grammar:** the purpose sentence in two halves   ·   **Pronunciation:** the purpose said once, flatly, before anything else'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. A names a meeting they attend regularly. ⚠ **B asks two questions: what is it to decide, and what would make it unnecessary?** **Almost nobody can answer the second** — **and a meeting that cannot be made unnecessary is a meeting nobody ever has to finish.**'));
out.push(board('This is our regular monthly catch-up.', 'This meeting is to decide which of the forty-one escalations we answer in writing. It stops being necessary when the promise field is in the system.'));
out.push(p('**b**  Which is a purpose sentence? **1** _The purpose of the meeting is to discuss the escalations._  **2** _This meeting is to decide which of the forty-one escalations we answer in writing, and it stops being necessary when the promise field is in use._  **3** _We meet to review progress._  **4** _We are here to decide one thing: whether the promise log goes into the system in June. If it goes in, we do not meet again._  **5** _This is our regular monthly catch-up._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What two halves does Ms Huda say a purpose sentence has, and what test does she give?   **A** a subject and a date; count the items on the agenda   **B** **what this meeting is to decide, and what would make it unnecessary** — and the test is **to ask three people at the end what the meeting was for**   **C** an aim and an outcome; ask the chairman afterwards'));
out.push(p('**b**  Listen again. **1** What are Mrs Sabbagh\'s figures, and what has not moved?   **2** What does Ms Huda say happens to a meeting with no stated purpose?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.1  Four hundred hours', [
  ['Ms Huda', 'Mrs Sabbagh. You chair a meeting. Give me the arithmetic first.'],
  ['Nour', '⚠ **Eight afternoons a year, eleven people, since 2024.** **About four hundred hours.**'],
  ['Ms Huda', '**And the figure the meeting exists to move?**'],
  ['Nour', '**Thirty-four of forty-one escalations involve a promise that is in no note of ours.** ⚠ **It was thirty-four when we started and it is thirty-four now.**'],
  ['Ms Huda', '**So four hundred hours against an unmoved figure.** ⚠ **Before we ask what is wrong with the meeting, say what you open it with.**'],
  ['Nour', '_(a pause)_ **I say good afternoon and I read the agenda.**'],
  ['Ms Huda', '**Which is the whole of the cycle.** ⚠ **A meeting with no stated purpose becomes whatever the loudest item on the agenda is** — **and the loudest item is almost never the one the meeting was called for.**'],
  ['Adnan', 'And the purpose sentence has two halves.'],
  ['Ms Huda', '**Two, and the second is the one nobody writes.** ⚠ **What this meeting is to decide** — **and what would make it unnecessary.**'],
  ['Omar', 'Why does the second half matter? It sounds like a way of insulting your own meeting.'],
  ['Ms Huda', '**It is the only half that can end a series.** ⚠ _It stops being necessary when the promise field is in the system._ **Say that eight times a year and somebody will eventually ask when the field is going in** — **which is the question four hundred hours have not produced.**'],
  ['Dima', 'And _to discuss_?'],
  ['Ms Huda', '⚠ **_To discuss_ is not a purpose; it is a description of what people do in rooms.** **_To review progress_ is worse, because it sounds like management** — **and a reader cannot tell what would count as having reviewed it.**'],
  ['Rim', 'How do I know whether I have said it?'],
  ['Ms Huda', '**Ask three people at the end what the meeting was for.** ⚠ **If you get three answers, you did not say it** — **and you will get three, the first time, from people who have been coming for two years.**'],
  ['Nour', '⚠ **I did that in March. I got four answers from three people, because one of them gave me two.**'],
  ['Ms Huda', '**And the fix is one sentence at the start, which costs about nine seconds.**'],
  ['Mazen', 'And saying it out loud?'],
  ['Ms Huda', '🔊 **Once, flatly, before anything else, and not again.** ⚠ _This meeting is to decide one thing._ **Not _I thought it might be useful if we spent a little time today looking at…_** — **a purpose offered as a suggestion can be amended by the first person who speaks, and it always is.**'],
]));
out.push(sp());
out.push(box('Language box – what the meeting is for', [
  '⚠ **A meeting with no stated purpose becomes whatever the loudest item on the agenda is** — **and the loudest item is almost never the one the meeting was called for.**',
  '**Two halves, and the second is the one nobody writes.** ⚠ **1 What this meeting is to decide.** **2 What would make it unnecessary.**',
  '**The second half is the only one that can end a series.** ⚠ _It stops being necessary when the promise field is in the system._ **Said eight times a year, somebody eventually asks when the field is going in** — **which is the question four hundred hours have not produced.**',
  '**_To discuss_ is not a purpose.** ⚠ **It is a description of what people do in rooms.** **_To review progress_ is worse, because it sounds like management and nobody can say what would count as having reviewed it.**',
  '**The test: ask three people at the end what the meeting was for.** ⚠ **If you get three answers, you did not say it** — **and you will get three, the first time, from people who have been coming for two years.**',
  '**It costs about nine seconds and it is the cheapest thing a chairman does.** ⚠ **It is not rude.** **Everybody believes they know why they are there, and the three answers are the evidence that they do not.**',
  '**The shapes.** _This meeting is to decide ______._ _It stops being necessary when ______._ _We are here to decide one thing, and it is not ______._ ⚠ **And the ones that decide nothing:** _to discuss_ · _to review progress_ · _our regular catch-up_ · _to touch on_.',
  '**Pronunciation.** 🔊 **Track 19.2** **Once, flatly, before anything else, and not again.** ⚠ _This meeting is to decide one thing._ **Not _I thought it might be useful if we spent a little time today looking at…_** — **a purpose offered as a suggestion can be amended by the first person who speaks, and it always is.**',
  '**And one thing to add when a meeting has a purpose it cannot achieve today.** ⚠ _This meeting cannot decide the budget line, because we have not got it. It is to decide what we do in the four weeks before we have._ **A chairman who says that has saved the afternoon; one who does not has an afternoon of people deciding the budget line.**',
  '**Practise:** Say the purpose in two halves. **1** a meeting you chair  **2** one you attend  **3** one that cannot decide the main thing today  **4** one with _to discuss_ in it, and the repair  **5** one you believe should stop altogether',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the meeting from the card. B says **the purpose in two halves** — **what it is to decide, and what would make it unnecessary.** ⚠ **Two rows on each card are meetings that cannot decide their own main item today**, and B must say so and name what the afternoon is for instead. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the meeting)_ __________.'],
  ['B', '**This meeting is to decide __________.** **It stops being necessary when __________.**'],
]));
out.push(table(['Card A – the meeting', 'Card B – the meeting'], [
  ['_The weekly escalation meeting, eleven people, two hours._', '_The monthly gate review, five people, ninety minutes._'],
  ['_⚠ The purchasing committee, with the budget line not yet issued._', '_⚠ The observation panel, with one assessor away until June._'],
  ['_The studio meeting on the Sarouja summary._', '_The supplier review on the Qassaa reject figures._'],
  ['_⚠ The analyser trial meeting, with nobody trained on the settings._', '_⚠ The print pricing meeting, with the ministry stamp hours unknown._'],
  ['_The forum moderators\' meeting on the archive charge._', '_The first-year assessment moderation meeting._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** both halves of each purpose sentence. ⚠ **The four rows marked ⚠ cannot decide their main item today** — **a figure is missing, a person is away, nobody is trained, a fact is unknown** — **and the chairman\'s job is to say so in the first nine seconds.** **A pair that lets one of those four run as though the decision were available has given away the afternoon.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a meeting you attend. ⚠ **Write its purpose in two halves.** **If you cannot write the second half, write the honest version:** _I do not know what would make this meeting unnecessary._'));
out.push(p('**b**  Swap and perform. Your partner reads your purpose sentence **as a suggestion** — _I thought it might be useful if…_ — **and then flat.** ⚠ Then they amend the first version, on the spot, and you both see how easy it was.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour chairs a meeting, and the arithmetic came first: eight afternoons a year, eleven people, since 2024, which is about four hundred hours. The figure the meeting exists to move is that thirty-four of forty-one escalations involve a promise in no note of theirs — and it was thirty-four when they started and it is thirty-four now. So four hundred hours against an unmoved figure. Asked what she opens the meeting with, she said she says good afternoon and reads the agenda, which is the whole of the cycle: a meeting with no stated purpose becomes whatever the loudest item on the agenda is, and the loudest item is almost never the one the meeting was called for. Adnan said the purpose sentence has two halves, and two, the second being the one nobody writes — what this meeting is to decide, and what would make it unnecessary. Omar asked why the second half matters, since it sounds like a way of insulting your own meeting, and it is the only half that can end a series: it stops being necessary when the promise field is in the system. Say that eight times a year and somebody will eventually ask when the field is going in, which is the question four hundred hours have not produced. Dima asked about to discuss, which is not a purpose but a description of what people do in rooms — and to review progress is worse, because it sounds like management and nobody can say what would count as having reviewed it. Rim asked how you know whether you have said it, and you ask three people at the end what the meeting was for: if you get three answers you did not say it, and you will get three the first time, from people who have been coming for two years. Nour did that in March and got four answers from three people, because one of them gave her two. The fix is one sentence at the start, costing about nine seconds. And Mazen asked about saying it out loud: once, flatly, before anything else, and not again, because a purpose offered as a suggestion can be amended by the first person who speaks, and it always is._'));
out.push(p('**Listener task:** write both halves of your partner\'s purpose sentence, or the honest version of the second.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Nour sends to the eleven before the next meeting. Answer the questions.'));
out.push(model([
  '**FOUR HUNDRED HOURS** · N. Sabbagh · 2 June · _to the eleven of us, before Thursday_',
  '**I have chaired this meeting eight times a year since 2024 and I have never once said what it is for.** ⚠ **I am going to, on Thursday, and this note is so that nobody is surprised by it.**',
  '**The arithmetic, because I am in it too and I have never costed my own afternoons.** **Eight afternoons a year, eleven people, two hours each.** ⚠ **About four hundred hours since 2024.** **And the figure this meeting exists to move — thirty-four of forty-one escalations involving a promise that is in no note of ours — was thirty-four when we started and is thirty-four now.**',
  '**What I have been opening with.** **Good afternoon, and the agenda.** ⚠ **Which means the afternoon has gone to whichever item was loudest**, **and for six of the last eight that was the roster.** **The roster is a real problem and it is not what this meeting is for.**',
  '**What I shall open with on Thursday, in two halves.** ⚠ _This meeting is to decide which of the forty-one escalations we answer in writing, and in what form._ **And:** _it stops being necessary when the promise field is in the system._',
  '**Why the second half is in it.** ⚠ **Because in two years nobody has asked when the field is going in.** **I have mentioned it four times and it has never been an item.** **If I say the sentence eight times this year, one of you will ask** — **and that is the only outcome I can think of that would give us the four hundred hours back.**',
  '**What Thursday cannot decide, and I am saying so first.** ⚠ **It cannot decide the field, because that is not ours.** **It can decide what we do in writing in the four weeks before anybody answers us about it.**',
  '**And one thing I shall do at the end, which will take about a minute and which I should have done in 2024.** ⚠ **I shall ask three of you what the meeting was for, and I shall write the three answers down.** **If I get three answers I shall have failed at the first sentence, and I would rather know that on Thursday than in 2026.**',
]));
out.push(item('1', 'What has she been opening with, and what has that cost?'));
out.push(item('2', 'What are the two halves of her new purpose sentence, and why is the second one in it?'));
out.push(item('3', 'What can Thursday not decide, and what will she do at the end?'));
out.push(writers([
  'A note from a chairman before changing how a meeting opens: **what you have never done, in the first line** → **the arithmetic, including yourself** → **what you have been opening with, and what it cost** → **the new purpose in two halves** → **why the second half is there** → **what the meeting cannot decide** → **and what you will do at the end to find out whether it worked.**',
  '⚠ **Put yourself inside the arithmetic.** _Eight afternoons a year, eleven people, two hours each… because we are all in it._ **A chairman who prices other people\'s time and not their own has written a complaint.**',
  '**Name what the afternoon has actually gone on, and concede that it matters.** _For six of the last eight that was the roster. The roster is a real problem and it is not what this meeting is for._ ⚠ **Both halves**, or the loudest item\'s owner stops reading.',
  '**Say why the second half of the purpose is in the note.** _In two years nobody has asked when the field is going in._ ⚠ **A purpose sentence that arrives without its reason reads as a new procedure**, and new procedures are endured rather than used.',
  '⚠ And **end on a test you might fail in public.** _I shall ask three of you what the meeting was for, and if I get three answers I shall have failed at the first sentence._ **It is the sentence that makes the rest of the note something other than an instruction.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the chairman\'s note (80 words or more).'));
out.push(p('**______________** · ______________ · _to ______________   **I have chaired this meeting ______________ since ______ and I have never once said what it is for.** ⚠ ______________.   **The arithmetic, because we are all in it.** ______________. ⚠ **About ______ hours since ______.** **And the figure this meeting exists to move ______________.**   **What I have been opening with.** ______________. ⚠ **Which means the afternoon has gone to ______________.**   **What I shall open with, in two halves.** ⚠ _"______________."_ **And:** _"______________."_   **Why the second half is in it.** ⚠ ______________.   **What ______________ cannot decide.** ⚠ ______________.   **And one thing I shall do at the end.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Yourself inside the arithmetic',
  'What the afternoon has actually gone on, conceded as real',
  'The reason the second half of the purpose is there',
  'A test at the end that you might fail in public',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only the second half of their purpose sentence**, and the room says whether anything could ever make that meeting unnecessary.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: yourself in the arithmetic, the loudest item conceded, the reason for the second half, and a test you might fail.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: yourself inside the arithmetic, the loudest item conceded as real, the reason for the second half of the purpose, and a public test at the end.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your purpose sentence as a suggestion, and let the room amend it.** ⚠ **Then read it flat and let the room try again.** **The second version cannot be amended by anybody who has not got a better purpose to offer**, which is the whole difference. Then the sentence the cycle ends on, which is Mrs Sabbagh\'s: **four hundred hours against a figure that has not moved.**'));
out.push(hw('Write the note (80+ words). ⚠ Then do the test on a meeting you attend: **ask three people at the end what it was for and write down the three answers.** **Bring them.** **Do not tell them why you are asking** — **and if you are the chairman, ask anyway, because the answer you most need is the one you will least enjoy.** **19.2 is about getting the decision said in the room**, which is the half of 18.3 that cannot be fixed afterwards. ⚠ **And bring a meeting at which something was agreed and never written down.**'));

// ===================== 19.2 =====================
out.push(pb());
out.push(h2('19.2  Getting the decision said in the room'));
out.push(p('**Function:** getting a decision stated in words before the meeting moves on   ·   **Grammar:** the chair\'s formulation, offered for correction   ·   **Pronunciation:** the formulation read back slowly enough to be written down'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, with the meeting you brought where something was agreed and never written down. ⚠ **Say what was agreed, in a sentence.** **Then your partner asks: whose words are those?** **In most cases they are the speaker\'s, composed afterwards** — **and two people who were in the same room will produce two different sentences.**'));
out.push(board('So we are all agreed, then.', 'I am going to write this: the January order goes to Dar al-Kutub at the quoted price. Correct me.'));
out.push(p('**b**  Which gets a correction? **1** _Is everybody happy with that?_  **2** _I am going to write this: the January order goes to Dar al-Kutub at the quoted price. Correct me._  **3** _So we are all agreed._  **4** _The minute will say that the February order was raised and dropped for want of the budget line. Is that wrong anywhere?_  **5** _Any objections?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the chair must ask for, and what does she say happens to a decision that is agreed and not formulated?   **A** agreement; it is forgotten   **B** **a correction and not an agreement** — and **a decision that is agreed and not formulated is carried out by whoever has the strongest memory**   **C** a vote; it has to be taken again'));
out.push(p('**b**  Listen again. **1** What does Mr Barghouti say he can tell from four lines of minutes?   **2** What does Ms Huda say the chair should watch?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.3  Correct me', [
  ['Ms Huda', 'Mrs Sabbagh. The commonest thing that goes wrong in a meeting you chair.'],
  ['Nour', '⚠ **Everybody agrees and nobody says what was agreed.** **It takes about four seconds and then we are on the next item.**'],
  ['Ms Huda', '**And what do you say at that moment?**'],
  ['Nour', '**_So we are all agreed_** — ⚠ **which gets a yes from eleven people who are agreeing to eleven slightly different things.**'],
  ['Ms Huda', '**And the move is to stop asking for agreement.** ⚠ **Say it back in a sentence, in the words that will go in the minute, and ask for a correction.** _I am going to write this: ______. Correct me._'],
  ['Omar', 'Is that not the same question in different words?'],
  ['Ms Huda', '**It is the opposite question and the room answers it differently.** ⚠ **_Are we agreed_ invites a yes, and a yes costs nothing.** **_Correct me_ invites a sentence** — **and somebody always has one, usually about a date.**'],
  ['Adnan', 'I can tell in four lines whether a chairman did it.'],
  ['Ms Huda', '**Say how.**'],
  ['Adnan', '⚠ **If the decision in the minute has a shape that nobody in the room would have used, I composed it afterwards.** **If it has somebody\'s correction in it** — _at the quoted price_, **which Mr Saqqal added** — **it was said in the room.**'],
  ['Ms Huda', '**And that is the test from the other end.** ⚠ **A formulated decision carries a fingerprint: a clause somebody put in.** **One composed afterwards is smooth, and smoothness in a minute is a warning.**'],
  ['Dima', 'What goes in the sentence?'],
  ['Ms Huda', '**What was decided, and under whose authority.** ⚠ _The January order goes to Dar al-Kutub at the quoted price, under the delegation of 2023._ **The authority is the half a chairman forgets, and it is the half anybody asks about three months later.**'],
  ['Rim', 'And the speed?'],
  ['Ms Huda', '🔊 **Slowly enough to be written down, and watch the pen.** ⚠ **If the person taking the minute is not writing, you are going too fast or the sentence is not sayable** — **and both are the chairman\'s fault and not theirs.**'],
  ['Nour', '⚠ **I have never once looked at Mr Barghouti\'s hand.**'],
  ['Bassel', 'And when nothing was decided?'],
  ['Ms Huda', '**Exactly the same form.** ⚠ _I am going to write this: not decided, for want of the budget line, on the agenda for 5 June. Correct me._ **A room that hears that will correct the date and let the rest stand** — **and the meeting will not be held again by accident.**'],
  ['Mazen', 'And the cost of not doing it?'],
  ['Ms Huda', '**A decision agreed and not formulated is carried out by whoever has the strongest memory.** ⚠ **Which is not the same as the loudest voice and is often worse** — **it is whoever most wanted a particular answer, remembering honestly.**'],
]));
out.push(sp());
out.push(box('Language box – getting the decision said', [
  '⚠ **The commonest failure in any meeting: everybody agrees and nobody says what was agreed.** **It takes four seconds and then the room is on the next item.**',
  '**_So we are all agreed_ gets a yes from eleven people who are agreeing to eleven slightly different things.** ⚠ **A yes costs nothing, which is why it is always available.**',
  '**The move: stop asking for agreement.** ⚠ _I am going to write this: ______. Correct me._ **It invites a sentence, and somebody always has one** — **usually about a date.**',
  '**What goes in the sentence: what was decided, and under whose authority.** ⚠ _The January order goes to Dar al-Kutub at the quoted price, under the delegation of 2023._ **The authority is the half a chairman forgets and the half anybody asks about three months later.**',
  '**The test from the other end, and it works on anybody\'s minutes.** ⚠ **A formulated decision carries a fingerprint: a clause somebody put in.** **One composed afterwards is smooth** — **and smoothness in a minute is a warning.**',
  '**And when nothing was decided, exactly the same form.** ⚠ _I am going to write this: not decided, for want of the budget line, on the agenda for 5 June. Correct me._ **A room that hears that corrects the date and lets the rest stand.**',
  '**The cost of not doing it.** ⚠ **A decision agreed and not formulated is carried out by whoever has the strongest memory** — **which is not the loudest voice and is often worse: it is whoever most wanted a particular answer, remembering honestly.**',
  '**Pronunciation.** 🔊 **Track 19.4** **Slowly enough to be written down, and watch the pen.** ⚠ **If the person taking the minute is not writing, you are going too fast or the sentence is not sayable** — **and both are the chairman\'s fault.**',
  '**One more thing, and it belongs to the chair alone.** ⚠ **Do not let the correction be made to you privately after the meeting.** _Say it now, so that everybody hears the version that is going in._ **A correction given in the corridor leaves ten people holding the uncorrected sentence.**',
  '**Practise:** Formulate the decision and ask for a correction. **1** a decision with its authority  **2** one where nothing was decided  **3** one with a date somebody will correct  **4** _are we agreed_, so that you hear it  **5** one offered too fast to be written',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads what the room agreed from the card, loosely, as it was said. B gives **the formulation: the sentence, its authority, and _correct me_.** ⚠ **Two rows on each card contain no decision at all**, and B must formulate that in the same form. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(what the room said)_ __________.'],
  ['B', '**I am going to write this: __________, under __________.** **Correct me.**'],
]));
out.push(table(['Card A – what the room said', 'Card B – what the room said'], [
  ['_"Dar al-Kutub seems the sensible one at that price."_', '_"Three a consignment is what we have always done."_'],
  ['_⚠ "We should probably look at the February one next time."_', '_⚠ "Somebody ought to find out about the stamp hours."_'],
  ['_"Four months including a December, then."_', '_"The gate telephones first, I think that is agreed."_'],
  ['_⚠ "I am not happy with the weighting but I will not block it."_', '_⚠ "Let us leave the roster until Mrs Khoury is back."_'],
  ['_"Miss Mansour trains two people before July."_', '_"The second signature stays for three months."_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each formulation, its authority, and whether a decision exists. ⚠ **The four rows marked ⚠ contain no decision** — **an intention, a wish, a reservation, a postponement** — **and each must be formulated as such, with a date.** **A pair that turns _somebody ought to find out_ into a decision has invented one** — **and nobody would be acting on it, on nobody\'s authority.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the thing that was agreed and never written down. ⚠ **Write the formulation you wish somebody had said:** **the sentence, the authority, and _correct me_.**'));
out.push(p('**b**  Swap and perform. Your partner reads your formulation **at ordinary speaking speed and then slowly enough to write.** ⚠ **You write it down both times**, and then compare what you have with what was said.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The commonest thing that goes wrong in Nour’s meeting is that everybody agrees and nobody says what was agreed — it takes about four seconds and then they are on the next item. What she says at that moment is so we are all agreed, which gets a yes from eleven people who are agreeing to eleven slightly different things. And the move is to stop asking for agreement: say it back in a sentence, in the words that will go in the minute, and ask for a correction — I am going to write this, correct me. Omar asked whether that is not the same question in different words, and it is the opposite question and the room answers it differently: are we agreed invites a yes, and a yes costs nothing, while correct me invites a sentence, and somebody always has one, usually about a date. Adnan said he can tell in four lines whether a chairman did it: if the decision in the minute has a shape nobody in the room would have used, he composed it afterwards, and if it has somebody’s correction in it — at the quoted price, which Mr Saqqal added — it was said in the room. Which is the test from the other end: a formulated decision carries a fingerprint, a clause somebody put in, and one composed afterwards is smooth, and smoothness in a minute is a warning. Dima asked what goes in the sentence, and what was decided and under whose authority — the authority being the half a chairman forgets and the half anybody asks about three months later. Rim asked about the speed, which is slowly enough to be written down, watching the pen: if the person taking the minute is not writing, you are going too fast or the sentence is not sayable, and both are the chairman’s fault and not theirs. Nour said she has never once looked at Adnan’s hand. Bassel asked what happens when nothing was decided, and exactly the same form: not decided, for want of the budget line, on the agenda for 5 June, correct me. And Mazen asked about the cost of not doing it: a decision agreed and not formulated is carried out by whoever has the strongest memory, which is not the loudest voice and is often worse._'));
out.push(p('**Listener task:** write your partner\'s formulation and whether the two versions you wrote down match.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Adnan sends to the chairs he takes minutes for. Answer the questions.'));
out.push(model([
  '**THE FINGERPRINT** · A. Barghouti · 4 June · _to the four people whose meetings I minute_',
  '**I can tell from four lines of a minute whether the chairman said the decision out loud, and I am going to tell you how, because it is the only thing I want from any of you.** ⚠ **It is not a complaint; three of the four of you do it sometimes.**',
  '**How I can tell.** ⚠ **A decision that was said in the room has somebody else\'s clause in it.** _At the quoted price_ — **Mr Saqqal added that, in the room, after the chairman had read the sentence back.** **A decision I composed afterwards is smooth, because one person wrote it and had no interruptions.** **Smoothness in a minute is a warning.**',
  '**What I do when it was not said.** **I write what I believe was decided and I take it to the chairman the same afternoon.** ⚠ **Which means the sentence that goes out to forty people is one the chairman and I agreed in a corridor** — **and the other nine who were in the room have never seen it.**',
  '**What it has cost, once, that I know of.** ⚠ **In 2022 a meeting agreed to extend a trial and I wrote _to all night staff_.** **What two of the nine remember is _to the night staff on the fourth night_.** **Nobody has ever established which is right, and the trial has been running on my version for two years.**',
  '**What I am asking for, and it is one sentence and about twelve seconds.** ⚠ _I am going to write this: ______. Correct me._ **In the room, before the next item, and slowly.** **I do not need the authority said aloud if it is obvious** — **but I do need the date, because the date is the thing somebody always corrects.**',
  '**And the thing I shall do from now on, so that this is not only a request.** ⚠ **If a decision is not formulated, I shall say so at the time:** _I cannot write that. Can somebody give me the sentence?_ **I have never done it in nineteen years and I am aware of why** — **it sounds like an accusation and it is not one.** **It is nine words and the alternative is my version of your meeting.**',
]));
out.push(item('1', 'How can he tell that a decision was said in the room?'));
out.push(item('2', 'What happened in 2022, and what has it cost?'));
out.push(item('3', 'What is he asking for, and what will he now do himself?'));
out.push(writers([
  'A note from a minute-taker to the chairs: **what you can tell and that it is the only thing you want** → **how you can tell, with the actual clause** → **what you do when it was not said** → **what that has cost once, with the two versions** → **what you are asking for, with its cost in seconds** → **and what you will now do yourself.**',
  '⚠ **Protect them in the first paragraph.** _It is not a complaint; three of the four of you do it sometimes._ **A note that opens on the failure gets read by the one chairman who already formulates.**',
  '**Give the fingerprint as a real clause.** _At the quoted price — Mr Saqqal added that, in the room._ ⚠ **Four words of somebody else\'s English are worth more than a paragraph about formulation**, because they are what the reader will recognise in their own minutes.',
  '**Print both versions of the disputed decision.** _To all night staff_ / _to the night staff on the fourth night_. ⚠ **And then the sentence that prices it:** _the trial has been running on my version for two years._',
  '⚠ And **take something on yourself at the end.** _If a decision is not formulated, I shall say so at the time._ **A request with no corresponding obligation reads as an instruction from the back of the room**, and this writer has no authority to give one.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note about a decision that was never formulated (80 words or more).'));
out.push(p('**______________** · ______________ · _to ______________   **I can tell ______________, and I am going to tell you how.** ⚠ **It is not a complaint; ______________.**   **How I can tell.** ⚠ **A decision said in the room has ______________ in it.** _"______________"_ — **______________ added that.** **One composed afterwards is ______________.**   **What I do when it was not said.** ______________. ⚠ **Which means ______________.**   **What it has cost, once.** ⚠ **In ______ ______________.** **One version says _"______________"_ and the other _"______________."_**   **What I am asking for.** ⚠ _"______________."_ **About ______ seconds.**   **And what I shall do from now on.** ⚠ _"______________."_'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The reader protected in the first paragraph',
  'The fingerprint given as a real clause in somebody\'s words',
  'Both versions of the disputed decision printed',
  'An obligation taken on yourself at the end',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only the two versions of their disputed decision**, and the room says which one it would have acted on.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: the reader protected, the fingerprint as a real clause, both versions printed, and an obligation of your own.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the reader protected first, the fingerprint as a real clause, both versions of the decision printed, and an obligation taken on yourself.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your formulation twice: at speaking speed, then slowly enough to write.** ⚠ **The room writes it down both times and then reads back what it has.** **The fast version produces four different sentences in a room of eight**, and nobody believes that until they see the four. Then the sentence the cycle ends on, which is Mr Barghouti\'s: **the trial has been running on my version for two years.**'));
out.push(hw('Write the note (80+ words). ⚠ Then take the next meeting you attend and do one thing: **when something is agreed, write down the sentence you would put in the minute, and afterwards ask one other person who was there to write theirs.** **Bring both.** **If they match, say so** — **it is worth knowing which rooms do this already.** **19.3 is about the other half of 18.3\'s fourth line: naming, in the room, what is _not_ being decided.** ⚠ **And bring one thing that was acted on although nobody decided it.**'));

// ===================== 19.3 =====================
out.push(pb());
out.push(h2('19.3  Naming what is not being decided'));
out.push(p('**Function:** closing an item without a decision, in the room   ·   **Grammar:** the open item in three parts, with an owner   ·   **Pronunciation:** the non-decision said as a decision and not as a retreat'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, with the thing that was acted on although nobody decided it. ⚠ **Say who acted and what they thought they had been told.** **Then one question: what did the chairman say when the item was left?** **It is almost always four words** — _we will come back to that_ — **and those four words are what was acted on.**'));
out.push(board('We will come back to that.', 'Not decided: the February order. The budget line is needed; Mr Saqqal is getting it by 1 June; on the agenda for 5 June. Nobody acts before then.'));
out.push(p('**b**  Which closes an open item? **1** _We will come back to that._  **2** _Not decided: the February order. The budget line is needed; Mr Saqqal is getting it by 1 June; on the agenda for 5 June. Nobody acts before then._  **3** _Let us leave that for now._  **4** _Not decided: the roster. Nobody is getting the figures, which is why this will come back unchanged in July._  **5** _That is one for another day._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What three parts does Ms Huda say an open item has, and what does she say happens to an item that is only _left_?   **A** a subject, a date and a name; it is forgotten   **B** **what is not decided · what is needed before it can be · who is getting that thing, by when** — and **an item that is only _left_ is acted on by somebody**   **C** a reason, a cost and a deadline; it returns unchanged'));
out.push(p('**b**  Listen again. **1** What happened with the paper order, and what had the chairman said?   **2** What does Ms Huda say to do when there is no owner?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.5  Nobody acts before then', [
  ['Ms Huda', 'Mr Barghouti. The paper order. What had the chairman said?'],
  ['Adnan', '⚠ _We will come back to that._ **Four words, at about twenty past four.**'],
  ['Ms Huda', '**And?**'],
  ['Adnan', '**The stores clerk ordered the paper on the Monday.** ⚠ **He told me afterwards that he had taken it from the fourth paragraph of the minutes, which records what two people said they would prefer.**'],
  ['Ms Huda', '**So an item that is only _left_ is not left.** ⚠ **Somebody acts on it** — **and usually the person whose job is nearest to it, reading honestly.**'],
  ['Nour', 'I say those four words most weeks.'],
  ['Ms Huda', '**Everybody does, and they feel like politeness.** ⚠ **They are an instruction to the most conscientious person in the room to work out what you meant.**'],
  ['Omar', 'So what closes it?'],
  ['Ms Huda', '**Three parts.** ⚠ **What is not decided. What is needed before it can be. And who is getting that thing, by when.**'],
  ['Dima', 'And the third is the one that gets left out.'],
  ['Ms Huda', '**The third is what makes a closed item different from a postponement.** ⚠ _The budget line is needed; Mr Saqqal is getting it by 1 June._ **Without a name and a date, _on the agenda for 5 June_ is a promise about a meeting and not about the work** — **which is 18.3\'s fourth line from inside the room.**'],
  ['Rim', 'And the sentence that stops the stores clerk?'],
  ['Ms Huda', '⚠ _Nobody acts on this before 5 June._ **Six words, said to the room, and it is the only part of this that is purely a chairman\'s job** — **a minute-taker cannot write it if nobody said it.**'],
  ['Bassel', 'What if there is no owner? Half our open items have nobody.'],
  ['Ms Huda', '**Then say that, in the same form, and the meeting hears what it has just done.** ⚠ _Not decided: the roster. Nobody is getting the figures, which is why this will come back unchanged in July._ **Nobody enjoys that sentence and it is the most useful one in the cycle.**'],
  ['Nour', '⚠ **Six of my last eight meetings have had the roster on them.**'],
  ['Ms Huda', '**And that sentence, said twice, is how an item either acquires an owner or comes off the agenda.** **It is 18.3\'s sixth line arriving a fortnight early.**'],
  ['Mazen', 'And saying it out loud?'],
  ['Ms Huda', '🔊 **As a decision, in the same voice as a decision, and not apologetically.** ⚠ _Not decided._ **Two words, flat, and then the three parts.** **Said apologetically it becomes _I am afraid we have not managed to…_**, **which is a chairman\'s feeling and not an instruction to anybody.**'],
]));
out.push(sp());
out.push(box('Language box – what is not being decided', [
  '⚠ **An item that is only _left_ is not left.** **Somebody acts on it** — **usually the person whose job is nearest to it, reading the minutes honestly.** **The paper was ordered from a paragraph recording what two people said they would prefer.**',
  '**_We will come back to that_ feels like politeness.** ⚠ **It is an instruction to the most conscientious person in the room to work out what you meant.**',
  '**Three parts.** ⚠ **1 What is not decided.** **2 What is needed before it can be.** **3 Who is getting that thing, by when.**',
  '**The third is what makes a closed item different from a postponement.** ⚠ _The budget line is needed; Mr Saqqal is getting it by 1 June._ **Without a name and a date, _on the agenda for 5 June_ is a promise about a meeting and not about the work.**',
  '**And one sentence that only a chairman can supply.** ⚠ _Nobody acts on this before 5 June._ **Six words.** **A minute-taker cannot write it if nobody said it.**',
  '**When there is no owner, say that, in the same form.** ⚠ _Not decided: the roster. Nobody is getting the figures, which is why this will come back unchanged in July._ **Nobody enjoys the sentence and it is the most useful one in the cycle** — **said twice, an item either acquires an owner or comes off the agenda.**',
  '⚠ **It sounds exact, which people mistake for defeatism.** **_We will come back to that_ is the defeatist sentence:** **it promises a return that nobody has arranged.**',
  '**The shapes.** _Not decided: ______._ _______ is needed; ______ is getting it by ______._ _On the agenda for ______._ _Nobody acts on this before ______._ ⚠ **And the ones that close nothing:** _we will come back to that_ · _let us leave it for now_ · _one for another day_ · _I will pick that up with you_.',
  '**Pronunciation.** 🔊 **Track 19.6** **As a decision, in the same voice as a decision, and not apologetically.** ⚠ _Not decided._ **Two words, flat, then the three parts.** **Said apologetically it becomes _I am afraid we have not managed to…_**, **which is a chairman\'s feeling and not an instruction.**',
  '**Practise:** Close the item in three parts. **1** something needed from outside  **2** somebody absent  **3** one with no owner, said plainly  **4** _we will come back to that_, and the repair  **5** one where the room must be told not to act',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the item from the card. B **closes it in three parts** and adds the sentence to the room where one is needed. ⚠ **Two rows on each card have no owner available**, and B must say so rather than inventing one. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the item, and why it cannot be decided)_ __________.'],
  ['B', '**Not decided: __________.** **__________ is needed; __________ is getting it by __________.** **On the agenda for __________.**'],
]));
out.push(table(['Card A – the item', 'Card B – the item'], [
  ['_The February order; the budget line has not been issued._', '_The analyser trial; nobody is trained on the afternoon settings._'],
  ['_⚠ The roster; the figures have never been collected by anybody._', '_⚠ The archive charge; the four subscribers have not been asked._'],
  ['_The reject limit; the two years of figures are not drawn up._', '_The stamp hours; the ministry has not been written to._'],
  ['_⚠ The photographs; it has been raised at six meetings running._', '_⚠ Where the report lives after June; nobody owns the files._'],
  ['_The second signature; the three months are not finished._', '_The weighbridge tonnage; the instruction does not define it._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three parts for each item, and the sentence to the room where there was one. ⚠ **The four rows marked ⚠ have no owner**, and the honest close says so with its consequence attached: _which is why this will come back unchanged._ **A pair that invents an owner has made the item worse than leaving it**, because a date now exists and nobody is working to it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take an item that is open where you work. ⚠ **Close it in three parts**, and then answer the question honestly: **is there an owner, or am I about to invent one?**'));
out.push(p('**b**  Swap and perform. Your partner reads your close **apologetically** — _I am afraid we have not managed to…_ — **and then flat.** ⚠ They say which version they would act on, and which they would ignore.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The chairman had said four words about the paper order — we will come back to that — at about twenty past four. The stores clerk ordered the paper on the Monday, and told Adnan afterwards that he had taken it from the fourth paragraph of the minutes, which records what two people said they would prefer. So an item that is only left is not left: somebody acts on it, and usually the person whose job is nearest to it, reading honestly. Nour said she says those four words most weeks, and everybody does, and they feel like politeness — they are an instruction to the most conscientious person in the room to work out what you meant. Omar asked what closes an item, and three parts: what is not decided, what is needed before it can be, and who is getting that thing by when. Dima said the third is the one that gets left out, and the third is what makes a closed item different from a postponement: the budget line is needed, Mr Saqqal is getting it by 1 June. Without a name and a date, on the agenda for 5 June is a promise about a meeting and not about the work. Rim asked for the sentence that stops the stores clerk, and nobody acts on this before 5 June — six words, said to the room, and the only part of this that is purely a chairman’s job, because a minute-taker cannot write it if nobody said it. Bassel asked what happens when there is no owner, since half their open items have nobody, and then you say that in the same form and the meeting hears what it has just done: not decided, the roster, nobody is getting the figures, which is why this will come back unchanged in July. Nobody enjoys that sentence and it is the most useful one in the cycle. Nour said six of her last eight meetings have had the roster on them. And that sentence, said twice, is how an item either acquires an owner or comes off the agenda. And Mazen asked about saying it out loud: as a decision, in the same voice as a decision, and not apologetically._'));
out.push(p('**Listener task:** write your partner\'s three parts and whether the owner is real.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Nour writes after the June meeting. Answer the questions.'));
out.push(model([
  '**THE SIX WORDS I HAD NEVER SAID** · N. Sabbagh · 8 June · _to the eleven of us_',
  '**On Thursday I closed three items without a decision and said out loud, for the first time in two years, that nobody was to act on any of them.** ⚠ **Two of you came to me afterwards and said you had been about to.**',
  '**What I used to say.** _We will come back to that._ ⚠ **I have said it, by my own count of the minutes, at twenty-nine of the last thirty-two items that were not decided.** **It feels like politeness and it is an instruction to whoever is nearest to guess.**',
  '**What it has cost once, that I know of.** ⚠ **In April the escalation wording went out in the form two people in the room had said they would prefer.** **Nobody had decided it.** **The person who sent it is the most careful person in the section and she was reading the minutes honestly** — **and the wording has been going out for nine weeks.**',
  '**What I said on Thursday, three parts each.** ⚠ **_Not decided: the promise field._ The specification is needed; Mr Kabbani is getting it by 20 June; on the agenda for 26 June.** **_Not decided: the escalation wording._ The April version is withdrawn today; I am drafting by 15 June.** **_Not decided: the roster._ Nobody is getting the figures.**',
  '**And the sentence after each of them.** ⚠ _Nobody acts on this before the twenty-sixth._ **Six words, three times, about fifteen seconds in all.**',
  '**The one I did not enjoy.** ⚠ **The roster.** **I said that nobody is getting the figures and that this is why it will come back unchanged in July, and the room was quiet for a moment.** **Then Mr Hariri said he would get them, which nobody had ever asked him to do and which he can do in an afternoon.** **Two years, six meetings, and the item moved because somebody heard it described accurately.**',
  '**What I shall do at every meeting from now on.** ⚠ **Close every undecided item in three parts, and say the six words.** **It costs about a minute an afternoon** — **against nine weeks of a wording nobody chose.**',
]));
out.push(item('1', 'What did she used to say, and how often by her own count?'));
out.push(item('2', 'What happened in April, and what does she say about the person who sent it?'));
out.push(item('3', 'What happened with the roster, and what does she say moved it?'));
out.push(writers([
  'A page from a chairman after closing items properly: **what you did and what two people told you afterwards** → **what you used to say, counted** → **what it cost once, with the person protected** → **the items closed, in three parts each** → **the sentence to the room, with its cost in seconds** → **the one you did not enjoy, and what it produced** → **and what you will do from now on, priced against the cost.**',
  '⚠ **Count your own habit before you condemn it.** _At twenty-nine of the last thirty-two items that were not decided._ **A chairman who says _I have often said_ has not looked**, and the looking is what makes the page a finding.',
  '**Protect the person who acted.** _The most careful person in the section, reading the minutes honestly._ ⚠ **The fault is in the four words, not in her** — **and a page that leaves that ambiguous will be read as a reprimand by everybody who was not named.**',
  '**Print the three closures in full, with their names and dates.** ⚠ **A reader learns the form from three examples and from no amount of description** — **and one of the three should be the one with no owner.**',
  '⚠ And **give the uncomfortable sentence its outcome.** _The room was quiet for a moment. Then Mr Hariri said he would get them._ **That is the whole argument for the method and it is better told as an event than as a claim.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the chairman\'s page (80 words or more).'));
out.push(p('**______________** · ______________ · _to ______________   **On ______________ I closed ______ items without a decision and said out loud that ______________.** ⚠ ______________.   **What I used to say.** _"______________."_ ⚠ **At ______ of the last ______ items that were not decided.**   **What it has cost once.** ⚠ **In ______________ ______________.** **The person who ______________ is ______________ and she was ______________.**   **What I said, three parts each.** ⚠ **_Not decided: ______._ ______ is needed; ______ is getting it by ______; on the agenda for ______.**   **And the sentence after each.** ⚠ _"______________."_ **About ______ seconds in all.**   **The one I did not enjoy.** ⚠ ______________. **Then ______________.**   **What I shall do from now on.** ⚠ ______________. **Against ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Your own habit counted, not estimated',
  'The person who acted protected explicitly',
  'Three closures printed in full, one of them ownerless',
  'The uncomfortable sentence given its outcome as an event',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their ownerless closure**, and the room says what it would have done on hearing it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the habit counted, the actor protected, three closures printed, and the uncomfortable sentence with its outcome.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: your own habit counted, the person who acted protected, three closures printed in full, and the uncomfortable sentence given an outcome.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your closure apologetically, then flat.** ⚠ **The room says which one it would act on and which it would ignore** — **and the apologetic one is ignored, because a chairman\'s regret is not an instruction.** Then the sentence the cycle ends on, which is Mrs Sabbagh\'s: **two years, six meetings, and the item moved because somebody heard it described accurately.**'));
out.push(hw('Write the page (80+ words). ⚠ Then count your own habit: **go through the last two sets of minutes you have and count the items that were not decided and the words used to close them.** **Write the fraction.** **In most people\'s it is above twenty-five out of thirty.** **19.4 is about the two opposite faults of a chair** — **never interrupting, and interrupting without saying why** — **and about the person who stopped talking and never came back.** ⚠ **And count, at your next meeting, how many of the people present say nothing at all.**'));

// ===================== 19.4 =====================
out.push(pb());
out.push(h2('19.4  Interrupting, and letting somebody finish'));
out.push(p('**Function:** interrupting usefully, and protecting the person who has not finished   ·   **Grammar:** the interruption that names its reason and gives the turn back   ·   **Pronunciation:** the interruption at normal volume, not above the speaker'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, with the count you made. ⚠ **Say how many people were present and how many said nothing at all.** **Then one question: did anybody go back for them?** **In most meetings the answer to the second is nobody**, and in most meetings two people did most of the talking.'));
out.push(board('Yes, yes, we know all that. Can we move on?', 'Let me stop you — I want the figure, and then you finish. And one moment: Mrs Sweidan had not finished.'));
out.push(p('**b**  Which is a useful interruption? **1** _Sorry, can I just stop you there?_  **2** _Let me stop you — I want the figure, and then you finish._  **3** _Yes, yes, we know all that._  **4** _One moment: Mrs Sweidan had not finished._  **5** _If we could move on._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What two opposite faults does Ms Huda give, and what does she say a useful interruption must do?   **A** interrupting and not interrupting; it must be polite   **B** **a chair who never interrupts, and a chair who interrupts without saying why** — and a useful interruption **names its reason and gives the turn back**   **C** interrupting too early and too late; it must be short'));
out.push(p('**b**  Listen again. **1** What are Mrs Sabbagh\'s two figures about who speaks?   **2** What does Ms Huda say about asking a silent person a question?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.7  Mrs Sweidan had not finished', [
  ['Ms Huda', 'Mrs Sabbagh. You counted. Who talks?'],
  ['Nour', '⚠ **Two of the eleven have spoken at six of the last eight meetings.** **Three have spoken at none of them.**'],
  ['Ms Huda', '**And the three are on the circulation list of everything the meeting produces.**'],
  ['Nour', '**They are.** ⚠ **One of them is the person who sends the escalation wording out.**'],
  ['Ms Huda', '**Then the two faults, and they are opposite.** ⚠ **A chair who never interrupts gives the afternoon to whoever will not stop.** **A chair who interrupts without saying why teaches the room to hurry** — **and a hurried room produces the shortest contributions from the people who speak least.**'],
  ['Omar', 'So what does a useful interruption do?'],
  ['Ms Huda', '**Two things.** ⚠ **It names its reason, and it gives the turn back.** _Let me stop you — I want the figure, and then you finish._ **Eleven words, and the speaker is not being told to sit down.**'],
  ['Dima', 'And the one nobody does?'],
  ['Ms Huda', '⚠ **Going back for the person who was talked over.** _One moment: Mrs Sweidan had not finished._ **Four words, and it is the chairman\'s job and nobody else\'s** — **because the person who was interrupted cannot say it without appearing to complain.**'],
  ['Lubna', '⚠ **I have been that person about four times and I did not come back in any of them.**'],
  ['Ms Huda', '**Nobody does.** ⚠ **A person talked over does not resume; they go quiet for the rest of the afternoon, and the room records it as agreement.** **That is the most expensive thing in this unit and it is invisible in the minutes.**'],
  ['Rim', 'And the three who never speak? Do I just ask them?'],
  ['Ms Huda', '**Not with an open question, which is a second ordeal.** ⚠ **Ask them something with a fact in it.** _Mrs Sweidan, what did the March figures show?_ **Not _is there anything you would like to add?_** — **which is an invitation to perform and will be declined.**'],
  ['Adnan', 'And from the minute-taker\'s side: the silent three are a problem for me too.'],
  ['Ms Huda', '**Say why.**'],
  ['Adnan', '⚠ **I write down what was said.** **If three of the eleven say nothing, the minute records the views of eight people and goes out to eleven** — **and the three are bound by it.**'],
  ['Bassel', 'And the volume?'],
  ['Ms Huda', '🔊 **At normal volume, never above the speaker.** ⚠ **An interruption louder than the person speaking is a reprimand, whatever its words.** **At the same volume it is a procedure** — **and the difference is audible to everybody in the room except the chairman, who cannot hear their own.**'],
  ['Mazen', 'How do you know which you did?'],
  ['Ms Huda', '**Ask the person you interrupted, afterwards and in private.** ⚠ **They will tell you, and they are the only reliable source** — **the rest of the room heard a chairman keeping order.**'],
]));
out.push(sp());
out.push(box('Language box – interrupting and finishing', [
  '**Two faults, and they are opposite.** ⚠ **A chair who never interrupts gives the afternoon to whoever will not stop.** **A chair who interrupts without saying why teaches the room to hurry** — **and a hurried room produces the shortest contributions from the people who speak least.**',
  '**A useful interruption does two things.** ⚠ **It names its reason and it gives the turn back.** _Let me stop you — I want the figure, and then you finish._ **Eleven words, and nobody has been told to sit down.**',
  '**And the one nobody does.** ⚠ _One moment: Mrs Sweidan had not finished._ **Four words, and it is the chairman\'s job and nobody else\'s** — **because the person who was interrupted cannot say it without appearing to complain.**',
  '⚠ **A person talked over does not resume.** **They go quiet for the rest of the afternoon and the room records it as agreement.** **It is the most expensive thing in this unit and it is invisible in the minutes.**',
  '**Drawing out the silent: not with an open question, which is a second ordeal.** ⚠ **Ask something with a fact in it.** _Mrs Sweidan, what did the March figures show?_ **Not _is there anything you would like to add?_**, **which is an invitation to perform and will be declined.**',
  '**And the arithmetic that makes it a chairman\'s problem rather than a courtesy.** ⚠ **If three of eleven say nothing, the minute records the views of eight and goes out to eleven** — **and the three are bound by it.**',
  '**Pronunciation.** 🔊 **Track 19.8** **At normal volume, never above the speaker.** ⚠ **An interruption louder than the person speaking is a reprimand, whatever its words.** **At the same volume it is a procedure** — **and the difference is audible to everybody except the chairman, who cannot hear their own.**',
  '**So ask the person you interrupted, afterwards and in private.** ⚠ **They are the only reliable source.** **The rest of the room heard a chairman keeping order.**',
  '**The shapes.** _Let me stop you — I want ______, and then you finish._ _One moment: ______ had not finished._ _______, what did ______ show?_ ⚠ **And the ones that close somebody down:** _yes, yes_ · _we know all that_ · _if we could move on_ · _I think we have covered that_.',
  '**Practise:** Interrupt and give the turn back. **1** for a figure  **2** for a date  **3** going back for somebody who was talked over  **4** _we know all that_, so that you hear it  **5** drawing out a silent person with a fact',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A talks, at length, on the card\'s subject. B interrupts **usefully** — naming the reason and giving the turn back. C is the person who was talked over earlier and says nothing; **B must go back for C by name.** ⚠ **Two subjects on each card are ones where the interruption should not happen at all.** Change roles.'));
out.push(dlg(null, [
  ['B', '**Let me stop you — I want __________, and then you finish.**'],
  ['B', '**One moment: __________ had not finished.**'],
]));
out.push(table(['Card A – what A is talking about', 'Card B – what A is talking about'], [
  ['_The roster, at length, for the fourth meeting running._', '_The photographs, in colour, again._'],
  ['_⚠ The figure the meeting was called to decide._', '_⚠ The one thing C has been trying to say since four o\'clock._'],
  ['_A long account of what happened in 2022._', '_Why the ministry stamp hours cannot be changed._'],
  ['_⚠ A correction to the chairman\'s own formulation._', '_⚠ The reject figures, which nobody else has._'],
  ['_The car park._', '_The merits of the old system, in general terms._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** each interruption\'s reason, and whether the turn was given back. ⚠ **The four rows marked ⚠ should not be interrupted at all** — **a chairman who stops a correction to their own formulation, or the person who has the only copy of the figures, has saved a minute and lost the meeting.** **Ask the person who was interrupted, which is the only answer that counts.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write the two sentences you will use at your next meeting: ⚠ **the interruption with its reason and its hand-back, and the four words that go back for somebody.** **Then name the person you expect to use the second on.**'));
out.push(p('**b**  Swap and perform. Your partner delivers your interruption **above your voice and then at the same volume.** ⚠ You say which one you would have resumed after.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour counted who talks: two of the eleven have spoken at six of the last eight meetings, and three have spoken at none of them — and the three are on the circulation list of everything the meeting produces, one of them being the person who sends the escalation wording out. Then the two faults, which are opposite: a chair who never interrupts gives the afternoon to whoever will not stop, and a chair who interrupts without saying why teaches the room to hurry, and a hurried room produces the shortest contributions from the people who speak least. Omar asked what a useful interruption does, and two things: it names its reason and it gives the turn back — let me stop you, I want the figure, and then you finish. Eleven words, and the speaker is not being told to sit down. Dima asked about the one nobody does, which is going back for the person who was talked over: one moment, Mrs Sweidan had not finished. Four words, and it is the chairman’s job and nobody else’s, because the person who was interrupted cannot say it without appearing to complain. Lubna said she has been that person about four times and did not come back in any of them, and nobody does: a person talked over does not resume, they go quiet for the rest of the afternoon, and the room records it as agreement, which is the most expensive thing in the unit and is invisible in the minutes. Rim asked whether she should just ask the three who never speak, and not with an open question, which is a second ordeal — ask them something with a fact in it, such as what the March figures showed, and not is there anything you would like to add, which is an invitation to perform and will be declined. Adnan said the silent three are a problem for him too: he writes down what was said, so if three of eleven say nothing, the minute records the views of eight people and goes out to eleven, and the three are bound by it. Bassel asked about volume, which is normal volume, never above the speaker, because an interruption louder than the person speaking is a reprimand whatever its words. And Mazen asked how you know which you did, and you ask the person you interrupted, afterwards and in private, because they are the only reliable source._'));
out.push(p('**Listener task:** write your partner\'s two sentences and the name they expect to use the second on.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Lubna writes when Nour asks her the question in private. Answer the questions.'));
out.push(model([
  '**THE FOUR TIMES I DID NOT COME BACK** · L. Sweidan · 10 June · _to Mrs Sabbagh, because she asked_',
  '**You asked me whether I had ever been talked over in that meeting and whether I had come back.** ⚠ **Four times, and no.** **I am answering in writing because in the room I would have said it was nothing.**',
  '**The four.** **October, on the photographs. January, on the Sarouja costs. March, twice, both on the wall.** ⚠ **In all four it was the same two people, and in none of the four were they being rude** — **they had something to say and I had stopped for breath.**',
  '**What happened afterwards, which is the part you cannot see.** ⚠ **I said nothing else in any of those four meetings.** **Not because I was offended: because resuming requires you to decide that what you were saying was worth the interruption**, **and by the time you have decided, the item has gone.**',
  '**What it cost in March, exactly.** ⚠ **I was eleven words into the sentence about the wall when I was stopped.** **The minute records that the committee discussed the condition of the building and approved the plastering.** **The eleven millimetres are not in the minute because they are not in the room** — **and I had them in my hand.**',
  '**What would have worked, and it is four words.** ⚠ _Miss Sweidan had not finished._ **Said by you, not by me.** **If I say it, I am a person complaining about an interruption; if you say it, it is the order of business.**',
  '**And one thing I had not expected to write.** ⚠ **I do not want to be asked whether I have anything to add.** **I have been asked that twice and declined both times, because it is a performance and I had nothing prepared.** **Ask me what the figures showed.** **I always know what the figures showed.**',
  '**What I shall do myself, since you asked me and not the other two.** ⚠ **I shall say the number first from now on.** **Eleven millimetres, and then the sentence** — **because a number is harder to interrupt than a clause, and I should not have to rely on you remembering my name at the right moment.**',
]));
out.push(item('1', 'Why does she say she did not resume, and what does she say it was not?'));
out.push(item('2', 'What did it cost in March, and what is missing from the minute?'));
out.push(item('3', 'What does she not want to be asked, and what does she want instead?'));
out.push(writers([
  'A page answering a chairman who has asked whether you were talked over: **the answer in the first two lines** → **why you are answering in writing** → **the occasions, with dates** → **that nobody was being rude** → **what happened afterwards, which the chairman cannot see** → **what it cost once, exactly** → **the four words that would have worked, and who must say them** → **and one thing you will do yourself.**',
  '⚠ **Answer first and explain second.** _Four times, and no._ **A page that explains before it answers lets the chairman decide it was nothing**, which is what you would have said in the room.',
  '**Exonerate the interrupters by name or by number.** _In none of the four were they being rude; they had something to say and I had stopped for breath._ ⚠ **It is true, and it moves the fault to the chairman where the remedy is.**',
  '**Price it with the thing that is missing from the record.** _The eleven millimetres are not in the minute because they are not in the room — and I had them in my hand._ ⚠ **A cost stated as a feeling cannot be acted on; a figure that is absent from a document can.**',
  '⚠ And **take one thing on yourself at the end.** _I shall say the number first._ **A page that only asks the chairman to behave differently has made itself dependent on somebody else\'s memory**, and the writer says so.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page answering the chairman (80 words or more).'));
out.push(p('**______________** · ______________ · _to ______________   **You asked me whether ______________.** ⚠ **______ times, and ______.** **I am answering in writing because in the room I would have said ______________.**   **The ______.** ______________. ⚠ **In all ______ it was ______________, and in none of them were they ______________.**   **What happened afterwards.** ⚠ **I said nothing else in ______________.** **Not because ______________: because ______________.**   **What it cost, exactly.** ⚠ **I was ______ words into ______________ when I was stopped.** **The minute records ______________.** **______________ is not in the minute because ______________.**   **What would have worked.** ⚠ _"______________."_ **Said by ______, not by ______.**   **And one thing I had not expected to write.** ⚠ ______________.   **What I shall do myself.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The answer before the explanation',
  'The interrupters exonerated',
  'The cost priced as something absent from a record',
  'One thing taken on yourself at the end',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only what they do not want to be asked**, and the room says what it would ask instead.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the answer first, the interrupters exonerated, the cost as an absence from a record, and an obligation of your own.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the answer before the explanation, the interrupters exonerated, the cost priced as an absence from a record, and one thing taken on yourself.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Your partner delivers your interruption twice: above your voice, then at the same volume.** ⚠ **You say which one you would have resumed after** — **and the answer is always the second, from everybody, including the people who thought volume did not matter.** Then the sentence the cycle ends on, which is Miss Sweidan\'s: **the eleven millimetres are not in the minute because they are not in the room, and I had them in my hand.**'));
out.push(hw('Write the page (80+ words). ⚠ Then do the thing the cycle is for, and it takes one conversation: **ask one person you interrupted whether they resumed, in private, and write down what they say in their words.** **If you have never chaired, ask somebody who interrupted you.** **19.5 is about the item that keeps coming back** — **six of eight, in Mrs Sabbagh\'s case** — **and about what a chairman owes an agenda that is not working.** ⚠ **And bring the standing agenda of a meeting you attend.**'));

// ===================== 19.5 =====================
out.push(pb());
out.push(h2('19.5  The item that keeps coming back'));
out.push(p('**Function:** dealing with an item that returns unchanged   ·   **Grammar:** the count said before the item   ·   **Pronunciation:** the count read as information, with nothing apologetic round it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, with the standing agenda you brought. ⚠ **Find the item that has been on it longest and count the meetings.** **Then one question: which of three things is wrong with it** — **nobody owns it, this meeting cannot decide it, or it is not a question at all?** **The third is commoner than anybody expects.**'));
out.push(board('The roster again, I am afraid.', 'This is the sixth time the roster has been on this agenda. Either somebody takes the figures today or it comes off.'));
out.push(p('**b**  Which deals with a returning item? **1** _The roster again, I am afraid._  **2** _This is the sixth time the roster has been on this agenda. Either somebody takes the figures today or it comes off._  **3** _We seem to keep coming back to this._  **4** _It comes back once, on 26 June. If it is not decided then, it comes off and I shall say so in the minute._  **5** _I know, I know. Next month._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What three reasons does Ms Huda give for an item returning, and what does she say a chairman must say first?   **A** laziness, cost and politics; the chairman must apologise   **B** **nobody owns it · this meeting cannot decide it · it is not a question at all** — and the chairman must say **the count, before the item**   **C** time, money and absence; the chairman must take it off'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say the third reason really is?   **2** What does Mr Barghouti say took the car park off the agenda?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.9  The sixth time', [
  ['Ms Huda', 'Mrs Sabbagh. The roster has been on six of your last eight agendas. What do you say when you reach it?'],
  ['Nour', '⚠ _The roster again, I am afraid._ **And everybody laughs, and then we spend twenty minutes on it.**'],
  ['Ms Huda', '**The laugh is the thing to notice.** ⚠ **A room that laughs at an item has agreed, without saying so, that it is not going to be decided** — **and the twenty minutes are a formality that everybody can see.**'],
  ['Omar', 'So what is the first thing to say?'],
  ['Ms Huda', '**The count, before the item.** ⚠ _This is the sixth time the roster has been on this agenda._ **Nine words, and the laugh does not come.**'],
  ['Dima', 'And then?'],
  ['Ms Huda', '**Then one of three things is wrong with it, and they need different remedies.** ⚠ **Nobody owns it. Or this meeting cannot decide it. Or it is not a question at all.**'],
  ['Rim', 'The third?'],
  ['Ms Huda', '⚠ **It looks like a question about the roster and it is a disagreement about what the section is for.** **Those cannot be settled by any amount of roster discussion** — **and they are commoner than anybody expects, and they return for ever, because nothing on the agenda is the thing in dispute.**'],
  ['Nour', '⚠ **That is the roster.** **Two of us think the afternoon shift exists to clear the queue and two think it exists so that somebody is there at four o\'clock.**'],
  ['Ms Huda', '**Then the roster has been on six agendas as a proxy, and no roster will ever come out of it.** ⚠ **The honest sentence is _we are not disagreeing about the roster_, and the meeting that follows is a different and shorter one** — **which is 17.3 in a committee room.**'],
  ['Adnan', 'And for the first two reasons?'],
  ['Ms Huda', '**A fork, said out loud.** ⚠ _Either somebody takes the figures today or it comes off._ **Or, where another meeting owns it:** _this goes to the purchasing committee and off this agenda._'],
  ['Bassel', 'And the option nobody uses?'],
  ['Ms Huda', '⚠ **Hold it over to one named date with nothing in between.** _It comes back once, on 26 June; if it is not decided then, it comes off and the minute will say so._ **An item with one more life behaves differently from an item with a standing place.**'],
  ['Adnan', '⚠ **The car park came off ours because the minute said, twice, that fifty of the ninety minutes had gone on it and it had changed nothing.** **Nobody argued. Somebody just took it off.**'],
  ['Hiba', 'And the honest version, when it stays for a bad reason?'],
  ['Ms Huda', '**Say it.** ⚠ _It is on this agenda because taking it off would look like giving up._ **That sentence has never, in my experience, survived being said aloud twice** — **and the item comes off at the second one.**'],
  ['Mazen', 'And saying the count out loud?'],
  ['Ms Huda', '🔊 **As information, with nothing apologetic round it.** ⚠ _This is the sixth time._ **Not _I am sorry to say we seem to be back on the roster again_** — **an apology invites the laugh, and the laugh is the agreement not to decide.**'],
]));
out.push(sp());
out.push(box('Language box – the item that keeps coming back', [
  '⚠ **A room that laughs at an item has agreed, without saying so, that it is not going to be decided** — **and the twenty minutes that follow are a formality everybody can see.**',
  '**The first thing to say is the count, before the item.** ⚠ _This is the sixth time the roster has been on this agenda._ **Nine words, and the laugh does not come.**',
  '**Three reasons, and they need different remedies.** ⚠ **1 Nobody owns it.** **2 This meeting cannot decide it.** **3 It is not a question at all.**',
  '**The third is the one to learn.** ⚠ **It looks like a question about the roster and it is a disagreement about what the section is for** — **two people think the afternoon shift exists to clear the queue and two think it exists so that somebody is there at four o\'clock.** **No roster will ever come out of that.**',
  '**And the honest sentence for it is short.** ⚠ _We are not disagreeing about the roster._ **The meeting that follows is a different and a shorter one, and it is 17.3 in a committee room: nobody has said what would settle it because nothing on the agenda is the thing in dispute.**',
  '**For the first two reasons, a fork said out loud.** ⚠ _Either somebody takes the figures today or it comes off._ **Or:** _this goes to the purchasing committee and off this agenda._',
  '**And the option nobody uses: one more life, with nothing in between.** ⚠ _It comes back once, on 26 June; if it is not decided then, it comes off and the minute will say so._ **An item with one more life behaves differently from an item with a standing place.**',
  '**The honest version, when an item stays for a bad reason.** ⚠ _It is on this agenda because taking it off would look like giving up._ **That sentence rarely survives being said aloud twice.**',
  '**Pronunciation.** 🔊 **Track 19.10** **As information, with nothing apologetic round it.** ⚠ _This is the sixth time._ **Not _I am sorry to say we seem to be back on the roster again_** — **an apology invites the laugh, and the laugh is the agreement not to decide.**',
  '**Practise:** Say the count and then the remedy. **1** nobody owns it  **2** another meeting owns it  **3** it is not a question at all  **4** one with the apology attached, so that you hear it  **5** one held over for a single named date',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the returning item and its count from the card. B says **the count, then which of the three reasons it is, then the remedy.** ⚠ **Two rows on each card are not questions at all**, and B must name the real disagreement. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the item, and how many meetings)_ __________.'],
  ['B', '**This is the ______ time __________ has been on this agenda.** **__________.** **Either __________ or __________.**'],
]));
out.push(table(['Card A – the item and its count', 'Card B – the item and its count'], [
  ['_The roster; six of the last eight meetings._', '_The photographs in colour; six meetings running._'],
  ['_⚠ The afternoon shift hours; four meetings, two views of what the shift is for._', '_⚠ The archive charge; five meetings, two views of what the archive is for._'],
  ['_The reject limit; three meetings, figures never drawn up._', '_The stamp hours; four meetings, the ministry never written to._'],
  ['_⚠ The second signature; seven meetings, two views of what a handover is._', '_⚠ The budget line; nine meetings, and it is not this committee\'s to issue._'],
  ['_Where the report lives; two meetings, nobody owns the files._', '_Training on the analyser; three meetings, nobody named._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the count, the reason and the remedy for each. ⚠ **The four rows marked ⚠ are not questions about the item at all** — **three are disagreements about what something is for, and the fourth belongs to another body.** **A pair that applies the fork to one of the three has promised a decision that cannot be reached.** **Make the listeners name the real disagreement**, beginning _we are not disagreeing about…_'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the longest-standing item on your own agenda. ⚠ **Write the count, the reason, and the remedy** — **and if the reason is the third, write the sentence that names the real disagreement.**'));
out.push(p('**b**  Swap and perform. Your partner reads your count **with an apology in front of it** and then flat. ⚠ They say after which version the room would laugh.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The roster has been on six of Nour’s last eight agendas, and what she says when she reaches it is the roster again, I am afraid — and everybody laughs, and then they spend twenty minutes on it. The laugh is the thing to notice: a room that laughs at an item has agreed, without saying so, that it is not going to be decided, and the twenty minutes are a formality everybody can see. Omar asked what the first thing to say is, and the count, before the item: this is the sixth time the roster has been on this agenda. Nine words, and the laugh does not come. Dima asked what comes next, and then one of three things is wrong with it, and they need different remedies: nobody owns it, or this meeting cannot decide it, or it is not a question at all. Rim asked about the third, which looks like a question about the roster and is a disagreement about what the section is for — those cannot be settled by any amount of roster discussion, and they are commoner than anybody expects, and they return for ever because nothing on the agenda is the thing in dispute. Nour said that is the roster: two of them think the afternoon shift exists to clear the queue and two think it exists so that somebody is there at four o’clock. Then the roster has been on six agendas as a proxy and no roster will ever come out of it, and the honest sentence is we are not disagreeing about the roster. Adnan asked about the first two reasons, and a fork said out loud: either somebody takes the figures today or it comes off. Bassel asked about the option nobody uses, which is to hold it over to one named date with nothing in between — it comes back once, on 26 June, and if it is not decided then it comes off and the minute will say so. Adnan said the car park came off theirs because the minute said twice that fifty of the ninety minutes had gone on it and it had changed nothing: nobody argued, somebody just took it off. Hiba asked about the honest version when an item stays for a bad reason, and you say it: it is on this agenda because taking it off would look like giving up. And Mazen asked about saying the count out loud, which is as information, with nothing apologetic round it, because an apology invites the laugh and the laugh is the agreement not to decide._'));
out.push(p('**Listener task:** write your partner\'s count, reason and remedy, and the real disagreement where there was one.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Nour circulates about the roster. Answer the questions.'));
out.push(model([
  '**THE ROSTER IS NOT THE ARGUMENT** · N. Sabbagh · 12 June · _to the eleven of us_',
  '**The roster has been on six of our last eight agendas and I have worked out why.** ⚠ **We are not disagreeing about the roster.**',
  '**The count first, because it is worse than it feels.** **Six agendas, about twenty minutes each: two hours.** ⚠ **And in those two hours no roster has ever been proposed, amended or rejected.** **There is nothing to find in the minutes, because nothing happened.**',
  '**What I used to say when we reached it.** _The roster again, I am afraid._ ⚠ **And everybody laughed** — **which I had taken for good humour and now read as agreement that it was not going to be decided.**',
  '**What the disagreement actually is.** ⚠ **Two of us believe the afternoon shift exists to clear the queue by six o\'clock.** **Two of us believe it exists so that somebody is in the building at four, when the ministry telephones.** **Both are defensible, neither has ever been said out loud in that room, and no arrangement of hours can satisfy both.**',
  '**So what I am asking for is not a roster.** ⚠ **It is forty minutes on one question, with nobody\'s hours on the table:** _what is the afternoon shift for?_ **If we answer it, the roster takes about ten minutes and I shall write it myself.** **If we cannot answer it, the roster comes off the agenda, because six more meetings will produce what the last six produced.**',
  '**The dates, so that nobody thinks this is a way of burying it.** ⚠ **The question is on the agenda for 26 June, first item, forty minutes.** **The roster comes back once, on 10 July, and if it is not decided then it comes off and the minute will say why.**',
  '**And one thing about myself.** ⚠ **I have chaired all six of those meetings.** **The reason the real disagreement has never been said in the room is that I have been treating it as a scheduling problem for two years** — **and I was treating it that way because a scheduling problem is one I know how to chair.**',
]));
out.push(item('1', 'What is the count, and what does she say is not in the minutes?'));
out.push(item('2', 'What does she say the disagreement actually is, and what is she asking for instead?'));
out.push(item('3', 'What does she say about herself at the end?'));
out.push(writers([
  'A note about an item that has returned: **the count and the real reason, in the first two lines** → **the count priced in hours, with what the minutes contain** → **what you used to say, and what the laugh was** → **the real disagreement, with both sides defensible** → **what you are asking for instead** → **the dates, so that it does not look like burying** → **and one thing about yourself.**',
  '⚠ **Put the count in hours and then say what the minutes hold.** _Two hours, and no roster has ever been proposed, amended or rejected._ **A count of meetings is a complaint; a count of hours with an empty record beside it is a finding.**',
  '**State both sides of the real disagreement so that either side could sign it.** ⚠ **This is 17.2 inside a committee** — **and the sentence that proves you have done it is** _both are defensible_, **which costs you the comfort of being right.**',
  '**Ask for the question and not for the item.** _Forty minutes on one question, with nobody\'s hours on the table._ ⚠ **And give the consequence of failing to answer it**, or the forty minutes becomes a seventh meeting about the roster.',
  '⚠ And **end on your own share, and make it structural.** _I was treating it as a scheduling problem because a scheduling problem is one I know how to chair._ **A chairman who ends on an apology has given the room nothing to do; one who ends on a habit has explained six meetings.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note about the returning item (80 words or more).'));
out.push(p('**______________ IS NOT THE ARGUMENT** · ______________ · _to ______________   **______________ has been on ______ of our last ______ agendas and I have worked out why.** ⚠ **We are not disagreeing about ______________.**   **The count first.** **______ agendas, about ______ minutes each: ______ hours.** ⚠ **And in those hours no ______________ has ever been ______________.**   **What I used to say.** _"______________."_ ⚠ **And everybody laughed** — **which I had taken for ______________ and now read as ______________.**   **What the disagreement actually is.** ⚠ ______________. **Both are defensible, and ______________.**   **So what I am asking for.** ⚠ **______ minutes on one question:** _"______________."_ **If we cannot answer it, ______________.**   **The dates.** ⚠ ______________.   **And one thing about myself.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The count in hours, with what the minutes hold',
  'Both sides of the real disagreement, either of them signable',
  'The question asked for instead of the item, with a consequence',
  'Your own share stated as a habit and not an apology',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their statement of the real disagreement**, and the room says whether both sides could sign it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: the count in hours, both sides signable, the question asked for, and your own share as a habit.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the count in hours with the empty record beside it, both sides of the real disagreement signable, the question asked for with a consequence, and your own share stated as a habit.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your count with an apology in front of it, and then flat.** ⚠ **The room says after which version it would have laughed** — **and it laughs after the first, every time, without being asked to.** Then the sentence the cycle ends on, which is Mrs Sabbagh\'s: **I was treating it as a scheduling problem because a scheduling problem is one I know how to chair.**'));
out.push(hw('Write the note (80+ words). ⚠ Then take the standing agenda you brought and do the arithmetic for every item on it: **how many meetings, and how many hours.** **Put the hours at the top of the page.** **Then mark each item 1, 2 or 3** — **nobody owns it, another body owns it, or it is not a question at all.** **19.6 puts the whole thing on one page**, which the chairman writes before the meeting and gives to the person taking the minutes.'));

// ===================== 19.6 =====================
out.push(pb());
out.push(h2('19.6  The chair\'s one page'));
out.push(p('**Function:** the chair\'s page — written before the meeting, given to the minute-taker   ·   **Grammar:** the five parts, in that order   ·   **Pronunciation:** the drafted formulation read as a draft and not as a decision'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, from memory: **the five parts of the chair\'s page.** ⚠ **Then say which of the five you have never seen anybody prepare.** **It is the fifth in almost every case** — **the decision sentences, drafted before the meeting** — **and most people think preparing it would be improper.**'));
out.push(board('I have the agenda here somewhere.', 'Purpose, in two halves. The one decision we must produce, and what we cannot decide today. The items, with a count. Who has not spoken, and the question for each. And the sentences I expect to read back.'));
out.push(p('**b**  Which order is right? **1** _items · purpose · formulations · who has not spoken · the one decision_  **2** _purpose · the one decision and what cannot be decided · the items with counts · who has not spoken · the drafted formulations_  **3** _purpose · the items · the formulations · the one decision · who has not spoken_  **4** _the one decision · purpose · the items · the formulations · who has not spoken_  **5** _purpose · the one decision · who has not spoken · the items · the formulations_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the chair does with the page, and what is the test of it?   **A** keeps it; count the items   **B** **gives it to the person taking the minutes, before the meeting** — and the test is one question to that person: **is there anything here you will have to invent?**   **C** reads it to the room; ask for approval'));
out.push(p('**b**  Listen again. **1** What does Mr Barghouti say happened when he was given the page?   **2** What warning does Ms Huda give about the drafted formulations?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.11  Is there anything you will have to invent', [
  ['Ms Huda', 'Mrs Sabbagh. Five parts, and you have started doing something unusual with the page.'],
  ['Nour', '**I give it to Mr Barghouti the day before.** ⚠ **The whole page, including the sentences I expect to read back.**'],
  ['Ms Huda', '**Mr Barghouti. What happened the first time?**'],
  ['Adnan', '⚠ **I read it and asked her one thing: who is getting the specification?** **It was not on the page, and it was the only open item that mattered.**'],
  ['Ms Huda', '**So the page found its own gap, the day before, in about four seconds.** ⚠ **That is the test and it is one question:** _is there anything here you will have to invent?_'],
  ['Omar', 'And the five parts?'],
  ['Nour', '**Purpose, in two halves.** ⚠ **The one decision this meeting must produce, and what it cannot decide today.** **The items, with a count beside anything that has returned.** **Who has not spoken at the last two meetings, and the question with a fact in it for each of them.** **And the sentences I expect to read back.**'],
  ['Dima', 'The fifth is the one that would stop me. Is it not deciding the meeting in advance?'],
  ['Ms Huda', '**It would be, if the sentence were read out as a decision.** ⚠ **It is read out as a draft, for correction** — **which is 19.2, and the draft exists so that the correction has something to attach to.**'],
  ['Nour', '⚠ **Two of my three drafts came back changed in June, and the third was changed twice.**'],
  ['Ms Huda', '**Which is the evidence that it is working.** ⚠ **A page whose drafted sentences all survive untouched has not been offered for correction** — **it has been announced.**'],
  ['Rim', 'How long is it?'],
  ['Ms Huda', '**One page, and most of it is the fifth part.** ⚠ **The purpose is two sentences, the items are a line each with a figure, the silent list is three names and three questions** — **and the formulations are the rest, because they are the thing that cannot be composed at four o\'clock.**'],
  ['Bassel', 'And the fourth part — three names on a page. Does that not feel like a list of the inadequate?'],
  ['Ms Huda', '**It is a list of the people the minute is binding without quoting**, and the chairman is the only person who can see it. ⚠ **Keep the questions on the page, not the judgements.** _Mrs Sweidan — what did the March figures show?_ **A name with a question beside it is a plan; a name on its own is a note about a person.**'],
  ['Hiba', 'And afterwards?'],
  ['Ms Huda', '**The page and the corrections are the minute.** ⚠ **Mr Barghouti writes from the page he was given plus what was changed** — **and that is why the six lines of 18.3 can be written in twenty minutes instead of two hours.**'],
  ['Mazen', 'And reading the drafts out?'],
  ['Ms Huda', '🔊 **As drafts: _I am going to write this_, then the sentence, then _correct me_, and a pause long enough for somebody to speak into.** ⚠ **Read without the pause it is an announcement**, **and the room will take it as one** — **and then the page really has decided the meeting in advance.**'],
]));
out.push(sp());
out.push(box('Language box – the chair\'s one page', [
  '**Five parts, in this order, written before the meeting.** ⚠ **1 The purpose, in two halves.** **2 The one decision this meeting must produce, and what it cannot decide today.** **3 The items, with a count beside anything that has returned.** **4 Who has not spoken at the last two meetings, and the fact-question for each.** **5 The sentences you expect to read back.**',
  '**The page is given to the person taking the minutes, the day before.** ⚠ **And the test is one question to them:** _is there anything here you will have to invent?_ **Mrs Sabbagh\'s page found its own gap in about four seconds** — **nobody was getting the specification.**',
  '**The fifth part is the one people think improper, and it is not** — ⚠ **because the sentence is read out as a draft, for correction, and not as a decision.** **The draft exists so that the correction has something to attach to.**',
  '⚠ **A page whose drafted sentences all survive untouched has not been offered for correction; it has been announced.** **Two of three came back changed in June and the third was changed twice.**',
  '**One page, and most of it is the fifth part.** ⚠ **The purpose is two sentences, the items a line each with a figure, the silent list three names and three questions** — **and the formulations are the rest, because they are the thing that cannot be composed at four o\'clock.**',
  '**The fourth part holds questions and not judgements.** ⚠ _Mrs Sweidan — what did the March figures show?_ **A name with a question beside it is a plan; a name on its own is a note about a person** — **and it is a list of the people the minute is binding without quoting.**',
  '**Afterwards, the page and the corrections are the minute.** ⚠ **The six lines of 18.3 can then be written in twenty minutes instead of two hours**, **because the only thing added after the meeting is what changed.**',
  '**Pronunciation.** 🔊 **Track 19.12** **As drafts:** _I am going to write this_, **the sentence,** _correct me_, **and a pause long enough for somebody to speak into.** ⚠ **Read without the pause it is an announcement, and the room will take it as one** — **and then the page really has decided the meeting in advance.**',
  '**And one warning for the whole unit.** ⚠ **A chairman who prepares all five parts and then runs the meeting from the agenda has prepared nothing.** **The page is used in the room or it is a private document about how the afternoon ought to have gone.**',
  '**Practise:** The five parts, one page. **1** the purpose in two halves  **2** the one decision, and what cannot be decided  **3** an item with its count  **4** a name with a fact-question  **5** a formulation drafted for correction',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a line from a chair\'s page. B says **which of the five parts it is, whether it is in the right place, and what must come before it.** ⚠ **Two rows on each card are notes about people rather than plans.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the line)_ __________.'],
  ['B', 'Part ______. **Right place / not.** **Before it:** __________.'],
]));
out.push(table(['Card A – the line', 'Card B – the line'], [
  ['_This meeting is to decide which escalations we answer in writing._', '_It stops being necessary when the promise field is in the system._'],
  ['_⚠ Mrs Sweidan — quiet, does not contribute._', '_⚠ Mr Hariri — talks too much, keep him short._'],
  ['_The roster: sixth time; two views of what the shift is for._', '_I am going to write this: the April wording is withdrawn today. Correct me._'],
  ['_⚠ Mr Ayoub — never says anything useful._', '_⚠ Mrs Khoury — will object to everything, as usual._'],
  ['_Mrs Sweidan — what did the March figures show?_', '_We cannot decide the field today; it is not ours._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the part number for each line and what must come before it. ⚠ **The four rows marked ⚠ are notes about people and not plans**, and none of them belongs on a page that another person is going to read. **The repair is the same in all four: replace the judgement with a question that has a fact in it.** **Ask what would happen if the page were left on a table.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write the chair\'s page for a real meeting, **five parts, one page** — **and draft the formulations you expect to read back.** ⚠ **Then strike out every judgement about a person and replace it with a question.**'));
out.push(p('**b**  Swap. **Your partner takes the part of the minute-taker** and asks the one question: ⚠ **is there anything here you will have to invent?** **They may invent something, and if they can, your page has a gap in it.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour gives the chair’s page to Adnan the day before — the whole page, including the sentences she expects to read back. Asked what happened the first time, he said he read it and asked her one thing: who is getting the specification? It was not on the page, and it was the only open item that mattered. So the page found its own gap, the day before, in about four seconds, and that is the test, in one question: is there anything here you will have to invent? The five parts are the purpose in two halves; the one decision this meeting must produce and what it cannot decide today; the items, with a count beside anything that has returned; who has not spoken at the last two meetings, and the question with a fact in it for each of them; and the sentences she expects to read back. Dima said the fifth would stop her, and asked whether it is not deciding the meeting in advance. It would be, if the sentence were read out as a decision — it is read out as a draft, for correction, and the draft exists so that the correction has something to attach to. Nour said two of her three drafts came back changed in June and the third was changed twice, which is the evidence that it is working: a page whose drafted sentences all survive untouched has not been offered for correction, it has been announced. Rim asked how long the page is, and one page, most of it the fifth part, because the formulations are the thing that cannot be composed at four o’clock. Bassel asked whether three names on a page does not feel like a list of the inadequate, and it is a list of the people the minute is binding without quoting, and the chairman is the only person who can see it — so keep the questions on the page and not the judgements, because a name with a question beside it is a plan and a name on its own is a note about a person. Hiba asked what happens afterwards, and the page and the corrections are the minute. And Mazen asked about reading the drafts out, which is done as drafts, with a pause long enough for somebody to speak into._'));
out.push(p('**Listener task:** write what your partner, as the minute-taker, would have had to invent.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the chair\'s page Nour writes for 26 June. Answer the questions.'));
out.push(model([
  '**CHAIR\'S PAGE · ESCALATION MEETING · 26 JUNE** · N. Sabbagh · _given to A. Barghouti, 25 June_',
  '**Purpose, to be read out before anything else and not again.** _This meeting is to decide which of the forty-one escalations we answer in writing, and in what form._ ⚠ _It stops being necessary when the promise field is in the system._',
  '**The one decision we must produce.** **The form of the written answer, agreed well enough for Mrs Shaaban to send it from Monday.** ⚠ **What we cannot decide today: the promise field itself, which is not ours** — **and I shall say so in the first minute, because last time three people spent twenty minutes on it.**',
  '**The items.** **1 The written answer _(forty minutes)_.** **2 What is the afternoon shift for? _(forty minutes; the roster has been on six of eight agendas and this is the question underneath it)_.** ⚠ **3 The specification — Mr Kabbani is getting it by 20 June; if it has not arrived, this is two minutes and not twenty.**',
  '**Who has not spoken at the last two meetings.** ⚠ **Mrs Sweidan** — _what did the March figures show?_ **Mr Ayoub** — _how many of the forty-one came through the gate?_ **Miss Mansour** — _which of the two forms is quicker to fill in at the bench?_ **All three are on the circulation list, all three are bound by whatever we write, and none of them has spoken since April.**',
  '**The sentences I expect to read back.** ⚠ _I am going to write this: from Monday, every escalation involving a promise is answered in writing, on the two-line form, by the officer who took the call. Correct me._ **And:** _I am going to write this: not decided, the promise field; Mr Kabbani is getting the specification; on the agenda for 24 July. Nobody acts before then. Correct me._',
  '**And one for the item I expect to fail.** ⚠ _I am going to write this: not decided, what the afternoon shift is for. Two views were stated and neither was withdrawn. The roster comes back once, on 10 July, and comes off if it is not decided. Correct me._ **I would rather draft that now than compose it at ten past six.**',
]));
out.push(item('1', 'What will she say in the first minute, and why?'));
out.push(item('2', 'What are the three questions for the people who have not spoken, and what do they have in common?'));
out.push(item('3', 'What has she drafted for the item she expects to fail, and why?'));
out.push(writers([
  'A chair\'s page in five parts: **the purpose in two halves** → **the one decision, and what cannot be decided today, with the reason** → **the items with times and counts** → **the names of the silent, each with a fact-question** → **the drafted formulations, each ending _correct me_** → **and one drafted close for the item you expect to fail.**',
  '⚠ **Give the undecidable item its reason and its history.** _Last time three people spent twenty minutes on it._ **A chairman who says only _this is not ours_ will be argued with; one who says how long it cost last time will not.**',
  '**Put a time against every item and a count against any that has returned.** _(forty minutes; the roster has been on six of eight agendas)_. ⚠ **And the third item\'s conditional** — _if it has not arrived, this is two minutes and not twenty_ — **is the line that saves the afternoon.**',
  '**Make every fact-question answerable by that person and by nobody else.** _How many of the forty-one came through the gate?_ ⚠ **A question anybody could answer is not drawing somebody out; it is a general invitation with a name in front of it.**',
  '⚠ And **draft the close for the item you expect to fail.** _I would rather draft that now than compose it at ten past six._ **It is the sentence that proves the page is a working document**, and it is the one nobody prepares.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the chair\'s page (80 words or more).'));
out.push(p('**CHAIR\'S PAGE · ______________ · ______________** · ______________ · _given to ______________   **Purpose.** _"______________."_ ⚠ _"It stops being necessary when ______________."_   **The one decision we must produce.** ______________. ⚠ **What we cannot decide today: ______________**, **and I shall say so in the first minute, because ______________.**   **The items.** **1 ______________ _(______ minutes)_.** **2 ______________ _(______ minutes; ______________)_.** ⚠ **3 ______________ — **if ______________, this is ______ minutes and not ______.**   **Who has not spoken.** ⚠ **______________** — _"______________?"_ **______________** — _"______________?"_   **The sentences I expect to read back.** ⚠ _"I am going to write this: ______________. Correct me."_   **And one for the item I expect to fail.** ⚠ _"______________."_'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The undecidable item with its reason and its history',
  'A time against every item and a count against any that returned',
  'Fact-questions answerable by that person and nobody else',
  'A drafted close for the item you expect to fail',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their fact-questions**, and the room says whether anybody else present could have answered them.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the purpose in two halves, the times and counts, the fact-questions, and the drafted close for the item you expect to fail.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the undecidable item with its history, a time and a count on the items, fact-questions only that person could answer, and a drafted close for the expected failure.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read one drafted formulation twice: with the pause after _correct me_, and without it.** ⚠ **The room says which one it would have spoken into** — **and nobody speaks into the second, because a sentence with no pause after it has been announced.** Then the sentence the cycle ends on, which is Mrs Sabbagh\'s: **I would rather draft that now than compose it at ten past six.**'));
out.push(hw('Write the chair\'s page (80+ words). ⚠ Then do the thing that makes it a chair\'s page rather than notes: **give it to whoever will write the minute, the day before, and ask one question** — **is there anything here you will have to invent?** **Bring what they said.** **In most cases they find one gap and it is an owner or a date.** **19.7 puts you between a chairman and somebody who was in the room and is not in the minute**, which is the mediation this whole unit has been heading for.'));

// ===================== 19.7 =====================
out.push(pb());
out.push(h2('19.7  Review & Mediate: The chair and the person who was not heard'));
out.push(p('**Function:** mediating between a chairman and somebody who was in the room and is not in the minute   ·   **Recycling:** Unit 19   ·   **Exam practice:** B2 First Reading and Use of English Part 5 · Writing Part 1 (the essay) · Listening Part 3'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 19 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** The meeting was adjourn until June.  **2** Her propose was accepted without amendment.  **3** The attend was eleven of the twelve.  **4** They ratify the minute at the following meeting.  **5** The decision was unanimity, for once.  **6** He interrupt her twice without saying why.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the meeting, and what each side says about it.'));
out.push(box(null, [
  '**ONE MEETING, TWO ACCOUNTS** _(a chairman and somebody who was in the room, three months apart)_',
  '**The minute.** _"Decided: the plastering contract is approved at the quoted price. (Mrs Khoury, as studio head.) Placed by 20 March. Not decided: the survey of the walls; nobody is getting the figures. On the agenda for 14 April. Fifty of the ninety minutes went on the photographs."_',
  '**The chairman.** _"Every part of that was said in the room. The purpose was stated in the first minute, the decision was read back and corrected twice, the open item has its three parts, and the sixth line is there. I have the page I wrote the day before."_',
  '**The person who was in the room.** _"I was eleven words into the sentence about the wall when I was stopped. I had the figure in my hand. The minute is accurate and the eleven millimetres are not in it, because they are not in the room."_',
  '⚠ **Both accounts are accurate and neither of them is about the minute.**',
  '**And the thing the chair\'s page cannot do.** **Its fourth part lists who has not spoken at the last two meetings** — **and Miss Sweidan had spoken.** **She said eleven words.**',
  '**The question for the cycle.** _Who notices, at the time, that a contribution was not finished?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. What does Ms Huda say the chair\'s page cannot see, and who does she say can?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.13  She said eleven words', [
  ['Ms Huda', 'A meeting run by everything this unit teaches, and Miss Sweidan is not in the minute. Mrs Sabbagh — is the minute wrong?'],
  ['Nour', 'No. ⚠ **It is the best minute that has come out of that room**, and she is right as well, which is the part I had not seen.'],
  ['Lubna', '⚠ **I had spoken.** **I said eleven words, and your page counts me as somebody who spoke.**'],
  ['Ms Huda', '**Then the mediation, and it is three moves.** One: **separate what the page is for from what the room needed.** ⚠ Two: **find the person the method cannot see.** Three: **say whether the chairman can supply it.**'],
  ['Omar', 'What is the page for?'],
  ['Nour', '**Making six honest lines writable.** ⚠ **It did that.** **Every line in that minute was said out loud and two of them were corrected.**'],
  ['Ms Huda', '**And the person it cannot see?**'],
  ['Dima', '⚠ **Somebody who spoke and was stopped.** **The fourth part catches silence and nothing else** — **and eleven words is not silence.**'],
  ['Ms Huda', '**Which is the finding of this cycle and it is new.** ⚠ **The chair\'s page protects the people who say nothing and misses the people who were interrupted** — **and the second group is the dangerous one, because the record shows them as having contributed.**'],
  ['Adnan', '⚠ **In the minute she is present and she spoke.** **There is nothing in any document that says she had not finished.**'],
  ['Rim', 'Can the chairman not watch for it?'],
  ['Ms Huda', '**Not reliably, and this is the honest part.** ⚠ **At the moment somebody is interrupted, the chairman is doing two other things: holding the formulation and watching the clock.** **The one person in the room with nothing else to do at that moment is whoever is writing.**'],
  ['Adnan', '⚠ **Which is a change to my job and not to hers, and nobody has asked me.**'],
  ['Ms Huda', '**And that is exactly where this stops.** ⚠ **The mediator names the question and hands it to the person who can answer it** — **and here it is Mr Barghouti, because it is his margin and his afternoon.**'],
  ['Bassel', 'What would it cost him?'],
  ['Adnan', '**A mark in the margin and one sentence at the end:** _two people stopped mid-sentence and did not resume._ ⚠ **About nine seconds.** **I am not saying yes in this room, because I want to try it twice first.**'],
  ['Hiba', 'And what must we not do?'],
  ['Ms Huda', '**Two things, and the second looks kind.** ⚠ **Do not improve the minute.** **And do not put Miss Sweidan on the silent list** — **she is not silent, and a list is not a place to put somebody who was interrupted.** **It would make her a problem instead of a contributor.**'],
  ['Mazen', 'And reading the two accounts?'],
  ['Ms Huda', '🔊 **One after the other, at the same speed, neither reasonable at the other\'s expense.** ⚠ **The chairman\'s account is a description of a method and Miss Sweidan\'s is a description of eleven words** — **and the second is harder to read aloud without sounding like a grievance.** **Read it as a report.**'],
]));
out.push(sp());
out.push(box('Language box – the chair and the person who was not heard', [
  '**The three moves.** ⚠ **1 Separate what the page is for from what the room needed.** **2 Find the person the method cannot see.** **3 Say whether the chairman can supply it.**',
  '⚠ **The finding, and it is new: the chair\'s page protects the people who say nothing and misses the people who were interrupted.** **Eleven words is not silence**, **and the second group is the dangerous one, because the record shows them as having contributed.**',
  '**And there is nothing in any document that says somebody had not finished.** ⚠ **In the minute she is present and she spoke.** **The absence is of a kind no minute has a line for.**',
  '**Why the chairman cannot see it reliably, which is the honest part.** ⚠ **At the moment somebody is interrupted the chairman is holding the formulation and watching the clock.** **The one person in the room with nothing else to do at that moment is whoever is writing.**',
  '⚠ **Which is a change to the minute-taker\'s job and not to the chairman\'s** — **and that is exactly where the mediation stops.** **The mediator names the question and hands it to the person whose margin and whose afternoon it is.**',
  '**What it would cost, if he agreed: a mark in the margin and one sentence at the end.** ⚠ _Two people stopped mid-sentence and did not resume._ **About nine seconds** — **and it is still his to refuse.**',
  '**Two things not to do, and the second looks kind.** ⚠ **Do not improve the minute.** **And do not put the interrupted person on the silent list** — **she is not silent, and a list is not a place to put somebody who was stopped.** **It would make her a problem instead of a contributor.**',
  '**Pronunciation.** 🔊 **Track 19.14** **The two accounts one after the other, at the same speed, neither reasonable at the other\'s expense.** ⚠ **The chairman\'s is a description of a method and the other is a description of eleven words** — **and the second is harder to read without sounding like a grievance.** **Read it as a report.**',
  '**And one line a chairman can add to any page tomorrow, which costs nothing.** ⚠ _Anybody who was stopped and did not finish: say so now, and we shall hear it before the item closes._ **Said at the end of each item, not at the end of the meeting** — **because by the end of the meeting nobody remembers which item it was.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a meeting and two accounts of it, and does **not** show them. A reads the minute, then both accounts. B makes the three moves: **what the method was for, the person it cannot see, and whether the chairman can supply it.** ⚠ **In one of the two pairs the minute is genuinely defective** — a decision was never formulated — **and B must say so rather than looking for somebody the method missed.** Change roles with the other pair.'));
out.push(table(['Pair A – the studio meeting', 'Pair B – the purchasing committee'], [
  ['_Purpose stated, decision corrected twice, open item in three parts._', '_⚠ Decision smooth, no corrections, nobody read anything back._'],
  ['_Chairman: "every part of it was said in the room."_', '_Chairman: "we were all agreed; I wrote it up afterwards."_'],
  ['_In the room: "I was eleven words in when I was stopped."_', '_In the room: "I would not have put it that way at all."_'],
  ['_⚠ The question: who notices an unfinished contribution._', '_⚠ Not that question: the decision was never formulated._'],
  ['_⚠ Answerable, by the minute-taker, and it is his to refuse._', '_⚠ The minute is defective and the remedy is a correction._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three moves for each pair. ⚠ **Pair B is not a question about who the method misses:** **a decision that was never read back is a defective minute**, and no change to anybody\'s margin will mend it. **Two different faults, two different remedies** — **a question handed to the minute-taker, and a correction circulated today.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **the last meeting you chaired or attended** and do the three moves on it in writing. ⚠ **Name the person the method cannot see.** Then the question the cycle ends on: **whose job would it be to notice, and have they been asked?**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what the page cannot do:  _A meeting run by everything the unit teaches, and Lubna is not in the minute. Asked whether the minute is wrong, Nour said no — it is the best minute that has come out of that room, and Lubna is right as well, which is the part she had not seen. Lubna had spoken: she said eleven words, and the page counts her as somebody who spoke. So the mediation, in three moves: separate what the page is for from what the room needed; find the person the method cannot see; and say whether the chairman can supply it. The page is for making six honest lines writable, and it did that — every line in the minute was said out loud and two of them were corrected. The person it cannot see, Dima said, is somebody who spoke and was stopped: the fourth part catches silence and nothing else, and eleven words is not silence. Which is the finding of the cycle and it is new — the chair’s page protects the people who say nothing and misses the people who were interrupted, and the second group is the dangerous one, because the record shows them as having contributed. Adnan said that in the minute she is present and she spoke, and there is nothing in any document that says she had not finished. Rim asked whether the chairman cannot watch for it, and not reliably, and this is the honest part: at the moment somebody is interrupted the chairman is holding the formulation and watching the clock, and the one person in the room with nothing else to do at that moment is whoever is writing. Adnan said that is a change to his job and not to hers, and nobody has asked him — and that is exactly where this stops: the mediator names the question and hands it to the person whose margin and whose afternoon it is. Bassel asked what it would cost him, and a mark in the margin and one sentence at the end, about nine seconds, and he said he was not saying yes in that room because he wanted to try it twice first. And Hiba asked what we must not do: two things, the second of which looks kind — do not improve the minute, and do not put Lubna on the silent list, because she is not silent and it would make her a problem instead of a contributor._'));
out.push(p('**Listener task:** write the person your own last meeting\'s method could not see, and whose job it would be to notice.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 5)', 7));
out.push(p('You are going to read an article about chairing meetings. For questions **1–6**, choose the answer (**A**, **B**, **C** or **D**) which you think fits best according to the text.'));
out.push(model([
  '**NINE SECONDS AT THE START**',
  'The woman who chairs the escalation meeting at a company in Damascus did not begin by changing her agenda. She began by doing arithmetic on it. Eight afternoons a year, eleven people, two hours each: about four hundred hours since 2024. Against that, the figure the meeting exists to move — thirty-four of forty-one escalations involving a promise recorded nowhere — stood in June exactly where it had stood at the first meeting.',
  'Her first conclusion was about herself rather than about the eleven. For two years she had opened the afternoon with a greeting and the agenda, which sounds like nothing and is in fact a decision: a meeting with no stated purpose becomes whatever its loudest item is, and for six of the last eight that item had been the roster. She does not say the roster is unimportant. She says it is not what the meeting is for, and that the two sentences are different.',
  'What she now says at the start takes about nine seconds and has two halves. The first is what the meeting is to decide. The second, which almost nobody writes, is what would make the meeting unnecessary — in her case, the arrival of a field in a computer system that is not hers to order. Her reason for including it is not modesty. In two years nobody had asked when that field was coming, and she had mentioned it four times without it ever becoming an item. A sentence said eight times a year, she reasons, will eventually produce the question that four hundred hours have not.',
  'The test she applies to herself is harsher than the sentence. At the end of a meeting she asks three people what it was for. The first time she did it she received four answers from three people, one of whom offered two. She reports this without embarrassment, as a measurement; and when a colleague suggested that stating the obvious might seem discourteous, she pointed at the four answers rather than defending herself.',
  'Not everything she has tried has been welcomed. The practice of drafting, before the meeting, the sentences she expects to read back has been called improper by two of the eleven, on the ground that it decides the afternoon in advance. Her answer is that a drafted sentence is offered for correction and not for assent, and that two of her three drafts in June came back changed. A page whose sentences all survive, she says, was never offered at all.',
]));
[
  '**1**  What does the writer suggest about the woman\'s first step?   **A** She measured the meeting before changing anything.   **B** She redesigned the agenda.   **C** She consulted the eleven participants.   **D** She reduced the number of meetings.',
  '**2**  What is implied by the phrase _which sounds like nothing and is in fact a decision_?   **A** that greetings waste time   **B** that an unstated purpose is itself a choice with consequences   **C** that agendas should be circulated earlier   **D** that the loudest item is usually the most important',
  '**3**  Why does she include the second half of her purpose sentence?   **A** to appear modest about her own meeting   **B** to protect herself if the meeting fails   **C** because the system field is her responsibility   **D** to provoke a question that two years of meetings have not produced',
  '**4**  How does the writer present her account of the four answers?   **A** as an admission she found humiliating   **B** as a criticism of the three colleagues   **C** as a measurement reported without embarrassment   **D** as evidence that the test does not work',
  '**5**  What does _she pointed at the four answers rather than defending herself_ suggest about her?   **A** that she dislikes being questioned   **B** that she treats the objection as answerable by evidence   **C** that she had not expected the objection   **D** that she considers courtesy unimportant',
  '**6**  What is her defence of drafting sentences in advance?   **A** that a draft invites correction, and hers were corrected   **B** that it saves time at the end of the meeting   **C** that the eleven have accepted it   **D** that the alternative is composing them too late',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of a chairman and somebody who was not heard (80 words or more).'));
out.push(p('**ONE MEETING, TWO ACCOUNTS** · ______________   **The minute.** _"______________"_   **The chairman.** _"______________"_   **The person who was in the room.** _"______________"_   ⚠ **Both accounts are accurate and neither is about ______________.**   **What the method is for.** ______________. ⚠ **It did that.**   **The person it cannot see.** ⚠ ______________.   **Can the chairman supply it?** ______________, **because at that moment ______________.**   **Whose question is it?** ⚠ ______________, **and it is theirs to refuse.**   **And what I am not doing.** ⚠ **Improving the minute**, and **putting ______________ on ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both accounts quoted, and both allowed to be accurate',
  'What the method is for, separated from what the room needed',
  'The person the method cannot see, in one sentence',
  'The question handed over, and said to be refusable',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **The essay, and the shape is 3.6: the question answered in the first sentence, both notes used with one developed further than the other, your own third point, and a conclusion that is not a summary.** **What Unit 19 adds is a figure: an essay about meetings that contains no count of hours, people or items has described a feeling.**',
  'In your English class you have been discussing meetings. Your teacher has asked you to write an **essay** answering this question:',
  '**Are meetings a necessary waste of time?**',
  '**Notes.** Write about: **1** what gets decided   **2** who is heard   **3** ______________ _(your own idea)_',
  'Write your **essay** in **140–190 words.**',
  '⚠ **Both given notes, or the content mark goes.** **And the third note is where the marks are** — **a third point taken from the unit** _(the purpose sentence, the item that is a proxy, the person who was interrupted)_ **is worth more than a general observation about modern working life.**',
], C.lorange, C.orange));
out.push(...lines(6));
out.push(pb());
out.push(stage('✓', 'Unit 19 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  The ___ of the minute took four minutes at the following meeting.   a) ratification   b) ratify   c) ratified',
  '2  The meeting was ___ until the budget line had arrived.   a) adjourn   b) adjourning   c) adjourned',
  '3  Her ___ was accepted without a single amendment, which is unusual.   a) propose   b) proposal   c) proposing',
  '4  ___ was eleven of the twelve, which is the best figure this year.   a) Attendance   b) Attend   c) Attending',
  '5  He ___ her twice in four minutes and did not say why either time.   a) interrupt   b) interrupting   c) interrupted',
  '6  The vote was ___, which it had not been in March.   a) unanimity   b) unanimous   c) unanimously',
  '7  The ___ of three members made a quorum impossible.   a) absent   b) absently   c) absence',
  '8  The ___ ran to forty minutes and produced no proposal at all.   a) deliberate   b) deliberation   c) deliberately',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 3 style – multiple matching).** 🔊 **Track 19.15** You will hear five people talking about a meeting they chair or attend. For questions **1–5**, choose from the list **A–H** what each speaker says. **Use each letter once only. There are three extra letters you do not need.**'));
out.push(box(null, [
  '**A**  I found that the item was a proxy for a different disagreement.',
  '**B**  I discovered that I had never said what the meeting was for.',
  '**C**  I was talked over and I did not resume.',
  '**D**  I acted on something that nobody had actually decided.',
  '**E**  I draft the decision sentences before the meeting begins.',
  '**F**  I counted how many of those present say nothing at all.',
  '**G**  I took an item off the agenda after writing down what it had cost.',
  '**H**  I asked three people what the meeting was for and got three answers.',
], C.grey, C.navy));
['**1**  Speaker 1  ______', '**2**  Speaker 2  ______', '**3**  Speaker 3  ______', '**4**  Speaker 4  ______', '**5**  Speaker 5  ______'].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 19.15  Audio script (read after the check)', [
  ['Speaker 1', 'The chairman said we would come back to it, at about twenty past four, and I took that to mean the thing was more or less settled in the direction the two of them had been pushing. So on the Monday I placed the order. I had the minutes open in front of me and I took it from the fourth paragraph, which records what two people said they would prefer. Nobody had decided anything. I am the most careful person in that section and I would do it again from the same page.'],
  ['Speaker 2', 'Six agendas, twenty minutes each, and in two hours no roster was ever proposed, amended or rejected. Two of us think the afternoon shift exists to clear the queue by six, and two think it exists so that somebody is in the building when the ministry telephones at four. Nobody had ever said either of those sentences out loud in that room. No arrangement of hours can satisfy both, which is why it came back six times.'],
  ['Speaker 3', 'Fifty of the ninety minutes, and it changed nothing. I wrote that in the minute in March and I wrote it again in April — not as a complaint, just as the sixth line, which is what the time was actually spent on. On the twenty-ninth of April somebody took it off the standing agenda without a word to me. Four years of people complaining about it in the room had achieved nothing at all.'],
  ['Speaker 4', 'Four times, and the same two people, and neither of them was being rude — they had something to say and I had stopped for breath. What I have never managed is to start again. Resuming means deciding that what you were saying was worth the interruption, and by the time you have decided that, the item has gone. In March I was eleven words in and I had the figure in my hand.'],
  ['Speaker 5', 'I write them the day before and I give the whole page to the man who takes the minutes. Two of the three came back changed in June and the third was changed twice, which is the point of them: the sentence is offered for correction and not for assent. Two of the eleven have told me it is improper and decides the afternoon in advance. A page whose sentences all survive was never offered at all.'],
]));
out.push(p('**C  Writing.** Write the essay (140–190 words): the question answered in the first sentence, both notes used, your own third point, and at least one count of hours, people or items.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 19)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say what a meeting is for, in two halves, in about nine seconds',
  '☐ read a decision back for correction instead of asking whether we agree',
  '☐ close an undecided item in three parts, with an owner and two dates',
  '☐ say the six words that stop the room acting before the date',
  '☐ interrupt by naming my reason and giving the turn back',
  '☐ go back for somebody who was talked over, by name',
  '☐ say the count before a returning item, and name the real disagreement',
  '☐ write the chair\'s page and give it to whoever writes the minute',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _call on · move on · come back to · run over · wind up · talk over · shout down · draw out · sum up · head off · cut in · stand down_.',
  '**This unit\'s word-formation set** _(Reading Part 5 in 19.7 draws on this)_: _attend → **attendance** · adjourn → **adjournment** · propose → **proposal** · deliberate → **deliberation** · ratify → **ratification** · amend → **amendment** · unanimous → **unanimity** · absent → **absence** · interrupt → **interruption**._',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Unit 19 · Student\'s Book');
