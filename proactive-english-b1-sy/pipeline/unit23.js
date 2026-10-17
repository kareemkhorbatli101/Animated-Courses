// Proactive English B1 · Syria Edition · Book 2 · Unit 23 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';
const slip = '**Peer review, second band.** Name the criterion before you say anything. Write your partner three sentences, each one opening with the criterion it marks against, and then what you found.';

out.push(h1('Unit 23  The Wider News'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**23.1**  say which word made you believe it',
  '**23.2**  report with the verb that carries your judgement',
  '**23.3**  report impersonally — and see what that hides',
  '**23.4**  summarise a news item in three sentences',
  '**23.5**  separate what is confirmed from what is not',
  '**23.6**  write a short news report',
  '**23.7**  Review & Mediate: explain a news story, and take the board down',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**Units 19 to 22 were about your own work and your own words. This unit is about everybody else\'s** — how a thing that happened becomes a thing that is reported, and what each step does to it. The grammar is the grammar of attribution, and it is the most useful grammar in the book, because almost everything any of us knows about the world arrived in a reported sentence written by somebody we have never met.',
  '**23.2 is the cycle to prepare for**: the reporting verbs. _He said · he announced · he confirmed · he claimed · he admitted · he denied · he refused to say._ One event, seven sentences, and the reader draws seven different conclusions. The verb is where the writer\'s opinion lives, and most readers never notice it is there.',
  '**23.3 is 19.1 again, in print.** _It is reported that · it is understood that · the units are said to have been replaced._ Put a person in front of each of those sentences. Where you cannot, you have found a rumour wearing a tie.',
  '**23.7 takes the prediction board down for the last time.** It went up in **14.1**; it came down in **18.7** with four of its test dates fallen; and in 23.7 the two June dates are read — including Ms Huda\'s own. One of them has already fallen, six months early, and the reason is in Unit 22. **Bring your copy.**',
  '**And bring one piece of news you have read or heard this month and believed, and one you did not believe** — and, for each, **the one word in it that decided you.** 23.1 is built on those two words and not on the two stories.',
], C.lyellow, C.orange));

