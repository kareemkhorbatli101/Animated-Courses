// Proactive Business English B2 · Syria Edition · Book 1 · Unit 4 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'exposure · concentration · on current terms · all else equal · on the evidence to date · liquidated damages · to price a risk · an unpriced risk · a stress test · a range of outcomes · an upper bound · a lower bound · a numbered assumption · a modelled case · a single point of dependence · to carry a risk · to be exposed to · a buffer · a correlated risk · to crystallise · a counterparty · a default · a breach of contract · a penalty clause · headroom · to quantify · to refuse to quantify · a bad Tuesday · two things at once · the risk that belongs to the owner · a risk nobody owns · an unquantifiable harm';
const COLLOC = 'to run a stress test · to hold a buffer · to carry an exposure · to take a view on · to put a figure on · to sit on a risk · to spread a dependence · to breach a clause';
const BACK_AT_B2 = 'downside · upside · contingency';

out.push(h1('Unit 4  Risk, Exposure and the Thing You Cannot Model'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**4.1**  write likelihood at range, with the conditions attached',
  '**4.2**  state a concentration in one sentence',
  '**4.3**  model what can be modelled, with the assumptions numbered',
  '**4.4**  name what cannot be modelled, and refuse to put a figure on it',
  '**4.5**  write a stress case — two things happening in the same fortnight',
  '**4.6**  write the risk that belongs to the owner and not to you',
  '**4.7**  Review & Mediate: the exposure that is in no document because nobody owns it',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ Where the Beirut question stands, and what came back', [
  '⚠ **Mr Sayegh\'s advice on the damages clause came in on 6 March and it is three pages.** **The short version: the clause is enforceable, it is not unusual, and at eleven hundred cartons a month it would expose us to about four hundred thousand on a two-week delay.** ⚠ **Nobody in this building had put a figure on it before, including me, including the man who wants to sign it.**',
  '⚠ **And Mr Ayoub has asked for the thing I least wanted to write.** *Put numbers on the risks.* ⚠ **Which is fair, and which is a trap, because two of the four risks in this file cannot have numbers put on them and the two that can will look larger than the two that cannot.**',
  '⚠ **This unit is the risk note.** **It has a quantified half and an unquantifiable half, and it says in its first line which is which** — **because a note that models three risks and is silent about a fourth has told the reader that the fourth does not exist.**',
], C.lyellow, C.orange));

