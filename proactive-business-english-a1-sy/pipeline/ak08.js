// Proactive Business English A1 · Syria Edition · Book 2 · Unit 8 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 8  Asking For and Giving a Thing'));
out.push(p('_Proactive Business English · A1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('Before you teach this unit', [
  'Every task has an answer. Where a task is open, this key gives a **full sample answer** — speaking, reports, checklists and homework too. Learners\' own answers will be different and that is correct.',
  '⚠ **This is the shortest unit in the book and the one that changes the most.** **Five sentences, four of them three words long:** _Can I have…? · Here you are. · Thank you. · Sorry, we have not got any. · Do you want a hand?_ **Nothing in it is difficult and nothing in it is optional.**',
  '⚠ **8.3 is the cycle that proves it, and it proves it with a stopwatch rather than a lecture.** **Hani and Ammar ask for the same roll of tape. Ammar gets it in four seconds; Hani waits two minutes.** **The difference is _which one_ and _please_.** **Do not teach politeness as manners; teach it as speed.**',
  '⚠ **8.5 carries the one idea in this unit that nobody expects:** **ask what the hard part is.** **Everybody offers to push the pallet; nobody thinks of the door.** **The hard part of a job is almost never the heavy part, and only the man doing it knows.**',
  '⚠ **8.7 then turns the whole unit sideways, and that is deliberate.** **Six cycles teach that _please_ buys you time, help and tape. It does. And it is a LOCAL HABIT, not a law** — **Abu Fouad has paid cash twice a week for eleven years and has never once said it, because the word is not used where he grew up.** **The unit ends by refusing to let the class use what it has learned as a stick.**',
  '**Word counts.** Stage 6 asks for **15 words or more**, stage 7 for **20 to 35**. ⚠ **Cycle 7\'s written task is four sentences in about 30 words**, which is the shape of an A2 Key Writing Part 6 one step down.',
], C.grey, C.navy));

