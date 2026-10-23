// Proactive Business English B1 · Syria Edition · Book 2 · Unit 21 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 21  Negotiating and Compromise'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B1 answer – learners\' own answers will be different and that is correct.',
  '⚠ **The unit is one negotiation and it is won in 21.1, before anything is offered.** The seven per cent and the ninety days are never given; what settles the arrangement is a list of dates that costs nothing and was found by asking ⚠ ***what will you tell your own customer?*** **Teach the cycles in order and the class will reach 21.7 with the answer already in their hands.**',
  '⚠ **Expect the class to want to practise haggling, and do not give them a haggling lesson.** ⚠ **Nobody in this unit splits a difference.** The techniques are: find the interest, attach a condition, attach an ask, notice a move, hold one line, and write the page before the meeting — ⚠ **and five of the six are done away from the table.**',
  '⚠ **The hardest thing to teach here is restraint about numbers.** A number is always tradeable and the class will keep offering numbers as principles. ⚠ **The single question that corrects it is in 21.5: does it stop being your company if you give it away?** **Everything that survives that question is a line, and everything else is a trade with a price.**',
], C.grey, C.navy));

// ===================== 21.1 =====================
out.push(h2('21.1  What they want, and what they need'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Expect the *why* to be missing from every first answer — people report requests and not reasons. **Ask *and why did they ask?* and wait.**'));
out.push(p('**b**  The second: ⚠ *he has to show his own manager that the price came down.* **The first and the third are the same sentence in different words**, and neither says what the money is for.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ ***What will you tell your customer?*** — not *what do you want from us?*  2 ⚠ **That the price is her position and the date is her interest**: *a position is what somebody asks for; an interest is what they are trying to do*, ⚠ **and you can sometimes give a person what they need without giving them what they asked for.**'));
out.push(note('⚠ The evidence is the part to insist on and it is a measurement: ⚠ **four minutes on the dates and nine words on the price.** **People talk at length about what frightens them and briefly about what they have been told to ask for** — and a learner who writes *she seemed more interested in the dates* has an impression where the model has a number.'));
out.push(p('⚠ And Mr Ayoub\'s last answer is the one that makes the unit cohere with Unit 19: ⚠ **everything that has gone wrong between two companies is in the next thing they ask each other for, and it is usually not mentioned.** **The seven per cent is January, written as a number.**'));
out.push(p('**Language box – Practise (samples):**  1 **a discount** — position; the interest is usually *to be able to show somebody that the price came down*.  2 **ninety days** — position; the interest is *my own customer pays me at sixty*.  3 **a written guarantee** — position; the interest is *I was blamed last time and had nothing to show*.  4 **a meeting with the owner** — position; the interest is *the person I deal with cannot decide anything*.  5 **a penalty clause** — position; ⚠ **the interest is almost never the money** — it is *I need to know you will telephone me when it goes wrong.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'How long did he talk about the price?'],
  ['A', 'He opened with it. Perhaps thirty seconds.'],
  ['B', 'And the other thing?'],
  ['A', 'The invoice format. ⚠ **Eleven minutes, and he came back to it twice.**'],
  ['B', '⚠ So which did you prepare an answer for?'],
  ['A', '…The price.'],
  ['B', '⚠ **Then you prepared for thirty seconds of the meeting.** ⚠ **The thing asked for first is usually the position, because it is the thing somebody rehearsed before they telephoned.**'],
]));
out.push(note('⚠ Role card 2 is the drill and it produces the same shape every time: ⚠ **the rehearsed request first and briefly, the real difficulty later and at length.** **Rank by minutes, not by order of mention** — and the class should notice that they had prepared for the wrong half of the meeting, which is more persuasive than any rule.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the position, the interest and the question that found it. **Typical errors:** *he wants it cheaper* as an interest · an interest invented rather than quoted · and the content error, which is omitting the last thing that went wrong. ⚠ **The previous fault is in the present request in almost every real case**, and it is the half the class will not look for.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Who', 'The position', 'The interest', 'The evidence'], [
  ['Ms Tannous', 'seven per cent; ninety days', '⚠ **a date in the month she can be right about**', '⚠ **4 minutes against 9 words**'],
  ['Mr Haffar', 'a man on a Saturday', 'his stocktake is checked by his brother-in-law and he does not want to be there alone with him', 'he mentions the brother-in-law every time'],
  ['Ms Shamsi', 'seventy-five days', '⚠ **her bank reviews her limit in March**', 'she asks in February every year'],
  ['the carton supplier', 'a bigger order', 'his press run is 5,000 and ours is 1,100', 'he said the number twice, unprompted'],
], [1.1, 1.6, 2.3, 1.4]));
out.push(note('⚠ **Three of the four interests in the table are about somebody who is not in the room** — a brother-in-law, a bank, a press run. ⚠ **That is the test of an interest**: *if it is about the person in front of you and their feelings, it is probably still a position.*'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Ms Shamsi is asking for seventy-five days. What she actually needs is to go into her bank\'s March review with her trade creditors looking light, and I know because she asks in February every year and has never once chased it in May."', '⚠ **Then count the interests in the room that are about somebody not in the room.** ⚠ **Usually most of them**, and the rest are usually positions that have not been examined yet.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **She asked for two things and needs four** — and the two she asked for are the two she spent least time on.  2 ⚠ **The stencil code on every order**, found because ⚠ **she described January three times in twenty-two minutes and never once asked us to do anything about it.**  3 ⚠ **A date list, the code on every order and an evening telephone number** — ⚠ **none of which costs anything** — with the price dealt with separately and last.'));
out.push(note('⚠ The sentence to put on the board is ⚠ **people do not ask for the thing they have stopped expecting.** She had been let down in January, had claimed for it, had been answered — ⚠ **and had quietly concluded that the code on the order was not something this company would ever do.** **That is why it is free: she had already written it off.**'));
out.push(p('⚠ And note what the page does to the preparation: ⚠ *we were preparing to argue about seven per cent.* **A preparation page that does not change the preparation is a diary entry**, and the last paragraph of this one is the only part that proves it was worth writing.'));
out.push(stage('6', 'Write with help – sample (116 words)'));
out.push(sample(null, [
  '**WHAT MR HAFFAR IS ASKING FOR, AND WHAT HE NEEDS. 26 April. N. Sayegh. ⚠ From two conversations and a stocktake.**',
  '**a man here on Saturday mornings** | ⚠ **under a minute, both times** | ⚠ **unknown as stated** | ⚠ **position**',
  '**the stock sheets typed, not handwritten** | about four minutes | his brother-in-law checks the count and queries the handwriting | interest',
  '⚠ **somebody in the room who is not family** | ⚠ **nine minutes, across two conversations, never once as a request** | ⚠ **he is checked by his wife\'s brother and will not say so plainly** | ⚠ **interest, and it is the one he has never asked for**',
  '⚠ **He asked for one thing and needs three**, and ⚠ **the two he needs were never put as requests at all** — they came out while he was explaining why Saturdays mattered.',
  '⚠ **What this changes.** We were preparing to refuse the Saturday. ⚠ **We are now offering typed sheets and a half-hour on the Saturday he is checked** — which costs about forty minutes a month — **and nothing else changes.**',
]));
out.push(note('⚠ The sample does the uncomfortable thing properly: ⚠ **it writes *unknown as stated* against the request itself.** *A man here on Saturday mornings* has no reason attached in anything he said, ⚠ **and the writer refuses to invent one** — which is what leaves room for the real interest to be found in the ninth minute.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *minutes spent* column', '✓'],
  ['*Unknown* where the interest is not known', '✓ row 1'],
  ['The need that was never a request', '✓ row 3'],
  ['What each need would cost', '✓ about forty minutes a month'],
  ['A line saying what the page changes', '✓ we were preparing to refuse'],
], [5, 1]));
out.push(note('⚠ **Band 3 and one move:** the reader to name in this unit is ⚠ **the other side, reading your preparation page by accident** — and the one question is ⚠ ***is that theirs or is it yours?*** **A page that would embarrass you if they saw it is a page built on guesses**, and that single test cleans up most of the interest columns in a class.'));
out.push(stage('6R', 'Share'));
out.push(p('The need that was never a request only. ⚠ **Then ask what it would cost to give** — ⚠ **and in a class of twelve, ten of the answers are *nothing* or *almost nothing*.** **That is the finding of the cycle and it should be counted aloud.**'));
out.push(stage('7', 'Write freely – sample (172 words)'));
out.push(sample(null, [
  'My brother spent three weeks arguing with a landlord about forty thousand a month and got nowhere, and the dispute was never about the rent.',
  'The landlord wanted the rent paid on the first and my brother paid on the tenth, because that is when his own customers pay him. ⚠ **The landlord kept asking for more money and my brother kept offering longer leases.**',
  'They met four times. ⚠ **Each time the rent was discussed for about two minutes and the date for twenty.**',
  'In the end the landlord\'s son said what his father would not: ⚠ **the building has a mortgage and the instalment goes out on the fourth.** The landlord had been borrowing from his daughter for six days every month for two years and was ashamed of it.',
  '⚠ **My brother now pays on the thirty-first of the month before, and the rent has not changed at all.**',
  '⚠ **Three weeks of arguing about a number that neither of them cared about**, and the answer cost my brother nine days of cash flow once and nothing afterwards — ⚠ **because he already had the money on the thirty-first; he simply had never been asked.**',
]));
out.push(note('⚠ **The sample is the perfect shape of the cycle and worth reading aloud twice**: the position was money, the interest was a date, ⚠ **the interest was concealed by shame**, and the solution cost almost nothing. **Note also who revealed it — the son, not the principal.** ⚠ **An interest is often said by somebody junior**, which is the practical argument for talking to more than one person on the other side.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the landlord\'s son"   ✓ _is the interest about somebody not in the room?_ — "yes: a bank and a daughter"   ? _how long did they talk about each thing?_ — "two minutes on the rent and twenty on the date, four times"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually the interest was never stated as a request in two of three texts, ⚠ **and in both the person had stopped expecting it** — or, as in the sample, was ashamed of it. **Both produce the same silence**, and both make the thing cheap to give.'));
out.push(stage('HW', 'Homework – sample (≈62 words)'));
out.push(sample(null, ['⚠ **I asked the carton supplier what he would tell his own works manager** if we halved our order. He talked for six minutes. ⚠ **His press run is five thousand and ours is eleven hundred**, so our order is a setting-up with almost no run behind it. ⚠ **He has never asked us to order less often in bigger lots, and that is what he needs.**']));

