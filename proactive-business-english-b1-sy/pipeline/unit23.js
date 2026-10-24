// Proactive Business English B1 · Syria Edition · Book 2 · Unit 23 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a trade paper · a market note · a bulletin · a circular · a source · an unnamed source · a second-hand report · a rumour · a denial · a correction · an attribution · a reporting verb · to state · to claim · to admit · to deny · to confirm · to decline to comment · it is understood · it is reported · reliable information · second-hand information · a working assumption · a standing enquiry · to verify a report · a dated note · what is not known · a follow-up question · a trade contact · an informed guess';
const BACK_AT_B1 = 'market · confirm · price list';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 23  Trade News and What Is Actually Known'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**23.1**  find the one word in a report that decided something',
  '**23.2**  choose between _said_, _claimed_, _admitted_ and _denied_',
  '**23.3**  see what _it is understood that_ hides',
  '**23.4**  write three sentences: what, who says so, and what is not known',
  '**23.5**  grade what is known, and never mix the three grades',
  '**23.6**  write the short market note',
  '**23.7**  Review & Mediate: one story, four kinds of sentence',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ One verb, and forty million of board', [
  '**On 20 July the trade sheet carried four lines about the board mill at Hama.** ⚠ **The line everybody read said that the mill *has suspended deliveries*** — and by the afternoon Bassel had worked out what six months of board would cost and was waiting outside Mr Ayoub\'s door.',
  '⚠ **We have just promised Ms Tannous a held price for twelve months.** If board rises, the promise costs us the rise; ⚠ **if we buy six months forward and the report is wrong, we have forty million in a store that leaks.**',
  '**So this unit is about one verb and what hangs from it.** ⚠ ***Suspended* is not *closed*, *it is understood* is not a source, and *about three weeks* is not a date** — ⚠ **and the whole decision rests on which of those we can tell apart by Thursday.**',
], C.lyellow, C.orange));

