// Proactive Business English A1 · Syria Edition · Book 1 · Unit 5 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 5  The Delivery Note'));
out.push(p('_Proactive Business English · A1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('Before you teach this unit', [
  'Every task has an answer. Where a task is open, this key gives a **full sample answer** — speaking, reports, checklists and homework too. Learners\' own answers will be different and that is correct.',
  '⚠ **This is the unit the course was built for, and it is worth saying so to the class on the first morning.** **Unit 1 was your name. Unit 2 was the count. Unit 3 was the day. Unit 4 was the place.** **A delivery note is all four on one piece of paper, and at the bottom there is a line for you to sign.**',
  '⚠ **The one sentence to get into every mouth in the room is 5.4\'s:** ***I have not counted it yet. Two minutes.*** **It is not _no_. It is _not yet_, and it comes with a number of minutes.** **Nobody argues with two minutes, and a learner who owns that sentence will use it in Arabic too.**',
  '⚠ **5.3 teaches the most expensive missing word in the course.** **The same twelve can be boxes or pallets and the difference is thirty-six boxes.** **The question is two words — _twelve what?_ — and it is not rude.** **Say that out loud; many learners believe it is.**',
  '⚠ **5.7 is the hardest mediation in Book 1 and it is the first where BOTH men are right about something that costs the OTHER man money.** **The road really does close at two. Ammar really did lose a box off his own name.** **And the resolution is neither of their positions** — **it is a third thing, smaller than both.**',
  '**Word counts.** Stage 6 asks for **15 words or more**, stage 7 for **20 to 35**. ⚠ **Cycle 7\'s written task is four sentences in about 30 words**, which is the shape of an A2 Key Writing Part 6 one step down.',
], C.grey, C.navy));