// ===================== 21.2 =====================
out.push(pb());
out.push(h2('21.2  The condition that makes yes possible'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Expect *if* for everything; accept it, then introduce *provided that* as the form used in writing and in terms.'));
out.push(p('**b**  ⚠ *We can hold the price for the year **provided that** the quantity is confirmed each quarter.* · *I can do Thursday **as long as** the sheet is signed by noon.*'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **That the quantity for each quarter is confirmed in writing four weeks before it starts** — because the setting-up is the cost: *eight hundred cartons carries it and forty does not.*  2 ⚠ **A condition is a thing somebody can do; a hope is a thing somebody can only wait for** — *and in four months she will say we promised and we will say we hoped, and both of us will be right.*'));
out.push(note('⚠ Two answers in this dialogue do the teaching. ⚠ ***Provided that* is not a refusal with a condition on it; it is the shape of every yes that a company can actually keep.** And ⚠ **the condition has to be something the other side can do by themselves** — *provided that trade is normal* is **a hope with grammar round it**, which is the phrase the class will remember.'));
out.push(p('**Language box – Practise (samples):**  1 *we can hold the price **provided that** each quarter is confirmed in writing four weeks ahead.*  2 *we can deliver monthly **provided that** the order reaches us by the 20th of the month before.*  3 *we can answer in the evenings **as long as** the number is used for things that cannot wait until eight.*  4 *the dates will hold **provided that** the code comes with the order.*  5 *you will have the same driver **as long as** the delivery stays on a Tuesday.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'We hope to be able to hold the price.'],
  ['B', '⚠ Could she make that true this afternoon?'],
  ['A', 'No. It depends on the board price.'],
  ['B', '⚠ Then it is a hope. What could she do this afternoon that would make it true?'],
  ['A', '…Tell us the quarter\'s quantity.'],
  ['B', '⚠ Then: *we can hold the price **provided that** the quarter is confirmed in writing four weeks before it starts.*'],
  ['A', 'And if she will not?'],
  ['B', '⚠ **Then yes, to something smaller: one quarter at a time, at the same price.**'],
]));
out.push(note('⚠ Role card 2 is a single mechanical test and it is the most portable thing in the cycle: ⚠ ***could the other side make this true this afternoon?*** **Everything that fails it is a hope**, and a hope in a term sheet is **a quarrel with a date on it.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the yes and the condition, then say whether the other side could make it true alone and by when. **Typical errors:** *provided that business improves* · *we hope to be able to* · and the structural error, which is putting the condition before the yes. ⚠ **Condition first and the sentence is heard as a refusal**, whatever follows it.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What was asked', 'The yes I can give', 'Provided that…', 'If they refuse the condition'], [
  ['seven per cent', 'the present price held twelve months', '⚠ **each quarter is confirmed in writing four weeks ahead**', 'one quarter at a time, same price'],
  ['ninety days', 'sixty days', 'the first consignment of each quarter is paid before it leaves', '⚠ **thirty days, as now**'],
  ['delivery on demand', 'a date in the month, three months ahead', 'the order reaches us by the 20th', 'a date two weeks ahead'],
  ['a man every Saturday', 'a man on the Saturday of the stocktake', 'the sheets are ready the night before', 'a man for the first hour only'],
  ['an evening number', 'an evening number', '⚠ **it is used for what cannot wait until eight**', '—'],
], [1.3, 1.5, 1.8, 1.6]));
out.push(note('⚠ **The fourth column is the one learners leave empty and it is the one that makes the meeting survivable.** ⚠ **Every condition has a smaller version**, and writing it in advance means a refusal costs the length of the deal and not the deal: *one quarter at a time, at the same price* ⚠ **keeps everything except the length.**'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I cannot give ninety days. What I can give is sixty, provided that the first consignment of each quarter is paid before it leaves the yard. If they will not, then thirty days, as now."', '⚠ **Then count the conditions in the room the other side could make true by themselves**, and read out the ones that could not. ⚠ **They are always about trade, the market, the season or circumstances** — the four words that mean *we hope*.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **The code with the order, and the evening number used sparingly** — ⚠ **they are not concessions at all; they are instructions for making the thing work.**  2 ⚠ **Because the board setup is the cost on this product**: *eight hundred cartons carries it and forty does not* — so a price fixed for a year without a quantity is a promise about something nobody has measured.  3 ⚠ **The smaller version of each condition** — *one quarter at a time, at the same price* — ⚠ **so that a refusal does not end the conversation.**'));
out.push(note('⚠ The honest sentence in the middle of the page is the one to praise: ⚠ *it is not a trick to make her commit to volume; it is the only way a fixed price for a year can be true.* **One sentence of candour about the real term buys more than three pages of terms** — and the class will feel the difference immediately if it is read aloud with and without that sentence.'));
out.push(stage('6', 'Write with help – sample (118 words)'));
out.push(sample(null, [
  '**THE THREE CONDITIONS, AND WHAT EACH BUYS. 27 April. F. Saeed. ⚠ Every one is something the shop can do by itself in an afternoon.**',
  '⚠ **delivery on a named day each week** | ⚠ **provided that the order is telephoned by four on the Tuesday** | ⚠ **the van does one eastern run a week and the load is built on Tuesday evening** | a named day each fortnight',
  'the same driver | provided that the delivery stays on the named day | he knows the yard and the back gate | any driver, with the gate instructions written',
  '**the pallet taken away** | **provided that it is stacked and not loose** | loose boards take the space of the next drop | —',
  '⚠ **Two of the three conditions cost the shop nothing** — ⚠ **they are not concessions; they are how the run works.**',
  '⚠ **The one actually being negotiated is the named day**, and ⚠ **it is not a device to tie them down; it is the only way a weekly slot can exist**, because there is one eastern run and it is loaded the night before.',
  '⚠ **And the smaller version.** A named day each fortnight, which keeps everything except the frequency.'
]));
out.push(note('⚠ **The sample finds the same three-part structure in a delivery round**: one condition that is really an instruction, one that is really a preference, ⚠ **and one that is the deal** — with the arithmetic (*one eastern run, loaded the night before*) printed beside it. **Insist on that arithmetic**: a condition with its reason is read as arithmetic and one without is read as leverage.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every condition doable by the other side alone', '✓ all three by four on Tuesday'],
  ['*Why that makes it possible*, with the arithmetic', '✓ one eastern run a week'],
  ['Instructions separated from concessions', '✓ the pallet and the driver'],
  ['The condition actually being negotiated, named', '✓ the named day'],
  ['A smaller version for each', '✓ a named day each fortnight'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The smaller versions only. ⚠ **Ask what each costs compared with the full one** — ⚠ **and the answer is nearly always *the length or the frequency, and nothing else*.** **A class that sees that will stop treating a refused condition as a dead deal.**'));
out.push(stage('7', 'Write freely – sample (168 words)'));
out.push(sample(null, [
  '**TO MS M. TANNOUS. 27 April. N. Mansour.**',
  '⚠ **We can hold the present price for the whole of the next twelve months**, which in a year like this one is worth more than any discount I could give you, ⚠ **provided that the quantity for each quarter reaches me in writing four weeks before the quarter begins.**',
  '⚠ **I want to tell you plainly why that condition is there.** The cost on an export carton is the setting-up and not the board: eight hundred cartons a year carries it and forty does not. ⚠ **It is not a device to tie you to a volume; it is the only way a fixed price for a year can be true.**',
  '**And if you would rather not commit a year ahead**, the answer is still yes to something smaller: ⚠ **one quarter at a time, at the same price**, confirmed four weeks before each one.',
  '**Two other things, which are not concessions and are simply how it works.** Send the consignee code with the order rather than after it; and the evening number is a house with a child in it, ⚠ **so please use it for what cannot wait until eight.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "Ms Tannous, reading on a Monday morning"   ✓ _does the yes come before the condition?_ — "yes, in the first six words"   ? _which condition is a hope?_ — "none; all three could be done this afternoon"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually at least one hope dressed as a condition in all three texts, ⚠ **and it is always about trade, the market, the season or circumstances.** **Those four words are the diagnostic**, and a class that learns to search for them will clean its own writing.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['Three hopes turned into conditions. ⚠ ***We hope to deliver on Tuesdays* became *we deliver on Tuesdays provided that the order is in by four on the Monday.*** *We hope to hold the price* became ⚠ *we hold the price for the quarter provided that it is confirmed in writing.* And ⚠ ***we hope to keep the same driver* became *provided the day does not move.***']));

// ===================== 21.3 =====================
out.push(pb());
out.push(h2('21.3  Never a concession without one'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The question that does the work is the second one: **what happened to it afterwards?** — and the answer is almost always *it became normal.*'));
out.push(p('**b**  The second: ⚠ *I would be prepared to look at three per cent, if you would take the full quarter in one consignment.* **The first is a concession with nothing attached.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Because Mr Tarabishi had been difficult about a delivery and she wanted the conversation to end.**  2 ⚠ **Something in the arithmetic** — one consignment instead of three, thirty days instead of sixty, the quantity in writing. ⚠ **Never goodwill.**'));
out.push(note('⚠ The two sentences to keep are ⚠ **every concession you give becomes the floor; nobody goes back up**, and ⚠ **the question is not *can we afford it?* but *what is it buying?*** **The second converts the whole subject from affordability to exchange**, which is the shift the cycle exists to make.'));
out.push(p('⚠ And the shape matters mechanically: ⚠ **the offer and the ask are one sentence, so a refusal of one half is a refusal of both.** **Two sentences and the first has already been given away** — which is worth demonstrating on the board with a full stop moved.'));
out.push(p('**Language box – Practise (samples):**  1 *I would be prepared to look at three per cent, **if you would** take the quarter in one consignment.*  2 *I would be prepared to deliver free, **if you would** take the delivery on our eastern day.*  3 *I could give you an extra week, **if you would** pay the first half now.*  4 *I would hold the price twenty-one days instead of fourteen, **if you would** give me the quantity with the enquiry.*  5 *I could send a man on Saturday, **if you would** have the sheets ready the night before.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I will give them the free delivery. It is only a van.'],
  ['B', '⚠ What is it buying?'],
  ['A', 'Goodwill. They have been patient.'],
  ['B', '⚠ **Goodwill does not appear in the arithmetic.** What costs them nothing and is worth something to us?'],
  ['A', '…Taking it on our eastern day.'],
  ['B', '⚠ Then: *I would be prepared to deliver free, **if you would** take it on our eastern day.*'],
  ['A', 'And if they say no?'],
  ['B', '⚠ **Then the free delivery was never offered, and nothing is on the table.**'],
]));
out.push(note('⚠ Role card 2 refuses two answers and the class will offer both: ⚠ **goodwill and a good relationship.** **Neither appears in any column of any page in this unit** — and the useful substitute question is *what could they do that costs them nothing and is worth money to us?* ⚠ **A day of the week, an order in writing, a quantity, a signature.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the concession and the ask as one sentence. **Typical errors:** two sentences · *if you would be reasonable about the dates* (⚠ **an ask that cannot be measured**) · and the content error, which is forgetting what happened to the last unpaid concession.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The concession', 'What it costs us', 'If you would…', 'What the ask is worth'], [
  ['three per cent on a quarter', 'about 55,000', '⚠ **take the quarter in one consignment**', '⚠ **three deliveries into one — most of it back**'],
  ['free delivery east', 'about 18,000 a drop', 'take it on our eastern day', 'no extra run; the van goes anyway'],
  ['an extra week to pay', 'nine days of cash', 'pay the first half now', 'half the invoice nine days earlier'],
  ['a man on Saturday', 'four hours at overtime', 'have the sheets ready the night before', 'the four hours become two'],
  ['the price held twenty-one days', 'the risk of a board rise', 'give the quantity with the enquiry', '⚠ **we can quote once instead of three times**'],
], [1.4, 1.2, 1.8, 1.8]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I would be prepared to deliver free, if you would take it on our eastern day. The concession costs about eighteen thousand a drop and the ask is worth all of it, because the van goes east anyway."', '⚠ **Then count the asks in the room that appear in the arithmetic.** ⚠ **Read out any that are goodwill and ask what they are worth in money** — **the silence is the lesson.**']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Four of the six became permanent, and nothing was got for any of them** — each was given to end a conversation, and ⚠ **each ended that conversation and opened a cheaper one.**  2 ⚠ **Because it was written as a trade: the price is held fourteen days and the order must come inside the fourteen days** — ⚠ **both halves in the same sentence**, which is why it has never been argued about.  3 ⚠ **Because replacing four split cartons after a fault of ours is not a concession and must never be traded** — it is a repair, ⚠ **and asking for anything in return would have cost more than the cartons.**'));
out.push(note('⚠ **The fourteen-day price hold is the only paid-for concession in nine years, and it is a canon term of this company.** It is worth pointing at: ⚠ **the trade is inside one sentence, both halves are checkable, and it is in every quotation** — *which is what a concession looks like when it is done properly, and it was done properly once.*'));
out.push(p('⚠ And the sixth row is a deliberate trap for the class: ⚠ **a repair is not a bargaining chip.** **A page that mixes the two teaches people to haggle over their own mistakes** — and the sentence to keep is *asking for anything in return would have cost more than the cartons.*'));
out.push(stage('6', 'Write with help – sample (121 words)'));
out.push(sample(null, [
  '**WHAT WE HAVE GIVEN AWAY FOR NOTHING SINCE 2020. 28 April. H. Mourad. ⚠ Five things. Four of them are now the price.**',
  '**the Friday bread at the old price** | 2020, for one customer who complained | ⚠ **nothing** | ⚠ **the Friday price, for everybody. Nobody can name the week it changed.**',
  '**delivery to the two schools** | once, in the rain | ⚠ **nothing** | two deliveries a week, and the driver is paid for them',
  '**the staff discount to the staff\'s families** | one cousin, once | ⚠ **nothing** | ⚠ **about nine families, and two of them are not related to anybody here**',
  '⚠ **a tray held back until four** | asked for by the clinic; we said yes if they telephoned by two | ⚠ **the telephone call by two, every day** | ⚠ **a standing arrangement that works, and the only one on this list**',
  '**four loaves replaced after a bad bake** | last month, our fault | ⚠ **nothing asked** | nothing. ⚠ **It was a repair, not a concession.**',
  '⚠ **Four of the five became permanent and we got nothing for any of them**, and each was given to end a conversation at the counter.',
  '⚠ **The one that worked was written as a trade**: the tray is held and the clinic telephones by two — ⚠ **both halves in one sentence.**',
]));
out.push(note('⚠ **The third row is the sample\'s best finding** and it is the shape of every unpaid concession at scale: ⚠ *about nine families, and two of them are not related to anybody here.* **A concession given once to one person becomes a category**, and nobody can name the day it did.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The honest *why* — to end a conversation', '✓ at the counter'],
  ['A *what it is now* column', '✓ nine families'],
  ['A count at the top, not an adjective', '✓ five things, four permanent'],
  ['The one that bought something, with the reason', '✓ the clinic tray, both halves in one sentence'],
  ['What is a repair and not a concession', '✓ the four loaves'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('*What it is now* only. ⚠ **Then ask how long ago the gesture was made** — ⚠ **and in most cases nobody can say.** **A concession whose date is unknown has become a term of trade**, and the class discovers that it is sitting in their price list.'));
out.push(stage('7', 'Write freely – sample (175 words)'));
out.push(sample(null, [
  'The most expensive thing anybody at my work ever gave away was a parking space, and it cost us a storeman.',
  'In 2021 a customer\'s driver complained that he had to unload from the street. ⚠ **The manager told him to use the yard space by the gate, which was where the storeman parked.** It was meant to be for that afternoon.',
  '⚠ **It is now that driver\'s space.** He has been in it twice a week for four years, and two other drivers from the same company use it when he does not.',
  'The storeman parks on the street and walks past the gate four times a day. ⚠ **He has never complained once**, and he gave in his notice in February for reasons he described as personal.',
  '⚠ **Nothing was ever asked for in exchange, and nothing could be now**, because asking a customer to give up something he has had for four years is a bigger conversation than the one the manager was avoiding.',
  '⚠ **What it should have been is one sentence:** *you can use the yard space, if your driver telephones when he is twenty minutes away.*',
]));
out.push(note('⚠ **The sample\'s repair is the whole cycle in one line** — the ask was free, it was available, and nobody thought of it because ⚠ **the concession was made to end a conversation and not to buy anything.** **And it shows the second cost of an unpaid concession**: it is usually paid for by somebody who is not in the room.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the storeman, in February"   ✓ _was anything asked for in the same sentence?_ — "nothing, and nothing could be asked now"   ? _what is the concession now?_ — "that driver\'s space, and two of his colleagues\' "'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually the concession became permanent in all three texts, ⚠ **and in all three nobody can name the day it stopped being a favour.** **That is the mechanism**: a favour with no end date and no ask attached becomes a term, and the only record of it is somebody\'s memory of being kind.'));
out.push(stage('HW', 'Homework – sample (≈64 words)'));
out.push(sample(null, ['Four things and the ask that would have paid for each. ⚠ ***The Friday price, if you would take the Thursday baking.*** *The schools delivery, if you would take it on the eastern day.* ⚠ ***The family discount, if the family member collects after three.*** And ⚠ *the held tray, if you telephone by two* — **which is the one that was actually written that way, and the only one that still works.**']));

// ===================== 21.4 =====================
out.push(pb());
out.push(h2('21.4  In that case'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Expect *I said I would think about it* or *I thanked them* — **both are the silence the cycle is about.**'));
out.push(p('**b**  The second: ⚠ *in that case we could look at the price for the first quarter.* **The first closes the subject politely.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Thank you, and that she would put it to Mr Ayoub** — which ⚠ **stops the negotiation and the other side does not know why.**  2 ⚠ **A move received in silence is a move that was free**, and nobody makes a second one.'));
out.push(note('⚠ The key reframing is in Mr Attar\'s second answer: ⚠ **you do not have to answer; you have to say what it changes.** **A class resists *in that case* because they think it commits them**, and it does not — ⚠ *in that case I will have an answer by Thursday instead of next week* **gives nothing and answers the move.**'));
out.push(p('⚠ And the proportion is the honesty mechanism: ⚠ *which is about a quarter of what you asked for.* **Naming the proportion stops both sides pretending**, and pretending is what produces the deadlock two meetings later.'));
out.push(p('**Language box – Practise (samples):**  1 *in that case I can take the setting-up charge off the first consignment, which is about a quarter of what you asked for.*  2 *in that case I can look at the other request properly rather than both at once.*  3 *in that case we could hold the price for the whole of that order.*  4 *in that case I can put it to Mr Ayoub tomorrow rather than next week.*  5 ⚠ *in that case you will have an answer by Thursday, either way* — **which is the one for when there is nothing to give.**'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'They have dropped one of their two requests.'],
  ['B', '⚠ Answer it three ways. One that costs money.'],
  ['A', 'In that case I can look at the delivery charge.'],
  ['B', '⚠ One that costs nothing.'],
  ['A', 'In that case I can put the whole thing to the owner as one request rather than two.'],
  ['B', '⚠ And one with only a date.'],
  ['A', 'In that case you will have an answer on Thursday, either way.'],
  ['B', '⚠ **And in most real cases you will use the second or the third.**'],
]));
out.push(note('⚠ Role card 2 is the drill that makes the cycle usable: ⚠ **three answers to one move — money, nothing, a date.** **Most negotiations are kept moving by the second and the third**, and a class that has rehearsed all three stops being frightened of answering in the room.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the move and the three answers. **Typical errors:** *thank you, I will come back to you* · an *in that case* with a falling tone · and the content error, which is matching a small move with a large answer. ⚠ **Say the proportion out loud and the size looks deliberate instead of mean.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The move', 'Costing money', 'Costing nothing', 'A date'], [
  ['ninety days to sixty', '⚠ **the setting-up charge off one consignment (about a quarter of the ask)**', 'the whole package put to Mr Ayoub as one request', 'an answer Thursday instead of next week'],
  ['seven per cent to four', 'four on the first quarter only, if it comes in one consignment', '⚠ **the date list extended to three months**', 'a figure by the 20th'],
  ['they confirm in writing', 'nothing needed', '⚠ **the price fixed for the whole twelve months**', '—'],
  ['they ask only for a date', 'nothing', '⚠ **the date list, which was free all along**', 'by the 20th of each month'],
], [1.3, 1.9, 1.7, 1.3]));
out.push(note('⚠ **Three of the four best answers in the table cost nothing.** ⚠ **That is not a trick of the samples**; it is what happens once the interests are known from 21.1 — **the cheap answers are only available to somebody who has found out what the other side is actually trying to do.**'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The move was ninety days down to sixty. In that case I could take the setting-up charge off the first consignment — about a quarter of what she asked for — or put the whole package to Mr Ayoub as one request, or at least give her an answer on Thursday instead of next week."', '⚠ **Then ask which moves in the room were received in silence, and what happened next.** ⚠ **The answer is usually *nothing happened for a fortnight*** — which is the cost of a *thank you*.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Five moves in eight days, and the one that settled it cost nothing** — *when she stopped asking about the discount and asked for the date list, the negotiation was over, and neither of us said so at the time.*  2 ⚠ **Their proportion**: *a quarter of what you asked for*, and *four per cent on one quarter of four.*  3 ⚠ **Nothing came back for six days, and when it did it came back as a new position and not as a reply.**'));
out.push(note('⚠ The third answer is the argument for answering in the room, and it is one recorded instance rather than a principle. ⚠ **Six days of silence hardens a move into a position** — the other side spends the six days building a case for the thing they had been willing to trade away. **One recorded delay is worth more than any amount of advice about momentum.**'));
out.push(stage('6', 'Write with help – sample (119 words)'));
out.push(sample(null, [
  '**THE MOVES, IN ORDER, AND WHAT EACH WAS ANSWERED WITH — THE CARTON SUPPLIER. 29 April. B. Nassif. ⚠ Six moves. One of ours cost money.**',
  'his | he offered a price for 5,000 boards instead of 1,100 | ⚠ **we asked for the same price on 1,100 held in his store and drawn monthly** | ⚠ **nothing — it is his setting-up we are paying for either way**',
  'ours | we offered to take the whole year in four drawings | he gave the 5,000 price | nothing',
  'his | ⚠ **he asked for payment on each drawing instead of monthly** | ⚠ **yes, on condition the price is fixed for the twelve months** | ⚠ **about nine days of cash — a third of what he asked for, and said so**',
  'his | ⚠ **he stopped asking about the quantity and asked for one delivery day a month** | ⚠ **the second Tuesday, in writing** | ⚠ **nothing at all**',
  '⚠ **Six moves in eleven days, and the one that settled it cost nothing** — ⚠ **his van does one run to us a month either way, and nobody had ever asked him which day suited it.**',
  '⚠ **The answer that cost money was given with its proportion attached**, and every move was answered the same day.',
]));
out.push(note('⚠ **The sample mirrors the model exactly from the other side of a counter**, which is worth pointing out: ⚠ **our supplier\'s interest turned out to be a delivery day, just as our customer\'s was a date list.** **Both were free, both were never asked for, and in both cases it was the fourth move that ended the argument.**'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The moves in order, with whose each was', '✓ six'],
  ['Cost in money and proportion in words', '✓ nine days, a third of the ask'],
  ['The move that settled it, named', '✓ the delivery day'],
  ['A delay recorded', '✗ there were none — and it says so'],
  ['What was never a concession, marked', '✓ the fixed price was a condition'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The move that settled it only. ⚠ **Then ask how many people noticed it at the time** — ⚠ **usually nobody.** **The settling move is quiet because it is the moment somebody stops asking for the thing they were told to ask for**, and nothing is said about it at all.'));
out.push(stage('7', 'Write freely – sample (170 words)'));
out.push(sample(null, [
  'I once watched a negotiation die of politeness in about four seconds.',
  'My father was selling a van and a man came with his son. The man offered less than my father wanted, and then, after some talking, ⚠ **he offered to collect it himself from the village, which was two hours each way and a day of my father\'s time.**',
  '⚠ **My father said: that is very kind.** And then he said nothing else, and the man waited, and then they talked about the weather.',
  '⚠ **The collection was worth a day and about a tank of fuel, and it was answered with a compliment.**',
  'The man bought a different van the following week.',
  '⚠ **What my father should have said was in that case, and then anything at all**: ⚠ *in that case I can leave the new tyres on it*, or *in that case I can have the papers ready on Thursday*, ⚠ **or even just in that case let me telephone you tonight with a figure.**',
  '⚠ **He had something to give in all three sizes and he gave a compliment instead**, because a compliment felt like the polite thing and politeness is what ended it.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the son, watching his father\'s offer land"   ✓ _was every move answered the same day?_ — "it was answered in four seconds, with a compliment"   ? _which move settled it?_ — "none; it died at the compliment"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually the settling move cost nothing in two of three texts, ⚠ **and in both it was a request the other side had almost given up making.** **Where a text has no settling move at all, look for a compliment**, as in the sample — ⚠ **politeness is the commonest form of silence.**'));
out.push(stage('HW', 'Homework – sample (≈61 words)'));
out.push(sample(null, ['⚠ **Four moves in the last negotiation; two theirs, two ours.** The one nobody answered was ⚠ **their offer to collect from the depot themselves**, which is worth about a day of the van a month. ⚠ **It was answered with *that is helpful* and has never been mentioned again** — and they have collected twice since, unasked, and we have never paid for it in any form.']));

// ===================== 21.5 =====================
out.push(pb());
out.push(h2('21.5  Whatever else we agree'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Expect numbers, and let them come — **21.5 is the cycle that takes numbers away**, and the class has to offer some first.'));
out.push(p('**b**  The second: ⚠ *whatever else we agree, the goods are paid for before the lorry leaves the yard.* **The first is a preference with *prefer* in it.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Because the generator fuel is cash every week and the men are paid on Thursdays**: *if a quarter goes unpaid we stop in eleven days.*  2 ⚠ **A man with four non-negotiables has none, because the other side picks the softest and tests that** — and when it moves, all four are in play.'));
out.push(note('⚠ The definition is the thing to put on the board: ⚠ **a non-negotiable is not a number. It is a thing that stops being this company if you give it away.** **A number can always be traded; it is only a question of how much** — and the class will test this against *four per cent and no lower* and lose, which is the intended outcome.'));
out.push(p('⚠ The second lesson is counter-intuitive and the class will resist it: ⚠ **say why.** *An unexplained refusal is tested; an explained one is planned around.* ⚠ **She will test *we cannot do that* three times and she will not test the men\'s wages once** — **and if she can plan round it she will, because she wants the arrangement too.**'));
out.push(p('**Language box – Practise (samples):**  1 **payment before the lorry leaves** — ⚠ **a non-negotiable**, with eleven days of arithmetic behind it.  2 **four per cent** — a number, therefore a trade.  3 **our name on the carton** — ⚠ **a preference**, as 21.5\'s reading shows.  4 **thirty days** — a number, and already traded once.  5 **the stencil code from the order** — ⚠ **not a non-negotiable but a method**: it is how the thing works, and it belongs in the instructions.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'What will you not trade?'],
  ['A', 'Our margin below eleven, thirty days, the name on the box, and the Friday closing.'],
  ['B', '⚠ Which of those is a number?'],
  ['A', 'The margin and the thirty days.'],
  ['B', '⚠ Then they are trades. Of the other two, which one stops being your company if you give it away?'],
  ['A', '…The Friday closing. The name is pride.'],
  ['B', '⚠ **Then there is one line and it is the Friday**, and now say why, in money or in hours.'],
]));
out.push(note('⚠ **Role card 2 is the whole cycle in six exchanges and it works on anybody\'s list.** ⚠ **Strike out every number, then ask the stopping question of what is left** — and expect exactly one survivor. **The item that collapses is almost always about a name, a title, or who speaks first.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the one line, the reason and the walk-away. **Typical errors:** a non-negotiable with a figure in it · a line said three times · and the content error, which is a walk-away that would ruin the speaker. ⚠ **A walk-away that is not survivable is not a walk-away**, and the other side can always tell.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The thing', 'A number?', 'Does it stop being us?', 'Keep or trade'], [
  ['payment before the lorry leaves, first consignment of each quarter', 'no', '⚠ **yes — eleven days**', '⚠ **keep. The one line.**'],
  ['four per cent and no lower', '⚠ **yes**', 'no', 'trade — and it will go to five for one consignment'],
  ['thirty days', '⚠ **yes**', 'no', 'trade, and already traded'],
  ['our name on the outside of the carton', 'no', '⚠ **no**', '⚠ **trade. Her customer does not want it; it costs us pride.**'],
], [2.2, 0.9, 1.5, 1.7]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Whatever else we agree, the first consignment of each quarter is paid before it leaves the yard. That is not a position; it is the week\'s wages — the generator fuel is cash and the men are paid on Thursdays. If she refuses it, there is no arrangement and we sell her cartons one order at a time, as we did in January."', '⚠ **Then ask each student which of their four the other side would test first.** ⚠ **They always know**, and knowing it is the argument for having one line rather than four.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **One of the four.**  2 ⚠ **The name on the carton** — *it felt like the most important thing on the list and it is a preference*: ⚠ **her customer sells them on and does not want another company\'s name on the outside, so it costs us nothing but pride** — *and we had been prepared to lose an arrangement for it.*  3 ⚠ **A consequence with a date on it**: *if a quarter goes unpaid we stop in eleven days.* ⚠ **A non-negotiable has arithmetic behind it and a preference has a feeling.**'));
out.push(note('⚠ The third row of that table is the most useful paragraph in the unit for most classes, because ⚠ **the item that collapses is the one people have been defending longest.** **Ask who actually wants it.** Here, nobody: the customer does not, her customer does not, and the only interest in it is ours — ⚠ **which is not nothing, and is tradeable, and should be traded for something.**'));
out.push(stage('6', 'Write with help – sample (116 words)'));
out.push(sample(null, [
  '**THE ONE LINE, AND THE THREE WE THOUGHT WERE LINES — THE WORKSHOP. 30 April. Abu Yasser.**',
  '**the price of a repair, never below 40,000** | ⚠ **yes** | no | ⚠ **a trade. It goes to 35,000 for a fleet of four, and we both know it.**',
  '**payment on collection** | no | no | ⚠ **a preference. Two customers have accounts and always have; it has never hurt us.**',
  '**our sticker on the machine we have repaired** | no | ⚠ **no** | ⚠ **a preference, and the one that surprised me. Nobody has ever objected and nobody has ever telephoned because of one.**',
  '⚠ **the man who does the work signs the job sheet** | no | ⚠ **yes — we cannot answer a complaint without it, and we had two in 2023 that we could not answer** | ⚠ **the one line.**',
  '⚠ **Three of the four were not lines at all**, and ⚠ **the sticker felt like the most important** and is worth nothing we can measure.',
  '⚠ **The one that survived has the arithmetic behind it**: two unanswerable complaints, both of which we paid for twice.',
]));
out.push(note('⚠ **The sample\'s surviving line is a process and not a commercial term**, which is worth showing a class: ⚠ **a non-negotiable is often internal.** *The man who does the work signs the job sheet* protects the company against something it has already paid for twice — **and no customer has ever argued with it, because it is not addressed to them.**'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The numbers struck out and called trades', '✓ the 40,000'],
  ['One item that collapsed into a preference', '✓ the sticker'],
  ['A consequence with a date behind the surviving line', '✓ two complaints in 2023, paid twice'],
  ['The line written to be said once, with its reason', '✓'],
  ['A survivable walk-away', '✓ we go on as before'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The item that turned out to be a preference only. ⚠ **Then ask who actually wanted it** — ⚠ **and in most cases the answer is *us, and nobody has ever mentioned it.*** **A preference held for years is usually invisible to everybody except the person holding it.**'));
out.push(stage('7', 'Write freely – sample (171 words)'));
out.push(sample(null, [
  'The one thing my aunt would not trade was the shop\'s closing time, and she nearly lost her best customer over something she turned out not to believe.',
  'A hotel wanted bread at seven in the evening. ⚠ **She closed at six and had closed at six for twenty-two years**, and she told them twice, firmly, that she could not change it.',
  '⚠ **She told them it was because of the staff, which was true of nobody.** Her daughter did the evening and had asked three times to work later.',
  'What it was really about was her husband, who had died in 2019, and who had walked her home at six. ⚠ **She did not say that to the hotel and she did not say it to us.**',
  '⚠ **In the end she said yes to a quarter past six**, and the hotel takes the bread at a quarter past six to this day and has never asked for seven again.',
  '⚠ **The fifteen minutes were never the point and the walk home was not negotiable at all** — ⚠ **and nobody had ever asked for it, because she had put a false reason in front of the true one.**',
]));
out.push(note('⚠ **The sample shows the cost of an unexplained line from the inside**: a false reason (*the staff*) invited testing, and the true one would have been respected at once. ⚠ **An unexplained refusal is tested; an explained one is planned around** — and the fifteen minutes that settled it were available on the first day.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the hotel\'s buyer, who asked twice"   ✓ _a consequence with a date on it?_ — "none was given; a false reason was given instead"   ? _which of these is really a preference?_ — "the six o\'clock; the walk home was the line"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually one supposed principle is really a preference in all three texts, ⚠ **and in two of three it is about a name, a title, or who speaks first.** **Where it is about something else, as in the sample, expect a true reason hidden behind a presentable one** — and the presentable one is always the one that gets tested.'));
out.push(stage('HW', 'Homework – sample (≈63 words)'));
out.push(sample(null, ['⚠ **Four non-negotiables; two were numbers and are struck out.** Of the two left, ⚠ **the gate sheet signed by name is the line** — the 17 July stoppage happened because one was signed before the pallets were counted. ⚠ **The other, our van rather than a hired one, is a preference**: two customers have asked for a hired van and nobody has ever objected to one.']));

// ===================== 21.6 =====================
out.push(pb());
out.push(h2('21.6  The two-column page'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Expect *nothing was written down* for most of the class, and expect the exceptions to be pages written **after** the meeting.'));
out.push(p('**b**  ⚠ **What they will tell their customer**, and ⚠ **their walk-away.** **Our price list and what we will not trade belong in the *ours* column.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **That it has one column**: *a fair price, a reasonable arrangement, a reliable supplier* ⚠ **are our words**, and a column of our words tells us nothing we did not know before sitting down.  2 ⚠ **UNKNOWN, in capital letters**, so that nobody in the meeting pretends to know.'));
out.push(note('⚠ The sentence the cycle turns on is Lina\'s: ⚠ **half of what people concede, they concede to a walk-away they have imagined** — *we were frightened of Beirut for six weeks and she never once mentioned it.* **That is the argument for the capital letters**, and it is an argument about our own behaviour rather than theirs.'));
out.push(p('⚠ And note the discipline of the quotation marks: ⚠ **their needs go in their words, with the minutes beside each.** *"A date in the month I can be right about" — 4 min.* **The marks are what keep our words out of their column**, which is the only thing that makes the page worth having.'));
out.push(p('**Language box – Practise (sample):**  ⚠ **A class filling the five rows for their own negotiation will put UNKNOWN in two or three boxes**, and almost always in the walk-away row. ⚠ **Count them aloud and then ask who could find each one out** — a freight agent, a cousin in the trade, the other side\'s own clerk — **and set a day.**'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Their walk-away is that they buy from Aleppo. Dearer and slower.'],
  ['B', '⚠ How much dearer?'],
  ['A', 'I do not know.'],
  ['B', '⚠ And how much slower?'],
  ['A', 'I do not know that either.'],
  ['B', '⚠ Then write **UNKNOWN** twice, in capitals. ⚠ **And is there a condition inside it?**'],
  ['A', '…Yes. Their own customer specifies our board weight, so Aleppo may not be allowed at all.'],
  ['B', '⚠ **Then that is the most important line on the page and you have just said it out loud for the first time.**'],
]));
out.push(note('⚠ Role card 2 finds the thing nobody checks: ⚠ **most walk-aways have a condition inside them.** The Beirut alternative requires her customer to accept a Lebanese carton; the Aleppo alternative requires a specification to permit it. ⚠ **Until that condition is checked, the walk-away is a feeling** — and feelings are what concessions get made to.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the five rows of the *theirs* column and count the UNKNOWNs. **Typical errors:** a *theirs* column in our words · an empty walk-away box · and the content error, which is a guess written as a fact. ⚠ **A guess in capital letters is honest; a guess in ordinary type becomes a fact by the second meeting.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['', 'Theirs', 'Ours'], [
  ['What they ask for', 'seven per cent; ninety days', 'the quarter in writing; the code with the order'],
  ['⚠ **What they need**', '⚠ **"a date in the month I can be right about" — 4 min**', '⚠ **the quantity: setting-up is the cost, 800 carries it and 40 does not**'],
  ['What it costs to give', '—', '4 per cent on one quarter, about 55,000'],
  ['⚠ **The walk-away**', '⚠ **two Beirut makers. Price dearer, we think. Lead time UNKNOWN. Whether her customer accepts a Lebanese carton UNKNOWN**', '⚠ **no arrangement; one order at a time, as in January. Survivable.**'],
  ['The non-negotiable', 'none stated', '⚠ **the first consignment of each quarter paid before it leaves**'],
], [1.7, 2.2, 2.1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"In the *theirs* column I have four quoted needs and two UNKNOWNs, both in the walk-away row. Their walk-away is two Beirut makers, lead time unknown. Our one line is the first consignment of each quarter paid before it leaves the yard."', '⚠ **Then count the empty walk-away boxes in the room.** ⚠ **It is usually most of them** — and the follow-up question is the one that matters: *what have you already conceded to that empty box?*']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Two, both in her walk-away box, both in capitals** — the Beirut lead time, and whether her customer would accept a Lebanese carton.  2 ⚠ **Minutes and repetitions**: four minutes on the dates, nine words on the price, ⚠ **January described three times and never once turned into a request.**  3 ⚠ **It ran to three pages and changed nothing**, because by then every decision had been made in a room without it.'));
out.push(note('⚠ **The UNKNOWNs have a name and a day against them**: *Lina is telephoning the freight agent on Thursday.* ⚠ **An UNKNOWN with a name against it becomes a fact in two days; one without stays unknown for a year** — and this is the practical difference between a page that is used and a page that is filed.'));
out.push(stage('6', 'Write with help – sample (122 words)'));
out.push(sample(null, [
  '**THE SCHOOL CONTRACT — PAGE WRITTEN BEFORE THE MEETING. 2 May. H. Mourad and F. Saeed.**',
  '**asks for** | a fixed price for the school year; delivery before seven | the order for the term in writing',
  '⚠ **needs** | ⚠ **"I have to put one figure in the budget in August and live with it" — 6 min · "the bread has to be there before the children" — 11 min · the price, 14 words** | ⚠ **the term\'s quantity, because the Friday baking is built the day before**',
  '**costs** | — | a fixed price for ten months is about 90,000 of risk at last year\'s movement',
  '⚠ **walk-away** | ⚠ **the bakery on the main road, which does deliver at seven. Price UNKNOWN. Whether they will take a term account UNKNOWN** | ⚠ **no contract; we sell them at the counter as now. Survivable.**',
  '**the one line** | none stated | ⚠ **whatever else we agree, the term is paid in two halves, the first before the term starts**',
  '⚠ **Two UNKNOWNs, both in their walk-away box.** ⚠ **Fadi is asking the main road\'s driver on Thursday**, and if he does not know, they stay in capitals.',
  '⚠ **The needs row is the only row with evidence in it**: eleven minutes on the delivery hour against fourteen words on the price.',
]));
out.push(note('⚠ **The sample\'s needs row inverts what everybody expected**: eleven minutes on the hour of delivery, six on the budget figure, ⚠ **fourteen words on the price.** **The school is not buying bread cheaply; it is buying a seven o\'clock** — and the fixed price, which is the expensive thing to give, is the thing least wanted.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Their needs in quotation marks, with minutes', '✓ three, with minutes'],
  ['Figures in the costs row', '✓ about 90,000 of risk'],
  ['UNKNOWN in capitals, with a name and a date', '✓ Fadi, Thursday'],
  ['Their walk-away, and the condition inside it', '✓ whether the main road will take a term account'],
  ['One line only in the non-negotiable box', '✓'],
  ['When the page was written', '✓ before the meeting'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The walk-away row only. ⚠ **Ask which half is known and which is guessed** — ⚠ **and in most rows the price is guessed and the existence is known.** **Knowing that somebody else exists is not knowing what they would charge**, and the gap between the two is where concessions disappear.'));
out.push(stage('7', 'Write freely – sample (173 words)'));
out.push(sample(null, [
  '**THE TANNOUS ARRANGEMENT — PAGE WRITTEN BEFORE THE MEETING. 25 April. N. Mansour and L. Barakat. One side of one sheet.**',
  '**asks for** | **hers:** seven per cent; ninety days | **ours:** the quarter confirmed in writing; the code with the order',
  '⚠ **needs** | **hers:** ⚠ **"a date in the month I can be right about" — 4 min · the code on every order (January described 3 times, never asked for) · "obviously the price matters" — 9 words** | **ours:** ⚠ **the quantity, because the setting-up is the cost: 800 carries it, 40 does not**',
  '**costs** | — | 4 per cent on one quarter about 55,000; setting-up off one consignment about 40,000',
  '⚠ **walk-away** | **hers:** ⚠ **two Beirut makers. Price: dearer, we think. Lead time: UNKNOWN. Whether her customer accepts a Lebanese carton: UNKNOWN** | **ours:** ⚠ **no arrangement; one order at a time, as in January. Survivable.**',
  '**the one line** | **hers:** none stated | **ours:** ⚠ **whatever else we agree, the first consignment of each quarter is paid before it leaves the yard**',
  '⚠ **Two UNKNOWNs, both hers, both in capitals. Lina telephones the freight agent on Thursday.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "Ms Tannous, if this page blew off the desk"   ✓ _is their walk-away filled or guessed?_ — "existence known, price guessed, two boxes in capitals"   ? _which box is in your words?_ — "none of hers; all three are quoted"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually the other side\'s walk-away is a guess in all three texts, ⚠ **and in two of three the guess is more frightening than anything the other side has actually said.** **That is the whole case for the page**: the imagined alternative is doing the conceding, and nobody has ever checked it.'));
out.push(stage('HW', 'Homework – sample (≈62 words)'));
out.push(sample(null, ['⚠ **Their walk-away: the supplier in Aleppo.** Price: UNKNOWN. Lead time: ⚠ **UNKNOWN**. ⚠ **And the condition inside it: their customer specifies our board weight, so Aleppo may not be permitted at all** — which nobody here had ever said out loud. ⚠ **Bassel is asking their clerk on Monday**, and until then all three boxes stay in capital letters.']));

// ===================== 21.7 =====================
out.push(pb());
out.push(h2('21.7  Review & Mediate: two people who both compromised'));
out.push(stage('1', 'Get ready – Unit 21 quiz'));
out.push(p('**1** ⚠ **A position is what somebody asks for and an interest is what they are trying to do** — and the question is ⚠ ***what will you tell your own customer?***  **2** ⚠ **Could they make it true by themselves, this afternoon?** — and ⚠ **a hope with grammar round it** is *provided that trade is normal.*  **3** ⚠ **So that a refusal of one half is a refusal of both, and nothing is left on the table.**  **4** ⚠ **Silence makes a move free, and nobody makes a second one** — and with nothing to give you give ⚠ **a date**: *in that case you will have an answer on Thursday, either way.*  **5** ⚠ **One.** ⚠ **A man with four has none, because the other side picks the softest and tests that**, and when it moves all four are in play.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **That they both gave more than they got** — and both are right.  2 ⚠ **Because it cost nothing, so nobody wrote it down**: it is in a letter in a file, and ⚠ **in two years nobody will know it was the reason for any of this.**'));
out.push(note('⚠ Lina\'s analysis is the mediation and it is worth saying slowly: ⚠ **each side gave up the thing the other one did not want.** *She did not want seven per cent; she wanted to be right in front of her customer. He did not want sixty days; he wanted the quarter paid at the start.* ⚠ **Each paid in a currency the other does not spend** — **which is what a good arrangement feels like from the inside: expensive to both and cheap to both.**'));
out.push(p('**Language box – Practise (sample):**  _"The agreement has five lines and every one is something somebody gave up. What settled it was the list of dates, which is in a letter and in none of the five. It cost nothing. I am putting it in as a sixth line with no price against it."_'));
out.push(stage('3', 'Practise – sample with pair 2'));
out.push(dlg(null, [
  ['B', 'What is written in your agreement?'],
  ['A', 'The rate, the hours, the notice period and who provides the tools.'],
  ['B', '⚠ And what was the last thing that changed before they said yes?'],
  ['A', '…They asked whether they could be paid on the Thursday rather than the last Friday of the month.'],
  ['B', 'And you said?'],
  ['A', 'Yes. It makes no difference to us at all.'],
  ['B', '⚠ Is the Thursday in the agreement?'],
  ['A', '⚠ **No. It is the only thing in the whole negotiation that cost nothing, and it is the only thing that is nowhere.**'],
]));
out.push(note('⚠ **Pair 2 produces the same result on any agreement anybody brings in**, and the two questions must be in this order: ⚠ **what is written in it**, then ⚠ **what was the last thing that changed before they said yes?** **The second answer is almost always free and almost always absent from the document.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the lines of the agreement and the thing that settled it. **Typical errors:** naming a concession as the settling move · and the content error, which is omitting *which side gave up what the other did not want*. ⚠ **That sentence is the mediation**, and without it the cycle is a filing lesson.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What is in the agreement', 'What it cost', 'What actually settled it', 'Is it written anywhere?'], [
  ['five lines: price held, four per cent, quarters in writing, sixty days, first consignment paid', '⚠ **each line cost one side something**', '⚠ **the date list, three months ahead, sent on the 22nd**', '⚠ **a letter in a file**'],
  ['the rate, hours, notice, tools', 'the usual', '⚠ **payment on the Thursday instead of the last Friday**', '⚠ **nowhere**'],
  ['the term price and the delivery hour', '90,000 of risk', '⚠ **a telephone call at six if the van is late**', '⚠ **nowhere, and it has never once been needed**'],
], [2.1, 1.1, 1.9, 1.1]));
out.push(stage('4R', 'Report – mediation'));
out.push(sample('Sample mediation', [
  '"The agreement says five lines, every one a thing somebody gave up. What settled it was the date list for three months ahead, which costs us nothing and is written in a letter in a file and in none of the five lines. I have put it in as a sixth, with no price against it."',
  '⚠ **The unit\'s mediation, named as the ninth unit of this book:** an agreement records what each side gave up, because that is what each side will want proof of, **and the thing that actually ended the argument is almost always something that cost nobody anything and therefore appears in no line of it** — ⚠ **so the document holds the price of the arrangement and not the reason for it**, and when the two people who made it have gone, ⚠ **their successors inherit five expensive terms, no idea why any of them were acceptable, and both sides still believing they were the one who gave more.**',
  '⚠ **And the half that explains the feeling**: both sides gave up the thing the other did not want. ⚠ **She paid in per cent and he paid in days, and neither of them wanted what they were given** — **each paid in a currency the other does not spend.** ⚠ **The repair is one line with no price against it**, read in exactly the same tone as the other five, because a free line read warmly sounds like a favour and a favour can be withdrawn.',
]));
out.push(stage('5', 'Read – exam practice (Reading Part 7)'));
out.push(table(['NEGOTIATION RECORD', ''], [
  ['Lines agreed', '**five**'],
  ['Her opening position', '**seven per cent** (and ninety days)'],
  ['Number of times she came down', '**twice**'],
  ['Our non-negotiable', '**the first consignment of each quarter paid before it leaves the yard**'],
  ['Number of times it was stated', '⚠ **once**'],
  ['Moves answered late', '⚠ **one**'],
  ['What the late answer came back as', '⚠ **a new position**'],
  ['⚠ **What actually ended the argument**', '⚠ **the list of dates for three months ahead** (sent on the 22nd)'],
  ['Her walk-away', '**two companies in Beirut**'],
  ['Cost of the four per cent', '**about 55,000**'],
], [2.2, 3]));
out.push(note('⚠ **Part 7 is a reading-accuracy paper and the two gaps that separate a class here are *once* and *one*.** ⚠ **Both are numbers that the text states in words buried in a clause** — *that last one I said once, before she asked* and *we answered every move the same day except one.* **Teach the class to read for the small numbers and not only for the nouns.**'));
out.push(note('⚠ The gap that produces wrong answers is *what actually ended the argument*: learners write **four per cent** or **sixty days** because those are the commercial items. ⚠ **The text says *what actually ended the argument was the list of dates*** and says it in its own words — **and the whole of 21.7 is that this item is the one nobody expects to matter.**'));
out.push(stage('6', 'Write with help – sample (43 words)'));
out.push(sample('Exam task — Writing Part 1 (35 to 45 words)', [
  'Lina — the date list is what settled the Tannous arrangement, not the four per cent. ⚠ **It costs us nothing.** It must reach her by the 20th of each month, three months ahead. ⚠ **If it stops, the price will be reopened, and she will be right to reopen it.**',
]));
out.push(note('⚠ **That is 43 words and the last clause is the one that does the work.** ⚠ *She will be right to reopen it* **tells a successor why the free line matters more than the expensive ones**, which is the only thing forty words can usefully carry. **The terms are in the document; the reason is in nobody\'s head but the writer\'s.**'));
out.push(note('⚠ The commonest failure is a note that summarises the five terms in forty words and says nothing about the sixth. ⚠ **It scores almost nothing**, because the reader has the terms in front of them. ⚠ **And *we must keep her informed* is the other failure**: a sentiment nobody can perform, where *by the 20th of each month* is a thing a successor can do.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['⚠ What settled it, named', '✓ the date list, and *not the four per cent*'],
  ['What it costs — even if nothing', '✓ *it costs us nothing*'],
  ['What must go on happening, with a date', '✓ by the 20th, three months ahead'],
  ['35 to 45 words — count them', '✓ 43'],
], [5, 1]));
out.push(stage('7', 'Write freely – sample (176 words)'));
out.push(sample(null, [
  '**THE TANNOUS ARRANGEMENT — AGREED TERMS. 28 April. N. Mansour and M. Tannous.**',
  '**1**  The present price is held for twelve months from 1 May, ⚠ **provided that** the quantity for each quarter is confirmed in writing four weeks before the quarter begins.',
  '**2**  Four per cent is allowed on the first quarter only, ⚠ **provided that** the quarter is taken in one consignment.',
  '**3**  Payment is at sixty days from the date of the document.',
  '**4**  ⚠ **Whatever else we agree, the first consignment of each quarter is paid before it leaves the yard.** The reason is stated once and not repeated: the generator fuel is bought for cash each week and the men are paid on Thursdays.',
  '**5**  The consignee code is sent with each order and not after it.',
  '**6**  ⚠ **The date list for the following three months reaches Ms Tannous by the 20th of each month.**',
  '⚠ **Line 6 has no price against it and it is the line that settled this arrangement.** ⚠ **It costs us nothing and it is the only thing in the document that nobody gave up** — **and it is here because, without it, in two years somebody will keep lines 1 to 5 and stop doing line 6, and not know what they have done.**',
]));
out.push(note('⚠ **The closing paragraph is the deliverable of the whole unit.** ⚠ *It is the only thing in the document that nobody gave up* — **and the sentence after it is the reason the paragraph exists at all**: *somebody will keep lines 1 to 5 and stop doing line 6, and not know what they have done.*'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['⚠ **What settled the driver\'s contract was the Thursday payment**, which costs us nothing and was in no line of it. ⚠ **It is now line 7: *wages are paid on the Thursday of the last full week, and not on the last Friday.*** No price against it. ⚠ **It is the only line he has ever thanked anybody for.**']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 21 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'b', 'b', 'b', 'a', 'b', 'a', 'b']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('⚠ Question 1 is the whole of 21.1 in one item: **four minutes against a request** — ⚠ **and a learner who chooses c has not accepted that the two are different in kind**, which is the idea rather than the grammar. ⚠ Question 3 is **can** and not *hope to*: **the yes has to be a yes**, and *might* is the same failure with a modal.'));
out.push(note('⚠ Question 8 is the one to discuss: a concession given with nothing attached becomes ⚠ **the price**, not *goodwill* and not *a precedent you can withdraw*. ⚠ **c is the answer learners want to be true** — and the whole of 21.3 is six worked examples of it not being true. **Nobody goes back up.**'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['Lines in the agreement', 'What settled it', 'Where it is written', 'What each side believes', 'What each gave up'], [[
  '**five**', '⚠ **the date list**', '⚠ **a letter in a file — in no line of the document**', '⚠ **that they gave more than they got**', '⚠ **the thing the other one did not want**',
]], [1.3, 1.1, 1.8, 1.5, 1.6]));
out.push(note('⚠ Gap 5 carries the mark that distinguishes understanding from transcription. ⚠ **The answer is not *per cent and days*; it is *the thing the other one did not want*** — and the fuller form, *each paid in a currency the other does not spend*, earns it outright. ⚠ Gap 3 needs the second half: **in a letter** alone is half an answer, because the point is that it is **in none of the five lines.**'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (68 words)', [
  '**1**  The price is held for the term, ⚠ **provided that** the quantity for each month is confirmed in writing by the 20th of the month before.',
  '**2**  ⚠ **Whatever else we agree, the term is paid in two halves and the first before the term begins.** The reason, said once: the flour for a term is bought in two lots and both are paid for in cash.',
  '**3**  ⚠ **The bread is delivered before seven, and the baker telephones by six if the van will be late.**  ⚠ **No price against this line. It is what settled the arrangement.**',
]));
out.push(box('Marking the Unit 21 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap; gap 3 needs *in no line of the document*, gap 5 needs the currency idea.'],
    ['**C Writing**', '7', '**a line with a workable condition attached** (2) · ⚠ **the non-negotiable, stated once, with its reason** (3) · ⚠ **the settling line with no price against it** (2).'],
  ], [1.2, 0.7, 4]),
  '⚠ **The three marks for the non-negotiable need all three things: one line, said once, with the reason in the same place.** ⚠ **A figure anywhere in it scores 0 of the 3** — *never below forty thousand* is a trade however firmly it is written, and the whole of 21.5 is that a number cannot be a line.',
  '⚠ **The two marks for the settling line need the words *no price against it* or their equivalent.** ⚠ **A settling line written with a price beside it has been turned back into a concession**, which is the error the cycle exists to prevent.',
  '⚠ **Deduct for a condition the other side could not perform alone.** *Provided that trade allows* and *provided that the season is normal* ⚠ **are hopes**, and they appear in about a third of a class\'s first attempts however well 21.2 went.',
  '⚠ **Do not deduct for a short reason.** *The flour is paid for in cash* is enough; the mark is for the reason existing and being in the same breath as the line, ⚠ **not for its eloquence.**',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 21**'));
out.push(p('**1 The class will want to haggle, and this unit never haggles.** Nobody in it splits a difference, and the seven per cent is never discussed on its merits at all. ⚠ **Five of the six techniques are performed away from the table**: finding the interest, writing the conditions, attaching the asks, choosing the one line, and filling the two-column page. ⚠ **If the class treats 21.1 as a warm-up they will spend the rest of the unit arguing about numbers**, so do the *four minutes against nine words* measurement properly, with a real conversation of their own, before anything else.'));
out.push(p('**2 Offering numbers as principles.** It will happen in 21.5 and it will happen again in the check. ⚠ **The correction is one question and it must be asked every time: does it stop being your company if you give it away?** ⚠ **And expect one item per student to collapse from a principle into a preference** — a name, a title, a sticker, who speaks first, six o\'clock. **Let it collapse gently**; the collapse is the learning, and the thing that collapses has usually been defended for years.'));
out.push(p('**3 Treating 21.7 as bookkeeping.** It looks like a lesson about filing and it is the most practical cycle in the book. ⚠ **The document records the price of the arrangement and not the reason for it**, and the reason walks out of the building with the person who made it. If a cycle must be cut, ⚠ **cut 21.4 and keep 21.7**: *in that case* can be taught in ten minutes inside 21.3, ⚠ **and the question *what was the last thing that changed before they said yes?* cannot be taught except by being asked.** It also produces the only homework in this unit that changes a document — **and in most classes somebody discovers that the thing holding their biggest arrangement together is written nowhere at all.**'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Unit 21 · Answer Key');
