// Proactive Business English B2 · Syria Edition · Book 1 · Unit 12 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a decision written as a question · two answers and no third · a reversible decision · an irreversible decision · the seat of an arbitration · a forum clause · enforceability · a decision that binds your successor · the paper behind a decision · a paper written for one reader · the thing that decides it · a factor that does not decide it · a tie-breaker · the case against your own answer · to argue your own case against yourself · a sentence you will be held to · a clause you did not draft · the wording that survives · a decision recorded with its basis · a decision recorded so it can be revisited · a review date on a decision · a dissent minuted · to minute a dissent without reopening a decision · a decision taken on four papers · an option you did not take · the reasons that were not available · what would have to change · a trigger for revisiting · to be answerable for a decision · a decision you cannot explain in a sentence · the person who will read it in five years · a decision and its date';
const COLLOC = 'to take a decision · to write a case against · to hold somebody to a sentence · to set a review date · to name a trigger · to argue against yourself · to bind a successor · to record a basis';
const BACK_AT_B2 = 'the sense of the meeting · the chair · on the record';

out.push(h1('Unit 12  The Decision You Take'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**12.1**  write a decision as a question with two answers and no third',
  '**12.2**  name the four papers behind it, and what each one is for',
  '**12.3**  find the one thing that decides it, and say what does not',
  '**12.4**  write the case against your own answer, yourself',
  '**12.5**  identify the sentence you will be held to, and get its wording right',
  '**12.6**  record the decision with its basis, its review date and its trigger',
  '**12.7**  Review & Mediate: the decision taken, and the dissent minuted',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ Beirut or Damascus, and a clause of forty-one words', [
  '⚠ **Mr Dallal\'s office has sent a new twelve-month supply agreement, to run from 1 August, and it is better than the old one in every respect but one.** ⚠ **Clause 19 provides that any dispute shall be referred to arbitration seated in Beirut, under Lebanese procedure.** **The old agreement said nothing, which meant the Damascus commercial court.**',
  '⚠ **Forty-one words, which Sham Trading did not draft and cannot amend without reopening the whole agreement.** **The firm may take it, or ask for Damascus, or ask for nothing and sign.**',
  '⚠ **Four papers bear on it and all four exist already.** ⚠ **Mr Sayegh\'s note on the clause. The root-cause paper, because an arbitration decides facts and three of our links are unevidenced. The facility paper, because the bank\'s committee will ask about a foreign seat. And a cost page, because the two routes cost different amounts in different currencies.**',
  '⚠ **This is the last unit of Book 1 and it is a decision rather than a document.** ⚠ **Everything written in the first eleven units exists so that somebody can answer one question in one sentence, on a date, and be held to it.**',
], C.lyellow, C.orange));