// ===================== 5.1 =====================
out.push(h2('5.1  Name, date, number, signature'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect a long silence and then a lot of Arabic at once.** **Nearly everybody in the room has signed something they could not read, and most of them have never said so out loud.** **Do not rush it** — **this is the three minutes that make the class want the unit.**'));
out.push(p('**b**  Open. **Any paper will do: a bus ticket, a receipt, a phone bill.** ⚠ **Make them POINT, physically.** **Finding a name and a date on an unfamiliar paper is the skill, and it transfers to the note in 5.2 unchanged.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — four.   **b**  **1** The signature — the line at the bottom.  **2** The line for your signature.'));
out.push(p('⚠ **The last exchange is the unit:** _Why dangerous? — Because when you sign it, you have said the other three are correct._ **Put that on the board and leave it there for the whole unit.** **A signature is a sentence you say without writing it, and you cannot take it back.**'));
out.push(p('⚠ **And the small one in the middle:** _How many, and of what. Twelve boxes, not twelve._ **That is 5.3 arriving two cycles early.** **Point at it now and the class will recognise it when it comes.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'This is a delivery note. Look at it.'],
  ['B', 'It is all English.'],
  ['A', 'Four things. The name at the top. The date. The quantity. And the line.'],
  ['B', 'And the line at the bottom?'],
  ['A', 'That is for your signature. That is the dangerous one.'],
  ['B', 'Why dangerous?'],
  ['A', 'Because when you sign it, you have said the other three are correct.'],
]));
out.push(note("Run it with a real piece of paper in their hands, even a blank one with four pencil marks on it. The four things are positions on a page before they are words, and a pair saying the top, the date, the middle, the bottom while pointing at four places learns something a pair sitting with a book does not."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Four words, in order.** ⚠ **The order is the task.** **Name, date, quantity, signature** — **and the reason it is that order is that the fourth one is about the other three.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — the four things on my paper', [
  '**1 the name:** _Al-Sham Bakery, Damascus_',
  '**2 the date:** _14/03/2026_',
  '**3 the quantity:** _40 trays_',
  '**4 the signature line:** _"Received by" — empty_',
]));
out.push(note("Learners who bring a real paper give the better lesson, and a learner whose work has no papers at all should draw the paper they wish existed. The fourth row is where the finding is: on most real papers the signature line is empty, or has a squiggle on it, and the class can see for itself that nobody fills it in properly."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _My paper says Al-Sham Bakery at the top. The date is 14 March. The quantity is forty trays. The line is empty._'));
out.push(p('⚠ **The mistake to expect is not grammatical.** **It is that learners read the quantity as a bare number** — _forty_ — **and the unit is on the paper two centimetres away.** **Point at it.** **5.3 will deal with it properly.**'));
out.push(p('**Then the count:** how many papers were missing one of the four? ⚠ **The number is usually high and the missing one is usually the date.** **Say the figure out loud.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** That things 1, 2 and 3 are correct.  **2** _I have not counted it yet._  **3** Number 3 — _did you count it yourself?_'));
out.push(p('⚠ **Question 3 is a grammar question wearing a reading question\'s clothes.** **_Did you count_ is the only past-tense line on the page, and the learner has to notice the form rather than the meaning.** **Expect a wrong answer and treat it as a good one** — **nobody has taught them the past yet; that is Unit 9.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (29 words)', [
  '**BEFORE YOU SIGN — THE COUNTER**',
  '**1** Is the company on the paper a company we buy from?',
  '**2** Is the date today?',
  '**3** Did I count the trays myself?',
  '**4** Is the price on the paper the price we agreed?',
  '⚠ **If I have not counted them, say: I have not counted them yet. Two minutes.**',
]));
out.push(p('**What to credit.** **Four numbered lines.** ⚠ **Every line a QUESTION** — **a question makes the reader look at the paper, an instruction lets him nod.** ⚠ **And the escape line, which is the most useful line on the page:** **six words that stop a signature.** **Without it the list is advice; with it the list is a thing you can do while a driver waits.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "Check the date". ⚠ **That is an order. Make it a question.**',
  '**(pointing)** at the bottom. **(reading)** nothing. ⚠ **What do I SAY if I have not counted?**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their escape line and the class answers one question: could you say that to a driver who is in a hurry?** **Not _is it polite_.** **Could you say it.** **A line that is too long, too apologetic or too clever fails that test, and the class will hear it immediately.**'));
out.push(stage('7', 'Write freely – sample (33 words)'));
out.push(sample('Sample answer', [
  '**I sign the bread sheet every morning. It has the number of trays and the date. I do not always read it. Last year I signed for forty and there were thirty-six, and the shop paid.**',
]));
out.push(p('⚠ **Most papers in this stage will end like that sample, and that is the point of the stage.** **Do not treat the admission as a confession.** **A learner who has written down in English that they signed for four trays they never got has done the most useful piece of writing in the unit.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Have you ever signed something you had not checked?_ — **_Many times. Every morning before this lesson._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: how many people have signed something they had not checked?** **Expect nearly all of them, and say the number without comment.** ⚠ **Do not moralise.** **The number is the argument for the unit and it makes itself.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (26 words)', [
  '**Name: Beirut Packaging Co. Date: 04/03/2026, that is 4 March. Quantity: 12 boxes, white labels. Signature line: "Received by", empty, and nobody has filled it in since January.**',
]));

out.push(pb());
// ===================== 5.2 =====================
out.push(h2('5.2  4 March, not 3 April'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **All twelve, starting at January, three times round the room.** **The months are a list to be memorised and there is no way round it** — **but learners only need to RECOGNISE nine of them and WRITE the three that matter at their work.** **Say that; it makes the list smaller.**'));
out.push(p('**b**  Open. **Three ways:** _25 March_ · _25/03_ · _25/3/26_. ⚠ **Ask which one a stranger could not misread.** **Only the first.** **That is the cycle, before the box.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — 4 March.   **b**  **1** America.  **2** The month in letters, on his own sheet.'));
out.push(p('⚠ **The exchange to read twice is the middle one:** _The same six numbers. A different month._ **04/03 is the fourth of March here and the third of April in America, and nothing on the paper says which.** **The class should feel that as a shock; it usually does.**'));
out.push(p('⚠ **And Nour\'s method, which is the real content:** **she works out which way round it is from THING NUMBER ONE, the name at the top.** _Beirut, so day first._ **The four things from 5.1 are not a list to recite; they are tools, and this is the first time one of them is used.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'The date says 04/03. Is that the fourth of March?'],
  ['B', 'Here, yes. Day first, then month.'],
  ['A', 'And somewhere else?'],
  ['B', 'In America the month is first. It would be the third of April.'],
  ['A', 'The same six numbers. A different month.'],
  ['B', 'Write the month in letters on your own sheet.'],
]));
out.push(note("Card 2 uses 11/09, which is the better card because both readings are real dates and neither is obviously wrong. Run both cards. A pair who have only done 04/03 can believe the problem is rare; a pair who have done 11/09 as well have seen that it happens to any date up to the twelfth of the month, which is nearly half the year."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Two dates.** ⚠ **Both of them, written in letters.** **A listener who writes _04/03_ has copied rather than converted**, **which is the thing the cycle is against.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four dates', [
  '**In numbers:** 07/06  →  **In letters:** _7 June_  ⚠ **(or 6 July — two ways)**',
  '**In numbers:** 23/11  →  **In letters:** _23 November_  ⚠ **(only one way — no 23rd month)**',
  '**In numbers:** 01/01  →  **In letters:** _1 January_  ⚠ **(the same both ways)**',
  '**In numbers:** 12/05  →  **In letters:** _12 May_  ⚠ **(or 5 December — two ways)**',
]));
out.push(note("The three annotations are the whole stage and they are worth putting on the board as a rule the class discovers rather than one you give them: a date is ambiguous only when BOTH numbers are twelve or less. The 23rd of November can only be one thing. Learners who find that out for themselves will check the right dates and stop worrying about the rest."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _My partner wrote 07/06. In letters that is 7 June. It could also be 6 July._'));
out.push(p('⚠ **The question to ask after the reports is the good one:** **which dates could be read two ways and which could not?** **Any day after the twelfth can only be read one way.** **Let the class work out why** — **it takes about forty seconds and it is the most satisfying moment in the unit.**'));
out.push(p('**Board clinic:** four dates, two with a small letter on the month. ⚠ **Same rule as the days in 3.1.** **If the class has it from Unit 3, say so and move on in one minute.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** 4 March 2026.  **2** So the next reader knows HOW she worked the date out, and does not work it out differently.  **3** _Received by_ and _Date received_.'));
out.push(p('⚠ **Question 2 is the one with the thinking in it.** **Nour did not just write the answer on the back — she wrote her reasoning: _Beirut. Day first._** **Three words that save the next man the same five minutes, or save him from reaching the opposite conclusion.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (24 words)', [
  '**ALEPPO PAPER MILLS** _(company)_',
  '**Delivery note no.** 2208   **Date:** 12/03/2026',
  '**To:** Sham Trading, Damascus',
  '**Received by:** _Samih Qassar_   **Date received:** _12 March 2026_',
  '⚠ **In pencil:** _12/03 = 12 March. Aleppo. Day first. Could also be 3 December — checked with the office._',
]));
out.push(p('**What to credit.** **The month in letters somewhere on the page.** **Both empty lines filled.** ⚠ **And the pencil note with the REASONING in it, not just the answer** — **a note signed with no _date received_ is a note that says you agreed and does not say when.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "Date received: 12/03". ⚠ **Letters. Which month?**',
  '**(pointing)** at the pencil note. **(reading)** "12 March". ⚠ **How do you know? Write why.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their pencil note and the class says whether they could follow the reasoning.** **_Beirut, day first_ passes.** **_I asked Nour_ passes too and is better** — **it names a person who can be asked again.**'));
out.push(stage('7', 'Write freely – sample (31 words)'));
out.push(sample('Sample answer', [
  '**My company writes 12/03 and the Lebanese company writes 12/03 and they mean the same thing. The Turkish papers come with the month first. Last year we sent a lorry a month early.**',
]));
out.push(p('⚠ **The last sentence is the one the stage is fishing for and a surprising number of learners have one.** **A date read the wrong way round is a mistake with no symptoms until the day arrives**, **which is why it is worth a whole cycle at A1.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Which way does your company write them?_ — **_Day first. But the Turkish suppliers write month first and nobody told us._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: how many companies write the month in letters?** **The answer is almost none, which is the finding.** **The class is being asked to do something better than the paper they receive** — **say that plainly; it is the first time in the book and it will not be the last.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (23 words)', [
  '**4 March 2026. 12 March 2026. 1 April 2026. 23 November 2025. 7 June 2025. 30 December 2025. All in letters, all with a big letter.**',
]));

out.push(pb());
// ===================== 5.3 =====================
out.push(h2('5.3  Twelve boxes, not twelve'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Five quantities and every one must have a unit.** **A learner who says _twenty_ should be asked _twenty what?_ by the TEACHER, immediately and cheerfully** — **that is the question being modelled, and it works better done than explained.**'));
out.push(p('**b**  ***12 boxes*** **can be counted.** ⚠ **Ask what _12_ on its own tells you.** **Nothing, and the class should say so in one word.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C — 12 boxes on 3 pallets.   **b**  **1** Four.  **2** Twelve boxes — not the three pallets.'));
out.push(p('⚠ **The two lines to point at are the driver\'s _everybody knows it is boxes_ and Ammar\'s answer:** _I am new. I do not know it is boxes._ **That is the most useful thing a new man can say and most new men will not say it.** **Say it in Arabic once.**'));
out.push(p('⚠ **And the last exchange is harder than it looks:** _Four more stops is not my problem. Twelve boxes is my problem._ **Ammar is not being unkind.** **He is saying where his responsibility starts and stops, which is 5.7 in two sentences** — **and in 5.7 he will have to give some of it back.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Twelve. Sign here.'],
  ['B', 'Twelve what?'],
  ['A', 'It says twelve on the paper.'],
  ['B', 'Twelve boxes, or twelve pallets?'],
  ['A', 'Boxes. Three pallets, four on each.'],
  ['B', 'Then the paper should say twelve boxes.'],
]));
out.push(note("Twelve what? is two words and it is the point of the whole cycle, so make the drill lopsided in its favour: run the exchange, then run just that question round the room twenty times with a different number each time. A question has to be automatic to survive a driver in a hurry, and automatic takes repetition rather than understanding."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **What the paper said, and what the lorry had.** ⚠ **Two answers, and in card 1 they are _12_ and _12 boxes on 3 pallets_.** **A listener who writes _12_ twice has not heard the difference, which is exactly the fault the cycle is about.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — six quantities from my work', [
  '**40** · **trays** · _We get forty trays every morning._',
  '**3** · **sacks** · _Three sacks of flour on Sunday._',
  '**200** · **bags** · _Two hundred bags in a box._',
  '**1** · **lorry** · _One lorry a week from Homs._',
  '**12** · **boxes** · _Twelve boxes of labels._',
  '**6** · **rolls** · _Six rolls of tape._',
]));
out.push(note("The third column is doing the work and the first two are scaffolding. A learner who writes forty trays in the third column has copied; a learner who writes we get forty trays every morning has made a sentence, and the sentence is what will come out of their mouth at the gate."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _We get forty trays every week. They come on four pallets, ten on each._'));
out.push(p('⚠ **The mistake to expect:** **a missing -s on the unit** — _twelve box_. **One ring, not four.** ⚠ **And the other one: _four on each_ left out entirely**, **which matters because it is the sentence that lets somebody check a count without unstacking a pallet.**'));
out.push(p('**Board clinic:** six quantities, three with no unit. ⚠ **The class asks _______ what?_ for each one.** **Have them say it out loud, in chorus, three times.** **This is the clinic where the chorus is the point.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Six.  **2** Sixteen — twelve white and four yellow.  **3** Because four lines can hold sixteen boxes, and a man who counts the lines counts four.'));
out.push(p('⚠ **Question 2 is the one with the arithmetic in it and it needs TWO lines added together.** **A learner who answers twelve has read line 1 and stopped** — **the first-match habit again, fifth unit running.** ⚠ **Question 3 is the finding and it should be read aloud:** _count the boxes, not the lines._'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (21 words)', [
  table(['Line', 'Goods', 'Quantity', 'Unit'], [
    ['**1**', 'flour, white', '3', 'sacks'],
    ['**2**', 'flour, brown', '1', 'sack'],
    ['**3**', 'sugar', '2', 'sacks'],
    ['**4**', 'bags, paper', '200', 'packets'],
  ], [0.7, 2, 1, 1.2]),
  '**Total lines: 4.** ⚠ **Total sacks: 6. Total packets: 200. Count the sacks, not the lines.**',
]));
out.push(p('**What to credit.** **A unit on every line.** ⚠ **The number and the unit in SEPARATE columns** — **_12 boxes_ in one column can be read as a quantity of twelve-boxes, and two columns cannot be misread.** ⚠ **And a total that NAMES what it is counting.** **_Total: 4_ has told you about the layout, not about the lorry.**'));
out.push(p('⚠ **Line 2 in the sample is the detail worth marking:** _1 sack_, **no -s.** **A learner who writes _1 sacks_ has applied the rule without looking at the number.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "200". ⚠ **Two hundred what?**',
  '**(pointing)** at the bottom. **(reading)** "Total: 4". ⚠ **Four what? Lines or sacks?**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **One learner reads a line; the class asks _______ what?_ if the unit is missing.** **Round the room, fast.** **It is the same drill as 3R and it should be, because the question needs to be in the room so often that it stops feeling rude.**'));
out.push(stage('7', 'Write freely – sample (30 words)'));
out.push(sample('Sample answer', [
  '**We count in trays. The bakery counts in loaves, forty loaves to a tray. Once we ordered two hundred and they sent two hundred loaves, not two hundred trays. Five trays.**',
]));
out.push(p('⚠ **That last sample is the shape of the best answers to this stage and it is a real kind of disaster.** **Two companies counting the same goods in different units is a problem that no amount of care about numbers will solve** — **only the unit will.** **Point at the forty-fold error.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _How many in one of those?_ — **_Forty loaves in a tray. Ten trays on a rack._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: how many different units does this class count in?** **Trays, sacks, pallets, boxes, rolls, packets, metres, kilos, lorries.** **Put them all on the board** — **it is a vocabulary list the class has written itself and it is better than one from a book.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (27 words)', [
  '**40 trays · 3 sacks · 200 packets · 1 lorry · 12 boxes · 6 rolls · 2 pallets · 500 loaves. Every one has a unit. 40 is not a quantity.**',
]));

out.push(pb());
// ===================== 5.4 =====================
out.push(h2('5.4  Sign here — and what you have just said'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Listen for whether the Arabic is a refusal or a request for time.** **In most rooms it is a refusal, or an apology, or silence.** **_Not yet, two minutes_ is neither, and it is what this cycle sells.**'));
out.push(p('**b**  **The second line.** ⚠ **Ask why _no_ does not work.** **Because it ends the conversation and leaves a lorry in the yard, and because a man who says no to a driver will be asked about it by his supervisor.** **_Two minutes_ is not a confrontation; it is a schedule.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C — yes, after he counts, and he signs the REAL number.   **b**  **1** Two minutes.  **2** _One box short._'));
out.push(p('⚠ **This dialogue contains the whole professional lesson of Book 1 and it is five lines long.** _I have not counted it yet. Two minutes._ → **he counts** → _Fifteen, not sixteen_ → **he signs anyway** → _and I write one box short next to my name._ ⚠ **He did not refuse. He corrected.**'));
out.push(p('⚠ **The last exchange is the one to read aloud twice:** _You are the first man this month who counted. — I am the first man this month who will not pay for a box he did not get._ **Ask the class what _it came off my name_ means where they work.** **Most of them will know.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Sign here. I am late.'],
  ['B', 'I have not counted it yet. Two minutes.'],
  ['A', 'Two minutes. Everybody says two minutes.'],
  ['B', 'Two minutes. Sixteen boxes. One, two, three…'],
  ['A', 'And?'],
  ['B', 'Fifteen. Fifteen, not sixteen.'],
]));
out.push(note("Make the driver genuinely impatient — tapping, looking at a watch, turning away. The sentence has to survive pressure and a politely delivered Sign here teaches nothing. Then swap, so that every learner has both said the sentence under pressure and been the person it was said to. The second half is what convinces them it is not rude."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Did the storeman sign in the end?** ⚠ **The answer should be YES, with the real number.** **A pair who ended on a refusal have performed a different scene** — **and the class should say so, because refusing is the easy ending and it is the wrong one.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — asking a driver for two minutes', [
  '**He said:** _Sign it, I am late._   **I said:** _I have not counted it yet. Three minutes._   **I asked for:** 3 minutes   **I wrote:** _40 trays, counted, correct_',
  '**He said:** _It is always forty._   **I said:** _I have not counted it yet. Three minutes._   **I asked for:** 3 minutes   **I wrote:** _38 trays. Two short. Driver agreed._',
]));
out.push(note("Column three is the one that makes the sentence work and the one learners leave vague. Two minutes, three minutes, five minutes — a number. I need a minute is weaker than I need two minutes, because a number is a promise with an end on it and a driver can decide whether to wait for it."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _He said sign it, I am late. I said I have not counted it yet, three minutes. I asked for three minutes. I wrote thirty-eight trays, two short._'));
out.push(p('⚠ **Count how many asked for a NUMBER of minutes.** **A number is what makes it work and the figure will be low on the first run.** **Put it on the board and run the stage again** — **this is one of the few places in the book where repeating a stage immediately is worth the time.**'));
out.push(p('**Board clinic:** four refusals, two of them just _no_. ⚠ **The class turns each one into _not yet_ with a number.** **Do all four, including the two that were already right** — **saying the good ones aloud is half the drill.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Fifteen.  **2** Line 1 — the white labels.  **3** The driver, M. Haddad.'));
out.push(p('⚠ **Question 3 is the one that matters commercially.** **A short delivery with TWO signatures on it is a fact.** **With one signature it is your word against a man who left ten minutes ago.** **Say that sentence to the class; it is the most practical thing in the unit.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (30 words)', [
  '**Goods received by:** _Samih Qassar_',
  '**Date received:** _12 March 2026_   **Time:** _8.05_',
  '**Signature:** _S. Qassar_',
  '⚠ **Note:** _Paper says 40 trays. I counted 38. TWO TRAYS SHORT. Line 2, brown bread. Driver agreed and signed — M. Haddad._',
]));
out.push(p('**What to credit.** **The number on the paper AND the number counted** — **both, side by side.** **Which line.** **A time, not just a date.** ⚠ **And the driver\'s name, signed.** **Four facts in the note and the fourth is the one that turns a complaint into evidence.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "Two trays short". ⚠ **Short of what? What did the paper say?**',
  '**(pointing)** at the note. **(reading)** "Driver agreed". ⚠ **Did he SIGN? Write his name.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their note and the class answers one question: would a man reading this next week understand it?** **Next week, not now.** **The writer knows what happened; the test is whether the paper does.**'));
out.push(stage('7', 'Write freely – sample (32 words)'));
out.push(sample('Sample answer', [
  '**The bread man asks me to sign every morning at six. I signed for forty trays in January and we had thirty-six. Nobody asked me about it, but it came off the shop.**',
]));
out.push(p('⚠ **_Nobody asked me about it_ is the sentence to notice.** **The cost was real and invisible, which is why nobody changed anything** — **and that is the same finding as every review cycle so far, arriving here as money instead of as a procedure.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Did anybody ask you why you signed it?_ — **_No. That is the problem._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: in how many did somebody sign without counting?** **Nearly all.** ⚠ **Then the better question: in how many did anybody find out?** **Almost none.** **Put both numbers up.** **The gap between them is the reason this cycle exists.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (22 words)', [
  '**I have not counted it yet. Three minutes. — I will say it to the bread man tomorrow at six. Three minutes, thirty-eight trays.**',
]));

out.push(pb());
// ===================== 5.5 =====================
out.push(h2('5.5  Is it a six or an eight?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Write 4417 BADLY, in a hurry, on purpose.** **That is the whole set-up.** **A number written neatly cannot teach this cycle and a teacher with good handwriting should get a learner to write it.**'));
out.push(p('**b**  Open. **6/8 · 1/7 · 5/6 · 3/8 · 0/6.** ⚠ **Have the class write each pair badly and hold it up.** **The class decides which pair is worst; in Arabic-speaking classes 1/7 usually wins, because the European 1 with a serif and the 7 without a bar are nearly identical.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A — 4417.   **b**  **1** The third digit — a one or a seven.  **2** He telephones Beirut and asks.'));
out.push(p('⚠ **Nour\'s method is the content and it is better than the vocabulary:** **ask for the note number AND the date together.** _Because if the number is wrong and the date is right, you know which delivery it is anyway._ **Two facts are better than one.** **Put that on the board.**'));
out.push(p('⚠ **And the last line puts a price on it:** _a digit like that cost us three hours on the telephone_. **Three hours for one digit.** **Ask the class to work out what three hours of two people\'s time is worth** — **it makes the two-minute count in 5.4 look cheap.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'The note number. Is it 4417 or 4477?'],
  ['B', 'Let me see. It is handwritten.'],
  ['A', 'The third digit. A one, or a seven?'],
  ['B', 'I cannot tell.'],
  ['A', 'So I telephone Beirut and ask.'],
  ['B', 'Ask for the number and the date together.'],
]));
out.push(note("I cannot tell is a line worth drilling in its own right, because the alternative most learners reach for is a guess dressed as an answer. A man who says I cannot tell has given useful information; a man who says it is a seven when he does not know has destroyed the only evidence that there was ever a question."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **The two possible numbers, and which digit is the problem.** ⚠ **The digit POSITION, not just its value** — _the third one_. **A listener who says _the seven_ has named one of the two readings as if it were the truth.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — five numbers written badly', [
  '**My number:** 3086   **They asked:** _Is it a nought or a six?_   **The answer:** _A nought. Three, nought, eight, six._',
  '**My number:** 1711   **They asked:** _Is it a one or a seven?_   **The answer:** _Both. One, seven, one, one._',
  '**My number:** 5625   **They asked:** _Is it a five or a six?_   **The answer:** _Five first, then six. Five, six, two, five._',
  '**My number:** 8830   **They asked:** _Is it an eight or a three?_   **The answer:** _Two eights. Eight, eight, three, nought._',
  '**My number:** 4019   **They asked:** _Is it a nought or a nine?_   **The answer:** _A nought at the front, a nine at the end._',
]));
out.push(note("Every answer in the sample ends by reading the whole number digit by digit, and that is the habit the stage is building. Answering the question asked — a nought — closes the question and leaves the rest of the number unchecked. Reading all four digits back costs two seconds and checks everything."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _My partner could not tell a one from a seven. I read it back digit by digit: one, seven, one, one._'));
out.push(p('⚠ **The thing to insist on is the digit-by-digit reading and NOT the big number.** _Four, four, one, seven_ **and not** _four thousand four hundred and seventeen_. **Digits can be checked one at a time; a big number cannot**, **and the big number is also four times harder to say at A1.**'));
out.push(p('**Board clinic:** four numbers written badly. ⚠ **The class asks a two-way question about each.** **Make them ask with the rising-falling tune from the sound box** — **_Is it a SIX↗ or an EIGHT?↘_** — **because a flat version sounds like an accusation.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Twice — theirs and then your own.  **2** Both numbers, with _one digit unclear_.  **3** Because a guessed digit looks exactly like a known one.'));
out.push(p('⚠ **Question 1 catches the thing everybody leaves out.** **Step 1 checks THEIR handwriting; step 2 checks YOURS** — **and yours is the one the office will read next week.** ⚠ **Question 3 is the sentence of the cycle and it should be read aloud.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (32 words)', [
  '**COPYING AN ORDER NUMBER — THE THREE STEPS**',
  '**1** Read the customer\'s number out loud, digit by digit.',
  '**2** Write it. Then read back what you wrote, digit by digit.',
  '**3** If a digit could be two things, ask the customer.',
  '⚠ **If nobody can tell you, write both: 3086 / 3886 — one digit unclear.**',
  '⚠ **Never guess a digit. Write "unclear" instead.**',
]));
out.push(p('**What to credit.** ⚠ **Step 2 — reading back what YOU wrote.** **That is the step nobody has.** **A step that says ASK.** **Something to do when nobody knows.** **And a warning about guessing.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "Read it twice". ⚠ **Twice whose? Theirs, or yours?**',
  '**(pointing)** at the end. **(reading)** nothing. ⚠ **What if nobody knows? Write it down.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their step 2 and the class says WHOSE handwriting it checks.** **If the answer is _theirs_, the step is step 1 written twice** — **and the learner has the commonest fault in the cycle without knowing it.**'));
out.push(stage('7', 'Write freely – sample (33 words)'));
out.push(sample('Sample answer', [
  '**Last year an order number had a bad one in it. We sent the bread to 17 Baghdad Street and the order was for 11. The office found it two days later.**',
]));
out.push(p('⚠ **Ask for the TIME it took as well as the mistake.** **_Two days later_ is the half of the story that tells you why the cycle exists**, **and learners leave it out because the mistake feels like the interesting part.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _How did they find it in the end?_ — **_The customer at 11 telephoned and asked where his bread was._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then add up the hours that wrong digits cost this class.** **A total on the board, in hours.** **It is usually a working week or more** — **and a class that has added up its own losses does not need to be told to read a number back twice.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (29 words)', [
  '**6 / 8 — Is it a six or an eight? 1 / 7 — Is it a one or a seven? 5 / 6 — Is it a five or a six? 3 / 8 — Is it a three or an eight? 0 / 6 — Is it a nought or a six?**',
]));

out.push(pb());
// ===================== 5.6 =====================
out.push(h2('5.6  There is no note'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect two camps and let them argue.** **Half the room will say _send him away_ and half will say _take it and say nothing_.** **The unit\'s answer is neither** — **and the class getting to a dead end first is what makes the third option land.**'));
out.push(p('**b**  **The second line.** ⚠ **Ask what each one leaves you with the next morning.** **The first leaves you with a complaint about a man. The second leaves you with a piece of paper.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C — yes, and he writes his own note.   **b**  **1** The office did not give him one.  **2** The driver\'s name, the lorry number, six pallets, today\'s date.'));
out.push(p('⚠ **The driver\'s line is the one that tells you this is new:** _Nobody has ever done that._ **And Ammar\'s answer is the best line in the unit:** _Then today is a good day._ ⚠ **A storeman four units into an English course has just invented a document.**'));
out.push(p('⚠ **And the last word, _Slowly._** **He is about to write a name he has never heard and he knows it.** **That is Unit 1.6 — _Sorry? Again, please_ — paying for itself five units later.** **Point back at it.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Six pallets. Where do they go?'],
  ['B', 'The note, please.'],
  ['A', 'There is no note. The office did not give me one.'],
  ['B', 'There are no papers at all?'],
  ['A', 'Nothing. Just the pallets.'],
  ['B', 'Then I write one. Your name, your lorry number, six pallets, today\'s date.'],
]));
out.push(note("The exchange has one singular and one plural negative in it, twelve seconds apart — there is no note, there are no papers — which is why it is the drill. And the last line is four items said as one list; make them say all four every time, because a note with three of them on it is a note missing the one that would have identified the lorry."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **The four things on the storeman\'s own note.** ⚠ **Four, and the one most often missed is the lorry number** — **because it is the only one that is not about a person or a quantity, and it is the one that finds the lorry again.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — a paper that is sometimes missing', [
  '**The missing paper:** the bread sheet, on Fridays.   **What people do now:** nothing — they remember the number.   **What I could write instead:** a line in a notebook: date, trays, driver\'s name, his signature.',
  '**The missing paper:** the return note for stale bread.   **What people do now:** the driver takes it away and says he will send one.   **What I could write instead:** two lines in my own book, both of us sign, I keep one.',
]));
out.push(note("Column two is nearly always they remember or he said he would send one, and both are the same answer: nothing is written down. The third column is the invention and it is the first time in this book that a learner is asked to design a document rather than fill one in. Treat whatever they produce as a serious proposal, because it is one."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _Sometimes there is no return note. People let the driver take it away. I could write two lines in my own book and we both sign._'));
out.push(p('⚠ **Count how many said they would write their own paper.** **That is the useful answer and the number will be small**, **because writing your own document feels like something only an office is allowed to do.** **Say out loud that it is not.**'));
out.push(p('**Board clinic:** four lines, two with _is_ for _are_. ⚠ **Same split as 4.3.** **If the class has it, one minute.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** 345 871.  **2** The pallets are wrapped, so he could not see inside.  **3** Two.'));
out.push(p('⚠ **Question 2 is the line that protects the writer and it is the hardest idea in the cycle:** **you write down what you did NOT check.** **A paper that claims you checked something you could not see is worse than no paper**, **because it transfers the blame to you with your own signature on it.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (33 words)', [
  '**GOODS RECEIVED — NO RETURN NOTE**',
  '**Date:** 13 March 2026   **Time:** 6.40',
  '**Driver:** Marwan Haddad   **Lorry:** 220 416',
  '**Goods:** 9 trays, stale bread, going back. ⚠ **Not checked:** _did not count the loaves, trays stacked and tied._',
  '**Driver says:** the Homs office stopped printing return notes in January.',
  '**Received by:** _S. Qassar_   **Driver\'s signature:** _M. Haddad_',
]));
out.push(p('**What to credit.** **The driver\'s name AND the lorry number.** ⚠ **A line saying what you did NOT check.** ⚠ **And the driver\'s words as HIS words** — **_driver says_, not _the Homs office stopped_.** **You do not know what the Homs office did; you know what he told you.** **Two signatures.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "The office did not give him one". ⚠ **Who says? Write "driver says".**',
  '**(pointing)** at the goods line. **(reading)** "9 trays". ⚠ **Did you count the loaves? Write what you did NOT check.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their _not checked_ line and the class says whether it protects the writer.** **A line that says _everything checked_ when the pallets were wrapped does the opposite** — **and the class will see that faster than you can explain it.**'));
out.push(stage('7', 'Write freely – sample (34 words)'));
out.push(sample('Sample answer', [
  '**The stale bread goes back every Friday with no paper. In November the bakery said we had sent nothing back for three weeks. We had sent twenty-seven trays and nobody could prove it.**'
]));
out.push(p('⚠ **_Nobody could prove it_ is the sentence this cycle exists for.** **The goods moved, both men knew, and three weeks later there was nothing on paper** — **which is the same finding as 1.7, 3.7 and 4.7, arriving as a loss instead of as a procedure.** **Fourth time.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Did anybody ask about it later?_ — **_Three weeks later. We lost the argument._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: in how many was somebody asked about it WEEKS later?** **That gap is the whole point.** **A missing paper costs nothing on the day and everything a month afterwards** — **which is why nobody writes one, and why the man who does looks like he is wasting time.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (31 words)', [
  '**GOODS RECEIVED — NO NOTE. 13 March, 6.40. Driver Marwan Haddad, lorry 220 416. 9 trays stale bread. Not checked: loaves inside. Driver says Homs stopped printing them. Both signed.**',
]));

out.push(pb());
// ===================== 5.7 =====================
out.push(h2('5.7  Review: a real delivery note'));
out.push(stage('1', 'Get ready – Unit 5 quiz'));
out.push(table(['', 'The answer'], [
  ['**5.1**', '_Name. Date. Quantity. Signature._ ⚠ **In that order, and the fourth is about the other three.**'],
  ['**5.2**', '_4 March._ ⚠ **Written safely: 4 March, month in letters.**'],
  ['**5.3**', '_Twelve what?_'],
  ['**5.4**', '_I have not counted it yet. Two minutes._'],
  ['**5.5**', '_Is it a one or a seven?_ ⚠ **Then read it back digit by digit.**'],
  ['**5.6**', '_There is no note. Then I write one, and you sign it._'],
], [1, 6]));
out.push(p('⚠ **Tick, do not mark.** **5.4 is the one to listen hardest to** — **a learner who says _no_ instead of _not yet_ should hear the difference once and then be ticked.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — a signature before the count.   **b**  **1** Four.  **2** He signed for sixteen last month, got fifteen, and it came off his name.'));
out.push(p('⚠ **This is the hardest mediation in Book 1 because each man is right about something that costs the OTHER man money.** **Four minutes at five stops is twenty minutes of the driver\'s afternoon and the Homs road closes at two. One box off Ammar\'s name is a box he pays for.** **Both facts are true and they cannot both be free.**'));
out.push(p('⚠ **And Abu Yasser\'s last line is the one that makes the cycle work:** _There is a third thing. Nobody has thought of it yet._ **Stop the recording there.** **Let the class look for it before you turn the page.**'));
out.push(stage('3', 'Practise'));
out.push(p('**The two sides, and both are true.** ⚠ **Do not let a learner play the driver as somebody trying to cheat.** **He did not load the lorry and he cannot fix what is wrong inside it** — **he says so himself.** ⚠ **And do not let anybody play Ammar as awkward.** **He lost money last month doing exactly what the driver is asking him to do now.**'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **The answer is _both_**, **and then: listen for Abu Yasser\'s last line.** **If the class has already found the third thing before the reports finish, let them say it** — **but make them say WHY it works for both men, not just what it is.**'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample('Sample — quick against careful', [
  '**What they wanted:** the customer wanted the bread bagged fast, ten people waiting.   **What I wanted:** to count the change properly.   **What happened:** I counted it, two people left, and the till was right at the end of the day.',
  '**What they wanted:** the engineer wanted the machine started.   **What I wanted:** to check the guard was back on.   **What happened:** I checked it, we lost four minutes, and the guard was not back on.',
]));
out.push(note("Both samples come out in favour of careful, and real classes produce plenty that do not. Those are the more useful ones. A learner who says I counted it and we lost the sale has described the actual cost of care, and a cycle that pretends there is no cost is a cycle nobody believes. The third thing in 5.7 exists precisely because the cost was real."));
out.push(stage('4R', 'Mediate and report'));
out.push(p('**The three positions, in full.**'));
out.push(table(['', 'Right about', 'Gives up'], [
  ['**The driver**', '⚠ **the Homs road closes at two, and four minutes at five stops is twenty minutes — and he did not load the lorry, so he cannot fix what is wrong inside it**', '**the signature before the count.** ⚠ **He waits one minute, not none.**'],
  ['**Ammar**', '⚠ **sixteen on the paper and fifteen in the yard last month, off his own name — and a signature cannot be taken back, which is 5.1**', '**the full count.** ⚠ **He counts ONE line, not four.**'],
  ['**The third thing**', '⚠ **a note has FOUR LINES on it and you do not have to count all of them** — **count line 1, the line that was short last time, in forty seconds; sign for that line; write _lines 2 to 4 not counted, driver waiting_**', '**nothing.** ⚠ **The driver leaves in a minute and the office knows exactly what was and was not checked.**'],
], [1.4, 4.4, 3.6]));
out.push(p('**Report (sample):**  _The driver is right because the road closes at two and he did not load it. Ammar is right because he paid for a box last month. So he counts line one, the line that went wrong before, signs for that line, and writes that lines two to four were not counted with the driver waiting._'));
out.push(p('⚠ **The words to keep:** _those are the only two things on the table_ — **and the answer, _there is a third thing_.** **Two men arguing honestly about four minutes had both forgotten that a note has four lines and you can count one of them.** ⚠ **The third thing is almost always a SMALLER PIECE of the same job, and that is the most transferable idea in Book 1.**'));
out.push(p('⚠ **It also rests on 5.6\'s hardest idea:** **you write down what you did not check.** **_Lines 2 to 4 not counted_ is not an admission of failure — it is the sentence that makes a forty-second count honest.** **Without it the partial count would be worse than no count at all.**'));
out.push(stage('5', 'Read – exam practice'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'B', 'B', 'C', 'B', 'A']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **Question 4 is the only one that needs the whole of its cycle:** _NUMBERS: DIGIT BY DIGIT, BOTH WAYS_ **→** _read theirs and then read yours_. **A learner who chose A has read _digit by digit_ and stopped at the first half, which is the same fault the notice is warning about.**'));
out.push(p('⚠ **Tell the class what this task is.** **A2 Key Reading Part 1, which they sit at the end of the NEXT course** — **same five notices, same three choices, one step up.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (31 words, four sentences)', [
  '**To:** the office',
  '**Note 4417 came today. The paper says 16 boxes. I counted 15, on line 1, the white labels. Please ask Beirut for the missing box.**',
]));
out.push(table(['Marks', 'For'], [
  ['**1**', '**the note number**'],
  ['**1**', '**what the paper says — with the unit**'],
  ['**1**', '**what you counted**'],
  ['**1**', '⚠ **WHICH LINE — a note with four lines has four places to be wrong**'],
  ['**1**', '⚠ **the ask in the LAST sentence**'],
], [1, 5]));
out.push(stage('6P', 'Check together'));
out.push(p('⚠ **Count the sentences out loud, with fingers.** **Four.** **Fourth unit running** — **and if the class now does it before you ask, say so.** **That is a habit forming, and habits are what the last six cycles of this book are for.**'));
out.push(stage('7', 'Write freely – exam practice'));
out.push(p('⚠ **Four sentences, about thirty words, and the last one must be the thing the reader must DO.** **Here it is almost always _ask them for the missing one_ or _send a credit note_** — **and a message that reports a shortage without asking for anything is a message the office will file.**'));
out.push(sample('Sample answer (30 words, four sentences)', [
  '**Note 2208 came on 12 March. The paper says 40 trays, line 2. I counted 38 and the driver signed to agree. Please take two trays off the invoice.**',
]));
out.push(stage('✓', 'Marking the unit check'));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'a', 'c', 'b', 'c', 'a', 'b', 'c']], [1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(box('Marking the unit check', [
  '**A  Words — 8 marks**, one each. ⚠ **Questions 7 and 8 are the _there is / there are_ pair and they are the real grammar of the unit** — **and the option letters are deliberately crossed between them, so a learner who got 7 right by position gets 8 wrong.** ⚠ **Question 5 is the one to look at twice:** _I have not **counted** it yet_ **is a chunk the class has said forty times in 5.4 and has never had to spell.** **Expect (a).**',
  '**B  Listening — 6 marks**, one each. **4417 (1) · 4 March, accept "fourth of March" (1) · sixteen boxes (1) · fifteen (1) · line one, the white labels (1) · the driver, Marwan Haddad (1).** ⚠ **Item 1 must be heard digit by digit** — **a learner who writes "four thousand four hundred and seventeen" has the number and has not done the task.** ⚠ **Item 6 is in the last-but-one line and it is the one that makes the note evidence.**',
  '**C  Reading — 3 marks:** **6 rolls (1) · 16 boxes, twelve white and four yellow — BOTH lines needed (1) · 16 (1).** ⚠ **The second mark is all-or-nothing again.** **Fifth unit running.**',
  '**D  Writing — 8 marks:** **four sentences (2) · the note number (1) · what the paper says, with the unit (1) · what you counted (1) · which line (2) · the ask last (1).** ⚠ **_Which line_ is worth two marks here because it is the thing that separates this message from Unit 2\'s count report.**',
  '**Total 25.** ⚠ **The profile to expect: A high except question 5, B split on items 1 and 6, C split on the second mark, D the best of the book so far.** ⚠ **D should be the best mark in the book by now and if it is, say why when you hand it back:** **the class has counted sentences four times and the counting has become automatic.**',
], C.lteal, C.navy));
out.push(note("Teacher's note. Six things, and the first is the frame. This is the unit the course was built for and the class should be told that on the first morning: Unit 1 was your name, Unit 2 the count, Unit 3 the day, Unit 4 the place, and a delivery note is all four on one piece of paper with a line at the bottom for your signature. Second, the sentence. I have not counted it yet. Two minutes. Get it into every mouth in the room under pressure, with an impatient driver and a number of minutes attached, and then swap the roles so that every learner has also been the person it was said to — the second half is what convinces them it is not rude. Third, the unit in 5.3. The same twelve can be boxes or pallets and the difference is thirty-six boxes; the question is two words and many learners believe it is impertinent. Drill twelve what? on its own, twenty times, with a different number each time. Fourth, what you did not check. It appears in 5.6 as not counted inside, pallets wrapped and it comes back in 5.7 as lines 2 to 4 not counted, driver waiting, and it is the hardest idea in the unit: a paper that claims you checked something you could not see is worse than no paper, because it moves the blame onto you with your own signature underneath. Fifth, 5.7 and the third thing. Both men are right about something that costs the other man money, which is new, and the answer is neither of their positions — it is a smaller piece of the same job. Stop the recording on there is a third thing and let the class look for it. Sixth, the figures. This unit asks you to put more numbers on the board than any other: how many have signed without checking, how many were ever asked about it, how many hours wrong digits have cost, how many units the class counts in. The gap between the first two is the argument for the whole unit and it makes itself. Do not moralise on top of it."));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 1 · Syria Edition · Unit 5 · Answer Key');
module.exports = out;
