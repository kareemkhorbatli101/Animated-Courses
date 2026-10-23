// Proactive Business English A2 · Syria Edition · Book 1 · END-OF-BOOK TEST (Units 1–12) — Answer key, audio scripts and marking
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, box, dlg, table, C } = L;
const out = [];
const sample = (paras) => box(null, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('END-OF-BOOK TEST  ·  Units 1–12  —  Answer Key'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('Before you mark', [
  'Total **100 marks**: Reading 30 · Writing 30 · Listening 20 · Speaking 20 — the A2 Key weighting (30 · 30 · 20 · 20 per cent), so a percentage here is comparable with a real examination result.',
  'Mark **Reading and Listening** first: they are objective and they take a quarter of an hour. Mark the writing last, when you know what the class as a whole could do.',
  'The four audio scripts are printed in full below. Read each one **twice**, at a normal speed. Do not slow down and do not add a pause that is not written: a candidate who can only follow slow English cannot follow a customer.',
  '⚠ This paper is the **whole book**, and it is marked as the whole book. A candidate who writes good present-tense English and no past tense has not passed Unit 8, whatever the total says — write that on the paper.',
], C.grey, C.navy));

// ================= READING =================
// the series puts a page break before each paper in the key, and one before the
// closing band table, so a teacher can mark one paper with one page in front of them
out.push(pb());
out.push(h2('PAPER 1  ·  READING    (30 marks)'));
out.push(p('**Part 1 · Notices, notes and messages** (6 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6'], [['Answer', 'A', 'B', 'C', 'B', 'A', 'C']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(table(['Q', 'Why'], [
  ['1', '"Two people, every time. No exceptions." — the notice is not advice about care; it is a rule that needs a second person.'],
  ['2', '"say I will call her back before one" — Nadia makes the call, not Nour.'],
  ['3', '"one twice a day, after food" — one tablet, two times, each with a meal.'],
  ['4', 'The 6.45 does not run on Friday, so Friday starts with the 9.15; the other two still run.'],
  ['5', '"Please reply to Nour by Monday" is addressed to everybody, and a reply means yes **or** no.'],
  ['6', '"included in the room price" for breakfast; "extra" for the car.'],
], [0.5, 4]));
out.push(p('**Part 2 · Three colleagues and their week** (7 marks — one each)'));
out.push(table(['Q', '7', '8', '9', '10', '11', '12', '13'], [['Answer', 'A', 'B', 'C', 'B', 'A', 'A', 'C']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**7** Bassel went to Homs and to Hama.  **8** Nadia apologised and re-issued the invoice the same day.  **9** Abu Yasser mustn\'t lift over fifteen kilos alone.  **10** Nadia has a nine o\'clock clinic appointment and is coming in at eleven.  **11** Bassel prefers the bus because he can read the orders on it.  **12** Bassel is staying two nights in Latakia.  **13** Abu Yasser should take a break every hour but forgets.'));
out.push(note('9 and 13 both describe Abu Yasser, and candidates often choose C twice and then change one of them. The difference is **mustn\'t** (a rule, from the injury) against **should** (advice he ignores).'));
out.push(p('**Part 3 · A longer text** (6 marks — one each)'));
out.push(table(['Q', '14', '15', '16', '17', '18', '19'], [['Answer', 'B', 'A', 'C', 'A', 'B', 'C']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**14** "I made every mistake once and wrote each one down."  **15** "I wrote _60 boxes_… which boxes? We have four sizes."  **16** "You are right. I am sorry. I am sending the correct invoice this afternoon."  **17** "I had to make his appointments as well as mine."  **18** "I was not translating in my head any more."  **19** "an apology on Sunday is worth less than an apology on Thursday."'));
out.push(p('**Part 4 · Choose the word** (6 marks — one each)'));
out.push(table(['Q', '20', '21', '22', '23', '24', '25'], [['Answer', 'A', 'C', 'B', 'A', 'C', 'B']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('20 _thank you for_ + **-ing** (Unit 12). 21 _going to_ for a plan already made (Unit 11). 22 _Could you…?_ is the request form; _Should you_ and _Must you_ ask something else (Unit 7). 23 tape is uncountable and the sentence is positive, so _some_ (Unit 4). 24 _sorry **for** + noun_ (Unit 12). 25 present continuous for a fixed diary entry (Unit 7) — _count_ would be a habit, _counted_ the past.'));
out.push(p('**Part 5 · Write one word** (5 marks — one each)'));
out.push(table(['26', '27', '28', '29', '30'], [['**for**', '**is**', '**can\'t / cannot**', '**what**', '**to**']], [1, 1, 1.4, 1, 1]));
out.push(note('27: _my brother is driving me_ — the present continuous for an arrangement; _drives_ is not accepted here, because the sentence is about Thursday. 28: accept _can\'t_ or _cannot_, and accept _won\'t_; do not accept _doesn\'t_. 29: _I don\'t know **what** to bring_ — no other word fits. 30: _give my regards **to**_ is fixed.'));

// ================= WRITING =================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (30 marks)'));
out.push(p('**Part 1 · A short message** (10 marks) — sample answer'));
out.push(sample(['Dear Mr Khalil, I am very sorry. The total on invoice 0611 is wrong: I wrote 1,240,000 and it should be 1,140,000. The mistake is ours, not yours. I am sending the correct invoice this afternoon, and please do not pay the first one. Nour Mansour  _(47 words)_']));
out.push(box('Marking Part 1 (10 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**Task**', '5', 'An **apology** (2) · **what** was wrong, specifically (2) · **what happens next, with a time** (1).'],
    ['**Language**', '3', 'An apology form from Unit 12 used correctly (_I am sorry · I am sorry for…_) · the present continuous or _will_ for the next step · past simple where the mistake is described.'],
    ['**Organisation**', '2', 'A greeting and a name · 25 words or more · the apology **first**, not at the end.'],
  ], [1, 0.7, 4]),
  '⚠ The apology must come **before** the explanation. A message that explains for four lines and apologises in the last one scores 1 of 2 on organisation, however good the English. That order is the whole point of Unit 12.',
  '⚠ "Sorry for the mistake" with no figure and no new invoice scores **2 of 5** on task: the customer still does not know what to pay.',
], C.lyellow, C.orange));
out.push(p('**Part 2 · A hotel email** (20 marks) — sample answer'));
out.push(sample([
  '**Subject:** Room for 14 April, two nights',
  'Dear Sir or Madam, I would like to book a single room with a shower for my colleague, Mr Bassel Nassif. He is arriving on Sunday 14 April in the afternoon and staying two nights.',
  'Is breakfast included in the price? And is there a bus from the hotel to the port in the morning?',
  'Could you confirm the booking and the price by email today? Thank you. Nour Mansour, Sham Trading  _(58 words)_',
]));
out.push(box('Marking Part 2 (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**Task**', '10', 'The **arrival day** (2) · the **number of nights** (2) · the **kind of room** (2) · **two questions** (2, one each) · a request to **confirm** (2).'],
    ['**Language**', '6', '_going to_ or the present continuous for the arrival · _a / an_ and the room words of Unit 11 · two correctly formed **questions** · a polite request form (_Could you…?_) · few errors that slow the reader.'],
    ['**Organisation**', '4', 'A subject line (1) · the facts before the questions (1) · 35–60 words (1) · a close and a name (1).'],
  ], [1, 0.7, 4]),
  '⚠ **Count the questions.** This is the task candidates lose most marks on, and not for grammar: they write a beautiful booking and ask nothing. Two question marks on the page are worth four marks.',
  '⚠ A room booked with no number of nights is not a booking. Mark the task point down even if the dates are given — _arriving on the fourteenth_ does not say when he leaves.',
  '⚠ Over 60 words: do not take marks off for one or two extra. Over about eighty, take the organisation mark for length: at A2 a long email is usually a repeated one.',
], C.lyellow, C.orange));

// ================= LISTENING =================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (20 marks)'));
out.push(p('**Part 1 · Five short conversations** (5 marks — one each)'));
out.push(table(['Q', '31', '32', '33', '34', '35'], [['Answer', 'B', 'A', 'C', 'B', 'A']], [1, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**Part 2 · Complete the travel plan** (6 marks — one each)'));
out.push(table(['36', '37', '38', '39', '40', '41'], [['**Latakia**', '**Sunday**', '**(by) bus**', '**7.15 / quarter past seven**', '**(Al) Nawras**', '**two / 2**']], [1.1, 1, 1, 1.6, 1.2, 1]));
out.push(note('Accept any clear way of writing the time in 39 and the number in 41. Do not accept "the morning" for 39: the line asks for a time. Accept "Hotel Al Nawras" and "Nawras" in 40; a candidate who writes "the same hotel" has not answered.'));
out.push(p('**Part 3 · A telephone call** (5 marks — one each)'));
out.push(table(['Q', '42', '43', '44', '45', '46'], [['Answer', 'B', 'C', 'A', 'C', 'A']], [1, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('43 is the one that separates the class. The shop **is** open on Wednesday — the customer says so. What is missing is a person who can **sign**.'));
out.push(p('**Part 4 · A longer talk** (4 marks — one each)'));
out.push(table(['Q', '47', '48', '49', '50'], [['Answer', 'B', 'A', 'B', 'A']], [1, 0.7, 0.7, 0.7, 0.7]));
out.push(h3('Audio scripts — read each one twice, at a normal speed'));
out.push(dlg('Track ET-1  Five short conversations', [
  ['Nour', 'Mr Ayoub, the supplier meeting is Tuesday at ten, isn\'t it?'],
  ['Mr Ayoub', 'It was. Ms Shamsi can\'t come on Tuesday, so it\'s Thursday now — ten o\'clock, not two. Put it in the diary.'],
  ['Nadia', 'Did you send the invoices on Monday, Nour?'],
  ['Nour', 'No — Wednesday, as always. On Monday I counted the small boxes with Abu Yasser. Nineteen, not a hundred.'],
  ['Nour', 'What did the doctor say about your back?'],
  ['Abu Yasser', 'He didn\'t stop me working — I asked him. He said one thing, and he said it twice: take a break every hour. Lifting with my legs isn\'t the problem; sitting still for four hours is.'],
  ['Nour', 'Bassel, how long are you staying in Latakia? One night?'],
  ['Bassel', 'Two. I\'m seeing six customers, and one day isn\'t enough. I come back on the Tuesday evening.'],
  ['Customer', 'Good morning, it\'s Khalil in Homs. I\'m telephoning about the invoice — and it\'s our fault, not yours. I\'m sorry: we are nine days late with the payment. The money leaves the bank today.'],
]));
out.push(sp());
out.push(dlg('Track ET-2  Nour and Bassel plan a journey', [
  ['Nour', 'Right — the Latakia trip. Which day are you going?'],
  ['Bassel', 'Sunday. Not Saturday: the branch is closed on Saturday.'],
  ['Nour', 'Sunday. Are you driving the van?'],
  ['Bassel', 'No, I\'m going by bus. I can read the orders on the bus; I can\'t read them at the wheel.'],
  ['Nour', 'And the bus leaves at?'],
  ['Bassel', 'Quarter past seven in the morning — seven fifteen. It\'s there before twelve.'],
  ['Nour', 'Hotel? The same one as last time?'],
  ['Bassel', 'The Al Nawras, yes. Breakfast is included and it\'s five minutes from the branch.'],
  ['Nour', 'And how many nights?'],
  ['Bassel', 'Two. Six customers in one day isn\'t possible — I tried it in March.'],
]));
out.push(sp());
out.push(dlg('Track ET-3  A telephone call about a delivery day', [
  ['Customer', 'Sham Trading? It\'s Fouad Tarabishi, the shop in the Souq. Our delivery is Wednesday, isn\'t it?'],
  ['Nour', 'Wednesday morning, yes. Is there a problem?'],
  ['Customer', 'There is. I\'m in Homs on Wednesday and my brother is at the clinic. The shop is open — my nephew is there — but nobody can sign for the goods.'],
  ['Nour', 'Then we don\'t deliver on Wednesday. Could you take it on Tuesday afternoon? The lorry is in the Souq at two.'],
  ['Customer', 'Tuesday afternoon is good. I\'m here all afternoon.'],
  ['Nour', 'One thing. Send me the order number before Tuesday — a message is fine. There are two orders in your name and I don\'t want to bring the wrong one.'],
  ['Customer', 'I\'ll send it this evening. And will you confirm Tuesday?'],
  ['Nour', 'I\'m sending you a message as soon as I put the telephone down. Then you have it in writing.'],
]));
out.push(sp());
out.push(dlg('Track ET-4  Mr Ayoub speaks to the staff', [
  ['Mr Ayoub', 'Three things this morning, and then back to work. First: from next Sunday the trade counter opens at eight, not half past eight. The office is still eight, and the Monday meeting is still half past eight — that doesn\'t change.'],
  ['Mr Ayoub', 'Second: the stock book. Until now the warehouse signed it. From Sunday, anybody who takes anything out of the store room signs it — the office, sales, me. If you take one roll of tape, you sign for one roll of tape.'],
  ['Mr Ayoub', 'Third: mistakes. If you make one, I want to know the same day. Not at the end of the month, and not after the customer telephones me. A mistake found on Thursday costs an apology. The same mistake found on the last day of the month costs a customer.'],
  ['Mr Ayoub', 'And one piece of news. Next month we are going to open a second store room, behind the yard. That is why I am asking everybody about the tape and the wrap. Nobody else is travelling, Bassel — only you, on Sunday.'],
]));

// ================= SPEAKING =================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (20 marks)'));
out.push(p('**Part 1 · About you and your work** (8 marks) — what a good answer sounds like'));
out.push(dlg(null, [
  ['Teacher', 'What are you responsible for? What don\'t you have to do?'],
  ['A', 'I\'m responsible for the telephone, the post and the customer files. I don\'t have to sign the stock book — that\'s the warehouse — and I don\'t have to work on Saturdays.'],
  ['Teacher', 'Tell me about last week. What did you do on Tuesday?'],
  ['A', 'Last week was busy. On Tuesday I sent four orders to suppliers, and in the afternoon I went to the bank with the accountant, because the system was down.'],
  ['Teacher', 'What are you going to do next month?'],
  ['A', 'We\'re going to open a second store room, so I\'m going to move about two hundred files. And I\'m going to Aleppo for two days with my manager.'],
  ['Teacher', 'What is it polite to do when a customer arrives?'],
  ['A', 'It\'s polite to stand up and offer tea, even when he says no. And you never start with the business — you ask about the family first.'],
]));
out.push(note('Every answer gives the fact **and one extra detail**, and the tense follows the question: _don\'t have to_ for the duties, past simple for last week, _going to_ for next month. A candidate who answers all four questions in the present simple has shown you Unit 1 and nothing after it.'));
out.push(p('**Part 2 · Talk together** (12 marks) — what a good discussion sounds like'));
out.push(dlg(null, [
  ['A', 'He\'s arriving at half past nine, so shall we start with the warehouse? Abu Yasser is there in the morning and the yard is quiet before eleven.'],
  ['B', 'Good idea. But we can\'t do the warehouse and the office before lunch — it\'s too much. How about the warehouse at ten and the office at twelve?'],
  ['A', 'That works. Then lunch at one. What do you think about the new restaurant near the bridge?'],
  ['B', 'I\'d rather take him to the old one. It\'s quieter, and we can talk about the order. The new one is loud.'],
  ['A', 'You\'re right. And the prices — he\'s going to ask about the prices. I can\'t agree a discount; Mr Ayoub is away.'],
  ['B', 'Then we don\'t agree anything. We say: we are sending you the prices on Sunday, when Mr Ayoub is back. That\'s honest, and it isn\'t a no.'],
  ['A', 'Agreed. So the email says: half past nine at the office, tea, the warehouse at ten, the office at twelve, lunch at one — and the prices on Sunday.'],
  ['B', 'And at the end, _please give my regards to your brother._ He asked about Mr Ayoub\'s brother in March; he remembers these things.'],
]));
out.push(box('Marking the speaking (20 marks)', [
  table(['', '8–10 marks', '5–7 marks', '0–4 marks'], [
    ['**Grammar and vocabulary** (10)', 'The whole book is in the room: present simple and continuous, past simple, _going to_, _can / could / must / have to / should_, quantities **with units**, and the polite phrases of Unit 12. Work vocabulary is precise.', 'Some good language; stays mostly in the present; repeats the same structures; errors sometimes slow the listener.', 'Very short turns; no past and no future; almost no work vocabulary.'],
    ['**Communication and pronunciation** (10)', 'Clear; answers fully; **asks the partner at least twice**; refuses with a reason **and** an alternative; reaches a decision and states what the email will say.', 'Takes part, but waits to be asked; agrees with everything; a decision is reached late or not stated.', 'Needs a lot of help; hard to understand; no decision.'],
  ], [1.1, 1.6, 1.4, 1.2]),
  '⚠ Listen for the **three tenses**. A pair can talk fluently for three minutes about a visit next week entirely in the present simple. That is a 6, not a 9, however pleasant it sounds.',
  '⚠ The commonest reason a pair stays in the middle band is still **agreeing with everything**. _I\'d rather…_ and _we can\'t, because…_ are the sound of a candidate who has done Units 7 and 12.',
  '⚠ Mark the pair for the **decision**, not for the number of words.',
], C.grey, C.navy));
out.push(pb());
out.push(box('After the test — what the result means and what to do next', [
  '**70–100:** go on to Book 2. A2 Key passes at about seventy per cent on its own scale, so a candidate here is at the examination line as well as at the end of this book.',
  '**50–69:** go on, but name the weakest paper and work it first. Reading low → the exam-practice stage in each cycle 7, done again as homework. Writing low → the Writer\'s boxes of Units 7–12, re-read as a set, then Part 2 again. Listening low → play the unit tracks at full speed, twice, and do not slow down. Speaking low → the problem is nearly always the bare refusal, the missing question to the partner, and the present simple doing the work of three tenses.',
  '**Under 50:** do not start Book 2 yet. Re-teach the four things the whole of Book 2 assumes: the **past simple** (regular and the twelve irregulars of Unit 8), **going to**, **must / have to / should** as three different ideas, and a quantity **with its unit**. Three weeks on those four is worth more than a term of Book 2 on top of them.',
  '⚠ Compare each candidate with their own Mid-Book Test, not only with the class. A candidate who went from 31 to 58 has learned more than one who went from 52 to 61, and the second one is the one to worry about.',
  '⚠ Keep this paper. The first unit of Book 2 opens with Nour training a new colleague, and the quickest way to begin it is to give the class their own sentences from this test to correct.',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · End-of-Book Test — Answer Key');