// ===================== 8.1 =====================
out.push(h2('8.1  Can I have the tape, please?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Real things on the table and real asking, standing up, three times each.** **_Can I have_ is the most used sentence in the unit and the only way to own it is to have said it twenty times before lunch.**'));
out.push(p('**b**  Open. ⚠ **Expect the honest answer, which in most rooms is that nobody says anything at all** — **they point, or they take it, or they say the name of the thing.** **That is not rudeness; it is the gap this cycle fills.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — the tape.   **b**  **1** _Which tape? There are two._  **2** Two cartons came crushed and he is taping them.'));
out.push(p('⚠ **Majd\'s first line is the lesson:** _Which tape? There are two._ **There are two of most things at work, and _can I have the tape_ costs somebody a question.** **Point at it and then at the answer: _the wide one. The brown one._**'));
out.push(p('⚠ **And the last exchange is the reward:** _Then take the whole roll. Bring it back at four._ **He got the whole roll because he said what it was FOR.** **A reason turns a borrowed thing into a lent one.** **That is worth saying out loud; it is the only part of the cycle learners do not expect.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Majd. Can I have the tape, please?'],
  ['B', 'Which tape? There are two.'],
  ['A', 'The wide one. The brown one.'],
  ['B', 'The wide brown one. Here you are.'],
  ['A', 'Thank you.'],
  ['B', 'What is it for?'],
]));
out.push(note("The name at the front of the first line matters and learners drop it. Majd. Can I have… A request addressed to nobody in a room with three men in it is a request three men can ignore. Make them say the name every time, and when they forget, do not answer."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Two describing words.** ⚠ **The wide one AND the brown one.** **A listener who writes one has heard the speaker give one, which is information the speaker needs** — **there are probably two wide tapes as well.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four things I ask for', [
  '**The thing:** tape   **Which one:** the wide brown   **Who I ask:** Majd   **What it is for:** taping crushed cartons',
  '**The thing:** the back store key   **Which one:** the small black   **Who I ask:** Samih   **What it is for:** the Monday count',
  '**The thing:** a pen   **Which one:** any   **Who I ask:** Nour   **What it is for:** the count sheet',
  '**The thing:** the ladder   **Which one:** the long one   **Who I ask:** nobody — it lives by the bench   **What it is for:** shelf four',
]));
out.push(note("The fourth row is worth keeping: a thing nobody has to be asked for. Every workplace has two or three and knowing which they are saves four requests a day. The third row is the other useful shape — which one: any — because sometimes there genuinely is no choice to make and saying so is faster than inventing one."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _I ask Samih for the back store key. The small black one. It is for the Monday count._'));
out.push(p('⚠ **Count the reports that said WHICH ONE.** **The figure is low at first** — **learners name the thing because the thing is what they want.** **Put the number up, then ask the class how many of their workplaces have two of the thing they just named.** **Nearly all.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Samih.  **2** A pen — _keep it, she has forty._  **3** The long ladder — it lives by the bench.'));
out.push(p('⚠ **Question 2 is the one that teaches, because the answer is a line nobody expects on a borrowing card:** _keep it._ **A card that treats a pen and a key the same way is a card that makes people ask permission for a pen**, **and then they stop asking for the key too.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (26 words)', [
  '**ASK ME, DO NOT TAKE — AND WHO TO ASK**',
  table(['The thing', 'Who has it', 'Back when'], [
    ['the bread knife', 'Hala, at the counter', 'same day, washed'],
    ['the till key', 'the manager only', '⚠ **never — ask her to open it**'],
    ['the trolley', 'anybody, it lives by the door', 'put it back'],
    ['a bag', 'help yourself', '⚠ **keep it**'],
  ], [1.8, 1.8, 1.8]),
  '⚠ **Ask. A thing that walks off is a thing nobody can find at six the next morning. H.M.**',
]));
out.push(p('**What to credit.** ⚠ **A NAME in the _who_ column on every line** — **a list of things with no names on it tells you what exists and not how to get it.** **A _back when_ on every line.** ⚠ **And at least one line that says _never_ or _keep it_**, **because those two are the only honest answers for a key and a pen.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "the till key — the office". ⚠ **Who in the office? A name.**',
  '**(pointing)** Here. **(reading)** "the trolley". ⚠ **Back when? Or does it just go back?**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read one line and the class answers one question: could you get that thing in one minute?** **One minute is the test** — **a card that would take you five minutes and two questions has not done its job.**'));
out.push(stage('7', 'Write freely – sample (31 words)'));
out.push(sample('Sample answer', [
  '**The till key is the hard one. Only the manager has it and there is no spare. When she is late nobody can open the till and the first customers wait outside.**',
]));
out.push(p('⚠ **_There is no spare_ is the sentence this stage is fishing for and every workplace has two or three.** **It is the same finding as Unit 1.7 and 4.7 arriving as an object rather than as a record** — **a thing only one person can supply, and nobody has written down what happens when they are not there.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Is there a spare?_ — **_No. There was one and it was lost in 2023._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: how many of these things have no spare?** **Most.** ⚠ **And the follow-up, which is the useful one: how many could be given a spare for under a thousand pounds?** **Almost all of them** — **keys, pens, cutters, trolleys.** **That is a conversation a learner can have with a manager on Monday.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (27 words)', [
  '**Bread knife — Hala. Till key — the manager. Trolley — anybody. Bags — help yourself. Order book — Hala. Delivery sheets — the manager. Four of the six have one person.**',
]));

out.push(pb());
// ===================== 8.2 =====================
out.push(h2('8.2  Here you are'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Four times each, with a real pen passing between real hands.** **_Here you are_ and _Thank you_ are a pair and they have to be learned as a pair** — **a learner who can say one and not the other has half a handover.**'));
out.push(p('**b**  Open. ⚠ **The honest answer in most rooms is _nothing_, or a nod.** **Take it without comment.** **A nod works perfectly well in a room where everybody can see your face, and this unit is about the days when they cannot.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C — three: the tape, the cutter, and the empty roll back.   **b**  **1** _Here you are._  **2** He brings it back so Majd knows to order more.'));
out.push(p('⚠ **The ending is the content:** _Nobody brings the empty one back. Nobody. Thank you._ **Bringing back an empty roll is not politeness** — **it is information, and the information is _order more_.** **Majd said thank you twice in that dialogue and the second one is for a piece of cardboard.**'));
out.push(p('⚠ **And the half the class will drop:** **the RETURN.** _(at four o\'clock) Majd. The tape and the cutter. Here you are._ **Same two sentences again, at the time he said.** **A man who brings things back at four without being asked is lent things for the rest of his life** — **say that; it is the whole commercial argument for the cycle.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'The wide brown tape. Here you are.'],
  ['B', 'Thank you.'],
  ['A', 'And the cutter. You will want it.'],
  ['B', 'Thank you for the cutter too.'],
  ['A', 'Bring them both back at four.'],
  ['B', '_(later)_ The tape and the cutter. Here you are.'],
]));
out.push(note("Real objects, and make them actually wait before the last line — send the pair to the back of the room, do something else for two minutes, then call them back for it. The return said immediately is a drill; the return said after a gap is the habit. It costs two minutes of a ninety-minute lesson."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Four sentences in all, and count them.** ⚠ **Two on the way out and two on the way back.** **Most pairs produce three** — **and the one that goes missing is the thank-you on the return, because by then the borrower feels the transaction is over.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four things that change hands', [
  '**The thing:** the bread trays   **Who gives:** the driver   **Who takes:** me   **Said now:** nothing, he puts them down',
  '**The thing:** the float   **Who gives:** the manager   **Who takes:** me, at six   **Said now:** _"forty thousand"_ and she waits for me to count it',
  '**The thing:** the order book   **Who gives:** me   **Who takes:** Hala   **Said now:** nothing',
  '**The thing:** the till key   **Who gives:** the manager   **Who takes:** me   **Said now:** ⚠ **"do not lose it" — every time, eleven months**',
]));
out.push(note("The second row is the good one and it is worth naming: the manager says the number and waits while it is counted. That is Unit 5.4 and Unit 6.5 in a shop, and it is the only row in the sample where the handover has a check in it. The fourth row — do not lose it, every time, for eleven months — is what a handover becomes when it has no check: a ritual that carries no information."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _The manager gives me the float. She says forty thousand. I count it and I say forty thousand back._'));
out.push(p('⚠ **Count the reports where NOTHING is said.** **It will be about half.** ⚠ **Then ask the useful question: in how many of those does something go wrong once a month?** **The two numbers together make the cycle\'s case and the class supplies both.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Fouad Tarabishi.  **2** Twenty minutes — out at 7.00, back at 7.20.  **3** The long ladder: it has no name and no time, and it is still out.'));
out.push(p('⚠ **Question 2 needs the learner to subtract two times, which is 3.2 coming back.** **And question 3 is the point of the whole page:** **three lines have a name and a time and the fourth has neither, and it is the only thing nobody can find.** **The book works by contrast, not by instruction.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (29 words)', [
  '**BORROWED FROM THE SHOP — APRIL**',
  table(['What', 'Who', 'Out', 'Back'], [
    ['bread knife', 'H. Mourad', '6 Apr 6.30', '✓ 6 Apr 14.00'],
    ['trolley', 'S. Qassar', '6 Apr 7.15', '✓ 6 Apr 8.00'],
    ['order book', 'the manager', '7 Apr 6.00', '✓ 7 Apr 6.40'],
    ['the long cutter', '_(no name)_', '7 Apr ?', '✗ **still out**'],
  ], [2, 1.4, 1.4, 1.6]),
  '⚠ **Three lines have a name and a time. One has neither. H.M.**',
]));
out.push(p('**What to credit.** **A name on every line.** ⚠ **A TIME in both columns, not just a date** — **_out 5 April, back 5 April_ tells you nothing.** ⚠ **And at least one line still out.** **A borrowing book with only the returned things in it is a list of nothing.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "out 6 April, back 6 April". ⚠ **What time? Was it twenty minutes or eight hours?**',
  '**(pointing)** at four ticked lines. ⚠ **Where is the one that is still out? There is always one.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their _still out_ line and the class says who they would ask first.** **If the line has no name on it the answer is _everybody, one at a time_** — **which is the cost, said as a number of conversations.**'));
out.push(stage('7', 'Write freely – sample (33 words)'));
out.push(sample('Sample answer', [
  '**The long cutter went in February. Somebody borrowed it for the boxes and nobody wrote it down. We asked eleven people and bought a new one in March. It cost sixty thousand.**',
]));
out.push(p('⚠ **_We asked eleven people_ is the cost of a missing line, said in people rather than in money**, **and it is the better number of the two.** **Sixty thousand is one purchase; eleven conversations is eleven men stopping work.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Was it written down anywhere?_ — **_No. There is no book. I am going to start one._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: in how many was the borrowing written down?** **Almost none.** ⚠ **Then ask who in the room could start a book on Monday with a sheet of paper and a pen.** **Most of them.** **That is the most actionable thing in Unit 8 and it takes nothing but a decision.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (24 words)', [
  '**WHAT · WHO · OUT · BACK. Bread knife, H. Mourad, 6.30, 14.00. Trolley, S. Qassar, 7.15, 8.00. Cutter, no name, ?, still out.**',
]));

out.push(pb());
// ===================== 8.3 =====================
out.push(h2('8.3  The same question, twice'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Both versions, to the same partner, one after the other, and then ask the PARTNER which they preferred.** **The answer has to come from the person who was asked** — **a learner told that _please_ is better has learned a rule; a learner whose partner says _the second one_ has learned a fact.**'));
out.push(p('**b**  Open. **All three positions are grammatical.** ⚠ **Give all three, then give the house form and say why: at the end, after a comma, one form, stop thinking about it.** **A learner choosing between three positions mid-sentence will drop it altogether.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — the second man, Ammar.   **b**  **1** Ammar said which one and said please; Hani said _tape_.  **2** _It is the same tape. It is not the same two minutes._'));
out.push(p('⚠ **This is the only cycle in the course that proves its point with a clock.** **Same roll of tape, same man behind the counter, four seconds against two minutes.** **Read the dialogue twice and let the class hear Hani waiting.**'));
out.push(p('⚠ **And Majd\'s explanation is the thing to put on the board, because it is about HIM and not about manners:** _He told me which one and he said please. You said "tape."_ ⚠ **A man who is being told something looks for it slowly.** **That is not a moral claim, it is a description of behaviour, and it is much harder to argue with than politeness.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Tape.'],
  ['B', '_(looking)_ … Which tape?'],
  ['A', 'Tape. The tape.'],
  ['C', 'Majd. Can I have the wide brown tape, please?'],
  ['B', 'Here you are.'],
  ['C', 'Thank you.'],
]));
out.push(note("Threes, and the man playing Majd must really search — open a drawer, look on a shelf, take his time. The drill does not work if he hands it over politely. And rotate all three roles, because being the man who waits two minutes is the half of the lesson that cannot be taught any other way."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **Count the seconds, out loud, for both.** **Say both numbers.** **In a performed version it is usually about three seconds against twenty, and the ratio is what matters** — **the class can scale it to a real counter themselves.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — fast and slow', [
  '**Who:** Hala   **How she asks:** _"Samih, can I have the small trolley, please? For the flour."_   **How fast:** straight away',
  '**Who:** the evening man   **How he asks:** _"trolley"_, and he does not look up   **How fast:** ⚠ **he waits, and sometimes he goes and gets it himself**',
]));
out.push(note("Nearly every class produces this pair and it is always the same shape. Do not let it become a complaint about the slow asker: the point is that the difference is two words and twenty seconds of his own time, and he almost certainly does not know. A learner who goes away and tells him has used the unit properly."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _Hala asks: Samih, can I have the small trolley, please. She gets it straight away. The evening man says trolley, and he waits._'));
out.push(p('⚠ **The listener task is the honest one and it should be taken seriously:** **is the difference always _please_, or is it something else?** ⚠ **Sometimes it is.** **Sometimes the fast asker is simply liked, or senior, or a woman in a shop full of men.** **Let the class say so.** **A cycle that claims _please_ explains everything is a cycle the class will stop believing.**'));
out.push(p('**Board clinic:** four requests with no _please_ and no _which one_. ⚠ **Fix all four and read them aloud in their fixed form** — **hearing the good version four times running is the drill.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Because there are two of everything, so _tape_ makes him ask a question.  **2** The right one, and sometimes the whole roll.  **3** _Then I say yes, because I know when I get it back._'));
out.push(p('⚠ **All four reasons on that card are about what MAJD gets, not about what is polite**, **and that is why it is the best-written card in Unit 8.** **A card that says _be polite_ gets ignored by grown men. A card that says _I look faster for a man who is asking_ does not.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (41 words)', [
  '**THE SHOP STORE — HOW TO GET IT FAST**',
  '**1** Say **which one.** ⚠ **because** there are two sizes of everything and I will bring the wrong one.',
  '**2** Say **please.** ⚠ **because** it tells me you are asking, and I stop what I am doing for a man who is asking.',
  '**3** Say **what it is for.** ⚠ **because** then I give you the right size without you knowing which it was.',
  '**4** Say **when it comes back.** ⚠ **because** then I can say yes, instead of saying I will see.',
  '⚠ **Ten seconds or five minutes. Same trolley. Your choice. S.Q.**',
]));
out.push(p('**What to credit.** ⚠ **A reason on every step, and the reason must say what the ASKER gets or what the GIVER does** — **not what is correct.** **A step about which one.** ⚠ **And a last line that is a CHOICE and not an order.** **A card that tells a grown man what to do gets ignored; a card that shows him the price lets him decide.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "Say please because it is polite". ⚠ **What do I GET? Rewrite the because.**',
  '**(pointing)** at the bottom. **(reading)** "Always ask properly". ⚠ **That is an order. Make it a choice with two numbers.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their last line and the class says whether it tells them what to do or lets them choose.** **The class is immediately good at this** — **and a learner who has written an order and heard it called one will not write another.**'));
out.push(stage('7', 'Write freely – sample (33 words)'));
out.push(sample('Sample answer', [
  '**Hala is easy to ask because she answers while she is working. The manager is hard because she asks why, every time, even for a bag. So nobody asks her for anything small.**',
]));
out.push(p('⚠ **_So nobody asks her for anything small_ is the sentence to notice and it is a real cost to a business.** **A person who asks _why_ for a bag has trained a shop not to bring her anything** — **including the things she needs to know about.** **That is 6.7 and 7.7 arriving as a personality rather than as a procedure.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Have you ever asked the hard one and got it?_ — **_Yes, when I said what it was for._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the two counts: is the hard person hard to EVERYBODY, or only to some people?** **Put both numbers up.** ⚠ **Where the answer is _only to some people_, the class has found something real and uncomfortable, and the honest thing is to say so and leave it.** **Unit 8 is not the place to solve it.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (26 words)', [
  '**Samih, can I have the small trolley, please? Hala, can I have the bread knife, please? Majd, can I have the wide brown tape, please? Nour, can I have a pen, please?**',
]));

out.push(pb());
// ===================== 8.4 =====================
out.push(h2('8.4  Sorry, we have not got any'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Listen for whether the Arabic has a WHEN in it.** **Usually not** — **the instinct is to apologise and stop, and the apology is the part the customer does not need.**'));
out.push(p('**b**  **The second line.** ⚠ **Ask what the customer DOES with each.** **With _no_, he goes somewhere else. With _sorry, Thursday_, he either waits or he goes somewhere else and comes back on Thursday.** **One of those is a lost sale and one is a delayed one.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C — he waits, and orders for Thursday.   **b**  **1** When the lorry comes, and what he has instead.  **2** He asks Majd to keep twenty white ones for Thursday at eight.'));
out.push(p('⚠ **Count Majd\'s offers: the brown ones today, OR twenty white kept for Thursday.** **Two alternatives, not one.** **And the customer takes the second** — **which he could not have done if Majd had stopped at _sorry_.**'));
out.push(p('⚠ **And the last line is Unit 6.2 coming back:** _Your name, please._ **A thing kept for nobody is a thing somebody else buys on Wednesday.** **Point back at Unit 6; the class will recognise it.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Twenty of the small white bags.'],
  ['B', 'Sorry, we have not got any. They are out of stock.'],
  ['A', 'None at all?'],
  ['B', 'None at all. The lorry comes on Thursday.'],
  ['A', 'Thursday is three days.'],
  ['B', 'I have the brown ones. Or I keep twenty for you on Thursday.'],
]));
out.push(note("The customer's line Thursday is three days must be played as real impatience, because the third part of the answer only exists to meet it. A pair who play a mild customer never need the instead, and the instead is the half of the cycle that keeps the account."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **The three parts: the no, the when, the instead.** ⚠ **Three, and the third is the one that gets dropped** — **because by then the speaker feels they have answered the question.** **They have. They have not kept the customer.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four times I said no', [
  '**They wanted:** fifty large bags   **The no:** _Sorry, we have not got any._   **The when:** _Thursday._   **The instead:** _Twenty medium today._',
  '**They wanted:** credit until next week   **The no:** _Sorry, I cannot do that._   **The when:** ⚠ **—**   **The instead:** _I will ask the manager and ring you at four._',
  '**They wanted:** white flour, 50kg   **The no:** _Sorry, out of stock._   **The when:** _We do not know._   **The instead:** _Two 25kg, same price per kilo._',
  '**They wanted:** delivery today   **The no:** _Sorry, the van has gone._   **The when:** _Tomorrow at seven._   **The instead:** _Or you take it now in your car._',
]));
out.push(note("The second row is the hardest and the best. There is no when, because the answer is not about stock — and the instead is a promise with a time on it, which is Unit 6.6. A learner who produces that shape for a question about credit has carried a sentence across three units, which is exactly what Book 2 is for."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _He wanted fifty large bags. I said sorry, we have not got any. Thursday. And I offered him twenty medium today._'));
out.push(p('⚠ **Count the reports with all THREE parts.** ⚠ **Then read out a no with only the first part and ask the class what the customer does next.** **They will say _goes to the other shop_, which is the answer and needs no comment from you.**'));
out.push(p('**Board clinic:** four bare _no_ answers. ⚠ **The class adds a _when_ and an _instead_ to each.** **Where there is genuinely no _when_, accept _we do not know — I will ask and ring you_** — **that is the honest version and it is in the sample.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Small brown bags — nineteen in stock.  **2** The 50kg flour sacks — _not known, ask the office_.  **3** The bread trays — say nothing instead, and keep some back.'));
out.push(p('⚠ **Question 3 is the best line on the sheet and the hardest to write:** _nothing. Say nothing instead and keep some back._ **Sometimes the honest answer is that there is no alternative** — **and the sheet says so rather than leaving a blank square, which is the rule from 3.1 and 4.2 for the third time.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (34 words)', [
  '**OUT OF STOCK — WEEK OF 13 APRIL, THE SHOP**',
  table(['What', 'Back when', 'What to offer instead'], [
    ['large white bags', 'Thursday', 'medium white — 20 in stock'],
    ['brown bread', 'tomorrow 6.00', '⚠ **white, and say it is white before you wrap it**'],
    ['50kg flour', '⚠ **not known — ask the manager**', 'two 25kg, same price per kilo'],
    ['Friday cakes', 'Friday only', '⚠ **nothing. Take the name and ring on Thursday.**'],
  ], [1.6, 1.6, 2.6]),
  '⚠ **Every line has a back-when and an instead. Where there is not one, the line says so. H.M.**',
]));
out.push(p('**What to credit.** **A _back when_ and an _instead_ on every line.** ⚠ **NO BLANK SQUARES** — **where there is no answer the line says so, and _not known, ask the manager_ is a complete answer.** ⚠ **And credit a line that offers nothing and says what to do instead**, **which is the hardest one and the one a real shop needs.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** at a blank square. ⚠ **Is there nothing, or did you not think about it? Write which.**',
  '**(pointing)** Here. **(reading)** "white instead". ⚠ **Do you tell them before or after you wrap it?**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their _instead_ column and the class answers as CUSTOMERS: would you accept it?** **That is the only test.** **An instead the class refuses is an instead that will lose the sale anyway, and better found out here.**'));
out.push(stage('7', 'Write freely – sample (32 words)'));
out.push(sample('Sample answer', [
  '**A hotel wanted two hundred rolls on a Friday and we had ninety. I said ninety now and the rest Sunday morning at six. They took the ninety and came back Sunday.**',
]));
out.push(p('⚠ **That is the shape of a successful no and the numbers are what make it one.** **_Ninety now and the rest Sunday at six_ is three facts.** **_Sorry, not enough_ is none, and the hotel would have rung somebody else while the storeman was still apologising.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Did they come back?_ — **_Yes. Sunday at six, and every Friday since._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the two counts: in how many did the customer come back, and in how many of THOSE were they offered something instead?** **The second number is nearly the whole of the first.** ⚠ **Put them side by side.** **It is the clearest piece of arithmetic in Unit 8.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (29 words)', [
  '**Large bags — Thursday — medium today. Brown bread — tomorrow six — white, say so first. 50kg flour — not known, ask — two 25kg. Cakes — Friday only — take the name.**',
]));

out.push(pb());
// ===================== 8.5 =====================
out.push(h2('8.5  Do you want a hand?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect nothing, or a reach for the other end of the box.** **Most help at work is silent and physical, which is fine between two men who know each other and useless with a driver you have never met.**'));
out.push(p('**b**  ***Do you want a hand?*** **is easier to refuse.** ⚠ **Ask why that matters.** **Because a man who does not want help has to take it if the offer was not a question** — **and then you are both doing a one-man job badly.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C — yes, but not for the pallet.   **b**  **1** Moving a full pallet with the truck.  **2** Holding the door open.'));
out.push(p('⚠ **This is the most surprising thing in Unit 8 and it should be read twice:** _Twenty years and the door is still the hard part. The pallet is easy._ ⚠ **The hard part of a job is almost never the heavy part.** **Ask the class for an example from their own work before you read the Lesson B table** — **they will produce one and it will be better than the book\'s.**'));
out.push(p('⚠ **And the conclusion is a QUESTION, not a sentence:** _Ask what the hard part is. Then you help with the right thing._ **Four words that make every other offer in this unit land on the right job.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Fouad. Do you want a hand?'],
  ['B', 'With the pallet? No. I have the truck.'],
  ['A', 'All right.'],
  ['B', 'But the door. Hold the door open. That is the hard part.'],
  ['A', 'The door.'],
  ['B', 'Nobody thinks of the door. Everybody offers to push the pallet.'],
]));
out.push(note("The All right in the middle is worth drilling on its own. The offer was refused and the conversation did not end — and most learners, refused once, go away. Two seconds of silence after a no is what gets you the door, and it has to be practised because the instinct is to fill it or to leave."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Two answers: what the hard part was, and what the offerer thought it would be.** ⚠ **The gap between the two is the cycle.** **Write both on the board for four or five pairs and the pattern is visible in a column.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four jobs: what looks hard, what is hard', [
  '**The job:** carrying flour sacks in   **Looks hard:** the weight   **IS hard:** ⚠ **the step at the door — you cannot see your feet**   **How to help:** stand at the step and take it off me',
  '**The job:** the morning bake   **Looks hard:** the oven   **IS hard:** ⚠ **getting the trays out in order**   **How to help:** call the numbers to me',
  '**The job:** counting the till   **Looks hard:** the counting   **IS hard:** ⚠ **the people waiting**   **How to help:** serve them while I count',
  '**The job:** the Thursday delivery   **Looks hard:** unloading   **IS hard:** ⚠ **checking the note while he waits**   **How to help:** read the note aloud to me',
]));
out.push(note("All four rows have the same shape and it is the shape of the unit: the heavy part is visible and the hard part is cognitive or social — not being able to see your feet, keeping an order in your head, being watched while you count. That is why asking is the only way to find it. Nobody guesses that counting a till is hard because of the queue."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _When I count the till, people think the hard part is the counting. The hard part is really the three people waiting._'));
out.push(p('⚠ **Count the jobs where the hard part is NOT the heavy part.** **It is nearly all of them, and the figure should be said out loud** — **nineteen out of twenty is the kind of result that changes how a room offers help for the rest of the course.**'));
out.push(p('**Board clinic:** four offers, two of them not questions. ⚠ **Turn them into questions.** **Then ask what was gained** — **the other man can say no in one second with nobody embarrassed.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Holding the door open.  **2** Because then nobody loses their place.  **3** _Ask me what the hard part is. Do not guess it._'));
out.push(p('⚠ **Question 2 is the one with the real content in it.** **Two men counting is two men who both lose their place; one counting and one writing is a system.** **That is the same division of labour as 7.2 — one man supplies facts, the other does the thinking** — **and it is worth pointing back at.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (33 words)', [
  '**THE FOUR JOBS THAT NEED TWO — AND WHY**',
  table(['The job', 'What people offer', '⚠ What actually helps'], [
    ['carrying the flour in', 'taking the other end', '**standing at the step and lifting it off me**'],
    ['the morning bake', 'putting trays in', '**calling the tray numbers out while I work**'],
    ['counting the till', 'counting with me', '**serving the queue so nobody watches me**'],
    ['the Thursday delivery', 'unloading', '**reading the note aloud while I count**'],
  ], [1.6, 1.6, 3]),
  '⚠ **Ask me what the hard part is. Do not guess it. H.M.**',
]));
out.push(p('**What to credit.** ⚠ **A middle column — what people WRONGLY offer.** **It is not a joke: it is what the learner will be offered, and writing it down is how they stop being offered it.** ⚠ **A third column that is not the heavy part.** **A reason where the help is not obvious.** **And a line telling people to ask.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** at the third column. **(reading)** "lifting". ⚠ **That is the same as the middle column. What is really hard?**',
  '**(pointing)** Here. **(reading)** "calling the numbers". ⚠ **Why does that help? Write the because.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read one line and the class says whether they would have guessed the third column.** **They will not have, four times out of five** — **and that is the argument for asking, delivered by the room.**'));
out.push(stage('7', 'Write freely – sample (34 words)'));
out.push(sample('Sample answer', [
  '**When I count the till the hard part is the queue, not the money. Nobody knows that. They offer to count with me, which makes it worse because then I start again.**',
]));
out.push(p('⚠ **_Nobody knows that_ is the finding and nearly every learner writes some version of it.** ⚠ **Then the 7P question lands hard: have you ever told anybody?** **Almost nobody has.** **A hard part that has never been named is a hard part that will be helped with wrongly for years.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Have you ever told anybody?_ — **_No. I did not think of it as something you say._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: in how many had the writer NEVER told anybody what the hard part was?** **Almost all.** ⚠ **That is the cheapest fix in Book 2** — **one sentence to one colleague** — **and the class can do it tomorrow.** **Say so and stop there.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (27 words)', [
  '**Carrying flour — the step, not the weight. The bake — the order, not the heat. The till — the queue, not the money. Deliveries — the note, not the lifting.**',
]));

out.push(pb());
// ===================== 8.6 =====================
out.push(h2('8.6  Thank you for the ladder'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Insist on the _for_ and the thing.** **A learner who says _thank you for helping_ has not done it** — **the thing has to be nameable: the ladder, the trolley, the Tuesday count.**'));
out.push(p('**b**  **The second line.** ⚠ **Ask why the other man remembers it.** **Because it proves you noticed.** **_Thanks_ proves nothing, and the other man knows it.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — bringing the ladder in.   **b**  **1** The time, and what it saved him.  **2** _Nobody says what for._ **Twice in two years.**'));
out.push(p('⚠ **The finding in this dialogue is worth more than the grammar and should be read aloud twice:** _People say thank you. Nobody says what for. Two years here and that is the second time._ ⚠ **Samih has been thanked by name twice in two years.** **It costs four words.**'));
out.push(p('⚠ **And Samih\'s deflection is true and worth keeping:** _I was coming in anyway._ **Ammar\'s answer is the model:** _You were coming in anyway and you carried a ladder._ **Accepting the deflection would have ended it; naming the action again is what makes the thanks land.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Samih. Thank you for the ladder this morning.'],
  ['B', 'The ladder?'],
  ['A', 'You brought it in at half past seven. I had shelf four to do.'],
  ['B', 'I was coming in anyway.'],
  ['A', 'You were coming in anyway and you carried a ladder.'],
  ['B', 'Nobody says what for.'],
]));
out.push(note("The B part is the harder role and it should be played straight: a man genuinely brushing it off, not fishing. Then the A part has to say it twice, which is the drill — the first thanks gets deflected and the second one names the action. Learners who only ever get to say it once have practised half of it."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **The thing AND the time.** ⚠ **Both.** **A thanks with a time in it cannot be mistaken for a general kindness** — **it points at one morning.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four people who helped me', [
  '**Who:** Samih   **For what:** bringing the ladder in   **When:** Monday 7.30   **Saved me:** forty minutes and two lifts',
  '**Who:** Hala   **For what:** serving my queue while I counted   **When:** Thursday evening   **Saved me:** counting the till three times',
  '**Who:** the bread driver   **For what:** waiting while I counted the trays   **When:** every morning   **Saved me:** ⚠ **four short deliveries last year that I would have signed for**',
  '**Who:** Nour   **For what:** writing the Homs order out again   **When:** 3 April, four o\'clock   **Saved me:** a wrong delivery',
]));
out.push(note("The third row is the one to read out: the person helping is a driver who could have left, and what he saved is four short deliveries the learner would otherwise have signed for. Unit 5.4 in somebody else's hands. And it is almost certainly never been mentioned to him, which is the whole of this cycle."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _Thank you, Samih, for the ladder on Monday at half past seven. I could not have done shelf four without it._'));
out.push(p('⚠ **Two counts: how many named the THING, and how many said what it SAVED.** **The second is always lower.** **The saving is the hard half because it needs a number or a consequence, and that is exactly why it is the half that gets remembered.**'));
out.push(p('**Board clinic:** four bare thank-yous. ⚠ **Add the thing, then add the saving.** **Read all four aloud in their finished form** — **four good ones in a row is what makes the shape stick.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** The ladder, on 7 April.  **2** 7.30.  **3** About forty minutes.'));
out.push(p('⚠ **Question 3 is the line that makes it a note and not a kindness.** **Somebody can repeat an action that saved forty minutes.** **Nobody can repeat _you were very helpful_** — **and a supervisor reading a number can act on it, which is how a man gets credit for something he did before anybody asked.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (37 words)', [
  '**FOR HALA — 9 APRIL**',
  '**Thank you for serving my queue on Thursday evening.**',
  '**You took the four people at the counter at 6.40 while I was counting.**',
  '**Without it I would have started the count again twice, and gone home at eight instead of seven.**',
  '**That is about an hour.**',
  '**S. Qassar**',
]));
out.push(p('**What to credit.** **The thing, named.** **A time.** **What it saved.** ⚠ **And a NUMBER.** **An hour, forty minutes, four short deliveries, sixty thousand** — **any number at all.** **A note without one is a kindness; a note with one is a record.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "Thank you for your help". ⚠ **Help with what? Name the thing.**',
  '**(pointing)** at the end. **(reading)** "It helped a lot". ⚠ **How much? Give me a number.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their note and the class answers one question: would the person know exactly what they did?** **Exactly.** **A note that could have been written to four different people has not named anything.**'));
out.push(stage('7', 'Write freely – sample (34 words)'));
out.push(sample('Sample answer', [
  '**The bread driver waits every morning while I count the trays. Nobody makes him. Four times last year he waited and the count was short, and I did not sign. I have never thanked him.**',
]));
out.push(p('⚠ **_I have never thanked him_ is how most papers in this stage end, and the homework is built on it.** **Do not moralise.** ⚠ **Send them to do it and ask them next lesson what the person said.** **The answers are always worth hearing and they are the best advertisement the cycle has.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Will you tell them?_ — **_Tomorrow morning. He comes at five._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: how many of these people have NEVER been thanked by name?** **Nearly all.** ⚠ **Take the number and say nothing after it.** **The homework is the comment.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(p('⚠ **This homework is the only one in Book 2 that asks the learner to DO something outside the classroom and report back:** **write the note, give it to the person, and write down what they said.**'));
out.push(sample('Sample answer (26 words)', [
  '**I gave the note to the bread driver at five on Tuesday. He read it twice and put it in his shirt pocket. He said: nobody writes anything down.**',
]));
out.push(note("Ask for these at the start of the next lesson, before anything else, and let three or four learners read what the person said. In every class that has run this homework the answers have been more striking than the book's dialogue, and they are the only evidence a class needs that four words are worth saying."));

out.push(pb());
// ===================== 8.7 =====================
out.push(h2('8.7  Review: the counter'));
out.push(stage('1', 'Get ready – Unit 8 quiz'));
out.push(table(['', 'The answer'], [
  ['**8.1**', '_Majd, can I have the wide brown tape, please?_ ⚠ **name, thing, which one, please**'],
  ['**8.2**', '_Here you are. — Thank you._ **And at four: _Here you are._**'],
  ['**8.3**', '**At the end, after a comma.** ⚠ **It buys you four seconds instead of two minutes.**'],
  ['**8.4**', '_Sorry, we have not got any. Thursday. I have the brown ones._'],
  ['**8.5**', '_Do you want a hand?_ → ⚠ **_What is the hard part?_**'],
  ['**8.6**', '_Thank you for the ladder this morning. That is about forty minutes._'],
], [1, 6]));
out.push(p('⚠ **Tick, do not mark.** **8.5 is the one to listen hardest to** — **a learner who gives only the first question has the polite half and not the useful one.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — he has never said please in eleven years.   **b**  **1** Eleven years, twice a week.  **2** He pays on the day, every time, in cash.'));
out.push(p('⚠ **This is the only mediation in the course where the thing at issue is something the UNIT ITSELF has been teaching.** **Six cycles on asking well, and then a man who has never asked well in eleven years turns out to be the third biggest account in the book.** **That is deliberate and the class should feel the turn.**'));
out.push(p('⚠ **Nour\'s line is the one that changes everything:** _He is not rude. He came from a village where nobody says it. He has told me so._ **Not an excuse — a fact, from the man himself.** ⚠ **And Majd\'s problem is just as real:** _the two new girls will not serve him._ **He cannot order them to and the shop cannot run on one man.**'));
out.push(stage('3', 'Practise'));
out.push(p('**The two sides, and both are true.** ⚠ **Do not let a learner play Abu Fouad.** **He is not in the room and he is not the problem** — **the problem is between Majd, Nour and two members of staff who are not in the dialogue either.** ⚠ **And do not let anybody play Majd as unreasonable.** **Two of his people will not go near the best customer in the shop, and he is away in August.**'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **_Both._** **And then the better question: WHO has the problem?** **The answer is neither of them** — **it is the two girls, who have not been told anything, and they are the only people in this story nobody has spoken to.**'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample('Sample — looks rude, is not', [
  '**What they do:** the delivery man never says good morning, he just starts unloading.   **Why it looks rude:** no greeting, no eye contact.   **What it actually is:** ⚠ **he is deaf in one ear and he knows he mishears, so he does not start conversations.**',
  '**What they do:** a customer points instead of asking.   **Why it looks rude:** pointing.   **What it actually is:** ⚠ **she has no Arabic and no English — she is Kurdish and new** — **and pointing is the only thing that works.**',
]));
out.push(note("Both samples have the same shape and real classes produce it immediately, often about themselves: behaviour that reads as rudeness and is actually a disability, a language, a village, or simple fear. The useful half of the stage is the third column, and it always turns out that somebody knew — and had not told the people who needed to know. That is the resolution of 8.7 arriving from the class's own examples before the book supplies it."));
out.push(stage('4R', 'Mediate and report'));
out.push(p('**The three positions, in full.**'));
out.push(table(['', 'Right about', 'Gives up'], [
  ['**Majd**', '⚠ **two of his staff will not serve the man, he cannot order them to, and the shop cannot run on one man who is away in August**', '**the complaint.** ⚠ **Abu Fouad is not asked to change anything.**'],
  ['**Nour**', '⚠ **third biggest account, cash on the day, eleven years** — **and the rudeness is not rudeness: it is a village where the word is not used, and he has said so himself**', '**silence.** ⚠ **She knows WHY and she has not told the two people who need to know.**'],
  ['**The two girls**', '**they have been served something that looks like contempt, twice a week, and nobody has explained it**', '⚠ **nothing until somebody tells them.** **Then, almost certainly, the refusal.**'],
], [1.4, 4.4, 3.4]));
out.push(p('**Report (sample):**  _Majd is right because two of his staff will not serve the best customer and he is away in August. Nour is right because the man pays cash twice a week and is not being rude. So the shop is polite to him and he is not required to be polite back — and Nour tells the two girls WHY, because she is the one who knows._'));
out.push(p('⚠ **The words to keep:** _he is not rude — he came from a village where nobody says it._'));
out.push(p('⚠ **And the finding, which turns the whole unit sideways and is the point of putting it last.** **Every cycle in Unit 8 has taught that _please_ and _thank you_ buy you time, help and tape.** **They do** — **8.3 proves it with a clock.** ⚠ **AND THEY ARE A LOCAL HABIT, NOT A LAW.** **You say please because it works for you.** **You do not get to require it of a man who has paid cash twice a week since 2015.** ⚠ **A class that leaves this unit using politeness as a stick has learned the technique and missed the lesson** — **and that is a real risk with this unit, which is why the mediation is built to prevent it.**'));
out.push(p('⚠ **One more thing to say out loud, because the class will not say it:** **the people who are owed something here are the two girls, and they are the only ones nobody has talked to.** **Four of the five people in this story have an opinion and two of them have not been given a reason.** **That is Book 1\'s lesson in a new shape: a thing somebody knows and has not said.**'));
out.push(stage('5', 'Read – exam practice'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'B', 'B', 'B', 'A', 'C']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **Question 5 is the small one with the best content:** _bring the empty roll back_ **→** _return it, so more can be ordered_. **A learner who has done 8.2 answers it without reading the options; a learner who has not will choose _throw it away_, which is what everybody actually does.**'));
out.push(p('⚠ **Tell the class what the task is.** **A2 Key Reading Part 1 — eighth time of asking, and by now the room should be finishing it in four minutes.** **Time them once and tell them the figure.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (30 words, four sentences)', [
  '**To:** Majd',
  '**Can I have the long cutter, please? The long one, not the small one. I need it for the Thursday boxes. I will bring it back at four.**',
]));
out.push(table(['Marks', 'For'], [
  ['**1**', '**the thing**'],
  ['**1**', '⚠ **WHICH ONE**'],
  ['**1**', '⚠ **_please_, at the end, after a comma**'],
  ['**1**', '**what it is for**'],
  ['**1**', '⚠ **when it comes back — a TIME**'],
], [1, 5]));
out.push(stage('6P', 'Check together'));
out.push(p('⚠ **Count the sentences out loud, with fingers.** **Four.** **Eighth unit running.** **Most of the room will be doing it unprompted by now; the ones who are not are the ones to sit next to.**'));
out.push(stage('7', 'Write freely – exam practice'));
out.push(p('⚠ **Four sentences, about thirty words, and the last one is when it comes back.** **A request with no return time in it is a request the other man has to decide about** — **and 8.3 says what happens then.**'));
out.push(sample('Sample answer (29 words, four sentences)', [
  '**Hala, can I have the bread knife, please? The long one with the black handle. I need it for the hotel order. I will bring it back washed at two.**',
]));
out.push(stage('✓', 'Marking the unit check'));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'c', 'b', 'b', 'b', 'b', 'a']], [1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(box('Marking the unit check', [
  '**A  Words — 8 marks**, one each. ⚠ **Questions 4 and 5 are the _any_ / _some_ pair and they are the only grammar in the unit:** _we have **not** got **any**_ **against** _I have **some** brown ones_. **Expect one of the two wrong in half the papers** — **the rule is simple and it has had one cycle, not six.** ⚠ **Question 7 is 8.5 and the distractor is _heavy_**, **which is the word the whole unit says is wrong.** **A learner who chooses it has the vocabulary and not the idea.**',
  '**B  Listening — 6 marks**, one each. **The long ladder (1) · the long one, accept "long" (1) · shelf four in the back store (1) · five o\'clock (1) · small white bags (1) · small brown ones, accept "brown" (1).** ⚠ **Items 5 and 6 come in the LAST three lines**, **after the ladder business is settled, and learners who think the recording is about a ladder will have stopped listening.** **Play it three times and say nothing between.**',
  '**C  Reading — 3 marks:** **Fouad Tarabishi (1) · twenty minutes, 7.00 to 7.20 (1) · the long ladder — no name, no time, still out (1).** ⚠ **The second mark needs the subtraction**, **not just the two times copied out.**',
  '**D  Writing — 8 marks:** **four sentences (2) · the thing (1) · which one (1) · _please_ in the right place (1) · what it is for (1) · a return time (2).** ⚠ **The return time is worth two** — **it is the thing that gets a yes, and 8.3 says why.**',
  '**Total 25.** ⚠ **The profile to expect: A split on 4 and 5, B split on items 5 and 6, C split on the subtraction, D high.** ⚠ **D should be high because this unit\'s written task is the easiest in Book 2** — **four short sentences about a thing the learner actually wants.** **If D is not high, the marks are going on _which one_ and the return time, and both are habits rather than English.**',
], C.lteal, C.navy));
out.push(note("Teacher's note. Five things. First, this unit is short and it is not light. Five sentences, four of them three words long, and a man who can say them is a man people help. Nothing in it is difficult and nothing in it is optional, and a teacher who treats it as a breather between Unit 7 and Unit 9 has wasted the most immediately useful ninety minutes in Book 2. Second, 8.3 and the clock. Do not teach please as manners. Teach it as speed: same roll of tape, same man behind the counter, four seconds against two minutes, and Majd's own explanation of why — a man who is being told something looks for it slowly. Run the three-way drill with a Majd who really searches, and rotate all three roles, because being the man who waits is the half that cannot be taught any other way. Third, 8.5 and the door. The hard part of a job is almost never the heavy part, and only the man doing it knows: the step you cannot see your feet over, the order you are keeping in your head, the three people watching you count. Take the 4R figure — how many jobs where the hard part is not the heavy part — and say it out loud, because it is usually nineteen out of twenty and it changes how the room offers help for the rest of the course. Fourth, 8.6's homework, which is the only one in Book 2 that sends the learner out to do something and come back. Write the note, give it to the person, write down what they said. Ask for the answers at the start of the next lesson, before anything else. In every class that has run it the replies have been better than the book's dialogue. Fifth, and this is the one to get right: 8.7 turns the unit against itself on purpose. Six cycles prove that please buys you time and help, and then Abu Fouad has never said it in eleven years, pays cash twice a week, is the third biggest account in the book, and comes from a village where the word is not used. A class that leaves this unit using politeness as a stick has learned the technique and missed the lesson. Say the sentence plainly: you say please because it works for you, and you do not get to require it of a customer. And then point at the two girls, because the class will not — they are the only people in the story nobody has spoken to, and the thing they are owed is a reason."));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 2 · Syria Edition · Unit 8 · Answer Key');
module.exports = out;
