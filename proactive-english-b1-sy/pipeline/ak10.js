// Proactive English B1 · Syria Edition · Book 1 · Unit 10 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 10  Reporting What People Said — Answer Key'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**The grammar is thirty minutes and the unit is seven cycles.** The class has written sixty-three reports in nine units and has been shifting tenses back by ear the whole time, so 10.1 teaches backshift quickly and properly and then moves on. What it has **not** got is the reporting verbs, the question forms, and the difference between reporting and interpreting — which is 10.2 to 10.5.',
  '**The organising idea:** the reporting verb is where your opinion goes, whether you intend it or not. 10.4 shows it in somebody else\'s minutes, 10.5 shows it in the class\'s own writing, and 10.7 shows what a kindly summary costs the person who was not there.',
  '**It runs on the Unit 9 homework** — three sentences copied out of the student\'s own reports. 10.1 Stage 1 puts six of them on the board. Without them the cycle has nothing to open on, so collect them, and keep the board sheet for 10.4.',
  '**Two threads land here.** Rasha asked the question that 8.7 told her to ask, and the answer is in 10.2; and the rota meeting she has been building towards since 4.3 is minuted in 10.6 and reported in 10.7. The other night nurse, who has been eleven metres away and silent for two years, arrives in 10.2 and decides in 10.7.',
], C.lblue, C.navy));

// ===================== 10.1 =====================
out.push(pb());
out.push(h2('10.1  She said she had already written it'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The answer is the point of the unit: the **tenses** are nearly all right and the **verbs** are nearly all _said_. Count both out loud. In a class of twelve, expect one or two tense errors in eighteen sentences and fifteen or sixteen _saids_.'));
out.push(A('**b** **1** _he **was** waiting_   **2** _he **had written** it_   **3** _he **had finished**_   **4** _he **would** send it_   **5** _he **could** do it_'));
out.push(A('Keep the board sheet. The same six sentences are used again in 10.4 to show what the verbs do, and a class that sees its own eighteen sentences twice learns more from them than from any exercise in the book.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – that the tenses are mostly right and the verbs are not.'));
out.push(A('**b** **1** Sixty-three — nine units of seven cycles.   **2** That he has three _saids_ in one sentence, and that the second is not a _said_: Ms Huda did not **say** she kept it back, she admitted or explained it, and he has put all three in the same voice.'));
out.push(NOTE('Ms Huda\'s description of the cost is the best argument for the unit: without the fifteen verbs, _every conversation you report sounds like six people making statements in turn, which is not what any conversation has ever been like._ Read it and then ask the class to listen to the next report anybody gives aloud; they will hear it immediately.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _She said the trolley was in the workshop._ / Still true: _she says the trolley **is** in the workshop._',
  '**2** _He said he had asked four times._ / Still true: _he says he **has** asked four times._',
  '**3** _She said she would write to them._ / Still true: _she says she **will** write to them._',
  '**4** _He said nobody had told him._ / Still true: _he says nobody **has** told him._',
  '**5** _She said she could do the two hours._ / Still true: _she says she **can** do the two hours._',
]));
out.push(A('In items 1, 2 and 4 the unshifted version is better, because the fact matters more than the occasion. In 3 and 5 it depends on whether the promise still stands. Make the class choose and justify; the choice is the skill and the rule is only the default.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** "The trolley is still in the workshop."',
  '**B:** She said the trolley was still in the workshop.',
  '**A:** And if it is still true?',
  '**B:** She says the trolley is still in the workshop.',
  '**A:** Which one goes in a message today?',
  '**B:** The second, because the person reading it needs to know where the trolley is, not what was said on Tuesday.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Four or five of the eight are better unshifted. The rule to give the class is short: **shift it back if the occasion is the point; leave it if the fact is the point.** A message to a colleague about a trolley wants the fact; a minute of a meeting wants the occasion.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _My brother said he had been to the office twice and that nobody had seen the form. He said he would go again on Sunday and that if they had not found it he would ask for the name of whoever had taken it in._',
  '**b** _Three verbs and all three are "said". The second one is not a said — he was complaining — and the third is not either; he was deciding something out loud, in front of me, which is a different thing again._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda said that nine units of seven cycles each is sixty-three reports, and that in nine months she has not once taught us reported speech. She put six of our own sentences on the board and asked us to look at the tenses, and Lubna said they were right, all six. Ms Huda agreed: we have been shifting the tenses back for nine months by ear, because Arabic does something comparable and because we have read sixty-three of her model reports, so the grammar is not the problem. Omar asked what is, and she told him to read his own, which was that Ms Huda said he had not missed a lesson, and she said she had kept it back, and she said that at A2 we had had enough to carry. Samira counted three "saids". Omar said the second one is not a said — she did not say she kept it back, she admitted it or explained it, and he had put all three sentences in the same voice, so the whole thing sounds like a list of announcements. Ms Huda said that is the unit: the tenses we have, and what we have not got is the twelve or fifteen verbs that carry the shape of a conversation — who was answering whom, who conceded something, who added something, who refused to answer.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ He said me he had finished. → ✓ He **told** me / He **said to** me.   ✗ She said that she will send it. → ✓ **would** send it.   ✗ He said he has finished. → ✓ **had** finished.   ✗ five _saids_ in a paragraph → ✓ two at most.   ✗ shifting a past perfect further back → ✓ it stays.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** None. Not one word of what anybody said is different between the two versions.'));
out.push(A('**2** _told · admitted · explained · added · asked_ — and _said_ once, for Bassel, who was simply saying something.'));
out.push(A('**3** As if six people were making announcements to an empty room.'));
out.push(A('_I was in that room. I knew what happened. The version that is wrong is the one I wrote._ That is the sentence to read aloud, because it separates the two things students confuse: knowing what happened and recording it. The second is a skill and the first does not produce it.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**As I wrote it in March.** Rasha said that she had been on nights since January. She said that she had made seven errors. She said that they were all on fourth and fifth nights. She said that she had written "staffing" nineteen times.',
  '**As it should have been written.** Rasha **explained** that she had been on permanent nights since January — a hundred and eighteen shifts. She then **admitted** that she had made seven errors in that time, and **pointed out** that every one of them had fallen on a fourth or fifth night of a block and none on a first, second or third. She **added**, without being asked, that she had written "staffing" on nineteen of the forms, and that she did not believe the word.',
  '**What changed.** Nothing anybody said. Four verbs, and the order of the evening came back: she gave a fact, conceded something that cost her, produced the pattern, and then volunteered the thing nobody had asked for.',
  '**What I notice.** My version made the hardest sentence of the evening — the nineteen forms — look like the fourth item on a list.',
]));
out.push(S('Stage 7 · Write freely (sample, 176 words)'));
out.push(SAMPLE([
  '**THE HANDOVER ON THE TWELFTH** · reported by R. Barakat',
  'I **asked** Sister Nasr whether her own errors fell on the fourth and fifth nights of a block. I **did not explain** why I was asking and I **did not ask** for her record.',
  'She **asked** me what I meant by errors, and I **said** the ones that go in the book. She **asked** whether I was keeping a list, and I **admitted** that I was and that it had a hundred and eighteen shifts in it. She then **asked** who had told me to ask, and I **said** nobody had, which is true and which I did not want to have to say.',
  'She **looked** at me for about four seconds. Then she **told** me that hers are all on the fifth night, every one, and she **added** that she had known for two years and had never said it to anybody, because she had thought it was her.',
  'She **asked** whether I had thought it was me as well, and I **said** yes, for nine months.',
  'She **asked** what I was going to do. I **said** I did not know, and she **offered** to write hers down from now on if I wanted her to.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"She looked at me for about four seconds." Not a reporting verb at all, and it is the most informative line on the page._   ✓ _"I said the ones that go in the book" — three _saids_ in one paragraph, and two of them are answers, so _replied_ would carry the shape._   ? _Did anybody actually say that, or is that what you think they meant?_ — _she offered_ is the one to check, and the page is right: the words were an offer.'));
out.push(S('Stage 7R · Share'));
out.push(A('Four or five _saids_ a paragraph before, one or two after. If anybody\'s conversation has changed its **meaning** in the rewrite, that is 10.5 arriving early — note it, name it, and say that the whole of 10.5 is about it.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I rewrote the Unit 3 report about Jad and read both versions to my wife, who was not there. She asked a question about the second one: she asked why a woman of forty-eight would make a boy of nineteen say "nothing" again and listen to himself. Nobody asks a question about a list of announcements. The first version has four "saids" in it and she said nothing at all when I read it, and I thought that was because it was boring, and it was because there was nothing in it to ask about.']));

