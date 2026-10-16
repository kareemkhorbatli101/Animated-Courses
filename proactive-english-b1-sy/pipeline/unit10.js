// Proactive English B1 · Syria Edition · Book 1 · Unit 10 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 10  Reporting What People Said'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**10.1**  report a statement',
  '**10.2**  report a question',
  '**10.3**  report a request or an instruction',
  '**10.4**  choose the reporting verb',
  '**10.5**  report accurately from notes',
  '**10.6**  write up what was said at a meeting',
  '**10.7**  Review & Mediate: report a conversation to somebody who missed it',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**You have done this sixty-three times.** Every **4R Report** stage in this book is reported speech — nine units, seven cycles each, sixty-three of them — and nobody has ever given you the rules. This unit gives them, and most of you will find that you have been getting the tenses right by ear and the **verbs** wrong.',
  '**The reporting verb is where your opinion goes.** _He said · he explained · he admitted · he insisted · he pointed out._ All five can introduce the same words and they say five different things about the speaker. In **10.4** you find out which ones you have been using.',
  '**Rasha asked the question.** In 8.7 the advice was to ask the other night nurse one question and ask for nothing. She did, at a handover in May. The answer is in 10.2.',
], C.lyellow, C.orange));

// ======================= 10.1 =======================
out.push(pb());
out.push(h2('10.1  She said she had already written it'));
out.push(p('**Function:** reporting a statement   ·   **Grammar:** backshift, the full version   ·   **Pronunciation:** the reported clause run flat'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out the three sentences you copied from your own reports. Your teacher writes six of them on the board and underlines every verb. Then one question: how many of the six have a mistake in the **tense**, and how many in the **verb of reporting**?'));
out.push(board('She said she had already written it.', 'present → past · past → past perfect'));
out.push(p('**b**  Shift them back. **1** _"I am waiting."_ → _He said he ___ ._  **2** _"I wrote it."_ → _He said he ___ it._  **3** _"I have finished."_ → _He said he ___ ._  **4** _"I will send it."_ → _He said he ___ send it._  **5** _"I can do it."_ → _He said he ___ do it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the class discover about its own sixty-three reports?   **A** that the tenses are mostly wrong   **B** that the tenses are mostly right and the verbs are not   **C** that nobody read them'));
out.push(p('**b**  Listen again. **1** How many reports have they written?   **2** What does Omar notice about his own sentence?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.1  Sixty-three times', [
  ['Ms Huda', 'Nine units, seven cycles each. Every one of them ends with a stage where you tell the class what somebody said. How many is that?'],
  ['Jad', 'Sixty-three.'],
  ['Ms Huda', 'Sixty-three. And in nine months I have not once taught you reported speech. Six sentences on the board — look at the tenses.'],
  ['Lubna', 'They are right. All six.'],
  ['Ms Huda', 'They are right. You have been shifting the tenses back for nine months by ear, because Arabic does something comparable and because you have read sixty-three of my model reports. The grammar is not the problem.'],
  ['Omar', 'Then what is?'],
  ['Ms Huda', 'Read me yours.'],
  ['Omar', '"Ms Huda said that I had not missed a lesson and she said that she kept it back and she said that at A2 we had enough to carry."'],
  ['Samira', 'Three "saids".'],
  ['Omar', 'Three saids. And the second one is not a said. She did not **say** she kept it back — she **admitted** it, or she explained it, and I have put all three sentences in the same voice, so the whole thing sounds like a list of announcements.'],
  ['Ms Huda', 'That is the unit. The tenses you have. What you have not got is the twelve or fifteen verbs that carry the **shape** of a conversation — who was answering whom, who conceded something, who added something afterwards, who refused to answer. Without them, every conversation you report sounds like six people making statements in turn, which is not what any conversation has ever been like.'],
  ['Lubna', 'So the grammar is one lesson and the verbs are the other six.'],
  ['Ms Huda', 'The grammar is thirty minutes. We will do it now, properly, because by ear is not good enough in writing — and then we will spend the rest of the unit on everything that is not the grammar.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – backshift, the full version**',
  table(['direct', 'reported'], [
    ['_"I **am** waiting."_', '_He said he **was** waiting._'],
    ['_"I **wrote** it."_ / _"I **have written** it."_', '_He said he **had written** it._'],
    ['_"I **had written** it."_', '_He said he **had written** it._ _(no further back)_'],
    ['_"I **will** send it."_ · _"I **can** do it."_ · _"I **may** come."_', '_He said he **would** send it · **could** do it · **might** come._'],
  ], [2.1, 2.5]),
  '**One step back, and only one.** Present → past · past and present perfect → past perfect · past perfect stays. _will → would · can → could · may → might · must → had to_.',
  '**And the words that move with them:** _now → then · today → that day · tomorrow → the next day · yesterday → the day before · here → there · this → that · ago → before_.',
  '⚠ ~~He said me~~ → _He **said to** me_ / _He **told** me_. **_say_ never takes a person directly; _tell_ always does.** This is the commonest error in the unit and it is in half the reports in this book\'s margins.',
  '⚠ ~~She said that she will send it.~~ → _**would** send it_. ⚠ ~~He said he has finished.~~ → _**had** finished_.',
  '**_that_ is optional after _said_ and after _told me_:** _she said (that) she had written it_. In writing, keep it; in speech, drop it.',
  '**When you do not shift back:** if the thing is still true and you are reporting it now, English allows the present — _she says the trolley **is** still in the workshop_. Use it when the fact matters more than the occasion.',
  '**Useful phrases:** sixty-three of them, and nobody taught you the rules · you have been doing it by ear · three saids · it sounds like six people making statements in turn.',
  '**Practise:** Report each one, then report it again as if it were still true.  1 _"The trolley is in the workshop."_  2 _"I have asked four times."_  3 _"I will write to them."_  4 _"Nobody told me."_  5 _"I can do the two hours."_',
  '**Pronunciation.** 🔊 **Track 10.2** The **reporting verb** carries the stress and the reported clause runs flat and fast after it: _she **SAID** she\'d already written it._ Students stress the reported clause and it sounds like an argument with the speaker. Listen to eight and mark where the stress falls.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the direct sentence from the card. B reports it, **shifted**, and then reports it a second time as if it were still true. A says which version they would use in a message today. Swap cards.'));
out.push(dlg(null, [
  ['A', '"__________."'],
  ['B', 'She said she __________.'],
  ['A', 'And if it is still true?'],
  ['B', 'She says she __________.'],
  ['A', 'Which one goes in a message today?'],
  ['B', 'The __________ one, because __________.'],
]));
out.push(table(['Card A – the direct words', 'Card B – the direct words'], [
  ['"The trolley is still in the workshop."', '"I have asked four times."'],
  ['"I will write to the supplier."', '"Nobody told me you had applied."'],
  ['"I can do the two hours in a pharmacy."', '"I have had the key for two years."'],
  ['"We had enough to carry at A2."', '"I must tell them before somebody else does."'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write both versions of each sentence. Then: which ones were better unshifted? The ones where the fact is still true and the occasion does not matter — and that is four or five of the eight.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Report, from memory, the longest thing anybody has said to you this week. Three sentences at least, shifted. Your partner counts your _saids_.'));
out.push(p('**b**  Swap. Then each of you say how many _saids_ you used, and whether all of them were really _said_.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda said that nine units of seven cycles each is sixty-three reports, and that in nine months she has not once taught us reported speech. She put six of our own sentences on the board and asked us to look at the tenses, and Lubna said they were right, all six. Ms Huda agreed: we have been shifting the tenses back for nine months by ear, because Arabic does something comparable and because we have read sixty-three of her model reports, so the grammar is not the problem. Omar asked what is, and she told him to read his own, which was: Ms Huda said that I had not missed a lesson and she said that she kept it back and she said that at A2 we had enough to carry. Samira counted three "saids". Omar said the second one is not a said — she did not say she kept it back, she admitted it or explained it, and he had put all three sentences in the same voice, so the whole thing sounds like a list of announcements. Ms Huda said that is the unit: the tenses we have, and what we have not got is the twelve or fifteen verbs that carry the shape of a conversation — who was answering whom, who conceded something, who added something, who refused to answer. Without them every conversation sounds like six people making statements in turn, which is not what any conversation has ever been like._'));
out.push(p('**Listener task:** write one of your own _saids_ that should have been another verb.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the same report written twice. Answer the questions.'));
out.push(model([
  '**ONE REPORT, TWO WAYS** · O. Haddad',
  '**As I wrote it in October.** Ms Huda said that I had not missed a lesson. She said that she had kept it back. She said that at A2 we had had enough to carry. She said that from that evening we would need it in nearly everything. Bassel said that his sentence was two sentences written as one. She said that that was the whole unit.',
  '**As it should have been written.** Ms Huda **told** me I had not missed a lesson, and then **admitted** that she had kept it back on purpose. She **explained** that at A2 we had had enough to carry, and **added** that from that evening we would need it in nearly everything. Bassel, looking at the board, **said** that his sentence was two sentences written as one — and she **asked** him to repeat it for the room, because it was the whole unit.',
  '**What changed.** Not one word of what anybody actually said. Five verbs, and the shape of the evening came back: somebody was answered, somebody conceded something, somebody added something, and one person said the best thing in the room and was asked to say it again.',
  '**And what I notice about my October version.** It has six verbs in it and five of them are "said", and it reads as if six people were making announcements to an empty room. I was in that room. I knew what happened. The version that is wrong is the one I wrote.',
]));
out.push(item('1', 'How many words of the original speech are different between the two versions?'));
out.push(item('2', 'Which five verbs does the second version use?'));
out.push(item('3', 'What does he say his October version reads like?'));
out.push(writers([
  'A report that has a shape: **the tenses shifted back one step** → **a different verb wherever something different was happening** → **and nothing at all changed in the words themselves**.',
  'Write the report first with the tenses, then go back and **replace the _saids_**. Trying to do both at once produces a paragraph with the right verbs and the wrong tenses, which is worse.',
  'The verbs to have in your hand: _told · explained · added · pointed out · admitted · asked · replied · insisted · agreed · refused_. Ten verbs will carry almost any conversation.',
  '⚠ The test is in 10.1\'s dialogue: if your report reads as a list of announcements, it has too many _saids_. Count them. More than two in a paragraph and you have flattened a conversation.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take one of your own reports from this book and rewrite it properly (50 words or more).'));
out.push(p('**As I wrote it.** ______________ said that ______________. ______________ said that ______________. ______________ said that ______________.   **As it should have been written.** ______________ ______________ me that ______________, and then ______________ that ______________. ______________ ______________ that ______________, and ______________ that ______________. ______________ ______________ that ______________ — and ______________ ______________ ______________ to ______________.   **What changed.** Not one word of ______________. ______________ verbs, and ______________.   **And what I notice.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'One step back and only one · _past perfect_ stays where it is',
  '_say_ with no person after it · _tell_ always with a person',
  'Not more than two _saids_ in a paragraph',
  'Not one word of the original speech changed',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the one sentence whose verb changed most.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Report, in full, a conversation you were in this month (100 words or more) — four speakers if you can. Tenses shifted, no more than two _saids_, and nothing invented. Then count the verbs you used.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s report as **somebody who was in the conversation**. ★ _The verb that got it right._  ✓ _One _said_ that should be something else._  ? _Did anybody actually say that, or is that what you think they meant?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Count the _saids_ in the room, before and after.** The first versions average four or five a paragraph and the second ones one or two. Then: has anybody\'s conversation changed its meaning? It should not have, and if it has, 10.5 is where that is dealt with.'));
out.push(hw('Rewrite one of your sixty-three reports with the verbs put right (50+ words), and then read both versions to somebody who was not there. Write down which one they asked a question about.'));

// ======================= 10.2 =======================
out.push(pb());
out.push(h2('10.2  She asked whether the trolley was back'));
out.push(p('**Function:** reporting a question   ·   **Grammar:** reported questions, with no inversion   ·   **Pronunciation:** the reported question said as a statement'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher asks six questions round the room, quickly. Then each student reports the question they were asked, and the class listens for the two things that go wrong: the word order, and _if_ or _whether_.'));
out.push(board('She asked whether my errors were on fourth nights too.', 'no inversion · if / whether · no question mark'));
out.push(p('**b**  Report them. **1** _"Where is the trolley?"_  **2** _"Have you asked?"_  **3** _"When did you write?"_  **4** _"Do you want it back?"_  **5** _"Who told you?"_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What did Rasha ask, and what was the answer?   **A** she asked for the other nurse\'s record and was refused   **B** she asked one question and got an answer she had not expected   **C** she did not ask'));
out.push(p('**b**  Listen again. **1** How long did the conversation take?   **2** What had the other nurse been doing for two years?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.3  One question at a handover', [
  ['Rasha', 'I asked her. At the handover on the twelfth of May, standing up, in about ninety seconds.'],
  ['Ms Huda', 'Report it.'],
  ['Rasha', 'I asked her whether her own errors fell on the fourth and fifth nights of a block. I did not ask for her record and I did not tell her why I was asking.'],
  ['Fares', 'And?'],
  ['Rasha', 'She asked me what I meant by errors. Then she asked whether I was keeping a list. Then she asked who had told me to ask — and that was the only one of the three that I did not want to answer.'],
  ['Lubna', 'What did you say?'],
  ['Rasha', 'I said nobody had told me to ask and that I had been thinking about it since February. Which is true, and she looked at me for about four seconds and then said: "Mine are all on the fifth. Every one. I have known for two years and I have never said it to anybody because I thought it was me."'],
  ['Mazen', 'Two years.'],
  ['Rasha', 'Two years, eleven metres away, on the opposite pattern. She asked me whether I had thought it was me as well, and I said yes, for nine months. Then she asked what I was going to do, and I said I did not know, and she said she would write hers down from now on if I wanted her to.'],
  ['Ms Huda', 'Count your reporting verbs.'],
  ['Rasha', 'I have said "asked" six times, and all six of them are right. That whole conversation was questions. Neither of us said anything for ninety seconds — we asked each other things, and the answers came out sideways.'],
  ['Ms Huda', 'Which is what most important conversations are, and it is why reported questions are a third of this unit and not a footnote.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – reporting a question**',
  table(['direct', 'reported'], [
    ['_"Where **is** the trolley?"_', '_She asked where the trolley **was**._'],
    ['_"**Have** you asked?"_', '_She asked **whether** I **had** asked._'],
    ['_"When **did** you write?"_', '_She asked when I **had written**._'],
    ['_"**Do** you want it back?"_', '_She asked **if** I wanted it back._'],
  ], [2.2, 2.4]),
  '**Three things happen, and two of them are deletions.** The tense shifts back as usual. The **inversion disappears** — the subject goes back in front of the verb. And _do_, _does_ and _did_ **vanish** completely.',
  '⚠ ~~She asked where was the trolley.~~ → _where the trolley **was**_. ⚠ ~~She asked did I want it.~~ → _**whether/if** I wanted it_. ⚠ ~~She asked me where is it?~~ — and no question mark at the end of a reported question, ever.',
  '**Yes/no questions take _if_ or _whether_.** They are interchangeable except in two places: after a preposition and before _or not_, where **whether** is required. _It depends on **whether** he answers_ · _she asked **whether** or not I was keeping a list_.',
  '**Question-word questions keep the question word:** _she asked **what** I meant · **who** had told me · **when** I had written_.',
  '⚠ _ask_ can take a person directly — _she asked **me** whether…_ — unlike _say_. ⚠ ~~She asked to me~~.',
  '**Useful phrases:** that was the only one of the three that I did not want to answer · eleven metres away, on the opposite pattern · I thought it was me · we asked each other things and the answers came out sideways.',
  '**Practise:** Report each, and say which answer would be hardest to give.  1 _"Are you keeping a list?"_  2 _"Who told you to ask?"_  3 _"Did you think it was you as well?"_  4 _"What are you going to do?"_  5 _"How long have you known?"_',
  '**Pronunciation.** 🔊 **Track 10.4** A reported question is said as a **statement**: it falls at the end. _She asked whether I had asked._ ↘ Students keep the rising tone of the original question and it sounds as if they are asking it again. Listen to eight and mark ↗ or ↘ — all eight should fall.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks the question on the card directly. B answers it in one sentence and then **reports the question back** — correctly. A checks the word order and the _do_. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________?'],
  ['B', '__________.'],
  ['B', 'You asked __________.'],
  ['A', 'Word order?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the questions', 'Card B – the questions'], [
  ['Where is the thing you have been looking for?', 'Have you ever asked for it in writing?'],
  ['When did you last change something at work?', 'Do you keep a record of anything?'],
  ['Who told you the rule you were telling us about?', 'How long have you known about it?'],
  ['Did you think it was you?', 'What are you going to do about it?'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the reported questions and mark the word order of each. Then: which of the eight questions was hardest to answer? It is nearly always _who told you_ or _did you think it was you_, and that is worth noticing.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Ask your partner the one question you would most like to ask somebody at your work and have not. They answer as that person would. Then report both the question and the answer.'));
out.push(p('**b**  Swap. Then each of you say how long you have not been asking, and what you think the answer actually is.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rasha asked her. At the handover on the twelfth of May, standing up, in about ninety seconds. She asked her whether her own errors fell on the fourth and fifth nights of a block; she did not ask for her record and did not tell her why she was asking. The other nurse asked her what she meant by errors, then asked whether she was keeping a list, then asked who had told her to ask — and Rasha says that was the only one of the three she did not want to answer. She said nobody had told her to ask and that she had been thinking about it since February, which is true. The other nurse looked at her for about four seconds and then said: mine are all on the fifth, every one, and I have known for two years and have never said it to anybody because I thought it was me. Two years, eleven metres away, on the opposite pattern. She asked Rasha whether she had thought it was her as well, and Rasha said yes, for nine months. Then she asked what Rasha was going to do, and Rasha said she did not know, and the other nurse said she would write hers down from now on if Rasha wanted her to. Ms Huda asked for a count of the reporting verbs: six "askeds", and all six right, because that whole conversation was questions — neither of them said anything for ninety seconds, and the answers came out sideways._'));
out.push(p('**Listener task:** write the question somebody has not been asking, and how long for.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Rasha writes that evening. Answer the questions.'));
out.push(model([
  '**NINETY SECONDS AT A HANDOVER** · R. Barakat · 12 May',
  'I asked her whether her errors fell on the fourth and fifth nights of a block. That is the whole of what I had planned to say and I had been planning it since February.',
  'She asked me what I meant by errors. I said the ones that go in the book.',
  'She asked whether I was keeping a list. I said I was, and that I had 118 shifts and seven.',
  'She asked who had told me to ask. I said nobody had, and that I had been thinking about it since February. I did not want to answer that one and I do not entirely know why, except that there is no honest answer to it that does not sound like an accusation of somebody.',
  'Then she said that hers are all on the fifth night. Every one. She said she had known for two years and had never told anybody, because she had thought it was her.',
  'She asked whether I had thought it was me. I said yes, for nine months.',
  'She asked what I was going to do, and I said I did not know. She offered to write hers down from now on if I wanted her to.',
  '**What I notice, writing it out.** Eleven exchanges and nine of them are questions. We were both asking because neither of us wanted to be the one who had said something first. And the only statement in the whole ninety seconds — hers, about the fifth nights — came out after a question I had not asked.',
]));
out.push(item('1', 'How many exchanges were there, and how many were questions?'));
out.push(item('2', 'Which question did Rasha not want to answer, and what reason does she give?'));
out.push(item('3', 'What does she notice about the one statement in the conversation?'));
out.push(writers([
  'A conversation that was mostly questions: **each exchange on its own line, the question reported and the answer after it** → **and a last paragraph counting what kind of conversation it was**.',
  'Keep one exchange a line. A conversation of eleven exchanges written as a paragraph is unreadable; written as eleven lines it can be counted, and counting it is what produces the last paragraph.',
  'Report the questions **exactly**, including the one you did not want to answer, and say that you did not want to answer it. That sentence is usually the centre of the page.',
  '⚠ The last paragraph is the one that is worth writing: _nine of the eleven are questions. We were both asking because neither of us wanted to be the one who had said something first._ Count your own conversation before you interpret it.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write out a conversation of your own that was mostly questions (50 words or more).'));
out.push(p('**______________** · ______________   I asked ______________ whether ______________.   ______________ asked me what ______________. I said ______________.   ______________ asked whether ______________. I said ______________.   ______________ asked who ______________. I said ______________. I did not want to answer that one, because ______________.   Then ______________ said that ______________.   ______________ asked whether ______________. I said ______________.   **What I notice, writing it out.** ______________ exchanges and ______________ of them are questions. ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'No inversion and no _do / does / did_ in any reported question',
  '_if_ or _whether_ for yes/no; the question word kept for the others',
  'No question marks anywhere',
  'One exchange a line, and a count at the end',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the question they did not want to answer.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write out the full conversation (100 words or more) — an interview, an argument, a handover, a conversation with a relative. Then count the questions and write what kind of conversation the count says it was.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **the other person in the conversation**. ★ _The question I would not have expected._  ✓ _One reported question with the old word order._  ? _Which question did you not want to answer, and does the page say why?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the conversations in this room were more than half questions?** Most of them. Then one sentence and no more: two people asking each other things are usually both waiting for the other one to say something first.'));
out.push(hw('Ask one question you have not been asking, to one person, this week. Write out the exchange (50+ words), with every question reported properly, and count them.'));

// ======================= 10.3 =======================
out.push(pb());
out.push(h2('10.3  She told me to put it in writing'));
out.push(p('**Function:** reporting a request or an instruction   ·   **Grammar:** _ask / tell somebody to_ — raising A2 Unit 22   ·   **Pronunciation:** the weight that separates asking from telling'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads six things that were said to people in this room this year. For each one: was it a **request**, an **instruction**, or **advice**? And then the harder half: how do you know, when all three can be said in the same words?'));
out.push(board('She told me to put it in writing. She asked me to wait.', 'ask / tell / advise / remind somebody to'));
out.push(p('**b**  Report each one. **1** _"Put it in writing."_  **2** _"Could you wait?"_  **3** _"Don\'t open it before the ticket is signed."_  **4** _"You should ask him."_  **5** _"Don\'t forget the list."_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Bassel reporting?   **A** the ministry conditions   **B** what he said to his three men, and what they said back   **C** a conversation with a customer'));
out.push(p('**b**  Listen again. **1** Which verb does Bassel insist on, and why?   **2** What did Hassan ask him to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.5  Asked, not told', [
  ['Bassel', 'I did it on the Wednesday morning, with the page on the wall and the three of them standing there.'],
  ['Ms Huda', 'Report it.'],
  ['Bassel', 'I told them that condition seven had come from the ministry and was not mine. I told them that I thought the prayer clause was wrong and that I had written about it. And then I asked them to tell me when they went out of the building between seven and six.'],
  ['Samira', 'You said "asked".'],
  ['Bassel', 'I said asked, and I am going to keep saying asked, because that is what it was. The ministry **told** them. I **asked** them. If I report my own sentence with "told" I have put myself in the ministry\'s voice, which is the exact thing I said I would not do.'],
  ['Omar', 'Did they do it?'],
  ['Bassel', 'All three of them, from that morning, without being reminded once. And Hassan asked me to do something, which I had not expected at all.'],
  ['Lubna', 'What?'],
  ['Bassel', 'He asked me to write the four months down — the dates when the ministry work starts and when it ends. He said that if there is a date on the end of it then it is a thing you get through, and if there is no date on the end of it then it is just how the shop is now. He asked me to put it on the wall next to the conditions.'],
  ['Ms Huda', 'Report that again and watch your verbs.'],
  ['Bassel', 'He **asked** me to write the dates down and put them on the wall. He **explained** why: with a date it is a thing you get through. He did not tell me to do anything and he did not advise me — he asked me, and he gave a reason, and he is a man who sweeps a floor that was never his job.'],
  ['Samira', 'Did you do it?'],
  ['Bassel', 'It went up on the Thursday. First of June to the thirtieth of September, in my own handwriting, under their page.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – reporting what somebody wanted you to do**',
  table(['you say', 'what it was'], [
    ['_She **told** me **to** put it in writing._', 'an instruction — she had the standing to give it'],
    ['_He **asked** me **to** write the dates down._', 'a request — he had no standing and asked anyway'],
    ['_She **advised** me **to** wait._', 'advice — she expected me to decide'],
    ['_He **reminded** me **to** bring the list._', 'a reminder — I already knew'],
  ], [2.4, 2.2]),
  '**All of them take a person and then _to_ + verb.** _told me to · asked me to · advised me to · reminded me to · warned me not to · persuaded me to · invited me to._',
  '**The negative puts _not_ before _to_:** _he told me **not to** open it_ · _she asked me **not to** say anything_. ⚠ ~~he told me to not open it~~ · ~~he told me don\'t open it~~.',
  '⚠ ~~He said me to wait.~~ → _He **asked** me to wait_ / _He **told** me to wait_. _say_ cannot be used this way at all.',
  '⚠ ~~She asked me that I should wait.~~ → _She asked me **to wait**._',
  '**And the choice is not grammar.** The same words — _tell me when you go out_ — can be an instruction or a request, and the verb you choose when you report it says which one **you** think it was. Report your own requests as requests. If you report your own request with _told_, you have given yourself an authority you did not use.',
  '**Useful phrases:** I said asked and I am going to keep saying asked · if I report my own sentence with "told" I have put myself in the ministry\'s voice · with a date on the end it is a thing you get through · he is a man who sweeps a floor that was never his job.',
  '**Practise:** Report each one with the right verb, and say how you chose.  1 _"Put it in writing."_ _(from a manager)_  2 _"Tell me when you go out."_ _(from the owner, who asked)_  3 _"Don\'t touch it while it is running."_  4 _"You might want to ask them."_  5 _"Don\'t forget to bring the dates."_',
  '**Pronunciation.** 🔊 **Track 10.6** _told me to_ and _asked me to_ are both said fast, with the stress on the **verb at the end**: _she told me tə **PUT** it in writing_. The difference is heard in the reporting verb only, so it must be said clearly — which is the opposite of the rest of the sentence. Listen to six and write _told_ or _asked_.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the words from the card and says who said them. B reports them with the right verb and justifies the choice. A then asks what the report would mean with the **other** verb. Swap cards.'));
out.push(dlg(null, [
  ['A', '"__________" — from __________.'],
  ['B', '__________ __________ me to __________.'],
  ['A', 'Why that verb?'],
  ['B', 'Because __________.'],
  ['A', 'And with the other one?'],
  ['B', 'Then it would mean __________, which is not what happened.'],
]));
out.push(table(['Card A – words and who said them', 'Card B – words and who said them'], [
  ['"Put it in writing." — a ward manager', '"Tell me when you go out." — the shop owner'],
  ['"Don\'t touch it while it\'s running." — the owner', '"Write the dates down." — a man who works for him'],
  ['"You might want to ask them." — a colleague', '"Don\'t sign before you\'ve read it." — your brother'],
  ['"Come and see the shop." — a friend', '"Don\'t go in there alone." — a technician'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the verb chosen for each and the one rejected. Then: which pairs chose _told_ for something that was a request? That is the commonest error of the cycle and it is not grammatical.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Report three things you have asked or told somebody to do this month, with the right verb each time. Then say, for each one, whether you had the standing to tell.'));
out.push(p('**b**  Swap. Then each of you find one thing the other reported as _told_ that was really _asked_, or the other way round.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Bassel did it on the Wednesday morning, with the page on the wall and the three of them standing there. He told them that condition seven had come from the ministry and was not his. He told them that he thought the prayer clause was wrong and that he had written about it. And then he asked them to tell him when they went out of the building between seven and six. Samira pointed out that he had said "asked", and he said he had, and that he is going to keep saying asked, because that is what it was: the ministry told them and he asked them, and if he reports his own sentence with "told" he has put himself in the ministry\'s voice, which is the exact thing he said he would not do. All three of them did it from that morning without being reminded once. And Hassan asked him to do something he had not expected: he asked him to write the four months down, the dates when the ministry work starts and ends, and put them on the wall next to the conditions. He explained why — that if there is a date on the end of it then it is a thing you get through, and if there is no date then it is just how the shop is now. Bassel said Hassan did not tell him and did not advise him; he asked him, and gave a reason, and he is a man who sweeps a floor that was never his job. It went up on the Thursday: first of June to the thirtieth of September, in Bassel\'s own handwriting, under their page._'));
out.push(p('**Listener task:** write the thing somebody was asked to do by somebody with no standing to tell them.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Bassel writes in the shop book. Answer the questions.'));
out.push(model([
  '**WEDNESDAY, AND WHAT WAS ASKED** · B. Tahhan · shop book, 28 May',
  'This morning I told Hassan, Abu Rida and the boy that condition seven has come from the ministry through Dar al-Kutub and is not mine. I told them I think the prayer clause is wrong and that I have written and asked for three words to come out of it, and that I expect to be ignored. I told them that nobody in this shop is going to be watched by me.',
  'Then I **asked** them — I did not tell them — to let me know when they go out of the building between seven and six, and I told them why: that if an inspector comes while somebody is out, we lose four months of work, and that it has never happened in nineteen years.',
  'All three said yes. Abu Rida asked whether it included going to the yard, and I said no, only the building, and then I changed my mind in front of them and said the yard as well, because the yard is outside and I had not thought about it.',
  'Then Hassan asked me to do something. He asked me to write down the first and last day of the ministry work and put it on the wall under their page. He explained that with a date at the end it is a thing you get through and without one it is just how the shop is now.',
  'I had not thought of that in nineteen years of taking work I did not want. A man who has worked for me for four years and who thought until February that sweeping the floor was a rule asked me for the one thing that makes four months bearable, and he was right, and it took him nine seconds.',
  '**It is on the wall.** 1 June to 30 September. I have put it in my own handwriting so that nobody thinks the ministry wrote it.',
]));
out.push(item('1', 'What did Abu Rida ask, and what happened to the answer?'));
out.push(item('2', 'What did Hassan ask for, and what reason did he give?'));
out.push(item('3', 'Why has Bassel written the dates in his own handwriting?'));
out.push(writers([
  'A record of what was said and asked: **what you told them, in one paragraph** → **what you _asked_ them, marked as asked** → **what they asked back, including the question that changed your answer** → **and what you did about it**.',
  'Mark your own request as a request, in the text: _then I **asked** them — I did not tell them_. On paper, in a shop book, that is the sentence that will be read in two years.',
  'Report the moment you **changed your mind in front of them**, if you did. It costs nothing and it is the only evidence anybody will ever have that the request was a request.',
  '⚠ The last line should say what you **did**, with a date. _It is on the wall. 1 June to 30 September._ Everything above it is a conversation; that line is a consequence.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the record of something you asked or told people this month (50 words or more).'));
out.push(p('**______________** · ______________   This morning I told ______________ that ______________. I told them that I think ______________ and that ______________. I told them that ______________.   Then I **asked** them — I did not tell them — to ______________, and I told them why: ______________.   ______________ asked whether ______________, and I said ______________, and then I ______________.   Then ______________ asked me to ______________. ______________ explained that ______________.   ______________.   **______________.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_told / asked / advised / reminded_ + a person + _to_ + verb',
  '_not_ **before** _to_ in the negative',
  'Your own request reported as a request, and marked',
  'A last line saying what you did, with a date',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "then I asked them — I did not tell them" sentence only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full record (100 words or more) of a conversation in which you asked somebody for something, or passed something on. Every verb chosen on purpose, and a last line with a date in it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **one of the people in the room**. ★ _The sentence that tells me it was a request._  ✓ _One _told_ that was an _asked_._  ? _What did anybody ask you back?_ — and if nobody did, say what that means.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**In how many of these pages did somebody ask something back?** Fewer than half. Then: what does a conversation in which nobody asked anything back actually tell you about the room it happened in?'));
out.push(hw('Write out something you asked or told somebody to do, with the verb chosen on purpose (50+ words), and then write what they asked you back. If nobody asked anything back, write that and write why you think not.'));

// ======================= 10.4 =======================
out.push(pb());
out.push(h2('10.4  Said, explained, admitted, pointed out'));
out.push(p('**Function:** choosing the reporting verb   ·   **Grammar:** _say · tell · explain · add · point out · admit · insist_   ·   **Pronunciation:** the verb that carries the judgement'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher writes one sentence on the board — a real one, from this room — and then eight reporting verbs. The class reports it eight times and says, each time, what the verb has done to the speaker. Two of the eight are insults.'));
out.push(board('He admitted that nobody had checked it.', 'the verb is where your opinion goes'));
out.push(p('**b**  Which verbs are neutral and which are not? **1** _said_  **2** _explained_  **3** _admitted_  **4** _claimed_  **5** _pointed out_  **6** _insisted_  **7** _added_  **8** _alleged_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Lubna found in the minutes?   **A** a mistake in the tenses   **B** four verbs that give an opinion nobody voted on   **C** a missing paragraph'));
out.push(p('**b**  Listen again. **1** Which verb does she say is the worst, and why?   **2** What does Ms Huda say about _said_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.7  Four verbs nobody voted on', [
  ['Lubna', 'The minutes of the faculty meeting came round. I was at that meeting. Four verbs in it are doing something nobody voted on.'],
  ['Ms Huda', 'Read them.'],
  ['Lubna', '"Ms Sweidan claimed that the 1974 survey is inaccurate." "The head of department explained that resources are limited." "Ms Sweidan insisted that the workshop should be open after six." "The committee noted the request."'],
  ['Jad', 'What is wrong with claimed?'],
  ['Lubna', '_Claimed_ means: she said it and we are not saying it is true. I measured that ground twice with a borrowed tape and I brought the measurements. The word for that is _showed_, or at worst _said_. And then the head of department **explained**, which means he gave a reason and the reason was good — and he said "resources are limited", which is four words and explains nothing at all.'],
  ['Omar', 'And insisted?'],
  ['Lubna', 'I said it once. You cannot insist on something once. _Insisted_ means she would not let it go, and it is the word you use about somebody you found tiring.'],
  ['Fares', 'And "noted the request".'],
  ['Lubna', '_Noted_ is the one that means nothing will happen, and everybody in that room knew it, including me.'],
  ['Ms Huda', 'Now the useful part. Who wrote those minutes?'],
  ['Lubna', 'A secretary who was not in the argument and has nothing against me at all.'],
  ['Ms Huda', 'So the four verbs are not malice. They are what a person reaches for when they are writing fast about an argument they did not follow: the person with the position gets _explained_, the person asking for something gets _claimed_ and _insisted_, and the decision not to decide gets _noted_. That is the default shape of every set of minutes in the world, and knowing it is how you read them.'],
  ['Lubna', 'And _said_?'],
  ['Ms Huda', '_Said_ is the only verb in the list that gives nothing away, which is exactly why you were all using it sixty-three times. It is not a weak choice. It is the right choice whenever you do not want to put an opinion in — and the wrong one when something other than saying was happening.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Choosing the verb**',
  table(['verb', 'what it adds'], [
    ['_**said** / **told** me_', 'nothing at all — the honest default'],
    ['_**explained**_', 'that the reason was good'],
    ['_**pointed out**_', 'that the fact was true and had been missed'],
    ['_**added**_', 'that it came after, and belonged with it'],
    ['_**admitted**_', 'that it cost the speaker something to say'],
    ['_**claimed** / **alleged**_', 'that you are not vouching for it'],
    ['_**insisted**_', 'that the speaker would not let it go'],
    ['_**noted**_', 'that nothing is going to happen'],
  ], [1.3, 3.3]),
  '**The verb is where your opinion goes, whether you mean it to or not.** The same words reported with _explained_ and with _claimed_ describe two different people, and most writers have no idea they are choosing.',
  '**_said_ gives nothing away**, which makes it the right verb more often than style guides suggest. A report with two _saids_ and three precise verbs is better than one with five dramatic verbs.',
  '⚠ _say_ takes no person: _he **said** that…_ / _he **said to** me_. _tell_ takes a person: _he **told me** that…_. ⚠ ~~he said me~~ · ~~he told that~~.',
  '⚠ _explain_ takes no person directly either: _she **explained to** me_, not ~~she explained me~~. Same with _point out_, _admit_, _suggest_.',
  '**How to read minutes and reports:** find out which verb each person got. The person with the position gets _explained_; the person asking for something gets _claimed_ and _insisted_; a decision not to decide gets _noted_. That is the default and it is usually nobody\'s fault.',
  '**Useful phrases:** four verbs doing something nobody voted on · you cannot insist on something once · the word you use about somebody you found tiring · _noted_ is the one that means nothing will happen.',
  '**Practise:** Report the same sentence — _"The survey is wrong; I measured it twice"_ — with each verb, and say what each does.  1 said  2 explained  3 pointed out  4 claimed  5 insisted  6 added  7 noted',
  '**Pronunciation.** 🔊 **Track 10.8** The reporting verb is where the sentence\'s judgement lives, so it takes a **clear stress** and the clause after it stays flat: _she **CLAIMED** that the survey was inaccurate._ Listen to six pairs of the same sentence with different verbs and say which speaker you would believe.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the words and says who said them and what the writer thinks of that person. B chooses the verb a **fair** writer would use and the verb an unfair one would. Swap cards.'));
out.push(dlg(null, [
  ['A', '"__________" — said by __________.'],
  ['B', 'A fair writer would say __________. An unfair one would say __________.'],
  ['A', 'What is the difference?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the words', 'Card B – the words'], [
  ['"The survey is wrong; I measured it twice."', '"Resources are limited."'],
  ['"The seal had been splitting for three days."', '"The matter has been noted."'],
  ['"I did not check it that morning."', '"Staffing was two, which is the establishment."'],
  ['"I have had the key for two years."', '"It has never happened in nineteen years."'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the fair verb and the unfair one for each. Then look at the pattern: the unfair verb is _claimed_ or _insisted_ when the speaker is asking for something, and _explained_ when the speaker is refusing it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Report something you said at work, twice: once with the verb you would use, and once with the verb somebody who disagreed with you would use. Then say which one you think appears in whatever record exists.'));
out.push(p('**b**  Swap. Then each of you say whether you have ever seen a record of something you said, and what verb you were given.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lubna said the minutes of the faculty meeting came round and that four verbs in them are doing something nobody voted on. "Ms Sweidan claimed that the 1974 survey is inaccurate." "The head of department explained that resources are limited." "Ms Sweidan insisted that the workshop should be open after six." "The committee noted the request." Jad asked what is wrong with claimed, and she said claimed means she said it and we are not saying it is true — and she measured that ground twice with a borrowed tape and brought the measurements, so the word is showed, or at worst said. And then the head of department explained, which means he gave a reason and the reason was good, and what he said was "resources are limited", which is four words and explains nothing. She said she said the workshop thing once, and you cannot insist on something once: insisted means she would not let it go, and it is the word you use about somebody you found tiring. And noted is the one that means nothing will happen, and everybody in the room knew it. Ms Huda asked who wrote the minutes, and Lubna said a secretary who was not in the argument and has nothing against her. So the four verbs are not malice: they are what a person reaches for when writing fast about an argument they did not follow — the person with the position gets explained, the person asking for something gets claimed and insisted, and the decision not to decide gets noted. And said is the only verb in the list that gives nothing away, which is why we were all using it sixty-three times._'));
out.push(p('**Listener task:** write the verb somebody was given in a record of something they said.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Lubna\'s note to the secretary. Answer the questions.'));
out.push(model([
  '**To:** the faculty secretary · **Subject:** The minutes of 14 May — four verbs, and no complaint',
  'Dear Madam,',
  'Thank you for the minutes. The account of what was said is accurate and I am not disputing a single word of what anybody is reported to have said. I am asking about four verbs, and I want to say first that I do not think any of them was deliberate.',
  '**Paragraph 2.** "Ms Sweidan claimed that the 1974 survey is inaccurate." _Claimed_ tells the reader that the writer is not vouching for it. I measured that site twice with a tape and tabled the measurements at the meeting; they are attached to the agenda. I ask for _said_, or if you are willing, _showed_.',
  '**Paragraph 3.** "The head of department explained that resources are limited." _Explained_ tells the reader the reason was sufficient. The words were "resources are limited", which may well be true and is not a reason. I ask for _said_.',
  '**Paragraph 5.** "Ms Sweidan insisted that the workshop should be open after six." I said it once. _Insisted_ describes somebody who would not let a thing go. I ask for _asked_.',
  '**Paragraph 6.** "The committee noted the request." I am not asking for this one to be changed. It is accurate: nothing is going to happen, and I would rather the minutes said so plainly than promised anything.',
  'I know that minutes are written fast by somebody who was not in the argument. I also know that these are the only record of that meeting and that they will be read in three years by somebody who was not there, and it is for that reader that I am writing.',
  'Yours sincerely, Lubna Sweidan',
]));
out.push(item('1', 'What does she say she is **not** disputing?'));
out.push(item('2', 'Which of the four does she leave alone, and why?'));
out.push(item('3', 'Whom does she say she is writing for?'));
out.push(writers([
  'A letter about reporting verbs: **thank them and concede the accuracy of the words** → **each verb, with the paragraph number, what the verb does, and the verb you ask for** → **one you leave alone** → **and the reader in three years**.',
  'Concede the words completely in the first paragraph. You are arguing about four verbs and nothing else, and saying so is what makes it answerable.',
  'Leave one alone, and say why. _I would rather the minutes said so plainly than promised anything._ A letter that objects to everything is read as an objection to the minutes; one that accepts the worst verb on the page is read as a point about four verbs.',
  '⚠ End with the reader who was not there. Minutes are not for the people in the room; they are the only record, and in three years they are all there is.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note about the verbs in a record of something you said (50 words or more).'));
out.push(p('**To:** ______________   **Subject:** ______________ — ______________ verbs, and no complaint   Dear ______________,   Thank you for ______________. The account of what was said is accurate and I am not disputing ______________. I am asking about ______________ verbs, and I do not think any of them was deliberate.   **______________.** "______________." _______________ tells the reader that ______________. ______________. I ask for _______________.   **______________.** "______________." _______________ tells the reader ______________. I ask for _______________.   I am not asking for ______________ to be changed. It is accurate: ______________.   I know that ______________. I also know that ______________, and it is for that reader that I am writing.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The right verb patterns — _say_ with no person, _tell_ with one, _explain to_',
  'The words conceded as accurate before anything else',
  'Each verb quoted with its paragraph and the replacement asked for',
  'One verb left alone, with the reason',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the verb they left alone and why.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (100 words or more) about a record of something you or somebody you know said — minutes, a reference, an appraisal, a report, a message. Verbs only; concede everything else.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s note as **the person who wrote the record**. ★ _The paragraph that makes me want to change it._  ✓ _One place where you are objecting to the content and calling it a verb._  ? _Which one are you leaving alone?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Who has seen a record of something they said, and what verb were they given?** Collect them. _Claimed_, _alleged_, _felt_, _was concerned_ and _requested_ come up most, and in every case the person asking for something got the weak verb.'));
out.push(hw('Find a written record of something somebody said — minutes, a report, a news item, a message — and list every reporting verb in it with what each one does (50+ words). Then say who in that document got the good verbs.'));

// ======================= 10.5 =======================
out.push(pb());
out.push(h2('10.5  What was said and what was meant'));
out.push(p('**Function:** reporting accurately from notes   ·   **Grammar:** reporting against interpreting   ·   **Pronunciation:** reading notes aloud without filling them in'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads six lines of raw notes from a meeting. The class reports each one in a full sentence — and then your teacher reads what was actually said. Three of the six have had something added that was not in the notes.'));
out.push(board('What was said: "we will look at it." What I wrote: "he agreed."', 'said · meant · and the gap'));
out.push(p('**b**  Said or meant? **1** _He said he would look at it._  **2** _He agreed to look at it._  **3** _He said resources were limited._  **4** _He refused._  **5** _He said nothing._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Yara comparing?   **A** two sets of notes   **B** her notes and her report   **C** two meetings'));
out.push(p('**b**  Listen again. **1** What did the committee actually say?   **2** What had Yara written in her own notes afterwards?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.9  Four words and a page', [
  ['Yara', 'I went to the committee about the one word. I took notes during it and I wrote the report afterwards, and this evening I put the two next to each other.'],
  ['Ms Huda', 'What is in the notes?'],
  ['Yara', 'Eleven lines of my own handwriting. The relevant one says: _Dr H — "we will look at the wording" — 11.20._ That is all. Four words of his, in quotation marks, and a time.'],
  ['Rasha', 'And in the report?'],
  ['Yara', '"The committee accepted that the wording should be revised." Which is not what he said. He said they would look at it. I turned "we will look at the wording" into "the committee accepted", and I did it two hours later, on a bus, feeling pleased.'],
  ['Mazen', 'But they did change it.'],
  ['Yara', 'They changed it three weeks later and that is the thing that frightens me. I was **right**, and my sentence was still wrong, and if they had not changed it my report would have been a lie that I would have defended, because I would have remembered the pleased feeling and not the four words.'],
  ['Ms Huda', 'So what is the rule?'],
  ['Yara', 'Report what was said, and if you want to say what you think it meant, put it in a separate sentence with your name on it. "He said they would look at the wording. I took that to mean they had decided to change it, and three weeks later they did."'],
  ['Lubna', 'That is longer.'],
  ['Yara', 'It is nine words longer and it is the difference between a record and a memory. And the second half is **mine**, which means that if I am wrong about it, only the second half is wrong.'],
  ['Ms Huda', 'Say the last sentence again.'],
  ['Yara', 'If the interpretation is in its own sentence, then when it is wrong, the record is still right.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Reporting against interpreting**',
  table(['the notes', 'the honest report'], [
    ['_"We will look at the wording."_', '_He said they would look at the wording._'],
    ['_"Resources are limited."_', '_He said resources were limited._'],
    ['_(nothing — he did not answer)_', '_He did not answer the question._'],
    ['_"We will look at it" + my own impression_', '_He said they would look at it. **I took that to mean** they had decided to._'],
  ], [2.1, 2.5]),
  '**Two sentences, not one.** The first says what was said. The second says what you took it to mean, in your own voice. Then if your reading is wrong, only the second sentence is wrong and the record survives.',
  '**The phrases that mark an interpretation as yours:** _I took that to mean · my impression was · I understood him to be saying · it seemed to me that · I may be wrong about this, but_.',
  '⚠ The verbs that smuggle an interpretation in: _agreed · accepted · refused · promised · threatened · conceded_. Every one of them says something about intention that was not in the words. Use them only when the words themselves contained the act: _"yes, I agree" → he agreed_.',
  '⚠ ~~He said nothing~~ when he did not answer a question is not neutral: _he did not answer_ is what happened, and _he said nothing_ sounds like a refusal.',
  '**Notes are evidence; memory is not.** Write the words in quotation marks and put a **time** against them. Four words and a time beat a page written two hours later.',
  '**And the hard part:** you can be right about what somebody meant and wrong to have written it as what they said. Being right does not fix the sentence.',
  '**Useful phrases:** four words of his, in quotation marks, and a time · I did it two hours later, on a bus, feeling pleased · I was right and my sentence was still wrong · if the interpretation is in its own sentence, then when it is wrong, the record is still right.',
  '**Practise:** Report each note honestly, then add your interpretation as a second sentence.  1 _"We will look at it."_  2 _"That is not a priority at the moment."_  3 _"I hear what you say."_  4 _(no answer)_  5 _"Leave it with me."_',
  '**Pronunciation.** 🔊 **Track 10.10** Reading notes aloud: say the **quoted words at a different speed** from your own — the quotation slower and flatter, your interpretation faster and lower. _He said ‖ "we will look at the wording" ‖ and I took that to mean they had decided._ Listen to four and mark where the quotation begins and ends.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the note from the card. B reports it honestly in one sentence, then gives the interpretation in a second sentence marked as their own. A then says what the dishonest one-sentence version would have been. Swap cards.'));
out.push(dlg(null, [
  ['A', 'Notes say: "__________" — __________.'],
  ['B', 'He said __________. I took that to mean __________.'],
  ['A', 'And the one-sentence version?'],
  ['B', '"He __________" — which puts my reading into his mouth.'],
]));
out.push(table(['Card A – the notes', 'Card B – the notes'], [
  ['"We will look at the wording." — 11.20', '"That is not a priority at the moment." — 14.05'],
  ['"I hear what you say." — 09.40', '(no answer to the question) — 16.12'],
  ['"Leave it with me." — Tuesday', '"Nobody has complained before." — Monday'],
  ['"We will see where we are in June." — 10.00', '"I will find out and let you know." — 12.30'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the honest version and the dishonest one for each. Then: which of the eight notes most tempted the pair into the one-sentence version? _Leave it with me_ and _I will find out and let you know_, every time.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Report something you were told this month that you turned into a conclusion. Give the words if you have them, then your interpretation in a separate sentence, then say whether the interpretation turned out to be right.'));
out.push(p('**b**  Swap. Then each of you say whether you would have noticed the difference if the interpretation had turned out to be right.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Yara went to the committee about the one word, took notes during it and wrote the report afterwards, and this evening she put the two next to each other. The notes are eleven lines of her own handwriting, and the relevant one says: Dr H — "we will look at the wording" — 11.20. Four words of his, in quotation marks, and a time. In the report she wrote: the committee accepted that the wording should be revised. Which is not what he said — he said they would look at it. She turned "we will look at the wording" into "the committee accepted", two hours later, on a bus, feeling pleased. Mazen said but they did change it, and she said they changed it three weeks later and that is the thing that frightens her: she was right, and her sentence was still wrong, and if they had not changed it her report would have been a lie that she would have defended, because she would have remembered the pleased feeling and not the four words. So the rule is: report what was said, and if you want to say what you think it meant, put it in a separate sentence with your name on it — he said they would look at the wording; I took that to mean they had decided to change it, and three weeks later they did. Lubna said that is longer, and Yara said it is nine words longer and it is the difference between a record and a memory. If the interpretation is in its own sentence, then when it is wrong, the record is still right._'));
out.push(p('**Listener task:** write the four words somebody turned into a conclusion.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two pages Yara puts side by side. Answer the questions.'));
out.push(model([
  '**NOTES AND REPORT, SIDE BY SIDE** · Y. Mansour · 14 May',
  '**From my notes, in order, with times.** 11.02 — read para 3 aloud. 11.06 — Dr H: "the sentence is accurate." 11.09 — me: four conditions, any one removed prevents it. 11.14 — Dr S: "is that in the temperature log?" 11.16 — me: no, the log shows the chamber held. 11.20 — Dr H: "we will look at the wording." 11.21 — chairman: next item.',
  '**What I wrote two hours later.** "I presented the four conditions. Dr S asked about the temperature log and accepted that it supported my account. The committee accepted that the wording should be revised and agreed to amend paragraph 3."',
  '**The three sentences that are not in my notes.** That Dr S **accepted** anything — my notes record a question and my answer, and nothing after it. That the committee **accepted** — one man said they would look at the wording. That anybody **agreed to amend** — nobody said the word amend at all.',
  '**What was actually said, and what I took it to mean.** Dr H said the sentence was accurate, and then, after I had given the four conditions and answered Dr S\'s question, he said they would look at the wording. I took that to mean that he had decided to change it, partly because of the fourteen minutes and partly because of the way he said it. Three weeks later the word was changed.',
  '**Why I am keeping both pages.** Because I was right and my report was wrong, and the only reason anybody will ever know the difference is that I wrote four words and a time at 11.20 instead of writing what I felt on the bus.',
]));
out.push(item('1', 'How many sentences in her report are not supported by her notes?'));
out.push(item('2', 'What word does she say nobody used at all?'));
out.push(item('3', 'Why is she keeping both pages?'));
out.push(writers([
  'Two pages side by side: **the notes, in order, with times** → **what you wrote afterwards** → **the sentences that are not in the notes, listed** → **what was said and what you took it to mean, separated** → **and why you are keeping both**.',
  'Keep the notes **as notes**: times, initials, quotation marks, fragments. Do not tidy them. The whole value of the page is that one column is rougher than the other.',
  'List the unsupported sentences and name the verb in each one: _that Dr S **accepted** anything · that the committee **accepted** · that anybody **agreed to amend**_. The verbs are where the invention lives, which is 10.4 arriving again.',
  '⚠ The last paragraph is the point and it is uncomfortable: _I was right and my report was wrong._ Being right about what somebody meant does not make the sentence a record.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Put your own notes and your own account side by side (50 words or more).'));
out.push(p('**From my notes, with times.** ______________ — ______________. ______________ — ______________: "______________." ______________ — ______________.   **What I wrote afterwards.** "______________."   **The sentences that are not in my notes.** That ______________. That ______________. That ______________.   **What was actually said, and what I took it to mean.** ______________ said ______________. I took that to mean ______________, partly because ______________.   **Why I am keeping both.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Quoted words in quotation marks, with a time against each',
  'No verb that smuggles in an intention — _agreed_, _accepted_, _refused_ only if the words contained the act',
  'The interpretation in a separate sentence, marked as yours',
  'A list of the sentences the notes do not support',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence their own notes do not support.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write both pages in full (100 words or more) for a conversation, meeting or telephone call you have a record of. If you have no notes of anything, write the notes you would have needed and say what you cannot now reconstruct.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s pages as **somebody checking the record**. ★ _The quoted four words with a time against them._  ✓ _One verb that puts an intention into somebody\'s mouth._  ? _Were you right? And would you have noticed if you had been?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many people were right about what was meant?** Most. Then the question that ends the cycle: how many would have noticed the difference if they had been right? Almost nobody — and Yara only noticed because she had written down four words and a time.'));
out.push(hw('Take notes in one real conversation this week — words in quotation marks, with times — and then write your account from them (50+ words). Then list the sentences in your account that the notes do not support.'));

// ======================= 10.6 =======================
out.push(pb());
out.push(h2('10.6  Minutes'));
out.push(p('**Function:** writing up what was said at a meeting   ·   **Grammar:** the conventions of minutes   ·   **Pronunciation:** reading minutes aloud at a meeting'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads a set of minutes of a meeting the class was in — the last cycle of this unit. The class finds the three things that are wrong with them: something missing, something added, and one verb.'));
out.push(board('Decision: trial for one nurse, three months. Action: R. Barakat, by 1 June.', 'who · what was decided · who does it · by when'));
out.push(p('**b**  What is missing? **1** _The rota was discussed._  **2** _It was agreed to trial three-night blocks._  **3** _R. Barakat will report in September._  **4** _Concerns were raised._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Rasha been asked to do, and why her?   **A** to write the minutes, because she asked for the item   **B** to chair the meeting   **C** to take the minutes for the whole ward'));
out.push(p('**b**  Listen again. **1** What was decided?   **2** What does Rasha say she must not do in the minutes?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.11  The minutes of my own item', [
  ['Rasha', 'The rota meeting was on the twenty-ninth. They have asked me to write the minutes of my own item, which I think is either very trusting or a way of making sure I cannot complain about them.'],
  ['Ms Huda', 'What was decided?'],
  ['Rasha', 'Three-night blocks for one nurse — me — for three months from the first of June, with the errors counted the same way, and a report to the September meeting. And one thing I had not asked for: the other night nurse was offered the same and said she would think about it.'],
  ['Fares', 'That is everything you wanted.'],
  ['Rasha', 'It is more than I asked for and less than I wanted, and both of those have to be in the minutes without any adjectives.'],
  ['Lubna', 'What was the less?'],
  ['Rasha', 'They did not accept that the blocks are the cause. The chair said — and I wrote it down at 10.40 — "we are agreeing to the trial, not to the explanation." Which is exactly right and which I would have smoothed away two months ago.'],
  ['Ms Huda', 'And what must the minutes not do?'],
  ['Rasha', 'They must not make me the person who was right. I asked for the item, I got the trial, and if I write "the committee accepted the evidence" then in September, when somebody reads it, I will look like somebody who won an argument, and what actually happened is that four people agreed to count something for three months.'],
  ['Mazen', 'And the trolley?'],
  ['Rasha', 'Nothing about the trolley. It was not on the agenda and I did not raise it, and the minutes will say nothing about it, which is the honest thing and it is also the thing I will be angriest about in September.'],
  ['Ms Huda', 'Put that last sentence somewhere that is not the minutes.'],
  ['Rasha', 'It is in my own book. The minutes get the decision and the action and the date. My book gets the rest.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Minutes: four things a line, and nothing else**',
  table(['the element', 'what it looks like'], [
    ['**Item**', '_4. Night rota, blocks of five (raised by R. Barakat)_'],
    ['**What was said**', '_R. Barakat presented a record of 118 shifts and 7 errors…_'],
    ['**Decision**', '_Agreed: three-night blocks for one nurse from 1 June, for three months._'],
    ['**Action**', '_Action: R. Barakat to report to the September meeting._'],
  ], [1.3, 3.3]),
  '**Every item ends with an action or with the words _no action_.** An item with no action line has not been minuted; it has been described.',
  '**The decision gets its own sentence, in the passive, with a date:** _Agreed: … from 1 June, for three months._ That is the one sentence somebody will read in September.',
  '**Report what was said in the past, as usual** — _she said she had 118 shifts_ — but write the **decision** in the present or the passive without backshift: _Agreed that the trial **will** run for three months._ Decisions are not reported speech; they are the record of a thing done.',
  '⚠ ~~The rota was discussed.~~ is not a minute. It names an item and records nothing. ⚠ ~~Concerns were raised.~~ — by whom, about what, and what happened?',
  '**And the hardest rule: no adjectives, and no credit.** Not _the committee accepted the evidence_ but _agreed to the trial, not to the explanation_, if that is what was said. If you are minuting your own item, your job is to make yourself smaller than you felt.',
  '**Useful phrases:** it is more than I asked for and less than I wanted · we are agreeing to the trial, not to the explanation · they must not make me the person who was right · the minutes get the decision, the action and the date; my book gets the rest.',
  '**Practise:** Turn each into a proper minute with a decision and an action.  1 the rota was discussed  2 concerns were raised about the trolley  3 the committee considered the wording of paragraph 3  4 the condition about leaving the premises was raised  5 the question of the chapter order came up',
  '**Pronunciation.** 🔊 **Track 10.12** Reading minutes aloud at a meeting: read the **decision and the action** slowly and everything else fast. _R. Barakat presented a record of 118 shifts and 7 errors ‖ **Agreed: three-night blocks from the first of June, for three months.**_ Listen to two readings and say which one a meeting would stop for.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the vague minute from the card. B turns it into a proper one: item, what was said, decision, action, by when. A then asks the question a reader in September would ask. Swap cards.'));
out.push(dlg(null, [
  ['A', '"__________."'],
  ['B', 'Item: __________. ______________ said __________. Agreed: __________. Action: __________, by __________.'],
  ['A', 'In September somebody reads this. What do they ask?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the vague minutes', 'Card B – the vague minutes'], [
  ['The rota was discussed.', 'Concerns were raised about equipment.'],
  ['The committee considered the wording.', 'The question of the chapter order came up.'],
  ['The matter of the workshop was raised.', 'Condition 7 was discussed at some length.'],
  ['It was noted that marks are sometimes late.', 'The second fire door was mentioned.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the decision and the action for each. Then: how many of the eight vague versions could be turned into a real minute **without inventing anything**? About half — and for the other half the honest minute is _no decision; no action_.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write the minute of something that was decided where you work this month — item, what was said, decision, action, date. Then read it to your partner, who must ask _and who does what by when?_'));
out.push(p('**b**  Swap. Then each of you say whether the real record of that decision has an action line in it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The rota meeting was on the twenty-ninth and they have asked Rasha to write the minutes of her own item, which she says is either very trusting or a way of making sure she cannot complain about them. What was decided: three-night blocks for one nurse — her — for three months from the first of June, with the errors counted the same way, and a report to the September meeting. And one thing she had not asked for: the other night nurse was offered the same and said she would think about it. Fares said that is everything she wanted, and she said it is more than she asked for and less than she wanted, and both of those have to be in the minutes without any adjectives. The less is that they did not accept that the blocks are the cause: the chair said — and she wrote it down at 10.40 — "we are agreeing to the trial, not to the explanation", which she says is exactly right and which she would have smoothed away two months ago. And what the minutes must not do is make her the person who was right: she asked for the item and got the trial, and if she writes "the committee accepted the evidence" then in September she will look like somebody who won an argument, when what happened is that four people agreed to count something for three months. Nothing about the trolley — it was not on the agenda and she did not raise it, and the minutes will say nothing, which is honest and is also the thing she will be angriest about in September. Ms Huda told her to put that last sentence somewhere that is not the minutes, and she said it is in her own book._'));
out.push(p('**Listener task:** write a decision from somebody\'s workplace that has no action line against it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the minute Rasha writes. Answer the questions.'));
out.push(model([
  '**WARD 4 · ROTA MEETING, 29 MAY · ITEM 4** _(minuted by R. Barakat, who raised the item)_',
  '**4. Night rota: length of blocks.** Raised by R. Barakat.',
  'R. Barakat presented a written record of 118 consecutive night shifts between 6 January and 11 October, with 7 recorded errors, all of which occurred on a fourth or fifth night of a block and none on a first, second or third. She stated the limitations of the record: one nurse, errors recorded by herself, two of them entered late and marked, and no comparison group. She noted that the second medication trolley has been in the workshop since 2 February and has lengthened every round in the period.',
  'The chair said that the committee was agreeing to the trial and not to the explanation.',
  'Sister H. Nasr said that her own recorded errors fall on fifth nights. She said she had not previously reported this. She asked for time to consider whether to join the trial.',
  '**Agreed:** three-night blocks for one nurse (R. Barakat) from 1 June for three months, errors to be recorded in the ward book as at present.',
  '**Agreed:** the offer of the same arrangement to be left open to Sister H. Nasr until 15 June.',
  '**Action:** R. Barakat to report to the September meeting, whatever the outcome.',
  '**No decision** was taken on the cause of the errors, and none was sought.',
  '**Not raised:** the second trolley. Not on the agenda.',
]));
out.push(item('1', 'Which sentence stops Rasha looking like somebody who won an argument?'));
out.push(item('2', 'What do the last two lines record?'));
out.push(item('3', 'Why does the action line say "whatever the outcome"?'));
out.push(writers([
  'A minute of your own item: **the item and who raised it** → **what was presented, including the limitations** → **what each other person said, in the same voice** → **the decisions, each with a date** → **the action, with a name** → **and a line recording what was _not_ decided and what was _not_ raised**.',
  'Put the **limitations** into the minute, in the same sentence as the evidence. A minute that records your case without its weaknesses will be read in September by somebody who finds them.',
  'Record what was **not** decided: _no decision was taken on the cause of the errors, and none was sought._ That line protects everybody, including you.',
  '⚠ Record what was **not raised** and why. _Not raised: the second trolley. Not on the agenda._ In three months that line is the only evidence that the omission was deliberate rather than forgotten.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the minute of an item from a real meeting (50 words or more).'));
out.push(p('**______________ · ______________ · ITEM ______________** _(minuted by ______________)_   **______________.** Raised by ______________.   ______________ presented ______________. ______________ stated the limitations: ______________. ______________ noted that ______________.   ______________ said that ______________.   ______________ said that ______________. ______________ asked for ______________.   **Agreed:** ______________ from ______________ for ______________.   **Action:** ______________ to ______________ by ______________.   **No decision** was taken on ______________.   **Not raised:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Reported speech in the past; the **decision** not backshifted',
  'A decision line with a date and an action line with a name',
  'The limitations of your own case included',
  'What was not decided and what was not raised',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "no decision" and "not raised" lines only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full minute (100 words or more) of a meeting you were in — one item, properly minuted. Then write underneath what you would have put in two months ago and have left out.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s minute as **somebody reading it in September who was not there**. ★ _The line I could act on._  ✓ _One adjective, or one place where the writer is the hero._  ? _Who does what by when?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the real records at these workplaces have an action line?** Very few. Then: how many of the room\'s own minutes do? All of them, now — and that is a thing each of them can take to work on Monday.'));
out.push(hw('Minute one item of a real meeting (50+ words), with a decision line, an action line, and lines for what was not decided and not raised. Then give it to somebody who was there and write down what they changed.'));

// ======================= 10.7 =======================
out.push(pb());
out.push(h2('10.7  Review & Mediate: Telling somebody who was not there'));
out.push(p('**Function:** reporting a conversation to somebody who missed it   ·   **Recycling:** Units 1–10   ·   **Exam practice:** B1 Preliminary Reading Part 3, Writing Part 2, Listening Part 2'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 10 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** He said me he had finished.  **2** She said that she will send it.  **3** She asked where was the trolley.  **4** She asked did I want it back.  **5** He told me to not open it.  **6** She explained me the reason.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the two accounts of the same meeting.'));
out.push(box(null, [
  '**ONE MEETING, TWO ACCOUNTS** — both given to Sister H. Nasr, who was there for ten minutes of it',
  '**Account A** _(from a colleague who was in the room)_ — "They gave Rasha her trial. Four people round a table and she had it all written out, pages of it, and the chair more or less said yes before she had finished. You were offered the same and you said you would think about it. Everybody said it was the best-prepared thing they had seen all year. You should take it."',
  '**Account B** _(from Rasha herself, written down)_ — "I presented the 118 shifts and the seven errors. I stated the limitations: one nurse, my own records, two entered late, no comparison group, and the trolley. The chair said the committee was agreeing to the trial and not to the explanation. You said your errors fall on fifth nights and that you had not reported it before, and you asked for time. It was agreed that the offer stays open to you until the fifteenth. I report in September whatever happens. Nothing was decided about the cause and nobody asked for it to be."',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Sister Nasr has both accounts. Which one does she say is more useful to her, and what does she say Account A has taken away from her?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.13  What the kind version took away', [
  ['Rasha', 'She read both of them and she was quiet for a while.'],
  ['Ms Huda', 'Report what she said.'],
  ['Rasha', 'She said that account A was kinder and that she would have believed it. Then she said it had taken two things away from her and she would rather have them.'],
  ['Lubna', 'Which two?'],
  ['Rasha', 'She said the first was the date. Account A says she was offered the same and said she would think about it, and does not say that the offer closes on the fifteenth of June — and she read account A on the ninth.'],
  ['Mazen', 'Six days.'],
  ['Rasha', 'Six days, and account A would have cost her the trial. And the second thing she said was harder. She said that account A makes the committee agree with me, and that if the committee agrees with me then her own two years of thinking it was her becomes a mistake she made. But the chair said they were agreeing to the trial and not to the explanation — which means nobody has decided anything about either of us, and she would rather be undecided than wrong.'],
  ['Ms Huda', 'Say that again.'],
  ['Rasha', 'She would rather be undecided than wrong. And the kind version made her wrong, by accident, in one sentence, written by somebody who likes her.'],
  ['Fares', 'Did she take the trial?'],
  ['Rasha', 'She asked me on the Thursday what I thought she should do, and I said that if I were her I would take it, and that the thing I had to think about was that she has done fourteen years of fifth nights and I have done nine months. She said she would tell me on the fourteenth.'],
  ['Ms Huda', 'And what have you learnt about reporting?'],
  ['Rasha', 'That the dates are not decoration. Every soft version of a conversation loses a date first.'],
]));
out.push(sp());
out.push(box('Language box – reporting a conversation to somebody who missed it', [
  'Give them the **dates and the deadlines first**, before anything else. Every kind, smooth, summarised version of a meeting loses a date before it loses anything else, and the date is the only part that expires.',
  'Report what was said in the words that were used, especially the sentences that **limit** the outcome: _the committee was agreeing to the trial and not to the explanation_. Those are the sentences a summary deletes and the listener needs.',
  'Report **their own** contribution to them as accurately as anybody else\'s. They were in the room for part of it and they will check that part, and if it is right they will believe the rest.',
  'Keep the verbs honest: _agreed_, _accepted_ and _refused_ only where the words contained the act. _The chair said_ is almost always safer than _the chair accepted_.',
  'Say what was **not** decided and what was **not** raised. A listener who is told that nothing was decided about the cause can make a decision about themselves; a listener who is told that everybody agreed cannot.',
  '⚠ And then, separately, give your advice if they ask for it — _if I were you I would_ — and name the thing about their situation you had to think about. Report first, advise second, and never in the same sentence.',
  '**Useful phrases:** she said it had taken two things away from her and she would rather have them · the kind version made her wrong, by accident, in one sentence · she would rather be undecided than wrong · the dates are not decoration.',
  '**Pronunciation.** 🔊 **Track 10.14** Reporting to somebody who missed it: the **dates and deadlines** are said slowly and twice — _the offer stays open until the fifteenth ‖ the fifteenth of June_ — and everything else at normal speed. Listen to one account read twice and say which one you could act on.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has one of the meetings below and does **not** show it. A reports it to B, who was not there, giving the dates first, the limiting sentences, and what was not decided. C listens and writes down what a kind summary would have lost. Change roles with the other meeting.'));
out.push(table(['Meeting A – a school department', 'Meeting B – a tenants\' meeting'], [
  ['Chapter 7 order raised by S. Dibo, with four years of papers.', 'The lift and the brake part, raised by three tenants.'],
  ['Head of department: "we can trial it in one class."', 'The manager: "the part was ordered in March."'],
  ['Agreed: one class, one year, same mark analysis in June.', 'Agreed: a notice on the lift with the order number on it.'],
  ['Not agreed: that the printed order is wrong.', 'Not agreed: any date for the repair.'],
  ['Action: S. Dibo to report at the September meeting.', 'Action: the manager to put the number up by Friday.'],
  ['Not raised: what other schools do.', 'Not raised: the four-person weight limit.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write what a kind summary would have lost. In Meeting A it is _not agreed: that the printed order is wrong_, which is what a summary turns into "they agreed with her"; in Meeting B it is the absence of any date, which a summary turns into "they are fixing it".'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Report a real meeting or conversation to your partner as if they had missed it. Dates first, the limiting sentences, their own part if they had one, and what was not decided. They must ask: _what is the deadline?_, _what did they not agree to?_ and _what was not raised?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner reported and what you decided:  _Rasha reported the rota meeting to Sister Nasr, who had been there for ten minutes of it, and she gave her both accounts. Sister Nasr said account A was kinder and that she would have believed it, and then said it had taken two things away from her. The first was the date: account A says she was offered the same and said she would think about it, and does not say that the offer closes on the fifteenth of June — and she read account A on the ninth. Six days, and the kind version would have cost her the trial. The second was harder. She said account A makes the committee agree with Rasha, and that if the committee agrees with Rasha then her own two years of thinking it was her becomes a mistake she made — but the chair said they were agreeing to the trial and not to the explanation, so nobody has decided anything about either of them, and she would rather be undecided than wrong. Then she asked Rasha on the Thursday what she thought she should do, and Rasha said that if she were her she would take it, and that the thing she had to think about is that Sister Nasr has done fourteen years of fifth nights and Rasha has done nine months. She said she would tell her on the fourteenth. So I decided to go back to the last thing I summarised for somebody and find out which date I left out._'));
out.push(p('**Listener task:** what did the kind version lose, and what was the deadline?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 3)', 7));
out.push(p('Read the text and answer the questions. Choose **A**, **B**, **C** or **D**.'));
out.push(model([
  '**THE KIND VERSION**  · from a magazine for people who work in hospitals',
  'A night sister on a five-bay ward in Damascus spent nine months keeping a private record of her own mistakes. She had made seven in a hundred and eighteen shifts, every one of them on the fourth or fifth night of a five-night block and none on a first, second or third. In May she put the record to a rota meeting and asked for a three-month trial of three-night blocks for herself alone.',
  'She got it. What interests her now is not the trial but a sentence the chair said while agreeing to it: that the committee was agreeing to the trial and not to the explanation. She wrote that sentence down at the time and then put it in the minutes, which she had been asked to write herself.',
  'The second night nurse on the ward had been in the meeting for ten minutes. Afterwards two people told her what had happened. A colleague gave her the kind version — that the case had been overwhelming, that the committee had more or less agreed before the end, and that she had been offered the same arrangement and should take it. The sister gave her the other version, in writing, with the dates in it.',
  'She said the kind version had taken two things away from her. The first was a deadline: the offer of a place on the trial closed on 15 June, and the kind version did not contain the date. She read it on the 9th.',
  'The second was stranger and she took longer to explain it. If the committee had accepted the explanation, then the fourteen years in which she had believed her own fifth-night errors were simply her own fault became a mistake — and she said she would rather be undecided than wrong. The kind version had made her wrong in a single sentence, written by somebody who liked her.',
]));
[
  '**1**  What interests the night sister most now?   **A** the trial   **B** a sentence the chair said   **C** the seven errors   **D** the minutes',
  '**2**  Why was she writing the minutes herself?   **A** she volunteered   **B** she had been asked to   **C** nobody else was there   **D** the chair refused to',
  '**3**  What did the kind version leave out?   **A** the number of errors   **B** the name of the chair   **C** a closing date   **D** the trial itself',
  '**4**  Why does the second nurse prefer to be "undecided"?   **A** she does not believe the evidence   **B** being right would mean somebody else was wrong   **C** a decision would make her past belief a mistake   **D** she does not want to join the trial',
  '**5**  What is the writer\'s main point?   **A** that night work is dangerous   **B** that minutes should be written by somebody independent   **C** that a kindly summary can cost the listener something   **D** that the committee was wrong',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the message reporting a meeting to somebody who missed it (50 words or more).'));
out.push(p('Two dates first: ______________ and ______________.   ______________ presented ______________ and stated the limitations, which were ______________.   ______________ said, in these words: "______________." That is the sentence that matters, because ______________.   You ______________, and it was agreed that ______________ until ______________.   **Nothing was decided about ______________**, and nobody asked for it to be.   **Not raised:** ______________.   If you want to know what I would do: if I were you I would ______________, and the thing I had to think about is ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Dates and deadlines first',
  'The limiting sentence quoted in the words used',
  'Their own contribution reported as accurately as anybody\'s',
  'What was not decided, what was not raised — and advice only at the end',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 2)', 10));
out.push(box(null, [
  'Choose **one** of these. Write **100 words or more**.',
  '**Question 1 — an article.** You see this notice in an English-language magazine.',
  '_"**What the kind version left out.** Tell us about a time somebody told you about something you had missed — and what their version left out. Was it kindness, or was it hurry? We will print the best articles."_',
  'Write your **article**.',
  '**Question 2 — a story.** Your English teacher has asked you to write a story. It must begin with this sentence:',
  '_"She read both accounts and then said that the kinder one had taken something away from her."_',
  'Write your **story**.',
], C.grey, C.navy));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 10 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  He ___ me that he had finished.   a) said   b) told   c) explained',
  '2  She said that she ___ send it.   a) will   b) would   c) would to',
  '3  She asked ___ .   a) where was the trolley   b) where the trolley was   c) where is the trolley',
  '4  She asked ___ I wanted it back.   a) that   b) whether   c) did',
  '5  He told me ___ open it before the ticket was signed.   a) not to   b) to not   c) don\'t',
  '6  She ___ to me that resources were limited.   a) explained   b) explained me   c) told',
  '7  His notes said "we will look at it", so he wrote that the committee ___ .   a) accepted   b) would look at it   c) agreed',
  '8  The minute reads: ___ three-night blocks from 1 June.   a) It was discussed   b) Agreed:   c) Concerns were raised about',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 2 style – matching).** 🔊 **Track 10.15** You will hear five people talking about reporting something somebody said. For each speaker, choose from **A–H** what they say. There are three letters you do not need.'));
out.push(table(['Speakers', 'What they say'], [
  ['1  Speaker 1 ___', 'A  Their report used one verb far too often.'],
  ['2  Speaker 2 ___', 'B  They turned four words into a conclusion.'],
  ['3  Speaker 3 ___', 'C  They were asked a question they did not want to answer.'],
  ['4  Speaker 4 ___', 'D  A kind summary left out a date.'],
  ['5  Speaker 5 ___', 'E  They reported their own request as an instruction and regretted it.'],
  ['', 'F  They insisted on the word "asked" rather than "told".'],
  ['', 'G  A record gave one person the good verbs.'],
  ['', 'H  They refused to write any minutes at all.'],
], [1, 2]));
out.push(dlg('Track 10.15  Audio script (read after the check)', [
  ['1  Man', 'I looked at it again and there were six verbs in it and five of them were "said". It read as though six people had come into a room one at a time and made announcements. One of them had not said anything of the kind — she had admitted something, and it had cost her.'],
  ['2  Woman', 'My notes say four words, in quotation marks, with a time against them: "we will look at the wording", eleven twenty. Two hours later, on a bus, I wrote that the committee had accepted that it should be revised. They did change it, three weeks later — and I was right and my sentence was still wrong.'],
  ['3  Woman', 'She asked me what I meant by errors, and then whether I was keeping a list, and then who had told me to ask. The third one was the only one I did not want to answer, and I still do not entirely know why.'],
  ['4  Man', 'The ministry told them. I asked them. If I write it down as "I told the men" then I have put myself in the ministry\'s voice, which is the one thing I said I was not going to do. So it says asked, and it will go on saying asked.'],
  ['5  Woman', 'It was the kinder version and I would have believed it. What it did not have in it was the fifteenth of June, and I read it on the ninth. Six days. The soft version loses a date before it loses anything else.'],
]));
out.push(p('**C  Writing.** Minute one item of a meeting (100+ words): the item and who raised it, what was said in reported speech, the limitations of the case, the decision with a date, the action with a name, and lines for what was not decided and what was not raised.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 10)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ shift a statement back one step, and leave the past perfect where it is',
  '☐ use _say_ with no person and _tell_ with one, every time',
  '☐ report a question with no inversion, no _do_ and no question mark',
  '☐ report a request or an instruction with _asked / told / advised somebody to_',
  '☐ choose a reporting verb on purpose, and notice the verb I have been given',
  '☐ keep what was said and what I took it to mean in separate sentences',
  '☐ write a minute with a decision, an action, a date and a name',
  '☐ report a meeting to somebody who missed it, deadlines first',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 11 – DEFINING AND ADDING', [
  'Unit 10 was about carrying somebody else\'s words. Unit 11 is about packing more into your own: _the man who signed it · the room that has no switch · my sister, who had three children, told me to leave_ — and the two commas that change the meaning of a sentence completely.',
  'Before the next lesson: find **one sentence** in anything you have written in this book that contains the word _who_, _which_ or _that_, and copy it out. Also find one place where you wrote two short sentences that should have been one. Unit 11 opens on both.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Unit 10 · Student\'s Book');
