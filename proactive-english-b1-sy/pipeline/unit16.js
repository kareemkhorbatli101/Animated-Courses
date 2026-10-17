// Proactive English B1 · Syria Edition · Book 2 · Unit 16 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';
const slip = '**Peer review.** No stems. Write your partner **three sentences in English**: what worked, the one place you would change, and the question you are left with.';

out.push(h1('Unit 16  Comparing and Evaluating'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**16.1**  compare two things precisely',
  '**16.2**  use a superlative with a qualification',
  '**16.3**  say how two things move together',
  '**16.4**  compare how things are done',
  '**16.5**  evaluate against stated criteria',
  '**16.6**  write a comparison that reaches a verdict',
  '**16.7**  Review & Mediate: explain a comparison table',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**Precision, not enthusiasm.** _Better_ is a word with no information in it. _Eleven minutes faster · slightly less accurate · not as cheap as it looks · by far the largest of the three_ — the comparatives of this unit all carry a quantity, and the ones that do not are the ones nobody acts on.',
  '**The criteria go down before you look.** **16.5** is the cycle that changes how the class makes decisions: write what matters, in order, **before** you compare — because everybody who writes the criteria afterwards writes the criteria that choose the answer they had already chosen.',
  '**A comparison has to end in a verdict.** **16.6** writes the recommendation paragraph: two things, four criteria, one recommendation, and the thing that would change it. A page that compares and does not recommend leaves the decision with whoever reads it most carelessly.',
  '**And the question nobody asks of a table.** **16.7**: _what is not in the columns?_ Every comparison table in the world leaves out the thing that decides the matter — who answers the telephone, what happens when something is late, which of the two you can walk to.',
], C.lyellow, C.orange));

