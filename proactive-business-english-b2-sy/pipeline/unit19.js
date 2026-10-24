// Proactive Business English B2 · Syria Edition · Book 2 · Unit 19 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a tribunal · an arbitrator · the seat of the arbitration · a pleaded case · a grievance you cannot plead · the relief you are asking for · to put a case in writing first · a statement of case · a witness statement · a document that hurts your own case · to disclose · a disclosure list · a document you would rather not produce · what you cannot prove · an absence inside your own case · to concede a point before it is taken · cross-examination · to answer the question you were asked · to stop when the answer is finished · a question with a premise in it · an offer to settle · the cost of refusing an offer · an offer made outside the record · to be held to your own document · a finding of fact · the issue the tribunal must decide · a point that is not in issue · to narrow the issues · the burden of proving it · a tribunal that is on nobody\'s side · to lose a point and keep the case · the award';
const COLLOC = 'to plead a case · to disclose a document · to narrow the issues · to abandon a point · to answer a question put · to make an offer to settle · to be held to a document · to discharge a burden';
const BACK_AT_B2 = 'a without-prejudice letter · undertaking · on the record';

out.push(h1('Unit 19  Arbitration, and the Room Where Nobody Is on Your Side'));
out.push(p('_Proactive Business English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**19.1**  understand what a tribunal decides, and what it will not decide however badly you were treated',
  '**19.2**  separate the case you can plead from the grievance you actually have',
  '**19.3**  disclose the document that hurts you, and say what it means before the other side does',
  '**19.4**  name the absence inside your own case, and say whose it is',
  '**19.5**  answer the question you were asked, and stop when the answer is finished',
  '**19.6**  answer an offer to settle, and price what refusing it costs',
  '**19.7**  Review & Mediate: the call of 14 May, and the document nobody wants to write',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ Clause 19, and a lawyer who is not on your side either', [
  '⚠ **Clause 19 of the Dallal Freres supply agreement was accepted as drafted on 26 June, and clause 19 says Beirut.** **Nobody read it closely at the time, because nobody expected to use it.**',
  '⚠ **The firm is now using it.** **The bundle runs to two hundred and fourteen pages and twenty-two documents, of which three decide the matter** — ⚠ **and one of the three is a telephone call on 14 May that nobody recorded.**',
  '⚠ **Ms Souad Nahas has been instructed for Sham Trading.** **She is the firm\'s own counsel and she will spend this unit telling Nour things that nobody in the office wants to hear** — ⚠ **beginning with the fact that the tribunal is not interested in whether Dallal Freres behaved badly.**',
  '⚠ **This is the only unit in the course set outside Syria, and it is set in a room where none of the three people deciding anything works for either side.** **Everything the firm has written for three years arrives in that room at once**, ⚠ **and the unit\'s real subject is what it is like to be held to your own documents by somebody who has read them more carefully than you have.**',
], C.lyellow, C.orange));

