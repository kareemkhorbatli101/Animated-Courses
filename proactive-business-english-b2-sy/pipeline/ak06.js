// Proactive Business English B2 · Syria Edition · Book 1 · Unit 6 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 6  Three Readers, One Fact'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **This unit is the end of Book 1\'s first half and it is the one learners use most.** **Everybody in the room writes the same fact to more than one reader every week, and almost nobody has ever written the versions side by side.** ⚠ **The unit\'s whole method is to put them in columns**, **and the first time a learner does that they find a discrepancy in their own work within a minute.**',
  '⚠ **Four things are taught and they are taught in a fixed order, which 6.6 then makes explicit.** ⚠ **The sentence · the cores · the dials · the cross-references.** **Each is impossible before the one above it** — **you cannot set a detail dial before you know the reader\'s consequence, and you cannot write a cross-reference before the sentence is fixed.** ⚠ **A class that learns the four and not the order will still produce three different dates.**',
  '⚠ **The one rule in the unit is in 6.5 and it should be said twice:** ⚠ **two documents about one fact that cannot carry a cross-reference to each other are two documents that should not both exist.** **It is the only sentence in Unit 6 presented as a rule, and it is the test learners can apply to anything.**',
  '⚠ **6.7 reveals something about the previous six cycles and should not be given away early.** **The bank letter was read by a credit committee before Mr Haddad saw it, and nobody had ever told Sham Trading that such a committee exists.** ⚠ **The letter survived because it was written for an action and for a comparison, and not for a person** — **which is the general case the whole unit has been building.**',
  '⚠ **Word counts.** Stage 6 asks for **80 words or more** and stage 7 for **200 to 240**. ⚠ **Cycle 7\'s exam task is Writing Part 2, 120 to 140 words, 20 marks**; **the exam practice is Reading Part 1, matching, seven questions, the second time in this book.**',
], C.grey, C.navy));