// ======================= CYCLE 12.1 =======================
out.push(pb());
out.push(h2('12.1  The decision as a question'));
out.push(p('**Function:** writing a decision as a question with two answers   ·   **Grammar:** _do we accept X or ask for Y? · there is no third answer_   ·   **Pronunciation:** a question with two answers in it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a decision at your work that was never written down as a question. ⚠ Then say how many answers it actually had.'));
out.push(p('**b**  Which can be decided? _What should we do about clause 19? · Do we accept clause 19 as drafted, or ask for Damascus and risk the agreement?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub say about a decision with three answers in it?   **A** it is thorough   **B** it is three decisions, and a meeting will take the easiest of them and believe it has taken all three   **C** it is normal'));
out.push(p('**b**  Listen again. **1** What is the question, in its final form? **2** What is the third answer, and why is it out?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.1  "Two answers, and no third"', [
  ['Nour', 'The question is what to do about clause 19.'],
  ['Mr Ayoub', '⚠ **That is a subject, not a question.** ⚠ **A subject can be discussed for an hour and leave the room exactly where it found it.** **Write it as a question.**'],
  ['Nour', 'Do we accept clause 19, or ask for Damascus, or ask for a third country?'],
  ['Mr Ayoub', '⚠ **Three answers, which is three decisions.** ⚠ **And a meeting with three answers in front of it takes the easiest one and leaves believing it has dealt with all three.**'],
  ['Nour', 'The third country is Cyprus and Mr Sayegh says it is possible.'],
  ['Mr Ayoub', '⚠ **Is it available to us this month, at a price we would pay?**'],
  ['Nour', 'No. It needs their agreement and they have not offered it.'],
  ['Mr Ayoub', '⚠ **Then it is not an answer, it is a preference.** ⚠ **Put it in the paper as an option we did not take, with the reason, and take it out of the question.**'],
  ['Nour', 'So: do we accept clause 19 as drafted, or ask for Damascus?'],
  ['Mr Ayoub', '⚠ **And what does *ask for Damascus* cost if they refuse?**'],
  ['Nour', 'The agreement goes back into negotiation and the 1 August date goes.'],
  ['Mr Ayoub', '⚠ **Then say so in the question.** ⚠ *Do we accept clause 19 as drafted, or ask for Damascus and accept that the 1 August date may go?* **Nineteen words, two answers, and the price of the second one is inside the question.**'],
  ['Nour', 'It makes the second answer look expensive.'],
  ['Mr Ayoub', '⚠ **It is expensive. A question that hides the price of one answer is not a question, it is a recommendation with a question mark on it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A decision, written as a question**',
  table(['', 'Not', 'Write'], [
    ['**a subject**', '⚠ *what should we do about clause 19?*', '⚠ **a question with two answers in it**'],
    ['⚠ **three answers**', '⚠ *accept, ask for Damascus, or ask for Cyprus*', '⚠ **three answers is three decisions** — **and a meeting takes the easiest and believes it has taken all three**'],
    ['⚠ **the unavailable answer**', '**left in the question**', '⚠ **moved to *an option we did not take*, with the reason** — **it is a preference, not an answer**'],
    ['⚠ **the price**', '**left out**', '⚠ *…or ask for Damascus and accept that the 1 August date may go* — **the price of the second answer, inside the question**'],
  ], [1.6, 2.9, 3.9]),
  '⚠ **A subject can be discussed for an hour and leave the room where it found it.** ⚠ **A question has answers, and a decision is one of them being chosen.**',
  '⚠ **Two answers, and no third.** ⚠ **Three answers in front of a meeting is three decisions, and the meeting will take the easiest of them and leave believing it has dealt with all three** — **which is how an option gets ruled out that nobody ever discussed.**',
  '⚠ **Test an answer before it goes in the question: is it available to us, this month, at a price we would pay?** ⚠ **If not, it is a preference, and it belongs in the paper as an option not taken, with the reason** — **where it can be read in five years by somebody asking why.**',
  '⚠ **Put the price of each answer inside the question.** ⚠ *…and accept that the 1 August date may go.* **A question that hides the price of one answer is a recommendation with a question mark on it** — **and the reader will not find the price until after he has agreed.**',
  '⚠ **And keep the question to one sentence.** ⚠ **Nineteen words here.** **A decision you cannot write as one question is usually two decisions, and the second one is the one nobody has noticed.**',
  '**Practise:** Take three decisions at your work. Write each as one question with two answers and the price of each inside it.',
  '**Useful phrases:**  that is a subject, not a question  ·  two answers and no third  ·  is it available at a price we would pay?  ·  an option we did not take  ·  the price inside the question',
  '**Pronunciation – a question with two answers.** 🔊 **Track 12.2** Listen twice. ⚠ **The first says *do we accept clause 19 as drafted, or ask for Damascus and accept that the 1 August date may go?* with the two halves at the same pitch.** ⚠ **The second lifts the first half.** **Lifted, the first answer is the recommended one and the question has already been answered.** Say it four times, level across both halves.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A states a subject; B turns it into a question.'));
out.push(dlg(null, [
  ['A', 'The question is what to do about __________.'],
  ['B', '⚠ **That is a subject. Write it as a question.**'],
  ['A', 'Do we __________, or __________, or __________?'],
  ['B', '⚠ **Three answers is three decisions. Is the third available this month at a price we would pay?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then it is a preference. Where does it go?**'],
  ['A', '⚠ **Into the paper as an option we did not take, with the reason.**'],
  ['B', '⚠ **And what does the second answer cost if they refuse?**'],
  ['A', '__________.'],
  ['B', '⚠ **Put that inside the question.**'],
]));
out.push(table(['Role card 1 — three answers', 'Role card 2 — the hidden price'], [[
  '⚠ **A has three answers and wants all three in the question, because all three are real options in principle.** ⚠ **B applies the test to each: available this month, at a price we would pay?** ⚠ **The third fails on availability** — **it needs the other side\'s agreement and they have not offered it** — **and B makes A say where it goes instead.**',
  '⚠ **A writes *do we accept clause 19 or ask for Damascus?*** ⚠ **B asks what asking for Damascus costs if refused.** ⚠ **The agreement reopens and the 1 August date goes.** ⚠ **B\'s point: left out of the question, the second answer looks free, and a reader will choose it and find the price afterwards** — **and then the decision will be revisited under worse conditions.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the question in its final form and count the words. ⚠ Then say which answer was moved out and why, and where it went.'));
out.push(PHRASE_CARD(['a subject, not a question', 'two answers, no third', 'available at a price we would pay?', 'an option we did not take', 'the price inside the question']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** decisions at your work. Write each as a question.'));
out.push(table(['The subject, as it is now', 'The question, with two answers', 'The price of each answer', 'Options not taken'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 2.4, 1.8, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The subject was _______. The question is: do we _______, or _______ and accept that _______? The option I took out is _______, because _______._'));
out.push(p('**Listener task:** count how many of the questions had more than two answers at the first attempt. ⚠ Then ask how many of the extra answers failed on availability rather than on price, and expect most of them.'));
out.push(p('**Board clinic:** your teacher writes three decisions on the board — look for a subject with a question mark on it, and a question with a free-looking second answer. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**CLAUSE 19: THE QUESTION. 20 June. N. Mansour. Decision paper, page 1 of 4.**',
  '⚠ **The question, in one sentence.** ⚠ _Do we accept clause 19 of the draft agreement as drafted, with arbitration seated in Beirut under Lebanese procedure, or ask for Damascus and accept that the agreement reopens and the 1 August date may go?_',
  '⚠ **Thirty-seven words, two answers, and the price of the second answer inside the question.**',
  table(['', 'The answer', 'What it commits us to', 'What it costs'], [
    ['**A**', '**accept clause 19 as drafted**', '⚠ **arbitration in Beirut, Lebanese procedure, for twelve months from 1 August** — **and in practice for the renewals as well**', '⚠ **a forum we have never used, at Beirut counsel rates, in a currency we do not hold**'],
    ['**B**', '**ask for Damascus**', '⚠ **reopening a thirty-page agreement that is better than the old one in every other respect**', '⚠ **the 1 August date, and about three weeks of Mr Sayegh\'s time, and the risk that they put back two clauses they conceded in May**'],
  ], [0.4, 2.4, 3.6, 3.4]),
  '⚠ **Options not taken, and why.** ⚠ **A neutral third seat, probably Cyprus.** **Mr Sayegh advises that it is the best answer in principle and that we cannot have it:** ⚠ **it requires their agreement, they have not offered it, and asking for it is a third request on a document to which we have already made two.**',
  '⚠ **And signing without raising it at all, which is not the same as answer A** — ⚠ **because answer A is a decision and silence is a decision that nobody has taken.** **It is out because in five years somebody will ask what we thought about clause 19, and *nothing* is not an answer that can be defended.**',
  '⚠ **The sentence this paper exists to produce is one line long and it is at page 4.** **Everything before it is the four papers.** ⚠ **If the question at the top is wrong, the four papers behind it are work done on the wrong question** — **which is why the question took two days and the rest took one.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What are the two answers, and what is the price of each?'));
out.push(item('2', 'What are the two options not taken, and why is the second one not the same as answer A?'));
out.push(item('3', 'Why did the question take longer to write than the rest of the paper?'));
out.push(box('Writer\'s box', [
  '**The question page — four parts:** ⚠ **the question in one sentence, with the price inside it** → **a table of *the answer · what it commits us to · what it costs*** → ⚠ **options not taken, with reasons** → ⚠ **and the option that is silence, named as not being an answer.**',
  '⚠ **Write *what it commits us to* and *what it costs* in separate columns.** ⚠ **A commitment is a duration and a scope; a cost is a figure or a thing lost** — **and the two get confused whenever only one column exists.**',
  '⚠ **Say what an answer commits you to IN PRACTICE as well as in terms.** ⚠ **Twelve months from 1 August, *and in practice for the renewals as well*** — **because a forum clause once accepted is almost never removed at a renewal, and that is a fact about renewals and not about this agreement.**',
  '⚠ **Record the option you cannot have, with the advice that it was the best one.** ⚠ **A neutral seat is the right answer in principle and is not available** — **and in five years that sentence is the difference between a decision and an oversight.**',
  '⚠ **Name silence as an option and rule it out as not being an answer.** ⚠ **Answer A is a decision; signing without raising it is a decision nobody has taken** — **and *nothing* cannot be defended by whoever is asked about it later.**',
  '⚠ **And spend the time on the question.** ⚠ **Two days on nineteen words and one day on the four papers** — **because four papers behind a wrong question are work done on the wrong question.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the question page for a decision of yours (**80 words or more**). Use the frame.'));
out.push(p('**______________: THE QUESTION. ______________. Decision paper, page 1 of ______________.**   ⚠ **The question, in one sentence.** ⚠ _Do we ______________, or ______________ and accept that ______________?_   ⚠ **______________ words, two answers, and the price of the second inside the question.**   **A** | **______________** | ⚠ **______________** | ⚠ **______________**   **B** | **______________** | ⚠ **______________** | ⚠ **______________**   ⚠ **Options not taken, and why.** ⚠ **______________.** **______________ advises that it is the best answer in principle and that we cannot have it:** ⚠ **______________.**   ⚠ **And ______________, which is not the same as answer A** — ⚠ **because answer A is a decision and ______________ is a decision nobody has taken.**   ⚠ **The sentence this paper exists to produce is one line long.** ⚠ **If the question at the top is wrong, everything behind it is work done on the wrong question.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['One question, two answers, no third', ''],
  ['The price of each answer inside the question', ''],
  ['*Commits us to* and *costs* in separate columns', ''],
  ['An option not taken, with the reason it is unavailable', ''],
  ['Silence named as an option and ruled out', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their question. ⚠ The class counts the answers — and where there are three, the class applies the availability test to the third, out loud.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a decision at your work that was never written as a question (**200 to 240 words**). Say what the subject was, how many answers it had, which one was taken, whether anybody noticed the others, and what you would write now.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _how many answers did it really have?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the easiest answer the one taken? Usually all three — ⚠ **and in two of three nobody can now say whether the other answers were considered or merely not reached.**'));
out.push(box('Homework', ['Write your final text. Then take one decision coming up at your work and write it as one question with two answers and the price of each inside it (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 12.2 =======================
out.push(pb());
out.push(h2('12.2  The four papers'));
out.push(p('**Function:** naming what each paper behind a decision is for   ·   **Grammar:** _this paper answers X and does not answer Y_   ·   **Pronunciation:** four titles read as a list'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a decision at your work. ⚠ Then say what documents were in front of whoever took it.'));
out.push(p('**b**  Which paper belongs behind the clause 19 decision? _the root-cause paper, because an arbitration decides facts · the January correspondence with Mr Dallal, because it is about the same customer_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Sayegh say a paper behind a decision must do?   **A** support the recommendation   **B** answer one question and say which question it does not answer   **C** be short'));
out.push(p('**b**  Listen again. **1** What are the four papers? **2** Which paper is not behind this decision, and why not?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.3  "What does each paper answer?"', [
  ['Nour', 'I have put four papers behind the question. Your note on the clause, the root-cause paper, the facility paper and a cost page.'],
  ['Mr Sayegh', '⚠ **Tell me what each one answers, in one line, and what it does not answer.**'],
  ['Nour', 'Yours answers what the clause means. It does not answer whether we should accept it.'],
  ['Mr Sayegh', '⚠ **Correct, and say so in the paper, because somebody will read my note as a recommendation and it is not one.** **Next.**'],
  ['Nour', '⚠ **The root-cause paper answers what our evidence looks like if a tribunal has to weigh it.** ⚠ **Three of our four links are a document, one account and an inference** — **and an arbitration decides facts.**'],
  ['Mr Sayegh', '⚠ **That is the paper most people would not have put in, and it is the one that decides it.** **Go on.**'],
  ['Nour', 'The facility paper answers what the bank will ask. And the cost page answers what each route costs.'],
  ['Mr Sayegh', '⚠ **And the January correspondence? You have left it out.**'],
  ['Nour', '⚠ **Because it is about the same customer and not about this question.** **It answers what happened in March. Nothing in it bears on where a dispute would be heard.**'],
  ['Mr Sayegh', '⚠ **Good, and that is the harder half of the method.** ⚠ **A paper that is about the same subject is not thereby behind the decision** — **and a decision paper with six papers behind it, two of which answer nothing, has four papers and two pieces of furniture.**'],
  ['Nour', 'And somebody will ask where the January file is.'],
  ['Mr Sayegh', '⚠ **Then list it as considered and not relied on, with the one line saying what it answers.** ⚠ **That is not padding. It is the difference between a paper you did not read and a paper you read and set aside.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Four papers, and what each answers**',
  table(['The paper', 'It answers', 'It does not answer'], [
    ['**the note on the clause**', '**what the clause means**', '⚠ **whether we should accept it** — **and say so, because a reader will take a lawyer\'s note for a recommendation**'],
    ['⚠ **the root-cause paper**', '⚠ **what our evidence looks like to a tribunal** — **one document, one account, one inference**', '**what the clause costs**'],
    ['**the facility paper**', '**what the bank will ask about a foreign seat**', '**what a tribunal would decide**'],
    ['**the cost page**', '**what each route costs, in what currency**', '⚠ **which route is better** — **a cost page never decides anything by itself**'],
    ['⚠ **considered, not relied on**', '⚠ **the January correspondence: what happened in March**', '⚠ **nothing bearing on where a dispute is heard** — **and listing it is the difference between a paper you did not read and one you set aside**'],
  ], [1.9, 3.2, 3.4]),
  '⚠ **Every paper behind a decision answers one question, and the paper must say which question it does not answer.** ⚠ **A lawyer\'s note on a clause will be read as a recommendation unless it says that it is not one.**',
  '⚠ **The paper most people would leave out is often the one that decides it.** ⚠ **An arbitration decides facts, so the state of your own evidence is a fact about the forum decision** — **and 7.2 is where that evidence was marked.**',
  '⚠ **A paper about the same subject is not thereby behind the decision.** ⚠ **Six papers of which two answer nothing is four papers and two pieces of furniture** — **and the furniture makes the four look weaker.**',
  '⚠ **List what you considered and did not rely on, with its one line.** ⚠ **It is the difference between a paper you did not read and a paper you read and set aside** — **and in five years nobody can tell the two apart without the list.**',
  '⚠ **And no paper decides a decision.** ⚠ **A cost page gives you two figures and 12.3 is where one of them turns out not to matter.**',
  '**Practise:** Take a decision. List every paper, write what each answers and does not answer, and move two of them to *considered, not relied on*.',
  '**Useful phrases:**  what does each paper answer?  ·  it does not answer whether  ·  considered and not relied on  ·  about the same subject but not behind the decision  ·  pieces of furniture',
  '**Pronunciation – four titles as a list.** 🔊 **Track 12.4** Listen twice. ⚠ **The first reads the four titles with equal weight and a short pause after each.** ⚠ **The second stresses the second one.** **Stressed, it is the paper the speaker is relying on and the other three are decoration** — **and a listener will read only that one.** Read four titles level, four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A lists papers; B asks what each answers.'));
out.push(dlg(null, [
  ['A', 'I have __________ papers behind the question.'],
  ['B', '⚠ **Take the first. What does it answer, and what does it not answer?**'],
  ['A', '⚠ **It answers __________. It does not answer __________.**'],
  ['B', '⚠ **Next.**'],
  ['A', '⚠ **It answers __________. It does not answer __________.**'],
  ['B', '⚠ **And __________? You have left it out.**'],
  ['A', '⚠ **Because it is about the same subject and not about this question.**'],
  ['B', '⚠ **Then where does it go?**'],
  ['A', '⚠ **In the list of papers considered and not relied on, with its one line.**'],
]));
out.push(table(['Role card 1 — the note that is not a recommendation', 'Role card 2 — furniture'], [[
  '⚠ **A has a lawyer\'s note behind the question and has not said what it does not answer.** ⚠ **B reads it as a recommendation, out loud, and acts on it** — **which is what a board will do.** ⚠ **Then A writes the line:** ⚠ *this note answers what the clause means and does not answer whether we should accept it.*',
  '⚠ **A has six papers and two of them are about the same customer.** ⚠ **B asks what each of the two answers, and the answers are about March and about an invoice.** ⚠ **Neither bears on where a dispute is heard.** ⚠ **B\'s point: six papers of which two answer nothing makes the other four look weaker**, **and the fix is a list of papers considered and not relied on.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four papers with what each answers. ⚠ Then write what was moved to *considered, not relied on*, and the one line against it.'));
out.push(PHRASE_CARD(['what does it answer?', 'it does not answer whether', 'considered, not relied on', 'the same subject, not this question', 'pieces of furniture']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take a decision at your work. List **five** papers and sort them.'));
out.push(table(['The paper', 'It answers', 'It does not answer', 'Behind it, or considered only'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 2, 2, 1.5]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The papers behind it are _______ and _______. The first answers _______ and does not answer _______. And I have moved _______ to considered-and-not-relied-on, because _______._'));
out.push(p('**Listener task:** count how many papers each person moved out. ⚠ Then ask how many of the moved papers were about the same subject, and expect all of them.'));
out.push(p('**Board clinic:** your teacher writes three paper lists on the board — look for a lawyer\'s note with no *does not answer* line, and a paper included because it is about the same customer. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**CLAUSE 19: THE PAPERS. 21 June. N. Mansour. Decision paper, page 2 of 4.**',
  table(['', 'The paper', 'It answers', 'It does not answer'], [
    ['**1**', '**K. Sayegh, 17 June — a note on clause 19**', '**what the clause means: seat, procedure, enforceability, and who bears the cost of the tribunal**', '⚠ **whether we should accept it.** ⚠ **It is not a recommendation and Mr Sayegh has written that sentence himself at its head**'],
    ['**2**', '⚠ **the root-cause paper, 14 May, parts 1 to 3**', '⚠ **what our evidence looks like if a tribunal has to weigh it: one gate sheet, one account, one inference, one receiving note**', '**anything about Beirut or about cost**'],
    ['**3**', '**the facility application, 24 May, box 7 and appendix 2**', '⚠ **what the bank\'s committee will ask when it sees a foreign seat in a new agreement**', '**what a tribunal would decide, or what it would cost**'],
    ['**4**', '**the cost page, 20 June**', '**what each route costs: tribunal fees, counsel, travel, currency**', '⚠ **which route is better** — **and it says so in its own first line**'],
  ], [0.4, 2.6, 3.2, 3.2]),
  '⚠ **Considered and not relied on.** ⚠ **The January to March correspondence with Mr Dallal\'s office (it answers what happened in March; nothing in it bears on where a dispute is heard).** **The 2023 supply agreement (it answers what the old terms were; it is silent on forum, which is itself in paper 1).** ⚠ **And the credit policy of 1 April (it answers what terms we give; Mr Dallal is not on the exception list and the question is not about credit).**',
  '⚠ **Paper 2 is the one nobody else would have put in and it is the one that decides this.** **An arbitration decides facts.** ⚠ **Our facts, written down in May for a different purpose, are a gate sheet, one man\'s account, an inference and a receiving note** — **and the middle two are the ones a tribunal would test.** ⚠ **Nobody was thinking about Beirut when that paper was written, which is exactly why it is useful: it was not written to support an answer.**',
  '⚠ **Paper 4 disqualifies itself in its own first line and that is deliberate.** ⚠ *This page gives two figures and does not say which route is better.* **A cost page that recommends is a recommendation with figures attached**, **and the figures then cannot be checked without re-arguing the recommendation.**',
  '⚠ **And the three papers in the considered list are there because somebody will look for them.** ⚠ **A reader who cannot find the credit policy in this file will assume we did not think of it** — **and one line stops that for ever, at the cost of one line.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which paper decides it, and what makes it useful?'));
out.push(item('2', 'What does paper 4 say in its own first line, and why?'));
out.push(item('3', 'Why are the three considered papers listed at all?'));
out.push(box('Writer\'s box', [
  '**The papers page — four parts:** **a table of *the paper · it answers · it does not answer*** → ⚠ **a list of papers considered and not relied on, each with one line** → ⚠ **the paper that decides it** → ⚠ **and the paper that disqualifies itself.**',
  '⚠ **Date and identify every paper.** ⚠ *K. Sayegh, 17 June* · *the root-cause paper, 14 May, parts 1 to 3* — **a paper referred to without a date and an author is a paper nobody can find in five years.**',
  '⚠ **Make a lawyer\'s note say that it is not a recommendation, at its own head.** ⚠ **Better still, get the lawyer to write that sentence** — **because a board reads an adviser\'s note as advice about the decision and not as advice about the clause.**',
  '⚠ **Name the paper that was written for another purpose.** ⚠ **Nobody was thinking about Beirut in May** — **which is why the root-cause paper is evidence and not advocacy, and that is the sentence to write about it.**',
  '⚠ **Let the cost page disqualify itself in its first line.** ⚠ *This page gives two figures and does not say which route is better.* **A cost page that recommends cannot be checked without re-arguing the recommendation.**',
  '⚠ **And list what you set aside, with one line each.** ⚠ **A reader who cannot find the credit policy will assume you did not think of it** — **and the cure costs one line and lasts as long as the file.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the papers page for a decision of yours (**80 words or more**). Use the frame.'));
out.push(p('**______________: THE PAPERS. ______________. Decision paper, page 2 of ______________.**   **1** | **______________, ______________** | **______________** | ⚠ **______________**   **2** | ⚠ **______________, ______________** | ⚠ **______________** | **______________**   **3** | **______________, ______________** | ⚠ **______________** | **______________**   **4** | **______________, ______________** | **______________** | ⚠ **which route is better** — **and it says so in its own first line**   ⚠ **Considered and not relied on.** ⚠ **______________ (it answers ______________; nothing in it bears on ______________).** **______________ (it answers ______________).**   ⚠ **Paper ______________ is the one nobody else would have put in and it is the one that decides this.** ⚠ **Nobody was thinking about ______________ when it was written, which is exactly why it is useful.**   ⚠ **And the considered list is there because somebody will look for those papers.** ⚠ **A reader who cannot find ______________ will assume we did not think of it.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every paper with a date and an author', ''],
  ['A *does not answer* line for all of them', ''],
  ['The adviser\'s note marked as not a recommendation', ''],
  ['A list of papers considered and not relied on', ''],
  ['The paper written for another purpose, named as such', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *does not answer* column. ⚠ The class says whether any two papers answer the same question — and where two do, one of them is furniture.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a decision at your work taken on one paper (**200 to 240 words**). Say what the paper was, what question it answered, what questions nobody had a paper for, who noticed, and what happened afterwards.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _what question had no paper behind it?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the single paper answer a question of cost? Usually two of three — ⚠ **and in both of those the question nobody had a paper for was what the decision committed the firm to, and for how long.**'));
out.push(box('Homework', ['Write your final text. Then take one decision coming up, list every paper, and write what each answers and does not answer (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 12.3 =======================
out.push(pb());
out.push(h2('12.3  The thing that decides it'));
out.push(p('**Function:** separating the deciding factor from the rest   ·   **Grammar:** _this decides it · that does not decide it, although it is true_   ·   **Pronunciation:** a single reason given without a list'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a decision you have taken. ⚠ Then say the one thing that decided it.'));
out.push(p('**b**  Which decides it? _arbitration in Beirut would cost about four times a Damascus hearing · an arbitration decides facts, and two of our four links are an account and an inference_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say about a paper with five reasons in it?   **A** it is thorough   **B** a reader will find the weakest of the five and the decision will be worth whatever that one is worth   **C** it is too long'));
out.push(p('**b**  Listen again. **1** What decides it? **2** What are the two true things that do not decide it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.5  "One reason, and the rest are true"', [
  ['Nour', 'I have five reasons for accepting clause 19.'],
  ['Nadia', '⚠ **Then a reader will find the weakest of the five, and the decision will be worth whatever that one is worth.** ⚠ **Which of the five decides it?**'],
  ['Nour', 'The evidence. An arbitration decides facts, and two of our four links are an account and an inference.'],
  ['Nadia', '⚠ **Say more. Why does that favour Beirut rather than Damascus?**'],
  ['Nour', '⚠ **Because a tribunal of commercial arbitrators reads a marked chain the way Mr Attar reads it** — **a document, an account, an inference, each weighted.** ⚠ **A court takes evidence in a form we have never prepared, and the two soft links would be tested by a process we do not know.**'],
  ['Nadia', '⚠ **That is the reason, and it is the only one of the five that would change the answer if it changed.** **Test the others against that.**'],
  ['Nour', 'Cost. Beirut is about four times a Damascus hearing.'],
  ['Nadia', '⚠ **True. Does it change the answer?**'],
  ['Nour', '…No. It changes what we spend if there is a dispute, and there has never been one in nineteen years.'],
  ['Nadia', '⚠ **Then it does not decide it, and say so in those words** — **_this is true and it does not decide it_.** **Next.**'],
  ['Nour', 'The bank. The committee will ask about a foreign seat.'],
  ['Nadia', '⚠ **Will it change their answer?**'],
  ['Nour', '⚠ **Mr Haddad says it is a question and not an objection, and that he has four customers with Beirut clauses.**'],
  ['Nadia', '⚠ **Then it is a question to be ready for and not a reason.** ⚠ **Put both in the paper under *factors that do not decide it*, and you will be believed on the one that does.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**One reason, and the true things that are not reasons**',
  table(['', 'The factor', 'Does it decide it?'], [
    ['⚠ **the evidence**', '⚠ **an arbitration decides facts, and two of our four links are an account and an inference; a tribunal weighs a marked chain and a court takes evidence in a form we have never prepared**', '⚠ **YES** — **and it is the only one of the five that would change the answer if it changed**'],
    ['**cost**', '**Beirut is about four times a Damascus hearing**', '⚠ **no** — **it changes what we spend IF there is a dispute, and there has not been one in nineteen years**'],
    ['**the bank**', '**the committee will ask about a foreign seat**', '⚠ **no** — **a question to be ready for, not a reason; Mr Haddad has four customers with Beirut clauses**'],
    ['**speed**', '**arbitration is faster**', '⚠ **no** — **true of both and of neither in particular**'],
    ['**the relationship**', '**asking for Damascus would be a third request**', '⚠ **no** — **it is a cost of answer B and it is already inside the question**'],
  ], [1.4, 4, 3.4]),
  '⚠ **A paper with five reasons in it invites a reader to find the weakest, and the decision is then worth whatever that reason is worth.**',
  '⚠ **The test for the deciding factor is one question: would the answer change if this changed?** ⚠ **Exactly one factor should pass it** — **and if none does, the decision is finely balanced and that is itself the finding.**',
  '⚠ **Write *this is true and it does not decide it* in those words.** ⚠ **It is the sentence that makes the reader believe you on the one that does** — **and a factor that is omitted rather than dismissed reads as a factor you had not thought of.**',
  '⚠ **A cost that only arises if something goes wrong is not a reason, it is a contingency.** ⚠ **Four times a hearing, on a dispute that has not happened in nineteen years** — **and 4.4 is where that arithmetic belongs.**',
  '⚠ **And a question is not an objection.** ⚠ **The committee will ask; four of its customers have the same clause** — **so the work is to be ready for the question, and the clause is not thereby a reason to refuse.**',
  '**Practise:** Take a decision with four or five reasons. Apply the test to each and find the one that decides it.',
  '**Useful phrases:**  would the answer change if this changed?  ·  this is true and it does not decide it  ·  a question, not an objection  ·  a contingency, not a cost  ·  the only one of the five',
  '**Pronunciation – one reason, without a list.** 🔊 **Track 12.6** Listen twice. ⚠ **The first gives the deciding reason and stops, and the four others come afterwards under their own heading.** ⚠ **The second gives all five in one breath with *and* between them.** **Listed together, all five sound like one reason in five parts, and a reader tests the weakest.** Give one reason and stop, four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has five reasons; B applies the test.'));
out.push(dlg(null, [
  ['A', 'I have five reasons for __________.'],
  ['B', '⚠ **Which of them decides it?**'],
  ['A', '__________, because __________.'],
  ['B', '⚠ **Would the answer change if that changed?**'],
  ['A', '⚠ **Yes.**'],
  ['B', '⚠ **Now the second. __________. Would the answer change if that changed?**'],
  ['A', '…No. It changes __________.'],
  ['B', '⚠ **Then say it in those words.**'],
  ['A', '⚠ **This is true and it does not decide it.**'],
]));
out.push(table(['Role card 1 — the weakest of five', 'Role card 2 — a question, not an objection'], [[
  '⚠ **A gives five reasons in one breath.** ⚠ **B picks the weakest** — **the one about speed, which is true of both routes** — **and attacks only that one.** ⚠ **A finds that the whole recommendation is now being argued on its worst reason**, **and B makes the general point: a list invites a choice and a reader chooses the one he can beat.**',
  '⚠ **A treats the bank\'s interest as a reason against a Beirut seat.** ⚠ **B asks what the bank will actually do** — **ask a question, which Mr Haddad has already said, having four customers with the same clause.** ⚠ **So the work is to be ready for a question**, **and B makes A write it under *factors that do not decide it* rather than leaving it out.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the deciding factor and the test applied to it. ⚠ Then write two of the true things that do not decide it, in the words the unit uses.'));
out.push(PHRASE_CARD(['would the answer change?', 'true, and it does not decide it', 'a question, not an objection', 'a contingency, not a cost', 'the only one of the five']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take a decision at your work. Test **five** factors.'));
out.push(table(['The factor', 'Is it true?', 'Would the answer change if it changed?', 'Decides it, or does not'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2, 1, 2.2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The thing that decides it is _______, because _______. And _______ is true and does not decide it, because it changes _______ and not the answer._'));
out.push(p('**Listener task:** count how many people found exactly one deciding factor. ⚠ Then ask how many found none, and say that a decision with no deciding factor is finely balanced and that this is a finding and not a failure.'));
out.push(p('**Board clinic:** your teacher writes three recommendations on the board — look for five reasons joined by *and*, and a contingency presented as a cost. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**CLAUSE 19: WHAT DECIDES IT. 22 June. N. Mansour. Decision paper, page 3 of 4.**',
  '⚠ **The thing that decides it.** ⚠ **An arbitration decides facts, and our facts are a marked chain: one gate sheet, one man\'s account, one inference and one receiving note.** **A commercial tribunal reads a marked chain the way an auditor reads it, link by link, with the weight of each stated.** ⚠ **A court takes evidence in a form we have never prepared and would test the two soft links by a process we do not know.** **On the only question that would ever matter — what happened and who can show it — Beirut is the forum in which our own papers are usable.**',
  table(['', 'True, and does not decide it', 'Because'], [
    ['**1**', '**Beirut costs about four times a Damascus hearing**', '⚠ **it changes what we spend if there is a dispute, and there has not been one in nineteen years** — **a contingency and not a cost**'],
    ['**2**', '**the bank\'s committee will ask about a foreign seat**', '⚠ **a question and not an objection** — **Mr Haddad has four customers with Beirut clauses and says so**'],
    ['**3**', '**arbitration is faster than the court**', '⚠ **true of both routes** — **the choice here is the seat and not the method**'],
    ['**4**', '**asking for Damascus would be a third request on one document**', '⚠ **a cost of answer B, and it is already inside the question** — **counting it twice would be counting it twice**'],
  ], [0.4, 3.4, 4.4]),
  '⚠ **Four true things, and none of them changes the answer.** ⚠ **They are in this paper because a reader who does not find the cost difference here will assume we did not know it** — **and because the fourth one is already in the question, and a reader needs to be told that it has not been counted twice.**',
  '⚠ **The sentence I have tested hardest is the deciding one, and the test is the one Nadia gave me:** ⚠ **would the answer change if it changed?** ⚠ **If our chain were four documents, the two forums would be about equal and cost would decide it** — **and then the answer would be Damascus.** **So the deciding factor passes the test, and it also tells us what would reverse the decision, which is 12.6.**',
  '⚠ **And the uncomfortable part, which is in the paper because it is true:** ⚠ **the reason Beirut is better for us is that our own evidence is weaker than it should be.** **A firm with four documented links would not need to think about this at all.** ⚠ **We are choosing the forum that forgives the state of our filing, and that sentence belongs in a decision paper and not only in a conversation.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What decides it, and what is the one question that would ever matter?'));
out.push(item('2', 'Why are the four true things in the paper at all?'));
out.push(item('3', 'What is the uncomfortable part, and why is it in the paper?'));
out.push(box('Writer\'s box', [
  '**What decides it — four parts:** ⚠ **the deciding factor, in one paragraph** → **a table of *true, and does not decide it · because*** → ⚠ **the test applied to the deciding factor itself** → ⚠ **and the uncomfortable part.**',
  '⚠ **Give the deciding factor a paragraph and nothing else a paragraph.** ⚠ **Everything else goes in a table** — **because the shape of the page is itself the argument, and a reader who sees five paragraphs reads five reasons.**',
  '⚠ **Write *true, and does not decide it* with the reason beside it.** ⚠ **A factor omitted reads as a factor you had not thought of** — **and a cost difference of four times, left out, is the first thing a reader will look for.**',
  '⚠ **Apply the test to the deciding factor itself and show the working.** ⚠ *If our chain were four documents, the two forums would be about equal and cost would decide it, and the answer would be Damascus.* **Which proves it decides, and names what would reverse it** — **and 12.6 needs that sentence.**',
  '⚠ **Say when a factor is already in the question.** ⚠ **The third request is a cost of answer B and it is inside the question already** — **and a reader needs to be told that it has not been counted twice.**',
  '⚠ **And write the uncomfortable part.** ⚠ **We are choosing the forum that forgives the state of our own filing** — **true, unflattering, and the single most useful sentence in the paper for whoever reads it in five years.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *what decides it* for a decision of yours (**80 words or more**). Use the frame.'));
out.push(p('**______________: WHAT DECIDES IT. ______________. Decision paper, page 3 of ______________.**   ⚠ **The thing that decides it.** ⚠ **______________.** **______________.** ⚠ **On the only question that would ever matter** — **______________** — **______________.**   **1** | **______________** | ⚠ **______________**   **2** | **______________** | ⚠ **a question and not an objection** — **______________**   **3** | **______________** | ⚠ **______________**   **4** | **______________** | ⚠ **a cost of answer B, and it is already inside the question**   ⚠ **______________ true things, and none of them changes the answer.** ⚠ **They are here because a reader who does not find ______________ will assume we did not know it.**   ⚠ **The test on the deciding one:** ⚠ **would the answer change if it changed?** **If ______________, then ______________ and the answer would be ______________.**   ⚠ **And the uncomfortable part, which is here because it is true:** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['One paragraph for the deciding factor, and nothing else', ''],
  ['*True, and does not decide it*, with reasons', ''],
  ['The test applied to the deciding factor, with the working', ''],
  ['A factor identified as already inside the question', ''],
  ['The uncomfortable part, written', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their deciding factor. ⚠ The class applies the test out loud — and where two factors both pass it, one of them is a consequence of the other and should be named as such.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a decision at your work argued on its weakest reason (**200 to 240 words**). Say what the decision was, how many reasons were given, which one was attacked, what the strongest reason was, and whether it ever got heard.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _did the strongest reason ever get heard?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the strongest reason never get heard? Usually two of three — ⚠ **and in both the writer can still name it, which means it existed and was never said in the room.**'));
out.push(box('Homework', ['Write your final text. Then take one recommendation of yours, apply the test to every reason in it, and keep only the one that decides it (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 12.4 =======================
out.push(pb());
out.push(h2('12.4  The case against your own answer'));
out.push(p('**Function:** writing the other side yourself   ·   **Grammar:** _the case against is this · if I am wrong it is because_   ·   **Pronunciation:** an opposing case read without irony'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a recommendation you have made. ⚠ Then give the best argument against it.'));
out.push(p('**b**  Which is a case against? _some people might prefer Damascus · if the dispute is about money rather than facts, Beirut costs four times as much and decides nothing a court could not_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar say about a paper with no case against it?   **A** it is confident   **B** somebody else will write the case against, worse, later, and in front of people   **C** it is shorter'));
out.push(p('**b**  Listen again. **1** What is the strongest case against accepting clause 19? **2** What does he say about writing it badly on purpose?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.7  "Write the other side, properly"', [
  ['Mr Attar', 'Your paper recommends accepting. Where is the case against?'],
  ['Nour', 'On page 3, under the factors that do not decide it.'],
  ['Mr Attar', '⚠ **That is not the case against, that is a list of things you have dismissed.** ⚠ **The case against is the best argument a competent person would make for the other answer, written by you, as well as they would write it.**'],
  ['Nour', 'Then: if the dispute is about money rather than facts, Beirut costs about four times as much and decides nothing a Damascus court could not.'],
  ['Mr Attar', '⚠ **That is a real case. Go on.**'],
  ['Nour', '⚠ **And most disputes with a customer are about money. Ours would be about eleven cartons three times, which is a fact question, but a dispute about the 2.1 million of annual turnover would be a money question.**'],
  ['Mr Attar', '⚠ **So your deciding factor assumes the dispute we have already had, and not the dispute we might have.** **Write that sentence.**'],
  ['Nour', 'It weakens my recommendation.'],
  ['Mr Attar', '⚠ **It states the condition on which your recommendation holds, which is a different thing and is worth more.** ⚠ **And if you do not write it, somebody will write it worse, later, in front of people** — **and then your paper is a paper that missed something.**'],
  ['Nour', 'I could write it and answer it in the same paragraph.'],
  ['Mr Attar', '⚠ **You can answer it, after it, in its own paragraph.** ⚠ **What you must not do is write it badly on purpose so that your answer looks better** — **because a reader who knows the subject sees the weak version and concludes that you could not see the strong one.**'],
  ['Nour', 'And if the case against turns out to be stronger?'],
  ['Mr Attar', '⚠ **Then you have changed your mind on your own paper before anybody read it, which is the cheapest change of mind available.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The case against your own answer**',
  table(['', 'Not', 'Write'], [
    ['**what it is**', '⚠ **a list of factors you have dismissed**', '⚠ **the best argument a competent person would make for the other answer, written by you, as well as they would write it**'],
    ['⚠ **the strength**', '⚠ **a weak version, so that your answer looks better**', '⚠ **the strong version** — **a reader who knows the subject sees the weak one and concludes you could not see the strong one**'],
    ['**the answer**', '**in the same paragraph**', '⚠ **after it, in its own paragraph** — **so that the case against can be read on its own**'],
    ['⚠ **the condition**', '**left out**', '⚠ *my recommendation assumes the dispute we have already had, and not the dispute we might have*'],
  ], [1.3, 2.9, 4.1]),
  '⚠ **A paper with no case against it is a paper whose case against will be written by somebody else, worse, later, and in front of people.** ⚠ **And then your paper is a paper that missed something.**',
  '⚠ **The case against is not the factors you dismissed.** ⚠ **It is the best argument for the other answer**, **and the test is whether somebody who holds that view would recognise it as their own.**',
  '⚠ **Never write it badly on purpose.** ⚠ **A reader who knows the subject sees the weak version and draws the worse of the two available conclusions** — **not that you were being unfair, but that you could not see the strong argument.**',
  '⚠ **Answer it afterwards, in its own paragraph.** ⚠ **A case against with the answer woven through it cannot be read on its own** — **and the person who most needs to read it on its own is you, next year.**',
  '⚠ **State the condition on which your recommendation holds.** ⚠ *It assumes the dispute we have already had, and not the dispute we might have.* **That is not a weakening** — **it is the sentence that tells a reader when to come back, and 12.6 turns it into a trigger.**',
  '**Practise:** Take a recommendation. Write the case against it as its holder would, then answer it in a separate paragraph, then state the condition.',
  '**Useful phrases:**  the case against is  ·  as well as they would write it  ·  it assumes X and not Y  ·  the cheapest change of mind available  ·  somebody will write it worse, later',
  '**Pronunciation – an opposing case read without irony.** 🔊 **Track 12.8** Listen twice. ⚠ **The first reads the case against flatly, exactly as the recommendation is read.** ⚠ **The second reads it slightly faster and lighter.** **The lightness is audible, and a listener hears that the speaker does not believe it** — **which is the spoken version of writing it badly on purpose.** Read it four times at the same weight as your own case.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A recommends; B demands the case against.'));
out.push(dlg(null, [
  ['B', '⚠ **Your paper recommends __________. Where is the case against?**'],
  ['A', 'On page __________, under __________.'],
  ['B', '⚠ **That is a list of things you have dismissed. Give me the best argument for the other answer.**'],
  ['A', '⚠ **If __________, then __________ and __________.**'],
  ['B', '⚠ **That is a real case. What does it tell you about your own deciding factor?**'],
  ['A', '⚠ **That it assumes __________ and not __________.**'],
  ['B', '⚠ **Write that sentence. Where does your answer to the case go?**'],
  ['A', '⚠ **After it, in its own paragraph.**'],
]));
out.push(table(['Role card 1 — the dismissed list', 'Role card 2 — written badly on purpose'], [[
  '⚠ **A points to the *factors that do not decide it* page as the case against.** ⚠ **B\'s distinction: those are four things A has dismissed, and a case against is one thing somebody else would urge.** ⚠ **B asks who would argue for Damascus and what their best point would be** — **and the answer is a money dispute, which A had not written anywhere.**',
  '⚠ **A writes the case against as *some people prefer a local court*.** ⚠ **B, who knows the subject, says what the strong version is and watches A recognise it.** ⚠ **Then B asks what A has just told the reader about A** — **that A could not see it** — **and that is worse than having been thought one-sided.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the case against in its strong form. ⚠ Then write the condition on which the recommendation holds, and say where the answer to the case goes.'));
out.push(PHRASE_CARD(['where is the case against?', 'as well as they would write it', 'it assumes X, not Y', 'in its own paragraph', 'the cheapest change of mind']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** recommendations of yours. Write the case against each.'));
out.push(table(['The recommendation', 'The case against, in its strong form', 'My answer to it', 'The condition it holds on'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 2.4, 1.9, 1.7]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I recommend _______. The case against is _______. My answer is _______. And the condition is that it assumes _______ and not _______._'));
out.push(p('**Listener task:** count how many cases against were stated in their strong form at the first attempt. ⚠ Then ask how many people changed their recommendation while writing it, and expect one or two, which is the cycle working.'));
out.push(p('**Board clinic:** your teacher writes three cases against on the board — look for *some people might prefer*, and a case answered inside its own sentence. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**CLAUSE 19: THE CASE AGAINST ACCEPTING, AND MY ANSWER. 23 June. N. Mansour. Decision paper, page 3a.**',
  '⚠ **The case against, as Mr Attar would put it.** ⚠ **A forum is chosen once and used, if at all, years later, for a dispute whose subject nobody can predict.** **Most disputes between a supplier and a customer of this kind are about money: an unpaid balance, a disputed credit, a price adjustment.** ⚠ **A money dispute is decided on invoices and statements, which both sides have, and in which the weight of an account against a document does not arise.** ⚠ **For such a dispute Beirut costs about four times a Damascus hearing, in a currency we do not hold, and decides nothing a Damascus court could not decide as well.** **And a clause accepted now will govern the renewals, when the trading relationship may be four times its present size and the sums correspondingly larger.**',
  '⚠ **My answer, in its own paragraph.** **The case is correct about money disputes and I do not dispute any of it.** ⚠ **What it understates is that our only actual dispute in nineteen years is a fact dispute, and it is live** — **Mr Dallal\'s claim arises from the pallet condition, and the evidence for it is the chain in the May paper.** ⚠ **A forum chosen for the dispute we have is worth more than a forum chosen for the dispute we might have**, **because the first one is in front of us and the second is a class of events.** **If the Dallal claim is settled and no fact dispute remains, the case against becomes the stronger argument.**',
  '⚠ **The condition on which my recommendation holds.** ⚠ **It assumes the dispute we have already had, and not the dispute we might have** — **and if the pallet claims are settled and our chain is four documents instead of two, cost decides it and the answer is Damascus.**',
  '⚠ **I have written this page last and it has changed one thing in page 3.** **The deciding factor stands, and its wording does not: I had written *on the only question that would ever matter*, and that is not true.** ⚠ **It is the only question that has ever arisen in nineteen years, which is a different claim and is the one I can support.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the case against say about renewals?'));
out.push(item('2', 'What does the answer concede, and what does it say the case understates?'));
out.push(item('3', 'What changed in page 3 as a result of writing this page?'));
out.push(box('Writer\'s box', [
  '**The case against — four parts:** ⚠ **the case, in its strong form, attributed** → ⚠ **your answer, in its own paragraph** → ⚠ **the condition on which your recommendation holds** → ⚠ **and what writing it changed.**',
  '⚠ **Attribute the case to the best person who holds it.** ⚠ *As Mr Attar would put it.* **It forces the strong version, because the named person will read it** — **and it tells your reader that somebody competent disagrees.**',
  '⚠ **Concede the parts that are right, in terms.** ⚠ *The case is correct about money disputes and I do not dispute any of it.* **A case against that is answered on every point has been answered by somebody who was not listening.**',
  '⚠ **Say what the case understates rather than what it gets wrong.** ⚠ **_Our only actual dispute in nineteen years is a fact dispute, and it is live_** — **which is a difference of weight and not of fact, and most real disagreements are differences of weight.**',
  '⚠ **Name the circumstances in which the case against would win.** ⚠ *If the claims are settled and our chain is four documents, cost decides it and the answer is Damascus.* **That sentence is a trigger, and 12.6 is where it goes.**',
  '⚠ **And record what writing this page changed.** ⚠ **_On the only question that would ever matter_ became *the only question that has arisen in nineteen years*** — **a smaller claim, supportable, and found only by arguing against yourself.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the case against your own recommendation (**80 words or more**). Use the frame.'));
out.push(p('**______________: THE CASE AGAINST, AND MY ANSWER. ______________. Decision paper, page ______________.**   ⚠ **The case against, as ______________ would put it.** ⚠ **______________.** **______________.** ⚠ **And ______________.**   ⚠ **My answer, in its own paragraph.** **The case is correct about ______________ and I do not dispute it.** ⚠ **What it understates is ______________.** **If ______________, the case against becomes the stronger argument.**   ⚠ **The condition on which my recommendation holds.** ⚠ **It assumes ______________ and not ______________** — **and if ______________, the answer is ______________.**   ⚠ **I have written this page last and it has changed ______________.** **I had written ______________, and that is not true** — ⚠ **it is ______________, which is a different claim and is the one I can support.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The case attributed to somebody who holds it', ''],
  ['The parts that are right, conceded in terms', ''],
  ['*Understates* rather than *gets wrong*', ''],
  ['The circumstances in which the case against would win', ''],
  ['What writing the page changed', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their case against. ⚠ The class says whether somebody holding that view would recognise it as their own — and where they would not, the case has been written badly on purpose, however unintentionally.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a decision at your work where the case against was made later by somebody else (**200 to 240 words**). Say what the decision was, what the case against turned out to be, who made it, when, and what it cost that it arrived afterwards.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _could the writer have written it first?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many could the writer have written the case against beforehand? Usually all three — ⚠ **and in two of three the person who made it was in the room when the decision was taken and said nothing, which is 10.4.**'));
out.push(box('Homework', ['Write your final text. Then take a recommendation of yours, write the case against it as its best holder would, and state the condition on which your recommendation holds (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 12.5 =======================
out.push(pb());
out.push(h2('12.5  The sentence you will be held to'));
out.push(p('**Function:** identifying and wording the operative sentence   ·   **Grammar:** _the sentence that will be read in five years is this one_   ·   **Pronunciation:** one sentence read four times for its wording'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a document you wrote more than a year ago. ⚠ Then say which sentence of it anybody has ever quoted back to you.'));
out.push(p('**b**  Which sentence will be quoted? _we have considered the matter carefully and taken advice · we accept clause 19 as drafted, on the basis that our evidence is better suited to arbitration than to a court_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub say about the sentence a decision is remembered by?   **A** it is the first one   **B** it is the one that states the decision and its basis, and it is usually the only one anybody reads again   **C** it is in the minute'));
out.push(p('**b**  Listen again. **1** What are the two parts of the operative sentence? **2** Why does he refuse the words *in the light of all the circumstances*?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.9  "This is the sentence"', [
  ['Mr Ayoub', 'Four pages. Which sentence will I be quoted in five years?'],
  ['Nour', 'The recommendation, I suppose. On page 4.'],
  ['Mr Ayoub', '⚠ **Read it to me.**'],
  ['Nour', '*In the light of all the circumstances it is recommended that clause 19 be accepted as drafted.*'],
  ['Mr Ayoub', '⚠ **_In the light of all the circumstances_ is six words that say we had reasons and do not say what they were.** ⚠ **In five years somebody will ask what the circumstances were, and the four pages will be in a file nobody can find.**'],
  ['Nour', 'The basis is on page 3.'],
  ['Mr Ayoub', '⚠ **Then put it in the sentence.** ⚠ **The sentence that states a decision has two parts: what is decided, and on what basis** — **and the basis has to be the deciding factor and not a gesture at a file.**'],
  ['Nour', '⚠ *We accept clause 19 as drafted, on the basis that our evidence in a fact dispute is better suited to arbitration than to a court.*'],
  ['Mr Ayoub', '⚠ **That is the sentence, and now say it twice more and change nothing.** ⚠ **Because the version I will be quoted is this one and not the next one you think of.**'],
  ['Nour', 'And *it is recommended that*?'],
  ['Mr Ayoub', '⚠ **Out. I am taking the decision and the paper is yours.** ⚠ *We accept* **is what the minute will say, and a recommendation written as a decision has pre-empted me** — **so the paper says *I recommend* and the minute says *we accept*, and the two sentences are different documents.**'],
  ['Nour', 'And if the basis turns out to be wrong?'],
  ['Mr Ayoub', '⚠ **Then we will be held to a sentence that says what we thought, which is the right thing to be held to.** ⚠ **A decision with no basis in it cannot be wrong and cannot be defended** — **and in five years that is the worse of the two positions by a long way.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The operative sentence**',
  table(['', 'Not', 'Write'], [
    ['⚠ **the basis**', '⚠ *in the light of all the circumstances* — **six words saying we had reasons, not what they were**', '⚠ *on the basis that our evidence in a fact dispute is better suited to arbitration than to a court*'],
    ['**the voice**', '⚠ *it is recommended that clause 19 be accepted*', '⚠ **in the paper: *I recommend*.** **In the minute: *we accept*.** **Two sentences, two documents**'],
    ['⚠ **the wording**', '**the next version you think of**', '⚠ **say it twice more and change nothing** — **the version you will be quoted is this one**'],
    ['⚠ **no basis at all**', '**a decision that cannot be wrong**', '⚠ **and cannot be defended** — **which is the worse of the two positions by a long way**'],
  ], [1.3, 3, 4]),
  '⚠ **One sentence in a decision paper gets quoted in five years, and it is the one that states the decision and its basis.** ⚠ **Find it, write it, and then stop improving it.**',
  '⚠ **The basis in the sentence must be the deciding factor, not a gesture at a file.** ⚠ **_In the light of all the circumstances_ points at four pages that will be in a drawer nobody can open** — **and the sentence will then be read as a decision taken for no stated reason.**',
  '⚠ **Keep the paper\'s voice out of the minute\'s.** ⚠ **A paper recommends; a minute decides.** **A recommendation written as a decision has pre-empted the person whose decision it is** — **and he will notice.**',
  '⚠ **Say the sentence twice more and change nothing.** ⚠ **The version that goes in is the version you will be quoted**, **and the fourth reading adds a hedge, exactly as it does at 11.1.**',
  '⚠ **And prefer a basis that can turn out to be wrong.** ⚠ **A decision with no basis cannot be wrong and cannot be defended** — **and being held to a sentence that says what you thought is the right thing to be held to.**',
  '**Practise:** Take three decisions. Write the operative sentence for each, with its basis in it, and then say each one twice more without changing it.',
  '**Useful phrases:**  which sentence will I be quoted?  ·  on the basis that  ·  I recommend / we accept  ·  say it twice more and change nothing  ·  it says what we thought',
  '**Pronunciation – one sentence read for its wording.** 🔊 **Track 12.10** Listen twice. ⚠ **The first reads the operative sentence slowly, with a clear stop at *as drafted* and at the end.** ⚠ **The second runs it together.** **Run together, the basis sounds like a subordinate clause a reader may skip; stopped, it is the second half of the decision.** Read it four times with the stop.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. B asks for the sentence; A words it.'));
out.push(dlg(null, [
  ['B', '⚠ **__________ pages. Which sentence will I be quoted in five years?**'],
  ['A', '__________.'],
  ['B', '⚠ **Read it to me.**'],
  ['A', '*In the light of __________ it is recommended that __________.*'],
  ['B', '⚠ **What were the circumstances?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then put it in the sentence. And take out *it is recommended*.**'],
  ['A', '⚠ *I recommend __________, on the basis that __________.*'],
  ['B', '⚠ **Say it twice more and change nothing.**'],
]));
out.push(table(['Role card 1 — the circumstances', 'Role card 2 — the paper and the minute'], [[
  '⚠ **A offers *in the light of all the circumstances*.** ⚠ **B simply asks what the circumstances were, and A answers in one clause** — **which is the clause that should have been in the sentence.** ⚠ **B\'s point: the phrase is a place-holder for a sentence A can already say, and the only reason it is there is that it feels weightier.**',
  '⚠ **A has written *it is recommended that clause 19 be accepted* and thinks it is modest.** ⚠ **B, playing the owner, points out that the passive has taken the decision** — **and that the minute will now say *it was agreed as recommended*, which is 10.5\'s discussion-minuted-as-a-decision in a new form.** ⚠ **The paper says *I recommend* and the minute says *we accept*.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the operative sentence in its final form. ⚠ Then say what the basis is, and whether it could turn out to be wrong.'));
out.push(PHRASE_CARD(['which sentence will I be quoted?', 'on the basis that', 'I recommend / we accept', 'twice more, change nothing', 'it says what we thought']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** decisions at your work. Write the operative sentence for each.'));
out.push(table(['The decision', 'The sentence, with its basis', 'Could the basis be wrong?', 'Paper or minute?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 3, 1.4, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The sentence is: _______, on the basis that _______. The basis could be wrong if _______. And this is the _______ version, not the _______ one._'));
out.push(p('**Listener task:** count how many sentences had a basis in them at the first attempt. ⚠ Then ask how many had *in the light of* or *having considered* in them, and name what those phrases are standing in for.'));
out.push(p('**Board clinic:** your teacher writes three sentences on the board — look for *in the light of all the circumstances*, and a recommendation written in the voice of a decision. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**CLAUSE 19: THE RECOMMENDATION. 23 June. N. Mansour. Decision paper, page 4 of 4.**',
  '⚠ **The sentence.** ⚠ _I recommend that we accept clause 19 as drafted, on the basis that in a dispute about facts our own evidence is better suited to arbitration than to a court._',
  '⚠ **Thirty words. I have said it aloud three times and changed nothing since the second.**',
  table(['', 'What the sentence does', 'What it does not do'], [
    ['**1**', '**states the decision: accept, as drafted**', '⚠ **it does not say *as presently drafted* or *subject to clarification*** — **either of those would make it a different answer**'],
    ['**2**', '⚠ **states the basis, which is the deciding factor from page 3**', '⚠ **it does not gesture at the file** — **_in the light of all the circumstances_ was the first version and is out**'],
    ['**3**', '⚠ **is in the paper\'s voice** — *I recommend*', '⚠ **it does not decide** — **the minute will say *we accept*, and that is Mr Ayoub\'s sentence and not mine**'],
    ['**4**', '⚠ **can be wrong** — **if the dispute is about money the basis fails**', '⚠ **it does not protect me** — **and a sentence that protects its author records nothing**'],
  ], [0.4, 3.2, 4.2]),
  '⚠ **Row 4 is the one I thought about longest.** **A sentence with a basis in it can be shown to have been wrong.** ⚠ **A sentence without one cannot be shown to have been wrong and also cannot be defended** — **and in five years, asked why Sham Trading has a Beirut clause, the sentence with the basis in it is the only one that answers the question.**',
  '⚠ **What is NOT in this sentence, deliberately:** **the cost comparison, the bank\'s question, the option we did not take, and the case against.** ⚠ **All four are in the paper and none of them is in the sentence**, **because a sentence that contains everything is quoted in parts** — **and whoever quotes it chooses the part.**',
  '⚠ **And one line about the wording, for whoever writes the minute.** ⚠ **_As drafted_ matters.** **The clause is forty-one words and we are accepting all forty-one** — ⚠ **and if the minute says *clause 19 was accepted in principle*, we have agreed to a different thing and nobody will notice until there is a dispute.** **9.4 is why those two words are not ours to change either.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the sentence not do, and why is that deliberate?'));
out.push(item('2', 'Why is a sentence that can be wrong better than one that cannot?'));
out.push(item('3', 'Why do the words *as drafted* matter?'));
out.push(box('Writer\'s box', [
  '**The recommendation page — four parts:** ⚠ **the sentence, alone, with its word count** → **a table of *what it does · what it does not do*** → ⚠ **what is deliberately not in it** → ⚠ **and a line about the wording for whoever writes the minute.**',
  '⚠ **Put the sentence on the page by itself and count the words.** ⚠ **Thirty.** **A recommendation inside a paragraph is a recommendation somebody has to find** — **and the person looking for it in five years will be reading quickly.**',
  '⚠ **Say how many times you have read it aloud and when you stopped changing it.** ⚠ *Three times, and nothing since the second.* **It sounds like a small thing and it is the 11.1 discipline applied to the one sentence that will outlive the paper.**',
  '⚠ **List what is deliberately not in the sentence.** ⚠ **The cost, the bank, the option not taken, the case against** — **all in the paper, none in the sentence**, **because a sentence containing everything is quoted in parts and the quoter chooses the part.**',
  '⚠ **Keep the paper\'s voice and the minute\'s apart, and say so.** ⚠ *I recommend* **in the paper;** *we accept* **in the minute.** **A recommendation in the voice of a decision has taken somebody else\'s decision.**',
  '⚠ **And write one line about the wording for the minute-taker.** ⚠ **_As drafted_ against *in principle* is two words against two words and they are different agreements** — **and 10.5 is where that correction gets made, if anybody is reading.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the recommendation page for a decision of yours (**80 words or more**). Use the frame.'));
out.push(p('**______________: THE RECOMMENDATION. ______________. Decision paper, page ______________ of ______________.**   ⚠ **The sentence.** ⚠ _I recommend that we ______________, on the basis that ______________._   ⚠ **______________ words. I have said it aloud ______________ times and changed nothing since the ______________.**   **1** | **states the decision: ______________** | ⚠ **it does not say ______________**   **2** | ⚠ **states the basis, which is ______________** | ⚠ **it does not gesture at the file**   **3** | ⚠ **is in the paper\'s voice** — *I recommend* | ⚠ **it does not decide** — **the minute will say ______________**   **4** | ⚠ **can be wrong** — **if ______________ the basis fails** | ⚠ **it does not protect me**   ⚠ **Row 4 is the one I thought about longest.** ⚠ **A sentence without a basis cannot be shown to have been wrong and also cannot be defended.**   ⚠ **What is NOT in the sentence, deliberately: ______________, ______________ and ______________.**   ⚠ **And one line about the wording, for whoever writes the minute:** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The sentence alone, with a word count', ''],
  ['A basis that is the deciding factor, inside the sentence', ''],
  ['The paper\'s voice, not the minute\'s', ''],
  ['A basis that can turn out to be wrong', ''],
  ['A line on the wording for the minute-taker', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their sentence. ⚠ The class asks one question of each: if this basis is wrong, how would anybody know? ⚠ Where the answer is *they could not*, there is no basis in the sentence, only a phrase.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a sentence of yours that was quoted back to you (**200 to 240 words**). Say what it was, where you wrote it, who quoted it, how long afterwards, and whether you would write it the same way now.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _how long afterwards was it quoted?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the quoted sentence the one the writer expected? Usually one of three — ⚠ **and in the other two it was a sentence the writer had thought of as introductory.**'));
out.push(box('Homework', ['Write your final text. Then take a decision of yours and write its operative sentence with the basis inside it, and read it aloud three times (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 12.6 =======================
out.push(pb());
out.push(h2('12.6  Recording it so that it can be revisited'));
out.push(p('**Function:** giving a decision a basis, a review date and a trigger   ·   **Grammar:** _reviewed on X · to be revisited if Y_   ·   **Pronunciation:** a trigger read as a condition, not a doubt'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a decision at your work that nobody has looked at since. ⚠ Then say what would have to change for somebody to look at it.'));
out.push(p('**b**  Which can be revisited? _the decision will be reviewed as necessary · reviewed on 1 August 2027, and before then if the Dallal claims are settled_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say about *as necessary*?   **A** it is flexible   **B** it means nobody, because a review that is nobody\'s on no date happens when a crisis chooses it   **C** it is standard'));
out.push(p('**b**  Listen again. **1** What are the three things a recorded decision carries? **2** Where does the trigger come from?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.11  "A date, and a thing that would change it"', [
  ['Nour', 'The last line says the decision will be reviewed as necessary.'],
  ['Nadia', '⚠ **_As necessary_ means nobody.** ⚠ **A review that belongs to nobody and happens on no date happens when a crisis chooses it, which is the one moment at which a decision cannot be reconsidered calmly.**'],
  ['Nour', 'Then a date. The agreement runs twelve months from 1 August.'],
  ['Nadia', '⚠ **So the natural date is before the first renewal, not after it** — **because a forum clause is almost never removed at a renewal, and the review has to happen while the question is still open.** **Say 1 June 2027.**'],
  ['Nour', 'And the basis is in the recommendation already.'],
  ['Nadia', '⚠ **Then the record carries three things: the decision, the basis, and the review date.** ⚠ **And a fourth, which is the one nobody writes.**'],
  ['Nour', 'The trigger.'],
  ['Nadia', '⚠ **What would have to change for this to be the wrong answer?** ⚠ **You wrote it yourself on page 3a** — **if the pallet claims are settled and our chain is four documents instead of two, cost decides it and the answer is Damascus.**'],
  ['Nour', 'So the trigger is: the Dallal claims settled, or the chain documented.'],
  ['Nadia', '⚠ **Either of them, and in writing, and with a name against it.** ⚠ **A trigger with no owner is a date with no diary** — **and the person who will notice that the claims have settled is the person who settled them.**'],
  ['Nour', 'It reads as though I am not sure.'],
  ['Nadia', '⚠ **It reads as though you know what your answer depends on, which is the opposite.** ⚠ **A decision with a trigger on it has been thought about; a decision with no trigger has been taken and abandoned** — **and in five years nobody can tell a confident decision from a forgotten one except by whether it says what would change it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A decision recorded so that it can be revisited**',
  table(['', 'Not', 'Write'], [
    ['**the review**', '⚠ *reviewed as necessary* — **which means nobody, on no date**', '⚠ *reviewed on 1 June 2027* — **before the first renewal, because a forum clause is almost never removed at one**'],
    ['⚠ **the trigger**', '**nothing**', '⚠ *and before then if the Dallal claims are settled or the chain is documented* — **either, in writing**'],
    ['⚠ **the owner**', '**unstated**', '⚠ **a name against the trigger** — **a trigger with no owner is a date with no diary**'],
    ['**the basis**', '**on page 3**', '⚠ **in the record** — **because the record is what survives the paper**'],
  ], [1.2, 3, 4.1]),
  '⚠ **_As necessary_ means nobody.** ⚠ **A review that belongs to nobody and happens on no date happens when a crisis chooses it** — **which is the one moment at which a decision cannot be reconsidered calmly.**',
  '⚠ **Set the review date before the natural point of no return.** ⚠ **A forum clause is almost never removed at a renewal, so the review goes before the first renewal and not after it** — **and the same is true of a lease, a tariff and a standing order.**',
  '⚠ **The trigger is the sentence you already wrote at 12.4.** ⚠ **_What would have to change for this to be the wrong answer?_** **The condition on which your recommendation holds, turned round.**',
  '⚠ **Put a name against the trigger.** ⚠ **A trigger with no owner is a date with no diary** — **and the owner should be whoever will see the change first, which is usually not the author of the paper.**',
  '⚠ **And a trigger does not read as doubt.** ⚠ **It reads as knowing what your answer depends on** — **and in five years nobody can tell a confident decision from an abandoned one except by whether it says what would change it.**',
  '**Practise:** Take three decisions. Give each a review date before its point of no return, a trigger, and an owner for the trigger.',
  '**Useful phrases:**  as necessary means nobody  ·  reviewed on  ·  and before then if  ·  a name against the trigger  ·  what would have to change?',
  '**Pronunciation – a trigger as a condition.** 🔊 **Track 12.12** Listen twice. ⚠ **The first says *and before then if the claims are settled* level, as a condition.** ⚠ **The second lifts *if*.** **Lifted, it sounds like a doubt about the decision; level, it is a thing somebody has to watch for.** Say it four times, level.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A writes a review line; B hardens it.'));
out.push(dlg(null, [
  ['A', 'The decision will be reviewed __________.'],
  ['B', '⚠ **That means nobody. When is the point of no return?**'],
  ['A', '__________.'],
  ['B', '⚠ **So the review goes before it. What date?**'],
  ['A', '__________.'],
  ['B', '⚠ **And what would have to change for this to be the wrong answer?**'],
  ['A', '⚠ **If __________ or __________.**'],
  ['B', '⚠ **Who will see that first?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then their name goes against the trigger, not yours.**'],
]));
out.push(table(['Role card 1 — the point of no return', 'Role card 2 — the owner of the trigger'], [[
  '⚠ **A sets the review for a year after the agreement starts, which sounds reasonable.** ⚠ **B asks when a forum clause can actually be changed** — **at a renewal negotiation, and almost never then, because it has been in the last agreement.** ⚠ **So the review has to be before the first renewal is drafted, which is two months earlier than A had it.**',
  '⚠ **A puts their own name against the trigger.** ⚠ **B asks who will know first that the Dallal claims have settled.** ⚠ **Mr Sayegh, who will settle them.** ⚠ **B\'s point: the author of a paper is the last person to hear the thing that undoes it**, **and a trigger owned by the author is a trigger owned by whoever happens to remember.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the review date and why it is before the point of no return. ⚠ Then write the trigger and the name against it, and say why that person rather than the author.'));
out.push(PHRASE_CARD(['as necessary means nobody', 'reviewed on', 'and before then if', 'a name against the trigger', 'what would have to change?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** decisions at your work. Record each properly.'));
out.push(table(['The decision and its basis', 'The point of no return', 'The review date', 'The trigger, and whose'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2.1, 1.5, 1.2, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The decision is _______, on the basis that _______. The point of no return is _______, so the review is on _______. And the trigger is _______, owned by _______, because they will see it first._'));
out.push(p('**Listener task:** count how many review dates were after the point of no return at the first attempt. ⚠ Then ask how many triggers were owned by the author of the paper, and expect nearly all of them.'));
out.push(p('**Board clinic:** your teacher writes three review lines on the board — look for *as necessary*, and a trigger with no owner. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**CLAUSE 19: THE RECORD. 26 June. N. Mansour. For the minute book, four lines.**',
  '⚠ **The decision.** **Clause 19 of the supply agreement with Dallal Freres is accepted as drafted: arbitration seated in Beirut, under Lebanese procedure.**',
  '⚠ **The basis.** **That in a dispute about facts the Company\'s own evidence is better suited to arbitration than to a court.**',
  '⚠ **The review.** **1 June 2027, before the first renewal is drafted.** **Owner: N. Mansour.**',
  '⚠ **The trigger.** **To be revisited before that date if either (a) the claims arising from the pallet condition are settled, or (b) the four links in the May root-cause paper are all documented.** **Owner: K. Sayegh, who will know (a) first; N. Mansour for (b).**',
  table(['', 'The line', 'Why it is in the record and not only in the paper'], [
    ['**1**', '**the decision**', '**it is what the minute book is for**'],
    ['**2**', '⚠ **the basis**', '⚠ **because the paper will be in a drawer and the minute book will not** — **and a decision with no basis cannot be defended in five years**'],
    ['**3**', '⚠ **the review date, with an owner**', '⚠ **because *as necessary* means nobody** — **and the date is before the renewal is drafted, not after it**'],
    ['**4**', '⚠ **the trigger, with two owners**', '⚠ **because the author of the paper is the last person to hear the thing that undoes it** — **Mr Sayegh will settle the claims and will know before anybody**'],
  ], [0.4, 2.1, 5.3]),
  '⚠ **Four lines, and the fourth is the one that would not have been there a month ago.** **It is the sentence from page 3a, turned round.** ⚠ **The case against is what tells you what would change your answer, and the trigger is that sentence written as something somebody has to watch for** — **which is why 12.4 comes before 12.6 and not after it.**',
  '⚠ **The two owners in line 4 are deliberate and the second one is mine.** ⚠ **Mr Sayegh will know about a settlement before I do, and I will know about our own filing before he does** — **and a trigger with one owner who cannot see half of it is a trigger that fires once.**',
  '⚠ **And the whole record is four lines, against a paper of four pages.** **The pages are how the decision was taken.** ⚠ **The four lines are the decision** — **and in five years, when somebody asks why Sham Trading arbitrates in Beirut, these are the four lines they will find, and they answer the question without the pages.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why is the basis in the record and not only in the paper?'));
out.push(item('2', 'Where does the trigger come from, and why does 12.4 come first?'));
out.push(item('3', 'Why are there two owners in line 4?'));
out.push(box('Writer\'s box', [
  '**The record — four lines:** **the decision** → ⚠ **the basis** → ⚠ **the review date, with an owner** → ⚠ **and the trigger, with an owner who will see it first.**',
  '⚠ **Put the basis in the record.** ⚠ **The paper goes into a drawer and the minute book does not** — **and in five years the record is what answers the question, without the pages behind it.**',
  '⚠ **Set the review before the point of no return, and say which point.** ⚠ *1 June 2027, before the first renewal is drafted.* **A review after the renewal is a review of a clause that has been agreed twice.**',
  '⚠ **Take the trigger from your own case against.** ⚠ **The condition on which your recommendation holds, turned round** — **which is why the case against is written before the record and not after it.**',
  '⚠ **Give the trigger the owner who will see it first, and more than one owner if it has more than one half.** ⚠ **A trigger with one owner who can only see half of it fires once** — **and the author of the paper is usually the last person to hear the thing that undoes it.**',
  '⚠ **And keep the record to four lines.** ⚠ **Four pages of how, four lines of what** — **and the four lines have to stand alone, because they are what survives.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the record for a decision of yours (**80 words or more**). Use the frame.'));
out.push(p('**______________: THE RECORD. ______________. For the minute book, four lines.**   ⚠ **The decision.** **______________.**   ⚠ **The basis.** **That ______________.**   ⚠ **The review.** **______________, before ______________.** **Owner: ______________.**   ⚠ **The trigger.** **To be revisited before that date if either (a) ______________, or (b) ______________.** **Owner: ______________ for (a); ______________ for (b).**   **1** | **the decision** | **it is what the minute book is for**   **2** | ⚠ **the basis** | ⚠ **because ______________**   **3** | ⚠ **the review date, with an owner** | ⚠ **because *as necessary* means nobody**   **4** | ⚠ **the trigger, with two owners** | ⚠ **because ______________**   ⚠ **Four lines, and the fourth is the sentence from the case-against page, turned round.**   ⚠ **And the whole record is four lines against a paper of ______________ pages.** ⚠ **The pages are how the decision was taken; the four lines are the decision.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The basis in the record, not only in the paper', ''],
  ['A review date before a named point of no return', ''],
  ['A trigger taken from the case against', ''],
  ['An owner who will see the trigger first', ''],
  ['Four lines, standing alone', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their four lines, with the paper closed. ⚠ The class says whether the four lines answer the question *why* on their own — and where they do not, the basis is missing or is a phrase.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a decision at your work that has never been revisited (**200 to 240 words**). Say what it was, when it was taken, what has changed since, what would have to change for somebody to look at it, and who would notice.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _who would notice the change first?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had the thing that should trigger a review already happened? Usually two of three — ⚠ **and in both of those somebody in the company knows, and nobody has connected the change to the decision, because no document ever named the two together.**'));
out.push(box('Homework', ['Write your final text. Then take one decision of yours, write its four lines, and put a name against the trigger (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 12.7 =======================
out.push(pb());
out.push(h2('12.7  Review & Mediate: the decision taken, and the dissent minuted'));
out.push(p('**Function:** recording a decision and a dissent together   ·   **Review:** the question · the four papers · what decides it · the case against · the operative sentence · the record'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 12 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** How many answers does a decision question have, and what happens to the third?',
  '**2** What must every paper behind a decision say about itself?',
  '**3** What is the test for the factor that decides it?',
  '**4** Who writes the case against your answer, and how well?',
  '**5** What are the two parts of the sentence you will be held to?',
  '**6** What four things does a recorded decision carry, and where does the fourth come from?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Bassel ask for?   **A** that the decision be reopened   **B** that his dissent be minuted, with its reason, without the decision being reopened   **C** that the cost page be rewritten'));
out.push(p('**b**  Listen again. **1** What is his reason? **2** What does Mr Ayoub say a minuted dissent does for the decision?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.13  "Minute that I disagreed, and do not reopen it"', [
  ['Mr Ayoub', 'We accept clause 19 as drafted, on the basis that in a fact dispute our evidence is better suited to arbitration than to a court. Bassel?'],
  ['Bassel', '⚠ **I would ask for Damascus, and I am not going to argue it again, because the paper has already argued it better than I would.**'],
  ['Mr Ayoub', '⚠ **Then say what you want.**'],
  ['Bassel', '⚠ **That my dissent is minuted, with its reason, and that the decision is not reopened.**'],
  ['Mr Ayoub', '⚠ **Give me the reason in one sentence, for the minute.**'],
  ['Bassel', '⚠ **That the dispute I expect is a money dispute, not a fact dispute, and that Beirut costs four times as much to decide a question about invoices.**'],
  ['Mr Ayoub', '⚠ **Which is the case on page 3a, and Nour wrote it.**'],
  ['Bassel', '⚠ **She wrote it better than I would have, and I still hold it.** ⚠ **A case you lose is not a case you stop holding.**'],
  ['Mr Ayoub', '⚠ **Then it goes in, in your words, with your name on it** — **and the decision stands and is not reopened.**'],
  ['Nour', 'Does the dissent weaken the record?'],
  ['Mr Ayoub', '⚠ **It is the strongest thing in it.** ⚠ **A decision with a minuted dissent is a decision that was taken rather than assumed** — **and in five years the two sentences together say what nothing else can: that somebody argued the other side, in writing, and was heard, and the firm went the other way for a stated reason.**'],
  ['Bassel', '⚠ **And one more line.** ⚠ **If the trigger fires** — **if the claims settle** — **I want it minuted that my dissent becomes the recommendation without anybody having to reargue it.**'],
  ['Mr Ayoub', '⚠ **That is the best sentence anybody has said this morning.** **Minute it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – a decision and a dissent in one record**',
  table(['What happens', 'What is said', 'What it does'], [
    ['**the decision is stated**', '⚠ **the operative sentence, with its basis** — **12.5**', '**the record of what was decided and why**'],
    ['⚠ **the dissent is asked for**', '⚠ *that my dissent is minuted, with its reason, and that the decision is not reopened*', '⚠ **it separates being recorded from being reargued** — **and only the first is available after a decision**'],
    ['⚠ **the reason, in one sentence**', '⚠ *the dispute I expect is a money dispute, and Beirut costs four times as much to decide a question about invoices*', '⚠ **and it is the case on page 3a** — **written by the person it is against**'],
    ['⚠ **the effect on the record**', '⚠ *a decision with a minuted dissent is a decision that was taken rather than assumed*', '⚠ **the strongest thing in it** — **somebody argued the other side, was heard, and the firm went the other way for a stated reason**'],
    ['⚠ **the last line**', '⚠ *if the trigger fires, my dissent becomes the recommendation without anybody having to reargue it*', '⚠ **it joins 12.4 to 12.6** — **the case against, the trigger, and who holds the answer when it changes**'],
  ], [1.9, 3.2, 3.3]),
  '⚠ **A dissent asks to be recorded, not to be reargued** — **and saying so in terms is what makes it grantable.** ⚠ *That my dissent is minuted, with its reason, and that the decision is not reopened.* **Nineteen words, and a chairman can grant all of it.**',
  '⚠ **A case you lose is not a case you stop holding.** ⚠ **And a dissent given in one sentence for a minute is not the same thing as arguing again** — **the first is a record and the second is a reversal, which 10.4 showed cannot be had after a summary.**',
  '⚠ **A minuted dissent is the strongest thing in a record and not a weakness in it.** ⚠ **It proves the decision was taken rather than assumed** — **and in five years the two sentences together say what neither says alone.**',
  '⚠ **And the dissenter\'s last line is the one nobody plans:** ⚠ **if the trigger fires, the dissent becomes the recommendation without anybody having to reargue it.** ⚠ **It joins the case against (12.4) to the trigger (12.6)**, **and it means the review in 2027 begins with a drafted answer instead of a blank page.**',
  '⚠ **Notice who wrote the dissent.** ⚠ **Nour wrote it, at 12.4, better than its holder would have** — **and that is why it could be granted in one sentence instead of argued for twenty minutes.**',
  '**Practise:** Take a decision you disagree with. Ask for your dissent to be minuted, with its reason in one sentence, and say that you are not asking for the decision to be reopened.',
  '**Useful phrases:**  minuted, with its reason  ·  and the decision is not reopened  ·  a case you lose is not a case you stop holding  ·  taken rather than assumed  ·  without anybody having to reargue it',
  '**Pronunciation – a dissent that is not a reversal.** 🔊 **Track 12.14** Listen twice. ⚠ **The first says *I would ask for Damascus, and I am not going to argue it again* at one speed, with no stress on *would*.** ⚠ **The second leans on *would*.** **Leaned on, it is an argument reopening; level, it is a position being recorded.** Say it four times, level.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A chairs; B dissents. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  '⚠ **A states the decision with its basis and asks B directly.** ⚠ **When B asks for the dissent to be minuted, A grants it and asks for the reason in one sentence** — **and does not argue the reason, because it has already been argued on the case-against page.** ⚠ **A then says what the minuted dissent does for the record, which is the sentence of the cycle.**',
  '⚠ **B asks for exactly three things and nothing else: the dissent minuted, the reason in it, and the decision not reopened.** ⚠ **B gives the reason in one sentence and stops.** ⚠ **And B adds the last line** — **that if the trigger fires, the dissent becomes the recommendation without being reargued** — **which A will not have thought of.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the three things the dissenter asked for. ⚠ Then write the last line, and say which two cycles of this unit it joins together.'));
out.push(PHRASE_CARD(['minuted, with its reason', 'and not reopened', 'a case you lose', 'taken rather than assumed', 'without being reargued']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a decision. Take it, and hear a dissent. Then record both.'));
out.push(table(['The decision and its basis', 'The dissent, in one sentence', 'What the dissenter asked for', 'The line about the trigger'], [['', '', '', ''], ['', '', '', '']], [2, 2, 1.6, 1.8]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the decision. This is the **twelfth** unit of this book, and the unwritten thing is this: ⚠ **a decision is not the moment at which somebody says yes** — **it is four lines that a stranger will read in five years, and the only part of it that cannot be reconstructed afterwards is why; so everything in these twelve units, every brief and chain and figure and minute and disclosure, exists to put a basis into one sentence and a trigger under it, and the most valuable sentence in the whole record is usually the one written by the person who lost the argument.**'));
out.push(p('_The decision is _______, on the basis that _______. The dissent is _______. It is minuted, with its reason, and the decision is not reopened. And if _______, the dissent becomes the recommendation._'));
out.push(p('**Listener task:** add this unit\'s six to the Book 1 **paper-and-decision word list**: _a reversible decision · the thing that decides it · the case against your own answer · a review date on a decision · a dissent minuted · a trigger for revisiting_. ⚠ **Seventy-two items, and the list is complete.**'));
out.push(p('**Board clinic:** your teacher writes three exchanges on the board — look for a dissent that reopens a decision, and a reason given in four sentences instead of one. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 3)', 10));
out.push(p('⚠ **This unit is Part 3: multiple choice on one longer text, six questions, four options, and it is the third and last time in this book.** ⚠ **Locate the sentence that answers the question before you look at the options.**'));
out.push(box(null, [
  '**WHAT A DECISION RECORD IS FOR — from a trade association\'s guidance to members.**',
  'A decision record is not a summary of a meeting. It is a letter to a stranger: the person who will hold your job in five years and who will be asked, by a customer or a bank or a tribunal, why your company does something that it does.',
  'That stranger will not have your papers. They will have been filed, and filing survives rather better than the ability to find anything in it; and in any case four pages of reasoning answer a question nobody will ask, which is how the decision was taken. The question actually asked is always the same one: why do you do this?',
  'It follows that a record carries four things and not one. The decision. The basis for it, in the form of the single consideration that settled it. A date on which somebody will look at it again. And a statement of what would have to change for the decision to be the wrong one.',
  'The fourth is almost never written and it is the one that distinguishes a decision from a habit. A decision that names the circumstances in which it would be reversed has been considered. One that does not cannot be told apart, five years later, from something that was never decided at all.',
  'Two cautions. A review date without an owner is not a review date, and the owner should be whoever will see the relevant change first, who is frequently not the author. And a basis that cannot be shown to have been wrong is not a basis: phrases such as "in the light of all the circumstances" record that reasons existed without recording any of them, and they are worse than silence, because they look like an answer.',
]));
out.push(p('**1** What does the writer compare a decision record to?   **A** a summary of a meeting   **B** a letter to a stranger   **C** a set of papers   **D** a minute book'));
out.push(p('**2** What does he say the stranger will not have?   **A** a date   **B** the decision   **C** a question   **D** your papers'));
out.push(p('**3** Which question does he say is the one actually asked?   **A** why do you do this?   **B** how was the decision taken?   **C** who took it?   **D** what did it cost?'));
out.push(p('**4** What does he say distinguishes a decision from a habit?   **A** the basis   **B** the date   **C** the author\'s name   **D** a statement of what would reverse it'));
out.push(p('**5** Who does he say should own a review date?   **A** whoever will see the relevant change first   **B** the author of the paper   **C** the chairman   **D** nobody in particular'));
out.push(p('**6** Why is a vague basis worse than silence?   **A** it is longer   **B** it cannot be filed   **C** it looks like an answer   **D** it is not true'));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 2 — a report, 120 to 140 words, 20 marks.** **Four content points, all four present, and a report takes headings.** ⚠ **This is the sixth and last Part 2 in the book; the odd units take Part 1.**',
  '⚠ **A decision report takes four headings and they are the four pages of this unit:** ⚠ **_The question_ · _What decides it_ · _The case against_ · _What I recommend_.** **Four headings cost eight words and they are what makes 135 words a decision paper rather than an opinion.**',
  '⚠ **Put the price of the second answer inside the question**, ⚠ **and the basis inside the recommendation.** **Those are the two sentences an examiner is reading for, because they are the two that carry information rather than attitude.**',
  '⚠ **The case against must be a real one in a report of this length.** ⚠ **One sentence, in its strong form** — **and a candidate who writes *there are of course arguments on both sides* has used nine words to say nothing and will be marked for it.**',
  '⚠ **Part 3 tip, for the text above.** ⚠ **Five of the six answers are in one sentence each and four of those use the text\'s own words** — **which is normal, and is why locating beats reasoning.** ⚠ **Question 5 is the one candidates get wrong by being sensible: the author seems the obvious owner, and the text says the owner is frequently NOT the author.**',
  '⚠ **And question 1 is the trap at the start.** **The first sentence of the text says what a record is NOT** — *not a summary of a meeting* — ⚠ **and option A is those exact words.** **Read the second half of the sentence before answering the first half.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** Write a decision report for your manager (**120 to 140 words**). Include **the question, with the price of each answer** · **what decides it** · **the case against your own answer** · and **your recommendation, with its basis**.'));
out.push(p('**______________**   Do we ______________, or ______________ and accept that ______________?   **______________**   ⚠ **______________.** **It is the only factor that would change the answer if it changed.**   **______________**   ⚠ **______________.** **I accept that this is right about ______________; what it understates is ______________.**   **______________**   ⚠ **I recommend that we ______________, on the basis that ______________.** **Reviewed on ______________, and before then if ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Four headings', ''],
  ['The price of the second answer inside the question', ''],
  ['A case against in its strong form, in one sentence', ''],
  ['A basis inside the recommendation', ''],
  ['120 to 140 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the decision paper for a decision at your work (**200 to 240 words**). Write the question with two answers, name the papers behind it, say what decides it, write the case against your own answer, and end with the sentence you would be held to.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then take that decision to the person whose decision it is, state it in one sentence with its basis, and ask what they would have to see to change it (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 12 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  The decision ___ on four papers.   a) was took   b) was taken   c) taken',
  '2  ___ the seat is Beirut, the procedure is Lebanese.   a) Despite   b) Unless   c) If',
  '3  I have written the case ___ my own answer.   a) versus   b) against   c) opposite',
  '4  A decision that binds your ___ needs a review date.   a) success   b) succession   c) successor',
  '5  Nothing will change ___ the base rate moves.   a) unless   b) despite   c) whether',
  '6  The dissent was minuted ___ reopening the decision.   a) with   b) without   c) out of',
  '7  What ___ have to change for us to revisit it?   a) will   b) would   c) does',
  '8  It is a sentence we ___ held to.   a) are   b) will   c) be',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 12.15** Listen to a decision being taken. Complete the note.   The decision and its basis: ______   What the dissenter asks for, in three parts: ______   His reason, in one sentence: ______   Who wrote that case first: ______   What the chairman says a minuted dissent does: ______   The dissenter\'s last line: ______'));
out.push(p('**C  Reading.** Read the record at 12.6 again. Name its four lines, and say why the trigger has two owners.'));
out.push(p('**D  Writing.** Take a decision at your work. Write it as a question with two answers; then the one thing that decides it; then the four lines of the record, with a trigger and an owner (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 12.15  Audio script (read after the check)', [
  ['Mr Ayoub', '⚠ **We accept clause 19 as drafted, on the basis that in a fact dispute our evidence is better suited to arbitration than to a court.** Bassel?'],
  ['Bassel', '⚠ **I would ask for Damascus, and I am not going to argue it again, because the paper has argued it better than I would.** ⚠ **What I want is that my dissent is minuted, with its reason, and that the decision is not reopened.**'],
  ['Mr Ayoub', '⚠ **The reason, in one sentence, for the minute.**'],
  ['Bassel', '⚠ **That the dispute I expect is a money dispute and not a fact dispute, and that Beirut costs four times as much to decide a question about invoices.**'],
  ['Mr Ayoub', '⚠ **Which is the case on page 3a, and Nour wrote it.**'],
  ['Bassel', '⚠ **She wrote it better than I would have, and I still hold it.** ⚠ **A case you lose is not a case you stop holding.**'],
  ['Mr Ayoub', '⚠ **Then it goes in, in your words, with your name on it, and the decision stands.** ⚠ **A decision with a minuted dissent is a decision that was taken rather than assumed** — **and in five years the two sentences together say what nothing else can.**'],
  ['Bassel', '⚠ **And one more line. If the trigger fires** — **if the claims settle** — ⚠ **I want it minuted that my dissent becomes the recommendation without anybody having to reargue it.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**12.1** write a decision as one question with two answers and the price of each inside it',
  '**12.2** name what each paper behind a decision answers and does not answer',
  '**12.3** find the one factor that would change the answer, and dismiss the rest in terms',
  '**12.4** write the case against your own answer as well as its holder would',
  '**12.5** word the sentence you will be held to, with its basis inside it',
  '**12.6** record a decision with a basis, a review date and a trigger with an owner',
  '**12.7** take a decision and minute a dissent without reopening it',
], C.lblue, C.navy));

// ======================= END OF BOOK 1 =======================
out.push(sp());
out.push(h2('End of Book 1'));
out.push(box('⚠ What the twelve units have been for', [
  '⚠ **Book 1 began on 9 January with a letter from Mr Dallal\'s office and it ends on 26 June with four lines in a minute book.** **In between, Sham Trading wrote a brief, a risk note, a credit policy, three versions of one fact, a root-cause paper in three parts, a facility application with a bridge in it, a marked-up draft, a corrected minute, a disclosure that cost 47,850, and a decision paper of four pages.** ⚠ **Every one of those documents exists in this book because somebody had to write it on a date.**',
  '⚠ **The four things the twelve units have in common, and they are worth saying once at the end:**',
  table(['', 'The thing', 'Where it was taught'], [
    ['**1**', '⚠ **A document is written for what a reader will DO with it, and not for a person.**', '**1, 6, 8, 10** — **the brief, the three readers, the bridge, the minute**'],
    ['**2**', '⚠ **A claim carries its own warrant, inside the sentence.**', '**2, 7, 9** — **the agentless passive, the marked chain, the closed line**'],
    ['**3**', '⚠ **A figure, a date and a name are checkable, and everything else is a sentence about yourself.**', '**3, 4, 5, 8** — **the load-bearing fact, the numbered assumption, the stated basis, the period and the source**'],
    ['**4**', '⚠ **What you will be held to is one sentence, and it should contain its own basis.**', '**11, 12** — **the thing you have to say, and the decision you take**'],
  ], [0.4, 4.6, 3.6]),
  '⚠ **Book 2 begins at Unit 13, in July, with the one thing Book 1 has not asked anybody to do:** ⚠ **write for a reader who is not on your side and is not wrong.** **The Dallal claim goes to arbitration in Unit 19, in Beirut, under the clause accepted in Unit 12** — **and the chain marked in Unit 7 is the evidence.**',
  '⚠ **Nothing in Book 2 is harder than Unit 11.** **The material is harder and the position is not** — ⚠ **because a reader who is against you has told you what he wants, and that is more than most of the readers in this book ever did.**',
], C.lyellow, C.orange));
out.push(sp());
out.push(p('_**Proactive Business English · B2 · Book 1 · Syria Edition.** Twelve units, eighty-four cycles, three hundred and eighty-four lexical items and seventy-two paper-and-decision terms. Book 2 continues at Unit 13._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · Unit 12 · Student\'s Book');
module.exports = out;