// ======================= CYCLE 19.1 =======================
out.push(pb());
out.push(h2('19.1  What a tribunal decides'));
out.push(p('**Function:** separating the issue from the injury   ·   **Grammar:** _the tribunal has to decide whether X; it will not decide whether Y_   ·   **Pronunciation:** an issue stated flatly'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a dispute at your work and then say, in one sentence, what somebody outside would have to decide. ⚠ Then say what you would want them to decide, which is usually different.'));
out.push(p('**b**  Which is an issue a tribunal can decide? _Dallal Freres have behaved disgracefully throughout · whether the cartons delivered on 14 October met the specification in clause 6_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Nahas say the tribunal will not decide?   **A** anything   **B** whether the other side behaved badly   **C** the figures'));
out.push(p('**b**  Listen again. **1** What are the three issues she says the tribunal has to decide? **2** What does she say a tribunal being on nobody\'s side actually means?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.1  "That is a grievance. It is not an issue"', [
  ['Nour', 'They changed the specification by letter and then invoiced us for the old one. It is outrageous.'],
  ['Ms Nahas', '⚠ **It may be. That is a grievance.** ⚠ **It is not an issue.**'],
  ['Nour', 'What is the difference?'],
  ['Ms Nahas', '⚠ **An issue is a question the tribunal has to answer in order to decide the case.** ⚠ **A grievance is how you feel about the answer.**'],
  ['Nour', 'Then what are the issues?'],
  ['Ms Nahas', '⚠ **Three.** ⚠ **Did the cartons delivered on 14 October meet clause 6. Did your acceptance page of 24 October bind you. And did anybody agree, on 14 May, to the change you say was agreed.**'],
  ['Nour', 'And whether they behaved badly?'],
  ['Ms Nahas', '⚠ **Not an issue, and the tribunal will stop you if you argue it.** **Not because it does not matter to you** — ⚠ **because no finding about their conduct changes the answer to any of the three questions.**'],
  ['Nour', 'That is a very narrow way of looking at three years.'],
  ['Ms Nahas', '⚠ **It is, and the narrowness is the point of the room.** ⚠ **A tribunal that decided who had behaved better would be deciding something neither of you agreed to put to it.**'],
  ['Nour', 'You said the tribunal is on nobody\'s side.'],
  ['Ms Nahas', '⚠ **I did, and people hear that as a reassurance.** ⚠ **It is not one.** **It means nobody in the room will fill a gap in your case for you, or ask the question that would have helped you, or notice that you are plainly telling the truth.**'],
  ['Nour', 'So what does it mean in practice?'],
  ['Ms Nahas', '⚠ **That everything which has to be in your case has to be put there by you, in writing, before anybody sits down.** **Being right is not a submission.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**An issue, and a grievance**',
  table(['', 'The grievance', 'The issue the tribunal must decide'], [
    ['**conduct**', '⚠ *they have behaved disgracefully throughout*', '⚠ **(not an issue at all** — **no finding about it changes any answer)**'],
    ['**the goods**', '*the cartons were not what we ordered*', '⚠ *whether the cartons delivered on 14 October met the specification in clause 6*'],
    ['**the signature**', '*we were rushed into signing*', '⚠ *whether the acceptance page of 24 October binds Sham Trading*'],
    ['⚠ **the call**', '*everybody knows what was agreed*', '⚠ *whether anybody agreed, on 14 May, to the change relied on* — **and this is the issue with nothing behind it**'],
  ], [1.3, 3.3, 4.4]),
  '⚠ **An issue is a question somebody must answer to decide the case; a grievance is how you feel about the answer.** ⚠ **The test is mechanical: if the tribunal found in your favour on this point, would the outcome change?** **If not, it is a grievance, and arguing it costs you the room\'s attention.**',
  '⚠ **State an issue as a question with a date and a clause in it.** ⚠ *Whether the cartons delivered on 14 October met the specification in clause 6.* **Not *whether the goods were satisfactory*, which has no answer.**',
  '⚠ **A tribunal on nobody\'s side is not a reassurance and learners always hear it as one.** ⚠ **It means nobody will fill a gap in your case, ask the question that would have helped you, or notice that you are obviously telling the truth** — **three things a colleague does automatically and a tribunal does not do at all.**',
  '⚠ **So everything that has to be in your case has to be put there by you, in writing, before anybody sits down.** ⚠ *Being right is not a submission.* **That sentence is the whole of Unit 19 and it is worth memorising in those five words.**',
  '**Practise:** Take a dispute at your work. Write the grievance, then write the issue. Then apply the test: would a finding in your favour change the outcome?',
  '**Useful phrases:**  that is a grievance, not an issue  ·  would the outcome change?  ·  on nobody\'s side  ·  nobody will fill a gap for you  ·  being right is not a submission',
  '**Pronunciation – an issue stated flatly.** 🔊 **Track 19.2** Listen twice. ⚠ **The first says *whether the cartons delivered on 14 October met the specification in clause 6* evenly, as a question.** ⚠ **The second leans on *met*.** **Even, it is an issue; leaned on, it is an accusation with a date attached, and the room hears the difference immediately.** Say it four times, evenly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A brings a grievance; B turns it into an issue.'));
out.push(dlg(null, [
  ['A', 'The problem is that __________.'],
  ['B', '⚠ **Is that an issue or a grievance?**'],
  ['A', '__________.'],
  ['B', '⚠ **If a tribunal found for you on it, would the outcome change?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then state the issue as a question, with a date and a clause.**'],
  ['A', '__________.'],
  ['B', '⚠ **And what would you have to put in writing for anybody to answer it?**'],
  ['A', '__________.'],
  ['B', '⚠ **Because nobody in the room will put it there for you.**'],
]));
out.push(table(['Role card 1 — but they behaved badly', 'Role card 2 — surely they can see we are honest'], [[
  '⚠ **A insists that the other side\'s conduct is the heart of the case and cannot simply be excluded.** ⚠ **B agrees it is the heart of the dispute and asks which of the three issues a finding about it would change.** ⚠ **B\'s point: none, so arguing it spends the room\'s attention on a point that cannot help** — **and a tribunal that stops you mid-argument has taken something from your better points.**',
  '⚠ **A says the tribunal will see that Sham Trading is straightforward and Dallal Freres are not.** ⚠ **B asks who in the room is going to say so.** ⚠ **B\'s point: nobody fills a gap, nobody asks the helpful question, nobody notices the obvious** — **and *being right is not a submission* is the sentence to take out of the unit.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write one grievance and the issue beside it. ⚠ Then say the three things nobody in the room will do for you.'));
out.push(PHRASE_CARD(['grievance or issue?', 'would the outcome change?', 'with a date and a clause', 'nobody fills a gap', 'being right is not a submission']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** disputes at your work.'));
out.push(table(['The grievance', 'The issue, as a question with a date', 'Would a finding change the outcome?', 'What you would have to put in writing'], [['', '', '', ''], ['', '', '', '']], [2.2, 2.8, 2, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The grievance is _______. The issue is whether _______, on _______, under _______. A finding would _______ change the outcome. And I would have to put _______ in writing._'));
out.push(p('**Listener task:** count how many of the grievances turn out not to be issues. ⚠ Then ask, of the real issues, how many could be proved from documents that already exist.'));
out.push(p('**Board clinic:** your teacher writes four statements on the board — find the one that is a grievance in the shape of an issue, and the one whose issue has no date in it. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**SHAM TRADING — THE ISSUES, AS WE UNDERSTAND THEM. Note to the file, 3 March. N. Mansour, on the advice of S. Nahas.**',
  '⚠ **The tribunal has to answer three questions. Nothing else it might find would change the outcome.**',
  table(['The issue', 'Who has to prove it', 'What we have'], [
    ['**whether the cartons delivered on 14 October met the specification in clause 6**', '**Dallal Freres, since they allege conformity**', '**the gate sheet, the rejection note of 15 October, and forty cartons still held**'],
    ['**whether the acceptance page of 24 October binds us**', '⚠ **us, since we say it does not**', '⚠ **the covering letter, which is weaker than we remembered** — **see page 2**'],
    ['⚠ **whether anybody agreed, on 14 May, to the change we rely on**', '⚠ **us, since we assert it**', '⚠ **nothing in writing at all** — **see page 3**'],
  ], [3.6, 2.4, 3]),
  '⚠ **Three things follow from that table and all three are uncomfortable.**',
  '**First, we carry the burden on two of the three issues.** ⚠ **We had assumed, for two years, that Dallal Freres had to prove their case and we had to answer it.** **That is true of the first issue only.** **On the other two we assert something, so we must prove it.**',
  '⚠ **Second, the issue on which we have nothing is the one everybody in this office is most certain about.** **Four people remember the call of 14 May and two of them remember it differently.** **Certainty is not evidence and the tribunal will not treat it as any.**',
  '⚠ **Third, our conduct case has gone.** **Dallal Freres changed the specification by letter in June and invoiced on the old one in July, and Ms Nahas has advised that no finding about that changes the answer to any of the three questions.** ⚠ **It is the thing the office is angriest about and it is not in the case.** **I am recording that it was advised and accepted, with the date, so that nobody in two years thinks it was forgotten.**',
  '⚠ **What I am NOT recording here.** **I have not written what I think the tribunal will decide.** **Ms Nahas has given a view and it is in her note of 1 March**, ⚠ **and a note in the company\'s own file predicting an outcome would be read, if it were ever produced, as the company\'s own assessment of its case** — **which is a thing we would rather not hand to anybody.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'On how many of the three issues does Sham Trading carry the burden, and what had the office assumed?'));
out.push(item('2', 'What does the writer say about the issue the office is most certain about?'));
out.push(item('3', 'Why has the writer not recorded what she thinks the tribunal will decide?'));
out.push(box('Writer\'s box', [
  '**The issues note — five parts:** ⚠ **the issues as questions with dates and clauses** → ⚠ **who has to prove each one** → **what you actually have on each** → ⚠ **what follows, including what you have lost** → ⚠ **and what you are deliberately not writing down.**',
  '⚠ **Put *who has to prove it* in its own column.** ⚠ **It is the column that changes how a firm reads its own case** — **a firm that assumed it was answering a case and discovers it is making one on two of three issues has learned the most useful thing in the unit from a table.**',
  '⚠ **Say what you have on each issue, including *nothing in writing at all*.** ⚠ **Those five words are worth more than a paragraph of hope**, **and they belong in the row rather than in a footnote, because a reader skims rows.**',
  '⚠ **Name the point you have lost, with the advice and its date.** ⚠ *It is the thing the office is angriest about and it is not in the case.* **And record that it was advised and accepted** — **so that nobody in two years thinks it was forgotten rather than decided.**',
  '⚠ **Distinguish certainty from evidence, in writing, once.** ⚠ *Four people remember the call and two of them remember it differently. Certainty is not evidence.* **A firm that has not had that sentence written down will arrive in the room expecting to be believed.**',
  '⚠ **And say what you are NOT putting in the file, with the reason.** ⚠ **A company\'s own note predicting the outcome reads, if it is ever produced, as the company\'s assessment of its own case.** **The restraint is worth recording because the next person will otherwise write exactly that note.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an issues note for a dispute at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________ — THE ISSUES, AS WE UNDERSTAND THEM. ______________. ______________.**   ⚠ **The questions that have to be answered are ______________. Nothing else would change the outcome.**   **The issue** | ⚠ **Who has to prove it** | **What we have**   **______________** | **______________** | **______________**   **______________** | ⚠ **______________** | ⚠ **______________**   ⚠ **______________** | ⚠ **us, since we assert it** | ⚠ **______________**   ⚠ **What follows. First, ______________.** ⚠ **Second, ______________.** ⚠ **Third, ______________, and I am recording that it was advised and accepted on ______________.**   ⚠ **What I am NOT recording here. ______________, because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every issue a question with a date and a clause', ''],
  ['A *who has to prove it* column on every row', ''],
  ['*Nothing in writing at all* where that is the answer', ''],
  ['The point lost, with the advice and its date', ''],
  ['What is deliberately not written down, and why', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *who has to prove it* column. ⚠ The class says of each whether the writer had assumed it the other way round.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a dispute at your work (**200 to 240 words**). Say what the grievance is, what the issues are, who would have to prove each, what you have, and which part of your anger is not in the case.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _issue or grievance?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the strongest feeling attached to something that is not an issue? ⚠ **Usually all three** — **and that is not a criticism of anybody; it is what a dispute feels like from inside a company.**'));
out.push(box('Homework', ['Write your final text. Then take one dispute at your work and write its issues as questions with dates and clauses, with who has to prove each (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 19.2 =======================
out.push(pb());
out.push(h2('19.2  The case you can plead'));
out.push(p('**Function:** putting a case in writing before anybody argues it   ·   **Grammar:** _we say that X; we do not say that Y_   ·   **Pronunciation:** a pleaded sentence read without emphasis'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something you believe about a dispute at your work that you could not prove. ⚠ Then say whether you would still put it in writing.'));
out.push(p('**b**  Which can be pleaded? _they knew perfectly well what we meant · on 14 May the parties agreed by telephone to substitute the revised specification; Sham Trading cannot produce a record of that call_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Nahas strike out of Nour\'s draft?   **A** the dates   **B** every sentence that says what the other side knew or intended   **C** the figures'));
out.push(p('**b**  Listen again. **1** Why does she say *they knew perfectly well* cannot be pleaded? **2** What does she say a pleading is for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.3  "You cannot plead what somebody knew"', [
  ['Ms Nahas', 'I have struck out nine sentences of your draft. They are all the same sentence.'],
  ['Nour', 'Which one?'],
  ['Ms Nahas', '⚠ **Every sentence that says what Dallal Freres knew, meant, understood or intended.** ⚠ **You cannot plead the inside of somebody\'s head.**'],
  ['Nour', 'They did know.'],
  ['Ms Nahas', '⚠ **Very probably. And you cannot prove it, and a pleaded case is a list of things you say you can prove.** ⚠ **What you can plead is what they did** — **the letter of 3 June, the invoice of 11 July, and the difference between them.**'],
  ['Nour', 'That is weaker.'],
  ['Ms Nahas', '⚠ **It is narrower and it is very much stronger**, **because every sentence in it survives being tested.** ⚠ **Nine sentences about their state of mind would have been attacked one at a time, and each one you lost would have made the rest look like guessing.**'],
  ['Nour', 'What is a pleading actually for?'],
  ['Ms Nahas', '⚠ **It tells the other side what they have to answer and it tells the tribunal what it has to decide.** ⚠ **That is all it does, and it is more than enough.**'],
  ['Nour', 'And the things we believe but cannot prove?'],
  ['Ms Nahas', '⚠ **Say them to me and never write them anywhere.** ⚠ **A belief in a pleading becomes a thing you have asserted and failed to establish** — **and a tribunal counts those.**'],
  ['Nour', 'And what we do not say?'],
  ['Ms Nahas', '⚠ **Write that down too, in the same document, in one line.** ⚠ *Sham Trading does not allege bad faith.* **Four words that stop a week of argument, and they cost you nothing, because you were never going to win it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**What can be pleaded, and what cannot**',
  table(['', 'Cannot be pleaded', 'Can be pleaded'], [
    ['**the inside of a head**', '⚠ *they knew perfectly well what we meant*', '⚠ *on 3 June they wrote X; on 11 July they invoiced for Y*'],
    ['**a character**', '*they have been obstructive throughout*', '**(nothing** — **and say so: *Sham Trading does not allege bad faith*)**'],
    ['**an impression**', '*it was obvious to everybody*', '⚠ *the revised specification was sent to four addressees on 3 June*'],
    ['⚠ **a thing you believe**', '⚠ *there was plainly an agreement*', '⚠ *on 14 May the parties agreed by telephone; Sham Trading cannot produce a record of that call*'],
  ], [1.6, 3.2, 4.2]),
  '⚠ **A pleaded case is a list of things you say you can prove.** ⚠ **Not things that are true** — **things you can establish** — **and the distinction is the whole document.**',
  '⚠ **You cannot plead what somebody knew, meant, understood or intended.** ⚠ **Plead what they DID, with a date: wrote, sent, invoiced, signed, delivered.** **A verb somebody could have been seen doing is pleadable; a verb that happens inside a head is not.**',
  '⚠ **Narrower is stronger, and this is the hardest thing in the cycle to believe.** ⚠ **Nine sentences about a state of mind are attacked one at a time, and each one lost makes the rest look like guessing** — **so the weakest sentence in a pleading sets the weight of all of them.**',
  '⚠ **And write down what you do NOT say, in one line.** ⚠ *Sham Trading does not allege bad faith.* **Four words that stop a week of argument and cost nothing, because you were never going to win it** — **and the other side cannot prepare against a case you have disclaimed.**',
  '⚠ **A belief put in a pleading becomes a thing asserted and not established.** ⚠ **Tribunals count those** — **so a sentence you cannot prove does not sit there harmlessly; it is a debit.**',
  '**Practise:** Take three sentences you would write about a dispute. Cross out every verb that happens inside somebody\'s head and rewrite with a verb somebody could have been seen doing.',
  '**Useful phrases:**  you cannot plead the inside of a head  ·  what they did, with a date  ·  narrower and very much stronger  ·  asserted and not established  ·  we do not allege',
  '**Pronunciation – a pleaded sentence.** 🔊 **Track 19.4** Listen twice. ⚠ **The first reads *on 3 June they wrote X and on 11 July they invoiced for Y* flatly, as two facts.** ⚠ **The second stresses *and*.** **Flat, the reader draws the conclusion; stressed, you have drawn it for them, and a pleading that argues is a pleading that can be answered.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A offers a sentence; B tests whether it can be pleaded.'));
out.push(dlg(null, [
  ['A', 'I want to say that __________.'],
  ['B', '⚠ **Where does that verb happen? Inside a head, or where somebody could see it?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then give me what they DID, with a date.**'],
  ['A', '__________.'],
  ['B', '⚠ **Can you prove that?**'],
  ['A', '__________.'],
  ['B', '⚠ **And is there anything you want to say you are NOT alleging?**'],
  ['A', '__________.'],
  ['B', '⚠ **Say it in one line and you have saved a week.**'],
]));
out.push(table(['Role card 1 — it is weaker', 'Role card 2 — but it is true'], [[
  '⚠ **A objects that a pleading limited to what the other side did is weaker than one that says what they knew.** ⚠ **B asks what happens to nine state-of-mind sentences under attack.** ⚠ **B\'s point: they are attacked one at a time and each one lost makes the rest look like guessing** — **so the weakest sentence sets the weight of all of them, and narrower is stronger.**',
  '⚠ **A insists that the belief is simply true and that a document which leaves it out is dishonest by omission.** ⚠ **B distinguishes true from provable and asks what a tribunal does with an assertion that fails.** ⚠ **B\'s point: it becomes a thing asserted and not established, which is a debit rather than a neutral** — **and the place for a true belief you cannot prove is a conversation with your own lawyer.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** rewrite one state-of-mind sentence as a did-sentence with a date. ⚠ Then write one *we do not allege* line.'));
out.push(PHRASE_CARD(['inside a head?', 'what they did, with a date', 'can you prove it?', 'narrower is stronger', 'we do not allege']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** things you would want to say about a dispute.'));
out.push(table(['As you would say it', 'The verb, and where it happens', 'As it can be pleaded', 'Can you prove it?'], [['', '', '', ''], ['', '', '', '']], [2.4, 2.2, 2.8, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I would want to say _______. That verb happens _______. Pleaded, it becomes _______, on _______. I _______ prove it. And I would add that we do not allege _______._'));
out.push(p('**Listener task:** count how many of the original sentences had a verb that happens inside a head. ⚠ Then ask how many of the rewritten versions are provable from a document that exists.'));
out.push(p('**Board clinic:** your teacher writes four pleaded sentences on the board — find the one that still says what somebody understood, and the one that argues instead of stating. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the extract, and answer the questions.'));
out.push(box(null, [
  '**IN THE MATTER OF AN ARBITRATION  ·  SHAM TRADING AND DALLAL FRERES  ·  STATEMENT OF CASE OF SHAM TRADING  ·  Extract: paragraphs 7 to 12. 10 March.**',
  '**7.  On 3 June the Respondent sent a revised specification, document R4, to four addressees at the Claimant, including the administration office.**',
  '**8.  On 11 July the Respondent invoiced the Claimant at the rate stated in the superseded specification, document R7.**',
  '**9.  On 14 October the Respondent delivered one hundred and twenty cartons. The Claimant rejected forty of them on 15 October by the note at C9, on the ground that the contents did not meet clause 6. Those forty cartons remain in the Claimant\'s warehouse and are available for inspection.**',
  '⚠ **10.  The Claimant signed the acceptance page on 24 October. The Claimant says that the acceptance page recorded receipt and not conformity, and relies on the covering letter at C11. The Claimant accepts that the covering letter does not use the word *conformity*.**',
  '⚠ **11.  The Claimant says that on 14 May the parties agreed by telephone to substitute the revised specification for the original. The Claimant cannot produce any record of that call. The absence of a record is the Claimant\'s own, and is addressed at paragraphs 20 to 23 below.**',
  '⚠ **12.  The Claimant does not allege bad faith, and does not allege that the Respondent knew or intended anything. Nothing in this Statement of Case depends on the Respondent\'s state of mind.**',
  '⚠ **A note on what these six paragraphs do not contain.** **There is no adjective in them about either party.** **There is nothing about what anybody knew, meant or understood** — ⚠ **paragraph 12 says so expressly, which is how you stop the other side preparing an answer to a case you are not making.**',
  '⚠ **And paragraph 10 concedes a word.** **The covering letter does not say *conformity*, which is the best point Dallal Freres have on that issue, and it is in our own document before it is in theirs** — ⚠ **because a concession made in your own pleading is a fact, and the same concession extracted from you in the room is a wound.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What do paragraphs 7 and 8 do, and what do they not do?'));
out.push(item('2', 'What does paragraph 12 say, and what does it prevent?'));
out.push(item('3', 'Why is the concession in paragraph 10 made in Sham Trading\'s own document?'));
out.push(box('Writer\'s box', [
  '**A pleaded paragraph — five rules:** ⚠ **one fact, one date, one document reference** → ⚠ **a verb somebody could have been seen doing** → **no adjectives about either party** → ⚠ **your own weakest point conceded in your own words** → ⚠ **and an express line saying what you do not allege.**',
  '⚠ **One fact, one date, one reference, and number the paragraph.** ⚠ *On 3 June the Respondent sent a revised specification, document R4, to four addressees.* **A paragraph with two facts in it can be half admitted, and a half admission is the worst answer you can be given.**',
  '⚠ **Use verbs of action: sent, invoiced, delivered, rejected, signed.** ⚠ **Never knew, meant, understood, intended, realised, appreciated** — **and a draft can be checked for all six in a minute.**',
  '⚠ **No adjectives about either party.** ⚠ **Read the draft and delete every one** — *obstructive, careless, straightforward, reasonable*. **A pleading with no adjectives in it reads as confident; one with adjectives reads as a complaint, and a complaint invites a reply in kind.**',
  '⚠ **Concede your weakest point in your own words, on your own page.** ⚠ *The Claimant accepts that the covering letter does not use the word conformity.* **The same concession extracted in the room is a wound; in your own pleading it is a fact you have already priced.**',
  '⚠ **And put the disclaimer in expressly, as its own paragraph.** ⚠ *The Claimant does not allege bad faith, and does not allege that the Respondent knew or intended anything.* **It is the cheapest paragraph in any pleading** — **it narrows the issues, it costs a case you could not win, and it stops the other side answering an argument you are not making.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write five numbered paragraphs of a statement of case for a dispute at your work (**80 words or more**). Use the frame.'));
out.push(p('**IN THE MATTER OF ______________  ·  STATEMENT OF CASE OF ______________  ·  ______________.**   **1.  On ______________ the Respondent ______________, document ______________.**   **2.  On ______________ the Respondent ______________, document ______________.**   ⚠ **3.  The Claimant says that ______________. The Claimant relies on ______________. The Claimant accepts that ______________.**   ⚠ **4.  The Claimant says that ______________. The Claimant cannot produce ______________. The absence is the Claimant\'s own.**   ⚠ **5.  The Claimant does not allege ______________, and does not allege that the Respondent ______________. Nothing in this Statement of Case depends on ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['One fact, one date, one reference per paragraph', ''],
  ['No *knew, meant, understood, intended*', ''],
  ['No adjectives about either party', ''],
  ['The weakest point conceded, in the writer\'s own words', ''],
  ['An express *we do not allege* paragraph', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *we do not allege* paragraph. ⚠ The class says of each what week of argument it has just prevented.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the difference between what you believe about a dispute and what you could prove (**200 to 240 words**). Say what you believe, what the evidence for it is, what you would plead, and what you would say you are not alleging.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _could this be proved, or only believed?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the belief stronger than the evidence? ⚠ **Usually all three, and that is the normal condition of a party to a dispute** — **the unit\'s work is making the gap visible before somebody else finds it.**'));
out.push(box('Homework', ['Write your final text. Then take one paragraph you have written about a dispute and strike out every verb that happens inside somebody\'s head (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 19.3 =======================
out.push(pb());
out.push(h2('19.3  The document that hurts you'));
out.push(p('**Function:** disclosing against yourself, and saying what it means first   ·   **Grammar:** _we disclose X; X does not assist us, and here is what it does show_   ·   **Pronunciation:** a harmful document named without apology'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a document at your work that you would not want an opponent to read. ⚠ Then say what they would make of it.'));
out.push(p('**b**  Which is better for you? _we have not listed the internal note of 2 September · we disclose the internal note of 2 September; it does not assist us, and what it actually shows is that one person in this office had doubts and recorded them_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub want to leave off the disclosure list?   **A** nothing   **B** his own note of 2 September   **C** the gate sheets'));
out.push(p('**b**  Listen again. **1** What are the two reasons Ms Nahas gives for disclosing it? **2** What does she say the note actually shows, which is not what he fears?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.5  "They will get it from somewhere and they will get it without your explanation"', [
  ['Mr Ayoub', 'The note of 2 September. I wrote it and I would rather it did not go on the list.'],
  ['Ms Nahas', '⚠ **Tell me what it says.**'],
  ['Mr Ayoub', 'That I was not sure the covering letter was strong enough. In September. Before any of this.'],
  ['Ms Nahas', '⚠ **It goes on the list, and for two reasons.** ⚠ **The first is that you are obliged to list it, and a document you have withheld, found later, destroys a case that was otherwise winnable.**'],
  ['Mr Ayoub', 'And the second?'],
  ['Ms Nahas', '⚠ **It is copied to Mr Attar.** ⚠ **So they will get it from somewhere, and if they get it from somewhere they will get it without your explanation attached.**'],
  ['Mr Ayoub', 'My explanation does not help. The note says the letter is weak.'],
  ['Ms Nahas', '⚠ **Read me the whole sentence.**'],
  ['Mr Ayoub', '"The covering letter may not be strong enough and we should ask them to confirm the position in writing."'],
  ['Ms Nahas', '⚠ **And did anybody ask them?**'],
  ['Mr Ayoub', 'No.'],
  ['Ms Nahas', '⚠ **Then the note does not show what you are afraid of.** ⚠ **It shows that in September this company identified the exact weakness it is now litigating, in writing, and proposed the correct remedy** — **and that nobody carried it out.** **That is not a document about you being wrong. It is a document about you being right and nothing happening.**'],
  ['Mr Ayoub', 'It is still a document about a failure.'],
  ['Ms Nahas', '⚠ **It is, and it is a failure of the office and not of your judgement, which is a materially better document than the one you have been imagining for a week.** ⚠ **Disclose it, and put that sentence in the list beside it, in your words** — **because the explanation only travels with the document if you attach it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Disclosing a document that hurts you**',
  table(['', 'The instinct', 'What to write instead'], [
    ['**the listing**', '⚠ *leave it off and hope*', '⚠ *we disclose the internal note of 2 September* — **with the reference**'],
    ['**the framing**', '**(nothing, and let them frame it)**', '⚠ *it does not assist us on this issue*'],
    ['⚠ **the reading**', '**(none** — **you have conceded and stopped)**', '⚠ *what it shows is that the weakness was identified in September, in writing, with the correct remedy proposed*'],
    ['⚠ **the residue**', '*and therefore it does not matter*', '⚠ *and that nobody carried the remedy out* — **the part that still hurts, said by you**'],
  ], [1.4, 2.8, 4.8]),
  '⚠ **Two reasons to disclose, and the second does more work than the first.** ⚠ **You are obliged to** — **and a withheld document found later destroys a case that was otherwise winnable.** ⚠ **And it is copied to somebody**, **so they will get it anyway, and if they get it from somewhere else they get it without your explanation attached.**',
  '⚠ **Read the whole sentence before you decide a document hurts you.** ⚠ **Mr Ayoub had been dreading nine words and the sentence runs to twenty** — **and the second half changes what the document is.**',
  '⚠ **Then give the document its reading, in four moves:** ⚠ **disclose it · say it does not assist you · say what it DOES show · and keep the part that still hurts.** **A reading that leaves nothing hurting is a reading nobody believes.**',
  '⚠ **The strongest reading is almost never the one you feared.** ⚠ *A document about you being right and nothing happening* **is a different thing from a document about you being wrong** — **and the difference was in the sentence all along.**',
  '⚠ **And the explanation only travels with the document if you attach it.** ⚠ **A list that says *internal note, 2 September* and nothing else has handed over a document and kept the understanding of it.**',
  '**Practise:** Take a document of yours that would hurt you. Read the whole of it. Then write the four moves.',
  '**Useful phrases:**  we disclose  ·  it does not assist us  ·  what it shows is  ·  read me the whole sentence  ·  right, and nothing happened',
  '**Pronunciation – a harmful document, named without apology.** 🔊 **Track 19.6** Listen twice. ⚠ **The first says *we disclose the internal note of 2 September; it does not assist us* at an even pace.** ⚠ **The second drops in volume on *it does not assist us*.** **Even, it is a disclosure; quieter, it is a confession, and the room hears which one you think it is.** Say it four times, even.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a document they want to withhold; B works the four moves.'));
out.push(dlg(null, [
  ['A', 'There is a document that says __________. I would rather not list it.'],
  ['B', '⚠ **Who else has a copy?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then read me the whole sentence, not the part you have been dreading.**'],
  ['A', '__________.'],
  ['B', '⚠ **What does that actually show?**'],
  ['A', '__________.'],
  ['B', '⚠ **And what is still against you in it?**'],
  ['A', '__________.'],
  ['B', '⚠ **Good. Now write all four, in that order, beside the reference.**'],
]));
out.push(table(['Role card 1 — nobody will find it', 'Role card 2 — my explanation does not help'], [[
  '⚠ **A believes the document is internal and will never surface.** ⚠ **B asks who was copied, and the answer is the auditor.** ⚠ **B\'s point: a withheld document found later destroys a case that was otherwise winnable, and the arithmetic is not close** — **the document costs a point and the withholding costs the case.**',
  '⚠ **A has read the first nine words of their own note for a week and concluded it is fatal.** ⚠ **B asks for the whole sentence, and the second half proposes the correct remedy.** ⚠ **B\'s point: the document is about being right and nothing happening, not about being wrong** — **and A would never have found that out without reading past the part that frightened them.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four moves for one document of your own. ⚠ Then say what is still against you in it, because a reading with nothing left hurting is not believed.'));
out.push(PHRASE_CARD(['who else has a copy?', 'the whole sentence', 'what it shows is', 'what is still against you', 'attach the explanation']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** documents that would hurt you.'));
out.push(table(['The document', 'Who else has it', 'What it actually shows', 'What is still against you'], [['', '', '', ''], ['', '', '', '']], [2, 1.8, 3, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The document is _______. _______ also has it. The whole sentence says _______. So what it shows is _______. And what is still against us is _______._'));
out.push(p('**Listener task:** count how many of the documents were already in somebody else\'s hands. ⚠ Then ask how many of the writers had read the whole of the sentence they were afraid of.'));
out.push(p('**Board clinic:** your teacher writes four disclosure entries on the board — find the one that discloses and gives no reading, and the one whose reading leaves nothing hurting. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the list, and answer the questions.'));
out.push(box(null, [
  '**SHAM TRADING — DISCLOSURE LIST, PART 2: DOCUMENTS THAT DO NOT ASSIST US. 14 March. N. Mansour.**',
  '⚠ **Part 1 of this list is the twenty-two documents in the bundle. This is Part 2, and it is the part that matters.**',
  table(['Reference', 'The document', 'What it shows, in our words'], [
    ['**C14**', '**internal note, K. Ayoub to N. Sayegh, 2 September, copied to Z. Attar**', '⚠ **that the weakness in the covering letter was identified here, in writing, in September, and that the correct remedy — asking Dallal Freres to confirm the position in writing — was proposed and not carried out.** ⚠ **It does not assist us on issue 2. What is against us in it is that we had six weeks and did nothing.**'],
    ['**C19**', '**e-mail, N. Mansour to B. Nassif, 3 November**', '⚠ **that the writer of this list described the acceptance page as "probably binding" six days after signing it.** ⚠ **It does not assist us. What is against us is that it is my own contemporaneous view and it is against our pleaded case on issue 2.** **I am listing it myself and in my own name.**'],
    ['**C21**', '**four internal letters, March to July, about the Homs closure**', '**that four letters were written about a decision and none of them records a reason.** ⚠ **Not relevant to any issue; listed because it was in the same file and we are not making the other side guess what the file contains.**'],
  ], [1, 2.6, 5.4]),
  '⚠ **Why Part 2 exists at all, and it is not candour for its own sake.** **Every document here was copied to somebody outside this company or sits in a file the other side will see.** ⚠ **They will arrive with all three.** **The only thing in our gift is whether they arrive with our reading attached or with nothing attached.**',
  '⚠ **The hardest entry is C19 and it is mine.** **I described the acceptance page as probably binding, in writing, six days after signing it, and our pleaded case says it is not.** ⚠ **That is a contemporaneous view of the party asserting the opposite, which is the most damaging kind of document there is.** **It is listed, it is described accurately, and I am not going to be asked about it for the first time in a room in Beirut.**',
  '⚠ **One thing I have NOT done.** **I have not written, against any entry, that the document is unimportant.** ⚠ **C19 is important and saying otherwise would be the only sentence on this page that nobody could believe** — **and a list with one unbelievable sentence in it is read as a list of unbelievable sentences.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What reason does the writer give for Part 2 existing, and what does she say is the only thing in the firm\'s gift?'));
out.push(item('2', 'Why is C19 the hardest entry, and what has the writer done about it?'));
out.push(item('3', 'What has the writer deliberately not written against any entry, and why?'));
out.push(box('Writer\'s box', [
  '**The against-us disclosure list — five parts:** ⚠ **a reference, the document, and what it shows IN YOUR WORDS** → **the words *it does not assist us*, said plainly** → ⚠ **what is still against you, in each entry** → ⚠ **why the list exists, which is not candour** → ⚠ **and nothing anywhere calling a damaging document unimportant.**',
  '⚠ **Give the third column to YOUR reading, and make it longer than the document\'s description.** ⚠ **A reference and a title hand over a document and keep nothing** — **the reading is the only part of this exercise that is in your gift.**',
  '⚠ **Say *it does not assist us* in those words, and then keep going.** ⚠ **The concession is four words; the useful part is the sentence after it.** **A writer who concedes and stops has done the painful half and skipped the valuable half.**',
  '⚠ **Name what is STILL against you in each entry.** ⚠ *We had six weeks and did nothing.* **A reading that leaves nothing hurting is not believed, and one damaged entry makes the whole list look arranged.**',
  '⚠ **Give the reason the list exists, and make it practical rather than noble.** ⚠ *They will arrive with all three. The only thing in our gift is whether our reading is attached.* **A list justified by candour invites the question of how candid; one justified by inevitability invites nothing.**',
  '⚠ **And never write that a damaging document is unimportant.** ⚠ **One unbelievable sentence turns a list of believable ones into a list of unbelievable ones** — **which is a very expensive way to save four words.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a Part 2 disclosure list for a dispute at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________ — DISCLOSURE LIST, PART 2: DOCUMENTS THAT DO NOT ASSIST US. ______________. ______________.**   **Reference** | **The document** | ⚠ **What it shows, in our words**   **______________** | **______________** | ⚠ **______________. It does not assist us on ______________. What is against us in it is ______________.**   **______________** | **______________** | ⚠ **______________. It does not assist us. What is against us is ______________.**   ⚠ **Why Part 2 exists. ______________.** ⚠ **The only thing in our gift is ______________.**   ⚠ **The hardest entry is ______________, and ______________.**   ⚠ **One thing I have NOT done. ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A reading in the writer\'s own words, on every entry', ''],
  ['*It does not assist us*, and then more', ''],
  ['What is still against the writer, in each entry', ''],
  ['A practical reason for the list, not a noble one', ''],
  ['Nothing calling a damaging document unimportant', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *what is still against us* clauses. ⚠ The class says of each whether it costs the writer anything at all.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a document at your work that would hurt you in a dispute (**200 to 240 words**). Say what it is, who else has it, what the whole sentence says, what it actually shows, and what is still against you.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _does this reading leave anything hurting?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the document already in somebody else\'s hands? ⚠ **Usually all three** — **because the documents that hurt a company are the ones it sent somewhere, and the ones it kept to itself are rarely the dangerous half.**'));
out.push(box('Homework', ['Write your final text. Then take one document that would hurt you, read the whole of the sentence you fear, and write the four moves beside its reference (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 19.4 =======================
out.push(pb());
out.push(h2('19.4  The absence inside your own case'));
out.push(p('**Function:** pleading a gap in your own evidence   ·   **Grammar:** _we cannot produce X; the absence is ours; what we can show is Y_   ·   **Pronunciation:** an absence owned in four words'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something you would have to prove in a dispute and could not. ⚠ Then say whose fault the gap is.'));
out.push(p('**b**  Which is better in your own pleading? _there is no record of the call of 14 May · there is no record of the call of 14 May; the absence is ours, because the call was ours to confirm and nobody confirmed it_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Nahas say about the absence of a record?   **A** hide it   **B** plead it, own it, and then say what can be shown instead   **C** it is fatal'));
out.push(p('**b**  Listen again. **1** Why does she say an absence pleaded is better than an absence found? **2** What are the three things she says can be shown instead of the call?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.7  "Plead the hole"', [
  ['Nour', 'The call of 14 May. We have nothing. No note, no e-mail, no diary entry.'],
  ['Ms Nahas', '⚠ **Then plead the hole.** ⚠ **In your own Statement of Case, in its own paragraph, before anybody asks you a question about it.**'],
  ['Nour', 'Why would we draw attention to our weakest point?'],
  ['Ms Nahas', '⚠ **Because the attention is coming.** ⚠ **An absence you have pleaded is a fact in the case; an absence found in cross-examination is a collapse** — **and they are the same absence.**'],
  ['Nour', 'And whose fault do we say it is?'],
  ['Ms Nahas', '⚠ **Ours. In four words.** ⚠ *The absence is the Claimant\'s own.* **Do not reach for a reason, do not say the line was bad, and do not say everybody was busy.**'],
  ['Nour', 'That is a lot to concede in four words.'],
  ['Ms Nahas', '⚠ **It concedes nothing that was in doubt** — **the record either exists or it does not, and it does not.** ⚠ **What the four words buy is that nothing else you say about the call can be attacked as evasion.**'],
  ['Nour', 'And then we stop?'],
  ['Ms Nahas', '⚠ **No. Then you say what you CAN show, and there is more than you think.** ⚠ **Three things.** **That the revised specification was sent on 3 June to four addressees, which is consistent with something having been agreed in May. That Dallal Freres produced no record of the call either, so the absence is not one-sided. And that their own stock sheets for June are drawn to the revised figures.**'],
  ['Nour', 'The third one is the strongest.'],
  ['Ms Nahas', '⚠ **It is the only one that is nearly evidence, and you only find it by asking what a world in which the call happened would look like.** ⚠ **A hole in your case is not a hole in the world** — **something followed from that call, and the things that followed are in documents.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Pleading an absence in your own case**',
  table(['', 'The move', 'The words'], [
    ['**1 plead it**', '**in its own paragraph, before anybody asks**', '⚠ *The Claimant cannot produce any record of that call.*'],
    ['⚠ **2 own it**', '⚠ **four words, and no reason given**', '⚠ *The absence is the Claimant\'s own.*'],
    ['⚠ **3 show it is not one-sided**', '**where that is true**', '⚠ *The Respondent has produced no record of the call either.*'],
    ['⚠ **4 say what followed**', '⚠ **the strongest move, and the one nobody makes**', '⚠ *The revised specification was sent on 3 June; the Respondent\'s own June stock sheets are drawn to the revised figures.*'],
  ], [1.8, 3, 4.2]),
  '⚠ **An absence pleaded is a fact in the case; an absence found in cross-examination is a collapse.** ⚠ **They are the same absence**, **and the only difference is who said it first and in what tone.**',
  '⚠ **Own it in four words and give no reason.** ⚠ *The absence is the Claimant\'s own.* **Not *the line was bad*, not *the office was busy*, not *in the circumstances it was understandable*** — ⚠ **every reason offered is a thing somebody can test, and a tested excuse is worse than a bare admission.**',
  '⚠ **And then do not stop, because the four words are the cheap half.** ⚠ **Ask what a world in which the call happened would look like** — **and look for the things that FOLLOWED.** **A hole in your case is not a hole in the world.**',
  '⚠ **The strongest item is almost always in the other side\'s own documents.** ⚠ *Their June stock sheets are drawn to the revised figures.* **Nobody draws stock sheets to a specification that was never agreed** — **which is nearly evidence, and it was found by asking a question rather than by searching a file.**',
  '⚠ **Say *the absence is not one-sided* only where it is true.** ⚠ **If they have a note of the call and you do not, saying this invites them to produce it with a flourish** — **and you will have asked for the worst moment of your week.**',
  '**Practise:** Take something you could not prove. Write the four moves, and spend the time on the fourth.',
  '**Useful phrases:**  plead the hole  ·  the absence is ours  ·  no record either  ·  what followed from it  ·  a hole in your case is not a hole in the world',
  '**Pronunciation – four words.** 🔊 **Track 19.8** Listen twice. ⚠ **The first says *the absence is ours* flatly and moves straight on.** ⚠ **The second pauses after it.** **Flat and moving on, it is a fact; with the pause, it is an apology, and the room waits for the excuse that follows.** Say it four times, flat, and keep going.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a gap; B works the four moves.'));
out.push(dlg(null, [
  ['A', 'I would have to prove __________ and I cannot.'],
  ['B', '⚠ **Say so in a sentence, with no reason attached.**'],
  ['A', '__________.'],
  ['B', '⚠ **Whose absence is it?**'],
  ['A', '__________.'],
  ['B', '⚠ **Can the other side produce it either?**'],
  ['A', '__________.'],
  ['B', '⚠ **Now the useful question. If it happened, what followed from it?**'],
  ['A', '__________.'],
  ['B', '⚠ **And whose documents are those things in?**'],
]));
out.push(table(['Role card 1 — do not draw attention to it', 'Role card 2 — the line was bad'], [[
  '⚠ **A argues that pleading the weakest point invites attack on it.** ⚠ **B asks what happens when the same point is reached by a question in the room instead.** ⚠ **B\'s point: the absence is identical either way and only the tone differs** — **a fact you stated, or a collapse somebody produced, and the tribunal remembers the second one.**',
  '⚠ **A wants to explain the absence: the line was bad, the office was busy, it was a Thursday.** ⚠ **B asks what happens when the other side tests the explanation.** ⚠ **B\'s point: every reason offered is a thing somebody can disprove, and a disproved excuse is worse than a bare admission** — **four words with nothing attached cannot be attacked at all.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four moves for one gap of your own. ⚠ Then say which of the things that followed is in the other side\'s documents, because that is the one worth having.'));
out.push(PHRASE_CARD(['plead the hole', 'the absence is ours', 'no reason attached', 'what followed from it', 'in whose documents?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** things you could not prove.'));
out.push(table(['What you cannot prove', 'Whose absence it is', 'Can they produce it either?', 'What followed from it, and whose document that is in'], [['', '', '', ''], ['', '', '', '']], [2.2, 1.8, 1.8, 3.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We cannot produce _______. The absence is _______. The other side _______ produce it either. What we can show is that _______ followed, and that is in _______\'s own documents._'));
out.push(p('**Listener task:** count how many wrote a reason for the absence after owning it. ⚠ Then ask how many found something that followed, and how many of those are in the other side\'s documents.'));
out.push(p('**Board clinic:** your teacher writes four absence paragraphs on the board — find the one that owns the absence and then explains it, and the one that stops after four words. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the extract, and answer the questions.'));
out.push(box(null, [
  '**STATEMENT OF CASE OF SHAM TRADING  ·  Extract: paragraphs 20 to 23, the call of 14 May. 10 March.**',
  '**20.  The Claimant says that on 14 May the parties agreed by telephone to substitute the revised specification for the original, and that the substitution was to take effect from 1 June.**',
  '⚠ **21.  The Claimant cannot produce any record of that call. There is no note, no electronic message and no diary entry. The absence is the Claimant\'s own. The Claimant does not advance any explanation for it.**',
  '**22.  The Claimant invites the Tribunal to consider three matters, none of which is a record of the call.**',
  '**22.1  On 3 June the Respondent sent the revised specification to four addressees at the Claimant, document R4. The Claimant says that the sending of a revised specification three weeks after the alleged call is consistent with the call having taken place.**',
  '⚠ **22.2  The Respondent has not produced any record of the call either. The Claimant does not say that the Respondent has withheld one; the Claimant says only that the absence is not one-sided.**',
  '⚠ **22.3  The Respondent\'s own stock sheets for June, documents R11 to R14, are drawn to the figures in the revised specification and not to those in the original. The Claimant says that a party which had not agreed the revised specification would have had no reason to draw its stock sheets to it.**',
  '**23.  The Claimant accepts that none of paragraphs 22.1 to 22.3 proves what was said on 14 May, and does not invite the Tribunal to find that it does.**',
  '⚠ **A note on paragraph 21, which took four drafts.** **The first draft explained the absence** — *the call was taken on a mobile telephone in a warehouse.* ⚠ **It was struck out because an explanation is a thing somebody can test, and a tested explanation that fails is worse than no explanation at all.** **The final sentence, *the Claimant does not advance any explanation for it*, is stronger than any explanation could have been**, **because there is nothing in it to attack.**',
  '⚠ **And a note on 22.3, which is the best paragraph in the document and was found last.** **Nobody searched for it.** ⚠ **It was found by asking what the world would look like if the call had happened**, **and then looking in the other side\'s documents rather than in ours** — **which is the one move in this unit that is worth the whole of it.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does paragraph 21 do, and what does its last sentence refuse to do?'));
out.push(item('2', 'What does paragraph 22.2 say, and what does it carefully not say?'));
out.push(item('3', 'How was paragraph 22.3 found, and why does the note call it the best paragraph?'));
out.push(box('Writer\'s box', [
  '**The absence paragraphs — five parts:** ⚠ **the assertion, in full** → ⚠ **the absence, with the things that do not exist listed** → **four words of ownership and an express refusal to explain** → ⚠ **what can be shown instead, numbered, with the strongest in the other side\'s documents** → ⚠ **and a paragraph saying that none of it proves the point.**',
  '⚠ **List what does not exist.** ⚠ *There is no note, no electronic message and no diary entry.* **Three items, because *we have nothing* invites the question of where you looked, and a list answers it before it is asked.**',
  '⚠ **Then refuse to explain, expressly.** ⚠ *The Claimant does not advance any explanation for it.* **It took four drafts to get there and it is stronger than any explanation could be** — **because there is nothing in it to attack.**',
  '⚠ **Say *not one-sided* and then say what you are NOT saying.** ⚠ *The Claimant does not say that the Respondent has withheld one.* **The second sentence is what keeps the first from being an accusation you would have to prove.**',
  '⚠ **Find the thing that FOLLOWED, in their documents.** ⚠ *Their own June stock sheets are drawn to the revised figures.* **Nobody searched for it; it was found by asking what the world would look like if the call had happened** — **and that question is the single most valuable move in the unit.**',
  '⚠ **And close by conceding what your own best paragraph does not do.** ⚠ *The Claimant accepts that none of this proves what was said, and does not invite the Tribunal to find that it does.* **A party who overclaims their circumstantial case loses the credit for having built it.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the absence paragraphs for a dispute at your work (**80 words or more**). Use the frame.'));
out.push(p('**STATEMENT OF CASE OF ______________  ·  the ______________.**   **1.  We say that on ______________ ______________.**   ⚠ **2.  We cannot produce ______________. There is no ______________, no ______________ and no ______________. The absence is ours. We do not advance any explanation for it.**   **3.  We invite consideration of ______________ matters, none of which is a record of ______________.**   **3.1  ______________.**   ⚠ **3.2  The other side has not produced ______________ either. We do not say that they have withheld one; we say only that the absence is not one-sided.**   ⚠ **3.3  ______________** — ⚠ **and this is in their own documents.**   ⚠ **4.  We accept that none of 3.1 to 3.3 proves ______________, and we do not ask anybody to find that it does.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A list of what does not exist, not just *we have nothing*', ''],
  ['Four words of ownership, and no explanation', ''],
  ['*Not one-sided*, with what is not being said', ''],
  ['Something that followed, in the other side\'s documents', ''],
  ['A closing paragraph conceding what it does not prove', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *what followed* item. ⚠ The class says of each whose documents it would be found in, and the useful answer is always the other side\'s.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something at your work you believe and could not prove (**200 to 240 words**). Say what it is, what does not exist, whose absence it is, and what would have followed from it if it happened — and where those things would be recorded.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _is there an explanation here that could be tested?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the writer find something that followed? ⚠ **Usually two of three, and the writers are usually surprised** — **because a company looks for the missing record and almost never looks for the consequences of the thing the record would have recorded.**'));
out.push(box('Homework', ['Write your final text. Then take one gap of your own and list three things that would have followed from the event, and say whose documents each would be in (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 19.5 =======================
out.push(pb());
out.push(h2('19.5  Answer the question, and stop'));
out.push(p('**Function:** answering what was asked and nothing else   ·   **Grammar:** _yes · no · I do not know · I do not remember_   ·   **Pronunciation:** an answer that ends'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a question at work you have answered at length when a word would have done. ⚠ Then say what the extra sentences gave away.'));
out.push(p('**b**  Which is the answer to *Did you read clause 19 before signing?* _No. · No, but you have to understand that we were under enormous pressure and in any case nobody ever reads those clauses._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Nahas say Nour\'s long answers do?   **A** nothing   **B** open three new subjects nobody had asked about   **C** sound rude'));
out.push(p('**b**  Listen again. **1** What are the four complete answers she gives her? **2** What is a question with a premise in it, and what do you do with one?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.9  "You answered a question nobody asked"', [
  ['Ms Nahas', 'Did you read clause 19 before the agreement was signed?'],
  ['Nour', 'Not closely, because at that stage the schedule was the thing everybody was arguing about, and clause 19 had come from their standard form, and honestly nobody expected—'],
  ['Ms Nahas', '⚠ **Stop. The answer is no.**'],
  ['Nour', 'It is more complicated than no.'],
  ['Ms Nahas', '⚠ **The question was not complicated.** ⚠ **You answered no and then opened three new subjects: what the firm was arguing about, where the clause came from, and what the firm expected.** **I can ask you about all three now, and I will, and so will they.**'],
  ['Nour', 'So what do I say?'],
  ['Ms Nahas', '⚠ **There are four complete answers and you will need all of them.** ⚠ **Yes. No. I do not know. I do not remember.** **Those are answers. Everything else is an answer plus something.**'],
  ['Nour', '*I do not remember* sounds evasive.'],
  ['Ms Nahas', '⚠ **It is the most honest sentence available when it is true, and a tribunal hears far worse things every day than a witness who cannot remember 2024.** ⚠ **What is evasive is remembering unusually well.**'],
  ['Nour', 'And if the question is unfair?'],
  ['Ms Nahas', '⚠ **Then it will usually have a premise in it.** *When you decided to ignore clause 19, who did you tell?* ⚠ **You do not answer that. You take the premise out first: *I did not decide to ignore it.* Then stop, and let them put the question again.**'],
  ['Nour', 'And if they ask it the same way?'],
  ['Ms Nahas', '⚠ **Say the same thing the same way.** ⚠ **A witness who gives the same short answer three times is tedious and unassailable, which in that room is the same as impressive** — **and a witness who improves the answer each time has just shown everybody that the answer is being made.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The four complete answers, and the question with a premise**',
  table(['', 'The question', 'The answer'], [
    ['**a fact you know**', '*Did you read clause 19?*', '⚠ *No.* — **and nothing after it**'],
    ['**a fact you never knew**', '*Who drafted clause 19?*', '⚠ *I do not know.*'],
    ['⚠ **a fact you have lost**', '*What did you say on 14 May?*', '⚠ *I do not remember.* — **and this is the honest answer, not the weak one**'],
    ['⚠ **a question with a premise**', '⚠ *When you decided to ignore clause 19, who did you tell?*', '⚠ *I did not decide to ignore it.* — **then stop, and let them ask again**'],
  ], [1.7, 3.3, 4]),
  '⚠ **Four answers are complete: yes · no · I do not know · I do not remember.** ⚠ **Everything else is an answer plus something**, **and the something is a new subject you have just invited a question about.**',
  '⚠ **Nour\'s long answer opened three new subjects in one breath** — **what the firm was arguing about, where the clause came from, what the firm expected.** ⚠ **None of them had been asked about and all three are now available.**',
  '⚠ **I do not remember is the most honest sentence available when it is true.** ⚠ **What sounds evasive is the opposite: remembering unusually well, three years later, in a way that happens to help.**',
  '⚠ **A question with a premise gets the premise removed first, and then silence.** ⚠ *I did not decide to ignore it.* **Do not answer the question underneath it in the same breath** — **because answering it accepts the premise, however much you deny it afterwards.**',
  '⚠ **And repeat the same short answer in the same words.** ⚠ **A witness who says it three times identically is tedious and unassailable; one who improves it each time has shown the room that the answer is being made as it goes.**',
  '**Practise:** Have a partner ask you five questions about a dispute. Answer each in four words or fewer. Count how often you want to add a reason.',
  '**Useful phrases:**  the answer is no  ·  I do not know  ·  I do not remember  ·  I did not decide to  ·  (then nothing)',
  '**Pronunciation – an answer that ends.** 🔊 **Track 19.10** Listen twice. ⚠ **The first says *No.* and the voice falls and stops.** ⚠ **The second says *No,* and the voice stays up.** **Falling and stopping is an answer; staying up is an invitation, and the questioner simply waits** — **and most witnesses fill that silence.** Say it four times, falling, and wait.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. B asks; A answers in four words or fewer. ⚠ **B\'s job is to wait after each answer.**'));
out.push(dlg(null, [
  ['B', 'Did you read __________ before you signed it?'],
  ['A', '__________.'],
  ['B', '(waits)'],
  ['A', '⚠ **(says nothing)**'],
  ['B', 'Who drafted it?'],
  ['A', '__________.'],
  ['B', 'What did you say on __________?'],
  ['A', '__________.'],
  ['B', '⚠ **When you decided to __________, who did you tell?**'],
  ['A', '⚠ **__________.** (then stops)'],
]));
out.push(table(['Role card 1 — it is more complicated than no', 'Role card 2 — I do not remember sounds weak'], [[
  '⚠ **A insists the honest answer needs the context, and that a bare *no* is misleading.** ⚠ **B counts the new subjects A\'s long answer opened and asks a question about each.** ⚠ **B\'s point: the context is not lost, it is simply not volunteered** — **your own side can ask for it, and the other side now cannot avoid it.**',
  '⚠ **A will not say *I do not remember*, believing it damages the witness.** ⚠ **B asks what the alternative is for an event in 2024, and A produces a confident account.** ⚠ **B\'s point: a confident account of a three-year-old conversation that happens to help is the one thing in the room that sounds constructed** — **and the honest sentence costs a point where the constructed one costs the witness.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** count how many answers ran past four words. ⚠ Then name one new subject an over-long answer opened, and say what question you would now ask.'));
out.push(PHRASE_CARD(['the answer is no', 'I do not know', 'I do not remember', 'take the premise out', '(then nothing)']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** hard questions somebody could ask you about your work.'));
out.push(table(['The question', 'The complete answer', 'What you want to add', 'What adding it would open'], [['', '', '', ''], ['', '', '', '']], [2.4, 1.8, 2.4, 2.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The question is _______. The complete answer is _______. I want to add _______, and adding it would open _______._'));
out.push(p('**Listener task:** count how many of the things people want to add would open a new subject. ⚠ Then ask whether any of them could have been asked for by their own side instead.'));
out.push(p('**Board clinic:** your teacher writes four answers on the board — find the one that answers and then explains, and the one that answers a question with a premise without removing the premise. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the statement, and answer the questions.'));
out.push(box(null, [
  '**WITNESS STATEMENT OF N. MANSOUR  ·  Extract: paragraphs 4 to 9. 18 March.**',
  '**4.  I am the administration coordinator of Sham Trading. I have held that post since 2024. Before 2024 the post did not exist.**',
  '**5.  I did not read clause 19 before the agreement was signed on 26 June. I do not know who drafted it.**',
  '**6.  I was not present at the telephone call of 14 May and I have no knowledge of what was said on it.**',
  '⚠ **7.  I signed the acceptance page on 24 October. I read it before signing. I understood it to record receipt. I accept that it does not say so, and that the covering letter I relied on does not use the word *conformity*.**',
  '⚠ **8.  On 3 November I wrote to B. Nassif that the acceptance page was "probably binding". That was my view at the time. My view changed when I read clause 6 against the acceptance page in January, and I have set out in paragraph 12 what I read and when.**',
  '**9.  There are three matters on which I am asked to comment and on which I have no recollection at all: the content of the call of 14 May, the circumstances in which clause 19 was agreed, and the conversation said to have taken place in the warehouse in November.**',
  '⚠ **A note on paragraph 8, which is the one everybody argued about.** **It would have been possible not to mention the e-mail of 3 November in this statement.** ⚠ **It is disclosed at C19 and it was going to be put to me** — **and a witness who has to be shown her own e-mail has lost something a witness who produced it has not.** **The three sentences cost a point on issue 2 and they buy the only thing a witness owns, which is that nothing in her statement can be sprung on her.**',
  '⚠ **And a note on paragraph 9, which was added last and is the shortest useful paragraph in the document.** **Three matters, named, with *no recollection at all*.** ⚠ **It is written in advance so that a witness does not have to say it under pressure three times** — **because the first *I do not remember* sounds honest, the second sounds careful, and the third, unprepared, sounds like a tactic.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What do paragraphs 5 and 6 do, and how long are they?'));
out.push(item('2', 'Why was paragraph 8 included, and what does the note say it buys?'));
out.push(item('3', 'Why was paragraph 9 written in advance?'));
out.push(box('Writer\'s box', [
  '**A witness statement — five rules:** ⚠ **your post and when it began** → ⚠ **short negatives, said once and completely** → **what you accept, before anybody puts it to you** → ⚠ **your own inconsistent document, produced by you, with what changed and when** → ⚠ **and a paragraph listing what you do not remember at all.**',
  '⚠ **Say what you did NOT do, in sentences of a line.** ⚠ *I did not read clause 19. I do not know who drafted it. I was not present and I have no knowledge of what was said.* **Three facts, no reasons** — **a witness statement with reasons in it is a submission wearing a witness\'s name.**',
  '⚠ **Accept the awkward thing in your own paragraph.** ⚠ *I accept that it does not say so.* **A witness who accepts it in writing is answering; a witness who accepts it in the room is conceding.**',
  '⚠ **Produce your own inconsistent document yourself, and date the change.** ⚠ *That was my view at the time. My view changed when I read clause 6 against the acceptance page in January.* **A changed view with a date and a cause is a fact; a changed view discovered by somebody else is a credibility finding.**',
  '⚠ **List what you do not remember, in advance, by name.** ⚠ **Three matters, named, with *no recollection at all*** — **because the first *I do not remember* sounds honest, the second careful, and the third, unprepared, sounds like a tactic.**',
  '⚠ **And say when your post began, and where it did not exist.** ⚠ *Before 2024 the post did not exist.* **It is one clause and it disposes of every question about what you should have known in 2021.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write six paragraphs of a witness statement about a dispute at your work (**80 words or more**). Use the frame.'));
out.push(p('**WITNESS STATEMENT OF ______________  ·  ______________.**   **1.  I am ______________ of ______________. I have held that post since ______________.**   ⚠ **2.  I did not ______________. I do not know ______________.**   **3.  I was not present at ______________ and I have no knowledge of ______________.**   ⚠ **4.  I ______________. I accept that ______________.**   ⚠ **5.  On ______________ I wrote that ______________. That was my view at the time. My view changed when ______________, in ______________.**   ⚠ **6.  There are ______________ matters on which I have no recollection at all: ______________, ______________ and ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The post, and when it began', ''],
  ['Negatives of one line, with no reasons attached', ''],
  ['What the writer accepts, in their own paragraph', ''],
  ['Their own inconsistent document, with the date it changed', ''],
  ['A named list of what they do not remember', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *I do not remember* paragraph. ⚠ The class says of each whether the matters are named specifically enough to be useful.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you said more than you were asked (**200 to 240 words**). Say what the question was, what the complete answer would have been, what you added, what it opened, and what it cost.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _how many new subjects did the long answer open?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the extra sentences come from wanting to be understood rather than from wanting to win? ⚠ **Usually all three** — **which is why this is the hardest discipline in the unit and the one that has nothing to do with honesty.**'));
out.push(box('Homework', ['Write your final text. Then have somebody ask you five hard questions about your work and answer each in four words or fewer (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 19.6 =======================
out.push(pb());
out.push(h2('19.6  The offer, and what refusing it costs'));
out.push(p('**Function:** answering an offer to settle   ·   **Grammar:** _if we refuse and win, we are X better off; if we refuse and lose, Y worse_   ·   **Pronunciation:** a figure given without a flinch'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say an offer at your work that was refused. ⚠ Then say what refusing it cost, if anybody worked that out.'));
out.push(p('**b**  Which is a reason to refuse? _it is insulting · it is 11 million against a claim of 19, and refusing it costs us about 4 million in fees even if we win_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Nahas insist the firm writes down before answering?   **A** nothing   **B** the four numbers, including what winning actually leaves them   **C** a refusal'));
out.push(p('**b**  Listen again. **1** What are the four numbers? **2** Why does she say the word *insulting* must not appear anywhere?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.11  "Four numbers, and then you may have an opinion"', [
  ['Nour', 'They have offered eleven million. The claim is nineteen. Mr Ayoub called it insulting.'],
  ['Ms Nahas', '⚠ **He may think so and the word goes nowhere near the paper.** ⚠ **Before anybody has an opinion, write down four numbers.**'],
  ['Nour', 'Go on.'],
  ['Ms Nahas', '⚠ **One: the offer, eleven. Two: what you are claiming, nineteen.** ⚠ **Three: what it costs to go on from here, which is about four million in fees and the Beirut hearing.** **Four, and this is the one nobody writes: what winning actually leaves you.**'],
  ['Nour', 'Nineteen minus four. Fifteen.'],
  ['Ms Nahas', '⚠ **Fifteen if you win everything, and you will not win issue three, because you cannot prove the call.** ⚠ **Without issue three the claim is about fourteen, so winning leaves you ten.**'],
  ['Nour', 'Which is less than the offer.'],
  ['Ms Nahas', '⚠ **Which is less than the offer.** **And that sentence is why the four numbers get written down before anybody says *insulting*.**'],
  ['Nour', 'So we accept.'],
  ['Ms Nahas', '⚠ **That is not my decision and it is not yours.** ⚠ **What you do is put the four numbers to whoever decides, with the two outcomes priced, and a recommendation** — **and then you do what they say, and you record that you recommended it.**'],
  ['Nour', 'And if they refuse anyway?'],
  ['Ms Nahas', '⚠ **Then they have refused ten in favour of a chance at fifteen, knowingly, which is a legitimate commercial decision and nothing like the one they would have made at six o\'clock on Thursday on the word *insulting*.** ⚠ **Your job is not to make the decision. It is to make sure the decision is the one being made.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The four numbers, before any opinion**',
  table(['', 'The number', 'Here'], [
    ['**1 the offer**', '**what they have put on the table**', '**11 million**'],
    ['**2 the claim**', '**what you are asking for**', '**19 million**'],
    ['**3 the cost of going on**', '**fees, the hearing, and the time of your own people**', '**about 4 million**'],
    ['⚠ **4 what winning leaves you**', '⚠ **the claim you will actually win, minus 3** — **and nobody writes this one**', '⚠ **14 less 4 = 10**, **which is less than the offer**'],
  ], [1.9, 4, 3.1]),
  '⚠ **The fourth number is the whole cycle and it is the one nobody writes.** ⚠ **Not the claim minus the costs** — **the claim you will ACTUALLY win minus the costs**, **which means pricing the issue you are going to lose before you lose it.**',
  '⚠ **Keep *insulting* and every word like it off the paper.** ⚠ **An offer is a number and an opinion about it is not a number** — **and a paper that calls an offer insulting has told the reader what to feel instead of what it costs.**',
  '⚠ **Put the two outcomes side by side and price both.** ⚠ *If we refuse and win, we are about 1 million worse off than accepting. If we refuse and lose, about 15 million worse off.* **Two sentences, and they are the only two the decision actually turns on.**',
  '⚠ **Then recommend, and then do what you are told, and record that you recommended.** ⚠ **The recommendation is yours to make and the decision is not** — **and a refusal taken against a written recommendation is a different document, two years later, from a refusal taken in a corridor.**',
  '⚠ **And the purpose, stated plainly:** ⚠ *your job is not to make the decision; it is to make sure the decision is the one being made.* **A board that knowingly refuses ten for a chance at fifteen has decided something; one that refuses on a Thursday evening on the word *insulting* has not decided anything at all.**',
  '**Practise:** Take an offer at your work. Write the four numbers. Then write the two outcomes priced.',
  '**Useful phrases:**  four numbers, then an opinion  ·  what winning actually leaves you  ·  the issue we are going to lose  ·  if we refuse and win · if we refuse and lose  ·  I recommended, and it is recorded',
  '**Pronunciation – a figure without a flinch.** 🔊 **Track 19.12** Listen twice. ⚠ **The first says *which is less than the offer* at the same volume as everything around it.** ⚠ **The second drops the voice and slows.** **Level, it is the finding; dropped, it is bad news, and the reader starts defending instead of deciding.** Say it four times, level.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has an offer and an opinion; B asks for the four numbers.'));
out.push(dlg(null, [
  ['A', 'They have offered __________. It is __________.'],
  ['B', '⚠ **Leave the adjective out. What is the claim?**'],
  ['A', '__________.'],
  ['B', '⚠ **And what does going on from here cost?**'],
  ['A', '__________.'],
  ['B', '⚠ **Now the fourth. Which part of the claim will you not win?**'],
  ['A', '__________.'],
  ['B', '⚠ **So what does winning actually leave you?**'],
  ['A', '__________.'],
  ['B', '⚠ **Say both outcomes, priced, and then recommend.**'],
]));
out.push(table(['Role card 1 — it is insulting', 'Role card 2 — we will win everything'], [[
  '⚠ **A refuses to put a number against an offer they consider contemptuous.** ⚠ **B agrees the offer may be low and asks what the firm is actually choosing between.** ⚠ **B\'s point: an opinion is not a number, and a board that refuses on the word *insulting* has not made a decision** — **the adjective is doing the deciding.**',
  '⚠ **A prices the fourth number as the full claim minus costs, because they expect to win everything.** ⚠ **B asks about the issue the firm cannot prove.** ⚠ **B\'s point: the fourth number requires pricing the issue you are going to LOSE, before you lose it** — **and a firm that cannot do that in writing will discover the real figure on the day of the award.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four numbers for one offer of your own. ⚠ Then write the two outcomes priced, and say which way you would recommend.'));
out.push(PHRASE_CARD(['leave the adjective out', 'the cost of going on', 'what will you not win?', 'what winning leaves you', 'both outcomes, priced']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** offers, at your work or in the story.'));
out.push(table(['The offer', 'The claim', 'Cost of going on', 'What winning actually leaves you'], [['', '', '', ''], ['', '', '', '']], [2, 1.8, 2.2, 3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The offer is _______ against a claim of _______. Going on costs _______. We will not win _______, so winning leaves _______. If we refuse and win we are _______; if we refuse and lose, _______. I recommend _______._'));
out.push(p('**Listener task:** count how many fourth numbers were smaller than the offer. ⚠ Then ask how many of the writers had priced the issue they expect to lose, rather than assuming a clean win.'));
out.push(p('**Board clinic:** your teacher writes four offer papers on the board — find the one with an adjective doing the work of a number, and the one whose fourth number is the full claim minus costs. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the paper, and answer the questions.'));
out.push(box(null, [
  '**THE OFFER OF 20 MARCH — THE FOUR NUMBERS, AND A RECOMMENDATION. 21 March. N. Mansour.**',
  table(['', 'Figure', 'Where it comes from'], [
    ['**the offer**', '**11.0 m**', '**their letter of 20 March, made outside the record**'],
    ['**our claim**', '**19.0 m**', '**the Statement of Case, paragraphs 24 to 29**'],
    ['**the cost of going on**', '**about 4.0 m**', '⚠ **counsel\'s estimate of 3.1, the Beirut hearing at 0.6, and about 0.3 of our own people\'s time, which I have costed at the warehouse rate**'],
    ['⚠ **what winning leaves us**', '⚠ **about 10.0 m**', '⚠ **the claim less issue 3, which we cannot prove and which is worth about 5.0 m, giving 14.0 — then less the 4.0 above**'],
  ], [2.2, 1.6, 5.2]),
  '⚠ **The two outcomes, priced.** **If we refuse and win on issues 1 and 2, we are about one million worse off than accepting today.** ⚠ **If we refuse and lose, we are about fifteen million worse off, because we pay our own costs and theirs.**',
  '⚠ **What that means, in one sentence.** **We are being asked to risk fifteen million to gain nothing**, **and that is the arithmetic rather than a view.**',
  '⚠ **What I have deliberately left out of this paper.** **Three things.** **That their conduct has been poor; that the offer arrived four days before the hearing bundle was due, which is not an accident; and that accepting will be read in this office as a defeat.** ⚠ **All three are true, none of them is a number, and a paper that contains them is a paper arguing for a conclusion rather than one setting out a choice.**',
  '⚠ **My recommendation.** **Accept, and seek 12.0 first, once, in writing, with a deadline of Thursday.** **The gap between 11.0 and 12.0 is smaller than the cost to them of a hearing they have just told us they do not want.**',
  '⚠ **And one line for the record, which is the reason this paper exists in this form.** **The decision is Mr Ayoub\'s and not mine.** ⚠ **If the firm refuses, I will have recorded that it refused about ten million for a chance at about fifteen, knowingly and on the arithmetic** — **which is a legitimate commercial decision, and a different document in two years from a refusal nobody priced.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How is the cost of going on built up, and what is included that firms usually leave out?'));
out.push(item('2', 'What three things has the writer deliberately left out, and why?'));
out.push(item('3', 'What is the last line for, and what does it make the document into?'));
out.push(box('Writer\'s box', [
  '**The offer paper — five parts:** ⚠ **four numbers with their sources** → ⚠ **the two outcomes priced** → **what it means in one sentence** → ⚠ **what you have left out, and why** → ⚠ **a recommendation, and a line saying whose the decision is.**',
  '⚠ **Put the SOURCE of every figure beside it.** ⚠ *Counsel\'s estimate of 3.1, the hearing at 0.6, and 0.3 of our own time at the warehouse rate.* **A figure without its source gets argued about; a figure with three components gets accepted or corrected, and both are progress.**',
  '⚠ **Cost your own people\'s time and say at what rate.** ⚠ **Firms leave it out because nobody invoices for it** — **and leaving it out is the commonest way the third number comes in too low.**',
  '⚠ **Price both outcomes in one sentence each.** ⚠ *About one million worse off if we win; about fifteen million worse off if we lose.* **Then one sentence saying what that means** — *we are being asked to risk fifteen million to gain nothing* — **and label it as arithmetic rather than as a view.**',
  '⚠ **List what you have left out, and make at least one of the items something that favours your own side.** ⚠ *Their conduct has been poor · the offer\'s timing is not an accident · accepting will be read here as a defeat.* **A paper that excludes only the inconvenient truths is an argument; one that excludes the convenient ones as well is a choice.**',
  '⚠ **And name whose decision it is, with what you will have recorded.** ⚠ *If the firm refuses, I will have recorded that it refused about ten for a chance at about fifteen, knowingly.* **That sentence is what makes the paper a decision document rather than a recommendation** — **and it is written without a threat in it, because it describes what the file will say and nothing else.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an offer paper for a decision at your work (**80 words or more**). Use the frame.'));
out.push(p('**THE OFFER OF ______________ — THE FOUR NUMBERS, AND A RECOMMENDATION. ______________. ______________.**   **the offer** | **______________** | **______________**   **our claim** | **______________** | **______________**   **the cost of going on** | **______________** | ⚠ **______________, and ______________ of our own people\'s time at the ______________ rate**   ⚠ **what winning leaves us** | ⚠ **______________** | ⚠ **the claim less ______________, which we cannot prove**   ⚠ **The two outcomes, priced. If we refuse and win, ______________. If we refuse and lose, ______________.**   ⚠ **What that means, in one sentence. ______________.**   ⚠ **What I have deliberately left out. ______________, ______________ and ______________. None of them is a number.**   ⚠ **My recommendation. ______________.**   ⚠ **The decision is ______________\'s and not mine. If we refuse, I will have recorded that ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A source beside every figure', ''],
  ['Own people\'s time costed, at a stated rate', ''],
  ['The fourth number net of an issue that will be lost', ''],
  ['Both outcomes priced; no adjectives anywhere', ''],
  ['Whose decision it is, and what will have been recorded', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their fourth number and its working. ⚠ The class says of each whether an issue that will be lost has been priced in it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an offer refused at your work (**200 to 240 words**). Give the four numbers if you can, say what refusing cost, and say whether anybody wrote the arithmetic down before the decision was taken.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was the fourth number ever worked out?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the arithmetic written down before the decision? ⚠ **Usually none** — **and in at least one the refusal was taken on an adjective, which is the finding the whole cycle exists for.**'));
out.push(box('Homework', ['Write your final text. Then take one decision pending at your work and write its four numbers, with the source of each (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 19.7 =======================
out.push(pb());
out.push(h2('19.7  Review & Mediate: the statement he cannot sign'));
out.push(p('⚠ **This is the seventh unit of this book, and the first one set outside Syria.** ⚠ **Everything Units 13 to 18 taught about writing things down arrives in one room in Beirut at once** — **and the unit nobody expected to matter there was Unit 18.**'));
out.push(p('**Function:** holding a memory that has hardened   ·   **Grammar:** _I said X then; I say Y now; the difference is Z_   ·   **Pronunciation:** a correction of oneself, said once'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 19 quiz', 6));
out.push(table(['Say it in one sentence', '✓'], [
  ['**19.1**  What is the difference between an issue and a grievance?', ''],
  ['**19.2**  Which verbs can never be pleaded?', ''],
  ['**19.3**  What are the four moves for a document that hurts you?', ''],
  ['**19.4**  After *the absence is ours*, what is the next question to ask?', ''],
  ['**19.5**  What are the four complete answers?', ''],
  ['**19.6**  What is the fourth number, and why does nobody write it?', ''],
], [6, 1]));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why will Ms Nahas not let Mr Ayoub sign the statement as drafted?   **A** she does not believe him   **B** his account is firmer now than the one he wrote in 2024, and the 2024 document is disclosed   **C** it is too short'));
out.push(p('**b**  Listen again. **1** What did he write in 2024 and what does the draft say? **2** What does he say the real difference is, and what does Nour propose?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.13  "I think we agreed, and we agreed"', [
  ['Mr Ayoub', 'The statement says I agreed the change with him on 14 May. I did. Why will you not let me sign it?'],
  ['Ms Nahas', '⚠ **Because in September 2024 you wrote, to Nadia, *I think we agreed the revised figures in May.*** ⚠ **That document is disclosed. It is at C7.**'],
  ['Mr Ayoub', 'And now I am certain. People become certain.'],
  ['Ms Nahas', '⚠ **They do, and that is exactly the problem.** ⚠ **A memory that has become firmer over three years, in the direction that helps, is the one thing in that room that destroys a witness** — **and it destroys the case he is carrying with him.**'],
  ['Nour', 'So we cannot put the issue at all?'],
  ['Ms Nahas', '⚠ **If he signs *we agreed*, they put C7 to him and he has two choices, and both are fatal.** **He says his memory improved, which nobody believes. Or he says the 2024 note was careless, which makes him a man whose written records are careless.**'],
  ['Mr Ayoub', 'I will not be called a liar for the difference between *I think* and nothing.'],
  ['Ms Nahas', '⚠ **Nobody is calling you one. I am telling you what the gap does, not what it proves.**'],
  ['Mr Ayoub', '(pause) ⚠ **Then let me tell you what the real difference is, and you may do what you like with it.** ⚠ **In 2024 I had not read the June stock sheets. When I saw that their own sheets were drawn to the revised figures, I stopped thinking and started knowing.** **That is not my memory improving. That is me finding out I was right.**'],
  ['Nour', 'Then that is the statement.'],
  ['Ms Nahas', 'Say what you mean.'],
  ['Nour', '⚠ **He signs a statement that contains both sentences and the reason for the difference.** ⚠ **What he wrote in 2024, what he says now, and the document he saw in between, with its date.** **They cannot ambush him with C7 if C7 is in his own paragraph four.**'],
  ['Ms Nahas', '⚠ **That he can sign, and it is a weaker sentence and a very much stronger witness.** ⚠ **It costs us the clean version of issue three** — **and it means the tribunal hears about the stock sheets from the man himself rather than from me in closing.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A memory that has hardened, and the statement that survives it**',
  table(['', 'What is wrong with it', 'What the file holds'], [
    ['⚠ **the clean version**', '⚠ *we agreed the change on 14 May* — **firmer than C7, in the direction that helps**', '⚠ **C7, September 2024:** *I think we agreed the revised figures in May*'],
    ['**the two fatal answers**', '⚠ *my memory improved* — **nobody believes it** · *the 2024 note was careless* — **then his records are careless**', '**both are reached by one question, and they are the only two available**'],
    ['⚠ **the survivable version**', '⚠ **what he wrote then · what he says now · and the document he saw in between, with its date**', '⚠ **C7 is in his own paragraph, so it cannot be put to him** — **it has already been put by him**'],
  ], [1.9, 4.1, 3]),
  '⚠ **A memory that has become firmer over time, in the direction that helps, is the most dangerous thing a witness can carry.** ⚠ **Not because it is dishonest** — **it usually is not** — **but because the hardening is visible in the documents and has only two explanations, and both cost more than the point is worth.**',
  '⚠ **The way out is not a firmer sentence or a vaguer one. It is a statement that CONTAINS its own hardening.** ⚠ **Three parts: what you wrote then, what you say now, and what you saw in between, with the date.**',
  '⚠ **And the third part has to be a document, not a feeling.** ⚠ *When I saw that their own stock sheets were drawn to the revised figures, I stopped thinking and started knowing.* **A change of certainty caused by a document is a fact with a date on it; one caused by reflection is the answer nobody believes.**',
  '⚠ **A fact cannot be sprung on a witness who has already produced it.** ⚠ **That is the whole mechanism, it is the same mechanism as 19.3 and 19.4, and this is the third time this unit has arrived at it from a different direction.**',
  '⚠ **The cost is real and should be stated rather than minimised.** ⚠ **The clean version of the issue is gone**, **and what the firm gets instead is a witness who cannot be broken and a tribunal that hears about the stock sheets from the man who saw them.**',
  '**Useful phrases:**  firmer in the direction that helps  ·  both answers are fatal  ·  what I wrote then, what I say now  ·  I stopped thinking and started knowing  ·  it cannot be put to him; he has put it',
  '**Pronunciation – correcting yourself once.** 🔊 **Track 19.14** Listen twice. ⚠ **The first says *in 2024 I wrote that I thought we had agreed; I am now certain, and this is why* in one unbroken line.** ⚠ **The second pauses before *I am now certain*.** **Unbroken, it is one fact with three parts; broken, the pause marks the change as an admission, and a room hears an admission as a weakness.** Say it four times, unbroken.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is a witness whose account has firmed; B builds the survivable version. ⚠ **Use the four steps in order.**'));
out.push(table(['B says', 'A answers'], [
  ['⚠ **What did you write at the time, in the actual words?**', '______________'],
  ['⚠ **And what do you say now?**', '______________'],
  ['⚠ **What did you see or read in between? A document, not a thought.**', '______________'],
  ['⚠ **On what date?**', '______________'],
  ['⚠ **Now say all four as one sentence, and do not pause in the middle.**', '______________'],
], [4.6, 4.4]));
out.push(table(['Role card 1 — people become certain', 'Role card 2 — I will not be called a liar'], [[
  '⚠ **A argues that becoming certain over time is ordinary and honest, and it is.** ⚠ **B agrees entirely and asks what the other side does with the earlier document.** ⚠ **B\'s point: the question is not whether the hardening is honest but what the only two available answers cost** — **and both of them cost the witness, so the remedy is a statement that contains the hardening rather than one that denies it.**',
  '⚠ **A takes the objection personally, which is reasonable, because it is about their word.** ⚠ **B separates what the gap does from what it proves** — *I am telling you what the gap does, not what it proves.* ⚠ **B\'s point: nobody in the conversation thinks A is lying, and that is precisely why the fix must come from A\'s own account of why the certainty changed.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the survivable version in its three parts. ⚠ Then say why the thing seen in between has to be a document.'));
out.push(PHRASE_CARD(['what you wrote then', 'what you say now', 'what you saw in between', 'with its date', 'in one unbroken line']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** things you are more certain about now than you were in writing at the time.'));
out.push(table(['What you wrote then', 'What you say now', 'What you saw in between', 'The date'], [['', '', '', ''], ['', '', '', '']], [2.4, 2.2, 2.8, 1.4]));
out.push(stage('4R', 'Mediate and report', 9));
out.push(p('**The mediation.** Mr Ayoub will sign *we agreed*. Ms Nahas will not let him. Nour needs the issue in the case and the witness intact.'));
out.push(table(['What each side is right about', 'What each side gives up', 'What the statement ends up saying'], [[
  '⚠ **Mr Ayoub:** **he does remember agreeing it, becoming certain over three years is ordinary, and he will not sign a document that implies he was careless in 2024.**  ⚠ **Ms Nahas:** **the gap between C7 and the draft has only two explanations in cross-examination and both destroy the witness, taking the case with him.**',
  '⚠ **Mr Ayoub:** **the clean sentence. He signs a statement that records, in his own words, that he wrote *I think* in 2024** — **and he does it on the ground that it is true and not that it is tactical.**  ⚠ **Ms Nahas:** **the firmest available version of issue three, and the control of when the stock sheets are introduced** — **they now arrive in a witness\'s paragraph four rather than in her closing.**',
  '⚠ **Paragraph 4 of the witness statement:** *In September 2024 I wrote to N. Sayegh that I thought we had agreed the revised figures in May; that e-mail is at C7. I am now certain that we did. The reason my certainty changed is that in January 2027 I read the Respondent\'s stock sheets for June, documents R11 to R14, and saw that they were drawn to the revised figures. I had not seen those documents in 2024.*  ⚠ **And nothing anywhere in the statement says that the 2024 note was careless.**',
]], [1, 1, 1.3]));
out.push(p('**Then report:** _Both are right. _______ is right that _______. _______ is right that _______. So the statement says _______, _______ and _______, with the date — and _______ gives up _______ while _______ gives up _______._'));
out.push(p('⚠ **And the sentence Mr Ayoub gave, which is not in the statement and is the reason there is one:** *"That is not my memory improving. That is me finding out I was right."* ⚠ **It is the distinction the whole cycle rests on, and a lawyer could not have supplied it** — **only the witness knew which of the two had happened.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 4)', 10));
out.push(p('⚠ **This unit is Part 4: multiple-choice cloze, fifteen gaps, four options each. It is the second time in the level.** ⚠ **Read the whole sentence before choosing, because about a third of these turn on a word four or five words after the gap.**'));
out.push(box(null, [
  '**PREPARING A WITNESS — from a Beirut firm\'s guidance note to commercial clients.**',
  'A witness who has been well prepared is not a witness who has been told what to say. **(1)** ______ the opposite: the preparation consists almost entirely of removing things, and the single most useful hour is the one spent **(2)** ______ a client that four answers are complete and the rest are answers with something added.',
  'The commonest fault is not dishonesty but helpfulness. A witness asked whether he read a clause will say that he did not, and will then explain why, **(3)** ______ opens three subjects nobody had asked about and all of which can now be **(4)** ______ to him. He has not damaged his honesty. He has **(5)** ______ the other side three questions it had not thought of.',
  'The second fault is a memory that has improved. Certainty that has grown over three years, **(6)** ______ the direction that helps the witness, is the most dangerous thing in any statement, and it is dangerous **(7)** ______ it is usually honest. Where a contemporaneous document is less certain than the statement, the witness **(8)** ______ only two answers available to him, and both of them cost a great deal more than the point is **(9)** ______.',
  'The remedy is counter-intuitive and it works. The statement should contain its own change of certainty: what the witness wrote at the time, what he says now, and the document he read **(10)** ______ between, with its date. A fact cannot be put to a witness who has already **(11)** ______ it himself.',
  'Finally, and this is the part clients resist, a witness should state in advance what he does not remember at all. Three or four matters, each **(12)** ______ specifically. The first time a witness says that he cannot recall something it sounds honest; the third time, **(13)** ______ he has not prepared it, it sounds like a tactic. A list written in March **(14)** ______ that from happening in October, and it is the one piece of advice that costs a client **(15)** ______ and buys him the most.',
]));
out.push(p('**1**   **A** Hardly   **B** Almost   **C** Quite   **D** Scarcely'));
out.push(p('**2**   **A** telling   **B** saying   **C** speaking   **D** talking'));
out.push(p('**3**   **A** what   **B** that   **C** who   **D** which'));
out.push(p('**4**   **A** asked   **B** put   **C** said   **D** mentioned'));
out.push(p('**5**   **A** handed   **B** lent   **C** made   **D** done'));
out.push(p('**6**   **A** at   **B** on   **C** in   **D** to'));
out.push(p('**7**   **A** despite   **B** because   **C** in spite   **D** owing'));
out.push(p('**8**   **A** have   **B** having   **C** to have   **D** has'));
out.push(p('**9**   **A** worth   **B** value   **C** valued   **D** worthy'));
out.push(p('**10**  **A** at   **B** on   **C** in   **D** by'));
out.push(p('**11**  **A** shown   **B** told   **C** given   **D** produced'));
out.push(p('**12**  **A** called   **B** named   **C** titled   **D** termed'));
out.push(p('**13**  **A** unless   **B** whether   **C** if   **D** despite'));
out.push(p('**14**  **A** prevents   **B** avoids   **C** refuses   **D** denies'));
out.push(p('**15**  **A** none   **B** anything   **C** something   **D** nothing'));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 1 — an internal communication, 40 to 50 words, 10 marks.** **Three content points, all three present.** ⚠ **This is the fourth Part 1 of Book 2, after Units 13, 15 and 17.**',
  '⚠ **For a message about a witness statement, the three points are: what the statement will now say · what it costs · and what you need from the reader, by when.** ⚠ **Not the history of the dispute** — **the reader lived through it.**',
  '⚠ **Lead on the change, in the witness\'s own terms.** ⚠ *Mr Ayoub\'s statement will record what he wrote in 2024 as well as what he says now, with the document that changed his view.* **Nineteen words and the whole decision is in them.**',
  '⚠ **Then the cost, as a cost and not as a reassurance.** ⚠ *This gives up the clean version of issue three.* **Eight words.** **A candidate who writes *this is the best approach* has replaced the content point with an opinion, and that is the commonest way to lose this mark.**',
  '⚠ **And the ask needs a date in it.** ⚠ *I need your approval by Thursday so that it can be signed before the bundle closes.* **An ask with a deadline and a reason for the deadline is one clause longer and twice the document.**',
  '⚠ **Part 4 tip, for the cloze above.** ⚠ **Six of the fifteen gaps are decided by the word AFTER the gap and not the word before it** — **gap 9 ends the sentence and needs the adjective *worth*, not the noun *value*; gap 11 needs the verb that works with no recipient named, which rules out *told* and *given*; gap 14 needs the one verb of the four that takes *that ... from happening*.** ⚠ **Read to the full stop before choosing, every time.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** Write a message to your manager about a change to a witness statement or a formal document (**40 to 50 words**). Include **what it will now say** · **what that costs** · and **what you need, by when**.'));
out.push(p('**To:** ______________   **From:** ______________   **Date:** ______________   **Subject:** ______________   ⚠ **______________ will now record ______________ as well as ______________, with ______________.**   ⚠ **This gives up ______________.**   ⚠ **I need ______________ by ______________, so that ______________.**   **Words: ______**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.** Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What the document will now say', ''],
  ['The cost, stated as a cost', ''],
  ['An ask with a date and a reason for the date', ''],
  ['No history of the dispute', ''],
  ['40 to 50 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you are more certain of now than you were when you wrote about it (**200 to 240 words**). Say what you wrote then, what you say now, what you read or saw in between, and whether anybody could tell the difference from your documents.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then take one belief of yours about work and write the three parts: what you wrote at the time, what you say now, and the document that changed it (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 19 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  That is a grievance. It is not ___ issue.   a) a   b) an   c) the',
  '2  You cannot plead what somebody ___.   a) did   b) knew   c) wrote',
  '3  The Claimant cannot produce any record ___ that call.   a) for   b) about   c) of',
  '4  The absence is ___ own.   a) ours   b) our   c) us',
  '5  We disclose the note; it does not ___ us.   a) assist   b) help   c) aid',
  '6  I have no recollection ___ all.   a) in   b) of   c) at',
  '7  A fact cannot be put to a witness who has already produced ___.   a) it   b) them   c) one',
  '8  The decision is ___ and not mine.   a) him   b) his   c) he\'s',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 19.15** Listen to the conversation after the mediation. Complete the note.   What Ms Nahas says the statement has cost: ______   What it has bought: ______   Why the stock sheets are better from the witness: ______   What she says about the word *liar*: ______   What she tells Nour to record, and why: ______   The one thing she still cannot promise: ______'));
out.push(p('**C  Reading.** Read the four absence paragraphs at 19.4 again. Say what paragraph 21 refuses to do, what 22.2 carefully does not say, and why 22.3 was found last.'));
out.push(p('**D  Writing.** Take a dispute or disagreement at your work. Write the issue as a question with a date, say who would have to prove it, say what you cannot prove, and name one thing that would have followed from it (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 19.15  Audio script (read after the check)', [
  ['Nour', 'So what has paragraph four cost us?'],
  ['Ms Nahas', '⚠ **The clean version of issue three. We will not get a finding that the change was agreed in May.** **At best we get a finding that it probably was.**'],
  ['Nour', 'And what has it bought?'],
  ['Ms Nahas', '⚠ **A witness they cannot break, and the stock sheets arriving in his mouth instead of mine.**'],
  ['Nour', 'Why does that matter? They are the same documents.'],
  ['Ms Nahas', '⚠ **Because when I point at them in closing, I am counsel and I am paid to.** ⚠ **When he says *I read them and I stopped thinking and started knowing*, that is a man describing what changed his mind** — **and a tribunal has no reason to discount it.**'],
  ['Nour', 'He thought you were calling him a liar.'],
  ['Ms Nahas', '⚠ **I know, and I was not, and I could not have fixed that by saying so more kindly.** ⚠ **What fixed it was that he found the honest distinction himself.** **I could not have supplied it. Only he knew whether his memory had improved or he had found out he was right.**'],
  ['Nour', 'Is there anything I should put on the file?'],
  ['Ms Nahas', '⚠ **That the clean version was given up on my advice, with the date, and that Mr Ayoub agreed it on the ground that it was true.** ⚠ **Not on the ground that it was tactical** — **because in two years somebody will read that paragraph and wonder why he conceded, and the answer should be on the file and not in anybody\'s memory.**'],
  ['Nour', 'And can you tell me we will win?'],
  ['Ms Nahas', '⚠ **No. I can tell you that nothing in your own documents will be used to destroy your own witnesses, which is more than was true of this case a month ago.** ⚠ **The rest is the tribunal\'s, and that is what clause 19 bought you on 26 June, whether anybody read it or not.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**19.1** state an issue as a question with a date and a clause, and tell it from a grievance',
  '**19.2** plead what somebody did rather than what they knew, and say what you do not allege',
  '**19.3** disclose a document that hurts you, with your own reading and what is still against you',
  '**19.4** plead an absence, own it in four words, and find what followed from the event',
  '**19.5** answer the question you were asked, remove a premise, and stop',
  '**19.6** price an offer with four numbers, including what winning actually leaves you',
  '**19.7** write a statement that contains its own change of certainty, with the document and the date',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Back at B2 — three things you already have', [
  '⚠ **' + BACK_AT_B2 + '** — **all three are from earlier in this course, and this unit is where the stakes arrive.** ⚠ **A without-prejudice letter was a form at B1; here it is the offer of 20 March and the four numbers behind it.** **An undertaking was something you kept; here it is something a tribunal holds you to whether you meant it as one or not.** ⚠ **And *on the record* was a choice at B1** — **in Beirut there is no off-the-record, because the offer of 20 March had to be made outside it on purpose.**',
  '⚠ **The record stops being a filing word.** **Everything this firm wrote for three years arrives in one room at once** — ⚠ **and the units that mattered most in Beirut were the ones about writing things down, which is not where anybody expected them to matter.**',
], C.lteal));
out.push(sp());
out.push(p('**Lexis in this unit (32):** ' + LEXIS, { size: 18, color: '595959' }));
out.push(p('**Collocations (8):** ' + COLLOC, { size: 18, color: '595959' }));
out.push(p('**Back at B2 (3):** ' + BACK_AT_B2, { size: 18, color: '595959' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 2 · Syria Edition · Unit 19 · Student\'s Book');
module.exports = out;