// ======================= CYCLE 4.1 =======================
out.push(pb());
out.push(h2('4.1  Likelihood at range'));
out.push(p('**Function:** saying how likely, and under what conditions   ·   **Grammar:** _on current terms · all else equal · on the evidence to date_   ·   **Pronunciation:** the condition said as part of the claim, not after it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something at work that is *likely*. Then say what would have to stay the same for it to be likely.'));
out.push(p('**b**  Which can be wrong without the speaker being wrong? _We will probably hold the price. · On current terms, and if the plater does not move again, we hold the price until June._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar say a bare *probably* costs you?   **A** nothing   **B** the whole claim, the first time it is wrong   **C** time'));
out.push(p('**b**  Listen again. **1** What three conditions does he name? **2** What does he say the range is for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.1  "Probably, and on what conditions?"', [
  ['Nour', 'The first contract year will probably run to about eleven hundred a month.'],
  ['Mr Attar', '⚠ **Probably on what conditions?**'],
  ['Nour', 'On his figures.'],
  ['Mr Attar', '⚠ **Then say so, because his figures are a condition and not a fact.** ⚠ *On current terms* **is three words and it is the difference between a forecast and a promise.**'],
  ['Nour', 'And if it does not run to eleven hundred?'],
  ['Mr Attar', '⚠ **With the condition in, you were right and the condition changed.** ⚠ **Without it, you were wrong**, and the next thing you forecast is read by a man who remembers.'],
  ['Nour', 'So what are the conditions on this one?'],
  ['Mr Attar', '**Three, and you know all of them.** ⚠ **His volume holds. The border is open. And the press runs three hours a night, which depends on the generator.** **Any one of those goes and your eleven hundred goes.'],
  ['Nour', 'Then should I give a range instead of a number?'],
  ['Mr Attar', '⚠ **Give both, and understand what each is for.** ⚠ **The number is what you plan on. The range is what you survive.** ⚠ **Eight hundred to twelve hundred, and the paper has to work at eight hundred.**'],
  ['Nour', 'And *all else equal*?'],
  ['Mr Attar', '⚠ **That one is for when you cannot list the conditions, and it is weaker.** **Use it once a paper.** ⚠ **A man who writes *all else equal* three times is telling you he has not thought about what else there is.**'],
  ['Nour', 'And *on the evidence to date*?'],
  ['Mr Attar', '⚠ **That is the honest one and nobody uses it.** ⚠ **It says: this is what the file supports, and the file is eleven weeks old.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Likelihood with its conditions attached**',
  table(['Phrase', 'What it claims', 'Use it when'], [
    ['⚠ **_on current terms_**', '⚠ **if the stated terms hold, this follows**', '**the conditions are nameable, and you name them**'],
    ['⚠ **_all else equal_**', 'if nothing else moves', '⚠ **once a paper, and only when you cannot list them**'],
    ['⚠ **_on the evidence to date_**', '⚠ **this is what the file supports, and the file has a date**', '⚠ **the honest one, and nobody uses it**'],
    ['**the number**', '*about eleven hundred a month*', '**what you plan on**'],
    ['⚠ **the range**', '⚠ *eight hundred to twelve hundred*', '⚠ **what you survive — and the paper must work at the lower bound**'],
  ], [1.7, 2.3, 2]),
  '⚠ **A bare *probably* costs you the whole claim the first time it is wrong.** ⚠ **With the condition in, you were right and the condition changed. Without it, you were wrong** — **and the next thing you forecast is read by a man who remembers.**',
  '⚠ **Name the conditions where you can, and there are usually three.** **Here: his volume holds · the border is open · the press runs three hours a night, which depends on the generator.** ⚠ **Any one of those goes and the figure goes.**',
  '⚠ **Give the number and the range, and know what each is for.** ⚠ **The number is what you plan on; the range is what you survive.** **A paper that works only at the number is not a risk note.**',
  '⚠ **_All else equal_ is the weak one.** **Use it once.** ⚠ **A writer who uses it three times is telling the reader he has not thought about what else there is.**',
  '⚠ **_On the evidence to date_ is the honest one and almost nobody writes it** — **because it admits the file has a date and that the date is recent.**',
  '**Practise:** Take four forecasts of yours. Attach the conditions, give a number and a range, and say what happens at the lower bound.',
  '**Useful phrases:**  probably on what conditions?  ·  a condition, not a fact  ·  you were right and the condition changed  ·  the number is what you plan on  ·  the range is what you survive',
  '**Pronunciation – the condition inside the claim.** 🔊 **Track 4.2** Listen twice. ⚠ **The first says *on current terms, eleven hundred a month* as one phrase.** ⚠ **The second says *eleven hundred a month* and then adds *on current terms* after a pause.** **The second sounds like a man adding cover to a claim he has already made** — **and a listener discounts the condition.** Say it four times with the condition first.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A makes a forecast; B asks for the conditions and the range.'));
out.push(dlg(null, [
  ['A', '__________ will probably __________.'],
  ['B', '⚠ **Probably on what conditions?**'],
  ['A', 'On __________.'],
  ['B', '⚠ **Then say so. That is a condition and not a fact. What are the others?**'],
  ['A', '__________, __________ and __________.'],
  ['B', '⚠ **And the range?**'],
  ['A', 'From __________ to __________.'],
  ['B', '⚠ **Does your paper work at __________?**'],
  ['A', '__________.'],
]));
out.push(table(['Role card 1 — three conditions', 'Role card 2 — the lower bound'], [[
  '*The first contract year will probably run to about eleven hundred a month.* ⚠ **B gets all three conditions out: his volume holds · the border is open · the press runs three hours a night on the generator.** → ⚠ *On current terms, about eleven hundred a month, in a range of eight hundred to twelve hundred.*',
  'A has a number and a range. ⚠ **B\'s only job is to ask whether the plan works at the bottom of the range** — **and to keep asking until A does the arithmetic rather than asserting it.** ⚠ **Most plans do not work at their own lower bound**, and a writer who discovers that in a classroom has had a cheap lesson.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three conditions, the number and the range. ⚠ Then say whether the plan works at the lower bound, and how you know.'));
out.push(PHRASE_CARD(['probably on what conditions?', 'a condition, not a fact', 'right, and the condition changed', 'the number is what you plan on', 'the range is what you survive']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** forecasts from your work. Attach conditions and a range to each.'));
out.push(table(['The forecast', 'The three conditions', 'Number, and range', 'Does it work at the lower bound?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 2, 1.4, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I forecast _______, on condition that _______, _______ and _______. The number is _______ and the range is _______. At the lower bound, _______._'));
out.push(p('**Listener task:** count how many plans do not work at their own lower bound. ⚠ Then ask each of those speakers what they would have to change, and expect the answer to be small.'));
out.push(p('**Board clinic:** your teacher writes three forecasts on the board — look for a bare *probably*, and *all else equal* used three times in one paragraph. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE FIRST CONTRACT YEAR — THREE WAYS IT COULD GO. 8 March. N. Mansour. Risk note, part 1 of 4.**',
  '⚠ **On current terms — his volume as stated in his letter of 9 January, the border open, and the second press running three hours a night on the generator — the first contract year runs to about eleven hundred cartons a month. That is the number I have planned on. The range I have planned to survive is eight hundred to twelve hundred.**',
  table(['', 'The case', 'What it needs', 'What happens here'], [
    ['**high — 1,200**', 'his volume holds and he takes the extra autumn run', 'nothing new', '**the second press runs five nights instead of three; we take on one more marker**'],
    ['**planned — 1,100**', '**all three conditions hold**', 'the generator from one until four, every night', '**as costed at paragraph 12**'],
    ['**low — 800**', '⚠ **the border shut for four weeks, or his volume cut by a quarter**', '⚠ **nothing — this is not a failure case, it is a Tuesday**', '⚠ **we are still above the Tannous volume and the contract still pays. The paper works here.**'],
    ['⚠ **below the range — 500**', '⚠ **two of the three conditions gone together**', '—', '⚠ **this is 4.5 and it is a different paragraph**'],
  ], [1.3, 2.1, 2.2, 2.4]),
  '⚠ **The row that matters is the third and it is the one I nearly left out.** **Eight hundred is not a disaster scenario. It is a border closure of four weeks, which happened twice last year**, ⚠ **or a buyer taking a quarter less than he said, which happens to everybody.** **The reason the row is in the note is that the paper has to work at eight hundred, and I did the arithmetic and it does.**',
  '⚠ **And I have written *on the evidence to date* once, in the appendix, and I want to say why.** **The evidence is eleven weeks old. Mr Dallal\'s letter is dated 9 January and we have never traded with him directly.** ⚠ **Every figure in this note about his behaviour is derived from one letter and from Ms Tannous\'s account of four years** — **and the second of those is the better source and is not his.**',
  '⚠ **What I have not written anywhere is *all else equal*.** **I took it out of three paragraphs.** ⚠ **In each of the three I could name the conditions, and once you can name them the phrase is a way of not naming them.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What are the three conditions, and what are the number and the range?'));
out.push(item('2', 'Why is the low case not a failure case?'));
out.push(item('3', 'What did the writer take out of three paragraphs, and why?'));
out.push(box('Writer\'s box', [
  '**Three ways it could go — four parts:** ⚠ **the conditions, named, inside the claim** → **the number and the range, labelled *planned* and *survive*** → **a case table with a *what happens here* column** → ⚠ **and what you took out.**',
  '⚠ **Put the conditions before the number, in the same sentence.** ⚠ *On current terms — his volume as stated, the border open, the press running three hours a night — about eleven hundred a month.* **A condition added after a pause is discounted by every reader.**',
  '⚠ **Label the number and the range for what they are.** ⚠ *The number I have planned on; the range I have planned to survive.* **Two figures doing two jobs, and a reader who does not know which is which will plan on the range.**',
  '⚠ **Make the low case ordinary and prove the paper works there.** ⚠ *This is not a failure case, it is a Tuesday* — **a four-week border closure that happened twice last year, or a buyer taking a quarter less than he said.** **Then do the arithmetic at the lower bound and say that you did.**',
  '⚠ **Use *on the evidence to date* once and say how old the evidence is.** ⚠ *Eleven weeks. His letter is dated 9 January and we have never traded with him directly.* **And name the better source, even when it is not his.**',
  '⚠ **And take out *all else equal* wherever you can name the conditions.** ⚠ **Once you can name them, the phrase is a way of not naming them.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *three ways it could go* for something at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________ — THREE WAYS IT COULD GO. ______________. Risk note, part ______________.**   ⚠ **On current terms — ______________, ______________, and ______________ — ______________ runs to about ______________. That is the number I have planned on. The range I have planned to survive is ______________ to ______________.**   **high** | ______________ | ______________ | ______________   **planned** | ______________ | ______________ | ______________   **low** | ⚠ **______________** | ⚠ **nothing — this is not a failure case, it is a Tuesday** | ⚠ **______________. The paper works here.**   ⚠ **The row that matters is ______________ and it is the one I nearly left out.** **______________ is not a disaster scenario. It is ______________, which ______________.** **The reason it is in the note is that the paper has to work at ______________, and I did the arithmetic and it does.**   ⚠ **And I have written *on the evidence to date* once, and the evidence is ______________ old.** ______________. ⚠ **The better source is ______________, and it is not ______________.**   ⚠ **What I have not written anywhere is *all else equal*.** **I took it out of ______________ paragraphs, because in each of them I could name the conditions.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Conditions named, before the number, in the same sentence', ''],
  ['Number and range labelled *planned* and *survive*', ''],
  ['The low case made ordinary, with the arithmetic done', ''],
  ['The age of the evidence, and the better source named', ''],
  ['*All else equal* removed wherever conditions were nameable', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their low case. ⚠ The class says whether it sounds like a disaster or like a Tuesday — and if it sounds like a disaster, the range is too narrow.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a forecast at your work that was wrong (**200 to 240 words**). Say what was forecast, what conditions were not stated, which one changed, and whether the forecaster was blamed for the condition or for the forecast.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was the condition nameable in advance?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the forecaster blamed for a condition rather than a forecast? Usually all three — ⚠ **and in two of three the condition was nameable in advance and nobody named it.**'));
out.push(box('Homework', ['Write your final text. Then take a forecast you are making now, name its three conditions, give a number and a range, and do the arithmetic at the lower bound (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 4.2 =======================
out.push(pb());
out.push(h2('4.2  Concentration in one sentence'));
out.push(p('**Function:** stating a dependence so that it cannot be read past   ·   **Grammar:** _X per cent of Y would come from one Z_   ·   **Pronunciation:** a single-sentence exposure said without emphasis anywhere'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the largest single thing your workplace depends on — one customer, one supplier, one person, one machine. Say what share it is.'));
out.push(p('**b**  Which cannot be read past? _We would become significantly dependent on a single export customer. · Sixty-one per cent of what we sell would be bought by one man in Beirut whom nobody here has met._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala say happens to the long version?   **A** it is disputed   **B** it is agreed with and forgotten   **C** it is checked'));
out.push(p('**b**  Listen again. **1** What does she say the sentence must do to a Tuesday? **2** What is the one word she takes out?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.3  "Make it a Tuesday"', [
  ['Nour', 'Paragraph 13: *the arrangement would create a significant concentration of revenue in a single counterparty.*'],
  ['Hala', '⚠ **Everybody will agree with that and nobody will remember it on Thursday.**'],
  ['Nour', 'It is accurate.'],
  ['Hala', '⚠ **It is accurate and it is unreadable, because it is about a concept.** ⚠ **Make it a Tuesday.** **What actually happens on a bad Tuesday?'],
  ['Nour', 'If his payment is late, we cannot pay the mill.'],
  ['Hala', '⚠ **Then write that.** ⚠ *Sixty-one per cent of what we sell would be bought by one man in Beirut, and if his payment is four weeks late we cannot pay Mr Attar\'s mill on the twenty-eighth.*'],
  ['Nour', 'That is two facts in one sentence.'],
  ['Hala', '⚠ **It is a figure and a Tuesday, and the Tuesday is what makes the figure arrive.** **Sixty-one per cent is an argument; not paying the mill is a morning.**'],
  ['Nour', 'And the word you want out?'],
  ['Hala', '⚠ **_Significant._** ⚠ **It is doing nothing except telling the reader you think the number is big, which he can see.** **You wrote four paragraphs in Unit 3 about not arguing with adjectives.'],
  ['Nour', 'I also wrote *counterparty*.'],
  ['Hala', '⚠ **Which is a correct word and it is a screen.** ⚠ *One man in Beirut whom nobody here has met.* **Same fact, and now there is a person in it, and a person can be late.**'],
  ['Nour', 'Mr Attar will say *counterparty* is the proper term.'],
  ['Hala', '⚠ **Mr Attar will say it once and then he will say *and if he is late we cannot pay the mill*, because that is the sentence he will remember.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A concentration a reader cannot read past**',
  table(['', 'Unreadable', 'Readable'], [
    ['**the shape**', '*a significant concentration of revenue in a single counterparty*', '⚠ **_sixty-one per cent of what we sell would be bought by one man in Beirut_**'],
    ['⚠ **the Tuesday**', '**absent**', '⚠ **_and if his payment is four weeks late we cannot pay the mill on the twenty-eighth_**'],
    ['**the adjective**', '⚠ **_significant_** — tells the reader you think it is big', '⚠ **gone; the number does that work**'],
    ['**the word for the person**', '⚠ **_counterparty_** — correct, and a screen', '⚠ **_one man in Beirut whom nobody here has met_**'],
  ], [1.5, 2.4, 2.6]),
  '⚠ **A concentration written as a concept is agreed with and forgotten.** ⚠ **Everybody will agree with *a significant concentration* and nobody will remember it on Thursday.**',
  '⚠ **Make it a Tuesday.** ⚠ **Sixty-one per cent is an argument; not paying the mill on the twenty-eighth is a morning** — **and the morning is what makes the figure arrive.**',
  '⚠ **Take out the adjective.** ⚠ *Significant* **does nothing except tell the reader you think the number is big, which he can see** — **and it invites him to disagree about the adjective instead of about the number.**',
  '⚠ **And put a person in it.** ⚠ *Counterparty* **is the correct word and it is a screen; _one man in Beirut whom nobody here has met_ is the same fact with somebody in it, and a person can be late.**',
  '⚠ **One sentence, and do not develop it.** **A concentration stated in one sentence is quoted; a concentration explained over a paragraph is summarised, and the summary is the concept version you took out.**',
  '**Practise:** Take your largest dependence. Write it as one sentence with a figure, a person and a Tuesday in it.',
  '**Useful phrases:**  everybody will agree and nobody will remember  ·  make it a Tuesday  ·  a figure and a morning  ·  take out the adjective  ·  a person can be late',
  '**Pronunciation – an exposure said without emphasis anywhere.** 🔊 **Track 4.4** Listen twice. ⚠ **The first is level throughout — the figure, the man, the mill, the date.** ⚠ **The second leans on *sixty-one*.** **The lean makes it an opinion about a number; the level reading makes it a description of a Tuesday.** Say it four times, level.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a concentration; B makes it a Tuesday.'));
out.push(dlg(null, [
  ['A', '__________ would create a __________ concentration of __________.'],
  ['B', '⚠ **Everybody will agree with that and nobody will remember it on Thursday. What happens on a bad Tuesday?**'],
  ['A', 'If __________, we cannot __________.'],
  ['B', '⚠ **Then write that. One sentence: the figure, the person, and the morning.**'],
  ['A', '__________ per cent of __________ would be __________ by __________, and if __________ we cannot __________ on __________.'],
  ['B', '⚠ **And which adjective comes out?**'],
  ['A', '__________.'],
  ['B', '⚠ **And which word is a screen?**'],
  ['A', '__________.'],
]));
out.push(table(['Role card 1 — the mill on the twenty-eighth', 'Role card 2 — the correct word that hides'], [[
  '*A significant concentration of revenue in a single counterparty* → ⚠ *sixty-one per cent of what we sell would be bought by one man in Beirut, and if his payment is four weeks late we cannot pay the mill on the twenty-eighth.* ⚠ **Out: *significant*. Out: *counterparty*.**',
  'A uses a correct technical word that removes a person — ⚠ *counterparty · the supply base · the resource · headcount · the client portfolio.* **B\'s job is to ask who it is.** ⚠ **The answer is always a named person or a small number of them**, and when A says the name out loud the sentence changes by itself.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the one-sentence version. ⚠ Then ring the adjective that came out and the screen word that came out, and say who the person turned out to be.'));
out.push(PHRASE_CARD(['agreed with and forgotten', 'make it a Tuesday', 'a figure and a morning', 'take out the adjective', 'a person can be late']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** dependences at your work. Write each as one sentence.'));
out.push(table(['What we depend on', 'The share', 'The Tuesday', 'The one sentence'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 0.8, 1.6, 2.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your one sentence. ⚠ Then say which adjective and which screen word you took out of it.'));
out.push(p('**Listener task:** count the sentences with a person in them. ⚠ Then ask how many of the dependences are on one named individual, and expect more than anybody expected.'));
out.push(p('**Board clinic:** your teacher writes three statements on the board — look for *significant* and *material*, and a dependence described as a resource. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE EXPOSURE — ONE SENTENCE EACH. 10 March. N. Mansour. Risk note, part 2 of 4.**',
  table(['', 'The one sentence', 'Share', 'The Tuesday'], [
    ['**1**', '⚠ **_Sixty-one per cent of what we sell would be bought by one man in Beirut whom nobody here has met._**', '**61%**', '⚠ **four weeks late and we cannot pay the mill on the twenty-eighth**'],
    ['**2**', '**_Every carton we make goes through one plater in Aleppo, who put his rate up twelve per cent in March and whom we did not replace._**', '**100%**', '**he stops for a fortnight and nothing ships at all**'],
    ['**3**', '**_The night shift exists because one generator runs from one until four._**', '**100% of night capacity**', '**it fails in August and the second press is idle five months of the year instead of none**'],
    ['**4**', '⚠ **_Four people in this building can price an export order, and three of them learned it from the fourth._**', '**—**', '⚠ **Mr Ayoub is away for a fortnight and nobody quotes above 500,000**'],
  ], [0.4, 4.1, 0.9, 2.6]),
  '⚠ **Four sentences, and the fourth is the one nobody has ever written down.** **The first three are about money and the fourth is about a man, and the fourth is the one that would actually stop this company**, ⚠ **because the other three have substitutes that can be found in a fortnight and the fourth does not.**',
  '⚠ **I have put no share against the fourth on purpose.** **I could write *one hundred per cent of pricing judgement*, and it would be a number I had invented to make a sentence look like the other three.** ⚠ **The dash is honest and 4.4 is about why.**',
  '⚠ **And notice what the second sentence does that paragraph 13 of my first draft did not.** *Whom we did not replace.* **That is four words and it is a decision of ours inside a statement of risk** — ⚠ **the plating dependence is not a fact about Aleppo, it is a thing we chose in March and did not revisit**, **and a risk we chose reads differently from a risk we have.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which sentence has never been written down, and why does it matter most?'));
out.push(item('2', 'Why is there no share against the fourth?'));
out.push(item('3', 'What do the four words *whom we did not replace* do?'));
out.push(box('Writer\'s box', [
  '**The exposure, one sentence each — four parts:** ⚠ **one sentence per dependence, each with a figure, a person and a Tuesday** → **a share column** → ⚠ **the one nobody has written down** → ⚠ **and the share you refuse to invent.**',
  '⚠ **One sentence each, and keep them the same shape.** **A reader who sees four sentences in one shape compares them; a reader who sees four paragraphs reads the first.**',
  '⚠ **Expect the most serious dependence to be a person and to have no number.** ⚠ **Three dependences with substitutes findable in a fortnight are less dangerous than one with no substitute at all** — **and the one with no substitute is the one that has never been written down, because there is no figure to write it with.**',
  '⚠ **Leave the share blank rather than inventing one.** ⚠ *One hundred per cent of pricing judgement* **is a number invented to make a sentence match its neighbours.** **A dash is honest, and the next cycle is about why.**',
  '⚠ **Put the decision inside the risk where there was one.** ⚠ *Whom we did not replace.* **Four words, and the plating dependence stops being a fact about Aleppo and becomes a thing you chose in March and did not revisit.** ⚠ **A risk you chose reads differently from a risk you have.**',
  '⚠ **And do not develop any of the four.** **The development goes in part 3, modelled, where it can be checked.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *the exposure, one sentence each* for your workplace (**80 words or more**). Use the frame.'));
out.push(p('**______________ — ONE SENTENCE EACH. ______________. Risk note, part ______________.**   **1** ⚠ **______________** | **______________** | ⚠ **______________**   **2** **______________, ______________, and ______________ whom we did not ______________.** | **______________** | **______________**   **3** **______________** | **______________** | **______________**   **4** ⚠ **______________** | ⚠ **—** | ⚠ **______________**   ⚠ **______________ sentences, and the ______________ is the one nobody has ever written down.** **The others are about ______________ and this one is about ______________, and it is the one that would actually stop this ______________**, ⚠ **because the others have substitutes that can be found in ______________ and this one does not.**   ⚠ **I have put no share against it on purpose.** **I could write ______________, and it would be a number I had invented to make a sentence look like the others.** ⚠ **The dash is honest.**   ⚠ **And notice what ______________ does: ______________.** **That is a decision of ours inside a statement of risk** — ⚠ **and a risk we chose reads differently from a risk we have.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['One sentence each, all the same shape', ''],
  ['A person and a Tuesday in every sentence', ''],
  ['The dependence with no substitute, identified', ''],
  ['A share left blank rather than invented', ''],
  ['A decision of yours inside at least one risk', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their fourth sentence — the one nobody has written down. ⚠ The class says how long the substitute would take to find.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the thing your workplace depends on that is in no document (**200 to 240 words**). Say what it is, why it is not written down, who knows, what a bad Tuesday looks like, and what the substitute would be.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _how long would the substitute take to find?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the undocumented dependence a person? Usually all three — ⚠ **and in two of three that person has never been told that they are one.**'));
out.push(box('Homework', ['Write your final text. Then write your workplace\'s four largest dependences as four sentences of the same shape, with a person and a Tuesday in each, and leave blank any share you would have to invent (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 4.3 =======================
out.push(pb());
out.push(h2('4.3  Modelling what can be modelled'));
out.push(p('**Function:** a worked case with its assumptions numbered   ·   **Grammar:** _assumption 1 · assumption 2 · and the answer is only as good as 2_   ·   **Pronunciation:** reading a worked figure and its assumption together'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a calculation you have been given at work. Say what it assumed.'));
out.push(p('**b**  Which can be argued with usefully? _The damages exposure is about four hundred thousand. · The damages exposure is about four hundred thousand on four assumptions, and the answer is only as good as the second._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Bassel say numbering the assumptions does?   **A** makes it longer   **B** tells the reader which one to attack   **C** proves the answer'));
out.push(p('**b**  Listen again. **1** Which assumption is the weak one? **2** What does he say about the figure from last year?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.5  "Number them, and say which one is weak"', [
  ['Nour', 'The damages exposure is about four hundred thousand.'],
  ['Bassel', '⚠ **On what?**'],
  ['Nour', 'On a two-week delay at eleven hundred cartons a month, at the rate in his clause.'],
  ['Bassel', '⚠ **Then number it.** ⚠ **Four assumptions, and a reader can attack any of them, and you tell him which one you would attack.**'],
  ['Nour', 'One: the clause rate, which is in his letter. Two: that a delay of two weeks is the realistic bad case. Three: eleven hundred a month. Four: that the clause runs from dispatch and not from arrival.'],
  ['Bassel', '⚠ **Which is weak?**'],
  ['Nour', '⚠ **Two.** The two weeks is from last year — we were two weeks late twice, both in the Homs season.'],
  ['Bassel', '⚠ **And is Beirut like Homs?**'],
  ['Nour', '…No. Homs was a seasonal allocation problem and this is a border and a press. ⚠ **I have used last year\'s delays because they are the only delays I have.**'],
  ['Bassel', '⚠ **Then write that sentence into the note**, exactly as you said it. ⚠ **_I have used last year\'s delays because they are the only delays I have._** **That is worth more than the four hundred thousand.**'],
  ['Nour', 'Why?'],
  ['Bassel', '⚠ **Because the four hundred thousand is a number and the sentence is its warranty.** ⚠ **A figure with its weakest assumption named is a figure a reader can use. A figure with four hidden assumptions is a figure he either believes or ignores**, and he will ignore it.'],
  ['Nour', 'And the fourth assumption?'],
  ['Bassel', '⚠ **The fourth is not an assumption, it is a question for Mr Sayegh, and you should take it out of the model and put it in a line of its own.** ⚠ **Do not model a legal question. Ask it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A worked case with numbered assumptions**',
  table(['', 'What goes there', 'Here'], [
    ['**the answer**', 'one figure, once', '*about four hundred thousand*'],
    ['⚠ **the assumptions, numbered**', '⚠ **one line each, and all of them**', '**1 the clause rate · 2 a two-week delay · 3 eleven hundred a month · 4 _(see below)_**'],
    ['⚠ **the weak one, named by you**', '⚠ *the answer is only as good as 2*', '⚠ **the two weeks is from last year\'s Homs delays**'],
    ['⚠ **the warranty sentence**', '⚠ *I have used last year\'s delays because they are the only delays I have*', '⚠ **worth more than the figure**'],
    ['⚠ **what is not an assumption**', '⚠ **a legal question, taken out of the model**', '*does the clause run from dispatch or from arrival? — for Mr Sayegh*'],
  ], [1.7, 2.6, 2.4]),
  '⚠ **Numbering the assumptions tells the reader which one to attack, and that is the point.** ⚠ **A figure with four hidden assumptions is a figure he either believes or ignores, and he will ignore it.**',
  '⚠ **Name the weak one yourself.** ⚠ *The answer is only as good as the second.* **The reader was going to find it; finding it himself costs you the figure, and being shown it costs you nothing.**',
  '⚠ **Write the warranty sentence in the words you would say out loud.** ⚠ *I have used last year\'s delays because they are the only delays I have.* **It is worth more than the figure**, because it says exactly how far the figure can be carried.',
  '⚠ **And ask whether your source is like your case.** ⚠ **Homs was a seasonal allocation problem; Beirut is a border and a press.** **Using the only data you have is honest; using it without saying it is not the same situation is not.**',
  '⚠ **Do not model a legal question. Ask it.** ⚠ **Whether a clause runs from dispatch or from arrival is not an assumption with a probability on it; it is a sentence somebody qualified answers in a morning** — **take it out of the model and put it in a line of its own.**',
  '**Practise:** Take a figure you have produced. Number its assumptions, say which is weakest, and write its warranty sentence.',
  '**Useful phrases:**  on what?  ·  number them  ·  which is weak?  ·  only as good as the second  ·  the only delays I have  ·  do not model a legal question, ask it',
  '**Pronunciation – a figure read with its assumption.** 🔊 **Track 4.6** Listen twice. ⚠ **The first reads *about four hundred thousand, on a two-week delay* as one unit.** ⚠ **The second says the figure, pauses, and then the assumption.** **After the pause the assumption sounds like a qualification being added; before it, it sounds like part of the figure.** Say it four times as one unit.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives a figure; B makes A number the assumptions and name the weak one.'));
out.push(dlg(null, [
  ['A', '__________ is about __________.'],
  ['B', '⚠ **On what?**'],
  ['A', 'On __________.'],
  ['B', '⚠ **Number them.**'],
  ['A', 'One: __________. Two: __________. Three: __________.'],
  ['B', '⚠ **Which is weak?**'],
  ['A', '__________, because __________.'],
  ['B', '⚠ **And is your source like your case?**'],
  ['A', '…No. __________.'],
  ['B', '⚠ **Then write that sentence into the note, exactly as you said it.**'],
]));
out.push(table(['Role card 1 — four hundred thousand on four assumptions', 'Role card 2 — the legal question in the model'], [[
  '*About four hundred thousand.* ⚠ **B: on what? → number them → which is weak?** ⚠ **The two weeks comes from last year\'s Homs delays, and Homs was a seasonal allocation problem while Beirut is a border and a press.** ⚠ **The warranty sentence: _I have used last year\'s delays because they are the only delays I have._**',
  'A has put a legal or technical question into a model as an assumption with a probability on it — ⚠ *we assume a seventy per cent chance the clause runs from dispatch.* **B\'s job is one question: who could answer that definitively, and how long would it take?** ⚠ **A morning.** **Then it comes out of the model and goes in a line of its own.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the figure and its numbered assumptions. ⚠ Then ring the weak one and write the warranty sentence word for word.'));
out.push(PHRASE_CARD(['on what?', 'number them', 'which is weak?', 'only as good as the second', 'the only delays I have', 'ask it, do not model it']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** figures you have produced or been given. Open each one up.'));
out.push(table(['The figure', 'Assumptions, numbered', 'The weak one, and why', 'The warranty sentence'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.1, 2.2, 1.7, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The figure is _______. Assumption one is _______, two is _______, three is _______. The weak one is _______, because _______. And the warranty sentence is _______._'));
out.push(p('**Listener task:** count how many weak assumptions were data from a situation that is not like this one. ⚠ Then ask how many contained a question that should have been asked rather than modelled.'));
out.push(p('**Board clinic:** your teacher writes three figures on the board — look for a figure with no assumptions under it, and a legal question given a probability. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE DAMAGES CLAUSE, PRICED. 12 March. N. Mansour. Risk note, part 3 of 4. Working at appendix B, one page.**',
  '**The answer.** ⚠ **About four hundred thousand on a two-week delay, in the first contract year.**',
  table(['', 'Assumption', 'Source', 'Strength'], [
    ['**1**', 'the rate in the clause at paragraph 11 of his terms', '**his letter of 9 January, page 4**', '⚠ **his own — unarguable by him**'],
    ['**2**', '⚠ **that two weeks is the realistic bad case**', '⚠ **last year: we were two weeks late twice, both in the Homs season**', '⚠ **the weak one. The answer is only as good as this.**'],
    ['**3**', 'eleven hundred cartons a month', 'his stated volume; see part 1', '**conditional on part 1\'s three conditions**'],
    ['**4**', '—', '—', '⚠ **not an assumption. See the line below.**'],
  ], [0.4, 2.6, 2.3, 2.5]),
  '⚠ **The warranty sentence, and it is the most important line in this part:** ⚠ **_I have used last year\'s delays because they are the only delays I have._** **Homs was a seasonal allocation problem and Beirut is a border and a press, and those are not the same kind of lateness.** ⚠ **If anybody has a better source for a bad case, the four hundred thousand should be rebuilt on it and I would rather that happened before the signature than after.**',
  '⚠ **The question I have taken out of the model.** **Does the clause run from dispatch or from arrival?** **At eleven hundred a month the difference is about nine days of transit, which at this rate is roughly a hundred and thirty thousand.** ⚠ **This is not an assumption with a probability on it. It is a sentence Mr Sayegh can answer in a morning and I have asked him on the 12th.** ⚠ **A model that gives a legal question a seventy per cent is a model pretending to know something it could simply find out.**',
  '⚠ **And one sentence about what the four hundred thousand is not.** **It is not a forecast that we will be late.** **It is the price of being late once, for two weeks, in a year** — ⚠ **and the reason to write it is that nobody in this building, including the man who wants to sign, had ever multiplied the rate by anything.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which assumption is the weak one, and what is its source?'));
out.push(item('2', 'What has been taken out of the model, and why?'));
out.push(item('3', 'What is the four hundred thousand not?'));
out.push(box('Writer\'s box', [
  '**A priced risk — four parts:** **the answer, once** → ⚠ **assumptions numbered, with source and strength** → ⚠ **the warranty sentence** → ⚠ **and the question you have taken out of the model.**',
  '⚠ **Put a *strength* column beside the sources.** **One of them will be *his own — unarguable by him*, which is the strongest kind, and one will be *the weak one*.** ⚠ **A reader who can see the strengths reads the answer at the strength of its weakest input, which is what you want.**',
  '⚠ **Write the warranty sentence in spoken words.** ⚠ *I have used last year\'s delays because they are the only delays I have.* **Then say why the source is not quite the same situation** — **a seasonal allocation problem is not a border and a press.**',
  '⚠ **Invite the rebuild.** ⚠ *If anybody has a better source, the four hundred thousand should be rebuilt on it, and I would rather that happened before the signature than after.* **A figure you have offered to have rebuilt is a figure that gets used.**',
  '⚠ **Take every answerable question out of the model and price the asking.** ⚠ **A model that gives a legal question a seventy per cent is pretending to know something it could find out in a morning** — **and the difference here is about a hundred and thirty thousand.**',
  '⚠ **And say what the figure is not.** ⚠ *It is not a forecast that we will be late. It is the price of being late once, for two weeks, in a year.* **Without that sentence the figure is read as a prediction and disputed as one.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Price a risk at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________, PRICED. ______________. Risk note, part ______________. Working at ______________.**   **The answer.** ⚠ **About ______________ on ______________.**   **1** ______________ | **______________** | ⚠ **______________**   **2** ⚠ **______________** | ⚠ **______________** | ⚠ **the weak one. The answer is only as good as this.**   **3** ______________ | ______________ | ______________   ⚠ **The warranty sentence:** ⚠ **______________.** **______________ and ______________ are not the same kind of ______________.** ⚠ **If anybody has a better source, ______________ should be rebuilt on it, and I would rather that happened before ______________ than after.**   ⚠ **The question I have taken out of the model.** ______________? **The difference is about ______________.** ⚠ **This is not an assumption with a probability on it. It is a sentence ______________ can answer in ______________, and I have asked on ______________.**   ⚠ **And what ______________ is not.** **It is not ______________. It is ______________** — ⚠ **and the reason to write it is that nobody here had ever ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *strength* column, with the weak one named', ''],
  ['The warranty sentence, in spoken words', ''],
  ['An invitation to rebuild the figure', ''],
  ['An answerable question taken out of the model and asked', ''],
  ['A sentence saying what the figure is not', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their warranty sentence. ⚠ The class says how far the figure can be carried — one meeting, one decision, or one year.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a figure at your work that is used as though it had no assumptions (**200 to 240 words**). Say what the figure is, what it assumes, which assumption is weakest, where the data came from, and what decision has been taken on it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _is the data from a situation like this one?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the data from a situation unlike the one it is used for? Usually two of three — ⚠ **and in at least one nobody now alive knows where it came from.**'));
out.push(box('Homework', ['Write your final text. Then take a figure of your own, number its assumptions, name the weak one, and write its warranty sentence in the words you would say out loud (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 4.4 =======================
out.push(pb());
out.push(h2('4.4  Naming what cannot be modelled'));
out.push(p('**Function:** refusing to price a real risk, in writing   ·   **Grammar:** _this is real and I am not going to invent a figure for it_   ·   **Pronunciation:** a refusal said once and not defended'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a risk at your work that nobody has put a number on. Say whether that is because it is small.'));
out.push(p('**b**  Which would you rather read? _The reputational impact is estimated at approximately 150,000. · This is real and I am not going to invent a figure for it. Here is what would actually happen._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub say about an invented figure?   **A** it is useful as a placeholder   **B** it gets quoted back without its source   **C** it is better than nothing'));
out.push(p('**b**  Listen again. **1** What does he tell her to write instead of a number? **2** What does he say about Ms Tannous that she did not know?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.7  "Do not invent a number for it"', [
  ['Mr Ayoub', 'You have put a figure on three risks and a dash on the fourth.'],
  ['Nour', 'The fourth is Ms Tannous. I cannot price it.'],
  ['Mr Ayoub', '⚠ **Could you?** **If I told you to.**'],
  ['Nour', '…I could write something. I could take her four years of orders and call it that.'],
  ['Mr Ayoub', '⚠ **And what would happen to that number?**'],
  ['Nour', 'It would go in the note.'],
  ['Mr Ayoub', '⚠ **It would go in the note, and then into somebody\'s summary of the note, and then into a sentence in a meeting in September that begins *the Tannous exposure is about*** — ⚠ **and by then nobody will know you made it up in an afternoon in March.**'],
  ['Nour', 'So what do I write?'],
  ['Mr Ayoub', '⚠ **Write what would happen.** **Not a number. The sequence.** ⚠ **She loses the Beirut chain. She has two other Syrian suppliers and she will tell them why. And the next time somebody in Beirut wants cartons from Damascus, she is the person they ask.**'],
  ['Nour', 'That is the part I had not written.'],
  ['Mr Ayoub', '⚠ **Because it has no number in it, and you have spent three weeks learning to put numbers on things.** ⚠ **A risk you cannot price is not a smaller risk. It is a risk in a different language.**'],
  ['Nour', 'And the sentence itself?'],
  ['Mr Ayoub', '⚠ *This is real and I am not going to invent a figure for it.* ⚠ **Then the sequence, and then stop.** **Do not defend it for a paragraph — a refusal defended at length reads like a figure you could not find.**'],
  ['Nour', 'Will Mr Attar accept that?'],
  ['Mr Ayoub', '⚠ **Mr Attar will accept it before he accepts an invented hundred and fifty thousand, and so will I, and I will tell you something you do not know.** ⚠ **She took the first order at a price that lost her money. I knew at the time and she knew I knew, and neither of us ever said it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Refusing to price a real risk**',
  table(['The move', 'Write', 'Not'], [
    ['**the refusal**', '⚠ *This is real and I am not going to invent a figure for it.*', '*the impact is estimated at approximately 150,000*'],
    ['⚠ **the sequence instead**', '⚠ *she loses the chain · she tells her two other suppliers why · she is who Beirut asks next time*', '**a paragraph of adjectives**'],
    ['**the stop**', '⚠ **one sentence of refusal, the sequence, and then stop**', '⚠ **a defence of the refusal, which reads as a figure you could not find**'],
    ['⚠ **what it is not**', '⚠ **_a risk you cannot price is not a smaller risk_**', '*an intangible*'],
  ], [1.4, 3, 2]),
  '⚠ **An invented figure does not stay where you put it.** ⚠ **It goes into a summary of your note, and then into a sentence in a meeting in September that begins *the exposure is about*** — **and by then nobody knows it was made up in an afternoon.**',
  '⚠ **Write the sequence instead of the number.** **Three or four steps, each of them a thing that happens, in order.** ⚠ **A sequence can be disagreed with step by step, which is more than a number can offer.**',
  '⚠ **One sentence of refusal, the sequence, and stop.** ⚠ **A refusal defended for a paragraph reads like a figure you could not find** — **the brevity is what makes it a position rather than an apology.**',
  '⚠ **And say what it is not.** ⚠ **A risk you cannot price is not a smaller risk; it is a risk in a different language.** **A note that prices three risks and dashes a fourth has told the reader the fourth is minor unless it says this.**',
  '⚠ **Expect the refusal to be accepted more readily than you fear, and by the numerate reader first.** **An auditor has seen more invented numbers than anybody in the building.**',
  '**Practise:** Take a risk nobody has priced. Write the refusal, then the sequence in three or four steps, then stop.',
  '**Useful phrases:**  could you? if I told you to  ·  it would go into somebody\'s summary  ·  write what would happen, not a number  ·  a risk in a different language  ·  and then stop',
  '**Pronunciation – a refusal said once.** 🔊 **Track 4.8** Listen twice. ⚠ **The first says the refusal and moves straight to the sequence.** ⚠ **The second says it and then adds *obviously it is difficult to be precise about these things*.** **The addition turns a position into an apology** — **and a listener hears an apology as an admission that a number existed and was not found.** Say it four times and go straight on.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. B asks A to price an unpriceable risk; A refuses and writes the sequence.'));
out.push(dlg(null, [
  ['B', 'You have a dash against __________.'],
  ['A', 'I cannot price it.'],
  ['B', '⚠ **Could you? If I told you to.**'],
  ['A', '…I could write something. I could take __________ and call it that.'],
  ['B', '⚠ **And where would that number be in September?**'],
  ['A', '⚠ **In a sentence that begins _the __________ exposure is about_.**'],
  ['B', '⚠ **So write what would happen instead. The sequence.**'],
  ['A', '__________. Then __________. Then __________.'],
  ['B', '⚠ **And the first sentence?**'],
  ['A', '⚠ **This is real and I am not going to invent a figure for it.**'],
]));
out.push(table(['Role card 1 — the sequence, three steps', 'Role card 2 — the defended refusal'], [[
  '⚠ **Ms Tannous: she loses the Beirut chain · she has two other Syrian suppliers and will tell them why · the next time somebody in Beirut wants cartons from Damascus, she is who they ask.** ⚠ **Three steps, no adjectives, no number** — **and a reader can disagree with any one of them.**',
  'A refuses to price the risk and then ⚠ **defends the refusal for four sentences** — *of course it is inherently difficult, and any figure would be arbitrary, and one has to be careful about false precision.* **B\'s job is to say what he now believes**: ⚠ **that A looked for a number and could not find one.** **Then A refuses in one sentence and stops, and B says what changed.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the refusal and the sequence. ⚠ Then say which step of the sequence you would argue with, which is the test of whether it is a real sequence.'));
out.push(PHRASE_CARD(['could you, if I told you to?', 'into somebody\'s summary', 'what would happen, not a number', 'a risk in a different language', 'and then stop']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** risks at your work that nobody has priced. Write the refusal and the sequence for each.'));
out.push(table(['The risk', 'The number I could have invented', 'The sequence, in steps', 'Which step is arguable'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1.6, 2.4, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The risk is _______. I could have invented _______ by _______. Instead: _______, then _______, then _______. And the arguable step is _______._'));
out.push(p('**Listener task:** count the invented numbers that were nearly written. ⚠ Then ask how many of the room have seen such a number quoted back to them months later with no source attached.'));
out.push(p('**Board clinic:** your teacher writes three treatments on the board — look for an *estimated at approximately*, and a refusal defended for four sentences. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**MS TANNOUS. 14 March. N. Mansour. Risk note, part 4 of 4. ⚠ No figure in this part.**',
  '⚠ **_This is real and I am not going to invent a figure for it._** **What follows is what would happen, in order, and any step of it can be disagreed with.**',
  table(['', 'The step', 'How sure I am'], [
    ['**1**', '**She loses the Beirut chain.** Her customer becomes our customer and she is out of a trade she built. ⚠ **Her agreed terms of 28 April run twelve months from 1 May, so a decision taken in March falls inside them.**', '⚠ **certain — it is the whole of his proposal**'],
    ['**2**', '**She tells her other two Syrian suppliers why.** She will not be unfair about it and she will be accurate, which is worse.', '⚠ **near certain — I would**'],
    ['**3**', '**The next time somebody in Beirut wants cartons from Damascus, she is the person they ask.** She has been that person for nine years.', '**likely, and the step I would argue with if I were you**'],
    ['**4**', '⚠ **We find out in about two years what she was worth, and by then it is not a decision any more.**', '⚠ **this is not a prediction, it is the shape of the thing**'],
  ], [0.4, 4.2, 2.4]),
  '⚠ **I could have put a figure on this and I want to say exactly how I would have done it, so that nobody does it later.** **I would have taken her four years of orders, averaged them, applied a probability I made up, and written about a hundred and fifty thousand.** ⚠ **That number would have been in a summary by April and in somebody\'s sentence in September, and its origin would have been an afternoon in March and a feeling.**',
  '⚠ **And Mr Ayoub has told me something that is not in any file and that changes step 1.** ⚠ **She took the first order at a price that lost her money.** **He knew at the time, she knew he knew, and neither of them ever said it.** ⚠ **It is nine years old, it is in nobody\'s writing, and it is the single most relevant fact about this part of the note** — **and if the decision goes the other way it should be in the letter.**',
  '⚠ **One thing more, and it is a boundary.** **This part does not argue that we should refuse the contract on her account.** **Paragraph 9 asks for a cap and a letter, and the letter is the whole of what I am asking for here.** ⚠ **A risk you cannot price should not be used to carry an argument a figure could not carry** — **that is the fault this cycle could easily become.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How would the writer have invented a figure, and where would it have ended up?'));
out.push(item('2', 'What fact is in nobody\'s writing, and what does it change?'));
out.push(item('3', 'What boundary does the last paragraph set?'));
out.push(box('Writer\'s box', [
  '**The risk you refuse to price — four parts:** ⚠ **the refusal, one sentence** → ⚠ **the sequence, with a *how sure I am* column** → ⚠ **how you would have invented the figure** → ⚠ **and the boundary.**',
  '⚠ **Put *how sure I am* against each step and let the certainty fall.** ⚠ **Certain · near certain · likely, and the step I would argue with if I were you.** **A sequence whose steps are all equally certain is a sequence nobody believes.**',
  '⚠ **Say how you would have faked it.** ⚠ *Four years of orders, averaged, times a probability I made up: about a hundred and fifty thousand.* **Showing the method is what stops somebody else using it in June**, and it costs three lines.',
  '⚠ **Put in the fact that is in nobody\'s writing, when you are given one.** ⚠ **She took the first order at a price that lost her money, and nobody ever said so.** **Nine years old, in no file, and the most relevant fact in the part.**',
  '⚠ **And set the boundary explicitly.** ⚠ **A risk you cannot price must not be used to carry an argument a figure could not carry.** **Say what you are and are not asking for on the strength of it** — **here, a letter and nothing more.**',
  '⚠ **One sentence of refusal, and no defence of the refusal.** **The sequence is the defence.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the part of a risk note that refuses a figure (**80 words or more**). Use the frame.'));
out.push(p('**______________. ______________. Risk note, part ______________. ⚠ No figure in this part.**   ⚠ **_This is real and I am not going to invent a figure for it._** **What follows is what would happen, in order, and any step can be disagreed with.**   **1** **______________.** | ⚠ **certain — ______________**   **2** **______________.** | ⚠ **near certain — ______________**   **3** **______________.** | **likely, and the step I would argue with if I were you**   **4** ⚠ **______________.** | ⚠ **not a prediction — the shape of the thing**   ⚠ **I could have put a figure on this and I want to say how, so that nobody does it later.** **I would have taken ______________, ______________, applied ______________, and written about ______________.** ⚠ **That number would have been in ______________ by ______________ and in ______________ by ______________, and its origin would have been ______________.**   ⚠ **And ______________ has told me something that is not in any file: ______________.** **It is ______________ old, it is in nobody\'s writing, and it is the most relevant fact in this part.**   ⚠ **One thing more, and it is a boundary.** **This part does not argue that ______________.** ⚠ **A risk you cannot price should not be used to carry an argument a figure could not carry.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The refusal in one sentence, undefended', ''],
  ['A *how sure I am* column, with the certainty falling', ''],
  ['How the figure would have been invented, shown', ''],
  ['A fact that is in nobody\'s writing', ''],
  ['The boundary — what this risk is not being used to argue', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their sequence. ⚠ The class says which step it would argue with — and a sequence nobody will argue with has not been written honestly.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a number at your work that somebody invented and that is now treated as a fact (**200 to 240 words**). Say what it is, how it was arrived at, how you know, what decisions have been taken on it, and whether anybody has ever asked.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _how long has the number been treated as a fact?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many has the invented number outlived the person who invented it? Usually two of three — ⚠ **and in at least one it is now quoted to outsiders.**'));
out.push(box('Homework', ['Write your final text. Then take the risk at your work that nobody has priced, write the refusal in one sentence and the sequence in four steps, and mark how sure you are of each (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 4.5 =======================
out.push(pb());
out.push(h2('4.5  Stress language'));
out.push(p('**Function:** writing two things happening at once   ·   **Grammar:** _if X and Y together · on the worst of both_   ·   **Pronunciation:** the compound condition said as one condition'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say two things that have gone wrong at your work in the same week. Say whether anybody had thought of them together.'));
out.push(p('**b**  Which is a stress case? _If the generator fails, we lose the night shift. · If the generator fails in the same fortnight as a border closure, we lose the night shift and cannot ship what we have already made._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar say about risks listed separately?   **A** they are easier to read   **B** each one looks survivable and the pair is not   **C** nothing'));
out.push(p('**b**  Listen again. **1** Which two does he put together? **2** What does he say about correlation?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.9  "Now put two of them in the same fortnight"', [
  ['Mr Attar', 'Your four exposures are each survivable. Now put two of them in the same fortnight.'],
  ['Nour', 'Which two?'],
  ['Mr Attar', '⚠ **You choose, and then I will tell you which two I would have chosen.**'],
  ['Nour', 'The generator and the border.'],
  ['Mr Attar', '⚠ **Good. Why those?**'],
  ['Nour', 'Because the generator fails in the heat and the border closes in the summer, and August is both.'],
  ['Mr Attar', '⚠ **Which is correlation, and it is the word your note does not use anywhere.** ⚠ **Two risks that share a cause are not two risks, they are one risk that arrives twice.**'],
  ['Nour', 'So what happens on the worst of both?'],
  ['Mr Attar', '⚠ **You tell me. Do the arithmetic out loud.**'],
  ['Nour', '…The generator goes, so no night shift, so four hundred a month instead of eleven hundred. And the border is shut, so what we have made does not ship, so no payment. ⚠ **And the damages clause runs anyway, because his clause does not care why we are late.**'],
  ['Mr Attar', '⚠ **Say the last part again.**'],
  ['Nour', '⚠ **The clause does not care why.**'],
  ['Mr Attar', '⚠ **That is the sentence this whole note has been walking towards and it is not in it.** ⚠ **Four hundred thousand of damages in the one fortnight when we have no income to pay it out of.** **And the two I would have chosen were those two.**'],
  ['Nour', 'Should I put all the pairs in?'],
  ['Mr Attar', '⚠ **No. One pair, worked properly, and say why that pair and not the others.** ⚠ **A note with six pairs in it is a note nobody finishes, and the six will all be less frightening than the one.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Two things in the same fortnight**',
  table(['The move', 'Write', 'Why'], [
    ['**the pair**', '⚠ *if the generator fails in the same fortnight as a border closure*', '⚠ **separately each looks survivable; the pair is not**'],
    ['⚠ **the shared cause**', '⚠ *the generator fails in the heat and the border closes in the summer — August is both*', '⚠ **two risks that share a cause are one risk arriving twice**'],
    ['**the arithmetic**', '*four hundred a month instead of eleven hundred, and nothing ships, so no payment*', '**done out loud, in order**'],
    ['⚠ **the thing that runs anyway**', '⚠ *and the clause does not care why we are late*', '⚠ **the sentence the whole note was walking towards**'],
    ['**the discipline**', '⚠ **one pair, worked properly, and say why that pair**', '**six pairs is a note nobody finishes**'],
  ], [1.5, 3, 2.1]),
  '⚠ **Risks listed separately each look survivable, and the pair is not.** **That is the whole reason this cycle exists**, and it is why a list of four exposures is not a risk note.',
  '⚠ **Look for a shared cause, and name it.** ⚠ **The generator fails in the heat; the border closes in the summer; August is both.** ⚠ **Two risks that share a cause are not two risks, they are one risk that arrives twice** — **and *correlation* is usually the word a risk note is missing.**',
  '⚠ **Do the arithmetic in order and out loud before you write it.** **No night shift → four hundred instead of eleven hundred → nothing ships → no payment.** **Each arrow is a sentence.**',
  '⚠ **Then find the thing that runs anyway.** ⚠ *The clause does not care why we are late.* **In almost every stress case there is one obligation that is indifferent to your reasons** — **and it is the obligation that turns a bad fortnight into a solvency question.**',
  '⚠ **One pair, and say why that pair.** ⚠ **A note with six pairs is a note nobody finishes, and all six will be less frightening than the one.**',
  '**Practise:** Take two risks at your work that share a cause. Put them in the same fortnight, do the arithmetic, and find the obligation that runs anyway.',
  '**Useful phrases:**  put two of them in the same fortnight  ·  they share a cause  ·  one risk that arrives twice  ·  on the worst of both  ·  the clause does not care why',
  '**Pronunciation – a compound condition as one condition.** 🔊 **Track 4.10** Listen twice. ⚠ **The first says *if the generator fails in the same fortnight as a border closure* as one breath.** ⚠ **The second breaks it in the middle.** **Broken, a listener hears two conditions and starts assessing the first** — **and the point of the sentence is that they arrive together.** Say it four times in one breath.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. B asks A to pair two risks; they work the arithmetic together.'));
out.push(dlg(null, [
  ['B', 'Your risks are each survivable. ⚠ **Put two of them in the same fortnight.**'],
  ['A', '__________ and __________.'],
  ['B', '⚠ **Why those two?**'],
  ['A', 'Because __________ and __________, and __________ is both.'],
  ['B', '⚠ **Which is correlation. Now do the arithmetic out loud.**'],
  ['A', '__________, so __________, so __________. And __________.'],
  ['B', '⚠ **And what runs anyway?**'],
  ['A', '⚠ **__________ does not care why.**'],
  ['B', '⚠ **Say it again. That is the sentence.**'],
]));
out.push(table(['Role card 1 — August is both', 'Role card 2 — six pairs'], [[
  '⚠ **The generator and the border: the generator fails in the heat and the border closes in the summer, and August is both.** ⚠ **Four hundred a month instead of eleven hundred, nothing ships, no payment** — ⚠ **and four hundred thousand of damages in the one fortnight with no income to pay it out of, because the clause does not care why.**',
  'A has paired every risk with every other and has six pairs. ⚠ **B\'s job is to make A rank them and keep one.** **The test is which pair shares a cause** — **the others are coincidences and a reader discounts a coincidence.** ⚠ **Then B points out that the six, read together, are less frightening than the one read alone.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the pair, the shared cause and the arithmetic in arrows. ⚠ Then write the obligation that runs anyway.'));
out.push(PHRASE_CARD(['in the same fortnight', 'they share a cause', 'one risk arriving twice', 'on the worst of both', 'it does not care why']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** pairs of risks at your work. Keep the one that shares a cause.'));
out.push(table(['The pair', 'The shared cause', 'The arithmetic, in arrows', 'What runs anyway'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.5, 2.2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The pair is _______ and _______. They share _______. On the worst of both: _______, so _______, so _______. And _______ runs anyway._'));
out.push(p('**Listener task:** count how many shared causes were a season or a month. ⚠ Then ask how many obligations that run anyway are written in somebody else\'s contract.'));
out.push(p('**Board clinic:** your teacher writes three stress cases on the board — look for a pair with no shared cause, and a note with six pairs in it. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**ONE PAIR: AUGUST. 16 March. N. Mansour. Risk note, the stress case. One pair only, and here is why this pair.**',
  '⚠ **The generator fails in the heat. The border closes in the summer. August is both, and in August the second press is the only press that is running at all.** ⚠ **These are not two risks. They are one risk — summer — that arrives in two forms, and the word my first draft never used is correlation.**',
  table(['', 'What happens', 'The figure'], [
    ['**1**', '**The generator goes. No night shift.**', '**four hundred a month instead of eleven hundred**'],
    ['**2**', '**The border is shut. What we have already made does not ship.**', '**about three weeks of finished stock in the fourth store**'],
    ['**3**', '**No shipment, no payment.**', '⚠ **and we owe the mill on the twenty-eighth whatever happens**'],
    ['**4**', '⚠ **The damages clause runs.**', '⚠ **about four hundred thousand, because his clause does not care why we are late**'],
    ['⚠ **5**', '⚠ **So: the largest single bill this company has ever faced, in the one fortnight of the year when it has no income.**', '⚠ **—**'],
  ], [0.4, 3.9, 2.7]),
  '⚠ **Row 4 is the row this whole note has been walking towards and it was not in the first three drafts.** ⚠ *His clause does not care why we are late.* **I had priced the clause in part 3 and I had written the generator and the border in part 2, and I had not once put them on the same page** — **because the note was organised by kind of risk and not by fortnight.**',
  '⚠ **Why this pair and not the other five.** **Because these two share a cause and the others do not.** **The plater stopping and Mr Dallal paying late would be bad and would be a coincidence** ⚠ **and a reader discounts a coincidence, correctly.** **August is not a coincidence; it is a month, and it comes every year.**',
  '⚠ **And the one thing in row 5 I will not put a number on.** **I could add the mill, the damages and the lost month and produce a total.** ⚠ **I have not, because the total would be a number for a fortnight nobody has lived through, and part 4 is about exactly that.** ⚠ **What I have written instead is the sentence: the largest single bill this company has ever faced, in the one fortnight when it has no income** — **and Mr Ayoub can size that against things he has lived through, which he can do better than I can.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which row was not in the first three drafts, and why not?'));
out.push(item('2', 'Why this pair and not the other five?'));
out.push(item('3', 'What has the writer refused to total, and why?'));
out.push(box('Writer\'s box', [
  '**One pair — four parts:** ⚠ **the shared cause, named** → **the arithmetic, numbered, in order** → ⚠ **the obligation that runs anyway** → ⚠ **and why this pair and not the others.**',
  '⚠ **Name the shared cause as a single thing.** ⚠ *These are not two risks. They are one risk — summer — that arrives in two forms.* **And use the word *correlation*, which is usually the word a risk note is missing.**',
  '⚠ **Reorganise by fortnight, not by kind of risk.** ⚠ **The reason the damages row was missing for three drafts is that the note was organised by kind** — **the clause in part 3, the generator in part 2, and never on the same page.** **A risk note organised by kind of risk cannot see a stress case.**',
  '⚠ **Find the obligation that is indifferent to your reasons.** ⚠ *His clause does not care why we are late.* **It is the row that turns a bad fortnight into a solvency question**, and in almost every stress case there is one.',
  '⚠ **Justify the pair by the shared cause and say what you rejected.** ⚠ **A pair without a shared cause is a coincidence, and a reader discounts a coincidence, correctly.** **August is not a coincidence; it is a month, and it comes every year.**',
  '⚠ **And refuse the total.** ⚠ **A total for a fortnight nobody has lived through is an invented figure.** **Write the sentence instead and let a reader who has lived through things size it.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the stress case for your workplace (**80 words or more**). Use the frame.'));
out.push(p('**ONE PAIR: ______________. ______________. One pair only, and here is why this pair.**   ⚠ **______________. ______________. ______________ is both, and in ______________ ______________.** ⚠ **These are not two risks. They are one risk — ______________ — that arrives in two forms, and the word my first draft never used is correlation.**   **1** **______________.** | **______________**   **2** **______________.** | **______________**   **3** **______________.** | ⚠ **______________ whatever happens**   **4** ⚠ **______________.** | ⚠ **______________, because ______________ does not care why**   ⚠ **5** | ⚠ **So: ______________.** | ⚠ **—**   ⚠ **Row ______________ is the row this note has been walking towards and it was not in the first drafts**, **because the note was organised by ______________ and not by ______________.**   ⚠ **Why this pair and not the others.** **Because these two share a cause and the others do not.** ⚠ **______________ would be bad and would be a coincidence, and a reader discounts a coincidence.**   ⚠ **And the one thing I will not put a number on.** **I could ______________ and produce a total.** ⚠ **I have not, because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The shared cause named as a single thing', ''],
  ['The arithmetic numbered and in order', ''],
  ['The obligation that runs anyway', ''],
  ['Why this pair, with a rejected pair named', ''],
  ['The total refused, with a sentence instead', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *what runs anyway* row. ⚠ The class says whose document that obligation is written in — and it is usually somebody else\'s.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a fortnight at your work when two things went wrong together (**200 to 240 words**). Say what the two were, whether they shared a cause, what ran anyway, what it cost, and whether anybody had ever put the two on the same page.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _did the two share a cause, or was it a coincidence?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the two things share a cause? Usually two of three — ⚠ **and in all three the pair had never been written on the same page before it happened.**'));
out.push(box('Homework', ['Write your final text. Then take your workplace\'s risks, look for two that share a cause, put them in one fortnight, and find the obligation that runs anyway (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 4.6 =======================
out.push(pb());
out.push(h2('4.6  The risk that belongs to the owner'));
out.push(p('**Function:** writing a risk that is not yours to carry   ·   **Grammar:** _this one is yours, and it is the only one in the note that is_   ·   **Pronunciation:** handing something over without softening it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a risk at your work that only the owner or the most senior person can decide about. Say whether it has ever been written down.'));
out.push(p('**b**  Which hands it over? _There are of course wider strategic considerations for management. · This one is yours. It is whether this company is the kind of company that has one customer._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say the risk note is missing?   **A** a figure   **B** the risk that is nobody\'s job to raise   **C** a summary'));
out.push(p('**b**  Listen again. **1** What is that risk? **2** Why does she say Nour has not written it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.11  "This one is yours"', [
  ['Nadia', 'Four parts and a stress case. It is the best thing you have written and one risk is not in it.'],
  ['Nour', 'Which?'],
  ['Nadia', '⚠ **What kind of company this becomes.**'],
  ['Nour', 'That is not a risk, it is a question of direction.'],
  ['Nadia', '⚠ **It is a risk and it is the largest one, and you have written four parts about the others because they have figures or sequences and this one has neither.** ⚠ **A company with one customer is a different company. It prices differently, it argues differently, and it cannot say no.**'],
  ['Nour', 'I cannot write that. It is above me.'],
  ['Nadia', '⚠ **You cannot decide it. Writing it is not deciding it.** ⚠ **And if you leave it out, the note says the risks are a generator, a border, a clause and a woman in Beirut** — **which is a list of operational problems, and he will read it as a list of operational problems and solve them one at a time.**'],
  ['Nour', 'So how do I write something I am not entitled to an opinion about?'],
  ['Nadia', '⚠ **You do not give an opinion. You hand it over, in one line, and you say it is the only one in the note you are handing over.** ⚠ *This one is yours. It is whether this company is the kind of company that has one customer.*'],
  ['Nour', 'And no recommendation?'],
  ['Nadia', '⚠ **None.** ⚠ **A recommendation on that question from the office manager is the sentence Mr Attar would quote for ten years.** **And it would be the only thing in four parts that nobody could check.'],
  ['Nour', 'It feels like stopping halfway.'],
  ['Nadia', '⚠ **It is stopping exactly where your authority stops, in writing, where everybody can see it.** ⚠ **Which is the opposite of stopping halfway** — **it is the only part of the note that tells him what the note is not.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Handing a risk to the person it belongs to**',
  table(['The move', 'Write', 'Not'], [
    ['⚠ **the hand-over**', '⚠ *This one is yours. It is whether this company is the kind of company that has one customer.*', '*there are of course wider strategic considerations for management*'],
    ['⚠ **naming it as the only one**', '⚠ *and it is the only one in this note that is*', '**nothing, which lets it sit as one risk among five**'],
    ['⚠ **no recommendation**', '⚠ **silence, on purpose, and said to be on purpose**', '⚠ **an opinion that would be quoted for ten years**'],
    ['**what it does**', '⚠ **tells the reader what the note is not**', '—'],
  ], [1.5, 3.2, 1.9]),
  '⚠ **The biggest risk in most notes is the one with neither a figure nor a sequence, and it is left out for that reason.** **The other four had numbers or steps; this one has neither, so it does not fit the shape** — **and a note that only contains what fits its shape has reported its shape and not its subject.**',
  '⚠ **Leaving it out changes what the note says.** ⚠ **Without it, the risks are a generator, a border, a clause and a woman in Beirut — a list of operational problems** — **and a reader will solve them one at a time and sign.**',
  '⚠ **You cannot decide it. Writing it is not deciding it.** **That distinction is the whole permission this cycle gives, and most people do not know they have it.**',
  '⚠ **Hand it over in one line and give no recommendation, and say that the silence is deliberate.** ⚠ **A recommendation on a question of what kind of company this is, from somebody who does not own the company, is the one sentence in four parts that nobody can check** — **and it would be quoted for ten years.**',
  '⚠ **And say it is the only one you are handing over.** **Otherwise it reads as one risk among five, which is exactly what it is not.**',
  '**Practise:** Take a risk at your work that only the owner can decide. Hand it over in one line, say it is the only one, and give no recommendation.',
  '**Useful phrases:**  this one is yours  ·  writing it is not deciding it  ·  the only one in this note that is  ·  no recommendation, on purpose  ·  what the note is not',
  '**Pronunciation – handing something over without softening it.** 🔊 **Track 4.12** Listen twice. ⚠ **The first says *this one is yours* and stops.** ⚠ **The second adds *obviously* and trails off.** **The second hands it over and asks for it back** — **and a reader hears the request.** Say it four times and stop.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a note; B finds the risk that is not in it.'));
out.push(dlg(null, [
  ['B', '__________ parts, and one risk is not in it.'],
  ['A', 'Which?'],
  ['B', '⚠ **__________.**'],
  ['A', 'That is not a risk, it is __________.'],
  ['B', '⚠ **It is a risk and it is the largest one, and you have written about the others because they have ______________ and this one has neither.**'],
  ['A', 'I cannot write that. It is above me.'],
  ['B', '⚠ **You cannot decide it. Writing it is not deciding it.** ⚠ **And if you leave it out, the note says ______________.**'],
  ['A', '⚠ **This one is yours. It is ______________.**'],
  ['B', '⚠ **And no recommendation.**'],
]));
out.push(table(['Role card 1 — what kind of company', 'Role card 2 — the recommendation that would be quoted'], [[
  '⚠ **The risk not in the note: what kind of company this becomes.** ⚠ **A company with one customer prices differently, argues differently, and cannot say no.** ⚠ **One line, handed over, named as the only one handed over, and no recommendation.**',
  'A has handed the risk over ⚠ **and then added a recommendation** — *and in my view we should not become that kind of company.* **B\'s job is to ask who would quote that sentence, to whom, and for how long.** ⚠ **The answer is the auditor, to everybody, for ten years.** **Then A takes it out and says the silence is deliberate.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the handed-over risk in one line. ⚠ Then say what the note would have said without it.'));
out.push(PHRASE_CARD(['this one is yours', 'writing it is not deciding it', 'the only one in this note', 'no recommendation, on purpose', 'what the note is not']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** risks at your work that belong to somebody above you. Hand each over in one line.'));
out.push(table(['The risk', 'Whose it is', 'The one line', 'What the note says without it'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.3, 1, 2.2, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The risk is _______. It belongs to _______. My one line is _______. And without it the note would say _______._'));
out.push(p('**Listener task:** count how many of these risks have ever been written down. ⚠ Then ask how many of the speakers believed, before this cycle, that writing one down was the same as deciding it.'));
out.push(p('**Board clinic:** your teacher writes three hand-overs on the board — look for *wider strategic considerations*, and a hand-over with a recommendation attached. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE ONE THAT IS YOURS. 18 March. N. Mansour. Risk note, the last page. ⚠ One risk, one line, and no recommendation.**',
  '⚠ **_This one is yours. It is whether this company is the kind of company that has one customer._**',
  '⚠ **And it is the only risk in this note that is yours and not mine.** **The generator is mine — I can cost a second one. The border is nobody\'s and we live with it. The clause is Mr Sayegh\'s to read and mine to price. Ms Tannous is a letter, and I have asked for the letter.** ⚠ **This one cannot be costed, sequenced or asked about, and it is the largest thing in the file.**',
  table(['', 'What a company with one customer does differently', 'Where I have seen it'], [
    ['**prices**', '**it stops pricing and starts agreeing**', '⚠ **the plater\'s twelve per cent — we took it in March without asking anybody, because he is our only plater**'],
    ['**argues**', '**it stops arguing about small things in order to keep the large thing**', '**the gauge error in January: a hundred sheets wrong, and we have not sent an invoice for it**'],
    ['⚠ **says no**', '⚠ **it does not**', '⚠ **I have no example, because we have never had one customer, which is the point**'],
  ], [1.2, 3.1, 3.1]),
  '⚠ **The third row is empty on purpose and it is the most honest line on the page.** **I have two examples of what dependence does to us because we are dependent on a plater and on a generator.** ⚠ **I have no example of what it does to a company that cannot say no to the customer who is sixty-one per cent of it, because we have never been one** — **and a reader is entitled to know that the worst of the three is the one I am guessing about.**',
  '⚠ **I am making no recommendation on this and the silence is deliberate.** **I have recommended a cap, a telephone call and a letter, and all three are in paragraph 9 and all three can be granted this week.** ⚠ **A recommendation from me about what kind of company this should be would be the only sentence in twenty-one pages that nobody could check**, **and it would outlive everything in them that can.**',
  '⚠ **What this page is for is to tell you what the rest of the note is not.** **Twenty pages of figures and sequences, and they are all about things that can be costed, sequenced or asked about.** ⚠ **The largest thing in the file is on this page, it has no number on it, and it is the only one I have handed over.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which risks does the writer say are hers, and which are not?'));
out.push(item('2', 'Why is the third row of the table empty?'));
out.push(item('3', 'What does the writer say this page is for?'));
out.push(box('Writer\'s box', [
  '**The one that is yours — four parts:** ⚠ **the one line** → ⚠ **why it is the only one handed over, with the others allocated** → **what changes about an organisation that carries it** → ⚠ **and the deliberate silence.**',
  '⚠ **Allocate every other risk in the note.** ⚠ *The generator is mine. The border is nobody\'s. The clause is the advocate\'s to read and mine to price. Ms Tannous is a letter.* **Only against that list does *this one is yours* mean anything.**',
  '⚠ **Show what the condition does, from where you have seen it.** **Two examples from real dependences you already have** — **a sole plater, a single generator** — **are worth more than any amount of reasoning about customers.**',
  '⚠ **Leave the row empty where you have no example, and say that is why.** ⚠ *I have no example, because we have never had one customer, which is the point.* **An empty cell admitted is stronger than a cell filled by analogy**, and it tells the reader which of your three claims you are guessing about.',
  '⚠ **Make no recommendation and say the silence is deliberate.** ⚠ **A recommendation on what kind of company this should be would be the only sentence in the whole note that nobody could check, and it would outlive everything in it that can.**',
  '⚠ **And say what the page is for.** ⚠ **Twenty pages are about what can be costed, sequenced or asked about; this page is what the rest of the note is not.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the risk that belongs to somebody above you (**80 words or more**). Use the frame.'));
out.push(p('**THE ONE THAT IS YOURS. ______________. ______________. ⚠ One risk, one line, and no recommendation.**   ⚠ **_This one is yours. It is ______________._**   ⚠ **And it is the only risk in this note that is yours and not mine.** **______________ is mine — I can ______________. ______________ is nobody\'s. ______________ is ______________\'s to ______________ and mine to ______________.** ⚠ **This one cannot be costed, sequenced or asked about, and it is the largest thing in the file.**   **______________** | **______________** | ⚠ **______________**   **______________** | **______________** | **______________**   ⚠ **______________** | ⚠ **______________** | ⚠ **I have no example, because ______________, which is the point**   ⚠ **The ______________ row is empty on purpose and it is the most honest line on the page.** ⚠ **A reader is entitled to know that the worst of the three is the one I am guessing about.**   ⚠ **I am making no recommendation and the silence is deliberate.** **I have recommended ______________, and ______________.** ⚠ **A recommendation from me about ______________ would be the only sentence in ______________ that nobody could check.**   ⚠ **What this page is for is to tell you what the rest of the note is not.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every other risk allocated by name', ''],
  ['Examples from dependences you already have', ''],
  ['An empty cell, admitted and explained', ''],
  ['No recommendation, and the silence declared', ''],
  ['A sentence saying what the rest of the note is not', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their one line. ⚠ The class says whether it could be costed — and if it could, it is not this risk.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a decision at your work that is above everybody who talks about it (**200 to 240 words**). Say what it is, who it belongs to, whether it has ever been written down, who has given an opinion they were not entitled to give, and what that cost them.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _has the risk ever been written down at all?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many has the largest decision never been written down by anybody? Usually all three — ⚠ **and in at least one somebody junior has been quoted for years for a sentence they should not have written.**'));
out.push(box('Homework', ['Write your final text. Then take the largest thing in your own files, write the one line that hands it over, allocate every other risk by name, and make no recommendation (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 4.7 =======================
out.push(pb());
out.push(h2('4.7  Review & Mediate: the exposure nobody owns'));
out.push(p('**Function:** explaining a risk note to the people inside the risks   ·   **Review:** likelihood at range · concentration in one sentence · numbered assumptions · the refused figure · the stress pair · the risk that is the owner\'s'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 4 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What is the number for, and what is the range for?',
  '**2** What two things must a concentration sentence contain besides the figure?',
  '**3** Why do you name the weakest assumption yourself?',
  '**4** What happens to an invented figure, and what do you write instead?',
  '**5** What makes a pair of risks worth working, and what makes it a coincidence?',
  '**6** Why is writing a risk not the same as deciding it?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Abu Yasser say when he reads the stress case?   **A** that it is wrong   **B** that August is worse than the note says, and why   **C** nothing'));
out.push(p('**b**  Listen again. **1** What does he know that is in no document? **2** Who owns that exposure?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.13  "That is not in your August"', [
  ['Nour', 'I want to read you the stress case before it goes. The generator and the border, in the same fortnight.'],
  ['Abu Yasser', 'Read it.'],
  ['Nour', '*The generator fails in the heat. The border closes in the summer. August is both.*'],
  ['Abu Yasser', '⚠ **August is three things.**'],
  ['Nour', 'Three?'],
  ['Abu Yasser', '⚠ **The water.** **Three weeks in August the pressure drops and the hose at the gate will not fill the tank**, and the press cannot run without water for the glue. ⚠ **Four years out of five.** **We carry it in drums from the second store.'],
  ['Nour', 'That is not in any document.'],
  ['Abu Yasser', '⚠ **No. We carry drums.** ⚠ **Me and whoever is on. It takes about forty minutes a night.**'],
  ['Nour', 'For four years.'],
  ['Abu Yasser', '**Five.** ⚠ **Nobody has ever asked me about August.** **I have been asked about the generator, because the generator is a thing you buy.**'],
  ['Nour', 'So at eleven hundred a month, with drums?'],
  ['Abu Yasser', '⚠ **You cannot do eleven hundred on drums.** **Four hundred, yes. We have.** ⚠ **Eleven hundred is a tank and a pump and somebody whose job it is.**'],
  ['Nour', 'Whose exposure is that?'],
  ['Abu Yasser', '⚠ **Nobody\'s, and that is why you have not got it.** ⚠ **It is not the generator man\'s and not the office\'s and not mine, because I have been solving it every August and a thing that gets solved stops being a problem anybody writes down.**'],
  ['Nour', 'Which is how it stayed out of a twenty-one-page note about risk.'],
  ['Abu Yasser', '⚠ **It stayed out because it has never once stopped the press.** ⚠ **I have made sure of that for five years, and now I am the reason nobody knows.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – finding the exposure nobody owns**',
  table(['To find it', 'What you hear', 'Why it is missing'], [
    ['⚠ *read the stress case to the people inside it*', '⚠ *August is three things*', '**the third thing is not a purchase**'],
    ['*what happens in August?*', '*we carry drums — about forty minutes a night*', '⚠ **it has never once stopped the press**'],
    ['*for how long?*', '⚠ *five years, and nobody has ever asked me about August*', '⚠ **people are asked about the things that can be bought**'],
    ['*at the new volume?*', '⚠ *you cannot do eleven hundred on drums*', '**four hundred, yes — and that is why it has held**'],
    ['⚠ *whose exposure is it?*', '⚠ *nobody\'s, and that is why you have not got it*', '⚠ **a thing that gets solved stops being a problem anybody writes down**'],
  ], [2, 2.3, 2]),
  '⚠ **Read the stress case to the people who are inside the risks.** ⚠ **A note written in an office can only contain the risks an office can see**, and the office sees the ones that are bought: a generator, a press, a clause.',
  '⚠ **The exposures that go missing are the ones somebody is absorbing.** ⚠ *It has never once stopped the press. I have made sure of that for five years, and now I am the reason nobody knows.* **Competence hides exposure, and the more reliable the person the more completely it is hidden.**',
  '⚠ **Ask what happens at the new volume, not what happens.** ⚠ **Drums work at four hundred a month and do not work at eleven hundred** — **and the risk is invisible until the volume changes, which is exactly when a risk note is written.**',
  '⚠ **And ask whose it is, in those words.** ⚠ *Nobody\'s, and that is why you have not got it.* **An exposure with no owner has no advocate, no budget line and no document** — **and the test of a risk note is whether it contains one.**',
  '⚠ **Then give it an owner in the note itself.** **The water is now a tank, a pump and somebody whose job it is** — **three things that can be bought and allocated, which is what naming an owner does to an unowned risk.**',
  '**Practise:** Read a stress case to somebody inside it. Ask what happens, for how long, at the new volume, and whose it is.',
  '**Useful phrases:**  August is three things  ·  nobody has ever asked me about August  ·  you cannot do eleven hundred on drums  ·  nobody\'s, and that is why you have not got it  ·  a thing that gets solved stops being a problem',
  '**Pronunciation – asking a question you do not know the answer to.** 🔊 **Track 4.14** Listen to *what happens in August?* twice. ⚠ **The first is genuinely open and waits.** ⚠ **The second is read as a checking question, with a falling tone, and gets *fine* for an answer.** **Say it four times, rising, and wait.**',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a stress case; B is inside it. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  '⚠ **A reads the generator-and-border pair.** ⚠ **B answers that August is three things and names the water.** **A asks: what happens · for how long · at eleven hundred a month · whose is it?** ⚠ **And B\'s last answer is the one to get: nobody\'s, and that is why you have not got it.**',
  'B is absorbing something nobody has written down — ⚠ **a forty-minute task, a workaround, a thing carried in drums.** **B gives it up only when asked what happens at the **new** volume.** ⚠ **If A asks only *is August all right?*, B says yes**, truthfully, because it has been all right for five years.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the exposure, how long it has been absorbed, and who has absorbed it. ⚠ Then write the three things that would give it an owner.'));
out.push(PHRASE_CARD(['August is three things', 'nobody has asked me about August', 'not at the new volume', 'nobody\'s, and that is why', 'a thing that gets solved']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a one-page risk note. Read it silently. Then read it to **two** people who are inside the risks, and ask the four questions.'));
out.push(table(['Who I read it to', 'What they added', 'How long they have absorbed it', 'Whose exposure it is'], [['', '', '', ''], ['', '', '', '']], [1.1, 1.9, 1.5, 1.5]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the note. This is the **fourth** unit of this book, and the unwritten thing is this: ⚠ **a risk that somebody competent has been quietly absorbing for years is invisible precisely because they have absorbed it — it has never caused a failure, so it has never been written down, so it has no owner and no budget — and the person who has been absorbing it becomes, without choosing to, the reason nobody knows.**'));
out.push(p('_The note contained _______. The person inside it added _______, which they have carried for _______. It belongs to _______, and the three things that would give it an owner are _______._'));
out.push(p('**Listener task:** add this unit\'s six to the Book 1 **paper-and-decision word list**: _exposure · concentration · a stress test · a numbered assumption · a correlated risk · headroom_. ⚠ Twenty-four items now, and it runs to Unit 12.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for a risk note with no unowned exposure in it, and a question asked as *is it all right?* Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 4)', 10));
out.push(p('⚠ **This unit is Part 4: multiple-choice cloze — the largest part of the Reading paper at fifteen questions.** Read the text and choose the best word for each gap. Choose **A**, **B**, **C** or **D**. ⚠ **Part 4 tests collocation and fixed expression, which is why every unit of this book declares eight collocations as well as its thirty-two items.**'));
out.push(box(null, [
  '**WHAT A RISK NOTE IS FOR**',
  'Every business **(1)** ______ a degree of risk, and the question is not whether it exists but whether anybody has **(2)** ______ a figure on it. A risk that has been **(3)** ______ can be argued about. A risk that nobody **(4)** ______ sits in no document at all.',
  'It is **(5)** ______ practice to list exposures separately, and the practice is **(6)** ______ misleading, because each one read alone **(7)** ______ survivable. Two risks that **(8)** ______ a cause are not two risks; they are one risk arriving twice, and the word usually missing from such a list is correlation.',
  'Where a figure can be built, the assumptions should be numbered and the weakest **(9)** ______ by the writer. Where no figure can honestly be **(10)** ______, the writer should say so in one sentence and **(11)** ______ what would happen instead. An invented figure does not **(12)** ______ where it is put; it **(13)** ______ its way into a summary and then into a meeting, and by then nobody can **(14)** ______ for its origin.',
  'Finally, one risk in most files belongs to the owner and to nobody else, and the writer\'s job is to **(15)** ______ it over, not to decide it.',
], 'FFFFFF', C.navy));
out.push(p('**1** A holds  B carries  C takes  D makes      **2** A placed  B set  C put  D laid      **3** A numbered  B counted  C figured  D quantified      **4** A possesses  B owns  C holds  D has      **5** A common  B usual  C normal  D ordinary'));
out.push(p('**6** A systemic  B systematically  C systematic  D system      **7** A seems like  B appears to  C looks  D shows      **8** A divide  B split  C join  D share      **9** A called  B named  C said  D told      **10** A come to  B arrived at  C reached to  D got at'));
out.push(p('**11** A put over  B lay out  C set down  D set out      **12** A remain at  B keep  C hold  D stay      **13** A works  B makes  C finds  D goes      **14** A vouch  B speak  C account  D answer      **15** A give  B pass  C hand  D turn'));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 2 — 120 to 140 words, 20 marks.** **This unit\'s genre is the risk note**, which in the examination appears as a **report**: a rubric gives the situation, the reader and three or four things the writing must do.',
  '⚠ **A risk note has a quantified half and an unquantifiable half, and it must say in its first line which is which.** ⚠ **A note that prices three risks and is silent about a fourth has told the reader the fourth does not exist.**',
  '**The shape that fits 120–140 words:** ⚠ **a title · the number and the range · the priced risk with its weakest assumption · the risk you will not price, with what would happen instead · and the one that belongs to the reader.** **Five short paragraphs, or four with a heading each.**',
  '⚠ **In 130 words you cannot number four assumptions, so number the weakest one and say it is the weakest.** **That is the examination, and it is also the better note.**',
  '⚠ **Part 4 tip, for the cloze above.** **Read the whole sentence before choosing, and read it again with your choice in.** ⚠ **Part 4 answers are decided by what goes with what** — *carry a risk, put a figure on, share a cause, account for, hand over* — **and three of the four options are usually grammatical.** **Grammar will not decide it; collocation will.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** Your manager has asked for a risk note on a change your workplace is considering. Write a **report** (**120 to 140 words**). Give **the number and the range**, **one priced risk with its weakest assumption**, **one risk you will not put a figure on**, and **the one that belongs to your manager**.'));
out.push(p('**RISK NOTE: ______________.** **______________, ______________.**   **The number.** On current terms, ______________. The range I have planned to survive is ______________.   **Priced.** ______________. ⚠ **The weakest assumption is ______________.**   **Not priced.** ⚠ **This is real and I am not going to invent a figure for it.** ______________.   **Yours.** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A number and a range, labelled', ''],
  ['One priced risk with its weakest assumption named', ''],
  ['One risk refused a figure, with what happens instead', ''],
  ['One risk handed to the reader, with no recommendation', ''],
  ['120 to 140 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something somebody at your work has been quietly absorbing for years (**200 to 240 words**). Say what it is, who absorbs it, how long, why it has never been written down, what happens if the volume doubles, and whose it ought to be.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then read your workplace\'s worst fortnight to somebody who works inside it, ask what happens at double the volume, and write down the exposure they give you (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 4 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  On current terms, the first year ___ to about eleven hundred a month.   a) run   b) runs   c) running',
  '2  The number is what you plan ___.   a) on   b) for   c) in',
  '3  Two risks that share a cause are one risk ___ twice.   a) arrive   b) arriving   c) arrived',
  '4  His clause does not care ___ we are late.   a) that   b) why   c) if',
  '5  I am not going to ___ a figure for it.   a) invent   b) inventing   c) invented',
  '6  The answer is only as good ___ the second assumption.   a) than   b) as   c) like',
  '7  Had we been late in August, the damages ___ anyway.   a) would run   b) would have run   c) will run',
  '8  This one is yours, and it is the only one in the note ___ is.   a) what   b) which   c) that',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 4.15** Listen to a conversation about August. Complete the note.   The third thing about August: ______   How long it has been happening: ______   What is done about it: ______   How long that takes a night: ______   What happens at eleven hundred a month: ______   Whose exposure it is: ______'));
out.push(p('**C  Reading.** Read part 4 of the risk note at 4.4 again. How would the writer have invented a figure, where would that figure have ended up, and what boundary does the last paragraph set?'));
out.push(p('**D  Writing.** Take one risk at your work. Write it in four lines: the number and range, the weakest assumption, what you will not price and what would happen instead, and the one line that hands something over (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 4.15  Audio script (read after the check)', [
  ['Nour', 'The stress case says the generator and the border. ⚠ **August is both.**'],
  ['Abu Yasser', '⚠ **August is three things.**'],
  ['Nour', 'Three?'],
  ['Abu Yasser', '⚠ **The water.** Three weeks in August the pressure drops and the hose at the gate will not fill the tank, and the press cannot run without water for the glue. ⚠ **Four years out of five.**'],
  ['Nour', 'And what do you do?'],
  ['Abu Yasser', '⚠ **We carry it in drums from the second store.** Me and whoever is on. ⚠ **About forty minutes a night.**'],
  ['Nour', 'For how long?'],
  ['Abu Yasser', '⚠ **Five years.** ⚠ **Nobody has ever asked me about August.** I have been asked about the generator, because a generator is a thing you buy.'],
  ['Nour', 'And at eleven hundred a month?'],
  ['Abu Yasser', '⚠ **You cannot do eleven hundred on drums.** Four hundred, yes — we have. ⚠ **Eleven hundred is a tank and a pump and somebody whose job it is.**'],
  ['Nour', 'Whose exposure is this?'],
  ['Abu Yasser', '⚠ **Nobody\'s, and that is why you have not got it.** ⚠ **It has never once stopped the press.** I have made sure of that for five years, ⚠ **and now I am the reason nobody knows.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**4.1** attach conditions to a forecast, and give a number to plan on and a range to survive',
  '**4.2** state a concentration in one sentence, with a figure, a person and a Tuesday in it',
  '**4.3** number the assumptions under a figure, name the weakest, and write its warranty sentence',
  '**4.4** refuse to price a real risk in one sentence, and write the sequence instead',
  '**4.5** put two correlated risks in the same fortnight and find the obligation that runs anyway',
  '**4.6** hand the owner\'s risk to the owner, in one line, with no recommendation',
  '**4.7** read a risk note to the people inside the risks, and find the exposure nobody owns',
], C.lblue, C.navy));
out.push(sp());
out.push(p('_Unit 5 — **Policy, Not Procedure**: the difference between a rule and an instruction, who may make each, and what a rule does when nobody is watching._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · Unit 4 · Student\'s Book');
module.exports = out;