// ===================== 10.2 =====================
out.push(pb());
out.push(h2('10.2  She asked whether the trolley was back'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The two things that go wrong are the **word order** — students keep the inversion — and the missing _if_ or _whether_ on yes/no questions. Both appear in the first three attempts, reliably.'));
out.push(A('**b** **1** _She asked where the trolley **was**._   **2** _She asked **whether/if** I **had** asked._   **3** _She asked when I **had written**._   **4** _She asked **if/whether** I wanted it back._   **5** _She asked who **had told** me._'));
out.push(NOTE('Three things happen and **two of them are deletions**: the tense shifts, the inversion disappears, and _do / does / did_ vanish completely. Teaching it as two deletions rather than as a new structure halves the time it takes, because students stop looking for something to add.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – she asked one question and got an answer she had not expected.'));
out.push(A('**b** **1** About ninety seconds, standing up, at the handover on 12 May.   **2** She had known for two years that her own errors all fell on fifth nights, and had never told anybody, because she thought it was her.'));
out.push(A('This is the pay-off of 8.7, where the advice was to ask one question and ask for nothing. The result is better than any of the three things Rasha had been trying to get, and it cost ninety seconds. Say so, and connect it to 6.3 and 8.4: this is the fourth time in the book that a two-year silence has been ended by one sentence, and the class should be the ones to notice.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _She asked whether I was keeping a list._ Hard to answer: it reveals that I have been recording my own mistakes.',
  '**2** _She asked who had told me to ask._ The hardest. There is no honest answer that does not sound like an accusation of somebody.',
  '**3** _She asked whether I had thought it was me as well._ Hard in a different way: it is an offer of company and it has to be answered yes.',
  '**4** _She asked what I was going to do._ Easy to answer honestly — _I did not know_ — and hard to answer well.',
  '**5** _She asked how long I had known._ Easy for me, nine months; it was the question **she** had been avoiding, and her answer was two years.',
]));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Have you ever asked for it in writing?',
  '**B:** Once, in March.',
  '**B:** You asked whether I had ever asked for it in writing.',
  '**A:** Word order?',
  '**B:** Right — no inversion, and the _have_ became _had_ and then there is no _do_ anywhere, because there never was one.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The hardest question is nearly always _who told you_ or _did you think it was you_ — one because it exposes somebody else and one because it exposes the speaker. Both are the questions that actually move a conversation, and both are reported with no inversion, which is the only grammar point in the cycle.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _I asked her whether she had ever been told why the second door was welded. She said, as the depot office, that nobody had asked her in nine years and that she had assumed everybody knew. I asked when the file had been started, and she said 2011._',
  '**b** _I have not been asking for nine years. I think the real answer is that there is nothing in the file because the welding happened before 2011, and that she knows who would know._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Rasha asked her, at the handover on the twelfth of May, standing up, in about ninety seconds. She asked her whether her own errors fell on the fourth and fifth nights of a block; she did not ask for her record and did not tell her why she was asking. The other nurse asked her what she meant by errors, then asked whether she was keeping a list, then asked who had told her to ask — and Rasha says that was the only one of the three she did not want to answer. She said nobody had told her to ask and that she had been thinking about it since February. The other nurse looked at her for about four seconds and then said that hers are all on the fifth, every one, and that she had known for two years and had never said it to anybody because she thought it was her. Two years, eleven metres away, on the opposite pattern. She asked Rasha whether she had thought it was her as well, and Rasha said yes, for nine months. Then she asked what Rasha was going to do, and Rasha said she did not know, and she offered to write hers down from now on. Ms Huda asked for a count of the reporting verbs: six "askeds", all of them right, because that whole conversation was questions.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ She asked where was the trolley. → ✓ where the trolley **was**.   ✗ She asked did I want it. → ✓ **whether/if** I wanted it.   ✗ She asked me where is it? → ✓ no inversion and **no question mark**.   ✗ She asked to me → ✓ She asked **me**.   ✗ _if_ after a preposition or before _or not_ → ✓ **whether**.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Eleven exchanges; nine of them are questions.'));
out.push(A('**2** _Who had told her to ask._ Because there is no honest answer to it that does not sound like an accusation of somebody.'));
out.push(A('**3** That it came out **after a question she had not asked** — the one statement in ninety seconds, and it arrived sideways.'));
out.push(NOTE('The last paragraph is the model for the whole of Lesson B: _nine of the eleven are questions. We were both asking because neither of us wanted to be the one who had said something first._ The class should count their own conversations before interpreting them, which is 7.6 and 9.5 arriving in a different form again.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE DEPOT OFFICE, TUESDAY** · T. Ayoub',
  'I asked her whether anybody had ever been told why the second door of bus 7 was welded.',
  'She asked me which bus. I said bus 7, the one I have driven since 2017.',
  'She asked whether it was causing a problem. I said no, and that I had been wondering about it for nine years.',
  'She asked why I was asking now. I did not want to answer that one, because the honest answer is that somebody in an evening class told me to list what I could not rule out, and that sounds ridiculous in a depot office.',
  'Then she said that nobody had asked her in nine years and that she had assumed everybody knew.',
  'She asked whether I wanted her to look. I said yes.',
  '**What I notice, writing it out.** Seven exchanges and five of them are questions, and four of the five are hers. She was finding out whether I was complaining before she would tell me anything, and I do not blame her for that at all.',
]));
out.push(S('Stage 7 · Write freely (sample, 172 words)'));
out.push(SAMPLE([
  '**THE CORRIDOR, THURSDAY** · S. Dibo',
  'I asked Mr Fouad whether he had ever shown anybody else the projector.',
  'He asked whether I meant in our department. I said I meant in the school.',
  'He asked how many times I had used mine since January. I said four, and that one of them was alone.',
  'He asked whether I wanted to know what he thought, and I said yes, and then he asked a question I have been thinking about ever since: he asked whether anybody had asked **me** for anything in twenty-four years.',
  'I said that I did not understand the question. He asked it again differently: he asked whether anybody in that building had ever come to me and asked me to teach them something.',
  'I said no.',
  'He said that eleven people had asked him things since September and that he is thirty-four and has been there six years, and he asked whether I had noticed that I am the person who asks.',
  '**What I notice, writing it out.** Nine exchanges, seven questions, and six of them are his. I went into that corridor to find out about a machine.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"I went into that corridor to find out about a machine." The last line turns the whole page round, and it is four words longer than it needs to be, which is right._   ✓ _"He asked it again differently" is a reporting verb doing something no verb on the list does; keep it, and notice that you invented it._   ? _Which question did you not want to answer?_ — the page does not say, and the fourth one looks like it.'));
out.push(S('Stage 7R · Share'));
out.push(A('Most of the conversations are more than half questions. One sentence and no more: two people asking each other things are usually both waiting for the other one to say something first. Then move on; the cycle does not survive being explained twice.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  'I asked the workshop clerk where the second Ward 4 trolley is. Four exchanges.',
  'She asked which ward. I said four.',
  'She asked whether I had a reference number. I said I did not and that nobody on the ward has ever been given one.',
  'She asked whether I knew that the ward is supposed to raise a chit when equipment goes down. I said no, and that in five weeks nobody had mentioned a chit to me.',
  'Then she said the trolley is in the workshop, waiting for a wheel bearing that was ordered in March, and that she has been waiting for somebody from Ward 4 to ring her since February.',
  'Three questions, all hers, and one statement, and the statement is the answer I have been trying to get for five months.',
]));

