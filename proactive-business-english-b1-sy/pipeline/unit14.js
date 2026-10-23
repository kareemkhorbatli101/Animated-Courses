// Proactive Business English B1 · Syria Edition · Book 2 · Unit 14 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a forecast · an assumption · a base case · a best case · a worst case · an outturn · a variance · a projection · to extrapolate · a trend line · volatility · an indicator · a leading indicator · a margin of error · a confidence level · to understate · to overstate · a swing factor · a sensitivity test · to hedge · a revision · to revise upwards · to revise downwards · a rolling forecast · a run rate · seasonality · an outlier · a plausible range · on current information · as things stand';
const BACK_AT_B1 = 'forecast · trend · outlook';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 14  Forecasts and Probability'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**14.1**  put four lines and a number on a forecast board',
  '**14.2**  name a cause you are not sure of, without pretending',
  '**14.3**  say how likely something is, in a way somebody can act on',
  '**14.4**  put the adverb where it changes the meaning you want',
  '**14.5**  say what will have happened by a date',
  '**14.6**  print the assumptions under the forecast',
  '**14.7**  Review & Mediate: how far to trust this forecast',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ The one word in this unit that costs money, and it is *probably*', [
  '*The second order will probably come in February.* — how likely is that? Seven in ten? Nine? Five?',
  '⚠ **Two people read that sentence and one of them orders stock.** The writer meant *rather more likely than not*. The reader heard *expect it*, bought against it, and has the stock in May.',
  '**So 14.3 is the cycle this unit exists for**, and the rest is the equipment. ⚠ The rule is in the box and it is four words long: **give the number, or give the range.** *Probably* on its own is not a forecast, it is a feeling with a date attached — and the person who acts on it is never the person who wrote it.',
], C.lyellow, C.orange));

