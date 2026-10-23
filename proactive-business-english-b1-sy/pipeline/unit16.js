// Proactive Business English B1 · Syria Edition · Book 2 · Unit 16 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'landed cost · an ex-works price · a delivered price · a unit cost · a total cost of ownership · a like-for-like comparison · a weighting · a scoring matrix · a dimension · a criterion · a trade-off · a price break · a volume threshold · a tiered price · a rebate · a surcharge · a minimum charge · a payment term · a retention · an all-in figure · an apples-to-apples basis · a short list of two · a preferred supplier · a second source · a switching cost · a sunk cost · a hidden cost · a qualified recommendation · the column that is a guess · taking it all together';
const BACK_AT_B1 = 'quotation · reliable · discount';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 16  Comparing Suppliers and Evaluating Offers'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**16.1**  see why the cheap quotation is dearer than the dear one',
  '**16.2**  use superlatives and keep them honest',
  '**16.3**  say how one thing changes with another',
  '**16.4**  compare how, and not only what',
  '**16.5**  name the dimension you are comparing on',
  '**16.6**  write the recommendation paragraph, and the column that is a guess',
  '**16.7**  Review & Mediate: what is not in the columns',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ The sentence this unit refuses, and it is one word long', [
  '*Which is better?*',
  '⚠ **Better at what?** Cheaper to buy, or cheaper to own? Faster, or more reliable? Easier to deal with when something goes wrong, or cheaper when nothing does? ⚠ **The word *better* with nothing after it was refused at A2 and it is refused again here**, because at B1 you are comparing two offers that differ on six dimensions at once and *better* hides five of them.',
  '**So 16.5 is the cycle this unit exists for** — *on price · on reliability · in terms of lead time* — and 16.1 is the arithmetic that makes it necessary: ⚠ **the quotation that is eleven per cent cheaper to buy is four per cent dearer to have in the warehouse**, and both figures are true.',
], C.lyellow, C.orange));