// ===================== 10.3 =====================
out.push(pb());
out.push(h2('10.3  She told me to put it in writing'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The answer to the harder half is that you **cannot** tell from the words: _tell me when you go out_ is an instruction from an owner and a request from a colleague, and the verb you choose when you report it is where that judgement goes. That is the cycle.'));
out.push(A('**b** **1** _She **told** me to put it in writing._   **2** _She **asked** me to wait._   **3** _He **told** me **not to** open it before the ticket was signed._   **4** _She **advised** me to ask him._   **5** _He **reminded** me to bring the list._'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – what he said to his three men, and what they said back.'));
out.push(A('**b** **1** _asked_ — because the ministry **told** them and he **asked** them, and if he reports his own sentence with _told_ he has put himself in the ministry\'s voice, which is the thing he said he would not do.   **2** To write down the first and last day of the ministry work and put it on the wall under their page.'));
out.push(A('Hassan\'s request is the best thing in the unit and it comes from the person with the least standing in the shop: _with a date on the end it is a thing you get through; without one it is just how the shop is now._ Nineteen years of taking work Bassel did not want, and the man who sweeps a floor that was never his job solved it in nine seconds. Read it without comment.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _She **told** me to put it in writing._ A manager, with the standing to instruct.',
  '**2** _He **asked** them to tell him when they went out._ The owner, who had the standing to tell and chose not to use it — and the verb is the only record of that choice.',
  '**3** _He **told** them **not to** put a hand near the rollers while it was running._ One of the two real rules; _asked_ would be wrong and dangerous.',
  '**4** _She **advised** me to ask them._ / _She **suggested** asking them._ ⚠ ~~she suggested me to ask~~.',
  '**5** _She **reminded** me to bring the dates._ _Reminded_ says I already knew, which is a small courtesy and is usually true.',
]));
out.push(A('Item 2 is the one to spend time on. Bassel **had** the authority to tell and did not use it, and the only trace of that decision anywhere is the verb in his own shop book. That is the strongest possible case for choosing a reporting verb deliberately.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** "Tell me when you go out." — from the shop owner.',
  '**B:** He asked them to tell him when they went out.',
  '**A:** Why that verb?',
  '**B:** Because he has the standing to tell and he said afterwards that he was asking, and he gave a reason, which an instruction does not need.',
  '**A:** And with the other one?',
  '**B:** Then it would mean he had used the authority the ministry gave him, which is the one thing he said he would not do.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The commonest error is choosing _told_ for a request, and it is not grammatical: students default to _told_ because it is shorter and because they are reporting somebody senior. Point out the consequence — reporting a request as an instruction makes the asker into an orderer, and in a shop book or a set of minutes that is the only record there will be.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _I asked Hassan to come in at six on the Thursday — I had no standing to tell him, it was outside his hours. I told the boy not to touch the rollers, which is one of the two rules and I do have the standing. And I reminded Abu Rida to take the dates off the wall in October, which he already knew._',
  '**b** _(from the partner)_ _The second one you reported as "told" and it is right. The first one you first said as "told Hassan" and corrected yourself, and that correction is the whole of this cycle._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Bassel did it on the Wednesday morning, with the page on the wall and the three of them standing there. He told them that condition seven had come from the ministry and was not his, and that he thought the prayer clause was wrong and had written about it, and that nobody in the shop was going to be watched by him. And then he asked them to tell him when they went out of the building between seven and six. Samira pointed out that he had said "asked", and he said he had, and that he is going to keep saying asked, because the ministry told them and he asked them: if he reports his own sentence with "told" he has put himself in the ministry\'s voice, which is the exact thing he said he would not do. All three did it from that morning without being reminded once. And Hassan asked him to do something he had not expected: he asked him to write down the first and last day of the ministry work and put it on the wall under their page, and he explained that with a date on the end it is a thing you get through and without one it is just how the shop is now. Bassel said Hassan did not tell him and did not advise him — he asked him, and gave a reason. It went up on the Thursday, in Bassel\'s own handwriting.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ He said me to wait. → ✓ He **asked** me to wait.   ✗ He told me to not open it. → ✓ **not to** open it.   ✗ He told me don\'t open it. → ✓ told me **not to** open it.   ✗ She suggested me to ask. → ✓ She **suggested asking** / She **advised me to** ask.   ✗ _told_ for your own request → ✓ _asked_, and mark it.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Whether it included going to the yard. Bassel said no, only the building — and then **changed his mind in front of them** and said the yard as well, because the yard is outside and he had not thought about it.'));
out.push(A('**2** The first and last day of the ministry work, on the wall under their page. Because with a date at the end it is a thing you get through, and without one it is just how the shop is now.'));
out.push(A('**3** So that nobody thinks the ministry wrote it.'));
out.push(NOTE('Changing his mind in front of them is the only evidence that will ever exist that Bassel\'s request was a request, and he writes it down. Teach it as a move: **if you changed your answer in front of somebody, record it.** It costs one sentence and it is worth more than any assurance about how you intended the thing.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE NIGHT STAFF, 1 JUNE** · R. Barakat · ward book',
  'This evening I told Sister Nasr and the two agency staff that the three-night trial starts tonight, that it is mine and not theirs, and that nothing about their own rota has changed.',
  'Then I **asked** them — I did not tell them — to write the time the round finished in the book every night, including the nights when it finished on time. I told them why: that a column of identical numbers is evidence and a gap is not.',
  'One of the agency staff asked whether she should write the reason as well, and I said no, just the time, and then I changed my mind in front of them and said the reason too if there was one, because a time with no reason is a number and a time with a reason is a finding.',
  'Then Sister Nasr asked me to do something. She asked me to write down, before the trial starts, what I expect to happen — so that in September nobody can say afterwards that it is what I always said. She explained that she has watched two people be right after the event.',
  '**It is written and sealed and it is in the drug cupboard.** 1 June. I expect the errors to move to the second and third nights or to stop, and I expect there to be some.',
]));
out.push(S('Stage 7 · Write freely (sample, 174 words)'));
out.push(SAMPLE([
  '**ROOM 9, MONDAY** · S. Dibo',
  'This morning I told the three of them in the department that I am moving chapter 7 to the second term in my own classes and that the four June papers are in the folder if anybody wants to look at them.',
  'I **asked** them — I did not tell them and I have no standing to tell anybody anything — to do the same mark analysis in June if they move it, and I told them why: that one class is not evidence and four classes might be.',
  'Mr Barakat asked whether I had shown the papers to the head of department. I said not yet, and then I changed my mind in front of them and said I would do it this week rather than in June, because waiting until June means waiting for the thing I am predicting.',
  'Then the youngest of the three asked me to do something. He asked me to show him how to do the mark analysis, because he has never done one and did not want to ask in front of the others.',
  'He **asked** me. In twenty-four years nobody in that room has asked me to teach them anything, and the first person who did waited until two of them had left.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"the first person who did waited until two of them had left." You have reported a request and then recorded the condition under which it was possible._   ✓ _"I have no standing to tell anybody anything" is in the sentence as an aside and it is the reason for the verb; it deserves its own clause._   ? _What did anybody ask you back?_ — two things, and the second one is why the page exists.'));
out.push(S('Stage 7R · Share'));
out.push(A('Fewer than half of the pages have anybody asking anything back. Ask the question and leave it: a conversation in which nobody asked anything back tells you something about the room, and the class can finish the sentence without help.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I asked the two men to tell me if the counter telephone rings while I am out at the bank. Not told — asked, because they do not work for me, they are my brother and my cousin and they are doing me a favour. What they asked me back was whether they should answer it, which I had not thought about at all, and which is a much better question than mine: a telephone that rings and is not answered tells a customer the shop is shut. So now they answer it and write the name down, which neither of us would have arrived at if my cousin had not asked.']));

// ===================== 10.4 =====================
out.push(pb());
out.push(h2('10.4  Said, explained, admitted, pointed out'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Use a real sentence from the board sheet kept from 10.1. The two insults are _claimed_ and _alleged_; _insisted_ is close behind and is the one students do not recognise as an insult until it is reported about them.'));
out.push(A('**b** Neutral: **1** _said_ · **7** _added_ · **5** _pointed out_ _(nearly — it concedes the fact is true)_. Not neutral: **2** _explained_ (the reason was good) · **3** _admitted_ (it cost the speaker) · **4** _claimed_ and **8** _alleged_ (we are not vouching for it) · **6** _insisted_ (they would not let it go).'));
out.push(A('The exercise works because the class reports **its own** sentence eight ways. A student who hears a thing they said reported with _claimed_ understands the cycle instantly, and no explanation afterwards adds anything.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – four verbs that give an opinion nobody voted on.'));
out.push(A('**b** **1** _claimed_ — because she measured the ground twice with a borrowed tape and tabled the measurements, and _claimed_ tells the reader the writer is not vouching for it. _(She also calls _insisted_ unfair, on the grounds that she said it once.)_   **2** That _said_ is the only verb in the list that gives nothing away, which is exactly why the class was using it sixty-three times — and that it is not a weak choice but the right one whenever you do not want to put an opinion in.'));
out.push(NOTE('Ms Huda\'s analysis of **why** the four verbs appear is the transferable part, and it is not about malice: _the person with the position gets explained, the person asking for something gets claimed and insisted, and the decision not to decide gets noted._ That is the default shape of minutes everywhere, written by people in a hurry who were not in the argument, and knowing it is how you read any record of a meeting you were not at.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1 said** — _She said the survey was wrong and that she had measured it twice._ Neutral, and perfectly adequate.',
  '**2 explained** — _She explained that the survey was wrong and that she had measured it twice._ Her reason was good; a reader takes her side.',
  '**3 pointed out** — _She pointed out that the survey was wrong._ The fact is true and had been missed. The strongest honest verb available to her.',
  '**4 claimed** — _She claimed the survey was wrong._ We are not vouching for it; the measurements disappear.',
  '**5 insisted** — _She insisted that the survey was wrong._ She would not let it go; the reader is tired of her.',
  '**6 added** — _She added that she had measured it twice._ Correct only if it came after something else.',
  '**7 noted** — _It was noted that the survey may be inaccurate._ Nothing will happen, and the verb says so.',
]));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** "The survey is wrong; I measured it twice." — said by a student, and the writer thinks she is difficult.',
  '**B:** A fair writer would say _pointed out_, or at least _said_. An unfair one would say _claimed_.',
  '**A:** What is the difference?',
  '**B:** _Pointed out_ keeps the tape measure in the sentence. _Claimed_ takes it out and leaves an opinion, and in three years the only reader will be somebody who was not there.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The pattern is reliable and worth writing up: the unfair verb is _claimed_ or _insisted_ when the speaker is **asking** for something, and _explained_ when the speaker is **refusing** it. Once a class can see that, it can read any set of minutes in about forty seconds.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Mine: I said that one trolley cannot run a five-bay ward. Somebody who disagreed would write that I "repeatedly raised concerns about equipment", which is three of the unfair verbs in one phrase. And I think the record says "concerns were raised", because I have seen the notice that answered it._',
  '**b** _I have seen one record of something I said: nineteen forms with the word "staffing" on them, in my own handwriting. That is the only record, and the verb in it is mine._',
]));
out.push(A('Answer **b** is the most sophisticated thing a student can arrive at in this cycle, and it joins 7.2: the record of what Rasha said is a record she wrote herself, in the only box that was open to her. The reporting verb and the tick-box are the same problem.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lubna said the minutes of the faculty meeting came round and that four verbs in them are doing something nobody voted on. Ms Sweidan claimed that the 1974 survey is inaccurate; the head of department explained that resources are limited; Ms Sweidan insisted that the workshop should be open after six; the committee noted the request. Jad asked what is wrong with claimed, and she said it means she said it and we are not saying it is true — and she measured that ground twice with a borrowed tape and brought the measurements, so the word is showed, or at worst said. The head of department explained, which means he gave a reason and the reason was good, and what he said was "resources are limited", which is four words and explains nothing. She said the workshop thing once, and you cannot insist on something once: insisted means she would not let it go, and it is the word you use about somebody you found tiring. And noted is the one that means nothing will happen. Ms Huda asked who wrote the minutes, and Lubna said a secretary who was not in the argument and has nothing against her — so the four verbs are not malice: the person with the position gets explained, the person asking for something gets claimed and insisted, and the decision not to decide gets noted. And said is the only verb that gives nothing away, which is why we were all using it sixty-three times.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ He said me. → ✓ He **told** me / said **to** me.   ✗ She explained me the reason. → ✓ explained **to** me.   ✗ He suggested me to go. → ✓ suggested **going** / suggested **that I went**.   ✗ five dramatic verbs in one paragraph → ✓ two _saids_ and three precise ones.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** A single word of what anybody is reported to have said. _The account of what was said is accurate._'));
out.push(A('**2** _Noted_ — because it is accurate: nothing is going to happen, and she would rather the minutes said so plainly than promised anything.'));
out.push(A('**3** The reader in three years who was not there, for whom these are the only record of the meeting.'));
out.push(NOTE('Leaving _noted_ alone is what makes the letter work. A letter objecting to all four verbs is read as an objection to the minutes; a letter that accepts the bleakest verb on the page is read as a point about four verbs. Teach it as a general move — concede the thing that hurts you most and the rest becomes arguable.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To:** the ward manager · **Subject:** The minutes of 29 May — two verbs, and no complaint',
  'Dear Madam,',
  'Thank you for the minutes. The account of what was said is accurate and I am not disputing any of it. I am asking about two verbs, and I do not think either was deliberate.',
  '**Item 4, paragraph 2.** "Sister Barakat claimed that her errors fell on fourth and fifth nights." _Claimed_ tells the reader that the writer is not vouching for it. The record is in the ward book, it was tabled, and the committee read it. I ask for _showed_, or for _said_.',
  '**Item 4, paragraph 4.** "Sister Nasr was offered the same arrangement and was non-committal." _Non-committal_ describes a character. She asked for time and gave a date. I ask for _asked for time until 15 June_, which is what happened.',
  'I am not asking for anything else to be changed, including "no decision was taken on the cause", which is accurate and which I would rather have in plain words.',
  'In September somebody who was not at that meeting will read these minutes and decide whether a three-month trial produced anything. It is for that reader that I am writing.',
]));
out.push(S('Stage 7 · Write freely (sample, 170 words)'));
out.push(SAMPLE([
  '**To:** the depot manager · **Subject:** The 14 April delay report — three verbs',
  'Dear Sir,',
  'Thank you for the report. Everything in it about what was done is correct and I am not disputing any of it. I am asking about three verbs and I do not think any of them was deliberate.',
  '**Paragraph 2.** "Driver Ayoub alleged that the service road was closed." _Alleged_ tells a reader the writer is not vouching for it. The road was closed; the municipality resurfaced it and there is a notice at the junction with a date on it. I ask for _reported_, or for _said_.',
  '**Paragraph 3.** "The depot states that no notification was received." _States_ is the verb for somebody whose account is accepted. In the same report I _allege_ and the depot _states_, and both of us are describing the same missing message.',
  '**Paragraph 5.** "Drivers were reminded of route procedure." Nobody was reminded of anything. Nothing was said to any driver about route procedure on the fourteenth or since. I ask for this one to be removed rather than changed.',
  'I am not asking for anything else, including "no further action proposed", which is accurate and which I would rather read plainly than have softened.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"In the same report I allege and the depot states, and both of us are describing the same missing message." That sentence is unanswerable._   ✓ _"Nobody was reminded of anything" is a different kind of objection — it is a fact, not a verb — and you should say so, because it is the strongest thing in the letter and it is hiding among the verbs._   ? _Which one are you leaving alone?_ — the last paragraph, and the letter says why.'));
out.push(S('Stage 7R · Share'));
out.push(A('_Claimed_, _alleged_, _felt_, _was concerned_ and _requested_ come up most, and in every case the person asking for something got the weak verb. Say the pattern once; the room will supply the examples.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['A news item, nine paragraphs, about a dispute over a building. The tenants "claim", "allege" and "have expressed concern". The owner "explains", "points out" and "states". The municipality "has noted". Nobody in that article is lying and I do not think the man who wrote it meant anything by it, and if you read only the verbs you know exactly whose side the page is on, and so would somebody reading it in ten years with no memory of the dispute at all.']));

// ===================== 10.5 =====================
out.push(pb());
out.push(h2('10.5  What was said and what was meant'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Use three notes that invite a conclusion — _"we will look at it" · "leave it with me" · (no answer)_ — and three that do not. The class will add _agreed_, _promised_ and _refused_ to the first three without noticing.'));
out.push(A('**b** Said: **1**, **3**, **5** _(and even 5 is risky — _he said nothing_ is not the same as _he did not answer_)_. Meant: **2** _agreed_, **4** _refused_ — both are interpretations wearing a report.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – her notes and her report.'));
out.push(A('**b** **1** _"We will look at the wording."_ — four words, in quotation marks, at 11.20.   **2** _"The committee accepted that the wording should be revised."_'));
out.push(A('The frightening part is the part to teach: **she was right.** They did change it, three weeks later. And her sentence was still wrong, and if they had not changed it she would have defended it, because she would have remembered the pleased feeling on the bus and not the four words. Being right does not make a sentence a record.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _He said they would look at it. I took that to mean they had decided to change it._',
  '**2** _He said it was not a priority at the moment. My impression was that he meant not this year, but he did not say so._',
  '**3** _He said he heard what I said. I understood him to be closing the discussion; I may be wrong about that._',
  '**4** _He did not answer the question._ _(Not_ "he said nothing" _and not_ "he refused to answer" _— the first sounds like a refusal and the second is one.)_',
  '**5** _He said to leave it with him. I took that to mean he would do something; three weeks later nothing had happened and I now think it meant he wanted the conversation to end._',
]));
out.push(A('Item 4 is the one students get wrong in both directions. _He did not answer_ is the record. _He said nothing_ and _he refused to answer_ are both interpretations, and in a written report the second one is actionable.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Notes say: "We will look at the wording." — 11.20.',
  '**B:** He said they would look at the wording. I took that to mean they had decided to change it.',
  '**A:** And the one-sentence version?',
  '**B:** "He agreed to change the wording" — which puts my reading into his mouth, and if he had not changed it, that sentence would have been the only record and it would have been false.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('_Leave it with me_ and _I will find out and let you know_ tempt every pair into the one-sentence version, because both sound like promises and neither is one. Name them; they are the two most common sentences in working life and neither contains an undertaking.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _I was told in March: "we will see where we are in June." I wrote down that the post would be readvertised in June. What he said was that we would see where we were. It is June and nothing has been readvertised, and my interpretation was wrong — but I would have gone on believing it was what he said._',
  '**b** _If it had been readvertised I would never have noticed the difference. That is the part that bothers me._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Yara went to the committee about the one word, took notes during it and wrote the report afterwards, and this evening she put the two next to each other. The notes are eleven lines of her own handwriting, and the relevant one says: Dr H — "we will look at the wording" — 11.20. Four words of his, in quotation marks, and a time. In the report she wrote that the committee accepted that the wording should be revised, which is not what he said: he said they would look at it. She turned "we will look at the wording" into "the committee accepted", two hours later, on a bus, feeling pleased. Mazen said but they did change it, and she said they changed it three weeks later and that is the thing that frightens her — she was right, and her sentence was still wrong, and if they had not changed it her report would have been a lie that she would have defended, because she would have remembered the pleased feeling and not the four words. So the rule is: report what was said, and if you want to say what you think it meant, put it in a separate sentence with your name on it. Lubna said that is longer, and Yara said it is nine words longer and it is the difference between a record and a memory — if the interpretation is in its own sentence, then when it is wrong, the record is still right.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ He agreed to look at it. _(from "we will look at it")_ → ✓ He **said** he would look at it.   ✗ He refused. _(from no answer)_ → ✓ He **did not answer**.   ✗ He promised to let me know. _(from "I will find out")_ → ✓ He **said** he would find out.   ✗ an interpretation inside the reporting sentence → ✓ a second sentence, marked as yours.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Three: that Dr S accepted anything; that the committee accepted; and that anybody agreed to amend.'));
out.push(A('**2** _Amend._ Nobody used it at all.'));
out.push(A('**3** Because she was right and her report was wrong, and the only reason anybody will ever know the difference is that she wrote four words and a time at 11.20 instead of writing what she felt on the bus.'));
out.push(NOTE('Note the mechanism of the page: the notes are **rougher** than the report, with times and initials and fragments, and that roughness is the whole value. Students tidy their notes when they copy them out, which destroys the only thing a note has that a memory has not.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**NOTES AND MESSAGE, SIDE BY SIDE** · M. Hariri · 14 April',
  '**From my notes, with times.** 10.15 — rang Al-Badr, asked for the manager. 10.18 — man, no name: "the matter has been passed to the supplier." 10.19 — me: can I have a name at the supplier. 10.20 — "I will find out and let you know." 10.20 — asked when. "In due course."',
  '**What I wrote to Al-Nour that afternoon.** "Al-Badr have agreed to give me a contact at the supplier and will come back to me shortly."',
  '**The sentences that are not in my notes.** That anybody **agreed** — a man said he would find out. That it will be **shortly** — he said in due course, which is the opposite. And that "Al-Badr" did anything at all: one man whose name I do not have said two sentences.',
  '**What was said, and what I took it to mean.** A man at Al-Badr said the matter had been passed to the supplier and that he would find out a name and let me know, in due course. I took that to mean I would hear in a week or two, partly because he was polite and partly because I wanted to tell Al-Nour something.',
  '**Why I am keeping both.** It is seven weeks and I have heard nothing, and without the notes I would now be saying that Al-Badr promised me a name and broke their word, and they did not.',
]));
out.push(S('Stage 7 · Write freely (sample, 172 words)'));
out.push(SAMPLE([
  '**NOTES AND ACCOUNT** · L. Sweidan · 14 May faculty meeting',
  '**From my notes, with times.** 11.40 — tabled the two tape measurements. 11.42 — HoD: "the 1974 drawing is what we have." 11.44 — me: the discrepancy is about two metres. 11.45 — HoD: "noted." 11.47 — Dr A: "could we not just remeasure it?" 11.48 — HoD: "resources are limited." 11.49 — chairman: next item.',
  '**What I told my sister that evening.** "They admitted the old drawing is wrong and said they have no money to fix it."',
  '**The sentences that are not in my notes.** That anybody **admitted** anything — the head of department said the 1974 drawing is what they have, which is a statement about possession and not about accuracy. That they have **no money** — he said resources are limited, which is not the same sentence and never has been. And "they": one man spoke, and Dr A spoke on my side, and I had deleted him entirely.',
  '**What was said, and what I took it to mean.** He said the 1974 drawing is what they have and that resources are limited. I took that to mean he knows it is wrong and will not spend anything on it, and I still think that, and it is my reading and not his words.',
  '**Why I am keeping both.** Because Dr A asked whether we could remeasure it, and in my own account of my own argument I had removed the only person who agreed with me.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"in my own account of my own argument I had removed the only person who agreed with me." That is a finding about yourself that the notes produced and the memory could not._   ✓ _"he knows it is wrong and will not spend anything on it, and I still think that" — the _I still think_ is right and the page would be stronger if it also said what would change your mind._   ? _Were you right? And would you have noticed if you had been?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Most people were right about what was meant, and almost nobody would have noticed the difference if they had been. That pair of counts is the whole cycle, and it is the strongest argument for taking notes that a class will ever be given.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  'Notes from Thursday, in the corridor, written on the back of a mark sheet. 10.52 — HoD: "bring me the four papers." 10.53 — me: and the mark analysis? 10.53 — "whatever you have."',
  'My account to my sister on Thursday evening: "He has asked for the whole case."',
  'What the notes do not support: that he asked for a case. He asked for four papers and said "whatever you have" about the rest, which is permission and not a request.',
  'What I took it to mean: that he is going to read it properly. I may be wrong and I will know on Monday.',
]));

// ===================== 10.6 =====================
out.push(pb());
out.push(h2('10.6  Minutes'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Minute the previous cycle of this unit, badly, on purpose: leave out the decision, add something nobody said, and give one student _insisted_. The class will find all three in under two minutes, which is faster than any explanation.'));
out.push(A('**b** **1** everything — no decision, no action, no names. **2** a decision with **no date and no action**. **3** an action with **no decision** above it. **4** nothing at all: no who, no what, no outcome.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – to write the minutes of her own item, because she raised it.'));
out.push(A('**b** **1** Three-night blocks for one nurse, herself, for three months from 1 June, errors counted the same way, report to the September meeting — and the same offered to the other night nurse, who asked for time.   **2** They must not make her the person who was right.'));
out.push(A('The chair\'s sentence — _we are agreeing to the trial, not to the explanation_ — is the most important line in the minute and is the one a summary deletes. Rasha wrote it down at 10.40 and says she would have smoothed it away two months ago. That is 10.5 in action: the limiting sentence is always the first casualty.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _Item: night rota (raised by R. Barakat). She presented 118 shifts and 7 errors and stated the limitations. **Agreed:** three-night blocks for one nurse from 1 June for three months. **Action:** R. Barakat to report to the September meeting._',
  '**2** _Item: equipment (raised by R. Barakat). She said the second trolley had gone to the workshop on 2 February and had not returned. **No decision.** **Action:** the ward manager to obtain the workshop reference by 15 June._',
  '**3** _Item: report 41/APR, paragraph 3 (raised by Y. Mansour). She asked for "was caused by" to be replaced with "contributed to". Dr H said the committee would look at the wording. **No decision taken.** **Action:** none agreed._',
  '**4** _Item: condition 7 (raised by B. Tahhan). He said authorisation under condition 7 would be given by him, standing, in writing. **Noted.** **Action:** none required._',
  '**5** _Item: chapter order (raised by S. Dibo). She tabled four June papers. **Agreed:** one class, one year, mark analysis repeated in June. **Not agreed:** that the printed order is wrong. **Action:** S. Dibo to report in September._',
]));
out.push(A('Items 3 and 4 are the honest ones that students resist writing: _no decision taken, action: none agreed_ records a meeting in which nothing happened, and that is a finding. A minute that converts nothing into something is the commonest dishonesty in any organisation.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** "The rota was discussed."',
  '**B:** Item: night rota, length of blocks (raised by R. Barakat). She presented a record of 118 shifts and 7 errors and stated its limitations. The chair said the committee was agreeing to the trial and not to the explanation. Agreed: three-night blocks for one nurse from 1 June for three months. Action: R. Barakat to report to the September meeting.',
  '**A:** In September somebody reads this. What do they ask?',
  '**B:** They ask what happened in the three months, and the action line tells them who to ask.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('About half of the eight can become real minutes without inventing anything. For the other half the honest minute is _no decision; no action_, and writing that is the skill. A class that invents a decision for every vague line has learnt the format and missed the point.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**b** _The real record of that decision is a line in a circular that says "it was agreed that the arrangements would be reviewed". There is no name, no date and no action, and it has now been reviewed twice by nobody._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['The rota meeting was on the twenty-ninth and they have asked Rasha to write the minutes of her own item, which she says is either very trusting or a way of making sure she cannot complain about them. What was decided: three-night blocks for one nurse — her — for three months from the first of June, with the errors counted the same way, and a report to the September meeting; and the other night nurse was offered the same and said she would think about it. Fares said that is everything she wanted, and she said it is more than she asked for and less than she wanted, and both have to be in the minutes without adjectives. The less is that they did not accept that the blocks are the cause: the chair said, and she wrote it down at 10.40, "we are agreeing to the trial, not to the explanation", which she says is exactly right and which she would have smoothed away two months ago. And the minutes must not make her the person who was right, because in September she would look like somebody who won an argument when what happened is that four people agreed to count something for three months. Nothing about the trolley: it was not on the agenda and she did not raise it, and the minutes will say nothing, which is honest and is the thing she will be angriest about in September. Ms Huda told her to put that sentence somewhere that is not the minutes.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ The rota was discussed. → ✓ an item is not a minute: who raised it, what was decided, who acts.   ✗ Concerns were raised. → ✓ by whom, about what, with what outcome.   ✗ _Agreed that the trial would run_ → ✓ decisions are **not** backshifted: _Agreed: the trial **will** run_ / _runs from 1 June_.   ✗ an adjective anywhere → ✓ delete it.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** _The chair said that the committee was agreeing to the trial and not to the explanation._'));
out.push(A('**2** That no decision was taken on the cause and none was sought; and that the second trolley was not raised, because it was not on the agenda.'));
out.push(A('**3** So that the report happens even if the trial goes against her — which is 8.3\'s _what would make me wrong_ written into a formal record.'));
out.push(NOTE('_Whatever the outcome_ is four words and it is the most honourable thing in the minute. It commits her to reporting a result she will not like, in a document she wrote herself, about her own request. If a class takes one sentence from this unit into a real meeting, this is the one.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**MATHEMATICS DEPARTMENT · MEETING, 3 JUNE · ITEM 2** _(minuted by S. Dibo, who raised the item)_',
  '**2. Order of chapter 7 in the third-year scheme.** Raised by S. Dibo.',
  'S. Dibo tabled the June papers for 2022, 2023, 2024 and 2025 and a mark analysis of her own classes. She said chapter 7 content had appeared in all four papers, worth between 8 and 14 marks, and that the printed scheme places the chapter in the third term. She stated the limitations: one school, one subject, her own mark analysis, and no information about other schools.',
  'The head of department said the printed scheme is issued by the directorate and that the department cannot alter it.',
  'Mr Barakat asked whether a department could run a different internal order. The head of department said it could.',
  '**Agreed:** S. Dibo to teach chapter 7 in the second term in her own classes in 2025–26, with the same mark analysis repeated in June 2026.',
  '**Not agreed:** that the printed order is wrong.',
  '**Action:** S. Dibo to report to the September 2026 meeting, whatever the outcome.',
  '**Not raised:** what other schools do.',
]));
out.push(S('Stage 7 · Write freely (sample, 168 words)'));
out.push(SAMPLE([
  '**AL-BADR COMMUNICATIONS · NOTE OF MEETING, 2 JUNE · ITEM 1** _(written by M. Hariri, who asked for the meeting)_',
  '**1. Repairs to one model, September to April.** Raised by M. Hariri.',
  'M. Hariri presented a list of fifteen repairs to one model between 3 September and 2 April, with dates, all purchased from two shops and sold between January and March, with an uneven adhesive line visible under a lamp in fifteen out of fifteen. He stated the limitations: one counter, one city, seven months, no measurement of the adhesive, and no access to any other repairer\'s records.',
  'The manager said the matter had been passed to the supplier in April.',
  'M. Hariri asked for the name of a person at the supplier. The manager said he would find out.',
  '**Agreed:** nothing.',
  '**Action:** the manager to provide a name at the supplier. No date was given and M. Hariri asked twice for one.',
  '**Not decided:** whether the fifteen units came from one batch.',
  '**Not raised:** compensation. M. Hariri said at the start that he was not asking for any and the manager did not refer to it.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"**Agreed:** nothing." Two words, and anybody reading this in a year knows exactly what the meeting produced._   ✓ _"M. Hariri asked twice for one" belongs in the action line and it is a reproach in a document that is otherwise clean; it is also the single most useful fact on the page, so keep it and move it._   ? _Who does what by when?_ — the manager, no date, and the page says so.'));
out.push(S('Stage 7R · Share'));
out.push(A('Very few of the real records have an action line. All of the room\'s own minutes now do — and that is a concrete thing each of them can take to work, which is rare in a language course and worth saying out loud.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I minuted the handover and gave it to the day sister. She changed two things. She took out the word "unfortunately", which I had not noticed writing, and she added a line: "Not raised: the missing clipboard." I had left it out because it is mine and because I did not want to look as though I was complaining about a clipboard, and she said that in two months a clipboard is exactly the kind of thing nobody will remember was missing.']));

// ===================== 10.7 =====================
out.push(pb());
out.push(h2('10.7  Review & Mediate: Telling somebody who was not there'));
out.push(S('Stage 1 · Unit 10 quiz – corrections'));
out.push(A('**1** He **told** me he had finished. / He **said to** me…   **2** She said that she **would** send it.   **3** She asked where **the trolley was**.   **4** She asked **whether/if** I wanted it back.   **5** He told me **not to** open it.   **6** She explained **to** me the reason. / She explained the reason **to** me.'));
out.push(A('Items **1** and **6** are the pattern errors — _say_ and _explain_ take no person directly — and items **3** and **4** are the two deletions. Those four between them account for most of the mistakes in the sixty-three reports in this book.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** She says Account A was **kinder** and that she would have believed it, and that it took **two** things away from her. The first is the **date**: Account A does not say that the offer closes on 15 June, and she read it on the 9th — six days, and the kind version would have cost her the trial. The second is that Account A makes the committee **agree** with Rasha, and if the committee agrees with Rasha then her own two years of thinking it was her becomes a mistake she made; the chair in fact said they were agreeing to the trial and not to the explanation, so nobody has decided anything about either of them, and she would rather be undecided than wrong.'));
out.push(A('_She would rather be undecided than wrong_ is the sentence the unit ends on, and it is worth sitting with. A kindly summary, written by somebody who likes her, made her wrong in one sentence — and the cost of that is not hurt feelings but fourteen years of her own experience being reclassified as an error. Nothing in the book makes a better case for accurate reporting.'));
out.push(S('Language box – reporting a conversation to somebody who missed it'));
out.push(A('No exercises. Use it as the checklist for Stage 3. Two habits to drill: **dates and deadlines first**, and **quote the limiting sentence**. Everything else in the box follows, and the third rule — report first, advise second, never in the same sentence — is 8.1 arriving again at the end of the unit.'));
out.push(S('Stage 3 · Practise (sample – Meeting A, a school department)'));
out.push(SAMPLE([
  'Two dates before anything else: the trial runs for the year 2025–26, and the mark analysis has to be repeated in June 2026, which means whoever does it has to set it up in September.',
  'S. Dibo tabled four June papers and her own mark analysis, and she stated the limitations herself — one school, one subject, her own figures, nothing about other schools.',
  'The head of department said the printed scheme is issued by the directorate and the department cannot alter it. Mr Barakat asked whether a department could run a different internal order, and the head of department said it could. That exchange is the whole reason anything was agreed.',
  'Agreed: one class, one year, the same analysis in June. **Not agreed: that the printed order is wrong.** That is the sentence a summary would delete, and it is the one that matters, because it means nobody has conceded anything about the syllabus.',
  'Not raised: what other schools do.',
  'And if you want to know what I would do: if I were you I would move it too, and the thing I had to think about is that you have the same four papers and a class of twenty-nine.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Meeting A: a kind summary turns _not agreed: that the printed order is wrong_ into "they agreed with her". Meeting B: it turns the complete absence of any repair date into "they are fixing it". In both, what is lost is a **negative**, and negatives are the first thing a friendly summary deletes.'));
out.push(S('Stage 4R · Report – mediation'));
out.push(A('Mark five things: dates first; the limiting sentence quoted; the listener\'s own contribution reported accurately; what was not decided and not raised; and the advice **after** the report and separate from it. The model also ends with a decision of the reporter\'s own — to go back to the last thing they summarised and find the date they left out — which is the question to put to the whole class at the end of the unit.'));
out.push(S('Stage 5 · Exam practice – B1 Preliminary Reading Part 3'));
out.push(A('**1** B   **2** B   **3** C   **4** C   **5** C'));
out.push(A('_Notes:_ **1** _what interests her now is not the trial but a sentence the chair said_ — the distractor A is what the whole paragraph is about and is explicitly rejected. **4** is the hard one: B is true of the situation and is not her reason; her reason is that a decision would make her **past belief** a mistake. **5** is the title doing its work — _the kind version_ — and the three distractors are each a claim the text does not make.'));
out.push(NOTE('Reading Part 3 has five questions and the most common loss is question 4 or 5 — the one about **why** somebody feels something, and the one about the writer\'s overall point. Teach two habits: for a _why_ question, find the sentence with _because_ or a colon in it; for the main-point question, read the title and the last paragraph before the options.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  'Two dates first: the offer of a place on the trial closes on the fifteenth of June, and the trial itself starts on the first.',
  'I presented the 118 shifts and the seven errors and I stated the limitations myself — one nurse, my own records, two entered late and marked, no comparison group, and the trolley.',
  'The chair said, in these words: "we are agreeing to the trial, not to the explanation." That is the sentence that matters, because it means nobody has decided anything about why either of us makes mistakes on fifth nights.',
  'You said your own errors fall on fifth nights and that you had not reported it, and you asked for time; it was agreed that the offer stays open to you until the fifteenth.',
  '**Nothing was decided about the cause**, and nobody asked for it to be.',
  '**Not raised:** the second trolley. It was not on the agenda and I did not raise it.',
  'If you want to know what I would do: if I were you I would take it, and the thing I had to think about is that you have done fourteen years of fifth nights and I have done nine months.',
]));
out.push(S('Stage 7 · Exam practice – B1 Preliminary Writing Part 2'));
out.push(A('Both out of 20 on Content, Communicative Achievement, Organisation and Language. The **article** must answer the notice\'s question — _was it kindness, or was it hurry?_ — and a script that only tells the story cannot reach the top band. The **story** must begin with the given sentence word for word, and candidates mis-copy this one because it is long: have them copy it before planning anything.'));
out.push(SAMPLE([
  '**Question 1 — article (sample, 147 words)**',
  '**What the kind version left out**',
  'I was in a meeting for ten minutes of an hour, and afterwards two people told me what had happened.',
  'The first version was the kind one. The case had been overwhelming, the committee had more or less agreed before the end, and I had been offered the same arrangement and should take it. I read it and I felt better about the whole thing.',
  'The second version was two paragraphs longer and had dates in it. One of those dates was the fifteenth of June, which was when the offer closed. I read the kind version on the ninth.',
  'So: kindness or hurry? I think it was kindness, and I think that is worse, because hurry leaves gaps in random places and kindness takes out exactly the things that would worry you — the deadline, the sentence where somebody refused something, the fact that nothing was actually decided.',
  'If somebody tells you about a meeting you missed, ask them for the dates. Then ask them what was **not** agreed.',
]));
out.push(SAMPLE([
  '**Question 2 — story (sample, 143 words)**',
  'She read both accounts and then said that the kinder one had taken something away from her.',
  'We were standing in the corridor outside the drug cupboard, at about ten past eight in the evening, and she had both pages in one hand.',
  'I asked her what it had taken.',
  'She said the date. She said that the kind one did not have the fifteenth of June in it anywhere, and that she had read it on the ninth and had put it in her bag and had felt pleased, and that if she had not been given the other one she would have missed the whole thing by six days.',
  'Then she said there was something else and she did not want to say it in a corridor.',
  'We went and sat in the bay that nobody can see from the station, which is the only place on that ward where two people can talk.',
  'She said: if they had agreed with you, then I have been wrong for fourteen years.',
]));
out.push(S('Unit 10 check  ·  A  Grammar and vocabulary'));
out.push(A('**1** b   **2** b   **3** b   **4** b   **5** a   **6** a   **7** b   **8** b'));
out.push(A('_Notes:_ **1** _tell_ takes the person. **6** _explain_ does not: _explained to me_. **7** the notes say _we will look at it_, so the only honest report is _would look at it_; _accepted_ and _agreed_ are both interpretations. **8** a minute needs a decision line, and _Agreed:_ is it.'));
out.push(S('Unit 10 check  ·  B  Listening (Part 2, matching) – Track 10.15'));
out.push(A('**1** A   **2** B   **3** C   **4** F   **5** D   ·   Not needed: **E**, **G**, **H**'));
out.push(A('Speakers **1** and **4** are the pair to replay. Both are about verbs, and the distractor **E** — _reported their own request as an instruction and regretted it_ — is the opposite of what speaker 4 actually did, built out of his own vocabulary. Part 2 matching always has one option that inverts a speaker.'));
out.push(S('Unit 10 check  ·  C  Writing (sample, 157 words)'));
out.push(SAMPLE([
  '**WARD 4 · HANDOVER MEETING, 14 JUNE · ITEM 2** _(minuted by R. Barakat)_',
  '**2. Recording of round completion times.** Raised by R. Barakat.',
  'R. Barakat said the three-night trial had started on 1 June and that she had asked all night staff to enter the time the round finished every night, including nights when it finished on time. She explained that a column of identical numbers is evidence and a gap is not. She said she had asked and not instructed, and that she has no authority over agency staff.',
  'Sister Nasr said she had joined the trial from 8 June and asked that her own entries be kept separately.',
  'An agency nurse asked whether reasons should be entered as well. R. Barakat said times only, and then said reasons too where there is one.',
  '**Agreed:** times entered nightly by all night staff; Sister Nasr\'s entries kept on a separate sheet.',
  '**Action:** R. Barakat to collect both sheets weekly and to report to the September meeting, whatever the outcome.',
  '**No decision** was taken on the trolley.',
  '**Not raised:** the missing clipboard.',
]));
out.push(S('I can… (Unit 10)'));
out.push(A('Self-assessment; no answers. The three that matter are the fifth, the sixth and the eighth: choosing a reporting verb on purpose and noticing the one you have been given, keeping what was said apart from what you took it to mean, and reporting a meeting deadlines first. A class that ticks the backshift lines and not those three has learnt a tense shift it already had.'));
out.push(box('Looking ahead to Unit 11', [
  'Unit 10 was about carrying somebody else\'s words. **Unit 11** is about packing more into your own — _the man who signed it · the room that has no switch · my sister, who had three children, told me to leave_ — and about the two commas that change a sentence\'s meaning completely. 11.5 is the one students have been getting right by ear for nine units: _the man I met_, with nothing in the middle.',
  'The Unit 10 NEXT box asks for **one sentence containing _who_, _which_ or _that_** from the student\'s own writing in this book, and **one place where two short sentences should have been one**. 11.1 and 11.4 open on them.',
  'Two threads. **Fares and September** is one line in 11.2, in the middle of something else. And the **four envelopes** — the 3.3 and 3.6 homework, the pinned introductions from 1.1 and the sealed notes from 1.4 — are opened in **12.6**. Ask now, in Unit 11, who still has theirs; there is still time for anybody who has lost one to rewrite it.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Unit 10 · Answer Key');
