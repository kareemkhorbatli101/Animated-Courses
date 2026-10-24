// Proactive Business English B2 · Syria Edition · Book 2 · Unit 15 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a reasoned refusal · what has changed since the no · a second letter · the interval before writing again · a narrower request · an ask answerable with a yes · to concede a refusal completely · the face-saving formula · on the new information · a letter you decide not to send · a file note instead of a letter · a standing refusal · a soft no · a hard no · to reopen a question · a question that was never asked · to take a no at its word · a refusal on the material available · the ground for writing again · a changed fact · to put a smaller case · the quarter instead of the year · to let a refusal stand · an unanswered letter · to write without reproach · a reminder that is not a reproach · the sentence that lets somebody change their mind · a refusal you did not test · a no that was a not yet · to date a refusal · the second approach · a refusal';
const COLLOC = 'to stand by a refusal · to date a change · to put a case again · to leave an interval · to withdraw a request · to narrow an ask · to read a no closely · to send a reminder';
const BACK_AT_B2 = 'to decline · reminder · to be persuaded';

out.push(h1('Unit 15  Writing to Somebody Who Has Already Said No'));
out.push(p('_Proactive Business English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**15.1**  find what has changed since the no, and accept _nothing_ as an answer',
  '**15.2**  concede the refusal completely, and without irony',
  '**15.3**  ask for something narrower, that can be answered with a yes',
  '**15.4**  let somebody change their mind without losing',
  '**15.5**  decide not to write, and write the file note instead',
  '**15.6**  judge the interval, and say why you waited',
  '**15.7**  Review & Mediate: the no that was never a no, and nobody asked',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ Thirty-two of forty, and four months of silence', [
  '⚠ **On 1 July the bank\'s credit committee granted a receivables facility of thirty-two million and declined the balance of eight.** **The reason given was one sentence: the lengthening of the collection period, which in the application ran 46, 51 and 58 days over three years.**',
  '⚠ **Nour drafted a reply on 8 July and did not send it, because the reply said nothing that was not already in the application.** **She has not written since.**',
  '⚠ **On 5 November two facts exist that did not exist in July.** **The two export accounts opened in 2024 went on to documentary credit from 1 October, so the sixty-day exposure the committee asked about is gone on both.** ⚠ **And the October debtor days are forty-nine against the fifty-eight in the application.**',
  '⚠ **This unit is the second letter.** **It is the hardest kind of business writing there is, and the reason is not the refusal** — ⚠ **it is that the writer has to concede the first no completely, in writing, before asking for anything, and most people cannot do it without irony getting into the sentence.**',
], C.lyellow, C.orange));