// ======================= 23.1 =======================
out.push(pb());
out.push(h2('23.1  The one word that decided you'));
out.push(p('**Function:** saying why you believed a report   ·   **Grammar:** _according to_ · _apparently_ · _it seems_ · _I am told_   ·   **Pronunciation:** the attributing phrase is unstressed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out your two items — one you believed, one you did not — and for each, **the one word that decided you**. The word only, not the argument. Your teacher writes the twenty-two words on the board in two columns.'));
out.push(board('Seventeen. That is the word. Nobody invents seventeen.', 'according to · apparently · the word that decided me'));
out.push(p('**b**  Which **two** sentences tell you who says so? **1** _Deliveries have been suspended._  **2** _According to the depot\'s notice of 11 December, deliveries are suspended until the 22nd._  **3** _Deliveries are apparently suspended._  **4** _The storeman told me on Tuesday that deliveries are suspended._  **5** _It is understood that deliveries have been suspended._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which word made Lubna believe the first item, and which word made her disbelieve the second?   **A** _seventeen_; _many_   **B** _apparently_; _according to_   **C** _nineteen_; _apparently_'));
out.push(p('**b**  Listen again. **1** What does she say she can do with the first item that she cannot do with the second?   **2** What does Ms Huda say an attribution costs the writer?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.1  Seventeen, and many', [
  ['Lubna', 'I brought two items and I did the thing you asked, which was harder than writing the whole page. One word each.'],
  ['Ms Huda', 'The one you believed first.'],
  ['Lubna', 'A piece about a printing works in Aleppo. The sentence was: according to the works foreman, Nabil Zahra, seventeen of the nineteen presses have been out of use since August. And the word is **seventeen**.'],
  ['Omar', 'Why that word and not the name?'],
  ['Lubna', 'The name matters, but the name is what a careful writer puts in. Seventeen is what somebody **counted**. Nobody invents seventeen. If you are making it up you write most, or nearly all, or the great majority — and if you are repeating what you were told and did not check, you write eighteen, because eighteen sounds like nineteen minus one.'],
  ['Jad', 'And the second item?'],
  ['Lubna', 'A line in a trade bulletin: many depots are reportedly receiving double allocations this quarter. And the word is **many**.'],
  ['Nour', 'What is wrong with many?'],
  ['Lubna', 'Nothing is wrong with it. It is simply a word that costs the writer nothing. Two is many if you want it to be. And then the second word, which is worse: **reportedly**. Reported by whom? There is nobody in the sentence at all, and I cannot go and ask anybody anything.'],
  ['Omar', 'So what can you do with the first one?'],
  ['Lubna', 'I can go to Aleppo and ask Nabil Zahra whether it is seventeen. I shall not, but I could, and so could anybody — and a man who has let his name and a figure be printed knows that. That is what I believe. I do not believe the presses; I believe that somebody has put something at risk.'],
  ['Ms Huda', 'Which is the sentence of the cycle, and it is about **cost**. An attribution is expensive for whoever writes it. _According to the foreman, Nabil Zahra, seventeen of nineteen_ — three things can now go wrong for the writer: the foreman can deny it, the figure can be counted again, and the name can be telephoned. _Many depots are reportedly_ puts nothing at risk at all, and a sentence that puts nothing at risk is worth exactly what it cost.'],
  ['Lubna', 'And the thing I did not expect is that I had been doing the arithmetic for years without knowing what I was doing it on. I have always believed some things and not others. I had never once looked at the word.'],
  ['Ms Huda', 'Nobody has. That is why we are starting here and not with the verbs.'],
]));
out.push(sp());
out.push(box('Language box – saying who says so', [
  '**The attributing phrases, and what each one costs:**',
  table(['you write', 'who says so', 'what it costs the writer'], [
    ['_**According to** the foreman, Nabil Zahra, …_', 'a named person', 'everything — he can be telephoned'],
    ['_The storeman **told me** on Tuesday that…_', 'a named person and a day', 'the same, plus a date'],
    ['_**I am told** that…_', 'somebody, unnamed', 'little — but it admits that it is second-hand'],
    ['_**Apparently** / **It seems** …_', 'nobody', 'nothing; it is honest about being hearsay'],
    ['_**Reportedly** / **It is reported that** …_', 'nobody at all', 'nothing, and it sounds official _(23.3)_'],
  ], [2.0, 1.4, 1.9]),
  '⚠ **The test is not whether you believe it. The test is: could you go and ask somebody?** _According to the foreman, Nabil Zahra_ can be checked by anybody with a telephone. _Reportedly_ cannot be checked by anybody at all, because there is nobody in the sentence to ask.',
  '**An attribution is expensive, and that is why it is evidence.** Three things can go wrong for a writer who names a source: the source can deny it, the figure can be counted again, and the name can be telephoned. A writer who takes that risk is telling you something by taking it.',
  '⚠ **Watch the quantity words that cost nothing:** _many · several · a number of · nearly all · the great majority_. Two is _many_ if you want it to be. An odd figure — _seventeen of nineteen_, _nineteen of twenty-two_, _eleven of ninety_ — has been counted by somebody, and a round one usually has not.',
  '⚠ _**According to** me_ is wrong: _according to_ is for other people. Say _in my view_ or _I think_. And ⚠ _according to_ takes a noun, never a clause — ~~according to that the foreman said~~ → _according to the foreman_.',
  '**Useful phrases:** nobody invents seventeen · it is a word that costs the writer nothing · reported by whom? · there is nobody in the sentence at all · I do not believe the presses; I believe that somebody has put something at risk.',
  '**Practise:** Attribute each, two ways — once with a named source and once with _apparently_.  1 the road will close  2 the post has been advertised  3 the allocation has doubled  4 the meeting was cancelled  5 the lot was re-tested',
  '**Pronunciation.** 🔊 **Track 23.2** The attributing phrase runs **fast and unstressed** and the stress lands on the fact: _accordingtotheFOREman, **SEVENteen** of nineteen._ A stressed _according to_ sounds like a disclaimer; an unstressed one sounds like a citation. Listen to eight and write the figure and the source.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a bare claim from the card. B does two things: asks _who says so, and how would they know?_ and then says what they would have to do to check it. A then says the same claim with an attribution. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'Who says so, and how would they know?'],
  ['B', 'To check that I should have to __________.'],
  ['A', 'According to __________, __________, __________.'],
  ['B', 'Now I could telephone __________.'],
]));
out.push(table(['Card A – the bare claim', 'Card B – the bare claim'], [
  ['_The road will be closed again in January._', '_The allocation has been doubled._'],
  ['_Nobody has been appointed yet._', '_The committee has already decided._'],
  ['_The figures for November were the worst this year._', '_Two of the machines are out of use._'],
  ['_The letter was sent weeks ago._', '_Most of the staff are against it._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight attributed versions and mark the ones a stranger could actually check. Then the finding: in the bare versions, five or six of the eight had a **quantity word that costs nothing** in them — _most_, _weeks_, _nobody_, _two of the machines_ — and the attributed versions almost always replaced it with a figure, because naming a source makes a writer count.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Say your two items again, each in one sentence, with the deciding word in it. Then say what you would have to do to check each one, and how long it would take.'));
out.push(p('**b**  Swap. Then each of you find in your partner\'s disbelieved item the **one word** you would change to make it believable — and say whether the writer could have written that word.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lubna brought two items and did the hard part, which was one word each. The first she believed: a piece about a printing works in Aleppo, and the sentence was "according to the works foreman, Nabil Zahra, seventeen of the nineteen presses have been out of use since August". The word is seventeen. Omar asked why that word and not the name, and she said the name is what a careful writer puts in, but seventeen is what somebody counted — nobody invents seventeen. If you are making it up you write most, or nearly all, or the great majority; and if you are repeating what you were told without checking you write eighteen, because eighteen sounds like nineteen minus one. The second item was a line in a trade bulletin: many depots are reportedly receiving double allocations this quarter. The word is many. Nour asked what is wrong with many, and Lubna said nothing is wrong with it — it is simply a word that costs the writer nothing, because two is many if you want it to be. And then the second word, which is worse: reportedly. Reported by whom? There is nobody in the sentence, and she cannot go and ask anybody anything. Omar asked what she can do with the first one, and she said she can go to Aleppo and ask Nabil Zahra whether it is seventeen. She will not, but she could, and so could anybody — and a man who has let his name and a figure be printed knows that. So what she believes is not the presses: she believes that somebody has put something at risk. Ms Huda said that is the sentence of the cycle and it is about cost. An attribution is expensive for whoever writes it: the foreman can deny it, the figure can be counted again, and the name can be telephoned. "Many depots are reportedly" puts nothing at risk, and a sentence that puts nothing at risk is worth exactly what it cost. And Lubna said she has always believed some things and not others, and had never once looked at the word._'));
out.push(p('**Listener task:** write one word from this room that decided somebody, and one that cost its writer nothing.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Lubna\'s page. Answer the questions.'));
out.push(model([
  '**TWO ITEMS AND THE WORD IN EACH** · L. Sweidan · 19 December',
  '**The one I believed.** _"According to the works foreman, Nabil Zahra, seventeen of the nineteen presses have been out of use since August."_ Aleppo trade bulletin, 8 December.',
  '**The word.** Seventeen. Not the name, although the name is what a careful writer puts in. Seventeen is a figure somebody has counted. A writer who is inventing writes _most_ or _nearly all_; a writer who is repeating what he was told writes _eighteen_, because eighteen sounds like nineteen minus one.',
  '**And what I actually believe.** Not the presses. I believe that a man has let his name and a figure be printed in the same sentence, which means three things can now go wrong for him and for whoever wrote it. That is what I am believing: a cost that somebody has accepted.',
  '**The one I did not believe.** _"Many depots are reportedly receiving double allocations this quarter."_ Same bulletin, same page.',
  '**The two words.** _Many_ — two is many if the writer wants it to be, and the word costs nothing. And _reportedly_ — reported by whom? There is nobody in the sentence, so there is nobody to ask.',
  '**What would have made me believe it.** One of two things, and both are cheap. A figure: _nine of the fourteen depots in this governorate_. Or a source: _according to the bulletin\'s own correspondent, who has seen two of the allocation sheets_. The writer wrote neither, and had the whole page to do it on.',
  '**And the uncomfortable part.** I have been reading this bulletin for six years and I have never once looked at the words. I have believed and disbelieved by feel, and my feel has been doing this arithmetic without telling me.',
]));
out.push(item('1', 'Why does she say the word is _seventeen_ and not the foreman\'s name?'));
out.push(item('2', 'What does she say she actually believes, and what would have made her believe the second item?'));
out.push(item('3', 'What does she say about the last six years?'));
out.push(writers([
  'A page about two items: **the one you believed, quoted exactly, with where it came from** → **the word** → **what you actually believe, which is not the fact** → **the one you did not believe, quoted** → **the word or words** → **what would have made you believe it, and how cheap it was** → **and the uncomfortable part about your own reading**.',
  '**Quote the sentence, do not summarise it.** The whole page depends on one word, and a summary loses the word. Quotation marks, the source and the date, every time.',
  'Say what you believe rather than what is true. _I believe that a man has let his name and a figure be printed in the same sentence._ That is a claim about a cost somebody accepted, and it is the only kind of claim a reader at a distance is ever entitled to make.',
  'When you say what would have made you believe it, **price it**. _A figure, or a named correspondent. The writer wrote neither, and had the whole page to do it on._ An improvement that was cheap and was not made tells you more than the omission itself.',
  '⚠ And end on your own reading, not on the writer\'s failure. _I have believed and disbelieved by feel for six years._ A page about two items that blames two writers is a complaint; the same page that turns at the end on the reader is worth keeping.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about your two items (60 words or more).'));
out.push(p('**TWO ITEMS AND THE WORD IN EACH** · ______________ · ______________   **The one I believed.** "______________" ______________, ______________.   **The word.** ______________. ______________.   **And what I actually believe.** Not ______________. I believe that ______________.   **The one I did not believe.** "______________" ______________.   **The word.** ______________ — ______________.   **What would have made me believe it.** ______________, or ______________. The writer wrote ______________.   **And the uncomfortable part.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both sentences quoted exactly, with source and date',
  'One word named for each, and why that word',
  'What you actually believe, which is not the fact itself',
  'What would have made you believe it, and how cheap it was',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the word that decided them.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (140 words or more) about two items from this month: both quoted with their sources, the deciding word in each, what you actually believe, what would have made the second believable, and the uncomfortable part about your own reading.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **both sentences quoted exactly**, **the one word named**, **the cheap improvement priced**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Look at the two columns on the board.** The believed column is almost all **figures and names**; the disbelieved column is almost all **quantity words** — _many, most, several, a number of_ — and two or three impersonal verbs. Nobody in this room was taught that, and everybody in this room has been using it. The whole of the rest of the unit is the same arithmetic done on purpose.'));
out.push(hw('Write the page (60+ words). Then take one bare claim you have repeated to somebody this month and find out who said it first. Write down how many people it went through.'));

// ======================= 23.2 =======================
out.push(pb());
out.push(h2('23.2  Said, claimed, admitted, denied'));
out.push(p('**Function:** reporting with the verb that carries your judgement   ·   **Grammar:** reporting verbs + _that_-clause · _admit_ / _deny_ + _-ing_   ·   **Pronunciation:** the stressed reporting verb'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher writes one sentence on the board — _the editors ______ that the answers will carry names from January_ — and the class fills the gap seven times, with a different verb each time. Then the only question: **which of the seven makes the editors look worst, and why?**'));
out.push(board('The editors claimed that the answers will carry names.', '_said · announced · confirmed · claimed · admitted · denied · refused to say_'));
out.push(p('**b**  Which verb? **1** They were asked and would not answer. **2** They said it first, officially. **3** The writer does not believe them. **4** Somebody had already said it and they agreed it was true. **5** The writer treats it as something against their own interest. **6** They say it is not so.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which verb did one website use about the editors, and what does Jad say it told him?   **A** _claim_; that the writer would not vouch for it   **B** _announced_; that the editors had been forced into it   **C** _confirmed_; that the writer did not believe them'));
out.push(p('**b**  Listen again. **1** What does Jad say he could not work out at first?   **2** What does Ms Huda say the reporting verb is, in one phrase?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.3  One change, seven verbs', [
  ['Jad', 'The names thing has been written about in four places, and three of them say the same thing and the fourth does not, and it took me two days to work out that the difference is **one word**.'],
  ['Ms Huda', 'Read the four.'],
  ['Jad', 'Two say: the editors have announced that answers will carry names from January. One says: the editors have confirmed that answers will carry names. And the fourth says: the editors claim that answers will carry names from January.'],
  ['Nour', 'Is the fourth one saying it is not true?'],
  ['Jad', 'That is what I could not work out. It is not saying it is untrue. It is saying: **we are not vouching for this.** And then the reader does the rest, because a reader who meets _claim_ assumes somebody doubts it, and nobody has had to write down a doubt.'],
  ['Omar', 'And the difference between announced and confirmed?'],
  ['Jad', '_Announced_ means they said it first and officially. _Confirmed_ means somebody else had already said it and the editors have now agreed that it is so — which tells you, without saying it, that this leaked before it was announced. One verb and I know the order of events.'],
  ['Mazen', 'Try mine. The distributor has written to me twice. If a bulletin wrote that the distributor **admitted** replacing four units, what would a reader think?'],
  ['Jad', 'That the replacement was something against the distributor\'s interest, and that somebody had to get it out of them.'],
  ['Mazen', 'Neither of which is true. They offered, in writing, nine days after my letter.'],
  ['Ms Huda', 'Now the rule, and it is the shortest in the book. **The reporting verb is where the writer\'s opinion lives.** Everything after the verb is the other person\'s sentence; the verb itself is the writer\'s. _Said_ adds nothing. _Announced_ adds officialness. _Confirmed_ adds a previous report. _Claimed_ adds the writer\'s distance. _Admitted_ adds guilt. _Denied_ adds a charge. And _refused to say_ is the only one of the seven that reports **a fact and not a claim** — the person was asked, and did not answer, and that happened.'],
  ['Jad', 'And a reader notices none of it.'],
  ['Ms Huda', 'Almost no reader has ever noticed it. Which is why the honest practice is the one you have been doing since 19.1 — say _said_ unless you can say exactly why you have chosen something else, and when you choose something else, be able to say it out loud.'],
]));
out.push(sp());
out.push(box('Language box – the verb is the opinion', [
  '**Seven verbs, one event, seven conclusions:**',
  table(['verb', 'what the writer adds', 'grammar'], [
    ['_said that…_', 'nothing. The baseline.', '⚠ _said **that**_, never ~~said me~~'],
    ['_announced that…_', 'it is official and it is new', 'needs a that-clause or an object'],
    ['_confirmed that…_', 'somebody had already said it', 'implies an earlier report'],
    ['_claimed that…_', 'the writer will not vouch for it', '⚠ not the same as _said it falsely_'],
    ['_admitted …_', 'it is against the speaker\'s interest', '_admitted **that** he had_ · _admitted **taking**_'],
    ['_denied …_', 'there is a charge to answer', '_denied **that** he had_ · _denied **taking**_'],
    ['_refused to say_', 'nothing — this is a **fact**', '_refused **to say**_ (+ infinitive)'],
  ], [1.4, 2.0, 1.9]),
  '⚠ **The forms that go wrong.** _admit_ and _deny_ take **_-ing_** or **_that_**, never an infinitive: _he admitted **writing** it_ · _he admitted **that** he had written it_ — never ~~he admitted to write it~~, never ~~he denied to take them~~. _refuse_ takes the **infinitive**: _he refused **to say**_. And ⚠ _announce_ never takes a person as its object: ~~he announced me that~~ → _he **told me** that_ / _he announced that_.',
  '**And the one that is not a claim at all.** _He refused to say how many._ Nothing after it is anybody\'s assertion: the person was asked, and did not answer, and that is an event with a date. It is the strongest sentence in this list and the one students never use.',
  '⚠ **_Claimed_ is not _lied_.** It means _the writer is not vouching for this_ — and the reader supplies the doubt, so no doubt has to be written down and nobody can be held to it. That is exactly why it is used, and exactly why it is worth noticing.',
  '**The order of events is often in the verb.** _Announced_ means they said it first. _Confirmed_ means somebody else said it first and they have now agreed — so a report that says _confirmed_ has told you that the thing leaked, without one word about leaking.',
  '**Useful phrases:** it is not saying it is untrue; it is saying we are not vouching for this · one verb and I know the order of events · somebody had to get it out of them · say _said_ unless you can say why you have chosen something else.',
  '**Practise:** Report each with two different verbs and say what changes.  1 the road will reopen on the 22nd  2 the figures were wrong  3 nobody was told  4 the post will be advertised  5 the second machine is out of use',
  '**Pronunciation.** 🔊 **Track 23.4** When the verb is doing the work it takes the **stress**: _the editors **CLAIM** that the answers will carry names._ Said flat, the verb disappears and the reader hears a fact. Listen to six and write the verb only, and say whether it was stressed.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports a card item with _said_. B reports the same item twice more, with two different verbs, and says after each one what a reader would now think. A then says which of the three they would use about themselves. Swap cards.'));
out.push(dlg(null, [
  ['A', 'The __________ said that __________.'],
  ['B', 'The __________ claimed that __________. — Now the reader thinks __________.'],
  ['B', 'The __________ admitted that __________. — Now the reader thinks __________.'],
  ['A', 'About myself I would write __________, because __________.'],
]));
out.push(table(['Card A – the item', 'Card B – the item'], [
  ['_The notice went up three weeks late._', '_Eleven of the fifteen came from one batch._'],
  ['_The meeting decided nothing._', '_The sheet has been on the wall since September._'],
  ['_Four samples were released late._', '_The first bus leaves at 06.20._'],
  ['_Nobody has read the guidance notes._', '_The trial has been extended to all night staff._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the sixteen reported versions and mark the verb in each. Then the finding that matters: ask each speaker which verb they chose **about themselves** in the last line. It is _said_ or _announced_ almost every time, and almost nobody chooses _admitted_ about their own act — which is the whole cycle, because the verb that would be used about you by somebody else is the one you have to be able to answer (22.4).'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Report one thing you did or decided this year, three times: with _said_, with _claimed_, and with _admitted_. Then say which of the three a person who disliked you would use, and whether they would be wrong.'));
out.push(p('**b**  Swap. Then each of you report your partner\'s item with _refused to say_ attached to something — _he refused to say how many_ — and your partner says whether that sentence is true.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The names change has been written about in four places, three of them saying the same thing and the fourth not, and it took Jad two days to see that the difference is one word. Two say the editors have announced that answers will carry names from January; one says they have confirmed it; and the fourth says the editors claim that answers will carry names. Nour asked whether the fourth is saying it is not true, and Jad said that is what he could not work out: it is not saying it is untrue, it is saying "we are not vouching for this" — and then the reader does the rest, because a reader who meets "claim" assumes somebody doubts it, and nobody has had to write a doubt down. Omar asked about the difference between announced and confirmed, and Jad said announced means they said it first and officially, while confirmed means somebody else had already said it and the editors have now agreed that it is so — which tells you, without saying it, that the thing leaked before it was announced. One verb, and he knows the order of events. Then Mazen asked what a reader would think if a bulletin wrote that the distributor admitted replacing four units, and Jad said: that the replacement was against the distributor\'s interest and that somebody had to get it out of them. Mazen said neither is true — they offered, in writing, nine days after his letter. Ms Huda gave the rule, which is the shortest in the book: the reporting verb is where the writer\'s opinion lives. Everything after the verb is the other person\'s sentence and the verb itself is the writer\'s — said adds nothing, announced adds officialness, confirmed adds a previous report, claimed adds the writer\'s distance, admitted adds guilt, denied adds a charge, and refused to say is the only one of the seven that reports a fact rather than a claim. Jad said a reader notices none of it, and Ms Huda said almost no reader ever has — which is why the honest practice is to write said unless you can say out loud exactly why you have chosen something else._'));
out.push(p('**Listener task:** write one item from this room reported two ways, and the two conclusions a reader would draw.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Jad sends to the editors. Answer the questions.'));
out.push(model([
  '**NOTE FOR THE EDITORS · the four reports of the January change** · J. Attar · 21 December',
  'This is not a complaint about anybody. It is four sentences with one word different, and I think the fourth one matters to you.',
  '**What the four say.** Two: _the editors have announced that answers will carry names from January._ One: _the editors have confirmed that answers will carry names._ One: _the editors claim that answers will carry names from January._',
  '**What _confirmed_ tells a reader.** That somebody else said it first and you agreed afterwards. Whoever wrote that word may not have meant it, but a reader who knows the verbs now knows that the change was reported before you announced it. That is one word, and it is a fact about your office, and it is in print.',
  '**What _claim_ tells a reader.** Not that it is untrue. That the writer will not vouch for it. The doubt is supplied by the reader and nobody has had to write it down, which is precisely why the word is used: it cannot be answered, because nothing has been asserted.',
  '**What I think happened, and I may be wrong.** I do not think the fourth writer doubts you. I think _claim_ is that writer\'s ordinary verb for anything an organisation says about itself, and it goes in without being chosen.',
  '**What I am not asking for.** I am not asking anybody to write to the fourth site. Three of us have already read it and drawn the conclusion, and a letter would not take the word out of the four hundred people who read it before us.',
  '**The one thing worth doing, and it costs one line.** When the January change is announced on the page itself, put the date you decided it on and the name of the person who will answer questions about it. _Claim_ is almost impossible to use about a sentence with a date and a name in it.',
  '**And the thing about myself.** I have used _claim_ twice in answers this year about equipment manufacturers, both times without choosing it, and I have gone back and changed both.',
]));
out.push(item('1', 'What does he say _confirmed_ has told the reader about the editors\' office?'));
out.push(item('2', 'Why does he say _claim_ cannot be answered?'));
out.push(item('3', 'What one thing does he say is worth doing, and why does it work?'));
out.push(writers([
  'A note about the verbs: **say it is not a complaint** → **what the reports actually say, quoted** → **what one verb tells a reader** → **what the other verb tells a reader** → **what you think happened, with _I may be wrong_** → **what you are not asking for** → **the one thing worth doing** → **and the thing about yourself**.',
  'Quote all the versions, including the identical ones. _Two say announced, one says confirmed, one says claim._ The arithmetic is the argument, and it disappears the moment you paraphrase.',
  '⚠ Do not accuse the writer of doubting you. _I think claim is that writer\'s ordinary verb for anything an organisation says about itself, and it goes in without being chosen._ The generous reading is also the likelier one, and it is the only one that leaves you anything to do.',
  'Make the remedy a line of print rather than a correction of somebody else. _A date and the name of the person who will answer questions. Claim is almost impossible to use about a sentence with a date and a name in it._ That is 19.4 and 23.1 in one sentence.',
  '⚠ And end with your own use of the word. _I have used claim twice this year without choosing it, and I have changed both._ A note about other people\'s verbs with none of your own in it reads as a lecture.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note about the verbs in a report about something you know (60 words or more).'));
out.push(p('**NOTE FOR ______________ · ______________** · ______________   This is not a complaint about anybody. It is ______________ with one word different.   **What they say.** ______________: "______________." ______________: "______________."   **What ______________ tells a reader.** ______________.   **What ______________ tells a reader.** Not ______________. ______________.   **What I think happened, and I may be wrong.** ______________.   **What I am not asking for.** ______________.   **The one thing worth doing, and it costs ______________.** ______________.   **And the thing about myself.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The versions quoted, including the identical ones',
  'Two verbs explained — what each one tells a reader',
  'The generous reading of the writer, with _I may be wrong_',
  'A remedy that is a line of print, and one use of your own',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read what their chosen verb tells a reader.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (140 words or more) about the verbs used in reports of something you know about: the versions quoted, two verbs explained, the generous reading, what you are not asking for, the one-line remedy, and your own use of the word.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the versions quoted exactly**, **the verb explained and not denounced**, **one use of your own**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Which verb did you choose about yourself in Stage 4, and which would somebody who disliked you choose?** Almost everybody chose _said_ or _announced_ about themselves; almost nobody chose _admitted_. Then the sentence to take into 23.3: the verb somebody else would use about you is the sentence you will have to answer, and 22.4 was the practice for answering it.'));
out.push(hw('Write the note (60+ words). Then find one report this week that uses _claimed_, _admitted_ or _confirmed_, and write one line saying what that verb told you that the writer never wrote down.'));

// ======================= 23.3 =======================
out.push(pb());
out.push(h2('23.3  It is understood that'));
out.push(p('**Function:** reporting impersonally — and seeing what it hides   ·   **Grammar:** _it is reported / understood / thought that…_ · _X is said to be / to have been…_   ·   **Pronunciation:** the flat impersonal report'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One impersonal sentence each, from anything you have read this month — _it is understood that…_, _it is expected that…_, _the lot is said to have been re-tested_. Your teacher asks one question of each: **who?** Nobody will be able to answer.'));
out.push(board('It is understood that the south side will reopen on the twenty-second.', '_it is understood that…_ — understood by whom?'));
out.push(p('**b**  Put a person in front of each. **1** _It is reported that the figures were wrong._  **2** _It is understood that nobody was told._  **3** _The machine is said to be out of use._  **4** _The letter is thought to have been sent in October._  **5** _It is expected that the post will be advertised._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many of the nine sentences could Tareq rewrite with a person in them, and what does he say about the rest?   **A** five; the other four have nobody to put in   **B** all nine; it was easy   **C** two; the rest were about machines'));
out.push(p('**b**  Listen again. **1** What does he say the notice on the depot wall does that a signed notice could not?   **2** What is the difference Ms Huda draws between _is said to be_ and _is said to have been_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.5  Nine sentences and four with nobody in them', [
  ['Tareq', 'I took the directorate bulletin for December — one page — and I did what we did to the depot sheet in 18.7. I underlined every sentence with no person in it. Nine of them.'],
  ['Ms Huda', 'And then?'],
  ['Tareq', 'I tried to rewrite each one with a person at the front. Five went straight away. _It is understood that the south side will reopen on the twenty-second_ becomes **the roads office says** the south side will reopen on the twenty-second — one telephone call and I can find out whether they said it.'],
  ['Nour', 'And the other four?'],
  ['Tareq', 'There is nobody to put in. I sat with them for an hour. _It is expected that the resurfacing programme will continue into the spring._ Expected by whom? Not the roads office — they have a programme and dates. Not the directorate — it is their programme. Somebody has written the word _expected_ because it was the only word that would go in the gap, and the sentence has no author, no source and nothing in it that can be wrong.'],
  ['Omar', 'So it cannot be contradicted.'],
  ['Tareq', 'It cannot be contradicted and it cannot be relied on, and it has been printed on the directorate\'s own paper, which makes it sound like the one thing on the page you could rely on. The notice on our wall is the same. _It is understood that the second bus will be withdrawn in the new year._ No name, no date, no office. I have had eleven men ask me about it and I cannot tell any of them anything at all — and if it had been signed by a man I could have asked him in four minutes and told the eleven by half past six.'],
  ['Lubna', 'A signed notice is more use even if it says the same thing.'],
  ['Tareq', 'A signed notice is a thing you can act on. That notice is a thing you can only worry about.'],
  ['Ms Huda', 'Now the grammar, and there are two shapes. **_It is understood / reported / thought / expected that…_** — a whole clause with nobody in it. And **_X is said to be…_** or **_X is said to have been…_**, which is the same move folded into the subject. Watch the difference, because it is a date: _the lot **is said to be** out of specification_ — now, today. _The lot **is said to have been** re-tested_ — earlier, before now. One word, _have_, and the sentence has moved into the past.'],
  ['Tareq', 'And both of them still have nobody in them.'],
  ['Ms Huda', 'Both of them still have nobody in them. The test is the one you already have from 19.1: **put a person in front of it.** Where you cannot, you are not reading a report. You are reading a rumour that somebody has dressed for the office.'],
]));
out.push(sp());
out.push(box('Language box – the report with nobody in it', [
  '**Two shapes, and one test:**',
  table(['shape', 'example', 'put a person in'], [
    ['_It is **reported** that…_', '_It is reported that the figures were wrong._', '_The auditor reported that…_'],
    ['_It is **understood** that…_', '_It is understood that nobody was told._', '_The clerk says that nobody was told._'],
    ['_It is **expected** that…_', '_It is expected that it will continue._', '⚠ often **nobody** — see below'],
    ['_X **is said to be**…_', '_The machine is said to be out of use._', '_The fitter says it is out of use._'],
    ['_X **is said to have been**…_', '_The letter is said to have been sent._', '_His clerk says he sent it in October._'],
  ], [1.6, 2.2, 1.7]),
  '⚠ **_is said to be_ against _is said to have been_, and the difference is a date.** _The lot **is said to be** out of specification_ — now. _The lot **is said to have been** re-tested_ — before now. One word, _have_, and the sentence has moved into the past. ⚠ Never ~~is said that it was re-tested~~ in this shape: either _it is said **that** it was re-tested_ or _it **is said to have been** re-tested_.',
  '⚠ **The test, which is 19.1 in print: put a person in front of it.** Where a person goes in, you have a report and you can go and ask them. Where no person will go in, the sentence has no author, no source, and nothing in it that can be wrong — and it has usually been printed on paper that makes it look reliable.',
  '**A sentence that cannot be contradicted cannot be relied on either.** _It is expected that the programme will continue into the spring_ cannot be denied by anybody and cannot be acted on by anybody. ⚠ And note which one of those two facts is the reason it was written.',
  '**And the practical point, which is not about grammar.** A signed notice is a thing you can act on; an unsigned one is a thing you can only worry about. If you write notices, that is the whole of this cycle: _a name, an office and a date, even on bad news._',
  '**Useful phrases:** I underlined every sentence with no person in it · there is nobody to put in; I sat with them for an hour · expected by whom? · it cannot be contradicted and it cannot be relied on · a rumour that somebody has dressed for the office.',
  '**Practise:** Turn each impersonal report into a sentence with a person in it — or say that nobody will go in.  1 it is reported that  2 it is understood that  3 it is expected that  4 is said to be  5 is said to have been',
  '**Pronunciation.** 🔊 **Track 23.6** The impersonal opening is said **flat and fast**, with no stress at all until the content: _itisunderSTOODthat the **SOUTH** side will reopen._ That flatness is what makes it sound official. Listen to six, write the content, and say whether a person could be put in.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads an impersonal sentence from the card. B tries to put a person in front of it, out loud, and then says one of two things: _I could ask that person_, or _there is nobody to ask_. A then says what they would actually do about the sentence. Swap cards.'));
out.push(dlg(null, [
  ['A', 'It is __________ that __________.'],
  ['B', '__________ says that __________. — I could ask __________.'],
  ['B', '_(or)_ There is nobody to put in, so there is nobody to ask.'],
  ['A', 'So what I would do about it is __________.'],
]));
out.push(table(['Card A – the impersonal sentence', 'Card B – the impersonal sentence'], [
  ['_It is understood that the post will be advertised._', '_It is expected that the trial will continue._'],
  ['_The lot is said to have been re-tested._', '_The sheet is thought to have been withdrawn._'],
  ['_It is reported that eleven of the fifteen matched._', '_It is understood that the second bus will be withdrawn._'],
  ['_The letter is said to be with the directorate._', '_It is believed that nobody has read it._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** mark each of the eight _person goes in_ or _nobody goes in_. It is about five and three — and the three with nobody in them are the three that contain **a future or a continuing state** (_will be withdrawn_, _will continue_, _has read it_). That is the pattern worth writing up: an impersonal report of something that has **happened** usually has somebody behind it; an impersonal report of something that **will happen** usually has nobody at all.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Read your impersonal sentence from Stage 1 again and try to put a person in it. If nobody will go in, say what the sentence has cost you — what you have worried about, or repeated, or acted on.'));
out.push(p('**b**  Swap. Then each of you write the **signed** version of your partner\'s notice: the same information, with a name, an office and a date. Read both aloud and say which you would rather have on your wall.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Tareq took the directorate bulletin for December — one page — and did to it what the class did to the depot sheet in 18.7: he underlined every sentence with no person in it, and there were nine. Then he tried to rewrite each with a person at the front. Five went straight away: "it is understood that the south side will reopen on the twenty-second" becomes "the roads office says the south side will reopen on the twenty-second", which is one telephone call and he can find out whether they said it. Nour asked about the other four, and Tareq said there is nobody to put in — he sat with them for an hour. "It is expected that the resurfacing programme will continue into the spring." Expected by whom? Not the roads office, which has a programme and dates; not the directorate, because it is their programme. Somebody has written the word expected because it was the only word that would go in the gap, and the sentence has no author, no source and nothing in it that can be wrong. Omar said so it cannot be contradicted, and Tareq said it cannot be contradicted and it cannot be relied on, and it is printed on the directorate\'s own paper, which makes it sound like the one thing on the page you could rely on. The notice on the depot wall is the same: "it is understood that the second bus will be withdrawn in the new year" — no name, no date, no office. Eleven men have asked him about it and he cannot tell any of them anything, and if it had been signed he could have asked that man in four minutes and told the eleven by half past six. Lubna said a signed notice is more use even if it says the same thing, and Tareq said a signed notice is a thing you can act on and that notice is a thing you can only worry about. Ms Huda gave the two shapes and the date hidden in them — is said to be is now, is said to have been is earlier — and then the test, which is 19.1 in print: put a person in front of it, and where you cannot, you are reading a rumour that somebody has dressed for the office._'));
out.push(p('**Listener task:** write one sentence from this room that a person will go into, and one that nobody will.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Tareq writes to the depot manager. Answer the questions.'));
out.push(model([
  '**THE NOTICE BY THE MUSTER ROOM DOOR · one line** · T. Ayoub · 20 December',
  'I am writing about one notice. It is about twenty words long and it has been up since the 2nd of December.',
  '**The notice as it stands.** _"It is understood that the second bus on the Harasta service will be withdrawn in the new year."_ No name, no office, no date of decision.',
  '**What it has cost so far.** Eleven drivers have asked me about it, because I am on that service. I have been able to tell each of them nothing, which takes about two minutes each — and two of them have told their families that the service is going.',
  '**Who is in the sentence.** Nobody. I have tried: the roads office, the directorate, our own manager, the depot clerk. Every one of them would be a sentence I could check in one telephone call, and the sentence as printed cannot be checked by anybody at all.',
  '**What that means in practice.** It cannot be contradicted and it cannot be relied on. A driver cannot plan and a driver cannot stop worrying, and the notice is on our own paper, which is why it is believed.',
  '**What I am not saying.** I am not saying the information is wrong. For all I know the second bus is going. I am not asking whether it is going, either; that is a different letter and not mine to write.',
  '**The rewrite, which is nine words longer.** _"The transport office (A. Mroueh, extension 24) informed the depot on 28 November that the second bus on the Harasta service is under review. A decision is expected by 31 January."_',
  '**Why that version is better even if the news is worse.** Because a driver can act on it: he can ask Mr Mroueh, he knows the date, and he can tell his family a date instead of a rumour. A signed notice is a thing you can act on. The one on the wall is a thing you can only worry about.',
]));
out.push(item('1', 'What does he say the notice has cost so far, and how does he count it?'));
out.push(item('2', 'Which four people did he try to put into the sentence, and what would each have made possible?'));
out.push(item('3', 'Why does he say the rewrite is better even if the news is worse?'));
out.push(writers([
  'A note about one unsigned notice: **one notice, its length and how long it has been up** → **the notice quoted exactly** → **what it has cost, counted** → **who is in the sentence** → **what that means in practice** → **what you are not saying** → **the rewrite** → **and why the rewrite is better even if the news is worse**.',
  'Count the cost. _Eleven drivers, two minutes each, and two have told their families the service is going._ An unsigned notice has a price in other people\'s time and worry, and the price is the argument — nobody will act on _it is badly written_.',
  'List the people you tried to put in. _The roads office, the directorate, our own manager, the depot clerk._ Showing the work proves the sentence has nobody in it, which is otherwise only your opinion.',
  '⚠ Say that you are not disputing the information. _For all I know the second bus is going._ The moment a note about a notice becomes a note about the news, it is answered as a complaint about the news and the notice stays up.',
  '⚠ And end on **better even if the news is worse**, which is the sentence that gets an unsigned notice replaced. _A driver can ask Mr Mroueh, he knows the date, and he can tell his family a date instead of a rumour._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note about one unsigned notice or report (60 words or more).'));
out.push(p('**______________ · one line** · ______________   I am writing about one ______________. It has been up since ______________.   **The notice as it stands.** "______________." No ______________, no ______________.   **What it has cost so far.** ______ people have ______________, which takes about ______________ each — and ______ of them have ______________.   **Who is in the sentence.** Nobody. I have tried: ______________, ______________, ______________.   **What that means in practice.** It cannot be ______________ and it cannot be ______________.   **What I am not saying.** I am not saying ______________.   **The rewrite.** "______________ (______________) ______________ on ______________ that ______________. A decision is expected by ______________."   **Why that version is better even if the news is worse.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The notice quoted exactly, with how long it has been up',
  'The cost counted — people, minutes, consequences',
  'The people you tried to put in the sentence, listed',
  'A rewrite with a name, an office and a date — and why it is better even if the news is worse',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their rewrite only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (140 words or more) about one unsigned notice, bulletin line or report in your own life: quoted, costed, the people who would not go into it, what you are not saying, the rewrite with a name and a date, and why it is better even if the news is worse.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the notice quoted exactly**, **the cost counted**, **the rewrite with a name and a date**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the notices in this room have a name on them?** Count. Then the question that the count produces: who wrote the unsigned ones? Somebody did, in every case, and in most cases that person is two doors away and would put their name on it if asked — because the name was not left off to hide anything. It was left off because the form had no space for it, and nobody has ever asked for one.'));
out.push(hw('Write the note (60+ words). Then find the person who wrote one unsigned notice you live with, and ask them one question: would you put your name on it? Write down the answer.'));

// ======================= 23.4 =======================
out.push(pb());
out.push(h2('23.4  Three sentences: what, who says so, what is not known'));
out.push(p('**Function:** summarising a news item   ·   **Grammar:** the three-sentence summary · _what is not yet known is…_   ·   **Pronunciation:** three sentences at one pace'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Summarise, out loud, one thing you have read this month — and your teacher stops you at **thirty seconds**. Most of the room will not have reached what happened. The class then says, for each attempt, which of three things was missing: what happened, who says so, or what is not known.'));
out.push(board('I was asked what the bulletin said and I talked for four minutes.', 'what · who says so · what is not known'));
out.push(p('**b**  Which of the three is each sentence? **1** _The roads office says so, and the programme is theirs._  **2** _Eleven of the fifteen came from one batch._  **3** _Nobody knows whether the other four were from the same shop._  **4** _The committee minuted it on the twenty-seventh._  **5** _The trial has been extended to all night staff._  **6** _It is not known who will pay for it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How long did Omar take the first time he was asked what the bulletin said, and which of the three sentences does he say nobody writes?   **A** four minutes; what is not known   **B** thirty seconds; who says so   **C** two minutes; what happened'));
out.push(p('**b**  Listen again. **1** Why does Ms Huda say the third sentence is the one that makes the summary usable?   **2** What does Omar say happened when he gave the three-sentence version at work?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.7  Four minutes, and then three sentences', [
  ['Omar', 'My manager put a bulletin on my desk in November and said: what does this say? And I talked for four minutes.'],
  ['Nour', 'What was in the four minutes?'],
  ['Omar', 'Everything on the page, in the order it was printed, including two things that had nothing to do with us. And at the end he said: so is the contract changing or not? Which was the question, and I had not answered it, because I had not decided what the item was **about** before I opened my mouth.'],
  ['Ms Huda', 'Three sentences. Only three, and in this order.'],
  ['Omar', 'One: what happened, or what is claimed. Two: who says so, and how they would know. Three: what is not known.'],
  ['Jad', 'Give us yours.'],
  ['Omar', 'The maintenance contract for the eleven sites will be put out to tender in the spring. The directorate\'s own December bulletin says so, and the contract is theirs to tender. What is not known is whether the present arrangement continues until the tender is decided — the bulletin does not say, and that is the only part that affects any of us.'],
  ['Lubna', 'Twenty-five seconds.'],
  ['Omar', 'Twenty-three. And when I gave it to him he said one word — "right" — and then he asked me to find out the third sentence, which is the first piece of work anybody has given me on the strength of something I said.'],
  ['Ms Huda', 'And that is why the third sentence is the one that matters. Sentence one is information and sentence two is its credit; **sentence three is the only one of the three that tells anybody what to do next.** Everybody writes one. Most people manage two. Almost nobody writes three, and the person who writes three is the person who gets asked to go and find out — which, if you are hoping to be given more interesting work, is the whole mechanism.'],
  ['Omar', 'The hard part is not the length. It is deciding what the item is about before you speak.'],
  ['Ms Huda', 'Which is the same difficulty as 22.1, and it has the same remedy: twenty minutes with a pen before anybody asks you.'],
]));
out.push(sp());
out.push(box('Language box – the three-sentence summary', [
  '**Three sentences, in this order, and no fourth one:**',
  table(['sentence', 'what it contains', 'useful openings'], [
    ['**1 What**', 'the event or the claim, with its figures and dates', '_X will be…_ · _Eleven of the fifteen…_'],
    ['**2 Who says so**', 'the source, and why it would know', '_The directorate\'s own bulletin says so, and…_'],
    ['**3 What is not known**', 'the gap that decides what anybody does next', '_What is not known is whether…_ · _The bulletin does not say…_'],
  ], [1.3, 2.3, 2.0]),
  '⚠ **Sentence 2 has two halves and the second is the one people drop:** the source **and why that source would know**. _The directorate\'s own bulletin says so, and the contract is theirs to tender._ A source with no reason to know is not a source; it is somebody who also read something.',
  '**Sentence 3 is the only one of the three that tells anybody what to do next**, which is why it is the sentence that gets you asked to find out. Everybody manages sentence 1. Most people manage two. Almost nobody writes three.',
  '⚠ **Useful shapes for sentence 3:** _What is not known is **whether**…_ · _The bulletin does **not say**…_ · _Nobody has said **who** will…_ · _No date has been given for…_ — and ⚠ after _whether_ use a normal clause, never an infinitive: _whether the arrangement **continues**_, not ~~whether to continue~~.',
  '**And the hard part is not the length.** It is deciding what the item is **about** before you open your mouth. A four-minute summary is almost always the page read out in its printed order by somebody who had not decided.',
  '⚠ **No fourth sentence.** Your own opinion of the news is a different piece of speech, and attaching it to the summary makes the listener discount all three.',
  '**Useful phrases:** everything on the page, in the order it was printed · I had not decided what the item was about before I opened my mouth · twenty-three seconds · he asked me to find out the third sentence.',
  '**Practise:** Summarise each in exactly three sentences.  1 something you read this week  2 a notice at work  3 a decision in your family  4 a change in your trade  5 something from this course',
  '**Pronunciation.** 🔊 **Track 23.8** Three sentences at **one pace**, with a clear full stop between them and no speeding up at the third: _…**TENder** in the spring. ‖ The directorate\'s own **BULLetin** says so. ‖ What is not known is whether the present arrangement conTINues._ Listen to four and write the third sentence only.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a card item aloud, once. B gives the three-sentence summary. A then does one thing only: says which of the three sentences was weakest, and why. Then A times B\'s second attempt. Swap cards.'));
out.push(dlg(null, [
  ['B', '__________.'],
  ['B', '__________ says so, and __________.'],
  ['B', 'What is not known is whether __________.'],
  ['A', 'The weakest was sentence __________, because __________. Again — twenty-five seconds.'],
]));
out.push(table(['Card A – the item', 'Card B – the item'], [
  ['_a contract will be put out to tender_', '_a post has been advertised internally_'],
  ['_a road will be resurfaced in sections_', '_a reagent lot has been withdrawn_'],
  ['_a trial has been extended to all staff_', '_a bus service is under review_'],
  ['_answers will carry names from January_', '_a printing works has stopped two machines_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight third sentences. Then the count: how many of the eight contain the word **whether**? Six or seven, every time — because almost every gap that matters in a piece of news is a yes-or-no question somebody has not answered, and _whether_ is the word that holds it open without guessing at it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Summarise, in three sentences, something you have read this month that affects your own work. Then say what you would have to do to fill the third sentence, and how long it would take.'));
out.push(p('**b**  Swap. Then each of you say whether your partner\'s **second** sentence has both halves — the source **and** why it would know — and supply the missing half if it has not.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Omar\'s manager put a bulletin on his desk in November and said: what does this say? And he talked for four minutes. Nour asked what was in the four minutes, and it was everything on the page in the order it was printed, including two things that had nothing to do with them — and at the end the manager said: so is the contract changing or not? Which was the question, and Omar had not answered it, because he had not decided what the item was about before he opened his mouth. Ms Huda gave him three sentences and only three: one, what happened or what is claimed; two, who says so and how they would know; three, what is not known. Jad asked for his, and Omar gave it: the maintenance contract for the eleven sites will be put out to tender in the spring; the directorate\'s own December bulletin says so, and the contract is theirs to tender; and what is not known is whether the present arrangement continues until the tender is decided — the bulletin does not say, and that is the only part that affects any of them. Lubna said twenty-five seconds, and Omar said twenty-three. And when he gave it to his manager, the manager said one word, "right", and then asked him to go and find out the third sentence — which is the first piece of work anybody has given him on the strength of something he said. Ms Huda said that is why the third sentence is the one that matters: sentence one is information and sentence two is its credit, and sentence three is the only one of the three that tells anybody what to do next. Everybody writes one, most people manage two, and almost nobody writes three — and the person who writes three is the person who gets asked to go and find out. Omar said the hard part is not the length but deciding what the item is about before you speak, and Ms Huda said that is the same difficulty as 22.1 and has the same remedy: twenty minutes with a pen before anybody asks you._'));
out.push(p('**Listener task:** write one third sentence from this room, and what somebody would have to do to fill it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Omar sends his manager. Answer the questions.'));
out.push(model([
  '**THE DECEMBER BULLETIN · what it says about us** · O. Darwish · 18 December',
  'You asked me in November what a bulletin said and I took four minutes. This is three sentences, and then the part you asked me to go and find out.',
  '**What.** The maintenance contract covering the eleven sites will be put out to tender in the spring of next year.',
  '**Who says so.** The directorate\'s own December bulletin, page 2, says so — and the contract is theirs to tender, so they are the only people who could say it.',
  '**What is not known.** Whether the present arrangement continues until the tender is decided. The bulletin does not say, and that is the only part of the item that affects any of the eleven sites.',
  '**What I have found out since.** I telephoned the contracts clerk at the directorate on the 16th. She says — and this is her word, not mine — that the present arrangement "carries on as it is" until a tender is awarded, and that she cannot put that in writing because no date has been set for the tender itself. So one half of the third sentence is answered by a person I can name, and the other half is not answered by anybody.',
  '**What I would want in writing, and from whom.** One line from the contracts office: _existing arrangements continue until a tender is awarded._ Eight words, and it would let eleven sites plan for the spring.',
  '**What I am not asking about.** I am not asking who will win the tender or whether we should bid. Those are not this note and I have no view that is worth anything.',
  '**And the thing about the four minutes.** The four minutes were not too long. They were in the bulletin\'s order instead of ours, and I had not decided what the item was about before I started talking.',
]));
out.push(item('1', 'What does he say makes the directorate the only possible source?'));
out.push(item('2', 'What did the contracts clerk say, and what could she not do?'));
out.push(item('3', 'What does he say was actually wrong with the four minutes?'));
out.push(writers([
  'A note built on the three sentences: **why you are writing it** → **what** → **who says so, and why they would know** → **what is not known** → **what you have found out since, with a named person** → **what you would want in writing, and from whom** → **what you are not asking about** → **and the thing about your own first attempt**.',
  'Keep the three sentences as three headed paragraphs of one sentence each. The discipline is visible on the page, and a reader who sees three short paragraphs reads all three.',
  'Quote the person you telephoned, with their word marked as theirs. _She says — and this is her word, not mine — that it "carries on as it is."_ That is 23.1 and 23.2 together: the attribution is named and the verb is _says_.',
  'Say which half of the gap is now closed and which is not. _One half is answered by a person I can name; the other is not answered by anybody._ A half-filled third sentence is worth more than a guess at the whole of it.',
  '⚠ And diagnose your own first attempt rather than apologising for it. _They were in the bulletin\'s order instead of ours._ That sentence is the only part of the note that says anything about how you will work in future.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the three-sentence note about something you have read (60 words or more).'));
out.push(p('**______________ · what it says about us** · ______________   You asked me ______________. This is three sentences.   **What.** ______________.   **Who says so.** ______________ says so — and ______________, so ______________.   **What is not known.** Whether ______________. ______________ does not say, and that is the part that ______________.   **What I have found out since.** I ______________ on ______________. ______________ says — and this is ______________ word — that "______________".   **What I would want in writing, and from whom.** ______________. ______ words.   **What I am not asking about.** ______________.   **And the thing about my first attempt.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Three paragraphs of one sentence each, in the right order',
  'Sentence 2 with both halves — the source and why it would know',
  'Sentence 3 holding the gap open with _whether_, and not guessing',
  'One named person telephoned, with their own word quoted',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their third sentence only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (140 words or more): the three sentences, what you have found out since with a named person and their own word, the line you would want in writing, what you are not asking about, and the diagnosis of your own first attempt.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the three sentences in order**, **both halves of sentence 2**, **the gap held open and not guessed**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read out your third sentence and then say what it would cost to fill it.** Almost every answer in this room is one telephone call, one question at a window, or one line asked for in writing — and almost none of them has been made, asked or requested. The third sentence is cheap to write and cheap to close, and it is the one sentence that makes somebody give you the work.'));
out.push(hw('Write the note (60+ words). Then make the telephone call or ask the question that would fill your third sentence, and write down the answer in the speaker\'s own words.'));

// ======================= 23.5 =======================
out.push(pb());
out.push(h2('23.5  Confirmed, claimed, not known'));
out.push(p('**Function:** saying what has and has not been confirmed   ·   **Grammar:** _it has been confirmed that_ · _there is no confirmation that_ · _as far as anybody knows_   ·   **Pronunciation:** the pause before an unconfirmed item'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Three things you are fairly sure of about your own workplace in the next three months. For each one, your teacher asks one question: **is it in writing, and where?** Expect about one in three to be.'));
out.push(board('The letter says the twentieth of January. That one is in writing.', 'confirmed · claimed · not known'));
out.push(p('**b**  Confirmed, claimed or not known? **1** _The committee minuted it on the twenty-seventh of October._  **2** _Somebody at the window said the trolley is coming._  **3** _The letter gives the twentieth of January._  **4** _Nobody has said who will chair it._  **5** _The post has been advertised; the notice is on the board._  **6** _One of the night staff thinks the blocks are being reviewed._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many of Rasha\'s six items turned out to be confirmed in writing, and which item does she say taught her something?   **A** three; the trolley, which nobody has ever written down   **B** six; all of them   **C** one; the committee minute'));
out.push(p('**b**  Listen again. **1** What does she say she had been doing with the claimed items?   **2** What does Ms Huda say the middle column is for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.9  Three columns and the trolley', [
  ['Rasha', 'I made the three-column sheet for my own ward and there are six things on it, and I had to put only three of them in the first column.'],
  ['Ms Huda', 'The three that are confirmed.'],
  ['Rasha', 'The trial extended to all night staff — minuted on the twenty-seventh of October, and I have the minute. The letter about the night practice lead post — the twentieth of January, in writing, signed. And the post itself, advertised, with the specification attached. Three documents, and I can put my hand on all three.'],
  ['Omar', 'And the other three?'],
  ['Rasha', 'The second trolley, which has been coming since August. The review of the three-night blocks, which one of the night staff believes is happening. And a figure I have been repeating for two months — that the directorate\'s scheme covers four wards — which I now cannot find anywhere at all.'],
  ['Nour', 'Who told you four wards?'],
  ['Rasha', 'That is the uncomfortable part. I do not know. I have said it to at least six people as though it were a fact, and when I sat down to write which column it goes in, I could not name a single person who had ever said it to me. It is in the third column and it should never have left my mouth.'],
  ['Lubna', 'And the trolley?'],
  ['Rasha', 'The trolley is the one that taught me something. It has been coming since August, four people have told me it is coming, and not one word of it exists on paper. Four people saying a thing is not confirmation; it is one rumour with four mouths, and I had been treating the number of mouths as evidence.'],
  ['Ms Huda', 'Now the three columns, and the middle one is the one that is usually missing. **Confirmed** means there is a document and you can say where it is. **Not known** means nobody has said. And the middle column — **claimed** — means somebody has said it and it is not confirmed, and the column exists so that you can **keep it** without promoting it. Most people have two columns, and everything in the middle gets sorted upwards.'],
  ['Rasha', 'Which is exactly what I had been doing. I had the trolley in the first column because four people had said it.'],
  ['Ms Huda', 'And the discipline that holds the middle column in place is the one from 23.1: write **who** said it. _Claimed — four people, none of them named in writing._ A claim with its claimant beside it stays a claim. A claim with the claimant removed is a fact within about a fortnight.'],
]));
out.push(sp());
out.push(box('Language box – the three columns', [
  '**Three columns, and the middle one is the one people do not have:**',
  table(['column', 'what it means', 'how to write it'], [
    ['**Confirmed**', 'there is a document, and you can say where', '_It **has been confirmed** that…_ · _The minute of 27 October says…_'],
    ['**Claimed**', 'somebody has said it; it is not confirmed', '_X **says** that… There is **no confirmation**._'],
    ['**Not known**', 'nobody has said', '_Nobody has said **who/whether**…_ · _**As far as anybody knows**, no…_'],
  ], [1.3, 2.2, 2.2]),
  '⚠ **The middle column exists so that you can keep a claim without promoting it.** With two columns, everything in the middle is sorted upwards within about a fortnight. _Keep it, and keep the claimant beside it._',
  '⚠ **The number of mouths is not evidence.** Four people saying a thing is **one rumour with four mouths**, and the four are usually downstream of one another. Ask each of them the 23.1 question — _who told you?_ — and the four become one, or none.',
  '**And the hardest item is the figure you cannot source.** _I have said it to six people as though it were a fact, and I cannot name a single person who ever said it to me._ That belongs in the third column, not the second: a claim needs a claimant, and a figure with no claimant at all is not even a claim.',
  '⚠ **The forms.** _It has been confirmed **that**…_ (⚠ not ~~it is confirmed to be~~ in this use) · _There is **no confirmation that**…_ (⚠ not ~~no confirmation of that…~~ before a clause) · _**As far as anybody knows**, nothing has been decided_ · _Nobody has said **whether**…_',
  '**Useful phrases:** three documents, and I can put my hand on all three · four people saying a thing is one rumour with four mouths · I had been treating the number of mouths as evidence · it should never have left my mouth · a claim with the claimant removed is a fact within a fortnight.',
  '**Practise:** Put each in a column and write it in the right form.  1 a date in a letter  2 something three people have told you  3 a figure you cannot source  4 a decision nobody has announced  5 a notice on a board',
  '**Pronunciation.** 🔊 **Track 23.10** There is a **short pause before** an unconfirmed item and none before a confirmed one: _The trial was extended on the twenty-seventh. ‖ The second trolley — ‖ four people say so, and there is nothing in writing._ The pause is the whole signal. Listen to six and mark confirmed or claimed.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names an item from the card. B asks the two questions — _is it in writing, and where?_ and _who said it?_ — and puts it in a column. A then says what would move it one column to the left. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'Is it in writing, and where? And who said it?'],
  ['B', 'Then it goes in __________.'],
  ['A', 'What would move it left is __________, and that would take __________.'],
]));
out.push(table(['Card A – the item', 'Card B – the item'], [
  ['_a date you have been given_', '_a figure you have been repeating_'],
  ['_a post that is said to be coming_', '_a change three people have mentioned_'],
  ['_a decision taken at a meeting_', '_an arrangement that continues "as it is"_'],
  ['_a piece of equipment that is coming_', '_a rule everybody says exists_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight items with their columns, and then count the first column. It is two or three of eight — and in a first run at least one pair discovers an item that **cannot be put in any column**, because the speaker cannot name anybody who ever said it. Those are the valuable ones, and they are always figures.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Make your own three columns out loud, with at least five items. For each one in the first column, say where the document is. For each one in the middle, name who said it.'));
out.push(p('**b**  Swap. Then each of you choose your partner\'s most important middle-column item and design the one question that would move it left — to whom, in what words, and by when.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rasha made the three-column sheet for her own ward and there are six things on it, and only three of them went in the first column. The three confirmed: the trial extended to all night staff, minuted on the twenty-seventh of October, and she has the minute; the letter about the night practice lead post, the twentieth of January, in writing and signed; and the post itself, advertised, with the specification attached. Three documents, and she can put her hand on all three. Omar asked about the other three. The second trolley, which has been coming since August. The review of the three-night blocks, which one of the night staff believes is happening. And a figure she has been repeating for two months — that the directorate\'s scheme covers four wards — which she now cannot find anywhere at all. Nour asked who told her four wards, and Rasha said that is the uncomfortable part: she does not know. She has said it to at least six people as though it were a fact, and when she sat down to write which column it goes in she could not name a single person who had ever said it to her. It is in the third column and it should never have left her mouth. Lubna asked about the trolley, and Rasha said the trolley taught her something: it has been coming since August, four people have told her it is coming, and not one word of it exists on paper — four people saying a thing is not confirmation, it is one rumour with four mouths, and she had been treating the number of mouths as evidence. Ms Huda said the middle column is the one that is usually missing: confirmed means there is a document and you can say where it is, not known means nobody has said, and claimed exists so that you can keep a thing without promoting it — because with two columns everything in the middle gets sorted upwards. And the discipline that holds the middle column in place is the one from 23.1: write who said it. A claim with its claimant beside it stays a claim, and a claim with the claimant removed is a fact within about a fortnight._'));
out.push(p('**Listener task:** write one item from this room that moved columns today, and in which direction.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Rasha\'s sheet. Answer the questions.'));
out.push(model([
  '**NIGHTS · WHAT IS CONFIRMED AND WHAT IS NOT** · R. Barakat · 21 December · for the night staff',
  '**CONFIRMED — and I can put my hand on the paper.**',
  '**1** The three-night blocks are extended to all night staff. _Committee minute, 27 October; the minute does not give a reason._   **2** The ward manager will discuss the night practice lead post with me before the end of the year. _Her letter, 18 November, signed._   **3** The post has been advertised with an eight-requirement specification. _The notice and the specification, both on the board._',
  '**CLAIMED — somebody has said it; there is nothing in writing.**',
  '**4** A second trolley is coming. _Said by four people since August: the stores clerk, two night staff and somebody at the window whose name I do not know. There is no confirmation of any kind, and I now think the four are repeating one another._   **5** The three-night blocks are being reviewed again in the spring. _Said by one member of the night staff, who believes it; she cannot say who told her._',
  '**NOT KNOWN — nobody has said.**',
  '**6** Whether the night practice lead will be in the building on nights. The specification does not say and the letter does not say, and it is the only question on this sheet that changes what any of us does.',
  '**AND THE ITEM THAT IS NOT ON THE SHEET, because I cannot put it anywhere.** For two months I have told at least six people that the directorate\'s scheme covers four wards. I cannot find that in any document and I cannot name one person who ever said it to me. It is not confirmed, it is not claimed by anybody I can name, and it is not even unknown — it is mine, and I have been giving it away as a fact.',
  '**What I am asking for.** Item 6 in one line, from whoever drafted the specification. Nothing else on this sheet needs anybody to do anything.',
]));
out.push(item('1', 'How many items are confirmed, and what does she note about the October minute?'));
out.push(item('2', 'What does she now think about the four people and the trolley?'));
out.push(item('3', 'Why is the last item not on the sheet at all, and what does she say about it?'));
out.push(writers([
  'A three-column sheet: **CONFIRMED, each item with the document and its date** → **CLAIMED, each item with who said it** → **NOT KNOWN, and which of those gaps changes what anybody does** → **the item you cannot place at all** → **and the one thing you are asking for**.',
  'Name the document and its date beside every confirmed item. _Committee minute, 27 October._ Without the citation the first column is just the column of things you are confident about, which is what you started with.',
  'Name every claimant, including the ones you cannot name. _Two night staff and somebody at the window whose name I do not know._ The unnameable claimant is itself the finding, and it is what turns four voices back into one.',
  'Mark which unknown item **changes what anybody does**. One of them always does and the others are curiosity; the one that matters is the only one worth asking about (19.4).',
  '⚠ And write the paragraph about the thing you cannot place. _It is mine, and I have been giving it away as a fact._ Nobody will enjoy writing it. It is the paragraph that makes the rest of the sheet believable, and it is the sentence the unit exists for.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the three-column sheet for your own workplace (60 words or more).'));
out.push(p('**______________ · WHAT IS CONFIRMED AND WHAT IS NOT** · ______________ · for ______________   **CONFIRMED — and I can put my hand on the paper.** **1** ______________. _______________, ______________._ **2** ______________. _______________._   **CLAIMED — somebody has said it; there is nothing in writing.** **3** ______________. _Said by ______ people since ______________: ______________._   **NOT KNOWN — nobody has said.** **4** Whether ______________. ______________ does not say, and it is the only question that ______________.   **AND THE ITEM I CANNOT PLACE.** For ______________ I have told ______ people that ______________. I cannot ______________.   **What I am asking for.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every confirmed item with its document and date',
  'Every claim with its claimant — named, or named as unnameable',
  'The unknown item that changes what anybody does, marked',
  'The item you cannot place at all, and whose it is',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the item they cannot place.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full sheet (140 words or more) for something you are inside: confirmed with documents and dates, claimed with claimants, not known with the one that matters, the item you cannot place, and the one line you are asking for.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **documents and dates in the first column**, **claimants in the second**, **the item you cannot place**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many items are in your first column, out of how many altogether?** Two or three of six or seven, in almost every sheet in the room — and that is not pessimism, it is the ordinary proportion, and the people who do not know it are the ones with two columns. Then the harder count: how many of us found something we have been repeating and cannot source? Most of us. Say the number out loud; it will be useful in 23.7.'));
out.push(hw('Write the sheet (60+ words). Then take one middle-column item and ask the person who told you: who told you? Write down what happens to the item.'));

// ======================= 23.6 =======================
out.push(pb());
out.push(h2('23.6  The short news report'));
out.push(p('**Function:** writing a short news report   ·   **Grammar:** the first sentence carries what · who · when · where   ·   **Pronunciation:** reading a lead sentence aloud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One lead sentence each, out loud: the thing that happened, in one sentence, with what, who, when and where in it. Your teacher counts the words. Anything over about thirty-five words has two sentences in it pretending to be one.'));
out.push(board('Four samples were released eighteen hours late at the Suwayda laboratory on 29 October.', 'what · who · when · where — in the first sentence'));
out.push(p('**b**  Which is the lead sentence? **1** _There has been a problem with some samples recently._  **2** _Four patient samples were released eighteen hours late at the Suwayda laboratory on 29 October._  **3** _On the 29th of October something happened which should not have happened._  **4** _Everybody at the laboratory is very concerned about what occurred._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Yara been asked to write, and what does she say is the hardest thing about it?   **A** a report of the 29 October incident; that it is about herself and must be in the third person   **B** a letter of apology; the wording   **C** a method sheet; the order of the steps'));
out.push(p('**b**  Listen again. **1** What does she say she had written in her first attempt instead of a lead sentence?   **2** What does Ms Huda say the last paragraph of a short report is for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.11  A hundred and twenty words about myself', [
  ['Yara', 'The laboratory has an internal bulletin, four pages, and the senior technician has asked me to write the item about the twenty-ninth of October. A hundred and twenty words.'],
  ['Omar', 'About your own incident?'],
  ['Yara', 'About my own incident, in the third person, for about sixty colleagues, and it is the hardest piece of writing I have ever been given. My first attempt opened: "In recent weeks there has been some concern about sample handling in the afternoon."'],
  ['Nour', 'What is wrong with that?'],
  ['Yara', 'Everything, and the main thing is that it has no date, no number, nobody in it, and nothing that happened. It is a sentence about an atmosphere. And I wrote it because it was the only sentence I could write without putting myself in it.'],
  ['Ms Huda', 'And the lead sentence?'],
  ['Yara', '"Four patient samples were released eighteen hours late at the laboratory on 29 October after being left on a shelf in the receiving area." Twenty-four words: what, when, where, and the cause in the last clause.'],
  ['Jad', 'Is your own name in it?'],
  ['Yara', 'Not in the first sentence, because the first sentence is for the event. It is in the third, where the attribution goes: "The technician responsible for the afternoon run, Y. Mansour, says the bag was not checked against the receiving list." Said, not admitted — and I had to think about that for a long time, because admitted is the verb somebody else would use and I am not going to use it about myself in a bulletin where it would do a job I did not choose.'],
  ['Lubna', 'And the last paragraph?'],
  ['Yara', 'The last paragraph is what is not known, and I nearly left it out because it makes the item end weakly. It does not. "It is not known how often bags have been left in the receiving area, as no record is kept." That is the only sentence in the hundred and twenty words that anybody will do anything about.'],
  ['Ms Huda', 'Which is the shape, and it is the oldest shape in print. **The first sentence carries the event; the second carries the figures or the consequence; the third carries the attribution; and the last carries what is not known.** And the last paragraph is the reason a short report is useful rather than merely accurate — an item that closes every gap it opens tells its readers that there is nothing for them to do.'],
  ['Yara', 'A hundred and twenty words and I have written it nine times.'],
  ['Ms Huda', 'It is the shortest thing in this book and the only one of them that sixty people will read.'],
]));
out.push(sp());
out.push(box('Language box – the short report, in four moves', [
  '**Four moves, in this order, in about a hundred and twenty words:**',
  table(['move', 'what it carries', 'example'], [
    ['**1 The lead**', 'what · who · when · where, in one sentence under 35 words', '_Four samples were released eighteen hours late on 29 October after being left on a shelf._'],
    ['**2 The figures**', 'the quantity, the consequence, the dates', '_All four were re-run on the 30th; two results were reissued._'],
    ['**3 The attribution**', 'who says so, with **_says_** unless you can justify another verb', '_The technician responsible, Y. Mansour, **says** the bag was not checked._'],
    ['**4 What is not known**', 'the gap, held open', '_It is **not known** how often bags have been left there, as no record is kept._'],
  ], [1.4, 2.2, 2.4]),
  '⚠ **The commonest first sentence in the world is not a lead sentence at all:** _in recent weeks there has been some concern about…_ It has no date, no number, nobody in it and nothing that happened — it is a sentence about an atmosphere, and people write it because it is the only sentence they can write **without putting anybody in it**.',
  '**The subject\'s name belongs in move 3, not move 1.** The first sentence is for the event; the name goes where the attribution goes. And when the subject is **you**, write _says_ and not _admitted_ (23.2) — ⚠ _admitted_ is the verb somebody else would choose, and choosing it about yourself does a job you did not choose.',
  '⚠ **Keep the last move even though it ends the item weakly.** _It is not known how often…, as no record is kept._ That is usually the only sentence anybody will act on. An item that closes every gap it opens has told its readers that there is nothing for them to do.',
  '⚠ And the passive is **correct** in move 1 (19.1): _four samples **were released** late_ puts the event first, which is where it belongs. The agent then arrives in move 3 with a name. ⚠ What is wrong is a passive in move 3 — ~~the bag was not checked by somebody~~ — where the whole point is the name.',
  '**Useful phrases:** it is a sentence about an atmosphere · twenty-four words: what, when, where, and the cause in the last clause · said, not admitted · I nearly left it out because it makes the item end weakly · a hundred and twenty words and I have written it nine times.',
  '**Practise:** Write the lead sentence only, in under thirty-five words.  1 something that went wrong at work  2 a decision that was taken  3 a change to a service  4 a piece of equipment that failed  5 something that was published',
  '**Pronunciation.** 🔊 **Track 23.12** A lead sentence is read **evenly, with one small pause before the cause**: _Four samples were released eighteen hours late on the twenty-ninth of October ‖ after being left on a shelf in the receiving area._ Listen to four and write the four facts of each: what, who, when, where.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A describes an event in as many sentences as they like. B writes one lead sentence from it and reads it back. A says which of the four facts is missing, and B writes it again. Then B adds move 4 — what is not known. Swap.'));
out.push(dlg(null, [
  ['A', '_(the event, in several sentences)_ __________.'],
  ['B', '__________ on __________ at __________ after __________.'],
  ['A', 'Missing: __________.'],
  ['B', '_(again)_ __________. And it is not known __________, as __________.'],
]));
out.push(table(['Card A – the event', 'Card B – the event'], [
  ['_a late delivery_', '_a machine stopped_'],
  ['_a meeting that decided nothing_', '_a notice that went up and was wrong_'],
  ['_a form that was returned_', '_a service that was shortened_'],
  ['_a record that was not kept_', '_a figure that was corrected_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight lead sentences and mark which of the four facts was missing from each **first** attempt. It is _when_ in five or six of the eight — the date is the fact people leave out, every time, in their own trade and in print — and an event with no date in it cannot be checked by anybody, however exact everything else is.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Give the four moves out loud about something that happened to you or near you: the lead, the figures, the attribution with _says_, and what is not known. Then say which move you would be tempted to leave out.'));
out.push(p('**b**  Swap. Then each of you rewrite your partner\'s **first** sentence so that it has no atmosphere word in it — _concern, issues, difficulties, recently_ — and read both versions aloud.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The laboratory has an internal bulletin, four pages, and the senior technician has asked Yara to write the item about the twenty-ninth of October: a hundred and twenty words, about her own incident, in the third person, for about sixty colleagues. She says it is the hardest piece of writing she has ever been given. Her first attempt opened: "In recent weeks there has been some concern about sample handling in the afternoon." Nour asked what is wrong with that, and Yara said everything — it has no date, no number, nobody in it and nothing that happened; it is a sentence about an atmosphere, and she wrote it because it was the only sentence she could write without putting herself in it. The lead sentence she has now is twenty-four words: "Four patient samples were released eighteen hours late at the laboratory on 29 October after being left on a shelf in the receiving area" — what, when, where, and the cause in the last clause. Jad asked whether her own name is in it, and she said not in the first sentence, because the first sentence is for the event: her name is in the third, where the attribution goes — "the technician responsible for the afternoon run, Y. Mansour, says the bag was not checked against the receiving list." Said, not admitted; and she had to think about that for a long time, because admitted is the verb somebody else would use and she is not going to use it about herself in a bulletin where it would do a job she did not choose. Lubna asked about the last paragraph, and Yara said it is what is not known and she nearly left it out because it makes the item end weakly: "it is not known how often bags have been left in the receiving area, as no record is kept" — which is the only sentence in the hundred and twenty words that anybody will do anything about. Ms Huda gave the shape, which is the oldest shape in print: the first sentence carries the event, the second the figures or the consequence, the third the attribution, and the last what is not known — and the last paragraph is the reason a short report is useful rather than merely accurate, because an item that closes every gap it opens tells its readers that there is nothing for them to do._'));
out.push(p('**Listener task:** write one lead sentence from this room and the atmosphere word it used to contain.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Yara\'s item as it goes into the bulletin. Answer the questions.'));
out.push(model([
  '**LABORATORY BULLETIN · DECEMBER · page 2**',
  '**FOUR SAMPLES RELEASED LATE IN OCTOBER; NO RECORD KEPT OF SHELF USE**',
  'Four patient samples were released eighteen hours late at the laboratory on 29 October after being left in a bag on a shelf in the receiving area.',
  'All four were re-run on the morning of 30 October and two results were reissued to Ward 4. The samples had been delivered at about 14.20 on the 29th and were found at 08.35 the following morning.',
  'The technician responsible for the afternoon run, Y. Mansour, says the bag was not checked against the receiving list and that she had seen a bag left on the same shelf in June of last year and had not reported it. A method sheet for the afternoon run, with six steps and a reason against each one, was issued on 3 November and is on the wall of the receiving area.',
  'The senior technician says the method sheet answers the handling question but not the storage question, and that the shelf itself has no label and no owner.',
  'It is not known how often bags have been left in the receiving area, as no record is kept. It is also not known who is responsible for the shelf: the receiving list does not mention it, and neither does the method sheet.',
  '_(129 words. Written at the request of the senior technician, 20 December.)_',
]));
out.push(item('1', 'Which facts are in the first sentence, and which fact is in the second paragraph only?'));
out.push(item('2', 'Which verb does the item use about Y. Mansour, and what does she say?'));
out.push(item('3', 'What two things does the item say are not known?'));
out.push(writers([
  'A short report: **a headline that is the event and not a label** → **the lead: what, who, when, where, under thirty-five words** → **the figures, the consequence and the times** → **the attribution, with a name and _says_** → **a second attribution if there is one** → **and what is not known, in the last paragraph**.',
  'Put the times in the second paragraph, not the first. _Delivered at about 14.20 and found at 08.35 the following morning._ The lead carries the event; the clock belongs underneath it, where it can be checked without slowing the first sentence down.',
  '⚠ Use _says_ about yourself even when _admitted_ is what somebody else would write. And then make the sentence carry the admission rather than the verb: _…says the bag was not checked and that she had seen a bag on the same shelf in June and had not reported it._ The verb is neutral; the content is not.',
  'Give the second attribution where you have one, and let it disagree slightly. _The senior technician says the method sheet answers the handling question but not the storage question._ Two sources that do not say quite the same thing is what a report looks like when nobody has smoothed it.',
  '⚠ And put the word count and the commissioning at the bottom. An internal item that says who asked for it and how long it is cannot be described later as anybody\'s campaign.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the short report (60 words or more, about 120 if you can).'));
out.push(p('**______________ BULLETIN · ______________**   **______________**   ______________ at ______________ on ______________ after ______________.   ______________ were ______________ on ______________ and ______________. The ______________ had been ______________ at about ______________ and were ______________ at ______________.   ______________, ______________, says ______________ and that ______________. A ______________ was issued on ______________ and is ______________.   ______________ says ______________ but not ______________.   It is not known ______________, as ______________. It is also not known ______________.   _(______ words. Written at the request of ______________, ______________.)_'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The lead under thirty-five words, with what, who, when and where',
  'No atmosphere word anywhere — no _concern_, _issues_, _difficulties_, _recently_',
  '_says_ and not _admitted_, with the content carrying the admission',
  'A last paragraph of what is not known, with the reason it is not known',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their lead sentence only, and the class counts the words.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full report (140 words or more) of something that happened in your own work: headline, lead, figures and times, a named attribution with _says_, a second source if you have one, and what is not known and why.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the lead under thirty-five words with all four facts**, **_says_ and not _admitted_**, **the last paragraph of what is not known**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read out the last paragraph of your report.** Then the question: who in your workplace would act on it? There is a name in almost every case, and the name is almost always somebody who has never been told that the gap exists — because a gap is only visible to somebody who has written the other three moves first. That is what a report is for, and it is why it is a hundred and twenty words and not four pages.'));
out.push(hw('Write the report (60+ words). Then give it to one person who was there, with one instruction: _tell me which sentence you would argue with._ Write down their answer and whether you changed the sentence.'));

// ======================= 23.7 =======================
out.push(pb());
out.push(h2('23.7  Review & Mediate: One story, four kinds of sentence'));
out.push(p('**Function:** explaining a news story and separating fact from claim   ·   **Recycling:** Units 1–23   ·   **Exam practice:** B1 Preliminary Reading Part 1, Writing Part 1, Listening Part 3'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 23 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** He admitted to take the four units.  **2** He denied to know anything about it.  **3** He refused saying how many.  **4** According to that the foreman said, seventeen are out of use.  **5** The lot is said that it was re-tested.  **6** He announced me that the post would be advertised.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the item Tareq cut out of a Damascus weekly.'));
out.push(box(null, [
  '**THE HARASTA ROAD AND THE SECOND BUS** _(a Damascus weekly, 14 December · nine sentences, numbered here)_',
  '**1**  Resurfacing of the south side of the Harasta road began on 19 November and was completed in four days, according to the roads office.',
  '**2**  The office says that a further section, between the second and the fourth stops, will be resurfaced before the end of February.',
  '**3**  It is understood that the second bus on the Damascus–Harasta service will be withdrawn in the new year.',
  '**4**  Drivers claim that the printed timetable has been wrong since 2019.',
  '**5**  The directorate has confirmed that the first departure leaves at 06.20 and not at 06.40 as printed.',
  '**6**  A depot official refused to say how many passengers are affected.',
  '**7**  It is expected that the timetable will be reprinted in the spring.',
  '**8**  Many passengers are reportedly unaware of the change.',
  '**9**  The whole affair is a reminder that the directorate\'s printed information cannot be relied upon.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Which three sentences does Tareq say have nobody in them, and which verb does he say is refuted two sentences later?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.13  Nine sentences, and the board comes down', [
  ['Tareq', 'Nine sentences about my own road, and I can now sort them, which I could not have done in September. Four kinds.'],
  ['Ms Huda', 'Begin with the ones that work.'],
  ['Tareq', 'Two are facts with a source in them. One — the resurfacing began on the nineteenth and took four days, according to the roads office. And five — the directorate has confirmed the first departure is 06.20 and not 06.40. Both have somebody in them and both can be checked by anybody.'],
  ['Nour', 'And the claims?'],
  ['Tareq', 'Two and four. Two is honest: the office says a further section before the end of February — named, attributed, and we shall see. Four is the one that made me put the paper down. "Drivers claim that the printed timetable has been wrong since 2019."'],
  ['Omar', 'Why is that one different?'],
  ['Tareq', 'Because of the word **claim**, and because the thing is not a claim at all. It is a printed timetable and a bus, and a man with four minutes can stand at that stop and see it. We have said it for five years and we have been a group of men who claim something. And then sentence five, two lines later, is the directorate **confirming** it.'],
  ['Lubna', 'So the item refutes its own verb.'],
  ['Tareq', 'Two sentences later, on the same page, and nobody will notice. That is the thing I have learnt this month: _claim_ is not refuted by evidence, it is refuted by somebody else\'s verb, and the two can sit four centimetres apart.'],
  ['Jad', 'And the ones with nobody in them?'],
  ['Tareq', 'Three, seven and eight. Three — _it is understood_ that the second bus will be withdrawn. Seven — _it is expected_ that the timetable will be reprinted. Eight — _many passengers are reportedly unaware_. Three sentences out of nine, with no author, no source and nothing in them that can be wrong, and two of them are about the future. The eleven men who ask me about the second bus are asking me about sentence three.'],
  ['Ms Huda', 'And the fourth kind.'],
  ['Tareq', 'Sentence nine, and it is the only one I would write to them about. "The whole affair is a reminder that the directorate\'s printed information cannot be relied upon." That is the writer\'s own opinion wearing the clothes of a report, and the ninth sentence of a news item is where it always is. I agree with it, which is why I noticed it.'],
  ['Ms Huda', 'That is the mediation, and it is the last one in this book: **four kinds, and the reader has to do the sorting because the page will not do it for them.** Facts with a source. Claims with a claimant. Sentences with nobody in them. And the writer\'s opinion in the last line. Now — the board, please. It went up in September.'],
  ['Jad', 'Mine is the first of June and it has already fallen, six months early. I wrote: I will not have telephoned anybody in English by June. On the eighteenth of December I was on a call for forty minutes with four editors, in English, and I asked three questions. So the right verb about my own prediction is not _claimed_ and it is not _admitted_. I was wrong, on a date, and here is the date.'],
  ['Ms Huda', 'And mine, which is also the first of June, and I am going to report it the way I would report somebody else\'s. I predicted that eight of the eleven predictions on that board would be right about the event and wrong about the reason. Four fell by November and three of those four were right in both halves. Two more have fallen since, and both were right in both halves. So: **there is no confirmation of my prediction, and the evidence so far is against it.** Not _I was nearly right_. The honest report of my own old claim uses the verb I would use for anybody else\'s.'],
  ['Rasha', 'And the reason you gave in 18.7 was that we had been made to write a reason with a count in it under every claim.'],
  ['Ms Huda', 'Which is in the middle column, because I claimed it and it is not confirmed. What would confirm it is the June reading, by somebody who is not me. The board comes down today and goes into the back of your folders — and the one thing I want you to keep from it is not whether you were right. It is that every line on it has a date on it, and a line with a date on it is the only kind of claim that can ever be settled.'],
]));
out.push(sp());
out.push(box('Language box – four kinds of sentence in one report', [
  '**Read it one sentence at a time and sort:**',
  table(['kind', 'how you know', 'what to do with it'], [
    ['**A fact with a source**', 'a person or office is in the sentence', 'use it; check it if it matters'],
    ['**A claim with a claimant**', '_X says / claims that…_', 'keep it as a claim (23.5), and note the verb'],
    ['**A sentence with nobody in it**', '_it is understood / expected / reportedly_', 'you can neither rely on it nor contradict it'],
    ['**The writer\'s opinion**', 'usually the last sentence; no source at all', 'notice it, and notice when you agree'],
  ], [1.9, 2.1, 2.1]),
  '⚠ **A report can refute its own verb and nobody notices.** _Drivers **claim** the timetable has been wrong since 2019_ (sentence 4) and _the directorate has **confirmed** that the first departure leaves at 06.20_ (sentence 5) are four centimetres apart. _Claim_ is rarely refuted by evidence; it is refuted by somebody else\'s verb.',
  '**The sentences with nobody in them cluster on the future.** Two of the three here are about what will happen — _will be withdrawn_, _will be reprinted_ — and those are the two that people in the street are actually asking each other about. ⚠ Expect about three in nine.',
  '**And the last sentence is where the opinion lives.** _The whole affair is a reminder that…_ ⚠ The test is not whether you agree with it; it is whether a source is given. Agreeing with an unsourced sentence is exactly how it passes.',
  '**Reporting your own old claim** (23.2 turned on yourself): use the verb you would use about somebody else. _I was wrong, on a date, and here is the date_ — not _I was nearly right_. And where your own claim is untested, say so in the words of 23.5: _there is no confirmation of it, and the evidence so far is against it._',
  '**Useful phrases:** four kinds, and the reader has to do the sorting · the item refutes its own verb two sentences later · no author, no source, and nothing in it that can be wrong · a line with a date on it is the only kind of claim that can ever be settled.',
  '**Pronunciation.** 🔊 **Track 23.14** Reading a sentence and then your verdict on it: **the sentence flat and fast, a pause, the verdict with the stress on the kind** — _"it is expected that the timetable will be reprinted" ‖ **NObody** in it._ Listen to four and write the verdict only.',
], C.lteal));
out.push(stage('3', 'Practise – and then decide together (Speaking Part 3)', 7));
out.push(p('Work in pairs. A has one of the items below and does **not** show it. A reads it once, then explains it: which sentences are facts with a source, which are claims with a claimant, which have nobody in them, and which is the writer\'s opinion. B must say which one sentence they would write to the paper about. **Then, in two minutes together**, rewrite one of the sentences with nobody in it so that somebody is in it. You do not have to agree. Change roles with the other item.'));
out.push(table(['Item A – a hospital notice in a local paper', 'Item B – a trade bulletin about a printing works'], [
  ['_1 The ward reopened on 8 December, according to the directorate._', '_1 Two machines stopped on 3 December, according to the works foreman._'],
  ['_2 The directorate says a second ward will reopen in March._', '_2 The owner says both will be running by February._'],
  ['_3 It is understood that night cover will not change._', '_3 It is expected that no staff will be affected._'],
  ['_4 Staff claim that the trolley has been unusable since the spring._', '_4 Operators claim that the guard has been wrong since 2019._'],
  ['_5 The equipment office has confirmed that the trolley is on a list._', '_5 The engineer has confirmed that the clearance is out by 0.4mm._'],
  ['_6 A ward manager refused to say how many beds are closed._', '_6 The owner refused to say how many sheets were spoiled._'],
  ['_7 Many relatives are reportedly unaware of the change._', '_7 Many customers are reportedly waiting for orders._'],
  ['_8 It is a reminder that nothing here is ever announced._', '_8 It is a reminder that old machines are never replaced._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the four kinds for each item. On **both** items sentences 1 and 5 are facts with a source, 2 and 4 are claims, 3 and 7 have nobody in them, 6 is a fact about a refusal, and 8 is the writer\'s opinion — and on both, sentence 5 **confirms** what sentence 4 only _claims_. That is the same arithmetic as Tareq\'s, from two different trades, which is why the stage runs with two documents.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Use a real news item, bulletin, notice or circular from your own life, of at least six sentences. Explain it to your partner **without showing it**: the facts with sources, the claims with claimants, the sentences with nobody in them, and the writer\'s opinion. Your partner must ask: _how many of the sentences have nobody in them?_, _does any sentence refute another sentence\'s verb?_ and _which sentence are the people around you actually asking each other about?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Tareq cut nine sentences about his own road out of a Damascus weekly and sorted them into four kinds, which he says he could not have done in September. Two are facts with a source: sentence one, the resurfacing began on the nineteenth and took four days according to the roads office; and sentence five, the directorate has confirmed the first departure is 06.20 and not 06.40. Both have somebody in them and both can be checked by anybody. Two are claims: sentence two is honest — the office says a further section before the end of February, named and attributed — and sentence four is the one that made him put the paper down: "drivers claim that the printed timetable has been wrong since 2019." Omar asked why that one is different, and Tareq said because of the word claim, and because the thing is not a claim at all: it is a printed timetable and a bus, and a man with four minutes can stand at that stop and see it. They have said it for five years and they have been a group of men who claim something. And then sentence five, two lines later, is the directorate confirming it. Lubna said so the item refutes its own verb, and Tareq said two sentences later, on the same page, and nobody will notice — claim is not refuted by evidence, it is refuted by somebody else\'s verb, and the two can sit four centimetres apart. Three, seven and eight have nobody in them: it is understood, it is expected, and many passengers are reportedly unaware. Three of nine, with no author, no source and nothing that can be wrong, and two of them about the future — and the eleven men who ask him about the second bus are asking about sentence three. The fourth kind is sentence nine, the writer\'s own opinion wearing the clothes of a report, which is where it always is; Tareq agrees with it, which is why he noticed it. Ms Huda said that is the mediation and the last one in the book: four kinds, and the reader has to do the sorting because the page will not do it for them._'));
out.push(p('**Listener task:** write one sentence from this room that has nobody in it, and the signed version of it.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 1)', 7));
out.push(p('For each question, choose the correct answer **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**   _Depot noticeboard:_ **The December bulletin is on the table by the window. The copy on this board is the November one and has not been replaced, because page 3 of it is still current.**',
], C.lyellow, C.orange));
out.push(p('**A** The December bulletin has not arrived.   **B** The board will be cleared in December.   **C** You should read the November copy for page 3.', { indent: 200, after: 60 }));
out.push(box(null, [
  '**2**   _Text message:_ **Rang the contracts clerk. She\'ll say the arrangement carries on as it is, but she can\'t put it in writing until a tender date is set. Don\'t put it in the note as settled.**',
], C.lyellow, C.orange));
out.push(p('**A** What the clerk said cannot be treated as confirmed.   **B** The clerk refused to speak to him.   **C** A tender date has now been set.', { indent: 200, after: 60 }));
out.push(box(null, [
  '**3**   _Notice in a laboratory receiving area:_ **Bags left in this area were not recorded before 3 November. If you leave one, write the time and your name on the list on the door.**',
], C.lyellow, C.orange));
out.push(p('**A** Bags may not be left in this area.   **B** There was no record of bags left here until November.   **C** The list on the door must be signed by a senior technician.', { indent: 200, after: 60 }));
out.push(box(null, [
  '**4**   _Email to laboratory staff:_ **The item about October in this month\'s bulletin was written by the technician concerned, at the senior technician\'s request. Comments should go to the senior technician and not to the bulletin.**',
], C.lyellow, C.orange));
out.push(p('**A** The item was written by the senior technician.   **B** Comments should be sent to the bulletin.   **C** The senior technician asked for the item to be written.', { indent: 200, after: 60 }));
out.push(box(null, [
  '**5**   _Sign at a bus stop:_ **The first departure from this stop is 06.20. The printed timetable showing 06.40 is withdrawn. New timetables will be displayed when they have been printed; no date has been given.**',
], C.lyellow, C.orange));
out.push(p('**A** The old timetable was wrong and the new one has no date yet.   **B** The 06.40 departure has been cancelled.   **C** New timetables are on display at this stop.', { indent: 200, after: 60 }));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note to the paper about one sentence of a report (60 words or more).'));
out.push(p('**______________ · sentence ______** · ______________   I am writing about one sentence of ______________ of ______________. The others are not the subject of this note.   **The sentence as it stands.** "______________"   **What kind of sentence it is.** ______________.   **How many sentences of the ______ have nobody in them.** ______: sentences ______, ______ and ______.   **And the sentence that refutes it.** Sentence ______: "______________". ______________ lines later, on the same page.   **The rewrite, which is ______ words.** "______________"   **What I am not asking for.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'One sentence only, quoted exactly, with the others set aside',
  'The kind named — fact, claim, nobody in it, or opinion',
  'The count of sentences with nobody in them, with their numbers',
  'The rewrite with a name and a date, and a word-count',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 1)', 10));
out.push(box(null, [
  'Read this email from your English friend Sam and the **notes** you have made. Write your email to Sam using **all** the notes. Write **140 words or more**.',
  '_"I keep arguing with my brother about things we have read. He believes everything and I believe nothing, and neither of us can explain why. You did a whole course on this — **how do you actually tell?** And he keeps saying that three people told him, as if that settled it."_',
  '**Your notes:  1** Tell Sam the first thing to look at — and why.   **2** Explain what is wrong with _reportedly_.   **3** Say what to do with something three people have told him.   **4** Give one example from your own reading.',
]));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 23 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  He admitted ___ the four units.   a) taking   b) to take   c) take',
  '2  He denied ___ anything about it.   a) to know   b) knowing   c) know',
  '3  A depot official refused ___ how many were affected.   a) saying   b) say   c) to say',
  '4  ___ the foreman, seventeen of the nineteen are out of use.   a) According to   b) According   c) Accordingly',
  '5  The lot is said ___ re-tested in November.   a) that it was   b) to have been   c) to be',
  '6  He ___ me that the post would be advertised.   a) announced   b) said   c) told',
  '7  There is no confirmation ___ a second trolley is coming.   a) that   b) of   c) for',
  '8  It is ___ that the timetable will be reprinted in the spring.   a) expecting   b) expected   c) expect',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 3 style – note completion).** 🔊 **Track 23.15** You will hear a bus driver explaining a newspaper item. Write **one or two words or a number** in each gap.'));
out.push(box('NINE SENTENCES ABOUT ONE ROAD', [
  'Number of sentences in the item: **(1)** ______',
  'Sentences with nobody in them: **(2)** ______',
  'The verb the paper used about the drivers: **(3)** ______',
  'What the directorate did two sentences later: **(4)** ______',
  'The official refused to say how many **(5)** ______ were affected',
  'The last sentence is the writer\'s own **(6)** ______',
], C.lyellow, C.orange));
out.push(dlg('Track 23.15  Audio script (read after the check)', [
  ['Tareq', 'Nine sentences about my own road, and I could not have sorted them in September. Two are facts with somebody in them: the resurfacing began on the nineteenth of November and took four days, according to the roads office; and the directorate has confirmed that the first departure leaves at twenty past six and not at twenty to seven. Three of the nine have nobody in them at all — it is understood that the second bus will be withdrawn, it is expected that the timetable will be reprinted, and many passengers are reportedly unaware of the change. Three out of nine, no author, no source, and nothing in them that can be wrong. Then the one that made me put the paper down. Sentence four: drivers claim that the printed timetable has been wrong since 2019. Claim. It is a printed timetable and a bus, and a man with four minutes can stand at that stop and see it — and two sentences later, on the same page, the directorate confirmed it. The item refutes its own verb and nobody will notice. Sentence six is the only one that is a fact and not a claim at all: a depot official refused to say how many passengers are affected. He was asked and he did not answer, and that happened. And the last sentence is the writer\'s own opinion, which is where it always is: the whole affair is a reminder that the directorate\'s printed information cannot be relied upon. I agree with it, which is exactly why I noticed it.'],
]));
out.push(p('**C  Writing.** Write the short report (140+ words) of something that happened in your own work: a headline that is the event, a lead sentence under thirty-five words with what, who, when and where, the figures and times, a named attribution with _says_, and a last paragraph of what is not known and why.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 23)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say which word in a report decided me, and why',
  '☐ attribute a claim to a named source, with a date',
  '☐ choose the reporting verb on purpose — and write _said_ when I cannot justify another',
  '☐ put a person in front of an impersonal report, or see that nobody will go in',
  '☐ summarise a news item in three sentences, including what is not known',
  '☐ keep a claim in the middle column instead of promoting it',
  '☐ write a short report in four moves, with a lead sentence under thirty-five words',
  '☐ sort a report into facts, claims, sentences with nobody in them, and the writer\'s opinion',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 24 – LOOKING AHEAD TO B2', [
  'This is the last unit of new functions. **Unit 24** is the one the course has been walking towards since Unit 1 of Book 1: what you can do now that you could not do in January, said in figures rather than in adjectives, and what B2 asks for that B1 does not.',
  '**24.6 is the letter to your B2 self**, written in this room, sealed in this room, and opened at the end of your B2 course. It is the only piece of writing in this book that nobody else will mark. **Bring your week-one note** — the four sentences from 14 January — and your **18.4** nine lines and your **22.6** page. 24.6 is built on all three.',
  '**And bring the prediction board**, which came down today. One line on it is dated the first of June, and it is still open. In Unit 24 you will write the last one.',
  '**24.7 is the end of the book**, and it is a mediation: you will explain this course to somebody who is about to begin it, and you will have to decide what to tell them about the first fortnight.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · Unit 23 · Student\'s Book');