// ======================= 16.1 =======================
out.push(pb());
out.push(h2('16.1  Not as cheap as it looks'));
out.push(p('**Function:** comparing two things precisely   ·   **Grammar:** _not as … as · far more · slightly less · twice as_   ·   **Pronunciation:** the unstressed _as_ and the weight on the quantity'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Put the comparison you brought on the table — one somebody else has made on paper. Your teacher asks one question about each: **how much?** In most of them the answer is not on the page: things are _better_, _cheaper_, _more reliable_, and nothing is measured.'));
out.push(board('Nine days faster, and not as cheap as it looks.', 'much · far · slightly · twice as · not as … as'));
out.push(p('**b**  Add a quantity to each. **1** _The Mezzeh shop is better._  **2** _The second supplier is cheaper._  **3** _The old machine is slower._  **4** _The north district is worse for lateness._  **5** _This model comes back more often._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What two things is Mazen comparing, and which is better?   **A** two shops, and the answer is neither   **B** two models   **C** two suppliers in Türkiye'));
out.push(p('**b**  Listen again. **1** What four things does he compare the shops on?   **2** What does Nour say about the word _better_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.1  Two shops, four columns', [
  ['Mazen', 'I have two years of delivery notes from one shop and nothing from the other, and I have been thinking all week about which of the two is the better shop to buy from.'],
  ['Ms Huda', 'And?'],
  ['Mazen', 'And I could not answer it until I stopped using the word. _Better_ was the whole problem. So I wrote down the four things I actually care about and did it one at a time.'],
  ['Jad', 'Which four?'],
  ['Mazen', 'Price. Paperwork. How fast they get a thing in. And whether they tell me the truth when they do not know.'],
  ['Nour', 'Go on, then. Price.'],
  ['Mazen', 'Shaalan is about four per cent cheaper on the models I buy most, and I have the figures for eleven items. Four per cent is slightly less, not far less, and on one handset it is about the price of a glass of tea.'],
  ['Omar', 'And the paperwork?'],
  ['Mazen', 'That is not slightly. Mezzeh files every note by date and let me photograph eight. Shaalan keeps only what arrives with an invoice and throws the rest away. So Mezzeh is **far** better on paperwork and it is not close — and that four per cent is what the missing notes cost me, which makes Shaalan not nearly as cheap as it looks.'],
  ['Lubna', 'And the speed?'],
  ['Mazen', 'Shaalan is twice as fast at getting a part in — two or three days against five or six. That is the biggest difference on the page and it is in Shaalan\'s favour.'],
  ['Ms Huda', 'And the fourth?'],
  ['Mazen', 'The fourth is the one nobody can put in a column. Abu Fadi in Mezzeh tells me when he does not know. The Shaalan man says "tomorrow" to everything and has said it to me for six years, and I have stopped hearing it as a day of the week.'],
  ['Nour', 'So which shop?'],
  ['Mazen', 'Both. Parts from Shaalan because it is twice as fast, stock from Mezzeh because of the notes, and I have been using them the other way round for six years without ever comparing them.'],
  ['Ms Huda', 'Say what the word _better_ was hiding.'],
  ['Mazen', 'It was hiding that they are better at different things, which means the question was wrong and not the answer. And I could not see that until there were four lines instead of one.'],
  ['Nour', '_Better_ is a word people use when they have one impression and four reasons for it that they have never separated.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – comparing with a quantity**',
  table(['you say', 'how big'], [
    ['_**far** cheaper · **much** faster · **a great deal** better_', 'a big difference, unmeasured'],
    ['_**slightly** cheaper · **a little** slower · **marginally** better_', 'a small difference'],
    ['_**twice as** fast · **four per cent** cheaper · **nine days** faster_', 'measured — always best'],
    ['_**not as** cheap **as** it looks · **nowhere near as** fast_', 'a negative comparison'],
    ['_**no** cheaper · **just as** good · **about the same**_', 'no real difference'],
  ], [2.5, 2.1]),
  '**A comparison with no quantity in it is an impression.** _Better · cheaper · faster_ on their own cannot be acted on, and the question to put to every one of them — your own included — is **how much?**',
  '**Prefer the measured form.** _Nine days faster_ beats _much faster_; _four per cent cheaper_ beats _slightly cheaper_. Where you have no number, _far_ and _slightly_ at least tell a reader the size of the thing you are claiming.',
  '**_Not as … as_ is the most useful shape in the unit**, because it compares against an expectation: _not as cheap as it looks_ · _nowhere near as fast as they say_ · _not as different as the price suggests_.',
  '⚠ ~~more cheaper~~ · ~~more faster~~ → _cheaper_, _faster_. ⚠ ~~not as cheap than~~ → _as cheap **as**_.',
  '⚠ ~~It is more better~~ · ~~the most cheapest~~ — one comparative, one superlative.',
  '**And the warning the cycle is built on:** before you compare two things on one word, ask whether they are better at **different** things. _Better_ is a word people use when they have one impression and four reasons for it that they have never separated.',
  '**Useful phrases:** I could not answer it until I stopped using the word · four per cent is slightly less, not far less · it is not close · I have stopped hearing it as a day of the week · the question was wrong and not the answer.',
  '**Practise:** Compare the two on three separate things, with a quantity on each.  1 two shops you buy from  2 two routes to work  3 two ways of doing the same job  4 two forms you have to fill in  5 two people you ask for help',
  '**Pronunciation.** 🔊 **Track 16.2** _As_ is unstressed in both places — /əz/ — and the weight falls on the **quantity and the adjective**: _not as CHEAP as it looks_ · _TWICE as FAST_. Students stress _as_, which makes a comparison sound like an argument. Listen to eight and write the quantity you hear.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the two things from the card. B compares them on **three** separate criteria with a quantity on each, and then says whether one of the two is simply better or whether they are better at different things. A asks: _how much, on the one that matters most?_ Swap cards.'));
out.push(dlg(null, [
  ['A', '__________ and __________.'],
  ['B', 'On __________, __________ is __________. On __________, __________ is __________. On __________, they are __________.'],
  ['A', 'Is one of them better, or are they better at different things?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the pairs', 'Card B – the pairs'], [
  ['two shops or suppliers you use', 'two routes to work'],
  ['two ways of doing the same job', 'two forms you have to fill in'],
  ['two people you ask for help', 'two machines or tools you use'],
  ['the morning shift and the afternoon shift', 'this year and last year in your work'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the quantities. Then count how many of the eight comparisons ended in _better at different things_ rather than in a winner. It is usually five or six, and that is the cycle: most of the comparisons we carry in our heads as a verdict are four separate comparisons we have never written down.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the comparison of your own that you have never written down. Name the three or four things you actually care about, in order, and compare the two on each with a quantity.'));
out.push(p('**b**  Swap. Then each of you say which single criterion the other has been deciding on all along without saying so.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mazen has two years of delivery notes from one shop and nothing from the other, and he has spent the week on which is the better shop to buy from — and he could not answer it until he stopped using the word, because "better" was the whole problem. So he wrote down the four things he actually cares about: price, paperwork, how fast they get a thing in, and whether they tell him the truth when they do not know. On price, Shaalan is about four per cent cheaper on the models he buys most, and he has figures for eleven items — four per cent is slightly less, not far less, and on one handset it is about the price of a glass of tea. On paperwork it is not slight at all: Mezzeh files every note by date and let him photograph eight, and Shaalan keeps only what comes with an invoice and throws the rest away, so Mezzeh is far better and it is not close — and that four per cent is what the missing notes cost him, which makes Shaalan not nearly as cheap as it looks. On speed, Shaalan is twice as fast at getting a part in, two or three days against five or six, which is the biggest difference on the page and is in Shaalan\'s favour. And the fourth is the one nobody can put in a column: Abu Fadi in Mezzeh tells him when he does not know, and the Shaalan man says "tomorrow" to everything and has said it for six years, so Mazen has stopped hearing it as a day of the week. His answer is both: parts from Shaalan because it is twice as fast, stock from Mezzeh because of the notes — and he has been using them the other way round for six years without ever comparing them. What "better" was hiding is that they are better at different things, which means the question was wrong and not the answer; and Nour said "better" is a word people use when they have one impression and four reasons for it that they have never separated._'));
out.push(p('**Listener task:** write one comparison from this room with a number in it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Mazen writes for himself. Answer the questions.'));
out.push(model([
  '**TWO SHOPS, FOUR LINES** · M. Hariri · November · inside the cover of the fault book, after the April page',
  'I have bought from both of these shops for six years and I have never compared them. This is four lines and it took forty minutes.',
  '**Price.** Shaalan is 4% cheaper across the eleven items I buy most often, which I have taken from twelve months of my own receipts. That is slightly cheaper and not far cheaper: on one handset it is about the price of a glass of tea.',
  '**Paperwork.** Mezzeh files every delivery note by date and produced eight of them when I asked. Shaalan keeps only the notes that come with an invoice and throws the rest away when the stock is sold. On this one Mezzeh is far better and it is not close — and the four untraceable units in my batch claim came from Shaalan, which is what the 4% actually cost.',
  '**Getting a part in.** Shaalan is about twice as fast: two or three days against five or six. This is the largest difference between them and it is the one I notice every week, because a customer standing at a counter does not care where the note is filed.',
  '**Telling me when they do not know.** Abu Fadi in Mezzeh says "I do not know, I will ask" about once a month and then telephones me. The Shaalan man says "tomorrow". I cannot measure this and I am not going to pretend I can, and it is the line I would put first if I were only allowed one.',
  '**What I am doing.** Parts from Shaalan, stock from Mezzeh. I have had it the other way round since 2019 — stock from Shaalan for the 4%, parts from whoever answered the telephone — and nobody made that decision, including me.',
  '**And the thing the four lines showed me.** They are better at different things, so "which is the better shop" was the wrong question. I had one impression, built mostly on the fourth line, and I have been acting on it as though it were about price.',
]));
out.push(item('1', 'What are the four criteria, and which does he say he would put first if he were only allowed one?'));
out.push(item('2', 'What does he say the four per cent actually cost?'));
out.push(item('3', 'What has he been doing since 2019, and who decided it?'));
out.push(writers([
  'A comparison on four lines: **one line per criterion, with a quantity on each** → **the one you cannot measure, admitted** → **what you are doing differently** → **and what the exercise showed you about the question**.',
  'Put the **quantity and its source** in the same line: _4% across the eleven items I buy most often, from twelve months of my own receipts_. A percentage with no source behind it is an impression with a digit on it.',
  'Keep the unmeasurable criterion, say that it is unmeasurable, and say where it ranks. _I cannot measure this and I am not going to pretend I can, and it is the line I would put first if I were only allowed one._ That is 14.3 and 16.5 arriving together.',
  '⚠ End on the question rather than the answer: _which is the better shop was the wrong question._ Most comparisons in a workplace are wrong at the question and not at the arithmetic.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the four-line comparison of two things you use, buy from or work with (60 words or more).'));
out.push(p('**______________, FOUR LINES** · ______________   I have ______________ for ______________ and I have never compared them.   **______________.** ______________ is ______ per cent / ______ times ______________, which I have taken from ______________. That is ______________ and not ______________.   **______________.** ______________. On this one ______________ is far better and it is not close — and ______________ is what the ______________ actually cost.   **______________.** ______________ is about ______ times as ______________: ______________ against ______________. This is the largest difference and it is the one I notice ______________.   **______________.** ______________. I cannot measure this and I am not going to pretend I can, and it is the line I would put ______________.   **What I am doing.** ______________.   **And the thing the four lines showed me.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A quantity on every line, with where it came from',
  '_far_ and _slightly_ used to mark the size of an unmeasured difference',
  'The unmeasurable criterion kept, and ranked',
  'A last line about the question, not about the winner',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the line they cannot measure.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full comparison (140 words or more) of two things you have been choosing between for years without writing it down. Then write underneath what you are going to do differently, and from when.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s page as **somebody who has to choose between the same two things next week**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the room\'s comparisons ended in a winner, and how many in _better at different things_?** Count both. Then the question: of the ones with a winner, how many were decided by the criterion the writer cannot measure? It is usually most of them, and there is nothing wrong with that — as long as it is written down.'));
out.push(hw('Write the four-line comparison for two suppliers, routes, machines or methods in your own work (60+ words), with a quantity and a source on every line. Then show it to somebody who uses both and write down which line they argued with.'));

// ======================= 16.2 =======================
out.push(pb());
out.push(h2('16.2  One of the best, and by far the oldest'));
out.push(p('**Function:** using a superlative with a qualification   ·   **Grammar:** _one of the best · by far the · the second largest · of the three_   ·   **Pronunciation:** _by FAR the_, and the swallowed _of the_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads six superlatives from documents the class has brought in this term — _the best, the fastest, the most reliable_ — and for each one the class asks two questions: **of how many?** and **on what?** In most of them neither is answered.'));
out.push(board('By far the oldest of the three, and one of the cheapest in Damascus.', 'one of the · by far the · of the three'));
out.push(p('**b**  Qualify each one. **1** _It is the best machine._  **2** _She is the fastest._  **3** _This is the cheapest paper._  **4** _It is the most reliable supplier._  **5** _That was the worst month._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Bassel comparing, and what does the word _best_ turn out to mean?'));
out.push(p('**b**  Listen again. **1** What are the three paper suppliers, and what is each one best at?   **2** What does Ms Huda say about a superlative with no number behind it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.3  Of the three', [
  ['Bassel', 'The paper is the whole risk on the ministry order, and I said so in the box on the form: by the twentieth of November if the paper comes by the seventh of October. So this month I have been comparing the three agents I can buy sixty-four-page stock from.'],
  ['Ms Huda', 'Three agents. Which is the best?'],
  ['Bassel', 'That is exactly the question I wrote at the top of the page and crossed out. There is no best. There is a best **at** something, and there are three.'],
  ['Lubna', 'Then say them one at a time.'],
  ['Bassel', 'Agent A is by far the cheapest — about eleven per cent under the other two — and he is also by far the latest: nine, sixteen and twenty-three days over the date he gave me, on the last three orders. Agent B is the most reliable on dates, two days early and one day late in three orders, and he is the dearest. Agent C is in the middle on both and is the only one of the three who has ever telephoned me to say that something would be late before it was late.'],
  ['Nour', 'So C.'],
  ['Bassel', 'So C, probably, and that is a different sentence from "C is the best agent". C is the second cheapest of three and the second most reliable of three, and he is the only one who has made one telephone call in two years — and the telephone call is doing all the work in my answer.'],
  ['Jad', 'Is that not a very small thing to decide on?'],
  ['Bassel', 'It is one telephone call and it is the only thing on the page that tells me what happens when something goes wrong, which is the only thing I actually need to know, because the ministry date is mine and not his.'],
  ['Ms Huda', 'Now the grammar, and it matters in writing. Bassel, say the three sentences properly.'],
  ['Bassel', 'Agent A is **by far the cheapest of the three** and **by far the least reliable**. Agent B is **the most reliable of the three** and **the dearest**. Agent C is **one of the two in the middle on price**, **the second most reliable**, and **the only one** who has ever warned me in advance.'],
  ['Ms Huda', 'And what has every one of those sentences got in it that the originals had not?'],
  ['Bassel', 'A number. Of the three, the second, the only one. A superlative with no number behind it is a compliment, and I have been reading compliments from all three of them for two years.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the qualified superlative**',
  table(['you say', 'what it adds'], [
    ['_the cheapest **of the three**_', 'the size of the field — always say it'],
    ['_**by far** the cheapest_', 'the gap is big'],
    ['_**one of** the cheapest **in Damascus**_', 'a group, not a winner, with a boundary'],
    ['_the **second** most reliable_', 'a position, which is more honest than a win'],
    ['_the **only** one who **has ever** telephoned_', 'a superlative of one — the strongest form there is'],
  ], [2.4, 2.2]),
  '**Every superlative needs two things: of how many, and on what.** _The best machine_ answers neither. _The oldest of the three, and the only one that will run a sixty-four-page job_ answers both — and the second half is where the information is.',
  '**_By far_ for a big gap, nothing for a small one.** If A is eleven per cent under the others, _by far the cheapest_; if it is one per cent under, say _the cheapest of the three, by about one per cent_, which is a sentence that stops somebody acting on nothing.',
  '**_One of the_ is not a weaker superlative — it is a different claim**, and often the honest one: _one of the cheapest in Damascus_ says there is a group and you are in it.',
  '**And the superlative of one is the strongest sentence in the unit:** _the only one who has ever warned me in advance._ Where you can say _the only_, say it, because it cannot be argued with.',
  '⚠ ~~the most cheapest~~ · ~~the more reliable of the three~~ → _the cheapest_ · _the most reliable_.',
  '⚠ ~~one of the best supplier~~ → _one of the best supplier**s**_. ⚠ ~~the best of my two shops~~ → _the better of my two_: with two, use the comparative.',
  '**Useful phrases:** there is no best, there is a best at something · the telephone call is doing all the work in my answer · a superlative with no number behind it is a compliment.',
  '**Practise:** Make each one a qualified superlative with a field and a criterion.  1 _the best machine_  2 _the fastest supplier_  3 _the worst month_  4 _the most reliable person_  5 _the cheapest option_',
  '**Pronunciation.** 🔊 **Track 16.4** _By far the_ puts everything on **far** — /baɪ ˈfɑː ðə/ — and _of the three_ almost disappears: /əvðəˈθriː/, with the weight on _three_. Listen to six and write the field you hear: _of the three · of the two · in Damascus · that I have used · I have ever had_.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the bare superlative from the card. B says it again with a field and a criterion, and then adds a second sentence saying what the same thing is **worst** at. A asks: _and is there a superlative of one in it?_ Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '__________ is the __________ of __________, on __________. And it is the __________ on __________.'],
  ['A', 'Is there a superlative of one in it?'],
  ['B', '__________ is the only one that __________.'],
]));
out.push(table(['Card A – bare superlatives', 'Card B – bare superlatives'], [
  ['It is the best machine.', 'He is the fastest supplier.'],
  ['That was the worst month.', 'She is the most reliable person on the shift.'],
  ['It is the cheapest option.', 'That is the busiest hour.'],
  ['This is the hardest part of the job.', 'They are the best shop in the district.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight fields — _of the three, of the two, in Damascus, that I have used_ — and mark the ones where the field turned out to be **two**. With two things you cannot use a superlative at all, and in a first run three of the eight are two things, which is the commonest superlative error in the room.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the thing in your work you would call _the best_ and say it properly: of how many, on what, and what it is worst at. Then find the superlative of one, if there is one.'));
out.push(p('**b**  Swap. Then each of you say whether the other\'s field is big enough to be worth a superlative at all.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Bassel has been comparing the three agents he can buy sixty-four-page stock from, because the paper is the whole risk on the ministry order and he has written two dates in the box on the form. Ms Huda asked which is the best, and he said that is the question he wrote at the top of the page and crossed out: there is no best, there is a best at something, and there are three. Agent A is by far the cheapest — about eleven per cent under the other two — and by far the latest: nine, sixteen and twenty-three days over the date he gave, on the last three orders. Agent B is the most reliable on dates, two days early and one day late in three orders, and he is the dearest. Agent C is in the middle on both and is the only one of the three who has ever telephoned to say that something would be late before it was late. Nour said so C, and Bassel said so C, probably — and that is a different sentence from "C is the best agent": C is the second cheapest of three and the second most reliable of three, and the telephone call is doing all the work in the answer. Jad asked whether that is not a very small thing to decide on, and Bassel said it is one telephone call and it is the only thing on the page that tells him what happens when something goes wrong, which is the only thing he needs to know, because the ministry date is his and not the agent\'s. Then Ms Huda made him say the three sentences properly — by far the cheapest of the three, the most reliable of the three, the only one who has ever warned him in advance — and asked what every one of them has in it that the originals had not. A number: of the three, the second, the only one. A superlative with no number behind it is a compliment, and he has been reading compliments from all three for two years._'));
out.push(p('**Listener task:** write one superlative of one from this room.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Bassel writes before he telephones anybody. Answer the questions.'));
out.push(model([
  '**THREE PAPER AGENTS** · B. Tahhan · November · written before I telephone any of them',
  'The question I wrote at the top of this page was "which is the best agent" and I crossed it out. There are three of them and they are best at different things, and the ministry date is mine.',
  '**Price.** A is **by far the cheapest of the three** — about 11% under B and 7% under C on sixty-four-page stock, taken from the last four orders. B is the dearest. On a twelve-thousand-copy job the gap between A and B is about the cost of two days of the older machine.',
  '**Keeping to a date.** B is **the most reliable of the three**: two days early, one day late and on time, on three orders. C is **the second most reliable**: four days late and six days late, twice. A is **by far the least reliable** — 9, 16 and 23 days late on his last three — and he is the one I used for the June order, which is where six of my eight late days came from.',
  '**Getting a small quantity in quickly.** C is **the fastest of the three** on anything under five hundred sheets, usually three days. This matters about twice a year and it is on the page because it is true, not because it decides anything.',
  '**Telling me before it is late.** C is **the only one** of the three who has ever telephoned me to say that paper would be late **before** it was late. One call, in February, about eleven days. A and B have never done it in two years.',
  '**What I recommend to myself.** C for the ministry order. Not because he is the best — he is second on price and second on dates — but because the ministry date is mine and the only thing on this page that tells me what happens when something goes wrong is one telephone call in February.',
  '**What would change it.** If C gives me a date and misses it without telephoning, this page is wrong and B gets the next order at eleven per cent more, which I will pay and will not enjoy.',
  '**And what I am not doing.** I am not telling A that he has lost the order because of nine, sixteen and twenty-three days. I am telling him exactly that, next week, with the three dates on a piece of paper, because he has never been told and in two years nobody has given him a reason for anything.',
]));
out.push(item('1', 'Which agent is best on each of the four criteria?'));
out.push(item('2', 'Why does he choose C, and what phrase does he use about C that is not a comparison at all?'));
out.push(item('3', 'What is he going to tell agent A, and why?'));
out.push(writers([
  'A three-way comparison: **the question you crossed out** → **one criterion a paragraph, each with the field and a quantity** → **the superlative of one, if you have it** → **what you recommend and why it is not about being best** → **what would change it** → **and what you are going to tell the one who lost**.',
  'Say _of the three_ every time, and give the **position** rather than the win where that is the truth: _second on price and second on dates_. A recommendation that admits its choice is second on everything is the one a reader trusts.',
  'Look for the superlative of one. _The only one who has ever telephoned me before it was late._ In a three-way comparison it is usually the sentence that decides the matter, and it is never in the price column.',
  '⚠ End with the conversation nobody has. _I am telling him exactly that, next week, with the three dates on a piece of paper, because in two years nobody has given him a reason for anything._ A comparison that changes a decision and tells nobody is half a page.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the three-way comparison for a real choice in your work (60 words or more).'));
out.push(p('**THREE ______________** · ______________ · written before I ______________   The question I wrote at the top of this page was "which is the best ______________" and I crossed it out.   **______________.** ______ is **by far the ______________ of the three** — about ______ per cent ______________ — taken from ______________. ______ is the ______________.   **______________.** ______ is **the most ______________ of the three**: ______________. ______ is **the second** ______________. ______ is **by far the least** ______________ — ______________.   **______________.** ______ is **the only one** of the three who has ever ______________. ______ and ______ have never done it in ______________.   **What I recommend.** ______. Not because ______________ — ______ is second on ______________ and second on ______________ — but because ______________.   **What would change it.** If ______________, this page is wrong and ______ gets ______________.   **And what I am not doing.** I am not ______________. I am ______________, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_of the three_ on every superlative, and _the better_ where there are only two',
  '_by far_ for a big gap, a number for everything else',
  'A superlative of one, if there is one',
  'A recommendation that names its own second places',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their superlative of one.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full comparison (140 words or more) of three real options in your work — suppliers, routes, methods, people you could ask, places you could buy from. Then write underneath what you are going to tell the one that loses.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s page as **the option that has just lost**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many pages in this room have a superlative of one in them?** Count. Then: in how many of those is the superlative of one about **what happens when something goes wrong** rather than about price, speed or quality? Almost all of them, and that is the finding worth taking out of the unit.'));
out.push(hw('Write the three-way comparison (60+ words) and then do the last paragraph: tell the option that lost, with the figures, and write down what they said.'));

// ======================= 16.3 =======================
out.push(pb());
out.push(h2('16.3  The more we counted, the less we argued'));
out.push(p('**Function:** saying how two things move together   ·   **Grammar:** _the more … the more · the later … the worse_   ·   **Pronunciation:** the two halves balanced'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: one thing in your work where **more of one thing means more of another**, and you have noticed it without saying it. _The later the round starts, the more of it is done in the dark._ One sentence each, and your teacher asks whether anybody has ever counted it.'));
out.push(board('The more we counted, the less we argued.', 'the + comparative, the + comparative'));
out.push(p('**b**  Join each pair with _the … the …_ **1** _It starts late. The round is worse._  **2** _You ask early. The notes still exist._  **3** _There are more trolleys. There is less lateness._  **4** _The block is longer. The errors come later in it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Rasha say moves with what, and what is the sentence she did not expect to be able to write?'));
out.push(p('**b**  Listen again. **1** What are the three pairs she gives?   **2** What does Jad say about the difference between this and a cause?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.5  Two things moving together', [
  ['Ms Huda', 'Rasha, you have two sheets and fourteen weeks. What moves with what?'],
  ['Rasha', 'Three things, and the third one surprised me. One: the later in a block a night is, the longer the round takes — about four minutes a night, on both sheets, and that is the pattern I came in with. Two: the more trolleys there are, the less lateness — eleven late nights out of twenty-eight with two trolleys against twenty-six out of thirty-one with one.'],
  ['Lubna', 'And the third?'],
  ['Rasha', 'The third is not about nights at all. The more we wrote down, the less anybody argued with us. In April I had nine months of figures and a committee that argued about the explanation for an hour. In September I had the same figures plus a limits page, and the argument was eleven words long and it was the chair agreeing to the trial and not to the cause.'],
  ['Jad', 'That is not a cause, though. You have not shown that writing things down **makes** people stop arguing.'],
  ['Rasha', 'No, I have not, and that is the whole care of this. _The more … the less_ says two things move together. It does not say which one is pushing.'],
  ['Ms Huda', 'Give the class the test.'],
  ['Rasha', 'The test is to say the sentence the other way round and see whether it is just as likely. _The less anybody argued, the more we wrote down._ That is also possible — people write more when nobody is fighting them — and I cannot tell those two apart from fourteen weeks of one ward.'],
  ['Nour', 'We have one of those at work and nobody has ever said it out loud. The more visits we book in a day, the later we are by the fourth one. Everybody knows it. The appointments desk books five because five is what the schedule allows.'],
  ['Omar', 'And nobody has written it as a sentence.'],
  ['Nour', 'Nobody has written it as a sentence, and a sentence with two halves in it is the only way I can say it in one line to a man who has thirty seconds.'],
  ['Ms Huda', 'Which is what this grammar is for. Two columns of figures are an argument; _the more visits in a day, the later the fourth one_ is a sentence that gets repeated in a corridor, and the corridor is where decisions are actually made.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _the_ + comparative, _the_ + comparative**',
  table(['you say', 'what it claims'], [
    ['_**The more** we counted, **the less** we argued._', 'two things move together'],
    ['_**The later** the round starts, **the longer** it takes._', 'with a measurement: four minutes a night'],
    ['_**The more** trolleys, **the less** lateness._', 'the verb can be dropped in both halves'],
    ['_**The sooner** you ask, **the better**._', 'a fixed, idiomatic form'],
  ], [2.4, 2.2]),
  '**Both halves take _the_, and the comparative comes first in each.** ⚠ ~~More we counted, less we argued~~ · ~~The more we counted, we argued less~~. The shape is fixed and it is the only thing in the cycle that has to be memorised.',
  '**It says two things move together. It does not say which one is pushing.** That is the care the whole cycle is about: say the sentence the other way round and see whether it is just as likely. _The less anybody argued, the more we wrote down_ — also possible, and fourteen weeks of one ward cannot tell them apart.',
  '**Put the measurement in where you have one.** _The later the night in a block, the longer the round — about four minutes a night._ The sentence gets repeated in a corridor and the number travels with it.',
  '**And that is what the form is for.** Two columns of figures are an argument; a sentence with two halves in it is a thing somebody says to a man who has thirty seconds, and corridors are where decisions are made.',
  '⚠ Do not use it where there is no pattern, only one case. Two points on a page are a line and not a pattern, and this grammar makes two points sound like a law.',
  '**Useful phrases:** what moves with what · it does not say which one is pushing · say it the other way round and see whether it is just as likely · nobody has written it as a sentence.',
  '**Practise:** Make the sentence, put a number in it, and then say it the other way round.  1 trolleys and lateness  2 visits in a day and lateness by the fourth  3 how early you ask and whether the paper still exists  4 how long a block is and when the errors fall  5 how much you write down and how much anybody argues',
  '**Pronunciation.** 🔊 **Track 16.6** The two halves are **balanced**: the same rhythm, the same length, a clear pause between them, and the weight on the two comparatives — _the MORE we counted ‖ the LESS we argued._ Students run the halves together and lose the shape. Listen to six and repeat with the pause.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the pair from the card. B makes the sentence, puts a quantity in it, and then says it the other way round and says which direction they believe. A asks: _how many cases is that built on?_ Swap cards.'));
out.push(dlg(null, [
  ['A', '__________ and __________.'],
  ['B', 'The more __________, the __________ — about __________.'],
  ['B', 'The other way round: the more __________, the __________. I believe __________, because __________.'],
  ['A', 'How many cases is that built on?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the pairs', 'Card B – the pairs'], [
  ['trolleys · lateness', 'visits in a day · lateness by the fourth'],
  ['how early you ask · whether the paper exists', 'length of a block · when the errors fall'],
  ['how much you write down · how much anybody argues', 'time of day · how long a queue takes'],
  ['how many people are told · how fast it is done', 'how far somebody travels · how late they are'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight sentences and, next to each, the number of cases behind it. Then mark the ones where the reversed version is just as likely. Those are the ones to keep as **patterns** and never to present as causes, and in a first run it is five or six out of eight.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Say the pattern from your own work in one sentence with a number in it, then reverse it, then say how many cases it stands on.'));
out.push(p('**b**  Swap. Then each of you say whether the other\'s sentence is a pattern, a cause, or two cases pretending to be a law.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rasha has two sheets and fourteen weeks, and three things move together — the third surprised her. One: the later in a block a night is, the longer the round takes, about four minutes a night on both sheets, which is the pattern she came in with. Two: the more trolleys there are, the less lateness — eleven late nights out of twenty-eight with two trolleys against twenty-six out of thirty-one with one. And three, which is not about nights at all: the more we wrote down, the less anybody argued with us. In April she had nine months of figures and a committee that argued about the explanation for an hour; in September she had the same figures plus a limits page, and the argument was eleven words long and it was the chair agreeing to the trial and not to the cause. Jad said that is not a cause — she has not shown that writing things down makes people stop arguing — and she agreed: the form says two things move together and does not say which one is pushing. The test is to say the sentence the other way round and see whether it is just as likely: the less anybody argued, the more we wrote down is also possible, because people write more when nobody is fighting them, and fourteen weeks of one ward cannot tell the two apart. Then Nour said they have one of those at work that nobody has ever said out loud: the more visits they book in a day, the later they are by the fourth one. Everybody knows it, and the desk books five because five is what the schedule allows, and nobody has written it as a sentence — and a sentence with two halves in it is the only way she can say it in one line to a man who has thirty seconds. And Ms Huda said that is what the grammar is for: two columns of figures are an argument, and the more visits in a day, the later the fourth one is a sentence that gets repeated in a corridor, which is where decisions are actually made._'));
out.push(p('**Listener task:** write one two-halved sentence from this room with a number in it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Nour puts on one sheet of paper. Answer the questions.'));
out.push(model([
  '**FIVE VISITS IN A DAY** · one page, four sentences, for the appointments desk · N. Sabbagh · November',
  '**The sentence.** The more visits that are booked in one day, the later we are by the fourth — about **eleven minutes for every extra visit**, from forty-one visits timed between March and August.',
  '**What it looks like in a day.** Three visits: the third starts about six minutes late. Four visits: the fourth starts about twenty-five minutes late. Five visits: the fifth starts about fifty minutes late, and the customer of the fifth visit is the one who telephones to complain.',
  '**Why it happens, so far as I can see.** Not because anybody is slow. The schedule allows twenty minutes between appointments and the real travel time is twenty-five to forty inside a district and forty-five to an hour between districts. The gap is five to twenty minutes a journey, and it adds up in one direction only, because nobody ever arrives early enough to give the time back.',
  '**The other way round, which I have thought about.** _The later we are, the fewer visits get booked_ — that would be true if anybody adjusted the bookings when we ran late, and nobody does: the desk books five whatever happened yesterday. So in this case I am fairly confident which half is pushing, and that is only because the booking is done in advance by somebody who does not see the result.',
  '**What it is built on.** Forty-one visits, timed from the doorbell to the signature, by me, between March and August. Eleven of those days had five visits and nine had four.',
  '**What I am asking for.** Nothing in this page, which is deliberate. The desk can decide what to do with one sentence, and I would rather they decided it than agreed with me.',
  '**And the number I would watch.** The fifth visit. If replacements are booked at sixty minutes and a fifth visit goes into the gap, the fifth visit will be later than it is now, and everything I have written about replacements will look wrong for a reason that has nothing to do with replacements.',
]));
out.push(item('1', 'What is the sentence, and what is the quantity in it?'));
out.push(item('2', 'Why is she confident about which half is pushing?'));
out.push(item('3', 'What does she ask for, and why?'));
out.push(writers([
  'A one-sentence page: **the sentence, with a quantity in it** → **what it looks like in practice, at three sizes** → **why it happens, so far as you can see** → **the reversed version, and why you believe the direction you believe** → **what it is built on** → **and what you are asking for, which may be nothing**.',
  'Give the sentence a **rate**: _about eleven minutes for every extra visit_. A rate turns a pattern into something a reader can do arithmetic with, and arithmetic is what a desk does.',
  'Write the reversed version down. _The later we are, the fewer visits get booked_ — and then say why it is not what is happening: _the desk books five whatever happened yesterday._ That paragraph is what separates this page from a complaint.',
  '⚠ Consider asking for nothing. _The desk can decide what to do with one sentence, and I would rather they decided it than agreed with me._ A page with no request in it is sometimes the most persuasive document in the building, and 14.7 says the opposite — both are true, and which one applies depends on whether the reader can act alone.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the one-sentence page for a pattern in your own work (60 words or more).'));
out.push(p('**______________** · one page, ______ sentences, for ______________ · ______________   **The sentence.** The more ______________, the ______________ — about **______________ for every ______________**, from ______________.   **What it looks like in practice.** ______________: ______________. ______________: ______________. ______________: ______________.   **Why it happens, so far as I can see.** Not because ______________. ______________, and it adds up in one direction only, because ______________.   **The other way round, which I have thought about.** _The ______________, the _______________ — that would be true if ______________, and ______________.   **What it is built on.** ______________.   **What I am asking for.** ______________.   **And the number I would watch.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both halves with _the_ + comparative, in the fixed shape',
  'A rate in the sentence — _so much for every one more_',
  'The reversed version written down and answered',
  'What it is built on, counted',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their sentence only — the one line at the top.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (140 words or more) for a pattern everybody in your workplace knows and nobody has written as a sentence. Then give the sentence to one person in a corridor and write down what they said.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s page as **the person who books, schedules or decides the thing in the first half of their sentence**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read only the sentences.** Eleven two-halved sentences in a row, each with a number in it. Then the count that matters: how many of them has anybody in the room ever said out loud to the person who decides the first half? One or two, and that is the gap this cycle is for.'));
out.push(hw('Write the sentence for a pattern in your own work (60+ words), with a rate in it and the reversed version answered. Say it to the person who decides the first half, and write down their first four words.'));

// ======================= 16.4 =======================
out.push(pb());
out.push(h2('16.4  Done faster, done more carefully'));
out.push(p('**Function:** comparing how things are done   ·   **Grammar:** comparative adverbs   ·   **Pronunciation:** the adverb at the end and the weight on it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads six sentences in which an adjective is doing an adverb\'s job — _he writes slow · she explained it more clear · they did it quicker than us_ — and the class corrects them. Then the second question: which of the six are acceptable in speech and wrong in writing?'));
out.push(board('The afternoon run is done faster and checked less carefully.', 'faster · more carefully · better · worse'));
out.push(p('**b**  Adjective or adverb? **1** _The second machine is slower._  **2** _The second machine runs slower._  **3** _She explained it more clearly._  **4** _Her explanation was clearer._  **5** _They did it quicker._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What two things is Yara comparing, and what is the difference she can prove?'));
out.push(p('**b**  Listen again. **1** Why does she say the comparison is about **how** and not about **what**?   **2** What does Lubna say about _quicker_ and _more quickly_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.7  How, not what', [
  ['Yara', 'The two weeks of times are finished and I have something I did not expect. The morning samples and the afternoon samples are not treated differently. They are **handled** differently.'],
  ['Ms Huda', 'Say the difference.'],
  ['Yara', 'The same tests, the same machine, the same people. But the morning batch is loaded more slowly and checked more carefully, because there are two of us on the bench until one o\'clock and the racks are not full. The afternoon batch is loaded faster, with one person, into a machine that is already two-thirds full, and the second read is done less often.'],
  ['Jad', 'How much less often?'],
  ['Yara', 'In the two weeks, the second read was done on thirty-one of thirty-four morning batches and on nineteen of thirty afternoon batches. And I am one of the people who did not do it, eleven times.'],
  ['Nour', 'So the delay is not the only difference.'],
  ['Yara', 'The delay is the one everybody talks about because it is the one a ward can see. The second read is invisible, nobody has ever counted it, and it is the one I would be worried about if I were a doctor.'],
  ['Lubna', 'Can I ask about the grammar? You said "loaded more slowly". I would have said "slower".'],
  ['Yara', 'So would I, until I wrote it. _Slower_ is what we all say and it is not wrong in speech. In writing, the thing being compared is **how it is loaded**, so it is _more slowly_ — and when I wrote _the afternoon batch is loaded slower_, it read as though the batch itself were slow.'],
  ['Ms Huda', 'That is exactly the risk and it is the reason the cycle exists. An adjective describes the thing; an adverb describes the doing. In a report about how work is done, nearly every comparison you need is an adverb, and the adjective version quietly moves the fault onto the object.'],
  ['Omar', 'Say that again with an example.'],
  ['Ms Huda', '_The afternoon samples are slower_ — the samples are at fault. _The afternoon samples are handled faster and checked less carefully_ — we are. One is a complaint about the afternoon and one is a description of us.'],
  ['Yara', 'And the second one is the sentence I have written, and it has my own eleven in it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – comparative adverbs**',
  table(['you say', 'the form'], [
    ['_loaded **more slowly** · checked **more carefully**_', '_-ly_ adverbs take _more_'],
    ['_done **faster** · arrives **earlier** · works **harder**_', 'short adverbs take _-er_'],
    ['_explained it **better** · did it **worse**_', 'irregular: _well → better_, _badly → worse_'],
    ['_done **less often** · read **less thoroughly**_', '_less_ + adverb for the negative'],
    ['_**as carefully as** · **not as often as**_', 'the equal and unequal forms'],
  ], [2.5, 2.1]),
  '**An adjective describes the thing; an adverb describes the doing.** _The afternoon samples are slower_ blames the samples. _The afternoon samples are handled faster and checked less carefully_ describes the people — and in a report about how work is done, nearly every comparison you need is an adverb.',
  '**The adjective version quietly moves the fault onto the object**, which is why it is so comfortable to write. Watch for it in your own sentences about work: _the forms are slower_, _that ward is later_, _the old machine is worse_ — in each case ask who is doing the thing.',
  '⚠ ~~He writes slow~~ · ~~they did it quicker than us~~ — both are normal in speech and both are marked in a Preliminary script. In writing: _writes slowly_, _did it more quickly_.',
  '⚠ ~~She explained it more clear~~ → _more clearly_. ⚠ ~~It works more good~~ → _better_.',
  '⚠ _hard_ and _hardly_ are different words: _works harder_ (more effort) against _hardly works_ (almost not at all).',
  '**Useful phrases:** they are not treated differently, they are handled differently · the second read is invisible and nobody has ever counted it · one is a complaint about the afternoon and one is a description of us.',
  '**Practise:** Say each one as an adverb comparison, and then say who is doing the thing.  1 _the afternoon batch is slower_  2 _the old machine is worse_  3 _that ward\'s forms are later_  4 _his repairs are quicker_  5 _the second shift is more careless_',
  '**Pronunciation.** 🔊 **Track 16.8** A comparative adverb at the end of a clause takes the weight and the _-ly_ is not swallowed: _checked less CAREfully_ · _loaded more SLOWly_. Students drop the ending, which turns the adverb back into an adjective and changes who is at fault. Listen to eight and write _adjective_ or _adverb_.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the adjective sentence from the card. B says it again as an adverb comparison and then says **who is doing the thing**. A asks the question that matters: _does the new version put the fault somewhere else?_ Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'As an adverb: __________. The person doing it is __________.'],
  ['A', 'Does that put the fault somewhere else?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – adjective sentences', 'Card B – adjective sentences'], [
  ['The afternoon batch is slower.', 'The old machine is worse.'],
  ['That ward\'s forms are always later.', 'His repairs are quicker.'],
  ['The second shift is more careless.', 'The night round is longer.'],
  ['The Shaalan notes are less reliable.', 'The new tubes are more difficult.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight adverb versions and mark the ones where the fault moved from a thing to a person. It is six or seven of the eight, and that is the honest part of the cycle: the adjective version is not a grammar mistake, it is a way of writing that nobody has to answer for.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take two parts of your own work — two shifts, two days of the week, two times of day, two kinds of job — and compare **how** they are done, in three adverb sentences with quantities.'));
out.push(p('**b**  Swap. Then each of you find the sentence where the other has described a thing when they meant a person, including themselves.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Yara\'s two weeks of times are finished and she has something she did not expect: the morning samples and the afternoon samples are not treated differently, they are handled differently. The same tests, the same machine, the same people — but the morning batch is loaded more slowly and checked more carefully, because there are two of them on the bench until one o\'clock and the racks are not full; and the afternoon batch is loaded faster, with one person, into a machine that is already two-thirds full, and the second read is done less often. Jad asked how much less often, and she said that in the two weeks the second read was done on thirty-one of thirty-four morning batches and on nineteen of thirty afternoon batches — and that she is one of the people who did not do it, eleven times. Nour said so the delay is not the only difference, and Yara said the delay is the one everybody talks about because a ward can see it: the second read is invisible, nobody has ever counted it, and it is the one she would be worried about if she were a doctor. Then Lubna asked about the grammar, because she would have said "slower" and Yara wrote "loaded more slowly" — and Yara said so would she until she wrote it: slower is what everybody says and is not wrong in speech, but in writing the thing being compared is how it is loaded, and when she wrote "the afternoon batch is loaded slower" it read as though the batch itself were slow. Ms Huda said that is exactly the risk and the reason the cycle exists: an adjective describes the thing and an adverb describes the doing, and in a report about how work is done nearly every comparison is an adverb, because the adjective version quietly moves the fault onto the object. The afternoon samples are slower blames the samples; the afternoon samples are handled faster and checked less carefully blames us — and Yara said the second one is the sentence she has written, and it has her own eleven in it._'));
out.push(p('**Listener task:** write one adverb comparison from this room that moved the fault onto a person.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the second page of Yara\'s two-week report. Answer the questions.'));
out.push(model([
  '**TWO WEEKS OF TIMES · THE SECOND PAGE** · Y. Mansour · 20 November · and this page is the one I did not expect to write',
  'The first page of this report is about **when** samples are released, and it says what everybody expected: afternoon samples are released later, by a mean of nine hours and forty minutes.',
  'This page is about **how** they are handled, and nobody has ever counted it.',
  '**Loading.** The morning batch is loaded more slowly: two people, a rack that is not full, and the sheet checked against the rack before the machine is started. The afternoon batch is loaded faster, by one person, into a machine that is already about two-thirds full.',
  '**The second read.** Done on **31 of 34** morning batches and on **19 of 30** afternoon batches. I did the loading on fourteen of the afternoon batches and I did not do the second read on eleven of them.',
  '**Checking against the request form.** Done as carefully in the afternoon as in the morning, so far as I can see — I could find no difference and I looked for one.',
  '**What this page is not.** It is not a complaint about staffing, and it is not an argument that the afternoon work is wrong. Nineteen second reads out of thirty may be entirely acceptable; I do not know what the standard is and I have asked twice and not been told.',
  '**Why I am writing it anyway.** Because the delay is visible and the second read is not. A ward that complains about a day\'s delay is complaining about the thing it can see, and if somebody fixes the delay by loading the afternoon batch faster still, the invisible thing gets worse and nobody will know, including us.',
  '**And the sentence that is mine.** I did not do the second read eleven times, on afternoons when I was alone with a full machine and a bag that had come in at ten past three. I am not going to write that as though it were somebody else\'s arithmetic.',
]));
out.push(item('1', 'What is the first page about, and what is this page about?'));
out.push(item('2', 'What could she find no difference in, and what does she say about looking for one?'));
out.push(item('3', 'What is the risk she names if somebody fixes the visible problem?'));
out.push(writers([
  'A page about **how**: **what the first page said, which everybody expected** → **one adverb comparison a paragraph, with counts** → **the thing you could find no difference in** → **what the page is not** → **why you are writing it anyway** → **and the sentence with your own number in it**.',
  'Write the paragraph where you found **nothing**: _done as carefully in the afternoon as in the morning, so far as I can see — I could find no difference and I looked for one._ A report that finds a difference everywhere is a report that was looking for one.',
  'Say plainly where you do not know the standard: _nineteen out of thirty may be entirely acceptable; I do not know what the standard is and I have asked twice._ That protects the page from being read as an accusation.',
  '⚠ The last paragraph is the one that makes the rest usable: your own count, in the first person, with no arithmetic hiding it. _I did not do the second read eleven times._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about **how** something is done differently in two parts of your work (60 words or more).'));
out.push(p('**______________ · THE PAGE ABOUT HOW** · ______________   The visible thing is ______________, and it is what everybody expects.   This page is about **how** ______________, and nobody has ever counted it.   **______________.** ______________ is done more ______________: ______________. ______________ is done ______________, by ______________.   **______________.** Done on ______ of ______ and on ______ of ______. I did ______________ on ______ of them and I did not ______________ on ______.   **______________.** Done as ______________ as ______________, so far as I can see — I could find no difference and I looked for one.   **What this page is not.** It is not ______________. ______________ may be entirely acceptable; I do not know ______________ and I have asked ______________.   **Why I am writing it anyway.** Because ______________ is visible and ______________ is not.   **And the sentence that is mine.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Adverbs for the doing, adjectives only for things',
  '_more carefully · less often · faster_, each with a count',
  'One paragraph where you found no difference',
  'Your own number, in the first person, in the last line',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their last line only — the sentence with their own number in it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (140 words or more) comparing **how** the same work is done in two places, shifts or times of day where you work. Counts on everything, one paragraph where you found nothing, and your own number at the end.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s page as **somebody who does the work on the other shift**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many pages in the room have the writer\'s own number in them?** Count, and then ask the harder question: of the pages that do not, how many are about work the writer does themselves? Those are the pages that will be read as accusations, and the fix is one sentence.'));
out.push(hw('Write the page about **how** (60+ words), with your own number in it, and give it to one person who does the same work on another shift. Write down the first thing they said.'));

// ======================= 16.5 =======================
out.push(pb());
out.push(h2('16.5  In terms of what?'));
out.push(p('**Function:** evaluating against stated criteria   ·   **Grammar:** _in terms of · as far as … is concerned · on_   ·   **Pronunciation:** the criterion stressed, not the verdict'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, two minutes and nothing written: A names a decision they have to make. B may only ask _in terms of what?_ and _what matters most?_ — nothing else. Then swap, and your teacher asks which of you found your own criteria changing while you spoke.'));
out.push(board('In terms of dates, B. In terms of price, A. And the order of the criteria is the decision.', 'in terms of · as far as … is concerned'));
out.push(p('**b**  Which criterion is each sentence about? **1** _It is eleven per cent cheaper._  **2** _He telephoned before it was late._  **3** _They file every note by date._  **4** _It is twice as fast on small quantities._  **5** _Nobody has ever answered my letter._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Lubna discover about the order she wrote her criteria in?'));
out.push(p('**b**  Listen again. **1** What are her five criteria, and which two did she move?   **2** What does Ms Huda say about criteria written afterwards?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.9  Write them down first', [
  ['Lubna', 'The university has to choose between three buildings for the second-year studios and my tutor has asked four of us for a page each. Three buildings, and I have been in all three.'],
  ['Ms Huda', 'What did you do first?'],
  ['Lubna', 'What everybody does. I went round all three with a notebook and then wrote a page recommending the one on Sharia Baghdad.'],
  ['Nour', 'And then?'],
  ['Lubna', 'And then I did what this room would do, which is that I looked at my own page to see what my criteria were — and there were five of them, and they came in this order: light, floor area, the state of the stairs, how far it is from the main building, and the lavatories.'],
  ['Jad', 'What is wrong with that?'],
  ['Lubna', 'Nothing is wrong with the five. What is wrong is that I wrote them after I had chosen, and the one I had chosen is by far the best on light and by far the worst on distance — and distance came fourth.'],
  ['Omar', 'So you put light first because the building you liked is good at light.'],
  ['Lubna', 'I put light first because I am an architecture student and light is what I notice, and because the building I liked has the best light I have ever stood in. And I cannot tell those two reasons apart, which is the problem.'],
  ['Ms Huda', 'So what did you do?'],
  ['Lubna', 'I started again and wrote the criteria first, before looking at any of the three. And the order came out different: distance first, because a studio twenty minutes from the main building is used for four hours and not for ten; then floor area per student, because that is what the studio is for; then light; then stairs; then the lavatories, which I had fifth and which actually belong second if you ask the two women in my year who use them.'],
  ['Rasha', 'And the recommendation?'],
  ['Lubna', 'The recommendation changed. In terms of light, Baghdad is by far the best of the three. In terms of distance and area per student, it is the worst. As far as the four hours a day are concerned, the one on the university side wins, and it is the one I walked round in eleven minutes and dismissed because the light is poor and the stairs are ugly.'],
  ['Ms Huda', 'Say the rule you have just discovered, because it is the most expensive one in this unit.'],
  ['Lubna', 'Criteria written after you look are the criteria that choose what you had already chosen. And they are not dishonest. They are what you noticed, and what you noticed is what you are good at noticing.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Evaluating against criteria**',
  table(['you say', 'what it does'], [
    ['_**In terms of** light, Baghdad is the best._', 'names the criterion before the verdict'],
    ['_**As far as** distance **is concerned**, it is the worst._', 'more formal; good in a report'],
    ['_**On** price, A wins; **on** dates, B._', 'the short spoken form'],
    ['_**Judged on** area per student, …_', 'marks the measure as chosen'],
    ['_**Of the five criteria**, the first two are …_', 'the order, stated'],
  ], [2.5, 2.1]),
  '**Write the criteria down before you look, and put them in order.** The order **is** the decision: the same three options, the same facts, two different orders, two different verdicts. And a criterion that is fourth is a criterion that will not change anything.',
  '⚠ **Criteria written after you look are the criteria that choose what you had already chosen** — and they are not dishonest. They are what you noticed, and what you noticed is what you are good at noticing. That is the most expensive sentence in the unit.',
  '**Ask whose criteria they are.** Lubna had the lavatories fifth and the two women in her year have them second. A list of criteria with one person\'s name on it is a list of one person\'s criteria, however carefully it is written.',
  '**_In terms of_ goes in front of the verdict, not after it.** _In terms of light, it is the best_ — so a reader knows what they are being told before they are told it.',
  '⚠ ~~In terms of light it is better than the others in terms of light~~ — once per sentence. ⚠ ~~As far as the distance~~ → _as far as the distance **is concerned**_.',
  '**Useful phrases:** in terms of what? · I wrote them after I had chosen · I cannot tell those two reasons apart, which is the problem · the order came out different · they are what you noticed.',
  '**Practise:** Write the criteria **first**, in order, and then evaluate.  1 choosing between two suppliers  2 choosing a route  3 choosing which of two faults to fix first  4 choosing somebody to ask for help  5 choosing which record to start keeping',
  '**Pronunciation.** 🔊 **Track 16.10** The weight goes on the **criterion**, not on the verdict: _in terms of LIGHT, it is the best_ — because the criterion is the new information and the verdict is what the listener was waiting for anyway. Listen to eight and write the criterion only.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the decision from the card. B writes four criteria **in order** before saying anything about the options, reads them out, and then evaluates. A asks the two questions: _whose criteria are those?_ and _which one is fourth, and does it matter?_ Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'My criteria, in order: one, __________; two, __________; three, __________; four, __________.'],
  ['B', 'In terms of __________, __________. As far as __________ is concerned, __________.'],
  ['A', 'Whose criteria are those?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the decisions', 'Card B – the decisions'], [
  ['Which of two suppliers to use for the main order.', 'Which route to take when the road is closed.'],
  ['Which of two faults to fix first.', 'Which record to start keeping this month.'],
  ['Whom to ask for help with something difficult.', 'Which shift to put the new person on.'],
  ['Which of two forms to simplify first.', 'Which of two rooms to work in.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the four criteria from each and then answer the two questions for the pair: whose criteria are they, and does the fourth one matter? In a first run about half the lists are one person\'s professional habit — the thing that person is best at noticing — and naming that is not a criticism, it is the finding.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a decision you have already made at work. Write down the criteria you would give now, in order. Then say, honestly, whether you wrote them before or after you decided.'));
out.push(p('**b**  Swap. Then each of you say which criterion the other would have to move to the top for their decision to change.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The university has to choose between three buildings for the second-year studios and Lubna\'s tutor asked four students for a page each. She did what everybody does: went round all three with a notebook and wrote a page recommending the one on Sharia Baghdad. Then she did what this room would do and looked at her own page to find out what her criteria were — five of them, in this order: light, floor area, the state of the stairs, distance from the main building, and the lavatories. Jad asked what is wrong with that, and she said nothing is wrong with the five: what is wrong is that she wrote them after she had chosen, and the building she chose is by far the best of the three on light and by far the worst on distance — and distance came fourth. Omar said so she put light first because the building she liked is good at light, and she said she put light first because she is an architecture student and light is what she notices, and because that building has the best light she has ever stood in — and she cannot tell those two reasons apart, which is the problem. So she started again and wrote the criteria first, before looking at any of the three, and the order came out different: distance first, because a studio twenty minutes from the main building is used for four hours and not for ten; then floor area per student; then light; then stairs; then the lavatories, which she had fifth and which belong second if you ask the two women in her year who use them. And the recommendation changed. In terms of light, Baghdad is by far the best; in terms of distance and area per student, it is the worst; and as far as the four hours a day are concerned, the building on the university side wins — the one she walked round in eleven minutes and dismissed because the light is poor and the stairs are ugly. The rule she had discovered: criteria written after you look are the criteria that choose what you had already chosen, and they are not dishonest — they are what you noticed, and what you noticed is what you are good at noticing._'));
out.push(p('**Listener task:** write one list of criteria from this room and say whose habits it is made of.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Lubna sends her tutor. Answer the questions.'));
out.push(model([
  '**THREE BUILDINGS FOR THE SECOND-YEAR STUDIOS** · L. Sweidan · November · one page, and the criteria are on it before the buildings are',
  '**My criteria, written before I went back to any of the three, and in order.**',
  '**1 Distance from the main building.** A studio more than fifteen minutes away is used for four hours at a time and not for ten, and most second-year work happens in the hour you were going to go home.',
  '**2 Floor area per student at the busiest week.** Not total area: area per student in the week before a hand-in, when every table is occupied.',
  '**3 The lavatories.** I had this fifth in my first version. The two women in my year have it second, and there are nine of us, and I have put it second because they are right and I am not the person who finds out whether they are.',
  '**4 Light.** Which is what I notice first, every time, and what I have put fourth on purpose.',
  '**5 Stairs and access.** The 1962 staircase in the Baghdad building is 76 cm and outward-opening at the bottom, which is a real problem and not a preference.',
  '**And then the three buildings.**',
  '**In terms of distance**, the university-side building wins by a long way: four minutes against nineteen and twenty-two. **In terms of area per student in the busiest week**, it is 2.4 m² against 1.9 and 2.1 — the best, and not by much. **In terms of the lavatories**, it is the only one of the three with two that work. **In terms of light**, it is by far the worst: north-facing, and two of the four rooms have one window each. **In terms of stairs**, Baghdad is the worst and the other two are the same.',
  '**My recommendation.** The university-side building. It wins on the first three criteria and loses badly on the fourth.',
  '**What I would say if somebody asked me which building I would rather work in.** Baghdad, and I would be in it for four hours a day instead of ten, and I would have written this page the other way round if I had not written the criteria down first.',
]));
out.push(item('1', 'Which criterion did she move, and why?'));
out.push(item('2', 'Where is light in her list, and why has she put it there?'));
out.push(item('3', 'What does she say she would answer if she were asked which building she would rather work in?'));
out.push(writers([
  'A page that puts its criteria first: **the criteria, in order, written before you looked** → **each one with a definition of how it is measured** → **then the options, one sentence per criterion, with numbers** → **the recommendation** → **and what you would say if you were asked what you would rather do**.',
  'Define each criterion. _Not total area: area per student in the week before a hand-in_ — because a criterion with no definition is a criterion that can be met by whichever option you prefer.',
  'Put the thing you notice first **where it belongs**, and say that you have. _Light, which is what I notice first every time, and what I have put fourth on purpose._',
  '⚠ End with the honest contradiction. _I would rather work in the other one, and I would have written this page the other way round if I had not written the criteria down first._ A page that admits the writer\'s preference and recommends against it is the most persuasive document in this book.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the criteria-first page for a real choice (60 words or more).'));
out.push(p('**______________** · ______________ · one page, and the criteria are on it before the options are   **My criteria, written before I looked, in order.**   **1 ______________.** ______________, because ______________.   **2 ______________.** Not ______________: ______________.   **3 ______________.** I had this ______ in my first version. ______________ have it ______, and I have put it ______ because ______________.   **4 ______________.** Which is what I notice first, and what I have put ______ on purpose.   **And then the options.** **In terms of ______________**, ______________ wins: ______________ against ______________. **In terms of ______________**, ______________. **In terms of ______________**, ______________ is by far the worst.   **My recommendation.** ______________. It wins on ______________ and loses on ______________.   **What I would say if somebody asked me what I would rather do.** ______________, and I would have written this page the other way round if ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The criteria written down before the options, and numbered in order',
  'A definition of how each one is measured',
  'Somebody else\'s criterion in the list, and whose it is',
  '_In terms of_ in front of each verdict — and a last line on your own preference',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their criteria only — the numbered list, in order, with no options mentioned.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (140 words or more) for a decision you have to make or have already made. Criteria first, in order, with definitions; then the options against each; then the recommendation and your own preference. Then write underneath whether you wrote the criteria before or after.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s page as **somebody whose criteria are not on the list**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the room wrote their criteria after they had decided?** Hands, and expect most of them, including the honest ones. Then: how many lists have somebody else\'s criterion in them? One or two. The second number is the one that matters, because a decision made on one person\'s criteria is one person\'s decision wearing a page of arithmetic.'));
out.push(hw('Write the criteria-first page for one decision in your work (60+ words). Then show the criteria — not the recommendation — to one person who is affected by the decision, and write down what they would add or move.'));

// ======================= 16.6 =======================
out.push(pb());
out.push(h2('16.6  The recommendation paragraph'));
out.push(p('**Function:** writing a comparison that reaches a verdict   ·   **Grammar:** the whole unit in one document   ·   **Pronunciation:** reading a recommendation aloud without selling it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads the last paragraph of four real comparison documents the class has brought in. For each one the class answers one question: **what is being recommended?** In two of the four it cannot be said.'));
out.push(board('C, for the ministry order. Not because he is the best.', 'the verdict · the reason · the limit · the trigger'));
out.push(p('**b**  Which of these is a recommendation? **1** _Both options have advantages._  **2** _We recommend C for the ministry order._  **3** _It is for the management to decide._  **4** _C, unless the price rises above eleven per cent, in which case B._  **5** _Further consideration is required._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What four parts does a recommendation paragraph have, and which one do people leave out?'));
out.push(p('**b**  Listen again. **1** What does Nour say happens to a comparison with no verdict?   **2** What is the trigger in Bassel\'s recommendation?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.11  Four parts and a trigger', [
  ['Ms Huda', 'Everybody has a comparison now. Today it ends in a sentence. Nour, what happens to a comparison that does not?'],
  ['Nour', 'Somebody else makes the decision from your page, and they make it on the first column, because the first column is the one they read. I have watched a man choose a supplier off a table of nine rows because the first row was price and he was busy.'],
  ['Ms Huda', 'So the four parts. Bassel.'],
  ['Bassel', 'The verdict, first, in one sentence. Then the reason, which is **not** that the thing is best. Then the limit — what the recommendation does not cover. And then the trigger: what would have to happen for the answer to change.'],
  ['Jad', 'Which one gets left out?'],
  ['Bassel', 'The trigger. I have left it out of every decision I have ever written down, for nineteen years, and the reason is that it feels like saying you might be wrong.'],
  ['Lubna', 'Say yours.'],
  ['Bassel', 'Agent C for the ministry order. Not because he is the best — he is second on price and second on dates — but because he is the only one of the three who has ever telephoned me before something was late, and the ministry date is mine. The limit: this is for the ministry order only, twelve thousand copies, and it says nothing about the small jobs, where A is eleven per cent cheaper and a week late is nobody\'s disaster. The trigger: if C gives me a date and misses it without telephoning, this page is wrong, and B gets the next order at eleven per cent more.'],
  ['Rasha', 'And will you actually do that?'],
  ['Bassel', 'That is the question, and the reason I have written the trigger in a sentence is so that in February I cannot argue with myself about what I decided in November. The page will say it.'],
  ['Nour', 'We call that writing down the thing that will embarrass you.'],
  ['Ms Huda', 'And the order of the four parts matters as much as it did in 15.6. Verdict first, because a reader who reaches the end of a page without one has already made their own decision; and the trigger last, because it is the only part of the four that is about the future.'],
  ['Omar', 'What about "it is for the management to decide"?'],
  ['Ms Huda', 'It is for the management to decide, and they will decide better with a recommendation in front of them than without one. The sentence you are afraid of writing is the sentence they are paying you for.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The recommendation paragraph: four parts in order**',
  table(['the part', 'the example'], [
    ['**1 the verdict**', '_Agent C for the ministry order._ One sentence, first'],
    ['**2 the reason**', '_Not because he is best — because he is the only one who warns me._'],
    ['**3 the limit**', '_For this order only; it says nothing about small jobs._'],
    ['**4 the trigger**', '_If C misses a date without telephoning, B gets the next order._'],
  ], [1.7, 2.9]),
  '**The verdict goes first.** A reader who reaches the end of a page without one has already decided — and they will have decided on the first column, because the first column is what a busy person reads.',
  '**The reason is usually not "it is the best".** _Second on price and second on dates, and the only one who warns me_ is a better reason than any superlative, because it names the thing the decision actually turns on.',
  '**The limit is what the recommendation does not cover.** One sentence, and it stops a decision about twelve thousand copies being applied to a job of two hundred.',
  '**And the trigger is the part everybody leaves out.** _If this happens, the answer changes and I will say so._ Write it in a sentence so that in February you cannot argue with yourself about what you decided in November — and because it is the one sentence that makes a recommendation a decision rather than a preference.',
  '⚠ ~~Both options have advantages~~ · ~~further consideration is required~~ · ~~it is for the management to decide~~ as the last line of a comparison. All three are ways of not writing the sentence you are paid for.',
  '**Useful phrases:** somebody else makes the decision from your page, and they make it on the first column · it feels like saying you might be wrong · writing down the thing that will embarrass you · the sentence you are afraid of writing is the sentence they are paying you for.',
  '**Practise:** Write the four parts for each.  1 two suppliers  2 three buildings  3 two ways of booking appointments  4 two shifts to put somebody on  5 two records to start',
  '**Pronunciation.** 🔊 **Track 16.12** A recommendation read aloud is **flat on the verdict** and slower on the trigger: _Agent C for the ministry order._ ‖ _If he misses a date without telephoning, B gets the next order._ Read with weight on the verdict it sounds like a sale; the weight belongs on the condition. Listen to four and mark the two that are read well.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the comparison from the card. B gives the four parts in order, in four sentences. A then asks the question the cycle turns on: _will you actually do what your trigger says?_ Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '__________. Not because __________ — because __________. This is for __________ only and says nothing about __________. And if __________, this page is wrong and __________.'],
  ['A', 'Will you actually do what your trigger says?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the comparisons', 'Card B – the comparisons'], [
  ['Two suppliers for a big order.', 'Three buildings for a class.'],
  ['Two ways of booking appointments.', 'Two shifts to put a new person on.'],
  ['Two records to start keeping.', 'Two faults to fix first.'],
  ['Two routes for an early run.', 'Two people to ask for a difficult thing.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight triggers, and mark the ones that are **specific enough to recognise when they happen**. _If the service gets worse_ is not a trigger; _if he misses a date without telephoning_ is. In a first run half of them are not triggers at all, and the difference is whether you would know on the day.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own comparison from 16.1 or 16.5 and say the four parts out loud. Then say the trigger again, more precisely, so that you would know on the day it happened.'));
out.push(p('**b**  Swap. Then each of you say whether the other would really act on their trigger, and what it would cost them to.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda said that today every comparison ends in a sentence, and asked Nour what happens to one that does not. Nour said somebody else makes the decision from your page, and they make it on the first column, because that is the one they read — she has watched a man choose a supplier off a table of nine rows because the first row was price and he was busy. Then the four parts, from Bassel: the verdict first, in one sentence; the reason, which is not that the thing is best; the limit, which is what the recommendation does not cover; and the trigger, which is what would have to happen for the answer to change. Jad asked which one gets left out, and Bassel said the trigger — he has left it out of every decision he has written down in nineteen years, because it feels like saying you might be wrong. His own: agent C for the ministry order; not because he is the best, since he is second on price and second on dates, but because he is the only one of the three who has ever telephoned before something was late, and the ministry date is his. The limit is that it is for the ministry order only, twelve thousand copies, and says nothing about the small jobs where A is eleven per cent cheaper and a week late is nobody\'s disaster. The trigger: if C gives him a date and misses it without telephoning, the page is wrong and B gets the next order at eleven per cent more. Rasha asked whether he will actually do that, and Bassel said that is the question, and the reason the trigger is in a sentence is so that in February he cannot argue with himself about what he decided in November — the page will say it. Nour said they call that writing down the thing that will embarrass you. And Ms Huda said the order matters as much as it did in 15.6: the verdict first, because a reader who reaches the end without one has already decided, and the trigger last, because it is the only part about the future. Omar asked about "it is for the management to decide", and she said they will decide better with a recommendation in front of them — and the sentence you are afraid of writing is the sentence they are paying you for._'));
out.push(p('**Listener task:** write the best trigger from this room — the one you would recognise on the day.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Bassel\'s page, which is one page and goes to nobody but himself. Answer the questions.'));
out.push(model([
  '**PAPER FOR MINISTRY ORDER 2026/2 · RECOMMENDATION** · B. Tahhan · 12 November · for my own file, and I will read it again in February',
  '**The verdict.** Agent C, for this order, at 7% above the cheapest quotation.',
  '**The reason, which is not that he is the best.** C is second of three on price and second of three on keeping to a date. He is **the only one of the three** who has ever telephoned me to say that paper would be late before it was late — once, in February, about eleven days. The ministry date is mine: I have written two dates in a box and signed my name under them, and the only thing I actually need from an agent is to be told early when the first date has gone. A is 11% cheaper and was 9, 16 and 23 days late on his last three orders, and he told me on none of them.',
  '**What this does not cover.** This is the ministry order only: twelve thousand copies, sixty-four pages, one delivery. It says nothing about the small jobs, where A is 11% cheaper and a week late costs nobody anything, and I shall go on using A for those. It also says nothing about quality: all three sell the same two mills\' stock and I have never been able to tell them apart on the machine.',
  '**The trigger.** If C gives me a delivery date and misses it **without telephoning me first**, this page is wrong. In that case B gets the next ministry order at 11% above A, and I shall pay the difference and not enjoy it. I am writing that in a sentence so that in February I cannot argue with myself about what I decided in November.',
  '**And the thing I am doing that is not in the four parts.** I am telling A why he has not got this order: the three dates, on one piece of paper, with the nine, sixteen and twenty-three days on it. He has never been told, and in two years nobody has given him a reason for anything, and if he starts telephoning people before things are late he will be the best agent in Damascus inside a year.',
]));
out.push(item('1', 'What is the verdict, and what is the reason given for it?'));
out.push(item('2', 'What two things does the recommendation not cover?'));
out.push(item('3', 'What is the trigger, and why has he written it in a sentence?'));
out.push(writers([
  'A recommendation: **the verdict in one sentence, with the price of it** → **the reason, which is not that it is best** → **what the recommendation does not cover** → **the trigger, specific enough to recognise on the day** → **and anything you are doing that is not in the four parts**.',
  'Put the **cost of your verdict** in the verdict: _Agent C, at 7% above the cheapest quotation._ A recommendation that hides its own price gets reversed by whoever finds the price later.',
  'Make the trigger recognisable: _misses a date **without telephoning me first**_. Then say why it is written down — _so that in February I cannot argue with myself about what I decided in November_.',
  '⚠ The last paragraph is the one most comparisons never have: tell the option that lost, with the figures. It costs one conversation and it is the only part of the page that could make next year\'s comparison come out differently.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the recommendation for your own comparison (60 words or more).'));
out.push(p('**______________ · RECOMMENDATION** · ______________ · for ______________, and I will read it again in ______________   **The verdict.** ______________, at ______________.   **The reason, which is not that it is the best.** ______________ is second of ______ on ______________ and second on ______________. It is **the only one** that ______________. What I actually need is ______________.   **What this does not cover.** This is ______________ only. It says nothing about ______________, where ______________. It also says nothing about ______________.   **The trigger.** If ______________, this page is wrong. In that case ______________, and I shall ______________. I am writing that in a sentence so that in ______________ I cannot argue with myself about what I decided in ______________.   **And the thing I am doing that is not in the four parts.** I am telling ______________ why ______________, with ______________ on one piece of paper.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The verdict first, in one sentence, with its cost in it',
  'A reason that is not a superlative',
  'The limit — what the recommendation does not cover',
  'A trigger you would recognise on the day it happened',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their trigger only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full recommendation (140 words or more) for a real decision — one you have to make, or one you have already made and never wrote down. Four parts in order, and the last paragraph telling the option that lost. Then put a date on reading it again.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s page as **the person who will read it again on the date at the top, when something has gone wrong**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Whose trigger would they recognise on the day?** Hands. Then the harder question: whose trigger would cost them money, time or face if they acted on it? Those are the real ones, and in a class of eleven there are usually three.'));
out.push(hw('Write the recommendation (60+ words) with all four parts, put the date you will read it again at the top, and tell the option that lost — with the figures. Write down what they said.'));

// ======================= 16.7 =======================
out.push(pb());
out.push(h2('16.7  Review & Mediate: What is not in the columns'));
out.push(p('**Function:** explaining a comparison table   ·   **Recycling:** Units 1–16   ·   **Exam practice:** B1 Preliminary Reading Part 3, Writing Part 2, Listening Part 4'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 16 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** It is more cheaper than the other one.  **2** It is not as cheap than it looks.  **3** She explained it more clear.  **4** It is the best of my two shops.  **5** More we counted, less we argued.  **6** In terms of light it is better in terms of light.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the table that was sent to a hospital\'s equipment committee.'));
out.push(box(null, [
  '**EQUIPMENT COMMITTEE · DRUG TROLLEYS · COMPARISON OF TWO SUPPLIERS** _(circulated 4 November, one page)_',
  table(['', 'Supplier A', 'Supplier B'], [
    ['Price per trolley (SYP)', '1,850,000', '2,240,000'],
    ['Delivery', '6 weeks', '9 weeks'],
    ['Guarantee', '12 months', '24 months'],
    ['Drawers', '6', '5'],
    ['Lockable', 'Yes', 'Yes'],
    ['Wheel diameter', '125 mm', '160 mm'],
    ['Weight (empty)', '41 kg', '48 kg'],
    ['Spare wheels held in Damascus', 'No', 'Yes'],
    ['Recommendation', '**A — 17% cheaper**', ''],
  ], [2, 1.2, 1.2]),
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Rasha and Nour read the table as two people who use the thing it is about. What is not in the columns, and which row do they say is the only one that matters?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.13  Nine rows and the wrong one at the bottom', [
  ['Ms Huda', 'Rasha, you have pushed a trolley for nine years. Read the table as somebody who has.'],
  ['Rasha', 'Row six. Wheel diameter: 125 against 160.'],
  ['Nour', 'That is the one row I would never have looked at.'],
  ['Rasha', 'It is the only row on the page that decides anything. The trolley that went into the workshop on the second of February went in with a broken wheel, and it is a 125. Every 125 we have had has gone in with a wheel inside three years, because a ward floor has a lip at every doorway and a 125 hits the lip and a 160 goes over it.'],
  ['Jad', 'Is that measured anywhere?'],
  ['Rasha', 'Not in writing, which is the problem. What I have is nine years, four trolleys, and the one with the big wheels, which is the oldest thing on that ward and has never been in the workshop.'],
  ['Ms Huda', 'So what is not in the columns?'],
  ['Rasha', 'Four things. How many days a wheel takes to come. Whether anybody will chase it — there is no form for chasing equipment, which is the whole reason that trolley is still in a workshop in November. What the ward does while the trolley is away, which is the twenty-six late nights out of thirty-one. And whether the drawers are the size of a drug chart, because A has six drawers and five of them are too narrow for the chart to lie flat, and a nurse who has to fold a chart at two in the morning folds it the same way every time and the fold goes through the signature box.'],
  ['Nour', 'Row eight is the one I would have fought on. Spare wheels held in Damascus: no, and yes.'],
  ['Rasha', 'Row eight and row six are the same row and nobody has noticed, because they are four rows apart and one of them is in millimetres.'],
  ['Ms Huda', 'And the recommendation at the bottom?'],
  ['Rasha', 'Seventeen per cent cheaper, which is about three hundred and ninety thousand, and a wheel is about eleven. So the cheaper trolley is cheaper by thirty-five wheels and it will cost the ward a hundred and twenty late nights while they wait for the first one.'],
  ['Ms Huda', 'That is the whole of this unit in one sentence, and I want the class to notice what made it possible. Not the arithmetic — the arithmetic is one division. It is that she has pushed one for nine years, and nobody asked her.'],
  ['Nour', 'Nobody ever asks the person who pushes it.'],
]));
out.push(sp());
out.push(box('Language box – reading a comparison table', [
  '**Read the rows in the order of your own criteria, not in the order of the page.** The rows are in somebody\'s order already, and that order is a decision that has been made for you — usually price first, because price is the row everybody can check.',
  '**Then ask the question of the whole page: what is not in the columns?** Four kinds of thing are almost never there: **what happens when it goes wrong** (who chases it, how long a part takes), **what it costs while it is not working**, **how it is used by the person who uses it** (whether a chart lies flat), and **what the person who uses it knows and has never been asked**.',
  '**Look for two rows that are the same row.** _Wheel diameter_ and _spare wheels held in Damascus_ are one question four rows apart, and nobody notices because one of them is in millimetres.',
  '**Convert the saving into the thing it buys.** _17% cheaper is about 390,000, and a wheel is 11,000: cheaper by thirty-five wheels, and a hundred and twenty late nights waiting for the first one._ That sentence is one division and it is the whole argument.',
  '**And ask who was asked.** A comparison table about a thing is nearly always written by somebody who does not use it. The person who pushes it has the row that decides the matter, in their hands, unmeasured, and nobody has ever asked them for it.',
  '**Useful phrases:** that is the one row I would never have looked at · it is not measured anywhere, which is the problem · they are the same row and nobody has noticed · cheaper by thirty-five wheels · nobody ever asks the person who pushes it.',
  '**Pronunciation.** 🔊 **Track 16.14** Explaining a table to somebody who has not seen it: **the row name, a pause, then the two figures, then what it means** — _wheel diameter ‖ 125 against 160 ‖ which is every wheel we have ever broken._ Listen to four and write the row name and the consequence only.',
], C.lteal));
out.push(stage('3', 'Practise – and then decide together (Speaking Part 3)', 7));
out.push(p('Work in pairs. A has one of the tables below and does **not** show it. A reads it once, then explains it: the row that decides it, what is not in the columns, any two rows that are the same row, and what the saving buys. B must say what they would add to the table. **Then, in two minutes together**, decide the two rows you would put at the top if you were rewriting it. You do not have to agree. Change roles with the other table.'));
out.push(table(['Table A – two printing papers', 'Table B – two laboratory analysers'], [
  ['Price per ream: 11% difference', 'Price: 23% difference'],
  ['Delivery: 7 days against 14', 'Delivery: 10 weeks against 16'],
  ['Weight: 80 gsm against 90 gsm', 'Samples per hour: 120 against 90'],
  ['Brightness: 94 against 92', 'Reagent cost per test: 18% difference'],
  ['Minimum order: 20 reams against 5', 'Service engineer: Damascus against Beirut'],
  ['Held in stock locally: no against yes', 'Second read: automatic against manual'],
  ['Recommendation: the cheaper one', 'Recommendation: the faster one'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the two rows each pair would put at the top. On Table A it is usually _held in stock locally_ and _minimum order_; on Table B it is _service engineer_ and _second read_ — and in both cases the rows that move to the top are about **what happens when something goes wrong**, which is never the first row of anybody\'s table.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Bring, or write out from memory, a comparison table from your own work — a quotation, a specification, a tender, a staffing grid, two schools, two insurance policies. Explain it to your partner **without showing it**: the row that decides it, what is not in the columns, and who was not asked. They must ask: _in whose order are the rows?_, _what does the saving buy?_ and _who uses the thing?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Rasha has pushed a drug trolley for nine years and she read the equipment committee\'s table as somebody who has. The row she went to is row six: wheel diameter, 125 millimetres against 160. Nour said that is the one row she would never have looked at, and Rasha said it is the only row on the page that decides anything — the trolley that went into the workshop on the second of February went in with a broken wheel and it is a 125, and every 125 they have had has gone in with a wheel inside three years, because a ward floor has a lip at every doorway: a 125 hits the lip and a 160 goes over it. Jad asked whether that is measured anywhere, and she said not in writing, which is the problem: what she has is nine years, four trolleys, and the one with the big wheels, which is the oldest thing on the ward and has never been in the workshop. What is not in the columns is four things: how many days a wheel takes to come; whether anybody will chase it, since there is no form for chasing equipment, which is why that trolley is still in a workshop in November; what the ward does while it is away, which is twenty-six late nights out of thirty-one; and whether the drawers take a drug chart flat, because A has six drawers and five are too narrow, and a nurse folding a chart at two in the morning folds it the same way every time and the fold goes through the signature box. Nour said row eight — spare wheels held in Damascus, no and yes — is the one she would have fought on, and Rasha said rows six and eight are the same row and nobody has noticed, because they are four rows apart and one of them is in millimetres. And the recommendation at the bottom says seventeen per cent cheaper, which is about three hundred and ninety thousand, and a wheel is about eleven — so the cheaper trolley is cheaper by thirty-five wheels and will cost the ward a hundred and twenty late nights waiting for the first one. Ms Huda said the arithmetic is one division, and what made it possible is that Rasha has pushed one for nine years and nobody asked her._'));
out.push(p('**Listener task:** write the row that decided it, and the person who was not asked.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 3)', 7));
out.push(p('Read the article and choose the correct answer **A**, **B**, **C** or **D** for each question.'));
out.push(box(null, [
  '**THE ROW THAT IS NOT ON THE PAGE**   from a magazine for hospital managers',
  'Two years ago a committee at a Damascus hospital chose between two drug trolleys. The table in front of it had nine rows and a recommendation at the bottom: the cheaper of the two, seventeen per cent under the other. The committee agreed in about four minutes, which is what a committee does with a page that has already decided.',
  'The row that mattered was row six, and it was in millimetres. One trolley had 125 mm wheels and the other 160. Nobody at the table had pushed a trolley, and nobody at the table knew that a ward floor has a raised lip at every doorway, that a small wheel hits the lip and a large one rides over it, and that on that ward every trolley with small wheels had lost a wheel within three years.',
  'A nurse on the night rota worked this out eighteen months later, not from the table but from a notebook of her own. The ward had been running on one trolley since February, because the second had gone to a workshop with a broken wheel and there is no form in that hospital for chasing equipment that has gone to a workshop. In those months the drug round finished late on twenty-six nights out of thirty-one.',
  'Her arithmetic took one division. Seventeen per cent of the price was about three hundred and ninety thousand pounds; a wheel costs about eleven thousand. The saving was thirty-five wheels, and the first one took nine months to arrive.',
  'None of this was in the columns. What was in the columns was price, delivery, guarantee, the number of drawers and the weight — all of them true, all of them checkable, and not one of them able to tell a committee what would happen in February.',
  'There is a conclusion that managers like, which is that committees should ask the people who use the equipment. It is correct and it is not quite the point. The nurse had the row in her hands for nine years before anybody asked for it, and she had never written it down either — because nobody had ever suggested to her that nine years of pushing a trolley was a measurement.',
], C.lyellow, C.orange));
[
  '**1**  Why does the writer say the committee agreed in four minutes?   **A** The meeting was short of time.   **B** The page had already made the decision.   **C** The members trusted the supplier.   **D** The price difference was very large.',
  '**2**  What does the article say about the nine rows in the table?   **A** Some of them were inaccurate.   **B** They were all true and none of them predicted February.   **C** They were in the wrong order.   **D** Two of them had been left out.',
  '**3**  What is the point of the arithmetic in the fourth paragraph?   **A** To show that the trolley was poor value.   **B** To show how long a wheel takes to arrive.   **C** To turn a percentage into the thing it buys.   **D** To criticise the committee\'s mathematics.',
  '**4**  What does the writer say about the conclusion that managers like?   **A** It is wrong.   **B** It is right but not the main point.   **C** It is impossible to act on.   **D** It is what the nurse herself concluded.',
  '**5**  What is the writer\'s main point in the last paragraph?   **A** That nurses should be on committees.   **B** That nine years of experience is worth less than a table.   **C** That nobody had told her that her experience was a measurement.   **D** That she should have complained earlier.',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the message explaining a comparison table to the person who has to decide (60 words or more).'));
out.push(p('The table has ______ rows and a recommendation at the bottom: ______________.   **The row that decides it** is row ______, ______________: ______________ against ______________. ______________, because ______________.   **What is not in the columns.** ______________. ______________. ______________. And ______________, which is the one the person who uses it would put first.   **Two rows that are the same row.** Row ______ and row ______ are one question, ______ rows apart, and nobody has noticed because ______________.   **What the saving buys.** ______ per cent is about ______________, and ______________ costs about ______________. So the cheaper one is cheaper by ______________ — and it will cost ______________.   **Who was not asked.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The deciding row named, with both figures',
  'Four things that are not in the columns',
  'Two rows that are the same row, if there are any',
  'The saving converted into the thing it buys — and the person who was not asked',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 2)', 10));
out.push(box(null, [
  'Choose **one** of these two questions. Write **140 words or more**.',
  '**Question 1 — article.** You see this notice in an English-language magazine.',
  '_"**What would you add to the table?** Tell us about a decision made where you work from a comparison of two things — and the one thing that was not in the columns. The best articles will be published."_',
  '**Question 2 — story.** Write a story that begins with this sentence:',
  '_"The row that decided it was in millimetres, and nobody at the table had ever pushed one."_',
]));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 16 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  It is ___ cheaper than the other one — about eleven per cent.   a) more   b) slightly   c) most',
  '2  It is not as cheap ___ it looks.   a) than   b) that   c) as',
  '3  The afternoon batch is loaded ___ .   a) more quick   b) more quickly   c) quicklier',
  '4  It is the better ___ my two shops.   a) of   b) from   c) between',
  '5  ___ more we counted, the less we argued.   a) A   b) The   c) So',
  '6  He is the only one of the three who ___ telephoned me before.   a) has ever   b) ever has   c) has never',
  '7  ___ terms of dates, B is the most reliable.   a) On   b) In   c) At',
  '8  It is by ___ the oldest of the three.   a) far   b) much   c) more',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 4 style – interview).** 🔊 **Track 16.15** You will hear an interview with a nurse about a comparison table. For each question choose **A**, **B** or **C**.'));
[
  '**1**  Which row did she look at first?   **A** the price   **B** the wheel diameter   **C** the guarantee',
  '**2**  What is her evidence about the wheels?   **A** a measurement from a manufacturer   **B** nine years and four trolleys   **C** a report from the workshop',
  '**3**  What does she say is the reason the trolley is still in the workshop?   **A** there is no form for chasing equipment   **B** the part has not arrived   **C** nobody authorised the repair',
  '**4**  What does she say about the drawers?   **A** there are too few   **B** five of the six are too narrow for a chart to lie flat   **C** they do not lock',
  '**5**  What does the seventeen per cent buy, in her arithmetic?   **A** about thirty-five wheels   **B** about eleven wheels   **C** a second trolley',
  '**6**  What does she say she had never done?   **A** complained to the committee   **B** written her own nine years down as a measurement   **C** read the table',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 16.15  Audio script (read after the check)', [
  ['Interviewer', 'You were shown a comparison of two trolleys. What was the first thing you looked at?'],
  ['Rasha', 'Row six, which is the wheels. A hundred and twenty-five millimetres against a hundred and sixty. It is the only row on that page that decides anything and it is the row nobody at the table looked at.'],
  ['Interviewer', 'What makes you so sure about the wheels?'],
  ['Rasha', 'Nine years and four trolleys. Every one we have had with small wheels has lost a wheel inside three years, and the one with the big wheels is the oldest thing on the ward and has never been in the workshop. It is not measured anywhere, which is the problem — it is in my head and in a notebook.'],
  ['Interviewer', 'The second trolley is still in a workshop, I believe.'],
  ['Rasha', 'Since the second of February. Not because the part has not come and not because nobody authorised it — because there is no form in that hospital for chasing a piece of equipment that has gone to a workshop. Nobody chased it, and nobody will.'],
  ['Interviewer', 'Was there anything else missing from the table?'],
  ['Rasha', 'The drawers. The cheaper trolley has six drawers and five of them are too narrow for a drug chart to lie flat, so you fold it, and at two in the morning you fold it the same way every time, and the fold goes through the signature box.'],
  ['Interviewer', 'And the price?'],
  ['Rasha', 'Seventeen per cent, which is about three hundred and ninety thousand. A wheel is about eleven. So the cheaper trolley is cheaper by about thirty-five wheels, and the first wheel took nine months.'],
  ['Interviewer', 'Should the committee have asked you?'],
  ['Rasha', 'Yes, and that is not quite the point. I had that row in my hands for nine years and I had never written it down either, because nobody had ever suggested to me that nine years of pushing a trolley was a measurement.'],
]));
out.push(p('**C  Writing.** Write the recommendation paragraph (140+ words) for a real choice between two or three things in your own work: the criteria in order first, then each option against them with quantities, then the verdict with its cost, the limit, and a trigger you would recognise on the day.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 16)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ compare two things with a quantity on every comparison',
  '☐ use _far_ and _slightly_ to show the size of a difference I cannot measure',
  '☐ qualify a superlative — of how many, and on what',
  '☐ find and use the superlative of one: _the only one that…_',
  '☐ say how two things move together, and say which half might be pushing',
  '☐ compare how work is done, with adverbs, without moving the fault onto a thing',
  '☐ write the criteria down before I look, and in order',
  '☐ end a comparison with a verdict, a limit and a trigger',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 17 – HABITS PAST AND PRESENT', [
  '_used to · would · be used to · get used to._ Unit 16 compared two things. **Unit 17** compares two times: how something used to be done here, how it is done now, and the turn in between.',
  '**17.5 puts the three forms in one account** — and they are the three that students mix most often in the whole language. **17.6** writes about a change in your own life: then, now, and the turn between, which is the 3.6 page written again two years on.',
  '**Bring one thing that used to be done differently where you work** — a form, a route, a rule, a machine, a way of asking — and, if you can find one, the oldest person who remembers why it changed. 17.7 is built on that person.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · Unit 16 · Student\'s Book');
