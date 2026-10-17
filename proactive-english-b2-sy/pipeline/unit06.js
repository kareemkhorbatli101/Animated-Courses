// Proactive English B2 · Syria Edition · Book 1 · Unit 6 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';
const slip = '**Peer review, B2 band.** Name the criterion, then **copy the line you are marking** — the line itself and not a summary of it — and then say what you found. Three sentences, three criteria, three quoted lines.';

out.push(h1('Unit 6  Deciding, and Saying So'));
out.push(p('_Proactive English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  'Unit 5 was about one sentence. This unit is about a **decision**: narrowing a set of options out loud, disagreeing without stopping the task, and writing the result down so that somebody who was not in the room can act on it.',
  '**6.1** narrows five options to two in front of other people.   **6.2** disagrees without ending the discussion.   **6.3** teaches **B2 First Speaking Part 3**, which is the longest piece of interaction in the examination.   **6.4** reports a decision you were **not** at.   **6.5** writes the five lines somebody can act on.   **6.6** counts what an unwritten decision costs.   **6.7** mediates between two people who think they agreed.',
  '**Exam practice in 6.7:** B2 First **Reading and Use of English Part 6** (a gapped text), **Writing Part 2** (a report) and **Listening Part 2** (sentence completion).',
  '⚠ **Bring two decisions.** One you were **not at** and have had to carry out. And one you **were at** that was **never written down**. **6.4 and 6.6 are built on the pair and neither works with an invented example.**',
  '**And the Mid-Book Test comes after this unit** — sixty minutes of paper and about twelve minutes of speaking, with all four Speaking parts in it. It is also the last time anybody will remind you to keep the **1.7 essay**, which is not wanted until Unit 12.',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 6.1 =====================
out.push(pb());
out.push(h2('6.1  Five into two'));
out.push(p('**Function:** narrowing a set of options out loud, and saying what you are discarding   ·   **Grammar:** _that rules out_ · _we can take those two together_ · _which leaves us with_   ·   **Pronunciation:** the list that is still open and the list that has closed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the decision you were **not** at, in one sentence. Then say the one you **were** at that was never written down. Again, say nothing about either of them — the class is collecting, and 6.4 and 6.6 will do the explaining.'));
out.push(board('There were five ways of doing it and we picked one.', 'That rules out two, which leaves us with the field and the log.'));
out.push(p('**b**  Which of these narrows, and which only comments? **1** _That rules out the free-text box._  **2** _They all have something to be said for them._  **3** _We can take the second and the fourth together._  **4** _It is a difficult question._  **5** _Which leaves us with two, and I would drop the log._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say a discussion of five options almost always produces, and what does Nour discover about the way her own meeting went?   **A** a decision; that it was efficient   **B** five short speeches and no narrowing, because every speaker defends one option and nobody discards any; that in forty minutes nobody said the word _no_ about anything   **C** an argument; that everybody agreed'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say you must do before you may add an option?   **2** What does Dima say about the person who speaks last?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.1  Five short speeches and no decision', [
  ['Ms Huda', 'Five ways of recording a promise, on the board. A new field on the form. The free-text box. A separate promise log. A note on the call recording. Or nothing, and ask at the end of the month. Mrs Sabbagh, your meeting had these five in front of it for forty minutes. What came out?'],
  ['Nour', 'Nothing came out. We agreed to come back to it.'],
  ['Ms Huda', 'And in the forty minutes, how many of the five did anybody say **no** to?'],
  ['Nour', 'None. Everybody said what was good about the one they had brought.'],
  ['Ms Huda', '⚠ **Which is what a discussion of five options almost always produces: five short speeches and no narrowing.** Each speaker defends one, nobody discards any, and at the end the list is exactly as long as it was at the beginning. The work of a decision is not choosing. **It is discarding, out loud, in front of the person who proposed the thing.**'],
  ['Omar', 'Which nobody wants to do.'],
  ['Ms Huda', 'Nobody wants to do it and everybody can be taught to. There are three sentences and they are the whole cycle. **_That rules out…_** — one option gone, with a reason. **_We can take those two together_** — two options collapsed into one, which is the cheapest move of the three and the most under-used. And **_which leaves us with…_** — the count said out loud, so that everybody knows how long the list now is.'],
  ['Jad', 'The middle one is new to me.'],
  ['Ms Huda', 'It is the one that saves the time. The free-text box and the note on the recording are not two options: they are one option — _write it somewhere nobody will search_ — and collapsing them removes an item without refusing anybody. ⚠ **A speaker who can collapse two options has discarded one without telling anybody that their idea was poor**, which is why it is worth more than the other two put together.'],
  ['Rim', 'And if somebody adds a sixth?'],
  ['Ms Huda', 'Then they must discard one first, and that is a rule worth having out loud in any meeting you chair. ⚠ **No addition without a discard.** A list that only grows is a list that will be taken away and decided by somebody who was not in the room.'],
  ['Dima', 'In our meetings the person who speaks last wins, and it is not because the last argument is best.'],
  ['Ms Huda', 'Say why.'],
  ['Dima', 'Because everybody is tired and the last option mentioned is the one in everybody\'s head. I have watched it for eleven years. **The best way to carry a meeting is to speak last and keep it short.**'],
  ['Ms Huda', '⚠ Which is true, and it is the argument for **counting out loud** as you go. _Which leaves us with two_ puts the list back in everybody\'s head and takes the advantage away from whoever happens to be speaking at the end.'],
  ['Adnan', 'The directorate does it the other way. The list comes down from above with one item on it.'],
  ['Ms Huda', 'Then your work is the reason, and not the choosing — which is 6.4, and it is the half of this unit most of this room actually lives in. Now the sound. 🔊 Listen to the list twice.'],
  ['Mazen', 'The second one falls at the end.'],
  ['Ms Huda', '**And that is how a room knows a list has closed.** A list read with a rise on every item is still open and invites a sixth. A list with a fall on the last item has been shut, and the next thing anybody says will be about the two that are left.'],
]));
out.push(sp());
out.push(box('Language box – narrowing out loud', [
  '**The three sentences, and they are the whole cycle.** **_That rules out the free-text box_** — one option gone, **with a reason attached**. **_We can take the second and the fourth together_** — two options collapsed into one. **_Which leaves us with two_** — the count said out loud so that the room knows the length of the list.',
  '⚠ **The work of a decision is not choosing; it is discarding, out loud, in front of the person who proposed the thing.** A discussion of five options almost always produces five short speeches and no narrowing: each speaker defends one, nobody discards any, and the list is as long at the end as at the beginning.',
  '**Collapsing is the cheapest of the three moves and the most under-used.** The free-text box and the note on the recording are one option — _write it somewhere nobody will search_ — and collapsing them removes an item **without refusing anybody**. A speaker who can collapse two options has discarded one without telling anybody that their idea was poor.',
  '**No addition without a discard.** If somebody adds a sixth, they discard one first. ⚠ A list that only grows is a list that will be taken away and decided by somebody who was not in the room, which is the commonest way a meeting loses control of its own subject.',
  '**Count out loud, and keep counting.** _Which leaves us with two._ The reason is not tidiness: the last option mentioned is the one in everybody\'s head, so **the advantage in a tired room belongs to whoever speaks last**. Counting puts the whole list back and takes that advantage away.',
  '**The reason goes with the discard, in the same breath.** _That rules out the log, because nobody will open a second book during a call._ ⚠ A discard with no reason is heard as a preference and will be reopened in ten minutes; a discard with a reason is heard as a finding and stays discarded.',
  '**Three phrases for the discard itself, in rising order of firmness.** _I would put that one aside for now._ · _That rules it out._ · _That one cannot work, and here is why._ Use the first on somebody senior, the second on a proposal, and the third on your own earlier idea — which is the one discard that costs nothing and buys most.',
  '**Pronunciation.** 🔊 **Track 6.2** A list read with a **rise on every item** is still open and invites a sixth: _the field ↗ the box ↗ the log ↗_. A list with a **fall on the last item** has closed: _the field ↗ the box ↗ the log ↘_. ⚠ Shut a list you did not mean to shut and somebody will add an item to prove it is still open.',
  '**Practise:** Narrow five to two out loud, with a reason on every discard. **1** five ways of recording something  **2** five ways of telling people  **3** five places to keep a form  **4** five times of day  **5** five people who could do it',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the five options from the card. B discards one with a reason, collapses two with a reason, and then counts out loud what is left. A may add a sixth **only** by discarding one first. B then names the two survivors and says which they would take. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the five)_ __________, __________, __________, __________, __________.'],
  ['B', 'That rules out __________, because __________.'],
  ['B', 'And we can take __________ and __________ together, because they are both __________.'],
  ['B', 'Which leaves us with __________. I would take __________, because __________.'],
  ['A', '_(adding one, with a discard)_ I would put __________ aside and add __________.'],
]));
out.push(table(['Card A – the five options', 'Card B – the five options'], [
  ['_Recording a promise: a new field · the free-text box · a separate log · a note on the recording · ask at month end_', '_Telling the night staff: the handover sheet · the noticeboard · a message to each · the shift meeting · tell the sister only_'],
  ['_Keeping the lot number: the box on the sheet · the label · a photograph · the pharmacy copy · nowhere_', '_Fixing the timetable: reprint it · one word changed · a note at the door · tell the six drivers · leave it_'],
  ['_Who checks the October sheets: the night sister · the day staff · both · an auditor · nobody_', '_Who writes the decision down: whoever chairs · whoever proposed it · a secretary · everybody · nobody_'],
  ['_When to send the refusal: the same day · within three days · after the loading date · after a telephone call · not at all_', '_Where to put the batch number: the fault book · the handset · a card · the customer\'s receipt · all four_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the discards, the collapse and the count. Then the finding: **almost every pair discards with a preference and not a reason** on a first run — _I do not really like the log_ — and a discard with no reason is reopened within the minute. ⚠ Count the collapses as well: there are usually none, because collapsing has to be thought of and refusing does not.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the decision you **were** at. Write down the options that were in front of the room, and then the two that should have survived — with a reason on each discard.'));
out.push(p('**b**  Swap. Then each of you say how many options your partner\'s meeting started with, how many it finished with, and whether anybody said **no** to anything out loud.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Five ways of recording a promise went on the board, and Nour\'s own meeting had the same five in front of it for forty minutes. What came out of it was nothing: they agreed to come back to it. Asked how many of the five anybody had said no to in those forty minutes, she said none — everybody said what was good about the one they had brought. Which is what a discussion of five options almost always produces: five short speeches and no narrowing, because each speaker defends one option and nobody discards any, so the list is exactly as long at the end as at the beginning. The work of a decision is not choosing; it is discarding, out loud, in front of the person who proposed the thing. Omar said nobody wants to do that, and Ms Huda said nobody wants to and everybody can be taught to, and gave three sentences. That rules out — one option gone, with a reason. We can take those two together — two collapsed into one. And which leaves us with — the count said out loud. Jad said the middle one was new to him, and it is the one that saves the time: the free-text box and the note on the recording are not two options but one, which is write it somewhere nobody will search, and collapsing them removes an item without refusing anybody. Rim asked what happens if somebody adds a sixth, and the rule is no addition without a discard, because a list that only grows will be taken away and decided by somebody who was not in the room. Then Dima said that in her meetings the person who speaks last wins, and not because the last argument is best: everybody is tired and the last option mentioned is the one in everybody\'s head. She has watched it for eleven years. Which is the argument for counting out loud as you go, because the count puts the list back in everybody\'s head and takes the advantage away from whoever happens to be speaking at the end._'));
out.push(p('**Listener task:** write how many options your partner\'s meeting began with and how many it ended with.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Nour sends the two who own the template, after the second meeting. Answer the questions.'));
out.push(model([
  '**THE PROMISE FIELD · five options, narrowed** · N. Sabbagh · 6 November',
  'This is the note I should have written before the meeting of 29 October and not after it. Five options were in front of us for forty minutes and we agreed to come back to the question. **This note discards three of them, with a reason on each, and leaves two.**',
  '**Discarded: the free-text box and the note on the call recording.** These are one option and not two, and the option is _write it somewhere nobody will search_. The free-text box is searched by nobody because it has four thousand entries and no field structure; the recordings are searched only when there is a complaint, which is after the damage. **Collapsed and then ruled out, on the same ground.**',
  '**Discarded: ask at the end of the month.** The promises that matter are the ones made in week one and remembered in week four. We have tried this twice, in March and in June, and both times the figure that came back was about a third of the figure in the call notes — which is what a month of memory does.',
  '**Left: a new field on the form, or a separate promise log.** The field costs two hours of somebody\'s time in the October release and is in the place where the promise is made. The log costs nothing and is a second book to open during a call, which the eleven of us will not do when a customer is waiting.',
  '**Which of the two I would take, and this is a recommendation and not a decision.** The field. ⚠ **And I shall say the thing against it, because somebody else will if I do not:** the October release is full and the field will take the place of something. The log is free and will not be used. **A cheap thing that is not used costs more than an expensive thing that is.**',
  '**What would reopen the question.** If the field cannot be in the October release, the log becomes the only candidate and the question is no longer which but how to make a second book worth opening — which is a different question and a worse one.',
  '**What I am asking for, and it is not agreement.** A decision, by 20 November, with a name on it. If the answer is the log I shall write the procedure for it and say nothing further about the field.',
]));
out.push(item('1', 'Which two options does she collapse, and on what ground does she then rule them out?'));
out.push(item('2', 'What does she say against her own recommendation, and why does she say it?'));
out.push(item('3', 'What is she asking for, and what is she **not** asking for?'));
out.push(writers([
  'A narrowing note: **say what the meeting had in front of it and what came out of it** → **the collapse, with the two options named as one** → **each discard, with its reason** → **what is left, with the cost of each** → **your recommendation, named as a recommendation** → **the thing against it, said by you** → **what would reopen the question** → **and the request, which is a decision and not agreement**.',
  '**Put the count in the first three lines.** _Five options for forty minutes and we agreed to come back to the question._ A narrowing note that begins by explaining the problem has lost its only advantage over the meeting it follows.',
  '⚠ **Collapse before you discard, and say that you are doing it.** _These are one option and not two._ A reader who is shown a collapse sees a list getting shorter for a reason; a reader shown three refusals in a row sees somebody clearing the table.',
  '**Say the thing against your own recommendation, and say it in your own words.** _The October release is full and the field will take the place of something._ Somebody else will say it within a day, and a writer who has said it first is the person the objection is brought **to** rather than the person it is used **against**.',
  '⚠ And ask for **a decision with a name on it**, not for agreement. Agreement is free and changes nothing; a decision has a date and a person, and it is what ends the forty minutes.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the narrowing note (80 words or more).'));
out.push(p('**______________ · ______________ options, narrowed** · ______________ · ______________   This is the note I should have written before ______________. ______ options were in front of us for ______ minutes and ______________.   **Discarded: ______________ and ______________.** These are one option and not two, and the option is ______________. ______________.   **Discarded: ______________.** ______________. We have tried this ______________ and ______________.   **Left: ______________, or ______________.** The first costs ______________. The second costs ______________.   **Which I would take, and this is a recommendation and not a decision.** ______________. And the thing against it: ______________.   **What would reopen the question.** ______________.   **What I am asking for.** A decision, by ______________, with a name on it.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The count, in the first three lines',
  'One collapse, named as a collapse',
  'A reason on every discard',
  'The thing against the writer\'s own recommendation, in the writer\'s words',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their collapse — the two options they turned into one.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more): the count, the collapse, each discard with its reason, what is left with its cost, your recommendation named as one, the thing against it, what would reopen the question, and a request for a decision with a name and a date on it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the count given early, one collapse, a reason on every discard.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read only your discards, with their reasons, and nothing else.** The room says which discard it would reopen, and there is usually one. Then the sentence to leave the cycle on, which is Dima\'s: **the best way to carry a meeting is to speak last and keep it short** — eleven years of watching it, and the only defence is a count said out loud.'));
out.push(hw('Write the note (80+ words). Then count: in the last meeting you were at, how many options were in front of the room at the start and how many at the end? Write the two numbers down.'));

// ===================== 6.2 =====================
out.push(pb());
out.push(h2('6.2  I take the point, but not the whole of it'));
out.push(p('**Function:** disagreeing without stopping the task   ·   **Grammar:** _I take the point about … ; I do not take it about …_ · _granted that_ · _even allowing for_   ·   **Pronunciation:** the fall-rise that says a limit is coming'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one thing somebody told you that was **half** right. Then say it again as two sentences: the half you accept, and the half you do not. Say which of the two versions you have ever actually used at work.'));
out.push(board('You\'re right, I suppose.', 'I take the point about the cost; I do not take it about the time.'));
out.push(p('**b**  Which concessions name their limit? **1** _You are quite right._  **2** _Granted that the night staff were not told, that does not explain the October sheets._  **3** _I see what you mean._  **4** _Even allowing for the reprint, forty-one is forty-one._  **5** _That is true of the day sheets; it is not true of the night ones._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say a complete agreement does to a discussion, and what does Omar find he does in every meeting?   **A** improves it; nothing   **B** ends it, because there is nothing left to say and the task stops before it is finished; that he concedes the whole of a point in order to stay polite, and then has to raise it again later from the beginning   **C** shortens it; disagrees too much'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say the difference is between _I agree_ and _I agree about that_?   **2** What does Hiba say the examiner is marking in Part 3?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.3  The half I accept and the half I do not', [
  ['Ms Huda', 'Something that was half right, Mr Darwish — and what did you say to it?'],
  ['Omar', 'Mr Saqqal told me the pads are a printing problem and not a dispatch problem, and I said he was probably right. He is not right. He is right about the printing and wrong about the dispatch, and I knew that when I said it.'],
  ['Ms Huda', 'Why did you say it?'],
  ['Omar', 'Because the other thing would have taken four minutes and we had six items left.'],
  ['Ms Huda', '⚠ **And then you raised it again the following week from the beginning**, which took twenty. That is the arithmetic of the polite concession: you buy four minutes and you pay twenty, and the second time you have to explain why you agreed before.'],
  ['Hiba', 'Which is also the thing my assessors keep writing about me, in the opposite direction. _Does not take a position._'],
  ['Ms Huda', 'Then here is the sentence, and it is one sentence with two halves. **_I take the point about the printing; I do not take it about the dispatch._** You have conceded something real, you have named the limit of it, and **the discussion is still running** — which is the whole purpose.'],
  ['Jad', 'What is wrong with just saying _I agree_?'],
  ['Ms Huda', '⚠ **It ends the discussion.** _I agree_ has nothing after it and the task stops, often before it is finished. _I agree **about that**_ has a limit in it and the next sentence is already implied. **Two words of difference, and one of them ends a meeting and the other one keeps it open.**'],
  ['Dima', 'There are three or four of these, are there not?'],
  ['Ms Huda', 'Four worth having. **_I take the point about X; I do not take it about Y._** **_Granted that…, that does not explain…_** — which concedes a fact and refuses its consequence, and it is the strongest of the four. **_Even allowing for…_** — which concedes a whole argument and shows that the figure survives it. And the plainest: **_That is true of the day sheets; it is not true of the night ones._**'],
  ['Lubna', 'The second one sounds like an argument.'],
  ['Ms Huda', 'It is an argument, and it is a polite one, because the conceded half is said **first** and in full. ⚠ **The order is not optional: concede, then limit.** _That does not explain the October sheets, although granted the night staff were not told_ is the same two halves in the wrong order, and it reads as a refusal with a courtesy attached.'],
  ['Rim', 'And if the whole thing really is right?'],
  ['Ms Huda', 'Then say so, in one sentence, and say what follows from it. ⚠ **A full concession is not weakness; a full concession with nothing after it is.** _You are right, and that means the log is the only candidate_ is a strong sentence. _You are quite right_ is the end of your turn.'],
  ['Hiba', 'In the examination this is Part 3, is it not? They are marking the interaction.'],
  ['Ms Huda', 'They are marking **interactive communication**, and the two things that lose it are agreeing at once and disagreeing without a reason. Which is why the sentence is worth drilling until it is automatic: it does both of the things the descriptor wants in eleven words.'],
  ['Mazen', 'And the sound of it?'],
  ['Ms Huda', '🔊 **A fall-rise on the conceded half** — _I take the point about the **PRIN**ting_ ↘↗ — which tells the listener a limit is coming and stops them replying to the concession. A full fall there and the room hears agreement, and somebody else starts talking.'],
]));
out.push(sp());
out.push(box('Language box – conceding, and naming the limit', [
  '**The four worth having.** **_I take the point about X; I do not take it about Y._** · **_Granted that…, that does not explain…_** — concedes a fact and refuses its **consequence**, and it is the strongest of the four. · **_Even allowing for…_** — concedes a whole argument and shows the figure survives it. · **_That is true of the day sheets; it is not true of the night ones._** — the plainest, and the one to use with somebody senior.',
  '⚠ **The order is not optional: concede, then limit.** The conceded half goes first and in full. _That does not explain the October sheets, although granted the night staff were not told_ is the same two halves reversed, and it reads as a refusal with a courtesy attached to it.',
  '**_I agree_ ends a discussion. _I agree about that_ keeps it open.** Two words of difference. The first has nothing after it and the task stops, often before it is finished; the second has a limit in it and the next sentence is already implied.',
  '**The arithmetic of the polite concession, which is Mr Darwish\'s.** Conceding the whole of a point to save four minutes costs twenty the following week, **and the second time you must also explain why you agreed before** — which is the part nobody budgets for.',
  '⚠ **A full concession is not weakness; a full concession with nothing after it is.** _You are right, and that means the log is the only candidate_ is a strong sentence. _You are quite right_ is the end of your turn, and in an examination it is the end of your marks for that minute.',
  '**What makes a concession real.** It must concede something the other person would recognise as **their** point, named in their words. _I take the point about the printing_ — the printing is his word. A concession to a point nobody made is heard as a manoeuvre and it is the commonest fault at B2.',
  '**And the limit has to be a different thing, not a smaller version of the same thing.** _I take the point about the cost; I do not take it about the time_ ✓ — two different objections. _I take the point about the cost; I do not take it about how expensive it is_ ✗ — which is a contradiction wearing a concession\'s clothes.',
  '**Pronunciation.** 🔊 **Track 6.4** A **fall-rise** on the conceded half — _I take the point about the **PRIN**ting_ ↘↗ — tells the listener a limit is coming and stops them replying to the concession. ⚠ A full fall there and the room hears agreement; somebody else begins talking, and the limit never gets said.',
  '**Practise:** Concede the half that is true and name the limit, in one sentence. **1** about a cost  **2** about a date  **3** about whose fault it is  **4** about a figure  **5** about something you did yourself',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A makes the claim on the card — all of it, as though they believed it. B concedes the half that is true, in A\'s own words, and names the limit. A says whether the conceded half was a point they had actually made. B then says what follows from the limit. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the claim)_ __________.'],
  ['B', 'I take the point about __________; I do not take it about __________.'],
  ['A', 'That **is / is not** the point I was making, because __________.'],
  ['B', 'And what follows from the second half is __________.'],
]));
out.push(table(['Card A – make this claim', 'Card B – make this claim'], [
  ['_The pads are a printing problem and not a dispatch problem._', '_The lot box is optional, because the form says_ where applicable_._'],
  ['_The drivers are not late; the timetable is a guide._', '_The fourth decimal is noise in any instrument._'],
  ['_The fault is the model and not the batch._', '_Nobody reads a handover sheet twice, so the box cannot matter._'],
  ['_The paragraph was cut because it was too long._', '_The free-text box is searchable, so a field is unnecessary._'],
  ['_Nobody asked for the promise field, so nobody wants it._', '_The minute does not give a reason because there was no objection._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the conceded half and the limit in each of the eight. Then the count: **in three or four of the eight the conceded half is not a point the claimant made** — it is a smaller, safer claim invented by the conceder. ⚠ That is the fault to name, because it is invisible to the person doing it and obvious to the person being conceded to.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the thing somebody told you that was half right, and build the sentence: the half you accept, in **their** words, and the limit.'));
out.push(p('**b**  Swap. Then each of you say whether your partner\'s conceded half and limit are two **different** things, or the same thing twice. If they are the same thing twice, the sentence is a contradiction and the discussion will stop on it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Omar had been told that the pads are a printing problem and not a dispatch problem, and he said the man was probably right. He is not right: he is right about the printing and wrong about the dispatch, and Omar knew it when he said it. Asked why he said it, he said the other thing would have taken four minutes and they had six items left. And then he raised it again the following week from the beginning, which took twenty — which is the arithmetic of the polite concession: you buy four minutes and you pay twenty, and the second time you also have to explain why you agreed before. Hiba said that is what her assessors keep writing about her from the other direction: does not take a position. So the sentence, which is one sentence with two halves: I take the point about the printing; I do not take it about the dispatch. Something real conceded, the limit named, and the discussion still running. Jad asked what is wrong with saying I agree, and the answer is that it ends the discussion — I agree has nothing after it and the task stops, often before it is finished, while I agree about that has a limit in it and the next sentence is already implied. Two words of difference, and one of them ends a meeting. Then the four worth having: the take-the-point one; granted that, which concedes a fact and refuses its consequence and is the strongest; even allowing for, which concedes a whole argument and shows the figure survives it; and the plainest, that is true of the day sheets and not of the night ones. Lubna said the second sounds like an argument, and it is one, and it is polite because the conceded half comes first and in full — the order is not optional. Rim asked what to do when the whole thing is right, and the answer is to say so and say what follows: a full concession is not weakness, but a full concession with nothing after it is._'));
out.push(p('**Listener task:** write your partner\'s concession and limit, and whether they are two different things.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Dima writes to a contributor whose paragraph was cut. Answer the questions.'));
out.push(model([
  '**YOUR THIRD PARAGRAPH · why it went, and what you are right about** · D. Khoury · 7 November',
  'You wrote to me on Tuesday to say that the third paragraph was cut because it was long, that length is not a fault, and that the piece now says less than it did. **You are right about two of those three and I shall take them in order.**',
  '**Granted that length is not a fault.** It is not, and I have said so in print. The best paragraph in the October issue is a hundred and ninety words long and I cut nothing out of it. ⚠ **That does not explain your third paragraph**, which went for a different reason, and I should have given you the reason on Tuesday instead of the word _space_.',
  '**You are also right that the piece now says less.** It does. It has lost a qualification that was true, and a reader who wanted that qualification will not find it. **I accepted that loss and I should have told you I was accepting it.**',
  '**What I do not take is the third thing: that length is why it went.** It went because it contained **two** findings — the supply figure and the pricing figure — and a paragraph with two findings in it is summarised by whichever of the two comes first. Yours came first and it was the weaker of the two.',
  '**Even allowing for everything you say about the cut being clumsy**, which it was, the pricing figure is the one the piece needed and the one the contents line now carries. **Nine of eleven pharmacies offered stock in one week** is the sentence that has been quoted back to this office four times since Thursday.',
  '**What I am proposing, and it is not a restoration.** The qualification goes back in, in the fourth paragraph, as **one sentence** of its own: _the figure covers the two governorates we were able to reach, and not the four we were not._ It is the best thing in the paragraph I cut, and standing alone it is stronger than it was standing third.',
  '**And what I shall do differently, which is about me and not about the paragraph.** I cut it at eleven at night and sent the piece at midnight with the word _space_ in the covering line. **The cut was right and the covering line was cowardly**, and the cowardly line is the reason we have spent three days on this.',
]));
out.push(item('1', 'How many of the contributor\'s three claims does she accept, and which does she refuse?'));
out.push(item('2', 'What does she say the real reason for the cut was?'));
out.push(item('3', 'What does she say was right and what was cowardly?'));
out.push(writers([
  'A page that concedes and limits: **name all three of the other person\'s claims and say how many you accept** → **the first concession, in full, with your own evidence for it** → **the second concession, including what it cost** → **the limit, named as the one thing you do not take** → **_even allowing for_, with the figure that survives** → **what you propose, which is not what they asked for** → **and the thing about yourself**.',
  '**Count their claims and say the number.** _You are right about two of those three._ A reader told the count reads the rest as arithmetic; a reader who is not reads it as a defence.',
  '⚠ **Concede with your own evidence, not with a courtesy.** _The best paragraph in the October issue is a hundred and ninety words long and I cut nothing out of it._ A concession backed by something of your own cannot be read as a tactic — which is exactly what _of course you have a point_ is.',
  '**Put the limit after both concessions and name it as the third claim.** _What I do not take is the third thing._ ⚠ Numbering the refusal keeps the page from reading as a refusal: the reader can see that one of three is in dispute.',
  '⚠ And end on your own part, specifically and not generally. _The cut was right and the covering line was cowardly._ A page that concedes two points and admits nothing of its own has conceded nothing: the writer has been generous with somebody else\'s material.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page that concedes and limits (80 words or more).'));
out.push(p('**______________ · ______________** · ______________ · ______________   You wrote to me on ______________ to say that ______________, that ______________, and that ______________. **You are right about ______ of those ______ and I shall take them in order.**   **Granted that ______________.** ______________. **That does not explain ______________**, which ______________.   **You are also right that ______________.** ______________. I accepted that and ______________.   **What I do not take is ______________.** ______________ because ______________.   **Even allowing for ______________**, ______________ is the one that ______________.   **What I am proposing, and it is not ______________.** ______________.   **And what I shall do differently.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The other person\'s claims counted, with the number said',
  'Each concession backed by the writer\'s own evidence',
  'The limit named as one of the numbered claims',
  'Something of the writer\'s own admitted at the end',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their limit — the one claim of the three they do not take.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): their claims counted, two concessions with your own evidence, the limit named and numbered, an _even allowing for_ with the figure that survives it, a proposal that is not what they asked for, and the thing about yourself.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the claims counted, a concession in the other person\'s words, a limit that is a different thing and not the same thing twice.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your concession and your limit as one sentence, aloud, with the fall-rise on the conceded half.** The room says whether a limit was coming. Then the arithmetic to leave the cycle on, which is Omar\'s: **four minutes bought and twenty paid**, and the second time he had to explain why he had agreed before.'));
out.push(hw('Write the page (80+ words). Then find **one** thing you agreed to this week that you did not actually agree with, and write the two-halved sentence you should have said.'));

// ===================== 6.3 =====================
out.push(h2('6.3  Two minutes, and then one'));
out.push(p('**Function:** the collaborative discussion and the separate decision — **B2 First Speaking Part 3**   ·   **Grammar:** the four moves · _which of them would you drop?_ · _so we are agreeing on … and giving up …_   ·   **Pronunciation:** talking to your partner and not to the examiner'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, with a watch on the desk. You have **fifteen seconds** to read five options, **two minutes** to discuss them, and then **one minute** to decide. Do the whole thing once, now, before anything is explained, and notice what you run out of.'));
out.push(board('What do you think? — I don\'t know, what do you think?', 'Which of the five would you drop first, and why?'));
out.push(p('**b**  Which of these keeps a two-minute discussion moving? **1** _What do you think?_  **2** _Which of them would you drop first?_  **3** _I agree._  **4** _Shall we take those two together?_  **5** _Yes, exactly._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say candidates run out of in Part 3, and what does she say the one-minute task is **not**?   **A** words; a summary   **B** not things to say but the two minutes, having spent them agreeing — and the one-minute task is not a summary of the discussion but **a decision**, which has to be made and said   **C** time; a repeat'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say about dividing the list between the two candidates?   **2** What does Jad say happened in his forty-minute call with the four editors?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.5  Two minutes, and the minute after it', [
  ['Ms Huda', 'Watches down. What ran out?'],
  ['Omar', 'The two minutes. We had agreed by about the fortieth second and then we were repeating ourselves.'],
  ['Ms Huda', '⚠ **Which is the single most common thing that happens in Part 3, and it is worth knowing that it is not a shortage of ideas.** Nobody runs out of things to say about five options. **They run out of the two minutes, having spent them agreeing** — and the examiner is marking interactive communication, which agreement does not demonstrate.'],
  ['Hiba', 'So you are being asked to disagree on purpose?'],
  ['Ms Huda', 'You are being asked to **do the task**, and the task is narrowing — which is 6.1 — with the disagreement of 6.2 inside it. **Four moves.** Open on **one** option with a reason. Invite, and invite **specifically**. Build or resist, with a reason. And at the minute, **decide**, naming what you are giving up.'],
  ['Dima', 'What is wrong with _what do you think_?'],
  ['Ms Huda', 'It hands your partner the whole board and it buys you nothing. ⚠ **_Which of them would you drop first?_** asks for a discard, which is work, and work is what the task is made of. **An open invitation is answered with an opinion; a specific one is answered with a move.**'],
  ['Jad', 'In the call with the four editors last December I did the opposite thing. I divided the list — I said you take the first three and I shall take the other two.'],
  ['Ms Huda', 'And in a meeting that is efficient. ⚠ **In Part 3 it is the end of your marks**, because two candidates working on separate halves are not interacting at all: it becomes two monologues with a conjunction between them. **The whole list belongs to both of you.**'],
  ['Lubna', 'And if my partner says nothing?'],
  ['Ms Huda', 'Then you ask them something they cannot answer with a word. _Which of these two is worse, and why?_ ⚠ **A silent partner costs you nothing if you keep inviting and costs you everything if you fill the silence yourself** — a candidate who talks for two minutes alone has failed the part that is being measured.'],
  ['Rim', 'How many of the five should we actually discuss?'],
  ['Ms Huda', '**Two or three, properly.** Covering all five takes twenty-four seconds each and produces nothing. The examination does not ask you to discuss all five; it asks you to discuss them, which in English means **some of them, with reasons**.'],
  ['Mazen', 'And the minute at the end?'],
  ['Ms Huda', '⚠ **It is a separate task and it is not a summary.** You are asked to decide — _now decide which two you would choose_ — and the answer must contain a decision, made together and said out loud. **_We could not decide_ is not an answer to the question that was asked**, and it is the commonest way of losing a part that had gone well for three minutes.'],
  ['Adnan', 'Together — meaning what, exactly?'],
  ['Ms Huda', 'Meaning one of you proposes and the other agrees or amends, in words. **_So we are agreeing on the field and the log, and giving up the recording._** That one sentence does the whole of the minute, and it says what is being given up, which is the part candidates leave out.'],
  ['Tareq', 'Do we look at the examiner?'],
  ['Ms Huda', '🔊 **No. You talk to each other.** The examiner is not in the conversation and a candidate who reports to the examiner has turned a discussion into two presentations. ⚠ Eye line to your partner, volume for two people, and your partner\'s **name** or _you_ in the sentence: _which would **you** drop?_'],
]));
out.push(sp());
out.push(box('Language box – Speaking Part 3: the discussion and the decision', [
  '**The shape of the part.** A question in the middle of the page and **five written prompts** around it. **Fifteen seconds** to read. **Two minutes** to discuss with your partner. Then **one minute** on a separate question, which is a **decision**. Three minutes of talking in all, and the examiner says almost nothing.',
  '**The four moves.** **1 Open on one option, with a reason** — not a survey of all five. **2 Invite, specifically**: _which of them would you drop first?_ **3 Build or resist, with a reason** — the concession-and-limit of 6.2. **4 At the minute, decide**, naming what you are giving up.',
  '⚠ **What candidates run out of is not things to say; it is the two minutes, having spent them agreeing.** Nobody is short of opinions about five options. The examiner is marking **interactive communication**, and agreement does not demonstrate it. _I agree_ · _yes, exactly_ · _me too_ — three dead ends in four seconds.',
  '**_What do you think?_ hands your partner the whole board and buys you nothing.** _Which of them would you drop first?_ asks for a **discard**, which is work. ⚠ An open invitation is answered with an opinion; a specific one is answered with a move.',
  '⚠ **Never divide the list.** _You take the first three and I shall take the other two_ is efficient in a meeting and fatal here: two candidates working separate halves are not interacting, and the part becomes two monologues with a conjunction between them. **The whole list belongs to both of you.**',
  '**Two or three options, properly — not all five.** Five in two minutes is twenty-four seconds each and produces nothing. The task says _discuss_, which in English means some of them, with reasons.',
  '⚠ **The one-minute task is a decision and not a summary.** _Now decide which two you would choose._ The answer must contain a decision, made together and said out loud: **_so we are agreeing on the field and the log, and giving up the recording._** _We could not decide_ is not an answer to the question asked, and it is the commonest way of losing a part that had gone well for three minutes.',
  '**And a silent partner.** Ask something that cannot be answered with one word — _which of these two is worse, and why?_ A silent partner costs you nothing while you keep inviting, and costs you everything the moment you fill the silence yourself.',
  '**Pronunciation.** 🔊 **Track 6.6** **You talk to each other, not to the examiner.** Eye line to your partner, volume for two people, and your partner\'s name or _you_ inside the sentence: _which would **you** drop?_ ⚠ A candidate who reports to the examiner has turned a discussion into two presentations, and no amount of good English repairs it.',
  '**Practise:** Two minutes on five options, then one minute to decide — with a watch. **1** where to keep a record  **2** how to tell people  **3** who should check something  **4** when to send something  **5** which of two to give up',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, **with a watch**. Read the five prompts for fifteen seconds. Discuss for **two minutes** — open on one, invite specifically, build or resist with a reason. Then your partner reads out the decision question and you have **one minute** to answer it together, naming what you are giving up. Change roles with the other set.'));
out.push(table(['Set A – _How can a workplace make sure a decision is not lost?_', 'Set B – _How can a workplace make sure new staff are told things?_'], [
  ['_a minute written on the day_', '_a written handover sheet_'],
  ['_one person made responsible_', '_a meeting in the first week_'],
  ['_a decision log everybody can see_', '_one named person to ask_'],
  ['_a reason recorded with the decision_', '_a noticeboard_'],
  ['_a date by which it is reviewed_', '_shadowing somebody for a shift_'],
  ['**Decision minute:** _now decide which two matter most._', '**Decision minute:** _now decide which two you would keep if you could only have two._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform, timed, with the class listening for the four moves. **Listener task:** mark which of the four moves each speaker made, and whether the minute produced a decision. Then the count: **on a first run about half the pairs reach the minute with nothing to decide**, having agreed in the first forty seconds — and about half of the rest summarise instead of deciding. ⚠ Both faults are curable and neither is about English.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Change partners and do it again on the other set, timed. This time count your own **invitations**: how many times did you ask your partner for a move rather than for an opinion?'));
out.push(p('**b**  Swap. Then each of you say what your partner **gave up** in the decision minute. If neither of you can say, the minute produced an agreement and not a decision, and in the examination that is the same as producing nothing.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Watches down, and what ran out was the two minutes: Omar\'s pair had agreed by about the fortieth second and then repeated themselves. Which is the commonest thing that happens in Part 3, and it is not a shortage of ideas — nobody runs out of things to say about five options. They run out of two minutes, having spent them agreeing, and the examiner is marking interactive communication, which agreement does not demonstrate. Hiba asked whether that means disagreeing on purpose, and Ms Huda said it means doing the task, which is narrowing with disagreement inside it, in four moves: open on one option with a reason, invite specifically, build or resist with a reason, and at the minute decide, naming what you are giving up. Dima asked what is wrong with "what do you think", and the answer is that it hands your partner the whole board and buys you nothing, where "which of them would you drop first" asks for a discard, and a discard is work. Jad said that in the call with the four editors last December he divided the list — you take three and I shall take two — and in a meeting that is efficient and in Part 3 it is the end of your marks, because two candidates working separate halves are not interacting at all. Lubna asked what to do with a silent partner, and the answer is to ask something that cannot be answered in one word, and never to fill the silence, because a candidate who talks for two minutes alone has failed the thing being measured. Rim asked how many of the five to discuss, and the answer is two or three properly, because all five is twenty-four seconds each and produces nothing. And the minute at the end is a separate task and not a summary: you are asked to decide, the answer must contain a decision made together and said out loud, and "we could not decide" is not an answer to the question that was asked._'));
out.push(p('**Listener task:** write how many specific invitations you made and what your pair gave up in the minute.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the post Jad writes after a discussion, recording what it gave up. Answer the questions.'));
out.push(model([
  '**THE URGENT REQUESTS · what the call decided and what it gave up** · J. Attar · 8 November',
  'Four of us spent forty minutes on this on Thursday and I am writing it down the same evening, because the last one of these we had is now remembered four different ways. **Five options, two kept, three given up, and the reasons for all five are below.**',
  '**What we decided.** Urgent requests go in a separate queue, and the person who marks a request urgent puts their name on it. Both, not either — they were argued as alternatives for twenty minutes and they are not alternatives.',
  '**What we gave up, and this is the part I have never written down before.** A time limit on the queue, which three of us wanted. An automatic escalation after four hours, which two of us wanted. And a weekly review of the marking, which I wanted and still want.',
  '**Why we gave up the time limit.** Because eleven of the nineteen requests marked urgent last month were not urgent by our own definition, and a limit on a queue that is wrongly filled makes the wrong thing faster. ⚠ **The marking has to be right before the speed is worth anything**, and that argument was Anas\'s and it changed my mind inside a minute.',
  '**Why we gave up the escalation.** Because nobody could name who it would escalate **to**. An escalation with no named person is a message that arrives somewhere, and we have four of those already.',
  '**Why we gave up the weekly review, which I am recording because I lost it.** Because it is four hours a month of somebody\'s time and we have not yet shown that the marking is still wrong once names are on it. **If the names do not fix it by February, the review comes back and I shall bring it back.**',
  '**Who does what.** Raed puts the queue in before the end of the month. I write the one-line definition of _urgent_ and circulate it this week. Anas tells the other editors, in the Thursday message and not in a corridor.',
  '**And what would reopen the whole thing.** A month in which more than a quarter of the requests marked urgent are not urgent. That is the figure, it is written here, and it is nineteen requests for a quarter of nineteen.',
]));
out.push(item('1', 'What two things were decided, and why does he say they are not alternatives?'));
out.push(item('2', 'Which option did he himself lose, and what does he say about bringing it back?'));
out.push(item('3', 'What would reopen the whole question, and how is it measured?'));
out.push(writers([
  'A record of a discussion: **the count, and the fact that you are writing it the same day** → **what was decided, in a sentence somebody can act on** → **what was given up, named and counted** → **a reason for each thing given up** → **the one you lost yourself, and the condition for bringing it back** → **who does what by when** → **and what would reopen the whole question, measured**.',
  '**Write the number of options and the number kept in the first three lines.** _Five options, two kept, three given up._ A reader who has that arithmetic will read the reasons; a reader who has only the decision will read nothing else and will re-argue the discards in a fortnight.',
  '⚠ **The discards are the record.** Anybody can remember what was decided. **Nobody remembers what was given up**, which is why the same five options come back to the same meeting twice a year — and why the reasons, one line each, are the most valuable thing on the page.',
  '**Record the option you lost, and whose argument changed your mind.** _That argument was Anas\'s and it changed my mind inside a minute._ A record in which the writer won everything is not read as a record.',
  '⚠ And give the reopening condition a **figure**. _A month in which more than a quarter of the requests marked urgent are not urgent._ A decision with no reopening condition is either permanent or reopened by whoever is most annoyed, and in practice it is the second.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the record of a discussion (80 words or more).'));
out.push(p('**______________ · what it decided and what it gave up** · ______________ · ______________   ______ of us spent ______ minutes on this on ______________, and I am writing it down ______________, because ______________. **______ options, ______ kept, ______ given up.**   **What we decided.** ______________.   **What we gave up.** ______________. ______________. And ______________.   **Why we gave up ______________.** ______________.   **Why we gave up ______________.** ______________.   **Why we gave up ______________, which I am recording because I lost it.** ______________. If ______________, it comes back.   **Who does what.** ______________ by ______________. ______________ by ______________.   **And what would reopen the whole thing.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The arithmetic — options, kept, given up — in the first three lines',
  'A one-line reason for every discard',
  'The option the writer lost, with whose argument changed their mind',
  'A reopening condition with a figure in it',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read what their discussion **gave up**, and nothing else.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full record (180 words or more): the arithmetic, what was decided in an actionable sentence, the three discards with a reason each, the one you lost and the condition for bringing it back, who does what by when, and the measured reopening condition.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the arithmetic early, a reason on every discard, a reopening condition with a figure.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your reopening condition aloud and let the room test it.** If two people in the room would measure it differently, it is not a condition but a mood. Then the sentence to leave the cycle on: **nobody remembers what was given up** — which is why the same five options come back to the same meeting twice a year.'));
out.push(hw('Write the record (80+ words). Then do the timed Part 3 once more with somebody who is not in this class — two minutes and then one — and write down what the minute decided and what it gave up.'));

// ===================== 6.4 =====================
out.push(pb());
out.push(h2('6.4  The decision I was not at'));
out.push(p('**Function:** reporting a decision you were not present at, and saying what you do not know about it   ·   **Grammar:** _it was decided_ · _the minute says_ · _no reason is recorded_ · the recoverable agent   ·   **Pronunciation:** the flat reading of a reported decision'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the decision you were **not** at. Then say three things about it in this order: **what** was decided, **who** decided it, and **on what grounds**. Stop at the first of the three you cannot answer.'));
out.push(board('They decided to extend it to everybody.', 'The minute of 27 October extends the trial to all night staff. No reason is recorded.'));
out.push(p('**b**  Which of these label what the speaker knows? **1** _It was decided because of the errors._  **2** _The minute says the trial is extended; it gives no reason._  **3** _Apparently they were worried about the night shift._  **4** _I was told on the ninth; I do not know by whom it was decided._  **5** _They obviously thought it was a training problem._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say you can almost never know about a decision you were not at, and what does she say happens to a reason that somebody supplies?   **A** what was decided; nothing   **B** the grounds — and a supplied reason becomes the official reason within a fortnight, because it is the only reason anybody has   **C** the date; it is forgotten'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say the three questions are, in order?   **2** What does Adnan say the directorate writes instead of a reason?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.7  What was decided, by whom, and on what grounds', [
  ['Ms Huda', 'Mrs Barakat is not here tonight, and she has sent a page in. Her decision is the minute of 27 October: _the trial is extended to all night staff._ Eleven words. Mr Ayoub, what are the three questions?'],
  ['Tareq', 'What was decided. Who decided it. And why.'],
  ['Ms Huda', 'In that order, and they get harder in that order. ⚠ **What** was decided you can almost always find out. **Who** decided it you can sometimes find out. **On what grounds** you can almost never find out, and that is the one you need, because you are the person who has to carry it out and explain it to eleven others.'],
  ['Omar', 'The minute does not say why?'],
  ['Ms Huda', 'The minute says _the trial is extended to all night staff_. It has no person in it and no reason in it. She has been running the trial since February; the minute extends it to twenty-two people she has to brief, and she cannot tell them why.'],
  ['Lubna', 'So she invents a reason.'],
  ['Ms Huda', '⚠ **Which is exactly what will happen if nobody stops it, and that is the point of the cycle.** A decision without a reason is very hard to carry out, so the person carrying it out supplies one — _I think they were worried about the fourth nights_ — and within a fortnight **that** is the official reason, because it is the only reason anybody has. **A supplied reason is not a guess that stays a guess.**'],
  ['Adnan', 'The directorate writes _it has been decided_ and then the paragraph.'],
  ['Ms Huda', 'Which is Unit 2, arriving where it does the most damage. ⚠ **_It has been decided_ has no agent, so there is nobody to ask for the grounds** — and twenty people then explain the paragraph to each other in their own words. So the rule from Unit 2 applies to decisions as hard as to anything: **if you write a decision without an agent, name the agent somewhere in the paragraph.** The date and the room will do: _decided on 27 October, in the night practice meeting._'],
  ['Yara', 'And if you genuinely do not know who?'],
  ['Ms Huda', 'Then you write **that**, and it is the strongest sentence in the report. _No originating person is recorded._ ⚠ Six words, and they do two things: they stop you inventing one, and they tell the next reader that the question has already been asked and has no answer. **An absence that is recorded is evidence; an absence that is left blank is a hole somebody will fill.**'],
  ['Rim', 'Should she ask?'],
  ['Ms Huda', '**Once, in writing, and then record the answer or the absence of one.** Not three times and not in a corridor. ⚠ A question asked in a corridor produces an answer nobody can quote, which is the same as no answer and takes longer.'],
  ['Dima', 'What about _apparently_ and _obviously_?'],
  ['Ms Huda', '_Apparently_ is honest and almost useless — it says somebody told you and you cannot say who. **_Obviously_ is the dangerous one**, because it presents an inference as a shared fact, and anybody who disagrees with it has to begin by disputing something you have called obvious.'],
  ['Jad', 'So what does the honest report look like?'],
  ['Ms Huda', '**Three labels and no narrative.** _The minute of 27 October extends the trial to all night staff._ _I do not know who proposed it; the minute names nobody._ _No reason is recorded, and I have asked once, in writing, on the second of November._ ⚠ Flat, labelled, and the gaps visible — and when the reason arrives it goes in the same four lines.'],
  ['Mazen', 'And aloud?'],
  ['Ms Huda', '🔊 **Flat, and slower than you want to read it.** A reported decision read with feeling is heard as an opinion about the decision, and the twenty-two people in front of you will take their view of the decision from your voice rather than from the minute.'],
]));
out.push(sp());
out.push(box('Language box – reporting a decision you were not at', [
  '**The three questions, in order of difficulty.** **What** was decided — almost always findable. **Who** decided it — sometimes. **On what grounds** — almost never, and that is the one you need, because you are the person who has to carry it out and explain it to other people.',
  '⚠ **A supplied reason is not a guess that stays a guess.** A decision without a reason is hard to carry out, so whoever carries it out supplies one — _I think they were worried about the fourth nights_ — and **within a fortnight that is the official reason**, because it is the only reason anybody has. This is how an institution acquires grounds that nobody chose.',
  '**Three labels and no narrative.** _The minute of 27 October extends the trial to all night staff._ · _I do not know who proposed it; the minute names nobody._ · _No reason is recorded, and I have asked once, in writing, on 2 November._ ⚠ Flat, labelled, gaps visible — and when the reason arrives it goes into the same four lines.',
  '**_It has been decided_ has no agent, so there is nobody to ask for the grounds.** Unit 2 arriving where it does the most damage: twenty people then explain the paragraph to each other in their own words. **If you write a decision without an agent, name the agent somewhere in the paragraph** — the date and the room will do: _decided on 27 October, in the night practice meeting_.',
  '**And if you genuinely do not know who: write that.** _No originating person is recorded._ Six words, and they do two things — they stop you inventing one, and they tell the next reader the question has been asked and has no answer. ⚠ **An absence that is recorded is evidence; an absence left blank is a hole somebody will fill.**',
  '**Ask once, in writing, and record the answer or its absence.** Not three times, and not in a corridor. A question asked in a corridor produces an answer nobody can quote, which is the same as no answer and takes longer to get.',
  '⚠ **_Apparently_ and _obviously_ are not a pair.** _Apparently_ is honest and nearly useless: it says somebody told you and you cannot say who. **_Obviously_ is the dangerous one**, because it presents an inference as a shared fact, and anybody who disagrees must begin by disputing something you have called obvious.',
  '**Pronunciation.** 🔊 **Track 6.8** A reported decision is read **flat, and slower than you want to read it**. ⚠ Read with feeling, it is heard as an opinion about the decision, and the people in front of you will take their view of it from your voice rather than from the minute — which makes you the author of a decision you were not at.',
  '**Practise:** Report a decision in three labelled sentences — what, who, on what grounds. **1** a change of hours  **2** an extension of something  **3** a refusal  **4** a new form  **5** something stopped',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the decision from the card as it is written — agentless and unexplained. B reports it in three labelled sentences: what, who, and on what grounds, writing the absence where there is one. A then asks **one** question B cannot answer, and B says how they would find out. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the decision, as written)_ __________.'],
  ['B', 'What: __________. Who: __________. Grounds: __________.'],
  ['A', '_(the question)_ And __________?'],
  ['B', 'I do not know, and I would find out by __________, once, in writing.'],
]));
out.push(table(['Card A – the decision, as written', 'Card B – the decision, as written'], [
  ['_The trial is extended to all night staff._', '_It has been decided that the schedule will not be reopened._'],
  ['_The timetable has been reprinted._', '_The promise field is not in the October release._'],
  ['_Claims will not be considered after fourteen days._', '_The second trolley has been allocated._'],
  ['_The lot box is to be completed where applicable._', '_Replacements are no longer issued at the counter._'],
  ['_The stated range stands._', '_The urgent queue has been approved in principle._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three labels for each of the eight, and where the absence was. Then the count: **six or seven of the eight decisions name nobody**, and in all eight the grounds are missing. ⚠ And the finding that matters: about half the reporters **filled** the grounds line with an inference rather than writing that it was empty.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own decision — the one you were not at — and write the three labelled sentences. Where you do not know, write the absence in words.'));
out.push(p('**b**  Swap. Then each of you find the place where your partner has **supplied** something: a reason, a motive, a person. Read that sentence back and ask where it came from.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Barakat was not there and sent a page in. Her decision is the minute of 27 October: the trial is extended to all night staff. Eleven words. Tareq gave the three questions — what was decided, who decided it, and why — and they get harder in that order: what you can almost always find out, who you can sometimes find out, and on what grounds you can almost never find out, which is the one you need, because you are the person who has to carry it out and explain it to eleven others. Omar asked whether the minute says why, and it does not: it has no person in it and no reason in it, and she has to brief twenty-two people and cannot tell them why. Lubna said so she invents a reason, and that is exactly what happens if nobody stops it — a decision without a reason is hard to carry out, so whoever carries it out supplies one, and within a fortnight that is the official reason, because it is the only reason anybody has. A supplied reason is not a guess that stays a guess. Adnan said the directorate writes "it has been decided" and then the paragraph, which is Unit 2 arriving where it does the most damage: there is no agent, so there is nobody to ask for the grounds, and twenty people explain the paragraph to each other in their own words. Yara asked what to do when you genuinely do not know who, and the answer is to write that — no originating person is recorded — which stops you inventing one and tells the next reader the question has been asked. An absence that is recorded is evidence; an absence left blank is a hole somebody will fill. Rim asked whether Rasha should ask, and the answer is once, in writing, and then record the answer or the absence of one. Not three times, and not in a corridor, because a question asked in a corridor produces an answer nobody can quote._'));
out.push(p('**Listener task:** write the place where your partner supplied something, and what they supplied.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Rasha sends about the minute of 27 October. Answer the questions.'));
out.push(model([
  '**THE MINUTE OF 27 OCTOBER · what I can carry out and what I cannot explain** · R. Barakat · 9 November',
  'This is for the night practice lead post, which is mine, and for whoever wrote the minute. I am briefing twenty-two people on Monday and I am writing down first what I know and what I do not.',
  '**What was decided.** The minute of 27 October reads, in full: _the trial is extended to all night staff._ Eleven words. The trial is the double-check on the fourth night, which I have run since 1 February.',
  '**Who decided it.** **No originating person is recorded.** The minute is unsigned, it names no proposer, and the circulation line names four posts and no people. I have asked once, in writing, on 2 November, and I shall record the answer here when it comes.',
  '**On what grounds.** **No reason is recorded.** And I want to put on paper what I was about to do about that, because I think it is what anybody would have done: I was going to tell the twenty-two that it was because of the seven errors. **Nobody has told me that. I would have been the author of it, and by December it would have been the reason.**',
  '**What I can carry out without the grounds.** All of it. The instruction is clear and the double-check takes about four minutes a shift. **A decision does not need its reason in order to be obeyed**, which is the thing that makes the missing reason so easy to leave missing.',
  '**What I cannot do without the grounds.** Two things, and they are the two that matter. I cannot tell the twenty-two why, so they will decide why among themselves. And I cannot tell anybody **when it ends** — the trial was to be reviewed when the figures were in, and a trial extended for an unrecorded reason has no condition for stopping.',
  '**What I am asking for, and it is one line.** The reason, in writing, from whoever wrote the minute. If the reason is the seven errors, I shall say so on Monday and I shall also say that five of the seven were on a fourth night, which is the part that makes the double-check sensible.',
  '**And if no reason comes.** Then I shall brief the twenty-two in these words: _the minute of 27 October extends the trial; no reason is recorded; I have asked._ ⚠ **It is a poor sentence to say to twenty-two people and it is better than the one I was going to invent.**',
]));
out.push(item('1', 'What are the three things she writes down, and which two are absences?'));
out.push(item('2', 'What was she about to tell the twenty-two, and what does she say would have happened?'));
out.push(item('3', 'What can she not do without the grounds, and why does the second thing matter?'));
out.push(writers([
  'A page on a decision you were not at: **say who it is for and that you are writing what you know and do not** → **what was decided, quoted in full** → **who decided it, or the recorded absence** → **on what grounds, or the recorded absence** → **what you can carry out anyway** → **what you cannot do** → **the one-line request** → **and what you will say if nothing comes**.',
  '**Quote the decision in full and count the words.** _The minute reads, in full: the trial is extended to all night staff. Eleven words._ A paraphrase of a decision is an interpretation of it, and this page is about not interpreting.',
  '⚠ **Write the absences as sentences and never as blanks.** _No originating person is recorded._ · _No reason is recorded._ A blank is read as an oversight and filled in by the next reader; a recorded absence survives being forwarded.',
  '**Say what you were about to invent.** _I was going to tell the twenty-two that it was because of the seven errors. Nobody has told me that._ ⚠ This is the strongest paragraph available to you and almost nobody writes it: it shows exactly how an unrecorded reason becomes an official one, with the writer as the example.',
  '⚠ And separate **what you can carry out** from **what you cannot explain**. A decision does not need its reason in order to be obeyed, which is why the reason goes missing and stays missing. The page that separates the two is the one that gets the reason sent.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about the decision you were not at (80 words or more).'));
out.push(p('**______________ · what I can carry out and what I cannot explain** · ______________ · ______________   This is for ______________. I am ______________ and I am writing down first what I know and what I do not.   **What was decided.** ______________ reads, in full: _______________. ______ words.   **Who decided it.** ______________. I have asked ______________.   **On what grounds.** ______________. And I was going to say ______________. **Nobody has told me that.**   **What I can carry out without the grounds.** ______________.   **What I cannot do without the grounds.** ______________. And ______________.   **What I am asking for, and it is one line.** ______________.   **And if no reason comes.** Then I shall say: _______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The decision quoted in full, with its word count',
  'Both absences written as sentences, not as blanks',
  'The reason the writer was about to supply, named as supplied',
  'What can be carried out kept separate from what cannot be explained',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the reason they were **about** to supply.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): the decision quoted, the two absences recorded, the reason you were about to invent, what you can carry out, what you cannot explain, the one-line request, and the words you will use if nothing comes.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the decision quoted in full, the absences written as sentences, the supplied reason admitted.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the sentence you will say if no reason comes.** The room says whether it is a poor sentence, and most of them are. Then the line to leave the cycle on, which is Rasha\'s: **it is a poor sentence to say to twenty-two people and it is better than the one I was going to invent.**'));
out.push(hw('Write the page (80+ words). Then take the decision you were not at and write down, in one line each, the reason you have been giving people and where you got it.'));

// ===================== 6.5 =====================
out.push(h2('6.5  Five lines somebody can act on'));
out.push(p('**Function:** writing a decision down so that a person who was not there can act on it   ·   **Grammar:** the actionable verb · _the decision is that X will…_ · dates and names   ·   **Pronunciation:** reading a record to somebody who was not there'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out the decision you **were** at, as you would write it in a minute. Then your partner — who was not there — says what they would **do** on Monday morning. In about half the cases they will not be able to say anything.'));
out.push(board('It was agreed that the matter would be looked at.', 'The decision is that Tareq changes one word on the sheet by 20 November.'));
out.push(p('**b**  Which of these can somebody act on? **1** _It was agreed that the question of the queue should be considered._  **2** _Urgent requests go in a separate queue from 1 December._  **3** _There was broad support for a review._  **4** _Raed puts the queue in before the end of the month._  **5** _The position on replacements was clarified._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the test Ms Huda gives for a written decision, and what does she say the four failures of a record are?   **A** is it short; spelling, grammar, length, tone   **B** could somebody who was not there act on it on Monday morning — and the four failures are no agent, no actionable verb, no discards and no date   **C** is it polite; four kinds of rudeness'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say about _it was agreed that the matter would be looked at_?   **2** What does Omar say happened when his record was read by somebody who was not at the meeting?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.9  Could somebody who was not there act on this?', [
  ['Ms Huda', 'Records on the desk, and swap them with somebody who was **not** at your meeting. Mr Darwish, you have Mrs Shaaban\'s. What would you do on Monday morning?'],
  ['Omar', 'Nothing. It says the position on replacements was clarified.'],
  ['Ms Huda', 'And Mrs Shaaban, what was actually decided?'],
  ['Rim', 'That I stop issuing replacements at the counter and send them to the office, from the first of December.'],
  ['Ms Huda', '⚠ **Which is a decision, and it is not in your record.** _The position was clarified_ is a sentence about a meeting. **Your record has to be a sentence about Monday.** And that is the test for everything in this cycle: **could somebody who was not there act on this?**'],
  ['Omar', 'Mine was no better. I read it back in the car and I could not act on my own record. _It was agreed that the matter of the pads would be looked at._'],
  ['Ms Huda', '**Four failures in eleven words**, and they are the four failures of every poor record. ⚠ **No agent** — agreed by whom? **No actionable verb** — _looked at_ is not a thing a person does on a Monday. **No discards** — the meeting refused two things and neither is here. **And no date.** Repair all four and you have five lines.'],
  ['Dima', 'Five?'],
  ['Ms Huda', 'Five. **One: the decision**, in a sentence with a verb somebody can do. **Two: who decided it, and when** — a name and a date. **Three: what was ruled out and why** — one line each. **Four: who does what, by when.** **Five: what would reopen it.** ⚠ Nothing else is a record; everything else is a description of a room.'],
  ['Tareq', 'Line three is the one nobody writes.'],
  ['Ms Huda', 'Nobody writes it and it is the line that saves the meeting from happening again, which is 6.3. **Line five is the one nobody has heard of**, and it is the line that stops a decision being reopened by whoever is most annoyed.'],
  ['Yara', 'What makes a verb actionable?'],
  ['Ms Huda', '⚠ **You can watch somebody do it.** _Changes one word on the sheet_ — you can watch that. _Reviews the position_ — you cannot: it is a nominalisation wearing a verb, and it is Unit 2 again, in the one place where it costs a Monday. Test every verb in a record by asking whether you could stand in a doorway and see it being done.'],
  ['Hiba', 'And if the meeting really did not decide?'],
  ['Ms Huda', 'Then the record says so, with a date: **_no decision was reached on the queue; the question returns on 20 November._** ⚠ That is a record. _The discussion was wide-ranging_ is not, and the difference is that the first one has a Monday in it.'],
  ['Adnan', 'The directorate\'s minutes are all the second kind.'],
  ['Ms Huda', '**And so are everybody\'s**, which is why the five lines are worth having by heart. A record that fails the test is not a weak record. **It is not a record of a decision; it is a record of an occasion.**'],
  ['Mazen', 'And reading it out?'],
  ['Ms Huda', '🔊 **To somebody who was not there**, always, and before you send it. Read it aloud to one person who has no idea what the meeting was about, and watch for the moment they look up. **The place where they look up is the line you have to rewrite.**'],
]));
out.push(sp());
out.push(box('Language box – the five lines', [
  '**The test, and everything in this cycle comes out of it: could somebody who was not there act on this on Monday morning?** A record that fails it is not a weak record — **it is a record of an occasion and not of a decision.**',
  '**One: the decision**, in a sentence with a verb somebody can do. _Urgent requests go in a separate queue from 1 December._ **Two: who decided it, and when** — a name and a date. **Three: what was ruled out, and why** — one line each. **Four: who does what, by when.** **Five: what would reopen it.**',
  '⚠ **The four failures, and they are usually all four at once.** _It was agreed that the matter of the pads would be looked at_ — **no agent** (agreed by whom?), **no actionable verb** (_looked at_ is not a thing a person does on a Monday), **no discards** (the meeting refused two things and neither is here) and **no date**. Eleven words, four failures.',
  '**What makes a verb actionable: you can watch somebody do it.** _Changes one word on the sheet_ ✓ — you can stand in a doorway and see it. _Reviews the position_ ✗ — a nominalisation wearing a verb, which is Unit 2 in the one place where it costs a Monday.',
  '**Line three is the line nobody writes**, and it is the line that stops the same five options coming back to the same meeting. **Line five is the line nobody has heard of**, and it is what stops a decision being reopened by whoever is most annoyed.',
  '⚠ **And if the meeting really did not decide, say so with a date.** _No decision was reached on the queue; the question returns on 20 November._ That is a record. _The discussion was wide-ranging_ is not, and the difference is that the first one has a Monday in it.',
  '**Two sentence shapes, and the second is better.** _It was decided to change the wording_ — agentless, and Unit 2 applies. **_The decision is that Tareq changes one word on the sheet by 20 November_** — agent, actionable verb, date. Use the second unless the house form forbids it, and then put the agent in the line below.',
  '**Pronunciation.** 🔊 **Track 6.10** Read the record aloud **to somebody who was not there**, before you send it, and watch for the moment they look up. ⚠ **The place where they look up is the line you have to rewrite** — and it is almost always the verb.',
  '**Practise:** Write the five lines for a decision, with an actionable verb and a date. **1** something that stops  **2** something that starts  **3** something refused  **4** something postponed  **5** something nobody decided',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the poor record from the card. B names which of the four failures it has — agent, verb, discards, date — and then rewrites it as a decision line with an actionable verb. A says whether they could now act on it on Monday. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the poor record)_ __________.'],
  ['B', 'Failures: __________. The decision line should be: **__________ by __________.**'],
  ['A', 'On Monday I would __________.'],
  ['B', 'And the line that is still missing is __________.'],
]));
out.push(table(['Card A – the poor record', 'Card B – the poor record'], [
  ['_The position on replacements was clarified._', '_It was agreed that the matter of the pads would be looked at._'],
  ['_There was broad support for a review of the schedule._', '_The lot box question was discussed at some length._'],
  ['_The timetable position was noted._', '_It was felt that the free-text box was not ideal._'],
  ['_The trial is to be extended as appropriate._', '_The stated range was considered and the position remains._'],
  ['_Arrangements will be put in place for the queue._', '_The urgent requests item was carried forward._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the four failures marked for each of the eight, and the rewritten decision line. Then the count: **all eight have no agent and no date**, and seven of the eight have no actionable verb. ⚠ And the discards are missing from all eight, which is the failure nobody notices, because a record cannot look as though something is missing from it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write the five lines for the decision you **were** at. Then test the verb in line one: could you stand in a doorway and watch somebody do it?'));
out.push(p('**b**  Swap with somebody who was not there and read theirs aloud. Say what you would do on Monday morning, and mark the line where you looked up.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Records were swapped with somebody who had not been at the meeting, and Omar had Rim\'s. Asked what he would do on Monday morning, he said nothing: it says the position on replacements was clarified. What had actually been decided was that she stops issuing replacements at the counter and sends them to the office from the first of December — which is a decision, and it was not in her record. The position was clarified is a sentence about a meeting, and a record has to be a sentence about Monday. Which is the test for the whole cycle: could somebody who was not there act on this? Omar said his own was no better — he read it back in the car and could not act on it: it was agreed that the matter of the pads would be looked at. Four failures in eleven words, and they are the four failures of every poor record. No agent, because agreed by whom. No actionable verb, because looked at is not a thing a person does on a Monday. No discards, because the meeting refused two things and neither is there. And no date. Repair all four and you have five lines: the decision with a verb somebody can do, who decided it and when, what was ruled out and why, who does what by when, and what would reopen it. Tareq said line three is the one nobody writes, and it is the line that saves the meeting from happening again; line five is the one nobody has heard of, and it stops a decision being reopened by whoever is most annoyed. Yara asked what makes a verb actionable, and the answer is that you can watch somebody do it: changes one word on the sheet you can watch, reviews the position you cannot, because that is a nominalisation wearing a verb. And Hiba asked what to write when the meeting did not decide, and the answer is to say so with a date: no decision was reached on the queue, and the question returns on 20 November. Adnan said the directorate\'s minutes are all of the second kind, and Ms Huda said so are everybody\'s, which is why the five lines are worth having by heart — a record that fails the test is not a weak record but a record of an occasion. And the last thing was about reading it out, which is to somebody who was not there, always, and before you send it, because the place where they look up is the line you have to rewrite._'));
out.push(p('**Listener task:** write the line where you looked up in your partner\'s record.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the record Tareq writes after the meeting about the timetable. Answer the questions.'));
out.push(model([
  '**THE 06.15 SHEET · decision record** · T. Ayoub · 10 November',
  '_Depot meeting, 10 November, present: the depot office (two), the six drivers, me. Written the same afternoon and circulated to the eight of us and to the printer._',
  '**1 The decision.** The printed sheet will read **_due 06.15_** from the December reprint, and the word **_ready_** will appear nowhere on it. The six drivers are expected at the depot by 06.05, which is written on the rota and not on the public sheet.',
  '**2 Who decided it, and when.** Mr Saqqal, at the meeting of 10 November, on the recommendation of the depot office. **Not me** — I brought the sixty-two mornings and I did not propose the wording. I am putting that in because a record in which I had decided it would be argued with by at least two of the eight.',
  '**3 What was ruled out, and why.** A new timetable with later times: ruled out because forty-one mornings at 06.20 is not an argument for a 06.20 service, and the office is right about that. A note at the door: ruled out because the people who need it are on the bus and not at the door. Telling the six drivers and changing nothing on paper: ruled out because that is what has been done twice and the readings are still two.',
  '**4 Who does what, by when.** The printer sets _due 06.15_ for the December reprint, by **24 November**. The depot office adds the 06.05 line to the rota, by **24 November**. I stop writing times on the back of my own copy and write them on the rota sheet instead, from **1 December** — which is also the end of the only record anybody has had for three months.',
  '**5 What would reopen it.** A month in which more than **a quarter** of the services leave more than five minutes after the printed time. That is sixteen mornings of sixty-two, and I shall count them on the rota and not in my own book. ⚠ And if it reopens it reopens as a question about the **times** and not about the wording: the wording stays as it is unless somebody says otherwise in writing.',
  '**And one line that is not a decision.** The word _due_ was in the office\'s gift all along and it cost nothing. ⚠ **What it took was not a new timetable and not a better argument; it took sixty-two mornings written on the back of a piece of paper by somebody who was not asked to.**',
]));
out.push(item('1', 'Who decided the wording, and what does he say about his own part?'));
out.push(item('2', 'Which three things were ruled out, and what is the reason given for the third?'));
out.push(item('3', 'What would reopen the decision, and how many mornings is that?'));
out.push(writers([
  'A decision record: **the heading line — who was present, when written, who it went to** → **1 the decision, with an actionable verb** → **2 who decided it and when, including what was _not_ yours** → **3 what was ruled out and why, one line each** → **4 who does what by when, with dates** → **5 what would reopen it, measured** → **and one line that is not a decision**.',
  '**Write it the same day and say in the heading that you did.** _Written the same afternoon and circulated to the eight of us and to the printer._ A record written three days later is a record of what the writer now thinks the meeting decided.',
  '⚠ **Name the decider even when it is not you, and especially when it is not you.** _Mr Saqqal, at the meeting of 10 November. Not me._ A record in which the author appears to have decided everything is disputed by everybody who was there; a record that gives the decision away is believed.',
  '**Give each discard the other side\'s best reason.** _Forty-one mornings at 06.20 is not an argument for a 06.20 service, and the office is right about that._ ⚠ A discard recorded with its own best argument cannot be reopened by whoever proposed it, because their case is already on the page.',
  '⚠ And put a **figure** in line five. _More than a quarter of the services — sixteen mornings of sixty-two._ A reopening condition without a number is reopened by whoever is most annoyed, and a decision that can be reopened at will was never made.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the decision record (80 words or more).'));
out.push(p('**______________ · decision record** · ______________ · ______________   _______________ meeting, ______________, present: ______________. Written ______________ and circulated to ______________._   **1 The decision.** ______________ will ______________ from ______________.   **2 Who decided it, and when.** ______________, at ______________. **Not ______________** — I ______________.   **3 What was ruled out, and why.** ______________: ruled out because ______________. ______________: ruled out because ______________. ______________: ruled out because ______________.   **4 Who does what, by when.** ______________ by ______________. ______________ by ______________.   **5 What would reopen it.** ______________. That is ______ of ______.   **And one line that is not a decision.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A verb in line 1 you could watch somebody do',
  'The decider named, with the date, even where it is not the writer',
  'Each discard with the other side\'s best reason',
  'A figure in line 5',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read line 1 and line 5 only, and the room says whether it could act on the first.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full record (180 words or more): the heading, the five lines with an actionable verb, a named decider, three discards with reasons, dated actions, a measured reopening condition, and one line that is not a decision.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: an actionable verb in line 1, the decider named with a date, a figure in line 5.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Give your record to somebody who was not at your meeting and let them read line 1 aloud, then say what they would do on Monday.** If they cannot, the line goes back. Then the sentence to leave the cycle on, which is Ms Huda\'s: **a record that fails the test is not a record of a decision; it is a record of an occasion.**'));
out.push(hw('Write the record (80+ words) and send it to one person who was not there. Then write down the first question they ask you, because that is the line you left out.'));

// ===================== 6.6 =====================
out.push(pb());
out.push(h2('6.6  The one that was never written down'));
out.push(p('**Function:** counting what an unrecorded decision costs, and writing it down within the hour   ·   **Grammar:** the five lines at speed · _we settled on_ · _we did away with_   ·   **Pronunciation:** dictating a record to yourself'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the decision you **were** at that was never written down. Then say who has since remembered it differently from you, and what they say it was. If nobody has, say how long ago it was — and in about half the cases it will be under a month.'));
out.push(board('We agreed I would hold it for two weeks.', 'Eleven decisions in a fortnight, none written down, three now disputed.'));
out.push(p('**b**  Which of these could be settled by a record? **1** _He says I promised a replacement._  **2** _I do not remember the meeting at all._  **3** _We both think we agreed and we disagree about what._  **4** _Nobody knows who was supposed to tell the night staff._  **5** _The customer says I said a week and I said a fortnight._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say happens to an unrecorded decision, and what does Mazen find when he counts?   **A** it is forgotten; nothing   **B** it is re-decided by whoever remembers it best, which is usually whoever has most at stake; that he made eleven decisions at the counter in a fortnight, wrote none of them down, and three are now disputed   **C** it stays the same; eleven decisions'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say memory is not?   **2** What does Dima say about the order in which a decision falls apart?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.11  Re-decided by whoever remembers it best', [
  ['Ms Huda', 'Mr Hariri, the decision you were at that was never written down.'],
  ['Mazen', 'A customer and me, at the counter, on a Tuesday. We settled on my holding the handset for a fortnight while I waited for the batch date. He says we agreed a week. It is now the fifteenth day and he is in the shop.'],
  ['Ms Huda', 'And who is right?'],
  ['Mazen', 'I am. And I cannot show it.'],
  ['Ms Huda', '⚠ **Which is the whole of this cycle: an unrecorded decision is not forgotten — it is re-decided, by whoever remembers it best.** And whoever remembers it best is almost always **whoever has most at stake**, because they have been thinking about it every day and you have not.'],
  ['Omar', 'That is not memory, then. That is interest.'],
  ['Ms Huda', 'It is interest wearing memory\'s clothes, and it is honest: your customer is not lying to you. He has rehearsed a week for a fortnight because a week is what he needs. ⚠ **And here is the part that costs you most: memory is not evidence.** You were there, you are right, and being right without a record puts you in exactly the position of somebody who is wrong.'],
  ['Mazen', 'I counted them, after the last lesson. Eleven decisions at the counter in a fortnight. None written down. Three now disputed.'],
  ['Ms Huda', '**Eleven, none, three.** Say that again on Thursday to anybody who tells you they have no time.'],
  ['Dima', 'And they fall apart in an order. The reason goes first, and the instruction stays, because somebody has to carry it out. The reason goes within a month. Then the **limit** goes — how long, how many, until when. And the last thing to go is who decided it, which goes when that person leaves.'],
  ['Ms Huda', '⚠ **Which is 6.4 arriving from the other end**, and it is worth putting the two together: the decision Mrs Barakat was not at had no reason **on the day**, and the decisions this class was at lose their reasons **within a month**. The end state is the same — an instruction being obeyed for no reason anybody can name.'],
  ['Rim', 'So what is the remedy? Five lines for everything?'],
  ['Ms Huda', '**Five lines for anything that has a limit in it.** A fortnight, a quarter, a date, a number of pallets, a person. ⚠ And **within the hour**, not that evening: the limit is the first thing your own memory rounds off, and it rounds it off in your favour without telling you.'],
  ['Tareq', 'At a counter, with a customer waiting?'],
  ['Ms Huda', 'Three lines on the back of the docket and the full five that evening. ⚠ **The decision, the limit, and the date.** _Handset held, fourteen days, from 4 November._ Nine words, written in front of the customer, and the fifteenth day never happens.'],
  ['Lubna', 'In front of them is the difficult part.'],
  ['Ms Huda', 'It is, and it is also the cheapest apology available: _let me write that down so that neither of us has to remember it._ ⚠ **Nobody has ever been offended by that sentence**, and it moves the record from being about distrust to being about the two of you against the fortnight.'],
  ['Jad', 'And dictating it to yourself?'],
  ['Ms Huda', '🔊 **Say it aloud as you write it, in the order of the lines.** The decision, the limit, the date. A record dictated in that order is twice as fast to write and it catches the missing limit, because you hear the gap where the number should be.'],
]));
out.push(sp());
out.push(box('Language box – what an unwritten decision costs, and this unit\'s two declared sets', [
  '⚠ **An unrecorded decision is not forgotten. It is re-decided, by whoever remembers it best** — and that is almost always **whoever has most at stake**, because they have rehearsed it every day and you have not. It is not dishonesty: it is interest wearing memory\'s clothes.',
  '**And the part that costs most: memory is not evidence.** You were there, you are right, and being right without a record puts you in exactly the position of somebody who is wrong. _Eleven decisions in a fortnight, none written down, three disputed._',
  '**They fall apart in an order, which is Mrs Khoury\'s and is worth knowing.** **The reason goes first** — within a month. **Then the limit** — how long, how many, until when. **The instruction survives longest**, because somebody has to carry it out. **And who decided it goes when that person leaves.**',
  '⚠ **Which is 6.4 from the other end.** A decision nobody recorded on the day and a decision whose reason went in a month end in the same place: **an instruction being obeyed for no reason anybody can name.**',
  '**The remedy: five lines for anything with a limit in it** — a fortnight, a quarter, a date, a number, a person. **And within the hour**, because the limit is the first thing your own memory rounds off, and it rounds it off in your favour without telling you.',
  '**At a counter, three lines and the full five that evening.** **The decision, the limit, the date.** _Handset held, fourteen days, from 4 November._ Nine words, written in front of the customer, and the fifteenth day never happens. ⚠ The sentence that makes it possible is _let me write that down so that neither of us has to remember it_ — **nobody has ever been offended by it.**',
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _settle on · weigh up · opt for · do away with · stick to · go along with · talk round · sign off · carry out · call off · hammer out · back down_.',
  '**This unit\'s word-formation set** _(Reading Part 6 in 6.7 draws on this)_: _choose → **choice** · prefer → **preference** · recommend → **recommendation** · resolve → **resolution** · approve → **approval** · oppose → **opposition** · consult → **consultation** · authorise → **authorisation** · defer → **deferral**._',
  '**Pronunciation.** 🔊 **Track 6.12** **Dictate it to yourself as you write**, in the order of the lines: the decision, the limit, the date. ⚠ A record dictated in that order is twice as fast to write and it catches the missing limit, because you **hear** the gap where the number should be.',
  '**Practise:** Three lines at speed — decision, limit, date — for each of these. **1** something held  **2** something lent  **3** something promised  **4** something refused for now  **5** something agreed in a corridor',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A describes a decision made out loud with a limit in it. B says the three lines at speed — decision, limit, date — in under ten seconds. A then says what the limit would have become in a month if nobody had written it. Swap.'));
out.push(dlg(null, [
  ['A', '_(the decision, out loud)_ __________.'],
  ['B', '_(three lines, ten seconds)_ __________. __________. __________.'],
  ['A', 'In a month that limit would have become __________, because __________.'],
  ['B', 'And the person who would have remembered it that way is __________.'],
]));
out.push(table(['Card A – the decision made out loud', 'Card B – the decision made out loud'], [
  ['_I will hold the handset while you find the batch date._', '_We will leave the lot box empty for now and see._'],
  ['_You can have the pads next week._', '_I will not send the refusal until you have called the yard._'],
  ['_The trial runs until the figures are in._', '_The second trolley stays on this ward for the time being._'],
  ['_I will look at the schedule paragraph when I have a moment._', '_We will reprint the sheet when the next batch is ordered._'],
  ['_The queue goes in after the release._', '_I will take the night shifts until Rasha is back._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three lines for each of the eight, and what the limit would have become. Then the count: **in seven or eight of the eight the limit moves in the speaker\'s own favour** — the fortnight becomes a week when you are waiting and a month when you are holding. ⚠ Nobody in the room is being dishonest, and that is the finding.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Count your own: how many decisions **with a limit in them** did you make out loud in the last fortnight, how many did you write down, and how many are now disputed? Three figures.'));
out.push(p('**b**  Swap. Then each of you write the three lines your partner should have written for the disputed one, and read them aloud in under ten seconds.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mazen\'s decision was made at a counter, between him and a customer, on a Tuesday: they settled on his holding the handset for a fortnight while he waited for the batch date. The customer says they agreed a week, and it is now the fifteenth day and the customer is in the shop. Asked who is right, Mazen said he is, and that he cannot show it. Which is the whole of the cycle: an unrecorded decision is not forgotten, it is re-decided, by whoever remembers it best — and whoever remembers it best is almost always whoever has most at stake, because they have been thinking about it every day and you have not. Omar said that is not memory but interest, and Ms Huda said it is interest wearing memory\'s clothes, and that the customer is not lying: he has rehearsed a week for a fortnight because a week is what he needs. And the part that costs most is that memory is not evidence — you were there, you are right, and being right without a record puts you in the position of somebody who is wrong. Then Mazen gave his count: eleven decisions at the counter in a fortnight, none written down, three now disputed. Dima said they fall apart in an order: the instruction stays because somebody has to carry it out, the reason goes within a month, then the limit goes — how long, how many, until when — and the last thing to go is who decided it, which goes when that person leaves. Which is 6.4 from the other end, because both roads end in an instruction being obeyed for no reason anybody can name. Rim asked what the remedy is, and it is five lines for anything with a limit in it, within the hour, because the limit is the first thing your own memory rounds off and it rounds it off in your favour without telling you. Tareq asked how that is done at a counter with a customer waiting, and the answer is three lines on the back of the docket and the full five that evening: the decision, the limit and the date. Handset held, fourteen days, from 4 November. Nine words, written in front of the customer, and the fifteenth day never happens. Lubna said the difficult part is doing it in front of them, and Ms Huda said it is also the cheapest apology available — let me write that down so that neither of us has to remember it — and that nobody has ever been offended by it._'));
out.push(p('**Listener task:** write your three figures — decisions with a limit, written down, now disputed.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Mazen writes for his own counter, after counting. Answer the questions.'));
out.push(model([
  '**ELEVEN, NONE, THREE** · M. Hariri · 11 November',
  'This is for nobody but me and for the next person who stands at this counter. I counted something on Sunday and the figures are the heading.',
  '**What I counted.** Every decision with a **limit** in it that I made out loud at the counter between 26 October and 9 November. A limit means a number of days, a number of handsets, a date, or a person. **Eleven. None written down. Three now disputed.**',
  '**The three.** The handset held for a fortnight that the customer remembers as a week — day fifteen, and he was in the shop on Tuesday. The two replacements I said I would ask about, which have become two replacements I promised. And the repair I said I would do before the end of the month, where the month was November and he has written December on his own copy, which he had and I did not.',
  '**What I notice about all three.** **The limit moved, and in every case it moved against me.** Not because anybody lied. The customer who is waiting rehearses the short version every day for a fortnight, and I rehearse nothing, because I have eleven of these and he has one.',
  '**What I had believed, and it is the thing I was most wrong about.** That being there was worth something. I was at all eleven. I am right about all three. ⚠ **And being right without a record puts me exactly where a man who is wrong would be**, which I had never once thought about in nine years at this counter.',
  '**What I am doing from Monday.** Three lines on the back of the docket, written in front of the customer, in the order the decision, the limit, the date. _Handset held, fourteen days, from 4 November._ Nine words. Then the full five lines in the fault book that evening, with the discards — because twice this fortnight I refused something and the refusal is the part nobody remembers.',
  '**And the sentence I have been afraid of, which turns out to cost nothing.** _Let me write that down so that neither of us has to remember it._ I have said it four times since Sunday. ⚠ **Nobody has been offended, and two customers have asked me to write the date bigger.**',
  '**What I shall count next.** The same fortnight in December: decisions with a limit, written down, disputed. If the third figure is not **nought** I shall want to know which of the three lines I am leaving out.',
]));
out.push(item('1', 'What exactly did he count, and over what period?'));
out.push(item('2', 'Which way did the limit move in all three disputed cases, and what does he say is the reason?'));
out.push(item('3', 'What had he believed that he was most wrong about?'));
out.push(writers([
  'A page that counts your own unwritten decisions: **the three figures as the heading** → **what you counted, with the limit defined** → **the disputed ones, one line each** → **which way the limit moved** → **what you had believed and were wrong about** → **the three lines you will write from Monday** → **the sentence you were afraid of** → **and what you will count next**.',
  '**Put the three figures in the title.** _Eleven, none, three._ A page about record-keeping that opens with an argument for it will not be read by the one person who needs it, who is the writer.',
  '⚠ **Define the limit before you count, or the count means nothing.** _A limit means a number of days, a number of handsets, a date, or a person._ Without the definition the figure can be argued with, and the only person who will argue is you, in a fortnight, when it is inconvenient.',
  '**Say which way the limit moved and refuse the easy explanation.** _In every case it moved against me. Not because anybody lied._ ⚠ A page that blames the other party is a complaint; a page that explains why an honest person remembers the short version is a finding, and it is what changes the writer\'s Monday.',
  '⚠ And **name the next count, with its date and its target figure**. _The same fortnight in December. If the third figure is not nought…_ A resolution with no second count is only a resolution, and that is what this cycle is about not relying on.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the counting page (80 words or more).'));
out.push(p('**______, ______, ______** · ______________ · ______________   This is for ______________. I counted something on ______________ and the figures are the heading.   **What I counted.** Every decision with a **limit** in it that I made out loud between ______________ and ______________. A limit means ______________. **______. ______. ______.**   **The disputed ones.** ______________. ______________. And ______________.   **What I notice about all of them.** The limit moved, and ______________. Not because ______________.   **What I had believed and was wrong about.** ______________.   **What I am doing from ______________.** Three lines: ______________, ______________, ______________.   **And the sentence I was afraid of.** _______________. ______________.   **What I shall count next.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Three figures, in the title',
  'The limit defined before the count',
  'Which way the limit moved, with the easy explanation refused',
  'A second count, with a date and a target figure',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their three figures, and nothing else.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): the three figures, the definition of a limit, the disputed cases, which way the limit moved and why, what you had believed, the three lines from Monday, the sentence you were afraid of, and the next count.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: three figures in the title, the limit defined before the count, a second count with a date.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Say the sentence aloud, to the room: _let me write that down so that neither of us has to remember it._** Say it four times, to four different people, until it stops feeling like an accusation — which takes about four goes. Then the arithmetic to leave the cycle on, which is Mazen\'s: **eleven, none, three** — nine years at a counter, and the first count was last Sunday.'));
out.push(hw('Write the page (80+ words). Then write the three lines — decision, limit, date — for the **next** decision you make out loud, in front of the person you make it with, and write down what they said when you did.'));

// ===================== 6.7 =====================
out.push(pb());
out.push(h2('6.7  Review & Mediate: Two people who agree and cannot tell'));
out.push(p('**Function:** mediating between two parties who both believe they agreed   ·   **Recycling:** Unit 6   ·   **Exam practice:** B2 First Reading and Use of English Part 6 · Writing Part 2 (a report) · Listening Part 2'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 6 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** That rule out the free-text box.  **2** I take the point about the cost; I do not take about the time.  **3** Granting that the night staff were not told, that does not explain the sheets.  **4** Even allow for the reprint, forty-one is forty-one.  **5** The decision is that Tareq to change one word by 20 November.  **6** No originating person records in the minute.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the six pairs the class brought, set out as they were sorted.'));
out.push(box(null, [
  '**BOTH OF US THOUGHT WE HAD AGREED** _(six pairs, 12 November)_',
  '**Lubna.** She: _the contractor would photograph the joint before closing up._ He: _the joint would be photographed **if** it differed from the 1974 detail._ The record says: _the first-floor joint was discussed._',
  '**Mazen.** He: _a fortnight._ The customer: _a week._ No record at all.',
  '**Rim.** She: _no refusal until the yard had been telephoned._ The office: _the refusal would go and the yard would be told._ The record says: _procedure confirmed._',
  '**Nour.** She: _a recommendation, for a decision by 20 November._ The template owners: _the question would be considered in the next release cycle._ The record says: _the promise field was raised._',
  '**Yara.** She: _one line from the author of the stated range._ The bench: _the range would be looked at._ The record says nothing; there was no meeting, only a corridor.',
  '**Tareq.** He: _one word changed on the sheet._ The office: _one word changed on the sheet, by 24 November._ ⚠ **The only pair in which both accounts match — and it is the only one that was written down the same afternoon.**',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. What do five of the six pairs have in common, and what does Ms Huda say a mediator must **not** do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.13  Six pairs, and one that matches', [
  ['Ms Huda', 'Six pairs on the board. Five of them disagree and one does not. Somebody tell me what the five have in common that the sixth has not.'],
  ['Omar', 'The sixth was written down.'],
  ['Ms Huda', 'It was, the same afternoon, and that is the answer — but say the other half of it. What do the five **records** have in common?'],
  ['Dima', 'They all say something, and none of them says what was decided. _Discussed. Confirmed. Raised._'],
  ['Ms Huda', '⚠ **Which is the test of 6.5 applied to real documents, and all five fail it: could somebody who was not there act on this?** And here is the part worth stopping on. **Neither party can act on it either, and both of them were in the room.** A record that fails the test does not only fail the people who were absent.'],
  ['Lubna', 'Mine is the photograph, and I am certain. He said he would photograph it before closing up. I can hear him saying it.'],
  ['Ms Huda', 'I am sure you can, and he can hear himself saying something else, and the two of you are both honest. ⚠ **Each of you remembers the version that is consistent with what you then did.** You went away and waited for a photograph. He went away and closed the joint up, having looked at the 1974 detail and decided it matched. **Neither of you has invented a memory; each of you has kept the one that fits your own afternoon.**'],
  ['Adnan', 'Then what does a mediator do? There is nothing to go on.'],
  ['Ms Huda', '**Three moves, and the third is the one people skip.** One: say what each party thinks was agreed, **in their own words**, quoted. Two: name the one thing **the record does say**, because that is the only sentence both of them have to accept. Three: name the one thing that **would settle it**. ⚠ **And not a fourth. A mediator who decides has become a third version.**'],
  ['Hiba', 'But _the first-floor joint was discussed_ settles nothing.'],
  ['Ms Huda', 'It settles one thing, and it is worth more than it looks: **the joint was on the table on 14 October.** Which means nobody can now say the question was never raised, and in my experience that is the thing that is said in the fourth week. **A weak record still fixes the date.**'],
  ['Rim', 'And the settling thing in Lubna\'s case?'],
  ['Lubna', 'The photographs exist or they do not. There are fourteen and I have seen them. None shows the joint.'],
  ['Ms Huda', '⚠ Then that is not the settling thing — it is the **consequence**, and you have had it for three weeks. The settling thing is the **1974 detail itself**: if the built joint matches it, he did what he thought he had agreed; if it does not, he did not, and the photograph was owed either way.'],
  ['Yara', 'Mine had no meeting. Only a corridor.'],
  ['Ms Huda', 'Then there is no record and no mediation, and the honest finding is that **there was no decision** — there were two intentions that happened to be in the same corridor. ⚠ Which is the sentence this unit has been building towards: **a decision is not a moment, it is a sentence.** If the sentence was never written, what you had was an occasion.'],
  ['Jad', 'That is a hard thing to say to somebody.'],
  ['Ms Huda', 'It is, and it is kinder than the alternative, which is a fortnight of each party believing the other has broken an agreement. **Nobody broke anything. There was nothing to break.**'],
  ['Tareq', 'Mine took four minutes to write.'],
  ['Ms Huda', '**Four minutes, the same afternoon, and it is the only one of six that both sides tell the same way.** That is the unit, and it is not a lesson about meetings. It is a lesson about the four minutes afterwards.'],
]));
out.push(sp());
out.push(box('Language box – mediating between two people who both believe they agreed', [
  '**The three moves, and the third is the one people skip.** **1** Say what each party thinks was agreed, **in their own words**, quoted. **2** Name the one thing **the record does say**, because that is the only sentence both of them must accept. **3** Name the one thing that **would settle it**. ⚠ **And not a fourth: a mediator who decides has become a third version.**',
  '⚠ **Both accounts are honest, and this is the finding of the cycle: each party remembers the version that is consistent with what they then did.** One went away and waited for a photograph; the other went away and closed the joint up. Neither invented a memory; each kept the one that fitted their own afternoon.',
  '**The record is the third party, and it usually says almost nothing.** _Discussed. Confirmed. Raised._ ⚠ All three fail the test of 6.5 — **and neither party can act on them either, although both were in the room.** A record that fails the test does not only fail the people who were absent.',
  '**A weak record still fixes the date, which is worth more than it looks.** _The first-floor joint was discussed_ settles one thing: the joint was on the table on 14 October. Nobody can now say the question was never raised — and that is what gets said in the fourth week.',
  '**Do not confuse the settling thing with the consequence.** _None of the fourteen photographs shows the joint_ is a consequence and has been known for three weeks. **The settling thing is the 1974 detail**: if the built joint matches it, he did what he thought he had agreed; if not, the photograph was owed either way.',
  '⚠ **And where there was no record of any kind, the honest finding is that there was no decision** — two intentions that happened to be in the same corridor. **A decision is not a moment; it is a sentence.** If the sentence was never written, what you had was an occasion.',
  '**Which is a hard thing to say and a kind one.** The alternative is a fortnight in which each party believes the other has broken an agreement. **Nobody broke anything; there was nothing to break** — and that sentence ends more disputes than any apportioning of blame.',
  '**Pronunciation.** 🔊 **Track 6.14** The two quoted accounts are read **at the same speed and with the same weight**, one after the other, with no pause for effect between them. ⚠ A mediator who reads one account faster has already decided, and both parties hear it before they hear the quotation.',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has one of the pairs below and does **not** show it. A reads the two accounts and the record once. B makes the three moves: quotes each account, names what the record does say, and names the one thing that would settle it — **and stops**. A says whether B decided. Change roles with the other pair.'));
out.push(table(['Pair A – the hospital', 'Pair B – the depot'], [
  ['_The night sister: "the trial runs until the February figures are in."_', '_The driver: "the catch would be looked at before the August run."_'],
  ['_The day staff: "the trial runs until it is reviewed, and nobody has reviewed it."_', '_The yard: "the catch would be looked at when the vehicle was next in for service."_'],
  ['_The record says: "the trial was extended."_', '_The record says: "the catch was reported."_'],
  ['_Already in existence: the February figures, in the ward file._', '_Already in existence: the service book, with the dates of every visit._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three moves for each pair, and whether the mediator stopped at three. Then the count: **about half the mediators make a fourth move and decide**, usually in the last four words and usually in favour of the party who spoke second. ⚠ And in **both** pairs the settling thing already exists — the February figures and the service book — which is the finding to carry into the Mid-Book Test.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **your** pair — the two accounts and whatever the record says. Give all three to your partner, who has not seen them, and let your partner make the three moves. ⚠ Then say which of the three they did worst, and in nine cases out of ten it is the second: **naming what the record actually says**, because both of you want to talk about what it does not.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what the six pairs had in common and what your partner found hardest:  _Six pairs on the board, five of them disagreeing and one not. Omar said the sixth was written down, which is the answer, and Dima gave the other half of it: the five records all say something and none of them says what was decided — discussed, confirmed, raised. Which is the test of 6.5 applied to real documents, and all five fail it. And the part worth stopping on is that neither party can act on them either, although both were in the room: a record that fails the test does not only fail the people who were absent. Lubna said hers is the photograph and that she is certain — he said he would photograph the joint before closing up, and she can hear him saying it. Ms Huda said she is sure she can, and that he can hear himself saying something else, and both of them are honest, because each remembers the version that is consistent with what they then did: she went away and waited for a photograph, and he went away and closed the joint up, having looked at the 1974 detail and decided that it matched. Neither invented a memory; each kept the one that fitted their own afternoon. Adnan asked what a mediator can do when there is nothing to go on, and the answer is three moves: quote what each party thinks was agreed in their own words, name the one thing the record does say — because that is the only sentence both of them must accept — and name the one thing that would settle it. And not a fourth, because a mediator who decides has become a third version. Hiba objected that "the first-floor joint was discussed" settles nothing, and Ms Huda said it settles one thing and is worth more than it looks: the joint was on the table on 14 October, so nobody can say the question was never raised, which is what gets said in the fourth week. A weak record still fixes the date. And Yara\'s pair had no meeting at all, only a corridor — which gives the sentence the unit has been building towards: a decision is not a moment, it is a sentence, and if the sentence was never written then what you had was an occasion, and nobody broke anything because there was nothing to break._'));
out.push(p('**Listener task:** write which of the three moves your partner did worst, and what the record in your own pair actually says.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 6)', 7));
out.push(p('Six sentences have been removed from the text. Choose from the sentences **A–G** the one which fits each gap (**1–6**). There is **one** extra sentence which you do not need to use.'));
out.push(box(null, [
  '**THE DECISION NOBODY WROTE DOWN**',
  'Most organisations believe that they have a memory problem. They do not: they have a recording problem, and the two are not the same thing.   **(1) ______**   What goes missing is not the information but its authority, and a decision that survives only in the recollection of those who were present is not a decision at all but a set of competing accounts of one.',
  'The usual explanation for the absence of a record is that nobody has time, and it is the one explanation the arithmetic will not support. Five lines take about four minutes to write. The meeting that must then be held a second time takes forty, and the second meeting is harder than the first, because the participants must now also agree about what happened at the first.   **(2) ______**',
  'A better explanation is that writing a decision down changes it.   **(3) ______**   An unrecorded agreement can be remembered generously by everybody, and generous recollection is precisely what allows four people to leave a room each believing that their own **preference** has carried. The record is unpopular because it is exact.',
  'The cost of all this falls in a particular order, and it is worth knowing which part goes first. The reasons go first. The instruction survives longest, because somebody has to carry it out and will therefore remember what to do.   **(4) ______**   A year later the instruction is still being obeyed and nobody in the building can say why, which is the condition a surprising proportion of institutional procedure is in.',
  'What follows from this is not a **recommendation** to minute everything, which is how most organisations respond and which produces files that nobody consults.   **(5) ______**   The question to ask of a record is not whether it is complete but whether a person who was not in the room could act on it on Monday morning.   **(6) ______**',
  '',
  '**A** Spoken agreement is elastic; a sentence on paper is not.',
  '**B** Whatever the real reason for not writing things down, then, it is not economy.',
  '**C** By that standard, a great deal of what is written down is not the record of a decision but the record of an occasion.',
  '**D** A memory problem would be cured by better memories, and the people who attend meetings have entirely ordinary ones.',
  '**E** Minute-takers are rarely the people whose decisions are being recorded.',
  '**F** Within a month, therefore, an organisation is left holding an action and no grounds for it.',
  '**G** The useful discipline is a narrower one, and it has a test attached to it.',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of your own pair (80 words or more).'));
out.push(p('**BOTH OF US THOUGHT WE HAD AGREED** · ______________   **What ______________ thinks was agreed.** "______________"   **What ______________ thinks was agreed.** "______________"   **What the record says.** "______________" — which settles one thing: ______________.   **Why both accounts are honest.** ______________ went away and ______________. ______________ went away and ______________. **Each kept the version that fitted ______________.**   **The one thing that would settle it.** ______________ — and it **already exists / does not exist**.   **And what I am not doing.** Deciding. ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both accounts quoted in their own words',
  'What the record **does** say, and the one thing it settles',
  'Why both accounts are honest, with what each party then did',
  'One settling thing, and whether it already exists',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 2: a report)', 10));
out.push(box(null, [
  '⚠ **A report has a reader who has asked for it, headings, and a recommendation at the end.** It is not an essay and it is not a letter. **What Unit 6 adds is the five lines** — and the test: could a person who was not there act on your recommendation?',
  'Your manager has asked you to write a report on how decisions are recorded where you work.',
  'Your report should **say what is recorded now**, **say what is lost**, and **recommend one change**, with a reason.',
  'Write your **report** in **180–220 words**.',
  '**Suggested headings:** _What is recorded now_ · _What is lost_ · _Recommendation_',
], C.lorange, C.orange));
out.push(...lines(8));
out.push(pb());
out.push(stage('✓', 'Unit 6 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  That ___ out the free-text box, because nobody will search it.   a) rules   b) rule   c) ruling',
  '2  I take the point about the cost; I do not take ___ about the time.   a) this   b) it   c) them',
  '3  ___ that the night staff were not told, that does not explain the October sheets.   a) Granted   b) Granting   c) Grant',
  '4  Even ___ for the reprint, forty-one mornings is forty-one.   a) allow   b) allowed   c) allowing',
  '5  The decision is that Tareq ___ one word on the sheet by 20 November.   a) to change   b) changes   c) changing',
  '6  No originating person ___ in the minute of 27 October.   a) records   b) has recorded   c) is recorded',
  '7  Which ___ us with two, and I would take the field.   a) leaves   b) leave   c) leaving',
  '8  The ___ came from the depot office and the decision came from Mr Saqqal.   a) recommend   b) recommendation   c) recommending',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 2 style – sentence completion).** 🔊 **Track 6.15** You will hear a woman who takes the minutes for a hospital committee talking about recording decisions. For questions **1–10**, complete the sentences with **a word or short phrase**.'));
[
  '**1**  She has been taking minutes for ______________ years.',
  '**2**  Of the forty decisions she looked at, ______________ had no name attached to them.',
  '**3**  She says that the first thing to disappear from a decision is its ______________.',
  '**4**  A decision with no name on it leaves nobody to ask for the ______________.',
  '**5**  She now writes the record on the ______________ of the meeting.',
  '**6**  The line that people never write is the one saying what was ______________.',
  '**7**  She says a reopening condition has to have a ______________ in it.',
  '**8**  Her test is whether somebody who was not there could ______________ on Monday.',
  '**9**  The phrase in her own worst minute was _______________.',
  '**10**  She says the whole record takes about ______________ minutes.',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 6.15  Audio script (read after the check)', [
  ['Woman', 'I have been taking the minutes for this committee for nine years, and until this autumn I had never read any of my own back. Then we spent a morning re-deciding something I had minuted in March, and I went and looked.'],
  ['Woman', 'I took the last forty decisions — forty, over about eighteen months — and I asked three questions of each one. Is there a name on it? Is there a reason? Is there a date by which somebody does something? And the first figure is the one that stopped me: thirty-one of the forty had no name attached to them at all. Not the proposer, not the decider, nobody.'],
  ['Woman', 'The reason is the first thing to disappear. That is not a guess; I could see it happening across the eighteen months. The instruction stays, because somebody has to carry it out and they remember what to do. The reason goes within a month, and a decision with no name on it leaves nobody to ask for the grounds, so the reason does not come back.'],
  ['Woman', 'So I have changed three things and they are all small. I write the record on the afternoon of the meeting, not the following week. I put a name on the decision, even when the name is the committee and a date. And I write down what was ruled out — which is the line people never write, and I had not written it in nine years. Anybody can remember what was decided. Nobody remembers what was refused, which is why the same four options came back to us in March and again in September.'],
  ['Woman', 'The other thing I have added is the condition for reopening, and I have learnt that it has to have a figure in it. Not _if this continues to be a problem_ — a figure. Otherwise the decision is reopened by whoever is most annoyed, and that is not a system.'],
  ['Woman', 'And I have one test now, which I apply before I send anything. Could somebody who was not there act on this on Monday? That is all. My own worst minute, from two years ago, says _the position was clarified_, and I wrote it, and I cannot tell you today what the position was. The whole record, properly done, takes about four minutes. The meeting we held again in September took two hours.'],
]));
out.push(p('**C  Writing.** Write the decision record (five lines) for any decision you were at this week: the decision with an actionable verb, who decided it and when, what was ruled out and why, who does what by when, and what would reopen it.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 6)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ narrow five options to two out loud, with a reason on every discard',
  '☐ collapse two options into one without refusing anybody',
  '☐ concede the half that is true and name the limit, in one sentence',
  '☐ do Speaking Part 3: two minutes of discussion and a decision in the minute after it',
  '☐ report a decision I was not at, and write the absences as sentences',
  '☐ write the five lines somebody who was not there could act on',
  '☐ write three lines — decision, limit, date — in front of the person I am deciding with',
  '☐ mediate in three moves, and stop before deciding',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: THE MID-BOOK TEST, AND THEN UNIT 7', [
  '**The Mid-Book Test comes next** — **60 marks**: Reading 20, Writing 15, Listening 15, Speaking 10. Sixty minutes of paper and about twelve minutes of speaking, and **all four Speaking parts are in it**, which is why Part 2 was taught in Unit 4 and Part 3 in Unit 6.',
  '⚠ **What to revise, and it is four things and not six.** The nine steps of certainty and _what am I going on?_ (Unit 4). The essay shape and the conceded point (Unit 3). The four shapes of Unit 5 and the question _which one will the reader quote?_ The five lines of Unit 6.',
  '**Unit 7 is _One Cause, Two Symptoms_**: telling a cause from a consequence in your own evidence, and explaining to two parties that their separate problems are one problem. **7.7 is the first mediation of the course in which both parties are right.**',
  '⚠ **And from Unit 7 the peer-review slip changes.** You will name the criterion, quote the line, say **one thing to keep and why**, and then **rank the slip you have been given** against the three criteria. The marking becomes the work.',
  '**Bring the 1.7 essay to the Mid-Book Test and then put it away again.** It is wanted in **Unit 12**, and this is the last reminder in the book.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 1 · Syria Edition · Unit 6 · Student\'s Book');
