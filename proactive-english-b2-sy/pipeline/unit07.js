// Proactive English B2 · Syria Edition · Book 1 · Unit 7 — Student's Book
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

out.push(h1('Unit 7  Cause at a Distance'));
out.push(p('_Proactive English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  'The first six units were about saying what you know. This unit is about **saying why** — and the whole of it rests on one fact: **the thing you noticed is almost never the cause.** It is the last step of a chain, and the cause is two or three steps behind it.',
  '**7.1** traces a consequence three steps back.   **7.2** says **how much** of an effect you are attributing to a cause.   **7.3** names the thing that would show you were wrong.   **7.4** separates a **cause** from a **condition** and from a **trigger**.   **7.5** writes the mechanism in six sentences, so that somebody else can predict from it.   **7.6** writes the page that explains a recurring fault by its mechanism and not by its symptom.   **7.7** explains to two parties that their two problems are one cause and two symptoms.',
  '**Exam practice in 7.7:** B2 First **Reading and Use of English Part 7** (multiple matching), **Writing Part 1** (the essay) and **Listening Part 3** (multiple matching).',
  '⚠ **Bring one thing that keeps happening.** A fault, a delay, an error, a complaint — something that has happened at least **three times** and that you have an explanation for. **7.3 and 7.6 are built on it, and the explanation you arrive with is the one the unit takes apart.**',
  '**And the peer-review slip changes from this unit.** You will still name the criterion and quote the line. You will now also say **one thing to keep and why**, and **rank the slip you were given**. From here the marking is part of the work.',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 7.1 =====================
out.push(pb());
out.push(h2('7.1  Three steps from the cause'));
out.push(p('**Function:** tracing a consequence back to the cause, naming every step   ·   **Grammar:** _which in turn_ · _with the result that_ · _and so_   ·   **Pronunciation:** where the pause goes in a chain'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the thing that keeps happening, and then say what causes it, in one sentence. Do not explain and do not defend it. ⚠ **Write your own sentence down**, because 7.1 will ask you for it again at the end and most of them change.'));
out.push(board('It is the model. That model always fails.', 'The adhesive is brushed on by hand, which in turn makes the bead uneven.'));
out.push(p('**b**  Which of these names a step, and which skips one? **1** _The bead is thin, which in turn leaves the clips carrying the load._  **2** _The adhesive is brushed on by hand, and so the screen lifts._  **3** _A different person does it on every shift, with the result that the thickness varies._  **4** _It is the model._  **5** _The clips take the load, which in turn pulls the corner away from the frame._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say about the thing you noticed, and what did Mazen find when he counted the steps?   **A** it is the cause; four steps   **B** it is almost never the cause but the **last step** of a chain; that what he had been calling the cause — the model — was not in the chain at all, and that there were four steps between the brush and his counter   **C** it is a symptom of the model; nothing'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say a chain with an unnamed step in it is?   **2** What does Dima say she does to a causal sentence when she edits it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.1  The thing you noticed is the last step', [
  ['Ms Huda', 'Mr Hariri, the thing that keeps happening and what causes it, in one sentence each. And then I shall ask you one question four times, and the question is **how?**'],
  ['Mazen', 'Screens lift at one corner. It is the model. And how — because the screen is not in a frame. It is held by four clips and then sealed round the edge with adhesive.'],
  ['Ms Huda', 'That is a step. **How** does that lift a corner?'],
  ['Mazen', 'If the bead of adhesive is thin in one place, the clips there are carrying the whole load, and a clip is not made to carry a load.'],
  ['Ms Huda', 'Another step. **How** does the bead come to be thin?'],
  ['Mazen', 'Because it is brushed on by hand, and — I only know this because the distributor\'s man told me in the first week — by a different person on every shift.'],
  ['Ms Huda', '⚠ **And there is the cause, four steps from the thing you noticed.** Read the chain forwards. A different person brushes the adhesive on each shift, **which in turn** means the bead varies in thickness; where the bead is thin the clips carry the load, **with the result that** one corner lifts; and a lifted corner is what arrives at your counter. **Where is the model in that chain?**'],
  ['Mazen', 'It is not in it. The model is the thing all four steps happen to.'],
  ['Ms Huda', '**Which is the unit in one answer.** _It is the model_ is not a cause: it is the **place** where the chain ends up. ⚠ **The thing you noticed is almost never the cause. It is the last step, and you noticed it because it is the only step that happens in front of you.**'],
  ['Omar', 'So the rule is to keep asking _how_.'],
  ['Ms Huda', 'Four times, out loud, and stop when the next answer is a person doing something. **A cause is almost always somebody doing something, or a thing having been built in a particular way.** If your last answer is a noun with no verb in it, you have not finished.'],
  ['Jad', 'And the words between the steps?'],
  ['Ms Huda', 'Three, and they commit you to different things. **_Which in turn_** — one step along the same chain, and it is the one to use when you can name the step. **_With the result that_** — the effect of the **whole** clause before it, which is useful when two or three things together produce the next step. And **_and so_**, which is cheap and which I want you to be suspicious of: ⚠ **_and so_ will cover a missing step without the reader noticing, and it will cover it from you as well.**'],
  ['Dima', 'I take out about one _and so_ a fortnight and put a question mark beside it. It means _there is a step here and the writer has not got it_. When I ask, about half the time they have it and did not think it was worth printing. The other half they do not have it, and the sentence was a guess with a conjunction in it.'],
  ['Ms Huda', '⚠ **Which is the warning for the whole unit: a chain with an unnamed step in it is a guess with a connective in it**, and the connective is what makes it sound like an argument.'],
  ['Rim', 'How do you build it, in practice? Forwards?'],
  ['Ms Huda', '**Backwards, and then read it forwards.** Start at the thing you noticed, ask _how_ four times, and write the steps down in the order you find them. Then turn the list round. ⚠ Built forwards, a chain goes where you expected it to go; built backwards, it goes where the steps go, and about a third of the time that is somewhere you did not want.'],
  ['Mazen', 'And aloud?'],
  ['Ms Huda', '🔊 **A small pause before each link and none after it.** _…by a different person on every shift ‖ which in turn means the bead varies._ A speaker who pauses **after** _which in turn_ has broken the link in the middle, and the listener loses which step attaches to which.'],
]));
out.push(sp());
out.push(box('Language box – tracing a cause backwards', [
  '⚠ **The fact the unit rests on: the thing you noticed is almost never the cause.** It is the **last step** of a chain, and you noticed it because it is the only step that happens in front of you. _Screens lift at one corner_ is where the chain ends; the cause is four steps behind it.',
  '**The method, and it is one question asked four times: _how?_** Stop when the next answer is **a person doing something**, or a thing **having been built** in a particular way. ⚠ If your last answer is a noun with no verb in it — _it is the model_ — you have not finished: that is the **place** the chain ends up, not the cause.',
  '**The chain, forwards.** _A different person brushes the adhesive on at each shift_ → **which in turn** _the bead varies in thickness_ → _where it is thin the clips carry the load_ → **with the result that** _one corner lifts_ → _and that is what arrives at the counter._',
  '**The three links, and what each commits you to.** **_Which in turn_** — one step along the same chain; use it when you can **name** the step. **_With the result that_** — the effect of the **whole** clause before it, for when two or three things together produce the next step. **_And so_** — cheap, and to be distrusted.',
  '⚠ **_And so_ will cover a missing step without the reader noticing, and it will cover it from you as well.** Mrs Khoury takes out about one a fortnight and writes a question mark beside it; half the time the writer has the step and did not print it, and half the time **the sentence was a guess with a conjunction in it.**',
  '**Build it backwards and read it forwards.** Start at the thing you noticed, ask _how_ four times, write the steps in the order you find them, then turn the list round. ⚠ Built forwards a chain goes where you expected; built backwards it goes where the steps go — about a third of the time somewhere you did not want.',
  '**One more thing about length.** Four steps is enough and six is too many for one sentence. ⚠ Past four links, break the chain in two and repeat the noun: _…with the result that one corner lifts. A lifted corner is what arrives at a counter._ A reader who loses the thread of a chain does not go back; they stop believing it.',
  '**Pronunciation.** 🔊 **Track 7.2** A **small pause before each link and none after it**: _…by a different person on every shift ‖ which in turn means the bead varies._ ⚠ Pause **after** _which in turn_ and you have broken the link in the middle; the listener then loses which step attaches to which, and a chain heard in the wrong order is worse than no chain.',
  '**Practise:** Ask _how_ four times and name every step. **1** something that keeps failing  **2** something that is always late  **3** something nobody fills in  **4** a figure that keeps coming out wrong  **5** a complaint you keep getting',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the thing that keeps happening from the card. B asks **how?** four times and writes the four steps down. A then reads the chain **forwards**, with the right link between each pair of steps. B says which link is doing the most work, and whether any step is still missing. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the thing that keeps happening)_ __________.'],
  ['B', 'How? _(×4)_ __________ · __________ · __________ · __________.'],
  ['A', '_(forwards)_ __________, which in turn __________, with the result that __________.'],
  ['B', 'The step I cannot see is __________ — or the chain is complete.'],
]));
out.push(table(['Card A – the thing that keeps happening', 'Card B – the thing that keeps happening'], [
  ['_Screens lift at one corner._', '_The first service leaves five minutes late._'],
  ['_Nineteen of thirty-one lot boxes are empty._', '_Promises made on calls are not in any note._'],
  ['_The afternoon results are queried and the morning ones are not._', '_The same four options come back to the same meeting._'],
  ['_Pads do not reach two of the eleven sites._', '_Contributors\' best sentences are not the ones quoted._'],
  ['_Replacements come back inside a fortnight._', '_Nobody turns the handover sheets over._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the four steps of each chain and mark the link words used. Then the count: **_and so_ appears in six or seven of the eight chains**, and in at least three of those it is sitting where a step should be. ⚠ And the second finding: almost every first answer to _how?_ is a **noun with no verb in it**, which is worth hearing eight times.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own thing that keeps happening. Ask yourself **how?** four times and write the four steps **backwards**, in the order you find them. Then turn the list round and read it forwards.'));
out.push(p('**b**  Swap. Then each of you compare your partner\'s chain with the one-sentence cause they gave in Stage 1. Say whether the Stage 1 cause is **in** the chain at all — and if it is, say which step it is.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mazen\'s thing that keeps happening is that screens lift at one corner, and his cause was: it is the model. Then one question asked four times — how? The screen is not in a frame; it is held by four clips and sealed round the edge with adhesive. How does that lift a corner? Because if the bead is thin in one place the clips there carry the whole load, and a clip is not made to carry a load. How does the bead come to be thin? Because it is brushed on by hand, and by a different person on every shift, which he knows only because the distributor\'s man told him in his first week. And there is the cause, four steps from the thing he noticed. Read forwards: a different person brushes the adhesive on each shift, which in turn means the bead varies in thickness; where it is thin the clips carry the load, with the result that one corner lifts; and a lifted corner is what arrives at the counter. Asked where the model is in that chain, Mazen said it is not in it — the model is the thing all four steps happen to. Which is the unit in one answer: the thing you noticed is almost never the cause, it is the last step, and you noticed it because it is the only step that happens in front of you. Omar said so the rule is to keep asking how, and the answer is four times, out loud, stopping when the next answer is a person doing something or a thing having been built in a particular way. Jad asked about the words between the steps, and there are three: which in turn, for one named step along the same chain; with the result that, for the effect of a whole clause; and and so, which is cheap and to be distrusted. Dima said she takes out about one and so a fortnight and puts a question mark beside it, and that half the time the writer has the missing step and did not print it, and half the time the sentence was a guess with a conjunction in it._'));
out.push(p('**Listener task:** write whether your partner\'s Stage 1 cause was in their chain, and which step.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Mazen sends the distributor with the chain in it. Answer the questions.'));
out.push(model([
  '**FOUR STEPS, AND WHERE THE MODEL IS NOT** · M. Hariri · 15 November',
  'This is one page and it is not a claim about your batch. It is the chain, written backwards and read forwards, and I should like to know which of the four steps you can see from your end.',
  '**What I have been saying for seven months, and withdraw.** _It is the model._ Fifteen handsets, eleven of one batch, and the sentence I attached to them was four words with no verb in it. **The model is not a cause. It is the thing all four steps happen to**, and I was describing the place the fault arrives at.',
  '**The chain, forwards.** The adhesive round the screen is brushed on **by hand, by a different person on every shift** — which in turn means the bead varies in thickness along its length. Where the bead is thin, the four clips at that corner carry the whole load, and a clip is pressed metal and is not made to carry a load. **With the result that** one corner lifts, usually the lower left. A lifted corner is what arrives at my counter, and it is the only step of the four that happens in front of me.',
  '**How I know the first step and nothing about the second.** Your own representative told me, in my first week in 2017, that the sealing is done by hand on a brush bench. I have no information about the thickness, and I am not claiming any: **that step is an inference from the fault pattern and I have marked it as one.**',
  '**What the eleven look like if the chain is right.** Eleven of fifteen from one batch, and in nine of the eleven the lifted corner is the same corner. ⚠ **Nine of eleven in one corner is not what a bad model looks like. It is what a bad bench looks like**, and it is the figure I should have put in my first letter instead of the word _model_.',
  '**What I am asking for, and it is one of the four steps.** Whether the brush bench on batch 11 / 74 was one person or three. Not the loading date, which I have, and not a view on the batch.',
  '**And what I shall withdraw if you tell me it is one person.** The whole chain, in writing, to you and to the eleven customers. **If one person sealed that batch, my second step is wrong and everything after it is wrong with it**, and I would rather find that out from you than go on explaining a mechanism that is not there.',
]));
out.push(item('1', 'What has he withdrawn, and why does he say it is not a cause?'));
out.push(item('2', 'Which step is an inference, and how has he marked it?'));
out.push(item('3', 'What would make him withdraw the whole chain?'));
out.push(writers([
  'A page with a chain in it: **say what the page is not** → **withdraw the old one-sentence cause, and say what was wrong with it** → **the chain forwards, with a named link between each pair of steps** → **which steps you know and which you infer** → **the figures, read as the chain predicts** → **the request, which is one step of the chain** → **and what you will withdraw if the answer goes the other way**.',
  '**Withdraw the old cause in your own words before you give the new one.** _It is the model. Four words with no verb in it._ A page that offers a mechanism without retiring the slogan leaves the reader holding two explanations, and they keep the shorter one.',
  '⚠ **Mark the inferred step, in the sentence, as inferred.** _That step is an inference from the fault pattern and I have marked it as one._ A chain with one unmarked guess is worth less than one with a marked guess.',
  '**Read your figures as the chain predicts them.** _Nine of eleven in the same corner is not what a bad model looks like; it is what a bad bench looks like._ ⚠ The same figures, re-read, and no new evidence at all.',
  '⚠ And say what would make you **withdraw the whole chain**. _If one person sealed that batch, my second step is wrong and everything after it is wrong with it._ A mechanism with no condition for abandoning it reads as a position, and positions are argued with and not checked.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page with the chain in it (80 words or more).'));
out.push(p('**______ steps, and where ______________ is not** · ______________ · ______________   This is one page and it is not ______________. It is the chain, written backwards and read forwards.   **What I have been saying, and withdraw.** _______________. ______________. **______________ is not a cause. It is ______________.**   **The chain, forwards.** ______________ — which in turn ______________. ______________, **with the result that** ______________. And ______________ is the only step that happens in front of me.   **How I know ______________ and nothing about ______________.** ______________. **That step is an inference and I have marked it as one.**   **What the figures look like if the chain is right.** ______ of ______ is not what ______________ looks like; it is what ______________ looks like.   **What I am asking for, and it is one of the steps.** ______________.   **And what I shall withdraw if ______________.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The old one-sentence cause withdrawn, in the writer\'s own words',
  'A named link between each pair of steps, and no bare _and so_',
  'The inferred step marked as inferred',
  'A condition for withdrawing the whole chain',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their chain forwards, and the room says which step it cannot see.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the old cause withdrawn, the chain forwards, the inferred step marked, and the condition for withdrawal.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the old cause withdrawn, a named link between each pair of steps, the inferred step marked.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the one-sentence cause you wrote in Stage 1, and then the first step of your chain.** The room says whether they are the same thing, and in most cases they are not. Then the sentence to leave the cycle on, which is Mazen\'s: **the model is the thing all four steps happen to** — seven months of letters with four words and no verb in them.'));
out.push(hw('Write the page (80+ words). Then take your Stage 1 sentence and count: how many steps are there between the cause you named and the thing you actually noticed? Write the number down.'));

// ===================== 7.2 =====================
out.push(pb());
out.push(h2('7.2  How much of it'));
out.push(p('**Function:** saying how much of an effect you are attributing to a cause   ·   **Grammar:** _largely_ · _in part_ · _attributable to_ · _accounts for about_   ·   **Pronunciation:** the share said without apology'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say your cause again, and then put a **share** on it: all of it, most of it, about half, or a part. Say the share out loud before you say the cause, and notice how much harder the sentence is to say.'));
out.push(board('The fourth nights cause the errors.', 'Five of the seven errors are attributable to a fourth night. Two are not.'));
out.push(p('**b**  Which of these names a share? **1** _The fourth nights are the cause._  **2** _Five of the seven are attributable to a fourth night._  **3** _It is largely the fourth nights._  **4** _The fourth nights account for about two-thirds of them._  **5** _It is because of the fourth nights._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say an unquantified cause is read as, and what does Rasha\'s page do with the two errors that do not fit?   **A** a guess; leaves them out   **B** read as **all of it** — so a reader who finds one case that does not fit dismisses the whole claim; and her page puts the two that do not fit **in the second line**, where they stop being a counter-argument and become part of the finding   **C** read as a part; explains them away'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say happens to the one counter-example?   **2** What does Adnan say the directorate does with a share?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.3  Five of the seven, and two that are not', [
  ['Ms Huda', 'Mrs Barakat has sent her page in again. Her chain is the fourth night, and tonight is about the word _the_. **Her first version said: the fourth nights cause the errors.** Mr Darwish, what is wrong with it?'],
  ['Omar', 'Nothing, if it is true.'],
  ['Ms Huda', 'It is not true, and it is nearly true, which is worse. **Seven errors in a hundred and eighteen shifts. Five of the seven were on a fourth night. Two were not.**'],
  ['Omar', 'Then it is five out of seven and not seven out of seven.'],
  ['Ms Huda', '⚠ **And here is what the first version costs her.** A sentence with no share in it is read as **all of it**. So the first person to find one of the two errors that was **not** on a fourth night has found a counter-example to the whole claim — and the claim they will then abandon is the one about the five, which is true.'],
  ['Yara', 'One case destroys it.'],
  ['Ms Huda', 'One case destroys an unquantified claim and **supports a quantified one**. That is not a trick of wording: it is what the two sentences actually say. _Five of the seven are attributable to a fourth night_ **predicts** that about two in seven will not be, so the counter-example is evidence that the writer has counted.'],
  ['Hiba', 'So the share goes first.'],
  ['Ms Huda', 'The share goes **in the first two lines and before any argument**, and the exceptions go immediately after it. ⚠ **Put your own counter-examples in the second line and they stop being a counter-argument and become part of the finding.** Leave them to the fourth paragraph and a reader has already found one.'],
  ['Jad', 'What are the words?'],
  ['Ms Huda', 'Five, and they are not interchangeable. **_Largely_** — most of it, and you are not going to be more exact than that. **_In part_** — some of it, and you are explicitly not claiming more. **_Attributable to_** — the careful one, and it takes a figure: _five of the seven are attributable to…_ **_Accounts for about_** — the same with the figure in front: _the fourth night accounts for about five of the seven._ And **_mainly, but not only_**, which is the honest one for speech.'],
  ['Adnan', 'The directorate will not print a share. It prints _due to_.'],
  ['Ms Huda', 'Say what _due to_ does.'],
  ['Adnan', 'It says all of it, without saying so, and it cannot be argued with because there is no figure in it to argue with. We write _delays due to staff shortages_ and nobody has ever asked what proportion.'],
  ['Ms Huda', '⚠ **Which is the usefulness of the unquantified cause, and it is worth naming out loud: it cannot be checked.** A share is a claim about arithmetic, and arithmetic can be wrong. _Due to_ cannot be wrong, which is why institutions write it and why it persuades nobody who has thought about it for ten seconds.'],
  ['Dima', 'And when you genuinely do not know the share?'],
  ['Ms Huda', '**Then say so, and give the range.** _Somewhere between half and all of it; I have counted the five and I have not accounted for the two._ ⚠ That sentence is stronger than either of the confident versions, and students will not believe that until they have had one answered.'],
  ['Rim', 'And out loud?'],
  ['Ms Huda', '🔊 **The share is said flat, with no apology in the voice.** _**Five** of the seven_ — stress the figure, not the hedge. ⚠ A speaker who says _only five of the seven, I am afraid_ has turned a measurement into a confession, and the room then hears a weak claim rather than an exact one.'],
]));
out.push(sp());
out.push(box('Language box – putting a share on a cause', [
  '⚠ **A cause with no share on it is read as _all of it_.** So the first reader to find one case that does not fit has a counter-example to the whole claim — and the claim they abandon is the true one. _The fourth nights cause the errors_ ✗ against _five of the seven errors are attributable to a fourth night; two are not_ ✓.',
  '**One case destroys an unquantified claim and _supports_ a quantified one.** This is not a trick of wording. _Five of the seven_ **predicts** that about two in seven will not fit, so the exception is evidence that the writer has counted.',
  '**The share goes in the first two lines, before any argument, and the exceptions immediately after it.** ⚠ **Put your own counter-examples in the second line and they stop being a counter-argument and become part of the finding.** Leave them to the fourth paragraph and the reader has found one first.',
  '**The five expressions, and they are not interchangeable.** **_Largely_** — most of it, and no more exact than that. **_In part_** — some of it, and explicitly not more. **_Attributable to_** — the careful one, and it takes a figure. **_Accounts for about_** — the same with the figure in front. **_Mainly, but not only_** — the honest one for speech.',
  '⚠ **What _due to_ does, and why institutions prefer it.** _Delays due to staff shortages_ says **all of it** without saying so, and **it cannot be checked**, because there is no figure in it to be wrong. A share is a claim about arithmetic, and arithmetic can be wrong — which is exactly what makes it worth more.',
  '**And when you genuinely do not know the share: say so, and give the range.** _Somewhere between half and all of it; I have counted the five and I have not accounted for the two._ That is stronger than either confident version, and nobody believes it until they have had one answered.',
  '**One figure habit worth having.** Give the share **as a count and not as a percentage** when the numbers are small: _five of the seven_, not _71 per cent_. ⚠ A percentage on seven cases claims a precision the seven cases cannot carry, and a reader who notices that discounts everything else in the paragraph.',
  '**Pronunciation.** 🔊 **Track 7.4** The share is said **flat, with no apology in the voice**: _**five** of the seven_ — the stress on the figure and not on the hedge. ⚠ _Only five of the seven, I am afraid_ turns a measurement into a confession, and the room hears a weak claim instead of an exact one.',
  '**Practise:** Put a share on your cause and name the exceptions. **1** a count  **2** a delay  **3** a recurring fault  **4** a complaint  **5** something you cannot put a share on',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the unquantified claim from the card. B puts a share on it, using one of the five expressions, and then names what the share **predicts** will not fit. A offers one counter-example. B says whether it supports the quantified claim or destroys it. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the unquantified claim)_ __________.'],
  ['B', '__________ of the __________ are attributable to __________. Which means about __________ will not be.'],
  ['A', '_(a counter-example)_ But what about __________?'],
  ['B', 'That **supports / destroys** it, because __________.'],
]));
out.push(table(['Card A – the unquantified claim', 'Card B – the unquantified claim'], [
  ['_The fourth nights cause the errors._', '_The batch causes the screen faults._'],
  ['_The empty boxes are due to the night shift._', '_The late departures are due to the drivers._'],
  ['_Promises are lost because of the form._', '_The queries are caused by the stated range._'],
  ['_Contributors bury their findings._', '_The pads are a printing problem._'],
  ['_Nobody reads the handover sheets._', '_The meetings fail because nobody chairs them._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the share each pair put on the claim, and whether the counter-example supported it. Then the count: **in seven or eight of the eight the counter-example supports the quantified version** — which is the arithmetic of the cycle and has to be heard eight times rather than explained once. ⚠ And watch for the hedge in disguise: _probably mostly the fourth nights_ has no figure and is read as all of it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Put a share on your own cause, as a **count** and not a percentage, and then write down the cases that do **not** fit it. If you do not know how many there are, write that sentence instead.'));
out.push(p('**b**  Swap. Then each of you offer your partner the strongest counter-example you can find to their claim, and say whether their share survives it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rasha\'s chain is the fourth night, and tonight was about the word "the". Her first version said: the fourth nights cause the errors. Omar said there is nothing wrong with that if it is true, and Ms Huda said it is not true and it is nearly true, which is worse — seven errors in a hundred and eighteen shifts, five of the seven on a fourth night, and two not. So it is five out of seven and not seven out of seven. And here is what the first version costs her: a sentence with no share in it is read as all of it, so the first person to find one of the two errors that was not on a fourth night has a counter-example to the whole claim — and the claim they then abandon is the one about the five, which is true. Yara said one case destroys it, and Ms Huda said one case destroys an unquantified claim and supports a quantified one, which is not a trick of wording: five of the seven predicts that about two in seven will not fit, so the counter-example is evidence that the writer has counted. Hiba said so the share goes first, and the answer is that the share goes in the first two lines before any argument, and the exceptions go immediately after it — put your own counter-examples in the second line and they stop being a counter-argument and become part of the finding. Then the five expressions, which are not interchangeable: largely, in part, attributable to, accounts for about, and mainly but not only. Adnan said the directorate will not print a share, it prints due to — which says all of it without saying so and cannot be argued with, because there is no figure in it to argue with. They write delays due to staff shortages and nobody has ever asked what proportion. Which is the usefulness of an unquantified cause: it cannot be checked, because there is no arithmetic in it to be wrong. And Dima asked what to do when you genuinely do not know the share, and the answer is to say so and give the range: somewhere between half and all of it, with the five counted and the two unaccounted for._'));
out.push(p('**Listener task:** write your partner\'s share and the counter-example you offered.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Rasha sends about the seven errors, with the share in it. Answer the questions.'));
out.push(model([
  '**FIVE OF THE SEVEN** · R. Barakat · 16 November',
  'This is for the night practice lead post, which is mine, and it replaces the note I sent in October. **The October note said that the fourth nights cause the errors. That sentence is not true and I am withdrawing it.**',
  '**The figures, and they are the same figures as in October.** A hundred and eighteen shifts since 1 February. Seven errors. **Five of the seven were on a fourth consecutive night. Two were not**, and both of those were on a first night back after four days off.',
  '**What the share predicts, which is the part I had not understood.** _Five of the seven are attributable to a fourth night_ predicts that about two in seven will not be. So when the day sister told me in October about the error of 11 September, which was a Monday, she thought she was contradicting me, and I thought so too. **She was not. She was giving me the second of my own two.**',
  '**What I am not claiming.** That a fourth night causes an error. It does not: a hundred and eighteen shifts contain about thirty fourth nights and five of them produced an error, so **about one fourth night in six.** The other twenty-five produced nothing, and I am the person who worked most of them.',
  '**What I am claiming, and it is narrower and more useful.** That a fourth night is the condition under which this ward\'s existing checking arrangements fail — and **that the two first-nights-back point at the same mechanism**, because a nurse returning after four days off is also a nurse who has not done the round for four days.',
  '**What I cannot put a share on at all.** Whether the double-check since February has prevented any. Nothing has happened, and nothing happening is not a figure. ⚠ **I have run that trial for nine months and I have no number for the only question anybody will ask about it.**',
  '**What I am asking for, and it is one line of counting.** That the seven be re-read against the rota by somebody who is not me, to confirm the five and the two. If the five turn out to be four, the whole of this page is a different page.',
]));
out.push(item('1', 'What does she withdraw, and what has not changed since October?'));
out.push(item('2', 'What did the day sister think she was doing in October, and what was she actually doing?'));
out.push(item('3', 'What can she put no share on at all, and why?'));
out.push(writers([
  'A page with a share in it: **withdraw the unquantified sentence in the first lines** → **the figures, named as unchanged** → **what the share predicts, and the counter-example that turned out to be yours** → **what you are _not_ claiming, with the arithmetic** → **the narrower claim** → **what you can put no share on at all** → **and the one line of counting you are asking for**.',
  '**Withdraw the old sentence and keep the old figures.** _The figures are the same figures as in October._ ⚠ New figures with a new claim read as a change of mind; the **same** figures with a narrower claim read as a count, and are much harder to argue with.',
  '⚠ **Print the counter-example that was offered to you, and say that it was yours.** _She thought she was contradicting me, and I thought so too. She was giving me the second of my own two._ That paragraph does more for a page than any amount of care in the claim itself.',
  '**Give the denominator as well as the share.** _About thirty fourth nights and five of them produced an error — about one fourth night in six._ A share with no denominator is an impression: _five of seven_ and _five of thirty_ are both true of the same five.',
  '⚠ And name the thing you can put **no** share on. _Nothing has happened, and nothing happening is not a figure._ A missing figure, named, is what gets a trial reviewed; a page that leaves it out gets the trial extended.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page with the share in it (80 words or more).'));
out.push(p('**______ of the ______** · ______________ · ______________   This is for ______________ and it replaces ______________. **The earlier version said ______________. That sentence is not true and I am withdrawing it.**   **The figures, and they are the same figures.** ______________. ______________. **______ of the ______ were ______________. ______ were not**, and ______________.   **What the share predicts.** ______________ predicts that about ______ in ______ will not be. So when ______________, **she was giving me ______________.**   **What I am not claiming.** ______________ — about one ______ in ______.   **What I can put no share on at all.** ______________. **______________ is not a figure.**   **What I am asking for.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The unquantified sentence withdrawn in the first lines',
  'The share given as a count, with its denominator',
  'The writer\'s own counter-examples printed early',
  'One thing named that no share can be put on',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their share and the cases that do not fit it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the withdrawal, the share with its denominator, the counter-example that was yours, and what carries no share.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the unquantified sentence withdrawn, the share given as a count with its denominator, the exceptions early.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your share aloud twice — once with the stress on the figure and once on the hedge.** The room says which one sounded like a measurement. Then the sentence to leave the cycle on, which is Rasha\'s: **she thought she was contradicting me, and she was giving me the second of my own two.**'));
out.push(hw('Write the page (80+ words). Then find **one** sentence in something your workplace has sent you that says _due to_, and write down what share you think is actually being claimed.'));

// ===================== 7.3 =====================
out.push(pb());
out.push(h2('7.3  What would show me wrong'));
out.push(p('**Function:** naming the thing that would show your explanation was wrong   ·   **Grammar:** _if …, my explanation is wrong_ · _what would settle it against me_   ·   **Pronunciation:** the conditional said without losing confidence'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say your chain from 7.1 in one sentence. Then say: **_and if ______________, I am wrong._** ⚠ If you cannot finish the second sentence, say so out loud — about a third of the room will not be able to, and that is the beginning of the cycle and not a failure in it.'));
out.push(board('I am fairly confident it is the brush bench.', 'If one person sealed that batch, my second step is wrong.'));
out.push(p('**b**  Which of these could be shown to be wrong? **1** _People are careless._  **2** _Eleven of the fifteen came from one batch._  **3** _There is a culture of not reading the sheets._  **4** _The bead is thin where the clips are carrying the load._  **5** _Nurses on a fourth night are tired._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say you have if you cannot name the thing that would show you wrong, and what does Jad find about his own explanation?   **A** a theory; that it is right   **B** not an explanation but a **description** — and Jad finds that his explanation of the urgent requests already has the figure in it that would refute it, and that he had written the figure down in February without noticing   **C** a guess; nothing'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say about an explanation that fits every outcome?   **2** What does Omar say happens when he names the falsifier **after** being asked?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.5  And if that is not it, I am wrong', [
  ['Ms Huda', 'One sentence each, and then the second sentence: **and if ______, I am wrong.** Mr Attar.'],
  ['Jad', 'My explanation is that requests are marked urgent because the person marking them is not the person who has to answer them. And if — ' + 'if putting names on the marking changes nothing by February, I am wrong.'],
  ['Ms Huda', 'Good. Now the harder question: **do you already have that figure?**'],
  ['Jad', 'I have eleven of nineteen from last month. I shall have the February figure in February.'],
  ['Ms Huda', 'And in February, if it is still eleven of nineteen?'],
  ['Jad', 'Then it is not about who marks them. _(a pause)_ And I wrote that figure down in February of this year as well, before the names, and it was nine of seventeen. Which is about the same proportion.'],
  ['Ms Huda', '⚠ **So your own notebook already contains the test, and it has already half failed.** That is not a disaster — it is the cycle working at the first attempt. **A falsifier you can name is a thing you can go and look up**, and most people find that they have already looked it up and not noticed.'],
  ['Omar', 'What if you cannot name one at all?'],
  ['Ms Huda', '**Then you do not have an explanation. You have a description.** _People are careless_ explains the sheets being empty, the sheets being full, and the sheets being filled in wrongly. ⚠ **An explanation that fits every outcome has told you nothing about any of them**, and the test is exactly that: **what would the world look like if this were false?** If the answer is _the same_, there is nothing there.'],
  ['Dima', 'There are three kinds of that, in my experience. One that fits any outcome — _people are careless_. One that can swallow any counter-example — _that one was an exception_. And one whose words cannot be counted at all: _a culture of not reading the sheets_. I take out about two of the third kind a month and nobody has ever been able to tell me what to count.'],
  ['Ms Huda', '⚠ **And the third is the dangerous one, because it reads as the most sophisticated.** _A culture of_ cannot be weighed, cannot be dated and cannot be wrong, which is why it survives in print and changes nothing.'],
  ['Rim', 'Why would anybody volunteer the thing that would sink them?'],
  ['Ms Huda', 'Because it is not what it looks like. **A falsifier is a work plan.** _If the brush bench was one person, my second step is wrong_ tells Mr Hariri exactly what to ask for, and it is one question instead of four. ⚠ And there is the practical half: **the falsifier you name before anybody asks is always stronger than the one you produce under pressure.**'],
  ['Omar', 'That is true, and I have done the second thing. When somebody asks me what would change my mind, whatever I say in that moment is something I have chosen because it will not happen. Under pressure I pick a test I know I shall pass.'],
  ['Ms Huda', '⚠ Everybody does, and it is why the sentence belongs in the **second paragraph of the page** and not in the discussion afterwards. In writing you have time to pick the test that would actually hurt, and the reader can see that you have.'],
  ['Hiba', 'And if the falsifier happens? If you are shown to be wrong?'],
  ['Ms Huda', '**Then you have spent one page and saved four months**, and you say so in the same words you used to name it. A writer who names a falsifier and then explains it away when it arrives has spent the credit of the first page and borrowed against the next.'],
  ['Yara', 'And reading it aloud?'],
  ['Ms Huda', '🔊 **Flat, and with no drop in confidence on the conditional.** _If one person sealed that batch, my second step is wrong._ ⚠ Said apologetically it sounds like a retreat already under way; said flat, it sounds like what it is — somebody telling you where to look first.'],
]));
out.push(sp());
out.push(box('Language box – naming the thing that would show you wrong', [
  '⚠ **If you cannot name the observation that would show your explanation is wrong, you do not have an explanation. You have a description.** The test is one question: **what would the world look like if this were false?** If the answer is _the same_, there is nothing there.',
  '**The sentence, and it belongs in the second paragraph.** **_If ______________, my explanation is wrong._** _If one person sealed that batch, my second step is wrong and everything after it is wrong with it._ · _If putting names on the marking changes nothing by February, it is not about who marks them._',
  '**Three kinds of unfalsifiable explanation, which are Mrs Khoury\'s.** **One that fits any outcome** — _people are careless_ explains empty boxes, full boxes and wrongly filled boxes. **One that swallows any counter-example** — _that one was an exception_. **And one whose words cannot be counted** — _a culture of not reading the sheets_.',
  '⚠ **The third is the dangerous one, because it reads as the most sophisticated.** _A culture of_ cannot be weighed, cannot be dated and cannot be wrong, which is exactly why it survives in print and changes nothing.',
  '**A falsifier is not humility; it is a work plan.** _If the brush bench was one person, my second step is wrong_ tells the writer what to ask for — **one question instead of four**. And more often than anybody expects, **the figure that would settle it is already in your own notebook.**',
  '⚠ **Name it before anybody asks.** The falsifier produced under pressure is always weaker, because under pressure everybody picks a test they know they will pass. In writing you have time to choose the test that would actually hurt, **and the reader can see that you have.**',
  '**And if it happens, say so in the same words you used to name it.** A writer who names a falsifier and then explains it away when it arrives has spent the credit of the first page and borrowed against the next. **One page spent is four months saved.**',
  '**Pronunciation.** 🔊 **Track 7.6** The conditional is read **flat, with no drop in confidence**: _if one person sealed that batch, my second step is wrong._ ⚠ Said apologetically it sounds like a retreat already under way; said flat it sounds like what it is — somebody telling the reader where to look first.',
  '**Practise:** Name the thing that would show you wrong, and say whether you already have it. **1** a recurring fault  **2** a delay  **3** an empty box  **4** a complaint  **5** an explanation you have held for years',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the explanation from the card. B says what the world would look like if it were false — and if the answer is _the same_, B says so. B then writes the falsifier as **_if …, this is wrong_**. A says whether that figure already exists somewhere. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the explanation)_ __________.'],
  ['B', 'If that were false, we should see __________ — or nothing would look different, in which case there is nothing there.'],
  ['B', 'So: **if __________, this explanation is wrong.**'],
  ['A', 'That figure **already exists / does not exist**, and it is __________.'],
]));
out.push(table(['Card A – the explanation', 'Card B – the explanation'], [
  ['_The bead is thin where the clips carry the load._', '_Requests are marked urgent by people who do not answer them._'],
  ['_People are careless._', '_There is a culture of not reading the sheets._'],
  ['_A fourth night is when the checking fails._', '_The two benches are applying two standards._'],
  ['_The promise field is missing because the release was full._', '_The drivers read the printed time as a readiness time._'],
  ['_Contributors bury their findings out of modesty._', '_That one was an exception._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the falsifier for each of the eight, and whether the figure already exists. Then the count: **two of the eight cards cannot be falsified at all** — _people are careless_ and _a culture of not reading the sheets_ — and a third, _that one was an exception_, is the machine for swallowing counter-examples. ⚠ And: **in four or five of the remaining five the figure already exists**, unlooked-up.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write the falsifier for your own chain, as one sentence, and then answer the second question: **do you already have that figure, or can you get it this week?** Write the answer down even when it is uncomfortable.'));
out.push(p('**b**  Swap. Then each of you ask whether your partner has chosen a test they know they will pass. ⚠ Ask it plainly; it is the question of the cycle, and it is easier to ask than to answer.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _One sentence each, and then the second sentence: and if this, I am wrong. Jad\'s explanation is that requests are marked urgent because the person marking them is not the person who has to answer them, and his falsifier is that if putting names on the marking changes nothing by February, he is wrong. Then the harder question: does he already have that figure? He has eleven of nineteen from last month and will have February\'s in February — and then, in the middle of answering, he remembered that he wrote the same figure down in February of this year, before the names, and it was nine of seventeen, which is about the same proportion. So his own notebook already contains the test and it has already half failed, which is not a disaster but the cycle working at the first attempt: a falsifier you can name is a thing you can go and look up, and most people find they have already looked it up without noticing. Omar asked what happens if you cannot name one at all, and the answer is that you do not have an explanation but a description — people are careless explains empty boxes, full boxes and wrongly filled boxes, and an explanation that fits every outcome has told you nothing about any of them. Dima named the three kinds: one that fits any outcome, one that swallows any counter-example — that one was an exception — and one whose words cannot be counted at all, which is a culture of not reading the sheets. She takes out about two of the third kind a month and nobody has ever been able to tell her what to count. Rim asked why anybody would volunteer the thing that would sink them, and the answer is that a falsifier is a work plan: it turns four questions into one. And Omar gave the honest sentence of the evening — under pressure I pick a test I know I shall pass — which is why the sentence belongs in the second paragraph of a page and not in the discussion afterwards._'));
out.push(p('**Listener task:** write your partner\'s falsifier and whether the figure already exists.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the post Jad writes with the falsifier in its second paragraph. Answer the questions.'));
out.push(model([
  '**THE URGENT MARKING · and what would show me wrong** · J. Attar · 17 November',
  'This is for the four editors and it is about the queue we agreed on 6 November. **It contains the figure that would show my explanation to be wrong, and I am putting it in the second paragraph because I found it on Sunday and not because anybody asked.**',
  '**My explanation, in one sentence.** Requests are marked urgent because the person marking them is not the person who has to answer them, and the cost of marking something urgent is therefore nought.',
  '**And if this is wrong.** _If putting names on the marking does not change the proportion by February, then it is not about who marks them._ ⚠ **I looked for that figure on Sunday and I already have half of it.** Last month: eleven of nineteen requests marked urgent were not urgent by our own definition. February of this year, before the names and before the queue: **nine of seventeen.** The proportions are about the same, and February of this year is the month I had forgotten I had counted.',
  '**What that does to my explanation, honestly.** It does not kill it, because the names went on in November and nine of seventeen is from February. But it removes the thing I had been treating as evidence: **I had been saying that the proportion was high because nobody was named, and I now know that the proportion was the same when four of us were named by default, because there were only four of us.**',
  '**What I think is more likely, and it is a second explanation and not a repair of the first.** That _urgent_ has no definition, so marking something urgent is the only way anybody has of saying _this matters to me_. If that is right, names will change nothing and **one line of definition will change everything** — and the test for it is cheap: write the definition, circulate it, and count the next nineteen.',
  '**What would show the second explanation wrong.** If the next nineteen come back at the same proportion **after** a circulated definition, then it is not about definition either, and I shall have been wrong twice about the same nineteen requests.',
  '**What I am asking for, and it is four lines of work.** The definition, which I shall write by Thursday, and one of you to count the next nineteen so that the counting is not mine. ⚠ **I have now been wrong once in public about this and I should rather not be the only person holding the figures.**',
]));
out.push(item('1', 'Why does he say the falsifying figure is in the second paragraph?'));
out.push(item('2', 'What does the February figure remove, and what does it not kill?'));
out.push(item('3', 'What would show his second explanation to be wrong?'));
out.push(writers([
  'A page that names its own falsifier: **say that the page contains the figure that would show you wrong, and when you found it** → **the explanation in one sentence** → **the falsifier, with the figure you already have** → **what that does to the explanation, honestly** → **the second explanation, named as a second and not a repair** → **what would show that one wrong** → **and the request, with the counting given to somebody else**.',
  '**Say in the first lines that you found the figure yourself and before being asked.** _Because I found it on Sunday and not because anybody asked._ ⚠ The same figure in paragraph six, or produced by a reader, does the opposite work: one writer counted, the other was caught.',
  '⚠ **Separate _it does not kill it_ from _it removes this_.** _It does not kill it, because the names went on in November… but it removes the thing I had been treating as evidence._ The sentence that does the work names **which part** of the claim the figure touches.',
  '**Call a second explanation a second explanation.** _It is a second explanation and not a repair of the first._ A writer who quietly reshapes the first so that it survives has done the thing this cycle exists to prevent.',
  '⚠ And **give the next count to somebody else.** _One of you to count the next nineteen, so that the counting is not mine._ After being wrong once in public, the only thing that restores the figures is a figure the writer did not produce.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page that names its own falsifier (80 words or more).'));
out.push(p('**______________ · and what would show me wrong** · ______________ · ______________   This is for ______________. **It contains the figure that would show my explanation to be wrong, and I found it ______________ and not because anybody asked.**   **My explanation, in one sentence.** ______________.   **And if this is wrong.** _If ______________, then ______________._ I already have ______________: ______________, against ______________.   **What that does to my explanation, honestly.** It does not kill it, because ______________. But it removes ______________.   **What I think is more likely, and it is a second explanation and not a repair.** ______________. **And what would show that one wrong:** ______________.   **What I am asking for.** ______________, and **______________ to do the counting, so that the counting is not mine.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The falsifier in the second paragraph, named before anybody asked',
  'The figure the writer already has, printed',
  'What the figure removes, kept separate from what it does not kill',
  'The next count given to somebody else',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their falsifier, and the room says whether it is a test the writer would pass.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the falsifier with the figure you have, what it removes, and the second explanation named as a second.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the falsifier early and unasked-for, the figure you already have, the second explanation named as a second.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your falsifier, and answer one question from the room: have you already got that figure?** ⚠ Count the yeses; in most classes it is more than half, and the count is the finding. Then Omar\'s sentence: **under pressure I pick a test I know I shall pass** — which is why it goes in the second paragraph, before anybody asks.'));
out.push(hw('Write the page (80+ words). Then go and look up the figure. Write down what it was, and whether you had it already without knowing.'));

// ===================== 7.4 =====================
out.push(h2('7.4  Cause, condition, trigger'));
out.push(p('**Function:** separating a cause from a condition and from a trigger   ·   **Grammar:** the three words, and the test for each   ·   **Pronunciation:** three words that look like synonyms'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the last time the thing happened, with the **time** in it: what day, what hour, and what happened in the ten minutes before it. Then say whether you think that ten minutes **caused** it.'));
out.push(board('It happened because a bed was moved at three in the morning.', 'The bed move is why it happened then. It is not why it happened.'));
out.push(p('**b**  Cause, condition or trigger? **1** _The checking arrangement has one person doing two rounds._  **2** _It was a fourth consecutive night._  **3** _A bed was moved at three in the morning._  **4** _The adhesive is brushed on by hand._  **5** _The customer dropped it in the street._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are the three tests Ms Huda gives, and what does she say an organisation does when it mistakes a trigger for a cause?   **A** three questions about time; nothing   **B** remove it and does it stop · is it there when nothing happens too · does it explain the **timing** but not the fact — and an organisation that mistakes a trigger for a cause spends money on the thing nearest in time and the effect comes back in a different hour   **C** three questions about people; it blames somebody'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say you do with a condition, as opposed to a cause?   **2** What does Tareq say the reprint was?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.7  Why it happened, and why it happened then', [
  ['Ms Huda', 'Three words tonight that look like synonyms and are not. **Cause. Condition. Trigger.** Mrs Barakat\'s error of 11 September, which was a Monday: a bed was moved at three in the morning and the round was broken in the middle. Mr Ayoub, which of the three is the bed?'],
  ['Tareq', 'It sounds like the cause. It is the thing that happened just before.'],
  ['Ms Huda', '⚠ **And that is the whole difficulty of the cycle: the trigger is always the thing nearest in time, so it always sounds like the cause.** Now the tests. **For a cause: take it away — does the effect stop?** If the bed had not been moved at three, would there have been no error that month?'],
  ['Tareq', 'There would have been one at some point. There were seven in a hundred and eighteen shifts.'],
  ['Ms Huda', 'So the bed is not the cause. **It explains why it happened then, and not why it happened.** That is a **trigger**, and the test for one is exactly that: _does it explain the timing and not the fact?_'],
  ['Omar', 'Then what is the cause?'],
  ['Ms Huda', '**The checking arrangement**, which has one person doing two rounds with nothing between them. Take that away — give the second round to somebody else — and the effect stops, whatever happens at three in the morning. ⚠ **A cause is the thing whose removal stops the effect.**'],
  ['Hiba', 'And the fourth night?'],
  ['Ms Huda', 'The fourth night is the interesting one and it is neither. It is a **condition**: the state of affairs under which the cause does its work. And the test for a condition is the one people never apply — **is it present when nothing happens as well?** There are about thirty fourth nights in those hundred and eighteen shifts and five produced an error. **So it is present twenty-five times with no effect at all.**'],
  ['Yara', 'Then it does not explain much.'],
  ['Ms Huda', '⚠ **It explains exactly one thing and it is worth having: it tells you when to put the resource.** You do not **fix** a condition — you cannot abolish fourth nights — **you manage it.** A cause is fixed, a condition is managed, and a trigger is, in almost every case, **ignored**.'],
  ['Rim', 'Ignored? The bed was moved.'],
  ['Ms Huda', 'The bed was moved, and next time it will be a telephone call, or a door, or a relative at the desk. **There is an inexhaustible supply of triggers**, and an organisation that acts on them buys a rule about beds at three in the morning and then has the same error in a different hour. ⚠ **That is what mistaking a trigger for a cause costs, and it is the commonest expensive mistake in this unit.**'],
  ['Tareq', 'Which is my own, exactly. The depot reprinted the sheet in September.'],
  ['Ms Huda', 'Say what the reprint was.'],
  ['Tareq', 'A trigger. Somebody complained in August, the sheet was reprinted in September, and the departures went on at 06.20 — because the cause is that the printed time means two things, and reprinting it printed both meanings again. **We spent money on the thing nearest in time, twice.**'],
  ['Dima', 'Is there a word for the thing that makes the cause worse without being any of the three?'],
  ['Ms Huda', '**There is, and it is _aggravating_, and I would rather you did not have it yet.** Three words used accurately are worth more than five used loosely, and the first thing that happens to a fourth word is that it becomes the place where everything difficult is put.'],
  ['Jad', 'And saying them aloud?'],
  ['Ms Huda', '🔊 **Stress all three, every time, because they look like synonyms and your reader\'s ear will flatten them.** _That is the **condition**, not the **cause**._ ⚠ And print them in the same positions in every paragraph: cause first, condition second, trigger last. A reader who has to work out which of the three you mean has stopped following the argument.'],
]));
out.push(sp());
out.push(box('Language box – cause, condition and trigger', [
  '**A cause is the thing whose removal stops the effect.** _The checking arrangement has one person doing two rounds with nothing between them._ Give the second round to somebody else and the effect stops, whatever happens at three in the morning. **Test: take it away — does it stop?**',
  '**A condition is the state of affairs under which the cause does its work.** _A fourth consecutive night._ **Test, and it is the one nobody applies: is it present when nothing happens as well?** About thirty fourth nights produced five errors, so the condition is present **twenty-five times with no effect at all**.',
  '**A trigger is what makes it happen _now_.** _A bed was moved at three in the morning._ **Test: does it explain the timing and not the fact?** ⚠ The trigger is always the thing **nearest in time**, which is why it always sounds like the cause.',
  '**And the three different things you do with them.** **A cause is fixed. A condition is managed. A trigger is, in almost every case, ignored.** You cannot abolish fourth nights; you can decide where the resource goes on one.',
  '⚠ **What mistaking a trigger for a cause costs, which is the commonest expensive mistake in this unit.** There is an inexhaustible supply of triggers: next time it is a telephone call, a door, a relative at the desk. An organisation that acts on the trigger buys a rule about beds at three in the morning **and then has the same error in a different hour.**',
  '**Mr Ayoub\'s case, which is the one to remember.** Somebody complained in August; the sheet was reprinted in September; the departures went on at 06.20 — because the cause is that the printed time means two things, and **reprinting it printed both meanings again.** Money spent on the thing nearest in time, twice.',
  '**Three words, and no fourth one yet.** There is a word for a thing that makes a cause worse without being any of the three, and it is better not to have it: ⚠ **the first thing that happens to a fourth word is that it becomes the place where everything difficult is put.**',
  '**Pronunciation.** 🔊 **Track 7.8** **Stress all three, every time** — _that is the **condition**, not the **cause**_ — because they look like synonyms and a listener\'s ear flattens them. ⚠ And keep them in the same positions in every paragraph: cause first, condition second, trigger last. A reader working out which of the three you mean has stopped following the argument.',
  '**Practise:** Sort your own case into the three, and apply the test to each. **1** a fault  **2** an error  **3** a delay  **4** a complaint  **5** something that happened once and has not happened again',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the case from the card — it contains three facts. B sorts them into **cause**, **condition** and **trigger**, applying the test out loud for each. A then asks the question that settles the condition: **is it there when nothing happens as well?** B says what they would **fix**, **manage** and **ignore**. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(three facts)_ __________ · __________ · __________.'],
  ['B', 'Cause: __________ — take it away and it stops. Condition: __________ — present when nothing happens too. Trigger: __________ — explains the timing.'],
  ['A', 'Is the condition there when nothing happens? __________.'],
  ['B', 'So I would fix __________, manage __________, and ignore __________.'],
]));
out.push(table(['Card A – the three facts', 'Card B – the three facts'], [
  ['_One person does two rounds · a fourth consecutive night · a bed moved at 03.00_', '_The printed time means two things · a new driver on the service · a complaint in August_'],
  ['_The adhesive is brushed on by hand · a thin bead at one corner · the handset was dropped_', '_No field for a promise · a call at the end of a shift · a customer who asked twice_'],
  ['_"Where applicable" has no author · a night with two admissions · the pharmacy copy was late_', '_The stated range is not marked limit or guide · two benches on one instrument · a clinician queried a result_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three labels for each card, and what each pair would fix, manage and ignore. Then the count: **the trigger is put first in five or six of the eight** on a first run, because it is the thing nearest in time. ⚠ And almost nobody applies the condition test unprompted — _is it there when nothing happens as well?_ — which does most work in the cycle.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Sort your own case into the three, and write the test beside each one. Then write what you would **fix**, what you would **manage**, and what you would **ignore**.'));
out.push(p('**b**  Swap. Then each of you check your partner\'s condition with the one test: **is it present when nothing happens as well?** If they cannot say, the thing they have called a condition has never been counted.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Three words that look like synonyms and are not: cause, condition and trigger. The case was Rasha\'s error of 11 September, which was a Monday, when a bed was moved at three in the morning and the round was broken in the middle. Asked which of the three the bed is, Tareq said it sounds like the cause because it is the thing that happened just before — which is the whole difficulty, because the trigger is always the thing nearest in time and therefore always sounds like the cause. Then the tests. For a cause: take it away, does the effect stop? If the bed had not been moved there would still have been an error at some point, because there were seven in a hundred and eighteen shifts. So the bed explains why it happened then and not why it happened, which is a trigger. The cause is the checking arrangement, which has one person doing two rounds with nothing between them: take that away and the effect stops whatever happens at three in the morning. And the fourth night is neither — it is a condition, the state of affairs under which the cause does its work, and the test for a condition is the one people never apply: is it present when nothing happens as well? There are about thirty fourth nights in those shifts and five produced an error, so the condition is present twenty-five times with no effect at all. Which explains exactly one thing and it is worth having: it tells you when to put the resource. A cause is fixed, a condition is managed, and a trigger is almost always ignored — because there is an inexhaustible supply of triggers, and an organisation that acts on them buys a rule about beds at three in the morning and then has the same error in a different hour. Tareq said that is his own case exactly: somebody complained in August, the sheet was reprinted in September, and the departures went on at 06.20, because the cause is that the printed time means two things and reprinting it printed both meanings again._'));
out.push(p('**Listener task:** write your partner\'s three labels, and whether their condition is present when nothing happens.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Tareq writes about the reprint. Answer the questions.'));
out.push(model([
  '**THE SEPTEMBER REPRINT · a trigger we paid for twice** · T. Ayoub · 18 November',
  'This is for the depot office and it is about the money, which is the part I have not written about before. **In August a passenger complained; in September the sheet was reprinted; and in October forty-one of sixty-two services left at 06.20 or later. The reprint was not a repair. It was a trigger we paid for.**',
  '**The cause.** The printed time means two things. The office reads 06.15 as the time the service is **due**; the six drivers read it as the time they are expected to be **ready**. Remove that — one word on the sheet — and the two readings stop, whatever anybody complains about in August. **It is the only one of the three facts whose removal ends the matter.**',
  '**The condition.** A service with a driver who has not run it before. Four of the six have run it for years and two have not, and the two account for about nine of the forty-one late mornings. ⚠ **But the condition is present when nothing happens as well:** the two new drivers ran it on thirty-one other mornings on time, so a new driver does not cause a late departure. It tells us when to stand at the door, and that is all it tells us.',
  '**The trigger.** The complaint of 14 August. It explains why the sheet was reprinted in September and it explains nothing about the departures. ⚠ **And there is an unlimited supply of it**: if nobody had complained in August, somebody would have complained in November, and we should have reprinted in December.',
  '**What we did with each of the three, and it is the wrong way round.** We acted on the **trigger** — a reprint, at cost, twice if you count 2021. We have not touched the **cause**, which is one word. And we have managed the **condition** by accident, because the two newer drivers happen to be on the early turn.',
  '**What I am proposing, in those three categories.** **Fix:** the word _due_ on the December sheet. **Manage:** the two newer drivers on the first service for one month, with the times written on the rota. **Ignore:** the next complaint, in the sense that we do not reprint anything because of it — we answer it with the word we have changed.',
  '**And the figure I should like on the record.** Two reprints, five years apart, for the same cause, neither of which changed a single departure time. ⚠ **A trigger is cheap to act on and that is why it is expensive.**',
]));
out.push(item('1', 'What does he say the reprint was, and what is the cause?'));
out.push(item('2', 'How does he show that the condition does not cause late departures?'));
out.push(item('3', 'What does he mean by _ignore_ in his proposal?'));
out.push(writers([
  'A page sorted into the three: **the three dated facts, with the trigger named as a trigger** → **the cause, with the removal test applied** → **the condition, with the figure for when nothing happens** → **the trigger, and the supply of it** → **what was actually done with each of the three** → **the proposal in the three categories** → **and the figure for the record**.',
  '**Put the three facts and their dates in the first three lines.** _In August a passenger complained; in September the sheet was reprinted; in October forty-one of sixty-two left at 06.20._ ⚠ Three dated facts let the reader sort them before you do, which makes the page a check and not a claim.',
  '⚠ **Apply the removal test in the sentence.** _Remove that — one word on the sheet — and the two readings stop._ A cause asserted is argued with; a cause with its removal test beside it is **tested**, and a reader who tests it has joined you.',
  '**Give the condition its when-nothing-happens figure.** _The two new drivers ran it on thirty-one other mornings on time._ Without that figure a condition cannot be told from a cause, and the page reads as blaming the two newest people in it.',
  '⚠ And write the proposal in the **three words**: fix, manage, ignore. A proposal in prose reads as three suggestions of equal weight; in the three categories it tells the reader which costs money, which costs attention and which costs nothing — **and _ignore_ needs one line of explanation**, or it reads as neglect.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page sorted into the three (80 words or more).'));
out.push(p('**______________ · a ______________ we paid for** · ______________ · ______________   In ______________, ______________; in ______________, ______________; and in ______________, ______________. **______________ was not a repair. It was a ______________.**   **The cause.** ______________. Remove that — ______________ — and ______________.   **The condition.** ______________. **But it is present when nothing happens as well:** ______________.   **The trigger.** ______________. It explains why ______________ and nothing about ______________. **And there is an unlimited supply of it:** ______________.   **What we did with each of the three.** We acted on the ______________ and have not touched the ______________.   **What I am proposing.** **Fix:** ______________. **Manage:** ______________. **Ignore:** ______________.   **And the figure for the record.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Three dated facts in the first lines',
  'The removal test applied to the cause, in the sentence',
  'A when-nothing-happens figure for the condition',
  'The proposal written as fix · manage · ignore, with _ignore_ explained',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their three labels and their _ignore_ line.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the three dated facts, the removal test, the condition\'s figure, and the proposal in three categories.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: three dated facts early, the removal test applied to the cause, a when-nothing-happens figure for the condition.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read only your trigger, and then the sentence about its supply.** The room says what the next trigger will be, and they are usually right. Then the sentence to leave the cycle on, which is Tareq\'s: **a trigger is cheap to act on and that is why it is expensive** — two reprints, five years apart, and not one departure time changed.'));
out.push(hw('Write the page (80+ words). Then find **one** rule at your work that was made after a single incident, and write down whether it was aimed at the cause, the condition or the trigger.'));

// ===================== 7.5 =====================
out.push(h2('7.5  Six sentences somebody can predict from'));
out.push(p('**Function:** describing a mechanism so that somebody else can predict from it   ·   **Grammar:** the six-sentence mechanism · _which predicts_ · _what it does not predict_   ·   **Pronunciation:** the prediction sentence read without emphasis'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Describe your mechanism to your partner in **six sentences**, counting them on your fingers, and then stop. Your partner must then say **one case you have not mentioned** and what your mechanism says will happen in it. ⚠ If they cannot, you have told them a story and not a mechanism.'));
out.push(board('That is what happens, and I have seen it many times.', 'Which predicts that the afternoon runs will be repeated about six times as often.'));
out.push(p('**b**  Which of these is a prediction? **1** _It happens because the bead is thin._  **2** _Which predicts that the lifted corner will be the same corner in most cases._  **3** _I have seen it many times._  **4** _So the afternoon bench will be asked to repeat about one run in six._  **5** _It is a known problem with that model._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say is the one test of a mechanism, and what does Yara\'s mechanism predict?   **A** whether it is true; nothing   **B** whether somebody who has read it can **predict a case you have not told them about** — and Yara\'s predicts that the afternoon runs will be repeated far more often than the morning ones, and that the difference will be in the repeats and not in the results   **C** whether it is short; a wrong figure'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say the fifth sentence does?   **2** What does Yara say she found when she looked at the repeat log?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.9  Which predicts, and what it does not predict', [
  ['Ms Huda', 'Mrs Mansour, the mechanism in six sentences. Count them.'],
  ['Yara', 'One. The stated range on the June record is written as a figure with nothing beside it — not _limit_, not _guide_. Two. The morning bench reads it as a guide, so a reading of nought point four is within range and is reported. Three. The afternoon bench reads it as a limit, so the same reading is out of range and the run is repeated. Four. Both benches then report in one voice, on one form, with no note of which standard was applied. Five. _(a pause)_ Five is where I always stop.'],
  ['Ms Huda', '⚠ **And sentence five is the one that makes it a mechanism instead of a story.** Four sentences describe what happens. **The fifth says what it predicts.** Try it.'],
  ['Yara', 'Which predicts that the afternoon runs will be repeated far more often than the morning ones, because the same reading is out of range on one bench and within it on the other.'],
  ['Ms Huda', 'And did you look?'],
  ['Yara', 'I looked on Sunday. The repeat log. The afternoon bench has repeated eleven runs since June and the morning bench has repeated one. **I had had that log for five months and I had never had a reason to open it.**'],
  ['Omar', 'So the mechanism told her where to look.'],
  ['Ms Huda', '**Which is the whole of the cycle.** A mechanism that predicts nothing is a description you cannot use. A mechanism that predicts something tells you **which document to open**, and more than half the time the document is already in the building. ⚠ **And a prediction that comes out right is worth more than any amount of explanation**, because it was written down before the figure was known.'],
  ['Hiba', 'And the sixth sentence?'],
  ['Ms Huda', '**What it does _not_ predict**, and it matters as much. Mrs Mansour.'],
  ['Yara', 'It does not predict that any result is wrong. A hundred and seven runs, and I am not saying that one of them needs repeating. The mechanism is about **which standard was applied**, not about accuracy.'],
  ['Ms Huda', '⚠ **Say the sixth sentence before anybody else does and you keep the fifth.** Leave it out and the first reader will suppose that you are claiming the results are unsafe, which you are not, and the whole page will be answered as if you were.'],
  ['Dima', 'Six sentences is very short for a mechanism.'],
  ['Ms Huda', 'It is short and it is the point. **A mechanism that needs twelve sentences has two mechanisms in it**, and the reader will carry one of them away and not know which. ⚠ Six, and if the sixth is still a description, the mechanism has not been found yet.'],
  ['Rim', 'What makes a prediction checkable by somebody else?'],
  ['Ms Huda', '**A figure, or a document, or a place.** _Far more often_ is better than nothing and _about eleven to one in the repeat log_ is a prediction. ⚠ And it must be checkable **by somebody who is not you**: a prediction only you can verify is an opinion with a tense on it.'],
  ['Jad', 'And if the prediction comes out wrong?'],
  ['Ms Huda', 'Then you have 7.3, and the page you write next is a shorter page than the one you would otherwise have written in March. **A mechanism is the cheapest thing in this unit to be wrong about.**'],
  ['Tareq', 'And reading it out?'],
  ['Ms Huda', '🔊 **The six sentences at an even pace, and the fifth with no extra emphasis at all.** ⚠ A speaker who leans on the prediction has turned it into a boast, and the listener then hears a claim rather than a test. Read flat, sentence five sounds like an instruction to go and look — which is what it is.'],
]));
out.push(sp());
out.push(box('Language box – the six-sentence mechanism', [
  '**The shape, and six is a limit and not a target.** **1** the thing that varies. **2** what it does to the next thing. **3** what that does — the step nobody can see. **4** the point at which it becomes visible. **5** **what it predicts.** **6** **what it does not predict.**',
  '⚠ **Sentence five is what makes it a mechanism instead of a story.** Four sentences describe what happens; a description you cannot use is not worth the page. **_Which predicts that the afternoon runs will be repeated far more often than the morning ones._**',
  '**The one test: can somebody who has read it predict a case you have not told them about?** If not, you have told them a story. ⚠ And a mechanism tells **you** something too: **which document to open** — and more than half the time that document is already in the building and has never been opened.',
  '**What makes a prediction checkable: a figure, or a document, or a place.** _Far more often_ is better than nothing; _about eleven to one in the repeat log_ is a prediction. ⚠ And it must be checkable **by somebody who is not you** — a prediction only you can verify is an opinion with a tense on it.',
  '**Sentence six, and say it before anybody else does.** _It does not predict that any result is wrong._ Leave it out and the first reader supposes you are claiming something you are not, **and the whole page is answered as if you were.**',
  '⚠ **A mechanism that needs twelve sentences has two mechanisms in it**, and the reader will carry one away without knowing which. Six — and if the sixth sentence is still a description, the mechanism has not been found yet.',
  '**And a prediction that comes out right is worth more than any explanation**, because it was written down **before** the figure was known. One that comes out wrong costs you one page in November instead of four months to March: **a mechanism is the cheapest thing in this unit to be wrong about.**',
  '**Pronunciation.** 🔊 **Track 7.10** The six sentences at an **even pace**, and the fifth with **no extra emphasis at all**. ⚠ A speaker who leans on the prediction has turned it into a boast, and the listener hears a claim instead of a test. Read flat, sentence five sounds like an instruction to go and look, which is what it is.',
  '**Practise:** Six sentences, with a prediction and a non-prediction. **1** a recurring fault  **2** a delay  **3** an empty field  **4** a difference between two shifts  **5** a complaint that comes back',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives the mechanism from the card in **four** sentences only. B supplies sentence five — **which predicts** — and sentence six — **what it does not predict**. A then names a case neither of them has mentioned, and B says what the mechanism predicts in it. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(four sentences)_ __________. __________. __________. __________.'],
  ['B', 'Which predicts that __________.'],
  ['B', 'And it does **not** predict that __________.'],
  ['A', '_(a new case)_ What about __________?'],
  ['B', 'The mechanism says __________, and that can be checked in __________.'],
]));
out.push(table(['Card A – the first four sentences', 'Card B – the first four sentences'], [
  ['_A stated range with no word beside it · two benches reading it two ways · one reports, one repeats · both report in one voice_', '_Adhesive brushed on by hand · a bead of uneven thickness · clips carrying the load where it is thin · a corner lifting_'],
  ['_No field for a promise · the promise goes in free text · free text is not searched · the next call has no record_', '_A printed time meaning two things · the office reads_ due _· the drivers read_ ready _· the service leaves at 06.20_'],
  ['_One person doing two rounds · nothing between them · a fourth night · a round broken in the middle_', '_"Where applicable" with no author · two shifts deciding separately · a box left empty on one shift · a file that looks consistent_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** sentence five and sentence six for each of the eight. Then the count: **about half the fifth sentences are not predictions but restatements** — _which means the box is empty_ — and the test is whether a figure, a document or a place appears in them. ⚠ And the second finding: in six or seven of the eight, the document that would check the prediction **already exists**.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your own mechanism in six sentences, numbered, with sentence five a prediction containing a figure, a document or a place, and sentence six what it does not predict.'));
out.push(p('**b**  Swap. Then each of you name a case your partner has not mentioned and ask what their mechanism predicts in it. ⚠ If the answer is _I do not know_, the mechanism stops at four sentences however many they have written.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Yara gave the mechanism in six sentences and counted them. One: the stated range on the June record is written as a figure with nothing beside it — not limit, not guide. Two: the morning bench reads it as a guide, so a reading of nought point four is within range and is reported. Three: the afternoon bench reads it as a limit, so the same reading is out of range and the run is repeated. Four: both benches then report in one voice, on one form, with no note of which standard was applied. And five is where she always stops — which is the sentence that makes it a mechanism instead of a story, because four sentences describe what happens and the fifth says what it predicts. Hers is that the afternoon runs will be repeated far more often than the morning ones, because the same reading is out of range on one bench and within range on the other. Then she was asked whether she had looked, and she had, on Sunday: the repeat log shows eleven repeats by the afternoon bench since June and one by the morning bench. She had had that log for five months and had never had a reason to open it. Which is the whole of the cycle: a mechanism that predicts nothing is a description you cannot use, and a mechanism that predicts something tells you which document to open — and more than half the time the document is already in the building. The sixth sentence matters as much and it is what the mechanism does not predict: it does not predict that any result is wrong. A hundred and seven runs, and she is not saying one of them needs repeating. Say the sixth sentence before anybody else does and you keep the fifth; leave it out and the first reader supposes you are claiming the results are unsafe, and the whole page is answered as if you were. Dima said six sentences is very short for a mechanism, and it is short and that is the point: a mechanism needing twelve sentences has two mechanisms in it, and the reader will carry one away without knowing which._'));
out.push(p('**Listener task:** write your partner\'s sentence five, and the document that would check it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Yara writes with the mechanism in it. Answer the questions.'));
out.push(model([
  '**THE STATED RANGE · a mechanism in six sentences** · Y. Mansour · 19 November',
  'This is for the laboratory manager and for both benches. It is one page and the mechanism is six numbered sentences, which is the whole of the argument; everything after them is a check that anybody can repeat.',
  '**The mechanism.** **1** The stated range on the June record is written as a figure — nought point three — with no word beside it, neither _limit_ nor _guide_. **2** The morning bench reads it as a guide, so a reading of nought point four is within range and is reported. **3** The afternoon bench reads it as a limit, so the same reading is out of range and the run is repeated. **4** Both benches then report on one form, in one voice, with no note of which standard was applied. **5** **Which predicts that the afternoon bench will have repeated far more runs than the morning bench since June.** **6** **It does not predict that any result is wrong.**',
  '**The check, which I made on Sunday and which anybody can make again.** The repeat log, which is kept at the bench and which neither of us has ever been asked for. **Since 14 June: eleven repeats by the afternoon bench and one by the morning bench.** Eleven to one, in five months, on one instrument.',
  '**What I had believed before Sunday, and it was wrong in a useful way.** I had thought the disagreement was about the fourth decimal. It is not: **it is about one missing word**, and the fourth decimal is where the missing word shows up.',
  '**What sentence six is protecting.** One hundred and seven runs have been reported from that instrument since June and I am not asking for one of them to be repeated. If anybody reads this page as a safety question it will be answered as a safety question, and the answer will be a review of a hundred and seven results, which is four weeks of work and will not touch the cause.',
  '**What would show the mechanism wrong.** If the repeat log showed the two benches at about the same figure, the mechanism is wrong and the disagreement is about something else. ⚠ **I wrote that sentence on Sunday morning before I opened the log**, and I should like the manager to know that, because it is the only reason the eleven to one is worth anything.',
  '**What I am asking for, and it is one word.** That whoever wrote the stated range writes _limit_ or _guide_ beside it and initials it. Not a recalibration, not a review of results, and not a meeting of the two benches.',
]));
out.push(item('1', 'What does sentence five predict, and what did the check show?'));
out.push(item('2', 'What had she believed before Sunday, and why was it wrong in a useful way?'));
out.push(item('3', 'What is sentence six protecting, and what would it cost if it were left out?'));
out.push(writers([
  'A mechanism page: **say that the mechanism is six numbered sentences and that everything after them is a check** → **the six, numbered, with the prediction fifth and the non-prediction sixth** → **the check, with the document and the figure** → **what you believed before, and why it was wrong usefully** → **what sentence six is protecting, in cost** → **what would show the mechanism wrong, with the date you wrote it** → **and the one-word request**.',
  '**Number the six sentences and say that they are the argument.** _Everything after them is a check that anybody can repeat._ ⚠ A mechanism in paragraphs is read as a narrative and summarised as one; six numbered sentences cannot be summarised into four.',
  '⚠ **Name the document before the figure.** _The repeat log, which is kept at the bench and which neither of us has ever been asked for._ A figure arrives as a claim; a figure with its source is something the reader can go and look at this afternoon.',
  '**Say what sentence six costs if it is left out, in weeks.** _A review of a hundred and seven results, which is four weeks of work and will not touch the cause._ The non-prediction is not modesty: it is what stops your page starting the wrong piece of work.',
  '⚠ And **date the falsifier before the check**. _I wrote that sentence on Sunday morning before I opened the log._ A prediction dated after the figure is an explanation; dated before it, the same words are evidence.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mechanism page (80 words or more).'));
out.push(p('**______________ · a mechanism in six sentences** · ______________ · ______________   This is for ______________. The mechanism is six numbered sentences, and everything after them is a check anybody can repeat.   **The mechanism.** **1** ______________. **2** ______________. **3** ______________. **4** ______________. **5** **Which predicts that ______________.** **6** **It does not predict that ______________.**   **The check.** ______________, which is kept ______________. **______________.**   **What sentence six is protecting.** ______________, which is ______________ of work and will not touch the cause.   **What would show the mechanism wrong.** ______________. **I wrote that before I ______________.**   **What I am asking for.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Six numbered sentences, and no more than six',
  'A prediction fifth, with a figure, a document or a place in it',
  'A non-prediction sixth, with what it would cost if left out',
  'The falsifier dated before the check',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read sentence five and sentence six only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the six numbered sentences, the check with its document, and the dated falsifier.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: six numbered sentences, a prediction with a figure or a document in it, a non-prediction with its cost.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your six sentences, and let one person name a case you have not mentioned.** Answer it from the mechanism. ⚠ Where the answer is _I do not know_, the room says which sentence is missing, and it is almost always the third. Then Yara\'s line: **I had had that log for five months and never had a reason to open it.**'));
out.push(hw('Write the page (80+ words). Then go and open the document your sentence five points at, and write down the figure you find and whether it was what you predicted.'));

// ===================== 7.6 =====================
out.push(pb());
out.push(h2('7.6  The fault and its mechanism'));
out.push(p('**Function:** explaining a recurring fault by its mechanism and not by its symptom   ·   **Grammar:** the symptom sentence withdrawn · the mechanism in place of it   ·   **Pronunciation:** the symptom and the mechanism read one after the other'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the **symptom sentence** that your workplace uses about your recurring fault — the one everybody says, in the words they use. Then say nothing else. ⚠ About half the room will find that the sentence they brought in 7.1 is the symptom sentence.'));
out.push(board('Customers say we promised them things.', 'A promise made on a call is written where nobody will search for it.'));
out.push(p('**b**  Symptom or mechanism? **1** _Customers say we promised them things._  **2** _The call form has no field for a promise._  **3** _People do not read the handover sheets._  **4** _The free-text box has four thousand entries and no structure._  **5** _That model always fails._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Ms Huda say a symptom sentence is so hard to dislodge, and what does Nour say the symptom sentence had made the company do?   **A** because it is wrong; nothing   **B** because it is **true**, short, and names the thing everybody has seen — and the symptom sentence had produced two years of training on how to speak to customers, which treated the people answering the calls and left the form untouched   **C** because it is popular; a new form'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say the symptom sentence predicts?   **2** What does Nour say about the thirty-four?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.11  The sentence everybody says', [
  ['Ms Huda', 'Mrs Sabbagh, the sentence your company uses. Their words, not yours.'],
  ['Nour', '_Customers say we promised them things._ It has been said in that form at every quarterly meeting I have attended.'],
  ['Ms Huda', 'And is it true?'],
  ['Nour', 'It is completely true. That is exactly what customers say.'],
  ['Ms Huda', '⚠ **Which is why it cannot be dislodged, and it is worth being clear about this: a symptom sentence is not a lie.** It is true, it is short, and it names the thing everybody in the room has seen with their own eyes. **Against that, a mechanism in six sentences sounds like an excuse.**'],
  ['Omar', 'So how do you get rid of it?'],
  ['Ms Huda', '**You do not argue with it. You ask what it predicts.** _Customers say we promised them things_ predicts that the problem is in what the eleven of you say on the telephone. So what was done?'],
  ['Nour', 'Two years of training. How to phrase a commitment, how not to over-promise, four afternoons a year, and I have been to eight of them. And the figure has not moved: thirty-four of forty-one escalation calls involve a promise that is in no note of ours. That figure has not moved in two years of training.'],
  ['Ms Huda', '⚠ **And there is the argument, and it is not a better explanation — it is a bill.** The symptom sentence has been acted on for two years, at four afternoons a year for eleven people, and the figure has not moved. **A symptom explanation is not refuted by reasoning; it is refuted by what it cost and did not change.**'],
  ['Dima', 'That is the only argument I have ever seen work on a committee.'],
  ['Ms Huda', 'It is the only one that works on anybody, because it does not require them to agree that they were wrong. **It requires them to look at a figure and a cost.** Now the mechanism, Mrs Sabbagh, and six sentences.'],
  ['Nour', 'The form has no field for a promise. So a promise goes in the free-text box, which has four thousand entries and no structure. The box is not searched, because nobody can search it. So the next person to take a call from that customer has no record of the promise. They say we have no record of it — which is true — and the customer escalates, because being told there is no record of something they remember is worse than being refused.'],
  ['Ms Huda', '**Six, and the fifth one. What does it predict?**'],
  ['Nour', 'That escalations should cluster on customers who have called **before**. Which they do: thirty-four of the forty-one are second or third calls, and I had that figure in the same spreadsheet for a year without putting the two columns side by side.'],
  ['Jad', 'And the thirty-four — do any of them involve a promise that was never made?'],
  ['Nour', '⚠ **Four of the thirty-four, as far as I can tell.** Which is the sixth sentence: the mechanism does not predict that nobody ever over-promises. **It predicts that about nine in ten of the escalations would happen even if nobody ever over-promised again.**'],
  ['Ms Huda', 'Which is the most useful sentence in the page and the one the training cannot survive. ⚠ **Say it as a share and not as a refutation** — 7.2 — and the four are what makes the thirty are credible.'],
  ['Rim', 'And reading the two out together?'],
  ['Ms Huda', '🔊 **The symptom sentence first, in their words, at their speed. Then a pause. Then the six.** ⚠ Do not read the symptom sentence sarcastically: the people who say it are in the room and they will hear the voice and not the figure. **Flat, and then the pause does the work.**'],
]));
out.push(sp());
out.push(box('Language box – symptom, mechanism, and this unit\'s two declared sets', [
  '⚠ **A symptom sentence is not a lie, which is why it cannot be dislodged.** _Customers say we promised them things._ It is true, it is short, and it names the thing everybody has seen with their own eyes. **Against that, a mechanism in six sentences sounds like an excuse.**',
  '**So do not argue with it: ask what it predicts, and then what that cost.** _Customers say we promised them things_ predicts that the fault is in what the eleven of you **say**, and what followed was two years of training — four afternoons a year for eleven people — **with the figure unmoved at thirty-four of forty-one.**',
  '⚠ **A symptom explanation is not refuted by reasoning. It is refuted by what it cost and did not change.** This is the only argument that works on a committee, because it does not ask anybody to agree that they were wrong: **it asks them to look at a figure and a bill.**',
  '**Then the mechanism, in the six sentences of 7.5, in place of the symptom sentence and not beside it.** And its prediction: _escalations should cluster on customers who have called before_ — thirty-four of forty-one are second or third calls, **and the figure was in the same spreadsheet for a year with the two columns never put side by side.**',
  '**And sentence six as a share.** _Four of the thirty-four involve a promise that was never made._ ⚠ The mechanism does not predict that nobody over-promises; it predicts that **about nine in ten of the escalations would happen even if nobody ever over-promised again** — and the four are what make the thirty credible.',
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _stem from · result in · bring about · give rise to · feed into · follow on from · trace back to · come about · set off · flow from · knock on · stand up to_.',
  '**This unit\'s word-formation set** _(Reading Part 7 in 7.7 draws on this)_: _attribute → **attribution** · contribute → **contribution** · predict → **prediction** · occur → **occurrence** · recur → **recurrence** · originate → **origin** · fail → **failure** · correlate → **correlation** · intervene → **intervention**._',
  '**Pronunciation.** 🔊 **Track 7.12** **The symptom sentence first, in their words and at their speed. Then a pause. Then the six.** ⚠ Never read the symptom sentence sarcastically: the people who say it are in the room, and they will hear the voice and not the figure. **Flat, and the pause does the work.**',
  '**Practise:** The symptom sentence, then the mechanism, then the bill. **1** a fault  **2** an empty field  **3** a delay  **4** a complaint  **5** a thing people are trained about',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives the symptom sentence from the card, flat and in the workplace\'s own words. B asks **what does that predict?** and **what was done about it?** A answers from the card. B then gives the mechanism in six sentences and names the share in sentence six. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the symptom sentence)_ __________.'],
  ['B', 'What does that predict? And what was done about it?'],
  ['A', 'It predicts __________, and what was done was __________ — and the figure __________.'],
  ['B', '_(the mechanism, six sentences)_ __________.'],
  ['B', 'And it does not predict __________: about __________ in ten would happen anyway.'],
]));
out.push(table(['Card A – the symptom sentence, and what was done', 'Card B – the symptom sentence, and what was done'], [
  ['_"Customers say we promised them things." · two years of training, figure unmoved_', '_"People do not read the handover sheets." · a notice on the board, nineteen boxes still empty_'],
  ['_"That model always fails." · the model withdrawn from one shop, faults continued_', '_"The drivers are not punctual." · two reprints and a talk, forty-one mornings unchanged_'],
  ['_"Contributors bury their findings." · a style sheet issued, fifty-two paragraphs unchanged_', '_"The night staff are careless." · a double-check added, seven errors still seven_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each of the eight, the symptom sentence, what it predicted, what it cost, and the mechanism\'s sixth sentence. Then the count: **in all eight the symptom explanation was acted on and the figure did not move** — which is the arithmetic of the cycle. ⚠ And in six or seven of the eight the action taken was **training or a notice**, which is what a symptom sentence produces.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your own symptom sentence, what it predicts, what was done about it, and what the figure did. Then your mechanism in six sentences, with sentence six as a **share**.'));
out.push(p('**b**  Swap. Then each of you say whether your partner\'s mechanism would have produced a **different action** from the symptom sentence. ⚠ If both explanations lead to the same action, the mechanism is not yet worth the page.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour gave the sentence her company uses, in their words: customers say we promised them things. Asked whether it is true, she said it is completely true, which is exactly why it cannot be dislodged — a symptom sentence is not a lie. It is true, it is short, and it names the thing everybody in the room has seen with their own eyes, and against that a mechanism in six sentences sounds like an excuse. Omar asked how you get rid of it, and the answer is that you do not argue with it: you ask what it predicts. Customers say we promised them things predicts that the problem is in what the eleven of them say on the telephone, and what followed was two years of training — four afternoons a year, eleven people, eight of which Nour has attended. And the figure has not moved: thirty-four of forty-one escalation calls involve a promise that is in no note of theirs. Which is the argument, and it is not a better explanation but a bill: a symptom explanation is not refuted by reasoning, it is refuted by what it cost and did not change. Dima said that is the only argument she has ever seen work on a committee, because it does not require anybody to agree that they were wrong — it requires them to look at a figure and a cost. Then the mechanism in six sentences: the form has no field for a promise, so a promise goes in the free-text box, which has four thousand entries and no structure; the box is not searched because nobody can search it; so the next person to take a call has no record; they say we have no record, which is true; and the customer escalates, because being told there is no record of something you remember is worse than being refused. The fifth sentence predicts that escalations cluster on customers who have called before — and thirty-four of the forty-one are second or third calls, a figure that had been in the same spreadsheet for a year without the two columns being put side by side._'));
out.push(p('**Listener task:** write your partner\'s symptom sentence and what it cost.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Nour sends to the quarterly meeting. Answer the questions.'));
out.push(model([
  '**THE SENTENCE WE HAVE BEEN ACTING ON** · N. Sabbagh · 20 November',
  'This is for the quarterly meeting and it is about one sentence that has been said at every one of them since I joined. **The sentence is true. It has cost us eight afternoons a year for two years and the figure it was aimed at has not moved.**',
  '**The sentence.** _Customers say we promised them things._ I want to be exact about this: it is true, I have heard it said by four different people, and every one of them was describing something they had seen.',
  '**What it predicts, which is the part nobody has written down.** That the fault is in **what we say** on the calls. Acted on, that produces training in how to phrase a commitment — which is what we have had, four afternoons a year for eleven people since 2024.',
  '**And the bill.** Eight afternoons for eleven people, which is about four hundred hours. **Thirty-four of forty-one escalation calls involved a promise that is in no note of ours in the quarter before the training began, and thirty-four of forty-one do now.** I am not saying the training was badly run; I have been to eight of them and two were the best teaching I have had at this company. **I am saying that the figure it was aimed at has not moved at all.**',
  '**The mechanism, in six sentences.** **1** The call form has no field for a promise. **2** So a promise is written in the free-text box, which has about four thousand entries and no structure. **3** The box is not searched, because nobody can search it. **4** So the next person to take a call from that customer has no record of the promise. **5** **Which predicts that escalations will cluster on customers who have called before** — and thirty-four of the forty-one are second or third calls. **6** **It does not predict that nobody over-promises:** four of the thirty-four involve a promise I do not believe was made, which is about one in nine.',
  '**What the mechanism would have us do instead.** One field, with a date in it. Two hours of somebody\'s time in a release, against four hundred hours of training that did not move the figure.',
  '**And what I am not asking for.** That the training stop. ⚠ **Two of those afternoons taught me to answer a question I had not been able to answer, and that is not nothing** — it is simply not an answer to this.',
]));
out.push(item('1', 'Why does she say the symptom sentence is true, and what has it cost?'));
out.push(item('2', 'What does sentence five predict, and what figure supports it?'));
out.push(item('3', 'What is she not asking for, and why?'));
out.push(writers([
  'A page that replaces a symptom with a mechanism: **say that the sentence is true and that it has cost something** → **the sentence, in their words, with who said it** → **what it predicts, and what that produced** → **the bill, in hours, with the figure before and after** → **the mechanism in six numbered sentences** → **what the mechanism would have you do instead, costed against the bill** → **and what you are not asking for**.',
  '**Concede that the symptom sentence is true in the first three lines.** _The sentence is true._ ⚠ A page that disputes what everybody has seen is read as a defence of the people being blamed — and here the writer is one of them.',
  '⚠ **Put the bill in hours and the figure before and after it, in one sentence.** _Four hundred hours. Thirty-four of forty-one before, thirty-four of forty-one now._ **That sentence is the argument.** It asks nobody to agree that they were wrong; it asks them to read a figure.',
  '**Cost the mechanism\'s action against the symptom\'s.** _Two hours of somebody\'s time against four hundred hours of training._ A mechanism with no price is read as an opinion; with a price it is read as a proposal.',
  '⚠ And **defend the thing you are displacing**. _Two of those afternoons taught me to answer a question I had not been able to answer._ A page that makes two years of somebody\'s work worthless will be answered by the person who ran it, and they will be right to.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page that replaces the symptom with the mechanism (80 words or more).'));
out.push(p('**The sentence we have been acting on** · ______________ · ______________   This is for ______________. **The sentence is true. It has cost ______________ and the figure it was aimed at has not moved.**   **The sentence.** _______________. It is true, and I have heard it from ______________.   **What it predicts.** That the fault is in ______________. Acted on, that produces ______________.   **And the bill.** ______________, which is about ______ hours. **______________ before, and ______________ now.**   **The mechanism, in six sentences.** **1** ______________. **2** ______________. **3** ______________. **4** ______________. **5** **Which predicts ______________.** **6** **It does not predict ______________:** about ______ in ______.   **What the mechanism would have us do instead.** ______________, against ______________.   **And what I am not asking for.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The symptom sentence conceded as true in the first lines',
  'The bill in hours, with the figure before and after',
  'Six numbered sentences, with a share in the sixth',
  'The thing being displaced defended in one line',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their bill — the hours, and the figure before and after.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the sentence conceded, the bill in hours, the six numbered sentences, and the costed alternative.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the symptom sentence conceded as true, the bill in hours with the figure before and after, a share in sentence six.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the symptom sentence, flat and in their words. Then pause. Then sentence five.** ⚠ The room says whether the pause was long enough, and it usually was not. Then the sentence to leave the cycle on, which is Ms Huda\'s: **a symptom explanation is not refuted by reasoning; it is refuted by what it cost and did not change.**'));
out.push(hw('Write the page (80+ words). Then work out the bill for your own symptom sentence: how many hours has your workplace spent acting on it, and what did the figure do? Two numbers.'));

// ===================== 7.7 =====================
out.push(pb());
out.push(h2('7.7  Review & Mediate: One cause, two symptoms'));
out.push(p('**Function:** explaining to two parties that their two problems are one cause and two symptoms   ·   **Recycling:** Unit 7   ·   **Exam practice:** B2 First Reading and Use of English Part 7 · Writing Part 1 · Listening Part 3'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 7 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** The bead is thin, that in turn leaves the clips carrying the load.  **2** The adhesive is brushed on by hand, with the result the bead varies.  **3** Five of the seven are attributable a fourth night.  **4** The fourth night counts for about five of the seven.  **5** A bed moved at three in the morning is the cause: it explains the timing.  **6** Which prediction that the afternoon runs will be repeated more often.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the two complaints as they arrived, and the one record underneath them.'));
out.push(box(null, [
  '**TWO COMPLAINTS, ONE INSTRUMENT** _(19 November)_',
  '**From the clinicians, to the laboratory manager.** _"The afternoon results from that instrument do not sit consistently with the morning ones. We should like to know which shift to rely on."_',
  '**From the afternoon bench, to the laboratory manager.** _"We are asked to repeat about one run in six and the morning bench is not asked to repeat anything. We should like to know why the work is not shared."_',
  '**The one record, in full.** _June calibration, instrument 4. Stated range **0.3**. Reading **0.4**. Signed, morning bench, 14 June._ ⚠ **Twelve words and a figure with no word beside it — neither _limit_ nor _guide_.**',
  '**And the document neither party has opened.** The repeat log, at the bench: **eleven repeats by the afternoon bench since June, and one by the morning bench.**',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. What do the two complaints have in common, and what does Ms Huda say a mediator must show about each party\'s own remedy?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.13  Two complaints and one missing word', [
  ['Ms Huda', 'Two complaints, one instrument, and they were written on the same day by people who have not spoken to each other. Mrs Mansour, you work on that bench. Say nothing for the moment. Mr Darwish — what are the two complaints about?'],
  ['Omar', 'One is about the results and one is about the workload. They are not the same complaint at all.'],
  ['Ms Huda', '**They are not the same complaint and they are the same cause**, and that is the task of this cycle. Read me the record.'],
  ['Omar', '_Stated range nought point three. Reading nought point four. Signed, morning bench._ Twelve words.'],
  ['Ms Huda', '⚠ **And the missing word is the cause of both complaints.** The figure has nothing beside it. The morning bench reads it as a guide, so nought point four is reported; the afternoon bench reads it as a limit, so the same reading is repeated. **Which gives the clinicians an inconsistency and the afternoon bench a workload** — one cause, two symptoms, and neither party can see the other\'s.'],
  ['Hiba', 'Why can they not see it?'],
  ['Ms Huda', '**Because each of them can see only their own end of it.** The clinicians see two columns of results that do not match. The afternoon bench sees a repeat log. ⚠ **Neither of them has any reason to look at the other\'s evidence, and the thing in the middle — the missing word — is invisible from both ends.**'],
  ['Tareq', 'So the mediator shows them the middle.'],
  ['Ms Huda', '**Three moves, and they are not the moves of 6.7.** One: quote **both** symptoms, in their own words. Two: name the **one cause**, and apply the removal test in the sentence — _put one word beside that figure and both complaints stop._ Three, and this is the move of this unit: ⚠ **show what each party is already doing about their own symptom, and why both of those will fail.**'],
  ['Yara', 'May I say what we are doing? We have started writing _repeated_ in the comment column, so that the clinicians can see which results were repeated. It has taken us about four hours a month since September.'],
  ['Ms Huda', 'And what does it do to the cause?'],
  ['Yara', 'Nothing. It makes our end of it visible. The clinicians will still have two columns that do not match, because the morning bench is still reporting nought point four as a pass.'],
  ['Ms Huda', '⚠ **And the clinicians\' own remedy will fail in the same way**: they are asking which shift to rely on, and the answer to that question — _rely on the morning bench_ — would make it worse, because the morning bench is the one applying the looser standard. **Both remedies treat a symptom, and the better one of the two is the more dangerous.**'],
  ['Dima', 'That is the sentence to write down.'],
  ['Ms Huda', '**A remedy aimed at a symptom costs money and leaves the cause**, and a successful one hides it. Four hours a month, since September, to make one symptom legible.'],
  ['Rim', 'And the mediator does not decide which bench is right?'],
  ['Ms Huda', '⚠ **There is nothing to decide. Neither bench is wrong**, and that is what makes this different from 4.7 and from 6.7. In 4.7 both parties had overclaimed; in 6.7 the record was silent. **Here both parties are reading one document correctly, and the document is defective.**'],
  ['Jad', 'And the one thing that would settle it?'],
  ['Ms Huda', '**One word, written by the person who wrote the figure, and initialled.** It exists, it is one line of work, and in five months neither party has asked for it — because neither party knew there was a word missing. ⚠ **That is what one cause and two symptoms looks like from inside: two people working hard at two different problems that are one problem.**'],
]));
out.push(sp());
out.push(box('Language box – one cause, two symptoms', [
  '**The three moves, and they are not the moves of 6.7.** **1** Quote **both** symptoms, in the parties\' own words. **2** Name the **one cause**, and apply the **removal test in the sentence**: _put one word beside that figure and both complaints stop._ **3** Show **what each party is already doing about their own symptom, and why both of those will fail.**',
  '⚠ **Why neither party can see it: each of them can see only their own end.** The clinicians see two columns of results that do not match; the afternoon bench sees a repeat log. **Neither has any reason to look at the other\'s evidence, and the thing in the middle is invisible from both ends.**',
  '**The test that proves there is one cause and not two.** Remove the candidate cause and **both** symptoms must stop. _One word beside that figure_ ends the inconsistency **and** the repeat load. ⚠ If removing it ends only one of the two, you have two causes and you are mediating the wrong thing.',
  '⚠ **A remedy aimed at a symptom costs money and leaves the cause — and a successful one hides it.** Four hours a month since September, to make one symptom legible. **The better of the two local remedies is the more dangerous**, because it buys patience with the cause.',
  '**And the dangerous question to watch for.** _Which shift should we rely on?_ The answer that sounds helpful — _rely on the morning bench_ — makes it worse, because the morning bench is the one applying the looser standard. ⚠ **A question asked from inside one symptom cannot be answered from inside the other.**',
  '**What makes this different from the two earlier mediations.** In **4.7** both parties had overclaimed. In **6.7** the record was silent. **Here both parties are reading one document correctly, and the document is defective** — so there is nothing to decide and nobody to correct.',
  '**And the settling thing, as always, already exists.** One word, written by whoever wrote the figure, and initialled. ⚠ In five months neither party asked for it, **because neither party knew there was a word missing** — which is what one cause and two symptoms looks like from inside: **two people working hard at two different problems that are one problem.**',
  '**Pronunciation.** 🔊 **Track 7.14** The **two symptoms are read at the same speed and with the same weight**, one after the other, and the cause is read **slower than both**. ⚠ A mediator who reads one complaint faster has taken a side before naming the cause, and both parties hear it.',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has one of the pairs below and does **not** show it. A reads both complaints and the record once. B makes the three moves: quotes both symptoms, names the one cause with the removal test, and says what each party is doing and why both will fail. A says whether B took a side. Change roles with the other pair.'));
out.push(table(['Pair A – the ward', 'Pair B – the magazine'], [
  ['_From the day staff: "the night shift leave the lot box empty and we are the ones the auditor asks."_', '_From the printer: "the contents page never matches the copy and we set the page twice."_'],
  ['_From the night staff: "the day staff change the sheets after we have signed them, so we are signing for work we did not do."_', '_From two contributors: "our paragraphs are cut and the ones kept are not the ones we worked on."_'],
  ['_The record: the October form says_ lot number — where applicable_, and names no author._', '_The record: the style sheet says_ open with the subject of the paragraph_, and names no author._'],
  ['_Already in existence: the signature column, with times, on all thirty-one sheets._', '_Already in existence: the contents lines for six issues, beside the paragraphs they describe._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the two symptoms, the one cause, and the two failing remedies for each pair. Then the count: **about half the mediators name two causes rather than one** and have to be sent back to the removal test. ⚠ And in **both** pairs the cause is a phrase in a document with **no author** — _where applicable_, _open with the subject_ — which is Unit 6.4 arriving inside Unit 7.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **your** recurring fault and find the **second** symptom: who else is complaining about something that your mechanism also explains? Write both complaints in their own words, then the cause, then both remedies. ⚠ If you cannot find a second symptom, say so — and then say what your mechanism predicts somebody **else** should be complaining about, which is the same exercise done forwards.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what the two complaints had in common and what each party was doing about it:  _Two complaints, one instrument, written on the same day by people who have not spoken to each other. Omar said one is about the results and one is about the workload, and they are not the same complaint at all — and they are not the same complaint and they are the same cause, which is the task of the cycle. The record is twelve words: stated range nought point three, reading nought point four, signed by the morning bench. And the missing word is the cause of both complaints, because the figure has nothing beside it: the morning bench reads it as a guide so nought point four is reported, and the afternoon bench reads it as a limit so the same reading is repeated. Which gives the clinicians an inconsistency and the afternoon bench a workload — one cause, two symptoms, and neither party can see the other\'s. Hiba asked why not, and the answer is that each of them can see only their own end: the clinicians see two columns of results that do not match and the afternoon bench sees a repeat log, and neither has any reason to look at the other\'s evidence. Then the three moves, which are not the moves of 6.7: quote both symptoms in their own words; name the one cause and apply the removal test in the sentence; and show what each party is already doing about their own symptom and why both of those will fail. Yara said what her bench is doing — writing "repeated" in the comment column, about four hours a month since September — and what it does to the cause is nothing: it makes their end visible, and the clinicians will still have two columns that do not match. And the clinicians\' own remedy fails in the same way, because the answer to "which shift should we rely on" would be the morning bench, which is the one applying the looser standard. Both remedies treat a symptom, and the better one is the more dangerous._'));
out.push(p('**Listener task:** write the second symptom of your own fault, or what your mechanism says somebody else should be complaining about.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 7)', 7));
out.push(p('You are going to read four accounts of a recurring fault at work. For questions **1–6**, choose from the people **A–D**. The people may be chosen more than once.'));
out.push(box(null, [
  '**FOUR PEOPLE ON SOMETHING THAT KEPT HAPPENING**',
  '**A**  For nine months I ran a double-check on one night in four, because five of our seven errors had happened on a fourth consecutive night. I still think the fourth night matters, but I have had to be careful about how I say it. There are about thirty fourth nights in the period I counted and twenty-five of them produced nothing at all, so a fourth night plainly does not produce an error by itself; it is the state of affairs in which our checking arrangement fails. The uncomfortable part is the other end of it. Nine months of a double-check, and I cannot tell you what it has prevented. Nothing has happened, and nothing happening is not a figure. I have run the thing longest and I am the person with no evidence for it.',
  '**B**  My explanation for seven months was four words long and had no verb in it: _it is the model._ When I was finally made to ask how, four times over, I got to a brush bench and a different pair of hands on every shift — and the model turned out not to appear anywhere in the chain. It is the thing all four steps happen to. I have written the chain out and sent it, and I have put one sentence at the end that I was advised to put in: if the sealing on that batch was done by one person, my second step is wrong and everything after it is wrong with it, and I shall withdraw the whole thing in writing to the distributor and to the eleven customers.',
  '**C**  The sentence we have used at every quarterly meeting for two years is true, which is exactly why it has been so expensive. A style sheet was issued, it was issued well, and it was aimed at the thing that sentence predicts. Fifty-two paragraphs out of sixty-one were loaded at the wrong end before it went out and fifty-two of sixty-one are now. I am not saying the style sheet was badly written — I wrote part of it — and I am not asking for it to be withdrawn. I am saying that it cost us three editorial afternoons and the figure it was aimed at is the same figure.',
  '**D**  A passenger complained in August, we reprinted the sheet in September, and in October forty-one of sixty-two services still left five minutes late or worse. I now understand that the complaint explained why we reprinted in September and nothing whatever about the departures, and that if nobody had complained in August somebody would have complained in November. What I did not expect was how easy the checking turned out to be. The figure I needed was in the service book, which has been in the office for eleven years and which I opened for the first time in October.',
  '',
  '**Which person…**',
  '**1**  describes acting on something that explained **when** a thing happened and not **why**?   _______',
  '**2**  says that the explanation they had been offering did not appear in the chain at all?   _______',
  '**3**  mentions a state of affairs that is present on many occasions when nothing goes wrong?   _______',
  '**4**  gives the cost of acting on an explanation and says the figure was unchanged afterwards?   _______',
  '**5**  admits to having no figure at all for a measure they introduced themselves?   _______',
  '**6**  states in advance what would make them abandon their explanation in writing?   _______',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of your own two symptoms (80 words or more).'));
out.push(p('**ONE CAUSE, TWO SYMPTOMS** · ______________   **What ______________ says.** "______________"   **What ______________ says.** "______________"   **The one cause.** ______________. **Remove it — ______________ — and both complaints stop.**   **Why neither of them can see it.** ______________ sees ______________. ______________ sees ______________. **The thing in the middle is invisible from both ends.**   **What each of them is doing about it, and why both will fail.** ______________ is ______________, which costs ______________ and does ______________ to the cause. ______________ is asking ______________, and the answer to that would ______________.   **The one thing that would settle it**, which already exists: ______________.   **And what I am not doing.** Deciding which of them is right. ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both symptoms quoted in the parties\' own words',
  'One cause, with the removal test applied to **both** symptoms',
  'Each party\'s own remedy, with why it fails',
  'The settling thing, and whether it already exists',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **The fourth essay of the course.** The shape is Unit 3 and the openings are Unit 5. **What Unit 7 adds is one thing only: a cause with a share on it, and a sentence saying what you are not claiming.** An essay that blames people or systems wholesale has made the mistake the unit is about.',
  'In your English class you have been talking about why the same things keep going wrong at work. Your teacher has asked you to write an essay.',
  '_"When something keeps going wrong, the people involved are usually the problem."_ Do you agree?',
  'Write an essay using **all the notes** and giving **reasons** for your point of view. Write **180–220 words**.',
  'Notes — write about: **1** training   **2** the way the work is organised   **3** ______________ _(your own idea)_',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 7 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  The bead is thin, ___ in turn leaves the clips carrying the load.   a) which   b) that   c) what',
  '2  The clips carry the load where the bead is thin, with the result ___ one corner lifts.   a) which   b) that   c) of which',
  '3  Five of the seven errors are ___ a fourth consecutive night.   a) attributed   b) attributing   c) attributable to',
  '4  The fourth night ___ for about five of the seven.   a) accounts   b) counts   c) attributes',
  '5  A condition is the state of affairs ___ which the cause does its work.   a) on   b) under   c) in',
  '6  A bed moved at three in the morning is a ___: it explains the timing and not the fact.   a) cause   b) condition   c) trigger',
  '7  Which ___ that the afternoon runs will be repeated more often than the morning ones.   a) predicts   b) prediction   c) predicating',
  '8  The ___ of the fault is the brush bench and not the model.   a) originate   b) origin   c) original',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 3 style – multiple matching).** 🔊 **Track 7.15** You will hear five people talking about an explanation they had been using at work. For questions **1–5**, choose from the list **A–H** what each speaker says. There are **three** letters you will not need.'));
[
  '**A**  I had been treating a trigger as if it were the cause.',
  '**B**  I found the figure I needed in a document I already had.',
  '**C**  I could not say what would show my explanation to be wrong.',
  '**D**  I had been blaming the people and not the form they work from.',
  '**E**  My explanation fitted every outcome equally well.',
  '**F**  The condition was present on many occasions when nothing went wrong.',
  '**G**  I had two separate explanations and had been calling them one.',
  '**H**  Nobody had ever added up what acting on it had cost.',
].forEach(t => out.push(p(t, { indent: 200, after: 30 })));
out.push(p('**Speaker 1** ______   **Speaker 2** ______   **Speaker 3** ______   **Speaker 4** ______   **Speaker 5** ______', { indent: 200, bold: true, after: 60 }));
out.push(dlg('Track 7.15  Audio script (read after the check)', [
  ['Speaker 1', 'The rule we made was about trolleys being moved during a round, because that is what had happened the night of the error — at about three in the morning, as it turned out. And the next one was nothing to do with a trolley; it was a telephone call. I had spent a fortnight on a rule about the thing that happened to be standing nearest to the event in time, and there is no end to those: next time it will be a door, or somebody at the desk.'],
  ['Speaker 2', 'What I expected was weeks of collecting. The mechanism said that one bench would be repeating runs far more often than the other, so I went to find out, and the repeat log was sitting at the bench where it has always been. Eleven to one, in five months. It had been within reach the whole time and I had never had a reason to open it, which is the part I keep thinking about.'],
  ['Speaker 3', 'I was perfectly sure the fourth night was doing it, and in a sense it is. But I counted the fourth nights, which I had never done: about thirty of them, and twenty-five produced nothing at all. So it is not making errors happen — it is the state of affairs in which our own checking gives way, and that is a different claim and a much smaller one.'],
  ['Speaker 4', 'Two years of training, four afternoons a year, eleven of us. And the form we work from has no field for the one thing the whole argument is about, so the promise goes into a box with four thousand entries in it and nobody can search for it afterwards. We had been teaching people to speak more carefully into a form that cannot hold what they say.'],
  ['Speaker 5', 'Nobody had ever put a figure on it, which is what surprised me when I did. Three editorial afternoons to produce the style sheet and circulate it, and the proportion it was aimed at is exactly what it was before — fifty-two out of sixty-one then, and fifty-two out of sixty-one now. I am not saying it was a bad document. I am saying that was the bill and nobody had ever written it down.'],
]));
out.push(p('**C  Writing.** Write the mechanism page (180+ words): the symptom sentence conceded, the bill, the six numbered sentences with a prediction fifth and a non-prediction sixth, and the costed alternative.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 7)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ ask _how?_ four times and name every step of a chain',
  '☐ use _which in turn_ and _with the result that_, and distrust _and so_',
  '☐ put a share on a cause, as a count with its denominator',
  '☐ name the thing that would show my explanation wrong, before anybody asks',
  '☐ tell a cause from a condition and from a trigger, and say which I would fix, manage and ignore',
  '☐ write a mechanism in six sentences, with a prediction and a non-prediction',
  '☐ replace a symptom sentence with a mechanism, and give the bill',
  '☐ show two parties that their two complaints are one cause and two symptoms',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 8 – REVIEWS', [
  'Unit 7 explained why something happens. **Unit 8** judges it: a verdict in one sentence, and who the verdict is for.',
  '**8.3 is the hardest cycle in the book so far** — writing about what is wrong with something you recommend. **8.4 compares without ranking**, which is the one thing a review of two things almost never does. And **8.7 mediates between two reviews of the same thing that disagree**, with **Writing Part 2 (a review)** in it.',
  '⚠ **Bring two things you have recommended to somebody** — a tool, a shop, a method, a book, a way of doing something at work. **One that worked for them and one that did not.** 8.1 and 8.2 are built on the pair, and the one that did not work is the more useful of the two.',
  '**And keep the slip in band 2.** From Unit 7 onwards you rank the slip you were given, and from Unit 8 the ranking goes on the board: **the class will see which three criteria the room found most useful.**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 1 · Syria Edition · Unit 7 · Student\'s Book');