// ===================== 6.1 =====================
out.push(h2('6.1  One fact, three registers'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The version that was easiest is almost always the one for the reader the writer likes most** — **and that is the one with the hedge in it, which is 6.1\'s whole finding arriving before the lesson.**'));
out.push(p('**b**  *The April receipt will fall into May* = **the bank.** *We are two weeks behind on your April order* = **the customer.** *The plater was down eleven days; we are two weeks behind* = **the yard.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Formality · distance · detail · hedging.**  2 ⚠ **The hedging dial, and it moves with the formality dial**, **because a formal document feels as though it ought to be confident.**'));
out.push(p('⚠ **The error at the centre of this track is worth drawing on the board as four dials with a pointer each.** ⚠ **Formality up, distance up, detail down — all three correct for a bank.** ⚠ **And hedging up as well, which is wrong, and nobody notices because it travelled with the formality.** **Result: *will* to the bank and *should* to the yard** — ⚠ **exactly the wrong way round, since the yard can absorb an uncertainty and a bank has written your figure into its own forecast.**'));
out.push(p('⚠ **The rule to leave them with is one line:** ⚠ **formality up, distance up, detail down — and hedging where the truth is.**'));
out.push(p('**Language box – Practise (sample, one fact three ways):**  _**The fact: the second press is down for four days.** **To the owner:** *the second press will be out of service until Thursday; the night capacity is lost for four nights and the April book is unaffected.* **(formality high, distance high, detail low, hedging: will.)** **To the customer:** *your order still leaves on the 30th. We have lost four nights of capacity and I have checked that it does not touch your date.* **(formality medium, distance low, detail low, hedging: will.)** ⚠ **To the yard:** *the second press is down till Thursday — the drive coupling. Four nights. Nothing moves on the Tannous date.* **(formality low, distance lowest, detail highest, hedging: will.)** ⚠ **Three versions, one hedge.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'You have *will* for the customer and *should* for the owner. Which is true?'],
  ['A', '…*Should*, probably. The coupling is being made in Aleppo and nobody has seen it.'],
  ['B', 'So the customer has been told something you do not know.'],
  ['A', 'I did not want to worry her.'],
  ['B', 'You have not spared her a worry, you have moved it. She will plan on your date and find out in nine days.'],
  ['A', 'And the owner gets the hedge because he can do something about it.'],
  ['B', 'Which is true, and it is a reason to give him more *detail*, not less *certainty*. Those are different dials.'],
  ['A', 'So *should* goes to both.'],
  ['B', '*Should* goes to both, and the customer gets one extra sentence about what you will do if it slips.']
]));
out.push(p('⚠ **That last line is the resolution learners need and the unit implies rather than states.** ⚠ **Levelling the hedging dial downwards feels like alarming a customer** — **and the remedy is not a softer hedge but an extra sentence about what happens if the risk lands.** **The hedge tells the truth; the extra sentence manages it.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners draw four dials and mark each version, then name the dial that moved for the wrong reason. **Typical errors:** a hedge that travels with the formality · detail set by the reader\'s seniority rather than their action · ⚠ **and the content fault, which is a learner who has three versions of one hedge and cannot say which is true.** **If they cannot say, the answer is the weaker one, in all three.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Reader', 'Formality', 'Distance', 'Detail', 'Hedging'], [
  ['**the bank**', '**high**', '⚠ **high — no person in it**', '**low**', '⚠ **_will_**'],
  ['**the customer**', '**medium**', '**low — *your order*, *our plater***', '**medium**', '⚠ **_will_**'],
  ['**the yard**', '**low**', '**lowest — *we are two weeks down***', '⚠ **highest**', '⚠ **_will_**'],
], [1.2, 1.1, 1.3, 1.2, 1.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"For the bank I set formality high, distance high, detail low and hedging at *will*. And the hedging is the same in all three, because the plater runs from the 13th, we do four hundred a month, three hundred and twenty is under a month\'s work and the second press is free at night — so *will* is true, and if it were not, *should* would go to all three including the bank."', '⚠ **Count how many people had a different hedge in different versions — it is usually most of the room** — ⚠ **and then ask the only question that matters: which version was true?** **The answer identifies, in one word, which reader the writer was afraid of.**']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **The hedging row.** **She had *will · will · should***, **with the hedge going to the yard** — ⚠ **because the yard is the only reader she would have to look in the face**, **which is a reason to hedge to a person and not a reason to hedge in a document.**  **2** ⚠ **The plater runs from the 13th, they make four hundred a month, three hundred and twenty is under a month\'s work, and the second press is free at night.** ⚠ **If it were not true, *should* would go to all three including the bank** — **in a formal letter, which is uncomfortable and correct.**  **3** ⚠ **The yard**, **and the bank gets the least.** ⚠ **It is the opposite of what formality suggests**, **because the bank will do nothing with a bearing and Abu Yasser will decide a Saturday with it** — **detail is set by what the reader does, not by seniority.**'));
out.push(stage('6', 'Write with help – sample (141 words)'));
out.push(sample(null, [
  '**THE COUPLING — ONE FACT, THREE OPENINGS. 20 April. B. Nassif. Drafted together, on purpose.**',
  table(['', 'To the owner', 'To the customer', 'To the shop floor'], [
    ['**the opening**', '⚠ **_The second press should be back in service on Thursday 24 April. Four nights of capacity are lost and the April book is not affected._**', '⚠ **_Your order of 140 frames should leave on 30 April as agreed. We have lost four nights of press capacity this week._**', '⚠ **_The second press should be back Thursday. The drive coupling went Monday night, the new one is being made in Aleppo, nobody has seen it yet. Four nights gone._**'],
    ['**formality**', '**high**', '**medium**', '**low**'],
    ['⚠ **distance**', '**high**', '**low**', '**lowest**'],
    ['**detail**', '**low**', '**low**', '⚠ **highest**'],
    ['⚠ **hedging**', '⚠ **_should_**', '⚠ **_should_**', '⚠ **_should_**'],
  ], [1.1, 3, 2.6, 2.5]),
  '⚠ **The hedging row is *should* in all three and it took an argument with myself.** **I wanted *will* for the customer.** ⚠ **The coupling is being made in Aleppo and nobody here has seen it**, **so *will* is not something I know.** **What the customer gets instead is one extra sentence: *if it is not back on Thursday I will telephone you on Thursday afternoon.*** ⚠ **The hedge tells her the truth and that sentence manages it.**',
  '⚠ **And the detail dial again surprised me.** **The shop floor gets the coupling, Aleppo and the fact that nobody has seen it; the owner gets none of those** — **because he will do nothing with them and the fitters will plan their week with them.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three openings in columns, not in sequence', '✓'],
  ['A row for each of the four dials', '✓'],
  ['The hedging row identical across all three', '✓ ⚠ **and the argument with himself is shown, which is the best part**'],
  ['Arithmetic behind the hedge or the certainty', '✗ ⚠ **the reason for *should* is an absence — nobody has seen the coupling — which is sound and is not arithmetic** — **what is missing is what happens to the 30th if Thursday slips**'],
  ['The detail dial set by what the reader will do', '✓'],
], [3.2, 2.8]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: arithmetic behind the hedge. The line I am marking is **_Your order of 140 frames should leave on 30 April as agreed.__** What I found: you have told her Thursday is uncertain and the 30th is firm, and you have not shown how the second survives the first. If Thursday becomes Monday, does the 30th hold? If it does, say so and the *should* stops frightening her; if it does not, she needs that now."_ ⚠ **That is the review the checklist is for: a truthful hedge with no arithmetic under it transfers the uncertainty to the reader whole.**'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only their hedging row. ⚠ **The class says whether it is the same in all three, and if not, which version is true.** ⚠ **Where a learner cannot say which is true, the rule is the weaker one everywhere** — **and the compensation is an extra sentence, not a softer word.**'));
out.push(stage('7', 'Write freely – sample (226 words)'));
out.push(sample(null, [
  'In 2021 I told a customer a delivery was coming on Thursday and told my own manager it was probably coming on Thursday, and the difference was one word I did not notice writing.',
  'The consignment was of valves from Turkey and the uncertainty was a border. What I knew was that the lorry had crossed, which is the hard part, and that the clearance paperwork had been lodged, which usually takes a day and sometimes takes four.',
  'To my manager I wrote: *should clear Wednesday, with us Thursday.* To the customer I wrote: *with you Thursday.* I did not decide to do that. The customer letter was more formal, and I tightened it as I wrote it, and *should* came out with the contractions.',
  'It cleared on the following Monday. Our own fitters had been booked for Thursday by the customer, four of them, and they stood about for two days, and the customer paid them.',
  'What my manager said was not about the lorry. He said: you told me *should* and you told him *will*, and the difference is that I was allowed to plan for both and he was not.',
  'The thing I have never been able to explain is that I was not managing anybody. I was tidying a sentence. The word came out because the sentence read better without it, and it cost a customer four fitters for two days.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: which dial moved for the wrong reason? The line I copied is **_The customer letter was more formal, and I tightened it as I wrote it, and *should* came out with the contractions.__** What I found: the hedge was not removed as a decision, it was removed as punctuation. That is more frightening than the version where somebody chooses to mislead, and it is why the dial has to be checked deliberately rather than felt."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect two of three wrongly-moved dials to be hedging, and all three reasons to be about which reader the writer would have to face.** ⚠ **The sample adds a worse case and it should be named: sometimes the hedge is not removed by courage or cowardice but by tidying** — **and a dial that can be moved by editing has to be checked after the editing, not during it.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks for one fact written for two readers with identical hedging.** ⚠ **Check the hedges first and the registers second.** **Where the two hedges differ, ask which is true and write the weaker one into both** — **and then ask for the extra sentence that manages it, because without that the learner will go back to softening.**',
], C.lblue, C.navy));

// ===================== 6.2 =====================
out.push(pb());
out.push(h2('6.2  What each reader will do with it'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect at least one reader with no action at all**, and that reader is 6.2\'s best material.'));
out.push(p('**b**  The **second**. ⚠ **_I thought you should be aware of the position_ is written for the writer** — **it records that the reader was told, which is a different purpose and should be admitted when it is the real one.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The bank moves a figure in a cash forecast · the customer re-plans and tells her own customer · the yard decides one thing, the Saturday.**  2 ⚠ **Write it, and write it at the top, so the reader knows it is not a request** — **and never send a letter that looks like a request and contains none.**'));
out.push(p('⚠ **The sentence to drill is Mr Attar\'s first answer:** ⚠ **nothing is not an action, and a reader who has to do nothing files the letter and remembers the tone and not the figure.** ⚠ **And the definition of writing for the action is his second: *the question the reader would have to ask is the thing the document is for.***'));
out.push(p('⚠ **The closing distinction is the one that decides register and learners get it backwards:** ⚠ **what tells you how to write is not who the reader is — it is what they will be doing on Tuesday morning.**'));
out.push(p('**Language box – Practise (sample):**  _**The owner** approves four nights of overtime — *I need your initials on the overtime sheet by Wednesday.* ⚠ **The customer** decides whether to hold her own fitters — *your date is unchanged; if that changes I will telephone you on Thursday afternoon.* **The shop floor** plans a week — *four nights gone; the Thursday frames move to Friday and the Tannous order does not move.* ⚠ **The accountant** does nothing at all — **for information, at the top, and two lines.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', '_(reading A\'s letter as a busy reader)_ So you want me to approve something.'],
  ['A', 'No.'],
  ['B', 'Then you want me to tell somebody.'],
  ['A', 'No. You just need to know.'],
  ['B', 'It does not read like that. It has three paragraphs and a date in it and it ends *I would be grateful for your thoughts*.'],
  ['A', 'That is politeness.'],
  ['B', 'It is a request with no object. I have now spent four minutes working out what you want and I still do not know.'],
  ['A', 'So what do I do?'],
  ['B', 'Either find the request, or put *for information: no reply needed* at the top and take out the last line.']
]));
out.push(p('⚠ **The four minutes is the point and it should be stated as a cost.** ⚠ **A letter that looks like a request and contains none costs every reader the same four minutes**, **and the commonest cause is a closing courtesy** — *I would be grateful for your thoughts · perhaps you could let me know your view* — **which converts a notification into a request nobody can answer.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the reader, the action and the sentence, then the question the reader would have asked. **Typical errors:** an action written as a state (*needs to be aware of the cash position*) · the action buried in a subordinate clause at the end · ⚠ **and the content fault, which is a closing courtesy that turns a notification into a request.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Reader', 'What they will actually do', 'The sentence that lets them do it', 'The question they would ask'], [
  ['the bank', 'moves 1.9 million from April into May', '*you will need to move about 1.9 million from April into the first week of May*', '⚠ **is the 28 April instalment affected? — and they ask Mr Ayoub, not me**'],
  ['the customer', 're-plans and tells her own customer a date', '*all 320 will reach you on 2 May; nothing in April*', '⚠ **is it all of it or part? — she needs one date to give one date**'],
  ['the yard', 'decides the Saturday', '*320 due on the 2nd; does the Saturday get us there?*', '*one Saturday or two?*'],
  ['the advocate', '⚠ **nothing**', '⚠ **— he comes off the list**', '⚠ **nothing, and he would reply, and the reply would go in the file**'],
], [1.1, 1.6, 2.2, 1.8]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"For the bank the action is moving about 1.9 million from April into May. My sentence is *you will need to move about 1.9 million from April into the first week of May*. And the question they would ask is whether the 28 April instalment is affected — which I have answered in the next sentence, because if I do not they telephone Mr Ayoub and he is answering a question about cash he has not been briefed on."', '⚠ **Count the readers with no action at all.** ⚠ **Then ask whether those documents are still being sent, and why** — **and the answer is almost always that somebody put them on a list once and nobody takes anybody off anything.**']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Whether the 28 April instalment is affected** — **not the delay at all.** ⚠ **If it is not answered in the first three lines he telephones Mr Ayoub**, **and then Mr Ayoub is answering a question about cash he has not been briefed on.**  **2** ⚠ **Because she needs one date to give one date.** ⚠ *The bulk in early May with the balance to follow* **makes her write a letter nobody can act on**, **and she will telephone to turn the sentence into a date.**  **3** ⚠ **Because he has no action** — **and, being a lawyer, he would reply, and the reply would go into the file and become a thing somebody has to deal with.**'));
out.push(stage('6', 'Write with help – sample (146 words)'));
out.push(sample(null, [
  '**THE COUPLING — WHAT EACH READER DOES. 21 April. B. Nassif.**',
  table(['', 'Reader', 'The action, in a verb', 'What they ask if I do not answer it'], [
    ['**1**', '**Mr Nassif**', '⚠ **initials four nights of overtime on the sheet**', '⚠ **_does this touch the 30th?_ — and if I leave it out he asks the shop floor, who will tell him it might**'],
    ['**2**', '**the customer**', '⚠ **decides whether to keep her fitters booked for the 30th**', '⚠ **_how certain is the 30th?_ — she needs to know whether to hold four men**'],
    ['**3**', '**the shop floor**', '⚠ **moves the Thursday frames to Friday**', '**_what moves and what does not?_**'],
    ['**4**', '⚠ **the accountant**', '⚠ **nothing** — **the overtime reaches her on the wage sheet in May anyway**', '⚠ **nothing — but she would reply asking which cost centre, and there is no answer until the sheet exists**'],
  ], [0.4, 1.9, 3.1, 3.4]),
  '⚠ **Row 1 is the one I had wrong.** **I thought the owner\'s question was about the coupling and it is about the 30th.** ⚠ **An owner asked to approve overtime wants to know what the overtime is buying**, **and if I do not say, he asks the men** — **who will give him a more worried answer than mine, because they are the ones standing at a stopped press.**',
  '⚠ **Row 2 is where the action decided the register.** **She is deciding whether to hold four fitters for a day**, **which costs her about nine thousand if she holds them and nothing happens, and more if she releases them and the frames arrive.** ⚠ **So her letter is not about a coupling at all; it is about how firm the 30th is and when I will tell her if it moves.**',
  '⚠ **And row 4 is a subtraction, and it is the one I argued about.** **She will see the overtime in May on the wage sheet.** ⚠ **Telling her now produces one question I cannot answer yet.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Each action written as a verb', '✓ initials · decides · moves'],
  ['The question each reader asks if you leave it out', '✓'],
  ['Who they ask instead of you', '✓ ⚠ **and row 1\'s answer is the best in the samples: he asks the men, who are standing at a stopped press**'],
  ['A customer given one date, so they can give one', '✗ ⚠ **she is given a firmness and a telephone call, not a date** — **which is right here, and the row should say so**'],
  ['A reader subtracted from the list', '✓ with the argument shown'],
], [3.2, 2.8]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: a customer given one date. The line I am marking is **_decides whether to keep her fitters booked for the 30th.__** What I found: she cannot be given a date because the 30th is the date and the question is its firmness. So the criterion does not apply and you should write that, otherwise the next person to use this table will put a false date in to satisfy a checklist."_ ⚠ **That review is right, and it is the right way to handle a criterion that does not fit: say so in the document rather than forcing it.**'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only the reader they took off the list. ⚠ **The class says what that reader would have replied.** ⚠ **In almost every case the reply is a question the writer cannot yet answer**, **which is the real cost of an unnecessary recipient and is invisible until somebody names it.**'));
out.push(stage('7', 'Write freely – sample (228 words)'));
out.push(sample(null, [
  'There is a man in our group head office who has received every monthly report I have written for six years and I have never met him.',
  'His name is on the distribution list as *Group Operations*. I inherited the list from my predecessor, who inherited it from hers. He has never replied to anything. Nobody in my office knows what he does with the reports, and when I asked, the answer was that he had always been on the list.',
  'Two years ago I left him off, by accident rather than policy, for three months. Nothing happened. I put him back on when I noticed, because leaving somebody off a list feels like a decision and putting them back feels like tidiness.',
  'What he actually does, as far as I can establish, is nothing. He is not a reader at all; he is a file with a name on it. The reports go into a folder in his mailbox and the folder is, I assume, searched occasionally by somebody looking for something.',
  'Which makes him the most important reader I have, and I have never written a single sentence for him. A report that will be searched in four years by somebody with no context needs the quantity, the date and the name of the thing in every paragraph, and mine has them in the first.',
  'He is not nothing. He is the eighteen-month reader, and I have been writing to a person.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: why is that reader on the list? The line I copied is **_He is not a reader at all; he is a file with a name on it.__** What I found: that reframes the whole exercise and it is the bridge to 6.7. Some names on a list are not people with actions, they are archives — and an archive\'s action is being searched, which is a real action and needs the quantity in every paragraph."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect all three reasons to be historical, and expect two of three workplaces never to have taken anybody off anything.** ⚠ **Then add the sample\'s finding, which is the more useful one: a name with no action may be an archive rather than a reader** — **and an archive does have an action, which is being searched by somebody with no context in four years.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks for a real distribution list with a verb beside each name.** ⚠ **Collect the blanks.** **A list where every name has a verb is a list somebody has thought about; a list with three blanks is normal** — **and the right question about each blank is the sample\'s: is this a reader with no action, or an archive whose action is being searched?**',
], C.lblue, C.navy));

// ===================== 6.3 =====================
out.push(pb());
out.push(h2('6.3  What may be left out, and what may never'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The shortest honest version is almost always three things and learners produce four or five**, **the extra being cause.**'));
out.push(p('**b**  **May be left out of a customer letter:** the bearing · that the part came from Homs. **May not:** the 2nd of May · that it is all 320 cartons. ⚠ **The eleven days is the borderline case** — **it may be left out and nine words of it should stay.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Cause, in the detail** — **a bearing is cause and Homs is cause, and nobody outside the yard does anything with a cause.**  2 ⚠ *If they found this out from somebody else, would they feel they had been kept in the dark?* **If yes, it is core, whatever dial it looks like.**'));
out.push(p('⚠ **Hala\'s qualification on cause is the part that gets missed.** ⚠ **Cause in detail goes; *some* cause stays, because a reader wants to know that there is a why and that it is not carelessness** — ⚠ **and *our plater was out of action for eleven days* does that in nine words, where thirty words about a bearing invite a conversation about Aleppo.**'));
out.push(p('⚠ **And the discovery test is the unit\'s best single instrument because it finds things no reasoning about register would find.** ⚠ **The Saturday rota belongs in a customer letter** — **not because she needs it, but because Abu Yasser sees her driver at the gate every fortnight.** ⚠ **The test is about discovery, not relevance: the cost is not confusion, it is her reading of you afterwards.**'));
out.push(p('**Language box – Practise (sample):**  _**The core:** 140 frames · 30 April · and for each reader: the owner, four nights of overtime; the customer, her fitters; the floor, Thursday\'s frames moving to Friday. **Always out:** the drive coupling, Aleppo, that nobody has seen it. **Enough cause:** ⚠ *we lost four nights of press capacity* — **eight words.** ⚠ **Tested and brought in:** that we are paying overtime — **because her own fitters talk to ours on site, and if she hears we paid for four nights to protect her date, she should hear it from me.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Item one: that we are paying four nights of overtime. If she found that out from somebody else, would she feel kept in the dark?'],
  ['A', 'She would not mind at all. It is in her favour.'],
  ['B', 'That is not the question.'],
  ['A', '…She would wonder why I had not mentioned it.'],
  ['B', 'And what would she conclude?'],
  ['A', 'That I tell her what suits me. Which is the opposite of what the letter is for.'],
  ['B', 'So it is core. Item two: the drive coupling.'],
  ['A', 'Nobody will ever mention a coupling to her.'],
  ['B', 'Then it is out, and it is out because it is undiscoverable, not because it is unimportant.']
]));
out.push(p('⚠ **The exchange shows the test\'s one trap, and it is the commonest misuse.** ⚠ **Learners answer *would they mind?* instead of *would they feel kept in the dark?*** **A fact in the reader\'s favour passes the test just as easily as a damaging one** — **because the cost is their reading of the writer, and that is damaged by discovery either way.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the three-part core and the item that passed the test. **Typical errors:** a core with no consequence in it · thirty words of cause · answering *would they mind?* · ⚠ **and the content fault, which is a learner who applies the test to everything the reader does not know** and produces a letter that discloses the whole file.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['', 'The figure', 'The date', 'The consequence for this reader'], [
  ['**the bank**', '**320 cartons**', '**2 May**', '**1.9 million moves out of April; the instalment is unaffected**'],
  ['**the customer**', '**320 cartons**', '**2 May**', '**nothing arrives in April**'],
  ['**the yard**', '**320 cartons**', '**2 May**', '**two weeks to make up; the Saturday question**'],
], [1.2, 1.3, 1.2, 2.3]));
out.push(p('⚠ **The doubtful four, tested:** **the bearing — no, out** · ⚠ **the Saturday — yes, in, one clause** · ⚠ **the plater\'s twelve per cent — discoverable but not about this fact, out** · **the second press being free at night — no, out; it is the arithmetic behind *will*.**'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The core is three hundred and twenty cartons, the second of May, and a different consequence for each of the three. What always goes is the cause in detail — the bearing, Homs, the dates of the stoppage. And the doubtful item that turned out to be core is the Saturday, for Ms Tannous, because Abu Yasser sees her driver at our gate every fortnight."', '⚠ **Count the items that passed the test, and then ask the question that shows the test\'s value:** ⚠ **how many of them would have been left out by anybody thinking about register alone?** **All of them.** **Register cannot see a driver at a gate.**']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **The plater\'s twelve per cent would be embarrassing if a competitor mentioned it, and it has nothing to do with an eleven-day stoppage.** ⚠ **The test asks whether they would feel kept in the dark *about this*, not whether there is anything else they do not know** — **used loosely it turns every letter into a disclosure of everything, and three readers with twelve pages each read none of them.**  **2** ⚠ **It goes into a letter of its own, that week, about the thing itself.** **Mr Haddad would certainly mind hearing about the Beirut negotiation from the trade** — ⚠ **but it is not this fact and not his action here, which is moving a receipt.** ⚠ **The test tells you a thing is core; it does not tell you it is core to *this* document.**  **3** ⚠ **Because nothing about register, audience or action would have put a Saturday rota into a customer letter** — **and eighteen words put it there, after which Abu Yasser can say anything he likes to her driver.**'));
out.push(stage('6', 'Write with help – sample (143 words)'));
out.push(sample(null, [
  '**THE COUPLING — THE CORE, AND THE DOUBTFUL FOUR. 22 April. B. Nassif.**',
  '**The core, in all four.** ⚠ **The figure: 140 frames. The date: 30 April. The consequence: for the owner, four nights of overtime to approve; for the customer, her own fitters on the 30th; for the floor, Thursday\'s frames to Friday; for the wage clerk, four nights on the May sheet.**',
  table(['', 'The doubtful item', 'Found out from somebody else?', 'Decision'], [
    ['**1**', '**the drive coupling and that it is being made in Aleppo**', '**no — nobody will mention a coupling to a customer**', '**out of all but the floor**'],
    ['**2**', '⚠ **that we are paying four nights of overtime to hold her date**', '⚠ **yes — her fitters talk to ours on site**', '⚠ **into her letter, one clause**'],
    ['**3**', '⚠ **that the press is seven years old and has failed twice before**', '⚠ **yes, and from a competitor** — **but it is not about this delay**', '⚠ **out, and it belongs in a capacity paper of its own**'],
    ['**4**', '**that nobody has seen the new coupling yet**', 'no', '⚠ **out of her letter and into the hedge** — **it is why the letter says *should* and not *will***'],
  ], [0.4, 2.9, 2.8, 2.7]),
  '⚠ **Item 3 is where I nearly used the test wrongly.** **Two previous failures of a seven-year-old press is a real thing and a competitor could certainly mention it.** ⚠ **It is not about this delay**, **and a letter that discloses it turns a four-night stoppage into a conversation about whether we can be relied on at all.** **It goes in a paper of its own, to the owner, with a figure on it.**',
  '⚠ **Item 4 is the one I found by accident and it is the most useful.** **It does not go in the letter and it is not out of it either** — ⚠ **it is the reason the letter hedges.** **Some facts belong in a document as a tense rather than as a sentence.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['One figure, one date, consequences per reader', '✓ four consequences'],
  ['The test applied to this fact, not to everything', '✓ item 3 caught'],
  ['An item that is core but not core to this document', '✓ ⚠ **and it is sent somewhere, not just withheld**'],
  ['An item the test found that register would not have', '✓ the overtime'],
  ['Tested items kept to one clause', '✓'],
], [3.4, 2.6]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: an item the test found. The line I am marking is **_out of her letter and into the hedge — it is why the letter says *should* and not *will*.__** What I found: that is a fifth category the unit does not have. Core, out, core-elsewhere — and this one, which is *in the document as a tense*. It is worth a line of its own in anybody\'s notes."_ ⚠ **Read it out.** **The reviewer has found a real gap in the unit\'s own taxonomy.**'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only the item the test found. ⚠ **The class says who would have told the reader, and how soon.** ⚠ **The answer is always a specific person at a specific place** — **a driver at a gate, a fitter on a site, a competitor at a fair** — **and if nobody can name the person, the item has not passed the test.**'));
out.push(stage('7', 'Write freely – sample (227 words)'));
out.push(sample(null, [
  'I learned from a competitor at a wedding that the company I worked for had lost its largest contract six weeks earlier.',
  'He was not being unkind. He assumed I knew, and then he saw that I did not, and he changed the subject so gracefully that I have thought better of him ever since.',
  'Nothing about that contract touched my department. I ran the second works and we made nothing for that customer. There was no decision I would have taken differently, no plan of mine that was wrong, and no action I failed to take. By any reasonable test it was none of my business.',
  'What it changed was everything about how I read the three people above me for the next two years. Not what they told me — what they chose to tell me. Every briefing after that I listened to for what was missing, which is a tiring way to work and not a productive one.',
  'I have never raised it. There was nothing to raise: nobody lied to me, nobody failed in a duty, and the information was commercially sensitive and I was not senior.',
  'But the cost was real and it was paid by them, not me, and they have never known they paid it. I was a less useful person to brief for two years, and the reason was forty seconds at a wedding.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: was it relevant to anything they had to do? The line I copied is **_the cost was real and it was paid by them, not me, and they have never known they paid it.__** What I found: that is the discovery test from the other end and it is the reason the test is not about relevance. The sender loses something they cannot see, measure, or ever be told about."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect two of three to have been irrelevant to anything the writer had to do, and all three to have changed how they read the person afterwards.** ⚠ **Name the asymmetry at the end: the cost is paid by the sender and is invisible to the sender** — **which is why the test has to be applied deliberately, since nothing in experience ever teaches it.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks for the three-part core and the test applied to four things the learner was going to leave out.** ⚠ **Mark the test, not the core.** **For each item, ask who would have told the reader and when** — **and an item that passes with no named person has not passed.**',
], C.lblue, C.navy));

// ===================== 6.4 =====================
out.push(pb());
out.push(h2('6.4  The sentence that must be identical'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Almost nobody has been compared, and almost everybody has written the same sentence twice in different words.** **The second fact is the lesson; the first is why nobody has noticed.**'));
out.push(p('**b**  **No.** ⚠ **A day · five days · and a different month** — **and *expected* is a hedge the first version does not carry.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ *Three hundred and twenty cartons leave here on 30 April and reach Beirut on 2 May* — **with both events in it.**  2 ⚠ **A writer rewriting the same sentence for a different reader cannot help making it fit the register** — **and the load-bearing sentence is not one of the dials.** ⚠ **Copy it and do not improve it on the way.**'));
out.push(p('⚠ **The arithmetic of the three versions is worth putting on the board as three numbers.** ⚠ **_2 May_ is one day. _The first week of May_ is five days. _The end of the month_ is April.** ⚠ **Three dates, and the writer believes she has written one.**'));
out.push(p('⚠ **And the justification is a day that has not happened yet:** ⚠ **in eighteen months somebody will put the three documents side by side, and the copied sentence is the only reason nobody is embarrassed.** **That is the only reason to resist improving it, and it has to be stated, because the pull to improve is real and feels like competence.**'));
out.push(p('**Language box – Practise (sample):**  _**Three versions found:** *the frames go out on the 30th* · *delivery is expected at the end of the month* · *out by Friday.* ⚠ **One day, a week, and a Friday that is the 1st of May.** ⚠ **The sentence: _One hundred and forty frames leave here on 30 April and reach the Homs site on 2 May._** **Quantity, dispatch, arrival, and the site named** — **and it goes into all four documents without adjustment.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Read me the sentence from the owner\'s copy.'],
  ['A', '*One hundred and forty frames leave here on 30 April and reach the Homs site on 2 May.*'],
  ['B', 'And from the customer\'s.'],
  ['A', '*One hundred and forty frames leave here on 30 April and should reach the Homs site on 2 May.*'],
  ['B', 'You have added a word.'],
  ['A', 'It is more honest. The lorry is not ours.'],
  ['B', 'It is more honest, and now the owner has a certainty and the customer has a hedge, and you have done exactly what the cycle is about.'],
  ['A', 'So I take it out.'],
  ['B', 'You put it in all four, or you take it out of all four. Which is true?'],
  ['A', '*Should.* The lorry is not ours in any of the four.']
]));
out.push(p('⚠ **Role card 2 produces the unit\'s most instructive failure: the improvement is genuinely an improvement.** ⚠ **The added *should* is more honest** — **and it has created two promises.** **The resolution is not to abandon the better word but to put it in all of them**, which is 6.1\'s hedging rule arriving from a different direction.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the three versions and what each commits to, then the sentence. **Typical errors:** a sentence with no quantity · dispatch in one version and arrival in another · ⚠ **and the content fault, which is a sentence improved in one copy** — **and the improvement is usually right, which is what makes it hard.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Version', 'What it says now', 'What it actually commits to', 'The copied sentence'], [
  ['**bank**', '*the April receipt will fall into the first week of May*', '⚠ **five days, no quantity, and the wrong event**', '⚠ **_320 cartons leave here on 30 April and reach Beirut on 2 May._**'],
  ['**customer**', '*your order will reach you on 2 May*', 'one day, arrival only', '**the same, word for word**'],
  ['**yard**', '*out by the end of the month*', '⚠ **April, dispatch only, no quantity**', '**the same, word for word**'],
], [1, 1.9, 1.8, 2.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"My three versions said *the April receipt will fall into the first week of May*, *your order will reach you on 2 May* and *out by the end of the month* — which are five days, one day and a different month. The sentence is *320 cartons leave here on 30 April and reach Beirut on 2 May*, and it goes in all three word for word."', '⚠ **Count the sets that contained three different commitments — it is most of them** — ⚠ **and then ask the question that lands: had anybody ever put their own versions side by side before today?** **Almost nobody.** **The method is not difficult; it is simply never done.**']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Three attempts, and the third added the quantity.** **The first two said *the order* and *the April consignment*, neither of which is a number** — ⚠ **and in eighteen months nobody will remember what the April order was while three hundred and twenty cartons will still be three hundred and twenty.**  **2** ⚠ **Because a receipt is money and a delivery is cartons, and they are not the same event.** **He pays about three weeks after delivery, so a 2 May delivery is a receipt in the *third* week of May, not the first** — ⚠ **a date she had not calculated, in the one letter where the date is the only thing the reader uses.**  **3** ⚠ **Its own consequence, beneath the sentence** — **the receipt in the third week and the instalment unaffected; nothing in April; and the Saturday question.** ⚠ **One sentence, three consequences, and the sentence is the only part not allowed to move.**'));
out.push(stage('6', 'Write with help – sample (149 words)'));
out.push(sample(null, [
  '**THE SENTENCE. 23 April. B. Nassif. One sentence, four documents, word for word.**',
  '⚠ **_One hundred and forty frames leave here on 30 April and should reach the Homs site on 2 May._**',
  table(['', 'What I had written', 'What it committed to', 'What was wrong with it'], [
    ['**owner**', '*the frames go out on the 30th*', '**dispatch, no quantity, no arrival**', '⚠ **he approves overtime to protect an arrival date that is not in the sentence**'],
    ['**customer**', '*delivery is expected at the end of the month*', '⚠ **April, five days, and a hedge the others did not have**', '⚠ **her fitters are booked for the 30th and *the end of the month* includes the 28th**'],
    ['**floor**', '*out by Friday*', '⚠ **Friday is 1 May — a different month from both the others**', '**and nobody would have noticed, because everybody knows which Friday**'],
    ['**wage clerk**', '*four nights, week ending 25 April*', 'a payroll week, correctly', '⚠ **nothing wrong — and it does not need the sentence at all**'],
  ], [1, 2.6, 2.3, 2.9]),
  '⚠ **The sentence took four attempts and the fourth added *should*, which the customer\'s version had and the other three did not.** ⚠ **The lorry is a contractor\'s in all four cases**, **so *should* is true everywhere or nowhere, and the honest version puts it everywhere.**',
  '⚠ **The worst version was *out by Friday* and it is the one nobody would have queried.** **Everybody on the floor knows which Friday.** ⚠ **In a file in two years, *out by Friday* in an April document reads as 25 April**, **and the whole point of 6.4 is the reader who is not in the room.**',
  '⚠ **And the wage clerk does not get the sentence**, **because she is not a reader of this fact** — **she is a reader of four nights of overtime, which is a different fact with its own core.** **A load-bearing sentence goes to the readers of the fact it bears, and not to everybody on the list.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A quantity in the sentence', '✓'],
  ['Every version naming the same event', '✓ ⚠ **and the owner\'s version was missing arrival, which is why he was approving overtime for nothing identifiable**'],
  ['The worst version identified, with what was uncalculated', '✓ ⚠ **and the reason it is worst is the best thing here: nobody would have queried it**'],
  ['Each consequence beneath the sentence, not inside it', '✗ ⚠ **not shown in this table** — **and the fourth row implies it, since the wage clerk\'s document has a different core altogether**'],
  ['The sentence written before the three documents', '✗ ⚠ **four attempts means it was extracted afterwards** — **and 6.6 is about exactly that**'],
], [3.2, 2.8]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: the sentence written before the documents. The line I am marking is **_The sentence took four attempts.__** What I found: four attempts is the signature of a sentence written last. You found the quantity on attempt three and the hedge on attempt four, and both were decided facts you already had — so what took four attempts was not the wording, it was noticing. Writing it first turns four attempts into one."_'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only their sentence. ⚠ **The class checks it for a quantity, a date and a named event.** ⚠ **Whatever is missing is what the versions will disagree about** — **and in a class of ten, the missing thing is a quantity about half the time and the arrival event about a third.**'));
out.push(stage('7', 'Write freely – sample (233 words)'));
out.push(sample(null, [
  'Two letters went out of our office on the same afternoon in 2022 about the same shipment and they gave two different weights.',
  'One went to the shipping agent and said 11.4 tonnes. One went to the customer and said about eleven and a half tonnes. Both were written by me, within about forty minutes of each other, from the same packing list.',
  'The packing list says 11,412 kilogrammes. For the agent I wrote the figure, because an agent needs a figure. For the customer I rounded it, because *11.412 tonnes* in a letter to a man who is going to put it in a shed looks like showing off.',
  'The customs entry was made on 11.4 and the customer\'s insurance was arranged on 11.5, and when the consignment was weighed at the border it came out at 11.44, and both of my numbers were wrong in different directions, and the broker spent a day and a half on it.',
  'Nobody blamed me, which still seems wrong. The question I was asked was which figure was correct, and the honest answer was that neither was; the correct figure was 11.412 and I had not sent it to anybody.',
  'What I should have written, once, in both letters, is *11.412 tonnes as per packing list number 4471*. Nine words. The *as per* is the part I would have thought was pedantic, and it is the part that would have ended it.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: has anybody put the two side by side? The line I copied is **_the correct figure was 11.412 and I had not sent it to anybody.__** What I found: the two versions were not two readings of one sentence, they were two departures from a source neither reader could see. The remedy is the *as per* clause, and it is doing something your sentence rule does not — it names where the figure came from, so the two copies can be checked against a third thing."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect all three to have had nobody put the two documents side by side, and two of three to have been written by the same person in the same week.** ⚠ **Then add the sample review\'s extension**, **which is worth taking into the next unit: a load-bearing sentence is stronger still if it names its source** — *as per packing list 4471 · from the ledger to 31 December · on his letter of 9 January, page 2* — **because then the copies can be checked against something that is not another copy.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks for the sentence written once with a quantity and a named event, and copied without improvement.** ⚠ **Ask how many attempts it took.** **Four attempts means it was extracted from drafts rather than written first** — **which is the fault 6.6 fixes, and the learner should be told that is where it is fixed.**',
], C.lblue, C.navy));

// ===================== 6.5 =====================
out.push(pb());
out.push(h2('6.5  When the three readers compare notes'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Learners name the people easily and the place slowly**, **and the place is the whole exercise** — **a trade, a professional body, a school gate, a wedding.**'));
out.push(p('**b**  The **second**. ⚠ **It survives because the sentence is the same and because each reader already knows the other was written to.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Not the letters — two remembered sentences, and a remembered sentence is a number and a date.**  2 ⚠ **So that each of them knows you wrote to the other** — *as I wrote to Ms Tannous on the 16th*, **six words.**'));
out.push(p('⚠ **The reason the cross-reference matters is social and not documentary, and it should be quoted exactly:** ⚠ **a man who learns at a trade fair that you also wrote to the buyer feels managed; a man who already knew feels informed.** ⚠ **Same fact, two readings of you, and the difference is six words written in April.**'));
out.push(p('⚠ **And the rule — the only one in Unit 6 — is to be said twice and written on the wall:** ⚠ **two documents about one fact that cannot carry a cross-reference to each other are two documents that should not both exist.** ⚠ **Which is why the cross-reference goes in last: if the sentences differ, it points straight at the discrepancy.**'));
out.push(p('**Language box – Practise (sample):**  _**The pair:** our customer\'s site manager and our own fitting subcontractor. **Where:** the site, every day. ⚠ **What each remembers:** *140 frames, 30 April.* **The cross-references:** to the site manager, *as I have told the fitters*; to the fitters, *as I have told the site.* ⚠ **And the one that needs none: the wage clerk, who meets neither.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Write the cross-reference for the owner\'s letter.'],
  ['A', '*As I have told the customer.*'],
  ['B', 'Now read both letters with that in.'],
  ['A', '…The owner\'s says the frames go out on the 30th. The customer\'s says delivery is expected at the end of the month.'],
  ['B', 'So the cross-reference tells him to go and look at a letter that says something different.'],
  ['A', 'I take it out.'],
  ['B', 'Or?'],
  ['A', 'Or I make the sentences the same, and then it is safe.'],
  ['B', 'And if you cannot make them the same?'],
  ['A', 'Then one of them is wrong and neither should go.']
]));
out.push(p('⚠ **The sequence in that sample is the rule derived rather than stated, and it is worth getting out of the pair in their own words.** ⚠ **The cross-reference is a pointer; a pointer at a discrepancy is worse than no pointer; so either fix the sentence or send nothing.** **A learner who reaches the third step themselves does not forget it.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the place, the remembered sentence, and both cross-references. **Typical errors:** a cross-reference written before the sentences were identical · two readers assumed not to know each other · ⚠ **and the content fault, which is a cross-reference in only one of the two letters.** **It has to be in both or it tells one reader that the other is being managed.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The two readers', 'Where they meet', 'The sentence each remembers', 'The cross-reference'], [
  ['Mr Haddad and Mr Dallal', '⚠ **the Damascus trade fair, September — he banks four of six exhibitors and Dallal buys from three**', '*320 cartons, 2 May*', '*as I wrote to Ms Tannous on the 16th* · *as I have told the bank*'],
  ['Ms Tannous and Mr Dallal', 'continuously — he is her customer', '*320 cartons, 2 May*, and the Saturday', 'already covered by 6.3'],
  ['Abu Yasser and her driver', '⚠ **our own gate, every fortnight**', '⚠ **whether the Saturday happened**', '⚠ **not a cross-reference — an undertaking: *I will tell you on the 21st either way***'],
], [1.4, 1.4, 2, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I write to Mr Haddad and to Mr Dallal. They meet at the Damascus trade fair in September, because Mr Haddad banks four of the six Syrian firms exhibiting and Mr Dallal buys from three of them. Each will remember *320 cartons, 2 May*. And the cross-reference is *as I wrote to Ms Tannous on the 16th* in one and *as I have told the bank* in the other."', '⚠ **Count the pairs who turned out to meet somewhere nobody had thought about** — **it is most of them** — ⚠ **and then ask how many of the room have ever written a cross-reference of this kind.** **Almost none**, and the reason is that it looks like showing off, which is the objection to answer directly.']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Row 3 — Abu Yasser and Ms Tannous\'s driver, at the firm\'s own gate, every fortnight.** ⚠ **A letter cannot reach that conversation.** **The only thing that reaches it is the undertaking in her letter to tell her on the 21st either way** — **after which whatever Abu Yasser says on the 23rd is consistent with something she already has in writing.**  **2** ⚠ **One question from Mr Attar: Mr Haddad banks four of the six Syrian firms at that fair and Mr Dallal buys from three.** ⚠ **Which is not a coincidence, it is a trade** — **and in a trade of six firms every pair of readers knows every other pair, and the only question is which month.**  **3** ⚠ **It changed one sentence in one letter and added two cross-references, and it took twenty minutes.**'));
out.push(stage('6', 'Write with help – sample (147 words)'));
out.push(sample(null, [
  '**THE SITE. 24 April. B. Nassif. Written before the four documents go out, and not sent to anybody.**',
  table(['', 'Who meets whom, and where', 'What each will remember', 'Do they agree?'], [
    ['**1**', '⚠ **the customer\'s site manager and our fitting subcontractor, on the Homs site, every working day**', '⚠ **_140 frames, 30 April_ — both, same sentence**', '⚠ **yes, since the 23rd**'],
    ['**2**', '**Mr Nassif and the customer, by telephone, monthly**', '**the overtime, and whether it bought the date**', '⚠ **yes — and the owner\'s letter now says what the overtime is for, which it did not**'],
    ['**3**', '⚠ **our fitters and the customer\'s own men, on site, daily**', '⚠ **whether we paid for four nights**', '⚠ **yes, because 6.3 put the overtime in her letter**'],
    ['**4**', '**the wage clerk and nobody**', '**four nights, week ending 25 April**', '**not applicable**'],
  ], [0.4, 3, 2.4, 2.2]),
  '**The cross-references, written last:** ⚠ **to the site manager, _as I have told your fitting contractor_; to the subcontractor, _as I have told the site_; to the owner, _as I have told the customer_; to the wage clerk, nothing.**',
  '⚠ **Row 3 is the one that is a conversation and not a document, and it is daily.** **Our fitters and theirs are on the same scaffold.** ⚠ **A letter cannot reach a scaffold** — **the only thing that reaches it is that she already has the overtime in writing from me**, **so whatever our men say about four nights is confirmation and not news.**',
  '⚠ **And row 4 is the useful subtraction.** **The wage clerk meets nobody in this list, so she needs no cross-reference** — ⚠ **and writing *nothing* in the column is what stopped me adding one out of symmetry.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A place and a month for every pair', '✓ ⚠ **and three of the four are *daily* or *monthly*, which is better than a month**'],
  ['*What each will remember*, kept to a number and a date', '✓ in rows 1 and 4; rows 2 and 3 are facts rather than figures, correctly'],
  ['Cross-references written last, with *nothing* where none is needed', '✓ ⚠ **and the *nothing* is explained, which is what stops symmetry filling it**'],
  ['A row that is a conversation rather than a document', '✓ and it is daily, which is worse than September'],
  ['What the page changed, and how long it took', '✗ ⚠ **neither recorded** — **and it changed the owner\'s letter, which the table shows and the text does not claim**'],
], [3.2, 2.8]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: what the page changed. The line I am marking is **_yes — and the owner\'s letter now says what the overtime is for, which it did not.__** What I found: that is the page\'s whole output and it is hidden in a table cell. Put it at the bottom as a sentence with the time it took, because next year you will have to persuade somebody that twenty minutes of this is worth it, and a cell will not do that."_'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only their conversation row. ⚠ **The class says what written undertaking would reach it.** ⚠ **The answer is always an undertaking to the person who will hear it second-hand**, **and it always has a date and the words *either way* in it** — **because an undertaking to tell somebody good news is not an undertaking.**'));
out.push(stage('7', 'Write freely – sample (230 words)'));
out.push(sample(null, [
  'Two of my customers discovered at a funeral that I had given them different lead times, and neither has ever mentioned it to me.',
  'I know because a third person told me, about four months later, in the way people tell you things they have decided you ought to know. They had been talking about a supplier and one of them said six weeks and the other said four, and then they worked out that they were talking about us.',
  'Both were true when I said them. The four-week customer orders in standard sizes and the six-week one orders in a finish we buy in. I had never explained that to either of them, because explaining it would have meant explaining that one of them gets a faster service, which is a thing I would rather not put in writing.',
  'What they concluded, as far as I can reconstruct it, is not that I had lied. It is that our lead times are negotiable, which is worse, because now both of them push.',
  'One sentence in each letter would have prevented it. *Standard sizes are four weeks; anything in the bronze finish is six, because the finish is bought in.* It is in neither letter. It is still in neither letter, three years later, and I write to both of them most months.',
  'The reason is that writing it means telling the slower one why he is slower.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: had the writer expected them to meet? The line I copied is **_now both of them push.__** What I found: the cost is not the embarrassment, it is a permanent change in two commercial relationships — and your own last line says why it has not been fixed in three years. The sentence that explains the difference is the one that makes the difference defensible, and not writing it is what made it look like a favour."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect all three writers not to have expected the meeting, and two of three meetings to have been at a place anybody could have named.** ⚠ **Then draw out the sample\'s harder finding: where two readers get genuinely different treatment, the thing to write is the *reason* for the difference** — **because an unexplained difference is read as a favour, and a favour discovered is a lever.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks for two readers, a place and a month, and the six-word cross-reference for each letter.** ⚠ **Insist on both cross-references.** **One is worse than none** — **it tells one reader that the other is being managed** — **and learners write one because they only feel awkward about one of the two relationships.**',
], C.lblue, C.navy));

// ===================== 6.6 =====================
out.push(pb());
out.push(h2('6.6  Writing the three in one sitting'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect estimates of half a day and above, and expect almost nobody to have written them together.** **The real figure is forty minutes and saying so at the start of the cycle is a mistake** — **let them find it at stage 5.**'));
out.push(p('**b**  The **second**. ⚠ **Writing the easiest first and adapting it is how three different dates are produced**, **because the adaptation is where the register pulls the sentence.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **On the second day you cannot remember the first day\'s wording and you do not look, because you think you are writing a different letter.**  2 ⚠ **Reading all three aloud, one after the other, in one go** — **a discrepancy is audible in four seconds and invisible on a desk.**'));
out.push(p('⚠ **The four steps are not a suggestion and the order is the content.** ⚠ **Sentence (15) · cores (5 each) · dials, together (10) · cross-references (5).** **Each is impossible before the one above: you cannot set a detail dial without knowing the reader\'s consequence, and you cannot write a cross-reference before the sentence is fixed.**'));
out.push(p('⚠ **And the explanation of why the sentence takes fifteen minutes rather than an hour is the best diagnostic in the unit:** ⚠ **extracted from three drafts it is a compromise between them; written first it is a commitment the three are built on.** ⚠ **If it takes more than twenty minutes, stop writing letters and go and find out the facts** — **the method is telling you something.**'));
out.push(p('**Language box – Practise (sample, the four steps on a real job):**  _**1 (13 min)** *One hundred and forty frames leave here on 30 April and should reach the Homs site on 2 May.* **2 (4, 4, 3, 2)** owner: four nights to approve · customer: her fitters · floor: Thursday to Friday · wage clerk: four nights on the May sheet. **3 (8)** all four dials for all four documents, in one block. **4 (4)** three cross-references and one *nothing*. ⚠ **Check (5): read all four aloud — caught *the frames* in the floor note where the others said *140 frames*.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'How long did the sentence take?'],
  ['A', 'An hour, and four attempts.'],
  ['B', 'What did each attempt add?'],
  ['A', 'The second added the arrival date. The third added the quantity. The fourth added *should*.'],
  ['B', 'Did you have the quantity before you started?'],
  ['A', 'It is on the order. Yes.'],
  ['B', 'And the arrival date?'],
  ['A', 'Two days from dispatch. I have known that for nine years.'],
  ['B', 'So nothing you added in four attempts was a fact you had to find.'],
  ['A', 'No. It was all noticing.'],
  ['B', 'Then written first it is one attempt, because what you were doing for an hour was discovering your own sentence by writing three letters round it.']
]));
out.push(p('⚠ **That last line is the cycle in one sentence and it is worth writing on the board:** ⚠ **writing the three first means discovering your own sentence by writing three letters round it.** **The four attempts are not drafting, they are noticing** — **and noticing can be done in fifteen minutes with the facts in front of you.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the four steps with their minutes and say what the final five are for. **Typical errors:** cross-references written in step 2, before the sentence was fixed · dials set one document at a time · ⚠ **and the content fault, which is a learner who does the four steps across two days** and reproduces the original fault exactly.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Step', 'What I wrote', 'Minutes taken'], [
  ['**1 the sentence**', '*140 frames leave here on 30 April and should reach the Homs site on 2 May*', '**13**'],
  ['**2 the cores**', 'four consequences, one per reader', '**13 in total**'],
  ['**3 the dials**', 'all four documents, in one block', '**8**'],
  ['**4 the cross-references**', 'three, and one *nothing*', '**4**'],
  ['**the check, aloud**', '⚠ **caught *the frames* against *140 frames***', '**5**'],
], [1.5, 3.5, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The sentence took thirteen minutes and one attempt, because I had the quantity and both dates in front of me. The cores took thirteen in total. The dials took eight, all four together. The cross-references took four. And reading them aloud caught *the frames* in the floor note where the other three said *140 frames* — which would have confused nobody today and is not a quantity in a file."', '⚠ **Count how many people the aloud check caught something in — it is most of them** — ⚠ **and then ask how many of those things would have been found by reading silently.** **Almost none**, and the reason is worth saying: silent reading recognises meaning and aloud reading reproduces words.']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Forty-one minutes, against three days** — **and the first time produced three different dates.**  **2** ⚠ **Because she had the quantity and both dates in front of her before she wrote a word**, **having worked them out for 6.4.** ⚠ **A sentence takes an hour when you are deciding the facts while you write it and fourteen minutes when the facts are decided** — **so the fifteen minutes is wording time, not thinking time.**  **3** ⚠ **The yard note said *the Tannous order* where the others said *320 cartons*.** **Nobody in the yard would have been confused** — ⚠ **and the yard note goes into the same file as the other two, and in eighteen months *the Tannous order* is not a quantity.**'));
out.push(stage('6', 'Write with help – sample (145 words)'));
out.push(sample(null, [
  '**THE SECOND TIME. 25 April. B. Nassif. One fact, four documents, thirty-eight minutes, timed.**',
  table(['', 'Step', 'What it produced', 'Minutes'], [
    ['**1**', '⚠ **the sentence**', '⚠ **_140 frames leave here on 30 April and should reach the Homs site on 2 May._** — **one attempt; quantity, both dates and the hedge all decided beforehand**', '**13**'],
    ['**2**', '**the four cores**', '**overtime to approve · her fitters · Thursday to Friday · four nights on the May sheet**', '**4, 4, 3, 2**'],
    ['**3**', '**the dials, all four together**', '⚠ **and *should* in all four, which setting them separately would have lost**', '**8**'],
    ['**4**', '**the cross-references**', '**three, and *nothing* for the wage clerk**', '**4**'],
    ['⚠ **check**', '⚠ **all four read aloud, in sequence**', '⚠ **caught *the frames* in the floor note**', '**5**'],
  ], [0.5, 1.6, 4.4, 1.1]),
  '⚠ **Thirty-eight minutes against most of a day the first time, and the first time gave the owner a sentence with no arrival date in it.**',
  '⚠ **Step 3 is where the eight minutes earns its place.** **Setting the dials together is the only reason *should* is in all four.** ⚠ **Written separately, the owner\'s letter had *will*** — **because an owner approving money wants certainty and I would have given it to him, and the lorry is still a contractor\'s.**',
  '⚠ **And the check caught one small thing, and I have kept it.** *The frames* **against** *140 frames.* **Nobody on the floor would have been confused this week.** ⚠ **The floor note is the one that goes on the board and then into the job file, and it is the copy somebody reads in two years.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Minutes recorded for every step', '✓'],
  ['A comparison with the untimed way of doing it', '✓ ⚠ **and it names what the old way produced, which is better than naming the time**'],
  ['The facts decided before step 1', '✓ one attempt'],
  ['Something the aloud check caught, kept even if harmless', '✓'],
  ['The dials done in one block', '✓ ⚠ **and the sample proves the point: *should* in all four survives only because they were set together**'],
], [3.4, 2.6]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: the dials in one block. The line I am marking is **_Written separately, the owner\'s letter had *will* — because an owner approving money wants certainty and I would have given it to him.__** What I found: that is the strongest evidence in the sample and it is for a different criterion. It proves the hedging rule from 6.1, not the one-block rule — and both are worth having, so say which it proves."_'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only what their aloud check caught. ⚠ **The class says whether reading silently would have found it.** ⚠ **Almost never** — **and the reason is that silent reading recognises meaning while reading aloud reproduces words**, **which is also why the check must be in one go, with no pause between the documents.**'));
out.push(stage('7', 'Write freely – sample (229 words)'));
out.push(sample(null, [
  'Our monthly reporting is one job done eleven times, and it takes about three weeks of somebody\'s time every month.',
  'There are eleven reports. They go to the board, to the bank, to the group, to two departments, to the works committee, and five of them are statutory or contractual. They all contain production, scrap, overtime and absence, from the same four sources.',
  'They are written by four people, in the order the deadlines fall. The board report is written first because it is due first. Then the bank report, which repeats about half of it. Then the group return, which repeats about half of that, from the same source but re-extracted, because the person writing it does not have the board report and would not use it if she did, since hers has to tie to a different period end.',
  'The figures disagree about one month in four. Not by much, and always explicably, and it always takes somebody half a day to explain.',
  'What nobody has done is write the four numbers once, with their periods and sources, at the top of a single page, and let the eleven reports take them from there. That is about two hours and it would be the same two hours every month.',
  'The reason is that the eleven reports belong to four people and the single page would belong to nobody, and nobody has ever proposed owning it.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: why has it never been done in one sitting? The line I copied is **_the eleven reports belong to four people and the single page would belong to nobody.__** What I found: that is the real obstacle and it is not about time. The one-sitting rule assumes one writer, and your job has four — so the equivalent of a load-bearing sentence here is a page with an owner, which is a different proposal and a better one."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect two of three to be split by day rather than by person, and all three never to have been timed either way.** ⚠ **Then take the sample\'s extension, because learners in larger organisations will need it: where the parts belong to different people, the one-sitting rule becomes *one source page with one owner*** — **and the four steps apply to that page, not to the documents.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks for one fact, two readers, four steps, timed, and read aloud.** ⚠ **The timings are what to collect.** **A sentence that took more than twenty minutes means the facts were not decided** — **and that is the finding, not a failure.** **Send that learner to find the facts and do it again.**',
], C.lblue, C.navy));

// ===================== 6.7 =====================
out.push(pb());
out.push(h2('6.7  Review & Mediate: the reader who actually read it'));
out.push(stage('1', 'Get ready – Unit 6 quiz'));
out.push(p('**1** ⚠ **Formality · distance · detail · hedging** — **and hedging is set by the truth alone.**  **2** ⚠ **Do not send it** — **or write *for information: no reply needed* at the top and take out the closing courtesy.**  **3** **A figure, a date and a consequence** — ⚠ **and the test is *if they found this out from somebody else, would they feel kept in the dark?***  **4** ⚠ **Because a writer rewriting it for a different reader cannot help making it fit the register**, **and the sentence is not one of the dials.**  **5** ⚠ **Not in a meeting — at a trade fair, a gate, a wedding** — **and what is compared is two remembered sentences, each a number and a date.**  **6** ⚠ **Because split over days you do the job three times and get three answers**, **and the order is sentence · cores · dials · cross-references.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **They wanted to know who else had been told** — **because a supplier who tells a bank before a customer is a supplier in trouble.**  2 ⚠ **That he would not have needed it and they did** — *six words, and they are the reason this did not come back to you as a list of questions.*'));
out.push(p('⚠ **This track reframes the whole unit and should be read twice.** ⚠ **Anything moving a receipt by more than a month goes to the credit committee before the manager sees it, and no customer has ever been told that the committee exists.** ⚠ **So the letters that survive it survive by accident** — **unless they were written for an action and a comparison, in which case they survive on purpose.**'));
out.push(p('⚠ **And Mr Haddad\'s last answer is the sentence the unit has been building towards:** ⚠ **a document that survives a reader you have never met is a document written for what readers do and not for who they are.** **He adds, drily, that he believes this is something she was told in a classroom** — **and the class should be allowed to enjoy that.**'));
out.push(p('⚠ **The small practical point in the track is the reply.** ⚠ *Who did?* **gets the committee.** ⚠ *Oh — I hope it was all right?* **gets reassurance and no information**, **and it is what most people say.**'));
out.push(p('**Language box – Practise (sample):**  _"I did not read your letter first." — ⚠ **Who did?** — "The quantity surveyor checks anything that moves a date." — ⚠ **What did he want that you would not have?** — "Whether the fitting subcontractor knew, because a date that moves without the fitters knowing is a date that moves twice." — ⚠ **_As I have told your fitting contractor._** — "Six words, and they are why this came back as a signature and not as a question."_'));
out.push(stage('3', 'Practise – sample with pair 2'));
out.push(dlg(null, [
  ['B', 'I did not read your letter first.'],
  ['A', 'Oh — I hope it was all right?'],
  ['B', 'It was fine.'],
  ['A', '…'],
  ['B', '_(nothing further)_'],
  ['A', '_(again, differently)_ Who did?'],
  ['B', 'The quantity surveyor. He sees anything that moves a date before I do.'],
  ['A', 'And what did he want that you would not have?'],
  ['B', 'Whether your fitting subcontractor knew. A date that moves without the fitters knowing is a date that moves twice.'],
  ['A', 'That is in the letter. *As I have told your fitting contractor.*'],
  ['B', 'Which is why it came back to me signed instead of as a question.']
]));
out.push(p('⚠ **Run both halves and let the silence sit.** ⚠ **_I hope it was all right?_ is a request for reassurance and it gets one, and the information behind it is never offered** — **because the reader has been told, politely, that the writer does not want to know.** ⚠ *Who did?* **is two words and gets a quantity surveyor, a rule nobody had mentioned, and the reason the cross-reference mattered.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write who actually read it, what they wanted, and which sentence answered it. **Typical errors:** a reply that asks for reassurance · ⚠ **and the content fault, which is a mediator who treats the hidden reader as bad news.** **The hidden reader is the best information available about how to write**, **and a writer who learns about one has been given something.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Who I told', 'What they wanted', 'Which sentence answered it', 'Which cycle produced it'], [
  ['the expected reader', 'the figure, the date, and his own consequence', '*the receipt falls in the third week of May; the instalment is unaffected*', '**6.2 and 6.3**'],
  ['⚠ **the hidden reader**', '⚠ **who else had been told**', '⚠ *as I wrote to Ms Tannous on the 16th*', '⚠ **6.5 — written for a trade fair in September and used by four people in April**'],
], [1, 1.7, 1.9, 1.4]));
out.push(stage('4R', 'Report – mediation'));
out.push(p('⚠ **The unwritten thing, in full:** **almost every document is read by somebody the writer has never heard of** — **a committee, a successor, a solicitor, a file** — ⚠ **and nobody ever tells the writer, so the documents that survive those readers survive by luck, except the ones that were written for what a reader does and for the day two readers compare, which survive every reader because they were never written for a person at all.**'));
out.push(sample(null, ['"The documents said 320 cartons, 2 May. The expected reader wanted to know whether the instalment was affected. The hidden reader — a credit committee nobody had ever mentioned — wanted to know who else had been told. The sentence that answered it was *as I wrote to Ms Tannous on the 16th*, and it came from 6.5, where it was written for a trade fair in September."', '⚠ **Two things to close Book 1\'s first half with.** ⚠ **First: a sentence written for one comparison survives every comparison.** **The cross-reference was written for September and was used in April by four people whose existence was unknown.** ⚠ **Second, and it is the unit\'s argument: writing for an action and for a comparison is not a technique for difficult readers** — **it is the only way to write for readers you cannot know about, and those are most of them.**']));
out.push(p('**The paper-and-decision word list, Unit 6\'s six:** _a register · the irreducible core · a load-bearing sentence · to copy verbatim · a discrepancy between versions · to be forwarded_. ⚠ **Thirty-six items at the half-way point.** **It runs to Unit 12 and is collected in the Unit 12 key.**'));
out.push(stage('5', 'Read – exam practice'));
out.push(table(['Statement', '1', '2', '3', '4', '5', '6', '7'], [['**Text**', '**C**', '**D**', '**B**', '**A**', '**E**', '**C**', '**A**']], [1.4, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('⚠ **Why, briefly, and note that A and C are each used twice.**  **1 C** — *a press bearing on the 2nd, the part from Homs, running again on the 13th* **is the only cause detail in the set.**  **2 D** — *for information only: no reply is needed.*  **3 B** — *I will tell you on the 21st either way.*  **4 A** — *as I wrote to Ms Tannous on the 16th.*  **5 E** — *I did not read your letter first.*  **6 C** — ⚠ **the register is the giveaway: *the plater lost eleven days* and *the question is the Saturday* are an internal note**, **and no outside reader is addressed.**  **7 A** — *the 28 April instalment is unaffected* — **a payment going the other way.**'));
out.push(p('⚠ **The marking note for Part 1, and it is the one that gains marks.** ⚠ **Three of these five texts open with the same sentence**, **which is deliberate: in Part 1 the texts are always similar and a statement is almost never answered by the thing they share.** ⚠ **Hunt for the difference, not for the subject.** **Statements 1, 6 and 7 are all answered by one clause that only one text has**, **and a learner who reads for subject matter will put 7 against A, B or C with equal confidence.**'));
out.push(stage('6', 'Write with help – sample exam answer (134 words)'));
out.push(sample(null, [
  '**Dear Ms Tannous,**',
  '⚠ **Three hundred and twenty cartons leave here on 30 April and reach Beirut on 2 May.** Nothing will reach you in April.',
  'Our plater was out of action for eleven days.',
  '⚠ **We may work the Saturday of the 20th to bring the date forward, and I will tell you on the 21st either way.**',
  'I am sorry to move a date you have given to your own customer. If one date is more use to you than an earlier one, say so and we will hold to the 2nd whatever happens here. As I have told the bank.',
  '**Yours sincerely,**',
  '⚠ **One hundred and thirty-four words. The load-bearing sentence first with a quantity and both dates · the consequence for this reader · nine words of cause · one undertaking with a date and *either way* · and the cross-reference last.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The load-bearing sentence first, with a quantity and both dates', '✓'],
  ['The consequence for this reader', '✓ *nothing will reach you in April*'],
  ['Cause in about nine words, and no more', '✓ nine exactly'],
  ['One undertaking, with a date and *either way*', '✓ ⚠ **and a second, better one** — *if one date is more use than an earlier one, say so*'],
  ['120 to 140 words — count them', '✓ 134'],
], [3.4, 2.6]));
out.push(p('⚠ **Marking the exam task.** **Content: four points, all present (8).** **Organisation: sentence first, cross-reference last (4).** **Language: letter register, one apology and no more (4).** **Range and accuracy (4).** ⚠ **Two faults specific to this task.** **First, opening with the cause** — *our plater was out of action, and as a result…* — **which makes the reader wait for the date and loses an organisation mark.** ⚠ **Second, an apology in every paragraph.** **One is a courtesy; three is a letter about the writer\'s feelings, and it loses a language mark.**'));
out.push(stage('7', 'Write freely – sample (235 words)'));
out.push(sample(null, [
  'A note of mine was read out at an industrial tribunal in 2019 and I had written it in about four minutes.',
  'It was three lines on a job sheet about a man who had left a guard off a machine. I wrote it because the foreman asked me to put something on the sheet, and what I put was that the guard had been found off at eleven and that the man had been spoken to.',
  'Nothing in that note was untrue. What it did not say was who had spoken to him, what had been said, whether he had agreed the guard was off when he started, or that the machine had been running with that guard off for about two years before anybody mentioned it.',
  'Eleven months later the man was dismissed for a different thing and the note was in the bundle. The question put to me was what *spoken to* meant, and the honest answer was that I did not know, because I had not done it and nobody had told me what was said.',
  'I was in that room for about fifty minutes on three lines.',
  'What would have saved it is nothing clever. A name and a time: *the foreman spoke to him at 11.20.* Seven words. I did not write them because I was writing for the foreman, who knew who he was.',
]));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks the learner to find out who reads their letters before the addressee does.** ⚠ **It works about half the time and when it works it is the best material in Book 1** — **a committee, a surveyor, a shared mailbox, an assistant who summarises.** **Collect what they learn, and the question to ask about each is 6.7\'s: what would that reader want that the addressee would not?**',
], C.lblue, C.navy));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 6 check'));
out.push(p('**A  Language.**'));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'c', 'b', 'b', 'a', 'b', 'c', 'b']], [1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(p('⚠ **Q5 is the fixed phrase and it is worth a minute** — *word for word*, **with no article**, **and it is the unit\'s instruction in three words.** ⚠ **Q6 is the second conditional, which is the grammar of the discovery test:** *if they found it out from somebody else, they **would** feel kept in the dark.* ⚠ **Q8 is the past perfect and it is the tense of the whole of 6.4:** *I had written a date I **had not calculated*** — **two past actions, and the order of them is the finding.**'));
out.push(p('**B  Listening (Track 6.15).**   **Who read it first:** ⚠ **the credit committee.**   **What goes to them:** ⚠ **anything that moves a receipt by more than a month.**   **Why the writer did not know:** ⚠ **nobody had ever told her, and there is no reason she would know.**   **What they wanted that he would not have:** ⚠ **who else had been told** — **because a supplier who tells a bank before a customer is a supplier in trouble.**   **The six words that answered it:** ⚠ **_as I wrote to Ms Tannous on the 16th._**   **What the letter was actually written for:** ⚠ **an action and a comparison** — **not a person** — **and the cross-reference was written for a trade fair in September.**'));
out.push(p('**C  Reading.**  ⚠ **Because a receipt is money and a delivery is cartons, and the two are not the same event.** **Mr Haddad pays about three weeks after delivery**, ⚠ **so a 2 May delivery is a receipt in the *third* week of May and not the first** — **and she had written *the first week of May*.** ⚠ **What she had not calculated was the three weeks between delivery and payment**, **in the one letter where the date is the only thing the reader uses** — **and it was the version she was proudest of, because it was the most formal and a smooth phrase is where an uncalculated date hides.**'));
out.push(p('**D  Writing – sample (104 words).**'));
out.push(sample(null, [
  '⚠ **The sentence, in both:** *Nine hundred cartons leave here on 12 May and reach Aleppo on 13 May.*',
  '**To the plater, beneath it:** so the plating must be finished by the 9th, and I will send the gauge sheet on the 6th.',
  '**To the customer, beneath it:** so you will have them on the 13th, three days earlier than the order says, and nothing changes about the invoice date.',
  '**The cross-references:** to the plater, *as I have told the customer*; to the customer, *as I have told the plater*.',
  '⚠ **One sentence, two consequences, two cross-references — and the sentence has a quantity, both dates and both places in it, so neither version can drift.**',
]));
out.push(box('Marking the unit check', [
  '**A  Language — 8 marks**, one each.',
  '**B  Listening — 6 marks**, one for each gap. ⚠ **Give the last mark only for *an action and a comparison*** — **_for the bank_ and _for Mr Haddad_ are both wrong, and the whole of 6.7 turns on the letter not having been written for a person.**',
  '**C  Reading — 4 marks:** that a receipt and a delivery are different events (1) · the three weeks between them (1) · that the correct answer is the third week of May (1) · ⚠ **that it was the version she was proudest of, and why formality hides an uncalculated date (1).**',
  '**D  Writing — 7 marks:** one sentence with a quantity and both dates (2) · a consequence per reader, beneath it (2) · two cross-references (2) · ⚠ **the sentence identical in both (1)** — **and no marks at all for this last if it has been improved in one of the two, however well.**',
  '**Total 25.** ⚠ **The profile to expect: the highest D in Book 1 so far.** **By the end of Unit 6 the four steps are mechanical.** ⚠ **What the check cannot test is 6.5 and 6.7**, **because both are about readers the learner has to go and find** — **and those are the two homework tasks to collect.**',
], C.lteal, C.navy));
out.push(note('Teacher\'s note. Three faults to watch, and the remedy for each. First, the hedge that travels with the formality. It is the unit\'s central error and learners commit it without choosing to — the formal version gets tightened, the hedge comes out with the contractions, and the bank is told "will" while the yard is told "should". The remedy is mechanical: lay the versions in columns, read the hedging row across, and ask which one is true. Where a learner cannot say which is true, the weaker word goes in all of them and the compensation is an extra sentence about what happens if it slips — never a softer word. Second, the improved copy. A learner with the right load-bearing sentence will improve it in one of three copies, and the improvement is usually genuinely better, which is what makes this hard to teach. Do not let the class resolve it by keeping the worse version everywhere: the rule is that the better word goes into all of them or none, and the decision is about truth and not about style. Third, and this is the fault that outlives the unit: writing for the person rather than for the action. It produces documents that work exactly once, for a reader who is in post, informed and friendly, and fails the moment the letter is read by a committee, a successor or a file — which 6.7 shows happening to the best letter in the unit. The sentence to leave them with is Mr Haddad\'s: a document that survives a reader you have never met is a document written for what readers do and not for who they are. One practical note. The two homework tasks in 6.5 and 6.7 — naming where two readers will meet, and finding out who reads your letters first — are the two that produce real information about a learner\'s workplace, and they are the two most likely to be skipped because both require asking somebody a question. Collect them specifically, and give the lesson to whatever comes back.'));
out.push(sp());
out.push(p('_Next: the **Mid-Book Test**, covering Units 1–6 — sixty marks, thirty questions, four papers weighted equally._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · Unit 6 · Answer Key');
module.exports = out;