// ======================= CYCLE 14.1 =======================
out.push(pb());
out.push(h2('14.1  Four lines and a number each'));
out.push(p('**Function:** stating a forecast   ·   **Grammar:** _will_ and _is likely to_   ·   **Pronunciation:** the contracted _\'ll_ and the full _will_ for contrast'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say four things about your work next month that you are willing to put a number on. Then say which of the four you would be happy to be quoted on.'));
out.push(p('**b**  Which is a forecast and which is a hope? _Sales will rise. · Sales are likely to rise by about 10 per cent. · I think sales will be better. · Sales will be between 40 and 46 million._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub refuse to accept?   **A** the figures   **B** a forecast with no number on any line   **C** the date'));
out.push(p('**b**  Listen again. **1** What four lines does he ask for? **2** What does he say a forecast without a number is?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.1  "Put a number on each line"', [
  ['Mr Ayoub', 'Your February note says trade will be better, the export side will grow, costs will be stable and the counter will be quieter.'],
  ['Nour', 'That is what I think will happen.'],
  ['Mr Ayoub', 'It is four opinions. Put a number on each line and three of them will change.'],
  ['Nour', 'Trade — between 44 and 50 million, against 46 in January.'],
  ['Mr Ayoub', 'So trade is flat, or very slightly up. You wrote *better*.'],
  ['Nour', '…Yes. *Better* was the feeling and the range is flat.'],
  ['Mr Ayoub', 'Export?'],
  ['Nour', 'One order, maybe two. If it is one, that is about 8 million; if it is two, 16.'],
  ['Mr Ayoub', 'Then the export line is the only one in the note that can move the month, and you put it second. Costs?'],
  ['Nour', 'Stable, except the plater, who has put his price up 12 per cent — so about 2 million more.'],
  ['Mr Ayoub', 'Which is not stable. The counter?'],
  ['Nour', 'February is always quiet. Call it 15 per cent down on January, which is what it was last February and the one before.'],
  ['Mr Ayoub', '⚠ **Now it is a forecast.** Four lines, four numbers, and the shape of the month has changed completely: the counter is down, costs are up, trade is flat, **and the whole of February depends on whether Beirut orders once or twice.** ⚠ A forecast with no number on any line is not a forecast; **it is a mood, and a mood cannot be wrong, which is the problem with it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_will_ and _is likely to_, with a number on every line**',
  table(['Form', 'What it claims', 'Example'], [
    ['**will** + figure', 'you are prepared to be quoted', 'Costs **will be** about 2 million higher.'],
    ['**is likely to** + figure', 'more likely than not', 'Trade **is likely to be** between 44 and 50.'],
    ['**will be between … and …**', 'a range you believe', 'Between 44 and 50 million.'],
    ['**about · roughly · in the order of**', 'one figure, loosely held', '**about** 8 million'],
    ['⚠ no figure at all', '⚠ **a mood, not a forecast**', '~~Trade will be better.~~'],
  ], [1.7, 1.6, 2.1]),
  '⚠ **Put a number on each line and the lines change.** *Better* became *flat*; *stable* became *2 million higher*. ⚠ **The number is not decoration on the sentence; it is a test the sentence has to pass.**',
  '⚠ **A forecast with no number cannot be wrong, and that is the objection to it.** A mood is unfalsifiable. ⚠ Nobody can plan against it, nobody can check it afterwards, and nobody can be held to it — including you.',
  '⚠ **Put the line that can move the month first.** In the sample it is the export order, and it was written second because it was the newest and not because it was the largest.',
  '⚠ **A range is a stronger statement than a single figure, not a weaker one.** *Between 44 and 50* says you have thought about both ends. *About 47* says you have thought about one point and are hiding the thinking.',
  '**Practise:** Turn each mood into a line with a number. 1 trade will be better 2 costs are stable 3 the counter will be quiet 4 we will be busier in the spring 5 the new supplier will be cheaper',
  '**Useful phrases:**  between 44 and 50  ·  about 8 million  ·  it is likely to be …  ·  put a number on it  ·  that is a mood, not a forecast  ·  which line can move the month?',
  '**Pronunciation – _\'ll_ and _will_.** 🔊 **Track 14.2** Listen: _costs\'ll be about two million higher_ (ordinary) · _costs WILL be higher_ (⚠ contradicting somebody who has said they will not). Repeat four of each, and notice that the full form is an argument.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a forecast with no numbers in it; B asks for a number on each line until the shape changes. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'My note says __________ will be __________, __________ will __________, and __________ will be __________.'],
  ['B', 'That is __________ opinions. Put a number on each line.'],
  ['A', '__________ — between __________ and __________, against __________ last month.'],
  ['B', 'So __________ is __________. You wrote __________.'],
  ['A', '…Yes. __________ was the feeling and the range is __________.'],
  ['B', '⚠ And which line can move the month?'],
  ['A', '__________, because __________.'],
]));
out.push(table(['Role card 1 — February at Sham Trading', 'Role card 2 — a quarter of your own'], [[
  '"Trade will be better, export will grow, costs stable, the counter quieter." ⚠ With numbers: trade 44–50 against 46 (**flat**), export 8 or 16 depending on one order, costs **2 million higher** because of the plater, counter **15 per cent down** as in the two previous Februaries.',
  'Use your own next quarter. ⚠ B\'s job is to refuse every line without a figure and to ask at the end which single line can move the quarter — **and most people discover it is not the line they wrote first.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four lines as moods and then as numbers. ⚠ Then say which line changed most when the number went on it.'));
out.push(PHRASE_CARD(['between 44 and 50', 'about 8 million', 'it is likely to be …', 'put a number on it', 'that is a mood', 'which line moves the month?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write **four** lines of your own forecast for next month. Give each a figure and say what it was before you put the figure on.'));
out.push(table(['The line', 'What I would have written', 'The figure', 'What it became'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1.6, 1.4, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I would have written _______. With a number it is _______, which is _______ and not _______. The line that can move my month is _______._'));
out.push(p('**Listener task:** count how many lines in the room changed direction when a number went on them. ⚠ It is usually about a third, and they were all going to be sent as opinions.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _trade will be better_ and _costs are stable_ where one supplier has risen 12 per cent. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the forecast board, and answer the questions.'));
out.push(box(null, [
  '**FEBRUARY FORECAST BOARD. Prepared 28 January by N. Mansour. ⚠ Four lines. The line that can move the month is the second.**',
  table(['The line', 'January outturn', 'February — the range', 'Direction', 'What it rests on'], [
    ['⚠ **Export, Beirut**', '8.1', '⚠ **8 or 16**', '⚠ **one order or two**', 'Ms Tannous\'s own February programme, which I have not seen'],
    ['Trade counter and account sales', '46.0', '44–50', 'flat', 'the two previous Februaries, both quiet'],
    ['Costs', '31.4', '33–34', '**up about 2**', 'the plater, 12 per cent, in writing on the 22nd'],
    ['Walk-in trade, Baghdad Street', '6.2', '5.0–5.6', '**down about 15 per cent**', 'the same month in the two previous years — the store opened on 8 June, so there are two Februaries of history and no more'],
  ], [1.6, 0.9, 1.1, 1.2, 2.2]),
  '⚠ **What the board says that the sentence did not.** My note said trade would be better. **The board says trade is flat, costs are up two million, and the walk-in trade is down fifteen per cent** — so February is a worse month than January **unless** Beirut orders twice, and better by about six million if it does.',
  '**So the month has one question in it and not four.** ⚠ *Does Beirut order once or twice in February?* Everything else on this board is within a million of last month, and I have spent three days on the three lines that cannot change the answer.',
  '⚠ **And the honest line about the top row.** It rests on **Ms Tannous\'s own February programme, which I have not seen.** ⚠ I am forecasting her behaviour from one order, in January, from a buyer I have never met. **That is the thinnest piece of evidence on this page and it is under the only line that matters.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which line can move the month, and what does it rest on?'));
out.push(item('2', 'What does the board say that the original sentence did not?'));
out.push(item('3', 'Why does the writer say three days were spent on the wrong lines?'));
out.push(box('Writer\'s box', [
  '**The forecast board — four parts:** **a table of lines with last month\'s outturn, the range, the direction and what it rests on** → ⚠ **what the board says that your sentence did not** → **the one question the month actually contains** → ⚠ **the honest line about your thinnest evidence.**',
  '⚠ **Last month\'s outturn goes next to every range.** A forecast without the previous figure beside it cannot be read: *44–50* means nothing until the reader sees *46*.',
  '⚠ **The *what it rests on* column is the one that gets cut and must not be.** It is where a reader discovers that the biggest line rests on the least evidence, ⚠ **which is the normal case and not the exception.**',
  '⚠ **Reduce the month to its one question.** *Does Beirut order once or twice?* ⚠ A board with four lines on it invites four conversations; a board that names its single question gets one conversation and a decision.',
  '⚠ **Then say where you have spent your effort and whether it was the right place.** *I have spent three days on the three lines that cannot change the answer.* ⚠ It is an uncomfortable sentence and it is the most useful one on the page, because it changes what you do next month.',
  '⚠ **Name your thinnest evidence yourself, under the line it supports.** *One order, in January, from a buyer I have never met.* A reader who finds it for you will discount the whole board; a reader you hand it to will trust the rest.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a forecast board for your own next month (**60 words or more**). Use the frame.'));
out.push(p('**______________ FORECAST BOARD. Prepared ______________ by ______________. ⚠ ______________ lines. The line that can move the month is ______________.**   ⚠ **______________** | ______________ | ⚠ **______________** | ⚠ **______________** | ______________   ______________ | ______________ | ______________ | ______________ | ______________   ______________ | ______________ | ______________ | ______________ | ______________   ⚠ **What the board says that my sentence did not.** ______________, so ______________ unless ______________.   **So the month has one question in it.** ⚠ ______________?   ⚠ **And the honest line.** The top row rests on ______________, which is ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 and one move — name the reader, then quote, ask, stop', [
  '"**I am reading this as the person who has to buy stock against it.** The box says give last month\'s outturn next to every range. Your second line says 44 to 50 and I cannot tell whether that is growth — what was January?"',
  '⚠ A forecast has at least two readers: the one who writes the plan and the one who spends money. **Say which you are, because they need different things from the same page.**',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **which line on this board can move the month?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Last month\'s outturn beside every range', ''],
  ['A *what it rests on* entry for every line', ''],
  ['The month reduced to one question', ''],
  ['The thinnest evidence named, under the line it supports', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *what it rests on* column. The class says which line is strongest and which is weakest, and whether the weakest is also the biggest.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a forecast you have seen that was a mood (**140 to 180 words**). Say what it said, what it would have said with numbers on it, and who acted on it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _does every line carry a figure?_   ? _who spent money on the line with the least evidence?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did somebody act on the line that had the least evidence behind it? Usually all three — because it is the line with the most upside in it.'));
out.push(box('Homework', ['Write your final text. Then take one sentence you have written about next month and put a number and a *what it rests on* against it (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 14.2 =======================
out.push(pb());
out.push(h2('14.2  It may be the exchange rate'));
out.push(p('**Function:** naming a cause you are not sure of   ·   **Grammar:** _may · might · could_ for present possibility   ·   **Pronunciation:** the stress that separates two candidate causes'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of something at your work that changed last month and nobody has explained. Say two causes it could be.'));
out.push(p('**b**  Which of these commits you to the cause? _It is the exchange rate. · It may be the exchange rate. · It could be the exchange rate, or it could be the new price list._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are the two candidate causes?   **A** the weather and the holiday   **B** the exchange rate and the new price list   **C** the driver and the van'));
out.push(p('**b**  Listen again. **1** Why does Nadia refuse to choose between them yet? **2** What test does she propose?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.3  "Two causes, both plausible"', [
  ['Nour', 'Account sales are down eleven per cent and the counter is up four. Why?'],
  ['Nadia', 'Two things changed in the same fortnight, which is the worst possible arrangement. The rate moved, and we issued a new price list on the 6th.'],
  ['Nour', 'So it is the price list.'],
  ['Nadia', 'It may be the price list. It may equally be the rate, because our account customers buy in bulk and a bulk buyer feels a rate move before a counter customer does.'],
  ['Nour', 'Which do you think?'],
  ['Nadia', 'I think it is probably the price list, and I am not going to write that, because *probably* in a note to Mr Ayoub becomes *because* by the time it reaches the Thursday meeting.'],
  ['Nour', 'Then what do you write?'],
  ['Nadia', '⚠ *Account sales are down eleven per cent. Two things changed in the same fortnight: the rate and the new price list. On the evidence I cannot separate them.* And then the sentence that earns the note: **here is how we could.**'],
  ['Nour', 'How could we?'],
  ['Nadia', 'The price list went to account customers only. The counter list did not change. ⚠ **So if it is the price list, the counter should be unaffected — and the counter is up four per cent.** That points at the list. But the rate would also push a bulk buyer to wait, which would show as account sales down **and** no change at the counter.'],
  ['Nour', 'So both explanations fit what we can see.'],
  ['Nadia', '⚠ **Both fit, which means what we can see does not decide it, and saying so is the finding.** The test is to telephone four account customers and ask. ⚠ **A cause you cannot separate from the evidence you have is separated by asking somebody, not by thinking harder.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Two candidate causes, and the sentence that does not choose**',
  table(['Form', 'Strength', 'Example'], [
    ['**It is** X', 'you are certain and will be quoted', 'It **is** the price list.'],
    ['**It may be** X', 'possible, no weight given', 'It **may be** the price list.'],
    ['**It could be** X **or** Y', '⚠ two candidates, neither preferred', '**It could be** the rate **or** the list.'],
    ['**It is probably** X', 'you prefer one — ⚠ in writing this becomes *because*', 'It is **probably** the list.'],
    ['⚠ **On the evidence I cannot separate them.**', 'the honest finding', 'and here is how we could'],
  ], [2.1, 1.7, 2]),
  '⚠ **When two things changed in the same fortnight, the evidence you have cannot separate them**, and no amount of thinking will change that. ⚠ Say so in those words: *on the evidence I cannot separate them.*',
  '⚠ **Then earn the note with the next sentence: *here is how we could.*** A note that reports an undecidable question and stops has told the reader nothing to do. ⚠ **The test is almost always to ask somebody**, and it is almost always cheap: *telephone four account customers.*',
  '⚠ **Be careful with *probably* in writing.** *I think it is probably the list* spoken is a hedge; written, it reaches a meeting as *because the list*. ⚠ **A hedge survives a conversation and does not survive a forwarded note.**',
  '⚠ **Say what each cause would predict, and check.** *If it is the list, the counter should be unaffected.* ⚠ A cause that predicts nothing different from its rival is not a cause you can test — and discovering that both predict the same thing **is** the finding.',
  '⚠ *May*, *might* and *could* are all available here and the difference between them is small. ⚠ **What matters is not which you choose but that you have not used *is*.**',
  '**Practise:** Give two candidate causes and say what each would predict. 1 a drop in account sales 2 a late delivery 3 a supplier\'s price rise 4 more returns than usual 5 a quiet Saturday',
  '**Useful phrases:**  two things changed in the same fortnight  ·  it could be … or …  ·  on the evidence I cannot separate them  ·  here is how we could  ·  if it is X, then Y should …  ·  telephone four and ask',
  '**Pronunciation – separating two candidates.** 🔊 **Track 14.4** Listen: _it could be the RATE // or it could be the new price LIST_ — equal weight, a clear break, and no falling tone until the end. ⚠ Said with the stress on the second one, it is a preference, and listeners will hear a conclusion. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names one cause confidently; B supplies a second candidate and the test that would separate them. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ are down __________ per cent. It is __________.'],
  ['B', 'It may be __________. Two things changed in the same __________: __________ and __________.'],
  ['A', 'Which do you think?'],
  ['B', 'I think __________, and I am not going to write it, because *probably* becomes *because* by __________.'],
  ['A', 'Then what do you write?'],
  ['B', '⚠ On the evidence I cannot separate them. And then: **here is how we could.** __________.'],
]));
out.push(table(['Role card 1 — the account sales', 'Role card 2 — the returns'], [[
  'Account sales down eleven per cent, counter up four. Two changes in one fortnight: the rate moved and a new price list went to account customers only. ⚠ Both causes fit what is visible. The test: telephone four account customers and ask.',
  'Returns up from about two a week to nine. Two changes: a new carton from Ms Shamsi, and the warehouse moved to loading from the north door while the covered bay was repaired. ⚠ The test: look at **where** the nine came from — if the damage is crushing, it is handling; if it is damp, it is the north door.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the two candidate causes, what each would predict, and the test. ⚠ Then say whether the test is a thought or a question to somebody.'));
out.push(PHRASE_CARD(['it could be … or …', 'two things changed at once', 'I cannot separate them', 'here is how we could', 'if it is X, then Y', 'telephone four and ask']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** changes at your work that nobody has explained. For each: two candidate causes, what each predicts, and the test.'));
out.push(table(['What changed', 'Cause A', 'Cause B', 'What would separate them'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.3, 1.3, 1.3, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ changed. It could be _______ or _______. What would separate them is _______, and that is a _______ and not a thought._'));
out.push(p('**Listener task:** count the tests in the room that are questions to somebody. ⚠ Then ask how many of those telephone calls have already been made — usually none, and they take four minutes.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it is because of the price list_ with no test, and _it must be the rate_ where two things changed. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note, and answer the questions.'));
out.push(box(null, [
  '**ACCOUNT SALES, JANUARY — TWO CANDIDATE CAUSES. 30 January. N. Sayegh.**',
  '**What happened.** Account sales 11 per cent below December; counter sales 4 per cent above.',
  '**The two things that changed in the same fortnight.** The rate moved on about the 4th. ⚠ **A new price list went out to account customers on the 6th, and the counter list did not change.**',
  table(['', 'If it is the price list', 'If it is the rate'], [
    ['Account sales', 'down — the list raised bulk prices', 'down — a bulk buyer waits when the rate moves'],
    ['Counter sales', 'unaffected — list unchanged', 'unaffected or slightly up — small buyers do not wait'],
    ['⚠ **What we would see**', '⚠ **exactly what we see**', '⚠ **exactly what we see**'],
  ], [1.2, 2.4, 2.4]),
  '⚠ **On the evidence I cannot separate them, and the table shows why: both causes predict what we are looking at.** Anybody who tells you which it is this week is guessing with a confident voice.',
  '**Here is how we could.** Four account customers, four telephone calls, one question each: *did you order less in January, and was it the price or the month?* ⚠ **Bassel can do it on Tuesday in under an hour**, and three of the four will say something useful even if they do not answer the question asked.',
  '⚠ **And the reason this matters more than being right.** If it is the list, we can change the list. **If it is the rate, there is nothing to change and the correct action is to do nothing** — and *do nothing* is a decision that needs evidence exactly as much as *change the list* does, ⚠ **because it is the one everybody will later say was negligence.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why can the writer not separate the two causes?'));
out.push(item('2', 'What is the test, who does it and how long does it take?'));
out.push(item('3', 'Why does the writer say *do nothing* needs evidence too?'));
out.push(box('Writer\'s box', [
  '**Two candidate causes — five parts:** **what happened, in figures** → **the two things that changed** → ⚠ **a table of what each cause would predict** → ⚠ **the honest line, and the test** → **why it matters which.**',
  '⚠ **The prediction table is the document.** Two columns, one per cause, and a bottom row saying what you would see. ⚠ When the bottom row is the same under both columns, you have proved the question is undecidable from here — **which is a result, not a failure.**',
  '⚠ **Write the honest line in plain words.** *On the evidence I cannot separate them.* ⚠ And add the sentence that protects the reader: *anybody who tells you which it is this week is guessing with a confident voice.*',
  '⚠ **Give the test with its owner, its day and its length.** *Four telephone calls, Bassel, Tuesday, under an hour.* ⚠ A test without those four things will not be done.',
  '⚠ **End with why it matters which.** *If it is the list we can change it; if it is the rate the correct action is to do nothing.* ⚠ **And say that *do nothing* needs evidence too, because it is the decision everybody will later call negligence.**',
  '⚠ **Never let *probably* out of the room in writing.** It survives a conversation, where somebody can question it; it does not survive being forwarded, where it arrives as *because*.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a two-candidate-cause note about something unexplained at your work (**60 words or more**). Use the frame.'));
out.push(p('**______________ — TWO CANDIDATE CAUSES. ______________. ______________.**   **What happened.** ______________.   **The two things that changed in the same ______________.** ______________. ⚠ ______________.   | If it is ______________ | If it is ______________   ______________ | ______________ | ______________   ⚠ **What we would see** | ⚠ ______________ | ⚠ ______________   ⚠ **On the evidence I cannot separate them.** ______________.   **Here is how we could.** ______________ — ______________ can do it on ______________ in ______________.   ⚠ **Why it matters which.** If it is ______________, ______________. If it is ______________, ______________ — and ______________ needs evidence too.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **does the bottom row differ between your two columns?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What happened, in figures', ''],
  ['A prediction table, one column per cause', ''],
  ['The honest line, in plain words', ''],
  ['A test with an owner, a day and a length', ''],
  ['Why it matters which — including *do nothing*', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their bottom row. The class says whether the question can be settled from the evidence in the room.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time a cause was decided too quickly at your work (**140 to 180 words**). Say what the other candidate was, who settled it, and what the cost of being wrong turned out to be.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is the second candidate stated as seriously as the first?_   ? _what would have separated them, and would it have been expensive?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many would the test have cost less than an hour? Usually all three — and in all three nobody did it because somebody senior had already said what the cause was.'));
out.push(box('Homework', ['Write your final text. Then take one thing nobody has explained at your work, write two candidate causes and the test, and say who could do the test and when (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 14.3 =======================
out.push(pb());
out.push(h2('14.3  How likely is it? Give the number or give the range'));
out.push(p('**Function:** saying how likely   ·   **Grammar:** percentages, _in ten_, and the hedges that correspond to them   ·   **Pronunciation:** the number said so that it is heard as a number'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say *probably* aloud, then say what number you mean by it. Compare with three other people. The spread is usually from six in ten to nine in ten.'));
out.push(p('**b**  Put these in order and give each a number: _almost certainly · probably · possibly · unlikely · there is a chance._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has gone wrong?   **A** a price   **B** two people meant different numbers by _probably_ and one of them bought stock   **C** a date'));
out.push(p('**b**  Listen again. **1** What did each of them mean by *probably*? **2** What rule does Bassel propose?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.5  "What did you mean by probably?"', [
  ['Bassel', 'You wrote that Beirut would probably order again in February. I have bought against it.'],
  ['Nour', 'How much?'],
  ['Bassel', 'Twenty-four cartons, which is the same as the trial. If the order does not come they sit until the summer.'],
  ['Nour', 'I meant — more likely than not. Six in ten. Perhaps seven.'],
  ['Bassel', 'I read *probably* as nine in ten. That is what I mean by it when I write it.'],
  ['Nour', 'Then we have a word that means six to one of us and nine to the other, and twenty-four cartons have been bought on the difference.'],
  ['Bassel', 'And neither of us was careless. ⚠ **The word is the problem, and it is a very common word.**'],
  ['Nour', 'So I should have written six in ten.'],
  ['Bassel', '⚠ Or a range: *between five and seven in ten*. Either one is actionable — at six in ten I buy twelve cartons, not twenty-four, and at nine I buy twenty-four. **The number is not decoration; it is the quantity.**'],
  ['Nour', 'And if I genuinely do not know?'],
  ['Bassel', 'Then say that, and say what would move it. ⚠ *I do not know. One order, from a buyer I have never met, is not enough to forecast a second. What would move it is her own February programme, which I could ask for.* ⚠ **That is a better note than any number I could have invented, because it tells me to buy nothing yet and tells you what to do on Tuesday.**'],
  ['Nour', 'So the rule is: a number, a range, or *I do not know* with the thing that would move it.'],
  ['Bassel', '⚠ **And never the bare adverb.** *Probably* on its own is a feeling with a date attached — and the person who acts on it is never the person who wrote it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Likelihood, said so that somebody can act on it**',
  table(['The hedge', 'What most people mean', 'In a note, write'], [
    ['**almost certainly**', '9 or more in 10', '**9 in 10** · about 90 per cent'],
    ['**probably**', '⚠ **6 to 9 in 10 — the spread is the problem**', '⚠ **the number, or a range**'],
    ['**there is a chance · possibly**', '2 to 4 in 10', '**3 in 10** · between 2 and 4'],
    ['**unlikely**', '1 or 2 in 10', '**1 in 10**'],
    ['⚠ **I do not know**', 'genuinely not forecastable', '⚠ **and what would move it**'],
  ], [1.7, 2.2, 1.9]),
  '⚠ **Give the number, or give the range.** *Probably* on its own is a feeling with a date attached, and ⚠ **the person who acts on it is never the person who wrote it.**',
  '⚠ **The number is the quantity.** At six in ten the reader buys twelve cartons; at nine in ten, twenty-four. ⚠ The difference between the two words is not tone, **it is money on a shelf.**',
  '⚠ **A range is allowed and is often more honest than a point.** *Between five and seven in ten.* It says where your uncertainty is, which a single number conceals.',
  '⚠ ***I do not know* is a legitimate forecast, and it has two parts.** The admission, and ⚠ **what would move it** — *her own February programme, which I could ask for.* Without the second part it is an abdication; with it, it is the most useful line on the page.',
  '⚠ **Nobody in this exchange was careless, and the key says so.** Two careful people used a common word and meant three in ten apart. ⚠ **The repair is a convention, not more care.**',
  '**Practise:** Put a number or a range on each, and say what you would do differently at each end. 1 a second export order 2 a supplier\'s price rise 3 a customer paying on time 4 a quiet February 5 a delivery arriving on the day promised',
  '**Useful phrases:**  what did you mean by probably?  ·  six in ten, perhaps seven  ·  between five and seven in ten  ·  I do not know, and what would move it is …  ·  the number is the quantity  ·  never the bare adverb',
  '**Pronunciation – the number heard as a number.** 🔊 **Track 14.6** Listen: _SIX in ten, perhaps SEVen_ — both numbers stressed, the rest flat. ⚠ Said with the stress on *ten*, the figure is lost and the listener keeps their own number. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has acted on a hedge; B finds out what each meant by it and proposes the repair. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'You wrote that __________ would probably __________. I have __________ against it.'],
  ['B', 'How much?'],
  ['A', '__________. If it does not __________, __________.'],
  ['B', 'I meant __________ in ten. Perhaps __________.'],
  ['A', 'I read *probably* as __________ in ten. ⚠ That is what I mean by it when I write it.'],
  ['B', 'So we have a word that means __________ to one of us and __________ to the other.'],
  ['A', '⚠ And neither of us was careless. The repair is __________, not more care.'],
]));
out.push(table(['Role card 1 — the twenty-four cartons', 'Role card 2 — the overtime'], [[
  '*Beirut will probably order again in February.* Written meaning six in ten; read as nine in ten; twenty-four cartons bought. ⚠ At six in ten the right purchase is twelve. The repair: the number, or *between five and seven in ten*.',
  '*We will probably need Saturday cover in March.* ⚠ Written by a manager meaning four in ten; read by a supervisor as eight, who has promised two people the work. **The cost of the gap here is not stock, it is two people who have arranged their month.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write both meanings of the hedge, the action taken, and the action that the writer\'s number would have justified. ⚠ Then say who pays for the gap.'));
out.push(PHRASE_CARD(['what did you mean by probably?', 'six in ten, perhaps seven', 'between five and seven', 'I do not know, and …', 'the number is the quantity', 'neither of us was careless']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** hedges you have used at work. Give the number you meant, the number a reader might take, and what each would justify.'));
out.push(table(['What I wrote', 'The number I meant', 'The number they might take', 'What each would justify'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.7, 1.1, 1.2, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I wrote _______. I meant _______ in ten. A reader might take _______ in ten, which would justify _______ instead of _______._'));
out.push(p('**Listener task:** collect the numbers the room means by *probably*. ⚠ Write the lowest and the highest on the board and leave them there for the rest of the unit.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it will probably come_ with a purchase attached, and _there is a good chance_ with no number. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note, and answer the questions.'));
out.push(box(null, [
  '**A SECOND BEIRUT ORDER IN FEBRUARY — HOW LIKELY, AND WHAT TO BUY. 29 January. N. Mansour.**',
  '⚠ **My figure is six in ten, and I have written the number because the word I would have used means nine in ten to the person who buys the stock.**',
  table(['', 'What it rests on', 'What it would justify buying'], [
    ['**9 in 10**', 'a written order, or her own programme showing February', '24 cartons, as the trial'],
    ['⚠ **6 in 10 — my figure**', '⚠ **one order in January, and nothing else**', '⚠ **12 cartons, and the rest on a two-week lead'],
    ['**3 in 10**', 'a trial that went badly, or silence past the 10th', 'nothing'],
  ], [1, 2.6, 2.2]),
  '**Why six and not more.** One order is one order. ⚠ **I have never met her, I have not seen her own February programme, and the trial was twenty-four cartons, which for a trading house is a sample and not a commitment.** Against that: she asked for the documents in a particular form, which is what a buyer does when she intends to repeat.',
  '**Why six and not less.** She paid in eleven days against thirty, and she asked about our lead time for a hundred cartons. ⚠ **People do not ask about a hundred cartons for fun.**',
  '⚠ **What would move it, and by when.** Her own February programme, which I can ask for on Tuesday. ⚠ **If she sends it, this becomes a nine or a three within a week, and the twelve cartons become twenty-four or nothing** — so the right decision now is twelve, and the right decision on Tuesday is to telephone.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the writer\'s figure, and why is the number written rather than a word?'));
out.push(item('2', 'Give one reason for *six and not more* and one for *six and not less*.'));
out.push(item('3', 'What would move the figure, and what would that change?'));
out.push(box('Writer\'s box', [
  '**A likelihood note — five parts:** ⚠ **the number, first, and why it is a number** → **a table of what each level would rest on and justify** → **why not more** → **why not less** → ⚠ **what would move it, and by when.**',
  '⚠ **The number goes in the first line.** A reader who stops after one sentence has the forecast; a reader who stops after your reasoning has nothing.',
  '⚠ **Say why you wrote a number instead of a word**, once, in the note. *The word I would have used means nine in ten to the person who buys the stock.* ⚠ It teaches the convention to the reader, and after two notes you will not have to write it again.',
  '⚠ **The table turns the likelihood into a quantity.** Three rows — high, yours, low — each with what it would rest on and what it would justify buying. **That is what makes the note actionable rather than interesting.**',
  '⚠ **Write both halves: why not more, and why not less.** A note with only one of them is an argument, not a forecast. ⚠ *People do not ask about a hundred cartons for fun* is a *why not less*, and it is the sentence that stops a reader discounting you.',
  '⚠ **End with what would move it and when you will know.** *If she sends it, this becomes a nine or a three within a week.* ⚠ A forecast with a date on which it will improve is worth more than a confident forecast with no such date.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a likelihood note about something you are uncertain of (**60 words or more**). Use the frame.'));
out.push(p('**______________ — HOW LIKELY, AND WHAT TO ______________. ______________. ______________.**   ⚠ **My figure is ______________ in ten, and I have written the number because ______________.**   **9 in 10** | ______________ | ______________   ⚠ **______________ — my figure** | ⚠ ______________ | ⚠ ______________   **3 in 10** | ______________ | ______________   **Why ______________ and not more.** ______________. Against that: ______________.   **Why ______________ and not less.** ______________. ⚠ ______________.   ⚠ **What would move it, and by when.** ______________, so the right decision now is ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be the person who spends money on it** — then ask one question: **what does your number tell me to buy?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The number in the first line', ''],
  ['A table turning each level into a quantity', ''],
  ['Why not more', ''],
  ['Why not less', ''],
  ['What would move it, and by when', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their number and their *what would move it*. The class says what it would do with the money today.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time a hedge was read differently by two people (**140 to 180 words**). Say what each meant, what was done, and who paid.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is there a number anywhere?_   ? _what would the writer\'s own number have justified?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the reader\'s number higher than the writer\'s? Usually all three — a hedge is read optimistically by whoever has to act, because action needs a reason.'));
out.push(box('Homework', ['Write your final text. Then take one hedge you are about to send and replace it with a number or a range, and write what each end would justify (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 14.4 =======================
out.push(pb());
out.push(h2('14.4  Where the adverb goes'));
out.push(p('**Function:** putting the hedge where you mean it   ·   **Grammar:** adverb position — _will probably_ and _probably will_   ·   **Pronunciation:** the two positions heard side by side'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say both aloud: _We will probably ship on Tuesday._ · _We probably will ship on Tuesday._ Which answers a doubt and which simply forecasts?'));
out.push(p('**b**  Put the adverb in: _probably_ — _They have ___ sent it. · It is ___ the list. · We are ___ going to need cover. · He ___ knows._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar notice about the sentence?   **A** a figure   **B** the adverb is hedging the wrong word   **C** the date'));
out.push(p('**b**  Listen again. **1** What was being hedged, and what did the writer mean to hedge? **2** What does he say the position of an adverb decides?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.7  "You have hedged the wrong word"', [
  ['Mr Attar', 'Your note says *the figures were probably checked against the gate sheets*.'],
  ['Nour', 'They were. I am fairly sure they were.'],
  ['Mr Attar', 'Then that sentence does not say what you mean. As written, you are telling me the checking is in doubt — which for an auditor is the only interesting thing on the page.'],
  ['Nour', 'What does it say?'],
  ['Mr Attar', 'It says: *somebody may or may not have checked these figures.* If what you mean is that they were checked but you are not certain which sheets, write that. ⚠ **The hedge has to sit next to the thing you are uncertain about, and in your sentence it is sitting next to the one thing you are sure of.**'],
  ['Nour', 'I am sure the checking happened. I am not sure every sheet was there.'],
  ['Mr Attar', 'Then: *the figures were checked against the gate sheets; two of the January sheets were probably missing.* ⚠ Two sentences, and the doubt is now on the sheets, where it belongs.'],
  ['Nour', 'And *we will probably ship on Tuesday* against *we probably will ship on Tuesday*?'],
  ['Mr Attar', 'The first is a forecast. The second is an answer to somebody who has said you will not. ⚠ **The second position is argumentative and it is almost never what you want in writing**, because the reader has not contradicted you yet.'],
  ['Nour', 'So the ordinary place is after the first auxiliary.'],
  ['Mr Attar', '*Will probably · have probably · is probably · are probably going to.* ⚠ And with a single verb and no auxiliary, before the verb: *he probably knows*. ⚠ **It is a small rule and it decides which half of your sentence a reader doubts** — which in a document about figures is the whole of what the document is for.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Adverb position — and the word it puts in doubt**',
  table(['Position', 'Example', 'What it hedges'], [
    ['after the **first auxiliary**', 'We **will probably** ship on Tuesday.', 'the shipping — ordinary forecast'],
    ['⚠ **before** the auxiliary', 'We **probably will** ship on Tuesday.', '⚠ **a denial** — answering somebody'],
    ['before a **single verb**', 'He **probably knows**.', 'the knowing'],
    ['after **be**', 'It **is probably** the list.', 'the identification'],
    ['⚠ next to the wrong word', '~~The figures were **probably checked**.~~', '⚠ **the checking — which you were sure of**'],
  ], [1.6, 2.1, 2.1]),
  '⚠ **The hedge must sit next to the thing you are uncertain about.** *The figures were probably checked* doubts the checking. *The figures were checked; two sheets were probably missing* doubts the sheets. ⚠ **Same facts, and one of the two sentences starts an audit finding.**',
  '⚠ **When there are two doubts and one sentence, use two sentences.** A single sentence has one adverb position and cannot carry a hedge on two different words.',
  '⚠ **The pre-auxiliary position is an argument.** *We probably will* answers a contradiction. ⚠ In writing the reader has not contradicted you yet, so it reads as defensive — **and a defensive forecast invites the doubt it is defending against.**',
  '⚠ **Other adverbs behave the same way and matter as much:** *only*, *also*, *even*. ⚠ *We only sent two* and *we sent only two* are different statements, and in a claim letter the difference is the claim.',
  '⚠ **Read your own hedged sentence aloud and ask which word is in doubt.** It takes four seconds and it is the only reliable test.',
  '**Practise:** Move the adverb so that the doubt falls where it belongs. 1 the load was probably counted 2 we probably will deliver on Thursday 3 the invoice was only raised yesterday 4 she has probably signed it 5 the sheets are probably in the file',
  '**Useful phrases:**  will probably · have probably · is probably  ·  the hedge is next to the wrong word  ·  two doubts, two sentences  ·  which word is in doubt?  ·  that position is an argument',
  '**Pronunciation – the two positions.** 🔊 **Track 14.8** Listen: _we will PROBably ship_ (forecast) · _we PROBably WILL ship_ (⚠ answering a denial — both words stressed). Repeat four of each, and hear that the second one needs an opponent.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a sentence with the hedge in the wrong place; B says what it doubts and moves it. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'My note says *__________ were probably __________*.'],
  ['B', 'Then it tells the reader that __________ is in doubt. Is that what you mean?'],
  ['A', 'No. I am sure __________. I am not sure __________.'],
  ['B', '⚠ Then two sentences: *__________ were __________; __________ were probably __________.*'],
  ['A', 'And the doubt is now on __________.'],
  ['B', '⚠ Where it belongs. Read it aloud and ask which word is in doubt.'],
]));
out.push(table(['Role card 1 — the figures and the sheets', 'Role card 2 — only and also'], [[
  '*The figures were probably checked against the gate sheets.* ⚠ The writer is sure the checking happened and unsure that all the sheets were there. Repair: two sentences, with the hedge on the sheets.',
  '*We only sent two cartons on the 14th.* against *We sent only two cartons on the 14th.* ⚠ The first says sending was all we did; the second says two was the quantity. **In a claim letter the second is the claim and the first is an excuse**, and nobody means the first.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the repair for the class – **without the book**.'));
out.push(p('**Listener task:** write the original sentence, the word it doubted, and the repaired version. ⚠ Then say what the original would have caused if it had gone out.'));
out.push(PHRASE_CARD(['will probably · have probably', 'the hedge is in the wrong place', 'two doubts, two sentences', 'which word is in doubt?', 'that position is an argument', 'only two, not only sent']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** hedged sentences from your own writing. Say which word each doubts, and whether that was your intention.'));
out.push(table(['The sentence', 'Which word it doubts', 'What I meant to doubt', 'The repair'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2, 1.2, 1.2, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I wrote _______. It doubts _______. I meant to doubt _______, so the repair is _______._'));
out.push(p('**Listener task:** count the sentences in the room that doubted something the writer was sure of. ⚠ Then ask what a reader would have asked about each one.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _the load was probably counted_ and _we probably will deliver_ with nobody arguing. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two versions, and answer the questions.'));
out.push(box(null, [
  '**STOCK FIGURES FOR THE AUDIT — THE COVERING NOTE, WRITTEN TWICE. 19 January. N. Mansour.**',
  '**Version 1, which I did not send.** _The January figures were probably checked against the gate sheets. The fourth store was probably counted in December. The reconciliation was done, probably by Nadia._',
  '⚠ **Read it as an auditor.** Three sentences and three doubts, and they fall on **the checking, the counting and the person** — which are the three things an auditor is there to test. ⚠ **Every hedge in version 1 is sitting next to something I am sure about**, and the effect is a page that volunteers three findings that do not exist.',
  '**Version 2, which I sent.** _The January figures were checked against the gate sheets. Two of the January sheets are missing — the 7th and the 22nd — and those two days are reconciled from the order book instead. The fourth store was counted on 18 December. The reconciliation was done by Nadia and signed._',
  '⚠ **What moved.** Nothing in the facts. **The doubt moved from the work to the two missing sheets**, which is where it actually is, and the two dates are named so that he can look at them first.',
  '⚠ **And the hardest part, which is the second sentence.** It tells him something he would otherwise have found: two sheets are missing. ⚠ **A note that hands over its own weakest point is read as reliable about everything else**, whereas version 1 hands over three weaknesses that are not real and keeps the one that is.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What three things did version 1 put in doubt?'));
out.push(item('2', 'What is the only real doubt, and how is it handled in version 2?'));
out.push(item('3', 'Why does the writer say version 2 is read as reliable?'));
out.push(box('Writer\'s box', [
  '**A note written twice — four parts:** **version 1, unsent** → ⚠ **read it as its reader and name what each hedge doubts** → **version 2, sent** → ⚠ **what moved, and the sentence that hands over your own weakest point.**',
  '⚠ **Write the bad version out.** It is not a rhetorical trick; it is the only way to see where your hedges have landed, and you cannot see it in a sentence you are defending.',
  '⚠ **Read it as the reader whose job is to find fault.** The auditor, the buyer, the customer\'s solicitor. ⚠ **A hedge next to your own work is a volunteered finding**, and three of them make a page look worse than its facts.',
  '⚠ **Move the doubt to the thing that is actually doubtful, and name it with dates.** *Two of the January sheets are missing — the 7th and the 22nd.* ⚠ A named weakness is smaller than an unnamed one.',
  '⚠ **Then say what you have done about it in the same sentence.** *Those two days are reconciled from the order book instead.* A weakness with no remedy beside it is read as a hole; with a remedy it is read as a control.',
  '⚠ **And say what moved: nothing in the facts.** ⚠ *A note that hands over its own weakest point is read as reliable about everything else*, and that is the whole return on writing the thing twice.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take something you have to report and write it twice (**60 words or more**). Use the frame.'));
out.push(p('**______________ — WRITTEN TWICE. ______________. ______________.**   **Version 1, which I did not send.** _______________ was probably ______________. ______________ was probably ______________._   ⚠ **Read it as ______________.** The hedges fall on ______________, which is ______________.   **Version 2, which I sent.** _______________ was ______________. ⚠ ______________ is ______________ — ______________ — and ______________ instead._   ⚠ **What moved.** Nothing in the facts. The doubt moved from ______________ to ______________, ⚠ and ______________ is named so that ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be the one whose job is to find fault** — then ask one question: **what does each hedge in version 1 doubt?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Version 1 written out, unsent', ''],
  ['What each hedge doubts, named', ''],
  ['The doubt moved to the real weakness, with dates', ''],
  ['The remedy in the same sentence as the weakness', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read version 1 only. The class says which findings it volunteers that are not real.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a sentence at your work that doubted the wrong thing (**140 to 180 words**). Say what it doubted, what it was meant to doubt, and what the reader did about it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is every hedge next to the right word?_   ? _what did the reader ask about that nobody had doubted?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the reader investigate the hedged thing rather than the real one? Usually all three — a reader follows the adverb, not the writer\'s intention.'));
out.push(box('Homework', ['Write your final text. Then take three hedged sentences from a document of yours, read each aloud, and move any adverb that is doubting the wrong word (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 14.5 =======================
out.push(pb());
out.push(h2('14.5  By the end of October'));
out.push(p('**Function:** saying what will be finished by a date   ·   **Grammar:** the future perfect   ·   **Pronunciation:** the weak _will have_ in ordinary speech'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say three things that will have happened at your work by the end of next month. Then say one that will not have.'));
out.push(p('**b**  Which is right? _By Friday we will finish it. · By Friday we will have finished it. · Until Friday we will have finished it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the future perfect let Nadia show?   **A** a price   **B** that two of the three cannot both be true   **C** a holiday date'));
out.push(p('**b**  Listen again. **1** How many cartons will have shipped by the end of February on each assumption? **2** What does she say the tense is for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.9  "By the end of February"', [
  ['Nadia', 'Say the February plan in the form *by the end of February we will have*.'],
  ['Nour', 'By the end of February we will have shipped forty-eight cartons to Beirut, we will have trained Lina on the export paperwork, and we will have counted the fourth store.'],
  ['Nadia', 'Forty-eight. Where does forty-eight come from?'],
  ['Nour', 'Twenty-four in January and twenty-four in February.'],
  ['Nadia', 'And the February twenty-four is six in ten, by your own note. So by the end of February we will have shipped twenty-four, or forty-eight, and the honest sentence has two numbers in it.'],
  ['Nour', 'By the end of February we will have shipped between twenty-four and forty-eight.'],
  ['Nadia', 'Better. Now the other two. Who trains Lina?'],
  ['Nour', 'Bassel, in February.'],
  ['Nadia', 'And who counts the fourth store?'],
  ['Nour', '…Bassel and Abu Yasser, in February.'],
  ['Nadia', '⚠ Then say both sentences aloud, one after the other, in the future perfect, and listen to them.'],
  ['Nour', '*By the end of February Bassel will have trained Lina. By the end of February Bassel will have counted the fourth store.* …They are the same fortnight and he is one man.'],
  ['Nadia', '⚠ **That is what the tense is for.** The present tense lets you plan two things for one person in February and never notice. ⚠ **Put both in the future perfect and say them next to each other, and the impossibility is audible.**'],
  ['Nour', 'So the tense is a test and not a decoration.'],
  ['Nadia', '⚠ **It is the only tense that forces you to stand at the end of the month and look back**, and the view from there is different: from here February is a list, and from there it is four weeks with one Bassel in them.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The future perfect — standing at the end of the month and looking back**',
  table(['Form', 'Example'], [
    ['**will have** + past participle', 'By the end of February we **will have shipped** 48 cartons.'],
    ['**by** + the date', '**By** Friday · **by** the end of October · **by** the time he comes'],
    ['⚠ not **until**', '~~Until Friday we will have finished~~ — *by*, not *until*'],
    ['negative', 'We **will not have counted** the fourth store.'],
    ['with a range', 'We will have shipped **between 24 and 48**.'],
  ], [1.8, 3]),
  '⚠ **The tense is a test, not a decoration.** Put two plans for the same person in the future perfect, say them one after the other, and ⚠ **the impossibility is audible**: *Bassel will have trained Lina. Bassel will have counted the fourth store.* One man, one fortnight.',
  '⚠ **It is the only tense that makes you stand at the end of the period and look back.** From here a month is a list; from there it is four weeks with one of each person in them.',
  '⚠ **If the figure depends on a likelihood, the sentence carries a range.** *We will have shipped between 24 and 48* — because the second 24 is six in ten, and a single figure would be a forecast pretending to be an arithmetic.',
  '⚠ **Use the negative deliberately.** *We will not have counted the fourth store by the end of February.* ⚠ A plan that states one thing it will **not** have done is read as a plan somebody has checked.',
  '⚠ ***By* and not *until*.** *Until* describes a period; *by* describes a deadline. The commonest error here is a direct translation.',
  '**Practise:** Put each in the future perfect and then say them in pairs to find the clash. 1 train somebody 2 count a store 3 ship a consignment 4 collect a debt 5 replace a machine',
  '**Useful phrases:**  by the end of February we will have …  ·  between 24 and 48  ·  we will not have …  ·  say them one after the other  ·  he is one man  ·  stand at the end and look back',
  '**Pronunciation – the weak _will have_.** 🔊 **Track 14.10** Listen: _we\'ll\'ve shipped forty-eight_ — /wiləv/, almost one syllable, and the stress on *shipped* and *forty-eight*. ⚠ Learners say *we will HAVE* and lose the content words. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A states a month\'s plan; B makes A put every line in the future perfect and finds the clash. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Say the __________ plan in the form *by the end of __________ we will have*.'],
  ['A', 'By the end of __________ we will have __________, we will have __________, and we will have __________.'],
  ['B', '__________. Where does __________ come from?'],
  ['A', '__________ and __________.'],
  ['B', 'And the second one is __________ in ten, so the honest sentence has __________ numbers in it. Now: who does __________?'],
  ['A', '__________.'],
  ['B', 'And who does __________?'],
  ['A', '…__________. ⚠ They are the same fortnight and he is one man.'],
]));
out.push(table(['Role card 1 — February at Sham Trading', 'Role card 2 — a month of your own'], [[
  'Three lines: ship 48 to Beirut (⚠ really 24–48, the second order being six in ten), train Lina (Bassel), count the fourth store (Bassel and Abu Yasser). ⚠ The clash is Bassel twice in one fortnight, and it is invisible in the present tense.',
  'Use your own next month. ⚠ B\'s job is to make every line a future perfect and then read the lines **in pairs**, listening for the same name twice. **Most people find one clash and are surprised by it, because the list looked fine.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exercise for the class – **without the book**.'));
out.push(p('**Listener task:** write the three future-perfect sentences and the clash. ⚠ Then write the one sentence in the negative that the plan should contain.'));
out.push(PHRASE_CARD(['by the end of February we will have …', 'between 24 and 48', 'we will not have …', 'say them one after the other', 'he is one man', 'by, not until']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write **five** future-perfect lines for your own next month, with the person against each, and find the clash.'));
out.push(table(['By the end of the month we will have…', 'Who', 'Which fortnight', 'Clash?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2.4, 0.9, 1.1, 0.9]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _By the end of the month we will have _______ and _______. Both are _______ in the _______ fortnight, and he is one person. What we will not have done is _______._'));
out.push(p('**Listener task:** count the clashes in the room. ⚠ Then ask how many were visible in the original list — almost none, which is the argument for the tense.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _until Friday we will have finished_ and _by the end of February we will ship 48_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**BY THE END OF FEBRUARY — WHAT WILL HAVE HAPPENED, AND WHAT WILL NOT. 29 January. N. Mansour.**',
  table(['By the end of February we will have…', 'Who', 'Fortnight', 'Figure'], [
    ['shipped to Beirut', 'Fadi, Mr Jaber', 'both', '⚠ **between 24 and 48 cartons** (the second order is 6 in 10)'],
    ['trained Lina on the export paperwork', 'Bassel', '**second**', '4 sessions of about an hour'],
    ['collected the November balances', 'Hala', 'first', 'about 2.1 million of 2.4'],
    ['issued the new counter price list', 'me', 'first', 'one list, dated, held 14 days'],
  ], [2.3, 0.9, 0.8, 1.9]),
  '⚠ **And what we will NOT have done by the end of February.** We will not have counted the fourth store. ⚠ **It was in the January programme, it is not in this one, and this is the second month it has moved** — and the reason is that the only two people who can count it are Bassel and Abu Yasser, and Bassel is training Lina in the same fortnight.',
  '**Why the negative line is on the page.** Because the alternative is to write it in again and move it in March. ⚠ **A plan that carries one line it will not have done is read as a plan somebody has checked**, and a plan that quietly drops a line teaches its readers that the plan is decoration.',
  '⚠ **The clash I found by writing this out.** *Bassel will have trained Lina. Bassel will have counted the fourth store.* ⚠ **Both were in my January note, in the present tense, and I did not see it.** The two sentences said one after the other in the future perfect took four seconds to disprove — **and the fourth store is now a March line with a name against it rather than a February line with a wish.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What range is given for the shipping, and why is it a range?'));
out.push(item('2', 'What will not have been done, and for what reason?'));
out.push(item('3', 'How did the writer find the clash?'));
out.push(box('Writer\'s box', [
  '**By the end of the month — four parts:** **the table of future-perfect lines with who, which fortnight and the figure** → ⚠ **what you will NOT have done** → **why the negative line is on the page** → ⚠ **the clash you found by writing it out.**',
  '⚠ **The fortnight column is what makes the clash visible.** A month is too long to see a conflict in and a day is too short to plan in; ⚠ **the fortnight is the unit at which one person\'s two commitments collide.**',
  '⚠ **A figure that depends on a likelihood is written as a range, with the likelihood in brackets.** *Between 24 and 48 (the second order is 6 in 10).*',
  '⚠ **Write one *will not have* line and mean it.** ⚠ *A plan that carries one line it will not have done is read as a plan somebody has checked*, and a plan that quietly drops a line teaches its readers that the plan is decoration.',
  '⚠ **Say how many months the dropped line has moved.** *This is the second month it has moved.* ⚠ Two is a scheduling fact; three is a decision somebody has to take, and counting is what forces the decision.',
  '⚠ **Then report the clash you found, with the two sentences in full.** It shows the reader the method, and the method is the transferable part: **two future perfects, said one after the other, with the same name in both.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *by the end of the month* for your own next month (**60 words or more**). Use the frame.'));
out.push(p('**BY THE END OF ______________ — WHAT WILL HAVE HAPPENED, AND WHAT WILL NOT. ______________. ______________.**   ______________ | ______________ | ______________ | ⚠ **______________**   ______________ | ______________ | ______________ | ______________   ______________ | ______________ | ______________ | ______________   ⚠ **And what we will NOT have done by the end of ______________.** We will not have ______________. ⚠ It was in ______________ and this is the ______________ month it has moved, and the reason is ______________.   **Why the negative line is on the page.** ______________.   ⚠ **The clash I found by writing this out.** *______________ will have ______________. ______________ will have ______________.* ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **does any name appear twice in one fortnight?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Future perfect on every line, with who and which fortnight', ''],
  ['A range where the figure depends on a likelihood', ''],
  ['One *will not have* line', ''],
  ['How many months the dropped line has moved', ''],
  ['The clash, with both sentences written out', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *will not have* line. The class says how many months it has been moving and who should decide about it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a line at your work that has moved from month to month (**140 to 180 words**). Say how many months, why it keeps moving, and what would settle it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _future perfect throughout?_   ? _how many months has it moved, and who could settle it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had the line moved three times or more? Usually two of three — and in those the line needs a decision, not a date.'));
out.push(box('Homework', ['Write your final text. Then write your next month as future-perfect lines with a fortnight column, and name the clash (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 14.6 =======================
out.push(pb());
out.push(h2('14.6  The assumptions under the forecast'));
out.push(p('**Function:** printing the assumptions a forecast stands on   ·   **Grammar:** the assumptions block — *this forecast assumes… · it fails if…*   ·   **Pronunciation:** reading three assumptions aloud so that each is heard separately'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Take any forecast you have made. Name three things that must stay true for it to hold. Then say which of the three is least likely to.'));
out.push(p('**b**  Which of these is an assumption and which is a forecast? _The rate will hold at its January level. · Costs will be up two million. · Ms Shamsi\'s price will not change before April._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub do with the forecast?   **A** rejects the figures   **B** reads the assumptions first and finds one that has already failed   **C** changes the date'));
out.push(p('**b**  Listen again. **1** Which assumption had already failed when the forecast was written? **2** What does he say he does with any forecast?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.11  "I read the assumptions first"', [
  ['Mr Ayoub', 'Your February board. I have not read the figures yet.'],
  ['Nour', 'They are on the first page.'],
  ['Mr Ayoub', '⚠ I never read the figures first. I read the three lines under them, because the figures are arithmetic and the assumptions are the forecast.'],
  ['Nour', 'The three assumptions. One: the rate holds at its January level. Two: Ms Shamsi\'s price does not change before April. Three: the plater\'s twelve per cent is the only cost rise.'],
  ['Mr Ayoub', 'Number two. When did you write this?'],
  ['Nour', 'Yesterday, the 28th.'],
  ['Mr Ayoub', 'Ms Shamsi telephoned me on the 27th. She is putting her carton price up four per cent from the 1st of March.'],
  ['Nour', '…Then assumption two is already wrong and I wrote it the day after it failed.'],
  ['Mr Ayoub', 'Which is not a criticism of you; it is the reason the block exists. ⚠ **An assumption nobody has written down cannot be checked by the one person who happens to know it has failed.** I knew on the 27th and I would not have thought to tell you, because I did not know your forecast depended on it.'],
  ['Nour', 'So the block is for the readers and not for me.'],
  ['Mr Ayoub', '⚠ **It is a list of questions you are asking the room.** Three lines, each of which somebody in this building may already know the answer to. ⚠ **And you only find out by printing them.**'],
  ['Nour', 'What does four per cent from March do to February?'],
  ['Mr Ayoub', 'Nothing. ⚠ **And that is the second thing the block gives you**: when an assumption fails you can see at once whether it matters, instead of re-doing the whole board. February stands. **March is a different forecast and you now have three weeks\' notice of it**, which you would not have had.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The assumptions block — a list of questions you are asking the room**',
  table(['The shape', 'Example'], [
    ['**This forecast assumes:**', 'three or four lines, numbered'],
    ['each line is **checkable by somebody**', 'the rate holds at its January level'],
    ['⚠ **It fails if:**', 'the rate moves more than 3 per cent'],
    ['⚠ **and then:**', 'the export line is unaffected; costs rise about 1.2'],
    ['**the weakest one, named**', '⚠ assumption 2 is the one I am least sure of'],
  ], [1.8, 3]),
  '⚠ **Read the assumptions before the figures.** *The figures are arithmetic and the assumptions are the forecast.* ⚠ A board whose assumptions are sound and whose arithmetic is wrong can be repaired in ten minutes; the other way round, nothing can be repaired.',
  '⚠ **An assumption nobody has written down cannot be checked by the one person who knows it has failed.** ⚠ *I knew on the 27th and I would not have thought to tell you, because I did not know your forecast depended on it.* **That sentence is the whole argument for the block.**',
  '⚠ **The block is a list of questions you are asking the room**, and you only find out by printing them. Three lines, each of which somebody in the building may already be able to answer.',
  '⚠ **Say what happens *if* each one fails, in one clause.** *It fails if the rate moves more than three per cent, and then the export line is unaffected and costs rise about 1.2.* ⚠ **That is what lets a reader see at once whether a failure matters**, instead of re-doing the board.',
  '⚠ **Name the one you are least sure of.** A block of three equally confident lines tells the reader nothing about where to look.',
  '**Practise:** Write three assumptions under a forecast of your own, each with its *it fails if*. ⚠ Then read them to somebody who works near you and see whether one of them has already failed.',
  '**Useful phrases:**  this forecast assumes  ·  it fails if  ·  and then  ·  I read the assumptions first  ·  the one I am least sure of is  ·  you only find out by printing them',
  '**Pronunciation – three assumptions, heard separately.** 🔊 **Track 14.12** Listen: _one // the rate holds at its January level // two // Ms Shamsi\'s price does not change before April // three // the plater\'s twelve per cent is the only rise._ ⚠ The numbers are stressed and there is a full stop after each. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads three assumptions aloud; B says which one they can check and whether it still holds. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'This forecast assumes. One: __________. Two: __________. Three: __________.'],
  ['B', 'Number __________. When did you write this?'],
  ['A', '__________.'],
  ['B', '⚠ __________ told me on __________ that __________.'],
  ['A', '…Then assumption __________ is already wrong.'],
  ['B', 'And does it matter for __________?'],
  ['A', '__________. ⚠ So __________ stands and __________ is a different forecast.'],
]));
out.push(table(['Role card 1 — the February board', 'Role card 2 — a board of your own'], [[
  'Three assumptions: the rate holds; Ms Shamsi\'s price is unchanged before April; the plater\'s 12 per cent is the only rise. ⚠ B knows Ms Shamsi telephoned on the 27th: plus four per cent from 1 March. **February stands; March is a different forecast, with three weeks\' notice.**',
  'Use your own forecast. ⚠ B must try to check each assumption from what they actually know, and say *I cannot check that one* where they cannot. **An assumption nobody in the room can check is the one to put a date against rather than a hope.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three assumptions, which one failed, and whether the failure mattered to the period being forecast. ⚠ Then say how much notice the block bought.'));
out.push(PHRASE_CARD(['this forecast assumes', 'it fails if', 'and then', 'I read the assumptions first', 'the one I am least sure of', 'you only find out by printing them']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write **four** assumptions under a forecast of your own. For each: who could check it, its *it fails if*, and what then.'));
out.push(table(['The assumption', 'Who could check it', 'It fails if…', 'And then…'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.8, 1.2, 1.5, 1.5]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My forecast assumes _______. The one I am least sure of is _______. It could be checked by _______, and if it fails, _______._'));
out.push(p('**Listener task:** count the assumptions in the room that somebody else in the room could check. ⚠ Then check two of them aloud, and expect one to have failed already.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for an assumption that is really a forecast, and an *it fails if* with no *and then*. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the assumptions block, and answer the questions.'));
out.push(box(null, [
  '**FEBRUARY FORECAST — THE ASSUMPTIONS UNDER IT. 29 January. N. Mansour. ⚠ Read these before the figures.**',
  table(['#', 'This forecast assumes', 'Who can check it', 'It fails if', 'And then'], [
    ['1', 'the rate holds within 3 per cent of its January level', 'Nadia, weekly', 'it moves more than 3 per cent', 'account sales fall about 1.5; the export line is unaffected'],
    ['2', '⚠ **Ms Shamsi\'s carton price is unchanged before April**', '⚠ **Mr Ayoub — she telephones him**', 'she gives notice of a rise', '⚠ **February stands; March costs rise about 0.9** — ⚠ **this one failed on the 27th, two days before I wrote it**'],
    ['3', 'the plater\'s 12 per cent is the only cost rise', 'Abu Yasser', 'a second supplier gives notice', 'costs rise beyond the 33–34 range'],
    ['4', 'Beirut orders once or twice, not three times', 'me, on Tuesday', 'she orders a hundred cartons', '⚠ we cannot supply it from stock and the whole board is wrong in our favour'],
  ], [0.3, 2.2, 1.3, 1.5, 2.4]),
  '⚠ **The one I am least sure of is number 4, and it is the only one that could be wrong in our favour.** Everything else on this page is a way of losing money; a hundred-carton order would be the best thing that happened this year and we could not supply it, ⚠ **which means the assumption needs a plan and not a figure.**',
  '⚠ **Assumption 2 had already failed when I wrote it.** Ms Shamsi gave Mr Ayoub notice on the 27th of four per cent from 1 March. He did not tell me, **because he did not know my forecast depended on it** — and that is not his fault, it is what the block is for.',
  '**What the block has bought.** February stands, because a March price rise does not touch it. ⚠ **And March is now a forecast I am writing three weeks early instead of one I would have written in arrears** — which is the whole return on printing four lines nobody asked for.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which assumption had already failed, and how was it found?'));
out.push(item('2', 'Why does the writer say assumption 4 needs a plan and not a figure?'));
out.push(item('3', 'What has the block bought?'));
out.push(box('Writer\'s box', [
  '**The assumptions block — five parts:** ⚠ **the instruction to read it before the figures** → **a table: assumption · who can check it · it fails if · and then** → ⚠ **the one you are least sure of** → **any that have already failed** → **what the block has bought.**',
  '⚠ **Every assumption carries a name.** *Nadia, weekly. Mr Ayoub — she telephones him. Abu Yasser.* ⚠ An assumption with nobody against it will never be checked by anybody, and the name is what turns the block into a set of questions to the room.',
  '⚠ **The *and then* column is what makes a failure survivable.** It lets a reader see in four seconds whether a failed assumption matters to the period, instead of asking you to re-do the board.',
  '⚠ **Name the one you are least sure of, and say which way it could be wrong.** ⚠ **An assumption that could be wrong in your favour is the one nobody plans for** — *a hundred-carton order would be the best thing that happened this year and we could not supply it.*',
  '⚠ **Report an assumption that has already failed, in the block, with its date.** *This one failed on the 27th, two days before I wrote it.* ⚠ And say plainly that it is nobody\'s fault: *he did not know my forecast depended on it.*',
  '⚠ **End with what the block has bought**, in time. *March is a forecast I am writing three weeks early instead of one I would have written in arrears.* ⚠ That sentence is what gets the block printed again next month.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the assumptions block under a forecast of your own (**60 words or more**). Use the frame.'));
out.push(p('**______________ — THE ASSUMPTIONS UNDER IT. ______________. ______________. ⚠ Read these before the figures.**   1 | ______________ | ______________ | ______________ | ______________   2 | ⚠ **______________** | ⚠ **______________** | ______________ | ⚠ ______________   3 | ______________ | ______________ | ______________ | ______________   ⚠ **The one I am least sure of is ______________**, and it could be wrong in ______________ favour, which means it needs ______________.   ⚠ **Already failed.** ______________ on ______________, and ______________ did not tell me because ______________.   **What the block has bought.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **which of these could I check for you today?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Read-these-first instruction', ''],
  ['A name against every assumption', ''],
  ['*It fails if* and *and then* on every line', ''],
  ['The weakest one named, with which way it could be wrong', ''],
  ['What the block has bought, in time', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their assumptions aloud to the class. ⚠ The class checks them. Expect at least one to have failed already.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a forecast that failed because of an assumption nobody had written down (**140 to 180 words**). Say who knew it had failed, when, and why they did not say.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _does every assumption carry a name?_   ? _who knew, and why did they not say?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did somebody already know? Usually all three — and in all three they did not know that anybody\'s plan depended on what they knew.'));
out.push(box('Homework', ['Write your final text. Then print three assumptions under a forecast of yours, with a name against each, and ask one of those people today (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 14.7 =======================
out.push(pb());
out.push(h2('14.7  Review & Mediate: how far to trust this forecast'));
out.push(p('**Function:** telling somebody how much weight a forecast will bear   ·   **Review:** a number on every line · two candidate causes · the number or the range · adverb position · the future perfect · the assumptions block'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 14 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What is wrong with a forecast line that has no number on it?',
  '**2** When two things changed in the same fortnight, what is the honest sentence and what must follow it?',
  '**3** What are the two acceptable ways of saying how likely something is, and the third that is also acceptable?',
  '**4** Where does *probably* go, and what happens if it sits next to the wrong word?',
  '**5** What does the future perfect let you see that the present tense hides?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Lina ask that nobody had asked?   **A** for the figures   **B** how much weight the forecast will bear   **C** for a copy'));
out.push(p('**b**  Listen again. **1** What three questions does Nour give her? **2** What does Nour say about the difference between a wrong forecast and an untrustworthy one?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.13  "How much can I lean on this?"', [
  ['Lina', 'I have the February board. May I ask something about it rather than in it?'],
  ['Nour', 'Go on.'],
  ['Lina', 'How much weight will it bear? Because I am going to use it to decide what to order for the counter, and I do not know whether to treat it as a fact or as a guess.'],
  ['Nour', 'Nobody has asked me that in four years of writing them.'],
  ['Lina', 'Then what is the answer?'],
  ['Nour', 'Three questions, and you can ask them of any forecast anybody ever gives you. First: **which line can move the total, and how good is the evidence under that line?** Here it is the Beirut order, six in ten, resting on one order from a buyer I have never met.'],
  ['Lina', 'So the biggest line has the thinnest evidence.'],
  ['Nour', '⚠ Which is normal and not a scandal. The large lines are the new ones and the new ones have the least history. Second: **which assumptions have a name against them, and has anybody actually asked those people?** Here, two of four have been asked.'],
  ['Lina', 'And the third?'],
  ['Nour', '⚠ **What was the last one of these wrong by?** My January board said account sales 44 to 48 and they were 46. It said costs 30 to 31 and they were 31.4. ⚠ **So on the evidence of one month, these boards are about half a million out on costs and right on sales** — and that is the only honest answer to your question, because it is measured rather than claimed.'],
  ['Lina', 'So I can lean on the counter line and not on the export line.'],
  ['Nour', 'You can lean on the counter line because it has two Februaries behind it, and you must not order anything on the export line at all until Tuesday. ⚠ **And a forecast that is wrong is not the same thing as a forecast you cannot trust.** This one will be wrong. ⚠ **What makes it trustworthy is that you can see where it is likely to be wrong, by how much, and which way** — and that is the difference between a document and an opinion.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – the three questions you ask of any forecast**',
  table(['The question', 'The answer about this board'], [
    ['Which line can move the total, and ⚠ **how good is the evidence under it**?', 'Beirut, 6 in 10, one order from a buyer never met'],
    ['Which assumptions have a name, and ⚠ **have those people been asked**?', 'two of four have been asked'],
    ['⚠ **What was the last one wrong by?**', 'sales right; costs about 0.5 under'],
  ], [2.6, 3]),
  '⚠ **The largest line usually has the thinnest evidence, and that is normal and not a scandal.** The big lines are the new ones, and the new ones have the least history behind them.',
  '⚠ **The third question is the one nobody asks and the only one that is measured.** *My January board said 44 to 48 and it was 46; it said costs 30 to 31 and they were 31.4.* ⚠ **A forecaster who can tell you what their last forecast was wrong by is worth two who cannot.**',
  '⚠ **A forecast that is wrong is not the same thing as a forecast you cannot trust.** ⚠ *This one will be wrong. What makes it trustworthy is that you can see where it is likely to be wrong, by how much, and which way* — and that is the difference between a document and an opinion.',
  '⚠ **Say which lines will bear weight and which will not, by name.** *Lean on the counter line; order nothing on the export line until Tuesday.* ⚠ A reader given a whole board and no guidance will lean on the line with the largest number in it.',
  '**Practise:** Hand a forecast to somebody and answer the three questions about it. ⚠ Keep a note of what each of your forecasts was wrong by, from this month onwards — **it is the only answer to question three and it takes a line in a notebook.**',
  '**Useful phrases:**  how much weight will it bear?  ·  which line can move the total?  ·  have those people been asked?  ·  what was the last one wrong by?  ·  lean on this line, not that one  ·  it will be wrong; that is not the same as untrustworthy',
  '**Pronunciation – the three questions, asked aloud.** 🔊 **Track 14.14** Listen: _which LINE can move the total // which asSUMPtions have a NAME // what was the LAST one wrong BY._ ⚠ Each ends falling, and the third is the one to say slowly. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A hands over a forecast; B asks the three questions. ⚠ B must press on the third one even when A has no answer.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'Hand over the February board. ⚠ The trap is question one: most people name the largest line and stop, without saying how good the evidence under it is. **The answer has two halves and the second half is the one that matters.**',
  'Hand over a forecast of your own. ⚠ The trap is question three. Expect to have no answer, and say so: *I have never written down what my last one was wrong by.* **That is the true answer and it is also the finding** — and the repair is one line in a notebook each month.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the handover for the class – **without the book**.'));
out.push(p('**Listener task:** write the three answers. ⚠ Then say which lines of the forecast will bear weight and which will not, in the handing-over person\'s own words.'));
out.push(PHRASE_CARD(['how much weight will it bear?', 'which line moves the total?', 'how good is that evidence?', 'have they been asked?', 'what was the last one wrong by?', 'lean on this, not that']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher pairs you with somebody whose work you do not know. Hand over a forecast of yours and collect their three answers.'));
out.push(table(['The three questions', 'What they answered'], [
  ['Which line can move the total, and the evidence under it', ''],
  ['Which assumptions have a name, and who has been asked', ''],
  ['⚠ What was the last one wrong by', ''],
], [2.4, 3.6]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what the third answer was, or that there was not one. This is the **second** unit of this book, and the thing nobody writes down is this: **nobody keeps a record of what their own forecasts were wrong by, so every forecast in a building is presented with the same confidence as every other, and a reader has no way of telling a line with two years behind it from a line with one telephone call behind it — which means the most careful forecaster in the room is trusted exactly as much as the least, and both of them are trusted according to how certain they sound.**'));
out.push(p('_My last forecast said _______ and the outturn was _______, so it was wrong by _______. The line you can lean on is _______ and the line you cannot is _______._'));
out.push(p('**Listener task:** add to the Book 2 office-word list: _a base case · an outturn · a variance · a margin of error · to revise downwards · a plausible range._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 7)', 10));
out.push(p('⚠ **This unit practises Part 7: filling in a form from a text.** Read the extract, then complete the forecast record. Write **one, two or three words or a number** in each space.'));
out.push(box(null, [
  '**Extract from the February board and its covering note, 29 January.**',
  '_Four lines. The line that can move the month is the export line: between 8 and 16 million, depending on whether Beirut orders once or twice, which I put at six in ten. Trade counter and account sales 44 to 50 against 46 in January, which is flat. Costs 33 to 34 against 31.4, up about two million, on the plater\'s twelve per cent, given in writing on the 22nd. Walk-in trade at Baghdad Street 5.0 to 5.6 against 6.2, down about fifteen per cent, on the evidence of the same month in the two previous years. This forecast assumes four things; the one I am least sure of is the fourth, that Beirut orders once or twice and not three times, because a hundred-carton order could not be supplied from stock. Assumption 2 failed on the 27th: Ms Shamsi gave notice of four per cent from 1 March, which does not affect February. My January board was right on sales and about half a million under on costs._',
]));
out.push(table(['FORECAST RECORD', ''], [
  ['Month forecast', '______________'],
  ['Number of lines', '______________'],
  ['The line that can move the month', '______________'],
  ['Its range', '______________'],
  ['Likelihood of the second order', '______________'],
  ['Direction of the cost line', '______________'],
  ['Evidence for the cost line', '______________'],
  ['Assumption the writer is least sure of', '______________'],
  ['Assumption that has already failed', '______________'],
  ['Last board\'s error on costs', '______________'],
], [2, 3]));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 2 — business correspondence, 60 to 80 words.** Here: telling a colleague how much weight your forecast will bear before they spend money against it.',
  'The shape: **the line they may lean on, and why** · ⚠ **the line they may not, and until when** · ⚠ **what your last forecast was wrong by.**',
  '⚠ **In eighty words the third part earns its place over everything else.** Anybody can send a forecast; almost nobody tells a reader what their last one was wrong by, and that single figure is what converts a page of numbers into something a reader can weigh.',
  '⚠ And give the date on which the weak line will improve: *order nothing on the export line until Tuesday.* ⚠ A prohibition with no end date will be ignored by Thursday.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** A colleague is going to spend money against your forecast. Write to them (**60 to 80 words**). Give **the line they may lean on**, ⚠ **the line they may not and until when**, and ⚠ **what your last forecast was wrong by.**'));
out.push(p('______________, before you order against the ______________ board: you can lean on ______________, because ______________. ⚠ Do not order anything on ______________ until ______________, because ______________ is only ______________ in ten and rests on ______________. ⚠ And so that you can weigh it: my last board said ______________ and the outturn was ______________, so it was ______________ out on ______________ and right on ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The line they may lean on, with why', ''],
  ['The line they may not, with an end date', ''],
  ['⚠ What the last forecast was wrong by', ''],
  ['60 to 80 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full February forecast for your own work (**140 to 180 words**): the board with ranges and last month\'s outturn, the one question the month contains, the assumptions block with a name against each, and what your last forecast was wrong by.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then start the one-line record: this month\'s forecast, the outturn when it comes, and the difference. ⚠ It is the only answer to the third question and it takes a line a month (60+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 14 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  Which is a forecast rather than a mood?   a) trade will be better   b) trade will be between 44 and 50 million   c) trade is looking up',
  '2  Two things changed in the same fortnight and both explain the figures. Write:   a) it is probably the price list   b) on the evidence I cannot separate them   c) it must be the rate',
  '3  You mean six in ten. Write:   a) it will probably happen   b) six in ten, perhaps seven   c) there is a good chance',
  '4  You are sure the checking happened but not that every sheet was there. Write:   a) the figures were probably checked against the sheets   b) the figures were checked; two sheets are probably missing   c) the figures probably were checked',
  '5  _We ___ ship on Tuesday._ Nobody has contradicted you. Put *probably*:   a) we probably will   b) we will probably   c) probably we will',
  '6  _By Friday we ___ it._   a) will finish   b) will have finished   c) have finished',
  '7  An assumption in a block must carry ___.   a) a figure   b) a name   c) a percentage',
  '8  The third question to ask of any forecast is ___.   a) who wrote it   b) what the last one was wrong by   c) when it was written',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 14.15** Listen to the exchange. Complete the note.   The line that can move the total: ______   Its likelihood: ______   The evidence under it: ______   Assumptions with a name that have been asked: ______   What the last board was wrong by: ______'));
out.push(dlg('Track 14.15  Audio script (read after the check)', [
  ['Lina', 'How much weight will the February board bear?'],
  ['Nour', 'Three questions. Which line can move the total, and how good is the evidence under it? Here it is the Beirut order, six in ten, resting on one order from a buyer I have never met.'],
  ['Lina', 'And the second?'],
  ['Nour', 'Which assumptions have a name against them, and has anybody asked those people. Two of the four have been asked.'],
  ['Lina', 'And the third?'],
  ['Nour', 'What was the last one wrong by. My January board was right on sales and about half a million under on costs.'],
  ['Lina', 'So I can lean on the counter line and not on the export line.'],
]));
out.push(p('**C  Writing.** Write three forecast lines with a range, last month\'s outturn and what each rests on (**60 words or more**), then one assumption with a name against it and its *it fails if*.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 14)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ put a number on every forecast line, and see the line change',
  '☐ name two candidate causes and the test that would separate them',
  '☐ give a likelihood as a number or a range, and say what each end would justify',
  '☐ put the hedge next to the word I am actually unsure of',
  '☐ use the future perfect to find the clash a list hides',
  '☐ print an assumptions block with a name, an *it fails if* and an *and then*',
  '☐ say how much weight a forecast will bear, and what my last one was wrong by',
  '☐ write a forecast board, a two-cause note, a likelihood note and an assumptions block',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Unit 14 · Student\'s Book');