// ======================= CYCLE 15.1 =======================
out.push(pb());
out.push(h2('15.1  What has changed since the no'));
out.push(p('**Function:** finding the ground for writing again   ·   **Grammar:** _two things have changed since · nothing has changed_   ·   **Pronunciation:** a changed fact read as a fact'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a refusal your work has received. ⚠ Then say what has changed since it, and whether anything has.'));
out.push(p('**b**  Which is a ground for writing again? _we still think the case is a good one · the sixty-day exposure you asked about is gone on both accounts from 1 October_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why did Nour not send the July letter?   **A** she was too busy   **B** because it said nothing that was not already in the application   **C** Mr Ayoub stopped her'));
out.push(p('**b**  Listen again. **1** What are the two changed facts? **2** What does Nadia say is the only acceptable reason for writing to somebody who has refused you?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.1  "Nothing had changed, so there was nothing to write"', [
  ['Nadia', 'You drafted a reply in July. What happened to it?'],
  ['Nour', '⚠ **I read it the next morning and it said nothing that was not already in the application.** **It was four paragraphs of the same case in a more disappointed voice.**'],
  ['Nadia', '⚠ **Then you were right not to send it, and that is the whole of this unit.**'],
  ['Nour', 'It felt like doing nothing.'],
  ['Nadia', '⚠ **It was doing nothing, and doing nothing was correct.** ⚠ **A committee that has refused you on the material in front of it will refuse you again on the same material, faster, and with less patience.** ⚠ **The second refusal costs you something the first one did not.**'],
  ['Nour', 'What does it cost?'],
  ['Nadia', '⚠ **The next question you ask them.** ⚠ **A file with two refusals in it is read differently from a file with one.**'],
  ['Nour', 'And now there are two things.'],
  ['Nadia', '⚠ **Say them as facts, with dates.**'],
  ['Nour', 'The two export accounts went on to documentary credit from 1 October, so the sixty-day exposure is gone on both. And the October debtor days are forty-nine against fifty-eight in the application.'],
  ['Nadia', '⚠ **Both of those are checkable by somebody who has never spoken to you, which is what the committee is.** ⚠ **And both of them are the thing they actually asked about** — **not a thing we think is important.**'],
  ['Nour', 'Is two enough?'],
  ['Nadia', '⚠ **Two is better than six.** ⚠ **A letter with six changed facts in it is a letter that has gone looking** — **and a committee can tell the difference between what has changed and what has been assembled.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The ground for writing again**',
  table(['', 'Not a ground', 'A ground'], [
    ['**the case**', '⚠ *we still believe the case is a good one*', '⚠ **nothing** — **the case was the case in July and they read it**'],
    ['⚠ **a changed fact**', '⚠ *the position has improved*', '⚠ *the two export accounts went on to documentary credit from 1 October* — **a date and a thing**'],
    ['⚠ **whose subject**', '**a thing you think matters**', '⚠ **the thing THEY asked about** — **the sixty-day exposure, because that is the sentence in their letter**'],
    ['⚠ **how many**', '⚠ **six** — **a letter that has gone looking**', '⚠ **two** — **and a committee can tell the difference**'],
  ], [1.3, 3.3, 4.2]),
  '⚠ **The only ground for writing to somebody who has refused you is that something has changed** — **and *we still think we are right* is not something changing, it is the same letter in a more disappointed voice.**',
  '⚠ **A second refusal costs more than the first.** ⚠ **A committee that refused you on the material in front of it will refuse you again on the same material, faster** — **and a file with two refusals in it is read differently from a file with one, for years.**',
  '⚠ **The changed fact must be the thing THEY named.** ⚠ **Their letter said one sentence about the collection period, so the letter back is about the collection period** — **and a change in something else, however good, is a change in a subject they did not raise.**',
  '⚠ **Two facts, not six.** ⚠ **A letter carrying six changed facts has gone looking for them**, **and the reader can tell** — **because six facts cannot all be the kind that arrive on their own.**',
  '⚠ **And accept *nothing* as the answer when it is the answer.** ⚠ **Not writing is a decision and it should be recorded as one** — **see 15.5, where the file note is the whole of the output.**',
  '**Practise:** Take a refusal your work has had. List what has changed since it. Then cross out everything that is not a fact with a date.',
  '**Useful phrases:**  nothing had changed, so there was nothing to write  ·  the thing they asked about  ·  two is better than six  ·  checkable by somebody who has never spoken to you  ·  the second refusal costs more',
  '**Pronunciation – a changed fact.** 🔊 **Track 15.2** Listen twice. ⚠ **The first says *the October debtor days are forty-nine against fifty-eight in the application* flatly.** ⚠ **The second rises on *forty-nine*.** **Flat, it is a figure; risen, it is a small triumph, and a committee reading a triumph looks for what is being left out.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A wants to write again; B tests the ground.'));
out.push(dlg(null, [
  ['A', 'I want to write to them again about __________.'],
  ['B', '⚠ **What has changed since they refused?**'],
  ['A', '__________.'],
  ['B', '⚠ **Is that a fact with a date, or a view?**'],
  ['A', '__________.'],
  ['B', '⚠ **And is it the thing they asked about?**'],
  ['A', '__________.'],
  ['B', '⚠ **How many changed facts have you got?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then take the best two and leave the rest out.**'],
]));
out.push(table(['Role card 1 — the same case in a worse voice', 'Role card 2 — six facts instead of two'], [[
  '⚠ **A wants to send a letter saying the case is still a good one and asking them to look again.** ⚠ **B asks what is in it that was not in the application, and the answer is nothing but the tone.** ⚠ **B\'s point: the second refusal costs the next question** — **a committee reading the same case twice will refuse faster, and the file keeps both refusals.**',
  '⚠ **A has found six things that have changed and wants all six in the letter.** ⚠ **B asks which of the six the committee actually asked about, and only two are.** ⚠ **B\'s point: six changed facts cannot all have arrived on their own, so a letter with six has gone looking** — **and a reader who sees that discounts the two that are real along with the four that are not.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the two changed facts, with their dates. ⚠ Then say which sentence in the refusal letter they answer, and why that matters.'));
out.push(PHRASE_CARD(['what has changed?', 'a fact with a date', 'the thing they asked about', 'two, not six', 'the second refusal costs more']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** refusals your work has received. For each, list what has changed.'));
out.push(table(['The refusal, and its date', 'The reason they gave', 'What has changed, with dates', 'Is it their subject?'], [['', '', '', ''], ['', '', '', '']], [2.2, 2.2, 2.8, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _They refused on _______. The reason was _______. What has changed is _______, on _______. It _______ the thing they asked about._'));
out.push(p('**Listener task:** count how many of the refusals had nothing changed since. ⚠ Then ask how many of those had been written to again anyway, and what happened.'));
out.push(p('**Board clinic:** your teacher writes four grounds on the board — look for one that is a view and one that answers a question nobody asked. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE FACILITY: IS THERE A LETTER? 6 November. N. Mansour. For Mr Ayoub.**',
  '⚠ **The committee declined eight million on 1 July for one stated reason: the lengthening of the collection period, 46, 51 and 58 days over three years.** **Everything below is tested against that sentence and nothing else.**',
  table(['What has changed since 1 July', 'Date', 'Their subject?'], [
    ['⚠ **the two export accounts of 2024 are on documentary credit** — **the sixty-day exposure is gone on both**', '**1 October**', '⚠ **yes** — **this is the exposure their sentence is about**'],
    ['⚠ **October debtor days are 49, against 58 in the application**', '**31 October**', '⚠ **yes** — **and it is the same measure, not a different one**'],
    ['**the Dallal agreement commenced and three months are paid at thirty days**', '**1 August**', '⚠ **partly** — **it improves the number above and is not separately interesting**'],
    ['**the acceptance page agreed with Beirut**', '**24 October**', '⚠ **no** — **it reduces a different risk and they did not ask about it**'],
    ['**the obligations register exists**', '**23 September**', '⚠ **no**'],
    ['**turnover to October is ahead of the forecast by about four per cent**', '**31 October**', '⚠ **no** — **they did not refuse on turnover and they never mentioned it**'],
  ], [4.8, 1.2, 3]),
  '⚠ **Six things have changed and four of them go out of the letter.** **Two of the four are better news than either of the two that stay in.** ⚠ **They go out because they answer questions the committee did not ask**, **and a letter that answers questions nobody asked reads as a letter looking for a reason to exist.**',
  '⚠ **The July draft, for the record, is attached and was never sent.** **It said that the case was a good one and asked them to look again.** ⚠ **It contained nothing that was not in the application**, **and the reason not to have sent it is not politeness: a second refusal on the same material would have cost us the next question we ask that committee.**',
  '⚠ **So: yes, there is a letter, and it is a short one.** ⚠ **Two facts, both dated, both on their own subject, and an ask that is smaller than the one they refused.** **Four months of silence is part of the letter and I will say so in it.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many changes are there, how many go into the letter, and on what ground are the others left out?'));
out.push(item('2', 'What reason does the writer give for not having sent the July draft?'));
out.push(item('3', 'Why does she say the four months of silence is part of the letter?'));
out.push(box('Writer\'s box', [
  '**The note that decides whether to write — five parts:** ⚠ **their stated reason, quoted, in the first paragraph** → ⚠ **a table of *what has changed · date · their subject?*** → **the count, and what goes out** → ⚠ **the draft you did not send, and why** → **and the answer, in one line.**',
  '⚠ **Quote their reason first and say that everything is tested against it.** ⚠ *Everything below is tested against that sentence and nothing else.* **Ten words** — **and they are what stops the note becoming a list of good news.**',
  '⚠ **Give *their subject?* its own column and answer it for every row.** ⚠ **A change that is not on their subject is not a ground, however good it is** — **and the column is what makes that visible instead of arguable.**',
  '⚠ **Say how many good things you are leaving out.** ⚠ **Two of the four that go out are better news than either of the two that stay in.** **A reader who sees that knows the selection was a decision and not an inventory.**',
  '⚠ **Attach the letter you did not send and say why.** ⚠ **It contained nothing that was not in the application** — **and the cost of having sent it would have been the next question, not the eight million.**',
  '⚠ **And treat the silence as content.** ⚠ **Four months is a fact about the letter and the reader will notice it** — **so it is explained in the letter rather than left to be interpreted.** **See 15.6.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note that decides whether to write again (**80 words or more**). Use the frame.'));
out.push(p('**______________: IS THERE A LETTER? ______________. ______________.**   ⚠ **______________ declined ______________ on ______________ for one stated reason: ______________.** **Everything below is tested against that sentence and nothing else.**   **What has changed** | **Date** | **Their subject?**   ⚠ **______________** | **______________** | ⚠ **yes** — **______________**   ⚠ **______________** | **______________** | ⚠ **yes**   **______________** | **______________** | ⚠ **no** — **______________**   **______________** | **______________** | ⚠ **no**   ⚠ **______________ things have changed and ______________ of them go out of the letter.** **______________ of those are better news than ______________.** ⚠ **They go out because ______________.**   ⚠ **The ______________ draft is attached and was never sent. It said ______________.** ⚠ **The reason not to have sent it is not politeness: ______________.**   ⚠ **So: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer** — time, a figure, or a relationship.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Their stated reason quoted in the first paragraph', ''],
  ['*Their subject?* answered for every row', ''],
  ['How many good things are being left out', ''],
  ['The unsent draft, and the real cost of having sent it', ''],
  ['The answer in one line', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *their subject?* column. ⚠ The class says of each *no* whether the writer looks sorry to be leaving it out.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a refusal your work has received (**200 to 240 words**). Say what was refused, the reason given, what has changed since, which of those changes is on their subject, and whether there is a letter.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _is that fact on their subject?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had the firm written again with nothing changed? Usually two of three — ⚠ **and in those two the second answer came faster and shorter than the first, which is the cost the cycle names.**'));
out.push(box('Homework', ['Write your final text. Then take one refusal your work has had, find the one sentence in it that gives the reason, and list only the facts that have changed about that sentence (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 15.2 =======================
out.push(pb());
out.push(h2('15.2  Conceding the no, completely'));
out.push(p('**Function:** conceding a refusal without irony   ·   **Grammar:** _you were right to refuse on what you had_   ·   **Pronunciation:** a concession with no edge in it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a time somebody refused you and was right to. ⚠ Then say whether you ever told them so.'));
out.push(p('**b**  Which has no edge in it? _we understand that you had to be cautious · you were right to refuse on the figures you had, and I would have refused them myself_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is wrong with Nour\'s first concession?   **A** it is too short   **B** _we understand you had to be cautious_ excuses them instead of agreeing with them, and there is an edge in it   **C** it concedes too much'));
out.push(p('**b**  Listen again. **1** What does Nadia say the test of a concession is? **2** What is the strongest form of it, and why is it hard to write?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.3  "You were right, and I would have refused it myself"', [
  ['Nour', 'I have written: we understand that you had to be cautious on the figures available in June.'],
  ['Nadia', '⚠ **Read it again and listen for the word *had*.**'],
  ['Nour', '…It says they were forced.'],
  ['Nadia', '⚠ **It says they were forced, which means they did not choose, which means they were not right.** ⚠ **You have excused them, and excusing somebody is not agreeing with them** — **it is agreeing with them while keeping something back.**'],
  ['Nour', 'What is the test?'],
  ['Nadia', '⚠ **Could they read it aloud to the person who wrote the refusal, without wincing?** ⚠ **_You had to be cautious_ fails that. _You were right_ passes it.**'],
  ['Nour', 'So: you were right to refuse on the figures you had.'],
  ['Nadia', '⚠ **Better. And there is a stronger form, and it is the one nobody writes.**'],
  ['Nour', 'Which is?'],
  ['Nadia', '⚠ *And I would have refused them myself.*'],
  ['Nour', 'That is a lot to say.'],
  ['Nadia', '⚠ **It is the whole letter, and it costs nothing, because it is true.** ⚠ **A collection period that goes 46, 51, 58 and is not explained is a series I would have refused, and so would you.**'],
  ['Nour', 'It feels like giving up the argument.'],
  ['Nadia', '⚠ **It is giving up an argument you lost in July and cannot win.** ⚠ **And what it buys is the only thing you need, which is that the reader starts the second paragraph without a defence prepared.** **Every sentence after a real concession is read differently from every sentence after a qualified one.**'],
  ['Nour', 'And no *however*.'],
  ['Nadia', '⚠ **No *however*, no *that said*, and no *nevertheless*.** ⚠ **A concession with a hinge word after it was not a concession, it was a run-up.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Conceding a refusal completely**',
  table(['', 'Not', 'Write'], [
    ['**the form**', '⚠ *we understand you had to be cautious* — **excusing, which keeps something back**', '⚠ *you were right to refuse on the figures you had*'],
    ['⚠ **the strong form**', '**(nobody writes it)**', '⚠ *and I would have refused them myself* — **if it is true, and here it is**'],
    ['⚠ **the test**', '**does it sound polite?**', '⚠ **could they read it aloud to the person who wrote the refusal, without wincing?**'],
    ['⚠ **what follows it**', '⚠ *however · that said · nevertheless*', '⚠ **a full stop, and then a fact** — **a hinge word turns a concession into a run-up**'],
  ], [1.5, 3.3, 4]),
  '⚠ **Excusing somebody is not agreeing with them.** ⚠ *You had to be cautious* **says they were forced, which says they did not choose, which says they were not right** — **and the reader hears all three.**',
  '⚠ **The test is whether they could read it aloud to the person who signed the refusal.** ⚠ **A concession that would make that person wince is a concession with an edge in it**, **and the edge is the only part the committee will remember.**',
  '⚠ **The strong form is the one nobody writes:** ⚠ *and I would have refused them myself.* **It costs nothing when it is true, and it is usually true** — **and it is the sentence that makes the rest of the letter readable.**',
  '⚠ **Nothing follows a concession but a full stop.** ⚠ **No *however*, no *that said*, no *nevertheless*** — **because a hinge word after a concession tells the reader the concession was a run-up, and they will reread it as one.**',
  '⚠ **And what the concession buys is not goodwill.** ⚠ **It is that the reader begins the next paragraph with no defence prepared** — **which is worth more than any argument the next paragraph could contain.**',
  '**Practise:** Take a refusal you received and were right to receive. Write the concession in its strong form, with nothing after it but a full stop.',
  '**Useful phrases:**  you were right to refuse  ·  on the figures you had  ·  I would have refused them myself  ·  without wincing  ·  no however',
  '**Pronunciation – a concession with no edge.** 🔊 **Track 15.4** Listen twice. ⚠ **The first says *you were right to refuse on the figures you had* evenly and stops.** ⚠ **The second stresses *you had*.** **Even, it is agreement; stressed on *you had*, it means *and you have better figures now, so you were only right then* — which is an argument wearing a concession.** Say it four times, even.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A concedes; B listens for the edge.'));
out.push(dlg(null, [
  ['A', 'We understand that you __________.'],
  ['B', '⚠ **That is excusing us, not agreeing with us. Try again.**'],
  ['A', 'You were right to __________.'],
  ['B', '⚠ **Better. Could I read that to the person who signed it?**'],
  ['A', '__________.'],
  ['B', '⚠ **And is there a stronger form?**'],
  ['A', '⚠ **And I would have __________ myself.**'],
  ['B', '⚠ **Is that true?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then say it, and put a full stop after it.**'],
]));
out.push(table(['Role card 1 — the excuse that reads as a reproach', 'Role card 2 — the hinge word'], [[
  '⚠ **A writes *we understand you had to be cautious* and is sure it is generous.** ⚠ **B reads it back with the stress on *had* and asks what *had to* means.** ⚠ **B\'s point: it says they were forced, so they did not choose, so they were not right** — **and the reader hears the sequence even when the writer did not intend it.**',
  '⚠ **A has a good concession and follows it with *however*.** ⚠ **B asks A to read the paragraph aloud and stop at the *however*, then asks what the reader now thinks the first sentence was for.** ⚠ **B\'s point: a hinge word tells the reader the concession was a run-up, and they reread it as one** — **so the full stop is doing more work than any word could.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the concession in its strong form. ⚠ Then check two things: that nothing follows it but a full stop, and that it could be read aloud to the person who signed the refusal.'));
out.push(PHRASE_CARD(['you were right', 'on what you had', 'I would have refused it myself', 'without wincing', 'no hinge word']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** refusals you received and were right to receive. Write each concession twice.'));
out.push(table(['The refusal', 'The weak concession', 'The strong one', 'Is the strong one true?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2, 2.4, 2.8, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _They refused _______. The weak version is _______. The strong version is: you were right to _______, and I would have _______ myself. It is _______, so I would _______ write it._'));
out.push(p('**Listener task:** count how many of the strong versions were true. ⚠ Then ask how many of the writers had ever said so to the person who refused them, and expect none.'));
out.push(p('**Board clinic:** your teacher writes four concessions on the board — find the one with *had to* in it and the one with a hinge word after it. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two openings, and answer the questions.'));
out.push(box(null, [
  '**TWO OPENINGS FOR THE SAME LETTER. 8 November. N. Mansour. For Mr Ayoub, before I send it.**',
  '⚠ **Version A, which I wrote first:**',
  '_Dear Sirs — We were of course disappointed by the Committee\'s decision of 1 July, though we understand that the Committee had to be cautious on the information available at the time. We remain of the view that the facility applied for was justified. However, two matters have since changed and we respectfully invite the Committee to look again._',
  '⚠ **Version B, which is the one going:**',
  '_Dear Sirs — You were right to decline eight million on 1 July. A collection period running 46, 51 and 58 days, with no explanation attached to the last figure, is a series I would have declined myself._',
  '_Two things have changed since, and this letter is about them and nothing else._',
  '⚠ **What is wrong with A, in four places.** ⚠ **_Disappointed_ is a sentence about us. _Had to be cautious_ excuses the Committee instead of agreeing with it, and so implies they were not right. _We remain of the view that the facility was justified_ reopens the refusal, which is the one thing we are not doing. And _however_ announces that everything before it was a run-up.**',
  '⚠ **What B does.** **It concedes the refusal in nine words and then concedes it again, harder, in a sentence that costs nothing because it is true.** ⚠ **Then it stops.** **The second paragraph is seventeen words and it tells the reader exactly how long the letter is and what it is about.**',
  '⚠ **The sentence I argued with myself about is *I would have declined myself*.** **It is the most useful sentence in the letter and it is also the only one that could not be written by somebody who had not read the series.** ⚠ **A reader who has refused you can tell the difference between a writer agreeing and a writer agreeing out of technique**, **and the difference is whether the agreement contains a figure.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What are the four faults in version A?'));
out.push(item('2', 'How long is version B\'s second paragraph, and what does it tell the reader?'));
out.push(item('3', 'Why does the writer say *I would have declined myself* could not be written by somebody who had not read the series?'));
out.push(box('Writer\'s box', [
  '**Two openings, compared — five things to see:** ⚠ **the sentence about yourself** → ⚠ **the excuse that reads as a reproach** → ⚠ **the reopened refusal** → ⚠ **the hinge word** → **and the paragraph that says how long the letter is.**',
  '⚠ **Take out the sentence about yourself.** ⚠ *We were disappointed* **is information about the writer, and a committee has no use for it** — **and it occupies the one position in a letter where a reader is paying full attention.**',
  '⚠ **Never reopen the refusal.** ⚠ *We remain of the view that the facility was justified* **is the sentence the whole unit exists to prevent.** **It tells the reader that the concession in the first sentence was not meant**, **and after it nothing in the letter can be believed.**',
  '⚠ **Put a figure inside the concession.** ⚠ *A series running 46, 51 and 58, with no explanation attached to the last figure.* **It is the difference between agreeing and agreeing out of technique** — **and a reader who has refused you can tell, because only one of the two contains a number.**',
  '⚠ **Tell the reader how long the letter is, in the second paragraph.** ⚠ *Two things have changed since, and this letter is about them and nothing else.* **Seventeen words** — **and a reader who knows the letter is short reads all of it.**',
  '⚠ **And when you have two versions, keep both and write down what is wrong with the first.** ⚠ **Four named faults** — **because the faults in version A are the faults you will write again next year, and a list of them is worth more than the letter.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write two openings for a second letter of yours and compare them (**80 words or more**). Use the frame.'));
out.push(p('**TWO OPENINGS FOR THE SAME LETTER. ______________. ______________.**   ⚠ **Version A, which I wrote first:**   _Dear ______________ — We were of course ______________, though we understand that ______________. We remain of the view that ______________. However, ______________._   ⚠ **Version B, which is the one going:**   _Dear ______________ — You were right to ______________. ______________ is ______________ I would have ______________ myself._   _______________ have changed since, and this letter is about ______________ and nothing else._   ⚠ **What is wrong with A, in ______________ places.** ⚠ **______________. ______________. ______________. And ______________.**   ⚠ **What B does. ______________.**   ⚠ **The sentence I argued with myself about is ______________. ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['No sentence about yourself in version B', ''],
  ['The refusal conceded and not reopened', ''],
  ['A figure inside the concession', ''],
  ['Nothing after the concession but a full stop', ''],
  ['A second paragraph that says how long the letter is', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only version B\'s first two sentences. ⚠ The class listens for a hinge word and for any figure in the concession.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a refusal you received and were right to receive (**200 to 240 words**). Say what it was, why they were right, whether you ever said so, what you wrote instead, and what the strong concession would have cost you.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _is there an edge in it?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the writer concede at the time? Usually none — ⚠ **and when you ask what it would have cost, the answer is almost always *nothing*, which is the finding of the cycle: the sentence everybody withholds is the one that is free.**'));
out.push(box('Homework', ['Write your final text. Then write the strong concession for one refusal you have never conceded, and decide whether it is true (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 15.3 =======================
out.push(pb());
out.push(h2('15.3  The narrower request'));
out.push(p('**Function:** asking for something answerable with a yes   ·   **Grammar:** _we are not asking you to reconsider X; we are asking for Y_   ·   **Pronunciation:** a smaller ask read as a decision, not a retreat'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a request your work made that was refused. ⚠ Then say what the smallest version of it would have been.'));
out.push(p('**b**  Which can be answered with a yes? _we ask the Committee to reconsider the application · we are asking for four million for the quarter to 31 March_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub say about asking for the eight million again?   **A** it is too little   **B** it asks them to say they were wrong, which no committee does in four months   **C** it is the right ask'));
out.push(p('**b**  Listen again. **1** What is the narrower ask, and what are its three parts? **2** Why does Nour say the quarter rather than the year?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.5  "Four million for one quarter"', [
  ['Mr Ayoub', 'What are we asking for?'],
  ['Nour', 'The eight million. It is what we need.'],
  ['Mr Ayoub', '⚠ **Then you are asking them to say they were wrong on 1 July.** ⚠ **A committee does not do that in four months.** **It can do it in two years, with a new chairman.**'],
  ['Nour', 'So what do we ask for?'],
  ['Mr Ayoub', '⚠ **Something they can grant without reversing anything.** ⚠ **What is the smallest amount that is worth having?**'],
  ['Nour', 'Four million would carry us to the end of March.'],
  ['Mr Ayoub', '⚠ **Then ask for four, for the quarter to 31 March, reviewable in March on three months of figures.** ⚠ **Three parts, and the third is the one that makes it grantable.**'],
  ['Nour', 'Why does the review make it grantable?'],
  ['Mr Ayoub', '⚠ **Because it is not a decision about the facility, it is a decision about three months.** ⚠ **If the debtor days go back to fifty-eight in February, the thing lapses and nobody has to write a letter about it.** **A committee can say yes to something that undoes itself.**'],
  ['Nour', 'And it is half of what we asked for.'],
  ['Mr Ayoub', '⚠ **It is half for a quarter, which is an eighth.** ⚠ **And it is the only ask on the table that they can answer with one word.**'],
  ['Nour', 'Does it look like a retreat?'],
  ['Mr Ayoub', '⚠ **Only if you apologise for it.** ⚠ **Write it as a decision:** *we are not asking you to reconsider the decision of 1 July. We are asking for four million for the quarter to 31 March.* ⚠ **The first sentence is what makes the second one small** — **and a small ask with a boundary round it is not a retreat, it is a different question.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The narrower request**',
  table(['', 'The ask that cannot be granted', 'The ask that can'], [
    ['**the thing**', '⚠ **the eight million** — **which asks them to say they were wrong**', '⚠ **four million** — **the smallest amount worth having**'],
    ['⚠ **the period**', '**the facility year**', '⚠ **the quarter to 31 March** — **a decision about three months, not about the facility**'],
    ['⚠ **the review**', '**none**', '⚠ **reviewable in March on three months of figures** — **a committee can say yes to something that undoes itself**'],
    ['⚠ **the framing**', '⚠ *we ask you to reconsider*', '⚠ *we are not asking you to reconsider the decision of 1 July* — **and then the ask**'],
  ], [1.4, 3.4, 4]),
  '⚠ **A committee does not reverse itself in four months.** ⚠ **Asking for the thing that was refused is asking them to say they were wrong**, **and that is a different request from the one you think you are making.**',
  '⚠ **Find the smallest amount that is worth having, and then put a period on it.** ⚠ **Four million for one quarter is an eighth of what was refused** — **and an eighth is not a concession, it is a question they have not answered before.**',
  '⚠ **Put a review in it, and the review is what makes it grantable.** ⚠ **A thing that lapses in March needs no letter to end it** — **and a committee can say yes to something that undoes itself, where it cannot say yes to something that has to be unwound.**',
  '⚠ **Say what you are NOT asking for, first.** ⚠ *We are not asking you to reconsider the decision of 1 July.* **Fourteen words, and they are what makes the next sentence small** — **because a reader who has not been told the boundary will assume the ask is the first instalment of the old one.**',
  '⚠ **And do not apologise for the size of it.** ⚠ **A small ask written as a decision is a different question; the same ask written apologetically is a retreat** — **and the only difference is whether the writer explains why it is small.**',
  '**Practise:** Take a request of yours that was refused. Find the smallest version worth having, give it a period and a review, and write the boundary sentence first.',
  '**Useful phrases:**  the smallest amount worth having  ·  for the quarter to  ·  reviewable on three months of figures  ·  we are not asking you to reconsider  ·  something that undoes itself',
  '**Pronunciation – a small ask as a decision.** 🔊 **Track 15.6** Listen twice. ⚠ **The first says *we are asking for four million for the quarter to 31 March* flatly and stops.** ⚠ **The second trails off at the end.** **Flat and stopped, it is a request; trailing, it sounds like the beginning of a negotiation about the figure.** Say it four times, stopping hard on *March*.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the ask; B narrows it.'));
out.push(dlg(null, [
  ['A', 'We are asking for __________.'],
  ['B', '⚠ **Is that the thing they refused?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then you are asking them to say they were wrong. What is the smallest version worth having?**'],
  ['A', '__________.'],
  ['B', '⚠ **For how long?**'],
  ['A', '__________.'],
  ['B', '⚠ **And what ends it without a letter?**'],
  ['A', '__________.'],
  ['B', '⚠ **Now write the sentence that says what you are not asking for.**'],
]));
out.push(table(['Role card 1 — asking for the refused thing', 'Role card 2 — the apology that makes it a retreat'], [[
  '⚠ **A wants the whole eight million, because that is what the firm needs and the need has not changed.** ⚠ **B agrees the need has not changed and asks what granting it would require the committee to say about July.** ⚠ **B\'s point: the ask is not too large, it is addressed to the wrong question** — **and the question it asks is whether they were wrong, which no committee answers yes to in four months.**',
  '⚠ **A has the narrower ask and writes *we appreciate that even this may be more than the Committee feels able to consider*.** ⚠ **B asks what that sentence does for the reader.** ⚠ **B\'s point: it invites a smaller counter-offer, and it tells the reader the writer does not believe their own ask** — **the same four million, written as a decision, is a different document.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the narrower ask with all three parts. ⚠ Then write the boundary sentence, and say why the review is what makes the whole thing grantable.'));
out.push(PHRASE_CARD(['the smallest worth having', 'for the quarter to', 'reviewable on three months', 'not asking you to reconsider', 'it undoes itself']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** requests of yours that were refused. Narrow each.'));
out.push(table(['The refused request', 'The smallest worth having', 'The period', 'What ends it without a letter'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2.2, 2.4, 1.6, 2.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _They refused _______. The smallest version worth having is _______, for _______. It ends by _______. And the boundary sentence is: we are not asking you to _______._'));
out.push(p('**Listener task:** count how many of the narrower asks could be answered with one word. ⚠ Then ask how many had a review in them, and note that the ones without a review are the ones that still need a decision rather than an answer.'));
out.push(p('**Board clinic:** your teacher writes four asks on the board — find the one that asks them to reverse themselves and the one with an apology attached. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter, and answer the questions.'));
out.push(box(null, [
  '**Sham Trading, Mezzeh, Damascus — 14 November. The Credit Committee, through Mr S. Haddad**',
  'Dear Sirs',
  '⚠ **You were right to decline eight million on 1 July. A collection period running 46, 51 and 58 days, with no explanation attached to the last figure, is a series I would have declined myself.**',
  '⚠ **Two things have changed since, and this letter is about them and nothing else.**',
  '⚠ **First. The two export accounts opened in 2024, which pay at sixty days by agreement and are the whole of the lengthening, went on to documentary credit from 1 October. The sixty-day exposure is gone on both.**',
  '⚠ **Second. Our debtor days for October are forty-nine, against fifty-eight at the time of the application. The October ledger and the reconciliation to the bank statements are enclosed, as they were in June, on the same basis and for the same ninety-day period.**',
  '⚠ **We are not asking you to reconsider the decision of 1 July. We are asking for four million for the quarter to 31 March, reviewable in March on three months of figures.** **If the collection period has not held below fifty-two days by then, the four million lapses and nothing further is required of the Committee.**',
  '⚠ **On the four months.** **I drafted a reply in July and did not send it, because it contained nothing that was not already in the application.** ⚠ **I have written now because the October figure is the first month that is evidence rather than an intention.**',
  'Yours faithfully, **N. Mansour, Administration, for Sham Trading**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What are the three parts of the ask, and which of them ends it without a letter?'));
out.push(item('2', 'Why does the second numbered paragraph say *on the same basis and for the same ninety-day period*?'));
out.push(item('3', 'What does the last paragraph do, and why is it last rather than first?'));
out.push(box('Writer\'s box', [
  '**The second letter — six parts:** ⚠ **the concession, with a figure in it** → ⚠ **a sentence saying how long the letter is** → **the changed facts, numbered** → ⚠ **the boundary, then the ask, then what ends it** → ⚠ **the interval, explained** → **and nothing else at all.**',
  '⚠ **Open on the concession and put a figure in it.** ⚠ *A series running 46, 51 and 58, with no explanation attached to the last figure.* **It proves the writer read the thing they are conceding**, **which no amount of courtesy does.**',
  '⚠ **Number the changed facts and give each one a date.** ⚠ **Two paragraphs, two dates** — **and the first of them explains the refusal rather than disputing it:** *the two export accounts, which are the whole of the lengthening.* **Naming the cause of the problem you were refused over is the strongest thing in the letter.**',
  '⚠ **Say the basis and the period are unchanged.** ⚠ *On the same basis and for the same ninety-day period.* **A figure on a new basis is not a changed fact, it is a different measurement** — **and a committee that has to check the basis will assume it moved.**',
  '⚠ **Boundary, ask, lapse — in that order, in one paragraph.** ⚠ **The lapse sentence is the one that makes it grantable:** *if the collection period has not held below fifty-two days by then, the four million lapses and nothing further is required of the Committee.* **Twenty-four words that remove the need for anybody to write another letter.**',
  '⚠ **Explain the interval at the END and in two sentences.** ⚠ **The reader has already decided by then and the explanation is a courtesy rather than a case** — **and putting it first makes the letter about the writer.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a second letter to somebody who has refused you (**80 words or more**). Use the frame.'));
out.push(p('**______________ — ______________. ______________**   Dear ______________   ⚠ **You were right to ______________ on ______________. ______________ is ______________ I would have ______________ myself.**   ⚠ **______________ have changed since, and this letter is about them and nothing else.**   ⚠ **First. ______________, from ______________. ______________.**   ⚠ **Second. ______________, against ______________. ______________ are enclosed, on the same basis and for the same ______________.**   ⚠ **We are not asking you to ______________. We are asking for ______________ for ______________, reviewable in ______________ on ______________.** **If ______________ by then, ______________ lapses and nothing further is required of ______________.**   ⚠ **On the ______________.** **I ______________ and did not ______________, because ______________.** ⚠ **I have written now because ______________.**   Yours faithfully, **______________**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A figure inside the concession', ''],
  ['A sentence saying how long the letter is', ''],
  ['The changed facts dated, and the basis stated as unchanged', ''],
  ['Boundary, ask and lapse, in that order', ''],
  ['The interval explained at the end, in two sentences', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their ask paragraph. ⚠ The class says whether the reader could answer it with one word, and what would have to happen for it to end by itself.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the second letter for a refusal of yours (**200 to 240 words**). Concede it completely, give the changed facts with dates, make the narrow ask with its lapse, and explain the interval at the end.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _could they answer this with one word?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the ask the same as the one refused? Usually two of three — ⚠ **and that is the hardest habit in the unit to break, because the thing the firm needs has not got smaller and the writer is answering the need instead of the reader.**'));
out.push(box('Homework', ['Write your final text. Then take one refused request and write the smallest version of it worth having, with a period and a lapse (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 15.4 =======================
out.push(pb());
out.push(h2('15.4  Letting somebody change their mind'));
out.push(p('**Function:** the face-saving formula at B2   ·   **Grammar:** _on the new information · nothing in this contradicts your decision of_   ·   **Pronunciation:** a formula read as a fact, not as tact'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a time you changed your mind at work. ⚠ Then say what made it possible to say so, and who gave you that.'));
out.push(p('**b**  Which lets somebody change their mind? _we hope the Committee will now take a different view · on the new information the Committee may reach a different conclusion, and nothing in it contradicts the decision of 1 July_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say the formula has to do?   **A** flatter the reader   **B** make the new answer consistent with the old one, so that nobody has to be wrong   **C** hide the request'));
out.push(p('**b**  Listen again. **1** What is the sentence that does the work, and what does it assert? **2** What does Nadia say about the word *now*?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.7  "Nothing in this contradicts your decision"', [
  ['Nour', 'The last thing I need is the sentence that lets them say yes.'],
  ['Nadia', '⚠ **What have you got?**'],
  ['Nour', 'We hope the Committee will now take a different view.'],
  ['Nadia', '⚠ **Take out *now*.** ⚠ **_Now_ means *at last*, and *at last* is a reproach wearing a hopeful face.**'],
  ['Nour', 'Then: we hope the Committee will take a different view.'],
  ['Mr Ayoub', '⚠ **That is still asking them to take a different view, which is asking them to have been wrong.** ⚠ **The formula has to make the new answer consistent with the old one.**'],
  ['Nour', 'How can a yes be consistent with a no?'],
  ['Mr Ayoub', '⚠ **Easily, if the facts are different.** ⚠ **A committee that refused a series ending at fifty-eight and grants a series ending at forty-nine has not changed its mind about anything** — **it has applied the same test to a different number.** ⚠ **Say that in the letter and you have given them the whole of their answer.**'],
  ['Nour', 'So: on the new information the Committee may reach a different conclusion, and nothing in it contradicts the decision of 1 July.'],
  ['Mr Ayoub', '⚠ **That is the sentence.** ⚠ **And the second half is the half that does the work** — **the first half is only an invitation.**'],
  ['Nadia', '⚠ **It also happens to be true, which is why it will survive being read twice.** ⚠ **A formula that is merely tactful falls apart when somebody checks it; this one is a description of what they would actually be doing.**'],
  ['Nour', 'Should I say that we are not suggesting they were wrong?'],
  ['Mr Ayoub', '⚠ **No. Never raise the thing you are trying not to say.** ⚠ *We are not suggesting the Committee was wrong* **puts the word *wrong* in a letter that did not contain it** — **and the reader will remember the word and not the denial.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Letting somebody change their mind**',
  table(['', 'Not', 'Write'], [
    ['**the invitation**', '⚠ *we hope you will now take a different view* — *now* **means *at last***', '⚠ *on the new information you may reach a different conclusion*'],
    ['⚠ **the half that works**', '**(missing)**', '⚠ *and nothing in it contradicts your decision of 1 July*'],
    ['⚠ **the mechanism**', '**asking them to change their mind**', '⚠ **showing that the same test on different figures gives a different answer** — **so nobody has changed anything**'],
    ['⚠ **the denial**', '⚠ *we are not suggesting you were wrong*', '⚠ **nothing** — **never raise the thing you are trying not to say**'],
  ], [1.6, 3.3, 4]),
  '⚠ **A yes and a no are consistent whenever the facts are different.** ⚠ **A committee that refused a series ending at fifty-eight and grants one ending at forty-nine has applied the same test to a different number** — **and saying so gives the reader the whole of their answer, pre-written.**',
  '⚠ **The sentence has two halves and the second is the one that does the work.** ⚠ *On the new information you may reach a different conclusion* **is only an invitation.** ⚠ *And nothing in it contradicts your decision of 1 July* **is the permission.**',
  '⚠ **Delete *now*, *at last*, *finally* and *after all*.** ⚠ **Every one of them says *you should have done this before*** — **and they are the four words that get into this sentence most often, because the writer has been waiting.**',
  '⚠ **Never raise the thing you are trying not to say.** ⚠ *We are not suggesting the Committee was wrong* **introduces the word *wrong* into a letter that did not contain it**, **and the reader keeps the word and loses the denial.**',
  '⚠ **And the formula must be true, not merely tactful.** ⚠ **A tactful formula falls apart when somebody checks it; a true one is a description of what the reader would actually be doing** — **and the test is whether you could set out the reasoning on a separate page without embarrassment.**',
  '**Practise:** Take a refusal. Write the two-part sentence that lets the reader say yes, and check that the second half is true.',
  '**Useful phrases:**  on the new information  ·  nothing in it contradicts  ·  the same test on a different number  ·  take out now  ·  never raise it to deny it',
  '**Pronunciation – a formula as a fact.** 🔊 **Track 15.8** Listen twice. ⚠ **The first says *nothing in it contradicts your decision of 1 July* flatly, as a statement of fact.** ⚠ **The second slows and softens it.** **Flat, it is a description; softened, it is tact, and tact invites the reader to wonder what is being managed.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A drafts the formula; B hardens it.'));
out.push(dlg(null, [
  ['A', 'We hope you will now __________.'],
  ['B', '⚠ **Take out *now*. What does it mean?**'],
  ['A', '__________.'],
  ['B', '⚠ **And you are still asking them to change their mind. What has changed?**'],
  ['A', '__________.'],
  ['B', '⚠ **So the same test on that figure gives what answer?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then write the second half. Nothing in it contradicts what?**'],
  ['A', '__________.'],
  ['B', '⚠ **Is that true? Could you set the reasoning out on a separate page?**'],
]));
out.push(table(['Role card 1 — the word *now*', 'Role card 2 — the denial that plants the word'], [[
  '⚠ **A cannot see what is wrong with *we hope the Committee will now take a different view*, and the tone feels warm.** ⚠ **B reads it with the stress on *now* and asks what it implies about July.** ⚠ **B\'s point: *now* means *at last*, and four months of waiting have put the writer\'s feelings into a letter that has no room for them.**',
  '⚠ **A adds *we are not suggesting that the Committee was wrong* and is pleased with the delicacy.** ⚠ **B asks how many times the word *wrong* appears in the letter without that sentence, and the answer is none.** ⚠ **B\'s point: a denial plants the word** — **and the reader keeps the word and forgets the denial, which is the opposite of what A intended.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the two-part sentence. ⚠ Then underline the half that does the work, and say in one line why the two answers are consistent.'));
out.push(PHRASE_CARD(['take out now', 'on the new information', 'nothing in it contradicts', 'the same test, a different number', 'never raise it to deny it']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** refusals. Write the two-part sentence for each.'));
out.push(table(['The refusal, and the test they applied', 'What the number is now', 'The sentence, both halves', 'Is the second half true?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2.4, 1.6, 3.2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _They refused because _______. The test was _______. The number is now _______. The sentence is: on the new information you may _______, and nothing in it contradicts _______._'));
out.push(p('**Listener task:** count how many second halves were true. ⚠ Then ask, of the ones that were not, whether the test really is the same — and note that where it is not, the writer is asking for a reversal and should say so.'));
out.push(p('**Board clinic:** your teacher writes four formulas on the board — find the one with *now* in it and the one that denies something nobody said. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE LAST SENTENCE: FIVE VERSIONS. 12 November. N. Mansour. Working page.**',
  table(['', 'Version', 'What is wrong, or right'], [
    ['**1**', '_We hope the Committee will now take a different view._', '⚠ **_now_ = *at last*** — **a reproach, and it is my four months in the sentence rather than theirs**'],
    ['**2**', '_We hope the Committee will take a different view._', '⚠ **asks them to change their mind**, **which is asking them to have been wrong on 1 July**'],
    ['**3**', '_We are not suggesting that the Committee was wrong in July._', '⚠ **plants the word *wrong*** — **the letter did not contain it and now it does, and the denial will not be remembered**'],
    ['**4**', '_On the new information the Committee may reach a different conclusion._', '⚠ **good, and incomplete** — **an invitation with no permission attached**'],
    ['**5**', '_On the new information the Committee may reach a different conclusion, and nothing in it contradicts the decision of 1 July._', '⚠ **this one** — **the second half is the permission, and it is a true description of what they would be doing**'],
  ], [0.4, 5, 3.6]),
  '⚠ **Why version 5 works, in one paragraph.** **The Committee applied a test to a series ending at fifty-eight days and declined.** ⚠ **The same test applied to a series ending at forty-nine gives a different answer, and nobody has changed their mind about the test.** **So a yes in November is not a reversal of July; it is the same policy on a different number** — ⚠ **and a reader given that sentence has been handed the reasoning for their own answer, which is the most useful thing a letter can contain.**',
  '⚠ **The thing I nearly did and did not.** **I nearly wrote a paragraph explaining all of this.** ⚠ **The explanation belongs in this working page and not in the letter** — **because a reader who is given a formula and then given the reasoning for it starts to examine the formula, and a formula that is being examined is doing no work.**',
  '⚠ **And the test I applied to version 5 before using it:** ⚠ **could I set the reasoning out on a separate page without embarrassment?** **Yes, and the page is this one.** **A formula that fails that test is tact, and tact is what a reader checks.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why is version 4 described as good and incomplete?'));
out.push(item('2', 'What is the test the writer applies to version 5, and does it pass?'));
out.push(item('3', 'Why does the explanation belong on the working page and not in the letter?'));
out.push(box('Writer\'s box', [
  '**The five-version page — four properties:** ⚠ **every version you wrote, in order** → ⚠ **what is wrong with each, in one line** → **a paragraph on why the last one works** → ⚠ **and the test you applied to it.**',
  '⚠ **Keep all five versions, including the bad ones.** ⚠ **The faults in versions 1 to 3 are the faults you will write again next year**, **and a page of them is worth more than the sentence you kept.**',
  '⚠ **Say what is wrong in one line each, and name the mechanism.** ⚠ *Plants the word wrong*, **not** *is a little defensive*. **A named mechanism can be looked for in the next letter; a judgement cannot.**',
  '⚠ **Explain why the chosen version works in terms of what the READER would be doing.** ⚠ **The same test on a different number** — **so a yes in November is not a reversal.** **That is the reasoning you are handing them, and the whole point is that they do not have to construct it.**',
  '⚠ **Do not put the explanation in the letter.** ⚠ **A reader given a formula and then its reasoning begins to examine the formula**, **and a formula under examination is doing no work.** **The reasoning goes on the working page, which is where you can be as explicit as you like.**',
  '⚠ **And apply the test: could you set the reasoning out on a separate page without embarrassment?** ⚠ **If not, the sentence is tact rather than description** — **and tact is the thing a careful reader checks.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a five-version page for one difficult sentence of yours (**80 words or more**). Use the frame.'));
out.push(p('**THE ______________ SENTENCE: FIVE VERSIONS. ______________. ______________.**   **1** | _______________._ | ⚠ **______________**   **2** | _______________._ | ⚠ **______________**   **3** | _______________._ | ⚠ **______________**   **4** | _______________._ | ⚠ **good, and incomplete** — **______________**   **5** | _______________._ | ⚠ **this one** — **______________**   ⚠ **Why version 5 works.** **______________. ______________.** ⚠ **So ______________ is not ______________; it is ______________.**   ⚠ **The thing I nearly did and did not. I nearly ______________.** ⚠ **______________.**   ⚠ **And the test I applied: ______________. ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['All five versions kept, including the bad ones', ''],
  ['A named mechanism, not a judgement, against each fault', ''],
  ['The reasoning expressed as what the reader would be doing', ''],
  ['The explanation kept out of the letter', ''],
  ['The test applied, and answered', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only version 5. ⚠ The class says whether the second half is a permission, and whether it is true.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time somebody changed their mind at your work (**200 to 240 words**). Say what the first answer was, what changed, what was said that made the second answer possible, and who gave them the sentence.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was the second answer consistent with the first, or a reversal?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did somebody have to be wrong for the answer to change? Usually two of three — ⚠ **and in those two the change took much longer, because a decision that requires somebody to have been wrong waits for them to leave.**'));
out.push(box('Homework', ['Write your final text. Then take one refusal and write the two-part sentence, and check whether the second half is true (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 15.5 =======================
out.push(pb());
out.push(h2('15.5  When not to write at all'));
out.push(p('**Function:** deciding not to write, and recording the decision   ·   **Grammar:** _I am not writing, and this is why_   ·   **Pronunciation:** a decision not to act, read as a decision'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a letter or message you decided not to send. ⚠ Then say whether you wrote down why, and whether anybody else knows you decided.'));
out.push(p('**b**  Which is a decision? _I did not get round to writing to him · I have decided not to write, because nothing has changed since September and the second refusal would cost the November conversation_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Nour decide not to write to Mr Ayoub about the second man on the Ghouta run?   **A** she has changed her mind   **B** nothing has changed since his refusal, and the file note does the work a letter would not   **C** Bassel told her not to'));
out.push(p('**b**  Listen again. **1** What goes in the file note, in four parts? **2** What does Bassel say about the note being read in March?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.9  "I am not writing, and here is the note"', [
  ['Bassel', 'You were going to ask Mr Ayoub again about a second man on the Ghouta run.'],
  ['Nour', '⚠ **I am not. Nothing has changed since September.** ⚠ **The run is still Mondays and Wednesdays, it still takes forty cartons a time when the orders are heavy, and he refused on cost.**'],
  ['Bassel', 'The buffer went to ninety-five because of that run.'],
  ['Nour', '⚠ **That is a fact and it is not a new one.** **It was true in August and I did not know it.** ⚠ **The thing that changed is what I know, not what is happening** — **and a committee, or a manager, is entitled to say that my knowing something later is not an event.**'],
  ['Bassel', 'So nothing happens.'],
  ['Nour', '⚠ **No. A note happens.** ⚠ **Four lines: what I was going to ask, what the refusal was and when, what has changed since, which is nothing, and the date I will look again.**'],
  ['Bassel', 'Who reads a note like that?'],
  ['Nour', '⚠ **Me, in March, when I have forgotten that I decided.** ⚠ **A decision not to act is the only kind that leaves no trace at all** — **so in March I will either think nobody ever raised it, or I will raise it again having forgotten why I did not.**'],
  ['Bassel', '⚠ **And if somebody else reads it?**'],
  ['Nour', '⚠ **Then it is better still, because it says the question was asked and answered rather than never considered.** ⚠ **A file with a *decided not to* in it is a different file from one with a gap.**'],
  ['Bassel', '⚠ **Put the date in, then. Say March.**'],
  ['Nour', '⚠ **1 March, and the trigger: if the buffer goes under a hundred and twenty twice in a month, I write before March.**'],
  ['Bassel', '⚠ **Then it is not really a decision not to write. It is a decision not to write yet.**'],
  ['Nour', '⚠ **Which is what most of them are, and nobody ever says so.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The decision not to write**',
  table(['Part', 'What it says', 'Why'], [
    ['**1 the ask**', '**what you were going to ask for**', '⚠ **so that in March you know what you decided about**'],
    ['**2 the refusal**', '**what it was, who gave it, and when**', '**a refusal with no date cannot be tested for staleness**'],
    ['⚠ **3 what has changed**', '⚠ *nothing* — **and the reason that is the answer**', '⚠ **and *what I now know* is not a change** — **a reader is entitled to say that your learning something later is not an event**'],
    ['⚠ **4 when you look again**', '⚠ **a date, and a trigger**', '⚠ **which turns *not writing* into *not writing yet*, which is what it usually is**'],
  ], [1.4, 3.4, 4]),
  '⚠ **A decision not to act is the only kind of decision that leaves no trace.** ⚠ **Everything else in a working life produces a document; this produces nothing** — **so in six months you cannot tell a considered decision from a thing nobody got round to.**',
  '⚠ **Write the note for yourself first.** ⚠ **In March you will have forgotten that you decided**, **and you will either raise it again without knowing why you did not, or assume nobody ever raised it at all.**',
  '⚠ **And it is better still if somebody else reads it.** ⚠ **A file with *decided not to, on this date, for this reason* in it is a different file from one with a gap** — **and the gap is what looks like an oversight in two years.**',
  '⚠ **_What I now know_ is not a changed fact.** ⚠ **The buffer was at ninety-five in August and the writer learned it in September; the world did not change, the writer did** — **and a reader is entitled to say so.** **That distinction is the hardest one in this cycle and it is worth the time.**',
  '⚠ **Put a date and a trigger on it, and then say what it really is.** ⚠ **_Not writing_ with a date in it is *not writing yet*** — **which is what most decisions not to write are, and almost nobody says so, which is why they turn into never.**',
  '**Practise:** Take something you decided not to write. Write the four-line note now, with a date and a trigger.',
  '**Useful phrases:**  nothing has changed since  ·  what I now know is not an event  ·  a decision not to act leaves no trace  ·  I will look again on  ·  not writing, or not writing yet?',
  '**Pronunciation – a decision not to act.** 🔊 **Track 15.10** Listen twice. ⚠ **The first says *I am not writing, and nothing has changed since September* levelly, as a decision.** ⚠ **The second falls away at the end.** **Level, it is a judgement; falling, it sounds like giving up, and a note that sounds like giving up will be read in March as one.** Say it four times, level.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A wants to write; B builds the note instead.'));
out.push(dlg(null, [
  ['A', 'I am going to ask __________ again about __________.'],
  ['B', '⚠ **When did they refuse, and on what ground?**'],
  ['A', '__________.'],
  ['B', '⚠ **What has changed since?**'],
  ['A', '__________.'],
  ['B', '⚠ **Is that a change in the world or a change in what you know?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then there is no letter. When do you look again?**'],
  ['A', '__________.'],
  ['B', '⚠ **And the trigger? Then it is not *not writing*, it is *not writing yet*.**'],
]));
out.push(table(['Role card 1 — what I now know', 'Role card 2 — the note nobody will read'], [[
  '⚠ **A has discovered that the buffer fell to ninety-five because of the Ghouta run, and treats it as a changed fact.** ⚠ **B asks when it became true, and the answer is August.** ⚠ **B\'s point: the world did not change, the writer did** — **and a manager who refused on cost in September is entitled to say that A learning something later is not an event.**',
  '⚠ **A sees no point in a note nobody will read.** ⚠ **B asks who will read it in March, and the answer is A.** ⚠ **B\'s point: a decision not to act is the only kind that leaves no trace, so in March A will either raise it again having forgotten why not, or believe nobody ever raised it** — **and both of those cost more than four lines.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four parts of the note. ⚠ Then say in one line why *what I now know* is not a changed fact, and what it is instead.'));
out.push(PHRASE_CARD(['nothing has changed since', 'a change in what I know', 'no trace at all', 'I look again on', 'not writing yet']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** things you decided not to write. Build the note for each.'));
out.push(table(['What you were going to ask', 'The refusal, and when', 'What has changed', 'Date and trigger'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2.4, 2.2, 2, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I was going to ask _______. They refused on _______, on _______. What has changed is _______. I look again on _______, or sooner if _______._'));
out.push(p('**Listener task:** count how many had written anything down at the time. ⚠ Then ask how many would have remembered the reason in six months, and expect the honest answer to be very few.'));
out.push(p('**Board clinic:** your teacher writes four notes on the board — find the one that treats *what I now know* as a change, and the one with no date in it. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note, and answer the questions.'));
out.push(box(null, [
  '**FILE NOTE: THE SECOND MAN ON THE GHOUTA RUN. 11 November. N. Mansour. Administration file, not sent to anybody.**',
  '⚠ **1. What I was going to ask.** **That a second man go on the Ghouta run on Mondays and Wednesdays, which is the arrangement since the change note of 1 March.**',
  '⚠ **2. The refusal.** **Mr Ayoub, 14 September, on cost: about 96,000 a year for two days a week, against a run that is profitable but not by that much.** **He asked whether anything other than cost was involved and I said no, which was true at the time.**',
  '⚠ **3. What has changed since.** ⚠ **Nothing.**',
  '⚠ **The buffer stock fell to ninety-five on 1 September and the run is the cause, and I did not know that until 23 September.** ⚠ **That is a change in what I know and not a change in what is happening** — **and a manager who refused on cost in September is entitled to say that my learning something three weeks later is not an event.** **If I write on that basis I get a second refusal, and a second refusal on the same ground costs me the next thing I ask him for.**',
  '⚠ **4. When I look again.** **1 March, when the quarter\'s figures exist.** ⚠ **Or sooner, if the buffer goes under a hundred and twenty twice in one month** — **because that is a new fact about the world, not about me, and it is the fact that would make the cost argument different.**',
  '⚠ **Why this note exists at all.** ⚠ **A decision not to act is the only kind that leaves no trace.** **In March I will not remember that I decided; I will either raise it again not knowing why I did not, or I will assume nobody ever raised it.** ⚠ **And if anybody else reads this file, it says the question was asked and answered rather than never considered, which is a different file.**',
  '⚠ **One correction to my own paragraph 2.** **I told Mr Ayoub that nothing other than cost was involved.** ⚠ **That was true on 14 September and it is not true now**, **and the note should say so even though I am not writing to him** — **because in March I will be relying on this paragraph and not on my memory.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the answer to part 3, and what reasoning follows it?'));
out.push(item('2', 'What are the two things that would bring the question back, and what is the difference between them?'));
out.push(item('3', 'Why does the writer correct her own paragraph 2 in a note she is not sending?'));
out.push(box('Writer\'s box', [
  '**The file note instead of a letter — five parts:** ⚠ **the ask** → **the refusal, with a name, a date and a ground** → ⚠ **what has changed, answered *nothing* and then reasoned** → **the date and the trigger** → ⚠ **and why the note exists.**',
  '⚠ **Answer part 3 in one word and then do the work.** ⚠ *Nothing.* **One word on its own line** — **and the paragraph after it is where the difficult distinction gets made, which is between a change in the world and a change in what you know.**',
  '⚠ **Give the refusal its ground and its figure.** ⚠ **About 96,000 a year, on cost** — **because in March you will need to know not only that he refused but what he refused on**, **and a refusal recorded without its ground cannot be answered later.**',
  '⚠ **Distinguish the date from the trigger, and say which is which.** ⚠ **1 March is a date; the buffer going under a hundred and twenty twice in a month is a new fact about the world** — **and only the second is an event that changes the argument.**',
  '⚠ **Write down why the note exists.** ⚠ **It feels unnecessary and it is the part that makes the note survive a filing clerk** — **and it is also the sentence that will persuade the next person to write one.**',
  '⚠ **And correct yourself in the note, even though nobody will read it.** ⚠ *I told him nothing other than cost was involved. That was true on 14 September and it is not true now.* **In March the writer will rely on the note and not on her memory** — **and an uncorrected note is worse than none, because it will be believed.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the file note for something you decided not to write (**80 words or more**). Use the frame.'));
out.push(p('**FILE NOTE: ______________. ______________. ______________. Not sent to anybody.**   ⚠ **1. What I was going to ask.** **______________.**   ⚠ **2. The refusal.** **______________, on ______________, on ______________: ______________.**   ⚠ **3. What has changed since.** ⚠ **Nothing.**   ⚠ **______________.** ⚠ **That is a change in what I know and not a change in what is happening** — **and ______________.** **If I write on that basis ______________.**   ⚠ **4. When I look again.** **______________.** ⚠ **Or sooner, if ______________** — **because ______________.**   ⚠ **Why this note exists at all.** ⚠ **______________.** **______________.**   ⚠ **One correction to my own paragraph 2. ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Part 3 answered in one word, then reasoned', ''],
  ['The refusal with a name, a date, a ground and a figure', ''],
  ['The date and the trigger distinguished', ''],
  ['A paragraph saying why the note exists', ''],
  ['A correction to the writer\'s own earlier account', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their part 3. ⚠ The class says whether what follows *nothing* is reasoning or an excuse.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something your work decided not to do and did not record (**200 to 240 words**). Say what it was, who decided, what the reason was, whether it came back, and what four lines at the time would have saved.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _is this a decision or a thing nobody got round to?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the question come back? Usually all three — ⚠ **and in most of them nobody could say, when it came back, whether it had been decided before or merely dropped, which is the whole argument for four lines.**'));
out.push(box('Homework', ['Write your final text. Then write the four-line note for one thing you have decided not to raise, with a date and a trigger (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 15.6 =======================
out.push(pb());
out.push(h2('15.6  The interval, and how to say why you waited'));
out.push(p('**Function:** judging and explaining the interval   ·   **Grammar:** _I have written now because · the first month that is evidence rather than an intention_   ·   **Pronunciation:** an interval explained without apology'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say how long your work usually leaves it before writing again. ⚠ Then say who decided that, and on what basis.'));
out.push(p('**b**  Which explains an interval? _I am sorry for the delay in coming back to you · I have written now because the October figure is the first month that is evidence rather than an intention_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub say about the usual rule of six weeks?   **A** that it is right   **B** that an interval is not a length of time but a fact arriving, and six weeks is only what the fact usually costs   **C** that it is too short'));
out.push(p('**b**  Listen again. **1** Why did the letter take four months rather than six weeks? **2** What does he say about apologising for the interval?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.11  "Four months, and not one of them was tact"', [
  ['Nour', 'The rule I was taught is six weeks before writing again.'],
  ['Mr Ayoub', '⚠ **Where does six weeks come from?**'],
  ['Nour', 'It is long enough not to look impatient.'],
  ['Mr Ayoub', '⚠ **Then it is a rule about how you look, and this letter is not about how you look.** ⚠ **An interval is not a length of time. It is a fact arriving** — **and six weeks is only how long a fact usually takes.**'],
  ['Nour', 'Ours took four months.'],
  ['Mr Ayoub', '⚠ **Because the fact is a month-end figure and there were four month-ends between July and the one that helped.** ⚠ **July, August and September were all intentions. October is the first month in which the thing we said we would do has been done and measured.**'],
  ['Nour', 'So I say that.'],
  ['Mr Ayoub', '⚠ **You say that, in one sentence, at the end.** ⚠ **And you do not apologise for it.**'],
  ['Nour', 'Four months of silence is a long time to say nothing about.'],
  ['Mr Ayoub', '⚠ **It is a long time and it was correct, and an apology would say it was not.** ⚠ *I am sorry for the delay* **tells a reader that the writer thinks they owed a letter in August** — **and if they owed one in August, why has it taken until November?**'],
  ['Nour', 'Whereas if it was correct.'],
  ['Mr Ayoub', '⚠ **Then there is nothing to apologise for and the sentence is an explanation instead.** ⚠ *I have written now because the October figure is the first month that is evidence rather than an intention.* **Nineteen words, and it does the work of a paragraph of regret.**'],
  ['Nour', 'And if the interval had been bad? If I had just not got round to it?'],
  ['Mr Ayoub', '⚠ **Then say nothing about the interval at all, and never invent a reason.** ⚠ **A reader who is given a false explanation for four months of silence has been told something they can check** — **and the one thing worse than an unexplained silence is an explained one that is not true.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The interval**',
  table(['', 'Not', 'Write'], [
    ['**what it is**', '⚠ **a length of time** — **six weeks, because that is polite**', '⚠ **a fact arriving** — **and six weeks is only how long a fact usually takes**'],
    ['⚠ **the explanation**', '⚠ *I am sorry for the delay in coming back to you*', '⚠ *I have written now because the October figure is the first month that is evidence rather than an intention*'],
    ['⚠ **where it goes**', '**the first paragraph**', '⚠ **the last, in one sentence** — **the reader has decided by then**'],
    ['⚠ **when the interval was bad**', '⚠ **an invented reason**', '⚠ **nothing at all** — **an explained silence that is not true is worse than an unexplained one**'],
  ], [1.7, 3.3, 4]),
  '⚠ **An interval is not a length of time, it is a fact arriving.** ⚠ **Six weeks is a rule about how the writer looks, and the second letter is not about how the writer looks** — **it is about whether anything has changed.**',
  '⚠ **A month-end figure takes a month-end.** ⚠ **Between July and the figure that helped there were four of them, and three were intentions** — **so four months is not a delay, it is the price of the only fact worth writing about.**',
  '⚠ **Do not apologise for a correct interval.** ⚠ *I am sorry for the delay* **says the writer thinks a letter was owed in August** — **and if one was owed in August, the reader now has a second question about why it is November.**',
  '⚠ **Put the explanation last and keep it to one sentence.** ⚠ **The reader has decided by the time they reach it**, **so it is a courtesy and not a case** — **and the same sentence first makes the letter about the writer.**',
  '⚠ **And where the interval was simply neglect, say nothing and invent nothing.** ⚠ **A false explanation is a thing a reader can check**, **and the only thing worse than an unexplained silence is an explained one that turns out not to be true.**',
  '**Practise:** Take a letter you left too long. Say what fact you were actually waiting for, and whether you were waiting for it.',
  '**Useful phrases:**  an interval is a fact arriving  ·  the first month that is evidence  ·  rather than an intention  ·  no apology for a correct interval  ·  say nothing and invent nothing',
  '**Pronunciation – an interval without apology.** 🔊 **Track 15.12** Listen twice. ⚠ **The first says *I have written now because the October figure is the first month that is evidence rather than an intention* evenly.** ⚠ **The second slows on *now*.** **Even, it explains; slowed on *now*, it apologises** — **and an apology reopens the question of August.** Say it four times, even.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A explains an interval; B tests it.'));
out.push(dlg(null, [
  ['A', 'I am sorry for the delay in __________.'],
  ['B', '⚠ **Did you owe them a letter earlier?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then what were you waiting for?**'],
  ['A', '__________.'],
  ['B', '⚠ **And when did it arrive?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then the interval was correct. Say that instead, in one sentence, at the end.**'],
  ['A', '__________.'],
  ['B', '⚠ **And if you had not been waiting for anything?**'],
]));
out.push(table(['Role card 1 — the apology that reopens a question', 'Role card 2 — the invented reason'], [[
  '⚠ **A opens with an apology for the delay and feels it is only courteous.** ⚠ **B asks whether A owed a letter in August.** ⚠ **B\'s point: an apology concedes that a letter was owed, and a reader who accepts that now wants to know why it took until November** — **so the apology creates the question it was meant to close.**',
  '⚠ **A\'s interval was simply neglect, and A wants to write that the firm has been reviewing its collection procedures.** ⚠ **B asks whether that is true, and it is not.** ⚠ **B\'s point: a reader given an explanation can check it** — **and the only thing worse than four unexplained months is four explained months where the explanation turns out to be invented.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the interval sentence in one line. ⚠ Then say what the writer was actually waiting for, and whether six weeks or four months was the right answer.'));
out.push(PHRASE_CARD(['a fact arriving', 'evidence rather than an intention', 'no apology', 'at the end, one sentence', 'invent nothing']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** letters you left, or should leave. Judge each interval.'));
out.push(table(['The letter', 'The fact you are waiting for', 'When it arrives', 'The interval sentence'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2, 2.4, 1.6, 3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I am writing to _______. The fact I was waiting for is _______, which arrives on _______. The sentence is: I have written now because _______._'));
out.push(p('**Listener task:** count how many intervals were a fact arriving and how many were a length of time. ⚠ Then ask, of the lengths of time, what the writer was waiting for — and in most cases nothing.'));
out.push(p('**Board clinic:** your teacher writes four interval sentences on the board — find the apology and the invented reason. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THREE LETTERS, THREE INTERVALS. 13 November. N. Mansour. For the file and for Lina.**',
  table(['The letter', 'The fact waited for', 'The interval', 'The sentence'], [
    ['**the Committee, on the facility**', '⚠ **a month-end debtor-day figure below fifty-two** — **three of the four month-ends were intentions**', '⚠ **four months** — **and correct**', '⚠ *I have written now because the October figure is the first month that is evidence rather than an intention.*'],
    ['**Mr Hamdan, on the standard for the next consignment**', '**the September rejection closed and credited**', '⚠ **three weeks** — **and the interval is the whole point of it**', '⚠ **none** — **the first letter said it was coming in three weeks, so the interval was announced and needs no sentence**'],
    ['**the plater, on the shortfalls**', '⚠ **nothing** — **the shortfalls have been happening twice a month for years and Hala told me on 23 October**', '⚠ **three weeks, and it is neglect** — **I have been writing the acceptance page instead**', '⚠ **none, and no invented reason** — **I write it this week and say nothing about the delay**'],
  ], [2.2, 3.4, 2.2, 3.4]),
  '⚠ **The three are different kinds and the difference is not the length.** **Four months is correct, three weeks is correct, and three weeks is neglect.** ⚠ **What makes the second one correct is that it was announced in the first letter; what makes the third one neglect is that nothing was being waited for.**',
  '⚠ **The rule, as I now hold it:** ⚠ **an interval is the time a fact takes to arrive, plus nothing.** **If the fact is a month-end figure, the interval is a month-end. If the fact has arrived, the interval is over** — **and if no fact is being waited for, there is no interval, there is only delay.**',
  '⚠ **And the rule about saying so:** ⚠ **explain a correct interval in one sentence at the end, apologise for none of them, and say nothing at all about one that was neglect.** **An invented explanation is the only version of this that makes things worse** — **because it is checkable, and the reader has the dates.**',
  '⚠ **For Lina.** ⚠ **The six-week rule you were given is not wrong, it is a guess at how long a fact usually takes** — **and it is the right guess surprisingly often.** **But it is the wrong question.** ⚠ **Ask what you are waiting for, and if the answer is nothing, write today.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What makes the three-week interval on the Hamdan letter correct, and the three weeks on the plater letter neglect?'));
out.push(item('2', 'What is the rule as the writer now holds it?'));
out.push(item('3', 'What does she say to Lina about the six-week rule?'));
out.push(box('Writer\'s box', [
  '**The three-interval page — four properties:** ⚠ **a table of *the letter · the fact waited for · the interval · the sentence*** → ⚠ **the difference stated as a kind and not a length** → **the rule in one sentence** → ⚠ **and the case where there is no sentence at all.**',
  '⚠ **Put the fact waited for in its own column, and allow the answer *nothing*.** ⚠ **The column is what reveals that two three-week intervals are different things** — **and *nothing* in that column is the diagnosis of a delay rather than an interval.**',
  '⚠ **State the difference as a kind.** ⚠ **Four months correct, three weeks correct, three weeks neglect** — **and the difference is not the length.** **A reader who sees two identical lengths with different verdicts understands the rule immediately.**',
  '⚠ **Write the rule in one sentence and make it subtractive.** ⚠ *An interval is the time a fact takes to arrive, plus nothing.* **The *plus nothing* is the working part** — **because every bad interval is a true interval with waiting added to it.**',
  '⚠ **Say which letters get no sentence, and why.** ⚠ **An announced interval needs no explanation; a neglectful one must have none** — **and a page that only teaches the sentence will produce a sentence in the one case where silence is the right answer.**',
  '⚠ **And where the page is written for somebody junior, address them by name at the end.** ⚠ **Not to soften the rule but to correct the rule they were given** — **and *it is the right guess surprisingly often* is worth saying, because a rule that is usually right is harder to displace than one that is wrong.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the three-interval page for three letters of yours (**80 words or more**). Use the frame.'));
out.push(p('**THREE LETTERS, THREE INTERVALS. ______________. ______________.**   **The letter** | **The fact waited for** | **The interval** | **The sentence**   **______________** | ⚠ **______________** | ⚠ **______________** — **and correct** | ⚠ _______________._   **______________** | **______________** | ⚠ **______________** | ⚠ **none** — **______________**   **______________** | ⚠ **nothing** — **______________** | ⚠ **______________, and it is neglect** | ⚠ **none, and no invented reason**   ⚠ **The three are different kinds and the difference is not the length. ______________.**   ⚠ **The rule, as I now hold it: an interval is ______________, plus nothing.** **______________.**   ⚠ **And the rule about saying so: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*The fact waited for* in its own column, with *nothing* allowed', ''],
  ['The difference stated as a kind, not a length', ''],
  ['The rule in one sentence, with *plus nothing* in it', ''],
  ['The case that gets no sentence, and why', ''],
  ['No apology anywhere on the page', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *fact waited for* column. ⚠ The class says of each entry whether it is a fact or a feeling about looking impatient.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a letter your work left too long (**200 to 240 words**). Say what it was, how long it took, what was being waited for if anything, what was said about the delay, and what you would write now.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _what fact was being waited for?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was something actually being waited for? Usually one of three — ⚠ **and in the other two the interval was a length of time chosen so as not to look impatient, which is a rule about the writer and not about the letter.**'));
out.push(box('Homework', ['Write your final text. Then take one letter you have not sent, write down what fact you are waiting for, and if the answer is nothing, send it today (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 15.7 =======================
out.push(pb());
out.push(h2('15.7  Review & Mediate: the no that was never a no'));
out.push(p('**Function:** finding a refusal nobody ever received   ·   **Review:** the changed fact · the concession · the narrower ask · the formula · the note · the interval'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 15 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What is the only ground for writing to somebody who has refused you?',
  '**2** What is the test of a concession, and what is its strong form?',
  '**3** What are the three parts of the narrower ask, and which makes it grantable?',
  '**4** What are the two halves of the sentence that lets somebody change their mind?',
  '**5** What four things go in the note when you decide not to write?',
  '**6** What is an interval, and what do you say about one that was neglect?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala reveal?   **A** that Ms Tannous has written   **B** that Ms Tannous telephoned in September asking about a price, and nobody wrote it down   **C** that Ms Tannous has gone elsewhere'));
out.push(p('**b**  Listen again. **1** What has everybody at Sham Trading assumed since April, and on what evidence? **2** What does Hala say she did with the call, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.13  "She asked what the bench price was"', [
  ['Nour', 'Ms Tannous has not ordered since April. Her agreed terms of 28 April ran twelve months from 1 May and we have not asked her to renew them. I am putting the account down as closed for the year.'],
  ['Hala', '⚠ **She telephoned in September.**'],
  ['Nour', 'She what?'],
  ['Hala', '⚠ **About the fourth of the month. She asked what the bench price was and whether the Monday delivery still ran.** ⚠ **I told her and she said thank you and that was the whole call.**'],
  ['Nour', '⚠ **Did you write it down?**'],
  ['Hala', '⚠ **No. She did not place an order and there was nothing to write.** ⚠ **A call where nobody orders anything has nowhere to go** — **it is the same as the plater\'s shortfalls.**'],
  ['Nour', 'Hala, since April everybody in this company has been saying that she will not deal with us again after the letter.'],
  ['Hala', '⚠ **I know. I have heard Bassel say it.**'],
  ['Nour', '⚠ **And what did she actually say in April?**'],
  ['Hala', '⚠ **She said she would need to think about it.** ⚠ **Nobody has ever said anything else, and nobody has asked her since.**'],
  ['Nour', '⚠ **So there has never been a refusal.**'],
  ['Hala', '⚠ **There has never been a refusal. There has been seven months of us assuming one.**'],
  ['Nour', '⚠ **And she asked for a price in September, which is the thing a person does when they are deciding whether to order.**'],
  ['Hala', '⚠ **Or when they want to see whether you will treat them the same.** ⚠ **I gave her the same price as anybody else and I did not mention the letter, because mentioning it would have been about us.**'],
  ['Nour', '⚠ **That was the right answer, and nobody told you to give it.**'],
  ['Hala', '⚠ **Nobody tells me anything about that account.** ⚠ **If you want to know whether she has refused us, the way to find out is to ask her** — **and there is no letter in this unit that does the job of a telephone call.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – the refusal that was never given**',
  table(['What happens', 'What is said', 'What it does'], [
    ['**the assumption is stated**', '⚠ *I am putting the account down as closed for the year*', '⚠ **said out loud for the first time in seven months** — **which is what lets it be contradicted**'],
    ['⚠ **the fact arrives**', '⚠ *she telephoned in September* — **about a price and a delivery day**', '⚠ **from the only person who had it** — **and it was never written down because no order followed**'],
    ['⚠ **the original words**', '⚠ *she said she would need to think about it*', '⚠ **which is not a refusal** — **and nobody has said anything else since, and nobody has asked**'],
    ['⚠ **what she actually did**', '⚠ **asked the price and did not mention the letter**', '⚠ **and Hala did not mention it either, because mentioning it would have been about us**'],
    ['⚠ **the remedy**', '⚠ *the way to find out is to ask her* — **and there is no letter that does the job of a telephone call**', '⚠ **the whole unit, answered from the counter**'],
  ], [1.9, 3.5, 3]),
  '⚠ **A refusal nobody ever gave is the most expensive kind.** ⚠ **Seven months of a company believing an account was lost, on the strength of *I will need to think about it*** — **which is not a refusal in any language.**',
  '⚠ **The assumption survives because nobody says it out loud.** ⚠ **It is said for the first time in this conversation, in one sentence, and it is contradicted inside ten seconds** — **and it had been shaping decisions since April.**',
  '⚠ **A call where nobody orders anything has nowhere to go.** ⚠ **It is the same fault as the plater\'s shortfalls in 14.7** — **a piece of information with no destination, so it stays with the person who received it.**',
  '⚠ **And the counter made the right judgement with no instruction.** ⚠ **Hala gave the ordinary price and did not mention the letter, because mentioning it would have been about Sham Trading and not about her** — **which is 11.4 performed by somebody who has never read it.**',
  '⚠ **The last line is the unit\'s own limit, and it should be read aloud:** ⚠ *there is no letter in this unit that does the job of a telephone call.* **Six cycles of writing, and the thing to do is ask her** — **because a refusal can only be confirmed by the person who gave it.**',
  '**Practise:** Find a refusal your work believes it has received. Establish the words actually used, and who has asked since.',
  '**Useful phrases:**  she said she would need to think about it  ·  nobody has asked since  ·  nowhere for the call to go  ·  it would have been about us  ·  ask her',
  '**Pronunciation – a fact that contradicts seven months.** 🔊 **Track 15.14** Listen twice. ⚠ **The first says *she telephoned in September* flatly, as information.** ⚠ **The second stresses *did*, as in *she did telephone*.** **Flat, it is a fact and the conversation moves on; stressed, it is a correction of a colleague, and the next thing discussed is who was wrong.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A states an assumption; B is the person who knows. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  '⚠ **A says the assumption out loud, in one sentence, as a decision being taken** — **which is what gives B something to contradict.** ⚠ **When the fact arrives, A asks what words were actually used, and then who has asked since.** ⚠ **A does not ask why B did not say anything**, **because the answer is that nobody asked, and the question would turn the conversation into a complaint.**',
  '⚠ **B gives the fact flatly and without emphasis, and gives the original words exactly:** *she would need to think about it.* ⚠ **B explains why the call went unrecorded: no order followed, so there was nowhere for it to go.** ⚠ **And B ends with the remedy** — **ask her** — **and with the observation that no letter does the job of a telephone call.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the words actually used in April. ⚠ Then write how long the assumption lasted, and the two reasons the September call was never recorded.'));
out.push(PHRASE_CARD(['think about it', 'nobody has asked since', 'nowhere for it to go', 'it would be about us', 'ask her']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a refusal your firm believes it has. Establish what was actually said.'));
out.push(table(['The assumption, and its age', 'The words actually used', 'Who has asked since', 'What you do now'], [['', '', '', ''], ['', '', '', '']], [2.2, 2.2, 1.8, 2.2]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the conversation. This is the **third** unit of this book, and the unwritten thing is this: ⚠ **the hardest letter in this unit is not the one to the committee, it is the one you do not have to write** — **because most of the refusals a company believes it has received were never given, and the reason they survive is that nobody says the assumption out loud and nobody asks the person who is supposed to have given it; so six cycles of writing end in a telephone call, and a course that teaches writing has to be willing to say that.**'));
out.push(p('_The assumption is _______ and it is _______ old. The words actually used were _______. Since then, _______ has asked. What I do now is _______._'));
out.push(p('**Listener task:** add this unit\'s six to the Book 2 **obligation-and-evidence word list**: _a reasoned refusal · what has changed since the no · a narrower request · the face-saving formula · a letter you decide not to send · a no that was a not yet_. ⚠ **Eighteen items of the seventy-two.**'));
out.push(p('**Board clinic:** your teacher writes three exchanges on the board — look for one where the assumption was never stated out loud, and one where the questioner asked why nobody had said anything. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 5)', 10));
out.push(p('⚠ **This unit is Part 5: error correction, twelve lines, and it is the third time in the level.** Some lines have **one extra word**. Write the extra word in **CAPITALS**; where a line is correct, write **CORRECT**. ⚠ **The extra word is always grammatically wrong, not merely unnecessary** — **a word you would cut for style is not the answer.**'));
out.push(box(null, [
  '**A SECOND LETTER TO A COMMITTEE — find the extra words.**',
  '**1** ______  Thank you for your letter of 1 July, which it granted a facility of',
  '**2** ______  thirty-two million and declined the balance. We accepted that decision',
  '**3** ______  at the time and we have not written to you since, because nothing',
  '**4** ______  had changed. Two things have changed in the October, and this letter',
  '**5** ______  is about them and about nothing else. First, the two of export accounts',
  '**6** ______  opened in 2024 have been moved on to documentary credit from 1',
  '**7** ______  October, so the sixty-day exposure the Committee asked about has',
  '**8** ______  gone on the both of them. Second, our debtor days for October are',
  '**9** ______  forty-nine, against fifty-eight at the time of the application. We are',
  '**10** ______  not asking you to reconsider the whole of the balance. We are asking',
  '**11** ______  for four million for the quarter to 31 March, so that it can be to',
  '**12** ______  reviewed in March on three months of figures rather than on than one.',
]));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 1 — an internal communication, 40 to 50 words, 10 marks.** **Three content points, all three present.** ⚠ **This is the second Part 1 of Book 2; the even units take Part 2.**',
  '⚠ **For a message about a second letter, the three points are: what has changed · what you are asking for, narrowed · and what ends it without a further decision.** ⚠ **Not the history of the refusal** — **your manager was there.**',
  '⚠ **Put the lapse in, because it is the content point candidates drop.** ⚠ *If the period has not held below fifty-two days by March, the four million lapses.* **Thirteen words**, **and it is the sentence that makes the ask grantable, so it is the sentence the marks are on.**',
  '⚠ **Do not use the forty-five words to concede anything.** **The concession belongs in the letter to the committee, not in a message to your own manager** — ⚠ **and a candidate who writes *we accept that they were right to refuse* has spent nine words telling their manager something irrelevant to a decision.**',
  '⚠ **Part 5 tip, for the lines above.** **Six of the twelve lines carry an extra word and six are correct**, ⚠ **and the examination never tells you how many of either.** **The six here are of four kinds: a redundant subject pronoun (*which it granted*) · an article before a month (*in the October*) · a stray *of* in a quantifier (*the two of export accounts*, *the both of them*) · and a doubled particle (*can be to reviewed*, *rather than on than one*).**',
  '⚠ **And the hardest line is 9, which is CORRECT and looks wrong.** ⚠ *Against fifty-eight at the time of the application* **has no article before *fifty-eight* and a candidate who has found five errors will want a sixth here.** **Say the line aloud without a word and see whether it breaks** — **that is the only test.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** Write a message to your manager about a second letter you are sending (**40 to 50 words**). Include **what has changed** · **what you are asking for** · and **what ends it without a further decision**.'));
out.push(p('**To:** ______________   **From:** ______________   **Date:** ______________   **Subject:** ______________   ⚠ **Two things have changed since ______________: ______________ and ______________.**   ⚠ **I am asking for ______________ for ______________, not ______________.**   ⚠ **If ______________ by ______________, ______________ lapses and nothing further is needed.**   **Words: ______**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.** Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Two changed facts, with dates or periods', ''],
  ['The ask, narrowed, and what it is not', ''],
  ['A lapse sentence', ''],
  ['No concession, and no history', ''],
  ['40 to 50 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the second letter for a refusal at your own work (**200 to 240 words**). Concede it with a figure in the concession, give two changed facts, make the narrow ask with its lapse, add the two-part formula, and explain the interval at the end.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then find one refusal your work believes it has received, establish the words actually used, and ask the person who gave it (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 15 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  Two things ___ changed since July.   a) has   b) have   c) are',
  '2  You were right to decline it ___ the figures you had.   a) in   b) by   c) on',
  '3  We are not asking you ___ the decision of 1 July.   a) reconsider   b) to reconsider   c) reconsidering',
  '4  ___ the new information you may reach a different conclusion.   a) At   b) In   c) On',
  '5  Nothing in it ___ your decision of 1 July.   a) contradicts   b) contradict   c) is contradicting',
  '6  The four million ___ if the period has not held.   a) will lapse   b) lapses   c) is lapsing',
  '7  I have written now ___ the October figure is evidence.   a) because   b) because of   c) for',
  '8  She said she ___ need to think about it.   a) will   b) would   c) would to',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 15.15** Listen to the conversation at the counter. Complete the note.   What the company has assumed, and since when: ______   The words actually used in April: ______   What happened in September: ______   Why it was not written down: ______   What the counter did about the letter: ______   The remedy: ______'));
out.push(p('**C  Reading.** Read the second letter at 15.3 again. Name the three parts of the ask, say which one ends it without a letter, and say why the interval is explained at the end.'));
out.push(p('**D  Writing.** Take a refusal your work has received. Write the concession with a figure in it, one changed fact with its date, and the narrow ask with its lapse (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 15.15  Audio script (read after the check)', [
  ['Nour', 'Ms Tannous has not ordered since April, and her agreed terms of 28 April ran twelve months from 1 May. I am putting the account down as closed for the year.'],
  ['Hala', '⚠ **She telephoned in September. About the fourth of the month. She asked what the bench price was and whether the Monday delivery still ran.**'],
  ['Nour', 'Did you write it down?'],
  ['Hala', '⚠ **No. She did not place an order and there was nothing to write.** **A call where nobody orders anything has nowhere to go.**'],
  ['Nour', 'Since April everybody here has been saying she will not deal with us again after the letter. What did she actually say in April?'],
  ['Hala', '⚠ **She said she would need to think about it.** ⚠ **Nobody has ever said anything else, and nobody has asked her since.**'],
  ['Nour', 'So there has never been a refusal.'],
  ['Hala', '⚠ **There has never been a refusal. There has been seven months of us assuming one.** ⚠ **I gave her the same price as anybody else and I did not mention the letter, because mentioning it would have been about us.**'],
  ['Nour', 'That was the right answer, and nobody told you to give it.'],
  ['Hala', '⚠ **If you want to know whether she has refused us, the way to find out is to ask her.** ⚠ **There is no letter that does the job of a telephone call.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**15.1** test a refusal for a changed fact, and accept _nothing_ as the answer',
  '**15.2** concede a refusal completely, with a figure in the concession and no hinge word after it',
  '**15.3** ask for something narrower, with a period and a lapse, behind a boundary sentence',
  '**15.4** write the two-part sentence that lets somebody change their mind without being wrong',
  '**15.5** decide not to write, and leave four lines behind the decision',
  '**15.6** judge an interval as a fact arriving, and explain a correct one in one sentence at the end',
  '**15.7** find a refusal nobody ever gave, and ask the person who is supposed to have given it',
], C.lblue, C.navy));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 2 · Syria Edition · Unit 15 · Student\'s Book');
module.exports = out;