// ======================= CYCLE 16.1 =======================
out.push(pb());
out.push(h2('16.1  Not as cheap as it looks: landed cost'));
out.push(p('**Function:** comparing two offers properly   ·   **Grammar:** _not as … as_; _cheaper to buy / dearer to own_   ·   **Pronunciation:** the two _as_es, both weak'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of two suppliers of the same thing at your work. Say which is cheaper, and then say everything that is not in the price.'));
out.push(p('**b**  Complete with _not as … as_: _The Homs carton is _______ cheap _______ it looks. · Their delivery is _______ quick _______ ours._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which quotation turns out to be dearer?   **A** the dearer one   **B** the cheaper one, once everything is counted   **C** neither'));
out.push(p('**b**  Listen again. **1** What four things are added to the cheaper quotation? **2** What does Nadia call the figure at the end?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.1  "It is eleven per cent cheaper and four per cent dearer"', [
  ['Bassel', 'The Homs carton is eleven per cent cheaper than Ms Shamsi\'s. Eleven per cent on four hundred cartons a month.'],
  ['Nadia', 'Cheaper to buy. Read me the quotation in full.'],
  ['Bassel', 'Eight hundred and ninety per hundred, ex-works Homs.'],
  ['Nadia', 'Ex-works. So who brings them?'],
  ['Bassel', '…We do. Ms Shamsi delivers.'],
  ['Nadia', 'That is a van to Homs and back, which Fadi cannot do on a Tuesday or a Thursday because of the Ghouta run. Next: how many must you take?'],
  ['Bassel', 'Minimum five hundred.'],
  ['Nadia', 'And we use four hundred, so you are holding a hundred for a month and paying for them now. Payment terms?'],
  ['Bassel', 'Thirty days against Ms Shamsi\'s sixty.'],
  ['Nadia', 'So thirty days of our money, every month, for ever. And the last one: what happens when a batch is wrong?'],
  ['Bassel', 'I do not know. With Ms Shamsi it is eleven years and she has never argued about a replacement.'],
  ['Nadia', '⚠ Now add it up. Eleven per cent off the price; add the journey, the hundred cartons you do not need, the thirty days, and an unknown on returns. ⚠ **The all-in figure is about four per cent dearer** — and the eleven per cent is still true. **Both numbers are correct and they are answers to different questions.**'],
  ['Bassel', 'So which question should I have asked?'],
  ['Nadia', '⚠ **Not *what does it cost* but *what does it cost to have it in our warehouse, on our terms, with our van.*** That is the landed cost, and ⚠ **a quotation is not a price, it is a price with four conditions attached and the conditions are where the money is.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_not as … as_, and the four things that are not in the price**',
  table(['Form', 'Example'], [
    ['**not as** + adjective + **as**', 'It is **not as cheap as** it looks.'],
    ['**cheaper to buy** / **dearer to own**', 'Eleven per cent **cheaper to buy**, four per cent **dearer to own**.'],
    ['**ex-works** / **delivered**', '890 **ex-works** Homs — we fetch them.'],
    ['**landed cost**', 'the all-in figure, in our warehouse, on our terms'],
    ['⚠ a quotation is a **price plus conditions**', 'carriage · minimum order · payment terms · what happens when it is wrong'],
  ], [2.1, 3]),
  '⚠ **The four things that are almost never in the price:** ⚠ **who carries it · how many you must take · when you must pay · and what happens when a batch is wrong.** Ask all four of every quotation, every time, in that order.',
  '⚠ **Both numbers can be true.** *Eleven per cent cheaper* and *four per cent dearer* are answers to different questions, and the question that matters is ⚠ **what does it cost to have it in our warehouse, on our terms, with our van.**',
  '⚠ **A minimum order above your usage is a price rise in disguise.** Five hundred where you use four hundred means you are financing a hundred cartons for a month, every month.',
  '⚠ **Payment terms are a price.** Thirty days against sixty is thirty days of your money, for ever — and it never appears on either quotation.',
  '⚠ **And the fourth condition has no number at all.** *With Ms Shamsi it is eleven years and she has never argued about a replacement.* ⚠ **An unknown stays an unknown in the table**, and 16.6 is where you learn how to write it down without pretending it is a figure.',
  '**Practise:** Take a quotation and ask the four questions. 1 who carries it 2 how many must we take 3 when must we pay 4 what happens when it is wrong',
  '**Useful phrases:**  cheaper to buy, dearer to own  ·  ex-works or delivered?  ·  what is the minimum?  ·  thirty days or sixty?  ·  what happens when a batch is wrong?  ·  the all-in figure',
  '**Pronunciation – the two weak _as_es.** 🔊 **Track 16.2** Listen: _it\'s not as cheap as it looks_ — /əz/ twice, almost nothing, and the stress on *cheap* and *looks*. ⚠ Learners stress both *as*es and the comparison disappears. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A brings a cheap quotation; B asks the four questions and gives the all-in figure. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ is __________ per cent cheaper than __________.'],
  ['B', 'Cheaper to buy. Read me the quotation in full.'],
  ['A', '__________, __________.'],
  ['B', '__________. So who brings them?'],
  ['A', '…We do.'],
  ['B', 'And how many must you take?'],
  ['A', '__________.'],
  ['B', '⚠ So you are holding __________. Payment terms? And what happens when a batch is wrong?'],
]));
out.push(table(['Role card 1 — the Homs carton', 'Role card 2 — the cheaper plater'], [[
  '890 per hundred ex-works Homs against Ms Shamsi\'s delivered price, eleven per cent dearer. ⚠ Add: a van to Homs (not Tuesdays or Thursdays), a minimum of 500 against a usage of 400, thirty days against sixty, and an unknown on returns against eleven years of replacements. ⚠ **All-in: about four per cent dearer.**',
  'A plater 14 per cent cheaper per tonne. ⚠ Add: he is in an industrial zone forty minutes further out, he takes nine working days against four, he wants payment on collection, and he has never done our profile before. **The fourteen per cent is real and the nine days is a fortnight added to every job.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the headline percentage, the four conditions, and the all-in figure. ⚠ Then say which of the four conditions has no number in it.'));
out.push(PHRASE_CARD(['cheaper to buy, dearer to own', 'ex-works or delivered?', 'what is the minimum?', 'thirty days or sixty?', 'and when it is wrong?', 'the all-in figure']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** real quotations from your work. Fill the four conditions for each and give the all-in figures.'));
out.push(table(['', 'Supplier A', 'Supplier B'], [
  ['Headline price', '', ''],
  ['Who carries it', '', ''],
  ['Minimum order, against our usage', '', ''],
  ['Payment terms', '', ''],
  ['When a batch is wrong', '', ''],
  ['⚠ **All-in figure**', '', ''],
], [2, 2, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The headline is _______ per cent. With the four conditions it is _______. The condition that costs most is _______, and the one with no number is _______._'));
out.push(p('**Listener task:** count how many headline comparisons in the room changed direction once the four conditions went in. ⚠ It is usually about half.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it is not so cheap than it looks_ and _their price is cheaper as ours_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the comparison, and answer the questions.'));
out.push(box(null, [
  '**CARTONS — TWO QUOTATIONS, LANDED. 4 February. B. Nassif. ⚠ The headline is eleven per cent and the answer is four per cent the other way.**',
  table(['', 'Ms Shamsi, Aleppo', 'The Homs supplier', 'Difference'], [
    ['Price per hundred', '1,000', '**890**', '⚠ **11 per cent cheaper**'],
    ['Carriage', 'delivered, included', 'ex-works — our van, about 180 a hundred', '+180'],
    ['Minimum order', '100', '**500** against a usage of 400', '+100 cartons financed a month'],
    ['Payment terms', '60 days', '**30 days**', '⚠ **30 days of our money, every month**'],
    ['When a batch is wrong', 'eleven years, never argued', '⚠ **not known**', '⚠ **no figure — see below**'],
    ['⚠ **All-in, per hundred**', '⚠ **1,000**', '⚠ **about 1,040**', '⚠ **4 per cent dearer**'],
  ], [1.4, 1.7, 2.1, 1.8]),
  '⚠ **How the eleven per cent became four per cent the other way.** 890 plus 180 of carriage is 1,070 before anything else, which is already seven per cent dearer. The thirty days and the hundred surplus cartons are about another 40 against our overdraft. ⚠ **The headline was eleven per cent on a figure that was never the figure.**',
  '⚠ **And the row with no number in it.** *When a batch is wrong: not known.* ⚠ **I have not made a figure up for it and I am not going to.** What I can say is what it would cost us if a batch of four hundred were wrong and we had to argue about it: **about nine days of trade counter stock**, which is more than a year of the eleven per cent.',
  '**The recommendation.** Stay with Ms Shamsi. ⚠ **And ask her for the price break at five hundred**, because the Homs quotation has told us something useful: **five hundred is a quantity somebody will discount, and we have never asked.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How does an eleven per cent saving become a four per cent cost?'));
out.push(item('2', 'What does the writer do about the row with no number in it?'));
out.push(item('3', 'What useful thing has the rejected quotation told them?'));
out.push(box('Writer\'s box', [
  '**Two quotations, landed — four parts:** **a table whose last row is the all-in figure** → ⚠ **how the headline became the answer, in arithmetic** → ⚠ **the row with no number, handled honestly** → **the recommendation, and what the rejected offer has told you.**',
  '⚠ **Put the all-in figure in the last row and make it the only bold one.** A reader who looks at one line must look at that one.',
  '⚠ **Show the arithmetic in words.** *890 plus 180 is 1,070, which is already seven per cent dearer.* ⚠ A reader who cannot reproduce your figure will not use it, and the two sentences cost nothing.',
  '⚠ **Never invent a figure for the unknown row.** ⚠ *I have not made a figure up for it and I am not going to.* Instead, say what the **exposure** is: *nine days of trade counter stock*, which is a real quantity and is not a pretend price.',
  '⚠ **And mine the rejected quotation for information.** ⚠ *Five hundred is a quantity somebody will discount, and we have never asked.* **A quotation you turn down has told you what the market will do**, and that is worth more than the decision.',
  '⚠ **One line per condition, and the conditions in the same order every time** — carriage, minimum, terms, and what happens when it is wrong. A reader who has seen one of your comparisons can then read the next one in twenty seconds.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Compare two real quotations, landed (**60 words or more**). Use the frame.'));
out.push(p('**______________ — TWO QUOTATIONS, LANDED. ______________. ______________. ⚠ The headline is ______________ and the answer is ______________.**   Price | ______________ | ______________ | ⚠ **______________**   Carriage | ______________ | ______________ | ______________   Minimum order | ______________ | ______________ | ______________   Payment terms | ______________ | ______________ | ⚠ **______________**   When it is wrong | ______________ | ⚠ **not known** | ⚠ **no figure**   ⚠ **All-in** | ⚠ **______________** | ⚠ **______________** | ⚠ **______________**   ⚠ **How the headline became the answer.** ______________.   ⚠ **The row with no number.** ______________. What I can say is ______________.   **The recommendation.** ______________. ⚠ And ______________, because the rejected quotation has told us ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 and one move — name the reader, then quote, ask, stop', [
  '"**I am reading this as the person who signs the order.** The box says the all-in figure goes in the last row. Your table ends with the payment terms — what is the all-in figure?"',
  '⚠ In this unit the reader to name is usually **whoever will be held responsible for the choice**, and they need one number and the arithmetic behind it. ⚠ **A comparison written for the person who gathered the quotations is a comparison nobody can sign.**',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **what is the all-in figure, and can I reproduce it?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The all-in figure as the last row', ''],
  ['The arithmetic shown in words', ''],
  ['No invented figure in the unknown row', ''],
  ['What the rejected quotation has told you', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their headline figure and their all-in figure. The class says how many changed direction.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time a cheaper offer turned out dearer at your work (**140 to 180 words**). Say which of the four conditions did it, and when anybody noticed.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is there an all-in figure?_   ? _which of the four conditions cost the money, and who found out?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was it the condition with no number in it — what happens when something is wrong? Usually two of three.'));
out.push(box('Homework', ['Write your final text. Then take one quotation you hold and ask its four conditions in writing, including what happens when a batch is wrong (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 16.2 =======================
out.push(pb());
out.push(h2('16.2  One of the best, and by far the oldest'));
out.push(p('**Function:** using superlatives honestly   ·   **Grammar:** superlatives; _one of the · by far the · easily the_   ·   **Pronunciation:** _by far_ stressed, and the hedge that is not an apology'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one true superlative about your workplace. Then say how you know it is true.'));
out.push(p('**b**  Which can you prove? _We are the cheapest. · We are one of the cheapest. · We are by far the oldest supplier on this street._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which claim does Mr Ayoub strike out?   **A** the oldest   **B** the cheapest   **C** the biggest'));
out.push(p('**b**  Listen again. **1** Why does he strike it out? **2** What does he put in its place?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.3  "Which of these can you prove on Thursday?"', [
  ['Nour', 'The letter to Ms Tannous says we are the cheapest supplier of our range in Damascus, the oldest in the Mezzeh trade, and one of the most reliable in the city.'],
  ['Mr Ayoub', 'Three superlatives. Which of them can you prove on Thursday if she asks?'],
  ['Nour', 'The oldest — 1998, and we have the registration.'],
  ['Mr Ayoub', 'In the Mezzeh trade?'],
  ['Nour', '…We moved to Mezzeh in 2011. We were founded in 1998 in Bab Touma.'],
  ['Mr Ayoub', 'So *the oldest in the Mezzeh trade* is wrong and *founded in 1998* is right and is better. Cheapest?'],
  ['Nour', 'We are cheaper than the two I have checked.'],
  ['Mr Ayoub', '⚠ Then you are cheaper than the two you have checked, which is a sentence, and *the cheapest in Damascus* is a claim about about forty businesses you have never telephoned. **Strike it out.**'],
  ['Nour', 'And *one of the most reliable*?'],
  ['Mr Ayoub', '⚠ *One of the most* is the honest form and it is still a claim about everybody else. What can you prove about yourself alone?'],
  ['Nour', 'Nine hundred and forty deliveries last year, eleven late, and the eleven are in a list with the reasons.'],
  ['Mr Ayoub', '⚠ **Then write that, and never the superlative.** *Nine hundred and forty deliveries, eleven late, list available.* ⚠ **It is checkable, it is about us, it needs nobody else to be worse, and a buyer in another country can forward it.**'],
  ['Nour', 'It is less impressive.'],
  ['Mr Ayoub', '⚠ **It is more impressive to the only reader who matters**, which is one who has been told she is dealing with the most reliable company in Syria by four other people this month. ⚠ **A superlative is a claim about other people; a figure is a claim about you.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Superlatives — and the figure that beats them**',
  table(['Form', 'Example', 'Can you prove it?'], [
    ['**the** + superlative', 'We are **the cheapest** in Damascus.', '⚠ **no — forty businesses**'],
    ['**one of the** + superlative', 'We are **one of the** most reliable.', 'weaker, still about others'],
    ['**by far the** + superlative', '**By far the** oldest on this street.', 'sometimes — if the fact is narrow'],
    ['**easily the** + superlative', '**Easily the** largest order we have had.', 'yes — it is about you'],
    ['⚠ **the figure instead**', '⚠ **940 deliveries, 11 late, list available.**', '⚠ **yes, on Thursday**'],
  ], [1.6, 2.2, 1.8]),
  '⚠ **The test is one question: can you prove it on Thursday if they ask?** ⚠ *Cheapest in Damascus* is a claim about about forty businesses you have never telephoned. **Strike it out.**',
  '⚠ **Narrow the claim until it is true, and then prefer the figure.** *The oldest in the Mezzeh trade* is wrong — the company was founded in 1998 in Bab Touma and moved to Mezzeh in 2011 — and ⚠ **founded in 1998 is right, provable and better.**',
  '⚠ **A superlative is a claim about other people; a figure is a claim about you.** ⚠ *940 deliveries, 11 late, list available* needs nobody else to be worse, and a reader in another country can forward it.',
  '⚠ **It feels less impressive and it is not.** Your reader has been told she is dealing with the most reliable company in the country by four other people this month, ⚠ **and you are the only one who has given her a number she can check.**',
  '⚠ **Where a superlative is about you alone, keep it.** *Easily the largest order we have had* is a fact about your own books and is both true and strong.',
  '**Practise:** Narrow or replace each. 1 the cheapest 2 the most reliable 3 the oldest 4 the best service 5 the fastest delivery',
  '**Useful phrases:**  can you prove it on Thursday?  ·  cheaper than the two I have checked  ·  founded in 1998  ·  940 deliveries, 11 late  ·  list available  ·  a figure is about us',
  '**Pronunciation – _by far_.** 🔊 **Track 16.4** Listen: _by FAR the oldest on this street_ — *far* stressed, and the sentence does not rise at the end. ⚠ A superlative said with a rise sounds like a question, and a reader hears a boast being tested. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A makes three superlative claims; B asks which can be proved on Thursday and finds the figure instead. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'My letter says we are the __________, the __________, and one of the __________.'],
  ['B', 'Three superlatives. Which can you prove on Thursday if they ask?'],
  ['A', 'The __________ — __________.'],
  ['B', '__________?'],
  ['A', '…__________.'],
  ['B', 'So __________ is wrong and __________ is right and is better. And what can you prove about yourself alone?'],
  ['A', '__________.'],
  ['B', '⚠ Then write that, and never the superlative.'],
]));
out.push(table(['Role card 1 — the letter to Beirut', 'Role card 2 — the counter sign'], [[
  '*The cheapest of our range in Damascus · the oldest in the Mezzeh trade · one of the most reliable in the city.* ⚠ Strike the first. Correct the second to **founded in 1998** (Bab Touma; Mezzeh from 2011). Replace the third with **940 deliveries, 11 late, list available.**',
  'A sign saying *the best prices and the best service in the district.* ⚠ Neither is provable and both are on every sign in the district, so they say nothing. **Replace with two figures: *we hold a quoted price for fourteen days, in writing* and *94 of our 212 accounts have been with us more than five years.***',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three claims, which survive, and the figures that replace the others. ⚠ Then say which replacement a reader could forward.'));
out.push(PHRASE_CARD(['can you prove it on Thursday?', 'cheaper than the two I checked', 'founded in 1998', '940 deliveries, 11 late', 'list available', 'a figure is about us']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** claims your workplace makes. Test each and write the figure that would replace it.'));
out.push(table(['The claim', 'Provable on Thursday?', 'The narrower true version', 'The figure instead'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 1.2, 1.6, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We say _______. I _______ prove it on Thursday. The narrower version is _______, and the figure that beats both is _______._'));
out.push(p('**Listener task:** count the claims in the room that could be proved on Thursday. ⚠ Then ask how many of the replacements took longer than five minutes to find — almost none, because the figures already exist.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we are the most cheapest_ and _one of the best supplier_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two versions, and answer the questions.'));
out.push(box(null, [
  '**THE PARAGRAPH ABOUT OURSELVES, WRITTEN TWICE — for the Beirut file. 5 February. N. Mansour.**',
  '**Version 1.** _Sham Trading is one of the leading suppliers of packaging and general trade goods in Damascus. We are the oldest established business in the Mezzeh trade and offer the most competitive prices in the city, with a reputation for the highest standards of reliability and service._',
  '⚠ **Four superlatives and not one of them provable.** *Leading* means nothing. *The oldest in the Mezzeh trade* is **false** — we were founded in Bab Touma in 1998 and moved to Mezzeh in 2011. *The most competitive prices in the city* is a claim about businesses we have never telephoned. *The highest standards* is a claim about everybody.',
  '**Version 2.** _Sham Trading was founded in 1998 in Bab Touma and moved to Mezzeh in 2011. We supply packaging and general trade goods from two sites: Mezzeh, and 22 Baghdad Street, which opened on 8 June. We have 212 trade accounts, 94 of which have been with us more than five years. Last year we made 940 deliveries, of which 11 were late; the list of the 11 and their reasons is available on request. We hold a quoted price for fourteen days, in writing, with the date on it. Two of our people have been here since 1998._',
  '⚠ **Nine facts, no superlatives, and every one of them checkable in a morning.** ⚠ The two that do the most work are the ones nobody else will write: **the eleven late deliveries with the list offered**, and ⚠ **the fourteen days in writing**, which is a promise rather than a boast.',
  '⚠ **And the paragraph is now forwardable.** Version 1 cannot be sent to Ms Tannous\'s customer; version 2 can, ⚠ **because it contains nothing that would embarrass her if it turned out to be untrue.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which claim in version 1 is actually false, and why?'));
out.push(item('2', 'Which two facts in version 2 does the writer say do the most work?'));
out.push(item('3', 'Why is version 2 forwardable?'));
out.push(box('Writer\'s box', [
  '**The paragraph about yourself — four parts:** **version 1 with its superlatives** → ⚠ **each superlative tested, and the false one named** → **version 2, nine facts, no superlatives** → ⚠ **why it is forwardable.**',
  '⚠ **Admit the one that is false.** ⚠ *The oldest in the Mezzeh trade is false — we were founded in Bab Touma in 1998 and moved to Mezzeh in 2011.* **A paragraph about yourself that contains one false claim is a paragraph a careful reader will test all of.**',
  '⚠ **Volunteer the number that is against you.** *940 deliveries, 11 late, list available on request.* ⚠ **Nobody else will write that sentence**, which is exactly why it works — and the offer of the list is what makes it credible rather than a decorated figure.',
  '⚠ **Prefer a promise to a boast.** *We hold a quoted price for fourteen days, in writing, with the date on it.* A boast describes you; ⚠ **a promise tells the reader what they can do.**',
  '⚠ **Use the facts that are odd rather than impressive.** *Two of our people have been here since 1998.* ⚠ It is unarguable, specific, and it says more about reliability than any adjective.',
  '⚠ **Then test for forwardability:** could your reader send this to their own customer? ⚠ **A paragraph is forwardable when it contains nothing that would embarrass them if it turned out to be untrue.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the paragraph about your own workplace twice (**60 words or more** in total). Use the frame.'));
out.push(p('**THE PARAGRAPH ABOUT OURSELVES, WRITTEN TWICE. ______________. ______________.**   **Version 1.** _______________ is one of the leading ______________. We are the ______________ and offer the most ______________._   ⚠ **______________ superlatives and ______________ provable.** ______________ means nothing. ⚠ ______________ is **false** — ______________.   **Version 2.** _______________ was founded in ______________. We ______________ from ______________. We have ______________, of which ______________. Last year we ______________, of which ______________; the list is available on request. We ______________, in writing. ______________ since ______________._   ⚠ **Why it is forwardable.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be your reader\'s own customer** — then ask one question: **could this be sent to me without risk?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every superlative tested', ''],
  ['The false one named as false', ''],
  ['A number that is against you, with the list offered', ''],
  ['A promise rather than a boast', ''],
  ['Forwardable without risk', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the number that is against them. The class says whether it makes them trust the rest of the paragraph more or less.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a claim your workplace makes that you could not prove on Thursday (**140 to 180 words**). Say where it is printed, who wrote it, and what the provable version would be.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is every claim provable?_   ? _what figure would replace the unprovable one, and does it already exist?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the replacing figure already exist somewhere in the building? Usually all three — ⚠ **the superlative was not written for lack of a number; it was written because nobody looked.**'));
out.push(box('Homework', ['Write your final text. Then find one figure about your own workplace that is against you, and write the sentence that offers the list behind it (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 16.3 =======================
out.push(pb());
out.push(h2('16.3  The more we take, the less it costs'));
out.push(p('**Function:** stating proportional change   ·   **Grammar:** _the more … the less_; _the sooner … the better_   ·   **Pronunciation:** the two halves balanced, with a clear break'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one thing at your work where more of one thing means less of another. Say it in one sentence.'));
out.push(p('**b**  Complete: _The _______ we order, the _______ it costs per carton. The _______ he knows, the _______ he has to ask._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the price break turn out to be?   **A** at five hundred   **B** at five hundred, and worth less than the cash it ties up   **C** there is none'));
out.push(p('**b**  Listen again. **1** What are the three price steps? **2** Why does Nadia say the five-hundred step is not worth taking?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.5  "The more we take, the less it costs — and the worse it is"', [
  ['Bassel', 'I asked Ms Shamsi for a price break. She has three steps: a hundred at a thousand, three hundred at 960, five hundred at 920.'],
  ['Nadia', 'So the more we take, the less it costs.'],
  ['Bassel', 'Eight per cent at the top step.'],
  ['Nadia', 'And we use four hundred a month. What would five hundred mean?'],
  ['Bassel', 'A hundred cartons standing in the warehouse, and eighty paid out a month early.'],
  ['Nadia', 'Say the whole thing as one sentence, both halves.'],
  ['Bassel', '⚠ The more we take at one time, the less each carton costs — **and the more of our money is standing in the fourth store doing nothing.**'],
  ['Nadia', 'Which is the honest form, and now the arithmetic. Eight per cent of five hundred cartons is 4,000 a month saved. What is the hundred surplus worth to us standing still?'],
  ['Bassel', 'At our overdraft rate, about 2,200 a month. So we are 1,800 ahead.'],
  ['Nadia', '⚠ And what is the space worth? The fourth store is full and the hundred cartons go in the corridor, where they were last August when the rain came in.'],
  ['Bassel', '…Then I cannot put a number on that.'],
  ['Nadia', '⚠ **Then say so and take the middle step.** Three hundred at 960 is four per cent, it is below our monthly usage, nothing stands still and nothing goes in the corridor. ⚠ **The top step is eight per cent of a price and a cost in a place where we have already been damaged once.**'],
  ['Bassel', 'So the biggest break is not the best break.'],
  ['Nadia', '⚠ **The proportional sentence is true and it is not an instruction.** *The more we take, the less it costs* says what the price does; ⚠ **it says nothing about what the cartons do when they get here**, and that is the half of the sentence the supplier does not write.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_the more … the less_, and the half the supplier does not write**',
  table(['Form', 'Example'], [
    ['**the more … the less**', '**The more** we take, **the less** each carton costs.'],
    ['**the more … the more**', '**The more** we hold, **the more** of our money stands still.'],
    ['**the sooner … the better**', '**The sooner** we ask, **the better** the price.'],
    ['⚠ both halves, one sentence', 'The more we take, the less it costs **and the more stands in the store.**'],
    ['**the + comparative** with no verb', '**The bigger** the order, **the smaller** the unit price.'],
  ], [1.8, 3.1]),
  '⚠ **Always say both halves of the real sentence.** *The more we take, the less each carton costs — and the more of our money is standing in the fourth store doing nothing.* ⚠ **The supplier writes the first half and you have to write the second.**',
  '⚠ **A price break is an arithmetic, not an offer.** Eight per cent of five hundred against the cost of a hundred surplus cartons at your overdraft rate — ⚠ *4,000 saved against 2,200 tied up, so 1,800 ahead* — **and then the costs with no number on them.**',
  '⚠ **The biggest break is often not the best break.** Take the step that is **below your usage**: nothing stands still and nothing goes in the corridor.',
  '⚠ **Say the cost you cannot price.** *The hundred cartons go in the corridor, where they were last August when the rain came in.* ⚠ **A cost with no number is still a cost, and naming the place it will be stored is more persuasive than a figure.**',
  '⚠ **And remember what the rejected step tells you.** A supplier who will discount at five hundred has a discount; ⚠ **the question *what is your price break?* is worth asking of every supplier you have, and almost nobody asks it.**',
  '**Practise:** Say both halves for each. 1 a price break 2 longer payment terms 3 a bigger delivery 4 training more people 5 holding more stock',
  '**Useful phrases:**  the more we take, the less it costs  ·  and the more stands still  ·  what is your price break?  ·  below our usage  ·  I cannot put a number on that  ·  the biggest break is not the best',
  '**Pronunciation – the two balanced halves.** 🔊 **Track 16.6** Listen: _the MORE we take // the LESS it costs_ — equal weight, a clear break in the middle, both comparatives stressed. ⚠ Said as one run it loses the balance and sounds like a slogan. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports a price break; B makes A say both halves and do the arithmetic. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ has __________ steps: __________ at __________, __________ at __________, __________ at __________.'],
  ['B', 'So the more we take, the less it costs. And we use __________ a month. What would __________ mean?'],
  ['A', '__________ standing in __________, and __________ paid out early.'],
  ['B', 'Say the whole thing as one sentence, both halves.'],
  ['A', '⚠ The more we take, the less each __________ costs — and the more of our money is __________.'],
  ['B', '⚠ And what is the space worth?'],
  ['A', '…I cannot put a number on that.'],
]));
out.push(table(['Role card 1 — the carton price break', 'Role card 2 — the payment-terms trade'], [[
  'Three steps: 100 at 1,000; 300 at 960; 500 at 920. Usage 400 a month. ⚠ Top step: 4,000 a month saved, about 2,200 tied up, **1,800 ahead** — and a hundred cartons in the corridor where the rain came in last August. **Take the middle step.**',
  'A supplier offers two per cent for payment in ten days instead of sixty. ⚠ Both halves: *the sooner we pay, the less it costs — and the less we have in the bank in the week the wages go out.* **Two per cent for fifty days is a good rate; it is a good rate only if the fifty days were free.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the proportional sentence with both halves, the arithmetic, and the cost with no number on it. ⚠ Then say which step you would take.'));
out.push(PHRASE_CARD(['the more we take, the less it costs', 'and the more stands still', 'what is your price break?', 'below our usage', 'I cannot price that', 'not the biggest break']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** proportional offers at your work. Write both halves and the arithmetic for each.'));
out.push(table(['The offer', 'The more…', 'The less / the more…', 'The arithmetic, and the cost with no number'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.3, 1.2, 1.3, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The more we _______, the less _______ — and the more _______. The arithmetic says _______, and the cost I cannot price is _______._'));
out.push(p('**Listener task:** count the offers in the room where the biggest step was not the best. ⚠ Then ask how many people had ever asked their supplier *what is your price break?*'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _more we take, less it costs_ and _the more cheaper_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE CARTON PRICE BREAK — THE WHOLE SENTENCE. 6 February. B. Nassif.**',
  '⚠ **The supplier\'s half:** the more we take at one time, the less each carton costs.',
  '⚠ **Our half:** the more we take at one time, the more of our money stands still and the more of it stands in a place we do not have.',
  table(['Step', 'Price', 'Saved a month', 'Tied up a month', 'Net', 'Where it goes'], [
    ['100', '1,000', '—', '—', '—', 'bay 2'],
    ['⚠ **300**', '960', '**1,600**', '**nothing — below usage**', '⚠ **+1,600**', 'bay 2'],
    ['500', '920', '4,000', 'about 2,200', '+1,800', '⚠ **the corridor**'],
  ], [0.7, 0.8, 1.2, 1.7, 1, 1.3]),
  '⚠ **The arithmetic says take five hundred, by 200 a month.** The middle step nets 1,600 and the top step nets 1,800, so on the figures the top step is better by about two per cent of one carton order.',
  '⚠ **And I am recommending the middle step.** The 200 a month is the whole of the difference, and the hundred surplus cartons go in the corridor, ⚠ **which is where nine cartons were written off last August when the rain came in.** I cannot price that and I am not going to pretend to; what I can say is that **one wet August costs more than a year of the 200.**',
  '**And the thing the exercise has actually produced.** ⚠ **Ms Shamsi has a price break and we have been buying at the top of her list for eleven years without asking.** Three hundred at 960 is four per cent off everything we buy from her, from this month, ⚠ **and it cost one telephone call.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which step do the figures favour, and by how much?'));
out.push(item('2', 'Why does the writer recommend the middle step anyway?'));
out.push(item('3', 'What has the whole exercise actually produced?'));
out.push(box('Writer\'s box', [
  '**The whole sentence — five parts:** **the supplier\'s half** → ⚠ **your half** → **the step table, with *saved · tied up · net · where it goes*** → ⚠ **what the arithmetic says, even when you disagree with it** → **the recommendation, and the thing the exercise produced.**',
  '⚠ **Write the two halves as two labelled lines.** *The supplier\'s half* and *our half*. ⚠ It makes visible that you have been given one side of a sentence and have completed it, which is the whole skill.',
  '⚠ **Say what the arithmetic says even when you are going against it.** ⚠ *The arithmetic says take five hundred, by 200 a month.* **A recommendation that hides the figure it is overruling will be overturned by the first person who does the sum.**',
  '⚠ **Keep the *where it goes* column.** A quantity with no place to go is a cost, and ⚠ **naming the place — *the corridor, where nine cartons were written off last August* — is more persuasive than any figure you could invent for it.**',
  '⚠ **Say plainly that you will not invent the number.** *I cannot price that and I am not going to pretend to.* Then give the comparison you **can** make: *one wet August costs more than a year of the 200.*',
  '⚠ **End with what the exercise produced rather than what it decided.** ⚠ *Ms Shamsi has a price break and we have been buying at the top of her list for eleven years without asking* — and it cost one telephone call. **That is worth more than the choice of step.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the whole sentence for a proportional offer at your work (**60 words or more**). Use the frame.'));
out.push(p('**______________ — THE WHOLE SENTENCE. ______________. ______________.**   ⚠ **The supplier\'s half:** the more ______________, the less ______________.   ⚠ **Our half:** the more ______________, the more ______________.   ______________ | ______________ | ______________ | ______________ | ______________ | ______________   ⚠ **What the arithmetic says.** ______________, by ______________.   ⚠ **And I am recommending ______________.** ______________, and ______________ goes ______________, ⚠ which is where ______________. I cannot price that; what I can say is ______________.   **And what the exercise has produced.** ⚠ ______________, and it cost ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **what does the arithmetic say, and are you going against it?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The two halves, labelled', ''],
  ['A *where it goes* column', ''],
  ['What the arithmetic says, stated even if overruled', ''],
  ['The cost you will not invent a number for', ''],
  ['What the exercise produced', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only *our half* of the sentence. The class says which half the supplier had written for them.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a discount or a bulk offer taken at your work (**140 to 180 words**). Say what the second half of the sentence turned out to be, and when anybody wrote it down.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _are both halves of the sentence written?_   ? _what did the second half cost, and was it ever priced?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the second half never written down at all? Usually all three — and in all three somebody remembers it perfectly.'));
out.push(box('Homework', ['Write your final text. Then ask one supplier *what is your price break?* and write both halves of the sentence their answer produces (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 16.4 =======================
out.push(pb());
out.push(h2('16.4  Delivered faster, packed more carefully'));
out.push(p('**Function:** comparing how, not what   ·   **Grammar:** comparative adverbs   ·   **Pronunciation:** the adverb carrying the comparison'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Compare two suppliers without mentioning price or product. Use *how* words only: faster, more carefully, more often, better.'));
out.push(p('**b**  Adjective or adverb? _Their price is _______ (cheap). · They deliver _______ (quick). · They pack _______ (careful). · Their service is _______ (good). · They answer _______ (good)._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala say the two suppliers differ on?   **A** the price   **B** how they do the same things   **C** the product'));
out.push(p('**b**  Listen again. **1** What four *how* comparisons does she make? **2** Which one does she say decides it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.7  "The goods are identical. Everything else is not."', [
  ['Nour', 'The two carton quotations. The cartons are the same specification, 30 by 20, same board.'],
  ['Hala', 'Then the goods are identical and everything that is left is how they behave. May I?'],
  ['Nour', 'Go on.'],
  ['Hala', 'Ms Shamsi delivers **more reliably** — she has been late twice in eleven years and she telephones the day before. The Homs supplier delivers **faster** when he delivers, because it is a shorter road.'],
  ['Nour', 'Faster against more reliably.'],
  ['Hala', 'Which are not the same thing and people trade them as though they were. ⚠ **Faster matters when you are late. More reliably matters when you are planning.** We plan.'],
  ['Nour', 'Next?'],
  ['Hala', 'They pack **more carefully** than he does, which I know because I open them. Four of his sample cartons were marked and two of hers in eleven years.'],
  ['Nour', 'And the fourth?'],
  ['Hala', 'She answers the telephone **more quickly** and she answers **more honestly**. When she cannot do something she says so on the telephone. ⚠ **He said *no problem* to a question I asked to see whether he would say no problem**, and the answer was that it was a problem.'],
  ['Nour', 'Which of the four decides it?'],
  ['Hala', '⚠ **The last one, and it is the one that never appears in a comparison table**, because *answers more honestly* has no units. ⚠ **But it is the only one of the four that tells you what the other three will be worth when something goes wrong** — and something always goes wrong.'],
  ['Nour', 'How do I write that down?'],
  ['Hala', '⚠ **Write the test, not the judgement.** *Asked a question he could not say yes to; he said no problem.* ⚠ **That is checkable, it is one line, and anybody can repeat the test with any supplier.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Comparative adverbs — comparing how, not what**',
  table(['Adjective (the thing)', 'Adverb (how)', 'Example'], [
    ['cheaper, dearer', '—', 'Their price is **cheaper**.'],
    ['quick', '**more quickly** / **quicker**', 'They deliver **more quickly**.'],
    ['careful', '**more carefully**', 'They pack **more carefully**.'],
    ['reliable', '**more reliably**', 'She delivers **more reliably**.'],
    ['good', '⚠ **better**', 'She answers **better** — ⚠ *not ~~more good~~*'],
  ], [1.6, 1.8, 2.2]),
  '⚠ **When the goods are identical, everything that is left is how they behave** — and *how* is adverbs. A comparison with no adverbs in it has compared only the things that are the same.',
  '⚠ **Faster and more reliably are not the same thing** and people trade them as though they were. ⚠ *Faster matters when you are late. More reliably matters when you are planning.* **Say which of the two you are.**',
  '⚠ **Say how you know.** *They pack more carefully, which I know because I open them: four of his sample cartons were marked and two of hers in eleven years.* ⚠ An adverb with no evidence behind it is an opinion in grammatical clothing.',
  '⚠ **The one that decides it usually has no units.** *Answers more honestly.* ⚠ **It is the only comparison that tells you what the others will be worth when something goes wrong** — and something always goes wrong.',
  '⚠ **So write the test, not the judgement.** ⚠ *Asked a question he could not say yes to; he said no problem.* **Checkable, one line, and anybody can repeat it with any supplier** — which is what a judgement can never be.',
  '**Practise:** Compare two suppliers on four adverbs, with the evidence for each. 1 how quickly 2 how carefully 3 how reliably 4 how honestly',
  '**Useful phrases:**  they deliver more quickly  ·  she delivers more reliably  ·  which I know because I open them  ·  faster, or more reliably?  ·  he said *no problem*  ·  write the test, not the judgement',
  '**Pronunciation – the adverb carries it.** 🔊 **Track 16.8** Listen: _they pack more CAREfully_ · _she answers more HONestly_ — the adverb stressed and the verb light. ⚠ Learners stress the verb and the comparison vanishes. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives a price comparison; B replaces it with four adverb comparisons and the evidence. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The two quotations. The goods are __________.'],
  ['B', 'Then the goods are identical and everything left is how they behave. __________ delivers more __________ — __________. __________ delivers __________ when he does, because __________.'],
  ['A', '__________ against __________.'],
  ['B', '⚠ Which are not the same thing. __________ matters when you are __________; __________ matters when you are __________.'],
  ['A', 'And which of the four decides it?'],
  ['B', '⚠ The one with no units: __________. And the way to write it down is __________.'],
]));
out.push(table(['Role card 1 — the two carton suppliers', 'Role card 2 — the honesty test'], [[
  'Identical specification. ⚠ Four adverbs: she delivers **more reliably** (twice late in eleven years, telephones the day before); he delivers **faster** (shorter road); she packs **more carefully** (four of his samples marked, two of hers in eleven years); ⚠ **she answers more honestly.**',
  'Design a test a supplier can fail without knowing it is a test. ⚠ **Ask something they cannot say yes to.** *Can you do five hundred by Thursday?* when Thursday is impossible. ⚠ **The answer you want is *no*, with a reason** — and *no problem* is the finding.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the comparison for the class – **without the book**.'));
out.push(p('**Listener task:** write the four adverb comparisons and the evidence for each. ⚠ Then write the honesty test as one line that anybody could repeat.'));
out.push(PHRASE_CARD(['they deliver more quickly', 'she packs more carefully', 'how do you know?', 'faster, or more reliably?', 'he said "no problem"', 'the test, not the judgement']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** suppliers whose goods are the same. Compare them on four adverbs, with your evidence.'));
out.push(table(['How', 'Supplier A', 'Supplier B', 'How I know'], [
  ['how quickly', '', '', ''],
  ['how carefully', '', '', ''],
  ['how reliably', '', '', ''],
  ['⚠ how honestly', '', '', ''],
], [1.1, 1.5, 1.5, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The goods are the same. A delivers more _______ and B packs more _______. I know because _______. The one that decides it is _______._'));
out.push(p('**Listener task:** count the adverb comparisons in the room with real evidence behind them. ⚠ Then ask how many people have ever designed an honesty test — almost none, and it takes one telephone call.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _they deliver more quick_ and _she answers more good_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**CARTONS — THE GOODS ARE IDENTICAL. 6 February. H. Mourad and B. Nassif. ⚠ Everything in this table is an adverb.**',
  table(['How', 'Ms Shamsi', 'The Homs supplier', 'How we know'], [
    ['how **quickly** they deliver', '2–3 days', '⚠ **1–2 days, shorter road**', 'his sample came in one'],
    ['how **reliably**', '⚠ **late twice in eleven years; telephones the day before**', 'not known — one delivery', 'our own goods-in book'],
    ['how **carefully** they pack', '2 marked cartons in eleven years', '⚠ **4 marked in a sample of 50**', 'Hala opens them'],
    ['how **honestly** they answer', 'says no, with a reason', '⚠ **said *no problem* to something impossible**', '⚠ **a question asked on purpose, 5 Feb**'],
  ], [1.4, 1.9, 2.1, 1.6]),
  '⚠ **Three of the four rows favour Ms Shamsi and the fourth favours him**, and the one that favours him is the one that matters least to us: ⚠ **faster matters when you are late and more reliably matters when you are planning, and we plan.** A day saved on a delivery we knew about a fortnight ago is worth nothing.',
  '⚠ **The fourth row is the one that has no units and it is the row we decided on.** On 5 February Bassel asked whether five hundred could be delivered by the following Thursday. It could not — it is a four-day road and the Thursday was three days away. ⚠ **He said *no problem*.** We did not place the order and nothing was lost, **but we now know what his delivery dates are worth.**',
  '⚠ **And we have written the test down rather than the judgement.** *Ask a question the supplier cannot say yes to; record the answer.* ⚠ **It takes one telephone call, anybody can do it with any supplier, and it is now the last question on our quotation sheet.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which row favours the Homs supplier, and why does it matter least?'));
out.push(item('2', 'What was the honesty test, and what was the answer?'));
out.push(item('3', 'What has been added to the quotation sheet?'));
out.push(box('Writer\'s box', [
  '**The goods are identical — four parts:** **a table of adverbs with a *how we know* column** → ⚠ **which rows favour whom, and which of them matters to you** → ⚠ **the row with no units, and the test behind it** → **the test written down as a repeatable question.**',
  '⚠ **Every row is an adverb and every row has evidence.** ⚠ *How we know: our own goods-in book · Hala opens them · a question asked on purpose, 5 Feb.* **A comparison of behaviour without a *how we know* column is a page of preferences.**',
  '⚠ **Say which rows matter to you and why.** ⚠ *Faster matters when you are late and more reliably matters when you are planning, and we plan.* **A row can favour the other side and be irrelevant, and saying so is what makes the page fair rather than selective.**',
  '⚠ **Record the honesty test with its date and its question.** *On 5 February Bassel asked whether five hundred could be delivered by the following Thursday.* ⚠ **The date and the question are what make it evidence rather than an impression.**',
  '⚠ **Then generalise it into the form.** ⚠ *It is now the last question on our quotation sheet.* **A test used once is an anecdote; a test added to a form is a control** — and it is the only thing in this unit that will still be working in two years.',
  '⚠ **And say when nothing was lost.** *We did not place the order and nothing was lost, but we now know what his delivery dates are worth.* ⚠ A test that cost nothing and produced a finding is the cheapest thing in the book.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Compare two suppliers whose goods are the same (**60 words or more**). Use the frame.'));
out.push(p('**______________ — THE GOODS ARE IDENTICAL. ______________. ______________. ⚠ Everything in this table is an adverb.**   how **quickly** | ______________ | ______________ | ______________   how **reliably** | ______________ | ______________ | ______________   how **carefully** | ______________ | ______________ | ______________   how **honestly** | ______________ | ⚠ **______________** | ⚠ **______________**   ⚠ **Which rows favour whom.** ______________ of the four favour ______________, and the one that favours ______________ is ______________, because ______________ matters when you are ______________ and we ______________.   ⚠ **The row with no units.** On ______________ I asked ______________. ______________. ⚠ ______________.   ⚠ **And the test, written down.** ______________, and it is now ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **is every row an adverb, and does every row say how you know?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every row an adverb', ''],
  ['A *how we know* for every row', ''],
  ['A row that favours the other side, kept', ''],
  ['The honesty test, with its date and question', ''],
  ['The test generalised into a form', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their honesty test. The class says which one it would use tomorrow.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about two suppliers or two colleagues who do the same work differently (**140 to 180 words**). Use adverbs only, with your evidence for each, and say which difference decided anything.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _adverbs rather than adjectives?_   ? _which comparison had no units, and how was it evidenced?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the deciding difference have no units? Usually all three — ⚠ **and in all three it was evidenced by something somebody remembered rather than something anybody had written down.**'));
out.push(box('Homework', ['Write your final text. Then design one honesty test for a supplier of yours, make the telephone call, and write down the question and the answer (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 16.5 =======================
out.push(pb());
out.push(h2('16.5  Better at what? Naming the dimension'));
out.push(p('**Function:** naming the dimension you compare on   ·   **Grammar:** _in terms of · on price · as regards · where X is concerned_   ·   **Pronunciation:** the dimension stressed, not the verdict'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say *A is better than B* about something at your work. Then say it again three times, each time naming a different dimension.'));
out.push(p('**b**  Complete: _________ price, they are cheaper. _________ reliability, she is better. They are better _________ lead time._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar refuse to accept?   **A** the figures   **B** the word *better* with nothing after it   **C** the recommendation'));
out.push(p('**b**  Listen again. **1** How many dimensions does he get out of the word *better*? **2** What does he say the word hides?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.9  "Better at what?"', [
  ['Nour', 'Our conclusion is that Ms Shamsi is better.'],
  ['Mr Attar', 'Better at what?'],
  ['Nour', 'Better overall.'],
  ['Mr Attar', '⚠ There is no such dimension. Give me the sentence six times, once for each thing you compared.'],
  ['Nour', 'On price, he is cheaper — eleven per cent ex-works. On landed cost, she is cheaper, by about four per cent. In terms of lead time, he is a day quicker. As regards reliability, she is better, and it is not close. On packing, she is better. ⚠ And on honesty — she is better, and that is the one we decided on.'],
  ['Mr Attar', 'Six dimensions, and the word *better* was doing all six at once. Which way did it point?'],
  ['Nour', 'Her way, because I had already decided.'],
  ['Mr Attar', '⚠ **Which is what the word is for.** *Better* is not a comparison, it is a conclusion with the working removed — and because two of the six go the other way, ⚠ **anybody who reads your conclusion and then meets the Homs supplier will think you did not look.**'],
  ['Nour', 'So I should name all six, including the two against.'],
  ['Mr Attar', 'All six, in a fixed order, with the two against clearly on his side. ⚠ **A recommendation in which everything favours the recommended option is not a recommendation; it is an advertisement**, and an auditor reads it as one.'],
  ['Nour', 'And if somebody asks which dimension matters most?'],
  ['Mr Attar', '⚠ **Then you have been asked the real question and you must answer it in one sentence, and the answer is about you and not about them:** *reliability, because we plan a fortnight ahead and we cannot absorb a surprise.* ⚠ **Nobody can argue with a weighting that is stated. Everybody can argue with one that is hidden inside the word *better*.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Naming the dimension**',
  table(['Form', 'Example'], [
    ['**on** + noun', '**On** price, he is cheaper.'],
    ['**in terms of** + noun', '**In terms of** lead time, he is a day quicker.'],
    ['**as regards** + noun', '**As regards** reliability, she is better.'],
    ['**where … is concerned**', '**Where** packing **is concerned**, she is better.'],
    ['⚠ **better** with nothing after it', '~~She is better.~~ ⚠ **better at what?**'],
  ], [1.8, 3.1]),
  '⚠ **There is no dimension called *overall*.** ⚠ *Better* is not a comparison, it is **a conclusion with the working removed** — and it points the way the writer had already decided.',
  '⚠ **Name every dimension you compared, in a fixed order, including the ones that go against your recommendation.** ⚠ **A recommendation in which everything favours the recommended option is an advertisement, and an auditor reads it as one.**',
  '⚠ **Two against is a strength, not a weakness.** A reader who meets the rejected supplier and finds two obvious advantages you never mentioned will doubt everything else on your page.',
  '⚠ **And if asked which dimension matters most, answer in one sentence about yourself.** ⚠ *Reliability, because we plan a fortnight ahead and we cannot absorb a surprise.* **Nobody can argue with a weighting that is stated and everybody can argue with one hidden inside *better*.**',
  '⚠ **The same applies to *best*, *worse*, *stronger* and *preferable*.** Every one of them is a verdict wearing a comparison\'s clothes.',
  '**Practise:** Take one *A is better than B* and say it six times, naming a different dimension each time. ⚠ Then say which dimension decides it, and why — about you.',
  '**Useful phrases:**  better at what?  ·  on price · in terms of lead time · as regards reliability  ·  there is no dimension called overall  ·  two of the six go the other way  ·  the weighting, stated',
  '**Pronunciation – stress the dimension.** 🔊 **Track 16.10** Listen: _on PRICE, he is cheaper; on reliaBILity, she is_ — the dimension stressed, the verdict light. ⚠ Stressing the verdict turns a comparison into an argument. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A says *X is better*; B asks *better at what?* until all the dimensions are named. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Our conclusion is that __________ is better.'],
  ['B', 'Better at what?'],
  ['A', 'Better overall.'],
  ['B', '⚠ There is no such dimension. Give me the sentence once for each thing you compared.'],
  ['A', 'On __________, __________. In terms of __________, __________. As regards __________, __________.'],
  ['B', 'And which way was the word *better* pointing?'],
  ['A', '__________, because __________.'],
  ['B', '⚠ Which is what the word is for. Now which dimension matters most, and why — about you?'],
]));
out.push(table(['Role card 1 — the two carton suppliers', 'Role card 2 — two job candidates'], [[
  'Six dimensions: price (him), landed cost (her), lead time (him), reliability (her), packing (her), honesty (her). ⚠ **Two of the six go his way and both must be on the page.** The weighting: *reliability, because we plan a fortnight ahead and cannot absorb a surprise.*',
  '*The second one is better.* ⚠ Dimensions: experience, speed, accuracy, how they ask when unsure, whether they will still be here in two years. ⚠ **The second candidate is slower and more accurate**, and *better* was hiding a choice between the two that nobody had made out loud.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the six dimensions and which way each points. ⚠ Then write the weighting sentence, and check that it is about the buyer and not about the suppliers.'));
out.push(PHRASE_CARD(['better at what?', 'on price · in terms of · as regards', 'no dimension called overall', 'two go the other way', 'which matters most?', 'and why — about us']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take one choice at your work. Name **six** dimensions, say which way each points, and write the weighting sentence.'));
out.push(table(['The dimension', 'Which way it points', 'Why'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.6, 1.4, 3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _On _______ it points to _______, and on _______ to _______. _______ of the six go against my recommendation. The dimension that matters most is _______, because we _______._'));
out.push(p('**Listener task:** count the recommendations in the room where every dimension favoured the recommended option. ⚠ Then ask whether that is likely — and the honest answer is that it almost never is.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _she is better_ and _in term of lead time_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**CARTONS — THE SIX DIMENSIONS, AND THE WEIGHTING. 7 February. N. Mansour. ⚠ Two of the six favour the supplier we are not recommending.**',
  table(['Dimension', 'Ms Shamsi', 'The Homs supplier', 'Points to'], [
    ['on price, ex-works', '1,000', '**890**', '⚠ **him — 11 per cent**'],
    ['in terms of lead time', '2–3 days', '**1–2 days**', '⚠ **him**'],
    ['on landed cost, all in', '**1,000**', 'about 1,040', 'her — about 4 per cent'],
    ['as regards reliability', '**late twice in 11 years**', 'one delivery, not known', 'her, and not close'],
    ['where packing is concerned', '**2 marked in 11 years**', '4 marked in a sample of 50', 'her'],
    ['⚠ **on honesty**', '**says no, with a reason**', '⚠ **said *no problem* to something impossible**', '⚠ **her — the deciding row**'],
  ], [1.9, 1.7, 2, 1.5]),
  '⚠ **Two of the six point at him and both of them are real.** He is eleven per cent cheaper ex-works and a day quicker on the road, and anybody who telephones him will find out both in four minutes. ⚠ **They are on this page so that nobody discovers them somewhere else.**',
  '⚠ **The weighting, in one sentence about us and not about them.** **Reliability, because we plan a fortnight ahead and we cannot absorb a surprise** — our own delivery promises are made from a programme written two weeks out, and a supplier who is a day quicker four times out of five and a week late once is worse for us than one who is always two to three days.',
  '⚠ **And the dimension that has no units is the one that decided it.** Honesty: he said *no problem* to a delivery that was physically impossible. ⚠ **It does not make him dishonest; it makes his dates worthless to a planner** — which is a statement about what we can use, not about his character, **and that distinction is the whole of why the sentence is printable.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why are the two dimensions that favour the rejected supplier on the page?'));
out.push(item('2', 'What is the weighting sentence, and what is it about?'));
out.push(item('3', 'How does the writer phrase the honesty finding, and why?'));
out.push(box('Writer\'s box', [
  '**The six dimensions and the weighting — four parts:** **the table with a *points to* column** → ⚠ **the dimensions that favour the rejected option, named as real** → ⚠ **the weighting, in one sentence about you** → **the dimension with no units, phrased as a statement about use and not about character.**',
  '⚠ **Keep the *points to* column and let it point both ways.** ⚠ *Two of the six point at him and both of them are real.* **They are on the page so that nobody discovers them somewhere else** — which is the only reason that matters.',
  '⚠ **The weighting sentence is about you.** *We plan a fortnight ahead and we cannot absorb a surprise.* ⚠ A weighting expressed as a fact about the supplier (*he is unreliable*) is arguable; one expressed as a fact about your own operation is not.',
  '⚠ **Spell out the trade in plain arithmetic.** *A supplier who is a day quicker four times out of five and a week late once is worse for us than one who is always two to three days.* ⚠ That sentence is what converts a preference into a decision.',
  '⚠ **Phrase the no-units finding as a statement about use.** ⚠ *It does not make him dishonest; it makes his dates worthless to a planner.* **A finding about character is a libel risk and an argument; a finding about what you can rely on is neither.**',
  '⚠ **And never write a conclusion with the word *better* in it.** If the page needs one sentence at the end, it is the weighting, not the verdict.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the dimensions and the weighting for a choice at your work (**60 words or more**). Use the frame.'));
out.push(p('**______________ — THE ______________ DIMENSIONS, AND THE WEIGHTING. ______________. ⚠ ______________ of the ______________ favour the option we are not recommending.**   on ______________ | ______________ | ______________ | ⚠ **______________**   in terms of ______________ | ______________ | ______________ | ______________   as regards ______________ | ______________ | ______________ | ______________   ⚠ **on ______________** | ______________ | ⚠ **______________** | ⚠ **______________**   ⚠ **The dimensions that favour the other option.** ______________, and ______________. ⚠ They are on this page so that ______________.   ⚠ **The weighting, in one sentence about us.** ______________, because we ______________.   ⚠ **The dimension with no units.** ______________. It does not make ______________; it makes ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be somebody who is about to telephone the rejected supplier** — then ask one question: **what will I find that is not on this page?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *points to* column, pointing both ways', ''],
  ['The dimensions favouring the rejected option, named as real', ''],
  ['The weighting, in one sentence about you', ''],
  ['The trade spelled out in arithmetic', ''],
  ['The no-units finding phrased as use, not character', ''],
  ['No sentence containing *better* with nothing after it', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their weighting sentence. The class says whether it is about the buyer or about the suppliers.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a decision at your work that was announced with the word *better* (**140 to 180 words**). Say what the dimensions actually were, which ones went the other way, and whether anybody said so.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is every comparison attached to a dimension?_   ? _which dimension went the other way, and who found out later?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did somebody find the dimension that went the other way **after** the decision? Usually two of three, and in those the decision was reopened.'));
out.push(box('Homework', ['Write your final text. Then take one decision you are about to announce and write the weighting sentence for it, about yourself and not about the options (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 16.6 =======================
out.push(pb());
out.push(h2('16.6  The recommendation paragraph, and the column that is a guess'));
out.push(p('**Function:** recommending, with what would change it   ·   **Grammar:** the recommendation paragraph; *I recommend … What would change this is …*   ·   **Pronunciation:** reading a recommendation aloud so the condition is heard'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Make a recommendation about something at your work in one sentence. Then say what would change it.'));
out.push(p('**b**  Which of these is a recommendation? _The figures are attached. · On balance Ms Shamsi is cheaper. · I recommend we stay with Ms Shamsi and ask for the three-hundred break._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub ask for that is not in the paragraph?   **A** a figure   **B** what would change the recommendation   **C** a date'));
out.push(p('**b**  Listen again. **1** What three things does he say a recommendation must have? **2** What does he say about the column that is a guess?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.11  "And what would change it?"', [
  ['Nour', 'I recommend we stay with Ms Shamsi and ask for the three-hundred price break.'],
  ['Mr Ayoub', 'Good sentence. Two more things and then I can sign it. What would change it?'],
  ['Nour', 'If she refused the break?'],
  ['Mr Ayoub', 'That is one. What else?'],
  ['Nour', '⚠ If the Homs supplier delivered. One delivery would turn his reliability column from a guess into a figure, and his column is the only one on the page that is a guess.'],
  ['Mr Ayoub', 'So write both. *What would change this: Ms Shamsi refusing the break, or one clean delivery from Homs.* And the third thing?'],
  ['Nour', 'The date?'],
  ['Mr Ayoub', '⚠ **When you will look again.** A recommendation with no review date is a decision that lasts for ever by accident. ⚠ **This company has suppliers nobody has compared since 2011**, not because anybody decided to keep them but because nobody wrote a date.'],
  ['Nour', 'Say August.'],
  ['Mr Ayoub', 'Say August, and say what you will have by then that you do not have now.'],
  ['Nour', '⚠ Six months of Ms Shamsi at the new price, and if we put one small order through Homs, a real reliability figure instead of a guess.'],
  ['Mr Ayoub', '⚠ Then do that. **One order of a hundred at the top of his price list, which costs us nothing in particular, and in August you will have two suppliers with figures instead of one supplier and a guess.** ⚠ *The column that is a guess stays a guess until somebody spends a little money on it* — and a hundred cartons is a cheap way to buy a column.'],
  ['Nour', 'So the recommendation is three sentences.'],
  ['Mr Ayoub', '⚠ **What you recommend, what would change it, and when you will look again** — and the third is the one that stops a comparison becoming a tradition.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The recommendation paragraph — three sentences, and no more**',
  table(['Sentence', 'Example'], [
    ['**1 I recommend…**', '**I recommend** we stay with Ms Shamsi and ask for the 300 break.'],
    ['⚠ **2 What would change this is…**', '**What would change this:** her refusing the break, or one clean delivery from Homs.'],
    ['⚠ **3 I will look again in…**', '**I will look again in August**, when I shall have six months at the new price.'],
    ['the guess, named', '**His reliability column is the only guess on the page.**'],
    ['buying the column', '⚠ **one order of 100 turns the guess into a figure.**'],
  ], [2.1, 3]),
  '⚠ **Three sentences: what you recommend, what would change it, and when you will look again.** ⚠ **The third is the one that stops a comparison becoming a tradition** — *this company has suppliers nobody has compared since 2011, not because anybody decided to keep them but because nobody wrote a date.*',
  '⚠ **Name the column that is a guess.** Every comparison has one. ⚠ *His reliability column is the only guess on the page* — and a reader who is not told which column is a guess will treat all of them as figures.',
  '⚠ **Then buy the column if it is cheap.** ⚠ *One order of a hundred at the top of his price list costs nothing in particular, and in August you will have two suppliers with figures instead of one supplier and a guess.*',
  '⚠ **A recommendation with no review date is a decision that lasts for ever by accident.** Put a month in, and say what you will know by then that you do not know now.',
  '⚠ **Keep the paragraph to three sentences.** ⚠ The analysis is on the pages behind it; **a recommendation that restates the comparison has not made one.**',
  '**Practise:** Make three recommendations in three sentences each. ⚠ Do the second sentence first if it helps — *what would change this* is often easier than the recommendation and it tells you what the recommendation is.',
  '**Useful phrases:**  I recommend …  ·  what would change this is …  ·  I will look again in …  ·  the only guess on the page  ·  one small order buys the column  ·  and what will I know by then?',
  '**Pronunciation – the condition heard.** 🔊 **Track 16.12** Listen: _I recommend we STAY // what would change this is her reFUSing the break // I\'ll look again in AUgust._ ⚠ Three groups, each falling. **The second must not be mumbled: it is the sentence that makes the first one safe.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives a one-sentence recommendation; B asks for the other two sentences and the guess. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I recommend __________.'],
  ['B', 'Good sentence. What would change it?'],
  ['A', 'If __________.'],
  ['B', 'That is one. What else?'],
  ['A', '⚠ If __________. That would turn __________ from a guess into a figure.'],
  ['B', 'And when will you look again?'],
  ['A', '__________, when I shall have __________.'],
  ['B', '⚠ And can you buy the guess cheaply before then?'],
]));
out.push(table(['Role card 1 — the cartons', 'Role card 2 — a recommendation of your own'], [[
  '*I recommend we stay with Ms Shamsi and ask for the three-hundred break.* ⚠ What would change it: her refusing, or one clean delivery from Homs. Review: August. ⚠ **And buy the guess: one order of a hundred at the top of his list.**',
  'Use something you actually have to decide. ⚠ B\'s job is to refuse any recommendation without sentence 2 and sentence 3, and to ask **which column is a guess** — *every comparison has one*, and a writer who says there is none has not noticed theirs.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three sentences. ⚠ Then write the guess, and how much it would cost to turn it into a figure.'));
out.push(PHRASE_CARD(['I recommend …', 'what would change this is …', 'I will look again in …', 'the only guess on the page', 'buy the column', 'what will I know by then?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write **three** recommendations from your own work, each in three sentences, with the guess named.'));
out.push(table(['I recommend', 'What would change this', 'I will look again in', 'The column that is a guess'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.8, 1.8, 1.1, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I recommend _______. What would change it is _______. I will look again in _______, when I shall have _______. The guess on my page is _______._'));
out.push(p('**Listener task:** count the recommendations in the room with a review date. ⚠ Then ask how many decisions at everybody\'s work have no review date and have lasted years.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I recommend to stay_ and a recommendation with no condition. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the recommendation, and answer the questions.'));
out.push(box(null, [
  '**CARTONS — RECOMMENDATION. 7 February. N. Mansour. ⚠ Three sentences. The comparison is on the two pages behind this one.**',
  '**I recommend** that we stay with Ms Shamsi and ask for her three-hundred price break at 960, which is four per cent off everything we buy from her and is below our monthly usage.',
  '⚠ **What would change this:** her refusing the break, which would make the two suppliers about level on landed cost; **or one clean delivery from the Homs supplier**, which would turn his reliability column from a guess into a figure.',
  '⚠ **I will look again in August**, when I shall have six months of Ms Shamsi at the new price and — if we place the small order below — a real reliability figure for Homs instead of a guess.',
  table(['', 'What is on this page'], [
    ['⚠ **The column that is a guess**', '⚠ **his reliability — one delivery, no history.** Every other column on the comparison is a figure from a quotation or from our own books.'],
    ['**What it costs to buy it**', 'one order of 100 at the top of his list, about 1,000 per hundred, ⚠ **and no commitment of any kind**'],
    ['**What two of the six dimensions say**', '⚠ **they favour him** — 11 per cent ex-works and a day quicker on the road'],
    ['**The weighting**', 'reliability, because we plan a fortnight ahead and cannot absorb a surprise'],
  ], [1.6, 4.4]),
  '⚠ **Why the small order is in the recommendation and not in the comparison.** The comparison is about what we know; ⚠ **the order is about what we will know in August**, and it costs about the price of one month\'s saving to stop the reliability column being a guess for the next eleven years.',
  '⚠ **And the sentence I would have written three weeks ago.** *On balance Ms Shamsi is better.* ⚠ **Six words, no condition, no review date, no guess named** — and it would have been signed, filed, and still in force in 2030.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What two things would change the recommendation?'));
out.push(item('2', 'Which column is a guess, and what would it cost to buy it?'));
out.push(item('3', 'What is wrong with the sentence the writer would have written three weeks ago?'));
out.push(box('Writer\'s box', [
  '**The recommendation — three sentences and a short table:** **I recommend…** → ⚠ **what would change this** → ⚠ **I will look again in…** → **a table naming the guess, what it costs to buy it, the dimensions against you, and the weighting.**',
  '⚠ **Put the comparison behind the recommendation, not inside it.** *The comparison is on the two pages behind this one.* ⚠ **A recommendation that restates its evidence has not made a recommendation**, and the person signing it wants one page.',
  '⚠ **Give two conditions in sentence 2, not one** — one that would make you change, and one that would make you look again. They are different, and a reader can act on both.',
  '⚠ **Name the guess in the table, and say that everything else is not a guess.** ⚠ *Every other column is a figure from a quotation or from our own books.* **That sentence is what makes the named guess credible rather than a disclaimer.**',
  '⚠ **Price the guess and say there is no commitment.** ⚠ *One order of 100, about 1,000 per hundred, and no commitment of any kind.* **A small, cheap, reversible purchase that converts a guess into a figure is the best money in this unit.**',
  '⚠ **End with the sentence you would have written before.** *On balance Ms Shamsi is better.* ⚠ *Six words, no condition, no review date, no guess named — and it would have been signed, filed, and still in force in 2030.* **Printing it is what teaches the next reader what the page is for.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a recommendation for a real choice at your work (**60 words or more**). Use the frame.'));
out.push(p('**______________ — RECOMMENDATION. ______________. ⚠ Three sentences. The comparison is behind this page.**   **I recommend** that ______________, which ______________.   ⚠ **What would change this:** ______________, which would ______________; **or** ______________, which would turn ______________ into ______________.   ⚠ **I will look again in ______________**, when I shall have ______________.   ⚠ **The column that is a guess** | ⚠ **______________.** Every other column is ______________   **What it costs to buy it** | ______________, ⚠ **and no commitment**   **The dimensions that favour the other option** | ⚠ ______________   **The weighting** | ______________   ⚠ **And the sentence I would have written before.** ______________. ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be the person who has to sign it** — then ask one question: **what would change this, and when do I see it again?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three sentences, no restated comparison', ''],
  ['Two conditions in sentence 2', ''],
  ['A review date, with what you will know by then', ''],
  ['The guess named, and everything else said not to be', ''],
  ['The guess priced, with no commitment', ''],
  ['The sentence you would have written before', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only sentence 3. The class says what the writer will know in that month that they do not know now.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a supplier or an arrangement at your work that nobody has compared for years (**140 to 180 words**). Say when it was decided, who decided it, what has changed since, and what one small test would cost.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is there a review date anywhere in the story?_   ? _what would one small test cost, and who could place it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had the arrangement never been reviewed because nobody had written a date? Usually all three — ⚠ **it is almost never a decision to keep somebody; it is the absence of a decision to look.**'));
out.push(box('Homework', ['Write your final text. Then write a three-sentence recommendation about something at your work, with a review month and the name of the column that is a guess (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 16.7 =======================
out.push(pb());
out.push(h2('16.7  Review & Mediate: what is not in the columns'));
out.push(p('**Function:** explaining a comparison to somebody who must live with the choice   ·   **Review:** landed cost · superlatives · proportional change · comparative adverbs · the dimension named · the recommendation paragraph'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 16 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What are the four things that are almost never in a quoted price?',
  '**2** What is the test for a superlative, and what beats it?',
  '**3** What is the half of a proportional sentence that the supplier does not write?',
  '**4** When the goods are identical, what are you comparing, and what part of speech is it?',
  '**5** What are the three sentences of a recommendation, and which one stops it becoming a tradition?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Abu Yasser say is not in the columns?   **A** the price   **B** two things nobody who buys has to do   **C** the dates'));
out.push(p('**b**  Listen again. **1** What are the two things? **2** What does he say about who writes comparisons?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.13  "Nothing in your columns is lifted by anybody"', [
  ['Nour', 'The carton comparison. Six dimensions, landed cost, and a recommendation. Is there anything not in it?'],
  ['Abu Yasser', 'Two things, and neither is a criticism. First: ⚠ **his cartons come flat and hers come made up.**'],
  ['Nour', 'That is not in any quotation.'],
  ['Abu Yasser', 'It is not in any quotation and it is about forty minutes a day for one man. Four hundred cartons made up by hand is a morning a week. ⚠ **Your landed cost has a van in it and does not have a man in it.**'],
  ['Nour', 'And the second?'],
  ['Abu Yasser', '⚠ **His pallet is a different size.** Ours take two of hers side by side in the racking and three of his leave a gap you cannot use. So the fourth store holds about eleven per cent less of his than of hers.'],
  ['Nour', 'Which is the space problem I could not put a number on, and you have just put a number on it.'],
  ['Abu Yasser', 'Eleven per cent of the fourth store, and I know it because I stack it. ⚠ **Nothing in your columns is lifted by anybody**, and both of the things I have told you are things you find out by lifting.'],
  ['Nour', 'Why has nobody ever told me either of these?'],
  ['Abu Yasser', 'Because nobody has ever shown me a comparison before. ⚠ **They are decided in the office and arrive in the warehouse as an instruction**, and by the time the first pallet comes the decision is eleven months old and the cartons are flat.'],
  ['Nour', 'And if I had asked you in January?'],
  ['Abu Yasser', '⚠ **Two minutes.** I would have asked you two questions: *made up or flat?* and *what size is the pallet?* ⚠ **They are the first two questions anybody who stacks would ask and they are on nobody\'s quotation sheet.**'],
  ['Nour', 'They are going on ours.'],
  ['Abu Yasser', '⚠ Then put a line at the bottom of the sheet saying who in the building has to be asked before it is signed, **and put my name on it** — not because my opinion matters more, ⚠ **but because the columns are written by people who do not lift anything.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – the questions only the person who does it would ask**',
  table(['The question', 'What it found'], [
    ['⚠ **Made up or flat?**', 'his come flat — about forty minutes a day for one man'],
    ['⚠ **What size is the pallet?**', 'his leaves a gap — the store holds 11 per cent less'],
    ['Who has to be asked before this is signed?', '⚠ **a line at the bottom of the quotation sheet**'],
    ['How long would it have taken in January?', '⚠ **two minutes**'],
  ], [2.1, 3.4]),
  '⚠ **Nothing in a comparison table is lifted by anybody.** Both of the costs Abu Yasser names are found by **handling the goods**, and neither appears on either quotation.',
  '⚠ **A landed cost with a van in it and no man in it is not a landed cost.** Four hundred cartons made up by hand is a morning a week, every week, for ever.',
  '⚠ **The cost you could not price is often a number somebody else holds.** *Eleven per cent of the fourth store, and I know it because I stack it.* ⚠ **It was not unpriceable; it was priceable by somebody who was not asked.**',
  '⚠ **The reason is structural, not personal.** ⚠ *Comparisons are decided in the office and arrive in the warehouse as an instruction* — and by the time the first pallet comes, the decision is months old.',
  '⚠ **So put the asking into the form.** A line at the bottom of the quotation sheet naming who must be asked before it is signed — ⚠ **because the columns are written by people who do not lift anything.**',
  '**Practise:** Take a comparison of your own to the person who will handle the thing and ask them the two questions. ⚠ Then ask what their own two questions would have been.',
  '**Useful phrases:**  is there anything not in it?  ·  made up or flat?  ·  what size is the pallet?  ·  nothing in these columns is lifted  ·  two minutes, in January  ·  who has to be asked before it is signed?',
  '**Pronunciation – the two questions, asked plainly.** 🔊 **Track 16.14** Listen: _made UP, or FLAT?_ · _what SIZE is the pallet?_ ⚠ Short, level, no apology in either. **The questions sound trivial and they are worth about eleven per cent of a warehouse.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A presents a comparison; B is the person who will handle the thing and asks the questions only they would ask.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'Present the carton comparison. ⚠ The trap is that A will defend the landed-cost column. **It is a good column and it has no man in it** — and the forty minutes a day is not an objection to the method, it is a row the method was missing.',
  'Be the person who does the work. ⚠ Your job is to ask the two or three questions that come from handling: how it arrives, what it weighs, where it goes, how long it takes to make ready. ⚠ **Then say how long you would have taken to answer them in January**, which is the finding.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the two things that were not in the columns and the figure each one is worth. ⚠ Then write the line that goes at the bottom of the quotation sheet.'));
out.push(PHRASE_CARD(['is there anything not in it?', 'made up or flat?', 'what size is the pallet?', 'nothing here is lifted', 'two minutes, in January', 'who must be asked?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher pairs you with somebody whose work you do not know. Take a comparison of yours and collect their questions.'));
out.push(table(['Their question', 'What it found', 'Is it in my columns?'], [['', '', ''], ['', '', ''], ['', '', '']], [2, 2.6, 1.4]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what was not in your columns. This is the **fourth** unit of this book, and the thing nobody writes down is this: **a comparison is written by whoever gathers the quotations, and the quotations describe the thing being sold and never the work of receiving it — so every column in every comparison is about money, time and quality as the seller measures them, and the two or three real costs of a choice are held, unasked, by the person who will unload the first pallet and could have said them in two minutes.**'));
out.push(p('_My columns did not contain _______ or _______. Each is worth about _______, and the person who knew was _______._'));
out.push(p('**Listener task:** add to the Book 2 office-word list: _landed cost · a trade-off · a price break · a sunk cost · a switching cost · a preferred supplier._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 2)', 10));
out.push(p('⚠ **This unit practises Part 2: matching.** Five people need an answer. Read the five lines **A–E** from a quotation sheet and choose the one that decides each question.'));
out.push(box(null, [
  '**A**  _Price basis: ex-works or delivered. Where ex-works, the cost of collection is added before any comparison is made._',
  '**B**  _Minimum order quantity, stated against our own monthly usage. A minimum above usage is recorded as stock financed, not as a price._',
  '**C**  _Payment terms in days. A difference in terms is converted to a figure at our overdraft rate and shown as a cost._',
  '**D**  _What happens when a batch is wrong. Where there is no history, this line reads "not known" and no figure is entered._',
  '**E**  _Form of supply and pallet dimensions. Signed only after the warehouse supervisor has seen the sheet._',
], 'FFFFFF', C.navy));
[
  '**1**  A supplier is cheaper per hundred but you must fetch them yourself. Which line decides it?',
  '**2**  A supplier will discount at five hundred and you use four hundred. Which line?',
  '**3**  Cartons arrive flat and have to be made up by hand. Which line?',
  '**4**  A new supplier has never sent you a wrong batch because he has never sent you anything. Which line?',
  '**5**  One supplier wants paying in thirty days and the other in sixty. Which line?',
].forEach(t => out.push(p(t + '   **A** · **B** · **C** · **D** · **E**', { indent: 200, after: 50 })));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 2 — business correspondence, 60 to 80 words.** Here: asking a supplier the questions that are not in their quotation.',
  'The shape: **the four conditions, asked as questions** · ⚠ **the two questions from the warehouse** · **the date you need the answers by.**',
  '⚠ **In eighty words, ask and do not explain.** A letter that explains why you are asking about pallet sizes invites a paragraph of reassurance; ⚠ **a numbered list of six short questions gets six short answers.**',
  '⚠ And ask for the price break explicitly, because almost nobody does: *what is your price break, and at what quantity?* ⚠ **Four per cent off everything, for one sentence in a letter.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** Write to a supplier asking the questions their quotation does not answer (**60 to 80 words**). Ask **the four conditions**, ⚠ **the two warehouse questions**, and give **the date you need the answers by.**'));
out.push(p('Dear ______________, thank you for your quotation of ______________. Six questions, so that I can compare properly: **1** ______________ or ______________? **2** What is the minimum ______________? **3** ______________? **4** What happens ______________? **5** ⚠ Do the goods arrive ______________ or ______________? **6** ⚠ What ______________ is the pallet? And ⚠ what is your price break, and at what quantity? I need these by ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the questions and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The four conditions, as questions', ''],
  ['The two warehouse questions', ''],
  ['The price-break question', ''],
  ['A date for the answers', ''],
  ['60 to 80 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full comparison for a real choice at your work (**140 to 180 words**): the landed-cost table with the all-in figure, the six dimensions with a *points to* column, the recommendation in three sentences, the column that is a guess, and ⚠ **the two things the person who handles the thing told you that were not in any quotation.**'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then take a comparison to the person who will handle the thing, ask what is not in your columns, and write down their two questions and how long they took to answer (60+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 16 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  A quotation is 890 ex-works; the other is 1,000 delivered, and carriage is 180. The cheaper, landed, is ___.   a) 890   b) the delivered one   c) they are level',
  '2  _It is ___ cheap ___ it looks._   a) not as / as   b) not so / than   c) not as / than',
  '3  Which claim can you prove on Thursday?   a) the cheapest in Damascus   b) 940 deliveries, 11 late, list available   c) one of the most reliable in the city',
  '4  _The more we take, ___ it costs per carton._   a) the less   b) less   c) the fewer',
  '5  The goods are identical. The comparison is now ___.   a) adjectives   b) adverbs   c) prices',
  '6  _They pack ___ than he does._   a) more careful   b) more carefully   c) carefuller',
  '7  _She is better._ This is refused because ___.   a) it is impolite   b) *better* has no dimension after it   c) it is too short',
  '8  The third sentence of a recommendation is ___.   a) what you recommend   b) what would change it   c) when you will look again',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 16.15** Listen to the exchange. Complete the note.   First thing not in the columns: ______   What it costs: ______   Second thing not in the columns: ______   What it costs: ______   How long it would have taken in January: ______'));
out.push(dlg('Track 16.15  Audio script (read after the check)', [
  ['Abu Yasser', 'Two things, and neither is a criticism. First: his cartons come flat and hers come made up.'],
  ['Nour', 'That is not in any quotation.'],
  ['Abu Yasser', 'It is about forty minutes a day for one man. Four hundred cartons made up by hand is a morning a week. Your landed cost has a van in it and does not have a man in it.'],
  ['Nour', 'And the second?'],
  ['Abu Yasser', 'His pallet is a different size. Three of his leave a gap you cannot use, so the fourth store holds about eleven per cent less of his than of hers.'],
  ['Nour', 'And if I had asked you in January?'],
  ['Abu Yasser', 'Two minutes. I would have asked you two questions: made up or flat, and what size is the pallet.'],
]));
out.push(p('**C  Writing.** Write a landed-cost comparison of two offers (**60 words or more**) with the four conditions and an all-in figure, then the recommendation in three sentences.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 16)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ ask the four conditions of any quotation and give the landed cost',
  '☐ test a superlative, and replace it with a figure about us',
  '☐ say both halves of a proportional sentence, including the one the supplier leaves out',
  '☐ compare behaviour with adverbs, with the evidence for each',
  '☐ name the dimension, and refuse *better* with nothing after it',
  '☐ write a recommendation in three sentences, with a review date',
  '☐ name the column that is a guess, and say what it costs to buy it',
  '☐ ask the person who handles the thing what is not in my columns',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Unit 16 · Student\'s Book');
