// Proactive English B2 · Syria Edition · Book 1 · Unit 9 — Student's Book
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

out.push(h1('Unit 9  Concession That Costs Something'));
out.push(p('_Proactive English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  'Unit 6 conceded half a point in a meeting. This unit concedes **the strongest thing anybody has said against you** — in its strongest form, in writing, in the first line — and then says what the concession does **not** concede.',
  '**9.1** concedes the best objection, in the words of the person who made it.   **9.2** names what the concession leaves standing.   **9.3** concedes and names the exchange in the same sentence.   **9.4** concedes inside a single clause, where it costs four words.   **9.5** tells a real concession from a rhetorical one in somebody else\'s writing, by one test.   **9.6** writes the paragraph that gives away the best objection in its first line.   **9.7** explains a dispute in which **both sides have conceded and neither has noticed.**',
  '**Exam practice in 9.7:** B2 First **Reading and Use of English Part 4** (key-word transformations), **Writing Part 1** (the essay) and **Listening Part 1** (eight short extracts).',
  '⚠ **Bring one thing somebody has said against something you believe** — an argument and not an insult — **and the strongest form of it you can write.** 9.1 runs on it, and **a weak version of the objection makes the whole unit impossible**, because there is nothing to concede.',
  '**And the slip changes once more.** From this unit the slip you **give** is marked on whether its _one thing to keep_ was kept. The reviewer now has something at stake, and this is the last change the peer-review system makes in this book.',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 9.1 =====================
out.push(pb());
out.push(h2('9.1  The strongest thing said against me'));
out.push(p('**Function:** conceding the best objection in its strongest form   ·   **Grammar:** _granted that_ · _there is no answer to_ · _that is simply true_   ·   **Pronunciation:** the concession read at full strength'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out the strongest thing somebody has said against your position — **in their words, at their strength, and with nothing after it.** ⚠ Then stop. 8.3 asked for three seconds of silence about an object; this asks for it about an argument, and it is harder.'));
out.push(board('Some people say it costs too much, but I disagree.', 'Granted that two hours of a release is two hours nobody has. That is simply true.'));
out.push(p('**b**  Which concedes at full strength? **1** _Some people might say it is expensive._  **2** _Granted that the release is full and the field will take the place of something._  **3** _There are those who disagree, of course._  **4** _There is no answer to the point about the four hundred hours._  **5** _Not everybody sees it my way._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say a weakened objection costs the writer, and what does Adnan find when he writes his out at full strength?   **A** nothing; that it was wrong   **B** it costs the whole page, because a reader who holds the strong version watches you answer the weak one and stops reading — and Adnan finds that the strongest form of the objection against him is **better than his own argument**, and that he has been avoiding it for four years   **C** time; a shorter page'));
out.push(p('**b**  Listen again. **1** What three phrases does Ms Huda give for conceding at full strength?   **2** What does Dima say she can see in a page in four seconds?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.1  In their words, at their strength', [
  ['Ms Huda', 'Mr Barghouti. The strongest thing anybody has said against your bracket — the five words you want in each paragraph. Their words.'],
  ['Adnan', 'The head of section said: if we print where a paragraph came from, every applicant who has ever been refused under it will write to us, and we have no staff to answer them.'],
  ['Ms Huda', '_(a pause)_ **Say what you have been saying against that for four years.**'],
  ['Adnan', 'That it would only be a few. _(a pause)_ Which I do not know. I have never counted and there is no way to count it.'],
  ['Ms Huda', '⚠ **So the strongest objection to your position is better than your answer to it, and you have known that for four years.** That is not a disaster. **It is the beginning of the only page you can write that anybody will act on.**'],
  ['Omar', 'What do you do with an objection you cannot answer?'],
  ['Ms Huda', '**You concede it, in their words, at their strength, in your first paragraph.** Three phrases, and they are not interchangeable. **_Granted that…_** — concedes a fact. **_There is no answer to…_** — concedes an argument, which is more. And **_that is simply true_**, which is four words and the strongest thing in the unit.'],
  ['Hiba', 'And then you have lost.'],
  ['Ms Huda', '⚠ **Then you have lost the part that was going to be lost anyway.** The question is what you have bought with it, and that is 9.2. **But nothing in 9.2 works unless the concession in 9.1 is the real one** — and the real one is the version your opponent would recognise as theirs.'],
  ['Dima', 'I can see which it is in about four seconds.'],
  ['Ms Huda', 'Say how.'],
  ['Dima', '**By whether the objection has a figure in it.** _Some people say it is expensive_ has no figure, so it is the writer\'s version of somebody else\'s point. ⚠ _Two hours of a release that has eleven things in it already_ has a figure, and nobody invents a figure that argues against them.'],
  ['Ms Huda', '**Which is the test of this cycle and it is exact: a concession with no figure and no name in it is a concession to nobody.** _Some people_, _there are those who_, _not everybody_ — three phrases that look like fairness and are the opposite: **they concede to a person who does not exist, which costs nothing and buys nothing.**'],
  ['Jad', 'Is there a risk in giving the strong version? The reader might agree with it.'],
  ['Ms Huda', '**The reader already agrees with it. That is why it is the strong version.** ⚠ What you are choosing is whether they read it from you or hold it against you — and **a reader who finds their own objection in your first paragraph reads the rest of the page as somebody who has thought about them.**'],
  ['Rim', 'And if you can answer it?'],
  ['Ms Huda', 'Then it is not the strongest objection and you have brought the wrong one. ⚠ **Go and find the one you cannot answer**, which will take about four minutes and will be unpleasant, and that is the objection the unit is for.'],
  ['Mazen', 'And reading it aloud?'],
  ['Ms Huda', '🔊 **At full strength, at their speed, with no irony.** ⚠ A speaker who reads the objection quickly, or with a smile, has told the room that it is about to be dismissed — and the concession is then worth nothing, however the sentence is written.'],
]));
out.push(sp());
out.push(box('Language box – conceding at full strength', [
  '**Three phrases, and they are not interchangeable.** **_Granted that…_** concedes a **fact**. **_There is no answer to…_** concedes an **argument**, which is more. **_That is simply true_** is four words and is the strongest thing in the unit.',
  '⚠ **The concession must be the version your opponent would recognise as theirs** — their words, their strength, their figures. A weakened objection costs the whole page: **a reader who holds the strong version watches you answer the weak one and stops reading.**',
  '**The test, and it is Mrs Khoury\'s: has the objection got a figure or a name in it?** _Some people say it is expensive_ has neither, so it is the writer\'s version of somebody else\'s point. _Two hours of a release that already has eleven things in it_ has a figure — **and nobody invents a figure that argues against them.**',
  '⚠ **Three phrases that look like fairness and are the opposite.** _Some people say…_ · _There are those who…_ · _Not everybody…_ **They concede to a person who does not exist**, which costs nothing and buys nothing, and a reader who has met one of them knows the rest of the page is a defence.',
  '**And the answer to _then you have lost_: you have lost the part that was going to be lost anyway.** What you have bought with it is 9.2 — and **nothing in 9.2 works unless the concession is the real one.**',
  '**If you can answer the objection, you have brought the wrong one.** ⚠ Go and find the one you **cannot** answer. It takes about four minutes, it is unpleasant, and **it is the only objection worth a paragraph.**',
  '**Why the strong version is safe.** The reader already agrees with it — that is what makes it strong. **What you choose is whether they read it from you or hold it against you**, and a reader who finds their own objection in your first paragraph reads the rest as somebody who has thought about them.',
  '**Pronunciation.** 🔊 **Track 9.2** **At full strength, at their speed, with no irony.** ⚠ A speaker who reads the objection quickly, or with a smile, has told the room it is about to be dismissed — **and the concession is then worth nothing, however well the sentence is written.**',
  '**Practise:** Concede the best objection in its strongest form, with a figure in it. **1** about cost  **2** about time  **3** about staff  **4** about precedent  **5** about something you have already tried',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the **weak** version of the objection from the card. B rewrites it at full strength, with a figure or a name in it, and then stops. A says whether they recognise it as their own point. B then says which of the three phrases they would use and why. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the weak version)_ Some people say __________.'],
  ['B', '_(full strength)_ __________. _(stop)_'],
  ['A', 'That **is / is not** the point I was making, because __________.'],
  ['B', 'I would use **granted that / there is no answer to / that is simply true**, because __________.'],
]));
out.push(table(['Card A – the weak version', 'Card B – the weak version'], [
  ['_Some people say the bracket would make work._', '_Some people think the field would be expensive._'],
  ['_Not everybody wants the box made compulsory._', '_There are those who say the pencil board is untidy._'],
  ['_Some people feel the trial has gone on a long time._', '_Not everybody agrees about the stated range._'],
  ['_There are those who prefer the one-page form._', '_Some people say the thin reference is out of date._'],
  ['_Some people think the training was useful._', '_Not everybody minds the forty seconds._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the eight objections at full strength, and whether each has a figure or a name in it. Then the count: **three or four of the eight have neither** on a first run, and those are concessions to nobody. ⚠ And the finding: in two or three of the eight, the full-strength version **has no answer** — and those are the pairs that have found the objection this unit is for.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your own objection at full strength, in the words of the person who made it, with their figure in it. ⚠ Then answer the hard question in writing: **can I answer this?** If you can, go and find the one you cannot.'));
out.push(p('**b**  Swap. Then each of you read your partner\'s objection aloud **as though you believed it**, and say whether you would sign it. If you would not, it is still the writer\'s version.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Adnan gave the strongest thing said against his bracket, in the head of section\'s own words: if we print where a paragraph came from, every applicant who has ever been refused under it will write to us, and we have no staff to answer them. Asked what he has been saying against that for four years, he said: that it would only be a few — and then, after a pause, that he does not know, has never counted, and that there is no way to count it. So the strongest objection to his position is better than his answer to it, and he has known that for four years. Which is not a disaster but the beginning of the only page he can write that anybody will act on. Omar asked what you do with an objection you cannot answer, and the answer is that you concede it, in their words, at their strength, in your first paragraph — with three phrases that are not interchangeable: granted that, which concedes a fact; there is no answer to, which concedes an argument and is more; and that is simply true, which is four words and the strongest thing in the unit. Hiba said that then you have lost, and Ms Huda said then you have lost the part that was going to be lost anyway, and the question is what you have bought with it. Dima said she can see in four seconds which kind of concession a page contains, by whether the objection has a figure in it: some people say it is expensive has no figure and is the writer\'s version of somebody else\'s point, and nobody invents a figure that argues against them. Which is the test of the cycle: a concession with no figure and no name in it is a concession to nobody — some people, there are those who, not everybody. And Jad asked whether there is a risk in giving the strong version, in case the reader agrees with it, and the answer is that the reader already agrees with it, which is why it is the strong version._'));
out.push(p('**Listener task:** write your partner\'s objection at full strength, and whether you would sign it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Adnan writes with the objection in its first paragraph. Answer the questions.'));
out.push(model([
  '**THE BRACKET · and the objection I have no answer to** · A. Barghouti · 2 December',
  'This is one page and the first paragraph is not mine. **It is the objection, and I am printing it because I have spent four years giving a weaker version of it to myself.**',
  '**The objection, in the words it was put to me in.** _"If we print where a paragraph came from, every applicant who has ever been refused under it will write to us, and we have no staff to answer them."_ ⚠ **There is no answer to that, and I have not got one.** We are two clerks and a section head; the schedule has been applied, by my own count, about four hundred times since 2019.',
  '**What I have been saying for four years, and withdraw.** _It would only be a few._ **I do not know that.** I have never counted, there is no record of who was refused under which paragraph, and the absence of that record is itself a consequence of the thing I am complaining about.',
  '**What the objection does not cover, and this is the only ground I am standing on.** It is about **old** decisions. Every applicant refused since 2019 is already refused and already unanswered. ⚠ **The bracket I am asking for would go on the paragraphs from the date of the decision onwards**, and it changes nothing for anybody who has already been refused — which is the hardest sentence in this page and the one I shall be asked about.',
  '**What it would cost, counted.** Five words in each of four paragraphs: _no originating office is recorded._ About twenty minutes, once. **And the twenty minutes is not the cost the objection is about**, which I should say plainly rather than pretend.',
  '**What I am proposing in the face of it.** The bracket on new decisions only, and nothing retrospective. If the letters come anyway, they will be about the four paragraphs and not about four hundred decisions, **and four letters we can answer.**',
  '**And one sentence about the four years.** I have been arguing against a version of the head of section\'s point that he never made. ⚠ **He said we have no staff. I kept answering a man who had said it would be inconvenient.**',
]));
out.push(item('1', 'Whose words are in the first paragraph, and why has he printed them?'));
out.push(item('2', 'What has he been saying for four years, and why does he withdraw it?'));
out.push(item('3', 'What does he say about the four years at the end?'));
out.push(writers([
  'A page that concedes first: **the objection, in the words it was put to you in** → **_there is no answer to that_** → **your own weaker version, withdrawn** → **the narrow ground you are left standing on** → **what your proposal costs, counted** → **and one sentence about the years you spent avoiding it**.',
  '**Put the objection first and say the words are not yours.** _The first paragraph is not mine._ ⚠ A page that reaches the objection on its second side is read as a case; the same page with the objection first is read as an argument, **and only one of the two gets answered.**',
  '⚠ **Quote the objection and then write _there is no answer to that_, with nothing after it.** The temptation is to add _however_ in the same sentence. **One full stop, then a new paragraph**: the full stop is what makes the concession real, and a reader can feel it.',
  '**Withdraw your own weaker version by name.** _It would only be a few. I do not know that._ A page that concedes and keeps its own old answer has conceded nothing — **the old answer is still there and the reader can see it.**',
  '⚠ And **name the ground you are left standing on, even when it is narrow**. _It is about old decisions; the bracket would go on paragraphs from the date of the decision onwards._ A narrow ground stated plainly is worth more than a wide one hinted at, **because a reader can stand on it with you.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page that concedes first (80 words or more).'));
out.push(p('**______________ · and the objection I have no answer to** · ______________ · ______________   This is one page and the first paragraph is not mine.   **The objection, in the words it was put to me in.** _"______________"_ ⚠ **There is no answer to that, and I have not got one.** ______________.   **What I have been saying, and withdraw.** _______________. **I do not know that.** ______________.   **What the objection does not cover, and it is the only ground I am standing on.** ______________. ⚠ ______________.   **What it would cost, counted.** ______________. **And that is not the cost the objection is about.**   **What I am proposing in the face of it.** ______________.   **And one sentence about the ______ years.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The objection in the first paragraph, in the other person\'s words',
  '_There is no answer to that_, with a full stop after it',
  'The writer\'s own weaker version withdrawn by name',
  'The remaining ground named, however narrow',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the objection, at full strength, and the room says whether they would sign it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the objection first and in their words, the concession with a full stop, your own version withdrawn, and the narrow ground named.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the objection in their words with a figure in it, the concession with a full stop, the writer\'s old answer withdrawn.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the objection at full strength, and then _there is no answer to that_, and stop.** ⚠ The room counts the silence, in seconds, and says whether the objection sounded like somebody else\'s. Then the sentence to leave the cycle on, which is Adnan\'s: **he said we have no staff, and I kept answering a man who had said it would be inconvenient.**'));
out.push(hw('Write the page (80+ words). Then write down, in one line each, the **weak** version of the objection you have been answering and the **strong** version you have just written. ⚠ Keep both; 9.5 uses the pair.'));

// ===================== 9.2 =====================
out.push(pb());
out.push(h2('9.2  What the concession does not concede'));
out.push(p('**Function:** saying what is left standing after the concession   ·   **Grammar:** _that does not touch_ · _the fact remains that_ · _what it does not cover is_   ·   **Pronunciation:** the limit said without triumph'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Concede your objection again in one sentence. Then say **one** thing it does not touch, and stop. ⚠ Your partner says whether the second sentence takes back any part of the first; in about half the cases it does, and nobody notices while they are speaking.'));
out.push(board('Granted — but of course the other side of it is…', 'That does not touch the four paragraphs from 2019 onwards. The fact remains that nobody can ask.'));
out.push(p('**b**  Which limit leaves the concession standing? **1** _Granted, although I still think it would only be a few._  **2** _That does not touch the decisions taken from 2019 onwards._  **3** _Granted, but it is not really as bad as that._  **4** _The fact remains that there is no record of who was refused under which paragraph._  **5** _I accept that, more or less._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the commonest fault in this cycle is, and what does she say the limit must be?   **A** conceding too much; shorter   **B** a limit that quietly takes part of the concession back — and the limit must be **a different thing** from what was conceded, and not a smaller version of it   **C** conceding too little; a figure'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say about the word _but_ in this cycle?   **2** What does Nour say happened when she tried it on the template owners?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.3  That does not touch it', [
  ['Ms Huda', 'Mr Barghouti conceded that his office has no staff to answer letters. Now the second half. Mrs Sabbagh, what does that concession **not** touch?'],
  ['Nour', 'It does not touch decisions taken from 2019 onwards, because nobody has been refused under those yet.'],
  ['Ms Huda', '**Which is a different thing from what was conceded, and that is the whole test.** The objection is about **old** decisions and the proposal is about **new** ones. ⚠ **The concession is complete and the proposal survives it**, and nothing has been taken back.'],
  ['Omar', 'What would taking something back look like?'],
  ['Ms Huda', '_Granted, although I still think it would only be a few._ ⚠ **That is the commonest fault in this cycle and it is almost invisible to the writer**: the second clause reinstates the answer the first clause withdrew, and the reader sees two sentences cancelling each other.'],
  ['Hiba', 'So the limit has to be about something else entirely.'],
  ['Ms Huda', '**A different thing, not a smaller version of the same thing.** _That does not touch the new decisions_ ✓. _That is not quite as serious as it sounds_ ✗ — which is the same thing, made smaller, and it is a contradiction wearing a limit\'s clothes.'],
  ['Dima', 'And the word _but_?'],
  ['Ms Huda', '⚠ **Distrust it in this cycle and in no other.** _Granted that…, but…_ invites the writer to put the limit **inside the concession sentence**, and a limit inside the concession sentence always shrinks it. **Full stop, new sentence, and the two phrases are _that does not touch_ and _the fact remains that_.**'],
  ['Jad', 'What is the difference between those two?'],
  ['Ms Huda', '**_That does not touch_** says the concession is irrelevant to a part of your case. **_The fact remains that_** says something survives the concession entirely. ⚠ The second is stronger and is the one to use once: _the fact remains that there is no record of who was refused under which paragraph_ — **and that is true whatever the staffing is.**'],
  ['Nour', 'I tried this on the template owners on Thursday.'],
  ['Ms Huda', 'And?'],
  ['Nour', 'I conceded that the October release was full, which it was, and said that it does not touch the February release. ⚠ **And the answer came back in two hours, which has never happened before** — because I had given them the thing they were going to say and then asked for something they could say yes to.'],
  ['Ms Huda', '**Which is the practical argument for the whole unit.** A concession costs you the part you were going to lose and buys you **the reader\'s attention for the part you were not.**'],
  ['Rim', 'How many limits? One?'],
  ['Ms Huda', '**One.** Two limits and the reader concludes that the concession was a manoeuvre, ⚠ and three limits is a page that concedes nothing and takes four paragraphs to do it.'],
  ['Mazen', 'And saying it aloud?'],
  ['Ms Huda', '🔊 **Without triumph.** _That does not touch the new decisions._ Flat, and at the same volume as the concession. ⚠ A speaker who lifts the voice on the limit has announced a victory, and the concession before it is retrospectively heard as a trick.'],
]));
out.push(sp());
out.push(box('Language box – the limit that leaves the concession standing', [
  '**Two phrases, and the second is stronger.** **_That does not touch…_** — the concession is irrelevant to this part of your case. **_The fact remains that…_** — this survives the concession entirely, and it is the one to use **once**.',
  '⚠ **The limit must be a different thing, not a smaller version of the same thing.** _That does not touch the decisions from 2019 onwards_ ✓. _That is not quite as serious as it sounds_ ✗ — the same thing made smaller, which is a contradiction wearing a limit\'s clothes.',
  '⚠ **The commonest fault in the cycle, and it is almost invisible to the writer:** _granted, although I still think it would only be a few._ **The second clause reinstates the answer the first clause withdrew**, and the reader sees two sentences cancelling each other out.',
  '**So distrust _but_ in this cycle and in no other.** _Granted that…, but…_ invites the limit **inside** the concession sentence, and a limit inside the concession sentence always shrinks it. **Full stop. New sentence.**',
  '**One limit.** ⚠ Two and the reader concludes the concession was a manoeuvre; three is a page that concedes nothing and takes four paragraphs to do it.',
  '**And the practical argument, which is Mrs Sabbagh\'s: she conceded that the October release was full and had an answer in two hours, which had never happened.** **A concession costs you the part you were going to lose and buys the reader\'s attention for the part you were not.**',
  '**One more shape, for when the limit is narrow.** _What it does not cover is…_ — which is the same move with the ground named first, and it is the honest form when the surviving ground is small. ⚠ **A narrow ground stated plainly is worth more than a wide one hinted at.**',
  '**Pronunciation.** 🔊 **Track 9.4** **Without triumph**: _that does not touch the new decisions_ — flat, and at the same volume as the concession. ⚠ A speaker who lifts the voice on the limit has announced a victory, **and the concession before it is retrospectively heard as a trick.**',
  '**Practise:** Concede, full stop, and one limit that is a different thing. **1** about cost  **2** about staff  **3** about precedent  **4** about time  **5** where the surviving ground is narrow',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the concession from the card. B adds **one** limit, in a new sentence, using _that does not touch_ or _the fact remains that_. A says whether the limit took any part of the concession back. B then gives a second version where the limit is **a different thing** rather than a smaller one. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the concession)_ Granted that __________.'],
  ['B', '_(one limit)_ That does not touch __________. / The fact remains that __________.'],
  ['A', 'That **did / did not** take part of the concession back, because __________.'],
  ['B', '_(a different thing)_ __________.'],
]));
out.push(table(['Card A – the concession', 'Card B – the concession'], [
  ['_Granted that the office has no staff to answer letters._', '_Granted that the October release was full._'],
  ['_Granted that the box takes four seconds a patient._', '_Granted that the probe takes forty seconds to settle._'],
  ['_Granted that the trial has run for nine months with no figure._', '_Granted that the thin reference is wrong about two things._'],
  ['_Granted that the two-page form costs forty seconds a call._', '_Granted that the training was well run._'],
  ['_Granted that nobody asked for the bracket._', '_Granted that the pencil board loses a name a fortnight._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the limit in each of the eight, and whether it took anything back. Then the count: **four or five of the eight take something back** on a first run, almost always with _although_ or _but_. ⚠ And the second finding: the limits that do **not** take anything back are the ones about **a different period, a different group or a different document** — and that is the pattern worth naming out loud.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your own concession and **one** limit, in two sentences with a full stop between them. Then test it: **is the limit a different thing, or the same thing made smaller?**'));
out.push(p('**b**  Swap. Then each of you read your partner\'s two sentences aloud **flat**, and say whether the second one sounded like a victory. ⚠ If it did, the words may be right and the delivery has undone them.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Adnan had conceded that his office has no staff to answer letters, and Nour gave the second half: it does not touch decisions taken from 2019 onwards, because nobody has been refused under those yet. Which is a different thing from what was conceded, and that is the whole test — the objection is about old decisions and the proposal is about new ones, so the concession is complete and the proposal survives it, and nothing has been taken back. Omar asked what taking something back would look like, and the answer is: granted, although I still think it would only be a few — which is the commonest fault in the cycle and is almost invisible to the writer, because the second clause reinstates the answer the first clause withdrew. Hiba said so the limit has to be about something else entirely, and it has to be a different thing and not a smaller version of the same thing: that does not touch the new decisions is a limit, and that is not quite as serious as it sounds is a contradiction wearing a limit\'s clothes. Dima asked about the word but, and the answer is to distrust it in this cycle and in no other, because granted that, but invites the limit inside the concession sentence and a limit inside the concession sentence always shrinks it. Jad asked about the difference between the two phrases, and that does not touch says the concession is irrelevant to a part of your case, while the fact remains that says something survives the concession entirely — the second is stronger and is the one to use once. Then Nour said she had tried it on the template owners on Thursday: she conceded that the October release was full, which it was, and said that it does not touch the February release, and the answer came back in two hours, which has never happened before — because she had given them the thing they were going to say and then asked for something they could say yes to. Which is the practical argument for the whole unit: a concession costs you the part you were going to lose and buys the reader\'s attention for the part you were not. And Rim asked how many limits, and the answer is one, because two limits and the reader concludes that the concession was a manoeuvre._'));
out.push(p('**Listener task:** write your partner\'s limit and whether it took anything back.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Nour sends the template owners, with one concession and one limit. Answer the questions.'));
out.push(model([
  '**THE FEBRUARY RELEASE · one concession and one limit** · N. Sabbagh · 3 December',
  'This is half a page and it concedes the thing I have been arguing with since November. **Granted that the October release was full.** It was: eleven items, two of them regulatory, and the field I asked for would have taken the place of one of them.',
  '**And I withdraw what I have been saying about it.** I have twice implied that _full_ meant _not interested_. **It did not. It meant full**, and the release note of 1 November says so in four words that I chose to read as a refusal.',
  '**That does not touch the February release.** ⚠ The February release is not full — it has four items in it as of last Thursday — **and the specification for the field has been written since 14 November**, which is the only reason this note is one page and not four. **I am not asking you to reopen October and I shall not raise it again in writing or anywhere else.**',
  '**What I am asking for, and it is the same thing I asked for in November.** One field, with a date in it, in the February release. **The cost is unchanged: about two hours of somebody\'s time**, and I am not going to pretend it is less than that because the release is emptier. ⚠ **Nor is it two hours of my time**, which is the part of this request I have never once written down.',
  '**The figure that has not changed either.** Thirty-four of forty-one escalation calls last quarter involved a promise that is in no note of ours, and thirty of those thirty-four would have happened whatever anybody said on the telephone.',
  '**What would make me stop asking.** If February is full as well, I shall ask once more in May and then write the procedure for the promise log instead — ⚠ **and I shall say in writing that the log is the inferior answer, so that nobody has to pretend afterwards that it was anybody\'s first choice.**',
  '**And one sentence about the two hours.** The two hours were never the difficulty. **The difficulty was that I asked four times without saying how small the thing was**, which is 5.4 and is my fault and not the release\'s.',
]));
out.push(item('1', 'What does she concede, and what does she withdraw?'));
out.push(item('2', 'What does the concession not touch, and what makes the note one page?'));
out.push(item('3', 'What will she do if February is full as well?'));
out.push(writers([
  'A page with one concession and one limit: **the concession in the first two lines, at full strength** → **your own misreading of it, withdrawn** → **the limit, in a sentence of its own** → **the request and the cost, unchanged** → **what would make you stop asking** → **and one sentence about what the difficulty really was**.',
  '**Concede in the first two lines and give the concession its figures.** _Eleven items, two of them regulatory._ ⚠ A concession with the other side\'s figures in it cannot be read as a formality, and it is the quickest way to be answered by somebody who has been ignoring you.',
  '⚠ **Withdraw your own misreading, and quote it.** _I have twice implied that full meant not interested. It did not. It meant full._ **That paragraph is worth more than the concession**, because the concession costs you an argument and the misreading costs you a position you had taken in public.',
  '**Keep the request and the cost unchanged.** _The cost is unchanged: about two hours._ A request that shrinks once the objection is conceded tells the reader the first version was padded — **and a cost that does not move is the strongest evidence that the first figure was honest.**',
  '⚠ And say **what would make you stop asking**, with a date. _Once more in May, and then the log._ A page that concedes and limits and then asks for ever has conceded nothing: **the limit has to have an end on it, or it is a position and not a proposal.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page with one concession and one limit (80 words or more).'));
out.push(p('**______________ · one concession and one limit** · ______________ · ______________   **Granted that ______________.** It was: ______________.   **And I withdraw what I have been saying about it.** I have ______________ implied that ______________. **It did not. It meant ______________.**   **That does not touch ______________.** ⚠ ______________.   **What I am asking for, and it is the same thing I asked for in ______________.** ______________. **The cost is unchanged: ______________.**   **The figure that has not changed either.** ______________.   **What would make me stop asking.** If ______________, I shall ______________.   **And one sentence about ______________.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The concession in the first two lines, with the other side\'s figures',
  'The writer\'s own misreading withdrawn and quoted',
  'One limit, in a sentence of its own, about a different thing',
  'An end on the asking, with a date',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their concession and their limit, flat, and the room says whether the limit sounded like a victory.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the concession with its figures, your own misreading withdrawn, one limit, the unchanged request and cost, and an end on the asking.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the concession with the other side\'s figures, one limit about a different thing, an unchanged cost.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your concession and your limit, both flat and at the same volume.** The room says which sounded louder. ⚠ Then the fact to leave the cycle on, which is Nour\'s: **the answer came back in two hours, which had never happened before** — one concession, one limit, and a request she had already made four times.'));
out.push(hw('Write the page (80+ words) and send it. ⚠ Then write down how long the answer took, and compare it with the last time you asked for the same thing without conceding anything.'));

// ===================== 9.3 =====================
out.push(pb());
out.push(h2('9.3  In return for'));
out.push(p('**Function:** conceding and naming the exchange in the same sentence   ·   **Grammar:** _in return for_ · _if that is accepted, then_ · _on the understanding that_   ·   **Pronunciation:** the exchange read as one sentence'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Concede one thing and name what you want in return — **in the same sentence, with no full stop in the middle.** ⚠ Then your partner says whether the return is something the other side can actually give. In about a third of attempts it is not, and the sentence is wasted.'));
out.push(board('We will sort out our end if they sort out theirs.', 'In return for a refusal code on the slip, I accept that the late paperwork is ours.'));
out.push(p('**b**  Which names the exchange in one sentence? **1** _We accept the delay was ours. We would also like a code on the slip._  **2** _In return for a code on the slip, I accept that nine of the forty were late at our end._  **3** _If you put a code on the slip, we might look at the paperwork._  **4** _On the understanding that the slip carries a code, the late paperwork is ours and I shall date-stamp every consignment._  **5** _We are prepared to be reasonable if they are._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Ms Huda say the exchange must be in the same sentence as the concession, and what does Rim get back from the distributor?   **A** to make it shorter; an apology   **B** because a concession in one sentence and a request in another can be answered by taking the first and refusing the second — and Rim gets a refusal code on every slip, which she had asked for twice in eleven months without conceding anything   **C** because it is more polite; a meeting'));
out.push(p('**b**  Listen again. **1** What two tests does Ms Huda give for the thing asked in return?   **2** What does Mr Ayoub say happens if the concession and the return are two months apart?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.5  In the same sentence', [
  ['Ms Huda', 'Mrs Shaaban. Eleven months of refused consignments and no reason on any slip. You conceded something on Tuesday.'],
  ['Rim', 'I conceded that nine of our forty consignments last quarter left here with the paperwork incomplete. It is true, I had checked, and I had been implying it was four. And the sentence was this: _in return for a refusal code on every slip, I accept that the late paperwork is ours and I shall date-stamp every consignment that leaves this depot._'],
  ['Ms Huda', '**One sentence, and that is the whole lesson of the cycle.** ⚠ Write the concession in one sentence and the request in another and you have handed the reader a choice: **take the concession and refuse the request.** Nobody does that deliberately — **they do it because the two sentences arrived separately.**'],
  ['Tareq', 'And if they arrive two months apart?'],
  ['Ms Huda', '**Then there is no exchange at all.** ⚠ A concession in November is a gift by January; the request in January is a new request, and the other side has forgotten it ever cost you anything. **Same sentence, or at least same paragraph, and the same day.**'],
  ['Omar', 'What can you ask for in return? Anything?'],
  ['Ms Huda', '**Two tests, and both have to pass.** One: **is it in their gift?** A clerk cannot give you a change of policy. Two: **is it no bigger than what you conceded?** ⚠ A small concession and a large return is not an exchange — **it is a trade dressed up, and the reader can price it in four seconds.**'],
  ['Rim', 'Mine was smaller than what I gave, I think.'],
  ['Ms Huda', '**It was, and that is why it worked.** You conceded a fault, in figures, about your own depot. You asked for **three characters on a form.** ⚠ A return that is plainly cheaper than the concession is very hard to refuse in writing, **and that is the practical arithmetic of this cycle.**'],
  ['Dima', 'And the three phrases?'],
  ['Ms Huda', '**_In return for…_** puts the return first and is the plainest. **_If that is accepted, then…_** puts the concession first and is the one for a reader who has to be brought along. ⚠ **_On the understanding that…_** is the conditional form and it is the dangerous one: **use it once, and never with a deadline in the same sentence**, or you have written a threat.'],
  ['Jad', 'Why does a deadline make it a threat?'],
  ['Ms Huda', 'Because _on the understanding that the code appears by Thursday_ tells the reader what happens on Friday without your having to say it. ⚠ **A reader who hears a threat stops reading the argument** — and you have spent a real concession to buy an enemy.'],
  ['Hiba', 'Does the return have to have a name on it?'],
  ['Ms Huda', '**A name or a post, always.** _A code on the slip_ is a wish. _A code on the slip, entered by whoever signs the rejection_ is a return. ⚠ **An unnamed return is refused by nobody and done by nobody**, which is the most comfortable way for a proposal to die.'],
  ['Mazen', 'And the answer, in Mrs Shaaban\'s case?'],
  ['Rim', 'Twelve days, and a code on every slip since. ⚠ **I had asked for it twice in eleven months and conceded nothing either time**, and I do not think the two requests were even read.'],
  ['Lubna', 'And saying it aloud?'],
  ['Ms Huda', '🔊 **One sentence, one breath, no pause before the return.** ⚠ A speaker who pauses after _in return for a code on every slip_ has made the return a separate demand, **and the room hears two things instead of one exchange.**'],
]));
out.push(sp());
out.push(box('Language box – naming the exchange', [
  '**Three shapes.** **_In return for X, I accept that Y._** — the plainest; the return comes first. **_If that is accepted, then…_** — the concession comes first, for a reader who has to be brought along. **_On the understanding that…_** — the conditional form, and the dangerous one.',
  '⚠ **One sentence, and no full stop in the middle.** A concession in one sentence and a request in another hands the reader a choice: **take the concession and refuse the request.** Nobody does that deliberately — **they do it because the two sentences arrived separately.**',
  '**And the same day.** ⚠ A concession made in November is a gift by January, and the request in January is then a new request: the other side has forgotten that the concession ever cost you anything. **Same sentence, same paragraph, same day.**',
  '**Two tests for the thing you ask in return, and both must pass. 1 Is it in their gift?** A clerk cannot give you a change of policy. **2 Is it no bigger than what you conceded?** ⚠ A small concession and a large return is a trade dressed up, **and the reader prices it in four seconds.**',
  '**The arithmetic that makes this work.** Mrs Shaaban conceded **a fault, in figures, about her own depot** and asked for **three characters on a form.** ⚠ **A return plainly cheaper than the concession is very hard to refuse in writing** — twelve days, against two unanswered requests in eleven months.',
  '⚠ **Never put a deadline in the same sentence as _on the understanding that_.** _On the understanding that the code appears by Thursday_ tells the reader what happens on Friday without your saying it. **A reader who hears a threat stops reading the argument**, and you have spent a real concession to buy an enemy.',
  '**A name or a post on the return, always.** _A code on the slip_ is a wish; _a code on the slip, entered by whoever signs the rejection_ is a return. ⚠ **An unnamed return is refused by nobody and done by nobody** — the most comfortable way for a proposal to die.',
  '**One shape to keep for the hardest case.** When the return is in nobody\'s gift at your level, ask for **the name of the person whose gift it is**: _in return for accepting the figure, I ask only to be told who decides this._ ⚠ That is a return which costs the reader nothing and cannot honestly be refused.',
  '**Pronunciation.** 🔊 **Track 9.6** **One sentence, one breath, no pause before the return.** ⚠ A speaker who pauses after _in return for a code on every slip_ has made the return a separate demand — **and the room hears two things instead of one exchange.**',
  '**Practise:** Concede and name the exchange in one sentence. **1** about a fault of your own  **2** about a figure  **3** where the return is three characters on a form  **4** where the return is a name  **5** using _if that is accepted, then_',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the concession from the card. B puts it into **one sentence** with a return, using _in return for_ or _if that is accepted, then_. A then applies the two tests aloud: **is it in their gift? is it no bigger than the concession?** B gives a second version with a name or a post on the return. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the concession)_ We accept that __________.'],
  ['B', '_(one sentence)_ In return for __________, I accept that __________.'],
  ['A', 'In their gift: **yes / no**. No bigger: **yes / no**, because __________.'],
  ['B', '_(with a name on the return)_ __________, entered by __________.'],
]));
out.push(table(['Card A – the concession', 'Card B – the concession'], [
  ['_Nine of our forty consignments left with the paperwork incomplete._', '_The two-page form was our own idea and we asked for it._'],
  ['_Our figure of four was wrong; it was nine._', '_The October release was full and we knew it in September._'],
  ['_The schedule has been applied four hundred times and nobody has complained._', '_The old probe was bought on our recommendation._'],
  ['_Our drivers do arrive before the gate opens, twice a week._', '_The survey was late by eleven days and that was ours._'],
  ['_We have never once answered a letter within the month._', '_The pencil board was our idea and we defended it for a year._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the exchange sentence in each of the eight, and whether the return passed both tests. Then the count: **the gift test fails in about three of the eight** — the return is asked of somebody who cannot give it. ⚠ And the second finding: **almost nobody puts a name on the return** until they are asked to, and the named version is always shorter.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your own exchange in **one sentence**: the concession from 9.1 and a return. Then apply both tests in writing and say which of the three shapes you used and why.'));
out.push(p('**b**  Swap. Your partner prices the exchange: **which of the two things is worth more?** ⚠ If your return is worth more than your concession, rewrite the return smaller — do not make the concession bigger, which is the instinct and is always wrong.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Eleven months of refused consignments with no reason on any slip, and Rim had conceded something on Tuesday: that nine of their forty consignments last quarter left with the paperwork incomplete, which was true, she had checked, and she had been implying it was four. The sentence she wrote was: in return for a refusal code on every slip, I accept that the late paperwork is ours and I shall date-stamp every consignment that leaves this depot. One sentence, and that is the whole lesson of the cycle — because a concession in one sentence and a request in another hands the reader a choice, which is to take the concession and refuse the request, and nobody does that deliberately: they do it because the two sentences arrived separately. Tareq asked about two months apart, and then there is no exchange at all: a concession made in November is a gift by January, the request in January is a new request, and the other side has forgotten that the concession ever cost anything. Omar asked what you can ask for in return, and there are two tests and both have to pass — is it in their gift, since a clerk cannot give you a change of policy, and is it no bigger than what you conceded, since a small concession and a large return is a trade dressed up and the reader prices it in four seconds. Rim thought hers was smaller than what she gave, and it was, and that is why it worked: she conceded a fault in figures about her own depot and asked for three characters on a form, and a return plainly cheaper than the concession is very hard to refuse in writing. Dima asked about the three phrases: in return for puts the return first and is the plainest, if that is accepted then puts the concession first for a reader who has to be brought along, and on the understanding that is the conditional form and the dangerous one — use it once and never with a deadline in the same sentence, or you have written a threat, because a deadline tells the reader what happens on Friday without your having to say it, and a reader who hears a threat stops reading the argument. Hiba asked whether the return needs a name, and it needs a name or a post always, because an unnamed return is refused by nobody and done by nobody. And the answer in Rim\'s case came in twelve days, with a code on every slip since — she had asked for it twice in eleven months, conceded nothing either time, and does not think either request was read._'));
out.push(p('**Listener task:** write your partner\'s exchange sentence and which of the two things is worth more.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Rim sends to the distributor, with the exchange in one sentence. Answer the questions.'));
out.push(model([
  '**FORTY CONSIGNMENTS, NINE OF THEM OURS** · R. Shaaban · 5 December',
  'This is half a page and it concedes something I have been arguing about since January. **In return for a refusal code on every slip, I accept that the late paperwork is ours and I shall date-stamp every consignment that leaves this depot.**',
  '**The figure, which is mine and not yours.** Forty consignments last quarter; **nine left here with the paperwork incomplete.** I have been saying four. ⚠ I did not count until Tuesday, and the nine includes two that I signed myself.',
  '**What the code would be.** Three characters in the box on the rejection slip, entered by whoever signs it — _PW_ for paperwork, _TM_ for temperature, _QT_ for quantity. **Nothing else, and no sentence.** ⚠ I am not asking for a reason in prose, because a reason in prose takes four minutes and will not be written.',
  '**Why I am asking for it at all, since nine of the forty were our fault.** Because **thirty-one were not**, and I have no way of telling those thirty-one apart. **The fact remains that a depot which cannot see why a consignment was refused cannot stop it happening again** — and the nine I can now stop, because I know about them.',
  '**What the date stamp costs us, counted.** About four seconds a consignment, two hundred and forty consignments a month, which is sixteen minutes. ⚠ **It is more than the code costs you**, and I am saying so rather than letting you work it out and wonder why I did not.',
  '**What I am not asking for.** Not a change to the refusal policy, which is not yours to give. Not a right of appeal. Not an explanation of the thirty-one already refused — **those are gone, and asking for them would turn three characters into a quarrel.**',
  '**And one sentence about the eleven months.** I asked for this code twice, in February and in July, **and conceded nothing on either occasion.** ⚠ I do not think either letter was read to the end, and I now think that was a reasonable thing for you to have done with them.',
]));
out.push(item('1', 'What is the exchange, and what two figures does she give for her own side?'));
out.push(item('2', 'Why does she still want the code, when nine of the forty were her depot\'s fault?'));
out.push(item('3', 'What three things is she not asking for, and why not the third?'));
out.push(writers([
  'A note with the exchange in one sentence: **the exchange, undivided, in the first two lines** → **your own figure, corrected** → **the return, with who enters it** → **why you still want it** → **what your side costs, counted** → **what you are not asking for** → **and one sentence about the times you asked without conceding anything**.',
  '**Put the exchange in one sentence and put the sentence first.** _In return for a refusal code on every slip, I accept that the late paperwork is ours._ ⚠ A reader who meets the concession on the first line and the request on the third has been given the chance to pocket one and refuse the other.',
  '⚠ **Specify the return until it cannot be misread.** _Three characters in the box, entered by whoever signs it — PW, TM, QT. Nothing else, and no sentence._ **A return specified that narrowly is cheaper to do than to argue about**, which is the whole of the technique.',
  '**Count your own side of the exchange, and say if it is the larger.** _Sixteen minutes a month. It is more than the code costs you._ ⚠ A writer who hides that arithmetic has it discovered; **a writer who prints it is believed about everything else on the page.**',
  '⚠ And list **what you are not asking for** — especially the thing that would turn the exchange into a quarrel. _Not an explanation of the thirty-one already refused: those are gone._ **A fenced request is answered; an open one is referred upwards and dies there.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note with the exchange in one sentence (80 words or more).'));
out.push(p('**______________** · ______________ · ______________   **In return for ______________, I accept that ______________ and I shall ______________.**   **The figure, which is mine and not yours.** ______________. I have been saying ______________. ⚠ ______________.   **What the return would be.** ______________, entered by ______________. **Nothing else.**   **Why I am asking for it at all, since ______________.** Because ______________. **The fact remains that ______________.**   **What my side of it costs, counted.** ______________. ⚠ **It is more / less than ______________.**   **What I am not asking for.** Not ______________. Not ______________. Not ______________ — **______________.**   **And one sentence about the ______ months.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The exchange in one sentence, with no full stop in the middle',
  'The return specified narrowly, with who is to do it',
  'The writer\'s own side of the exchange counted',
  'What is not being asked for, including the thing that would start a quarrel',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their exchange sentence only, and the room says which of the two things is worth more.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: the exchange undivided and first, your own figure corrected, the return specified with a name on it, your side counted, and the fence round the request.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the exchange in one sentence, a return in the other side\'s gift and no bigger than the concession, the writer\'s own side counted.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your exchange sentence in one breath, with no pause before the return.** ⚠ The room says whether it heard one exchange or two demands. Then the figure to leave the cycle on, which is Rim\'s: **twelve days, against two unanswered requests in eleven months** — and the only thing that changed was that she conceded something first.'));
out.push(hw('Write the note (80+ words) and send it. ⚠ Then write down what you asked for in return and what it costs the other side **in seconds**. If you cannot put a figure on their side of it, the return is not specified narrowly enough.'));

// ===================== 9.4 =====================
out.push(pb());
out.push(h2('9.4  Four words'));
out.push(p('**Function:** conceding inside a single clause   ·   **Grammar:** _for all_ · _much as_ · _whatever else is true_ · _true though it is that_   ·   **Pronunciation:** the subordinate concession not stressed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Take the concession you wrote in 9.1 and **say it in four words inside the sentence that makes your point.** _For all its cost, …_ ⚠ Then your partner says whether anything was lost. Something usually was — and the question for this whole cycle is **whether it mattered.**'));
out.push(board('It is expensive, I admit that. However, it pays for itself.', 'For all its cost, it pays for itself in a quarter.'));
out.push(p('**b**  Which concede inside the clause? **1** _I accept that it is expensive. It still pays for itself._  **2** _For all its cost, it pays for itself in a quarter._  **3** _Much as I respect the October figure, it is a figure about a different quarter._  **4** _It is expensive. That is true. But it pays._  **5** _Full though the release was, the specification was already written._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Dima do to Omar\'s four paragraphs, and what is the one concession she refuses to shorten?   **A** she cuts them all; none   **B** she cuts four paragraphs of concession to four words — _for all its cost_ — and refuses to shorten **the strongest objection**, because a reader who holds it strongly must see it answered in a sentence of its own   **C** she moves them to the end; the first'));
out.push(p('**b**  Listen again. **1** What test does Ms Huda give for deciding whether a concession may go into a subordinate clause?   **2** What does Dima say about the difference between _for all_ and _much as_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.7  Four paragraphs, four words', [
  ['Dima', 'Mr Darwish. Your page on the second pad. Four paragraphs in the middle of it concede things, and I have cut all four.'],
  ['Omar', 'To what?'],
  ['Dima', '**To four words.** _For all its cost, the second pad pays for itself inside a quarter._ Everything else you wrote about the cost is in those four words.'],
  ['Omar', 'And nothing was lost?'],
  ['Dima', '**Three things were lost and none of them was worth a paragraph.** ⚠ You had a sentence saying you understood why the cost was raised; one saying you had thought about it carefully; one apologising for raising it again. **None of those is a concession — they are three kinds of politeness**, and politeness in print reads as nervousness.'],
  ['Ms Huda', '**And the concession Mrs Khoury did not cut?**'],
  ['Dima', 'The one about the orders. He concedes that the second pad will not help the eleven customers who order by telephone. ⚠ **That one has to stay in a sentence of its own**, and I gave it back the line he had taken off it.'],
  ['Ms Huda', '**So we have the test of the cycle, and it is one question.** _Would you be content for the reader to stop at the comma?_ ⚠ If the answer is yes, four words. **If the answer is no, the concession needs its own sentence** — because a reader who stops at the comma has not met it at all.'],
  ['Jad', 'Why would a reader stop at the comma?'],
  ['Ms Huda', '**Because a subordinate clause is read as subordinate; that is what the grammar is for.** _For all its cost_ tells the reader: _this has been dealt with, keep going._ ⚠ **Which is a service when it is true and a deception when it is not** — and burying the strongest objection in a subordinate clause looks like economy and is evasion.'],
  ['Hiba', 'Can you tell, as a reader, when it has been done to you?'],
  ['Dima', '**Not while reading. Afterwards.** ⚠ You put the page down agreeing with it, and two hours later the objection comes back to you **with nothing attached** — and that is when you notice that the writer had got past it in four words and you let them.'],
  ['Rim', 'And the shapes?'],
  ['Ms Huda', '**_For all_ takes a noun phrase**: _for all its cost_, _for all the delay_. **_Much as_ takes a clause and is first person**: _much as I respect the figure_ — ⚠ and note what it concedes. **It concedes your own feeling and not a fact**, which makes it the weakest of the four and the one most often used dishonestly.'],
  ['Dima', 'I take _much as I respect_ out of nine pages in ten. It usually means the writer respects nothing.'],
  ['Ms Huda', '**_Whatever else is true_** concedes everything at once without naming anything, and is for a reader who has four objections. ⚠ And the inverted form — **_full though the release was_** — is the most formal and the most compressed; **it is also the one that costs nothing to misuse**, so test it with the comma question like the rest.'],
  ['Mazen', 'How many in one sentence?'],
  ['Ms Huda', '**One.** ⚠ Two subordinate concessions in a sentence and the main clause has nothing left to stand on — _for all its cost, and much as I respect the objection, the pad pays_ — **which concedes twice and asserts once, and the reader believes the concessions.**'],
  ['Lubna', 'And aloud?'],
  ['Ms Huda', '🔊 **Do not stress the subordinate clause.** _For all its cost_ goes past at speaking speed and the weight falls on _pays for itself_. ⚠ A speaker who leans on the concession has made it the main clause with the voice, **and the sentence then concedes in print and concedes aloud as well.**'],
]));
out.push(sp());
out.push(box('Language box – the four-word concession', [
  '**Four shapes, and they do not do the same work.** **_For all_ + noun phrase**: _for all its cost_. **_Much as_ + clause, first person**: _much as I respect the figure_. **_Whatever else is true_**: everything at once, nothing named. **_True though it is that…_** / **_full though the release was_**: the inverted form, the most formal and the most compressed.',
  '**The test of the cycle, and it is one question: _would you be content for the reader to stop at the comma?_** ⚠ Yes — four words. **No — the concession needs a sentence of its own**, because a reader who stops at the comma has not met it at all.',
  '**Why the test works.** A subordinate clause **is read as subordinate**; that is what the grammar is for. _For all its cost_ tells the reader: _this has been dealt with, keep going._ ⚠ **A service when it is true and a deception when it is not.**',
  '⚠ **So burying the strongest objection in a subordinate clause looks like economy and is evasion** — and Mrs Khoury\'s account of how it feels from the other side is the thing to remember: **you put the page down agreeing with it, and two hours later the objection comes back with nothing attached.**',
  '**What _much as_ actually concedes.** ⚠ **Your own feeling, not a fact.** _Much as I respect the October figure_ concedes respect and concedes nothing about October. It is the weakest of the four and the most often used dishonestly — **and it comes out of nine pages in ten.**',
  '**One subordinate concession to a sentence.** ⚠ _For all its cost, and much as I respect the objection, the pad pays_ **concedes twice and asserts once, and the reader believes the concessions.**',
  '**And what is not a concession at all.** _I understand why this was raised · I have thought about it carefully · I am sorry to raise it again._ ⚠ **Three kinds of politeness**, and politeness in print reads as nervousness. **Cut all three and nothing is lost** — which is three paragraphs out of four in Mr Darwish\'s page.',
  '**The density point, and it is why this cycle is here.** A page that concedes four things in four subordinate clauses and answers the fifth in a paragraph of its own **reads as a page by somebody who has thought about all five.** ⚠ The same page with five full concessions reads as a page that cannot make up its mind.',
  '**Pronunciation.** 🔊 **Track 9.8** **Do not stress the subordinate clause.** _For all its cost_ goes past at speaking speed; the weight falls on _pays for itself_. ⚠ A speaker who leans on the concession **has made it the main clause with the voice** — the sentence then concedes in print and concedes aloud as well.',
  '**Practise:** Put the concession into four words inside your own sentence. **1** about cost  **2** about delay  **3** about a figure you do not dispute  **4** using the inverted form  **5** one you refuse to shorten, and say why',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the full concession from the card. B puts it into **four words or so** inside a sentence that makes the point, choosing one of the four shapes. A then asks the comma question: **would you be content for the reader to stop there?** ⚠ **One card on each side is a concession that should not be shortened** — B must say which and give it back its own sentence. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the full concession)_ __________.'],
  ['B', '_(four words, inside the sentence)_ For all __________, __________.'],
  ['A', 'Content for the reader to stop at the comma: **yes / no**, because __________.'],
  ['B', '_(if no — its own sentence)_ __________.'],
]));
out.push(table(['Card A – the full concession', 'Card B – the full concession'], [
  ['_The second pad costs more than the first and I know the cost was raised._', '_The code takes three characters and somebody has to enter them._'],
  ['_The bracket would take twenty minutes once._', '_The date stamp costs us sixteen minutes a month._'],
  ['_⚠ The second pad will not help the eleven customers who order by telephone._', '_⚠ The office has no staff to answer the letters this would bring._'],
  ['_The survey was eleven days late and that was ours._', '_The October release was full and we knew it in September._'],
  ['_I have raised this four times and I am raising it again._', '_The old probe was bought on our own recommendation._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the four-word version in each of the eight, and which should not have been shortened. Then the count: **about half the pairs shorten the row marked ⚠** before the comma question is asked. ⚠ And the second finding: **_much as_ is the shape chosen most often and is right least often** — in six of the eight it concedes a feeling where a fact was available.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the page you wrote in 9.1 and **cut every concession in it to four words except one.** Write the one you kept, and write in a line why it would not survive the comma.'));
out.push(p('**b**  Swap. Your partner looks for the three kinds of politeness — _I understand why · I have thought carefully · I am sorry to raise it_ — and crosses them out. ⚠ Count what you lost. **It is almost never anything.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Dima had four paragraphs in the middle of Omar\'s page on the second pad, all of them conceding things, and she cut all four — to four words. For all its cost, the second pad pays for itself inside a quarter, and everything he had written about the cost is in those four words. Omar asked whether nothing was lost, and three things were lost and none of them was worth a paragraph: a sentence saying he understood why the cost was raised, one saying he had thought about it carefully, and one apologising for raising it again. None of those is a concession — they are three kinds of politeness, and politeness in print reads as nervousness. The concession she did not cut was the one about the orders: he concedes that the second pad will not help the eleven customers who order by telephone, and that one has to stay in a sentence of its own, so she gave it back the line he had taken off it. Which gives the test of the cycle, and it is one question — would you be content for the reader to stop at the comma? If yes, four words; if no, the concession needs its own sentence, because a reader who stops at the comma has not met it at all. Jad asked why a reader would stop at the comma, and because a subordinate clause is read as subordinate, which is what the grammar is for: for all its cost tells the reader that this has been dealt with and to keep going, which is a service when it is true and a deception when it is not — and burying the strongest objection in a subordinate clause looks like economy and is evasion. Hiba asked whether you can tell as a reader when it has been done to you, and Dima said not while reading but afterwards: you put the page down agreeing with it, and two hours later the objection comes back with nothing attached, and that is when you notice the writer got past it in four words and you let them. On the shapes, for all takes a noun phrase, much as takes a clause and is first person — and it concedes your own feeling and not a fact, which makes it the weakest of the four and the one most often used dishonestly. Whatever else is true concedes everything at once without naming anything, and the inverted form, full though the release was, is the most formal and the most compressed and costs nothing to misuse. Mazen asked how many in one sentence, and the answer is one, because two subordinate concessions concede twice and assert once, and the reader believes the concessions._'));
out.push(p('**Listener task:** write your partner\'s four-word concession and the one they refused to shorten.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Dima sends back with Omar\'s page. Answer the questions.'));
out.push(model([
  '**YOUR PAGE ON THE SECOND PAD · four cuts and one restoration** · D. Khoury · 8 December',
  '**I have cut four paragraphs and given a line back to a fifth.** The page is a hundred and ninety words shorter and concedes, by my count, exactly as much as it did before.',
  '**What went, and why.** _I understand why the cost was raised · I have given this a great deal of thought · I am sorry to come back to it._ ⚠ **None of the three concedes anything.** They are politeness, and politeness in print reads as nervousness — **a reader who meets three of them in a row begins looking for what the writer is afraid of.**',
  '**What the four paragraphs are now.** _For all its cost, the second pad pays for itself inside a quarter._ **Four words**, and they carry everything the four paragraphs carried about the price. ⚠ I have kept your figure — eleven weeks — and moved it into the main clause, where it is doing the work.',
  '**What I gave back a line to, and this is the only part of the note that matters.** Your sentence about the eleven telephone customers. You had it as _for all the telephone orders_, inside a clause. **I have made it a sentence of its own again.**',
  '**Why that one and not the others.** Because it is **the strongest thing anybody will say against the pad**, and a reader who holds that objection and meets it in a subordinate clause has not met it: ⚠ **the grammar tells them it has been dealt with, and it has not been.** They will put the page down agreeing with you and remember the eleven customers on Thursday.',
  '**The rule I have been applying, and you may apply it yourself next time.** _Would you be content for the reader to stop at the comma?_ **Four of yours: yes. The fifth: no.** ⚠ It is a quicker test than it sounds, and it is the only one I use.',
  '**And one sentence about length, since you will ask.** The page is shorter and concedes more visibly, **and the two are the same fact.** True though it is that cutting looks like weakening, four concessions compressed and one given its own line **reads as a page by somebody who has thought about all five.**',
]));
out.push(item('1', 'What three sentences did she cut, and what does she say they are?'));
out.push(item('2', 'Which concession did she give a line back to, and why that one?'));
out.push(item('3', 'What is the rule she has been applying, and what were the answers for Omar\'s five?'));
out.push(writers([
  'A note on your own cuts: **what you cut and what you restored, in the first line** → **the three kinds of politeness, named** → **the four words that replaced four paragraphs** → **the one concession you gave a line back to, and why that one** → **the rule, so the writer can apply it next time** → **and one sentence on why the shorter page concedes more**.',
  '**Name the politeness as politeness.** _I understand why · I have given this thought · I am sorry to come back to it._ ⚠ Naming these three is the most useful thing one writer can do for another: **they look like concessions to the person who wrote them and to nobody else.**',
  '⚠ **Say what the four words carry, and move the figure into the main clause.** _For all its cost, the pad pays for itself inside a quarter._ A concession with the **figure left inside the clause** does two jobs badly; **the figure belongs where the weight falls.**',
  '**Make the reason for a restoration about the reader, not the writing.** _A reader who holds that objection and meets it in a clause has not met it._ ⚠ A cut defended by taste is argued with; **one defended by what a reader will remember on Thursday is accepted.**',
  '⚠ And **hand over the rule.** _Would you be content for the reader to stop at the comma?_ A note that cuts but does not teach the test must be written again next month — **the one sentence that makes the note worth sending at all.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note on your own cuts (80 words or more).'));
out.push(p('**______________ · ______ cuts and one restoration** · ______________ · ______________   **I have cut ______________ and given a line back to ______________.** The page is ______ words shorter and concedes ______________.   **What went, and why.** _______________ · ______________ · ______________. ⚠ **None of the three concedes anything.** ______________.   **What the ______ paragraphs are now.** _For all ______________, ______________._ **______ words.** ⚠ ______________.   **What I gave back a line to, and this is the only part that matters.** ______________. **I have made it a sentence of its own again.**   **Why that one and not the others.** Because ______________, and ⚠ ______________.   **The rule I have been applying.** _Would you be content for the reader to stop at the comma?_ ______________.   **And one sentence about length.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The politeness named as politeness, with all three quoted',
  'The four-word version, with the figure in the main clause',
  'One concession restored to its own sentence, with the reason',
  'The comma test handed over in a line the writer can use again',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their four-word concession and then the one they restored, and the room says whether it agrees with the division.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: the politeness named, the four words, the one restoration with its reason, and the comma test handed over.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the politeness named as politeness, one concession restored with a reader-based reason, one subordinate concession to a sentence.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your four-word concession at speaking speed, without leaning on it, and then read the one you restored.** ⚠ The room says where the weight fell in each, and whether the division between the two was right. Then the sentence to leave the cycle on, which is Mrs Khoury\'s: **the page is shorter and concedes more visibly, and the two are the same fact.**'));
out.push(hw('Cut every concession in your 9.1 page to four words except one, and send the shorter page with a line saying which one you kept. ⚠ Then count the words you lost. **Dima\'s count was a hundred and ninety, and nothing in them was a concession.**'));

// ===================== 9.5 =====================
out.push(h2('9.5  What did it cost the writer?'));
out.push(p('**Function:** telling a real concession from a rhetorical one in somebody else\'s writing   ·   **Grammar:** _it is true that_ · _of course_ · _admittedly_ · _no doubt_ — and the one test   ·   **Pronunciation:** the empty concession heard aloud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out somebody else\'s concession — from a page, a notice or a post — and ask the room **one question: what did it cost the writer?** ⚠ Then take out the pair you kept from 9.1: the weak version of the objection you had been answering, and the strong version you wrote. **Price both.**'));
out.push(board('They do admit there are problems, to be fair to them.', 'The concession cost the writer nothing: nobody said the system was perfect.'));
out.push(p('**b**  Which cost the writer something? **1** _Of course no system is perfect._  **2** _I have been saying it would only be a few. I do not know that, and I have never counted._  **3** _Admittedly the department has been under a good deal of pressure._  **4** _My figure of four was wrong; it was nine, and two of the nine I signed myself._  **5** _It is true that these matters are complex._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the one test, and what does Hiba find when she applies it to twenty-two paragraphs?   **A** is it polite; that most were polite   **B** **what did it cost the writer?** — and of twenty-two paragraphs that looked like concessions, **four cost the writer anything at all**, and the other eighteen conceded things nobody had disputed   **C** is it true; that most were true'));
out.push(p('**b**  Listen again. **1** What four kinds of rhetorical concession does Ms Huda name?   **2** What does she say about the words _of course_ and _granted_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.9  The one test', [
  ['Ms Huda', 'Mrs Nasser read twenty-two paragraphs from her training group this week, all of them conceding something. How many were concessions?'],
  ['Hiba', '**Four.** I applied one question to each of them and it took about four seconds a paragraph.'],
  ['Ms Huda', 'The question.'],
  ['Hiba', '**What did it cost the writer?** ⚠ A real concession costs a position, a figure, an argument they had been using, or a request they wanted. **Eighteen of the twenty-two cost nothing at all.**'],
  ['Omar', 'What were the eighteen conceding, then?'],
  ['Hiba', 'Things nobody had disputed. _Of course no method suits every class._ ⚠ **Nobody in the room had said that any method suits every class**, so the writer has conceded a point that was never made, **and the paragraph looks generous and is empty.**'],
  ['Ms Huda', '**And that is the first of four kinds, which are worth having names for.** **One: conceding the undisputed.** **Two: conceding somebody else\'s position** — _admittedly the directorate has been under pressure_. ⚠ **That is not the writer\'s to concede**; it costs the directorate something and the writer nothing.'],
  ['Jad', 'And the other two?'],
  ['Ms Huda', '**Three: conceding the irrelevant.** A small adjacent fact given away so that the real objection appears to have been met — _it is true that the form could be better laid out_, when the objection was about its length. ⚠ **Four: conceding and reinstating in the same sentence**, which is 9.2 seen from the reading side: _granted, although I still think it would only be a few._'],
  ['Dima', 'Are the words themselves the warning? _Of course._ _Admittedly._ _It is true that._'],
  ['Ms Huda', '**They are a signal and not a verdict, and this matters.** ⚠ Mr Barghouti wrote _granted that_ in 9.1 and it cost him four years of his own argument. **The words are honest; the question is whether a cost follows them.** If the sentence after _of course_ takes nothing away from the writer, the words were doing decoration.'],
  ['Rim', 'Is there a second question, or is one enough?'],
  ['Ms Huda', '**A second, and it catches the first kind.** _Is the thing conceded something the other side actually said?_ ⚠ Go back to what was said and look for it. **Half of all rhetorical concessions answer an objection nobody made** — and they are written in good faith by people who have never checked.'],
  ['Hiba', 'That was the commonest fault in my twenty-two by a long way.'],
  ['Mazen', 'And what do you do, as a reader, with a page like that?'],
  ['Ms Huda', '⚠ **Read it as a case and not as an argument.** A page with three rhetorical concessions and no real one has conceded nothing, **and you should expect it to be unmoved by anything you say** — which is useful to know before you spend a week answering it.'],
  ['Lubna', 'And on our own pages?'],
  ['Hiba', '**I applied it to my own first**, before the twenty-two. ⚠ **Two of my three concessions cost me nothing**, and I had written the page believing it was a generous page. **That is the uncomfortable part and it is the part worth having.**'],
  ['Tareq', 'And reading one aloud?'],
  ['Ms Huda', '🔊 **Read the concession, then stop and say what it cost you.** ⚠ If you cannot finish the second sentence, the first was decoration — **and the room hears that silence more clearly than any analysis of the page.**'],
]));
out.push(sp());
out.push(box('Language box – pricing a concession', [
  '**The test, and it takes four seconds: _what did it cost the writer?_** ⚠ A real concession costs **a position, a figure, an argument they had been using, or a request they wanted.** Of Mrs Nasser\'s twenty-two paragraphs, **four cost the writer anything at all.**',
  '**The second question, which catches the commonest kind: _is the thing conceded something the other side actually said?_** ⚠ **Half of all rhetorical concessions answer an objection nobody made** — and they are written in good faith by people who have never gone back to check.',
  '**Four kinds of rhetorical concession. 1 Conceding the undisputed**: _of course no method suits every class_ — nobody said it did. **2 Conceding somebody else\'s position**: _admittedly the directorate has been under pressure_ — ⚠ **not the writer\'s to concede**; it costs the directorate something and the writer nothing.',
  '**3 Conceding the irrelevant**: a small adjacent fact given away so that the real objection appears to have been met — _it is true that the form could be better laid out_, when the objection was about its **length**. ⚠ **4 Conceding and reinstating in the same sentence** — _granted, although I still think it would only be a few_ — **which is 9.2 seen from the reading side.**',
  '**The words are a signal and not a verdict.** _Of course · admittedly · it is true that · no doubt · granted._ ⚠ Mr Barghouti wrote _granted that_ in 9.1 and **it cost him four years of his own argument.** **The question is whether a cost follows** — if the sentence after the signal takes nothing away from the writer, the signal was doing decoration.',
  '**What to do with a page that concedes nothing.** ⚠ **Read it as a case and not as an argument**, and expect it to be unmoved by anything you say. **Knowing that before you spend a week answering it is the practical value of the whole cycle.**',
  '**And the hard part, which is the test applied to your own page.** Mrs Nasser priced her own three concessions first: ⚠ **two of the three cost her nothing, and she had written the page believing it was a generous one.** **Everybody\'s first result is like that**, and the page is better within an hour.',
  '**One kindness to extend to other writers.** A rhetorical concession is usually **not a trick but a habit** — four kinds of sentence that sound like generosity and are in every manual of polite prose. ⚠ **Price it, say what it cost, and do not accuse anybody**: _this concedes something I never said_ is a sentence that gets answered, and _this is dishonest_ is not.',
  '**Pronunciation.** 🔊 **Track 9.10** **Read the concession, then stop and say what it cost you.** ⚠ If you cannot finish the second sentence, the first was decoration — **and the room hears that silence more clearly than any analysis of the page.**',
  '**Practise:** Price a concession in four seconds. **1** one of your own  **2** one from a notice  **3** one that concedes the undisputed  **4** one that concedes somebody else\'s position  **5** one that cost the writer a figure',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a concession from the card. B prices it: **what did it cost the writer?** and **did the other side actually say it?** B then names the kind, if it is rhetorical — **undisputed, somebody else\'s, irrelevant, or reinstated.** A says whether the pricing is right. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the concession)_ __________.'],
  ['B', 'It cost the writer __________ / **nothing**.'],
  ['B', 'The other side **did / did not** say it. Kind: __________.'],
  ['A', 'Agreed / not agreed, because __________.'],
]));
out.push(table(['Card A – price these', 'Card B – price these'], [
  ['_Of course no system is perfect._', '_It is true that these matters are complex._'],
  ['_My figure of four was wrong; it was nine, and two I signed myself._', '_I have been implying that "full" meant "not interested". It did not._'],
  ['_Admittedly the department has been under a good deal of pressure._', '_No doubt the depots have their own difficulties._'],
  ['_It is true that the form could be laid out better._ _(the objection was its length)_', '_Granted the delay is real, although it is not as long as people say._'],
  ['_There is no answer to the point about the four hundred decisions, and I have not got one._', '_I asked for this twice and conceded nothing either time, and I do not think either letter was read._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the price of each of the ten and the kind of each rhetorical one. Then the count: **six of the ten cost the writer nothing**, and the undisputed kind is the commonest. ⚠ And the finding to say out loud: **the four that cost something are all in the first person and all contain a figure or a quotation.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Price **your own** page from 9.1, concession by concession. Write the cost of each in the margin — a position, a figure, an argument, a request, or **nothing**. ⚠ Then take out the pair you kept as homework from 9.1 and price the weak version. **It will price at nothing**, and that is what made it comfortable.'));
out.push(p('**b**  Swap pages and price your partner\'s. ⚠ **Where you disagree about a price, the writer is wrong** — the cost is a fact about what the writer has stopped being able to say, and the reader can see that more clearly than the writer can.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Hiba read twenty-two paragraphs from her training group, all of them conceding something, and four of them were concessions. She applied one question to each and it took about four seconds a paragraph: what did it cost the writer? A real concession costs a position, a figure, an argument they had been using, or a request they wanted — and eighteen of the twenty-two cost nothing at all. Omar asked what the eighteen were conceding, and the answer is things nobody had disputed: of course no method suits every class, when nobody in the room had said that any method suits every class, so the writer has conceded a point that was never made and the paragraph looks generous and is empty. That is the first of four kinds, and they are worth having names for: conceding the undisputed; conceding somebody else\'s position, as in admittedly the directorate has been under pressure, which is not the writer\'s to concede and costs the directorate something and the writer nothing; conceding the irrelevant, which is a small adjacent fact given away so that the real objection appears to have been met, such as it is true that the form could be better laid out when the objection was about its length; and conceding and reinstating in the same sentence, which is 9.2 seen from the reading side. Dima asked whether the words themselves are the warning — of course, admittedly, it is true that — and they are a signal and not a verdict, which matters: Adnan wrote granted that in 9.1 and it cost him four years of his own argument, so the words are honest and the question is whether a cost follows them. Rim asked whether one question is enough, and there is a second, which catches the first kind: is the thing conceded something the other side actually said? Half of all rhetorical concessions answer an objection nobody made, and they are written in good faith by people who have never checked — which was the commonest fault in Hiba\'s twenty-two by a long way. Mazen asked what you do as a reader with a page like that, and you read it as a case and not as an argument: a page with three rhetorical concessions and no real one has conceded nothing, and you should expect it to be unmoved by anything you say, which is useful to know before you spend a week answering it. And Hiba said she applied the test to her own page first, before the twenty-two: two of her three concessions cost her nothing, and she had written the page believing it was a generous page._'));
out.push(p('**Listener task:** write the price of each of your partner\'s concessions, and where the two of you disagreed.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Hiba sends to her training group with the twenty-two paragraphs. Answer the questions.'));
out.push(model([
  '**TWENTY-TWO CONCESSIONS, FOUR OF THEM REAL** · H. Nasser · 10 December',
  'I asked for a paragraph that concedes something. **Twenty-two came back and four of them concede anything.** ⚠ **I include my own among the eighteen**, and I shall start with it, because otherwise this note cannot be read.',
  '**Mine.** _Of course no method suits every class._ **Nobody in the group had said that any method does.** I conceded a point that had not been made, in a sentence I was pleased with, and it cost me nothing — **and I had written the page believing it was a generous page.**',
  '**The test, and it takes four seconds: what did it cost the writer?** A concession costs **a position, a figure, an argument you had been using, or a request you wanted.** ⚠ If you cannot name which of those four, the sentence is doing decoration — however true it is, and it usually is true.',
  '**The second question, because it catches most of the eighteen.** _Is the thing conceded something the other side actually said?_ Go back and look. **Eleven of the eighteen answered an objection nobody in the group had made** — and all eleven were written in good faith by people who had not checked.',
  '**The four that worked, and what they have in common.** All four are in the first person. All four contain **a figure or a quotation.** ⚠ One concedes a count the writer had got wrong — _I said four and it was nine_; one quotes the writer\'s own earlier sentence and withdraws it; one gives away a request; one names an objection and says _I have no answer to that_, **with a full stop.**',
  '**And the kind I want to warn about, because it is the hardest to see in your own writing.** _Admittedly the directorate has been under pressure._ ⚠ **That is not yours to concede.** It costs the directorate something and it costs you nothing — and it has the additional defect of sounding like a favour done to somebody who has not asked for one.',
  '**What to do about this on Monday.** Take your paragraph, write the cost of your concession in the margin, and if the margin says _nothing_, **either find a real one or take the paragraph out.** ⚠ True though it is that the empty version reads more pleasantly, **a page that concedes nothing will not be answered**, and being answered is the entire point of conceding at all.',
]));
out.push(item('1', 'Whose concession does she start with, and why does she start there?'));
out.push(item('2', 'What do the four real concessions have in common?'));
out.push(item('3', 'What should the group do on Monday if the margin says _nothing_?'));
out.push(writers([
  'A note that prices other people\'s concessions: **the count in the first line** → **your own, priced first** → **the test, with the four things a concession can cost** → **the second question, with its figure** → **what the real ones have in common** → **the kind hardest to see in your own writing** → **and what to do on Monday**.',
  '⚠ **Price your own first and name it.** _I include my own among the eighteen, and I shall start with it._ A note that prices twenty-one other people and not the writer is **not read as analysis but as marking**, and the group answers the tone instead of the test.',
  '**Give the test its four possible answers.** _A position, a figure, an argument you had been using, or a request you wanted._ ⚠ A test with a closed list is applied; **a test that asks whether something "really" concedes is argued about**, which is the difference between a rule and an opinion.',
  '**Put a count on the second question.** _Eleven of the eighteen answered an objection nobody had made._ ⚠ And add the clause that keeps the note usable: **_all eleven were written in good faith by people who had not checked_** — the sentence that lets a reader accept the finding about their own paragraph.',
  '⚠ And **end on what to do, with a threshold**: _if the margin says nothing, either find a real one or take the paragraph out._ **A note that prices and does not say what to do leaves the habit exactly where it was.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note that prices concessions (80 words or more).'));
out.push(p('**______________ · ______ of them real** · ______________ · ______________   I asked for ______________. **______ came back and ______ concede anything.** ⚠ **I include my own among the ______**, because ______________.   **Mine.** _______________. **______________.** It cost me nothing — **and I had written the page believing ______________.**   **The test, and it takes four seconds: what did it cost the writer?** A concession costs **a position, a figure, an argument you had been using, or a request you wanted.** ⚠ ______________.   **The second question.** _Is the thing conceded something the other side actually said?_ **______ of the ______ ______________** — and ______________.   **The ones that worked, and what they have in common.** ______________. ______________.   **And the kind I want to warn about.** ______________. ⚠ **That is not yours to concede.**   **What to do about this on ______________.** ______________. ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The writer\'s own concession priced first, and priced at nothing if it was',
  'The test with its four possible costs listed',
  'The second question, with a count attached to it',
  'What to do on Monday, with a threshold',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their own concession and its price, and the room says whether the price is right.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: your own priced first, the test with its four costs, the second question with a count, and what to do about it.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the writer\'s own concession priced first, the test with its closed list of four costs, a count on the second question.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read one of your own concessions aloud and then try to finish the sentence _it cost me…_.** ⚠ The room listens for the pause before the second half, and names the price if you cannot. Then the figure to leave the cycle on, which is Mrs Nasser\'s: **four out of twenty-two** — and the first one she priced was her own.'));
out.push(hw('Price every concession on one page you did not write — a notice, a circular, a post — and write the price of each in one word. ⚠ Then price the three concessions in your own 9.1 page the same way, and keep the list: **9.6 writes the page that cannot be priced at nothing.**'));

// ===================== 9.6 =====================
out.push(pb());
out.push(h2('9.6  The paragraph that gives itself away first'));
out.push(p('**Function:** writing the concession paragraph of an essay   ·   **Grammar:** five sentences — objection · concession · limit · figure · what follows   ·   **Pronunciation:** the concession paragraph against a clock'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, with a watch. **Five sentences in twenty-five seconds**: the objection, the concession, the limit, the figure that survives, and what follows. ⚠ The order is fixed and the first sentence is the hard one, **because it is somebody else\'s.**'));
out.push(board('Some people disagree with this, as I will explain below.', 'The strongest objection is that nobody has the staff to answer the letters.'));
out.push(p('**b**  Which paragraph gives the objection away **first**? **1** _The bracket is cheap and useful. However, some people say it would bring letters._  **2** _The strongest objection is that the office has no staff to answer the letters this would bring. There is no answer to that. It does not touch new decisions._  **3** _There are arguments on both sides of this question, as with so many questions._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where does Ms Huda say the objection must go in the paragraph, and what does she say the concession paragraph is worth in the examination essay?   **A** at the end; nothing   **B** in the **first** sentence of the paragraph — because an objection in the last sentence has nothing after it and the essay ends on somebody else\'s case; and the paragraph carries most of the **communicative achievement** and **organisation** marks, and is where a candidate\'s **language** shows   **C** in the introduction; half the marks'));
out.push(p('**b**  Listen again. **1** What are the five sentences, in order?   **2** What does Ms Huda say about _however, some people say_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.11  Five sentences, and the first one is theirs', [
  ['Ms Huda', 'Twenty-five seconds, five sentences, and the objection first. Miss Mansour, and the class times you.'],
  ['Yara', 'The strongest objection to sending samples twice is that it doubles the laboratory\'s work for a fortnight. There is no answer to that; it is simply true, and the fortnight falls in our busiest month. That does not touch the figure for the year. Of forty-one disputed results last year, thirty-one came from a single sample with nothing to check it against. So the fortnight buys thirty-one fewer disputes, and I would pay it again.'],
  ['Ms Huda', '**Twenty-three seconds, five sentences, and a complete argument.** ⚠ **Now the thing this cycle is for: the objection is in the first sentence.** Not the third, not the last. **First.**'],
  ['Omar', 'Most people put it at the end. _However, some people say…_'],
  ['Ms Huda', '**And then the paragraph stops, and the essay ends on somebody else\'s case.** ⚠ _However, some people say_ is the commonest closing move in the examination and it is the worst: **the objection has nothing after it**, so the candidate has raised it and left it standing, **and a reader cannot tell whether that was courage or carelessness.**'],
  ['Dima', 'The five sentences again, in order.'],
  ['Ms Huda', '**One: the objection, in its strongest form.** **Two: the concession, with a full stop** — 9.1. **Three: the limit, a different thing** — 9.2. **Four: the figure that survives the concession.** **Five: what follows from it.** ⚠ **Five sentences, about sixty words, and the paragraph is the best one in the essay.**'],
  ['Jad', 'And in the examination? How long is the whole essay?'],
  ['Ms Huda', '**A hundred and forty to a hundred and ninety words, and this book writes a hundred and eighty to two hundred and twenty**, which you have done since Unit 1. **Four paragraphs**: your position, the first point, **the concession paragraph**, and what follows. ⚠ **The concession paragraph is one of the four and takes about a third of the words.**'],
  ['Hiba', 'Is it worth that much space?'],
  ['Ms Huda', '**It is where the marks are.** The examiner is marking content, communicative achievement, organisation and language. ⚠ **The concession paragraph is the only place in the essay where all four are visible at once** — and it is where subordination, inversion and nominalisation arrive naturally, **which is why candidates who write it well are never in the bottom two bands.**'],
  ['Rim', 'And the four-word concessions of 9.4? Do they go in it?'],
  ['Ms Huda', '**No — and this is the division of labour of the unit.** ⚠ **The four-word concessions go in the other three paragraphs; the full concession happens once, here.** A page with five full concessions cannot make up its mind, **and a page with five four-word ones has never faced anything.**'],
  ['Mazen', 'What if the objection is stronger than my case?'],
  ['Ms Huda', '**Then the honest essay changes its position, and you have two paragraphs\' notice to do it in.** ⚠ Mr Barghouti found that in 9.1 and it had taken him four years. **It takes a candidate about ninety seconds**, at the planning stage, **and nobody is marked down for the position they take.**'],
  ['Lubna', 'And the clock?'],
  ['Ms Huda', '🔊 **Read the paragraph aloud: five sentences, about sixty words, about twenty-two seconds.** ⚠ **If the objection sentence takes you less than four seconds, you have shortened it** — which is the whole fault of the unit arriving in the one place it is fatal.'],
]));
out.push(sp());
out.push(box('Language box – the concession paragraph, and this unit\'s two declared sets', [
  '**The five sentences, in order, and the order is fixed.** **1 The objection, in its strongest form** _(9.1)_. **2 The concession, with a full stop** _(9.1)_. **3 The limit, a different thing** _(9.2)_. **4 The figure that survives the concession.** **5 What follows from it.** ⚠ **About sixty words, and the best paragraph in the essay.**',
  '**The objection goes in the FIRST sentence of the paragraph.** ⚠ _However, some people say…_ at the end is **the commonest closing move in the examination and the worst**: the objection has nothing after it, the essay ends on somebody else\'s case, **and a reader cannot tell whether that was courage or carelessness.**',
  '**The examination arithmetic.** The task asks for **140–190 words**; this book writes **180–220**. **Four paragraphs**: your position · the first point · **the concession paragraph** · what follows. ⚠ **The concession paragraph takes about a third of the words** and is worth it.',
  '**Why it is worth it.** The examiner marks **content · communicative achievement · organisation · language.** ⚠ **The concession paragraph is the only place in the essay where all four are visible at once**, and it is where subordination, inversion and nominalisation arrive naturally — **which is why candidates who write it well are never in the bottom two bands.**',
  '**The division of labour of this unit.** ⚠ **The four-word concessions of 9.4 go in the other three paragraphs. The full concession happens once, here.** A page with five full concessions cannot make up its mind; **a page with five four-word ones has never faced anything.**',
  '**And if the objection turns out to be stronger than your case: change your position.** ⚠ You have two paragraphs\' notice. **Nobody is marked down for the position they take** — and the candidate who discovers it at the planning stage has done in ninety seconds what took Mr Barghouti four years.',
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _give way to · hold to · press for · insist on · let go of · face up to · shy away from · water down · climb down · bargain for · settle for · throw in_.',
  '**This unit\'s word-formation set** _(the unit check in 9.7 is built on it)_: _insist → **insistence** · resist → **resistance** · accept → **acceptance** · deny → **denial** · limit → **limitation** · defend → **defence** · press → **pressure** · true → **truth** · exempt → **exemption**._',
  '**Pronunciation.** 🔊 **Track 9.12** Read the paragraph aloud: **five sentences, about sixty words, about twenty-two seconds.** ⚠ **If the objection sentence takes you less than four seconds, you have shortened it** — the whole fault of this unit arriving in the one place where it is fatal.',
  '**Practise:** Five sentences in twenty-five seconds, on each of these. **1** sending samples twice  **2** recording every decision  **3** a form with a reason box  **4** paying for staff training  **5** a rule you have had to face up to',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, **with a watch**. A has the question from the card and twenty-five seconds for five sentences: objection, concession, limit, figure, what follows. B times it and says which sentence was weakest. ⚠ **B also says whether the objection sentence took four seconds**; under four and it was shortened. A does it again on the same question. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(1 the objection, strongest form)_ The strongest objection to __________ is that __________.'],
  ['A', '_(2 the concession)_ There is no answer to that. __________.'],
  ['A', '_(3 the limit)_ That does not touch __________.'],
  ['A', '_(4 the figure)_ __________.'],
  ['A', '_(5 what follows)_ So __________.'],
  ['B', '_(time: ______ sec · objection: ______ sec)_ The weakest sentence was __________.'],
]));
out.push(table(['Card A – the question', 'Card B – the question'], [
  ['_Should samples be sent twice?_', '_Should every decision be recorded in writing?_'],
  ['_Should a form have a box for the reason?_', '_Should employers pay for staff training?_'],
  ['_Should a refusal always carry a code?_', '_Should people work from home two days a week?_'],
  ['_Should old decisions be reopened?_', '_Should a public office answer every letter?_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform, timed, the class marking the five sentences. **Listener task:** which sentence was weakest in each of the eight, and whether the objection took four seconds. Then the count: **sentence four, the surviving figure, is the weakest in five or six of the eight** — the objection and the limit are now easy and the figure has been forgotten. ⚠ And the second attempt beats the first in almost every pair.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write the five sentences for the question you will use in 9.7, and count the words. ⚠ Then multiply by three and a bit: if your paragraph is a hundred words, your essay will be three hundred and twenty, and the task allows two hundred and twenty.'));
out.push(p('**b**  Swap. Each of you reads your partner\'s paragraph aloud and times **the first sentence alone.** ⚠ **Under four seconds means the objection has been shortened** — and the commonest way of shortening it is to drop the figure that was in it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Yara went first and took twenty-three seconds for five sentences and a complete argument: the strongest objection to sending samples twice is that it doubles the laboratory\'s work for a fortnight; there is no answer to that, it is simply true, and the fortnight falls in their busiest month; that does not touch the figure for the year; of forty-one disputed results last year, thirty-one came from a single sample with nothing to check it against; so the fortnight buys thirty-one fewer disputes, and she would pay it again. And the thing this cycle is for is that the objection is in the first sentence — not the third and not the last, but first. Omar said most people put it at the end, as however, some people say, and then the paragraph stops and the essay ends on somebody else\'s case: it is the commonest closing move in the examination and it is the worst, because the objection has nothing after it, so the candidate has raised it and left it standing, and a reader cannot tell whether that was courage or carelessness. Dima asked for the five sentences in order, and they are the objection in its strongest form, the concession with a full stop, the limit which is a different thing, the figure that survives the concession, and what follows from it — five sentences, about sixty words, and the best paragraph in the essay. Jad asked how long the whole essay is, and the task asks for a hundred and forty to a hundred and ninety words while this book writes a hundred and eighty to two hundred and twenty, in four paragraphs: your position, the first point, the concession paragraph and what follows — so the concession paragraph takes about a third of the words. Hiba asked whether it is worth that much space, and it is where the marks are, because the examiner marks content, communicative achievement, organisation and language, and the concession paragraph is the only place in the essay where all four are visible at once: it is where subordination, inversion and nominalisation arrive naturally, which is why candidates who write it well are never in the bottom two bands. Rim asked about the four-word concessions of 9.4, and they go in the other three paragraphs while the full concession happens once, here — because a page with five full concessions cannot make up its mind and a page with five four-word ones has never faced anything. And Mazen asked what to do if the objection is stronger than your case: then the honest essay changes its position, with two paragraphs\' notice to do it in, and nobody is marked down for the position they take._'));
out.push(p('**Listener task:** write your partner\'s five sentences in figures — the word count of each.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the paper Yara writes for the directorate, with the concession paragraph in the middle. ⚠ **The examination version of this is half the length and the same four paragraphs**; 9.7 writes it. Answer the questions.'));
out.push(model([
  '**SENDING SAMPLES TWICE · a paper for the directorate** · Y. Mansour · 12 December',
  '**I am asking that every disputed sample be sent in two portions from the same batch, so that a second portion exists to be tested when a result is challenged.** That is the whole proposal and it is in the first line because the rest of this paper is about the objection to it.',
  '**What we have now.** One portion arrives, one result goes out, and when the result is disputed there is nothing left to test. **Of forty-one disputed results last year, thirty-one were disputes of exactly that kind**: a single figure, no second portion, and no way of settling the question except by argument.',
  '**The strongest objection, and it is not mine.** _"It doubles the laboratory\'s work for a fortnight, and the fortnight is February."_ **There is no answer to that. It is simply true**, and February is the month in which we are already two staff short and running Saturdays. ⚠ **That does not touch the figure for the year.** Thirty-one disputes at about four hours each is a hundred and twenty-four hours of argument, against a fortnight of double handling — **so the fortnight buys thirty-one fewer disputes, and I would pay it again.**',
  '**What I am not going to pretend.** The hundred and twenty-four hours are not all mine; about half fall on the directorate and the depots, ⚠ **which means I am asking my own laboratory to pay in February for a saving that other people collect in August.** I shall not water that down: **it is the real shape of the proposal and the reason it has not been put before.**',
  '**What it would cost, counted.** Two portions in one envelope, labelled A and B. **Four seconds a sample at our end**, about nine hundred samples in the disputed categories, which is one hour a year of labelling — **and the fortnight of February, which is the figure that matters.**',
  '**And what would make me let go of it.** If February is run with the second portions and the disputes do not fall below twenty, **the proposal has failed on its own figure** and I shall say so in writing. ⚠ I would rather face up to that in advance than be asked about it in a year.',
]));
out.push(item('1', 'What is the proposal, and why is it in the first line?'));
out.push(item('2', 'What is the strongest objection, and what does the concession not touch?'));
out.push(item('3', 'What does she say she is not going to pretend, and what would make her let go of the proposal?'));
out.push(writers([
  'The concession paragraph, five sentences long: **the objection, in its own words, first** → **there is no answer to that** → **the limit, a different thing** → **the figure that survives** → **what follows**. ⚠ **And it goes third in the essay, not last.**',
  '**Put the objection in quotation marks if it was said to you.** _"It doubles the laboratory\'s work for a fortnight, and the fortnight is February."_ ⚠ Quotation marks do work that nothing else does: **they tell the reader the objection has not been rewritten to be easier**, which is what every reader suspects.',
  '**Make sentence four a figure, not an assertion.** _Thirty-one disputes at about four hours each is a hundred and twenty-four hours._ ⚠ Sentence four is **the weakest sentence in five out of eight attempts**: the objection and the limit come easily by now, and the figure is the one that gets forgotten.',
  '**Add the paragraph that costs you something extra, if there is one.** _I am asking my own laboratory to pay in February for a saving other people collect in August._ ⚠ **That is the sentence the directorate will quote**, and it is the reason the paper is believed about its own arithmetic.',
  '⚠ And **name the figure that would make you let go of it**: _if the disputes do not fall below twenty, the proposal has failed on its own figure._ **A proposal with a falsifier in it is a proposal; one without is a preference** — which is 7.2, arriving in a unit about conceding.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the paper with the concession paragraph in the middle (80 words or more).'));
out.push(p('**______________ · a paper for ______________** · ______________ · ______________   **I am asking that ______________.** That is the whole proposal and it is in the first line because ______________.   **What we have now.** ______________. **Of ______ ______________ last year, ______ were ______________.**   **The strongest objection, and it is not mine.** _"______________."_ **There is no answer to that. It is simply true**, and ______________. ⚠ **That does not touch ______________.** ______________ — **so ______________, and I would ______________.**   **What I am not going to pretend.** ______________, ⚠ **which means ______________.**   **What it would cost, counted.** ______________.   **And what would make me let go of it.** If ______________, **the proposal has failed on its own figure** and ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The objection in the first sentence of its paragraph, in its own words',
  'The concession with a full stop, then a limit about a different thing',
  'A figure in sentence four, not an assertion',
  'A figure that would make the writer let go of the proposal',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their concession paragraph only, timed, and the room says whether the objection sentence reached four seconds.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full paper (180 words or more) with the concession paragraph in its place: the objection first and quoted, the concession, the limit, the surviving figure, what follows, and the falsifier at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the objection in the first sentence of its paragraph, a figure in sentence four, a falsifier at the end.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your concession paragraph aloud while your partner times the first sentence alone.** ⚠ Under four seconds and the objection has been shortened. Then the sentence to leave the cycle on, which is Miss Mansour\'s: **I am asking my own laboratory to pay in February for a saving other people collect in August.**'));
out.push(hw('Write the paper (80+ words) with the concession paragraph third and not last. ⚠ Then count the words in the paragraph. **Sixty is right; a hundred means the essay will run to three hundred and twenty**, and 9.7 allows two hundred and twenty.'));

// ===================== 9.7 =====================
out.push(pb());
out.push(h2('9.7  Review & Mediate: Both sides have conceded'));
out.push(p('**Function:** mediating where both sides have conceded and neither has noticed   ·   **Recycling:** Unit 9   ·   **Exam practice:** B2 First Reading and Use of English Part 4 · Writing Part 1 (the essay) · Listening Part 1'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 9 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** Granting that the release was full, the field was already specified.  **2** In return of a code on the slip, we accept the paperwork.  **3** That does not touching the new decisions.  **4** Much than I respect the figure, it is about February.  **5** Her insisting on a second portion settled it.  **6** He refused to watered down the proposal.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the five months of correspondence, and the two sentences nobody read.'));
out.push(box(null, [
  '**FIVE MONTHS ABOUT A SEAL** _(a counter in Shaalan and a distributor, July to November)_',
  '**What the counter has been saying since July.** _"The cartons arrive with the seal lifted at one corner. I am refusing them."_ Nine refusals in five months.',
  '**What the distributor has been saying since July.** _"The batch is not faulty. The cells test correctly and the test certificates are enclosed."_',
  '⚠ **And the two sentences nobody read.**',
  '**In the counter\'s third letter, 2 September, inside a bracket:** _"(I accept that the batch is not faulty — I have tested four cells myself and all four are within tolerance.)"_',
  '**At the foot of a delivery note, 19 September, under the signature:** _"Sealing is done by hand on a brush bench; in warm weather the glue goes on thinner."_',
  '**So: the counter has conceded the fault and the distributor has conceded the mechanism — and the correspondence went on for another nine weeks.**',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. Why does Ms Huda say neither side read the other\'s concession, and what is the only question the dispute has left?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.13  Both sides have conceded', [
  ['Ms Huda', 'Five months, nine refusals, and two sentences. Mr Hariri — your own bracket of 2 September, and then the foot of their delivery note of 19 September.'],
  ['Mazen', '_"I accept that the batch is not faulty — I have tested four cells myself and all four are within tolerance."_ And theirs: _"Sealing is done by hand on a brush bench; in warm weather the glue goes on thinner."_ ⚠ **I have read that note about forty times and I have never read that line.**'],
  ['Ms Huda', '**Then the mediation, and it is three moves and is not the mediation of 8.7.** One: **quote both concessions, with their dates.** Two: **price each of them** — what did it cost the writer. Three: **put the two in one sentence and read it aloud.**'],
  ['Mazen', '_The batch is not faulty, and the seal is applied by hand on a brush bench._'],
  ['Ms Huda', '⚠ **And now tell me what is left of the dispute.**'],
  ['Mazen', 'One question. **Who checks the seal, and against what?** Nothing else. There is nothing else in it.'],
  ['Ms Huda', '**Which is the finding of the cycle and the fifth kind of mediation in this book.** **4.7** both parties had overclaimed. **6.7** the record was silent. **7.7** the document was defective. **8.7** both reviews were true and incomplete. ⚠ **9.7: both sides have conceded, and neither has read the other\'s concession.**'],
  ['Dima', 'Why would they not read it? They read everything else.'],
  ['Ms Huda', '**Because each of them was reading for the other side\'s case and not for the other side\'s concessions.** ⚠ And that is a habit, not a failure of attention: **you look for what you have to answer.** A concession is the one part of a letter that needs no answer, **so the eye goes past it.**'],
  ['Mazen', 'And where mine was does not help.'],
  ['Ms Huda', '**Which is the practical half of the cycle, and it goes back to 9.1.** ⚠ **Mr Hariri put his concession inside a bracket in a third letter, and the distributor put theirs under a signature on a delivery note.** Both of those are places where nothing is read. **A concession belongs in the first paragraph, or it has not been made.**'],
  ['Hiba', 'So the technique as a reader is to read for the other side\'s concessions first.'],
  ['Ms Huda', '**Read the other side\'s letters once through for concessions only, and write them in a list with their dates.** ⚠ It takes four minutes on five months of correspondence, **and in Mr Hariri\'s case it would have saved nine weeks and six refused cartons.**'],
  ['Jad', 'Is there a case where both have conceded and the dispute is still a real one?'],
  ['Ms Huda', '**Yes, and the test is the one sentence.** Put both concessions in one sentence and read it. ⚠ **If a real question is left standing after it, the dispute survives and is now a smaller and better-defined dispute.** If nothing is left, **the dispute ended weeks ago and nobody told either party.**'],
  ['Rim', 'And who says so? The mediator?'],
  ['Ms Huda', '**The mediator says the sentence and stops.** ⚠ Nobody has to be told they have been arguing with somebody who agreed with them — **they hear it in the sentence**, and a mediator who adds _so you see there was never any disagreement_ has turned an agreement back into a quarrel.'],
  ['Lubna', 'And aloud?'],
  ['Ms Huda', '🔊 **Read the one sentence flat, with no stress on either half.** ⚠ A mediator who leans on the second half has awarded the argument to one party; **the whole effect depends on the two concessions sounding like one fact.**'],
]));
out.push(sp());
out.push(box('Language box – both sides have conceded', [
  '**The three moves, and they are not the moves of 8.7.** **1** Quote **both concessions, with their dates.** **2** **Price each of them** — what did it cost the writer _(9.5)_. **3** **Put the two in one sentence and read it aloud.**',
  '**Then ask what is left.** _The batch is not faulty, and the seal is applied by hand on a brush bench._ ⚠ **One question is left: who checks the seal, and against what?** Five months, nine refusals, **and that was the whole of it.**',
  '**Why neither side read the other\'s concession, and it is a habit and not carelessness.** ⚠ **Each was reading for the other side\'s case and not for its concessions.** You look for what you have to answer; **a concession is the one part of a letter that needs no answer, so the eye goes past it.**',
  '**Which is also why placing matters, and it goes straight back to 9.1.** ⚠ One concession was **inside a bracket in a third letter**; the other was **under a signature at the foot of a delivery note.** Both are places where nothing is read. **A concession belongs in the first paragraph, or it has not been made.**',
  '**The technique as a reader: read the other side\'s letters once through for concessions only**, and list them with their dates. ⚠ **Four minutes on five months of correspondence** — and in Mr Hariri\'s case it would have saved nine weeks and six refused cartons.',
  '**The test for whether a dispute survives the exercise.** Put both concessions in one sentence and read it. ⚠ **A real question left standing** → the dispute survives, and is now **smaller and better defined.** **Nothing left** → **the dispute ended weeks ago and nobody told either party.**',
  '**The fifth kind of mediation in this book.** **4.7** both parties had overclaimed. **6.7** the record was silent. **7.7** the document was defective. **8.7** both reviews were true and incomplete. ⚠ **9.7: both have conceded, and neither has read the other\'s concession.**',
  '**And the mediator says the sentence and stops.** ⚠ Nobody has to be told they have been arguing with somebody who agreed with them — **they hear it in the sentence.** A mediator who adds _so you see there was never any disagreement_ **has turned an agreement back into a quarrel.**',
  '**One warning, which is 9.5 applied to somebody else\'s bracket.** Price the concession before you build on it: a line that concedes **the undisputed** is not a concession and will not carry a mediation. ⚠ _The cells test correctly_ was a concession because the counter had been **refusing cartons on the cells**; the same line from somebody who had never disputed the cells **would be worth nothing at all.**',
  '**Pronunciation.** 🔊 **Track 9.14** **Read the one sentence flat, with no stress on either half.** ⚠ A mediator who leans on the second half has awarded the argument to one party — **the whole effect depends on the two concessions sounding like one fact.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has one of the disputes below and does **not** show it. A reads the two positions and then the two buried lines. B makes the three moves and then says whether a real question is left. ⚠ **One of the two disputes survives the sentence** and B must say which, and what the surviving question is. Change roles with the other dispute.'));
out.push(table(['Dispute A – the cartons', 'Dispute B – the February release'], [
  ['_Position one: "the seal lifts at one corner; I am refusing them."_', '_Position one: "we have asked for the field four times and had no answer."_'],
  ['_Position two: "the batch is not faulty; the certificates are enclosed."_', '_Position two: "the release is full; there is no room for new fields."_'],
  ['_Buried, 2 September: "I accept that the batch is not faulty."_', '_Buried, 1 November: "the October release was full and we said so in four words."_'],
  ['_Buried, 19 September: "sealing is done by hand on a brush bench."_', '_Buried, 14 November: "the specification for the field has been written."_'],
  ['_⚠ What is left: who checks the seal, and against what?_', '_⚠ What is left: who owns the two hours, and whose February is it?_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the two concessions, their prices, and the one sentence for each dispute. ⚠ **Both disputes survive the sentence**, and that is the point of the row: a surviving question is the normal result, and it is **smaller and better defined** than what the parties had. About half the pairs announce that there was never any disagreement, **which is the error the cycle warns about.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take a disagreement you are in, or one you have read. **Read the other side once through for concessions only** and list them with their dates. ⚠ Then list your own, with dates and with **where in the letter you put them.** Put the two strongest in one sentence and read it. **Then say what question is left**, and whether it is smaller than the one you started with.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what was left of the dispute once both concessions were read:  _Five months, nine refusals, and two sentences. Mazen read his own bracket of 2 September — I accept that the batch is not faulty, I have tested four cells myself and all four are within tolerance — and then the foot of their delivery note of 19 September: sealing is done by hand on a brush bench, and in warm weather the glue goes on thinner. He said he had read that note about forty times and had never read that line. So the mediation, which is three moves and is not the mediation of 8.7: quote both concessions with their dates, price each of them by what it cost the writer, and put the two in one sentence and read it aloud. The batch is not faulty, and the seal is applied by hand on a brush bench. And what is left of the dispute is one question — who checks the seal, and against what. Which is the finding of the cycle and the fifth kind of mediation in this book: in 4.7 both parties had overclaimed, in 6.7 the record was silent, in 7.7 the document was defective, in 8.7 both reviews were true and incomplete, and in 9.7 both sides have conceded and neither has read the other\'s concession. Dima asked why they would not read it when they read everything else, and because each of them was reading for the other side\'s case and not for the other side\'s concessions — which is a habit and not a failure of attention: a concession is the one part of a letter that needs no answer, so the eye goes past it. And where the concessions were does not help: Mazen put his inside a bracket in a third letter and the distributor put theirs under a signature on a delivery note, and both of those are places where nothing is read — a concession belongs in the first paragraph, or it has not been made. Hiba said so the technique as a reader is to read the other side\'s letters once through for concessions only and list them with their dates, which takes four minutes on five months of correspondence. Jad asked whether both sides can have conceded and the dispute still be real, and the test is the one sentence: if a real question is left standing the dispute survives and is now smaller and better defined, and if nothing is left the dispute ended weeks ago and nobody told either party. And Rim asked who says so, and the mediator says the sentence and stops, because nobody has to be told they have been arguing with somebody who agreed with them — they hear it in the sentence._'));
out.push(p('**Listener task:** write the one sentence from your own dispute and the question that was left.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 4)', 7));
out.push(p('For each question, complete the second sentence so that it means the same as the first. **Use the word given in capitals. Do not change it.** You must use **between two and five words**, including the word given. There is an example at the beginning (**0**).'));
out.push(box(null, [
  '**0**  I have a great deal of respect for the October figure, but it is about a different quarter.   **MUCH**   _**Much as I respect**_ the October figure, it is about a different quarter.',
  '**1**  Nobody can refute the point about the laboratory\'s workload.   **ANSWER**   There ______________________ the point about the laboratory\'s workload.',
  '**2**  I accept the figure, but it says nothing whatever about February.   **TOUCH**   I accept the figure, but it ______________________ February.',
  '**3**  The depot will date-stamp every consignment if a code appears on every slip.   **RETURN**   The depot will date-stamp every consignment ______________________ a code on every slip.',
  '**4**  Although the second pad is expensive, it pays for itself in a quarter.   **ALL**   ______________________ cost, the second pad pays for itself in a quarter.',
  '**5**  She refused to make her proposal any weaker, even under pressure.   **WATER**   She refused to ______________________ proposal, even under pressure.',
  '**6**  In the end he could no longer avoid the fact that he had been answering a weaker objection.   **FACE**   In the end he had to ______________________ that he had been answering a weaker objection.',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of two concessions (80 words or more).'));
out.push(p('**______________ · what both sides have already conceded** · ______________   **What ______________ has been saying since ______________.** "______________"   **What ______________ has been saying since ______________.** "______________"   **And the two sentences nobody read.** _______________ _(______________, ______________)_. _______________ _(______________, ______________)_.   **What each concession cost its writer.** ______________. ______________.   **The two, in one sentence.** **______________ and ______________.**   **What is left.** ______________. ⚠ **And it is smaller / nothing at all.**   **Where the two concessions were printed.** ______________ — **which is why neither was read.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both concessions quoted with their dates',
  'Each concession priced — what it cost its writer',
  'The two concessions in one sentence, with no stress on either half',
  'The surviving question named, and where each concession had been buried',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **The examination essay. The concession paragraph is 9.6: objection · concession · limit · figure · what follows.** The task asks **140–190 words**; write **180–220**, as this book has since Unit 1.',
  'In your English class you have been talking about how organisations keep a record of what they decide. Your teacher has asked you to write an **essay** using **all** the notes below and giving reasons for your point of view.',
  '_**Should every decision taken at work be written down?**_',
  '_**Notes · write about:**_   **1** the time it takes   **2** what happens when nobody can remember   **3** ______________ _(your own idea)_',
  '⚠ **Four paragraphs: your position · the first note · the concession paragraph · what follows.** Concede against the second note, **and put your own idea in the last paragraph, where it is read.** All three notes, or the content mark goes.',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 9 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  ___ that the release was full, the specification was already written.   a) Granted   b) Grant   c) Grants',
  '2  In return ___ a code on every slip, we shall date-stamp each consignment.   a) of   b) for   c) to',
  '3  That does not ___ the decisions taken from 2019 onwards.   a) touching   b) touched   c) touch',
  '4  ___ though the release was, the specification had been written since November.   a) Fully   b) Full   c) Filled',
  '5  Much ___ I respect the October figure, it is about a different quarter.   a) than   b) that   c) as',
  '6  He got the code on to the slip by sheer ___.   a) insistence   b) insisting   c) insistent',
  '7  The paper names a ___ of its own, which is what makes it a proposal.   a) limiting   b) limitation   c) limited',
  '8  He refused to ___ down the proposal under pressure.   a) watered   b) watering   c) water',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 1 style – eight short extracts).** 🔊 **Track 9.15** You will hear people talking in eight different situations. For questions **1–8**, choose the best answer (**A**, **B** or **C**).'));
[
  '**1**  You hear a woman talking about a letter she sent. What does she say the concession cost her?   **A** a figure she had been using   **B** nothing at all   **C** an apology',
  '**2**  You hear two colleagues talking about a form. What does the woman say the man has done?   **A** answered the objection that was made   **B** conceded a point nobody had put   **C** made the objection weaker than it was',
  '**3**  You hear a man telephoning a distributor. What is he no longer disputing?   **A** that the goods themselves are sound   **B** the price of the cartons   **C** the date of delivery',
  '**4**  You hear a teacher talking about her training group. What was the commonest fault in the paragraphs?   **A** they were too short   **B** they conceded too much   **C** they conceded something nobody had said',
  '**5**  You hear a sub-editor talking about a cut she made. What did she give a line back to?   **A** the first paragraph   **B** the strongest objection   **C** the writer\'s figure',
  '**6**  You hear a depot manager talking about an exchange. Why does she say it worked?   **A** what she asked for was cheaper than what she conceded   **B** she wrote to a more senior person   **C** she set a deadline',
  '**7**  You hear a man talking about a proposal he has given up. What made him let it go?   **A** he was told to   **B** he lost interest in it   **C** his own figure did not come out',
  '**8**  You hear a woman talking about an essay paragraph of her own. What has she changed about it?   **A** she has made it shorter   **B** she has moved the objection to the first sentence   **C** she has taken the objection out',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 9.15  Audio script (read after the check)', [
  ['1 · Nour', 'I conceded that the October release was full, which it was, and the sentence cost me the figure I had been using all autumn — I had been saying the field would take about twenty minutes, and it will not: it is two hours, and I had never counted. Writing that down was the expensive part. The apology was free and nobody wanted one.'],
  ['2 · Omar', 'The objection to the second page is that nobody has time to fill it in.'],
  ['2 · Dima', 'But look at what you conceded in reply. You conceded that the layout could be better. Nobody said a word about the layout — not in any of the three letters. You have answered a point that was never put, and the point that was put is still sitting there.'],
  ['2 · Omar', 'So I conceded something nobody had said. Again.'],
  ['3 · Mazen', 'I want to be clear about what I am refusing, because I have not been. The cells are sound — I tested four of them myself and all four were within tolerance, and I wrote that in September in a bracket nobody read. The batch is not in question and has not been since the summer. What I am refusing is a carton whose seal has lifted at one corner, and the only question left is who looks at the seal before it leaves you.'],
  ['4 · Hiba', 'Twenty-two paragraphs, and four of them conceded anything. Eighteen cost the writer nothing, and eleven of those eighteen were answering an objection that nobody in the group had made — which was the commonest fault by a long way. Not dishonesty: nobody had gone back to check what was actually said.'],
  ['5 · Dima', 'I cut four paragraphs out of the middle of it and replaced them with four words. Then I gave a whole line back to one sentence — the one about the eleven customers who order by telephone, which is the strongest thing anybody will say against the pad. That one cannot sit inside a subordinate clause: a reader who holds it would go straight past it and remember it on Thursday.'],
  ['6 · Rim', 'I had asked twice in eleven months and conceded nothing either time, and I do not think either letter was read to the end. This time I conceded a fault of our own, in figures, and asked for three characters on a form in the same sentence. That is the whole of it. What I was asking for was plainly cheaper than what I was giving away, and a return that cheap is very hard to refuse in writing. Twelve days, and a code on every slip since.'],
  ['7 · Yara', 'I said in February that if the disputes did not fall below twenty, the proposal had failed on its own figure and I would say so in writing. They did not fall below twenty — twenty-six, on our own count — so the proposal has failed and this is me saying so. Nobody asked me to stop. I would rather put that down now than be asked about it in a year.'],
  ['8 · Lubna', 'It used to end with "however, some people say a survey of that size cannot be done twice in one season" — the last sentence of the whole essay, with nothing after it. Now it opens the third paragraph instead, in the first sentence, and the four sentences that follow are the concession, the limit, the figure and what follows from it. Same words, more or less. It is a completely different paragraph.'],
]));
out.push(p('**C  Writing.** Write the essay (180–220 words) in four paragraphs: your position, the first note, the concession paragraph in five sentences, and what follows — with your own idea in the last paragraph.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 9)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ state the strongest objection to my own position, in the words it was put to me in',
  '☐ concede it with a full stop, and withdraw my own weaker version of it by name',
  '☐ say what the concession does **not** touch, in one limit about a different thing',
  '☐ concede and name the exchange in a single sentence, with the return in the other side\'s gift',
  '☐ concede inside a clause in four words, and know which concession must keep its own sentence',
  '☐ price a concession in somebody else\'s writing by asking what it cost the writer',
  '☐ write the concession paragraph of an essay in five sentences, with the objection first',
  '☐ show that two parties have both conceded, by quoting both concessions in one sentence',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 10 – NUMBERS IN PROSE', [
  'Unit 9 conceded. **Unit 10** is about the sentences that carry figures: **a number in prose, a comparison that is honest about its base, a rate that says what it is a rate of, and the difference between a figure that is evidence and a figure that is decoration.**',
  '**10.2 is the cycle that will change how the class reads a notice**: the percentage with no denominator — _a forty per cent rise_ — and the one question that collapses it. ⚠ **10.5 takes a figure out of a page and asks what would have to be true for it to mean what it is being used to mean.**',
  '⚠ **Bring two figures you use at work** — one you are sure of and one you have been repeating without checking. **10.1 runs on the pair**, and the second one is the interesting one.',
  '**And the peer-review slip does not change again in this book.** Band 2 stands for Units 10, 11 and 12: the criterion with the line copied, one thing to keep with its reason, and the ranking of the slip received.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 1 · Syria Edition · Unit 9 · Student\'s Book');
