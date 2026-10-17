// Proactive English B2 · Syria Edition · Book 1 · Unit 2 — Student's Book
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

out.push(h1('Unit 2  Taking the Person Out'));
out.push(p('_Proactive English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  'Last year you learnt to put a person into every sentence. **This unit teaches the opposite move and the judgement that chooses between them** — and it is the one place in B2 where the course contradicts B1 on purpose.',
  '**2.1** turns a clause into a noun phrase and back again.   **2.2** asks what the noun phrase hid and whether you wanted it hidden.   **2.3** is the rule that makes the whole unit safe: the sentence may drop the agent, **the paragraph must name it**.   **2.4** compresses three sentences into one without losing a figure.   **2.5** is the price: a sentence a committee will not argue with is a sentence nobody can answer.   **2.6** is the pair — one paragraph with no person in it and one with all of them, side by side on one page.   **2.7** takes four paragraphs nobody can read and rewrites one of them for the person it is about.',
  '**Exam practice in 2.7:** B2 First **Reading and Use of English Part 4** (key word transformations), **Writing Part 2** (an article) and **Listening Part 2** (sentence completion).',
  '⚠ **Bring the two things you were asked for in Unit 1:** one page you wrote last year with the test _put a person in front of it_ in mind, and **one official paragraph you cannot read**. Mr Barghouti has brought four of his own.',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 2.1 =====================
out.push(pb());
out.push(h2('2.1  The suspension of deliveries'));
out.push(p('**Function:** turning a clause into a noun phrase, and back again   ·   **Grammar:** nominalisation — _-ion · -ment · -al · -ance_ and zero   ·   **Pronunciation:** where the stress goes when the verb becomes a noun'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out one sentence from the page you wrote last year with the test _put a person in front of it_ in mind. Then say the same content with **no person in it at all**, and stop there — do not defend either version.'));
out.push(board('We suspended deliveries on 2 March.', 'the suspension of deliveries'));
out.push(p('**b**  Which has a person in it, and what is the noun phrase? **1** _The committee decided on Thursday._  **2** _Compliance was not achieved._  **3** _They removed the sheet in 2019._  **4** _We refused the consignment._  **5** _The withdrawal was not explained._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda write on the board and then cross out, and what does Adnan say about the first of his four paragraphs?   **A** the four dials; that he wrote it   **B** _put a person in front of it_; that he does not know who decided   **C** the eight positions; that it is not his office\'s'));
out.push(p('**b**  Listen again. **1** What does Omar say he spent a year learning to do?   **2** What does Ms Huda say the test from last year has become?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.1  Put a person in front of it', [
  ['Ms Huda', 'I am going to write last year\'s test on the board and then cross it out, and I want you to watch me do it. _Put a person in front of it._ Nineteen point one, twenty-three point three, two whole cycles and about eleven weeks of correction. Crossed out. Not wrong — **no longer the test**.'],
  ['Omar', 'I spent a year learning that. I took the person out of nothing for twelve months.'],
  ['Ms Huda', 'You did, and it was the right year to spend. Mr Barghouti, the first paragraph.'],
  ['Adnan', '_"Following the suspension of deliveries on 2 March, and pending the completion of the review, no further issue of materials from the central store will be authorised until such time as confirmation of compliance has been received."_ Forty-one words.'],
  ['Nour', 'Who suspended the deliveries?'],
  ['Adnan', 'I do not know. That is the honest answer and I have been in that office nineteen years. There is a minute somewhere with a date on it and no name, and the man who would have known retired.'],
  ['Ms Huda', 'Which is the first thing to understand, and it is not what anybody expects: **the agent is not always being hidden. Sometimes it has genuinely gone.** Rim, put the paragraph back into verbs. Out loud, and do not improve it.'],
  ['Rim', '_Somebody suspended deliveries on 2 March. Somebody is reviewing something. Nobody may take materials out of the central store until somebody confirms that something complies._ And I have had to say _somebody_ four times.'],
  ['Omar', 'So it is worse.'],
  ['Ms Huda', 'It is **longer and more honest**, which is not the same as better. Look at what the conversion exposed: four missing people, and you did not know they were missing until the verbs came back. That is the test for the rest of the year, and it is a question and not an instruction: **can you put a person in front of it, and should it say so?**'],
  ['Dima', 'And the cost of the noun version is that you cannot argue with it.'],
  ['Ms Huda', 'That is 2.5 and it is the hardest cycle in the unit. Tonight is mechanical: clause to noun phrase, noun phrase to clause, both directions, fast. **We suspended deliveries** · _the suspension of deliveries_. **The committee decided** · _the decision of the committee_, or better, _the committee\'s decision_.'],
  ['Hiba', 'Why better?'],
  ['Ms Huda', 'Because a possessive keeps the agent and an _of_-phrase lets you drop it. _The decision of the committee_ and _the decision_ are one word apart; _the committee\'s decision_ cannot shed them without being rewritten. ⚠ That is a small thing and it is the whole of 2.3.'],
  ['Lubna', 'Is there a rule for the ending?'],
  ['Ms Huda', 'There are four families and a zero. _-ion_: suspend, decide, complete. _-ment_: agree, assess, pay. _-al_: remove, withdraw, refuse. _-ance_ or _-ence_: comply, refer, prefer. And zero, where the noun is the verb: _a change_, _a review_, _an increase_. Learn them as families, because 2.7 is the exam task that tests exactly this.'],
  ['Jad', 'And the stress moves.'],
  ['Ms Huda', 'It does, and it is the one pronunciation point of the cycle: _susPEND_ becomes _suspenSION_. The stress goes to the syllable before the ending, every time, and a reader who hears _SUSpension_ hears a foreigner reading a form.'],
]));
out.push(sp());
out.push(box('Language box – clause ↔ noun phrase', [
  '**The two directions.** _We suspended deliveries._ → **the suspension of deliveries** · **our suspension of deliveries** · **the suspension**. And back: _the completion of the review_ → **somebody completes the review** · **we complete the review**.',
  '**The four families and the zero.** _-ion_: suspend → **suspension** · decide → **decision** · complete → **completion** · imply → **implication**.   _-ment_: agree → **agreement** · assess → **assessment** · pay → **payment**.   _-al_: remove → **removal** · withdraw → **withdrawal** · refuse → **refusal** · approve → **approval**.   _-ance / -ence_: comply → **compliance** · refer → **reference** · prefer → **preference**.   **Zero:** a **change** · a **review** · an **increase** · a **transfer**.',
  '⚠ **The possessive keeps the person; the _of_-phrase lets you drop them.** _The committee\'s decision_ cannot lose the committee without being rewritten. _The decision of the committee_ loses it by deleting three words — which is how most official paragraphs lost theirs.',
  '**Not every verb has a noun, and the fallback is worth knowing.** There is no noun for _let_, _keep_, _get_ or _put_, and the ones that exist for _say_ and _tell_ (_a saying_, _a telling_) do not mean what the verb means. ⚠ Where there is no noun, the official register reaches for a **compound**: _the keeping of records_ · _the putting in place of arrangements_ — and these are the ugliest sentences in official English precisely because the language refused the move.',
  '**The article changes what the noun phrase claims.** _**The** suspension of deliveries_ — one, known to both of us. _**A** suspension of deliveries_ — one of several, new to the reader. _Suspension of deliveries_ (no article) — the practice in general, and the commonest of the three in notices, because it commits to nothing countable.',
  '⚠ **Some nominalisations are countable and some are not, and getting it wrong is the one error a reader hears as foreign.** _Three decisions_, _two withdrawals_, _four refusals_ — countable. _Compliance_, _guidance_, _notification_ — uncountable, so **not** _three compliances_. Where you need to count an uncountable one, count the document: _three notifications_ is wrong; _three notices_ is right.',
  '**Pronunciation.** 🔊 **Track 2.2** The stress moves to the syllable **before the ending**: _susPEND → suspenSION_ · _reMOVE → reMOVal_ · _comPLY → comPLIance_ · _asSESS → asSESSment_. ⚠ _SUSpension_ and _COMpliance_ are the commonest two errors in this unit and both make a fluent reader sound as though they are reading a form they do not understand.',
  '**Practise:** Turn each into a noun phrase — with the agent, then without — and then back into a clause. **1** _we refused the consignment_  **2** _the committee decided_  **3** _they removed the sheet_  **4** _nobody complied_  **5** _we agreed to extend it_',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a clause from the card. B says it as a noun phrase **with** the agent, then **without**. A says what has gone. B puts it back as a clause. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '_(with)_ __________ · _(without)_ __________.'],
  ['A', 'What has gone is __________.'],
  ['B', '_(back to a clause)_ __________ — and I have had to say __________.'],
]));
out.push(table(['Card A – the clause', 'Card B – the clause'], [
  ['_The works office suspended deliveries._', '_The committee approved the transfer._'],
  ['_Nobody reviewed the sheet._', '_The depot withdrew the half-sheet._'],
  ['_We refused four pallets._', '_The ward removed the old handover form._'],
  ['_The storeman released the job._', '_Two of us did not comply._'],
  ['_They increased the figure in March._', '_I agreed to extend the trial._'],
  ['_The directorate referred it to transport._', '_Somebody changed the opening time._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight noun phrases and, beside each, what went when the agent came off. Then the finding: in **six or seven of the eight** the agent is **not recoverable** from the noun phrase alone — and in most of those the listener could not even say how many people were missing.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the sentence you read out in Stage 1 and say it three ways: with the person, as a noun phrase with the person, and as a noun phrase without. Count the words in all three.'));
out.push(p('**b**  Swap. Then each of you say which of your partner\'s three versions **a committee would pass** and which one **a reader could act on**, and whether they are the same version.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda wrote last year\'s test on the board and crossed it out while the class watched — put a person in front of it, nineteen point one, twenty-three point three, eleven weeks of correction, crossed out and not wrong. Omar said he had spent a year learning it and had taken the person out of nothing for twelve months. Then Mr Barghouti read the first of his four paragraphs: forty-one words about the suspension of deliveries on 2 March, pending the completion of the review, until confirmation of compliance has been received. Nour asked who suspended the deliveries, and Adnan said he does not know, after nineteen years in that office — there is a minute somewhere with a date on it and no name, and the man who would have known retired. Ms Huda said that is the first thing to understand and not what anybody expects: the agent is not always being hidden, and sometimes it has genuinely gone. Then Rim put the paragraph back into verbs without improving it, and had to say "somebody" four times. Omar said so it is worse. And Ms Huda said it is longer and more honest, which is not the same as better — but look at what the conversion exposed: four missing people, and nobody in the room knew they were missing until the verbs came back. So the test for the rest of the year is a question and not an instruction: can you put a person in front of it, and should it say so? Dima said the cost of the noun version is that you cannot argue with it, and Ms Huda said that is 2.5 and the hardest cycle in the unit. Then the small thing that turns out to be the whole of 2.3: the committee\'s decision keeps the committee and cannot shed it without a rewrite, while the decision of the committee loses them by deleting three words — which is how most official paragraphs lost theirs. Then Lubna asked whether there is a rule for the ending, and Ms Huda gave the four families and the zero — suspend, decide, complete for the _-ion_ family; agree, assess, pay for _-ment_; remove, withdraw, refuse for _-al_; comply, refer, prefer for _-ance_; and the zero, where the noun is the verb, as in a change, a review, an increase. She said to learn them as families and not as a list, because 2.7 is the exam task that tests exactly this. And Jad said the stress moves, which is the one pronunciation point of the cycle: susPEND becomes suspenSION, the stress going to the syllable before the ending every time, and a reader who hears SUSpension hears somebody reading a form they do not understand._'));
out.push(p('**Listener task:** write one noun phrase from the lesson and the number of people missing from it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Adnan writes for the four clerks in his own office. Answer the questions.'));
out.push(model([
  '**THE SAME PARAGRAPH TWICE** · A. Barghouti · 18 September',
  'This is for the four of you and it is one page because you have all four asked me the same question in the last fortnight: what does the store paragraph actually say? Here it is twice. The left-hand version is the one we send. The right-hand version is what it means, and it is four words longer.',
  '**What we send.** _"Following the suspension of deliveries on 2 March, and pending the completion of the review, no further issue of materials from the central store will be authorised until such time as confirmation of compliance has been received."_ Forty-one words.',
  '**What it means.** _"Somebody suspended deliveries on 2 March. Somebody is reviewing something. Nobody may take materials out of the central store until somebody confirms that something complies."_ Twenty-six words, and four of them are_ somebody_.',
  '**The point of putting them side by side.** Not that the first is bad English. It is correct, it is the form, and I have drafted paragraphs like it for nineteen years. The point is the **four missing people** — and none of us knew there were four until the verbs came back.',
  '**What I have been able to find out in a fortnight.** One of the four. The suspension was a works-office instruction of 2 March, signed by the duty officer, and I have the minute number. The other three I cannot find, and I have stopped looking.',
  '**What I am asking you to do, and it is one thing.** When you draft a paragraph in nouns, **put the one agent you do know into the paragraph somewhere** — not necessarily into the sentence. _The suspension of deliveries (works office, 2 March)_ costs five words and answers the question all four of you asked me.',
  '**What I am not asking any of you to do.** I am not asking you to write the store paragraph in verbs. It would run to sixty words, it would be refused upstairs, and it would be refused for a reason I agree with: the form is the form, and fourteen offices read it. The bracket is the whole change and it fits inside the sentence we already send.',
  '**And the thing I should say about myself before anybody else does.** Three of the four paragraphs lost their people before I ever saw them. **The fourth lost them because of me, in 2019, and I knew what I was doing.** That one is 2.2 and I shall read it out myself.',
]));
out.push(item('1', 'Why does he put the two versions side by side, and what is the point he says it is not?'));
out.push(item('2', 'How many of the four missing people has he found, and what has he stopped doing?'));
out.push(item('3', 'What does he ask the four clerks to do, and what does it cost?'));
out.push(writers([
  'A page that shows a paragraph twice: **say who it is for and what they all asked** → **the official version, quoted and counted** → **the same content in verbs, quoted and counted** → **the point, and the point it is not** → **what you found out** → **the one thing you are asking for, with its price in words** → **and the thing about yourself**.',
  '**Count both and print both.** Forty-one words against twenty-six, four of the twenty-six being _somebody_. That count is the finding, and nobody reasons their way to it.',
  '⚠ **Say the point it is not.** _Not that the first is bad English._ Without it the page reads as an attack on the form, and the clerks who use the form daily stop reading.',
  'Ask for the agent **in the paragraph**, not in the sentence. _The suspension of deliveries (works office, 2 March)_ — five words, a bracket, and the official shape kept.',
  '**Refuse the bigger change before it is offered to you.** _I am not asking you to write the store paragraph in verbs._ A page that asks for a bracket without saying so is answered as though it had asked for a rewrite, and refused on those terms.',
  '⚠ And own the one that is yours. _The fourth lost them because of me, in 2019, and I knew what I was doing._ A page about hidden agents written by somebody who has hidden one, and does not say so, is the thing it is complaining about.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page that shows one paragraph twice (80 words or more).'));
out.push(p('**THE SAME PARAGRAPH TWICE** · ______________ · ______________   This is for ______________, because ______________.   **What we send.** "______________" ______ words.   **What it means.** "______________" ______ words, and ______ of them are ______________.   **The point, and the point it is not.** Not that ______________. The point is ______________.   **What I have been able to find out.** ______________. The rest I ______________.   **What I am asking for, and it is one thing.** ______________, which costs ______________.   **And the thing I should say about myself.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both versions quoted in full, with their word counts',
  'The number of missing people counted, not described',
  'The point it is **not**, in one sentence',
  'One request, priced in words, that keeps the official shape',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the count of their missing people.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): who it is for and what they asked, the official paragraph quoted and counted, the same content in verbs quoted and counted, the point and the point it is not, what you found, the one request with its price, and the thing about yourself.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both versions quoted and counted, the missing people counted, the point it is not.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read out your count of missing people and nothing else.** The totals are higher than anybody expects — three and four are ordinary, and one student will have six. Then the sentence to leave the cycle on: **a noun phrase does not hide a person, it makes a person optional** — and the difference matters, because an optional person is left out by a tired clerk and not by a conspiracy.'));
out.push(hw('Write the page (80+ words). Then take **one** official paragraph you have to use at work and find **one** of its missing agents — a name, an office or a date will do.'));

// ===================== 2.2 =====================
out.push(pb());
out.push(h2('2.2  Who is not in this sentence'));
out.push(p('**Function:** saying what a nominalisation hides, and deciding whether that is wanted   ·   **Grammar:** the agent test, inverted — _by whom?_ and _should it say?_   ·   **Pronunciation:** the flat official read'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out the official paragraph you brought. Your teacher asks one question of it: **by whom?** Answer in one of three ways only — _I know_, _I could find out_, or _nobody knows_.'));
out.push(board('Confirmation of compliance has been received.', 'by whom? → _I know · I could find out · nobody knows_'));
out.push(p('**b**  Which of the three is each? **1** _The sheet was withdrawn in 2019._  **2** _A decision has been taken._  **3** _Your application has been unsuccessful._  **4** _Payment will be made in due course._  **5** _It has been decided not to proceed._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Of Adnan\'s four paragraphs, how many have agents that nobody can find, and what does he say about the fourth?   **A** two; that it is the shortest   **B** all four; that he does not mind   **C** three; that he took the person out himself in 2019, and knew what he was doing'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say the inverted test is **two** questions and not one?   **2** What does Adnan say the fourth paragraph was for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.3  The fourth one was mine', [
  ['Ms Huda', 'Four paragraphs, one question each. By whom? Mr Barghouti, the first.'],
  ['Adnan', 'The store paragraph. Nobody knows. One of four agents found and I have stopped looking.'],
  ['Ms Huda', 'The second.'],
  ['Adnan', '_"The reclassification of the post was effected with effect from 1 January."_ Nobody knows. It is on a schedule and the schedule is not signed.'],
  ['Ms Huda', 'The third.'],
  ['Adnan', '_"Reference to the transport office is required in all cases of this nature."_ I could find out. It would be a 2014 instruction and the man who wrote it is still there.'],
  ['Ms Huda', 'And the fourth.'],
  ['Adnan', 'The fourth one is mine. _"It has been decided that the practice of accepting late submissions will be discontinued."_ I wrote that in 2019 and I know exactly who decided, because it was three of us in a room on a Thursday, and I took us out of the sentence on purpose.'],
  ['Omar', 'Why?'],
  ['Adnan', 'Because one of the three was going to be the person everybody blamed, and it was not going to be the one who had argued against it. So I wrote _it has been decided_ and we all went home.'],
  ['Nour', 'That is the thing we spent last year being told not to do.'],
  ['Ms Huda', 'It is. And I am not going to tell you it was wrong, because I do not think it was, and that is why this cycle is here. ⚠ **The test is two questions and not one.** _By whom?_ — which is a question about the sentence. And then: _should it say?_ — which is a question about the people in it.'],
  ['Dima', 'And who decides the second one?'],
  ['Ms Huda', 'The writer, every time, and that is the uncomfortable part. There is no rule I can give you. But there is a **cost** and you are allowed to count it: Mr Barghouti, what happened to the late submissions after that paragraph went out?'],
  ['Adnan', 'Nothing happened for eleven months. Nobody argued with it, nobody asked who had decided, and nobody stopped submitting late either, because there was nobody to ask about an exception. Then somebody did ask, in writing, and I had to answer, and I had to put the three of us back in.'],
  ['Hiba', 'So it bought eleven months.'],
  ['Adnan', 'It bought eleven months of quiet and it cost eleven months of the thing not working. I would write it the same way again and I would put a date in it.'],
  ['Ms Huda', 'Which is the honest end of this cycle. **A nominalisation that protects somebody also protects the practice you were trying to change.** You may want that trade. Say to yourself that you are making it.'],
]));
out.push(sp());
out.push(box('Language box – the agent test, inverted', [
  '**Two questions, in this order.** **1 _By whom?_** — and the only three honest answers are _I know_, _I could find out_, _nobody knows_. **2 _Should it say?_** — and that one has no rule, only a cost you can count.',
  '**What the three answers mean for the page.** _I know_ → the agent is **available**, so leaving it out is a decision and you should know you are making it. _I could find out_ → you are **choosing not to**, which is the commonest case and the easiest to repair. _Nobody knows_ → the nominalisation is **honest**, and this is far more common in old official prose than students expect.',
  '⚠ **The trade, stated plainly.** Taking the person out buys quiet: nobody argues with a sentence that has nobody in it. It costs the thing working, because a reader who wants an exception has nobody to ask. _It bought eleven months of quiet and it cost eleven months of the thing not working._',
  '**There are four ways to take a person out, and official prose uses all four in one paragraph.** **1 The passive with no _by_-phrase:** _the sheet was withdrawn_. **2 Nominalisation:** _the withdrawal of the sheet_. **3 _It_-extraposition:** _it has been decided that_ · _it is understood that_ · _it was felt that_. **4 An inanimate subject doing a human act:** _the review requires_ · _the schedule provides_ · _this office is unable_.',
  '⚠ **The _it_ family is the one to watch, because it is the only one that cannot be repaired by a_ by_-phrase.** _The sheet was withdrawn **by the depot**_ works. _It has been decided **by the depot**_ is barely English, and _it is understood by_ is not English at all. An _it_-sentence has to be rewritten or given a date and a room; nothing can be bolted on to it.',
  '**One case where you must name a person, and it admits no exception: an instruction to somebody.** _Compliance is expected_ tells nobody to do anything. _You send the lot number with the sheet_ does. ⚠ A nominalised instruction is not a soft instruction; it is **not an instruction**, and the reader is right to carry on as before.',
  '**Pronunciation.** 🔊 **Track 2.4** The official paragraph read **flat, quick and without ceremony** — no stress on the nouns that carry the hidden agents: _it has been decided that the practice of accepting late submissions will be discontinued_. ⚠ Students who read these sentences slowly and importantly make them sound like a judgement; read at speed they sound like what they are, which is a form.',
  '**Practise:** Ask both questions of each. **1** _A decision has been taken._  **2** _The sheet was withdrawn in 2019._  **3** _Payment will be made in due course._  **4** _Your application has been unsuccessful._  **5** _The practice will be discontinued._',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a sentence from the card. B answers **by whom?** in one of the three ways, then answers **should it say?** and gives one reason. A says what the sentence would cost if it did say. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'By whom? __________. Should it say? __________, because __________.'],
  ['A', 'If it said, it would cost __________.'],
  ['B', 'And if it does not say, it costs __________.'],
]));
out.push(table(['Card A – the sentence', 'Card B – the sentence'], [
  ['_It has been decided not to proceed._', '_A review of the arrangements is under way._'],
  ['_The post has been reclassified._', '_The half-sheet was withdrawn._'],
  ['_Late submissions will no longer be accepted._', '_An error was made in the figures._'],
  ['_Reference to the transport office is required._', '_The handover form has been revised._'],
  ['_Confirmation of compliance has been received._', '_Your request cannot be met at present._'],
  ['_The trial has been extended to all staff._', '_The opening time has been changed._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight sentences and mark each **know · could find out · nobody knows**. Then the count: how many are **could find out**? Five or six of eight — which is the useful finding, because that is the group where one bracket and five words would fix it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Ask both questions of your own official paragraph. Then say what the second answer costs — and if you cannot name a cost, say so, because that is also an answer.'));
out.push(p('**b**  Swap. Then each of you say whether your partner has made a **trade** or simply left somebody out by accident, and how you can tell from the sentence alone.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Four paragraphs and one question each. The store paragraph: nobody knows, one agent of four found and the search abandoned. The reclassification of the post: nobody knows, because it is on a schedule and the schedule is not signed. The reference to the transport office: he could find out, because it would be a 2014 instruction and the man who wrote it is still there. And then the fourth, which Adnan said was his. "It has been decided that the practice of accepting late submissions will be discontinued." He wrote it in 2019, he knows exactly who decided, because it was three of them in a room on a Thursday, and he took the three of them out of the sentence on purpose. Omar asked why, and Adnan said because one of the three was going to be the person everybody blamed, and it was not going to be the one who had argued against it — so he wrote "it has been decided" and they all went home. Nour said that is the thing the class spent last year being told not to do, and Ms Huda said it is, and that she was not going to tell them it was wrong, because she does not think it was, and that is why the cycle exists. Then the test, which is two questions and not one: by whom, which is a question about the sentence; and should it say, which is a question about the people in it. Dima asked who decides the second, and Ms Huda said the writer, every time, and that there is no rule — but there is a cost and you may count it. So Adnan counted it. Nothing happened for eleven months: nobody argued, nobody asked who had decided, and nobody stopped submitting late either, because there was nobody to ask about an exception. It bought eleven months of quiet and cost eleven months of the thing not working. And he said he would write it the same way again, and would put a date in it._'));
out.push(p('**Listener task:** write one sentence of your own that made a trade, and what the trade bought.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the paragraph Adnan wrote in 2019 and the page he writes about it now. Answer the questions.'));
out.push(model([
  '**THE 2019 PARAGRAPH, AND WHAT IT COST** · A. Barghouti · 19 September',
  '_"It has been decided that the practice of accepting late submissions will be discontinued with effect from 1 November."_ Nineteen words. I wrote it. This page is about why, and about the eleven months after it.',
  '**Who decided, which the sentence does not say.** Three of us, in a room, on a Thursday afternoon in October 2019. Two for, one against. I was one of the two.',
  '**Why I took us out.** Because the one who had argued against it would have been the one asked about exceptions, every day, for a year — her name is on nothing and that was deliberate. I would make that trade again.',
  '**What the sentence bought.** Eleven months of quiet. Not one query, not one request for an exception, not one person asking who had decided. If quiet was the object, it worked perfectly.',
  '**And what it cost, which is the part I did not expect.** Eleven months of the thing not working. Late submissions did not stop. They went on exactly as before, because **a reader who wants an exception needs somebody to ask**, and there was nobody — so people simply carried on and said nothing. The practice we had decided to end continued for eleven months **under a paragraph announcing that it had ended**.',
  '**What I would do differently, and it is not putting our names in.** I would put the **date and the room** in: _it was decided on 24 October 2019, in the directorate office, that…_ — which names nobody, answers the only question a reader actually has, and gives them somewhere to send a query.',
  '**One more figure, because it is the only one I have that bears on the question.** In the eleven months of quiet, the number of late submissions did not fall. I have the sheets. Forty-one in the eleven months before the notice and thirty-nine in the eleven months after it — a difference of two, across two years, which is nothing at all. The notice changed the paper and not the practice.',
  '**The thing I shall say about this page.** I have written about forty paragraphs of that kind. **This is the first one I have ever gone back and counted the cost of**, and I did it because somebody asked me _by whom_ in a classroom.',
]));
out.push(item('1', 'What did the sentence buy, and what did it cost that he did not expect?'));
out.push(item('2', 'Why did he take the three of them out, and would he do it again?'));
out.push(item('3', 'What would he do differently, and what does he say it is not?'));
out.push(writers([
  'A page about a sentence you wrote: **the sentence, quoted and counted** → **who decided, which the sentence does not say** → **why you took them out** → **what it bought** → **what it cost, which you did not expect** → **what you would do differently, and what that is not** → **and the thing about the page itself**.',
  '**Quote your own sentence and own it in four words.** _Nineteen words. I wrote it._ A page about hidden agents that hides its own author is the thing it is complaining about, and every reader will notice.',
  '⚠ **Separate what it bought from what it cost, and give both a figure.** _Eleven months of quiet_ against _eleven months of the thing not working_. The same figure twice is what makes the trade visible; an adjective on either side would hide it again.',
  '**Say what the repair is not.** _It is not putting our names in._ Readers assume the alternative to an agentless sentence is an exposed person, and until you rule that out they will reject the whole page to protect somebody.',
  '⚠ And offer the **date and the room** instead. _It was decided on 24 October 2019, in the directorate office, that…_ Nobody is named, the reader\'s real question is answered, and a query now has somewhere to go. Five words, and it is the whole of 2.3.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about one agentless sentence you have written (80 words or more).'));
out.push(p('**______________, AND WHAT IT COST** · ______________ · ______________   "______________" ______ words. I wrote it.   **Who decided, which the sentence does not say.** ______________.   **Why I took them out.** ______________.   **What the sentence bought.** ______________.   **And what it cost, which is the part I did not expect.** ______________, because ______________.   **What I would do differently, and it is not ______________.** ______________.   **The thing I shall say about this page.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Your own sentence quoted, counted and owned',
  'What it bought and what it cost, both with a figure',
  'The repair, with what the repair is **not**',
  'A date or a place offered in place of a name',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read what their sentence bought and what it cost.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): the sentence quoted and owned, who decided, why you took them out, what it bought, what it cost, the repair with what it is not, and the thing about the page.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the sentence owned in the first lines, the cost given a figure, the repair that names nobody.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Say whether your sentence made a trade or lost somebody by accident.** About half the room will find it was an accident, and that is the better outcome, because an accident can be fixed by a bracket. Then the sentence to carry out of the cycle, which is Adnan\'s: **a paragraph announcing that a practice has ended, with nobody in it, is how a practice continues.**'));
out.push(hw('Write the page (80+ words). Then find out **one** of the two answers you did not have: who decided, or on what date. Write down which one was easier to get.'));

// ===================== 2.3 =====================
out.push(pb());
out.push(h2('2.3  The decision, taken by the works office on 2 March'));
out.push(p('**Function:** keeping the agent recoverable in the paragraph when the sentence drops it   ·   **Grammar:** apposition and the _taken by … on …_ insert   ·   **Pronunciation:** the appositive between two pauses'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out one agentless sentence — your own or the one you brought. Then say it again with **five words added in the middle**: who, or where, or when. Say which of the three you chose and why that one.'));
out.push(board('The decision was taken in March.', 'the decision, taken by the works office on 2 March,'));
out.push(p('**b**  Where does the insert go? **1** _The suspension was lifted in May._  **2** _A review has been commissioned._  **3** _The form was revised._  **4** _Compliance was confirmed._  **5** _The trial was extended._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the rule Ms Huda gives, and what does Nour say she found when she applied it to her own template?   **A** never use nouns; that it was fine   **B** the sentence may drop the agent, the paragraph must name it once; that four of her nine paragraphs named nobody anywhere   **C** always use brackets; that nobody noticed'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say the insert is **not** allowed to be?   **2** What does Mazen say about the word _once_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.5  Once in the paragraph is enough', [
  ['Ms Huda', 'Tonight is the rule that makes the rest of this unit safe, and it is one sentence long. **The sentence may drop the agent. The paragraph must name it once.**'],
  ['Mazen', 'Once?'],
  ['Ms Huda', 'Once. Not in every sentence — that is last year and it produces prose nobody can bear. Once, anywhere in the paragraph, and the reader can carry it forward over four more sentences without being told again.'],
  ['Nour', 'I went through nine paragraphs I sent between December and July with that rule. Five of the nine name somebody somewhere. **Four of them name nobody anywhere** — not in the sentence, not in the paragraph, not in the attachment.'],
  ['Ms Huda', 'And what are the four about?'],
  ['Nour', 'All four are about the note template. Which is the thing I want changed. I have written four paragraphs asking for a change to a template and in none of them have I said who owns it.'],
  ['Dima', 'Do you know who owns it?'],
  ['Nour', 'I did not, until August. That is the point. I wrote four paragraphs round a hole and did not notice there was a hole, because every sentence was correct.'],
  ['Ms Huda', 'Which is the most useful thing anybody will say this evening. Now the shape. **The insert goes between two commas, immediately after the noun it belongs to**, and it holds one of three things: who, where, or when. _The decision, taken by the works office on 2 March, has not been reviewed._'],
  ['Adnan', 'That is the form we already use for dates.'],
  ['Ms Huda', 'It is, and that is why it will be accepted: it costs five words, it does not disturb the register, and a committee that would refuse a rewrite into verbs will pass it without comment. ⚠ But there is a limit, and it is firm: **the insert may not be a hedge.** _The decision, which was apparently taken at some point in March,_ is not an insert. It is an evasion wearing one.'],
  ['Hiba', 'How do you tell?'],
  ['Ms Huda', 'Take it out and see whether the reader has lost a **fact**. _Taken by the works office on 2 March_ — the reader has lost an office and a date. _Apparently at some point in March_ — the reader has lost nothing, because there was nothing in it.'],
  ['Mazen', 'And if you only have one of the three?'],
  ['Ms Huda', 'Then you put the one you have. A date alone is worth having. A room alone is worth having — Mr Barghouti\'s _in the directorate office_ names nobody and answers the question. ⚠ **The rule is not _name a person_. It is _leave the reader somewhere to go_.**'],
  ['Omar', 'So the eleven sites paragraph needs one insert and not eleven.'],
  ['Ms Huda', 'One. And this is the check I shall apply to every page any of you writes for the rest of this book: **if a cycle teaches you to take the person out, the paragraph has to put them back somewhere.** If you remember one rule from Unit 2, it is that one.'],
]));
out.push(sp());
out.push(box('Language box – the recoverable agent', [
  '**The rule, and it governs the whole book.** The **sentence** may drop the agent. The **paragraph** must name it once. Once is enough; the reader carries it forward.',
  '**The insert.** Between two commas, immediately after the noun it belongs to, holding **who**, **where** or **when** — any one of the three: _the decision, **taken by the works office on 2 March**, has not been reviewed_ · _the suspension, **a works-office instruction**, was never lifted_ · _the reclassification, **effective 1 January**, was not notified_.',
  '⚠ **The insert may not be a hedge.** _The decision, **which was apparently taken at some point in March**,_ is an evasion wearing the shape of an insert. **The test:** take it out and ask whether the reader has lost a **fact**. An office and a date are facts. _Apparently_ and _at some point_ are not.',
  '**The rule is not _name a person_.** It is **leave the reader somewhere to go.** _In the directorate office_ names nobody and answers the only question a reader has.',
  '**Three shapes of insert, and they are not interchangeable.** **Participle:** _the decision, **taken by the works office on 2 March**, …_ — carries an agent and a date together, and is the only one that can. **Noun in apposition:** _the suspension, **a works-office instruction**, …_ — carries what a thing *is*, and no date. **Prepositional:** _the reclassification, **with effect from 1 January**, …_ — carries a date, and no agent. ⚠ Choose by what you have, not by what sounds best.',
  '**Where the insert may not go.** Not between a verb and its object (_the office suspended, on 2 March, deliveries_ ✗). Not after the second _of_ in a chain, where the reader has already lost the head noun. And not at the start of the sentence, where it becomes the subject of the reader\'s attention instead of an aside.',
  '⚠ **Once per paragraph — and the one case where you need a second.** If the paragraph has **two** agentless nouns belonging to **different** people, one insert is not enough and the reader will attach both to the first. _The suspension, a works-office instruction, and the subsequent review…_ — whose review? Either insert twice or start a new sentence.',
  '**Pronunciation.** 🔊 **Track 2.6** The appositive is spoken **between two small pauses, lower and faster than the sentence round it**: _the decision ‖ taken by the works office on 2 March ‖ has not been reviewed_. ⚠ Read at the same pitch and speed it sounds like the main clause and the sentence collapses; the two pauses are what tell a listener it can be lifted out.',
  '**Practise:** Add one insert — who, where or when, whichever you have. **1** _The suspension was lifted in May._  **2** _A review has been commissioned._  **3** _The form was revised._  **4** _Compliance was confirmed._  **5** _The trial was extended._',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads an agentless sentence from the card. B adds an insert and says which of the three it holds. A tries to take it out and says what the reader has lost. Then B adds a **hedge** instead, and A says what the reader has lost from that one. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '_(insert: __________)_ __________.'],
  ['A', 'Take it out and the reader has lost __________.'],
  ['B', '_(and now a hedge instead)_ __________.'],
  ['A', 'Take that out and the reader has lost __________ — which is why it is not an insert.'],
]));
out.push(table(['Card A – the sentence', 'Card B – the sentence'], [
  ['_The suspension has not been lifted._', '_The handover form has been revised._'],
  ['_A review has been commissioned._', '_The opening time has been changed._'],
  ['_The post has been reclassified._', '_The half-sheet was withdrawn._'],
  ['_Compliance was confirmed in April._', '_An error was made in the figures._'],
  ['_The trial has been extended._', '_Reference to transport is required._'],
  ['_The practice has been discontinued._', '_The route was altered last year._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight inserts and mark each **who · where · when**. Then the count: **when** is the commonest by a long way, and it is also the easiest to get — which is worth saying out loud, because students assume the rule needs a name and it does not.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a paragraph of your own — four sentences or more — and apply the rule: is the agent named **once**, anywhere? If not, add one insert and read the paragraph again.'));
out.push(p('**b**  Swap. Then each of you check your partner\'s insert against the hedge test: take it out and say what fact the reader has lost. If the answer is _nothing_, it is a hedge and it comes out.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The rule that makes the rest of the unit safe is one sentence long: the sentence may drop the agent, the paragraph must name it once. Mazen asked whether once is really enough, and Ms Huda said once, anywhere in the paragraph — not in every sentence, which is last year and produces prose nobody can bear. Then Nour had gone through nine paragraphs she sent between December and July. Five name somebody somewhere. Four name nobody anywhere: not in the sentence, not in the paragraph, not in the attachment. And all four are about the note template, which is the thing she wants changed — four paragraphs asking for a change to a template, and in none of them did she say who owns it. Dima asked whether she knows, and Nour said not until August, which is the point: she wrote four paragraphs round a hole and did not notice the hole, because every sentence was correct. Then the shape. The insert goes between two commas, immediately after the noun it belongs to, and holds one of three things — who, where or when. The decision, taken by the works office on 2 March, has not been reviewed. Adnan said that is the form they already use for dates, and Ms Huda said that is exactly why it will be accepted: five words, no disturbance to the register, and a committee that would refuse a rewrite into verbs will pass it without comment. But the limit is firm: the insert may not be a hedge. "Apparently at some point in March" is an evasion wearing the shape of one, and the test is to take it out and ask whether the reader has lost a fact. Mazen asked what to do with only one of the three, and the answer is to put the one you have — a date alone is worth having, and a room alone is worth having. Because the rule is not name a person. It is leave the reader somewhere to go. Then Omar said that the eleven sites paragraph needs one insert and not eleven, and Ms Huda said one — and gave the check she will apply to every page anybody writes for the rest of the book: if a cycle teaches you to take the person out, the paragraph has to put them back somewhere. If the class remembers one rule from Unit 2, it is that one. And Hiba asked how you tell an insert from a hedge, and the answer is to take it out and see whether the reader has lost a fact: taken by the works office on 2 March loses the reader an office and a date, and apparently at some point in March loses them nothing, because there was nothing in it._'));
out.push(p('**Listener task:** write one paragraph of your own that names nobody anywhere, and the insert you will add.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Nour sends after going through the nine paragraphs. Answer the questions.'));
out.push(model([
  '**NINE PARAGRAPHS AND FOUR HOLES** · N. Sabbagh · 20 September',
  'Between December and July I sent you nine paragraphs about the note template. I have read all nine again this week against one rule, and four of them name nobody — not the sentence, not the paragraph, not the attachment. This page is the repair and it is one line per paragraph.',
  '**The rule I applied.** A sentence may leave the agent out. A paragraph may not. Once, anywhere, and the reader can carry it forward.',
  '**What the four said.** _"A field for the promise date has been requested."_ · _"The absence of such a field has been raised previously."_ · _"It is understood that the template is under review."_ · _"No provision exists for recording an undertaking given by telephone."_ Four sentences, four nouns doing the work, and not one person in any of them.',
  '**Why that matters more than it reads.** All four are **requests**, and a request with nobody in it has nobody to answer it. I have been asking, for eight months, in a form that gives the reader no one to pass the question to — and the reader is not at fault for not passing it on.',
  '**The repair, which is five words in each.** _"A field for the promise date has been requested, by me, in writing, four times since December."_ · _"The absence of such a field, raised in my note of 14 February, has not been addressed."_ · _"It is understood — from the October release note, not from anybody I have spoken to — that the template is under review."_ · _"No provision exists, in the version released in March, for recording an undertaking given by telephone."_',
  '**What I have put in rather than names.** Three dates and one document. Nobody is named in any of the four, including me in three of them, and all four now give you somewhere to send the question.',
  '**What I am not asking for, and I want to be exact about it.** I am not asking anybody to go back and answer the four. They are eight months old and two of them have been overtaken. I am asking for the fifth one, which I shall send next week, to be read as a request rather than as a description — and the only thing I have changed in it is that somebody is in it.',
  '**And the thing I should say about all nine.** The five that did name somebody got answers. **The four that named nobody got none**, and until this week I had read that as nine paragraphs being ignored.',
]));
out.push(item('1', 'What rule did she apply, and what did she find in four of the nine?'));
out.push(item('2', 'Why does she say it matters more than it reads, and who does she say is not at fault?'));
out.push(item('3', 'What has she put in instead of names, and what did she find about the other five?'));
out.push(writers([
  'A page that repairs a paragraph you have already sent: **what you sent and over what period** → **the rule you applied** → **what the faulty ones said, quoted** → **why it matters more than it reads** → **the repair, one line each** → **what you put in instead of names** → **and what the ones that worked had in common**.',
  '**Quote all four and quote them together.** Four agentless sentences in a row is an argument; one of them with a comment under it is an example. The reader sees the pattern before you name it.',
  '⚠ **Absolve the reader.** _The reader is not at fault for not passing it on._ Without that sentence the page is a complaint about somebody who did nothing, and the person reading it is that somebody.',
  '**Repair in the margin, not in a rewrite.** Five words inside each existing sentence — a date, a document, a note reference. A page that re-sends four rewritten paragraphs asks for the reader\'s time twice.',
  '⚠ And end on the comparison, because it is the only evidence that any of this works: _the five that named somebody got answers; the four that named nobody got none._ Nine data points, collected by accident, and read the wrong way for eight months.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page that repairs paragraphs you have already sent (80 words or more).'));
out.push(p('**______________ PARAGRAPHS AND ______________ HOLES** · ______________ · ______________   Between ______________ and ______________ I sent you ______________. I have read them again against one rule, and ______________ of them name nobody.   **The rule I applied.** ______________.   **What they said.** "______________" · "______________"   **Why that matters more than it reads.** ______________, and the reader is not at fault for ______________.   **The repair, which is ______________ words in each.** "______________"   **What I have put in rather than names.** ______________.   **And the thing I should say.** The ones that named somebody ______________; the ones that named nobody ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The faulty sentences quoted together, not one at a time',
  'One sentence absolving the reader',
  'The repair inside the existing sentence, counted in words',
  'The comparison between the ones that worked and the ones that did not',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the comparison they ended on.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): what you sent, the rule, the faulty sentences quoted, why it matters, the repair line by line, what you put in instead of names, and the comparison.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the faulty sentences quoted together, the reader absolved, the insert tested against the hedge test.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read out one insert and let the room apply the hedge test to it.** About a quarter will fail, and they fail in the same way: a word about the writer\'s certainty where a fact should be. Then the rule to leave on the board for the whole of the book, because every unit from here is checked against it: **if the sentence drops the agent, the paragraph names them once.**'));
out.push(hw('Write the page (80+ words). Then take one paragraph you sent before this course and add one insert to it. Do not re-send it; write down which of the three — who, where, when — you were able to supply.'));

// ===================== 2.4 =====================
out.push(pb());
out.push(h2('2.4  Of, of, of'));
out.push(p('**Function:** compressing three sentences into one without losing the figures   ·   **Grammar:** postmodification · _of_-chains and the point at which they break   ·   **Pronunciation:** where the pause goes in a long noun phrase'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out three short sentences from something you have written — any three that belong together. Then say them as **one** sentence. Count the words in both, and say which figures you lost.'));
out.push(board('We counted them twice. The figure was 210. It is in the back corridor.', 'the second count of the 210 cartons in the back corridor'));
out.push(p('**b**  How many _of_s, and does it still work? **1** _the review of the arrangements_  **2** _the completion of the review of the arrangements_  **3** _the date of the completion of the review of the arrangements_  **4** _the reason for the delay in the completion of the review_  **5** _notification of the outcome of the review of the arrangements for the issue of materials_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Yara compress, and where does Ms Huda say the chain breaks?   **A** a letter; at five _of_s   **B** three sentences of a laboratory report, forty-one words into nineteen; at the third _of_   **C** a timetable; it never breaks'));
out.push(p('**b**  Listen again. **1** What does Yara say she lost on her first attempt?   **2** What does Ms Huda say you do instead of a fourth _of_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.7  The third one is where it goes', [
  ['Ms Huda', 'Three sentences into one, and the whole difficulty is doing it without losing a number. Yara, the laboratory report.'],
  ['Yara', '_"The afternoon run was repeated on 29 October. The repeat used a second lot of reagent. The second lot gave the same result as the first."_ Forty-one words with the dates in.'],
  ['Ms Huda', 'Compress it.'],
  ['Yara', '_"The repeat of the afternoon run with a second lot of reagent gave the same result."_ Nineteen words — and I have lost the twenty-ninth of October.'],
  ['Ms Huda', 'You have. Which is the fault that matters, because a compressed sentence that has lost a figure is not shorter, it is **incomplete**. Put it back without adding a clause.'],
  ['Yara', '_"The repeat of the 29 October afternoon run with a second lot of reagent gave the same result."_ Twenty-one words.'],
  ['Omar', 'You put the date inside the noun.'],
  ['Ms Huda', 'She did, and that is the move: **a date, a figure or a name can go inside the noun phrase as a modifier**, where it costs two words and no structure. _The 29 October run_. _The 210 cartons_. _The works-office instruction_. ⚠ A figure that has been moved into a clause of its own has usually been moved because the writer did not know this.'],
  ['Rim', 'And how long can you go on?'],
  ['Ms Huda', 'Here is the finding, and it is a count and not a matter of taste. **Two _of_s a reader follows. The third is where it breaks.** _The completion of the review_ — fine. _The date of the completion of the review_ — a reader hesitates and then gets it. _The reason for the delay in the completion of the review of the arrangements_ — gone. Nobody can hold it.'],
  ['Jad', 'What do you do instead of the fourth?'],
  ['Ms Huda', 'You stop and start a verb. That is the answer and it is not a compromise: **a full stop is cheaper than a fourth _of_.** _The review of the arrangements has not been completed. I have asked twice for the date._'],
  ['Hiba', 'So the whole thing is a limit of two.'],
  ['Ms Huda', 'A limit of two, with modifiers inside the noun doing the work that the third and fourth _of_ would have done. ⚠ And one pronunciation point, because this is where long noun phrases are lost in speech: the pause goes **before the first _of_ that opens a new idea**, and nowhere else. Read it with a pause in the wrong place and the listener re-attaches the wrong noun.'],
  ['Nour', 'Mine are all five-of sentences. Every one.'],
  ['Ms Huda', 'They are, and so are Mr Barghouti\'s, and they are the ordinary product of writing a noun phrase and then needing one more thing. The compression is not the skill. **Stopping at two is the skill.**'],
]));
out.push(sp());
out.push(box('Language box – postmodification and the _of_-chain', [
  '**Three into one, and nothing lost.** _The afternoon run was repeated on 29 October. The repeat used a second lot. The second lot gave the same result._ → **The repeat of the 29 October afternoon run with a second lot of reagent gave the same result.** Forty-one words to twenty-one, with every figure still in it.',
  '**Put the figure, date or name _inside_ the noun phrase.** _the **29 October** run_ · _the **210** cartons_ · _the **works-office** instruction_ · _the **14 February** note_. Two words, no structure, and the figure survives the compression. A figure that has been given a clause of its own is usually there because the writer did not know this.',
  '⚠ **The limit is two.** Two _of_s a reader follows; **the third is where it breaks.** _The reason for the delay in the completion of the review of the arrangements_ cannot be held by anybody, including the person who wrote it.',
  '**A full stop is cheaper than a fourth _of_.** _The review of the arrangements has not been completed. I have asked twice for the date._ Stopping is not a failure of compression; it is the compression working.',
  '**_Of_ is not the only postmodifier, and the others do not count against the limit of two.** A **reduced relative**: _the sheet **issued in March**_ (not _the sheet which was issued in March_). A **participle**: _the figures **showing the gap**_. A **preposition other than _of_**: _the run **with a second lot**_ · _the note **of 14 February**_ · _the cartons **in the back corridor**_. ⚠ A writer stuck at three _of_s has usually not noticed that two of them wanted to be _with_ and _in_.',
  '**Premodify where you can; postmodify where you must.** _The **works-office** instruction_ (two words, hyphenated, in front) against _the instruction of the works office_ (five words, behind). English will take two or three premodifiers before it breaks: _the **29 October afternoon** run_ is readable; _the **29 October afternoon second-lot reagent** run_ is not. ⚠ The hyphen is not decoration — _a second lot reagent run_ and _a second-lot reagent run_ are two different things.',
  '**Pronunciation.** 🔊 **Track 2.8** In a long noun phrase the pause goes **before the first _of_ that opens a new idea** and nowhere else: _the repeat of the 29 October afternoon run ‖ with a second lot of reagent_. ⚠ A pause in the wrong place makes the listener re-attach the following noun to the wrong head, and the sentence has to be said again.',
  '**Practise:** Compress each set of three into one, keeping every figure, and count your _of_s. **1** a count and a place  **2** a date and a reason  **3** a figure and a source  **4** a decision and an office  **5** a request and a deadline',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads three short sentences from the card. B compresses them into one and counts the _of_s. A names any figure that has gone. B puts it back **inside a noun phrase** and says the final word count. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________. __________. __________.'],
  ['B', '_(compressed, ______ of s)_ __________.'],
  ['A', 'You have lost __________.'],
  ['B', '_(put back inside the noun)_ __________ — ______ words.'],
]));
out.push(table(['Card A – three sentences about…', 'Card B – three sentences about…'], [
  ['_a count, a date and a place_', '_a figure, a source and a doubt_'],
  ['_a decision, an office and a delay_', '_a request, a date and a refusal_'],
  ['_a fault, a batch and a return_', '_a shift, an error and a night_'],
  ['_a form, a version and a release_', '_a route, a time and a timetable_'],
  ['_a call, a promise and a note_', '_a lot, a run and a result_'],
  ['_a post, a schedule and a signature_', '_a sheet, a year and a withdrawal_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight compressed sentences, the number of _of_s in each and the figure that had to be put back. Then the two findings: **every pair lost a figure on the first attempt**, and the sentences with three or more _of_s are the ones the listener had to ask for twice.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the longest noun phrase you can find in something you have written and count its _of_s. If there are three or more, break it with a full stop and say what you gained.'));
out.push(p('**b**  Swap. Then each of you read your partner\'s compressed version **out loud, once**, and say whether you could hold it. If you could not, say which noun you attached to the wrong head.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Three sentences into one, and the whole difficulty is doing it without losing a number. Yara read the three from the laboratory report — the afternoon run repeated on 29 October, the repeat using a second lot of reagent, the second lot giving the same result as the first — forty-one words with the dates in. Compressed, it came to nineteen, and she had lost the twenty-ninth of October. Ms Huda said that is the fault that matters, because a compressed sentence that has lost a figure is not shorter, it is incomplete, and asked her to put it back without adding a clause. So she put the date inside the noun: the repeat of the 29 October afternoon run. Twenty-one words. Omar said she had put the date inside the noun, and Ms Huda said that is the move — a date, a figure or a name can go inside the noun phrase as a modifier, where it costs two words and no structure, and a figure that has been given a clause of its own is usually there because the writer did not know this. Then Rim asked how long you can go on, and the answer is a count and not a matter of taste: two of s a reader follows, and the third is where it breaks. The reason for the delay in the completion of the review of the arrangements cannot be held by anybody, including the person who wrote it. Jad asked what you do instead of the fourth, and Ms Huda said you stop and start a verb, because a full stop is cheaper than a fourth of. Nour said hers are all five-of sentences, every one, and so are Mr Barghouti\'s — the ordinary product of writing a noun phrase and then needing one more thing. And the sentence to take away is that the compression is not the skill: stopping at two is the skill. Then one pronunciation point, because this is where long noun phrases are lost in speech: the pause goes before the first of that opens a new idea, and nowhere else. Read with a pause in the wrong place and the listener re-attaches the following noun to the wrong head, and the whole sentence has to be said again — which is what has been happening every time one of these paragraphs is read out in a meeting and somebody asks for it twice._'));
out.push(p('**Listener task:** write your longest noun phrase, its number of _of_s, and where you will put the full stop.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Yara writes to the three on the afternoon run. Answer the questions.'));
out.push(model([
  '**THE 29 OCTOBER REPEAT · one paragraph, three versions** · Y. Mansour · 21 September',
  'This is for the three of you and it is about one paragraph of the October write-up, which I have now rewritten twice. I am sending all three versions because the third is shorter than the second and says more, and I could not have got there without the second.',
  '**Version one, as we sent it.** _"The afternoon run was repeated on 29 October. The repeat used a second lot of reagent. The second lot gave the same result as the first. The result was recorded on the bench sheet and countersigned."_ Fifty-four words with the headings. Four sentences, every figure present, and nobody at the directorate read past the second.',
  '**Version two, compressed.** _"The repeat of the afternoon run with a second lot of reagent gave the same result and was countersigned."_ Nineteen words — and **I had lost the twenty-ninth of October**, which is the only date in the whole write-up that anybody has ever asked about.',
  '**Version three.** _"The repeat of the 29 October afternoon run, with a second lot of reagent, gave the same result and was countersigned by the duty analyst."_ Twenty-five words. The date is **inside the noun**, the second lot is an insert between commas, and the agent — the duty analyst — is named once, which is the whole of 2.3.',
  '**The thing I had been doing wrong for four years, in one line.** Giving every figure its own sentence. I had thought that was carefulness. It is what makes a four-sentence paragraph that stops being read at sentence two.',
  '**The count I would ask you all to make.** Take any paragraph of yours and count the _of_s in its longest noun phrase. If the answer is three or more, it has a full stop missing, and a full stop is cheaper than a fourth _of_.',
  '**One thing I had not expected, which is about speed and not about length.** Version three is six words longer than version two and took me about a minute to write, because the figures were already in version one and all I did was move them. Version two took twenty minutes, because I was trying to decide which figures I could afford to lose. **Deciding what to drop is slow; deciding where to put it is fast.**',
  '**And what I am not claiming.** That version three is better English. It is the same English with the figures moved. **Nothing in this note is about writing well; it is about where a number sits.**',
]));
out.push(item('1', 'Why does she send all three versions, and what could she not have done without the second?'));
out.push(item('2', 'What had she lost in version two, and why does she say that date matters?'));
out.push(item('3', 'What had she been doing wrong for four years, and what had she thought it was?'));
out.push(writers([
  'A page that shows one paragraph in three versions: **who it is for and why all three** → **version one, quoted and counted** → **version two, compressed, with what it lost** → **version three, with where each thing now sits** → **the one thing you had been doing wrong** → **the count you are asking for** → **and what you are not claiming**.',
  '**Send the failed version too.** _I could not have got there without the second._ A page that shows only the final version teaches nothing, because the reader cannot see which move did the work.',
  '⚠ **Name where each item now sits, in the words of the grammar.** _The date is inside the noun, the second lot is an insert between commas, and the agent is named once._ That sentence is what makes the page usable by somebody else; without it, version three is just a sentence you happen to prefer.',
  'Price your old habit without excusing it. _I had thought that was carefulness._ Four words, and they do more than a paragraph of explanation: the reader recognises their own habit and stops defending it.',
  '⚠ And refuse the credit you have not earned. _Nothing in this note is about writing well; it is about where a number sits._ A page that claims to be about style invites an argument about style, which nobody wins.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page that shows one paragraph in three versions (80 words or more).'));
out.push(p('**______________ · one paragraph, three versions** · ______________ · ______________   This is for ______________, and I am sending all three because ______________.   **Version one, as we sent it.** "______________" ______ words.   **Version two, compressed.** "______________" ______ words — and I had lost ______________.   **Version three.** "______________" ______ words. The ______________ is inside the noun, the ______________ is an insert, and the agent is ______________.   **The thing I had been doing wrong, in one line.** ______________. I had thought that was ______________.   **The count I would ask you to make.** ______________.   **And what I am not claiming.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'All three versions quoted, with their word counts',
  'The figure lost in version two, named',
  'Where each item sits in version three, in grammatical terms',
  'One sentence refusing the credit for good style',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the figure they lost in version two.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): who it is for, the three versions quoted and counted, what version two lost, where each item sits in version three, your old habit, the count you are asking for, and what you are not claiming.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: all three versions quoted and counted, the lost figure named, the placement described grammatically.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read out the figure you lost on your first compression.** Every student has one, which is the finding, and it is almost always a date. Then the sentence to leave the cycle on: **a short sentence that has lost a number is not short, it is wrong** — and the repair is two words inside a noun, not a sentence of its own.'));
out.push(hw('Write the page (80+ words). Then count the _of_s in the longest noun phrase of something you sent last month, and write down where the missing full stop goes.'));

// ===================== 2.5 =====================
out.push(pb());
out.push(h2('2.5  The sentence nobody argued with'));
out.push(p('**Function:** writing a sentence a committee will not argue with — and knowing what it cost   ·   **Grammar:** abstraction and its price   ·   **Pronunciation:** the abstract noun read without emphasis'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one sentence you have written that **nobody argued with**. Then say what happened next. Most of the room will find the answer is _nothing_, and that is the cycle.'));
out.push(board('There is a need for improved communication.', 'nobody argued · nothing happened'));
out.push(p('**b**  Which could a reader disagree with? **1** _Standards must be maintained._  **2** _Four pallets were eleven degrees over._  **3** _A more robust process is required._  **4** _The sheet was withdrawn in 2019._  **5** _Appropriate steps will be taken in due course._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What did the 2022 committee sentence cost, and what does Hiba say about the staffroom version?   **A** nothing; it worked   **B** six months, and that her staffroom has the same sentence on a wall   **C** two weeks; that nobody read it'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say an abstraction is for?   **2** What does Rim say she now puts at the end of the template sentence?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.9  Nobody argued with it for six months', [
  ['Ms Huda', 'A sentence nobody argued with. Mrs Nasser.'],
  ['Hiba', '_"There is a need for improved communication between departments."_ It is on a wall in my staffroom. It has been there since 2022 and I could not tell you who put it up.'],
  ['Ms Huda', 'And what happened after it went up?'],
  ['Hiba', 'Nothing. Which I had always read as nobody caring. I now think it is that there is nothing in it to do.'],
  ['Ms Huda', 'That is exactly it, and here is why it is not laziness. Take the sentence apart. _A need_ — whose? _Improved_ — from what to what? _Communication_ — of what, to whom, how often? **Every noun in it is a question with the answer taken out.** And that is not a defect of the sentence: it is the function of the sentence.'],
  ['Dima', 'So it was written to be unarguable.'],
  ['Ms Huda', 'It was written to be **passed**. A committee of nine people with four opinions cannot agree on _the ward sister should ring the laboratory before eleven_, and all nine can agree on _there is a need for improved communication_. The abstraction is what makes agreement possible.'],
  ['Adnan', 'We do that in minutes. Every week.'],
  ['Ms Huda', 'Everybody does. And now the price, which is the whole cycle. Mr Hariri, the 2022 one.'],
  ['Mazen', 'The trade association agreed a line about handset returns: _"appropriate arrangements should be in place for the handling of returned units."_ Seven of us voted for it. I voted for it. Nobody argued with it and it was in the minutes for six months.'],
  ['Omar', 'And?'],
  ['Mazen', 'And nothing was in place, because _appropriate arrangements_ is not a thing anybody can be asked whether they have done. In March somebody finally wrote _each member keeps the returned unit for fourteen days and writes the date on it_, and two people objected, and it was in place in three weeks.'],
  ['Nour', 'So the argument was the thing that made it work.'],
  ['Ms Huda', '⚠ **The argument was the work.** Write that down. An abstraction buys you agreement and defers the argument; it does not remove it. The argument arrives later, with six months of nothing in front of it, and by then the people who would have had it have forgotten what they thought.'],
  ['Rim', 'My refusal template is that sentence. _Found not to conform._ Nobody can object to it.'],
  ['Ms Huda', 'And what do you put at the end of it now?'],
  ['Rim', 'The eleven degrees. I have not changed the sentence; I have put one arguable thing at the end of it. ⚠ And twice since Unit 1 somebody has written back to argue about the eleven degrees, which is the first time in three years anybody has written back at all.'],
  ['Ms Huda', 'Which is the cheapest repair in this book. **You may keep the unarguable sentence. Put one arguable thing in the same paragraph.** Nobody will refuse the paragraph, and the one figure gives a reader something to take hold of.'],
]));
out.push(sp());
out.push(box('Language box – abstraction and its price', [
  '**What an abstraction is for.** Not vagueness — **agreement**. Nine people with four opinions cannot pass _the ward sister rings the laboratory before eleven_; all nine can pass _there is a need for improved communication_. The abstraction is the price of the vote.',
  '**How to take one apart, in three questions.** _A need_ — **whose?** _Improved_ — **from what to what?** _Communication_ — **of what, to whom, how often?** Every abstract noun is a question with the answer removed, and the three questions find the answer every time.',
  '⚠ **The price, stated plainly: the argument was the work.** An abstraction defers the argument, it does not remove it. _Appropriate arrangements should be in place_ passed unanimously and produced nothing for six months; _each member keeps the returned unit for fourteen days and writes the date on it_ drew two objections and was in place in three weeks.',
  '**The repair, and it is the cheapest in this book.** **Keep the unarguable sentence. Put one arguable thing in the same paragraph.** _…has been found not to conform — four pallets were eleven degrees above the specified maximum on arrival._ The sentence still passes; the figure gives the reader something to take hold of.',
  '**The vocabulary of abstraction has a shape, and you can see it coming.** _-ity_: _capacity · suitability · accountability_. _-ness_: _robustness · appropriateness_. _-ance / -ence_: _compliance · adherence · relevance_. _-ment_: _engagement · alignment_. ⚠ Three or more of these in one sentence is not a style; it is a sentence with nothing in it, and the three questions will empty it in about four seconds.',
  '**The deferred-argument test, and it is the only reliable one.** Ask: **who could be asked whether they have done this, and what would they say?** _Appropriate arrangements should be in place_ — nobody can be asked, so nobody will be. _Each member keeps the unit for fourteen days_ — any member can be asked, and two of them will object. ⚠ A sentence nobody can be asked about has deferred its argument, not avoided it.',
  '**And one honest use of abstraction, so that the cycle is not a prohibition.** Where you genuinely do not yet know the answer, the abstraction is the truthful form: _a method of recording telephone undertakings is needed_ is honest if you have no method to propose. ⚠ What is dishonest is an abstraction standing where you **do** know — and the three questions tell you which you are looking at.',
  '**Pronunciation.** 🔊 **Track 2.10** Abstract nouns are read **flat and fast, with the stress kept for the one concrete thing** in the sentence: _there is a need for improved communication — **eleven degrees**_. ⚠ Students who stress the abstraction (_a NEED for imPROVED commuNIcation_) make it sound like a conviction, and a listener then argues with the speaker instead of with the sentence.',
  '**Practise:** Take each apart with the three questions, then add one arguable thing. **1** _Standards must be maintained._  **2** _A more robust process is required._  **3** _Appropriate steps will be taken._  **4** _Lessons have been learnt._  **5** _There is a need for improved communication._',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads an abstraction from the card. B asks the three questions. A answers as much as they can and says which answers they do not have. B then writes the **one arguable thing** that goes in the same paragraph. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'Whose? From what to what? Of what, to whom, how often?'],
  ['A', 'I can answer __________, and I cannot answer __________.'],
  ['B', 'Then the arguable thing is __________ — and somebody could now say __________ back to you.'],
]));
out.push(table(['Card A – the abstraction', 'Card B – the abstraction'], [
  ['_Standards must be maintained._', '_Lessons have been learnt._'],
  ['_A more robust process is required._', '_There is scope for improvement._'],
  ['_Appropriate steps will be taken._', '_The matter is receiving attention._'],
  ['_Communication needs to improve._', '_Procedures are under review._'],
  ['_Compliance should be ensured._', '_Resources are being prioritised._'],
  ['_Best practice will be followed._', '_The position is being monitored._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight abstractions and, beside each, how many of the three questions the speaker could answer. Then the finding: it is **one of three** in most cases, and the one they can answer is almost always _whose_ — which means the agent was available all along and the sentence was built round it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your Stage 1 sentence — the one nobody argued with — and put **one arguable thing** in the same paragraph. Do not change the sentence. Then say what somebody could now say back to you.'));
out.push(p('**b**  Swap. Then each of you say whether your partner\'s arguable thing is genuinely arguable: can a reasonable person disagree with it **and be wrong**? If nobody can be wrong about it, it is another abstraction.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Hiba\'s sentence has been on a staffroom wall since 2022: there is a need for improved communication between departments. She cannot say who put it up, and nothing happened after it went up — which she had always read as nobody caring and now thinks is that there is nothing in it to do. Ms Huda took it apart in three questions. A need — whose? Improved — from what to what? Communication — of what, to whom, how often? Every noun in it is a question with the answer taken out, and that is not a defect of the sentence but the function of it. Dima said so it was written to be unarguable, and Ms Huda said it was written to be passed: a committee of nine with four opinions cannot agree that the ward sister rings the laboratory before eleven, and all nine can agree that there is a need for improved communication. Adnan said they do that in minutes every week. Then the price. Mazen\'s trade association agreed a line in 2022 — appropriate arrangements should be in place for the handling of returned units — seven of them voted for it, he voted for it, nobody argued, and it was in the minutes for six months with nothing in place, because appropriate arrangements is not a thing anybody can be asked whether they have done. In March somebody wrote each member keeps the returned unit for fourteen days and writes the date on it, two people objected, and it was in place in three weeks. Nour said so the argument was the thing that made it work, and Ms Huda said the argument was the work: an abstraction buys agreement and defers the argument, and the argument arrives later with six months of nothing in front of it. Then Rim said her refusal template is that sentence and nobody can object to it — and what she now puts at the end is the eleven degrees. She has not changed the sentence; she has put one arguable thing after it, and twice since Unit 1 somebody has written back to argue about the figure, which is the first time in three years anybody has written back at all. Which is the cheapest repair in the book: keep the unarguable sentence, and put one arguable thing in the same paragraph._'));
out.push(p('**Listener task:** write one abstraction from your own work and the arguable thing you will put after it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Mazen sends to the seven who voted for the 2022 line. Answer the questions.'));
out.push(model([
  '**THE LINE WE ALL VOTED FOR** · M. Hariri · 22 September',
  'This is for the seven of us who voted for the returns line in 2022, and I voted for it, so this is not an accusation. It is a count of what it cost and one suggestion.',
  '**The line.** _"Appropriate arrangements should be in place for the handling of returned units."_ Twelve words, passed unanimously, in the minutes of 14 June 2022.',
  '**What it bought.** A unanimous vote in about four minutes, at the end of a long meeting, with nobody against. If a vote was the object it was a complete success and I would write it again to get one.',
  '**What it cost, with the dates.** Nothing was in place from 14 June 2022 to 9 March 2023 — **thirty-eight weeks** — because _appropriate arrangements_ is not a thing any member can be asked whether they have done, so nobody asked and nobody did. In March, Zuhair wrote: _each member keeps the returned unit for fourteen days and writes the date on it._ Two members objected, both on the fourteen days, one of them strongly. It was in place in **three weeks**.',
  '**The arithmetic I would put in front of the seven of us.** Thirty-eight weeks of agreement against three weeks of argument. **The argument was the work**, and in 2022 we voted to put it off.',
  '**What I am not suggesting.** That we stop writing lines like that one. We cannot: nine people with four opinions will not pass a fourteen-day rule at six o\'clock on a Thursday, and I was one of the nine.',
  '**What I am suggesting, and it is one sentence.** Keep the line and put **one arguable thing in the same paragraph**: _appropriate arrangements should be in place for the handling of returned units — as a starting point, fourteen days with the date written on the unit._ The line still passes. The figure gives the next person something to object to, which is how anything gets decided.',
  '**What the three weeks were actually spent on, because it is not what anybody assumes.** Not drafting. Zuhair\'s sentence took him one evening. Two weeks went on the fourteen days — one member wanted seven, one wanted thirty — and the last week went on who writes the date, which nobody had thought about at all until the sentence was concrete enough to raise it. **Those were the three weeks, and all three were necessary.**',
  '**And the thing I shall own about my own sentence.** I have a line in my own fault book from January: _records to be maintained as necessary._ Nine months, and I have not maintained one.',
]));
out.push(item('1', 'What did the 2022 line buy, and what does he say he would do again?'));
out.push(item('2', 'How long was nothing in place, and how long did the arguable version take?'));
out.push(item('3', 'What is he not suggesting, and what is the one sentence he is suggesting?'));
out.push(writers([
  'A page about a sentence a group agreed to: **say you voted for it too** → **the line, quoted, counted and dated** → **what it bought** → **what it cost, with both dates** → **the arithmetic, side by side** → **what you are not suggesting** → **the one-sentence repair** → **and your own version of the same fault**.',
  '**Put yourself in the vote in the first two lines.** _I voted for it, so this is not an accusation._ A page that audits a group decision from outside it will be read as an attack and answered as one.',
  '⚠ **Give the cost in weeks, not in adjectives.** _Thirty-eight weeks against three weeks._ Two numbers in the same unit are an argument nobody can wave away; _a long delay_ against _quite quickly_ is an opinion about a meeting.',
  '**Record the objections as a credit, not a problem.** _Two members objected, both on the fourteen days, one of them strongly._ That sentence is the evidence for the whole page: the version that drew objections is the version that worked.',
  '⚠ And own your own abstraction before anybody finds it. _Records to be maintained as necessary. Nine months, and I have not maintained one._ A page about unarguable sentences by somebody who still has one, unremarked, is answered by quoting it back.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about a line you agreed to (80 words or more).'));
out.push(p('**THE LINE WE ALL ______________** · ______________ · ______________   This is for ______________, and I ______________, so this is not an accusation.   **The line.** "______________" ______ words, ______________, in the minutes of ______________.   **What it bought.** ______________.   **What it cost, with the dates.** Nothing was in place from ______________ to ______________ — ______ weeks — because ______________.   **The arithmetic.** ______________ against ______________.   **What I am not suggesting.** ______________.   **What I am suggesting, and it is one sentence.** ______________.   **And the thing I shall own about my own.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Your own vote admitted in the first two lines',
  'Both costs in the same unit — weeks against weeks',
  'The objections recorded as the evidence that it worked',
  'One abstraction of your own, quoted and unexcused',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their own abstraction and how long it has been standing.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): your own vote, the line quoted and dated, what it bought, what it cost in weeks, the arithmetic, what you are not suggesting, the one-sentence repair, and your own abstraction.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: your own vote admitted, both costs in the same unit, one arguable thing added without changing the sentence.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read out your arguable thing and let one person in the room disagree with it.** If nobody can, it is another abstraction and it goes back. Then the sentence to leave the cycle on, which is Mazen\'s: **thirty-eight weeks of agreement against three weeks of argument** — and in 2022 seven of them voted to put the argument off.'));
out.push(hw('Write the page (80+ words). Then find **one** abstraction standing somewhere at your work — a wall, a minute, a form — and write down how long it has been there and what has happened since.'));

// ===================== 2.6 =====================
out.push(pb());
out.push(h2('2.6  Two paragraphs, one page'));
out.push(p('**Function:** writing an opening paragraph in which no person appears, and a second in which they all do   ·   **Grammar:** the pair, side by side, as one page   ·   **Pronunciation:** the change of voice between the two'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the opening paragraph of something you have to write at work, with **no person in it**. Then say the same content with **every person named**. Say which one you would send, and which one is true.'));
out.push(board('No further issue will be authorised.', 'I am not releasing anything until Fayez signs it.'));
out.push(p('**b**  Which belongs in the first paragraph and which in the second? **1** _a figure_  **2** _a name_  **3** _a date_  **4** _a disagreement_  **5** _an instruction_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Ms Huda say the two paragraphs go on **one** page, and what does Lubna find when she writes the second one?   **A** to save paper; nothing   **B** because a page with only the first is unusable and a page with only the second is unsendable; that the second one contains the actual disagreement   **C** because the form requires it; that they are identical'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say goes in the first paragraph and nowhere else?   **2** What does Omar say the second paragraph is for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.11  One page, two voices', [
  ['Ms Huda', 'Tonight you write two paragraphs and they go on **one** page, one above the other, and the page is for the same reader. First paragraph: no person in it at all. Second: everybody in it by name.'],
  ['Lubna', 'Why would anybody send both?'],
  ['Ms Huda', 'Because each alone fails, and it fails in a way you have both seen. A page with only the first is **unusable**: four weeks of correspondence and nobody to ask. A page with only the second is **unsendable**: it reads as a quarrel in writing, and the reader has to take a side before they have read the figure.'],
  ['Adnan', 'That is what my fourth paragraph was avoiding.'],
  ['Ms Huda', 'It is. And the pair gives you both things without the trade. Miss Sweidan — the scaffold survey, first paragraph, no person.'],
  ['Lubna', '_"The survey of the first-floor joint was completed on 11 September. The 1974 detail is not as drawn and the discrepancy has not been resolved."_'],
  ['Ms Huda', 'Now the second. Everybody in it.'],
  ['Lubna', '_"Mr Rifai and I measured the joint on 11 September and we do not agree about it. He reads the 1974 detail as drawn with a 90 mm bearing and I read 60 mm on site. Neither of us has moved and I have asked for a third measurement."_'],
  ['Omar', 'The second one has the whole thing in it.'],
  ['Lubna', 'It has the disagreement in it. The first one has _the discrepancy has not been resolved_, which I wrote, and I did not notice until this minute that it is a sentence about two people disagreeing with nobody in it.'],
  ['Ms Huda', '⚠ **That is the finding of the cycle and it is worth a minute.** An agentless sentence is most dangerous not when it hides a decision but when it hides a **disagreement**, because a disagreement with nobody in it reads as a technical fact, and the reader then tries to solve it instead of settling it.'],
  ['Dima', 'And the first paragraph is still worth having?'],
  ['Ms Huda', 'It is worth having and it has to come first. **The figures and the dates go in the first paragraph and nowhere else**, because they survive forwarding, summarising and filing, and a reader who disagrees with the second paragraph will still carry the first one forward intact.'],
  ['Omar', 'So the second one is for the person who has to do something.'],
  ['Ms Huda', 'The second is for the person who has to **act**, and it names them. ⚠ And one practical thing: there is no heading, no _background_, no _discussion_. Two paragraphs, a line between them, and the reader understands the change of voice without being told — which is the pronunciation point as well.'],
  ['Mazen', 'How long is each?'],
  ['Ms Huda', 'Forty words and sixty. Longer than that and you have written a report, and the pair stops working, because the whole effect depends on a reader seeing both at once.'],
]));
out.push(sp());
out.push(box('Language box – the pair, and this unit\'s two declared sets', [
  '**The pair, on one page, for the same reader.** **Paragraph one: no person in it.** The figures, the dates, the documents — and nothing else. **Paragraph two: everybody in it by name.** The disagreement, the instruction, who has to act.',
  '**Why each alone fails.** First alone → **unusable**: nobody to ask. Second alone → **unsendable**: a quarrel in writing, and the reader must take a side before reaching the figure.',
  '⚠ **The sharpest point in Unit 2.** An agentless sentence is most dangerous when it hides a **disagreement**, not a decision: _the discrepancy has not been resolved_ is a sentence about two people disagreeing with nobody in it, and a reader will try to **solve** it instead of **settling** it.',
  '**Lengths, and they are firm.** About **forty words** and about **sixty**. No heading, no _background_, no _discussion_ — two paragraphs and a line between them. Longer, and you have written a report, and the effect depends on both being seen at once.',
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _answer for · put back · leave in · set out · bring in · carry over · hold up · go through · boil down to · own up to · stand for · come down to_.',
  '**This unit\'s word-formation set** _(Reading Part 4 in 2.7 tests exactly this)_: _suspend → **suspension** · remove → **removal** · comply → **compliance** · decide → **decision** · refuse → **refusal** · agree → **agreement** · imply → **implication** · withdraw → **withdrawal** · notify → **notification**._',
  '**How to draw the line, and it matters because it is doing structural work.** A rule across the page, or a blank line with a short heading, or a row of dashes typed out. ⚠ What it may **not** be is a heading like _Background_ or _Discussion_: a heading tells the reader what the paragraph is **about**, and the line tells them **who it is for**, which is a different and more useful signal.',
  '**What never goes in paragraph one.** No name, no instruction, no request and no disagreement — and that last one is the hard one, because a disagreement will try to enter disguised as a noun: _the discrepancy_, _the inconsistency_, _the difference of view_. ⚠ If a noun in paragraph one could be rewritten as _two people do not agree_, it belongs in paragraph two.',
  '**And what never goes in paragraph two: a figure that is not already above the line.** A number that appears for the first time in paragraph two is lost, because paragraph two is the part that does not get forwarded. Every figure earns its place upstairs first.',
  '**Pronunciation.** 🔊 **Track 2.12** The two paragraphs are read in **two voices**: the first flat, even and unhurried; the second slower at the names and quicker between them. ⚠ Read in one voice the pair sounds like a single paragraph that changes its mind, and the reader cannot tell which part is the record and which is the request.',
  '**Practise:** Write the pair — forty words and sixty — for each. **1** a figure and a disagreement  **2** a date and an instruction  **3** a count and a refusal  **4** a fault and a name  **5** a decision and the person it lands on',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads their first paragraph — no person in it. B says what they could do on the strength of it alone. A reads the second. B says what they could do now, and names the sentence in the first paragraph that was hiding a person. Swap.'));
out.push(dlg(null, [
  ['A', '_(paragraph one, no person)_ __________.'],
  ['B', 'On that alone I could __________.'],
  ['A', '_(paragraph two, everybody named)_ __________.'],
  ['B', 'Now I could __________ — and the sentence that was hiding somebody was __________.'],
]));
out.push(table(['Card A – write the pair about…', 'Card B – write the pair about…'], [
  ['_a measurement two people read differently_', '_a figure two offices count differently_'],
  ['_a form one person will not sign_', '_a shift nobody will take_'],
  ['_a date that has been moved twice_', '_a consignment you are sending back_'],
  ['_a fault that has come back_', '_a template nobody owns_'],
  ['_a decision taken without you_', '_an instruction you cannot follow_'],
  ['_a count you do not trust_', '_a promise nobody recorded_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each of the eight pairs, write the one sentence in paragraph one that was hiding a person. Then the finding: in **six or seven of the eight** it is a sentence about a **disagreement** and not about a decision — which is the opposite of what the class expected at the start of the unit.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write both paragraphs about something real — forty words and sixty — and read them out one after the other. Then say which sentence in the first was hiding somebody.'));
out.push(p('**b**  Swap. Then each of you say whether your partner\'s **first** paragraph would survive being forwarded to somebody who has never heard of any of them. If it would not, say which word fails.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Two paragraphs, one page, same reader: the first with no person in it at all, the second with everybody in it by name. Lubna asked why anybody would send both, and Ms Huda said because each alone fails in a way they have all seen — a page with only the first is unusable, four weeks of correspondence and nobody to ask, and a page with only the second is unsendable, because it reads as a quarrel in writing and the reader has to take a side before they reach the figure. Adnan said that is what his fourth paragraph was avoiding. Then Lubna did the scaffold survey. First paragraph: the survey of the first-floor joint was completed on 11 September, the 1974 detail is not as drawn and the discrepancy has not been resolved. Second: Mr Rifai and I measured the joint on 11 September and we do not agree about it — he reads the detail as drawn with a 90 mm bearing and she reads 60 mm on site, neither has moved, and she has asked for a third measurement. Omar said the second one has the whole thing in it, and Lubna said it has the disagreement in it: the first one says the discrepancy has not been resolved, which she wrote, and she had not noticed until that minute that it is a sentence about two people disagreeing with nobody in it. Which Ms Huda said is the finding of the cycle: an agentless sentence is most dangerous not when it hides a decision but when it hides a disagreement, because a disagreement with nobody in it reads as a technical fact, and the reader then tries to solve it instead of settling it. Dima asked whether the first paragraph is still worth having, and Ms Huda said it is and it has to come first, because the figures and the dates survive forwarding, summarising and filing, and a reader who disagrees with the second will still carry the first forward intact. And the lengths are firm: about forty words and about sixty, no headings, a line between them — longer and you have written a report, and the whole effect depends on a reader seeing both at once._'));
out.push(p('**Listener task:** write the sentence in your own first paragraph that was hiding somebody.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Lubna sends about the first-floor joint. Answer the questions.'));
out.push(model([
  '**14 SHARIA AL-JALAA · FIRST-FLOOR JOINT** · L. Sweidan · 23 September',
  'The survey of the first-floor joint was completed on 11 September. The 1974 drawing shows a 90 mm bearing at the party wall. The measurement taken on site is 60 mm. The discrepancy of 30 mm has not been resolved and no load calculation has been issued on either figure.',
  '_______________________________________________',
  'Mr Rifai and I measured the joint together on 11 September and we do not agree about it. He reads the 1974 detail as drawn and believes the 60 mm is my tape against a rendered face; I believe the render was cut back and that 60 mm is the bearing. Neither of us has moved in twelve days. I have asked the practice for a third measurement by somebody who has not yet had an opinion, and I should like it before the scaffold comes down on 4 October.',
  '**Why this page is in two paragraphs, which I am saying once and not again.** The first paragraph is the one that will be forwarded, filed and quoted, and it has no person in it on purpose: in six months it will still be true and it will not be about anybody. The second is for whoever can send a third measurer, and that person needs the names, the dates and the disagreement, because **a 30 mm discrepancy is not a technical fact — it is two people reading the same tape differently**, and the first paragraph does not say so.',
  '**What I am not asking for.** I am not asking anybody to decide between us. Mr Rifai has nineteen years on me and may well be right. I am asking for a third tape before 4 October.',
  '**What happens on 4 October if there is no third measurement, which I should say before anybody asks.** The scaffold comes down, the joint is covered, and the 30 mm becomes a thing that cannot be checked without taking the render off again. That is not a reason to hurry anybody. It is the reason the date is in the second paragraph and not in the first: a deadline belongs with the request, and the first paragraph has to go on being true after it has passed.',
  '**And the thing I shall say about my own first paragraph.** _The discrepancy has not been resolved_ is my sentence. I wrote it on the eleventh and it sat there for twelve days, and it is the most agentless sentence I have ever written — **because there was nobody in it, nobody did anything about it, including me.**',
]));
out.push(item('1', 'What does the first paragraph contain, and why does she say it has no person in it on purpose?'));
out.push(item('2', 'Who is the second paragraph for, and what does that person need?'));
out.push(item('3', 'What is she not asking for, and what does she say about her own sentence?'));
out.push(writers([
  'A page in two paragraphs: **paragraph one, no person, about forty words — figures, dates, documents** → **a line across the page** → **paragraph two, about sixty words, everybody named — the disagreement, the request, the date** → **why the page is in two paragraphs** → **what you are not asking for** → **and the thing about your own agentless sentence**.',
  '**Keep every figure in paragraph one and none of the people.** _The discrepancy of 30 mm has not been resolved._ That paragraph is what gets forwarded, filed and quoted, and in six months it is still true and still about nobody.',
  '⚠ **Say what paragraph two is for, in one sentence, and never again.** _The second is for whoever can send a third measurer._ A reader who cannot tell which paragraph is addressed to them will answer the wrong one.',
  '**Name the disagreement as a disagreement.** _A 30 mm discrepancy is not a technical fact — it is two people reading the same tape differently._ Until that sentence is on the page the reader will try to solve the measurement instead of sending a third measurer.',
  '**Put the deadline in paragraph two and never in paragraph one.** _…before the scaffold comes down on 4 October._ Paragraph one must go on being true after the date has passed.',
  '⚠ And concede the other person properly. _Mr Rifai has nineteen years on me and may well be right._ A page that asks for a third opinion while implying it knows the answer will be read as asking for a judgement, and refused.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page in two paragraphs (80 words or more).'));
out.push(p('**______________** · ______________ · ______________   ______________ was completed on ______________. ______________ shows ______________. The measurement taken is ______________. The discrepancy of ______________ has not been resolved and no ______________ has been issued.   ____________________________________   ______________ and I ______________ together on ______________ and we do not agree about it. ______________ reads ______________; I ______________. Neither of us has moved in ______________. I have asked for ______________, and I should like it before ______________.   **Why this page is in two paragraphs.** The first is the one that will be ______________. The second is for ______________, who needs ______________, because ______________.   **What I am not asking for.** ______________.   **And the thing about my own sentence.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Paragraph one: every figure, no person, about forty words',
  'A visible line, and paragraph two about sixty words with the names in',
  'The disagreement named as a disagreement, not as a fact',
  'One sentence conceding that the other person may be right',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their first paragraph only, and the room says what it could do on the strength of it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): the two paragraphs with the line between them, why the page is in two, what you are not asking for, and the thing about your own agentless sentence.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: paragraph one with no person and every figure, the disagreement named as a disagreement, the concession to the other person.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your two paragraphs straight through, once, and let the room hear the change of voice.** Then the sentence to leave the cycle on, which is Lubna\'s and is the hardest thing in Unit 2: **because there was nobody in it, nobody did anything about it, including me.** Twelve days, one sentence, and the sentence was hers.'));
out.push(hw('Write the page (80+ words) and send it. Then write down **which paragraph** the reply answered.'));

// ===================== 2.7 =====================
out.push(pb());
out.push(h2('2.7  Review & Mediate: Four paragraphs nobody can read'));
out.push(p('**Function:** rewriting an unreadable official paragraph for the person it is about   ·   **Recycling:** Unit 2   ·   **Exam practice:** B2 First Reading and Use of English Part 4 · Writing Part 2 (article) · Listening Part 2'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 2 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** The suspension of the deliveries by the works office of 2 March of the review.  **2** No notify of the reclassification was given.  **3** The decision, which was apparently in March, has not been reviewed.  **4** There was no comply with the instruction.  **5** The committee of decision was taken on Thursday.  **6** The repeat of the run of 29 October of the afternoon gave the same result.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the four paragraphs Mr Barghouti brought, set out as the class sorted them.'));
out.push(box(null, [
  '**MR BARGHOUTI\'S FOUR** _(sorted by the class, 24 September)_',
  '**1** _"Following the suspension of deliveries on 2 March, and pending the completion of the review, no further issue of materials from the central store will be authorised until such time as confirmation of compliance has been received."_ — **the agent has gone and nobody can find it.** Four people missing, one found.',
  '**2** _"The reclassification of the post was effected with effect from 1 January."_ — **the agent has gone and nobody can find it.** On an unsigned schedule.',
  '**3** _"Reference to the transport office is required in all cases of this nature."_ — **the agent could be found.** A 2014 instruction; the man who wrote it is still there.',
  '**4** _"It has been decided that the practice of accepting late submissions will be discontinued with effect from 1 November."_ — **the agent was removed on purpose**, by Mr Barghouti, in 2019, and he has said so.',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. Which of the four does the class decide cannot be repaired, and what does Ms Huda say mediation is?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.13  Rewrite it for the person it is about', [
  ['Ms Huda', 'Four paragraphs, sorted into three kinds. Now the question the whole unit has been for: **which of them can be repaired, and for whom?**'],
  ['Adnan', 'Three can. One cannot, and it is the second.'],
  ['Omar', 'Why not the second?'],
  ['Adnan', 'Because there is nothing to put in. The schedule is not signed, the post was reclassified, and there is no office, no date beyond the first of January, and no name anywhere in the file. I have looked twice.'],
  ['Ms Huda', '⚠ **And that is an answer and not a failure.** A paragraph with no recoverable agent is repaired by **saying so**: _the reclassification, for which no originating office is recorded, was effective 1 January._ Nineteen words, it names nobody, and it tells the reader not to look.'],
  ['Nour', 'That is more honest than the original.'],
  ['Ms Huda', 'It is the only honest version available. Now the first one. Mr Barghouti found one agent of four.'],
  ['Adnan', '_"Following the suspension of deliveries — a works-office instruction of 2 March, minute 11/0342 — and pending the completion of the review, no issue of materials from the central store will be authorised until compliance is confirmed."_ Thirty-four words, down from forty-one, and one insert added.'],
  ['Rim', 'It is shorter **and** it has more in it.'],
  ['Ms Huda', 'Which is the whole of 2.4 arriving at once: the insert went inside the noun phrase and three _of_s came out. Now the hard one, and it is the point of the cycle. **Who is paragraph four about?**'],
  ['Hiba', 'The people who submit late.'],
  ['Ms Huda', 'And has anybody written to them?'],
  ['Adnan', 'No. Four years. The paragraph went to the heads of section and the heads of section put it on a board.'],
  ['Ms Huda', 'So here is the task, and it is mediation and not translation. **Rewrite paragraph four for the person it is about** — not for the file, not for the heads of section. Somebody who submits late, on a Thursday, with a reason.'],
  ['Adnan', '_"From 1 November we are not taking late submissions. This was decided on 24 October 2019 in the directorate office. If you cannot meet a date, say so before it and ask for an extension — that is still allowed and always was, and it is the part the notice never said."_'],
  ['Dima', 'The last clause is the whole thing.'],
  ['Adnan', 'The last clause is the thing nobody has known for four years. Extensions were never stopped. The notice only said what was stopping.'],
  ['Ms Huda', '⚠ **That is mediation, and now you have the definition.** Mediation is not making a hard text easier. It is **working out what the reader needed from it and was never told** — and that is almost never the thing the text says. It is the thing the text leaves out.'],
  ['Lubna', 'So you have to know the reader.'],
  ['Ms Huda', 'You have to know what the reader will do next. Which is why this cycle comes at the end of Unit 2 and not at the beginning: you cannot find what a paragraph left out until you can see where its people went.'],
]));
out.push(sp());
out.push(box('Language box – the four kinds, and what mediation is', [
  '**Sort before you repair.** **1 Gone and unrecoverable** → repair by **saying so**: _the reclassification, for which no originating office is recorded, was effective 1 January._ Names nobody; tells the reader not to look.   **2 Gone but recoverable** → one **insert**: _a works-office instruction of 2 March, minute 11/0342_.   **3 Removed on purpose** → the **date and the room**: _decided on 24 October 2019 in the directorate office_.   **4 Never there** — the sentence was always abstract → one **arguable thing** in the same paragraph (2.5).',
  '**The repair is usually shorter than the original.** Thirty-four words against forty-one, with an insert added and three _of_s removed. A paragraph that gains a fact and loses six words has had 2.3 and 2.4 applied together.',
  '⚠ **Mediation is not making a hard text easier.** It is working out **what the reader needed from it and was never told** — and that is almost never what the text says. _Extensions were never stopped. The notice only said what was stopping._',
  '**And you cannot do it without knowing what the reader does next.** Who is the paragraph about? Has anybody written to them? Four years, four hundred late submissions, and nobody had.',
  '**Three questions that find what a paragraph left out, and they are asked in this order.** **1 Who is this about?** — not who it was sent to. **2 What will they do next?** — on the strength of this paragraph alone. **3 What would they have to know that it does not say?** ⚠ Question three is almost always answered by **what is still permitted**, because a notice says what has stopped and forgets to say what has not.',
  '**The mediated version has a shape and it is not the official one.** The change, with its date → who decided, or where → **what has not changed** → what to do instead → who to ask. Five moves, about seventy words, and the third move is the one no official paragraph contains.',
  '⚠ **Mediation is not simplification, and the difference shows in the length.** A simplified paragraph is shorter than the original and says the same thing. A mediated paragraph is often **longer**, because it adds the thing the reader needed. _Extensions were never stopped_ is eighteen characters of new information and four years late.',
  '**Pronunciation.** 🔊 **Track 2.14** Reading the official version and then the mediated one: **the official flat and quick, a pause, the mediated slower and with the stress on the verb** — _"confirmation of compliance has been received" ‖ until somebody **CONFIRMS** it. ⚠ Read both the same way and the class cannot hear what changed, which is the only thing the stage is demonstrating.',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has one of the sheets below and does **not** show it. A reads the four paragraphs once, then sorts them into the four kinds. B must say which **one** is unrecoverable and which **one** is about somebody nobody has written to. Change roles with the other sheet.'));
out.push(table(['Sheet A – a hospital circular\'s four paragraphs', 'Sheet B – a depot notice\'s four paragraphs'], [
  ['_1 "The revision of the handover documentation was implemented in March."_', '_1 "The withdrawal of the half-sheet was effected in 2019."_'],
  ['_2 "Compliance with the counting protocol is expected at all times."_', '_2 "Adherence to the departure schedule is required of all drivers."_'],
  ['_3 "Reference to the duty sister is required in all cases of discrepancy."_', '_3 "Notification of any alteration must be given to the depot office."_'],
  ['_4 "It has been determined that the practice of verbal handover will cease."_', '_4 "It has been decided that unrecorded departures will no longer be accepted."_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the four kinds for each sheet. On **both** sheets, **1** is gone but recoverable (there is a date), **2** was never there at all, **3** could be found, and **4** was removed on purpose — the same arithmetic from two trades, which is why the stage runs two documents. ⚠ And on both, paragraph **4** is the one about somebody nobody has written to.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take the official paragraph **you** brought. Sort it into one of the four kinds, alone, in two minutes. Then hand it to your partner and say only who it is about. Your partner must rewrite it **for that person** and must ask: _what does this paragraph not say that they need?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner rewrote and what it had left out:  _Four paragraphs, three kinds, and then the question the unit was for: which can be repaired, and for whom? Adnan said three can and one cannot, and it is the second — the reclassification of the post, on an unsigned schedule, with no office, no date beyond the first of January and no name anywhere in the file. He has looked twice. Ms Huda said that is an answer and not a failure: a paragraph with no recoverable agent is repaired by saying so — the reclassification, for which no originating office is recorded, was effective 1 January. Nineteen words, nobody named, and the reader is told not to look. Nour said that is more honest than the original, and Ms Huda said it is the only honest version available. Then the first paragraph, with its one found agent put back as an insert and the minute number in it: thirty-four words, down from forty-one. Rim said it is shorter and has more in it, which is 2.3 and 2.4 arriving together — the insert went inside the noun phrase and three ofs came out. Then the hard one. Who is paragraph four about? Hiba said the people who submit late. And has anybody written to them? No. Four years. The paragraph went to the heads of section and the heads of section put it on a board. So Adnan rewrote it for a person who submits late on a Thursday with a reason: from 1 November we are not taking late submissions, decided on 24 October 2019 in the directorate office, and if you cannot meet a date, say so before it and ask for an extension — that is still allowed and always was, and it is the part the notice never said. Dima said the last clause is the whole thing, and Adnan said it is the thing nobody has known for four years: extensions were never stopped, and the notice only said what was stopping. Which gave the class the definition. Mediation is not making a hard text easier. It is working out what the reader needed from it and was never told, and that is almost never what the text says — it is what the text leaves out. Lubna said so you have to know the reader, and Ms Huda said you have to know what the reader will do next, which is why this cycle is at the end of Unit 2: you cannot find what a paragraph left out until you can see where its people went._'));
out.push(p('**Listener task:** write the one thing your partner\'s paragraph never said, and the person who needed it.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 4)', 7));
out.push(p('Complete the second sentence so that it means the same as the first, using the word given. Use **between two and five words**, including the word given.'));
out.push(box(null, [
  '**1**  Nobody complied with the instruction.   **COMPLIANCE**',
  '     There ______________________________ the instruction.',
  '**2**  They removed the sheet in 2019.   **REMOVAL**',
  '     The ______________________________ place in 2019.',
  '**3**  The committee decided on Thursday.   **REACHED**',
  '     A decision ______________________________ the committee on Thursday.',
  '**4**  It has been decided to discontinue the practice.   **DECISION**',
  '     A ______________________________ the practice has been taken.',
  '**5**  They did not notify the reclassification.   **NOTIFICATION**',
  '     No ______________________________ was given.',
  '**6**  We agreed to extend the trial.   **AGREEMENT**',
  '     There was ______________________________ extend the trial.',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Rewrite your own official paragraph for the person it is about (80 words or more).'));
out.push(p('**FOR ______________, ABOUT ______________**   From ______________, ______________. This was decided ______________, in ______________.   **What it does not change, and the notice never said so.** ______________ is still ______________, and always was.   **What to do if ______________.** ______________ — before ______________, and not after.   **Who to ask.** ______________. _(If nobody is recorded: no ______________ is recorded, so ask ______________.)_   **And the one thing I cannot tell you.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The person it is about named in the first line, not the file',
  'The date and the room where no name is available',
  'The thing it does **not** change, which the notice never said',
  'Somewhere to send a query, even where nobody is recorded',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 2: an article)', 10));
out.push(box(null, [
  '⚠ **This is the first article of the course, and an article is not a letter.** It is written for people who chose to read it, so it may ask a question, address the reader directly and end on a judgement — which an official paragraph may not.',
  'You see this announcement in an English-language magazine for people who work in offices.',
  '_**Articles wanted: the sentence nobody argued with.** Tell us about one official sentence you have had to use or obey — what it said, who it left out, and what it cost. We will print the best articles next month._',
  'Write your **article** in **180–220 words**.',
], C.lorange, C.orange));
out.push(...lines(8));
out.push(pb());
out.push(stage('✓', 'Unit 2 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  Following the ___ of deliveries on 2 March, no further issue will be authorised.   a) suspend   b) suspension   c) to suspend',
  '2  ___ decided that the practice would be discontinued.   a) There has been   b) It has   c) It has been',
  '3  Three ___ were recorded in March.   a) notifications   b) compliances   c) guidances',
  '4  The decision, ___ by the works office on 2 March, has not been reviewed.   a) taking   b) taken   c) take',
  '5  Which is an insert and not a hedge?   a) , on 2 March,   b) , apparently in March,   c) , at some point,',
  '6  No ___ of the reclassification was given.   a) notify   b) notified   c) notification',
  '7  The repeat of the ___ afternoon run gave the same result.   a) of 29 October   b) 29 October   c) 29 October\'s',
  '8  The review of the arrangements ___ completed.   a) has not been   b) have not been   c) has not',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 2 style – sentence completion).** 🔊 **Track 2.15** You will hear a man talking about four paragraphs from his office. Complete the sentences with **a word or a number**.'));
[
  '**1**  He has worked in the contracts office for ___________ years.',
  '**2**  The store paragraph is ___________ words long.',
  '**3**  He has found ___________ of the four missing agents.',
  '**4**  The suspension was an instruction of the ___________ office.',
  '**5**  ___________ of them decided it, in a room, on a Thursday.',
  '**6**  The quiet after it lasted ___________ months.',
  '**7**  Instead of names he would now put in the date and the ___________.',
  '**8**  He has written about ___________ paragraphs of that kind.',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 2.15  Audio script (read after the check)', [
  ['Adnan', 'I have been a clerk in a directorate contracts office for nineteen years, and until a fortnight ago I had never counted anything about the paragraphs I write. Then somebody asked me a question in a classroom — by whom — and I took four of them home.'],
  ['', 'The first is the store paragraph. Forty-one words, about the suspension of deliveries on the second of March, pending the completion of a review, until confirmation of compliance has been received. Four people are missing from it. I have found one of the four: it was an instruction of the works office, and there is a minute number. The other three I cannot find and I have stopped looking.'],
  ['', 'The second is a reclassification of a post, effective the first of January, on a schedule that nobody signed. There is nothing to put back. I have looked twice.'],
  ['', 'The third needs a reference to the transport office in all cases of this nature. I could find out who wrote that one, because it will be a 2014 instruction and the man is still at his desk.'],
  ['', 'And the fourth is mine. It has been decided that the practice of accepting late submissions will be discontinued. Three of us decided it, in a room, on a Thursday in October 2019, and I took the three of us out of the sentence on purpose, because one of them would have been blamed and it was not going to be the one who had argued against it.'],
  ['', 'It bought eleven months of quiet. Not one query. And it cost eleven months of the thing not working, because people went on submitting late and had nobody to ask about an exception. If I wrote it again I would not put our names in it. I would put the date and the room: decided on the twenty-fourth of October 2019, in the directorate office. That names nobody and it answers the only question anybody actually has.'],
  ['', 'I have written about forty paragraphs of that kind. This is the first one I have ever gone back and counted the cost of.'],
]));
out.push(p('**C  Writing.** Write the pair (180+ words): one paragraph of about forty words with every figure and no person in it, a line across the page, and one of about sixty with everybody named, the disagreement and the request.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 2)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ turn a clause into a noun phrase, with the agent and without, and turn it back',
  '☐ ask both questions of an agentless sentence — _by whom?_ and _should it say?_',
  '☐ keep the agent recoverable with one insert, and tell an insert from a hedge',
  '☐ compress three sentences into one without losing a figure, and stop at two _of_s',
  '☐ take an abstraction apart with the three questions, and add one arguable thing',
  '☐ write the pair: forty words with no person, sixty with everybody named',
  '☐ sort an official paragraph into one of the four kinds',
  '☐ rewrite a paragraph for the person it is about, and name what it never said',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 3 – THE ESSAY', [
  'Units 1 and 2 were about who is in a sentence. **Unit 3** is about holding a position for four paragraphs: the thesis sentence, the point you concede, the third point that is your own, and the conclusion that adds one thing.',
  '⚠ **3.7 reads the essay you wrote badly in 1.7.** Bring it, with its date on it, **unimproved**. If you have rewritten it, bring both and say which is which. The comparison is the lesson and there is no other way to get it.',
  '**And bring one essay-shaped argument you have lost** — at work, at home, in writing or out loud — where you were right and did not carry it. 3.2 is built on the point you should have conceded and did not.',
  '**One thing to keep from tonight.** The paragraph you rewrote for the person it was about. **4.6** separates what you know from what you infer, and that paragraph is the first place most of you will find you have been mixing the two.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 1 · Syria Edition · Unit 2 · Student\'s Book');
