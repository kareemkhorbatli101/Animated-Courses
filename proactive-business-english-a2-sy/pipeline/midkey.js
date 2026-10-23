// Proactive Business English A2 · Syria Edition · Book 1 · MID-BOOK TEST (Units 1–6) — Answer key, audio scripts and marking
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, box, dlg, table, C } = L;
const out = [];
const sample = (paras) => box(null, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('MID-BOOK TEST  ·  Units 1–6  —  Answer Key'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('Before you mark', [
  'Total **60 marks**: Reading 18 · Writing 18 · Listening 12 · Speaking 12 — the A2 Key weighting (30 · 30 · 20 · 20 per cent), so a percentage here is comparable with a real examination result.',
  'Mark the **Reading and Listening** first; they are objective and they take ten minutes. Mark the writing last, when you know what the class as a whole could do.',
  'The three audio scripts are printed in full below. Read each one **twice**, at a normal speed. Do not slow down: candidates must learn to ask, not to be given.',
], C.grey, C.navy));

// ================= READING =================
out.push(h2('PAPER 1  ·  READING    (18 marks)'));
out.push(p('**Part 1 · Notices and messages** (6 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6'], [['Answer', 'B', 'A', 'B', 'C', 'C', 'A']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(table(['Q', 'Why'], [
  ['1', '8.30–2.00 on Thursday against 8.30–4.00 on the other days: the counter **shuts early**, it does not open late or close for the day.'],
  ['2', '"Call her **today**" + "she only sends on Tuesdays" — a call tomorrow means waiting a week.'],
  ['3', '"LOW — reorder" is an instruction, not a description.'],
  ['4', '(R) + "do not dispatch" means the line is something the company is **buying**, not sending.'],
  ['5', '"must not obstruct" = do not block it; "park to the left" is the instead.'],
  ['6', 'Both facts are in the notice: free over 300,000 **and** VAT already included.'],
], [0.5, 4]));
out.push(p('**Part 2 · Three colleagues** (4 marks — one each)'));
out.push(table(['Q', '7', '8', '9', '10'], [['Answer', 'B', 'C', 'A', 'C']], [1, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**7** Bassel drives to Homs and works at the market.  **8** Abu Yasser walks the shelves and checks the fast lines every morning.  **9** Nadia finishes at four exactly because her children leave school at half past three.  **10** Abu Yasser writes the numbers in a book **as well as** on the computer.'));
out.push(p('**Part 3 · A longer text** (5 marks — one each)'));
out.push(table(['Q', '11', '12', '13', '14', '15'], [['Answer', 'B', 'A', 'C', 'B', 'A']], [1, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**11** "I was not nervous about the English. I was nervous about the telephone."  **12** "Nadia explains things twice without making you feel small."  **13** "I say _let me repeat that_ before he can put the telephone down."  **14** "the screen says ninety; sometimes the shelf says eighty-six."  **15** "I telephone early rather than late."'));
out.push(p('**Part 4 · Open cloze** (3 marks — one each)'));
out.push(table(['16', '17', '18'], [['**at**', '**are**', '**because**']], [1, 1, 1]));
out.push(note('16: a clock time takes _at_. 17: a plural subject takes _there are_. 18: a reason with a subject and a verb after it takes _because_ — _to_ would need a verb with no subject. Accept no alternatives; each gap has one answer.'));

// ================= WRITING =================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (18 marks)'));
out.push(p('**Part 1 · A short message** (6 marks) — sample answer'));
out.push(sample(['Dear Mr Khalil, I am sorry — your delivery is late. The road is closed at Nasiriyah and the lorry is going round by the old road. It is arriving at four o\'clock, not at two. If four is too late, we can leave the boxes at your brother\'s shop and bring the rest tomorrow morning. Nour  _(52 words)_']));
out.push(box('Marking Part 1 (6 marks)', [
  '**Task (3 marks), one for each point:** the **reason** · the **new time** · **one alternative**.',
  '**Language (2 marks):** present continuous or present simple used consistently; the new time given against the old one (_at four, not at two_) earns the second mark on its own.',
  '**Organisation and length (1 mark):** a greeting and a name; **25 words or more**.',
  '⚠ A message in perfect English that gives no new time scores **2 of 3** on task. The number is the task.',
  '⚠ Do not take a mark off for inventing the customer, the road or the company. Everything here is invented.',
], C.lyellow, C.orange));
out.push(p('**Part 2 · A work email** (12 marks) — sample answer'));
out.push(sample([
  '**Subject:** Order 0418-2 — three items, boxes urgent',
  'Dear Ms Shamsi, Please send: 12 rolls — plastic wrap, wide · 10 packets — A4 paper, white · 60 — small boxes **(urgent)**.',
  'The boxes are urgent because we pack the Homs order on Tuesday morning and we have only nineteen left.',
  'Please deliver to the yard at Mezzeh, not to the trade counter. Could you confirm today that the boxes leave Aleppo on Tuesday morning? If they cannot, we must change our own delivery to Homs.',
  'Thank you. Nour Mansour, extension 212  _(78 words)_',
]));
out.push(box('Marking Part 2 (12 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**Task**', '6', 'Three items, **each with a quantity and a unit** (1 each) · the urgent one named **with a reason** (1) · the delivery **place** (1) · a request to **confirm** (1).'],
    ['**Language**', '4', 'Countable and uncountable handled correctly · _I\'d like / please send_ · a polite request form · few errors that slow the reader.'],
    ['**Organisation**', '2', 'One line or clause per item, in the same order each time · 35 words or more · a close and a name.'],
  ], [1, 0.7, 4]),
  '⚠ **A quantity with no unit scores half a mark**, not none: the candidate has answered and said too little. _60 small boxes_ is a unit; _60_ alone is not.',
  '⚠ The real test: **could a supplier fill this order without telephoning back?** If not, find the missing word — it is almost always the size, the colour or the unit — and mark the task point down.',
], C.lyellow, C.orange));

// ================= LISTENING =================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (12 marks)'));
out.push(p('**Part 1 · Four short conversations** (4 marks — one each)'));
out.push(table(['Q', '19', '20', '21', '22'], [['Answer', 'A', 'B', 'B', 'C']], [1, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**Part 2 · Complete the delivery note** (5 marks — one each)'));
out.push(table(['23', '24', '25', '26', '27'], [['**Homs**', '**(by) lorry**', '**7.00 / seven (o\'clock)**', '**four / 4**', '**212**']], [1.2, 1.2, 1.4, 1, 1]));
out.push(note('Accept any clear way of writing the time in 25 and the number in 26. Do not accept "the morning" for 25 — the note asks for a time.'));
out.push(p('**Part 3 · A longer talk** (3 marks — one each)'));
out.push(table(['Q', '28', '29', '30'], [['Answer', 'C', 'B', 'A']], [1, 0.7, 0.7, 0.7]));
out.push(h3('Audio scripts — read each one twice, at a normal speed'));
out.push(dlg('Track MT-1  Four short conversations', [
  ['Woman', 'What time does the warehouse open? Is it the same as the office?'],
  ['Man', 'No — the warehouse opens at half past seven. The office is eight, and the counter is half past eight.'],
  ['Customer', 'How much are the small boxes?'],
  ['Nour', 'They\'re eight hundred each. If you take a hundred or more, they\'re seven hundred each — seventy thousand for the hundred.'],
  ['Nour', 'And the two folders for Hama? Do they go on the lorry?'],
  ['Abu Yasser', 'Two folders don\'t travel by lorry. They go with a service driver — five thousand, there in two hours.'],
  ['Nour', 'Abu Yasser, have we got any plastic wrap?'],
  ['Abu Yasser', 'None at all. The last roll finished on Sunday. There\'s tape, and there are boxes, but no wrap.'],
]));
out.push(sp());
out.push(dlg('Track MT-2  A telephone call about a delivery', [
  ['Nour', 'Sham Trading, good morning. Nour speaking.'],
  ['Driver', 'Good morning. It\'s Fadi. I\'m taking the Khalil & Sons load tomorrow. Where is it going?'],
  ['Nour', 'To Homs. Khalil & Sons, the shop near the market.'],
  ['Driver', 'Homs. By lorry or by van?'],
  ['Nour', 'By lorry — it\'s nearly two tonnes. You leave at seven o\'clock on Tuesday morning.'],
  ['Driver', 'Seven o\'clock. And how many items on the note?'],
  ['Nour', 'Four items. Count them with the customer before he signs — all four.'],
  ['Driver', 'Four. And if there\'s a problem on the road?'],
  ['Nour', 'Telephone the office straight away, extension two-one-two. Telephone early rather than late.'],
  ['Driver', 'Extension two-one-two. Understood.'],
]));
out.push(sp());
out.push(dlg('Track MT-3  A supervisor talks to a new warehouse worker', [
  ['Abu Yasser', 'Three things, and then you can start. First, the stock. We count the whole warehouse twice a month — on the fifteenth and on the last Thursday. I walk the shelves every morning as well, but the big count is twice a month.'],
  ['Abu Yasser', 'Second. The shelf and the screen are not always the same. The screen says ninety; sometimes the shelf says eighty-six. If they are different, you tell me the same day. Not next week — the same day.'],
  ['Abu Yasser', 'Third. You mustn\'t walk in the yellow square. That is where the forklift works, and the driver cannot see you behind a pallet. If you need to cross the yard, go round by the wall. It is eight steps more. Eight steps is nothing.'],
]));

// ================= SPEAKING =================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (12 marks)'));
out.push(p('**Part 1 · About you and your work** (6 marks) — what a good answer sounds like'));
out.push(dlg(null, [
  ['Teacher', 'What do you do? Who do you report to?'],
  ['A', 'I\'m an administrative assistant at a trading company in Mezzeh. I report to the office manager, Mr Ayoub, but I work with the accountant every day.'],
  ['Teacher', 'What time do you start, and what do you do first?'],
  ['A', 'I start at eight. First I check the email and make a list — then the telephone starts and the list changes.'],
  ['Teacher', 'Tell me about the place where you work.'],
  ['A', 'The office is on the second floor. There are six desks and two filing cabinets. There\'s one printer, but there isn\'t a photocopier — we use the one downstairs.'],
]));
out.push(note('Each answer gives the fact **and one extra detail**. An answer of one clause is not wrong, but it cannot reach the top band: at work, a bare answer is the same as silence.'));
out.push(p('**Part 2 · Talk together** (6 marks) — what a good discussion sounds like'));
out.push(dlg(null, [
  ['A', 'The boxes arrive on Tuesday afternoon and the lorry leaves on Tuesday morning. Why don\'t we send everything on Wednesday?'],
  ['B', 'We can\'t — the customer opens his new branch on Wednesday morning. He needs them on Tuesday evening. Shall we split the order?'],
  ['A', 'Good idea. The paper and the gloves go on Tuesday morning, and the boxes go later. But sixty boxes won\'t fit with a service driver.'],
  ['B', 'You\'re right. What do you think about buying sixty boxes in Homs, just this once?'],
  ['A', 'That works, and it isn\'t expensive — about four thousand more. We buy them there to keep his opening date.'],
  ['B', 'Then we agree: paper and gloves by our lorry, boxes bought in Homs. And we telephone him today, so he knows before he asks.'],
]));
out.push(box('Marking the speaking (12 marks)', [
  table(['', '5–6 marks', '3–4 marks', '0–2 marks'], [
    ['**Grammar and vocabulary** (6)', 'Unit 1–6 language used accurately and in the right place: present simple and continuous, _there is/are_, quantities **with units**, comparatives, _must/mustn\'t_, _because_ and _to_. Work vocabulary is precise.', 'Some good language; repeats the same structures; errors sometimes slow the listener.', 'Very short turns; many errors; almost no work vocabulary.'],
    ['**Communication and pronunciation** (6)', 'Clear; answers fully; **asks the partner at least once**; refuses with a reason and an alternative; reaches a decision and says what the customer will be told.', 'Takes part, but waits to be asked; agrees with everything; a decision is reached late or not stated.', 'Needs a lot of help; hard to understand; no decision.'],
  ], [1.1, 1.6, 1.4, 1.2]),
  '⚠ The commonest reason a pair stays in the middle band is **agreeing with everything**. A candidate who never says _we can\'t, because…_ has not shown the language of Units 4, 5 and 6.',
  '⚠ Mark the pair for the **decision**, not for the number of words. Two minutes of fluent discussion with no decision is a 4, not a 6.',
], C.grey, C.navy));
out.push(sp());
out.push(box('After the test — what to do with the result', [
  '**42–60:** go on to Unit 7. If the weak paper is Speaking, give more of stage 3R and 4R and less board correction.',
  '**30–41:** look at **which** paper. Reading low → the exam-practice stage in each cycle 7. Writing low → the Writer\'s boxes, re-read as a set. Listening low → play the unit tracks again at full speed, twice, and do not slow down. Speaking low → the problem is nearly always the bare refusal and the missing question to the partner.',
  '**Under 30:** do not go on. Re-teach the four things that carry the rest of the book: the **-s** on he/she, _there is / there are_, a quantity **with its unit**, and the three-part polite refusal. Everything after Unit 6 assumes them.',
  '⚠ A candidate who scores well on Reading and badly on Listening is normal at A2 and is not a problem to fix with grammar. It is fixed by hearing more English at normal speed.',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Mid-Book Test — Answer Key');
