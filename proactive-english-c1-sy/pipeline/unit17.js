// Proactive English C1 · Syria Edition · Book 2 · Unit 17 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['WHAT THE CHAIR SAID', 'WHAT RANK WOULD HAVE SAID'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const minuted = (rows) => table(['WHAT WAS SAID', 'WHAT GOES IN THE MINUTE', 'WHAT DOES NOT'], rows, [2, 2, 2]);
const clinic = '**Board clinic:** your teacher writes three chair\'s sentences from the reports on the board. For each one the room says what it rests on — the agenda, the clock, or a rank the chair has not got.';
const slip = '**Peer review, C1 band 3.** ⚠ **Do not sign it.** **Name the reader you are being, name what is absent**, give the criterion **with the line copied** — and **hand it over unsigned.** **The writer answers in one line that must either concede or refuse with a reason.**';

out.push(h1('Unit 17  Chairing People Who Outrank You'));
out.push(p('_Proactive English · C1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  '**Somebody in this room chairs a meeting this week at which the most senior person present is not them.** ⚠ **A rota puts a reporter of twenty-six in the chair of a morning call with two bureau chiefs on it.** **A standing order puts a grants officer in the chair with her own country director in the room.** **A departmental convention puts a doctoral candidate in the chair of a seminar her supervisor attends.** **None of them can give an instruction and all of them have to.**',
  '**So the axis turns once more, and this is the last turn Book 2 makes on it.** ⚠ **In Unit 16 the reader could not refuse you, because your verdict went into their file.** **Here the reader can refuse you, is more senior than you, and is in the room, looking at you, now.** **There is no appeal, no interval and no second draft** — **and the chair\'s only instrument is a form of words that rests on the agenda and the clock rather than on rank.**',
  '**17.1** opens a meeting you have no authority to open.   **17.2** stops somebody senior without stopping them.   **17.3** takes agreement that nobody quite gave.   **17.4** minutes a disagreement so that both parties recognise themselves.   **17.5** puts an action against a name in the room, out loud.   **17.6** writes the minute that is circulated an hour later.   **17.7** mediates between a minute and the person who says they did not agree to it.',
  '**Exam practice in 17.7:** C1 Advanced **Reading and Use of English Part 1** (multiple-choice cloze), **Writing Part 1** (the essay) and **Listening Part 1** (three short extracts).',
  '⚠ **Bring an agenda and a minute, from the same meeting if you can.** **If you have never chaired anything, bring the agenda of a meeting you attend and the minute that came out of it** — **because three cycles of this unit are about the distance between the two, and that distance is visible to anybody who was in the room.**',
  '**And the warning the unit needs in its first minute.** ⚠ **Nothing here is about confidence.** **A junior chair who is told to be more confident has been given advice that cannot be carried out and will be blamed for not carrying it out.** **Every cycle in this unit replaces confidence with a sentence** — **a form of words that works when said flatly by somebody of twenty-six, because its authority is in the agenda, the clock and the minute, and not in the person saying it.**',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 17.1 =====================
out.push(pb());
out.push(h2('17.1  Opening a meeting you cannot open'));
out.push(p('**Function:** opening a meeting you do not have the authority to open   ·   **Grammar:** the chair\'s sentence, resting on the agenda and the clock   ·   **Pronunciation:** the opening said flat, with no rise at the end'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **a meeting you chair or attend, the most senior person in it, and the first sentence the chair says.** ⚠ **The sentence, word for word, and not a description of it.** **In this class eight of ten first sentences began with thanks and six contained a request for permission** — **and your teacher writes the ten first sentences on the board, because the room is going to strike words from them.**'));
out.push(board('It is nine; four items, forty minutes.', 'Right, let us get started, shall we?'));
out.push(p('**b**  Which two rest on the agenda and the clock? **1** _Thank you all for coming, I know how busy everybody is._  **2** _It is nine o\'clock. Four items, forty minutes. Beirut is not on the call and item 3 is theirs, so item 3 is for information only._  **3** _If everybody is happy, perhaps we could make a start._  **4** _Nine o\'clock. The agenda went out last night; item 2 is a decision and the other three are reports._  **5** _Sorry to be chairing this again — I know it should not be me._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the chair\'s authority rests on?   **A** the confidence of the person chairing   **B** **the agenda and the clock** — two things in the room that are not the chair and that everybody can check   **C** the permission of the most senior person present'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say thanks at the opening does?   **2** What does Mrs Oueidat say the sentence about who is absent is for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.1  Nine o clock, four items, forty minutes', [
  ['Ms Huda', 'Mr Shihabi chairs the morning call. He is the most junior person on it.'],
  ['Mr Shihabi', '⚠ **Twenty-six, three years in, and the rota put me there in September.** **Two bureau chiefs and the regional editor** — **and for the first eleven calls I opened with thanks and an apology.**'],
  ['Mrs Khoury', 'What did the thanks do?'],
  ['Mrs Khoury', '⚠ **It is the question the room should sit with, because thanks at the opening feels like courtesy and is a request.** **_Thank you for coming_ says that their being there was a favour** — **and a man whose attendance is a favour can withdraw it at item 2, politely, and you have no answer.**'],
  ['Mr Attar', 'And the apology?'],
  ['Mr Shihabi', '⚠ **_Sorry it is me again_ put the whole call in a bad position in four words.** **Everybody then had to reassure me, which took a minute, and the regional editor did it twice** — **and after that the call was about whether I minded chairing.**'],
  ['Mrs Oueidat', 'So what is the opening now?'],
  ['Mr Shihabi', '⚠ **Nine o\'clock, four items, forty minutes.** **And then one sentence about who is not on the call and what follows from it.** _Beirut is not on and item 3 is theirs, so item 3 is for information only._'],
  ['Mrs Oueidat', '⚠ **Which is the sentence I want the room to look at, because it is doing the work rank would have done.** **It tells three senior people what cannot be decided this morning, and the reason is not the chair\'s preference** — **it is that the people whose item it is are not there, which anybody on the call can verify in a second.**'],
  ['Dr Qabbani', 'Nobody can argue with an empty chair.'],
  ['Mrs Khoury', '⚠ **Nobody can argue with it and that is the whole method of this unit.** **A junior chair who says _I would rather not decide item 3 today_ has offered a preference to people senior enough to overrule it** — **and a junior chair who says _the people whose item it is are not here_ has stated a fact that outranks everybody in the room.**'],
  ['Mrs Rizk', 'Mine is a committee and my own director sits on it.'],
  ['Mrs Oueidat', '⚠ **Then the clock is your strongest instrument and you should say it twice.** **_Forty minutes_ at the opening and _we are at twenty-two minutes_ at the halfway point** — **and a chair who has said the number twice has made the clock a third party, and a third party can hurry a director when a chair cannot.**'],
  ['Mr Tayara', 'Does the agenda have to have gone out?'],
  ['Mr Shihabi', '⚠ **It has to have gone out and you have to say when.** **_The agenda went out last night_ is four words and it converts the agenda from my list into a document everybody has had since last night** — **and an item that is on a document they have had is not an item I am springing on them.**'],
  ['Mrs Tarabishi', 'And if somebody adds an item at the opening?'],
  ['Mrs Khoury', '⚠ **Then it goes last and you say so as you write it down.** **_That goes in as item 5 and we shall reach it at twenty-five past_** — **and the room should notice that the chair has not refused anything: the clock has.**'],
  ['Mrs Ajouz', 'What about the tone of the opening?'],
  ['Mrs Oueidat', '⚠ **Flat, and with no rise at the end of any of it.** **A rise on _forty minutes_ turns the number into a proposal** — **and a proposal from the most junior person on the call will be amended by the second most senior, out of kindness, and the forty minutes will become fifty-five.**'],
  ['Mr Shihabi', '🔊 ⚠ **And the thing I shall take away is the eleventh call and the twelfth.** **On the eleventh I apologised and we finished at nine fifty-one.** **On the twelfth I said nine o\'clock, four items, forty minutes, and we finished at nine thirty-eight** — **and the regional editor sent me two words afterwards, which were _better, thanks_, and I have thought about them for a month.**'],
]));
out.push(sp());
out.push(box('Language box – the chair\'s opening', [
  '**Three things, in this order, and nothing else.** ⚠ **The time, the number of items, the number of minutes.** _Nine o\'clock. Four items, forty minutes._ **Then one sentence about who is absent and what follows from it.**',
  '**Thanks at the opening is a request, not a courtesy.** ⚠ **_Thank you for coming_ says that their being there was a favour** — **and a man whose attendance is a favour can withdraw it at item 2, politely, and the chair has no answer.**',
  '**An apology for chairing puts the meeting in a bad position in four words.** ⚠ **Everybody then has to reassure you, which costs a minute** — **and after that the meeting is about whether you mind chairing, which is a subject no agenda has an item for.**',
  '**The absence sentence does the work rank would have done.** ⚠ _Beirut is not on and item 3 is theirs, so item 3 is for information only._ **It tells senior people what cannot be decided, and the reason is not your preference but a fact anybody can verify in a second.**',
  '**Say the clock twice.** ⚠ **_Forty minutes_ at the opening and _we are at twenty-two minutes_ at the halfway point.** **A chair who has said the number twice has made the clock a third party** — **and a third party can hurry a director when a chair cannot.**',
  '**And say when the agenda went out.** ⚠ **_The agenda went out last night._** **Four words, and they convert your list into a document everybody has had since last night** — **so nothing on it is being sprung on anybody.**',
  '**Pronunciation.** 🔊 **Track 17.2** **Say _four items, forty minutes_ with no rise on either number.** ⚠ **A rise turns a number into a proposal** — **and a proposal from the most junior person present will be amended by the second most senior, out of kindness, and forty minutes will become fifty-five.**',
  '**Practise:** Open it. **1** a call with two people absent  **2** a committee with your own director on it  **3** a meeting with an item added at the door  **4** a meeting whose agenda went out an hour ago  **5** a meeting you have chaired eleven times and apologised at every one',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the situation from the card. B gives **the opening**: the time, the items, the minutes, and one absence sentence. ⚠ **Two rows on each card contain thanks or an apology** — **and there B says which words to strike and what is left.** Change cards.'));
out.push(table(['Card A – the opening as first said', 'Card B – the opening as first said'], [
  ['_Nine o\'clock. Four items, forty minutes._', '_Ten past. Three items, half an hour._'],
  ['_⚠ Thank you all for coming, I know how busy you are._', '_⚠ Sorry to be chairing this again._'],
  ['_The agenda went out last night; item 2 is a decision._', '_Beirut is not on; item 3 is for information only._'],
  ['_⚠ If everybody is happy, perhaps we could start._', '_⚠ I hope nobody minds if we make a start._'],
  ['_That goes in as item 5; we shall reach it at twenty-five past._', '_The director is here for item 1 only, so item 1 is first._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the three numbers, and the absence sentence. ⚠ **Rows 2 and 4 on both cards are a request wearing a courtesy, and the room must say what each one concedes.** **Rows 5 are the strongest on either card**: one refuses an addition by means of the clock and one reorders an agenda by means of somebody else\'s diary — **and in both the chair has not asserted anything and both are obeyed.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the agenda you brought** and write **your opening**: time, items, minutes, and one absence sentence. ⚠ **Then strike every word that thanks anybody or asks permission.** **In this class the strikes averaged nine words and the longest was twenty-two** — **and two students found that striking them left no sentence at all, which is the finding and not a failure.**'));
out.push(p('**b**  Say it to your partner, flat. Your partner says **what the opening rests on** — the agenda, the clock, an absence, or the chair. ⚠ **Then the harder question: which of your sentences could the most senior person in the room contradict?** — **and a well-built opening gives them nothing to contradict, because every part of it is a fact they can check.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Shihabi chairs the morning call and he is the most junior person on it: twenty-six, three years in, and the rota put him there in September, with two bureau chiefs and the regional editor, and for the first eleven calls he opened with thanks and an apology. Mrs Khoury asked what the thanks did, and said it is the question the room should sit with, because thanks at the opening feels like courtesy and is a request: thank you for coming says that their being there was a favour, and a man whose attendance is a favour can withdraw it at item 2, politely, and the chair has no answer. Mr Attar asked about the apology, and sorry it is me again put the whole call in a bad position in four words, because everybody then had to reassure him, which took a minute and the regional editor did it twice, and after that the call was about whether he minded chairing. Mrs Oueidat asked what the opening is now, and nine o\'clock, four items, forty minutes, and then one sentence about who is not on the call and what follows from it: Beirut is not on and item 3 is theirs, so item 3 is for information only. And Mrs Oueidat said that is the sentence to look at, because it is doing the work rank would have done: it tells three senior people what cannot be decided this morning, and the reason is not the chair\'s preference but that the people whose item it is are not there, which anybody can verify in a second. Dr Qabbani said nobody can argue with an empty chair, and Mrs Khoury said nobody can, and that is the whole method of the unit, because a junior chair who says he would rather not decide item 3 has offered a preference to people senior enough to overrule it. Mrs Rizk said hers is a committee and her own director sits on it, and then the clock is her strongest instrument and she should say it twice, because a chair who has said the number twice has made the clock a third party, and a third party can hurry a director when a chair cannot. Mr Tayara asked whether the agenda has to have gone out, and it has to have gone out and you have to say when. Mrs Tarabishi asked about an item added at the opening, and then it goes last and you say so as you write it down, and the chair has not refused anything: the clock has. Mrs Ajouz asked about the tone, and flat, with no rise at the end of any of it. And Mr Shihabi said the thing he will take away is the eleventh call and the twelfth: on the eleventh he apologised and they finished at nine fifty-one, and on the twelfth he said nine o\'clock, four items, forty minutes, and they finished at nine thirty-eight, and the regional editor sent him two words afterwards, which were better, thanks, and he has thought about them for a month._'));
out.push(p('**Listener task:** write your partner\'s three numbers and their absence sentence.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mr Shihabi wrote for the reporter who takes the chair when he is away. Answer the questions.'));
out.push(model([
  '**T. SHIHABI** · _note for whoever has the chair on Thursday_ · _the morning call, four items, forty minutes_ · **14 January**',
  '**You are the most junior person on this call and so am I.** ⚠ **Nothing in this note is about being more confident.** **It is six sentences, and they work when you say them flatly, because none of them rests on you.**',
  '**The opening, word for word.** _Nine o\'clock. Four items, forty minutes. The agenda went out last night._ **Then the absence: _Beirut is not on and item 3 is theirs, so item 3 is for information only._** **Say it in that order and then stop talking.**',
  '**What not to say, and why it costs you the call.** **Do not thank anybody for coming.** ⚠ **Thanks says that their being there was a favour, and a man whose attendance is a favour can withdraw it at item 2 and you will have no answer.** **Do not apologise for chairing.** **The call then spends a minute reassuring you and afterwards it is about whether you mind.**',
  '**The clock, twice.** **Once at the opening and once at the halfway mark: _we are at twenty-two minutes_.** ⚠ **After the second one the clock is a third party in the conversation, and a third party can hurry a bureau chief when you cannot.** **Do not say _we are running out of time_, which is a complaint; say the number.**',
  '**If somebody adds an item at the door.** **It goes in last and you say so as you write it: _that goes in as item 5 and we shall reach it at twenty-five past._** ⚠ **You have refused nothing.** **The clock has** — **and the clock is on the agenda, which went out last night.**',
  '**The one thing that is genuinely hard.** **The silence after the opening.** **It is about four seconds and it feels like twenty, and the temptation is to fill it with the thanks you have just struck out.** ⚠ **Do not fill it.** **Somebody senior will speak into it, on item 1, which is what you want** — **and the call has then started on the agenda instead of on you.**',
  '**One more sentence, for the halfway mark, and it is the only one you say twice.** _We are at twenty-two minutes._ ⚠ **Not _we are running short_, which is a complaint and invites somebody to tell you that the item matters** — **and a number cannot be argued with by anybody, including a bureau chief who has thirty seconds of a point left.**',
  '**And if somebody asks why you are chairing.** **The rota, in four words, and then the next item.** ⚠ _The rota, since September._ **Do not explain, do not agree that it is odd, and do not say that you did not ask for it** — **because all three of those put the question of who should be chairing on an agenda that went out last night without it.**',
  '**And one number, because you will want it.** **My eleventh call, with the apology, finished at nine fifty-one.** **My twelfth, without it, finished at nine thirty-eight** — **and the agenda was the same length.**',
]));
out.push(item('1', 'What does he say the note is not about, and what is it instead?'));
out.push(item('2', 'Why must the chair say the number of minutes rather than that time is running out?'));
out.push(item('3', 'What does he say about the silence after the opening, and what should fill it?'));
out.push(writers([
  'A note to the next junior chair: **you and the reader are both the most junior person present** → **the opening, word for word** → **what not to say, and what it costs** → **the clock, twice, with the second instance quoted** → **the procedure for an item added at the door** → **the one thing that is genuinely hard** → **and one number from your own experience.**',
  '⚠ **Quote the sentences, do not describe them.** **A note that says _open briskly and set out the timings_ cannot be used by anybody** — **and _nine o\'clock, four items, forty minutes_ can be said by a frightened person at nine o\'clock on Thursday, which is this genre\'s test.**',
  '**Say what each struck phrase costs, in a consequence and not in a principle.** ⚠ _A man whose attendance is a favour can withdraw it at item 2._ **That is a thing that will happen.** **_It undermines your authority_ is a thing that cannot be observed and will not be believed by somebody who has never chaired.**',
  '**Give the hard part its own paragraph and name the temptation.** ⚠ **The four seconds of silence, and the urge to fill it with the thanks you have just struck.** **A note that pretends the method is comfortable will be abandoned at the first silence** — **and one that says the silence is four seconds and feels like twenty will be trusted.**',
  '⚠ And **end on a number of your own.** _My eleventh call finished at nine fifty-one and my twelfth at nine thirty-eight, and the agenda was the same length._ **One measurement from your own chairing outweighs every piece of advice in the note** — **because the reader can check it against their own first Thursday.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note to the next junior chair (120 words or more).'));
out.push(p('**______________** · _note for _______________ · _______________ · **______________**   **You are ______________ and so am I.** ⚠ **Nothing in this note is about ______________.**   **The opening, word for word.** **______________.** **Then the absence: ______________.**   **What not to say, and why it costs you the meeting.** ⚠ **Do not ______________.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The opening quoted, word for word',
  'No thanks and no apology anywhere in it',
  'The cost of each struck phrase, as a consequence',
  'One number from your own chairing',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their opening**, flat, and the room says what it rests on.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the opening word for word, what not to say and its cost, the clock twice, the item added at the door, the hard part, and one number of your own.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the opening quoted word for word, no thanks and no apology, and one consequence under each prohibition.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **One count on the board: how many words were struck from the ten openings?** **In this class an average of nine, with a longest of twenty-two** — **and two openings had nothing left, which is the finding.** **Then read the two that had nothing left and let the room build one each.** **Then Mr Shihabi\'s two numbers, nine fifty-one and nine thirty-eight, and the regional editor\'s two words.**'));
out.push(hw('**Write your opening and then strike every word that thanks anybody or asks permission.** ⚠ **Count the strikes.** **Then do the harder half: say the struck version at the next meeting you chair or attend and write down the time the meeting finished.** **In this class the finishing times moved by between four and thirteen minutes** — **and one meeting ran longer, which the room should hear about.** **Bring the count and the time.** **17.2 stops somebody senior without stopping them**, so bring the last thing a senior person said at length in a meeting of yours.'));

// ===================== 17.2 =====================
out.push(pb());
out.push(h2('17.2  Stopping somebody senior without stopping them'));
out.push(p('**Function:** stopping somebody senior without stopping them   ·   **Grammar:** _may I hold that until item four_ — the deferral that is kept   ·   **Pronunciation:** the deferral said in their first clause, not after two minutes'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the last thing a senior person said at length in a meeting of yours, and which item it belonged to.** ⚠ **The item number, and if it belonged to no item, say so.** **In this class seven of the ten belonged to a later item and three belonged to no item on the agenda** — **and your teacher writes the ten item numbers on the board, because the deferral needs one and the three without one need something else.**'));
out.push(board('May I hold that until item four?', 'Could we come back to that, perhaps?'));
out.push(p('**b**  Which two can be said to a bureau chief in his first clause? **1** _Sorry, if I could just stop you there for one moment._  **2** _May I hold that until item four? It is item four, and we are at eleven minutes._  **3** _I think we are straying slightly from the point, with respect._  **4** _That is item 3 and Beirut is not on the call; may I take it to the note instead?_  **5** _Perhaps we could park that for now and come back to it if there is time._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the deferral must have?   **A** an apology in front of it   **B** **an item number and a time**, and then the deferral must actually be kept   **C** the senior person\'s agreement before it is said'));
out.push(p('**b**  Listen again. **1** What does Mr Attar say happens if the deferral is not kept?   **2** What does Mrs Khoury say about saying it in the first clause rather than after two minutes?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.3  Held until item four, and reached at item four', [
  ['Ms Huda', 'Mr Attar chairs a review with his team lead and a director in the room.'],
  ['Mr Attar', '⚠ **And the director talks, which is his job, and in March he talked for nine minutes about something that was item 4.** **I let him, because he is a director** — **and item 4 then had eleven minutes instead of twenty and the decision in it was taken badly.**'],
  ['Mrs Khoury', 'What is the sentence?'],
  ['Mr Attar', '⚠ **Six words and the item number.** _May I hold that until item four?_ **And then the number of minutes we are at, because the number is the reason and I am not.**'],
  ['Mrs Oueidat', 'And when do you say it?'],
  ['Mrs Khoury', '⚠ **In his first clause, which the room will find almost impossible and which is the whole cycle.** **After two minutes you are interrupting a man who has begun.** **In his first clause you are routing a contribution to its item** — **and those are different acts, although the words are the same.**'],
  ['Dr Qabbani', 'It feels ruder earlier.'],
  ['Mrs Oueidat', '⚠ **It feels ruder and it is kinder, and the room should be made to say why.** **A man stopped after two minutes has had two minutes wasted and knows it.** **A man routed in his first clause has lost nothing** — **and he will say the same thing at item 4 to people who are expecting it.**'],
  ['Mr Shihabi', 'What makes it work? It is still a junior telling a director to stop.'],
  ['Mr Attar', '⚠ **It is not a stop.** **It is a destination with a time on it, and the destination is on a document he has had since last night.** **_It is item four_ is a fact about the agenda** — **and _we are at eleven minutes_ is a fact about the clock, and neither of them is my opinion of his contribution.**'],
  ['Mrs Rizk', 'And then you have to reach item four.'],
  ['Mr Attar', '⚠ **And this is the part nobody tells you.** **A deferral that is not kept is worse than an interruption, because you have taken something from a man and not given it back** — **and he will not accept a deferral from you again, ever, and he will be right.**'],
  ['Mrs Khoury', '⚠ **Which turns the sentence into a promise and not a technique.** **The room should notice that the cost of the method is borne entirely by the chair: you now have to manage the clock so that item 4 exists** — **and a chair who defers three contributions into an item that gets four minutes has done something worse than letting the meeting drift.**'],
  ['Mr Tayara', 'How do you open item four?'],
  ['Mr Attar', '⚠ **With his name and his subject, before anything else.** _Item four. The director had a point on this at nine minutes past; may we take that first?_ **He is then the first speaker on his own item, by name** — **and nobody in the room has forgotten that he was held.**'],
  ['Mrs Tarabishi', 'And the three contributions that belong to no item?'],
  ['Mrs Oueidat', '⚠ **They go to the note and you say so, which is the second form.** _That is not on this agenda; may I take it to the note and send it round with the minute?_ **A note is a real destination and _we shall come back to it_ is not** — **and in this class three of ten deferrals had no destination at all, which is a parking place and not a deferral.**'],
  ['Mrs Ajouz', 'Does anybody ever refuse?'],
  ['Mr Attar', '⚠ **Twice in a year, both times the same person, and both times he said _no, this is item two_** — **and he was right once.** **A chair who is wrong about the item number should say so in four words and move on** — **_you are right, it is item two_** — **because the method rests on the agenda and the agenda is checkable by everybody.**'],
  ['Mr Attar', '🔊 ⚠ **And the thing I shall take away is the March review.** **Nine minutes of a director\'s time went into an item that was not being discussed, and the decision at item 4 was taken in eleven minutes by people who were tired** — **and I had thought of letting him talk as a courtesy, when it was the most expensive thing I did that quarter.**'],
]));
out.push(sp());
out.push(box('Language box – the deferral that is kept', [
  '**Six words and an item number.** ⚠ _May I hold that until item four?_ **Then the clock: _we are at eleven minutes._** **The item number is a fact about a document they have had since last night and the number of minutes is a fact about the clock** — **and neither is your opinion of what they were saying.**',
  '**Say it in their first clause.** ⚠ **After two minutes you are interrupting a man who has begun; in his first clause you are routing a contribution to its item** — **and those are different acts although the words are the same.** **It feels ruder earlier and it is kinder: a man stopped after two minutes has had two minutes wasted and knows it.**',
  '**Then you have to reach the item.** ⚠ **A deferral that is not kept is worse than an interruption, because you have taken something from somebody and not given it back** — **and they will not accept a deferral from you again, and they will be right.**',
  '**Which makes the sentence a promise and not a technique.** ⚠ **The cost is borne entirely by the chair: you now have to manage the clock so that item 4 exists.** **A chair who defers three contributions into an item that gets four minutes has done something worse than letting the meeting drift.**',
  '**Open the item with their name and their subject, before anything else.** ⚠ _Item four. The director had a point on this at nine minutes past; may we take that first?_ **They are then the first speaker on their own item, by name.**',
  '**And where the contribution belongs to no item, the destination is the note.** ⚠ _May I take it to the note and send it round with the minute?_ **A note is a real destination; _we shall come back to it_ is not** — **and a deferral with no destination is a parking place, which everybody in the room recognises.**',
  '**Pronunciation.** 🔊 **Track 17.4** **Say _may I hold that until item four_ with no fall on _hold_ and no rise at the end.** ⚠ **A fall on _hold_ makes it a ruling and a rise makes it a plea** — **and the flat version is a question about an agenda, which is the only thing a junior chair can ask of a senior person and expect a yes.**',
  '**Practise:** Defer it, with the item and the clock. **1** a director at nine minutes past  **2** a contribution belonging to no item  **3** a point that is really two points  **4** a deferral you must now open  **5** one you got wrong, corrected in four words',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the contribution from the card. B defers it **with an item number and the clock**, or **to the note** if it belongs to no item. ⚠ **Two rows on each card have no destination and B must supply one.** Change cards.'));
out.push(table(['Card A – the contribution', 'Card B – the contribution'], [
  ['_The director, at nine past, on next quarter\'s staffing._', '_The country director, at six past, on the audit._'],
  ['_⚠ Perhaps we could park that for now._', '_⚠ Let us come back to that if there is time._'],
  ['_A bureau chief, in his first clause, on item 3._', '_A judge, in his first clause, on the glossary._'],
  ['_⚠ We are straying slightly from the point._', '_⚠ Shall we take that offline?_'],
  ['_Something that is on no agenda and matters._', '_A point that is really two: one is item 2, one is nothing._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the destination, the item number, and the clock. ⚠ **Rows 2 and 4 on both cards have no destination and everybody in the room knows it** — **and the room should say what each one actually means, which is _stop talking_.** **Rows 5 are the hardest**: one has no item at all and goes to the note, and one is two points that must be split out loud, **with the item number on the first and the note for the second.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the contribution you brought** and write **the deferral**: six words, the item number, the clock. ⚠ **If it belongs to no item, write the note version instead.** **Then write the sentence you will open that item with, by name.** **In this class seven deferrals had an item and three had none** — **and the three note versions were the harder half and all three were honoured, because a note is written and an item is only intended.**'));
out.push(p('**b**  Say it to your partner, flat, as if in their first clause. Your partner says **what the deferral rests on** and **whether it has a destination.** ⚠ **Then the harder question: when, exactly, will you reach it?** — **and if you cannot name a minute, the deferral is a parking place.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Attar chairs a review with his team lead and a director in the room, and the director talks, which is his job, and in March he talked for nine minutes about something that was item 4. He let him, because he is a director, and item 4 then had eleven minutes instead of twenty and the decision in it was taken badly. Mrs Khoury asked what the sentence is, and six words and the item number: may I hold that until item four, and then the number of minutes we are at, because the number is the reason and the chair is not. Mrs Oueidat asked when you say it, and Mrs Khoury said in his first clause, which the room will find almost impossible and which is the whole cycle, because after two minutes you are interrupting a man who has begun and in his first clause you are routing a contribution to its item. Dr Qabbani said it feels ruder earlier, and Mrs Oueidat said it feels ruder and is kinder: a man stopped after two minutes has had two minutes wasted and knows it, and a man routed in his first clause has lost nothing and will say the same thing at item 4 to people who are expecting it. Mr Shihabi asked what makes it work, since it is still a junior telling a director to stop, and it is not a stop: it is a destination with a time on it, and the destination is on a document he has had since last night. Mrs Rizk said and then you have to reach item four, and this is the part nobody tells you: a deferral that is not kept is worse than an interruption, because you have taken something from a man and not given it back, and he will not accept a deferral from you again, ever, and he will be right. Mrs Khoury said that turns the sentence into a promise and not a technique, and the cost is borne entirely by the chair. Mr Tayara asked how you open item four, and with his name and his subject, before anything else, so that he is the first speaker on his own item. Mrs Tarabishi asked about contributions that belong to no item, and they go to the note and you say so, because a note is a real destination and we shall come back to it is not. Mrs Ajouz asked whether anybody ever refuses, and twice in a year, both times the same person, and he was right once. And Mr Attar said the thing he will take away is the March review: nine minutes of a director\'s time went into an item that was not being discussed, and the decision at item 4 was taken in eleven minutes by people who were tired, and he had thought of letting him talk as a courtesy when it was the most expensive thing he did that quarter._'));
out.push(p('**Listener task:** write the deferral, its destination, and the minute at which it will be reached.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mr Attar wrote to himself after the March review. Answer the questions.'));
out.push(model([
  '**J. ATTAR** · _note on the review of 12 March_ · _two items, one director, fifty minutes_ · **12 March**',
  '**What happened, with the clock.** **The director began at nine minutes past and stopped at eighteen.** ⚠ **Nine minutes, on next quarter\'s staffing, which is item 4.** **Item 4 began at thirty-nine and the decision in it was taken at fifty, in eleven minutes, by five people who had been in the room for fifty.**',
  '**What I thought I was doing.** **Being courteous to a director.** ⚠ **What I was actually doing was moving twenty minutes of item 4 into item 1 and taking it out of the decision** — **and nobody in the room could see that happening, including me, because the clock was not being said out loud.**',
  '**The sentence I did not say.** _May I hold that until item four? It is item four, and we are at nine minutes._ **Six words, the item number, the clock.** ⚠ **Nothing in it is about his contribution and nothing in it is mine: the item number is on a document he has had since last night and the minutes are on the wall.**',
  '**Why it has to be in his first clause.** **At nine minutes past he had begun a sentence.** **At eleven minutes past he had made a case, and stopping a man who has made a case is taking two minutes off him** — **and he knows it and the room knows it.** ⚠ **Routing a contribution and interrupting one use the same words and are not the same act.**',
  '**The part that is mine and costs me something.** **Having said it, I have to reach item 4 with twenty minutes in hand.** ⚠ **A deferral that is not kept is worse than the nine minutes** — **because I shall have taken something from him and not given it back, and he will never accept another from me.**',
  '**And how item 4 opens.** _Item four. The director had a point on this at nine minutes past; may we take that first?_ **He is the first speaker, by name, on his own item** — **and the room has watched a deferral being honoured, which is worth more to me than the twenty minutes.**',
  '**What I did at the next review, since the note is useless without it.** **I said it at six minutes past, in his second clause, and he stopped and said _item four, yes_.** ⚠ **Item 4 then ran from thirty-one to fifty with him speaking first** — **and the decision in it took four minutes, against eleven in March, because the people taking it were not tired and had heard his point in the item it belonged to.**',
  '**One thing I have not solved.** **He is right sometimes.** **In November he told me the point was item 2 and it was** — **and the four words are _you are right, it is item two_, with nothing after them.** ⚠ **A chair who defends a wrong item number has moved the method from the agenda back on to himself, which is where it cannot survive.**',
]));
out.push(item('1', 'What does he say he thought he was doing, and what was he actually doing?'));
out.push(item('2', 'Why does the deferral have to come in the first clause rather than two minutes later?'));
out.push(item('3', 'What does he say costs him something, and what is the consequence of not paying it?'));
out.push(writers([
  'A note on a meeting that went wrong by nine minutes: **what happened, with the clock on every event** → **what you thought you were doing, against what you were doing** → **the sentence you did not say, quoted** → **why it belongs in the first clause** → **the part that costs you something** → **how the item opens** → **and one thing you have not solved.**',
  '⚠ **Put a time on every event in the first paragraph.** _He began at nine past and stopped at eighteen; item 4 began at thirty-nine and the decision was taken at fifty._ **A note about a meeting with no clock in it is a complaint** — **and the clock is what turns nine minutes of courtesy into twenty minutes taken out of a decision.**',
  '**Separate what you thought you were doing from what you were doing.** ⚠ _Being courteous to a director_ against _moving twenty minutes of item 4 into item 1_. **Both are true and only the second is a fact about the meeting** — **and this is 12.1 in a room, at speed, with no second draft.**',
  '**Name the cost that falls on you.** ⚠ _Having said it, I have to reach item 4 with twenty minutes in hand._ **A note that presents the method as free is useless** — **and the honest version says that the chair has written a promise and must now manage the clock to keep it.**',
  '⚠ And **end on the thing you have not solved.** _He is right sometimes._ **Give the four words you say when he is** — _you are right, it is item two_ — **and say why there is nothing after them: a chair who defends a wrong item number has moved the method from the agenda back on to himself.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note on a meeting that went wrong by a few minutes (120 words or more).'));
out.push(p('**______________** · _note on _______________ · _______________ · **______________**   **What happened, with the clock.** **______________ began at ______________ and stopped at ______________.** ⚠ **______________ minutes, on ______________, which is item ___.**   **What I thought I was doing.** **______________.** ⚠ **What I was actually doing was ______________.**   **The sentence I did not say.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A time on every event in the first paragraph',
  'The sentence quoted, with its item number',
  'What you thought, separated from what you did',
  'The cost that falls on the chair',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their clock paragraph**, and the room says where the minutes went.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the clock, the two accounts of what you were doing, the sentence quoted, the first clause, the cost, the opening of the item, and the thing you have not solved.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a time on every event, the deferral quoted with its item number, and the cost to the chair stated.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **One count and one question.** **How many of the ten deferrals had a destination?** **Seven an item and three the note, which means ten** — **and the room should be told that the first time it ran, three had none at all.** **Then the question: who has deferred something and not reached it?** **Ask it and wait, because most of the room has** — **and then Mr Attar\'s March review, which is the most expensive courtesy in the unit.**'));
out.push(hw('**Write your deferral and the sentence that opens the item it goes to.** ⚠ **Then do the harder half: use it, and write down whether you reached the item and at what minute.** **In this class eight of ten reached the item and two did not** — **and both of the two had deferred to an item that came last.** **Bring the minute.** **17.3 takes agreement that nobody quite gave**, so bring one decision from a meeting of yours that nobody actually voted on.'));

// ===================== 17.3 =====================
out.push(pb());
out.push(h2('17.3  Taking agreement that nobody quite gave'));
out.push(p('**Function:** taking agreement that nobody quite gave   ·   **Grammar:** _I shall take that as agreed unless somebody tells me otherwise_   ·   **Pronunciation:** the formula said once, flat, with the minute\'s words inside it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one decision from a meeting of yours that nobody actually voted on, and the words it went into the minute in.** ⚠ **The minute\'s words, not your summary of them.** **In this class nine of ten decisions had no vote and six had no words anybody in the room would recognise** — **and your teacher writes the ten minuted sentences on the board, because the formula has to contain one of them.**'));
out.push(board('I shall take that as agreed unless somebody tells me otherwise.', 'Is everybody happy with that, then?'));
out.push(p('**b**  Which two can be answered by a person who disagrees? **1** _Is everybody happy with that?_  **2** _I shall take it as agreed that the figure is published with its denominator from 1 March, unless somebody tells me otherwise before I send the minute at eleven._  **3** _So we are all agreed, good._  **4** _Unless I hear otherwise, the minute will say that the inspection follows the rebuild and not the other way round. It goes out in an hour._  **5** _I think there is a consensus on that._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the formula must contain?   **A** the chair\'s view of what was decided   **B** **the words that will go in the minute**, and a route and a time for objecting   **C** a request for a show of hands'));
out.push(p('**b**  Listen again. **1** What does Mrs Rizk say _is everybody happy_ asks a senior person to do?   **2** What does Mrs Khoury say the formula does that a vote does not?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.5  Agreed, unless somebody tells me otherwise', [
  ['Ms Huda', 'Mrs Rizk chairs a committee on which her own country director sits.'],
  ['Mrs Rizk', '⚠ **And nothing is ever voted on.** **Nine years, four meetings a year, and I have seen one vote** — **so every decision on that committee is taken by somebody saying a sentence and nobody contradicting it.**'],
  ['Mr Attar', 'And the sentence used to be?'],
  ['Mrs Rizk', '⚠ _Is everybody happy with that?_ **Which I now think is the worst sentence in this unit.** **It asks a senior person to declare themselves unhappy in front of their own staff** — **and nobody does, so it produces agreement with no information in it.**'],
  ['Mrs Khoury', '⚠ **And the room should see what it costs, because the cost arrives six weeks later.** **An objection that was not made in the room is made afterwards, to somebody else, about the minute** — **and a chair who has collected ten silences has a document that four people will later say they did not agree to.**'],
  ['Mrs Oueidat', 'So what replaces it?'],
  ['Mrs Rizk', '⚠ **The formula, and it has three parts.** _I shall take it as agreed that the figure is published with its denominator from 1 March, unless somebody tells me otherwise before I send the minute at eleven._ **What is agreed, in the minute\'s own words, a route, and a time.**'],
  ['Dr Qabbani', 'The minute\'s own words.'],
  ['Mrs Khoury', '⚠ **Which is the part that does the work and the part everybody drops.** **A chair who says _we are agreed on the publication point_ has agreed nothing** — **and a chair who says the sentence that will be in the document has given the room the only thing they can object to, which is the document.**'],
  ['Mr Shihabi', 'And the route?'],
  ['Mrs Rizk', '⚠ **_Tells me_, and in writing if they prefer, and before eleven.** **A senior person who will not contradict me in front of six people will send me two lines at ten past ten** — **and I have had four of those in two years, and all four changed the minute.**'],
  ['Mrs Khoury', '⚠ **Which is the finding of the cycle and it is an arithmetical one.** **Under _is everybody happy_ she got no objections and four later denials.** **Under the formula she got four objections and no denials** — **and the four objections arrived in writing, before the minute, from people who had said nothing in the room.**'],
  ['Mr Tayara', 'Is it not a trick? You are taking agreement that was not given.'],
  ['Mrs Oueidat', '⚠ **It is the opposite of a trick and the room should be able to say why.** **Silence is going to be read as agreement whatever anybody does** — **that is what minutes are.** **The formula says out loud what is going to be done with the silence, and gives a way out of it with a time on it** — **and a chair who does not say it has taken the same agreement and told nobody.**'],
  ['Mrs Tarabishi', 'How many times may you use it in one meeting?'],
  ['Mrs Rizk', '⚠ **Once per decision and never for a report.** **A chair who says it after every item has turned it into a verbal tic and the room stops hearing it** — **and in a four-item meeting with one decision it is said once, which is why it lands.**'],
  ['Mrs Ajouz', 'And if somebody says no in the room?'],
  ['Mrs Khoury', '⚠ **Then you have what you wanted and you say so.** **_Then it is not agreed; the minute will say that the committee did not reach a position on it_** — **and that sentence is 14.6 arriving in a room, and it is a better minute than a false agreement.**'],
  ['Mrs Rizk', '🔊 ⚠ **And the thing I shall take away is the ten past ten.** **The director has never once contradicted me in that room and has written to me four times before the minute went out** — **and for nine years I thought he agreed with everything, which is a thing I believed because of a sentence I was saying.**'],
]));
out.push(sp());
out.push(box('Language box – taking the agreement out loud', [
  '**Three parts: what is agreed in the minute\'s own words, a route, and a time.** ⚠ _I shall take it as agreed that the figure is published with its denominator from 1 March, unless somebody tells me otherwise before I send the minute at eleven._',
  '**_Is everybody happy with that?_ is the worst sentence in the unit.** ⚠ **It asks a senior person to declare themselves unhappy in front of their own staff** — **and nobody does, so it produces agreement with no information in it, and the objection arrives six weeks later about the minute.**',
  '**The minute\'s own words are the part everybody drops.** ⚠ **_We are agreed on the publication point_ has agreed nothing.** **The sentence that will be in the document gives the room the only thing they can object to** — **which is the document.**',
  '**The route must be usable in private.** ⚠ **_Tells me_, in writing if they prefer, before eleven.** **A senior person who will not contradict you in front of six people will send two lines at ten past ten** — **and four of those in two years all changed the minute.**',
  '**It is not a trick, and the room has to be able to say why.** ⚠ **Silence is going to be read as agreement whatever anybody does: that is what minutes are.** **The formula says out loud what will be done with the silence and gives a way out of it with a time on it** — **and a chair who stays quiet has taken the same agreement and told nobody.**',
  '**Once per decision, never for a report.** ⚠ **A chair who says it after every item has made it a verbal tic and the room stops hearing it.** **And if somebody does object: _then it is not agreed; the minute will say that the committee did not reach a position_** — **which is a better minute than a false agreement.**',
  '**Pronunciation.** 🔊 **Track 17.6** **Say the whole formula on one level, with no stress on _agreed_ and none on _otherwise_.** ⚠ **Stress on _agreed_ makes it a ruling; stress on _otherwise_ makes it a dare.** **Flat, it is a procedural statement about a document** — **and a procedural statement can be answered in writing at ten past ten.**',
  '**Practise:** Take it as agreed, with the minute\'s words. **1** a figure published from a date  **2** an order of two things reversed  **3** a definition the room has not settled  **4** a decision with one dissent in the room  **5** a report, where the formula must not be used',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the item from the card. B gives **the formula**: the minute\'s words, the route, the time. ⚠ **Two rows on each card are reports and not decisions** — **and there B says that the formula must not be used and gives the one-line minute instead.** Change cards.'));
out.push(table(['Card A – the item', 'Card B – the item'], [
  ['_Publication of figures with denominators from 1 March._', '_The inspection to follow the rebuild, not precede it._'],
  ['_⚠ The branch\'s monthly numbers, for information._', '_⚠ The audit timetable, for information._'],
  ['_The glossary to be the profession\'s and not the regulation\'s._', '_The register to mean a printed book for this purpose._'],
  ['_⚠ A report on last quarter\'s applications._', '_⚠ A note on the new forms, circulated._'],
  ['_A decision with one person openly against it._', '_A decision the director has written to you about at ten past ten._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the minute\'s words, the route, the time. ⚠ **Rows 2 and 4 on both cards are reports and the formula must not be used**, because a chair who takes a report as agreed has invented a decision. **Rows 5 are the pair the cycle turns on**: one has an open dissent and the minute says that no position was reached, **and one has a written objection that arrived before the minute, which is the method working and is minuted as an objection.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the decision you brought** and write **the formula** around the minute\'s own words. ⚠ **Then write the one-line minute that follows if somebody objects.** **In this class six of ten could not produce the minute\'s words at all** — **and all six discovered that the decision they had been carrying for weeks did not exist as a sentence anywhere.**'));
out.push(p('**b**  Say it to your partner, flat. Your partner answers it **as the senior person who disagrees but will not say so in the room.** ⚠ **Then the harder question: what time is on your formula, and is it a time you can keep?** — **and a route with no time on it is _is everybody happy_ in a longer form.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Rizk chairs a committee on which her own country director sits, and nothing is ever voted on: nine years, four meetings a year, and she has seen one vote, so every decision on that committee is taken by somebody saying a sentence and nobody contradicting it. Mr Attar asked what the sentence used to be, and is everybody happy with that, which she now thinks is the worst sentence in the unit, because it asks a senior person to declare themselves unhappy in front of their own staff, and nobody does, so it produces agreement with no information in it. Mrs Khoury said the room should see what it costs, because the cost arrives six weeks later: an objection that was not made in the room is made afterwards, to somebody else, about the minute, and a chair who has collected ten silences has a document that four people will later say they did not agree to. Mrs Oueidat asked what replaces it, and the formula, which has three parts: what is agreed in the minute\'s own words, a route, and a time. Dr Qabbani repeated the minute\'s own words, and Mrs Khoury said that is the part that does the work and the part everybody drops, because a chair who says we are agreed on the publication point has agreed nothing, and a chair who says the sentence that will be in the document has given the room the only thing they can object to. Mr Shihabi asked about the route, and tells me, in writing if they prefer, and before eleven: a senior person who will not contradict her in front of six people will send two lines at ten past ten, and she has had four of those in two years and all four changed the minute. Mrs Khoury said that is the finding of the cycle and it is arithmetical: under is everybody happy she got no objections and four later denials, and under the formula she got four objections and no denials. Mr Tayara asked whether it is not a trick, since she is taking agreement that was not given, and Mrs Oueidat said it is the opposite of a trick, because silence is going to be read as agreement whatever anybody does, and the formula says out loud what will be done with the silence. Mrs Tarabishi asked how many times you may use it in one meeting, and once per decision and never for a report. Mrs Ajouz asked what happens if somebody says no in the room, and then you have what you wanted and you say so. And Mrs Rizk said the thing she will take away is the ten past ten: the director has never once contradicted her in that room and has written to her four times before the minute went out, and for nine years she thought he agreed with everything, which is a thing she believed because of a sentence she was saying._'));
out.push(p('**Listener task:** write the minute\'s words, the route and the time, and the one-line minute if somebody objects.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Rizk wrote for the committee\'s standing orders. Answer the questions.'));
out.push(model([
  '**H. RIZK** · _proposed note for the standing orders_ · _the committee, nine years, one vote_ · **28 March**',
  '**The position as it is.** **The standing orders provide for a vote and the committee has taken one vote in nine years.** ⚠ **Every other decision has been taken by the chair saying a sentence and nobody contradicting it, which is the ordinary way such committees work and is not a fault.** **The fault is in which sentence.**',
  '**What the chair used to say.** _Is everybody happy with that?_ **It asks a senior member to declare themselves unhappy in front of their own staff.** ⚠ **Nobody does.** **So the sentence produces agreement containing no information, and the objection arrives six weeks later, to somebody else, about the minute.**',
  '**The arithmetic of two years.** **Under the old sentence: no objections in the room and four members who later said they had not agreed.** **Under the new one: four objections and no later denials.** ⚠ **The same four people in both columns.**',
  '**What the chair says now, and it has three parts.** _I shall take it as agreed that the figure is published with its denominator from 1 March, unless somebody tells me otherwise before I send the minute at eleven._ **The minute\'s own words, a route, a time.**',
  '**Why the minute\'s own words and not a summary.** ⚠ **_We are agreed on the publication point_ has agreed nothing and cannot be objected to.** **The sentence that will appear in the document is the only thing a member can disagree with** — **because it is the only thing that will exist tomorrow.**',
  '**Why the route must be private and timed.** **Four written objections in two years, three of them from the same member, none of them made in the room.** ⚠ **All four arrived between ten past ten and eleven and all four changed the minute** — **and a route with no time on it produces objections after the minute has gone, which is a correction and not an objection.**',
  '**One sentence for the case where a member objects in writing.** **The objection is minuted in the objector\'s own words and the decision is minuted as not reached.** ⚠ **Four of the four written objections were adopted in full** — **and in none of the four did the member ask for that.**',
  '**Two limits, which the committee should adopt with the rest.** **Once per decision and never for a report: a chair who takes a report as agreed has invented a decision.** ⚠ **And where a member objects in the room, the minute says that the committee did not reach a position, which is a true minute and not a failure of chairing.**',
  '**One thing I did not expect to have to write down.** **The sentence is said flatly, on one level, and the chair stops talking afterwards.** ⚠ **A rise at the end makes it a dare and a stress on _agreed_ makes it a ruling** — **and a junior chair cannot afford either, because both invite the most senior member to settle the question of who is chairing.**',
]));
out.push(item('1', 'What does she say the fault is not, and what is it?'));
out.push(item('2', 'What does the arithmetic of the two years show, and about whom?'));
out.push(item('3', 'What two limits does she ask the committee to adopt, and why the second?'));
out.push(writers([
  'A note proposing a procedure: **the position as it is, with a number** → **the old sentence and what it asks of a senior person** → **the arithmetic of two years, in two columns** → **the new sentence, quoted, with its three parts** → **why the minute\'s own words** → **why the route is private and timed** → **the limits** → **and one thing about delivery you did not expect to write down.**',
  '⚠ **Open by saying that the present practice is not a fault.** _It is the ordinary way such committees work._ **A note that opens by calling nine years of chairing wrong will be read as an attack on the chairs who did it** — **and the fault is in one sentence, which is a far easier thing for a committee to adopt.**',
  '**Put the arithmetic in two columns and name the overlap.** ⚠ _No objections and four later denials; four objections and no denials. The same four people in both columns._ **That last clause is the whole argument** — **and it is available only because somebody counted over two years.**',
  '**Quote the new sentence in full, once.** ⚠ **With the date, the route and the time in it.** **A procedure described in the abstract cannot be adopted** — **and a committee that adopts a sentence has adopted something a nervous chair can read off a card.**',
  '⚠ And **end on delivery, and say that you were surprised to have to.** _Said flatly, on one level, and the chair stops talking afterwards._ **A rise makes it a dare and a stress on _agreed_ makes it a ruling** — **and a junior chair cannot afford either, because both invite the most senior member to settle the question of who is chairing.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note proposing the formula to a committee (120 words or more).'));
out.push(p('**______________** · _proposed note for _______________ · _______________ · **______________**   **The position as it is.** **______________.** ⚠ **______________, which is the ordinary way such committees work and is not a fault.** **The fault is in ______________.**   **What the chair used to say.** **______________.** ⚠ **It asks ______________.**   **The arithmetic.** **Under the old sentence: ______________.** **Under the new one: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The present practice named as ordinary, not as a fault',
  'The arithmetic in two columns, with the overlap named',
  'The new sentence quoted in full, with route and time',
  'The two limits: once per decision, never for a report',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their formula**, flat, and the room objects to it as the senior member who will not speak.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the position, the old sentence, the arithmetic, the new sentence quoted, the minute\'s own words, the timed route, the limits, and the note on delivery.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the formula quoted with the minute\'s own words in it, a timed private route, and the present practice not called a fault.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **One count, and it is the one that decides the cycle: how many students could produce the minute\'s own words for their decision?** **Four of ten.** **Six could not, and all six found that a decision they had been carrying for weeks existed as a sentence nowhere** — **so read two of the six aloud as they now stand.** **Then Mrs Rizk\'s ten past ten, and the nine years she believed a man agreed with everything.**'));
out.push(hw('**Write the formula for one real decision**, with the minute\'s words, a private route and a time you can keep. ⚠ **Then do the harder half: use it, and count the objections.** **In this class the count has run from none to three** — **and every objection that came arrived in writing, from somebody who had said nothing in the room.** **Bring the count and the hour it arrived.** **17.4 minutes a disagreement so that both parties recognise themselves**, so bring a disagreement that two people in it would describe differently.'));

// ===================== 17.4 =====================
out.push(pb());
out.push(h2('17.4  Minuting a disagreement'));
out.push(p('**Function:** minuting a disagreement so that both parties recognise themselves   ·   **Grammar:** the two-sentence form, same shape, neutral reporting verb, no _however_   ·   **Pronunciation:** the two sentences read at the same weight'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **a disagreement from a meeting of yours, and the two positions in one sentence each.** ⚠ **Two sentences of about the same length, and no _however_ between them.** **In this class eight of ten first versions gave the second position less room than the first, and in six of the eight the shorter one was the position the speaker disagreed with** — **and your teacher writes the twenty sentences on the board in pairs and the room counts the words.**'));
out.push(board('The branch considered the day-book a register.', 'The inspectorate considered that it was not.'));
out.push(p('**b**  Which two would both parties recognise themselves in? **1** _The branch argued, somewhat optimistically, that the day-book was a register._  **2** _The branch considered the day-book to be a register for the purpose of regulation 11. The inspectorate considered that regulation 11 requires a printed register._  **3** _Although the inspectorate was clearly right, the branch disagreed._  **4** _The regional office considered October necessary because its cycle closes in November. The branch considered March necessary because the cold-chain line is rebuilt in February._  **5** _There was some disagreement about the date, which was eventually resolved._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the two sentences must share?   **A** the same conclusion   **B** **the same grammatical shape, the same reporting verb and roughly the same length**   **C** the chair\'s assessment of which is stronger'));
out.push(p('**b**  Listen again. **1** What does Mrs Oueidat say _however_ does to a minute?   **2** What does Mrs Khoury say about the reason clause?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.7  Two sentences, one shape', [
  ['Ms Huda', 'Mrs Oueidat minutes a terminology group that two judges sit on.'],
  ['Mrs Oueidat', '⚠ **And the two judges disagree, which is the point of the group.** **My first minutes gave one of them eleven words and the other thirty-one** — **and the one with eleven words wrote to me, politely, and asked whether he had been present.**'],
  ['Mrs Khoury', 'What was the fault?'],
  ['Mrs Oueidat', '⚠ **I had minuted the position I understood.** **The other one I had not followed, so I summarised it, and a summary of something you have not followed is eleven words** — **and he could tell from the length alone.**'],
  ['Mr Attar', 'So the two sentences have to be the same length?'],
  ['Mrs Khoury', '⚠ **Roughly, and that is the crude version of a real rule: the same grammatical shape and the same reporting verb.** **_The branch considered_ and _the inspectorate considered_.** **Not _argued_ and _considered_, and not _claimed_ and _explained_** — **because the verb is where a minute-taker\'s opinion hides, and everybody reads verbs.**'],
  ['Dr Qabbani', 'And _however_?'],
  ['Mrs Oueidat', '⚠ **_However_ decides the disagreement.** **It tells the reader that the second position corrects the first** — **and in a minute of a disagreement there is no correcting, because the whole document exists to record that two reasonable people did not agree.**'],
  ['Mr Shihabi', 'What goes in instead?'],
  ['Mrs Oueidat', '⚠ **A full stop.** **Two sentences, side by side, with nothing between them.** **The reader does the work and the reader is entitled to** — **and a minute that will not let a reader weigh two positions has taken a decision the group did not take.**'],
  ['Mrs Rizk', 'Does each position get its reason?'],
  ['Mrs Khoury', '⚠ **Each gets its reason or neither does, and this is where most minutes fail.** **_The regional office considered October necessary because its cycle closes in November_ and _the branch considered March necessary because the cold-chain line is rebuilt in February_.** **A reason on one side only makes that side the reasonable one** — **and the side with no reason looks like an objection rather than a position.**'],
  ['Mr Tayara', 'And if one of them gave no reason?'],
  ['Mrs Oueidat', '⚠ **Then neither gets one in the minute and you ask for the reason afterwards.** **Six words: _could you give me your reason for the minute?_** **In this group that question has produced a reason on nine occasions out of nine** — **and three of the nine reasons were better than anything said in the room.**'],
  ['Mrs Tarabishi', 'What tense does a minute use?'],
  ['Mrs Oueidat', '⚠ **The past, for everything that was said, and the present for what the document now provides.** _The group considered_ · _the glossary is the profession\'s and not the regulation\'s_. **A chair who writes _we will publish_ has put a promise in a record** — **and a record holds what was decided and not what anybody intends.**'],
  ['Mrs Ajouz', 'May the chair\'s own view go in?'],
  ['Mrs Khoury', '⚠ **Never, and in this unit that is an absolute.** **A junior chair who minutes their own view has spent the only thing the method gave them, which is that the minute is not theirs** — **and the senior people in the room will from then on read every minute as an argument.**'],
  ['Mrs Oueidat', '🔊 ⚠ **And the thing I shall take away is the judge\'s letter.** **He asked whether he had been present.** **He had been present for two hours and had spoken for about nine minutes** — **and the whole of the fault was that I had not followed him and had written the length of my understanding instead of the length of his position.**'],
]));
out.push(sp());
out.push(box('Language box – the two-sentence form', [
  '**Two sentences, side by side, with nothing between them.** ⚠ _The branch considered the day-book to be a register for the purpose of regulation 11. The inspectorate considered that regulation 11 requires a printed register._ **Same shape, same reporting verb, roughly the same length.**',
  '**The verb is where the minute-taker\'s opinion hides.** ⚠ **_Argued_ against _considered_; _claimed_ against _explained_.** **Everybody reads verbs** — **and a party given the weaker verb will know, without being able to say how.**',
  '**_However_ decides the disagreement.** ⚠ **It tells the reader that the second position corrects the first, and in a minute of a disagreement there is no correcting** — **because the document exists to record that two reasonable people did not agree.** **A full stop goes in instead.**',
  '**Each position gets its reason, or neither does.** ⚠ _…because its cycle closes in November_ · _…because the cold-chain line is rebuilt in February_. **A reason on one side only makes that side the reasonable one** — **and the side with no reason looks like an objection rather than a position.**',
  '**Where one party gave no reason, ask for it afterwards.** ⚠ **Six words: _could you give me your reason for the minute?_** **Nine times out of nine that question has produced one** — **and three of the nine were better than anything said in the room.**',
  '**Tenses.** ⚠ **The past for everything that was said and the present for what the document now provides.** **_The group considered_ · _the glossary is the profession\'s_.** **A chair who writes _we will publish_ has put a promise in a record, and a record holds what was decided and not what anybody intends.**',
  '**And the chair\'s own view never appears.** ⚠ **A junior chair who minutes their own view has spent the only thing the method gave them, which is that the minute is not theirs** — **and from then on the senior people in the room read every minute as an argument.**',
  '**Pronunciation.** 🔊 **Track 17.8** **Read the two sentences at the same weight, with the same pace, and do not drop your voice on the second.** ⚠ **A drop on the second is _however_ in sound** — **and the party you drop on will hear it even when the words are even.**',
  '**Practise:** Two sentences, one shape. **1** a definition in dispute  **2** a date in dispute, with reasons  **3** a count in dispute  **4** a position whose reason was not given  **5** a disagreement in which one party was senior',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the disagreement from the card. B gives **two sentences**: same verb, same shape, both reasons or neither. ⚠ **Two rows on each card already contain a verb that decides it** — **and there B names the verb and replaces both.** Change cards.'));
out.push(minuted([
  ['_The day-book: a register or not._', '⚠ _Both considered, both with regulation 11 named._', '_Which reading is correct._'],
  ['_⚠ The branch argued; the inspectorate explained._', '⚠ _Both considered._', '_The verbs, which decide it._'],
  ['_October against March, both with reasons._', '⚠ _Both considered, both reasons kept._', '_Which cycle matters more._'],
  ['_⚠ The office claimed; the branch demonstrated._', '⚠ _Both considered._', '_Any word implying proof._'],
  ['_A count of twenty-six against twenty-two._', '⚠ _Both considered, with the document each rests on._', '_A figure agreed, which there is not._'],
]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the shared verb, and whether both reasons are in. ⚠ **Rows 2 and 4 are decided by their verbs and the room must name the pair in each: _argued_ against _explained_, _claimed_ against _demonstrated_.** **Row 5 is the hardest**: two counts, both honest, each resting on a different document — **and the minute names the document under each figure and agrees neither, which is 14.1 arriving in a record.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the disagreement you brought** and write **the two sentences.** ⚠ **Count the words in each.** **Then check the verbs and the reasons.** **In this class the first versions differed by an average of fourteen words and the longest gap was twenty-nine** — **and in six of eight the shorter sentence was the position the writer disagreed with, which nobody had noticed about themselves.**'));
out.push(p('**b**  Swap. Your partner reads **only the shorter sentence** and says whether the person who held that position would recognise it. ⚠ **Then the harder question: which of the two do you agree with?** — **and if your partner can tell from the minute, the minute has failed.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Oueidat minutes a terminology group that two judges sit on, and the two judges disagree, which is the point of the group. Her first minutes gave one of them eleven words and the other thirty-one, and the one with eleven words wrote to her, politely, and asked whether he had been present. Mrs Khoury asked what the fault was, and she had minuted the position she understood: the other one she had not followed, so she summarised it, and a summary of something you have not followed is eleven words, and he could tell from the length alone. Mr Attar asked whether the two sentences have to be the same length, and Mrs Khoury said roughly, and that is the crude version of a real rule, which is the same grammatical shape and the same reporting verb: the branch considered and the inspectorate considered, not argued and considered, because the verb is where a minute-taker\'s opinion hides and everybody reads verbs. Dr Qabbani asked about however, and however decides the disagreement: it tells the reader that the second position corrects the first, and in a minute of a disagreement there is no correcting, because the document exists to record that two reasonable people did not agree. Mr Shihabi asked what goes in instead, and a full stop: two sentences side by side with nothing between them, because the reader does the work and the reader is entitled to. Mrs Rizk asked whether each position gets its reason, and Mrs Khoury said each gets its reason or neither does, because a reason on one side only makes that side the reasonable one and the side with no reason looks like an objection rather than a position. Mr Tayara asked what happens if one of them gave no reason, and then neither gets one and you ask for the reason afterwards in six words, which in that group has produced a reason nine times out of nine, and three of the nine were better than anything said in the room. Mrs Tarabishi asked what tense a minute uses, and the past for everything that was said and the present for what the document now provides. Mrs Ajouz asked whether the chair\'s own view may go in, and Mrs Khoury said never, and in this unit that is an absolute. And Mrs Oueidat said the thing she will take away is the judge\'s letter: he asked whether he had been present, and he had been present for two hours and had spoken for about nine minutes, and the whole of the fault was that she had written the length of her understanding instead of the length of his position._'));
out.push(p('**Listener task:** write the two sentences and the number of words in each.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the minute Mrs Oueidat wrote of the group\'s fourth meeting. Answer the questions.'));
out.push(model([
  '**TERMINOLOGY GROUP · MINUTE OF THE FOURTH MEETING** · _two hours, five items_ · **9 April**',
  '**Item 2 · Which glossary governs.** **The group did not reach a position.**',
  '**The two positions, as each member put them.** **Judge Sabbagh considered that the regulation\'s glossary governs, because it is the only list to which a party can be held in court.** ⚠ **Judge Haffar considered that the profession\'s list governs, because it covers the vocabulary in which the evidence is given and the regulation\'s list covers a fifth of it.** **Twenty-six words and twenty-nine.**',
  '**What both members accepted.** **That the regulation\'s list contains two hundred and eleven terms.** **That the construction vocabulary alone runs past a thousand.** **Neither figure was disputed and both are in annexe 1.**',
  '**What follows for the group\'s work.** **The group\'s terms of reference require a single list and the group has not produced one.** ⚠ **The chair will put item 2 on the agenda of the fifth meeting as the first item, with the two positions as minuted here and no addition** — **and the chair has not been asked to propose a reconciliation and does not.**',
  '**Item 3 · The four terms at issue in the autumn list.** **Agreed, as follows, with each member\'s reason recorded in annexe 2.** **The present tense here is deliberate: _the four terms are rendered as in annexe 2_, because that is what the document now provides.**',
  '**Item 4 · The autumn list of four terms.** **Agreed in the form at annexe 2.** **Judge Sabbagh and Judge Haffar both proposed the rendering of the fourth term and the minute records it as proposed by both, which is accurate and was checked with each of them.**',
  '**Item 5 · The date of the fifth meeting.** **7 May, confirmed in the meeting by both members and by the registrar.** ⚠ **The chair took item 5 as agreed and said so; nobody objected before this minute was circulated at a quarter past four.**',
  '**Item 3 · The glossary\'s standing.** **The group noted that neither list has been adopted by the court and that the question at item 2 therefore has no present practical effect.** ⚠ **Both members asked for that sentence and the chair has recorded that both asked for it, because it is the only sentence in this minute that the two of them proposed together and the group should be able to see that they did.**',
  '**A note on the record of item 2.** ⚠ **Both members were sent the two sentences before this minute was circulated and both confirmed the wording of their own.** **Judge Haffar amended three words of his.** **Judge Sabbagh amended none.**',
  '**And a note that belongs to the chair and not to the group.** **At the third meeting I minuted one position in eleven words and the other in thirty-one.** ⚠ **The member with eleven words asked whether he had been present.** **I had not followed his position, and a summary of something you have not followed is eleven words long** — **so from this meeting the two sentences are counted before the minute goes out, and the count is kept.**',
]));
out.push(item('1', 'What does the minute say about what the chair has not been asked to do?'));
out.push(item('2', 'What was done with the two sentences before the minute was circulated, and what came of it?'));
out.push(item('3', 'Why does she say a summary of something you have not followed is eleven words long?'));
out.push(writers([
  'A minute of a disagreement: **the item, and that no position was reached** → **the two positions, same verb, both reasons, with the word counts** → **what both parties accepted** → **what follows for the work, and what the chair has not been asked to do** → **an item that was agreed, in the present tense** → **the note on how the record was checked** → **and a note belonging to the chair and not to the group.**',
  '⚠ **Say first that no position was reached.** **A minute that opens on the positions invites the reader to decide between them** — **and _the group did not reach a position_ is the decision the group actually took, which is a decision and not a failure.**',
  '**Give both reasons and keep the verb the same.** ⚠ _Considered_ **on both sides.** **Then count the words and put the count in the minute if you have to** — **because the member who is given eleven words against thirty-one will know, and the count is the only thing that proves you did not do it.**',
  '**Separate what both parties accepted and give it its own paragraph.** ⚠ _Neither figure was disputed._ **Two members who disagree about a conclusion almost always agree about two or three facts** — **and a minute that does not say so has made the disagreement look total when it is about one step.**',
  '⚠ And **send the two sentences to the two parties before the minute goes out.** _Both confirmed the wording of their own; one amended three words._ **This is the move that ends the whole class of dispute in 17.7** — **and it costs an hour, once, and three words.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the minute of one disagreement (120 words or more).'));
out.push(p('**______________** · _minute of _______________ · _______________ · **______________**   **Item ___ · ______________.** **The ______________ did not reach a position.**   **The two positions, as each member put them.** **______________ considered ______________, because ______________.** ⚠ **______________ considered ______________, because ______________.** **___ words and ___.**   **What both accepted.** **______________.** **Neither ______________ was disputed.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'No position reached, said first',
  'The same reporting verb on both sides',
  'Both reasons, or neither',
  'The word counts, within a few of each other',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their two sentences**, at the same weight, and the room says which position the writer holds.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole minute (260 words or more), to the shape in the writer\'s box: no position reached, the two positions with both reasons and the counts, what both accepted, what follows, an agreed item in the present tense, the checking note, and the chair\'s own note.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the same reporting verb on both sides, both reasons or neither, and nothing in the minute that is the chair\'s own view.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **One count on the board: the word gap between each pair of sentences.** **In this class the first versions differed by an average of fourteen and the widest was twenty-nine** — **and in six of eight the shorter was the position the writer disagreed with.** **Ask the six whether they had known that about themselves.** **Then Judge Sabbagh\'s letter, and the question in it: whether he had been present.**'));
out.push(hw('**Write your two sentences, count the words, and send them to the two people whose positions they are.** ⚠ **Then do the harder half: record what each one changed.** **In this class seven of ten sent them, five got a reply, and four of the five replies amended between one and nine words** — **and one reply supplied a reason that had never been said in the room.** **Bring the amendments.** **17.5 puts an action against a name in the room, out loud**, so bring one action from a meeting of yours that nobody has done.'));

// ===================== 17.5 =====================
out.push(pb());
out.push(h2('17.5  The action against a name, out loud'));
out.push(p('**Function:** putting an action against a name in the room, out loud   ·   **Grammar:** name, act, date — and then the silence   ·   **Pronunciation:** the name first, and then nothing until they answer'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one action from a meeting of yours that nobody has done, and whose name was against it.** ⚠ **If no name was against it, say so.** **In this class seven of ten undone actions had no name and the other three had a name that was never said out loud** — **and your teacher writes the ten on the board with the names, or with a blank where there is none.**'));
out.push(board('Mr Haddad, the figure by Thursday — is that right?', 'Someone should probably look at the figure.'));
out.push(p('**b**  Which two could be answered yes or no by the person named? **1** _We should get the figure to the committee at some point._  **2** _Mr Haddad, the figure with its denominator, by Thursday at noon — is that right?_  **3** _Perhaps the finance side could pick that up._  **4** _Director, the paragraph on the audit, before the minute goes at eleven — may I put that against your name?_  **5** _I will make sure that gets actioned._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the action needs?   **A** a volunteer   **B** **a name, an act, a date — said out loud, and then a silence until the person answers**   **C** an entry in the action column after the meeting'));
out.push(p('**b**  Listen again. **1** What does Mr Zahreddine say about the silence after the name?   **2** What does Mrs Khoury say the written action column cannot do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.9  The name, the act, the date, and the wait', [
  ['Ms Huda', 'Mr Zahreddine chairs a site meeting at which the client\'s director sits.'],
  ['Mr Zahreddine', '⚠ **And for two years my action column was written after the meeting, at my desk, from my notes.** **Of forty-one actions in that period, eleven were not done** — **and I counted, which is how I know, and all eleven had been written and none had been said.**'],
  ['Mrs Khoury', 'What is the difference?'],
  ['Mr Zahreddine', '⚠ **An action written at a desk has been agreed to by nobody.** **An action said in the room, with the name first, has been answered** — **and the answer is either yes, or an amendment, and both are better than a line in a column that the person has not read.**'],
  ['Mr Attar', 'Name first?'],
  ['Mr Zahreddine', '⚠ **Name, act, date, and then stop.** _Mr Haddad, the figure with its denominator, by Thursday at noon — is that right?_ **And then the silence, which is about three seconds and is the whole instrument.**'],
  ['Mrs Oueidat', 'Say more about the silence.'],
  ['Mr Zahreddine', '⚠ **It is the only part that cannot be written down.** **A chair who says the action and then carries on talking has let the room past it** — **and a chair who stops has made the named person the next speaker, which nobody can decline without declining out loud.**'],
  ['Dr Qabbani', 'And with the director?'],
  ['Mr Zahreddine', '⚠ **The same words and the same silence, and one change: _may I put that against your name_ instead of _is that right_.** **A director is being asked for permission to write something** — **which is a thing he can grant, and he cannot grant _is that right_ without sounding as though he is being examined.**'],
  ['Mrs Khoury', '⚠ **Which is the only concession to rank in the whole unit and the room should notice how small it is.** **Six words changed.** **Not the name, not the act, not the date and not the silence** — **and a chair who softens the other four has gone back to _somebody should probably look at that_.**'],
  ['Mr Shihabi', 'What if they amend it?'],
  ['Mr Zahreddine', '⚠ **Then you have a real action, and you say the amended version back before you write it.** **_Friday at noon, then_** — **and in eighteen months the amendments have been thirteen and the failures two, against eleven failures in the two years before.**'],
  ['Mrs Rizk', 'Thirteen amendments sounds like a lot of disagreement.'],
  ['Mrs Khoury', '⚠ **It is thirteen pieces of information he did not have, and they arrived before the minute instead of after the deadline.** **An amendment in the room costs four seconds** — **and the same amendment on Thursday afternoon costs the figure.**'],
  ['Mr Tayara', 'Does anybody refuse outright?'],
  ['Mr Zahreddine', '⚠ **Twice, and both times for a reason I would not have guessed.** **One man had no access to the system that produces the figure and had not said so in two years** — **and that came out because he was asked a question he had to answer in front of people, which is uncomfortable and is also the only reason anybody found out.**'],
  ['Mrs Ajouz', 'And what goes in the column?'],
  ['Mrs Oueidat', '⚠ **Exactly what was said and answered, and nothing that was not.** **An action column with an entry nobody said out loud is a list of things the chair would like** — **and in 17.7 that is precisely what the dispute turns out to be about.**'],
  ['Mr Zahreddine', '🔊 ⚠ **And the thing I shall take away is the eleven and the two.** **Eleven undone actions in two years of writing them at my desk, and two in eighteen months of saying them in the room** — **and the only thing I changed was the order of six words and a silence of three seconds.**'],
]));
out.push(sp());
out.push(box('Language box – the spoken action', [
  '**Name, act, date — and then stop.** ⚠ _Mr Haddad, the figure with its denominator, by Thursday at noon — is that right?_ **The name comes first because the name is what makes the next three seconds somebody\'s.**',
  '**The silence is the instrument and it is the only part that cannot be written down.** ⚠ **About three seconds.** **A chair who says the action and carries on talking has let the room past it** — **and a chair who stops has made the named person the next speaker, which nobody declines without declining out loud.**',
  '**For somebody senior, change six words and nothing else.** ⚠ **_May I put that against your name?_ in place of _is that right?_** **A director can grant permission to write something** — **and he cannot grant _is that right_ without sounding as though he is being examined.** **This is the only concession to rank in the unit.**',
  '**An amendment is the result you want.** ⚠ **Say the amended version back before you write it: _Friday at noon, then._** **Thirteen amendments in eighteen months against eleven failures in the two years before** — **and an amendment in the room costs four seconds, where the same amendment on Thursday afternoon costs the figure.**',
  '**A refusal is information nobody else had.** ⚠ **One man had no access to the system that produces the figure and had not said so in two years** — **and it came out because he was asked a question he had to answer in front of people.**',
  '**And the column holds only what was said and answered.** ⚠ **An action column with an entry nobody said out loud is a list of things the chair would like** — **and in 17.7 the dispute turns out to be about exactly that.**',
  '**Pronunciation.** 🔊 **Track 17.10** **Say the name, then the act and the date on one level, then stop for three seconds.** ⚠ **Practise the stopping, not the saying.** **Most chairs lose the action in the half-second after the question mark** — **and the room will find three seconds of silence almost unbearable, which is why it works.**',
  '**Practise:** Name, act, date, silence. **1** a colleague  **2** somebody senior  **3** an action with no obvious owner  **4** an amendment said back  **5** a refusal, taken straight',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the action from the card. B says it **with the name first, the act, the date, and then counts three seconds in silence.** ⚠ **Two rows on each card have no name available** — **and there B must find one in the room or move the action to the note.** Change cards.'));
out.push(table(['Card A – the action as it stands', 'Card B – the action as it stands'], [
  ['_The figure with its denominator, by Thursday noon._', '_The paragraph on the audit, before eleven._'],
  ['_⚠ Somebody should look at the February gaps._', '_⚠ The finance side could pick that up._'],
  ['_The director\'s own item, before the minute._', '_The senior judge\'s wording, by Monday._'],
  ['_⚠ We should get this to the committee at some point._', '_⚠ I will make sure that gets actioned._'],
  ['_An action the named person amends to Friday._', '_An action the named person refuses outright._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the name, the date, and whether the silence was held. ⚠ **Rows 2 and 4 on both cards have no name and the room must supply one or use the note** — **and _I will make sure that gets actioned_ is the worst of the four, because the chair has taken an action nobody can check.** **Rows 5 are the two results the cycle is for: an amendment said back before it is written, and a refusal taken straight with the reason asked for afterwards.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the undone action you brought** and write it **as it should have been said**: name, act, date. ⚠ **Then write the senior version, with the six words changed.** **In this class seven of the ten undone actions had no name at all** — **and the room should decide, for each of the seven, whose name it would have been, which takes about four seconds a piece and was never done at the time.**'));
out.push(p('**b**  Say it to your partner and hold the silence. Your partner either **accepts, amends or refuses**, and you say the amended version back. ⚠ **Then the harder question: how long did you hold the silence?** — **and in this class the first attempts averaged just over one second, which is not a silence.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Zahreddine chairs a site meeting at which the client\'s director sits, and for two years his action column was written after the meeting, at his desk, from his notes. Of forty-one actions in that period, eleven were not done, and he counted, which is how he knows, and all eleven had been written and none had been said. Mrs Khoury asked what the difference is, and an action written at a desk has been agreed to by nobody, while an action said in the room, with the name first, has been answered, and the answer is either yes or an amendment, and both are better than a line in a column the person has not read. Mr Attar asked about the name coming first, and name, act, date, and then stop: Mr Haddad, the figure with its denominator, by Thursday at noon, is that right, and then the silence, which is about three seconds and is the whole instrument. Mrs Oueidat asked him to say more about the silence, and it is the only part that cannot be written down: a chair who says the action and then carries on talking has let the room past it, and a chair who stops has made the named person the next speaker. Dr Qabbani asked about the director, and the same words and the same silence, with one change: may I put that against your name instead of is that right, because a director is being asked for permission to write something, which is a thing he can grant. Mrs Khoury said that is the only concession to rank in the whole unit and the room should notice how small it is: six words changed, and not the name, the act, the date or the silence. Mr Shihabi asked what happens if they amend it, and then you have a real action and you say the amended version back before you write it, and in eighteen months the amendments have been thirteen and the failures two, against eleven failures in the two years before. Mrs Rizk said thirteen amendments sounds like a lot of disagreement, and Mrs Khoury said it is thirteen pieces of information he did not have, arriving before the minute instead of after the deadline. Mr Tayara asked whether anybody refuses outright, and twice, and both times for a reason he would not have guessed: one man had no access to the system that produces the figure and had not said so in two years. Mrs Ajouz asked what goes in the column, and exactly what was said and answered, and nothing that was not. And Mr Zahreddine said the thing he will take away is the eleven and the two, and the only thing he changed was the order of six words and a silence of three seconds._'));
out.push(p('**Listener task:** write the name, the act, the date, and what the named person did with it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mr Zahreddine sent to the two other chairs on his project. Answer the questions.'));
out.push(model([
  '**F. ZAHREDDINE** · _note to the other two chairs_ · _forty-one actions, then thirty-one_ · **6 May**',
  '**The count, because the count is the argument.** **In the two years to December I wrote the action column at my desk after each meeting.** ⚠ **Forty-one actions, eleven not done.** **In the eighteen months since, I have said each action in the room before writing it.** **Thirty-one actions, two not done, thirteen amended in the room.**',
  '**What I say, and the order matters.** _Mr Haddad, the figure with its denominator, by Thursday at noon — is that right?_ **Name, act, date.** ⚠ **The name first, because the name is what makes the next three seconds his rather than the room\'s.**',
  '**Then the silence, which is the part I had to learn.** **About three seconds.** ⚠ **It is the only element of this that cannot be written into a procedure** — **and my first attempts lasted under a second, because a chair who has asked a question in a room full of senior people wants very much to fill the gap.**',
  '**The one change for somebody senior.** _Director, the paragraph on the audit, before the minute goes at eleven — may I put that against your name?_ **Six words instead of three.** ⚠ **He is being asked to let me write something down, which he can grant.** **_Is that right_ asks him to confirm his own homework in front of his staff.**',
  '**The thirteen amendments, which I had not expected and now value most.** **Eleven were dates and two were the act itself.** ⚠ **Every one of the thirteen was a piece of information I did not have** — **and all thirteen arrived four seconds after the question instead of on the afternoon of the deadline.**',
  '**The two refusals.** **One was a man with no access to the system that produces the figure, which he had not said in two years.** **The other was a date that fell in a week he was away.** ⚠ **Both came out because somebody had to answer out loud in front of people, which is uncomfortable, and is also the only reason either was discovered.**',
  '**What goes in the column.** **What was said and answered.** **Nothing else.** ⚠ **An action column containing an entry nobody said out loud is a list of things the chair would like** — **and when somebody later says they never agreed to it, they are right, and the chair has no answer.**',
  '**One figure I did not expect to be able to give you.** **Of the thirty-one actions said out loud, twenty-nine were accepted or amended within those three seconds** — **and the two that were not were the two refusals, which took rather longer and were worth the whole eighteen months.**',
  '**And the thing I would say to a chair who outranks nobody in the room.** **This is the cheapest of the six moves in this unit.** ⚠ **It needs no agenda, no standing order and no permission** — **only the willingness to say a name and then be quiet for three seconds, which is the most difficult easy thing I have ever done.**',
]));
out.push(item('1', 'What are the two sets of figures, and what do they measure?'));
out.push(item('2', 'What is the single change for somebody senior, and why does the other version not work?'));
out.push(item('3', 'Why does he say the two refusals were discovered, and what does that cost?'));
out.push(writers([
  'A note arguing a practice from your own count: **the two counts, before and after** → **the words you say, with the order explained** → **the silence, and how long your first attempts lasted** → **the one change for somebody senior** → **what the amendments turned out to be** → **the refusals, and why they surfaced** → **what goes in the column** → **and what you would say to a chair who outranks nobody.**',
  '⚠ **Open on the count and nothing else.** _Forty-one actions, eleven not done; thirty-one actions, two not done._ **A note that opens on the method is advice and a note that opens on the count is evidence** — **and the second is the only one another chair will adopt.**',
  '**Explain the order of the words and not just the words.** ⚠ _The name first, because the name is what makes the next three seconds his rather than the room\'s._ **A reader who is told the order without the reason will reorder it under pressure** — **and under pressure the name is the first thing to move.**',
  '**Admit how long your first silences were.** ⚠ _Under a second, because a chair who has asked a question in a room full of senior people wants very much to fill the gap._ **This is the sentence that makes the note usable** — **and a note that presents the silence as easy will be abandoned at the first attempt.**',
  '⚠ And **end on the cost of the method, which is only discomfort.** _It needs no agenda, no standing order and no permission._ **Name it the cheapest of the unit\'s moves and the most difficult easy one** — **because a junior chair with no authority to change anything can do this one on Thursday.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the count and the words (120 words or more).'));
out.push(p('**______________** · _note to _______________ · _______________ · **______________**   **The count, because the count is the argument.** **In ______________ I ______________.** ⚠ **______________ actions, ______________ not done.** **In ______________ since, I ______________.** **______________ actions, ______________ not done.**   **What I say.** **______________.** ⚠ **The name first, because ______________.**   **Then the silence.** **About ______________ seconds.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The two counts first, before any method',
  'The name first, with the reason for the order',
  'The length of your own first silences',
  'Only what was said and answered in the column',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students say **one action with its silence**, and the room times the silence.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the two counts, the words and their order, the silence, the senior version, the amendments, the refusals, the column, and the closing word to a chair with no rank.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the counts before the method, the name first with its reason, and an honest figure for your own first silences.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **One timed count: how long were the silences in Stage 4b?** **In this class the first attempts averaged just over a second, which is not a silence** — **so run it again and let the room hear three seconds, once, with a watch.** **Then the seven undone actions that had no name, and the four seconds it would have taken to supply one.** **Then Mr Zahreddine\'s eleven and two.**'));
out.push(hw('**Write your action with the name first, and the senior version beside it.** ⚠ **Then do the harder half: say one in the room this week and hold the silence, and write down what happened.** **In this class six of ten were accepted, three amended and one refused** — **and the refusal produced a fact about an access permission that nobody had known for a year.** **Bring what happened.** **17.6 writes the minute that is circulated an hour later**, so bring the minute of a meeting you were in and the agenda it came from.'));

// ===================== 17.6 =====================
out.push(pb());
out.push(h2('17.6  The minute circulated an hour later'));
out.push(p('**Function:** writing the minute that is circulated an hour later   ·   **Grammar:** decisions, actions, and nothing that was only said   ·   **Pronunciation:** reading your own minute aloud to find the sentences nobody said'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **a minute you have received, and how long after the meeting it arrived.** ⚠ **The interval, in hours or days.** **In this class the intervals ran from one hour to eleven days, the median was three days, and two students had never received a minute of a meeting they attend** — **and your teacher writes the ten intervals on the board, because the cycle is about the hour and not about the prose.**'));
out.push(board('Decision: the figure is published with its denominator from 1 March.', 'It was felt that publication might be considered.'));
out.push(p('**b**  Which two belong in a minute? **1** _There was a wide-ranging discussion of the publication question._  **2** _Decision: the figure is published with its denominator from 1 March._  **3** _The director spoke at some length about next quarter._  **4** _Action: Mr Haddad, the figure with its denominator, by Thursday noon. Accepted in the meeting._  **5** _Several members expressed concern._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a minute holds?   **A** an account of the discussion   **B** **decisions, actions and positions where no decision was reached** — and nothing that was only said   **C** the chair\'s summary of the meeting\'s mood'));
out.push(p('**b**  Listen again. **1** What does Mr Shihabi say the hour does that three days cannot?   **2** What does Mrs Khoury say about sentences in the passive?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.11  An hour, and nothing that was only said', [
  ['Ms Huda', 'Mr Shihabi circulates the minute of the morning call within the hour.'],
  ['Mr Shihabi', '⚠ **Nine thirty-eight to ten thirty, and it is two hundred and seventy words.** **It took me four weeks to get it down to that and the four weeks were about what to leave out.**'],
  ['Mrs Khoury', 'What does the hour do?'],
  ['Mr Shihabi', '⚠ **It makes the minute correctable by people who still remember.** **A minute that arrives on Thursday is a document; a minute that arrives at ten thirty is a draft everybody can still check** — **and I have had eleven corrections in six months, of which nine came in the first hour after sending.**'],
  ['Mrs Oueidat', 'And none of the nine was a dispute.'],
  ['Mr Shihabi', '⚠ **Not one, and that is the point of the speed.** **A correction at ten forty is a man saying _it was twenty-six, not twenty-two_.** **The same correction on the following Monday is a man saying that the minute is wrong** — **and those are different conversations with the same content.**'],
  ['Mr Attar', 'What is in the two hundred and seventy words?'],
  ['Mr Shihabi', '⚠ **Decisions, actions with names and dates, and the items where no position was reached.** **Nothing that was only said.** **Nine minutes of a director talking is not in the minute at all unless it ended in one of the three** — **and the first time I did that he thanked me, which I had not expected.**'],
  ['Dr Qabbani', 'He was not offended at being left out?'],
  ['Mrs Khoury', '⚠ **Nobody is offended by being left out of a minute; they are offended by being summarised in it.** **_The director spoke at some length_ is a sentence about a man and not about a decision** — **and it is the sentence senior people most dislike, because it records that they used time.**'],
  ['Mrs Rizk', 'And the passive?'],
  ['Mrs Khoury', '⚠ **_It was felt that_ · _concern was expressed_ · _it was agreed_.** **Three forms and all three hide the person.** **A minute exists to say who decided and who is doing** — **and a passive in a minute is almost always a chair protecting somebody, usually themselves.**'],
  ['Mr Tayara', 'Even _it was agreed_?'],
  ['Mrs Oueidat', '⚠ **Especially that one, and it is the hardest to give up.** **_It was agreed_ does not say who agreed or who was silent** — **and the honest forms are _the committee agreed_, which means everybody present, or _the chair took it as agreed and nobody objected before eleven_, which is 17.3 written down.**'],
  ['Mrs Tarabishi', 'How do you find the sentences nobody said?'],
  ['Mr Shihabi', '⚠ **I read it aloud before I send it.** **Four weeks ago I read a sentence aloud and could not remember anybody saying it** — **and it was mine: I had written what I thought the call had concluded, which nobody had concluded.**'],
  ['Mrs Ajouz', 'And if a decision was taken that you think is wrong?'],
  ['Mrs Khoury', '⚠ **It goes in exactly as taken, and the chair\'s view stays out, which is 17.4 again.** **A junior chair who minutes a decision with a shade on it has told six senior people that the minute is an argument** — **and after that nobody will correct it at ten forty, because correcting an argument is a quarrel.**'],
  ['Mr Shihabi', '🔊 ⚠ **And the thing I shall take away is the sentence I could not remember anybody saying.** **I had written it in good faith and it was the conclusion the call ought to have reached** — **and a minute that contains the meeting the chair wanted is the most dangerous document a junior chair can send, because it is the one nobody can correct without correcting him.**'],
]));
out.push(sp());
out.push(box('Language box – the minute within the hour', [
  '**Three things only.** ⚠ **Decisions; actions with a name and a date; items where no position was reached.** **Nothing that was only said.** **Nine minutes of a director talking is not in the minute unless it ended in one of the three.**',
  '**The hour makes the minute correctable by people who still remember.** ⚠ **Eleven corrections in six months and nine of them in the first hour after sending.** **A correction at ten forty is _it was twenty-six, not twenty-two_; the same correction on Monday is _the minute is wrong_** — **and those are different conversations with the same content.**',
  '**Nobody is offended by being left out; they are offended by being summarised.** ⚠ **_The director spoke at some length_ is a sentence about a man and not about a decision** — **and it records that he used time, which is the thing senior people most dislike seeing in writing.**',
  '**The three passives, and all of them hide a person.** ⚠ **_It was felt that_ · _concern was expressed_ · _it was agreed_.** **A minute exists to say who decided and who is doing** — **and a passive in a minute is almost always a chair protecting somebody, usually themselves.**',
  '**_It was agreed_ is the hardest to give up.** ⚠ **The honest forms are _the committee agreed_, meaning everybody present, or _the chair took it as agreed and nobody objected before eleven_** — **which is 17.3 written down and is the only form that is true in most rooms.**',
  '**Read it aloud before you send it, to find the sentences nobody said.** ⚠ **The sentence you cannot remember anybody saying is usually yours** — **and a minute that contains the meeting the chair wanted cannot be corrected by anybody without correcting the chair.**',
  '**Pronunciation.** 🔊 **Track 17.12** **Read your own minute aloud at speaking pace and stop at any sentence you cannot attribute to a voice.** ⚠ **Do not read it in your head.** **In the head, every sentence sounds as though somebody said it** — **and aloud, the ones nobody said are audible in about four weeks\' worth of practice, or immediately if somebody else reads it to you.**',
  '**Practise:** Minute it in one line. **1** a decision  **2** an action with a name and a date  **3** an item with no position reached  **4** nine minutes that led to nothing  **5** a decision you think is wrong',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads what happened from the card. B gives **the minute line**, or says **that it does not go in the minute at all.** ⚠ **Two rows on each card are things that were only said** — **and there B must say so and write nothing.** Change cards.'));
out.push(table(['Card A – what happened', 'Card B – what happened'], [
  ['_The figure will be published with its denominator from 1 March._', '_The inspection follows the rebuild; the office accepted it._'],
  ['_⚠ The director spoke for nine minutes on next quarter._', '_⚠ Three members said the form was difficult._'],
  ['_Mr Haddad accepted the figure by Thursday noon._', '_The director let the audit paragraph go against his name._'],
  ['_⚠ There was a wide-ranging discussion of the glossary._', '_⚠ Concern was expressed about the timetable._'],
  ['_Two judges disagreed and no position was reached._', '_A decision the chair believes is the wrong one._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the minute line, or the words _not in the minute_. ⚠ **Rows 2 and 4 on both cards were only said and nothing goes in** — **and the room will want to record the nine minutes, which is exactly the instinct the cycle removes.** **Rows 5 are the pair that matter**: one is minuted as two positions with no decision, and one is minuted exactly as taken, **with the chair\'s view nowhere on the page.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the minute you brought** and its agenda. ⚠ **Strike every sentence that records something only said.** **Count the words before and after.** **In this class the minutes lost between a fifth and two thirds of their length** — **and the one that lost two thirds was eleven days late, which the room should connect.**'));
out.push(p('**b**  Read your struck version aloud to your partner. Your partner stops you at **any sentence they cannot attribute to a voice.** ⚠ **Then the harder question: how long after the meeting did your minute go out, and what would have had to change to make it an hour?** — **and in most cases the answer is that the actions would have had to be said out loud, which is 17.5.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Shihabi circulates the minute of the morning call within the hour: nine thirty-eight to ten thirty, and it is two hundred and seventy words, and it took him four weeks to get it down to that, and the four weeks were about what to leave out. Mrs Khoury asked what the hour does, and it makes the minute correctable by people who still remember: a minute that arrives on Thursday is a document and a minute that arrives at ten thirty is a draft everybody can still check, and he has had eleven corrections in six months, of which nine came in the first hour after sending. Mrs Oueidat said and none of the nine was a dispute, and not one, and that is the point of the speed: a correction at ten forty is a man saying it was twenty-six and not twenty-two, and the same correction on the following Monday is a man saying that the minute is wrong. Mr Attar asked what is in the two hundred and seventy words, and decisions, actions with names and dates, and the items where no position was reached, and nothing that was only said, so nine minutes of a director talking is not in the minute at all unless it ended in one of the three. Dr Qabbani asked whether he was not offended at being left out, and Mrs Khoury said nobody is offended by being left out of a minute, they are offended by being summarised in it, because the director spoke at some length is a sentence about a man and not about a decision. Mrs Rizk asked about the passive, and it was felt that, concern was expressed, it was agreed: three forms and all three hide the person. Mr Tayara asked whether even it was agreed, and Mrs Oueidat said especially that one, and it is the hardest to give up, because it does not say who agreed or who was silent. Mrs Tarabishi asked how you find the sentences nobody said, and he reads it aloud before sending it, and four weeks ago he read a sentence aloud and could not remember anybody saying it, and it was his own. Mrs Ajouz asked what happens if a decision was taken that he thinks is wrong, and Mrs Khoury said it goes in exactly as taken and the chair\'s view stays out. And Mr Shihabi said the thing he will take away is the sentence he could not remember anybody saying: he had written it in good faith and it was the conclusion the call ought to have reached, and a minute that contains the meeting the chair wanted is the most dangerous document a junior chair can send._'));
out.push(p('**Listener task:** write the number of words struck from your partner\'s minute and any sentence nobody said.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the minute Mr Shihabi circulated at ten thirty. Answer the questions.'));
out.push(model([
  '**MORNING CALL · MINUTE** · _nine o\'clock, four items, thirty-eight minutes_ · _circulated 10.30_ · **22 January**',
  '**The covering line, which goes above the minute and is two sentences.** _The minute of this morning\'s call is below. Corrections to me by eleven, and the corrected version replaces this one._ ⚠ **No greeting, no thanks for a good call, and no summary of what the call achieved** — **because a covering line that summarises has produced a second account of the meeting, and the one below it is the record.**',
  '**Present.** **The regional editor, the Aleppo and Homs bureau chiefs, two desk reporters, the chair.** **Beirut was not on the call.**',
  '**Item 1 · The returns figure.** **Decision: the figure is published with its denominator in the same sentence, from 1 March.** ⚠ **The chair took this as agreed and nobody objected before the minute was sent.**',
  '**Item 2 · The Aleppo count.** **The Aleppo bureau chief considered the figure to be twenty-six, on the regional return for March.** **The Homs bureau chief considered it to be twenty-two, on the desk log.** ⚠ **No figure was agreed and none is needed for publication, which rests on the return.**',
  '**Item 3 · Beirut\'s item.** **For information only; Beirut was not on the call.** **It is the first item on Thursday.**',
  '**Item 4 · Next quarter.** **No decision was sought and none was taken.**',
  '**Actions.** **1 · The Aleppo bureau chief: the return for March with its denominator, by Thursday noon.** **Accepted in the call.** ⚠ **2 · The regional editor: the paragraph on sourcing for the style note, before Thursday\'s call.** **He agreed to it being put against his name.** **3 · The chair: Beirut\'s item first on Thursday.**',
  '**Not in this minute.** **Nine minutes at item 4 on next quarter\'s staffing, which produced no decision, no action and no recorded position.** ⚠ **It is minuted nowhere and it is not lost: it is item 4 on Thursday, by the regional editor\'s own suggestion.**',
  '**Corrections.** **To the chair, by eleven, and the corrected minute replaces this one with the correction named.** ⚠ **Two hundred and seventy-one words.**',
  '**A note for my own file, which is not circulated and is the reason the minute is this length.** **I drafted it at five hundred and ten words and read it aloud at ten past ten.** ⚠ **Two hundred and thirty-nine words came out, and every one of them was a sentence about something that had only been said.**',
  '**What came out, since the list is the lesson.** **Forty-one words on the discussion at item 2, which reached no figure and is already recorded as two positions.** **Thirty-one words on what the regional editor said about sourcing, which became action 2 and is therefore in the minute as an action.** ⚠ **A hundred and sixty-seven words at item 4, on next quarter\'s staffing, which produced nothing** — **and that was the hardest to strike, because it was nine minutes of a senior man\'s time and striking it felt like saying it had not happened.**',
  '**And the sentence I struck that was not anybody\'s but mine.** _The call accepted that the Aleppo figure will be reconciled before publication._ ⚠ **Nobody said it.** **I believed it, it is probably what will happen, and it was the conclusion I wanted** — **and if it had gone out at half past ten it would have been a decision taken by nobody, in a document six people would have had no reason to question.**',
]));
out.push(item('1', 'How does the minute record the decision at item 1, and what does it not claim?'));
out.push(item('2', 'What does the minute do about the nine minutes at item 4?'));
out.push(item('3', 'What does the last paragraph provide for, and by when?'));
out.push(writers([
  'A minute circulated within the hour: **who was present and who was absent** → **each item: a decision, two positions, or no decision sought** → **the actions, with names, dates and the word _accepted_** → **a paragraph naming what is not in the minute and where it has gone instead** → **and the correction route, with a time and a word count.**',
  '⚠ **Record the decision in the form in which it was actually taken.** _The chair took this as agreed and nobody objected before the minute was sent._ **_It was agreed_ claims a unanimity nobody tested** — **and the honest form is 17.3 written down, which is also the form that survives 17.7.**',
  '**Mark each action _accepted in the call_ or not at all.** ⚠ **An action with a name on it that was never said out loud is a thing the chair would like** — **and the two words _accepted in the call_ are the difference between a record and a wish.**',
  '**Give the excluded material its own paragraph and say where it went.** ⚠ _Nine minutes at item 4, which produced no decision, no action and no recorded position; it is item 4 on Thursday._ **This is the paragraph that stops a senior person feeling erased** — **and it leaves out the nine minutes while leaving in the fact that they happened.**',
  '⚠ And **end on the correction route and the word count.** _To the chair, by eleven, and the corrected minute replaces this one with the correction named._ **The hour is what makes corrections cheap** — **and the word count is there because a minute that grows past three hundred words has started recording what was said.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a minute circulated within the hour (120 words or more).'));
out.push(p('**______________** · _minute_ · _circulated _______________ · **______________**   **Present.** **______________.** **______________ was not ______________.**   **Item 1 · ______________.** **Decision: ______________.** ⚠ **The chair took this as agreed and nobody objected before ______________.**   **Item 2 · ______________.** **______________ considered ______________. ______________ considered ______________.** ⚠ **No ______________ was agreed.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Decisions in the form in which they were taken',
  'Every action marked accepted, with a name and a date',
  'A paragraph naming what is not in the minute',
  'A correction route with a time, and a word count',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their _not in this minute_ paragraph**, and the room says whether anybody has been erased.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole minute (260 words or more), to the shape in the writer\'s box: present and absent, the items, the actions marked accepted, the excluded material and where it went, and the correction route with the word count.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: nothing that was only said, every action marked accepted, and no passive hiding a person.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **The words struck from the ten minutes brought in** — **between a fifth and two thirds of their length, and the one that lost two thirds was eleven days late.** **Then the intervals: one hour to eleven days, median three days.** **Ask the room what the median would have to be for corrections to arrive as corrections.** **Then Mr Shihabi\'s sentence that nobody had said, and whose it was.**'));
out.push(hw('**Write the minute of your next meeting within the hour**, with nothing that was only said. ⚠ **Then do the harder half: count the corrections and the hour each arrived.** **In this class the minutes that went out inside two hours drew between one and four corrections each, all of them factual** — **and the two that went out after three days drew none at all, which is not agreement.** **Bring the count and the hours.** **17.7 mediates between a minute and the person who says they did not agree to it** — **so bring one sentence of a minute that somebody has disputed.**'));

// ===================== 17.7 =====================
out.push(h2('17.7  Review & Mediate: a minute and the person who did not agree'));
out.push(p('**Function:** mediating between a minute and the person who says they did not agree to it   ·   **Recycling:** Unit 17   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 1 · Writing Part 1 (the essay) · Listening Part 1'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 17 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** I shall take that as agreed unless somebody tells me the otherwise.  **2** May I to hold that until item four?  **3** The minute sets out both positions in the same shape, however neither party objected.  **4** Nobody reminded to the room that the item had been deferred.  **5** Had the action been put against a name, it will have been done.  **6** He was outranked by everybody in the room, included the regional editor.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the four accounts and the question.'));
out.push(box(null, [
  '**ONE MINUTE, FOUR ACCOUNTS** _(the minute of 22 January; the dispute of 4 February)_',
  '**The chair, Mr Shihabi.** _"I said the formula, nobody objected, the minute went at 10.30 and corrections were invited by eleven. None came."_',
  '**The Homs bureau chief, on 4 February.** _"I did not agree to it. I said nothing in the call because I thought publication depended on the count being settled, and the count is not settled."_',
  '**The regional editor.** _"The formula was said and nobody objected. I remember both."_',
  '**The desk\'s sending log, which none of the three has looked at.** _"Delivered to Homs 10.31. Opened 11.42."_',
  '⚠ **All four are accurate.** **The dispute is not about what was said: it is about a deadline of eleven given to a man the chair knew was driving between half past ten and twenty to twelve.**',
  '**And the thing none of the three has noticed.** **The bureau chief\'s reason is a position on item 1 and not an excuse** — **that publication depends on the count** — **and it has never been put to anybody, because the only route for it closed at eleven on a Tuesday morning.**',
  '**The question for the cycle.** _What do you say, and to whom, and what must not be said?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. The room decides one thing must not be said. What, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.13  A deadline one man could not meet', [
  ['Ms Huda', 'Who gets the letter?'],
  ['Mrs Khoury', '⚠ **The bureau chief, and it is two lines, and the chair writes them.** **Nobody else can**: the deadline was the chair\'s, the minute was the chair\'s, and the amendment has to be the chair\'s or it is not an amendment.'],
  ['Mr Shihabi', 'And what must not be said is that he had the minute and did not read it.'],
  ['Mrs Khoury', '⚠ **That is exactly it, and it is true, which is why it is tempting.** **He had it for twenty-nine minutes and was driving for twenty-nine of them** — **and a reply that points out that he had it has told a man that a deadline he could not meet was his own fault.**'],
  ['Mrs Oueidat', 'This is the first time in this book that the chair is at fault.'],
  ['Mr Zahreddine', '⚠ **And the fault is small, mechanical, and entirely his: he set a deadline of eleven and he knew where the man was.** **The formula in 17.3 is only as good as the time on it** — **and a route that one of six people cannot use is not a route, it is a route for five.**'],
  ['Dr Qabbani', 'Does the decision stand?'],
  ['Mrs Khoury', '⚠ **The decision stands and the minute is amended, and those are two answers to two questions, which is 16.7 arriving a unit later.** **The figure is published with its denominator from 1 March: nobody has argued against that and the Homs chief does not.** **What is amended is the record of agreement** — **and the amendment says that he did not agree and gives his reason.**'],
  ['Mr Attar', 'And the reason is a position.'],
  ['Mrs Oueidat', '⚠ **Which is the finding of the cycle and nobody in the room has noticed it for a fortnight.** **_Publication depends on the count being settled_ is an argument about item 1** — **and it has never been put to anybody, because the only route for it closed at eleven on a Tuesday, and since then everybody has been discussing whether he agreed.**'],
  ['Mrs Rizk', 'So it goes on the next agenda.'],
  ['Mr Shihabi', '⚠ **First item, by name, which is 17.2.** _Item one. The Homs bureau chief has a position on this from 22 January; may we take that first?_ **And the minute of that meeting will carry his sentence whether or not anybody agrees with it.**'],
  ['Mr Tayara', 'What happens to the deadline?'],
  ['Mr Shihabi', '⚠ **It becomes noon or the start of the next call, whichever is later, and the amendment says that too.** **An amendment that fixes one minute and leaves the mechanism alone is an apology with a date on it** — **and the same thing will happen in March to whoever is driving then.**'],
  ['Mrs Khoury', '⚠ **And the room should see that the change costs the chair the thing he most values, which is the hour.** **Corrections by noon means the minute is not final until noon** — **and he has decided that a route five people can use is worth less than an hour of finality, which is the real decision in this cycle and it is his to take.**'],
  ['Mrs Tarabishi', 'Is the regional editor involved at all?'],
  ['Mrs Oueidat', '⚠ **He is copied and not addressed, and the distinction matters.** **He has confirmed what was said, which is all he was asked** — **and a chair who writes to his own senior editor about a dispute with a bureau chief has made a two-line correction into a question about three people\'s judgement.**'],
  ['Mrs Ajouz', 'Should the sending log go in?'],
  ['Mr Zahreddine', '⚠ **The log goes in, and this is the one place where a fact about somebody else\'s conduct helps them.** **_Delivered 10.31, opened 11.42_ proves that he was not ignoring it** — **and it is the chair who produces that proof, about the man complaining, which is the whole of the good faith in this document.**'],
  ['Mr Shihabi', '🔊 ⚠ **And the thing I shall take away is the fortnight.** **For fourteen days four people discussed whether a man had agreed to something** — **and in all fourteen days nobody looked at a log that answered it in nine words, or asked what his reason was, which turned out to be the only position anybody held about item 1.**'],
]));
out.push(sp());
out.push(box('Language box – mediating a disputed minute', [
  '**The three moves, and here one of the parties is the chair.** ⚠ **1 Say what is correct, and mean it.** **2 Show the writer their own sentence.** **3 Ask one question, and stop.**',
  '**Two questions, two answers: the decision stands and the minute is amended.** ⚠ **Nobody has argued against publication, including the man disputing the minute.** **What is amended is the record of agreement** — **and an amendment that answers only one of the two will be disputed again on the other.**',
  '**What must not be said: that he had the minute and did not read it.** ⚠ **It is true.** **He had it for twenty-nine minutes and was driving for twenty-nine of them** — **and saying it tells a man that a deadline he could not meet was his own fault.**',
  '**The mechanism is amended and not only the minute.** ⚠ **_Corrections by noon, or the start of the next call, whichever is later._** **An amendment that fixes one minute and leaves the deadline alone is an apology with a date on it** — **and the same failure recurs in March for whoever is driving then.**',
  '**The dissent\'s reason is a position and it goes on the agenda, first, by name.** ⚠ _The Homs bureau chief has a position on this from 22 January; may we take that first?_ **A fortnight was spent on whether he agreed and nobody asked what he thought** — **and his reason turns out to be the only argument anybody has made about item 1.**',
  '**Copy the senior person; do not address them.** ⚠ **He confirmed what was said, which is all he was asked** — **and a chair who writes to his own senior editor about a dispute with a bureau chief has turned a two-line correction into a question about three people\'s judgement.**',
  '**And put in the fact that helps the other party.** ⚠ **_Delivered 10.31, opened 11.42._** **The chair produces the proof that the man was not ignoring the minute** — **and that is the whole of the good faith in the document, and it costs nine words.**',
  '**Pronunciation.** 🔊 **Track 17.14** **Say _the decision stands and the minute is amended_ with equal weight on both halves and no pause between them.** ⚠ **A pause before _and_ makes the second half a concession** — **and a concession invites a negotiation, where a flat pair of statements invites a reply about item 1.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the four accounts from the card. B names **whose fault it is**, gives **the two answers**, and names **what must not be said.** ⚠ **On one of the two cards the fault is not the chair\'s**, and B must find that. Change roles with the other pair.'));
out.push(table(['Pair A – the minute and the deadline', 'Pair B – the minute and the action'], [
  ['_The chair: "I said the formula and nobody objected."_', '_The chair: "the action was in the column and he never raised it."_'],
  ['_The dissenter: "I thought publication depended on the count."_', '_The named person: "nobody said my name in the room."_'],
  ['_⚠ The log: "delivered 10.31, opened 11.42."_', '_⚠ The recording: "the action was never spoken."_'],
  ['_⚠ The fault: the chair\'s. A deadline one man could not meet._', '_⚠ The fault: the chair\'s. A written action never said._'],
  ['_⚠ Must not be said: that he had it and did not read it._', '_⚠ Must not be said: that it was in the column he receives._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the fault, the two answers, and what must not be said. ⚠ **On Pair B the fault is the chair\'s again and the room will expect a variation** — **and the finding is that 17.5 and 17.3 fail in the same way: a column entry nobody said and a deadline nobody could meet are both routes that exist on paper and not in the room.** **The two cards are one fault in two disguises, and the room should be made to say so.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the disputed sentence you brought** and write **the four accounts**: yours, the disputer\'s, a witness\'s, and one record nobody has looked at. ⚠ **Then name whose fault it is, in one clause.** **In this class six of ten disputes turned on a route that existed on paper** — **and in four of the six the record nobody had looked at settled the question in under a line.**'));
out.push(p('**b**  Swap. Your partner writes **the two answers** and names **the sentence you must not write.** ⚠ **In this class that sentence has been, eight times in ten, a true statement about what the other party could have done.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class:  _Mrs Khoury said the bureau chief gets the letter, it is two lines, and the chair writes them, because the deadline was the chair\'s, the minute was the chair\'s, and the amendment has to be the chair\'s or it is not an amendment. Mr Shihabi said what must not be said is that he had the minute and did not read it, and that is exactly it and it is true, which is why it is tempting: he had it for twenty-nine minutes and was driving for twenty-nine of them, and a reply that points out that he had it has told a man that a deadline he could not meet was his own fault. Mrs Oueidat said this is the first time in the book that the chair is at fault, and Mr Zahreddine said the fault is small, mechanical and entirely his, because he set a deadline of eleven and he knew where the man was, and a route that one of six people cannot use is not a route, it is a route for five. Dr Qabbani asked whether the decision stands, and Mrs Khoury said the decision stands and the minute is amended, and those are two answers to two questions: the figure is published with its denominator from 1 March, which nobody has argued against, and what is amended is the record of agreement. Mr Attar said and the reason is a position, and Mrs Oueidat said that is the finding of the cycle and nobody has noticed it for a fortnight, because publication depends on the count being settled is an argument about item 1 and it has never been put to anybody. Mrs Rizk said so it goes on the next agenda, and first item, by name. Mr Tayara asked what happens to the deadline, and it becomes noon or the start of the next call, whichever is later, because an amendment that fixes one minute and leaves the mechanism alone is an apology with a date on it. Mrs Khoury said the change costs the chair the thing he most values, which is the hour. Mrs Tarabishi asked whether the regional editor is involved, and he is copied and not addressed. Mrs Ajouz asked whether the sending log should go in, and Mr Zahreddine said the log goes in, and this is the one place where a fact about somebody else\'s conduct helps them. And Mr Shihabi said the thing he will take away is the fortnight: for fourteen days four people discussed whether a man had agreed to something, and nobody looked at a log that answered it in nine words or asked what his reason was._'));
out.push(p('**Listener task:** write the two answers and the sentence that must not be written.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 1)', 7));
out.push(p('For questions **1–8**, read the text below and decide which answer (**A**, **B**, **C** or **D**) best fits each gap.'));
out.push(box(null, [
  '**THE CHAIR WHO OUTRANKS NOBODY**',
  'It is common for a meeting to be chaired by the most junior person in the room, and the advice such a chair is usually given is to be more confident. This is useless. What works instead is a set of forms of words whose authority lies outside the person saying them.',
  'The first is the opening. A chair who calls the meeting to **(1)** ______ with the time, the number of items and the number of minutes has rested the whole meeting on two things anybody present can check. Thanks and apologies do the opposite: they tell the room that attendance was a favour.',
  'The second concerns agreement. Where no vote is taken — and in most committees none ever is — the chair says that they will **(2)** ______ a stated sentence as agreed unless somebody tells them otherwise by a stated time. The sentence must be the one that will appear in the minute, because that is the only thing anybody can object to.',
  'The third is the deferral. _May I_ **(3)** ______ _that until item four?_ costs six words and routes a contribution rather than stopping it — provided the chair reaches item four. A deferral that is not **(4)** ______ is worse than an interruption, because something has been taken from somebody and not given back.',
  'Minuting a disagreement needs its own discipline. The minute **(5)** ______ the two positions in the same grammatical shape, with the same reporting verb and both reasons, and the chair\'s own view does not **(6)** ______ an appearance anywhere in it. A minute in which a reader can tell what the chair thought has stopped being a record.',
  'Finally, an action is spoken **(7)** ______ it is written, with the name first and a silence after it. The commonest failure in this whole area is mechanical rather than personal: in one case a decision was disputed a fortnight later by a man who had been sent the minute at half past ten and asked for corrections by eleven, while driving. Nobody **(8)** ______ the chair that a route five people can use is not a route.',
  '**1**  **A** order   **B** command   **C** instruction   **D** rule',
  '**2**  **A** hold   **B** take   **C** put   **D** set',
  '**3**  **A** save   **B** store   **C** carry   **D** hold',
  '**4**  **A** owed   **B** taken   **C** kept   **D** minded',
  '**5**  **A** tells   **B** sets out   **C** says   **D** speaks',
  '**6**  **A** do   **B** give   **C** make   **D** take',
  '**7**  **A** before   **B** until   **C** since   **D** while',
  '**8**  **A** said   **B** told   **C** mentioned   **D** reminded',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the two lines to the bureau chief (120 words or more, including the working).'));
out.push(p('**The decision.** ⚠ **______________ stands; nobody has argued against it, including ______________.**   **The minute.** **It is amended to record that ______________ and to give ______________.**   **The mechanism.** ⚠ **Corrections are now ______________, whichever is later.**   **The fact that helps you.** **______________.**   **And the working, which does not go in the letter.** **The sentence that must not be written: ______________.** **Why: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Two answers for two questions',
  'The mechanism changed, not only the minute',
  'Nothing about what the other party could have done',
  'The dissent\'s reason named as a position, first on the next agenda',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **Name the two in the first paragraph with the ground for choosing them, and do not mention the third again.**',
  'Your class has read an article about chairing a meeting when you are the most junior person in it. **Write an essay discussing two of the points raised.** You should explain **which two you have chosen and why**, and give **reasons** for your view. Write **220–260 words**.',
  '_"Three things are said about the junior chair. **First**, that the authority must come from the agenda and the clock rather than from the person. **Second**, that agreement should be taken out loud, in the minute\'s own words, with a route and a time. **Third**, that the minute should hold only decisions and actions."_',
  '**Points to discuss: 1** authority outside the person   **2** agreement taken out loud   **3** the minute that holds only decisions',
  '⚠ **One of the three carries a cost the article does not mention.** **Say so if you take it.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 17 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I shall take that as agreed unless somebody tells me ___ .   a) the otherwise   b) otherwise   c) another',
  '2  May I ___ that until item four?   a) hold   b) to hold   c) holding',
  '3  The minute sets out both positions in the same shape, ___ neither party objected.   a) however   b) therefore   c) and',
  '4  Nobody reminded ___ that the item had been deferred.   a) to the room   b) the room   c) at the room',
  '5  Had the action been put against a name, it ___ done.   a) will have been   b) would have been   c) would be',
  '6  He was outranked by everybody in the room, ___ the regional editor.   a) including   b) included   c) include',
  '7  The chair called the meeting ___ order at nine.   a) in   b) into   c) to',
  '8  It is the junior chair who ___ for a deferral that was not kept.   a) pays   b) pays off   c) is paying',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 1 style – three short extracts).** 🔊 **Track 17.15** You will hear three short extracts. For questions **1–6**, choose the answer (**A**, **B** or **C**) which fits best.'));
[
  '**Extract One** _(two colleagues after a meeting)_   **1**  What do they agree was the most effective thing the chair did?   **A** he thanked everybody for coming   **B** he asked the senior manager\'s permission   **C** he stated the time available',
  '**2**  What does the woman say about the regional editor?   **A** he has started doing it himself   **B** he was irritated by it   **C** he did not notice it',
  '**Extract Two** _(a bureau chief talking about being deferred)_   **3**  Why did he accept being held until item four?   **A** because he was asked politely   **B** because the chair named the item   **C** because he had been warned in advance',
  '**4**  What does he say annoyed him on a later occasion?   **A** being interrupted twice   **B** the chair\'s tone   **C** the item never being reached',
  '**Extract Three** _(two people discussing a disputed minute)_   **5**  What does the woman say the dispute was really about?   **A** the figure itself   **B** the time allowed for corrections   **C** who had spoken in the meeting',
  '**6**  What does the man say the chair should have done?   **A** amended the minute and the deadline   **B** set aside the decision   **C** asked for a vote',
].forEach(t => out.push(p(t, { indent: 200, after: 60 })));
out.push(dlg('Track 17.15  Audio script (read after the check)', [
  ['Extract One · Woman', 'You were in the nine o\'clock. Did he get through it?'],
  ['Man', 'Thirty-eight minutes, four items. And he did not thank anybody, which I noticed because he always used to.'],
  ['Woman', 'It is not the thanks. It is that he says the number of minutes at the start and then again halfway through. The clock does the work and nobody has to be rude.'],
  ['Man', 'Twenty-two minutes, he said, and the bureau chief stopped mid-sentence.'],
  ['Woman', 'And have you noticed that the regional editor has started doing it in his own meetings? Last Thursday: three items, twenty minutes. Word for word.'],
  ['Man', 'He would not say where he got it.'],
  ['Extract Two · Bureau chief', 'The first time he did it to me I was two clauses in. May I hold that until item four. And I stopped, which surprised me afterwards, because he is half my age and I had not finished a sentence.'],
  ['Bureau chief', 'The reason I stopped is that he said the number. Item four. It was item four, I had the agenda in front of me from the night before, and there was nothing to argue with. If he had said that we were straying from the point I should have told him we were not.'],
  ['Bureau chief', 'He reached item four and gave it to me first, by name, which I thought was rather good. And then in December he did it again and we never got to item four at all, and that I did mind. I had given him something and he had not given it back. I have not accepted one since.'],
  ['Extract Three · Woman', 'Everybody has spent two weeks on whether the man agreed.'],
  ['Man', 'He says he did not. The chair says the formula was said and nobody objected.'],
  ['Woman', 'Both of those are true and neither is the point. The minute went out at half past ten and corrections were asked for by eleven, and the man was in a car from half past ten until twenty to twelve, which the chair knew. The argument is about the half-hour and nobody has said so.'],
  ['Man', 'Then it is not the figure at all.'],
  ['Woman', 'The figure is not in dispute. What is in dispute is a deadline.'],
  ['Man', 'So the decision stays and the minute is corrected, and the deadline moves. That is one note of two lines. What he must not do is tell the man he had it and did not open it.'],
  ['Woman', 'He had it for twenty-nine minutes and was driving for all of them.'],
]));
out.push(p('**C  Writing.** Write the two lines to the bureau chief and the working beneath them (120 words or more): the decision, the amendment, the changed mechanism, the fact that helps him, and the sentence that must not be written.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 17)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ open a meeting on the time, the items and the minutes, with no thanks and no apology',
  '☐ say what cannot be decided today, because of who is absent',
  '☐ defer a senior person in their first clause, with an item number and the clock',
  '☐ reach the item I deferred something to, and open it with their name',
  '☐ take agreement out loud, in the minute\'s own words, with a private route and a time',
  '☐ minute a disagreement in two sentences of one shape, with both reasons',
  '☐ put an action against a name out loud, and hold the silence',
  '☐ write a minute within the hour that holds nothing that was only said',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _call to order · move on to · take as read · put to the vote · bring to a close · cut short · glide past · open with · close on · hand to · come in on · go round the table_.',
  '**This unit\'s word-formation set** _(Reading Part 1 in 17.7 draws on this unit\'s lexis)_: _chair → **chairmanship** · preside → **presidency** · convene → **convener** · recess → **recessed** · consensus → **consensual** · majority → **majoritarian** · procedure → **procedural** · hierarchy → **hierarchical** · senior → **seniority**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _go in_ **→ _the figure goes in the action column, with a name beside it_**, which is being entered in a record, where at A2 it was going in a door · _wait for_ **→ _I said the name and then waited for him to answer_**, which is holding a silence until somebody speaks, where at A2 it was waiting for a bus · _pay for_ **→ _it is the chair who pays for a deferral that was not kept_**, which is bearing a consequence, where at A2 it was paying for a ticket.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 2 · Syria Edition · Unit 17 · Chairing People Who Outrank You');