// ======================= CYCLE 23.1 =======================
out.push(pb());
out.push(h2('23.1  The word that decided you'));
out.push(p('**Function:** reading a report closely enough to act on it   ·   **Grammar:** reading for the verb — _suspended · stopped · closed · is to close_   ·   **Pronunciation:** reading a report line aloud, one word at a time'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of something you did because of something you read. Say which sentence made you do it.'));
out.push(p('**b**  Which is the strongest claim? _The mill has closed. · The mill has suspended deliveries. · The mill is to close._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What did the report actually say?   **A** the mill has closed   **B** the mill has suspended deliveries   **C** the mill will raise prices'));
out.push(p('**b**  Listen again. **1** What did Bassel think it said? **2** What three things does Nour say the sentence does not tell them?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.1  "Read me the sentence again"', [
  ['Bassel', 'The Hama mill has closed. We should buy six months of board this week.'],
  ['Nour', '⚠ **Read me the sentence again. The sentence, not what it means.**'],
  ['Bassel', '*It is understood that the mill at Hama has suspended deliveries, with a resumption expected in about three weeks.*'],
  ['Nour', '⚠ **Then it has not closed.** ⚠ ***Suspended deliveries* is not *closed*, and *in about three weeks* is in the same sentence as the suspension.**'],
  ['Bassel', 'Suspended, closed — the board does not arrive either way.'],
  ['Nour', '⚠ **It is the difference between three weeks and never**, and we are deciding whether to spend forty million. ⚠ **What else does the sentence not tell us?**'],
  ['Bassel', '…Who says so.'],
  ['Nour', '⚠ ***It is understood that*** — **which is a sentence with no source in it at all.** ⚠ **And it does not say whether it is all deliveries or the export grade**, which is the only grade we buy.'],
  ['Bassel', 'So three things.'],
  ['Nour', '⚠ **Three. What has happened, who says so, and to what.** And the report gives us a verb, an *it is understood*, and no product.'],
  ['Bassel', 'Then what do we do?'],
  ['Nour', '⚠ **Telephone Hama.** ⚠ **It takes four minutes and it is the only action in this room that produces a fact.** ⚠ **And whatever they say, write it down with the date and who said it** — because in September somebody will ask what we knew in July.'],
  ['Bassel', 'And if they do not answer?'],
  ['Nour', '⚠ **Then we know one more thing than we know now**, and we write that down too: *telephoned 21 July, no answer, twice.*'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Reading for the verb**',
  table(['The sentence says', 'It does not say'], [
    ['**has suspended deliveries**', '⚠ **has closed** — *the difference between three weeks and never*'],
    ['⚠ **it is understood that**', '⚠ **who says so — there is no source in the sentence at all**'],
    ['**a resumption expected in about three weeks**', 'a date'],
    ['**deliveries**', '⚠ **which grade. We buy one of five.**'],
    ['⚠ **the three questions**', '⚠ **what has happened · who says so · to what**'],
  ], [2.3, 3.3]),
  '⚠ **Read the sentence, not what it means.** ⚠ **Ask somebody to read it aloud a second time and most of the decision disappears** — *suspended* is not *closed*, and *in about three weeks* is in the same sentence as the suspension.',
  '⚠ **Three questions of any report: what has happened, who says so, and to what.** ⚠ **A trade line usually answers one of the three and is acted on as though it had answered all three.**',
  '⚠ **The product is the question nobody asks.** ⚠ *Deliveries* — **of which grade?** We buy one of five, and a suspension of the other four is nothing to do with us.',
  '⚠ **And the only action that produces a fact is a telephone call.** ⚠ **It takes four minutes** — and whatever the answer, ⚠ **write it down with the date and the name**, because in two months somebody will ask what you knew.',
  '⚠ **Record a failure to find out as a finding.** ⚠ *Telephoned 21 July, no answer, twice.* **That is a line in a file and it is worth more than the report.**',
  '**Practise:** Take each line and say what it does not tell you. 1 *prices are to rise* 2 *the border is closed* 3 *it is understood that the contract has been awarded* 4 *deliveries have been suspended* 5 *sources say the plant is for sale*',
  '**Useful phrases:**  read me the sentence again  ·  what has happened, who says so, to what  ·  suspended is not closed  ·  of which grade?  ·  telephone them; it takes four minutes  ·  no answer, twice',
  '**Pronunciation – the report line read one word at a time.** 🔊 **Track 23.2** Listen: _it is understood // that the mill at Hama // has suspended deliveries // with a resumption expected // in about three weeks._ ⚠ **Five groups, and a pause long enough to think in after each.** **Read at speed it is one fact; read in five groups it is four hedges and no source.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports what a line means; B asks for the line. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________. We should __________ this week.'],
  ['B', '⚠ Read me the sentence again. ⚠ **The sentence, not what it means.**'],
  ['A', '*__________.*'],
  ['B', '⚠ Then it has not __________. ⚠ **__________ is not __________.**'],
  ['A', '__________ either way.'],
  ['B', '⚠ It is the difference between __________ and __________. ⚠ What else does it not tell us?'],
  ['A', '…__________.'],
  ['B', '⚠ Then telephone __________, and write down __________.'],
]));
out.push(table(['Role card 1 — suspended, not closed', 'Role card 2 — the three questions'], [[
  '*It is understood that the mill at Hama has suspended deliveries, with a resumption expected in about three weeks.* ⚠ **Not closed. No source. No grade.** ⚠ **Forty million of board was about to be bought on one verb** — and the telephone call takes four minutes.',
  'A brings four trade lines. ⚠ B asks three questions of each: ⚠ **what has happened, who says so, and to what?** ⚠ **Expect one of the three to be answered and all three to have been assumed** — and the missing one is nearly always *to what.*',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the sentence as reported and as read. ⚠ Then write the three things it does not say, and the telephone call that would settle one of them.'));
out.push(PHRASE_CARD(['read me the sentence again', 'what, who says so, to what', 'suspended is not closed', 'of which grade?', 'four minutes on the telephone', 'no answer, twice']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** things you have read about your trade. Write the sentence, what it does not say, and the call that would settle it.'));
out.push(table(['The sentence, as written', 'What has happened', 'Who says so', 'To what — and the call'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2, 1.2, 1.1, 1.7]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The sentence says _______. What it does not say is _______. The call that would settle it is to _______, and it would take _______._'));
out.push(p('**Listener task:** count the lines in the room with no source at all. ⚠ Then count how many could be settled by one telephone call of under ten minutes.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _closed_ reported as _suspended_ and a decision taken from a line with no product in it. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE HAMA REPORT, WORD BY WORD. 21 July. N. Mansour. ⚠ Four lines of trade news, and one decision of forty million resting on them.**',
  '**The line, in full.** _It is understood that the mill at Hama has suspended deliveries, with a resumption expected in about three weeks._',
  table(['The words', 'What they establish', 'What was assumed'], [
    ['**it is understood that**', '⚠ **nothing. There is no source in the sentence.**', '⚠ **that somebody reliable had said it**'],
    ['**has suspended**', 'that deliveries have stopped for now', '⚠ **that the mill has closed**'],
    ['**deliveries**', 'that something is not being delivered', '⚠ **that it is our grade. We buy one of five.**'],
    ['**a resumption expected**', '⚠ **that somebody expects it to restart**', 'that it will not restart'],
    ['**in about three weeks**', 'roughly a period', '⚠ **that there is no period at all**'],
  ], [1.6, 2.4, 2.3]),
  '⚠ **Five groups of words and four assumptions**, and the four assumptions together turn a three-week interruption in an unnamed grade into a closure. ⚠ **Every one of them was made in the four seconds it takes to read the line at normal speed.**',
  '⚠ **What the telephone call produced.** I telephoned Hama at nine and spoke to a man in the sales office at twenty past. ⚠ **The suspension is on two grades and not on ours; it is the heavy brown, because the slitter is being rebuilt; and he said *about a fortnight* without being asked.**',
  '⚠ **Twenty minutes, and no board bought.** ⚠ **What I have written in the file is: *21 July, telephoned Hama sales office, man would not give his name, says suspension is heavy brown only, slitter rebuild, about a fortnight.*** ⚠ **The *would not give his name* is part of the record and not a complaint** — in September it will tell us how much weight the line can carry.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many assumptions were made, and how long did they take?'));
out.push(item('2', 'What did the telephone call establish?'));
out.push(item('3', 'Why is *would not give his name* in the file?'));
out.push(box('Writer\'s box', [
  '**The report word by word — four parts:** **the line quoted in full** → **a table: *the words · what they establish · what was assumed*** → ⚠ **how many assumptions, and how long they took** → ⚠ **what the telephone call produced, and the file note with its date.**',
  '⚠ **Quote the line in full before you take it apart.** ⚠ **A paraphrase cannot be analysed**, and the paraphrase is what caused the trouble in the first place.',
  '⚠ **Put *what was assumed* in its own column.** ⚠ **It is the column nobody writes and the only one that explains the decision** — *that somebody reliable had said it; that the mill has closed; that it is our grade.*',
  '⚠ **Count the assumptions and say how long they took.** ⚠ *Four, in the four seconds it takes to read the line at normal speed.* **The speed is the mechanism**, and naming it stops the reader feeling foolish and makes them careful instead.',
  '⚠ **Write the file note with the date, the office and what the person would and would not say.** ⚠ *Man would not give his name.* **That is part of the record and not a complaint** — it tells a reader in two months how much weight the line can carry.',
  '⚠ **And record the unprompted detail.** ⚠ *He said *about a fortnight* without being asked.* **An unasked-for figure is worth more than an answered one**, and a reader can tell the difference only if you say which it was.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *the report word by word* for something you have read about your trade (**60 words or more**). Use the frame.'));
out.push(p('**______________, WORD BY WORD. ______________. ______________. ⚠ ______________ lines of trade news, and ______________ resting on them.**   **The line, in full.** _______________________   **______________** | ⚠ **______________** | ⚠ **______________**   **______________** | ______________ | ⚠ **______________**   **______________** | ______________ | ⚠ **______________**   ⚠ **______________ groups of words and ______________ assumptions**, and ⚠ **every one was made in the ______________ it takes to read the line at normal speed.**   ⚠ **What the telephone call produced.** I telephoned ______________ at ______________ and spoke to ______________. ⚠ **______________.**   ⚠ **______________, and ______________.** ⚠ **What I have written in the file is: *______________*.**'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 and one move — name the reader, then quote, ask, stop', [
  '"**I am reading this as somebody in September who has to decide whether to believe the same source again.** The box says write what the person would and would not say. ⚠ **Your file note gives the answer but not who gave it — how much weight should I put on this line?**"',
  '⚠ In this unit the reader to name is ⚠ **somebody two months later who must decide how much weight a source can carry.** ⚠ **Every rule in Unit 23 comes from that reader**, and a note written only for today\'s decision fails all of them.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **how much weight can this line carry in September?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The line quoted in full', ''],
  ['A *what was assumed* column', ''],
  ['The assumptions counted', ''],
  ['The call, with the time and the office', ''],
  ['A file note with the date and what the person would not say', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only *what was assumed*. The class says which assumption would have cost most.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a decision taken from something read (**140 to 180 words**). Say what the line said, what was assumed, what was done, and what turned out to be true.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is the line quoted, or paraphrased?_   ? _which word did the deciding?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did one word do the deciding? Usually all three — ⚠ **and in two of three the word was a verb that had been read as a stronger verb.**'));
out.push(box('Homework', ['Write your final text. Then take one line of trade news and write what it does not tell you under three headings: what has happened, who says so, and to what (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 23.2 =======================
out.push(pb());
out.push(h2('23.2  Said, claimed, admitted, denied'));
out.push(p('**Function:** reporting what somebody said   ·   **Grammar:** reporting verbs — _said · stated · claimed · admitted · denied · declined to comment_   ·   **Pronunciation:** the reporting verb said without colour'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of something somebody told you that you passed on. Say which verb you used when you passed it on.'));
out.push(p('**b**  Which takes a position? _He said the slitter is being rebuilt. · He claimed the slitter is being rebuilt. · He admitted the slitter is being rebuilt._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which verb does Nour choose, and why?   **A** claimed   **B** said   **C** admitted'));
out.push(p('**b**  Listen again. **1** What does *claimed* tell a reader? **2** What does *admitted* assume?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.3  "Four verbs and four positions"', [
  ['Lina', 'I have written *the sales office claimed the suspension is on the heavy brown only*.'],
  ['Nour', '⚠ **Then you have told the reader you do not believe him**, and you have not said so, and you cannot be held to it.'],
  ['Lina', 'I do believe him.'],
  ['Nour', '⚠ **Then write *said*.** ⚠ ***Said* takes no position at all** — it reports and nothing else, and it is the right verb nine times in ten.'],
  ['Lina', 'And *claimed*?'],
  ['Nour', '⚠ ***Claimed* means: he says this and I am not vouching for it.*** It is useful and it is not neutral, ⚠ **and the moment you use it you have made the reader doubt** — so use it only where you have a reason and, better, give the reason.'],
  ['Lina', '*Admitted*?'],
  ['Nour', '⚠ ***Admitted* says two things: that it is against his interest, and that somebody had to get it out of him.*** ⚠ **If he volunteered it, *admitted* is simply wrong** — and he volunteered the fortnight.'],
  ['Lina', 'And if he had refused to say anything?'],
  ['Nour', '⚠ ***Declined to comment*, which is a fact, not *would not say*, which is a verdict.*** ⚠ **And *denied* only where there was an accusation to deny** — *he denied the mill had closed* is wrong if nobody asked him whether it had.'],
  ['Lina', 'Nobody will notice the difference.'],
  ['Nour', '⚠ **Mr Attar will notice, in September, and he will be deciding whether to spend money on the strength of your sentence.** ⚠ **And if the sentence says *claimed*, he will telephone Hama himself** — ⚠ **which costs us nothing except that it says we did not believe our own source, in writing, in a file.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Four reporting verbs, four positions**',
  table(['Verb', 'What it tells the reader'], [
    ['⚠ **said · stated**', '⚠ **nothing. It reports. The right verb nine times in ten.**'],
    ['⚠ **claimed**', '⚠ **he says this and I am not vouching for it** — give the reason'],
    ['⚠ **admitted**', '⚠ **it is against his interest AND somebody got it out of him**'],
    ['**denied**', 'there was an accusation — ⚠ **and somebody made it**'],
    ['**declined to comment**', '⚠ **a fact.** *Would not say* is a verdict'],
  ], [1.7, 4]),
  '⚠ ***Said* takes no position at all and is the right verb nine times in ten.** ⚠ **Every other verb on this list puts the writer somewhere**, and a reader will act on where the writer is standing.',
  '⚠ ***Claimed* tells the reader you do not believe him, without saying so and without being answerable for it.** **Use it where you have a reason, and give the reason** — *claimed, though the circular of the 4th says otherwise.*',
  '⚠ ***Admitted* asserts two things at once**: that the fact is against the speaker\'s interest, and that it had to be extracted. ⚠ **If he volunteered it, *admitted* is simply wrong.**',
  '⚠ ***Denied* needs an accusation to exist.** ⚠ *He denied the mill had closed* **is wrong if nobody asked him whether it had** — and it plants the accusation in the reader\'s mind, which is worse than reporting it.',
  '⚠ **And the cost of the wrong verb is work.** ⚠ **A reader who sees *claimed* telephones the source himself** — *which says, in writing, in a file, that we did not believe our own source.*',
  '**Practise:** Choose the verb. 1 he volunteered a fortnight 2 he said something against his own company after four questions 3 he would say nothing 4 he said the opposite of a written circular 5 he answered an accusation nobody had made',
  '**Useful phrases:**  said  ·  claimed, though …  ·  admitted, after …  ·  declined to comment  ·  he volunteered it  ·  the right verb nine times in ten',
  '**Pronunciation – the reporting verb without colour.** 🔊 **Track 23.4** Listen: _the sales office SAID the suspension is on the heavy brown only._ ⚠ **No stress on *said* at all, and no rise after it.** **Stress the verb and even *said* becomes *claimed*** — the colour is in the voice before it is in the word. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a sentence with the wrong verb; B finds the right one. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I have written *__________ claimed __________*.'],
  ['B', '⚠ Then you have told the reader __________, and you have not said so.'],
  ['A', 'I do believe __________.'],
  ['B', '⚠ Then write *said*. ⚠ **It takes no position at all.**'],
  ['A', 'And if __________ had __________?'],
  ['B', '⚠ Then *__________*, which is __________, not *__________*, which is __________.'],
  ['A', 'Nobody will notice.'],
  ['B', '⚠ __________ will notice, in __________, and __________.'],
]));
out.push(table(['Role card 1 — the four verbs', 'Role card 2 — the volunteered fortnight'], [[
  '*Claimed* becomes **said**, because the writer believes him. ⚠ ***Admitted* requires two things**: against his interest, and extracted. ⚠ ***Declined to comment* is a fact and *would not say* is a verdict.** ⚠ **And *denied* needs an accusation that somebody actually made.**',
  'A has written *he admitted that it was only a fortnight*. ⚠ B\'s job is to ask one question: ⚠ **did he volunteer it or was it got out of him?** ⚠ **He volunteered it, so *admitted* is wrong** — and the useful sentence is *he said about a fortnight, without being asked*, **because the *without being asked* is the evidence.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the sentence with each of the four verbs. ⚠ Then say what each version would make a reader do.'));
out.push(PHRASE_CARD(['said', 'claimed, though …', 'admitted, after …', 'declined to comment', 'he volunteered it', 'nine times in ten']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** things you have been told at work. Choose the verb and say why.'));
out.push(table(['What was said', 'Who said it', 'The verb', 'Why that verb'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2, 1.1, 0.9, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ _______ that _______. I have used _______ because _______._'));
out.push(p('**Listener task:** count the *claimed*s in the room that carry a reason. ⚠ Then find any *admitted* where the speaker volunteered the information.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _he denied the mill had closed_ where nobody asked, and _admitted_ for something volunteered. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE SAME CALL, WRITTEN FOUR WAYS. 22 July. N. Mansour. ⚠ One telephone call of twenty minutes, and four file notes a reader would act on differently.**',
  table(['The sentence', 'What a reader does with it'], [
    ['**1** The sales office **said** the suspension is on the heavy brown only, and gave about a fortnight unprompted.', '⚠ **nothing further. The question is answered and the file is closed.**'],
    ['**2** The sales office **claimed** the suspension is on the heavy brown only.', '⚠ **telephones Hama himself** — and the file now says we doubted our own source'],
    ['**3** The sales office **admitted** the suspension is on the heavy brown only.', '⚠ **reads it as bad news extracted under pressure, and starts looking for a second mill**'],
    ['**4** The sales office **declined to comment** on the grades affected.', '⚠ **a different fact altogether — and the opposite of what happened**'],
    ['⚠ **the call itself**', '⚠ **he answered everything, volunteered the fortnight, and would not give his name**'],
  ], [3.2, 3]),
  '⚠ **All four sentences are about the same twenty minutes and only the first is true.** ⚠ **The other three are not lies; they are positions**, and each one sends the next reader off to do a different thing.',
  '⚠ **The verb is the most expensive word in a market note**, because it is the word a reader acts on without noticing it. ⚠ **Sentence 3 would have had us looking for a second mill in August**, which would have cost a fortnight of somebody\'s time and told Hama we were shopping.',
  '⚠ **And the one real reservation belongs in its own sentence, not in the verb.** ⚠ *He would not give his name.* **That is a fact about the source and it goes beside the report** — ⚠ **where *claimed* would have put the same doubt into the report itself and made it unusable.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which of the four sentences is true, and what are the others?'));
out.push(item('2', 'What would sentence 3 have cost?'));
out.push(item('3', 'Where does the real reservation belong?'));
out.push(box('Writer\'s box', [
  '**The same call written four ways — four parts:** **a table: *the sentence · what a reader does with it*** → ⚠ **which one is true, and what the others are** → ⚠ **what the wrong verb would have cost** → ⚠ **where the real reservation belongs.**',
  '⚠ **Write the four versions out.** ⚠ **A verb cannot be judged alone and can be judged instantly against its alternatives** — and the exercise takes four minutes once in a career and then the choice is automatic.',
  '⚠ **Judge each by what a reader does, not by how it sounds.** ⚠ *Telephones Hama himself.* *Starts looking for a second mill.* **A reporting verb is an instruction to the next reader**, and that is the only test.',
  '⚠ **Say what the wrong verb would have cost, in time or in money.** ⚠ *A fortnight of somebody\'s time, and it would have told Hama we were shopping.* **Then the choice of verb stops being a matter of taste.**',
  '⚠ **Put the reservation in its own sentence.** ⚠ *He would not give his name.* **A fact about the source goes beside the report** — ⚠ **inside the verb, the same doubt makes the whole report unusable.**',
  '⚠ **And keep *said* unless you can say why not.** ⚠ **Nine times in ten it is the right verb**, and the tenth time you should be able to finish the sentence *claimed, though …*',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *the same thing four ways* for something you have been told at work (**60 words or more**). Use the frame.'));
out.push(p('**THE SAME ______________, WRITTEN FOUR WAYS. ______________. ______________. ⚠ One ______________, and four notes a reader would act on differently.**   **1** ______________ **said** ______________. | ⚠ **______________**   **2** ______________ **claimed** ______________. | ⚠ **______________**   **3** ______________ **admitted** ______________. | ⚠ **______________**   **4** ______________ **declined to comment** on ______________. | ⚠ **______________**   ⚠ **the ______________ itself** | ⚠ **______________**   ⚠ **All four are about the same ______________ and only ______________ is true.** ⚠ **The others are not lies; they are positions**, and each sends the next reader to do ______________.   ⚠ **The verb is the most expensive word in ______________**, because ______________. ⚠ Sentence ______________ would have ______________.   ⚠ **And the one real reservation belongs in its own sentence.** ⚠ *______________.*'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **what would this verb make me go and do?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['All four versions written out', ''],
  ['Each judged by what a reader does', ''],
  ['Which one is true, said plainly', ''],
  ['What the wrong verb would have cost', ''],
  ['The reservation in its own sentence', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only sentence 3. The class says what it would send them off to do.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time a reporting verb changed what somebody did (**140 to 180 words**). Say what was said, what verb was used, what was done, and what the right verb would have been.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _does every *claimed* carry a reason?_   ? _did anybody volunteer the thing that is reported as admitted?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the verb chosen by accident? Usually all three — ⚠ **and in two of three it was the verb the writer had heard somebody else use about the same person.**'));
out.push(box('Homework', ['Write your final text. Then take five sentences from any trade paper or circular and mark the reporting verb in each, with what it tells you about the writer\'s position (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 23.3 =======================
out.push(pb());
out.push(h2('23.3  It is understood that'));
out.push(p('**Function:** seeing what an impersonal passive hides   ·   **Grammar:** _it is understood that · it is reported that · it is believed that · sources say_   ·   **Pronunciation:** the phrase that is read without being heard'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a sentence at your work that begins *it is understood* or *we have been told*. Say who told you.'));
out.push(p('**b**  Who is the source? _It is understood that prices will rise. · The plater\'s letter of 22 January says prices will rise._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar say *it is understood that* means?   **A** somebody reliable said it   **B** somebody said it and nobody will say who   **C** everybody knows it'));
out.push(p('**b**  Listen again. **1** What are the three uses of the phrase? **2** Which one is honest?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.5  "Three reasons for writing it, and one of them is honest"', [
  ['Mr Attar', 'Your note has *it is understood that the suspension is on two grades*. Understood by whom?'],
  ['Nour', 'By me. The sales office told me on the telephone.'],
  ['Mr Attar', '⚠ **Then write that.** *The Hama sales office told me on 21 July that…* ⚠ **Eleven words, and a reader in September knows exactly what he has.**'],
  ['Nour', 'The trade sheet writes *it is understood*.'],
  ['Mr Attar', '⚠ **A trade sheet has three reasons for writing it and only one of them is honest.** ⚠ **The first is that it is protecting a source who would be sacked** — and that is a real reason and a good one.'],
  ['Nour', 'And the second?'],
  ['Mr Attar', '⚠ **That it has one source and does not know whether he is right.** ⚠ **Which is also honest if the reader knows that is what it means** — and no reader does, **because the phrase reads like a consensus and means a man on a telephone.**'],
  ['Nour', 'And the third?'],
  ['Mr Attar', '⚠ **That somebody heard it in a yard and would rather not say so.** ⚠ **And you cannot tell which of the three you are reading**, which is why the phrase is worth nothing in a decision.'],
  ['Nour', 'So I should never use it.'],
  ['Mr Attar', '⚠ **Use it for the first reason only, and say that is what you are doing.** ⚠ ***A man who would be dismissed for telling me this says…*** **Twelve words, and the reader knows the source is real and protected** and can weigh the whole thing properly.'],
  ['Nour', 'And in our own file notes?'],
  ['Mr Attar', '⚠ **Never.** ⚠ **In an internal note the phrase has no possible honest use**, because the one reason for it — protecting a source — ⚠ **is exactly the thing the file exists to record.** *A name in a file is not a name in a newspaper.*'],
]));
out.push(sp());
out.push(box('Language box', [
  '**What _it is understood that_ hides**',
  table(['Why a writer uses it', 'Honest?'], [
    ['⚠ **to protect a source who would be dismissed**', '⚠ **yes — and say so**'],
    ['**one source, and the writer does not know whether he is right**', '⚠ **honest only if the reader knows that is what it means — and no reader does**'],
    ['⚠ **somebody heard it in a yard**', '⚠ **no**'],
    ['⚠ **the reader\'s problem**', '⚠ **you cannot tell which of the three you are reading**'],
    ['**in an internal note**', '⚠ **never. The file exists to record the name.**'],
  ], [2.6, 3.2]),
  '⚠ **The phrase reads like a consensus and means a man on a telephone.** ⚠ **Three reasons for writing it and only one is honest**, and a reader cannot tell which they have.',
  '⚠ **Name the source instead, with the date.** ⚠ *The Hama sales office told me on 21 July that…* — **eleven words, and a reader in September knows exactly what he has.**',
  '⚠ **Where the source must be protected, say that you are protecting one.** ⚠ ***A man who would be dismissed for telling me this says…*** **Twelve words, and the reader knows the source is real and can weigh it.**',
  '⚠ **In an internal note, never.** ⚠ **The one honest reason for the phrase — protecting a source — is exactly what a file exists to record.** *A name in a file is not a name in a newspaper.*',
  '⚠ **And the same applies to *we have been told* and *it seems that*.** **Both hide an actor**; ⚠ **ask of every one *by whom, and when?*** and write the answer in.',
  '**Practise:** Rewrite each with its source. 1 *it is understood that prices will rise* 2 *it is reported that the border will close* 3 *we have been told the order is cancelled* 4 *it seems the lorry did not arrive* 5 *sources say the plant is for sale*',
  '**Useful phrases:**  understood by whom?  ·  the sales office told me on the 21st  ·  a man who would be dismissed for telling me  ·  by whom, and when?  ·  never in a file  ·  a name in a file is not a name in a newspaper',
  '**Pronunciation – the phrase read without being heard.** 🔊 **Track 23.6** Listen twice: _it is understood that the mill has suspended deliveries._ ⚠ **The second time with a heavy stress on *understood*.** **Unstressed it disappears; stressed it is plainly a hole in the sentence** — and reading it aloud with the stress is how you find them. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a sentence with no source; B asks for one. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Your note has *it is understood that __________*. ⚠ Understood by whom?'],
  ['A', 'By me. __________ told me __________.'],
  ['B', '⚠ Then write that. *__________ told me on __________ that…* ⚠ **and a reader in __________ knows what he has.**'],
  ['A', 'The __________ writes *it is understood*.'],
  ['B', '⚠ It has three reasons and one is honest: __________.'],
  ['A', 'And in our own notes?'],
  ['B', '⚠ **Never.** ⚠ **The file exists to record __________.**'],
]));
out.push(table(['Role card 1 — the three reasons', 'Role card 2 — by whom, and when'], [[
  '⚠ **Protecting a source who would be dismissed — honest, and say so.** ⚠ **One source and no idea whether he is right — honest only if the reader knows, and no reader does.** ⚠ **Heard in a yard — not honest.** ⚠ **And the reader cannot tell which of the three.**',
  'A brings four sentences with no actor: *it is understood*, *it is reported*, *we have been told*, *it seems*. ⚠ B asks of each: ⚠ **by whom, and when?** ⚠ **Then writes the answer into the sentence** — and the pair counts the words it cost, which is usually between five and twelve.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the sentence with its source and date. ⚠ Then count the words it cost, and say which of the three reasons the original was hiding.'));
out.push(PHRASE_CARD(['understood by whom?', 'told me on the 21st', 'a man who would be dismissed', 'by whom, and when?', 'never in a file', 'five to twelve words']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** sentences at your work with no actor. Write the source and the date in.'));
out.push(table(['The sentence as it stands', 'By whom', 'When', 'The sentence rewritten'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.8, 1.1, 0.8, 2.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The sentence said _______. The source was _______, on _______. Rewritten it reads _______, and it cost _______ words._'));
out.push(p('**Listener task:** count the sentences in the room whose source turned out to be one person on a telephone. ⚠ Then find any whose source nobody can now name at all.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it is understood_ in an internal file note, and a source named without a date. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**WHAT THE FOUR LINES OF 20 JULY ACTUALLY HAD IN THEM. 23 July. N. Mansour. ⚠ Four lines, four sources, and three of them are the same man.**',
  table(['The line', 'Its attribution', 'What it turned out to be'], [
    ['the mill at Hama has suspended deliveries', '⚠ **it is understood that**', '⚠ **true of two grades, not ours; the sales office, named department, no name**'],
    ['board prices are expected to rise in the autumn', '⚠ **it is believed in the trade**', '⚠ **nobody we telephoned had heard it. Two of three said they had read it in this sheet.**'],
    ['a Homs works is to reopen', '⚠ **sources say**', '**the owner\'s brother-in-law, who told two people in a yard. The works has no roof.**'],
    ['the plater has given notice of twelve per cent', '**the plater\'s circular of 22 January**', '⚠ **true, and the only line of the four with a document behind it**'],
  ], [2.1, 1.7, 3]),
  '⚠ **One line of four carried a document and that is the only line we have acted on.** ⚠ **The other three carried *it is understood*, *it is believed in the trade* and *sources say* — and between them they very nearly cost us forty million.**',
  '⚠ **The second line is the one to keep in mind for the rest of your working life.** ⚠ **Two of the three people we telephoned said they had read it in this sheet** — ⚠ **so *it is believed in the trade* means the trade read the sheet**, and the sheet is quoting a belief it created the week before.',
  '⚠ **And the third line is a yard story with a grammar on it.** *A Homs works is to reopen.* ⚠ **The works has no roof** — we drove past it on 2 July — and the source is somebody\'s brother-in-law. ⚠ ***Sources say* turned three men in a yard into a plural noun**, and the plural is doing all the work.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many of the four lines had a document behind them?'));
out.push(item('2', 'What did *it is believed in the trade* turn out to mean?'));
out.push(item('3', 'What is doing the work in *sources say*?'));
out.push(box('Writer\'s box', [
  '**What the lines actually had in them — four parts:** **a table: *the line · its attribution · what it turned out to be*** → ⚠ **how many carried a document** → ⚠ **the line whose belief was created by the same sheet** → ⚠ **the plural that is doing the work.**',
  '⚠ **Put the attribution in its own column, in the writer\'s own words.** ⚠ *It is understood that · it is believed in the trade · sources say · the circular of 22 January.* **Set out in a column they can be compared, and only one of the four is a document.**',
  '⚠ **Count the lines with a document behind them and act on those only.** ⚠ *One of four, and that is the only line we have acted on.* **The count is the whole page**, and it will be one of four most weeks.',
  '⚠ **Look for the belief the sheet created itself.** ⚠ *Two of the three people we telephoned said they had read it in this sheet.* **A trade paper reporting a trade belief is often reporting its own last issue**, and finding one instance of it will change how a reader reads for years.',
  '⚠ **And take the plurals apart.** ⚠ ***Sources say* turned three men in a yard into a plural noun**, and *the plural is doing all the work.* **Ask how many, and then ask how many of them are the same man.**',
  '⚠ **Check one thing physically where you can.** ⚠ *The works has no roof — we drove past it on 2 July.* **One observation with a date outweighs any number of attributions**, and it usually costs a detour.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *what the lines actually had in them* for trade news you have read (**60 words or more**). Use the frame.'));
out.push(p('**WHAT THE ______________ LINES OF ______________ ACTUALLY HAD IN THEM. ______________. ______________. ⚠ ______________ lines, ______________ sources, and ______________ of them are ______________.**   ______________ | ⚠ **______________** | ⚠ **______________**   ______________ | ⚠ **______________** | ⚠ **______________**   ______________ | **______________** | ⚠ **______________, and the only line with a document behind it**   ⚠ **______________ line of ______________ carried a document and that is the only one we have acted on.** ⚠ The others carried ______________, **and between them they nearly cost us ______________.**   ⚠ **The ______________ line is the one to keep in mind.** ⚠ ______________ of ______________ said they had ______________ — ⚠ **so ______________ means ______________.**   ⚠ **And ______________ is a ______________ with a grammar on it.** ⚠ ______________, **and the plural is doing all the work.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **which of these lines has a document behind it?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The attribution in its own column, in the writer\'s words', ''],
  ['The lines with a document, counted', ''],
  ['A belief traced back to the sheet itself', ''],
  ['A plural taken apart — how many, and how many the same man', ''],
  ['One thing checked physically, with a date', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the line with a document behind it. The class says what the document is and how old.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a piece of trade news with no source (**140 to 180 words**). Say what it said, who turned out to be behind it, what it would have cost to act on, and what one call or one detour established.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is there a document anywhere in it?_   ? _how many of the sources are the same person?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the sources turn out to be one person? Usually two of three — ⚠ **and in one of three the one person had read it in the same paper.**'));
out.push(box('Homework', ['Write your final text. Then take four lines of any circular or trade paper and write the attribution of each in its own column, and mark which carries a document (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 23.4 =======================
out.push(pb());
out.push(h2('23.4  Three sentences'));
out.push(p('**Function:** writing what is known in three sentences   ·   **Grammar:** what · who says so · what is not known   ·   **Pronunciation:** three sentences read as three'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of something you told somebody at work this week. Say it in three sentences: what, who says so, and what you do not know.'));
out.push(p('**b**  Which sentence is missing? _The suspension is on two grades. The Hama sales office told me on 21 July. ______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the third sentence for?   **A** politeness   **B** so that the reader knows what still has to be found out   **C** to protect the writer'));
out.push(p('**b**  Listen again. **1** What happens to a note without the third sentence? **2** What does Lina notice about the third sentence?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.7  "What, who says so, and what is not known"', [
  ['Nour', 'Three sentences, in this order, every time. ⚠ **What. Who says so. And what is not known.**'],
  ['Lina', 'Mine has the first two.'],
  ['Nour', '⚠ **Then your reader will think everything else is known**, and he will not telephone anybody, ⚠ **and in a fortnight he will be surprised by something that was never in the note at all.**'],
  ['Lina', 'What is not known about the Hama suspension?'],
  ['Nour', '⚠ **Whether the fortnight is from the 21st or from the start of the suspension; whether the slitter rebuild has a date; and whether the heavy brown shortage will pull our grade forward.** Three things, and the third is the one that would cost us.'],
  ['Lina', 'That is longer than the other two sentences together.'],
  ['Nour', '⚠ **It usually is, and that is the shape of honest information.** ⚠ **One line of fact, one line of source, and a paragraph of what we do not know.**'],
  ['Lina', 'May I ask something about the third sentence? ⚠ **It is the only part that tells anybody to do anything.**'],
  ['Nour', 'Go on.'],
  ['Lina', '⚠ **The first two sentences close the subject and the third opens it.** *What is not known* is a list of telephone calls, and nobody can read it without wanting to make one.'],
  ['Nour', '⚠ **Which is why it goes last and not first.** ⚠ **Put it first and it reads as a note from somebody who knows nothing**; put it last and it reads as a list of work.'],
  ['Lina', 'And when the calls are made?'],
  ['Nour', '⚠ **Then the note is written again, with the same three sentences and a shorter third one.** ⚠ **A market note is dated because it is a photograph of what was known on a day** — and the next one is a different photograph.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Three sentences, in this order**',
  table(['', 'The sentence'], [
    ['**1 what**', 'The suspension is on two grades, the heavy brown and one other, not ours.'],
    ['**2 who says so**', '⚠ **The Hama sales office told me on the telephone on 21 July; the man would not give his name.**'],
    ['⚠ **3 what is not known**', '⚠ **whether the fortnight runs from the 21st · whether the rebuild has a date · whether the heavy brown shortage will pull our grade forward**'],
    ['⚠ **the shape**', '⚠ **one line of fact, one of source, and a paragraph of what is not known**'],
    ['⚠ **the order**', '⚠ **what is not known goes last** — first, it reads as ignorance; last, as a list of work'],
  ], [1.7, 4.3]),
  '⚠ **Three sentences, in this order, every time: what · who says so · what is not known.**',
  '⚠ **A note without the third sentence tells the reader that everything else is known**, so he telephones nobody — ⚠ **and in a fortnight he is surprised by something that was never in the note at all.**',
  '⚠ **The third sentence is usually longer than the other two together, and that is the shape of honest information.** **One line of fact, one of source, and a paragraph of what is not known.**',
  '⚠ **It is also the only part that tells anybody to do anything.** ⚠ **The first two sentences close the subject and the third opens it**: *what is not known is a list of telephone calls, and nobody can read it without wanting to make one.*',
  '⚠ **Date the note, because it is a photograph of what was known on a day.** ⚠ **When the calls are made, write it again with a shorter third sentence** — and keep both.',
  '**Practise:** Write the three sentences for each. 1 a price rise 2 a late delivery 3 a competitor\'s new premises 4 a customer\'s silence 5 a rumour about a border',
  '**Useful phrases:**  what · who says so · what is not known  ·  he would not give his name  ·  it is not known whether  ·  a list of telephone calls  ·  dated, because it is a photograph  ·  write it again with a shorter third sentence',
  '**Pronunciation – three sentences read as three.** 🔊 **Track 23.8** Listen: _the suspension is on two grades. // The Hama sales office told me on the 21st. // It is not known whether the fortnight runs from then._ ⚠ **A full stop and a real pause between each.** **Run together, the three become one claim** — and the source and the gap both disappear. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives two sentences; B supplies the third. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________. __________ told me on __________.'],
  ['B', '⚠ And the third sentence?'],
  ['A', 'I have not written one.'],
  ['B', '⚠ **Then I will think everything else is known** and I will telephone nobody.'],
  ['A', '…What is not known is __________, __________ and __________.'],
  ['B', '⚠ That is longer than the first two together.'],
  ['A', '⚠ **It usually is.** ⚠ **And it is the only part that tells anybody to do anything.**'],
]));
out.push(table(['Role card 1 — the three sentences', 'Role card 2 — the longest sentence'], [[
  '**1** *The suspension is on two grades, not ours.* **2** ⚠ *The Hama sales office told me on 21 July; the man would not give his name.* **3** ⚠ *It is not known whether the fortnight runs from the 21st, whether the rebuild has a date, or whether the heavy brown shortage will pull our grade forward* — **and the third is the one that would cost us.**',
  'A has a note with two sentences. ⚠ B\'s job is to write the third and then ⚠ **count the words in each.** ⚠ **The third is usually longer than the first two together** — and then B asks the real question: ⚠ **how many telephone calls is this third sentence?**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three sentences and count the words in each. ⚠ Then write how many telephone calls the third sentence contains.'));
out.push(PHRASE_CARD(['what · who says so · what is not known', 'he would not give his name', 'it is not known whether', 'a list of telephone calls', 'dated, like a photograph', 'a shorter third sentence']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** things you have been told this month. Write the three sentences for each.'));
out.push(table(['1 What', '2 Who says so, and when', '3 What is not known'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.6, 1.9, 2.5]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______. _______ told me on _______. It is not known whether _______, _______, or _______._'));
out.push(p('**Listener task:** count the third sentences in the room that are longer than the first two together. ⚠ Then ask how many calls each third sentence contains.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for a note with no third sentence, and a third sentence put first. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two notes, and answer the questions.'));
out.push(box(null, [
  '**THE SAME INFORMATION, WITH AND WITHOUT THE THIRD SENTENCE. 24 July. N. Mansour.**',
  '**Note A, as Bassel wrote it on the 20th.** _The Hama mill has closed. We should buy six months of board this week._',
  '**Note B, written on the 23rd after one telephone call.**',
  table(['', 'The sentence', 'Words'], [
    ['**1 what**', 'The Hama suspension is on the heavy brown and one other grade, not on ours, and the sales office expects about a fortnight.', '22'],
    ['**2 who says so**', '⚠ **A man in the Hama sales office, by telephone on 21 July. He would not give his name. He volunteered the fortnight without being asked.**', '⚠ **27**'],
    ['⚠ **3 what is not known**', '⚠ **Whether the fortnight runs from the 21st or from the start of the suspension. Whether the slitter rebuild has a completion date. Whether a heavy brown shortage will pull our grade forward, which is the one that would cost us. And whether anybody else has been told a different fortnight.**', '⚠ **56**'],
  ], [1.5, 4.2, 0.7]),
  '⚠ **Note A is thirteen words and would have cost forty million.** ⚠ **Note B is a hundred and five words and cost twenty minutes on the telephone**, and the third sentence is more than half of it.',
  '⚠ **Four things are not known and each one is a telephone call.** ⚠ **Two of the four were made on the 25th** — the fortnight runs from the 18th, and the rebuild has no completion date — ⚠ **and the note was then written again, with a third sentence of twenty-two words.**',
  '⚠ **Both notes are in the file, with their dates.** ⚠ **The old one is not thrown away**, because in September the question will not be *what did we know* but *when did we know it* — ⚠ **and a file with only the final note in it cannot answer that at all.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How long is each note, and what did each cost?'));
out.push(item('2', 'How many calls were in the third sentence, and how many were made?'));
out.push(item('3', 'Why is the old note kept?'));
out.push(box('Writer\'s box', [
  '**The note with and without the third sentence — four parts:** **the short note as it was first written** → **the three sentences with their word counts** → ⚠ **what each note cost** → ⚠ **which calls were made, and why the old note is kept.**',
  '⚠ **Print the word counts.** ⚠ *Twenty-two, twenty-seven, fifty-six.* **A reader who sees that the third sentence is half the note understands the shape of honest information in one glance.**',
  '⚠ **Say what each version cost.** ⚠ *Thirteen words and forty million, against a hundred and five words and twenty minutes on the telephone.* **It is the only comparison that settles an argument about note-writing.**',
  '⚠ **Number the unknowns and mark which have been answered.** ⚠ *Four, and two were made on the 25th.* **An unknown with a date against it becomes a fact**; one without stays unknown and reappears next quarter.',
  '⚠ **Keep the earlier note.** ⚠ **In two months the question is not *what did we know* but *when did we know it*** — and *a file with only the final note in it cannot answer that at all.*',
  '⚠ **And mark the unknown that would cost most.** ⚠ *Whether a heavy brown shortage will pull our grade forward, which is the one that would cost us.* **A list of unknowns without a ranking will be worked through in the order it is written.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *the same information with and without the third sentence* (**60 words or more**). Use the frame.'));
out.push(p('**THE SAME INFORMATION, WITH AND WITHOUT THE THIRD SENTENCE. ______________. ______________.**   **Note A, as it was first written.** _______________________   **Note B, written after ______________.**   **1 what** | ______________ | ______________   **2 who says so** | ⚠ **______________. ______________ would not ______________. ______________ volunteered ______________ without being asked.** | ⚠ **______________**   ⚠ **3 what is not known** | ⚠ **Whether ______________. Whether ______________. Whether ______________, which is the one that would cost us. And whether ______________.** | ⚠ **______________**   ⚠ **Note A is ______________ words and would have cost ______________.** ⚠ **Note B is ______________ words and cost ______________**, and the third sentence is ______________ of it.   ⚠ **______________ things are not known and each one is a telephone call.** ⚠ ______________ were made on ______________.   ⚠ **Both notes are in the file, with their dates**, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **what should I go and find out?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three sentences, in the right order', ''],
  ['Word counts printed', ''],
  ['What each version cost', ''],
  ['The unknowns numbered, with which are answered', ''],
  ['The unknown that would cost most, marked', ''],
  ['The earlier note kept, with its date', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their third sentence. The class counts the telephone calls in it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the three sentences in full for something happening in your trade now (**140 to 180 words**): what, who says so with the date and what they would not say, and what is not known with the costly unknown marked.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is the third sentence the longest?_   ? _which unknown would cost most, and is it marked?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the third sentence the longest? Usually two of three — ⚠ **and in the third the writer has written what is not known as an apology rather than as a list of work.**'));
out.push(box('Homework', ['Write your final text. Then take something you told somebody this week and write it again in three sentences, with the unknowns numbered and the costly one marked (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 23.5 =======================
out.push(pb());
out.push(h2('23.5  Confirmed, claimed, not known'));
out.push(p('**Function:** grading what is known   ·   **Grammar:** the three grades, and never mixing them   ·   **Pronunciation:** the grade word said as a label'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of three things you believe about your trade. Say which is confirmed, which is claimed, and which is not known.'));
out.push(p('**b**  Grade each: _the plater\'s circular of 22 January · a man in a yard says the Homs works will reopen · whether the border will be open on Monday._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub refuse to have in one paragraph?   **A** two sources   **B** two grades of certainty   **C** two dates'));
out.push(p('**b**  Listen again. **1** What makes something *confirmed*? **2** What happens when the three grades are mixed?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.9  "Never two grades in one paragraph"', [
  ['Mr Ayoub', 'Read me your first paragraph.'],
  ['Nour', '*The plater has given notice of twelve per cent from 1 March, the Hama suspension is on two grades, and a Homs works may reopen in the autumn.*'],
  ['Mr Ayoub', '⚠ **Three things in one sentence and three different grades of certainty.** ⚠ **The first is a document, the second is a man on a telephone, and the third is a yard story** — ⚠ **and in that sentence they are all the same weight.**'],
  ['Nour', 'They are all things I have been told.'],
  ['Mr Ayoub', '⚠ **And the reader will act on all three equally**, which is the whole danger. ⚠ **Three headings, and nothing moves between them without a reason.**'],
  ['Nour', 'What makes something confirmed?'],
  ['Mr Ayoub', '⚠ **A document I could put in front of somebody, or two independent people who have not read each other.** ⚠ **The plater\'s circular is confirmed. Hama is claimed — one man, no name, and he was helpful.**'],
  ['Nour', 'And the Homs works?'],
  ['Mr Ayoub', '⚠ **Not known, and we have evidence against it: we drove past on 2 July and it has no roof.** ⚠ **Which goes under *not known* and not under *denied*, because nobody has denied anything** — a roof is not a denial.'],
  ['Nour', 'And when the Hama man is proved right?'],
  ['Mr Ayoub', '⚠ **Then it moves to confirmed and the note says when and why it moved.** ⚠ **A grade that changes without a reason written beside it is how a yard story becomes a fact in about six weeks** — ⚠ **and nobody can ever work out where it came from, because the sentence that promoted it was never written.**'],
  ['Nour', 'Three headings every time, even for four lines?'],
  ['Mr Ayoub', '⚠ **Especially for four lines.** ⚠ **A long report sorts itself out because the reader has time to be careful; four lines are read in six seconds** — and the headings are the only thing that survives six seconds.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The three grades**',
  table(['Grade', 'What it takes', 'In this story'], [
    ['⚠ **CONFIRMED**', '⚠ **a document, or two people who have not read each other**', 'the plater\'s circular of 22 January'],
    ['⚠ **CLAIMED**', 'one person, or one source', '⚠ **Hama — one man, no name, helpful**'],
    ['⚠ **NOT KNOWN**', 'nobody has told us, or we cannot check', '⚠ **the Homs works, and we have a roofless building against it**'],
    ['⚠ **the rule**', '⚠ **never two grades in one paragraph**', '—'],
    ['⚠ **moving a grade**', '⚠ **say when it moved and why**', '—'],
  ], [1.5, 2.6, 2.1]),
  '⚠ **Three headings, and nothing moves between them without a reason.** ⚠ **Three things in one sentence gives three different certainties the same weight, and a reader acts on all three equally.**',
  '⚠ **Confirmed means a document you could put in front of somebody, or two independent people who have not read each other.** **That second half matters**: two men who read the same sheet are one source.',
  '⚠ **Evidence against something goes under *not known*, not under *denied*.** ⚠ *A roof is not a denial* — **nobody has denied anything**, and writing *denied* invents an accusation and an accuser.',
  '⚠ **When a grade changes, write when and why.** ⚠ **A grade that moves without a reason beside it is how a yard story becomes a fact in about six weeks** — and nobody can trace it, *because the sentence that promoted it was never written.*',
  '⚠ **Use the headings most for the shortest notes.** ⚠ **A long report sorts itself out; four lines are read in six seconds**, and the headings are the only thing that survives six seconds.',
  '**Practise:** Grade each. 1 a circular 2 one man on a telephone 3 two people who both read the same paper 4 something you saw yourself 5 something nobody has mentioned for a month',
  '**Useful phrases:**  confirmed · claimed · not known  ·  a document I could put in front of somebody  ·  two people who have not read each other  ·  a roof is not a denial  ·  it moved on the 25th, because  ·  never two grades in one paragraph',
  '**Pronunciation – the grade word as a label.** 🔊 **Track 23.10** Listen: _CONFIRMED. The plater has given notice of twelve per cent. // CLAIMED. The Hama suspension is on two grades._ ⚠ **The grade word said flat and separate, with a full stop after it.** **Said as part of the sentence it becomes an adjective and stops being a heading.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a mixed paragraph; B sorts it into three. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Read me your first paragraph.'],
  ['A', '*__________, __________, and __________.*'],
  ['B', '⚠ Three things and ⚠ **three different grades of certainty.** The first is __________, the second is __________, the third is __________.'],
  ['A', 'They are all things I have been told.'],
  ['B', '⚠ **And the reader will act on all three equally.** ⚠ Three headings.'],
  ['A', 'What makes the first one confirmed?'],
  ['B', '⚠ __________, or ⚠ **two people who have not read each other.**'],
]));
out.push(table(['Role card 1 — the three graded', 'Role card 2 — the grade that moved'], [[
  '⚠ **CONFIRMED: the plater\'s circular of 22 January.** ⚠ **CLAIMED: the Hama suspension — one man, no name, helpful.** ⚠ **NOT KNOWN: the Homs works, with a roofless building against it, seen on 2 July** — **and that goes under *not known*, because a roof is not a denial.**',
  'A has moved something from *claimed* to *confirmed* between two notes. ⚠ B asks two questions: ⚠ **when did it move, and what moved it?** ⚠ **If the answer is *it just seemed right by then*, move it back** — *that is how a yard story becomes a fact in six weeks.*',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three headings with their items. ⚠ Then say what would have to happen for each *claimed* item to be promoted.'));
out.push(PHRASE_CARD(['confirmed · claimed · not known', 'a document I could show somebody', 'two who have not read each other', 'a roof is not a denial', 'it moved on the 25th, because', 'never two grades in one paragraph']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **six** things you believe about your trade. Grade each, and say what would promote it.'));
out.push(table(['The thing', 'Grade', 'The source', 'What would promote it'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.9, 0.9, 1.3, 1.9]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ is _______, because the source is _______. It would become confirmed if _______._'));
out.push(p('**Listener task:** count the items in the room graded *confirmed* whose two sources had read the same paper. ⚠ Then find any item that has been promoted with no reason written.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for two grades in one paragraph, and _denied_ where nobody was accused. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE BOARD POSITION, GRADED. 26 July. N. Mansour. ⚠ Six items. One confirmed, two claimed, three not known.**',
  table(['Grade', 'The item', 'The source, and the date'], [
    ['⚠ **CONFIRMED**', 'The plater has given notice of twelve per cent from 1 March.', '⚠ **his circular of 22 January, in the file; and the invoice of 4 March at the new rate**'],
    ['**CLAIMED**', 'The Hama suspension is on the heavy brown and one other grade, not ours, for about a fortnight from the 18th.', '⚠ **a man in the Hama sales office, 21 July, no name; the 18th from the same man on the 25th**'],
    ['**CLAIMED**', 'Board prices are expected to rise in the autumn.', '⚠ **the trade sheet of 20 July. Two of three contacts had read it in the same sheet, so this is one source and not three.**'],
    ['**NOT KNOWN**', 'Whether a heavy brown shortage will pull our grade forward.', '⚠ **nobody asked yet. This is the item that would cost us and it is the one with no source at all.**'],
    ['**NOT KNOWN**', 'Whether the Homs works will reopen.', '⚠ **the works had no roof on 2 July, which is evidence against and not a denial**'],
    ['**NOT KNOWN**', 'Whether anybody has been quoted a different fortnight.', 'two calls to make'],
  ], [1.3, 2.8, 2.9]),
  '⚠ **One item of six is confirmed, and it is the only one we have spent money on.** ⚠ **The twelve per cent is in a circular and in an invoice at the new rate** — a document and an independent confirmation — **and that is what *confirmed* costs.**',
  '⚠ **The second claimed item is the dangerous one, and it looked like three sources until Thursday.** ⚠ **Two of the three people we telephoned had read it in the same sheet**, so it is one source, ⚠ **and the note says so in the source column rather than leaving the reader to work it out.**',
  '⚠ **And the item that would cost us most is the one with no source at all.** ⚠ *Whether a heavy brown shortage will pull our grade forward.* ⚠ **Nobody has asked, because it is the only question on this page that requires somebody to admit they do not know something** — **and it is first on the list for Monday.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many items are confirmed, and what does *confirmed* cost?'));
out.push(item('2', 'Why is the second claimed item dangerous?'));
out.push(item('3', 'Which item would cost most, and why has nobody asked?'));
out.push(box('Writer\'s box', [
  '**The position, graded — four parts:** **a heading with the counts** → **a table: *grade · the item · the source and the date*** → ⚠ **what *confirmed* cost** → ⚠ **the apparent three sources that are one, and the costly item with no source.**',
  '⚠ **Put the counts in the heading.** ⚠ *Six items. One confirmed, two claimed, three not known.* **A reader who sees that one of six is confirmed reads the whole page differently** — and in a normal month it is one of six.',
  '⚠ **Put the source and the date in the same cell, and say what the source would not give.** ⚠ *A man in the Hama sales office, 21 July, no name.* **The source column is where the honesty lives**, and the grade column is only a summary of it.',
  '⚠ **Collapse the sources that are one source.** ⚠ *Two of three contacts had read it in the same sheet, so this is one source and not three.* **Say it in the note** — a reader will not do the arithmetic.',
  '⚠ **Mark the item that would cost most, even under *not known*.** ⚠ **The costly item is frequently the one with no source at all**, because *it is the only question that requires somebody to admit they do not know something.*',
  '⚠ **And distinguish evidence against from a denial.** ⚠ *The works had no roof on 2 July, which is evidence against and not a denial.* **A denial needs an accuser**, and inventing one puts a quarrel in your own file.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *the position, graded* for something in your trade (**60 words or more**). Use the frame.'));
out.push(p('**______________, GRADED. ______________. ______________. ⚠ ______________ items. ______________ confirmed, ______________ claimed, ______________ not known.**   ⚠ **CONFIRMED** | ______________ | ⚠ **______________; and ______________**   **CLAIMED** | ______________ | ⚠ **______________, ______________, no name**   **CLAIMED** | ______________ | ⚠ **______________. ______________ had read it in ______________, so this is one source and not ______________.**   **NOT KNOWN** | ⚠ **______________** | ⚠ **nobody asked yet. This is the item that would cost us.**   **NOT KNOWN** | ______________ | ⚠ **______________, which is evidence against and not a denial**   ⚠ **______________ item of ______________ is confirmed, and it is the only one we have ______________.** ⚠ ______________ — **and that is what *confirmed* costs.**   ⚠ **And the item that would cost us most is the one with no source at all.** ⚠ Nobody has asked, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **how many of these sources are the same person?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The counts in the heading', ''],
  ['Source and date in the same cell', ''],
  ['Apparent multiple sources collapsed into one', ''],
  ['The costly item marked, even under *not known*', ''],
  ['Evidence against distinguished from a denial', ''],
  ['No paragraph with two grades in it', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *confirmed* items. The class asks what document is behind each, and how old it is.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the graded position of something in your trade now (**140 to 180 words**): the counts in the heading, each item with its source and date, the sources that are really one, and the costly unknown marked.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is anything graded confirmed on two sources that read the same paper?_   ? _which item would cost most, and is it marked?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is only one item of six or more confirmed? Usually all three — ⚠ **and in two of three the thing everybody at that workplace treats as certain is in the claimed column.**'));
out.push(box('Homework', ['Write your final text. Then take six things you believe about your trade, grade each, and for every *claimed* item write what would promote it (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 23.6 =======================
out.push(pb());
out.push(h2('23.6  The short market note'));
out.push(p('**Function:** writing the market note   ·   **Grammar:** one page, three parts, dated   ·   **Pronunciation:** the note read aloud in ninety seconds'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of what somebody at your work would need to know about your trade this month. Say it in one sentence.'));
out.push(p('**b**  Which belongs in a market note? _what has changed · what you think will happen · who says so · what you have not been able to find out_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub say about the one-page limit?   **A** it saves paper   **B** a note that is longer will be read once and never again   **C** it is the house style'));
out.push(p('**b**  Listen again. **1** What goes at the top? **2** What does he say about the writer\'s own opinion?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.11  "One page, dated, and your opinion at the bottom with your name on it"', [
  ['Mr Ayoub', 'If you are going to write one of these every month, it has to be one page.'],
  ['Nour', 'The graded table is most of a page already.'],
  ['Mr Ayoub', '⚠ **Then the table is the note.** ⚠ **A note that runs to two pages will be read once, in the first month, and never again** — and the value of a market note is entirely in its being read twelve times.'],
  ['Nour', 'And what goes at the top?'],
  ['Mr Ayoub', '⚠ **The date and the one line that has changed since the last one.** ⚠ *Since 26 June: the Hama suspension, and the twelve per cent now in an invoice.* **Two clauses, and a reader who has read last month\'s note is up to date in four seconds.**'],
  ['Nour', 'And my own view? I have one.'],
  ['Mr Ayoub', '⚠ **At the bottom, under its own heading, with your name against it.** ⚠ **Never mixed into the graded table** — *the table is what is known and the bottom is what you think, and the reader must be able to see the join.*'],
  ['Nour', 'Does my view belong in it at all?'],
  ['Mr Ayoub', '⚠ **It is the most useful paragraph in the note and it must be the shortest.** ⚠ **Four lines: what you would do, what you would not do, and the one thing that would change your mind.**'],
  ['Nour', 'The one thing that would change my mind.'],
  ['Mr Ayoub', '⚠ **Yes, and it is the line that makes the rest of it worth reading.** ⚠ **Anybody can give an opinion; almost nobody will say in advance what would overturn it** — and when it happens you have a note that tells you to change, in your own handwriting.'],
  ['Nour', 'And if nothing has changed in a month?'],
  ['Mr Ayoub', '⚠ **Then write the note and say so: *nothing has changed since the 26th; the two calls on the heavy brown have not been returned.*** ⚠ **A month with no note in it is read as a month when nothing happened** — and this is a trade where that is never true.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The market note — one page, three parts, dated**',
  table(['Where', 'What goes there'], [
    ['**the top**', '⚠ **the date, and the one line that has changed since the last note**'],
    ['**the middle**', '⚠ **the graded table: confirmed · claimed · not known, each with its source and date**'],
    ['⚠ **the bottom**', '⚠ **what you would do, what you would not do, and the one thing that would change your mind — with your name against it**'],
    ['⚠ **the limit**', '⚠ **one page.** A two-page note is read once, in the first month'],
    ['⚠ **a quiet month**', '⚠ **write it anyway and say nothing has changed**'],
  ], [1.4, 4.6]),
  '⚠ **One page, because the value of a market note is entirely in its being read twelve times.** ⚠ **A note that runs to two pages will be read once, in the first month, and never again.**',
  '⚠ **The top line is what has changed since the last note.** ⚠ *Since 26 June: the Hama suspension, and the twelve per cent now in an invoice.* **A reader who has last month\'s note is up to date in four seconds.**',
  '⚠ **Your own view goes at the bottom, under its own heading, with your name against it, and never mixed into the table.** ⚠ **The table is what is known and the bottom is what you think, and the reader must be able to see the join.**',
  '⚠ **Four lines of opinion: what you would do, what you would not do, and the one thing that would change your mind.** ⚠ **Anybody can give an opinion; almost nobody will say in advance what would overturn it.**',
  '⚠ **Write the note in a quiet month and say nothing has changed.** ⚠ **A month with no note is read as a month when nothing happened** — and that is never true in this trade.',
  '**Practise:** Write the top line and the bottom four lines for your own trade this month. ⚠ The one thing that would change your mind must be checkable.',
  '**Useful phrases:**  since the 26th  ·  confirmed · claimed · not known  ·  what I would do  ·  what I would not do  ·  the one thing that would change my mind  ·  nothing has changed since',
  '**Pronunciation – the note read aloud in ninety seconds.** 🔊 **Track 23.12** Listen to a note read in about eighty seconds: ⚠ **the top line, the grade words as labels, and the four lines at the bottom slower.** **If it cannot be read aloud in ninety seconds it is not one page.** Repeat the top line and the last line.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a two-page note; B gets it onto one. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'If you are writing one every month, it has to be __________.'],
  ['A', 'The __________ is most of a page already.'],
  ['B', '⚠ Then the __________ is the note. ⚠ **A two-page note will be read __________ and never again.**'],
  ['A', 'And what goes at the top?'],
  ['B', '⚠ **The date, and __________ since the last one.**'],
  ['A', 'And my own view?'],
  ['B', '⚠ **At the bottom, with your name against it.** ⚠ **Four lines: __________, __________, and __________.**'],
]));
out.push(table(['Role card 1 — one page, three parts', 'Role card 2 — the line that would change your mind'], [[
  '⚠ **Top: the date and *since 26 June: the Hama suspension, and the twelve per cent now in an invoice.*** ⚠ **Middle: the graded table.** ⚠ **Bottom: what I would do, what I would not do, and the one thing that would change my mind — with a name against it.**',
  'A gives an opinion with no overturning condition. ⚠ B\'s job is to ask for one, and to refuse anything unverifiable: ⚠ **not *if things get worse* but *if Hama quotes a second fortnight, or if the heavy brown price moves more than five per cent.*** ⚠ **An opinion with a checkable overturning condition is worth four opinions without one.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the top line and the four bottom lines. ⚠ Then say whether the overturning condition could actually be observed, and by whom.'));
out.push(PHRASE_CARD(['since the 26th', 'confirmed · claimed · not known', 'what I would do', 'what I would not do', 'what would change my mind', 'nothing has changed since']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Draft your own market note. Write the top line, the grade counts, and the four bottom lines.'));
out.push(table(['', 'What I have put there'], [
  ['The date, and what has changed since the last note', ''],
  ['Confirmed — how many, and what', ''],
  ['Claimed — how many, and what', ''],
  ['Not known — how many, and the costly one', ''],
  ['⚠ **What I would do**', ''],
  ['⚠ **What I would not do**', ''],
  ['⚠ **The one thing that would change my mind**', ''],
], [2.6, 3.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Since _______: _______. I would _______, I would not _______, and the one thing that would change my mind is _______._'));
out.push(p('**Listener task:** count the overturning conditions in the room that could actually be observed. ⚠ Then ask who would notice each one, and whether they know they are supposed to.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for an opinion inside the graded table, and _if things get worse_ as an overturning condition. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the market note, and answer the questions.'));
out.push(box(null, [
  '**BOARD AND CARTON — MARKET NOTE. 26 July. N. Mansour. One page. ⚠ Since 26 June: the Hama suspension, and the twelve per cent now in an invoice as well as a circular.**',
  table(['Grade', 'The item', 'Source, and date'], [
    ['⚠ **CONFIRMED**', 'the plater, twelve per cent from 1 March', '⚠ **circular 22 Jan; invoice 4 Mar at the new rate**'],
    ['**CLAIMED**', 'Hama suspension, two grades, not ours, about a fortnight from the 18th', '⚠ **Hama sales office, 21 and 25 July, no name**'],
    ['**CLAIMED**', 'autumn board rise', '⚠ **trade sheet 20 July. One source, not three** — two contacts had read the same sheet'],
    ['**NOT KNOWN**', '⚠ **whether a heavy brown shortage pulls our grade forward**', '⚠ **no source. Two calls not returned. The costly one.**'],
    ['**NOT KNOWN**', 'Homs works reopening', 'no roof on 2 July — evidence against, not a denial'],
  ], [1.2, 2.6, 2.4]),
  '**WHAT I WOULD DO. N. Mansour.**',
  '⚠ **I would buy nothing forward.** One item of five is confirmed and it is already in our prices.',
  '⚠ **I would not reopen the Tannous price before the autumn**, because the only rise we can evidence is the plater\'s and that was in the price when we held it.',
  '⚠ **The one thing that would change my mind: Hama quoting a second fortnight, or any quotation for our grade more than five per cent above the June list.** ⚠ **Fadi sees every quotation at the gate and has been asked to tell me.**',
  '⚠ **Eighty-one words of opinion against a table of five items**, and the last line is the only one that asks anybody else to do anything. ⚠ **It also names who will notice** — because an overturning condition that nobody is watching for is a sentence and not a control.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What has changed since the last note?'));
out.push(item('2', 'What would change the writer\'s mind, and who would notice?'));
out.push(item('3', 'Why does the overturning condition name a person?'));
out.push(box('Writer\'s box', [
  '**The market note — four parts:** **the top line: date, one page, and what has changed since the last note** → **the graded table with sources and dates** → ⚠ **what you would do and would not do, under your name** → ⚠ **the one thing that would change your mind, with the person who would notice.**',
  '⚠ **Put the change since the last note in the heading, not in the body.** ⚠ *Since 26 June: the Hama suspension, and the twelve per cent now in an invoice as well as a circular.* **A reader with last month\'s note is up to date before the table.**',
  '⚠ **Keep the opinion out of the table and put a name on it.** ⚠ **The table is what is known and the opinion is what you think** — and a reader must be able to see the join without looking for it.',
  '⚠ **Say what you would *not* do, and why.** ⚠ *I would not reopen the Tannous price before the autumn, because the only rise we can evidence was in the price when we held it.* **The refusals are where the reasoning is visible.**',
  '⚠ **Make the overturning condition observable and give it a number.** ⚠ *Any quotation for our grade more than five per cent above the June list.* **Not *if things get worse*** — which nobody can see happening.',
  '⚠ **And name who will notice it.** ⚠ *Fadi sees every quotation at the gate and has been asked to tell me.* **An overturning condition nobody is watching for is a sentence and not a control.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the market note for your own trade (**60 words or more**). Use the frame.'));
out.push(p('**______________ — MARKET NOTE. ______________. ______________. One page. ⚠ Since ______________: ______________.**   ⚠ **CONFIRMED** | ______________ | ⚠ **______________**   **CLAIMED** | ______________ | ⚠ **______________, no name**   **CLAIMED** | ______________ | ⚠ **______________. One source, not ______________.**   **NOT KNOWN** | ⚠ **______________** | ⚠ **no source. ______________. The costly one.**   **WHAT I WOULD DO. ______________.**   ⚠ **I would ______________.** ______________.   ⚠ **I would not ______________**, because ______________.   ⚠ **The one thing that would change my mind: ______________, or ______________ more than ______________.** ⚠ **______________ sees ______________ and has been asked to tell me.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be somebody who read last month\'s note and has four seconds** — then ask one question: **what has changed?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The change since the last note, in the heading', ''],
  ['The graded table with sources and dates', ''],
  ['The opinion outside the table, with a name', ''],
  ['What you would *not* do, with a reason', ''],
  ['An observable overturning condition with a figure', ''],
  ['The person who would notice it', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only *the one thing that would change my mind*. ⚠ The class says who would see it happen, and whether that person has been told.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full market note for your trade (**140 to 180 words**): the dated heading with what has changed, the graded table with sources, and the four lines of opinion with the observable overturning condition and the person who would notice.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _can the overturning condition be observed?_   ? _has the person who would notice it been told?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many has the person who would notice been told? Usually one of three — ⚠ **and in the other two the writer is the only person watching for a thing they will not be present to see.**'));
out.push(box('Homework', ['Write your final text. Then tell the person named in your overturning condition what to watch for, and write down the date you told them (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 23.7 =======================
out.push(pb());
out.push(h2('23.7  Review & Mediate: one story, four kinds of sentence'));
out.push(p('**Function:** explaining a market note to the people who act on it   ·   **Review:** the word that decided you · the reporting verbs · the impersonal passive · three sentences · the three grades · the note'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 23 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What three questions do you ask of any report, and which is usually unanswered?',
  '**2** What does *claimed* tell a reader, and what two things does *admitted* assert?',
  '**3** What are the three reasons for writing *it is understood that*, and which is honest?',
  '**4** What are the three sentences, and why does the third go last?',
  '**5** What does *confirmed* require?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Lina find about the third part of the note?   **A** it is too long   **B** it produces work that is never written back into the note   **C** nobody reads it'));
out.push(p('**b**  Listen again. **1** How many of the unknowns from June were answered? **2** Where did the answers go?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.13  "The answers are in people and not in the file"', [
  ['Lina', 'May I ask about the June note? ⚠ **It had five things under *not known*, and four of them are known now.**'],
  ['Nour', 'Good.'],
  ['Lina', '⚠ **And none of the four is written anywhere.** I only know them because I asked you and you remembered three, and Fadi remembered the fourth.'],
  ['Nour', 'They went into the decisions. We acted on them.'],
  ['Lina', '⚠ **You acted on them and then the knowledge went back into your head.** ⚠ **The June note still says *not known* about four things that were settled in July** — and anybody reading the file would make the same four telephone calls again.'],
  ['Nour', 'Nobody reads the June note now. They read the July one.'],
  ['Lina', '⚠ **Then the July one should carry the four answers, and it does not either**, because when you wrote it you knew them and they did not feel like news.'],
  ['Nour', 'That is exactly what happened.'],
  ['Lina', '⚠ **And that is the whole fault.** ⚠ **The third part of the note is the only part that makes anybody do anything — it is a list of telephone calls — and it is the only part whose results are never written back.** ⚠ **The confirmed items get written down because they were surprises; the answered unknowns do not, because by then they are obvious.**'],
  ['Nour', 'So what is the repair?'],
  ['Lina', '⚠ **One line in each note: *answered since the last note*, with its date and who said it.*** ⚠ **Four lines in July, and the four telephone calls are never made twice.**'],
  ['Nour', 'And where does it go?'],
  ['Lina', '⚠ **Directly under the top line, before the table** — because a reader who has four seconds should see the new facts and not the old grades. ⚠ **And in a year it is the only part of the file anybody will read at all**, because it is the only part that says what we found out rather than what we were told.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – the third part produces the work and keeps none of it**',
  table(['The part of the note', 'What it does', 'Is the result written back?'], [
    ['**confirmed**', 'records a document', '⚠ **yes — it was a surprise**'],
    ['**claimed**', 'records what somebody said', 'yes'],
    ['⚠ **not known**', '⚠ **produces the telephone calls. It is the only part that makes anybody do anything.**', '⚠ **no — by then the answer is obvious**'],
    ['⚠ **the repair**', '⚠ **a line under the top line: *answered since the last note*, with its date and who said it**', '—'],
  ], [1.6, 3.1, 1.8]),
  '⚠ **The third part of the note is the only part that makes anybody do anything** — *it is a list of telephone calls* — ⚠ **and it is the only part whose results are never written back.**',
  '⚠ **The confirmed items get written down because they were surprises; the answered unknowns do not, because by then they are obvious.** ⚠ **Obviousness is what stops a fact being recorded**, and nothing else.',
  '⚠ **So the knowledge goes into the decision and then back into one person\'s head.** ⚠ *The June note still says *not known* about four things that were settled in July* — **and anybody reading the file would make the same four calls again.**',
  '⚠ **The repair is one line: *answered since the last note*, with its date and who said it.** ⚠ **Four lines in July, and the four telephone calls are never made twice.**',
  '⚠ **And it goes under the top line, before the table** — ⚠ **because a reader with four seconds should see the new facts and not the old grades.** **In a year it is the only part anybody will read**, because it is the only part that says *what we found out* rather than *what we were told.*',
  '**Practise:** Take any note or minutes at your work. ⚠ Find an action that was completed and see whether the result is written anywhere.',
  '**Useful phrases:**  answered since the last note  ·  a list of telephone calls  ·  by then it was obvious  ·  it went back into your head  ·  the same four calls again  ·  what we found out, not what we were told',
  '**Pronunciation – the line that records what was found out.** 🔊 **Track 23.14** Listen: _answered since the last note: the fortnight runs from the 18th — Hama sales office, 25 July._ ⚠ **Flat, and the source and date at the same volume as the fact.** **Drop the voice on the source and the line becomes a fact with no provenance**, which is what it was invented to prevent. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A describes a note or minutes; B looks for the answers that were never written back.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'The June note had five *not known* items and four are now known. ⚠ **None of the four is written anywhere**; three are in Nour\'s head and one in Fadi\'s. ⚠ **The repair: *answered since the last note*, with the date and who said it, under the top line.**',
  'Take minutes or a note of A\'s. ⚠ B asks two questions: ⚠ **which actions were completed**, and then ⚠ **where is the result written?** ⚠ **Expect the answer to be *in somebody\'s head*** — and expect the person to be surprised that it is a problem, **because by now the answer is obvious to them.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the unknowns that were answered and where each answer now lives. ⚠ Then write the one line that would have kept them.'));
out.push(PHRASE_CARD(['answered since the last note', 'a list of telephone calls', 'by then it was obvious', 'back into your head', 'the same four calls again', 'what we found out']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher pairs you with somebody whose work you do not know. Find an answered question of theirs that is written nowhere.'));
out.push(table(['The question that was open', 'Was it answered?', 'Where is the answer now', 'The line that would keep it'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.8, 1, 1.4, 1.8]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what their workplace found out and did not keep. This is the **eleventh** unit of this book, and the thing nobody writes down is this: **the part of any note that lists what is not known is the only part that makes anybody do anything, because it is a list of telephone calls — and it is the only part whose results are never recorded, since a fact that has just been established feels obvious to the person who established it and therefore does not feel like news, so the file keeps every surprise it was ever told and loses every answer it ever went out and got.**'));
out.push(p('_Their note said _______ was not known. It was answered by _______, and the answer is now in _______._'));
out.push(p('**Listener task:** add to the Book 2 office-word list: _a source · an attribution · a working assumption · to verify a report · what is not known · a market note._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 2)', 10));
out.push(p('⚠ **This unit practises Part 2: matching.** Five people need an answer. Read the five lines **A–E** from a note-writing rule sheet and choose the one that decides each question.'));
out.push(box(null, [
  '**A**  _Grade: confirmed, claimed or not known. Confirmed requires a document, or two people who have not read each other. No paragraph carries two grades._',
  '**B**  _Attribution. The source and the date go in the same cell, together with anything the source would not say. The phrase "it is understood" is not used in an internal note._',
  '**C**  _Reporting verb. "Said" unless there is a stated reason for another. "Admitted" only where the fact is against the speaker\'s interest and was extracted._',
  '**D**  _Answered since the last note. Each question closed since the previous note, with the date and the person who answered it, placed above the table._',
  '**E**  _Opinion. Below the table, under the writer\'s name, with what would be done, what would not, and one observable condition that would change the view._',
], 'FFFFFF', C.navy));
[
  '**1**  Two contacts both read the same trade sheet. Which line decides how to grade it?',
  '**2**  A supplier volunteered bad news about his own company. Which line?',
  '**3**  A question from last month has now been settled by a telephone call. Which line?',
  '**4**  The man who gave the information would not give his name. Which line?',
  '**5**  You think no board should be bought forward. Which line?',
].forEach(t => out.push(p(t + '   **A** · **B** · **C** · **D** · **E**', { indent: 200, after: 50 })));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 1 — an internal note, 35 to 45 words.** Here: telling a colleague the one thing to watch for, so that an overturning condition has somebody behind it.',
  'The shape: ⚠ **what to watch for, with a figure** · **where they will see it** · ⚠ **what to do when they see it, with a name and a date.**',
  '⚠ **In forty words the figure is what makes it watchable.** ⚠ *Any quotation for our grade more than five per cent above the June list* — **not *anything unusual*, which nobody has ever noticed in the history of trade.**',
  '⚠ **Say where they will see it.** *At the gate, on the quotations that come in with the drivers.* **A thing to watch for with no place attached is watched for nowhere.**',
  '⚠ **And give them the next step, not the reasoning.** ⚠ *Bring it to me the same day.* **Forty words cannot carry why it matters**, and the person at the gate does not need to know.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** Write to the colleague named in your overturning condition (**35 to 45 words**). Give ⚠ **what to watch for, with a figure**, **where they will see it**, and ⚠ **what to do, with a name and a date.**'));
out.push(p('______________, ⚠ **one thing to watch for.** If ______________ is more than ______________ above ______________, ⚠ **or if ______________**, ______________. You will see it ______________. ⚠ **Bring it to ______________ the same day**, and ______________ from ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['⚠ What to watch for, with a figure', ''],
  ['Where they will see it', ''],
  ['What to do, with a name', ''],
  ['35 to 45 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full market note for your trade (**140 to 180 words**): the dated heading, ⚠ **the *answered since the last note* lines with their dates and sources**, the graded table, and the opinion with its observable overturning condition and the person watching for it.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then go through the last note or minutes at your work, find every question that has since been answered, and write the answers back with their dates and sources (60+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 23 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  _The mill has suspended deliveries._ This means ___.   a) the mill has closed   b) deliveries have stopped for now   c) the mill will close',
  '2  You believe your source and have no reservation. Write:   a) he said   b) he claimed   c) he admitted',
  '3  He volunteered bad news about his own company. Write:   a) he admitted   b) he said, unprompted   c) he confirmed',
  '4  _It is understood that_ in an internal file note is ___.   a) acceptable   b) never acceptable   c) acceptable with a date',
  '5  Two contacts both read the same trade sheet. That is ___.   a) two sources   b) confirmed   c) one source',
  '6  Evidence against a rumour goes under ___.   a) denied   b) not known   c) claimed',
  '7  The third sentence of a note is for ___.   a) telling the reader what still has to be found out   b) politeness   c) protecting the writer',
  '8  An overturning condition must be ___.   a) strongly worded   b) observable, with a figure   c) kept to yourself',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 23.15** Listen to the exchange. Complete the note.   Unknowns in the June note: ______   How many are known now: ______   Where the answers are: ______   Why they were never written: ______   The repair: ______'));
out.push(dlg('Track 23.15  Audio script (read after the check)', [
  ['Lina', 'The June note had five things under not known, and four of them are known now. And none of the four is written anywhere.'],
  ['Nour', 'They went into the decisions. We acted on them.'],
  ['Lina', 'You acted on them and the knowledge went back into your head. Three of the four are in yours and one is in Fadi\'s. The June note still says not known about four things that were settled in July.'],
  ['Nour', 'Nobody reads the June note now.'],
  ['Lina', 'Then the July one should carry the four answers, and it does not, because when you wrote it you knew them and they did not feel like news.'],
  ['Nour', 'That is exactly what happened.'],
  ['Lina', 'The third part of the note is the only part that makes anybody do anything, and it is the only part whose results are never written back. The repair is one line: answered since the last note, with its date and who said it, under the top line.'],
]));
out.push(p('**C  Writing.** Write the graded part of a market note for your trade (**60 words or more**): one confirmed item with its document, one claimed item with its source and date, and one *not known* item marked as the costly one.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 23)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ read a report for its verb, and ask what has happened, who says so and to what',
  '☐ choose between *said*, *claimed*, *admitted* and *denied*, and give the reason',
  '☐ see what *it is understood that* hides, and name the source instead',
  '☐ write the three sentences, with what is not known last and longest',
  '☐ grade information as confirmed, claimed or not known, and never mix two',
  '☐ write a one-page market note with my opinion separate and named',
  '☐ write back the answers to what was not known',
  '☐ write a word-by-word reading, a graded position and a market note',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Unit 23 · Student\'s Book');
