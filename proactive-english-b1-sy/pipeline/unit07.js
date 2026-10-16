// Proactive English B1 · Syria Edition · Book 1 · Unit 7 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 7  Cause, Effect and Consequence'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**7.1**  give a reason',
  '**7.2**  give a result',
  '**7.3**  say how extreme the cause was',
  '**7.4**  describe a chain of events',
  '**7.5**  say what caused what, and how sure you are',
  '**7.6**  argue from evidence in writing',
  '**7.7**  Review & Mediate: explain a report that gives reasons',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**Three words that are not the same word.** _Caused_, _led to_ and _contributed to_ are the whole of 7.5, and the difference between them is the difference between a report that can be acted on and one that cannot.',
  '**Fares finds out.** In 7.4 he reports the telephone call he made after Unit 6, and the answer is not the one the class is expecting. The most expensive thing in the chain is not the post.',
  '**The evidence paragraph.** In 7.6 you learn the four-sentence shape that every written argument in English is built on: the claim · the evidence · the limit of the evidence · what it does **not** show.',
], C.lyellow, C.orange));

// ======================= 7.1 =======================
out.push(pb());
out.push(h2('7.1  Because, since, due to'));
out.push(p('**Function:** giving a reason   ·   **Grammar:** _because_ · _since_ · _as_ · _due to_ · _owing to_   ·   **Pronunciation:** the pause before a reason'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads six real reasons given for one late bus. The class sorts them: which three would you **say**, and which three would you **write**? Then the harder question: which of the six is not a reason at all?'));
out.push(board('We were late because the road had been closed since six.', 'because + clause · due to + noun'));
out.push(p('**b**  Clause or noun? **1** _due to ___._  **2** _because ___._  **3** _owing to ___._  **4** _since ___._  **5** _as ___._  Fill each with _the rain_ or _it was raining_.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Tareq comparing?   **A** two roads   **B** what he says and what the company writes   **C** two kinds of passenger'));
out.push(p('**b**  Listen again. **1** What does the company\'s form say?   **2** What does Ms Huda say _due to_ cannot do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.1  Due to circumstances', [
  ['Tareq', 'When the bus is late I have to give a reason twice, in two different languages, and one of them is English.'],
  ['Ms Huda', 'Explain.'],
  ['Tareq', 'To the passengers I say: sorry, the Harasta road was shut from six this morning and nobody told us. To the company I write, on a form, in a box about this big: "Delay due to traffic conditions."'],
  ['Jad', 'Those are the same thing.'],
  ['Tareq', 'They are not the same thing at all. Mine has a road in it, a time, and somebody who did not tell us. Theirs has traffic. There is traffic every morning. Traffic is not a reason, it is the weather.'],
  ['Ms Huda', 'Why does the form say that?'],
  ['Tareq', 'Because the box is three centimetres long and because "due to traffic conditions" is the phrase everybody writes. I have written it about ninety times.'],
  ['Ms Huda', 'Here is the grammar and it is a small thing with a big consequence. _Because_ takes a **clause** — a whole sentence, with a verb in it. _Due to_ takes a **noun**. And a noun can be so general that it carries no information at all, which is what has happened to Tareq\'s ninety forms. You cannot say "due to the road had been closed". So the moment you reach for _due to_, you have to turn your reason into a thing — and things are easier to make vague than sentences are.'],
  ['Samira', 'So _because_ is better.'],
  ['Ms Huda', 'Not better. Harder to hide behind. _Due to_ is perfectly good English and it is right in a timetable or a notice. It is wrong in a box where somebody is supposed to find out what happened.'],
  ['Tareq', 'Ninety forms, and every one of them true, and all ninety of them say nothing. I could have written "the Harasta road was closed at six and nobody told the depot" in nine words.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – five ways to give a reason**',
  table(['you say', 'what follows it'], [
    ['_**because** the road had been closed_', 'a **clause** — the ordinary, usable one'],
    ['_**since** / **as** nobody had told us_', 'a clause; slightly more formal, often first'],
    ['_**due to** the closure of the road_', 'a **noun** — written English, notices, reports'],
    ['_**owing to** the closure_', 'a noun; more formal still and slightly old'],
  ], [2.3, 2.3]),
  '⚠ ~~due to the road was closed~~ → _due to **the closure of** the road_ / _**because** the road was closed_. This is the single commonest error in written B1 English and it is worth over-correcting.',
  '⚠ ~~because of nobody had told us~~ → _because of **the delay**_ (noun) / _**because** nobody had told us_ (clause). _because of_ behaves like _due to_.',
  '**_since_ and _as_ put the reason first:** _Since nobody had told the depot, we left on time and sat in it for forty minutes._ Starting with the reason is useful when the result is the news.',
  '⚠ _since_ has two jobs — a reason (_since nobody told us_) and a point in time (_since 2017_). The sentence tells you which; nothing else does.',
  '**The test that matters:** can somebody **do** anything with your reason? _Due to traffic conditions_ — no. _The Harasta road was closed at six and nobody told the depot_ — yes, and it takes nine words.',
  '**Useful phrases:** traffic is not a reason, it is the weather · not better — harder to hide behind · the box is three centimetres long · every one of them true, and all ninety of them say nothing.',
  '**Practise:** Say each one twice, with _because_ and with _due to_.  1 the road was closed  2 the seal had been splitting  3 nobody had checked the oil  4 the second trolley was in the workshop  5 the light above the chamber does not work',
  '**Pronunciation.** 🔊 **Track 7.2** A reason is preceded by a tiny **pause** and the clause after it runs fast and flat: _we were late ‖ because the road had been closed since six_. If you pause **inside** the reason instead, the listener hears an excuse. Listen to six and mark where the pause falls.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the vague written reason from the card. B asks _and what actually happened?_ and then gives the real reason with _because_ and a clause. A then counts the words in B\'s version. Swap cards.'));
out.push(dlg(null, [
  ['A', '"Delay due to __________."'],
  ['B', 'And what actually happened?'],
  ['A', '__________.'],
  ['B', 'So: __________ because __________.'],
  ['A', '__________ words. Can anybody do anything with that?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the vague reasons', 'Card B – the vague reasons'], [
  ['Delay due to traffic conditions.', 'Round not completed due to staffing.'],
  ['Batch lost due to equipment failure.', 'Order delayed due to supplier issues.'],
  ['Absence due to personal reasons.', 'Repair required due to customer damage.'],
  ['Class cancelled due to circumstances.', 'Payment delayed due to administrative error.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight real reasons and count the words. None of them should be over fifteen. Then the finding: how many of the eight vague versions were **true**? All of them, and that is the whole cycle.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Give the vague reason you have written or said most often at work. Then give the real one, in under fifteen words, with _because_ and a clause.'));
out.push(p('**b**  Swap. Then each of you say whether the real version would have cost you anything to write, and what.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Tareq says that when the bus is late he has to give a reason twice. To the passengers he says the Harasta road was shut from six and nobody told them; to the company he writes "delay due to traffic conditions" in a box three centimetres long. Jad said those are the same thing, and Tareq said they are not the same thing at all: his has a road in it, a time, and somebody who did not tell them, and theirs has traffic — and there is traffic every morning, so traffic is not a reason, it is the weather. He writes it because that is the phrase everybody writes, and he has written it about ninety times. Ms Huda gave the grammar and called it a small thing with a big consequence: because takes a clause, with a verb in it, and due to takes a noun — and a noun can be so general that it carries no information at all. You cannot say "due to the road had been closed", so the moment you reach for due to you have to turn your reason into a thing, and things are easier to make vague than sentences are. Samira said so because is better, and Ms Huda said not better — harder to hide behind: due to is perfectly good English in a timetable or a notice, and wrong in a box where somebody is supposed to find out what happened. Tareq said ninety forms, every one of them true, and all ninety say nothing — when he could have written that the Harasta road was closed at six and nobody told the depot, in nine words._'));
out.push(p('**Listener task:** write the vague reason somebody has written most often, and the nine-word version.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the same form filled in twice. Answer the questions.'));
out.push(model([
  '**DELAY REPORT · ROUTE 7 · 14 APRIL** · T. Ayoub',
  '**As I have filled it in for nine years.** Delay: 38 minutes. Reason: delay due to traffic conditions.',
  '**As I filled it in this morning.** Delay: 38 minutes. Reason: the Harasta service road was closed from 06.00 for resurfacing. The depot was not told, so all four morning buses were sent down it. I turned at the junction and went through Qaboun, which added 11 km and 38 minutes. The second and third buses did the same thing behind me, one at a time, because there is no way for a driver on the road to tell the depot anything.',
  '**What is in the second one that is not in the first.** A road. A time. A reason the road was closed. The number of buses it happened to. The distance. And one sentence about why it happened four times instead of once, which is the only sentence on the form that anybody could act on.',
  '**What it cost me to write.** Four minutes, and the risk that somebody reads "the depot was not told" as a complaint about the depot, which it is.',
  '**What happened.** Nothing, yet. But the fourth bus did not go down that road, because the second driver stood at the office window at eight and told them, which is the thing I have never done in nine years because the form does it for me and the form says traffic.',
]));
out.push(item('1', 'How many things are in the second version that are not in the first?'));
out.push(item('2', 'What did it cost him to write?'));
out.push(item('3', 'Why did the fourth bus not go down that road?'));
out.push(writers([
  'A reason worth reading: **the fact** → **the reason, as a clause, with a time and a place** → **the consequence, counted** → **and one sentence saying why it happened more than once**.',
  'Write the reason as a **clause**, not a noun, whenever anybody might act on it. _The road was closed from 06.00_ is a clause. _Due to road closure_ is the same fact with the time, the place and the agent removed.',
  'Count the consequence: _11 km and 38 minutes · all four morning buses · one at a time_. A reason with no number attached reads as an opinion about the morning.',
  '⚠ The sentence that earns the page is the one about **why it happened four times instead of once**. Anybody can explain one delay; explaining the repetition is what gets something changed.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Fill in the same report twice — as you have always written it, and as it should be written (50 words or more).'));
out.push(p('**______________ · ______________**   **As I have always written it.** ______________: ______________. Reason: due to ______________.   **As it should be written.** ______________: ______________. Reason: ______________ was ______________ from ______________. ______________ was not ______________, so ______________. ______________, which added ______________. ______________ did the same thing, one at a time, because ______________.   **What is in the second one that is not in the first.** ______________.   **What it would cost me to write.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_because_ / _since_ / _as_ + a clause · _due to_ / _owing to_ + a noun',
  'A time and a place in the reason',
  'The consequence counted',
  'One sentence about why it happened more than once',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their nine-word real reason only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more) about a reason you have given vaguely, in writing, more than once. Both versions, what is in the second one, what it would cost you — and then whether you are going to write it that way next time.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **the person who reads the forms**. ★ _The clause I could act on._  ✓ _One noun that should be a clause._  ? _Why did it happen more than once?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the vague reasons in this room were untrue?** None. Then: how many were useless? All of them. Say both numbers out loud — the pair is the argument and it needs no commentary.'));
out.push(hw('Fill in one real form, at work, with a clause instead of a noun (50+ words). Copy what you wrote and bring it. If there is no room in the box, write it underneath and bring that.'));

// ======================= 7.2 =======================
out.push(pb());
out.push(h2('7.2  So, therefore, which meant that'));
out.push(p('**Function:** giving a result   ·   **Grammar:** _so_ · _therefore_ · _as a result_ · _which meant that_   ·   **Pronunciation:** the drop before a result'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher gives a cause. The class gives the result four times — with _so_, with _therefore_, with _as a result_ and with _which meant that_ — and then says which of the four belongs in speech and which in writing.'));
out.push(board('There was one trolley, which meant that every round ran late.', 'so · therefore · as a result · which meant that'));
out.push(p('**b**  Reason or result? **1** _because_  **2** _so_  **3** _since_  **4** _therefore_  **5** _due to_  **6** _as a result_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Rasha show the class?   **A** a letter   **B** a chain of five results   **C** a photograph'));
out.push(p('**b**  Listen again. **1** How many links are there, and where does the chain start?   **2** What does Rasha say the fourth link cost?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.3  One wheel, five results', [
  ['Rasha', 'I have written it out as a chain, because somebody said in this room that a timeline is for seeing a shape. Five links, and the first one is a wheel.'],
  ['Ms Huda', 'Read it.'],
  ['Rasha', 'On the second of February a trolley went to the workshop with a broken wheel. There is no form for chasing a trolley, so it was not chased. **Which meant that** the ward ran one trolley for a five-bay unit. **As a result**, every 02.00 round took between fifty and eighty minutes longer than it is written for — thirty-four times out of thirty-four. **Therefore** I needed a reason on the form every night, and there is a box for staffing and no box for a trolley, **so** I wrote "staffing" nineteen times. And the result of that is the fifth link.'],
  ['Mazen', 'What is the fifth link?'],
  ['Rasha', 'A notice on the wall saying it has been agreed that the staffing level on this ward is appropriate and that staffing is not to be recorded as a reason.'],
  ['Fares', 'They were answering your own nineteen forms.'],
  ['Rasha', 'They were answering my own nineteen forms. I built the sentence that was used against me, one night at a time, for a reason I did not believe, in a box that was the only one open to me.'],
  ['Ms Huda', 'Say the chain in one sentence.'],
  ['Rasha', 'A wheel broke, which meant that we had one trolley, which meant that the round was late, which meant that I wrote the wrong word, which meant that the one true reason has now been forbidden in writing.'],
  ['Jad', 'And it all goes back to there being no form for a trolley.'],
  ['Rasha', 'It all goes back to there being no form for a trolley. Nineteen sentences of mine, and the first cause is a piece of paper that does not exist.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – four ways to give a result**',
  table(['you say', 'where it belongs'], [
    ['_There was one trolley, **so** the round ran late._', 'speech and writing; the ordinary one'],
    ['_**Therefore** a reason was needed every night._', 'formal writing; usually starts a sentence'],
    ['_**As a result**, every round ran late._', 'formal, spoken or written; takes a comma'],
    ['_…one trolley, **which meant that** the round ran late._', 'the workhorse — it **chains**'],
  ], [2.5, 2.1]),
  '**_which meant that_ is the one to own.** It joins a result to the clause before it without a full stop, so you can run four links in one sentence and the reader can follow every one. Nothing else in English does this as cleanly.',
  '⚠ ~~Because there was one trolley, so the round ran late.~~ One or the other, never both. Arabic allows the pair; English does not.',
  '⚠ _so_ cannot start a sentence in formal writing. ⚠ ~~Therefore the round ran late.~~ in speech sounds like a lecture — say _so_.',
  '⚠ ~~which meant the round was late~~ is acceptable in speech; in writing keep the _that_: _which meant **that** the round was late_.',
  '**Chain, do not list.** _A wheel broke, which meant that we had one trolley, which meant that the round was late._ Four separate sentences give four facts; a chain gives a **cause**.',
  '**Useful phrases:** five links, and the first one is a wheel · they were answering my own nineteen forms · I built the sentence that was used against me, one night at a time · the first cause is a piece of paper that does not exist.',
  '**Practise:** Join each pair with _which meant that_, then say it again with _so_.  1 the seal split / the door would not shut  2 the report went to an empty post / nobody read it  3 the road was closed / four buses went down it  4 there is no training post / he taught people in car parks',
  '**Pronunciation.** 🔊 **Track 7.4** Before a result the voice **drops** slightly and then runs on: _there was one trolley ↘ which meant that every round ran late_. Keep the pitch up and the listener thinks you are still giving the cause. Listen to six and mark the drop.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the first link from the card. B builds the chain forward with _which meant that_, at least three links, and then says the whole thing in one sentence. A says where the chain really starts. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '__________, which meant that __________, which meant that __________.'],
  ['A', 'In one sentence.'],
  ['B', '__________.'],
  ['A', 'Where does it really start?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the first links', 'Card B – the first links'], [
  ['A trolley wheel broke and there was no form for chasing it.', 'A report was sent to a post and not to a person.'],
  ['A road was closed and the depot was not told.', 'A key was lent for one evening and never asked for back.'],
  ['A projector arrived and nobody showed anybody how to use it.', 'A list of eleven rules was pinned up and never read all at once.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the chain and then write where it **really** starts. In five of the six it is a missing piece of paper or an unanswered message, and in none of the six is it the person who ends up being blamed.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Build a chain of at least four links for something that went wrong where you work, using _which meant that_ each time. Then say the whole thing in one sentence.'));
out.push(p('**b**  Swap. Then each of you say which link you have been treating as the first one, and whether it is.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rasha has written it out as a chain, because somebody in this room said a timeline is for seeing a shape. Five links, and the first one is a wheel. On the second of February a trolley went to the workshop with a broken wheel, and there is no form for chasing a trolley, so it was not chased — which meant that the ward ran one trolley for a five-bay unit. As a result, every two o\'clock round took between fifty and eighty minutes longer than it is written for, thirty-four times out of thirty-four. Therefore she needed a reason on the form every night, and there is a box for staffing and no box for a trolley, so she wrote "staffing" nineteen times. And the fifth link is a notice on the wall saying it has been agreed that the staffing level is appropriate and that staffing is not to be recorded as a reason. Fares said they were answering her own nineteen forms, and she said they were: she built the sentence that was used against her, one night at a time, for a reason she did not believe, in a box that was the only one open to her. In one sentence: a wheel broke, which meant that they had one trolley, which meant that the round was late, which meant that she wrote the wrong word, which meant that the one true reason has now been forbidden in writing. Jad said it all goes back to there being no form for a trolley, and she said it does — nineteen sentences of hers, and the first cause is a piece of paper that does not exist._'));
out.push(p('**Listener task:** write the chain somebody built, and the piece of paper that does not exist.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Rasha writes for the ward meeting. Answer the questions.'));
out.push(model([
  '**ONE WHEEL** · R. Barakat · for the meeting on the 14th · one page',
  'On 2 February the second medication trolley went to the workshop with a broken wheel.',
  'There is no form for chasing equipment that has gone to the workshop, so it was not chased, which meant that Ward 4 ran one trolley for a five-bay unit for five weeks.',
  'As a result the 02.00 round finished late on all thirty-four nights in that period, between fifty and eighty minutes over, with an average of sixty-three.',
  'The form requires a reason for a late round. It has a box for staffing and no box for equipment, which meant that on nineteen of the thirty-four nights I wrote "staffing" — a word I do not believe, in the only box that was open to me.',
  'Those nineteen entries were then read, and on 8 April a notice was posted stating that it has been agreed that the staffing level on this ward is appropriate and that staffing is not to be recorded as a reason for a late round.',
  '**Therefore the position today is this.** The round is still late. The trolley has not come back. The one true reason has been forbidden in writing, on the strength of nineteen forms that I filled in myself.',
  '**What I am asking for.** A line on the equipment form for "sent to workshop", with a date. That is the piece of paper the whole chain is missing, and it would have cost nothing in February.',
]));
out.push(item('1', 'How many nights, and what was the average?'));
out.push(item('2', 'Why did she write "staffing"?'));
out.push(item('3', 'What does she ask for, and what does she say it would have cost?'));
out.push(writers([
  'A one-page chain: **the first cause, in one line of its own** → **the links, joined with _so_, _which meant that_ and _as a result_** → **the position today, under its own heading** → **and one request: the missing piece of paper**.',
  'Put the **first cause on a line of its own**, with a date and nothing else. _On 2 February the second trolley went to the workshop with a broken wheel._ Everything after it is consequence.',
  'Vary the connectives — _so_, _which meant that_, _as a result_, _therefore_ — not for elegance but because four _which meant that_ in a row stop being readable at the third.',
  '⚠ End with the missing piece of paper, and say what it would have cost. A chain that ends in a complaint invites a reply; a chain that ends in a form invites a decision.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the one-page chain for something that went wrong where you work (50 words or more).'));
out.push(p('**______________** · ______________   On ______________, ______________.   There is no ______________, so ______________, which meant that ______________ for ______________.   As a result ______________ on ______________ occasions, ______________.   ______________ requires ______________. It has a box for ______________ and no box for ______________, which meant that ______________.   **Therefore the position today is this.** ______________. ______________. ______________.   **What I am asking for.** ______________. That is the piece of paper the whole chain is missing, and it would have cost ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'No _because … so_ pairs',
  '_which meant that_ used to chain, and not more than twice in a row',
  'The first cause on a line of its own, with a date',
  'A request for the missing piece of paper',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "position today" section only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more). Five links at least, the position today, and the one missing form, line, box or message that the whole chain turns on.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **the person who could add the line to the form**. ★ _The link I did not know was a link._  ✓ _One place where you give a result and call it a cause._  ? _What would the missing form have cost in February?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the chains in this room start with a missing piece of paper or an unanswered message?** Count. Then: how many start with a person? One or two, and in both cases ask what that person was missing.'));
out.push(hw('Write your chain in **one sentence**, with at least four _which meant that_ in it, and then name the piece of paper that does not exist (50+ words).'));

// ======================= 7.3 =======================
out.push(pb());
out.push(h2('7.3  It was so uneven that you could see it'));
out.push(p('**Function:** saying how extreme the cause was   ·   **Grammar:** _so … that_ · _such … that_   ·   **Pronunciation:** the stretch on _so_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher names five things from this unit — the road, the glue, the heat, the eleven minutes, the nineteen forms. For each one the class finishes: _it was so ___ that ___._'));
out.push(board('The line was so uneven that you could see the brush marks.', 'so + adjective + that · such a + noun + that'));
out.push(p('**b**  _so_ or _such_? **1** _It was ___ uneven that…_  **2** _It was ___ a mess that…_  **3** _There was ___ little light that…_  **4** _They were ___ good telephones that…_  **5** _He was ___ tired that…_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What can Mazen see on the eleven screens?   **A** the clips   **B** the brush marks   **C** the serial numbers'));
out.push(p('**b**  Listen again. **1** What does he say about three of the fifteen?   **2** What does Ms Huda say the _so … that_ sentence does that a measurement cannot?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.5  So uneven that you can see it', [
  ['Mazen', 'I have brought four of them. Look at the lower left corner under the lamp.'],
  ['Yara', 'I can see lines.'],
  ['Mazen', 'Those are brush marks. The adhesive is put on so unevenly that you can see the direction the brush went in, with your eye, from forty centimetres away. On three of the fifteen there was so much of it that it had run into the earpiece, and on two there was so little along the bottom edge that there was nothing there at all.'],
  ['Fares', 'Can you measure it?'],
  ['Mazen', 'No. I have no way of measuring a glue line. That is why I say it like that.'],
  ['Ms Huda', 'Say more about that, because it is the cycle.'],
  ['Mazen', 'If I could measure it I would write 0.4 millimetres and 1.9 millimetres and a manager would look at two numbers. I cannot. So I write that it is so uneven that you can see the brush strokes under a lamp — and that is a thing he can go and do. He can pick one up and look at it, and in four seconds he knows what I know.'],
  ['Ms Huda', 'That is exactly what the shape is for. _So … that_ takes a quality you cannot measure and gives it a **consequence you can check**. It is not decoration and it is not exaggeration. _It was such a bad road that two of the four buses were damaged_ is evidence. "The road was very bad" is a feeling.'],
  ['Yara', 'Mine would be: the light above that chamber is so weak that a split seal looks shut.'],
  ['Ms Huda', 'And that one sentence is worth more than fourteen months of the word "dark".'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – how extreme, with a consequence attached**',
  table(['the shape', 'an example'], [
    ['**so** + adjective / adverb + **that**', '_It was **so uneven that** you could see the brush marks._'],
    ['**so much / so little** + uncountable + **that**', '_There was **so little** light **that** a split seal looked shut._'],
    ['**so many / so few** + plural + **that**', '_**So many** forms said "staffing" **that** it became the rule._'],
    ['**such a** + adjective + singular noun + **that**', '_It was **such a** bad road **that** two buses were damaged._'],
  ], [2.2, 2.4]),
  '⚠ ~~so a bad road~~ → _**such a** bad road_. ⚠ ~~such uneven~~ → _**so** uneven_. The rule is short: **so** goes with an adjective alone, **such** goes with a noun.',
  '⚠ ~~so much people~~ → _**so many** people_. ⚠ ~~so few water~~ → _**so little** water_.',
  '**It is for qualities you cannot measure.** If you have a number, give the number. If you have not — a glue line, a light, a smell, a silence, a cold — give a consequence somebody can go and check, and the sentence becomes evidence instead of a feeling.',
  '**The consequence must be checkable.** _So uneven that you can see the brush marks_ — he can look. _So uneven that it is unacceptable_ — he cannot do anything with that, and it is the commonest way students waste the shape.',
  '⚠ In speech you may drop the _that_ — _it was so cold I could not hold the pen_ — but keep it in writing.',
  '**Useful phrases:** I have no way of measuring a glue line, that is why I say it like that · he can pick one up and look at it · in four seconds he knows what I know · that one sentence is worth more than fourteen months of the word "dark".',
  '**Practise:** Give each one a consequence somebody could check.  1 The light is so weak that…  2 The box on the form is so small that…  3 There was so little time that…  4 It was such a cold room that…  5 There were so many of the same model that…',
  '**Pronunciation.** 🔊 **Track 7.6** _so_ is **stretched** — _it was sooo uneven that…_ — and the stretch is what tells the listener a consequence is coming. With _such_, the stretch falls on the adjective instead: _such a **BAAAD** road_. Listen to six and repeat the stretch.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the unmeasurable thing from the card. B gives a _so … that_ or _such … that_ sentence with a consequence A could go and check. A then says what they would have to do to check it. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'It is so __________ that __________.'],
  ['A', 'What would I have to do to check that?'],
  ['B', '__________.'],
  ['A', 'And if you had a number instead?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the unmeasurable things', 'Card B – the unmeasurable things'], [
  ['the light above a machine', 'the noise in a room'],
  ['the state of a road', 'the cold in a building in January'],
  ['the handwriting on a form', 'the smell in a stairwell'],
  ['the size of a box on a form', 'how tired somebody is at the end of a block'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the consequence for each one and say whether you could **actually go and check it** in under a minute. The ones you could are the good sentences; there are usually five out of eight.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Name something at your work that you have been describing with an adjective — _dark, cold, noisy, slow, old, bad_ — and turn it into a _so … that_ sentence with a checkable consequence.'));
out.push(p('**b**  Swap. Then each of you say how long you have been using the adjective, and whether anybody has ever acted on it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mazen brought four of the telephones and told us to look at the lower left corner under the lamp. Yara said she could see lines, and he said those are brush marks: the adhesive is put on so unevenly that you can see the direction the brush went in, with your eye, from forty centimetres away. On three of the fifteen there was so much of it that it had run into the earpiece, and on two there was so little along the bottom edge that there was nothing there at all. Fares asked whether he could measure it, and he said no — he has no way of measuring a glue line, and that is why he says it like that. If he could measure it he would write nought point four millimetres and one point nine millimetres and a manager would look at two numbers; he cannot, so he writes that it is so uneven that you can see the brush strokes under a lamp, and that is a thing the manager can go and do. He can pick one up and look at it, and in four seconds he knows what Mazen knows. Ms Huda said that is exactly what the shape is for: so … that takes a quality you cannot measure and gives it a consequence you can check — it is not decoration and not exaggeration. Yara said hers would be that the light above that chamber is so weak that a split seal looks shut, and Ms Huda said that one sentence is worth more than fourteen months of the word "dark"._'));
out.push(p('**Listener task:** write the adjective somebody has been using for years, and the _so … that_ sentence that replaces it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Yara writes. Answer the questions.'));
out.push(model([
  '**THE LIGHT ABOVE THE SECOND CHAMBER** · Y. Mansour · one paragraph, and a request',
  'I have been writing the word "dark" about the area above the second chamber since I came here. I have written it in three handovers and said it to four people, and nothing has ever happened, and I now think the fault is mine for using that word.',
  'Here is the sentence I should have written. The light above the second chamber is so weak that a seal which has split along two centimetres of its length looks shut from a standing position. I know this because the seal in April had split along slightly more than two centimetres, and six people who looked at that door that week — including me — saw a closed door.',
  'It is not a dark room. The room is fine. It is one fitting, above one door, at about head height, and the glass is forty years old and has gone slightly yellow, so the light that comes out of it is the colour of a corridor at night.',
  '**What to do about it.** Take a torch to that door tomorrow and look at the seal with it, and then look at the seal without it. That is the whole of my evidence and it takes four seconds.',
  '**What I am asking for.** One fitting. Not a survey of the lighting, not a policy on lighting, not an inspection. One fitting above one door, and I have the part number.',
]));
out.push(item('1', 'How long has she been using the word "dark", and whose fault does she say that is?'));
out.push(item('2', 'What is the consequence she gives, and how does she know?'));
out.push(item('3', 'What does she tell the reader to do, and how long does it take?'));
out.push(writers([
  'A paragraph that replaces an adjective: **the word you have been using, and how many times** → **the _so … that_ sentence you should have written, with the consequence** → **how you know** → **what is _not_ wrong** → **an instruction the reader can carry out in seconds** → **and one request, with a part number**.',
  'Take the blame for the word. _I now think the fault is mine for using that word_ buys you the next four sentences and costs you nothing.',
  'Say what is **not** wrong: _it is not a dark room, the room is fine_. Narrowing the claim to one fitting above one door is what makes it grantable.',
  '⚠ Give the reader an action, not a conclusion: _take a torch to that door tomorrow and look at the seal with it, and then without it_. Four seconds of their own evidence beats a page of yours.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the paragraph that replaces an adjective you have been using (50 words or more).'));
out.push(p('**______________** · ______________   I have been writing the word "______________" about ______________ since ______________. I have written it ______________ times and said it to ______________, and nothing has happened, and I now think ______________.   Here is the sentence I should have written. ______________ is so ______________ that ______________. I know this because ______________.   It is not ______________. ______________ is fine. It is ______________.   **What to do about it.** ______________. That takes ______________.   **What I am asking for.** ______________. Not ______________, not ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_so_ + adjective · _such a_ + noun · _so much / many / little / few_',
  'The _that_ clause is a consequence somebody can **check**',
  'A sentence saying what is not wrong',
  'One request, narrow, with a number if you have one',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their _so … that_ sentence only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full paragraph (100 words or more) about the adjective you have been using longest. The word, the count, the _so … that_ sentence, how you know, what is not wrong, the four-second check, and the one request.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s paragraph as **somebody holding a torch**. ★ _The consequence I can check in four seconds._  ✓ _One adjective still doing the work of a sentence._  ? _What exactly are you asking for, and do you have the part number?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read only the adjectives, with the number of years attached.** _Dark, four years. Cold, nine. Noisy, two. Slow, eleven._ Then read the _so … that_ sentences. The room hears the difference without being told.'));
out.push(hw('Replace one adjective you have used at work for over a year with a _so … that_ sentence and a four-second check (50+ words). Then give it to somebody who could act on it.'));

// ======================= 7.4 =======================
out.push(pb());
out.push(h2('7.4  Which led to, and that in turn'));
out.push(p('**Function:** describing a chain of events   ·   **Grammar:** _which led to_ · _and that in turn_   ·   **Pronunciation:** keeping a long chain audible'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher gives the first link of a chain. Round the room, each student adds one link with _which led to_ or _and that in turn_. Stop at eight and then ask: which link was the most expensive?'));
out.push(board('Nobody answered the email, which led to an incomplete file.', 'which led to + noun · and that in turn + clause'));
out.push(p('**b**  Noun or clause? **1** _which led to ___._  **2** _and that in turn meant that ___._  **3** _which resulted in ___._  **4** _and that in turn led to ___._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Fares found out?   **A** that he got the post   **B** why he was refused   **C** that the company does not exist'));
out.push(p('**b**  Listen again. **1** What stopped his application?   **2** What does Fares say was the most expensive link in the chain?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.7  The most expensive link', [
  ['Fares', 'I rang them. Thirty-one words, like we practised, and he gave me Thursday at nine. And the first thing he said on Thursday was that nobody had told him I had applied.'],
  ['Lubna', 'He had not seen it?'],
  ['Fares', 'He had seen a name on a list of incomplete files. Here is the chain and it has six links. They asked for one reference from my current employer, which is normal. The request went to my line manager, who has not answered an email in eleven years — not mine, not anybody\'s; it is a thing everybody in that company knows and works round. Which led to an incomplete file. An incomplete file is not read, which led to the first refusal, and the second one in April was the same file still sitting there.'],
  ['Rasha', 'So you were never refused.'],
  ['Fares', 'I was never refused. I was never considered. And that in turn meant that for four months I believed I had been weighed and found light, and I stopped applying anywhere else. That is the fourth link and it is the expensive one.'],
  ['Ms Huda', 'Not the post?'],
  ['Fares', 'Not the post. The post went to somebody inside the company and it was gone before I wrote. Four months of not applying is what the unanswered email actually cost, and nobody in that chain did anything wrong except one man who does not answer emails, and everybody knew that about him, including me.'],
  ['Lubna', 'Including you.'],
  ['Fares', 'Including me. I put his name on the form. I have worked with him for eleven years and I put his name on the form because that is the box, and I did not ring him, and I did not ring them in March, and I did not ring them in April either. I rang them in October because a woman in an evening class made me count the words in a sentence.'],
  ['Ms Huda', 'And Thursday?'],
  ['Fares', 'Thursday he asked me to come and do one day in June. One day, paid, teaching their new representatives. Not the post. One day, because of the car parks.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – running a long chain**',
  table(['you say', 'what follows it'], [
    ['_…**which led to** an incomplete file._', 'a **noun** — the result as a thing'],
    ['_…**which resulted in** a refusal._', 'a noun; more formal'],
    ['_…**and that in turn meant that** I stopped applying._', 'a **clause** — and it resets the chain'],
    ['_…**which meant that** nobody read it._', 'a clause; the Unit 7.2 workhorse'],
  ], [2.6, 2.0]),
  '**_and that in turn_ is a reset button.** After three or four _which_ clauses the reader loses the thread. _And that in turn meant that…_ starts a new sentence while keeping the chain, and it is the only phrase in English that does both.',
  '⚠ ~~which led to I stopped applying~~ → _which led to **my stopping** applying_ / _and that in turn meant that **I stopped** applying_. _led to_ needs a noun.',
  '**Find the expensive link.** It is almost never the last one and almost never the one anybody was told about. In Fares\' chain the lost post is link six and the four months of not applying is link four.',
  '**Name what nobody did wrong.** _Nobody in that chain did anything wrong except one man who does not answer emails, and everybody knew that about him._ A chain that convicts nobody is believed; a chain that convicts somebody is argued with.',
  '⚠ Keep each link **one step**. Students compress three steps into one and then cannot say which one was expensive.',
  '**Useful phrases:** I was never refused, I was never considered · I believed I had been weighed and found light · and that in turn meant that I stopped applying · not the post — one day, because of the car parks.',
  '**Practise:** Build a four-link chain for each, and name the expensive link.  1 an unanswered message  2 a form with no box for something  3 a key lent and not asked for back  4 a reason written as "due to traffic conditions"',
  '**Pronunciation.** 🔊 **Track 7.8** A long chain stays audible by **falling a little at each link** and then resetting high at _and that in turn_: _…which led to an incomplete file ↘ which led to a refusal ↘ ‖ and **that** in turn ↗ meant that I stopped applying._ Listen to four chains and mark the reset.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the first link. B builds four links, using _which led to_ at least once and _and that in turn_ once, and then names the expensive link. A says whether they agree. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '__________, which led to __________, which meant that __________. And that in turn meant that __________.'],
  ['A', 'Which link is the expensive one?'],
  ['B', '__________, because __________.'],
  ['A', '__________.'],
]));
out.push(table(['Card A – first links', 'Card B – first links'], [
  ['A reference request went to somebody who never answers email.', 'A form has no box for the thing that is wrong.'],
  ['A key was lent for one evening and never asked for back.', 'A notice went up that forbade the one true reason.'],
  ['A road was closed and the depot was not told.', 'A projector arrived and nobody showed anybody how to use it.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write each chain\'s expensive link. Then count: in how many of them is the expensive link something that happened **inside somebody\'s head** — a belief, a conclusion, a decision to stop? It is usually most of them.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Build the chain for something that did not happen to you — a job, a place, a course, a payment. Six links if you can. Then name the expensive one.'));
out.push(p('**b**  Swap. Then each of you say what you concluded about yourself from the result, and whether the chain supports it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Fares rang them — thirty-one words, the way we practised — and the manager gave him Thursday at nine, and the first thing he said on Thursday was that nobody had told him Fares had applied. He had seen a name on a list of incomplete files. The chain has six links. They asked for one reference from his current employer, which is normal. The request went to his line manager, who has not answered an email in eleven years — not his, not anybody\'s, and it is a thing everybody in that company knows and works round. Which led to an incomplete file. An incomplete file is not read, which led to the first refusal, and the second one in April was the same file still sitting there. Rasha said so he was never refused, and he said he was never refused, he was never considered — and that in turn meant that for four months he believed he had been weighed and found light, and he stopped applying anywhere else. That is the fourth link and it is the expensive one, not the post: the post went to somebody inside the company and was gone before he wrote. Four months of not applying is what the unanswered email actually cost, and nobody in that chain did anything wrong except one man who does not answer emails, and everybody knew that about him, including Fares, who put his name on the form because that is the box. And on Thursday the manager asked him to come and do one day in June, paid, teaching their new representatives. Not the post. One day, because of the car parks._'));
out.push(p('**Listener task:** write the expensive link in somebody else\'s chain.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Fares writes afterwards. Answer the questions.'));
out.push(model([
  '**SIX LINKS** · F. Kayyali · written on the Thursday evening',
  'In February I applied for a field training post. In March I was refused. In April I applied again and was refused again. In May I stopped applying for anything, and I did not start again until October.',
  'Here is what happened, in order, and none of it was known to me until this morning.',
  'The application asked for one reference from my current employer. I put down the name of my line manager, because his is the name that goes in that box. He has not answered an email in eleven years — not mine, not a customer\'s, not his own manager\'s — and everybody in that company knows it and works round it, including me.',
  'The reference was not returned, which led to an incomplete file. An incomplete file is not put in front of the training manager, which led to the first refusal — a standard letter, correctly sent. In April my second application joined the same file, which was still incomplete, and produced the same letter.',
  'And that in turn meant that for four months I believed I had been read and judged. I stopped applying. I told my wife that I had been looked at twice by people who train people for a living and found wanting both times.',
  '**The arithmetic.** Lost post: one, and it had gone to somebody internal before I wrote. Lost months: four. Cost of preventing the whole thing: one telephone call to a man three doors from me, in February, lasting about forty seconds.',
  '**What I am not going to do.** I am not going to write to anybody about my line manager. He is sixty-one and he has not answered an email since the year they gave him one. The thing I did wrong is that I knew that, and I put his name in the box anyway, and then I waited.',
]));
out.push(item('1', 'What did he tell his wife?'));
out.push(item('2', 'What would it have cost to prevent the whole chain?'));
out.push(item('3', 'What does he say the thing he did wrong was?'));
out.push(writers([
  'A page that explains a result: **the dates, flat, with no explanation** → **"here is what happened, in order"** → **the chain, link by link** → **the belief the chain produced** → **the arithmetic** → **and what you are not going to do about it**.',
  'Open with the **dates only**. Four sentences, no reasons. The reader supplies the obvious explanation — that he was not good enough — and the page then takes it away from them, which is much stronger than contradicting it.',
  'Give the chain the belief it produced: _I told my wife that I had been looked at twice by people who train people for a living and found wanting both times._ That sentence is the fourth link made visible.',
  '⚠ End with what you are **not** going to do, and be fair to the person at the top of the chain. A page that ends by blaming a man of sixty-one for not using email is a page nobody will act on; one that ends _the thing I did wrong is that I knew that_ is unanswerable.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page for something that did not happen to you (50 words or more).'));
out.push(p('**______________** · ______________   In ______________ I ______________. In ______________ I ______________. In ______________ I ______________.   Here is what happened, in order, and none of it was known to me until ______________.   ______________ asked for ______________. I ______________, because ______________. ______________ has ______________ for ______________, and everybody ______________, including me.   ______________ was not ______________, which led to ______________. ______________, which led to ______________.   And that in turn meant that for ______________ I believed ______________. I ______________. I told ______________ that ______________.   **The arithmetic.** Lost ______________: ______________. Lost ______________: ______________. Cost of preventing the whole thing: ______________.   **What I am not going to do.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_which led to_ + a noun · _and that in turn meant that_ + a clause',
  'One step per link',
  'The belief the chain produced, written down',
  'An arithmetic section, and what you are not going to do',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their arithmetic section only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more). It can be a job, a flat, a place on a course, a loan, a visa, a reply that never came. The dates first, the chain second, the belief third, and the arithmetic last.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody in the middle of the chain**. ★ _The link I would not have thought of._  ✓ _One link that is really three steps._  ? _What did you conclude about yourself, and does the chain support it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the expensive links in this room are beliefs rather than events?** Most. Say the number and then one sentence: a chain that ends in somebody deciding something about themselves is the most expensive kind there is, and it is the only kind nobody keeps a record of.'));
out.push(hw('Write your own six links and the arithmetic (50+ words). Then write the forty-second action, in February, that would have prevented the whole thing.'));

// ======================= 7.5 =======================
out.push(pb());
out.push(h2('7.5  Caused, led to, contributed to'));
out.push(p('**Function:** saying what caused what, and how sure you are   ·   **Grammar:** _cause_ · _lead to_ · _contribute to_   ·   **Pronunciation:** the stress that carries certainty'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads one event and four things that were true before it. The class decides, for each one: did it **cause** the event, **lead to** it, or **contribute to** it? Three of the four are the third one.'));
out.push(board('The seal contributed to the loss. It did not cause it.', 'cause · lead to · contribute to'));
out.push(p('**b**  Which word? **1** _The broken wheel ___ a five-week delay._  **2** _The dark fitting ___ the seal being missed._  **3** _Turning the engine off ___ the bus to stop._  **4** _Three things ___ the batch being lost._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Yara correcting?   **A** her own report   **B** somebody else\'s report about her   **C** the temperature log'));
out.push(p('**b**  Listen again. **1** What does the report say caused the loss?   **2** What does Yara say the word _caused_ does to a reader?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.9  Three things, and none of them caused it', [
  ['Yara', 'The hospital has finished its own report on batch 41. It is one page and I am in it twice. And there is one sentence in it that is wrong in a way I could not have explained to you in September.'],
  ['Ms Huda', 'Read it.'],
  ['Yara', '"The loss was caused by the placing of the batch in the second chamber."'],
  ['Rasha', 'Which you did.'],
  ['Yara', 'Which I did, on the Thursday, knowing about the seal. Every word of that sentence is true and the word _caused_ is false.'],
  ['Fares', 'How can a true sentence be false?'],
  ['Yara', 'Because _caused_ means: this, and this alone, and if it had not happened nothing else would have mattered. Four things were true that week. The seal had been splitting for three days. The report about it had been in an empty drawer for fourteen months. The first chamber was full of finished work nobody had taken out. And I put the batch in the second door. Take any **one** of those four away and there is no loss at all. Not one of them caused it. Four of them contributed to it.'],
  ['Ms Huda', 'And what does the report\'s version do to a reader?'],
  ['Yara', 'It finishes the question. A reader who sees "caused by the placing of the batch" has an answer and goes home. A reader who sees "four things contributed, and removing any one of them would have prevented it" has four jobs, and three of them are not mine.'],
  ['Mazen', 'Are you going to ask them to change it?'],
  ['Yara', 'I have asked for one word. Not for my name to come out — it should be in it, I made the choice. One word: _contributed to_, in place of _was caused by_. And a sentence listing the other three.'],
  ['Ms Huda', 'And if they say no?'],
  ['Yara', 'Then the report says a true thing that will stop anybody asking the next question, and the seal is replaced and the drawer is still empty.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – three strengths of causation**',
  table(['you say', 'how strong it is'], [
    ['_X **caused** Y._ · _Y **was caused by** X._', '**this alone**; nothing else was needed'],
    ['_X **led to** Y._', 'X came first and Y followed; a **sequence**'],
    ['_X **contributed to** Y._', '**one of several**; removing it might have prevented Y'],
    ['_X was **a factor in** Y._', 'the weakest, and useful when you are unsure'],
  ], [2.3, 2.3]),
  '**The test for _caused_:** if you take X away, does Y still happen? If it might, you do not mean _caused_, you mean _contributed to_. In most workplace failures nothing caused anything; three or four things contributed.',
  '⚠ ~~contributed in~~ → _contributed **to**_. ⚠ ~~caused to the loss~~ → _**caused** the loss_ (no _to_). ⚠ ~~led the loss~~ → _**led to** the loss_.',
  '⚠ _cause_ + person + **to** + verb: _it **caused** the bus **to stop**_. But _cause_ + noun alone: _it **caused** a delay_.',
  '**Why the word matters more than the fact.** A reader who is given _caused_ has an answer and stops. A reader who is given _contributed to_, with the list, has as many jobs as there are items. That is the whole difference between a report that closes a question and one that opens it.',
  '**And the honest use of the strong word:** sometimes one thing really did cause it, and then say so. _Turning the engine off caused the bus to stop_ — that one is a cause.',
  '**Useful phrases:** every word of that sentence is true and the word "caused" is false · take any one of those four away and there is no loss at all · a reader who sees that has an answer and goes home · I have asked for one word.',
  '**Practise:** Choose the right strength and justify it.  1 the broken wheel / the five-week delay  2 the dark fitting / the split seal being missed  3 the closed road / the 38-minute delay  4 the unanswered email / four months of not applying  5 switching the board off / three telephones left out overnight',
  '**Pronunciation.** 🔊 **Track 7.10** Certainty is carried by **stress and length**: _it **CAUSED** it_ is short and hard; _it contributed **TO** it_ is longer and the stress falls late. Say the weak one weakly — students stress _contributed_ and it comes out sounding like _caused_. Listen to six and grade each one strong, middle or weak.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the pair from the card. B chooses _caused_, _led to_ or _contributed to_ and justifies it with the test — _if you take X away, does Y still happen?_ Swap cards.'));
out.push(dlg(null, [
  ['A', '__________ / __________.'],
  ['B', '__________ __________ __________.'],
  ['A', 'If you take the first one away, does the second still happen?'],
  ['B', '__________, so it is __________ and not __________.'],
]));
out.push(table(['Card A – the pairs', 'Card B – the pairs'], [
  ['the broken wheel / the five-week delay', 'the dark fitting / the seal being missed'],
  ['the closed road / the 38-minute delay', 'the unanswered email / four months of not applying'],
  ['the full first chamber / the batch in the second door', 'eleven rules on a wall / four years of sweeping at seven'],
  ['switching the board off / telephones left out overnight', 'no box for a trolley / nineteen forms saying "staffing"'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** mark each pair strong, middle or weak. Then: how many of the eight are genuinely _caused_? Two at most, and both of them are mechanical — a switch, an engine. Everything involving people is _contributed to_.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take something that went wrong where you work and list **four** things that were true before it. For each one: cause, led to, or contributed to? Then apply the test out loud.'));
out.push(p('**b**  Swap. Then each of you say which of the four has been treated as the cause, and by whom.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The hospital has finished its own report on batch 41. It is one page, Yara is in it twice, and there is one sentence that is wrong in a way she says she could not have explained in September: "the loss was caused by the placing of the batch in the second chamber." Rasha said which you did, and Yara said which she did, on the Thursday, knowing about the seal — every word of that sentence is true and the word caused is false. Fares asked how a true sentence can be false, and she said because caused means this, and this alone, and if it had not happened nothing else would have mattered. Four things were true that week: the seal had been splitting for three days; the report about it had been in an empty drawer for fourteen months; the first chamber was full of finished work nobody had taken out; and she put the batch in the second door. Take any one of those four away and there is no loss at all — so not one of them caused it, and four of them contributed to it. Ms Huda asked what the report\'s version does to a reader, and Yara said it finishes the question: a reader who sees "caused by the placing of the batch" has an answer and goes home, and a reader who sees that four things contributed and that removing any one would have prevented it has four jobs, and three of them are not hers. She has asked for one word — contributed to, in place of was caused by — and a sentence listing the other three. Not for her name to come out; it should be in it, because she made the choice._'));
out.push(p('**Listener task:** write the thing in somebody\'s story that has been called the cause and is not.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Yara sends about one word. Answer the questions.'));
out.push(model([
  '**To:** the quality committee · **Subject:** Report 41/APR — one word, and one sentence',
  'Dear Sir,',
  'I have read the report. I am in it twice and both references are accurate. I am asking for one word to be changed and one sentence to be added, and I am not asking for my own name to be removed from either place.',
  '**The word.** Paragraph 3 reads: "The loss was caused by the placing of the batch in the second chamber." I ask for _was caused by_ to be replaced with _was contributed to by_, or for the sentence to be rewritten as "The placing of the batch in the second chamber contributed to the loss."',
  '**Why.** _Caused_ means that this, and this alone, produced the loss. Four conditions were present that week and the removal of **any one of them** would have prevented it: the seal had been splitting visibly since 8 April; the February report had been held in a vacant post since March of the previous year; the first chamber had been full of completed work since the Tuesday; and I placed batch 41 in the second chamber on the Thursday, knowing about the seal.',
  '**The sentence I am asking you to add.** "Three further conditions contributed: an unrepaired seal, a report filed to a vacant post, and completed work not removed from the first chamber."',
  '**What the change does.** The present wording is true and it closes the question. A reader who reaches paragraph 3 as it stands has an explanation and no further work. With the word changed and the sentence added, the same reader has four things to look at, three of which are not about any individual.',
  '**What I am not asking for.** I am not asking to be removed from the report and I am not disputing the account of what I did. I made the choice and the record should say so. I am asking that it should not be the only thing the record says.',
]));
out.push(item('1', 'What two changes does she ask for?'));
out.push(item('2', 'How many conditions were present, and what would have prevented the loss?'));
out.push(item('3', 'What does she explicitly not ask for?'));
out.push(writers([
  'A letter asking for one word: **what you are asking for, in the first paragraph, and what you are not** → **the word, quoted in context** → **why, with the test spelt out** → **the sentence you want added, written for them** → **what the change does to a reader** → **and what you are not asking for, again, at the end**.',
  'Write the replacement sentence **for them**. A request that asks somebody to think of better wording is refused; a request that hands them the wording is granted or amended.',
  'Spell out the test inside the letter: _the removal of any one of them would have prevented it_. That one clause is the whole argument and it takes twelve words.',
  '⚠ Say twice that you are not asking to be taken out. The first time it buys you the reader\'s attention; the second time it is what makes the request impossible to refuse on the grounds of self-interest.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter asking for one word to be changed in something written about you or your work (50 words or more).'));
out.push(p('**To:** ______________   **Subject:** ______________ — one word   Dear ______________,   I have read ______________. I am asking for one word to be changed, and I am not asking for ______________.   **The word.** ______________ reads: "______________." I ask for _______________ to be replaced with _______________.   **Why.** _______________ means that this, and this alone, produced ______________. ______________ conditions were present and the removal of any one of them would have prevented it: ______________; ______________; ______________; and ______________.   **The sentence I am asking you to add.** "______________."   **What the change does.** ______________.   **What I am not asking for.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_caused_ · _led to_ · _contributed to_ chosen by the test, not by feeling',
  '_contributed **to**_ · _led **to**_ · _caused_ with no _to_',
  'The replacement sentence written out for the reader',
  'What you are not asking for, said twice',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "why" paragraph only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (100 words or more) about one word in something that has been written about you, your work, your family or your building. If nothing has been written about you, write about a word in a report you have read this year.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s letter as **the person who would have to amend the report**. ★ _The twelve words that make the change unarguable._  ✓ _One place where you are asking me to do the writing._  ? _If I change this word, what will somebody have to do that they do not have to do now?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the things in this room called a cause are really a contribution?** Nearly all. Then the useful half: how many of the people who wrote _caused_ were being unfair, and how many were just finishing a form? Almost all the second, which is the same finding as Unit 5.5.'));
out.push(hw('Find one sentence with the word _caused_ in it, anywhere — a report, a news item, a message, your own writing — and apply the test (50+ words). Rewrite it with the right strength and list what else contributed.'));

// ======================= 7.6 =======================
out.push(pb());
out.push(h2('7.6  The evidence paragraph'));
out.push(p('**Function:** arguing from evidence in writing   ·   **Grammar:** the four-sentence shape   ·   **Pronunciation:** reading an argument aloud without pleading'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads four claims. For each one the class asks the only question that matters: _what is your evidence, and what does it not show?_ Two of the four have no evidence at all.'));
out.push(board('Five in a row is hard. Three is not. I have 118 shifts of evidence.', 'claim · evidence · limit · what it does not show'));
out.push(p('**b**  Which is the claim and which is the evidence? **1** _All seven errors were on the fourth or fifth night._  **2** _Long blocks are dangerous._  **3** _None was on the first, second or third._  **4** _Nights are hard._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Rasha building?   **A** a complaint about staffing   **B** a written case for three-night blocks   **C** a request for more pay'));
out.push(p('**b**  Listen again. **1** What are the four sentences?   **2** What does Ms Huda say the fourth sentence is for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.11  Four sentences', [
  ['Rasha', 'I have been trying to write the case for three-night blocks for a month and it keeps coming out as a complaint.'],
  ['Ms Huda', 'Read me the first line.'],
  ['Rasha', '"Nights on this ward are extremely difficult and the current rota is not sustainable."'],
  ['Ms Huda', 'That is a feeling with a long word in it. Give me the four sentences instead. **Claim. Evidence. The limit of the evidence. And what it does not show.**'],
  ['Rasha', 'Claim: five nights in a row is materially harder than three, and the difference shows in errors, not in how tired anybody says they are.'],
  ['Ms Huda', 'Evidence.'],
  ['Rasha', 'In 118 consecutive night shifts I made seven errors. All seven were on the fourth or fifth night of a block. None was on the first, second or third.'],
  ['Umm Kinan', 'That is extremely strong.'],
  ['Rasha', 'The limit of it: it is one nurse, on one ward, over nine months, and I am the person who recorded the errors, which means the count depends on me having written down my own mistakes honestly, and I did not write down the first two until February.'],
  ['Fares', 'Why would you give them that?'],
  ['Rasha', 'Because they will find it. If they find it and I have not said it, everything else I wrote is a claim. If I say it first, it is a limitation of a finding.'],
  ['Ms Huda', 'And the fourth sentence.'],
  ['Rasha', 'What it does not show. It does not show that night work is unsafe, it does not show anything about the day staff, and it does not show that a three-night block would produce no errors — I would expect it to produce some, and if it does, that is not the end of the argument.'],
  ['Ms Huda', 'That is the one nobody writes, and it is the one that gets the rota changed. A reader who has been told what your evidence does not show stops looking for the hole, because you have shown them where it is.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The evidence paragraph: four sentences, in this order**',
  table(['sentence', 'what goes in it'], [
    ['**1  The claim**', 'narrow, specific, and the smallest version you can defend'],
    ['**2  The evidence**', 'numbers, dates, counts — and where they come from'],
    ['**3  The limit**', 'what is weak about your own evidence, said by you first'],
    ['**4  What it does not show**', 'the claims a reader might think you are making, refused'],
  ], [1.4, 3.2]),
  '**The claim must be the smallest one you can defend.** _Nights are hard_ cannot be granted by anybody. _Five in a row is harder than three, and it shows in errors_ can be put on a rota by one person.',
  '**The limit is not weakness; it is credit.** _It is one nurse, on one ward, over nine months, and I recorded the errors myself._ Say it before they find it, and everything else on the page becomes a finding instead of a claim.',
  '**Sentence 4 is the one nobody writes.** _It does not show that night work is unsafe · it does not show that three nights would produce no errors._ A reader who has been shown where the hole is stops digging for it.',
  '⚠ Do not put the evidence first. A paragraph that opens with numbers makes the reader guess what they are for, and they usually guess something you did not mean.',
  '⚠ One claim per paragraph. Two claims and one body of evidence is how an argument gets dismissed on the weaker half.',
  '**Useful phrases:** that is a feeling with a long word in it · because they will find it · if I say it first, it is a limitation of a finding · you have shown them where the hole is.',
  '**Practise:** Write the four sentences for each.  1 four models are badly assembled  2 the fourth-year syllabus and the examination are out of order  3 one fitting above one door is dangerous  4 the check sheet cannot be filled in honestly where it is kept',
  '**Pronunciation.** 🔊 **Track 7.12** Read an argument **flat**. Claim, evidence, limit and the fourth sentence all get the same tone and the same speed; the moment your voice rises on the claim it becomes pleading and the numbers stop being heard. Listen to two readings of the same paragraph and say which one you would act on.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the vague claim from the card. B turns it into the four sentences, out loud, inventing plausible numbers if necessary. A then attacks the paragraph — and should find that sentences 3 and 4 have already taken the attack away. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'Claim: __________. Evidence: __________. The limit of it: __________. And what it does not show: __________.'],
  ['A', 'But __________.'],
  ['B', 'I said that in sentence __________.'],
]));
out.push(table(['Card A – the vague claims', 'Card B – the vague claims'], [
  ['Nights are hard.', 'That model is badly made.'],
  ['The syllabus is badly written.', 'The building is too cold in winter.'],
  ['The forms are useless.', 'Nobody reads anything round here.'],
  ['Students do not work any more.', 'The lift is dangerous.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the four sentences and then try to attack the paragraph. Count how many of your attacks were already answered in sentence 3 or 4. In a well-built paragraph it is all of them, and that is the point of the shape.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the thing you most want changed at work and build the four sentences. Your partner may only say _what is your evidence?_ and _what does it not show?_'));
out.push(p('**b**  Swap. Then each of you say whether your claim got **smaller** while you were building it. It almost always does, and that is the work.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rasha has been trying to write the case for three-night blocks for a month and it kept coming out as a complaint. Her first line was that nights on the ward are extremely difficult and the rota is not sustainable, and Ms Huda said that is a feeling with a long word in it, and asked for four sentences instead: claim, evidence, the limit of the evidence, and what it does not show. The claim is that five nights in a row is materially harder than three, and that the difference shows in errors and not in how tired anybody says they are. The evidence is that in 118 consecutive night shifts she made seven errors, that all seven were on the fourth or fifth night of a block, and that none was on the first, second or third. Umm Kinan said that is extremely strong. The limit is that it is one nurse, on one ward, over nine months, and that she is the person who recorded the errors, so the count depends on her having written down her own mistakes honestly — and she did not write down the first two until February. Fares asked why she would give them that, and she said because they will find it: if they find it and she has not said it, everything else is a claim, and if she says it first it is a limitation of a finding. And the fourth sentence is what it does not show — not that night work is unsafe, nothing about the day staff, and not that a three-night block would produce no errors. Ms Huda said that is the one nobody writes and the one that gets the rota changed._'));
out.push(p('**Listener task:** write somebody\'s claim before and after. The second one is always smaller.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the case Rasha submits. Answer the questions.'));
out.push(model([
  '**NIGHT BLOCKS ON WARD 4** · R. Barakat · one page, for the rota meeting',
  '**Claim.** Five night shifts in a row is materially harder than three, and the difference appears in errors rather than in how tired staff report feeling. I am asking for the block to be set at three.',
  '**Evidence.** I have worked 118 consecutive night shifts between 6 January and 11 October, in blocks of five since the rota changed in March and in blocks of three before that. In those 118 shifts I made 7 errors, all of which are in the ward book. All 7 occurred on the fourth or fifth night of a block. None occurred on a first, second or third night. In the eleven weeks of three-night blocks before March I made none.',
  '**The limit of this evidence.** It is one nurse, on one ward, over nine months. I recorded the errors myself, which means the count depends on my having written down my own mistakes, and I did not record the first two until February — they are in the book with a later date and I have marked them. There is no comparison group: the other night nurse works a different pattern and I have not seen her record.',
  '**What it does not show.** It does not show that night work is unsafe. It does not show anything about the day staff or about the other night nurse. It does not show that three-night blocks would produce no errors; I would expect some, and if there are some, that is not an argument against this change. And it does not show that the blocks are the only factor — the second trolley has been in the workshop since 2 February and that has lengthened every round in the period.',
  '**What I am asking for.** Three-night blocks for one person, for three months, as a trial, with the errors counted the same way. If the trial produces errors on the second and third nights, I will have been wrong and I will say so in writing.',
]));
out.push(item('1', 'What two things does she say about the first two errors?'));
out.push(item('2', 'What other factor does she name in sentence 4?'));
out.push(item('3', 'What does she undertake to do if the trial goes against her?'));
out.push(writers([
  'The four sentences, each as its own paragraph with its own heading: **Claim · Evidence · The limit of this evidence · What it does not show** — and then **what you are asking for**, as a trial with a method.',
  'Put the **weakest** thing about your own record in sentence 3 in the plainest words you have: _I did not record the first two until February — they are in the book with a later date and I have marked them._',
  'Name the **other factor** in sentence 4, even when it weakens you: _the second trolley has been in the workshop since February and that has lengthened every round._ This is 7.5 doing its work; nothing causes anything on its own.',
  '⚠ Ask for a **trial with a method**, and say what would make you wrong. _If the trial produces errors on the second and third nights, I will have been wrong and I will say so in writing._ That sentence is the most persuasive thing on the page.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the evidence paragraph for the thing you most want changed (50 words or more).'));
out.push(p('**______________** · ______________   **Claim.** ______________. I am asking for ______________.   **Evidence.** I have ______________ between ______________ and ______________. In those ______________ I ______________. All ______________ were ______________. None was ______________.   **The limit of this evidence.** It is ______________. I ______________ myself, which means ______________. There is no ______________.   **What it does not show.** It does not show that ______________. It does not show anything about ______________. It does not show that ______________. And it does not show that ______________ is the only factor — ______________.   **What I am asking for.** ______________, as a trial, with ______________ counted the same way. If ______________, I will have been wrong and I will say so.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'One claim, and the smallest version you can defend',
  'Numbers, dates and where they come from',
  'The weakest thing about your own evidence, said by you',
  'A trial with a method, and what would make you wrong',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what it does not show" paragraph only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more) for the change you most want. Then write underneath how much smaller the claim got between your first attempt and this one.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **the person who would have to grant the trial**. ★ _The limitation you gave me before I found it._  ✓ _One claim that is bigger than your evidence._  ? _What would make you wrong?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the before-and-after claims, in pairs.** Every second one is smaller. Then the question that ends the cycle: which of the small ones could be granted by one person as a three-month trial? Most of them, which is why they got smaller.'));
out.push(hw('Write the four sentences for the change you most want (50+ words), and then write the one sentence that would make you wrong. Keep the page; 12.7 asks for it again.'));

// ======================= 7.7 =======================
out.push(pb());
out.push(h2('7.7  Review & Mediate: What does this report say caused it?'));
out.push(p('**Function:** explaining a report that gives reasons   ·   **Recycling:** Units 1–7   ·   **Exam practice:** B1 Preliminary Reading Part 5, Writing Part 1, Listening Part 3'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 7 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** Due to the road was closed, we were late.  **2** Because there was one trolley, so the round ran late.  **3** It was so a bad road that two buses were damaged.  **4** It contributed in the loss.  **5** Which led to I stopped applying.  **6** So many water had run in that it reached the earpiece.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the report the hospital has issued.'));
out.push(box(null, [
  '**INCIDENT REPORT 41/APR · BATCH 41 · SUMMARY** _(extract)_',
  '**1** On Saturday 13 April the contents of the second chamber (batch 41, three days\' growth) were found to be non-viable.',
  '**2** The temperature log shows no variation throughout. The chamber performed to specification.',
  '**3** The loss was caused by the placing of the batch in the second chamber, the door of which was not fully closing.',
  '**4** It is noted that the door seal had been reported in February of the previous year. Owing to administrative factors the report was not actioned.',
  '**5** As a result of this incident the seal was replaced on 17 April and a reminder has been issued regarding chamber checks.',
  '**6** No further action is proposed. Compliance with chamber checking will be monitored.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Lubna and Mazen take the report apart for Yara. Which paragraph does Mazen say is the only honest one, and what does Lubna find in paragraph 4?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.13  Owing to administrative factors', [
  ['Mazen', 'Six paragraphs. Paragraph 2 is the only honest one in it.'],
  ['Yara', 'Paragraph 2 says the machine worked.'],
  ['Mazen', 'Paragraph 2 says the machine worked, with evidence attached, and it is the only sentence on that page that anybody could check. Everything else is a word.'],
  ['Lubna', 'Look at paragraph 4. "Owing to administrative factors the report was not actioned." Count what has been taken out of that sentence. The post. The man who left in March. The fourteen months. The drawer. Six words, and all of them true.'],
  ['Yara', 'And _owing to_ takes a noun, so the noun had to be invented. "Administrative factors."'],
  ['Lubna', 'That is exactly what happened. Somebody reached for _owing to_, which needed a thing, and there was no thing — there was a sequence of fourteen months — so they made one up out of two abstract words. The grammar chose the lie.'],
  ['Mazen', 'And paragraph 3 says _caused_.'],
  ['Yara', 'Paragraph 3 says caused, and paragraph 4 begins "it is noted that", which is where the other three contributions were put so that they would not be in paragraph 3.'],
  ['Lubna', 'What is paragraph 6 for?'],
  ['Yara', 'Paragraph 6 is for closing it. "No further action is proposed" — and the only action anybody has taken is replacing a seal and sending a reminder about the thing I am already doing with a torch.'],
  ['Mazen', 'So what do you say to the committee?'],
  ['Yara', 'I say three things. Paragraph 2 is good and I am grateful for it. Paragraph 3 should say _contributed to_ and here is the sentence to add. And paragraph 4 should name the post, the date and the fourteen months, because "administrative factors" cannot be fixed and an empty post can.'],
]));
out.push(sp());
out.push(box('Language box – reading a report that gives reasons', [
  'Find the sentence with **evidence attached** first, and say so. Usually there is one, and in this report it is paragraph 2 — the temperature log. Starting there is honest and it buys you the rest of the conversation.',
  'Test every _caused_ with the question from 7.5: **take it away, does the thing still happen?** If it might, the report means _contributed to_.',
  'Look at what a _due to_ or an _owing to_ has been **forced to invent**. Both need a noun. When the real reason is a sequence of events, somebody has to manufacture a thing — _administrative factors_, _traffic conditions_, _supplier issues_ — and the grammar chooses the lie.',
  'Notice where the other causes have been **moved to**. _It is noted that…_ is the standard place to put the contributions you have decided not to put in the sentence with _caused_ in it.',
  'Ask what the last paragraph is **for**. _No further action is proposed_ and _compliance will be monitored_ are not findings; they are a door being shut.',
  'Then say three things, in this order: **what is good**, **the one word**, and **the one sentence that should name a date**.',
  '**Useful phrases:** it is the only sentence anybody could check · count what has been taken out of that sentence · the grammar chose the lie · "administrative factors" cannot be fixed and an empty post can.',
  '**Pronunciation.** 🔊 **Track 7.14** Reading a report aloud to somebody: read each **paragraph number** clearly, then the sentence flat and fast, then your own comment slower and lower. _Paragraph four ‖ owing to administrative factors the report was not actioned ‖ count what has gone._ Listen to three and mark the three speeds.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has one of the reports below and does **not** show it. A reads it once, then explains it: which sentence has evidence attached, which _caused_ is really a contribution, and what a _due to_ has been forced to invent. B and C must each end by naming the one word and the one sentence they would ask for. Change roles with the other report.'));
out.push(table(['Report A – a school', 'Report B – a depot'], [
  ['1  Four candidates did not complete paper 2.', '1  Four buses on route 7 were between 30 and 45 minutes late on 14 April.'],
  ['2  The paper was issued at the correct time; the invigilation sheet is attached.', '2  All four vehicles were serviced within the period; the records are attached.'],
  ['3  The failure was caused by the candidates\' inability to manage the time.', '3  The delays were caused by driver route selection.'],
  ['4  It is noted that four candidates have recorded reading difficulties.', '4  It is noted that the service road was closed from 06.00 for resurfacing.'],
  ['5  Owing to resource factors no additional support was available.', '5  Owing to communication factors the depot was not informed.'],
  ['6  No further action is proposed.', '6  Drivers will be reminded of route procedure.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write the one word and the one sentence for each report. In Report A the word is in paragraph 3 and the sentence must name the reading difficulties as a contribution; in Report B the word is the same and the sentence must name the road closure and the fact that nobody told the depot.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Bring, or remember, a report, assessment, reference or form letter that gives reasons about you or your work. Explain it to your partner **without showing it**: which sentence has evidence, which _caused_ is a contribution, what a _due to_ invented, and where the other causes were moved to. They must ask: _what could I check?_, _take it away, does it still happen?_ and _what are the three things you would say?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Yara took the hospital report apart. Six paragraphs. Paragraph 2 is the only one with evidence attached — the temperature log, which shows no variation — and she says she is grateful for it and will say so first. Paragraph 3 says the loss was caused by the placing of the batch in the second chamber, and every word of it is true and the word caused is false, because four conditions were present and removing any one would have prevented the loss. Paragraph 4 is the one Lubna found: "owing to administrative factors the report was not actioned" — six words, all true, with the post, the man who left in March, the fourteen months and the drawer all taken out. And because owing to needs a noun and the real reason was a sequence, somebody had to invent a thing, so the grammar chose the lie. Paragraph 4 is also where the other three contributions were put, under "it is noted that", so that they would not be in the sentence with caused in it. Paragraph 6 is for closing it. So she is going to say three things: paragraph 2 is good, paragraph 3 should say contributed to and here is the sentence to add, and paragraph 4 should name the post, the date and the fourteen months — because administrative factors cannot be fixed and an empty post can. So I decided to go back to the reference that was written about me in 2022 and find out which of its sentences has any evidence attached at all._'));
out.push(p('**Listener task:** what did the _due to_ invent, and where were the other causes moved to?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 5)', 7));
out.push(p('For each question, choose the correct answer **A**, **B**, **C** or **D**.'));
out.push(model([
  '**SIX WORDS**',
  'Last month a laboratory technician in Damascus asked her employer to change one word in a report. The report was one page long and every sentence in it was true, which is **(1)** ______ the request was difficult to explain.',
  'The sentence she objected to said that the loss of a batch had been **(2)** ______ by her own decision to use a particular chamber. She had made that decision, and she has never denied it. But three other things were also true that week, and the removal of any one of them would have **(3)** ______ the loss. The seal on the chamber door had been splitting for three days. A report about it had been sitting in an empty post since the previous February. The first chamber was full of work that should have been taken out.',
  'Her argument was about what a word **(4)** ______ to a reader. A reader who is told that something was caused by one decision has an answer and stops reading. A reader who is told that four things **(5)** ______ to it has four things to look at.',
  'She also objected to six words in a later paragraph: "owing to administrative factors the report was not actioned." _Owing to_ must be followed by a noun, and the real reason was not a thing at all but a sequence of events lasting fourteen months. Somebody therefore had to invent a noun, and what they invented explains nothing and cannot be repaired.',
  'The committee changed the word. They have not yet changed the six, and she says she will ask again in June, **(6)** ______ she expects to be refused.',
]));
[
  '**1**   **A** why   **B** which   **C** what   **D** because',
  '**2**   **A** caused   **B** led   **C** made   **D** contributed',
  '**3**   **A** refused   **B** prevented   **C** denied   **D** rejected',
  '**4**   **A** does   **B** makes   **C** gives   **D** takes',
  '**5**   **A** caused   **B** resulted   **C** contributed   **D** affected',
  '**6**   **A** despite   **B** although   **C** however   **D** instead',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the message explaining a report to somebody it is about (50 words or more).'));
out.push(p('It is ______________ paragraphs. The only one with evidence attached is ______________, and I would say so first.   Paragraph ______________ says ______________ was **caused** by ______________. Take ______________ away and ______________, so it is a contribution and not a cause.   Paragraph ______________ says "owing to ______________", and _owing to_ needs a noun, so somebody had to invent one. What has been taken out is ______________, ______________ and ______________.   The other causes have been moved to ______________.   So there are three things to say: ______________ is good; ______________ should say ______________; and ______________ should name ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The sentence with evidence attached, named first',
  'Every _caused_ tested — take it away, does it still happen?',
  'What the _due to_ or _owing to_ was forced to invent',
  'Three things to say, in order: what is good · the one word · the one date',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 1)', 10));
out.push(box(null, [
  'Read this email from your English friend **Sam** and the notes you have made.',
  '_"My manager has written a report about something that went wrong on my team and it says the whole thing was caused by one person. Everything in it is true but it feels completely wrong and I can\'t say why. Sam"_',
  '**Your notes:**  •  _Tell him the test to apply to the word "caused"_  ·  _Explain why a true sentence can still be wrong_  ·  _Tell him what to look for in any "due to" or "owing to"_  ·  _Tell him what to ask for, and what not to ask for_',
  'Write your email to Sam using **all four** notes. Write **100 words or more**.',
], C.grey, C.navy));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 7 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  We were late ___ the road had been closed.   a) due to   b) because   c) because of',
  '2  We were late ___ the closure of the road.   a) because   b) since   c) due to',
  '3  There was one trolley, ___ every round ran late.   a) which meant that   b) because   c) so that',
  '4  It was ___ road that two buses were damaged.   a) so bad   b) such a bad   c) such bad',
  '5  There was ___ light that a split seal looked shut.   a) so little   b) so few   c) such little',
  '6  The unanswered email ___ an incomplete file.   a) led to   b) caused to   c) contributed',
  '7  Four things ___ the loss.   a) caused to   b) contributed to   c) led',
  '8  Switching the board off ___ the lights to go out.   a) led   b) contributed   c) caused',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 3 style – note completion).** 🔊 **Track 7.15** You will hear a nurse explaining a chain of events. Write **one or two words or a number** in each gap.'));
out.push(box('WARD 4 · ONE WHEEL', [
  'The trolley went to the workshop on **(1)** ______ February',
  'It was not chased because there is no **(2)** ______ for chasing equipment',
  'The ward ran one trolley for **(3)** ______ weeks',
  'The round finished between 50 and **(4)** ______ minutes late',
  'She wrote "staffing" **(5)** ______ times',
  'A notice was posted on **(6)** ______ April',
], C.lyellow, C.orange));
out.push(dlg('Track 7.15  Audio script (read after the check)', [
  ['Rasha', 'It is five links and the first one is a wheel. The second trolley went down to the workshop on the second of February with a broken wheel, and it was not chased, because there is no form for chasing equipment that has gone to the workshop — which meant that we ran one trolley on a five-bay ward for five weeks. As a result the two o\'clock round finished late on all thirty-four nights in that period, between fifty and eighty minutes over. The form wants a reason for a late round, and it has a box for staffing and no box for equipment, so on nineteen of those thirty-four nights I wrote "staffing", which is a word I do not believe. Those nineteen forms were then read by somebody, and on the eighth of April a notice went up on the wall saying that it has been agreed that the staffing level on this ward is appropriate, and that staffing is not to be recorded as a reason for a late round. So I built the sentence that was used against me, one night at a time, in the only box that was open to me.'],
]));
out.push(p('**C  Writing.** Write the evidence paragraph for something you want changed (100+ words): the claim, the evidence with numbers, the limit of your own evidence, what it does not show, and what you are asking for as a trial.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 7)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ give a reason with _because_, _since_ or _as_ + a clause, and with _due to_ + a noun',
  '☐ notice when a _due to_ has been forced to invent a thing',
  '☐ give a result with _so_, _therefore_, _as a result_ and _which meant that_',
  '☐ chain four or five links without losing the reader, and reset with _and that in turn_',
  '☐ use _so … that_ and _such … that_ to turn a quality into a consequence somebody can check',
  '☐ choose between _caused_, _led to_ and _contributed to_ by applying the test',
  '☐ find the expensive link in a chain, even when it is a belief',
  '☐ write the four sentences: claim · evidence · the limit · what it does not show',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 8 – ADVICE AND HYPOTHESES', [
  'Unit 7 was about what did happen and why. Unit 8 is about what **would** happen: _if I were you, I\'d… · if they changed the rota, the errors would move · unless somebody asks, nothing will change._',
  'Before the next lesson: write down **one piece of advice you have been given that you did not take**, and one you have given that was not taken. Say in each case what you think would have happened. Unit 8 opens on both.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Unit 7 · Student\'s Book');
